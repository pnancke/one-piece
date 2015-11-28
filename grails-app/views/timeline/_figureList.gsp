<g:each in="${figureInstanceList}" status="i" var="figureInstance">

    <br><% /* <g:link action="show"
                id="${figureInstance.id}">${fieldValue(bean: figureInstance, field: "id")}</g:link> */ %>
    ${fieldValue(bean: figureInstance, field: "figName")}

</g:each>