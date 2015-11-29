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
                    console.log('selected: ' + ui.item.label);
                    addFigure(ui.item.label)
                }
            });
        });
        Element.prototype.remove = function () {
            this.parentElement.removeChild(this);
        };
        NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
            for (var i = this.length - 1; i >= 0; i--) {
                if (this[i] && this[i].parentElement) {
                    this[i].parentElement.removeChild(this[i]);
                }
            }
        };

        function addFigure(input) {
            $('#figureList').append("<div class='figure-" + new Date().getTime().toString() + "'>" + input +
                    ' <input type="reset" id="removeFigureButton" value="&#10006" onclick="removeDiv(this)"/></div></br>');
        }
        function removeDiv(button) {
            $(button).closest('div').remove();
        }

        function clearFields() {
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
<table class="figures" style="padding: 12px 120px 12px 12px">
    <tr>
        <td valign="top">
            <div>
                <input type="text" id="figuresSearch" name="name" placeholder="Search"/>
                <input type="reset" value="Clear" onclick="clearFields();"/>
            </div>
        </td>
        <td valign="top">
            <div id="figureList">
            </div>
        </td>
    </tr>
</table>



<br/>

</body>
</html>
