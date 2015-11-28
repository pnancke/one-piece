<!doctype html>
<html>
<head>
    <title>timeline</title>
</head>

<body>
<h1>One Piece Timeline</h1>

<g:if test="${flash.message}">
    <div class="message">${flash.message}</div>
</g:if>
<br/>

<div class="filters">
    <g:form action="index">

        <p><label for="name">Name</label>
            <g:textField name="name" value="${filters?.name}"/>

            <g:submitButton name="search" value="Search"/></p>

    </g:form>
</div>
<br/>

<div id="figureList">
    <g:render template="figureList" model="model"/>
</div>
<br/>

</body>
</html>
