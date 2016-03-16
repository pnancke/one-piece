<!doctype html>
<html>
<head>
    <asset:javascript src="jquery.min.js"/>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
    <asset:javascript src="jquery-ui.js"/>
    <asset:javascript src="jquery.qtip.min.js"/>
    <asset:javascript src="raphael.js"/>
    <asset:javascript src="TRAVizConnection.js"/>
    <asset:javascript src="TRAVizGraph.js"/>
    <asset:javascript src="TRAVizAligner.js"/>
    <asset:javascript src="TRAViz.js"/>
    <asset:javascript src="TRAVizConfig.js"/>
    <asset:javascript src="jquery.simpletip-1.3.1.min.js"/>
    <asset:stylesheet src="traviz.css" media="screen, projection"/>
    <asset:javascript src="spin.js"/>
    <asset:stylesheet src="timeline.css" media="screen, projection"/>

    <script>
        $(function () {
            $("#figuresSearch").autocomplete({
                source: '${g.createLink(controller: "figure", action: "autocomplete")}',
                minLength: 2,
                select: function (event, ui) {
                    var input = ui.item.label;
                    console.log('selected: ' + input);
                    searchFigure(input);
                    return false;
                }
            });
        });
        var spinner;

        function startSpinner() {
            var opts = {
                lines: 13 // The number of lines to draw
                , length: 28 // The length of each line
                , width: 14 // The line thickness
                , radius: 42 // The radius of the inner circle
                , scale: 0.5 // Scales overall size of the spinner
                , corners: 1 // Corner roundness (0..1)
                , color: '#000' // #rgb or #rrggbb or array of colors
                , opacity: 0.25 // Opacity of the lines
                , rotate: 0 // The rotation offset
                , direction: 1 // 1: clockwise, -1: counterclockwise
                , speed: 1 // Rounds per second
                , trail: 60 // Afterglow percentage
                , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
                , zIndex: 2e9 // The z-index (defaults to 2000000000)
                , className: 'spinner' // The CSS class to assign to the spinner
                , top: '50%' // Top position relative to parent
                , left: '50%' // Left position relative to parent
                , shadow: false // Whether to render a shadow
                , hwaccel: false // Whether to use hardware acceleration
                , position: 'absolute' // Element positioning
            };
            var target = document.getElementById('spinner');
            spinner = new Spinner(opts).spin(target);
        }

        function stopSpinner() {
            spinner.stop();
        }


        function addFigure(info) {
            var figureHiddenFieldSelector = $('#figure_array_hidden');
            var figures = figureHiddenFieldSelector.val();
            var newFigureTd;
            var searchTerm = info['SearchTerm'];
            delete info['SearchTerm'];
            if (figures == undefined || figures == "") {
                figureHiddenFieldSelector.val(searchTerm);
                newFigureTd = document.createElement('td');
                newFigureTd.id = searchTerm;
                $('#figureList').append($(newFigureTd).hide().fadeIn(250));
                newFigureTd.innerHTML = '<div class="figureBox" id="' + searchTerm + '"><input class="remove-figure-button" type="reset" id="removeFigureButton" value="&#10006" onclick="console.log(this); removeFigure(this)"/>'
                        + searchTerm + '</div>';
            } else {
                var figureArray = figureHiddenFieldSelector.val().split(",");
                if ($.inArray(searchTerm, figureArray) == -1) {
                    figureArray.push(searchTerm);
                    figureHiddenFieldSelector.val(figureArray);
                    newFigureTd = document.createElement('td');
                    newFigureTd.id = searchTerm;
                    $('#figureList').append($(newFigureTd).hide().fadeIn(250));
                    newFigureTd.innerHTML = '<div class="figureBox" id="' + searchTerm + '"><input class="remove-figure-button" type="reset" id="removeFigureButton" value="&#10006" onclick="removeFigure(this)"/>'
                            + searchTerm + '</div>';
                }
            }
            var tiptext = "";
            tiptext += '<div id="infoBoxParent" align="center">';
            if (info['Picture'] != null) {
                tiptext += '<img src="' + info['Picture'] + '" alt="" class="photo left" align="middle" style="max-height: 200px; max-width: 100%;"/>';
                delete info['Picture'];
            }
            tiptext += '<div id="infoBoxFacts" align="left">';
            tiptext += "<table>";

            var key;
            for (key in info) {
                tiptext += "<tr>";
                tiptext += "<td style='padding:5px;text-align:left;'>" + key + "</td>";
                tiptext += "<td style='padding:5px;text-align:right;'>" + info[key] + "</td>";
                tiptext += "</tr>";
            }
            tiptext += "</div></div></table>";
            $(document.getElementById(searchTerm)).qtip({
                content: {
                    text: tiptext,
                    title: {
                        text: "<div>" + searchTerm + "</div>"
                    }
                },
                style: {
                    tip: true,
                    border: {width: 0, radius: 1},
                    name: 'dark'
                },
                position: {
                    corner: {
                        target: 'rightMiddle',
                        tooltip: 'leftTop'
                    }
                },
                show: {
                    when: 'click',
                    solo: true
                },
                hide: {
                    when: {
                        event: 'unfocus'
                    }
                }
            });
        }

        function removeFigure(button) {
            var figureHiddenFieldSelector = $('#figure_array_hidden');
            var toRemoveTd = $(button).closest('td');
            var toRemoveFigure = toRemoveTd[0].id;
            console.log("remove figure: " + toRemoveFigure);
            var figureArray = figureHiddenFieldSelector.val().split(",");
            figureArray = jQuery.grep(figureArray, function (value) {
                return value != toRemoveFigure;
            });
            figureHiddenFieldSelector.val(figureArray);
            toRemoveTd.fadeOut(250, function () {
                $(this).remove();
            });
        }

        function setFigureSearchFieldText(s) {
            document.getElementById('figuresSearch').value = s;
        }

        function searchFigure(figureName) {
            if (figureName == null || figureName == "") {
                alert("Please enter a name.")
            } else {
                $.ajax({
                    dataType: "json",
                    url: "${g.createLink(controller: "timeline", action: "getFigureInformation")}?term=" + figureName,
                    success: function (result) {
                        if (result.success == true) {
                            addFigure(result.data);
                            setFigureSearchFieldText("");
                            return false

                        } else {
                            alert(figureName + " doesn't exist.");
                        }
                    },
                    error: function () {
                        alert("Unexpected error while searching for " + figureName);
                    }
                });
            }
        }

        function refreshTraviz() {
            var figureHiddenFieldSelector = $('#figure_array_hidden');
            var figures = figureHiddenFieldSelector.val();
            var episodeStart = $('#episode-range-selector-from').val();
            var episodeEnd = $('#episode-range-selector-to').val();
            var action = $('input[name=travizRadio]:checked', '#travizSelect').val();
            if (figures == null || figures == "") {
                alert("Please select at least one figure.");
            } else {
                startSpinner();
                $.ajax({
                    dataType: "json",
                    url: "/timeline/" + action + "?figures=" + figures + "&start=" + episodeStart + "&end=" + episodeEnd,
                    success: function (result) {
                        if (result == null || result == "[]" || !result.success) {
                            stopSpinner();
                            alert("No episodes found for selected Entities!");
                        } else {
                            var traviz = new TRAViz("containerDiv", {
                                lineBreaks: false,
                                baseColor: '#fffbc4',
                                colors: ["#a1fc38", "#e1fde9", "#968afc", "#67ffb3", "#e2fe4d", "#5F9EA0", "#7BBF6A"],
                                vertexBackground: 'rgba(0, 0, 0, 0.61)',
                                fontSizeMin: 15
                            });
                            var travizData = result.data['traviz'];
                            traviz.align(travizData);
                            console.log("Generating Graph with Traviz...");
                            traviz.visualize();
                            console.log("Graph generation complete.");
                            var similarFigures = result.data['similar'];
                            var figure;
                            $('#suggested-figures-content').text("");
                            for (figure in similarFigures) {
                                $('#suggested-figures-content').append('<div class="suggested-figure">' + figure + ' - ' +
                                        Math.round(similarFigures[figure] * 100) + '&percnt;' + '<br/></div>')
                            }
                            stopSpinner();
                        }
                    },
                    error: function () {
                        stopSpinner();
                        alert("Unexpected error generating graph, please try again! ");
                    }
                });
            }
        }
    </script>
    <title>timeline</title>
