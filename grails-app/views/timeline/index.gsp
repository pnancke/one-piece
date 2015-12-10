<!doctype html>
<html>
<head>
    <asset:javascript src="traviz-min.js"/>
    <asset:stylesheet src="timeline.css" media="screen, projection"/>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <asset:stylesheet src="traviz.css" media="screen, projection"/>
    <script>
        $(function () {
            $("#figuresSearch").autocomplete({
                source: '${g.createLink(controller: "figure", action: "autocomplete")}',
                minLength: 2,
                select: function (event, ui) {
                    var input = ui.item.label;
                    console.log('selected: ' + input);
                    setFigureSearchFieldText(input);
                    return false;
                }
            });
        });

        function addFigure(input) {
            var figureHiddenFieldSelector = $('#figure_array_hidden');
            var figures = figureHiddenFieldSelector.val();
            var newDiv;
            if (figures == undefined || figures == "") {
                figureHiddenFieldSelector.val(input);
                newDiv = document.createElement('div');
                $('#figureList').append(newDiv);
                newDiv.innerHTML = '<input type="reset" id="removeFigureButton" value="&#10006" onclick="removeFigure(this)"/>'
                        + input;
            } else {
                var figureArray = figureHiddenFieldSelector.val().split(",");
                if ($.inArray(input, figureArray) == -1) {
                    figureArray.push(input);
                    figureHiddenFieldSelector.val(figureArray);
                    newDiv = document.createElement('div');
                    $('#figureList').append(newDiv);
                    newDiv.innerHTML = '<input type="reset" id="removeFigureButton" value="&#10006" onclick="removeFigure(this)"/>'
                            + input;
                }
            }
        }

        function removeFigure(button) {
            var figureHiddenFieldSelector = $('#figure_array_hidden');
            var toRemoveDiv = $(button).closest('div');
            var toRemoveFigure = toRemoveDiv[0].innerText;
            console.log("remove figure: " + toRemoveFigure);
            var figureArray = figureHiddenFieldSelector.val().split(",");
            figureArray = jQuery.grep(figureArray, function (value) {
                return value != toRemoveFigure;
            });
            figureHiddenFieldSelector.val(figureArray);
            toRemoveDiv.fadeOut(250, function () {
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
                    url: "${g.createLink(controller: "figure", action: "search")}?figureName=" + figureName,
                    success: function (result) {
                        if (result.success == true) {
                            for (var i = 0; i < result.data.length; i++) {
                                addFigure(result.data[i]);
                            }
                            setFigureSearchFieldText("");
                            return false

                        } else {
                            alert("Figure " + figureName + " doesn't exist.");
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
            var action = $('input[name=travizRadio]:checked', '#travizSelect').val();
            if (figures == null || figures == "") {
                alert("Please select at least one figure.");
            } else {
                $.ajax({
                    url: "/timeline/" + action + "?figures=" + figures,
                    success: function (result) {
                        console.log(result);
                        traviz.align(JSON.parse(result));
                        traviz.visualize();
                    }
                });
            }

        }

        var traviz = new TRAViz("containerDiv", {
            lineBreaks: false
        });

    </script>
    <title>timeline</title>
</head>

<body>

<g:if test="${flash.message}">
    <div class="message">${flash.message}</div>
</g:if>
<br/>
<table class="figures">
    <tr>
        <td>
            Search for figures to add them.
        </td>

        <td>
            Selected figures:
        </td>
    </tr>
    <tr>
        <td valign="top">
            <div>
                <form name="searchFigures" action="javascript:void(0);">
                    <input type="text" id="figuresSearch" name="figureSearch" placeholder="Search"/>
                    <input type="submit" onclick="searchFigure(document.getElementById('figuresSearch').value);"
                           value="Add"/>
                </form>
            </div>
        </td>
        <td valign="top">
            <div id="figureList">
            </div>
        </td>
    </tr>
</table>

<input type="hidden" value="" id="figure_array_hidden" title=""/>
<br/>

<form id="travizSelect" name="travizSelect" action="javascript:void(0);">
    <input type="radio" id="anime" name="travizRadio" value="travizDataAnime" checked="checked"><label
        for="anime">Anime</label><br>
    <input type="radio" id="manga" name="travizRadio" value="travizDataManga"><label for="manga">Manga</label><br>
    <input type="submit" onclick="refreshTraviz();" value="Generate TRAViz"/>
</form>

<div id="containerDiv"></div>
<script type="text/javascript">
    var traviz = new TRAViz("containerDiv", {
        lineBreaks: false
    });
</script>

</body>
</html>
