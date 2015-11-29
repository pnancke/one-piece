<!doctype html>
<html>
<head>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
    <script src="//code.jquery.com/jquery-1.10.2.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <script>
        $(function () {
            $("#figuresSearch").autocomplete({
                source: '${g.createLink(controller: "figure", action: "autocomplete")}',
                minLength: 2,
                select: function (event, ui) {
                    console.log('selected: ' + event + ui);
                }
            });
        });
    </script>
    <script>
        function clearFields() {
            document.getElementById('figuresSearch').value = '';
        }
    </script>
    <title>timeline</title>
</head>

<body>
<h1>One Piece Timeline</h1>

<g:if test="${flash.message}">
    <div class="message">${flash.message}</div>
</g:if>
<br/>

<div>
    <input type="text" id="figuresSearch" name="name" placeholder="Search"/>
    <input type="reset" value="Clear" onclick="clearFields();"/>
</div>

<div id="figureList">
    <g:render template="figureList" model="model"/>
</div>
<br/>

</body>
</html>