</head>

<body>
<header>
    <div id="header" align="center">
        <img src="/assets/header-compressed.png" style="max-width: 40%"/>
    </div>

</header>

<g:if test="${flash.message}">
    <div class="message">${flash.message}</div>
</g:if>
<div class="searchFigures">
    <form class="form-wrapper cf" action="javascript:void(0);">
        <input id="figuresSearch" type="text" placeholder="Search for (Figure) or (Group), e.g. Nami (Figure)" required>
        <button type="submit" onclick="searchFigure(document.getElementById('figuresSearch').value);">Add</button>
    </form>
</div>

<div class="figure-list-wrapper">
    <table class="figures">
        <tr>
            <td valign="top">
                <div id="figureList">
                </div>
            </td>
        </tr>
    </table>
</div>

<input type="hidden" value="" id="figure_array_hidden" title="" autocomplete="off"/>

<div align="center" id="wrapper-traviz-select-similar-figures">
    <div id="traviz-left">
        <form class="traviz-select" id="travizSelect" name="travizSelect" action="javascript:void(0);">
            <input type="radio" id="anime" name="travizRadio" value="travizDataAnime" checked="checked"><label
                for="anime">Anime</label>
            <input type="radio" id="manga" name="travizRadio" value="travizDataManga"><label
                for="manga">Manga</label><br/>
            <label for="episode-range-selector-from">Show from Episode</label><br/><input type="number"
                                                                                          id="episode-range-selector-from"
                                                                                          name="travizEpisodeSelector"
                                                                                          class="episode-range-selector"
                                                                                          value="1"
                                                                                          min="1"
                                                                                          pattern="\d*">
            <label for="episode-range-selector-to">to&nbsp;</label><input type="number" id="episode-range-selector-to"
                                                                          name="travizEpisodeSelector"
                                                                          class="episode-range-selector"
                                                                          value="100"
                                                                          min="1"
                                                                          pattern="\d*"><br/><br/>
            <button type="submit" onclick="refreshTraviz();">Generate Graph</button>
        </form>
    </div>

    <div id="suggested-figures-right">
        <div id="suggested-figures-heading" style="margin-bottom: 15px"
             title="Figures that often appear together with your current selection.">Suggested Figures*<br/></div>

        <div id="suggested-figures-content"></div></div>
</div>
<br/>

<div id="clearing-float"></div>

<div id="containerDiv"></div>

<div id="spinner"></div>
</body>
</html>
