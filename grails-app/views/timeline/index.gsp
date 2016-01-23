<!doctype html>
<html>
<head>
    <asset:javascript src="traviz-min.js"/>
    <asset:javascript src="spin.js"/>
    <asset:stylesheet src="timeline.css" media="screen, projection"/>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
    <asset:javascript src="jquery-ui.js"/>
    <asset:stylesheet src="traviz.css" media="screen, projection"/>
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
                    url: "${g.createLink(controller: "figure", action: "search")}?term=" + figureName,
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
            var action = $('input[name=travizRadio]:checked', '#travizSelect').val();
            if (figures == null || figures == "") {
                alert("Please select at least one figure.");
            } else {
                startSpinner();
                $.ajax({
                    url: "/timeline/" + action + "?figures=" + figures,
                    success: function (result) {
                        stopSpinner();
                        if (result == null || result == "[]") {
                            alert("No episodes found for selected Entities!")
                        } else {
                            traviz = new TRAViz("containerDiv", {
                                lineBreaks: false
                            });
                            console.log("traviz data" + result);
                            traviz.align(JSON.parse(result));
                            console.log("Generating Graph with Traviz...");
                            traviz.visualize();
                            console.log("Graph generation complete.");
                        }
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
		<div class="message">
			${flash.message}
		</div>
	</g:if>
	<br>
	<form class="figures">

		<table>
			<tr>
				<td>
					<fieldset>
						<legend>Search for figures to add them:</legend>
						<div>
							<form name="searchFigures" action="javascript:void(0);">
								<input type="text" id="figuresSearch" name="figureSearch"
									placeholder="Search" /> <input type="submit"
									onclick="searchFigure(document.getElementById('figuresSearch').value);"
									value="Add" />
							</form>
						</div>
					</fieldset>
				</td>
				<td>
					<fieldset>
						<legend>Selected figures:</legend>
						<div id="figureList"></div>
					</fieldset>
				</td>
			</tr>
		</table>

	</form>

	<input type="hidden" value="" id="figure_array_hidden" title="" />
	<br />

	<form id="travizSelect" name="travizSelect"
		action="javascript:void(0);">
		<input type="radio" id="anime" name="travizRadio"
			value="travizDataAnime" checked="checked"><label for="anime">Anime</label>
		<input type="radio" id="manga" name="travizRadio"
			value="travizDataManga"> <label for="manga">Manga</label> <br>
		<br />
		<hr>
		<br /> <input type="submit" onclick="refreshTraviz();"
			value="Generate TRAViz" />

		<div id="containerDiv"></div>
		<br></br>
		<fieldset>
			<table>
				<tr>
					<td>
						<div id="divPicture">Picture</div>
					</td>
					<td>
						<div id="divInformation">Information</div>
					</td>
				</tr>
			</table>
		</fieldset>
	</form>

	<script type="text/javascript">
	var traviz = new TRAViz("containerDiv", {
		lineBreaks: false
    });
	</script>

	<div id="spinner"></div>

</body>
</html>
