/* jQuery v1.7.2 jquery.com | jquery.org/license */
(function (a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cu(a) {
        if (!cj[a]) {
            var b = c.body, d = f("<" + a + ">").appendTo(b), e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ck || (ck = c.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0), b.appendChild(ck);
                if (!cl || !ck.createElement) {
                    cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), cl.close()
                }
                d = cl.createElement(a), cl.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ck)
            }
            cj[a] = e
        }
        return cj[a]
    }

    function ct(a, b) {
        var c = {};
        f.each(cp.concat.apply([], cp.slice(0, b)), function () {
            c[this] = a
        });
        return c
    }

    function cs() {
        cq = b
    }

    function cr() {
        setTimeout(cs, 0);
        return cq = f.now()
    }

    function ci() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    function ch() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function cb(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1) {
                for (h in a.converters) {
                    typeof h == "string" && (e[h.toLowerCase()] = a.converters[h])
                }
            }
            l = k, k = d[g];
            if (k === "*") {
                k = l
            } else {
                if (l !== "*" && l !== k) {
                    m = l + " " + k, n = e[m] || e["* " + k];
                    if (!n) {
                        p = b;
                        for (o in e) {
                            j = o.split(" ");
                            if (j[0] === l || j[0] === "*") {
                                p = e[j[1] + " " + k];
                                if (p) {
                                    o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                    break
                                }
                            }
                        }
                    }
                    !n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
                }
            }
        }
        return c
    }

    function ca(a, c, d) {
        var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k;
        for (i in g) {
            i in d && (c[g[i]] = d[i])
        }
        while (f[0] === "*") {
            f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"))
        }
        if (h) {
            for (i in e) {
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
            }
        }
        if (f[0] in d) {
            j = f[0]
        } else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function b_(a, b, c, d) {
        if (f.isArray(b)) {
            f.each(b, function (b, e) {
                c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
            })
        } else {
            if (!c && f.type(b) === "object") {
                for (var e in b) {
                    b_(a + "[" + e + "]", b[e], c, d)
                }
            } else {
                d(a, b)
            }
        }
    }

    function b$(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) {
            c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d])
        }
        e && f.extend(!0, a, e)
    }

    function bZ(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f], i = 0, j = h ? h.length : 0, k = a === bS, l;
        for (; i < j && (k || !l); i++) {
            l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g)))
        }
        (k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
        return l
    }

    function bY(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bO), e = 0, g = d.length, h, i, j;
                for (; e < g; e++) {
                    h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
                }
            }
        }
    }

    function bB(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight, e = b === "width" ? 1 : 0, g = 4;
        if (d > 0) {
            if (c !== "border") {
                for (; e < g; e += 2) {
                    c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0
                }
            }
            return d + "px"
        }
        d = by(a, b);
        if (d < 0 || d == null) {
            d = a.style[b]
        }
        if (bt.test(d)) {
            return d
        }
        d = parseFloat(d) || 0;
        if (c) {
            for (; e < g; e += 2) {
                d += parseFloat(f.css(a, "padding" + bx[e])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0)
            }
        }
        return d + "px"
    }

    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b), b.innerHTML = a.outerHTML;
        return b.firstChild
    }

    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }

    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio") {
            a.defaultChecked = a.checked
        }
    }

    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bk(a, b) {
        var c;
        b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached"))
    }

    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a), h = f._data(b, g), i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i) {
                    for (d = 0, e = i[c].length; d < e; d++) {
                        f.event.add(b, c, i[c][d])
                    }
                }
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }

    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function U(a) {
        var b = V.split("|"), c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop())
            }
        }
        return c
    }

    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) {
            return f.grep(a, function (a, d) {
                var e = !!b.call(a, d, a);
                return e === c
            })
        }
        if (b.nodeType) {
            return f.grep(a, function (a, d) {
                return a === b === c
            })
        }
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (O.test(b)) {
                return f.filter(b, d, !c)
            }
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function K() {
        return !0
    }

    function J() {
        return !1
    }

    function n(a, b, c) {
        var d = b + "defer", e = b + "queue", g = b + "mark", h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) {
                continue
            }
            if (b !== "toJSON") {
                return !1
            }
        }
        return !0
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {
                }
                f.data(a, c, d)
            } else {
                d = b
            }
        }
        return d
    }

    function h(a) {
        var b = g[a] = {}, c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) {
            b[a[c]] = !0
        }
        return b
    }

    var c = a.document, d = a.navigator, e = a.location, f = function () {
        function J() {
            if (!e.isReady) {
                try {
                    c.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(J, 1);
                    return
                }
                e.ready()
            }
        }

        var e = function (a, b) {
            return new e.fn.init(a, b, h)
        }, f = a.jQuery, g = a.$, h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/, m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, n = /^[\],:{}\s]*$/, o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, q = /(?:^|:|,)(?:\s*\[)+/g, r = /(webkit)[ \/]([\w.]+)/, s = /(opera)(?:.*version)?[ \/]([\w.]+)/, t = /(msie) ([\w.]+)/, u = /(mozilla)(?:.*? rv:([\w.]+))?/, v = /-([a-z]|[0-9])/ig, w = /^-ms-/, x = function (a, b) {
            return (b + "").toUpperCase()
        }, y = d.userAgent, z, A, B, C = Object.prototype.toString, D = Object.prototype.hasOwnProperty, E = Array.prototype.push, F = Array.prototype.slice, G = String.prototype.trim, H = Array.prototype.indexOf, I = {};
        e.fn = e.prototype = {
            constructor: e, init: function (a, d, f) {
                var g, h, j, k;
                if (!a) {
                    return this
                }
                if (a.nodeType) {
                    this.context = this[0] = a, this.length = 1;
                    return this
                }
                if (a === "body" && !d && c.body) {
                    this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                    return this
                }
                if (typeof a == "string") {
                    a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                    if (g && (g[1] || !d)) {
                        if (g[1]) {
                            d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                            return e.merge(this, a)
                        }
                        h = c.getElementById(g[2]);
                        if (h && h.parentNode) {
                            if (h.id !== g[2]) {
                                return f.find(a)
                            }
                            this.length = 1, this[0] = h
                        }
                        this.context = c, this.selector = a;
                        return this
                    }
                    return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                }
                if (e.isFunction(a)) {
                    return f.ready(a)
                }
                a.selector !== b && (this.selector = a.selector, this.context = a.context);
                return e.makeArray(a, this)
            }, selector: "", jquery: "1.7.2", length: 0, size: function () {
                return this.length
            }, toArray: function () {
                return F.call(this, 0)
            }, get: function (a) {
                return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
            }, pushStack: function (a, b, c) {
                var d = this.constructor();
                e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                return d
            }, each: function (a, b) {
                return e.each(this, a, b)
            }, ready: function (a) {
                e.bindReady(), A.add(a);
                return this
            }, eq: function (a) {
                a = +a;
                return a === -1 ? this.slice(a) : this.slice(a, a + 1)
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, slice: function () {
                return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
            }, map: function (a) {
                return this.pushStack(e.map(this, function (b, c) {
                    return a.call(b, c, b)
                }))
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: E, sort: [].sort, splice: [].splice
        }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
            var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
            typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
            for (; j < k; j++) {
                if ((a = arguments[j]) != null) {
                    for (c in a) {
                        d = i[c], f = a[c];
                        if (i === f) {
                            continue
                        }
                        l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                    }
                }
            }
            return i
        }, e.extend({
            noConflict: function (b) {
                a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                return e
            }, isReady: !1, readyWait: 1, holdReady: function (a) {
                a ? e.readyWait++ : e.ready(!0)
            }, ready: function (a) {
                if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                    if (!c.body) {
                        return setTimeout(e.ready, 1)
                    }
                    e.isReady = !0;
                    if (a !== !0 && --e.readyWait > 0) {
                        return
                    }
                    A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
                }
            }, bindReady: function () {
                if (!A) {
                    A = e.Callbacks("once memory");
                    if (c.readyState === "complete") {
                        return setTimeout(e.ready, 1)
                    }
                    if (c.addEventListener) {
                        c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1)
                    } else {
                        if (c.attachEvent) {
                            c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
                            var b = !1;
                            try {
                                b = a.frameElement == null
                            } catch (d) {
                            }
                            c.documentElement.doScroll && b && J()
                        }
                    }
                }
            }, isFunction: function (a) {
                return e.type(a) === "function"
            }, isArray: Array.isArray || function (a) {
                return e.type(a) === "array"
            }, isWindow: function (a) {
                return a != null && a == a.window
            }, isNumeric: function (a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            }, type: function (a) {
                return a == null ? String(a) : I[C.call(a)] || "object"
            }, isPlainObject: function (a) {
                if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) {
                    return !1
                }
                try {
                    if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) {
                        return !1
                    }
                } catch (c) {
                    return !1
                }
                var d;
                for (d in a) {
                }
                return d === b || D.call(a, d)
            }, isEmptyObject: function (a) {
                for (var b in a) {
                    return !1
                }
                return !0
            }, error: function (a) {
                throw new Error(a)
            }, parseJSON: function (b) {
                if (typeof b != "string" || !b) {
                    return null
                }
                b = e.trim(b);
                if (a.JSON && a.JSON.parse) {
                    return a.JSON.parse(b)
                }
                if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) {
                    return (new Function("return " + b))()
                }
                e.error("Invalid JSON: " + b)
            }, parseXML: function (c) {
                if (typeof c != "string" || !c) {
                    return null
                }
                var d, f;
                try {
                    a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                } catch (g) {
                    d = b
                }
                (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                return d
            }, noop: function () {
            }, globalEval: function (b) {
                b && j.test(b) && (a.execScript || function (b) {
                    a.eval.call(a, b)
                })(b)
            }, camelCase: function (a) {
                return a.replace(w, "ms-").replace(v, x)
            }, nodeName: function (a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            }, each: function (a, c, d) {
                var f, g = 0, h = a.length, i = h === b || e.isFunction(a);
                if (d) {
                    if (i) {
                        for (f in a) {
                            if (c.apply(a[f], d) === !1) {
                                break
                            }
                        }
                    } else {
                        for (; g < h;) {
                            if (c.apply(a[g++], d) === !1) {
                                break
                            }
                        }
                    }
                } else {
                    if (i) {
                        for (f in a) {
                            if (c.call(a[f], f, a[f]) === !1) {
                                break
                            }
                        }
                    } else {
                        for (; g < h;) {
                            if (c.call(a[g], g, a[g++]) === !1) {
                                break
                            }
                        }
                    }
                }
                return a
            }, trim: G ? function (a) {
                return a == null ? "" : G.call(a)
            } : function (a) {
                return a == null ? "" : (a + "").replace(k, "").replace(l, "")
            }, makeArray: function (a, b) {
                var c = b || [];
                if (a != null) {
                    var d = e.type(a);
                    a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                }
                return c
            }, inArray: function (a, b, c) {
                var d;
                if (b) {
                    if (H) {
                        return H.call(b, a, c)
                    }
                    d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                    for (; c < d; c++) {
                        if (c in b && b[c] === a) {
                            return c
                        }
                    }
                }
                return -1
            }, merge: function (a, c) {
                var d = a.length, e = 0;
                if (typeof c.length == "number") {
                    for (var f = c.length; e < f; e++) {
                        a[d++] = c[e]
                    }
                } else {
                    while (c[e] !== b) {
                        a[d++] = c[e++]
                    }
                }
                a.length = d;
                return a
            }, grep: function (a, b, c) {
                var d = [], e;
                c = !!c;
                for (var f = 0, g = a.length; f < g; f++) {
                    e = !!b(a[f], f), c !== e && d.push(a[f])
                }
                return d
            }, map: function (a, c, d) {
                var f, g, h = [], i = 0, j = a.length, k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                if (k) {
                    for (; i < j; i++) {
                        f = c(a[i], i, d), f != null && (h[h.length] = f)
                    }
                } else {
                    for (g in a) {
                        f = c(a[g], g, d), f != null && (h[h.length] = f)
                    }
                }
                return h.concat.apply([], h)
            }, guid: 1, proxy: function (a, c) {
                if (typeof c == "string") {
                    var d = a[c];
                    c = a, a = d
                }
                if (!e.isFunction(a)) {
                    return b
                }
                var f = F.call(arguments, 2), g = function () {
                    return a.apply(c, f.concat(F.call(arguments)))
                };
                g.guid = a.guid = a.guid || g.guid || e.guid++;
                return g
            }, access: function (a, c, d, f, g, h, i) {
                var j, k = d == null, l = 0, m = a.length;
                if (d && typeof d == "object") {
                    for (l in d) {
                        e.access(a, c, l, d[l], 1, h, f)
                    }
                    g = 1
                } else {
                    if (f !== b) {
                        j = i === b && e.isFunction(f), k && (j ? (j = c, c = function (a, b, c) {
                            return j.call(e(a), c)
                        }) : (c.call(a, f), c = null));
                        if (c) {
                            for (; l < m; l++) {
                                c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i)
                            }
                        }
                        g = 1
                    }
                }
                return g ? a : k ? c.call(a) : m ? c(a[0], d) : h
            }, now: function () {
                return (new Date).getTime()
            }, uaMatch: function (a) {
                a = a.toLowerCase();
                var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                return {browser: b[1] || "", version: b[2] || "0"}
            }, sub: function () {
                function a(b, c) {
                    return new a.fn.init(b, c)
                }

                e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                    f && f instanceof e && !(f instanceof a) && (f = a(f));
                    return e.fn.init.call(this, d, f, b)
                }, a.fn.init.prototype = a.fn;
                var b = a(c);
                return a
            }, browser: {}
        }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
            I["[object " + b + "]"] = b.toLowerCase()
        }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function () {
            c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
        } : c.attachEvent && (B = function () {
            c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
        });
        return e
    }(), g = {};
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a) : {};
        var c = [], d = [], e, i, j, k, l, m, n = function (b) {
            var d, e, g, h, i;
            for (d = 0, e = b.length; d < e; d++) {
                g = b[d], h = f.type(g), h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
            }
        }, o = function (b, f) {
            f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m = k || 0, k = 0, l = c.length;
            for (; c && m < l; m++) {
                if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                    e = !0;
                    break
                }
            }
            j = !1, c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])))
        }, p = {
            add: function () {
                if (c) {
                    var a = c.length;
                    n(arguments), j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1]))
                }
                return this
            }, remove: function () {
                if (c) {
                    var b = arguments, d = 0, e = b.length;
                    for (; d < e; d++) {
                        for (var f = 0; f < c.length; f++) {
                            if (b[d] === c[f]) {
                                j && f <= l && (l--, f <= m && m--), c.splice(f--, 1);
                                if (a.unique) {
                                    break
                                }
                            }
                        }
                    }
                }
                return this
            }, has: function (a) {
                if (c) {
                    var b = 0, d = c.length;
                    for (; b < d; b++) {
                        if (a === c[b]) {
                            return !0
                        }
                    }
                }
                return !1
            }, empty: function () {
                c = [];
                return this
            }, disable: function () {
                c = d = e = b;
                return this
            }, disabled: function () {
                return !c
            }, lock: function () {
                d = b, (!e || e === !0) && p.disable();
                return this
            }, locked: function () {
                return !d
            }, fireWith: function (b, c) {
                d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
                return this
            }, fire: function () {
                p.fireWith(this, arguments);
                return this
            }, fired: function () {
                return !!i
            }
        };
        return p
    };
    var i = [].slice;
    f.extend({
        Deferred: function (a) {
            var b = f.Callbacks("once memory"), c = f.Callbacks("once memory"), d = f.Callbacks("memory"), e = "pending", g = {
                resolve: b,
                reject: c,
                notify: d
            }, h = {
                done: b.add, fail: c.add, progress: d.add, state: function () {
                    return e
                }, isResolved: b.fired, isRejected: c.fired, then: function (a, b, c) {
                    i.done(a).fail(b).progress(c);
                    return this
                }, always: function () {
                    i.done.apply(i, arguments).fail.apply(i, arguments);
                    return this
                }, pipe: function (a, b, c) {
                    return f.Deferred(function (d) {
                        f.each({done: [a, "resolve"], fail: [b, "reject"], progress: [c, "notify"]}, function (a, b) {
                            var c = b[0], e = b[1], g;
                            f.isFunction(c) ? i[a](function () {
                                g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                            }) : i[a](d[e])
                        })
                    }).promise()
                }, promise: function (a) {
                    if (a == null) {
                        a = h
                    } else {
                        for (var b in h) {
                            a[b] = h[b]
                        }
                    }
                    return a
                }
            }, i = h.promise({}), j;
            for (j in g) {
                i[j] = g[j].fire, i[j + "With"] = g[j].fireWith
            }
            i.done(function () {
                e = "resolved"
            }, c.disable, d.lock).fail(function () {
                e = "rejected"
            }, b.disable, d.lock), a && a.call(i, i);
            return i
        }, when: function (a) {
            function m(a) {
                return function (b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
                }
            }

            function l(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
                }
            }

            var b = i.call(arguments, 0), c = 0, d = b.length, e = Array(d), g = d, h = d, j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(), k = j.promise();
            if (d > 1) {
                for (; c < d; c++) {
                    b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g
                }
                g || j.resolveWith(j, b)
            } else {
                j !== a && j.resolveWith(j, d ? [a] : [])
            }
            return k
        }
    }), f.support = function () {
        var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"), q = c.documentElement;
        p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = p.getElementsByTagName("*"), e = p.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) {
            return {}
        }
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = p.getElementsByTagName("input")[0], b = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!c.createElement("form").enctype,
            html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, f.boxModel = b.boxModel = c.compatMode === "CSS1Compat", i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete p.test
        } catch (r) {
            b.deleteExpando = !1
        }
        !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function () {
            b.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), p.appendChild(i), j = c.createDocumentFragment(), j.appendChild(p.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, j.removeChild(i), j.appendChild(p);
        if (p.attachEvent) {
            for (n in {submit: 1, change: 1, focusin: 1}) {
                m = "on" + n, o = m in p, o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"), b[n + "Bubbles"] = o
            }
        }
        j.removeChild(p), j = g = h = p = i = null, f(function () {
            var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0];
            !u || (m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div><table " + n + "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {marginRight: 0}).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {
                doesNotAddBorder: g.offsetTop !== 5,
                doesAddBorderForTableAndCells: i.offsetTop === 5
            }, g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {marginTop: 0}).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j))
        });
        return b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/, k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },
        data: function (a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g, h, i, j = f.expando, k = typeof c == "string", l = a.nodeType, m = l ? f.cache : a, n = l ? a[j] : a[j] && j, o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) {
                    return
                }
                n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") {
                    e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c)
                }
                g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c]) {
                    return g.events
                }
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function (a, b, c) {
            if (!!f.acceptData(a)) {
                var d, e, g, h = f.expando, i = a.nodeType, j = i ? f.cache : a, k = i ? a[h] : h;
                if (!j[k]) {
                    return
                }
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0, g = b.length; e < g; e++) {
                            delete d[b[e]]
                        }
                        if (!(c ? m : f.isEmptyObject)(d)) {
                            return
                        }
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) {
                        return
                    }
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            }
        },
        _data: function (a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) {
                    return b !== !0 && a.getAttribute("classid") === b
                }
            }
            return !0
        }
    }), f.fn.extend({
        data: function (a, c) {
            var d, e, g, h, i, j = this[0], k = 0, m = null;
            if (a === b) {
                if (this.length) {
                    m = f.data(j);
                    if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
                        g = j.attributes;
                        for (i = g.length; k < i; k++) {
                            h = g[k].name, h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]))
                        }
                        f._data(j, "parsedAttrs", !0)
                    }
                }
                return m
            }
            if (typeof a == "object") {
                return this.each(function () {
                    f.data(this, a)
                })
            }
            d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!";
            return f.access(this, function (c) {
                if (c === b) {
                    m = this.triggerHandler("getData" + e, [d[0]]), m === b && j && (m = f.data(j, a), m = l(j, a, m));
                    return m === b && d[1] ? this.data(d[0]) : m
                }
                d[1] = c, this.each(function () {
                    var b = f(this);
                    b.triggerHandler("setData" + e, d), f.data(this, a, c), b.triggerHandler("changeData" + e, d)
                })
            }, null, c, arguments.length > 1, null, !1)
        }, removeData: function (a) {
            return this.each(function () {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function (a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        }, _unmark: function (a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark", e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        }, queue: function (a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = f.queue(a, b), d = c.shift(), e = {};
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function () {
                f.dequeue(a, b)
            }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function (a, c) {
            var d = 2;
            typeof a != "string" && (c = a, a = "fx", d--);
            if (arguments.length < d) {
                return f.queue(this[0], a)
            }
            return c === b ? this : this.each(function () {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                f.dequeue(this, a)
            })
        }, delay: function (a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }

            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark", l;
            while (g--) {
                if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) {
                    h++, l.add(m)
                }
            }
            m();
            return d.promise(c)
        }
    });
    var o = /[\n\t\r]/g, p = /\s+/, q = /\r/g, r = /^(?:button|input)$/i, s = /^(?:button|input|object|select|textarea)$/i, t = /^a(?:rea)?$/i, u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, v = f.support.getSetAttribute, w, x, y;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, f.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        }, prop: function (a, b) {
            return f.access(this, f.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            a = f.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {
                }
            })
        }, addClass: function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    f(this).addClass(a.call(this, b, this.className))
                })
            }
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1) {
                        if (!e.className && b.length === 1) {
                            e.className = a
                        } else {
                            g = " " + e.className + " ";
                            for (h = 0, i = b.length; h < i; h++) {
                                ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ")
                            }
                            e.className = f.trim(g)
                        }
                    }
                }
            }
            return this
        }, removeClass: function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    f(this).removeClass(a.call(this, b, this.className))
                })
            }
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className) {
                        if (a) {
                            h = (" " + g.className + " ").replace(o, " ");
                            for (i = 0, j = c.length; i < j; i++) {
                                h = h.replace(" " + c[i] + " ", " ")
                            }
                            g.className = f.trim(h)
                        } else {
                            g.className = ""
                        }
                    }
                }
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a, d = typeof b == "boolean";
            if (f.isFunction(a)) {
                return this.each(function (c) {
                    f(this).toggleClass(a.call(this, c, this.className, b), b)
                })
            }
            return this.each(function () {
                if (c === "string") {
                    var e, g = 0, h = f(this), i = b, j = a.split(p);
                    while (e = j[g++]) {
                        i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                    }
                } else {
                    if (c === "undefined" || c === "boolean") {
                        this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
                    }
                }
            })
        }, hasClass: function (a) {
            var b = " " + a + " ", c = 0, d = this.length;
            for (; c < d; c++) {
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) {
                    return !0
                }
            }
            return !1
        }, val: function (a) {
            var c, d, e, g = this[0];
            if (!!arguments.length) {
                e = f.isFunction(a);
                return this.each(function (d) {
                    var g = f(this), h;
                    if (this.nodeType === 1) {
                        e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                            return a == null ? "" : a + ""
                        })), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
                        if (!c || !("set" in c) || c.set(this, h, "value") === b) {
                            this.value = h
                        }
                    }
                })
            }
            if (g) {
                c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
                if (c && "get" in c && (d = c.get(g, "value")) !== b) {
                    return d
                }
                d = g.value;
                return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
            }
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            }, select: {
                get: function (a) {
                    var b, c, d, e, g = a.selectedIndex, h = [], i = a.options, j = a.type === "select-one";
                    if (g < 0) {
                        return null
                    }
                    c = j ? g : 0, d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) {
                                return b
                            }
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length) {
                        return f(i[g]).val()
                    }
                    return h
                }, set: function (a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function () {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0},
        attr: function (a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if (!!a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f.attrFn) {
                    return f(a)[c](d)
                }
                if (typeof a.getAttribute == "undefined") {
                    return f.prop(a, c, d)
                }
                i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return
                    }
                    if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) {
                        return g
                    }
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (h && "get" in h && i && (g = h.get(a, c)) !== null) {
                    return g
                }
                g = a.getAttribute(c);
                return g === null ? b : g
            }
        },
        removeAttr: function (a, b) {
            var c, d, e, g, h, i = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p), g = d.length;
                for (; i < g; i++) {
                    e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1))
                }
            }
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (r.test(a.nodeName) && a.parentNode) {
                        f.error("type property can't be changed")
                    } else {
                        if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                            var c = a.value;
                            a.setAttribute("type", b), c && (a.value = c);
                            return b
                        }
                    }
                }
            }, value: {
                get: function (a, b) {
                    if (w && f.nodeName(a, "button")) {
                        return w.get(a, b)
                    }
                    return b in a ? a.value : null
                }, set: function (a, b, c) {
                    if (w && f.nodeName(a, "button")) {
                        return w.set(a, b, c)
                    }
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e, g, h, i = a.nodeType;
            if (!!a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
                return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
        get: function (a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        }, set: function (a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    }, v || (y = {name: !0, id: !0, coords: !0}, w = f.valHooks.button = {
        get: function (a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        }, set: function (a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function (a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get, set: function (a, b, c) {
            b === "" && (b = "false"), w.set(a, b, c)
        }
    }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        }, set: function (a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function (a, b) {
                if (f.isArray(b)) {
                    return a.checked = f.inArray(f(a).val(), b) >= 0
                }
            }
        })
    });
    var z = /^(?:textarea|input|select)$/i, A = /^([^\.]*)?(?:\.(.+))?$/, B = /(?:^|\s)hover(\.\S+)?\b/, C = /^key/, D = /^(?:mouse|contextmenu)|click/, E = /^(?:focusinfocus|focusoutblur)$/, F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, G = function (a) {
        var b = F.exec(a);
        b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
        return b
    }, H = function (a, b) {
        var c = a.attributes || {};
        return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
    }, I = function (a) {
        return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
    };
    f.event = {
        add: function (a, c, d, e, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                d.handler && (p = d, d = p.handler, g = p.selector), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a) {
                    return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                }, i.elem = a), c = f.trim(I(c)).split(" ");
                for (k = 0; k < c.length; k++) {
                    l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({
                        type: m,
                        origType: l[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: g,
                        quick: g && G(g),
                        namespace: n.join(".")
                    }, p), r = j[m];
                    if (!r) {
                        r = j[m] = [], r.delegateCount = 0;
                        if (!s.setup || s.setup.call(a, e, n, i) === !1) {
                            a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                        }
                    }
                    s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function (a, b, c, d, e) {
            var g = f.hasData(a) && f._data(a), h, i, j, k, l, m, n, o, p, q, r, s;
            if (!!g && !!(o = g.events)) {
                b = f.trim(I(b || "")).split(" ");
                for (h = 0; h < b.length; h++) {
                    i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                    if (!j) {
                        for (j in o) {
                            f.event.remove(a, j + b[h], c, d, !0)
                        }
                        continue
                    }
                    p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (n = 0; n < r.length; n++) {
                        s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s))
                    }
                    r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
                }
                f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {getData: !0, setData: !0, changeData: !0},
        trigger: function (c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c, i = [], j, k, l, m, n, o, p, q, r, s;
                if (E.test(h + f.event.triggered)) {
                    return
                }
                h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h]) {
                    return
                }
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
                if (!e) {
                    j = f.cache;
                    for (l in j) {
                        j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0)
                    }
                    return
                }
                c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1) {
                    return
                }
                r = [[e, p.bindType || h]];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                    for (; m; m = m.parentNode) {
                        r.push([m, s]), n = m
                    }
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++) {
                    m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault()
                }
                c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                return c.result
            }
        },
        dispatch: function (c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [], e = d.delegateCount, g = [].slice.call(arguments, 0), h = !c.exclusive && !c.namespace, i = f.event.special[c.type] || {}, j = [], k, l, m, n, o, p, q, r, s, t, u;
            g[0] = c, c.delegateTarget = this;
            if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
                if (e && (!c.button || c.type !== "click")) {
                    n = f(this), n.context = this.ownerDocument || this;
                    for (m = c.target; m != this; m = m.parentNode || this) {
                        if (m.disabled !== !0) {
                            p = {}, r = [], n[0] = m;
                            for (k = 0; k < e; k++) {
                                s = d[k], t = s.selector, p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s)
                            }
                            r.length && j.push({elem: m, matches: r})
                        }
                    }
                }
                d.length > e && j.push({elem: this, matches: d.slice(e)});
                for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                    q = j[k], c.currentTarget = q.elem;
                    for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
                        s = q.matches[l];
                        if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace)) {
                            c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
                        }
                    }
                }
                i.postDispatch && i.postDispatch.call(this, c);
                return c.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, d) {
                var e, f, g, h = d.button, i = d.fromElement;
                a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                return a
            }
        },
        fix: function (a) {
            if (a[f.expando]) {
                return a
            }
            var d, e, g = a, h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d;) {
                e = i[--d], a[e] = g[e]
            }
            a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a
        },
        special: {
            ready: {setup: f.bindReady},
            load: {noBubble: !0},
            focus: {delegateType: "focusin"},
            blur: {delegateType: "focusout"},
            beforeunload: {
                setup: function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                }, teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = f.extend(new f.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b) {
        if (!(this instanceof f.Event)) {
            return new f.Event(a, b)
        }
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
    }, f.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = K;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        }, stopPropagation: function () {
            this.isPropagationStopped = K;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = K, this.stopPropagation()
        }, isDefaultPrevented: J, isPropagationStopped: J, isImmediatePropagationStopped: J
    }, f.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        f.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c = this, d = a.relatedTarget, e = a.handleObj, g = e.selector, h;
                if (!d || d !== c && !f.contains(c, d)) {
                    a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b
                }
                return h
            }
        }
    }), f.support.submitBubbles || (f.event.special.submit = {
        setup: function () {
            if (f.nodeName(this, "form")) {
                return !1
            }
            f.event.add(this, "click._submit keypress._submit", function (a) {
                var c = a.target, d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), d._submit_attached = !0)
            })
        }, postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
        }, teardown: function () {
            if (f.nodeName(this, "form")) {
                return !1
            }
            f.event.remove(this, "._submit")
        }
    }), f.support.changeBubbles || (f.event.special.change = {
        setup: function () {
            if (z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") {
                    f.event.add(this, "propertychange._change", function (a) {
                        a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), f.event.add(this, "click._change", function (a) {
                        this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                    })
                }
                return !1
            }
            f.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                }), b._change_attached = !0)
            })
        }, handle: function (a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") {
                return a.handleObj.handler.apply(this, arguments)
            }
        }, teardown: function () {
            f.event.remove(this, "._change");
            return z.test(this.nodeName)
        }
    }), f.support.focusinBubbles || f.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var d = 0, e = function (a) {
            f.event.simulate(b, a.target, f.event.fix(a), !0)
        };
        f.event.special[b] = {
            setup: function () {
                d++ === 0 && c.addEventListener(a, e, !0)
            }, teardown: function () {
                --d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }), f.fn.extend({
        on: function (a, c, d, e, g) {
            var h, i;
            if (typeof a == "object") {
                typeof c != "string" && (d = d || c, c = b);
                for (i in a) {
                    this.on(i, c, d, a[i], g)
                }
                return this
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1) {
                e = J
            } else {
                if (!e) {
                    return this
                }
            }
            g === 1 && (h = e, e = function (a) {
                f().off(a);
                return h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = f.guid++));
            return this.each(function () {
                f.event.add(this, a, e, d, c)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
                return this
            }
            if (typeof a == "object") {
                for (var g in a) {
                    this.off(g, c, a[g])
                }
                return this
            }
            if (c === !1 || typeof c == "function") {
                d = c, c = b
            }
            d === !1 && (d = J);
            return this.each(function () {
                f.event.remove(this, a, d, c)
            })
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, live: function (a, b, c) {
            f(this.context).on(a, this.selector, b, c);
            return this
        }, die: function (a, b) {
            f(this.context).off(a, this.selector || "**", b);
            return this
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        }, trigger: function (a, b) {
            return this.each(function () {
                f.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            if (this[0]) {
                return f.event.trigger(a, b, this[0], !0)
            }
        }, toggle: function (a) {
            var b = arguments, c = a.guid || f.guid++, d = 0, e = function (c) {
                var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                return b[e].apply(this, arguments) || !1
            };
            e.guid = c;
            while (d < b.length) {
                b[d++].guid = c
            }
            return this.click(e)
        }, hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        f.fn[b] = function (a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }), function () {
        function x(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else {
                                if (m.filter(b, [j]).length > 0) {
                                    k = j;
                                    break
                                }
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        function w(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, d = "sizcache" + (Math.random() + "").replace(".", ""), e = 0, g = Object.prototype.toString, h = !1, i = !0, j = /\\/g, k = /\r\n/g, l = /\W/;
        [0, 0].sort(function () {
            i = !1;
            return 0
        });
        var m = function (b, d, e, f) {
            e = e || [], d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9) {
                return []
            }
            if (!b || typeof b != "string") {
                return e
            }
            var i, j, k, l, n, q, r, t, u = !0, v = m.isXML(d), w = [], x = b;
            do {
                a.exec(""), i = a.exec(x);
                if (i) {
                    x = i[3], w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break
                    }
                }
            } while (i);
            if (w.length > 1 && p.exec(b)) {
                if (w.length === 2 && o.relative[w[0]]) {
                    j = y(w[0] + w[1], d, f)
                } else {
                    j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                    while (w.length) {
                        b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
                    }
                }
            } else {
                !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                if (d) {
                    n = f ? {
                        expr: w.pop(),
                        set: s(f)
                    } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                    while (w.length) {
                        q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                    }
                } else {
                    k = w = []
                }
            }
            k || (k = j), k || m.error(q || b);
            if (g.call(k) === "[object Array]") {
                if (!u) {
                    e.push.apply(e, k)
                } else {
                    if (d && d.nodeType === 1) {
                        for (t = 0; k[t] != null; t++) {
                            k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t])
                        }
                    } else {
                        for (t = 0; k[t] != null; t++) {
                            k[t] && k[t].nodeType === 1 && e.push(j[t])
                        }
                    }
                }
            } else {
                s(k, e)
            }
            l && (m(l, h, e, f), m.uniqueSort(e));
            return e
        };
        m.uniqueSort = function (a) {
            if (u) {
                h = i, a.sort(u);
                if (h) {
                    for (var b = 1; b < a.length; b++) {
                        a[b] === a[b - 1] && a.splice(b--, 1)
                    }
                }
            }
            return a
        }, m.matches = function (a, b) {
            return m(a, null, null, b)
        }, m.matchesSelector = function (a, b) {
            return m(b, null, null, [a]).length > 0
        }, m.find = function (a, b, c) {
            var d, e, f, g, h, i;
            if (!a) {
                return []
            }
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1], g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return {set: d, expr: a}
        }, m.filter = function (a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter) {
                    if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                        k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                        if (l.substr(l.length - 1) === "\\") {
                            continue
                        }
                        s === r && (r = []);
                        if (o.preFilter[h]) {
                            f = o.preFilter[h](f, s, d, r, e, t);
                            if (!f) {
                                g = i = !0
                            } else {
                                if (f === !0) {
                                    continue
                                }
                            }
                        }
                        if (f) {
                            for (n = 0; (j = s[n]) != null; n++) {
                                j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0))
                            }
                        }
                        if (i !== b) {
                            d || (s = r), a = a.replace(o.match[h], "");
                            if (!g) {
                                return []
                            }
                            break
                        }
                    }
                }
                if (a === q) {
                    if (g == null) {
                        m.error(a)
                    } else {
                        break
                    }
                }
                q = a
            }
            return s
        }, m.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        };
        var n = m.getText = function (a) {
            var b, c, d = a.nodeType, e = "";
            if (d) {
                if (d === 1 || d === 9 || d === 11) {
                    if (typeof a.textContent == "string") {
                        return a.textContent
                    }
                    if (typeof a.innerText == "string") {
                        return a.innerText.replace(k, "")
                    }
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        e += n(a)
                    }
                } else {
                    if (d === 3 || d === 4) {
                        return a.nodeValue
                    }
                }
            } else {
                for (b = 0; c = a[b]; b++) {
                    c.nodeType !== 8 && (e += n(c))
                }
            }
            return e
        }, o = m.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {"class": "className", "for": "htmlFor"},
            attrHandle: {
                href: function (a) {
                    return a.getAttribute("href")
                }, type: function (a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function (a, b) {
                    var c = typeof b == "string", d = c && !l.test(b), e = c && !d;
                    d && (b = b.toLowerCase());
                    for (var f = 0, g = a.length, h; f < g; f++) {
                        if (h = a[f]) {
                            while ((h = h.previousSibling) && h.nodeType !== 1) {
                            }
                            a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                        }
                    }
                    e && m.filter(b, a, !0)
                }, ">": function (a, b) {
                    var c, d = typeof b == "string", e = 0, f = a.length;
                    if (d && !l.test(b)) {
                        b = b.toLowerCase();
                        for (; e < f; e++) {
                            c = a[e];
                            if (c) {
                                var g = c.parentNode;
                                a[e] = g.nodeName.toLowerCase() === b ? g : !1
                            }
                        }
                    } else {
                        for (; e < f; e++) {
                            c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b)
                        }
                        d && m.filter(b, a, !0)
                    }
                }, "": function (a, b, c) {
                    var d, f = e++, g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
                }, "~": function (a, b, c) {
                    var d, f = e++, g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
                }
            },
            find: {
                ID: function (a, b, c) {
                    if (typeof b.getElementById != "undefined" && !c) {
                        var d = b.getElementById(a[1]);
                        return d && d.parentNode ? [d] : []
                    }
                }, NAME: function (a, b) {
                    if (typeof b.getElementsByName != "undefined") {
                        var c = [], d = b.getElementsByName(a[1]);
                        for (var e = 0, f = d.length; e < f; e++) {
                            d[e].getAttribute("name") === a[1] && c.push(d[e])
                        }
                        return c.length === 0 ? null : c
                    }
                }, TAG: function (a, b) {
                    if (typeof b.getElementsByTagName != "undefined") {
                        return b.getElementsByTagName(a[1])
                    }
                }
            },
            preFilter: {
                CLASS: function (a, b, c, d, e, f) {
                    a = " " + a[1].replace(j, "") + " ";
                    if (f) {
                        return a
                    }
                    for (var g = 0, h; (h = b[g]) != null; g++) {
                        h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1))
                    }
                    return !1
                }, ID: function (a) {
                    return a[1].replace(j, "")
                }, TAG: function (a, b) {
                    return a[1].replace(j, "").toLowerCase()
                }, CHILD: function (a) {
                    if (a[1] === "nth") {
                        a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                    } else {
                        a[2] && m.error(a[0])
                    }
                    a[0] = e++;
                    return a
                }, ATTR: function (a, b, c, d, e, f) {
                    var g = a[1] = a[1].replace(j, "");
                    !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                    return a
                }, PSEUDO: function (b, c, d, e, f) {
                    if (b[1] === "not") {
                        if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) {
                            b[3] = m(b[3], null, null, c)
                        } else {
                            var g = m.filter(b[3], c, d, !0 ^ f);
                            d || e.push.apply(e, g);
                            return !1
                        }
                    } else {
                        if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) {
                            return !0
                        }
                    }
                    return b
                }, POS: function (a) {
                    a.unshift(!0);
                    return a
                }
            },
            filters: {
                enabled: function (a) {
                    return a.disabled === !1 && a.type !== "hidden"
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    return a.checked === !0
                }, selected: function (a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return a.selected === !0
                }, parent: function (a) {
                    return !!a.firstChild
                }, empty: function (a) {
                    return !a.firstChild
                }, has: function (a, b, c) {
                    return !!m(c[3], a).length
                }, header: function (a) {
                    return /h\d/i.test(a.nodeName)
                }, text: function (a) {
                    var b = a.getAttribute("type"), c = a.type;
                    return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                }, radio: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                }, checkbox: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                }, file: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "file" === a.type
                }, password: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "password" === a.type
                }, submit: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "submit" === a.type
                }, image: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "image" === a.type
                }, reset: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "reset" === a.type
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && "button" === a.type || b === "button"
                }, input: function (a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                }, focus: function (a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (a, b) {
                    return b === 0
                }, last: function (a, b, c, d) {
                    return b === d.length - 1
                }, even: function (a, b) {
                    return b % 2 === 0
                }, odd: function (a, b) {
                    return b % 2 === 1
                }, lt: function (a, b, c) {
                    return b < c[3] - 0
                }, gt: function (a, b, c) {
                    return b > c[3] - 0
                }, nth: function (a, b, c) {
                    return c[3] - 0 === b
                }, eq: function (a, b, c) {
                    return c[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function (a, b, c, d) {
                    var e = b[1], f = o.filters[e];
                    if (f) {
                        return f(a, c, b, d)
                    }
                    if (e === "contains") {
                        return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0
                    }
                    if (e === "not") {
                        var g = b[3];
                        for (var h = 0, i = g.length; h < i; h++) {
                            if (g[h] === a) {
                                return !1
                            }
                        }
                        return !0
                    }
                    m.error(e)
                }, CHILD: function (a, b) {
                    var c, e, f, g, h, i, j, k = b[1], l = a;
                    switch (k) {
                        case"only":
                        case"first":
                            while (l = l.previousSibling) {
                                if (l.nodeType === 1) {
                                    return !1
                                }
                            }
                            if (k === "first") {
                                return !0
                            }
                            l = a;
                        case"last":
                            while (l = l.nextSibling) {
                                if (l.nodeType === 1) {
                                    return !1
                                }
                            }
                            return !0;
                        case"nth":
                            c = b[2], e = b[3];
                            if (c === 1 && e === 0) {
                                return !0
                            }
                            f = b[0], g = a.parentNode;
                            if (g && (g[d] !== f || !a.nodeIndex)) {
                                i = 0;
                                for (l = g.firstChild; l; l = l.nextSibling) {
                                    l.nodeType === 1 && (l.nodeIndex = ++i)
                                }
                                g[d] = f
                            }
                            j = a.nodeIndex - e;
                            return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                    }
                }, ID: function (a, b) {
                    return a.nodeType === 1 && a.getAttribute("id") === b
                }, TAG: function (a, b) {
                    return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
                }, CLASS: function (a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                }, ATTR: function (a, b) {
                    var c = b[1], d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c), e = d + "", f = b[2], g = b[4];
                    return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                }, POS: function (a, b, c, d) {
                    var e = b[2], f = o.setFilters[e];
                    if (f) {
                        return f(a, c, b, d)
                    }
                }
            }
        }, p = o.match.POS, q = function (a, b) {
            return "\\" + (b - 0 + 1)
        };
        for (var r in o.match) {
            o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q))
        }
        o.match.globalPOS = p;
        var s = function (a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (t) {
            s = function (a, b) {
                var c = 0, d = b || [];
                if (g.call(a) === "[object Array]") {
                    Array.prototype.push.apply(d, a)
                } else {
                    if (typeof a.length == "number") {
                        for (var e = a.length; c < e; c++) {
                            d.push(a[c])
                        }
                    } else {
                        for (; a[c]; c++) {
                            d.push(a[c])
                        }
                    }
                }
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) {
                return a.compareDocumentPosition ? -1 : 1
            }
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex) {
                return a.sourceIndex - b.sourceIndex
            }
            var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g;
            if (g === i) {
                return v(a, b)
            }
            if (!g) {
                return -1
            }
            if (!i) {
                return 1
            }
            while (j) {
                e.unshift(j), j = j.parentNode
            }
            j = i;
            while (j) {
                f.unshift(j), j = j.parentNode
            }
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++) {
                if (e[k] !== f[k]) {
                    return v(e[k], f[k])
                }
            }
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        }, v = function (a, b, c) {
            if (a === b) {
                return c
            }
            var d = a.nextSibling;
            while (d) {
                if (d === b) {
                    return -1
                }
                d = d.nextSibling
            }
            return 1
        }), function () {
            var a = c.createElement("div"), d = "script" + (new Date).getTime(), e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, o.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }), e.removeChild(a), e = a = null
        }(), function () {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) {
                        c[e].nodeType === 1 && d.push(c[e])
                    }
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), c.querySelectorAll && function () {
            var a = m, b = c.createElement("div"), d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                m = function (b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1]) {
                                return s(e.getElementsByTagName(b), f)
                            }
                            if (h[2] && o.find.CLASS && e.getElementsByClassName) {
                                return s(e.getElementsByClassName(h[2]), f)
                            }
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body) {
                                return s([e.body], f)
                            }
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode) {
                                    return s([], f)
                                }
                                if (i.id === h[3]) {
                                    return s([i], f)
                                }
                            }
                            try {
                                return s(e.querySelectorAll(b), f)
                            } catch (j) {
                            }
                        } else {
                            if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                                var k = e, l = e.getAttribute("id"), n = l || d, p = e.parentNode, q = /^\s*[+~]/.test(b);
                                l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                                try {
                                    if (!q || p) {
                                        return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                                    }
                                } catch (r) {
                                } finally {
                                    l || k.removeAttribute("id")
                                }
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a) {
                    m[e] = a[e]
                }
                b = null
            }
        }(), function () {
            var a = c.documentElement, b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"), e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                m.matchesSelector = function (a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a)) {
                        try {
                            if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                var f = b.call(a, c);
                                if (f || !d || a.document && a.document.nodeType !== 11) {
                                    return f
                                }
                            }
                        } catch (g) {
                        }
                    }
                    return m(c, null, null, [a]).length > 0
                }
            }
        }(), function () {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1) {
                    return
                }
                o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c) {
                        return b.getElementsByClassName(a[1])
                    }
                }, a = null
            }
        }(), c.documentElement.contains ? m.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : m.contains = function () {
            return !1
        }, m.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var y = function (a, b, c) {
            var d, e = [], f = "", g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a)) {
                f += d[0], a = a.replace(o.match.PSEUDO, "")
            }
            a = o.relative[a] ? a + "*" : a;
            for (var h = 0, i = g.length; h < i; h++) {
                m(a, g[h], e, c)
            }
            return m.filter(f, e)
        };
        m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
    }();
    var L = /Until$/, M = /^(?:parents|prevUntil|prevAll)/, N = /,/, O = /^.[^:#\[\.,]*$/, P = Array.prototype.slice, Q = f.expr.match.globalPOS, R = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    f.fn.extend({
        find: function (a) {
            var b = this, c, d;
            if (typeof a != "string") {
                return f(a).filter(function () {
                    for (c = 0, d = b.length; c < d; c++) {
                        if (f.contains(b[c], this)) {
                            return !0
                        }
                    }
                })
            }
            var e = this.pushStack("", "find", a), g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0) {
                    for (h = g; h < e.length; h++) {
                        for (i = 0; i < g; i++) {
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return e
        }, has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++) {
                    if (f.contains(this, b[a])) {
                        return !0
                    }
                }
            })
        }, not: function (a) {
            return this.pushStack(T(this, a, !1), "not", a)
        }, filter: function (a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        }, is: function (a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        }, closest: function (a, b) {
            var c = [], d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) {
                        f(g).is(a[d]) && c.push({selector: a[d], elem: g, level: h})
                    }
                    g = g.parentNode, h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) {
                        break
                    }
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        }, index: function (a) {
            if (!a) {
                return this[0] && this[0].parentNode ? this.prevAll().length : -1
            }
            if (typeof a == "string") {
                return f.inArray(this[0], f(a))
            }
            return f.inArray(a.jquery ? a[0] : a, this)
        }, add: function (a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a), d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
        }, andSelf: function () {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        }, parents: function (a) {
            return f.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return f.dir(a, "parentNode", c)
        }, next: function (a) {
            return f.nth(a, 2, "nextSibling")
        }, prev: function (a) {
            return f.nth(a, 2, "previousSibling")
        }, nextAll: function (a) {
            return f.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return f.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return f.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return f.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return f.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return f.sibling(a.firstChild)
        }, contents: function (a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }), f.extend({
        filter: function (a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        }, dir: function (a, c, d) {
            var e = [], g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) {
                g.nodeType === 1 && e.push(g), g = g[c]
            }
            return e
        }, nth: function (a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c]) {
                if (a.nodeType === 1 && ++e === b) {
                    break
                }
            }
            return a
        }, sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling) {
                a.nodeType === 1 && a !== b && c.push(a)
            }
            return c
        }
    });
    var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", W = / jQuery\d+="(?:\d+|null)"/g, X = /^\s+/, Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Z = /<([\w:]+)/, $ = /<tbody/i, _ = /<|&#?\w+;/, ba = /<(?:script|style)/i, bb = /<(?:script|object|embed|option|style)/i, bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"), bd = /checked\s*(?:[^=]|=\s*.checked.)/i, be = /\/(java|ecma)script/i, bf = /^\s*<!(?:\[CDATA\[|\-\-)/, bg = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }, bh = U(c);
    bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({
        text: function (a) {
            return f.access(this, function (a) {
                return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
            }, null, a, arguments.length)
        }, wrapAll: function (a) {
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    f(this).wrapAll(a.call(this, b))
                })
            }
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) {
                        a = a.firstChild
                    }
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    f(this).wrapInner(a.call(this, b))
                })
            }
            return this.each(function () {
                var b = f(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = f.isFunction(a);
            return this.each(function (c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        }, before: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, !1, function (a) {
                    this.parentNode.insertBefore(a, this)
                })
            }
            if (arguments.length) {
                var a = f.clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        }, after: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, !1, function (a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                })
            }
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f.clean(arguments));
                return a
            }
        }, remove: function (a, b) {
            for (var c = 0, d; (d = this[c]) != null; c++) {
                if (!a || f.filter(a, [d]).length) {
                    !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d)
                }
            }
            return this
        }, empty: function () {
            for (var a = 0, b; (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) {
                    b.removeChild(b.firstChild)
                }
            }
            return this
        }, clone: function (a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function () {
                return f.clone(this, a, b)
            })
        }, html: function (a) {
            return f.access(this, function (a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b) {
                    return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null
                }
                if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Y, "<$1></$2>");
                    try {
                        for (; d < e; d++) {
                            c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a)
                        }
                        c = 0
                    } catch (g) {
                    }
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) {
                    return this.each(function (b) {
                        var c = f(this), d = c.html();
                        c.replaceWith(a.call(this, b, d))
                    })
                }
                typeof a != "string" && (a = f(a).detach());
                return this.each(function () {
                    var b = this.nextSibling, c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, c, d) {
            var e, g, h, i, j = a[0], k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) {
                return this.each(function () {
                    f(this).domManip(a, c, d, !0)
                })
            }
            if (f.isFunction(j)) {
                return this.each(function (e) {
                    var g = f(this);
                    a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
                })
            }
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {fragment: i} : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) {
                        d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                    }
                }
                k.length && f.each(k, function (a, b) {
                    b.src ? f.ajax({
                        type: "GET",
                        global: !1,
                        url: b.src,
                        async: !1,
                        dataType: "script"
                    }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }), f.buildFragment = function (a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return {fragment: e, cacheable: g}
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        f.fn[a] = function (c) {
            var d = [], e = f(c), g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        clone: function (a, b, c) {
            var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bk(a, h), d = bl(a), e = bl(h);
                for (g = 0; d[g]; ++g) {
                    e[g] && bk(d[g], e[g])
                }
            }
            if (b) {
                bj(a, h);
                if (c) {
                    d = bl(a), e = bl(h);
                    for (g = 0; d[g]; ++g) {
                        bj(d[g], e[g])
                    }
                }
            }
            d = e = null;
            return h
        }, clean: function (a, b, d, e) {
            var g, h, i, j = [];
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            for (var k = 0, l; (l = a[k]) != null; k++) {
                typeof l == "number" && (l += "");
                if (!l) {
                    continue
                }
                if (typeof l == "string") {
                    if (!_.test(l)) {
                        l = b.createTextNode(l)
                    } else {
                        l = l.replace(Y, "<$1></$2>");
                        var m = (Z.exec(l) || ["", ""])[1].toLowerCase(), n = bg[m] || bg._default, o = n[0], p = b.createElement("div"), q = bh.childNodes, r;
                        b === c ? bh.appendChild(p) : U(b).appendChild(p), p.innerHTML = n[1] + l + n[2];
                        while (o--) {
                            p = p.lastChild
                        }
                        if (!f.support.tbody) {
                            var s = $.test(l), t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : [];
                            for (i = t.length - 1; i >= 0; --i) {
                                f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
                            }
                        }
                        !f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild), l = p.childNodes, p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
                    }
                }
                var u;
                if (!f.support.appendChecked) {
                    if (l[0] && typeof(u = l.length) == "number") {
                        for (i = 0; i < u; i++) {
                            bn(l[i])
                        }
                    } else {
                        bn(l)
                    }
                }
                l.nodeType ? j.push(l) : j = f.merge(j, l)
            }
            if (d) {
                g = function (a) {
                    return !a.type || be.test(a.type)
                };
                for (k = 0; j[k]; k++) {
                    h = j[k];
                    if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type))) {
                        e.push(h.parentNode ? h.parentNode.removeChild(h) : h)
                    } else {
                        if (h.nodeType === 1) {
                            var v = f.grep(h.getElementsByTagName("script"), g);
                            j.splice.apply(j, [k + 1, 0].concat(v))
                        }
                        d.appendChild(h)
                    }
                }
            }
            return j
        }, cleanData: function (a) {
            var b, c, d = f.cache, e = f.event.special, g = f.support.deleteExpando;
            for (var h = 0, i; (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) {
                    continue
                }
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events) {
                            e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle)
                        }
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
                }
            }
        }
    });
    var bp = /alpha\([^)]*\)/i, bq = /opacity=([^)]*)/, br = /([A-Z]|^ms)/g, bs = /^[\-+]?(?:\d*\.)?\d+$/i, bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, bu = /^([\-+])=([\-+.\de]+)/, bv = /^margin/, bw = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, bx = ["Top", "Right", "Bottom", "Left"], by, bz, bA;
    f.fn.css = function (a, c) {
        return f.access(this, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        }, a, c, arguments.length > 1)
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = by(a, "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": f.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, c, d, e) {
            if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) {
                        return g
                    }
                    return j[c]
                }
                h = typeof d, h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) {
                    return
                }
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) {
                    try {
                        j[c] = d
                    } catch (l) {
                    }
                }
            }
        },
        css: function (a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) {
                return e
            }
            if (by) {
                return by(a, c)
            }
        },
        swap: function (a, b, c) {
            var d = {}, e, f;
            for (f in b) {
                d[f] = a.style[f], a.style[f] = b[f]
            }
            e = c.call(a);
            for (f in b) {
                a.style[f] = d[f]
            }
            return e
        }
    }), f.curCSS = f.css, c.defaultView && c.defaultView.getComputedStyle && (bz = function (a, b) {
        var c, d, e, g, h = a.style;
        b = b.replace(br, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))), !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g);
        return c
    }), c.documentElement.currentStyle && (bA = function (a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style;
        f == null && g && (e = g[b]) && (f = e), bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), by = bz || bA, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {
            get: function (a, c, d) {
                if (c) {
                    return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function () {
                        return bB(a, b, d)
                    })
                }
            }, set: function (a, b) {
                return bs.test(b) ? b + "px" : b
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function (a, b) {
            return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "", g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) {
                    return
                }
            }
            c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e
        }
    }), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function (a, b) {
                return f.swap(a, {display: "inline-block"}, function () {
                    return b ? by(a, "margin-right") : a.style.marginRight
                })
            }
        })
    }), f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth, c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
    }), f.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        f.cssHooks[a + b] = {
            expand: function (c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c], f = {};
                for (d = 0; d < 4; d++) {
                    f[a + bx[d] + b] = e[d] || e[d - 2] || e[0]
                }
                return f
            }
        }
    });
    var bC = /%20/g, bD = /\[\]$/, bE = /\r?\n/g, bF = /#.*$/, bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bJ = /^(?:GET|HEAD)$/, bK = /^\/\//, bL = /\?/, bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bN = /^(?:select|textarea)/i, bO = /\s+/, bP = /([?&])_=[^&]*/, bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bR = f.fn.load, bS = {}, bT = {}, bU, bV, bW = ["*/"] + ["*"];
    try {
        bU = e.href
    } catch (bX) {
        bU = c.createElement("a"), bU.href = "", bU = bU.href
    }
    bV = bQ.exec(bU.toLowerCase()) || [], f.fn.extend({
        load: function (a, c, d) {
            if (typeof a != "string" && bR) {
                return bR.apply(this, arguments)
            }
            if (!this.length) {
                return this
            }
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a, type: h, dataType: "html", data: c, complete: function (a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function (a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        }, serialize: function () {
            return f.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type))
            }).map(function (a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                    return {name: b.name, value: a.replace(bE, "\r\n")}
                }) : {name: b.name, value: c.replace(bE, "\r\n")}
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({type: c, url: a, data: d, success: e, dataType: g})
        }
    }), f.extend({
        getScript: function (a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b$(a, b);
            return a
        },
        ajaxSettings: {
            url: bU,
            isLocal: bI.test(bV[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bW
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": a.String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML},
            flatOptions: {context: !0, url: !0}
        },
        ajaxPrefilter: bY(bS),
        ajaxTransport: bY(bT),
        ajax: function (a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c, x = l ? ca(d, v, l) : b, y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) {
                                f.lastModified[k] = y
                            }
                            if (z = v.getResponseHeader("Etag")) {
                                f.etag[k] = z
                            }
                        }
                        if (a === 304) {
                            w = "notmodified", o = !0
                        } else {
                            try {
                                r = cb(d, x), w = "success", o = !0
                            } catch (A) {
                                w = "parsererror", u = A
                            }
                        }
                    } else {
                        u = w;
                        if (!w || a) {
                            w = "error", a < 0 && (a = 0)
                        }
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }

            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f.Callbacks("once memory"), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = {
                readyState: 0,
                setRequestHeader: function (a, b) {
                    if (!s) {
                        var c = a.toLowerCase();
                        a = m[c] = m[c] || a, l[a] = b
                    }
                    return this
                },
                getAllResponseHeaders: function () {
                    return s === 2 ? n : null
                },
                getResponseHeader: function (a) {
                    var c;
                    if (s === 2) {
                        if (!o) {
                            o = {};
                            while (c = bG.exec(n)) {
                                o[c[1].toLowerCase()] = c[2]
                            }
                        }
                        c = o[a.toLowerCase()]
                    }
                    return c === b ? null : c
                },
                overrideMimeType: function (a) {
                    s || (d.mimeType = a);
                    return this
                },
                abort: function (a) {
                    a = a || "abort", p && p.abort(a), w(0, a);
                    return this
                }
            };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) {
                if (a) {
                    var b;
                    if (s < 2) {
                        for (b in a) {
                            j[b] = [j[b], a[b]]
                        }
                    } else {
                        b = a[v.status], v.then(b, b)
                    }
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO), d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bZ(bS, d, c, v);
            if (s === 2) {
                return !1
            }
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bJ.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bL.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(), y = d.url.replace(bP, "$1_=" + x);
                    d.url = y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }
            (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) {
                v.setRequestHeader(u, d.headers[u])
            }
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in {success: 1, error: 1, complete: 1}) {
                v[u](d[u])
            }
            p = bZ(bT, d, c, v);
            if (!p) {
                w(-1, "No Transport")
            } else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    if (s < 2) {
                        w(-1, z)
                    } else {
                        throw z
                    }
                }
            }
            return v
        },
        param: function (a, c) {
            var d = [], e = function (a, b) {
                b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) {
                f.each(a, function () {
                    e(this.name, this.value)
                })
            } else {
                for (var g in a) {
                    b_(g, a[g], c, e)
                }
            }
            return d.join("&").replace(bC, "+")
        }
    }), f.extend({active: 0, lastModified: {}, etag: {}});
    var cc = f.now(), cd = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            return f.expando + "_" + cc++
        }
    }), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function () {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function (f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) {
                            d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                        }
                    }, e.insertBefore(d, e.firstChild)
                }, abort: function () {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ce = a.ActiveXObject ? function () {
        for (var a in cg) {
            cg[a](0, 1)
        }
    } : !1, cf = 0, cg;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && ch() || ci()
    } : ch, function (a) {
        f.extend(f.support, {ajax: !!a, cors: !!a && "withCredentials" in a})
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function (e, g) {
                    var h = c.xhr(), i, j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields) {
                        for (j in c.xhrFields) {
                            h[j] = c.xhrFields[j]
                        }
                    }
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e) {
                            h.setRequestHeader(j, e[j])
                        }
                    } catch (k) {
                    }
                    h.send(c.hasContent && c.data || null), d = function (a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b, i && (h.onreadystatechange = f.noop, ce && delete cg[i]);
                                if (e) {
                                    h.readyState !== 4 && h.abort()
                                } else {
                                    j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n);
                                    try {
                                        m.text = h.responseText
                                    } catch (a) {
                                    }
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ""
                                    }
                                    !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch (p) {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }, !c.async || h.readyState === 4 ? d() : (i = ++cf, ce && (cg || (cg = {}, f(a).unload(ce)), cg[i] = d), h.onreadystatechange = d)
                }, abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var cj = {}, ck, cl, cm = /^(?:toggle|show|hide)$/, cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, co, cp = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], cq;
    f.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || a === 0) {
                return this.animate(ct("show", 3), a, b, c)
            }
            for (var g = 0, h = this.length; g < h; g++) {
                d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName)))
            }
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") {
                        d.style.display = f._data(d, "olddisplay") || ""
                    }
                }
            }
            return this
        }, hide: function (a, b, c) {
            if (a || a === 0) {
                return this.animate(ct("hide", 3), a, b, c)
            }
            var d, e, g = 0, h = this.length;
            for (; g < h; g++) {
                d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e))
            }
            for (g = 0; g < h; g++) {
                this[g].style && (this[g].style.display = "none")
            }
            return this
        }, _toggle: f.fn.toggle, toggle: function (a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(ct("toggle", 3), a, b, c);
            return this
        }, fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m, n, o, p, q;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]);
                    if ((k = f.cssHooks[g]) && "expand" in k) {
                        l = k.expand(a[g]), delete a[g];
                        for (i in l) {
                            i in a || (a[i] = l[i])
                        }
                    }
                }
                for (g in a) {
                    h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) {
                        return b.complete.call(this)
                    }
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) {
                    j = new f.fx(this, b, i), h = a[i], cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""))
                }
                return !0
            }

            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) {
                return this.each(e.complete, [!1])
            }
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        }, stop: function (a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function () {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d)
                }

                var b, c = !1, e = f.timers, g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null) {
                    for (b in g) {
                        g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b)
                    }
                } else {
                    g[b = a + ".run"] && g[b].stop && h(this, g, b)
                }
                for (b = e.length; b--;) {
                    e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1))
                }
                (!d || !c) && f.dequeue(this, a)
            })
        }
    }), f.each({
        slideDown: ct("show", 1),
        slideUp: ct("hide", 1),
        slideToggle: ct("toggle", 1),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function (a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) {
                d.queue = "fx"
            }
            d.old = d.complete, d.complete = function (a) {
                f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            };
            return d
        }, easing: {
            linear: function (a) {
                return a
            }, swing: function (a) {
                return -Math.cos(a * Math.PI) / 2 + 0.5
            }
        }, timers: [], fx: function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        }, cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        }, custom: function (a, c, d) {
            function h(a) {
                return e.step(a)
            }

            var e = this, g = f.fx;
            this.startTime = cq || cr(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () {
                f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
            }, h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval))
        }, show: function () {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        }, hide: function () {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        }, step: function (a) {
            var b, c, d, e = cq || cr(), g = !0, h = this.elem, i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) {
                    i.animatedProperties[b] !== !0 && (g = !1)
                }
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }), i.hide && f(h).hide();
                    if (i.hide || i.show) {
                        for (b in i.animatedProperties) {
                            f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0)
                        }
                    }
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function () {
            var a, b = f.timers, c = 0;
            for (; c < b.length; c++) {
                a = b[c], !a() && b[c] === a && b.splice(c--, 1)
            }
            b.length || f.fx.stop()
        }, interval: 13, stop: function () {
            clearInterval(co), co = null
        }, speeds: {slow: 600, fast: 200, _default: 400}, step: {
            opacity: function (a) {
                f.style(a.elem, "opacity", a.now)
            }, _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.each(cp.concat.apply([], cp), function (a, b) {
        b.indexOf("margin") && (f.fx.step[b] = function (a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem
        }).length
    });
    var cv, cw = /^t(?:able|d|h)$/i, cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? cv = function (a, b, c, d) {
        try {
            d = a.getBoundingClientRect()
        } catch (e) {
        }
        if (!d || !f.contains(c, a)) {
            return d ? {top: d.top, left: d.left} : {top: 0, left: 0}
        }
        var g = b.body, h = cy(b), i = c.clientTop || g.clientTop || 0, j = c.clientLeft || g.clientLeft || 0, k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop, l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft, m = d.top + k - i, n = d.left + l - j;
        return {top: m, left: n}
    } : cv = function (a, b, c) {
        var d, e = a.offsetParent, g = a, h = b.body, i = b.defaultView, j = i ? i.getComputedStyle(a, null) : a.currentStyle, k = a.offsetTop, l = a.offsetLeft;
        while ((a = a.parentNode) && a !== h && a !== c) {
            if (f.support.fixedPosition && j.position === "fixed") {
                break
            }
            d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -= a.scrollTop, l -= a.scrollLeft, a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent), f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), j = d
        }
        if (j.position === "relative" || j.position === "static") {
            k += h.offsetTop, l += h.offsetLeft
        }
        f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft));
        return {top: k, left: l}
    }, f.fn.offset = function (a) {
        if (arguments.length) {
            return a === b ? this : this.each(function (b) {
                f.offset.setOffset(this, a, b)
            })
        }
        var c = this[0], d = c && c.ownerDocument;
        if (!d) {
            return null
        }
        if (c === d.body) {
            return f.offset.bodyOffset(c)
        }
        return cv(c, d, d.documentElement)
    }, f.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop, c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {top: b, left: c}
        }, setOffset: function (a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"), j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        position: function () {
            if (!this[0]) {
                return null
            }
            var a = this[0], b = this.offsetParent(), c = this.offset(), d = cx.test(b[0].nodeName) ? {
                top: 0,
                left: 0
            } : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {top: c.top - d.top, left: c.left - d.left}
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || c.body;
                while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") {
                    a = a.offsetParent
                }
                return a
            })
        }
    }), f.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, c) {
        var d = /Y/.test(c);
        f.fn[a] = function (e) {
            return f.access(this, function (a, e, g) {
                var h = cy(a);
                if (g === b) {
                    return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e]
                }
                h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g
            }, a, e, arguments.length, null)
        }
    }), f.each({Height: "height", Width: "width"}, function (a, c) {
        var d = "client" + a, e = "scroll" + a, g = "offset" + a;
        f.fn["inner" + a] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
        }, f.fn["outer" + a] = function (a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null
        }, f.fn[c] = function (a) {
            return f.access(this, function (a, c, h) {
                var i, j, k, l;
                if (f.isWindow(a)) {
                    i = a.document, j = i.documentElement[d];
                    return f.support.boxModel && j || i.body && i.body[d] || j
                }
                if (a.nodeType === 9) {
                    i = a.documentElement;
                    if (i[d] >= i[e]) {
                        return i[d]
                    }
                    return Math.max(a.body[e], i[e], a.body[g], i[g])
                }
                if (h === b) {
                    k = f.css(a, c), l = parseFloat(k);
                    return f.isNumeric(l) ? l : k
                }
                f(a).css(c, h)
            }, c, a, arguments.length, null)
        }
    }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return f
    })
})(window);
(function (D) {
    D.fn.qtip = function (a, h) {
        var d, j, b, k, e, f, g, c;
        if (typeof a == "string") {
            if (typeof D(this).data("qtip") !== "object") {
                D.fn.qtip.log.error.call(self, 1, D.fn.qtip.constants.NO_TOOLTIP_PRESENT, false)
            }
            if (a == "api") {
                return D(this).data("qtip").interfaces[D(this).data("qtip").current]
            } else {
                if (a == "interfaces") {
                    return D(this).data("qtip").interfaces
                }
            }
        } else {
            if (!a) {
                a = {}
            }
            if (typeof a.content !== "object" || (a.content.jquery && a.content.length > 0)) {
                a.content = {text: a.content}
            }
            if (typeof a.content.title !== "object") {
                a.content.title = {text: a.content.title}
            }
            if (typeof a.position !== "object") {
                a.position = {corner: a.position}
            }
            if (typeof a.position.corner !== "object") {
                a.position.corner = {target: a.position.corner, tooltip: a.position.corner}
            }
            if (typeof a.show !== "object") {
                a.show = {when: a.show}
            }
            if (typeof a.show.when !== "object") {
                a.show.when = {event: a.show.when}
            }
            if (typeof a.show.effect !== "object") {
                a.show.effect = {type: a.show.effect}
            }
            if (typeof a.hide !== "object") {
                a.hide = {when: a.hide}
            }
            if (typeof a.hide.when !== "object") {
                a.hide.when = {event: a.hide.when}
            }
            if (typeof a.hide.effect !== "object") {
                a.hide.effect = {type: a.hide.effect}
            }
            if (typeof a.style !== "object") {
                a.style = {name: a.style}
            }
            a.style = G(a.style);
            k = D.extend(true, {}, D.fn.qtip.defaults, a);
            k.style = I.call({options: k}, k.style);
            k.user = D.extend(true, {}, a)
        }
        return D(this).each(function () {
            if (typeof a == "string") {
                f = a.toLowerCase();
                b = D(this).qtip("interfaces");
                if (typeof b == "object") {
                    if (h === true && f == "destroy") {
                        while (b.length > 0) {
                            b[b.length - 1].destroy()
                        }
                    } else {
                        if (h !== true) {
                            b = [D(this).qtip("api")]
                        }
                        for (d = 0; d < b.length; d++) {
                            if (f == "destroy") {
                                b[d].destroy()
                            } else {
                                if (b[d].status.rendered === true) {
                                    if (f == "show") {
                                        b[d].show()
                                    } else {
                                        if (f == "hide") {
                                            b[d].hide()
                                        } else {
                                            if (f == "focus") {
                                                b[d].focus()
                                            } else {
                                                if (f == "disable") {
                                                    b[d].disable(true)
                                                } else {
                                                    if (f == "enable") {
                                                        b[d].disable(false)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                g = D.extend(true, {}, k);
                g.hide.effect.length = k.hide.effect.length;
                g.show.effect.length = k.show.effect.length;
                if (g.position.container === false) {
                    g.position.container = D(document.body)
                }
                if (g.position.target === false) {
                    g.position.target = D(this)
                }
                if (g.show.when.target === false) {
                    g.show.when.target = D(this)
                }
                if (g.hide.when.target === false) {
                    g.hide.when.target = D(this)
                }
                j = D.fn.qtip.interfaces.length;
                for (d = 0; d < j; d++) {
                    if (typeof D.fn.qtip.interfaces[d] == "undefined") {
                        j = d;
                        break
                    }
                }
                e = new F(D(this), g, j);
                D.fn.qtip.interfaces[j] = e;
                if (typeof D(this).data("qtip") == "object") {
                    if (typeof D(this).attr("qtip") === "undefined") {
                        D(this).data("qtip").current = D(this).data("qtip").interfaces.length
                    }
                    D(this).data("qtip").interfaces.push(e)
                } else {
                    D(this).data("qtip", {current: 0, interfaces: [e]})
                }
                if (g.content.prerender === false && g.show.when.event !== false && g.show.ready !== true) {
                    g.show.when.target.bind(g.show.when.event + ".qtip-" + j + "-create", {qtip: j}, function (l) {
                        c = D.fn.qtip.interfaces[l.data.qtip];
                        c.options.show.when.target.unbind(c.options.show.when.event + ".qtip-" + l.data.qtip + "-create");
                        c.cache.mouse = {x: l.pageX, y: l.pageY};
                        u.call(c);
                        c.options.show.when.target.trigger(c.options.show.when.event)
                    })
                } else {
                    e.cache.mouse = {x: g.show.when.target.offset().left, y: g.show.when.target.offset().top};
                    u.call(e)
                }
            }
        })
    };
    function F(b, c, a) {
        var d = this;
        d.id = a;
        d.options = c;
        d.status = {animated: false, rendered: false, disabled: false, focused: false};
        d.elements = {
            target: b.addClass(d.options.style.classes.target),
            tooltip: null,
            wrapper: null,
            content: null,
            contentWrapper: null,
            title: null,
            button: null,
            tip: null,
            bgiframe: null
        };
        d.cache = {mouse: {}, position: {}, toggle: 0};
        d.timers = {};
        D.extend(d, d.options.api, {
            show: function (h) {
                var e, g;
                if (!d.status.rendered) {
                    return D.fn.qtip.log.error.call(d, 2, D.fn.qtip.constants.TOOLTIP_NOT_RENDERED, "show")
                }
                if (d.elements.tooltip.css("display") !== "none") {
                    return d
                }
                d.elements.tooltip.stop(true, false);
                e = d.beforeShow.call(d, h);
                if (e === false) {
                    return d
                }
                function f() {
                    if (d.options.position.type !== "static") {
                        d.focus()
                    }
                    d.onShow.call(d, h);
                    if (D.browser.msie) {
                        d.elements.tooltip.get(0).style.removeAttribute("filter")
                    }
                }

                d.cache.toggle = 1;
                if (d.options.position.type !== "static") {
                    d.updatePosition(h, (d.options.show.effect.length > 0))
                }
                if (typeof d.options.show.solo == "object") {
                    g = D(d.options.show.solo)
                } else {
                    if (d.options.show.solo === true) {
                        g = D("div.qtip").not(d.elements.tooltip)
                    }
                }
                if (g) {
                    g.each(function () {
                        if (D(this).qtip("api").status.rendered === true) {
                            D(this).qtip("api").hide()
                        }
                    })
                }
                if (typeof d.options.show.effect.type == "function") {
                    d.options.show.effect.type.call(d.elements.tooltip, d.options.show.effect.length);
                    d.elements.tooltip.queue(function () {
                        f();
                        D(this).dequeue()
                    })
                } else {
                    switch (d.options.show.effect.type.toLowerCase()) {
                        case"fade":
                            d.elements.tooltip.fadeIn(d.options.show.effect.length, f);
                            break;
                        case"slide":
                            d.elements.tooltip.slideDown(d.options.show.effect.length, function () {
                                f();
                                if (d.options.position.type !== "static") {
                                    d.updatePosition(h, true)
                                }
                            });
                            break;
                        case"grow":
                            d.elements.tooltip.show(d.options.show.effect.length, f);
                            break;
                        default:
                            d.elements.tooltip.show(null, f);
                            break
                    }
                    d.elements.tooltip.addClass(d.options.style.classes.active)
                }
                return D.fn.qtip.log.error.call(d, 1, D.fn.qtip.constants.EVENT_SHOWN, "show")
            }, hide: function (g) {
                var e;
                if (!d.status.rendered) {
                    return D.fn.qtip.log.error.call(d, 2, D.fn.qtip.constants.TOOLTIP_NOT_RENDERED, "hide")
                } else {
                    if (d.elements.tooltip.css("display") === "none") {
                        return d
                    }
                }
                clearTimeout(d.timers.show);
                d.elements.tooltip.stop(true, false);
                e = d.beforeHide.call(d, g);
                if (e === false) {
                    return d
                }
                function f() {
                    d.onHide.call(d, g)
                }

                d.cache.toggle = 0;
                if (typeof d.options.hide.effect.type == "function") {
                    d.options.hide.effect.type.call(d.elements.tooltip, d.options.hide.effect.length);
                    d.elements.tooltip.queue(function () {
                        f();
                        D(this).dequeue()
                    })
                } else {
                    switch (d.options.hide.effect.type.toLowerCase()) {
                        case"fade":
                            d.elements.tooltip.fadeOut(d.options.hide.effect.length, f);
                            break;
                        case"slide":
                            d.elements.tooltip.slideUp(d.options.hide.effect.length, f);
                            break;
                        case"grow":
                            d.elements.tooltip.hide(d.options.hide.effect.length, f);
                            break;
                        default:
                            d.elements.tooltip.hide(null, f);
                            break
                    }
                    d.elements.tooltip.removeClass(d.options.style.classes.active)
                }
                return D.fn.qtip.log.error.call(d, 1, D.fn.qtip.constants.EVENT_HIDDEN, "hide")
            }, updatePosition: function (q, o) {
                var f, M, k, n, r, O, m, p, g, e, l, h, N, j;
                if (!d.status.rendered) {
                    return D.fn.qtip.log.error.call(d, 2, D.fn.qtip.constants.TOOLTIP_NOT_RENDERED, "updatePosition")
                } else {
                    if (d.options.position.type == "static") {
                        return D.fn.qtip.log.error.call(d, 1, D.fn.qtip.constants.CANNOT_POSITION_STATIC, "updatePosition")
                    }
                }
                M = {
                    position: {left: 0, top: 0},
                    dimensions: {height: 0, width: 0},
                    corner: d.options.position.corner.target
                };
                k = {
                    position: d.getPosition(),
                    dimensions: d.getDimensions(),
                    corner: d.options.position.corner.tooltip
                };
                if (d.options.position.target !== "mouse") {
                    if (d.options.position.target.get(0).nodeName.toLowerCase() == "area") {
                        n = d.options.position.target.attr("coords").split(",");
                        for (f = 0; f < n.length; f++) {
                            n[f] = parseInt(n[f])
                        }
                        r = d.options.position.target.parent("map").attr("name");
                        O = D('img[usemap="#' + r + '"]:first').offset();
                        M.position = {left: Math.floor(O.left + n[0]), top: Math.floor(O.top + n[1])};
                        switch (d.options.position.target.attr("shape").toLowerCase()) {
                            case"rect":
                                M.dimensions = {
                                    width: Math.ceil(Math.abs(n[2] - n[0])),
                                    height: Math.ceil(Math.abs(n[3] - n[1]))
                                };
                                break;
                            case"circle":
                                M.dimensions = {width: n[2] + 1, height: n[2] + 1};
                                break;
                            case"poly":
                                M.dimensions = {width: n[0], height: n[1]};
                                for (f = 0; f < n.length; f++) {
                                    if (f % 2 == 0) {
                                        if (n[f] > M.dimensions.width) {
                                            M.dimensions.width = n[f]
                                        }
                                        if (n[f] < n[0]) {
                                            M.position.left = Math.floor(O.left + n[f])
                                        }
                                    } else {
                                        if (n[f] > M.dimensions.height) {
                                            M.dimensions.height = n[f]
                                        }
                                        if (n[f] < n[1]) {
                                            M.position.top = Math.floor(O.top + n[f])
                                        }
                                    }
                                }
                                M.dimensions.width = M.dimensions.width - (M.position.left - O.left);
                                M.dimensions.height = M.dimensions.height - (M.position.top - O.top);
                                break;
                            default:
                                return D.fn.qtip.log.error.call(d, 4, D.fn.qtip.constants.INVALID_AREA_SHAPE, "updatePosition");
                                break
                        }
                        M.dimensions.width -= 2;
                        M.dimensions.height -= 2
                    } else {
                        if (d.options.position.target.add(document.body).length === 1) {
                            M.position = {left: D(document).scrollLeft(), top: D(document).scrollTop()};
                            M.dimensions = {height: D(window).height(), width: D(window).width()}
                        } else {
                            if (typeof d.options.position.target.attr("qtip") !== "undefined") {
                                M.position = d.options.position.target.qtip("api").cache.position
                            } else {
                                M.position = d.options.position.target.offset()
                            }
                            M.dimensions = {
                                height: d.options.position.target.outerHeight(),
                                width: d.options.position.target.outerWidth()
                            }
                        }
                    }
                    m = D.extend({}, M.position);
                    if (M.corner.search(/right/i) !== -1) {
                        m.left += M.dimensions.width
                    }
                    if (M.corner.search(/bottom/i) !== -1) {
                        m.top += M.dimensions.height
                    }
                    if (M.corner.search(/((top|bottom)Middle)|center/) !== -1) {
                        m.left += (M.dimensions.width / 2)
                    }
                    if (M.corner.search(/((left|right)Middle)|center/) !== -1) {
                        m.top += (M.dimensions.height / 2)
                    }
                } else {
                    M.position = m = {left: d.cache.mouse.x, top: d.cache.mouse.y};
                    M.dimensions = {height: 1, width: 1}
                }
                if (k.corner.search(/right/i) !== -1) {
                    m.left -= k.dimensions.width
                }
                if (k.corner.search(/bottom/i) !== -1) {
                    m.top -= k.dimensions.height
                }
                if (k.corner.search(/((top|bottom)Middle)|center/) !== -1) {
                    m.left -= (k.dimensions.width / 2)
                }
                if (k.corner.search(/((left|right)Middle)|center/) !== -1) {
                    m.top -= (k.dimensions.height / 2)
                }
                p = (D.browser.msie) ? 1 : 0;
                g = (D.browser.msie && parseInt(D.browser.version.charAt(0)) === 6) ? 1 : 0;
                if (d.options.style.border.radius > 0) {
                    if (k.corner.search(/Left/) !== -1) {
                        m.left -= d.options.style.border.radius
                    } else {
                        if (k.corner.search(/Right/) !== -1) {
                            m.left += d.options.style.border.radius
                        }
                    }
                    if (k.corner.search(/Top/) !== -1) {
                        m.top -= d.options.style.border.radius
                    } else {
                        if (k.corner.search(/Bottom/) !== -1) {
                            m.top += d.options.style.border.radius
                        }
                    }
                }
                if (p) {
                    if (k.corner.search(/top/) !== -1) {
                        m.top -= p
                    } else {
                        if (k.corner.search(/bottom/) !== -1) {
                            m.top += p
                        }
                    }
                    if (k.corner.search(/left/) !== -1) {
                        m.left -= p
                    } else {
                        if (k.corner.search(/right/) !== -1) {
                            m.left += p
                        }
                    }
                    if (k.corner.search(/leftMiddle|rightMiddle/) !== -1) {
                        m.top -= 1
                    }
                }
                if (d.options.position.adjust.screen === true) {
                    m = v.call(d, m, M, k)
                }
                if (d.options.position.target === "mouse" && d.options.position.adjust.mouse === true) {
                    if (d.options.position.adjust.screen === true && d.elements.tip) {
                        l = d.elements.tip.attr("rel")
                    } else {
                        l = d.options.position.corner.tooltip
                    }
                    m.left += (l.search(/right/i) !== -1) ? -6 : 6;
                    m.top += (l.search(/bottom/i) !== -1) ? -6 : 6
                }
                if (!d.elements.bgiframe && D.browser.msie && parseInt(D.browser.version.charAt(0)) == 6) {
                    D("select, object").each(function () {
                        h = D(this).offset();
                        h.bottom = h.top + D(this).height();
                        h.right = h.left + D(this).width();
                        if (m.top + k.dimensions.height >= h.top && m.left + k.dimensions.width >= h.left) {
                            z.call(d)
                        }
                    })
                }
                m.left += d.options.position.adjust.x;
                m.top += d.options.position.adjust.y;
                N = d.getPosition();
                if (m.left != N.left || m.top != N.top) {
                    j = d.beforePositionUpdate.call(d, q);
                    if (j === false) {
                        return d
                    }
                    d.cache.position = m;
                    if (o === true) {
                        d.status.animated = true;
                        d.elements.tooltip.animate(m, 200, "swing", function () {
                            d.status.animated = false
                        })
                    } else {
                        d.elements.tooltip.css(m)
                    }
                    d.onPositionUpdate.call(d, q);
                    if (typeof q !== "undefined" && q.type && q.type !== "mousemove") {
                        D.fn.qtip.log.error.call(d, 1, D.fn.qtip.constants.EVENT_POSITION_UPDATED, "updatePosition")
                    }
                }
                return d
            }, updateWidth: function (f) {
                var e;
                if (!d.status.rendered) {
                    return D.fn.qtip.log.error.call(d, 2, D.fn.qtip.constants.TOOLTIP_NOT_RENDERED, "updateWidth")
                } else {
                    if (f && typeof f !== "number") {
                        return D.fn.qtip.log.error.call(d, 2, "newWidth must be of type number", "updateWidth")
                    }
                }
                e = d.elements.contentWrapper.siblings().add(d.elements.tip).add(d.elements.button);
                if (!f) {
                    if (typeof d.options.style.width.value == "number") {
                        f = d.options.style.width.value
                    } else {
                        d.elements.tooltip.css({width: "auto"});
                        e.hide();
                        if (D.browser.msie) {
                            d.elements.wrapper.add(d.elements.contentWrapper.children()).css({zoom: "normal"})
                        }
                        f = d.getDimensions().width + 1;
                        if (!d.options.style.width.value) {
                            if (f > d.options.style.width.max) {
                                f = d.options.style.width.max
                            }
                            if (f < d.options.style.width.min) {
                                f = d.options.style.width.min
                            }
                        }
                    }
                }
                if (f % 2 !== 0) {
                    f -= 1
                }
                d.elements.tooltip.width(f);
                e.show();
                if (d.options.style.border.radius) {
                    d.elements.tooltip.find(".qtip-betweenCorners").each(function (g) {
                        D(this).width(f - (d.options.style.border.radius * 2))
                    })
                }
                if (D.browser.msie) {
                    d.elements.wrapper.add(d.elements.contentWrapper.children()).css({zoom: "1"});
                    d.elements.wrapper.width(f);
                    if (d.elements.bgiframe) {
                        d.elements.bgiframe.width(f).height(d.getDimensions.height)
                    }
                }
                return D.fn.qtip.log.error.call(d, 1, D.fn.qtip.constants.EVENT_WIDTH_UPDATED, "updateWidth")
            }, updateStyle: function (g) {
                var h, f, e, k, j;
                if (!d.status.rendered) {
                    return D.fn.qtip.log.error.call(d, 2, D.fn.qtip.constants.TOOLTIP_NOT_RENDERED, "updateStyle")
                } else {
                    if (typeof g !== "string" || !D.fn.qtip.styles[g]) {
                        return D.fn.qtip.log.error.call(d, 2, D.fn.qtip.constants.STYLE_NOT_DEFINED, "updateStyle")
                    }
                }
                d.options.style = I.call(d, D.fn.qtip.styles[g], d.options.user.style);
                d.elements.content.css(t(d.options.style));
                if (d.options.content.title.text !== false) {
                    d.elements.title.css(t(d.options.style.title, true))
                }
                d.elements.contentWrapper.css({borderColor: d.options.style.border.color});
                if (d.options.style.tip.corner !== false) {
                    if (D("<canvas>").get(0).getContext) {
                        h = d.elements.tooltip.find(".qtip-tip canvas:first");
                        e = h.get(0).getContext("2d");
                        e.clearRect(0, 0, 300, 300);
                        k = h.parent("div[rel]:first").attr("rel");
                        j = H(k, d.options.style.tip.size.width, d.options.style.tip.size.height);
                        B.call(d, h, j, d.options.style.tip.color || d.options.style.border.color)
                    } else {
                        if (D.browser.msie) {
                            h = d.elements.tooltip.find('.qtip-tip [nodeName="shape"]');
                            h.attr("fillcolor", d.options.style.tip.color || d.options.style.border.color)
                        }
                    }
                }
                if (d.options.style.border.radius > 0) {
                    d.elements.tooltip.find(".qtip-betweenCorners").css({backgroundColor: d.options.style.border.color});
                    if (D("<canvas>").get(0).getContext) {
                        f = C(d.options.style.border.radius);
                        d.elements.tooltip.find(".qtip-wrapper canvas").each(function () {
                            e = D(this).get(0).getContext("2d");
                            e.clearRect(0, 0, 300, 300);
                            k = D(this).parent("div[rel]:first").attr("rel");
                            s.call(d, D(this), f[k], d.options.style.border.radius, d.options.style.border.color)
                        })
                    } else {
                        if (D.browser.msie) {
                            d.elements.tooltip.find('.qtip-wrapper [nodeName="arc"]').each(function () {
                                D(this).attr("fillcolor", d.options.style.border.color)
                            })
                        }
                    }
                }
                return D.fn.qtip.log.error.call(d, 1, D.fn.qtip.constants.EVENT_STYLE_UPDATED, "updateStyle")
            }, updateContent: function (f, k) {
                var h, e, g;
                if (!d.status.rendered) {
                    return D.fn.qtip.log.error.call(d, 2, D.fn.qtip.constants.TOOLTIP_NOT_RENDERED, "updateContent")
                } else {
                    if (!f) {
                        return D.fn.qtip.log.error.call(d, 2, D.fn.qtip.constants.NO_CONTENT_PROVIDED, "updateContent")
                    }
                }
                h = d.beforeContentUpdate.call(d, f);
                if (typeof h == "string") {
                    f = h
                } else {
                    if (h === false) {
                        return
                    }
                }
                if (D.browser.msie) {
                    d.elements.contentWrapper.children().css({zoom: "normal"})
                }
                if (f.jquery && f.length > 0) {
                    f.clone(true).appendTo(d.elements.content).show()
                } else {
                    d.elements.content.html(f)
                }
                e = d.elements.content.find("img[complete=false]");
                if (e.length > 0) {
                    g = 0;
                    e.each(function (l) {
                        D('<img src="' + D(this).attr("src") + '" />').load(function () {
                            if (++g == e.length) {
                                j()
                            }
                        })
                    })
                } else {
                    j()
                }
                function j() {
                    d.updateWidth();
                    if (k !== false) {
                        if (d.options.position.type !== "static") {
                            d.updatePosition(d.elements.tooltip.is(":visible"), true)
                        }
                        if (d.options.style.tip.corner !== false) {
                            w.call(d)
                        }
                    }
                }

                d.onContentUpdate.call(d);
                return D.fn.qtip.log.error.call(d, 1, D.fn.qtip.constants.EVENT_CONTENT_UPDATED, "loadContent")
            }, loadContent: function (g, h, f) {
                var j;
                if (!d.status.rendered) {
                    return D.fn.qtip.log.error.call(d, 2, D.fn.qtip.constants.TOOLTIP_NOT_RENDERED, "loadContent")
                }
                j = d.beforeContentLoad.call(d);
                if (j === false) {
                    return d
                }
                if (f == "post") {
                    D.post(g, h, e)
                } else {
                    D.get(g, h, e)
                }
                function e(k) {
                    d.onContentLoad.call(d);
                    D.fn.qtip.log.error.call(d, 1, D.fn.qtip.constants.EVENT_CONTENT_LOADED, "loadContent");
                    d.updateContent(k)
                }

                return d
            }, updateTitle: function (e) {
                if (!d.status.rendered) {
                    return D.fn.qtip.log.error.call(d, 2, D.fn.qtip.constants.TOOLTIP_NOT_RENDERED, "updateTitle")
                } else {
                    if (!e) {
                        return D.fn.qtip.log.error.call(d, 2, D.fn.qtip.constants.NO_CONTENT_PROVIDED, "updateTitle")
                    }
                }
                returned = d.beforeTitleUpdate.call(d);
                if (returned === false) {
                    return d
                }
                if (d.elements.button) {
                    d.elements.button = d.elements.button.clone(true)
                }
                d.elements.title.html(e);
                if (d.elements.button) {
                    d.elements.title.prepend(d.elements.button)
                }
                d.onTitleUpdate.call(d);
                return D.fn.qtip.log.error.call(d, 1, D.fn.qtip.constants.EVENT_TITLE_UPDATED, "updateTitle")
            }, focus: function (f) {
                var j, e, g, h;
                if (!d.status.rendered) {
                    return D.fn.qtip.log.error.call(d, 2, D.fn.qtip.constants.TOOLTIP_NOT_RENDERED, "focus")
                } else {
                    if (d.options.position.type == "static") {
                        return D.fn.qtip.log.error.call(d, 1, D.fn.qtip.constants.CANNOT_FOCUS_STATIC, "focus")
                    }
                }
                j = parseInt(d.elements.tooltip.css("z-index"));
                e = 6000 + D("div.qtip[qtip]").length - 1;
                if (!d.status.focused && j !== e) {
                    h = d.beforeFocus.call(d, f);
                    if (h === false) {
                        return d
                    }
                    D("div.qtip[qtip]").not(d.elements.tooltip).each(function () {
                        if (D(this).qtip("api").status.rendered === true) {
                            g = parseInt(D(this).css("z-index"));
                            if (typeof g == "number" && g > -1) {
                                D(this).css({zIndex: parseInt(D(this).css("z-index")) - 1})
                            }
                            D(this).qtip("api").status.focused = false
                        }
                    });
                    d.elements.tooltip.css({zIndex: e});
                    d.status.focused = true;
                    d.onFocus.call(d, f);
                    D.fn.qtip.log.error.call(d, 1, D.fn.qtip.constants.EVENT_FOCUSED, "focus")
                }
                return d
            }, disable: function (e) {
                if (!d.status.rendered) {
                    return D.fn.qtip.log.error.call(d, 2, D.fn.qtip.constants.TOOLTIP_NOT_RENDERED, "disable")
                }
                if (e) {
                    if (!d.status.disabled) {
                        d.status.disabled = true;
                        D.fn.qtip.log.error.call(d, 1, D.fn.qtip.constants.EVENT_DISABLED, "disable")
                    } else {
                        D.fn.qtip.log.error.call(d, 1, D.fn.qtip.constants.TOOLTIP_ALREADY_DISABLED, "disable")
                    }
                } else {
                    if (d.status.disabled) {
                        d.status.disabled = false;
                        D.fn.qtip.log.error.call(d, 1, D.fn.qtip.constants.EVENT_ENABLED, "disable")
                    } else {
                        D.fn.qtip.log.error.call(d, 1, D.fn.qtip.constants.TOOLTIP_ALREADY_ENABLED, "disable")
                    }
                }
                return d
            }, destroy: function () {
                var f, e, g;
                e = d.beforeDestroy.call(d);
                if (e === false) {
                    return d
                }
                if (d.status.rendered) {
                    d.options.show.when.target.unbind("mousemove.qtip", d.updatePosition);
                    d.options.show.when.target.unbind("mouseout.qtip", d.hide);
                    d.options.show.when.target.unbind(d.options.show.when.event + ".qtip");
                    d.options.hide.when.target.unbind(d.options.hide.when.event + ".qtip");
                    d.elements.tooltip.unbind(d.options.hide.when.event + ".qtip");
                    d.elements.tooltip.unbind("mouseover.qtip", d.focus);
                    d.elements.tooltip.remove()
                } else {
                    d.options.show.when.target.unbind(d.options.show.when.event + ".qtip-create")
                }
                if (typeof d.elements.target.data("qtip") == "object") {
                    g = d.elements.target.data("qtip").interfaces;
                    if (typeof g == "object" && g.length > 0) {
                        for (f = 0; f < g.length - 1; f++) {
                            if (g[f].id == d.id) {
                                g.splice(f, 1)
                            }
                        }
                    }
                }
                delete D.fn.qtip.interfaces[d.id];
                if (typeof g == "object" && g.length > 0) {
                    d.elements.target.data("qtip").current = g.length - 1
                } else {
                    d.elements.target.removeData("qtip")
                }
                d.onDestroy.call(d);
                D.fn.qtip.log.error.call(d, 1, D.fn.qtip.constants.EVENT_DESTROYED, "destroy");
                return d.elements.target
            }, getPosition: function () {
                var f, e;
                if (!d.status.rendered) {
                    return D.fn.qtip.log.error.call(d, 2, D.fn.qtip.constants.TOOLTIP_NOT_RENDERED, "getPosition")
                }
                f = (d.elements.tooltip.css("display") !== "none") ? false : true;
                if (f) {
                    d.elements.tooltip.css({visiblity: "hidden"}).show()
                }
                e = d.elements.tooltip.offset();
                if (f) {
                    d.elements.tooltip.css({visiblity: "visible"}).hide()
                }
                return e
            }, getDimensions: function () {
                var f, e;
                if (!d.status.rendered) {
                    return D.fn.qtip.log.error.call(d, 2, D.fn.qtip.constants.TOOLTIP_NOT_RENDERED, "getDimensions")
                }
                f = (!d.elements.tooltip.is(":visible")) ? true : false;
                if (f) {
                    d.elements.tooltip.css({visiblity: "hidden"}).show()
                }
                e = {height: d.elements.tooltip.outerHeight(), width: d.elements.tooltip.outerWidth()};
                if (f) {
                    d.elements.tooltip.css({visiblity: "visible"}).hide()
                }
                return e
            }
        })
    }

    function u() {
        var f, b, d, e, c, g, a;
        f = this;
        f.beforeRender.call(f);
        f.status.rendered = true;
        f.elements.tooltip = '<div qtip="' + f.id + '" class="qtip ' + (f.options.style.classes.tooltip || f.options.style) + '"style="display:none; -moz-border-radius:0; -webkit-border-radius:0; border-radius:0;position:' + f.options.position.type + ';">  <div class="qtip-wrapper" style="position:relative; overflow:hidden; text-align:left;">    <div class="qtip-contentWrapper" style="overflow:hidden;">       <div class="qtip-content ' + f.options.style.classes.content + '"></div></div></div></div>';
        f.elements.tooltip = D(f.elements.tooltip);
        f.elements.tooltip.appendTo(f.options.position.container);
        f.elements.tooltip.data("qtip", {current: 0, interfaces: [f]});
        f.elements.wrapper = f.elements.tooltip.children("div:first");
        f.elements.contentWrapper = f.elements.wrapper.children("div:first").css({background: f.options.style.background});
        f.elements.content = f.elements.contentWrapper.children("div:first").css(t(f.options.style));
        if (D.browser.msie) {
            f.elements.wrapper.add(f.elements.content).css({zoom: 1})
        }
        if (f.options.hide.when.event == "unfocus") {
            f.elements.tooltip.attr("unfocus", true)
        }
        if (typeof f.options.style.width.value == "number") {
            f.updateWidth()
        }
        if (D("<canvas>").get(0).getContext || D.browser.msie) {
            if (f.options.style.border.radius > 0) {
                x.call(f)
            } else {
                f.elements.contentWrapper.css({border: f.options.style.border.width + "px solid " + f.options.style.border.color})
            }
            if (f.options.style.tip.corner !== false) {
                E.call(f)
            }
        } else {
            f.elements.contentWrapper.css({border: f.options.style.border.width + "px solid " + f.options.style.border.color});
            f.options.style.border.radius = 0;
            f.options.style.tip.corner = false;
            D.fn.qtip.log.error.call(f, 2, D.fn.qtip.constants.CANVAS_VML_NOT_SUPPORTED, "render")
        }
        if ((typeof f.options.content.text == "string" && f.options.content.text.length > 0) || (f.options.content.text.jquery && f.options.content.text.length > 0)) {
            d = f.options.content.text
        } else {
            if (typeof f.elements.target.attr("title") == "string" && f.elements.target.attr("title").length > 0) {
                d = f.elements.target.attr("title").replace("\\n", "<br />");
                f.elements.target.attr("title", "")
            } else {
                if (typeof f.elements.target.attr("alt") == "string" && f.elements.target.attr("alt").length > 0) {
                    d = f.elements.target.attr("alt").replace("\\n", "<br />");
                    f.elements.target.attr("alt", "")
                } else {
                    d = " ";
                    D.fn.qtip.log.error.call(f, 1, D.fn.qtip.constants.NO_VALID_CONTENT, "render")
                }
            }
        }
        if (f.options.content.title.text !== false) {
            A.call(f)
        }
        f.updateContent(d);
        y.call(f);
        if (f.options.show.ready === true) {
            f.show()
        }
        if (f.options.content.url !== false) {
            e = f.options.content.url;
            c = f.options.content.data;
            g = f.options.content.method || "get";
            f.loadContent(e, c, g)
        }
        f.onRender.call(f);
        D.fn.qtip.log.error.call(f, 1, D.fn.qtip.constants.EVENT_RENDERED, "render")
    }

    function x() {
        var m, e, n, c, g, p, l, k, a, f, h, b, d, o, j;
        m = this;
        m.elements.wrapper.find(".qtip-borderBottom, .qtip-borderTop").remove();
        n = m.options.style.border.width;
        c = m.options.style.border.radius;
        g = m.options.style.border.color || m.options.style.tip.color;
        p = C(c);
        l = {};
        for (e in p) {
            l[e] = '<div rel="' + e + '" style="' + ((e.search(/Left/) !== -1) ? "left" : "right") + ":0; position:absolute; height:" + c + "px; width:" + c + 'px; overflow:hidden; line-height:0.1px; font-size:1px">';
            if (D("<canvas>").get(0).getContext) {
                l[e] += '<canvas height="' + c + '" width="' + c + '" style="vertical-align: top"></canvas>'
            } else {
                if (D.browser.msie) {
                    k = c * 2 + 3;
                    l[e] += '<v:arc stroked="false" fillcolor="' + g + '" startangle="' + p[e][0] + '" endangle="' + p[e][1] + '" style="width:' + k + "px; height:" + k + "px; margin-top:" + ((e.search(/bottom/) !== -1) ? -2 : -1) + "px; margin-left:" + ((e.search(/Right/) !== -1) ? p[e][2] - 3.5 : -1) + 'px; vertical-align:top; display:inline-block; behavior:url(#default#VML)"></v:arc>'
                }
            }
            l[e] += "</div>"
        }
        a = m.getDimensions().width - (Math.max(n, c) * 2);
        f = '<div class="qtip-betweenCorners" style="height:' + c + "px; width:" + a + "px; overflow:hidden; background-color:" + g + '; line-height:0.1px; font-size:1px;">';
        h = '<div class="qtip-borderTop" dir="ltr" style="height:' + c + "px; margin-left:" + c + 'px; line-height:0.1px; font-size:1px; padding:0;">' + l.topLeft + l.topRight + f;
        m.elements.wrapper.prepend(h);
        b = '<div class="qtip-borderBottom" dir="ltr" style="height:' + c + "px; margin-left:" + c + 'px; line-height:0.1px; font-size:1px; padding:0;">' + l.bottomLeft + l.bottomRight + f;
        m.elements.wrapper.append(b);
        if (D("<canvas>").get(0).getContext) {
            m.elements.wrapper.find("canvas").each(function () {
                d = p[D(this).parent("[rel]:first").attr("rel")];
                s.call(m, D(this), d, c, g)
            })
        } else {
            if (D.browser.msie) {
                m.elements.tooltip.append('<v:image style="behavior:url(#default#VML);"></v:image>')
            }
        }
        o = Math.max(c, (c + (n - c)));
        j = Math.max(n - c, 0);
        m.elements.contentWrapper.css({border: "0px solid " + g, borderWidth: j + "px " + o + "px"})
    }

    function s(c, a, e, d) {
        var b = c.get(0).getContext("2d");
        b.fillStyle = d;
        b.beginPath();
        b.arc(a[0], a[1], e, 0, Math.PI * 2, false);
        b.fill()
    }

    function E(c) {
        var e, f, a, d, b;
        e = this;
        if (e.elements.tip !== null) {
            e.elements.tip.remove()
        }
        f = e.options.style.tip.color || e.options.style.border.color;
        if (e.options.style.tip.corner === false) {
            return
        } else {
            if (!c) {
                c = e.options.style.tip.corner
            }
        }
        a = H(c, e.options.style.tip.size.width, e.options.style.tip.size.height);
        e.elements.tip = '<div class="' + e.options.style.classes.tip + '" dir="ltr" rel="' + c + '" style="position:absolute; height:' + e.options.style.tip.size.height + "px; width:" + e.options.style.tip.size.width + 'px; margin:0 auto; line-height:0.1px; font-size:1px;">';
        if (D("<canvas>").get(0).getContext) {
            e.elements.tip += '<canvas height="' + e.options.style.tip.size.height + '" width="' + e.options.style.tip.size.width + '"></canvas>'
        } else {
            if (D.browser.msie) {
                d = e.options.style.tip.size.width + "," + e.options.style.tip.size.height;
                b = "m" + a[0][0] + "," + a[0][1];
                b += " l" + a[1][0] + "," + a[1][1];
                b += " " + a[2][0] + "," + a[2][1];
                b += " xe";
                e.elements.tip += '<v:shape fillcolor="' + f + '" stroked="false" filled="true" path="' + b + '" coordsize="' + d + '" style="width:' + e.options.style.tip.size.width + "px; height:" + e.options.style.tip.size.height + "px; line-height:0.1px; display:inline-block; behavior:url(#default#VML); vertical-align:" + ((c.search(/top/) !== -1) ? "bottom" : "top") + '"></v:shape>';
                e.elements.tip += '<v:image style="behavior:url(#default#VML);"></v:image>';
                e.elements.contentWrapper.css("position", "relative")
            }
        }
        e.elements.tooltip.prepend(e.elements.tip + "</div>");
        e.elements.tip = e.elements.tooltip.find("." + e.options.style.classes.tip).eq(0);
        if (D("<canvas>").get(0).getContext) {
            B.call(e, e.elements.tip.find("canvas:first"), a, f)
        }
        if (c.search(/top/) !== -1 && D.browser.msie && parseInt(D.browser.version.charAt(0)) === 6) {
            e.elements.tip.css({marginTop: -4})
        }
        w.call(e, c)
    }

    function B(c, a, d) {
        var b = c.get(0).getContext("2d");
        b.fillStyle = d;
        b.beginPath();
        b.moveTo(a[0][0], a[0][1]);
        b.lineTo(a[1][0], a[1][1]);
        b.lineTo(a[2][0], a[2][1]);
        b.fill()
    }

    function w(d) {
        var e, b, f, a, c;
        e = this;
        if (e.options.style.tip.corner === false || !e.elements.tip) {
            return
        }
        if (!d) {
            d = e.elements.tip.attr("rel")
        }
        b = positionAdjust = (D.browser.msie) ? 1 : 0;
        e.elements.tip.css(d.match(/left|right|top|bottom/)[0], 0);
        if (d.search(/top|bottom/) !== -1) {
            if (D.browser.msie) {
                if (parseInt(D.browser.version.charAt(0)) === 6) {
                    positionAdjust = (d.search(/top/) !== -1) ? -3 : 1
                } else {
                    positionAdjust = (d.search(/top/) !== -1) ? 1 : 2
                }
            }
            if (d.search(/Middle/) !== -1) {
                e.elements.tip.css({left: "50%", marginLeft: -(e.options.style.tip.size.width / 2)})
            } else {
                if (d.search(/Left/) !== -1) {
                    e.elements.tip.css({left: e.options.style.border.radius - b})
                } else {
                    if (d.search(/Right/) !== -1) {
                        e.elements.tip.css({right: e.options.style.border.radius + b})
                    }
                }
            }
            if (d.search(/top/) !== -1) {
                e.elements.tip.css({top: -positionAdjust})
            } else {
                e.elements.tip.css({bottom: positionAdjust})
            }
        } else {
            if (d.search(/left|right/) !== -1) {
                if (D.browser.msie) {
                    positionAdjust = (parseInt(D.browser.version.charAt(0)) === 6) ? 1 : ((d.search(/left/) !== -1) ? 1 : 2)
                }
                if (d.search(/Middle/) !== -1) {
                    e.elements.tip.css({top: "50%", marginTop: -(e.options.style.tip.size.height / 2)})
                } else {
                    if (d.search(/Top/) !== -1) {
                        e.elements.tip.css({top: e.options.style.border.radius - b})
                    } else {
                        if (d.search(/Bottom/) !== -1) {
                            e.elements.tip.css({bottom: e.options.style.border.radius + b})
                        }
                    }
                }
                if (d.search(/left/) !== -1) {
                    e.elements.tip.css({left: -positionAdjust})
                } else {
                    e.elements.tip.css({right: positionAdjust})
                }
            }
        }
        f = "padding-" + d.match(/left|right|top|bottom/)[0];
        a = e.options.style.tip.size[(f.search(/left|right/) !== -1) ? "width" : "height"];
        e.elements.tooltip.css("padding", 0);
        e.elements.tooltip.css(f, a);
        if (D.browser.msie && parseInt(D.browser.version.charAt(0)) == 6) {
            c = parseInt(e.elements.tip.css("margin-top")) || 0;
            c += parseInt(e.elements.content.css("margin-top")) || 0;
            e.elements.tip.css({marginTop: c})
        }
    }

    function A() {
        var a = this;
        if (a.elements.title !== null) {
            a.elements.title.remove()
        }
        a.elements.title = D('<div class="' + a.options.style.classes.title + '">').css(t(a.options.style.title, true)).css({zoom: (D.browser.msie) ? 1 : 0}).prependTo(a.elements.contentWrapper);
        if (a.options.content.title.text) {
            a.updateTitle.call(a, a.options.content.title.text)
        }
        if (a.options.content.title.button !== false && typeof a.options.content.title.button == "string") {
            a.elements.button = D('<a class="' + a.options.style.classes.button + '" style="float:right; position: relative"></a>').css(t(a.options.style.button, true)).html(a.options.content.title.button).prependTo(a.elements.title).click(function (b) {
                if (!a.status.disabled) {
                    a.hide(b)
                }
            })
        }
    }

    function y() {
        var e, c, d, f;
        e = this;
        c = e.options.show.when.target;
        d = e.options.hide.when.target;
        if (e.options.hide.fixed) {
            d = d.add(e.elements.tooltip)
        }
        if (e.options.hide.when.event == "inactive") {
            f = ["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseout", "mouseenter", "mouseleave", "mouseover"];
            function g(h) {
                if (e.status.disabled === true) {
                    return
                }
                clearTimeout(e.timers.inactive);
                e.timers.inactive = setTimeout(function () {
                    D(f).each(function () {
                        d.unbind(this + ".qtip-inactive");
                        e.elements.content.unbind(this + ".qtip-inactive")
                    });
                    e.hide(h)
                }, e.options.hide.delay)
            }
        } else {
            if (e.options.hide.fixed === true) {
                e.elements.tooltip.bind("mouseover.qtip", function () {
                    if (e.status.disabled === true) {
                        return
                    }
                    clearTimeout(e.timers.hide)
                })
            }
        }
        function a(h) {
            if (e.status.disabled === true) {
                return
            }
            if (e.options.hide.when.event == "inactive") {
                D(f).each(function () {
                    d.bind(this + ".qtip-inactive", g);
                    e.elements.content.bind(this + ".qtip-inactive", g)
                });
                g()
            }
            clearTimeout(e.timers.show);
            clearTimeout(e.timers.hide);
            e.timers.show = setTimeout(function () {
                e.show(h)
            }, e.options.show.delay)
        }

        function b(h) {
            if (e.status.disabled === true) {
                return
            }
            if (e.options.hide.fixed === true && e.options.hide.when.event.search(/mouse(out|leave)/i) !== -1 && D(h.relatedTarget).parents("div.qtip[qtip]").length > 0) {
                h.stopPropagation();
                h.preventDefault();
                clearTimeout(e.timers.hide);
                return false
            }
            clearTimeout(e.timers.show);
            clearTimeout(e.timers.hide);
            e.elements.tooltip.stop(true, true);
            e.timers.hide = setTimeout(function () {
                e.hide(h)
            }, e.options.hide.delay)
        }

        if ((e.options.show.when.target.add(e.options.hide.when.target).length === 1 && e.options.show.when.event == e.options.hide.when.event && e.options.hide.when.event !== "inactive") || e.options.hide.when.event == "unfocus") {
            e.cache.toggle = 0;
            c.bind(e.options.show.when.event + ".qtip", function (h) {
                if (e.cache.toggle == 0) {
                    a(h)
                } else {
                    b(h)
                }
            })
        } else {
            c.bind(e.options.show.when.event + ".qtip", a);
            if (e.options.hide.when.event !== "inactive") {
                d.bind(e.options.hide.when.event + ".qtip", b)
            }
        }
        if (e.options.position.type.search(/(fixed|absolute)/) !== -1) {
            e.elements.tooltip.bind("mouseover.qtip", e.focus)
        }
        if (e.options.position.target === "mouse" && e.options.position.type !== "static") {
            c.bind("mousemove.qtip", function (h) {
                e.cache.mouse = {x: h.pageX, y: h.pageY};
                if (e.status.disabled === false && e.options.position.adjust.mouse === true && e.options.position.type !== "static" && e.elements.tooltip.css("display") !== "none") {
                    e.updatePosition(h)
                }
            })
        }
    }

    function v(g, f, a) {
        var b, j, d, c, h, e;
        b = this;
        if (a.corner == "center") {
            return f.position
        }
        j = D.extend({}, g);
        c = {x: false, y: false};
        h = {
            left: (j.left < D.fn.qtip.cache.screen.scroll.left),
            right: (j.left + a.dimensions.width + 2 >= D.fn.qtip.cache.screen.width + D.fn.qtip.cache.screen.scroll.left),
            top: (j.top < D.fn.qtip.cache.screen.scroll.top),
            bottom: (j.top + a.dimensions.height + 2 >= D.fn.qtip.cache.screen.height + D.fn.qtip.cache.screen.scroll.top)
        };
        d = {
            left: (h.left && (a.corner.search(/right/i) != -1 || (a.corner.search(/right/i) == -1 && !h.right))),
            right: (h.right && (a.corner.search(/left/i) != -1 || (a.corner.search(/left/i) == -1 && !h.left))),
            top: (h.top && a.corner.search(/top/i) == -1),
            bottom: (h.bottom && a.corner.search(/bottom/i) == -1)
        };
        if (d.left) {
            if (b.options.position.target !== "mouse") {
                j.left = f.position.left + f.dimensions.width
            } else {
                j.left = b.cache.mouse.x
            }
            c.x = "Left"
        } else {
            if (d.right) {
                if (b.options.position.target !== "mouse") {
                    j.left = f.position.left - a.dimensions.width
                } else {
                    j.left = b.cache.mouse.x - a.dimensions.width
                }
                c.x = "Right"
            }
        }
        if (d.top) {
            if (b.options.position.target !== "mouse") {
                j.top = f.position.top + f.dimensions.height
            } else {
                j.top = b.cache.mouse.y
            }
            c.y = "top"
        } else {
            if (d.bottom) {
                if (b.options.position.target !== "mouse") {
                    j.top = f.position.top - a.dimensions.height
                } else {
                    j.top = b.cache.mouse.y - a.dimensions.height
                }
                c.y = "bottom"
            }
        }
        if (j.left < 0) {
            j.left = g.left;
            c.x = false
        }
        if (j.top < 0) {
            j.top = g.top;
            c.y = false
        }
        if (b.options.style.tip.corner !== false) {
            j.corner = new String(a.corner);
            if (c.x !== false) {
                j.corner = j.corner.replace(/Left|Right|Middle/, c.x)
            }
            if (c.y !== false) {
                j.corner = j.corner.replace(/top|bottom/, c.y)
            }
            if (j.corner !== b.elements.tip.attr("rel")) {
                E.call(b, j.corner)
            }
        }
        return j
    }

    function t(b, c) {
        var a, d;
        a = D.extend(true, {}, b);
        for (d in a) {
            if (c === true && d.search(/(tip|classes)/i) !== -1) {
                delete a[d]
            } else {
                if (!c && d.search(/(width|border|tip|title|classes|user)/i) !== -1) {
                    delete a[d]
                }
            }
        }
        return a
    }

    function G(a) {
        if (typeof a.tip !== "object") {
            a.tip = {corner: a.tip}
        }
        if (typeof a.tip.size !== "object") {
            a.tip.size = {width: a.tip.size, height: a.tip.size}
        }
        if (typeof a.border !== "object") {
            a.border = {width: a.border}
        }
        if (typeof a.width !== "object") {
            a.width = {value: a.width}
        }
        if (typeof a.width.max == "string") {
            a.width.max = parseInt(a.width.max.replace(/([0-9]+)/i, "$1"))
        }
        if (typeof a.width.min == "string") {
            a.width.min = parseInt(a.width.min.replace(/([0-9]+)/i, "$1"))
        }
        if (typeof a.tip.size.x == "number") {
            a.tip.size.width = a.tip.size.x;
            delete a.tip.size.x
        }
        if (typeof a.tip.size.y == "number") {
            a.tip.size.height = a.tip.size.y;
            delete a.tip.size.y
        }
        return a
    }

    function I() {
        var f, e, d, a, c, b;
        f = this;
        d = [true, {}];
        for (e = 0; e < arguments.length; e++) {
            d.push(arguments[e])
        }
        a = [D.extend.apply(D, d)];
        while (typeof a[0].name == "string") {
            a.unshift(G(D.fn.qtip.styles[a[0].name]))
        }
        a.unshift(true, {classes: {tooltip: "qtip-" + (arguments[0].name || "defaults")}}, D.fn.qtip.styles.defaults);
        c = D.extend.apply(D, a);
        b = (D.browser.msie) ? 1 : 0;
        c.tip.size.width += b;
        c.tip.size.height += b;
        if (c.tip.size.width % 2 > 0) {
            c.tip.size.width += 1
        }
        if (c.tip.size.height % 2 > 0) {
            c.tip.size.height += 1
        }
        if (c.tip.corner === true) {
            c.tip.corner = (f.options.position.corner.tooltip === "center") ? false : f.options.position.corner.tooltip
        }
        return c
    }

    function H(a, b, c) {
        var d = {
            bottomRight: [[0, 0], [b, c], [b, 0]],
            bottomLeft: [[0, 0], [b, 0], [0, c]],
            topRight: [[0, c], [b, 0], [b, c]],
            topLeft: [[0, 0], [0, c], [b, c]],
            topMiddle: [[0, c], [b / 2, 0], [b, c]],
            bottomMiddle: [[0, 0], [b, 0], [b / 2, c]],
            rightMiddle: [[0, 0], [b, c / 2], [0, c]],
            leftMiddle: [[b, 0], [b, c], [0, c / 2]]
        };
        d.leftTop = d.bottomRight;
        d.rightTop = d.bottomLeft;
        d.leftBottom = d.topRight;
        d.rightBottom = d.topLeft;
        return d[a]
    }

    function C(b) {
        var a;
        if (D("<canvas>").get(0).getContext) {
            a = {topLeft: [b, b], topRight: [0, b], bottomLeft: [b, 0], bottomRight: [0, 0]}
        } else {
            if (D.browser.msie) {
                a = {
                    topLeft: [-90, 90, 0],
                    topRight: [-90, 90, -b],
                    bottomLeft: [90, 270, 0],
                    bottomRight: [90, 270, -b]
                }
            }
        }
        return a
    }

    function z() {
        var c, b, a;
        c = this;
        a = c.getDimensions();
        b = '<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:false" style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=\'0\'); border: 1px solid red; height:' + a.height + "px; width:" + a.width + 'px" />';
        c.elements.bgiframe = c.elements.wrapper.prepend(b).children(".qtip-bgiframe:first")
    }

    D(document).ready(function () {
        D.fn.qtip.cache = {
            screen: {
                scroll: {left: D(window).scrollLeft(), top: D(window).scrollTop()},
                width: D(window).width(),
                height: D(window).height()
            }
        };
        var a;
        D(window).bind("resize scroll", function (b) {
            clearTimeout(a);
            a = setTimeout(function () {
                if (b.type === "scroll") {
                    D.fn.qtip.cache.screen.scroll = {left: D(window).scrollLeft(), top: D(window).scrollTop()}
                } else {
                    D.fn.qtip.cache.screen.width = D(window).width();
                    D.fn.qtip.cache.screen.height = D(window).height()
                }
                for (i = 0; i < D.fn.qtip.interfaces.length; i++) {
                    var c = D.fn.qtip.interfaces[i];
                    if (c.status.rendered === true && (c.options.position.type !== "static" || c.options.position.adjust.scroll && b.type === "scroll" || c.options.position.adjust.resize && b.type === "resize")) {
                        c.updatePosition(b, true)
                    }
                }
            }, 100)
        });
        D(document).bind("mousedown.qtip", function (b) {
            if (D(b.target).parents("div.qtip").length === 0) {
                D(".qtip[unfocus]").each(function () {
                    var c = D(this).qtip("api");
                    if (D(this).is(":visible") && !c.status.disabled && D(b.target).add(c.elements.target).length > 1) {
                        c.hide(b)
                    }
                })
            }
        })
    });
    D.fn.qtip.interfaces = [];
    D.fn.qtip.log = {
        error: function () {
            return this
        }
    };
    D.fn.qtip.constants = {};
    D.fn.qtip.defaults = {
        content: {
            prerender: false,
            text: false,
            url: false,
            data: null,
            title: {text: false, button: false}
        },
        position: {
            target: false,
            corner: {target: "bottomRight", tooltip: "topLeft"},
            adjust: {x: 0, y: 0, mouse: true, screen: false, scroll: true, resize: true},
            type: "absolute",
            container: false
        },
        show: {
            when: {target: false, event: "mouseover"},
            effect: {type: "fade", length: 100},
            delay: 140,
            solo: false,
            ready: false
        },
        hide: {when: {target: false, event: "mouseout"}, effect: {type: "fade", length: 100}, delay: 0, fixed: false},
        api: {
            beforeRender: function () {
            }, onRender: function () {
            }, beforePositionUpdate: function () {
            }, onPositionUpdate: function () {
            }, beforeShow: function () {
            }, onShow: function () {
            }, beforeHide: function () {
            }, onHide: function () {
            }, beforeContentUpdate: function () {
            }, onContentUpdate: function () {
            }, beforeContentLoad: function () {
            }, onContentLoad: function () {
            }, beforeTitleUpdate: function () {
            }, onTitleUpdate: function () {
            }, beforeDestroy: function () {
            }, onDestroy: function () {
            }, beforeFocus: function () {
            }, onFocus: function () {
            }
        }
    };
    D.fn.qtip.styles = {
        defaults: {
            background: "white",
            color: "#111",
            overflow: "hidden",
            textAlign: "left",
            width: {min: 0, max: 250},
            padding: "5px 9px",
            border: {width: 1, radius: 0, color: "#d3d3d3"},
            tip: {corner: false, color: false, size: {width: 13, height: 13}, opacity: 1},
            title: {background: "#e1e1e1", fontWeight: "bold", padding: "7px 12px"},
            button: {cursor: "pointer"},
            classes: {
                target: "",
                tip: "qtip-tip",
                title: "qtip-title",
                button: "qtip-button",
                content: "qtip-content",
                active: "qtip-active"
            }
        },
        cream: {
            border: {width: 3, radius: 0, color: "#F9E98E"},
            title: {background: "#F0DE7D", color: "#A27D35"},
            background: "#FBF7AA",
            color: "#A27D35",
            classes: {tooltip: "qtip-cream"}
        },
        light: {
            border: {width: 3, radius: 0, color: "#E2E2E2"},
            title: {background: "#f1f1f1", color: "#454545"},
            background: "white",
            color: "#454545",
            classes: {tooltip: "qtip-light"}
        },
        dark: {
            border: {width: 3, radius: 0, color: "#303030"},
            title: {background: "#404040", color: "#f3f3f3"},
            background: "#505050",
            color: "#f3f3f3",
            classes: {tooltip: "qtip-dark"}
        },
        red: {
            border: {width: 3, radius: 0, color: "#CE6F6F"},
            title: {background: "#f28279", color: "#9C2F2F"},
            background: "#F79992",
            color: "#9C2F2F",
            classes: {tooltip: "qtip-red"}
        },
        green: {
            border: {width: 3, radius: 0, color: "#A9DB66"},
            title: {background: "#b9db8c", color: "#58792E"},
            background: "#CDE6AC",
            color: "#58792E",
            classes: {tooltip: "qtip-green"}
        },
        blue: {
            border: {width: 3, radius: 0, color: "#ADD9ED"},
            title: {background: "#D0E9F5", color: "#5E99BD"},
            background: "#E5F6FE",
            color: "#4D9FBF",
            classes: {tooltip: "qtip-blue"}
        }
    }
})(jQuery);
(function (j) {
    var e = "0.3.4", k = "hasOwnProperty", b = /[\.\/]/, a = "*", g = function () {
    }, f = function (n, m) {
        return n - m
    }, d, h, l = {n: {}}, c = function (m, C) {
        var v = l, s = h, w = Array.prototype.slice.call(arguments, 2), y = c.listeners(m), x = 0, u = false, p, o = [], t = {}, q = [], n = d, A = [];
        d = m;
        h = 0;
        for (var r = 0, B = y.length; r < B; r++) {
            if ("zIndex" in y[r]) {
                o.push(y[r].zIndex);
                if (y[r].zIndex < 0) {
                    t[y[r].zIndex] = y[r]
                }
            }
        }
        o.sort(f);
        while (o[x] < 0) {
            p = t[o[x++]];
            q.push(p.apply(C, w));
            if (h) {
                h = s;
                return q
            }
        }
        for (r = 0; r < B; r++) {
            p = y[r];
            if ("zIndex" in p) {
                if (p.zIndex == o[x]) {
                    q.push(p.apply(C, w));
                    if (h) {
                        break
                    }
                    do {
                        x++;
                        p = t[o[x]];
                        p && q.push(p.apply(C, w));
                        if (h) {
                            break
                        }
                    } while (p)
                } else {
                    t[p.zIndex] = p
                }
            } else {
                q.push(p.apply(C, w));
                if (h) {
                    break
                }
            }
        }
        h = s;
        d = n;
        return q.length ? q : null
    };
    c.listeners = function (m) {
        var u = m.split(b), s = l, y, t, n, q, x, p, r, v, w = [s], o = [];
        for (q = 0, x = u.length; q < x; q++) {
            v = [];
            for (p = 0, r = w.length; p < r; p++) {
                s = w[p].n;
                t = [s[u[q]], s[a]];
                n = 2;
                while (n--) {
                    y = t[n];
                    if (y) {
                        v.push(y);
                        o = o.concat(y.f || [])
                    }
                }
            }
            w = v
        }
        return o
    };
    c.on = function (m, p) {
        var r = m.split(b), q = l;
        for (var n = 0, o = r.length; n < o; n++) {
            q = q.n;
            !q[r[n]] && (q[r[n]] = {n: {}});
            q = q[r[n]]
        }
        q.f = q.f || [];
        for (n = 0, o = q.f.length; n < o; n++) {
            if (q.f[n] == p) {
                return g
            }
        }
        q.f.push(p);
        return function (s) {
            if (+s == +s) {
                p.zIndex = +s
            }
        }
    };
    c.stop = function () {
        h = 1
    };
    c.nt = function (m) {
        if (m) {
            return new RegExp("(?:\\.|\\/|^)" + m + "(?:\\.|\\/|$)").test(d)
        }
        return d
    };
    c.off = c.unbind = function (n, s) {
        var u = n.split(b), t, w, o, q, x, p, r, v = [l];
        for (q = 0, x = u.length; q < x; q++) {
            for (p = 0; p < v.length; p += o.length - 2) {
                o = [p, 1];
                t = v[p].n;
                if (u[q] != a) {
                    if (t[u[q]]) {
                        o.push(t[u[q]])
                    }
                } else {
                    for (w in t) {
                        if (t[k](w)) {
                            o.push(t[w])
                        }
                    }
                }
                v.splice.apply(v, o)
            }
        }
        for (q = 0, x = v.length; q < x; q++) {
            t = v[q];
            while (t.n) {
                if (s) {
                    if (t.f) {
                        for (p = 0, r = t.f.length; p < r; p++) {
                            if (t.f[p] == s) {
                                t.f.splice(p, 1);
                                break
                            }
                        }
                        !t.f.length && delete t.f
                    }
                    for (w in t.n) {
                        if (t.n[k](w) && t.n[w].f) {
                            var m = t.n[w].f;
                            for (p = 0, r = m.length; p < r; p++) {
                                if (m[p] == s) {
                                    m.splice(p, 1);
                                    break
                                }
                            }
                            !m.length && delete t.n[w].f
                        }
                    }
                } else {
                    delete t.f;
                    for (w in t.n) {
                        if (t.n[k](w) && t.n[w].f) {
                            delete t.n[w].f
                        }
                    }
                }
                t = t.n
            }
        }
    };
    c.once = function (m, n) {
        var o = function () {
            var p = n.apply(this, arguments);
            c.unbind(m, o);
            return p
        };
        return c.on(m, o)
    };
    c.version = e;
    c.toString = function () {
        return "You are running Eve " + e
    };
    (typeof module != "undefined" && module.exports) ? (module.exports = c) : (typeof define != "undefined" ? (define("eve", [], function () {
        return c
    })) : (j.eve = c))
})(this);
(function () {
    function aR(g) {
        if (aR.is(g, "function")) {
            return ao ? g() : eve.on("raphael.DOMload", g)
        } else {
            if (aR.is(g, bd)) {
                return aR._engine.create[bG](aR, g.splice(0, 3 + aR.is(g[0], aL))).add(g)
            } else {
                var b = Array.prototype.slice.call(arguments, 0);
                if (aR.is(b[b.length - 1], "function")) {
                    var d = b.pop();
                    return ao ? d.call(aR._engine.create[bG](aR, b)) : eve.on("raphael.DOMload", function () {
                        d.call(aR._engine.create[bG](aR, b))
                    })
                } else {
                    return aR._engine.create[bG](aR, arguments)
                }
            }
        }
    }

    aR.version = "2.1.0";
    aR.eve = eve;
    var ao, a = /[, ]+/, bw = {
        circle: 1,
        rect: 1,
        path: 1,
        ellipse: 1,
        text: 1,
        image: 1
    }, br = /\{(\d+)\}/g, bJ = "prototype", ak = "hasOwnProperty", aA = {
        doc: document,
        win: window
    }, s = {was: Object.prototype[ak].call(aA.win, "Raphael"), is: aA.win.Raphael}, bF = function () {
        this.ca = this.customAttributes = {}
    }, a4, bo = "appendChild", bG = "apply", bE = "concat", Z = "createTouch" in aA.doc, aX = "", aQ = " ", bH = String, F = "split", Q = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[F](aQ), bx = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
    }, bK = bH.prototype.toLowerCase, au = Math, m = au.max, bm = au.min, aw = au.abs, bp = au.pow, aV = au.PI, aL = "number", aj = "string", bd = "array", a5 = "toString", a9 = "fill", a1 = Object.prototype.toString, bz = {}, j = "push", f = aR._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, A = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i, av = {
        "NaN": 1,
        "Infinity": 1,
        "-Infinity": 1
    }, c = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, ah = au.round, z = "setAttribute", an = parseFloat, U = parseInt, bt = bH.prototype.toUpperCase, r = aR._availableAttrs = {
        "arrow-end": "none",
        "arrow-start": "none",
        blur: 0,
        "clip-rect": "0 0 1e9 1e9",
        cursor: "default",
        cx: 0,
        cy: 0,
        fill: "#fff",
        "fill-opacity": 1,
        font: '10px "Arial"',
        "font-family": '"Arial"',
        "font-size": "10",
        "font-style": "normal",
        "font-weight": 400,
        gradient: 0,
        height: 0,
        href: "http://raphaeljs.com/",
        "letter-spacing": 0,
        opacity: 1,
        path: "M0,0",
        r: 0,
        rx: 0,
        ry: 0,
        src: "",
        stroke: "#000",
        "stroke-dasharray": "",
        "stroke-linecap": "butt",
        "stroke-linejoin": "butt",
        "stroke-miterlimit": 0,
        "stroke-opacity": 1,
        "stroke-width": 1,
        target: "_blank",
        "text-anchor": "middle",
        title: "Raphael",
        transform: "",
        width: 0,
        x: 0,
        y: 0
    }, ar = aR._availableAnimAttrs = {
        blur: aL,
        "clip-rect": "csv",
        cx: aL,
        cy: aL,
        fill: "colour",
        "fill-opacity": aL,
        "font-size": aL,
        height: aL,
        opacity: aL,
        path: "path",
        r: aL,
        rx: aL,
        ry: aL,
        stroke: "colour",
        "stroke-opacity": aL,
        "stroke-width": aL,
        transform: "transform",
        width: aL,
        x: aL,
        y: aL
    }, ac = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g, bi = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/, n = {
        hs: 1,
        rg: 1
    }, bg = /,?([achlmqrstvxz]),?/gi, a0 = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig, ai = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig, aP = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig, aW = aR._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, aU = {}, bq = function (g, d) {
        return g.key - d.key
    }, u = function (g, d) {
        return an(g) - an(d)
    }, I = function () {
    }, bB = function (b) {
        return b
    }, az = aR._rectPath = function (b, R, d, g, E) {
        if (E) {
            return [["M", b + E, R], ["l", d - E * 2, 0], ["a", E, E, 0, 0, 1, E, E], ["l", 0, g - E * 2], ["a", E, E, 0, 0, 1, -E, E], ["l", E * 2 - d, 0], ["a", E, E, 0, 0, 1, -E, -E], ["l", 0, E * 2 - g], ["a", E, E, 0, 0, 1, E, -E], ["z"]]
        }
        return [["M", b, R], ["l", d, 0], ["l", 0, g], ["l", -d, 0], ["z"]]
    }, K = function (b, E, g, d) {
        if (d == null) {
            d = g
        }
        return [["M", b, E], ["m", 0, -d], ["a", g, d, 0, 1, 1, 0, 2 * d], ["a", g, d, 0, 1, 1, 0, -2 * d], ["z"]]
    }, N = aR._getPath = {
        path: function (b) {
            return b.attr("path")
        }, circle: function (d) {
            var b = d.attrs;
            return K(b.cx, b.cy, b.r)
        }, ellipse: function (d) {
            var b = d.attrs;
            return K(b.cx, b.cy, b.rx, b.ry)
        }, rect: function (d) {
            var b = d.attrs;
            return az(b.x, b.y, b.width, b.height, b.r)
        }, image: function (d) {
            var b = d.attrs;
            return az(b.x, b.y, b.width, b.height)
        }, text: function (b) {
            var d = b._getBBox();
            return az(d.x, d.y, d.width, d.height)
        }
    }, L = aR.mapPath = function (bN, S) {
        if (!S) {
            return bN
        }
        var bL, R, g, b, bM, E, d;
        bN = W(bN);
        for (g = 0, bM = bN.length; g < bM; g++) {
            d = bN[g];
            for (b = 1, E = d.length; b < E; b += 2) {
                bL = S.x(d[b], d[b + 1]);
                R = S.y(d[b], d[b + 1]);
                d[b] = bL;
                d[b + 1] = R
            }
        }
        return bN
    };
    aR._g = aA;
    aR.type = (aA.win.SVGAngle || aA.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML");
    if (aR.type == "VML") {
        var aE = aA.doc.createElement("div"), aH;
        aE.innerHTML = '<v:shape adj="1"/>';
        aH = aE.firstChild;
        aH.style.behavior = "url(#default#VML)";
        if (!(aH && typeof aH.adj == "object")) {
            return (aR.type = aX)
        }
        aE = null
    }
    aR.svg = !(aR.vml = aR.type == "VML");
    aR._Paper = bF;
    aR.fn = a4 = bF.prototype = aR.prototype;
    aR._id = 0;
    aR._oid = 0;
    aR.is = function (d, b) {
        b = bK.call(b);
        if (b == "finite") {
            return !av[ak](+d)
        }
        if (b == "array") {
            return d instanceof Array
        }
        return (b == "null" && d === null) || (b == typeof d && d !== null) || (b == "object" && d === Object(d)) || (b == "array" && Array.isArray && Array.isArray(d)) || a1.call(d).slice(8, -1).toLowerCase() == b
    };
    function X(g) {
        if (Object(g) !== g) {
            return g
        }
        var d = new g.constructor;
        for (var b in g) {
            if (g[ak](b)) {
                d[b] = X(g[b])
            }
        }
        return d
    }

    aR.angle = function (R, bL, g, S, d, E) {
        if (d == null) {
            var b = R - g, bM = bL - S;
            if (!b && !bM) {
                return 0
            }
            return (180 + au.atan2(-bM, -b) * 180 / aV + 360) % 360
        } else {
            return aR.angle(R, bL, d, E) - aR.angle(g, S, d, E)
        }
    };
    aR.rad = function (b) {
        return b % 360 * aV / 180
    };
    aR.deg = function (b) {
        return b * 180 / aV % 360
    };
    aR.snapTo = function (d, E, b) {
        b = aR.is(b, "finite") ? b : 10;
        if (aR.is(d, bd)) {
            var g = d.length;
            while (g--) {
                if (aw(d[g] - E) <= b) {
                    return d[g]
                }
            }
        } else {
            d = +d;
            var R = E % d;
            if (R < b) {
                return E - R
            }
            if (R > d - b) {
                return E - R + d
            }
        }
        return E
    };
    var h = aR.createUUID = (function (b, d) {
        return function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(b, d).toUpperCase()
        }
    })(/[xy]/g, function (g) {
        var d = au.random() * 16 | 0, b = g == "x" ? d : (d & 3 | 8);
        return b.toString(16)
    });
    aR.setWindow = function (b) {
        eve("raphael.setWindow", aR, aA.win, b);
        aA.win = b;
        aA.doc = aA.win.document;
        if (aR._engine.initWin) {
            aR._engine.initWin(aA.win)
        }
    };
    var bf = function (g) {
        if (aR.vml) {
            var b = /^\s+|\s+$/g;
            var R;
            try {
                var S = new ActiveXObject("htmlfile");
                S.write("<body>");
                S.close();
                R = S.body
            } catch (bL) {
                R = createPopup().document.body
            }
            var d = R.createTextRange();
            bf = aG(function (bM) {
                try {
                    R.style.color = bH(bM).replace(b, aX);
                    var bN = d.queryCommandValue("ForeColor");
                    bN = ((bN & 255) << 16) | (bN & 65280) | ((bN & 16711680) >>> 16);
                    return "#" + ("000000" + bN.toString(16)).slice(-6)
                } catch (bO) {
                    return "none"
                }
            })
        } else {
            var E = aA.doc.createElement("i");
            E.title = "Rapha\xebl Colour Picker";
            E.style.display = "none";
            aA.doc.body.appendChild(E);
            bf = aG(function (bM) {
                E.style.color = bM;
                return aA.doc.defaultView.getComputedStyle(E, aX).getPropertyValue("color")
            })
        }
        return bf(g)
    }, aI = function () {
        return "hsb(" + [this.h, this.s, this.b] + ")"
    }, M = function () {
        return "hsl(" + [this.h, this.s, this.l] + ")"
    }, x = function () {
        return this.hex
    }, aY = function (S, R, d) {
        if (R == null && aR.is(S, "object") && "r" in S && "g" in S && "b" in S) {
            d = S.b;
            R = S.g;
            S = S.r
        }
        if (R == null && aR.is(S, aj)) {
            var E = aR.getRGB(S);
            S = E.r;
            R = E.g;
            d = E.b
        }
        if (S > 1 || R > 1 || d > 1) {
            S /= 255;
            R /= 255;
            d /= 255
        }
        return [S, R, d]
    }, a2 = function (S, R, d, bL) {
        S *= 255;
        R *= 255;
        d *= 255;
        var E = {r: S, g: R, b: d, hex: aR.rgb(S, R, d), toString: x};
        aR.is(bL, "finite") && (E.opacity = bL);
        return E
    };
    aR.color = function (b) {
        var d;
        if (aR.is(b, "object") && "h" in b && "s" in b && "b" in b) {
            d = aR.hsb2rgb(b);
            b.r = d.r;
            b.g = d.g;
            b.b = d.b;
            b.hex = d.hex
        } else {
            if (aR.is(b, "object") && "h" in b && "s" in b && "l" in b) {
                d = aR.hsl2rgb(b);
                b.r = d.r;
                b.g = d.g;
                b.b = d.b;
                b.hex = d.hex
            } else {
                if (aR.is(b, "string")) {
                    b = aR.getRGB(b)
                }
                if (aR.is(b, "object") && "r" in b && "g" in b && "b" in b) {
                    d = aR.rgb2hsl(b);
                    b.h = d.h;
                    b.s = d.s;
                    b.l = d.l;
                    d = aR.rgb2hsb(b);
                    b.v = d.b
                } else {
                    b = {hex: "none"};
                    b.r = b.g = b.b = b.h = b.s = b.v = b.l = -1
                }
            }
        }
        b.toString = x;
        return b
    };
    aR.hsb2rgb = function (bL, bO, bM, E) {
        if (this.is(bL, "object") && "h" in bL && "s" in bL && "b" in bL) {
            bM = bL.b;
            bO = bL.s;
            bL = bL.h;
            E = bL.o
        }
        bL *= 360;
        var S, bN, d, g, b;
        bL = (bL % 360) / 60;
        b = bM * bO;
        g = b * (1 - aw(bL % 2 - 1));
        S = bN = d = bM - b;
        bL = ~~bL;
        S += [b, g, 0, 0, g, b][bL];
        bN += [g, b, b, g, 0, 0][bL];
        d += [0, 0, g, b, b, g][bL];
        return a2(S, bN, d, E)
    };
    aR.hsl2rgb = function (bM, bO, S, E) {
        if (this.is(bM, "object") && "h" in bM && "s" in bM && "l" in bM) {
            S = bM.l;
            bO = bM.s;
            bM = bM.h
        }
        if (bM > 1 || bO > 1 || S > 1) {
            bM /= 360;
            bO /= 100;
            S /= 100
        }
        bM *= 360;
        var bL, bN, d, g, b;
        bM = (bM % 360) / 60;
        b = 2 * bO * (S < 0.5 ? S : 1 - S);
        g = b * (1 - aw(bM % 2 - 1));
        bL = bN = d = S - b / 2;
        bM = ~~bM;
        bL += [b, g, 0, 0, g, b][bM];
        bN += [g, b, b, g, 0, 0][bM];
        d += [0, 0, g, b, b, g][bM];
        return a2(bL, bN, d, E)
    };
    aR.rgb2hsb = function (bN, bM, d) {
        d = aY(bN, bM, d);
        bN = d[0];
        bM = d[1];
        d = d[2];
        var bL, R, E, bO;
        E = m(bN, bM, d);
        bO = E - bm(bN, bM, d);
        bL = (bO == 0 ? null : E == bN ? (bM - d) / bO : E == bM ? (d - bN) / bO + 2 : (bN - bM) / bO + 4);
        bL = ((bL + 360) % 6) * 60 / 360;
        R = bO == 0 ? 0 : bO / E;
        return {h: bL, s: R, b: E, toString: aI}
    };
    aR.rgb2hsl = function (d, bM, bP) {
        bP = aY(d, bM, bP);
        d = bP[0];
        bM = bP[1];
        bP = bP[2];
        var bQ, bL, bO, bN, R, E;
        bN = m(d, bM, bP);
        R = bm(d, bM, bP);
        E = bN - R;
        bQ = (E == 0 ? null : bN == d ? (bM - bP) / E : bN == bM ? (bP - d) / E + 2 : (d - bM) / E + 4);
        bQ = ((bQ + 360) % 6) * 60 / 360;
        bO = (bN + R) / 2;
        bL = (E == 0 ? 0 : bO < 0.5 ? E / (2 * bO) : E / (2 - 2 * bO));
        return {h: bQ, s: bL, l: bO, toString: M}
    };
    aR._path2string = function () {
        return this.join(",").replace(bg, "$1")
    };
    function bk(E, g) {
        for (var b = 0, d = E.length; b < d; b++) {
            if (E[b] === g) {
                return E.push(E.splice(b, 1)[0])
            }
        }
    }

    function aG(E, d, b) {
        function g() {
            var R = Array.prototype.slice.call(arguments, 0), bL = R.join("\u2400"), S = g.cache = g.cache || {}, bM = g.count = g.count || [];
            if (S[ak](bL)) {
                bk(bM, bL);
                return b ? b(S[bL]) : S[bL]
            }
            bM.length >= 1000 && delete S[bM.shift()];
            bM.push(bL);
            S[bL] = E[bG](d, R);
            return b ? b(S[bL]) : S[bL]
        }

        return g
    }

    var bv = aR._preload = function (g, d) {
        var b = aA.doc.createElement("img");
        b.style.cssText = "position:absolute;left:-9999em;top:-9999em";
        b.onload = function () {
            d.call(this);
            this.onload = null;
            aA.doc.body.removeChild(this)
        };
        b.onerror = function () {
            aA.doc.body.removeChild(this)
        };
        aA.doc.body.appendChild(b);
        b.src = g
    };

    function aq() {
        return this.hex
    }

    aR.getRGB = aG(function (b) {
        if (!b || !!((b = bH(b)).indexOf("-") + 1)) {
            return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: aq}
        }
        if (b == "none") {
            return {r: -1, g: -1, b: -1, hex: "none", toString: aq}
        }
        !(n[ak](b.toLowerCase().substring(0, 2)) || b.charAt() == "#") && (b = bf(b));
        var R, d, g, bL, E, bN, bM, S = b.match(A);
        if (S) {
            if (S[2]) {
                bL = U(S[2].substring(5), 16);
                g = U(S[2].substring(3, 5), 16);
                d = U(S[2].substring(1, 3), 16)
            }
            if (S[3]) {
                bL = U((bN = S[3].charAt(3)) + bN, 16);
                g = U((bN = S[3].charAt(2)) + bN, 16);
                d = U((bN = S[3].charAt(1)) + bN, 16)
            }
            if (S[4]) {
                bM = S[4][F](bi);
                d = an(bM[0]);
                bM[0].slice(-1) == "%" && (d *= 2.55);
                g = an(bM[1]);
                bM[1].slice(-1) == "%" && (g *= 2.55);
                bL = an(bM[2]);
                bM[2].slice(-1) == "%" && (bL *= 2.55);
                S[1].toLowerCase().slice(0, 4) == "rgba" && (E = an(bM[3]));
                bM[3] && bM[3].slice(-1) == "%" && (E /= 100)
            }
            if (S[5]) {
                bM = S[5][F](bi);
                d = an(bM[0]);
                bM[0].slice(-1) == "%" && (d *= 2.55);
                g = an(bM[1]);
                bM[1].slice(-1) == "%" && (g *= 2.55);
                bL = an(bM[2]);
                bM[2].slice(-1) == "%" && (bL *= 2.55);
                (bM[0].slice(-3) == "deg" || bM[0].slice(-1) == "\xb0") && (d /= 360);
                S[1].toLowerCase().slice(0, 4) == "hsba" && (E = an(bM[3]));
                bM[3] && bM[3].slice(-1) == "%" && (E /= 100);
                return aR.hsb2rgb(d, g, bL, E)
            }
            if (S[6]) {
                bM = S[6][F](bi);
                d = an(bM[0]);
                bM[0].slice(-1) == "%" && (d *= 2.55);
                g = an(bM[1]);
                bM[1].slice(-1) == "%" && (g *= 2.55);
                bL = an(bM[2]);
                bM[2].slice(-1) == "%" && (bL *= 2.55);
                (bM[0].slice(-3) == "deg" || bM[0].slice(-1) == "\xb0") && (d /= 360);
                S[1].toLowerCase().slice(0, 4) == "hsla" && (E = an(bM[3]));
                bM[3] && bM[3].slice(-1) == "%" && (E /= 100);
                return aR.hsl2rgb(d, g, bL, E)
            }
            S = {r: d, g: g, b: bL, toString: aq};
            S.hex = "#" + (16777216 | bL | (g << 8) | (d << 16)).toString(16).slice(1);
            aR.is(E, "finite") && (S.opacity = E);
            return S
        }
        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: aq}
    }, aR);
    aR.hsb = aG(function (E, g, d) {
        return aR.hsb2rgb(E, g, d).hex
    });
    aR.hsl = aG(function (g, d, b) {
        return aR.hsl2rgb(g, d, b).hex
    });
    aR.rgb = aG(function (R, E, d) {
        return "#" + (16777216 | d | (E << 8) | (R << 16)).toString(16).slice(1)
    });
    aR.getColor = function (d) {
        var g = this.getColor.start = this.getColor.start || {
                h: 0,
                s: 1,
                b: d || 0.75
            }, b = this.hsb2rgb(g.h, g.s, g.b);
        g.h += 0.075;
        if (g.h > 1) {
            g.h = 0;
            g.s -= 0.2;
            g.s <= 0 && (this.getColor.start = {h: 0, s: 1, b: g.b})
        }
        return b.hex
    };
    aR.getColor.reset = function () {
        delete this.start
    };
    function bb(E, bL) {
        var S = [];
        for (var g = 0, b = E.length; b - 2 * !bL > g; g += 2) {
            var R = [{x: +E[g - 2], y: +E[g - 1]}, {x: +E[g], y: +E[g + 1]}, {
                x: +E[g + 2],
                y: +E[g + 3]
            }, {x: +E[g + 4], y: +E[g + 5]}];
            if (bL) {
                if (!g) {
                    R[0] = {x: +E[b - 2], y: +E[b - 1]}
                } else {
                    if (b - 4 == g) {
                        R[3] = {x: +E[0], y: +E[1]}
                    } else {
                        if (b - 2 == g) {
                            R[2] = {x: +E[0], y: +E[1]};
                            R[3] = {x: +E[2], y: +E[3]}
                        }
                    }
                }
            } else {
                if (b - 4 == g) {
                    R[3] = R[2]
                } else {
                    if (!g) {
                        R[0] = {x: +E[g], y: +E[g + 1]}
                    }
                }
            }
            S.push(["C", (-R[0].x + 6 * R[1].x + R[2].x) / 6, (-R[0].y + 6 * R[1].y + R[2].y) / 6, (R[1].x + 6 * R[2].x - R[3].x) / 6, (R[1].y + 6 * R[2].y - R[3].y) / 6, R[2].x, R[2].y])
        }
        return S
    }

    aR.parsePathString = function (b) {
        if (!b) {
            return null
        }
        var g = Y(b);
        if (g.arr) {
            return aZ(g.arr)
        }
        var E = {a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0}, d = [];
        if (aR.is(b, bd) && aR.is(b[0], bd)) {
            d = aZ(b)
        }
        if (!d.length) {
            bH(b).replace(a0, function (S, R, bN) {
                var bM = [], bL = R.toLowerCase();
                bN.replace(aP, function (bP, bO) {
                    bO && bM.push(+bO)
                });
                if (bL == "m" && bM.length > 2) {
                    d.push([R][bE](bM.splice(0, 2)));
                    bL = "l";
                    R = R == "m" ? "l" : "L"
                }
                if (bL == "r") {
                    d.push([R][bE](bM))
                } else {
                    while (bM.length >= E[bL]) {
                        d.push([R][bE](bM.splice(0, E[bL])));
                        if (!E[bL]) {
                            break
                        }
                    }
                }
            })
        }
        d.toString = aR._path2string;
        g.arr = aZ(d);
        return d
    };
    aR.parseTransformString = aG(function (d) {
        if (!d) {
            return null
        }
        var g = {r: 3, s: 4, t: 2, m: 6}, b = [];
        if (aR.is(d, bd) && aR.is(d[0], bd)) {
            b = aZ(d)
        }
        if (!b.length) {
            bH(d).replace(ai, function (R, E, bM) {
                var bL = [], S = bK.call(E);
                bM.replace(aP, function (bO, bN) {
                    bN && bL.push(+bN)
                });
                b.push([E][bE](bL))
            })
        }
        b.toString = aR._path2string;
        return b
    });
    var Y = function (d) {
        var b = Y.ps = Y.ps || {};
        if (b[d]) {
            b[d].sleep = 100
        } else {
            b[d] = {sleep: 100}
        }
        setTimeout(function () {
            for (var g in b) {
                if (b[ak](g) && g != d) {
                    b[g].sleep--;
                    !b[g].sleep && delete b[g]
                }
            }
        });
        return b[d]
    };
    aR.findDotsAtSegment = function (d, b, b3, b1, bL, R, bO, bM, bW) {
        var bT = 1 - bW, bY = bp(bT, 3), bZ = bp(bT, 2), bQ = bW * bW, bN = bQ * bW, bS = bY * d + bZ * 3 * bW * b3 + bT * 3 * bW * bW * bL + bN * bO, bP = bY * b + bZ * 3 * bW * b1 + bT * 3 * bW * bW * R + bN * bM, bX = d + 2 * bW * (b3 - d) + bQ * (bL - 2 * b3 + d), bV = b + 2 * bW * (b1 - b) + bQ * (R - 2 * b1 + b), b2 = b3 + 2 * bW * (bL - b3) + bQ * (bO - 2 * bL + b3), b0 = b1 + 2 * bW * (R - b1) + bQ * (bM - 2 * R + b1), bU = bT * d + bW * b3, bR = bT * b + bW * b1, E = bT * bL + bW * bO, g = bT * R + bW * bM, S = (90 - au.atan2(bX - b2, bV - b0) * 180 / aV);
        (bX > b2 || bV < b0) && (S += 180);
        return {x: bS, y: bP, m: {x: bX, y: bV}, n: {x: b2, y: b0}, start: {x: bU, y: bR}, end: {x: E, y: g}, alpha: S}
    };
    aR.bezierBBox = function (d, b, E, g, bN, bL, S, R) {
        if (!aR.is(d, "array")) {
            d = [d, b, E, g, bN, bL, S, R]
        }
        var bM = ba.apply(null, d);
        return {
            x: bM.min.x,
            y: bM.min.y,
            x2: bM.max.x,
            y2: bM.max.y,
            width: bM.max.x - bM.min.x,
            height: bM.max.y - bM.min.y
        }
    };
    aR.isPointInsideBBox = function (d, b, g) {
        return b >= d.x && b <= d.x2 && g >= d.y && g <= d.y2
    };
    aR.isBBoxIntersect = function (g, d) {
        var b = aR.isPointInsideBBox;
        return b(d, g.x, g.y) || b(d, g.x2, g.y) || b(d, g.x, g.y2) || b(d, g.x2, g.y2) || b(g, d.x, d.y) || b(g, d.x2, d.y) || b(g, d.x, d.y2) || b(g, d.x2, d.y2) || (g.x < d.x2 && g.x > d.x || d.x < g.x2 && d.x > g.x) && (g.y < d.y2 && g.y > d.y || d.y < g.y2 && d.y > g.y)
    };
    function bj(b, bL, S, R, E) {
        var g = -3 * bL + 9 * S - 9 * R + 3 * E, d = b * g + 6 * bL - 12 * S + 6 * R;
        return b * d - 3 * bL + 3 * S
    }

    function q(bW, R, bV, g, bU, d, bR, b, bO) {
        if (bO == null) {
            bO = 1
        }
        bO = bO > 1 ? 1 : bO < 0 ? 0 : bO;
        var bP = bO / 2, bQ = 12, bL = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816], bT = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472], E = 0;
        for (var bS = 0; bS < bQ; bS++) {
            var bM = bP * bL[bS] + bP, bN = bj(bM, bW, bV, bU, bR), bX = bj(bM, R, g, d, b), S = bN * bN + bX * bX;
            E += bT[bS] * au.sqrt(S)
        }
        return bP * E
    }

    function C(g, bQ, d, bP, b, bN, bS, bM, bO) {
        if (bO < 0 || q(g, bQ, d, bP, b, bN, bS, bM) < bO) {
            return
        }
        var bR = 1, E = bR / 2, S = bR - E, R, bL = 0.01;
        R = q(g, bQ, d, bP, b, bN, bS, bM, S);
        while (aw(R - bO) > bL) {
            E /= 2;
            S += (R < bO ? 1 : -1) * E;
            R = q(g, bQ, d, bP, b, bN, bS, bM, S)
        }
        return S
    }

    function O(E, bR, g, bP, b, bO, bT, bN) {
        if (m(E, g) < bm(b, bT) || bm(E, g) > m(b, bT) || m(bR, bP) < bm(bO, bN) || bm(bR, bP) > m(bO, bN)) {
            return
        }
        var bM = (E * bP - bR * g) * (b - bT) - (E - g) * (b * bN - bO * bT), bL = (E * bP - bR * g) * (bO - bN) - (bR - bP) * (b * bN - bO * bT), R = (E - g) * (bO - bN) - (bR - bP) * (b - bT);
        if (!R) {
            return
        }
        var bS = bM / R, bQ = bL / R, S = +bS.toFixed(2), d = +bQ.toFixed(2);
        if (S < +bm(E, g).toFixed(2) || S > +m(E, g).toFixed(2) || S < +bm(b, bT).toFixed(2) || S > +m(b, bT).toFixed(2) || d < +bm(bR, bP).toFixed(2) || d > +m(bR, bP).toFixed(2) || d < +bm(bO, bN).toFixed(2) || d > +m(bO, bN).toFixed(2)) {
            return
        }
        return {x: bS, y: bQ}
    }

    function ay(d, b) {
        return af(d, b)
    }

    function t(d, b) {
        return af(d, b, 1)
    }

    function af(b2, b1, b0) {
        var E = aR.bezierBBox(b2), d = aR.bezierBBox(b1);
        if (!aR.isBBoxIntersect(E, d)) {
            return b0 ? 0 : []
        }
        var bV = q.apply(0, b2), bU = q.apply(0, b1), bM = ~~(bV / 5), bL = ~~(bU / 5), bS = [], bR = [], g = {}, b3 = b0 ? 0 : [];
        for (var bX = 0; bX < bM + 1; bX++) {
            var bT = aR.findDotsAtSegment.apply(aR, b2.concat(bX / bM));
            bS.push({x: bT.x, y: bT.y, t: bX / bM})
        }
        for (bX = 0; bX < bL + 1; bX++) {
            bT = aR.findDotsAtSegment.apply(aR, b1.concat(bX / bL));
            bR.push({x: bT.x, y: bT.y, t: bX / bL})
        }
        for (bX = 0; bX < bM; bX++) {
            for (var bW = 0; bW < bL; bW++) {
                var bZ = bS[bX], b = bS[bX + 1], bY = bR[bW], S = bR[bW + 1], bQ = aw(b.x - bZ.x) < 0.001 ? "y" : "x", bP = aw(S.x - bY.x) < 0.001 ? "y" : "x", R = O(bZ.x, bZ.y, b.x, b.y, bY.x, bY.y, S.x, S.y);
                if (R) {
                    if (g[R.x.toFixed(4)] == R.y.toFixed(4)) {
                        continue
                    }
                    g[R.x.toFixed(4)] = R.y.toFixed(4);
                    var bO = bZ.t + aw((R[bQ] - bZ[bQ]) / (b[bQ] - bZ[bQ])) * (b.t - bZ.t), bN = bY.t + aw((R[bP] - bY[bP]) / (S[bP] - bY[bP])) * (S.t - bY.t);
                    if (bO >= 0 && bO <= 1 && bN >= 0 && bN <= 1) {
                        if (b0) {
                            b3++
                        } else {
                            b3.push({x: R.x, y: R.y, t1: bO, t2: bN})
                        }
                    }
                }
            }
        }
        return b3
    }

    aR.pathIntersection = function (d, b) {
        return D(d, b)
    };
    aR.pathIntersectionNumber = function (d, b) {
        return D(d, b, 1)
    };
    function D(g, b, bW) {
        g = aR._path2curve(g);
        b = aR._path2curve(b);
        var bU, S, bT, E, bR, bL, d, bO, b0, bZ, b1 = bW ? 0 : [];
        for (var bS = 0, bM = g.length; bS < bM; bS++) {
            var bY = g[bS];
            if (bY[0] == "M") {
                bU = bR = bY[1];
                S = bL = bY[2]
            } else {
                if (bY[0] == "C") {
                    b0 = [bU, S].concat(bY.slice(1));
                    bU = b0[6];
                    S = b0[7]
                } else {
                    b0 = [bU, S, bU, S, bR, bL, bR, bL];
                    bU = bR;
                    S = bL
                }
                for (var bQ = 0, bV = b.length; bQ < bV; bQ++) {
                    var bX = b[bQ];
                    if (bX[0] == "M") {
                        bT = d = bX[1];
                        E = bO = bX[2]
                    } else {
                        if (bX[0] == "C") {
                            bZ = [bT, E].concat(bX.slice(1));
                            bT = bZ[6];
                            E = bZ[7]
                        } else {
                            bZ = [bT, E, bT, E, d, bO, d, bO];
                            bT = d;
                            E = bO
                        }
                        var bN = af(b0, bZ, bW);
                        if (bW) {
                            b1 += bN
                        } else {
                            for (var bP = 0, R = bN.length; bP < R; bP++) {
                                bN[bP].segment1 = bS;
                                bN[bP].segment2 = bQ;
                                bN[bP].bez1 = b0;
                                bN[bP].bez2 = bZ
                            }
                            b1 = b1.concat(bN)
                        }
                    }
                }
            }
        }
        return b1
    }

    aR.isPointInsidePath = function (d, b, E) {
        var g = aR.pathBBox(d);
        return aR.isPointInsideBBox(g, b, E) && D(d, [["M", b, E], ["H", g.x2 + 10]], 1) % 2 == 1
    };
    aR._removedFactory = function (b) {
        return function () {
            eve("raphael.log", null, "Rapha\xebl: you are calling to method \u201c" + b + "\u201d of removed object", b)
        }
    };
    var am = aR.pathBBox = function (bT) {
        var bN = Y(bT);
        if (bN.bbox) {
            return bN.bbox
        }
        if (!bT) {
            return {x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0}
        }
        bT = W(bT);
        var bQ = 0, bP = 0, R = [], d = [], g;
        for (var bL = 0, bS = bT.length; bL < bS; bL++) {
            g = bT[bL];
            if (g[0] == "M") {
                bQ = g[1];
                bP = g[2];
                R.push(bQ);
                d.push(bP)
            } else {
                var bM = ba(bQ, bP, g[1], g[2], g[3], g[4], g[5], g[6]);
                R = R[bE](bM.min.x, bM.max.x);
                d = d[bE](bM.min.y, bM.max.y);
                bQ = g[5];
                bP = g[6]
            }
        }
        var b = bm[bG](0, R), bR = bm[bG](0, d), S = m[bG](0, R), E = m[bG](0, d), bO = {
            x: b,
            y: bR,
            x2: S,
            y2: E,
            width: S - b,
            height: E - bR
        };
        bN.bbox = X(bO);
        return bO
    }, aZ = function (d) {
        var b = X(d);
        b.toString = aR._path2string;
        return b
    }, aC = aR._pathToRelative = function (E) {
        var bM = Y(E);
        if (bM.rel) {
            return aZ(bM.rel)
        }
        if (!aR.is(E, bd) || !aR.is(E && E[0], bd)) {
            E = aR.parsePathString(E)
        }
        var bP = [], bR = 0, bQ = 0, bU = 0, bT = 0, g = 0;
        if (E[0][0] == "M") {
            bR = E[0][1];
            bQ = E[0][2];
            bU = bR;
            bT = bQ;
            g++;
            bP.push(["M", bR, bQ])
        }
        for (var bL = g, bV = E.length; bL < bV; bL++) {
            var b = bP[bL] = [], bS = E[bL];
            if (bS[0] != bK.call(bS[0])) {
                b[0] = bK.call(bS[0]);
                switch (b[0]) {
                    case"a":
                        b[1] = bS[1];
                        b[2] = bS[2];
                        b[3] = bS[3];
                        b[4] = bS[4];
                        b[5] = bS[5];
                        b[6] = +(bS[6] - bR).toFixed(3);
                        b[7] = +(bS[7] - bQ).toFixed(3);
                        break;
                    case"v":
                        b[1] = +(bS[1] - bQ).toFixed(3);
                        break;
                    case"m":
                        bU = bS[1];
                        bT = bS[2];
                    default:
                        for (var S = 1, bN = bS.length; S < bN; S++) {
                            b[S] = +(bS[S] - ((S % 2) ? bR : bQ)).toFixed(3)
                        }
                }
            } else {
                b = bP[bL] = [];
                if (bS[0] == "m") {
                    bU = bS[1] + bR;
                    bT = bS[2] + bQ
                }
                for (var R = 0, d = bS.length; R < d; R++) {
                    bP[bL][R] = bS[R]
                }
            }
            var bO = bP[bL].length;
            switch (bP[bL][0]) {
                case"z":
                    bR = bU;
                    bQ = bT;
                    break;
                case"h":
                    bR += +bP[bL][bO - 1];
                    break;
                case"v":
                    bQ += +bP[bL][bO - 1];
                    break;
                default:
                    bR += +bP[bL][bO - 2];
                    bQ += +bP[bL][bO - 1]
            }
        }
        bP.toString = aR._path2string;
        bM.rel = aZ(bP);
        return bP
    }, w = aR._pathToAbsolute = function (bQ) {
        var g = Y(bQ);
        if (g.abs) {
            return aZ(g.abs)
        }
        if (!aR.is(bQ, bd) || !aR.is(bQ && bQ[0], bd)) {
            bQ = aR.parsePathString(bQ)
        }
        if (!bQ || !bQ.length) {
            return [["M", 0, 0]]
        }
        var bW = [], bL = 0, S = 0, bO = 0, bN = 0, E = 0;
        if (bQ[0][0] == "M") {
            bL = +bQ[0][1];
            S = +bQ[0][2];
            bO = bL;
            bN = S;
            E++;
            bW[0] = ["M", bL, S]
        }
        var bV = bQ.length == 3 && bQ[0][0] == "M" && bQ[1][0].toUpperCase() == "R" && bQ[2][0].toUpperCase() == "Z";
        for (var bP, b, bT = E, bM = bQ.length; bT < bM; bT++) {
            bW.push(bP = []);
            b = bQ[bT];
            if (b[0] != bt.call(b[0])) {
                bP[0] = bt.call(b[0]);
                switch (bP[0]) {
                    case"A":
                        bP[1] = b[1];
                        bP[2] = b[2];
                        bP[3] = b[3];
                        bP[4] = b[4];
                        bP[5] = b[5];
                        bP[6] = +(b[6] + bL);
                        bP[7] = +(b[7] + S);
                        break;
                    case"V":
                        bP[1] = +b[1] + S;
                        break;
                    case"H":
                        bP[1] = +b[1] + bL;
                        break;
                    case"R":
                        var R = [bL, S][bE](b.slice(1));
                        for (var bS = 2, bU = R.length; bS < bU; bS++) {
                            R[bS] = +R[bS] + bL;
                            R[++bS] = +R[bS] + S
                        }
                        bW.pop();
                        bW = bW[bE](bb(R, bV));
                        break;
                    case"M":
                        bO = +b[1] + bL;
                        bN = +b[2] + S;
                    default:
                        for (bS = 1, bU = b.length; bS < bU; bS++) {
                            bP[bS] = +b[bS] + ((bS % 2) ? bL : S)
                        }
                }
            } else {
                if (b[0] == "R") {
                    R = [bL, S][bE](b.slice(1));
                    bW.pop();
                    bW = bW[bE](bb(R, bV));
                    bP = ["R"][bE](b.slice(-2))
                } else {
                    for (var bR = 0, d = b.length; bR < d; bR++) {
                        bP[bR] = b[bR]
                    }
                }
            }
            switch (bP[0]) {
                case"Z":
                    bL = bO;
                    S = bN;
                    break;
                case"H":
                    bL = bP[1];
                    break;
                case"V":
                    S = bP[1];
                    break;
                case"M":
                    bO = bP[bP.length - 2];
                    bN = bP[bP.length - 1];
                default:
                    bL = bP[bP.length - 2];
                    S = bP[bP.length - 1]
            }
        }
        bW.toString = aR._path2string;
        g.abs = aZ(bW);
        return bW
    }, bI = function (d, E, b, g) {
        return [d, E, b, g, b, g]
    }, bn = function (d, E, bL, R, b, g) {
        var S = 1 / 3, bM = 2 / 3;
        return [S * d + bM * bL, S * E + bM * R, S * b + bM * bL, S * g + bM * R, b, g]
    }, ae = function (bS, cn, b1, bZ, bT, bN, E, bR, cm, bU) {
        var bY = aV * 120 / 180, b = aV / 180 * (+bT || 0), b5 = [], b2, cj = aG(function (cp, cs, co) {
            var cr = cp * au.cos(co) - cs * au.sin(co), cq = cp * au.sin(co) + cs * au.cos(co);
            return {x: cr, y: cq}
        });
        if (!bU) {
            b2 = cj(bS, cn, -b);
            bS = b2.x;
            cn = b2.y;
            b2 = cj(bR, cm, -b);
            bR = b2.x;
            cm = b2.y;
            var d = au.cos(aV / 180 * bT), bP = au.sin(aV / 180 * bT), b7 = (bS - bR) / 2, b6 = (cn - cm) / 2;
            var ch = (b7 * b7) / (b1 * b1) + (b6 * b6) / (bZ * bZ);
            if (ch > 1) {
                ch = au.sqrt(ch);
                b1 = ch * b1;
                bZ = ch * bZ
            }
            var g = b1 * b1, ca = bZ * bZ, cc = (bN == E ? -1 : 1) * au.sqrt(aw((g * ca - g * b6 * b6 - ca * b7 * b7) / (g * b6 * b6 + ca * b7 * b7))), bW = cc * b1 * b6 / bZ + (bS + bR) / 2, bV = cc * -bZ * b7 / b1 + (cn + cm) / 2, bM = au.asin(((cn - bV) / bZ).toFixed(9)), bL = au.asin(((cm - bV) / bZ).toFixed(9));
            bM = bS < bW ? aV - bM : bM;
            bL = bR < bW ? aV - bL : bL;
            bM < 0 && (bM = aV * 2 + bM);
            bL < 0 && (bL = aV * 2 + bL);
            if (E && bM > bL) {
                bM = bM - aV * 2
            }
            if (!E && bL > bM) {
                bL = bL - aV * 2
            }
        } else {
            bM = bU[0];
            bL = bU[1];
            bW = bU[2];
            bV = bU[3]
        }
        var bQ = bL - bM;
        if (aw(bQ) > bY) {
            var bX = bL, b0 = bR, bO = cm;
            bL = bM + bY * (E && bL > bM ? 1 : -1);
            bR = bW + b1 * au.cos(bL);
            cm = bV + bZ * au.sin(bL);
            b5 = ae(bR, cm, b1, bZ, bT, 0, E, b0, bO, [bL, bX, bW, bV])
        }
        bQ = bL - bM;
        var S = au.cos(bM), cl = au.sin(bM), R = au.cos(bL), ck = au.sin(bL), b8 = au.tan(bQ / 4), cb = 4 / 3 * b1 * b8, b9 = 4 / 3 * bZ * b8, ci = [bS, cn], cg = [bS + cb * cl, cn - b9 * S], cf = [bR + cb * ck, cm - b9 * R], cd = [bR, cm];
        cg[0] = 2 * ci[0] - cg[0];
        cg[1] = 2 * ci[1] - cg[1];
        if (bU) {
            return [cg, cf, cd][bE](b5)
        } else {
            b5 = [cg, cf, cd][bE](b5).join()[F](",");
            var b3 = [];
            for (var ce = 0, b4 = b5.length; ce < b4; ce++) {
                b3[ce] = ce % 2 ? cj(b5[ce - 1], b5[ce], b).y : cj(b5[ce], b5[ce + 1], b).x
            }
            return b3
        }
    }, ag = function (d, b, E, g, bN, bM, bL, S, bO) {
        var R = 1 - bO;
        return {
            x: bp(R, 3) * d + bp(R, 2) * 3 * bO * E + R * 3 * bO * bO * bN + bp(bO, 3) * bL,
            y: bp(R, 3) * b + bp(R, 2) * 3 * bO * g + R * 3 * bO * bO * bM + bp(bO, 3) * S
        }
    }, ba = aG(function (E, d, S, R, bV, bU, bR, bO) {
        var bT = (bV - 2 * S + E) - (bR - 2 * bV + S), bQ = 2 * (S - E) - 2 * (bV - S), bN = E - S, bM = (-bQ + au.sqrt(bQ * bQ - 4 * bT * bN)) / 2 / bT, bL = (-bQ - au.sqrt(bQ * bQ - 4 * bT * bN)) / 2 / bT, bP = [d, bO], bS = [E, bR], g;
        aw(bM) > "1e12" && (bM = 0.5);
        aw(bL) > "1e12" && (bL = 0.5);
        if (bM > 0 && bM < 1) {
            g = ag(E, d, S, R, bV, bU, bR, bO, bM);
            bS.push(g.x);
            bP.push(g.y)
        }
        if (bL > 0 && bL < 1) {
            g = ag(E, d, S, R, bV, bU, bR, bO, bL);
            bS.push(g.x);
            bP.push(g.y)
        }
        bT = (bU - 2 * R + d) - (bO - 2 * bU + R);
        bQ = 2 * (R - d) - 2 * (bU - R);
        bN = d - R;
        bM = (-bQ + au.sqrt(bQ * bQ - 4 * bT * bN)) / 2 / bT;
        bL = (-bQ - au.sqrt(bQ * bQ - 4 * bT * bN)) / 2 / bT;
        aw(bM) > "1e12" && (bM = 0.5);
        aw(bL) > "1e12" && (bL = 0.5);
        if (bM > 0 && bM < 1) {
            g = ag(E, d, S, R, bV, bU, bR, bO, bM);
            bS.push(g.x);
            bP.push(g.y)
        }
        if (bL > 0 && bL < 1) {
            g = ag(E, d, S, R, bV, bU, bR, bO, bL);
            bS.push(g.x);
            bP.push(g.y)
        }
        return {min: {x: bm[bG](0, bS), y: bm[bG](0, bP)}, max: {x: m[bG](0, bS), y: m[bG](0, bP)}}
    }), W = aR._path2curve = aG(function (bU, bP) {
        var bN = !bP && Y(bU);
        if (!bP && bN.curve) {
            return aZ(bN.curve)
        }
        var E = w(bU), bQ = bP && w(bP), bR = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null}, d = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
        }, S = function (bW, bX) {
            var bV, bY;
            if (!bW) {
                return ["C", bX.x, bX.y, bX.x, bX.y, bX.x, bX.y]
            }
            !(bW[0] in {T: 1, Q: 1}) && (bX.qx = bX.qy = null);
            switch (bW[0]) {
                case"M":
                    bX.X = bW[1];
                    bX.Y = bW[2];
                    break;
                case"A":
                    bW = ["C"][bE](ae[bG](0, [bX.x, bX.y][bE](bW.slice(1))));
                    break;
                case"S":
                    bV = bX.x + (bX.x - (bX.bx || bX.x));
                    bY = bX.y + (bX.y - (bX.by || bX.y));
                    bW = ["C", bV, bY][bE](bW.slice(1));
                    break;
                case"T":
                    bX.qx = bX.x + (bX.x - (bX.qx || bX.x));
                    bX.qy = bX.y + (bX.y - (bX.qy || bX.y));
                    bW = ["C"][bE](bn(bX.x, bX.y, bX.qx, bX.qy, bW[1], bW[2]));
                    break;
                case"Q":
                    bX.qx = bW[1];
                    bX.qy = bW[2];
                    bW = ["C"][bE](bn(bX.x, bX.y, bW[1], bW[2], bW[3], bW[4]));
                    break;
                case"L":
                    bW = ["C"][bE](bI(bX.x, bX.y, bW[1], bW[2]));
                    break;
                case"H":
                    bW = ["C"][bE](bI(bX.x, bX.y, bW[1], bX.y));
                    break;
                case"V":
                    bW = ["C"][bE](bI(bX.x, bX.y, bX.x, bW[1]));
                    break;
                case"Z":
                    bW = ["C"][bE](bI(bX.x, bX.y, bX.X, bX.Y));
                    break
            }
            return bW
        }, b = function (bV, bW) {
            if (bV[bW].length > 7) {
                bV[bW].shift();
                var bX = bV[bW];
                while (bX.length) {
                    bV.splice(bW++, 0, ["C"][bE](bX.splice(0, 6)))
                }
                bV.splice(bW, 1);
                bS = m(E.length, bQ && bQ.length || 0)
            }
        }, g = function (bZ, bY, bW, bV, bX) {
            if (bZ && bY && bZ[bX][0] == "M" && bY[bX][0] != "M") {
                bY.splice(bX, 0, ["M", bV.x, bV.y]);
                bW.bx = 0;
                bW.by = 0;
                bW.x = bZ[bX][1];
                bW.y = bZ[bX][2];
                bS = m(E.length, bQ && bQ.length || 0)
            }
        };
        for (var bM = 0, bS = m(E.length, bQ && bQ.length || 0); bM < bS; bM++) {
            E[bM] = S(E[bM], bR);
            b(E, bM);
            bQ && (bQ[bM] = S(bQ[bM], d));
            bQ && b(bQ, bM);
            g(E, bQ, bR, d, bM);
            g(bQ, E, d, bR, bM);
            var bL = E[bM], bT = bQ && bQ[bM], R = bL.length, bO = bQ && bT.length;
            bR.x = bL[R - 2];
            bR.y = bL[R - 1];
            bR.bx = an(bL[R - 4]) || bR.x;
            bR.by = an(bL[R - 3]) || bR.y;
            d.bx = bQ && (an(bT[bO - 4]) || d.x);
            d.by = bQ && (an(bT[bO - 3]) || d.y);
            d.x = bQ && bT[bO - 2];
            d.y = bQ && bT[bO - 1]
        }
        if (!bQ) {
            bN.curve = aZ(E)
        }
        return bQ ? [E, bQ] : E
    }, null, aZ), v = aR._parseDots = aG(function (bO) {
        var bN = [];
        for (var S = 0, bP = bO.length; S < bP; S++) {
            var b = {}, bM = bO[S].match(/^([^:]*):?([\d\.]*)/);
            b.color = aR.getRGB(bM[1]);
            if (b.color.error) {
                return null
            }
            b.color = b.color.hex;
            bM[2] && (b.offset = bM[2] + "%");
            bN.push(b)
        }
        for (S = 1, bP = bN.length - 1; S < bP; S++) {
            if (!bN[S].offset) {
                var g = an(bN[S - 1].offset || 0), E = 0;
                for (var R = S + 1; R < bP; R++) {
                    if (bN[R].offset) {
                        E = bN[R].offset;
                        break
                    }
                }
                if (!E) {
                    E = 100;
                    R = bP
                }
                E = an(E);
                var bL = (E - g) / (R - S + 1);
                for (; S < R; S++) {
                    g += bL;
                    bN[S].offset = g + "%"
                }
            }
        }
        return bN
    }), aK = aR._tear = function (b, d) {
        b == d.top && (d.top = b.prev);
        b == d.bottom && (d.bottom = b.next);
        b.next && (b.next.prev = b.prev);
        b.prev && (b.prev.next = b.next)
    }, ap = aR._tofront = function (b, d) {
        if (d.top === b) {
            return
        }
        aK(b, d);
        b.next = null;
        b.prev = d.top;
        d.top.next = b;
        d.top = b
    }, p = aR._toback = function (b, d) {
        if (d.bottom === b) {
            return
        }
        aK(b, d);
        b.next = d.bottom;
        b.prev = null;
        d.bottom.prev = b;
        d.bottom = b
    }, G = aR._insertafter = function (d, b, g) {
        aK(d, g);
        b == g.top && (g.top = d);
        b.next && (b.next.prev = d);
        d.next = b.next;
        d.prev = b;
        b.next = d
    }, aT = aR._insertbefore = function (d, b, g) {
        aK(d, g);
        b == g.bottom && (g.bottom = d);
        b.prev && (b.prev.next = d);
        d.prev = b.prev;
        b.prev = d;
        d.next = b
    }, bl = aR.toMatrix = function (g, b) {
        var E = am(g), d = {
            _: {transform: aX}, getBBox: function () {
                return E
            }
        };
        aO(d, b);
        return d.matrix
    }, T = aR.transformPath = function (d, b) {
        return L(d, bl(d, b))
    }, aO = aR._extractTransform = function (d, bZ) {
        if (bZ == null) {
            return d._.transform
        }
        bZ = bH(bZ).replace(/\.{3}|\u2026/g, d._.transform || aX);
        var bR = aR.parseTransformString(bZ), bP = 0, bN = 0, bM = 0, bT = 1, bS = 1, b0 = d._, bU = new aF;
        b0.transform = bR || [];
        if (bR) {
            for (var bV = 0, bO = bR.length; bV < bO; bV++) {
                var bQ = bR[bV], b = bQ.length, R = bH(bQ[0]).toLowerCase(), bY = bQ[0] != R, bL = bY ? bU.invert() : 0, bX, E, bW, g, S;
                if (R == "t" && b == 3) {
                    if (bY) {
                        bX = bL.x(0, 0);
                        E = bL.y(0, 0);
                        bW = bL.x(bQ[1], bQ[2]);
                        g = bL.y(bQ[1], bQ[2]);
                        bU.translate(bW - bX, g - E)
                    } else {
                        bU.translate(bQ[1], bQ[2])
                    }
                } else {
                    if (R == "r") {
                        if (b == 2) {
                            S = S || d.getBBox(1);
                            bU.rotate(bQ[1], S.x + S.width / 2, S.y + S.height / 2);
                            bP += bQ[1]
                        } else {
                            if (b == 4) {
                                if (bY) {
                                    bW = bL.x(bQ[2], bQ[3]);
                                    g = bL.y(bQ[2], bQ[3]);
                                    bU.rotate(bQ[1], bW, g)
                                } else {
                                    bU.rotate(bQ[1], bQ[2], bQ[3])
                                }
                                bP += bQ[1]
                            }
                        }
                    } else {
                        if (R == "s") {
                            if (b == 2 || b == 3) {
                                S = S || d.getBBox(1);
                                bU.scale(bQ[1], bQ[b - 1], S.x + S.width / 2, S.y + S.height / 2);
                                bT *= bQ[1];
                                bS *= bQ[b - 1]
                            } else {
                                if (b == 5) {
                                    if (bY) {
                                        bW = bL.x(bQ[3], bQ[4]);
                                        g = bL.y(bQ[3], bQ[4]);
                                        bU.scale(bQ[1], bQ[2], bW, g)
                                    } else {
                                        bU.scale(bQ[1], bQ[2], bQ[3], bQ[4])
                                    }
                                    bT *= bQ[1];
                                    bS *= bQ[2]
                                }
                            }
                        } else {
                            if (R == "m" && b == 7) {
                                bU.add(bQ[1], bQ[2], bQ[3], bQ[4], bQ[5], bQ[6])
                            }
                        }
                    }
                }
                b0.dirtyT = 1;
                d.matrix = bU
            }
        }
        d.matrix = bU;
        b0.sx = bT;
        b0.sy = bS;
        b0.deg = bP;
        b0.dx = bN = bU.e;
        b0.dy = bM = bU.f;
        if (bT == 1 && bS == 1 && !bP && b0.bbox) {
            b0.bbox.x += +bN;
            b0.bbox.y += +bM
        } else {
            b0.dirtyT = 1
        }
    }, l = function (d) {
        var b = d[0];
        switch (b.toLowerCase()) {
            case"t":
                return [b, 0, 0];
            case"m":
                return [b, 1, 0, 0, 1, 0, 0];
            case"r":
                if (d.length == 4) {
                    return [b, 0, d[2], d[3]]
                } else {
                    return [b, 0]
                }
            case"s":
                if (d.length == 5) {
                    return [b, 1, 1, d[3], d[4]]
                } else {
                    if (d.length == 3) {
                        return [b, 1, 1]
                    } else {
                        return [b, 1]
                    }
                }
        }
    }, aB = aR._equaliseTransform = function (R, E) {
        E = bH(E).replace(/\.{3}|\u2026/g, R);
        R = aR.parseTransformString(R) || [];
        E = aR.parseTransformString(E) || [];
        var b = m(R.length, E.length), bN = [], bO = [], g = 0, d, S, bM, bL;
        for (; g < b; g++) {
            bM = R[g] || l(E[g]);
            bL = E[g] || l(bM);
            if ((bM[0] != bL[0]) || (bM[0].toLowerCase() == "r" && (bM[2] != bL[2] || bM[3] != bL[3])) || (bM[0].toLowerCase() == "s" && (bM[3] != bL[3] || bM[4] != bL[4]))) {
                return
            }
            bN[g] = [];
            bO[g] = [];
            for (d = 0, S = m(bM.length, bL.length); d < S; d++) {
                d in bM && (bN[g][d] = bM[d]);
                d in bL && (bO[g][d] = bL[d])
            }
        }
        return {from: bN, to: bO}
    };
    aR._getContainer = function (b, R, g, E) {
        var d;
        d = E == null && !aR.is(b, "object") ? aA.doc.getElementById(b) : b;
        if (d == null) {
            return
        }
        if (d.tagName) {
            if (R == null) {
                return {
                    container: d,
                    width: d.style.pixelWidth || d.offsetWidth,
                    height: d.style.pixelHeight || d.offsetHeight
                }
            } else {
                return {container: d, width: R, height: g}
            }
        }
        return {container: 1, x: b, y: R, width: g, height: E}
    };
    aR.pathToRelative = aC;
    aR._engine = {};
    aR.path2curve = W;
    aR.matrix = function (E, g, bM, bL, S, R) {
        return new aF(E, g, bM, bL, S, R)
    };
    function aF(E, g, bM, bL, S, R) {
        if (E != null) {
            this.a = +E;
            this.b = +g;
            this.c = +bM;
            this.d = +bL;
            this.e = +S;
            this.f = +R
        } else {
            this.a = 1;
            this.b = 0;
            this.c = 0;
            this.d = 1;
            this.e = 0;
            this.f = 0
        }
    }

    (function (g) {
        g.add = function (bU, bR, bP, bN, bL, S) {
            var R = [[], [], []], E = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]], bT = [[bU, bP, bL], [bR, bN, S], [0, 0, 1]], bS, bQ, bO, bM;
            if (bU && bU instanceof aF) {
                bT = [[bU.a, bU.c, bU.e], [bU.b, bU.d, bU.f], [0, 0, 1]]
            }
            for (bS = 0; bS < 3; bS++) {
                for (bQ = 0; bQ < 3; bQ++) {
                    bM = 0;
                    for (bO = 0; bO < 3; bO++) {
                        bM += E[bS][bO] * bT[bO][bQ]
                    }
                    R[bS][bQ] = bM
                }
            }
            this.a = R[0][0];
            this.b = R[1][0];
            this.c = R[0][1];
            this.d = R[1][1];
            this.e = R[0][2];
            this.f = R[1][2]
        };
        g.invert = function () {
            var R = this, E = R.a * R.d - R.b * R.c;
            return new aF(R.d / E, -R.b / E, -R.c / E, R.a / E, (R.c * R.f - R.d * R.e) / E, (R.b * R.e - R.a * R.f) / E)
        };
        g.clone = function () {
            return new aF(this.a, this.b, this.c, this.d, this.e, this.f)
        };
        g.translate = function (E, R) {
            this.add(1, 0, 0, 1, E, R)
        };
        g.scale = function (R, bL, E, S) {
            bL == null && (bL = R);
            (E || S) && this.add(1, 0, 0, 1, E, S);
            this.add(R, 0, 0, bL, 0, 0);
            (E || S) && this.add(1, 0, 0, 1, -E, -S)
        };
        g.rotate = function (R, E, bM) {
            R = aR.rad(R);
            E = E || 0;
            bM = bM || 0;
            var bL = +au.cos(R).toFixed(9), S = +au.sin(R).toFixed(9);
            this.add(bL, S, -S, bL, E, bM);
            this.add(1, 0, 0, 1, -E, -bM)
        };
        g.x = function (E, R) {
            return E * this.a + R * this.c + this.e
        };
        g.y = function (E, R) {
            return E * this.b + R * this.d + this.f
        };
        g.get = function (E) {
            return +this[bH.fromCharCode(97 + E)].toFixed(4)
        };
        g.toString = function () {
            return aR.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
        };
        g.toFilter = function () {
            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
        };
        g.offset = function () {
            return [this.e.toFixed(4), this.f.toFixed(4)]
        };
        function d(E) {
            return E[0] * E[0] + E[1] * E[1]
        }

        function b(E) {
            var R = au.sqrt(d(E));
            E[0] && (E[0] /= R);
            E[1] && (E[1] /= R)
        }

        g.split = function () {
            var R = {};
            R.dx = this.e;
            R.dy = this.f;
            var bL = [[this.a, this.c], [this.b, this.d]];
            R.scalex = au.sqrt(d(bL[0]));
            b(bL[0]);
            R.shear = bL[0][0] * bL[1][0] + bL[0][1] * bL[1][1];
            bL[1] = [bL[1][0] - bL[0][0] * R.shear, bL[1][1] - bL[0][1] * R.shear];
            R.scaley = au.sqrt(d(bL[1]));
            b(bL[1]);
            R.shear /= R.scaley;
            var E = -bL[0][1], S = bL[1][1];
            if (S < 0) {
                R.rotate = aR.deg(au.acos(S));
                if (E < 0) {
                    R.rotate = 360 - R.rotate
                }
            } else {
                R.rotate = aR.deg(au.asin(E))
            }
            R.isSimple = !+R.shear.toFixed(9) && (R.scalex.toFixed(9) == R.scaley.toFixed(9) || !R.rotate);
            R.isSuperSimple = !+R.shear.toFixed(9) && R.scalex.toFixed(9) == R.scaley.toFixed(9) && !R.rotate;
            R.noRotation = !+R.shear.toFixed(9) && !R.rotate;
            return R
        };
        g.toTransformString = function (E) {
            var R = E || this[F]();
            if (R.isSimple) {
                R.scalex = +R.scalex.toFixed(4);
                R.scaley = +R.scaley.toFixed(4);
                R.rotate = +R.rotate.toFixed(4);
                return (R.dx || R.dy ? "t" + [R.dx, R.dy] : aX) + (R.scalex != 1 || R.scaley != 1 ? "s" + [R.scalex, R.scaley, 0, 0] : aX) + (R.rotate ? "r" + [R.rotate, 0, 0] : aX)
            } else {
                return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
            }
        }
    })(aF.prototype);
    var V = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    if ((navigator.vendor == "Apple Computer, Inc.") && (V && V[1] < 4 || navigator.platform.slice(0, 2) == "iP") || (navigator.vendor == "Google Inc." && V && V[1] < 8)) {
        a4.safari = function () {
            var b = this.rect(-99, -99, this.width + 99, this.height + 99).attr({stroke: "none"});
            setTimeout(function () {
                b.remove()
            })
        }
    } else {
        a4.safari = I
    }
    var P = function () {
        this.returnValue = false
    }, bD = function () {
        return this.originalEvent.preventDefault()
    }, a8 = function () {
        this.cancelBubble = true
    }, aJ = function () {
        return this.originalEvent.stopPropagation()
    }, aD = (function () {
        if (aA.doc.addEventListener) {
            return function (S, E, g, d) {
                var b = Z && bx[E] ? bx[E] : E, R = function (bQ) {
                    var bP = aA.doc.documentElement.scrollTop || aA.doc.body.scrollTop, bR = aA.doc.documentElement.scrollLeft || aA.doc.body.scrollLeft, bL = bQ.clientX + bR, bS = bQ.clientY + bP;
                    if (Z && bx[ak](E)) {
                        for (var bN = 0, bO = bQ.targetTouches && bQ.targetTouches.length; bN < bO; bN++) {
                            if (bQ.targetTouches[bN].target == S) {
                                var bM = bQ;
                                bQ = bQ.targetTouches[bN];
                                bQ.originalEvent = bM;
                                bQ.preventDefault = bD;
                                bQ.stopPropagation = aJ;
                                break
                            }
                        }
                    }
                    return g.call(d, bQ, bL, bS)
                };
                S.addEventListener(b, R, false);
                return function () {
                    S.removeEventListener(b, R, false);
                    return true
                }
            }
        } else {
            if (aA.doc.attachEvent) {
                return function (S, E, g, d) {
                    var R = function (bN) {
                        bN = bN || aA.win.event;
                        var bM = aA.doc.documentElement.scrollTop || aA.doc.body.scrollTop, bO = aA.doc.documentElement.scrollLeft || aA.doc.body.scrollLeft, bL = bN.clientX + bO, bP = bN.clientY + bM;
                        bN.preventDefault = bN.preventDefault || P;
                        bN.stopPropagation = bN.stopPropagation || a8;
                        return g.call(d, bN, bL, bP)
                    };
                    S.attachEvent("on" + E, R);
                    var b = function () {
                        S.detachEvent("on" + E, R);
                        return true
                    };
                    return b
                }
            }
        }
    })(), be = [], by = function (bM) {
        var bP = bM.clientX, bO = bM.clientY, bR = aA.doc.documentElement.scrollTop || aA.doc.body.scrollTop, bS = aA.doc.documentElement.scrollLeft || aA.doc.body.scrollLeft, g, E = be.length;
        while (E--) {
            g = be[E];
            if (Z) {
                var S = bM.touches.length, R;
                while (S--) {
                    R = bM.touches[S];
                    if (R.identifier == g.el._drag.id) {
                        bP = R.clientX;
                        bO = R.clientY;
                        (bM.originalEvent ? bM.originalEvent : bM).preventDefault();
                        break
                    }
                }
            } else {
                bM.preventDefault()
            }
            var d = g.el.node, b, bL = d.nextSibling, bQ = d.parentNode, bN = d.style.display;
            aA.win.opera && bQ.removeChild(d);
            d.style.display = "none";
            b = g.el.paper.getElementByPoint(bP, bO);
            d.style.display = bN;
            aA.win.opera && (bL ? bQ.insertBefore(d, bL) : bQ.appendChild(d));
            b && eve("raphael.drag.over." + g.el.id, g.el, b);
            bP += bS;
            bO += bR;
            eve("raphael.drag.move." + g.el.id, g.move_scope || g.el, bP - g.el._drag.x, bO - g.el._drag.y, bP, bO, bM)
        }
    }, e = function (g) {
        aR.unmousemove(by).unmouseup(e);
        var d = be.length, b;
        while (d--) {
            b = be[d];
            b.el._drag = {};
            eve("raphael.drag.end." + b.el.id, b.end_scope || b.start_scope || b.move_scope || b.el, g)
        }
        be = []
    }, bh = aR.el = {};
    for (var ax = Q.length; ax--;) {
        (function (b) {
            aR[b] = bh[b] = function (g, d) {
                if (aR.is(g, "function")) {
                    this.events = this.events || [];
                    this.events.push({name: b, f: g, unbind: aD(this.shape || this.node || aA.doc, b, g, d || this)})
                }
                return this
            };
            aR["un" + b] = bh["un" + b] = function (E) {
                var g = this.events || [], d = g.length;
                while (d--) {
                    if (g[d].name == b && g[d].f == E) {
                        g[d].unbind();
                        g.splice(d, 1);
                        !g.length && delete this.events;
                        return this
                    }
                }
                return this
            }
        })(Q[ax])
    }
    bh.data = function (d, E) {
        var g = aU[this.id] = aU[this.id] || {};
        if (arguments.length == 1) {
            if (aR.is(d, "object")) {
                for (var b in d) {
                    if (d[ak](b)) {
                        this.data(b, d[b])
                    }
                }
                return this
            }
            eve("raphael.data.get." + this.id, this, g[d], d);
            return g[d]
        }
        g[d] = E;
        eve("raphael.data.set." + this.id, this, E, d);
        return this
    };
    bh.removeData = function (b) {
        if (b == null) {
            aU[this.id] = {}
        } else {
            aU[this.id] && delete aU[this.id][b]
        }
        return this
    };
    bh.hover = function (E, b, g, d) {
        return this.mouseover(E, g).mouseout(b, d || g)
    };
    bh.unhover = function (d, b) {
        return this.unmouseover(d).unmouseout(b)
    };
    var bu = [];
    bh.drag = function (d, S, R, b, g, E) {
        function bL(bN) {
            (bN.originalEvent || bN).preventDefault();
            var bM = aA.doc.documentElement.scrollTop || aA.doc.body.scrollTop, bO = aA.doc.documentElement.scrollLeft || aA.doc.body.scrollLeft;
            this._drag.x = bN.clientX + bO;
            this._drag.y = bN.clientY + bM;
            this._drag.id = bN.identifier;
            !be.length && aR.mousemove(by).mouseup(e);
            be.push({el: this, move_scope: b, start_scope: g, end_scope: E});
            S && eve.on("raphael.drag.start." + this.id, S);
            d && eve.on("raphael.drag.move." + this.id, d);
            R && eve.on("raphael.drag.end." + this.id, R);
            eve("raphael.drag.start." + this.id, g || b || this, bN.clientX + bO, bN.clientY + bM, bN)
        }

        this._drag = {};
        bu.push({el: this, start: bL});
        this.mousedown(bL);
        return this
    };
    bh.onDragOver = function (b) {
        b ? eve.on("raphael.drag.over." + this.id, b) : eve.unbind("raphael.drag.over." + this.id)
    };
    bh.undrag = function () {
        var b = bu.length;
        while (b--) {
            if (bu[b].el == this) {
                this.unmousedown(bu[b].start);
                bu.splice(b, 1);
                eve.unbind("raphael.drag.*." + this.id)
            }
        }
        !bu.length && aR.unmousemove(by).unmouseup(e)
    };
    a4.circle = function (b, E, g) {
        var d = aR._engine.circle(this, b || 0, E || 0, g || 0);
        this.__set__ && this.__set__.push(d);
        return d
    };
    a4.rect = function (b, S, d, E, R) {
        var g = aR._engine.rect(this, b || 0, S || 0, d || 0, E || 0, R || 0);
        this.__set__ && this.__set__.push(g);
        return g
    };
    a4.ellipse = function (b, R, E, g) {
        var d = aR._engine.ellipse(this, b || 0, R || 0, E || 0, g || 0);
        this.__set__ && this.__set__.push(d);
        return d
    };
    a4.path = function (b) {
        b && !aR.is(b, aj) && !aR.is(b[0], bd) && (b += aX);
        var d = aR._engine.path(aR.format[bG](aR, arguments), this);
        this.__set__ && this.__set__.push(d);
        return d
    };
    a4.image = function (R, b, S, d, E) {
        var g = aR._engine.image(this, R || "about:blank", b || 0, S || 0, d || 0, E || 0);
        this.__set__ && this.__set__.push(g);
        return g
    };
    a4.text = function (b, E, g) {
        var d = aR._engine.text(this, b || 0, E || 0, bH(g));
        this.__set__ && this.__set__.push(d);
        return d
    };
    a4.set = function (d) {
        !aR.is(d, "array") && (d = Array.prototype.splice.call(arguments, 0, arguments.length));
        var b = new al(d);
        this.__set__ && this.__set__.push(b);
        return b
    };
    a4.setStart = function (b) {
        this.__set__ = b || this.set()
    };
    a4.setFinish = function (d) {
        var b = this.__set__;
        delete this.__set__;
        return b
    };
    a4.setSize = function (d, b) {
        return aR._engine.setSize.call(this, d, b)
    };
    a4.setViewBox = function (b, R, d, E, g) {
        return aR._engine.setViewBox.call(this, b, R, d, E, g)
    };
    a4.top = a4.bottom = null;
    a4.raphael = aR;
    var bs = function (g) {
        var R = g.getBoundingClientRect(), bN = g.ownerDocument, S = bN.body, b = bN.documentElement, E = b.clientTop || S.clientTop || 0, bL = b.clientLeft || S.clientLeft || 0, bM = R.top + (aA.win.pageYOffset || b.scrollTop || S.scrollTop) - E, d = R.left + (aA.win.pageXOffset || b.scrollLeft || S.scrollLeft) - bL;
        return {y: bM, x: d}
    };
    a4.getElementByPoint = function (d, bM) {
        var bL = this, g = bL.canvas, S = aA.doc.elementFromPoint(d, bM);
        if (aA.win.opera && S.tagName == "svg") {
            var R = bs(g), E = g.createSVGRect();
            E.x = d - R.x;
            E.y = bM - R.y;
            E.width = E.height = 1;
            var b = g.getIntersectionList(E, null);
            if (b.length) {
                S = b[b.length - 1]
            }
        }
        if (!S) {
            return null
        }
        while (S.parentNode && S != g.parentNode && !S.raphael) {
            S = S.parentNode
        }
        S == bL.canvas.parentNode && (S = g);
        S = S && S.raphael ? bL.getById(S.raphaelid) : null;
        return S
    };
    a4.getById = function (d) {
        var b = this.bottom;
        while (b) {
            if (b.id == d) {
                return b
            }
            b = b.next
        }
        return null
    };
    a4.forEach = function (g, b) {
        var d = this.bottom;
        while (d) {
            if (g.call(b, d) === false) {
                return this
            }
            d = d.next
        }
        return this
    };
    a4.getElementsByPoint = function (b, g) {
        var d = this.set();
        this.forEach(function (E) {
            if (E.isPointInside(b, g)) {
                d.push(E)
            }
        });
        return d
    };
    function y() {
        return this.x + aQ + this.y
    }

    function at() {
        return this.x + aQ + this.y + aQ + this.width + " \xd7 " + this.height
    }

    bh.isPointInside = function (b, g) {
        var d = this.realPath = this.realPath || N[this.type](this);
        return aR.isPointInsidePath(d, b, g)
    };
    bh.getBBox = function (d) {
        if (this.removed) {
            return {}
        }
        var b = this._;
        if (d) {
            if (b.dirty || !b.bboxwt) {
                this.realPath = N[this.type](this);
                b.bboxwt = am(this.realPath);
                b.bboxwt.toString = at;
                b.dirty = 0
            }
            return b.bboxwt
        }
        if (b.dirty || b.dirtyT || !b.bbox) {
            if (b.dirty || !this.realPath) {
                b.bboxwt = 0;
                this.realPath = N[this.type](this)
            }
            b.bbox = am(L(this.realPath, this.matrix));
            b.bbox.toString = at;
            b.dirty = b.dirtyT = 0
        }
        return b.bbox
    };
    bh.clone = function () {
        if (this.removed) {
            return null
        }
        var b = this.paper[this.type]().attr(this.attr());
        this.__set__ && this.__set__.push(b);
        return b
    };
    bh.glow = function (bL) {
        if (this.type == "text") {
            return null
        }
        bL = bL || {};
        var g = {
            width: (bL.width || 10) + (+this.attr("stroke-width") || 1),
            fill: bL.fill || false,
            opacity: bL.opacity || 0.5,
            offsetx: bL.offsetx || 0,
            offsety: bL.offsety || 0,
            color: bL.color || "#000"
        }, S = g.width / 2, E = this.paper, b = E.set(), R = this.realPath || N[this.type](this);
        R = this.matrix ? L(R, this.matrix) : R;
        for (var d = 1; d < S + 1; d++) {
            b.push(E.path(R).attr({
                stroke: g.color,
                fill: g.fill ? g.color : "none",
                "stroke-linejoin": "round",
                "stroke-linecap": "round",
                "stroke-width": +(g.width / S * d).toFixed(3),
                opacity: +(g.opacity / S).toFixed(3)
            }))
        }
        return b.insertBefore(this).translate(g.offsetx, g.offsety)
    };
    var a7 = {}, k = function (d, b, R, E, bN, bM, bL, S, g) {
        if (g == null) {
            return q(d, b, R, E, bN, bM, bL, S)
        } else {
            return aR.findDotsAtSegment(d, b, R, E, bN, bM, bL, S, C(d, b, R, E, bN, bM, bL, S, g))
        }
    }, a6 = function (b, d) {
        return function (bT, R, S) {
            bT = W(bT);
            var bP, bO, g, bL, E = "", bS = {}, bQ, bN = 0;
            for (var bM = 0, bR = bT.length; bM < bR; bM++) {
                g = bT[bM];
                if (g[0] == "M") {
                    bP = +g[1];
                    bO = +g[2]
                } else {
                    bL = k(bP, bO, g[1], g[2], g[3], g[4], g[5], g[6]);
                    if (bN + bL > R) {
                        if (d && !bS.start) {
                            bQ = k(bP, bO, g[1], g[2], g[3], g[4], g[5], g[6], R - bN);
                            E += ["C" + bQ.start.x, bQ.start.y, bQ.m.x, bQ.m.y, bQ.x, bQ.y];
                            if (S) {
                                return E
                            }
                            bS.start = E;
                            E = ["M" + bQ.x, bQ.y + "C" + bQ.n.x, bQ.n.y, bQ.end.x, bQ.end.y, g[5], g[6]].join();
                            bN += bL;
                            bP = +g[5];
                            bO = +g[6];
                            continue
                        }
                        if (!b && !d) {
                            bQ = k(bP, bO, g[1], g[2], g[3], g[4], g[5], g[6], R - bN);
                            return {x: bQ.x, y: bQ.y, alpha: bQ.alpha}
                        }
                    }
                    bN += bL;
                    bP = +g[5];
                    bO = +g[6]
                }
                E += g.shift() + g
            }
            bS.end = E;
            bQ = b ? bN : d ? bS : aR.findDotsAtSegment(bP, bO, g[0], g[1], g[2], g[3], g[4], g[5], 1);
            bQ.alpha && (bQ = {x: bQ.x, y: bQ.y, alpha: bQ.alpha});
            return bQ
        }
    };
    var aS = a6(1), J = a6(), ad = a6(0, 1);
    aR.getTotalLength = aS;
    aR.getPointAtLength = J;
    aR.getSubpath = function (d, E, g) {
        if (this.getTotalLength(d) - g < 0.000001) {
            return ad(d, E).end
        }
        var b = ad(d, g, 1);
        return E ? ad(b, E).end : b
    };
    bh.getTotalLength = function () {
        if (this.type != "path") {
            return
        }
        if (this.node.getTotalLength) {
            return this.node.getTotalLength()
        }
        return aS(this.attrs.path)
    };
    bh.getPointAtLength = function (b) {
        if (this.type != "path") {
            return
        }
        return J(this.attrs.path, b)
    };
    bh.getSubpath = function (d, b) {
        if (this.type != "path") {
            return
        }
        return aR.getSubpath(this.attrs.path, d, b)
    };
    var o = aR.easing_formulas = {
        linear: function (b) {
            return b
        }, "<": function (b) {
            return bp(b, 1.7)
        }, ">": function (b) {
            return bp(b, 0.48)
        }, "<>": function (bM) {
            var E = 0.48 - bM / 1.04, g = au.sqrt(0.1734 + E * E), b = g - E, bL = bp(aw(b), 1 / 3) * (b < 0 ? -1 : 1), S = -g - E, R = bp(aw(S), 1 / 3) * (S < 0 ? -1 : 1), d = bL + R + 0.5;
            return (1 - d) * 3 * d * d + d * d * d
        }, backIn: function (d) {
            var b = 1.70158;
            return d * d * ((b + 1) * d - b)
        }, backOut: function (d) {
            d = d - 1;
            var b = 1.70158;
            return d * d * ((b + 1) * d + b) + 1
        }, elastic: function (b) {
            if (b == !!b) {
                return b
            }
            return bp(2, -10 * b) * au.sin((b - 0.075) * (2 * aV) / 0.3) + 1
        }, bounce: function (E) {
            var d = 7.5625, g = 2.75, b;
            if (E < (1 / g)) {
                b = d * E * E
            } else {
                if (E < (2 / g)) {
                    E -= (1.5 / g);
                    b = d * E * E + 0.75
                } else {
                    if (E < (2.5 / g)) {
                        E -= (2.25 / g);
                        b = d * E * E + 0.9375
                    } else {
                        E -= (2.625 / g);
                        b = d * E * E + 0.984375
                    }
                }
            }
            return b
        }
    };
    o.easeIn = o["ease-in"] = o["<"];
    o.easeOut = o["ease-out"] = o[">"];
    o.easeInOut = o["ease-in-out"] = o["<>"];
    o["back-in"] = o.backIn;
    o["back-out"] = o.backOut;
    var ab = [], aN = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (b) {
            setTimeout(b, 16)
        }, bC = function () {
        var bL = +new Date, bT = 0;
        for (; bT < ab.length; bT++) {
            var bZ = ab[bT];
            if (bZ.el.removed || bZ.paused) {
                continue
            }
            var E = bL - bZ.start, bR = bZ.ms, bQ = bZ.easing, bU = bZ.from, bO = bZ.diff, d = bZ.to, bN = bZ.t, S = bZ.el, bP = {}, b, bX = {}, b1;
            if (bZ.initstatus) {
                E = (bZ.initstatus * bZ.anim.top - bZ.prev) / (bZ.percent - bZ.prev) * bR;
                bZ.status = bZ.initstatus;
                delete bZ.initstatus;
                bZ.stop && ab.splice(bT--, 1)
            } else {
                bZ.status = (bZ.prev + (bZ.percent - bZ.prev) * (E / bR)) / bZ.anim.top
            }
            if (E < 0) {
                continue
            }
            if (E < bR) {
                var g = bQ(E / bR);
                for (var bS in bU) {
                    if (bU[ak](bS)) {
                        switch (ar[bS]) {
                            case aL:
                                b = +bU[bS] + g * bR * bO[bS];
                                break;
                            case"colour":
                                b = "rgb(" + [H(ah(bU[bS].r + g * bR * bO[bS].r)), H(ah(bU[bS].g + g * bR * bO[bS].g)), H(ah(bU[bS].b + g * bR * bO[bS].b))].join(",") + ")";
                                break;
                            case"path":
                                b = [];
                                for (var bW = 0, bM = bU[bS].length; bW < bM; bW++) {
                                    b[bW] = [bU[bS][bW][0]];
                                    for (var bV = 1, bY = bU[bS][bW].length; bV < bY; bV++) {
                                        b[bW][bV] = +bU[bS][bW][bV] + g * bR * bO[bS][bW][bV]
                                    }
                                    b[bW] = b[bW].join(aQ)
                                }
                                b = b.join(aQ);
                                break;
                            case"transform":
                                if (bO[bS].real) {
                                    b = [];
                                    for (bW = 0, bM = bU[bS].length; bW < bM; bW++) {
                                        b[bW] = [bU[bS][bW][0]];
                                        for (bV = 1, bY = bU[bS][bW].length; bV < bY; bV++) {
                                            b[bW][bV] = bU[bS][bW][bV] + g * bR * bO[bS][bW][bV]
                                        }
                                    }
                                } else {
                                    var b0 = function (b2) {
                                        return +bU[bS][b2] + g * bR * bO[bS][b2]
                                    };
                                    b = [["m", b0(0), b0(1), b0(2), b0(3), b0(4), b0(5)]]
                                }
                                break;
                            case"csv":
                                if (bS == "clip-rect") {
                                    b = [];
                                    bW = 4;
                                    while (bW--) {
                                        b[bW] = +bU[bS][bW] + g * bR * bO[bS][bW]
                                    }
                                }
                                break;
                            default:
                                var R = [][bE](bU[bS]);
                                b = [];
                                bW = S.paper.customAttributes[bS].length;
                                while (bW--) {
                                    b[bW] = +R[bW] + g * bR * bO[bS][bW]
                                }
                                break
                        }
                        bP[bS] = b
                    }
                }
                S.attr(bP);
                (function (b4, b2, b3) {
                    setTimeout(function () {
                        eve("raphael.anim.frame." + b4, b2, b3)
                    })
                })(S.id, S, bZ.anim)
            } else {
                (function (b4, b3, b2) {
                    setTimeout(function () {
                        eve("raphael.anim.frame." + b3.id, b3, b2);
                        eve("raphael.anim.finish." + b3.id, b3, b2);
                        aR.is(b4, "function") && b4.call(b3)
                    })
                })(bZ.callback, S, bZ.anim);
                S.attr(d);
                ab.splice(bT--, 1);
                if (bZ.repeat > 1 && !bZ.next) {
                    for (b1 in d) {
                        if (d[ak](b1)) {
                            bX[b1] = bZ.totalOrigin[b1]
                        }
                    }
                    bZ.el.attr(bX);
                    aM(bZ.anim, bZ.el, bZ.anim.percents[0], null, bZ.totalOrigin, bZ.repeat - 1)
                }
                if (bZ.next && !bZ.stop) {
                    aM(bZ.anim, bZ.el, bZ.next, null, bZ.totalOrigin, bZ.repeat)
                }
            }
        }
        aR.svg && S && S.paper && S.paper.safari();
        ab.length && aN(bC)
    }, H = function (b) {
        return b > 255 ? 255 : b < 0 ? 0 : b
    };
    bh.animateWith = function (d, E, g, b, bL, bQ) {
        var S = this;
        if (S.removed) {
            bQ && bQ.call(S);
            return S
        }
        var bO = g instanceof bA ? g : aR.animation(g, b, bL, bQ), bN, bM;
        aM(bO, S, bO.percents[0], null, S.attr());
        for (var R = 0, bP = ab.length; R < bP; R++) {
            if (ab[R].anim == E && ab[R].el == d) {
                ab[bP - 1].start = ab[R].start;
                break
            }
        }
        return S
    };
    function a3(bS, E, d, bR, bQ, bM) {
        var bN = 3 * E, bP = 3 * (bR - E) - bN, b = 1 - bN - bP, bL = 3 * d, bO = 3 * (bQ - d) - bL, bT = 1 - bL - bO;

        function S(bU) {
            return ((b * bU + bP) * bU + bN) * bU
        }

        function g(bU, bW) {
            var bV = R(bU, bW);
            return ((bT * bV + bO) * bV + bL) * bV
        }

        function R(bU, b1) {
            var b0, bZ, bX, bV, bY, bW;
            for (bX = bU, bW = 0; bW < 8; bW++) {
                bV = S(bX) - bU;
                if (aw(bV) < b1) {
                    return bX
                }
                bY = (3 * b * bX + 2 * bP) * bX + bN;
                if (aw(bY) < 0.000001) {
                    break
                }
                bX = bX - bV / bY
            }
            b0 = 0;
            bZ = 1;
            bX = bU;
            if (bX < b0) {
                return b0
            }
            if (bX > bZ) {
                return bZ
            }
            while (b0 < bZ) {
                bV = S(bX);
                if (aw(bV - bU) < b1) {
                    return bX
                }
                if (bU > bV) {
                    b0 = bX
                } else {
                    bZ = bX
                }
                bX = (bZ - b0) / 2 + b0
            }
            return bX
        }

        return g(bS, 1 / (200 * bM))
    }

    bh.onAnimation = function (b) {
        b ? eve.on("raphael.anim.frame." + this.id, b) : eve.unbind("raphael.anim.frame." + this.id);
        return this
    };
    function bA(R, g) {
        var d = [], E = {};
        this.ms = g;
        this.times = 1;
        if (R) {
            for (var b in R) {
                if (R[ak](b)) {
                    E[an(b)] = R[b];
                    d.push(an(b))
                }
            }
            d.sort(u)
        }
        this.anim = E;
        this.top = d[d.length - 1];
        this.percents = d
    }

    bA.prototype.delay = function (d) {
        var b = new bA(this.anim, this.ms);
        b.times = this.times;
        b.del = +d || 0;
        return b
    };
    bA.prototype.repeat = function (d) {
        var b = new bA(this.anim, this.ms);
        b.del = this.del;
        b.times = au.floor(m(d, 0)) || 1;
        return b
    };
    function aM(b3, g, b, b1, bL, bP) {
        b = an(b);
        var ca, S, bO, cb = [], bV, bU, R, bX = b3.ms, b2 = {}, E = {}, bR = {};
        if (b1) {
            for (b6 = 0, bQ = ab.length; b6 < bQ; b6++) {
                var b8 = ab[b6];
                if (b8.el.id == g.id && b8.anim == b3) {
                    if (b8.percent != b) {
                        ab.splice(b6, 1);
                        bO = 1
                    } else {
                        S = b8
                    }
                    g.attr(b8.totalOrigin);
                    break
                }
            }
        } else {
            b1 = +E
        }
        for (var b6 = 0, bQ = b3.percents.length; b6 < bQ; b6++) {
            if (b3.percents[b6] == b || b3.percents[b6] > b1 * b3.top) {
                b = b3.percents[b6];
                bU = b3.percents[b6 - 1] || 0;
                bX = bX / b3.top * (b - bU);
                bV = b3.percents[b6 + 1];
                ca = b3.anim[b];
                break
            } else {
                if (b1) {
                    g.attr(b3.anim[b3.percents[b6]])
                }
            }
        }
        if (!ca) {
            return
        }
        if (!S) {
            for (var bZ in ca) {
                if (ca[ak](bZ)) {
                    if (ar[ak](bZ) || g.paper.customAttributes[ak](bZ)) {
                        b2[bZ] = g.attr(bZ);
                        (b2[bZ] == null) && (b2[bZ] = r[bZ]);
                        E[bZ] = ca[bZ];
                        switch (ar[bZ]) {
                            case aL:
                                bR[bZ] = (E[bZ] - b2[bZ]) / bX;
                                break;
                            case"colour":
                                b2[bZ] = aR.getRGB(b2[bZ]);
                                var b0 = aR.getRGB(E[bZ]);
                                bR[bZ] = {
                                    r: (b0.r - b2[bZ].r) / bX,
                                    g: (b0.g - b2[bZ].g) / bX,
                                    b: (b0.b - b2[bZ].b) / bX
                                };
                                break;
                            case"path":
                                var bM = W(b2[bZ], E[bZ]), bT = bM[1];
                                b2[bZ] = bM[0];
                                bR[bZ] = [];
                                for (b6 = 0, bQ = b2[bZ].length; b6 < bQ; b6++) {
                                    bR[bZ][b6] = [0];
                                    for (var b5 = 1, b7 = b2[bZ][b6].length; b5 < b7; b5++) {
                                        bR[bZ][b6][b5] = (bT[b6][b5] - b2[bZ][b6][b5]) / bX
                                    }
                                }
                                break;
                            case"transform":
                                var cd = g._, cc = aB(cd[bZ], E[bZ]);
                                if (cc) {
                                    b2[bZ] = cc.from;
                                    E[bZ] = cc.to;
                                    bR[bZ] = [];
                                    bR[bZ].real = true;
                                    for (b6 = 0, bQ = b2[bZ].length; b6 < bQ; b6++) {
                                        bR[bZ][b6] = [b2[bZ][b6][0]];
                                        for (b5 = 1, b7 = b2[bZ][b6].length; b5 < b7; b5++) {
                                            bR[bZ][b6][b5] = (E[bZ][b6][b5] - b2[bZ][b6][b5]) / bX
                                        }
                                    }
                                } else {
                                    var bY = (g.matrix || new aF), b9 = {
                                        _: {transform: cd.transform},
                                        getBBox: function () {
                                            return g.getBBox(1)
                                        }
                                    };
                                    b2[bZ] = [bY.a, bY.b, bY.c, bY.d, bY.e, bY.f];
                                    aO(b9, E[bZ]);
                                    E[bZ] = b9._.transform;
                                    bR[bZ] = [(b9.matrix.a - bY.a) / bX, (b9.matrix.b - bY.b) / bX, (b9.matrix.c - bY.c) / bX, (b9.matrix.d - bY.d) / bX, (b9.matrix.e - bY.e) / bX, (b9.matrix.f - bY.f) / bX]
                                }
                                break;
                            case"csv":
                                var d = bH(ca[bZ])[F](a), bN = bH(b2[bZ])[F](a);
                                if (bZ == "clip-rect") {
                                    b2[bZ] = bN;
                                    bR[bZ] = [];
                                    b6 = bN.length;
                                    while (b6--) {
                                        bR[bZ][b6] = (d[b6] - b2[bZ][b6]) / bX
                                    }
                                }
                                E[bZ] = d;
                                break;
                            default:
                                d = [][bE](ca[bZ]);
                                bN = [][bE](b2[bZ]);
                                bR[bZ] = [];
                                b6 = g.paper.customAttributes[bZ].length;
                                while (b6--) {
                                    bR[bZ][b6] = ((d[b6] || 0) - (bN[b6] || 0)) / bX
                                }
                                break
                        }
                    }
                }
            }
            var bW = ca.easing, b4 = aR.easing_formulas[bW];
            if (!b4) {
                b4 = bH(bW).match(c);
                if (b4 && b4.length == 5) {
                    var bS = b4;
                    b4 = function (ce) {
                        return a3(ce, +bS[1], +bS[2], +bS[3], +bS[4], bX)
                    }
                } else {
                    b4 = bB
                }
            }
            R = ca.start || b3.start || +new Date;
            b8 = {
                anim: b3,
                percent: b,
                timestamp: R,
                start: R + (b3.del || 0),
                status: 0,
                initstatus: b1 || 0,
                stop: false,
                ms: bX,
                easing: b4,
                from: b2,
                diff: bR,
                to: E,
                el: g,
                callback: ca.callback,
                prev: bU,
                next: bV,
                repeat: bP || b3.times,
                origin: g.attr(),
                totalOrigin: bL
            };
            ab.push(b8);
            if (b1 && !S && !bO) {
                b8.stop = true;
                b8.start = new Date - bX * b1;
                if (ab.length == 1) {
                    return bC()
                }
            }
            if (bO) {
                b8.start = new Date - b8.ms * b1
            }
            ab.length == 1 && aN(bC)
        } else {
            S.initstatus = b1;
            S.start = new Date - S.ms * b1
        }
        eve("raphael.anim.start." + g.id, g, b3)
    }

    aR.animation = function (R, d, bL, S) {
        if (R instanceof bA) {
            return R
        }
        if (aR.is(bL, "function") || !bL) {
            S = S || bL || null;
            bL = null
        }
        R = Object(R);
        d = +d || 0;
        var E = {}, g, b;
        for (b in R) {
            if (R[ak](b) && an(b) != b && an(b) + "%" != b) {
                g = true;
                E[b] = R[b]
            }
        }
        if (!g) {
            return new bA(R, d)
        } else {
            bL && (E.easing = bL);
            S && (E.callback = S);
            return new bA({100: E}, d)
        }
    };
    bh.animate = function (E, b, S, R) {
        var d = this;
        if (d.removed) {
            R && R.call(d);
            return d
        }
        var g = E instanceof bA ? E : aR.animation(E, b, S, R);
        aM(g, d, g.percents[0], null, d.attr());
        return d
    };
    bh.setTime = function (d, b) {
        if (d && b != null) {
            this.status(d, bm(b, d.ms) / d.ms)
        }
        return this
    };
    bh.status = function (R, E) {
        var d = [], g = 0, b, S;
        if (E != null) {
            aM(R, this, -1, bm(E, 1));
            return this
        } else {
            b = ab.length;
            for (; g < b; g++) {
                S = ab[g];
                if (S.el.id == this.id && (!R || S.anim == R)) {
                    if (R) {
                        return S.status
                    }
                    d.push({anim: S.anim, status: S.status})
                }
            }
            if (R) {
                return 0
            }
            return d
        }
    };
    bh.pause = function (d) {
        for (var b = 0; b < ab.length; b++) {
            if (ab[b].el.id == this.id && (!d || ab[b].anim == d)) {
                if (eve("raphael.anim.pause." + this.id, this, ab[b].anim) !== false) {
                    ab[b].paused = true
                }
            }
        }
        return this
    };
    bh.resume = function (d) {
        for (var b = 0; b < ab.length; b++) {
            if (ab[b].el.id == this.id && (!d || ab[b].anim == d)) {
                var g = ab[b];
                if (eve("raphael.anim.resume." + this.id, this, g.anim) !== false) {
                    delete g.paused;
                    this.status(g.anim, g.status)
                }
            }
        }
        return this
    };
    bh.stop = function (d) {
        for (var b = 0; b < ab.length; b++) {
            if (ab[b].el.id == this.id && (!d || ab[b].anim == d)) {
                if (eve("raphael.anim.stop." + this.id, this, ab[b].anim) !== false) {
                    ab.splice(b--, 1)
                }
            }
        }
        return this
    };
    function aa(d) {
        for (var b = 0; b < ab.length; b++) {
            if (ab[b].el.paper == d) {
                ab.splice(b--, 1)
            }
        }
    }

    eve.on("raphael.remove", aa);
    eve.on("raphael.clear", aa);
    bh.toString = function () {
        return "Rapha\xebl\u2019s object"
    };
    var al = function (b) {
        this.items = [];
        this.length = 0;
        this.type = "set";
        if (b) {
            for (var d = 0, g = b.length; d < g; d++) {
                if (b[d] && (b[d].constructor == bh.constructor || b[d].constructor == al)) {
                    this[this.items.length] = this.items[this.items.length] = b[d];
                    this.length++
                }
            }
        }
    }, bc = al.prototype;
    bc.push = function () {
        var E, b;
        for (var d = 0, g = arguments.length; d < g; d++) {
            E = arguments[d];
            if (E && (E.constructor == bh.constructor || E.constructor == al)) {
                b = this.items.length;
                this[b] = this.items[b] = E;
                this.length++
            }
        }
        return this
    };
    bc.pop = function () {
        this.length && delete this[this.length--];
        return this.items.pop()
    };
    bc.forEach = function (E, b) {
        for (var d = 0, g = this.items.length; d < g; d++) {
            if (E.call(b, this.items[d], d) === false) {
                return this
            }
        }
        return this
    };
    for (var B in bh) {
        if (bh[ak](B)) {
            bc[B] = (function (b) {
                return function () {
                    var d = arguments;
                    return this.forEach(function (g) {
                        g[b][bG](g, d)
                    })
                }
            })(B)
        }
    }
    bc.attr = function (d, S) {
        if (d && aR.is(d, bd) && aR.is(d[0], "object")) {
            for (var b = 0, R = d.length; b < R; b++) {
                this.items[b].attr(d[b])
            }
        } else {
            for (var g = 0, E = this.items.length; g < E; g++) {
                this.items[g].attr(d, S)
            }
        }
        return this
    };
    bc.clear = function () {
        while (this.length) {
            this.pop()
        }
    };
    bc.splice = function (E, bL, bM) {
        E = E < 0 ? m(this.length + E, 0) : E;
        bL = m(0, bm(this.length - E, bL));
        var g = [], b = [], d = [], R;
        for (R = 2; R < arguments.length; R++) {
            d.push(arguments[R])
        }
        for (R = 0; R < bL; R++) {
            b.push(this[E + R])
        }
        for (; R < this.length - E; R++) {
            g.push(this[E + R])
        }
        var S = d.length;
        for (R = 0; R < S + g.length; R++) {
            this.items[E + R] = this[E + R] = R < S ? d[R] : g[R - S]
        }
        R = this.items.length = this.length -= bL - S;
        while (this[R]) {
            delete this[R++]
        }
        return new al(b)
    };
    bc.exclude = function (g) {
        for (var b = 0, d = this.length; b < d; b++) {
            if (this[b] == g) {
                this.splice(b, 1);
                return true
            }
        }
    };
    bc.animate = function (g, b, bL, bN) {
        (aR.is(bL, "function") || !bL) && (bN = bL || null);
        var S = this.items.length, E = S, bO, bM = this, R;
        if (!S) {
            return this
        }
        bN && (R = function () {
            !--S && bN.call(bM)
        });
        bL = aR.is(bL, aj) ? bL : R;
        var d = aR.animation(g, b, bL, R);
        bO = this.items[--E].animate(d);
        while (E--) {
            this.items[E] && !this.items[E].removed && this.items[E].animateWith(bO, d, d)
        }
        return this
    };
    bc.insertAfter = function (d) {
        var b = this.items.length;
        while (b--) {
            this.items[b].insertAfter(d)
        }
        return this
    };
    bc.getBBox = function () {
        var b = [], S = [], d = [], E = [];
        for (var g = this.items.length; g--;) {
            if (!this.items[g].removed) {
                var R = this.items[g].getBBox();
                b.push(R.x);
                S.push(R.y);
                d.push(R.x + R.width);
                E.push(R.y + R.height)
            }
        }
        b = bm[bG](0, b);
        S = bm[bG](0, S);
        d = m[bG](0, d);
        E = m[bG](0, E);
        return {x: b, y: S, x2: d, y2: E, width: d - b, height: E - S}
    };
    bc.clone = function (g) {
        g = new al;
        for (var b = 0, d = this.items.length; b < d; b++) {
            g.push(this.items[b].clone())
        }
        return g
    };
    bc.toString = function () {
        return "Rapha\xebl\u2018s set"
    };
    aR.registerFont = function (d) {
        if (!d.face) {
            return d
        }
        this.fonts = this.fonts || {};
        var E = {w: d.w, face: {}, glyphs: {}}, g = d.face["font-family"];
        for (var bL in d.face) {
            if (d.face[ak](bL)) {
                E.face[bL] = d.face[bL]
            }
        }
        if (this.fonts[g]) {
            this.fonts[g].push(E)
        } else {
            this.fonts[g] = [E]
        }
        if (!d.svg) {
            E.face["units-per-em"] = U(d.face["units-per-em"], 10);
            for (var R in d.glyphs) {
                if (d.glyphs[ak](R)) {
                    var S = d.glyphs[R];
                    E.glyphs[R] = {
                        w: S.w, k: {}, d: S.d && "M" + S.d.replace(/[mlcxtrv]/g, function (bM) {
                            return {l: "L", c: "C", x: "z", t: "m", r: "l", v: "c"}[bM] || "M"
                        }) + "z"
                    };
                    if (S.k) {
                        for (var b in S.k) {
                            if (S[ak](b)) {
                                E.glyphs[R].k[b] = S.k[b]
                            }
                        }
                    }
                }
            }
        }
        return d
    };
    a4.getFont = function (bM, bN, d, E) {
        E = E || "normal";
        d = d || "normal";
        bN = +bN || {normal: 400, bold: 700, lighter: 300, bolder: 800}[bN] || 400;
        if (!aR.fonts) {
            return
        }
        var R = aR.fonts[bM];
        if (!R) {
            var g = new RegExp("(^|\\s)" + bM.replace(/[^\w\d\s+!~.:_-]/g, aX) + "(\\s|$)", "i");
            for (var b in aR.fonts) {
                if (aR.fonts[ak](b)) {
                    if (g.test(b)) {
                        R = aR.fonts[b];
                        break
                    }
                }
            }
        }
        var S;
        if (R) {
            for (var bL = 0, bO = R.length; bL < bO; bL++) {
                S = R[bL];
                if (S.face["font-weight"] == bN && (S.face["font-style"] == d || !S.face["font-style"]) && S.face["font-stretch"] == E) {
                    break
                }
            }
        }
        return S
    };
    a4.print = function (bL, S, b, bO, bP, bY, d) {
        bY = bY || "middle";
        d = m(bm(d || 0, 1), -1);
        var bX = bH(b)[F](aX), bU = 0, bW = 0, bS = aX, bZ;
        aR.is(bO, b) && (bO = this.getFont(bO));
        if (bO) {
            bZ = (bP || 16) / bO.face["units-per-em"];
            var E = bO.face.bbox[F](a), bN = +E[0], g = E[3] - E[1], R = 0, bQ = +E[1] + (bY == "baseline" ? g + (+bO.face.descent) : g / 2);
            for (var bT = 0, bM = bX.length; bT < bM; bT++) {
                if (bX[bT] == "\n") {
                    bU = 0;
                    bV = 0;
                    bW = 0;
                    R += g
                } else {
                    var bR = bW && bO.glyphs[bX[bT - 1]] || {}, bV = bO.glyphs[bX[bT]];
                    bU += bW ? (bR.w || bO.w) + (bR.k && bR.k[bX[bT]] || 0) + (bO.w * d) : 0;
                    bW = 1
                }
                if (bV && bV.d) {
                    bS += aR.transformPath(bV.d, ["t", bU * bZ, R * bZ, "s", bZ, bZ, bN, bQ, "t", (bL - bN) / bZ, (S - bQ) / bZ])
                }
            }
        }
        return this.path(bS).attr({fill: "#000", stroke: "none"})
    };
    a4.add = function (E) {
        if (aR.is(E, "array")) {
            var g = this.set(), d = 0, R = E.length, b;
            for (; d < R; d++) {
                b = E[d] || {};
                bw[ak](b.type) && g.push(this[b.type]().attr(b))
            }
        }
        return g
    };
    aR.format = function (d, g) {
        var b = aR.is(g, bd) ? [0][bE](g) : arguments;
        d && aR.is(d, aj) && b.length - 1 && (d = d.replace(br, function (R, E) {
            return b[++E] == null ? aX : b[E]
        }));
        return d || aX
    };
    aR.fullfill = (function () {
        var g = /\{([^\}]+)\}/g, b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, d = function (S, R, bL) {
            var E = bL;
            R.replace(b, function (bO, bN, bM, bQ, bP) {
                bN = bN || bQ;
                if (E) {
                    if (bN in E) {
                        E = E[bN]
                    }
                    typeof E == "function" && bP && (E = E())
                }
            });
            E = (E == null || E == bL ? S : E) + "";
            return E
        };
        return function (R, E) {
            return String(R).replace(g, function (bL, S) {
                return d(bL, S, E)
            })
        }
    })();
    aR.ninja = function () {
        s.was ? (aA.win.Raphael = s.is) : delete Raphael;
        return aR
    };
    aR.st = bc;
    (function (E, d, g) {
        if (E.readyState == null && E.addEventListener) {
            E.addEventListener(d, g = function () {
                E.removeEventListener(d, g, false);
                E.readyState = "complete"
            }, false);
            E.readyState = "loading"
        }
        function b() {
            (/in/).test(E.readyState) ? setTimeout(b, 9) : aR.eve("raphael.DOMload")
        }

        b()
    })(document, "DOMContentLoaded");
    s.was ? (aA.win.Raphael = aR) : (Raphael = aR);
    eve.on("raphael.DOMload", function () {
        ao = true
    })
})();
window.Raphael.svg && function (m) {
    var d = "hasOwnProperty", C = String, o = parseFloat, r = parseInt, f = Math, D = f.max, t = f.abs, h = f.pow, g = /[, ]+/, A = m.eve, s = "", k = " ";
    var p = "http://www.w3.org/1999/xlink", z = {
        block: "M5,0 0,2.5 5,5z",
        classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
        diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
        open: "M6,1 1,3.5 6,6",
        oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
    }, v = {};
    m.toString = function () {
        return "Your browser supports SVG.\nYou are running Rapha\xebl " + this.version
    };
    var j = function (G, E) {
        if (E) {
            if (typeof G == "string") {
                G = j(G)
            }
            for (var F in E) {
                if (E[d](F)) {
                    if (F.substring(0, 6) == "xlink:") {
                        G.setAttributeNS(p, F.substring(6), C(E[F]))
                    } else {
                        G.setAttribute(F, C(E[F]))
                    }
                }
            }
        } else {
            G = m._g.doc.createElementNS("http://www.w3.org/2000/svg", G);
            G.style && (G.style.webkitTapHighlightColor = "rgba(0,0,0,0)")
        }
        return G
    }, a = function (N, R) {
        var P = "linear", F = N.id + R, L = 0.5, J = 0.5, H = N.node, E = N.paper, T = H.style, G = m._g.doc.getElementById(F);
        if (!G) {
            R = C(R).replace(m._radial_gradient, function (W, U, X) {
                P = "radial";
                if (U && X) {
                    L = o(U);
                    J = o(X);
                    var V = ((J > 0.5) * 2 - 1);
                    h(L - 0.5, 2) + h(J - 0.5, 2) > 0.25 && (J = f.sqrt(0.25 - h(L - 0.5, 2)) * V + 0.5) && J != 0.5 && (J = J.toFixed(5) - 0.00001 * V)
                }
                return s
            });
            R = R.split(/\s*\-\s*/);
            if (P == "linear") {
                var K = R.shift();
                K = -o(K);
                if (isNaN(K)) {
                    return null
                }
                var I = [0, 0, f.cos(m.rad(K)), f.sin(m.rad(K))], Q = 1 / (D(t(I[2]), t(I[3])) || 1);
                I[2] *= Q;
                I[3] *= Q;
                if (I[2] < 0) {
                    I[0] = -I[2];
                    I[2] = 0
                }
                if (I[3] < 0) {
                    I[1] = -I[3];
                    I[3] = 0
                }
            }
            var O = m._parseDots(R);
            if (!O) {
                return null
            }
            F = F.replace(/[\(\)\s,\xb0#]/g, "_");
            if (N.gradient && F != N.gradient.id) {
                E.defs.removeChild(N.gradient);
                delete N.gradient
            }
            if (!N.gradient) {
                G = j(P + "Gradient", {id: F});
                N.gradient = G;
                j(G, P == "radial" ? {fx: L, fy: J} : {
                    x1: I[0],
                    y1: I[1],
                    x2: I[2],
                    y2: I[3],
                    gradientTransform: N.matrix.invert()
                });
                E.defs.appendChild(G);
                for (var M = 0, S = O.length; M < S; M++) {
                    G.appendChild(j("stop", {
                        offset: O[M].offset ? O[M].offset : M ? "100%" : "0%",
                        "stop-color": O[M].color || "#fff"
                    }))
                }
            }
        }
        j(H, {fill: "url(#" + F + ")", opacity: 1, "fill-opacity": 1});
        T.fill = s;
        T.opacity = 1;
        T.fillOpacity = 1;
        return 1
    }, b = function (F) {
        var E = F.getBBox(1);
        j(F.pattern, {patternTransform: F.matrix.invert() + " translate(" + E.x + "," + E.y + ")"})
    }, c = function (P, R, K) {
        if (P.type == "path") {
            var E = C(R).toLowerCase().split("-"), O = P.paper, ac = K ? "end" : "start", T = P.node, Q = P.attrs, J = Q["stroke-width"], X = E.length, H = "classic", W, G, M, U, S, L = 3, Y = 3, N = 5;
            while (X--) {
                switch (E[X]) {
                    case"block":
                    case"classic":
                    case"oval":
                    case"diamond":
                    case"open":
                    case"none":
                        H = E[X];
                        break;
                    case"wide":
                        Y = 5;
                        break;
                    case"narrow":
                        Y = 2;
                        break;
                    case"long":
                        L = 5;
                        break;
                    case"short":
                        L = 2;
                        break
                }
            }
            if (H == "open") {
                L += 2;
                Y += 2;
                N += 2;
                M = 1;
                U = K ? 4 : 1;
                S = {fill: "none", stroke: Q.stroke}
            } else {
                U = M = L / 2;
                S = {fill: Q.stroke, stroke: "none"}
            }
            if (P._.arrows) {
                if (K) {
                    P._.arrows.endPath && v[P._.arrows.endPath]--;
                    P._.arrows.endMarker && v[P._.arrows.endMarker]--
                } else {
                    P._.arrows.startPath && v[P._.arrows.startPath]--;
                    P._.arrows.startMarker && v[P._.arrows.startMarker]--
                }
            } else {
                P._.arrows = {}
            }
            if (H != "none") {
                var F = "raphael-marker-" + H, ab = "raphael-marker-" + ac + H + L + Y;
                if (!m._g.doc.getElementById(F)) {
                    O.defs.appendChild(j(j("path"), {"stroke-linecap": "round", d: z[H], id: F}));
                    v[F] = 1
                } else {
                    v[F]++
                }
                var I = m._g.doc.getElementById(ab), V;
                if (!I) {
                    I = j(j("marker"), {id: ab, markerHeight: Y, markerWidth: L, orient: "auto", refX: U, refY: Y / 2});
                    V = j(j("use"), {
                        "xlink:href": "#" + F,
                        transform: (K ? "rotate(180 " + L / 2 + " " + Y / 2 + ") " : s) + "scale(" + L / N + "," + Y / N + ")",
                        "stroke-width": (1 / ((L / N + Y / N) / 2)).toFixed(4)
                    });
                    I.appendChild(V);
                    O.defs.appendChild(I);
                    v[ab] = 1
                } else {
                    v[ab]++;
                    V = I.getElementsByTagName("use")[0]
                }
                j(V, S);
                var aa = M * (H != "diamond" && H != "oval");
                if (K) {
                    W = P._.arrows.startdx * J || 0;
                    G = m.getTotalLength(Q.path) - aa * J
                } else {
                    W = aa * J;
                    G = m.getTotalLength(Q.path) - (P._.arrows.enddx * J || 0)
                }
                S = {};
                S["marker-" + ac] = "url(#" + ab + ")";
                if (G || W) {
                    S.d = Raphael.getSubpath(Q.path, W, G)
                }
                j(T, S);
                P._.arrows[ac + "Path"] = F;
                P._.arrows[ac + "Marker"] = ab;
                P._.arrows[ac + "dx"] = aa;
                P._.arrows[ac + "Type"] = H;
                P._.arrows[ac + "String"] = R
            } else {
                if (K) {
                    W = P._.arrows.startdx * J || 0;
                    G = m.getTotalLength(Q.path) - W
                } else {
                    W = 0;
                    G = m.getTotalLength(Q.path) - (P._.arrows.enddx * J || 0)
                }
                P._.arrows[ac + "Path"] && j(T, {d: Raphael.getSubpath(Q.path, W, G)});
                delete P._.arrows[ac + "Path"];
                delete P._.arrows[ac + "Marker"];
                delete P._.arrows[ac + "dx"];
                delete P._.arrows[ac + "Type"];
                delete P._.arrows[ac + "String"]
            }
            for (S in v) {
                if (v[d](S) && !v[S]) {
                    var Z = m._g.doc.getElementById(S);
                    Z && Z.parentNode.removeChild(Z)
                }
            }
        }
    }, w = {
        "": [0],
        none: [0],
        "-": [3, 1],
        ".": [1, 1],
        "-.": [3, 1, 1, 1],
        "-..": [3, 1, 1, 1, 1, 1],
        ". ": [1, 3],
        "- ": [4, 3],
        "--": [8, 3],
        "- .": [4, 3, 1, 3],
        "--.": [8, 3, 1, 3],
        "--..": [8, 3, 1, 3, 1, 3]
    }, l = function (K, I, J) {
        I = w[C(I).toLowerCase()];
        if (I) {
            var G = K.attrs["stroke-width"] || "1", E = {
                    round: G,
                    square: G,
                    butt: 0
                }[K.attrs["stroke-linecap"] || J["stroke-linecap"]] || 0, H = [], F = I.length;
            while (F--) {
                H[F] = I[F] * G + ((F % 2) ? 1 : -1) * E
            }
            j(K.node, {"stroke-dasharray": H.join(",")})
        }
    }, x = function (P, X) {
        var T = P.node, Q = P.attrs, N = T.style.visibility;
        T.style.visibility = "hidden";
        for (var S in X) {
            if (X[d](S)) {
                if (!m._availableAttrs[d](S)) {
                    continue
                }
                var R = X[S];
                Q[S] = R;
                switch (S) {
                    case"blur":
                        P.blur(R);
                        break;
                    case"href":
                    case"title":
                    case"target":
                        var V = T.parentNode;
                        if (V.tagName.toLowerCase() != "a") {
                            var I = j("a");
                            V.insertBefore(I, T);
                            I.appendChild(T);
                            V = I
                        }
                        if (S == "target") {
                            V.setAttributeNS(p, "show", R == "blank" ? "new" : R)
                        } else {
                            V.setAttributeNS(p, S, R)
                        }
                        break;
                    case"cursor":
                        T.style.cursor = R;
                        break;
                    case"transform":
                        P.transform(R);
                        break;
                    case"arrow-start":
                        c(P, R);
                        break;
                    case"arrow-end":
                        c(P, R, 1);
                        break;
                    case"clip-rect":
                        var F = C(R).split(g);
                        if (F.length == 4) {
                            P.clip && P.clip.parentNode.parentNode.removeChild(P.clip.parentNode);
                            var G = j("clipPath"), U = j("rect");
                            G.id = m.createUUID();
                            j(U, {x: F[0], y: F[1], width: F[2], height: F[3]});
                            G.appendChild(U);
                            P.paper.defs.appendChild(G);
                            j(T, {"clip-path": "url(#" + G.id + ")"});
                            P.clip = U
                        }
                        if (!R) {
                            var O = T.getAttribute("clip-path");
                            if (O) {
                                var W = m._g.doc.getElementById(O.replace(/(^url\(#|\)$)/g, s));
                                W && W.parentNode.removeChild(W);
                                j(T, {"clip-path": s});
                                delete P.clip
                            }
                        }
                        break;
                    case"path":
                        if (P.type == "path") {
                            j(T, {d: R ? Q.path = m._pathToAbsolute(R) : "M0,0"});
                            P._.dirty = 1;
                            if (P._.arrows) {
                                "startString" in P._.arrows && c(P, P._.arrows.startString);
                                "endString" in P._.arrows && c(P, P._.arrows.endString, 1)
                            }
                        }
                        break;
                    case"width":
                        T.setAttribute(S, R);
                        P._.dirty = 1;
                        if (Q.fx) {
                            S = "x";
                            R = Q.x
                        } else {
                            break
                        }
                    case"x":
                        if (Q.fx) {
                            R = -Q.x - (Q.width || 0)
                        }
                    case"rx":
                        if (S == "rx" && P.type == "rect") {
                            break
                        }
                    case"cx":
                        T.setAttribute(S, R);
                        P.pattern && b(P);
                        P._.dirty = 1;
                        break;
                    case"height":
                        T.setAttribute(S, R);
                        P._.dirty = 1;
                        if (Q.fy) {
                            S = "y";
                            R = Q.y
                        } else {
                            break
                        }
                    case"y":
                        if (Q.fy) {
                            R = -Q.y - (Q.height || 0)
                        }
                    case"ry":
                        if (S == "ry" && P.type == "rect") {
                            break
                        }
                    case"cy":
                        T.setAttribute(S, R);
                        P.pattern && b(P);
                        P._.dirty = 1;
                        break;
                    case"r":
                        if (P.type == "rect") {
                            j(T, {rx: R, ry: R})
                        } else {
                            T.setAttribute(S, R)
                        }
                        P._.dirty = 1;
                        break;
                    case"src":
                        if (P.type == "image") {
                            T.setAttributeNS(p, "href", R)
                        }
                        break;
                    case"stroke-width":
                        if (P._.sx != 1 || P._.sy != 1) {
                            R /= D(t(P._.sx), t(P._.sy)) || 1
                        }
                        if (P.paper._vbSize) {
                            R *= P.paper._vbSize
                        }
                        T.setAttribute(S, R);
                        if (Q["stroke-dasharray"]) {
                            l(P, Q["stroke-dasharray"], X)
                        }
                        if (P._.arrows) {
                            "startString" in P._.arrows && c(P, P._.arrows.startString);
                            "endString" in P._.arrows && c(P, P._.arrows.endString, 1)
                        }
                        break;
                    case"stroke-dasharray":
                        l(P, R, X);
                        break;
                    case"fill":
                        var J = C(R).match(m._ISURL);
                        if (J) {
                            G = j("pattern");
                            var M = j("image");
                            G.id = m.createUUID();
                            j(G, {x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1});
                            j(M, {x: 0, y: 0, "xlink:href": J[1]});
                            G.appendChild(M);
                            (function (Y) {
                                m._preload(J[1], function () {
                                    var Z = this.offsetWidth, aa = this.offsetHeight;
                                    j(Y, {width: Z, height: aa});
                                    j(M, {width: Z, height: aa});
                                    P.paper.safari()
                                })
                            })(G);
                            P.paper.defs.appendChild(G);
                            j(T, {fill: "url(#" + G.id + ")"});
                            P.pattern = G;
                            P.pattern && b(P);
                            break
                        }
                        var H = m.getRGB(R);
                        if (!H.error) {
                            delete X.gradient;
                            delete Q.gradient;
                            !m.is(Q.opacity, "undefined") && m.is(X.opacity, "undefined") && j(T, {opacity: Q.opacity});
                            !m.is(Q["fill-opacity"], "undefined") && m.is(X["fill-opacity"], "undefined") && j(T, {"fill-opacity": Q["fill-opacity"]})
                        } else {
                            if ((P.type == "circle" || P.type == "ellipse" || C(R).charAt() != "r") && a(P, R)) {
                                if ("opacity" in Q || "fill-opacity" in Q) {
                                    var E = m._g.doc.getElementById(T.getAttribute("fill").replace(/^url\(#|\)$/g, s));
                                    if (E) {
                                        var K = E.getElementsByTagName("stop");
                                        j(K[K.length - 1], {"stop-opacity": ("opacity" in Q ? Q.opacity : 1) * ("fill-opacity" in Q ? Q["fill-opacity"] : 1)})
                                    }
                                }
                                Q.gradient = R;
                                Q.fill = "none";
                                break
                            }
                        }
                        H[d]("opacity") && j(T, {"fill-opacity": H.opacity > 1 ? H.opacity / 100 : H.opacity});
                    case"stroke":
                        H = m.getRGB(R);
                        T.setAttribute(S, H.hex);
                        S == "stroke" && H[d]("opacity") && j(T, {"stroke-opacity": H.opacity > 1 ? H.opacity / 100 : H.opacity});
                        if (S == "stroke" && P._.arrows) {
                            "startString" in P._.arrows && c(P, P._.arrows.startString);
                            "endString" in P._.arrows && c(P, P._.arrows.endString, 1)
                        }
                        break;
                    case"gradient":
                        (P.type == "circle" || P.type == "ellipse" || C(R).charAt() != "r") && a(P, R);
                        break;
                    case"opacity":
                        if (Q.gradient && !Q[d]("stroke-opacity")) {
                            j(T, {"stroke-opacity": R > 1 ? R / 100 : R})
                        }
                    case"fill-opacity":
                        if (Q.gradient) {
                            E = m._g.doc.getElementById(T.getAttribute("fill").replace(/^url\(#|\)$/g, s));
                            if (E) {
                                K = E.getElementsByTagName("stop");
                                j(K[K.length - 1], {"stop-opacity": R})
                            }
                            break
                        }
                    default:
                        S == "font-size" && (R = r(R, 10) + "px");
                        var L = S.replace(/(\-.)/g, function (Y) {
                            return Y.substring(1).toUpperCase()
                        });
                        T.style[L] = R;
                        P._.dirty = 1;
                        T.setAttribute(S, R);
                        break
                }
            }
        }
        q(P, X);
        T.style.visibility = N
    }, B = 1.2, q = function (E, I) {
        if (E.type != "text" || !(I[d]("text") || I[d]("font") || I[d]("font-size") || I[d]("x") || I[d]("y"))) {
            return
        }
        var N = E.attrs, G = E.node, P = G.firstChild ? r(m._g.doc.defaultView.getComputedStyle(G.firstChild, s).getPropertyValue("font-size"), 10) : 10;
        if (I[d]("text")) {
            N.text = I.text;
            while (G.firstChild) {
                G.removeChild(G.firstChild)
            }
            var H = C(I.text).split("\n"), F = [], L;
            for (var J = 0, O = H.length; J < O; J++) {
                L = j("tspan");
                J && j(L, {dy: P * B, x: N.x});
                L.appendChild(m._g.doc.createTextNode(H[J]));
                G.appendChild(L);
                F[J] = L
            }
        } else {
            F = G.getElementsByTagName("tspan");
            for (J = 0, O = F.length; J < O; J++) {
                if (J) {
                    j(F[J], {dy: P * B, x: N.x})
                } else {
                    j(F[0], {dy: 0})
                }
            }
        }
        j(G, {x: N.x, y: N.y});
        E._.dirty = 1;
        var K = E._getBBox(), M = N.y - (K.y + K.height / 2);
        M && m.is(M, "finite") && j(F[0], {dy: M})
    }, u = function (F, E) {
        var H = 0, G = 0;
        this[0] = this.node = F;
        F.raphael = true;
        this.id = m._oid++;
        F.raphaelid = this.id;
        this.matrix = m.matrix();
        this.realPath = null;
        this.paper = E;
        this.attrs = this.attrs || {};
        this._ = {transform: [], sx: 1, sy: 1, deg: 0, dx: 0, dy: 0, dirty: 1};
        !E.bottom && (E.bottom = this);
        this.prev = E.top;
        E.top && (E.top.next = this);
        E.top = this;
        this.next = null
    }, n = m.el;
    u.prototype = n;
    n.constructor = u;
    m._engine.path = function (E, H) {
        var F = j("path");
        H.canvas && H.canvas.appendChild(F);
        var G = new u(F, H);
        G.type = "path";
        x(G, {fill: "none", stroke: "#000", path: E});
        return G
    };
    n.rotate = function (F, E, H) {
        if (this.removed) {
            return this
        }
        F = C(F).split(g);
        if (F.length - 1) {
            E = o(F[1]);
            H = o(F[2])
        }
        F = o(F[0]);
        (H == null) && (E = H);
        if (E == null || H == null) {
            var G = this.getBBox(1);
            E = G.x + G.width / 2;
            H = G.y + G.height / 2
        }
        this.transform(this._.transform.concat([["r", F, E, H]]));
        return this
    };
    n.scale = function (I, G, E, H) {
        if (this.removed) {
            return this
        }
        I = C(I).split(g);
        if (I.length - 1) {
            G = o(I[1]);
            E = o(I[2]);
            H = o(I[3])
        }
        I = o(I[0]);
        (G == null) && (G = I);
        (H == null) && (E = H);
        if (E == null || H == null) {
            var F = this.getBBox(1)
        }
        E = E == null ? F.x + F.width / 2 : E;
        H = H == null ? F.y + F.height / 2 : H;
        this.transform(this._.transform.concat([["s", I, G, E, H]]));
        return this
    };
    n.translate = function (F, E) {
        if (this.removed) {
            return this
        }
        F = C(F).split(g);
        if (F.length - 1) {
            E = o(F[1])
        }
        F = o(F[0]) || 0;
        E = +E || 0;
        this.transform(this._.transform.concat([["t", F, E]]));
        return this
    };
    n.transform = function (F) {
        var G = this._;
        if (F == null) {
            return G.transform
        }
        m._extractTransform(this, F);
        this.clip && j(this.clip, {transform: this.matrix.invert()});
        this.pattern && b(this);
        this.node && j(this.node, {transform: this.matrix});
        if (G.sx != 1 || G.sy != 1) {
            var E = this.attrs[d]("stroke-width") ? this.attrs["stroke-width"] : 1;
            this.attr({"stroke-width": E})
        }
        return this
    };
    n.hide = function () {
        !this.removed && this.paper.safari(this.node.style.display = "none");
        return this
    };
    n.show = function () {
        !this.removed && this.paper.safari(this.node.style.display = "");
        return this
    };
    n.remove = function () {
        if (this.removed || !this.node.parentNode) {
            return
        }
        var F = this.paper;
        F.__set__ && F.__set__.exclude(this);
        A.unbind("raphael.*.*." + this.id);
        if (this.gradient) {
            F.defs.removeChild(this.gradient)
        }
        m._tear(this, F);
        if (this.node.parentNode.tagName.toLowerCase() == "a") {
            this.node.parentNode.parentNode.removeChild(this.node.parentNode)
        } else {
            this.node.parentNode.removeChild(this.node)
        }
        for (var E in this) {
            this[E] = typeof this[E] == "function" ? m._removedFactory(E) : null
        }
        this.removed = true
    };
    n._getBBox = function () {
        if (this.node.style.display == "none") {
            this.show();
            var E = true
        }
        var G = {};
        try {
            G = this.node.getBBox()
        } catch (F) {
        } finally {
            G = G || {}
        }
        E && this.hide();
        return G
    };
    n.attr = function (E, N) {
        if (this.removed) {
            return this
        }
        if (E == null) {
            var K = {};
            for (var M in this.attrs) {
                if (this.attrs[d](M)) {
                    K[M] = this.attrs[M]
                }
            }
            K.gradient && K.fill == "none" && (K.fill = K.gradient) && delete K.gradient;
            K.transform = this._.transform;
            return K
        }
        if (N == null && m.is(E, "string")) {
            if (E == "fill" && this.attrs.fill == "none" && this.attrs.gradient) {
                return this.attrs.gradient
            }
            if (E == "transform") {
                return this._.transform
            }
            var L = E.split(g), H = {};
            for (var I = 0, P = L.length; I < P; I++) {
                E = L[I];
                if (E in this.attrs) {
                    H[E] = this.attrs[E]
                } else {
                    if (m.is(this.paper.customAttributes[E], "function")) {
                        H[E] = this.paper.customAttributes[E].def
                    } else {
                        H[E] = m._availableAttrs[E]
                    }
                }
            }
            return P - 1 ? H : H[L[0]]
        }
        if (N == null && m.is(E, "array")) {
            H = {};
            for (I = 0, P = E.length; I < P; I++) {
                H[E[I]] = this.attr(E[I])
            }
            return H
        }
        if (N != null) {
            var F = {};
            F[E] = N
        } else {
            if (E != null && m.is(E, "object")) {
                F = E
            }
        }
        for (var O in F) {
            A("raphael.attr." + O + "." + this.id, this, F[O])
        }
        for (O in this.paper.customAttributes) {
            if (this.paper.customAttributes[d](O) && F[d](O) && m.is(this.paper.customAttributes[O], "function")) {
                var J = this.paper.customAttributes[O].apply(this, [].concat(F[O]));
                this.attrs[O] = F[O];
                for (var G in J) {
                    if (J[d](G)) {
                        F[G] = J[G]
                    }
                }
            }
        }
        x(this, F);
        return this
    };
    n.toFront = function () {
        if (this.removed) {
            return this
        }
        if (this.node.parentNode.tagName.toLowerCase() == "a") {
            this.node.parentNode.parentNode.appendChild(this.node.parentNode)
        } else {
            this.node.parentNode.appendChild(this.node)
        }
        var E = this.paper;
        E.top != this && m._tofront(this, E);
        return this
    };
    n.toBack = function () {
        if (this.removed) {
            return this
        }
        var F = this.node.parentNode;
        if (F.tagName.toLowerCase() == "a") {
            F.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild)
        } else {
            if (F.firstChild != this.node) {
                F.insertBefore(this.node, this.node.parentNode.firstChild)
            }
        }
        m._toback(this, this.paper);
        var E = this.paper;
        return this
    };
    n.insertAfter = function (E) {
        if (this.removed) {
            return this
        }
        var F = E.node || E[E.length - 1].node;
        if (F.nextSibling) {
            F.parentNode.insertBefore(this.node, F.nextSibling)
        } else {
            F.parentNode.appendChild(this.node)
        }
        m._insertafter(this, E, this.paper);
        return this
    };
    n.insertBefore = function (E) {
        if (this.removed) {
            return this
        }
        var F = E.node || E[0].node;
        F.parentNode.insertBefore(this.node, F);
        m._insertbefore(this, E, this.paper);
        return this
    };
    n.blur = function (F) {
        var E = this;
        if (+F !== 0) {
            var G = j("filter"), H = j("feGaussianBlur");
            E.attrs.blur = F;
            G.id = m.createUUID();
            j(H, {stdDeviation: +F || 1.5});
            G.appendChild(H);
            E.paper.defs.appendChild(G);
            E._blur = G;
            j(E.node, {filter: "url(#" + G.id + ")"})
        } else {
            if (E._blur) {
                E._blur.parentNode.removeChild(E._blur);
                delete E._blur;
                delete E.attrs.blur
            }
            E.node.removeAttribute("filter")
        }
    };
    m._engine.circle = function (F, E, J, I) {
        var H = j("circle");
        F.canvas && F.canvas.appendChild(H);
        var G = new u(H, F);
        G.attrs = {cx: E, cy: J, r: I, fill: "none", stroke: "#000"};
        G.type = "circle";
        j(H, G.attrs);
        return G
    };
    m._engine.rect = function (G, E, L, F, J, K) {
        var I = j("rect");
        G.canvas && G.canvas.appendChild(I);
        var H = new u(I, G);
        H.attrs = {x: E, y: L, width: F, height: J, r: K || 0, rx: K || 0, ry: K || 0, fill: "none", stroke: "#000"};
        H.type = "rect";
        j(I, H.attrs);
        return H
    };
    m._engine.ellipse = function (F, E, K, J, I) {
        var H = j("ellipse");
        F.canvas && F.canvas.appendChild(H);
        var G = new u(H, F);
        G.attrs = {cx: E, cy: K, rx: J, ry: I, fill: "none", stroke: "#000"};
        G.type = "ellipse";
        j(H, G.attrs);
        return G
    };
    m._engine.image = function (G, K, E, L, F, J) {
        var I = j("image");
        j(I, {x: E, y: L, width: F, height: J, preserveAspectRatio: "none"});
        I.setAttributeNS(p, "href", K);
        G.canvas && G.canvas.appendChild(I);
        var H = new u(I, G);
        H.attrs = {x: E, y: L, width: F, height: J, src: K};
        H.type = "image";
        return H
    };
    m._engine.text = function (F, E, J, I) {
        var H = j("text");
        F.canvas && F.canvas.appendChild(H);
        var G = new u(H, F);
        G.attrs = {
            x: E,
            y: J,
            "text-anchor": "middle",
            text: I,
            font: m._availableAttrs.font,
            stroke: "none",
            fill: "#000"
        };
        G.type = "text";
        x(G, G.attrs);
        return G
    };
    m._engine.setSize = function (F, E) {
        this.width = F || this.width;
        this.height = E || this.height;
        this.canvas.setAttribute("width", this.width);
        this.canvas.setAttribute("height", this.height);
        if (this._viewBox) {
            this.setViewBox.apply(this, this._viewBox)
        }
        return this
    };
    m._engine.create = function () {
        var H = m._getContainer.apply(0, arguments), F = H && H.container, L = H.x, K = H.y, G = H.width, M = H.height;
        if (!F) {
            throw new Error("SVG container not found.")
        }
        var E = j("svg"), J = "overflow:hidden;", I;
        L = L || 0;
        K = K || 0;
        G = G || 512;
        M = M || 342;
        j(E, {height: M, version: 1.1, width: G, xmlns: "http://www.w3.org/2000/svg"});
        if (F == 1) {
            E.style.cssText = J + "position:absolute;left:" + L + "px;top:" + K + "px";
            m._g.doc.body.appendChild(E);
            I = 1
        } else {
            E.style.cssText = J + "position:relative";
            if (F.firstChild) {
                F.insertBefore(E, F.firstChild)
            } else {
                F.appendChild(E)
            }
        }
        F = new m._Paper;
        F.width = G;
        F.height = M;
        F.canvas = E;
        F.clear();
        F._left = F._top = 0;
        I && (F.renderfix = function () {
        });
        F.renderfix();
        return F
    };
    m._engine.setViewBox = function (J, H, L, E, F) {
        A("raphael.setViewBox", this, this._viewBox, [J, H, L, E, F]);
        var N = D(L / this.width, E / this.height), I = this.top, M = F ? "meet" : "xMinYMin", G, K;
        if (J == null) {
            if (this._vbSize) {
                N = 1
            }
            delete this._vbSize;
            G = "0 0 " + this.width + k + this.height
        } else {
            this._vbSize = N;
            G = J + k + H + k + L + k + E
        }
        j(this.canvas, {viewBox: G, preserveAspectRatio: M});
        while (N && I) {
            K = "stroke-width" in I.attrs ? I.attrs["stroke-width"] : 1;
            I.attr({"stroke-width": K});
            I._.dirty = 1;
            I._.dirtyT = 1;
            I = I.prev
        }
        this._viewBox = [J, H, L, E, !!F];
        return this
    };
    m.prototype.renderfix = function () {
        var J = this.canvas, E = J.style, I;
        try {
            I = J.getScreenCTM() || J.createSVGMatrix()
        } catch (H) {
            I = J.createSVGMatrix()
        }
        var G = -I.e % 1, F = -I.f % 1;
        if (G || F) {
            if (G) {
                this._left = (this._left + G) % 1;
                E.left = this._left + "px"
            }
            if (F) {
                this._top = (this._top + F) % 1;
                E.top = this._top + "px"
            }
        }
    };
    m.prototype.clear = function () {
        m.eve("raphael.clear", this);
        var E = this.canvas;
        while (E.firstChild) {
            E.removeChild(E.firstChild)
        }
        this.bottom = this.top = null;
        (this.desc = j("desc")).appendChild(m._g.doc.createTextNode("Created with Rapha\xebl " + m.version));
        E.appendChild(this.desc);
        E.appendChild(this.defs = j("defs"))
    };
    m.prototype.remove = function () {
        A("raphael.remove", this);
        this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
        for (var E in this) {
            this[E] = typeof this[E] == "function" ? m._removedFactory(E) : null
        }
    };
    var y = m.st;
    for (var e in n) {
        if (n[d](e) && !y[d](e)) {
            y[e] = (function (E) {
                return function () {
                    var F = arguments;
                    return this.forEach(function (G) {
                        G[E].apply(G, F)
                    })
                }
            })(e)
        }
    }
}(window.Raphael);
window.Raphael.vml && function (m) {
    var e = "hasOwnProperty", G = String, o = parseFloat, h = Math, C = h.round, J = h.max, D = h.min, t = h.abs, w = "fill", j = /[, ]+/, B = m.eve, x = " progid:DXImageTransform.Microsoft", l = " ", r = "", F = {
        M: "m",
        L: "l",
        C: "c",
        Z: "x",
        m: "t",
        l: "r",
        c: "v",
        z: "x"
    }, k = /([clmz]),?([^clmz]*)/gi, u = / progid:\S+Blur\([^\)]+\)/g, I = /-?[^,\s-]+/g, d = "position:absolute;left:0;top:0;width:1px;height:1px", b = 21600, A = {
        path: 1,
        rect: 1,
        image: 1
    }, s = {circle: 1, ellipse: 1}, f = function (T) {
        var Q = /[ahqstv]/ig, L = m._pathToAbsolute;
        G(T).match(Q) && (L = m._path2curve);
        Q = /[clmz]/g;
        if (L == m._pathToAbsolute && !G(T).match(Q)) {
            var P = G(T).replace(k, function (X, Z, V) {
                var Y = [], U = Z.toLowerCase() == "m", W = F[Z];
                V.replace(I, function (aa) {
                    if (U && Y.length == 2) {
                        W += Y + F[Z == "m" ? "l" : "L"];
                        Y = []
                    }
                    Y.push(C(aa * b))
                });
                return W + Y
            });
            return P
        }
        var R = L(T), K, E;
        P = [];
        for (var N = 0, S = R.length; N < S; N++) {
            K = R[N];
            E = R[N][0].toLowerCase();
            E == "z" && (E = "x");
            for (var M = 1, O = K.length; M < O; M++) {
                E += C(K[M] * b) + (M != O - 1 ? "," : r)
            }
            P.push(E)
        }
        return P.join(l)
    }, p = function (M, L, K) {
        var E = m.matrix();
        E.rotate(-M, 0.5, 0.5);
        return {dx: E.x(L, K), dy: E.y(L, K)}
    }, q = function (S, R, Q, N, M, O) {
        var aa = S._, U = S.matrix, E = aa.fillpos, T = S.node, P = T.style, L = 1, K = "", W, Y = b / R, X = b / Q;
        P.visibility = "hidden";
        if (!R || !Q) {
            return
        }
        T.coordsize = t(Y) + l + t(X);
        P.rotation = O * (R * Q < 0 ? -1 : 1);
        if (O) {
            var Z = p(O, N, M);
            N = Z.dx;
            M = Z.dy
        }
        R < 0 && (K += "x");
        Q < 0 && (K += " y") && (L = -1);
        P.flip = K;
        T.coordorigin = (N * -Y) + l + (M * -X);
        if (E || aa.fillsize) {
            var V = T.getElementsByTagName(w);
            V = V && V[0];
            T.removeChild(V);
            if (E) {
                Z = p(O, U.x(E[0], E[1]), U.y(E[0], E[1]));
                V.position = Z.dx * L + l + Z.dy * L
            }
            if (aa.fillsize) {
                V.size = aa.fillsize[0] * t(R) + l + aa.fillsize[1] * t(Q)
            }
            T.appendChild(V)
        }
        P.visibility = "visible"
    };
    m.toString = function () {
        return "Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xebl " + this.version
    };
    var c = function (E, P, K) {
        var R = G(P).toLowerCase().split("-"), N = K ? "end" : "start", L = R.length, O = "classic", Q = "medium", M = "medium";
        while (L--) {
            switch (R[L]) {
                case"block":
                case"classic":
                case"oval":
                case"diamond":
                case"open":
                case"none":
                    O = R[L];
                    break;
                case"wide":
                case"narrow":
                    M = R[L];
                    break;
                case"long":
                case"short":
                    Q = R[L];
                    break
            }
        }
        var S = E.node.getElementsByTagName("stroke")[0];
        S[N + "arrow"] = O;
        S[N + "arrowlength"] = Q;
        S[N + "arrowwidth"] = M
    }, y = function (aa, ak) {
        aa.attrs = aa.attrs || {};
        var af = aa.node, ao = aa.attrs, W = af.style, S, ai = A[aa.type] && (ak.x != ao.x || ak.y != ao.y || ak.width != ao.width || ak.height != ao.height || ak.cx != ao.cx || ak.cy != ao.cy || ak.rx != ao.rx || ak.ry != ao.ry || ak.r != ao.r), Z = s[aa.type] && (ao.cx != ak.cx || ao.cy != ak.cy || ao.r != ak.r || ao.rx != ak.rx || ao.ry != ak.ry), ar = aa;
        for (var X in ak) {
            if (ak[e](X)) {
                ao[X] = ak[X]
            }
        }
        if (ai) {
            ao.path = m._getPath[aa.type](aa);
            aa._.dirty = 1
        }
        ak.href && (af.href = ak.href);
        ak.title && (af.title = ak.title);
        ak.target && (af.target = ak.target);
        ak.cursor && (W.cursor = ak.cursor);
        "blur" in ak && aa.blur(ak.blur);
        if (ak.path && aa.type == "path" || ai) {
            af.path = f(~G(ao.path).toLowerCase().indexOf("r") ? m._pathToAbsolute(ao.path) : ao.path);
            if (aa.type == "image") {
                aa._.fillpos = [ao.x, ao.y];
                aa._.fillsize = [ao.width, ao.height];
                q(aa, 1, 1, 0, 0, 0)
            }
        }
        "transform" in ak && aa.transform(ak.transform);
        if (Z) {
            var N = +ao.cx, L = +ao.cy, R = +ao.rx || +ao.r || 0, Q = +ao.ry || +ao.r || 0;
            af.path = m.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", C((N - R) * b), C((L - Q) * b), C((N + R) * b), C((L + Q) * b), C(N * b))
        }
        if ("clip-rect" in ak) {
            var K = G(ak["clip-rect"]).split(j);
            if (K.length == 4) {
                K[2] = +K[2] + (+K[0]);
                K[3] = +K[3] + (+K[1]);
                var Y = af.clipRect || m._g.doc.createElement("div"), aq = Y.style;
                aq.clip = m.format("rect({1}px {2}px {3}px {0}px)", K);
                if (!af.clipRect) {
                    aq.position = "absolute";
                    aq.top = 0;
                    aq.left = 0;
                    aq.width = aa.paper.width + "px";
                    aq.height = aa.paper.height + "px";
                    af.parentNode.insertBefore(Y, af);
                    Y.appendChild(af);
                    af.clipRect = Y
                }
            }
            if (!ak["clip-rect"]) {
                af.clipRect && (af.clipRect.style.clip = "auto")
            }
        }
        if (aa.textpath) {
            var am = aa.textpath.style;
            ak.font && (am.font = ak.font);
            ak["font-family"] && (am.fontFamily = '"' + ak["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, r) + '"');
            ak["font-size"] && (am.fontSize = ak["font-size"]);
            ak["font-weight"] && (am.fontWeight = ak["font-weight"]);
            ak["font-style"] && (am.fontStyle = ak["font-style"])
        }
        if ("arrow-start" in ak) {
            c(ar, ak["arrow-start"])
        }
        if ("arrow-end" in ak) {
            c(ar, ak["arrow-end"], 1)
        }
        if (ak.opacity != null || ak["stroke-width"] != null || ak.fill != null || ak.src != null || ak.stroke != null || ak["stroke-width"] != null || ak["stroke-opacity"] != null || ak["fill-opacity"] != null || ak["stroke-dasharray"] != null || ak["stroke-miterlimit"] != null || ak["stroke-linejoin"] != null || ak["stroke-linecap"] != null) {
            var ag = af.getElementsByTagName(w), an = false;
            ag = ag && ag[0];
            !ag && (an = ag = H(w));
            if (aa.type == "image" && ak.src) {
                ag.src = ak.src
            }
            ak.fill && (ag.on = true);
            if (ag.on == null || ak.fill == "none" || ak.fill === null) {
                ag.on = false
            }
            if (ag.on && ak.fill) {
                var P = G(ak.fill).match(m._ISURL);
                if (P) {
                    ag.parentNode == af && af.removeChild(ag);
                    ag.rotate = true;
                    ag.src = P[1];
                    ag.type = "tile";
                    var E = aa.getBBox(1);
                    ag.position = E.x + l + E.y;
                    aa._.fillpos = [E.x, E.y];
                    m._preload(P[1], function () {
                        aa._.fillsize = [this.offsetWidth, this.offsetHeight]
                    })
                } else {
                    ag.color = m.getRGB(ak.fill).hex;
                    ag.src = r;
                    ag.type = "solid";
                    if (m.getRGB(ak.fill).error && (ar.type in {
                            circle: 1,
                            ellipse: 1
                        } || G(ak.fill).charAt() != "r") && a(ar, ak.fill, ag)) {
                        ao.fill = "none";
                        ao.gradient = ak.fill;
                        ag.rotate = false
                    }
                }
            }
            if ("fill-opacity" in ak || "opacity" in ak) {
                var O = ((+ao["fill-opacity"] + 1 || 2) - 1) * ((+ao.opacity + 1 || 2) - 1) * ((+m.getRGB(ak.fill).o + 1 || 2) - 1);
                O = D(J(O, 0), 1);
                ag.opacity = O;
                if (ag.src) {
                    ag.color = "none"
                }
            }
            af.appendChild(ag);
            var T = (af.getElementsByTagName("stroke") && af.getElementsByTagName("stroke")[0]), ap = false;
            !T && (ap = T = H("stroke"));
            if ((ak.stroke && ak.stroke != "none") || ak["stroke-width"] || ak["stroke-opacity"] != null || ak["stroke-dasharray"] || ak["stroke-miterlimit"] || ak["stroke-linejoin"] || ak["stroke-linecap"]) {
                T.on = true
            }
            (ak.stroke == "none" || ak.stroke === null || T.on == null || ak.stroke == 0 || ak["stroke-width"] == 0) && (T.on = false);
            var ae = m.getRGB(ak.stroke);
            T.on && ak.stroke && (T.color = ae.hex);
            O = ((+ao["stroke-opacity"] + 1 || 2) - 1) * ((+ao.opacity + 1 || 2) - 1) * ((+ae.o + 1 || 2) - 1);
            var ab = (o(ak["stroke-width"]) || 1) * 0.75;
            O = D(J(O, 0), 1);
            ak["stroke-width"] == null && (ab = ao["stroke-width"]);
            ak["stroke-width"] && (T.weight = ab);
            ab && ab < 1 && (O *= ab) && (T.weight = 1);
            T.opacity = O;
            ak["stroke-linejoin"] && (T.joinstyle = ak["stroke-linejoin"] || "miter");
            T.miterlimit = ak["stroke-miterlimit"] || 8;
            ak["stroke-linecap"] && (T.endcap = ak["stroke-linecap"] == "butt" ? "flat" : ak["stroke-linecap"] == "square" ? "square" : "round");
            if (ak["stroke-dasharray"]) {
                var ad = {
                    "-": "shortdash",
                    ".": "shortdot",
                    "-.": "shortdashdot",
                    "-..": "shortdashdotdot",
                    ". ": "dot",
                    "- ": "dash",
                    "--": "longdash",
                    "- .": "dashdot",
                    "--.": "longdashdot",
                    "--..": "longdashdotdot"
                };
                T.dashstyle = ad[e](ak["stroke-dasharray"]) ? ad[ak["stroke-dasharray"]] : r
            }
            ap && af.appendChild(T)
        }
        if (ar.type == "text") {
            ar.paper.canvas.style.display = r;
            var ah = ar.paper.span, ac = 100, M = ao.font && ao.font.match(/\d+(?:\.\d*)?(?=px)/);
            W = ah.style;
            ao.font && (W.font = ao.font);
            ao["font-family"] && (W.fontFamily = ao["font-family"]);
            ao["font-weight"] && (W.fontWeight = ao["font-weight"]);
            ao["font-style"] && (W.fontStyle = ao["font-style"]);
            M = o(ao["font-size"] || M && M[0]) || 10;
            W.fontSize = M * ac + "px";
            ar.textpath.string && (ah.innerHTML = G(ar.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
            var V = ah.getBoundingClientRect();
            ar.W = ao.w = (V.right - V.left) / ac;
            ar.H = ao.h = (V.bottom - V.top) / ac;
            ar.X = ao.x;
            ar.Y = ao.y + ar.H / 2;
            ("x" in ak || "y" in ak) && (ar.path.v = m.format("m{0},{1}l{2},{1}", C(ao.x * b), C(ao.y * b), C(ao.x * b) + 1));
            var U = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"];
            for (var aj = 0, al = U.length; aj < al; aj++) {
                if (U[aj] in ak) {
                    ar._.dirty = 1;
                    break
                }
            }
            switch (ao["text-anchor"]) {
                case"start":
                    ar.textpath.style["v-text-align"] = "left";
                    ar.bbx = ar.W / 2;
                    break;
                case"end":
                    ar.textpath.style["v-text-align"] = "right";
                    ar.bbx = -ar.W / 2;
                    break;
                default:
                    ar.textpath.style["v-text-align"] = "center";
                    ar.bbx = 0;
                    break
            }
            ar.textpath.style["v-text-kern"] = true
        }
    }, a = function (E, S, V) {
        E.attrs = E.attrs || {};
        var T = E.attrs, M = Math.pow, N, O, Q = "linear", R = ".5 .5";
        E.attrs.gradient = S;
        S = G(S).replace(m._radial_gradient, function (Y, Z, X) {
            Q = "radial";
            if (Z && X) {
                Z = o(Z);
                X = o(X);
                M(Z - 0.5, 2) + M(X - 0.5, 2) > 0.25 && (X = h.sqrt(0.25 - M(Z - 0.5, 2)) * ((X > 0.5) * 2 - 1) + 0.5);
                R = Z + l + X
            }
            return r
        });
        S = S.split(/\s*\-\s*/);
        if (Q == "linear") {
            var K = S.shift();
            K = -o(K);
            if (isNaN(K)) {
                return null
            }
        }
        var P = m._parseDots(S);
        if (!P) {
            return null
        }
        E = E.shape || E.node;
        if (P.length) {
            E.removeChild(V);
            V.on = true;
            V.method = "none";
            V.color = P[0].color;
            V.color2 = P[P.length - 1].color;
            var W = [];
            for (var L = 0, U = P.length; L < U; L++) {
                P[L].offset && W.push(P[L].offset + l + P[L].color)
            }
            V.colors = W.length ? W.join() : "0% " + V.color;
            if (Q == "radial") {
                V.type = "gradientTitle";
                V.focus = "100%";
                V.focussize = "0 0";
                V.focusposition = R;
                V.angle = 0
            } else {
                V.type = "gradient";
                V.angle = (270 - K) % 360
            }
            E.appendChild(V)
        }
        return 1
    }, v = function (K, E) {
        this[0] = this.node = K;
        K.raphael = true;
        this.id = m._oid++;
        K.raphaelid = this.id;
        this.X = 0;
        this.Y = 0;
        this.attrs = {};
        this.paper = E;
        this.matrix = m.matrix();
        this._ = {transform: [], sx: 1, sy: 1, dx: 0, dy: 0, deg: 0, dirty: 1, dirtyT: 1};
        !E.bottom && (E.bottom = this);
        this.prev = E.top;
        E.top && (E.top.next = this);
        E.top = this;
        this.next = null
    };
    var n = m.el;
    v.prototype = n;
    n.constructor = v;
    n.transform = function (N) {
        if (N == null) {
            return this._.transform
        }
        var P = this.paper._viewBoxShift, O = P ? "s" + [P.scale, P.scale] + "-1-1t" + [P.dx, P.dy] : r, S;
        if (P) {
            S = N = G(N).replace(/\.{3}|\u2026/g, this._.transform || r)
        }
        m._extractTransform(this, O + N);
        var T = this.matrix.clone(), V = this.skew, L = this.node, R, M = ~G(this.attrs.fill).indexOf("-"), E = !G(this.attrs.fill).indexOf("url(");
        T.translate(-0.5, -0.5);
        if (E || M || this.type == "image") {
            V.matrix = "1 0 0 1";
            V.offset = "0 0";
            R = T.split();
            if ((M && R.noRotation) || !R.isSimple) {
                L.style.filter = T.toFilter();
                var Q = this.getBBox(), K = this.getBBox(1), W = Q.x - K.x, U = Q.y - K.y;
                L.coordorigin = (W * -b) + l + (U * -b);
                q(this, 1, 1, W, U, 0)
            } else {
                L.style.filter = r;
                q(this, R.scalex, R.scaley, R.dx, R.dy, R.rotate)
            }
        } else {
            L.style.filter = r;
            V.matrix = G(T);
            V.offset = T.offset()
        }
        S && (this._.transform = S);
        return this
    };
    n.rotate = function (K, E, M) {
        if (this.removed) {
            return this
        }
        if (K == null) {
            return
        }
        K = G(K).split(j);
        if (K.length - 1) {
            E = o(K[1]);
            M = o(K[2])
        }
        K = o(K[0]);
        (M == null) && (E = M);
        if (E == null || M == null) {
            var L = this.getBBox(1);
            E = L.x + L.width / 2;
            M = L.y + L.height / 2
        }
        this._.dirtyT = 1;
        this.transform(this._.transform.concat([["r", K, E, M]]));
        return this
    };
    n.translate = function (K, E) {
        if (this.removed) {
            return this
        }
        K = G(K).split(j);
        if (K.length - 1) {
            E = o(K[1])
        }
        K = o(K[0]) || 0;
        E = +E || 0;
        if (this._.bbox) {
            this._.bbox.x += K;
            this._.bbox.y += E
        }
        this.transform(this._.transform.concat([["t", K, E]]));
        return this
    };
    n.scale = function (N, L, E, M) {
        if (this.removed) {
            return this
        }
        N = G(N).split(j);
        if (N.length - 1) {
            L = o(N[1]);
            E = o(N[2]);
            M = o(N[3]);
            isNaN(E) && (E = null);
            isNaN(M) && (M = null)
        }
        N = o(N[0]);
        (L == null) && (L = N);
        (M == null) && (E = M);
        if (E == null || M == null) {
            var K = this.getBBox(1)
        }
        E = E == null ? K.x + K.width / 2 : E;
        M = M == null ? K.y + K.height / 2 : M;
        this.transform(this._.transform.concat([["s", N, L, E, M]]));
        this._.dirtyT = 1;
        return this
    };
    n.hide = function () {
        !this.removed && (this.node.style.display = "none");
        return this
    };
    n.show = function () {
        !this.removed && (this.node.style.display = r);
        return this
    };
    n._getBBox = function () {
        if (this.removed) {
            return {}
        }
        return {x: this.X + (this.bbx || 0) - this.W / 2, y: this.Y - this.H, width: this.W, height: this.H}
    };
    n.remove = function () {
        if (this.removed || !this.node.parentNode) {
            return
        }
        this.paper.__set__ && this.paper.__set__.exclude(this);
        m.eve.unbind("raphael.*.*." + this.id);
        m._tear(this, this.paper);
        this.node.parentNode.removeChild(this.node);
        this.shape && this.shape.parentNode.removeChild(this.shape);
        for (var E in this) {
            this[E] = typeof this[E] == "function" ? m._removedFactory(E) : null
        }
        this.removed = true
    };
    n.attr = function (E, S) {
        if (this.removed) {
            return this
        }
        if (E == null) {
            var P = {};
            for (var R in this.attrs) {
                if (this.attrs[e](R)) {
                    P[R] = this.attrs[R]
                }
            }
            P.gradient && P.fill == "none" && (P.fill = P.gradient) && delete P.gradient;
            P.transform = this._.transform;
            return P
        }
        if (S == null && m.is(E, "string")) {
            if (E == w && this.attrs.fill == "none" && this.attrs.gradient) {
                return this.attrs.gradient
            }
            var Q = E.split(j), M = {};
            for (var N = 0, U = Q.length; N < U; N++) {
                E = Q[N];
                if (E in this.attrs) {
                    M[E] = this.attrs[E]
                } else {
                    if (m.is(this.paper.customAttributes[E], "function")) {
                        M[E] = this.paper.customAttributes[E].def
                    } else {
                        M[E] = m._availableAttrs[E]
                    }
                }
            }
            return U - 1 ? M : M[Q[0]]
        }
        if (this.attrs && S == null && m.is(E, "array")) {
            M = {};
            for (N = 0, U = E.length; N < U; N++) {
                M[E[N]] = this.attr(E[N])
            }
            return M
        }
        var K;
        if (S != null) {
            K = {};
            K[E] = S
        }
        S == null && m.is(E, "object") && (K = E);
        for (var T in K) {
            B("raphael.attr." + T + "." + this.id, this, K[T])
        }
        if (K) {
            for (T in this.paper.customAttributes) {
                if (this.paper.customAttributes[e](T) && K[e](T) && m.is(this.paper.customAttributes[T], "function")) {
                    var O = this.paper.customAttributes[T].apply(this, [].concat(K[T]));
                    this.attrs[T] = K[T];
                    for (var L in O) {
                        if (O[e](L)) {
                            K[L] = O[L]
                        }
                    }
                }
            }
            if (K.text && this.type == "text") {
                this.textpath.string = K.text
            }
            y(this, K)
        }
        return this
    };
    n.toFront = function () {
        !this.removed && this.node.parentNode.appendChild(this.node);
        this.paper && this.paper.top != this && m._tofront(this, this.paper);
        return this
    };
    n.toBack = function () {
        if (this.removed) {
            return this
        }
        if (this.node.parentNode.firstChild != this.node) {
            this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild);
            m._toback(this, this.paper)
        }
        return this
    };
    n.insertAfter = function (E) {
        if (this.removed) {
            return this
        }
        if (E.constructor == m.st.constructor) {
            E = E[E.length - 1]
        }
        if (E.node.nextSibling) {
            E.node.parentNode.insertBefore(this.node, E.node.nextSibling)
        } else {
            E.node.parentNode.appendChild(this.node)
        }
        m._insertafter(this, E, this.paper);
        return this
    };
    n.insertBefore = function (E) {
        if (this.removed) {
            return this
        }
        if (E.constructor == m.st.constructor) {
            E = E[0]
        }
        E.node.parentNode.insertBefore(this.node, E.node);
        m._insertbefore(this, E, this.paper);
        return this
    };
    n.blur = function (E) {
        var K = this.node.runtimeStyle, L = K.filter;
        L = L.replace(u, r);
        if (+E !== 0) {
            this.attrs.blur = E;
            K.filter = L + l + x + ".Blur(pixelradius=" + (+E || 1.5) + ")";
            K.margin = m.format("-{0}px 0 0 -{0}px", C(+E || 1.5))
        } else {
            K.filter = L;
            K.margin = 0;
            delete this.attrs.blur
        }
    };
    m._engine.path = function (M, K) {
        var N = H("shape");
        N.style.cssText = d;
        N.coordsize = b + l + b;
        N.coordorigin = K.coordorigin;
        var O = new v(N, K), E = {fill: "none", stroke: "#000"};
        M && (E.path = M);
        O.type = "path";
        O.path = [];
        O.Path = r;
        y(O, E);
        K.canvas.appendChild(N);
        var L = H("skew");
        L.on = true;
        N.appendChild(L);
        O.skew = L;
        O.transform(r);
        return O
    };
    m._engine.rect = function (K, P, N, Q, L, E) {
        var R = m._rectPath(P, N, Q, L, E), M = K.path(R), O = M.attrs;
        M.X = O.x = P;
        M.Y = O.y = N;
        M.W = O.width = Q;
        M.H = O.height = L;
        O.r = E;
        O.path = R;
        M.type = "rect";
        return M
    };
    m._engine.ellipse = function (K, E, P, O, N) {
        var M = K.path(), L = M.attrs;
        M.X = E - O;
        M.Y = P - N;
        M.W = O * 2;
        M.H = N * 2;
        M.type = "ellipse";
        y(M, {cx: E, cy: P, rx: O, ry: N});
        return M
    };
    m._engine.circle = function (K, E, O, N) {
        var M = K.path(), L = M.attrs;
        M.X = E - N;
        M.Y = O - N;
        M.W = M.H = N * 2;
        M.type = "circle";
        y(M, {cx: E, cy: O, r: N});
        return M
    };
    m._engine.image = function (K, E, Q, O, R, M) {
        var T = m._rectPath(Q, O, R, M), N = K.path(T).attr({stroke: "none"}), P = N.attrs, L = N.node, S = L.getElementsByTagName(w)[0];
        P.src = E;
        N.X = P.x = Q;
        N.Y = P.y = O;
        N.W = P.width = R;
        N.H = P.height = M;
        P.path = T;
        N.type = "image";
        S.parentNode == L && L.removeChild(S);
        S.rotate = true;
        S.src = E;
        S.type = "tile";
        N._.fillpos = [Q, O];
        N._.fillsize = [R, M];
        L.appendChild(S);
        q(N, 1, 1, 0, 0, 0);
        return N
    };
    m._engine.text = function (E, P, O, Q) {
        var M = H("shape"), S = H("path"), L = H("textpath");
        P = P || 0;
        O = O || 0;
        Q = Q || "";
        S.v = m.format("m{0},{1}l{2},{1}", C(P * b), C(O * b), C(P * b) + 1);
        S.textpathok = true;
        L.string = G(Q);
        L.on = true;
        M.style.cssText = d;
        M.coordsize = b + l + b;
        M.coordorigin = "0 0";
        var K = new v(M, E), N = {fill: "#000", stroke: "none", font: m._availableAttrs.font, text: Q};
        K.shape = M;
        K.path = S;
        K.textpath = L;
        K.type = "text";
        K.attrs.text = G(Q);
        K.attrs.x = P;
        K.attrs.y = O;
        K.attrs.w = 1;
        K.attrs.h = 1;
        y(K, N);
        M.appendChild(L);
        M.appendChild(S);
        E.canvas.appendChild(M);
        var R = H("skew");
        R.on = true;
        M.appendChild(R);
        K.skew = R;
        K.transform(r);
        return K
    };
    m._engine.setSize = function (L, E) {
        var K = this.canvas.style;
        this.width = L;
        this.height = E;
        L == +L && (L += "px");
        E == +E && (E += "px");
        K.width = L;
        K.height = E;
        K.clip = "rect(0 " + L + " " + E + " 0)";
        if (this._viewBox) {
            m._engine.setViewBox.apply(this, this._viewBox)
        }
        return this
    };
    m._engine.setViewBox = function (O, N, P, L, M) {
        m.eve("raphael.setViewBox", this, this._viewBox, [O, N, P, L, M]);
        var E = this.width, R = this.height, S = 1 / J(P / E, L / R), Q, K;
        if (M) {
            Q = R / L;
            K = E / P;
            if (P * Q < E) {
                O -= (E - P * Q) / 2 / Q
            }
            if (L * K < R) {
                N -= (R - L * K) / 2 / K
            }
        }
        this._viewBox = [O, N, P, L, !!M];
        this._viewBoxShift = {dx: -O, dy: -N, scale: S};
        this.forEach(function (T) {
            T.transform("...")
        });
        return this
    };
    var H;
    m._engine.initWin = function (L) {
        var K = L.document;
        K.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
        try {
            !K.namespaces.rvml && K.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
            H = function (M) {
                return K.createElement("<rvml:" + M + ' class="rvml">')
            }
        } catch (E) {
            H = function (M) {
                return K.createElement("<" + M + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
            }
        }
    };
    m._engine.initWin(m._g.win);
    m._engine.create = function () {
        var L = m._getContainer.apply(0, arguments), E = L.container, R = L.height, S, K = L.width, Q = L.x, P = L.y;
        if (!E) {
            throw new Error("VML container not found.")
        }
        var N = new m._Paper, O = N.canvas = m._g.doc.createElement("div"), M = O.style;
        Q = Q || 0;
        P = P || 0;
        K = K || 512;
        R = R || 342;
        N.width = K;
        N.height = R;
        K == +K && (K += "px");
        R == +R && (R += "px");
        N.coordsize = b * 1000 + l + b * 1000;
        N.coordorigin = "0 0";
        N.span = m._g.doc.createElement("span");
        N.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;";
        O.appendChild(N.span);
        M.cssText = m.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", K, R);
        if (E == 1) {
            m._g.doc.body.appendChild(O);
            M.left = Q + "px";
            M.top = P + "px";
            M.position = "absolute"
        } else {
            if (E.firstChild) {
                E.insertBefore(O, E.firstChild)
            } else {
                E.appendChild(O)
            }
        }
        N.renderfix = function () {
        };
        return N
    };
    m.prototype.clear = function () {
        m.eve("raphael.clear", this);
        this.canvas.innerHTML = r;
        this.span = m._g.doc.createElement("span");
        this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
        this.canvas.appendChild(this.span);
        this.bottom = this.top = null
    };
    m.prototype.remove = function () {
        m.eve("raphael.remove", this);
        this.canvas.parentNode.removeChild(this.canvas);
        for (var E in this) {
            this[E] = typeof this[E] == "function" ? m._removedFactory(E) : null
        }
        return true
    };
    var z = m.st;
    for (var g in n) {
        if (n[e](g) && !z[e](g)) {
            z[g] = (function (E) {
                return function () {
                    var K = arguments;
                    return this.forEach(function (L) {
                        L[E].apply(L, K)
                    })
                }
            })(g)
        }
    }
}(window.Raphael);
function TRAVizConnection(c, b, a) {
    this.v1 = c;
    this.v2 = b;
    this.type = a;
    this.links = []
}
TRAVizConnection.prototype.addLink = function (a) {
    this.links.push(a)
};
function TRAVizVerticalConnection(c, b, a) {
    this.v1 = c;
    this.v2 = b;
    this.type = a
}
TRAVizVerticalConnection.prototype.position = function (a, c, b) {
    this.x1 = a;
    this.x2 = a;
    this.y1 = c;
    this.y2 = b
};
TRAVizVerticalConnection.prototype.yMin = function () {
    return Math.min(this.y1, this.y2)
};
TRAVizVerticalConnection.prototype.yMax = function () {
    return Math.max(this.y1, this.y2)
};
function TRAVizHorizontalConnection(c, b, a) {
    this.v1 = c;
    this.v2 = b;
    this.type = a
}
TRAVizHorizontalConnection.prototype.position = function (b, a, c) {
    this.x1 = b;
    this.x2 = a;
    this.y1 = c;
    this.y2 = c
};
function TRAVizGraph(a) {
    this.config = a;
    this.vertices = [];
    this.vertexMap = []
}
TRAVizGraph.prototype.getVertex = function (a) {
    return this.vertexMap[a]
};
TRAVizGraph.prototype.removeVertex = function (b) {
    var a = this.vertexMap[b];
    for (var c = 0; c < a.successors.length; c++) {
        this.vertexMap[a.successors[c]].removePredecessor(b)
    }
    for (var c = 0; c < a.predecessors.length; c++) {
        this.vertexMap[a.predecessors[c]].removeSuccessor(b)
    }
    for (var c = 0; c < this.vertices.length; c++) {
        if (this.vertices[c] == a) {
            this.vertices.splice(c, 1);
            break
        }
    }
    delete this.vertexMap[b]
};
TRAVizGraph.prototype.addVertex = function (a) {
    this.vertices.push(a);
    this.vertexMap[a.index] = a
};
TRAVizGraph.prototype.clone = function () {
    var e = new TRAVizGraph();
    e.config = this.config;
    for (var d = 0; d < this.vertices.length; d++) {
        e.addVertex(new TRAVizVertex(e, this.vertices[d].index, this.vertices[d].token))
    }
    for (var d = 0; d < this.vertices.length; d++) {
        var a = this.vertices[d];
        var c = e.vertices[d];
        c.count = a.count;
        for (var b = 0; b < a.sources.length; b++) {
            c.sources.push(a.sources[b])
        }
        for (var b = 0; b < a.successors.length; b++) {
            c.addSuccessor(a.successors[b]);
            e.vertexMap[a.successors[b]].addPredecessor(c.index)
        }
        for (var b = 0; b < a.predecessors.length; b++) {
            c.addPredecessor(a.predecessors[b]);
            e.vertexMap[a.predecessors[b]].addSuccessor(c.index)
        }
    }
    return e
};
TRAVizGraph.prototype.isAcyclicFromVertex = function (k, h) {
    var l = new TRAVizVertex(this, this.config.getVertexIndex(), k.token);
    this.addVertex(l);
    l.count = k.count + h.count;
    for (var f = 0; f < k.sources.length; f++) {
        l.sources.push(k.sources[f])
    }
    for (var f = 0; f < h.sources.length; f++) {
        l.sources.push(h.sources[f])
    }
    for (var f = 0; f < k.predecessors.length; f++) {
        var a = k.predecessors[f];
        if (a == k.index || a == h.index) {
            a = l.index
        }
        l.addPredecessor(a);
        this.vertexMap[a].addSuccessor(l.index)
    }
    for (var f = 0; f < h.successors.length; f++) {
        var a = h.successors[f];
        if (a == k.index || a == h.index) {
            a = l.index
        }
        l.addSuccessor(a);
        this.vertexMap[a].addPredecessor(l.index)
    }
    for (var f = 0; f < k.successors.length; f++) {
        var a = k.successors[f];
        if (a == k.index || a == h.index) {
            a = l.index
        }
        l.addSuccessor(a);
        this.vertexMap[a].addPredecessor(l.index)
    }
    for (var f = 0; f < h.predecessors.length; f++) {
        var a = h.predecessors[f];
        if (a == k.index || a == h.index) {
            a = l.index
        }
        l.addPredecessor(a);
        this.vertexMap[a].addSuccessor(l.index)
    }
    for (var f = 0; f < this.vertices.length; f++) {
        this.vertices[f].visited = 0;
        this.vertices[f].limit = this.vertices[f].predecessors.length;
        for (var b = 0; b < this.vertices[f].predecessors.length; b++) {
            if (this.vertices[f].predecessors[b] == k.index) {
                this.vertices[f].limit--
            }
            if (this.vertices[f].predecessors[b] == h.index) {
                this.vertices[f].limit--
            }
        }
    }
    l.visited = l.limit;
    var c = [];
    for (var f = 0; f < l.successors.length; f++) {
        if (l.successors[f] != k.index && l.successors[f] != h.index) {
            c.push({head: l, tail: this.getVertex(l.successors[f])})
        }
    }
    while (c.length > 0) {
        var d = [];
        for (var f = 0; f < c.length; f++) {
            var g = c[f];
            g.tail.visited++;
            if (g.tail.visited > g.tail.limit) {
                this.removeVertex(l.index);
                return false
            }
            for (var b = 0; b < g.tail.successors.length; b++) {
                if (l.successors[f] != k.index && l.successors[f] != h.index && g.tail.visited == 1) {
                    d.push({head: g.tail, tail: this.getVertex(g.tail.successors[b])})
                }
            }
        }
        c = d
    }
    this.removeVertex(k.index);
    this.removeVertex(h.index);
    return l
};
TRAVizGraph.prototype.isAcyclic = function () {
    do {
        var f = this.vertices.length;
        for (var d = 0; d < this.vertices.length; d++) {
            var e = this.vertices[d];
            var c = e.successors, a = e.predecessors;
            if (c.length == 0) {
                for (var b = 0; b < a.length; b++) {
                    this.vertexMap[a[b]].removeSuccessor(e.index)
                }
                e.predecessors = []
            }
        }
        for (var d = this.vertices.length; d > 0; d--) {
            var e = this.vertices[d - 1];
            if (e.successors.length == 0 && e.predecessors.length == 0) {
                this.removeVertex(e.index)
            }
        }
    } while (f > this.vertices.length);
    if (this.vertices.length > 0) {
        return false
    }
    return true
};
TRAVizGraph.prototype.printVertices = function () {
    for (var c = 0; c < this.vertices.length; c++) {
        var a = this.vertices[c];
        for (var b = 0; b < a.successors.length; b++) {
            var d = this.getVertex(a.successors[b]);
            console.info(a.id + " ---> " + d.id, a.token + " ---> " + d.token)
        }
    }
};
function TRAVizVertex(c, a, b) {
    this.graph = c;
    this.token = b;
    this.successors = [];
    this.predecessors = [];
    this.count = 1;
    this.traced = false;
    this.linked = true;
    this.sources = [];
    this.index = a
}
TRAVizVertex.prototype.removeSuccessor = function (b) {
    for (var a = 0; a < this.successors.length; a++) {
        if (this.successors[a] == b) {
            this.successors.splice(a, 1);
            return
        }
    }
};
TRAVizVertex.prototype.removePredecessor = function (a) {
    for (var b = 0; b < this.predecessors.length; b++) {
        if (this.predecessors[b] == a) {
            this.predecessors.splice(b, 1);
            return
        }
    }
};
TRAVizVertex.prototype.addSuccessor = function (b) {
    var c = false;
    for (var a = 0; a < this.successors.length; a++) {
        if (b == this.successors[a]) {
            c = true;
            break
        }
    }
    if (!c) {
        this.successors.push(b)
    }
};
TRAVizVertex.prototype.addPredecessor = function (a) {
    var c = false;
    for (var b = 0; b < this.predecessors.length; b++) {
        if (a == this.predecessors[b]) {
            c = true;
            break
        }
    }
    if (!c) {
        this.predecessors.push(a)
    }
};
function TRAVizAligner(b, a) {
    this.graph = b;
    this.config = a
}
TRAVizAligner.prototype.normalize = function (a) {
    a = $("<p>" + a + "</p>").text();
    if (this.config.options.normalize) {
        a = a.toLowerCase();
        a = a.replace(/--/g, "");
        a = a.replace(/,/g, "");
        a = a.replace(/\./g, "");
        a = a.replace(/;/g, "");
        a = a.replace(/:/g, "");
        a = a.replace(/\(/g, "");
        a = a.replace(/\)/g, "");
        a = a.replace(/\[/g, "");
        a = a.replace(/\]/g, "");
        a = a.replace(/\'/g, "");
        a = a.replace(/\"/g, "");
        a = a.replace(/´/g, "");
        a = a.replace(/`/g, "");
        a = a.replace(/“/g, "");
        a = a.replace(/”/g, "");
        if (a.lastIndexOf(" ") == a.length - 1) {
            a = a.substring(0, a.length - 1)
        }
    }
    a = a.replace(/  /g, " ");
    return a
};
TRAVizAligner.prototype.alignSentences = function (I) {
    var h = this;
    var x = [];
    var f = [];
    var M = [];
    var a = undefined;
    var J = [];
    var L = [];
    for (var G = 0; G < I.length; G++) {
        var H = [];
        a = undefined;
        var m = this.normalize(I[G]);
        var s = m.split(" ");
        var r = [];
        for (var D = 0; D < s.length; D++) {
            var l = s[D];
            var g = s[D];
            var y = false;
            if (l.indexOf("<>") != -1) {
                y = l.substring(1, l.indexOf(">"));
                g = l.substring(l.indexOf(">") + 1);
                g = g.substring(0, g.indexOf("<"));
                l = l.substring(0, l.indexOf(">") + 1) + "<>"
            }
            var K = {id: G + "-" + D, word: l, sid: G, wid: D, gid: x.length};
            x.push(K);
            H.push(K);
            r.push(K);
            var q = new TRAVizVertex(this.graph, this.config.getVertexIndex(), l);
            if (y) {
                q.preferenceId = y;
                if (typeof L[y] == "undefined") {
                    L[y] = {vertices: [q], tokens: [g]}
                } else {
                    L[y].vertices.push(q);
                    L[y].tokens.push(g)
                }
            }
            q.sources.push({sourceId: G, token: l});
            this.graph.addVertex(q);
            if (typeof a != "undefined") {
                a.addSuccessor(q.index);
                q.addPredecessor(a.index)
            }
            a = q;
            f[K.id] = q
        }
        J.push(H);
        M.push(r)
    }
    var F = function (k, j) {
        if (k.length > j.length) {
            return -1
        }
        if (k.length == j.length) {
            return 0
        }
        return 1
    };
    var N = [];
    var w = [];
    var A = [];
    var u = [];
    for (var G = 0; G < x.length; G++) {
        w.push([]);
        A.push(false);
        u.push(false)
    }
    for (var G = 0; G < M.length - 1; G++) {
        for (var D = G + 1; D < M.length; D++) {
            var b = this.pairAlignment(M[G], M[D], []);
            if (b.length == 0) {
                continue
            }
            b.sort(F);
            var z = "";
            for (var C = 0; C < b[0].length; C++) {
                N.push({pair: b[0][C], value: 2});
                var o = b[0][C].w1;
                var n = b[0][C].w2;
                w[o.gid].push(n);
                w[n.gid].push(o)
            }
        }
    }
    if (this.config.options.optimizeAlignment) {
        for (var G = 0; G < N.length; G++) {
            var o = N[G].pair.w1;
            var n = N[G].pair.w2;
            for (var D = 0; D < w[o.gid].length; D++) {
                if (w[o.gid][D] == n) {
                    continue
                }
                for (var C = 0; C < w[n.gid].length; C++) {
                    if (w[n.gid][C] == o) {
                        continue
                    }
                    if (w[o.gid][D] == w[n.gid][C]) {
                        N[G].value++
                    }
                }
            }
        }
        var p = function (k, j) {
            if (k.value > j.value) {
                return -1
            }
            if (k.value == j.value) {
                return 0
            }
            return 1
        };
        N.sort(p)
    }
    for (var G = 0; G < L.length; G++) {
        for (var D = 0; D < L[G].vertices.length; D++) {
            L[G].vertices[D].token = L[G].tokens[D]
        }
    }
    var B = function (k, j) {
        var Q = h.graph.getVertex(f[k.id].index), P = h.graph.getVertex(f[j.id].index);
        if (Q == P) {
            return
        }
        var t = h.graph.isAcyclicFromVertex(Q, P);
        if (t) {
            for (var O = 0; O < x.length; O++) {
                if (f[x[O].id] == Q || f[x[O].id] == P) {
                    f[x[O].id] = t
                }
            }
        }
    };
    if (L.length > 0) {
        for (var G = 0; G < N.length; G++) {
            var d = h.graph.getVertex(f[o.id].index), c = h.graph.getVertex(f[n.id].index);
            if (d.preferenceId && d.preferenceId == c.preferenceId) {
                B(N[G].pair.w1, N[G].pair.w2);
                N[G].mark = true
            }
        }
    }
    for (var G = 0; G < N.length; G++) {
        if (!N[G].mark) {
            B(N[G].pair.w1, N[G].pair.w2)
        }
    }
    var e = [];
    for (var G = 0; G < J.length; G++) {
        var E = [this.graph.startVertex];
        for (var D = 0; D < J[G].length; D++) {
            var q = f[J[G][D].id];
            if (D == 0) {
                this.graph.startVertex.addSuccessor(q.index);
                q.addPredecessor(this.graph.startVertex.index)
            }
            if (D == J[G].length - 1) {
                q.addSuccessor(this.graph.endVertex.index);
                this.graph.endVertex.addPredecessor(q.index)
            }
            E.push(q)
        }
        E.push(this.graph.endVertex);
        e.push(E)
    }
    return e
};
TRAVizAligner.prototype.getEditDistance = function (d, c) {
    if (d.length === 0) {
        return c.length
    }
    if (c.length === 0) {
        return d.length
    }
    var e = [];
    var g;
    for (g = 0; g <= c.length; g++) {
        e[g] = [g]
    }
    var f;
    for (f = 0; f <= d.length; f++) {
        e[0][f] = f
    }
    for (g = 1; g <= c.length; g++) {
        for (f = 1; f <= d.length; f++) {
            if (c.charAt(g - 1) == d.charAt(f - 1)) {
                e[g][f] = e[g - 1][f - 1]
            } else {
                e[g][f] = Math.min(e[g - 1][f - 1] + 1, Math.min(e[g][f - 1] + 1, e[g - 1][f] + 1))
            }
        }
    }
    return e[c.length][d.length]
};
TRAVizAligner.prototype.pairAlignment = function (n, m) {
    var l = [];
    for (var h = 0; h < n.length; h++) {
        l.push([]);
        for (var g = 0; g < m.length; g++) {
            if (this.config.options.editDistance) {
                var a = this.getEditDistance(n[h].word, m[g].word);
                var e = 2 * a / (n[h].word.length + m[g].word.length);
                if (e <= this.config.options.editDistance) {
                    l[h].push(m[g])
                }
            } else {
                if (n[h].word == m[g].word) {
                    l[h].push(m[g])
                }
            }
        }
    }
    var q = [];
    for (var h = 0; h < l.length; h++) {
        var d = [];
        var o = function (w) {
            var r = w[w.length - 1];
            var t = false;
            var v = [];
            for (var s = d.length; s > 0; s--) {
                var u = d[s - 1];
                var k = u[u.length - 1];
                if (r.w2 == k.w2 && w.length != u.length) {
                    if (w.length <= u.length) {
                        v.push(u);
                        t = true
                    }
                } else {
                    if (r.w2 == k.w2 && w.length == u.length) {
                        v.push(u);
                        t = true
                    } else {
                        v.push(u)
                    }
                }
            }
            if (!t) {
                v.push(w)
            }
            d = v
        };
        for (var f = 0; f < q.length; f++) {
            var p = q[f];
            o(p);
            var b = p[p.length - 1].w2;
            for (var g = 0; g < l[h].length; g++) {
                var c = l[h][g];
                if (c.wid > b.wid) {
                    o(p.concat([{w1: n[h], w2: c}]))
                }
            }
        }
        for (var g = 0; g < l[h].length; g++) {
            o([{w1: n[h], w2: l[h][g]}])
        }
        q = d
    }
    return q
};
TRAVizAligner.prototype.strongestShortestPath = function (o) {
    var c = 0, b = 1000000;
    var n = undefined;
    for (var e = 0; e < o.successors.length; e++) {
        var g = [o];
        var f = o.count;
        var l = 1;
        var h = this.graph.getVertex(o.successors[e]);
        g.push(h);
        if (!h.traced) {
            var m = h.successors;
            f += h.count;
            while (m.length > 0) {
                var a = this.graph.getVertex(m[0]).count;
                var k = this.graph.getVertex(m[0]);
                for (var d = 1; d < m.length; d++) {
                    if (this.graph.getVertex(m[d]).count > a) {
                        a = this.graph.getVertex(m[d]).count;
                        k = this.graph.getVertex(m[d])
                    }
                }
                l++;
                g.push(k);
                if (!k.traced) {
                    f += a;
                    m = k.successors
                } else {
                    m = []
                }
            }
        }
        if (l < b || l == b && f > c) {
            b = l;
            c = f;
            n = g
        }
    }
    return {strength: c, length: b, path: n}
};
TRAVizAligner.prototype.getPaths = function (b) {
    for (var f = 0; f < this.graph.vertices.length; f++) {
        this.graph.vertices[f].traced = false
    }
    var a = b;
    for (var f = 0; f < a.length; f++) {
        a[f].traced = true
    }
    var l = [a];
    var g = true;
    var e = 0;
    while (g) {
        e++;
        g = false;
        var h = undefined;
        for (var f = 0; f < this.graph.vertices.length; f++) {
            var j = this.graph.vertices[f];
            if (j.traced) {
                for (var d = 0; d < j.successors.length; d++) {
                    if (!this.graph.getVertex(j.successors[d]).traced) {
                        var a = this.strongestShortestPath(this.graph.getVertex(j.successors[d]));
                        a.path.splice(0, 0, j);
                        if (typeof h == "undefined" || h.length > a.length || h.length == a.length && a.strength > h.strength) {
                            h = a
                        }
                    }
                }
            } else {
                g = true
            }
        }
        if (typeof h != "undefined") {
            for (var f = 0; f < h.path.length; f++) {
                h.path[f].traced = true
            }
            l.push(h.path)
        }
    }
    return l
};
TRAVizAligner.prototype.getPathsByEdition = function (d, k) {
    var h = [];
    for (var f = 0; f < k.length; f++) {
        if (d != k[f]) {
            h.push(k[f])
        }
    }
    for (var f = 0; f < this.graph.vertices.length; f++) {
        this.graph.vertices[f].traced = false
    }
    var b = d;
    for (var f = 0; f < b.length; f++) {
        b[f].traced = true
    }
    var o = [b];
    while (h.length > 0) {
        var n = false, a = false, c = false;
        for (var f = 0; f < h.length; f++) {
            var m = 0;
            var l = 0;
            for (var e = 0; e < h[f].length; e++) {
                if (h[f][e].traced) {
                    m++
                } else {
                    l += h[f][e].count
                }
            }
            if (!n || m > n || m == n && l > c) {
                n = m;
                a = f;
                c = l
            }
        }
        var g = false;
        for (var f = 0; f < h[a].length; f++) {
            if (!g && !h[a][f].traced) {
                g = [h[a][f - 1], h[a][f]]
            } else {
                if (g && h[a][f].traced) {
                    g.push(h[a][f]);
                    o.push(g);
                    g = false
                } else {
                    if (g && !h[a][f].traced) {
                        g.push(h[a][f])
                    }
                }
            }
            h[a][f].traced = true
        }
        if (g) {
            o.push(g)
        }
        h.splice(a, 1)
    }
    return o
};
function TRAViz(b, a) {
    this.div = b;
    this.config = new TRAVizConfig(a);
    this.curveRadius = this.config.options.curveRadius;
    this.graph = new TRAVizGraph(this.config);
    this.startVertex = new TRAVizVertex(this.graph, "first", "");
    this.graph.addVertex(this.startVertex);
    this.endVertex = new TRAVizVertex(this.graph, "last", "");
    this.graph.addVertex(this.endVertex);
    this.graph.startVertex = this.startVertex;
    this.graph.endVertex = this.endVertex
}
TRAViz.prototype.align = function (a) {
    this.editions = [];
    this.sentences = [];
    this.colorMap = [];
    var b = this.config.getColors(a.length);
    for (var g = 0; g < a.length; g++) {
        this.editions.push(a[g].edition);
        this.sentences.push(a[g].text);
        this.colorMap[a[g].edition] = b[g]
    }
    this.mainBranch = this.editions[0];
    this.aligner = new TRAVizAligner(this.graph, this.config);
    this.sentencePaths = this.aligner.alignSentences(this.sentences);
    this.sentencePathHash = [];
    for (var g = 0; g < this.editions.length; g++) {
        this.sentencePathHash[this.editions[g]] = this.sentencePaths[g]
    }
    this.vertices = this.aligner.graph.vertices;
    for (var g = 0; g < this.vertices.length; g++) {
        var m = this.vertices[g];
        var n = "";
        var h = 0;
        var l = [];
        for (var f = 0; f < m.sources.length; f++) {
            var d = m.sources[f].token;
            var o = false;
            for (var e = 0; e < l.length; e++) {
                if (l[e].t == d) {
                    l[e].c++;
                    o = true;
                    if (l[e].c > h) {
                        n = d;
                        h = l[e].c
                    }
                    break
                }
            }
            if (!o) {
                l.push({t: d, c: 1});
                if (h == 0) {
                    n = d;
                    h = 1
                }
            }
        }
        m.token = n
    }
    this.originGraph = this.graph.clone();
    this.originSentencePaths = [];
    for (var g = 0; g < this.sentencePaths.length; g++) {
        this.originSentencePaths.push([]);
        for (var f = 0; f < this.sentencePaths[g].length; f++) {
            this.originSentencePaths.push(this.sentencePaths[g][f])
        }
    }
};
TRAViz.prototype.reset = function (l) {
    for (var f = 0; f < this.sentencePaths.length; f++) {
        var a = this.sentencePaths[f];
        for (var e = a.length; e > 0; e--) {
            if (a[e - 1].dummy) {
                a.splice(e - 1, 1)
            }
        }
    }
    for (var f = 0; f < this.originGraph.vertices.length; f++) {
        var l = this.originGraph.vertices[f];
        l.predecessors = [];
        l.successors = []
    }
    for (var f = 0; f < this.sentencePaths.length; f++) {
        var a = this.sentencePaths[f];
        for (var e = 0; e < a.length - 1; e++) {
            this.originGraph.getVertex(a[e].index).addSuccessor(a[e + 1].index);
            this.originGraph.getVertex(a[e + 1].index).addPredecessor(a[e].index)
        }
    }
    this.graph = this.originGraph.clone();
    this.aligner.graph = this.graph;
    this.vertices = this.graph.vertices;
    this.startVertex = this.graph.getVertex("first");
    this.endVertex = this.graph.getVertex("last");
    for (var f = 0; f < this.sentencePaths.length; f++) {
        var a = this.sentencePaths[f];
        for (var e = a.length; e > 0; e--) {
            a[e - 1] = this.graph.getVertex(a[e - 1].index)
        }
    }
    for (var f = 0; f < this.vertices.length; f++) {
        var l = this.vertices[f];
        l.layer = undefined;
        l.originLayer = undefined;
        var m = "";
        var g = 0;
        var h = [];
        for (var e = 0; e < l.sources.length; e++) {
            var b = l.sources[e].token;
            var n = false;
            for (var d = 0; d < h.length; d++) {
                if (h[d].t == b) {
                    h[d].c++;
                    n = true;
                    if (h[d].c > g) {
                        m = b;
                        g = h[d].c
                    }
                    break
                }
            }
            if (!n) {
                h.push({t: b, c: 1});
                if (g == 0) {
                    m = b;
                    g = 1
                }
            }
        }
        l.token = m
    }
};
TRAViz.prototype.setColorMap = function (a) {
    this.colorMap = a
};
TRAViz.prototype.prepareConnections = function () {
    this.connections = [];
    var f = [];
    for (var m = 0; m < this.layers.length; m++) {
        var t = {height: 0, paths: [], index: this.layers[m].index};
        f.push(t)
    }
    var n = function (k, p) {
        for (var j = 0; j < f.length; j++) {
            if (f[j].index == k) {
                f[j].paths.push(p);
                break
            }
        }
    };
    var q = this;
    var l = function () {
        var p = 1000000, B = 0;
        for (var A = 0; A < q.layout.length; A++) {
            var E = q.layout[A];
            if (E.x1 < p) {
                p = E.x1
            }
            if (E.x2 > B) {
                B = E.x2
            }
        }
        var x = function (k, j) {
            if (k.length != j.length) {
                return false
            }
            for (var v = 0; v < k.length; v++) {
                if (k[v] != j[v]) {
                    return false
                }
            }
            return true
        };
        for (var A = 0; A < f.length; A++) {
            var F = f[A];
            var C = 0;
            var w = [];
            for (var z = p; z < B; z++) {
                var D = [];
                for (var y = 0; y < F.paths.length; y++) {
                    if (F.paths[y].v1.x2 < z && F.paths[y].v2.x1 > z) {
                        D.push(F.paths[y])
                    }
                }
                if (D.length > 0 && (w.length == 0 || !x(w[w.length - 1], D))) {
                    w.push(D)
                }
            }
            var C = 0;
            for (var z = 0; z < w.length; z++) {
                if (w[z].length > C) {
                    C = w[z].length
                }
            }
            F.height = C * 3 + 2 * q.curveRadius;
            F.groups = w
        }
    };
    for (var m = 0; m < this.vertices.length; m++) {
        var u = this.vertices[m];
        var d = u.successors;
        for (var h = 0; h < d.length; h++) {
            var s = u;
            var r = this.graph.getVertex(d[h]);
            if (!this.config.options.startAndEnd && (s == this.startVertex || r == this.endVertex)) {
                continue
            }
            if (u.token == "" && r.token == "" && !r.linebreak && r != this.endVertex) {
                continue
            }
            if (s.layer == r.layer) {
                var e = false;
                for (var g = 0; g < this.vertices.length; g++) {
                    if (this.vertices[g] == s || this.vertices[g] == r) {
                        continue
                    }
                    if (this.vertices[g].layer == s.layer && s.x1 < this.vertices[g].x1 && this.vertices[g].x1 < r.x1) {
                        e = true;
                        break
                    }
                }
                if (e) {
                    var c = new TRAVizConnection(s, r, 0);
                    var b = new TRAVizVerticalConnection(s, r, "source");
                    var o = new TRAVizHorizontalConnection(s, r, 0);
                    var a = new TRAVizVerticalConnection(s, r, "sink");
                    this.connections.push(c);
                    c.addLink(b);
                    c.addLink(o);
                    c.addLink(a);
                    n(s.layer, o)
                } else {
                    this.connections.push(new TRAVizConnection(s, r, -1))
                }
            } else {
                var c = new TRAVizConnection(s, r, 3);
                this.connections.push(c);
                var b = new TRAVizVerticalConnection(s, r, "source");
                var o = new TRAVizHorizontalConnection(s, r, 3);
                var a = new TRAVizVerticalConnection(s, r, "sink");
                if (Math.abs(s.layer) > Math.abs(r.layer)) {
                    if (s.layer < 0) {
                        n(s.layer + 1, o)
                    } else {
                        n(s.layer, o)
                    }
                } else {
                    if (r.layer < 0) {
                        n(r.layer + 1, o)
                    } else {
                        n(r.layer, o)
                    }
                }
                c.addLink(b);
                c.addLink(o);
                c.addLink(a)
            }
        }
    }
    l();
    this.horizontalSlots = f
};
TRAViz.prototype.addEdgeToGroup = function (d, b, k, c) {
    var j = false;
    for (var a = 0; a < this.edgeGroups.length; a++) {
        var f = this.edgeGroups[a];
        if (f.h == d && f.t == b) {
            f.edges.push(k);
            f.ids = f.ids.concat(c);
            j = true;
            break
        }
    }
    if (!j) {
        this.edgeGroups.push({h: d, t: b, edges: [k], ids: c})
    }
};
TRAViz.prototype.computeEdgeLabels = function () {
    for (var c = 0; c < this.edgeGroups.length; c++) {
        var d = this.edgeGroups[c];
        var b = "";
        for (var a = 0; a < d.ids.length; a++) {
            b += "<div style='text-align:center;color:" + this.colorMap[this.editions[d.ids[a]]] + ";'>" + this.editions[d.ids[a]] + "</div>"
        }
        for (var a = 0; a < d.edges.length; a++) {
            $(d.edges[a].node).qtip({
                content: {text: b},
                style: {tip: true, border: {width: 0, radius: 4}, width: {min: 100, max: 500}},
                position: {target: "mouse", corner: {tooltip: "bottomMiddle", target: "topMiddle"}, adjust: {x: -6}},
                show: {when: "mouseenter", solo: true},
                hide: {when: {event: "mouseleave"}}
            })
        }
    }
};
TRAViz.prototype.generalConnections = function () {
    for (var c = 0; c < this.connections.length; c++) {
        var d = this.generatePath(this.connections[c], 0, 0);
        var a = this.paper.path(d).attr({
            stroke: this.config.options.baseColor,
            "stroke-width": 3,
            "stroke-linecap": "round",
            opacity: "0.8"
        });
        this.basicConnections.push(a)
    }
    for (var c = 0; c < this.vertices.length; c++) {
        var b = this.vertices[c];
        if (b == this.startVertex || b == this.endVertex || b.token == "") {
            continue
        }
        if (this.config.options.vertexBackground) {
            b.rect.toFront()
        }
        if (b.count > this.config.options.collapseLabels) {
            b.textNode.toFront()
        }
    }
};
TRAViz.prototype.adjustVerticalConnections = function () {
    var z = [];
    for (var V = 0; V < this.connections.length; V++) {
        var X = this.connections[V];
        var l = X.v1.x2;
        var f = X.v2.x1;
        var L = (l + f) / 2;
        var ac = (X.v1.y1 + X.v1.y2) / 2;
        var ab = (X.v2.y1 + X.v2.y2) / 2;
        if (X.type == 1) {
            var q, o;
            if (ac > ab) {
                q = ac - this.curveRadius;
                o = ab + this.curveRadius
            } else {
                q = ac + this.curveRadius;
                o = ab - this.curveRadius
            }
            var u = X.links[0];
            u.position(L, q, o);
            z.push(u)
        } else {
            if (X.type == 0 || X.type == 3) {
                var W = X.links[1];
                var a = l + this.curveRadius;
                var J, H;
                if (X.v1.layer >= X.v2.layer) {
                    J = ac - this.curveRadius;
                    H = W.y1 + this.curveRadius
                } else {
                    J = ac + this.curveRadius;
                    H = W.y1 - this.curveRadius
                }
                var x = X.links[0];
                x.position(a, J, H);
                z.push(x);
                var I = f - this.curveRadius;
                var E, D;
                if (X.v1.layer <= X.v2.layer) {
                    E = W.y1 + this.curveRadius;
                    D = ab - this.curveRadius
                } else {
                    E = W.y1 - this.curveRadius;
                    D = ab + this.curveRadius
                }
                var w = X.links[X.links.length - 1];
                w.position(I, E, D);
                z.push(w)
            }
        }
    }
    this.verticals = z;
    var d = function (h, c) {
        if (h.x1 < c.x1) {
            return -1
        }
        if (h.x1 == c.x1 && h.yMax() > c.yMax()) {
            return -1
        }
        return 1
    };
    z.sort(d);
    var e = [];
    for (var U = 0; U < z.length; U++) {
        var g = false;
        var B = false;
        for (var S = 0; S < e.length; S++) {
            if ((z[U].type == "source" || z[U].type == 1) && e[S].source == z[U].v1) {
                g = true;
                e[S].paths.push(z[U]);
                if (z[U].yMin() < e[S].y1) {
                    e[S].y1 = z[U].yMin()
                }
                if (z[U].yMax() > e[S].y2) {
                    e[S].y2 = z[U].yMax()
                }
            }
            if ((z[U].type == "sink" || z[U].type == 1) && e[S].sink == z[U].v2) {
                B = true;
                e[S].paths.push(z[U]);
                if (z[U].yMin() < e[S].y1) {
                    e[S].y1 = z[U].yMin()
                }
                if (z[U].yMax() > e[S].y2) {
                    e[S].y2 = z[U].yMax()
                }
            }
        }
        if (!g && z[U].type != "sink") {
            e.push({
                vertex: z[U].v1,
                source: z[U].v1,
                paths: [z[U]],
                y1: z[U].yMin(),
                y2: z[U].yMax(),
                x: z[U].v1.x2 + this.curveRadius
            })
        }
        if (!B && z[U].type != "source") {
            e.push({
                vertex: z[U].v2,
                sink: z[U].v2,
                paths: [z[U]],
                y1: z[U].yMin(),
                y2: z[U].yMax(),
                x: z[U].v2.x1 - this.curveRadius
            })
        }
    }
    var N = function (h, c) {
        if (h.paths.length > c.paths.length) {
            return 1
        }
        if (h.paths.length == c.paths.length && Math.abs(h.vertex.originLayer) < Math.abs(c.vertex.originLayer)) {
            return 1
        }
        return -1
    };
    e.sort(N);
    var t = [];
    for (var U = e.length; U > 0; U--) {
        var T = e[U - 1];
        var b = [];
        for (var S = 0; S < T.paths.length; S++) {
            if (!T.paths[S].placed) {
                b.push(T.paths[S])
            }
        }
        if (b.length < T.paths.length) {
            if (b.length == 0) {
                e.pop();
                continue
            }
            T.paths = b;
            e.sort(N);
            U = e.length + 1;
            continue
        }
        for (var S = 0; S < T.paths.length; S++) {
            T.paths[S].placed = true
        }
        t.push(T);
        e.pop()
    }
    e = t;
    var C = function (h, c) {
        if (h.x < c.x) {
            return 1
        }
        if (h.x == c.x) {
            if (h.paths.length > c.paths.length && h.source) {
                return 1
            }
        }
        return -1
    };
    e.sort(C);
    var F = [];
    for (var U = e.length; U > 0; U--) {
        var T = e[U - 1];
        if (typeof T.source != "undefined") {
            var y = T.x;
            var P = T.paths[0].v1.x2 + this.curveRadius;
            if (y != P) {
                T.x = P;
                e.sort(C);
                U = e.length + 1;
                continue
            }
        }
        if (typeof T.sink != "undefined") {
            var y = T.x;
            var P = T.paths[0].v2.x1 - this.curveRadius;
            if (y != P) {
                T.x = P;
                e.sort(C);
                U = e.length + 1;
                continue
            }
        }
        do {
            var ad = false;
            for (var S = 0; S < F.length; S++) {
                var R = F[S];
                if (Math.abs(T.x - R.x) < this.config.options.edgeGap && !(T.y1 > R.y2 || R.y1 > T.y2)) {
                    ad = true;
                    T.x += this.config.options.edgeGap - Math.abs(T.x - R.x)
                }
            }
        } while (ad);
        for (var S = 0; S < T.paths.length; S++) {
            var M = T.paths[S];
            M.x1 = T.x;
            M.x2 = T.x;
            M.gc = T.paths.length;
            var G = M.v2;
            if (G.x1 - T.x < this.curveRadius) {
                var K = this.curveRadius - (G.x1 - T.x);
                G.x1 += K;
                G.x2 += K;
                var A = [];
                for (var Q = 0; Q < G.successors.length; Q++) {
                    if (G.level == this.graph.getVertex(G.successors[Q]).level) {
                        A.push({head: G, tail: this.graph.getVertex(G.successors[Q])})
                    }
                }
                while (A.length > 0) {
                    var Z = [];
                    for (var Q = 0; Q < A.length; Q++) {
                        var aa = A[Q].head;
                        var Y = A[Q].tail;
                        if (Y.x1 - aa.x2 < 4 * this.curveRadius) {
                            var r = 4 * this.curveRadius - (Y.x1 - aa.x2);
                            Y.x1 += r;
                            Y.x2 += r;
                            for (var O = 0; O < Y.successors.length; O++) {
                                Z.push({head: Y, tail: this.graph.getVertex(Y.successors[O])})
                            }
                        }
                    }
                    A = Z
                }
            }
        }
        F.push(T);
        e.pop()
    }
};
TRAViz.prototype.removeVertical = function (a) {
    for (var b = 0; b < this.verticals.length; b++) {
        if (this.verticals[b] == a) {
            this.verticals.splice(b, 1);
            return
        }
    }
};
TRAViz.prototype.removeOverlaps = function () {
    var w = function (k, j) {
        if (k.x1 > j.x1) {
            return 1
        }
        if (k.x1 == j.x1) {
            return 0
        }
        return -1
    };
    for (var s = 0; s < this.verticals.length; s++) {
        for (var r = 0; r < this.vertices.length; r++) {
            if (this.vertices[r].token == "") {
                continue
            }
            var a = this.verticals[s].x1 - this.curveRadius, x = this.verticals[s].x2 + this.curveRadius, o = this.verticals[s].yMin() - this.curveRadius, n = this.verticals[s].yMax() + this.curveRadius;
            var m = this.vertices[r].x1, l = this.vertices[r].x2, v = this.vertices[r].y1, u = this.vertices[r].y2;
            if (this.overlap(a, x, m, l, o, n, v, u)) {
                var d = this.vertices[r];
                var t = Math.abs(this.vertices[r].x2 - a);
                var p = Math.abs(d.x1 - x);
                var h = false;
                var b = true;
                for (var q = 0; q < this.vertices.length; q++) {
                    var e = this.vertices[q];
                    if (d == e) {
                        continue
                    }
                    if (e == this.startVertex && !this.config.options.startAndEnd) {
                        continue
                    }
                    var f = this.getConnection(e, d);
                    if (!f) {
                        b = false
                    } else {
                        if (f.type == 1 && f.links[0].x1 + this.curveRadius >= d.x1 - t) {
                            b = false
                        } else {
                            if (f.type == -1 && f.v2.x1 - f.v1.x2 - 3 * this.curveRadius < t) {
                                b = false
                            } else {
                                if (f.type != -1 && f.type != 1) {
                                    b = false
                                }
                            }
                        }
                    }
                }
                if (b) {
                    h = true;
                    d.x1 -= t;
                    d.x2 -= t
                }
                if (!h) {
                    var g = true;
                    for (var q = 0; q < this.vertices.length; q++) {
                        var c = this.vertices[q];
                        if (d == c) {
                            continue
                        }
                        var f = this.getConnection(d, c);
                        if (c == this.endVertex && !this.config.options.startAndEnd) {
                            continue
                        }
                        if (!f) {
                            g = false
                        } else {
                            if (f.type == 1 && f.links[0].x1 - this.curveRadius < d.x2 + p) {
                                g = false
                            } else {
                                if (f.type == -1 && f.v2.x1 - f.v1.x2 - 3 * this.curveRadius < p) {
                                    g = false
                                } else {
                                    if (f.type != -1 && f.type != 1) {
                                        g = false
                                    }
                                }
                            }
                        }
                    }
                    if (g) {
                        h = true;
                        d.x1 += p;
                        d.x2 += p
                    }
                }
            }
        }
    }
};
TRAViz.prototype.transformEdgeTypes = function () {
    var F = [];
    for (var w = 0; w < this.connections.length; w++) {
        var D = this.connections[w];
        if (D.type == 1) {
            var p = D.links[0];
            var l = (D.v1.y1 + D.v1.y2) / 2;
            var k = (D.v2.y1 + D.v2.y2) / 2;
            F.push({x1: D.v1.x2, x2: p.x1, y1: l, y2: l, v1: D.v1, v2: D.v2});
            F.push({x1: p.x1, x2: D.v2.x1, y1: k, y2: k, v1: D.v1, v2: D.v2})
        }
    }
    for (var w = 0; w < this.connections.length; w++) {
        var D = this.connections[w];
        if (D.type == 0 || D.type == 3) {
            var g = D.links[0];
            var z = D.links[1];
            var e = D.links[2];
            z.x1 = g.x1 + this.curveRadius;
            z.x2 = e.x1 - this.curveRadius
        }
    }
    var r = function (h, c) {
        if (h.v1.x2 > c.v1.x2) {
            return 1
        }
        return -1
    };
    this.connections.sort(r);
    for (var w = 0; w < this.connections.length; w++) {
        var D = this.connections[w];
        if (D.type == 3) {
            var z = D.links[1];
            var l = (D.v1.y1 + D.v1.y2) / 2;
            var k = (D.v2.y1 + D.v2.y2) / 2;
            var a = z.x1 - this.curveRadius, G = z.x2 + this.curveRadius, u = D.v1.y1, t = D.v1.y2, f = D.v2.y1, d = D.v2.y2;
            var q = false;
            var o = false;
            for (var s = 0; s < this.vertices.length; s++) {
                var p = this.vertices[s];
                var n = p.x1, m = p.x2, E = p.y1, C = p.y2;
                if (this.overlap(a, G, n, m, u, t, E, C)) {
                    q = true;
                    break
                }
                if (this.overlap(D.v2.x1 - 2 * this.curveRadius, D.v2.x1, n, m, Math.min(l, k), Math.max(l, k), E, C)) {
                }
            }
            for (var s = 0; s < F.length; s++) {
                var z = F[s];
                if (D.v1 == z.v1 || D.v2 == z.v2) {
                    continue
                }
                if (this.overlap(a, G, z.x1, z.x2, u, t, z.y1, z.y2)) {
                    q = true;
                    break
                }
            }
            for (var s = 0; s < this.verticals.length; s++) {
                var y = this.verticals[s];
                if (D.v2 == y.v2) {
                    continue
                }
                if (this.overlap(D.links[2].x1, D.links[2].x1, y.x1 - this.config.options.edgeGap, y.x2 + this.config.options.edgeGap, Math.min(l, k), Math.max(l, k), Math.min(y.y1, y.y2), Math.max(y.y1, y.y2))) {
                    q = true;
                    break
                }
            }
            for (var s = 0; s < this.vertices.length; s++) {
                var p = this.vertices[s];
                var n = p.x1, m = p.x2, E = p.y1, C = p.y2;
                if (this.overlap(a, G, n, m, f, d, E, C)) {
                    o = true;
                    break
                }
                if (this.overlap(D.v1.x2, D.v1.x2 + 2 * this.curveRadius, n, m, Math.min(l, k), Math.max(l, k), E, C)) {
                }
            }
            for (var s = 0; s < F.length; s++) {
                var z = F[s];
                if (D.v1 == z.v1 || D.v2 == z.v2) {
                    continue
                }
                if (this.overlap(a, G, z.x1, z.x2, f, d, z.y1, z.y2)) {
                    o = true;
                    break
                }
            }
            for (var s = 0; s < this.verticals.length; s++) {
                var y = this.verticals[s];
                if (D.v1 == y.v1) {
                    continue
                }
                if (this.overlap(D.links[0].x1, D.links[0].x1, y.x1 - this.config.options.edgeGap, y.x2 + this.config.options.edgeGap, Math.min(l, k), Math.max(l, k), Math.min(y.y1, y.y2), Math.max(y.y1, y.y2))) {
                    o = true;
                    break
                }
            }
            var A = false, x = false;
            if (q && !o) {
                A = true
            } else {
                if (!q && o) {
                    x = true
                } else {
                    if (!q && !o && D.links[0].gc > D.links[2].gc) {
                        A = true
                    } else {
                        if (!q && !o && D.links[0].gc < D.links[2].gc) {
                            x = true
                        } else {
                            if (!q && !o && Math.abs(D.v1.originLayer) < Math.abs(D.v2.originLayer)) {
                                A = true
                            } else {
                                if (!q && !o && Math.abs(D.v1.originLayer) >= Math.abs(D.v2.originLayer)) {
                                    x = true
                                }
                            }
                        }
                    }
                }
            }
            if (A) {
                D.type = 1;
                this.removeVertical(D.links[2]);
                var b = D.links[0];
                b.type = "source";
                var B = (b.v1.layer + b.v2.layer) / 2;
                if (b.v1.layer < B) {
                    b.y1 = l + this.curveRadius;
                    b.y2 = k - this.curveRadius
                } else {
                    b.y1 = l - this.curveRadius;
                    b.y2 = k + this.curveRadius
                }
                D.links = [b];
                F.push({
                    x1: a - this.curveRadius,
                    x2: G + this.curveRadius,
                    y1: f - this.curveRadius,
                    y2: d + this.curveRadius,
                    v1: D.v1,
                    v2: D.v2
                })
            }
            if (x) {
                D.type = 1;
                this.removeVertical(D.links[0]);
                var b = D.links[2];
                b.type = "sink";
                var B = (b.v1.layer + b.v2.layer) / 2;
                if (b.v1.layer < B) {
                    b.y1 = l + this.curveRadius;
                    b.y2 = k - this.curveRadius
                } else {
                    b.y1 = l - this.curveRadius;
                    b.y2 = k + this.curveRadius
                }
                D.links = [b];
                F.push({
                    x1: a - this.curveRadius,
                    x2: G + this.curveRadius,
                    y1: t - this.curveRadius,
                    y2: t + this.curveRadius,
                    v1: D.v1,
                    v2: D.v2
                })
            }
        }
    }
};
TRAViz.prototype.adjustHorizontalConnections = function () {
    var d = function (k, j) {
        if (k.type == 0 && j.type == 0) {
            if (k.x2 - k.x1 < j.x2 - j.x1) {
                return -1
            }
            return 1
        } else {
            if (k.type == 0) {
                return -1
            } else {
                if (j.type == 0) {
                    return 1
                } else {
                    if (k.x2 == j.x2) {
                        if (k.x1 < j.x1) {
                            return -1
                        }
                        return 1
                    } else {
                        if (k.x2 < j.x2) {
                            return -1
                        }
                    }
                    return 1
                }
            }
        }
    };
    for (var q = 0; q < this.horizontalSlots.length; q++) {
        var m = [];
        var v = this.horizontalSlots[q];
        var n = v.paths;
        for (var p = 0; p < n.length; p++) {
            var f = n[p];
            var s = f.v1.x2;
            var r = f.v2.x1;
            var h = v.yMax - 2;
            f.position(s + 2 * this.curveRadius, r - 2 * this.curveRadius, h)
        }
        n.sort(d);
        var u = [];
        for (var p = 0; p < n.length; p++) {
            var g = false;
            var l = false;
            for (var o = 0; o < u.length; o++) {
                if (u[o].source == n[p].v1) {
                    g = true;
                    u[o].paths.push(n[p]);
                    if (n[p].x1 < u[o].x1) {
                        u[o].x1 = n[p].x1
                    }
                    if (n[p].x2 > u[o].x2) {
                        u[o].x2 = n[p].x2
                    }
                }
                if (u[o].sink == n[p].v2) {
                    l = true;
                    u[o].paths.push(n[p]);
                    if (n[p].x1 < u[o].x1) {
                        u[o].x1 = n[p].x1
                    }
                    if (n[p].x2 > u[o].x2) {
                        u[o].x2 = n[p].x2
                    }
                }
            }
            if (!g) {
                u.push({source: n[p].v1, paths: [n[p]], x1: n[p].x1, x2: n[p].x2, y: n[p].y1})
            }
            if (!l) {
                u.push({sink: n[p].v2, paths: [n[p]], x1: n[p].x1, x2: n[p].x2, y: n[p].y1})
            }
        }
        var e = function (k, j) {
            if (k.paths.length > j.paths.length) {
                return 1
            }
            return -1
        };
        u.sort(e);
        var c = [];
        for (var p = u.length; p > 0; p--) {
            var b = u[p - 1];
            var t = [];
            for (var o = 0; o < b.paths.length; o++) {
                if (!b.paths[o].placed) {
                    t.push(b.paths[o])
                }
            }
            if (t.length < b.paths.length) {
                b.paths = t;
                u.sort(e);
                p = u.length + 1;
                continue
            }
            do {
                var a = false;
                for (var o = 0; o < c.length; o++) {
                    var w = c[o];
                    if (b.y == w.y && !(b.x1 - this.curveRadius > w.x2 || w.x1 - this.curveRadius > b.x2)) {
                        a = true;
                        b.y -= this.config.options.edgeGap
                    }
                }
            } while (a);
            for (var o = 0; o < b.paths.length; o++) {
                b.paths[o].placed = true;
                b.paths[o].y1 = b.y;
                b.paths[o].y2 = b.y
            }
            c.push(b);
            u.pop()
        }
    }
};
TRAViz.prototype.highlightEdition = function (e) {
    var d = this.sentencePathHash[e];
    var c = "";
    for (var b = 1; b < d.length; b++) {
        c += this.generatePath(this.getConnection(d[b - 1], d[b]), 0, 0)
    }
    var a = this.paper.path(c).attr({
        stroke: this.colorMap[e],
        "stroke-width": 4,
        "stroke-linecap": "round",
        opacity: "1.0"
    });
    return a
};
TRAViz.prototype.insertLineNumbering = function (e, h) {
    var a = 1;
    var c = this.curveRadius;
    var b = e - this.curveRadius;
    var g = this.layers[0].yLevel - this.layers[0].height / 2 + 0.5 - Math.floor(h / 2) - 26;
    var f = "M " + c + " " + g + " L " + b + " " + g;
    this.paper.path(f).attr({
        stroke: this.config.options.baseColor,
        "stroke-width": 1,
        "stroke-linecap": "round",
        opacity: "1.0"
    });
    this.paper.text(c + 7, g + 14, this.config.options.lineNumberingText + " " + a).attr({
        font: "14px " + this.config.options.font,
        fill: this.config.options.baseColor,
        "text-anchor": "start",
        cursor: "default"
    });
    a++;
    for (var d = 0; d < this.layers.length - 1; d++) {
        if (this.layers[d].level != this.layers[d + 1].level) {
            var g = this.layers[d].yLevel + this.layers[d].height / 2 + 0.5 + Math.floor(h / 2);
            var f = "M " + c + " " + g + " L " + b + " " + g;
            this.paper.path(f).attr({
                stroke: this.config.options.baseColor,
                "stroke-width": 1,
                "stroke-linecap": "round",
                opacity: "1.0"
            });
            this.paper.text(c + 7, g + 14, this.config.options.lineNumberingText + " " + a).attr({
                font: "14px " + this.config.options.font,
                fill: this.config.options.baseColor,
                "text-anchor": "start",
                cursor: "default"
            });
            a++
        }
    }
    var g = this.layers[this.layers.length - 1].yLevel + this.layers[this.layers.length - 1].height / 2 + 0.5 + Math.floor(h / 2);
    var f = "M " + c + " " + g + " L " + b + " " + g;
    this.paper.path(f).attr({
        stroke: this.config.options.baseColor,
        "stroke-width": 1,
        "stroke-linecap": "round",
        opacity: "1.0"
    })
};
TRAViz.prototype.generatePath = function (u, e, d) {
    var w = function (y, M, N, c, h, L) {
        return "C " + y + " " + M + " " + N + " " + c + " " + h + " " + L + " "
    };
    var t = function (h, L, c, y) {
        return "L " + h + " " + L + " " + c + " " + y + " "
    };
    var K = u;
    var H = K.v1.x2;
    var F = K.v2.x1;
    var k = (K.v1.y1 + K.v1.y2) / 2 + e;
    var j = (K.v2.y1 + K.v2.y2) / 2 + d;
    var B = "M " + H + " " + k + " ";
    if (K.type == -1) {
        var A = (F + H) / 2;
        var J = (j + k) / 2;
        B += w(H, k, A, k, A, J);
        B += w(A, J, A, j, F, j)
    } else {
        if (K.type == 0 || K.type == 3) {
            var g = K.links[0];
            var E = K.links[1];
            var f = K.links[2];
            var v = g.x1, s = g.x2, I = g.y1 + e, G = g.y2;
            var o = E.x1, m = E.x2, D = E.y1, C = E.y2;
            var b = f.x1, a = f.x2, q = f.y1, p = f.y2 + d;
            var z = this.curveRadius, x = this.curveRadius;
            if (Math.abs(D - k) < 2 * this.curveRadius) {
                z = Math.abs(D - k) / 2;
                var r = (D + k) / 2;
                I = r;
                G = r
            }
            if (Math.abs(D - j) < 2 * this.curveRadius) {
                x = Math.abs(D - j) / 2;
                var r = (D + j) / 2;
                q = r;
                p = r
            }
            if (this.config.options.rtl) {
                z *= -1;
                x *= -1
            }
            B += t(H, k, v - z, k);
            B += w(v - z, k, v, k, v, I);
            B += t(v, I, s, G);
            B += w(s, G, s, D, o, D);
            B += t(o, D, m, C);
            B += w(m, C, b, C, b, q);
            B += t(b, q, a, p);
            B += w(a, p, a, j, a + x, j);
            B += t(a + x, j, F, j)
        } else {
            if (K.type == 1) {
                var l = this.curveRadius;
                if (this.config.options.rtl) {
                    l *= -1
                }
                var n = K.links[0];
                B += t(H, k, n.x1 - l, k);
                B += w(n.x1 - l, k, n.x1, k, n.x1, n.y1 + e);
                B += t(n.x1, n.y1 + e, n.x2, n.y2 + d);
                B += w(n.x2, n.y2 + d, n.x2, j, n.x2 + l, j);
                B += t(n.x2 + l, j, F, j)
            }
        }
    }
    return B
};
TRAViz.prototype.getConnection = function (c, b) {
    for (var a = 0; a < this.connections.length; a++) {
        if (this.connections[a].v1 == c && this.connections[a].v2 == b) {
            return this.connections[a]
        }
    }
    return false
};
TRAViz.prototype.displayVertexConnections = function (b, f) {
    this.vertexConnections = [];
    for (var e = 0; e < this.vertices.length; e++) {
        this.vertices[e].ins = [];
        this.vertices[e].outs = []
    }
    for (var e = 0; e < this.sentencePaths.length; e++) {
        var a = this.sentencePaths[e];
        for (var d = 0; d < a.length; d++) {
            if (a[d] == f) {
                for (var d = 0; d < a.length; d++) {
                    if (d > 0) {
                        a[d].ins.push({v: a[d - 1], id: e})
                    }
                    if (d < a.length - 1) {
                        a[d].outs.push({v: a[d + 1], id: e})
                    }
                }
            }
        }
    }
    for (var e = 0; e < this.vertices.length; e++) {
        var m = this.vertices[e];
        var k = (m.y1 + m.y2) / 2;
        if (this.vertices[e].token == "" && (this.vertices[e].ins.length <= 1 || this.vertices[e].outs.length <= 1)) {
            this.vertices[e].ins = [{}];
            this.vertices[e].outs = [{}]
        }
        this.vertices[e].ins.sort(function (q, p) {
            var j = (q.v.y1 + q.v.y2) / 2;
            var c = (p.v.y1 + p.v.y2) / 2;
            if (q.v == p.v && q.id > p.id) {
                return 1
            } else {
                if (q.v != p.v && j == c && q.v.x2 > p.v.x2) {
                    return 1
                } else {
                    if (q.v != p.v && j > c) {
                        return 1
                    }
                }
            }
            return -1
        });
        this.vertices[e].outs.sort(function (q, p) {
            var j = (q.v.y1 + q.v.y2) / 2;
            var c = (p.v.y1 + p.v.y2) / 2;
            if (q.v == p.v && q.id > p.id) {
                return 1
            } else {
                if (q.v != p.v && j == c && q.v.x2 < p.v.x2) {
                    return 1
                } else {
                    if (q.v != p.v && j > c) {
                        return 1
                    }
                }
            }
            return -1
        })
    }
    var h = function (p, j) {
        if (j.length == 1) {
            return 0
        }
        for (var c = 0; c < j.length; c++) {
            if (j[c].id == p) {
                return c * 3 - j.length * 3 / 2
            }
        }
    };
    var l = function (q, p, c) {
        if (p.length == 1) {
            return 0
        }
        for (var j = 0; j < p.length; j++) {
            if (p[j].id == q) {
                return (j * 3 - p.length * 3 / 2) / (p.length * 2) * c / 2
            }
        }
    };
    for (var e = 0; e < this.sentencePaths.length; e++) {
        var a = this.sentencePaths[e];
        for (var d = 0; d < a.length; d++) {
            if (a[d] == f) {
                var o = "";
                for (var d = 1; d < a.length; d++) {
                    var g = this.getConnection(a[d - 1], a[d]);
                    if (g) {
                        if (this.config.options.interpolateFontSize) {
                            o += this.generatePath(g, l(e, a[d - 1].outs, a[d - 1].boxHeight), l(e, a[d].ins, a[d].boxHeight))
                        } else {
                            o += this.generatePath(g, h(e, a[d - 1].outs), h(e, a[d].ins))
                        }
                    }
                }
                var n = this.paper.path(o).attr({
                    stroke: this.colorMap[this.editions[e]],
                    "stroke-width": 3,
                    "stroke-linecap": "round",
                    opacity: "0.8"
                });
                this.vertexConnections.push(n);
                break
            }
        }
    }
    for (var e = 0; e < this.vertices.length; e++) {
        var m = this.vertices[e];
        if (m == this.startVertex || m == this.endVertex || m.token == "") {
            continue
        }
        if (this.config.options.vertexBackground) {
            m.rect.toFront()
        }
        if (m.count > this.config.options.collapseLabels) {
            m.textNode.toFront()
        }
    }
};
TRAViz.prototype.majorityConnections = function (g) {
    var d = [];
    for (var f = 0; f < this.vertices.length; f++) {
        for (var b = 0; b < this.vertices[f].successors.length; b++) {
            d.push({
                head: this.vertices[f],
                tail: this.graph.getVertex(this.vertices[f].successors[b]),
                weight: 0,
                ids: []
            })
        }
    }
    var s = function (u, p, t) {
        for (var c = 0; c < d.length; c++) {
            var j = d[c];
            if (j.head == u && j.tail == p) {
                j.weight++;
                j.ids.push(t)
            }
        }
    };
    for (var f = 0; f < this.sentencePaths.length; f++) {
        var a = this.sentencePaths[f];
        s(this.startVertex, a[0], f);
        s(a[a.length - 1], this.endVertex, f);
        for (var b = 0; b < a.length - 1; b++) {
            s(a[b], a[b + 1], f)
        }
    }
    for (var f = 0; f < this.vertices.length; f++) {
        this.vertices[f].ins = [];
        this.vertices[f].outs = []
    }
    for (var f = 0; f < d.length; f++) {
        var h = d[f];
        if (g && h.weight > this.sentencePaths.length * this.config.options.majorityPercentage) {
            h.head.outs.push({v: h.tail, id: -1});
            h.tail.ins.push({v: h.head, id: -1})
        } else {
            for (var b = 0; b < h.ids.length; b++) {
                h.head.outs.push({v: h.tail, id: h.ids[b]});
                h.tail.ins.push({v: h.head, id: h.ids[b]})
            }
        }
    }
    for (var f = 0; f < this.vertices.length; f++) {
        var o = this.vertices[f];
        var m = (o.y1 + o.y2) / 2;
        if (this.vertices[f].token == "" && (this.vertices[f].ins.length <= 1 || this.vertices[f].outs.length <= 1)) {
            this.vertices[f].ins = [{}];
            this.vertices[f].outs = [{}]
        }
        this.vertices[f].ins.sort(function (p, j) {
            var e = (p.v.y1 + p.v.y2) / 2;
            var c = (j.v.y1 + j.v.y2) / 2;
            if (p.v == j.v && p.id > j.id) {
                return 1
            } else {
                if (p.v != j.v && e == c && p.v.x2 > j.v.x2) {
                    return 1
                } else {
                    if (p.v != j.v && e > c) {
                        return 1
                    }
                }
            }
            return -1
        });
        this.vertices[f].outs.sort(function (p, j) {
            var e = (p.v.y1 + p.v.y2) / 2;
            var c = (j.v.y1 + j.v.y2) / 2;
            if (p.v == j.v && p.id > j.id) {
                return 1
            } else {
                if (p.v != j.v && e == c && p.v.x2 < j.v.x2) {
                    return 1
                } else {
                    if (p.v != j.v && e > c) {
                        return 1
                    }
                }
            }
            return -1
        })
    }
    var l = function (j, e) {
        if (e.length == 1) {
            return 0
        }
        for (var c = 0; c < e.length; c++) {
            if (e[c].id == j) {
                return c * 3 - e.length * 3 / 2
            }
        }
    };
    var n = function (p, j, c) {
        if (j.length == 1) {
            return 0
        }
        for (var e = 0; e < j.length; e++) {
            if (j[e].id == p) {
                return (e * 3 - j.length * 3 / 2) / (j.length * 2) * c / 2
            }
        }
    };
    for (var f = 0; f < d.length; f++) {
        var h = d[f];
        var k = this.getConnection(h.head, h.tail);
        if (!k) {
            continue
        }
        if (g && h.weight > this.sentencePaths.length * this.config.options.majorityPercentage) {
            var r = null;
            if (this.config.options.interpolateFontSize) {
                r = this.generatePath(k, n(-1, h.head.outs, h.head.boxHeight), n(-1, h.tail.ins, h.tail.boxHeight))
            } else {
                r = this.generatePath(k, l(-1, h.head.outs), l(-1, h.tail.ins))
            }
            var q = this.paper.path(r).attr({
                stroke: this.config.options.baseColor,
                "stroke-width": 5,
                "stroke-linecap": "round",
                opacity: "0.8"
            });
            this.addEdgeToGroup(h.head, h.tail, q, h.ids);
            this.basicConnections.push(q)
        } else {
            for (var b = 0; b < h.ids.length; b++) {
                var r = null;
                if (this.config.options.interpolateFontSize) {
                    r = this.generatePath(k, n(h.ids[b], h.head.outs, h.head.boxHeight), n(h.ids[b], h.tail.ins, h.tail.boxHeight))
                } else {
                    r = this.generatePath(k, l(h.ids[b], h.head.outs), l(h.ids[b], h.tail.ins))
                }
                var q = this.paper.path(r).attr({
                    stroke: this.colorMap[this.editions[h.ids[b]]],
                    "stroke-width": 3,
                    "stroke-linecap": "round",
                    opacity: "0.8"
                });
                this.addEdgeToGroup(h.head, h.tail, q, [h.ids[b]]);
                this.basicConnections.push(q)
            }
        }
    }
    for (var f = 0; f < this.vertices.length; f++) {
        var o = this.vertices[f];
        if (o == this.startVertex || o == this.endVertex || o.token == "") {
            continue
        }
        if (this.config.options.vertexBackground) {
            o.rect.toFront()
        }
        if (o.count > this.config.options.collapseLabels) {
            o.textNode.toFront()
        }
    }
};
TRAViz.prototype.setXFlow = function () {
    var o = 4 * this.curveRadius;
    var b = [];
    for (var r = 0; r < this.startVertex.successors.length; r++) {
        b.push({head: this.startVertex, tail: this.graph.getVertex(this.startVertex.successors[r])})
    }
    var a = this.startVertex.boxWidth;
    this.startVertex.x1 = o;
    this.startVertex.x2 = o + a;
    while (b.length > 0) {
        var y = [];
        for (var r = 0; r < b.length; r++) {
            var u = b[r];
            var t = o;
            if (u.tail.x1 < u.head.x2 + t) {
                u.tail.x1 = u.head.x2 + t;
                u.tail.x2 = u.head.x2 + t + u.tail.boxWidth;
                for (var q = 0; q < u.tail.successors.length; q++) {
                    y.push({head: u.tail, tail: this.graph.getVertex(u.tail.successors[q])})
                }
            }
        }
        b = y
    }
    var f = 3;
    while (f > 2) {
        f = 0;
        for (var r = 0; r < this.vertices.length; r++) {
            var m = this.vertices[r];
            if (m == this.startVertex || m == this.endVertex) {
                continue
            }
            var c = Math.floor((m.x2 + m.x1) / 2);
            var k = m.boxWidth;
            var n = undefined, d = undefined;
            for (var q = 0; q < m.predecessors.length; q++) {
                var s = this.graph.getVertex(m.predecessors[q]);
                var l = s.x2;
                if (s == this.startVertex && !this.config.options.startAndEnd) {
                    n = Math.floor(m.x1 - o)
                }
                if (typeof n == "undefined" || l > n) {
                    n = l
                }
            }
            for (var q = 0; q < m.successors.length; q++) {
                var p = this.graph.getVertex(m.successors[q]);
                var h = p.x1;
                if (p == this.endVertex && !this.config.options.startAndEnd) {
                    d = Math.floor(m.x2 + o)
                }
                if (typeof d == "undefined" || h < d) {
                    d = h;
                    xr = p
                }
            }
            var x = Math.floor((n + d) / 2);
            if (isNaN(x)) {
                x = c
            }
            if (x != c) {
                m.x1 = x - k / 2;
                m.x2 = m.x1 + k;
                if (f < Math.abs(x - c)) {
                    f = Math.abs(x - c)
                }
            }
        }
    }
};
TRAViz.prototype.overlap = function (e, c, b, g, d, a, h, f) {
    if (e >= g || c <= b || d >= f || a <= h) {
        return false
    }
    return true
};
TRAViz.prototype.getLayer = function (a) {
    for (var b = 0; b < this.layers.length; b++) {
        if (this.layers[b].index == a) {
            return this.layers[b]
        }
    }
    return false
};
TRAViz.prototype.getLayerIndex = function (a) {
    for (var b = 0; b < this.layers.length; b++) {
        if (this.layers[b].index == a) {
            return b
        }
    }
    return false
};
TRAViz.prototype.setConnections = function () {
    this.prepareConnections();
    var d = 1000;
    for (var c = 0; c < this.layers.length; c++) {
        this.horizontalSlots[c].yMin = d + this.curveRadius;
        this.horizontalSlots[c].yMax = d - this.curveRadius + this.horizontalSlots[c].height;
        d += this.layers[c].height / 2 + this.horizontalSlots[c].height;
        this.layers[c].yLevel = 0 + d;
        for (var b = 0; b < this.layers[c].vertices.length; b++) {
            var a = this.layers[c].vertices[b].boxHeight;
            this.layers[c].vertices[b].y1 = d - a / 2;
            this.layers[c].vertices[b].y2 = d + a / 2
        }
        d += this.layers[c].height / 2
    }
    this.adjustHorizontalConnections();
    this.adjustVerticalConnections()
};
TRAViz.prototype.insertDummys = function () {
    var n = 3 * this.curveRadius;
    var p = $("#" + this.div).width();
    var m = function (j, e) {
        if (j.x1 < e.x1) {
            return -1
        }
        return 1
    };
    this.vertices.sort(m);
    var v = this.vertices[0].x1 - n;
    for (var u = 0; u < this.vertices.length; u++) {
        this.vertices[u].x1 -= v;
        this.vertices[u].x2 -= v;
        this.vertices[u].x1Temp = this.vertices[u].x1;
        this.vertices[u].x2Temp = this.vertices[u].x2
    }
    var f = this.vertices;
    var c = 0;
    while (f.length > 0) {
        var o = [];
        var v = 0;
        var b = 0;
        for (var u = 0; u < f.length; u++) {
            if (f[u].x2Temp + 2 * n > p) {
                if (v == 0) {
                    v = 3 * n - f[u].x1Temp;
                    f[u].x2Temp = f[u].x2Temp - f[u].x1Temp + 3 * n;
                    f[u].x1Temp = 3 * n;
                    b = (c + 1) * p - f[u].x1 + 3 * n
                } else {
                    f[u].x1Temp += v;
                    f[u].x2Temp += v
                }
                f[u].x1 += b;
                f[u].x2 += b;
                o.push(f[u])
            } else {
                f[u].level = c
            }
        }
        f = o;
        c++
    }
    var r = [];
    var d = [];
    for (var u = 0; u < this.vertices.length; u++) {
        for (var t = 0; t < this.vertices[u].successors.length; t++) {
            d.push({head: this.vertices[u], tail: this.graph.getVertex(this.vertices[u].successors[t])})
        }
    }
    var q = [];
    for (var u = 0; u < d.length; u++) {
        var w = d[u];
        if (w.tail.level != w.head.level) {
            var g, a;
            if (typeof r[w.tail.index + ""] == "undefined") {
                g = new TRAVizVertex(this.graph, this.config.getVertexIndex(), "");
                g.dummy = true;
                g.predecessors = [w.head.index];
                w.head.removeSuccessor(w.tail.index);
                w.head.addSuccessor(g.index);
                a = new TRAVizVertex(this.graph, this.config.getVertexIndex(), "");
                a.dummy = true;
                a.successors = [w.tail.index];
                w.tail.removePredecessor(w.head.index);
                w.tail.addPredecessor(a.index);
                g.addSuccessor(a.index);
                a.addPredecessor(g.index);
                g.boxWidth = 0, g.boxHeight = 0;
                a.boxWidth = 0, a.boxHeight = 0;
                g.x1Temp = p - n, g.x2Temp = p - n;
                a.x1Temp = n, a.x2Temp = n;
                g.x1 = (w.head.level + 1) * p, g.x2 = (w.head.level + 1) * p;
                a.x1 = (w.head.level + 1) * p, a.x2 = (w.head.level + 1) * p;
                var l = [w.head, g, a, w.tail];
                q.push(l);
                this.graph.addVertex(g);
                this.graph.addVertex(a);
                g.level = w.head.level;
                a.level = w.head.level + 1;
                this.layout.push(g);
                this.layout.push(a);
                if (w.head.token == "") {
                    g.linebreak = true
                }
                if (w.tail.level != a.level) {
                    d.splice(u + 1, 0, {head: a, tail: w.tail})
                } else {
                    r[w.tail.index + ""] = {h: g, t: a, path: l}
                }
            } else {
                g = r[w.tail.index + ""].h;
                a = r[w.tail.index + ""].t;
                w.head.removeSuccessor(w.tail.index);
                w.head.addSuccessor(g.index);
                w.tail.removePredecessor(w.head.index);
                w.tail.addPredecessor(a.index);
                g.addPredecessor(w.head.index);
                var l = r[w.tail.index + ""].path;
                if (Math.abs(w.head.layer) < Math.abs(l[0].layer) || Math.abs(w.head.layer) == Math.abs(l[0].layer) && w.head.x2 > l[0].x2) {
                    l[0] = w.head
                }
            }
            for (var t = 0; t < this.sentencePaths.length; t++) {
                for (var s = 0; s < this.sentencePaths[t].length - 1; s++) {
                    if (this.sentencePaths[t][s] == w.head && this.sentencePaths[t][s + 1] == w.tail) {
                        this.sentencePaths[t].splice(s + 1, 0, g, a);
                        break
                    }
                }
            }
        }
    }
    var h = function (j, e) {
        if (j[0].level < e[0].level) {
            return -1
        }
        if (Math.abs(j[0].layer + j[3].layer) < Math.abs(e[0].layer + e[3].layer)) {
            return -1
        }
        if (Math.abs(j[0].layer + j[3].layer) == Math.abs(e[0].layer + e[3].layer) && j[3].x1 - j[0].x2 < e[3].x1 - e[0].x2) {
            return -1
        }
        return 1
    };
    q.sort(h);
    for (var u = 0; u < q.length; u++) {
        var l = q[u];
        var x = this.getYLayer(l[0].layer, l[3].layer, l[1], true);
        l[1].layer = x;
        l[2].layer = x
    }
    for (var u = 0; u < this.vertices.length; u++) {
        this.vertices[u].x1 = this.vertices[u].x1Temp;
        this.vertices[u].x2 = this.vertices[u].x2Temp
    }
    this.vertices = this.graph.vertices
};
TRAViz.prototype.setMainBranch = function (a) {
    if (this.mainBranch != a) {
        this.mainBranch = a;
        this.reset();
        this.visualize()
    }
};
TRAViz.prototype.generateTranspositionPath = function (o, m) {
    var d = function (t, v, w, r, s, u) {
        return "C " + t + " " + v + " " + w + " " + r + " " + s + " " + u + " "
    };
    var q = function (s, u, r, t) {
        return "L " + s + " " + u + " " + r + " " + t + " "
    };
    var c = o.x, b = m.x;
    var n, l, k, j, h;
    var f = this.getLayer(o.layer);
    var e = this.getLayer(m.layer);
    var g = Math.min(this.curveRadius, Math.abs(c - b) / 2);
    if (f == e) {
        var n = o.y2;
        var l = (o.y1 + o.y2) / 2 + f.height / 2;
        var k = (o.y1 + o.y2) / 2 + f.height / 2 + g;
        var j = (m.y1 + m.y2) / 2 + f.height / 2;
        var h = m.y2
    } else {
        if (f.index < e.index) {
            var a = this.horizontalSlots[this.getLayerIndex(o.layer) + 1].yMax - this.horizontalSlots[this.getLayerIndex(o.layer) + 1].yMin;
            var n = o.y2;
            var l = (o.y1 + o.y2) / 2 + f.height / 2 + a / 2;
            var k = (o.y1 + o.y2) / 2 + f.height / 2 + a / 2 + g;
            var j = k + g;
            var h = m.y1
        } else {
            if (f.index > e.index) {
                var a = this.horizontalSlots[this.getLayerIndex(o.layer)].yMax - this.horizontalSlots[this.getLayerIndex(o.layer)].yMin;
                var n = o.y1;
                var l = (o.y1 + o.y2) / 2 - f.height / 2 - a / 2;
                var k = (o.y1 + o.y2) / 2 - f.height / 2 - a / 2 - g;
                var j = k - g;
                var h = m.y2
            }
        }
    }
    var p = "M " + c + " " + n + " ";
    p += q(c, n, c, l);
    p += d(c, l, c, k, c + g, k);
    p += q(c + g, k, b - g, k);
    p += d(b - g, k, b, k, b, j);
    p += q(b, j, b, h);
    return p
};
TRAViz.prototype.calculateTranspositions = function () {
    var a = [];
    for (var d = 0; d < this.vertices.length; d++) {
        if (this.vertices[d] == this.startVertex || this.vertices[d] == this.endVertex || this.vertices[d].token == "") {
            continue
        }
        this.vertices[d].x = (this.vertices[d].x1 + this.vertices[d].x2) / 2;
        var f = false;
        for (var c = 0; c < a.length; c++) {
            if (a[c][0].token == this.vertices[d].token) {
                a[c].push(this.vertices[d]);
                f = true;
                break
            }
        }
        if (!f) {
            a.push([this.vertices[d]])
        }
    }
    for (var d = 0; d < a.length; d++) {
        var e = a[d];
        if (e.length == 1) {
            continue
        }
        for (var c = 0; c < e.length; c++) {
            e[c].transpositions = [];
            e[c].transpositionGroup = e;
            for (var b = 0; b < e.length; b++) {
                if (c == b) {
                    continue
                }
                var l = "";
                if (e[c].x < e[b].x) {
                    l = this.generateTranspositionPath(e[c], e[b])
                } else {
                    l = this.generateTranspositionPath(e[b], e[c])
                }
                var h = this.paper.path(l).attr({"stroke-width": 3, "stroke-dasharray": ".", opacity: "1.0"});
                $(h.node).css("display", "none");
                e[c].transpositions.push(h)
            }
        }
    }
};
TRAViz.prototype.visualize = function () {
    if (this.config.options.lineBreaks) {
        if ($("#" + this.div).width() == 0) {
            this.config.options.lineBreaks = false;
            alert("Please check the width of your container div!")
        }
    }
    var W = $(".trailsQtip");
    for (var ae = 0; ae < W.length; ae++) {
        $(W[ae]).remove()
    }
    var m = 2 * this.curveRadius;
    var af = this;
    var u = [];
    var J = this.aligner.getPathsByEdition(this.sentencePathHash[this.mainBranch], this.sentencePaths);
    var aa = [];
    $("#" + this.div).empty();
    var S, R = 1000;
    var z = function (e) {
        if (!e) {
            e = window.event
        }
        var c = (window.document.compatMode && window.document.compatMode == "CSS1Compat") ? window.document.documentElement : window.document.body;
        return {top: e.pageY ? e.pageY : e.clientY, left: e.pageX ? e.pageX : e.clientX}
    };
    var C = function (y, j, r) {
        var s = z(y);
        var h = r.x1;
        var c = r.x2;
        var x = r.y1;
        var w = r.y2;
        var v = false;
        var e = false, k = false;
        document.onmouseup = function () {
            if (document.selection && document.selection.empty) {
                document.selection.empty()
            } else {
                if (window.getSelection) {
                    var an = window.getSelection();
                    an.removeAllRanges()
                }
            }
            document.onmousemove = null;
            document.onmouseup = null;
            if (e && !k) {
                alert("Invalid merge attempt produced a circle in the graph!");
                v.attr({fill: af.config.options.baseColor});
                e.textNode.attr({fill: af.config.options.baseColor});
                $(v.node).fadeOut(1000, function () {
                    $(v).remove()
                })
            } else {
                if (e && k) {
                    var ak = af.originGraph.isAcyclicFromVertex(af.originGraph.getVertex(e.index), af.originGraph.getVertex(r.index));
                    for (var am = 0; am < af.sentencePaths.length; am++) {
                        var ao = af.sentencePaths[am];
                        for (var al = 0; al < ao.length; al++) {
                            if (ao[al] == e || ao[al] == r) {
                                ao[al] = ak
                            }
                        }
                    }
                    af.reset();
                    af.visualize()
                } else {
                    $(v.node).fadeOut(1000, function () {
                        $(v).remove()
                    })
                }
            }
        };
        document.onmousemove = function (ap) {
            if (!v) {
                v = af.paper.text((r.x1 + r.x2) / 2, (r.y1 + r.y2) / 2, r.token).attr({
                    font: r.fs + "px " + af.config.options.font,
                    fill: af.config.options.baseColor,
                    "text-anchor": "middle",
                    cursor: "pointer"
                })
            }
            if (document.selection && document.selection.empty) {
                document.selection.empty()
            } else {
                if (window.getSelection) {
                    var am = window.getSelection();
                    am.removeAllRanges()
                }
            }
            var au = z(ap);
            v.x1 = h + au.left - s.left;
            v.x2 = c + au.left - s.left;
            v.y1 = x + au.top - s.top;
            v.y2 = w + au.top - s.top;
            v.attr({x: (v.x1 + v.x2) / 2, y: (v.y1 + v.y2) / 2});
            if (e) {
                v.attr({fill: af.config.options.baseColor});
                e.textNode.attr({fill: af.config.options.baseColor})
            }
            e = false;
            k = false;
            var aq = 0;
            for (var ao = 0; ao < af.vertices.length; ao++) {
                var ax = v;
                var aw = af.vertices[ao];
                if (r != aw && af.overlap(ax.x1, ax.x2, aw.x1, aw.x2, ax.y1, ax.y2, aw.y1, aw.y2)) {
                    var al = (ax.x1 + ax.x2) / 2;
                    var ak = (aw.x1 + aw.x2) / 2;
                    var av = (ax.y1 + ax.y2) / 2;
                    var at = (aw.y1 + aw.y2) / 2;
                    var ar = Math.sqrt((ak - al) * (ak - al) + (at - av) * (at - av));
                    if (!e || e && ar < aq) {
                        e = aw;
                        aq = ar
                    }
                }
            }
            if (e) {
                var an = null;
                var ay = af.originGraph.clone();
                k = ay.isAcyclicFromVertex(af.originGraph.getVertex(e.index), af.originGraph.getVertex(r.index));
                k ? an = "#90EE90" : an = "#FF8AA7";
                v.attr({fill: an});
                e.textNode.attr({fill: an})
            }
        }
    };
    var n = function (h, r) {
        var c = new TRAVizVertex(af.originGraph, af.originGraph.config.getVertexIndex());
        af.originGraph.addVertex(c);
        for (var j = 0; j < h.sources.length; j++) {
            if (h.sources[j].sourceId == r) {
                c.sources.push(h.sources[j]);
                c.token = h.sources[j].token;
                h.sources.splice(j, 1);
                break
            }
        }
        h.count--;
        var k = af.sentencePaths[r];
        for (var j = 0; j < k.length; j++) {
            if (k[j].index == h.index) {
                k[j] = c;
                break
            }
        }
        af.reset();
        af.visualize()
    };
    var I = function (r, s, v) {
        var c = false;
        r.connections = [];
        var e = function () {
            for (var w = 0; w < af.basicConnections.length; w++) {
                $(af.basicConnections[w].node).css("display", "none")
            }
            for (var w = 0; w < af.vertexConnections.length; w++) {
                $(af.vertexConnections[w].node).remove()
            }
            af.displayVertexConnections(r, s, v);
            if (s.transpositions) {
                for (var w = 0; w < s.transpositions.length; w++) {
                    $(s.transpositions[w].node).css("display", "block")
                }
                for (var w = 0; w < s.transpositionGroup.length; w++) {
                    $(s.transpositionGroup[w].rect.node).attr({stroke: "#000", "stroke-width": 1, opacity: "1.0"})
                }
            }
        };
        var h = function () {
            for (var w = 0; w < af.vertexConnections.length; w++) {
                $(af.vertexConnections[w].node).remove()
            }
            for (var w = 0; w < af.basicConnections.length; w++) {
                $(af.basicConnections[w].node).css("display", "block")
            }
            if (s.transpositions) {
                for (var w = 0; w < s.transpositions.length; w++) {
                    $(s.transpositions[w].node).css("display", "none")
                }
                for (var w = 0; w < s.transpositionGroup.length; w++) {
                    $(s.transpositionGroup[w].rect.node).attr({stroke: "none"})
                }
            }
        };
        $(r).mouseenter(function () {
            e()
        });
        $(r).mouseleave(function () {
            h()
        });
        if (af.config.options.splitAndMerge) {
            $(r).mousedown(function (w) {
                C(w, r, s)
            })
        }
        var k = "<table>";
        k += "<tr><th style='padding:5px;text-align:right;'>Figure</th><th style='padding:5px;text-align:right;'>Episode</th></tr>";
        for (var j = 0; j < s.sources.length; j++) {
            k += "<tr>";
            k += "<td style='padding:5px;text-align:right;color:" + af.colorMap[af.editions[s.sources[j].sourceId]] + ";'>" + af.editions[s.sources[j].sourceId] + "</td>";
            k += "<td style='padding:5px;text-align:left;color:" + af.colorMap[af.editions[s.sources[j].sourceId]] + ";'>" + s.sources[j].token + "</td>";
            if (af.config.options.splitAndMerge && s.sources.length > 1) {
                k += "<td><div title='Remove token and create new branch!' name=" + s.sources[j].sourceId + " class='unlink unlink" + s.index + "'/></td>"
            }
            k += "</tr>"
        }
        k += "</table>";
        $(r).qtip({
            content: {
                text: k,
                title: {
                    text: '<div>"' + s.token + '": ' + s.sources.length + "&nbsp;" + af.config.options.popupLabel + "</div>",
                    button: "X"
                }
            },
            style: {tip: true, border: {width: 0, radius: 4}},
            position: {corner: {tooltip: "topMiddle", target: "bottomMiddle"}},
            show: {when: "click", solo: true},
            hide: {when: {event: "click"}},
            api: {
                onShow: function () {
                    $("[qtip='" + this.id + "']").addClass("trailsQtip");
                    $("[qtip='" + this.id + "']").mouseenter(function () {
                        e()
                    });
                    $("[qtip='" + this.id + "']").mouseleave(function () {
                        h()
                    });
                    if ($(".qtip-content", "[qtip='" + this.id + "']").height() > 200) {
                        $(".qtip-content", "[qtip='" + this.id + "']").css("height", "200px");
                        $(".qtip-content", "[qtip='" + this.id + "']").css("overflow", "auto")
                    }
                    if (!c) {
                        var w = $(".unlink" + s.index);
                        if (w.length > 0) {
                            for (var x = 0; x < w.length; x++) {
                                $(w[x]).click(function () {
                                    n(af.originGraph.getVertex(s.index), $(this).attr("name"))
                                })
                            }
                            c = true
                        }
                    }
                }, onHide: function () {
                    h()
                }
            }
        })
    };
    var d = $("<label/>").appendTo("body");
    var O = new Date();
    this.layout = [];
    var o = 0;
    for (var ae = 0; ae < this.vertices.length; ae++) {
        if (this.vertices[ae].count > o) {
            o = this.vertices[ae].count
        }
    }
    for (var ae = 0; ae < J.length; ae++) {
        S = 0;
        var ad = 0, ac = J[ae].length;
        if (ae > 0) {
            ad++;
            ac--
        }
        var a = 0, b = 0;
        var q = [12, 17, 23, 30, 38, 47, 57];
        for (ad; ad < ac; ad++) {
            var U = J[ae][ad];
            var F = this.config.options.fontSizeMin + this.config.options.fontSizeIncrease * (U.count - 1);
            if (this.config.options.interpolateFontSize) {
                F = this.config.options.fontSizeMin + (U.count - 1) / (o - 1) * (this.config.options.fontSizeMax - this.config.options.fontSizeMin)
            }
            $(d).html(U.token);
            $(d).css("font", F + "px " + this.config.options.font);
            U.x1 = S;
            if (U.count <= this.config.options.collapseLabels) {
                $(d).html("M")
            }
            var H = $(d).width() + 6;
            var l = $(d).height();
            U.boxWidth = H;
            U.boxHeight = l;
            U.x2 = H + S;
            U.y1 = R - l / 2;
            U.y2 = R + l / 2;
            a += H;
            if (ad > 0) {
                a += m
            }
            if (l > b) {
                b = l
            }
            this.layout.push(U)
        }
        aa.push(b)
    }
    $(d).remove();
    this.setXFlow();
    var K = $("<div id='TRAVizPaperDiv" + this.div + "'/>").appendTo("#" + this.div);
    var Z = Raphael("TRAVizPaperDiv" + this.div, 10000, 10000);
    this.layout = [];
    this.layers = [];
    var Q = 0;
    for (var ae = 0; ae < J[0].length; ae++) {
        this.layout.push(J[0][ae]);
        J[0][ae].layer = 0;
        if (J[0][ae].boxHeight > Q) {
            Q = J[0][ae].boxHeight
        }
    }
    this.layers.push({index: 0, height: Q, vertices: []});
    this.getYLayer = function (w, e, h, r) {
        var c = e;
        if (Math.abs(w) > Math.abs(e)) {
            c = w
        }
        var s = c;
        var k = function (x) {
            if (typeof x != "undefined") {
                if (x > 0) {
                    x *= -1
                } else {
                    x = x * -1 + 1
                }
                c = s + x
            } else {
                x = 0
            }
            if (!r && c == 0) {
                k(x)
            } else {
                var y = false;
                for (var v = 0; v < af.layout.length; v++) {
                    if (af.layout[v].layer == c) {
                        if (!(af.layout[v].x1 > h.x2 || h.x1 > af.layout[v].x2)) {
                            y = true;
                            break
                        }
                    }
                }
                if (y) {
                    k(x)
                }
            }
        };
        k();
        var j = this.getLayer(c);
        if (!j) {
            j = {index: c, height: 0, vertices: []};
            this.layers.push(j)
        }
        if (Math.abs(h.y2 - h.y1) > j.height) {
            j.height = Math.abs(h.y2 - h.y1)
        }
        return c
    };
    for (var ae = 1; ae < J.length; ae++) {
        var Y = J[ae];
        var X = Y[0];
        var ah = Y[Y.length - 1];
        var aj = Y[1];
        var G = Y[Y.length - 2];
        var A = new TRAVizVertex();
        A.x1 = aj.x1 - m;
        A.x2 = G.x2 + m;
        A.y1 = (X.y1 + X.y2) / 2 - aa[ae] / 2;
        A.y2 = (X.y1 + X.y2) / 2 + aa[ae] / 2;
        A.token = aj.token;
        var R = this.getYLayer(X.layer, ah.layer, A);
        for (var ad = 1; ad < Y.length - 1; ad++) {
            Y[ad].layer = R;
            this.layout.push(Y[ad])
        }
    }
    if (this.config.options.lineBreaks) {
        this.insertDummys()
    }
    var L = this.layers.length;
    for (var ae = 0; ae < this.vertices.length; ae++) {
        var U = this.vertices[ae];
        if (typeof U.level == "undefined") {
            U.level = 0
        }
        var B = this.getLayer(U.layer);
        U.originLayer = B.index;
        for (var ad = 0; ad < B.vertices.length; ad++) {
            if (B.vertices[ad] == U) {
                B.vertices.splice(ad, 1);
                break
            }
        }
        U.layer += U.level * L;
        var f = this.getLayer(U.layer);
        if (!f) {
            f = {index: U.layer, height: 0, vertices: []};
            this.layers.push(f)
        }
        if (Math.abs(U.y2 - U.y1) > f.height) {
            f.height = Math.abs(U.y2 - U.y1)
        }
        f.vertices.push(U)
    }
    var N = function (e, c) {
        if (e.index < c.index) {
            return -1
        }
        return 1
    };
    this.layers.sort(N);
    var P = 0;
    for (var ae = 0; ae < this.layers.length; ae++) {
        if (this.layers[ae].vertices.length > 0) {
            this.layers[ae].level = this.layers[ae].vertices[0].level;
            P = this.layers[ae].level
        } else {
            this.layers[ae].level = P
        }
    }
    this.setConnections();
    this.removeOverlaps();
    this.transformEdgeTypes();
    if (this.config.options.lineBreaks && this.config.options.lineNumbering) {
        for (var ae = 0; ae < this.layout.length; ae++) {
            var U = this.layout[ae];
            U.y1 += (U.level + 1) * 26;
            U.y2 += (U.level + 1) * 26
        }
        for (var ae = 0; ae < this.connections.length; ae++) {
            var U = this.connections[ae].v1;
            for (var ad = 0; ad < this.connections[ae].links.length; ad++) {
                this.connections[ae].links[ad].y1 += (U.level + 1) * 26;
                this.connections[ae].links[ad].y2 += (U.level + 1) * 26
            }
        }
        for (var ae = 0; ae < this.layers.length; ae++) {
            this.layers[ae].yLevel += (this.layers[ae].level + 1) * 26
        }
    }
    var p = false;
    for (var ae = 0; ae < this.startVertex.successors.length; ae++) {
        var D = this.graph.getVertex(this.startVertex.successors[ae]);
        if (!p || D.x1 - 4 * this.curveRadius < p) {
            p = D.x1 - 4 * this.curveRadius
        }
    }
    this.startVertex.x1 = p;
    this.startVertex.x2 = p;
    for (var ae = 0; ae < this.startVertex.successors.length; ae++) {
        var ai = this.getConnection(this.startVertex, this.graph.getVertex(this.startVertex.successors[ae]));
        if (ai.type == 1 && ai.links[0].type == "source") {
            ai.links[0].x1 = p + this.curveRadius;
            ai.links[0].x2 = p + this.curveRadius
        } else {
            if (ai.type == 3 || ai.type == 0) {
                ai.links[0].x1 = p + this.curveRadius;
                ai.links[0].x2 = p + this.curveRadius;
                ai.links[1].x1 = p + 2 * this.curveRadius
            }
        }
    }
    var E = 0;
    for (var ae = 0; ae < this.endVertex.predecessors.length; ae++) {
        var V = this.graph.getVertex(this.endVertex.predecessors[ae]);
        if (V.x2 + 4 * this.curveRadius > E) {
            E = V.x2 + 4 * this.curveRadius
        }
    }
    this.endVertex.x1 = E;
    this.endVertex.x2 = E;
    for (var ae = 0; ae < this.endVertex.predecessors.length; ae++) {
        var ai = this.getConnection(this.graph.getVertex(this.endVertex.predecessors[ae]), this.endVertex);
        if (ai.type == 1 && ai.links[0].type == "sink") {
            ai.links[0].x1 = E - this.curveRadius;
            ai.links[0].x2 = E - this.curveRadius
        } else {
            if (ai.type == 3 || ai.type == 0) {
                ai.links[2].x1 = E - this.curveRadius;
                ai.links[2].x2 = E - this.curveRadius;
                ai.links[1].x2 = E - 2 * this.curveRadius
            }
        }
    }
    var g = false, M = false;
    var ab = false, t = false;
    if (this.config.options.rtl) {
        for (var ae = 0; ae < this.layout.length; ae++) {
            this.layout[ae].x1 *= -1;
            this.layout[ae].x2 *= -1
        }
        for (var ae = 0; ae < this.connections.length; ae++) {
            for (var ad = 0; ad < this.connections[ae].links.length; ad++) {
                this.connections[ae].links[ad].x1 *= -1;
                this.connections[ae].links[ad].x2 *= -1
            }
        }
    }
    for (var ae = 0; ae < this.layout.length; ae++) {
        var U = this.layout[ae];
        if (!g || U.x1 < g) {
            g = U.x1
        }
        if (!M || U.x2 > M) {
            M = U.x2
        }
        if (!ab || U.y1 < ab) {
            ab = U.y1
        }
        if (!t || U.y2 > t) {
            t = U.y2
        }
    }
    ab -= 3 * this.curveRadius;
    t += 3 * this.curveRadius + 40;
    g -= 3 * this.curveRadius;
    M += 3 * this.curveRadius;
    if (this.config.options.lineBreaks && this.config.options.lineNumbering) {
        ab -= 26
    }
    var T = M - g;
    var ag = t - ab;
    if (this.config.options.lineBreaks) {
        T = $("#" + this.div).width()
    }
    this.paper = Z;
    for (var ae = 0; ae < this.layout.length; ae++) {
        var U = this.layout[ae];
        U.y1 -= ab;
        U.y2 -= ab;
        if (!this.config.options.lineBreaks) {
            U.x1 -= g;
            U.x2 -= g
        }
    }
    for (var ae = 0; ae < this.connections.length; ae++) {
        for (var ad = 0; ad < this.connections[ae].links.length; ad++) {
            this.connections[ae].links[ad].y1 -= ab;
            this.connections[ae].links[ad].y2 -= ab;
            if (!this.config.options.lineBreaks) {
                this.connections[ae].links[ad].x1 -= g;
                this.connections[ae].links[ad].x2 -= g
            }
        }
    }
    Z.setSize(T + "px", ag + "px");
    for (var ae = 0; ae < this.layers.length; ae++) {
        this.layers[ae].yLevel -= ab
    }
    if (this.config.options.transpositions) {
        this.calculateTranspositions()
    }
    for (var ae = 0; ae < this.layout.length; ae++) {
        var U = this.layout[ae];
        if (U != this.startVertex && U != this.endVertex && U.token != "" && this.config.options.vertexBackground) {
            if (U.count > this.config.options.collapseLabels) {
                U.rect = Z.rect(U.x1 + 3, U.y1, U.x2 - U.x1 - 6, U.y2 - U.y1, 5).attr({
                    fill: this.config.options.vertexBackground,
                    stroke: "none"
                })
            } else {
                U.rect = Z.rect(U.x1 + 3, U.y1, U.x2 - U.x1 - 6, U.y2 - U.y1, 5).attr({
                    title: U.token,
                    fill: this.config.options.vertexBackground,
                    stroke: "none"
                })
            }
        }
        if (U.count > this.config.options.collapseLabels) {
            var F = this.config.options.fontSizeMin + this.config.options.fontSizeIncrease * (U.count - 1);
            if (this.config.options.interpolateFontSize) {
                F = this.config.options.fontSizeMin + (U.count - 1) / (o - 1) * (this.config.options.fontSizeMax - this.config.options.fontSizeMin)
            }
            U.fs = F;
            U.textNode = Z.text((U.x1 + U.x2) / 2, (U.y1 + U.y2) / 2, U.token).attr({
                font: F + "px " + this.config.options.font,
                fill: this.config.options.baseColor,
                "text-anchor": "middle",
                cursor: "pointer"
            });
            I(U.textNode.node, U, Z);
            $(U.textNode.node).css({
                "-webkit-touch-callout": "none",
                "-webkit-user-select": "none",
                "-khtml-user-select": "none",
                "-moz-user-select": "none",
                "-ms-user-select": "none",
                "user-select": "none",
            })
        }
    }
    this.edgeGroups = [];
    this.basicConnections = [];
    this.vertexConnections = [];
    if (this.config.options.connectionType == "majority") {
        this.majorityConnections(true)
    } else {
        if (this.config.options.connectionType == "all") {
            this.majorityConnections(false)
        } else {
            this.generalConnections()
        }
    }
    if (this.config.options.editionLabels) {
        this.computeEdgeLabels()
    }
    if (this.config.options.startAndEnd) {
        Z.circle(this.startVertex.x1, this.startVertex.y1, 4).attr({fill: this.config.options.baseColor});
        Z.rect(this.endVertex.x1, this.endVertex.y1 - 4, 8, 8).attr({fill: this.config.options.baseColor})
    }
    if (this.config.options.lineBreaks && this.config.options.lineNumbering) {
        this.insertLineNumbering(T, m)
    }
    $("<a class='TRAViz-copyright-link' target=_blank href='http://traviz.vizcovery.org'><div class='TRAViz-copyright'></div></a>").appendTo($("#" + this.div))
};
function TRAVizConfig(a) {
    this.options = {
        colors: ["red", "blue", "green", "rgb(230,230,0)", "orange", "#996600", "purple", "#FF00FF", "#66FFFF", "#339999"],
        normalize: true,
        lineBreaks: true,
        lineNumbering: true,
        lineNumberingText: "Line ",
        rtl: false,
        popupLabel: "occurrences",
        optimizedAlignment: true,
        editionLabels: true,
        baseColor: "#3E576F",
        vertexBackground: "rgba(242,242,242,0.75)",
        font: "Georgia",
        startAndEnd: true,
        collapseLabels: 0,
        interpolateFontSize: false,
        fontSizeMin: 10,
        fontSizeMax: 50,
        fontSizeIncrease: 4,
        edgeGap: 5,
        curveRadius: 10,
        connectionType: "all",
        majorityPercentage: 0.5,
        editDistance: false,
        splitAndMerge: true,
        transpositions: true,
    };
    if (typeof a != "undefined") {
        $.extend(this.options, a)
    }
}
TRAVizConfig.prototype.getVertexIndex = function () {
    if (typeof this.vid == "undefined") {
        this.vid = 0
    }
    return ++this.vid
};
TRAVizConfig.prototype.Hsv2rgb = function (d, o, l) {
    var c, e, k;
    var j = d * 6;
    if (j == 6) {
        j = 0
    }
    var f = Math.floor(j);
    var a = l * (1 - o);
    var n = l * (1 - o * (j - f));
    var m = l * (1 - o * (1 - (j - f)));
    if (f == 0) {
        var_r = l;
        var_g = m;
        var_b = a
    } else {
        if (f == 1) {
            var_r = n;
            var_g = l;
            var_b = a
        } else {
            if (f == 2) {
                var_r = a;
                var_g = l;
                var_b = m
            } else {
                if (f == 3) {
                    var_r = a;
                    var_g = n;
                    var_b = l
                } else {
                    if (f == 4) {
                        var_r = m;
                        var_g = a;
                        var_b = l
                    } else {
                        var_r = l;
                        var_g = a;
                        var_b = n
                    }
                }
            }
        }
    }
    return "rgb(" + Math.round(var_r * 255) + "," + Math.round(var_g * 255) + "," + Math.round(var_b * 255) + ")"
};
TRAVizConfig.prototype.getColors = function (b) {
    var a = [];
    for (var c = 0; c < b; c++) {
        if (c >= this.options.colors.length) {
            a.push(this.Hsv2rgb(((Math.random() * 360) + 1) / 360, 1, (25 + (Math.random() * 50) + 1) / 100))
        } else {
            a.push(this.options.colors[c])
        }
    }
    return a
};