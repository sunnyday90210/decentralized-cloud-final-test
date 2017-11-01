function dropdownEffectData(e) {
  var t = null,
    n = null,
    i = $(e),
    r = $(".dropdown-menu", e),
    o = i.parents("ul.nav");
  return o.height > 0 && (t = o.data("dropdown-in") || null, n = o.data("dropdown-out") || null), {
    target: e,
    dropdown: i,
    dropdownMenu: r,
    effectIn: r.data("dropdown-in") || t,
    effectOut: r.data("dropdown-out") || n
  }
}

function dropdownEffectStart(e, t) {
  t && (e.dropdown.addClass("dropdown-animating"), e.dropdownMenu.addClass("animated"), e.dropdownMenu.addClass(t))
}

function dropdownEffectEnd(e, t) {
  e.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
    e.dropdown.removeClass("dropdown-animating"), e.dropdownMenu.removeClass("animated"), e.dropdownMenu.removeClass(e.effectIn), e.dropdownMenu.removeClass(e.effectOut), "function" == typeof t && t()
  })
}

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function get_social_counts() {
  var e = window.location.protocol + "//" + window.location.host + window.location.pathname;
  $.ajax({
    type: "GET",
    url: "https://mdbootstrap.com/wp-content/themes/mdbootstrap4/inc/get_social_counts.php?thisurl=" + e,
    dataType: "json",
    success: function (e) {
      var t = document.getElementById("dom-target-fb"),
        n = t.textContent,
        t = document.getElementById("dom-target-tw"),
        i = t.textContent,
        t = document.getElementById("dom-target-gp"),
        r = t.textContent,
        o = 1 * n.valueOf() + e.facebook,
        a = 1 * i.valueOf() + e.twitter,
        s = 1 * r.valueOf() + e.gplus;
      o > 0 ? $("#facebook-span").text(o) : $("#facebook-span").hide(), $("#twitter-span").html(a), $("#gplus-span").html(s)
    }
  })
}

function loadTemplatesBy(e, t) {
  $.post(ajax_object.ajaxurl, {
    action: "ajax_action",
    category: e
  }, function (t) {
    console.log(e), $("#products").html(t)
  })
}! function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";

  function n(e, t) {
    t = t || te;
    var n = t.createElement("script");
    n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
  }

  function i(e) {
    var t = !!e && "length" in e && e.length,
      n = he.type(e);
    return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }

  function r(e, t, n) {
    return he.isFunction(t) ? he.grep(e, function (e, i) {
      return !!t.call(e, i, e) !== n
    }) : t.nodeType ? he.grep(e, function (e) {
      return e === t !== n
    }) : "string" != typeof t ? he.grep(e, function (e) {
      return ae.call(t, e) > -1 !== n
    }) : xe.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function (e) {
      return ae.call(t, e) > -1 !== n && 1 === e.nodeType
    }))
  }

  function o(e, t) {
    for (;
      (e = e[t]) && 1 !== e.nodeType;);
    return e
  }

  function a(e) {
    var t = {};
    return he.each(e.match(_e) || [], function (e, n) {
      t[n] = !0
    }), t
  }

  function s(e) {
    return e
  }

  function l(e) {
    throw e
  }

  function c(e, t, n) {
    var i;
    try {
      e && he.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && he.isFunction(i = e.then) ? i.call(e, t, n) : t.call(void 0, e)
    } catch (e) {
      n.call(void 0, e)
    }
  }

  function u() {
    te.removeEventListener("DOMContentLoaded", u), e.removeEventListener("load", u), he.ready()
  }

  function d() {
    this.expando = he.expando + d.uid++
  }

  function f(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Pe.test(e) ? JSON.parse(e) : e)
  }

  function h(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType)
      if (i = "data-" + t.replace(Me, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
        try {
          n = f(n)
        } catch (e) {}
        Oe.set(e, t, n)
      } else n = void 0;
    return n
  }

  function p(e, t, n, i) {
    var r, o = 1,
      a = 20,
      s = i ? function () {
        return i.cur()
      } : function () {
        return he.css(e, t, "")
      },
      l = s(),
      c = n && n[3] || (he.cssNumber[t] ? "" : "px"),
      u = (he.cssNumber[t] || "px" !== c && +l) && Ne.exec(he.css(e, t));
    if (u && u[3] !== c) {
      c = c || u[3], n = n || [], u = +l || 1;
      do {
        o = o || ".5", u /= o, he.style(e, t, u + c)
      } while (o !== (o = s() / l) && 1 !== o && --a)
    }
    return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
  }

  function m(e) {
    var t, n = e.ownerDocument,
      i = e.nodeName,
      r = He[i];
    return r ? r : (t = n.body.appendChild(n.createElement(i)), r = he.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), He[i] = r, r)
  }

  function g(e, t) {
    for (var n, i, r = [], o = 0, a = e.length; o < a; o++) i = e[o], i.style && (n = i.style.display, t ? ("none" === n && (r[o] = De.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && Re(i) && (r[o] = m(i))) : "none" !== n && (r[o] = "none", De.set(i, "display", n)));
    for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
    return e
  }

  function v(e, t) {
    var n;
    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && he.nodeName(e, t) ? he.merge([e], n) : n
  }

  function y(e, t) {
    for (var n = 0, i = e.length; n < i; n++) De.set(e[n], "globalEval", !t || De.get(t[n], "globalEval"))
  }

  function b(e, t, n, i, r) {
    for (var o, a, s, l, c, u, d = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
      if ((o = e[h]) || 0 === o)
        if ("object" === he.type(o)) he.merge(f, o.nodeType ? [o] : o);
        else if (qe.test(o)) {
      for (a = a || d.appendChild(t.createElement("div")), s = (je.exec(o) || ["", ""])[1].toLowerCase(), l = ze[s] || ze._default, a.innerHTML = l[1] + he.htmlPrefilter(o) + l[2], u = l[0]; u--;) a = a.lastChild;
      he.merge(f, a.childNodes), a = d.firstChild, a.textContent = ""
    } else f.push(t.createTextNode(o));
    for (d.textContent = "", h = 0; o = f[h++];)
      if (i && he.inArray(o, i) > -1) r && r.push(o);
      else if (c = he.contains(o.ownerDocument, o), a = v(d.appendChild(o), "script"), c && y(a), n)
      for (u = 0; o = a[u++];) Be.test(o.type || "") && n.push(o);
    return d
  }

  function x() {
    return !0
  }

  function w() {
    return !1
  }

  function C() {
    try {
      return te.activeElement
    } catch (e) {}
  }

  function T(e, t, n, i, r, o) {
    var a, s;
    if ("object" == typeof t) {
      "string" != typeof n && (i = i || n, n = void 0);
      for (s in t) T(e, s, n, i, t[s], o);
      return e
    }
    if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = w;
    else if (!r) return e;
    return 1 === o && (a = r, r = function (e) {
      return he().off(e), a.apply(this, arguments)
    }, r.guid = a.guid || (a.guid = he.guid++)), e.each(function () {
      he.event.add(this, t, r, i, n)
    })
  }

  function k(e, t) {
    return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
  }

  function _(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function S(e) {
    var t = Ke.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function E(e, t) {
    var n, i, r, o, a, s, l, c;
    if (1 === t.nodeType) {
      if (De.hasData(e) && (o = De.access(e), a = De.set(t, o), c = o.events)) {
        delete a.handle, a.events = {};
        for (r in c)
          for (n = 0, i = c[r].length; n < i; n++) he.event.add(t, r, c[r][n])
      }
      Oe.hasData(e) && (s = Oe.access(e), l = he.extend({}, s), Oe.set(t, l))
    }
  }

  function A(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && Ve.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
  }

  function I(e, t, i, r) {
    t = re.apply([], t);
    var o, a, s, l, c, u, d = 0,
      f = e.length,
      h = f - 1,
      p = t[0],
      m = he.isFunction(p);
    if (m || f > 1 && "string" == typeof p && !fe.checkClone && Qe.test(p)) return e.each(function (n) {
      var o = e.eq(n);
      m && (t[0] = p.call(this, n, o.html())), I(o, t, i, r)
    });
    if (f && (o = b(t, e[0].ownerDocument, !1, e, r), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || r)) {
      for (s = he.map(v(o, "script"), _), l = s.length; d < f; d++) c = o, d !== h && (c = he.clone(c, !0, !0), l && he.merge(s, v(c, "script"))), i.call(e[d], c, d);
      if (l)
        for (u = s[s.length - 1].ownerDocument, he.map(s, S), d = 0; d < l; d++) c = s[d], Be.test(c.type || "") && !De.access(c, "globalEval") && he.contains(u, c) && (c.src ? he._evalUrl && he._evalUrl(c.src) : n(c.textContent.replace(Ze, ""), u))
    }
    return e
  }

  function D(e, t, n) {
    for (var i, r = t ? he.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || he.cleanData(v(i)), i.parentNode && (n && he.contains(i.ownerDocument, i) && y(v(i, "script")), i.parentNode.removeChild(i));
    return e
  }

  function O(e, t, n) {
    var i, r, o, a, s = e.style;
    return n = n || tt(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || he.contains(e.ownerDocument, e) || (a = he.style(e, t)), !fe.pixelMarginRight() && et.test(a) && Je.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
  }

  function P(e, t) {
    return {
      get: function () {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
      }
    }
  }

  function M(e) {
    if (e in at) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = ot.length; n--;)
      if ((e = ot[n] + t) in at) return e
  }

  function L(e, t, n) {
    var i = Ne.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
  }

  function N(e, t, n, i, r) {
    var o, a = 0;
    for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += he.css(e, n + Fe[o], !0, r)), i ? ("content" === n && (a -= he.css(e, "padding" + Fe[o], !0, r)), "margin" !== n && (a -= he.css(e, "border" + Fe[o] + "Width", !0, r))) : (a += he.css(e, "padding" + Fe[o], !0, r), "padding" !== n && (a += he.css(e, "border" + Fe[o] + "Width", !0, r)));
    return a
  }

  function F(e, t, n) {
    var i, r = !0,
      o = tt(e),
      a = "border-box" === he.css(e, "boxSizing", !1, o);
    if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]), i <= 0 || null == i) {
      if (i = O(e, t, o), (i < 0 || null == i) && (i = e.style[t]), et.test(i)) return i;
      r = a && (fe.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
    }
    return i + N(e, t, n || (a ? "border" : "content"), r, o) + "px"
  }

  function R(e, t, n, i, r) {
    return new R.prototype.init(e, t, n, i, r)
  }

  function W() {
    lt && (e.requestAnimationFrame(W), he.fx.tick())
  }

  function H() {
    return e.setTimeout(function () {
      st = void 0
    }), st = he.now()
  }

  function V(e, t) {
    var n, i = 0,
      r = {
        height: e
      };
    for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Fe[i], r["margin" + n] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r
  }

  function j(e, t, n) {
    for (var i, r = (q.tweeners[t] || []).concat(q.tweeners["*"]), o = 0, a = r.length; o < a; o++)
      if (i = r[o].call(n, t, e)) return i
  }

  function B(e, t, n) {
    var i, r, o, a, s, l, c, u, d = "width" in t || "height" in t,
      f = this,
      h = {},
      p = e.style,
      m = e.nodeType && Re(e),
      v = De.get(e, "fxshow");
    n.queue || (a = he._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
      a.unqueued || s()
    }), a.unqueued++, f.always(function () {
      f.always(function () {
        a.unqueued--, he.queue(e, "fx").length || a.empty.fire()
      })
    }));
    for (i in t)
      if (r = t[i], ct.test(r)) {
        if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
          if ("show" !== r || !v || void 0 === v[i]) continue;
          m = !0
        }
        h[i] = v && v[i] || he.style(e, i)
      }
    if ((l = !he.isEmptyObject(t)) || !he.isEmptyObject(h)) {
      d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = v && v.display, null == c && (c = De.get(e, "display")), u = he.css(e, "display"), "none" === u && (c ? u = c : (g([e], !0), c = e.style.display || c, u = he.css(e, "display"), g([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === he.css(e, "float") && (l || (f.done(function () {
        p.display = c
      }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function () {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
      })), l = !1;
      for (i in h) l || (v ? "hidden" in v && (m = v.hidden) : v = De.access(e, "fxshow", {
        display: c
      }), o && (v.hidden = !m), m && g([e], !0), f.done(function () {
        m || g([e]), De.remove(e, "fxshow");
        for (i in h) he.style(e, i, h[i])
      })), l = j(m ? v[i] : 0, i, f), i in v || (v[i] = l.start, m && (l.end = l.start, l.start = 0))
    }
  }

  function z(e, t) {
    var n, i, r, o, a;
    for (n in e)
      if (i = he.camelCase(n), r = t[i], o = e[n], he.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = he.cssHooks[i]) && "expand" in a) {
        o = a.expand(o), delete e[i];
        for (n in o) n in e || (e[n] = o[n], t[n] = r)
      } else t[i] = r
  }

  function q(e, t, n) {
    var i, r, o = 0,
      a = q.prefilters.length,
      s = he.Deferred().always(function () {
        delete l.elem
      }),
      l = function () {
        if (r) return !1;
        for (var t = st || H(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; a < l; a++) c.tweens[a].run(o);
        return s.notifyWith(e, [c, o, n]), o < 1 && l ? n : (s.resolveWith(e, [c]), !1)
      },
      c = s.promise({
        elem: e,
        props: he.extend({}, t),
        opts: he.extend(!0, {
          specialEasing: {},
          easing: he.easing._default
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: st || H(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = he.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
          return c.tweens.push(i), i
        },
        stop: function (t) {
          var n = 0,
            i = t ? c.tweens.length : 0;
          if (r) return this;
          for (r = !0; n < i; n++) c.tweens[n].run(1);
          return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
        }
      }),
      u = c.props;
    for (z(u, c.opts.specialEasing); o < a; o++)
      if (i = q.prefilters[o].call(c, e, u, c.opts)) return he.isFunction(i.stop) && (he._queueHooks(c.elem, c.opts.queue).stop = he.proxy(i.stop, i)), i;
    return he.map(u, j, c), he.isFunction(c.opts.start) && c.opts.start.call(e, c), he.fx.timer(he.extend(l, {
      elem: e,
      anim: c,
      queue: c.opts.queue
    })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
  }

  function $(e) {
    return (e.match(_e) || []).join(" ")
  }

  function Y(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function U(e, t, n, i) {
    var r;
    if (he.isArray(t)) he.each(t, function (t, r) {
      n || bt.test(e) ? i(e, r) : U(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
    });
    else if (n || "object" !== he.type(t)) i(e, t);
    else
      for (r in t) U(e + "[" + r + "]", t[r], n, i)
  }

  function X(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var i, r = 0,
        o = t.toLowerCase().match(_e) || [];
      if (he.isFunction(n))
        for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
    }
  }

  function G(e, t, n, i) {
    function r(s) {
      var l;
      return o[s] = !0, he.each(e[s] || [], function (e, s) {
        var c = s(t, n, i);
        return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
      }), l
    }
    var o = {},
      a = e === St;
    return r(t.dataTypes[0]) || !o["*"] && r("*")
  }

  function Q(e, t) {
    var n, i, r = he.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && he.extend(!0, e, i), e
  }

  function K(e, t, n) {
    for (var i, r, o, a, s = e.contents, l = e.dataTypes;
      "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    if (i)
      for (r in s)
        if (s[r] && s[r].test(i)) {
          l.unshift(r);
          break
        }
    if (l[0] in n) o = l[0];
    else {
      for (r in n) {
        if (!l[0] || e.converters[r + " " + l[0]]) {
          o = r;
          break
        }
        a || (a = r)
      }
      o = o || a
    }
    if (o) return o !== l[0] && l.unshift(o), n[o]
  }

  function Z(e, t, n, i) {
    var r, o, a, s, l, c = {},
      u = e.dataTypes.slice();
    if (u[1])
      for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
    for (o = u.shift(); o;)
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
        if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
      if (!(a = c[l + " " + o] || c["* " + o]))
        for (r in c)
          if (s = r.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
            a === !0 ? a = c[r] : c[r] !== !0 && (o = s[0], u.unshift(s[1]));
            break
          }
      if (a !== !0)
        if (a && e.throws) t = a(t);
        else try {
          t = a(t)
        } catch (e) {
          return {
            state: "parsererror",
            error: a ? e : "No conversion from " + l + " to " + o
          }
        }
    }
    return {
      state: "success",
      data: t
    }
  }

  function J(e) {
    return he.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }
  var ee = [],
    te = e.document,
    ne = Object.getPrototypeOf,
    ie = ee.slice,
    re = ee.concat,
    oe = ee.push,
    ae = ee.indexOf,
    se = {},
    le = se.toString,
    ce = se.hasOwnProperty,
    ue = ce.toString,
    de = ue.call(Object),
    fe = {},
    he = function (e, t) {
      return new he.fn.init(e, t)
    },
    pe = function (e, t) {
      return t.toUpperCase()
    };
  he.fn = he.prototype = {
    jquery: "3.1.1",
    constructor: he,
    length: 0,
    toArray: function () {
      return ie.call(this)
    },
    get: function (e) {
      return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
    },
    pushStack: function (e) {
      var t = he.merge(this.constructor(), e);
      return t.prevObject = this, t
    },
    each: function (e) {
      return he.each(this, e)
    },
    map: function (e) {
      return this.pushStack(he.map(this, function (t, n) {
        return e.call(t, n, t)
      }))
    },
    slice: function () {
      return this.pushStack(ie.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq(-1)
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
    },
    end: function () {
      return this.prevObject || this.constructor()
    },
    push: oe,
    sort: ee.sort,
    splice: ee.splice
  }, he.extend = he.fn.extend = function () {
    var e, t, n, i, r, o, a = arguments[0] || {},
      s = 1,
      l = arguments.length,
      c = !1;
    for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || he.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
      if (null != (e = arguments[s]))
        for (t in e) n = a[t], i = e[t], a !== i && (c && i && (he.isPlainObject(i) || (r = he.isArray(i))) ? (r ? (r = !1, o = n && he.isArray(n) ? n : []) : o = n && he.isPlainObject(n) ? n : {}, a[t] = he.extend(c, o, i)) : void 0 !== i && (a[t] = i));
    return a
  }, he.extend({
    expando: "jQuery" + ("3.1.1" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
      throw new Error(e)
    },
    noop: function () {},
    isFunction: function (e) {
      return "function" === he.type(e)
    },
    isArray: Array.isArray,
    isWindow: function (e) {
      return null != e && e === e.window
    },
    isNumeric: function (e) {
      var t = he.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    },
    isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== le.call(e)) && (!(t = ne(e)) || "function" == typeof (n = ce.call(t, "constructor") && t.constructor) && ue.call(n) === de)
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[le.call(e)] || "object" : typeof e
    },
    globalEval: function (e) {
      n(e)
    },
    camelCase: function (e) {
      return e.replace(/^-ms-/, "ms-").replace(/-([a-z])/g, pe)
    },
    nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function (e, t) {
      var n, r = 0;
      if (i(e))
        for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
      else
        for (r in e)
          if (t.call(e[r], r, e[r]) === !1) break;
      return e
    },
    trim: function (e) {
      return null == e ? "" : (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (i(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)), n
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : ae.call(t, e, n)
    },
    merge: function (e, t) {
      for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
      return e.length = r, e
    },
    grep: function (e, t, n) {
      for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
      return i
    },
    map: function (e, t, n) {
      var r, o, a = 0,
        s = [];
      if (i(e))
        for (r = e.length; a < r; a++) null != (o = t(e[a], a, n)) && s.push(o);
      else
        for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
      return re.apply([], s)
    },
    guid: 1,
    proxy: function (e, t) {
      var n, i, r;
      if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return i = ie.call(arguments, 2), r = function () {
        return e.apply(t || this, i.concat(ie.call(arguments)))
      }, r.guid = e.guid = e.guid || he.guid++, r
    },
    now: Date.now,
    support: fe
  }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    se["[object " + t + "]"] = t.toLowerCase()
  });
  var me = function (e) {
    function t(e, t, n, i) {
      var r, o, a, s, l, u, f, h = t && t.ownerDocument,
        p = t ? t.nodeType : 9;
      if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
      if (!i && ((t ? t.ownerDocument || t : H) !== O && D(t), t = t || O, M)) {
        if (11 !== p && (l = me.exec(e)))
          if (r = l[1]) {
            if (9 === p) {
              if (!(a = t.getElementById(r))) return n;
              if (a.id === r) return n.push(a), n
            } else if (h && (a = h.getElementById(r)) && R(t, a) && a.id === r) return n.push(a), n
          } else {
            if (l[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
            if ((r = l[3]) && x.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(r)), n
          }
        if (x.qsa && !q[e + " "] && (!L || !L.test(e))) {
          if (1 !== p) h = t, f = e;
          else if ("object" !== t.nodeName.toLowerCase()) {
            for ((s = t.getAttribute("id")) ? s = s.replace(be, xe) : t.setAttribute("id", s = W), u = k(e), o = u.length; o--;) u[o] = "#" + s + " " + d(u[o]);
            f = u.join(","), h = ge.test(e) && c(t.parentNode) || t
          }
          if (f) try {
            return Q.apply(n, h.querySelectorAll(f)), n
          } catch (e) {} finally {
            s === W && t.removeAttribute("id")
          }
        }
      }
      return S(e.replace(oe, "$1"), t, n, i)
    }

    function n() {
      function e(n, i) {
        return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
      }
      var t = [];
      return e
    }

    function i(e) {
      return e[W] = !0, e
    }

    function r(e) {
      var t = O.createElement("fieldset");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function o(e, t) {
      for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
    }

    function a(e, t) {
      var n = t && e,
        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n)
        for (; n = n.nextSibling;)
          if (n === t) return -1;
      return e ? 1 : -1
    }

    function s(e) {
      return function (t) {
        return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ce(t) === e : t.disabled === e : "label" in t && t.disabled === e
      }
    }

    function l(e) {
      return i(function (t) {
        return t = +t, i(function (n, i) {
          for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
        })
      })
    }

    function c(e) {
      return e && void 0 !== e.getElementsByTagName && e
    }

    function u() {}

    function d(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i
    }

    function f(e, t, n) {
      var i = t.dir,
        r = t.next,
        o = r || i,
        a = n && "parentNode" === o,
        s = j++;
      return t.first ? function (t, n, r) {
        for (; t = t[i];)
          if (1 === t.nodeType || a) return e(t, n, r);
        return !1
      } : function (t, n, l) {
        var c, u, d, f = [V, s];
        if (l) {
          for (; t = t[i];)
            if ((1 === t.nodeType || a) && e(t, n, l)) return !0
        } else
          for (; t = t[i];)
            if (1 === t.nodeType || a)
              if (d = t[W] || (t[W] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
              else {
                if ((c = u[o]) && c[0] === V && c[1] === s) return f[2] = c[2];
                if (u[o] = f, f[2] = e(t, n, l)) return !0
              } return !1
      }
    }

    function h(e) {
      return e.length > 1 ? function (t, n, i) {
        for (var r = e.length; r--;)
          if (!e[r](t, n, i)) return !1;
        return !0
      } : e[0]
    }

    function p(e, n, i) {
      for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
      return i
    }

    function m(e, t, n, i, r) {
      for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
      return a
    }

    function g(e, t, n, r, o, a) {
      return r && !r[W] && (r = g(r)), o && !o[W] && (o = g(o, a)), i(function (i, a, s, l) {
        var c, u, d, f = [],
          h = [],
          g = a.length,
          v = i || p(t || "*", s.nodeType ? [s] : s, []),
          y = !e || !i && t ? v : m(v, f, e, s, l),
          b = n ? o || (i ? e : g || r) ? [] : a : y;
        if (n && n(y, b, s, l), r)
          for (c = m(b, h), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[h[u]] = !(y[h[u]] = d));
        if (i) {
          if (o || e) {
            if (o) {
              for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
              o(null, b = [], c, l)
            }
            for (u = b.length; u--;)(d = b[u]) && (c = o ? Z(i, d) : f[u]) > -1 && (i[c] = !(a[c] = d))
          }
        } else b = m(b === a ? b.splice(g, b.length) : b), o ? o(null, a, b, l) : Q.apply(a, b)
      })
    }

    function v(e) {
      for (var t, n, i, r = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = f(function (e) {
          return e === t
        }, a, !0), c = f(function (e) {
          return Z(t, e) > -1
        }, a, !0), u = [function (e, n, i) {
          var r = !o && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
          return t = null, r
        }]; s < r; s++)
        if (n = w.relative[e[s].type]) u = [f(h(u), n)];
        else {
          if (n = w.filter[e[s].type].apply(null, e[s].matches), n[W]) {
            for (i = ++s; i < r && !w.relative[e[i].type]; i++);
            return g(s > 1 && h(u), s > 1 && d(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace(oe, "$1"), n, s < i && v(e.slice(s, i)), i < r && v(e = e.slice(i)), i < r && d(e))
          }
          u.push(n)
        }
      return h(u)
    }

    function y(e, n) {
      var r = n.length > 0,
        o = e.length > 0,
        a = function (i, a, s, l, c) {
          var u, d, f, h = 0,
            p = "0",
            g = i && [],
            v = [],
            y = E,
            b = i || o && w.find.TAG("*", c),
            x = V += null == y ? 1 : Math.random() || .1,
            C = b.length;
          for (c && (E = a === O || a || c); p !== C && null != (u = b[p]); p++) {
            if (o && u) {
              for (d = 0, a || u.ownerDocument === O || (D(u), s = !M); f = e[d++];)
                if (f(u, a || O, s)) {
                  l.push(u);
                  break
                }
              c && (V = x)
            }
            r && ((u = !f && u) && h--, i && g.push(u))
          }
          if (h += p, r && p !== h) {
            for (d = 0; f = n[d++];) f(g, v, a, s);
            if (i) {
              if (h > 0)
                for (; p--;) g[p] || v[p] || (v[p] = X.call(l));
              v = m(v)
            }
            Q.apply(l, v), c && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
          }
          return c && (V = x, E = y), g
        };
      return r ? i(a) : a
    }
    var b, x, w, C, T, k, _, S, E, A, I, D, O, P, M, L, N, F, R, W = "sizzle" + 1 * new Date,
      H = e.document,
      V = 0,
      j = 0,
      B = n(),
      z = n(),
      q = n(),
      $ = function (e, t) {
        return e === t && (I = !0), 0
      },
      Y = {}.hasOwnProperty,
      U = [],
      X = U.pop,
      G = U.push,
      Q = U.push,
      K = U.slice,
      Z = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++)
          if (e[n] === t) return n;
        return -1
      },
      J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ee = "[\\x20\\t\\r\\n\\f]",
      te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
      ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
      re = new RegExp(ee + "+", "g"),
      oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
      ae = new RegExp("^" + ee + "*," + ee + "*"),
      se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
      le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
      ce = new RegExp(ie),
      ue = new RegExp("^" + te + "$"),
      de = {
        ID: new RegExp("^#(" + te + ")"),
        CLASS: new RegExp("^\\.(" + te + ")"),
        TAG: new RegExp("^(" + te + "|[*])"),
        ATTR: new RegExp("^" + ne),
        PSEUDO: new RegExp("^" + ie),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + J + ")$", "i"),
        needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
      },
      fe = /^(?:input|select|textarea|button)$/i,
      he = /^h\d$/i,
      pe = /^[^{]+\{\s*\[native \w/,
      me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ge = /[+~]/,
      ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
      ye = function (e, t, n) {
        var i = "0x" + t - 65536;
        return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
      },
      be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      xe = function (e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
      },
      we = function () {
        D()
      },
      Ce = f(function (e) {
        return e.disabled === !0 && ("form" in e || "label" in e)
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      Q.apply(U = K.call(H.childNodes), H.childNodes), U[H.childNodes.length].nodeType
    } catch (e) {
      Q = {
        apply: U.length ? function (e, t) {
          G.apply(e, K.call(t))
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];);
          e.length = n - 1
        }
      }
    }
    x = t.support = {}, T = t.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName
    }, D = t.setDocument = function (e) {
      var t, n, i = e ? e.ownerDocument || e : H;
      return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, P = O.documentElement, M = !T(O), H !== O && (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), x.attributes = r(function (e) {
        return e.className = "i", !e.getAttribute("className")
      }), x.getElementsByTagName = r(function (e) {
        return e.appendChild(O.createComment("")), !e.getElementsByTagName("*").length
      }), x.getElementsByClassName = pe.test(O.getElementsByClassName), x.getById = r(function (e) {
        return P.appendChild(e).id = W, !O.getElementsByName || !O.getElementsByName(W).length
      }), x.getById ? (w.filter.ID = function (e) {
        var t = e.replace(ve, ye);
        return function (e) {
          return e.getAttribute("id") === t
        }
      }, w.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && M) {
          var n = t.getElementById(e);
          return n ? [n] : []
        }
      }) : (w.filter.ID = function (e) {
        var t = e.replace(ve, ye);
        return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t
        }
      }, w.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && M) {
          var n, i, r, o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            for (r = t.getElementsByName(e), i = 0; o = r[i++];)
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
          }
          return []
        }
      }), w.find.TAG = x.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
      } : function (e, t) {
        var n, i = [],
          r = 0,
          o = t.getElementsByTagName(e);
        if ("*" === e) {
          for (; n = o[r++];) 1 === n.nodeType && i.push(n);
          return i
        }
        return o
      }, w.find.CLASS = x.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && M) return t.getElementsByClassName(e)
      }, N = [], L = [], (x.qsa = pe.test(O.querySelectorAll)) && (r(function (e) {
        P.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + ee + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" + W + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || L.push(".#.+[+~]")
      }), r(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = O.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"), P.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
      })), (x.matchesSelector = pe.test(F = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && r(function (e) {
        x.disconnectedMatch = F.call(e, "*"), F.call(e, "[s!='']:x"), N.push("!=", ie)
      }), L = L.length && new RegExp(L.join("|")), N = N.length && new RegExp(N.join("|")), t = pe.test(P.compareDocumentPosition), R = t || pe.test(P.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
          i = t && t.parentNode;
        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
      } : function (e, t) {
        if (t)
          for (; t = t.parentNode;)
            if (t === e) return !0;
        return !1
      }, $ = t ? function (e, t) {
        if (e === t) return I = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === O || e.ownerDocument === H && R(H, e) ? -1 : t === O || t.ownerDocument === H && R(H, t) ? 1 : A ? Z(A, e) - Z(A, t) : 0 : 4 & n ? -1 : 1)
      } : function (e, t) {
        if (e === t) return I = !0, 0;
        var n, i = 0,
          r = e.parentNode,
          o = t.parentNode,
          s = [e],
          l = [t];
        if (!r || !o) return e === O ? -1 : t === O ? 1 : r ? -1 : o ? 1 : A ? Z(A, e) - Z(A, t) : 0;
        if (r === o) return a(e, t);
        for (n = e; n = n.parentNode;) s.unshift(n);
        for (n = t; n = n.parentNode;) l.unshift(n);
        for (; s[i] === l[i];) i++;
        return i ? a(s[i], l[i]) : s[i] === H ? -1 : l[i] === H ? 1 : 0
      }, O) : O
    }, t.matches = function (e, n) {
      return t(e, null, null, n)
    }, t.matchesSelector = function (e, n) {
      if ((e.ownerDocument || e) !== O && D(e), n = n.replace(le, "='$1']"), x.matchesSelector && M && !q[n + " "] && (!N || !N.test(n)) && (!L || !L.test(n))) try {
        var i = F.call(e, n);
        if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
      } catch (e) {}
      return t(n, O, null, [e]).length > 0
    }, t.contains = function (e, t) {
      return (e.ownerDocument || e) !== O && D(e), R(e, t)
    }, t.attr = function (e, t) {
      (e.ownerDocument || e) !== O && D(e);
      var n = w.attrHandle[t.toLowerCase()],
        i = n && Y.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
      return void 0 !== i ? i : x.attributes || !M ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }, t.escape = function (e) {
      return (e + "").replace(be, xe)
    }, t.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, t.uniqueSort = function (e) {
      var t, n = [],
        i = 0,
        r = 0;
      if (I = !x.detectDuplicates, A = !x.sortStable && e.slice(0), e.sort($), I) {
        for (; t = e[r++];) t === e[r] && (i = n.push(r));
        for (; i--;) e.splice(n[i], 1)
      }
      return A = null, e
    }, C = t.getText = function (e) {
      var t, n = "",
        i = 0,
        r = e.nodeType;
      if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
        } else if (3 === r || 4 === r) return e.nodeValue
      } else
        for (; t = e[i++];) n += C(t);
      return n
    }, w = t.selectors = {
      cacheLength: 50,
      createPseudo: i,
      match: de,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
        },
        PSEUDO: function (e) {
          var t, n = !e[6] && e[2];
          return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(ve, ye).toLowerCase();
          return "*" === e ? function () {
            return !0
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        },
        CLASS: function (e) {
          var t = B[e + " "];
          return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && B(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
          })
        },
        ATTR: function (e, n, i) {
          return function (r) {
            var o = t.attr(r, e);
            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
          }
        },
        CHILD: function (e, t, n, i, r) {
          var o = "nth" !== e.slice(0, 3),
            a = "last" !== e.slice(-4),
            s = "of-type" === t;
          return 1 === i && 0 === r ? function (e) {
            return !!e.parentNode
          } : function (t, n, l) {
            var c, u, d, f, h, p, m = o !== a ? "nextSibling" : "previousSibling",
              g = t.parentNode,
              v = s && t.nodeName.toLowerCase(),
              y = !l && !s,
              b = !1;
            if (g) {
              if (o) {
                for (; m;) {
                  for (f = t; f = f[m];)
                    if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                  p = m = "only" === e && !p && "nextSibling"
                }
                return !0
              }
              if (p = [a ? g.firstChild : g.lastChild], a && y) {
                for (f = g, d = f[W] || (f[W] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], h = c[0] === V && c[1], b = h && c[2], f = h && g.childNodes[h]; f = ++h && f && f[m] || (b = h = 0) || p.pop();)
                  if (1 === f.nodeType && ++b && f === t) {
                    u[e] = [V, h, b];
                    break
                  }
              } else if (y && (f = t, d = f[W] || (f[W] = {}),
                  u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], h = c[0] === V && c[1], b = h), b === !1)
                for (;
                  (f = ++h && f && f[m] || (b = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (d = f[W] || (f[W] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), u[e] = [V, b]), f !== t)););
              return (b -= r) === i || b % i == 0 && b / i >= 0
            }
          }
        },
        PSEUDO: function (e, n) {
          var r, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
          return o[W] ? o(n) : o.length > 1 ? (r = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
            for (var i, r = o(e, n), a = r.length; a--;) i = Z(e, r[a]), e[i] = !(t[i] = r[a])
          }) : function (e) {
            return o(e, 0, r)
          }) : o
        }
      },
      pseudos: {
        not: i(function (e) {
          var t = [],
            n = [],
            r = _(e.replace(oe, "$1"));
          return r[W] ? i(function (e, t, n, i) {
            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
          }
        }),
        has: i(function (e) {
          return function (n) {
            return t(e, n).length > 0
          }
        }),
        contains: i(function (e) {
          return e = e.replace(ve, ye),
            function (t) {
              return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
            }
        }),
        lang: i(function (e) {
          return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(),
            function (t) {
              var n;
              do {
                if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
              } while ((t = t.parentNode) && 1 === t.nodeType);
              return !1
            }
        }),
        target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        },
        root: function (e) {
          return e === P
        },
        focus: function (e) {
          return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        },
        enabled: s(!1),
        disabled: s(!0),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0
        },
        parent: function (e) {
          return !w.pseudos.empty(e)
        },
        header: function (e) {
          return he.test(e.nodeName)
        },
        input: function (e) {
          return fe.test(e.nodeName)
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        },
        text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        },
        first: l(function () {
          return [0]
        }),
        last: l(function (e, t) {
          return [t - 1]
        }),
        eq: l(function (e, t, n) {
          return [n < 0 ? n + t : n]
        }),
        even: l(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e
        }),
        odd: l(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e
        }),
        lt: l(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
          return e
        }),
        gt: l(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
          return e
        })
      }
    }, w.pseudos.nth = w.pseudos.eq;
    for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) w.pseudos[b] = function (e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e
      }
    }(b);
    for (b in {
        submit: !0,
        reset: !0
      }) w.pseudos[b] = function (e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }(b);
    return u.prototype = w.filters = w.pseudos, w.setFilters = new u, k = t.tokenize = function (e, n) {
      var i, r, o, a, s, l, c, u = z[e + " "];
      if (u) return n ? 0 : u.slice(0);
      for (s = e, l = [], c = w.preFilter; s;) {
        i && !(r = ae.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = se.exec(s)) && (i = r.shift(), o.push({
          value: i,
          type: r[0].replace(oe, " ")
        }), s = s.slice(i.length));
        for (a in w.filter) !(r = de[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(), o.push({
          value: i,
          type: a,
          matches: r
        }), s = s.slice(i.length));
        if (!i) break
      }
      return n ? s.length : s ? t.error(e) : z(e, l).slice(0)
    }, _ = t.compile = function (e, t) {
      var n, i = [],
        r = [],
        o = q[e + " "];
      if (!o) {
        for (t || (t = k(e)), n = t.length; n--;) o = v(t[n]), o[W] ? i.push(o) : r.push(o);
        o = q(e, y(r, i)), o.selector = e
      }
      return o
    }, S = t.select = function (e, t, n, i) {
      var r, o, a, s, l, u = "function" == typeof e && e,
        f = !i && k(e = u.selector || e);
      if (n = n || [], 1 === f.length) {
        if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && M && w.relative[o[1].type]) {
          if (!(t = (w.find.ID(a.matches[0].replace(ve, ye), t) || [])[0])) return n;
          u && (t = t.parentNode), e = e.slice(o.shift().value.length)
        }
        for (r = de.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !w.relative[s = a.type]);)
          if ((l = w.find[s]) && (i = l(a.matches[0].replace(ve, ye), ge.test(o[0].type) && c(t.parentNode) || t))) {
            if (o.splice(r, 1), !(e = i.length && d(o))) return Q.apply(n, i), n;
            break
          }
      }
      return (u || _(e, f))(i, t, !M, n, !t || ge.test(e) && c(t.parentNode) || t), n
    }, x.sortStable = W.split("").sort($).join("") === W, x.detectDuplicates = !!I, D(), x.sortDetached = r(function (e) {
      return 1 & e.compareDocumentPosition(O.createElement("fieldset"))
    }), r(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || o("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), x.attributes && r(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || o("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    }), r(function (e) {
      return null == e.getAttribute("disabled")
    }) || o(J, function (e, t, n) {
      var i;
      if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }), t
  }(e);
  he.find = me, he.expr = me.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = me.uniqueSort, he.text = me.getText, he.isXMLDoc = me.isXML, he.contains = me.contains, he.escapeSelector = me.escape;
  var ge = function (e, t, n) {
      for (var i = [], r = void 0 !== n;
        (e = e[t]) && 9 !== e.nodeType;)
        if (1 === e.nodeType) {
          if (r && he(e).is(n)) break;
          i.push(e)
        }
      return i
    },
    ve = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    },
    ye = he.expr.match.needsContext,
    be = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    xe = /^.[^:#\[\.,]*$/;
  he.filter = function (e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? he.find.matchesSelector(i, e) ? [i] : [] : he.find.matches(e, he.grep(t, function (e) {
      return 1 === e.nodeType
    }))
  }, he.fn.extend({
    find: function (e) {
      var t, n, i = this.length,
        r = this;
      if ("string" != typeof e) return this.pushStack(he(e).filter(function () {
        for (t = 0; t < i; t++)
          if (he.contains(r[t], this)) return !0
      }));
      for (n = this.pushStack([]), t = 0; t < i; t++) he.find(e, r[t], n);
      return i > 1 ? he.uniqueSort(n) : n
    },
    filter: function (e) {
      return this.pushStack(r(this, e || [], !1))
    },
    not: function (e) {
      return this.pushStack(r(this, e || [], !0))
    },
    is: function (e) {
      return !!r(this, "string" == typeof e && ye.test(e) ? he(e) : e || [], !1).length
    }
  });
  var we, Ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (he.fn.init = function (e, t, n) {
    var i, r;
    if (!e) return this;
    if (n = n || we, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ce.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), be.test(i[1]) && he.isPlainObject(t))
          for (i in t) he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this
      }
      return r = te.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
  }).prototype = he.fn, we = he(te);
  var Te = /^(?:parents|prev(?:Until|All))/,
    ke = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  he.fn.extend({
    has: function (e) {
      var t = he(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++)
          if (he.contains(this, t[e])) return !0
      })
    },
    closest: function (e, t) {
      var n, i = 0,
        r = this.length,
        o = [],
        a = "string" != typeof e && he(e);
      if (!ye.test(e))
        for (; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
              o.push(n);
              break
            }
      return this.pushStack(o.length > 1 ? he.uniqueSort(o) : o)
    },
    index: function (e) {
      return e ? "string" == typeof e ? ae.call(he(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function (e, t) {
      return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), he.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function (e) {
      return ge(e, "parentNode")
    },
    parentsUntil: function (e, t, n) {
      return ge(e, "parentNode", n)
    },
    next: function (e) {
      return o(e, "nextSibling")
    },
    prev: function (e) {
      return o(e, "previousSibling")
    },
    nextAll: function (e) {
      return ge(e, "nextSibling")
    },
    prevAll: function (e) {
      return ge(e, "previousSibling")
    },
    nextUntil: function (e, t, n) {
      return ge(e, "nextSibling", n)
    },
    prevUntil: function (e, t, n) {
      return ge(e, "previousSibling", n)
    },
    siblings: function (e) {
      return ve((e.parentNode || {}).firstChild, e)
    },
    children: function (e) {
      return ve(e.firstChild)
    },
    contents: function (e) {
      return e.contentDocument || he.merge([], e.childNodes)
    }
  }, function (e, t) {
    he.fn[e] = function (n, i) {
      var r = he.map(this, t, n);
      return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = he.filter(i, r)), this.length > 1 && (ke[e] || he.uniqueSort(r), Te.test(e) && r.reverse()), this.pushStack(r)
    }
  });
  var _e = /[^\x20\t\r\n\f]+/g;
  he.Callbacks = function (e) {
    e = "string" == typeof e ? a(e) : he.extend({}, e);
    var t, n, i, r, o = [],
      s = [],
      l = -1,
      c = function () {
        for (r = e.once, i = t = !0; s.length; l = -1)
          for (n = s.shift(); ++l < o.length;) o[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = o.length, n = !1);
        e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
      },
      u = {
        add: function () {
          return o && (n && !t && (l = o.length - 1, s.push(n)), function t(n) {
            he.each(n, function (n, i) {
              he.isFunction(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== he.type(i) && t(i)
            })
          }(arguments), n && !t && c()), this
        },
        remove: function () {
          return he.each(arguments, function (e, t) {
            for (var n;
              (n = he.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= l && l--
          }), this
        },
        has: function (e) {
          return e ? he.inArray(e, o) > -1 : o.length > 0
        },
        empty: function () {
          return o && (o = []), this
        },
        disable: function () {
          return r = s = [], o = n = "", this
        },
        disabled: function () {
          return !o
        },
        lock: function () {
          return r = s = [], n || t || (o = n = ""), this
        },
        locked: function () {
          return !!r
        },
        fireWith: function (e, n) {
          return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
        },
        fire: function () {
          return u.fireWith(this, arguments), this
        },
        fired: function () {
          return !!i
        }
      };
    return u
  }, he.extend({
    Deferred: function (t) {
      var n = [
          ["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
          ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
          ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
        ],
        i = "pending",
        r = {
          state: function () {
            return i
          },
          always: function () {
            return o.done(arguments).fail(arguments), this
          },
          catch: function (e) {
            return r.then(null, e)
          },
          pipe: function () {
            var e = arguments;
            return he.Deferred(function (t) {
              he.each(n, function (n, i) {
                var r = he.isFunction(e[i[4]]) && e[i[4]];
                o[i[1]](function () {
                  var e = r && r.apply(this, arguments);
                  e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                })
              }), e = null
            }).promise()
          },
          then: function (t, i, r) {
            function o(t, n, i, r) {
              return function () {
                var c = this,
                  u = arguments,
                  d = function () {
                    var e, d;
                    if (!(t < a)) {
                      if ((e = i.apply(c, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                      d = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(d) ? r ? d.call(e, o(a, n, s, r), o(a, n, l, r)) : (a++, d.call(e, o(a, n, s, r), o(a, n, l, r), o(a, n, s, n.notifyWith))) : (i !== s && (c = void 0, u = [e]), (r || n.resolveWith)(c, u))
                    }
                  },
                  f = r ? d : function () {
                    try {
                      d()
                    } catch (e) {
                      he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, f.stackTrace), t + 1 >= a && (i !== l && (c = void 0, u = [e]), n.rejectWith(c, u))
                    }
                  };
                t ? f() : (he.Deferred.getStackHook && (f.stackTrace = he.Deferred.getStackHook()), e.setTimeout(f))
              }
            }
            var a = 0;
            return he.Deferred(function (e) {
              n[0][3].add(o(0, e, he.isFunction(r) ? r : s, e.notifyWith)), n[1][3].add(o(0, e, he.isFunction(t) ? t : s)), n[2][3].add(o(0, e, he.isFunction(i) ? i : l))
            }).promise()
          },
          promise: function (e) {
            return null != e ? he.extend(e, r) : r
          }
        },
        o = {};
      return he.each(n, function (e, t) {
        var a = t[2],
          s = t[5];
        r[t[1]] = a.add, s && a.add(function () {
          i = s
        }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
        }, o[t[0] + "With"] = a.fireWith
      }), r.promise(o), t && t.call(o, o), o
    },
    when: function (e) {
      var t = arguments.length,
        n = t,
        i = Array(n),
        r = ie.call(arguments),
        o = he.Deferred(),
        a = function (e) {
          return function (n) {
            i[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || o.resolveWith(i, r)
          }
        };
      if (t <= 1 && (c(e, o.done(a(n)).resolve, o.reject), "pending" === o.state() || he.isFunction(r[n] && r[n].then))) return o.then();
      for (; n--;) c(r[n], a(n), o.reject);
      return o.promise()
    }
  });
  var Se = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  he.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && Se.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
  }, he.readyException = function (t) {
    e.setTimeout(function () {
      throw t
    })
  };
  var Ee = he.Deferred();
  he.fn.ready = function (e) {
    return Ee.then(e).catch(function (e) {
      he.readyException(e)
    }), this
  }, he.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (e) {
      e ? he.readyWait++ : he.ready(!0)
    },
    ready: function (e) {
      (e === !0 ? --he.readyWait : he.isReady) || (he.isReady = !0, e !== !0 && --he.readyWait > 0 || Ee.resolveWith(te, [he]))
    }
  }), he.ready.then = Ee.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", u), e.addEventListener("load", u));
  var Ae = function (e, t, n, i, r, o, a) {
      var s = 0,
        l = e.length,
        c = null == n;
      if ("object" === he.type(n)) {
        r = !0;
        for (s in n) Ae(e, t, s, n[s], !0, o, a)
      } else if (void 0 !== i && (r = !0, he.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
          return c.call(he(e), n)
        })), t))
        for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
      return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
    },
    Ie = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
  d.uid = 1, d.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, Ie(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    },
    set: function (e, t, n) {
      var i, r = this.cache(e);
      if ("string" == typeof t) r[he.camelCase(t)] = n;
      else
        for (i in t) r[he.camelCase(i)] = t[i];
      return r
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
    },
    access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function (e, t) {
      var n, i = e[this.expando];
      if (void 0 !== i) {
        if (void 0 !== t) {
          he.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in i ? [t] : t.match(_e) || []), n = t.length;
          for (; n--;) delete i[t[n]]
        }(void 0 === t || he.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !he.isEmptyObject(t)
    }
  };
  var De = new d,
    Oe = new d,
    Pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Me = /[A-Z]/g;
  he.extend({
    hasData: function (e) {
      return Oe.hasData(e) || De.hasData(e)
    },
    data: function (e, t, n) {
      return Oe.access(e, t, n)
    },
    removeData: function (e, t) {
      Oe.remove(e, t)
    },
    _data: function (e, t, n) {
      return De.access(e, t, n)
    },
    _removeData: function (e, t) {
      De.remove(e, t)
    }
  }), he.fn.extend({
    data: function (e, t) {
      var n, i, r, o = this[0],
        a = o && o.attributes;
      if (void 0 === e) {
        if (this.length && (r = Oe.get(o), 1 === o.nodeType && !De.get(o, "hasDataAttrs"))) {
          for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = he.camelCase(i.slice(5)), h(o, i, r[i])));
          De.set(o, "hasDataAttrs", !0)
        }
        return r
      }
      return "object" == typeof e ? this.each(function () {
        Oe.set(this, e)
      }) : Ae(this, function (t) {
        var n;
        if (o && void 0 === t) {
          if (void 0 !== (n = Oe.get(o, e))) return n;
          if (void 0 !== (n = h(o, e))) return n
        } else this.each(function () {
          Oe.set(this, e, t)
        })
      }, null, t, arguments.length > 1, null, !0)
    },
    removeData: function (e) {
      return this.each(function () {
        Oe.remove(this, e)
      })
    }
  }), he.extend({
    queue: function (e, t, n) {
      var i;
      if (e) return t = (t || "fx") + "queue", i = De.get(e, t), n && (!i || he.isArray(n) ? i = De.access(e, t, he.makeArray(n)) : i.push(n)), i || []
    },
    dequeue: function (e, t) {
      t = t || "fx";
      var n = he.queue(e, t),
        i = n.length,
        r = n.shift(),
        o = he._queueHooks(e, t),
        a = function () {
          he.dequeue(e, t)
        };
      "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return De.get(e, n) || De.access(e, n, {
        empty: he.Callbacks("once memory").add(function () {
          De.remove(e, [t + "queue", n])
        })
      })
    }
  }), he.fn.extend({
    queue: function (e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = he.queue(this, e, t);
        he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
      })
    },
    dequeue: function (e) {
      return this.each(function () {
        he.dequeue(this, e)
      })
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", [])
    },
    promise: function (e, t) {
      var n, i = 1,
        r = he.Deferred(),
        o = this,
        a = this.length,
        s = function () {
          --i || r.resolveWith(o, [o])
        };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = De.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
      return s(), r.promise(t)
    }
  });
  var Le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Ne = new RegExp("^(?:([+-])=|)(" + Le + ")([a-z%]*)$", "i"),
    Fe = ["Top", "Right", "Bottom", "Left"],
    Re = function (e, t) {
      return e = t || e, "none" === e.style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
    },
    We = function (e, t, n, i) {
      var r, o, a = {};
      for (o in t) a[o] = e.style[o], e.style[o] = t[o];
      r = n.apply(e, i || []);
      for (o in t) e.style[o] = a[o];
      return r
    },
    He = {};
  he.fn.extend({
    show: function () {
      return g(this, !0)
    },
    hide: function () {
      return g(this)
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        Re(this) ? he(this).show() : he(this).hide()
      })
    }
  });
  var Ve = /^(?:checkbox|radio)$/i,
    je = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    Be = /^$|\/(?:java|ecma)script/i,
    ze = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  ze.optgroup = ze.option, ze.tbody = ze.tfoot = ze.colgroup = ze.caption = ze.thead, ze.th = ze.td;
  var qe = /<|&#?\w+;/;
  ! function () {
    var e = te.createDocumentFragment(),
      t = e.appendChild(te.createElement("div")),
      n = te.createElement("input");
    n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), fe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
  }();
  var $e = te.documentElement,
    Ye = /^key/,
    Ue = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Xe = /^([^.]*)(?:\.(.+)|)/;
  he.event = {
    global: {},
    add: function (e, t, n, i, r) {
      var o, a, s, l, c, u, d, f, h, p, m, g = De.get(e);
      if (g)
        for (n.handler && (o = n, n = o.handler, r = o.selector), r && he.find.matchesSelector($e, r), n.guid || (n.guid = he.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (t) {
            return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
          }), t = (t || "").match(_e) || [""], c = t.length; c--;) s = Xe.exec(t[c]) || [], h = m = s[1], p = (s[2] || "").split(".").sort(), h && (d = he.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = he.event.special[h] || {}, u = he.extend({
          type: h,
          origType: m,
          data: i,
          handler: n,
          guid: n.guid,
          selector: r,
          needsContext: r && he.expr.match.needsContext.test(r),
          namespace: p.join(".")
        }, o), (f = l[h]) || (f = l[h] = [], f.delegateCount = 0, d.setup && d.setup.call(e, i, p, a) !== !1 || e.addEventListener && e.addEventListener(h, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), he.event.global[h] = !0)
    },
    remove: function (e, t, n, i, r) {
      var o, a, s, l, c, u, d, f, h, p, m, g = De.hasData(e) && De.get(e);
      if (g && (l = g.events)) {
        for (t = (t || "").match(_e) || [""], c = t.length; c--;)
          if (s = Xe.exec(t[c]) || [], h = m = s[1], p = (s[2] || "").split(".").sort(), h) {
            for (d = he.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, f = l[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) u = f[o], !r && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
            a && !f.length && (d.teardown && d.teardown.call(e, p, g.handle) !== !1 || he.removeEvent(e, h, g.handle), delete l[h])
          } else
            for (h in l) he.event.remove(e, h + t[c], n, i, !0);
        he.isEmptyObject(l) && De.remove(e, "handle events")
      }
    },
    dispatch: function (e) {
      var t, n, i, r, o, a, s = he.event.fix(e),
        l = new Array(arguments.length),
        c = (De.get(this, "events") || {})[s.type] || [],
        u = he.event.special[s.type] || {};
      for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (s.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, s) !== !1) {
        for (a = he.event.handlers.call(this, s, c), t = 0;
          (r = a[t++]) && !s.isPropagationStopped();)
          for (s.currentTarget = r.elem, n = 0;
            (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (i = ((he.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && (s.result = i) === !1 && (s.preventDefault(), s.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, s), s.result
      }
    },
    handlers: function (e, t) {
      var n, i, r, o, a, s = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && e.button >= 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || c.disabled !== !0)) {
            for (o = [], a = {}, n = 0; n < l; n++) i = t[n], r = i.selector + " ", void 0 === a[r] && (a[r] = i.needsContext ? he(r, this).index(c) > -1 : he.find(r, this, null, [c]).length), a[r] && o.push(i);
            o.length && s.push({
              elem: c,
              handlers: o
            })
          }
      return c = this, l < t.length && s.push({
        elem: c,
        handlers: t.slice(l)
      }), s
    },
    addProp: function (e, t) {
      Object.defineProperty(he.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: he.isFunction(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent)
        } : function () {
          if (this.originalEvent) return this.originalEvent[e]
        },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          })
        }
      })
    },
    fix: function (e) {
      return e[he.expando] ? e : new he.Event(e)
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function () {
          if (this !== C() && this.focus) return this.focus(), !1
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function () {
          if (this === C() && this.blur) return this.blur(), !1
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && he.nodeName(this, "input")) return this.click(), !1
        },
        _default: function (e) {
          return he.nodeName(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, he.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, he.Event = function (e, t) {
    if (!(this instanceof he.Event)) return new he.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? x : w, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), this[he.expando] = !0
  }, he.Event.prototype = {
    constructor: he.Event,
    isDefaultPrevented: w,
    isPropagationStopped: w,
    isImmediatePropagationStopped: w,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = x, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = x, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = x, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, he.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function (e) {
      var t = e.button;
      return null == e.which && Ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ue.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
    }
  }, he.event.addProp), he.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, t) {
    he.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function (e) {
        var n, i = this,
          r = e.relatedTarget,
          o = e.handleObj;
        return r && (r === i || he.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), he.fn.extend({
    on: function (e, t, n, i) {
      return T(this, e, t, n, i)
    },
    one: function (e, t, n, i) {
      return T(this, e, t, n, i, 1)
    },
    off: function (e, t, n) {
      var i, r;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, he(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" == typeof e) {
        for (r in e) this.off(r, t, e[r]);
        return this
      }
      return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = w), this.each(function () {
        he.event.remove(this, e, n, t)
      })
    }
  });
  var Ge = /<script|<style|<link/i,
    Qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ke = /^true\/(.*)/,
    Ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  he.extend({
    htmlPrefilter: function (e) {
      return e.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, "<$1></$2>")
    },
    clone: function (e, t, n) {
      var i, r, o, a, s = e.cloneNode(!0),
        l = he.contains(e.ownerDocument, e);
      if (!(fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
        for (a = v(s), o = v(e), i = 0, r = o.length; i < r; i++) A(o[i], a[i]);
      if (t)
        if (n)
          for (o = o || v(e), a = a || v(s), i = 0, r = o.length; i < r; i++) E(o[i], a[i]);
        else E(e, s);
      return a = v(s, "script"), a.length > 0 && y(a, !l && v(e, "script")), s
    },
    cleanData: function (e) {
      for (var t, n, i, r = he.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Ie(n)) {
          if (t = n[De.expando]) {
            if (t.events)
              for (i in t.events) r[i] ? he.event.remove(n, i) : he.removeEvent(n, i, t.handle);
            n[De.expando] = void 0
          }
          n[Oe.expando] && (n[Oe.expando] = void 0)
        }
    }
  }), he.fn.extend({
    detach: function (e) {
      return D(this, e, !0)
    },
    remove: function (e) {
      return D(this, e)
    },
    text: function (e) {
      return Ae(this, function (e) {
        return void 0 === e ? he.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    },
    append: function () {
      return I(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          k(this, e).appendChild(e)
        }
      })
    },
    prepend: function () {
      return I(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = k(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function () {
      return I(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function () {
      return I(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(v(e, !1)), e.textContent = "");
      return this
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return he.clone(this, e, t)
      })
    },
    html: function (e) {
      return Ae(this, function (e) {
        var t = this[0] || {},
          n = 0,
          i = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !Ge.test(e) && !ze[(je.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = he.htmlPrefilter(e);
          try {
            for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (he.cleanData(v(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function () {
      var e = [];
      return I(this, arguments, function (t) {
        var n = this.parentNode;
        he.inArray(this, e) < 0 && (he.cleanData(v(this)), n && n.replaceChild(t, this))
      }, e)
    }
  }), he.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    he.fn[e] = function (e) {
      for (var n, i = [], r = he(e), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), he(r[a])[t](n), oe.apply(i, n.get());
      return this.pushStack(i)
    }
  });
  var Je = /^margin/,
    et = new RegExp("^(" + Le + ")(?!px)[a-z%]+$", "i"),
    tt = function (t) {
      var n = t.ownerDocument.defaultView;
      return n && n.opener || (n = e), n.getComputedStyle(t)
    };
  ! function () {
    function t() {
      if (s) {
        s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", $e.appendChild(a);
        var t = e.getComputedStyle(s);
        n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", r = "4px" === t.marginRight, $e.removeChild(a), s = null
      }
    }
    var n, i, r, o, a = te.createElement("div"),
      s = te.createElement("div");
    s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", fe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), he.extend(fe, {
      pixelPosition: function () {
        return t(), n
      },
      boxSizingReliable: function () {
        return t(), i
      },
      pixelMarginRight: function () {
        return t(), r
      },
      reliableMarginLeft: function () {
        return t(), o
      }
    }))
  }();
  var nt = /^(none|table(?!-c[ea]).+)/,
    it = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    rt = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    ot = ["Webkit", "Moz", "ms"],
    at = te.createElement("div").style;
  he.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = O(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      float: "cssFloat"
    },
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r, o, a, s = he.camelCase(t),
          l = e.style;
        if (t = he.cssProps[s] || (he.cssProps[s] = M(s) || s), a = he.cssHooks[t] || he.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
        o = typeof n, "string" === o && (r = Ne.exec(n)) && r[1] && (n = p(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (he.cssNumber[s] ? "" : "px")), fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n))
      }
    },
    css: function (e, t, n, i) {
      var r, o, a, s = he.camelCase(t);
      return t = he.cssProps[s] || (he.cssProps[s] = M(s) || s), a = he.cssHooks[t] || he.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = O(e, t, i)), "normal" === r && t in rt && (r = rt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
    }
  }), he.each(["height", "width"], function (e, t) {
    he.cssHooks[t] = {
      get: function (e, n, i) {
        if (n) return !nt.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? F(e, t, i) : We(e, it, function () {
          return F(e, t, i)
        })
      },
      set: function (e, n, i) {
        var r, o = i && tt(e),
          a = i && N(e, t, i, "border-box" === he.css(e, "boxSizing", !1, o), o);
        return a && (r = Ne.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = he.css(e, t)), L(e, n, a)
      }
    }
  }), he.cssHooks.marginLeft = P(fe.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(O(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left
    })) + "px"
  }), he.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (e, t) {
    he.cssHooks[e + t] = {
      expand: function (n) {
        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Fe[i] + t] = o[i] || o[i - 2] || o[0];
        return r
      }
    }, Je.test(e) || (he.cssHooks[e + t].set = L)
  }), he.fn.extend({
    css: function (e, t) {
      return Ae(this, function (e, t, n) {
        var i, r, o = {},
          a = 0;
        if (he.isArray(t)) {
          for (i = tt(e), r = t.length; a < r; a++) o[t[a]] = he.css(e, t[a], !1, i);
          return o
        }
        return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
      }, e, t, arguments.length > 1)
    }
  }), he.Tween = R, R.prototype = {
    constructor: R,
    init: function (e, t, n, i, r, o) {
      this.elem = e, this.prop = n, this.easing = r || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (he.cssNumber[n] ? "" : "px")
    },
    cur: function () {
      var e = R.propHooks[this.prop];
      return e && e.get ? e.get(this) : R.propHooks._default.get(this)
    },
    run: function (e) {
      var t, n = R.propHooks[this.prop];
      return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
    }
  }, R.prototype.init.prototype = R.prototype, R.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
      },
      set: function (e) {
        he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, he.easing = {
    linear: function (e) {
      return e
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    },
    _default: "swing"
  }, he.fx = R.prototype.init, he.fx.step = {};
  var st, lt, ct = /^(?:toggle|show|hide)$/,
    ut = /queueHooks$/;
  he.Animation = he.extend(q, {
      tweeners: {
        "*": [function (e, t) {
          var n = this.createTween(e, t);
          return p(n.elem, e, Ne.exec(t), n), n
        }]
      },
      tweener: function (e, t) {
        he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(_e);
        for (var n, i = 0, r = e.length; i < r; i++) n = e[i], q.tweeners[n] = q.tweeners[n] || [], q.tweeners[n].unshift(t)
      },
      prefilters: [B],
      prefilter: function (e, t) {
        t ? q.prefilters.unshift(e) : q.prefilters.push(e)
      }
    }), he.speed = function (e, t, n) {
      var i = e && "object" == typeof e ? he.extend({}, e) : {
        complete: n || !n && t || he.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !he.isFunction(t) && t
      };
      return he.fx.off || te.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in he.fx.speeds ? i.duration = he.fx.speeds[i.duration] : i.duration = he.fx.speeds._default), null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
        he.isFunction(i.old) && i.old.call(this), i.queue && he.dequeue(this, i.queue)
      }, i
    }, he.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(Re).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, i)
      },
      animate: function (e, t, n, i) {
        var r = he.isEmptyObject(e),
          o = he.speed(t, n, i),
          a = function () {
            var t = q(this, he.extend({}, e), o);
            (r || De.get(this, "finish")) && t.stop(!0)
          };
        return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n)
        };
        return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
          var t = !0,
            r = null != e && e + "queueHooks",
            o = he.timers,
            a = De.get(this);
          if (r) a[r] && a[r].stop && i(a[r]);
          else
            for (r in a) a[r] && a[r].stop && ut.test(r) && i(a[r]);
          for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
          !t && n || he.dequeue(this, e)
        })
      },
      finish: function (e) {
        return e !== !1 && (e = e || "fx"), this.each(function () {
          var t, n = De.get(this),
            i = n[e + "queue"],
            r = n[e + "queueHooks"],
            o = he.timers,
            a = i ? i.length : 0;
          for (n.finish = !0, he.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
          for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
          delete n.finish
        })
      }
    }), he.each(["toggle", "show", "hide"], function (e, t) {
      var n = he.fn[t];
      he.fn[t] = function (e, i, r) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(V(t, !0), e, i, r)
      }
    }), he.each({
      slideDown: V("show"),
      slideUp: V("hide"),
      slideToggle: V("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (e, t) {
      he.fn[e] = function (e, n, i) {
        return this.animate(t, e, n, i)
      }
    }), he.timers = [], he.fx.tick = function () {
      var e, t = 0,
        n = he.timers;
      for (st = he.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || he.fx.stop(), st = void 0
    }, he.fx.timer = function (e) {
      he.timers.push(e), e() ? he.fx.start() : he.timers.pop()
    }, he.fx.interval = 13, he.fx.start = function () {
      lt || (lt = e.requestAnimationFrame ? e.requestAnimationFrame(W) : e.setInterval(he.fx.tick, he.fx.interval))
    }, he.fx.stop = function () {
      e.cancelAnimationFrame ? e.cancelAnimationFrame(lt) : e.clearInterval(lt), lt = null
    }, he.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, he.fn.delay = function (t, n) {
      return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
        var r = e.setTimeout(n, t);
        i.stop = function () {
          e.clearTimeout(r)
        }
      })
    },
    function () {
      var e = te.createElement("input"),
        t = te.createElement("select"),
        n = t.appendChild(te.createElement("option"));
      e.type = "checkbox", fe.checkOn = "" !== e.value, fe.optSelected = n.selected, e = te.createElement("input"), e.value = "t", e.type = "radio", fe.radioValue = "t" === e.value
    }();
  var dt, ft = he.expr.attrHandle;
  he.fn.extend({
    attr: function (e, t) {
      return Ae(this, he.attr, e, t, arguments.length > 1)
    },
    removeAttr: function (e) {
      return this.each(function () {
        he.removeAttr(this, e)
      })
    }
  }), he.extend({
    attr: function (e, t, n) {
      var i, r, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? he.prop(e, t, n) : (1 === o && he.isXMLDoc(e) || (r = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = he.find.attr(e, t), null == i ? void 0 : i))
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!fe.radioValue && "radio" === t && he.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n, i = 0,
        r = t && t.match(_e);
      if (r && 1 === e.nodeType)
        for (; n = r[i++];) e.removeAttribute(n)
    }
  }), dt = {
    set: function (e, t, n) {
      return t === !1 ? he.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, he.each(he.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ft[t] || he.find.attr;
    ft[t] = function (e, t, i) {
      var r, o, a = t.toLowerCase();
      return i || (o = ft[a], ft[a] = r, r = null != n(e, t, i) ? a : null, ft[a] = o), r
    }
  });
  var ht = /^(?:input|select|textarea|button)$/i,
    pt = /^(?:a|area)$/i;
  he.fn.extend({
    prop: function (e, t) {
      return Ae(this, he.prop, e, t, arguments.length > 1)
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[he.propFix[e] || e]
      })
    }
  }), he.extend({
    prop: function (e, t, n) {
      var i, r, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && he.isXMLDoc(e) || (t = he.propFix[t] || t, r = he.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = he.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ht.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  }), fe.optSelected || (he.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    },
    set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    he.propFix[this.toLowerCase()] = this
  }), he.fn.extend({
    addClass: function (e) {
      var t, n, i, r, o, a, s, l = 0;
      if (he.isFunction(e)) return this.each(function (t) {
        he(this).addClass(e.call(this, t, Y(this)))
      });
      if ("string" == typeof e && e)
        for (t = e.match(_e) || []; n = this[l++];)
          if (r = Y(n), i = 1 === n.nodeType && " " + $(r) + " ") {
            for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
            s = $(i), r !== s && n.setAttribute("class", s)
          }
      return this
    },
    removeClass: function (e) {
      var t, n, i, r, o, a, s, l = 0;
      if (he.isFunction(e)) return this.each(function (t) {
        he(this).removeClass(e.call(this, t, Y(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e)
        for (t = e.match(_e) || []; n = this[l++];)
          if (r = Y(n), i = 1 === n.nodeType && " " + $(r) + " ") {
            for (a = 0; o = t[a++];)
              for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
            s = $(i), r !== s && n.setAttribute("class", s)
          }
      return this
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function (n) {
        he(this).toggleClass(e.call(this, n, Y(this), t), t)
      }) : this.each(function () {
        var t, i, r, o;
        if ("string" === n)
          for (i = 0, r = he(this), o = e.match(_e) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
        else void 0 !== e && "boolean" !== n || (t = Y(this), t && De.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : De.get(this, "__className__") || ""))
      })
    },
    hasClass: function (e) {
      var t, n, i = 0;
      for (t = " " + e + " "; n = this[i++];)
        if (1 === n.nodeType && (" " + $(Y(n)) + " ").indexOf(t) > -1) return !0;
      return !1
    }
  });
  he.fn.extend({
    val: function (e) {
      var t, n, i, r = this[0]; {
        if (arguments.length) return i = he.isFunction(e), this.each(function (n) {
          var r;
          1 === this.nodeType && (r = i ? e.call(this, n, he(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : he.isArray(r) && (r = he.map(r, function (e) {
            return null == e ? "" : e + ""
          })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
        });
        if (r) return (t = he.valHooks[r.type] || he.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(/\r/g, "") : null == n ? "" : n)
      }
    }
  }), he.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = he.find.attr(e, "value");
          return null != t ? t : $(he.text(e))
        }
      },
      select: {
        get: function (e) {
          var t, n, i, r = e.options,
            o = e.selectedIndex,
            a = "select-one" === e.type,
            s = a ? null : [],
            l = a ? o + 1 : r.length;
          for (i = o < 0 ? l : a ? o : 0; i < l; i++)
            if (n = r[i], (n.selected || i === o) && !n.disabled && (!n.parentNode.disabled || !he.nodeName(n.parentNode, "optgroup"))) {
              if (t = he(n).val(), a) return t;
              s.push(t)
            }
          return s
        },
        set: function (e, t) {
          for (var n, i, r = e.options, o = he.makeArray(t), a = r.length; a--;) i = r[a], (i.selected = he.inArray(he.valHooks.option.get(i), o) > -1) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), he.each(["radio", "checkbox"], function () {
    he.valHooks[this] = {
      set: function (e, t) {
        if (he.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1
      }
    }, fe.checkOn || (he.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  });
  var mt = /^(?:focusinfocus|focusoutblur)$/;
  he.extend(he.event, {
    trigger: function (t, n, i, r) {
      var o, a, s, l, c, u, d, f = [i || te],
        h = ce.call(t, "type") ? t.type : t,
        p = ce.call(t, "namespace") ? t.namespace.split(".") : [];
      if (a = s = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !mt.test(h + he.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."), h = p.shift(), p.sort()), c = h.indexOf(":") < 0 && "on" + h, t = t[he.expando] ? t : new he.Event(h, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : he.makeArray(n, [t]), d = he.event.special[h] || {}, r || !d.trigger || d.trigger.apply(i, n) !== !1)) {
        if (!r && !d.noBubble && !he.isWindow(i)) {
          for (l = d.delegateType || h, mt.test(l + h) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
          s === (i.ownerDocument || te) && f.push(s.defaultView || s.parentWindow || e)
        }
        for (o = 0;
          (a = f[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : d.bindType || h, u = (De.get(a, "events") || {})[t.type] && De.get(a, "handle"), u && u.apply(a, n), (u = c && a[c]) && u.apply && Ie(a) && (t.result = u.apply(a, n), t.result === !1 && t.preventDefault());
        return t.type = h, r || t.isDefaultPrevented() || d._default && d._default.apply(f.pop(), n) !== !1 || !Ie(i) || c && he.isFunction(i[h]) && !he.isWindow(i) && (s = i[c], s && (i[c] = null), he.event.triggered = h, i[h](), he.event.triggered = void 0, s && (i[c] = s)), t.result
      }
    },
    simulate: function (e, t, n) {
      var i = he.extend(new he.Event, n, {
        type: e,
        isSimulated: !0
      });
      he.event.trigger(i, null, t)
    }
  }), he.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        he.event.trigger(e, t, this)
      })
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return he.event.trigger(e, t, n, !0)
    }
  }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    he.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), he.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), fe.focusin = "onfocusin" in e, fe.focusin || he.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    var n = function (e) {
      he.event.simulate(t, e.target, he.event.fix(e))
    };
    he.event.special[t] = {
      setup: function () {
        var i = this.ownerDocument || this,
          r = De.access(i, t);
        r || i.addEventListener(e, n, !0), De.access(i, t, (r || 0) + 1)
      },
      teardown: function () {
        var i = this.ownerDocument || this,
          r = De.access(i, t) - 1;
        r ? De.access(i, t, r) : (i.removeEventListener(e, n, !0), De.remove(i, t))
      }
    }
  });
  var gt = e.location,
    vt = he.now(),
    yt = /\?/;
  he.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = (new e.DOMParser).parseFromString(t, "text/xml")
    } catch (e) {
      n = void 0
    }
    return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n
  };
  var bt = /\[\]$/,
    xt = /^(?:submit|button|image|reset|file)$/i,
    wt = /^(?:input|select|textarea|keygen)/i;
  he.param = function (e, t) {
    var n, i = [],
      r = function (e, t) {
        var n = he.isFunction(t) ? t() : t;
        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
      };
    if (he.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function () {
      r(this.name, this.value)
    });
    else
      for (n in e) U(n, e[n], t, r);
    return i.join("&")
  }, he.fn.extend({
    serialize: function () {
      return he.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        var e = he.prop(this, "elements");
        return e ? he.makeArray(e) : this
      }).filter(function () {
        var e = this.type;
        return this.name && !he(this).is(":disabled") && wt.test(this.nodeName) && !xt.test(e) && (this.checked || !Ve.test(e))
      }).map(function (e, t) {
        var n = he(this).val();
        return null == n ? null : he.isArray(n) ? he.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(/\r?\n/g, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(/\r?\n/g, "\r\n")
        }
      }).get()
    }
  });
  var Ct = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Tt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    kt = /^(?:GET|HEAD)$/,
    _t = {},
    St = {},
    Et = "*/".concat("*"),
    At = te.createElement("a");
  At.href = gt.href, he.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: gt.href,
      type: "GET",
      isLocal: Tt.test(gt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Et,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": he.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? Q(Q(e, he.ajaxSettings), t) : Q(he.ajaxSettings, e)
    },
    ajaxPrefilter: X(_t),
    ajaxTransport: X(St),
    ajax: function (t, n) {
      function i(t, n, i, s) {
        var c, f, h, x, w, C = n;
        u || (u = !0, l && e.clearTimeout(l), r = void 0, a = s || "", T.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (x = K(p, T, i)), x = Z(p, x, T, c), c ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (he.lastModified[o] = w), (w = T.getResponseHeader("etag")) && (he.etag[o] = w)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, f = x.data, h = x.error, c = !h)) : (h = C, !t && C || (C = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || C) + "", c ? v.resolveWith(m, [f, C, T]) : v.rejectWith(m, [T, C, h]), T.statusCode(b), b = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [T, p, c ? f : h]), y.fireWith(m, [T, C]), d && (g.trigger("ajaxComplete", [T, p]), --he.active || he.event.trigger("ajaxStop")))
      }
      "object" == typeof t && (n = t, t = void 0), n = n || {};
      var r, o, a, s, l, c, u, d, f, h, p = he.ajaxSetup({}, n),
        m = p.context || p,
        g = p.context && (m.nodeType || m.jquery) ? he(m) : he.event,
        v = he.Deferred(),
        y = he.Callbacks("once memory"),
        b = p.statusCode || {},
        x = {},
        w = {},
        C = "canceled",
        T = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (u) {
              if (!s)
                for (s = {}; t = Ct.exec(a);) s[t[1].toLowerCase()] = t[2];
              t = s[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function () {
            return u ? a : null
          },
          setRequestHeader: function (e, t) {
            return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
          },
          overrideMimeType: function (e) {
            return null == u && (p.mimeType = e), this
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (u) T.always(e[T.status]);
              else
                for (t in e) b[t] = [b[t], e[t]];
            return this
          },
          abort: function (e) {
            var t = e || C;
            return r && r.abort(t), i(0, t), this
          }
        };
      if (v.promise(T), p.url = ((t || p.url || gt.href) + "").replace(/^\/\//, gt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(_e) || [""], null == p.crossDomain) {
        c = te.createElement("a");
        try {
          c.href = p.url, c.href = c.href, p.crossDomain = At.protocol + "//" + At.host != c.protocol + "//" + c.host
        } catch (e) {
          p.crossDomain = !0
        }
      }
      if (p.data && p.processData && "string" != typeof p.data && (p.data = he.param(p.data, p.traditional)), G(_t, p, n, T), u) return T;
      d = he.event && p.global, d && 0 == he.active++ && he.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !kt.test(p.type), o = p.url.replace(/#.*$/, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(/%20/g, "+")) : (h = p.url.slice(o.length), p.data && (o += (yt.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (o = o.replace(/([?&])_=[^&]*/, "$1"), h = (yt.test(o) ? "&" : "?") + "_=" + vt++ + h), p.url = o + h), p.ifModified && (he.lastModified[o] && T.setRequestHeader("If-Modified-Since", he.lastModified[o]), he.etag[o] && T.setRequestHeader("If-None-Match", he.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Et + "; q=0.01" : "") : p.accepts["*"]);
      for (f in p.headers) T.setRequestHeader(f, p.headers[f]);
      if (p.beforeSend && (p.beforeSend.call(m, T, p) === !1 || u)) return T.abort();
      if (C = "abort", y.add(p.complete), T.done(p.success), T.fail(p.error), r = G(St, p, n, T)) {
        if (T.readyState = 1, d && g.trigger("ajaxSend", [T, p]), u) return T;
        p.async && p.timeout > 0 && (l = e.setTimeout(function () {
          T.abort("timeout")
        }, p.timeout));
        try {
          u = !1, r.send(x, i)
        } catch (e) {
          if (u) throw e;
          i(-1, e)
        }
      } else i(-1, "No Transport");
      return T
    },
    getJSON: function (e, t, n) {
      return he.get(e, t, n, "json")
    },
    getScript: function (e, t) {
      return he.get(e, void 0, t, "script")
    }
  }), he.each(["get", "post"], function (e, t) {
    he[t] = function (e, n, i, r) {
      return he.isFunction(n) && (r = r || i, i = n, n = void 0), he.ajax(he.extend({
        url: e,
        type: t,
        dataType: r,
        data: n,
        success: i
      }, he.isPlainObject(e) && e))
    }
  }), he._evalUrl = function (e) {
    return he.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      throws: !0
    })
  }, he.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e
      }).append(this)), this
    },
    wrapInner: function (e) {
      return he.isFunction(e) ? this.each(function (t) {
        he(this).wrapInner(e.call(this, t))
      }) : this.each(function () {
        var t = he(this),
          n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    },
    wrap: function (e) {
      var t = he.isFunction(e);
      return this.each(function (n) {
        he(this).wrapAll(t ? e.call(this, n) : e)
      })
    },
    unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        he(this).replaceWith(this.childNodes)
      }), this
    }
  }), he.expr.pseudos.hidden = function (e) {
    return !he.expr.pseudos.visible(e)
  }, he.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, he.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest
    } catch (e) {}
  };
  var It = {
      0: 200,
      1223: 204
    },
    Dt = he.ajaxSettings.xhr();
  fe.cors = !!Dt && "withCredentials" in Dt, fe.ajax = Dt = !!Dt, he.ajaxTransport(function (t) {
    var n, i;
    if (fe.cors || Dt && !t.crossDomain) return {
      send: function (r, o) {
        var a, s = t.xhr();
        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
          for (a in t.xhrFields) s[a] = t.xhrFields[a];
        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
        for (a in r) s.setRequestHeader(a, r[a]);
        n = function (e) {
          return function () {
            n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(It[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
              binary: s.response
            } : {
              text: s.responseText
            }, s.getAllResponseHeaders()))
          }
        }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            n && i()
          })
        }, n = n("abort");
        try {
          s.send(t.hasContent && t.data || null)
        } catch (e) {
          if (n) throw e
        }
      },
      abort: function () {
        n && n()
      }
    }
  }), he.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1)
  }), he.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (e) {
        return he.globalEval(e), e
      }
    }
  }), he.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), he.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, n;
      return {
        send: function (i, r) {
          t = he("<script>").prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", n = function (e) {
            t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
          }), te.head.appendChild(t[0])
        },
        abort: function () {
          n && n()
        }
      }
    }
  });
  var Ot = [],
    Pt = /(=)\?(?=&|$)|\?\?/;
  he.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Ot.pop() || he.expando + "_" + vt++;
      return this[e] = !0, e
    }
  }), he.ajaxPrefilter("json jsonp", function (t, n, i) {
    var r, o, a, s = t.jsonp !== !1 && (Pt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Pt.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Pt, "$1" + r) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
      return a || he.error(r + " was not called"), a[0]
    }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
      a = arguments
    }, i.always(function () {
      void 0 === o ? he(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Ot.push(r)), a && he.isFunction(o) && o(a[0]), a = o = void 0
    }), "script"
  }), fe.createHTMLDocument = function () {
    var e = te.implementation.createHTMLDocument("").body;
    return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
  }(), he.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];
    "boolean" == typeof t && (n = t, t = !1);
    var i, r, o;
    return t || (fe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = te.location.href, t.head.appendChild(i)) : t = te), r = be.exec(e), o = !n && [], r ? [t.createElement(r[1])] : (r = b([e], t, o), o && o.length && he(o).remove(), he.merge([], r.childNodes))
  }, he.fn.load = function (e, t, n) {
    var i, r, o, a = this,
      s = e.indexOf(" ");
    return s > -1 && (i = $(e.slice(s)), e = e.slice(0, s)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && he.ajax({
      url: e,
      type: r || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(i ? he("<div>").append(he.parseHTML(e)).find(i) : e)
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e])
      })
    }), this
  }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    he.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), he.expr.pseudos.animated = function (e) {
    return he.grep(he.timers, function (t) {
      return e === t.elem
    }).length
  }, he.offset = {
    setOffset: function (e, t, n) {
      var i, r, o, a, s, l, c, u = he.css(e, "position"),
        d = he(e),
        f = {};
      "static" === u && (e.style.position = "relative"), s = d.offset(), o = he.css(e, "top"), l = he.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
    }
  }, he.fn.extend({
    offset: function (e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        he.offset.setOffset(this, e, t)
      });
      var t, n, i, r, o = this[0];
      if (o) return o.getClientRects().length ? (i = o.getBoundingClientRect(), i.width || i.height ? (r = o.ownerDocument, n = J(r), t = r.documentElement, {
        top: i.top + n.pageYOffset - t.clientTop,
        left: i.left + n.pageXOffset - t.clientLeft
      }) : i) : {
        top: 0,
        left: 0
      }
    },
    position: function () {
      if (this[0]) {
        var e, t, n = this[0],
          i = {
            top: 0,
            left: 0
          };
        return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), he.nodeName(e[0], "html") || (i = e.offset()), i = {
          top: i.top + he.css(e[0], "borderTopWidth", !0),
          left: i.left + he.css(e[0], "borderLeftWidth", !0)
        }), {
          top: t.top - i.top - he.css(n, "marginTop", !0),
          left: t.left - i.left - he.css(n, "marginLeft", !0)
        }
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
        return e || $e
      })
    }
  }), he.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, t) {
    var n = "pageYOffset" === t;
    he.fn[e] = function (i) {
      return Ae(this, function (e, i, r) {
        var o = J(e);
        if (void 0 === r) return o ? o[t] : e[i];
        o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
      }, e, i, arguments.length)
    }
  }), he.each(["top", "left"], function (e, t) {
    he.cssHooks[t] = P(fe.pixelPosition, function (e, n) {
      if (n) return n = O(e, t), et.test(n) ? he(e).position()[t] + "px" : n
    })
  }), he.each({
    Height: "height",
    Width: "width"
  }, function (e, t) {
    he.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function (n, i) {
      he.fn[i] = function (r, o) {
        var a = arguments.length && (n || "boolean" != typeof r),
          s = n || (r === !0 || o === !0 ? "margin" : "border");
        return Ae(this, function (t, n, r) {
          var o;
          return he.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? he.css(t, n, s) : he.style(t, n, r, s)
        }, t, a ? r : void 0, a)
      }
    })
  }), he.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function (e, t) {
      return this.off(e, null, t)
    },
    delegate: function (e, t, n, i) {
      return this.on(t, e, n, i)
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  }), he.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
    return he
  });
  var Mt = e.jQuery,
    Lt = e.$;
  return he.noConflict = function (t) {
    return e.$ === he && (e.$ = Lt), t && e.jQuery === he && (e.jQuery = Mt), he
  }, t || (e.jQuery = e.$ = he), he
}),
function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function () {
  "use strict";

  function e(e) {
    var t = !1,
      n = 0,
      i = document.createElement("span");
    return new MutationObserver(function () {
        e(), t = !1
      }).observe(i, {
        attributes: !0
      }),
      function () {
        t || (t = !0, i.setAttribute("x-index", n), n += 1)
      }
  }

  function t(e) {
    var t = !1;
    return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e()
      }, ae))
    }
  }

  function n(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
  }

  function i(e, t) {
    Object.keys(t).forEach(function (i) {
      var r = "";
      ["width", "height", "top", "right", "bottom", "left"].indexOf(i) !== -1 && n(t[i]) && (r = "px"), e.style[i] = t[i] + r
    })
  }

  function r(e) {
    var t = {};
    return e && "[object Function]" === t.toString.call(e)
  }

  function o(e, t) {
    if (1 !== e.nodeType) return [];
    var n = window.getComputedStyle(e, null);
    return t ? n[t] : n
  }

  function a(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host
  }

  function s(e) {
    if (!e || ["HTML", "BODY", "#document"].indexOf(e.nodeName) !== -1) return window.document.body;
    var t = o(e),
      n = t.overflow,
      i = t.overflowX,
      r = t.overflowY;
    return /(auto|scroll)/.test(n + r + i) ? e : s(a(e))
  }

  function l(e) {
    var t = e.nodeName;
    return "BODY" !== t && ("HTML" === t || e.firstElementChild.offsetParent === e)
  }

  function c(e) {
    return null !== e.parentNode ? c(e.parentNode) : e
  }

  function u(e) {
    var t = e && e.offsetParent,
      n = t && t.nodeName;
    return n && "BODY" !== n && "HTML" !== n ? t : window.document.documentElement
  }

  function d(e, t) {
    if (!(e && e.nodeType && t && t.nodeType)) return window.document.documentElement;
    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? e : t,
      r = n ? t : e,
      o = document.createRange();
    o.setStart(i, 0), o.setEnd(r, 0);
    var a = o.commonAncestorContainer;
    if (e !== a && t !== a || i.contains(r)) return l(a) ? a : u(a);
    var s = c(e);
    return s.host ? d(s.host, t) : d(e, c(t).host)
  }

  function f(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
      n = "top" === t ? "scrollTop" : "scrollLeft",
      i = e.nodeName;
    if ("BODY" === i || "HTML" === i) {
      var r = window.document.documentElement;
      return (window.document.scrollingElement || r)[n]
    }
    return e[n]
  }

  function h(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = f(t, "top"),
      r = f(t, "left"),
      o = n ? -1 : 1;
    return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
  }

  function p(e, t) {
    var n = "x" === t ? "Left" : "Top",
      i = "Left" === n ? "Right" : "Bottom";
    return +e["border" + n + "Width"].split("px")[0] + +e["border" + i + "Width"].split("px")[0]
  }

  function m(e, t, n, i) {
    return Math.max(t["offset" + e], n["client" + e], n["offset" + e], de() ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
  }

  function g() {
    var e = window.document.body,
      t = window.document.documentElement,
      n = de() && window.getComputedStyle(t);
    return {
      height: m("Height", e, t, n),
      width: m("Width", e, t, n)
    }
  }

  function v(e) {
    return me({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    })
  }

  function y(e) {
    var t = {};
    if (de()) try {
      t = e.getBoundingClientRect();
      var n = f(e, "top"),
        i = f(e, "left");
      t.top += n, t.left += i, t.bottom += n, t.right += i
    } catch (e) {} else t = e.getBoundingClientRect();
    var r = {
        left: t.left,
        top: t.top,
        width: t.right - t.left,
        height: t.bottom - t.top
      },
      a = "HTML" === e.nodeName ? g() : {},
      s = a.width || e.clientWidth || r.right - r.left,
      l = a.height || e.clientHeight || r.bottom - r.top,
      c = e.offsetWidth - s,
      u = e.offsetHeight - l;
    if (c || u) {
      var d = o(e);
      c -= p(d, "x"), u -= p(d, "y"), r.width -= c, r.height -= u
    }
    return v(r)
  }

  function b(e, t) {
    var n = de(),
      i = "HTML" === t.nodeName,
      r = y(e),
      a = y(t),
      l = s(e),
      c = v({
        top: r.top - a.top,
        left: r.left - a.left,
        width: r.width,
        height: r.height
      });
    if (i || "BODY" === t.nodeName) {
      var u = o(t),
        d = n && i ? 0 : +u.borderTopWidth.split("px")[0],
        f = n && i ? 0 : +u.borderLeftWidth.split("px")[0],
        p = n && i ? 0 : +u.marginTop.split("px")[0],
        m = n && i ? 0 : +u.marginLeft.split("px")[0];
      c.top -= d - p, c.bottom -= d - p, c.left -= f - m, c.right -= f - m, c.marginTop = p, c.marginLeft = m
    }
    return (n ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (c = h(c, t)), c
  }

  function x(e) {
    var t = window.document.documentElement,
      n = b(e, t),
      i = Math.max(t.clientWidth, window.innerWidth || 0),
      r = Math.max(t.clientHeight, window.innerHeight || 0),
      o = f(t),
      a = f(t, "left");
    return v({
      top: o - n.top + n.marginTop,
      left: a - n.left + n.marginLeft,
      width: i,
      height: r
    })
  }

  function w(e) {
    var t = e.nodeName;
    return "BODY" !== t && "HTML" !== t && ("fixed" === o(e, "position") || w(a(e)))
  }

  function C(e, t, n, i) {
    var r = {
        top: 0,
        left: 0
      },
      o = d(e, t);
    if ("viewport" === i) r = x(o);
    else {
      var l = void 0;
      "scrollParent" === i ? (l = s(a(e)), "BODY" === l.nodeName && (l = window.document.documentElement)) : l = "window" === i ? window.document.documentElement : i;
      var c = b(l, o);
      if ("HTML" !== l.nodeName || w(o)) r = c;
      else {
        var u = g(),
          f = u.height,
          h = u.width;
        r.top += c.top - c.marginTop, r.bottom = f + c.top, r.left += c.left - c.marginLeft, r.right = h + c.left
      }
    }
    return r.left += n, r.top += n, r.right -= n, r.bottom -= n, r
  }

  function T(e) {
    return e.width * e.height
  }

  function k(e, t, n, i, r) {
    var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
    if (e.indexOf("auto") === -1) return e;
    var a = C(n, i, o, r),
      s = {
        top: {
          width: a.width,
          height: t.top - a.top
        },
        right: {
          width: a.right - t.right,
          height: a.height
        },
        bottom: {
          width: a.width,
          height: a.bottom - t.bottom
        },
        left: {
          width: t.left - a.left,
          height: a.height
        }
      },
      l = Object.keys(s).map(function (e) {
        return me({
          key: e
        }, s[e], {
          area: T(s[e])
        })
      }).sort(function (e, t) {
        return t.area - e.area
      }),
      c = l.filter(function (e) {
        var t = e.width,
          i = e.height;
        return t >= n.clientWidth && i >= n.clientHeight
      }),
      u = c.length > 0 ? c[0].key : l[0].key,
      d = e.split("-")[1];
    return u + (d ? "-" + d : "")
  }

  function _(e, t, n) {
    return b(n, d(t, n))
  }

  function S(e) {
    var t = window.getComputedStyle(e),
      n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
      i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
    return {
      width: e.offsetWidth + i,
      height: e.offsetHeight + n
    }
  }

  function E(e) {
    var t = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e]
    })
  }

  function A(e, t, n) {
    n = n.split("-")[0];
    var i = S(e),
      r = {
        width: i.width,
        height: i.height
      },
      o = ["right", "left"].indexOf(n) !== -1,
      a = o ? "top" : "left",
      s = o ? "left" : "top",
      l = o ? "height" : "width",
      c = o ? "width" : "height";
    return r[a] = t[a] + t[l] / 2 - i[l] / 2, r[s] = n === s ? t[s] - i[c] : t[E(s)], r
  }

  function I(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0]
  }

  function D(e, t, n) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === n
    });
    var i = I(e, function (e) {
      return e[t] === n
    });
    return e.indexOf(i)
  }

  function O(e, t, n) {
    return (void 0 === n ? e : e.slice(0, D(e, "name", n))).forEach(function (e) {
      e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      var n = e.function || e.fn;
      e.enabled && r(n) && (t = n(t, e))
    }), t
  }

  function P() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        attributes: {},
        flipped: !1,
        offsets: {}
      };
      e.offsets.reference = _(this.state, this.popper, this.reference), e.placement = k(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = A(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = O(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
    }
  }

  function M(e, t) {
    return e.some(function (e) {
      var n = e.name;
      return e.enabled && n === t
    })
  }

  function L(e) {
    for (var t = [!1, "ms", "webkit", "moz", "o"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length - 1; i++) {
      var r = t[i],
        o = r ? "" + r + n : e;
      if (void 0 !== window.document.body.style[o]) return o
    }
    return null
  }

  function N() {
    return this.state.isDestroyed = !0, M(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[L("transform")] = ""),
      this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
  }

  function F(e, t, n, i) {
    var r = "BODY" === e.nodeName,
      o = r ? window : e;
    o.addEventListener(t, n, {
      passive: !0
    }), r || F(s(o.parentNode), t, n, i), i.push(o)
  }

  function R(e, t, n, i) {
    n.updateBound = i, window.addEventListener("resize", n.updateBound, {
      passive: !0
    });
    var r = s(e);
    return F(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
  }

  function W() {
    this.state.eventsEnabled || (this.state = R(this.reference, this.options, this.state, this.scheduleUpdate))
  }

  function H(e, t) {
    return window.removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener("scroll", t.updateBound)
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
  }

  function V() {
    this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = H(this.reference, this.state))
  }

  function j(e, t) {
    Object.keys(t).forEach(function (n) {
      t[n] !== !1 ? e.setAttribute(n, t[n]) : e.removeAttribute(n)
    })
  }

  function B(e, t) {
    var n = {
        position: e.offsets.popper.position
      },
      r = {
        "x-placement": e.placement
      },
      o = Math.round(e.offsets.popper.left),
      a = Math.round(e.offsets.popper.top),
      s = L("transform");
    return t.gpuAcceleration && s ? (n[s] = "translate3d(" + o + "px, " + a + "px, 0)", n.top = 0, n.left = 0, n.willChange = "transform") : (n.left = o, n.top = a, n.willChange = "top, left"), i(e.instance.popper, me({}, n, e.styles)), j(e.instance.popper, me({}, r, e.attributes)), e.offsets.arrow && i(e.arrowElement, e.offsets.arrow), e
  }

  function z(e, t, n, i, r) {
    var o = _(r, t, e),
      a = k(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
    return t.setAttribute("x-placement", a), n
  }

  function q(e, t, n) {
    var i = I(e, function (e) {
        return e.name === t
      }),
      r = !!i && e.some(function (e) {
        return e.name === n && e.enabled && e.order < i.order
      });
    if (!r) {
      var o = "`" + t + "`",
        a = "`" + n + "`";
      console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
    }
    return r
  }

  function $(e, t) {
    if (!q(e.instance.modifiers, "arrow", "keepTogether")) return e;
    var n = t.element;
    if ("string" == typeof n) {
      if (!(n = e.instance.popper.querySelector(n))) return e
    } else if (!e.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
    var i = e.placement.split("-")[0],
      r = v(e.offsets.popper),
      o = e.offsets.reference,
      a = ["left", "right"].indexOf(i) !== -1,
      s = a ? "height" : "width",
      l = a ? "top" : "left",
      c = a ? "left" : "top",
      u = a ? "bottom" : "right",
      d = S(n)[s];
    o[u] - d < r[l] && (e.offsets.popper[l] -= r[l] - (o[u] - d)), o[l] + d > r[u] && (e.offsets.popper[l] += o[l] + d - r[u]);
    var f = o[l] + o[s] / 2 - d / 2,
      h = f - v(e.offsets.popper)[l];
    return h = Math.max(Math.min(r[s] - d, h), 0), e.arrowElement = n, e.offsets.arrow = {}, e.offsets.arrow[l] = Math.floor(h), e.offsets.arrow[c] = "", e
  }

  function Y(e) {
    return "end" === e ? "start" : "start" === e ? "end" : e
  }

  function U(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = ve.indexOf(e),
      i = ve.slice(n + 1).concat(ve.slice(0, n));
    return t ? i.reverse() : i
  }

  function X(e, t) {
    if (M(e.instance.modifiers, "inner")) return e;
    if (e.flipped && e.placement === e.originalPlacement) return e;
    var n = C(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
      i = e.placement.split("-")[0],
      r = E(i),
      o = e.placement.split("-")[1] || "",
      a = [];
    switch (t.behavior) {
      case ye.FLIP:
        a = [i, r];
        break;
      case ye.CLOCKWISE:
        a = U(i);
        break;
      case ye.COUNTERCLOCKWISE:
        a = U(i, !0);
        break;
      default:
        a = t.behavior
    }
    return a.forEach(function (s, l) {
      if (i !== s || a.length === l + 1) return e;
      i = e.placement.split("-")[0], r = E(i);
      var c = v(e.offsets.popper),
        u = e.offsets.reference,
        d = Math.floor,
        f = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom),
        h = d(c.left) < d(n.left),
        p = d(c.right) > d(n.right),
        m = d(c.top) < d(n.top),
        g = d(c.bottom) > d(n.bottom),
        y = "left" === i && h || "right" === i && p || "top" === i && m || "bottom" === i && g,
        b = ["top", "bottom"].indexOf(i) !== -1,
        x = !!t.flipVariations && (b && "start" === o && h || b && "end" === o && p || !b && "start" === o && m || !b && "end" === o && g);
      (f || y || x) && (e.flipped = !0, (f || y) && (i = a[l + 1]), x && (o = Y(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = me({}, e.offsets.popper, A(e.instance.popper, e.offsets.reference, e.placement)), e = O(e.instance.modifiers, e, "flip"))
    }), e
  }

  function G(e) {
    var t = v(e.offsets.popper),
      n = e.offsets.reference,
      i = e.placement.split("-")[0],
      r = Math.floor,
      o = ["top", "bottom"].indexOf(i) !== -1,
      a = o ? "right" : "bottom",
      s = o ? "left" : "top",
      l = o ? "width" : "height";
    return t[a] < r(n[s]) && (e.offsets.popper[s] = r(n[s]) - t[l]), t[s] > r(n[a]) && (e.offsets.popper[s] = r(n[a])), e
  }

  function Q(e, t, n, i) {
    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
      o = +r[1],
      a = r[2];
    if (!o) return e;
    if (0 === a.indexOf("%")) {
      var s = void 0;
      switch (a) {
        case "%p":
          s = n;
          break;
        case "%":
        case "%r":
        default:
          s = i
      }
      return v(s)[t] / 100 * o
    }
    if ("vh" === a || "vw" === a) {
      return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o
    }
    return o
  }

  function K(e, t, i, r) {
    var o = [0, 0],
      a = ["right", "left"].indexOf(r) !== -1,
      s = e.split(/(\+|\-)/).map(function (e) {
        return e.trim()
      }),
      l = s.indexOf(I(s, function (e) {
        return e.search(/,|\s/) !== -1
      }));
    s[l] && s[l].indexOf(",") === -1 && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var c = l !== -1 ? [s.slice(0, l).concat([s[l].split(/\s*,\s*|\s+/)[0]]), [s[l].split(/\s*,\s*|\s+/)[1]].concat(s.slice(l + 1))] : [s];
    return c = c.map(function (e, n) {
      var r = (1 === n ? !a : a) ? "height" : "width",
        o = !1;
      return e.reduce(function (e, t) {
        return "" === e[e.length - 1] && ["+", "-"].indexOf(t) !== -1 ? (e[e.length - 1] = t, o = !0, e) : o ? (e[e.length - 1] += t, o = !1, e) : e.concat(t)
      }, []).map(function (e) {
        return Q(e, r, t, i)
      })
    }), c.forEach(function (e, t) {
      e.forEach(function (i, r) {
        n(i) && (o[t] += i * ("-" === e[r - 1] ? -1 : 1))
      })
    }), o
  }

  function Z(e, t) {
    var i = t.offset,
      r = e.placement,
      o = e.offsets,
      a = o.popper,
      s = o.reference,
      l = r.split("-")[0],
      c = void 0;
    return c = n(+i) ? [+i, 0] : K(i, a, s, l), "left" === l ? (a.top += c[0], a.left -= c[1]) : "right" === l ? (a.top += c[0], a.left += c[1]) : "top" === l ? (a.left += c[0], a.top -= c[1]) : "bottom" === l && (a.left += c[0], a.top += c[1]), e.popper = a, e
  }

  function J(e, t) {
    var n = t.boundariesElement || u(e.instance.popper),
      i = C(e.instance.popper, e.instance.reference, t.padding, n);
    t.boundaries = i;
    var r = t.priority,
      o = v(e.offsets.popper),
      a = {
        primary: function (e) {
          var n = o[e];
          return o[e] < i[e] && !t.escapeWithReference && (n = Math.max(o[e], i[e])), pe({}, e, n)
        },
        secondary: function (e) {
          var n = "right" === e ? "left" : "top",
            r = o[n];
          return o[e] > i[e] && !t.escapeWithReference && (r = Math.min(o[n], i[e] - ("right" === e ? o.width : o.height))), pe({}, n, r)
        }
      };
    return r.forEach(function (e) {
      o = me({}, o, a[["left", "top"].indexOf(e) !== -1 ? "primary" : "secondary"](e))
    }), e.offsets.popper = o, e
  }

  function ee(e) {
    var t = e.placement,
      n = t.split("-")[0],
      i = t.split("-")[1];
    if (i) {
      var r = e.offsets.reference,
        o = v(e.offsets.popper),
        a = ["bottom", "top"].indexOf(n) !== -1,
        s = a ? "left" : "top",
        l = a ? "width" : "height",
        c = {
          start: pe({}, s, r[s]),
          end: pe({}, s, r[s] + r[l] - o[l])
        };
      e.offsets.popper = me({}, o, c[i])
    }
    return e
  }

  function te(e) {
    if (!q(e.instance.modifiers, "hide", "preventOverflow")) return e;
    var t = e.offsets.reference,
      n = I(e.instance.modifiers, function (e) {
        return "preventOverflow" === e.name
      }).boundaries;
    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
      if (e.hide === !0) return e;
      e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
    } else {
      if (e.hide === !1) return e;
      e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
    }
    return e
  }

  function ne(e) {
    var t = e.placement,
      n = t.split("-")[0],
      i = v(e.offsets.popper),
      r = v(e.offsets.reference),
      o = ["left", "right"].indexOf(n) !== -1,
      a = ["top", "left"].indexOf(n) === -1;
    return i[o ? "left" : "top"] = r[t] - (a ? i[o ? "width" : "height"] : 0), e.placement = E(t), e.offsets.popper = v(i), e
  }
  for (var ie = ["native code", "[object MutationObserverConstructor]"], re = "undefined" != typeof window, oe = ["Edge", "Trident", "Firefox"], ae = 0, se = 0; se < oe.length; se += 1)
    if (re && navigator.userAgent.indexOf(oe[se]) >= 0) {
      ae = 1;
      break
    }
  var le = re && function (e) {
      return ie.some(function (t) {
        return (e || "").toString().indexOf(t) > -1
      })
    }(window.MutationObserver),
    ce = le ? e : t,
    ue = void 0,
    de = function () {
      return void 0 === ue && (ue = navigator.appVersion.indexOf("MSIE 10") !== -1), ue
    },
    fe = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    },
    he = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
      }
    }(),
    pe = function (e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    },
    me = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
      }
      return e
    },
    ge = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
    ve = ge.slice(3),
    ye = {
      FLIP: "flip",
      CLOCKWISE: "clockwise",
      COUNTERCLOCKWISE: "counterclockwise"
    },
    be = {
      shift: {
        order: 100,
        enabled: !0,
        fn: ee
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: Z,
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: J,
        priority: ["left", "right", "top", "bottom"],
        padding: 5,
        boundariesElement: "scrollParent"
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: G
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: $,
        element: "[x-arrow]"
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: X,
        behavior: "flip",
        padding: 5,
        boundariesElement: "viewport"
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: ne
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: te
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: B,
        onLoad: z,
        gpuAcceleration: !0
      }
    },
    xe = {
      placement: "bottom",
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: be
    },
    we = function () {
      function e(t, n) {
        var o = this,
          a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        fe(this, e), this.scheduleUpdate = function () {
          return requestAnimationFrame(o.update)
        }, this.update = ce(this.update.bind(this)), this.options = me({}, e.Defaults, a), this.state = {
          isDestroyed: !1,
          isCreated: !1,
          scrollParents: []
        }, this.reference = t.jquery ? t[0] : t, this.popper = n.jquery ? n[0] : n, i(this.popper, {
          position: "absolute"
        }), this.options.modifiers = {}, Object.keys(me({}, e.Defaults.modifiers, a.modifiers)).forEach(function (t) {
          o.options.modifiers[t] = me({}, e.Defaults.modifiers[t] || {}, a.modifiers ? a.modifiers[t] : {})
        }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
          return me({
            name: e
          }, o.options.modifiers[e])
        }).sort(function (e, t) {
          return e.order - t.order
        }), this.modifiers.forEach(function (e) {
          e.enabled && r(e.onLoad) && e.onLoad(o.reference, o.popper, o.options, e, o.state)
        }), this.update();
        var s = this.options.eventsEnabled;
        s && this.enableEventListeners(), this.state.eventsEnabled = s
      }
      return he(e, [{
        key: "update",
        value: function () {
          return P.call(this)
        }
      }, {
        key: "destroy",
        value: function () {
          return N.call(this)
        }
      }, {
        key: "enableEventListeners",
        value: function () {
          return W.call(this)
        }
      }, {
        key: "disableEventListeners",
        value: function () {
          return V.call(this)
        }
      }]), e
    }();
  return we.Utils = ("undefined" != typeof window ? window : global).PopperUtils, we.placements = ge, we.Defaults = xe, we
});
var bootstrap = function (e, t, n) {
  "use strict";

  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }

  function r(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e
  }

  function o(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
  }
  t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
  var a = function () {
      function e(e) {
        return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
      }

      function n() {
        return {
          bindType: o.end,
          delegateType: o.end,
          handle: function (e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
          }
        }
      }

      function i() {
        if (window.QUnit) return !1;
        var e = document.createElement("bootstrap");
        for (var t in a)
          if (void 0 !== e.style[t]) return {
            end: a[t]
          };
        return !1
      }

      function r(e) {
        var n = this,
          i = !1;
        return t(this).one(s.TRANSITION_END, function () {
          i = !0
        }), setTimeout(function () {
          i || s.triggerTransitionEnd(n)
        }, e), this
      }
      var o = !1,
        a = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
        },
        s = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function (e) {
            do {
              e += ~~(1e6 * Math.random())
            } while (document.getElementById(e));
            return e
          },
          getSelectorFromElement: function (e) {
            var n = e.getAttribute("data-target");
            n && "#" !== n || (n = e.getAttribute("href") || "");
            try {
              return t(document).find(n).length > 0 ? n : null
            } catch (e) {
              return null
            }
          },
          reflow: function (e) {
            return e.offsetHeight
          },
          triggerTransitionEnd: function (e) {
            t(e).trigger(o.end)
          },
          supportsTransitionEnd: function () {
            return Boolean(o)
          },
          isElement: function (e) {
            return (e[0] || e).nodeType
          },
          typeCheckConfig: function (t, n, i) {
            for (var r in i)
              if (Object.prototype.hasOwnProperty.call(i, r)) {
                var o = i[r],
                  a = n[r],
                  l = a && s.isElement(a) ? "element" : e(a);
                if (!new RegExp(o).test(l)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + o + '".')
              }
          }
        };
      return function () {
        o = i(), t.fn.emulateTransitionEnd = r, s.supportsTransitionEnd() && (t.event.special[s.TRANSITION_END] = n())
      }(), s
    }(),
    s = r,
    l = o,
    c = function () {
      var e = "alert",
        n = t.fn[e],
        i = {
          DISMISS: '[data-dismiss="alert"]'
        },
        r = {
          CLOSE: "close.bs.alert",
          CLOSED: "closed.bs.alert",
          CLICK_DATA_API: "click.bs.alert.data-api"
        },
        o = {
          ALERT: "alert",
          FADE: "fade",
          SHOW: "show"
        },
        l = function () {
          function e(e) {
            this._element = e
          }
          var n = e.prototype;
          return n.close = function (e) {
            e = e || this._element;
            var t = this._getRootElement(e);
            this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
          }, n.dispose = function () {
            t.removeData(this._element, "bs.alert"), this._element = null
          }, n._getRootElement = function (e) {
            var n = a.getSelectorFromElement(e),
              i = !1;
            return n && (i = t(n)[0]), i || (i = t(e).closest("." + o.ALERT)[0]), i
          }, n._triggerCloseEvent = function (e) {
            var n = t.Event(r.CLOSE);
            return t(e).trigger(n), n
          }, n._removeElement = function (e) {
            var n = this;
            if (t(e).removeClass(o.SHOW), !a.supportsTransitionEnd() || !t(e).hasClass(o.FADE)) return void this._destroyElement(e);
            t(e).one(a.TRANSITION_END, function (t) {
              return n._destroyElement(e, t)
            }).emulateTransitionEnd(150)
          }, n._destroyElement = function (e) {
            t(e).detach().trigger(r.CLOSED).remove()
          }, e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this),
                r = i.data("bs.alert");
              r || (r = new e(this), i.data("bs.alert", r)), "close" === n && r[n](this)
            })
          }, e._handleDismiss = function (e) {
            return function (t) {
              t && t.preventDefault(), e.close(this)
            }
          }, s(e, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta.2"
            }
          }]), e
        }();
      return t(document).on(r.CLICK_DATA_API, i.DISMISS, l._handleDismiss(new l)), t.fn[e] = l._jQueryInterface, t.fn[e].Constructor = l, t.fn[e].noConflict = function () {
        return t.fn[e] = n, l._jQueryInterface
      }, l
    }(),
    u = function () {
      var e = "button",
        n = t.fn[e],
        i = {
          ACTIVE: "active",
          BUTTON: "btn",
          FOCUS: "focus"
        },
        r = {
          DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
          DATA_TOGGLE: '[data-toggle="buttons"]',
          INPUT: "input",
          ACTIVE: ".active",
          BUTTON: ".btn"
        },
        o = {
          CLICK_DATA_API: "click.bs.button.data-api",
          FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
        },
        a = function () {
          function e(e) {
            this._element = e
          }
          var n = e.prototype;
          return n.toggle = function () {
            var e = !0,
              n = !0,
              o = t(this._element).closest(r.DATA_TOGGLE)[0];
            if (o) {
              var a = t(this._element).find(r.INPUT)[0];
              if (a) {
                if ("radio" === a.type)
                  if (a.checked && t(this._element).hasClass(i.ACTIVE)) e = !1;
                  else {
                    var s = t(o).find(r.ACTIVE)[0];
                    s && t(s).removeClass(i.ACTIVE)
                  }
                if (e) {
                  if (a.hasAttribute("disabled") || o.hasAttribute("disabled") || a.classList.contains("disabled") || o.classList.contains("disabled")) return;
                  a.checked = !t(this._element).hasClass(i.ACTIVE), t(a).trigger("change")
                }
                a.focus(), n = !1
              }
            }
            n && this._element.setAttribute("aria-pressed", !t(this._element).hasClass(i.ACTIVE)), e && t(this._element).toggleClass(i.ACTIVE)
          }, n.dispose = function () {
            t.removeData(this._element, "bs.button"), this._element = null
          }, e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this).data("bs.button");
              i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]()
            })
          }, s(e, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta.2"
            }
          }]), e
        }();
      return t(document).on(o.CLICK_DATA_API, r.DATA_TOGGLE_CARROT, function (e) {
        e.preventDefault();
        var n = e.target;
        t(n).hasClass(i.BUTTON) || (n = t(n).closest(r.BUTTON)), a._jQueryInterface.call(t(n), "toggle")
      }).on(o.FOCUS_BLUR_DATA_API, r.DATA_TOGGLE_CARROT, function (e) {
        t(t(e.target).closest(r.BUTTON)[0]).toggleClass(i.FOCUS, /^focus(in)?$/.test(e.type))
      }), t.fn[e] = a._jQueryInterface, t.fn[e].Constructor = a, t.fn[e].noConflict = function () {
        return t.fn[e] = n, a._jQueryInterface
      }, a
    }(),
    d = function () {
      var e = "carousel",
        n = "bs.carousel",
        i = "." + n,
        r = t.fn[e],
        o = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0
        },
        l = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean"
        },
        c = {
          NEXT: "next",
          PREV: "prev",
          LEFT: "left",
          RIGHT: "right"
        },
        u = {
          SLIDE: "slide" + i,
          SLID: "slid" + i,
          KEYDOWN: "keydown" + i,
          MOUSEENTER: "mouseenter" + i,
          MOUSELEAVE: "mouseleave" + i,
          TOUCHEND: "touchend" + i,
          LOAD_DATA_API: "load.bs.carousel.data-api",
          CLICK_DATA_API: "click.bs.carousel.data-api"
        },
        d = {
          CAROUSEL: "carousel",
          ACTIVE: "active",
          SLIDE: "slide",
          RIGHT: "carousel-item-right",
          LEFT: "carousel-item-left",
          NEXT: "carousel-item-next",
          PREV: "carousel-item-prev",
          ITEM: "carousel-item"
        },
        f = {
          ACTIVE: ".active",
          ACTIVE_ITEM: ".active.carousel-item",
          ITEM: ".carousel-item",
          NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
          INDICATORS: ".carousel-indicators",
          DATA_SLIDE: "[data-slide], [data-slide-to]",
          DATA_RIDE: '[data-ride="carousel"]'
        },
        h = function () {
          function r(e, n) {
            this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(f.INDICATORS)[0], this._addEventListeners()
          }
          var h = r.prototype;
          return h.next = function () {
            this._isSliding || this._slide(c.NEXT)
          }, h.nextWhenVisible = function () {
            !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
          }, h.prev = function () {
            this._isSliding || this._slide(c.PREV)
          }, h.pause = function (e) {
            e || (this._isPaused = !0), t(this._element).find(f.NEXT_PREV)[0] && a.supportsTransitionEnd() && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
          }, h.cycle = function (e) {
            e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
          }, h.to = function (e) {
            var n = this;
            this._activeElement = t(this._element).find(f.ACTIVE_ITEM)[0];
            var i = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0)) {
              if (this._isSliding) return void t(this._element).one(u.SLID, function () {
                return n.to(e)
              });
              if (i === e) return this.pause(), void this.cycle();
              var r = e > i ? c.NEXT : c.PREV;
              this._slide(r, this._items[e])
            }
          }, h.dispose = function () {
            t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
          }, h._getConfig = function (n) {
            return n = t.extend({}, o, n), a.typeCheckConfig(e, n, l), n
          }, h._addEventListeners = function () {
            var e = this;
            this._config.keyboard && t(this._element).on(u.KEYDOWN, function (t) {
              return e._keydown(t)
            }), "hover" === this._config.pause && (t(this._element).on(u.MOUSEENTER, function (t) {
              return e.pause(t)
            }).on(u.MOUSELEAVE, function (t) {
              return e.cycle(t)
            }), "ontouchstart" in document.documentElement && t(this._element).on(u.TOUCHEND, function () {
              e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                return e.cycle(t)
              }, 500 + e._config.interval)
            }))
          }, h._keydown = function (e) {
            if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
              case 37:
                e.preventDefault(), this.prev();
                break;
              case 39:
                e.preventDefault(), this.next();
                break;
              default:
                return
            }
          }, h._getItemIndex = function (e) {
            return this._items = t.makeArray(t(e).parent().find(f.ITEM)), this._items.indexOf(e)
          }, h._getItemByDirection = function (e, t) {
            var n = e === c.NEXT,
              i = e === c.PREV,
              r = this._getItemIndex(t),
              o = this._items.length - 1;
            if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
            var a = e === c.PREV ? -1 : 1,
              s = (r + a) % this._items.length;
            return s === -1 ? this._items[this._items.length - 1] : this._items[s]
          }, h._triggerSlideEvent = function (e, n) {
            var i = this._getItemIndex(e),
              r = this._getItemIndex(t(this._element).find(f.ACTIVE_ITEM)[0]),
              o = t.Event(u.SLIDE, {
                relatedTarget: e,
                direction: n,
                from: r,
                to: i
              });
            return t(this._element).trigger(o), o
          }, h._setActiveIndicatorElement = function (e) {
            if (this._indicatorsElement) {
              t(this._indicatorsElement).find(f.ACTIVE).removeClass(d.ACTIVE);
              var n = this._indicatorsElement.children[this._getItemIndex(e)];
              n && t(n).addClass(d.ACTIVE)
            }
          }, h._slide = function (e, n) {
            var i, r, o, s = this,
              l = t(this._element).find(f.ACTIVE_ITEM)[0],
              h = this._getItemIndex(l),
              p = n || l && this._getItemByDirection(e, l),
              m = this._getItemIndex(p),
              g = Boolean(this._interval);
            if (e === c.NEXT ? (i = d.LEFT, r = d.NEXT, o = c.LEFT) : (i = d.RIGHT, r = d.PREV, o = c.RIGHT), p && t(p).hasClass(d.ACTIVE)) return void(this._isSliding = !1);
            if (!this._triggerSlideEvent(p, o).isDefaultPrevented() && l && p) {
              this._isSliding = !0, g && this.pause(), this._setActiveIndicatorElement(p);
              var v = t.Event(u.SLID, {
                relatedTarget: p,
                direction: o,
                from: h,
                to: m
              });
              a.supportsTransitionEnd() && t(this._element).hasClass(d.SLIDE) ? (t(p).addClass(r), a.reflow(p), t(l).addClass(i), t(p).addClass(i), t(l).one(a.TRANSITION_END, function () {
                t(p).removeClass(i + " " + r).addClass(d.ACTIVE), t(l).removeClass(d.ACTIVE + " " + r + " " + i), s._isSliding = !1, setTimeout(function () {
                  return t(s._element).trigger(v)
                }, 0)
              }).emulateTransitionEnd(600)) : (t(l).removeClass(d.ACTIVE), t(p).addClass(d.ACTIVE), this._isSliding = !1, t(this._element).trigger(v)), g && this.cycle()
            }
          }, r._jQueryInterface = function (e) {
            return this.each(function () {
              var i = t(this).data(n),
                a = t.extend({}, o, t(this).data());
              "object" == typeof e && t.extend(a, e);
              var s = "string" == typeof e ? e : a.slide;
              if (i || (i = new r(this, a), t(this).data(n, i)), "number" == typeof e) i.to(e);
              else if ("string" == typeof s) {
                if (void 0 === i[s]) throw new Error('No method named "' + s + '"');
                i[s]()
              } else a.interval && (i.pause(), i.cycle())
            })
          }, r._dataApiClickHandler = function (e) {
            var i = a.getSelectorFromElement(this);
            if (i) {
              var o = t(i)[0];
              if (o && t(o).hasClass(d.CAROUSEL)) {
                var s = t.extend({}, t(o).data(), t(this).data()),
                  l = this.getAttribute("data-slide-to");
                l && (s.interval = !1), r._jQueryInterface.call(t(o), s), l && t(o).data(n).to(l), e.preventDefault()
              }
            }
          }, s(r, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta.2"
            }
          }, {
            key: "Default",
            get: function () {
              return o
            }
          }]), r
        }();
      return t(document).on(u.CLICK_DATA_API, f.DATA_SLIDE, h._dataApiClickHandler), t(window).on(u.LOAD_DATA_API, function () {
        t(f.DATA_RIDE).each(function () {
          var e = t(this);
          h._jQueryInterface.call(e, e.data())
        })
      }), t.fn[e] = h._jQueryInterface, t.fn[e].Constructor = h, t.fn[e].noConflict = function () {
        return t.fn[e] = r, h._jQueryInterface
      }, h
    }(),
    f = function () {
      var e = "collapse",
        n = "bs.collapse",
        i = t.fn[e],
        r = {
          toggle: !0,
          parent: ""
        },
        o = {
          toggle: "boolean",
          parent: "(string|element)"
        },
        l = {
          SHOW: "show." + n,
          SHOWN: "shown." + n,
          HIDE: "hide." + n,
          HIDDEN: "hidden." + n,
          CLICK_DATA_API: "click.bs.collapse.data-api"
        },
        c = {
          SHOW: "show",
          COLLAPSE: "collapse",
          COLLAPSING: "collapsing",
          COLLAPSED: "collapsed"
        },
        u = {
          WIDTH: "width",
          HEIGHT: "height"
        },
        d = {
          ACTIVES: ".show, .collapsing",
          DATA_TOGGLE: '[data-toggle="collapse"]'
        },
        f = function () {
          function i(e, n) {
            this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var i = t(d.DATA_TOGGLE), r = 0; r < i.length; r++) {
              var o = i[r],
                s = a.getSelectorFromElement(o);
              null !== s && t(s).filter(e).length > 0 && this._triggerArray.push(o)
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
          }
          var f = i.prototype;
          return f.toggle = function () {
            t(this._element).hasClass(c.SHOW) ? this.hide() : this.show()
          }, f.show = function () {
            var e = this;
            if (!this._isTransitioning && !t(this._element).hasClass(c.SHOW)) {
              var r, o;
              if (this._parent && (r = t.makeArray(t(this._parent).children().children(d.ACTIVES)), r.length || (r = null)), !(r && (o = t(r).data(n)) && o._isTransitioning)) {
                var s = t.Event(l.SHOW);
                if (t(this._element).trigger(s), !s.isDefaultPrevented()) {
                  r && (i._jQueryInterface.call(t(r), "hide"), o || t(r).data(n, null));
                  var u = this._getDimension();
                  t(this._element).removeClass(c.COLLAPSE).addClass(c.COLLAPSING), this._element.style[u] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(c.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                  var f = function () {
                    t(e._element).removeClass(c.COLLAPSING).addClass(c.COLLAPSE).addClass(c.SHOW), e._element.style[u] = "", e.setTransitioning(!1), t(e._element).trigger(l.SHOWN)
                  };
                  if (!a.supportsTransitionEnd()) return void f();
                  var h = u[0].toUpperCase() + u.slice(1),
                    p = "scroll" + h;
                  t(this._element).one(a.TRANSITION_END, f).emulateTransitionEnd(600), this._element.style[u] = this._element[p] + "px"
                }
              }
            }
          }, f.hide = function () {
            var e = this;
            if (!this._isTransitioning && t(this._element).hasClass(c.SHOW)) {
              var n = t.Event(l.HIDE);
              if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                var i = this._getDimension();
                if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", a.reflow(this._element), t(this._element).addClass(c.COLLAPSING).removeClass(c.COLLAPSE).removeClass(c.SHOW), this._triggerArray.length)
                  for (var r = 0; r < this._triggerArray.length; r++) {
                    var o = this._triggerArray[r],
                      s = a.getSelectorFromElement(o);
                    if (null !== s) {
                      var u = t(s);
                      u.hasClass(c.SHOW) || t(o).addClass(c.COLLAPSED).attr("aria-expanded", !1)
                    }
                  }
                this.setTransitioning(!0);
                var d = function () {
                  e.setTransitioning(!1), t(e._element).removeClass(c.COLLAPSING).addClass(c.COLLAPSE).trigger(l.HIDDEN)
                };
                if (this._element.style[i] = "", !a.supportsTransitionEnd()) return void d();
                t(this._element).one(a.TRANSITION_END, d).emulateTransitionEnd(600)
              }
            }
          }, f.setTransitioning = function (e) {
            this._isTransitioning = e
          }, f.dispose = function () {
            t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
          }, f._getConfig = function (n) {
            return n = t.extend({}, r, n), n.toggle = Boolean(n.toggle), a.typeCheckConfig(e, n, o), n
          }, f._getDimension = function () {
            return t(this._element).hasClass(u.WIDTH) ? u.WIDTH : u.HEIGHT
          }, f._getParent = function () {
            var e = this,
              n = null;
            a.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
            var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
            return t(n).find(r).each(function (t, n) {
              e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
            }), n
          }, f._addAriaAndCollapsedClass = function (e, n) {
            if (e) {
              var i = t(e).hasClass(c.SHOW);
              n.length && t(n).toggleClass(c.COLLAPSED, !i).attr("aria-expanded", i)
            }
          }, i._getTargetFromElement = function (e) {
            var n = a.getSelectorFromElement(e);
            return n ? t(n)[0] : null
          }, i._jQueryInterface = function (e) {
            return this.each(function () {
              var o = t(this),
                a = o.data(n),
                s = t.extend({}, r, o.data(), "object" == typeof e && e);
              if (!a && s.toggle && /show|hide/.test(e) && (s.toggle = !1), a || (a = new i(this, s), o.data(n, a)), "string" == typeof e) {
                if (void 0 === a[e]) throw new Error('No method named "' + e + '"');
                a[e]()
              }
            })
          }, s(i, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta.2"
            }
          }, {
            key: "Default",
            get: function () {
              return r
            }
          }]), i
        }();
      return t(document).on(l.CLICK_DATA_API, d.DATA_TOGGLE, function (e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var i = t(this);
        t(a.getSelectorFromElement(this)).each(function () {
          var e = t(this),
            r = e.data(n),
            o = r ? "toggle" : i.data();
          f._jQueryInterface.call(e, o)
        })
      }), t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function () {
        return t.fn[e] = i, f._jQueryInterface
      }, f
    }(),
    h = function () {
      if (void 0 === n) throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");
      var e = "dropdown",
        i = "bs.dropdown",
        r = "." + i,
        o = t.fn[e],
        l = new RegExp("38|40|27"),
        c = {
          HIDE: "hide" + r,
          HIDDEN: "hidden" + r,
          SHOW: "show" + r,
          SHOWN: "shown" + r,
          CLICK: "click" + r,
          CLICK_DATA_API: "click.bs.dropdown.data-api",
          KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
          KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
        },
        u = {
          DISABLED: "disabled",
          SHOW: "show",
          DROPUP: "dropup",
          MENURIGHT: "dropdown-menu-right",
          MENULEFT: "dropdown-menu-left"
        },
        d = {
          DATA_TOGGLE: '[data-toggle="dropdown"]',
          FORM_CHILD: ".dropdown form",
          MENU: ".dropdown-menu",
          NAVBAR_NAV: ".navbar-nav",
          VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled)"
        },
        f = {
          TOP: "top-start",
          TOPEND: "top-end",
          BOTTOM: "bottom-start",
          BOTTOMEND: "bottom-end"
        },
        h = {
          offset: 0,
          flip: !0
        },
        p = {
          offset: "(number|string|function)",
          flip: "boolean"
        },
        m = function () {
          function o(e, t) {
            this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
          }
          var m = o.prototype;
          return m.toggle = function () {
            if (!this._element.disabled && !t(this._element).hasClass(u.DISABLED)) {
              var e = o._getParentFromElement(this._element),
                i = t(this._menu).hasClass(u.SHOW);
              if (o._clearMenus(), !i) {
                var r = {
                    relatedTarget: this._element
                  },
                  a = t.Event(c.SHOW, r);
                if (t(e).trigger(a), !a.isDefaultPrevented()) {
                  var s = this._element;
                  t(e).hasClass(u.DROPUP) && (t(this._menu).hasClass(u.MENULEFT) || t(this._menu).hasClass(u.MENURIGHT)) && (s = e), this._popper = new n(s, this._menu, this._getPopperConfig()), "ontouchstart" in document.documentElement && !t(e).closest(d.NAVBAR_NAV).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(u.SHOW), t(e).toggleClass(u.SHOW).trigger(t.Event(c.SHOWN, r))
                }
              }
            }
          }, m.dispose = function () {
            t.removeData(this._element, i), t(this._element).off(r), this._element = null, this._menu = null, null !== this._popper && this._popper.destroy(), this._popper = null
          }, m.update = function () {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
          }, m._addEventListeners = function () {
            var e = this;
            t(this._element).on(c.CLICK, function (t) {
              t.preventDefault(), t.stopPropagation(), e.toggle()
            })
          }, m._getConfig = function (n) {
            return n = t.extend({}, this.constructor.Default, t(this._element).data(), n), a.typeCheckConfig(e, n, this.constructor.DefaultType), n
          }, m._getMenuElement = function () {
            if (!this._menu) {
              var e = o._getParentFromElement(this._element);
              this._menu = t(e).find(d.MENU)[0]
            }
            return this._menu
          }, m._getPlacement = function () {
            var e = t(this._element).parent(),
              n = f.BOTTOM;
            return e.hasClass(u.DROPUP) ? (n = f.TOP, t(this._menu).hasClass(u.MENURIGHT) && (n = f.TOPEND)) : t(this._menu).hasClass(u.MENURIGHT) && (n = f.BOTTOMEND), n
          }, m._detectNavbar = function () {
            return t(this._element).closest(".navbar").length > 0
          }, m._getPopperConfig = function () {
            var e = this,
              n = {};
            "function" == typeof this._config.offset ? n.fn = function (n) {
              return n.offsets = t.extend({}, n.offsets, e._config.offset(n.offsets) || {}), n
            } : n.offset = this._config.offset;
            var i = {
              placement: this._getPlacement(),
              modifiers: {
                offset: n,
                flip: {
                  enabled: this._config.flip
                }
              }
            };
            return this._inNavbar && (i.modifiers.applyStyle = {
              enabled: !this._inNavbar
            }), i
          }, o._jQueryInterface = function (e) {
            return this.each(function () {
              var n = t(this).data(i),
                r = "object" == typeof e ? e : null;
              if (n || (n = new o(this, r), t(this).data(i, n)), "string" == typeof e) {
                if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                n[e]()
              }
            })
          }, o._clearMenus = function (e) {
            if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
              for (var n = t.makeArray(t(d.DATA_TOGGLE)), r = 0; r < n.length; r++) {
                var a = o._getParentFromElement(n[r]),
                  s = t(n[r]).data(i),
                  l = {
                    relatedTarget: n[r]
                  };
                if (s) {
                  var f = s._menu;
                  if (t(a).hasClass(u.SHOW) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(a, e.target))) {
                    var h = t.Event(c.HIDE, l);
                    t(a).trigger(h), h.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[r].setAttribute("aria-expanded", "false"), t(f).removeClass(u.SHOW), t(a).removeClass(u.SHOW).trigger(t.Event(c.HIDDEN, l)))
                  }
                }
              }
          }, o._getParentFromElement = function (e) {
            var n, i = a.getSelectorFromElement(e);
            return i && (n = t(i)[0]), n || e.parentNode
          }, o._dataApiKeydownHandler = function (e) {
            if (!(!l.test(e.which) || /button/i.test(e.target.tagName) && 32 === e.which || /input|textarea/i.test(e.target.tagName) || (e.preventDefault(), e.stopPropagation(), this.disabled || t(this).hasClass(u.DISABLED)))) {
              var n = o._getParentFromElement(this),
                i = t(n).hasClass(u.SHOW);
              if (!i && (27 !== e.which || 32 !== e.which) || i && (27 === e.which || 32 === e.which)) {
                if (27 === e.which) {
                  t(t(n).find(d.DATA_TOGGLE)[0]).trigger("focus")
                }
                return void t(this).trigger("click")
              }
              var r = t(n).find(d.VISIBLE_ITEMS).get();
              if (r.length) {
                var a = r.indexOf(e.target);
                38 === e.which && a > 0 && a--, 40 === e.which && a < r.length - 1 && a++, a < 0 && (a = 0), r[a].focus()
              }
            }
          }, s(o, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta.2"
            }
          }, {
            key: "Default",
            get: function () {
              return h
            }
          }, {
            key: "DefaultType",
            get: function () {
              return p
            }
          }]), o
        }();
      return t(document).on(c.KEYDOWN_DATA_API, d.DATA_TOGGLE, m._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, d.MENU, m._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, m._clearMenus).on(c.CLICK_DATA_API, d.DATA_TOGGLE, function (e) {
        e.preventDefault(), e.stopPropagation(), m._jQueryInterface.call(t(this), "toggle")
      }).on(c.CLICK_DATA_API, d.FORM_CHILD, function (e) {
        e.stopPropagation()
      }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
        return t.fn[e] = o, m._jQueryInterface
      }, m
    }(),
    p = function () {
      var e = "modal",
        n = ".bs.modal",
        i = t.fn[e],
        r = {
          backdrop: !0,
          keyboard: !0,
          focus: !0,
          show: !0
        },
        o = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
          show: "boolean"
        },
        l = {
          HIDE: "hide.bs.modal",
          HIDDEN: "hidden.bs.modal",
          SHOW: "show.bs.modal",
          SHOWN: "shown.bs.modal",
          FOCUSIN: "focusin.bs.modal",
          RESIZE: "resize.bs.modal",
          CLICK_DISMISS: "click.dismiss.bs.modal",
          KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
          MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
          MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
          CLICK_DATA_API: "click.bs.modal.data-api"
        },
        c = {
          SCROLLBAR_MEASURER: "modal-scrollbar-measure",
          BACKDROP: "modal-backdrop",
          OPEN: "modal-open",
          FADE: "fade",
          SHOW: "show"
        },
        u = {
          DIALOG: ".modal-dialog",
          DATA_TOGGLE: '[data-toggle="modal"]',
          DATA_DISMISS: '[data-dismiss="modal"]',
          FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          STICKY_CONTENT: ".sticky-top",
          NAVBAR_TOGGLER: ".navbar-toggler"
        },
        d = function () {
          function i(e, n) {
            this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(u.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
          }
          var d = i.prototype;
          return d.toggle = function (e) {
            return this._isShown ? this.hide() : this.show(e)
          }, d.show = function (e) {
            var n = this;
            if (!this._isTransitioning && !this._isShown) {
              a.supportsTransitionEnd() && t(this._element).hasClass(c.FADE) && (this._isTransitioning = !0);
              var i = t.Event(l.SHOW, {
                relatedTarget: e
              });
              t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(c.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(l.CLICK_DISMISS, u.DATA_DISMISS, function (e) {
                return n.hide(e)
              }), t(this._dialog).on(l.MOUSEDOWN_DISMISS, function () {
                t(n._element).one(l.MOUSEUP_DISMISS, function (e) {
                  t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                })
              }), this._showBackdrop(function () {
                return n._showElement(e)
              }))
            }
          }, d.hide = function (e) {
            var n = this;
            if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
              var i = t.Event(l.HIDE);
              if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                this._isShown = !1;
                var r = a.supportsTransitionEnd() && t(this._element).hasClass(c.FADE);
                r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(l.FOCUSIN), t(this._element).removeClass(c.SHOW), t(this._element).off(l.CLICK_DISMISS), t(this._dialog).off(l.MOUSEDOWN_DISMISS), r ? t(this._element).one(a.TRANSITION_END, function (e) {
                  return n._hideModal(e)
                }).emulateTransitionEnd(300) : this._hideModal()
              }
            }
          }, d.dispose = function () {
            t.removeData(this._element, "bs.modal"), t(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
          }, d.handleUpdate = function () {
            this._adjustDialog()
          }, d._getConfig = function (n) {
            return n = t.extend({}, r, n), a.typeCheckConfig(e, n, o), n
          }, d._showElement = function (e) {
            var n = this,
              i = a.supportsTransitionEnd() && t(this._element).hasClass(c.FADE);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && a.reflow(this._element), t(this._element).addClass(c.SHOW), this._config.focus && this._enforceFocus();
            var r = t.Event(l.SHOWN, {
                relatedTarget: e
              }),
              o = function () {
                n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(r)
              };
            i ? t(this._dialog).one(a.TRANSITION_END, o).emulateTransitionEnd(300) : o()
          }, d._enforceFocus = function () {
            var e = this;
            t(document).off(l.FOCUSIN).on(l.FOCUSIN, function (n) {
              document === n.target || e._element === n.target || t(e._element).has(n.target).length || e._element.focus()
            })
          }, d._setEscapeEvent = function () {
            var e = this;
            this._isShown && this._config.keyboard ? t(this._element).on(l.KEYDOWN_DISMISS, function (t) {
              27 === t.which && (t.preventDefault(), e.hide())
            }) : this._isShown || t(this._element).off(l.KEYDOWN_DISMISS)
          }, d._setResizeEvent = function () {
            var e = this;
            this._isShown ? t(window).on(l.RESIZE, function (t) {
              return e.handleUpdate(t)
            }) : t(window).off(l.RESIZE)
          }, d._hideModal = function () {
            var e = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
              t(document.body).removeClass(c.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(l.HIDDEN)
            })
          }, d._removeBackdrop = function () {
            this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
          }, d._showBackdrop = function (e) {
            var n = this,
              i = t(this._element).hasClass(c.FADE) ? c.FADE : "";
            if (this._isShown && this._config.backdrop) {
              var r = a.supportsTransitionEnd() && i;
              if (this._backdrop = document.createElement("div"), this._backdrop.className = c.BACKDROP, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(l.CLICK_DISMISS, function (e) {
                  if (n._ignoreBackdropClick) return void(n._ignoreBackdropClick = !1);
                  e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                }), r && a.reflow(this._backdrop), t(this._backdrop).addClass(c.SHOW), !e) return;
              if (!r) return void e();
              t(this._backdrop).one(a.TRANSITION_END, e).emulateTransitionEnd(150)
            } else if (!this._isShown && this._backdrop) {
              t(this._backdrop).removeClass(c.SHOW);
              var o = function () {
                n._removeBackdrop(), e && e()
              };
              a.supportsTransitionEnd() && t(this._element).hasClass(c.FADE) ? t(this._backdrop).one(a.TRANSITION_END, o).emulateTransitionEnd(150) : o()
            } else e && e()
          }, d._adjustDialog = function () {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
          }, d._resetAdjustments = function () {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
          }, d._checkScrollbar = function () {
            var e = document.body.getBoundingClientRect();
            this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
          }, d._setScrollbar = function () {
            var e = this;
            if (this._isBodyOverflowing) {
              t(u.FIXED_CONTENT).each(function (n, i) {
                var r = t(i)[0].style.paddingRight,
                  o = t(i).css("padding-right");
                t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
              }), t(u.STICKY_CONTENT).each(function (n, i) {
                var r = t(i)[0].style.marginRight,
                  o = t(i).css("margin-right");
                t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
              }), t(u.NAVBAR_TOGGLER).each(function (n, i) {
                var r = t(i)[0].style.marginRight,
                  o = t(i).css("margin-right");
                t(i).data("margin-right", r).css("margin-right", parseFloat(o) + e._scrollbarWidth + "px")
              });
              var n = document.body.style.paddingRight,
                i = t("body").css("padding-right");
              t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
            }
          }, d._resetScrollbar = function () {
            t(u.FIXED_CONTENT).each(function (e, n) {
              var i = t(n).data("padding-right");
              void 0 !== i && t(n).css("padding-right", i).removeData("padding-right")
            }), t(u.STICKY_CONTENT + ", " + u.NAVBAR_TOGGLER).each(function (e, n) {
              var i = t(n).data("margin-right");
              void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
            });
            var e = t("body").data("padding-right");
            void 0 !== e && t("body").css("padding-right", e).removeData("padding-right")
          }, d._getScrollbarWidth = function () {
            var e = document.createElement("div");
            e.className = c.SCROLLBAR_MEASURER, document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e), t
          }, i._jQueryInterface = function (e, n) {
            return this.each(function () {
              var r = t(this).data("bs.modal"),
                o = t.extend({}, i.Default, t(this).data(), "object" == typeof e && e);
              if (r || (r = new i(this, o), t(this).data("bs.modal", r)), "string" == typeof e) {
                if (void 0 === r[e]) throw new Error('No method named "' + e + '"');
                r[e](n)
              } else o.show && r.show(n)
            })
          }, s(i, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta.2"
            }
          }, {
            key: "Default",
            get: function () {
              return r
            }
          }]), i
        }();
      return t(document).on(l.CLICK_DATA_API, u.DATA_TOGGLE, function (e) {
        var n, i = this,
          r = a.getSelectorFromElement(this);
        r && (n = t(r)[0]);
        var o = t(n).data("bs.modal") ? "toggle" : t.extend({}, t(n).data(), t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var s = t(n).one(l.SHOW, function (e) {
          e.isDefaultPrevented() || s.one(l.HIDDEN, function () {
            t(i).is(":visible") && i.focus()
          })
        });
        d._jQueryInterface.call(t(n), o, this)
      }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function () {
        return t.fn[e] = i, d._jQueryInterface
      }, d
    }(),
    m = function () {
      if (void 0 === n) throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");
      var e = "tooltip",
        i = ".bs.tooltip",
        r = t.fn[e],
        o = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        l = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)"
        },
        c = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left"
        },
        u = {
          animation: !0,
          template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: 0,
          container: !1,
          fallbackPlacement: "flip"
        },
        d = {
          SHOW: "show",
          OUT: "out"
        },
        f = {
          HIDE: "hide" + i,
          HIDDEN: "hidden" + i,
          SHOW: "show" + i,
          SHOWN: "shown" + i,
          INSERTED: "inserted" + i,
          CLICK: "click" + i,
          FOCUSIN: "focusin" + i,
          FOCUSOUT: "focusout" + i,
          MOUSEENTER: "mouseenter" + i,
          MOUSELEAVE: "mouseleave" + i
        },
        h = {
          FADE: "fade",
          SHOW: "show"
        },
        p = {
          TOOLTIP: ".tooltip",
          TOOLTIP_INNER: ".tooltip-inner",
          ARROW: ".arrow"
        },
        m = {
          HOVER: "hover",
          FOCUS: "focus",
          CLICK: "click",
          MANUAL: "manual"
        },
        g = function () {
          function r(e, t) {
            this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
          }
          var g = r.prototype;
          return g.enable = function () {
            this._isEnabled = !0
          }, g.disable = function () {
            this._isEnabled = !1
          }, g.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled
          }, g.toggle = function (e) {
            if (this._isEnabled)
              if (e) {
                var n = this.constructor.DATA_KEY,
                  i = t(e.currentTarget).data(n);
                i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
              } else {
                if (t(this.getTipElement()).hasClass(h.SHOW)) return void this._leave(null, this);
                this._enter(null, this)
              }
          }, g.dispose = function () {
            clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
          }, g.show = function () {
            var e = this;
            if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
            var i = t.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              t(this.element).trigger(i);
              var o = t.contains(this.element.ownerDocument.documentElement, this.element);
              if (i.isDefaultPrevented() || !o) return;
              var s = this.getTipElement(),
                l = a.getUID(this.constructor.NAME);
              s.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && t(s).addClass(h.FADE);
              var c = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                u = this._getAttachment(c);
              this.addAttachmentClass(u);
              var f = this.config.container === !1 ? document.body : t(this.config.container);
              t(s).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(f), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, {
                placement: u,
                modifiers: {
                  offset: {
                    offset: this.config.offset
                  },
                  flip: {
                    behavior: this.config.fallbackPlacement
                  },
                  arrow: {
                    element: p.ARROW
                  }
                },
                onCreate: function (t) {
                  t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                },
                onUpdate: function (t) {
                  e._handlePopperPlacementChange(t)
                }
              }), t(s).addClass(h.SHOW), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);
              var m = function () {
                e.config.animation && e._fixTransition();
                var n = e._hoverState;
                e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === d.OUT && e._leave(null, e)
              };
              a.supportsTransitionEnd() && t(this.tip).hasClass(h.FADE) ? t(this.tip).one(a.TRANSITION_END, m).emulateTransitionEnd(r._TRANSITION_DURATION) : m()
            }
          }, g.hide = function (e) {
            var n = this,
              i = this.getTipElement(),
              r = t.Event(this.constructor.Event.HIDE),
              o = function () {
                n._hoverState !== d.SHOW && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
              };
            t(this.element).trigger(r), r.isDefaultPrevented() || (t(i).removeClass(h.SHOW), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[m.CLICK] = !1, this._activeTrigger[m.FOCUS] = !1, this._activeTrigger[m.HOVER] = !1, a.supportsTransitionEnd() && t(this.tip).hasClass(h.FADE) ? t(i).one(a.TRANSITION_END, o).emulateTransitionEnd(150) : o(), this._hoverState = "")
          }, g.update = function () {
            null !== this._popper && this._popper.scheduleUpdate()
          }, g.isWithContent = function () {
            return Boolean(this.getTitle())
          }, g.addAttachmentClass = function (e) {
            t(this.getTipElement()).addClass("bs-tooltip-" + e)
          }, g.getTipElement = function () {
            return this.tip = this.tip || t(this.config.template)[0], this.tip
          }, g.setContent = function () {
            var e = t(this.getTipElement());
            this.setElementContent(e.find(p.TOOLTIP_INNER), this.getTitle()), e.removeClass(h.FADE + " " + h.SHOW)
          }, g.setElementContent = function (e, n) {
            var i = this.config.html;
            "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
          }, g.getTitle = function () {
            var e = this.element.getAttribute("data-original-title");
            return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
          }, g._getAttachment = function (e) {
            return c[e.toUpperCase()]
          }, g._setListeners = function () {
            var e = this;
            this.config.trigger.split(" ").forEach(function (n) {
              if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                return e.toggle(t)
              });
              else if (n !== m.MANUAL) {
                var i = n === m.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                  r = n === m.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                t(e.element).on(i, e.config.selector, function (t) {
                  return e._enter(t)
                }).on(r, e.config.selector, function (t) {
                  return e._leave(t)
                })
              }
              t(e.element).closest(".modal").on("hide.bs.modal", function () {
                return e.hide()
              })
            }), this.config.selector ? this.config = t.extend({}, this.config, {
              trigger: "manual",
              selector: ""
            }) : this._fixTitle()
          }, g._fixTitle = function () {
            var e = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
          }, g._enter = function (e, n) {
            var i = this.constructor.DATA_KEY;
            return n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? m.FOCUS : m.HOVER] = !0), t(n.getTipElement()).hasClass(h.SHOW) || n._hoverState === d.SHOW ? void(n._hoverState = d.SHOW) : (clearTimeout(n._timeout), n._hoverState = d.SHOW, n.config.delay && n.config.delay.show ? void(n._timeout = setTimeout(function () {
              n._hoverState === d.SHOW && n.show()
            }, n.config.delay.show)) : void n.show())
          }, g._leave = function (e, n) {
            var i = this.constructor.DATA_KEY;
            if (n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? m.FOCUS : m.HOVER] = !1), !n._isWithActiveTrigger()) {
              if (clearTimeout(n._timeout), n._hoverState = d.OUT, !n.config.delay || !n.config.delay.hide) return void n.hide();
              n._timeout = setTimeout(function () {
                n._hoverState === d.OUT && n.hide()
              }, n.config.delay.hide)
            }
          }, g._isWithActiveTrigger = function () {
            for (var e in this._activeTrigger)
              if (this._activeTrigger[e]) return !0;
            return !1
          }, g._getConfig = function (n) {
            return n = t.extend({}, this.constructor.Default, t(this.element).data(), n), "number" == typeof n.delay && (n.delay = {
              show: n.delay,
              hide: n.delay
            }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), a.typeCheckConfig(e, n, this.constructor.DefaultType), n
          }, g._getDelegateConfig = function () {
            var e = {};
            if (this.config)
              for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
            return e
          }, g._cleanTipClass = function () {
            var e = t(this.getTipElement()),
              n = e.attr("class").match(o);
            null !== n && n.length > 0 && e.removeClass(n.join(""))
          }, g._handlePopperPlacementChange = function (e) {
            this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
          }, g._fixTransition = function () {
            var e = this.getTipElement(),
              n = this.config.animation;
            null === e.getAttribute("x-placement") && (t(e).removeClass(h.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
          }, r._jQueryInterface = function (e) {
            return this.each(function () {
              var n = t(this).data("bs.tooltip"),
                i = "object" == typeof e && e;
              if ((n || !/dispose|hide/.test(e)) && (n || (n = new r(this, i), t(this).data("bs.tooltip", n)), "string" == typeof e)) {
                if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                n[e]()
              }
            })
          }, s(r, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta.2"
            }
          }, {
            key: "Default",
            get: function () {
              return u
            }
          }, {
            key: "NAME",
            get: function () {
              return e
            }
          }, {
            key: "DATA_KEY",
            get: function () {
              return "bs.tooltip"
            }
          }, {
            key: "Event",
            get: function () {
              return f
            }
          }, {
            key: "EVENT_KEY",
            get: function () {
              return i
            }
          }, {
            key: "DefaultType",
            get: function () {
              return l
            }
          }]), r
        }();
      return t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
        return t.fn[e] = r, g._jQueryInterface
      }, g
    }(),
    g = function () {
      var e = "popover",
        n = ".bs.popover",
        i = t.fn[e],
        r = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        o = t.extend({}, m.Default, {
          placement: "right",
          trigger: "click",
          content: "",
          template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        a = t.extend({}, m.DefaultType, {
          content: "(string|element|function)"
        }),
        c = {
          FADE: "fade",
          SHOW: "show"
        },
        u = {
          TITLE: ".popover-header",
          CONTENT: ".popover-body"
        },
        d = {
          HIDE: "hide" + n,
          HIDDEN: "hidden" + n,
          SHOW: "show" + n,
          SHOWN: "shown" + n,
          INSERTED: "inserted" + n,
          CLICK: "click" + n,
          FOCUSIN: "focusin" + n,
          FOCUSOUT: "focusout" + n,
          MOUSEENTER: "mouseenter" + n,
          MOUSELEAVE: "mouseleave" + n
        },
        f = function (i) {
          function f() {
            return i.apply(this, arguments) || this
          }
          l(f, i);
          var h = f.prototype;
          return h.isWithContent = function () {
            return this.getTitle() || this._getContent()
          }, h.addAttachmentClass = function (e) {
            t(this.getTipElement()).addClass("bs-popover-" + e)
          }, h.getTipElement = function () {
            return this.tip = this.tip || t(this.config.template)[0], this.tip
          }, h.setContent = function () {
            var e = t(this.getTipElement());
            this.setElementContent(e.find(u.TITLE), this.getTitle()), this.setElementContent(e.find(u.CONTENT), this._getContent()), e.removeClass(c.FADE + " " + c.SHOW)
          }, h._getContent = function () {
            return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
          }, h._cleanTipClass = function () {
            var e = t(this.getTipElement()),
              n = e.attr("class").match(r);
            null !== n && n.length > 0 && e.removeClass(n.join(""))
          }, f._jQueryInterface = function (e) {
            return this.each(function () {
              var n = t(this).data("bs.popover"),
                i = "object" == typeof e ? e : null;
              if ((n || !/destroy|hide/.test(e)) && (n || (n = new f(this, i), t(this).data("bs.popover", n)), "string" == typeof e)) {
                if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                n[e]()
              }
            })
          }, s(f, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta.2"
            }
          }, {
            key: "Default",
            get: function () {
              return o
            }
          }, {
            key: "NAME",
            get: function () {
              return e
            }
          }, {
            key: "DATA_KEY",
            get: function () {
              return "bs.popover"
            }
          }, {
            key: "Event",
            get: function () {
              return d
            }
          }, {
            key: "EVENT_KEY",
            get: function () {
              return n
            }
          }, {
            key: "DefaultType",
            get: function () {
              return a
            }
          }]), f
        }(m);
      return t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function () {
        return t.fn[e] = i, f._jQueryInterface
      }, f
    }(),
    v = function () {
      var e = "scrollspy",
        n = t.fn[e],
        i = {
          offset: 10,
          method: "auto",
          target: ""
        },
        r = {
          offset: "number",
          method: "string",
          target: "(string|element)"
        },
        o = {
          ACTIVATE: "activate.bs.scrollspy",
          SCROLL: "scroll.bs.scrollspy",
          LOAD_DATA_API: "load.bs.scrollspy.data-api"
        },
        l = {
          DROPDOWN_ITEM: "dropdown-item",
          DROPDOWN_MENU: "dropdown-menu",
          ACTIVE: "active"
        },
        c = {
          DATA_SPY: '[data-spy="scroll"]',
          ACTIVE: ".active",
          NAV_LIST_GROUP: ".nav, .list-group",
          NAV_LINKS: ".nav-link",
          NAV_ITEMS: ".nav-item",
          LIST_ITEMS: ".list-group-item",
          DROPDOWN: ".dropdown",
          DROPDOWN_ITEMS: ".dropdown-item",
          DROPDOWN_TOGGLE: ".dropdown-toggle"
        },
        u = {
          OFFSET: "offset",
          POSITION: "position"
        },
        d = function () {
          function n(e, n) {
            var i = this;
            this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + c.NAV_LINKS + "," + this._config.target + " " + c.LIST_ITEMS + "," + this._config.target + " " + c.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(o.SCROLL, function (e) {
              return i._process(e)
            }), this.refresh(), this._process()
          }
          var d = n.prototype;
          return d.refresh = function () {
            var e = this,
              n = this._scrollElement !== this._scrollElement.window ? u.POSITION : u.OFFSET,
              i = "auto" === this._config.method ? n : this._config.method,
              r = i === u.POSITION ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function (e) {
              var n, o = a.getSelectorFromElement(e);
              if (o && (n = t(o)[0]), n) {
                var s = n.getBoundingClientRect();
                if (s.width || s.height) return [t(n)[i]().top + r, o]
              }
              return null
            }).filter(function (e) {
              return e
            }).sort(function (e, t) {
              return e[0] - t[0]
            }).forEach(function (t) {
              e._offsets.push(t[0]), e._targets.push(t[1])
            })
          }, d.dispose = function () {
            t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
          }, d._getConfig = function (n) {
            if (n = t.extend({}, i, n), "string" != typeof n.target) {
              var o = t(n.target).attr("id");
              o || (o = a.getUID(e), t(n.target).attr("id", o)), n.target = "#" + o
            }
            return a.typeCheckConfig(e, n, r), n
          }, d._getScrollTop = function () {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
          }, d._getScrollHeight = function () {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
          }, d._getOffsetHeight = function () {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
          }, d._process = function () {
            var e = this._getScrollTop() + this._config.offset,
              t = this._getScrollHeight(),
              n = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(), e >= n) {
              var i = this._targets[this._targets.length - 1];
              return void(this._activeTarget !== i && this._activate(i))
            }
            if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
            for (var r = this._offsets.length; r--;) {
              this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
            }
          }, d._activate = function (e) {
            this._activeTarget = e, this._clear();
            var n = this._selector.split(",");
            n = n.map(function (t) {
              return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            });
            var i = t(n.join(","));
            i.hasClass(l.DROPDOWN_ITEM) ? (i.closest(c.DROPDOWN).find(c.DROPDOWN_TOGGLE).addClass(l.ACTIVE), i.addClass(l.ACTIVE)) : (i.addClass(l.ACTIVE), i.parents(c.NAV_LIST_GROUP).prev(c.NAV_LINKS + ", " + c.LIST_ITEMS).addClass(l.ACTIVE), i.parents(c.NAV_LIST_GROUP).prev(c.NAV_ITEMS).children(c.NAV_LINKS).addClass(l.ACTIVE)), t(this._scrollElement).trigger(o.ACTIVATE, {
              relatedTarget: e
            })
          }, d._clear = function () {
            t(this._selector).filter(c.ACTIVE).removeClass(l.ACTIVE)
          }, n._jQueryInterface = function (e) {
            return this.each(function () {
              var i = t(this).data("bs.scrollspy"),
                r = "object" == typeof e && e;
              if (i || (i = new n(this, r), t(this).data("bs.scrollspy", i)), "string" == typeof e) {
                if (void 0 === i[e]) throw new Error('No method named "' + e + '"');
                i[e]()
              }
            })
          }, s(n, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta.2"
            }
          }, {
            key: "Default",
            get: function () {
              return i
            }
          }]), n
        }();
      return t(window).on(o.LOAD_DATA_API, function () {
        for (var e = t.makeArray(t(c.DATA_SPY)), n = e.length; n--;) {
          var i = t(e[n]);
          d._jQueryInterface.call(i, i.data())
        }
      }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function () {
        return t.fn[e] = n, d._jQueryInterface
      }, d
    }(),
    y = function () {
      var e = t.fn.tab,
        n = {
          HIDE: "hide.bs.tab",
          HIDDEN: "hidden.bs.tab",
          SHOW: "show.bs.tab",
          SHOWN: "shown.bs.tab",
          CLICK_DATA_API: "click.bs.tab.data-api"
        },
        i = {
          DROPDOWN_MENU: "dropdown-menu",
          ACTIVE: "active",
          DISABLED: "disabled",
          FADE: "fade",
          SHOW: "show"
        },
        r = {
          DROPDOWN: ".dropdown",
          NAV_LIST_GROUP: ".nav, .list-group",
          ACTIVE: ".active",
          ACTIVE_UL: "> li > .active",
          DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
          DROPDOWN_TOGGLE: ".dropdown-toggle",
          DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
        },
        o = function () {
          function e(e) {
            this._element = e
          }
          var o = e.prototype;
          return o.show = function () {
            var e = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(i.ACTIVE) || t(this._element).hasClass(i.DISABLED))) {
              var o, s, l = t(this._element).closest(r.NAV_LIST_GROUP)[0],
                c = a.getSelectorFromElement(this._element);
              if (l) {
                var u = "UL" === l.nodeName ? r.ACTIVE_UL : r.ACTIVE;
                s = t.makeArray(t(l).find(u)), s = s[s.length - 1]
              }
              var d = t.Event(n.HIDE, {
                  relatedTarget: this._element
                }),
                f = t.Event(n.SHOW, {
                  relatedTarget: s
                });
              if (s && t(s).trigger(d), t(this._element).trigger(f), !f.isDefaultPrevented() && !d.isDefaultPrevented()) {
                c && (o = t(c)[0]), this._activate(this._element, l);
                var h = function () {
                  var i = t.Event(n.HIDDEN, {
                      relatedTarget: e._element
                    }),
                    r = t.Event(n.SHOWN, {
                      relatedTarget: s
                    });
                  t(s).trigger(i), t(e._element).trigger(r)
                };
                o ? this._activate(o, o.parentNode, h) : h()
              }
            }
          }, o.dispose = function () {
            t.removeData(this._element, "bs.tab"), this._element = null
          }, o._activate = function (e, n, o) {
            var s, l = this;
            s = "UL" === n.nodeName ? t(n).find(r.ACTIVE_UL) : t(n).children(r.ACTIVE);
            var c = s[0],
              u = o && a.supportsTransitionEnd() && c && t(c).hasClass(i.FADE),
              d = function () {
                return l._transitionComplete(e, c, u, o)
              };
            c && u ? t(c).one(a.TRANSITION_END, d).emulateTransitionEnd(150) : d(), c && t(c).removeClass(i.SHOW)
          }, o._transitionComplete = function (e, n, o, s) {
            if (n) {
              t(n).removeClass(i.ACTIVE);
              var l = t(n.parentNode).find(r.DROPDOWN_ACTIVE_CHILD)[0];
              l && t(l).removeClass(i.ACTIVE), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
            }
            if (t(e).addClass(i.ACTIVE), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), o ? (a.reflow(e), t(e).addClass(i.SHOW)) : t(e).removeClass(i.FADE), e.parentNode && t(e.parentNode).hasClass(i.DROPDOWN_MENU)) {
              var c = t(e).closest(r.DROPDOWN)[0];
              c && t(c).find(r.DROPDOWN_TOGGLE).addClass(i.ACTIVE), e.setAttribute("aria-expanded", !0)
            }
            s && s()
          }, e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this),
                r = i.data("bs.tab");
              if (r || (r = new e(this), i.data("bs.tab", r)), "string" == typeof n) {
                if (void 0 === r[n]) throw new Error('No method named "' + n + '"');
                r[n]()
              }
            })
          }, s(e, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta.2"
            }
          }]), e
        }();
      return t(document).on(n.CLICK_DATA_API, r.DATA_TOGGLE, function (e) {
        e.preventDefault(), o._jQueryInterface.call(t(this), "show")
      }), t.fn.tab = o._jQueryInterface, t.fn.tab.Constructor = o, t.fn.tab.noConflict = function () {
        return t.fn.tab = e, o._jQueryInterface
      }, o
    }();
  return function () {
    if (void 0 === t) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
  }(), e.Util = a, e.Alert = c, e.Button = u, e.Carousel = d, e.Collapse = f, e.Dropdown = h, e.Modal = p, e.Popover = g, e.Scrollspy = v, e.Tab = y, e.Tooltip = m, e
}({}, $, Popper);
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, n, i, r) {
      return jQuery.easing[jQuery.easing.def](e, t, n, i, r)
    },
    easeInQuad: function (e, t, n, i, r) {
      return i * (t /= r) * t + n
    },
    easeOutQuad: function (e, t, n, i, r) {
      return -i * (t /= r) * (t - 2) + n
    },
    easeInOutQuad: function (e, t, n, i, r) {
      return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function (e, t, n, i, r) {
      return i * (t /= r) * t * t + n
    },
    easeOutCubic: function (e, t, n, i, r) {
      return i * ((t = t / r - 1) * t * t + 1) + n
    },
    easeInOutCubic: function (e, t, n, i, r) {
      return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function (e, t, n, i, r) {
      return i * (t /= r) * t * t * t + n
    },
    easeOutQuart: function (e, t, n, i, r) {
      return -i * ((t = t / r - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function (e, t, n, i, r) {
      return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function (e, t, n, i, r) {
      return i * (t /= r) * t * t * t * t + n
    },
    easeOutQuint: function (e, t, n, i, r) {
      return i * ((t = t / r - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function (e, t, n, i, r) {
      return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function (e, t, n, i, r) {
      return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
    },
    easeOutSine: function (e, t, n, i, r) {
      return i * Math.sin(t / r * (Math.PI / 2)) + n
    },
    easeInOutSine: function (e, t, n, i, r) {
      return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
    },
    easeInExpo: function (e, t, n, i, r) {
      return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
    },
    easeOutExpo: function (e, t, n, i, r) {
      return t == r ? n + i : i * (1 - Math.pow(2, -10 * t / r)) + n
    },
    easeInOutExpo: function (e, t, n, i, r) {
      return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
    },
    easeInCirc: function (e, t, n, i, r) {
      return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
    },
    easeOutCirc: function (e, t, n, i, r) {
      return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
    },
    easeInOutCirc: function (e, t, n, i, r) {
      return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function (e, t, n, i, r) {
      var o = 1.70158,
        a = 0,
        s = i;
      if (0 == t) return n;
      if (1 == (t /= r)) return n + i;
      if (a || (a = .3 * r), s < Math.abs(i)) {
        s = i;
        var o = a / 4
      } else var o = a / (2 * Math.PI) * Math.asin(i / s);
      return -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a)) + n
    },
    easeOutElastic: function (e, t, n, i, r) {
      var o = 1.70158,
        a = 0,
        s = i;
      if (0 == t) return n;
      if (1 == (t /= r)) return n + i;
      if (a || (a = .3 * r), s < Math.abs(i)) {
        s = i;
        var o = a / 4
      } else var o = a / (2 * Math.PI) * Math.asin(i / s);
      return s * Math.pow(2, -10 * t) * Math.sin((t * r - o) * (2 * Math.PI) / a) + i + n
    },
    easeInOutElastic: function (e, t, n, i, r) {
      var o = 1.70158,
        a = 0,
        s = i;
      if (0 == t) return n;
      if (2 == (t /= r / 2)) return n + i;
      if (a || (a = r * (.3 * 1.5)), s < Math.abs(i)) {
        s = i;
        var o = a / 4
      } else var o = a / (2 * Math.PI) * Math.asin(i / s);
      return t < 1 ? -.5 * (s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a)) + n : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a) * .5 + i + n
    },
    easeInBack: function (e, t, n, i, r, o) {
      return void 0 == o && (o = 1.70158), i * (t /= r) * t * ((o + 1) * t - o) + n
    },
    easeOutBack: function (e, t, n, i, r, o) {
      return void 0 == o && (o = 1.70158), i * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + n
    },
    easeInOutBack: function (e, t, n, i, r, o) {
      return void 0 == o && (o = 1.70158), (t /= r / 2) < 1 ? i / 2 * (t * t * ((1 + (o *= 1.525)) * t - o)) + n : i / 2 * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + n
    },
    easeInBounce: function (e, t, n, i, r) {
      return i - jQuery.easing.easeOutBounce(e, r - t, 0, i, r) + n
    },
    easeOutBounce: function (e, t, n, i, r) {
      return (t /= r) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function (e, t, n, i, r) {
      return t < r / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, i, r) + .5 * i + n
    }
  }), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function (e) {
    function t(e) {
      var t = e.length,
        i = n.type(e);
      return "function" !== i && !n.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    if (!e.jQuery) {
      var n = function (e, t) {
        return new n.fn.init(e, t)
      };
      n.isWindow = function (e) {
        return null != e && e == e.window
      }, n.type = function (e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[a.call(e)] || "object" : typeof e
      }, n.isArray = Array.isArray || function (e) {
        return "array" === n.type(e)
      }, n.isPlainObject = function (e) {
        var t;
        if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e)) return !1;
        try {
          if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf")) return !1
        } catch (e) {
          return !1
        }
        for (t in e);
        return void 0 === t || o.call(e, t)
      }, n.each = function (e, n, i) {
        var r = 0,
          o = e.length,
          a = t(e);
        if (i) {
          if (a)
            for (; o > r && n.apply(e[r], i) !== !1; r++);
          else
            for (r in e)
              if (n.apply(e[r], i) === !1) break
        } else if (a)
          for (; o > r && n.call(e[r], r, e[r]) !== !1; r++);
        else
          for (r in e)
            if (n.call(e[r], r, e[r]) === !1) break;
        return e
      }, n.data = function (e, t, r) {
        if (void 0 === r) {
          var o = e[n.expando],
            a = o && i[o];
          if (void 0 === t) return a;
          if (a && t in a) return a[t]
        } else if (void 0 !== t) {
          var o = e[n.expando] || (e[n.expando] = ++n.uuid);
          return i[o] = i[o] || {}, i[o][t] = r, r
        }
      }, n.removeData = function (e, t) {
        var r = e[n.expando],
          o = r && i[r];
        o && n.each(t, function (e, t) {
          delete o[t]
        })
      }, n.extend = function () {
        var e, t, i, r, o, a, s = arguments[0] || {},
          l = 1,
          c = arguments.length,
          u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== n.type(s) && (s = {}), l === c && (s = this, l--); c > l; l++)
          if (null != (o = arguments[l]))
            for (r in o) e = s[r], i = o[r], s !== i && (u && i && (n.isPlainObject(i) || (t = n.isArray(i))) ? (t ? (t = !1, a = e && n.isArray(e) ? e : []) : a = e && n.isPlainObject(e) ? e : {}, s[r] = n.extend(u, a, i)) : void 0 !== i && (s[r] = i));
        return s
      }, n.queue = function (e, i, r) {
        if (e) {
          i = (i || "fx") + "queue";
          var o = n.data(e, i);
          return r ? (!o || n.isArray(r) ? o = n.data(e, i, function (e, n) {
            var i = n || [];
            return null != e && (t(Object(e)) ? function (e, t) {
              for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
              if (n !== n)
                for (; void 0 !== t[i];) e[r++] = t[i++];
              e.length = r, e
            }(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)), i
          }(r)) : o.push(r), o) : o || []
        }
      }, n.dequeue = function (e, t) {
        n.each(e.nodeType ? [e] : e, function (e, i) {
          t = t || "fx";
          var r = n.queue(i, t),
            o = r.shift();
          "inprogress" === o && (o = r.shift()), o && ("fx" === t && r.unshift("inprogress"), o.call(i, function () {
            n.dequeue(i, t)
          }))
        })
      }, n.fn = n.prototype = {
        init: function (e) {
          if (e.nodeType) return this[0] = e, this;
          throw new Error("Not a DOM node.")
        },
        offset: function () {
          var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
            top: 0,
            left: 0
          };
          return {
            top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
            left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
          }
        },
        position: function () {
          function e() {
            for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
            return e || document
          }
          var t = this[0],
            e = e.apply(t),
            i = this.offset(),
            r = /^(?:body|html)$/i.test(e.nodeName) ? {
              top: 0,
              left: 0
            } : n(e).offset();
          return i.top -= parseFloat(t.style.marginTop) || 0, i.left -= parseFloat(t.style.marginLeft) || 0, e.style && (r.top += parseFloat(e.style.borderTopWidth) || 0, r.left += parseFloat(e.style.borderLeftWidth) || 0), {
            top: i.top - r.top,
            left: i.left - r.left
          }
        }
      };
      var i = {};
      n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
      for (var r = {}, o = r.hasOwnProperty, a = r.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) r["[object " + s[l] + "]"] = s[l].toLowerCase();
      n.fn.init.prototype = n.fn, e.Velocity = {
        Utilities: n
      }
    }
  }(window), function (e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
  }(function () {
    return function (e, t, n, i) {
      function r(e) {
        for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
          var r = e[t];
          r && i.push(r)
        }
        return i
      }

      function o(e) {
        return m.isWrapped(e) ? e = [].slice.call(e) : m.isNode(e) && (e = [e]), e
      }

      function a(e) {
        var t = f.data(e, "velocity");
        return null === t ? i : t
      }

      function s(e) {
        return function (t) {
          return Math.round(t * e) * (1 / e)
        }
      }

      function l(e, n, i, r) {
        function o(e, t) {
          return 1 - 3 * t + 3 * e
        }

        function a(e, t) {
          return 3 * t - 6 * e
        }

        function s(e) {
          return 3 * e
        }

        function l(e, t, n) {
          return ((o(t, n) * e + a(t, n)) * e + s(t)) * e
        }

        function c(e, t, n) {
          return 3 * o(t, n) * e * e + 2 * a(t, n) * e + s(t)
        }

        function u(t, n) {
          for (var r = 0; m > r; ++r) {
            var o = c(n, e, i);
            if (0 === o) return n;
            n -= (l(n, e, i) - t) / o
          }
          return n
        }

        function d() {
          for (var t = 0; b > t; ++t) T[t] = l(t * x, e, i)
        }

        function f(t, n, r) {
          var o, a, s = 0;
          do {
            a = n + (r - n) / 2, o = l(a, e, i) - t, o > 0 ? r = a : n = a
          } while (Math.abs(o) > v && ++s < y);
          return a
        }

        function h(t) {
          for (var n = 0, r = 1, o = b - 1; r != o && T[r] <= t; ++r) n += x;
          --r;
          var a = (t - T[r]) / (T[r + 1] - T[r]),
            s = n + a * x,
            l = c(s, e, i);
          return l >= g ? u(t, s) : 0 == l ? s : f(t, n, n + x)
        }

        function p() {
          k = !0, (e != n || i != r) && d()
        }
        var m = 4,
          g = .001,
          v = 1e-7,
          y = 10,
          b = 11,
          x = 1 / (b - 1),
          w = "Float32Array" in t;
        if (4 !== arguments.length) return !1;
        for (var C = 0; 4 > C; ++C)
          if ("number" != typeof arguments[C] || isNaN(arguments[C]) || !isFinite(arguments[C])) return !1;
        e = Math.min(e, 1), i = Math.min(i, 1), e = Math.max(e, 0), i = Math.max(i, 0);
        var T = w ? new Float32Array(b) : new Array(b),
          k = !1,
          _ = function (t) {
            return k || p(), e === n && i === r ? t : 0 === t ? 0 : 1 === t ? 1 : l(h(t), n, r)
          };
        _.getControlPoints = function () {
          return [{
            x: e,
            y: n
          }, {
            x: i,
            y: r
          }]
        };
        var S = "generateBezier(" + [e, n, i, r] + ")";
        return _.toString = function () {
          return S
        }, _
      }

      function c(e, t) {
        var n = e;
        return m.isString(e) ? b.Easings[e] || (n = !1) : n = m.isArray(e) && 1 === e.length ? s.apply(null, e) : m.isArray(e) && 2 === e.length ? x.apply(null, e.concat([t])) : !(!m.isArray(e) || 4 !== e.length) && l.apply(null, e), n === !1 && (n = b.Easings[b.defaults.easing] ? b.defaults.easing : y), n
      }

      function u(e) {
        if (e) {
          var t = (new Date).getTime(),
            n = b.State.calls.length;
          n > 1e4 && (b.State.calls = r(b.State.calls));
          for (var o = 0; n > o; o++)
            if (b.State.calls[o]) {
              var s = b.State.calls[o],
                l = s[0],
                c = s[2],
                h = s[3],
                p = !!h,
                g = null;
              h || (h = b.State.calls[o][3] = t - 16);
              for (var v = Math.min((t - h) / c.duration, 1), y = 0, x = l.length; x > y; y++) {
                var C = l[y],
                  k = C.element;
                if (a(k)) {
                  var _ = !1;
                  if (c.display !== i && null !== c.display && "none" !== c.display) {
                    if ("flex" === c.display) {
                      var S = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                      f.each(S, function (e, t) {
                        w.setPropertyValue(k, "display", t)
                      })
                    }
                    w.setPropertyValue(k, "display", c.display)
                  }
                  c.visibility !== i && "hidden" !== c.visibility && w.setPropertyValue(k, "visibility", c.visibility);
                  for (var E in C)
                    if ("element" !== E) {
                      var A, I = C[E],
                        D = m.isString(I.easing) ? b.Easings[I.easing] : I.easing;
                      if (1 === v) A = I.endValue;
                      else {
                        var O = I.endValue - I.startValue;
                        if (A = I.startValue + O * D(v, c, O), !p && A === I.currentValue) continue
                      }
                      if (I.currentValue = A, "tween" === E) g = A;
                      else {
                        if (w.Hooks.registered[E]) {
                          var P = w.Hooks.getRoot(E),
                            M = a(k).rootPropertyValueCache[P];
                          M && (I.rootPropertyValue = M)
                        }
                        var L = w.setPropertyValue(k, E, I.currentValue + (0 === parseFloat(A) ? "" : I.unitType), I.rootPropertyValue, I.scrollData);
                        w.Hooks.registered[E] && (a(k).rootPropertyValueCache[P] = w.Normalizations.registered[P] ? w.Normalizations.registered[P]("extract", null, L[1]) : L[1]), "transform" === L[0] && (_ = !0)
                      }
                    }
                  c.mobileHA && a(k).transformCache.translate3d === i && (a(k).transformCache.translate3d = "(0px, 0px, 0px)", _ = !0), _ && w.flushTransformCache(k)
                }
              }
              c.display !== i && "none" !== c.display && (b.State.calls[o][2].display = !1), c.visibility !== i && "hidden" !== c.visibility && (b.State.calls[o][2].visibility = !1), c.progress && c.progress.call(s[1], s[1], v, Math.max(0, h + c.duration - t), h, g), 1 === v && d(o)
            }
        }
        b.State.isTicking && T(u)
      }

      function d(e, t) {
        if (!b.State.calls[e]) return !1;
        for (var n = b.State.calls[e][0], r = b.State.calls[e][1], o = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, c = 0, u = n.length; u > c; c++) {
          var d = n[c].element;
          if (t || o.loop || ("none" === o.display && w.setPropertyValue(d, "display", o.display), "hidden" === o.visibility && w.setPropertyValue(d, "visibility", o.visibility)), o.loop !== !0 && (f.queue(d)[1] === i || !/\.velocityQueueEntryFlag/i.test(f.queue(d)[1])) && a(d)) {
            a(d).isAnimating = !1, a(d).rootPropertyValueCache = {};
            var h = !1;
            f.each(w.Lists.transforms3D, function (e, t) {
              var n = /^scale/.test(t) ? 1 : 0,
                r = a(d).transformCache[t];
              a(d).transformCache[t] !== i && new RegExp("^\\(" + n + "[^.]").test(r) && (h = !0, delete a(d).transformCache[t])
            }), o.mobileHA && (h = !0, delete a(d).transformCache.translate3d), h && w.flushTransformCache(d), w.Values.removeClass(d, "velocity-animating")
          }
          if (!t && o.complete && !o.loop && c === u - 1) try {
            o.complete.call(r, r)
          } catch (e) {
            setTimeout(function () {
              throw e
            }, 1)
          }
          s && o.loop !== !0 && s(r), a(d) && o.loop === !0 && !t && (f.each(a(d).tweensContainer, function (e, t) {
            /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
          }), b(d, "reverse", {
            loop: !0,
            delay: o.delay
          })), o.queue !== !1 && f.dequeue(d, o.queue)
        }
        b.State.calls[e] = !1;
        for (var p = 0, m = b.State.calls.length; m > p; p++)
          if (b.State.calls[p] !== !1) {
            l = !0;
            break
          }
        l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
      }
      var f, h = function () {
          if (n.documentMode) return n.documentMode;
          for (var e = 7; e > 4; e--) {
            var t = n.createElement("div");
            if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
          }
          return i
        }(),
        p = function () {
          var e = 0;
          return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
            var n, i = (new Date).getTime();
            return n = Math.max(0, 16 - (i - e)), e = i + n, setTimeout(function () {
              t(i + n)
            }, n)
          }
        }(),
        m = {
          isString: function (e) {
            return "string" == typeof e
          },
          isArray: Array.isArray || function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
          },
          isFunction: function (e) {
            return "[object Function]" === Object.prototype.toString.call(e)
          },
          isNode: function (e) {
            return e && e.nodeType
          },
          isNodeList: function (e) {
            return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== i && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
          },
          isWrapped: function (e) {
            return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
          },
          isSVG: function (e) {
            return t.SVGElement && e instanceof t.SVGElement
          },
          isEmptyObject: function (e) {
            for (var t in e) return !1;
            return !0
          }
        },
        g = !1;
      if (e.fn && e.fn.jquery ? (f = e, g = !0) : f = t.Velocity.Utilities, 8 >= h && !g) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
      if (7 >= h) return void(jQuery.fn.velocity = jQuery.fn.animate);
      var v = 400,
        y = "swing",
        b = {
          State: {
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            isAndroid: /Android/i.test(navigator.userAgent),
            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
            isChrome: t.chrome,
            isFirefox: /Firefox/i.test(navigator.userAgent),
            prefixElement: n.createElement("div"),
            prefixMatches: {},
            scrollAnchor: null,
            scrollPropertyLeft: null,
            scrollPropertyTop: null,
            isTicking: !1,
            calls: []
          },
          CSS: {},
          Utilities: f,
          Redirects: {},
          Easings: {},
          Promise: t.Promise,
          defaults: {
            queue: "",
            duration: v,
            easing: y,
            begin: i,
            complete: i,
            progress: i,
            display: i,
            visibility: i,
            loop: !1,
            delay: !1,
            mobileHA: !0,
            _cacheValues: !0
          },
          init: function (e) {
            f.data(e, "velocity", {
              isSVG: m.isSVG(e),
              isAnimating: !1,
              computedStyle: null,
              tweensContainer: null,
              rootPropertyValueCache: {},
              transformCache: {}
            })
          },
          hook: null,
          mock: !1,
          version: {
            major: 1,
            minor: 2,
            patch: 2
          },
          debug: !1
        };
      t.pageYOffset !== i ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
      var x = function () {
        function e(e) {
          return -e.tension * e.x - e.friction * e.v
        }

        function t(t, n, i) {
          var r = {
            x: t.x + i.dx * n,
            v: t.v + i.dv * n,
            tension: t.tension,
            friction: t.friction
          };
          return {
            dx: r.v,
            dv: e(r)
          }
        }

        function n(n, i) {
          var r = {
              dx: n.v,
              dv: e(n)
            },
            o = t(n, .5 * i, r),
            a = t(n, .5 * i, o),
            s = t(n, i, a),
            l = 1 / 6 * (r.dx + 2 * (o.dx + a.dx) + s.dx),
            c = 1 / 6 * (r.dv + 2 * (o.dv + a.dv) + s.dv);
          return n.x = n.x + l * i, n.v = n.v + c * i, n
        }
        return function e(t, i, r) {
          var o, a, s, l = {
              x: -1,
              v: 0,
              tension: null,
              friction: null
            },
            c = [0],
            u = 0;
          for (t = parseFloat(t) || 500, i = parseFloat(i) || 20, r = r || null, l.tension = t, l.friction = i, o = null !== r, o ? (u = e(t, i), a = u / r * .016) : a = .016; s = n(s || l, a), c.push(1 + s.x), u += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;);
          return o ? function (e) {
            return c[e * (c.length - 1) | 0]
          } : u
        }
      }();
      b.Easings = {
        linear: function (e) {
          return e
        },
        swing: function (e) {
          return .5 - Math.cos(e * Math.PI) / 2
        },
        spring: function (e) {
          return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
        }
      }, f.each([
        ["ease", [.25, .1, .25, 1]],
        ["ease-in", [.42, 0, 1, 1]],
        ["ease-out", [0, 0, .58, 1]],
        ["ease-in-out", [.42, 0, .58, 1]],
        ["easeInSine", [.47, 0, .745, .715]],
        ["easeOutSine", [.39, .575, .565, 1]],
        ["easeInOutSine", [.445, .05, .55, .95]],
        ["easeInQuad", [.55, .085, .68, .53]],
        ["easeOutQuad", [.25, .46, .45, .94]],
        ["easeInOutQuad", [.455, .03, .515, .955]],
        ["easeInCubic", [.55, .055, .675, .19]],
        ["easeOutCubic", [.215, .61, .355, 1]],
        ["easeInOutCubic", [.645, .045, .355, 1]],
        ["easeInQuart", [.895, .03, .685, .22]],
        ["easeOutQuart", [.165, .84, .44, 1]],
        ["easeInOutQuart", [.77, 0, .175, 1]],
        ["easeInQuint", [.755, .05, .855, .06]],
        ["easeOutQuint", [.23, 1, .32, 1]],
        ["easeInOutQuint", [.86, 0, .07, 1]],
        ["easeInExpo", [.95, .05, .795, .035]],
        ["easeOutExpo", [.19, 1, .22, 1]],
        ["easeInOutExpo", [1, 0, 0, 1]],
        ["easeInCirc", [.6, .04, .98, .335]],
        ["easeOutCirc", [.075, .82, .165, 1]],
        ["easeInOutCirc", [.785, .135, .15, .86]]
      ], function (e, t) {
        b.Easings[t[0]] = l.apply(null, t[1])
      });
      var w = b.CSS = {
        RegEx: {
          isHex: /^#([A-f\d]{3}){1,2}$/i,
          valueUnwrap: /^[A-z]+\((.*)\)$/i,
          wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
          valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
        },
        Lists: {
          colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
          transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
          transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
        },
        Hooks: {
          templates: {
            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
            backgroundPosition: ["X Y", "0% 0%"],
            transformOrigin: ["X Y Z", "50% 50% 0px"],
            perspectiveOrigin: ["X Y", "50% 50%"]
          },
          registered: {},
          register: function () {
            for (var e = 0; e < w.Lists.colors.length; e++) {
              var t = "color" === w.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
              w.Hooks.templates[w.Lists.colors[e]] = ["Red Green Blue Alpha", t]
            }
            var n, i, r;
            if (h)
              for (n in w.Hooks.templates) {
                i = w.Hooks.templates[n], r = i[0].split(" ");
                var o = i[1].match(w.RegEx.valueSplit);
                "Color" === r[0] && (r.push(r.shift()), o.push(o.shift()), w.Hooks.templates[n] = [r.join(" "), o.join(" ")])
              }
            for (n in w.Hooks.templates) {
              i = w.Hooks.templates[n], r = i[0].split(" ");
              for (var e in r) {
                var a = n + r[e],
                  s = e;
                w.Hooks.registered[a] = [n, s]
              }
            }
          },
          getRoot: function (e) {
            var t = w.Hooks.registered[e];
            return t ? t[0] : e
          },
          cleanRootPropertyValue: function (e, t) {
            return w.RegEx.valueUnwrap.test(t) && (t = t.match(w.RegEx.valueUnwrap)[1]), w.Values.isCSSNullValue(t) && (t = w.Hooks.templates[e][1]), t
          },
          extractValue: function (e, t) {
            var n = w.Hooks.registered[e];
            if (n) {
              var i = n[0],
                r = n[1];
              return t = w.Hooks.cleanRootPropertyValue(i, t), t.toString().match(w.RegEx.valueSplit)[r]
            }
            return t
          },
          injectValue: function (e, t, n) {
            var i = w.Hooks.registered[e];
            if (i) {
              var r, o = i[0],
                a = i[1];
              return n = w.Hooks.cleanRootPropertyValue(o, n), r = n.toString().match(w.RegEx.valueSplit), r[a] = t, r.join(" ")
            }
            return n
          }
        },
        Normalizations: {
          registered: {
            clip: function (e, t, n) {
              switch (e) {
                case "name":
                  return "clip";
                case "extract":
                  var i;
                  return w.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : (i = n.toString().match(w.RegEx.valueUnwrap), i = i ? i[1].replace(/,(\s+)?/g, " ") : n), i;
                case "inject":
                  return "rect(" + n + ")"
              }
            },
            blur: function (e, t, n) {
              switch (e) {
                case "name":
                  return b.State.isFirefox ? "filter" : "-webkit-filter";
                case "extract":
                  var i = parseFloat(n);
                  if (!i && 0 !== i) {
                    var r = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                    i = r ? r[1] : 0
                  }
                  return i;
                case "inject":
                  return parseFloat(n) ? "blur(" + n + ")" : "none"
              }
            },
            opacity: function (e, t, n) {
              if (8 >= h) switch (e) {
                case "name":
                  return "filter";
                case "extract":
                  var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                  return n = i ? i[1] / 100 : 1;
                case "inject":
                  return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
              } else switch (e) {
                case "name":
                  return "opacity";
                case "extract":
                  return n;
                case "inject":
                  return n
              }
            }
          },
          register: function () {
            9 >= h || b.State.isGingerbread || (w.Lists.transformsBase = w.Lists.transformsBase.concat(w.Lists.transforms3D));
            for (var e = 0; e < w.Lists.transformsBase.length; e++) ! function () {
              var t = w.Lists.transformsBase[e];
              w.Normalizations.registered[t] = function (e, n, r) {
                switch (e) {
                  case "name":
                    return "transform";
                  case "extract":
                    return a(n) === i || a(n).transformCache[t] === i ? /^scale/i.test(t) ? 1 : 0 : a(n).transformCache[t].replace(/[()]/g, "");
                  case "inject":
                    var o = !1;
                    switch (t.substr(0, t.length - 1)) {
                      case "translate":
                        o = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                        break;
                      case "scal":
                      case "scale":
                        b.State.isAndroid && a(n).transformCache[t] === i && 1 > r && (r = 1), o = !/(\d)$/i.test(r);
                        break;
                      case "skew":
                        o = !/(deg|\d)$/i.test(r);
                        break;
                      case "rotate":
                        o = !/(deg|\d)$/i.test(r)
                    }
                    return o || (a(n).transformCache[t] = "(" + r + ")"), a(n).transformCache[t]
                }
              }
            }();
            for (var e = 0; e < w.Lists.colors.length; e++) ! function () {
              var t = w.Lists.colors[e];
              w.Normalizations.registered[t] = function (e, n, r) {
                switch (e) {
                  case "name":
                    return t;
                  case "extract":
                    var o;
                    if (w.RegEx.wrappedValueAlreadyExtracted.test(r)) o = r;
                    else {
                      var a, s = {
                        black: "rgb(0, 0, 0)",
                        blue: "rgb(0, 0, 255)",
                        gray: "rgb(128, 128, 128)",
                        green: "rgb(0, 128, 0)",
                        red: "rgb(255, 0, 0)",
                        white: "rgb(255, 255, 255)"
                      };
                      /^[A-z]+$/i.test(r) ? a = s[r] !== i ? s[r] : s.black : w.RegEx.isHex.test(r) ? a = "rgb(" + w.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (a = s.black), o = (a || r).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                    }
                    return 8 >= h || 3 !== o.split(" ").length || (o += " 1"), o;
                  case "inject":
                    return 8 >= h ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"), (8 >= h ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                }
              }
            }()
          }
        },
        Names: {
          camelCase: function (e) {
            return e.replace(/-(\w)/g, function (e, t) {
              return t.toUpperCase()
            })
          },
          SVGAttribute: function (e) {
            var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
            return (h || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
          },
          prefixCheck: function (e) {
            if (b.State.prefixMatches[e]) return [b.State.prefixMatches[e], !0];
            for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; i > n; n++) {
              var r;
              if (r = 0 === n ? e : t[n] + e.replace(/^\w/, function (e) {
                  return e.toUpperCase()
                }), m.isString(b.State.prefixElement.style[r])) return b.State.prefixMatches[e] = r, [r, !0]
            }
            return [e, !1]
          }
        },
        Values: {
          hexToRgb: function (e) {
            var t, n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
            return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, i) {
              return t + t + n + n + i + i
            }), t = n.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
          },
          isCSSNullValue: function (e) {
            return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
          },
          getUnitType: function (e) {
            return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
          },
          getDisplayType: function (e) {
            var t = e && e.tagName.toString().toLowerCase();
            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
          },
          addClass: function (e, t) {
            e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
          },
          removeClass: function (e, t) {
            e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
          }
        },
        getPropertyValue: function (e, n, r, o) {
          function s(e, n) {
            function r() {
              c && w.setPropertyValue(e, "display", "none")
            }
            var l = 0;
            if (8 >= h) l = f.css(e, n);
            else {
              var c = !1;
              if (/^(width|height)$/.test(n) && 0 === w.getPropertyValue(e, "display") && (c = !0, w.setPropertyValue(e, "display", w.Values.getDisplayType(e))), !o) {
                if ("height" === n && "border-box" !== w.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                  var u = e.offsetHeight - (parseFloat(w.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingBottom")) || 0);
                  return r(), u
                }
                if ("width" === n && "border-box" !== w.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                  var d = e.offsetWidth - (parseFloat(w.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingRight")) || 0);
                  return r(), d
                }
              }
              var p;
              p = a(e) === i ? t.getComputedStyle(e, null) : a(e).computedStyle ? a(e).computedStyle : a(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === n && (n = "borderTopColor"), l = 9 === h && "filter" === n ? p.getPropertyValue(n) : p[n], ("" === l || null === l) && (l = e.style[n]), r()
            }
            if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
              var m = s(e, "position");
              ("fixed" === m || "absolute" === m && /top|left/i.test(n)) && (l = f(e).position()[n] + "px")
            }
            return l
          }
          var l;
          if (w.Hooks.registered[n]) {
            var c = n,
              u = w.Hooks.getRoot(c);
            r === i && (r = w.getPropertyValue(e, w.Names.prefixCheck(u)[0])), w.Normalizations.registered[u] && (r = w.Normalizations.registered[u]("extract", e, r)), l = w.Hooks.extractValue(c, r)
          } else if (w.Normalizations.registered[n]) {
            var d, p;
            d = w.Normalizations.registered[n]("name", e), "transform" !== d && (p = s(e, w.Names.prefixCheck(d)[0]), w.Values.isCSSNullValue(p) && w.Hooks.templates[n] && (p = w.Hooks.templates[n][1])), l = w.Normalizations.registered[n]("extract", e, p)
          }
          if (!/^[\d-]/.test(l))
            if (a(e) && a(e).isSVG && w.Names.SVGAttribute(n))
              if (/^(height|width)$/i.test(n)) try {
                l = e.getBBox()[n]
              } catch (e) {
                l = 0
              } else l = e.getAttribute(n);
              else l = s(e, w.Names.prefixCheck(n)[0]);
          return w.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + n + ": " + l), l
        },
        setPropertyValue: function (e, n, i, r, o) {
          var s = n;
          if ("scroll" === n) o.container ? o.container["scroll" + o.direction] = i : "Left" === o.direction ? t.scrollTo(i, o.alternateValue) : t.scrollTo(o.alternateValue, i);
          else if (w.Normalizations.registered[n] && "transform" === w.Normalizations.registered[n]("name", e)) w.Normalizations.registered[n]("inject", e, i), s = "transform", i = a(e).transformCache[n];
          else {
            if (w.Hooks.registered[n]) {
              var l = n,
                c = w.Hooks.getRoot(n);
              r = r || w.getPropertyValue(e, c), i = w.Hooks.injectValue(l, i, r), n = c
            }
            if (w.Normalizations.registered[n] && (i = w.Normalizations.registered[n]("inject", e, i), n = w.Normalizations.registered[n]("name", e)), s = w.Names.prefixCheck(n)[0], 8 >= h) try {
              e.style[s] = i
            } catch (e) {
              b.debug && console.log("Browser does not support [" + i + "] for [" + s + "]")
            } else a(e) && a(e).isSVG && w.Names.SVGAttribute(n) ? e.setAttribute(n, i) : e.style[s] = i;
            b.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i)
          }
          return [s, i]
        },
        flushTransformCache: function (e) {
          function t(t) {
            return parseFloat(w.getPropertyValue(e, t))
          }
          var n = "";
          if ((h || b.State.isAndroid && !b.State.isChrome) && a(e).isSVG) {
            var i = {
              translate: [t("translateX"), t("translateY")],
              skewX: [t("skewX")],
              skewY: [t("skewY")],
              scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
              rotate: [t("rotateZ"), 0, 0]
            };
            f.each(a(e).transformCache, function (e) {
              /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), i[e] && (n += e + "(" + i[e].join(" ") + ") ", delete i[e])
            })
          } else {
            var r, o;
            f.each(a(e).transformCache, function (t) {
              return r = a(e).transformCache[t], "transformPerspective" === t ? (o = r, !0) : (9 === h && "rotateZ" === t && (t = "rotate"), void(n += t + r + " "))
            }), o && (n = "perspective" + o + " " + n)
          }
          w.setPropertyValue(e, "transform", n)
        }
      };
      w.Hooks.register(), w.Normalizations.register(), b.hook = function (e, t, n) {
        var r = i;
        return e = o(e), f.each(e, function (e, o) {
          if (a(o) === i && b.init(o), n === i) r === i && (r = b.CSS.getPropertyValue(o, t));
          else {
            var s = b.CSS.setPropertyValue(o, t, n);
            "transform" === s[0] && b.CSS.flushTransformCache(o), r = s
          }
        }), r
      };
      var C = function () {
        function e() {
          return s ? E.promise || null : l
        }

        function r() {
          function e(e) {
            function d(e, t) {
              var n = i,
                r = i,
                a = i;
              return m.isArray(e) ? (n = e[0], !m.isArray(e[1]) && /^[\d-]/.test(e[1]) || m.isFunction(e[1]) || w.RegEx.isHex.test(e[1]) ? a = e[1] : (m.isString(e[1]) && !w.RegEx.isHex.test(e[1]) || m.isArray(e[1])) && (r = t ? e[1] : c(e[1], s.duration), e[2] !== i && (a = e[2]))) : n = e, t || (r = r || s.easing), m.isFunction(n) && (n = n.call(o, k, T)), m.isFunction(a) && (a = a.call(o, k, T)), [n || 0, r, a]
            }

            function h(e, t) {
              var n, i;
              return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                return n = e, ""
              }), n || (n = w.Values.getUnitType(e)), [i, n]
            }
            if (s.begin && 0 === k) try {
              s.begin.call(p, p)
            } catch (e) {
              setTimeout(function () {
                throw e
              }, 1)
            }
            if ("scroll" === A) {
              var v, x, C, _ = /^x$/i.test(s.axis) ? "Left" : "Top",
                S = parseFloat(s.offset) || 0;
              s.container ? m.isWrapped(s.container) || m.isNode(s.container) ? (s.container = s.container[0] || s.container, v = s.container["scroll" + _], C = v + f(o).position()[_.toLowerCase()] + S) : s.container = null : (v = b.State.scrollAnchor[b.State["scrollProperty" + _]], x = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === _ ? "Top" : "Left")]], C = f(o).offset()[_.toLowerCase()] + S), l = {
                scroll: {
                  rootPropertyValue: !1,
                  startValue: v,
                  currentValue: v,
                  endValue: C,
                  unitType: "",
                  easing: s.easing,
                  scrollData: {
                    container: s.container,
                    direction: _,
                    alternateValue: x
                  }
                },
                element: o
              }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, o)
            } else if ("reverse" === A) {
              if (!a(o).tweensContainer) return void f.dequeue(o, s.queue);
              "none" === a(o).opts.display && (a(o).opts.display = "auto"), "hidden" === a(o).opts.visibility && (a(o).opts.visibility = "visible"), a(o).opts.loop = !1, a(o).opts.begin = null, a(o).opts.complete = null, y.easing || delete s.easing, y.duration || delete s.duration, s = f.extend({}, a(o).opts, s);
              var I = f.extend(!0, {}, a(o).tweensContainer);
              for (var D in I)
                if ("element" !== D) {
                  var O = I[D].startValue;
                  I[D].startValue = I[D].currentValue = I[D].endValue, I[D].endValue = O, m.isEmptyObject(y) || (I[D].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + D + "): " + JSON.stringify(I[D]), o)
                }
              l = I
            } else if ("start" === A) {
              var I;
              a(o).tweensContainer && a(o).isAnimating === !0 && (I = a(o).tweensContainer), f.each(g, function (e, t) {
                if (RegExp("^" + w.Lists.colors.join("$|^") + "$").test(e)) {
                  var n = d(t, !0),
                    r = n[0],
                    o = n[1],
                    a = n[2];
                  if (w.RegEx.isHex.test(r)) {
                    for (var s = ["Red", "Green", "Blue"], l = w.Values.hexToRgb(r), c = a ? w.Values.hexToRgb(a) : i, u = 0; u < s.length; u++) {
                      var f = [l[u]];
                      o && f.push(o), c !== i && f.push(c[u]), g[e + s[u]] = f
                    }
                    delete g[e]
                  }
                }
              });
              for (var P in g) {
                var M = d(g[P]),
                  F = M[0],
                  R = M[1],
                  W = M[2];
                P = w.Names.camelCase(P);
                var H = w.Hooks.getRoot(P),
                  V = !1;
                if (a(o).isSVG || "tween" === H || w.Names.prefixCheck(H)[1] !== !1 || w.Normalizations.registered[H] !== i) {
                  (s.display !== i && null !== s.display && "none" !== s.display || s.visibility !== i && "hidden" !== s.visibility) && /opacity|filter/.test(P) && !W && 0 !== F && (W = 0), s._cacheValues && I && I[P] ? (W === i && (W = I[P].endValue + I[P].unitType), V = a(o).rootPropertyValueCache[H]) : w.Hooks.registered[P] ? W === i ? (V = w.getPropertyValue(o, H), W = w.getPropertyValue(o, P, V)) : V = w.Hooks.templates[H][1] : W === i && (W = w.getPropertyValue(o, P));
                  var j, B, z, q = !1;
                  if (j = h(P, W), W = j[0], z = j[1], j = h(P, F), F = j[0].replace(/^([+-\/*])=/, function (e, t) {
                      return q = t, ""
                    }), B = j[1], W = parseFloat(W) || 0, F = parseFloat(F) || 0, "%" === B && (/^(fontSize|lineHeight)$/.test(P) ? (F /= 100, B = "em") : /^scale/.test(P) ? (F /= 100, B = "") : /(Red|Green|Blue)$/i.test(P) && (F = F / 100 * 255, B = "")), /[\/*]/.test(q)) B = z;
                  else if (z !== B && 0 !== W)
                    if (0 === F) B = z;
                    else {
                      r = r || function () {
                        var e = {
                            myParent: o.parentNode || n.body,
                            position: w.getPropertyValue(o, "position"),
                            fontSize: w.getPropertyValue(o, "fontSize")
                          },
                          i = e.position === L.lastPosition && e.myParent === L.lastParent,
                          r = e.fontSize === L.lastFontSize;
                        L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;
                        var s = 100,
                          l = {};
                        if (r && i) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;
                        else {
                          var c = a(o).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                          b.init(c), e.myParent.appendChild(c), f.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                            b.CSS.setPropertyValue(c, t, "hidden")
                          }), b.CSS.setPropertyValue(c, "position", e.position), b.CSS.setPropertyValue(c, "fontSize", e.fontSize), b.CSS.setPropertyValue(c, "boxSizing", "content-box"), f.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                            b.CSS.setPropertyValue(c, t, s + "%")
                          }), b.CSS.setPropertyValue(c, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(w.getPropertyValue(c, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(w.getPropertyValue(c, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(w.getPropertyValue(c, "paddingLeft")) || 1) / s, e.myParent.removeChild(c)
                        }
                        return null === L.remToPx && (L.remToPx = parseFloat(w.getPropertyValue(n.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l
                      }();
                      var $ = /margin|padding|left|right|width|text|word|letter/i.test(P) || /X$/.test(P) || "x" === P ? "x" : "y";
                      switch (z) {
                        case "%":
                          W *= "x" === $ ? r.percentToPxWidth : r.percentToPxHeight;
                          break;
                        case "px":
                          break;
                        default:
                          W *= r[z + "ToPx"]
                      }
                      switch (B) {
                        case "%":
                          W *= 1 / ("x" === $ ? r.percentToPxWidth : r.percentToPxHeight);
                          break;
                        case "px":
                          break;
                        default:
                          W *= 1 / r[B + "ToPx"]
                      }
                    }
                  switch (q) {
                    case "+":
                      F = W + F;
                      break;
                    case "-":
                      F = W - F;
                      break;
                    case "*":
                      F *= W;
                      break;
                    case "/":
                      F = W / F
                  }
                  l[P] = {
                    rootPropertyValue: V,
                    startValue: W,
                    currentValue: W,
                    endValue: F,
                    unitType: B,
                    easing: R
                  }, b.debug && console.log("tweensContainer (" + P + "): " + JSON.stringify(l[P]), o)
                } else b.debug && console.log("Skipping [" + H + "] due to a lack of browser support.")
              }
              l.element = o
            }
            l.element && (w.Values.addClass(o, "velocity-animating"), N.push(l), "" === s.queue && (a(o).tweensContainer = l, a(o).opts = s), a(o).isAnimating = !0, k === T - 1 ? (b.State.calls.push([N, p, s, null, E.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, u())) : k++)
          }
          var r, o = this,
            s = f.extend({}, b.defaults, y),
            l = {};
          switch (a(o) === i && b.init(o), parseFloat(s.delay) && s.queue !== !1 && f.queue(o, s.queue, function (e) {
            b.velocityQueueEntryFlag = !0, a(o).delayTimer = {
              setTimeout: setTimeout(e, parseFloat(s.delay)),
              next: e
            }
          }), s.duration.toString().toLowerCase()) {
            case "fast":
              s.duration = 200;
              break;
            case "normal":
              s.duration = v;
              break;
            case "slow":
              s.duration = 600;
              break;
            default:
              s.duration = parseFloat(s.duration) || 1
          }
          b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = c(s.easing, s.duration), s.begin && !m.isFunction(s.begin) && (s.begin = null), s.progress && !m.isFunction(s.progress) && (s.progress = null), s.complete && !m.isFunction(s.complete) && (s.complete = null), s.display !== i && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(o))), s.visibility !== i && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : f.queue(o, s.queue, function (t, n) {
            return n === !0 ? (E.promise && E.resolver(p), !0) : (b.velocityQueueEntryFlag = !0, void e(t))
          }), "" !== s.queue && "fx" !== s.queue || "inprogress" === f.queue(o)[0] || f.dequeue(o)
        }
        var s, l, h, p, g, y, x = arguments[0] && (arguments[0].p || f.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));
        if (m.isWrapped(this) ? (s = !1, h = 0, p = this, l = this) : (s = !0, h = 1, p = x ? arguments[0].elements || arguments[0].e : arguments[0]), p = o(p)) {
          x ? (g = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (g = arguments[h], y = arguments[h + 1]);
          var T = p.length,
            k = 0;
          if (!/^(stop|finish)$/i.test(g) && !f.isPlainObject(y)) {
            var _ = h + 1;
            y = {};
            for (var S = _; S < arguments.length; S++) m.isArray(arguments[S]) || !/^(fast|normal|slow)$/i.test(arguments[S]) && !/^\d/.test(arguments[S]) ? m.isString(arguments[S]) || m.isArray(arguments[S]) ? y.easing = arguments[S] : m.isFunction(arguments[S]) && (y.complete = arguments[S]) : y.duration = arguments[S]
          }
          var E = {
            promise: null,
            resolver: null,
            rejecter: null
          };
          s && b.Promise && (E.promise = new b.Promise(function (e, t) {
            E.resolver = e, E.rejecter = t
          }));
          var A;
          switch (g) {
            case "scroll":
              A = "scroll";
              break;
            case "reverse":
              A = "reverse";
              break;
            case "finish":
            case "stop":
              f.each(p, function (e, t) {
                a(t) && a(t).delayTimer && (clearTimeout(a(t).delayTimer.setTimeout), a(t).delayTimer.next && a(t).delayTimer.next(), delete a(t).delayTimer)
              });
              var I = [];
              return f.each(b.State.calls, function (e, t) {
                t && f.each(t[1], function (n, r) {
                  var o = y === i ? "" : y;
                  return o !== !0 && t[2].queue !== o && (y !== i || t[2].queue !== !1) || void f.each(p, function (n, i) {
                    i === r && ((y === !0 || m.isString(y)) && (f.each(f.queue(i, m.isString(y) ? y : ""), function (e, t) {
                      m.isFunction(t) && t(null, !0)
                    }), f.queue(i, m.isString(y) ? y : "", [])), "stop" === g ? (a(i) && a(i).tweensContainer && o !== !1 && f.each(a(i).tweensContainer, function (e, t) {
                      t.endValue = t.currentValue
                    }), I.push(e)) : "finish" === g && (t[2].duration = 1))
                  })
                })
              }), "stop" === g && (f.each(I, function (e, t) {
                d(t, !0)
              }), E.promise && E.resolver(p)), e();
            default:
              if (!f.isPlainObject(g) || m.isEmptyObject(g)) {
                if (m.isString(g) && b.Redirects[g]) {
                  var D = f.extend({}, y),
                    O = D.duration,
                    P = D.delay || 0;
                  return D.backwards === !0 && (p = f.extend(!0, [], p).reverse()), f.each(p, function (e, t) {
                    parseFloat(D.stagger) ? D.delay = P + parseFloat(D.stagger) * e : m.isFunction(D.stagger) && (D.delay = P + D.stagger.call(t, e, T)), D.drag && (D.duration = parseFloat(O) || (/^(callout|transition)/.test(g) ? 1e3 : v), D.duration = Math.max(D.duration * (D.backwards ? 1 - e / T : (e + 1) / T), .75 * D.duration, 200)), b.Redirects[g].call(t, t, D || {}, e, T, p, E.promise ? E : i)
                  }), e()
                }
                var M = "Velocity: First argument (" + g + ") was not a property map, a known action, or a registered redirect. Aborting.";
                return E.promise ? E.rejecter(new Error(M)) : console.log(M), e()
              }
              A = "start"
          }
          var L = {
              lastParent: null,
              lastPosition: null,
              lastFontSize: null,
              lastPercentToPxWidth: null,
              lastPercentToPxHeight: null,
              lastEmToPx: null,
              remToPx: null,
              vwToPx: null,
              vhToPx: null
            },
            N = [];
          f.each(p, function (e, t) {
            m.isNode(t) && r.call(t)
          });
          var F, D = f.extend({}, b.defaults, y);
          if (D.loop = parseInt(D.loop), F = 2 * D.loop - 1, D.loop)
            for (var R = 0; F > R; R++) {
              var W = {
                delay: D.delay,
                progress: D.progress
              };
              R === F - 1 && (W.display = D.display, W.visibility = D.visibility, W.complete = D.complete), C(p, "reverse", W)
            }
          return e()
        }
      };
      b = f.extend(C, b), b.animate = C;
      var T = t.requestAnimationFrame || p;
      return b.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function () {
        n.hidden ? (T = function (e) {
          return setTimeout(function () {
            e(!0)
          }, 16)
        }, u()) : T = t.requestAnimationFrame || p
      }), e.Velocity = b, e !== t && (e.fn.velocity = C, e.fn.velocity.defaults = b.defaults), f.each(["Down", "Up"], function (e, t) {
        b.Redirects["slide" + t] = function (e, n, r, o, a, s) {
          var l = f.extend({}, n),
            c = l.begin,
            u = l.complete,
            d = {
              height: "",
              marginTop: "",
              marginBottom: "",
              paddingTop: "",
              paddingBottom: ""
            },
            h = {};
          l.display === i && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
            c && c.call(a, a);
            for (var n in d) {
              h[n] = e.style[n];
              var i = b.CSS.getPropertyValue(e, n);
              d[n] = "Down" === t ? [i, 0] : [0, i]
            }
            h.overflow = e.style.overflow, e.style.overflow = "hidden"
          }, l.complete = function () {
            for (var t in h) e.style[t] = h[t];
            u && u.call(a, a), s && s.resolver(a)
          }, b(e, d, l)
        }
      }), f.each(["In", "Out"], function (e, t) {
        b.Redirects["fade" + t] = function (e, n, r, o, a, s) {
          var l = f.extend({}, n),
            c = {
              opacity: "In" === t ? 1 : 0
            },
            u = l.complete;
          l.complete = r !== o - 1 ? l.begin = null : function () {
            u && u.call(a, a), s && s.resolver(a)
          }, l.display === i && (l.display = "In" === t ? "auto" : "none"), b(this, c, l)
        }
      }), b
    }(window.jQuery || window.Zepto || window, window, document)
  })),
  function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
      var t;
      t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Chart = e()
    }
  }(function () {
    return function e(t, n, i) {
      function r(a, s) {
        if (!n[a]) {
          if (!t[a]) {
            var l = "function" == typeof require && require;
            if (!s && l) return l(a, !0);
            if (o) return o(a, !0);
            var c = new Error("Cannot find module '" + a + "'");
            throw c.code = "MODULE_NOT_FOUND", c
          }
          var u = n[a] = {
            exports: {}
          };
          t[a][0].call(u.exports, function (e) {
            var n = t[a][1][e];
            return r(n ? n : e)
          }, u, u.exports, e, t, n, i)
        }
        return n[a].exports
      }
      for (var o = "function" == typeof require && require, a = 0; a < i.length; a++) r(i[a]);
      return r
    }({
      1: [function (e, t, n) {}, {}],
      2: [function (e, t, n) {
        function i(e) {
          if (e) {
            var t = [0, 0, 0],
              n = 1,
              i = e.match(/^#([a-fA-F0-9]{3})$/);
            if (i) {
              i = i[1];
              for (var r = 0; r < t.length; r++) t[r] = parseInt(i[r] + i[r], 16)
            } else if (i = e.match(/^#([a-fA-F0-9]{6})$/)) {
              i = i[1];
              for (var r = 0; r < t.length; r++) t[r] = parseInt(i.slice(2 * r, 2 * r + 2), 16)
            } else if (i = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)) {
              for (var r = 0; r < t.length; r++) t[r] = parseInt(i[r + 1]);
              n = parseFloat(i[4])
            } else if (i = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)) {
              for (var r = 0; r < t.length; r++) t[r] = Math.round(2.55 * parseFloat(i[r + 1]));
              n = parseFloat(i[4])
            } else if (i = e.match(/(\w+)/)) {
              if ("transparent" == i[1]) return [0, 0, 0, 0];
              if (!(t = x[i[1]])) return
            }
            for (var r = 0; r < t.length; r++) t[r] = y(t[r], 0, 255);
            return n = n || 0 == n ? y(n, 0, 1) : 1, t[3] = n, t
          }
        }

        function r(e) {
          if (e) {
            var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (t) {
              var n = parseFloat(t[4]);
              return [y(parseInt(t[1]), 0, 360), y(parseFloat(t[2]), 0, 100), y(parseFloat(t[3]), 0, 100), y(isNaN(n) ? 1 : n, 0, 1)]
            }
          }
        }

        function o(e) {
          if (e) {
            var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (t) {
              var n = parseFloat(t[4]);
              return [y(parseInt(t[1]), 0, 360), y(parseFloat(t[2]), 0, 100), y(parseFloat(t[3]), 0, 100), y(isNaN(n) ? 1 : n, 0, 1)]
            }
          }
        }

        function a(e) {
          var t = i(e);
          return t && t.slice(0, 3)
        }

        function s(e) {
          var t = r(e);
          return t && t.slice(0, 3)
        }

        function l(e) {
          var t = i(e);
          return t ? t[3] : (t = r(e)) ? t[3] : (t = o(e)) ? t[3] : void 0
        }

        function c(e) {
          return "#" + b(e[0]) + b(e[1]) + b(e[2])
        }

        function u(e, t) {
          return t < 1 || e[3] && e[3] < 1 ? d(e, t) : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
        }

        function d(e, t) {
          return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
        }

        function f(e, t) {
          return t < 1 || e[3] && e[3] < 1 ? h(e, t) : "rgb(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%)"
        }

        function h(e, t) {
          return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")"
        }

        function p(e, t) {
          return t < 1 || e[3] && e[3] < 1 ? m(e, t) : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
        }

        function m(e, t) {
          return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
        }

        function g(e, t) {
          return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")"
        }

        function v(e) {
          return w[e.slice(0, 3)]
        }

        function y(e, t, n) {
          return Math.min(Math.max(t, e), n)
        }

        function b(e) {
          var t = e.toString(16).toUpperCase();
          return t.length < 2 ? "0" + t : t
        }
        var x = e(6);
        t.exports = {
          getRgba: i,
          getHsla: r,
          getRgb: a,
          getHsl: s,
          getHwb: o,
          getAlpha: l,
          hexString: c,
          rgbString: u,
          rgbaString: d,
          percentString: f,
          percentaString: h,
          hslString: p,
          hslaString: m,
          hwbString: g,
          keyword: v
        };
        var w = {};
        for (var C in x) w[x[C]] = C
      }, {
        6: 6
      }],
      3: [function (e, t, n) {
        var i = e(5),
          r = e(2),
          o = function (e) {
            if (e instanceof o) return e;
            if (!(this instanceof o)) return new o(e);
            this.valid = !1, this.values = {
              rgb: [0, 0, 0],
              hsl: [0, 0, 0],
              hsv: [0, 0, 0],
              hwb: [0, 0, 0],
              cmyk: [0, 0, 0, 0],
              alpha: 1
            };
            var t;
            "string" == typeof e ? (t = r.getRgba(e), t ? this.setValues("rgb", t) : (t = r.getHsla(e)) ? this.setValues("hsl", t) : (t = r.getHwb(e)) && this.setValues("hwb", t)) : "object" == typeof e && (t = e, void 0 !== t.r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t))
          };
        o.prototype = {
          isValid: function () {
            return this.valid
          },
          rgb: function () {
            return this.setSpace("rgb", arguments)
          },
          hsl: function () {
            return this.setSpace("hsl", arguments)
          },
          hsv: function () {
            return this.setSpace("hsv", arguments)
          },
          hwb: function () {
            return this.setSpace("hwb", arguments)
          },
          cmyk: function () {
            return this.setSpace("cmyk", arguments)
          },
          rgbArray: function () {
            return this.values.rgb
          },
          hslArray: function () {
            return this.values.hsl
          },
          hsvArray: function () {
            return this.values.hsv
          },
          hwbArray: function () {
            var e = this.values;
            return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb
          },
          cmykArray: function () {
            return this.values.cmyk
          },
          rgbaArray: function () {
            var e = this.values;
            return e.rgb.concat([e.alpha])
          },
          hslaArray: function () {
            var e = this.values;
            return e.hsl.concat([e.alpha])
          },
          alpha: function (e) {
            return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this)
          },
          red: function (e) {
            return this.setChannel("rgb", 0, e)
          },
          green: function (e) {
            return this.setChannel("rgb", 1, e)
          },
          blue: function (e) {
            return this.setChannel("rgb", 2, e)
          },
          hue: function (e) {
            return e && (e %= 360, e = e < 0 ? 360 + e : e), this.setChannel("hsl", 0, e)
          },
          saturation: function (e) {
            return this.setChannel("hsl", 1, e)
          },
          lightness: function (e) {
            return this.setChannel("hsl", 2, e)
          },
          saturationv: function (e) {
            return this.setChannel("hsv", 1, e)
          },
          whiteness: function (e) {
            return this.setChannel("hwb", 1, e)
          },
          blackness: function (e) {
            return this.setChannel("hwb", 2, e)
          },
          value: function (e) {
            return this.setChannel("hsv", 2, e)
          },
          cyan: function (e) {
            return this.setChannel("cmyk", 0, e)
          },
          magenta: function (e) {
            return this.setChannel("cmyk", 1, e)
          },
          yellow: function (e) {
            return this.setChannel("cmyk", 2, e)
          },
          black: function (e) {
            return this.setChannel("cmyk", 3, e)
          },
          hexString: function () {
            return r.hexString(this.values.rgb)
          },
          rgbString: function () {
            return r.rgbString(this.values.rgb, this.values.alpha)
          },
          rgbaString: function () {
            return r.rgbaString(this.values.rgb, this.values.alpha)
          },
          percentString: function () {
            return r.percentString(this.values.rgb, this.values.alpha)
          },
          hslString: function () {
            return r.hslString(this.values.hsl, this.values.alpha)
          },
          hslaString: function () {
            return r.hslaString(this.values.hsl, this.values.alpha)
          },
          hwbString: function () {
            return r.hwbString(this.values.hwb, this.values.alpha)
          },
          keyword: function () {
            return r.keyword(this.values.rgb, this.values.alpha)
          },
          rgbNumber: function () {
            var e = this.values.rgb;
            return e[0] << 16 | e[1] << 8 | e[2]
          },
          luminosity: function () {
            for (var e = this.values.rgb, t = [], n = 0; n < e.length; n++) {
              var i = e[n] / 255;
              t[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
            }
            return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
          },
          contrast: function (e) {
            var t = this.luminosity(),
              n = e.luminosity();
            return t > n ? (t + .05) / (n + .05) : (n + .05) / (t + .05)
          },
          level: function (e) {
            var t = this.contrast(e);
            return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : ""
          },
          dark: function () {
            var e = this.values.rgb;
            return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128
          },
          light: function () {
            return !this.dark()
          },
          negate: function () {
            for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t];
            return this.setValues("rgb", e), this
          },
          lighten: function (e) {
            var t = this.values.hsl;
            return t[2] += t[2] * e, this.setValues("hsl", t), this
          },
          darken: function (e) {
            var t = this.values.hsl;
            return t[2] -= t[2] * e, this.setValues("hsl", t), this
          },
          saturate: function (e) {
            var t = this.values.hsl;
            return t[1] += t[1] * e, this.setValues("hsl", t), this
          },
          desaturate: function (e) {
            var t = this.values.hsl;
            return t[1] -= t[1] * e, this.setValues("hsl", t), this
          },
          whiten: function (e) {
            var t = this.values.hwb;
            return t[1] += t[1] * e, this.setValues("hwb", t), this
          },
          blacken: function (e) {
            var t = this.values.hwb;
            return t[2] += t[2] * e, this.setValues("hwb", t), this
          },
          greyscale: function () {
            var e = this.values.rgb,
              t = .3 * e[0] + .59 * e[1] + .11 * e[2];
            return this.setValues("rgb", [t, t, t]), this
          },
          clearer: function (e) {
            var t = this.values.alpha;
            return this.setValues("alpha", t - t * e), this
          },
          opaquer: function (e) {
            var t = this.values.alpha;
            return this.setValues("alpha", t + t * e), this
          },
          rotate: function (e) {
            var t = this.values.hsl,
              n = (t[0] + e) % 360;
            return t[0] = n < 0 ? 360 + n : n, this.setValues("hsl", t), this
          },
          mix: function (e, t) {
            var n = this,
              i = e,
              r = void 0 === t ? .5 : t,
              o = 2 * r - 1,
              a = n.alpha() - i.alpha(),
              s = ((o * a == -1 ? o : (o + a) / (1 + o * a)) + 1) / 2,
              l = 1 - s;
            return this.rgb(s * n.red() + l * i.red(), s * n.green() + l * i.green(), s * n.blue() + l * i.blue()).alpha(n.alpha() * r + i.alpha() * (1 - r))
          },
          toJSON: function () {
            return this.rgb()
          },
          clone: function () {
            var e, t, n = new o,
              i = this.values,
              r = n.values;
            for (var a in i) i.hasOwnProperty(a) && (e = i[a], t = {}.toString.call(e), "[object Array]" === t ? r[a] = e.slice(0) : "[object Number]" === t ? r[a] = e : console.error("unexpected color value:", e));
            return n
          }
        }, o.prototype.spaces = {
          rgb: ["red", "green", "blue"],
          hsl: ["hue", "saturation", "lightness"],
          hsv: ["hue", "saturation", "value"],
          hwb: ["hue", "whiteness", "blackness"],
          cmyk: ["cyan", "magenta", "yellow", "black"]
        }, o.prototype.maxes = {
          rgb: [255, 255, 255],
          hsl: [360, 100, 100],
          hsv: [360, 100, 100],
          hwb: [360, 100, 100],
          cmyk: [100, 100, 100, 100]
        }, o.prototype.getValues = function (e) {
          for (var t = this.values, n = {}, i = 0; i < e.length; i++) n[e.charAt(i)] = t[e][i];
          return 1 !== t.alpha && (n.a = t.alpha), n
        }, o.prototype.setValues = function (e, t) {
          var n, r = this.values,
            o = this.spaces,
            a = this.maxes,
            s = 1;
          if (this.valid = !0, "alpha" === e) s = t;
          else if (t.length) r[e] = t.slice(0, e.length), s = t[e.length];
          else if (void 0 !== t[e.charAt(0)]) {
            for (n = 0; n < e.length; n++) r[e][n] = t[e.charAt(n)];
            s = t.a
          } else if (void 0 !== t[o[e][0]]) {
            var l = o[e];
            for (n = 0; n < e.length; n++) r[e][n] = t[l[n]];
            s = t.alpha
          }
          if (r.alpha = Math.max(0, Math.min(1, void 0 === s ? r.alpha : s)), "alpha" === e) return !1;
          var c;
          for (n = 0; n < e.length; n++) c = Math.max(0, Math.min(a[e][n], r[e][n])), r[e][n] = Math.round(c);
          for (var u in o) u !== e && (r[u] = i[e][u](r[e]));
          return !0
        }, o.prototype.setSpace = function (e, t) {
          var n = t[0];
          return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n), this)
        }, o.prototype.setChannel = function (e, t, n) {
          var i = this.values[e];
          return void 0 === n ? i[t] : n === i[t] ? this : (i[t] = n, this.setValues(e, i), this)
        }, "undefined" != typeof window && (window.Color = o), t.exports = o
      }, {
        2: 2,
        5: 5
      }],
      4: [function (e, t, n) {
        function i(e) {
          var t, n, i, r = e[0] / 255,
            o = e[1] / 255,
            a = e[2] / 255,
            s = Math.min(r, o, a),
            l = Math.max(r, o, a),
            c = l - s;
          return l == s ? t = 0 : r == l ? t = (o - a) / c : o == l ? t = 2 + (a - r) / c : a == l && (t = 4 + (r - o) / c), t = Math.min(60 * t, 360), t < 0 && (t += 360), i = (s + l) / 2, n = l == s ? 0 : i <= .5 ? c / (l + s) : c / (2 - l - s), [t, 100 * n, 100 * i]
        }

        function o(e) {
          var t, n, i, r = e[0],
            o = e[1],
            a = e[2],
            s = Math.min(r, o, a),
            l = Math.max(r, o, a),
            c = l - s;
          return n = 0 == l ? 0 : c / l * 1e3 / 10, l == s ? t = 0 : r == l ? t = (o - a) / c : o == l ? t = 2 + (a - r) / c : a == l && (t = 4 + (r - o) / c), t = Math.min(60 * t, 360), t < 0 && (t += 360), i = l / 255 * 1e3 / 10, [t, n, i]
        }

        function a(e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = i(e)[0],
            a = 1 / 255 * Math.min(t, Math.min(n, r)),
            r = 1 - 1 / 255 * Math.max(t, Math.max(n, r));
          return [o, 100 * a, 100 * r]
        }

        function s(e) {
          var t, n, i, r, o = e[0] / 255,
            a = e[1] / 255,
            s = e[2] / 255;
          return r = Math.min(1 - o, 1 - a, 1 - s), t = (1 - o - r) / (1 - r) || 0, n = (1 - a - r) / (1 - r) || 0, i = (1 - s - r) / (1 - r) || 0, [100 * t, 100 * n, 100 * i, 100 * r]
        }

        function l(e) {
          return K[JSON.stringify(e)]
        }

        function c(e) {
          var t = e[0] / 255,
            n = e[1] / 255,
            i = e[2] / 255;
          return t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92, [100 * (.4124 * t + .3576 * n + .1805 * i), 100 * (.2126 * t + .7152 * n + .0722 * i), 100 * (.0193 * t + .1192 * n + .9505 * i)]
        }

        function u(e) {
          var t, n, i, r = c(e),
            o = r[0],
            a = r[1],
            s = r[2];
          return o /= 95.047, a /= 100, s /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, t = 116 * a - 16, n = 500 * (o - a), i = 200 * (a - s), [t, n, i]
        }

        function d(e) {
          return W(u(e))
        }

        function f(e) {
          var t, n, i, r, o, a = e[0] / 360,
            s = e[1] / 100,
            l = e[2] / 100;
          if (0 == s) return o = 255 * l, [o, o, o];
          n = l < .5 ? l * (1 + s) : l + s - l * s, t = 2 * l - n, r = [0, 0, 0];
          for (var c = 0; c < 3; c++) i = a + 1 / 3 * -(c - 1), i < 0 && i++, i > 1 && i--, o = 6 * i < 1 ? t + 6 * (n - t) * i : 2 * i < 1 ? n : 3 * i < 2 ? t + (n - t) * (2 / 3 - i) * 6 : t, r[c] = 255 * o;
          return r
        }

        function h(e) {
          var t, n, i = e[0],
            r = e[1] / 100,
            o = e[2] / 100;
          return 0 === o ? [0, 0, 0] : (o *= 2, r *= o <= 1 ? o : 2 - o, n = (o + r) / 2, t = 2 * r / (o + r), [i, 100 * t, 100 * n])
        }

        function p(e) {
          return a(f(e))
        }

        function m(e) {
          return s(f(e))
        }

        function v(e) {
          return l(f(e))
        }

        function y(e) {
          var t = e[0] / 60,
            n = e[1] / 100,
            i = e[2] / 100,
            r = Math.floor(t) % 6,
            o = t - Math.floor(t),
            a = 255 * i * (1 - n),
            s = 255 * i * (1 - n * o),
            l = 255 * i * (1 - n * (1 - o)),
            i = 255 * i;
          switch (r) {
            case 0:
              return [i, l, a];
            case 1:
              return [s, i, a];
            case 2:
              return [a, i, l];
            case 3:
              return [a, s, i];
            case 4:
              return [l, a, i];
            case 5:
              return [i, a, s]
          }
        }

        function x(e) {
          var t, n, i = e[0],
            r = e[1] / 100,
            o = e[2] / 100;
          return n = (2 - r) * o, t = r * o, t /= n <= 1 ? n : 2 - n, t = t || 0, n /= 2, [i, 100 * t, 100 * n]
        }

        function w(e) {
          return a(y(e))
        }

        function C(e) {
          return s(y(e))
        }

        function T(e) {
          return l(y(e))
        }

        function k(e) {
          var t, n, i, o, a = e[0] / 360,
            s = e[1] / 100,
            l = e[2] / 100,
            c = s + l;
          switch (c > 1 && (s /= c, l /= c), t = Math.floor(6 * a), n = 1 - l, i = 6 * a - t, 0 != (1 & t) && (i = 1 - i), o = s + i * (n - s), t) {
            default:
              case 6:
              case 0:
              r = n,
            g = o,
            b = s;
            break;
            case 1:
                r = o,
              g = n,
              b = s;
              break;
            case 2:
                r = s,
              g = n,
              b = o;
              break;
            case 3:
                r = s,
              g = o,
              b = n;
              break;
            case 4:
                r = o,
              g = s,
              b = n;
              break;
            case 5:
                r = n,
              g = s,
              b = o
          }
          return [255 * r, 255 * g, 255 * b]
        }

        function _(e) {
          return i(k(e))
        }

        function S(e) {
          return o(k(e))
        }

        function E(e) {
          return s(k(e))
        }

        function A(e) {
          return l(k(e))
        }

        function I(e) {
          var t, n, i, r = e[0] / 100,
            o = e[1] / 100,
            a = e[2] / 100,
            s = e[3] / 100;
          return t = 1 - Math.min(1, r * (1 - s) + s), n = 1 - Math.min(1, o * (1 - s) + s), i = 1 - Math.min(1, a * (1 - s) + s), [255 * t, 255 * n, 255 * i]
        }

        function D(e) {
          return i(I(e))
        }

        function O(e) {
          return o(I(e))
        }

        function P(e) {
          return a(I(e))
        }

        function M(e) {
          return l(I(e))
        }

        function L(e) {
          var t, n, i, r = e[0] / 100,
            o = e[1] / 100,
            a = e[2] / 100;
          return t = 3.2406 * r + o * -1.5372 + a * -.4986, n = r * -.9689 + 1.8758 * o + .0415 * a, i = .0557 * r + o * -.204 + 1.057 * a, t = t > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : t *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, t = Math.min(Math.max(0, t), 1), n = Math.min(Math.max(0, n), 1), i = Math.min(Math.max(0, i), 1), [255 * t, 255 * n, 255 * i]
        }

        function N(e) {
          var t, n, i, r = e[0],
            o = e[1],
            a = e[2];
          return r /= 95.047, o /= 100, a /= 108.883, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, t = 116 * o - 16, n = 500 * (r - o), i = 200 * (o - a), [t, n, i]
        }

        function F(e) {
          return W(N(e))
        }

        function R(e) {
          var t, n, i, r, o = e[0],
            a = e[1],
            s = e[2];
          return o <= 8 ? (n = 100 * o / 903.3, r = n / 100 * 7.787 + 16 / 116) : (n = 100 * Math.pow((o + 16) / 116, 3), r = Math.pow(n / 100, 1 / 3)), t = t / 95.047 <= .008856 ? t = 95.047 * (a / 500 + r - 16 / 116) / 7.787 : 95.047 * Math.pow(a / 500 + r, 3), i = i / 108.883 <= .008859 ? i = 108.883 * (r - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(r - s / 200, 3), [t, n, i]
        }

        function W(e) {
          var t, n, i, r = e[0],
            o = e[1],
            a = e[2];
          return t = Math.atan2(a, o), n = 360 * t / 2 / Math.PI, n < 0 && (n += 360), i = Math.sqrt(o * o + a * a), [r, i, n]
        }

        function H(e) {
          return L(R(e))
        }

        function V(e) {
          var t, n, i, r = e[0],
            o = e[1],
            a = e[2];
          return i = a / 360 * 2 * Math.PI, t = o * Math.cos(i), n = o * Math.sin(i), [r, t, n]
        }

        function j(e) {
          return R(V(e))
        }

        function B(e) {
          return H(V(e))
        }

        function z(e) {
          return Q[e]
        }

        function q(e) {
          return i(z(e))
        }

        function $(e) {
          return o(z(e))
        }

        function Y(e) {
          return a(z(e))
        }

        function U(e) {
          return s(z(e))
        }

        function X(e) {
          return u(z(e))
        }

        function G(e) {
          return c(z(e))
        }
        t.exports = {
          rgb2hsl: i,
          rgb2hsv: o,
          rgb2hwb: a,
          rgb2cmyk: s,
          rgb2keyword: l,
          rgb2xyz: c,
          rgb2lab: u,
          rgb2lch: d,
          hsl2rgb: f,
          hsl2hsv: h,
          hsl2hwb: p,
          hsl2cmyk: m,
          hsl2keyword: v,
          hsv2rgb: y,
          hsv2hsl: x,
          hsv2hwb: w,
          hsv2cmyk: C,
          hsv2keyword: T,
          hwb2rgb: k,
          hwb2hsl: _,
          hwb2hsv: S,
          hwb2cmyk: E,
          hwb2keyword: A,
          cmyk2rgb: I,
          cmyk2hsl: D,
          cmyk2hsv: O,
          cmyk2hwb: P,
          cmyk2keyword: M,
          keyword2rgb: z,
          keyword2hsl: q,
          keyword2hsv: $,
          keyword2hwb: Y,
          keyword2cmyk: U,
          keyword2lab: X,
          keyword2xyz: G,
          xyz2rgb: L,
          xyz2lab: N,
          xyz2lch: F,
          lab2xyz: R,
          lab2rgb: H,
          lab2lch: W,
          lch2lab: V,
          lch2xyz: j,
          lch2rgb: B
        };
        var Q = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
          },
          K = {};
        for (var Z in Q) K[JSON.stringify(Q[Z])] = Z
      }, {}],
      5: [function (e, t, n) {
        var i = e(4),
          r = function () {
            return new c
          };
        for (var o in i) {
          r[o + "Raw"] = function (e) {
            return function (t) {
              return "number" == typeof t && (t = Array.prototype.slice.call(arguments)), i[e](t)
            }
          }(o);
          var a = /(\w+)2(\w+)/.exec(o),
            s = a[1],
            l = a[2];
          r[s] = r[s] || {}, r[s][l] = r[o] = function (e) {
            return function (t) {
              "number" == typeof t && (t = Array.prototype.slice.call(arguments));
              var n = i[e](t);
              if ("string" == typeof n || void 0 === n) return n;
              for (var r = 0; r < n.length; r++) n[r] = Math.round(n[r]);
              return n
            }
          }(o)
        }
        var c = function () {
          this.convs = {}
        };
        c.prototype.routeSpace = function (e, t) {
          var n = t[0];
          return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n))
        }, c.prototype.setValues = function (e, t) {
          return this.space = e, this.convs = {}, this.convs[e] = t, this
        }, c.prototype.getValues = function (e) {
          var t = this.convs[e];
          if (!t) {
            var n = this.space,
              i = this.convs[n];
            t = r[n][e](i), this.convs[e] = t
          }
          return t
        }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (e) {
          c.prototype[e] = function (t) {
            return this.routeSpace(e, arguments)
          }
        }), t.exports = r
      }, {
        4: 4
      }],
      6: [function (e, t, n) {
        t.exports = {
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 134, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 250, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          grey: [128, 128, 128],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 221],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          rebeccapurple: [102, 51, 153],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [112, 128, 144],
          slategrey: [112, 128, 144],
          snow: [255, 250, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 50]
        }
      }, {}],
      7: [function (e, t, n) {
        var i = e(28)();
        e(26)(i), e(40)(i), e(22)(i), e(25)(i), e(30)(i), e(21)(i), e(23)(i), e(24)(i), e(29)(i), e(32)(i), e(33)(i), e(31)(i), e(27)(i), e(34)(i), e(35)(i), e(36)(i), e(37)(i), e(38)(i), e(46)(i), e(44)(i), e(45)(i), e(47)(i), e(48)(i), e(49)(i), e(15)(i), e(16)(i), e(17)(i), e(18)(i), e(19)(i), e(20)(i), e(8)(i), e(9)(i), e(10)(i), e(11)(i), e(12)(i), e(13)(i), e(14)(i);
        var r = [];
        r.push(e(41)(i), e(42)(i), e(43)(i)), i.plugins.register(r), t.exports = i, "undefined" != typeof window && (window.Chart = i)
      }, {
        10: 10,
        11: 11,
        12: 12,
        13: 13,
        14: 14,
        15: 15,
        16: 16,
        17: 17,
        18: 18,
        19: 19,
        20: 20,
        21: 21,
        22: 22,
        23: 23,
        24: 24,
        25: 25,
        26: 26,
        27: 27,
        28: 28,
        29: 29,
        30: 30,
        31: 31,
        32: 32,
        33: 33,
        34: 34,
        35: 35,
        36: 36,
        37: 37,
        38: 38,
        40: 40,
        41: 41,
        42: 42,
        43: 43,
        44: 44,
        45: 45,
        46: 46,
        47: 47,
        48: 48,
        49: 49,
        8: 8,
        9: 9
      }],
      8: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          e.Bar = function (t, n) {
            return n.type = "bar", new e(t, n)
          }
        }
      }, {}],
      9: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          e.Bubble = function (t, n) {
            return n.type = "bubble", new e(t, n)
          }
        }
      }, {}],
      10: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          e.Doughnut = function (t, n) {
            return n.type = "doughnut", new e(t, n)
          }
        }
      }, {}],
      11: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          e.Line = function (t, n) {
            return n.type = "line", new e(t, n)
          }
        }
      }, {}],
      12: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          e.PolarArea = function (t, n) {
            return n.type = "polarArea", new e(t, n)
          }
        }
      }, {}],
      13: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          e.Radar = function (t, n) {
            return n.type = "radar", new e(t, n)
          }
        }
      }, {}],
      14: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          var t = {
            hover: {
              mode: "single"
            },
            scales: {
              xAxes: [{
                type: "linear",
                position: "bottom",
                id: "x-axis-1"
              }],
              yAxes: [{
                type: "linear",
                position: "left",
                id: "y-axis-1"
              }]
            },
            tooltips: {
              callbacks: {
                title: function () {
                  return ""
                },
                label: function (e) {
                  return "(" + e.xLabel + ", " + e.yLabel + ")"
                }
              }
            }
          };
          e.defaults.scatter = t, e.controllers.scatter = e.controllers.line, e.Scatter = function (t, n) {
            return n.type = "scatter", new e(t, n)
          }
        }
      }, {}],
      15: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          var t = e.helpers;
          e.defaults.bar = {
            hover: {
              mode: "label"
            },
            scales: {
              xAxes: [{
                type: "category",
                categoryPercentage: .8,
                barPercentage: .9,
                gridLines: {
                  offsetGridLines: !0
                }
              }],
              yAxes: [{
                type: "linear"
              }]
            }
          }, e.controllers.bar = e.DatasetController.extend({
            dataElementType: e.elements.Rectangle,
            initialize: function () {
              var t, n = this;
              e.DatasetController.prototype.initialize.apply(n, arguments), t = n.getMeta(), t.stack = n.getDataset().stack, t.bar = !0
            },
            update: function (e) {
              var t, n, i = this,
                r = i.getMeta().data;
              for (i._ruler = i.getRuler(), t = 0, n = r.length; t < n; ++t) i.updateElement(r[t], t, e)
            },
            updateElement: function (e, n, i) {
              var r = this,
                o = r.chart,
                a = r.getMeta(),
                s = r.getDataset(),
                l = e.custom || {},
                c = o.options.elements.rectangle;
              e._xScale = r.getScaleForId(a.xAxisID), e._yScale = r.getScaleForId(a.yAxisID), e._datasetIndex = r.index, e._index = n, e._model = {
                datasetLabel: s.label,
                label: o.data.labels[n],
                borderSkipped: l.borderSkipped ? l.borderSkipped : c.borderSkipped,
                backgroundColor: l.backgroundColor ? l.backgroundColor : t.getValueAtIndexOrDefault(s.backgroundColor, n, c.backgroundColor),
                borderColor: l.borderColor ? l.borderColor : t.getValueAtIndexOrDefault(s.borderColor, n, c.borderColor),
                borderWidth: l.borderWidth ? l.borderWidth : t.getValueAtIndexOrDefault(s.borderWidth, n, c.borderWidth)
              }, r.updateElementGeometry(e, n, i), e.pivot()
            },
            updateElementGeometry: function (e, t, n) {
              var i = this,
                r = e._model,
                o = i.getValueScale(),
                a = o.getBasePixel(),
                s = o.isHorizontal(),
                l = i._ruler || i.getRuler(),
                c = i.calculateBarValuePixels(i.index, t),
                u = i.calculateBarIndexPixels(i.index, t, l);
              r.horizontal = s, r.base = n ? a : c.base, r.x = s ? n ? a : c.head : u.center, r.y = s ? u.center : n ? a : c.head, r.height = s ? u.size : void 0, r.width = s ? void 0 : u.size
            },
            getValueScaleId: function () {
              return this.getMeta().yAxisID
            },
            getIndexScaleId: function () {
              return this.getMeta().xAxisID
            },
            getValueScale: function () {
              return this.getScaleForId(this.getValueScaleId())
            },
            getIndexScale: function () {
              return this.getScaleForId(this.getIndexScaleId())
            },
            getStackCount: function (e) {
              var t, n, i = this,
                r = i.chart,
                o = i.getIndexScale(),
                a = o.options.stacked,
                s = void 0 === e ? r.data.datasets.length : e + 1,
                l = [];
              for (t = 0; t < s; ++t) n = r.getDatasetMeta(t), n.bar && r.isDatasetVisible(t) && (a === !1 || a === !0 && l.indexOf(n.stack) === -1 || void 0 === a && (void 0 === n.stack || l.indexOf(n.stack) === -1)) && l.push(n.stack);
              return l.length
            },
            getStackIndex: function (e) {
              return this.getStackCount(e) - 1
            },
            getRuler: function () {
              var e = this,
                n = e.getIndexScale(),
                i = n.options,
                r = e.getStackCount(),
                o = n.isHorizontal() ? n.width : n.height,
                a = o / n.ticks.length,
                s = a * i.categoryPercentage,
                l = s / r,
                c = l * i.barPercentage;
              return c = Math.min(t.getValueOrDefault(i.barThickness, c), t.getValueOrDefault(i.maxBarThickness, 1 / 0)), {
                stackCount: r,
                tickSize: a,
                categorySize: s,
                categorySpacing: a - s,
                fullBarSize: l,
                barSize: c,
                barSpacing: l - c,
                scale: n
              }
            },
            calculateBarValuePixels: function (e, t) {
              var n, i, r, o, a, s, l = this,
                c = l.chart,
                u = l.getMeta(),
                d = l.getValueScale(),
                f = c.data.datasets,
                h = Number(f[e].data[t]),
                p = d.options.stacked,
                m = u.stack,
                g = 0;
              if (p || void 0 === p && void 0 !== m)
                for (n = 0; n < e; ++n) i = c.getDatasetMeta(n), i.bar && i.stack === m && i.controller.getValueScaleId() === d.id && c.isDatasetVisible(n) && (r = Number(f[n].data[t]), (h < 0 && r < 0 || h >= 0 && r > 0) && (g += r));
              return o = d.getPixelForValue(g), a = d.getPixelForValue(g + h), s = (a - o) / 2, {
                size: s,
                base: o,
                head: a,
                center: a + s / 2
              }
            },
            calculateBarIndexPixels: function (e, t, n) {
              var i = this,
                r = n.scale,
                o = i.chart.isCombo,
                a = i.getStackIndex(e),
                s = r.getPixelForValue(null, t, e, o),
                l = n.barSize;
              return s -= o ? n.tickSize / 2 : 0, s += n.fullBarSize * a, s += n.categorySpacing / 2, s += n.barSpacing / 2, {
                size: l,
                base: s,
                head: s + l,
                center: s + l / 2
              }
            },
            draw: function () {
              var e, n = this,
                i = n.chart,
                r = n.getMeta().data,
                o = n.getDataset(),
                a = r.length,
                s = 0;
              for (t.canvas.clipArea(i.ctx, i.chartArea); s < a; ++s) null === (e = o.data[s]) || void 0 === e || isNaN(e) || r[s].draw();
              t.canvas.unclipArea(i.ctx)
            },
            setHoverStyle: function (e) {
              var n = this.chart.data.datasets[e._datasetIndex],
                i = e._index,
                r = e.custom || {},
                o = e._model;
              o.backgroundColor = r.hoverBackgroundColor ? r.hoverBackgroundColor : t.getValueAtIndexOrDefault(n.hoverBackgroundColor, i, t.getHoverColor(o.backgroundColor)), o.borderColor = r.hoverBorderColor ? r.hoverBorderColor : t.getValueAtIndexOrDefault(n.hoverBorderColor, i, t.getHoverColor(o.borderColor)), o.borderWidth = r.hoverBorderWidth ? r.hoverBorderWidth : t.getValueAtIndexOrDefault(n.hoverBorderWidth, i, o.borderWidth)
            },
            removeHoverStyle: function (e) {
              var n = this.chart.data.datasets[e._datasetIndex],
                i = e._index,
                r = e.custom || {},
                o = e._model,
                a = this.chart.options.elements.rectangle;
              o.backgroundColor = r.backgroundColor ? r.backgroundColor : t.getValueAtIndexOrDefault(n.backgroundColor, i, a.backgroundColor), o.borderColor = r.borderColor ? r.borderColor : t.getValueAtIndexOrDefault(n.borderColor, i, a.borderColor), o.borderWidth = r.borderWidth ? r.borderWidth : t.getValueAtIndexOrDefault(n.borderWidth, i, a.borderWidth)
            }
          }), e.defaults.horizontalBar = {
            hover: {
              mode: "label"
            },
            scales: {
              xAxes: [{
                type: "linear",
                position: "bottom"
              }],
              yAxes: [{
                position: "left",
                type: "category",
                categoryPercentage: .8,
                barPercentage: .9,
                gridLines: {
                  offsetGridLines: !0
                }
              }]
            },
            elements: {
              rectangle: {
                borderSkipped: "left"
              }
            },
            tooltips: {
              callbacks: {
                title: function (e, t) {
                  var n = "";
                  return e.length > 0 && (e[0].yLabel ? n = e[0].yLabel : t.labels.length > 0 && e[0].index < t.labels.length && (n = t.labels[e[0].index])), n
                },
                label: function (e, t) {
                  return (t.datasets[e.datasetIndex].label || "") + ": " + e.xLabel
                }
              }
            }
          }, e.controllers.horizontalBar = e.controllers.bar.extend({
            getValueScaleId: function () {
              return this.getMeta().xAxisID
            },
            getIndexScaleId: function () {
              return this.getMeta().yAxisID
            }
          })
        }
      }, {}],
      16: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          var t = e.helpers;
          e.defaults.bubble = {
            hover: {
              mode: "single"
            },
            scales: {
              xAxes: [{
                type: "linear",
                position: "bottom",
                id: "x-axis-0"
              }],
              yAxes: [{
                type: "linear",
                position: "left",
                id: "y-axis-0"
              }]
            },
            tooltips: {
              callbacks: {
                title: function () {
                  return ""
                },
                label: function (e, t) {
                  var n = t.datasets[e.datasetIndex].label || "",
                    i = t.datasets[e.datasetIndex].data[e.index];
                  return n + ": (" + e.xLabel + ", " + e.yLabel + ", " + i.r + ")"
                }
              }
            }
          }, e.controllers.bubble = e.DatasetController.extend({
            dataElementType: e.elements.Point,
            update: function (e) {
              var n = this,
                i = n.getMeta(),
                r = i.data;
              t.each(r, function (t, i) {
                n.updateElement(t, i, e)
              })
            },
            updateElement: function (n, i, r) {
              var o = this,
                a = o.getMeta(),
                s = o.getScaleForId(a.xAxisID),
                l = o.getScaleForId(a.yAxisID),
                c = n.custom || {},
                u = o.getDataset(),
                d = u.data[i],
                f = o.chart.options.elements.point,
                h = o.index;
              t.extend(n, {
                _xScale: s,
                _yScale: l,
                _datasetIndex: h,
                _index: i,
                _model: {
                  x: r ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" == typeof d ? d : NaN, i, h, o.chart.isCombo),
                  y: r ? l.getBasePixel() : l.getPixelForValue(d, i, h),
                  radius: r ? 0 : c.radius ? c.radius : o.getRadius(d),
                  hitRadius: c.hitRadius ? c.hitRadius : t.getValueAtIndexOrDefault(u.hitRadius, i, f.hitRadius)
                }
              }), e.DatasetController.prototype.removeHoverStyle.call(o, n, f);
              var p = n._model;
              p.skip = c.skip ? c.skip : isNaN(p.x) || isNaN(p.y), n.pivot()
            },
            getRadius: function (e) {
              return e.r || this.chart.options.elements.point.radius
            },
            setHoverStyle: function (n) {
              var i = this;
              e.DatasetController.prototype.setHoverStyle.call(i, n);
              var r = i.chart.data.datasets[n._datasetIndex],
                o = n._index,
                a = n.custom || {};
              n._model.radius = a.hoverRadius ? a.hoverRadius : t.getValueAtIndexOrDefault(r.hoverRadius, o, i.chart.options.elements.point.hoverRadius) + i.getRadius(r.data[o])
            },
            removeHoverStyle: function (t) {
              var n = this;
              e.DatasetController.prototype.removeHoverStyle.call(n, t, n.chart.options.elements.point);
              var i = n.chart.data.datasets[t._datasetIndex].data[t._index],
                r = t.custom || {};
              t._model.radius = r.radius ? r.radius : n.getRadius(i)
            }
          })
        }
      }, {}],
      17: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          var t = e.helpers,
            n = e.defaults;
          n.doughnut = {
            animation: {
              animateRotate: !0,
              animateScale: !1
            },
            aspectRatio: 1,
            hover: {
              mode: "single"
            },
            legendCallback: function (e) {
              var t = [];
              t.push('<ul class="' + e.id + '-legend">');
              var n = e.data,
                i = n.datasets,
                r = n.labels;
              if (i.length)
                for (var o = 0; o < i[0].data.length; ++o) t.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), r[o] && t.push(r[o]), t.push("</li>");
              return t.push("</ul>"), t.join("")
            },
            legend: {
              labels: {
                generateLabels: function (e) {
                  var n = e.data;
                  return n.labels.length && n.datasets.length ? n.labels.map(function (i, r) {
                    var o = e.getDatasetMeta(0),
                      a = n.datasets[0],
                      s = o.data[r],
                      l = s && s.custom || {},
                      c = t.getValueAtIndexOrDefault,
                      u = e.options.elements.arc;
                    return {
                      text: i,
                      fillStyle: l.backgroundColor ? l.backgroundColor : c(a.backgroundColor, r, u.backgroundColor),
                      strokeStyle: l.borderColor ? l.borderColor : c(a.borderColor, r, u.borderColor),
                      lineWidth: l.borderWidth ? l.borderWidth : c(a.borderWidth, r, u.borderWidth),
                      hidden: isNaN(a.data[r]) || o.data[r].hidden,
                      index: r
                    }
                  }) : []
                }
              },
              onClick: function (e, t) {
                var n, i, r, o = t.index,
                  a = this.chart;
                for (n = 0, i = (a.data.datasets || []).length; n < i; ++n) r = a.getDatasetMeta(n), r.data[o] && (r.data[o].hidden = !r.data[o].hidden);
                a.update()
              }
            },
            cutoutPercentage: 50,
            rotation: Math.PI * -.5,
            circumference: 2 * Math.PI,
            tooltips: {
              callbacks: {
                title: function () {
                  return ""
                },
                label: function (e, n) {
                  var i = n.labels[e.index],
                    r = ": " + n.datasets[e.datasetIndex].data[e.index];
                  return t.isArray(i) ? (i = i.slice(), i[0] += r) : i += r, i
                }
              }
            }
          }, n.pie = t.clone(n.doughnut), t.extend(n.pie, {
            cutoutPercentage: 0
          }), e.controllers.doughnut = e.controllers.pie = e.DatasetController.extend({
            dataElementType: e.elements.Arc,
            linkScales: t.noop,
            getRingIndex: function (e) {
              for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && ++t;
              return t
            },
            update: function (e) {
              var n = this,
                i = n.chart,
                r = i.chartArea,
                o = i.options,
                a = o.elements.arc,
                s = r.right - r.left - a.borderWidth,
                l = r.bottom - r.top - a.borderWidth,
                c = Math.min(s, l),
                u = {
                  x: 0,
                  y: 0
                },
                d = n.getMeta(),
                f = o.cutoutPercentage,
                h = o.circumference;
              if (h < 2 * Math.PI) {
                var p = o.rotation % (2 * Math.PI);
                p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0);
                var m = p + h,
                  g = {
                    x: Math.cos(p),
                    y: Math.sin(p)
                  },
                  v = {
                    x: Math.cos(m),
                    y: Math.sin(m)
                  },
                  y = p <= 0 && 0 <= m || p <= 2 * Math.PI && 2 * Math.PI <= m,
                  b = p <= .5 * Math.PI && .5 * Math.PI <= m || p <= 2.5 * Math.PI && 2.5 * Math.PI <= m,
                  x = p <= -Math.PI && -Math.PI <= m || p <= Math.PI && Math.PI <= m,
                  w = p <= .5 * -Math.PI && .5 * -Math.PI <= m || p <= 1.5 * Math.PI && 1.5 * Math.PI <= m,
                  C = f / 100,
                  T = {
                    x: x ? -1 : Math.min(g.x * (g.x < 0 ? 1 : C), v.x * (v.x < 0 ? 1 : C)),
                    y: w ? -1 : Math.min(g.y * (g.y < 0 ? 1 : C), v.y * (v.y < 0 ? 1 : C))
                  },
                  k = {
                    x: y ? 1 : Math.max(g.x * (g.x > 0 ? 1 : C), v.x * (v.x > 0 ? 1 : C)),
                    y: b ? 1 : Math.max(g.y * (g.y > 0 ? 1 : C), v.y * (v.y > 0 ? 1 : C))
                  },
                  _ = {
                    width: .5 * (k.x - T.x),
                    height: .5 * (k.y - T.y)
                  };
                c = Math.min(s / _.width, l / _.height), u = {
                  x: (k.x + T.x) * -.5,
                  y: (k.y + T.y) * -.5
                }
              }
              i.borderWidth = n.getMaxBorderWidth(d.data), i.outerRadius = Math.max((c - i.borderWidth) / 2, 0), i.innerRadius = Math.max(f ? i.outerRadius / 100 * f : 0, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = u.x * i.outerRadius, i.offsetY = u.y * i.outerRadius, d.total = n.calculateTotal(), n.outerRadius = i.outerRadius - i.radiusLength * n.getRingIndex(n.index), n.innerRadius = Math.max(n.outerRadius - i.radiusLength, 0), t.each(d.data, function (t, i) {
                n.updateElement(t, i, e)
              })
            },
            updateElement: function (e, n, i) {
              var r = this,
                o = r.chart,
                a = o.chartArea,
                s = o.options,
                l = s.animation,
                c = (a.left + a.right) / 2,
                u = (a.top + a.bottom) / 2,
                d = s.rotation,
                f = s.rotation,
                h = r.getDataset(),
                p = i && l.animateRotate ? 0 : e.hidden ? 0 : r.calculateCircumference(h.data[n]) * (s.circumference / (2 * Math.PI)),
                m = i && l.animateScale ? 0 : r.innerRadius,
                g = i && l.animateScale ? 0 : r.outerRadius,
                v = t.getValueAtIndexOrDefault;
              t.extend(e, {
                _datasetIndex: r.index,
                _index: n,
                _model: {
                  x: c + o.offsetX,
                  y: u + o.offsetY,
                  startAngle: d,
                  endAngle: f,
                  circumference: p,
                  outerRadius: g,
                  innerRadius: m,
                  label: v(h.label, n, o.data.labels[n])
                }
              });
              var y = e._model;
              this.removeHoverStyle(e), i && l.animateRotate || (y.startAngle = 0 === n ? s.rotation : r.getMeta().data[n - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), e.pivot()
            },
            removeHoverStyle: function (t) {
              e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
            },
            calculateTotal: function () {
              var e, n = this.getDataset(),
                i = this.getMeta(),
                r = 0;
              return t.each(i.data, function (t, i) {
                e = n.data[i], isNaN(e) || t.hidden || (r += Math.abs(e))
              }), r
            },
            calculateCircumference: function (e) {
              var t = this.getMeta().total;
              return t > 0 && !isNaN(e) ? 2 * Math.PI * (e / t) : 0
            },
            getMaxBorderWidth: function (e) {
              for (var t, n, i = 0, r = this.index, o = e.length, a = 0; a < o; a++) t = e[a]._model ? e[a]._model.borderWidth : 0, n = e[a]._chart ? e[a]._chart.config.data.datasets[r].hoverBorderWidth : 0, i = t > i ? t : i, i = n > i ? n : i;
              return i
            }
          })
        }
      }, {}],
      18: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          function t(e, t) {
            return n.getValueOrDefault(e.showLine, t.showLines)
          }
          var n = e.helpers;
          e.defaults.line = {
            showLines: !0,
            spanGaps: !1,
            hover: {
              mode: "label"
            },
            scales: {
              xAxes: [{
                type: "category",
                id: "x-axis-0"
              }],
              yAxes: [{
                type: "linear",
                id: "y-axis-0"
              }]
            }
          }, e.controllers.line = e.DatasetController.extend({
            datasetElementType: e.elements.Line,
            dataElementType: e.elements.Point,
            update: function (e) {
              var i, r, o, a = this,
                s = a.getMeta(),
                l = s.dataset,
                c = s.data || [],
                u = a.chart.options,
                d = u.elements.line,
                f = a.getScaleForId(s.yAxisID),
                h = a.getDataset(),
                p = t(h, u);
              for (p && (o = l.custom || {}, void 0 !== h.tension && void 0 === h.lineTension && (h.lineTension = h.tension), l._scale = f, l._datasetIndex = a.index, l._children = c, l._model = {
                  spanGaps: h.spanGaps ? h.spanGaps : u.spanGaps,
                  tension: o.tension ? o.tension : n.getValueOrDefault(h.lineTension, d.tension),
                  backgroundColor: o.backgroundColor ? o.backgroundColor : h.backgroundColor || d.backgroundColor,
                  borderWidth: o.borderWidth ? o.borderWidth : h.borderWidth || d.borderWidth,
                  borderColor: o.borderColor ? o.borderColor : h.borderColor || d.borderColor,
                  borderCapStyle: o.borderCapStyle ? o.borderCapStyle : h.borderCapStyle || d.borderCapStyle,
                  borderDash: o.borderDash ? o.borderDash : h.borderDash || d.borderDash,
                  borderDashOffset: o.borderDashOffset ? o.borderDashOffset : h.borderDashOffset || d.borderDashOffset,
                  borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : h.borderJoinStyle || d.borderJoinStyle,
                  fill: o.fill ? o.fill : void 0 !== h.fill ? h.fill : d.fill,
                  steppedLine: o.steppedLine ? o.steppedLine : n.getValueOrDefault(h.steppedLine, d.stepped),
                  cubicInterpolationMode: o.cubicInterpolationMode ? o.cubicInterpolationMode : n.getValueOrDefault(h.cubicInterpolationMode, d.cubicInterpolationMode)
                }, l.pivot()), i = 0, r = c.length; i < r; ++i) a.updateElement(c[i], i, e);
              for (p && 0 !== l._model.tension && a.updateBezierControlPoints(), i = 0, r = c.length; i < r; ++i) c[i].pivot()
            },
            getPointBackgroundColor: function (e, t) {
              var i = this.chart.options.elements.point.backgroundColor,
                r = this.getDataset(),
                o = e.custom || {};
              return o.backgroundColor ? i = o.backgroundColor : r.pointBackgroundColor ? i = n.getValueAtIndexOrDefault(r.pointBackgroundColor, t, i) : r.backgroundColor && (i = r.backgroundColor), i
            },
            getPointBorderColor: function (e, t) {
              var i = this.chart.options.elements.point.borderColor,
                r = this.getDataset(),
                o = e.custom || {};
              return o.borderColor ? i = o.borderColor : r.pointBorderColor ? i = n.getValueAtIndexOrDefault(r.pointBorderColor, t, i) : r.borderColor && (i = r.borderColor), i
            },
            getPointBorderWidth: function (e, t) {
              var i = this.chart.options.elements.point.borderWidth,
                r = this.getDataset(),
                o = e.custom || {};
              return isNaN(o.borderWidth) ? isNaN(r.pointBorderWidth) ? isNaN(r.borderWidth) || (i = r.borderWidth) : i = n.getValueAtIndexOrDefault(r.pointBorderWidth, t, i) : i = o.borderWidth, i
            },
            updateElement: function (e, t, i) {
              var r, o, a = this,
                s = a.getMeta(),
                l = e.custom || {},
                c = a.getDataset(),
                u = a.index,
                d = c.data[t],
                f = a.getScaleForId(s.yAxisID),
                h = a.getScaleForId(s.xAxisID),
                p = a.chart.options.elements.point,
                m = a.chart.data.labels || [],
                g = 1 === m.length || 1 === c.data.length || a.chart.isCombo;
              void 0 !== c.radius && void 0 === c.pointRadius && (c.pointRadius = c.radius), void 0 !== c.hitRadius && void 0 === c.pointHitRadius && (c.pointHitRadius = c.hitRadius), r = h.getPixelForValue("object" == typeof d ? d : NaN, t, u, g), o = i ? f.getBasePixel() : a.calculatePointY(d, t, u), e._xScale = h, e._yScale = f, e._datasetIndex = u, e._index = t, e._model = {
                x: r,
                y: o,
                skip: l.skip || isNaN(r) || isNaN(o),
                radius: l.radius || n.getValueAtIndexOrDefault(c.pointRadius, t, p.radius),
                pointStyle: l.pointStyle || n.getValueAtIndexOrDefault(c.pointStyle, t, p.pointStyle),
                backgroundColor: a.getPointBackgroundColor(e, t),
                borderColor: a.getPointBorderColor(e, t),
                borderWidth: a.getPointBorderWidth(e, t),
                tension: s.dataset._model ? s.dataset._model.tension : 0,
                steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
                hitRadius: l.hitRadius || n.getValueAtIndexOrDefault(c.pointHitRadius, t, p.hitRadius)
              }
            },
            calculatePointY: function (e, t, n) {
              var i, r, o, a = this,
                s = a.chart,
                l = a.getMeta(),
                c = a.getScaleForId(l.yAxisID),
                u = 0,
                d = 0;
              if (c.options.stacked) {
                for (i = 0; i < n; i++)
                  if (r = s.data.datasets[i], o = s.getDatasetMeta(i), "line" === o.type && o.yAxisID === c.id && s.isDatasetVisible(i)) {
                    var f = Number(c.getRightValue(r.data[t]));
                    f < 0 ? d += f || 0 : u += f || 0
                  }
                var h = Number(c.getRightValue(e));
                return h < 0 ? c.getPixelForValue(d + h) : c.getPixelForValue(u + h)
              }
              return c.getPixelForValue(e)
            },
            updateBezierControlPoints: function () {
              function e(e, t, n) {
                return Math.max(Math.min(e, n), t)
              }
              var t, i, r, o, a, s = this,
                l = s.getMeta(),
                c = s.chart.chartArea,
                u = l.data || [];
              if (l.dataset._model.spanGaps && (u = u.filter(function (e) {
                  return !e._model.skip
                })), "monotone" === l.dataset._model.cubicInterpolationMode) n.splineCurveMonotone(u);
              else
                for (t = 0, i = u.length; t < i; ++t) r = u[t], o = r._model, a = n.splineCurve(n.previousItem(u, t)._model, o, n.nextItem(u, t)._model, l.dataset._model.tension), o.controlPointPreviousX = a.previous.x, o.controlPointPreviousY = a.previous.y, o.controlPointNextX = a.next.x, o.controlPointNextY = a.next.y;
              if (s.chart.options.elements.line.capBezierPoints)
                for (t = 0, i = u.length; t < i; ++t) o = u[t]._model, o.controlPointPreviousX = e(o.controlPointPreviousX, c.left, c.right), o.controlPointPreviousY = e(o.controlPointPreviousY, c.top, c.bottom), o.controlPointNextX = e(o.controlPointNextX, c.left, c.right), o.controlPointNextY = e(o.controlPointNextY, c.top, c.bottom)
            },
            draw: function () {
              var n = this,
                i = n.chart,
                r = n.getMeta(),
                o = r.data || [],
                a = i.chartArea,
                s = o.length,
                l = 0;
              for (e.canvasHelpers.clipArea(i.ctx, a), t(n.getDataset(), i.options) && r.dataset.draw(), e.canvasHelpers.unclipArea(i.ctx); l < s; ++l) o[l].draw(a)
            },
            setHoverStyle: function (e) {
              var t = this.chart.data.datasets[e._datasetIndex],
                i = e._index,
                r = e.custom || {},
                o = e._model;
              o.radius = r.hoverRadius || n.getValueAtIndexOrDefault(t.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), o.backgroundColor = r.hoverBackgroundColor || n.getValueAtIndexOrDefault(t.pointHoverBackgroundColor, i, n.getHoverColor(o.backgroundColor)), o.borderColor = r.hoverBorderColor || n.getValueAtIndexOrDefault(t.pointHoverBorderColor, i, n.getHoverColor(o.borderColor)), o.borderWidth = r.hoverBorderWidth || n.getValueAtIndexOrDefault(t.pointHoverBorderWidth, i, o.borderWidth)
            },
            removeHoverStyle: function (e) {
              var t = this,
                i = t.chart.data.datasets[e._datasetIndex],
                r = e._index,
                o = e.custom || {},
                a = e._model;
              void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), a.radius = o.radius || n.getValueAtIndexOrDefault(i.pointRadius, r, t.chart.options.elements.point.radius), a.backgroundColor = t.getPointBackgroundColor(e, r), a.borderColor = t.getPointBorderColor(e, r), a.borderWidth = t.getPointBorderWidth(e, r)
            }
          })
        }
      }, {}],
      19: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          var t = e.helpers;
          e.defaults.polarArea = {
            scale: {
              type: "radialLinear",
              angleLines: {
                display: !1
              },
              gridLines: {
                circular: !0
              },
              pointLabels: {
                display: !1
              },
              ticks: {
                beginAtZero: !0
              }
            },
            animation: {
              animateRotate: !0,
              animateScale: !0
            },
            startAngle: -.5 * Math.PI,
            aspectRatio: 1,
            legendCallback: function (e) {
              var t = [];
              t.push('<ul class="' + e.id + '-legend">');
              var n = e.data,
                i = n.datasets,
                r = n.labels;
              if (i.length)
                for (var o = 0; o < i[0].data.length; ++o) t.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), r[o] && t.push(r[o]), t.push("</li>");
              return t.push("</ul>"), t.join("")
            },
            legend: {
              labels: {
                generateLabels: function (e) {
                  var n = e.data;
                  return n.labels.length && n.datasets.length ? n.labels.map(function (i, r) {
                    var o = e.getDatasetMeta(0),
                      a = n.datasets[0],
                      s = o.data[r],
                      l = s.custom || {},
                      c = t.getValueAtIndexOrDefault,
                      u = e.options.elements.arc;
                    return {
                      text: i,
                      fillStyle: l.backgroundColor ? l.backgroundColor : c(a.backgroundColor, r, u.backgroundColor),
                      strokeStyle: l.borderColor ? l.borderColor : c(a.borderColor, r, u.borderColor),
                      lineWidth: l.borderWidth ? l.borderWidth : c(a.borderWidth, r, u.borderWidth),
                      hidden: isNaN(a.data[r]) || o.data[r].hidden,
                      index: r
                    }
                  }) : []
                }
              },
              onClick: function (e, t) {
                var n, i, r, o = t.index,
                  a = this.chart;
                for (n = 0, i = (a.data.datasets || []).length; n < i; ++n) r = a.getDatasetMeta(n), r.data[o].hidden = !r.data[o].hidden;
                a.update()
              }
            },
            tooltips: {
              callbacks: {
                title: function () {
                  return ""
                },
                label: function (e, t) {
                  return t.labels[e.index] + ": " + e.yLabel
                }
              }
            }
          }, e.controllers.polarArea = e.DatasetController.extend({
            dataElementType: e.elements.Arc,
            linkScales: t.noop,
            update: function (e) {
              var n = this,
                i = n.chart,
                r = i.chartArea,
                o = n.getMeta(),
                a = i.options,
                s = a.elements.arc,
                l = Math.min(r.right - r.left, r.bottom - r.top);
              i.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), i.innerRadius = Math.max(a.cutoutPercentage ? i.outerRadius / 100 * a.cutoutPercentage : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), n.outerRadius = i.outerRadius - i.radiusLength * n.index, n.innerRadius = n.outerRadius - i.radiusLength, o.count = n.countVisibleElements(), t.each(o.data, function (t, i) {
                n.updateElement(t, i, e)
              })
            },
            updateElement: function (e, n, i) {
              for (var r = this, o = r.chart, a = r.getDataset(), s = o.options, l = s.animation, c = o.scale, u = t.getValueAtIndexOrDefault, d = o.data.labels, f = r.calculateCircumference(a.data[n]), h = c.xCenter, p = c.yCenter, m = 0, g = r.getMeta(), v = 0; v < n; ++v) isNaN(a.data[v]) || g.data[v].hidden || ++m;
              var y = s.startAngle,
                b = e.hidden ? 0 : c.getDistanceFromCenterForValue(a.data[n]),
                x = y + f * m,
                w = x + (e.hidden ? 0 : f),
                C = l.animateScale ? 0 : c.getDistanceFromCenterForValue(a.data[n]);
              t.extend(e, {
                _datasetIndex: r.index,
                _index: n,
                _scale: c,
                _model: {
                  x: h,
                  y: p,
                  innerRadius: 0,
                  outerRadius: i ? C : b,
                  startAngle: i && l.animateRotate ? y : x,
                  endAngle: i && l.animateRotate ? y : w,
                  label: u(d, n, d[n])
                }
              }), r.removeHoverStyle(e), e.pivot()
            },
            removeHoverStyle: function (t) {
              e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
            },
            countVisibleElements: function () {
              var e = this.getDataset(),
                n = this.getMeta(),
                i = 0;
              return t.each(n.data, function (t, n) {
                isNaN(e.data[n]) || t.hidden || i++
              }), i
            },
            calculateCircumference: function (e) {
              var t = this.getMeta().count;
              return t > 0 && !isNaN(e) ? 2 * Math.PI / t : 0
            }
          })
        }
      }, {}],
      20: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          var t = e.helpers;
          e.defaults.radar = {
            aspectRatio: 1,
            scale: {
              type: "radialLinear"
            },
            elements: {
              line: {
                tension: 0
              }
            }
          }, e.controllers.radar = e.DatasetController.extend({
            datasetElementType: e.elements.Line,
            dataElementType: e.elements.Point,
            linkScales: t.noop,
            update: function (e) {
              var n = this,
                i = n.getMeta(),
                r = i.dataset,
                o = i.data,
                a = r.custom || {},
                s = n.getDataset(),
                l = n.chart.options.elements.line,
                c = n.chart.scale;
              void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), t.extend(i.dataset, {
                _datasetIndex: n.index,
                _scale: c,
                _children: o,
                _loop: !0,
                _model: {
                  tension: a.tension ? a.tension : t.getValueOrDefault(s.lineTension, l.tension),
                  backgroundColor: a.backgroundColor ? a.backgroundColor : s.backgroundColor || l.backgroundColor,
                  borderWidth: a.borderWidth ? a.borderWidth : s.borderWidth || l.borderWidth,
                  borderColor: a.borderColor ? a.borderColor : s.borderColor || l.borderColor,
                  fill: a.fill ? a.fill : void 0 !== s.fill ? s.fill : l.fill,
                  borderCapStyle: a.borderCapStyle ? a.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                  borderDash: a.borderDash ? a.borderDash : s.borderDash || l.borderDash,
                  borderDashOffset: a.borderDashOffset ? a.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                  borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
                }
              }), i.dataset.pivot(), t.each(o, function (t, i) {
                n.updateElement(t, i, e)
              }, n), n.updateBezierControlPoints()
            },
            updateElement: function (e, n, i) {
              var r = this,
                o = e.custom || {},
                a = r.getDataset(),
                s = r.chart.scale,
                l = r.chart.options.elements.point,
                c = s.getPointPositionForValue(n, a.data[n]);
              void 0 !== a.radius && void 0 === a.pointRadius && (a.pointRadius = a.radius), void 0 !== a.hitRadius && void 0 === a.pointHitRadius && (a.pointHitRadius = a.hitRadius), t.extend(e, {
                _datasetIndex: r.index,
                _index: n,
                _scale: s,
                _model: {
                  x: i ? s.xCenter : c.x,
                  y: i ? s.yCenter : c.y,
                  tension: o.tension ? o.tension : t.getValueOrDefault(a.lineTension, r.chart.options.elements.line.tension),
                  radius: o.radius ? o.radius : t.getValueAtIndexOrDefault(a.pointRadius, n, l.radius),
                  backgroundColor: o.backgroundColor ? o.backgroundColor : t.getValueAtIndexOrDefault(a.pointBackgroundColor, n, l.backgroundColor),
                  borderColor: o.borderColor ? o.borderColor : t.getValueAtIndexOrDefault(a.pointBorderColor, n, l.borderColor),
                  borderWidth: o.borderWidth ? o.borderWidth : t.getValueAtIndexOrDefault(a.pointBorderWidth, n, l.borderWidth),
                  pointStyle: o.pointStyle ? o.pointStyle : t.getValueAtIndexOrDefault(a.pointStyle, n, l.pointStyle),
                  hitRadius: o.hitRadius ? o.hitRadius : t.getValueAtIndexOrDefault(a.pointHitRadius, n, l.hitRadius)
                }
              }), e._model.skip = o.skip ? o.skip : isNaN(e._model.x) || isNaN(e._model.y)
            },
            updateBezierControlPoints: function () {
              var e = this.chart.chartArea,
                n = this.getMeta();
              t.each(n.data, function (i, r) {
                var o = i._model,
                  a = t.splineCurve(t.previousItem(n.data, r, !0)._model, o, t.nextItem(n.data, r, !0)._model, o.tension);
                o.controlPointPreviousX = Math.max(Math.min(a.previous.x, e.right), e.left), o.controlPointPreviousY = Math.max(Math.min(a.previous.y, e.bottom), e.top), o.controlPointNextX = Math.max(Math.min(a.next.x, e.right), e.left), o.controlPointNextY = Math.max(Math.min(a.next.y, e.bottom), e.top), i.pivot()
              })
            },
            setHoverStyle: function (e) {
              var n = this.chart.data.datasets[e._datasetIndex],
                i = e.custom || {},
                r = e._index,
                o = e._model;
              o.radius = i.hoverRadius ? i.hoverRadius : t.getValueAtIndexOrDefault(n.pointHoverRadius, r, this.chart.options.elements.point.hoverRadius), o.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : t.getValueAtIndexOrDefault(n.pointHoverBackgroundColor, r, t.getHoverColor(o.backgroundColor)), o.borderColor = i.hoverBorderColor ? i.hoverBorderColor : t.getValueAtIndexOrDefault(n.pointHoverBorderColor, r, t.getHoverColor(o.borderColor)), o.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : t.getValueAtIndexOrDefault(n.pointHoverBorderWidth, r, o.borderWidth)
            },
            removeHoverStyle: function (e) {
              var n = this.chart.data.datasets[e._datasetIndex],
                i = e.custom || {},
                r = e._index,
                o = e._model,
                a = this.chart.options.elements.point;
              o.radius = i.radius ? i.radius : t.getValueAtIndexOrDefault(n.pointRadius, r, a.radius), o.backgroundColor = i.backgroundColor ? i.backgroundColor : t.getValueAtIndexOrDefault(n.pointBackgroundColor, r, a.backgroundColor), o.borderColor = i.borderColor ? i.borderColor : t.getValueAtIndexOrDefault(n.pointBorderColor, r, a.borderColor), o.borderWidth = i.borderWidth ? i.borderWidth : t.getValueAtIndexOrDefault(n.pointBorderWidth, r, a.borderWidth)
            }
          })
        }
      }, {}],
      21: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          var t = e.helpers;
          e.defaults.global.animation = {
            duration: 1e3,
            easing: "easeOutQuart",
            onProgress: t.noop,
            onComplete: t.noop
          }, e.Animation = e.Element.extend({
            chart: null,
            currentStep: 0,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null
          }), e.animationService = {
            frameDuration: 17,
            animations: [],
            dropFrames: 0,
            request: null,
            addAnimation: function (e, t, n, i) {
              var r, o, a = this.animations;
              for (t.chart = e, i || (e.animating = !0), r = 0, o = a.length; r < o; ++r)
                if (a[r].chart === e) return void(a[r] = t);
              a.push(t), 1 === a.length && this.requestAnimationFrame()
            },
            cancelAnimation: function (e) {
              var n = t.findIndex(this.animations, function (t) {
                return t.chart === e
              });
              n !== -1 && (this.animations.splice(n, 1), e.animating = !1)
            },
            requestAnimationFrame: function () {
              var e = this;
              null === e.request && (e.request = t.requestAnimFrame.call(window, function () {
                e.request = null, e.startDigest()
              }))
            },
            startDigest: function () {
              var e = this,
                t = Date.now(),
                n = 0;
              e.dropFrames > 1 && (n = Math.floor(e.dropFrames), e.dropFrames = e.dropFrames % 1), e.advance(1 + n);
              var i = Date.now();
              e.dropFrames += (i - t) / e.frameDuration, e.animations.length > 0 && e.requestAnimationFrame()
            },
            advance: function (e) {
              for (var n, i, r = this.animations, o = 0; o < r.length;) n = r[o], i = n.chart, n.currentStep = (n.currentStep || 0) + e, n.currentStep = Math.min(n.currentStep, n.numSteps), t.callback(n.render, [i, n], i), t.callback(n.onAnimationProgress, [n], i), n.currentStep >= n.numSteps ? (t.callback(n.onAnimationComplete, [n], i), i.animating = !1, r.splice(o, 1)) : ++o
            }
          }, Object.defineProperty(e.Animation.prototype, "animationObject", {
            get: function () {
              return this
            }
          }), Object.defineProperty(e.Animation.prototype, "chartInstance", {
            get: function () {
              return this.chart
            },
            set: function (e) {
              this.chart = e
            }
          })
        }
      }, {}],
      22: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          var t = e.canvasHelpers = {};
          t.drawPoint = function (t, n, i, r, o) {
            var a, s, l, c, u, d;
            if ("object" == typeof n && ("[object HTMLImageElement]" === (a = n.toString()) || "[object HTMLCanvasElement]" === a)) return void t.drawImage(n, r - n.width / 2, o - n.height / 2, n.width, n.height);
            if (!(isNaN(i) || i <= 0)) {
              switch (n) {
                default: t.beginPath(),
                t.arc(r, o, i, 0, 2 * Math.PI),
                t.closePath(),
                t.fill();
                break;
                case "triangle":
                    t.beginPath(),
                  s = 3 * i / Math.sqrt(3),
                  u = s * Math.sqrt(3) / 2,
                  t.moveTo(r - s / 2, o + u / 3),
                  t.lineTo(r + s / 2, o + u / 3),
                  t.lineTo(r, o - 2 * u / 3),
                  t.closePath(),
                  t.fill();
                  break;
                case "rect":
                    d = 1 / Math.SQRT2 * i,
                  t.beginPath(),
                  t.fillRect(r - d, o - d, 2 * d, 2 * d),
                  t.strokeRect(r - d, o - d, 2 * d, 2 * d);
                  break;
                case "rectRounded":
                    var f = i / Math.SQRT2,
                    h = r - f,
                    p = o - f,
                    m = Math.SQRT2 * i;e.helpers.drawRoundedRectangle(t, h, p, m, m, i / 2),
                  t.fill();
                  break;
                case "rectRot":
                    d = 1 / Math.SQRT2 * i,
                  t.beginPath(),
                  t.moveTo(r - d, o),
                  t.lineTo(r, o + d),
                  t.lineTo(r + d, o),
                  t.lineTo(r, o - d),
                  t.closePath(),
                  t.fill();
                  break;
                case "cross":
                    t.beginPath(),
                  t.moveTo(r, o + i),
                  t.lineTo(r, o - i),
                  t.moveTo(r - i, o),
                  t.lineTo(r + i, o),
                  t.closePath();
                  break;
                case "crossRot":
                    t.beginPath(),
                  l = Math.cos(Math.PI / 4) * i,
                  c = Math.sin(Math.PI / 4) * i,
                  t.moveTo(r - l, o - c),
                  t.lineTo(r + l, o + c),
                  t.moveTo(r - l, o + c),
                  t.lineTo(r + l, o - c),
                  t.closePath();
                  break;
                case "star":
                    t.beginPath(),
                  t.moveTo(r, o + i),
                  t.lineTo(r, o - i),
                  t.moveTo(r - i, o),
                  t.lineTo(r + i, o),
                  l = Math.cos(Math.PI / 4) * i,
                  c = Math.sin(Math.PI / 4) * i,
                  t.moveTo(r - l, o - c),
                  t.lineTo(r + l, o + c),
                  t.moveTo(r - l, o + c),
                  t.lineTo(r + l, o - c),
                  t.closePath();
                  break;
                case "line":
                    t.beginPath(),
                  t.moveTo(r - i, o),
                  t.lineTo(r + i, o),
                  t.closePath();
                  break;
                case "dash":
                    t.beginPath(),
                  t.moveTo(r, o),
                  t.lineTo(r + i, o),
                  t.closePath()
              }
              t.stroke()
            }
          }, t.clipArea = function (e, t) {
            e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip()
          }, t.unclipArea = function (e) {
            e.restore()
          }, t.lineTo = function (e, t, n, i) {
            return n.steppedLine ? ("after" === n.steppedLine ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y), void e.lineTo(n.x, n.y)) : n.tension ? void e.bezierCurveTo(i ? t.controlPointPreviousX : t.controlPointNextX, i ? t.controlPointPreviousY : t.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : void e.lineTo(n.x, n.y)
          }, e.helpers.canvas = t
        }
      }, {}],
      23: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          function t(t) {
            t = t || {};
            var n = t.data = t.data || {};
            return n.datasets = n.datasets || [], n.labels = n.labels || [], t.options = r.configMerge(e.defaults.global, e.defaults[t.type], t.options || {}), t
          }

          function n(e) {
            var t = e.options;
            t.scale ? e.scale.options = t.scale : t.scales && t.scales.xAxes.concat(t.scales.yAxes).forEach(function (t) {
              e.scales[t.id].options = t
            }), e.tooltip._options = t.tooltips
          }

          function i(e) {
            return "top" === e || "bottom" === e
          }
          var r = e.helpers,
            o = e.plugins,
            a = e.platform;
          e.types = {}, e.instances = {}, e.controllers = {}, r.extend(e.prototype, {
            construct: function (n, i) {
              var o = this;
              i = t(i);
              var s = a.acquireContext(n, i),
                l = s && s.canvas,
                c = l && l.height,
                u = l && l.width;
              if (o.id = r.uid(), o.ctx = s, o.canvas = l, o.config = i, o.width = u, o.height = c, o.aspectRatio = c ? u / c : null, o.options = i.options, o._bufferedRender = !1, o.chart = o, o.controller = o, e.instances[o.id] = o, Object.defineProperty(o, "data", {
                  get: function () {
                    return o.config.data
                  },
                  set: function (e) {
                    o.config.data = e
                  }
                }), !s || !l) return void console.error("Failed to create chart: can't acquire context from the given item");
              o.initialize(), o.update()
            },
            initialize: function () {
              var e = this;
              return o.notify(e, "beforeInit"), r.retinaScale(e), e.bindEvents(), e.options.responsive && e.resize(!0), e.ensureScalesHaveIDs(), e.buildScales(), e.initToolTip(), o.notify(e, "afterInit"), e
            },
            clear: function () {
              return r.clear(this), this
            },
            stop: function () {
              return e.animationService.cancelAnimation(this), this
            },
            resize: function (e) {
              var t = this,
                n = t.options,
                i = t.canvas,
                a = n.maintainAspectRatio && t.aspectRatio || null,
                s = Math.floor(r.getMaximumWidth(i)),
                l = Math.floor(a ? s / a : r.getMaximumHeight(i));
              if ((t.width !== s || t.height !== l) && (i.width = t.width = s, i.height = t.height = l, i.style.width = s + "px", i.style.height = l + "px", r.retinaScale(t), !e)) {
                var c = {
                  width: s,
                  height: l
                };
                o.notify(t, "resize", [c]), t.options.onResize && t.options.onResize(t, c), t.stop(), t.update(t.options.responsiveAnimationDuration)
              }
            },
            ensureScalesHaveIDs: function () {
              var e = this.options,
                t = e.scales || {},
                n = e.scale;
              r.each(t.xAxes, function (e, t) {
                e.id = e.id || "x-axis-" + t
              }), r.each(t.yAxes, function (e, t) {
                e.id = e.id || "y-axis-" + t
              }), n && (n.id = n.id || "scale")
            },
            buildScales: function () {
              var t = this,
                n = t.options,
                o = t.scales = {},
                a = [];
              n.scales && (a = a.concat((n.scales.xAxes || []).map(function (e) {
                return {
                  options: e,
                  dtype: "category",
                  dposition: "bottom"
                }
              }), (n.scales.yAxes || []).map(function (e) {
                return {
                  options: e,
                  dtype: "linear",
                  dposition: "left"
                }
              }))), n.scale && a.push({
                options: n.scale,
                dtype: "radialLinear",
                isDefault: !0,
                dposition: "chartArea"
              }), r.each(a, function (n) {
                var a = n.options,
                  s = r.getValueOrDefault(a.type, n.dtype),
                  l = e.scaleService.getScaleConstructor(s);
                if (l) {
                  i(a.position) !== i(n.dposition) && (a.position = n.dposition);
                  var c = new l({
                    id: a.id,
                    options: a,
                    ctx: t.ctx,
                    chart: t
                  });
                  o[c.id] = c, n.isDefault && (t.scale = c)
                }
              }), e.scaleService.addScalesToLayout(this)
            },
            buildOrUpdateControllers: function () {
              var t = this,
                n = [],
                i = [];
              if (r.each(t.data.datasets, function (r, o) {
                  var a = t.getDatasetMeta(o);
                  if (a.type || (a.type = r.type || t.config.type), n.push(a.type), a.controller) a.controller.updateIndex(o);
                  else {
                    var s = e.controllers[a.type];
                    if (void 0 === s) throw new Error('"' + a.type + '" is not a chart type.');
                    a.controller = new s(t, o), i.push(a.controller)
                  }
                }, t), n.length > 1)
                for (var o = 1; o < n.length; o++)
                  if (n[o] !== n[o - 1]) {
                    t.isCombo = !0;
                    break
                  }
              return i
            },
            resetElements: function () {
              var e = this;
              r.each(e.data.datasets, function (t, n) {
                e.getDatasetMeta(n).controller.reset()
              }, e)
            },
            reset: function () {
              this.resetElements(), this.tooltip.initialize()
            },
            update: function (e, t) {
              var i = this;
              if (n(i), o.notify(i, "beforeUpdate") !== !1) {
                i.tooltip._data = i.data;
                var a = i.buildOrUpdateControllers();
                r.each(i.data.datasets, function (e, t) {
                  i.getDatasetMeta(t).controller.buildOrUpdateElements()
                }, i), i.updateLayout(), r.each(a, function (e) {
                  e.reset()
                }), i.updateDatasets(), o.notify(i, "afterUpdate"), i._bufferedRender ? i._bufferedRequest = {
                  lazy: t,
                  duration: e
                } : i.render(e, t)
              }
            },
            updateLayout: function () {
              var t = this;
              o.notify(t, "beforeLayout") !== !1 && (e.layoutService.update(this, this.width, this.height), o.notify(t, "afterScaleUpdate"), o.notify(t, "afterLayout"))
            },
            updateDatasets: function () {
              var e = this;
              if (o.notify(e, "beforeDatasetsUpdate") !== !1) {
                for (var t = 0, n = e.data.datasets.length; t < n; ++t) e.updateDataset(t);
                o.notify(e, "afterDatasetsUpdate")
              }
            },
            updateDataset: function (e) {
              var t = this,
                n = t.getDatasetMeta(e),
                i = {
                  meta: n,
                  index: e
                };
              o.notify(t, "beforeDatasetUpdate", [i]) !== !1 && (n.controller.update(), o.notify(t, "afterDatasetUpdate", [i]))
            },
            render: function (t, n) {
              var i = this;
              if (o.notify(i, "beforeRender") !== !1) {
                var a = i.options.animation,
                  s = function (e) {
                    o.notify(i, "afterRender"), r.callback(a && a.onComplete, [e], i)
                  };
                if (a && (void 0 !== t && 0 !== t || void 0 === t && 0 !== a.duration)) {
                  var l = new e.Animation({
                    numSteps: (t || a.duration) / 16.66,
                    easing: a.easing,
                    render: function (e, t) {
                      var n = r.easingEffects[t.easing],
                        i = t.currentStep,
                        o = i / t.numSteps;
                      e.draw(n(o), o, i)
                    },
                    onAnimationProgress: a.onProgress,
                    onAnimationComplete: s
                  });
                  e.animationService.addAnimation(i, l, t, n)
                } else i.draw(), s(new e.Animation({
                  numSteps: 0,
                  chart: i
                }));
                return i
              }
            },
            draw: function (e) {
              var t = this;
              t.clear(), void 0 !== e && null !== e || (e = 1), t.transition(e), o.notify(t, "beforeDraw", [e]) !== !1 && (r.each(t.boxes, function (e) {
                e.draw(t.chartArea)
              }, t), t.scale && t.scale.draw(), t.drawDatasets(e), t.tooltip.draw(), o.notify(t, "afterDraw", [e]))
            },
            transition: function (e) {
              for (var t = this, n = 0, i = (t.data.datasets || []).length; n < i; ++n) t.isDatasetVisible(n) && t.getDatasetMeta(n).controller.transition(e);
              t.tooltip.transition(e)
            },
            drawDatasets: function (e) {
              var t = this;
              if (o.notify(t, "beforeDatasetsDraw", [e]) !== !1) {
                for (var n = (t.data.datasets || []).length - 1; n >= 0; --n) t.isDatasetVisible(n) && t.drawDataset(n, e);
                o.notify(t, "afterDatasetsDraw", [e])
              }
            },
            drawDataset: function (e, t) {
              var n = this,
                i = n.getDatasetMeta(e),
                r = {
                  meta: i,
                  index: e,
                  easingValue: t
                };
              o.notify(n, "beforeDatasetDraw", [r]) !== !1 && (i.controller.draw(t), o.notify(n, "afterDatasetDraw", [r]))
            },
            getElementAtEvent: function (t) {
              return e.Interaction.modes.single(this, t)
            },
            getElementsAtEvent: function (t) {
              return e.Interaction.modes.label(this, t, {
                intersect: !0
              })
            },
            getElementsAtXAxis: function (t) {
              return e.Interaction.modes["x-axis"](this, t, {
                intersect: !0
              })
            },
            getElementsAtEventForMode: function (t, n, i) {
              var r = e.Interaction.modes[n];
              return "function" == typeof r ? r(this, t, i) : []
            },
            getDatasetAtEvent: function (t) {
              return e.Interaction.modes.dataset(this, t, {
                intersect: !0
              })
            },
            getDatasetMeta: function (e) {
              var t = this,
                n = t.data.datasets[e];
              n._meta || (n._meta = {});
              var i = n._meta[t.id];
              return i || (i = n._meta[t.id] = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null
              }), i
            },
            getVisibleDatasetCount: function () {
              for (var e = 0, t = 0, n = this.data.datasets.length; t < n; ++t) this.isDatasetVisible(t) && e++;
              return e
            },
            isDatasetVisible: function (e) {
              var t = this.getDatasetMeta(e);
              return "boolean" == typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden
            },
            generateLegend: function () {
              return this.options.legendCallback(this)
            },
            destroy: function () {
              var t, n, i, s = this,
                l = s.canvas;
              for (s.stop(), n = 0, i = s.data.datasets.length; n < i; ++n) t = s.getDatasetMeta(n), t.controller && (t.controller.destroy(), t.controller = null);
              l && (s.unbindEvents(), r.clear(s), a.releaseContext(s.ctx), s.canvas = null, s.ctx = null), o.notify(s, "destroy"), delete e.instances[s.id]
            },
            toBase64Image: function () {
              return this.canvas.toDataURL.apply(this.canvas, arguments)
            },
            initToolTip: function () {
              var t = this;
              t.tooltip = new e.Tooltip({
                _chart: t,
                _chartInstance: t,
                _data: t.data,
                _options: t.options.tooltips
              }, t), t.tooltip.initialize()
            },
            bindEvents: function () {
              var e = this,
                t = e._listeners = {},
                n = function () {
                  e.eventHandler.apply(e, arguments)
                };
              r.each(e.options.events, function (i) {
                a.addEventListener(e, i, n), t[i] = n
              }), e.options.responsive && (n = function () {
                e.resize()
              }, a.addEventListener(e, "resize", n), t.resize = n)
            },
            unbindEvents: function () {
              var e = this,
                t = e._listeners;
              t && (delete e._listeners, r.each(t, function (t, n) {
                a.removeEventListener(e, n, t)
              }))
            },
            updateHoverStyle: function (e, t, n) {
              var i, r, o, a = n ? "setHoverStyle" : "removeHoverStyle";
              for (r = 0, o = e.length; r < o; ++r)(i = e[r]) && this.getDatasetMeta(i._datasetIndex).controller[a](i)
            },
            eventHandler: function (e) {
              var t = this,
                n = t.tooltip;
              if (o.notify(t, "beforeEvent", [e]) !== !1) {
                t._bufferedRender = !0, t._bufferedRequest = null;
                var i = t.handleEvent(e);
                i |= n && n.handleEvent(e), o.notify(t, "afterEvent", [e]);
                var r = t._bufferedRequest;
                return r ? t.render(r.duration, r.lazy) : i && !t.animating && (t.stop(), t.render(t.options.hover.animationDuration, !0)), t._bufferedRender = !1, t._bufferedRequest = null, t
              }
            },
            handleEvent: function (e) {
              var t = this,
                n = t.options || {},
                i = n.hover,
                o = !1;
              return t.lastActive = t.lastActive || [], "mouseout" === e.type ? t.active = [] : t.active = t.getElementsAtEventForMode(e, i.mode, i), i.onHover && i.onHover.call(t, e.native, t.active), "mouseup" !== e.type && "click" !== e.type || n.onClick && n.onClick.call(t, e.native, t.active), t.lastActive.length && t.updateHoverStyle(t.lastActive, i.mode, !1), t.active.length && i.mode && t.updateHoverStyle(t.active, i.mode, !0), o = !r.arrayEquals(t.active, t.lastActive), t.lastActive = t.active, o
            }
          }), e.Controller = e
        }
      }, {}],
      24: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          function t(e, t) {
            if (e._chartjs) return void e._chartjs.listeners.push(t);
            Object.defineProperty(e, "_chartjs", {
              configurable: !0,
              enumerable: !1,
              value: {
                listeners: [t]
              }
            }), r.forEach(function (t) {
              var n = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                r = e[t];
              Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !1,
                value: function () {
                  var t = Array.prototype.slice.call(arguments),
                    o = r.apply(this, t);
                  return i.each(e._chartjs.listeners, function (e) {
                    "function" == typeof e[n] && e[n].apply(e, t)
                  }), o
                }
              })
            })
          }

          function n(e, t) {
            var n = e._chartjs;
            if (n) {
              var i = n.listeners,
                o = i.indexOf(t);
              o !== -1 && i.splice(o, 1), i.length > 0 || (r.forEach(function (t) {
                delete e[t]
              }), delete e._chartjs)
            }
          }
          var i = e.helpers,
            r = ["push", "pop", "shift", "splice", "unshift"];
          e.DatasetController = function (e, t) {
            this.initialize(e, t)
          }, i.extend(e.DatasetController.prototype, {
            datasetElementType: null,
            dataElementType: null,
            initialize: function (e, t) {
              var n = this;
              n.chart = e, n.index = t, n.linkScales(), n.addElements()
            },
            updateIndex: function (e) {
              this.index = e
            },
            linkScales: function () {
              var e = this,
                t = e.getMeta(),
                n = e.getDataset();
              null === t.xAxisID && (t.xAxisID = n.xAxisID || e.chart.options.scales.xAxes[0].id), null === t.yAxisID && (t.yAxisID = n.yAxisID || e.chart.options.scales.yAxes[0].id)
            },
            getDataset: function () {
              return this.chart.data.datasets[this.index]
            },
            getMeta: function () {
              return this.chart.getDatasetMeta(this.index)
            },
            getScaleForId: function (e) {
              return this.chart.scales[e]
            },
            reset: function () {
              this.update(!0)
            },
            destroy: function () {
              this._data && n(this._data, this)
            },
            createMetaDataset: function () {
              var e = this,
                t = e.datasetElementType;
              return t && new t({
                _chart: e.chart,
                _datasetIndex: e.index
              })
            },
            createMetaData: function (e) {
              var t = this,
                n = t.dataElementType;
              return n && new n({
                _chart: t.chart,
                _datasetIndex: t.index,
                _index: e
              })
            },
            addElements: function () {
              var e, t, n = this,
                i = n.getMeta(),
                r = n.getDataset().data || [],
                o = i.data;
              for (e = 0, t = r.length; e < t; ++e) o[e] = o[e] || n.createMetaData(e);
              i.dataset = i.dataset || n.createMetaDataset()
            },
            addElementAndReset: function (e) {
              var t = this.createMetaData(e);
              this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0)
            },
            buildOrUpdateElements: function () {
              var e = this,
                i = e.getDataset(),
                r = i.data || (i.data = []);
              e._data !== r && (e._data && n(e._data, e), t(r, e), e._data = r), e.resyncElements()
            },
            update: i.noop,
            transition: function (e) {
              for (var t = this.getMeta(), n = t.data || [], i = n.length, r = 0; r < i; ++r) n[r].transition(e);
              t.dataset && t.dataset.transition(e)
            },
            draw: function () {
              var e = this.getMeta(),
                t = e.data || [],
                n = t.length,
                i = 0;
              for (e.dataset && e.dataset.draw(); i < n; ++i) t[i].draw()
            },
            removeHoverStyle: function (e, t) {
              var n = this.chart.data.datasets[e._datasetIndex],
                r = e._index,
                o = e.custom || {},
                a = i.getValueAtIndexOrDefault,
                s = e._model;
              s.backgroundColor = o.backgroundColor ? o.backgroundColor : a(n.backgroundColor, r, t.backgroundColor), s.borderColor = o.borderColor ? o.borderColor : a(n.borderColor, r, t.borderColor), s.borderWidth = o.borderWidth ? o.borderWidth : a(n.borderWidth, r, t.borderWidth)
            },
            setHoverStyle: function (e) {
              var t = this.chart.data.datasets[e._datasetIndex],
                n = e._index,
                r = e.custom || {},
                o = i.getValueAtIndexOrDefault,
                a = i.getHoverColor,
                s = e._model;
              s.backgroundColor = r.hoverBackgroundColor ? r.hoverBackgroundColor : o(t.hoverBackgroundColor, n, a(s.backgroundColor)), s.borderColor = r.hoverBorderColor ? r.hoverBorderColor : o(t.hoverBorderColor, n, a(s.borderColor)), s.borderWidth = r.hoverBorderWidth ? r.hoverBorderWidth : o(t.hoverBorderWidth, n, s.borderWidth)
            },
            resyncElements: function () {
              var e = this,
                t = e.getMeta(),
                n = e.getDataset().data,
                i = t.data.length,
                r = n.length;
              r < i ? t.data.splice(r, i - r) : r > i && e.insertElements(i, r - i)
            },
            insertElements: function (e, t) {
              for (var n = 0; n < t; ++n) this.addElementAndReset(e + n)
            },
            onDataPush: function () {
              this.insertElements(this.getDataset().data.length - 1, arguments.length)
            },
            onDataPop: function () {
              this.getMeta().data.pop()
            },
            onDataShift: function () {
              this.getMeta().data.shift()
            },
            onDataSplice: function (e, t) {
              this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2)
            },
            onDataUnshift: function () {
              this.insertElements(0, arguments.length)
            }
          }), e.DatasetController.extend = i.inherits
        }
      }, {}],
      25: [function (e, t, n) {
        "use strict";
        var i = e(3);
        t.exports = function (e) {
          function t(e, t, n, r) {
            var o, a, s, l, c, u, d, f, h, p = Object.keys(n);
            for (o = 0, a = p.length; o < a; ++o)
              if (s = p[o], u = n[s], t.hasOwnProperty(s) || (t[s] = u), (l = t[s]) !== u && "_" !== s[0]) {
                if (e.hasOwnProperty(s) || (e[s] = l), c = e[s], (d = typeof u) === typeof c)
                  if ("string" === d) {
                    if (f = i(c), f.valid && (h = i(u), h.valid)) {
                      t[s] = h.mix(f, r).rgbString();
                      continue
                    }
                  } else if ("number" === d && isFinite(c) && isFinite(u)) {
                  t[s] = c + (u - c) * r;
                  continue
                }
                t[s] = u
              }
          }
          var n = e.helpers;
          e.elements = {}, e.Element = function (e) {
            n.extend(this, e), this.initialize.apply(this, arguments)
          }, n.extend(e.Element.prototype, {
            initialize: function () {
              this.hidden = !1
            },
            pivot: function () {
              var e = this;
              return e._view || (e._view = n.clone(e._model)), e._start = {}, e
            },
            transition: function (e) {
              var n = this,
                i = n._model,
                r = n._start,
                o = n._view;
              return i && 1 !== e ? (o || (o = n._view = {}), r || (r = n._start = {}), t(r, o, i, e), n) : (n._view = i, n._start = null, n)
            },
            tooltipPosition: function () {
              return {
                x: this._model.x,
                y: this._model.y
              }
            },
            hasValue: function () {
              return n.isNumber(this._model.x) && n.isNumber(this._model.y)
            }
          }), e.Element.extend = n.inherits
        }
      }, {
        3: 3
      }],
      26: [function (e, t, n) {
        "use strict";
        var i = e(3);
        t.exports = function (e) {
          function t(e, t, n) {
            var i;
            return "string" == typeof e ? (i = parseInt(e, 10), e.indexOf("%") !== -1 && (i = i / 100 * t.parentNode[n])) : i = e, i
          }

          function n(e) {
            return void 0 !== e && null !== e && "none" !== e
          }

          function r(e, i, r) {
            var o = document.defaultView,
              a = e.parentNode,
              s = o.getComputedStyle(e)[i],
              l = o.getComputedStyle(a)[i],
              c = n(s),
              u = n(l),
              d = Number.POSITIVE_INFINITY;
            return c || u ? Math.min(c ? t(s, e, r) : d, u ? t(l, a, r) : d) : "none"
          }
          var o = e.helpers = {};
          o.each = function (e, t, n, i) {
            var r, a;
            if (o.isArray(e))
              if (a = e.length, i)
                for (r = a - 1; r >= 0; r--) t.call(n, e[r], r);
              else
                for (r = 0; r < a; r++) t.call(n, e[r], r);
            else if ("object" == typeof e) {
              var s = Object.keys(e);
              for (a = s.length, r = 0; r < a; r++) t.call(n, e[s[r]], s[r])
            }
          }, o.clone = function (e) {
            var t = {};
            return o.each(e, function (e, n) {
              o.isArray(e) ? t[n] = e.slice(0) : t[n] = "object" == typeof e && null !== e ? o.clone(e) : e
            }), t
          }, o.extend = function (e) {
            for (var t = function (t, n) {
                e[n] = t
              }, n = 1, i = arguments.length; n < i; n++) o.each(arguments[n], t);
            return e
          }, o.configMerge = function (t) {
            var n = o.clone(t);
            return o.each(Array.prototype.slice.call(arguments, 1), function (t) {
              o.each(t, function (t, i) {
                var r = n.hasOwnProperty(i),
                  a = r ? n[i] : {};
                "scales" === i ? n[i] = o.scaleMerge(a, t) : "scale" === i ? n[i] = o.configMerge(a, e.scaleService.getScaleDefaults(t.type), t) : !r || "object" != typeof a || o.isArray(a) || null === a || "object" != typeof t || o.isArray(t) ? n[i] = t : n[i] = o.configMerge(a, t)
              })
            }), n
          }, o.scaleMerge = function (t, n) {
            var i = o.clone(t);
            return o.each(n, function (t, n) {
              "xAxes" === n || "yAxes" === n ? i.hasOwnProperty(n) ? o.each(t, function (t, r) {
                var a = o.getValueOrDefault(t.type, "xAxes" === n ? "category" : "linear"),
                  s = e.scaleService.getScaleDefaults(a);
                r >= i[n].length || !i[n][r].type ? i[n].push(o.configMerge(s, t)) : t.type && t.type !== i[n][r].type ? i[n][r] = o.configMerge(i[n][r], s, t) : i[n][r] = o.configMerge(i[n][r], t)
              }) : (i[n] = [], o.each(t, function (t) {
                var r = o.getValueOrDefault(t.type, "xAxes" === n ? "category" : "linear");
                i[n].push(o.configMerge(e.scaleService.getScaleDefaults(r), t))
              })) : i.hasOwnProperty(n) && "object" == typeof i[n] && null !== i[n] && "object" == typeof t ? i[n] = o.configMerge(i[n], t) : i[n] = t
            }), i
          }, o.getValueAtIndexOrDefault = function (e, t, n) {
            return void 0 === e || null === e ? n : o.isArray(e) ? t < e.length ? e[t] : n : e
          }, o.getValueOrDefault = function (e, t) {
            return void 0 === e ? t : e
          }, o.indexOf = Array.prototype.indexOf ? function (e, t) {
            return e.indexOf(t)
          } : function (e, t) {
            for (var n = 0, i = e.length; n < i; ++n)
              if (e[n] === t) return n;
            return -1
          }, o.where = function (e, t) {
            if (o.isArray(e) && Array.prototype.filter) return e.filter(t);
            var n = [];
            return o.each(e, function (e) {
              t(e) && n.push(e)
            }), n
          }, o.findIndex = Array.prototype.findIndex ? function (e, t, n) {
            return e.findIndex(t, n)
          } : function (e, t, n) {
            n = void 0 === n ? e : n;
            for (var i = 0, r = e.length; i < r; ++i)
              if (t.call(n, e[i], i, e)) return i;
            return -1
          }, o.findNextWhere = function (e, t, n) {
            void 0 !== n && null !== n || (n = -1);
            for (var i = n + 1; i < e.length; i++) {
              var r = e[i];
              if (t(r)) return r
            }
          }, o.findPreviousWhere = function (e, t, n) {
            void 0 !== n && null !== n || (n = e.length);
            for (var i = n - 1; i >= 0; i--) {
              var r = e[i];
              if (t(r)) return r
            }
          }, o.inherits = function (e) {
            var t = this,
              n = e && e.hasOwnProperty("constructor") ? e.constructor : function () {
                return t.apply(this, arguments)
              },
              i = function () {
                this.constructor = n
              };
            return i.prototype = t.prototype, n.prototype = new i, n.extend = o.inherits, e && o.extend(n.prototype, e), n.__super__ = t.prototype, n
          }, o.noop = function () {}, o.uid = function () {
            var e = 0;
            return function () {
              return e++
            }
          }(), o.isNumber = function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
          }, o.almostEquals = function (e, t, n) {
            return Math.abs(e - t) < n
          }, o.almostWhole = function (e, t) {
            var n = Math.round(e);
            return n - t < e && n + t > e
          }, o.max = function (e) {
            return e.reduce(function (e, t) {
              return isNaN(t) ? e : Math.max(e, t)
            }, Number.NEGATIVE_INFINITY)
          }, o.min = function (e) {
            return e.reduce(function (e, t) {
              return isNaN(t) ? e : Math.min(e, t)
            }, Number.POSITIVE_INFINITY)
          }, o.sign = Math.sign ? function (e) {
            return Math.sign(e)
          } : function (e) {
            return e = +e, 0 === e || isNaN(e) ? e : e > 0 ? 1 : -1
          }, o.log10 = Math.log10 ? function (e) {
            return Math.log10(e)
          } : function (e) {
            return Math.log(e) / Math.LN10
          }, o.toRadians = function (e) {
            return e * (Math.PI / 180)
          }, o.toDegrees = function (e) {
            return e * (180 / Math.PI)
          }, o.getAngleFromPoint = function (e, t) {
            var n = t.x - e.x,
              i = t.y - e.y,
              r = Math.sqrt(n * n + i * i),
              o = Math.atan2(i, n);
            return o < -.5 * Math.PI && (o += 2 * Math.PI), {
              angle: o,
              distance: r
            }
          }, o.distanceBetweenPoints = function (e, t) {
            return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          }, o.aliasPixel = function (e) {
            return e % 2 == 0 ? 0 : .5
          }, o.splineCurve = function (e, t, n, i) {
            var r = e.skip ? t : e,
              o = t,
              a = n.skip ? t : n,
              s = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
              l = Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2)),
              c = s / (s + l),
              u = l / (s + l);
            c = isNaN(c) ? 0 : c, u = isNaN(u) ? 0 : u;
            var d = i * c,
              f = i * u;
            return {
              previous: {
                x: o.x - d * (a.x - r.x),
                y: o.y - d * (a.y - r.y)
              },
              next: {
                x: o.x + f * (a.x - r.x),
                y: o.y + f * (a.y - r.y)
              }
            }
          }, o.EPSILON = Number.EPSILON || 1e-14, o.splineCurveMonotone = function (e) {
            var t, n, i, r, a = (e || []).map(function (e) {
                return {
                  model: e._model,
                  deltaK: 0,
                  mK: 0
                }
              }),
              s = a.length;
            for (t = 0; t < s; ++t)
              if (i = a[t], !i.model.skip) {
                if (n = t > 0 ? a[t - 1] : null, (r = t < s - 1 ? a[t + 1] : null) && !r.model.skip) {
                  var l = r.model.x - i.model.x;
                  i.deltaK = 0 !== l ? (r.model.y - i.model.y) / l : 0
                }!n || n.model.skip ? i.mK = i.deltaK : !r || r.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2
              }
            var c, u, d, f;
            for (t = 0; t < s - 1; ++t) i = a[t], r = a[t + 1], i.model.skip || r.model.skip || (o.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = r.mK = 0 : (c = i.mK / i.deltaK, u = r.mK / i.deltaK, (f = Math.pow(c, 2) + Math.pow(u, 2)) <= 9 || (d = 3 / Math.sqrt(f), i.mK = c * d * i.deltaK, r.mK = u * d * i.deltaK)));
            var h;
            for (t = 0; t < s; ++t) i = a[t], i.model.skip || (n = t > 0 ? a[t - 1] : null, r = t < s - 1 ? a[t + 1] : null, n && !n.model.skip && (h = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - h, i.model.controlPointPreviousY = i.model.y - h * i.mK), r && !r.model.skip && (h = (r.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + h, i.model.controlPointNextY = i.model.y + h * i.mK))
          }, o.nextItem = function (e, t, n) {
            return n ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1]
          }, o.previousItem = function (e, t, n) {
            return n ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1]
          }, o.niceNum = function (e, t) {
            var n = Math.floor(o.log10(e)),
              i = e / Math.pow(10, n);
            return (t ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n)
          };
          var a = o.easingEffects = {
            linear: function (e) {
              return e
            },
            easeInQuad: function (e) {
              return e * e
            },
            easeOutQuad: function (e) {
              return -1 * e * (e - 2)
            },
            easeInOutQuad: function (e) {
              return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
            },
            easeInCubic: function (e) {
              return e * e * e
            },
            easeOutCubic: function (e) {
              return 1 * ((e = e / 1 - 1) * e * e + 1)
            },
            easeInOutCubic: function (e) {
              return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
            },
            easeInQuart: function (e) {
              return e * e * e * e
            },
            easeOutQuart: function (e) {
              return -1 * ((e = e / 1 - 1) * e * e * e - 1)
            },
            easeInOutQuart: function (e) {
              return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
            },
            easeInQuint: function (e) {
              return 1 * (e /= 1) * e * e * e * e
            },
            easeOutQuint: function (e) {
              return 1 * ((e = e / 1 - 1) * e * e * e * e + 1)
            },
            easeInOutQuint: function (e) {
              return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
            },
            easeInSine: function (e) {
              return -1 * Math.cos(e / 1 * (Math.PI / 2)) + 1
            },
            easeOutSine: function (e) {
              return 1 * Math.sin(e / 1 * (Math.PI / 2))
            },
            easeInOutSine: function (e) {
              return -.5 * (Math.cos(Math.PI * e / 1) - 1)
            },
            easeInExpo: function (e) {
              return 0 === e ? 1 : 1 * Math.pow(2, 10 * (e / 1 - 1))
            },
            easeOutExpo: function (e) {
              return 1 === e ? 1 : 1 * (1 - Math.pow(2, -10 * e / 1))
            },
            easeInOutExpo: function (e) {
              return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e))
            },
            easeInCirc: function (e) {
              return e >= 1 ? e : -1 * (Math.sqrt(1 - (e /= 1) * e) - 1)
            },
            easeOutCirc: function (e) {
              return 1 * Math.sqrt(1 - (e = e / 1 - 1) * e)
            },
            easeInOutCirc: function (e) {
              return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            },
            easeInElastic: function (e) {
              var t = 1.70158,
                n = 0,
                i = 1;
              return 0 === e ? 0 : 1 == (e /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (e -= 1)) * Math.sin((1 * e - t) * (2 * Math.PI) / n)))
            },
            easeOutElastic: function (e) {
              var t = 1.70158,
                n = 0,
                i = 1;
              return 0 === e ? 0 : 1 == (e /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * e) * Math.sin((1 * e - t) * (2 * Math.PI) / n) + 1)
            },
            easeInOutElastic: function (e) {
              var t = 1.70158,
                n = 0,
                i = 1;
              return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .3 * 1.5 * 1), i < Math.abs(1) ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), e < 1 ? -.5 * (i * Math.pow(2, 10 * (e -= 1)) * Math.sin((1 * e - t) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (e -= 1)) * Math.sin((1 * e - t) * (2 * Math.PI) / n) * .5 + 1)
            },
            easeInBack: function (e) {
              var t = 1.70158;
              return 1 * (e /= 1) * e * ((t + 1) * e - t)
            },
            easeOutBack: function (e) {
              var t = 1.70158;
              return 1 * ((e = e / 1 - 1) * e * ((t + 1) * e + t) + 1)
            },
            easeInOutBack: function (e) {
              var t = 1.70158;
              return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
            },
            easeInBounce: function (e) {
              return 1 - a.easeOutBounce(1 - e)
            },
            easeOutBounce: function (e) {
              return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e * 1 : e < 2 / 2.75 ? 1 * (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 * (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            },
            easeInOutBounce: function (e) {
              return e < .5 ? .5 * a.easeInBounce(2 * e) : .5 * a.easeOutBounce(2 * e - 1) + .5
            }
          };
          o.requestAnimFrame = function () {
            return "undefined" == typeof window ? function (e) {
              e()
            } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
              return window.setTimeout(e, 1e3 / 60)
            }
          }(), o.getRelativePosition = function (e, t) {
            var n, i, r = e.originalEvent || e,
              a = e.currentTarget || e.srcElement,
              s = a.getBoundingClientRect(),
              l = r.touches;
            l && l.length > 0 ? (n = l[0].clientX, i = l[0].clientY) : (n = r.clientX, i = r.clientY);
            var c = parseFloat(o.getStyle(a, "padding-left")),
              u = parseFloat(o.getStyle(a, "padding-top")),
              d = parseFloat(o.getStyle(a, "padding-right")),
              f = parseFloat(o.getStyle(a, "padding-bottom")),
              h = s.right - s.left - c - d,
              p = s.bottom - s.top - u - f;
            return n = Math.round((n - s.left - c) / h * a.width / t.currentDevicePixelRatio), i = Math.round((i - s.top - u) / p * a.height / t.currentDevicePixelRatio), {
              x: n,
              y: i
            }
          }, o.addEvent = function (e, t, n) {
            e.addEventListener ? e.addEventListener(t, n) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
          }, o.removeEvent = function (e, t, n) {
            e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = o.noop
          }, o.getConstraintWidth = function (e) {
            return r(e, "max-width", "clientWidth")
          }, o.getConstraintHeight = function (e) {
            return r(e, "max-height", "clientHeight")
          }, o.getMaximumWidth = function (e) {
            var t = e.parentNode,
              n = parseInt(o.getStyle(t, "padding-left"), 10),
              i = parseInt(o.getStyle(t, "padding-right"), 10),
              r = t.clientWidth - n - i,
              a = o.getConstraintWidth(e);
            return isNaN(a) ? r : Math.min(r, a)
          }, o.getMaximumHeight = function (e) {
            var t = e.parentNode,
              n = parseInt(o.getStyle(t, "padding-top"), 10),
              i = parseInt(o.getStyle(t, "padding-bottom"), 10),
              r = t.clientHeight - n - i,
              a = o.getConstraintHeight(e);
            return isNaN(a) ? r : Math.min(r, a)
          }, o.getStyle = function (e, t) {
            return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t)
          }, o.retinaScale = function (e) {
            var t = e.currentDevicePixelRatio = window.devicePixelRatio || 1;
            if (1 !== t) {
              var n = e.canvas,
                i = e.height,
                r = e.width;
              n.height = i * t, n.width = r * t, e.ctx.scale(t, t), n.style.height = i + "px", n.style.width = r + "px"
            }
          }, o.clear = function (e) {
            e.ctx.clearRect(0, 0, e.width, e.height)
          }, o.fontString = function (e, t, n) {
            return t + " " + e + "px " + n
          }, o.longestText = function (e, t, n, i) {
            i = i || {};
            var r = i.data = i.data || {},
              a = i.garbageCollect = i.garbageCollect || [];
            i.font !== t && (r = i.data = {}, a = i.garbageCollect = [], i.font = t), e.font = t;
            var s = 0;
            o.each(n, function (t) {
              void 0 !== t && null !== t && o.isArray(t) !== !0 ? s = o.measureText(e, r, a, s, t) : o.isArray(t) && o.each(t, function (t) {
                void 0 === t || null === t || o.isArray(t) || (s = o.measureText(e, r, a, s, t))
              })
            });
            var l = a.length / 2;
            if (l > n.length) {
              for (var c = 0; c < l; c++) delete r[a[c]];
              a.splice(0, l)
            }
            return s
          }, o.measureText = function (e, t, n, i, r) {
            var o = t[r];
            return o || (o = t[r] = e.measureText(r).width, n.push(r)), o > i && (i = o), i
          }, o.numberOfLabelLines = function (e) {
            var t = 1;
            return o.each(e, function (e) {
              o.isArray(e) && e.length > t && (t = e.length)
            }), t
          }, o.drawRoundedRectangle = function (e, t, n, i, r, o) {
            e.beginPath(), e.moveTo(t + o, n), e.lineTo(t + i - o, n), e.quadraticCurveTo(t + i, n, t + i, n + o), e.lineTo(t + i, n + r - o), e.quadraticCurveTo(t + i, n + r, t + i - o, n + r), e.lineTo(t + o, n + r), e.quadraticCurveTo(t, n + r, t, n + r - o), e.lineTo(t, n + o), e.quadraticCurveTo(t, n, t + o, n), e.closePath()
          }, o.color = i ? function (t) {
            return t instanceof CanvasGradient && (t = e.defaults.global.defaultColor), i(t)
          } : function (e) {
            return console.error("Color.js not found!"), e
          }, o.isArray = Array.isArray ? function (e) {
            return Array.isArray(e)
          } : function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
          }, o.arrayEquals = function (e, t) {
            var n, i, r, a;
            if (!e || !t || e.length !== t.length) return !1;
            for (n = 0, i = e.length; n < i; ++n)
              if (r = e[n], a = t[n], r instanceof Array && a instanceof Array) {
                if (!o.arrayEquals(r, a)) return !1
              } else if (r !== a) return !1;
            return !0
          }, o.callback = function (e, t, n) {
            e && "function" == typeof e.call && e.apply(n, t)
          }, o.getHoverColor = function (e) {
            return e instanceof CanvasPattern ? e : o.color(e).saturate(.5).darken(.1).rgbString()
          }, o.callCallback = o.callback
        }
      }, {
        3: 3
      }],
      27: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          function t(e, t) {
            return e.native ? {
              x: e.x,
              y: e.y
            } : a.getRelativePosition(e, t)
          }

          function n(e, t) {
            var n, i, r, o, a, s = e.data.datasets;
            for (i = 0, o = s.length; i < o; ++i)
              if (e.isDatasetVisible(i))
                for (n = e.getDatasetMeta(i), r = 0, a = n.data.length; r < a; ++r) {
                  var l = n.data[r];
                  l._view.skip || t(l)
                }
          }

          function i(e, t) {
            var i = [];
            return n(e, function (e) {
              e.inRange(t.x, t.y) && i.push(e)
            }), i
          }

          function r(e, t, i, r) {
            var o = Number.POSITIVE_INFINITY,
              s = [];
            return r || (r = a.distanceBetweenPoints), n(e, function (e) {
              if (!i || e.inRange(t.x, t.y)) {
                var n = e.getCenterPoint(),
                  a = r(t, n);
                a < o ? (s = [e], o = a) : a === o && s.push(e)
              }
            }), s
          }

          function o(e, n, o) {
            var a = t(n, e),
              s = function (e, t) {
                return Math.abs(e.x - t.x)
              },
              l = o.intersect ? i(e, a) : r(e, a, !1, s),
              c = [];
            return l.length ? (e.data.datasets.forEach(function (t, n) {
              if (e.isDatasetVisible(n)) {
                var i = e.getDatasetMeta(n),
                  r = i.data[l[0]._index];
                r && !r._view.skip && c.push(r)
              }
            }), c) : []
          }
          var a = e.helpers;
          e.Interaction = {
            modes: {
              single: function (e, i) {
                var r = t(i, e),
                  o = [];
                return n(e, function (e) {
                  if (e.inRange(r.x, r.y)) return o.push(e), o
                }), o.slice(0, 1)
              },
              label: o,
              index: o,
              dataset: function (e, n, o) {
                var a = t(n, e),
                  s = o.intersect ? i(e, a) : r(e, a, !1);
                return s.length > 0 && (s = e.getDatasetMeta(s[0]._datasetIndex).data), s
              },
              "x-axis": function (e, t) {
                return o(e, t, !0)
              },
              point: function (e, n) {
                return i(e, t(n, e))
              },
              nearest: function (e, n, i) {
                var o = t(n, e),
                  a = r(e, o, i.intersect);
                return a.length > 1 && a.sort(function (e, t) {
                  var n = e.getArea(),
                    i = t.getArea(),
                    r = n - i;
                  return 0 === r && (r = e._datasetIndex - t._datasetIndex), r
                }), a.slice(0, 1)
              },
              x: function (e, i, r) {
                var o = t(i, e),
                  a = [],
                  s = !1;
                return n(e, function (e) {
                  e.inXRange(o.x) && a.push(e), e.inRange(o.x, o.y) && (s = !0)
                }), r.intersect && !s && (a = []), a
              },
              y: function (e, i, r) {
                var o = t(i, e),
                  a = [],
                  s = !1;
                return n(e, function (e) {
                  e.inYRange(o.y) && a.push(e), e.inRange(o.x, o.y) && (s = !0)
                }), r.intersect && !s && (a = []), a
              }
            }
          }
        }
      }, {}],
      28: [function (e, t, n) {
        "use strict";
        t.exports = function () {
          var e = function (e, t) {
            return this.construct(e, t), this
          };
          return e.defaults = {
            global: {
              responsive: !0,
              responsiveAnimationDuration: 0,
              maintainAspectRatio: !0,
              events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
              hover: {
                onHover: null,
                mode: "nearest",
                intersect: !0,
                animationDuration: 400
              },
              onClick: null,
              defaultColor: "rgba(0,0,0,0.1)",
              defaultFontColor: "#666",
              defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              defaultFontSize: 12,
              defaultFontStyle: "normal",
              showLines: !0,
              elements: {},
              legendCallback: function (e) {
                var t = [];
                t.push('<ul class="' + e.id + '-legend">');
                for (var n = 0; n < e.data.datasets.length; n++) t.push('<li><span style="background-color:' + e.data.datasets[n].backgroundColor + '"></span>'), e.data.datasets[n].label && t.push(e.data.datasets[n].label), t.push("</li>");
                return t.push("</ul>"), t.join("")
              }
            }
          }, e.Chart = e, e
        }
      }, {}],
      29: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          function t(e, t) {
            return i.where(e, function (e) {
              return e.position === t
            })
          }

          function n(e, t) {
            e.forEach(function (e, t) {
              return e._tmpIndex_ = t, e
            }), e.sort(function (e, n) {
              var i = t ? n : e,
                r = t ? e : n;
              return i.weight === r.weight ? i._tmpIndex_ - r._tmpIndex_ : i.weight - r.weight
            }), e.forEach(function (e) {
              delete e._tmpIndex_
            })
          }
          var i = e.helpers;
          e.layoutService = {
            defaults: {},
            addBox: function (e, t) {
              e.boxes || (e.boxes = []), t.fullWidth = t.fullWidth || !1, t.position = t.position || "top", t.weight = t.weight || 0, e.boxes.push(t)
            },
            removeBox: function (e, t) {
              var n = e.boxes ? e.boxes.indexOf(t) : -1;
              n !== -1 && e.boxes.splice(n, 1)
            },
            configure: function (e, t, n) {
              for (var i, r = ["fullWidth", "position", "weight"], o = r.length, a = 0; a < o; ++a) i = r[a], n.hasOwnProperty(i) && (t[i] = n[i])
            },
            update: function (e, r, o) {
              function a(e) {
                var t, n = e.isHorizontal();
                n ? (t = e.update(e.fullWidth ? w : E, S), A -= t.height) : (t = e.update(_, k), E -= t.width), I.push({
                  horizontal: n,
                  minSize: t,
                  box: e
                })
              }

              function s(e) {
                var t = i.findNextWhere(I, function (t) {
                  return t.box === e
                });
                if (t)
                  if (e.isHorizontal()) {
                    var n = {
                      left: Math.max(L, D),
                      right: Math.max(N, O),
                      top: 0,
                      bottom: 0
                    };
                    e.update(e.fullWidth ? w : E, C / 2, n)
                  } else e.update(t.minSize.width, A)
              }

              function l(e) {
                var t = i.findNextWhere(I, function (t) {
                    return t.box === e
                  }),
                  n = {
                    left: 0,
                    right: 0,
                    top: F,
                    bottom: R
                  };
                t && e.update(t.minSize.width, A, n)
              }

              function c(e) {
                e.isHorizontal() ? (e.left = e.fullWidth ? f : L, e.right = e.fullWidth ? r - h : L + E, e.top = z, e.bottom = z + e.height, z = e.bottom) : (e.left = B, e.right = B + e.width, e.top = F, e.bottom = F + A, B = e.right)
              }
              if (e) {
                var u = e.options.layout,
                  d = u ? u.padding : null,
                  f = 0,
                  h = 0,
                  p = 0,
                  m = 0;
                isNaN(d) ? (f = d.left || 0, h = d.right || 0, p = d.top || 0, m = d.bottom || 0) : (f = d, h = d, p = d, m = d);
                var g = t(e.boxes, "left"),
                  v = t(e.boxes, "right"),
                  y = t(e.boxes, "top"),
                  b = t(e.boxes, "bottom"),
                  x = t(e.boxes, "chartArea");
                n(g, !0), n(v, !1), n(y, !0), n(b, !1);
                var w = r - f - h,
                  C = o - p - m,
                  T = w / 2,
                  k = C / 2,
                  _ = (r - T) / (g.length + v.length),
                  S = (o - k) / (y.length + b.length),
                  E = w,
                  A = C,
                  I = [];
                i.each(g.concat(v, y, b), a);
                var D = 0,
                  O = 0,
                  P = 0,
                  M = 0;
                i.each(y.concat(b), function (e) {
                  if (e.getPadding) {
                    var t = e.getPadding();
                    D = Math.max(D, t.left), O = Math.max(O, t.right)
                  }
                }), i.each(g.concat(v), function (e) {
                  if (e.getPadding) {
                    var t = e.getPadding();
                    P = Math.max(P, t.top), M = Math.max(M, t.bottom)
                  }
                });
                var L = f,
                  N = h,
                  F = p,
                  R = m;
                i.each(g.concat(v), s), i.each(g, function (e) {
                  L += e.width
                }), i.each(v, function (e) {
                  N += e.width
                }), i.each(y.concat(b), s), i.each(y, function (e) {
                  F += e.height
                }), i.each(b, function (e) {
                  R += e.height
                }), i.each(g.concat(v), l), L = f, N = h, F = p, R = m, i.each(g, function (e) {
                  L += e.width
                }), i.each(v, function (e) {
                  N += e.width
                }), i.each(y, function (e) {
                  F += e.height
                }), i.each(b, function (e) {
                  R += e.height
                });
                var W = Math.max(D - L, 0);
                L += W, N += Math.max(O - N, 0);
                var H = Math.max(P - F, 0);
                F += H, R += Math.max(M - R, 0);
                var V = o - F - R,
                  j = r - L - N;
                j === E && V === A || (i.each(g, function (e) {
                  e.height = V
                }), i.each(v, function (e) {
                  e.height = V
                }), i.each(y, function (e) {
                  e.fullWidth || (e.width = j)
                }), i.each(b, function (e) {
                  e.fullWidth || (e.width = j)
                }), A = V, E = j);
                var B = f + W,
                  z = p + H;
                i.each(g.concat(y), c), B += E, z += A, i.each(v, c), i.each(b, c), e.chartArea = {
                  left: L,
                  top: F,
                  right: L + E,
                  bottom: F + A
                }, i.each(x, function (t) {
                  t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(E, A)
                })
              }
            }
          }
        }
      }, {}],
      30: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          var t = e.helpers;
          e.defaults.global.plugins = {}, e.plugins = {
            _plugins: [],
            _cacheId: 0,
            register: function (e) {
              var t = this._plugins;
              [].concat(e).forEach(function (e) {
                t.indexOf(e) === -1 && t.push(e)
              }), this._cacheId++
            },
            unregister: function (e) {
              var t = this._plugins;
              [].concat(e).forEach(function (e) {
                var n = t.indexOf(e);
                n !== -1 && t.splice(n, 1)
              }), this._cacheId++
            },
            clear: function () {
              this._plugins = [], this._cacheId++
            },
            count: function () {
              return this._plugins.length
            },
            getAll: function () {
              return this._plugins
            },
            notify: function (e, t, n) {
              var i, r, o, a, s, l = this.descriptors(e),
                c = l.length;
              for (i = 0; i < c; ++i)
                if (r = l[i], o = r.plugin, "function" == typeof (s = o[t]) && (a = [e].concat(n || []), a.push(r.options), s.apply(o, a) === !1)) return !1;
              return !0
            },
            descriptors: function (n) {
              var i = n._plugins || (n._plugins = {});
              if (i.id === this._cacheId) return i.descriptors;
              var r = [],
                o = [],
                a = n && n.config || {},
                s = e.defaults.global.plugins,
                l = a.options && a.options.plugins || {};
              return this._plugins.concat(a.plugins || []).forEach(function (e) {
                if (r.indexOf(e) === -1) {
                  var n = e.id,
                    i = l[n];
                  i !== !1 && (i === !0 && (i = t.clone(s[n])), r.push(e), o.push({
                    plugin: e,
                    options: i || {}
                  }))
                }
              }), i.descriptors = o, i.id = this._cacheId, o
            }
          }, e.pluginService = e.plugins, e.PluginBase = e.Element.extend({})
        }
      }, {}],
      31: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          function t(e, t, n) {
            return i.isArray(t) ? i.longestText(e, n, t) : e.measureText(t).width
          }

          function n(t) {
            var n = i.getValueOrDefault,
              r = e.defaults.global,
              o = n(t.fontSize, r.defaultFontSize),
              a = n(t.fontStyle, r.defaultFontStyle),
              s = n(t.fontFamily, r.defaultFontFamily);
            return {
              size: o,
              style: a,
              family: s,
              font: i.fontString(o, a, s)
            }
          }
          var i = e.helpers;
          e.defaults.scale = {
            display: !0,
            position: "left",
            gridLines: {
              display: !0,
              color: "rgba(0, 0, 0, 0.1)",
              lineWidth: 1,
              drawBorder: !0,
              drawOnChartArea: !0,
              drawTicks: !0,
              tickMarkLength: 10,
              zeroLineWidth: 1,
              zeroLineColor: "rgba(0,0,0,0.25)",
              zeroLineBorderDash: [],
              zeroLineBorderDashOffset: 0,
              offsetGridLines: !1,
              borderDash: [],
              borderDashOffset: 0
            },
            scaleLabel: {
              labelString: "",
              display: !1
            },
            ticks: {
              beginAtZero: !1,
              minRotation: 0,
              maxRotation: 50,
              mirror: !1,
              padding: 0,
              reverse: !1,
              display: !0,
              autoSkip: !0,
              autoSkipPadding: 0,
              labelOffset: 0,
              callback: e.Ticks.formatters.values
            }
          }, e.Scale = e.Element.extend({
            getPadding: function () {
              var e = this;
              return {
                left: e.paddingLeft || 0,
                top: e.paddingTop || 0,
                right: e.paddingRight || 0,
                bottom: e.paddingBottom || 0
              }
            },
            beforeUpdate: function () {
              i.callback(this.options.beforeUpdate, [this])
            },
            update: function (e, t, n) {
              var r = this;
              return r.beforeUpdate(), r.maxWidth = e, r.maxHeight = t, r.margins = i.extend({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
              }, n), r.longestTextCache = r.longestTextCache || {}, r.beforeSetDimensions(), r.setDimensions(), r.afterSetDimensions(), r.beforeDataLimits(), r.determineDataLimits(), r.afterDataLimits(), r.beforeBuildTicks(), r.buildTicks(), r.afterBuildTicks(), r.beforeTickToLabelConversion(), r.convertTicksToLabels(), r.afterTickToLabelConversion(), r.beforeCalculateTickRotation(), r.calculateTickRotation(), r.afterCalculateTickRotation(), r.beforeFit(), r.fit(), r.afterFit(), r.afterUpdate(), r.minSize
            },
            afterUpdate: function () {
              i.callback(this.options.afterUpdate, [this])
            },
            beforeSetDimensions: function () {
              i.callback(this.options.beforeSetDimensions, [this])
            },
            setDimensions: function () {
              var e = this;
              e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0
            },
            afterSetDimensions: function () {
              i.callback(this.options.afterSetDimensions, [this])
            },
            beforeDataLimits: function () {
              i.callback(this.options.beforeDataLimits, [this])
            },
            determineDataLimits: i.noop,
            afterDataLimits: function () {
              i.callback(this.options.afterDataLimits, [this])
            },
            beforeBuildTicks: function () {
              i.callback(this.options.beforeBuildTicks, [this])
            },
            buildTicks: i.noop,
            afterBuildTicks: function () {
              i.callback(this.options.afterBuildTicks, [this])
            },
            beforeTickToLabelConversion: function () {
              i.callback(this.options.beforeTickToLabelConversion, [this])
            },
            convertTicksToLabels: function () {
              var e = this,
                t = e.options.ticks;
              e.ticks = e.ticks.map(t.userCallback || t.callback)
            },
            afterTickToLabelConversion: function () {
              i.callback(this.options.afterTickToLabelConversion, [this])
            },
            beforeCalculateTickRotation: function () {
              i.callback(this.options.beforeCalculateTickRotation, [this])
            },
            calculateTickRotation: function () {
              var e = this,
                t = e.ctx,
                r = e.options.ticks,
                o = n(r);
              t.font = o.font;
              var a = r.minRotation || 0;
              if (e.options.display && e.isHorizontal())
                for (var s, l = i.longestText(t, o.font, e.ticks, e.longestTextCache), c = l, u = e.getPixelForTick(1) - e.getPixelForTick(0) - 6; c > u && a < r.maxRotation;) {
                  var d = i.toRadians(a);
                  if (s = Math.cos(d), Math.sin(d) * l > e.maxHeight) {
                    a--;
                    break
                  }
                  a++, c = s * l
                }
              e.labelRotation = a
            },
            afterCalculateTickRotation: function () {
              i.callback(this.options.afterCalculateTickRotation, [this])
            },
            beforeFit: function () {
              i.callback(this.options.beforeFit, [this])
            },
            fit: function () {
              var e = this,
                r = e.minSize = {
                  width: 0,
                  height: 0
                },
                o = e.options,
                a = o.ticks,
                s = o.scaleLabel,
                l = o.gridLines,
                c = o.display,
                u = e.isHorizontal(),
                d = n(a),
                f = 1.5 * n(s).size,
                h = o.gridLines.tickMarkLength;
              if (r.width = u ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : c && l.drawTicks ? h : 0, r.height = u ? c && l.drawTicks ? h : 0 : e.maxHeight, s.display && c && (u ? r.height += f : r.width += f), a.display && c) {
                var p = i.longestText(e.ctx, d.font, e.ticks, e.longestTextCache),
                  m = i.numberOfLabelLines(e.ticks),
                  g = .5 * d.size;
                if (u) {
                  e.longestLabelWidth = p;
                  var v = i.toRadians(e.labelRotation),
                    y = Math.cos(v),
                    b = Math.sin(v),
                    x = b * p + d.size * m + g * m;
                  r.height = Math.min(e.maxHeight, r.height + x), e.ctx.font = d.font;
                  var w = e.ticks[0],
                    C = t(e.ctx, w, d.font),
                    T = e.ticks[e.ticks.length - 1],
                    k = t(e.ctx, T, d.font);
                  0 !== e.labelRotation ? (e.paddingLeft = "bottom" === o.position ? y * C + 3 : y * g + 3, e.paddingRight = "bottom" === o.position ? y * g + 3 : y * k + 3) : (e.paddingLeft = C / 2 + 3, e.paddingRight = k / 2 + 3)
                } else a.mirror ? p = 0 : p += e.options.ticks.padding, r.width = Math.min(e.maxWidth, r.width + p), e.paddingTop = d.size / 2, e.paddingBottom = d.size / 2
              }
              e.handleMargins(), e.width = r.width, e.height = r.height
            },
            handleMargins: function () {
              var e = this;
              e.margins && (e.paddingLeft = Math.max(e.paddingLeft - e.margins.left, 0), e.paddingTop = Math.max(e.paddingTop - e.margins.top, 0), e.paddingRight = Math.max(e.paddingRight - e.margins.right, 0), e.paddingBottom = Math.max(e.paddingBottom - e.margins.bottom, 0))
            },
            afterFit: function () {
              i.callback(this.options.afterFit, [this])
            },
            isHorizontal: function () {
              return "top" === this.options.position || "bottom" === this.options.position
            },
            isFullWidth: function () {
              return this.options.fullWidth
            },
            getRightValue: function (e) {
              return null === e || void 0 === e ? NaN : "number" != typeof e || isFinite(e) ? "object" == typeof e ? e instanceof Date || e.isValid ? e : this.getRightValue(this.isHorizontal() ? e.x : e.y) : e : NaN
            },
            getLabelForIndex: i.noop,
            getPixelForValue: i.noop,
            getValueForPixel: i.noop,
            getPixelForTick: function (e, t) {
              var n = this;
              if (n.isHorizontal()) {
                var i = n.width - (n.paddingLeft + n.paddingRight),
                  r = i / Math.max(n.ticks.length - (n.options.gridLines.offsetGridLines ? 0 : 1), 1),
                  o = r * e + n.paddingLeft;
                t && (o += r / 2);
                var a = n.left + Math.round(o);
                return a += n.isFullWidth() ? n.margins.left : 0
              }
              var s = n.height - (n.paddingTop + n.paddingBottom);
              return n.top + e * (s / (n.ticks.length - 1))
            },
            getPixelForDecimal: function (e) {
              var t = this;
              if (t.isHorizontal()) {
                var n = t.width - (t.paddingLeft + t.paddingRight),
                  i = n * e + t.paddingLeft,
                  r = t.left + Math.round(i);
                return r += t.isFullWidth() ? t.margins.left : 0
              }
              return t.top + e * t.height
            },
            getBasePixel: function () {
              return this.getPixelForValue(this.getBaseValue())
            },
            getBaseValue: function () {
              var e = this,
                t = e.min,
                n = e.max;
              return e.beginAtZero ? 0 : t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0
            },
            draw: function (t) {
              var r = this,
                o = r.options;
              if (o.display) {
                var a, s, l = r.ctx,
                  c = e.defaults.global,
                  u = o.ticks,
                  d = o.gridLines,
                  f = o.scaleLabel,
                  h = 0 !== r.labelRotation,
                  p = u.autoSkip,
                  m = r.isHorizontal();
                u.maxTicksLimit && (s = u.maxTicksLimit);
                var g = i.getValueOrDefault(u.fontColor, c.defaultFontColor),
                  v = n(u),
                  y = d.drawTicks ? d.tickMarkLength : 0,
                  b = i.getValueOrDefault(f.fontColor, c.defaultFontColor),
                  x = n(f),
                  w = i.toRadians(r.labelRotation),
                  C = Math.cos(w),
                  T = r.longestLabelWidth * C;
                l.fillStyle = g;
                var k = [];
                if (m) {
                  if (a = !1, (T + u.autoSkipPadding) * r.ticks.length > r.width - (r.paddingLeft + r.paddingRight) && (a = 1 + Math.floor((T + u.autoSkipPadding) * r.ticks.length / (r.width - (r.paddingLeft + r.paddingRight)))), s && r.ticks.length > s)
                    for (; !a || r.ticks.length / (a || 1) > s;) a || (a = 1), a += 1;
                  p || (a = !1)
                }
                var _ = "right" === o.position ? r.left : r.right - y,
                  S = "right" === o.position ? r.left + y : r.right,
                  E = "bottom" === o.position ? r.top : r.bottom - y,
                  A = "bottom" === o.position ? r.top + y : r.bottom;
                if (i.each(r.ticks, function (e, n) {
                    if (void 0 !== e && null !== e) {
                      var s = r.ticks.length === n + 1;
                      if ((!(a > 1 && n % a > 0 || n % a == 0 && n + a >= r.ticks.length) || s) && void 0 !== e && null !== e) {
                        var l, f, p, g;
                        n === (void 0 !== r.zeroLineIndex ? r.zeroLineIndex : 0) ? (l = d.zeroLineWidth, f = d.zeroLineColor, p = d.zeroLineBorderDash, g = d.zeroLineBorderDashOffset) : (l = i.getValueAtIndexOrDefault(d.lineWidth, n), f = i.getValueAtIndexOrDefault(d.color, n), p = i.getValueOrDefault(d.borderDash, c.borderDash), g = i.getValueOrDefault(d.borderDashOffset, c.borderDashOffset));
                        var v, b, x, C, T, I, D, O, P, M, L = "middle",
                          N = "middle";
                        if (m) {
                          "bottom" === o.position ? (N = h ? "middle" : "top", L = h ? "right" : "center", M = r.top + y) : (N = h ? "middle" : "bottom", L = h ? "left" : "center", M = r.bottom - y);
                          var F = r.getPixelForTick(n) + i.aliasPixel(l);
                          P = r.getPixelForTick(n, d.offsetGridLines) + u.labelOffset, v = x = T = D = F, b = E, C = A, I = t.top, O = t.bottom
                        } else {
                          var R, W = "left" === o.position,
                            H = u.padding;
                          u.mirror ? (L = W ? "left" : "right", R = H) : (L = W ? "right" : "left", R = y + H), P = W ? r.right - R : r.left + R;
                          var V = r.getPixelForTick(n);
                          V += i.aliasPixel(l), M = r.getPixelForTick(n, d.offsetGridLines), v = _, x = S, T = t.left, D = t.right, b = C = I = O = V
                        }
                        k.push({
                          tx1: v,
                          ty1: b,
                          tx2: x,
                          ty2: C,
                          x1: T,
                          y1: I,
                          x2: D,
                          y2: O,
                          labelX: P,
                          labelY: M,
                          glWidth: l,
                          glColor: f,
                          glBorderDash: p,
                          glBorderDashOffset: g,
                          rotation: -1 * w,
                          label: e,
                          textBaseline: N,
                          textAlign: L
                        })
                      }
                    }
                  }), i.each(k, function (e) {
                    if (d.display && (l.save(), l.lineWidth = e.glWidth, l.strokeStyle = e.glColor, l.setLineDash && (l.setLineDash(e.glBorderDash), l.lineDashOffset = e.glBorderDashOffset), l.beginPath(), d.drawTicks && (l.moveTo(e.tx1, e.ty1), l.lineTo(e.tx2, e.ty2)), d.drawOnChartArea && (l.moveTo(e.x1, e.y1), l.lineTo(e.x2, e.y2)), l.stroke(), l.restore()), u.display) {
                      l.save(), l.translate(e.labelX, e.labelY), l.rotate(e.rotation), l.font = v.font, l.textBaseline = e.textBaseline, l.textAlign = e.textAlign;
                      var t = e.label;
                      if (i.isArray(t))
                        for (var n = 0, r = 0; n < t.length; ++n) l.fillText("" + t[n], 0, r), r += 1.5 * v.size;
                      else l.fillText(t, 0, 0);
                      l.restore()
                    }
                  }), f.display) {
                  var I, D, O = 0;
                  if (m) I = r.left + (r.right - r.left) / 2, D = "bottom" === o.position ? r.bottom - x.size / 2 : r.top + x.size / 2;
                  else {
                    var P = "left" === o.position;
                    I = P ? r.left + x.size / 2 : r.right - x.size / 2, D = r.top + (r.bottom - r.top) / 2, O = P ? -.5 * Math.PI : .5 * Math.PI
                  }
                  l.save(), l.translate(I, D), l.rotate(O), l.textAlign = "center", l.textBaseline = "middle", l.fillStyle = b, l.font = x.font, l.fillText(f.labelString, 0, 0), l.restore()
                }
                if (d.drawBorder) {
                  l.lineWidth = i.getValueAtIndexOrDefault(d.lineWidth, 0), l.strokeStyle = i.getValueAtIndexOrDefault(d.color, 0);
                  var M = r.left,
                    L = r.right,
                    N = r.top,
                    F = r.bottom,
                    R = i.aliasPixel(l.lineWidth);
                  m ? (N = F = "top" === o.position ? r.bottom : r.top, N += R, F += R) : (M = L = "left" === o.position ? r.right : r.left, M += R, L += R), l.beginPath(), l.moveTo(M, N), l.lineTo(L, F), l.stroke()
                }
              }
            }
          })
        }
      }, {}],
      32: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          var t = e.helpers;
          e.scaleService = {
            constructors: {},
            defaults: {},
            registerScaleType: function (e, n, i) {
              this.constructors[e] = n, this.defaults[e] = t.clone(i)
            },
            getScaleConstructor: function (e) {
              return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0
            },
            getScaleDefaults: function (n) {
              return this.defaults.hasOwnProperty(n) ? t.scaleMerge(e.defaults.scale, this.defaults[n]) : {}
            },
            updateScaleDefaults: function (e, n) {
              var i = this.defaults;
              i.hasOwnProperty(e) && (i[e] = t.extend(i[e], n))
            },
            addScalesToLayout: function (n) {
              t.each(n.scales, function (t) {
                t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, e.layoutService.addBox(n, t)
              })
            }
          }
        }
      }, {}],
      33: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          var t = e.helpers;
          e.Ticks = {
            generators: {
              linear: function (e, n) {
                var i, r = [];
                if (e.stepSize && e.stepSize > 0) i = e.stepSize;
                else {
                  var o = t.niceNum(n.max - n.min, !1);
                  i = t.niceNum(o / (e.maxTicks - 1), !0)
                }
                var a = Math.floor(n.min / i) * i,
                  s = Math.ceil(n.max / i) * i;
                e.min && e.max && e.stepSize && t.almostWhole((e.max - e.min) / e.stepSize, i / 1e3) && (a = e.min, s = e.max);
                var l = (s - a) / i;
                l = t.almostEquals(l, Math.round(l), i / 1e3) ? Math.round(l) : Math.ceil(l), r.push(void 0 !== e.min ? e.min : a);
                for (var c = 1; c < l; ++c) r.push(a + c * i);
                return r.push(void 0 !== e.max ? e.max : s), r
              },
              logarithmic: function (e, n) {
                var i, r, o = [],
                  a = t.getValueOrDefault,
                  s = a(e.min, Math.pow(10, Math.floor(t.log10(n.min)))),
                  l = Math.floor(t.log10(n.max)),
                  c = Math.ceil(n.max / Math.pow(10, l));
                0 === s ? (i = Math.floor(t.log10(n.minNotZero)), r = Math.floor(n.minNotZero / Math.pow(10, i)), o.push(s), s = r * Math.pow(10, i)) : (i = Math.floor(t.log10(s)), r = Math.floor(s / Math.pow(10, i)));
                do {
                  o.push(s), ++r, 10 === r && (r = 1, ++i), s = r * Math.pow(10, i)
                } while (i < l || i === l && r < c);
                var u = a(e.max, s);
                return o.push(u), o
              }
            },
            formatters: {
              values: function (e) {
                return t.isArray(e) ? e : "" + e
              },
              linear: function (e, n, i) {
                var r = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
                Math.abs(r) > 1 && e !== Math.floor(e) && (r = e - Math.floor(e));
                var o = t.log10(Math.abs(r)),
                  a = "";
                if (0 !== e) {
                  var s = -1 * Math.floor(o);
                  s = Math.max(Math.min(s, 20), 0), a = e.toFixed(s)
                } else a = "0";
                return a
              },
              logarithmic: function (e, n, i) {
                var r = e / Math.pow(10, Math.floor(t.log10(e)));
                return 0 === e ? "0" : 1 === r || 2 === r || 5 === r || 0 === n || n === i.length - 1 ? e.toExponential() : ""
              }
            }
          }
        }
      }, {}],
      34: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          function t(e, t) {
            var n = l.color(e);
            return n.alpha(t * n.alpha()).rgbaString()
          }

          function n(e, t) {
            return t && (l.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
          }

          function i(e) {
            var t = e._xScale,
              n = e._yScale || e._scale,
              i = e._index,
              r = e._datasetIndex;
            return {
              xLabel: t ? t.getLabelForIndex(i, r) : "",
              yLabel: n ? n.getLabelForIndex(i, r) : "",
              index: i,
              datasetIndex: r,
              x: e._model.x,
              y: e._model.y
            }
          }

          function r(t) {
            var n = e.defaults.global,
              i = l.getValueOrDefault;
            return {
              xPadding: t.xPadding,
              yPadding: t.yPadding,
              xAlign: t.xAlign,
              yAlign: t.yAlign,
              bodyFontColor: t.bodyFontColor,
              _bodyFontFamily: i(t.bodyFontFamily, n.defaultFontFamily),
              _bodyFontStyle: i(t.bodyFontStyle, n.defaultFontStyle),
              _bodyAlign: t.bodyAlign,
              bodyFontSize: i(t.bodyFontSize, n.defaultFontSize),
              bodySpacing: t.bodySpacing,
              titleFontColor: t.titleFontColor,
              _titleFontFamily: i(t.titleFontFamily, n.defaultFontFamily),
              _titleFontStyle: i(t.titleFontStyle, n.defaultFontStyle),
              titleFontSize: i(t.titleFontSize, n.defaultFontSize),
              _titleAlign: t.titleAlign,
              titleSpacing: t.titleSpacing,
              titleMarginBottom: t.titleMarginBottom,
              footerFontColor: t.footerFontColor,
              _footerFontFamily: i(t.footerFontFamily, n.defaultFontFamily),
              _footerFontStyle: i(t.footerFontStyle, n.defaultFontStyle),
              footerFontSize: i(t.footerFontSize, n.defaultFontSize),
              _footerAlign: t.footerAlign,
              footerSpacing: t.footerSpacing,
              footerMarginTop: t.footerMarginTop,
              caretSize: t.caretSize,
              cornerRadius: t.cornerRadius,
              backgroundColor: t.backgroundColor,
              opacity: 0,
              legendColorBackground: t.multiKeyBackground,
              displayColors: t.displayColors,
              borderColor: t.borderColor,
              borderWidth: t.borderWidth
            }
          }

          function o(e, t) {
            var n = e._chart.ctx,
              i = 2 * t.yPadding,
              r = 0,
              o = t.body,
              a = o.reduce(function (e, t) {
                return e + t.before.length + t.lines.length + t.after.length
              }, 0);
            a += t.beforeBody.length + t.afterBody.length;
            var s = t.title.length,
              c = t.footer.length,
              u = t.titleFontSize,
              d = t.bodyFontSize,
              f = t.footerFontSize;
            i += s * u, i += s ? (s - 1) * t.titleSpacing : 0, i += s ? t.titleMarginBottom : 0, i += a * d, i += a ? (a - 1) * t.bodySpacing : 0, i += c ? t.footerMarginTop : 0, i += c * f, i += c ? (c - 1) * t.footerSpacing : 0;
            var h = 0,
              p = function (e) {
                r = Math.max(r, n.measureText(e).width + h)
              };
            return n.font = l.fontString(u, t._titleFontStyle, t._titleFontFamily), l.each(t.title, p), n.font = l.fontString(d, t._bodyFontStyle, t._bodyFontFamily), l.each(t.beforeBody.concat(t.afterBody), p), h = t.displayColors ? d + 2 : 0, l.each(o, function (e) {
              l.each(e.before, p), l.each(e.lines, p), l.each(e.after, p)
            }), h = 0, n.font = l.fontString(f, t._footerFontStyle, t._footerFontFamily), l.each(t.footer, p), r += 2 * t.xPadding, {
              width: r,
              height: i
            }
          }

          function a(e, t) {
            var n = e._model,
              i = e._chart,
              r = e._chart.chartArea,
              o = "center",
              a = "center";
            n.y < t.height ? a = "top" : n.y > i.height - t.height && (a = "bottom");
            var s, l, c, u, d, f = (r.left + r.right) / 2,
              h = (r.top + r.bottom) / 2;
            "center" === a ? (s = function (e) {
              return e <= f
            }, l = function (e) {
              return e > f
            }) : (s = function (e) {
              return e <= t.width / 2
            }, l = function (e) {
              return e >= i.width - t.width / 2
            }), c = function (e) {
              return e + t.width > i.width
            }, u = function (e) {
              return e - t.width < 0
            }, d = function (e) {
              return e <= h ? "top" : "bottom"
            }, s(n.x) ? (o = "left", c(n.x) && (o = "center", a = d(n.y))) : l(n.x) && (o = "right", u(n.x) && (o = "center", a = d(n.y)));
            var p = e._options;
            return {
              xAlign: p.xAlign ? p.xAlign : o,
              yAlign: p.yAlign ? p.yAlign : a
            }
          }

          function s(e, t, n) {
            var i = e.x,
              r = e.y,
              o = e.caretSize,
              a = e.caretPadding,
              s = e.cornerRadius,
              l = n.xAlign,
              c = n.yAlign,
              u = o + a,
              d = s + a;
            return "right" === l ? i -= t.width : "center" === l && (i -= t.width / 2), "top" === c ? r += u : r -= "bottom" === c ? t.height + u : t.height / 2, "center" === c ? "left" === l ? i += u : "right" === l && (i -= u) : "left" === l ? i -= d : "right" === l && (i += d), {
              x: i,
              y: r
            }
          }
          var l = e.helpers;
          e.defaults.global.tooltips = {
            enabled: !0,
            custom: null,
            mode: "nearest",
            position: "average",
            intersect: !0,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyFontColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: "#fff",
            displayColors: !0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            callbacks: {
              beforeTitle: l.noop,
              title: function (e, t) {
                var n = "",
                  i = t.labels,
                  r = i ? i.length : 0;
                if (e.length > 0) {
                  var o = e[0];
                  o.xLabel ? n = o.xLabel : r > 0 && o.index < r && (n = i[o.index])
                }
                return n
              },
              afterTitle: l.noop,
              beforeBody: l.noop,
              beforeLabel: l.noop,
              label: function (e, t) {
                var n = t.datasets[e.datasetIndex].label || "";
                return n && (n += ": "), n += e.yLabel
              },
              labelColor: function (e, t) {
                var n = t.getDatasetMeta(e.datasetIndex),
                  i = n.data[e.index],
                  r = i._view;
                return {
                  borderColor: r.borderColor,
                  backgroundColor: r.backgroundColor
                }
              },
              afterLabel: l.noop,
              afterBody: l.noop,
              beforeFooter: l.noop,
              footer: l.noop,
              afterFooter: l.noop
            }
          }, e.Tooltip = e.Element.extend({
            initialize: function () {
              this._model = r(this._options)
            },
            getTitle: function () {
              var e = this,
                t = e._options,
                i = t.callbacks,
                r = i.beforeTitle.apply(e, arguments),
                o = i.title.apply(e, arguments),
                a = i.afterTitle.apply(e, arguments),
                s = [];
              return s = n(s, r), s = n(s, o), s = n(s, a)
            },
            getBeforeBody: function () {
              var e = this._options.callbacks.beforeBody.apply(this, arguments);
              return l.isArray(e) ? e : void 0 !== e ? [e] : []
            },
            getBody: function (e, t) {
              var i = this,
                r = i._options.callbacks,
                o = [];
              return l.each(e, function (e) {
                var a = {
                  before: [],
                  lines: [],
                  after: []
                };
                n(a.before, r.beforeLabel.call(i, e, t)), n(a.lines, r.label.call(i, e, t)), n(a.after, r.afterLabel.call(i, e, t)), o.push(a)
              }), o
            },
            getAfterBody: function () {
              var e = this._options.callbacks.afterBody.apply(this, arguments);
              return l.isArray(e) ? e : void 0 !== e ? [e] : []
            },
            getFooter: function () {
              var e = this,
                t = e._options.callbacks,
                i = t.beforeFooter.apply(e, arguments),
                r = t.footer.apply(e, arguments),
                o = t.afterFooter.apply(e, arguments),
                a = [];
              return a = n(a, i), a = n(a, r), a = n(a, o)
            },
            update: function (t) {
              var n, c, u = this,
                d = u._options,
                f = u._model,
                h = u._model = r(d),
                p = u._active,
                m = u._data,
                g = {
                  xAlign: f.xAlign,
                  yAlign: f.yAlign
                },
                v = {
                  x: f.x,
                  y: f.y
                },
                y = {
                  width: f.width,
                  height: f.height
                },
                b = {
                  x: f.caretX,
                  y: f.caretY
                };
              if (p.length) {
                h.opacity = 1;
                var x = [];
                b = e.Tooltip.positioners[d.position](p, u._eventPosition);
                var w = [];
                for (n = 0, c = p.length; n < c; ++n) w.push(i(p[n]));
                d.filter && (w = w.filter(function (e) {
                  return d.filter(e, m)
                })), d.itemSort && (w = w.sort(function (e, t) {
                  return d.itemSort(e, t, m)
                })), l.each(w, function (e) {
                  x.push(d.callbacks.labelColor.call(u, e, u._chart))
                }), h.title = u.getTitle(w, m), h.beforeBody = u.getBeforeBody(w, m), h.body = u.getBody(w, m), h.afterBody = u.getAfterBody(w, m), h.footer = u.getFooter(w, m), h.x = Math.round(b.x), h.y = Math.round(b.y), h.caretPadding = d.caretPadding, h.labelColors = x, h.dataPoints = w, y = o(this, h), g = a(this, y), v = s(h, y, g)
              } else h.opacity = 0;
              return h.xAlign = g.xAlign, h.yAlign = g.yAlign, h.x = v.x, h.y = v.y, h.width = y.width, h.height = y.height, h.caretX = b.x, h.caretY = b.y, u._model = h, t && d.custom && d.custom.call(u, h), u
            },
            drawCaret: function (e, t) {
              var n = this._chart.ctx,
                i = this._view,
                r = this.getCaretPosition(e, t, i);
              n.lineTo(r.x1, r.y1), n.lineTo(r.x2, r.y2), n.lineTo(r.x3, r.y3)
            },
            getCaretPosition: function (e, t, n) {
              var i, r, o, a, s, l, c = n.caretSize,
                u = n.cornerRadius,
                d = n.xAlign,
                f = n.yAlign,
                h = e.x,
                p = e.y,
                m = t.width,
                g = t.height;
              if ("center" === f) s = p + g / 2, "left" === d ? (i = h, r = i - c, o = i, a = s + c, l = s - c) : (i = h + m, r = i + c, o = i, a = s - c, l = s + c);
              else if ("left" === d ? (r = h + u + c, i = r - c, o = r + c) : "right" === d ? (r = h + m - u - c, i = r - c, o = r + c) : (r = h + m / 2, i = r - c, o = r + c), "top" === f) a = p, s = a - c, l = a;
              else {
                a = p + g, s = a + c, l = a;
                var v = o;
                o = i, i = v
              }
              return {
                x1: i,
                x2: r,
                x3: o,
                y1: a,
                y2: s,
                y3: l
              }
            },
            drawTitle: function (e, n, i, r) {
              var o = n.title;
              if (o.length) {
                i.textAlign = n._titleAlign, i.textBaseline = "top";
                var a = n.titleFontSize,
                  s = n.titleSpacing;
                i.fillStyle = t(n.titleFontColor, r), i.font = l.fontString(a, n._titleFontStyle, n._titleFontFamily);
                var c, u;
                for (c = 0, u = o.length; c < u; ++c) i.fillText(o[c], e.x, e.y), e.y += a + s, c + 1 === o.length && (e.y += n.titleMarginBottom - s)
              }
            },
            drawBody: function (e, n, i, r) {
              var o = n.bodyFontSize,
                a = n.bodySpacing,
                s = n.body;
              i.textAlign = n._bodyAlign, i.textBaseline = "top";
              var c = t(n.bodyFontColor, r);
              i.fillStyle = c, i.font = l.fontString(o, n._bodyFontStyle, n._bodyFontFamily);
              var u = 0,
                d = function (t) {
                  i.fillText(t, e.x + u, e.y), e.y += o + a
                };
              l.each(n.beforeBody, d);
              var f = n.displayColors;
              u = f ? o + 2 : 0, l.each(s, function (a, s) {
                l.each(a.before, d), l.each(a.lines, function (a) {
                  f && (i.fillStyle = t(n.legendColorBackground, r), i.fillRect(e.x, e.y, o, o), i.strokeStyle = t(n.labelColors[s].borderColor, r), i.strokeRect(e.x, e.y, o, o), i.fillStyle = t(n.labelColors[s].backgroundColor, r), i.fillRect(e.x + 1, e.y + 1, o - 2, o - 2), i.fillStyle = c), d(a)
                }), l.each(a.after, d)
              }), u = 0, l.each(n.afterBody, d), e.y -= a
            },
            drawFooter: function (e, n, i, r) {
              var o = n.footer;
              o.length && (e.y += n.footerMarginTop, i.textAlign = n._footerAlign, i.textBaseline = "top", i.fillStyle = t(n.footerFontColor, r), i.font = l.fontString(n.footerFontSize, n._footerFontStyle, n._footerFontFamily), l.each(o, function (t) {
                i.fillText(t, e.x, e.y), e.y += n.footerFontSize + n.footerSpacing
              }))
            },
            drawBackground: function (e, n, i, r, o) {
              i.fillStyle = t(n.backgroundColor, o), i.strokeStyle = t(n.borderColor, o), i.lineWidth = n.borderWidth;
              var a = n.xAlign,
                s = n.yAlign,
                l = e.x,
                c = e.y,
                u = r.width,
                d = r.height,
                f = n.cornerRadius;
              i.beginPath(), i.moveTo(l + f, c), "top" === s && this.drawCaret(e, r), i.lineTo(l + u - f, c), i.quadraticCurveTo(l + u, c, l + u, c + f), "center" === s && "right" === a && this.drawCaret(e, r), i.lineTo(l + u, c + d - f), i.quadraticCurveTo(l + u, c + d, l + u - f, c + d), "bottom" === s && this.drawCaret(e, r), i.lineTo(l + f, c + d), i.quadraticCurveTo(l, c + d, l, c + d - f), "center" === s && "left" === a && this.drawCaret(e, r), i.lineTo(l, c + f), i.quadraticCurveTo(l, c, l + f, c), i.closePath(), i.fill(), n.borderWidth > 0 && i.stroke()
            },
            draw: function () {
              var e = this._chart.ctx,
                t = this._view;
              if (0 !== t.opacity) {
                var n = {
                    width: t.width,
                    height: t.height
                  },
                  i = {
                    x: t.x,
                    y: t.y
                  },
                  r = Math.abs(t.opacity < .001) ? 0 : t.opacity,
                  o = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
                this._options.enabled && o && (this.drawBackground(i, t, e, n, r), i.x += t.xPadding, i.y += t.yPadding, this.drawTitle(i, t, e, r), this.drawBody(i, t, e, r), this.drawFooter(i, t, e, r))
              }
            },
            handleEvent: function (e) {
              var t = this,
                n = t._options,
                i = !1;
              if (t._lastActive = t._lastActive || [], "mouseout" === e.type ? t._active = [] : t._active = t._chart.getElementsAtEventForMode(e, n.mode, n), !(i = !l.arrayEquals(t._active, t._lastActive))) return !1;
              if (t._lastActive = t._active, n.enabled || n.custom) {
                t._eventPosition = {
                  x: e.x,
                  y: e.y
                };
                var r = t._model;
                t.update(!0), t.pivot(), i |= r.x !== t._model.x || r.y !== t._model.y
              }
              return i
            }
          }), e.Tooltip.positioners = {
            average: function (e) {
              if (!e.length) return !1;
              var t, n, i = 0,
                r = 0,
                o = 0;
              for (t = 0, n = e.length; t < n; ++t) {
                var a = e[t];
                if (a && a.hasValue()) {
                  var s = a.tooltipPosition();
                  i += s.x, r += s.y, ++o
                }
              }
              return {
                x: Math.round(i / o),
                y: Math.round(r / o)
              }
            },
            nearest: function (e, t) {
              var n, i, r, o = t.x,
                a = t.y,
                s = Number.POSITIVE_INFINITY;
              for (i = 0, r = e.length; i < r; ++i) {
                var c = e[i];
                if (c && c.hasValue()) {
                  var u = c.getCenterPoint(),
                    d = l.distanceBetweenPoints(t, u);
                  d < s && (s = d, n = c)
                }
              }
              if (n) {
                var f = n.tooltipPosition();
                o = f.x, a = f.y
              }
              return {
                x: o,
                y: a
              }
            }
          }
        }
      }, {}],
      35: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          var t = e.helpers,
            n = e.defaults.global;
          n.elements.arc = {
            backgroundColor: n.defaultColor,
            borderColor: "#fff",
            borderWidth: 2
          }, e.elements.Arc = e.Element.extend({
            inLabelRange: function (e) {
              var t = this._view;
              return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2)
            },
            inRange: function (e, n) {
              var i = this._view;
              if (i) {
                for (var r = t.getAngleFromPoint(i, {
                    x: e,
                    y: n
                  }), o = r.angle, a = r.distance, s = i.startAngle, l = i.endAngle; l < s;) l += 2 * Math.PI;
                for (; o > l;) o -= 2 * Math.PI;
                for (; o < s;) o += 2 * Math.PI;
                var c = o >= s && o <= l,
                  u = a >= i.innerRadius && a <= i.outerRadius;
                return c && u
              }
              return !1
            },
            getCenterPoint: function () {
              var e = this._view,
                t = (e.startAngle + e.endAngle) / 2,
                n = (e.innerRadius + e.outerRadius) / 2;
              return {
                x: e.x + Math.cos(t) * n,
                y: e.y + Math.sin(t) * n
              }
            },
            getArea: function () {
              var e = this._view;
              return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
            },
            tooltipPosition: function () {
              var e = this._view,
                t = e.startAngle + (e.endAngle - e.startAngle) / 2,
                n = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
              return {
                x: e.x + Math.cos(t) * n,
                y: e.y + Math.sin(t) * n
              }
            },
            draw: function () {
              var e = this._chart.ctx,
                t = this._view,
                n = t.startAngle,
                i = t.endAngle;
              e.beginPath(), e.arc(t.x, t.y, t.outerRadius, n, i), e.arc(t.x, t.y, t.innerRadius, i, n, !0), e.closePath(), e.strokeStyle = t.borderColor, e.lineWidth = t.borderWidth, e.fillStyle = t.backgroundColor, e.fill(), e.lineJoin = "bevel", t.borderWidth && e.stroke()
            }
          })
        }
      }, {}],
      36: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          var t = e.helpers,
            n = e.defaults.global;
          e.defaults.global.elements.line = {
            tension: .4,
            backgroundColor: n.defaultColor,
            borderWidth: 3,
            borderColor: n.defaultColor,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            capBezierPoints: !0,
            fill: !0
          }, e.elements.Line = e.Element.extend({
            draw: function () {
              var e, i, r, o, a = this,
                s = a._view,
                l = a._chart.ctx,
                c = s.spanGaps,
                u = a._children.slice(),
                d = n.elements.line,
                f = -1;
              for (a._loop && u.length && u.push(u[0]), l.save(), l.lineCap = s.borderCapStyle || d.borderCapStyle, l.setLineDash && l.setLineDash(s.borderDash || d.borderDash), l.lineDashOffset = s.borderDashOffset || d.borderDashOffset, l.lineJoin = s.borderJoinStyle || d.borderJoinStyle, l.lineWidth = s.borderWidth || d.borderWidth, l.strokeStyle = s.borderColor || n.defaultColor, l.beginPath(), f = -1, e = 0; e < u.length; ++e) i = u[e], r = t.previousItem(u, e), o = i._view, 0 === e ? o.skip || (l.moveTo(o.x, o.y), f = e) : (r = f === -1 ? r : u[f], o.skip || (f !== e - 1 && !c || f === -1 ? l.moveTo(o.x, o.y) : t.canvas.lineTo(l, r._view, i._view), f = e));
              l.stroke(), l.restore()
            }
          })
        }
      }, {}],
      37: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          function t(e) {
            var t = this._view;
            return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hitRadius, 2)
          }

          function n(e) {
            var t = this._view;
            return !!t && Math.pow(e - t.y, 2) < Math.pow(t.radius + t.hitRadius, 2)
          }
          var i = e.helpers,
            r = e.defaults.global,
            o = r.defaultColor;
          r.elements.point = {
            radius: 3,
            pointStyle: "circle",
            backgroundColor: o,
            borderWidth: 1,
            borderColor: o,
            hitRadius: 1,
            hoverRadius: 4,
            hoverBorderWidth: 1
          }, e.elements.Point = e.Element.extend({
            inRange: function (e, t) {
              var n = this._view;
              return !!n && Math.pow(e - n.x, 2) + Math.pow(t - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
            },
            inLabelRange: t,
            inXRange: t,
            inYRange: n,
            getCenterPoint: function () {
              var e = this._view;
              return {
                x: e.x,
                y: e.y
              }
            },
            getArea: function () {
              return Math.PI * Math.pow(this._view.radius, 2)
            },
            tooltipPosition: function () {
              var e = this._view;
              return {
                x: e.x,
                y: e.y,
                padding: e.radius + e.borderWidth
              }
            },
            draw: function (t) {
              var n = this._view,
                a = this._model,
                s = this._chart.ctx,
                l = n.pointStyle,
                c = n.radius,
                u = n.x,
                d = n.y,
                f = e.helpers.color,
                h = 0;
              n.skip || (s.strokeStyle = n.borderColor || o, s.lineWidth = i.getValueOrDefault(n.borderWidth, r.elements.point.borderWidth), s.fillStyle = n.backgroundColor || o, void 0 !== t && (a.x < t.left || 1.01 * t.right < a.x || a.y < t.top || 1.01 * t.bottom < a.y) && (a.x < t.left ? h = (u - a.x) / (t.left - a.x) : 1.01 * t.right < a.x ? h = (a.x - u) / (a.x - t.right) : a.y < t.top ? h = (d - a.y) / (t.top - a.y) : 1.01 * t.bottom < a.y && (h = (a.y - d) / (a.y - t.bottom)), h = Math.round(100 * h) / 100, s.strokeStyle = f(s.strokeStyle).alpha(h).rgbString(), s.fillStyle = f(s.fillStyle).alpha(h).rgbString()), e.canvasHelpers.drawPoint(s, l, c, u, d))
            }
          })
        }
      }, {}],
      38: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          function t(e) {
            return void 0 !== e._view.width
          }

          function n(e) {
            var n, i, r, o, a = e._view;
            if (t(e)) {
              var s = a.width / 2;
              n = a.x - s, i = a.x + s, r = Math.min(a.y, a.base), o = Math.max(a.y, a.base)
            } else {
              var l = a.height / 2;
              n = Math.min(a.x, a.base), i = Math.max(a.x, a.base), r = a.y - l, o = a.y + l
            }
            return {
              left: n,
              top: r,
              right: i,
              bottom: o
            }
          }
          var i = e.defaults.global;
          i.elements.rectangle = {
            backgroundColor: i.defaultColor,
            borderWidth: 0,
            borderColor: i.defaultColor,
            borderSkipped: "bottom"
          }, e.elements.Rectangle = e.Element.extend({
            draw: function () {
              function e(e) {
                return v[(b + e) % 4]
              }
              var t, n, i, r, o, a, s, l = this._chart.ctx,
                c = this._view,
                u = c.borderWidth;
              if (c.horizontal ? (t = c.base, n = c.x, i = c.y - c.height / 2, r = c.y + c.height / 2, o = n > t ? 1 : -1, a = 1, s = c.borderSkipped || "left") : (t = c.x - c.width / 2, n = c.x + c.width / 2, i = c.y, r = c.base, o = 1, a = r > i ? 1 : -1, s = c.borderSkipped || "bottom"), u) {
                var d = Math.min(Math.abs(t - n), Math.abs(i - r));
                u = u > d ? d : u;
                var f = u / 2,
                  h = t + ("left" !== s ? f * o : 0),
                  p = n + ("right" !== s ? -f * o : 0),
                  m = i + ("top" !== s ? f * a : 0),
                  g = r + ("bottom" !== s ? -f * a : 0);
                h !== p && (i = m, r = g), m !== g && (t = h, n = p)
              }
              l.beginPath(), l.fillStyle = c.backgroundColor, l.strokeStyle = c.borderColor, l.lineWidth = u;
              var v = [
                  [t, r],
                  [t, i],
                  [n, i],
                  [n, r]
                ],
                y = ["bottom", "left", "top", "right"],
                b = y.indexOf(s, 0);
              b === -1 && (b = 0);
              var x = e(0);
              l.moveTo(x[0], x[1]);
              for (var w = 1; w < 4; w++) x = e(w), l.lineTo(x[0], x[1]);
              l.fill(), u && l.stroke()
            },
            height: function () {
              var e = this._view;
              return e.base - e.y
            },
            inRange: function (e, t) {
              var i = !1;
              if (this._view) {
                var r = n(this);
                i = e >= r.left && e <= r.right && t >= r.top && t <= r.bottom
              }
              return i
            },
            inLabelRange: function (e, i) {
              var r = this;
              if (!r._view) return !1;
              var o = n(r);
              return t(r) ? e >= o.left && e <= o.right : i >= o.top && i <= o.bottom
            },
            inXRange: function (e) {
              var t = n(this);
              return e >= t.left && e <= t.right
            },
            inYRange: function (e) {
              var t = n(this);
              return e >= t.top && e <= t.bottom
            },
            getCenterPoint: function () {
              var e, n, i = this._view;
              return t(this) ? (e = i.x, n = (i.y + i.base) / 2) : (e = (i.x + i.base) / 2, n = i.y), {
                x: e,
                y: n
              }
            },
            getArea: function () {
              var e = this._view;
              return e.width * Math.abs(e.y - e.base)
            },
            tooltipPosition: function () {
              var e = this._view;
              return {
                x: e.x,
                y: e.y
              }
            }
          })
        }
      }, {}],
      39: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          function t(e, t) {
            var n = l.getStyle(e, t),
              i = n && n.match(/^(\d+)(\.\d+)?px$/);
            return i ? Number(i[1]) : void 0
          }

          function n(e, n) {
            var i = e.style,
              r = e.getAttribute("height"),
              o = e.getAttribute("width");
            if (e._chartjs = {
                initial: {
                  height: r,
                  width: o,
                  style: {
                    display: i.display,
                    height: i.height,
                    width: i.width
                  }
                }
              }, i.display = i.display || "block", null === o || "" === o) {
              var a = t(e, "width");
              void 0 !== a && (e.width = a)
            }
            if (null === r || "" === r)
              if ("" === e.style.height) e.height = e.width / (n.options.aspectRatio || 2);
              else {
                var s = t(e, "height");
                void 0 !== a && (e.height = s)
              }
            return e
          }

          function i(e, t, n, i, r) {
            return {
              type: e,
              chart: t,
              native: r || null,
              x: void 0 !== n ? n : null,
              y: void 0 !== i ? i : null
            }
          }

          function r(e, t) {
            var n = c[e.type] || e.type,
              r = l.getRelativePosition(e, t);
            return i(n, t, r.x, r.y, e)
          }

          function o(e) {
            var t = document.createElement("iframe");
            return t.className = "chartjs-hidden-iframe", t.style.cssText = "display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;", t.tabIndex = -1, l.addEvent(t, "load", function () {
              l.addEvent(t.contentWindow || t, "resize", e), e()
            }), t
          }

          function a(e, t, n) {
            var r = e._chartjs = {
                ticking: !1
              },
              a = function () {
                r.ticking || (r.ticking = !0, l.requestAnimFrame.call(window, function () {
                  if (r.resizer) return r.ticking = !1, t(i("resize", n))
                }))
              };
            r.resizer = o(a), e.insertBefore(r.resizer, e.firstChild)
          }

          function s(e) {
            if (e && e._chartjs) {
              var t = e._chartjs.resizer;
              t && (t.parentNode.removeChild(t), e._chartjs.resizer = null), delete e._chartjs
            }
          }
          var l = e.helpers,
            c = {
              touchstart: "mousedown",
              touchmove: "mousemove",
              touchend: "mouseup",
              pointerenter: "mouseenter",
              pointerdown: "mousedown",
              pointermove: "mousemove",
              pointerup: "mouseup",
              pointerleave: "mouseout",
              pointerout: "mouseout"
            };
          return {
            acquireContext: function (e, t) {
              "string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas);
              var i = e && e.getContext && e.getContext("2d");
              return i && i.canvas === e ? (n(e, t), i) : null
            },
            releaseContext: function (e) {
              var t = e.canvas;
              if (t._chartjs) {
                var n = t._chartjs.initial;
                ["height", "width"].forEach(function (e) {
                  var i = n[e];
                  void 0 === i || null === i ? t.removeAttribute(e) : t.setAttribute(e, i)
                }), l.each(n.style || {}, function (e, n) {
                  t.style[n] = e
                }), t.width = t.width, delete t._chartjs
              }
            },
            addEventListener: function (e, t, n) {
              var i = e.canvas;
              if ("resize" === t) return void a(i.parentNode, n, e);
              var o = n._chartjs || (n._chartjs = {}),
                s = o.proxies || (o.proxies = {}),
                c = s[e.id + "_" + t] = function (t) {
                  n(r(t, e))
                };
              l.addEvent(i, t, c)
            },
            removeEventListener: function (e, t, n) {
              var i = e.canvas;
              if ("resize" === t) return void s(i.parentNode);
              var r = n._chartjs || {},
                o = r.proxies || {},
                a = o[e.id + "_" + t];
              a && l.removeEvent(i, t, a)
            }
          }
        }
      }, {}],
      40: [function (e, t, n) {
        "use strict";
        var i = e(39);
        t.exports = function (e) {
          e.platform = {
            acquireContext: function () {},
            releaseContext: function () {},
            addEventListener: function () {},
            removeEventListener: function () {}
          }, e.helpers.extend(e.platform, i(e))
        }
      }, {
        39: 39
      }],
      41: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          function t(e, t, n) {
            var i, r = e._model || {},
              o = r.fill;
            if (void 0 === o && (o = !!r.backgroundColor), o === !1 || null === o) return !1;
            if (o === !0) return "origin";
            if (i = parseFloat(o, 10), isFinite(i) && Math.floor(i) === i) return "-" !== o[0] && "+" !== o[0] || (i = t + i), !(i === t || i < 0 || i >= n) && i;
            switch (o) {
              case "bottom":
                return "start";
              case "top":
                return "end";
              case "zero":
                return "origin";
              case "origin":
              case "start":
              case "end":
                return o;
              default:
                return !1
            }
          }

          function n(e) {
            var t, n = e.el._model || {},
              i = e.el._scale || {},
              r = e.fill,
              o = null;
            if (isFinite(r)) return null;
            if ("start" === r ? o = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === r ? o = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? o = n.scaleZero : i.getBasePosition ? o = i.getBasePosition() : i.getBasePixel && (o = i.getBasePixel()), void 0 !== o && null !== o) {
              if (void 0 !== o.x && void 0 !== o.y) return o;
              if ("number" == typeof o && isFinite(o)) return t = i.isHorizontal(), {
                x: t ? o : null,
                y: t ? null : o
              }
            }
            return null
          }

          function i(e, t, n) {
            var i, r = e[t],
              o = r.fill,
              a = [t];
            if (!n) return o;
            for (; o !== !1 && a.indexOf(o) === -1;) {
              if (!isFinite(o)) return o;
              if (!(i = e[o])) return !1;
              if (i.visible) return o;
              a.push(o), o = i.fill
            }
            return !1
          }

          function r(e) {
            var t = e.fill,
              n = "dataset";
            return t === !1 ? null : (isFinite(t) || (n = "boundary"), u[n](e))
          }

          function o(e) {
            return e && !e.skip
          }

          function a(e, t, n, i, r) {
            var o;
            if (i && r) {
              for (e.moveTo(t[0].x, t[0].y), o = 1; o < i; ++o) c.canvas.lineTo(e, t[o - 1], t[o]);
              for (e.lineTo(n[r - 1].x, n[r - 1].y), o = r - 1; o > 0; --o) c.canvas.lineTo(e, n[o], n[o - 1], !0)
            }
          }

          function s(e, t, n, i, r, s) {
            var l, c, u, d, f, h, p, m = t.length,
              g = i.spanGaps,
              v = [],
              y = [],
              b = 0,
              x = 0;
            for (e.beginPath(), l = 0, c = m + !!s; l < c; ++l) u = l % m, d = t[u]._view, f = n(d, u, i), h = o(d), p = o(f), h && p ? (b = v.push(d), x = y.push(f)) : b && x && (g ? (h && v.push(d), p && y.push(f)) : (a(e, v, y, b, x), b = x = 0, v = [], y = []));
            a(e, v, y, b, x), e.closePath(), e.fillStyle = r, e.fill()
          }
          e.defaults.global.plugins.filler = {
            propagate: !0
          };
          var l = e.defaults,
            c = e.helpers,
            u = {
              dataset: function (e) {
                var t = e.fill,
                  n = e.chart,
                  i = n.getDatasetMeta(t),
                  r = i && n.isDatasetVisible(t),
                  o = r && i.dataset._children || [];
                return o.length ? function (e, t) {
                  return o[t]._view || null
                } : null
              },
              boundary: function (e) {
                var t = e.boundary,
                  n = t ? t.x : null,
                  i = t ? t.y : null;
                return function (e) {
                  return {
                    x: null === n ? e.x : n,
                    y: null === i ? e.y : i
                  }
                }
              }
            };
          return {
            id: "filler",
            afterDatasetsUpdate: function (o, a) {
              var s, l, c, u, d = (o.data.datasets || []).length,
                f = a.propagate,
                h = [];
              for (l = 0; l < d; ++l) s = o.getDatasetMeta(l), c = s.dataset, u = null, c && c._model && c instanceof e.elements.Line && (u = {
                visible: o.isDatasetVisible(l),
                fill: t(c, l, d),
                chart: o,
                el: c
              }), s.$filler = u, h.push(u);
              for (l = 0; l < d; ++l)(u = h[l]) && (u.fill = i(h, l, f), u.boundary = n(u), u.mapper = r(u))
            },
            beforeDatasetDraw: function (e, t) {
              var n = t.meta.$filler;
              if (n) {
                var i = n.el,
                  r = i._view,
                  o = i._children || [],
                  a = n.mapper,
                  c = r.backgroundColor || l.global.defaultColor;
                a && c && o.length && s(e.ctx, o, a, r, c, i._loop)
              }
            }
          }
        }
      }, {}],
      42: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          function t(e, t) {
            return e.usePointStyle ? t * Math.SQRT2 : e.boxWidth
          }

          function n(t, n) {
            var i = new e.Legend({
              ctx: t.ctx,
              options: n,
              chart: t
            });
            r.configure(t, i, n), r.addBox(t, i), t.legend = i
          }
          var i = e.helpers,
            r = e.layoutService,
            o = i.noop;
          return e.defaults.global.legend = {
            display: !0,
            position: "top",
            fullWidth: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function (e, t) {
              var n = t.datasetIndex,
                i = this.chart,
                r = i.getDatasetMeta(n);
              r.hidden = null === r.hidden ? !i.data.datasets[n].hidden : null, i.update()
            },
            onHover: null,
            labels: {
              boxWidth: 40,
              padding: 10,
              generateLabels: function (e) {
                var t = e.data;
                return i.isArray(t.datasets) ? t.datasets.map(function (t, n) {
                  return {
                    text: t.label,
                    fillStyle: i.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor,
                    hidden: !e.isDatasetVisible(n),
                    lineCap: t.borderCapStyle,
                    lineDash: t.borderDash,
                    lineDashOffset: t.borderDashOffset,
                    lineJoin: t.borderJoinStyle,
                    lineWidth: t.borderWidth,
                    strokeStyle: t.borderColor,
                    pointStyle: t.pointStyle,
                    datasetIndex: n
                  }
                }, this) : []
              }
            }
          }, e.Legend = e.Element.extend({
            initialize: function (e) {
              i.extend(this, e), this.legendHitBoxes = [], this.doughnutMode = !1
            },
            beforeUpdate: o,
            update: function (e, t, n) {
              var i = this;
              return i.beforeUpdate(), i.maxWidth = e, i.maxHeight = t, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
            },
            afterUpdate: o,
            beforeSetDimensions: o,
            setDimensions: function () {
              var e = this;
              e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
                width: 0,
                height: 0
              }
            },
            afterSetDimensions: o,
            beforeBuildLabels: o,
            buildLabels: function () {
              var e = this,
                t = e.options.labels,
                n = t.generateLabels.call(e, e.chart);
              t.filter && (n = n.filter(function (n) {
                return t.filter(n, e.chart.data)
              })), e.options.reverse && n.reverse(), e.legendItems = n
            },
            afterBuildLabels: o,
            beforeFit: o,
            fit: function () {
              var n = this,
                r = n.options,
                o = r.labels,
                a = r.display,
                s = n.ctx,
                l = e.defaults.global,
                c = i.getValueOrDefault,
                u = c(o.fontSize, l.defaultFontSize),
                d = c(o.fontStyle, l.defaultFontStyle),
                f = c(o.fontFamily, l.defaultFontFamily),
                h = i.fontString(u, d, f),
                p = n.legendHitBoxes = [],
                m = n.minSize,
                g = n.isHorizontal();
              if (g ? (m.width = n.maxWidth, m.height = a ? 10 : 0) : (m.width = a ? 10 : 0, m.height = n.maxHeight), a)
                if (s.font = h, g) {
                  var v = n.lineWidths = [0],
                    y = n.legendItems.length ? u + o.padding : 0;
                  s.textAlign = "left", s.textBaseline = "top", i.each(n.legendItems, function (e, i) {
                    var r = t(o, u),
                      a = r + u / 2 + s.measureText(e.text).width;
                    v[v.length - 1] + a + o.padding >= n.width && (y += u + o.padding, v[v.length] = n.left), p[i] = {
                      left: 0,
                      top: 0,
                      width: a,
                      height: u
                    }, v[v.length - 1] += a + o.padding
                  }), m.height += y
                } else {
                  var b = o.padding,
                    x = n.columnWidths = [],
                    w = o.padding,
                    C = 0,
                    T = 0,
                    k = u + b;
                  i.each(n.legendItems, function (e, n) {
                    var i = t(o, u),
                      r = i + u / 2 + s.measureText(e.text).width;
                    T + k > m.height && (w += C + o.padding, x.push(C), C = 0, T = 0), C = Math.max(C, r), T += k, p[n] = {
                      left: 0,
                      top: 0,
                      width: r,
                      height: u
                    }
                  }), w += C, x.push(C), m.width += w
                }
              n.width = m.width,
                n.height = m.height
            },
            afterFit: o,
            isHorizontal: function () {
              return "top" === this.options.position || "bottom" === this.options.position
            },
            draw: function () {
              var n = this,
                r = n.options,
                o = r.labels,
                a = e.defaults.global,
                s = a.elements.line,
                l = n.width,
                c = n.lineWidths;
              if (r.display) {
                var u, d = n.ctx,
                  f = i.getValueOrDefault,
                  h = f(o.fontColor, a.defaultFontColor),
                  p = f(o.fontSize, a.defaultFontSize),
                  m = f(o.fontStyle, a.defaultFontStyle),
                  g = f(o.fontFamily, a.defaultFontFamily),
                  v = i.fontString(p, m, g);
                d.textAlign = "left", d.textBaseline = "top", d.lineWidth = .5, d.strokeStyle = h, d.fillStyle = h, d.font = v;
                var y = t(o, p),
                  b = n.legendHitBoxes,
                  x = function (t, n, i) {
                    if (!(isNaN(y) || y <= 0)) {
                      d.save(), d.fillStyle = f(i.fillStyle, a.defaultColor), d.lineCap = f(i.lineCap, s.borderCapStyle), d.lineDashOffset = f(i.lineDashOffset, s.borderDashOffset), d.lineJoin = f(i.lineJoin, s.borderJoinStyle), d.lineWidth = f(i.lineWidth, s.borderWidth), d.strokeStyle = f(i.strokeStyle, a.defaultColor);
                      var o = 0 === f(i.lineWidth, s.borderWidth);
                      if (d.setLineDash && d.setLineDash(f(i.lineDash, s.borderDash)), r.labels && r.labels.usePointStyle) {
                        var l = p * Math.SQRT2 / 2,
                          c = l / Math.SQRT2,
                          u = t + c,
                          h = n + c;
                        e.canvasHelpers.drawPoint(d, i.pointStyle, l, u, h)
                      } else o || d.strokeRect(t, n, y, p), d.fillRect(t, n, y, p);
                      d.restore()
                    }
                  },
                  w = function (e, t, n, i) {
                    d.fillText(n.text, y + p / 2 + e, t), n.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(y + p / 2 + e, t + p / 2), d.lineTo(y + p / 2 + e + i, t + p / 2), d.stroke())
                  },
                  C = n.isHorizontal();
                u = C ? {
                  x: n.left + (l - c[0]) / 2,
                  y: n.top + o.padding,
                  line: 0
                } : {
                  x: n.left + o.padding,
                  y: n.top + o.padding,
                  line: 0
                };
                var T = p + o.padding;
                i.each(n.legendItems, function (e, t) {
                  var i = d.measureText(e.text).width,
                    r = y + p / 2 + i,
                    a = u.x,
                    s = u.y;
                  C ? a + r >= l && (s = u.y += T, u.line++, a = u.x = n.left + (l - c[u.line]) / 2) : s + T > n.bottom && (a = u.x = a + n.columnWidths[u.line] + o.padding, s = u.y = n.top + o.padding, u.line++), x(a, s, e), b[t].left = a, b[t].top = s, w(a, s, e, i), C ? u.x += r + o.padding : u.y += T
                })
              }
            },
            handleEvent: function (e) {
              var t = this,
                n = t.options,
                i = "mouseup" === e.type ? "click" : e.type,
                r = !1;
              if ("mousemove" === i) {
                if (!n.onHover) return
              } else {
                if ("click" !== i) return;
                if (!n.onClick) return
              }
              var o = e.x,
                a = e.y;
              if (o >= t.left && o <= t.right && a >= t.top && a <= t.bottom)
                for (var s = t.legendHitBoxes, l = 0; l < s.length; ++l) {
                  var c = s[l];
                  if (o >= c.left && o <= c.left + c.width && a >= c.top && a <= c.top + c.height) {
                    if ("click" === i) {
                      n.onClick.call(t, e.native, t.legendItems[l]), r = !0;
                      break
                    }
                    if ("mousemove" === i) {
                      n.onHover.call(t, e.native, t.legendItems[l]), r = !0;
                      break
                    }
                  }
                }
              return r
            }
          }), {
            id: "legend",
            beforeInit: function (e) {
              var t = e.options.legend;
              t && n(e, t)
            },
            beforeUpdate: function (t) {
              var o = t.options.legend,
                a = t.legend;
              o ? (o = i.configMerge(e.defaults.global.legend, o), a ? (r.configure(t, a, o), a.options = o) : n(t, o)) : a && (r.removeBox(t, a), delete t.legend)
            },
            afterEvent: function (e, t) {
              var n = e.legend;
              n && n.handleEvent(t)
            }
          }
        }
      }, {}],
      43: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          function t(t, n) {
            var r = new e.Title({
              ctx: t.ctx,
              options: n,
              chart: t
            });
            i.configure(t, r, n), i.addBox(t, r), t.titleBlock = r
          }
          var n = e.helpers,
            i = e.layoutService,
            r = n.noop;
          return e.defaults.global.title = {
            display: !1,
            position: "top",
            fullWidth: !0,
            weight: 2e3,
            fontStyle: "bold",
            padding: 10,
            text: ""
          }, e.Title = e.Element.extend({
            initialize: function (e) {
              var t = this;
              n.extend(t, e), t.legendHitBoxes = []
            },
            beforeUpdate: r,
            update: function (e, t, n) {
              var i = this;
              return i.beforeUpdate(), i.maxWidth = e, i.maxHeight = t, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
            },
            afterUpdate: r,
            beforeSetDimensions: r,
            setDimensions: function () {
              var e = this;
              e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
                width: 0,
                height: 0
              }
            },
            afterSetDimensions: r,
            beforeBuildLabels: r,
            buildLabels: r,
            afterBuildLabels: r,
            beforeFit: r,
            fit: function () {
              var t = this,
                i = n.getValueOrDefault,
                r = t.options,
                o = e.defaults.global,
                a = r.display,
                s = i(r.fontSize, o.defaultFontSize),
                l = t.minSize;
              t.isHorizontal() ? (l.width = t.maxWidth, l.height = a ? s + 2 * r.padding : 0) : (l.width = a ? s + 2 * r.padding : 0, l.height = t.maxHeight), t.width = l.width, t.height = l.height
            },
            afterFit: r,
            isHorizontal: function () {
              var e = this.options.position;
              return "top" === e || "bottom" === e
            },
            draw: function () {
              var t = this,
                i = t.ctx,
                r = n.getValueOrDefault,
                o = t.options,
                a = e.defaults.global;
              if (o.display) {
                var s, l, c, u = r(o.fontSize, a.defaultFontSize),
                  d = r(o.fontStyle, a.defaultFontStyle),
                  f = r(o.fontFamily, a.defaultFontFamily),
                  h = n.fontString(u, d, f),
                  p = 0,
                  m = t.top,
                  g = t.left,
                  v = t.bottom,
                  y = t.right;
                i.fillStyle = r(o.fontColor, a.defaultFontColor), i.font = h, t.isHorizontal() ? (s = g + (y - g) / 2, l = m + (v - m) / 2, c = y - g) : (s = "left" === o.position ? g + u / 2 : y - u / 2, l = m + (v - m) / 2, c = v - m, p = Math.PI * ("left" === o.position ? -.5 : .5)), i.save(), i.translate(s, l), i.rotate(p), i.textAlign = "center", i.textBaseline = "middle", i.fillText(o.text, 0, 0, c), i.restore()
              }
            }
          }), {
            id: "title",
            beforeInit: function (e) {
              var n = e.options.title;
              n && t(e, n)
            },
            beforeUpdate: function (r) {
              var o = r.options.title,
                a = r.titleBlock;
              o ? (o = n.configMerge(e.defaults.global.title, o), a ? (i.configure(r, a, o), a.options = o) : t(r, o)) : a && (e.layoutService.removeBox(r, a), delete r.titleBlock)
            }
          }
        }
      }, {}],
      44: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          var t = e.helpers,
            n = {
              position: "bottom"
            },
            i = e.Scale.extend({
              getLabels: function () {
                var e = this.chart.data;
                return (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels
              },
              determineDataLimits: function () {
                var e = this,
                  n = e.getLabels();
                e.minIndex = 0, e.maxIndex = n.length - 1;
                var i;
                void 0 !== e.options.ticks.min && (i = t.indexOf(n, e.options.ticks.min), e.minIndex = i !== -1 ? i : e.minIndex), void 0 !== e.options.ticks.max && (i = t.indexOf(n, e.options.ticks.max), e.maxIndex = i !== -1 ? i : e.maxIndex), e.min = n[e.minIndex], e.max = n[e.maxIndex]
              },
              buildTicks: function () {
                var e = this,
                  t = e.getLabels();
                e.ticks = 0 === e.minIndex && e.maxIndex === t.length - 1 ? t : t.slice(e.minIndex, e.maxIndex + 1)
              },
              getLabelForIndex: function (e, t) {
                var n = this,
                  i = n.chart.data,
                  r = n.isHorizontal();
                return i.yLabels && !r ? n.getRightValue(i.datasets[t].data[e]) : n.ticks[e - n.minIndex]
              },
              getPixelForValue: function (e, t, n, i) {
                var r, o = this,
                  a = Math.max(o.maxIndex + 1 - o.minIndex - (o.options.gridLines.offsetGridLines ? 0 : 1), 1);
                if (void 0 !== e && null !== e && (r = o.isHorizontal() ? e.x : e.y), void 0 !== r || void 0 !== e && isNaN(t)) {
                  var s = o.getLabels();
                  e = r || e;
                  var l = s.indexOf(e);
                  t = l !== -1 ? l : t
                }
                if (o.isHorizontal()) {
                  var c = o.width / a,
                    u = c * (t - o.minIndex);
                  return (o.options.gridLines.offsetGridLines && i || o.maxIndex === o.minIndex && i) && (u += c / 2), o.left + Math.round(u)
                }
                var d = o.height / a,
                  f = d * (t - o.minIndex);
                return o.options.gridLines.offsetGridLines && i && (f += d / 2), o.top + Math.round(f)
              },
              getPixelForTick: function (e, t) {
                return this.getPixelForValue(this.ticks[e], e + this.minIndex, null, t)
              },
              getValueForPixel: function (e) {
                var t = this,
                  n = Math.max(t.ticks.length - (t.options.gridLines.offsetGridLines ? 0 : 1), 1),
                  i = t.isHorizontal(),
                  r = (i ? t.width : t.height) / n;
                return e -= i ? t.left : t.top, t.options.gridLines.offsetGridLines && (e -= r / 2), e <= 0 ? 0 : Math.round(e / r)
              },
              getBasePixel: function () {
                return this.bottom
              }
            });
          e.scaleService.registerScaleType("category", i, n)
        }
      }, {}],
      45: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          var t = e.helpers,
            n = {
              position: "left",
              ticks: {
                callback: e.Ticks.formatters.linear
              }
            },
            i = e.LinearScaleBase.extend({
              determineDataLimits: function () {
                function e(e) {
                  return s ? e.xAxisID === n.id : e.yAxisID === n.id
                }
                var n = this,
                  i = n.options,
                  r = n.chart,
                  o = r.data,
                  a = o.datasets,
                  s = n.isHorizontal();
                n.min = null, n.max = null;
                var l = i.stacked;
                if (void 0 === l && t.each(a, function (t, n) {
                    if (!l) {
                      var i = r.getDatasetMeta(n);
                      r.isDatasetVisible(n) && e(i) && void 0 !== i.stack && (l = !0)
                    }
                  }), i.stacked || l) {
                  var c = {};
                  t.each(a, function (o, a) {
                    var s = r.getDatasetMeta(a),
                      l = [s.type, void 0 === i.stacked && void 0 === s.stack ? a : "", s.stack].join(".");
                    void 0 === c[l] && (c[l] = {
                      positiveValues: [],
                      negativeValues: []
                    });
                    var u = c[l].positiveValues,
                      d = c[l].negativeValues;
                    r.isDatasetVisible(a) && e(s) && t.each(o.data, function (e, t) {
                      var r = +n.getRightValue(e);
                      isNaN(r) || s.data[t].hidden || (u[t] = u[t] || 0, d[t] = d[t] || 0, i.relativePoints ? u[t] = 100 : r < 0 ? d[t] += r : u[t] += r)
                    })
                  }), t.each(c, function (e) {
                    var i = e.positiveValues.concat(e.negativeValues),
                      r = t.min(i),
                      o = t.max(i);
                    n.min = null === n.min ? r : Math.min(n.min, r), n.max = null === n.max ? o : Math.max(n.max, o)
                  })
                } else t.each(a, function (i, o) {
                  var a = r.getDatasetMeta(o);
                  r.isDatasetVisible(o) && e(a) && t.each(i.data, function (e, t) {
                    var i = +n.getRightValue(e);
                    isNaN(i) || a.data[t].hidden || (null === n.min ? n.min = i : i < n.min && (n.min = i), null === n.max ? n.max = i : i > n.max && (n.max = i))
                  })
                });
                n.min = isFinite(n.min) ? n.min : 0, n.max = isFinite(n.max) ? n.max : 1, this.handleTickRangeOptions()
              },
              getTickLimit: function () {
                var n, i = this,
                  r = i.options.ticks;
                if (i.isHorizontal()) n = Math.min(r.maxTicksLimit ? r.maxTicksLimit : 11, Math.ceil(i.width / 50));
                else {
                  var o = t.getValueOrDefault(r.fontSize, e.defaults.global.defaultFontSize);
                  n = Math.min(r.maxTicksLimit ? r.maxTicksLimit : 11, Math.ceil(i.height / (2 * o)))
                }
                return n
              },
              handleDirectionalChanges: function () {
                this.isHorizontal() || this.ticks.reverse()
              },
              getLabelForIndex: function (e, t) {
                return +this.getRightValue(this.chart.data.datasets[t].data[e])
              },
              getPixelForValue: function (e) {
                var t, n = this,
                  i = n.start,
                  r = +n.getRightValue(e),
                  o = n.end - i;
                return n.isHorizontal() ? (t = n.left + n.width / o * (r - i), Math.round(t)) : (t = n.bottom - n.height / o * (r - i), Math.round(t))
              },
              getValueForPixel: function (e) {
                var t = this,
                  n = t.isHorizontal(),
                  i = n ? t.width : t.height,
                  r = (n ? e - t.left : t.bottom - e) / i;
                return t.start + (t.end - t.start) * r
              },
              getPixelForTick: function (e) {
                return this.getPixelForValue(this.ticksAsNumbers[e])
              }
            });
          e.scaleService.registerScaleType("linear", i, n)
        }
      }, {}],
      46: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          var t = e.helpers,
            n = t.noop;
          e.LinearScaleBase = e.Scale.extend({
            handleTickRangeOptions: function () {
              var e = this,
                n = e.options,
                i = n.ticks;
              if (i.beginAtZero) {
                var r = t.sign(e.min),
                  o = t.sign(e.max);
                r < 0 && o < 0 ? e.max = 0 : r > 0 && o > 0 && (e.min = 0)
              }
              void 0 !== i.min ? e.min = i.min : void 0 !== i.suggestedMin && (null === e.min ? e.min = i.suggestedMin : e.min = Math.min(e.min, i.suggestedMin)), void 0 !== i.max ? e.max = i.max : void 0 !== i.suggestedMax && (null === e.max ? e.max = i.suggestedMax : e.max = Math.max(e.max, i.suggestedMax)), e.min === e.max && (e.max++, i.beginAtZero || e.min--)
            },
            getTickLimit: n,
            handleDirectionalChanges: n,
            buildTicks: function () {
              var n = this,
                i = n.options,
                r = i.ticks,
                o = n.getTickLimit();
              o = Math.max(2, o);
              var a = {
                  maxTicks: o,
                  min: r.min,
                  max: r.max,
                  stepSize: t.getValueOrDefault(r.fixedStepSize, r.stepSize)
                },
                s = n.ticks = e.Ticks.generators.linear(a, n);
              n.handleDirectionalChanges(), n.max = t.max(s), n.min = t.min(s), r.reverse ? (s.reverse(), n.start = n.max, n.end = n.min) : (n.start = n.min, n.end = n.max)
            },
            convertTicksToLabels: function () {
              var t = this;
              t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), e.Scale.prototype.convertTicksToLabels.call(t)
            }
          })
        }
      }, {}],
      47: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          var t = e.helpers,
            n = {
              position: "left",
              ticks: {
                callback: e.Ticks.formatters.logarithmic
              }
            },
            i = e.Scale.extend({
              determineDataLimits: function () {
                function e(e) {
                  return c ? e.xAxisID === n.id : e.yAxisID === n.id
                }
                var n = this,
                  i = n.options,
                  r = i.ticks,
                  o = n.chart,
                  a = o.data,
                  s = a.datasets,
                  l = t.getValueOrDefault,
                  c = n.isHorizontal();
                n.min = null, n.max = null, n.minNotZero = null;
                var u = i.stacked;
                if (void 0 === u && t.each(s, function (t, n) {
                    if (!u) {
                      var i = o.getDatasetMeta(n);
                      o.isDatasetVisible(n) && e(i) && void 0 !== i.stack && (u = !0)
                    }
                  }), i.stacked || u) {
                  var d = {};
                  t.each(s, function (r, a) {
                    var s = o.getDatasetMeta(a),
                      l = [s.type, void 0 === i.stacked && void 0 === s.stack ? a : "", s.stack].join(".");
                    o.isDatasetVisible(a) && e(s) && (void 0 === d[l] && (d[l] = []), t.each(r.data, function (e, t) {
                      var r = d[l],
                        o = +n.getRightValue(e);
                      isNaN(o) || s.data[t].hidden || (r[t] = r[t] || 0, i.relativePoints ? r[t] = 100 : r[t] += o)
                    }))
                  }), t.each(d, function (e) {
                    var i = t.min(e),
                      r = t.max(e);
                    n.min = null === n.min ? i : Math.min(n.min, i), n.max = null === n.max ? r : Math.max(n.max, r)
                  })
                } else t.each(s, function (i, r) {
                  var a = o.getDatasetMeta(r);
                  o.isDatasetVisible(r) && e(a) && t.each(i.data, function (e, t) {
                    var i = +n.getRightValue(e);
                    isNaN(i) || a.data[t].hidden || (null === n.min ? n.min = i : i < n.min && (n.min = i), null === n.max ? n.max = i : i > n.max && (n.max = i), 0 !== i && (null === n.minNotZero || i < n.minNotZero) && (n.minNotZero = i))
                  })
                });
                n.min = l(r.min, n.min), n.max = l(r.max, n.max), n.min === n.max && (0 !== n.min && null !== n.min ? (n.min = Math.pow(10, Math.floor(t.log10(n.min)) - 1), n.max = Math.pow(10, Math.floor(t.log10(n.max)) + 1)) : (n.min = 1, n.max = 10))
              },
              buildTicks: function () {
                var n = this,
                  i = n.options,
                  r = i.ticks,
                  o = {
                    min: r.min,
                    max: r.max
                  },
                  a = n.ticks = e.Ticks.generators.logarithmic(o, n);
                n.isHorizontal() || a.reverse(), n.max = t.max(a), n.min = t.min(a), r.reverse ? (a.reverse(), n.start = n.max, n.end = n.min) : (n.start = n.min, n.end = n.max)
              },
              convertTicksToLabels: function () {
                this.tickValues = this.ticks.slice(), e.Scale.prototype.convertTicksToLabels.call(this)
              },
              getLabelForIndex: function (e, t) {
                return +this.getRightValue(this.chart.data.datasets[t].data[e])
              },
              getPixelForTick: function (e) {
                return this.getPixelForValue(this.tickValues[e])
              },
              getPixelForValue: function (e) {
                var n, i, r, o = this,
                  a = o.start,
                  s = +o.getRightValue(e),
                  l = o.options,
                  c = l.ticks;
                return o.isHorizontal() ? (r = t.log10(o.end) - t.log10(a), 0 === s ? i = o.left : (n = o.width, i = o.left + n / r * (t.log10(s) - t.log10(a)))) : (n = o.height, 0 !== a || c.reverse ? 0 === o.end && c.reverse ? (r = t.log10(o.start) - t.log10(o.minNotZero), i = s === o.end ? o.top : s === o.minNotZero ? o.top + .02 * n : o.top + .02 * n + .98 * n / r * (t.log10(s) - t.log10(o.minNotZero))) : 0 === s ? i = c.reverse ? o.top : o.bottom : (r = t.log10(o.end) - t.log10(a), n = o.height, i = o.bottom - n / r * (t.log10(s) - t.log10(a))) : (r = t.log10(o.end) - t.log10(o.minNotZero), i = s === a ? o.bottom : s === o.minNotZero ? o.bottom - .02 * n : o.bottom - .02 * n - .98 * n / r * (t.log10(s) - t.log10(o.minNotZero)))), i
              },
              getValueForPixel: function (e) {
                var n, i, r = this,
                  o = t.log10(r.end) - t.log10(r.start);
                return r.isHorizontal() ? (i = r.width, n = r.start * Math.pow(10, (e - r.left) * o / i)) : (i = r.height, n = Math.pow(10, (r.bottom - e) * o / i) / r.start), n
              }
            });
          e.scaleService.registerScaleType("logarithmic", i, n)
        }
      }, {}],
      48: [function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          function t(e) {
            var t = e.options;
            return t.angleLines.display || t.pointLabels.display ? e.chart.data.labels.length : 0
          }

          function n(e) {
            var t = e.options.pointLabels,
              n = h.getValueOrDefault(t.fontSize, p.defaultFontSize),
              i = h.getValueOrDefault(t.fontStyle, p.defaultFontStyle),
              r = h.getValueOrDefault(t.fontFamily, p.defaultFontFamily);
            return {
              size: n,
              style: i,
              family: r,
              font: h.fontString(n, i, r)
            }
          }

          function i(e, t, n) {
            return h.isArray(n) ? {
              w: h.longestText(e, e.font, n),
              h: n.length * t + 1.5 * (n.length - 1) * t
            } : {
              w: e.measureText(n).width,
              h: t
            }
          }

          function r(e, t, n, i, r) {
            return e === i || e === r ? {
              start: t - n / 2,
              end: t + n / 2
            } : e < i || e > r ? {
              start: t - n - 5,
              end: t
            } : {
              start: t,
              end: t + n + 5
            }
          }

          function o(e) {
            var o, a, s, l = n(e),
              c = Math.min(e.height / 2, e.width / 2),
              u = {
                r: e.width,
                l: 0,
                t: e.height,
                b: 0
              },
              d = {};
            e.ctx.font = l.font, e._pointLabelSizes = [];
            var f = t(e);
            for (o = 0; o < f; o++) {
              s = e.getPointPosition(o, c), a = i(e.ctx, l.size, e.pointLabels[o] || ""), e._pointLabelSizes[o] = a;
              var p = e.getIndexAngle(o),
                m = h.toDegrees(p) % 360,
                g = r(m, s.x, a.w, 0, 180),
                v = r(m, s.y, a.h, 90, 270);
              g.start < u.l && (u.l = g.start, d.l = p), g.end > u.r && (u.r = g.end, d.r = p), v.start < u.t && (u.t = v.start, d.t = p), v.end > u.b && (u.b = v.end, d.b = p)
            }
            e.setReductions(c, u, d)
          }

          function a(e) {
            var t = Math.min(e.height / 2, e.width / 2);
            e.drawingArea = Math.round(t), e.setCenterPoint(0, 0, 0, 0)
          }

          function s(e) {
            return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right"
          }

          function l(e, t, n, i) {
            if (h.isArray(t))
              for (var r = n.y, o = 1.5 * i, a = 0; a < t.length; ++a) e.fillText(t[a], n.x, r), r += o;
            else e.fillText(t, n.x, n.y)
          }

          function c(e, t, n) {
            90 === e || 270 === e ? n.y -= t.h / 2 : (e > 270 || e < 90) && (n.y -= t.h)
          }

          function u(e) {
            var i = e.ctx,
              r = h.getValueOrDefault,
              o = e.options,
              a = o.angleLines,
              u = o.pointLabels;
            i.lineWidth = a.lineWidth, i.strokeStyle = a.color;
            var d = e.getDistanceFromCenterForValue(o.reverse ? e.min : e.max),
              f = n(e);
            i.textBaseline = "top";
            for (var m = t(e) - 1; m >= 0; m--) {
              if (a.display) {
                var g = e.getPointPosition(m, d);
                i.beginPath(), i.moveTo(e.xCenter, e.yCenter), i.lineTo(g.x, g.y), i.stroke(), i.closePath()
              }
              if (u.display) {
                var v = e.getPointPosition(m, d + 5),
                  y = r(u.fontColor, p.defaultFontColor);
                i.font = f.font, i.fillStyle = y;
                var b = e.getIndexAngle(m),
                  x = h.toDegrees(b);
                i.textAlign = s(x), c(x, e._pointLabelSizes[m], v), l(i, e.pointLabels[m] || "", v, f.size)
              }
            }
          }

          function d(e, n, i, r) {
            var o = e.ctx;
            if (o.strokeStyle = h.getValueAtIndexOrDefault(n.color, r - 1), o.lineWidth = h.getValueAtIndexOrDefault(n.lineWidth, r - 1), e.options.gridLines.circular) o.beginPath(), o.arc(e.xCenter, e.yCenter, i, 0, 2 * Math.PI), o.closePath(), o.stroke();
            else {
              var a = t(e);
              if (0 === a) return;
              o.beginPath();
              var s = e.getPointPosition(0, i);
              o.moveTo(s.x, s.y);
              for (var l = 1; l < a; l++) s = e.getPointPosition(l, i), o.lineTo(s.x, s.y);
              o.closePath(), o.stroke()
            }
          }

          function f(e) {
            return h.isNumber(e) ? e : 0
          }
          var h = e.helpers,
            p = e.defaults.global,
            m = {
              display: !0,
              animate: !0,
              position: "chartArea",
              angleLines: {
                display: !0,
                color: "rgba(0, 0, 0, 0.1)",
                lineWidth: 1
              },
              gridLines: {
                circular: !1
              },
              ticks: {
                showLabelBackdrop: !0,
                backdropColor: "rgba(255,255,255,0.75)",
                backdropPaddingY: 2,
                backdropPaddingX: 2,
                callback: e.Ticks.formatters.linear
              },
              pointLabels: {
                display: !0,
                fontSize: 10,
                callback: function (e) {
                  return e
                }
              }
            },
            g = e.LinearScaleBase.extend({
              setDimensions: function () {
                var e = this,
                  t = e.options,
                  n = t.ticks;
                e.width = e.maxWidth, e.height = e.maxHeight, e.xCenter = Math.round(e.width / 2), e.yCenter = Math.round(e.height / 2);
                var i = h.min([e.height, e.width]),
                  r = h.getValueOrDefault(n.fontSize, p.defaultFontSize);
                e.drawingArea = t.display ? i / 2 - (r / 2 + n.backdropPaddingY) : i / 2
              },
              determineDataLimits: function () {
                var e = this,
                  t = e.chart,
                  n = Number.POSITIVE_INFINITY,
                  i = Number.NEGATIVE_INFINITY;
                h.each(t.data.datasets, function (r, o) {
                  if (t.isDatasetVisible(o)) {
                    var a = t.getDatasetMeta(o);
                    h.each(r.data, function (t, r) {
                      var o = +e.getRightValue(t);
                      isNaN(o) || a.data[r].hidden || (n = Math.min(o, n), i = Math.max(o, i))
                    })
                  }
                }), e.min = n === Number.POSITIVE_INFINITY ? 0 : n, e.max = i === Number.NEGATIVE_INFINITY ? 0 : i, e.handleTickRangeOptions()
              },
              getTickLimit: function () {
                var e = this.options.ticks,
                  t = h.getValueOrDefault(e.fontSize, p.defaultFontSize);
                return Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * t)))
              },
              convertTicksToLabels: function () {
                var t = this;
                e.LinearScaleBase.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t)
              },
              getLabelForIndex: function (e, t) {
                return +this.getRightValue(this.chart.data.datasets[t].data[e])
              },
              fit: function () {
                this.options.pointLabels.display ? o(this) : a(this)
              },
              setReductions: function (e, t, n) {
                var i = this,
                  r = t.l / Math.sin(n.l),
                  o = Math.max(t.r - i.width, 0) / Math.sin(n.r),
                  a = -t.t / Math.cos(n.t),
                  s = -Math.max(t.b - i.height, 0) / Math.cos(n.b);
                r = f(r), o = f(o), a = f(a), s = f(s), i.drawingArea = Math.min(Math.round(e - (r + o) / 2), Math.round(e - (a + s) / 2)), i.setCenterPoint(r, o, a, s)
              },
              setCenterPoint: function (e, t, n, i) {
                var r = this,
                  o = r.width - t - r.drawingArea,
                  a = e + r.drawingArea,
                  s = n + r.drawingArea,
                  l = r.height - i - r.drawingArea;
                r.xCenter = Math.round((a + o) / 2 + r.left), r.yCenter = Math.round((s + l) / 2 + r.top)
              },
              getIndexAngle: function (e) {
                return e * (2 * Math.PI / t(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
              },
              getDistanceFromCenterForValue: function (e) {
                var t = this;
                if (null === e) return 0;
                var n = t.drawingArea / (t.max - t.min);
                return t.options.reverse ? (t.max - e) * n : (e - t.min) * n
              },
              getPointPosition: function (e, t) {
                var n = this,
                  i = n.getIndexAngle(e) - Math.PI / 2;
                return {
                  x: Math.round(Math.cos(i) * t) + n.xCenter,
                  y: Math.round(Math.sin(i) * t) + n.yCenter
                }
              },
              getPointPositionForValue: function (e, t) {
                return this.getPointPosition(e, this.getDistanceFromCenterForValue(t))
              },
              getBasePosition: function () {
                var e = this,
                  t = e.min,
                  n = e.max;
                return e.getPointPositionForValue(0, e.beginAtZero ? 0 : t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0)
              },
              draw: function () {
                var e = this,
                  t = e.options,
                  n = t.gridLines,
                  i = t.ticks,
                  r = h.getValueOrDefault;
                if (t.display) {
                  var o = e.ctx,
                    a = r(i.fontSize, p.defaultFontSize),
                    s = r(i.fontStyle, p.defaultFontStyle),
                    l = r(i.fontFamily, p.defaultFontFamily),
                    c = h.fontString(a, s, l);
                  h.each(e.ticks, function (s, l) {
                    if (l > 0 || t.reverse) {
                      var u = e.getDistanceFromCenterForValue(e.ticksAsNumbers[l]),
                        f = e.yCenter - u;
                      if (n.display && 0 !== l && d(e, n, u, l), i.display) {
                        var h = r(i.fontColor, p.defaultFontColor);
                        if (o.font = c, i.showLabelBackdrop) {
                          var m = o.measureText(s).width;
                          o.fillStyle = i.backdropColor, o.fillRect(e.xCenter - m / 2 - i.backdropPaddingX, f - a / 2 - i.backdropPaddingY, m + 2 * i.backdropPaddingX, a + 2 * i.backdropPaddingY)
                        }
                        o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = h, o.fillText(s, e.xCenter, f)
                      }
                    }
                  }), (t.angleLines.display || t.pointLabels.display) && u(e)
                }
              }
            });
          e.scaleService.registerScaleType("radialLinear", g, m)
        }
      }, {}],
      49: [function (e, t, n) {
        "use strict";
        var i = e(1);
        i = "function" == typeof i ? i : window.moment, t.exports = function (e) {
          function t(e, t) {
            var n = e.options.time;
            if ("string" == typeof n.parser) return i(t, n.parser);
            if ("function" == typeof n.parser) return n.parser(t);
            if ("function" == typeof t.getMonth || "number" == typeof t) return i(t);
            if (t.isValid && t.isValid()) return t;
            var r = n.format;
            return "string" != typeof r && r.call ? (console.warn("options.time.format is deprecated and replaced by options.time.parser."), r(t)) : i(t, r)
          }

          function n(e, t, n, i) {
            for (var r, o = Object.keys(s), a = o.length, l = o.indexOf(e); l < a; l++) {
              r = o[l];
              var c = s[r],
                u = c.steps && c.steps[c.steps.length - 1] || c.maxStep;
              if (void 0 === u || Math.ceil((n - t) / (u * c.size)) <= i) break
            }
            return r
          }

          function r(e, t, n, i) {
            var r = s[n],
              o = r.size,
              a = Math.ceil((t - e) / o),
              l = 1,
              c = t - e;
            if (r.steps)
              for (var u = r.steps.length, d = 0; d < u && a > i; d++) l = r.steps[d], a = Math.ceil(c / (o * l));
            else
              for (; a > i && i > 0;) ++l, a = Math.ceil(c / (o * l));
            return l
          }

          function o(e, t, n) {
            var r = [];
            if (e.maxTicks) {
              var o = e.stepSize;
              r.push(void 0 !== e.min ? e.min : n.min);
              for (var a = i(n.min); a.add(o, e.unit).valueOf() < n.max;) r.push(a.valueOf());
              var s = e.max || n.max;
              r[r.length - 1] !== s && r.push(s)
            }
            return r
          }
          var a = e.helpers,
            s = {
              millisecond: {
                size: 1,
                steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
              },
              second: {
                size: 1e3,
                steps: [1, 2, 5, 10, 30]
              },
              minute: {
                size: 6e4,
                steps: [1, 2, 5, 10, 30]
              },
              hour: {
                size: 36e5,
                steps: [1, 2, 3, 6, 12]
              },
              day: {
                size: 864e5,
                steps: [1, 2, 5]
              },
              week: {
                size: 6048e5,
                maxStep: 4
              },
              month: {
                size: 2628e6,
                maxStep: 3
              },
              quarter: {
                size: 7884e6,
                maxStep: 4
              },
              year: {
                size: 3154e7,
                maxStep: !1
              }
            },
            l = {
              position: "bottom",
              time: {
                parser: !1,
                format: !1,
                unit: !1,
                round: !1,
                displayFormat: !1,
                isoWeekday: !1,
                minUnit: "millisecond",
                displayFormats: {
                  millisecond: "h:mm:ss.SSS a",
                  second: "h:mm:ss a",
                  minute: "h:mm:ss a",
                  hour: "MMM D, hA",
                  day: "ll",
                  week: "ll",
                  month: "MMM YYYY",
                  quarter: "[Q]Q - YYYY",
                  year: "YYYY"
                }
              },
              ticks: {
                autoSkip: !1
              }
            };
          e.Ticks.generators.time = function (e, t) {
            var n, r, a = e.isoWeekday;
            return "week" === e.unit && a !== !1 ? (n = i(t.min).startOf("isoWeek").isoWeekday(a).valueOf(), r = i(t.max).startOf("isoWeek").isoWeekday(a), t.max - r > 0 && r.add(1, "week"), r = r.valueOf()) : (n = i(t.min).startOf(e.unit).valueOf(), r = i(t.max).startOf(e.unit), t.max - r > 0 && r.add(1, e.unit), r = r.valueOf()), o(e, t, {
              min: n,
              max: r
            })
          };
          var c = e.Scale.extend({
            initialize: function () {
              if (!i) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
              e.Scale.prototype.initialize.call(this)
            },
            determineDataLimits: function () {
              var e, n = this,
                i = n.options.time,
                r = Number.MAX_SAFE_INTEGER,
                o = Number.MIN_SAFE_INTEGER,
                s = n.chart.data,
                l = {
                  labels: [],
                  datasets: []
                };
              a.each(s.labels, function (a, s) {
                var c = t(n, a);
                c.isValid() && (i.round && c.startOf(i.round), e = c.valueOf(), r = Math.min(e, r), o = Math.max(e, o), l.labels[s] = e)
              }), a.each(s.datasets, function (s, c) {
                var u = [];
                "object" == typeof s.data[0] && null !== s.data[0] && n.chart.isDatasetVisible(c) ? a.each(s.data, function (a, s) {
                  var l = t(n, n.getRightValue(a));
                  l.isValid() && (i.round && l.startOf(i.round), e = l.valueOf(), r = Math.min(e, r), o = Math.max(e, o), u[s] = e)
                }) : u = l.labels.slice(), l.datasets[c] = u
              }), n.dataMin = r, n.dataMax = o, n._parsedData = l
            },
            buildTicks: function () {
              var i, o, s = this,
                l = s.options.time,
                c = s.dataMin,
                u = s.dataMax;
              if (l.min) {
                var d = t(s, l.min);
                l.round && d.round(l.round), i = d.valueOf()
              }
              l.max && (o = t(s, l.max).valueOf());
              var f = s.getLabelCapacity(i || c),
                h = l.unit || n(l.minUnit, i || c, o || u, f);
              s.displayFormat = l.displayFormats[h];
              var p = l.stepSize || r(i || c, o || u, h, f);
              s.ticks = e.Ticks.generators.time({
                maxTicks: f,
                min: i,
                max: o,
                stepSize: p,
                unit: h,
                isoWeekday: l.isoWeekday
              }, {
                min: c,
                max: u
              }), s.max = a.max(s.ticks), s.min = a.min(s.ticks)
            },
            getLabelForIndex: function (e, n) {
              var i = this,
                r = i.chart.data.labels && e < i.chart.data.labels.length ? i.chart.data.labels[e] : "",
                o = i.chart.data.datasets[n].data[e];
              return null !== o && "object" == typeof o && (r = i.getRightValue(o)), i.options.time.tooltipFormat && (r = t(i, r).format(i.options.time.tooltipFormat)), r
            },
            tickFormatFunction: function (e, t, n) {
              var i = e.format(this.displayFormat),
                r = this.options.ticks,
                o = a.getValueOrDefault(r.callback, r.userCallback);
              return o ? o(i, t, n) : i
            },
            convertTicksToLabels: function () {
              var e = this;
              e.ticksAsTimestamps = e.ticks, e.ticks = e.ticks.map(function (e) {
                return i(e)
              }).map(e.tickFormatFunction, e)
            },
            getPixelForOffset: function (e) {
              var t = this,
                n = t.max - t.min,
                i = n ? (e - t.min) / n : 0;
              if (t.isHorizontal()) {
                var r = t.width * i;
                return t.left + Math.round(r)
              }
              var o = t.height * i;
              return t.top + Math.round(o)
            },
            getPixelForValue: function (e, n, i) {
              var r = this,
                o = null;
              if (void 0 !== n && void 0 !== i && (o = r._parsedData.datasets[i][n]), null === o && (e && e.isValid || (e = t(r, r.getRightValue(e))), e && e.isValid && e.isValid() && (o = e.valueOf())), null !== o) return r.getPixelForOffset(o)
            },
            getPixelForTick: function (e) {
              return this.getPixelForOffset(this.ticksAsTimestamps[e])
            },
            getValueForPixel: function (e) {
              var t = this,
                n = t.isHorizontal() ? t.width : t.height,
                r = (e - (t.isHorizontal() ? t.left : t.top)) / n;
              return i(t.min + r * (t.max - t.min))
            },
            getLabelWidth: function (t) {
              var n = this,
                i = n.options.ticks,
                r = n.ctx.measureText(t).width,
                o = Math.cos(a.toRadians(i.maxRotation)),
                s = Math.sin(a.toRadians(i.maxRotation));
              return r * o + a.getValueOrDefault(i.fontSize, e.defaults.global.defaultFontSize) * s
            },
            getLabelCapacity: function (e) {
              var t = this;
              t.displayFormat = t.options.time.displayFormats.millisecond;
              var n = t.tickFormatFunction(i(e), 0, []),
                r = t.getLabelWidth(n);
              return (t.isHorizontal() ? t.width : t.height) / r
            }
          });
          e.scaleService.registerScaleType("time", c, l)
        }
      }, {
        1: 1
      }]
    }, {}, [7])(7)
  });
var WOW = function (e) {
  var t = e || {};
  this._boxClass = t.boxClass || "wow", this._animateClass = t.animateClass || "animated", this._offset = t.offset || 0, this._mobile = void 0 === t.mobile, this._live = void 0 === t.live, this._seoFixEnabled = void 0 === t.seoFixEnabled, this._animationDuration = t.animationDuration || "1s", this._animationDelay = t.animationDelay || "0s", this._initStorageVariables()
};
WOW.prototype._initStorageVariables = function () {
  this._animation = [], this._boxes = [], this._cleanupBoxListener = [], this._cleanupBoxVisibleListener = []
}, WOW.prototype.init = function () {
  !this._mobile && this._isMobile() || (this._eachBoxInit(this._prepareBox.bind(this)), this._startWow())
}, WOW.prototype._isMobile = function () {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}, WOW.prototype._eachBoxInit = function (e) {
  for (var t = document.getElementsByClassName(this._boxClass), n = 0; n < t.length; n++) ! function (n) {
    e(t[n], n)
  }(n)
}, WOW.prototype._prepareBox = function (e) {
  var t = this._boxes.push(e) - 1;
  this._animation[t] = {
    animationName: e.style.animationName || window.getComputedStyle(e, null).animationName
  }, e.style.animationName = "none", e.style.visibility = "hidden"
}, WOW.prototype._startWow = function () {
  this._live && this._checkForChanges(), 0 === this._scrollY() && this._seoFixEnabled && this._seoFix(), this._appearInView(), this._scrollHandler()
}, WOW.prototype._scrollY = function () {
  return this._isInt(window.pageYOffset) ? window.pageYOffset : this._isInt(document.documentElement.scrollTop) ? document.documentElement.scrollTop : this._isInt(document.body.scrollTop) ? document.body.scrollTop : void 0
}, WOW.prototype._isInt = function (e) {
  return "number" == typeof e && isFinite(e) && Math.floor(e) === e
}, WOW.prototype._seoFix = function () {
  this._showNotInView()
}, WOW.prototype._appear = function (e, t) {
  e.style.animationPlayState || e.style.WebkitAnimationPlayState;
  e.className.indexOf(this._animateClass) === -1 && (delete this._boxes[t], this._onStartAnimation(e, t), this._onStopAnimation(e, t), this._animate(e, t, this._getAnimationConfig(e)))
}, WOW.prototype._onStartAnimation = function (e, t) {
  this._cleanupBoxVisibleListener[t] = this._boxVisible.bind(this, e, t), e.addEventListener("animationstart", this._cleanupBoxVisibleListener[t]), e.addEventListener("webkitAnimationStart", this._cleanupBoxVisibleListener[t])
}, WOW.prototype._onStopAnimation = function (e, t) {
  this._cleanupBoxListener[t] = this._cleanupBox.bind(this, e, t), e.addEventListener("animationend", this._cleanupBoxListener[t]), e.addEventListener("webkitAnimationEnd", this._cleanupBoxListener[t])
}, WOW.prototype._getAnimationConfig = function (e) {
  return {
    delay: this._getDelay(e),
    duration: this._getDuration(e),
    iterations: this._getIterations(e)
  }
}, WOW.prototype._getDelay = function (e) {
  return e.getAttribute("data-wow-delay") || this._animationDelay
}, WOW.prototype._getDuration = function (e) {
  return e.getAttribute("data-wow-duration") || this._animationDuration
}, WOW.prototype._getIterations = function (e) {
  return e.getAttribute("data-wow-iteration") || e.style.animationIterationCount || window.getComputedStyle(e, null).animationIterationCount || 1
}, WOW.prototype._animate = function (e, t, n) {
  e.style.animationDelay = n.delay, e.style.animationDuration = n.duration, e.style.animationIterationCount = n.iterations, e.style.animationName = this._animation[t].animationName, e.className += " " + this._animateClass
}, WOW.prototype._boxVisible = function (e, t) {
  e.style.visibility = "visible", e.removeEventListener("animationstart", this._cleanupBoxVisibleListener[t]), e.removeEventListener("webkitAnimationStart", this._cleanupBoxVisibleListener[t]), delete this._cleanupBoxVisibleListener[t]
}, WOW.prototype._cleanupBox = function (e, t) {
  e.style.animationDelay = "", e.style.animationDuration = "", e.style.animationIterationCount = "", e.style.animationName = "none", this._cleanupClass(e), e.removeEventListener("animationend", this._cleanupBoxListener[t]), e.removeEventListener("webkitAnimationEnd", this._cleanupBoxListener[t]), delete this._cleanupBoxListener[t]
}, WOW.prototype._cleanupClass = function (e) {
  var t = e.className.split(" "),
    n = t.indexOf(this._animateClass);
  n !== -1 && (t.splice(n, 1), e.className = t.join(" "))
}, WOW.prototype._eachBox = function (e) {
  for (var t = 0; t < this._boxes.length; t++) {
    this._boxes[t] && function (t) {
      e(this._boxes[t], t)
    }.bind(this)(t)
  }
}, WOW.prototype._scrollHandler = function () {
  this._hideSeoFixListener = this._hideSeoFix.bind(this), window.addEventListener("scroll", this._hideSeoFixListener), window.addEventListener("scroll", this._appearInView.bind(this)), window.addEventListener("resize", this._appearInView.bind(this))
}, WOW.prototype._hideSeoFix = function () {
  window.removeEventListener("scroll", this._hideSeoFixListener), delete this._hideSeoFixListener, this._eachBox(function (e, t) {
    this._isInView(e) || (e.style.visibility = "hidden")
  }.bind(this))
}, WOW.prototype._appearInView = function () {
  this._eachBox(function (e, t) {
    this._animateBox(e, t)
  }.bind(this))
}, WOW.prototype._animateBox = function (e, t) {
  this._isInView(e) && (delete this._boxes[t], this._appear(e, t))
}, WOW.prototype._showNotInView = function () {
  this._eachBox(function (e, t) {
    this._makeVisible(e, t)
  }.bind(this))
}, WOW.prototype._makeVisible = function (e, t) {
  this._isInView(e) || (this._boxes[t].style.visibility = "visible")
}, WOW.prototype._isInView = function (e) {
  var t = e.getAttribute("data-wow-offset") || this._offset,
    n = this._getElementOffset(e),
    i = n + ~~t;
  return i <= window.innerHeight + this._scrollY() && (0 === i ? 10 : i) >= this._scrollY()
}, WOW.prototype._getElementOffset = function (e) {
  var t = e.getBoundingClientRect(),
    n = document.body,
    i = this._scrollY(),
    r = document.documentElement.clientTop || n.clientTop || 0,
    o = t.top + i - r;
  return Math.round(o)
}, WOW.prototype._checkForChanges = function () {
  var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
    t = new e(this._mutations.bind(this)),
    n = {
      childList: !0,
      subtree: !0
    };
  t.observe(document.body, n)
}, WOW.prototype._mutations = function (e) {
  e.forEach(function (e) {
    for (var t = 0; t < e.addedNodes.length; t++) this.doSync(e.addedNodes[t])
  }.bind(this))
}, WOW.prototype.doSync = function (e) {
  if (e.className) {
    e.className.split(" ").indexOf(this._boxClass) !== -1 && this._prepareBox(e)
  }
};
var OFFSET_TOP = 50;
$(window).scroll(function () {
    $(".navbar").offset().top > OFFSET_TOP ? $(".scrolling-navbar").addClass("top-nav-collapse") : $(".scrolling-navbar").removeClass("top-nav-collapse")
  }),
  function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define([], function () {
      return t.apply(e)
    }) : "object" == typeof exports ? module.exports = t.call(e) : e.Waves = t.call(e)
  }("object" == typeof global ? global : this, function () {
    "use strict";

    function e(e) {
      return null !== e && e === e.window
    }

    function t(t) {
      return e(t) ? t : 9 === t.nodeType && t.defaultView
    }

    function n(e) {
      var t = typeof e;
      return "function" === t || "object" === t && !!e
    }

    function i(e) {
      return n(e) && e.nodeType > 0
    }

    function r(e) {
      var t = f.call(e);
      return "[object String]" === t ? d(e) : n(e) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(t) && e.hasOwnProperty("length") ? e : i(e) ? [e] : []
    }

    function o(e) {
      var n, i, r = {
          top: 0,
          left: 0
        },
        o = e && e.ownerDocument;
      return n = o.documentElement, void 0 !== e.getBoundingClientRect && (r = e.getBoundingClientRect()), i = t(o), {
        top: r.top + i.pageYOffset - n.clientTop,
        left: r.left + i.pageXOffset - n.clientLeft
      }
    }

    function a(e) {
      var t = "";
      for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
      return t
    }

    function s(e, t, n) {
      if (n) {
        n.classList.remove("waves-rippling");
        var i = n.getAttribute("data-x"),
          r = n.getAttribute("data-y"),
          o = n.getAttribute("data-scale"),
          s = n.getAttribute("data-translate"),
          l = Date.now() - Number(n.getAttribute("data-hold")),
          c = 350 - l;
        c < 0 && (c = 0), "mousemove" === e.type && (c = 150);
        var u = "mousemove" === e.type ? 2500 : p.duration;
        setTimeout(function () {
          var e = {
            top: r + "px",
            left: i + "px",
            opacity: "0",
            "-webkit-transition-duration": u + "ms",
            "-moz-transition-duration": u + "ms",
            "-o-transition-duration": u + "ms",
            "transition-duration": u + "ms",
            "-webkit-transform": o + " " + s,
            "-moz-transform": o + " " + s,
            "-ms-transform": o + " " + s,
            "-o-transform": o + " " + s,
            transform: o + " " + s
          };
          n.setAttribute("style", a(e)), setTimeout(function () {
            try {
              t.removeChild(n)
            } catch (e) {
              return !1
            }
          }, u)
        }, c)
      }
    }

    function l(e) {
      if (g.allowEvent(e) === !1) return null;
      for (var t = null, n = e.target || e.srcElement; null !== n.parentElement;) {
        if (n.classList.contains("waves-effect") && !(n instanceof SVGElement)) {
          t = n;
          break
        }
        n = n.parentElement
      }
      return t
    }

    function c(e) {
      var t = l(e);
      if (null !== t) {
        if (t.disabled || t.getAttribute("disabled") || t.classList.contains("disabled")) return;
        if (g.registerEvent(e), "touchstart" === e.type && p.delay) {
          var n = !1,
            i = setTimeout(function () {
              i = null, p.show(e, t)
            }, p.delay),
            r = function (r) {
              i && (clearTimeout(i), i = null, p.show(e, t)), n || (n = !0, p.hide(r, t))
            },
            o = function (e) {
              i && (clearTimeout(i), i = null), r(e)
            };
          t.addEventListener("touchmove", o, !1), t.addEventListener("touchend", r, !1), t.addEventListener("touchcancel", r, !1)
        } else p.show(e, t), h && (t.addEventListener("touchend", p.hide, !1), t.addEventListener("touchcancel", p.hide, !1)), t.addEventListener("mouseup", p.hide, !1), t.addEventListener("mouseleave", p.hide, !1)
      }
    }
    var u = u || {},
      d = document.querySelectorAll.bind(document),
      f = Object.prototype.toString,
      h = "ontouchstart" in window,
      p = {
        duration: 750,
        delay: 200,
        show: function (e, t, n) {
          if (2 === e.button) return !1;
          t = t || this;
          var i = document.createElement("div");
          i.className = "waves-ripple waves-rippling", t.appendChild(i);
          var r = o(t),
            s = 0,
            l = 0;
          "touches" in e && e.touches.length ? (s = e.touches[0].pageY - r.top, l = e.touches[0].pageX - r.left) : (s = e.pageY - r.top, l = e.pageX - r.left), l = l >= 0 ? l : 0, s = s >= 0 ? s : 0;
          var c = "scale(" + t.clientWidth / 100 * 3 + ")",
            u = "translate(0,0)";
          n && (u = "translate(" + n.x + "px, " + n.y + "px)"), i.setAttribute("data-hold", Date.now()), i.setAttribute("data-x", l), i.setAttribute("data-y", s), i.setAttribute("data-scale", c), i.setAttribute("data-translate", u);
          var d = {
            top: s + "px",
            left: l + "px"
          };
          i.classList.add("waves-notransition"), i.setAttribute("style", a(d)), i.classList.remove("waves-notransition"), d["-webkit-transform"] = c + " " + u, d["-moz-transform"] = c + " " + u, d["-ms-transform"] = c + " " + u, d["-o-transform"] = c + " " + u, d.transform = c + " " + u, d.opacity = "1";
          var f = "mousemove" === e.type ? 2500 : p.duration;
          d["-webkit-transition-duration"] = f + "ms", d["-moz-transition-duration"] = f + "ms", d["-o-transition-duration"] = f + "ms", d["transition-duration"] = f + "ms", i.setAttribute("style", a(d))
        },
        hide: function (e, t) {
          t = t || this;
          for (var n = t.getElementsByClassName("waves-rippling"), i = 0, r = n.length; i < r; i++) s(e, t, n[i])
        }
      },
      m = {
        input: function (e) {
          var t = e.parentNode;
          if ("div" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
            var n = document.createElement("div");
            n.className = "waves-input-wrapper", t.replaceChild(n, e), n.appendChild(e);
            var i = window.getComputedStyle(e, null);
            i.color, i.backgroundColor
          }
        },
        img: function (e) {
          var t = e.parentNode;
          if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
            var n = document.createElement("i");
            t.replaceChild(n, e), n.appendChild(e)
          }
        }
      },
      g = {
        touches: 0,
        allowEvent: function (e) {
          var t = !0;
          return /^(mousedown|mousemove)$/.test(e.type) && g.touches && (t = !1), t
        },
        registerEvent: function (e) {
          var t = e.type;
          "touchstart" === t ? g.touches += 1 : /^(touchend|touchcancel)$/.test(t) && setTimeout(function () {
            g.touches && (g.touches -= 1)
          }, 500)
        }
      };
    return u.init = function (e) {
      var t = document.body;
      e = e || {}, "duration" in e && (p.duration = e.duration), "delay" in e && (p.delay = e.delay), h && (t.addEventListener("touchstart", c, !1), t.addEventListener("touchcancel", g.registerEvent, !1), t.addEventListener("touchend", g.registerEvent, !1)), t.addEventListener("mousedown", c, !1)
    }, u.attach = function (e, t) {
      e = r(e), "[object Array]" === f.call(t) && (t = t.join(" ")), t = t ? " " + t : "";
      for (var n, i, o = 0, a = e.length; o < a; o++) n = e[o], i = n.tagName.toLowerCase(), ["input", "img"].indexOf(i) !== -1 && (m[i](n), n = n.parentElement), n.className.indexOf("waves-effect") === -1 && (n.className += " waves-effect" + t)
    }, u.ripple = function (e, t) {
      e = r(e);
      var n = e.length;
      if (t = t || {}, t.wait = t.wait || 0, t.position = t.position || null, n)
        for (var i, a, s, l = {}, c = 0, u = {
            type: "mousedown",
            button: 1
          }; c < n; c++)
          if (i = e[c], a = t.position || {
              x: i.clientWidth / 2,
              y: i.clientHeight / 2
            }, s = o(i), l.x = s.left + a.x, l.y = s.top + a.y, u.pageX = l.x, u.pageY = l.y, p.show(u, i), t.wait >= 0 && null !== t.wait) {
            var d = {
              type: "mouseup",
              button: 1
            };
            setTimeout(function (e, t) {
              return function () {
                p.hide(e, t)
              }
            }(d, i), t.wait)
          }
    }, u.calm = function (e) {
      e = r(e);
      for (var t = {
          type: "mouseup",
          button: 1
        }, n = 0, i = e.length; n < i; n++) p.hide(t, e[n])
    }, u.displayEffect = function (e) {
      console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), u.init(e)
    }, u
  }), Waves.attach(".btn:not(.btn-flat), .btn-floating", ["waves-light"]), Waves.attach(".btn-flat", ["waves-effect"]), Waves.attach(".view .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .navbar form, .nav-tabs .nav-item", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init(),
  function (e) {
    e(document).ready(function () {
      var t = ["text", "password", "email", "url", "tel", "number", "search", "search-md"].map(function (e) {
          return "input[type=" + e + "]"
        }).join(", ") + ", textarea",
        n = function (e) {
          var t = e.siblings("label, i"),
            n = e.val().length,
            i = e.attr("placeholder");
          t[(n || i ? "add" : "remove") + "Class"]("active")
        },
        i = function (e) {
          if (e.hasClass("validate")) {
            var t = e.val(),
              n = !t.length,
              i = !e[0].validity.badInput;
            if (n && i) e.removeClass("valid").removeClass("invalid");
            else {
              var r = e.is(":valid"),
                o = Number(e.attr("length")) || 0;
              r && (!o || o > t.length) ? e.removeClass("invalid").addClass("valid") : e.removeClass("valid").addClass("invalid")
            }
          }
        },
        r = function () {
          var t = e(void 0);
          if (t.val().length) {
            var n = e(".hiddendiv"),
              i = t.css("font-family"),
              r = t.css("font-size");
            r && n.css("font-size", r), i && n.css("font-family", i), "off" === t.attr("wrap") && n.css("overflow-wrap", "normal").css("white-space", "pre"), n.text(t.val() + "\n");
            var o = n.html().replace(/\n/g, "<br>");
            n.html(o), n.css("width", t.is(":visible") ? t.width() : e(window).width() / 2), t.css("height", n.height())
          }
        };
      e(t).each(function (t, i) {
        var r = e(i),
          o = r.siblings("label, i");
        n(r), i.validity.badInput && o.addClass("active")
      }), e(document).on("focus", t, function (t) {
        e(t.target).siblings("label, i").addClass("active")
      }), e(document).on("blur", t, function (t) {
        var n = e(t.target),
          r = !n.val(),
          o = !t.target.validity.badInput,
          a = void 0 === n.attr("placeholder");
        r && o && a && n.siblings("label, i").removeClass("active"), i(n)
      }), e(document).on("change", t, function (t) {
        var r = e(t.target);
        n(r), i(r)
      }), e("input[autofocus]").siblings("label, i").addClass("active"), e(document).on("reset", function (n) {
        var i = e(n.target);
        if (i.is("form")) {
          i.find(t).removeClass("valid").removeClass("invalid").each(function (t, n) {
            var i = e(n),
              r = !i.val(),
              o = !i.attr("placeholder");
            r && o && i.siblings("label, i").removeClass("active")
          }), i.find("select.initialized").each(function (t, n) {
            var i = e(n),
              r = i.siblings("input.select-dropdown"),
              o = i.children("[selected]").val();
            i.val(o), r.val(o)
          })
        }
      }), e(".hiddendiv").first().length || ($hiddenDiv = e('<div class="hiddendiv common"></div>'), e("body").append($hiddenDiv)), e(".materialize-textarea").each(r), e("body").on("keyup keydown", ".materialize-textarea", r)
    })
  }(jQuery), $(document).ready(function () {
    $("#preloader-markup").load("mdb-addons/preloader.html", function () {
      $(window).load(function () {
        $("#mdb-preloader").fadeOut("slow")
      })
    })
  }),
  function (e) {
    e(document).ready(function () {
      e(document).on("click.card", ".card", function (t) {
        var n = e(this);
        if (n.find(".card-reveal").length) {
          var i = e(t.target),
            r = i.is(".card-reveal .card-title"),
            o = i.is(".card-reveal .card-title i"),
            a = i.is(".card .activator"),
            s = i.is(".card .activator i");
          r || o ? n.find(".card-reveal").velocity({
            translateY: 0
          }, {
            duration: 225,
            queue: !1,
            easing: "easeInOutQuad",
            complete: function () {
              e(this).css({
                display: "none"
              })
            }
          }) : (a || s) && n.find(".card-reveal").css({
            display: "block"
          }).velocity("stop", !1).velocity({
            translateY: "-100%"
          }, {
            duration: 300,
            queue: !1,
            easing: "easeInOutQuad"
          })
        }
      }), e(".rotate-btn").on("click", function () {
        e("#" + e(this).attr("data-card")).toggleClass("flipped")
      })
    })
  }(jQuery), $(document).ready(function (e) {
    e(".card-share > a").on("click", function (t) {
      t.preventDefault(), e(this).parent().find("div").toggleClass("social-reveal-active"), e(this).toggleClass("share-expanded")
    })
  }),
  function (e) {
    function t() {
      var t = Number(e(this).attr("length")),
        n = Number(e(this).val().length),
        i = n <= t;
      e(this).parent().find('span[class="character-counter"]').html(n + "/" + t), r(i, e(this))
    }

    function n(t) {
      var n = e("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1);
      t.parent().append(n)
    }

    function i() {
      e(this).parent().find('span[class="character-counter"]').html("")
    }

    function r(e, t) {
      var n = t.hasClass("invalid");
      e && n ? t.removeClass("invalid") : e || n || (t.removeClass("valid"), t.addClass("invalid"))
    }
    e.fn.characterCounter = function () {
      return this.each(function () {
        void 0 !== e(this).attr("length") && (e(this).on("input", t), e(this).on("focus", t), e(this).on("blur", i), n(e(this)))
      })
    }, e(document).ready(function () {
      e("input, textarea").characterCounter()
    })
  }(jQuery),
  function (e) {
    e(["jquery"], function (e) {
      return function () {
        function t(e, t, n) {
          return p({
            type: w.error,
            iconClass: m().iconClasses.error,
            message: e,
            optionsOverride: n,
            title: t
          })
        }

        function n(t, n) {
          return t || (t = m()), v = e("#" + t.containerId), v.length ? v : (n && (v = d(t)), v)
        }

        function i(e, t, n) {
          return p({
            type: w.info,
            iconClass: m().iconClasses.info,
            message: e,
            optionsOverride: n,
            title: t
          })
        }

        function r(e) {
          y = e
        }

        function o(e, t, n) {
          return p({
            type: w.success,
            iconClass: m().iconClasses.success,
            message: e,
            optionsOverride: n,
            title: t
          })
        }

        function a(e, t, n) {
          return p({
            type: w.warning,
            iconClass: m().iconClasses.warning,
            message: e,
            optionsOverride: n,
            title: t
          })
        }

        function s(e, t) {
          var i = m();
          v || n(i), u(e, i, t) || c(i)
        }

        function l(t) {
          var i = m();
          if (v || n(i), t && 0 === e(":focus", t).length) return void g(t);
          v.children().length && v.remove()
        }

        function c(t) {
          for (var n = v.children(), i = n.length - 1; i >= 0; i--) u(e(n[i]), t)
        }

        function u(t, n, i) {
          var r = !(!i || !i.force) && i.force;
          return !(!t || !r && 0 !== e(":focus", t).length) && (t[n.hideMethod]({
            duration: n.hideDuration,
            easing: n.hideEasing,
            complete: function () {
              g(t)
            }
          }), !0)
        }

        function d(t) {
          return v = e("<div/>").attr("id", t.containerId).addClass(t.positionClass).attr("aria-live", "polite").attr("role", "alert"), v.appendTo(e(t.target)), v
        }

        function f() {
          return {
            tapToDismiss: !0,
            toastClass: "toast",
            containerId: "toast-container",
            debug: !1,
            showMethod: "fadeIn",
            showDuration: 300,
            showEasing: "swing",
            onShown: void 0,
            hideMethod: "fadeOut",
            hideDuration: 1e3,
            hideEasing: "swing",
            onHidden: void 0,
            extendedTimeOut: 1e3,
            iconClasses: {
              error: "toast-error",
              info: "toast-info",
              success: "toast-success",
              warning: "toast-warning"
            },
            iconClass: "toast-info",
            positionClass: "toast-top-right",
            timeOut: 5e3,
            titleClass: "toast-title",
            messageClass: "toast-message",
            target: "body",
            closeHtml: '<button type="button">&times;</button>',
            newestOnTop: !0,
            preventDuplicates: !1,
            progressBar: !1
          }
        }

        function h(e) {
          y && y(e)
        }

        function p(t) {
          function i() {
            t.iconClass && C.addClass(p.toastClass).addClass(y)
          }

          function r() {
            p.newestOnTop ? v.prepend(C) : v.append(C)
          }

          function o() {
            t.title && (T.append(t.title).addClass(p.titleClass), C.append(T))
          }

          function a() {
            t.message && (k.append(t.message).addClass(p.messageClass), C.append(k))
          }

          function s() {
            p.closeButton && (S.addClass("toast-close-button").attr("role", "button"), C.prepend(S))
          }

          function l() {
            p.progressBar && (_.addClass("toast-progress"), C.prepend(_))
          }

          function c(t) {
            if (!e(":focus", C).length || t) return clearTimeout(E.intervalId), C[p.hideMethod]({
              duration: p.hideDuration,
              easing: p.hideEasing,
              complete: function () {
                g(C), p.onHidden && "hidden" !== A.state && p.onHidden(), A.state = "hidden", A.endTime = new Date, h(A)
              }
            })
          }

          function u() {
            (p.timeOut > 0 || p.extendedTimeOut > 0) && (w = setTimeout(c, p.extendedTimeOut), E.maxHideTime = parseFloat(p.extendedTimeOut), E.hideEta = (new Date).getTime() + E.maxHideTime)
          }

          function d() {
            clearTimeout(w), E.hideEta = 0, C.stop(!0, !0)[p.showMethod]({
              duration: p.showDuration,
              easing: p.showEasing
            })
          }

          function f() {
            var e = (E.hideEta - (new Date).getTime()) / E.maxHideTime * 100;
            _.width(e + "%")
          }
          var p = m(),
            y = t.iconClass || p.iconClass;
          if (void 0 !== t.optionsOverride && (p = e.extend(p, t.optionsOverride), y = t.optionsOverride.iconClass || y), ! function (e, t) {
              if (e.preventDuplicates) {
                if (t.message === b) return !0;
                b = t.message
              }
              return !1
            }(p, t)) {
            x++, v = n(p, !0);
            var w = null,
              C = e("<div/>"),
              T = e("<div/>"),
              k = e("<div/>"),
              _ = e("<div/>"),
              S = e(p.closeHtml),
              E = {
                intervalId: null,
                hideEta: null,
                maxHideTime: null
              },
              A = {
                toastId: x,
                state: "visible",
                startTime: new Date,
                options: p,
                map: t
              };
            return function () {
                i(), o(), a(), s(), l(), r()
              }(),
              function () {
                C.hide(), C[p.showMethod]({
                  duration: p.showDuration,
                  easing: p.showEasing,
                  complete: p.onShown
                }), p.timeOut > 0 && (w = setTimeout(c, p.timeOut), E.maxHideTime = parseFloat(p.timeOut), E.hideEta = (new Date).getTime() + E.maxHideTime, p.progressBar && (E.intervalId = setInterval(f, 10)))
              }(),
              function () {
                C.hover(d, u), !p.onclick && p.tapToDismiss && C.click(c), p.closeButton && S && S.click(function (e) {
                  e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && e.cancelBubble !== !0 && (e.cancelBubble = !0), c(!0)
                }), p.onclick && C.click(function () {
                  p.onclick(), c()
                })
              }(), h(A), p.debug && console && console.log(A), C
          }
        }

        function m() {
          return e.extend({}, f(), C.options)
        }

        function g(e) {
          v || (v = n()), e.is(":visible") || (e.remove(), e = null, 0 === v.children().length && (v.remove(), b = void 0))
        }
        var v, y, b, x = 0,
          w = {
            error: "error",
            info: "info",
            success: "success",
            warning: "warning"
          },
          C = {
            clear: s,
            remove: l,
            error: t,
            getContainer: n,
            info: i,
            options: {},
            subscribe: r,
            success: o,
            version: "2.1.1",
            warning: a
          };
        return C
      }()
    })
  }("function" == typeof define && define.amd ? define : function (e, t) {
    "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
  }), $(".smooth-scroll").on("click", "a", function (e) {
    e.preventDefault();
    var t = $(this).attr("href"),
      n = $(this).attr("data-offset") ? $(this).attr("data-offset") : 0,
      i = $(this).closest("ul").attr("data-allow-hashes");
    $("body,html").animate({
      scrollTop: $(t).offset().top - n
    }, 700), void 0 !== i && i !== !1 && history.replaceState(null, null, t)
  }),
  function (e) {
    e.fn.scrollTo = function (t) {
      return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top), this
    }, e.fn.dropdown = function (t) {
      var n = {
        inDuration: 300,
        outDuration: 225,
        constrain_width: !0,
        hover: !1,
        gutter: 0,
        belowOrigin: !1,
        alignment: "left"
      };
      this.each(function () {
        function i() {
          void 0 !== a.data("induration") && (s.inDuration = a.data("inDuration")), void 0 !== a.data("outduration") && (s.outDuration = a.data("outDuration")), void 0 !== a.data("constrainwidth") && (s.constrain_width = a.data("constrainwidth")), void 0 !== a.data("hover") && (s.hover = a.data("hover")), void 0 !== a.data("gutter") && (s.gutter = a.data("gutter")), void 0 !== a.data("beloworigin") && (s.belowOrigin = a.data("beloworigin")), void 0 !== a.data("alignment") && (s.alignment = a.data("alignment"))
        }

        function r(t) {
          "focus" === t && (l = !0), i(), c.addClass("active"), a.addClass("active"), s.constrain_width === !0 ? c.css("width", a.outerWidth()) : c.css("white-space", "nowrap");
          var n = window.innerHeight,
            r = a.innerHeight(),
            o = a.offset().left,
            u = a.offset().top - e(window).scrollTop(),
            d = s.alignment,
            f = 0,
            h = 0,
            p = 0;
          s.belowOrigin === !0 && (p = r);
          var m = 0,
            g = a.parent();
          if (!g.is("body") && g[0].scrollHeight > g[0].clientHeight && (m = g[0].scrollTop), o + c.innerWidth() > e(window).width() ? d = "right" : o - c.innerWidth() + a.innerWidth() < 0 && (d = "left"), u + c.innerHeight() > n)
            if (u + r - c.innerHeight() < 0) {
              var v = n - u - p;
              c.css("max-height", v)
            } else p || (p += r), p -= c.innerHeight();
          if ("left" === d) f = s.gutter, h = a.position().left + f;
          else if ("right" === d) {
            var y = a.position().left + a.outerWidth() - c.outerWidth();
            f = -s.gutter, h = y + f
          }
          c.css({
            position: "absolute",
            top: a.position().top + p + m,
            left: h
          }), c.stop(!0, !0).css("opacity", 0).slideDown({
            queue: !1,
            duration: s.inDuration,
            easing: "easeOutCubic",
            complete: function () {
              e(this).css("height", "")
            }
          }).animate({
            opacity: 1
          }, {
            queue: !1,
            duration: s.inDuration,
            easing: "easeOutSine"
          })
        }

        function o() {
          l = !1, c.fadeOut(s.outDuration), c.removeClass("active"), a.removeClass("active"), setTimeout(function () {
            c.css("max-height", "")
          }, s.outDuration)
        }
        var a = e(this),
          s = e.extend({}, n, t),
          l = !1,
          c = e("#" + a.attr("data-activates"));
        if (i(), a.after(c), s.hover) {
          var u = !1;
          a.unbind("click." + a.attr("id")), a.on("mouseenter", function () {
            u === !1 && (r(), u = !0)
          }), a.on("mouseleave", function (t) {
            e(t.toElement || t.relatedTarget).closest(".dropdown-content").is(c) || (c.stop(!0, !0), o(), u = !1)
          }), c.on("mouseleave", function (t) {
            e(t.toElement || t.relatedTarget).closest(".dropdown-button").is(a) || (c.stop(!0, !0), o(), u = !1)
          })
        } else a.unbind("click." + a.attr("id")), a.bind("click." + a.attr("id"), function (t) {
          l || (a[0] !== t.currentTarget || a.hasClass("active") || 0 !== e(t.target).closest(".dropdown-content").length ? a.hasClass("active") && (o(), e(document).unbind("click." + c.attr("id") + " touchstart." + c.attr("id"))) : (t.preventDefault(), r("click")), c.hasClass("active") && e(document).bind("click." + c.attr("id") + " touchstart." + c.attr("id"), function (t) {
            c.is(t.target) || a.is(t.target) || a.find(t.target).length || (o(), e(document).unbind("click." + c.attr("id") + " touchstart." + c.attr("id")))
          }))
        });
        a.on("open", function (e, t) {
          r(t)
        }), a.on("close", o)
      })
    }, e(document).ready(function () {
      e(".dropdown-button").dropdown()
    })
  }(jQuery);
var dropdownSelectors = $(".dropdown, .dropup");
dropdownSelectors.on({
    "show.bs.dropdown": function () {
      var e = dropdownEffectData(this);
      dropdownEffectStart(e, e.effectIn)
    },
    "shown.bs.dropdown": function () {
      var e = dropdownEffectData(this);
      e.effectIn && e.effectOut && dropdownEffectEnd(e)
    },
    "hide.bs.dropdown": function (e) {
      var t = dropdownEffectData(this);
      t.effectOut && (e.preventDefault(), dropdownEffectStart(t, t.effectOut), dropdownEffectEnd(t, function () {
        t.dropdown.removeClass("open"), t.dropdown.removeClass("show")
      }))
    }
  }),
  function (e) {
    function t(t) {
      if ($this = t, $this.hasClass("active") === !1) {
        $this.addClass("active"), $this.find("ul .btn-floating").velocity({
          scaleY: ".4",
          scaleX: ".4",
          translateY: "40px"
        }, {
          duration: 0
        });
        var n = 0;
        $this.find("ul .btn-floating").reverse().each(function () {
          e(this).velocity({
            opacity: "1",
            scaleX: "1",
            scaleY: "1",
            translateY: "0"
          }, {
            duration: 80,
            delay: n
          }), n += 40
        })
      } else {
        $this.removeClass("active");
        $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
          opacity: "0",
          scaleX: ".4",
          scaleY: ".4",
          translateY: "40px"
        }, {
          duration: 80
        })
      }
    }
    e(document).ready(function () {
      e.fn.reverse = [].reverse, e(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function () {
        n(e(this))
      }), e(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function () {
        i(e(this))
      }), e(document).on("click.fixedActionBtn", ".fixed-action-btn.click-to-toggle > a", function () {
        var t = e(this),
          r = t.parent();
        r.hasClass("active") ? i(r) : n(r)
      })
    }), e.fn.extend({
      openFAB: function () {
        n(e(this))
      },
      closeFAB: function () {
        i(e(this))
      }
    });
    var n = function (t) {
        var n = t;
        if (n.hasClass("active") === !1) {
          var i = n.hasClass("horizontal"),
            r = void 0,
            o = void 0;
          i === !0 ? o = 40 : r = 40, n.addClass("active"), n.find("ul .btn-floating").velocity({
            scaleY: ".4",
            scaleX: ".4",
            translateY: r + "px",
            translateX: o + "px"
          }, {
            duration: 0
          });
          var a = 0;
          n.find("ul .btn-floating").reverse().each(function () {
            e(this).velocity({
              opacity: "1",
              scaleX: "1",
              scaleY: "1",
              translateY: "0",
              translateX: "0"
            }, {
              duration: 80,
              delay: a
            }), a += 40
          })
        }
      },
      i = function (e) {
        $this = e;
        var t = $this.hasClass("horizontal"),
          n = void 0,
          i = void 0;
        t === !0 ? i = 40 : n = 40, $this.removeClass("active");
        $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
          opacity: "0",
          scaleX: ".4",
          scaleY: ".4",
          translateY: n + "px",
          translateX: i + "px"
        }, {
          duration: 80
        })
      };
    e(".fixed-action-btn").on({
      click: function (n) {
        return n.preventDefault(), t(e(".fixed-action-btn")), !1
      }
    })
  }(jQuery),
  function (e, t, n, i) {
    "use strict";

    function r(e, t, n) {
      return setTimeout(c(e, n), t)
    }

    function o(e, t, n) {
      return !!Array.isArray(e) && (a(e, n[t], n), !0)
    }

    function a(e, t, n) {
      var r;
      if (e)
        if (e.forEach) e.forEach(t, n);
        else if (e.length !== i)
        for (r = 0; r < e.length;) t.call(n, e[r], r, e), r++;
      else
        for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e)
    }

    function s(t, n, i) {
      var r = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
      return function () {
        var n = new Error("get-stack-trace"),
          i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
          o = e.console && (e.console.warn || e.console.log);
        return o && o.call(e.console, r, i), t.apply(this, arguments)
      }
    }

    function l(e, t, n) {
      var i, r = t.prototype;
      i = e.prototype = Object.create(r), i.constructor = e, i._super = r, n && ue(i, n)
    }

    function c(e, t) {
      return function () {
        return e.apply(t, arguments)
      }
    }

    function u(e, t) {
      return typeof e == he ? e.apply(t ? t[0] || i : i, t) : e
    }

    function d(e, t) {
      return e === i ? t : e
    }

    function f(e, t, n) {
      a(g(t), function (t) {
        e.addEventListener(t, n, !1)
      })
    }

    function h(e, t, n) {
      a(g(t), function (t) {
        e.removeEventListener(t, n, !1)
      })
    }

    function p(e, t) {
      for (; e;) {
        if (e == t) return !0;
        e = e.parentNode
      }
      return !1
    }

    function m(e, t) {
      return e.indexOf(t) > -1
    }

    function g(e) {
      return e.trim().split(/\s+/g)
    }

    function v(e, t, n) {
      if (e.indexOf && !n) return e.indexOf(t);
      for (var i = 0; i < e.length;) {
        if (n && e[i][n] == t || !n && e[i] === t) return i;
        i++
      }
      return -1
    }

    function y(e) {
      return Array.prototype.slice.call(e, 0)
    }

    function b(e, t, n) {
      for (var i = [], r = [], o = 0; o < e.length;) {
        var a = t ? e[o][t] : e[o];
        v(r, a) < 0 && i.push(e[o]), r[o] = a, o++
      }
      return n && (i = t ? i.sort(function (e, n) {
        return e[t] > n[t]
      }) : i.sort()), i
    }

    function x(e, t) {
      for (var n, r, o = t[0].toUpperCase() + t.slice(1), a = 0; a < de.length;) {
        if (n = de[a], (r = n ? n + o : t) in e) return r;
        a++
      }
      return i
    }

    function w() {
      return be++
    }

    function C(t) {
      var n = t.ownerDocument || t;
      return n.defaultView || n.parentWindow || e
    }

    function T(e, t) {
      var n = this;
      this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function (t) {
        u(e.options.enable, [e]) && n.handler(t)
      }, this.init()
    }

    function k(e) {
      var t = e.options.inputClass;
      return new(t ? t : Ce ? W : Te ? j : we ? z : R)(e, _)
    }

    function _(e, t, n) {
      var i = n.pointers.length,
        r = n.changedPointers.length,
        o = t & _e && i - r == 0,
        a = t & (Ee | Ae) && i - r == 0;
      n.isFirst = !!o, n.isFinal = !!a, o && (e.session = {}), n.eventType = t, S(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
    }

    function S(e, t) {
      var n = e.session,
        i = t.pointers,
        r = i.length;
      n.firstInput || (n.firstInput = I(t)), r > 1 && !n.firstMultiple ? n.firstMultiple = I(t) : 1 === r && (n.firstMultiple = !1);
      var o = n.firstInput,
        a = n.firstMultiple,
        s = a ? a.center : o.center,
        l = t.center = D(i);
      t.timeStamp = ge(), t.deltaTime = t.timeStamp - o.timeStamp, t.angle = L(s, l), t.distance = M(s, l), E(n, t), t.offsetDirection = P(t.deltaX, t.deltaY);
      var c = O(t.deltaTime, t.deltaX, t.deltaY);
      t.overallVelocityX = c.x, t.overallVelocityY = c.y, t.overallVelocity = me(c.x) > me(c.y) ? c.x : c.y, t.scale = a ? F(a.pointers, i) : 1, t.rotation = a ? N(a.pointers, i) : 0, t.maxPointers = n.prevInput ? t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers : t.pointers.length, A(n, t);
      var u = e.element;
      p(t.srcEvent.target, u) && (u = t.srcEvent.target), t.target = u
    }

    function E(e, t) {
      var n = t.center,
        i = e.offsetDelta || {},
        r = e.prevDelta || {},
        o = e.prevInput || {};
      t.eventType !== _e && o.eventType !== Ee || (r = e.prevDelta = {
        x: o.deltaX || 0,
        y: o.deltaY || 0
      }, i = e.offsetDelta = {
        x: n.x,
        y: n.y
      }), t.deltaX = r.x + (n.x - i.x), t.deltaY = r.y + (n.y - i.y)
    }

    function A(e, t) {
      var n, r, o, a, s = e.lastInterval || t,
        l = t.timeStamp - s.timeStamp;
      if (t.eventType != Ae && (l > ke || s.velocity === i)) {
        var c = t.deltaX - s.deltaX,
          u = t.deltaY - s.deltaY,
          d = O(l, c, u);
        r = d.x, o = d.y, n = me(d.x) > me(d.y) ? d.x : d.y, a = P(c, u), e.lastInterval = t
      } else n = s.velocity, r = s.velocityX, o = s.velocityY, a = s.direction;
      t.velocity = n, t.velocityX = r, t.velocityY = o, t.direction = a
    }

    function I(e) {
      for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
        clientX: pe(e.pointers[n].clientX),
        clientY: pe(e.pointers[n].clientY)
      }, n++;
      return {
        timeStamp: ge(),
        pointers: t,
        center: D(t),
        deltaX: e.deltaX,
        deltaY: e.deltaY
      }
    }

    function D(e) {
      var t = e.length;
      if (1 === t) return {
        x: pe(e[0].clientX),
        y: pe(e[0].clientY)
      };
      for (var n = 0, i = 0, r = 0; r < t;) n += e[r].clientX, i += e[r].clientY, r++;
      return {
        x: pe(n / t),
        y: pe(i / t)
      }
    }

    function O(e, t, n) {
      return {
        x: t / e || 0,
        y: n / e || 0
      }
    }

    function P(e, t) {
      return e === t ? Ie : me(e) >= me(t) ? e < 0 ? De : Oe : t < 0 ? Pe : Me
    }

    function M(e, t, n) {
      n || (n = Re);
      var i = t[n[0]] - e[n[0]],
        r = t[n[1]] - e[n[1]];
      return Math.sqrt(i * i + r * r)
    }

    function L(e, t, n) {
      n || (n = Re);
      var i = t[n[0]] - e[n[0]],
        r = t[n[1]] - e[n[1]];
      return 180 * Math.atan2(r, i) / Math.PI
    }

    function N(e, t) {
      return L(t[1], t[0], We) + L(e[1], e[0], We)
    }

    function F(e, t) {
      return M(t[0], t[1], We) / M(e[0], e[1], We)
    }

    function R() {
      this.evEl = Ve, this.evWin = je, this.pressed = !1, T.apply(this, arguments)
    }

    function W() {
      this.evEl = qe, this.evWin = $e, T.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function H() {
      this.evTarget = Ue, this.evWin = Xe, this.started = !1, T.apply(this, arguments)
    }

    function V(e, t) {
      var n = y(e.touches),
        i = y(e.changedTouches);
      return t & (Ee | Ae) && (n = b(n.concat(i), "identifier", !0)), [n, i]
    }

    function j() {
      this.evTarget = Qe, this.targetIds = {}, T.apply(this, arguments)
    }

    function B(e, t) {
      var n = y(e.touches),
        i = this.targetIds;
      if (t & (_e | Se) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
      var r, o, a = y(e.changedTouches),
        s = [],
        l = this.target;
      if (o = n.filter(function (e) {
          return p(e.target, l)
        }), t === _e)
        for (r = 0; r < o.length;) i[o[r].identifier] = !0, r++;
      for (r = 0; r < a.length;) i[a[r].identifier] && s.push(a[r]), t & (Ee | Ae) && delete i[a[r].identifier], r++;
      return s.length ? [b(o.concat(s), "identifier", !0), s] : void 0
    }

    function z() {
      T.apply(this, arguments);
      var e = c(this.handler, this);
      this.touch = new j(this.manager, e), this.mouse = new R(this.manager, e), this.primaryTouch = null, this.lastTouches = []
    }

    function q(e, t) {
      e & _e ? (this.primaryTouch = t.changedPointers[0].identifier, $.call(this, t)) : e & (Ee | Ae) && $.call(this, t)
    }

    function $(e) {
      var t = e.changedPointers[0];
      if (t.identifier === this.primaryTouch) {
        var n = {
          x: t.clientX,
          y: t.clientY
        };
        this.lastTouches.push(n);
        var i = this.lastTouches,
          r = function () {
            var e = i.indexOf(n);
            e > -1 && i.splice(e, 1)
          };
        setTimeout(r, Ke)
      }
    }

    function Y(e) {
      for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
        var r = this.lastTouches[i],
          o = Math.abs(t - r.x),
          a = Math.abs(n - r.y);
        if (o <= Ze && a <= Ze) return !0
      }
      return !1
    }

    function U(e, t) {
      this.manager = e, this.set(t)
    }

    function X(e) {
      if (m(e, it)) return it;
      var t = m(e, rt),
        n = m(e, ot);
      return t && n ? it : t || n ? t ? rt : ot : m(e, nt) ? nt : tt
    }

    function G(e) {
      this.options = ue({}, this.defaults, e || {}), this.id = w(), this.manager = null, this.options.enable = d(this.options.enable, !0), this.state = st, this.simultaneous = {}, this.requireFail = []
    }

    function Q(e) {
      return e & ft ? "cancel" : e & ut ? "end" : e & ct ? "move" : e & lt ? "start" : ""
    }

    function K(e) {
      return e == Me ? "down" : e == Pe ? "up" : e == De ? "left" : e == Oe ? "right" : ""
    }

    function Z(e, t) {
      var n = t.manager;
      return n ? n.get(e) : e
    }

    function J() {
      G.apply(this, arguments)
    }

    function ee() {
      J.apply(this, arguments), this.pX = null, this.pY = null
    }

    function te() {
      J.apply(this, arguments)
    }

    function ne() {
      G.apply(this, arguments), this._timer = null, this._input = null
    }

    function ie() {
      J.apply(this, arguments)
    }

    function re() {
      J.apply(this, arguments)
    }

    function oe() {
      G.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function ae(e, t) {
      return t = t || {}, t.recognizers = d(t.recognizers, ae.defaults.preset), new se(e, t)
    }

    function se(e, t) {
      this.options = ue({}, ae.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = k(this), this.touchAction = new U(this, this.options.touchAction), le(this, !0), a(this.options.recognizers, function (e) {
        var t = this.add(new e[0](e[1]));
        e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
      }, this)
    }

    function le(e, t) {
      var n = e.element;
      if (n.style) {
        var i;
        a(e.options.cssProps, function (r, o) {
          i = x(n.style, o), t ? (e.oldCssProps[i] = n.style[i], n.style[i] = r) : n.style[i] = e.oldCssProps[i] || ""
        }), t || (e.oldCssProps = {})
      }
    }

    function ce(e, n) {
      var i = t.createEvent("Event");
      i.initEvent(e, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
    }
    var ue, de = ["", "webkit", "Moz", "MS", "ms", "o"],
      fe = t.createElement("div"),
      he = "function",
      pe = Math.round,
      me = Math.abs,
      ge = Date.now;
    ue = "function" != typeof Object.assign ? function (e) {
      if (e === i || null === e) throw new TypeError("Cannot convert undefined or null to object");
      for (var t = Object(e), n = 1; n < arguments.length; n++) {
        var r = arguments[n];
        if (r !== i && null !== r)
          for (var o in r) r.hasOwnProperty(o) && (t[o] = r[o])
      }
      return t
    } : Object.assign;
    var ve = s(function (e, t, n) {
        for (var r = Object.keys(t), o = 0; o < r.length;)(!n || n && e[r[o]] === i) && (e[r[o]] = t[r[o]]), o++;
        return e
      }, "extend", "Use `assign`."),
      ye = s(function (e, t) {
        return ve(e, t, !0)
      }, "merge", "Use `assign`."),
      be = 1,
      xe = /mobile|tablet|ip(ad|hone|od)|android/i,
      we = "ontouchstart" in e,
      Ce = x(e, "PointerEvent") !== i,
      Te = we && xe.test(navigator.userAgent),
      ke = 25,
      _e = 1,
      Se = 2,
      Ee = 4,
      Ae = 8,
      Ie = 1,
      De = 2,
      Oe = 4,
      Pe = 8,
      Me = 16,
      Le = De | Oe,
      Ne = Pe | Me,
      Fe = Le | Ne,
      Re = ["x", "y"],
      We = ["clientX", "clientY"];
    T.prototype = {
      handler: function () {},
      init: function () {
        this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(C(this.element), this.evWin, this.domHandler)
      },
      destroy: function () {
        this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(C(this.element), this.evWin, this.domHandler)
      }
    };
    var He = {
        mousedown: _e,
        mousemove: Se,
        mouseup: Ee
      },
      Ve = "mousedown",
      je = "mousemove mouseup";
    l(R, T, {
      handler: function (e) {
        var t = He[e.type];
        t & _e && 0 === e.button && (this.pressed = !0), t & Se && 1 !== e.which && (t = Ee), this.pressed && (t & Ee && (this.pressed = !1), this.callback(this.manager, t, {
          pointers: [e],
          changedPointers: [e],
          pointerType: "mouse",
          srcEvent: e
        }))
      }
    });
    var Be = {
        pointerdown: _e,
        pointermove: Se,
        pointerup: Ee,
        pointercancel: Ae,
        pointerout: Ae
      },
      ze = {
        2: "touch",
        3: "pen",
        4: "mouse",
        5: "kinect"
      },
      qe = "pointerdown",
      $e = "pointermove pointerup pointercancel";
    e.MSPointerEvent && !e.PointerEvent && (qe = "MSPointerDown", $e = "MSPointerMove MSPointerUp MSPointerCancel"), l(W, T, {
      handler: function (e) {
        var t = this.store,
          n = !1,
          i = e.type.toLowerCase().replace("ms", ""),
          r = Be[i],
          o = ze[e.pointerType] || e.pointerType,
          a = "touch" == o,
          s = v(t, e.pointerId, "pointerId");
        r & _e && (0 === e.button || a) ? s < 0 && (t.push(e), s = t.length - 1) : r & (Ee | Ae) && (n = !0), s < 0 || (t[s] = e, this.callback(this.manager, r, {
          pointers: t,
          changedPointers: [e],
          pointerType: o,
          srcEvent: e
        }), n && t.splice(s, 1))
      }
    });
    var Ye = {
        touchstart: _e,
        touchmove: Se,
        touchend: Ee,
        touchcancel: Ae
      },
      Ue = "touchstart",
      Xe = "touchstart touchmove touchend touchcancel";
    l(H, T, {
      handler: function (e) {
        var t = Ye[e.type];
        if (t === _e && (this.started = !0), this.started) {
          var n = V.call(this, e, t);
          t & (Ee | Ae) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
            pointers: n[0],
            changedPointers: n[1],
            pointerType: "touch",
            srcEvent: e
          })
        }
      }
    });
    var Ge = {
        touchstart: _e,
        touchmove: Se,
        touchend: Ee,
        touchcancel: Ae
      },
      Qe = "touchstart touchmove touchend touchcancel";
    l(j, T, {
      handler: function (e) {
        var t = Ge[e.type],
          n = B.call(this, e, t);
        n && this.callback(this.manager, t, {
          pointers: n[0],
          changedPointers: n[1],
          pointerType: "touch",
          srcEvent: e
        })
      }
    });
    var Ke = 2500,
      Ze = 25;
    l(z, T, {
      handler: function (e, t, n) {
        var i = "touch" == n.pointerType,
          r = "mouse" == n.pointerType;
        if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
          if (i) q.call(this, t, n);
          else if (r && Y.call(this, n)) return;
          this.callback(e, t, n)
        }
      },
      destroy: function () {
        this.touch.destroy(), this.mouse.destroy()
      }
    });
    var Je = x(fe.style, "touchAction"),
      et = Je !== i,
      tt = "auto",
      nt = "manipulation",
      it = "none",
      rt = "pan-x",
      ot = "pan-y",
      at = function () {
        if (!et) return !1;
        var t = {},
          n = e.CSS && e.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (i) {
          t[i] = !n || e.CSS.supports("touch-action", i)
        }), t
      }();
    U.prototype = {
      set: function (e) {
        "compute" == e && (e = this.compute()), et && this.manager.element.style && at[e] && (this.manager.element.style[Je] = e), this.actions = e.toLowerCase().trim()
      },
      update: function () {
        this.set(this.manager.options.touchAction)
      },
      compute: function () {
        var e = [];
        return a(this.manager.recognizers, function (t) {
          u(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
        }), X(e.join(" "))
      },
      preventDefaults: function (e) {
        var t = e.srcEvent,
          n = e.offsetDirection;
        if (this.manager.session.prevented) return void t.preventDefault();
        var i = this.actions,
          r = m(i, it) && !at[it],
          o = m(i, ot) && !at[ot],
          a = m(i, rt) && !at[rt];
        if (r) {
          var s = 1 === e.pointers.length,
            l = e.distance < 2,
            c = e.deltaTime < 250;
          if (s && l && c) return
        }
        return a && o ? void 0 : r || o && n & Le || a && n & Ne ? this.preventSrc(t) : void 0
      },
      preventSrc: function (e) {
        this.manager.session.prevented = !0, e.preventDefault()
      }
    };
    var st = 1,
      lt = 2,
      ct = 4,
      ut = 8,
      dt = ut,
      ft = 16;
    G.prototype = {
      defaults: {},
      set: function (e) {
        return ue(this.options, e), this.manager && this.manager.touchAction.update(), this
      },
      recognizeWith: function (e) {
        if (o(e, "recognizeWith", this)) return this;
        var t = this.simultaneous;
        return e = Z(e, this), t[e.id] || (t[e.id] = e, e.recognizeWith(this)), this
      },
      dropRecognizeWith: function (e) {
        return o(e, "dropRecognizeWith", this) ? this : (e = Z(e, this), delete this.simultaneous[e.id], this)
      },
      requireFailure: function (e) {
        if (o(e, "requireFailure", this)) return this;
        var t = this.requireFail;
        return e = Z(e, this), v(t, e) === -1 && (t.push(e), e.requireFailure(this)), this
      },
      dropRequireFailure: function (e) {
        if (o(e, "dropRequireFailure", this)) return this;
        e = Z(e, this);
        var t = v(this.requireFail, e);
        return t > -1 && this.requireFail.splice(t, 1), this
      },
      hasRequireFailures: function () {
        return this.requireFail.length > 0
      },
      canRecognizeWith: function (e) {
        return !!this.simultaneous[e.id]
      },
      emit: function (e) {
        function t(t) {
          n.manager.emit(t, e)
        }
        var n = this,
          i = this.state;
        i < ut && t(n.options.event + Q(i)), t(n.options.event), e.additionalEvent && t(e.additionalEvent), i >= ut && t(n.options.event + Q(i))
      },
      tryEmit: function (e) {
        if (this.canEmit()) return this.emit(e);
        this.state = 32
      },
      canEmit: function () {
        for (var e = 0; e < this.requireFail.length;) {
          if (!(this.requireFail[e].state & (32 | st))) return !1;
          e++
        }
        return !0
      },
      recognize: function (e) {
        var t = ue({}, e);
        if (!u(this.options.enable, [this, t])) return this.reset(), void(this.state = 32);
        this.state & (dt | ft | 32) && (this.state = st), this.state = this.process(t), this.state & (lt | ct | ut | ft) && this.tryEmit(t)
      },
      process: function (e) {},
      getTouchAction: function () {},
      reset: function () {}
    }, l(J, G, {
      defaults: {
        pointers: 1
      },
      attrTest: function (e) {
        var t = this.options.pointers;
        return 0 === t || e.pointers.length === t
      },
      process: function (e) {
        var t = this.state,
          n = e.eventType,
          i = t & (lt | ct),
          r = this.attrTest(e);
        return i && (n & Ae || !r) ? t | ft : i || r ? n & Ee ? t | ut : t & lt ? t | ct : lt : 32
      }
    }), l(ee, J, {
      defaults: {
        event: "pan",
        threshold: 10,
        pointers: 1,
        direction: Fe
      },
      getTouchAction: function () {
        var e = this.options.direction,
          t = [];
        return e & Le && t.push(ot), e & Ne && t.push(rt), t
      },
      directionTest: function (e) {
        var t = this.options,
          n = !0,
          i = e.distance,
          r = e.direction,
          o = e.deltaX,
          a = e.deltaY;
        return r & t.direction || (t.direction & Le ? (r = 0 === o ? Ie : o < 0 ? De : Oe, n = o != this.pX, i = Math.abs(e.deltaX)) : (r = 0 === a ? Ie : a < 0 ? Pe : Me, n = a != this.pY, i = Math.abs(e.deltaY))), e.direction = r, n && i > t.threshold && r & t.direction
      },
      attrTest: function (e) {
        return J.prototype.attrTest.call(this, e) && (this.state & lt || !(this.state & lt) && this.directionTest(e))
      },
      emit: function (e) {
        this.pX = e.deltaX, this.pY = e.deltaY;
        var t = K(e.direction);
        t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
      }
    }), l(te, J, {
      defaults: {
        event: "pinch",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function () {
        return [it]
      },
      attrTest: function (e) {
        return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & lt)
      },
      emit: function (e) {
        if (1 !== e.scale) {
          var t = e.scale < 1 ? "in" : "out";
          e.additionalEvent = this.options.event + t
        }
        this._super.emit.call(this, e)
      }
    }), l(ne, G, {
      defaults: {
        event: "press",
        pointers: 1,
        time: 251,
        threshold: 9
      },
      getTouchAction: function () {
        return [tt]
      },
      process: function (e) {
        var t = this.options,
          n = e.pointers.length === t.pointers,
          i = e.distance < t.threshold,
          o = e.deltaTime > t.time;
        if (this._input = e, !i || !n || e.eventType & (Ee | Ae) && !o) this.reset();
        else if (e.eventType & _e) this.reset(), this._timer = r(function () {
          this.state = dt, this.tryEmit()
        }, t.time, this);
        else if (e.eventType & Ee) return dt;
        return 32
      },
      reset: function () {
        clearTimeout(this._timer)
      },
      emit: function (e) {
        this.state === dt && (e && e.eventType & Ee ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = ge(), this.manager.emit(this.options.event, this._input)))
      }
    }), l(ie, J, {
      defaults: {
        event: "rotate",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function () {
        return [it]
      },
      attrTest: function (e) {
        return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & lt)
      }
    }), l(re, J, {
      defaults: {
        event: "swipe",
        threshold: 10,
        velocity: .3,
        direction: Le | Ne,
        pointers: 1
      },
      getTouchAction: function () {
        return ee.prototype.getTouchAction.call(this)
      },
      attrTest: function (e) {
        var t, n = this.options.direction;
        return n & (Le | Ne) ? t = e.overallVelocity : n & Le ? t = e.overallVelocityX : n & Ne && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && me(t) > this.options.velocity && e.eventType & Ee
      },
      emit: function (e) {
        var t = K(e.offsetDirection);
        t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
      }
    }), l(oe, G, {
      defaults: {
        event: "tap",
        pointers: 1,
        taps: 1,
        interval: 300,
        time: 250,
        threshold: 9,
        posThreshold: 10
      },
      getTouchAction: function () {
        return [nt]
      },
      process: function (e) {
        var t = this.options,
          n = e.pointers.length === t.pointers,
          i = e.distance < t.threshold,
          o = e.deltaTime < t.time;
        if (this.reset(), e.eventType & _e && 0 === this.count) return this.failTimeout();
        if (i && o && n) {
          if (e.eventType != Ee) return this.failTimeout();
          var a = !this.pTime || e.timeStamp - this.pTime < t.interval,
            s = !this.pCenter || M(this.pCenter, e.center) < t.posThreshold;
          this.pTime = e.timeStamp, this.pCenter = e.center, s && a ? this.count += 1 : this.count = 1, this._input = e;
          if (0 === this.count % t.taps) return this.hasRequireFailures() ? (this._timer = r(function () {
            this.state = dt, this.tryEmit()
          }, t.interval, this), lt) : dt
        }
        return 32
      },
      failTimeout: function () {
        return this._timer = r(function () {
          this.state = 32
        }, this.options.interval, this), 32
      },
      reset: function () {
        clearTimeout(this._timer)
      },
      emit: function () {
        this.state == dt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
      }
    }), ae.VERSION = "2.0.7", ae.defaults = {
      domEvents: !1,
      touchAction: "compute",
      enable: !0,
      inputTarget: null,
      inputClass: null,
      preset: [
        [ie, {
          enable: !1
        }],
        [te, {
            enable: !1
          },
          ["rotate"]
        ],
        [re, {
          direction: Le
        }],
        [ee, {
            direction: Le
          },
          ["swipe"]
        ],
        [oe],
        [oe, {
            event: "doubletap",
            taps: 2
          },
          ["tap"]
        ],
        [ne]
      ],
      cssProps: {
        userSelect: "none",
        touchSelect: "none",
        touchCallout: "none",
        contentZooming: "none",
        userDrag: "none",
        tapHighlightColor: "rgba(0,0,0,0)"
      }
    };
    se.prototype = {
      set: function (e) {
        return ue(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
      },
      stop: function (e) {
        this.session.stopped = e ? 2 : 1
      },
      recognize: function (e) {
        var t = this.session;
        if (!t.stopped) {
          this.touchAction.preventDefaults(e);
          var n, i = this.recognizers,
            r = t.curRecognizer;
          (!r || r && r.state & dt) && (r = t.curRecognizer = null);
          for (var o = 0; o < i.length;) n = i[o], 2 === t.stopped || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(e), !r && n.state & (lt | ct | ut) && (r = t.curRecognizer = n), o++
        }
      },
      get: function (e) {
        if (e instanceof G) return e;
        for (var t = this.recognizers, n = 0; n < t.length; n++)
          if (t[n].options.event == e) return t[n];
        return null
      },
      add: function (e) {
        if (o(e, "add", this)) return this;
        var t = this.get(e.options.event);
        return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
      },
      remove: function (e) {
        if (o(e, "remove", this)) return this;
        if (e = this.get(e)) {
          var t = this.recognizers,
            n = v(t, e);
          n !== -1 && (t.splice(n, 1), this.touchAction.update())
        }
        return this
      },
      on: function (e, t) {
        if (e !== i && t !== i) {
          var n = this.handlers;
          return a(g(e), function (e) {
            n[e] = n[e] || [], n[e].push(t)
          }), this
        }
      },
      off: function (e, t) {
        if (e !== i) {
          var n = this.handlers;
          return a(g(e), function (e) {
            t ? n[e] && n[e].splice(v(n[e], t), 1) : delete n[e]
          }), this
        }
      },
      emit: function (e, t) {
        this.options.domEvents && ce(e, t);
        var n = this.handlers[e] && this.handlers[e].slice();
        if (n && n.length) {
          t.type = e, t.preventDefault = function () {
            t.srcEvent.preventDefault()
          };
          for (var i = 0; i < n.length;) n[i](t), i++
        }
      },
      destroy: function () {
        this.element && le(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
      }
    }, ue(ae, {
      INPUT_START: _e,
      INPUT_MOVE: Se,
      INPUT_END: Ee,
      INPUT_CANCEL: Ae,
      STATE_POSSIBLE: st,
      STATE_BEGAN: lt,
      STATE_CHANGED: ct,
      STATE_ENDED: ut,
      STATE_RECOGNIZED: dt,
      STATE_CANCELLED: ft,
      STATE_FAILED: 32,
      DIRECTION_NONE: Ie,
      DIRECTION_LEFT: De,
      DIRECTION_RIGHT: Oe,
      DIRECTION_UP: Pe,
      DIRECTION_DOWN: Me,
      DIRECTION_HORIZONTAL: Le,
      DIRECTION_VERTICAL: Ne,
      DIRECTION_ALL: Fe,
      Manager: se,
      Input: T,
      TouchAction: U,
      TouchInput: j,
      MouseInput: R,
      PointerEventInput: W,
      TouchMouseInput: z,
      SingleTouchInput: H,
      Recognizer: G,
      AttrRecognizer: J,
      Tap: oe,
      Pan: ee,
      Swipe: re,
      Pinch: te,
      Rotate: ie,
      Press: ne,
      on: f,
      off: h,
      each: a,
      merge: ye,
      extend: ve,
      assign: ue,
      inherit: l,
      bindFn: c,
      prefixed: x
    }), (void 0 !== e ? e : "undefined" != typeof self ? self : {}).Hammer = ae, "function" == typeof define && define.amd ? define(function () {
      return ae
    }) : "undefined" != typeof module && module.exports ? module.exports = ae : e.Hammer = ae
  }(window, document),
  function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], e) : "object" == typeof exports ? e(require("jquery"), require("hammerjs")) : e(jQuery, Hammer)
  }(function (e, t) {
    function n(n, i) {
      var r = e(n);
      r.data("hammer") || r.data("hammer", new t(r[0], i))
    }
    e.fn.hammer = function (e) {
      return this.each(function () {
        n(this, e)
      })
    }, t.Manager.prototype.emit = function (t) {
      return function (n, i) {
        t.call(this, n, i), e(this.element).trigger({
          type: n,
          gesture: i
        })
      }
    }(t.Manager.prototype.emit)
  });
var _createClass = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (t, n, i) {
    return n && e(t.prototype, n), i && e(t, i), t
  }
}();
! function (e) {
  var t = 240,
    n = 1440,
    i = 2,
    r = .3,
    o = -.5,
    a = -.3,
    s = .5,
    l = 10,
    c = function () {
      function c(u, d) {
        var f = this;
        _classCallCheck(this, c);
        var h = !1,
          p = {
            MENU_WIDTH: t,
            edge: "left",
            closeOnClick: !1
          };
        d = e.extend(p, d), this.options = d;
        var m = u;
        this.menu_id = e("#" + m.attr("data-activates"));
        var g = e("#" + this.menu_id.attr("id") + "> .sidenav-bg");
        d.MENU_WIDTH !== t && (this.menu_id.css("width", d.MENU_WIDTH), g.css("width", d.MENU_WIDTH));
        var v = e('<div class="drag-target"></div>');
        e("body").append(v), "left" === d.edge ? (this.menu_id.css("transform", "translateX(-100%)"), v.css({
          left: 0
        })) : (this.menu_id.addClass("right-aligned").css("transform", "translateX(100%)"), v.css({
          right: 0
        })), this.menu_id.hasClass("fixed") && (window.innerWidth > n && this.menu_id.css("transform", "translateX(0)"), e(window).resize(function () {
          window.innerWidth > n ? e("#sidenav-overlay").length ? f.removeMenu(!0) : f.menu_id.css("transform", "translateX(0%)") : h === !1 && ("left" === d.edge ? f.menu_id.css("transform", "translateX(-100%)") : f.menu_id.css("transform", "translateX(100%)"))
        })), this.options.closeOnClick === !0 && this.menu_id.on("click", "a:not(.collapsible-header)", function () {
          f.removeMenu()
        }), m.click(function (t) {
          if (t.preventDefault(), h === !0) h = !1, f.removeMenu();
          else {
            var n = e("body"),
              i = e('<div id="sidenav-overlay"></div>');
            n.append(i), "left" === f.options.edge ? f.menu_id.velocity({
              translateX: [0, -1 * d.MENU_WIDTH]
            }, {
              duration: 300,
              queue: !1,
              easing: "easeOutQuad"
            }) : f.menu_id.velocity({
              translateX: [0, d.MENU_WIDTH]
            }, {
              duration: 300,
              queue: !1,
              easing: "easeOutQuad"
            }), i.click(function () {
              f.removeMenu()
            })
          }
        }), v.click(function () {
          f.removeMenu()
        }), v.hammer({
          prevent_default: !1
        }).bind("pan", function (t) {
          if ("touch" === t.gesture.pointerType) {
            var n = t.gesture.center.x,
              r = e("body"),
              o = r.innerWidth();
            if (r.css("overflow", "hidden"), r.width(o), 0 === e("#sidenav-overlay").length) {
              var a = e('<div id="sidenav-overlay"></div>');
              a.css("opacity", 0).click(function () {
                f.removeMenu()
              }), e("body").append(a)
            }
            if ("left" === d.edge && (n > d.MENU_WIDTH ? n = d.MENU_WIDTH : n < 0 && (n = 0)), "left" === d.edge) n < d.MENU_WIDTH / i ? h = !1 : n >= d.MENU_WIDTH / i && (h = !0), f.menu_id.css("transform", "translateX(" + (n - d.MENU_WIDTH) + "px)");
            else {
              n < window.innerWidth - d.MENU_WIDTH / i ? h = !0 : n >= window.innerWidth - d.MENU_WIDTH / i && (h = !1);
              var s = n - d.MENU_WIDTH / i;
              s < 0 && (s = 0), f.menu_id.css("transform", "translateX(" + s + "px)")
            }
            var l = void 0;
            "left" === d.edge ? (l = n / d.MENU_WIDTH, e("#sidenav-overlay").velocity({
              opacity: l
            }, {
              duration: 10,
              queue: !1,
              easing: "easeOutQuad"
            })) : (l = Math.abs((n - window.innerWidth) / d.MENU_WIDTH), e("#sidenav-overlay").velocity({
              opacity: l
            }, {
              duration: 10,
              queue: !1,
              easing: "easeOutQuad"
            }))
          }
        }).bind("panend", function (t) {
          if ("touch" === t.gesture.pointerType) {
            var n = t.gesture.velocityX,
              c = t.gesture.center.x,
              u = c - d.MENU_WIDTH,
              p = c - d.MENU_WIDTH / i;
            u > 0 && (u = 0), p < 0 && (p = 0), "left" === d.edge ? h && n <= r || n < o ? (0 !== u && f.menu_id.velocity({
              translateX: [0, u]
            }, {
              duration: 300,
              queue: !1,
              easing: "easeOutQuad"
            }), e("#sidenav-overlay").velocity({
              opacity: 1
            }, {
              duration: 50,
              queue: !1,
              easing: "easeOutQuad"
            }), v.css({
              width: "10px",
              right: "",
              left: 0
            })) : (!h || n > r) && (e("body").css({
              overflow: "",
              width: ""
            }), f.menu_id.velocity({
              translateX: [-1 * d.MENU_WIDTH - l, u]
            }, {
              duration: 200,
              queue: !1,
              easing: "easeOutQuad"
            }), e("#sidenav-overlay").velocity({
              opacity: 0
            }, {
              duration: 200,
              queue: !1,
              easing: "easeOutQuad",
              complete: function () {
                e(this).remove()
              }
            }), v.css({
              width: "10px",
              right: "",
              left: 0
            })) : h && n >= a || n > s ? (f.menu_id.velocity({
              translateX: [0, p]
            }, {
              duration: 300,
              queue: !1,
              easing: "easeOutQuad"
            }), e("#sidenav-overlay").velocity({
              opacity: 1
            }, {
              duration: 50,
              queue: !1,
              easing: "easeOutQuad"
            }), v.css({
              width: "50%",
              right: "",
              left: 0
            })) : (!h || n < a) && (e("body").css({
              overflow: "",
              width: ""
            }), f.menu_id.velocity({
              translateX: [d.MENU_WIDTH + l, p]
            }, {
              duration: 200,
              queue: !1,
              easing: "easeOutQuad"
            }), e("#sidenav-overlay").velocity({
              opacity: 0
            }, {
              duration: 200,
              queue: !1,
              easing: "easeOutQuad",
              complete: function () {
                e(f).remove()
              }
            }), v.css({
              width: "10px",
              right: 0,
              left: ""
            }))
          }
        })
      }
      return _createClass(c, [{
        key: "removeMenu",
        value: function (t) {
          var n = this;
          e("body").css({
            overflow: "",
            width: ""
          }), "left" === this.options.edge ? this.menu_id.velocity({
            translateX: "-100%"
          }, {
            duration: 200,
            queue: !1,
            easing: "easeOutCubic",
            complete: function () {
              t === !0 && (n.menu_id.removeAttr("style"), n.menu_id.css("width", n.options.MENU_WIDTH))
            }
          }) : this.menu_id.velocity({
            translateX: "100%"
          }, {
            duration: 200,
            queue: !1,
            easing: "easeOutCubic",
            complete: function () {
              t === !0 && (n.menu_id.removeAttr("style"), n.menu_id.css("width", n.options.MENU_WIDTH))
            }
          }), e("#sidenav-overlay").velocity({
            opacity: 0
          }, {
            duration: 200,
            queue: !1,
            easing: "easeOutQuad",
            complete: function () {
              e("#sidenav-overlay").remove()
            }
          })
        }
      }, {
        key: "show",
        value: function () {
          this.trigger("click")
        }
      }, {
        key: "hide",
        value: function () {
          e("#sidenav-overlay").trigger("click")
        }
      }]), c
    }();
  e.fn.sideNav = function (t) {
    return this.each(function () {
      new c(e(this), t)
    })
  }
}(jQuery),
function (e) {
  e.fn.collapsible = function (t) {
    var n = {
      accordion: void 0
    };
    return t = e.extend(n, t), this.each(function () {
      function n(t) {
        s = a.find("> li > .collapsible-header"), t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
          duration: 350,
          easing: "easeOutQuart",
          queue: !1,
          complete: function () {
            e(this).css("height", "")
          }
        }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
          duration: 350,
          easing: "easeOutQuart",
          queue: !1,
          complete: function () {
            e(this).css("height", "")
          }
        }), s.not(t).removeClass("active").parent().removeClass("active"), s.not(t).parent().children(".collapsible-body").stop(!0, !1).slideUp({
          duration: 350,
          easing: "easeOutQuart",
          queue: !1,
          complete: function () {
            e(this).css("height", "")
          }
        })
      }

      function i(t) {
        t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
          duration: 350,
          easing: "easeOutQuart",
          queue: !1,
          complete: function () {
            e(this).css("height", "")
          }
        }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
          duration: 350,
          easing: "easeOutQuart",
          queue: !1,
          complete: function () {
            e(this).css("height", "")
          }
        })
      }

      function r(e) {
        return o(e).length > 0
      }

      function o(e) {
        return e.closest("li > .collapsible-header")
      }
      var a = e(this),
        s = e(this).find("> li > .collapsible-header"),
        l = a.data("collapsible");
      a.off("click.collapse", ".collapsible-header"), s.off("click.collapse"), t.accordion || "accordion" === l || void 0 === l ? (s = a.find("> li > .collapsible-header"), s.on("click.collapse", function (t) {
        var i = e(t.target);
        r(i) && (i = o(i)), i.toggleClass("active"), n(i)
      }), n(s.filter(".active").first())) : s.each(function () {
        e(this).on("click.collapse", function (t) {
          var n = e(t.target);
          r(n) && (n = o(n)), n.toggleClass("active"), i(n)
        }), e(this).hasClass("active") && i(e(this))
      })
    })
  }, e(document).ready(function () {
    e(".collapsible").collapsible()
  })
}(jQuery),
function (e, t) {
  "function" == typeof define && define.amd ? define(["jquery"], function (e) {
    return t(e)
  }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(0, function (e) {
  var t = function (e, t) {
      var n, i = document.createElement("canvas");
      e.appendChild(i), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(i);
      var r = i.getContext("2d");
      i.width = i.height = t.size;
      var o = 1;
      window.devicePixelRatio > 1 && (o = window.devicePixelRatio, i.style.width = i.style.height = [t.size, "px"].join(""), i.width = i.height = t.size * o, r.scale(o, o)), r.translate(t.size / 2, t.size / 2), r.rotate((-.5 + t.rotate / 180) * Math.PI);
      var a = (t.size - t.lineWidth) / 2;
      t.scaleColor && t.scaleLength && (a -= t.scaleLength + 2), Date.now = Date.now || function () {
        return +new Date
      };
      var s = function (e, t, n) {
          n = Math.min(Math.max(-1, n || 0), 1);
          var i = n <= 0;
          r.beginPath(), r.arc(0, 0, a, 0, 2 * Math.PI * n, i), r.strokeStyle = e, r.lineWidth = t, r.stroke()
        },
        l = function () {
          var e, n;
          r.lineWidth = 1, r.fillStyle = t.scaleColor, r.save();
          for (var i = 24; i > 0; --i) i % 6 == 0 ? (n = t.scaleLength, e = 0) : (n = .6 * t.scaleLength, e = t.scaleLength - n), r.fillRect(-t.size / 2 + e, 0, n, 1), r.rotate(Math.PI / 12);
          r.restore()
        },
        c = function () {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
            window.setTimeout(e, 1e3 / 60)
          }
        }(),
        u = function () {
          t.scaleColor && l(), t.trackColor && s(t.trackColor, t.trackWidth || t.lineWidth, 1)
        };
      this.getCanvas = function () {
        return i
      }, this.getCtx = function () {
        return r
      }, this.clear = function () {
        r.clearRect(t.size / -2, t.size / -2, t.size, t.size)
      }, this.draw = function (e) {
        t.scaleColor || t.trackColor ? r.getImageData && r.putImageData ? n ? r.putImageData(n, 0, 0) : (u(), n = r.getImageData(0, 0, t.size * o, t.size * o)) : (this.clear(), u()) : this.clear(), r.lineCap = t.lineCap;
        var i;
        i = "function" == typeof t.barColor ? t.barColor(e) : t.barColor, s(i, t.lineWidth, e / 100)
      }.bind(this), this.animate = function (e, n) {
        var i = Date.now();
        t.onStart(e, n);
        var r = function () {
          var o = Math.min(Date.now() - i, t.animate.duration),
            a = t.easing(this, o, e, n - e, t.animate.duration);
          this.draw(a), t.onStep(e, n, a), o >= t.animate.duration ? t.onStop(e, n) : c(r)
        }.bind(this);
        c(r)
      }.bind(this)
    },
    n = function (e, n) {
      var i = {
        barColor: "#ef1e25",
        trackColor: "#f9f9f9",
        scaleColor: "#dfe0e0",
        scaleLength: 5,
        lineCap: "round",
        lineWidth: 3,
        trackWidth: void 0,
        size: 110,
        rotate: 0,
        animate: {
          duration: 1e3,
          enabled: !0
        },
        easing: function (e, t, n, i, r) {
          return t /= r / 2, t < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
        },
        onStart: function (e, t) {},
        onStep: function (e, t, n) {},
        onStop: function (e, t) {}
      };
      if (void 0 !== t) i.renderer = t;
      else {
        if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
        i.renderer = SVGRenderer
      }
      var r = {},
        o = 0,
        a = function () {
          this.el = e, this.options = r;
          for (var t in i) i.hasOwnProperty(t) && (r[t] = n && void 0 !== n[t] ? n[t] : i[t], "function" == typeof r[t] && (r[t] = r[t].bind(this)));
          "string" == typeof r.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[r.easing]) ? r.easing = jQuery.easing[r.easing] : r.easing = i.easing, "number" == typeof r.animate && (r.animate = {
            duration: r.animate,
            enabled: !0
          }), "boolean" != typeof r.animate || r.animate || (r.animate = {
            duration: 1e3,
            enabled: r.animate
          }), this.renderer = new r.renderer(e, r), this.renderer.draw(o), e.dataset && e.dataset.percent ? this.update(parseFloat(e.dataset.percent)) : e.getAttribute && e.getAttribute("data-percent") && this.update(parseFloat(e.getAttribute("data-percent")))
        }.bind(this);
      this.update = function (e) {
        return e = parseFloat(e), r.animate.enabled ? this.renderer.animate(o, e) : this.renderer.draw(e), o = e, this
      }.bind(this), this.disableAnimation = function () {
        return r.animate.enabled = !1, this
      }, this.enableAnimation = function () {
        return r.animate.enabled = !0, this
      }, a()
    };
  e.fn.easyPieChart = function (t) {
    return this.each(function () {
      var i;
      e.data(this, "easyPieChart") || (i = e.extend({}, t, e(this).data()), e.data(this, "easyPieChart", new n(this, i)))
    })
  }
}),
function (e) {
  var t = this,
    n = "input[type=range]",
    i = !1,
    r = void 0,
    o = function () {
      var n = e('<span class="thumb"><span class="value"></span></span>');
      e(t).after(n)
    };
  e(n).each(o), e(document).on("change", n, function () {
    var n = e(t);
    n.siblings(".thumb").find(".value").html(n.val())
  }), e(document).on("input mousedown touchstart", n, function (n) {
    var a = e(t),
      s = a.siblings(".thumb"),
      l = a.outerWidth();
    (!s.length && o(), s.find(".value").html(a.val()), i = !0, a.addClass("active"), s.hasClass("active") || s.velocity({
      height: "30px",
      width: "30px",
      top: "-20px",
      marginLeft: "-15px"
    }, {
      duration: 300,
      easing: "easeOutExpo"
    }), "input" !== n.type) && (r = void 0 === n.pageX || null === n.pageX ? n.originalEvent.touches[0].pageX - e(t).offset().left : n.pageX - e(t).offset().left, r < 0 ? r = 0 : r > l && (r = l), s.addClass("active").css("left", r));
    s.find(".value").html(a.val())
  }), e(document).on("mouseup touchend", ".range-field", function () {
    i = !1, e(t).removeClass("active")
  }), e(document).on("mousemove touchmove", ".range-field", function (t) {
    var r = e(this).children(".thumb"),
      o = void 0;
    if (i) {
      r.hasClass("active") || r.velocity({
        height: "30px",
        width: "30px",
        top: "-20px",
        marginLeft: "-15px"
      }, {
        duration: 300,
        easing: "easeOutExpo"
      });
      o = void 0 === t.pageX || null === t.pageX ? t.originalEvent.touches[0].pageX - e(this).offset().left : t.pageX - e(this).offset().left;
      var a = e(this).outerWidth();
      o < 0 ? o = 0 : o > a && (o = a), r.addClass("active").css("left", o), r.find(".value").html(r.siblings(n).val())
    }
  }), e(document).on("mouseout touchleave", ".range-field", function () {
    if (!i) {
      var n = e(t).children(".thumb");
      n.hasClass("active") && n.velocity({
        height: "0",
        width: "0",
        top: "10px",
        marginLeft: "-6px"
      }, {
        duration: 100
      }), n.removeClass("active")
    }
  })
}(jQuery),
function (e) {
  e(document).on("change", '.file-field input[type="file"]', function (t) {
    for (var n = e(t.target), i = n.closest(".file-field"), r = i.find("input.file-path"), o = n[0].files, a = [], s = 0; s < o.length; s++) {
      var l = o[s].name;
      a.push(l)
    }
    r.val(a.join(", ")), r.trigger("change")
  })
}(jQuery),
function (e) {
  e.fn.material_select = function (t) {
    function n(e, t, n) {
      var r = e.indexOf(t),
        o = r === -1;
      return o ? e.push(t) : e.splice(r, 1), n.siblings("ul.dropdown-content").find("li").eq(t).toggleClass("active"), n.find("option").eq(t).prop("selected", o), i(e, n), o
    }

    function i(e, t) {
      for (var n = "", i = 0, r = e.length; i < r; i++) {
        var o = t.find("option").eq(e[i]).text();
        n += 0 === i ? o : ", " + o
      }
      "" === n && (n = t.find("option:disabled").eq(0).text()), t.siblings("input.select-dropdown").val(n)
    }

    function r() {
      var e = (new Date).getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
        var n = (e + 16 * Math.random()) % 16 | 0;
        return e = Math.floor(e / 16), ("x" == t ? n : 3 & n | 8).toString(16)
      })
    }
    e(this).each(function () {
      var i = e(this);
      if (!i.hasClass("browser-default")) {
        var o = Boolean(i.attr("multiple")),
          a = i.data("select-id");
        if (a && (i.parent().find("span.caret").remove(), i.parent().find("input").remove(), i.unwrap(), e("ul#select-options-" + a).remove()), "destroy" === t) return void i.data("select-id", null).removeClass("initialized");
        var s = r();
        i.data("select-id", s);
        var l = e('<div class="select-wrapper"></div>');
        l.addClass(i.attr("class"));
        var c = e('<ul id="select-options-' + s + '" class="dropdown-content select-dropdown ' + (o ? "multiple-select-dropdown" : "") + '"></ul>'),
          u = i.children("option, optgroup"),
          d = [],
          f = !1,
          h = i.find("option:selected").html() || i.find("option:first").html() || "",
          p = function () {
            var t = e(this).closest("ul"),
              n = e(this).val();
            t.find("li").find("span.filtrable").each(function () {
              "string" == typeof this.outerText && (this.outerText.toLowerCase().indexOf(n.toLowerCase()) === -1 ? (e(this).hide(), e(this).parent().hide()) : (e(this).show(), e(this).parent().show()))
            })
          },
          m = Boolean(i.attr("searchable"));
        m && function () {
          var t = i.attr("searchable"),
            n = e('<span class="search-wrap"><input type="text" class="search" placeholder="' + t + '"></span>');
          c.append(n), n.find(".search").keyup(p)
        }();
        var g = function (t, n, i) {
          var r = n.is(":disabled") ? "disabled " : "",
            o = "optgroup-option" === i ? "optgroup-option " : "",
            a = n.data("icon"),
            s = n.attr("class");
          if (a) {
            var l = "";
            return s && (l = ' class="' + s + '"'), "multiple" === i ? c.append(e('<li class="' + r + '"><img alt="" src="' + a + '"' + l + '><span class="filtrable"><input type="checkbox"' + r + "/><label></label>" + n.html() + "</span></li>")) : c.append(e('<li class="' + r + o + '"><img alt="" src="' + a + '"' + l + '><span class="filtrable">' + n.html() + "</span></li>")), !0
          }
          "multiple" === i ? c.append(e('<li class="' + r + '"><span class="filtrable"><input type="checkbox"' + r + "/><label></label>" + n.html() + "</span></li>")) : c.append(e('<li class="' + r + o + '"><span class="filtrable">' + n.html() + "</span></li>"))
        };
        u.length && u.each(function () {
          if (e(this).is("option")) o ? g(0, e(this), "multiple") : g(0, e(this));
          else if (e(this).is("optgroup")) {
            var t = e(this).children("option");
            c.append(e('<li class="optgroup"><span>' + e(this).attr("label") + "</span></li>")), t.each(function () {
              g(0, e(this), "optgroup-option")
            })
          }
        }), c.find("li:not(.optgroup)").each(function (r) {
          e(this).click(function (a) {
            if (!e(this).hasClass("disabled") && !e(this).hasClass("optgroup")) {
              var s = !0;
              o ? (e('input[type="checkbox"]', this).prop("checked", function (e, t) {
                return !t
              }), s = n(d, e(this).index() - 1, i), b.trigger("focus")) : (c.find("li").removeClass("active"), e(this).toggleClass("active"), b.val(e(this).text())), x(c, e(this)), i.find("option").eq(r).prop("selected", s), i.trigger("change"), void 0 !== t && t()
            }
            a.stopPropagation()
          })
        }), i.wrap(l);
        var v = e('<span class="caret">&#9660;</span>');
        i.is(":disabled") && v.addClass("disabled");
        var y = h.replace(/"/g, "&quot;"),
          b = e('<input type="text" class="select-dropdown" readonly="true" ' + (i.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + s + '" value="' + y + '"/>');
        i.before(b), b.before(v), b.after(c), i.is(":disabled") || b.dropdown({
          hover: !1,
          closeOnClick: !1
        }), i.attr("tabindex") && e(b[0]).attr("tabindex", i.attr("tabindex")), i.addClass("initialized"), b.on({
          focus: function () {
            if (e("ul.select-dropdown").not(c[0]).is(":visible") && e("input.select-dropdown").trigger("close"), !c.is(":visible")) {
              e(this).trigger("open", ["focus"]);
              var t = e(this).val();
              x(c, c.find("li").filter(function () {
                return e(this).text().toLowerCase() === t.toLowerCase()
              })[0])
            }
          },
          click: function (e) {
            e.stopPropagation()
          }
        }), b.on("blur", function () {
          o || m || e(this).trigger("close"), c.find("li.selected").removeClass("selected")
        }), !o && m && c.find("li").on("click", function () {
          b.trigger("close")
        }), c.hover(function () {
          f = !0
        }, function () {
          f = !1
        }), e(window).on({
          click: function () {
            (o || m) && (f || b.trigger("close"))
          }
        }), o && i.find("option:selected:not(:disabled)").each(function () {
          var t = e(this).index();
          n(d, t, i), c.find("li").eq(t).find(":checkbox").prop("checked", !0)
        });
        var x = function (t, n) {
            if (n) {
              t.find("li.selected").removeClass("selected");
              var i = e(n);
              i.addClass("selected"), c.scrollTo(i)
            }
          },
          w = [],
          C = function (t) {
            if (9 == t.which) return void b.trigger("close");
            if (40 == t.which && !c.is(":visible")) return void b.trigger("open");
            if (13 != t.which || c.is(":visible")) {
              t.preventDefault();
              var n = String.fromCharCode(t.which).toLowerCase(),
                i = [9, 13, 27, 38, 40];
              if (n && i.indexOf(t.which) === -1) {
                w.push(n);
                var r = w.join(""),
                  a = c.find("li").filter(function () {
                    return 0 === e(this).text().toLowerCase().indexOf(r)
                  })[0];
                a && x(c, a)
              }
              if (13 == t.which) {
                var s = c.find("li.selected:not(.disabled)")[0];
                s && (e(s).trigger("click"), o || b.trigger("close"))
              }
              40 == t.which && (a = c.find("li.selected").length ? c.find("li.selected").next("li:not(.disabled)")[0] : c.find("li:not(.disabled)")[0], x(c, a)), 27 == t.which && b.trigger("close"), 38 == t.which && (a = c.find("li.selected").prev("li:not(.disabled)")[0]) && x(c, a), setTimeout(function () {
                w = []
              }, 1e3)
            }
          };
        b.on("keydown", C)
      }
    })
  }
}(jQuery), jQuery("select").siblings("input.select-dropdown").on("mousedown", function (e) {
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (e.clientX >= e.target.clientWidth || e.clientY >= e.target.clientHeight) && e.preventDefault()
  }),
  function (e) {
    "function" == typeof define && define.amd ? define("picker", ["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : this.Picker = e(jQuery)
  }(function (e) {
    function t(o, a, l, f) {
      function h() {
        return t._.node("div", t._.node("div", t._.node("div", t._.node("div", E.component.nodes(C.open), k.box), k.wrap), k.frame), k.holder, 'tabindex="-1"')
      }

      function p() {
        _.data(a, E).addClass(k.input).val(_.data("value") ? E.get("select", T.format) : o.value), T.editable || _.on("focus." + C.id + " click." + C.id, function (e) {
          e.preventDefault(), E.open()
        }).on("keydown." + C.id, x), r(o, {
          haspopup: !0,
          expanded: !1,
          readonly: !1,
          owns: o.id + "_root"
        })
      }

      function m() {
        r(E.$root[0], "hidden", !0)
      }

      function g() {
        E.$holder.on({
          keydown: x,
          "focus.toOpen": b,
          blur: function () {
            _.removeClass(k.target)
          },
          focusin: function (e) {
            E.$root.removeClass(k.focused), e.stopPropagation()
          },
          "mousedown click": function (t) {
            var n = t.target;
            n != E.$holder[0] && (t.stopPropagation(), "mousedown" != t.type || e(n).is("input, select, textarea, button, option") || (t.preventDefault(), E.$holder[0].focus()))
          }
        }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function () {
          var t = e(this),
            n = t.data(),
            i = t.hasClass(k.navDisabled) || t.hasClass(k.disabled),
            r = s();
          r = r && (r.type || r.href), (i || r && !e.contains(E.$root[0], r)) && E.$holder[0].focus(), !i && n.nav ? E.set("highlight", E.component.item.highlight, {
            nav: n.nav
          }) : !i && "pick" in n ? (E.set("select", n.pick), T.closeOnSelect && E.close(!0)) : n.clear ? (E.clear(), T.closeOnClear && E.close(!0)) : n.close && E.close(!0)
        })
      }

      function v() {
        var t;
        T.hiddenName === !0 ? (t = o.name, o.name = "") : (t = ["string" == typeof T.hiddenPrefix ? T.hiddenPrefix : "", "string" == typeof T.hiddenSuffix ? T.hiddenSuffix : "_submit"], t = t[0] + o.name + t[1]), E._hidden = e('<input type=hidden name="' + t + '"' + (_.data("value") || o.value ? ' value="' + E.get("select", T.formatSubmit) + '"' : "") + ">")[0], _.on("change." + C.id, function () {
          E._hidden.value = o.value ? E.get("select", T.formatSubmit) : ""
        })
      }

      function y() {
        w && d ? E.$holder.find("." + k.frame).one("transitionend", function () {
          E.$holder[0].focus()
        }) : E.$holder[0].focus()
      }

      function b(e) {
        e.stopPropagation(), _.addClass(k.target), E.$root.addClass(k.focused), E.open()
      }

      function x(e) {
        var t = e.keyCode,
          n = /^(8|46)$/.test(t);
        if (27 == t) return E.close(!0), !1;
        (32 == t || n || !C.open && E.component.key[t]) && (e.preventDefault(), e.stopPropagation(), n ? E.clear().close() : E.open())
      }
      if (!o) return t;
      var w = !1,
        C = {
          id: o.id || "P" + Math.abs(~~(Math.random() * new Date))
        },
        T = l ? e.extend(!0, {}, l.defaults, f) : f || {},
        k = e.extend({}, t.klasses(), T.klass),
        _ = e(o),
        S = function () {
          return this.start()
        },
        E = S.prototype = {
          constructor: S,
          $node: _,
          start: function () {
            return C && C.start ? E : (C.methods = {}, C.start = !0, C.open = !1, C.type = o.type, o.autofocus = o == s(), o.readOnly = !T.editable, o.id = o.id || C.id, "text" != o.type && (o.type = "text"), E.component = new l(E, T), E.$root = e('<div class="' + k.picker + '" id="' + o.id + '_root" />'), m(), E.$holder = e(h()).appendTo(E.$root), g(), T.formatSubmit && v(), p(), T.containerHidden ? e(T.containerHidden).append(E._hidden) : _.after(E._hidden), T.container ? e(T.container).append(E.$root) : _.after(E.$root), E.on({
              start: E.component.onStart,
              render: E.component.onRender,
              stop: E.component.onStop,
              open: E.component.onOpen,
              close: E.component.onClose,
              set: E.component.onSet
            }).on({
              start: T.onStart,
              render: T.onRender,
              stop: T.onStop,
              open: T.onOpen,
              close: T.onClose,
              set: T.onSet
            }), w = n(E.$holder[0]), o.autofocus && E.open(), E.trigger("start").trigger("render"))
          },
          render: function (t) {
            return t ? (E.$holder = e(h()), g(), E.$root.html(E.$holder)) : E.$root.find("." + k.box).html(E.component.nodes(C.open)), E.trigger("render")
          },
          stop: function () {
            return C.start ? (E.close(), E._hidden && E._hidden.parentNode.removeChild(E._hidden), E.$root.remove(), _.removeClass(k.input).removeData(a), setTimeout(function () {
              _.off("." + C.id)
            }, 0), o.type = C.type, o.readOnly = !1, E.trigger("stop"), C.methods = {}, C.start = !1, E) : E
          },
          open: function (n) {
            return C.open ? E : (_.addClass(k.active), r(o, "expanded", !0), setTimeout(function () {
              E.$root.addClass(k.opened), r(E.$root[0], "hidden", !1)
            }, 0), n !== !1 && (C.open = !0, w && u.css("overflow", "hidden").css("padding-right", "+=" + i()), y(), c.on("click." + C.id + " focusin." + C.id, function (e) {
              var t = e.target;
              t != o && t != document && 3 != e.which && E.close(t === E.$holder[0])
            }).on("keydown." + C.id, function (n) {
              var i = n.keyCode,
                r = E.component.key[i],
                o = n.target;
              27 == i ? E.close(!0) : o != E.$holder[0] || !r && 13 != i ? e.contains(E.$root[0], o) && 13 == i && (n.preventDefault(), o.click()) : (n.preventDefault(), r ? t._.trigger(E.component.key.go, E, [t._.trigger(r)]) : E.$root.find("." + k.highlighted).hasClass(k.disabled) || (E.set("select", E.component.item.highlight), T.closeOnSelect && E.close(!0)))
            })), E.trigger("open"))
          },
          close: function (e) {
            return e && (T.editable ? o.focus() : (E.$holder.off("focus.toOpen").focus(), setTimeout(function () {
              E.$holder.on("focus.toOpen", b)
            }, 0))), _.removeClass(k.active), r(o, "expanded", !1), setTimeout(function () {
              E.$root.removeClass(k.opened + " " + k.focused), r(E.$root[0], "hidden", !0)
            }, 0), C.open ? (C.open = !1, w && u.css("overflow", "").css("padding-right", "-=" + i()), c.off("." + C.id), E.trigger("close")) : E
          },
          clear: function (e) {
            return E.set("clear", null, e)
          },
          set: function (t, n, i) {
            var r, o, a = e.isPlainObject(t),
              s = a ? t : {};
            if (i = a && e.isPlainObject(n) ? n : i || {}, t) {
              a || (s[t] = n);
              for (r in s) o = s[r], r in E.component.item && (void 0 === o && (o = null), E.component.set(r, o, i)), "select" != r && "clear" != r || _.val("clear" == r ? "" : E.get(r, T.format)).trigger("change");
              E.render()
            }
            return i.muted ? E : E.trigger("set", s)
          },
          get: function (e, n) {
            if (e = e || "value", null != C[e]) return C[e];
            if ("valueSubmit" == e) {
              if (E._hidden) return E._hidden.value;
              e = "value"
            }
            if ("value" == e) return o.value;
            if (e in E.component.item) {
              if ("string" == typeof n) {
                var i = E.component.get(e);
                return i ? t._.trigger(E.component.formats.toString, E.component, [n, i]) : ""
              }
              return E.component.get(e)
            }
          },
          on: function (t, n, i) {
            var r, o, a = e.isPlainObject(t),
              s = a ? t : {};
            if (t) {
              a || (s[t] = n);
              for (r in s) o = s[r], i && (r = "_" + r), C.methods[r] = C.methods[r] || [], C.methods[r].push(o)
            }
            return E
          },
          off: function () {
            var e, t, n = arguments;
            for (e = 0, namesCount = n.length; e < namesCount; e += 1)(t = n[e]) in C.methods && delete C.methods[t];
            return E
          },
          trigger: function (e, n) {
            var i = function (e) {
              var i = C.methods[e];
              i && i.map(function (e) {
                t._.trigger(e, E, [n])
              })
            };
            return i("_" + e), i(e), E
          }
        };
      return new S
    }

    function n(e) {
      var t;
      return e.currentStyle ? t = e.currentStyle.position : window.getComputedStyle && (t = getComputedStyle(e).position), "fixed" == t
    }

    function i() {
      if (u.height() <= l.height()) return 0;
      var t = e('<div style="visibility:hidden;width:100px" />').appendTo("body"),
        n = t[0].offsetWidth;
      t.css("overflow", "scroll");
      var i = e('<div style="width:100%" />').appendTo(t),
        r = i[0].offsetWidth;
      return t.remove(), n - r
    }

    function r(t, n, i) {
      if (e.isPlainObject(n))
        for (var r in n) o(t, r, n[r]);
      else o(t, n, i)
    }

    function o(e, t, n) {
      e.setAttribute(("role" == t ? "" : "aria-") + t, n)
    }

    function a(t, n) {
      e.isPlainObject(t) || (t = {
        attribute: n
      }), n = "";
      for (var i in t) {
        var r = ("role" == i ? "" : "aria-") + i;
        n += null == t[i] ? "" : r + '="' + t[i] + '"'
      }
      return n
    }

    function s() {
      try {
        return document.activeElement
      } catch (e) {}
    }
    var l = e(window),
      c = e(document),
      u = e(document.documentElement),
      d = null != document.documentElement.style.transition;
    return t.klasses = function (e) {
      return e = e || "picker", {
        picker: e,
        opened: e + "--opened",
        focused: e + "--focused",
        input: e + "__input",
        active: e + "__input--active",
        target: e + "__input--target",
        holder: e + "__holder",
        frame: e + "__frame",
        wrap: e + "__wrap",
        box: e + "__box"
      }
    }, t._ = {
      group: function (e) {
        for (var n, i = "", r = t._.trigger(e.min, e); r <= t._.trigger(e.max, e, [r]); r += e.i) n = t._.trigger(e.item, e, [r]), i += t._.node(e.node, n[0], n[1], n[2]);
        return i
      },
      node: function (t, n, i, r) {
        return n ? (n = e.isArray(n) ? n.join("") : n, i = i ? ' class="' + i + '"' : "", r = r ? " " + r : "", "<" + t + i + r + ">" + n + "</" + t + ">") : ""
      },
      lead: function (e) {
        return (e < 10 ? "0" : "") + e
      },
      trigger: function (e, t, n) {
        return "function" == typeof e ? e.apply(t, n || []) : e
      },
      digits: function (e) {
        return /\d/.test(e[1]) ? 2 : 1
      },
      isDate: function (e) {
        return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate())
      },
      isInteger: function (e) {
        return {}.toString.call(e).indexOf("Number") > -1 && e % 1 == 0
      },
      ariaAttr: a
    }, t.extend = function (n, i) {
      e.fn[n] = function (r, o) {
        var a = this.data(n);
        return "picker" == r ? a : a && "string" == typeof r ? t._.trigger(a[r], a, [o]) : this.each(function () {
          e(this).data(n) || new t(this, n, i, r)
        })
      }, e.fn[n].defaults = i.defaults
    }, t
  }),
  function (e) {
    "function" == typeof define && define.amd ? define(["picker", "jquery"], e) : "object" == typeof exports ? module.exports = e(require("./picker.js"), require("jquery")) : e(Picker, jQuery)
  }(function (e, t) {
    function n(e, t) {
      var n = this,
        i = e.$node[0],
        r = i.value,
        o = e.$node.data("value"),
        a = o || r,
        s = o ? t.formatSubmit : t.format,
        l = function () {
          return i.currentStyle ? "rtl" == i.currentStyle.direction : "rtl" == getComputedStyle(e.$root[0]).direction
        };
      n.settings = t, n.$node = e.$node, n.queue = {
        min: "measure create",
        max: "measure create",
        now: "now create",
        select: "parse create validate",
        highlight: "parse navigate create validate",
        view: "parse create validate viewset",
        disable: "deactivate",
        enable: "activate"
      }, n.item = {}, n.item.clear = null, n.item.disable = (t.disable || []).slice(0), n.item.enable = - function (e) {
        return e[0] === !0 ? e.shift() : -1
      }(n.item.disable), n.set("min", t.min).set("max", t.max).set("now"), a ? n.set("select", a, {
        format: s,
        defaultValue: !0
      }) : n.set("select", null).set("highlight", n.item.now), n.key = {
        40: 7,
        38: -7,
        39: function () {
          return l() ? -1 : 1
        },
        37: function () {
          return l() ? 1 : -1
        },
        go: function (e) {
          var t = n.item.highlight,
            i = new Date(t.year, t.month, t.date + e);
          n.set("highlight", i, {
            interval: e
          }), this.render()
        }
      }, e.on("render", function () {
        e.$root.find("." + t.klass.selectMonth).on("change", function () {
          var n = this.value;
          n && (e.set("highlight", [e.get("view").year, n, e.get("highlight").date]), e.$root.find("." + t.klass.selectMonth).trigger("focus"))
        }), e.$root.find("." + t.klass.selectYear).on("change", function () {
          var n = this.value;
          n && (e.set("highlight", [n, e.get("view").month, e.get("highlight").date]), e.$root.find("." + t.klass.selectYear).trigger("focus"))
        })
      }, 1).on("open", function () {
        var i = "";
        n.disabled(n.get("now")) && (i = ":not(." + t.klass.buttonToday + ")"), e.$root.find("button" + i + ", select").attr("disabled", !1)
      }, 1).on("close", function () {
        e.$root.find("button, select").attr("disabled", !0)
      }, 1)
    }
    var i = e._;
    n.prototype.set = function (e, t, n) {
      var i = this,
        r = i.item;
      return null === t ? ("clear" == e && (e = "select"), r[e] = t, i) : (r["enable" == e ? "disable" : "flip" == e ? "enable" : e] = i.queue[e].split(" ").map(function (r) {
        return t = i[r](e, t, n)
      }).pop(), "select" == e ? i.set("highlight", r.select, n) : "highlight" == e ? i.set("view", r.highlight, n) : e.match(/^(flip|min|max|disable|enable)$/) && (r.select && i.disabled(r.select) && i.set("select", r.select, n), r.highlight && i.disabled(r.highlight) && i.set("highlight", r.highlight, n)), i)
    }, n.prototype.get = function (e) {
      return this.item[e]
    }, n.prototype.create = function (e, n, r) {
      var o, a = this;
      return n = void 0 === n ? e : n, n == -(1 / 0) || n == 1 / 0 ? o = n : t.isPlainObject(n) && i.isInteger(n.pick) ? n = n.obj : t.isArray(n) ? (n = new Date(n[0], n[1], n[2]), n = i.isDate(n) ? n : a.create().obj) : n = i.isInteger(n) || i.isDate(n) ? a.normalize(new Date(n), r) : a.now(e, n, r), {
        year: o || n.getFullYear(),
        month: o || n.getMonth(),
        date: o || n.getDate(),
        day: o || n.getDay(),
        obj: o || n,
        pick: o || n.getTime()
      }
    }, n.prototype.createRange = function (e, n) {
      var r = this,
        o = function (e) {
          return e === !0 || t.isArray(e) || i.isDate(e) ? r.create(e) : e
        };
      return i.isInteger(e) || (e = o(e)), i.isInteger(n) || (n = o(n)), i.isInteger(e) && t.isPlainObject(n) ? e = [n.year, n.month, n.date + e] : i.isInteger(n) && t.isPlainObject(e) && (n = [e.year, e.month, e.date + n]), {
        from: o(e),
        to: o(n)
      }
    }, n.prototype.withinRange = function (e, t) {
      return e = this.createRange(e.from, e.to), t.pick >= e.from.pick && t.pick <= e.to.pick
    }, n.prototype.overlapRanges = function (e, t) {
      var n = this;
      return e = n.createRange(e.from, e.to), t = n.createRange(t.from, t.to), n.withinRange(e, t.from) || n.withinRange(e, t.to) || n.withinRange(t, e.from) || n.withinRange(t, e.to)
    }, n.prototype.now = function (e, t, n) {
      return t = new Date, n && n.rel && t.setDate(t.getDate() + n.rel), this.normalize(t, n)
    }, n.prototype.navigate = function (e, n, i) {
      var r, o, a, s, l = t.isArray(n),
        c = t.isPlainObject(n),
        u = this.item.view;
      if (l || c) {
        for (c ? (o = n.year, a = n.month, s = n.date) : (o = +n[0], a = +n[1], s = +n[2]), i && i.nav && u && u.month !== a && (o = u.year, a = u.month), r = new Date(o, a + (i && i.nav ? i.nav : 0), 1), o = r.getFullYear(), a = r.getMonth(); new Date(o, a, s).getMonth() !== a;) s -= 1;
        n = [o, a, s]
      }
      return n
    }, n.prototype.normalize = function (e) {
      return e.setHours(0, 0, 0, 0), e
    }, n.prototype.measure = function (e, t) {
      var n = this;
      return t ? "string" == typeof t ? t = n.parse(e, t) : i.isInteger(t) && (t = n.now(e, t, {
        rel: t
      })) : t = "min" == e ? -(1 / 0) : 1 / 0, t
    }, n.prototype.viewset = function (e, t) {
      return this.create([t.year, t.month, 1])
    }, n.prototype.validate = function (e, n, r) {
      var o, a, s, l, c = this,
        u = n,
        d = r && r.interval ? r.interval : 1,
        f = c.item.enable === -1,
        h = c.item.min,
        p = c.item.max,
        m = f && c.item.disable.filter(function (e) {
          if (t.isArray(e)) {
            var r = c.create(e).pick;
            r < n.pick ? o = !0 : r > n.pick && (a = !0)
          }
          return i.isInteger(e)
        }).length;
      if ((!r || !r.nav && !r.defaultValue) && (!f && c.disabled(n) || f && c.disabled(n) && (m || o || a) || !f && (n.pick <= h.pick || n.pick >= p.pick)))
        for (f && !m && (!a && d > 0 || !o && d < 0) && (d *= -1); c.disabled(n) && (Math.abs(d) > 1 && (n.month < u.month || n.month > u.month) && (n = u, d = d > 0 ? 1 : -1), n.pick <= h.pick ? (s = !0, d = 1, n = c.create([h.year, h.month, h.date + (n.pick === h.pick ? 0 : -1)])) : n.pick >= p.pick && (l = !0, d = -1, n = c.create([p.year, p.month, p.date + (n.pick === p.pick ? 0 : 1)])), !s || !l);) n = c.create([n.year, n.month, n.date + d]);
      return n
    }, n.prototype.disabled = function (e) {
      var n = this,
        r = n.item.disable.filter(function (r) {
          return i.isInteger(r) ? e.day === (n.settings.firstDay ? r : r - 1) % 7 : t.isArray(r) || i.isDate(r) ? e.pick === n.create(r).pick : t.isPlainObject(r) ? n.withinRange(r, e) : void 0
        });
      return r = r.length && !r.filter(function (e) {
        return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted
      }).length, n.item.enable === -1 ? !r : r || e.pick < n.item.min.pick || e.pick > n.item.max.pick
    }, n.prototype.parse = function (e, t, n) {
      var r = this,
        o = {};
      return t && "string" == typeof t ? (n && n.format || (n = n || {}, n.format = r.settings.format), r.formats.toArray(n.format).map(function (e) {
        var n = r.formats[e],
          a = n ? i.trigger(n, r, [t, o]) : e.replace(/^!/, "").length;
        n && (o[e] = t.substr(0, a)), t = t.substr(a)
      }), [o.yyyy || o.yy, +(o.mm || o.m) - 1, o.dd || o.d]) : t
    }, n.prototype.formats = function () {
      function e(e, t, n) {
        var i = e.match(/[^\x00-\x7F]+|\w+/)[0];
        return n.mm || n.m || (n.m = t.indexOf(i) + 1), i.length
      }

      function t(e) {
        return e.match(/\w+/)[0].length
      }
      return {
        d: function (e, t) {
          return e ? i.digits(e) : t.date
        },
        dd: function (e, t) {
          return e ? 2 : i.lead(t.date)
        },
        ddd: function (e, n) {
          return e ? t(e) : this.settings.weekdaysShort[n.day]
        },
        dddd: function (e, n) {
          return e ? t(e) : this.settings.weekdaysFull[n.day]
        },
        m: function (e, t) {
          return e ? i.digits(e) : t.month + 1
        },
        mm: function (e, t) {
          return e ? 2 : i.lead(t.month + 1)
        },
        mmm: function (t, n) {
          var i = this.settings.monthsShort;
          return t ? e(t, i, n) : i[n.month]
        },
        mmmm: function (t, n) {
          var i = this.settings.monthsFull;
          return t ? e(t, i, n) : i[n.month]
        },
        yy: function (e, t) {
          return e ? 2 : ("" + t.year).slice(2)
        },
        yyyy: function (e, t) {
          return e ? 4 : t.year
        },
        toArray: function (e) {
          return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
        },
        toString: function (e, t) {
          var n = this;
          return n.formats.toArray(e).map(function (e) {
            return i.trigger(n.formats[e], n, [0, t]) || e.replace(/^!/, "")
          }).join("")
        }
      }
    }(), n.prototype.isDateExact = function (e, n) {
      var r = this;
      return i.isInteger(e) && i.isInteger(n) || "boolean" == typeof e && "boolean" == typeof n ? e === n : (i.isDate(e) || t.isArray(e)) && (i.isDate(n) || t.isArray(n)) ? r.create(e).pick === r.create(n).pick : !(!t.isPlainObject(e) || !t.isPlainObject(n)) && (r.isDateExact(e.from, n.from) && r.isDateExact(e.to, n.to))
    }, n.prototype.isDateOverlap = function (e, n) {
      var r = this,
        o = r.settings.firstDay ? 1 : 0;
      return i.isInteger(e) && (i.isDate(n) || t.isArray(n)) ? (e = e % 7 + o) === r.create(n).day + 1 : i.isInteger(n) && (i.isDate(e) || t.isArray(e)) ? (n = n % 7 + o) === r.create(e).day + 1 : !(!t.isPlainObject(e) || !t.isPlainObject(n)) && r.overlapRanges(e, n)
    }, n.prototype.flipEnable = function (e) {
      var t = this.item;
      t.enable = e || (t.enable == -1 ? 1 : -1)
    }, n.prototype.deactivate = function (e, n) {
      var r = this,
        o = r.item.disable.slice(0);
      return "flip" == n ? r.flipEnable() : n === !1 ? (r.flipEnable(1), o = []) : n === !0 ? (r.flipEnable(-1), o = []) : n.map(function (e) {
        for (var n, a = 0; a < o.length; a += 1)
          if (r.isDateExact(e, o[a])) {
            n = !0;
            break
          }
        n || (i.isInteger(e) || i.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && o.push(e)
      }), o
    }, n.prototype.activate = function (e, n) {
      var r = this,
        o = r.item.disable,
        a = o.length;
      return "flip" == n ? r.flipEnable() : n === !0 ? (r.flipEnable(1), o = []) : n === !1 ? (r.flipEnable(-1), o = []) : n.map(function (e) {
        var n, s, l, c;
        for (l = 0; l < a; l += 1) {
          if (s = o[l], r.isDateExact(s, e)) {
            n = o[l] = null, c = !0;
            break
          }
          if (r.isDateOverlap(s, e)) {
            t.isPlainObject(e) ? (e.inverted = !0, n = e) : t.isArray(e) ? (n = e, n[3] || n.push("inverted")) : i.isDate(e) && (n = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
            break
          }
        }
        if (n)
          for (l = 0; l < a; l += 1)
            if (r.isDateExact(o[l], e)) {
              o[l] = null;
              break
            }
        if (c)
          for (l = 0; l < a; l += 1)
            if (r.isDateOverlap(o[l], e)) {
              o[l] = null;
              break
            }
        n && o.push(n)
      }), o.filter(function (e) {
        return null != e
      })
    }, n.prototype.nodes = function (e) {
      var t = this,
        n = t.settings,
        r = t.item,
        o = r.now,
        a = r.select,
        s = r.highlight,
        l = r.view,
        c = r.disable,
        u = r.min,
        d = r.max,
        f = function (e, t) {
          return n.firstDay && (e.push(e.shift()), t.push(t.shift())), i.node("thead", i.node("tr", i.group({
            min: 0,
            max: 6,
            i: 1,
            node: "th",
            item: function (i) {
              return [e[i], n.klass.weekdays, 'scope=col title="' + t[i] + '"']
            }
          })))
        }((n.showWeekdaysFull ? n.weekdaysFull : n.weekdaysShort).slice(0), n.weekdaysFull.slice(0)),
        h = function (e) {
          return i.node("div", " ", n.klass["nav" + (e ? "Next" : "Prev")] + (e && l.year >= d.year && l.month >= d.month || !e && l.year <= u.year && l.month <= u.month ? " " + n.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + i.ariaAttr({
            role: "button",
            controls: t.$node[0].id + "_table"
          }) + ' title="' + (e ? n.labelMonthNext : n.labelMonthPrev) + '"')
        },
        p = function () {
          var r = n.showMonthsShort ? n.monthsShort : n.monthsFull;
          return n.selectMonths ? i.node("select", i.group({
            min: 0,
            max: 11,
            i: 1,
            node: "option",
            item: function (e) {
              return [r[e], 0, "value=" + e + (l.month == e ? " selected" : "") + (l.year == u.year && e < u.month || l.year == d.year && e > d.month ? " disabled" : "")]
            }
          }), n.klass.selectMonth, (e ? "" : "disabled") + " " + i.ariaAttr({
            controls: t.$node[0].id + "_table"
          }) + ' title="' + n.labelMonthSelect + '"') : i.node("div", r[l.month], n.klass.month)
        },
        m = function () {
          var r = l.year,
            o = n.selectYears === !0 ? 5 : ~~(n.selectYears / 2);
          if (o) {
            var a = u.year,
              s = d.year,
              c = r - o,
              f = r + o;
            if (a > c && (f += a - c, c = a), s < f) {
              var h = c - a,
                p = f - s;
              c -= h > p ? p : h, f = s
            }
            return i.node("select", i.group({
              min: c,
              max: f,
              i: 1,
              node: "option",
              item: function (e) {
                return [e, 0, "value=" + e + (r == e ? " selected" : "")]
              }
            }), n.klass.selectYear, (e ? "" : "disabled") + " " + i.ariaAttr({
              controls: t.$node[0].id + "_table"
            }) + ' title="' + n.labelYearSelect + '"')
          }
          return i.node("div", r, n.klass.year)
        };
      return i.node("div", (n.selectYears ? m() + p() : p() + m()) + h() + h(1), n.klass.header) + i.node("table", f + i.node("tbody", i.group({
        min: 0,
        max: 5,
        i: 1,
        node: "tr",
        item: function (e) {
          var r = n.firstDay && 0 === t.create([l.year, l.month, 1]).day ? -7 : 0;
          return [i.group({
            min: 7 * e - l.day + r + 1,
            max: function () {
              return this.min + 7 - 1
            },
            i: 1,
            node: "td",
            item: function (e) {
              e = t.create([l.year, l.month, e + (n.firstDay ? 1 : 0)]);
              var r = a && a.pick == e.pick,
                f = s && s.pick == e.pick,
                h = c && t.disabled(e) || e.pick < u.pick || e.pick > d.pick,
                p = i.trigger(t.formats.toString, t, [n.format, e]);
              return [i.node("div", e.date, function (t) {
                return t.push(l.month == e.month ? n.klass.infocus : n.klass.outfocus), o.pick == e.pick && t.push(n.klass.now), r && t.push(n.klass.selected), f && t.push(n.klass.highlighted), h && t.push(n.klass.disabled), t.join(" ")
              }([n.klass.day]), "data-pick=" + e.pick + " " + i.ariaAttr({
                role: "gridcell",
                label: p,
                selected: !(!r || t.$node.val() !== p) || null,
                activedescendant: !!f || null,
                disabled: !!h || null
              })), "", i.ariaAttr({
                role: "presentation"
              })]
            }
          })]
        }
      })), n.klass.table, 'id="' + t.$node[0].id + '_table" ' + i.ariaAttr({
        role: "grid",
        controls: t.$node[0].id,
        readonly: !0
      })) + i.node("div", i.node("button", n.today, n.klass.buttonToday, "type=button data-pick=" + o.pick + (e && !t.disabled(o) ? "" : " disabled") + " " + i.ariaAttr({
        controls: t.$node[0].id
      })) + i.node("button", n.clear, n.klass.buttonClear, "type=button data-clear=1" + (e ? "" : " disabled") + " " + i.ariaAttr({
        controls: t.$node[0].id
      })) + i.node("button", n.close, n.klass.buttonClose, "type=button data-close=true " + (e ? "" : " disabled") + " " + i.ariaAttr({
        controls: t.$node[0].id
      })), n.klass.footer)
    }, n.defaults = function (e) {
      return {
        labelMonthNext: "Next month",
        labelMonthPrev: "Previous month",
        labelMonthSelect: "Select a month",
        labelYearSelect: "Select a year",
        monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        today: "Today",
        clear: "Clear",
        close: "Close",
        closeOnSelect: !0,
        closeOnClear: !0,
        format: "d mmmm, yyyy",
        klass: {
          table: e + "table",
          header: e + "header",
          navPrev: e + "nav--prev",
          navNext: e + "nav--next",
          navDisabled: e + "nav--disabled",
          month: e + "month",
          year: e + "year",
          selectMonth: e + "select--month",
          selectYear: e + "select--year",
          weekdays: e + "weekday",
          day: e + "day",
          disabled: e + "day--disabled",
          selected: e + "day--selected",
          highlighted: e + "day--highlighted",
          now: e + "day--today",
          infocus: e + "day--infocus",
          outfocus: e + "day--outfocus",
          footer: e + "footer",
          buttonClear: e + "button--clear",
          buttonToday: e + "button--today",
          buttonClose: e + "button--close"
        }
      }
    }(e.klasses().picker + "__"), e.extend("pickadate", n)
  }), $.extend($.fn.pickadate.defaults, {
    selectMonths: !0,
    selectYears: 15,
    onRender: function () {
      var e = this.$root,
        t = this.get("highlight", "yyyy"),
        n = this.get("highlight", "dd"),
        i = this.get("highlight", "mmm"),
        r = this.get("highlight", "dddd");
      e.find(".picker__header").prepend('<div class="picker__date-display"><div class="picker__weekday-display">' + r + '</div><div class="picker__month-display"><div>' + i + '</div></div><div class="picker__day-display"><div>' + n + '</div></div><div    class="picker__year-display"><div>' + t + "</div></div></div>")
    }
  }),
  function () {
    function e(e) {
      return document.createElementNS(l, e)
    }

    function t(e) {
      return (e < 10 ? "0" : "") + e
    }

    function n(e) {
      var t = ++g + "";
      return e ? e + t : t
    }

    function i(i, a) {
      function l(e, t) {
        var n = d.offset(),
          i = /^touch/.test(e.type),
          r = n.left + v,
          o = n.top + v,
          l = (i ? e.originalEvent.touches[0] : e).pageX - r,
          u = (i ? e.originalEvent.touches[0] : e).pageY - o,
          f = Math.sqrt(l * l + u * u),
          m = !1;
        if (!t || !(f < y - x || f > y + x)) {
          e.preventDefault();
          var g = setTimeout(function () {
            I.popover.addClass("clockpicker-moving")
          }, 200);
          c && d.append(I.canvas), I.setHand(l, u, !t, !0), s.off(h).on(h, function (e) {
            e.preventDefault();
            var t = /^touch/.test(e.type),
              n = (t ? e.originalEvent.touches[0] : e).pageX - r,
              i = (t ? e.originalEvent.touches[0] : e).pageY - o;
            (m || n !== l || i !== u) && (m = !0, I.setHand(n, i, !1, !0))
          }), s.off(p).on(p, function (e) {
            s.off(p), e.preventDefault();
            var n = /^touch/.test(e.type),
              i = (n ? e.originalEvent.changedTouches[0] : e).pageX - r,
              c = (n ? e.originalEvent.changedTouches[0] : e).pageY - o;
            (t || m) && i === l && c === u && I.setHand(i, c), "hours" === I.currentView ? I.toggleView("minutes", C / 2) : a.autoclose && (I.minutesView.addClass("clockpicker-dial-out"), setTimeout(function () {
              I.done()
            }, C / 2)), d.prepend(R), clearTimeout(g), I.popover.removeClass("clockpicker-moving"), s.off(h)
          })
        }
      }
      var u = o(T),
        d = u.find(".clockpicker-plate"),
        m = u.find(".picker__holder"),
        g = u.find(".clockpicker-hours"),
        k = u.find(".clockpicker-minutes"),
        _ = u.find(".clockpicker-am-pm-block"),
        S = "INPUT" === i.prop("tagName"),
        E = S ? i : i.find("input"),
        A = o("label[for=" + E.attr("id") + "]"),
        I = this;
      if (this.id = n("cp"), this.element = i, this.holder = m, this.options = a, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = S, this.input = E, this.label = A, this.popover = u, this.plate = d, this.hoursView = g, this.minutesView = k, this.amPmBlock = _, this.spanHours = u.find(".clockpicker-span-hours"), this.spanMinutes = u.find(".clockpicker-span-minutes"), this.spanAmPm = u.find(".clockpicker-span-am-pm"), this.footer = u.find(".picker__footer"), this.amOrPm = "PM", a.twelvehour) {
        var D = ['<div class="clockpicker-am-pm-block">', '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">', "AM", "</button>", '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">', "PM", "</button>", "</div>"].join("");
        o(D);
        a.ampmclickable ? (this.spanAmPm.empty(), o('<div id="click-am">AM</div>').on("click", function () {
          I.spanAmPm.children("#click-am").addClass("text-primary"), I.spanAmPm.children("#click-pm").removeClass("text-primary"), I.amOrPm = "AM"
        }).appendTo(this.spanAmPm), o('<div id="click-pm">PM</div>').on("click", function () {
          I.spanAmPm.children("#click-pm").addClass("text-primary"), I.spanAmPm.children("#click-am").removeClass("text-primary"), I.amOrPm = "PM"
        }).appendTo(this.spanAmPm)) : (o('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click", function () {
          I.amOrPm = "AM", I.amPmBlock.children(".pm-button").removeClass("active"), I.amPmBlock.children(".am-button").addClass("active"), I.spanAmPm.empty().append("AM")
        }).appendTo(this.amPmBlock), o('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click", function () {
          I.amOrPm = "PM", I.amPmBlock.children(".am-button").removeClass("active"), I.amPmBlock.children(".pm-button").addClass("active"), I.spanAmPm.empty().append("PM")
        }).appendTo(this.amPmBlock))
      }
      a.darktheme && u.addClass("darktheme"), o('<button type="button" class="btn-flat clockpicker-button" tabindex="' + (a.twelvehour ? "3" : "1") + '">' + a.donetext + "</button>").click(o.proxy(this.done, this)).appendTo(this.footer), this.spanHours.click(o.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(o.proxy(this.toggleView, this, "minutes")), E.on("focus.clockpicker click.clockpicker", o.proxy(this.show, this));
      var O, P, M, L, N = o('<div class="clockpicker-tick"></div>');
      if (a.twelvehour)
        for (O = 1; O < 13; O += 1) P = N.clone(), M = O / 6 * Math.PI, L = y, P.css("font-size", "140%"), P.css({
          left: v + Math.sin(M) * L - x,
          top: v - Math.cos(M) * L - x
        }), P.html(0 === O ? "00" : O), g.append(P), P.on(f, l);
      else
        for (O = 0; O < 24; O += 1) {
          P = N.clone(), M = O / 6 * Math.PI;
          var F = O > 0 && O < 13;
          L = F ? b : y, P.css({
            left: v + Math.sin(M) * L - x,
            top: v - Math.cos(M) * L - x
          }), F && P.css("font-size", "120%"), P.html(0 === O ? "00" : O), g.append(P), P.on(f, l)
        }
      for (O = 0; O < 60; O += 5) P = N.clone(), M = O / 30 * Math.PI, P.css({
        left: v + Math.sin(M) * y - x,
        top: v - Math.cos(M) * y - x
      }), P.css("font-size", "140%"), P.html(t(O)), k.append(P), P.on(f, l);
      if (d.on(f, function (e) {
          0 === o(e.target).closest(".clockpicker-tick").length && l(e, !0)
        }), c) {
        var R = u.find(".clockpicker-canvas"),
          W = e("svg");
        W.setAttribute("class", "clockpicker-svg"), W.setAttribute("width", w), W.setAttribute("height", w);
        var H = e("g");
        H.setAttribute("transform", "translate(" + v + "," + v + ")");
        var V = e("circle");
        V.setAttribute("class", "clockpicker-canvas-bearing"), V.setAttribute("cx", 0), V.setAttribute("cy", 0), V.setAttribute("r", 2);
        var j = e("line");
        j.setAttribute("x1", 0), j.setAttribute("y1", 0);
        var B = e("circle");
        B.setAttribute("class", "clockpicker-canvas-bg"), B.setAttribute("r", x);
        var z = e("circle");
        z.setAttribute("class", "clockpicker-canvas-fg"), z.setAttribute("r", 5), H.appendChild(j), H.appendChild(B), H.appendChild(z), H.appendChild(V), W.appendChild(H), R.append(W), this.hand = j, this.bg = B, this.fg = z, this.bearing = V, this.g = H, this.canvas = R
      }
      r(this.options.init)
    }

    function r(e) {
      e && "function" == typeof e && e()
    }
    var o = window.jQuery,
      a = o(window),
      s = o(document),
      l = "http://www.w3.org/2000/svg",
      c = "SVGAngle" in window && function () {
        var e, t = document.createElement("div");
        return t.innerHTML = "<svg/>", e = (t.firstChild && t.firstChild.namespaceURI) == l, t.innerHTML = "", e
      }(),
      u = function () {
        var e = document.createElement("div").style;
        return "transition" in e || "WebkitTransition" in e || "MozTransition" in e || "msTransition" in e || "OTransition" in e
      }(),
      d = "ontouchstart" in window,
      f = "mousedown" + (d ? " touchstart" : ""),
      h = "mousemove.clockpicker" + (d ? " touchmove.clockpicker" : ""),
      p = "mouseup.clockpicker" + (d ? " touchend.clockpicker" : ""),
      m = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null,
      g = 0,
      v = 135,
      y = 110,
      b = 80,
      x = 20,
      w = 2 * v,
      C = u ? 350 : 1,
      T = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ":", '<span class="clockpicker-span-minutes"></span>', "</div>", '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<div class="clockpicker-am-pm-block">', "</div>", "</div>", '<div class="picker__footer">', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");
    i.DEFAULTS = {
      default: "",
      fromnow: 0,
      donetext: "Done",
      autoclose: !1,
      ampmclickable: !1,
      darktheme: !1,
      twelvehour: !0,
      vibrate: !0
    }, i.prototype.toggle = function () {
      this[this.isShown ? "hide" : "show"]()
    }, i.prototype.locate = function () {
      var e = this.element,
        t = this.popover;
      e.offset(), e.outerWidth(), e.outerHeight(), this.options.align;
      t.show()
    }, i.prototype.show = function (e) {
      if (!this.isShown) {
        r(this.options.beforeShow), o(":input").each(function () {
          o(this).attr("tabindex", -1)
        });
        var n = this;
        this.input.blur(), this.popover.addClass("picker--opened"), this.input.addClass("picker__input picker__input--active"), o(document.body).css("overflow", "hidden"), this.isAppended || (this.popover.insertAfter(this.input), this.options.twelvehour && (this.amOrPm = "PM", this.options.ampmclickable ? (this.spanAmPm.children("#click-pm").addClass("text-primary"), this.spanAmPm.children("#click-am").removeClass("text-primary")) : (this.amPmBlock.children(".am-button").removeClass("active"), this.amPmBlock.children(".pm-button").addClass("active"), this.spanAmPm.empty().append("PM"))), a.on("resize.clockpicker" + this.id, function () {
          n.isShown && n.locate()
        }), this.isAppended = !0);
        var i = ((this.input.prop("value") || this.options.default || "") + "").split(":");
        if (this.options.twelvehour && void 0 !== i[1] && (i[1] = i[1].replace("AM", "").replace("PM", "")), "now" === i[0]) {
          var l = new Date(+new Date + this.options.fromnow);
          i = [l.getHours(), l.getMinutes()]
        }
        this.hours = +i[0] || 0, this.minutes = +i[1] || 0, this.spanHours.html(t(this.hours)), this.spanMinutes.html(t(this.minutes)), this.toggleView("hours"), this.locate(), this.isShown = !0, s.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, function (e) {
          var t = o(e.target);
          0 === t.closest(n.popover.find(".picker__wrap")).length && 0 === t.closest(n.input).length && n.hide()
        }), s.on("keyup.clockpicker." + this.id, function (e) {
          27 === e.keyCode && n.hide()
        }), r(this.options.afterShow)
      }
    }, i.prototype.hide = function () {
      r(this.options.beforeHide), this.input.removeClass("picker__input picker__input--active"), this.popover.removeClass("picker--opened"), o(document.body).css("overflow", "visible"), this.isShown = !1, o(":input").each(function (e) {
        o(this).attr("tabindex", e + 1)
      }), s.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), s.off("keyup.clockpicker." + this.id), this.popover.hide(), r(this.options.afterHide)
    }, i.prototype.toggleView = function (e, t) {
      var n = !1;
      "minutes" === e && "visible" === o(this.hoursView).css("visibility") && (r(this.options.beforeHourSelect), n = !0);
      var i = "hours" === e,
        a = i ? this.hoursView : this.minutesView,
        s = i ? this.minutesView : this.hoursView;
      this.currentView = e, this.spanHours.toggleClass("text-primary", i), this.spanMinutes.toggleClass("text-primary", !i), s.addClass("clockpicker-dial-out"), a.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(t), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function () {
        s.css("visibility", "hidden")
      }, C), n && r(this.options.afterHourSelect)
    }, i.prototype.resetClock = function (e) {
      var t = this.currentView,
        n = this[t],
        i = "hours" === t,
        r = Math.PI / (i ? 6 : 30),
        o = n * r,
        a = i && n > 0 && n < 13 ? b : y,
        s = Math.sin(o) * a,
        l = -Math.cos(o) * a,
        u = this;
      c && e ? (u.canvas.addClass("clockpicker-canvas-out"), setTimeout(function () {
        u.canvas.removeClass("clockpicker-canvas-out"), u.setHand(s, l)
      }, e)) : this.setHand(s, l)
    }, i.prototype.setHand = function (e, n, i, r) {
      var a, s = Math.atan2(e, -n),
        l = "hours" === this.currentView,
        u = Math.PI / (l || i ? 6 : 30),
        d = Math.sqrt(e * e + n * n),
        f = this.options,
        h = l && d < (y + b) / 2,
        p = h ? b : y;
      if (f.twelvehour && (p = y), s < 0 && (s = 2 * Math.PI + s), a = Math.round(s / u), s = a * u, f.twelvehour ? l ? 0 === a && (a = 12) : (i && (a *= 5), 60 === a && (a = 0)) : l ? (12 === a && (a = 0), a = h ? 0 === a ? 12 : a : 0 === a ? 0 : a + 12) : (i && (a *= 5), 60 === a && (a = 0)), l ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : a % 5 == 0 ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : this.fg.setAttribute("class", "clockpicker-canvas-fg active"), this[this.currentView] !== a && m && this.options.vibrate && (this.vibrateTimer || (navigator[m](10), this.vibrateTimer = setTimeout(o.proxy(function () {
          this.vibrateTimer = null
        }, this), 100))), this[this.currentView] = a, this[l ? "spanHours" : "spanMinutes"].html(t(a)), !c) return void this[l ? "hoursView" : "minutesView"].find(".clockpicker-tick").each(function () {
        var e = o(this);
        e.toggleClass("active", a === +e.html())
      });
      r || !l && a % 5 ? (this.g.insertBefore(this.hand, this.bearing), this.g.insertBefore(this.bg, this.fg), this.bg.setAttribute("class", "clockpicker-canvas-bg clockpicker-canvas-bg-trans")) : (this.g.insertBefore(this.hand, this.bg), this.g.insertBefore(this.fg, this.bg), this.bg.setAttribute("class", "clockpicker-canvas-bg"));
      var g = Math.sin(s) * (p - x),
        v = -Math.cos(s) * (p - x),
        w = Math.sin(s) * p,
        C = -Math.cos(s) * p;
      this.hand.setAttribute("x2", g), this.hand.setAttribute("y2", v), this.bg.setAttribute("cx", w), this.bg.setAttribute("cy", C), this.fg.setAttribute("cx", w), this.fg.setAttribute("cy", C)
    }, i.prototype.done = function () {
      r(this.options.beforeDone), this.hide(), this.label.addClass("active");
      var e = this.input.prop("value"),
        n = t(this.hours) + ":" + t(this.minutes);
      this.options.twelvehour && (n += this.amOrPm), this.input.prop("value", n), n !== e && (this.input.triggerHandler("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), r(this.options.afterDone)
    }, i.prototype.remove = function () {
      this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.isShown && this.hide(), this.isAppended && (a.off("resize.clockpicker" + this.id), this.popover.remove())
    }, o.fn.pickatime = function (e) {
      var t = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var n = o(this),
          r = n.data("clockpicker");
        if (r) "function" == typeof r[e] && r[e].apply(r, t);
        else {
          var a = o.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
          n.data("clockpicker", new i(n, a))
        }
      })
    }
  }(),
  function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
  }(this, function () {
    "use strict";
    return function (e, t, n, i) {
      var r = {
        features: null,
        bind: function (e, t, n, i) {
          var r = (i ? "remove" : "add") + "EventListener";
          t = t.split(" ");
          for (var o = 0; o < t.length; o++) t[o] && e[r](t[o], n, !1)
        },
        isArray: function (e) {
          return e instanceof Array
        },
        createEl: function (e, t) {
          var n = document.createElement(t || "div");
          return e && (n.className = e), n
        },
        getScrollY: function () {
          var e = window.pageYOffset;
          return void 0 !== e ? e : document.documentElement.scrollTop
        },
        unbind: function (e, t, n) {
          r.bind(e, t, n, !0)
        },
        removeClass: function (e, t) {
          var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
          e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
        },
        addClass: function (e, t) {
          r.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
        },
        hasClass: function (e, t) {
          return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
        },
        getChildByClass: function (e, t) {
          for (var n = e.firstChild; n;) {
            if (r.hasClass(n, t)) return n;
            n = n.nextSibling
          }
        },
        arraySearch: function (e, t, n) {
          for (var i = e.length; i--;)
            if (e[i][n] === t) return i;
          return -1
        },
        extend: function (e, t, n) {
          for (var i in t)
            if (t.hasOwnProperty(i)) {
              if (n && e.hasOwnProperty(i)) continue;
              e[i] = t[i]
            }
        },
        easing: {
          sine: {
            out: function (e) {
              return Math.sin(e * (Math.PI / 2))
            },
            inOut: function (e) {
              return -(Math.cos(Math.PI * e) - 1) / 2
            }
          },
          cubic: {
            out: function (e) {
              return --e * e * e + 1
            }
          }
        },
        detectFeatures: function () {
          if (r.features) return r.features;
          var e = r.createEl(),
            t = e.style,
            n = "",
            i = {};
          if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
            var o = navigator.userAgent;
            if (/iP(hone|od)/.test(navigator.platform)) {
              var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
              a && a.length > 0 && (a = parseInt(a[1], 10)) >= 1 && 8 > a && (i.isOldIOSPhone = !0)
            }
            var s = o.match(/Android\s([0-9\.]*)/),
              l = s ? s[1] : 0;
            l = parseFloat(l), l >= 1 && (4.4 > l && (i.isOldAndroid = !0), i.androidVersion = l), i.isMobileOpera = /opera mini|opera mobi/i.test(o)
          }
          for (var c, u, d = ["transform", "perspective", "animationName"], f = ["", "webkit", "Moz", "ms", "O"], h = 0; 4 > h; h++) {
            n = f[h];
            for (var p = 0; 3 > p; p++) c = d[p], u = n + (n ? c.charAt(0).toUpperCase() + c.slice(1) : c), !i[c] && u in t && (i[c] = u);
            n && !i.raf && (n = n.toLowerCase(), i.raf = window[n + "RequestAnimationFrame"], i.raf && (i.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]))
          }
          if (!i.raf) {
            var m = 0;
            i.raf = function (e) {
              var t = (new Date).getTime(),
                n = Math.max(0, 16 - (t - m)),
                i = window.setTimeout(function () {
                  e(t + n)
                }, n);
              return m = t + n, i
            }, i.caf = function (e) {
              clearTimeout(e)
            }
          }
          return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, r.features = i, i
        }
      };
      r.detectFeatures(), r.features.oldIE && (r.bind = function (e, t, n, i) {
        t = t.split(" ");
        for (var r, o = (i ? "detach" : "attach") + "Event", a = function () {
            n.handleEvent.call(n)
          }, s = 0; s < t.length; s++)
          if (r = t[s])
            if ("object" == typeof n && n.handleEvent) {
              if (i) {
                if (!n["oldIE" + r]) return !1
              } else n["oldIE" + r] = a;
              e[o]("on" + r, n["oldIE" + r])
            } else e[o]("on" + r, n)
      });
      var o = this,
        a = {
          allowPanToNext: !0,
          spacing: .12,
          bgOpacity: 1,
          mouseUsed: !1,
          loop: !0,
          pinchToClose: !0,
          closeOnScroll: !0,
          closeOnVerticalDrag: !0,
          verticalDragRange: .75,
          hideAnimationDuration: 333,
          showAnimationDuration: 333,
          showHideOpacity: !1,
          focus: !0,
          escKey: !0,
          arrowKeys: !0,
          mainScrollEndFriction: .35,
          panEndFriction: .35,
          isClickableElement: function (e) {
            return "A" === e.tagName
          },
          getDoubleTapZoom: function (e, t) {
            return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
          },
          maxSpreadZoom: 1.33,
          modal: !0,
          scaleMode: "fit"
        };
      r.extend(a, i);
      var s, l, c, u, d, f, h, p, m, g, v, y, b, x, w, C, T, k, _, S, E, A, I, D, O, P, M, L, N, F, R, W, H, V, j, B, z, q, $, Y, U, X, G, Q, K, Z, J, ee, te, ne, ie, re, oe, ae, se, le, ce = function () {
          return {
            x: 0,
            y: 0
          }
        },
        ue = ce(),
        de = ce(),
        fe = ce(),
        he = {},
        pe = 0,
        me = {},
        ge = ce(),
        ve = 0,
        ye = !0,
        be = [],
        xe = {},
        we = !1,
        Ce = function (e, t) {
          r.extend(o, t.publicMethods), be.push(e)
        },
        Te = function (e) {
          var t = Gt();
          return e > t - 1 ? e - t : 0 > e ? t + e : e
        },
        ke = {},
        _e = function (e, t) {
          return ke[e] || (ke[e] = []), ke[e].push(t)
        },
        Se = function (e) {
          var t = ke[e];
          if (t) {
            var n = Array.prototype.slice.call(arguments);
            n.shift();
            for (var i = 0; i < t.length; i++) t[i].apply(o, n)
          }
        },
        Ee = function () {
          return (new Date).getTime()
        },
        Ae = function (e) {
          ae = e, o.bg.style.opacity = e * a.bgOpacity
        },
        Ie = function (e, t, n, i, r) {
          (!we || r && r !== o.currItem) && (i /= r ? r.fitRatio : o.currItem.fitRatio), e[A] = y + t + "px, " + n + "px" + b + " scale(" + i + ")"
        },
        De = function (e) {
          te && (e && (g > o.currItem.fitRatio ? we || (ln(o.currItem, !1, !0), we = !0) : we && (ln(o.currItem), we = !1)), Ie(te, fe.x, fe.y, g))
        },
        Oe = function (e) {
          e.container && Ie(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
        },
        Pe = function (e, t) {
          t[A] = y + e + "px, 0px" + b
        },
        Me = function (e, t) {
          if (!a.loop && t) {
            var n = u + (ge.x * pe - e) / ge.x,
              i = Math.round(e - pt.x);
            (0 > n && i > 0 || n >= Gt() - 1 && 0 > i) && (e = pt.x + i * a.mainScrollEndFriction)
          }
          pt.x = e, Pe(e, d)
        },
        Le = function (e, t) {
          var n = mt[e] - me[e];
          return de[e] + ue[e] + n - n * (t / v)
        },
        Ne = function (e, t) {
          e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
        },
        Fe = function (e) {
          e.x = Math.round(e.x), e.y = Math.round(e.y)
        },
        Re = null,
        We = function () {
          Re && (r.unbind(document, "mousemove", We), r.addClass(e, "pswp--has_mouse"), a.mouseUsed = !0, Se("mouseUsed")), Re = setTimeout(function () {
            Re = null
          }, 100)
        },
        He = function () {
          r.bind(document, "keydown", o), R.transform && r.bind(o.scrollWrap, "click", o), a.mouseUsed || r.bind(document, "mousemove", We), r.bind(window, "resize scroll", o), Se("bindEvents")
        },
        Ve = function () {
          r.unbind(window, "resize", o), r.unbind(window, "scroll", m.scroll), r.unbind(document, "keydown", o), r.unbind(document, "mousemove", We), R.transform && r.unbind(o.scrollWrap, "click", o), q && r.unbind(window, h, o), Se("unbindEvents")
        },
        je = function (e, t) {
          var n = rn(o.currItem, he, e);
          return t && (ee = n), n
        },
        Be = function (e) {
          return e || (e = o.currItem), e.initialZoomLevel
        },
        ze = function (e) {
          return e || (e = o.currItem), e.w > 0 ? a.maxSpreadZoom : 1
        },
        qe = function (e, t, n, i) {
          return i === o.currItem.initialZoomLevel ? (n[e] = o.currItem.initialPosition[e], !0) : (n[e] = Le(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0))
        },
        $e = function () {
          if (A) {
            return y = "translate" + (R.perspective && !D ? "3d(" : "("), void(b = R.perspective ? ", 0px)" : ")")
          }
          A = "left", r.addClass(e, "pswp--ie"), Pe = function (e, t) {
            t.left = e + "px"
          }, Oe = function (e) {
            var t = e.fitRatio > 1 ? 1 : e.fitRatio,
              n = e.container.style,
              i = t * e.w,
              r = t * e.h;
            n.width = i + "px", n.height = r + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
          }, De = function () {
            if (te) {
              var e = te,
                t = o.currItem,
                n = t.fitRatio > 1 ? 1 : t.fitRatio,
                i = n * t.w,
                r = n * t.h;
              e.width = i + "px", e.height = r + "px", e.left = fe.x + "px", e.top = fe.y + "px"
            }
          }
        },
        Ye = function (e) {
          var t = "";
          a.escKey && 27 === e.keyCode ? t = "close" : a.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, o[t]()))
        },
        Ue = function (e) {
          e && (U || Y || ne || B) && (e.preventDefault(), e.stopPropagation())
        },
        Xe = function () {
          o.setScrollOffset(0, r.getScrollY())
        },
        Ge = {},
        Qe = 0,
        Ke = function (e) {
          Ge[e] && (Ge[e].raf && P(Ge[e].raf), Qe--, delete Ge[e])
        },
        Ze = function (e) {
          Ge[e] && Ke(e), Ge[e] || (Qe++, Ge[e] = {})
        },
        Je = function () {
          for (var e in Ge) Ge.hasOwnProperty(e) && Ke(e)
        },
        et = function (e, t, n, i, r, o, a) {
          var s, l = Ee();
          Ze(e);
          var c = function () {
            if (Ge[e]) {
              if ((s = Ee() - l) >= i) return Ke(e), o(n), void(a && a());
              o((n - t) * r(s / i) + t), Ge[e].raf = O(c)
            }
          };
          c()
        },
        tt = {
          shout: Se,
          listen: _e,
          viewportSize: he,
          options: a,
          isMainScrollAnimating: function () {
            return ne
          },
          getZoomLevel: function () {
            return g
          },
          getCurrentIndex: function () {
            return u
          },
          isDragging: function () {
            return q
          },
          isZooming: function () {
            return K
          },
          setScrollOffset: function (e, t) {
            me.x = e, F = me.y = t, Se("updateScrollOffset", me)
          },
          applyZoomPan: function (e, t, n, i) {
            fe.x = t, fe.y = n, g = e, De(i)
          },
          init: function () {
            if (!s && !l) {
              var n;
              o.framework = r, o.template = e, o.bg = r.getChildByClass(e, "pswp__bg"), M = e.className, s = !0, R = r.detectFeatures(), O = R.raf, P = R.caf, A = R.transform, N = R.oldIE, o.scrollWrap = r.getChildByClass(e, "pswp__scroll-wrap"), o.container = r.getChildByClass(o.scrollWrap, "pswp__container"), d = o.container.style, o.itemHolders = C = [{
                el: o.container.children[0],
                wrap: 0,
                index: -1
              }, {
                el: o.container.children[1],
                wrap: 0,
                index: -1
              }, {
                el: o.container.children[2],
                wrap: 0,
                index: -1
              }], C[0].el.style.display = C[2].el.style.display = "none", $e(), m = {
                resize: o.updateSize,
                scroll: Xe,
                keydown: Ye,
                click: Ue
              };
              var i = R.isOldIOSPhone || R.isOldAndroid || R.isMobileOpera;
              for (R.animationName && R.transform && !i || (a.showAnimationDuration = a.hideAnimationDuration = 0), n = 0; n < be.length; n++) o["init" + be[n]]();
              if (t) {
                (o.ui = new t(o, r)).init()
              }
              Se("firstUpdate"), u = u || a.index || 0, (isNaN(u) || 0 > u || u >= Gt()) && (u = 0), o.currItem = Xt(u), (R.isOldIOSPhone || R.isOldAndroid) && (ye = !1), e.setAttribute("aria-hidden", "false"), a.modal && (ye ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = r.getScrollY() + "px")), void 0 === F && (Se("initialLayout"), F = L = r.getScrollY());
              var c = "pswp--open ";
              for (a.mainClass && (c += a.mainClass + " "), a.showHideOpacity && (c += "pswp--animate_opacity "), c += D ? "pswp--touch" : "pswp--notouch", c += R.animationName ? " pswp--css_animation" : "", c += R.svg ? " pswp--svg" : "", r.addClass(e, c), o.updateSize(), f = -1, ve = null, n = 0; 3 > n; n++) Pe((n + f) * ge.x, C[n].el.style);
              N || r.bind(o.scrollWrap, p, o), _e("initialZoomInEnd", function () {
                o.setContent(C[0], u - 1), o.setContent(C[2], u + 1), C[0].el.style.display = C[2].el.style.display = "block", a.focus && e.focus(), He()
              }), o.setContent(C[1], u), o.updateCurrItem(), Se("afterInit"), ye || (x = setInterval(function () {
                Qe || q || K || g !== o.currItem.initialZoomLevel || o.updateSize()
              }, 1e3)), r.addClass(e, "pswp--visible")
            }
          },
          close: function () {
            s && (s = !1, l = !0, Se("close"), Ve(), Kt(o.currItem, null, !0, o.destroy))
          },
          destroy: function () {
            Se("destroy"), qt && clearTimeout(qt), e.setAttribute("aria-hidden", "true"), e.className = M, x && clearInterval(x), r.unbind(o.scrollWrap, p, o), r.unbind(window, "scroll", o), xt(), Je(), ke = null
          },
          panTo: function (e, t, n) {
            n || (e > ee.min.x ? e = ee.min.x : e < ee.max.x && (e = ee.max.x), t > ee.min.y ? t = ee.min.y : t < ee.max.y && (t = ee.max.y)), fe.x = e, fe.y = t, De()
          },
          handleEvent: function (e) {
            e = e || window.event, m[e.type] && m[e.type](e)
          },
          goTo: function (e) {
            e = Te(e);
            var t = e - u;
            ve = t, u = e, o.currItem = Xt(u), pe -= t, Me(ge.x * pe), Je(), ne = !1, o.updateCurrItem()
          },
          next: function () {
            o.goTo(u + 1)
          },
          prev: function () {
            o.goTo(u - 1)
          },
          updateCurrZoomItem: function (e) {
            if (e && Se("beforeChange", 0), C[1].el.children.length) {
              var t = C[1].el.children[0];
              te = r.hasClass(t, "pswp__zoom-wrap") ? t.style : null
            } else te = null;
            ee = o.currItem.bounds, v = g = o.currItem.initialZoomLevel, fe.x = ee.center.x, fe.y = ee.center.y, e && Se("afterChange")
          },
          invalidateCurrItems: function () {
            w = !0;
            for (var e = 0; 3 > e; e++) C[e].item && (C[e].item.needsUpdate = !0)
          },
          updateCurrItem: function (e) {
            if (0 !== ve) {
              var t, n = Math.abs(ve);
              if (!(e && 2 > n)) {
                o.currItem = Xt(u), we = !1, Se("beforeChange", ve), n >= 3 && (f += ve + (ve > 0 ? -3 : 3), n = 3);
                for (var i = 0; n > i; i++) ve > 0 ? (t = C.shift(), C[2] = t, f++, Pe((f + 2) * ge.x, t.el.style), o.setContent(t, u - n + i + 1 + 1)) : (t = C.pop(), C.unshift(t), f--, Pe(f * ge.x, t.el.style), o.setContent(t, u + n - i - 1 - 1));
                if (te && 1 === Math.abs(ve)) {
                  var r = Xt(T);
                  r.initialZoomLevel !== g && (rn(r, he), ln(r), Oe(r))
                }
                ve = 0, o.updateCurrZoomItem(), T = u, Se("afterChange")
              }
            }
          },
          updateSize: function (t) {
            if (!ye && a.modal) {
              var n = r.getScrollY();
              if (F !== n && (e.style.top = n + "px", F = n), !t && xe.x === window.innerWidth && xe.y === window.innerHeight) return;
              xe.x = window.innerWidth, xe.y = window.innerHeight, e.style.height = xe.y + "px"
            }
            if (he.x = o.scrollWrap.clientWidth, he.y = o.scrollWrap.clientHeight, Xe(), ge.x = he.x + Math.round(he.x * a.spacing), ge.y = he.y, Me(ge.x * pe), Se("beforeResize"), void 0 !== f) {
              for (var i, s, l, c = 0; 3 > c; c++) i = C[c], Pe((c + f) * ge.x, i.el.style), l = u + c - 1, a.loop && Gt() > 2 && (l = Te(l)), s = Xt(l), s && (w || s.needsUpdate || !s.bounds) ? (o.cleanSlide(s), o.setContent(i, l), 1 === c && (o.currItem = s, o.updateCurrZoomItem(!0)), s.needsUpdate = !1) : -1 === i.index && l >= 0 && o.setContent(i, l), s && s.container && (rn(s, he), ln(s), Oe(s));
              w = !1
            }
            v = g = o.currItem.initialZoomLevel, ee = o.currItem.bounds, ee && (fe.x = ee.center.x, fe.y = ee.center.y, De(!0)), Se("resize")
          },
          zoomTo: function (e, t, n, i, o) {
            t && (v = g, mt.x = Math.abs(t.x) - fe.x, mt.y = Math.abs(t.y) - fe.y, Ne(de, fe));
            var a = je(e, !1),
              s = {};
            qe("x", a, s, e), qe("y", a, s, e);
            var l = g,
              c = {
                x: fe.x,
                y: fe.y
              };
            Fe(s);
            var u = function (t) {
              1 === t ? (g = e, fe.x = s.x, fe.y = s.y) : (g = (e - l) * t + l, fe.x = (s.x - c.x) * t + c.x, fe.y = (s.y - c.y) * t + c.y), o && o(t), De(1 === t)
            };
            n ? et("customZoomTo", 0, 1, n, i || r.easing.sine.inOut, u) : u(1)
          }
        },
        nt = {},
        it = {},
        rt = {},
        ot = {},
        at = {},
        st = [],
        lt = {},
        ct = [],
        ut = {},
        dt = 0,
        ft = ce(),
        ht = 0,
        pt = ce(),
        mt = ce(),
        gt = ce(),
        vt = function (e, t) {
          return e.x === t.x && e.y === t.y
        },
        yt = function (e, t) {
          return Math.abs(e.x - t.x) < 25 && Math.abs(e.y - t.y) < 25
        },
        bt = function (e, t) {
          return ut.x = Math.abs(e.x - t.x), ut.y = Math.abs(e.y - t.y), Math.sqrt(ut.x * ut.x + ut.y * ut.y)
        },
        xt = function () {
          X && (P(X), X = null)
        },
        wt = function () {
          q && (X = O(wt), Rt())
        },
        Ct = function () {
          return !("fit" === a.scaleMode && g === o.currItem.initialZoomLevel)
        },
        Tt = function (e, t) {
          return !(!e || e === document) && (!(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : Tt(e.parentNode, t)))
        },
        kt = {},
        _t = function (e, t) {
          return kt.prevent = !Tt(e.target, a.isClickableElement), Se("preventDragEvent", e, t, kt), kt.prevent
        },
        St = function (e, t) {
          return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
        },
        Et = function (e, t, n) {
          n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
        },
        At = function (e, t, n) {
          if (e - H > 50) {
            var i = ct.length > 2 ? ct.shift() : {};
            i.x = t, i.y = n, ct.push(i), H = e
          }
        },
        It = function () {
          var e = fe.y - o.currItem.initialPosition.y;
          return 1 - Math.abs(e / (he.y / 2))
        },
        Dt = {},
        Ot = {},
        Pt = [],
        Mt = function (e) {
          for (; Pt.length > 0;) Pt.pop();
          return I ? (le = 0, st.forEach(function (e) {
            0 === le ? Pt[0] = e : 1 === le && (Pt[1] = e), le++
          })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Pt[0] = St(e.touches[0], Dt), e.touches.length > 1 && (Pt[1] = St(e.touches[1], Ot))) : (Dt.x = e.pageX, Dt.y = e.pageY, Dt.id = "", Pt[0] = Dt), Pt
        },
        Lt = function (e, t) {
          var n, i, r, s, l = fe[e] + t[e],
            c = t[e] > 0,
            u = pt.x + t.x,
            d = pt.x - lt.x;
          return n = l > ee.min[e] || l < ee.max[e] ? a.panEndFriction : 1, l = fe[e] + t[e] * n, !a.allowPanToNext && g !== o.currItem.initialZoomLevel || (te ? "h" !== ie || "x" !== e || Y || (c ? (l > ee.min[e] && (n = a.panEndFriction, ee.min[e] - l, i = ee.min[e] - de[e]), (0 >= i || 0 > d) && Gt() > 1 ? (s = u, 0 > d && u > lt.x && (s = lt.x)) : ee.min.x !== ee.max.x && (r = l)) : (l < ee.max[e] && (n = a.panEndFriction, l - ee.max[e], i = de[e] - ee.max[e]), (0 >= i || d > 0) && Gt() > 1 ? (s = u, d > 0 && u < lt.x && (s = lt.x)) : ee.min.x !== ee.max.x && (r = l))) : s = u, "x" !== e) ? void(ne || G || g > o.currItem.fitRatio && (fe[e] += t[e] * n)) : (void 0 !== s && (Me(s, !0), G = s !== lt.x), ee.min.x !== ee.max.x && (void 0 !== r ? fe.x = r : G || (fe.x += t.x * n)), void 0 !== s)
        },
        Nt = function (e) {
          if (!("mousedown" === e.type && e.button > 0)) {
            if (Ut) return void e.preventDefault();
            if (!z || "mousedown" !== e.type) {
              if (_t(e, !0) && e.preventDefault(), Se("pointerDown"), I) {
                var t = r.arraySearch(st, e.pointerId, "id");
                0 > t && (t = st.length), st[t] = {
                  x: e.pageX,
                  y: e.pageY,
                  id: e.pointerId
                }
              }
              var n = Mt(e),
                i = n.length;
              Q = null, Je(), q && 1 !== i || (q = re = !0, r.bind(window, h, o), j = se = oe = B = G = U = $ = Y = !1, ie = null, Se("firstTouchStart", n), Ne(de, fe), ue.x = ue.y = 0, Ne(ot, n[0]), Ne(at, ot), lt.x = ge.x * pe, ct = [{
                x: ot.x,
                y: ot.y
              }], H = W = Ee(), je(g, !0), xt(), wt()), !K && i > 1 && !ne && !G && (v = g, Y = !1, K = $ = !0, ue.y = ue.x = 0, Ne(de, fe), Ne(nt, n[0]), Ne(it, n[1]), Et(nt, it, gt), mt.x = Math.abs(gt.x) - fe.x, mt.y = Math.abs(gt.y) - fe.y, Z = J = bt(nt, it))
            }
          }
        },
        Ft = function (e) {
          if (e.preventDefault(), I) {
            var t = r.arraySearch(st, e.pointerId, "id");
            if (t > -1) {
              var n = st[t];
              n.x = e.pageX, n.y = e.pageY
            }
          }
          if (q) {
            var i = Mt(e);
            if (ie || U || K) Q = i;
            else if (pt.x !== ge.x * pe) ie = "h";
            else {
              var o = Math.abs(i[0].x - ot.x) - Math.abs(i[0].y - ot.y);
              Math.abs(o) >= 10 && (ie = o > 0 ? "h" : "v", Q = i)
            }
          }
        },
        Rt = function () {
          if (Q) {
            var e = Q.length;
            if (0 !== e)
              if (Ne(nt, Q[0]), rt.x = nt.x - ot.x, rt.y = nt.y - ot.y, K && e > 1) {
                if (ot.x = nt.x, ot.y = nt.y, !rt.x && !rt.y && vt(Q[1], it)) return;
                Ne(it, Q[1]), Y || (Y = !0, Se("zoomGestureStarted"));
                var t = bt(nt, it),
                  n = Bt(t);
                n > o.currItem.initialZoomLevel + o.currItem.initialZoomLevel / 15 && (se = !0);
                var i = 1,
                  r = Be(),
                  s = ze();
                if (r > n)
                  if (a.pinchToClose && !se && v <= o.currItem.initialZoomLevel) {
                    var l = r - n,
                      c = 1 - l / (r / 1.2);
                    Ae(c), Se("onPinchClose", c), oe = !0
                  } else i = (r - n) / r, i > 1 && (i = 1), n = r - i * (r / 3);
                else n > s && (i = (n - s) / (6 * r), i > 1 && (i = 1), n = s + i * r);
                0 > i && (i = 0), Z = t, Et(nt, it, ft), ue.x += ft.x - gt.x, ue.y += ft.y - gt.y, Ne(gt, ft), fe.x = Le("x", n), fe.y = Le("y", n), j = n > g, g = n, De()
              } else {
                if (!ie) return;
                if (re && (re = !1, Math.abs(rt.x) >= 10 && (rt.x -= Q[0].x - at.x), Math.abs(rt.y) >= 10 && (rt.y -= Q[0].y - at.y)), ot.x = nt.x, ot.y = nt.y, 0 === rt.x && 0 === rt.y) return;
                if ("v" === ie && a.closeOnVerticalDrag && !Ct()) {
                  ue.y += rt.y, fe.y += rt.y;
                  var u = It();
                  return B = !0, Se("onVerticalDrag", u), Ae(u), void De()
                }
                At(Ee(), nt.x, nt.y), U = !0, ee = o.currItem.bounds;
                var d = Lt("x", rt);
                d || (Lt("y", rt), Fe(fe), De())
              }
          }
        },
        Wt = function (e) {
          if (R.isOldAndroid) {
            if (z && "mouseup" === e.type) return;
            e.type.indexOf("touch") > -1 && (clearTimeout(z), z = setTimeout(function () {
              z = 0
            }, 600))
          }
          Se("pointerUp"), _t(e, !1) && e.preventDefault();
          var t;
          if (I) {
            var n = r.arraySearch(st, e.pointerId, "id");
            if (n > -1)
              if (t = st.splice(n, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse";
              else {
                var i = {
                  4: "mouse",
                  2: "touch",
                  3: "pen"
                };
                t.type = i[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
              }
          }
          var s, l = Mt(e),
            c = l.length;
          if ("mouseup" === e.type && (c = 0), 2 === c) return Q = null, !0;
          1 === c && Ne(at, l[0]), 0 !== c || ie || ne || (t || ("mouseup" === e.type ? t = {
            x: e.pageX,
            y: e.pageY,
            type: "mouse"
          } : e.changedTouches && e.changedTouches[0] && (t = {
            x: e.changedTouches[0].pageX,
            y: e.changedTouches[0].pageY,
            type: "touch"
          })), Se("touchRelease", e, t));
          var u = -1;
          if (0 === c && (q = !1, r.unbind(window, h, o), xt(), K ? u = 0 : -1 !== ht && (u = Ee() - ht)), ht = 1 === c ? Ee() : -1, s = -1 !== u && 150 > u ? "zoom" : "swipe", K && 2 > c && (K = !1, 1 === c && (s = "zoomPointerUp"), Se("zoomGestureEnded")), Q = null, U || Y || ne || B)
            if (Je(), V || (V = Ht()), V.calculateSwipeSpeed("x"), B) {
              var d = It();
              if (d < a.verticalDragRange) o.close();
              else {
                var f = fe.y,
                  p = ae;
                et("verticalDrag", 0, 1, 300, r.easing.cubic.out, function (e) {
                  fe.y = (o.currItem.initialPosition.y - f) * e + f, Ae((1 - p) * e + p), De()
                }), Se("onVerticalDrag", 1)
              }
            } else {
              if ((G || ne) && 0 === c) {
                var m = jt(s, V);
                if (m) return;
                s = "zoomPointerUp"
              }
              if (!ne) return "swipe" !== s ? void zt() : void(!G && g > o.currItem.fitRatio && Vt(V))
            }
        },
        Ht = function () {
          var e, t, n = {
            lastFlickOffset: {},
            lastFlickDist: {},
            lastFlickSpeed: {},
            slowDownRatio: {},
            slowDownRatioReverse: {},
            speedDecelerationRatio: {},
            speedDecelerationRatioAbs: {},
            distanceOffset: {},
            backAnimDestination: {},
            backAnimStarted: {},
            calculateSwipeSpeed: function (i) {
              ct.length > 1 ? (e = Ee() - H + 50, t = ct[ct.length - 2][i]) : (e = Ee() - W, t = at[i]), n.lastFlickOffset[i] = ot[i] - t, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e : n.lastFlickSpeed[i] = 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1
            },
            calculateOverBoundsAnimOffset: function (e, t) {
              n.backAnimStarted[e] || (fe[e] > ee.min[e] ? n.backAnimDestination[e] = ee.min[e] : fe[e] < ee.max[e] && (n.backAnimDestination[e] = ee.max[e]), void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, et("bounceZoomPan" + e, fe[e], n.backAnimDestination[e], t || 300, r.easing.sine.out, function (t) {
                fe[e] = t, De()
              }))))
            },
            calculateAnimOffset: function (e) {
              n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, fe[e] += n.distanceOffset[e])
            },
            panAnimLoop: function () {
              return Ge.zoomPan && (Ge.zoomPan.raf = O(n.panAnimLoop), n.now = Ee(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), De(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05) ? (fe.x = Math.round(fe.x), fe.y = Math.round(fe.y), De(), void Ke("zoomPan")) : void 0
            }
          };
          return n
        },
        Vt = function (e) {
          return e.calculateSwipeSpeed("y"), ee = o.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (Ze("zoomPan"), e.lastNow = Ee(), void e.panAnimLoop())
        },
        jt = function (e, t) {
          var n;
          ne || (dt = u);
          var i;
          if ("swipe" === e) {
            var s = ot.x - at.x,
              l = t.lastFlickDist.x < 10;
            s > 30 && (l || t.lastFlickOffset.x > 20) ? i = -1 : -30 > s && (l || t.lastFlickOffset.x < -20) && (i = 1)
          }
          var c;
          i && (u += i, 0 > u ? (u = a.loop ? Gt() - 1 : 0, c = !0) : u >= Gt() && (u = a.loop ? 0 : Gt() - 1, c = !0), (!c || a.loop) && (ve += i, pe -= i, n = !0));
          var d, f = ge.x * pe,
            h = Math.abs(f - pt.x);
          return n || f > pt.x == t.lastFlickSpeed.x > 0 ? (d = Math.abs(t.lastFlickSpeed.x) > 0 ? h / Math.abs(t.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, dt === u && (n = !1), ne = !0, Se("mainScrollAnimStart"), et("mainScroll", pt.x, f, d, r.easing.cubic.out, Me, function () {
            Je(), ne = !1, dt = -1, (n || dt !== u) && o.updateCurrItem(), Se("mainScrollAnimComplete")
          }), n && o.updateCurrItem(!0), n
        },
        Bt = function (e) {
          return 1 / J * e * v
        },
        zt = function () {
          var e = g,
            t = Be(),
            n = ze();
          t > g ? e = t : g > n && (e = n);
          var i, a = ae;
          return oe && !j && !se && t > g ? (o.close(), !0) : (oe && (i = function (e) {
            Ae((1 - a) * e + a)
          }), o.zoomTo(e, 0, 200, r.easing.cubic.out, i), !0)
        };
      Ce("Gestures", {
        publicMethods: {
          initGestures: function () {
            var e = function (e, t, n, i, r) {
              k = e + t, _ = e + n, S = e + i, E = r ? e + r : ""
            };
            I = R.pointerEvent, I && R.touch && (R.touch = !1), I ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : R.touch ? (e("touch", "start", "move", "end", "cancel"), D = !0) : e("mouse", "down", "move", "up"), h = _ + " " + S + " " + E, p = k, I && !D && (D = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), o.likelyTouchDevice = D, m[k] = Nt, m[_] = Ft, m[S] = Wt, E && (m[E] = m[S]), R.touch && (p += " mousedown", h += " mousemove mouseup", m.mousedown = m[k], m.mousemove = m[_], m.mouseup = m[S]), D || (a.allowPanToNext = !1)
          }
        }
      });
      var qt, $t, Yt, Ut, Xt, Gt, Qt, Kt = function (t, n, i, s) {
          qt && clearTimeout(qt), Ut = !0, Yt = !0;
          var l;
          t.initialLayout ? (l = t.initialLayout, t.initialLayout = null) : l = a.getThumbBoundsFn && a.getThumbBoundsFn(u);
          var d = i ? a.hideAnimationDuration : a.showAnimationDuration,
            f = function () {
              Ke("initialZoom"), i ? (o.template.removeAttribute("style"), o.bg.removeAttribute("style")) : (Ae(1), n && (n.style.display = "block"), r.addClass(e, "pswp--animated-in"), Se("initialZoom" + (i ? "OutEnd" : "InEnd"))), s && s(), Ut = !1
            };
          if (!d || !l || void 0 === l.x) return Se("initialZoom" + (i ? "Out" : "In")), g = t.initialZoomLevel, Ne(fe, t.initialPosition), De(), e.style.opacity = i ? 0 : 1, Ae(1), void(d ? setTimeout(function () {
            f()
          }, d) : f());
          ! function () {
            var n = c,
              s = !o.currItem.src || o.currItem.loadError || a.showHideOpacity;
            t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (g = l.w / t.w, fe.x = l.x, fe.y = l.y - L, o[s ? "template" : "bg"].style.opacity = .001, De()), Ze("initialZoom"), i && !n && r.removeClass(e, "pswp--animated-in"), s && (i ? r[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function () {
              r.addClass(e, "pswp--animate_opacity")
            }, 30)), qt = setTimeout(function () {
              if (Se("initialZoom" + (i ? "Out" : "In")), i) {
                var o = l.w / t.w,
                  a = {
                    x: fe.x,
                    y: fe.y
                  },
                  c = g,
                  u = ae,
                  h = function (t) {
                    1 === t ? (g = o, fe.x = l.x, fe.y = l.y - F) : (g = (o - c) * t + c, fe.x = (l.x - a.x) * t + a.x, fe.y = (l.y - F - a.y) * t + a.y), De(), s ? e.style.opacity = 1 - t : Ae(u - t * u)
                  };
                n ? et("initialZoom", 0, 1, d, r.easing.cubic.out, h, f) : (h(1), qt = setTimeout(f, d + 20))
              } else g = t.initialZoomLevel, Ne(fe, t.initialPosition), De(), Ae(1), s ? e.style.opacity = 1 : Ae(1), qt = setTimeout(f, d + 20)
            }, i ? 25 : 90)
          }()
        },
        Zt = {},
        Jt = [],
        en = {
          index: 0,
          errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
          forceProgressiveLoading: !1,
          preload: [1, 1],
          getNumItemsFn: function () {
            return $t.length
          }
        },
        tn = function () {
          return {
            center: {
              x: 0,
              y: 0
            },
            max: {
              x: 0,
              y: 0
            },
            min: {
              x: 0,
              y: 0
            }
          }
        },
        nn = function (e, t, n) {
          var i = e.bounds;
          i.center.x = Math.round((Zt.x - t) / 2), i.center.y = Math.round((Zt.y - n) / 2) + e.vGap.top, i.max.x = t > Zt.x ? Math.round(Zt.x - t) : i.center.x, i.max.y = n > Zt.y ? Math.round(Zt.y - n) + e.vGap.top : i.center.y, i.min.x = t > Zt.x ? 0 : i.center.x, i.min.y = n > Zt.y ? e.vGap.top : i.center.y
        },
        rn = function (e, t, n) {
          if (e.src && !e.loadError) {
            var i = !n;
            if (i && (e.vGap || (e.vGap = {
                top: 0,
                bottom: 0
              }), Se("parseVerticalMargin", e)), Zt.x = t.x, Zt.y = t.y - e.vGap.top - e.vGap.bottom, i) {
              var r = Zt.x / e.w,
                o = Zt.y / e.h;
              e.fitRatio = o > r ? r : o;
              var s = a.scaleMode;
              "orig" === s ? n = 1 : "fit" === s && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = tn())
            }
            if (!n) return;
            return nn(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
          }
          return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = tn(), e.initialPosition = e.bounds.center, e.bounds
        },
        on = function (e, t, n, i, r, a) {
          t.loadError || i && (t.imageAppended = !0, ln(t, i, t === o.currItem && we), n.appendChild(i), a && setTimeout(function () {
            t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
          }, 500))
        },
        an = function (e) {
          e.loading = !0, e.loaded = !1;
          var t = e.img = r.createEl("pswp__img", "img"),
            n = function () {
              e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
            };
          return t.onload = n, t.onerror = function () {
            e.loadError = !0, n()
          }, t.src = e.src, t
        },
        sn = function (e, t) {
          return e.src && e.loadError && e.container ? (t && (e.container.innerHTML = ""), e.container.innerHTML = a.errorMsg.replace("%url%", e.src), !0) : void 0
        },
        ln = function (e, t, n) {
          if (e.src) {
            t || (t = e.container.lastChild);
            var i = n ? e.w : Math.round(e.w * e.fitRatio),
              r = n ? e.h : Math.round(e.h * e.fitRatio);
            e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px", e.placeholder.style.height = r + "px"), t.style.width = i + "px", t.style.height = r + "px"
          }
        },
        cn = function () {
          if (Jt.length) {
            for (var e, t = 0; t < Jt.length; t++) e = Jt[t], e.holder.index === e.index && on(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
            Jt = []
          }
        };
      Ce("Controller", {
        publicMethods: {
          lazyLoadItem: function (e) {
            e = Te(e);
            var t = Xt(e);
            t && (!t.loaded && !t.loading || w) && (Se("gettingData", e, t), t.src && an(t))
          },
          initController: function () {
            r.extend(a, en, !0), o.items = $t = n, Xt = o.getItemAt, Gt = a.getNumItemsFn, Qt = a.loop, Gt() < 3 && (a.loop = !1), _e("beforeChange", function (e) {
              var t, n = a.preload,
                i = null === e || e >= 0,
                r = Math.min(n[0], Gt()),
                s = Math.min(n[1], Gt());
              for (t = 1;
                (i ? s : r) >= t; t++) o.lazyLoadItem(u + t);
              for (t = 1;
                (i ? r : s) >= t; t++) o.lazyLoadItem(u - t)
            }), _e("initialLayout", function () {
              o.currItem.initialLayout = a.getThumbBoundsFn && a.getThumbBoundsFn(u)
            }), _e("mainScrollAnimComplete", cn), _e("initialZoomInEnd", cn), _e("destroy", function () {
              for (var e, t = 0; t < $t.length; t++) e = $t[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
              Jt = null
            })
          },
          getItemAt: function (e) {
            return e >= 0 && void 0 !== $t[e] && $t[e]
          },
          allowProgressiveImg: function () {
            return a.forceProgressiveLoading || !D || a.mouseUsed || screen.width > 1200
          },
          setContent: function (e, t) {
            a.loop && (t = Te(t));
            var n = o.getItemAt(e.index);
            n && (n.container = null);
            var i, l = o.getItemAt(t);
            if (!l) return void(e.el.innerHTML = "");
            Se("gettingData", t, l), e.index = t, e.item = l;
            var c = l.container = r.createEl("pswp__zoom-wrap");
            if (!l.src && l.html && (l.html.tagName ? c.appendChild(l.html) : c.innerHTML = l.html), sn(l), rn(l, he), !l.src || l.loadError || l.loaded) l.src && !l.loadError && (i = r.createEl("pswp__img", "img"), i.style.opacity = 1, i.src = l.src, ln(l, i), on(0, l, c, i));
            else {
              if (l.loadComplete = function (n) {
                  if (s) {
                    if (e && e.index === t) {
                      if (sn(n, !0)) return n.loadComplete = n.img = null, rn(n, he), Oe(n), void(e.index === u && o.updateCurrZoomItem());
                      n.imageAppended ? !Ut && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : R.transform && (ne || Ut) ? Jt.push({
                        item: n,
                        baseDiv: c,
                        img: n.img,
                        index: t,
                        holder: e,
                        clearPlaceholder: !0
                      }) : on(0, n, c, n.img, 0, !0)
                    }
                    n.loadComplete = null, n.img = null, Se("imageLoadComplete", t, n)
                  }
                }, r.features.transform) {
                var d = "pswp__img pswp__img--placeholder";
                d += l.msrc ? "" : " pswp__img--placeholder--blank";
                var f = r.createEl(d, l.msrc ? "img" : "");
                l.msrc && (f.src = l.msrc), ln(l, f), c.appendChild(f), l.placeholder = f
              }
              l.loading || an(l), o.allowProgressiveImg() && (!Yt && R.transform ? Jt.push({
                item: l,
                baseDiv: c,
                img: l.img,
                index: t,
                holder: e
              }) : on(0, l, c, l.img, 0, !0))
            }
            Yt || t !== u ? Oe(l) : (te = c.style, Kt(l, i || l.img)), e.el.innerHTML = "", e.el.appendChild(c)
          },
          cleanSlide: function (e) {
            e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
          }
        }
      });
      var un, dn = {},
        fn = function (e, t, n) {
          var i = document.createEvent("CustomEvent"),
            r = {
              origEvent: e,
              target: e.target,
              releasePoint: t,
              pointerType: n || "touch"
            };
          i.initCustomEvent("pswpTap", !0, !0, r), e.target.dispatchEvent(i)
        };
      Ce("Tap", {
        publicMethods: {
          initTap: function () {
            _e("firstTouchStart", o.onTapStart), _e("touchRelease", o.onTapRelease), _e("destroy", function () {
              dn = {}, un = null
            })
          },
          onTapStart: function (e) {
            e.length > 1 && (clearTimeout(un), un = null)
          },
          onTapRelease: function (e, t) {
            if (t && !U && !$ && !Qe) {
              var n = t;
              if (un && (clearTimeout(un), un = null, yt(n, dn))) return void Se("doubleTap", n);
              if ("mouse" === t.type) return void fn(e, t, "mouse");
              if ("BUTTON" === e.target.tagName.toUpperCase() || r.hasClass(e.target, "pswp__single-tap")) return void fn(e, t);
              Ne(dn, n), un = setTimeout(function () {
                fn(e, t), un = null
              }, 300)
            }
          }
        }
      });
      var hn;
      Ce("DesktopZoom", {
        publicMethods: {
          initDesktopZoom: function () {
            N || (D ? _e("mouseUsed", function () {
              o.setupDesktopZoom()
            }) : o.setupDesktopZoom(!0))
          },
          setupDesktopZoom: function (t) {
            hn = {};
            var n = "wheel mousewheel DOMMouseScroll";
            _e("bindEvents", function () {
              r.bind(e, n, o.handleMouseWheel)
            }), _e("unbindEvents", function () {
              hn && r.unbind(e, n, o.handleMouseWheel)
            }), o.mouseZoomedIn = !1;
            var i, a = function () {
                o.mouseZoomedIn && (r.removeClass(e, "pswp--zoomed-in"), o.mouseZoomedIn = !1), 1 > g ? r.addClass(e, "pswp--zoom-allowed") : r.removeClass(e, "pswp--zoom-allowed"), s()
              },
              s = function () {
                i && (r.removeClass(e, "pswp--dragging"), i = !1)
              };
            _e("resize", a), _e("afterChange", a), _e("pointerDown", function () {
              o.mouseZoomedIn && (i = !0, r.addClass(e, "pswp--dragging"))
            }), _e("pointerUp", s), t || a()
          },
          handleMouseWheel: function (e) {
            if (g <= o.currItem.fitRatio) return a.modal && (!a.closeOnScroll || Qe || q ? e.preventDefault() : A && Math.abs(e.deltaY) > 2 && (c = !0, o.close())), !0;
            if (e.stopPropagation(), hn.x = 0, "deltaX" in e) 1 === e.deltaMode ? (hn.x = 18 * e.deltaX, hn.y = 18 * e.deltaY) : (hn.x = e.deltaX, hn.y = e.deltaY);
            else if ("wheelDelta" in e) e.wheelDeltaX && (hn.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? hn.y = -.16 * e.wheelDeltaY : hn.y = -.16 * e.wheelDelta;
            else {
              if (!("detail" in e)) return;
              hn.y = e.detail
            }
            je(g, !0);
            var t = fe.x - hn.x,
              n = fe.y - hn.y;
            (a.modal || t <= ee.min.x && t >= ee.max.x && n <= ee.min.y && n >= ee.max.y) && e.preventDefault(), o.panTo(t, n)
          },
          toggleDesktopZoom: function (t) {
            t = t || {
              x: he.x / 2 + me.x,
              y: he.y / 2 + me.y
            };
            var n = a.getDoubleTapZoom(!0, o.currItem),
              i = g === n;
            o.mouseZoomedIn = !i, o.zoomTo(i ? o.currItem.initialZoomLevel : n, t, 333), r[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
          }
        }
      });
      var pn, mn, gn, vn, yn, bn, xn, wn, Cn, Tn, kn, _n, Sn = {
          history: !0,
          galleryUID: 1
        },
        En = function () {
          return kn.hash.substring(1)
        },
        An = function () {
          pn && clearTimeout(pn), gn && clearTimeout(gn)
        },
        In = function () {
          var e = En(),
            t = {};
          if (e.length < 5) return t;
          var n, i = e.split("&");
          for (n = 0; n < i.length; n++)
            if (i[n]) {
              var r = i[n].split("=");
              r.length < 2 || (t[r[0]] = r[1])
            }
          if (a.galleryPIDs) {
            var o = t.pid;
            for (t.pid = 0, n = 0; n < $t.length; n++)
              if ($t[n].pid === o) {
                t.pid = n;
                break
              }
          } else t.pid = parseInt(t.pid, 10) - 1;
          return t.pid < 0 && (t.pid = 0), t
        },
        Dn = function () {
          if (gn && clearTimeout(gn), Qe || q) return void(gn = setTimeout(Dn, 500));
          vn ? clearTimeout(mn) : vn = !0;
          var e = u + 1,
            t = Xt(u);
          t.hasOwnProperty("pid") && (e = t.pid);
          var n = xn + "&gid=" + a.galleryUID + "&pid=" + e;
          wn || -1 === kn.hash.indexOf(n) && (Tn = !0);
          var i = kn.href.split("#")[0] + "#" + n;
          _n ? "#" + n !== window.location.hash && history[wn ? "replaceState" : "pushState"]("", document.title, i) : wn ? kn.replace(i) : kn.hash = n, wn = !0, mn = setTimeout(function () {
            vn = !1
          }, 60)
        };
      Ce("History", {
        publicMethods: {
          initHistory: function () {
            if (r.extend(a, Sn, !0), a.history) {
              kn = window.location, Tn = !1, Cn = !1, wn = !1, xn = En(), _n = "pushState" in history, xn.indexOf("gid=") > -1 && (xn = xn.split("&gid=")[0], xn = xn.split("?gid=")[0]), _e("afterChange", o.updateURL), _e("unbindEvents", function () {
                r.unbind(window, "hashchange", o.onHashChange)
              });
              var e = function () {
                bn = !0, Cn || (Tn ? history.back() : xn ? kn.hash = xn : _n ? history.pushState("", document.title, kn.pathname + kn.search) : kn.hash = ""), An()
              };
              _e("unbindEvents", function () {
                c && e()
              }), _e("destroy", function () {
                bn || e()
              }), _e("firstUpdate", function () {
                u = In().pid
              });
              var t = xn.indexOf("pid=");
              t > -1 && (xn = xn.substring(0, t), "&" === xn.slice(-1) && (xn = xn.slice(0, -1))), setTimeout(function () {
                s && r.bind(window, "hashchange", o.onHashChange)
              }, 40)
            }
          },
          onHashChange: function () {
            return En() === xn ? (Cn = !0, void o.close()) : void(vn || (yn = !0, o.goTo(In().pid), yn = !1))
          },
          updateURL: function () {
            An(), yn || (wn ? pn = setTimeout(Dn, 800) : Dn())
          }
        }
      }), r.extend(o, tt)
    }
  }),
  function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
  }(this, function () {
    "use strict";
    return function (e, t) {
      var n, i, r, o, a, s, l, c, u, d, f, h, p, m, g, v, y, b, x, w = this,
        C = !1,
        T = !0,
        k = !0,
        _ = {
          barsSize: {
            top: 44,
            bottom: "auto"
          },
          closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
          timeToIdle: 4e3,
          timeToIdleOutside: 1e3,
          loadingIndicatorDelay: 1e3,
          addCaptionHTMLFn: function (e, t) {
            return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
          },
          closeEl: !0,
          captionEl: !0,
          fullscreenEl: !0,
          zoomEl: !0,
          shareEl: !0,
          counterEl: !0,
          arrowEl: !0,
          preloaderEl: !0,
          tapToClose: !1,
          tapToToggleControls: !0,
          clickToCloseNonZoomable: !0,
          shareButtons: [{
            id: "facebook",
            label: "Share on Facebook",
            url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
          }, {
            id: "twitter",
            label: "Tweet",
            url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
          }, {
            id: "pinterest",
            label: "Pin it",
            url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
          }, {
            id: "download",
            label: "Download image",
            url: "{{raw_image_url}}",
            download: !0
          }],
          getImageURLForShare: function () {
            return e.currItem.src || ""
          },
          getPageURLForShare: function () {
            return window.location.href
          },
          getTextForShare: function () {
            return e.currItem.title || ""
          },
          indexIndicatorSep: " / ",
          fitControlsWidth: 1200
        },
        S = function (e) {
          if (v) return !0;
          e = e || window.event, g.timeToIdle && g.mouseUsed && !u && F();
          for (var n, i, r = e.target || e.srcElement, o = r.getAttribute("class") || "", a = 0; a < q.length; a++) n = q[a], n.onTap && o.indexOf("pswp__" + n.name) > -1 && (n.onTap(), i = !0);
          if (i) {
            e.stopPropagation && e.stopPropagation(), v = !0;
            var s = t.features.isOldAndroid ? 600 : 30;
            y = setTimeout(function () {
              v = !1
            }, s)
          }
        },
        E = function () {
          return !e.likelyTouchDevice || g.mouseUsed || screen.width > g.fitControlsWidth
        },
        A = function (e, n, i) {
          t[(i ? "add" : "remove") + "Class"](e, "pswp__" + n)
        },
        I = function () {
          var e = 1 === g.getNumItemsFn();
          e !== m && (A(i, "ui--one-slide", e), m = e)
        },
        D = function () {
          A(l, "share-modal--hidden", k)
        },
        O = function () {
          return k = !k, k ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function () {
            k && D()
          }, 300)) : (D(), setTimeout(function () {
            k || t.addClass(l, "pswp__share-modal--fade-in")
          }, 30)), k || M(), !1
        },
        P = function (t) {
          t = t || window.event;
          var n = t.target || t.srcElement;
          return e.shout("shareLinkClick", t, n), !!n.href && (!!n.hasAttribute("download") || (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), k || O(), !1))
        },
        M = function () {
          for (var e, t, n, i, r, o = "", a = 0; a < g.shareButtons.length; a++) e = g.shareButtons[a], n = g.getImageURLForShare(e), i = g.getPageURLForShare(e), r = g.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(r)), o += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", g.parseShareButtonOut && (o = g.parseShareButtonOut(e, o));
          l.children[0].innerHTML = o, l.children[0].onclick = P
        },
        L = function (e) {
          for (var n = 0; n < g.closeElClasses.length; n++)
            if (t.hasClass(e, "pswp__" + g.closeElClasses[n])) return !0
        },
        N = 0,
        F = function () {
          clearTimeout(x), N = 0, u && w.setIdle(!1)
        },
        R = function (e) {
          e = e ? e : window.event;
          var t = e.relatedTarget || e.toElement;
          t && "HTML" !== t.nodeName || (clearTimeout(x), x = setTimeout(function () {
            w.setIdle(!0)
          }, g.timeToIdleOutside))
        },
        W = function () {
          g.fullscreenEl && !t.features.isOldAndroid && (n || (n = w.getFullscreenAPI()), n ? (t.bind(document, n.eventK, w.updateFullscreen), w.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs"))
        },
        H = function () {
          g.preloaderEl && (V(!0),
            d("beforeChange", function () {
              clearTimeout(p), p = setTimeout(function () {
                e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && V(!1) : V(!0)
              }, g.loadingIndicatorDelay)
            }), d("imageLoadComplete", function (t, n) {
              e.currItem === n && V(!0)
            }))
        },
        V = function (e) {
          h !== e && (A(f, "preloader--active", !e), h = e)
        },
        j = function (e) {
          var n = e.vGap;
          if (E()) {
            var a = g.barsSize;
            if (g.captionEl && "auto" === a.bottom)
              if (o || (o = t.createEl("pswp__caption pswp__caption--fake"), o.appendChild(t.createEl("pswp__caption__center")), i.insertBefore(o, r), t.addClass(i, "pswp__ui--fit")), g.addCaptionHTMLFn(e, o, !0)) {
                var s = o.clientHeight;
                n.bottom = parseInt(s, 10) || 44
              } else n.bottom = a.top;
            else n.bottom = "auto" === a.bottom ? 0 : a.bottom;
            n.top = a.top
          } else n.top = n.bottom = 0
        },
        B = function () {
          g.timeToIdle && d("mouseUsed", function () {
            t.bind(document, "mousemove", F), t.bind(document, "mouseout", R), b = setInterval(function () {
              2 === ++N && w.setIdle(!0)
            }, g.timeToIdle / 2)
          })
        },
        z = function () {
          d("onVerticalDrag", function (e) {
            T && .95 > e ? w.hideControls() : !T && e >= .95 && w.showControls()
          });
          var e;
          d("onPinchClose", function (t) {
            T && .9 > t ? (w.hideControls(), e = !0) : e && !T && t > .9 && w.showControls()
          }), d("zoomGestureEnded", function () {
            (e = !1) && !T && w.showControls()
          })
        },
        q = [{
          name: "caption",
          option: "captionEl",
          onInit: function (e) {
            r = e
          }
        }, {
          name: "share-modal",
          option: "shareEl",
          onInit: function (e) {
            l = e
          },
          onTap: function () {
            O()
          }
        }, {
          name: "button--share",
          option: "shareEl",
          onInit: function (e) {
            s = e
          },
          onTap: function () {
            O()
          }
        }, {
          name: "button--zoom",
          option: "zoomEl",
          onTap: e.toggleDesktopZoom
        }, {
          name: "counter",
          option: "counterEl",
          onInit: function (e) {
            a = e
          }
        }, {
          name: "button--close",
          option: "closeEl",
          onTap: e.close
        }, {
          name: "button--arrow--left",
          option: "arrowEl",
          onTap: e.prev
        }, {
          name: "button--arrow--right",
          option: "arrowEl",
          onTap: e.next
        }, {
          name: "button--fs",
          option: "fullscreenEl",
          onTap: function () {
            n.isFullscreen() ? n.exit() : n.enter()
          }
        }, {
          name: "preloader",
          option: "preloaderEl",
          onInit: function (e) {
            f = e
          }
        }],
        $ = function () {
          var e, n, r, o = function (i) {
            if (i)
              for (var o = i.length, a = 0; o > a; a++) {
                e = i[a], n = e.className;
                for (var s = 0; s < q.length; s++) r = q[s], n.indexOf("pswp__" + r.name) > -1 && (g[r.option] ? (t.removeClass(e, "pswp__element--disabled"), r.onInit && r.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
              }
          };
          o(i.children);
          var a = t.getChildByClass(i, "pswp__top-bar");
          a && o(a.children)
        };
      w.init = function () {
        t.extend(e.options, _, !0), g = e.options, i = t.getChildByClass(e.scrollWrap, "pswp__ui"), d = e.listen, z(), d("beforeChange", w.update), d("doubleTap", function (t) {
          var n = e.currItem.initialZoomLevel;
          e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(g.getDoubleTapZoom(!1, e.currItem), t, 333)
        }), d("preventDragEvent", function (e, t, n) {
          var i = e.target || e.srcElement;
          i && i.getAttribute("class") && e.type.indexOf("mouse") > -1 && (i.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
        }), d("bindEvents", function () {
          t.bind(i, "pswpTap click", S), t.bind(e.scrollWrap, "pswpTap", w.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", w.onMouseOver)
        }), d("unbindEvents", function () {
          k || O(), b && clearInterval(b), t.unbind(document, "mouseout", R), t.unbind(document, "mousemove", F), t.unbind(i, "pswpTap click", S), t.unbind(e.scrollWrap, "pswpTap", w.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", w.onMouseOver), n && (t.unbind(document, n.eventK, w.updateFullscreen), n.isFullscreen() && (g.hideAnimationDuration = 0, n.exit()), n = null)
        }), d("destroy", function () {
          g.captionEl && (o && i.removeChild(o), t.removeClass(r, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(i, "pswp__ui--over-close"), t.addClass(i, "pswp__ui--hidden"), w.setIdle(!1)
        }), g.showAnimationDuration || t.removeClass(i, "pswp__ui--hidden"), d("initialZoomIn", function () {
          g.showAnimationDuration && t.removeClass(i, "pswp__ui--hidden")
        }), d("initialZoomOut", function () {
          t.addClass(i, "pswp__ui--hidden")
        }), d("parseVerticalMargin", j), $(), g.shareEl && s && l && (k = !0), I(), B(), W(), H()
      }, w.setIdle = function (e) {
        u = e, A(i, "ui--idle", e)
      }, w.update = function () {
        T && e.currItem ? (w.updateIndexIndicator(), g.captionEl && (g.addCaptionHTMLFn(e.currItem, r), A(r, "caption--empty", !e.currItem.title)), C = !0) : C = !1, k || O(), I()
      }, w.updateFullscreen = function (i) {
        i && setTimeout(function () {
          e.setScrollOffset(0, t.getScrollY())
        }, 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
      }, w.updateIndexIndicator = function () {
        g.counterEl && (a.innerHTML = e.getCurrentIndex() + 1 + g.indexIndicatorSep + g.getNumItemsFn())
      }, w.onGlobalTap = function (n) {
        n = n || window.event;
        var i = n.target || n.srcElement;
        if (!v)
          if (n.detail && "mouse" === n.detail.pointerType) {
            if (L(i)) return void e.close();
            t.hasClass(i, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? g.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
          } else if (g.tapToToggleControls && (T ? w.hideControls() : w.showControls()), g.tapToClose && (t.hasClass(i, "pswp__img") || L(i))) return void e.close()
      }, w.onMouseOver = function (e) {
        e = e || window.event, A(i, "ui--over-close", L(e.target || e.srcElement))
      }, w.hideControls = function () {
        t.addClass(i, "pswp__ui--hidden"), T = !1
      }, w.showControls = function () {
        T = !0, C || w.update(), t.removeClass(i, "pswp__ui--hidden")
      }, w.supportsFullscreen = function () {
        var e = document;
        return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
      }, w.getFullscreenAPI = function () {
        var t, n = document.documentElement,
          i = "fullscreenchange";
        return n.requestFullscreen ? t = {
          enterK: "requestFullscreen",
          exitK: "exitFullscreen",
          elementK: "fullscreenElement",
          eventK: i
        } : n.mozRequestFullScreen ? t = {
          enterK: "mozRequestFullScreen",
          exitK: "mozCancelFullScreen",
          elementK: "mozFullScreenElement",
          eventK: "moz" + i
        } : n.webkitRequestFullscreen ? t = {
          enterK: "webkitRequestFullscreen",
          exitK: "webkitExitFullscreen",
          elementK: "webkitFullscreenElement",
          eventK: "webkit" + i
        } : n.msRequestFullscreen && (t = {
          enterK: "msRequestFullscreen",
          exitK: "msExitFullscreen",
          elementK: "msFullscreenElement",
          eventK: "MSFullscreenChange"
        }), t && (t.enter = function () {
          return c = g.closeOnScroll, g.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
        }, t.exit = function () {
          return g.closeOnScroll = c, document[this.exitK]()
        }, t.isFullscreen = function () {
          return document[this.elementK]
        }), t
      }
    }
  });
var initPhotoSwipeFromDOM = function (e) {
  for (var t = function (e) {
      for (var t, n, i, r, o = e.childNodes, a = o.length, s = [], l = 0; l < a; l++) t = o[l], 1 === t.nodeType && (n = t.children[0], i = n.getAttribute("data-size").split("x"), r = {
        src: n.getAttribute("href"),
        w: parseInt(i[0], 10),
        h: parseInt(i[1], 10)
      }, t.children.length > 1 && (r.title = t.children[1].innerHTML), n.children.length > 0 && (r.msrc = n.children[0].getAttribute("src")), r.el = t, s.push(r));
      return s
    }, n = function e(t, n) {
      return t && (n(t) ? t : e(t.parentNode, n))
    }, i = function (e) {
      e = e || window.event, e.preventDefault ? e.preventDefault() : e.returnValue = !1;
      var t = e.target || e.srcElement,
        i = n(t, function (e) {
          return e.tagName && "FIGURE" === e.tagName.toUpperCase()
        });
      if (i) {
        for (var o, a = i.parentNode, s = i.parentNode.childNodes, l = s.length, c = 0, u = 0; u < l; u++)
          if (1 === s[u].nodeType) {
            if (s[u] === i) {
              o = c;
              break
            }
            c++
          }
        return o >= 0 && r(o, a), !1
      }
    }, r = function (e, n, i, r) {
      var o, a, s, l = document.querySelectorAll(".pswp")[0];
      if (s = t(n), a = {
          galleryUID: n.getAttribute("data-pswp-uid"),
          getThumbBoundsFn: function (e) {
            var t = s[e].el.getElementsByTagName("img")[0],
              n = window.pageYOffset || document.documentElement.scrollTop,
              i = t.getBoundingClientRect();
            return {
              x: i.left,
              y: i.top + n,
              w: i.width
            }
          }
        }, r)
        if (a.galleryPIDs) {
          for (var c = 0; c < s.length; c++)
            if (s[c].pid == e) {
              a.index = c;
              break
            }
        } else a.index = parseInt(e, 10) - 1;
      else a.index = parseInt(e, 10);
      isNaN(a.index) || (i && (a.showAnimationDuration = 0), o = new PhotoSwipe(l, PhotoSwipeUI_Default, s, a), o.init())
    }, o = document.querySelectorAll(e), a = 0, s = o.length; a < s; a++) o[a].setAttribute("data-pswp-uid", a + 1), o[a].onclick = i;
  var l = function () {
    var e = window.location.hash.substring(1),
      t = {};
    if (e.length < 5) return t;
    for (var n = e.split("&"), i = 0; i < n.length; i++)
      if (n[i]) {
        var r = n[i].split("=");
        r.length < 2 || (t[r[0]] = r[1])
      }
    return t.gid && (t.gid = parseInt(t.gid, 10)), t
  }();
  l.pid && l.gid && r(l.pid, o[l.gid - 1], !0, !0)
};
initPhotoSwipeFromDOM(".mdb-lightbox"),
  function (e) {
    e.fn.sticky = function (t) {
      var n = {
          topSpacing: 0,
          zIndex: "",
          stopper: ".sticky-stopper",
          stickyClass: !1
        },
        i = e.extend({}, n, t),
        r = function () {
          return "number" == typeof i.zIndex
        }(),
        o = function () {
          return 0 < e(i.stopper).length || "number" == typeof i.stopper
        }();
      return this.each(function () {
        function t() {
          var t = h.scrollTop(),
            s = f,
            p = n.parent().width();
          if (d.width(p), o && "string" == typeof f) {
            s = e(f).offset().top - a - l
          }
          if (u < t) {
            if (i.stickyClass && n.addClass(i.stickyClass), n.after(d).css({
                position: "fixed",
                top: l,
                width: p
              }), r && n.css({
                zIndex: c
              }), o && s < t) {
              var m = s - t + l;
              n.css({
                top: m
              })
            }
          } else i.stickyClass && n.removeClass(i.stickyClass), n.css({
            position: "static",
            top: null,
            left: null,
            width: "auto"
          }), d.remove()
        }
        var n = e(this),
          a = n.outerHeight(),
          s = n.outerWidth(),
          l = i.topSpacing,
          c = i.zIndex,
          u = n.offset().top - l,
          d = e("<div></div>").width(s).height(a).addClass("sticky-placeholder"),
          f = i.stopper,
          h = e(window);
        h.innerHeight() > a && (h.bind("scroll", t), h.bind("load", t), h.bind("resize", t))
      })
    }
  }(jQuery),
  function e(t, n, i) {
    function r(a, s) {
      if (!n[a]) {
        if (!t[a]) {
          var l = "function" == typeof require && require;
          if (!s && l) return l(a, !0);
          if (o) return o(a, !0);
          var c = new Error("Cannot find module '" + a + "'");
          throw c.code = "MODULE_NOT_FOUND", c
        }
        var u = n[a] = {
          exports: {}
        };
        t[a][0].call(u.exports, function (e) {
          var n = t[a][1][e];
          return r(n ? n : e)
        }, u, u.exports, e, t, n, i)
      }
      return n[a].exports
    }
    for (var o = "function" == typeof require && require, a = 0; a < i.length; a++) r(i[a]);
    return r
  }({
    1: [function (e, t, n) {
      "use strict";
      var i = e("../main");
      "function" == typeof define && define.amd ? define(i) : (window.PerfectScrollbar = i, void 0 === window.Ps && (window.Ps = i))
    }, {
      "../main": 7
    }],
    2: [function (e, t, n) {
      "use strict";

      function i(e, t) {
        var n = e.className.split(" ");
        n.indexOf(t) < 0 && n.push(t), e.className = n.join(" ")
      }

      function r(e, t) {
        var n = e.className.split(" "),
          i = n.indexOf(t);
        i >= 0 && n.splice(i, 1), e.className = n.join(" ")
      }
      n.add = function (e, t) {
        e.classList ? e.classList.add(t) : i(e, t)
      }, n.remove = function (e, t) {
        e.classList ? e.classList.remove(t) : r(e, t)
      }, n.list = function (e) {
        return e.classList ? Array.prototype.slice.apply(e.classList) : e.className.split(" ")
      }
    }, {}],
    3: [function (e, t, n) {
      "use strict";

      function i(e, t) {
        return window.getComputedStyle(e)[t]
      }

      function r(e, t, n) {
        return "number" == typeof n && (n = n.toString() + "px"), e.style[t] = n, e
      }

      function o(e, t) {
        for (var n in t) {
          var i = t[n];
          "number" == typeof i && (i = i.toString() + "px"), e.style[n] = i
        }
        return e
      }
      var a = {};
      a.e = function (e, t) {
        var n = document.createElement(e);
        return n.className = t, n
      }, a.appendTo = function (e, t) {
        return t.appendChild(e), e
      }, a.css = function (e, t, n) {
        return "object" == typeof t ? o(e, t) : void 0 === n ? i(e, t) : r(e, t, n)
      }, a.matches = function (e, t) {
        return void 0 !== e.matches ? e.matches(t) : void 0 !== e.matchesSelector ? e.matchesSelector(t) : void 0 !== e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : void 0 !== e.mozMatchesSelector ? e.mozMatchesSelector(t) : void 0 !== e.msMatchesSelector ? e.msMatchesSelector(t) : void 0
      }, a.remove = function (e) {
        void 0 !== e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
      }, a.queryChildren = function (e, t) {
        return Array.prototype.filter.call(e.childNodes, function (e) {
          return a.matches(e, t)
        })
      }, t.exports = a
    }, {}],
    4: [function (e, t, n) {
      "use strict";
      var i = function (e) {
        this.element = e, this.events = {}
      };
      i.prototype.bind = function (e, t) {
        void 0 === this.events[e] && (this.events[e] = []), this.events[e].push(t), this.element.addEventListener(e, t, !1)
      }, i.prototype.unbind = function (e, t) {
        var n = void 0 !== t;
        this.events[e] = this.events[e].filter(function (i) {
          return !(!n || i === t) || (this.element.removeEventListener(e, i, !1), !1)
        }, this)
      }, i.prototype.unbindAll = function () {
        for (var e in this.events) this.unbind(e)
      };
      var r = function () {
        this.eventElements = []
      };
      r.prototype.eventElement = function (e) {
        var t = this.eventElements.filter(function (t) {
          return t.element === e
        })[0];
        return void 0 === t && (t = new i(e), this.eventElements.push(t)), t
      }, r.prototype.bind = function (e, t, n) {
        this.eventElement(e).bind(t, n)
      }, r.prototype.unbind = function (e, t, n) {
        this.eventElement(e).unbind(t, n)
      }, r.prototype.unbindAll = function () {
        for (var e = 0; e < this.eventElements.length; e++) this.eventElements[e].unbindAll()
      }, r.prototype.once = function (e, t, n) {
        var i = this.eventElement(e),
          r = function (e) {
            i.unbind(t, r), n(e)
          };
        i.bind(t, r)
      }, t.exports = r
    }, {}],
    5: [function (e, t, n) {
      "use strict";
      t.exports = function () {
        function e() {
          return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return function () {
          return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
        }
      }()
    }, {}],
    6: [function (e, t, n) {
      "use strict";

      function i(e) {
        return function (t, n) {
          e(t, "ps--in-scrolling"), void 0 !== n ? e(t, "ps--" + n) : (e(t, "ps--x"), e(t, "ps--y"))
        }
      }
      var r = e("./class"),
        o = e("./dom"),
        a = n.toInt = function (e) {
          return parseInt(e, 10) || 0
        },
        s = n.clone = function (e) {
          if (e) {
            if (Array.isArray(e)) return e.map(s);
            if ("object" == typeof e) {
              var t = {};
              for (var n in e) t[n] = s(e[n]);
              return t
            }
            return e
          }
          return null
        };
      n.extend = function (e, t) {
        var n = s(e);
        for (var i in t) n[i] = s(t[i]);
        return n
      }, n.isEditable = function (e) {
        return o.matches(e, "input,[contenteditable]") || o.matches(e, "select,[contenteditable]") || o.matches(e, "textarea,[contenteditable]") || o.matches(e, "button,[contenteditable]")
      }, n.removePsClasses = function (e) {
        for (var t = r.list(e), n = 0; n < t.length; n++) {
          var i = t[n];
          0 === i.indexOf("ps-") && r.remove(e, i)
        }
      }, n.outerWidth = function (e) {
        return a(o.css(e, "width")) + a(o.css(e, "paddingLeft")) + a(o.css(e, "paddingRight")) + a(o.css(e, "borderLeftWidth")) + a(o.css(e, "borderRightWidth"))
      }, n.startScrolling = i(r.add), n.stopScrolling = i(r.remove), n.env = {
        isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
        supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        supportsIePointer: "undefined" != typeof window && null !== window.navigator.msMaxTouchPoints
      }
    }, {
      "./class": 2,
      "./dom": 3
    }],
    7: [function (e, t, n) {
      "use strict";
      var i = e("./plugin/destroy"),
        r = e("./plugin/initialize"),
        o = e("./plugin/update");
      t.exports = {
        initialize: r,
        update: o,
        destroy: i
      }
    }, {
      "./plugin/destroy": 9,
      "./plugin/initialize": 17,
      "./plugin/update": 21
    }],
    8: [function (e, t, n) {
      "use strict";
      t.exports = {
        handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
        maxScrollbarLength: null,
        minScrollbarLength: null,
        scrollXMarginOffset: 0,
        scrollYMarginOffset: 0,
        suppressScrollX: !1,
        suppressScrollY: !1,
        swipePropagation: !0,
        swipeEasing: !0,
        useBothWheelAxes: !1,
        wheelPropagation: !1,
        wheelSpeed: 1,
        theme: "default"
      }
    }, {}],
    9: [function (e, t, n) {
      "use strict";
      var i = e("../lib/helper"),
        r = e("../lib/dom"),
        o = e("./instances");
      t.exports = function (e) {
        var t = o.get(e);
        t && (t.event.unbindAll(), r.remove(t.scrollbarX), r.remove(t.scrollbarY), r.remove(t.scrollbarXRail), r.remove(t.scrollbarYRail), i.removePsClasses(e), o.remove(e))
      }
    }, {
      "../lib/dom": 3,
      "../lib/helper": 6,
      "./instances": 18
    }],
    10: [function (e, t, n) {
      "use strict";

      function i(e, t) {
        function n(e) {
          return e.getBoundingClientRect()
        }
        var i = function (e) {
          e.stopPropagation()
        };
        t.event.bind(t.scrollbarY, "click", i), t.event.bind(t.scrollbarYRail, "click", function (i) {
          var r = i.pageY - window.pageYOffset - n(t.scrollbarYRail).top,
            s = r > t.scrollbarYTop ? 1 : -1;
          a(e, "top", e.scrollTop + s * t.containerHeight), o(e), i.stopPropagation()
        }), t.event.bind(t.scrollbarX, "click", i), t.event.bind(t.scrollbarXRail, "click", function (i) {
          var r = i.pageX - window.pageXOffset - n(t.scrollbarXRail).left,
            s = r > t.scrollbarXLeft ? 1 : -1;
          a(e, "left", e.scrollLeft + s * t.containerWidth), o(e), i.stopPropagation()
        })
      }
      var r = e("../instances"),
        o = e("../update-geometry"),
        a = e("../update-scroll");
      t.exports = function (e) {
        i(e, r.get(e))
      }
    }, {
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    11: [function (e, t, n) {
      "use strict";

      function i(e, t) {
        function n(n) {
          var r = i + n * t.railXRatio,
            a = Math.max(0, t.scrollbarXRail.getBoundingClientRect().left) + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
          t.scrollbarXLeft = r < 0 ? 0 : r > a ? a : r, c(e, "left", o.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)) - t.negativeScrollAdjustment)
        }
        var i = null,
          r = null,
          s = function (t) {
            n(t.pageX - r), l(e), t.stopPropagation(), t.preventDefault()
          },
          u = function () {
            o.stopScrolling(e, "x"), t.event.unbind(t.ownerDocument, "mousemove", s)
          };
        t.event.bind(t.scrollbarX, "mousedown", function (n) {
          r = n.pageX, i = o.toInt(a.css(t.scrollbarX, "left")) * t.railXRatio, o.startScrolling(e, "x"), t.event.bind(t.ownerDocument, "mousemove", s), t.event.once(t.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
        })
      }

      function r(e, t) {
        function n(n) {
          var r = i + n * t.railYRatio,
            a = Math.max(0, t.scrollbarYRail.getBoundingClientRect().top) + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
          t.scrollbarYTop = r < 0 ? 0 : r > a ? a : r, c(e, "top", o.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight)))
        }
        var i = null,
          r = null,
          s = function (t) {
            n(t.pageY - r), l(e), t.stopPropagation(), t.preventDefault()
          },
          u = function () {
            o.stopScrolling(e, "y"), t.event.unbind(t.ownerDocument, "mousemove", s)
          };
        t.event.bind(t.scrollbarY, "mousedown", function (n) {
          r = n.pageY, i = o.toInt(a.css(t.scrollbarY, "top")) * t.railYRatio, o.startScrolling(e, "y"), t.event.bind(t.ownerDocument, "mousemove", s), t.event.once(t.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
        })
      }
      var o = e("../../lib/helper"),
        a = e("../../lib/dom"),
        s = e("../instances"),
        l = e("../update-geometry"),
        c = e("../update-scroll");
      t.exports = function (e) {
        var t = s.get(e);
        i(e, t), r(e, t)
      }
    }, {
      "../../lib/dom": 3,
      "../../lib/helper": 6,
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    12: [function (e, t, n) {
      "use strict";

      function i(e, t) {
        function n(n, i) {
          var r = e.scrollTop;
          if (0 === n) {
            if (!t.scrollbarYActive) return !1;
            if (0 === r && i > 0 || r >= t.contentHeight - t.containerHeight && i < 0) return !t.settings.wheelPropagation
          }
          var o = e.scrollLeft;
          if (0 === i) {
            if (!t.scrollbarXActive) return !1;
            if (0 === o && n < 0 || o >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation
          }
          return !0
        }
        var i = !1;
        t.event.bind(e, "mouseenter", function () {
          i = !0
        }), t.event.bind(e, "mouseleave", function () {
          i = !1
        });
        var a = !1;
        t.event.bind(t.ownerDocument, "keydown", function (c) {
          if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
            var u = o.matches(t.scrollbarX, ":focus") || o.matches(t.scrollbarY, ":focus");
            if (i || u) {
              var d = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
              if (d) {
                if ("IFRAME" === d.tagName) d = d.contentDocument.activeElement;
                else
                  for (; d.shadowRoot;) d = d.shadowRoot.activeElement;
                if (r.isEditable(d)) return
              }
              var f = 0,
                h = 0;
              switch (c.which) {
                case 37:
                  f = c.metaKey ? -t.contentWidth : c.altKey ? -t.containerWidth : -30;
                  break;
                case 38:
                  h = c.metaKey ? t.contentHeight : c.altKey ? t.containerHeight : 30;
                  break;
                case 39:
                  f = c.metaKey ? t.contentWidth : c.altKey ? t.containerWidth : 30;
                  break;
                case 40:
                  h = c.metaKey ? -t.contentHeight : c.altKey ? -t.containerHeight : -30;
                  break;
                case 33:
                  h = 90;
                  break;
                case 32:
                  h = c.shiftKey ? 90 : -90;
                  break;
                case 34:
                  h = -90;
                  break;
                case 35:
                  h = c.ctrlKey ? -t.contentHeight : -t.containerHeight;
                  break;
                case 36:
                  h = c.ctrlKey ? e.scrollTop : t.containerHeight;
                  break;
                default:
                  return
              }
              l(e, "top", e.scrollTop - h), l(e, "left", e.scrollLeft + f), s(e), (a = n(f, h)) && c.preventDefault()
            }
          }
        })
      }
      var r = e("../../lib/helper"),
        o = e("../../lib/dom"),
        a = e("../instances"),
        s = e("../update-geometry"),
        l = e("../update-scroll");
      t.exports = function (e) {
        i(e, a.get(e))
      }
    }, {
      "../../lib/dom": 3,
      "../../lib/helper": 6,
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    13: [function (e, t, n) {
      "use strict";

      function i(e, t) {
        function n(n, i) {
          var r = e.scrollTop;
          if (0 === n) {
            if (!t.scrollbarYActive) return !1;
            if (0 === r && i > 0 || r >= t.contentHeight - t.containerHeight && i < 0) return !t.settings.wheelPropagation
          }
          var o = e.scrollLeft;
          if (0 === i) {
            if (!t.scrollbarXActive) return !1;
            if (0 === o && n < 0 || o >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation
          }
          return !0
        }

        function i(e) {
          var t = e.deltaX,
            n = -1 * e.deltaY;
          return void 0 !== t && void 0 !== n || (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t !== t && n !== n && (t = 0, n = e.wheelDelta), e.shiftKey ? [-n, -t] : [t, n]
        }

        function r(t, n) {
          var i = e.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
          if (i) {
            var r = window.getComputedStyle(i);
            if (![r.overflow, r.overflowX, r.overflowY].join("").match(/(scroll|auto)/)) return !1;
            var o = i.scrollHeight - i.clientHeight;
            if (o > 0 && !(0 === i.scrollTop && n > 0 || i.scrollTop === o && n < 0)) return !0;
            var a = i.scrollLeft - i.clientWidth;
            if (a > 0 && !(0 === i.scrollLeft && t < 0 || i.scrollLeft === a && t > 0)) return !0
          }
          return !1
        }

        function s(s) {
          var c = i(s),
            u = c[0],
            d = c[1];
          r(u, d) || (l = !1, t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (d ? a(e, "top", e.scrollTop - d * t.settings.wheelSpeed) : a(e, "top", e.scrollTop + u * t.settings.wheelSpeed), l = !0) : t.scrollbarXActive && !t.scrollbarYActive && (u ? a(e, "left", e.scrollLeft + u * t.settings.wheelSpeed) : a(e, "left", e.scrollLeft - d * t.settings.wheelSpeed), l = !0) : (a(e, "top", e.scrollTop - d * t.settings.wheelSpeed), a(e, "left", e.scrollLeft + u * t.settings.wheelSpeed)), o(e), (l = l || n(u, d)) && (s.stopPropagation(), s.preventDefault()))
        }
        var l = !1;
        void 0 !== window.onwheel ? t.event.bind(e, "wheel", s) : void 0 !== window.onmousewheel && t.event.bind(e, "mousewheel", s)
      }
      var r = e("../instances"),
        o = e("../update-geometry"),
        a = e("../update-scroll");
      t.exports = function (e) {
        i(e, r.get(e))
      }
    }, {
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    14: [function (e, t, n) {
      "use strict";

      function i(e, t) {
        t.event.bind(e, "scroll", function () {
          o(e)
        })
      }
      var r = e("../instances"),
        o = e("../update-geometry");
      t.exports = function (e) {
        i(e, r.get(e))
      }
    }, {
      "../instances": 18,
      "../update-geometry": 19
    }],
    15: [function (e, t, n) {
      "use strict";

      function i(e, t) {
        function n() {
          var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
          return 0 === e.toString().length ? null : e.getRangeAt(0).commonAncestorContainer
        }

        function i() {
          c || (c = setInterval(function () {
            return o.get(e) ? (s(e, "top", e.scrollTop + u.top), s(e, "left", e.scrollLeft + u.left), void a(e)) : void clearInterval(c)
          }, 50))
        }

        function l() {
          c && (clearInterval(c), c = null), r.stopScrolling(e)
        }
        var c = null,
          u = {
            top: 0,
            left: 0
          },
          d = !1;
        t.event.bind(t.ownerDocument, "selectionchange", function () {
          e.contains(n()) ? d = !0 : (d = !1, l())
        }), t.event.bind(window, "mouseup", function () {
          d && (d = !1, l())
        }), t.event.bind(window, "keyup", function () {
          d && (d = !1, l())
        }), t.event.bind(window, "mousemove", function (t) {
          if (d) {
            var n = {
                x: t.pageX,
                y: t.pageY
              },
              o = {
                left: e.offsetLeft,
                right: e.offsetLeft + e.offsetWidth,
                top: e.offsetTop,
                bottom: e.offsetTop + e.offsetHeight
              };
            n.x < o.left + 3 ? (u.left = -5, r.startScrolling(e, "x")) : n.x > o.right - 3 ? (u.left = 5, r.startScrolling(e, "x")) : u.left = 0, n.y < o.top + 3 ? (o.top + 3 - n.y < 5 ? u.top = -5 : u.top = -20, r.startScrolling(e, "y")) : n.y > o.bottom - 3 ? (n.y - o.bottom + 3 < 5 ? u.top = 5 : u.top = 20, r.startScrolling(e, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? l() : i()
          }
        })
      }
      var r = e("../../lib/helper"),
        o = e("../instances"),
        a = e("../update-geometry"),
        s = e("../update-scroll");
      t.exports = function (e) {
        i(e, o.get(e))
      }
    }, {
      "../../lib/helper": 6,
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    16: [function (e, t, n) {
      "use strict";

      function i(e, t, n, i) {
        function r(n, i) {
          var r = e.scrollTop,
            o = e.scrollLeft,
            a = Math.abs(n),
            s = Math.abs(i);
          if (s > a) {
            if (i < 0 && r === t.contentHeight - t.containerHeight || i > 0 && 0 === r) return !t.settings.swipePropagation
          } else if (a > s && (n < 0 && o === t.contentWidth - t.containerWidth || n > 0 && 0 === o)) return !t.settings.swipePropagation;
          return !0
        }

        function l(t, n) {
          s(e, "top", e.scrollTop - n), s(e, "left", e.scrollLeft - t), a(e)
        }

        function c() {
          x = !0
        }

        function u() {
          x = !1
        }

        function d(e) {
          return e.targetTouches ? e.targetTouches[0] : e
        }

        function f(e) {
          return !(!e.targetTouches || 1 !== e.targetTouches.length) || !(!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)
        }

        function h(e) {
          if (f(e)) {
            w = !0;
            var t = d(e);
            g.pageX = t.pageX, g.pageY = t.pageY, v = (new Date).getTime(), null !== b && clearInterval(b), e.stopPropagation()
          }
        }

        function p(e) {
          if (!w && t.settings.swipePropagation && h(e), !x && w && f(e)) {
            var n = d(e),
              i = {
                pageX: n.pageX,
                pageY: n.pageY
              },
              o = i.pageX - g.pageX,
              a = i.pageY - g.pageY;
            l(o, a), g = i;
            var s = (new Date).getTime(),
              c = s - v;
            c > 0 && (y.x = o / c, y.y = a / c, v = s), r(o, a) && (e.stopPropagation(), e.preventDefault())
          }
        }

        function m() {
          !x && w && (w = !1, t.settings.swipeEasing && (clearInterval(b), b = setInterval(function () {
            return o.get(e) && (y.x || y.y) ? Math.abs(y.x) < .01 && Math.abs(y.y) < .01 ? void clearInterval(b) : (l(30 * y.x, 30 * y.y), y.x *= .8, void(y.y *= .8)) : void clearInterval(b)
          }, 10)))
        }
        var g = {},
          v = 0,
          y = {},
          b = null,
          x = !1,
          w = !1;
        n ? (t.event.bind(window, "touchstart", c), t.event.bind(window, "touchend", u), t.event.bind(e, "touchstart", h), t.event.bind(e, "touchmove", p), t.event.bind(e, "touchend", m)) : i && (window.PointerEvent ? (t.event.bind(window, "pointerdown", c), t.event.bind(window, "pointerup", u), t.event.bind(e, "pointerdown", h), t.event.bind(e, "pointermove", p), t.event.bind(e, "pointerup", m)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", c), t.event.bind(window, "MSPointerUp", u), t.event.bind(e, "MSPointerDown", h), t.event.bind(e, "MSPointerMove", p), t.event.bind(e, "MSPointerUp", m)))
      }
      var r = e("../../lib/helper"),
        o = e("../instances"),
        a = e("../update-geometry"),
        s = e("../update-scroll");
      t.exports = function (e) {
        if (r.env.supportsTouch || r.env.supportsIePointer) {
          i(e, o.get(e), r.env.supportsTouch, r.env.supportsIePointer)
        }
      }
    }, {
      "../../lib/helper": 6,
      "../instances": 18,
      "../update-geometry": 19,
      "../update-scroll": 20
    }],
    17: [function (e, t, n) {
      "use strict";
      var i = e("../lib/helper"),
        r = e("../lib/class"),
        o = e("./instances"),
        a = e("./update-geometry"),
        s = {
          "click-rail": e("./handler/click-rail"),
          "drag-scrollbar": e("./handler/drag-scrollbar"),
          keyboard: e("./handler/keyboard"),
          wheel: e("./handler/mouse-wheel"),
          touch: e("./handler/touch"),
          selection: e("./handler/selection")
        },
        l = e("./handler/native-scroll");
      t.exports = function (e, t) {
        t = "object" == typeof t ? t : {}, r.add(e, "ps");
        var n = o.add(e);
        n.settings = i.extend(n.settings, t), r.add(e, "ps--theme_" + n.settings.theme), n.settings.handlers.forEach(function (t) {
          s[t](e)
        }), l(e), a(e)
      }
    }, {
      "../lib/class": 2,
      "../lib/helper": 6,
      "./handler/click-rail": 10,
      "./handler/drag-scrollbar": 11,
      "./handler/keyboard": 12,
      "./handler/mouse-wheel": 13,
      "./handler/native-scroll": 14,
      "./handler/selection": 15,
      "./handler/touch": 16,
      "./instances": 18,
      "./update-geometry": 19
    }],
    18: [function (e, t, n) {
      "use strict";

      function i(e) {
        function t() {
          l.add(e, "ps--focus")
        }

        function n() {
          l.remove(e, "ps--focus")
        }
        var i = this;
        i.settings = s.clone(c), i.containerWidth = null, i.containerHeight = null, i.contentWidth = null, i.contentHeight = null, i.isRtl = "rtl" === u.css(e, "direction"), i.isNegativeScroll = function () {
          var t = e.scrollLeft,
            n = null;
          return e.scrollLeft = -1, n = e.scrollLeft < 0, e.scrollLeft = t, n
        }(), i.negativeScrollAdjustment = i.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, i.event = new d, i.ownerDocument = e.ownerDocument || document, i.scrollbarXRail = u.appendTo(u.e("div", "ps__scrollbar-x-rail"), e), i.scrollbarX = u.appendTo(u.e("div", "ps__scrollbar-x"), i.scrollbarXRail), i.scrollbarX.setAttribute("tabindex", 0), i.event.bind(i.scrollbarX, "focus", t), i.event.bind(i.scrollbarX, "blur", n), i.scrollbarXActive = null, i.scrollbarXWidth = null, i.scrollbarXLeft = null, i.scrollbarXBottom = s.toInt(u.css(i.scrollbarXRail, "bottom")), i.isScrollbarXUsingBottom = i.scrollbarXBottom === i.scrollbarXBottom, i.scrollbarXTop = i.isScrollbarXUsingBottom ? null : s.toInt(u.css(i.scrollbarXRail, "top")), i.railBorderXWidth = s.toInt(u.css(i.scrollbarXRail, "borderLeftWidth")) + s.toInt(u.css(i.scrollbarXRail, "borderRightWidth")), u.css(i.scrollbarXRail, "display", "block"), i.railXMarginWidth = s.toInt(u.css(i.scrollbarXRail, "marginLeft")) + s.toInt(u.css(i.scrollbarXRail, "marginRight")), u.css(i.scrollbarXRail, "display", ""), i.railXWidth = null, i.railXRatio = null, i.scrollbarYRail = u.appendTo(u.e("div", "ps__scrollbar-y-rail"), e), i.scrollbarY = u.appendTo(u.e("div", "ps__scrollbar-y"), i.scrollbarYRail), i.scrollbarY.setAttribute("tabindex", 0), i.event.bind(i.scrollbarY, "focus", t), i.event.bind(i.scrollbarY, "blur", n), i.scrollbarYActive = null, i.scrollbarYHeight = null, i.scrollbarYTop = null, i.scrollbarYRight = s.toInt(u.css(i.scrollbarYRail, "right")), i.isScrollbarYUsingRight = i.scrollbarYRight === i.scrollbarYRight, i.scrollbarYLeft = i.isScrollbarYUsingRight ? null : s.toInt(u.css(i.scrollbarYRail, "left")), i.scrollbarYOuterWidth = i.isRtl ? s.outerWidth(i.scrollbarY) : null, i.railBorderYWidth = s.toInt(u.css(i.scrollbarYRail, "borderTopWidth")) + s.toInt(u.css(i.scrollbarYRail, "borderBottomWidth")), u.css(i.scrollbarYRail, "display", "block"), i.railYMarginHeight = s.toInt(u.css(i.scrollbarYRail, "marginTop")) + s.toInt(u.css(i.scrollbarYRail, "marginBottom")), u.css(i.scrollbarYRail, "display", ""), i.railYHeight = null, i.railYRatio = null
      }

      function r(e) {
        return e.getAttribute("data-ps-id")
      }

      function o(e, t) {
        e.setAttribute("data-ps-id", t)
      }

      function a(e) {
        e.removeAttribute("data-ps-id")
      }
      var s = e("../lib/helper"),
        l = e("../lib/class"),
        c = e("./default-setting"),
        u = e("../lib/dom"),
        d = e("../lib/event-manager"),
        f = e("../lib/guid"),
        h = {};
      n.add = function (e) {
        var t = f();
        return o(e, t), h[t] = new i(e), h[t]
      }, n.remove = function (e) {
        delete h[r(e)], a(e)
      }, n.get = function (e) {
        return h[r(e)]
      }
    }, {
      "../lib/class": 2,
      "../lib/dom": 3,
      "../lib/event-manager": 4,
      "../lib/guid": 5,
      "../lib/helper": 6,
      "./default-setting": 8
    }],
    19: [function (e, t, n) {
      "use strict";

      function i(e, t) {
        return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
      }

      function r(e, t) {
        var n = {
          width: t.railXWidth
        };
        t.isRtl ? n.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : n.left = e.scrollLeft, t.isScrollbarXUsingBottom ? n.bottom = t.scrollbarXBottom - e.scrollTop : n.top = t.scrollbarXTop + e.scrollTop, s.css(t.scrollbarXRail, n);
        var i = {
          top: e.scrollTop,
          height: t.railYHeight
        };
        t.isScrollbarYUsingRight ? t.isRtl ? i.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : i.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? i.left = t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : i.left = t.scrollbarYLeft + e.scrollLeft, s.css(t.scrollbarYRail, i), s.css(t.scrollbarX, {
          left: t.scrollbarXLeft,
          width: t.scrollbarXWidth - t.railBorderXWidth
        }), s.css(t.scrollbarY, {
          top: t.scrollbarYTop,
          height: t.scrollbarYHeight - t.railBorderYWidth
        })
      }
      var o = e("../lib/helper"),
        a = e("../lib/class"),
        s = e("../lib/dom"),
        l = e("./instances"),
        c = e("./update-scroll");
      t.exports = function (e) {
        var t = l.get(e);
        t.containerWidth = e.clientWidth, t.containerHeight = e.clientHeight, t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight;
        var n;
        e.contains(t.scrollbarXRail) || (n = s.queryChildren(e, ".ps__scrollbar-x-rail"), n.length > 0 && n.forEach(function (e) {
          s.remove(e)
        }), s.appendTo(t.scrollbarXRail, e)), e.contains(t.scrollbarYRail) || (n = s.queryChildren(e, ".ps__scrollbar-y-rail"), n.length > 0 && n.forEach(function (e) {
          s.remove(e)
        }), s.appendTo(t.scrollbarYRail, e)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = i(t, o.toInt(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = o.toInt((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = i(t, o.toInt(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = o.toInt(e.scrollTop * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), r(e, t), t.scrollbarXActive ? a.add(e, "ps--active-x") : (a.remove(e, "ps--active-x"), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, c(e, "left", 0)), t.scrollbarYActive ? a.add(e, "ps--active-y") : (a.remove(e, "ps--active-y"), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, c(e, "top", 0))
      }
    }, {
      "../lib/class": 2,
      "../lib/dom": 3,
      "../lib/helper": 6,
      "./instances": 18,
      "./update-scroll": 20
    }],
    20: [function (e, t, n) {
      "use strict";
      var i = e("./instances"),
        r = function (e) {
          var t = document.createEvent("Event");
          return t.initEvent(e, !0, !0), t
        };
      t.exports = function (e, t, n) {
        if (void 0 === e) throw "You must provide an element to the update-scroll function";
        if (void 0 === t) throw "You must provide an axis to the update-scroll function";
        if (void 0 === n) throw "You must provide a value to the update-scroll function";
        "top" === t && n <= 0 && (e.scrollTop = n = 0, e.dispatchEvent(r("ps-y-reach-start"))), "left" === t && n <= 0 && (e.scrollLeft = n = 0, e.dispatchEvent(r("ps-x-reach-start")));
        var o = i.get(e);
        "top" === t && n >= o.contentHeight - o.containerHeight && (n = o.contentHeight - o.containerHeight, n - e.scrollTop <= 1 ? n = e.scrollTop : e.scrollTop = n, e.dispatchEvent(r("ps-y-reach-end"))), "left" === t && n >= o.contentWidth - o.containerWidth && (n = o.contentWidth - o.containerWidth, n - e.scrollLeft <= 1 ? n = e.scrollLeft : e.scrollLeft = n, e.dispatchEvent(r("ps-x-reach-end"))), void 0 === o.lastTop && (o.lastTop = e.scrollTop), void 0 === o.lastLeft && (o.lastLeft = e.scrollLeft), "top" === t && n < o.lastTop && e.dispatchEvent(r("ps-scroll-up")), "top" === t && n > o.lastTop && e.dispatchEvent(r("ps-scroll-down")), "left" === t && n < o.lastLeft && e.dispatchEvent(r("ps-scroll-left")), "left" === t && n > o.lastLeft && e.dispatchEvent(r("ps-scroll-right")), "top" === t && n !== o.lastTop && (e.scrollTop = o.lastTop = n, e.dispatchEvent(r("ps-scroll-y"))), "left" === t && n !== o.lastLeft && (e.scrollLeft = o.lastLeft = n, e.dispatchEvent(r("ps-scroll-x")))
      }
    }, {
      "./instances": 18
    }],
    21: [function (e, t, n) {
      "use strict";
      var i = e("../lib/helper"),
        r = e("../lib/dom"),
        o = e("./instances"),
        a = e("./update-geometry"),
        s = e("./update-scroll");
      t.exports = function (e) {
        var t = o.get(e);
        t && (t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, r.css(t.scrollbarXRail, "display", "block"), r.css(t.scrollbarYRail, "display", "block"), t.railXMarginWidth = i.toInt(r.css(t.scrollbarXRail, "marginLeft")) + i.toInt(r.css(t.scrollbarXRail, "marginRight")), t.railYMarginHeight = i.toInt(r.css(t.scrollbarYRail, "marginTop")) + i.toInt(r.css(t.scrollbarYRail, "marginBottom")), r.css(t.scrollbarXRail, "display", "none"), r.css(t.scrollbarYRail, "display", "none"), a(e), s(e, "top", e.scrollTop), s(e, "left", e.scrollLeft), r.css(t.scrollbarXRail, "display", ""), r.css(t.scrollbarYRail, "display", ""))
      }
    }, {
      "../lib/dom": 3,
      "../lib/helper": 6,
      "./instances": 18,
      "./update-geometry": 19,
      "./update-scroll": 20
    }]
  }, {}, [1]),
  function (e) {
    var t = !1,
      n = {
        data: [],
        placeholder: "",
        secondaryPlaceholder: ""
      };
    e(document).ready(function () {
      e(document).on("click", ".chip .close", function () {
        var t = e(this);
        t.closest(".chips").data("initialized") || t.closest(".chip").remove()
      })
    }), e.fn.material_chip = function (i) {
      var r = this;
      return this.$el = e(this), this.$document = e(document), this.SELS = {
        CHIPS: ".chips",
        CHIP: ".chip",
        INPUT: "input",
        DELETE: ".fa",
        SELECTED_CHIP: ".selected"
      }, "data" === i ? this.$el.data("chips") : "options" === i ? this.$el.data("options") : (this.$el.data("options", e.extend({}, n, i)), this.init = function () {
        var t = 0;
        r.$el.each(function () {
          var n = e(this);
          if (!n.data("initialized")) {
            var i = n.data("options");
            i.data && i.data instanceof Array || (i.data = []), n.data("chips", i.data), n.data("index", t), n.data("initialized", !0), n.hasClass(r.SELS.CHIPS) || n.addClass("chips"), r.chips(n), t++
          }
        })
      }, this.handleEvents = function () {
        var t = r.SELS;
        r.$document.on("click", t.CHIPS, function (n) {
          e(n.target).find(t.INPUT).focus()
        }), r.$document.on("click", t.CHIP, function () {
          e(t.CHIP).removeClass("selected"), e(this).toggleClass("selected")
        }), r.$document.on("keydown", function (n) {
          if (!e(n.target).is("input, textarea")) {
            var i = r.$document.find(t.CHIP + t.SELECTED_CHIP),
              o = i.closest(t.CHIPS),
              a = i.siblings(t.CHIP).length,
              s = void 0;
            if (i.length) {
              var l = 8 === n.which || 46 === n.which,
                c = 37 === n.which,
                u = 39 === n.which;
              if (l) {
                n.preventDefault();
                var d = o.data("index");
                s = i.index(), r.deleteChip(d, s, o);
                var f = null;
                s + 1 < a ? f = s : s !== a && s + 1 !== a || (f = a - 1), f < 0 && (f = null), null !== f && r.selectChip(d, f, o), a || o.find("input").focus()
              } else if (c) {
                if ((s = i.index() - 1) < 0) return;
                e(t.CHIP).removeClass("selected"), r.selectChip(o.data("index"), s, o)
              } else if (u) {
                if (s = i.index() + 1, e(t.CHIP).removeClass("selected"), s > a) return void o.find("input").focus();
                r.selectChip(o.data("index"), s, o)
              }
            }
          }
        }), r.$document.on("focusin", t.CHIPS + " " + t.INPUT, function (n) {
          e(n.target).closest(t.CHIPS).addClass("focus"), e(t.CHIP).removeClass("selected")
        }), r.$document.on("focusout", t.CHIPS + " " + t.INPUT, function (n) {
          e(n.target).closest(t.CHIPS).removeClass("focus")
        }), r.$document.on("keydown", t.CHIPS + " " + t.INPUT, function (n) {
          var i = e(n.target),
            o = i.closest(t.CHIPS),
            a = o.data("index"),
            s = o.children(t.CHIP).length;
          if (13 === n.which) return n.preventDefault(), r.addChip(a, {
            tag: i.val()
          }, o), void i.val("");
          var l = 8 === n.keyCode || 37 === n.keyCode,
            c = "" === i.val();
          return l && c && s ? (r.selectChip(a, s - 1, o), void i.blur()) : void 0
        }), r.$document.on("click", t.CHIPS + " " + t.DELETE, function (n) {
          var i = e(n.target),
            o = i.closest(t.CHIPS),
            a = i.closest(t.CHIP);
          n.stopPropagation(), r.deleteChip(o.data("index"), a.index(), o), o.find("input").focus()
        })
      }, this.chips = function (e) {
        var t = "";
        e.data("chips").forEach(function (e) {
          t += r.renderChip(e)
        }), t += '<input class="input" placeholder="">', e.html(t), r.setPlaceholder(e)
      }, this.renderChip = function (e) {
        if (e.tag) {
          var t = '<div class="chip">' + e.tag;
          return e.image && (t += ' <img src="' + e.image + '"> '), t += '<i class="close fa fa-times"></i>', t += "</div>"
        }
      }, this.setPlaceholder = function (e) {
        var t = e.data("options");
        e.data("chips").length && t.placeholder ? e.find("input").prop("placeholder", t.placeholder) : !e.data("chips").length && t.secondaryPlaceholder && e.find("input").prop("placeholder", t.secondaryPlaceholder)
      }, this.isValid = function (e, t) {
        for (var n = e.data("chips"), i = !1, r = 0; r < n.length; r++)
          if (n[r].tag === t.tag) return void(i = !0);
        return "" !== t.tag && !i
      }, this.addChip = function (t, n, i) {
        if (r.isValid(i, n)) {
          var o = r.renderChip(n);
          i.data("chips").push(n), e(o).insertBefore(i.find("input")), i.trigger("chip.add", n), r.setPlaceholder(i)
        }
      }, this.deleteChip = function (e, t, n) {
        var i = n.data("chips")[t];
        n.find(".chip").eq(t).remove(), n.data("chips").splice(t, 1), n.trigger("chip.delete", i), r.setPlaceholder(n)
      }, this.selectChip = function (e, t, n) {
        var i = n.find(".chip").eq(t);
        i && i.hasClass("selected") === !1 && (i.addClass("selected"), n.trigger("chip.select", n.data("chips")[t]))
      }, this.getChipsElement = function (e, t) {
        return t.eq(e)
      }, this.init(), void(t || (this.handleEvents(), t = !0)))
    }
  }(jQuery),
  function (e) {
    "use strict";

    function t(e) {
      var t = ["O", "Moz", "ms", "Ms", "Webkit"],
        n = t.length;
      if (void 0 !== s.style[e]) return !0;
      for (e = e.charAt(0).toUpperCase() + e.substr(1); --n > -1 && void 0 === s.style[t[n] + e];);
      return n >= 0
    }

    function n() {
      o = e.innerWidth || document.documentElement.clientWidth, a = e.innerHeight || document.documentElement.clientHeight
    }

    function i(e, t, n) {
      e.addEventListener ? e.addEventListener(t, n) : e.attachEvent("on" + t, function () {
        n.call(e)
      })
    }

    function r(t) {
      e.requestAnimationFrame(function () {
        "scroll" !== t.type && n();
        for (var e = 0, i = g.length; e < i; e++) "scroll" !== t.type && (g[e].coverImage(), g[e].clipContainer()), g[e].onScroll()
      })
    }
    Date.now || (Date.now = function () {
      return (new Date).getTime()
    }), e.requestAnimationFrame || function () {
      for (var t = ["webkit", "moz"], n = 0; n < t.length && !e.requestAnimationFrame; ++n) {
        var i = t[n];
        e.requestAnimationFrame = e[i + "RequestAnimationFrame"], e.cancelAnimationFrame = e[i + "CancelAnimationFrame"] || e[i + "CancelRequestAnimationFrame"]
      }
      if (/iP(ad|hone|od).*OS 6/.test(e.navigator.userAgent) || !e.requestAnimationFrame || !e.cancelAnimationFrame) {
        var r = 0;
        e.requestAnimationFrame = function (e) {
          var t = Date.now(),
            n = Math.max(r + 16, t);
          return setTimeout(function () {
            e(r = n)
          }, n - t)
        }, e.cancelAnimationFrame = clearTimeout
      }
    }();
    var o, a, s = document.createElement("div"),
      l = t("transform"),
      c = t("perspective"),
      u = navigator.userAgent,
      d = u.toLowerCase().indexOf("android") > -1,
      f = /iPad|iPhone|iPod/.test(u) && !e.MSStream,
      h = u.toLowerCase().indexOf("firefox") > -1,
      p = u.indexOf("MSIE ") > -1 || u.indexOf("Trident/") > -1 || u.indexOf("Edge/") > -1,
      m = document.all && !e.atob;
    n();
    var g = [],
      v = function () {
        function e(e, n) {
          var i, r = this;
          if (r.$item = e, r.defaults = {
              type: "scroll",
              speed: .5,
              imgSrc: null,
              imgWidth: null,
              imgHeight: null,
              elementInViewport: null,
              zIndex: -100,
              noAndroid: !1,
              noIos: !0,
              onScroll: null,
              onInit: null,
              onDestroy: null,
              onCoverImage: null
            }, i = JSON.parse(r.$item.getAttribute("data-jarallax") || "{}"), r.options = r.extend({}, r.defaults, i, n), !(!l || d && r.options.noAndroid || f && r.options.noIos)) {
            r.options.speed = Math.min(2, Math.max(-1, parseFloat(r.options.speed)));
            var o = r.options.elementInViewport;
            o && "object" == typeof o && void 0 !== o.length && (o = o[0]), !o instanceof Element && (o = null), r.options.elementInViewport = o, r.instanceID = t++, r.image = {
              src: r.options.imgSrc || null,
              $container: null,
              $item: null,
              width: r.options.imgWidth || null,
              height: r.options.imgHeight || null,
              useImgTag: f || d || p,
              position: !c || h ? "absolute" : "fixed"
            }, r.initImg() && r.init()
          }
        }
        var t = 0;
        return e
      }();
    v.prototype.css = function (t, n) {
      if ("string" == typeof n) return e.getComputedStyle ? e.getComputedStyle(t).getPropertyValue(n) : t.style[n];
      n.transform && (c && (n.transform += " translateZ(0)"), n.WebkitTransform = n.MozTransform = n.msTransform = n.OTransform = n.transform);
      for (var i in n) t.style[i] = n[i];
      return t
    }, v.prototype.extend = function (e) {
      e = e || {};
      for (var t = 1; t < arguments.length; t++)
        if (arguments[t])
          for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
      return e
    }, v.prototype.initImg = function () {
      var e = this;
      return null === e.image.src && (e.image.src = e.css(e.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!e.image.src || "none" === e.image.src)
    }, v.prototype.init = function () {
      function e() {
        t.coverImage(), t.clipContainer(), t.onScroll(!0), t.options.onInit && t.options.onInit.call(t), setTimeout(function () {
          t.$item && t.css(t.$item, {
            "background-image": "none",
            "background-attachment": "scroll",
            "background-size": "auto"
          })
        }, 0)
      }
      var t = this,
        n = {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          pointerEvents: "none"
        },
        i = {};
      t.$item.setAttribute("data-jarallax-original-styles", t.$item.getAttribute("style")), "static" === t.css(t.$item, "position") && t.css(t.$item, {
        position: "relative"
      }), "auto" === t.css(t.$item, "z-index") && t.css(t.$item, {
        zIndex: 0
      }), t.image.$container = document.createElement("div"), t.css(t.image.$container, n), t.css(t.image.$container, {
        visibility: "hidden",
        "z-index": t.options.zIndex
      }), t.image.$container.setAttribute("id", "jarallax-container-" + t.instanceID), t.$item.appendChild(t.image.$container), t.image.useImgTag ? (t.image.$item = document.createElement("img"), t.image.$item.setAttribute("src", t.image.src), i = t.extend({
        "max-width": "none"
      }, n, i)) : (t.image.$item = document.createElement("div"), i = t.extend({
        "background-position": "50% 50%",
        "background-size": "100% auto",
        "background-repeat": "no-repeat no-repeat",
        "background-image": 'url("' + t.image.src + '")'
      }, n, i));
      for (var r = 0, o = t.$item; null !== o && o !== document && 0 === r;) {
        var a = t.css(o, "-webkit-transform") || t.css(o, "-moz-transform") || t.css(o, "transform");
        a && "none" !== a && (r = 1, t.css(t.image.$container, {
          transform: "translateX(0) translateY(0)"
        })), o = o.parentNode
      }(r || "opacity" === t.options.type || "scale" === t.options.type || "scale-opacity" === t.options.type) && (t.image.position = "absolute"), i.position = t.image.position, t.css(t.image.$item, i), t.image.$container.appendChild(t.image.$item), t.image.width && t.image.height ? e() : t.getImageSize(t.image.src, function (n, i) {
        t.image.width = n, t.image.height = i, e()
      }), g.push(t)
    }, v.prototype.destroy = function () {
      for (var e = this, t = 0, n = g.length; t < n; t++)
        if (g[t].instanceID === e.instanceID) {
          g.splice(t, 1);
          break
        }
      var i = e.$item.getAttribute("data-jarallax-original-styles");
      e.$item.removeAttribute("data-jarallax-original-styles"), "null" === i ? e.$item.removeAttribute("style") : e.$item.setAttribute("style", i), e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax;
      for (var r in e) delete e[r]
    }, v.prototype.getImageSize = function (e, t) {
      if (e && t) {
        var n = new Image;
        n.onload = function () {
          t(n.width, n.height)
        }, n.src = e
      }
    }, v.prototype.clipContainer = function () {
      if (!m) {
        var e = this,
          t = e.image.$container.getBoundingClientRect(),
          n = t.width,
          i = t.height;
        if (!e.$clipStyles) {
          e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "#jarallax-clip-" + e.instanceID);
          (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles)
        }
        var r = ["#jarallax-container-" + e.instanceID + " {", "   clip: rect(0 " + n + "px " + i + "px 0);", "   clip: rect(0, " + n + "px, " + i + "px, 0);", "}"].join("\n");
        e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = r : e.$clipStyles.innerHTML = r
      }
    }, v.prototype.coverImage = function () {
      var e = this;
      if (e.image.width && e.image.height) {
        var t = e.image.$container.getBoundingClientRect(),
          n = t.width,
          i = t.height,
          r = t.left,
          o = e.image.width,
          s = e.image.height,
          l = e.options.speed,
          c = "scroll" === e.options.type || "scroll-opacity" === e.options.type,
          u = 0,
          d = 0,
          f = i,
          h = 0,
          p = 0;
        c && (u = l < 0 ? l * Math.max(i, a) : l * (i + a), l > 1 ? f = Math.abs(u - a) : l < 0 ? f = u / l + Math.abs(u) : f += Math.abs(a - i) * (1 - l), u /= 2), d = f * o / s, d < n && (d = n, f = d * s / o), c ? (h = r + (n - d) / 2, p = (a - f) / 2) : (h = (n - d) / 2, p = (i - f) / 2), "absolute" === e.image.position && (h -= r), e.parallaxScrollDistance = u, e.css(e.image.$item, {
          width: d + "px",
          height: f + "px",
          marginLeft: h + "px",
          marginTop: p + "px"
        }), e.options.onCoverImage && e.options.onCoverImage.call(e)
      }
    }, v.prototype.isVisible = function () {
      return this.isElementInViewport || !1
    }, v.prototype.onScroll = function (e) {
      var t = this;
      if (t.image.width && t.image.height) {
        var n = t.$item.getBoundingClientRect(),
          i = n.top,
          r = n.height,
          s = {
            visibility: "visible",
            backgroundPosition: "50% 50%"
          },
          l = n;
        if (t.options.elementInViewport && (l = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = l.bottom >= 0 && l.right >= 0 && l.top <= a && l.left <= o, e || t.isElementInViewport) {
          var c = Math.max(0, i),
            u = Math.max(0, r + i),
            d = Math.max(0, -i),
            f = Math.max(0, i + r - a),
            h = Math.max(0, r - (i + r - a)),
            p = Math.max(0, -i + a - r),
            m = 1 - 2 * (a - i) / (a + r),
            g = 1;
          if (r < a ? g = 1 - (d || f) / r : u <= a ? g = u / a : h <= a && (g = h / a), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (s.transform = "", s.opacity = g), "scale" === t.options.type || "scale-opacity" === t.options.type) {
            var v = 1;
            t.options.speed < 0 ? v -= t.options.speed * g : v += t.options.speed * (1 - g), s.transform = "scale(" + v + ")"
          }
          if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
            var y = t.parallaxScrollDistance * m;
            "absolute" === t.image.position && (y -= i), s.transform = "translateY(" + y + "px)"
          }
          t.css(t.image.$item, s), t.options.onScroll && t.options.onScroll.call(t, {
            section: n,
            beforeTop: c,
            beforeTopEnd: u,
            afterTop: d,
            beforeBottom: f,
            beforeBottomEnd: h,
            afterBottom: p,
            visiblePercent: g,
            fromViewportCenter: m
          })
        }
      }
    }, i(e, "scroll", r), i(e, "resize", r), i(e, "orientationchange", r), i(e, "load", r);
    var y = function (e) {
      ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
      var t, n = arguments[1],
        i = Array.prototype.slice.call(arguments, 2),
        r = e.length,
        o = 0;
      for (o; o < r; o++)
        if ("object" == typeof n || void 0 === n ? e[o].jarallax || (e[o].jarallax = new v(e[o], n)) : e[o].jarallax && (t = e[o].jarallax[n].apply(e[o].jarallax, i)), void 0 !== t) return t;
      return e
    };
    y.constructor = v;
    var b = e.jarallax;
    if (e.jarallax = y, e.jarallax.noConflict = function () {
        return e.jarallax = b, this
      }, "undefined" != typeof jQuery) {
      var x = function () {
        var t = arguments || [];
        Array.prototype.unshift.call(t, this);
        var n = y.apply(e, t);
        return "object" != typeof n ? n : this
      };
      x.constructor = v;
      var w = jQuery.fn.jarallax;
      jQuery.fn.jarallax = x, jQuery.fn.jarallax.noConflict = function () {
        return jQuery.fn.jarallax = w, this
      }
    }
    i(e, "DOMContentLoaded", function () {
      y(document.querySelectorAll("[data-jarallax], [data-jarallax-video]"))
    })
  }(window),
  function (e) {
    "use strict";

    function t(e) {
      e = e || {};
      for (var t = 1; t < arguments.length; t++)
        if (arguments[t])
          for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
      return e
    }

    function n() {
      this._done = [], this._fail = []
    }

    function i(e, t, n) {
      e.addEventListener ? e.addEventListener(t, n) : e.attachEvent("on" + t, function () {
        n.call(e)
      })
    }
    n.prototype = {
      execute: function (e, t) {
        var n = e.length;
        for (t = Array.prototype.slice.call(t); n--;) e[n].apply(null, t)
      },
      resolve: function () {
        this.execute(this._done, arguments)
      },
      reject: function () {
        this.execute(this._fail, arguments)
      },
      done: function (e) {
        this._done.push(e)
      },
      fail: function (e) {
        this._fail.push(e)
      }
    };
    var r = function () {
      function e(e, i) {
        var r = this;
        r.url = e, r.options_default = {
          autoplay: 1,
          loop: 1,
          mute: 1,
          controls: 0,
          startTime: 0,
          endTime: 0
        }, r.options = t({}, r.options_default, i), r.videoID = r.parseURL(e), r.videoID && (r.ID = n++, r.loadAPI(), r.init())
      }
      var n = 0;
      return e
    }();
    r.prototype.parseURL = function (e) {
      var t = function (e) {
          var t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/);
          return !(!t || 11 !== t[1].length) && t[1]
        }(e),
        n = function (e) {
          var t = e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/);
          return !(!t || !t[3]) && t[3]
        }(e),
        i = function (e) {
          for (var t = e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/), n = {}, i = 0, r = 0; r < t.length; r++) {
            var o = t[r].match(/^(mp4|webm|ogv|ogg)\:(.*)/);
            o && o[1] && o[2] && (n["ogv" === o[1] ? "ogg" : o[1]] = o[2], i = 1)
          }
          return !!i && n
        }(e);
      return t ? (this.type = "youtube", t) : n ? (this.type = "vimeo", n) : !!i && (this.type = "local", i)
    }, r.prototype.isValid = function () {
      return !!this.videoID
    }, r.prototype.on = function (e, t) {
      this.userEventsList = this.userEventsList || [], (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t)
    }, r.prototype.off = function (e, t) {
      if (this.userEventsList && this.userEventsList[e])
        if (t)
          for (var n = 0; n < this.userEventsList[e].length; n++) this.userEventsList[e][n] === t && (this.userEventsList[e][n] = !1);
        else delete this.userEventsList[e]
    }, r.prototype.fire = function (e) {
      var t = [].slice.call(arguments, 1);
      if (this.userEventsList && void 0 !== this.userEventsList[e])
        for (var n in this.userEventsList[e]) this.userEventsList[e][n] && this.userEventsList[e][n].apply(this, t)
    }, r.prototype.play = function (e) {
      var t = this;
      t.player && ("youtube" === t.type && t.player.playVideo && (void 0 !== e && t.player.seekTo(e || 0), t.player.playVideo()), "vimeo" === t.type && (void 0 !== e && t.player.setCurrentTime(e), t.player.getPaused().then(function (e) {
        e && t.player.play()
      })), "local" === t.type && (void 0 !== e && (t.player.currentTime = e), t.player.play()))
    }, r.prototype.pause = function () {
      this.player && ("youtube" === this.type && this.player.pauseVideo && this.player.pauseVideo(), "vimeo" === this.type && this.player.pause(), "local" === this.type && this.player.pause())
    }, r.prototype.getImageURL = function (e) {
      var t = this;
      if (t.videoImage) return void e(t.videoImage);
      if ("youtube" === t.type) {
        var n = ["maxresdefault", "sddefault", "hqdefault", "0"],
          i = 0,
          r = new Image;
        r.onload = function () {
          120 !== (this.naturalWidth || this.width) || i === n.length - 1 ? (t.videoImage = "https://img.youtube.com/vi/" + t.videoID + "/" + n[i] + ".jpg", e(t.videoImage)) : (i++, this.src = "https://img.youtube.com/vi/" + t.videoID + "/" + n[i] + ".jpg")
        }, r.src = "https://img.youtube.com/vi/" + t.videoID + "/" + n[i] + ".jpg"
      }
      if ("vimeo" === t.type) {
        var o = new XMLHttpRequest;
        o.open("GET", "https://vimeo.com/api/v2/video/" + t.videoID + ".json", !0), o.onreadystatechange = function () {
          if (4 === this.readyState && this.status >= 200 && this.status < 400) {
            var n = JSON.parse(this.responseText);
            t.videoImage = n[0].thumbnail_large, e(t.videoImage)
          }
        }, o.send(), o = null
      }
    }, r.prototype.getIframe = function (t) {
      var n = this;
      if (n.$iframe) return void t(n.$iframe);
      n.onAPIready(function () {
        var r;
        if (n.$iframe || (r = document.createElement("div"), r.style.display = "none"), "youtube" === n.type) {
          n.playerOptions = {}, n.playerOptions.videoId = n.videoID, n.playerOptions.playerVars = {
            autohide: 1,
            rel: 0,
            autoplay: 0
          }, n.options.controls || (n.playerOptions.playerVars.iv_load_policy = 3, n.playerOptions.playerVars.modestbranding = 1, n.playerOptions.playerVars.controls = 0, n.playerOptions.playerVars.showinfo = 0, n.playerOptions.playerVars.disablekb = 1);
          var o, a;
          n.playerOptions.events = {
            onReady: function (e) {
              n.options.mute && e.target.mute(), n.options.autoplay && n.play(n.options.startTime), n.fire("ready", e)
            },
            onStateChange: function (e) {
              n.options.loop && e.data === YT.PlayerState.ENDED && n.play(n.options.startTime), o || e.data !== YT.PlayerState.PLAYING || (o = 1, n.fire("started", e)), e.data === YT.PlayerState.PLAYING && n.fire("play", e), e.data === YT.PlayerState.PAUSED && n.fire("pause", e), e.data === YT.PlayerState.ENDED && n.fire("end", e), n.options.endTime && (e.data === YT.PlayerState.PLAYING ? a = setInterval(function () {
                n.options.endTime && n.player.getCurrentTime() >= n.options.endTime && (n.options.loop ? n.play(n.options.startTime) : n.pause())
              }, 150) : clearInterval(a))
            }
          };
          var s = !n.$iframe;
          if (s) {
            var l = document.createElement("div");
            l.setAttribute("id", n.playerID), r.appendChild(l), document.body.appendChild(r)
          }
          n.player = n.player || new e.YT.Player(n.playerID, n.playerOptions), s && (n.$iframe = document.getElementById(n.playerID), n.videoWidth = parseInt(n.$iframe.getAttribute("width"), 10) || 1280, n.videoHeight = parseInt(n.$iframe.getAttribute("height"), 10) || 720)
        }
        if ("vimeo" === n.type) {
          n.playerOptions = "", n.playerOptions += "player_id=" + n.playerID, n.playerOptions += "&autopause=0", n.options.controls || (n.playerOptions += "&badge=0&byline=0&portrait=0&title=0"), n.playerOptions += "&autoplay=" + (n.options.autoplay ? "1" : "0"), n.playerOptions += "&loop=" + (n.options.loop ? 1 : 0), n.$iframe || (n.$iframe = document.createElement("iframe"), n.$iframe.setAttribute("id", n.playerID), n.$iframe.setAttribute("src", "https://player.vimeo.com/video/" + n.videoID + "?" + n.playerOptions), n.$iframe.setAttribute("frameborder", "0"), r.appendChild(n.$iframe), document.body.appendChild(r)), n.player = n.player || new Vimeo.Player(n.$iframe), n.player.getVideoWidth().then(function (e) {
            n.videoWidth = e || 1280
          }), n.player.getVideoHeight().then(function (e) {
            n.videoHeight = e || 720
          }), n.player.setVolume(n.options.mute ? 0 : 100);
          var c;
          n.player.on("timeupdate", function (e) {
            c || n.fire("started", e), c = 1, n.options.endTime && n.options.endTime && e.seconds >= n.options.endTime && (n.options.loop ? n.play(n.options.startTime) : n.pause())
          }), n.player.on("play", function (e) {
            n.fire("play", e), n.options.startTime && 0 === e.seconds && n.play(n.options.startTime)
          }), n.player.on("pause", function (e) {
            n.fire("pause", e)
          }), n.player.on("ended", function (e) {
            n.fire("end", e)
          }), n.player.on("loaded", function (e) {
            n.fire("ready", e)
          })
        }
        if ("local" === n.type) {
          if (!n.$iframe) {
            n.$iframe = document.createElement("video"), n.options.mute && (n.$iframe.muted = !0), n.options.loop && (n.$iframe.loop = !0), n.$iframe.setAttribute("id", n.playerID), r.appendChild(n.$iframe), document.body.appendChild(r);
            for (var u in n.videoID) ! function (e, t, n) {
              var i = document.createElement("source");
              i.src = t, i.type = n, e.appendChild(i)
            }(n.$iframe, n.videoID[u], "video/" + u)
          }
          n.player = n.player || n.$iframe;
          var d;
          i(n.player, "playing", function (e) {
            d || n.fire("started", e), d = 1
          }), i(n.player, "timeupdate", function () {
            n.options.endTime && n.options.endTime && this.currentTime >= n.options.endTime && (n.options.loop ? n.play(n.options.startTime) : n.pause())
          }), i(n.player, "play", function (e) {
            n.fire("play", e)
          }), i(n.player, "pause", function (e) {
            n.fire("pause", e)
          }), i(n.player, "ended", function (e) {
            n.fire("end", e)
          }), i(n.player, "loadedmetadata", function () {
            n.videoWidth = this.videoWidth || 1280, n.videoHeight = this.videoHeight || 720, n.fire("ready"), n.options.autoplay && n.play(n.options.startTime)
          })
        }
        t(n.$iframe)
      })
    }, r.prototype.init = function () {
      var e = this;
      e.playerID = "VideoWorker-" + e.ID
    };
    var o = 0,
      a = 0;
    r.prototype.loadAPI = function () {
      var t = this;
      if (!o || !a) {
        var n = "";
        if ("youtube" !== t.type || o || (o = 1, n = "//www.youtube.com/iframe_api"), "vimeo" !== t.type || a || (a = 1, n = "//player.vimeo.com/api/player.js"), n) {
          "file://" === e.location.origin && (n = "http:" + n);
          var i = document.createElement("script"),
            r = document.getElementsByTagName("head")[0];
          i.src = n, r.appendChild(i), r = null, i = null
        }
      }
    };
    var s = 0,
      l = 0,
      c = new n,
      u = new n;
    r.prototype.onAPIready = function (t) {
      var n = this;
      if ("youtube" === n.type && ("undefined" != typeof YT && 0 !== YT.loaded || s ? "object" == typeof YT && 1 === YT.loaded ? t() : c.done(function () {
          t()
        }) : (s = 1, e.onYouTubeIframeAPIReady = function () {
          e.onYouTubeIframeAPIReady = null, c.resolve("done"), t()
        })), "vimeo" === n.type)
        if ("undefined" != typeof Vimeo || l) "undefined" != typeof Vimeo ? t() : u.done(function () {
          t()
        });
        else {
          l = 1;
          var i = setInterval(function () {
            "undefined" != typeof Vimeo && (clearInterval(i), u.resolve("done"), t())
          }, 20)
        }
      "local" === n.type && t()
    }, e.VideoWorker = r
  }(window),
  function () {
    "use strict";
    if ("undefined" != typeof jarallax) {
      var e = jarallax.constructor,
        t = e.prototype.init;
      e.prototype.init = function () {
        var e = this;
        t.apply(e), e.video && e.video.getIframe(function (t) {
          var n = t.parentNode;
          e.css(t, {
            position: e.image.position,
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            width: "100%",
            height: "100%",
            maxWidth: "none",
            maxHeight: "none",
            visibility: "hidden",
            margin: 0,
            zIndex: -1
          }), e.$video = t, e.image.$container.appendChild(t), n.parentNode.removeChild(n)
        })
      };
      var n = e.prototype.coverImage;
      e.prototype.coverImage = function () {
        var e = this;
        n.apply(e), e.video && "IFRAME" === e.image.$item.nodeName && e.css(e.image.$item, {
          height: e.image.$item.getBoundingClientRect().height + 400 + "px",
          marginTop: -200 + parseFloat(e.css(e.image.$item, "margin-top")) + "px"
        })
      };
      var i = e.prototype.initImg;
      e.prototype.initImg = function () {
        var e = this,
          t = i.apply(e);
        if (e.options.videoSrc || (e.options.videoSrc = e.$item.getAttribute("data-jarallax-video") || !1), e.options.videoSrc) {
          var n = new VideoWorker(e.options.videoSrc, {
            startTime: e.options.videoStartTime || 0,
            endTime: e.options.videoEndTime || 0
          });
          if (n.isValid() && (e.image.useImgTag = !0, n.on("ready", function () {
              var t = e.onScroll;
              e.onScroll = function () {
                t.apply(e), e.isVisible() ? n.play() : n.pause()
              }
            }), n.on("started", function () {
              e.image.$default_item = e.image.$item, e.image.$item = e.$video, e.image.width = e.options.imgWidth = e.video.videoWidth || 1280, e.image.height = e.options.imgHeight = e.video.videoHeight || 720, e.coverImage(), e.clipContainer(), e.onScroll(), e.image.$default_item && (e.image.$default_item.style.display = "none")
            }), e.video = n, "local" !== n.type && n.getImageURL(function (t) {
              e.image.src = t, e.init()
            })), "local" !== n.type) return !1;
          if (!t) return e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", !0
        }
        return t
      };
      var r = e.prototype.destroy;
      e.prototype.destroy = function () {
        var e = this;
        r.apply(e)
      }
    }
  }(), $.fn.mdb_autocomplete = function (e) {
    var t = {
      data: {}
    };
    return e = $.extend(t, e), this.each(function () {
      var t = $(this),
        n = e.data;
      if (Object.keys(n).length) {
        $('<ul class="mdb-autocomplete-wrap"></ul>').insertAfter($(this));
        var i = $(this).parent().find(".mdb-autocomplete-wrap")
      }
      t.on("keyup", function (e) {
        var r = t.val();
        if (i.empty(), r.length)
          for (var o in n)
            if (n[o].toLowerCase().indexOf(r.toLowerCase()) !== -1) {
              var a = $("<li>" + n[o] + "</li>");
              i.append(a)
            }
        13 == e.which && (i.children(":first").trigger("click"), i.empty()), 0 == r.length ? $(this).parent().find(".mdb-autocomplete-clear").css("visibility", "hidden") : $(this).parent().find(".mdb-autocomplete-clear").css("visibility", "visible")
      }), i.on("click", "li", function () {
        t.val($(this).text()), i.empty()
      }), $(".mdb-autocomplete-clear").on("click", function (e) {
        e.preventDefault(), $(this).parent().find("input").val(""), $(this).css("visibility", "hidden"), $(this).parent().find(".mdb-autocomplete-wrap").empty(), $(this).parent().find("label").removeClass("active")
      })
    })
  }, $("body").on("shown.bs.modal", ".modal", function () {
    $(".modal-backdrop").length || ($modal_dialog = $(this).children(".modal-dialog"), $modal_dialog.hasClass("modal-side") && ($(this).addClass("modal-scrolling"), $("body").addClass("scrollable")), $modal_dialog.hasClass("modal-frame") && ($(this).addClass("modal-content-clickable"), $("body").addClass("scrollable")))
  }), $("body").on("hidden.bs.modal", ".modal", function () {
    $("body").removeClass("scrollable")
  });
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
  Prism = function () {
    var e = /\blang(?:uage)?-(\w+)\b/i,
      t = 0,
      n = _self.Prism = {
        util: {
          encode: function (e) {
            return e instanceof i ? new i(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
          },
          type: function (e) {
            return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
          },
          objId: function (e) {
            return e.__id || Object.defineProperty(e, "__id", {
              value: ++t
            }), e.__id
          },
          clone: function (e) {
            switch (n.util.type(e)) {
              case "Object":
                var t = {};
                for (var i in e) e.hasOwnProperty(i) && (t[i] = n.util.clone(e[i]));
                return t;
              case "Array":
                return e.map && e.map(function (e) {
                  return n.util.clone(e)
                })
            }
            return e
          }
        },
        languages: {
          extend: function (e, t) {
            var i = n.util.clone(n.languages[e]);
            for (var r in t) i[r] = t[r];
            return i
          },
          insertBefore: function (e, t, i, r) {
            r = r || n.languages;
            var o = r[e];
            if (2 == arguments.length) {
              i = arguments[1];
              for (var a in i) i.hasOwnProperty(a) && (o[a] = i[a]);
              return o
            }
            var s = {};
            for (var l in o)
              if (o.hasOwnProperty(l)) {
                if (l == t)
                  for (var a in i) i.hasOwnProperty(a) && (s[a] = i[a]);
                s[l] = o[l]
              }
            return n.languages.DFS(n.languages, function (t, n) {
              n === r[e] && t != e && (this[t] = s)
            }), r[e] = s
          },
          DFS: function (e, t, i, r) {
            r = r || {};
            for (var o in e) e.hasOwnProperty(o) && (t.call(e, o, e[o], i || o), "Object" !== n.util.type(e[o]) || r[n.util.objId(e[o])] ? "Array" !== n.util.type(e[o]) || r[n.util.objId(e[o])] || (r[n.util.objId(e[o])] = !0, n.languages.DFS(e[o], t, o, r)) : (r[n.util.objId(e[o])] = !0, n.languages.DFS(e[o], t, null, r)))
          }
        },
        plugins: {},
        highlightAll: function (e, t) {
          var i = {
            callback: t,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          n.hooks.run("before-highlightall", i);
          for (var r, o = i.elements || document.querySelectorAll(i.selector), a = 0; r = o[a++];) n.highlightElement(r, e === !0, i.callback)
        },
        highlightElement: function (t, i, r) {
          for (var o, a, s = t; s && !e.test(s.className);) s = s.parentNode;
          s && (o = (s.className.match(e) || [, ""])[1], a = n.languages[o]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o, s = t.parentNode, /pre/i.test(s.nodeName) && (s.className = s.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o);
          var l = t.textContent,
            c = {
              element: t,
              language: o,
              grammar: a,
              code: l
            };
          if (!l || !a) return void n.hooks.run("complete", c);
          if (n.hooks.run("before-highlight", c), i && _self.Worker) {
            var u = new Worker(n.filename);
            u.onmessage = function (e) {
              c.highlightedCode = e.data, n.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, r && r.call(c.element), n.hooks.run("after-highlight", c), n.hooks.run("complete", c)
            }, u.postMessage(JSON.stringify({
              language: c.language,
              code: c.code,
              immediateClose: !0
            }))
          } else c.highlightedCode = n.highlight(c.code, c.grammar, c.language), n.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, r && r.call(t), n.hooks.run("after-highlight", c), n.hooks.run("complete", c)
        },
        highlight: function (e, t, r) {
          var o = n.tokenize(e, t);
          return i.stringify(n.util.encode(o), r)
        },
        tokenize: function (e, t) {
          var i = n.Token,
            r = [e],
            o = t.rest;
          if (o) {
            for (var a in o) t[a] = o[a];
            delete t.rest
          }
          e: for (var a in t)
            if (t.hasOwnProperty(a) && t[a]) {
              var s = t[a];
              s = "Array" === n.util.type(s) ? s : [s];
              for (var l = 0; l < s.length; ++l) {
                var c = s[l],
                  u = c.inside,
                  d = !!c.lookbehind,
                  f = !!c.greedy,
                  h = 0,
                  p = c.alias;
                c = c.pattern || c;
                for (var m = 0; m < r.length; m++) {
                  var g = r[m];
                  if (r.length > e.length) break e;
                  if (!(g instanceof i)) {
                    c.lastIndex = 0;
                    var v = c.exec(g),
                      y = 1;
                    if (!v && f && m != r.length - 1) {
                      var b = r[m + 1].matchedStr || r[m + 1],
                        x = g + b;
                      if (m < r.length - 2 && (x += r[m + 2].matchedStr || r[m + 2]), c.lastIndex = 0, !(v = c.exec(x))) continue;
                      var w = v.index + (d ? v[1].length : 0);
                      if (w >= g.length) continue;
                      var C = v.index + v[0].length,
                        T = g.length + b.length;
                      if (y = 3, T >= C) {
                        if (r[m + 1].greedy) continue;
                        y = 2, x = x.slice(0, T)
                      }
                      g = x
                    }
                    if (v) {
                      d && (h = v[1].length);
                      var w = v.index + h,
                        v = v[0].slice(h),
                        C = w + v.length,
                        k = g.slice(0, w),
                        _ = g.slice(C),
                        S = [m, y];
                      k && S.push(k);
                      var E = new i(a, u ? n.tokenize(v, u) : v, p, v, f);
                      S.push(E), _ && S.push(_), Array.prototype.splice.apply(r, S)
                    }
                  }
                }
              }
            }
          return r
        },
        hooks: {
          all: {},
          add: function (e, t) {
            var i = n.hooks.all;
            i[e] = i[e] || [], i[e].push(t)
          },
          run: function (e, t) {
            var i = n.hooks.all[e];
            if (i && i.length)
              for (var r, o = 0; r = i[o++];) r(t)
          }
        }
      },
      i = n.Token = function (e, t, n, i, r) {
        this.type = e, this.content = t, this.alias = n, this.matchedStr = i || null, this.greedy = !!r
      };
    if (i.stringify = function (e, t, r) {
        if ("string" == typeof e) return e;
        if ("Array" === n.util.type(e)) return e.map(function (n) {
          return i.stringify(n, t, e)
        }).join("");
        var o = {
          type: e.type,
          content: i.stringify(e.content, t, r),
          tag: "span",
          classes: ["token", e.type],
          attributes: {},
          language: t,
          parent: r
        };
        if ("comment" == o.type && (o.attributes.spellcheck = "true"), e.alias) {
          var a = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];
          Array.prototype.push.apply(o.classes, a)
        }
        n.hooks.run("wrap", o);
        var s = "";
        for (var l in o.attributes) s += (s ? " " : "") + l + '="' + (o.attributes[l] || "") + '"';
        return "<" + o.tag + ' class="' + o.classes.join(" ") + '" ' + s + ">" + o.content + "</" + o.tag + ">"
      }, !_self.document) return _self.addEventListener ? (_self.addEventListener("message", function (e) {
      var t = JSON.parse(e.data),
        i = t.language,
        r = t.code,
        o = t.immediateClose;
      _self.postMessage(n.highlight(r, n.languages[i], i)), o && _self.close()
    }, !1), _self.Prism) : _self.Prism;
    var r = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
    return r && (n.filename = r.src, document.addEventListener && !r.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", n.highlightAll)), _self.Prism
  }();
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
    comment: /<!--[\w\W]*?-->/,
    prolog: /<\?[\w\W]+?\?>/,
    doctype: /<!DOCTYPE[\w\W]+?>/,
    cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/i,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "attr-value": {
          pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
          inside: {
            punctuation: /[=>"']/
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: /&#?[\da-z]{1,8};/i
  }, Prism.hooks.add("wrap", function (e) {
    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
  }), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.css = {
    comment: /\/\*[\w\W]*?\*\//,
    atrule: {
      pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
      inside: {
        rule: /@[\w-]+/
      }
    },
    url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
    string: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
    property: /(\b|\B)[\w-]+(?=\s*:)/i,
    important: /\B!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:]/
  }, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
      pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
      lookbehind: !0,
      inside: Prism.languages.css,
      alias: "language-css"
    }
  }), Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
      pattern: /\s*style=("|').*?\1/i,
      inside: {
        "attr-name": {
          pattern: /^\s*style/i,
          inside: Prism.languages.markup.tag.inside
        },
        punctuation: /^\s*=\s*['"]|['"]\s*$/,
        "attr-value": {
          pattern: /.+/i,
          inside: Prism.languages.css
        }
      },
      alias: "language-css"
    }
  }, Prism.languages.markup.tag)), Prism.languages.clike = {
    comment: [{
      pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
      lookbehind: !0
    }, {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: !0
    }],
    string: {
      pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /(\.|\\)/
      }
    },
    keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(true|false)\b/,
    function: /[a-z0-9_]+(?=\()/i,
    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
  }, Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
    function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
  }), Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
      lookbehind: !0,
      greedy: !0
    }
  }), Prism.languages.insertBefore("javascript", "class-name", {
    "template-string": {
      pattern: /`(?:\\\\|\\?[^\\])*?`/,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /\$\{[^}]+\}/,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: Prism.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    }
  }), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
      pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
      lookbehind: !0,
      inside: Prism.languages.javascript,
      alias: "language-javascript"
    }
  }), Prism.languages.js = Prism.languages.javascript,
  function () {
    self.Prism && Prism.hooks.add("after-highlight", function (e) {
      var t = e.element.parentNode;
      if (t && /pre/i.test(t.nodeName) && -1 !== t.className.indexOf("code-toolbar")) {
        var n = document.createElement("div");
        if (n.setAttribute("class", "toolbar"), window.ZeroClipboard) {
          var i = document.createElement("a");
          i.innerHTML = "Copy";
          var r = new ZeroClipboard(i);
          r.on("ready", function (e) {
            r.on("copy", function (e) {
              var t = e.target.parentNode.parentNode.getElementsByTagName("code")[0];
              e.clipboardData.setData("text/plain", t.textContent || t.innerText)
            }), r.on("aftercopy", function (e) {
              e.target.parentNode.parentNode.getElementsByTagName("code")[0].focus()
            })
          }), n.appendChild(i)
        }
        t.appendChild(n)
      }
    })
  }(),
  function (e, t) {
    "use strict";
    var n, i, r, o = e,
      a = o.document,
      s = o.navigator,
      l = o.setTimeout,
      c = o.clearTimeout,
      u = o.setInterval,
      d = o.clearInterval,
      f = o.getComputedStyle,
      h = o.encodeURIComponent,
      p = o.ActiveXObject,
      m = o.Error,
      g = o.Number.parseInt || o.parseInt,
      v = o.Number.parseFloat || o.parseFloat,
      y = o.Number.isNaN || o.isNaN,
      b = o.Date.now,
      x = o.Object.keys,
      w = o.Object.defineProperty,
      C = o.Object.prototype.hasOwnProperty,
      T = o.Array.prototype.slice,
      k = function () {
        var e = function (e) {
          return e
        };
        if ("function" == typeof o.wrap && "function" == typeof o.unwrap) try {
          var t = a.createElement("div"),
            n = o.unwrap(t);
          1 === t.nodeType && n && 1 === n.nodeType && (e = o.unwrap)
        } catch (e) {}
        return e
      }(),
      _ = function (e) {
        return T.call(e, 0)
      },
      S = function () {
        var e, n, i, r, o, a = _(arguments),
          s = a[0] || {};
        for (e = 1, n = a.length; n > e; e++)
          if (null != (i = a[e]))
            for (r in i) C.call(i, r) && (s[r], o = i[r], s !== o && o !== t && (s[r] = o));
        return s
      },
      E = function (e) {
        var t, n, i, r;
        if ("object" != typeof e || null == e || "number" == typeof e.nodeType) t = e;
        else if ("number" == typeof e.length)
          for (t = [], n = 0, i = e.length; i > n; n++) C.call(e, n) && (t[n] = E(e[n]));
        else {
          t = {};
          for (r in e) C.call(e, r) && (t[r] = E(e[r]))
        }
        return t
      },
      A = function (e, t) {
        for (var n = {}, i = 0, r = t.length; r > i; i++) t[i] in e && (n[t[i]] = e[t[i]]);
        return n
      },
      I = function (e, t) {
        var n = {};
        for (var i in e) - 1 === t.indexOf(i) && (n[i] = e[i]);
        return n
      },
      D = function (e) {
        if (e)
          for (var t in e) C.call(e, t) && delete e[t];
        return e
      },
      O = function (e, t) {
        if (e && 1 === e.nodeType && e.ownerDocument && t && (1 === t.nodeType && t.ownerDocument && t.ownerDocument === e.ownerDocument || 9 === t.nodeType && !t.ownerDocument && t === e.ownerDocument))
          do {
            if (e === t) return !0;
            e = e.parentNode
          } while (e);
        return !1
      },
      P = function (e) {
        var t;
        return "string" == typeof e && e && (t = e.split("#")[0].split("?")[0], t = e.slice(0, e.lastIndexOf("/") + 1)), t
      },
      M = function (e) {
        var t, n;
        return "string" == typeof e && e && (n = e.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/), n && n[1] ? t = n[1] : (n = e.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/)) && n[1] && (t = n[1])), t
      },
      L = function () {
        var e, t;
        try {
          throw new m
        } catch (e) {
          t = e
        }
        return t && (e = t.sourceURL || t.fileName || M(t.stack)), e
      },
      N = function () {
        var e, n, i;
        if (a.currentScript && (e = a.currentScript.src)) return e;
        if (n = a.getElementsByTagName("script"), 1 === n.length) return n[0].src || t;
        if ("readyState" in n[0])
          for (i = n.length; i--;)
            if ("interactive" === n[i].readyState && (e = n[i].src)) return e;
        return "loading" === a.readyState && (e = n[n.length - 1].src) ? e : (e = L()) ? e : t
      },
      F = function () {
        var e, n, i, r = a.getElementsByTagName("script");
        for (e = r.length; e--;) {
          if (!(i = r[e].src)) {
            n = null;
            break
          }
          if (i = P(i), null == n) n = i;
          else if (n !== i) {
            n = null;
            break
          }
        }
        return n || t
      },
      R = function () {
        var e = /win(dows|[\s]?(nt|me|ce|xp|vista|[\d]+))/i;
        return !!s && (e.test(s.appVersion || "") || e.test(s.platform || "") || -1 !== (s.userAgent || "").indexOf("Windows"))
      },
      W = function () {
        return null == e.opener && (!!e.top && e != e.top || !!e.parent && e != e.parent)
      }(),
      H = {
        bridge: null,
        version: "0.0.0",
        pluginType: "unknown",
        disabled: null,
        outdated: null,
        sandboxed: null,
        unavailable: null,
        degraded: null,
        deactivated: null,
        overdue: null,
        ready: null
      },
      V = "11.0.0",
      j = {},
      B = {},
      z = null,
      q = 0,
      $ = 0,
      Y = {
        ready: "Flash communication is established",
        error: {
          "flash-disabled": "Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.",
          "flash-outdated": "Flash is too outdated to support ZeroClipboard",
          "flash-sandboxed": "Attempting to run Flash in a sandboxed iframe, which is impossible",
          "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
          "flash-degraded": "Flash is unable to preserve data fidelity when communicating with JavaScript",
          "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.",
          "flash-overdue": "Flash communication was established but NOT within the acceptable time limit",
          "version-mismatch": "ZeroClipboard JS version number does not match ZeroClipboard SWF version number",
          "clipboard-error": "At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard",
          "config-mismatch": "ZeroClipboard configuration does not match Flash's reality",
          "swf-not-found": "The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity"
        }
      },
      U = ["flash-unavailable", "flash-degraded", "flash-overdue", "version-mismatch", "config-mismatch", "clipboard-error"],
      X = ["flash-disabled", "flash-outdated", "flash-sandboxed", "flash-unavailable", "flash-degraded", "flash-deactivated", "flash-overdue"],
      G = new RegExp("^flash-(" + X.map(function (e) {
        return e.replace(/^flash-/, "")
      }).join("|") + ")$"),
      Q = new RegExp("^flash-(" + X.slice(1).map(function (e) {
        return e.replace(/^flash-/, "")
      }).join("|") + ")$"),
      K = {
        swfPath: function () {
          return (P(N()) || F() || "") + "ZeroClipboard.swf"
        }(),
        trustedDomains: e.location.host ? [e.location.host] : [],
        cacheBust: !0,
        forceEnhancedClipboard: !1,
        flashLoadTimeout: 3e4,
        autoActivate: !0,
        bubbleEvents: !0,
        fixLineEndings: !0,
        containerId: "global-zeroclipboard-html-bridge",
        containerClass: "global-zeroclipboard-container",
        swfObjectId: "global-zeroclipboard-flash-bridge",
        hoverClass: "zeroclipboard-is-hover",
        activeClass: "zeroclipboard-is-active",
        forceHandCursor: !1,
        title: null,
        zIndex: 999999999
      },
      Z = function (e) {
        if ("object" == typeof e && null !== e)
          for (var t in e)
            if (C.call(e, t))
              if (/^(?:forceHandCursor|title|zIndex|bubbleEvents|fixLineEndings)$/.test(t)) K[t] = e[t];
              else if (null == H.bridge)
          if ("containerId" === t || "swfObjectId" === t) {
            if (!he(e[t])) throw new Error("The specified `" + t + "` value is not valid as an HTML4 Element ID");
            K[t] = e[t]
          } else K[t] = e[t];
        return "string" == typeof e && e ? C.call(K, e) ? K[e] : void 0 : E(K)
      },
      J = function () {
        return Ye(), {
          browser: A(s, ["userAgent", "platform", "appName", "appVersion"]),
          flash: I(H, ["bridge"]),
          zeroclipboard: {
            version: Xe.version,
            config: Xe.config()
          }
        }
      },
      ee = function () {
        return !!(H.disabled || H.outdated || H.sandboxed || H.unavailable || H.degraded || H.deactivated)
      },
      te = function (e, i) {
        var r, o, a, s = {};
        if ("string" == typeof e && e) a = e.toLowerCase().split(/\s+/);
        else if ("object" == typeof e && e && void 0 === i)
          for (r in e) C.call(e, r) && "string" == typeof r && r && "function" == typeof e[r] && Xe.on(r, e[r]);
        if (a && a.length) {
          for (r = 0, o = a.length; o > r; r++) e = a[r].replace(/^on/, ""), s[e] = !0, j[e] || (j[e] = []), j[e].push(i);
          if (s.ready && H.ready && Xe.emit({
              type: "ready"
            }), s.error) {
            for (r = 0, o = X.length; o > r; r++)
              if (H[X[r].replace(/^flash-/, "")] === !0) {
                Xe.emit({
                  type: "error",
                  name: X[r]
                });
                break
              }
            n !== t && Xe.version !== n && Xe.emit({
              type: "error",
              name: "version-mismatch",
              jsVersion: Xe.version,
              swfVersion: n
            })
          }
        }
        return Xe
      },
      ne = function (e, t) {
        var n, i, r, o, a;
        if (0 === arguments.length) o = x(j);
        else if ("string" == typeof e && e) o = e.split(/\s+/);
        else if ("object" == typeof e && e && void 0 === t)
          for (n in e) C.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && Xe.off(n, e[n]);
        if (o && o.length)
          for (n = 0, i = o.length; i > n; n++)
            if (e = o[n].toLowerCase().replace(/^on/, ""), (a = j[e]) && a.length)
              if (t)
                for (r = a.indexOf(t); - 1 !== r;) a.splice(r, 1), r = a.indexOf(t, r);
              else a.length = 0;
        return Xe
      },
      ie = function (e) {
        return "string" == typeof e && e ? E(j[e]) || null : E(j)
      },
      re = function (e) {
        var t, n, i;
        return e = pe(e), e && !we(e) ? "ready" === e.type && H.overdue === !0 ? Xe.emit({
          type: "error",
          name: "flash-overdue"
        }) : (t = S({}, e), be.call(this, t), "copy" === e.type && (i = Ie(B), n = i.data, z = i.formatMap), n) : void 0
      },
      oe = function () {
        var e = H.sandboxed;
        if (Ye(), "boolean" != typeof H.ready && (H.ready = !1), H.sandboxed !== e && H.sandboxed === !0) H.ready = !1, Xe.emit({
          type: "error",
          name: "flash-sandboxed"
        });
        else if (!Xe.isFlashUnusable() && null === H.bridge) {
          var t = K.flashLoadTimeout;
          "number" == typeof t && t >= 0 && (q = l(function () {
            "boolean" != typeof H.deactivated && (H.deactivated = !0), H.deactivated === !0 && Xe.emit({
              type: "error",
              name: "flash-deactivated"
            })
          }, t)), H.overdue = !1, Ee()
        }
      },
      ae = function () {
        Xe.clearData(), Xe.blur(), Xe.emit("destroy"), Ae(), Xe.off()
      },
      se = function (e, t) {
        var n;
        if ("object" == typeof e && e && void 0 === t) n = e, Xe.clearData();
        else {
          if ("string" != typeof e || !e) return;
          n = {}, n[e] = t
        }
        for (var i in n) "string" == typeof i && i && C.call(n, i) && "string" == typeof n[i] && n[i] && (B[i] = $e(n[i]))
      },
      le = function (e) {
        void 0 === e ? (D(B), z = null) : "string" == typeof e && C.call(B, e) && delete B[e]
      },
      ce = function (e) {
        return void 0 === e ? E(B) : "string" == typeof e && C.call(B, e) ? B[e] : void 0
      },
      ue = function (e) {
        if (e && 1 === e.nodeType) {
          i && (Re(i, K.activeClass), i !== e && Re(i, K.hoverClass)), i = e, Fe(e, K.hoverClass);
          var t = e.getAttribute("title") || K.title;
          if ("string" == typeof t && t) {
            var n = Se(H.bridge);
            n && n.setAttribute("title", t)
          }
          ze(K.forceHandCursor === !0 || "pointer" === We(e, "cursor")), Be()
        }
      },
      de = function () {
        var e = Se(H.bridge);
        e && (e.removeAttribute("title"), e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.height = "1px"), i && (Re(i, K.hoverClass), Re(i, K.activeClass), i = null)
      },
      fe = function () {
        return i || null
      },
      he = function (e) {
        return "string" == typeof e && e && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(e)
      },
      pe = function (e) {
        var t;
        if ("string" == typeof e && e ? (t = e, e = {}) : "object" == typeof e && e && "string" == typeof e.type && e.type && (t = e.type), t) {
          t = t.toLowerCase(), !e.target && (/^(copy|aftercopy|_click)$/.test(t) || "error" === t && "clipboard-error" === e.name) && (e.target = r), S(e, {
            type: t,
            target: e.target || i || null,
            relatedTarget: e.relatedTarget || null,
            currentTarget: H && H.bridge || null,
            timeStamp: e.timeStamp || b() || null
          });
          var n = Y[e.type];
          return "error" === e.type && e.name && n && (n = n[e.name]), n && (e.message = n), "ready" === e.type && S(e, {
            target: null,
            version: H.version
          }), "error" === e.type && (G.test(e.name) && S(e, {
            target: null,
            minimumVersion: V
          }), Q.test(e.name) && S(e, {
            version: H.version
          })), "copy" === e.type && (e.clipboardData = {
            setData: Xe.setData,
            clearData: Xe.clearData
          }), "aftercopy" === e.type && (e = De(e, z)), e.target && !e.relatedTarget && (e.relatedTarget = me(e.target)), ge(e)
        }
      },
      me = function (e) {
        var t = e && e.getAttribute && e.getAttribute("data-clipboard-target");
        return t ? a.getElementById(t) : null
      },
      ge = function (e) {
        if (e && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)) {
          var n = e.target,
            i = "_mouseover" === e.type && e.relatedTarget ? e.relatedTarget : t,
            r = "_mouseout" === e.type && e.relatedTarget ? e.relatedTarget : t,
            s = He(n),
            l = o.screenLeft || o.screenX || 0,
            c = o.screenTop || o.screenY || 0,
            u = a.body.scrollLeft + a.documentElement.scrollLeft,
            d = a.body.scrollTop + a.documentElement.scrollTop,
            f = s.left + ("number" == typeof e._stageX ? e._stageX : 0),
            h = s.top + ("number" == typeof e._stageY ? e._stageY : 0),
            p = f - u,
            m = h - d,
            g = l + p,
            v = c + m,
            y = "number" == typeof e.movementX ? e.movementX : 0,
            b = "number" == typeof e.movementY ? e.movementY : 0;
          delete e._stageX, delete e._stageY, S(e, {
            srcElement: n,
            fromElement: i,
            toElement: r,
            screenX: g,
            screenY: v,
            pageX: f,
            pageY: h,
            clientX: p,
            clientY: m,
            x: p,
            y: m,
            movementX: y,
            movementY: b,
            offsetX: 0,
            offsetY: 0,
            layerX: 0,
            layerY: 0
          })
        }
        return e
      },
      ve = function (e) {
        var t = e && "string" == typeof e.type && e.type || "";
        return !/^(?:(?:before)?copy|destroy)$/.test(t)
      },
      ye = function (e, t, n, i) {
        i ? l(function () {
          e.apply(t, n)
        }, 0) : e.apply(t, n)
      },
      be = function (e) {
        if ("object" == typeof e && e && e.type) {
          var t = ve(e),
            n = j["*"] || [],
            i = j[e.type] || [],
            r = n.concat(i);
          if (r && r.length) {
            var a, s, l, c, u, d = this;
            for (a = 0, s = r.length; s > a; a++) l = r[a], c = d, "string" == typeof l && "function" == typeof o[l] && (l = o[l]), "object" == typeof l && l && "function" == typeof l.handleEvent && (c = l, l = l.handleEvent), "function" == typeof l && (u = S({}, e), ye(l, c, [u], t))
          }
          return this
        }
      },
      xe = function (e) {
        var t = null;
        return (W === !1 || e && "error" === e.type && e.name && -1 !== U.indexOf(e.name)) && (t = !1), t
      },
      we = function (e) {
        var t = e.target || i || null,
          o = "swf" === e._source;
        switch (delete e._source, e.type) {
          case "error":
            var a = "flash-sandboxed" === e.name || xe(e);
            "boolean" == typeof a && (H.sandboxed = a), -1 !== X.indexOf(e.name) ? S(H, {
              disabled: "flash-disabled" === e.name,
              outdated: "flash-outdated" === e.name,
              unavailable: "flash-unavailable" === e.name,
              degraded: "flash-degraded" === e.name,
              deactivated: "flash-deactivated" === e.name,
              overdue: "flash-overdue" === e.name,
              ready: !1
            }) : "version-mismatch" === e.name && (n = e.swfVersion, S(H, {
              disabled: !1,
              outdated: !1,
              unavailable: !1,
              degraded: !1,
              deactivated: !1,
              overdue: !1,
              ready: !1
            })), je();
            break;
          case "ready":
            n = e.swfVersion;
            var s = H.deactivated === !0;
            S(H, {
              disabled: !1,
              outdated: !1,
              sandboxed: !1,
              unavailable: !1,
              degraded: !1,
              deactivated: !1,
              overdue: s,
              ready: !s
            }), je();
            break;
          case "beforecopy":
            r = t;
            break;
          case "copy":
            var l, c, u = e.relatedTarget;
            !B["text/html"] && !B["text/plain"] && u && (c = u.value || u.outerHTML || u.innerHTML) && (l = u.value || u.textContent || u.innerText) ? (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", l), c !== l && e.clipboardData.setData("text/html", c)) : !B["text/plain"] && e.target && (l = e.target.getAttribute("data-clipboard-text")) && (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", l));
            break;
          case "aftercopy":
            Ce(e), Xe.clearData(), t && t !== Ne() && t.focus && t.focus();
            break;
          case "_mouseover":
            Xe.focus(t), K.bubbleEvents === !0 && o && (t && t !== e.relatedTarget && !O(e.relatedTarget, t) && Te(S({}, e, {
              type: "mouseenter",
              bubbles: !1,
              cancelable: !1
            })), Te(S({}, e, {
              type: "mouseover"
            })));
            break;
          case "_mouseout":
            Xe.blur(), K.bubbleEvents === !0 && o && (t && t !== e.relatedTarget && !O(e.relatedTarget, t) && Te(S({}, e, {
              type: "mouseleave",
              bubbles: !1,
              cancelable: !1
            })), Te(S({}, e, {
              type: "mouseout"
            })));
            break;
          case "_mousedown":
            Fe(t, K.activeClass), K.bubbleEvents === !0 && o && Te(S({}, e, {
              type: e.type.slice(1)
            }));
            break;
          case "_mouseup":
            Re(t, K.activeClass), K.bubbleEvents === !0 && o && Te(S({}, e, {
              type: e.type.slice(1)
            }));
            break;
          case "_click":
            r = null, K.bubbleEvents === !0 && o && Te(S({}, e, {
              type: e.type.slice(1)
            }));
            break;
          case "_mousemove":
            K.bubbleEvents === !0 && o && Te(S({}, e, {
              type: e.type.slice(1)
            }))
        }
        return !!/^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type) || void 0
      },
      Ce = function (e) {
        if (e.errors && e.errors.length > 0) {
          var t = E(e);
          S(t, {
            type: "error",
            name: "clipboard-error"
          }), delete t.success, l(function () {
            Xe.emit(t)
          }, 0)
        }
      },
      Te = function (e) {
        if (e && "string" == typeof e.type && e) {
          var t, n = e.target || null,
            i = n && n.ownerDocument || a,
            r = {
              view: i.defaultView || o,
              canBubble: !0,
              cancelable: !0,
              detail: "click" === e.type ? 1 : 0,
              button: "number" == typeof e.which ? e.which - 1 : "number" == typeof e.button ? e.button : i.createEvent ? 0 : 1
            },
            s = S(r, e);
          n && i.createEvent && n.dispatchEvent && (s = [s.type, s.canBubble, s.cancelable, s.view, s.detail, s.screenX, s.screenY, s.clientX, s.clientY, s.ctrlKey, s.altKey, s.shiftKey, s.metaKey, s.button, s.relatedTarget], t = i.createEvent("MouseEvents"), t.initMouseEvent && (t.initMouseEvent.apply(t, s), t._source = "js", n.dispatchEvent(t)))
        }
      },
      ke = function () {
        var e = K.flashLoadTimeout;
        if ("number" == typeof e && e >= 0) {
          var t = Math.min(1e3, e / 10),
            n = K.swfObjectId + "_fallbackContent";
          $ = u(function () {
            Ve(a.getElementById(n)) && (je(), H.deactivated = null, Xe.emit({
              type: "error",
              name: "swf-not-found"
            }))
          }, t)
        }
      },
      _e = function () {
        var e = a.createElement("div");
        return e.id = K.containerId, e.className = K.containerClass, e.style.position = "absolute", e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.height = "1px", e.style.zIndex = "" + qe(K.zIndex), e
      },
      Se = function (e) {
        for (var t = e && e.parentNode; t && "OBJECT" === t.nodeName && t.parentNode;) t = t.parentNode;
        return t || null
      },
      Ee = function () {
        var e, t = H.bridge,
          n = Se(t);
        if (!t) {
          var i = Le(o.location.host, K),
            r = "never" === i ? "none" : "all",
            s = Pe(S({
              jsVersion: Xe.version
            }, K)),
            l = K.swfPath + Oe(K.swfPath, K);
          n = _e();
          var c = a.createElement("div");
          n.appendChild(c), a.body.appendChild(n);
          var u = a.createElement("div"),
            d = "activex" === H.pluginType;
          u.innerHTML = '<object id="' + K.swfObjectId + '" name="' + K.swfObjectId + '" width="100%" height="100%" ' + (d ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + l + '"') + ">" + (d ? '<param name="movie" value="' + l + '"/>' : "") + '<param name="allowScriptAccess" value="' + i + '"/><param name="allowNetworking" value="' + r + '"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="' + s + '"/><div id="' + K.swfObjectId + '_fallbackContent">&nbsp;</div></object>', t = u.firstChild, u = null, k(t).ZeroClipboard = Xe, n.replaceChild(t, c), ke()
        }
        return t || (t = a[K.swfObjectId], t && (e = t.length) && (t = t[e - 1]), !t && n && (t = n.firstChild)), H.bridge = t || null, t
      },
      Ae = function () {
        var e = H.bridge;
        if (e) {
          var i = Se(e);
          i && ("activex" === H.pluginType && "readyState" in e ? (e.style.display = "none", function t() {
            if (4 === e.readyState) {
              for (var n in e) "function" == typeof e[n] && (e[n] = null);
              e.parentNode && e.parentNode.removeChild(e), i.parentNode && i.parentNode.removeChild(i)
            } else l(t, 10)
          }()) : (e.parentNode && e.parentNode.removeChild(e), i.parentNode && i.parentNode.removeChild(i))), je(), H.ready = null, H.bridge = null, H.deactivated = null, n = t
        }
      },
      Ie = function (e) {
        var t = {},
          n = {};
        if ("object" == typeof e && e) {
          for (var i in e)
            if (i && C.call(e, i) && "string" == typeof e[i] && e[i]) switch (i.toLowerCase()) {
              case "text/plain":
              case "text":
              case "air:text":
              case "flash:text":
                t.text = e[i], n.text = i;
                break;
              case "text/html":
              case "html":
              case "air:html":
              case "flash:html":
                t.html = e[i], n.html = i;
                break;
              case "application/rtf":
              case "text/rtf":
              case "rtf":
              case "richtext":
              case "air:rtf":
              case "flash:rtf":
                t.rtf = e[i], n.rtf = i
            }
          return {
            data: t,
            formatMap: n
          }
        }
      },
      De = function (e, t) {
        if ("object" != typeof e || !e || "object" != typeof t || !t) return e;
        var n = {};
        for (var i in e)
          if (C.call(e, i))
            if ("errors" === i) {
              n[i] = e[i] ? e[i].slice() : [];
              for (var r = 0, o = n[i].length; o > r; r++) n[i][r].format = t[n[i][r].format]
            } else if ("success" !== i && "data" !== i) n[i] = e[i];
        else {
          n[i] = {};
          var a = e[i];
          for (var s in a) s && C.call(a, s) && C.call(t, s) && (n[i][t[s]] = a[s])
        }
        return n
      },
      Oe = function (e, t) {
        return null == t || t && t.cacheBust === !0 ? (-1 === e.indexOf("?") ? "?" : "&") + "noCache=" + b() : ""
      },
      Pe = function (e) {
        var t, n, i, r, a = "",
          s = [];
        if (e.trustedDomains && ("string" == typeof e.trustedDomains ? r = [e.trustedDomains] : "object" == typeof e.trustedDomains && "length" in e.trustedDomains && (r = e.trustedDomains)), r && r.length)
          for (t = 0, n = r.length; n > t; t++)
            if (C.call(r, t) && r[t] && "string" == typeof r[t]) {
              if (!(i = Me(r[t]))) continue;
              if ("*" === i) {
                s.length = 0, s.push(i);
                break
              }
              s.push.apply(s, [i, "//" + i, o.location.protocol + "//" + i])
            }
        return s.length && (a += "trustedOrigins=" + h(s.join(","))), e.forceEnhancedClipboard === !0 && (a += (a ? "&" : "") + "forceEnhancedClipboard=true"), "string" == typeof e.swfObjectId && e.swfObjectId && (a += (a ? "&" : "") + "swfObjectId=" + h(e.swfObjectId)), "string" == typeof e.jsVersion && e.jsVersion && (a += (a ? "&" : "") + "jsVersion=" + h(e.jsVersion)), a
      },
      Me = function (e) {
        if (null == e || "" === e) return null;
        if ("" === (e = e.replace(/^\s+|\s+$/g, ""))) return null;
        var t = e.indexOf("//");
        e = -1 === t ? e : e.slice(t + 2);
        var n = e.indexOf("/");
        return e = -1 === n ? e : -1 === t || 0 === n ? null : e.slice(0, n), e && ".swf" === e.slice(-4).toLowerCase() ? null : e || null
      },
      Le = function () {
        var e = function (e) {
          var t, n, i, r = [];
          if ("string" == typeof e && (e = [e]), "object" != typeof e || !e || "number" != typeof e.length) return r;
          for (t = 0, n = e.length; n > t; t++)
            if (C.call(e, t) && (i = Me(e[t]))) {
              if ("*" === i) {
                r.length = 0, r.push("*");
                break
              } - 1 === r.indexOf(i) && r.push(i)
            }
          return r
        };
        return function (t, n) {
          var i = Me(n.swfPath);
          null === i && (i = t);
          var r = e(n.trustedDomains),
            o = r.length;
          if (o > 0) {
            if (1 === o && "*" === r[0]) return "always";
            if (-1 !== r.indexOf(t)) return 1 === o && t === i ? "sameDomain" : "always"
          }
          return "never"
        }
      }(),
      Ne = function () {
        try {
          return a.activeElement
        } catch (e) {
          return null
        }
      },
      Fe = function (e, t) {
        var n, i, r, o = [];
        if ("string" == typeof t && t && (o = t.split(/\s+/)), e && 1 === e.nodeType && o.length > 0) {
          for (r = (" " + (e.className || "") + " ").replace(/[\t\r\n\f]/g, " "), n = 0, i = o.length; i > n; n++) - 1 === r.indexOf(" " + o[n] + " ") && (r += o[n] + " ");
          (r = r.replace(/^\s+|\s+$/g, "")) !== e.className && (e.className = r)
        }
        return e
      },
      Re = function (e, t) {
        var n, i, r, o = [];
        if ("string" == typeof t && t && (o = t.split(/\s+/)), e && 1 === e.nodeType && o.length > 0 && e.className) {
          for (r = (" " + e.className + " ").replace(/[\t\r\n\f]/g, " "), n = 0, i = o.length; i > n; n++) r = r.replace(" " + o[n] + " ", " ");
          (r = r.replace(/^\s+|\s+$/g, "")) !== e.className && (e.className = r)
        }
        return e
      },
      We = function (e, t) {
        var n = f(e, null).getPropertyValue(t);
        return "cursor" !== t || n && "auto" !== n || "A" !== e.nodeName ? n : "pointer"
      },
      He = function (e) {
        var t = {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        };
        if (e.getBoundingClientRect) {
          var n = e.getBoundingClientRect(),
            i = o.pageXOffset,
            r = o.pageYOffset,
            s = a.documentElement.clientLeft || 0,
            l = a.documentElement.clientTop || 0,
            c = 0,
            u = 0;
          if ("relative" === We(a.body, "position")) {
            var d = a.body.getBoundingClientRect(),
              f = a.documentElement.getBoundingClientRect();
            c = d.left - f.left || 0, u = d.top - f.top || 0
          }
          t.left = n.left + i - s - c, t.top = n.top + r - l - u, t.width = "width" in n ? n.width : n.right - n.left, t.height = "height" in n ? n.height : n.bottom - n.top
        }
        return t
      },
      Ve = function (e) {
        if (!e) return !1;
        var t = f(e, null);
        if (!t) return !1;
        var n = v(t.height) > 0,
          i = v(t.width) > 0,
          r = v(t.top) >= 0,
          o = v(t.left) >= 0,
          a = n && i && r && o,
          s = a ? null : He(e);
        return "none" !== t.display && "collapse" !== t.visibility && (a || !!s && (n || s.height > 0) && (i || s.width > 0) && (r || s.top >= 0) && (o || s.left >= 0))
      },
      je = function () {
        c(q), q = 0, d($), $ = 0
      },
      Be = function () {
        var e;
        if (i && (e = Se(H.bridge))) {
          var t = He(i);
          S(e.style, {
            width: t.width + "px",
            height: t.height + "px",
            top: t.top + "px",
            left: t.left + "px",
            zIndex: "" + qe(K.zIndex)
          })
        }
      },
      ze = function (e) {
        H.ready === !0 && (H.bridge && "function" == typeof H.bridge.setHandCursor ? H.bridge.setHandCursor(e) : H.ready = !1)
      },
      qe = function (e) {
        if (/^(?:auto|inherit)$/.test(e)) return e;
        var t;
        return "number" != typeof e || y(e) ? "string" == typeof e && (t = qe(g(e, 10))) : t = e, "number" == typeof t ? t : "auto"
      },
      $e = function (e) {
        var t = /(\r\n|\r|\n)/g;
        return "string" == typeof e && K.fixLineEndings === !0 && (R() ? /((^|[^\r])\n|\r([^\n]|$))/.test(e) && (e = e.replace(t, "\r\n")) : /\r/.test(e) && (e = e.replace(t, "\n"))), e
      },
      Ye = function (t) {
        var n, i, r, o = H.sandboxed,
          a = null;
        if (t = t === !0, W === !1) a = !1;
        else {
          try {
            i = e.frameElement || null
          } catch (e) {
            r = {
              name: e.name,
              message: e.message
            }
          }
          if (i && 1 === i.nodeType && "IFRAME" === i.nodeName) try {
            a = i.hasAttribute("sandbox")
          } catch (e) {
            a = null
          } else {
            try {
              n = document.domain || null
            } catch (e) {
              n = null
            }(null === n || r && "SecurityError" === r.name && /(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(r.message.toLowerCase())) && (a = !0)
          }
        }
        return H.sandboxed = a, o === a || t || Ue(p), a
      },
      Ue = function (e) {
        function t(e) {
          var t = e.match(/[\d]+/g);
          return t.length = 3, t.join(".")
        }

        function n(e) {
          return !!e && (e = e.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e) || "chrome.plugin" === e.slice(-13))
        }

        function i(e) {
          e && (l = !0, e.version && (d = t(e.version)), !d && e.description && (d = t(e.description)), e.filename && (u = n(e.filename)))
        }
        var r, o, a, l = !1,
          c = !1,
          u = !1,
          d = "";
        if (s.plugins && s.plugins.length) r = s.plugins["Shockwave Flash"], i(r), s.plugins["Shockwave Flash 2.0"] && (l = !0, d = "2.0.0.11");
        else if (s.mimeTypes && s.mimeTypes.length) a = s.mimeTypes["application/x-shockwave-flash"], r = a && a.enabledPlugin, i(r);
        else if (void 0 !== e) {
          c = !0;
          try {
            o = new e("ShockwaveFlash.ShockwaveFlash.7"), l = !0, d = t(o.GetVariable("$version"))
          } catch (n) {
            try {
              o = new e("ShockwaveFlash.ShockwaveFlash.6"), l = !0, d = "6.0.21"
            } catch (n) {
              try {
                o = new e("ShockwaveFlash.ShockwaveFlash"), l = !0, d = t(o.GetVariable("$version"))
              } catch (e) {
                c = !1
              }
            }
          }
        }
        H.disabled = l !== !0, H.outdated = d && v(d) < v(V), H.version = d || "0.0.0", H.pluginType = u ? "pepper" : c ? "activex" : l ? "netscape" : "unknown"
      };
    Ue(p), Ye(!0);
    var Xe = function () {
      return this instanceof Xe ? void("function" == typeof Xe._createClient && Xe._createClient.apply(this, _(arguments))) : new Xe
    };
    w(Xe, "version", {
      value: "2.3.0-beta.1",
      writable: !1,
      configurable: !0,
      enumerable: !0
    }), Xe.config = function () {
      return Z.apply(this, _(arguments))
    }, Xe.state = function () {
      return J.apply(this, _(arguments))
    }, Xe.isFlashUnusable = function () {
      return ee.apply(this, _(arguments))
    }, Xe.on = function () {
      return te.apply(this, _(arguments))
    }, Xe.off = function () {
      return ne.apply(this, _(arguments))
    }, Xe.handlers = function () {
      return ie.apply(this, _(arguments))
    }, Xe.emit = function () {
      return re.apply(this, _(arguments))
    }, Xe.create = function () {
      return oe.apply(this, _(arguments))
    }, Xe.destroy = function () {
      return ae.apply(this, _(arguments))
    }, Xe.setData = function () {
      return se.apply(this, _(arguments))
    }, Xe.clearData = function () {
      return le.apply(this, _(arguments))
    }, Xe.getData = function () {
      return ce.apply(this, _(arguments))
    }, Xe.focus = Xe.activate = function () {
      return ue.apply(this, _(arguments))
    }, Xe.blur = Xe.deactivate = function () {
      return de.apply(this, _(arguments))
    }, Xe.activeElement = function () {
      return fe.apply(this, _(arguments))
    };
    var Ge = 0,
      Qe = {},
      Ke = 0,
      Ze = {},
      Je = {};
    S(K, {
      autoActivate: !0
    });
    var et = function (e) {
        var t = this;
        t.id = "" + Ge++, Qe[t.id] = {
          instance: t,
          elements: [],
          handlers: {}
        }, e && t.clip(e), Xe.on("*", function (e) {
          return t.emit(e)
        }), Xe.on("destroy", function () {
          t.destroy()
        }), Xe.create()
      },
      tt = function (e, i) {
        var r, o, a, s = {},
          l = Qe[this.id],
          c = l && l.handlers;
        if (!l) throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance");
        if ("string" == typeof e && e) a = e.toLowerCase().split(/\s+/);
        else if ("object" == typeof e && e && void 0 === i)
          for (r in e) C.call(e, r) && "string" == typeof r && r && "function" == typeof e[r] && this.on(r, e[r]);
        if (a && a.length) {
          for (r = 0, o = a.length; o > r; r++) e = a[r].replace(/^on/, ""), s[e] = !0, c[e] || (c[e] = []), c[e].push(i);
          if (s.ready && H.ready && this.emit({
              type: "ready",
              client: this
            }), s.error) {
            for (r = 0, o = X.length; o > r; r++)
              if (H[X[r].replace(/^flash-/, "")]) {
                this.emit({
                  type: "error",
                  name: X[r],
                  client: this
                });
                break
              }
            n !== t && Xe.version !== n && this.emit({
              type: "error",
              name: "version-mismatch",
              jsVersion: Xe.version,
              swfVersion: n
            })
          }
        }
        return this
      },
      nt = function (e, t) {
        var n, i, r, o, a, s = Qe[this.id],
          l = s && s.handlers;
        if (!l) return this;
        if (0 === arguments.length) o = x(l);
        else if ("string" == typeof e && e) o = e.split(/\s+/);
        else if ("object" == typeof e && e && void 0 === t)
          for (n in e) C.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && this.off(n, e[n]);
        if (o && o.length)
          for (n = 0, i = o.length; i > n; n++)
            if (e = o[n].toLowerCase().replace(/^on/, ""), (a = l[e]) && a.length)
              if (t)
                for (r = a.indexOf(t); - 1 !== r;) a.splice(r, 1), r = a.indexOf(t, r);
              else a.length = 0;
        return this
      },
      it = function (e) {
        var t = null,
          n = Qe[this.id] && Qe[this.id].handlers;
        return n && (t = "string" == typeof e && e ? n[e] ? n[e].slice(0) : [] : E(n)), t
      },
      rt = function (e) {
        if (ct.call(this, e)) {
          "object" == typeof e && e && "string" == typeof e.type && e.type && (e = S({}, e));
          var t = S({}, pe(e), {
            client: this
          });
          ut.call(this, t)
        }
        return this
      },
      ot = function (e) {
        if (!Qe[this.id]) throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance");
        e = dt(e);
        for (var t = 0; t < e.length; t++)
          if (C.call(e, t) && e[t] && 1 === e[t].nodeType) {
            e[t].zcClippingId ? -1 === Ze[e[t].zcClippingId].indexOf(this.id) && Ze[e[t].zcClippingId].push(this.id) : (e[t].zcClippingId = "zcClippingId_" + Ke++, Ze[e[t].zcClippingId] = [this.id], K.autoActivate === !0 && ft(e[t]));
            var n = Qe[this.id] && Qe[this.id].elements; - 1 === n.indexOf(e[t]) && n.push(e[t])
          }
        return this
      },
      at = function (e) {
        var t = Qe[this.id];
        if (!t) return this;
        var n, i = t.elements;
        e = void 0 === e ? i.slice(0) : dt(e);
        for (var r = e.length; r--;)
          if (C.call(e, r) && e[r] && 1 === e[r].nodeType) {
            for (n = 0; - 1 !== (n = i.indexOf(e[r], n));) i.splice(n, 1);
            var o = Ze[e[r].zcClippingId];
            if (o) {
              for (n = 0; - 1 !== (n = o.indexOf(this.id, n));) o.splice(n, 1);
              0 === o.length && (K.autoActivate === !0 && ht(e[r]), delete e[r].zcClippingId)
            }
          }
        return this
      },
      st = function () {
        var e = Qe[this.id];
        return e && e.elements ? e.elements.slice(0) : []
      },
      lt = function () {
        Qe[this.id] && (this.unclip(), this.off(), delete Qe[this.id])
      },
      ct = function (e) {
        if (!e || !e.type) return !1;
        if (e.client && e.client !== this) return !1;
        var t = Qe[this.id],
          n = t && t.elements,
          i = !!n && n.length > 0,
          r = !e.target || i && -1 !== n.indexOf(e.target),
          o = e.relatedTarget && i && -1 !== n.indexOf(e.relatedTarget),
          a = e.client && e.client === this;
        return !(!t || !(r || o || a))
      },
      ut = function (e) {
        var t = Qe[this.id];
        if ("object" == typeof e && e && e.type && t) {
          var n = ve(e),
            i = t && t.handlers["*"] || [],
            r = t && t.handlers[e.type] || [],
            a = i.concat(r);
          if (a && a.length) {
            var s, l, c, u, d, f = this;
            for (s = 0, l = a.length; l > s; s++) c = a[s], u = f, "string" == typeof c && "function" == typeof o[c] && (c = o[c]), "object" == typeof c && c && "function" == typeof c.handleEvent && (u = c, c = c.handleEvent), "function" == typeof c && (d = S({}, e), ye(c, u, [d], n))
          }
        }
      },
      dt = function (e) {
        return "string" == typeof e && (e = []), "number" != typeof e.length ? [e] : e
      },
      ft = function (e) {
        if (e && 1 === e.nodeType) {
          var t = function (e) {
              (e || (e = o.event)) && ("js" !== e._source && (e.stopImmediatePropagation(), e.preventDefault()), delete e._source)
            },
            n = function (n) {
              (n || (n = o.event)) && (t(n), Xe.focus(e))
            };
          e.addEventListener("mouseover", n, !1), e.addEventListener("mouseout", t, !1), e.addEventListener("mouseenter", t, !1), e.addEventListener("mouseleave", t, !1), e.addEventListener("mousemove", t, !1), Je[e.zcClippingId] = {
            mouseover: n,
            mouseout: t,
            mouseenter: t,
            mouseleave: t,
            mousemove: t
          }
        }
      },
      ht = function (e) {
        if (e && 1 === e.nodeType) {
          var t = Je[e.zcClippingId];
          if ("object" == typeof t && t) {
            for (var n, i, r = ["move", "leave", "enter", "out", "over"], o = 0, a = r.length; a > o; o++) n = "mouse" + r[o], "function" == typeof (i = t[n]) && e.removeEventListener(n, i, !1);
            delete Je[e.zcClippingId]
          }
        }
      };
    Xe._createClient = function () {
      et.apply(this, _(arguments))
    }, Xe.prototype.on = function () {
      return tt.apply(this, _(arguments))
    }, Xe.prototype.off = function () {
      return nt.apply(this, _(arguments))
    }, Xe.prototype.handlers = function () {
      return it.apply(this, _(arguments))
    }, Xe.prototype.emit = function () {
      return rt.apply(this, _(arguments))
    }, Xe.prototype.clip = function () {
      return ot.apply(this, _(arguments))
    }, Xe.prototype.unclip = function () {
      return at.apply(this, _(arguments))
    }, Xe.prototype.elements = function () {
      return st.apply(this, _(arguments))
    }, Xe.prototype.destroy = function () {
      return lt.apply(this, _(arguments))
    }, Xe.prototype.setText = function (e) {
      if (!Qe[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
      return Xe.setData("text/plain", e), this
    }, Xe.prototype.setHtml = function (e) {
      if (!Qe[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
      return Xe.setData("text/html", e), this
    }, Xe.prototype.setRichText = function (e) {
      if (!Qe[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
      return Xe.setData("application/rtf", e), this
    }, Xe.prototype.setData = function () {
      if (!Qe[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
      return Xe.setData.apply(this, _(arguments)), this
    }, Xe.prototype.clearData = function () {
      if (!Qe[this.id]) throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance");
      return Xe.clearData.apply(this, _(arguments)), this
    }, Xe.prototype.getData = function () {
      if (!Qe[this.id]) throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance");
      return Xe.getData.apply(this, _(arguments))
    }, "function" == typeof define && define.amd ? define(function () {
      return Xe
    }) : "object" == typeof module && module && "object" == typeof module.exports && module.exports ? module.exports = Xe : e.ZeroClipboard = Xe
  }(function () {
    return this || window
  }()),
  function (e) {
    e.extend(e.fn, {
      validate: function (t) {
        if (!this.length) return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
        var n = e.data(this[0], "validator");
        return n ? n : (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function (t) {
          n.settings.submitHandler && (n.submitButton = t.target), e(t.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(t.target).attr("formnovalidate") && (n.cancelSubmit = !0)
        }), this.submit(function (t) {
          function i() {
            var i;
            return !n.settings.submitHandler || (n.submitButton && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && i.remove(), !1)
          }
          return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
        })), n)
      },
      valid: function () {
        var t, n;
        return e(this[0]).is("form") ? t = this.validate().form() : (t = !0, n = e(this[0].form).validate(), this.each(function () {
          t = n.element(this) && t
        })), t
      },
      removeAttrs: function (t) {
        var n = {},
          i = this;
        return e.each(t.split(/\s/), function (e, t) {
          n[t] = i.attr(t), i.removeAttr(t)
        }), n
      },
      rules: function (t, n) {
        var i, r, o, a, s, l, c = this[0];
        if (t) switch (i = e.data(c.form, "validator").settings, r = i.rules, o = e.validator.staticRules(c), t) {
          case "add":
            e.extend(o, e.validator.normalizeRule(n)), delete o.messages, r[c.name] = o, n.messages && (i.messages[c.name] = e.extend(i.messages[c.name], n.messages));
            break;
          case "remove":
            return n ? (l = {}, e.each(n.split(/\s/), function (t, n) {
              l[n] = o[n], delete o[n], "required" === n && e(c).removeAttr("aria-required")
            }), l) : (delete r[c.name], o)
        }
        return a = e.validator.normalizeRules(e.extend({}, e.validator.classRules(c), e.validator.attributeRules(c), e.validator.dataRules(c), e.validator.staticRules(c)), c), a.required && (s = a.required, delete a.required, a = e.extend({
          required: s
        }, a), e(c).attr("aria-required", "true")), a.remote && (s = a.remote, delete a.remote, a = e.extend(a, {
          remote: s
        })), a
      }
    }), e.extend(e.expr[":"], {
      blank: function (t) {
        return !e.trim("" + e(t).val())
      },
      filled: function (t) {
        return !!e.trim("" + e(t).val())
      },
      unchecked: function (t) {
        return !e(t).prop("checked")
      }
    }), e.validator = function (t, n) {
      this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
    }, e.validator.format = function (t, n) {
      return 1 === arguments.length ? function () {
        var n = e.makeArray(arguments);
        return n.unshift(t), e.validator.format.apply(this, n)
      } : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function (e, n) {
        t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
          return n
        })
      }), t)
    }, e.extend(e.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        validClass: "valid",
        errorElement: "label",
        focusInvalid: !0,
        errorContainer: e([]),
        errorLabelContainer: e([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function (e) {
          this.lastActive = e, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(e)).hide())
        },
        onfocusout: function (e) {
          this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
        },
        onkeyup: function (e, t) {
          9 === t.which && "" === this.elementValue(e) || (e.name in this.submitted || e === this.lastElement) && this.element(e)
        },
        onclick: function (e) {
          e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
        },
        highlight: function (t, n, i) {
          "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i)
        },
        unhighlight: function (t, n, i) {
          "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i)
        }
      },
      setDefaults: function (t) {
        e.extend(e.validator.defaults, t)
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        maxlength: e.validator.format("Please enter no more than {0} characters."),
        minlength: e.validator.format("Please enter at least {0} characters."),
        rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
        range: e.validator.format("Please enter a value between {0} and {1}."),
        max: e.validator.format("Please enter a value less than or equal to {0}."),
        min: e.validator.format("Please enter a value greater than or equal to {0}.")
      },
      autoCreateRanges: !1,
      prototype: {
        init: function () {
          function t(t) {
            var n = e.data(this[0].form, "validator"),
              i = "on" + t.type.replace(/^validate/, ""),
              r = n.settings;
            r[i] && !this.is(r.ignore) && r[i].call(n, this[0], t)
          }
          this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
          var n, i = this.groups = {};
          e.each(this.settings.groups, function (t, n) {
            "string" == typeof n && (n = n.split(/\s/)), e.each(n, function (e, n) {
              i[n] = t
            })
          }), n = this.settings.rules, e.each(n, function (t, i) {
            n[t] = e.validator.normalizeRule(i)
          }), e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", t).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t), this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
        },
        form: function () {
          return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
        },
        checkForm: function () {
          this.prepareForm();
          for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
          return this.valid()
        },
        element: function (t) {
          var n = this.clean(t),
            i = this.validationTargetFor(n),
            r = !0;
          return this.lastElement = i, void 0 === i ? delete this.invalid[n.name] : (this.prepareElement(i), this.currentElements = e(i), r = this.check(i) !== !1, r ? delete this.invalid[i.name] : this.invalid[i.name] = !0), e(t).attr("aria-invalid", !r), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), r
        },
        showErrors: function (t) {
          if (t) {
            e.extend(this.errorMap, t), this.errorList = [];
            for (var n in t) this.errorList.push({
              message: t[n],
              element: this.findByName(n)[0]
            });
            this.successList = e.grep(this.successList, function (e) {
              return !(e.name in t)
            })
          }
          this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
        },
        resetForm: function () {
          e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
        },
        numberOfInvalids: function () {
          return this.objectLength(this.invalid)
        },
        objectLength: function (e) {
          var t, n = 0;
          for (t in e) n++;
          return n
        },
        hideErrors: function () {
          this.addWrapper(this.toHide).hide()
        },
        valid: function () {
          return 0 === this.size()
        },
        size: function () {
          return this.errorList.length
        },
        focusInvalid: function () {
          if (this.settings.focusInvalid) try {
            e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
          } catch (e) {}
        },
        findLastActive: function () {
          var t = this.lastActive;
          return t && 1 === e.grep(this.errorList, function (e) {
            return e.element.name === t.name
          }).length && t
        },
        elements: function () {
          var t = this,
            n = {};
          return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
            return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in n || !t.objectLength(e(this).rules())) && (n[this.name] = !0, !0)
          })
        },
        clean: function (t) {
          return e(t)[0]
        },
        errors: function () {
          var t = this.settings.errorClass.split(" ").join(".");
          return e(this.settings.errorElement + "." + t, this.errorContext)
        },
        reset: function () {
          this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([])
        },
        prepareForm: function () {
          this.reset(), this.toHide = this.errors().add(this.containers)
        },
        prepareElement: function (e) {
          this.reset(), this.toHide = this.errorsFor(e)
        },
        elementValue: function (t) {
          var n, i = e(t),
            r = i.attr("type");
          return "radio" === r || "checkbox" === r ? e("input[name='" + i.attr("name") + "']:checked").val() : (n = i.val(), "string" == typeof n ? n.replace(/\r/g, "") : n)
        },
        check: function (t) {
          t = this.validationTargetFor(this.clean(t));
          var n, i, r, o = e(t).rules(),
            a = e.map(o, function (e, t) {
              return t
            }).length,
            s = !1,
            l = this.elementValue(t);
          for (i in o) {
            r = {
              method: i,
              parameters: o[i]
            };
            try {
              if ("dependency-mismatch" === (n = e.validator.methods[i].call(this, l, t, r.parameters)) && 1 === a) {
                s = !0;
                continue
              }
              if (s = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
              if (!n) return this.formatAndAdd(t, r), !1
            } catch (e) {
              throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e), e
            }
          }
          if (!s) return this.objectLength(o) && this.successList.push(t), !0
        },
        customDataMessage: function (t, n) {
          return e(t).data("msg" + n[0].toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg")
        },
        customMessage: function (e, t) {
          var n = this.settings.messages[e];
          return n && (n.constructor === String ? n : n[t])
        },
        findDefined: function () {
          for (var e = 0; e < arguments.length; e++)
            if (void 0 !== arguments[e]) return arguments[e]
        },
        defaultMessage: function (t, n) {
          return this.findDefined(this.customMessage(t.name, n), this.customDataMessage(t, n), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n], "<strong>Warning: No message defined for " + t.name + "</strong>")
        },
        formatAndAdd: function (t, n) {
          var i = this.defaultMessage(t, n.method),
            r = /\$?\{(\d+)\}/g;
          "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), this.errorList.push({
            message: i,
            element: t,
            method: n.method
          }), this.errorMap[t.name] = i, this.submitted[t.name] = i
        },
        addWrapper: function (e) {
          return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
        },
        defaultShowErrors: function () {
          var e, t, n;
          for (e = 0; this.errorList[e]; e++) n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
          if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
            for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
          if (this.settings.unhighlight)
            for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
          this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
        },
        validElements: function () {
          return this.currentElements.not(this.invalidElements())
        },
        invalidElements: function () {
          return e(this.errorList).map(function () {
            return this.element
          })
        },
        showLabel: function (t, n) {
          var i = this.errorsFor(t);
          i.length ? (i.removeClass(this.settings.validClass).addClass(this.settings.errorClass), i.html(n)) : (i = e("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (i = i.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(i).length || (this.settings.errorPlacement ? this.settings.errorPlacement(i, e(t)) : i.insertAfter(t))), !n && this.settings.success && (i.text(""), "string" == typeof this.settings.success ? i.addClass(this.settings.success) : this.settings.success(i, t)), this.toShow = this.toShow.add(i)
        },
        errorsFor: function (t) {
          var n = this.idOrName(t);
          return this.errors().filter(function () {
            return e(this).attr("for") === n
          })
        },
        idOrName: function (e) {
          return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
        },
        validationTargetFor: function (e) {
          return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]), e
        },
        checkable: function (e) {
          return /radio|checkbox/i.test(e.type)
        },
        findByName: function (t) {
          return e(this.currentForm).find("[name='" + t + "']")
        },
        getLength: function (t, n) {
          switch (n.nodeName.toLowerCase()) {
            case "select":
              return e("option:selected", n).length;
            case "input":
              if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
          }
          return t.length
        },
        depend: function (e, t) {
          return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
        },
        dependTypes: {
          boolean: function (e) {
            return e
          },
          string: function (t, n) {
            return !!e(t, n.form).length
          },
          function: function (e, t) {
            return e(t)
          }
        },
        optional: function (t) {
          var n = this.elementValue(t);
          return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
        },
        startRequest: function (e) {
          this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
        },
        stopRequest: function (t, n) {
          this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
        },
        previousValue: function (t) {
          return e.data(t, "previousValue") || e.data(t, "previousValue", {
            old: null,
            valid: !0,
            message: this.defaultMessage(t, "remote")
          })
        }
      },
      classRuleSettings: {
        required: {
          required: !0
        },
        email: {
          email: !0
        },
        url: {
          url: !0
        },
        date: {
          date: !0
        },
        dateISO: {
          dateISO: !0
        },
        number: {
          number: !0
        },
        digits: {
          digits: !0
        },
        creditcard: {
          creditcard: !0
        }
      },
      addClassRules: function (t, n) {
        t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
      },
      classRules: function (t) {
        var n = {},
          i = e(t).attr("class");
        return i && e.each(i.split(" "), function () {
          this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
        }), n
      },
      attributeRules: function (t) {
        var n, i, r = {},
          o = e(t),
          a = t.getAttribute("type");
        for (n in e.validator.methods) "required" === n ? (i = t.getAttribute(n), "" === i && (i = !0), i = !!i) : i = o.attr(n), /min|max/.test(n) && (null === a || /number|range|text/.test(a)) && (i = Number(i)), i || 0 === i ? r[n] = i : a === n && "range" !== a && (r[n] = !0);
        return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
      },
      dataRules: function (t) {
        var n, i, r = {},
          o = e(t);
        for (n in e.validator.methods) void 0 !== (i = o.data("rule" + n[0].toUpperCase() + n.substring(1).toLowerCase())) && (r[n] = i);
        return r
      },
      staticRules: function (t) {
        var n = {},
          i = e.data(t.form, "validator");
        return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n
      },
      normalizeRules: function (t, n) {
        return e.each(t, function (i, r) {
          if (r === !1) return void delete t[i];
          if (r.param || r.depends) {
            var o = !0;
            switch (typeof r.depends) {
              case "string":
                o = !!e(r.depends, n.form).length;
                break;
              case "function":
                o = r.depends.call(n, n)
            }
            o ? t[i] = void 0 === r.param || r.param : delete t[i]
          }
        }), e.each(t, function (i, r) {
          t[i] = e.isFunction(r) ? r(n) : r
        }), e.each(["minlength", "maxlength"], function () {
          t[this] && (t[this] = Number(t[this]))
        }), e.each(["rangelength", "range"], function () {
          var n;
          t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]))
        }), e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
      },
      normalizeRule: function (t) {
        if ("string" == typeof t) {
          var n = {};
          e.each(t.split(/\s/), function () {
            n[this] = !0
          }), t = n
        }
        return t
      },
      addMethod: function (t, n, i) {
        e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
      },
      methods: {
        required: function (t, n, i) {
          if (!this.depend(i, n)) return "dependency-mismatch";
          if ("select" === n.nodeName.toLowerCase()) {
            var r = e(n).val();
            return r && r.length > 0
          }
          return this.checkable(n) ? this.getLength(t, n) > 0 : e.trim(t).length > 0
        },
        email: function (e, t) {
          return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
        },
        url: function (e, t) {
          return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
        },
        date: function (e, t) {
          return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
        },
        dateISO: function (e, t) {
          return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)
        },
        number: function (e, t) {
          return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
        },
        digits: function (e, t) {
          return this.optional(t) || /^\d+$/.test(e)
        },
        creditcard: function (e, t) {
          if (this.optional(t)) return "dependency-mismatch";
          if (/[^0-9 \-]+/.test(e)) return !1;
          var n, i, r = 0,
            o = 0,
            a = !1;
          if (e = e.replace(/\D/g, ""), e.length < 13 || e.length > 19) return !1;
          for (n = e.length - 1; n >= 0; n--) i = e.charAt(n), o = parseInt(i, 10), a && (o *= 2) > 9 && (o -= 9), r += o, a = !a;
          return r % 10 == 0
        },
        minlength: function (t, n, i) {
          var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
          return this.optional(n) || r >= i
        },
        maxlength: function (t, n, i) {
          var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
          return this.optional(n) || r <= i
        },
        rangelength: function (t, n, i) {
          var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
          return this.optional(n) || r >= i[0] && r <= i[1]
        },
        min: function (e, t, n) {
          return this.optional(t) || e >= n
        },
        max: function (e, t, n) {
          return this.optional(t) || e <= n
        },
        range: function (e, t, n) {
          return this.optional(t) || e >= n[0] && e <= n[1]
        },
        equalTo: function (t, n, i) {
          var r = e(i);
          return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
            e(n).valid()
          }), t === r.val()
        },
        remote: function (t, n, i) {
          if (this.optional(n)) return "dependency-mismatch";
          var r, o, a = this.previousValue(n);
          return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), a.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = a.message, i = "string" == typeof i && {
            url: i
          } || i, a.old === t ? a.valid : (a.old = t, r = this, this.startRequest(n), o = {}, o[n.name] = t, e.ajax(e.extend(!0, {
            url: i,
            mode: "abort",
            port: "validate" + n.name,
            dataType: "json",
            data: o,
            context: r.currentForm,
            success: function (i) {
              var o, s, l, c = i === !0 || "true" === i;
              r.settings.messages[n.name].remote = a.originalMessage, c ? (l = r.formSubmitted, r.prepareElement(n), r.formSubmitted = l, r.successList.push(n), delete r.invalid[n.name], r.showErrors()) : (o = {}, s = i || r.defaultMessage(n, "remote"), o[n.name] = a.message = e.isFunction(s) ? s(t) : s, r.invalid[n.name] = !0, r.showErrors(o)), a.valid = c, r.stopRequest(n, c)
            }
          }, i)), "pending")
        }
      }
    }), e.format = function () {
      throw "$.format has been deprecated. Please use $.validator.format instead."
    }
  }(jQuery),
  function (e) {
    var t, n = {};
    e.ajaxPrefilter ? e.ajaxPrefilter(function (e, t, i) {
      var r = e.port;
      "abort" === e.mode && (n[r] && n[r].abort(), n[r] = i)
    }) : (t = e.ajax, e.ajax = function (i) {
      var r = ("mode" in i ? i : e.ajaxSettings).mode,
        o = ("port" in i ? i : e.ajaxSettings).port;
      return "abort" === r ? (n[o] && n[o].abort(), n[o] = t.apply(this, arguments), n[o]) : t.apply(this, arguments)
    })
  }(jQuery),
  function (e) {
    e.extend(e.fn, {
      validateDelegate: function (t, n, i) {
        return this.bind(n, function (n) {
          var r = e(n.target);
          if (r.is(t)) return i.apply(r, arguments)
        })
      }
    })
  }(jQuery);