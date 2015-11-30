<!doctype html>
<html>
<head>
    <asset:stylesheet src="timeline.css" media="screen, projection"/>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
    <script src="//code.jquery.com/jquery-1.10.2.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <script>
        $(function () {
            $("#figuresSearch").autocomplete({
                source: '${g.createLink(controller: "figure", action: "autocomplete")}',
                minLength: 2,
                select: function (event, ui) {
                    var input = ui.item.label;
                    console.log('selected: ' + input);
                    addFigure(input);
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
                    console.log(input + " // " + figureArray);
                    figureArray.push(input);
                    figureHiddenFieldSelector.val(figureArray);
                    newDiv = document.createElement('div');
                    $('#figureList').append(newDiv);
                    newDiv.innerHTML = '<input type="reset" id="removeFigureButton" value="&#10006" onclick="removeFigure(this)"/>'
                            + input;
                } else {
                    alert(input + ' is already in the list!');
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

        function clearFieldFigureSearchField() {
            document.getElementById('figuresSearch').value = '';
        }

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
        <td valign="top">
            <div>
                <input type="text" id="figuresSearch" name="name" placeholder="Search"/>
                <input type="reset" value="Clear" onclick="clearFieldFigureSearchField();"/>
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

</body>
</html>
