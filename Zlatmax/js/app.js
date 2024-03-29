(() => {
  var e = {
      211: function (e, t) {
        !(function (e) {
          "use strict";
          function t(e) {
            return s(e) && "function" == typeof e.from;
          }
          function s(e) {
            return "object" == typeof e && "function" == typeof e.to;
          }
          function n(e) {
            e.parentElement.removeChild(e);
          }
          function i(e) {
            return null != e;
          }
          function r(e) {
            e.preventDefault();
          }
          function a(e) {
            return e.filter(function (e) {
              return !this[e] && (this[e] = !0);
            }, {});
          }
          function o(e, t) {
            return Math.round(e / t) * t;
          }
          function l(e, t) {
            var s = e.getBoundingClientRect(),
              n = e.ownerDocument,
              i = n.documentElement,
              r = v(n);
            return (
              /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (r.x = 0),
              t ? s.top + r.y - i.clientTop : s.left + r.x - i.clientLeft
            );
          }
          function c(e) {
            return "number" == typeof e && !isNaN(e) && isFinite(e);
          }
          function d(e, t, s) {
            s > 0 &&
              (h(e, t),
              setTimeout(function () {
                m(e, t);
              }, s));
          }
          function u(e) {
            return Math.max(Math.min(e, 100), 0);
          }
          function p(e) {
            return Array.isArray(e) ? e : [e];
          }
          function f(e) {
            var t = (e = String(e)).split(".");
            return t.length > 1 ? t[1].length : 0;
          }
          function h(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.add(t)
              : (e.className += " " + t);
          }
          function m(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.remove(t)
              : (e.className = e.className.replace(
                  new RegExp(
                    "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                    "gi"
                  ),
                  " "
                ));
          }
          function g(e, t) {
            return e.classList
              ? e.classList.contains(t)
              : new RegExp("\\b" + t + "\\b").test(e.className);
          }
          function v(e) {
            var t = void 0 !== window.pageXOffset,
              s = "CSS1Compat" === (e.compatMode || "");
            return {
              x: t
                ? window.pageXOffset
                : s
                ? e.documentElement.scrollLeft
                : e.body.scrollLeft,
              y: t
                ? window.pageYOffset
                : s
                ? e.documentElement.scrollTop
                : e.body.scrollTop,
            };
          }
          function b() {
            return window.navigator.pointerEnabled
              ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
              : window.navigator.msPointerEnabled
              ? {
                  start: "MSPointerDown",
                  move: "MSPointerMove",
                  end: "MSPointerUp",
                }
              : {
                  start: "mousedown touchstart",
                  move: "mousemove touchmove",
                  end: "mouseup touchend",
                };
          }
          function y() {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              window.addEventListener("test", null, t);
            } catch (e) {}
            return e;
          }
          function w() {
            return (
              window.CSS && CSS.supports && CSS.supports("touch-action", "none")
            );
          }
          function S(e, t) {
            return 100 / (t - e);
          }
          function x(e, t, s) {
            return (100 * t) / (e[s + 1] - e[s]);
          }
          function E(e, t) {
            return x(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0);
          }
          function C(e, t) {
            return (t * (e[1] - e[0])) / 100 + e[0];
          }
          function T(e, t) {
            for (var s = 1; e >= t[s]; ) s += 1;
            return s;
          }
          function O(e, t, s) {
            if (s >= e.slice(-1)[0]) return 100;
            var n = T(s, e),
              i = e[n - 1],
              r = e[n],
              a = t[n - 1],
              o = t[n];
            return a + E([i, r], s) / S(a, o);
          }
          function A(e, t, s) {
            if (s >= 100) return e.slice(-1)[0];
            var n = T(s, t),
              i = e[n - 1],
              r = e[n],
              a = t[n - 1];
            return C([i, r], (s - a) * S(a, t[n]));
          }
          function L(e, t, s, n) {
            if (100 === n) return n;
            var i = T(n, e),
              r = e[i - 1],
              a = e[i];
            return s
              ? n - r > (a - r) / 2
                ? a
                : r
              : t[i - 1]
              ? e[i - 1] + o(n - e[i - 1], t[i - 1])
              : n;
          }
          var P, k;
          (e.PipsMode = void 0),
            ((k = e.PipsMode || (e.PipsMode = {})).Range = "range"),
            (k.Steps = "steps"),
            (k.Positions = "positions"),
            (k.Count = "count"),
            (k.Values = "values"),
            (e.PipsType = void 0),
            ((P = e.PipsType || (e.PipsType = {}))[(P.None = -1)] = "None"),
            (P[(P.NoValue = 0)] = "NoValue"),
            (P[(P.LargeValue = 1)] = "LargeValue"),
            (P[(P.SmallValue = 2)] = "SmallValue");
          var M = (function () {
              function e(e, t, s) {
                var n;
                (this.xPct = []),
                  (this.xVal = []),
                  (this.xSteps = []),
                  (this.xNumSteps = []),
                  (this.xHighestCompleteStep = []),
                  (this.xSteps = [s || !1]),
                  (this.xNumSteps = [!1]),
                  (this.snap = t);
                var i = [];
                for (
                  Object.keys(e).forEach(function (t) {
                    i.push([p(e[t]), t]);
                  }),
                    i.sort(function (e, t) {
                      return e[0][0] - t[0][0];
                    }),
                    n = 0;
                  n < i.length;
                  n++
                )
                  this.handleEntryPoint(i[n][1], i[n][0]);
                for (
                  this.xNumSteps = this.xSteps.slice(0), n = 0;
                  n < this.xNumSteps.length;
                  n++
                )
                  this.handleStepPoint(n, this.xNumSteps[n]);
              }
              return (
                (e.prototype.getDistance = function (e) {
                  for (var t = [], s = 0; s < this.xNumSteps.length - 1; s++)
                    t[s] = x(this.xVal, e, s);
                  return t;
                }),
                (e.prototype.getAbsoluteDistance = function (e, t, s) {
                  var n,
                    i = 0;
                  if (e < this.xPct[this.xPct.length - 1])
                    for (; e > this.xPct[i + 1]; ) i++;
                  else
                    e === this.xPct[this.xPct.length - 1] &&
                      (i = this.xPct.length - 2);
                  s || e !== this.xPct[i + 1] || i++, null === t && (t = []);
                  var r = 1,
                    a = t[i],
                    o = 0,
                    l = 0,
                    c = 0,
                    d = 0;
                  for (
                    n = s
                      ? (e - this.xPct[i]) / (this.xPct[i + 1] - this.xPct[i])
                      : (this.xPct[i + 1] - e) /
                        (this.xPct[i + 1] - this.xPct[i]);
                    a > 0;

                  )
                    (o = this.xPct[i + 1 + d] - this.xPct[i + d]),
                      t[i + d] * r + 100 - 100 * n > 100
                        ? ((l = o * n), (r = (a - 100 * n) / t[i + d]), (n = 1))
                        : ((l = ((t[i + d] * o) / 100) * r), (r = 0)),
                      s
                        ? ((c -= l), this.xPct.length + d >= 1 && d--)
                        : ((c += l), this.xPct.length - d >= 1 && d++),
                      (a = t[i + d] * r);
                  return e + c;
                }),
                (e.prototype.toStepping = function (e) {
                  return (e = O(this.xVal, this.xPct, e));
                }),
                (e.prototype.fromStepping = function (e) {
                  return A(this.xVal, this.xPct, e);
                }),
                (e.prototype.getStep = function (e) {
                  return (e = L(this.xPct, this.xSteps, this.snap, e));
                }),
                (e.prototype.getDefaultStep = function (e, t, s) {
                  var n = T(e, this.xPct);
                  return (
                    (100 === e || (t && e === this.xPct[n - 1])) &&
                      (n = Math.max(n - 1, 1)),
                    (this.xVal[n] - this.xVal[n - 1]) / s
                  );
                }),
                (e.prototype.getNearbySteps = function (e) {
                  var t = T(e, this.xPct);
                  return {
                    stepBefore: {
                      startValue: this.xVal[t - 2],
                      step: this.xNumSteps[t - 2],
                      highestStep: this.xHighestCompleteStep[t - 2],
                    },
                    thisStep: {
                      startValue: this.xVal[t - 1],
                      step: this.xNumSteps[t - 1],
                      highestStep: this.xHighestCompleteStep[t - 1],
                    },
                    stepAfter: {
                      startValue: this.xVal[t],
                      step: this.xNumSteps[t],
                      highestStep: this.xHighestCompleteStep[t],
                    },
                  };
                }),
                (e.prototype.countStepDecimals = function () {
                  var e = this.xNumSteps.map(f);
                  return Math.max.apply(null, e);
                }),
                (e.prototype.hasNoSize = function () {
                  return this.xVal[0] === this.xVal[this.xVal.length - 1];
                }),
                (e.prototype.convert = function (e) {
                  return this.getStep(this.toStepping(e));
                }),
                (e.prototype.handleEntryPoint = function (e, t) {
                  var s;
                  if (
                    !c(
                      (s = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e))
                    ) ||
                    !c(t[0])
                  )
                    throw new Error("noUiSlider: 'range' value isn't numeric.");
                  this.xPct.push(s), this.xVal.push(t[0]);
                  var n = Number(t[1]);
                  s
                    ? this.xSteps.push(!isNaN(n) && n)
                    : isNaN(n) || (this.xSteps[0] = n),
                    this.xHighestCompleteStep.push(0);
                }),
                (e.prototype.handleStepPoint = function (e, t) {
                  if (t)
                    if (this.xVal[e] !== this.xVal[e + 1]) {
                      this.xSteps[e] =
                        x([this.xVal[e], this.xVal[e + 1]], t, 0) /
                        S(this.xPct[e], this.xPct[e + 1]);
                      var s =
                          (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e],
                        n = Math.ceil(Number(s.toFixed(3)) - 1),
                        i = this.xVal[e] + this.xNumSteps[e] * n;
                      this.xHighestCompleteStep[e] = i;
                    } else
                      this.xSteps[e] = this.xHighestCompleteStep[e] =
                        this.xVal[e];
                }),
                e
              );
            })(),
            _ = {
              to: function (e) {
                return void 0 === e ? "" : e.toFixed(2);
              },
              from: Number,
            },
            $ = {
              target: "target",
              base: "base",
              origin: "origin",
              handle: "handle",
              handleLower: "handle-lower",
              handleUpper: "handle-upper",
              touchArea: "touch-area",
              horizontal: "horizontal",
              vertical: "vertical",
              background: "background",
              connect: "connect",
              connects: "connects",
              ltr: "ltr",
              rtl: "rtl",
              textDirectionLtr: "txt-dir-ltr",
              textDirectionRtl: "txt-dir-rtl",
              draggable: "draggable",
              drag: "state-drag",
              tap: "state-tap",
              active: "active",
              tooltip: "tooltip",
              pips: "pips",
              pipsHorizontal: "pips-horizontal",
              pipsVertical: "pips-vertical",
              marker: "marker",
              markerHorizontal: "marker-horizontal",
              markerVertical: "marker-vertical",
              markerNormal: "marker-normal",
              markerLarge: "marker-large",
              markerSub: "marker-sub",
              value: "value",
              valueHorizontal: "value-horizontal",
              valueVertical: "value-vertical",
              valueNormal: "value-normal",
              valueLarge: "value-large",
              valueSub: "value-sub",
            },
            D = { tooltips: ".__tooltips", aria: ".__aria" };
          function I(e, t) {
            if (!c(t)) throw new Error("noUiSlider: 'step' is not numeric.");
            e.singleStep = t;
          }
          function N(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardPageMultiplier' is not numeric."
              );
            e.keyboardPageMultiplier = t;
          }
          function V(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardMultiplier' is not numeric."
              );
            e.keyboardMultiplier = t;
          }
          function q(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardDefaultStep' is not numeric."
              );
            e.keyboardDefaultStep = t;
          }
          function B(e, t) {
            if ("object" != typeof t || Array.isArray(t))
              throw new Error("noUiSlider: 'range' is not an object.");
            if (void 0 === t.min || void 0 === t.max)
              throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            e.spectrum = new M(t, e.snap || !1, e.singleStep);
          }
          function j(e, t) {
            if (((t = p(t)), !Array.isArray(t) || !t.length))
              throw new Error("noUiSlider: 'start' option is incorrect.");
            (e.handles = t.length), (e.start = t);
          }
          function z(e, t) {
            if ("boolean" != typeof t)
              throw new Error("noUiSlider: 'snap' option must be a boolean.");
            e.snap = t;
          }
          function H(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'animate' option must be a boolean."
              );
            e.animate = t;
          }
          function F(e, t) {
            if ("number" != typeof t)
              throw new Error(
                "noUiSlider: 'animationDuration' option must be a number."
              );
            e.animationDuration = t;
          }
          function G(e, t) {
            var s,
              n = [!1];
            if (
              ("lower" === t ? (t = [!0, !1]) : "upper" === t && (t = [!1, !0]),
              !0 === t || !1 === t)
            ) {
              for (s = 1; s < e.handles; s++) n.push(t);
              n.push(!1);
            } else {
              if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1)
                throw new Error(
                  "noUiSlider: 'connect' option doesn't match handle count."
                );
              n = t;
            }
            e.connect = n;
          }
          function R(e, t) {
            switch (t) {
              case "horizontal":
                e.ort = 0;
                break;
              case "vertical":
                e.ort = 1;
                break;
              default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
            }
          }
          function W(e, t) {
            if (!c(t))
              throw new Error("noUiSlider: 'margin' option must be numeric.");
            0 !== t && (e.margin = e.spectrum.getDistance(t));
          }
          function U(e, t) {
            if (!c(t))
              throw new Error("noUiSlider: 'limit' option must be numeric.");
            if (
              ((e.limit = e.spectrum.getDistance(t)), !e.limit || e.handles < 2)
            )
              throw new Error(
                "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles."
              );
          }
          function X(e, t) {
            var s;
            if (!c(t) && !Array.isArray(t))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (Array.isArray(t) && 2 !== t.length && !c(t[0]) && !c(t[1]))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (0 !== t) {
              for (
                Array.isArray(t) || (t = [t, t]),
                  e.padding = [
                    e.spectrum.getDistance(t[0]),
                    e.spectrum.getDistance(t[1]),
                  ],
                  s = 0;
                s < e.spectrum.xNumSteps.length - 1;
                s++
              )
                if (e.padding[0][s] < 0 || e.padding[1][s] < 0)
                  throw new Error(
                    "noUiSlider: 'padding' option must be a positive number(s)."
                  );
              var n = t[0] + t[1],
                i = e.spectrum.xVal[0];
              if (n / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - i) > 1)
                throw new Error(
                  "noUiSlider: 'padding' option must not exceed 100% of the range."
                );
            }
          }
          function Y(e, t) {
            switch (t) {
              case "ltr":
                e.dir = 0;
                break;
              case "rtl":
                e.dir = 1;
                break;
              default:
                throw new Error(
                  "noUiSlider: 'direction' option was not recognized."
                );
            }
          }
          function K(e, t) {
            if ("string" != typeof t)
              throw new Error(
                "noUiSlider: 'behaviour' must be a string containing options."
              );
            var s = t.indexOf("tap") >= 0,
              n = t.indexOf("drag") >= 0,
              i = t.indexOf("fixed") >= 0,
              r = t.indexOf("snap") >= 0,
              a = t.indexOf("hover") >= 0,
              o = t.indexOf("unconstrained") >= 0,
              l = t.indexOf("drag-all") >= 0;
            if (i) {
              if (2 !== e.handles)
                throw new Error(
                  "noUiSlider: 'fixed' behaviour must be used with 2 handles"
                );
              W(e, e.start[1] - e.start[0]);
            }
            if (o && (e.margin || e.limit))
              throw new Error(
                "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit"
              );
            e.events = {
              tap: s || r,
              drag: n,
              dragAll: l,
              fixed: i,
              snap: r,
              hover: a,
              unconstrained: o,
            };
          }
          function Q(e, t) {
            if (!1 !== t)
              if (!0 === t || s(t)) {
                e.tooltips = [];
                for (var n = 0; n < e.handles; n++) e.tooltips.push(t);
              } else {
                if ((t = p(t)).length !== e.handles)
                  throw new Error(
                    "noUiSlider: must pass a formatter for all handles."
                  );
                t.forEach(function (e) {
                  if ("boolean" != typeof e && !s(e))
                    throw new Error(
                      "noUiSlider: 'tooltips' must be passed a formatter or 'false'."
                    );
                }),
                  (e.tooltips = t);
              }
          }
          function Z(e, t) {
            if (t.length !== e.handles)
              throw new Error(
                "noUiSlider: must pass a attributes for all handles."
              );
            e.handleAttributes = t;
          }
          function J(e, t) {
            if (!s(t))
              throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
            e.ariaFormat = t;
          }
          function ee(e, s) {
            if (!t(s))
              throw new Error(
                "noUiSlider: 'format' requires 'to' and 'from' methods."
              );
            e.format = s;
          }
          function te(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'keyboardSupport' option must be a boolean."
              );
            e.keyboardSupport = t;
          }
          function se(e, t) {
            e.documentElement = t;
          }
          function ne(e, t) {
            if ("string" != typeof t && !1 !== t)
              throw new Error(
                "noUiSlider: 'cssPrefix' must be a string or `false`."
              );
            e.cssPrefix = t;
          }
          function ie(e, t) {
            if ("object" != typeof t)
              throw new Error("noUiSlider: 'cssClasses' must be an object.");
            "string" == typeof e.cssPrefix
              ? ((e.cssClasses = {}),
                Object.keys(t).forEach(function (s) {
                  e.cssClasses[s] = e.cssPrefix + t[s];
                }))
              : (e.cssClasses = t);
          }
          function re(e) {
            var t = {
                margin: null,
                limit: null,
                padding: null,
                animate: !0,
                animationDuration: 300,
                ariaFormat: _,
                format: _,
              },
              s = {
                step: { r: !1, t: I },
                keyboardPageMultiplier: { r: !1, t: N },
                keyboardMultiplier: { r: !1, t: V },
                keyboardDefaultStep: { r: !1, t: q },
                start: { r: !0, t: j },
                connect: { r: !0, t: G },
                direction: { r: !0, t: Y },
                snap: { r: !1, t: z },
                animate: { r: !1, t: H },
                animationDuration: { r: !1, t: F },
                range: { r: !0, t: B },
                orientation: { r: !1, t: R },
                margin: { r: !1, t: W },
                limit: { r: !1, t: U },
                padding: { r: !1, t: X },
                behaviour: { r: !0, t: K },
                ariaFormat: { r: !1, t: J },
                format: { r: !1, t: ee },
                tooltips: { r: !1, t: Q },
                keyboardSupport: { r: !0, t: te },
                documentElement: { r: !1, t: se },
                cssPrefix: { r: !0, t: ne },
                cssClasses: { r: !0, t: ie },
                handleAttributes: { r: !1, t: Z },
              },
              n = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: !0,
                cssPrefix: "noUi-",
                cssClasses: $,
                keyboardPageMultiplier: 5,
                keyboardMultiplier: 1,
                keyboardDefaultStep: 10,
              };
            e.format && !e.ariaFormat && (e.ariaFormat = e.format),
              Object.keys(s).forEach(function (r) {
                if (i(e[r]) || void 0 !== n[r])
                  s[r].t(t, i(e[r]) ? e[r] : n[r]);
                else if (s[r].r)
                  throw new Error("noUiSlider: '" + r + "' is required.");
              }),
              (t.pips = e.pips);
            var r = document.createElement("div"),
              a = void 0 !== r.style.msTransform,
              o = void 0 !== r.style.transform;
            t.transformRule = o
              ? "transform"
              : a
              ? "msTransform"
              : "webkitTransform";
            var l = [
              ["left", "top"],
              ["right", "bottom"],
            ];
            return (t.style = l[t.dir][t.ort]), t;
          }
          function ae(t, s, o) {
            var c,
              f,
              S,
              x,
              E,
              C = b(),
              T = w() && y(),
              O = t,
              A = s.spectrum,
              L = [],
              P = [],
              k = [],
              M = 0,
              _ = {},
              $ = t.ownerDocument,
              I = s.documentElement || $.documentElement,
              N = $.body,
              V = "rtl" === $.dir || 1 === s.ort ? 0 : 100;
            function q(e, t) {
              var s = $.createElement("div");
              return t && h(s, t), e.appendChild(s), s;
            }
            function B(e, t) {
              var n = q(e, s.cssClasses.origin),
                i = q(n, s.cssClasses.handle);
              if (
                (q(i, s.cssClasses.touchArea),
                i.setAttribute("data-handle", String(t)),
                s.keyboardSupport &&
                  (i.setAttribute("tabindex", "0"),
                  i.addEventListener("keydown", function (e) {
                    return fe(e, t);
                  })),
                void 0 !== s.handleAttributes)
              ) {
                var r = s.handleAttributes[t];
                Object.keys(r).forEach(function (e) {
                  i.setAttribute(e, r[e]);
                });
              }
              return (
                i.setAttribute("role", "slider"),
                i.setAttribute(
                  "aria-orientation",
                  s.ort ? "vertical" : "horizontal"
                ),
                0 === t
                  ? h(i, s.cssClasses.handleLower)
                  : t === s.handles - 1 && h(i, s.cssClasses.handleUpper),
                n
              );
            }
            function j(e, t) {
              return !!t && q(e, s.cssClasses.connect);
            }
            function z(e, t) {
              var n = q(t, s.cssClasses.connects);
              (f = []), (S = []).push(j(n, e[0]));
              for (var i = 0; i < s.handles; i++)
                f.push(B(t, i)), (k[i] = i), S.push(j(n, e[i + 1]));
            }
            function H(e) {
              return (
                h(e, s.cssClasses.target),
                0 === s.dir ? h(e, s.cssClasses.ltr) : h(e, s.cssClasses.rtl),
                0 === s.ort
                  ? h(e, s.cssClasses.horizontal)
                  : h(e, s.cssClasses.vertical),
                h(
                  e,
                  "rtl" === getComputedStyle(e).direction
                    ? s.cssClasses.textDirectionRtl
                    : s.cssClasses.textDirectionLtr
                ),
                q(e, s.cssClasses.base)
              );
            }
            function F(e, t) {
              return (
                !(!s.tooltips || !s.tooltips[t]) &&
                q(e.firstChild, s.cssClasses.tooltip)
              );
            }
            function G() {
              return O.hasAttribute("disabled");
            }
            function R(e) {
              return f[e].hasAttribute("disabled");
            }
            function W() {
              E &&
                (ve("update" + D.tooltips),
                E.forEach(function (e) {
                  e && n(e);
                }),
                (E = null));
            }
            function U() {
              W(),
                (E = f.map(F)),
                me("update" + D.tooltips, function (e, t, n) {
                  if (E && s.tooltips && !1 !== E[t]) {
                    var i = e[t];
                    !0 !== s.tooltips[t] && (i = s.tooltips[t].to(n[t])),
                      (E[t].innerHTML = i);
                  }
                });
            }
            function X() {
              ve("update" + D.aria),
                me("update" + D.aria, function (e, t, n, i, r) {
                  k.forEach(function (e) {
                    var t = f[e],
                      i = ye(P, e, 0, !0, !0, !0),
                      a = ye(P, e, 100, !0, !0, !0),
                      o = r[e],
                      l = String(s.ariaFormat.to(n[e]));
                    (i = A.fromStepping(i).toFixed(1)),
                      (a = A.fromStepping(a).toFixed(1)),
                      (o = A.fromStepping(o).toFixed(1)),
                      t.children[0].setAttribute("aria-valuemin", i),
                      t.children[0].setAttribute("aria-valuemax", a),
                      t.children[0].setAttribute("aria-valuenow", o),
                      t.children[0].setAttribute("aria-valuetext", l);
                  });
                });
            }
            function Y(t) {
              if (t.mode === e.PipsMode.Range || t.mode === e.PipsMode.Steps)
                return A.xVal;
              if (t.mode === e.PipsMode.Count) {
                if (t.values < 2)
                  throw new Error(
                    "noUiSlider: 'values' (>= 2) required for mode 'count'."
                  );
                for (var s = t.values - 1, n = 100 / s, i = []; s--; )
                  i[s] = s * n;
                return i.push(100), K(i, t.stepped);
              }
              return t.mode === e.PipsMode.Positions
                ? K(t.values, t.stepped)
                : t.mode === e.PipsMode.Values
                ? t.stepped
                  ? t.values.map(function (e) {
                      return A.fromStepping(A.getStep(A.toStepping(e)));
                    })
                  : t.values
                : [];
            }
            function K(e, t) {
              return e.map(function (e) {
                return A.fromStepping(t ? A.getStep(e) : e);
              });
            }
            function Q(t) {
              function s(e, t) {
                return Number((e + t).toFixed(7));
              }
              var n = Y(t),
                i = {},
                r = A.xVal[0],
                o = A.xVal[A.xVal.length - 1],
                l = !1,
                c = !1,
                d = 0;
              return (
                (n = a(
                  n.slice().sort(function (e, t) {
                    return e - t;
                  })
                ))[0] !== r && (n.unshift(r), (l = !0)),
                n[n.length - 1] !== o && (n.push(o), (c = !0)),
                n.forEach(function (r, a) {
                  var o,
                    u,
                    p,
                    f,
                    h,
                    m,
                    g,
                    v,
                    b,
                    y,
                    w = r,
                    S = n[a + 1],
                    x = t.mode === e.PipsMode.Steps;
                  for (
                    x && (o = A.xNumSteps[a]),
                      o || (o = S - w),
                      void 0 === S && (S = w),
                      o = Math.max(o, 1e-7),
                      u = w;
                    u <= S;
                    u = s(u, o)
                  ) {
                    for (
                      v = (h = (f = A.toStepping(u)) - d) / (t.density || 1),
                        y = h / (b = Math.round(v)),
                        p = 1;
                      p <= b;
                      p += 1
                    )
                      i[(m = d + p * y).toFixed(5)] = [A.fromStepping(m), 0];
                    (g =
                      n.indexOf(u) > -1
                        ? e.PipsType.LargeValue
                        : x
                        ? e.PipsType.SmallValue
                        : e.PipsType.NoValue),
                      !a && l && u !== S && (g = 0),
                      (u === S && c) || (i[f.toFixed(5)] = [u, g]),
                      (d = f);
                  }
                }),
                i
              );
            }
            function Z(t, n, i) {
              var r,
                a,
                o = $.createElement("div"),
                l =
                  (((r = {})[e.PipsType.None] = ""),
                  (r[e.PipsType.NoValue] = s.cssClasses.valueNormal),
                  (r[e.PipsType.LargeValue] = s.cssClasses.valueLarge),
                  (r[e.PipsType.SmallValue] = s.cssClasses.valueSub),
                  r),
                c =
                  (((a = {})[e.PipsType.None] = ""),
                  (a[e.PipsType.NoValue] = s.cssClasses.markerNormal),
                  (a[e.PipsType.LargeValue] = s.cssClasses.markerLarge),
                  (a[e.PipsType.SmallValue] = s.cssClasses.markerSub),
                  a),
                d = [s.cssClasses.valueHorizontal, s.cssClasses.valueVertical],
                u = [
                  s.cssClasses.markerHorizontal,
                  s.cssClasses.markerVertical,
                ];
              function p(e, t) {
                var n = t === s.cssClasses.value,
                  i = n ? l : c;
                return t + " " + (n ? d : u)[s.ort] + " " + i[e];
              }
              function f(t, r, a) {
                if ((a = n ? n(r, a) : a) !== e.PipsType.None) {
                  var l = q(o, !1);
                  (l.className = p(a, s.cssClasses.marker)),
                    (l.style[s.style] = t + "%"),
                    a > e.PipsType.NoValue &&
                      (((l = q(o, !1)).className = p(a, s.cssClasses.value)),
                      l.setAttribute("data-value", String(r)),
                      (l.style[s.style] = t + "%"),
                      (l.innerHTML = String(i.to(r))));
                }
              }
              return (
                h(o, s.cssClasses.pips),
                h(
                  o,
                  0 === s.ort
                    ? s.cssClasses.pipsHorizontal
                    : s.cssClasses.pipsVertical
                ),
                Object.keys(t).forEach(function (e) {
                  f(e, t[e][0], t[e][1]);
                }),
                o
              );
            }
            function J() {
              x && (n(x), (x = null));
            }
            function ee(e) {
              J();
              var t = Q(e),
                s = e.filter,
                n = e.format || {
                  to: function (e) {
                    return String(Math.round(e));
                  },
                };
              return (x = O.appendChild(Z(t, s, n)));
            }
            function te() {
              var e = c.getBoundingClientRect(),
                t = "offset" + ["Width", "Height"][s.ort];
              return 0 === s.ort ? e.width || c[t] : e.height || c[t];
            }
            function se(e, t, n, i) {
              var r = function (r) {
                  var a = ne(r, i.pageOffset, i.target || t);
                  return (
                    !!a &&
                    !(G() && !i.doNotReject) &&
                    !(g(O, s.cssClasses.tap) && !i.doNotReject) &&
                    !(e === C.start && void 0 !== a.buttons && a.buttons > 1) &&
                    (!i.hover || !a.buttons) &&
                    (T || a.preventDefault(),
                    (a.calcPoint = a.points[s.ort]),
                    void n(a, i))
                  );
                },
                a = [];
              return (
                e.split(" ").forEach(function (e) {
                  t.addEventListener(e, r, !!T && { passive: !0 }),
                    a.push([e, r]);
                }),
                a
              );
            }
            function ne(e, t, s) {
              var n = 0 === e.type.indexOf("touch"),
                i = 0 === e.type.indexOf("mouse"),
                r = 0 === e.type.indexOf("pointer"),
                a = 0,
                o = 0;
              if (
                (0 === e.type.indexOf("MSPointer") && (r = !0),
                "mousedown" === e.type && !e.buttons && !e.touches)
              )
                return !1;
              if (n) {
                var l = function (t) {
                  var n = t.target;
                  return (
                    n === s ||
                    s.contains(n) ||
                    (e.composed && e.composedPath().shift() === s)
                  );
                };
                if ("touchstart" === e.type) {
                  var c = Array.prototype.filter.call(e.touches, l);
                  if (c.length > 1) return !1;
                  (a = c[0].pageX), (o = c[0].pageY);
                } else {
                  var d = Array.prototype.find.call(e.changedTouches, l);
                  if (!d) return !1;
                  (a = d.pageX), (o = d.pageY);
                }
              }
              return (
                (t = t || v($)),
                (i || r) && ((a = e.clientX + t.x), (o = e.clientY + t.y)),
                (e.pageOffset = t),
                (e.points = [a, o]),
                (e.cursor = i || r),
                e
              );
            }
            function ie(e) {
              var t = (100 * (e - l(c, s.ort))) / te();
              return (t = u(t)), s.dir ? 100 - t : t;
            }
            function ae(e) {
              var t = 100,
                s = !1;
              return (
                f.forEach(function (n, i) {
                  if (!R(i)) {
                    var r = P[i],
                      a = Math.abs(r - e);
                    (a < t || (a <= t && e > r) || (100 === a && 100 === t)) &&
                      ((s = i), (t = a));
                  }
                }),
                s
              );
            }
            function oe(e, t) {
              "mouseout" === e.type &&
                "HTML" === e.target.nodeName &&
                null === e.relatedTarget &&
                ce(e, t);
            }
            function le(e, t) {
              if (
                -1 === navigator.appVersion.indexOf("MSIE 9") &&
                0 === e.buttons &&
                0 !== t.buttonsProperty
              )
                return ce(e, t);
              var n = (s.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
              Se(
                n > 0,
                (100 * n) / t.baseSize,
                t.locations,
                t.handleNumbers,
                t.connect
              );
            }
            function ce(e, t) {
              t.handle && (m(t.handle, s.cssClasses.active), (M -= 1)),
                t.listeners.forEach(function (e) {
                  I.removeEventListener(e[0], e[1]);
                }),
                0 === M &&
                  (m(O, s.cssClasses.drag),
                  Ce(),
                  e.cursor &&
                    ((N.style.cursor = ""),
                    N.removeEventListener("selectstart", r))),
                t.handleNumbers.forEach(function (e) {
                  be("change", e), be("set", e), be("end", e);
                });
            }
            function de(e, t) {
              if (!t.handleNumbers.some(R)) {
                var n;
                1 === t.handleNumbers.length &&
                  ((n = f[t.handleNumbers[0]].children[0]),
                  (M += 1),
                  h(n, s.cssClasses.active)),
                  e.stopPropagation();
                var i = [],
                  a = se(C.move, I, le, {
                    target: e.target,
                    handle: n,
                    connect: t.connect,
                    listeners: i,
                    startCalcPoint: e.calcPoint,
                    baseSize: te(),
                    pageOffset: e.pageOffset,
                    handleNumbers: t.handleNumbers,
                    buttonsProperty: e.buttons,
                    locations: P.slice(),
                  }),
                  o = se(C.end, I, ce, {
                    target: e.target,
                    handle: n,
                    listeners: i,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  }),
                  l = se("mouseout", I, oe, {
                    target: e.target,
                    handle: n,
                    listeners: i,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  });
                i.push.apply(i, a.concat(o, l)),
                  e.cursor &&
                    ((N.style.cursor = getComputedStyle(e.target).cursor),
                    f.length > 1 && h(O, s.cssClasses.drag),
                    N.addEventListener("selectstart", r, !1)),
                  t.handleNumbers.forEach(function (e) {
                    be("start", e);
                  });
              }
            }
            function ue(e) {
              e.stopPropagation();
              var t = ie(e.calcPoint),
                n = ae(t);
              !1 !== n &&
                (s.events.snap || d(O, s.cssClasses.tap, s.animationDuration),
                Te(n, t, !0, !0),
                Ce(),
                be("slide", n, !0),
                be("update", n, !0),
                s.events.snap
                  ? de(e, { handleNumbers: [n] })
                  : (be("change", n, !0), be("set", n, !0)));
            }
            function pe(e) {
              var t = ie(e.calcPoint),
                s = A.getStep(t),
                n = A.fromStepping(s);
              Object.keys(_).forEach(function (e) {
                "hover" === e.split(".")[0] &&
                  _[e].forEach(function (e) {
                    e.call(Ve, n);
                  });
              });
            }
            function fe(e, t) {
              if (G() || R(t)) return !1;
              var n = ["Left", "Right"],
                i = ["Down", "Up"],
                r = ["PageDown", "PageUp"],
                a = ["Home", "End"];
              s.dir && !s.ort
                ? n.reverse()
                : s.ort && !s.dir && (i.reverse(), r.reverse());
              var o,
                l = e.key.replace("Arrow", ""),
                c = l === r[0],
                d = l === r[1],
                u = l === i[0] || l === n[0] || c,
                p = l === i[1] || l === n[1] || d,
                f = l === a[0],
                h = l === a[1];
              if (!(u || p || f || h)) return !0;
              if ((e.preventDefault(), p || u)) {
                var m = u ? 0 : 1,
                  g = $e(t)[m];
                if (null === g) return !1;
                !1 === g &&
                  (g = A.getDefaultStep(P[t], u, s.keyboardDefaultStep)),
                  (g *=
                    d || c ? s.keyboardPageMultiplier : s.keyboardMultiplier),
                  (g = Math.max(g, 1e-7)),
                  (g *= u ? -1 : 1),
                  (o = L[t] + g);
              } else
                o = h
                  ? s.spectrum.xVal[s.spectrum.xVal.length - 1]
                  : s.spectrum.xVal[0];
              return (
                Te(t, A.toStepping(o), !0, !0),
                be("slide", t),
                be("update", t),
                be("change", t),
                be("set", t),
                !1
              );
            }
            function he(e) {
              e.fixed ||
                f.forEach(function (e, t) {
                  se(C.start, e.children[0], de, { handleNumbers: [t] });
                }),
                e.tap && se(C.start, c, ue, {}),
                e.hover && se(C.move, c, pe, { hover: !0 }),
                e.drag &&
                  S.forEach(function (t, n) {
                    if (!1 !== t && 0 !== n && n !== S.length - 1) {
                      var i = f[n - 1],
                        r = f[n],
                        a = [t],
                        o = [i, r],
                        l = [n - 1, n];
                      h(t, s.cssClasses.draggable),
                        e.fixed &&
                          (a.push(i.children[0]), a.push(r.children[0])),
                        e.dragAll && ((o = f), (l = k)),
                        a.forEach(function (e) {
                          se(C.start, e, de, {
                            handles: o,
                            handleNumbers: l,
                            connect: t,
                          });
                        });
                    }
                  });
            }
            function me(e, t) {
              (_[e] = _[e] || []),
                _[e].push(t),
                "update" === e.split(".")[0] &&
                  f.forEach(function (e, t) {
                    be("update", t);
                  });
            }
            function ge(e) {
              return e === D.aria || e === D.tooltips;
            }
            function ve(e) {
              var t = e && e.split(".")[0],
                s = t ? e.substring(t.length) : e;
              Object.keys(_).forEach(function (e) {
                var n = e.split(".")[0],
                  i = e.substring(n.length);
                (t && t !== n) ||
                  (s && s !== i) ||
                  (ge(i) && s !== i) ||
                  delete _[e];
              });
            }
            function be(e, t, n) {
              Object.keys(_).forEach(function (i) {
                var r = i.split(".")[0];
                e === r &&
                  _[i].forEach(function (e) {
                    e.call(
                      Ve,
                      L.map(s.format.to),
                      t,
                      L.slice(),
                      n || !1,
                      P.slice(),
                      Ve
                    );
                  });
              });
            }
            function ye(e, t, n, i, r, a) {
              var o;
              return (
                f.length > 1 &&
                  !s.events.unconstrained &&
                  (i &&
                    t > 0 &&
                    ((o = A.getAbsoluteDistance(e[t - 1], s.margin, !1)),
                    (n = Math.max(n, o))),
                  r &&
                    t < f.length - 1 &&
                    ((o = A.getAbsoluteDistance(e[t + 1], s.margin, !0)),
                    (n = Math.min(n, o)))),
                f.length > 1 &&
                  s.limit &&
                  (i &&
                    t > 0 &&
                    ((o = A.getAbsoluteDistance(e[t - 1], s.limit, !1)),
                    (n = Math.min(n, o))),
                  r &&
                    t < f.length - 1 &&
                    ((o = A.getAbsoluteDistance(e[t + 1], s.limit, !0)),
                    (n = Math.max(n, o)))),
                s.padding &&
                  (0 === t &&
                    ((o = A.getAbsoluteDistance(0, s.padding[0], !1)),
                    (n = Math.max(n, o))),
                  t === f.length - 1 &&
                    ((o = A.getAbsoluteDistance(100, s.padding[1], !0)),
                    (n = Math.min(n, o)))),
                !((n = u((n = A.getStep(n)))) === e[t] && !a) && n
              );
            }
            function we(e, t) {
              var n = s.ort;
              return (n ? t : e) + ", " + (n ? e : t);
            }
            function Se(e, t, s, n, i) {
              var r = s.slice(),
                a = n[0],
                o = [!e, e],
                l = [e, !e];
              (n = n.slice()),
                e && n.reverse(),
                n.length > 1
                  ? n.forEach(function (e, s) {
                      var n = ye(r, e, r[e] + t, o[s], l[s], !1);
                      !1 === n ? (t = 0) : ((t = n - r[e]), (r[e] = n));
                    })
                  : (o = l = [!0]);
              var c = !1;
              n.forEach(function (e, n) {
                c = Te(e, s[e] + t, o[n], l[n]) || c;
              }),
                c &&
                  (n.forEach(function (e) {
                    be("update", e), be("slide", e);
                  }),
                  null != i && be("drag", a));
            }
            function xe(e, t) {
              return s.dir ? 100 - e - t : e;
            }
            function Ee(e, t) {
              (P[e] = t), (L[e] = A.fromStepping(t));
              var n = "translate(" + we(xe(t, 0) - V + "%", "0") + ")";
              (f[e].style[s.transformRule] = n), Oe(e), Oe(e + 1);
            }
            function Ce() {
              k.forEach(function (e) {
                var t = P[e] > 50 ? -1 : 1,
                  s = 3 + (f.length + t * e);
                f[e].style.zIndex = String(s);
              });
            }
            function Te(e, t, s, n, i) {
              return (
                i || (t = ye(P, e, t, s, n, !1)), !1 !== t && (Ee(e, t), !0)
              );
            }
            function Oe(e) {
              if (S[e]) {
                var t = 0,
                  n = 100;
                0 !== e && (t = P[e - 1]), e !== S.length - 1 && (n = P[e]);
                var i = n - t,
                  r = "translate(" + we(xe(t, i) + "%", "0") + ")",
                  a = "scale(" + we(i / 100, "1") + ")";
                S[e].style[s.transformRule] = r + " " + a;
              }
            }
            function Ae(e, t) {
              return null === e || !1 === e || void 0 === e
                ? P[t]
                : ("number" == typeof e && (e = String(e)),
                  !1 !== (e = s.format.from(e)) && (e = A.toStepping(e)),
                  !1 === e || isNaN(e) ? P[t] : e);
            }
            function Le(e, t, n) {
              var i = p(e),
                r = void 0 === P[0];
              (t = void 0 === t || t),
                s.animate && !r && d(O, s.cssClasses.tap, s.animationDuration),
                k.forEach(function (e) {
                  Te(e, Ae(i[e], e), !0, !1, n);
                });
              var a = 1 === k.length ? 0 : 1;
              if (r && A.hasNoSize() && ((n = !0), (P[0] = 0), k.length > 1)) {
                var o = 100 / (k.length - 1);
                k.forEach(function (e) {
                  P[e] = e * o;
                });
              }
              for (; a < k.length; ++a)
                k.forEach(function (e) {
                  Te(e, P[e], !0, !0, n);
                });
              Ce(),
                k.forEach(function (e) {
                  be("update", e), null !== i[e] && t && be("set", e);
                });
            }
            function Pe(e) {
              Le(s.start, e);
            }
            function ke(e, t, s, n) {
              if (!((e = Number(e)) >= 0 && e < k.length))
                throw new Error("noUiSlider: invalid handle number, got: " + e);
              Te(e, Ae(t, e), !0, !0, n), be("update", e), s && be("set", e);
            }
            function Me(e) {
              if ((void 0 === e && (e = !1), e))
                return 1 === L.length ? L[0] : L.slice(0);
              var t = L.map(s.format.to);
              return 1 === t.length ? t[0] : t;
            }
            function _e() {
              for (
                ve(D.aria),
                  ve(D.tooltips),
                  Object.keys(s.cssClasses).forEach(function (e) {
                    m(O, s.cssClasses[e]);
                  });
                O.firstChild;

              )
                O.removeChild(O.firstChild);
              delete O.noUiSlider;
            }
            function $e(e) {
              var t = P[e],
                n = A.getNearbySteps(t),
                i = L[e],
                r = n.thisStep.step,
                a = null;
              if (s.snap)
                return [
                  i - n.stepBefore.startValue || null,
                  n.stepAfter.startValue - i || null,
                ];
              !1 !== r &&
                i + r > n.stepAfter.startValue &&
                (r = n.stepAfter.startValue - i),
                (a =
                  i > n.thisStep.startValue
                    ? n.thisStep.step
                    : !1 !== n.stepBefore.step && i - n.stepBefore.highestStep),
                100 === t ? (r = null) : 0 === t && (a = null);
              var o = A.countStepDecimals();
              return (
                null !== r && !1 !== r && (r = Number(r.toFixed(o))),
                null !== a && !1 !== a && (a = Number(a.toFixed(o))),
                [a, r]
              );
            }
            function De() {
              return k.map($e);
            }
            function Ie(e, t) {
              var n = Me(),
                r = [
                  "margin",
                  "limit",
                  "padding",
                  "range",
                  "animate",
                  "snap",
                  "step",
                  "format",
                  "pips",
                  "tooltips",
                ];
              r.forEach(function (t) {
                void 0 !== e[t] && (o[t] = e[t]);
              });
              var a = re(o);
              r.forEach(function (t) {
                void 0 !== e[t] && (s[t] = a[t]);
              }),
                (A = a.spectrum),
                (s.margin = a.margin),
                (s.limit = a.limit),
                (s.padding = a.padding),
                s.pips ? ee(s.pips) : J(),
                s.tooltips ? U() : W(),
                (P = []),
                Le(i(e.start) ? e.start : n, t);
            }
            function Ne() {
              (c = H(O)),
                z(s.connect, c),
                he(s.events),
                Le(s.start),
                s.pips && ee(s.pips),
                s.tooltips && U(),
                X();
            }
            Ne();
            var Ve = {
              destroy: _e,
              steps: De,
              on: me,
              off: ve,
              get: Me,
              set: Le,
              setHandle: ke,
              reset: Pe,
              __moveHandles: function (e, t, s) {
                Se(e, t, P, s);
              },
              options: o,
              updateOptions: Ie,
              target: O,
              removePips: J,
              removeTooltips: W,
              getPositions: function () {
                return P.slice();
              },
              getTooltips: function () {
                return E;
              },
              getOrigins: function () {
                return f;
              },
              pips: ee,
            };
            return Ve;
          }
          function oe(e, t) {
            if (!e || !e.nodeName)
              throw new Error(
                "noUiSlider: create requires a single element, got: " + e
              );
            if (e.noUiSlider)
              throw new Error("noUiSlider: Slider was already initialized.");
            var s = ae(e, re(t), t);
            return (e.noUiSlider = s), s;
          }
          var le = { __spectrum: M, cssClasses: $, create: oe };
          (e.create = oe),
            (e.cssClasses = $),
            (e.default = le),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })(t);
      },
    },
    t = {};
  function s(n) {
    var i = t[n];
    if (void 0 !== i) return i.exports;
    var r = (t[n] = { exports: {} });
    return e[n].call(r.exports, r, r.exports, s), r.exports;
  }
  (() => {
    "use strict";
    function e(e) {
      this.type = e;
    }
    (e.prototype.init = function () {
      const e = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          s = t.dataset.da.trim().split(","),
          n = {};
        (n.element = t),
          (n.parent = t.parentNode),
          (n.destination = document.querySelector(s[0].trim())),
          (n.breakpoint = s[1] ? s[1].trim() : "767"),
          (n.place = s[2] ? s[2].trim() : "last"),
          (n.index = this.indexInParent(n.parent, n.element)),
          this.оbjects.push(n);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, s) {
            return Array.prototype.indexOf.call(s, e) === t;
          }
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const s = this.mediaQueries[t],
          n = String.prototype.split.call(s, ","),
          i = window.matchMedia(n[0]),
          r = n[1],
          a = Array.prototype.filter.call(this.оbjects, function (e) {
            return e.breakpoint === r;
          });
        i.addListener(function () {
          e.mediaHandler(i, a);
        }),
          this.mediaHandler(i, a);
      }
    }),
      (e.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            (s.index = this.indexInParent(s.parent, s.element)),
              this.moveTo(s.place, s.element, s.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            s.element.classList.contains(this.daClassname) &&
              this.moveBack(s.parent, s.element, s.index);
          }
      }),
      (e.prototype.moveTo = function (e, t, s) {
        t.classList.add(this.daClassname),
          "last" === e || e >= s.children.length
            ? s.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? s.children[e].insertAdjacentElement("beforebegin", t)
            : s.insertAdjacentElement("afterbegin", t);
      }),
      (e.prototype.moveBack = function (e, t, s) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[s]
            ? e.children[s].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (e.prototype.indexInParent = function (e, t) {
        const s = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(s, t);
      }),
      (e.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new e("max").init();
    class t {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          document.querySelector("form[data-ajax],form[data-dev]") &&
            document.addEventListener(
              "formSent",
              function (e) {
                const t = e.detail.form.dataset.popupMessage;
                t && this.open(t);
              }.bind(this)
            ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const s = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${s}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : o(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. "
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            a &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              o(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          s = Array.prototype.slice.call(t),
          n = s.indexOf(document.activeElement);
        e.shiftKey && 0 === n && (s[s.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            n !== s.length - 1 ||
            (s[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && d(`[Попапос]: ${e}`);
      }
    }
    let n = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t));
      },
      i = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let n = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = n + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t);
        }
      },
      r = (e, t = 500) => (e.hidden ? i(e, t) : n(e, t)),
      a = !0,
      o = (e = 500) => {
        document.documentElement.classList.contains("lock") ? l(e) : c(e);
      },
      l = (e = 500) => {
        let t = document.querySelector("body");
        if (a) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (a = !1),
            setTimeout(function () {
              a = !0;
            }, e);
        }
      },
      c = (e = 500) => {
        let t = document.querySelector("body");
        if (a) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (a = !1),
            setTimeout(function () {
              a = !0;
            }, e);
        }
      };
    function d(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function u(e, t) {
      const s = Array.from(e).filter(function (e, s, n) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const n = {},
            i = s.dataset[t].split(",");
          (n.value = i[0]),
            (n.type = i[1] ? i[1].trim() : "max"),
            (n.item = s),
            e.push(n);
        });
        let n = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        n = (function (e) {
          return e.filter(function (e, t, s) {
            return s.indexOf(e) === t;
          });
        })(n);
        const i = [];
        if (n.length)
          return (
            n.forEach((t) => {
              const s = t.split(","),
                n = s[1],
                r = s[2],
                a = window.matchMedia(s[0]),
                o = e.filter(function (e) {
                  if (e.value === n && e.type === r) return !0;
                });
              i.push({ itemsArray: o, matchMedia: a });
            }),
            i
          );
      }
    }
    class p {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          (this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
          }),
          (this._this = this),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("select");
          e.length
            ? (this.selectsInit(e),
              this.setLogging(`Проснулся, построил селектов: (${e.length})`))
            : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
        }
      }
      getSelectClass(e) {
        return `.${e}`;
      }
      getSelectElement(e, t) {
        return {
          originalSelect: e.querySelector("select"),
          selectElement: e.querySelector(this.getSelectClass(t)),
        };
      }
      selectsInit(e) {
        e.forEach((e, t) => {
          this.selectInit(e, t + 1);
        }),
          document.addEventListener(
            "click",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          );
      }
      selectInit(e, t) {
        const s = this;
        let n = document.createElement("div");
        if (
          (n.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(n, e),
          n.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          n.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            n,
            this.selectClasses.classSelectTitle
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(e).label.text
                ? this.getSelectPlaceholder(e).label.text
                : this.getSelectPlaceholder(e).value
            }</span>`
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", function (e) {
            s.selectChange(e);
          });
      }
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
          ),
          e.multiple
            ? t.classList.add(this.selectClasses.classSelectMultiple)
            : t.classList.remove(this.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(this.selectClasses.classSelectCheckBox)
            : t.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(t, e),
          this.setOptions(t, e),
          e.hasAttribute("data-search") && this.searchActions(t),
          e.hasAttribute("data-open") && this.selectAction(t),
          this.selectDisabled(t, e);
      }
      selectsActions(e) {
        const t = e.target,
          s = e.type;
        if (
          t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const n = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ).dataset.selectId
                  }"]`
                ),
            i = this.getSelectElement(n).originalSelect;
          if ("click" === s) {
            if (!i.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ),
                  s = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                  );
                this.optionAction(n, i, s);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle)
                )
              )
                this.selectAction(n);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                )
              ) {
                const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                );
                this.optionAction(n, i, e);
              }
          } else
            "focusin" === s || "focusout" === s
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect)
                ) &&
                ("focusin" === s
                  ? n.classList.add(this.selectClasses.classSelectFocus)
                  : n.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === s && "Escape" === e.code && this.selectsСlose();
        } else this.selectsСlose();
      }
      selectsСlose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
        );
        e.length &&
          e.forEach((e) => {
            this.selectAction(e);
          });
      }
      selectAction(e) {
        const t = this.getSelectElement(e).originalSelect,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement;
        s.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          r(s, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const s = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody
          ).selectElement,
          n = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement;
        n && n.remove(),
          s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
      }
      getSelectTitleValue(e, t) {
        let s = this.getSelectedOptionsData(t, 2).html;
        if (
          (t.multiple &&
            t.hasAttribute("data-tags") &&
            ((s = this.getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${
                    e.dataset.id
                  }" data-value="${
                    t.value
                  }" class="_select-tag">${this.getSelectElementContent(
                    t
                  )}</span>`
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = s),
              t.hasAttribute("data-search") && (s = !1))),
          (s = s.length ? s : t.dataset.placeholder),
          this.getSelectedOptionsData(t).values.length
            ? e.classList.add(this.selectClasses.classSelectActive)
            : e.classList.remove(this.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            this.getSelectedOptionsData(t).elements.length &&
            this.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
        }
      }
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let n = "";
        return (
          (n += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (n += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (n += t ? s : ""),
          (n += t ? "</span>" : ""),
          (n += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (n += e.textContent),
          (n += t ? "</span>" : ""),
          (n += t ? "</span>" : ""),
          n
        );
      }
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      }
      getSelectedOptionsData(e, t) {
        let s = [];
        return (
          e.multiple
            ? (s = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : s.push(e.options[e.selectedIndex]),
          {
            elements: s.map((e) => e),
            values: s.filter((e) => e.value).map((e) => e.value),
            html: s.map((e) => this.getSelectElementContent(e)),
          }
        );
      }
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          s = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          n = Array.from(e.options);
        if (n.length > 0) {
          let i = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (n = n.filter((e) => e.value)),
            (i += t
              ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            n.forEach((t) => {
              i += this.getOption(t, e);
            }),
            (i += t ? "</div>" : ""),
            i
          );
        }
      }
      getOption(e, t) {
        const s =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          n =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          i = e.dataset.class ? ` ${e.dataset.class}` : "",
          r = !!e.dataset.href && e.dataset.href,
          a = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let o = "";
        return (
          (o += r
            ? `<a ${a} ${n} href="${r}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${i}${s}">`
            : `<button ${n} class="${this.selectClasses.classSelectOption}${i}${s}" data-value="${e.value}" type="button">`),
          (o += this.getSelectElementContent(e)),
          (o += r ? "</a>" : "</button>"),
          o
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, s) {
        if (t.multiple) {
          s.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected)
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected"
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ) &&
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ).hidden = !1),
            (s.hidden = !0)),
            (t.value = s.hasAttribute("data-value")
              ? s.dataset.value
              : s.textContent),
            this.selectAction(e);
        this.setSelectTitleValue(e, t), this.setSelectChange(t);
      }
      selectChange(e) {
        const t = e.target;
        this.selectBuild(t), this.setSelectChange(t);
      }
      setSelectChange(e) {
        if (
          (e.hasAttribute("data-validate") && h.validateInput(e),
          e.hasAttribute("data-submit") && e.value)
        ) {
          let t = document.createElement("button");
          (t.type = "submit"),
            e.closest("form").append(t),
            t.click(),
            t.remove();
        }
        const t = e.parentElement;
        this.selectCallback(t, e);
      }
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !0))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement,
          n = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          i = this;
        t.addEventListener("input", function () {
          n.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === s.hidden && i.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } })
        );
      }
      setLogging(e) {
        this.config.logging && d(`[select]: ${e}`);
      }
    }
    const f = { inputMaskModule: null, selectModule: null };
    let h = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let t = e.querySelectorAll("input,textarea");
            for (let e = 0; e < t.length; e++) {
              const s = t[e];
              s.parentElement.classList.remove("_form-focus"),
                s.classList.remove("_form-focus"),
                h.removeError(s),
                (s.value = s.dataset.placeholder);
            }
            let s = e.querySelectorAll(".checkbox__input");
            if (s.length > 0)
              for (let e = 0; e < s.length; e++) {
                s[e].checked = !1;
              }
            if (f.selectModule) {
              let t = e.querySelectorAll(".select");
              if (t.length)
                for (let e = 0; e < t.length; e++) {
                  const s = t[e].querySelector("select");
                  f.selectModule.selectBuild(s);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    var m = s(211);
    function g(e) {
      if (null == e) return window;
      if ("[object Window]" !== e.toString()) {
        var t = e.ownerDocument;
        return (t && t.defaultView) || window;
      }
      return e;
    }
    function v(e) {
      return e instanceof g(e).Element || e instanceof Element;
    }
    function b(e) {
      return e instanceof g(e).HTMLElement || e instanceof HTMLElement;
    }
    function y(e) {
      return (
        "undefined" != typeof ShadowRoot &&
        (e instanceof g(e).ShadowRoot || e instanceof ShadowRoot)
      );
    }
    !(function () {
      const e = document.querySelectorAll("[data-range]");
      e.length &&
        e.forEach((e) => {
          const t = e.querySelector("[data-range-from]"),
            s = e.querySelector("[data-range-to]"),
            n = e.querySelector("[data-range-item]");
          m.create(n, {
            start: [Number(t.value), Number(s.value)],
            connect: !0,
            tooltips: [!0, !0],
            range: {
              min: [Number(t.dataset.rangeFrom)],
              max: [Number(s.dataset.rangeTo)],
            },
          }),
            n.noUiSlider.on("update", function (e, n) {
              (t.value = e[n]), (s.value = e[n]);
            });
        });
    })();
    var w = Math.max,
      S = Math.min,
      x = Math.round;
    function E(e, t) {
      void 0 === t && (t = !1);
      var s = e.getBoundingClientRect(),
        n = 1,
        i = 1;
      if (b(e) && t) {
        var r = e.offsetHeight,
          a = e.offsetWidth;
        a > 0 && (n = x(s.width) / a || 1), r > 0 && (i = x(s.height) / r || 1);
      }
      return {
        width: s.width / n,
        height: s.height / i,
        top: s.top / i,
        right: s.right / n,
        bottom: s.bottom / i,
        left: s.left / n,
        x: s.left / n,
        y: s.top / i,
      };
    }
    function C(e) {
      var t = g(e);
      return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
    }
    function T(e) {
      return e ? (e.nodeName || "").toLowerCase() : null;
    }
    function O(e) {
      return ((v(e) ? e.ownerDocument : e.document) || window.document)
        .documentElement;
    }
    function A(e) {
      return E(O(e)).left + C(e).scrollLeft;
    }
    function L(e) {
      return g(e).getComputedStyle(e);
    }
    function P(e) {
      var t = L(e),
        s = t.overflow,
        n = t.overflowX,
        i = t.overflowY;
      return /auto|scroll|overlay|hidden/.test(s + i + n);
    }
    function k(e, t, s) {
      void 0 === s && (s = !1);
      var n,
        i,
        r = b(t),
        a =
          b(t) &&
          (function (e) {
            var t = e.getBoundingClientRect(),
              s = x(t.width) / e.offsetWidth || 1,
              n = x(t.height) / e.offsetHeight || 1;
            return 1 !== s || 1 !== n;
          })(t),
        o = O(t),
        l = E(e, a),
        c = { scrollLeft: 0, scrollTop: 0 },
        d = { x: 0, y: 0 };
      return (
        (r || (!r && !s)) &&
          (("body" !== T(t) || P(o)) &&
            (c =
              (n = t) !== g(n) && b(n)
                ? { scrollLeft: (i = n).scrollLeft, scrollTop: i.scrollTop }
                : C(n)),
          b(t)
            ? (((d = E(t, !0)).x += t.clientLeft), (d.y += t.clientTop))
            : o && (d.x = A(o))),
        {
          x: l.left + c.scrollLeft - d.x,
          y: l.top + c.scrollTop - d.y,
          width: l.width,
          height: l.height,
        }
      );
    }
    function M(e) {
      var t = E(e),
        s = e.offsetWidth,
        n = e.offsetHeight;
      return (
        Math.abs(t.width - s) <= 1 && (s = t.width),
        Math.abs(t.height - n) <= 1 && (n = t.height),
        { x: e.offsetLeft, y: e.offsetTop, width: s, height: n }
      );
    }
    function _(e) {
      return "html" === T(e)
        ? e
        : e.assignedSlot || e.parentNode || (y(e) ? e.host : null) || O(e);
    }
    function $(e) {
      return ["html", "body", "#document"].indexOf(T(e)) >= 0
        ? e.ownerDocument.body
        : b(e) && P(e)
        ? e
        : $(_(e));
    }
    function D(e, t) {
      var s;
      void 0 === t && (t = []);
      var n = $(e),
        i = n === (null == (s = e.ownerDocument) ? void 0 : s.body),
        r = g(n),
        a = i ? [r].concat(r.visualViewport || [], P(n) ? n : []) : n,
        o = t.concat(a);
      return i ? o : o.concat(D(_(a)));
    }
    function I(e) {
      return ["table", "td", "th"].indexOf(T(e)) >= 0;
    }
    function N(e) {
      return b(e) && "fixed" !== L(e).position ? e.offsetParent : null;
    }
    function V(e) {
      for (var t = g(e), s = N(e); s && I(s) && "static" === L(s).position; )
        s = N(s);
      return s &&
        ("html" === T(s) || ("body" === T(s) && "static" === L(s).position))
        ? t
        : s ||
            (function (e) {
              var t =
                -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
              if (
                -1 !== navigator.userAgent.indexOf("Trident") &&
                b(e) &&
                "fixed" === L(e).position
              )
                return null;
              for (var s = _(e); b(s) && ["html", "body"].indexOf(T(s)) < 0; ) {
                var n = L(s);
                if (
                  "none" !== n.transform ||
                  "none" !== n.perspective ||
                  "paint" === n.contain ||
                  -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                  (t && "filter" === n.willChange) ||
                  (t && n.filter && "none" !== n.filter)
                )
                  return s;
                s = s.parentNode;
              }
              return null;
            })(e) ||
            t;
    }
    var q = "top",
      B = "bottom",
      j = "right",
      z = "left",
      H = "auto",
      F = [q, B, j, z],
      G = "start",
      R = "end",
      W = "viewport",
      U = "popper",
      X = F.reduce(function (e, t) {
        return e.concat([t + "-" + G, t + "-" + R]);
      }, []),
      Y = [].concat(F, [H]).reduce(function (e, t) {
        return e.concat([t, t + "-" + G, t + "-" + R]);
      }, []),
      K = [
        "beforeRead",
        "read",
        "afterRead",
        "beforeMain",
        "main",
        "afterMain",
        "beforeWrite",
        "write",
        "afterWrite",
      ];
    function Q(e) {
      var t = new Map(),
        s = new Set(),
        n = [];
      function i(e) {
        s.add(e.name),
          []
            .concat(e.requires || [], e.requiresIfExists || [])
            .forEach(function (e) {
              if (!s.has(e)) {
                var n = t.get(e);
                n && i(n);
              }
            }),
          n.push(e);
      }
      return (
        e.forEach(function (e) {
          t.set(e.name, e);
        }),
        e.forEach(function (e) {
          s.has(e.name) || i(e);
        }),
        n
      );
    }
    var Z = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function J() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      return !t.some(function (e) {
        return !(e && "function" == typeof e.getBoundingClientRect);
      });
    }
    function ee(e) {
      void 0 === e && (e = {});
      var t = e,
        s = t.defaultModifiers,
        n = void 0 === s ? [] : s,
        i = t.defaultOptions,
        r = void 0 === i ? Z : i;
      return function (e, t, s) {
        void 0 === s && (s = r);
        var i,
          a,
          o = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, Z, r),
            modifiersData: {},
            elements: { reference: e, popper: t },
            attributes: {},
            styles: {},
          },
          l = [],
          c = !1,
          d = {
            state: o,
            setOptions: function (s) {
              var i = "function" == typeof s ? s(o.options) : s;
              u(),
                (o.options = Object.assign({}, r, o.options, i)),
                (o.scrollParents = {
                  reference: v(e)
                    ? D(e)
                    : e.contextElement
                    ? D(e.contextElement)
                    : [],
                  popper: D(t),
                });
              var a = (function (e) {
                var t = Q(e);
                return K.reduce(function (e, s) {
                  return e.concat(
                    t.filter(function (e) {
                      return e.phase === s;
                    })
                  );
                }, []);
              })(
                (function (e) {
                  var t = e.reduce(function (e, t) {
                    var s = e[t.name];
                    return (
                      (e[t.name] = s
                        ? Object.assign({}, s, t, {
                            options: Object.assign({}, s.options, t.options),
                            data: Object.assign({}, s.data, t.data),
                          })
                        : t),
                      e
                    );
                  }, {});
                  return Object.keys(t).map(function (e) {
                    return t[e];
                  });
                })([].concat(n, o.options.modifiers))
              );
              return (
                (o.orderedModifiers = a.filter(function (e) {
                  return e.enabled;
                })),
                o.orderedModifiers.forEach(function (e) {
                  var t = e.name,
                    s = e.options,
                    n = void 0 === s ? {} : s,
                    i = e.effect;
                  if ("function" == typeof i) {
                    var r = i({ state: o, name: t, instance: d, options: n }),
                      a = function () {};
                    l.push(r || a);
                  }
                }),
                d.update()
              );
            },
            forceUpdate: function () {
              if (!c) {
                var e = o.elements,
                  t = e.reference,
                  s = e.popper;
                if (J(t, s)) {
                  (o.rects = {
                    reference: k(t, V(s), "fixed" === o.options.strategy),
                    popper: M(s),
                  }),
                    (o.reset = !1),
                    (o.placement = o.options.placement),
                    o.orderedModifiers.forEach(function (e) {
                      return (o.modifiersData[e.name] = Object.assign(
                        {},
                        e.data
                      ));
                    });
                  for (var n = 0; n < o.orderedModifiers.length; n++)
                    if (!0 !== o.reset) {
                      var i = o.orderedModifiers[n],
                        r = i.fn,
                        a = i.options,
                        l = void 0 === a ? {} : a,
                        u = i.name;
                      "function" == typeof r &&
                        (o =
                          r({ state: o, options: l, name: u, instance: d }) ||
                          o);
                    } else (o.reset = !1), (n = -1);
                }
              }
            },
            update:
              ((i = function () {
                return new Promise(function (e) {
                  d.forceUpdate(), e(o);
                });
              }),
              function () {
                return (
                  a ||
                    (a = new Promise(function (e) {
                      Promise.resolve().then(function () {
                        (a = void 0), e(i());
                      });
                    })),
                  a
                );
              }),
            destroy: function () {
              u(), (c = !0);
            },
          };
        if (!J(e, t)) return d;
        function u() {
          l.forEach(function (e) {
            return e();
          }),
            (l = []);
        }
        return (
          d.setOptions(s).then(function (e) {
            !c && s.onFirstUpdate && s.onFirstUpdate(e);
          }),
          d
        );
      };
    }
    var te = { passive: !0 };
    const se = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (e) {
        var t = e.state,
          s = e.instance,
          n = e.options,
          i = n.scroll,
          r = void 0 === i || i,
          a = n.resize,
          o = void 0 === a || a,
          l = g(t.elements.popper),
          c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return (
          r &&
            c.forEach(function (e) {
              e.addEventListener("scroll", s.update, te);
            }),
          o && l.addEventListener("resize", s.update, te),
          function () {
            r &&
              c.forEach(function (e) {
                e.removeEventListener("scroll", s.update, te);
              }),
              o && l.removeEventListener("resize", s.update, te);
          }
        );
      },
      data: {},
    };
    function ne(e) {
      return e.split("-")[0];
    }
    function ie(e) {
      return e.split("-")[1];
    }
    function re(e) {
      return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
    }
    function ae(e) {
      var t,
        s = e.reference,
        n = e.element,
        i = e.placement,
        r = i ? ne(i) : null,
        a = i ? ie(i) : null,
        o = s.x + s.width / 2 - n.width / 2,
        l = s.y + s.height / 2 - n.height / 2;
      switch (r) {
        case q:
          t = { x: o, y: s.y - n.height };
          break;
        case B:
          t = { x: o, y: s.y + s.height };
          break;
        case j:
          t = { x: s.x + s.width, y: l };
          break;
        case z:
          t = { x: s.x - n.width, y: l };
          break;
        default:
          t = { x: s.x, y: s.y };
      }
      var c = r ? re(r) : null;
      if (null != c) {
        var d = "y" === c ? "height" : "width";
        switch (a) {
          case G:
            t[c] = t[c] - (s[d] / 2 - n[d] / 2);
            break;
          case R:
            t[c] = t[c] + (s[d] / 2 - n[d] / 2);
        }
      }
      return t;
    }
    var oe = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function le(e) {
      var t,
        s = e.popper,
        n = e.popperRect,
        i = e.placement,
        r = e.variation,
        a = e.offsets,
        o = e.position,
        l = e.gpuAcceleration,
        c = e.adaptive,
        d = e.roundOffsets,
        u = e.isFixed,
        p = a.x,
        f = void 0 === p ? 0 : p,
        h = a.y,
        m = void 0 === h ? 0 : h,
        v = "function" == typeof d ? d({ x: f, y: m }) : { x: f, y: m };
      (f = v.x), (m = v.y);
      var b = a.hasOwnProperty("x"),
        y = a.hasOwnProperty("y"),
        w = z,
        S = q,
        E = window;
      if (c) {
        var C = V(s),
          T = "clientHeight",
          A = "clientWidth";
        if (
          (C === g(s) &&
            "static" !== L((C = O(s))).position &&
            "absolute" === o &&
            ((T = "scrollHeight"), (A = "scrollWidth")),
          (C = C),
          i === q || ((i === z || i === j) && r === R))
        )
          (S = B),
            (m -=
              (u && E.visualViewport ? E.visualViewport.height : C[T]) -
              n.height),
            (m *= l ? 1 : -1);
        if (i === z || ((i === q || i === B) && r === R))
          (w = j),
            (f -=
              (u && E.visualViewport ? E.visualViewport.width : C[A]) -
              n.width),
            (f *= l ? 1 : -1);
      }
      var P,
        k = Object.assign({ position: o }, c && oe),
        M =
          !0 === d
            ? (function (e) {
                var t = e.x,
                  s = e.y,
                  n = window.devicePixelRatio || 1;
                return { x: x(t * n) / n || 0, y: x(s * n) / n || 0 };
              })({ x: f, y: m })
            : { x: f, y: m };
      return (
        (f = M.x),
        (m = M.y),
        l
          ? Object.assign(
              {},
              k,
              (((P = {})[S] = y ? "0" : ""),
              (P[w] = b ? "0" : ""),
              (P.transform =
                (E.devicePixelRatio || 1) <= 1
                  ? "translate(" + f + "px, " + m + "px)"
                  : "translate3d(" + f + "px, " + m + "px, 0)"),
              P)
            )
          : Object.assign(
              {},
              k,
              (((t = {})[S] = y ? m + "px" : ""),
              (t[w] = b ? f + "px" : ""),
              (t.transform = ""),
              t)
            )
      );
    }
    const ce = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (e) {
        var t = e.state;
        Object.keys(t.elements).forEach(function (e) {
          var s = t.styles[e] || {},
            n = t.attributes[e] || {},
            i = t.elements[e];
          b(i) &&
            T(i) &&
            (Object.assign(i.style, s),
            Object.keys(n).forEach(function (e) {
              var t = n[e];
              !1 === t
                ? i.removeAttribute(e)
                : i.setAttribute(e, !0 === t ? "" : t);
            }));
        });
      },
      effect: function (e) {
        var t = e.state,
          s = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(t.elements.popper.style, s.popper),
          (t.styles = s),
          t.elements.arrow && Object.assign(t.elements.arrow.style, s.arrow),
          function () {
            Object.keys(t.elements).forEach(function (e) {
              var n = t.elements[e],
                i = t.attributes[e] || {},
                r = Object.keys(
                  t.styles.hasOwnProperty(e) ? t.styles[e] : s[e]
                ).reduce(function (e, t) {
                  return (e[t] = ""), e;
                }, {});
              b(n) &&
                T(n) &&
                (Object.assign(n.style, r),
                Object.keys(i).forEach(function (e) {
                  n.removeAttribute(e);
                }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    };
    const de = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (e) {
        var t = e.state,
          s = e.options,
          n = e.name,
          i = s.offset,
          r = void 0 === i ? [0, 0] : i,
          a = Y.reduce(function (e, s) {
            return (
              (e[s] = (function (e, t, s) {
                var n = ne(e),
                  i = [z, q].indexOf(n) >= 0 ? -1 : 1,
                  r =
                    "function" == typeof s
                      ? s(Object.assign({}, t, { placement: e }))
                      : s,
                  a = r[0],
                  o = r[1];
                return (
                  (a = a || 0),
                  (o = (o || 0) * i),
                  [z, j].indexOf(n) >= 0 ? { x: o, y: a } : { x: a, y: o }
                );
              })(s, t.rects, r)),
              e
            );
          }, {}),
          o = a[t.placement],
          l = o.x,
          c = o.y;
        null != t.modifiersData.popperOffsets &&
          ((t.modifiersData.popperOffsets.x += l),
          (t.modifiersData.popperOffsets.y += c)),
          (t.modifiersData[n] = a);
      },
    };
    var ue = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function pe(e) {
      return e.replace(/left|right|bottom|top/g, function (e) {
        return ue[e];
      });
    }
    var fe = { start: "end", end: "start" };
    function he(e) {
      return e.replace(/start|end/g, function (e) {
        return fe[e];
      });
    }
    function me(e, t) {
      var s = t.getRootNode && t.getRootNode();
      if (e.contains(t)) return !0;
      if (s && y(s)) {
        var n = t;
        do {
          if (n && e.isSameNode(n)) return !0;
          n = n.parentNode || n.host;
        } while (n);
      }
      return !1;
    }
    function ge(e) {
      return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height,
      });
    }
    function ve(e, t) {
      return t === W
        ? ge(
            (function (e) {
              var t = g(e),
                s = O(e),
                n = t.visualViewport,
                i = s.clientWidth,
                r = s.clientHeight,
                a = 0,
                o = 0;
              return (
                n &&
                  ((i = n.width),
                  (r = n.height),
                  /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                    ((a = n.offsetLeft), (o = n.offsetTop))),
                { width: i, height: r, x: a + A(e), y: o }
              );
            })(e)
          )
        : v(t)
        ? (function (e) {
            var t = E(e);
            return (
              (t.top = t.top + e.clientTop),
              (t.left = t.left + e.clientLeft),
              (t.bottom = t.top + e.clientHeight),
              (t.right = t.left + e.clientWidth),
              (t.width = e.clientWidth),
              (t.height = e.clientHeight),
              (t.x = t.left),
              (t.y = t.top),
              t
            );
          })(t)
        : ge(
            (function (e) {
              var t,
                s = O(e),
                n = C(e),
                i = null == (t = e.ownerDocument) ? void 0 : t.body,
                r = w(
                  s.scrollWidth,
                  s.clientWidth,
                  i ? i.scrollWidth : 0,
                  i ? i.clientWidth : 0
                ),
                a = w(
                  s.scrollHeight,
                  s.clientHeight,
                  i ? i.scrollHeight : 0,
                  i ? i.clientHeight : 0
                ),
                o = -n.scrollLeft + A(e),
                l = -n.scrollTop;
              return (
                "rtl" === L(i || s).direction &&
                  (o += w(s.clientWidth, i ? i.clientWidth : 0) - r),
                { width: r, height: a, x: o, y: l }
              );
            })(O(e))
          );
    }
    function be(e, t, s) {
      var n =
          "clippingParents" === t
            ? (function (e) {
                var t = D(_(e)),
                  s =
                    ["absolute", "fixed"].indexOf(L(e).position) >= 0 && b(e)
                      ? V(e)
                      : e;
                return v(s)
                  ? t.filter(function (e) {
                      return v(e) && me(e, s) && "body" !== T(e);
                    })
                  : [];
              })(e)
            : [].concat(t),
        i = [].concat(n, [s]),
        r = i[0],
        a = i.reduce(function (t, s) {
          var n = ve(e, s);
          return (
            (t.top = w(n.top, t.top)),
            (t.right = S(n.right, t.right)),
            (t.bottom = S(n.bottom, t.bottom)),
            (t.left = w(n.left, t.left)),
            t
          );
        }, ve(e, r));
      return (
        (a.width = a.right - a.left),
        (a.height = a.bottom - a.top),
        (a.x = a.left),
        (a.y = a.top),
        a
      );
    }
    function ye(e) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
    }
    function we(e, t) {
      return t.reduce(function (t, s) {
        return (t[s] = e), t;
      }, {});
    }
    function Se(e, t) {
      void 0 === t && (t = {});
      var s = t,
        n = s.placement,
        i = void 0 === n ? e.placement : n,
        r = s.boundary,
        a = void 0 === r ? "clippingParents" : r,
        o = s.rootBoundary,
        l = void 0 === o ? W : o,
        c = s.elementContext,
        d = void 0 === c ? U : c,
        u = s.altBoundary,
        p = void 0 !== u && u,
        f = s.padding,
        h = void 0 === f ? 0 : f,
        m = ye("number" != typeof h ? h : we(h, F)),
        g = d === U ? "reference" : U,
        b = e.rects.popper,
        y = e.elements[p ? g : d],
        w = be(v(y) ? y : y.contextElement || O(e.elements.popper), a, l),
        S = E(e.elements.reference),
        x = ae({
          reference: S,
          element: b,
          strategy: "absolute",
          placement: i,
        }),
        C = ge(Object.assign({}, b, x)),
        T = d === U ? C : S,
        A = {
          top: w.top - T.top + m.top,
          bottom: T.bottom - w.bottom + m.bottom,
          left: w.left - T.left + m.left,
          right: T.right - w.right + m.right,
        },
        L = e.modifiersData.offset;
      if (d === U && L) {
        var P = L[i];
        Object.keys(A).forEach(function (e) {
          var t = [j, B].indexOf(e) >= 0 ? 1 : -1,
            s = [q, B].indexOf(e) >= 0 ? "y" : "x";
          A[e] += P[s] * t;
        });
      }
      return A;
    }
    function xe(e, t, s) {
      return w(e, S(t, s));
    }
    const Ee = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t = e.state,
          s = e.options,
          n = e.name,
          i = s.mainAxis,
          r = void 0 === i || i,
          a = s.altAxis,
          o = void 0 !== a && a,
          l = s.boundary,
          c = s.rootBoundary,
          d = s.altBoundary,
          u = s.padding,
          p = s.tether,
          f = void 0 === p || p,
          h = s.tetherOffset,
          m = void 0 === h ? 0 : h,
          g = Se(t, {
            boundary: l,
            rootBoundary: c,
            padding: u,
            altBoundary: d,
          }),
          v = ne(t.placement),
          b = ie(t.placement),
          y = !b,
          x = re(v),
          E = "x" === x ? "y" : "x",
          C = t.modifiersData.popperOffsets,
          T = t.rects.reference,
          O = t.rects.popper,
          A =
            "function" == typeof m
              ? m(Object.assign({}, t.rects, { placement: t.placement }))
              : m,
          L =
            "number" == typeof A
              ? { mainAxis: A, altAxis: A }
              : Object.assign({ mainAxis: 0, altAxis: 0 }, A),
          P = t.modifiersData.offset
            ? t.modifiersData.offset[t.placement]
            : null,
          k = { x: 0, y: 0 };
        if (C) {
          if (r) {
            var _,
              $ = "y" === x ? q : z,
              D = "y" === x ? B : j,
              I = "y" === x ? "height" : "width",
              N = C[x],
              H = N + g[$],
              F = N - g[D],
              R = f ? -O[I] / 2 : 0,
              W = b === G ? T[I] : O[I],
              U = b === G ? -O[I] : -T[I],
              X = t.elements.arrow,
              Y = f && X ? M(X) : { width: 0, height: 0 },
              K = t.modifiersData["arrow#persistent"]
                ? t.modifiersData["arrow#persistent"].padding
                : { top: 0, right: 0, bottom: 0, left: 0 },
              Q = K[$],
              Z = K[D],
              J = xe(0, T[I], Y[I]),
              ee = y
                ? T[I] / 2 - R - J - Q - L.mainAxis
                : W - J - Q - L.mainAxis,
              te = y
                ? -T[I] / 2 + R + J + Z + L.mainAxis
                : U + J + Z + L.mainAxis,
              se = t.elements.arrow && V(t.elements.arrow),
              ae = se
                ? "y" === x
                  ? se.clientTop || 0
                  : se.clientLeft || 0
                : 0,
              oe = null != (_ = null == P ? void 0 : P[x]) ? _ : 0,
              le = N + te - oe,
              ce = xe(f ? S(H, N + ee - oe - ae) : H, N, f ? w(F, le) : F);
            (C[x] = ce), (k[x] = ce - N);
          }
          if (o) {
            var de,
              ue = "x" === x ? q : z,
              pe = "x" === x ? B : j,
              fe = C[E],
              he = "y" === E ? "height" : "width",
              me = fe + g[ue],
              ge = fe - g[pe],
              ve = -1 !== [q, z].indexOf(v),
              be = null != (de = null == P ? void 0 : P[E]) ? de : 0,
              ye = ve ? me : fe - T[he] - O[he] - be + L.altAxis,
              we = ve ? fe + T[he] + O[he] - be - L.altAxis : ge,
              Ee =
                f && ve
                  ? (function (e, t, s) {
                      var n = xe(e, t, s);
                      return n > s ? s : n;
                    })(ye, fe, we)
                  : xe(f ? ye : me, fe, f ? we : ge);
            (C[E] = Ee), (k[E] = Ee - fe);
          }
          t.modifiersData[n] = k;
        }
      },
      requiresIfExists: ["offset"],
    };
    const Ce = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t,
          s = e.state,
          n = e.name,
          i = e.options,
          r = s.elements.arrow,
          a = s.modifiersData.popperOffsets,
          o = ne(s.placement),
          l = re(o),
          c = [z, j].indexOf(o) >= 0 ? "height" : "width";
        if (r && a) {
          var d = (function (e, t) {
              return ye(
                "number" !=
                  typeof (e =
                    "function" == typeof e
                      ? e(
                          Object.assign({}, t.rects, { placement: t.placement })
                        )
                      : e)
                  ? e
                  : we(e, F)
              );
            })(i.padding, s),
            u = M(r),
            p = "y" === l ? q : z,
            f = "y" === l ? B : j,
            h =
              s.rects.reference[c] +
              s.rects.reference[l] -
              a[l] -
              s.rects.popper[c],
            m = a[l] - s.rects.reference[l],
            g = V(r),
            v = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
            b = h / 2 - m / 2,
            y = d[p],
            w = v - u[c] - d[f],
            S = v / 2 - u[c] / 2 + b,
            x = xe(y, S, w),
            E = l;
          s.modifiersData[n] = (((t = {})[E] = x), (t.centerOffset = x - S), t);
        }
      },
      effect: function (e) {
        var t = e.state,
          s = e.options.element,
          n = void 0 === s ? "[data-popper-arrow]" : s;
        null != n &&
          ("string" != typeof n || (n = t.elements.popper.querySelector(n))) &&
          me(t.elements.popper, n) &&
          (t.elements.arrow = n);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    };
    function Te(e, t, s) {
      return (
        void 0 === s && (s = { x: 0, y: 0 }),
        {
          top: e.top - t.height - s.y,
          right: e.right - t.width + s.x,
          bottom: e.bottom - t.height + s.y,
          left: e.left - t.width - s.x,
        }
      );
    }
    function Oe(e) {
      return [q, j, B, z].some(function (t) {
        return e[t] >= 0;
      });
    }
    var Ae = ee({
        defaultModifiers: [
          se,
          {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
              var t = e.state,
                s = e.name;
              t.modifiersData[s] = ae({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement,
              });
            },
            data: {},
          },
          {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (e) {
              var t = e.state,
                s = e.options,
                n = s.gpuAcceleration,
                i = void 0 === n || n,
                r = s.adaptive,
                a = void 0 === r || r,
                o = s.roundOffsets,
                l = void 0 === o || o,
                c = {
                  placement: ne(t.placement),
                  variation: ie(t.placement),
                  popper: t.elements.popper,
                  popperRect: t.rects.popper,
                  gpuAcceleration: i,
                  isFixed: "fixed" === t.options.strategy,
                };
              null != t.modifiersData.popperOffsets &&
                (t.styles.popper = Object.assign(
                  {},
                  t.styles.popper,
                  le(
                    Object.assign({}, c, {
                      offsets: t.modifiersData.popperOffsets,
                      position: t.options.strategy,
                      adaptive: a,
                      roundOffsets: l,
                    })
                  )
                )),
                null != t.modifiersData.arrow &&
                  (t.styles.arrow = Object.assign(
                    {},
                    t.styles.arrow,
                    le(
                      Object.assign({}, c, {
                        offsets: t.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: l,
                      })
                    )
                  )),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  "data-popper-placement": t.placement,
                }));
            },
            data: {},
          },
          ce,
          de,
          {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t = e.state,
                s = e.options,
                n = e.name;
              if (!t.modifiersData[n]._skip) {
                for (
                  var i = s.mainAxis,
                    r = void 0 === i || i,
                    a = s.altAxis,
                    o = void 0 === a || a,
                    l = s.fallbackPlacements,
                    c = s.padding,
                    d = s.boundary,
                    u = s.rootBoundary,
                    p = s.altBoundary,
                    f = s.flipVariations,
                    h = void 0 === f || f,
                    m = s.allowedAutoPlacements,
                    g = t.options.placement,
                    v = ne(g),
                    b =
                      l ||
                      (v === g || !h
                        ? [pe(g)]
                        : (function (e) {
                            if (ne(e) === H) return [];
                            var t = pe(e);
                            return [he(e), t, he(t)];
                          })(g)),
                    y = [g].concat(b).reduce(function (e, s) {
                      return e.concat(
                        ne(s) === H
                          ? (function (e, t) {
                              void 0 === t && (t = {});
                              var s = t,
                                n = s.placement,
                                i = s.boundary,
                                r = s.rootBoundary,
                                a = s.padding,
                                o = s.flipVariations,
                                l = s.allowedAutoPlacements,
                                c = void 0 === l ? Y : l,
                                d = ie(n),
                                u = d
                                  ? o
                                    ? X
                                    : X.filter(function (e) {
                                        return ie(e) === d;
                                      })
                                  : F,
                                p = u.filter(function (e) {
                                  return c.indexOf(e) >= 0;
                                });
                              0 === p.length && (p = u);
                              var f = p.reduce(function (t, s) {
                                return (
                                  (t[s] = Se(e, {
                                    placement: s,
                                    boundary: i,
                                    rootBoundary: r,
                                    padding: a,
                                  })[ne(s)]),
                                  t
                                );
                              }, {});
                              return Object.keys(f).sort(function (e, t) {
                                return f[e] - f[t];
                              });
                            })(t, {
                              placement: s,
                              boundary: d,
                              rootBoundary: u,
                              padding: c,
                              flipVariations: h,
                              allowedAutoPlacements: m,
                            })
                          : s
                      );
                    }, []),
                    w = t.rects.reference,
                    S = t.rects.popper,
                    x = new Map(),
                    E = !0,
                    C = y[0],
                    T = 0;
                  T < y.length;
                  T++
                ) {
                  var O = y[T],
                    A = ne(O),
                    L = ie(O) === G,
                    P = [q, B].indexOf(A) >= 0,
                    k = P ? "width" : "height",
                    M = Se(t, {
                      placement: O,
                      boundary: d,
                      rootBoundary: u,
                      altBoundary: p,
                      padding: c,
                    }),
                    _ = P ? (L ? j : z) : L ? B : q;
                  w[k] > S[k] && (_ = pe(_));
                  var $ = pe(_),
                    D = [];
                  if (
                    (r && D.push(M[A] <= 0),
                    o && D.push(M[_] <= 0, M[$] <= 0),
                    D.every(function (e) {
                      return e;
                    }))
                  ) {
                    (C = O), (E = !1);
                    break;
                  }
                  x.set(O, D);
                }
                if (E)
                  for (
                    var I = function (e) {
                        var t = y.find(function (t) {
                          var s = x.get(t);
                          if (s)
                            return s.slice(0, e).every(function (e) {
                              return e;
                            });
                        });
                        if (t) return (C = t), "break";
                      },
                      N = h ? 3 : 1;
                    N > 0;
                    N--
                  ) {
                    if ("break" === I(N)) break;
                  }
                t.placement !== C &&
                  ((t.modifiersData[n]._skip = !0),
                  (t.placement = C),
                  (t.reset = !0));
              }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
          },
          Ee,
          Ce,
          {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
              var t = e.state,
                s = e.name,
                n = t.rects.reference,
                i = t.rects.popper,
                r = t.modifiersData.preventOverflow,
                a = Se(t, { elementContext: "reference" }),
                o = Se(t, { altBoundary: !0 }),
                l = Te(a, n),
                c = Te(o, i, r),
                d = Oe(l),
                u = Oe(c);
              (t.modifiersData[s] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: d,
                hasPopperEscaped: u,
              }),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  "data-popper-reference-hidden": d,
                  "data-popper-escaped": u,
                }));
            },
          },
        ],
      }),
      Le = "tippy-content",
      Pe = "tippy-backdrop",
      ke = "tippy-arrow",
      Me = "tippy-svg-arrow",
      _e = { passive: !0, capture: !0 },
      $e = function () {
        return document.body;
      };
    function De(e, t, s) {
      if (Array.isArray(e)) {
        var n = e[t];
        return null == n ? (Array.isArray(s) ? s[t] : s) : n;
      }
      return e;
    }
    function Ie(e, t) {
      var s = {}.toString.call(e);
      return 0 === s.indexOf("[object") && s.indexOf(t + "]") > -1;
    }
    function Ne(e, t) {
      return "function" == typeof e ? e.apply(void 0, t) : e;
    }
    function Ve(e, t) {
      return 0 === t
        ? e
        : function (n) {
            clearTimeout(s),
              (s = setTimeout(function () {
                e(n);
              }, t));
          };
      var s;
    }
    function qe(e) {
      return [].concat(e);
    }
    function Be(e, t) {
      -1 === e.indexOf(t) && e.push(t);
    }
    function je(e) {
      return e.split("-")[0];
    }
    function ze(e) {
      return [].slice.call(e);
    }
    function He(e) {
      return Object.keys(e).reduce(function (t, s) {
        return void 0 !== e[s] && (t[s] = e[s]), t;
      }, {});
    }
    function Fe() {
      return document.createElement("div");
    }
    function Ge(e) {
      return ["Element", "Fragment"].some(function (t) {
        return Ie(e, t);
      });
    }
    function Re(e) {
      return Ie(e, "MouseEvent");
    }
    function We(e) {
      return !(!e || !e._tippy || e._tippy.reference !== e);
    }
    function Ue(e) {
      return Ge(e)
        ? [e]
        : (function (e) {
            return Ie(e, "NodeList");
          })(e)
        ? ze(e)
        : Array.isArray(e)
        ? e
        : ze(document.querySelectorAll(e));
    }
    function Xe(e, t) {
      e.forEach(function (e) {
        e && (e.style.transitionDuration = t + "ms");
      });
    }
    function Ye(e, t) {
      e.forEach(function (e) {
        e && e.setAttribute("data-state", t);
      });
    }
    function Ke(e) {
      var t,
        s = qe(e)[0];
      return null != s && null != (t = s.ownerDocument) && t.body
        ? s.ownerDocument
        : document;
    }
    function Qe(e, t, s) {
      var n = t + "EventListener";
      ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
        e[n](t, s);
      });
    }
    function Ze(e, t) {
      for (var s = t; s; ) {
        var n;
        if (e.contains(s)) return !0;
        s =
          null == s.getRootNode || null == (n = s.getRootNode())
            ? void 0
            : n.host;
      }
      return !1;
    }
    var Je = { isTouch: !1 },
      et = 0;
    function tt() {
      Je.isTouch ||
        ((Je.isTouch = !0),
        window.performance && document.addEventListener("mousemove", st));
    }
    function st() {
      var e = performance.now();
      e - et < 20 &&
        ((Je.isTouch = !1), document.removeEventListener("mousemove", st)),
        (et = e);
    }
    function nt() {
      var e = document.activeElement;
      if (We(e)) {
        var t = e._tippy;
        e.blur && !t.state.isVisible && e.blur();
      }
    }
    var it =
      !!("undefined" != typeof window && "undefined" != typeof document) &&
      !!window.msCrypto;
    var rt = {
        animateFill: !1,
        followCursor: !1,
        inlinePositioning: !1,
        sticky: !1,
      },
      at = Object.assign(
        {
          appendTo: $e,
          aria: { content: "auto", expanded: "auto" },
          delay: 0,
          duration: [300, 250],
          getReferenceClientRect: null,
          hideOnClick: !0,
          ignoreAttributes: !1,
          interactive: !1,
          interactiveBorder: 2,
          interactiveDebounce: 0,
          moveTransition: "",
          offset: [0, 10],
          onAfterUpdate: function () {},
          onBeforeUpdate: function () {},
          onCreate: function () {},
          onDestroy: function () {},
          onHidden: function () {},
          onHide: function () {},
          onMount: function () {},
          onShow: function () {},
          onShown: function () {},
          onTrigger: function () {},
          onUntrigger: function () {},
          onClickOutside: function () {},
          placement: "top",
          plugins: [],
          popperOptions: {},
          render: null,
          showOnCreate: !1,
          touch: !0,
          trigger: "mouseenter focus",
          triggerTarget: null,
        },
        rt,
        {
          allowHTML: !1,
          animation: "fade",
          arrow: !0,
          content: "",
          inertia: !1,
          maxWidth: 350,
          role: "tooltip",
          theme: "",
          zIndex: 9999,
        }
      ),
      ot = Object.keys(at);
    function lt(e) {
      var t = (e.plugins || []).reduce(function (t, s) {
        var n,
          i = s.name,
          r = s.defaultValue;
        i && (t[i] = void 0 !== e[i] ? e[i] : null != (n = at[i]) ? n : r);
        return t;
      }, {});
      return Object.assign({}, e, t);
    }
    function ct(e, t) {
      var s = Object.assign(
        {},
        t,
        { content: Ne(t.content, [e]) },
        t.ignoreAttributes
          ? {}
          : (function (e, t) {
              return (
                t ? Object.keys(lt(Object.assign({}, at, { plugins: t }))) : ot
              ).reduce(function (t, s) {
                var n = (e.getAttribute("data-tippy-" + s) || "").trim();
                if (!n) return t;
                if ("content" === s) t[s] = n;
                else
                  try {
                    t[s] = JSON.parse(n);
                  } catch (e) {
                    t[s] = n;
                  }
                return t;
              }, {});
            })(e, t.plugins)
      );
      return (
        (s.aria = Object.assign({}, at.aria, s.aria)),
        (s.aria = {
          expanded:
            "auto" === s.aria.expanded ? t.interactive : s.aria.expanded,
          content:
            "auto" === s.aria.content
              ? t.interactive
                ? null
                : "describedby"
              : s.aria.content,
        }),
        s
      );
    }
    function dt(e, t) {
      e.innerHTML = t;
    }
    function ut(e) {
      var t = Fe();
      return (
        !0 === e
          ? (t.className = ke)
          : ((t.className = Me), Ge(e) ? t.appendChild(e) : dt(t, e)),
        t
      );
    }
    function pt(e, t) {
      Ge(t.content)
        ? (dt(e, ""), e.appendChild(t.content))
        : "function" != typeof t.content &&
          (t.allowHTML ? dt(e, t.content) : (e.textContent = t.content));
    }
    function ft(e) {
      var t = e.firstElementChild,
        s = ze(t.children);
      return {
        box: t,
        content: s.find(function (e) {
          return e.classList.contains(Le);
        }),
        arrow: s.find(function (e) {
          return e.classList.contains(ke) || e.classList.contains(Me);
        }),
        backdrop: s.find(function (e) {
          return e.classList.contains(Pe);
        }),
      };
    }
    function ht(e) {
      var t = Fe(),
        s = Fe();
      (s.className = "tippy-box"),
        s.setAttribute("data-state", "hidden"),
        s.setAttribute("tabindex", "-1");
      var n = Fe();
      function i(s, n) {
        var i = ft(t),
          r = i.box,
          a = i.content,
          o = i.arrow;
        n.theme
          ? r.setAttribute("data-theme", n.theme)
          : r.removeAttribute("data-theme"),
          "string" == typeof n.animation
            ? r.setAttribute("data-animation", n.animation)
            : r.removeAttribute("data-animation"),
          n.inertia
            ? r.setAttribute("data-inertia", "")
            : r.removeAttribute("data-inertia"),
          (r.style.maxWidth =
            "number" == typeof n.maxWidth ? n.maxWidth + "px" : n.maxWidth),
          n.role ? r.setAttribute("role", n.role) : r.removeAttribute("role"),
          (s.content === n.content && s.allowHTML === n.allowHTML) ||
            pt(a, e.props),
          n.arrow
            ? o
              ? s.arrow !== n.arrow &&
                (r.removeChild(o), r.appendChild(ut(n.arrow)))
              : r.appendChild(ut(n.arrow))
            : o && r.removeChild(o);
      }
      return (
        (n.className = Le),
        n.setAttribute("data-state", "hidden"),
        pt(n, e.props),
        t.appendChild(s),
        s.appendChild(n),
        i(e.props, e.props),
        { popper: t, onUpdate: i }
      );
    }
    ht.$$tippy = !0;
    var mt = 1,
      gt = [],
      vt = [];
    function bt(e, t) {
      var s,
        n,
        i,
        r,
        a,
        o,
        l,
        c,
        d = ct(e, Object.assign({}, at, lt(He(t)))),
        u = !1,
        p = !1,
        f = !1,
        h = !1,
        m = [],
        g = Ve(U, d.interactiveDebounce),
        v = mt++,
        b = (c = d.plugins).filter(function (e, t) {
          return c.indexOf(e) === t;
        }),
        y = {
          id: v,
          reference: e,
          popper: Fe(),
          popperInstance: null,
          props: d,
          state: {
            isEnabled: !0,
            isVisible: !1,
            isDestroyed: !1,
            isMounted: !1,
            isShown: !1,
          },
          plugins: b,
          clearDelayTimeouts: function () {
            clearTimeout(s), clearTimeout(n), cancelAnimationFrame(i);
          },
          setProps: function (t) {
            0;
            if (y.state.isDestroyed) return;
            $("onBeforeUpdate", [y, t]), R();
            var s = y.props,
              n = ct(e, Object.assign({}, s, He(t), { ignoreAttributes: !0 }));
            (y.props = n),
              G(),
              s.interactiveDebounce !== n.interactiveDebounce &&
                (N(), (g = Ve(U, n.interactiveDebounce)));
            s.triggerTarget && !n.triggerTarget
              ? qe(s.triggerTarget).forEach(function (e) {
                  e.removeAttribute("aria-expanded");
                })
              : n.triggerTarget && e.removeAttribute("aria-expanded");
            I(), _(), x && x(s, n);
            y.popperInstance &&
              (Q(),
              J().forEach(function (e) {
                requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
              }));
            $("onAfterUpdate", [y, t]);
          },
          setContent: function (e) {
            y.setProps({ content: e });
          },
          show: function () {
            0;
            var e = y.state.isVisible,
              t = y.state.isDestroyed,
              s = !y.state.isEnabled,
              n = Je.isTouch && !y.props.touch,
              i = De(y.props.duration, 0, at.duration);
            if (e || t || s || n) return;
            if (L().hasAttribute("disabled")) return;
            if (($("onShow", [y], !1), !1 === y.props.onShow(y))) return;
            (y.state.isVisible = !0), A() && (S.style.visibility = "visible");
            _(), j(), y.state.isMounted || (S.style.transition = "none");
            if (A()) {
              var r = k(),
                a = r.box,
                l = r.content;
              Xe([a, l], 0);
            }
            (o = function () {
              var e;
              if (y.state.isVisible && !h) {
                if (
                  ((h = !0),
                  S.offsetHeight,
                  (S.style.transition = y.props.moveTransition),
                  A() && y.props.animation)
                ) {
                  var t = k(),
                    s = t.box,
                    n = t.content;
                  Xe([s, n], i), Ye([s, n], "visible");
                }
                D(),
                  I(),
                  Be(vt, y),
                  null == (e = y.popperInstance) || e.forceUpdate(),
                  $("onMount", [y]),
                  y.props.animation &&
                    A() &&
                    (function (e, t) {
                      H(e, t);
                    })(i, function () {
                      (y.state.isShown = !0), $("onShown", [y]);
                    });
              }
            }),
              (function () {
                var e,
                  t = y.props.appendTo,
                  s = L();
                e =
                  (y.props.interactive && t === $e) || "parent" === t
                    ? s.parentNode
                    : Ne(t, [s]);
                e.contains(S) || e.appendChild(S);
                (y.state.isMounted = !0), Q(), !1;
              })();
          },
          hide: function () {
            0;
            var e = !y.state.isVisible,
              t = y.state.isDestroyed,
              s = !y.state.isEnabled,
              n = De(y.props.duration, 1, at.duration);
            if (e || t || s) return;
            if (($("onHide", [y], !1), !1 === y.props.onHide(y))) return;
            (y.state.isVisible = !1),
              (y.state.isShown = !1),
              (h = !1),
              (u = !1),
              A() && (S.style.visibility = "hidden");
            if ((N(), z(), _(!0), A())) {
              var i = k(),
                r = i.box,
                a = i.content;
              y.props.animation && (Xe([r, a], n), Ye([r, a], "hidden"));
            }
            D(),
              I(),
              y.props.animation
                ? A() &&
                  (function (e, t) {
                    H(e, function () {
                      !y.state.isVisible &&
                        S.parentNode &&
                        S.parentNode.contains(S) &&
                        t();
                    });
                  })(n, y.unmount)
                : y.unmount();
          },
          hideWithInteractivity: function (e) {
            0;
            P().addEventListener("mousemove", g), Be(gt, g), g(e);
          },
          enable: function () {
            y.state.isEnabled = !0;
          },
          disable: function () {
            y.hide(), (y.state.isEnabled = !1);
          },
          unmount: function () {
            0;
            y.state.isVisible && y.hide();
            if (!y.state.isMounted) return;
            Z(),
              J().forEach(function (e) {
                e._tippy.unmount();
              }),
              S.parentNode && S.parentNode.removeChild(S);
            (vt = vt.filter(function (e) {
              return e !== y;
            })),
              (y.state.isMounted = !1),
              $("onHidden", [y]);
          },
          destroy: function () {
            0;
            if (y.state.isDestroyed) return;
            y.clearDelayTimeouts(),
              y.unmount(),
              R(),
              delete e._tippy,
              (y.state.isDestroyed = !0),
              $("onDestroy", [y]);
          },
        };
      if (!d.render) return y;
      var w = d.render(y),
        S = w.popper,
        x = w.onUpdate;
      S.setAttribute("data-tippy-root", ""),
        (S.id = "tippy-" + y.id),
        (y.popper = S),
        (e._tippy = y),
        (S._tippy = y);
      var E = b.map(function (e) {
          return e.fn(y);
        }),
        C = e.hasAttribute("aria-expanded");
      return (
        G(),
        I(),
        _(),
        $("onCreate", [y]),
        d.showOnCreate && ee(),
        S.addEventListener("mouseenter", function () {
          y.props.interactive && y.state.isVisible && y.clearDelayTimeouts();
        }),
        S.addEventListener("mouseleave", function () {
          y.props.interactive &&
            y.props.trigger.indexOf("mouseenter") >= 0 &&
            P().addEventListener("mousemove", g);
        }),
        y
      );
      function T() {
        var e = y.props.touch;
        return Array.isArray(e) ? e : [e, 0];
      }
      function O() {
        return "hold" === T()[0];
      }
      function A() {
        var e;
        return !(null == (e = y.props.render) || !e.$$tippy);
      }
      function L() {
        return l || e;
      }
      function P() {
        var e = L().parentNode;
        return e ? Ke(e) : document;
      }
      function k() {
        return ft(S);
      }
      function M(e) {
        return (y.state.isMounted && !y.state.isVisible) ||
          Je.isTouch ||
          (r && "focus" === r.type)
          ? 0
          : De(y.props.delay, e ? 0 : 1, at.delay);
      }
      function _(e) {
        void 0 === e && (e = !1),
          (S.style.pointerEvents = y.props.interactive && !e ? "" : "none"),
          (S.style.zIndex = "" + y.props.zIndex);
      }
      function $(e, t, s) {
        var n;
        (void 0 === s && (s = !0),
        E.forEach(function (s) {
          s[e] && s[e].apply(s, t);
        }),
        s) && (n = y.props)[e].apply(n, t);
      }
      function D() {
        var t = y.props.aria;
        if (t.content) {
          var s = "aria-" + t.content,
            n = S.id;
          qe(y.props.triggerTarget || e).forEach(function (e) {
            var t = e.getAttribute(s);
            if (y.state.isVisible) e.setAttribute(s, t ? t + " " + n : n);
            else {
              var i = t && t.replace(n, "").trim();
              i ? e.setAttribute(s, i) : e.removeAttribute(s);
            }
          });
        }
      }
      function I() {
        !C &&
          y.props.aria.expanded &&
          qe(y.props.triggerTarget || e).forEach(function (e) {
            y.props.interactive
              ? e.setAttribute(
                  "aria-expanded",
                  y.state.isVisible && e === L() ? "true" : "false"
                )
              : e.removeAttribute("aria-expanded");
          });
      }
      function N() {
        P().removeEventListener("mousemove", g),
          (gt = gt.filter(function (e) {
            return e !== g;
          }));
      }
      function V(t) {
        if (!Je.isTouch || (!f && "mousedown" !== t.type)) {
          var s = (t.composedPath && t.composedPath()[0]) || t.target;
          if (!y.props.interactive || !Ze(S, s)) {
            if (
              qe(y.props.triggerTarget || e).some(function (e) {
                return Ze(e, s);
              })
            ) {
              if (Je.isTouch) return;
              if (y.state.isVisible && y.props.trigger.indexOf("click") >= 0)
                return;
            } else $("onClickOutside", [y, t]);
            !0 === y.props.hideOnClick &&
              (y.clearDelayTimeouts(),
              y.hide(),
              (p = !0),
              setTimeout(function () {
                p = !1;
              }),
              y.state.isMounted || z());
          }
        }
      }
      function q() {
        f = !0;
      }
      function B() {
        f = !1;
      }
      function j() {
        var e = P();
        e.addEventListener("mousedown", V, !0),
          e.addEventListener("touchend", V, _e),
          e.addEventListener("touchstart", B, _e),
          e.addEventListener("touchmove", q, _e);
      }
      function z() {
        var e = P();
        e.removeEventListener("mousedown", V, !0),
          e.removeEventListener("touchend", V, _e),
          e.removeEventListener("touchstart", B, _e),
          e.removeEventListener("touchmove", q, _e);
      }
      function H(e, t) {
        var s = k().box;
        function n(e) {
          e.target === s && (Qe(s, "remove", n), t());
        }
        if (0 === e) return t();
        Qe(s, "remove", a), Qe(s, "add", n), (a = n);
      }
      function F(t, s, n) {
        void 0 === n && (n = !1),
          qe(y.props.triggerTarget || e).forEach(function (e) {
            e.addEventListener(t, s, n),
              m.push({ node: e, eventType: t, handler: s, options: n });
          });
      }
      function G() {
        O() &&
          (F("touchstart", W, { passive: !0 }),
          F("touchend", X, { passive: !0 })),
          (function (e) {
            return e.split(/\s+/).filter(Boolean);
          })(y.props.trigger).forEach(function (e) {
            if ("manual" !== e)
              switch ((F(e, W), e)) {
                case "mouseenter":
                  F("mouseleave", X);
                  break;
                case "focus":
                  F(it ? "focusout" : "blur", Y);
                  break;
                case "focusin":
                  F("focusout", Y);
              }
          });
      }
      function R() {
        m.forEach(function (e) {
          var t = e.node,
            s = e.eventType,
            n = e.handler,
            i = e.options;
          t.removeEventListener(s, n, i);
        }),
          (m = []);
      }
      function W(e) {
        var t,
          s = !1;
        if (y.state.isEnabled && !K(e) && !p) {
          var n = "focus" === (null == (t = r) ? void 0 : t.type);
          (r = e),
            (l = e.currentTarget),
            I(),
            !y.state.isVisible &&
              Re(e) &&
              gt.forEach(function (t) {
                return t(e);
              }),
            "click" === e.type &&
            (y.props.trigger.indexOf("mouseenter") < 0 || u) &&
            !1 !== y.props.hideOnClick &&
            y.state.isVisible
              ? (s = !0)
              : ee(e),
            "click" === e.type && (u = !s),
            s && !n && te(e);
        }
      }
      function U(e) {
        var t = e.target,
          s = L().contains(t) || S.contains(t);
        if ("mousemove" !== e.type || !s) {
          var n = J()
            .concat(S)
            .map(function (e) {
              var t,
                s = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
              return s
                ? {
                    popperRect: e.getBoundingClientRect(),
                    popperState: s,
                    props: d,
                  }
                : null;
            })
            .filter(Boolean);
          (function (e, t) {
            var s = t.clientX,
              n = t.clientY;
            return e.every(function (e) {
              var t = e.popperRect,
                i = e.popperState,
                r = e.props.interactiveBorder,
                a = je(i.placement),
                o = i.modifiersData.offset;
              if (!o) return !0;
              var l = "bottom" === a ? o.top.y : 0,
                c = "top" === a ? o.bottom.y : 0,
                d = "right" === a ? o.left.x : 0,
                u = "left" === a ? o.right.x : 0,
                p = t.top - n + l > r,
                f = n - t.bottom - c > r,
                h = t.left - s + d > r,
                m = s - t.right - u > r;
              return p || f || h || m;
            });
          })(n, e) && (N(), te(e));
        }
      }
      function X(e) {
        K(e) ||
          (y.props.trigger.indexOf("click") >= 0 && u) ||
          (y.props.interactive ? y.hideWithInteractivity(e) : te(e));
      }
      function Y(e) {
        (y.props.trigger.indexOf("focusin") < 0 && e.target !== L()) ||
          (y.props.interactive &&
            e.relatedTarget &&
            S.contains(e.relatedTarget)) ||
          te(e);
      }
      function K(e) {
        return !!Je.isTouch && O() !== e.type.indexOf("touch") >= 0;
      }
      function Q() {
        Z();
        var t = y.props,
          s = t.popperOptions,
          n = t.placement,
          i = t.offset,
          r = t.getReferenceClientRect,
          a = t.moveTransition,
          l = A() ? ft(S).arrow : null,
          c = r
            ? {
                getBoundingClientRect: r,
                contextElement: r.contextElement || L(),
              }
            : e,
          d = {
            name: "$$tippy",
            enabled: !0,
            phase: "beforeWrite",
            requires: ["computeStyles"],
            fn: function (e) {
              var t = e.state;
              if (A()) {
                var s = k().box;
                ["placement", "reference-hidden", "escaped"].forEach(function (
                  e
                ) {
                  "placement" === e
                    ? s.setAttribute("data-placement", t.placement)
                    : t.attributes.popper["data-popper-" + e]
                    ? s.setAttribute("data-" + e, "")
                    : s.removeAttribute("data-" + e);
                }),
                  (t.attributes.popper = {});
              }
            },
          },
          u = [
            { name: "offset", options: { offset: i } },
            {
              name: "preventOverflow",
              options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
            },
            { name: "flip", options: { padding: 5 } },
            { name: "computeStyles", options: { adaptive: !a } },
            d,
          ];
        A() &&
          l &&
          u.push({ name: "arrow", options: { element: l, padding: 3 } }),
          u.push.apply(u, (null == s ? void 0 : s.modifiers) || []),
          (y.popperInstance = Ae(
            c,
            S,
            Object.assign({}, s, {
              placement: n,
              onFirstUpdate: o,
              modifiers: u,
            })
          ));
      }
      function Z() {
        y.popperInstance &&
          (y.popperInstance.destroy(), (y.popperInstance = null));
      }
      function J() {
        return ze(S.querySelectorAll("[data-tippy-root]"));
      }
      function ee(e) {
        y.clearDelayTimeouts(), e && $("onTrigger", [y, e]), j();
        var t = M(!0),
          n = T(),
          i = n[0],
          r = n[1];
        Je.isTouch && "hold" === i && r && (t = r),
          t
            ? (s = setTimeout(function () {
                y.show();
              }, t))
            : y.show();
      }
      function te(e) {
        if (
          (y.clearDelayTimeouts(), $("onUntrigger", [y, e]), y.state.isVisible)
        ) {
          if (
            !(
              y.props.trigger.indexOf("mouseenter") >= 0 &&
              y.props.trigger.indexOf("click") >= 0 &&
              ["mouseleave", "mousemove"].indexOf(e.type) >= 0 &&
              u
            )
          ) {
            var t = M(!1);
            t
              ? (n = setTimeout(function () {
                  y.state.isVisible && y.hide();
                }, t))
              : (i = requestAnimationFrame(function () {
                  y.hide();
                }));
          }
        } else z();
      }
    }
    function yt(e, t) {
      void 0 === t && (t = {});
      var s = at.plugins.concat(t.plugins || []);
      document.addEventListener("touchstart", tt, _e),
        window.addEventListener("blur", nt);
      var n = Object.assign({}, t, { plugins: s }),
        i = Ue(e).reduce(function (e, t) {
          var s = t && bt(t, n);
          return s && e.push(s), e;
        }, []);
      return Ge(e) ? i[0] : i;
    }
    (yt.defaultProps = at),
      (yt.setDefaultProps = function (e) {
        Object.keys(e).forEach(function (t) {
          at[t] = e[t];
        });
      }),
      (yt.currentInput = Je);
    Object.assign({}, ce, {
      effect: function (e) {
        var t = e.state,
          s = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        Object.assign(t.elements.popper.style, s.popper),
          (t.styles = s),
          t.elements.arrow && Object.assign(t.elements.arrow.style, s.arrow);
      },
    });
    yt.setDefaultProps({ render: ht });
    function wt(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function St(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : wt(t[s]) &&
            wt(e[s]) &&
            Object.keys(t[s]).length > 0 &&
            St(e[s], t[s]);
      });
    }
    yt("[data-tippy-content]", {});
    const xt = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function Et() {
      const e = "undefined" != typeof document ? document : {};
      return St(e, xt), e;
    }
    const Ct = {
      document: xt,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function Tt() {
      const e = "undefined" != typeof window ? window : {};
      return St(e, Ct), e;
    }
    class Ot extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function At(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...At(e)) : t.push(e);
        }),
        t
      );
    }
    function Lt(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function Pt(e, t) {
      const s = Tt(),
        n = Et();
      let i = [];
      if (!t && e instanceof Ot) return e;
      if (!e) return new Ot(i);
      if ("string" == typeof e) {
        const s = e.trim();
        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          let e = "div";
          0 === s.indexOf("<li") && (e = "ul"),
            0 === s.indexOf("<tr") && (e = "tbody"),
            (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
            0 === s.indexOf("<tbody") && (e = "table"),
            0 === s.indexOf("<option") && (e = "select");
          const t = n.createElement(e);
          t.innerHTML = s;
          for (let e = 0; e < t.childNodes.length; e += 1)
            i.push(t.childNodes[e]);
        } else
          i = (function (e, t) {
            if ("string" != typeof e) return [e];
            const s = [],
              n = t.querySelectorAll(e);
            for (let e = 0; e < n.length; e += 1) s.push(n[e]);
            return s;
          })(e.trim(), t || n);
      } else if (e.nodeType || e === s || e === n) i.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof Ot) return e;
        i = e;
      }
      return new Ot(
        (function (e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1)
            -1 === t.indexOf(e[s]) && t.push(e[s]);
          return t;
        })(i)
      );
    }
    Pt.fn = Ot.prototype;
    const kt = "resize scroll".split(" ");
    function Mt(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            kt.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : Pt(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    Mt("click"),
      Mt("blur"),
      Mt("focus"),
      Mt("focusin"),
      Mt("focusout"),
      Mt("keyup"),
      Mt("keydown"),
      Mt("keypress"),
      Mt("submit"),
      Mt("change"),
      Mt("mousedown"),
      Mt("mousemove"),
      Mt("mouseup"),
      Mt("mouseenter"),
      Mt("mouseleave"),
      Mt("mouseout"),
      Mt("mouseover"),
      Mt("touchstart"),
      Mt("touchend"),
      Mt("touchmove"),
      Mt("resize"),
      Mt("scroll");
    const _t = {
      addClass: function (...e) {
        const t = At(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = At(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = At(e.map((e) => e.split(" ")));
        return (
          Lt(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = At(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let s = 0; s < this.length; s += 1)
          if (2 === arguments.length) this[s].setAttribute(e, t);
          else
            for (const t in e)
              (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, s, n, i] = e;
        function r(e) {
          const t = e.target;
          if (!t) return;
          const i = e.target.dom7EventData || [];
          if ((i.indexOf(e) < 0 && i.unshift(e), Pt(t).is(s))) n.apply(t, i);
          else {
            const e = Pt(t).parents();
            for (let t = 0; t < e.length; t += 1)
              Pt(e[t]).is(s) && n.apply(e[t], i);
          }
        }
        function a(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
        }
        "function" == typeof e[1] && (([t, n, i] = e), (s = void 0)),
          i || (i = !1);
        const o = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (s)
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: n, proxyListener: r }),
                t.addEventListener(e, r, i);
            }
          else
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: n, proxyListener: a }),
                t.addEventListener(e, a, i);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, s, n, i] = e;
        "function" == typeof e[1] && (([t, n, i] = e), (s = void 0)),
          i || (i = !1);
        const r = t.split(" ");
        for (let e = 0; e < r.length; e += 1) {
          const t = r[e];
          for (let e = 0; e < this.length; e += 1) {
            const r = this[e];
            let a;
            if (
              (!s && r.dom7Listeners
                ? (a = r.dom7Listeners[t])
                : s && r.dom7LiveListeners && (a = r.dom7LiveListeners[t]),
              a && a.length)
            )
              for (let e = a.length - 1; e >= 0; e -= 1) {
                const s = a[e];
                (n && s.listener === n) ||
                (n &&
                  s.listener &&
                  s.listener.dom7proxy &&
                  s.listener.dom7proxy === n)
                  ? (r.removeEventListener(t, s.proxyListener, i),
                    a.splice(e, 1))
                  : n ||
                    (r.removeEventListener(t, s.proxyListener, i),
                    a.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = Tt(),
          s = e[0].split(" "),
          n = e[1];
        for (let i = 0; i < s.length; i += 1) {
          const r = s[i];
          for (let s = 0; s < this.length; s += 1) {
            const i = this[s];
            if (t.CustomEvent) {
              const s = new t.CustomEvent(r, {
                detail: n,
                bubbles: !0,
                cancelable: !0,
              });
              (i.dom7EventData = e.filter((e, t) => t > 0)),
                i.dispatchEvent(s),
                (i.dom7EventData = []),
                delete i.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function s(n) {
              n.target === this && (e.call(this, n), t.off("transitionend", s));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = Tt();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = Tt(),
            t = Et(),
            s = this[0],
            n = s.getBoundingClientRect(),
            i = t.body,
            r = s.clientTop || i.clientTop || 0,
            a = s.clientLeft || i.clientLeft || 0,
            o = s === e ? e.scrollY : s.scrollTop,
            l = s === e ? e.scrollX : s.scrollLeft;
          return { top: n.top + o - r, left: n.left + l - a };
        }
        return null;
      },
      css: function (e, t) {
        const s = Tt();
        let n;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (n = 0; n < this.length; n += 1)
              for (const t in e) this[n].style[t] = e[t];
            return this;
          }
          if (this[0])
            return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, s) => {
              e.apply(t, [t, s]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = Tt(),
          s = Et(),
          n = this[0];
        let i, r;
        if (!n || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (i = Pt(e), r = 0; r < i.length; r += 1)
            if (i[r] === n) return !0;
          return !1;
        }
        if (e === s) return n === s;
        if (e === t) return n === t;
        if (e.nodeType || e instanceof Ot) {
          for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1)
            if (i[r] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return Pt([]);
        if (e < 0) {
          const s = t + e;
          return Pt(s < 0 ? [] : [this[s]]);
        }
        return Pt([this[e]]);
      },
      append: function (...e) {
        let t;
        const s = Et();
        for (let n = 0; n < e.length; n += 1) {
          t = e[n];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const n = s.createElement("div");
              for (n.innerHTML = t; n.firstChild; )
                this[e].appendChild(n.firstChild);
            } else if (t instanceof Ot)
              for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = Et();
        let s, n;
        for (s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            const i = t.createElement("div");
            for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1)
              this[s].insertBefore(i.childNodes[n], this[s].childNodes[0]);
          } else if (e instanceof Ot)
            for (n = 0; n < e.length; n += 1)
              this[s].insertBefore(e[n], this[s].childNodes[0]);
          else this[s].insertBefore(e, this[s].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && Pt(this[0].nextElementSibling).is(e)
              ? Pt([this[0].nextElementSibling])
              : Pt([])
            : this[0].nextElementSibling
            ? Pt([this[0].nextElementSibling])
            : Pt([])
          : Pt([]);
      },
      nextAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return Pt([]);
        for (; s.nextElementSibling; ) {
          const n = s.nextElementSibling;
          e ? Pt(n).is(e) && t.push(n) : t.push(n), (s = n);
        }
        return Pt(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && Pt(t.previousElementSibling).is(e)
              ? Pt([t.previousElementSibling])
              : Pt([])
            : t.previousElementSibling
            ? Pt([t.previousElementSibling])
            : Pt([]);
        }
        return Pt([]);
      },
      prevAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return Pt([]);
        for (; s.previousElementSibling; ) {
          const n = s.previousElementSibling;
          e ? Pt(n).is(e) && t.push(n) : t.push(n), (s = n);
        }
        return Pt(t);
      },
      parent: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1)
          null !== this[s].parentNode &&
            (e
              ? Pt(this[s].parentNode).is(e) && t.push(this[s].parentNode)
              : t.push(this[s].parentNode));
        return Pt(t);
      },
      parents: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          let n = this[s].parentNode;
          for (; n; )
            e ? Pt(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
        }
        return Pt(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? Pt([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s].querySelectorAll(e);
          for (let e = 0; e < n.length; e += 1) t.push(n[e]);
        }
        return Pt(t);
      },
      children: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s].children;
          for (let s = 0; s < n.length; s += 1)
            (e && !Pt(n[s]).is(e)) || t.push(n[s]);
        }
        return Pt(t);
      },
      filter: function (e) {
        return Pt(Lt(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(_t).forEach((e) => {
      Object.defineProperty(Pt.fn, e, { value: _t[e], writable: !0 });
    });
    const $t = Pt;
    function Dt(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function It() {
      return Date.now();
    }
    function Nt(e, t) {
      void 0 === t && (t = "x");
      const s = Tt();
      let n, i, r;
      const a = (function (e) {
        const t = Tt();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((i = a.transform || a.webkitTransform),
            i.split(",").length > 6 &&
              (i = i
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new s.WebKitCSSMatrix("none" === i ? "" : i)))
          : ((r =
              a.MozTransform ||
              a.OTransform ||
              a.MsTransform ||
              a.msTransform ||
              a.transform ||
              a
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (n = r.toString().split(","))),
        "x" === t &&
          (i = s.WebKitCSSMatrix
            ? r.m41
            : 16 === n.length
            ? parseFloat(n[12])
            : parseFloat(n[4])),
        "y" === t &&
          (i = s.WebKitCSSMatrix
            ? r.m42
            : 16 === n.length
            ? parseFloat(n[13])
            : parseFloat(n[5])),
        i || 0
      );
    }
    function Vt(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function qt(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function Bt() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let s = 1; s < arguments.length; s += 1) {
        const n = s < 0 || arguments.length <= s ? void 0 : arguments[s];
        if (null != n && !qt(n)) {
          const s = Object.keys(Object(n)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, i = s.length; t < i; t += 1) {
            const i = s[t],
              r = Object.getOwnPropertyDescriptor(n, i);
            void 0 !== r &&
              r.enumerable &&
              (Vt(e[i]) && Vt(n[i])
                ? n[i].__swiper__
                  ? (e[i] = n[i])
                  : Bt(e[i], n[i])
                : !Vt(e[i]) && Vt(n[i])
                ? ((e[i] = {}),
                  n[i].__swiper__ ? (e[i] = n[i]) : Bt(e[i], n[i]))
                : (e[i] = n[i]));
          }
        }
      }
      return e;
    }
    function jt(e, t, s) {
      e.style.setProperty(t, s);
    }
    function zt(e) {
      let { swiper: t, targetPosition: s, side: n } = e;
      const i = Tt(),
        r = -t.translate;
      let a,
        o = null;
      const l = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        i.cancelAnimationFrame(t.cssModeFrameID);
      const c = s > r ? "next" : "prev",
        d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        u = () => {
          (a = new Date().getTime()), null === o && (o = a);
          const e = Math.max(Math.min((a - o) / l, 1), 0),
            c = 0.5 - Math.cos(e * Math.PI) / 2;
          let p = r + c * (s - r);
          if ((d(p, s) && (p = s), t.wrapperEl.scrollTo({ [n]: p }), d(p, s)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [n]: p });
              }),
              void i.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = i.requestAnimationFrame(u);
        };
      u();
    }
    let Ht, Ft, Gt;
    function Rt() {
      return (
        Ht ||
          (Ht = (function () {
            const e = Tt(),
              t = Et();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const s = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, s);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        Ht
      );
    }
    function Wt(e) {
      return (
        void 0 === e && (e = {}),
        Ft ||
          (Ft = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const s = Rt(),
              n = Tt(),
              i = n.navigator.platform,
              r = t || n.navigator.userAgent,
              a = { ios: !1, android: !1 },
              o = n.screen.width,
              l = n.screen.height,
              c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = r.match(/(iPad).*OS\s([\d_]+)/);
            const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              f = "Win32" === i;
            let h = "MacIntel" === i;
            return (
              !d &&
                h &&
                s.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${o}x${l}`) >= 0 &&
                ((d = r.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (h = !1)),
              c && !f && ((a.os = "android"), (a.android = !0)),
              (d || p || u) && ((a.os = "ios"), (a.ios = !0)),
              a
            );
          })(e)),
        Ft
      );
    }
    function Ut() {
      return (
        Gt ||
          (Gt = (function () {
            const e = Tt();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        Gt
      );
    }
    const Xt = {
      on(e, t, s) {
        const n = this;
        if ("function" != typeof t) return n;
        const i = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            n.eventsListeners[e] || (n.eventsListeners[e] = []),
              n.eventsListeners[e][i](t);
          }),
          n
        );
      },
      once(e, t, s) {
        const n = this;
        if ("function" != typeof t) return n;
        function i() {
          n.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
          for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++)
            r[a] = arguments[a];
          t.apply(n, r);
        }
        return (i.__emitterProxy = t), n.on(e, i, s);
      },
      onAny(e, t) {
        const s = this;
        if ("function" != typeof e) return s;
        const n = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[n](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((n, i) => {
                    (n === t || (n.__emitterProxy && n.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(i, 1);
                  });
            }),
            s)
          : s;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners) return e;
        let t, s, n;
        for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++)
          r[a] = arguments[a];
        "string" == typeof r[0] || Array.isArray(r[0])
          ? ((t = r[0]), (s = r.slice(1, r.length)), (n = e))
          : ((t = r[0].events), (s = r[0].data), (n = r[0].context || e)),
          s.unshift(n);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(n, [t, ...s]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(n, s);
                });
          }),
          e
        );
      },
    };
    const Yt = {
      updateSize: function () {
        const e = this;
        let t, s;
        const n = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : n[0].clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : n[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(n.css("padding-left") || 0, 10) -
              parseInt(n.css("padding-right") || 0, 10)),
            (s =
              s -
              parseInt(n.css("padding-top") || 0, 10) -
              parseInt(n.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const n = e.params,
          { $wrapperEl: i, size: r, rtlTranslate: a, wrongRTL: o } = e,
          l = e.virtual && n.virtual.enabled,
          c = l ? e.virtual.slides.length : e.slides.length,
          d = i.children(`.${e.params.slideClass}`),
          u = l ? e.virtual.slides.length : d.length;
        let p = [];
        const f = [],
          h = [];
        let m = n.slidesOffsetBefore;
        "function" == typeof m && (m = n.slidesOffsetBefore.call(e));
        let g = n.slidesOffsetAfter;
        "function" == typeof g && (g = n.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          b = e.slidesGrid.length;
        let y = n.spaceBetween,
          w = -m,
          S = 0,
          x = 0;
        if (void 0 === r) return;
        "string" == typeof y &&
          y.indexOf("%") >= 0 &&
          (y = (parseFloat(y.replace("%", "")) / 100) * r),
          (e.virtualSize = -y),
          a
            ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          n.centeredSlides &&
            n.cssMode &&
            (jt(e.wrapperEl, "--swiper-centered-offset-before", ""),
            jt(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const E = n.grid && n.grid.rows > 1 && e.grid;
        let C;
        E && e.grid.initSlides(u);
        const T =
          "auto" === n.slidesPerView &&
          n.breakpoints &&
          Object.keys(n.breakpoints).filter(
            (e) => void 0 !== n.breakpoints[e].slidesPerView
          ).length > 0;
        for (let i = 0; i < u; i += 1) {
          C = 0;
          const a = d.eq(i);
          if (
            (E && e.grid.updateSlide(i, a, u, t), "none" !== a.css("display"))
          ) {
            if ("auto" === n.slidesPerView) {
              T && (d[i].style[t("width")] = "");
              const r = getComputedStyle(a[0]),
                o = a[0].style.transform,
                l = a[0].style.webkitTransform;
              if (
                (o && (a[0].style.transform = "none"),
                l && (a[0].style.webkitTransform = "none"),
                n.roundLengths)
              )
                C = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
              else {
                const e = s(r, "width"),
                  t = s(r, "padding-left"),
                  n = s(r, "padding-right"),
                  i = s(r, "margin-left"),
                  o = s(r, "margin-right"),
                  l = r.getPropertyValue("box-sizing");
                if (l && "border-box" === l) C = e + i + o;
                else {
                  const { clientWidth: s, offsetWidth: r } = a[0];
                  C = e + t + n + i + o + (r - s);
                }
              }
              o && (a[0].style.transform = o),
                l && (a[0].style.webkitTransform = l),
                n.roundLengths && (C = Math.floor(C));
            } else
              (C = (r - (n.slidesPerView - 1) * y) / n.slidesPerView),
                n.roundLengths && (C = Math.floor(C)),
                d[i] && (d[i].style[t("width")] = `${C}px`);
            d[i] && (d[i].swiperSlideSize = C),
              h.push(C),
              n.centeredSlides
                ? ((w = w + C / 2 + S / 2 + y),
                  0 === S && 0 !== i && (w = w - r / 2 - y),
                  0 === i && (w = w - r / 2 - y),
                  Math.abs(w) < 0.001 && (w = 0),
                  n.roundLengths && (w = Math.floor(w)),
                  x % n.slidesPerGroup == 0 && p.push(w),
                  f.push(w))
                : (n.roundLengths && (w = Math.floor(w)),
                  (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(w),
                  f.push(w),
                  (w = w + C + y)),
              (e.virtualSize += C + y),
              (S = C),
              (x += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + g),
          a &&
            o &&
            ("slide" === n.effect || "coverflow" === n.effect) &&
            i.css({ width: `${e.virtualSize + n.spaceBetween}px` }),
          n.setWrapperSize &&
            i.css({ [t("width")]: `${e.virtualSize + n.spaceBetween}px` }),
          E && e.grid.updateWrapperSize(C, p, t),
          !n.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < p.length; s += 1) {
            let i = p[s];
            n.roundLengths && (i = Math.floor(i)),
              p[s] <= e.virtualSize - r && t.push(i);
          }
          (p = t),
            Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - r);
        }
        if ((0 === p.length && (p = [0]), 0 !== n.spaceBetween)) {
          const s = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
          d.filter((e, t) => !n.cssMode || t !== d.length - 1).css({
            [s]: `${y}px`,
          });
        }
        if (n.centeredSlides && n.centeredSlidesBounds) {
          let e = 0;
          h.forEach((t) => {
            e += t + (n.spaceBetween ? n.spaceBetween : 0);
          }),
            (e -= n.spaceBetween);
          const t = e - r;
          p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
        }
        if (n.centerInsufficientSlides) {
          let e = 0;
          if (
            (h.forEach((t) => {
              e += t + (n.spaceBetween ? n.spaceBetween : 0);
            }),
            (e -= n.spaceBetween),
            e < r)
          ) {
            const t = (r - e) / 2;
            p.forEach((e, s) => {
              p[s] = e - t;
            }),
              f.forEach((e, s) => {
                f[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: d,
            snapGrid: p,
            slidesGrid: f,
            slidesSizesGrid: h,
          }),
          n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
        ) {
          jt(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
            jt(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - h[h.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (u !== c && e.emit("slidesLengthChange"),
          p.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          f.length !== b && e.emit("slidesGridLengthChange"),
          n.watchSlidesProgress && e.updateSlidesOffset(),
          !(l || n.cssMode || ("slide" !== n.effect && "fade" !== n.effect)))
        ) {
          const t = `${n.containerModifierClass}backface-hidden`,
            s = e.$el.hasClass(t);
          u <= n.maxBackfaceHiddenSlides
            ? s || e.$el.addClass(t)
            : s && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          n = t.virtual && t.params.virtual.enabled;
        let i,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const a = (e) =>
          n
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            t.visibleSlides.each((e) => {
              s.push(e);
            });
          else
            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
              const e = t.activeIndex + i;
              if (e > t.slides.length && !n) break;
              s.push(a(e));
            }
        else s.push(a(t.activeIndex));
        for (i = 0; i < s.length; i += 1)
          if (void 0 !== s[i]) {
            const e = s[i].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let s = 0; s < t.length; s += 1)
          t[s].swiperSlideOffset = e.isHorizontal()
            ? t[s].offsetLeft
            : t[s].offsetTop;
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          s = t.params,
          { slides: n, rtlTranslate: i, snapGrid: r } = t;
        if (0 === n.length) return;
        void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
        let a = -e;
        i && (a = e),
          n.removeClass(s.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < n.length; e += 1) {
          const o = n[e];
          let l = o.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (l -= n[0].swiperSlideOffset);
          const c =
              (a + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + s.spaceBetween),
            d =
              (a - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + s.spaceBetween),
            u = -(a - l),
            p = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (u <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(o),
            t.visibleSlidesIndexes.push(e),
            n.eq(e).addClass(s.slideVisibleClass)),
            (o.progress = i ? -c : c),
            (o.originalProgress = i ? -d : d);
        }
        t.visibleSlides = $t(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          n = t.maxTranslate() - t.minTranslate();
        let { progress: i, isBeginning: r, isEnd: a } = t;
        const o = r,
          l = a;
        0 === n
          ? ((i = 0), (r = !0), (a = !0))
          : ((i = (e - t.minTranslate()) / n), (r = i <= 0), (a = i >= 1)),
          Object.assign(t, { progress: i, isBeginning: r, isEnd: a }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !o && t.emit("reachBeginning toEdge"),
          a && !l && t.emit("reachEnd toEdge"),
          ((o && !r) || (l && !a)) && t.emit("fromEdge"),
          t.emit("progress", i);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: s,
            $wrapperEl: n,
            activeIndex: i,
            realIndex: r,
          } = e,
          a = e.virtual && s.virtual.enabled;
        let o;
        t.removeClass(
          `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
        ),
          (o = a
            ? e.$wrapperEl.find(
                `.${s.slideClass}[data-swiper-slide-index="${i}"]`
              )
            : t.eq(i)),
          o.addClass(s.slideActiveClass),
          s.loop &&
            (o.hasClass(s.slideDuplicateClass)
              ? n
                  .children(
                    `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass)
              : n
                  .children(
                    `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass));
        let l = o.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
        s.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(s.slideNextClass));
        let c = o.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
        s.loop &&
          0 === c.length &&
          ((c = t.eq(-1)), c.addClass(s.slidePrevClass)),
          s.loop &&
            (l.hasClass(s.slideDuplicateClass)
              ? n
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass)
              : n
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass),
            c.hasClass(s.slideDuplicateClass)
              ? n
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)
              : n
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: n,
            snapGrid: i,
            params: r,
            activeIndex: a,
            realIndex: o,
            snapIndex: l,
          } = t;
        let c,
          d = e;
        if (void 0 === d) {
          for (let e = 0; e < n.length; e += 1)
            void 0 !== n[e + 1]
              ? s >= n[e] && s < n[e + 1] - (n[e + 1] - n[e]) / 2
                ? (d = e)
                : s >= n[e] && s < n[e + 1] && (d = e + 1)
              : s >= n[e] && (d = e);
          r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }
        if (i.indexOf(s) >= 0) c = i.indexOf(s);
        else {
          const e = Math.min(r.slidesPerGroupSkip, d);
          c = e + Math.floor((d - e) / r.slidesPerGroup);
        }
        if ((c >= i.length && (c = i.length - 1), d === a))
          return void (
            c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
          );
        const u = parseInt(
          t.slides.eq(d).attr("data-swiper-slide-index") || d,
          10
        );
        Object.assign(t, {
          snapIndex: c,
          realIndex: u,
          previousIndex: a,
          activeIndex: d,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          o !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          n = $t(e).closest(`.${s.slideClass}`)[0];
        let i,
          r = !1;
        if (n)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === n) {
              (r = !0), (i = e);
              break;
            }
        if (!n || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = n),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                $t(n).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = i),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const Kt = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const {
          params: t,
          rtlTranslate: s,
          translate: n,
          $wrapperEl: i,
        } = this;
        if (t.virtualTranslate) return s ? -n : n;
        if (t.cssMode) return n;
        let r = Nt(i[0], e);
        return s && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          {
            rtlTranslate: n,
            params: i,
            $wrapperEl: r,
            wrapperEl: a,
            progress: o,
          } = s;
        let l,
          c = 0,
          d = 0;
        s.isHorizontal() ? (c = n ? -e : e) : (d = e),
          i.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
          i.cssMode
            ? (a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -c : -d)
            : i.virtualTranslate ||
              r.transform(`translate3d(${c}px, ${d}px, 0px)`),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? c : d);
        const u = s.maxTranslate() - s.minTranslate();
        (l = 0 === u ? 0 : (e - s.minTranslate()) / u),
          l !== o && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, s, n, i) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          void 0 === n && (n = !0);
        const r = this,
          { params: a, wrapperEl: o } = r;
        if (r.animating && a.preventInteractionOnTransition) return !1;
        const l = r.minTranslate(),
          c = r.maxTranslate();
        let d;
        if (
          ((d = n && e > l ? l : n && e < c ? c : e),
          r.updateProgress(d),
          a.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!r.support.smoothScroll)
              return (
                zt({ swiper: r, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            o.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(d),
              s &&
                (r.emit("beforeTransitionStart", t, i),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(d),
              s &&
                (r.emit("beforeTransitionStart", t, i),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      s && r.emit("transitionEnd"));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function Qt(e) {
      let { swiper: t, runCallbacks: s, direction: n, step: i } = e;
      const { activeIndex: r, previousIndex: a } = t;
      let o = n;
      if (
        (o || (o = r > a ? "next" : r < a ? "prev" : "reset"),
        t.emit(`transition${i}`),
        s && r !== a)
      ) {
        if ("reset" === o) return void t.emit(`slideResetTransition${i}`);
        t.emit(`slideChangeTransition${i}`),
          "next" === o
            ? t.emit(`slideNextTransition${i}`)
            : t.emit(`slidePrevTransition${i}`);
      }
    }
    const Zt = {
      slideTo: function (e, t, s, n, i) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "number" != typeof e && "string" != typeof e)
        )
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const r = this;
        let a = e;
        a < 0 && (a = 0);
        const {
          params: o,
          snapGrid: l,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: f,
          enabled: h,
        } = r;
        if (
          (r.animating && o.preventInteractionOnTransition) ||
          (!h && !n && !i)
        )
          return !1;
        const m = Math.min(r.params.slidesPerGroupSkip, a);
        let g = m + Math.floor((a - m) / r.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1),
          (u || o.initialSlide || 0) === (d || 0) &&
            s &&
            r.emit("beforeSlideChangeStart");
        const v = -l[g];
        if ((r.updateProgress(v), o.normalizeSlideIndex))
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              s = Math.floor(100 * c[e]),
              n = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= s && t < n - (n - s) / 2
                ? (a = e)
                : t >= s && t < n && (a = e + 1)
              : t >= s && (a = e);
          }
        if (r.initialized && a !== u) {
          if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
            return !1;
          if (
            !r.allowSlidePrev &&
            v > r.translate &&
            v > r.maxTranslate() &&
            (u || 0) !== a
          )
            return !1;
        }
        let b;
        if (
          ((b = a > u ? "next" : a < u ? "prev" : "reset"),
          (p && -v === r.translate) || (!p && v === r.translate))
        )
          return (
            r.updateActiveIndex(a),
            o.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== o.effect && r.setTranslate(v),
            "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
            !1
          );
        if (o.cssMode) {
          const e = r.isHorizontal(),
            s = p ? v : -v;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              (f[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._swiperImmediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                zt({ swiper: r, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            f.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(v),
          r.updateActiveIndex(a),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, n),
          r.transitionStart(s, b),
          0 === t
            ? r.transitionEnd(s, b)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(s, b));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e, t, s, n) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0);
        const i = this;
        let r = e;
        return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, n);
      },
      slideNext: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const n = this,
          { animating: i, enabled: r, params: a } = n;
        if (!r) return n;
        let o = a.slidesPerGroup;
        "auto" === a.slidesPerView &&
          1 === a.slidesPerGroup &&
          a.slidesPerGroupAuto &&
          (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
        const l = n.activeIndex < a.slidesPerGroupSkip ? 1 : o;
        if (a.loop) {
          if (i && a.loopPreventsSlide) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        return a.rewind && n.isEnd
          ? n.slideTo(0, e, t, s)
          : n.slideTo(n.activeIndex + l, e, t, s);
      },
      slidePrev: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const n = this,
          {
            params: i,
            animating: r,
            snapGrid: a,
            slidesGrid: o,
            rtlTranslate: l,
            enabled: c,
          } = n;
        if (!c) return n;
        if (i.loop) {
          if (r && i.loopPreventsSlide) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = d(l ? n.translate : -n.translate),
          p = a.map((e) => d(e));
        let f = a[p.indexOf(u) - 1];
        if (void 0 === f && i.cssMode) {
          let e;
          a.forEach((t, s) => {
            u >= t && (e = s);
          }),
            void 0 !== e && (f = a[e > 0 ? e - 1 : e]);
        }
        let h = 0;
        if (
          (void 0 !== f &&
            ((h = o.indexOf(f)),
            h < 0 && (h = n.activeIndex - 1),
            "auto" === i.slidesPerView &&
              1 === i.slidesPerGroup &&
              i.slidesPerGroupAuto &&
              ((h = h - n.slidesPerViewDynamic("previous", !0) + 1),
              (h = Math.max(h, 0)))),
          i.rewind && n.isBeginning)
        ) {
          const i =
            n.params.virtual && n.params.virtual.enabled && n.virtual
              ? n.virtual.slides.length - 1
              : n.slides.length - 1;
          return n.slideTo(i, e, t, s);
        }
        return n.slideTo(h, e, t, s);
      },
      slideReset: function (e, t, s) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, s)
        );
      },
      slideToClosest: function (e, t, s, n) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === n && (n = 0.5);
        const i = this;
        let r = i.activeIndex;
        const a = Math.min(i.params.slidesPerGroupSkip, r),
          o = a + Math.floor((r - a) / i.params.slidesPerGroup),
          l = i.rtlTranslate ? i.translate : -i.translate;
        if (l >= i.snapGrid[o]) {
          const e = i.snapGrid[o];
          l - e > (i.snapGrid[o + 1] - e) * n && (r += i.params.slidesPerGroup);
        } else {
          const e = i.snapGrid[o - 1];
          l - e <= (i.snapGrid[o] - e) * n && (r -= i.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, i.slidesGrid.length - 1)),
          i.slideTo(r, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: s } = e,
          n =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let i,
          r = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (i = parseInt(
            $t(e.clickedSlide).attr("data-swiper-slide-index"),
            10
          )),
            t.centeredSlides
              ? r < e.loopedSlides - n / 2 ||
                r > e.slides.length - e.loopedSlides + n / 2
                ? (e.loopFix(),
                  (r = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  Dt(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - n
              ? (e.loopFix(),
                (r = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                Dt(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    const Jt = {
      loopCreate: function () {
        const e = this,
          t = Et(),
          { params: s, $wrapperEl: n } = e,
          i = n.children().length > 0 ? $t(n.children()[0].parentNode) : n;
        i.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
        let r = i.children(`.${s.slideClass}`);
        if (s.loopFillGroupWithBlank) {
          const e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
          if (e !== s.slidesPerGroup) {
            for (let n = 0; n < e; n += 1) {
              const e = $t(t.createElement("div")).addClass(
                `${s.slideClass} ${s.slideBlankClass}`
              );
              i.append(e);
            }
            r = i.children(`.${s.slideClass}`);
          }
        }
        "auto" !== s.slidesPerView ||
          s.loopedSlides ||
          (s.loopedSlides = r.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(s.loopedSlides || s.slidesPerView, 10)
          )),
          (e.loopedSlides += s.loopAdditionalSlides),
          e.loopedSlides > r.length && (e.loopedSlides = r.length);
        const a = [],
          o = [];
        r.each((t, s) => {
          const n = $t(t);
          s < e.loopedSlides && o.push(t),
            s < r.length && s >= r.length - e.loopedSlides && a.push(t),
            n.attr("data-swiper-slide-index", s);
        });
        for (let e = 0; e < o.length; e += 1)
          i.append($t(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        for (let e = a.length - 1; e >= 0; e -= 1)
          i.prepend($t(a[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: s,
          loopedSlides: n,
          allowSlidePrev: i,
          allowSlideNext: r,
          snapGrid: a,
          rtlTranslate: o,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const c = -a[t] - e.getTranslate();
        if (t < n) {
          (l = s.length - 3 * n + t), (l += n);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((o ? -e.translate : e.translate) - c);
        } else if (t >= s.length - n) {
          (l = -s.length + t + n), (l += n);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((o ? -e.translate : e.translate) - c);
        }
        (e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: s } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          s.removeAttr("data-swiper-slide-index");
      },
    };
    function es(e) {
      const t = this,
        s = Et(),
        n = Tt(),
        i = t.touchEventsData,
        { params: r, touches: a, enabled: o } = t;
      if (!o) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let c = $t(l.target);
      if ("wrapper" === r.touchEventsTarget && !c.closest(t.wrapperEl).length)
        return;
      if (
        ((i.isTouchEvent = "touchstart" === l.type),
        !i.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!i.isTouchEvent && "button" in l && l.button > 0) return;
      if (i.isTouched && i.isMoved) return;
      !!r.noSwipingClass &&
        "" !== r.noSwipingClass &&
        l.target &&
        l.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (c = $t(e.path[0]));
      const d = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        u = !(!l.target || !l.target.shadowRoot);
      if (
        r.noSwiping &&
        (u
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(s) {
                  return s && s !== Et() && s !== Tt()
                    ? (s.assignedSlot && (s = s.assignedSlot),
                      s.closest(e) || t(s.getRootNode().host))
                    : null;
                })(t)
              );
            })(d, l.target)
          : c.closest(d)[0])
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !c.closest(r.swipeHandler)[0]) return;
      (a.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (a.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const p = a.currentX,
        f = a.currentY,
        h = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        m = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (h && (p <= m || p >= n.innerWidth - m)) {
        if ("prevent" !== h) return;
        e.preventDefault();
      }
      if (
        (Object.assign(i, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (a.startX = p),
        (a.startY = f),
        (i.touchStartTime = It()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (i.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        c.is(i.focusableElements) &&
          ((e = !1), "SELECT" === c[0].nodeName && (i.isTouched = !1)),
          s.activeElement &&
            $t(s.activeElement).is(i.focusableElements) &&
            s.activeElement !== c[0] &&
            s.activeElement.blur();
        const n = e && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !n) ||
          c[0].isContentEditable ||
          l.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !r.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function ts(e) {
      const t = Et(),
        s = this,
        n = s.touchEventsData,
        { params: i, touches: r, rtlTranslate: a, enabled: o } = s;
      if (!o) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !n.isTouched))
        return void (
          n.startMoving &&
          n.isScrolling &&
          s.emit("touchMoveOpposite", l)
        );
      if (n.isTouchEvent && "touchmove" !== l.type) return;
      const c =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        d = "touchmove" === l.type ? c.pageX : l.pageX,
        u = "touchmove" === l.type ? c.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (r.startX = d), void (r.startY = u);
      if (!s.allowTouchMove)
        return (
          $t(l.target).is(n.focusableElements) || (s.allowClick = !1),
          void (
            n.isTouched &&
            (Object.assign(r, {
              startX: d,
              startY: u,
              currentX: d,
              currentY: u,
            }),
            (n.touchStartTime = It()))
          )
        );
      if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
        if (s.isVertical()) {
          if (
            (u < r.startY && s.translate <= s.maxTranslate()) ||
            (u > r.startY && s.translate >= s.minTranslate())
          )
            return (n.isTouched = !1), void (n.isMoved = !1);
        } else if (
          (d < r.startX && s.translate <= s.maxTranslate()) ||
          (d > r.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        n.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        $t(l.target).is(n.focusableElements)
      )
        return (n.isMoved = !0), void (s.allowClick = !1);
      if (
        (n.allowTouchCallbacks && s.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (r.currentX = d), (r.currentY = u);
      const p = r.currentX - r.startX,
        f = r.currentY - r.startY;
      if (s.params.threshold && Math.sqrt(p ** 2 + f ** 2) < s.params.threshold)
        return;
      if (void 0 === n.isScrolling) {
        let e;
        (s.isHorizontal() && r.currentY === r.startY) ||
        (s.isVertical() && r.currentX === r.startX)
          ? (n.isScrolling = !1)
          : p * p + f * f >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(f), Math.abs(p))) / Math.PI),
            (n.isScrolling = s.isHorizontal()
              ? e > i.touchAngle
              : 90 - e > i.touchAngle));
      }
      if (
        (n.isScrolling && s.emit("touchMoveOpposite", l),
        void 0 === n.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (n.startMoving = !0)),
        n.isScrolling)
      )
        return void (n.isTouched = !1);
      if (!n.startMoving) return;
      (s.allowClick = !1),
        !i.cssMode && l.cancelable && l.preventDefault(),
        i.touchMoveStopPropagation && !i.nested && l.stopPropagation(),
        n.isMoved ||
          (i.loop && !i.cssMode && s.loopFix(),
          (n.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating &&
            s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (n.allowMomentumBounce = !1),
          !i.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", l)),
        s.emit("sliderMove", l),
        (n.isMoved = !0);
      let h = s.isHorizontal() ? p : f;
      (r.diff = h),
        (h *= i.touchRatio),
        a && (h = -h),
        (s.swipeDirection = h > 0 ? "prev" : "next"),
        (n.currentTranslate = h + n.startTranslate);
      let m = !0,
        g = i.resistanceRatio;
      if (
        (i.touchReleaseOnEdges && (g = 0),
        h > 0 && n.currentTranslate > s.minTranslate()
          ? ((m = !1),
            i.resistance &&
              (n.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + n.startTranslate + h) ** g))
          : h < 0 &&
            n.currentTranslate < s.maxTranslate() &&
            ((m = !1),
            i.resistance &&
              (n.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - n.startTranslate - h) ** g)),
        m && (l.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          n.currentTranslate < n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          n.currentTranslate > n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (n.currentTranslate = n.startTranslate),
        i.threshold > 0)
      ) {
        if (!(Math.abs(h) > i.threshold || n.allowThresholdMove))
          return void (n.currentTranslate = n.startTranslate);
        if (!n.allowThresholdMove)
          return (
            (n.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (n.currentTranslate = n.startTranslate),
            void (r.diff = s.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      i.followFinger &&
        !i.cssMode &&
        (((i.freeMode && i.freeMode.enabled && s.freeMode) ||
          i.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          i.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(n.currentTranslate),
        s.setTranslate(n.currentTranslate));
    }
    function ss(e) {
      const t = this,
        s = t.touchEventsData,
        {
          params: n,
          touches: i,
          rtlTranslate: r,
          slidesGrid: a,
          enabled: o,
        } = t;
      if (!o) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", l),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      n.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = It(),
        d = c - s.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          d < 300 &&
            c - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((s.lastClickTime = It()),
        Dt(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === i.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let u;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (u = n.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        n.cssMode)
      )
        return;
      if (t.params.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let p = 0,
        f = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < a.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== a[e + t]
          ? u >= a[e] && u < a[e + t] && ((p = e), (f = a[e + t] - a[e]))
          : u >= a[e] && ((p = e), (f = a[a.length - 1] - a[a.length - 2]));
      }
      let h = null,
        m = null;
      n.rewind &&
        (t.isBeginning
          ? (m =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (h = 0));
      const g = (u - a[p]) / f,
        v = p < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (d > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (g >= n.longSwipesRatio
            ? t.slideTo(n.rewind && t.isEnd ? h : p + v)
            : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (g > 1 - n.longSwipesRatio
              ? t.slideTo(p + v)
              : null !== m && g < 0 && Math.abs(g) > n.longSwipesRatio
              ? t.slideTo(m)
              : t.slideTo(p));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(p + v)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : p + v),
            "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p));
      }
    }
    function ns() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: n, allowSlidePrev: i, snapGrid: r } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = i),
        (e.allowSlideNext = n),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function is(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function rs() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: n } = e;
      if (!n) return;
      let i;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let as = !1;
    function os() {}
    const ls = (e, t) => {
      const s = Et(),
        {
          params: n,
          touchEvents: i,
          el: r,
          wrapperEl: a,
          device: o,
          support: l,
        } = e,
        c = !!n.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== i.start ||
          !l.passiveListener ||
          !n.passiveListeners
        ) && { passive: !0, capture: !1 };
        r[d](i.start, e.onTouchStart, t),
          r[d](
            i.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: c } : c
          ),
          r[d](i.end, e.onTouchEnd, t),
          i.cancel && r[d](i.cancel, e.onTouchEnd, t);
      } else
        r[d](i.start, e.onTouchStart, !1),
          s[d](i.move, e.onTouchMove, c),
          s[d](i.end, e.onTouchEnd, !1);
      (n.preventClicks || n.preventClicksPropagation) &&
        r[d]("click", e.onClick, !0),
        n.cssMode && a[d]("scroll", e.onScroll),
        n.updateOnWindowResize
          ? e[u](
              o.ios || o.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              ns,
              !0
            )
          : e[u]("observerUpdate", ns, !0);
    };
    const cs = {
        attachEvents: function () {
          const e = this,
            t = Et(),
            { params: s, support: n } = e;
          (e.onTouchStart = es.bind(e)),
            (e.onTouchMove = ts.bind(e)),
            (e.onTouchEnd = ss.bind(e)),
            s.cssMode && (e.onScroll = rs.bind(e)),
            (e.onClick = is.bind(e)),
            n.touch && !as && (t.addEventListener("touchstart", os), (as = !0)),
            ls(e, "on");
        },
        detachEvents: function () {
          ls(this, "off");
        },
      },
      ds = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const us = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: s,
            loopedSlides: n = 0,
            params: i,
            $el: r,
          } = e,
          a = i.breakpoints;
        if (!a || (a && 0 === Object.keys(a).length)) return;
        const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
        if (!o || e.currentBreakpoint === o) return;
        const l = (o in a ? a[o] : void 0) || e.originalParams,
          c = ds(e, i),
          d = ds(e, l),
          u = i.enabled;
        c && !d
          ? (r.removeClass(
              `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !c &&
            d &&
            (r.addClass(`${i.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === i.grid.fill)) &&
              r.addClass(`${i.containerModifierClass}grid-column`),
            e.emitContainerClasses());
        const p = l.direction && l.direction !== i.direction,
          f = i.loop && (l.slidesPerView !== i.slidesPerView || p);
        p && s && e.changeDirection(), Bt(e.params, l);
        const h = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          u && !h ? e.disable() : !u && h && e.enable(),
          (e.currentBreakpoint = o),
          e.emit("_beforeBreakpoint", l),
          f &&
            s &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - n + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t, s) {
        if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
          return;
        let n = !1;
        const i = Tt(),
          r = "window" === t ? i.innerHeight : s.clientHeight,
          a = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: r * t, point: e };
            }
            return { value: e, point: e };
          });
        a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < a.length; e += 1) {
          const { point: r, value: o } = a[e];
          "window" === t
            ? i.matchMedia(`(min-width: ${o}px)`).matches && (n = r)
            : o <= s.clientWidth && (n = r);
        }
        return n || "max";
      },
    };
    const ps = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: s,
            rtl: n,
            $el: i,
            device: r,
            support: a,
          } = e,
          o = (function (e, t) {
            const s = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((n) => {
                      e[n] && s.push(t + n);
                    })
                  : "string" == typeof e && s.push(t + e);
              }),
              s
            );
          })(
            [
              "initialized",
              s.direction,
              { "pointer-events": !a.touch },
              { "free-mode": e.params.freeMode && s.freeMode.enabled },
              { autoheight: s.autoHeight },
              { rtl: n },
              { grid: s.grid && s.grid.rows > 1 },
              {
                "grid-column":
                  s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
              },
              { android: r.android },
              { ios: r.ios },
              { "css-mode": s.cssMode },
              { centered: s.cssMode && s.centeredSlides },
            ],
            s.containerModifierClass
          );
        t.push(...o), i.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const fs = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function hs(e, t) {
      return function (s) {
        void 0 === s && (s = {});
        const n = Object.keys(s)[0],
          i = s[n];
        "object" == typeof i && null !== i
          ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 &&
              !0 === e[n] &&
              (e[n] = { auto: !0 }),
            n in e && "enabled" in i
              ? (!0 === e[n] && (e[n] = { enabled: !0 }),
                "object" != typeof e[n] ||
                  "enabled" in e[n] ||
                  (e[n].enabled = !0),
                e[n] || (e[n] = { enabled: !1 }),
                Bt(t, s))
              : Bt(t, s))
          : Bt(t, s);
      };
    }
    const ms = {
        eventsEmitter: Xt,
        update: Yt,
        translate: Kt,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode || s.$wrapperEl.transition(e),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: n } = s;
            n.cssMode ||
              (n.autoHeight && s.updateAutoHeight(),
              Qt({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: n } = s;
            (s.animating = !1),
              n.cssMode ||
                (s.setTransition(0),
                Qt({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: Zt,
        loop: Jt,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (s.style.cursor = "move"),
              (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (s.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: cs,
        breakpoints: us,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: n } = s;
            if (n) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: ps,
        images: {
          loadImage: function (e, t, s, n, i, r) {
            const a = Tt();
            let o;
            function l() {
              r && r();
            }
            $t(e).parent("picture")[0] || (e.complete && i)
              ? l()
              : t
              ? ((o = new a.Image()),
                (o.onload = l),
                (o.onerror = l),
                n && (o.sizes = n),
                s && (o.srcset = s),
                t && (o.src = t))
              : l();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
              const n = e.imagesToLoad[s];
              e.loadImage(
                n,
                n.currentSrc || n.getAttribute("src"),
                n.srcset || n.getAttribute("srcset"),
                n.sizes || n.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      gs = {};
    class vs {
      constructor() {
        let e, t;
        for (var s = arguments.length, n = new Array(s), i = 0; i < s; i++)
          n[i] = arguments[i];
        if (
          (1 === n.length &&
          n[0].constructor &&
          "Object" === Object.prototype.toString.call(n[0]).slice(8, -1)
            ? (t = n[0])
            : ([e, t] = n),
          t || (t = {}),
          (t = Bt({}, t)),
          e && !t.el && (t.el = e),
          t.el && $t(t.el).length > 1)
        ) {
          const e = [];
          return (
            $t(t.el).each((s) => {
              const n = Bt({}, t, { el: s });
              e.push(new vs(n));
            }),
            e
          );
        }
        const r = this;
        (r.__swiper__ = !0),
          (r.support = Rt()),
          (r.device = Wt({ userAgent: t.userAgent })),
          (r.browser = Ut()),
          (r.eventsListeners = {}),
          (r.eventsAnyListeners = []),
          (r.modules = [...r.__modules__]),
          t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
        const a = {};
        r.modules.forEach((e) => {
          e({
            swiper: r,
            extendParams: hs(t, a),
            on: r.on.bind(r),
            once: r.once.bind(r),
            off: r.off.bind(r),
            emit: r.emit.bind(r),
          });
        });
        const o = Bt({}, fs, a);
        return (
          (r.params = Bt({}, o, gs, t)),
          (r.originalParams = Bt({}, r.params)),
          (r.passedParams = Bt({}, t)),
          r.params &&
            r.params.on &&
            Object.keys(r.params.on).forEach((e) => {
              r.on(e, r.params.on[e]);
            }),
          r.params && r.params.onAny && r.onAny(r.params.onAny),
          (r.$ = $t),
          Object.assign(r, {
            enabled: r.params.enabled,
            el: e,
            classNames: [],
            slides: $t(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === r.params.direction,
            isVertical: () => "vertical" === r.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (r.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                r.support.touch || !r.params.simulateTouch
                  ? r.touchEventsTouch
                  : r.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: r.params.focusableElements,
              lastClickTime: It(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          r.emit("_swiper"),
          r.params.init && r.init(),
          r
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = s.minTranslate(),
          i = (s.maxTranslate() - n) * e + n;
        s.translateTo(i, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
          )
          .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((s) => {
          const n = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: n }), e.emit("_slideClass", s, n);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: s,
          slides: n,
          slidesGrid: i,
          slidesSizesGrid: r,
          size: a,
          activeIndex: o,
        } = this;
        let l = 1;
        if (s.centeredSlides) {
          let e,
            t = n[o].swiperSlideSize;
          for (let s = o + 1; s < n.length; s += 1)
            n[s] &&
              !e &&
              ((t += n[s].swiperSlideSize), (l += 1), t > a && (e = !0));
          for (let s = o - 1; s >= 0; s -= 1)
            n[s] &&
              !e &&
              ((t += n[s].swiperSlideSize), (l += 1), t > a && (e = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < n.length; e += 1) {
            (t ? i[e] + r[e] - i[o] < a : i[e] - i[o] < a) && (l += 1);
          }
        else
          for (let e = o - 1; e >= 0; e -= 1) {
            i[o] - i[e] < a && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function n() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let i;
        s.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (n(), e.params.autoHeight && e.updateAutoHeight())
            : ((i =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              i || n()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const s = this,
          n = s.params.direction;
        return (
          e || (e = "horizontal" === n ? "vertical" : "horizontal"),
          e === n ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.$el
              .removeClass(`${s.params.containerModifierClass}${n}`)
              .addClass(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const s = $t(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;
        const n = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let i = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = $t(e.shadowRoot.querySelector(n()));
            return (t.children = (e) => s.children(e)), t;
          }
          return s.children(n());
        })();
        if (0 === i.length && t.params.createElements) {
          const e = Et().createElement("div");
          (i = $t(e)),
            (e.className = t.params.wrapperClass),
            s.append(e),
            s.children(`.${t.params.slideClass}`).each((e) => {
              i.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: s,
            el: e,
            $wrapperEl: i,
            wrapperEl: i[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === i.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const s = this,
          { params: n, $el: i, $wrapperEl: r, slides: a } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            n.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              i.removeAttr("style"),
              r.removeAttr("style"),
              a &&
                a.length &&
                a
                  .removeClass(
                    [
                      n.slideVisibleClass,
                      n.slideActiveClass,
                      n.slideNextClass,
                      n.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        Bt(gs, e);
      }
      static get extendedDefaults() {
        return gs;
      }
      static get defaults() {
        return fs;
      }
      static installModule(e) {
        vs.prototype.__modules__ || (vs.prototype.__modules__ = []);
        const t = vs.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => vs.installModule(e)), vs)
          : (vs.installModule(e), vs);
      }
    }
    Object.keys(ms).forEach((e) => {
      Object.keys(ms[e]).forEach((t) => {
        vs.prototype[t] = ms[e][t];
      });
    }),
      vs.use([
        function (e) {
          let { swiper: t, on: s, emit: n } = e;
          const i = Tt();
          let r = null,
            a = null;
          const o = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (n("beforeResize"), n("resize"));
            },
            l = () => {
              t && !t.destroyed && t.initialized && n("orientationchange");
            };
          s("init", () => {
            t.params.resizeObserver && void 0 !== i.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((r = new ResizeObserver((e) => {
                  a = i.requestAnimationFrame(() => {
                    const { width: s, height: n } = t;
                    let i = s,
                      r = n;
                    e.forEach((e) => {
                      let { contentBoxSize: s, contentRect: n, target: a } = e;
                      (a && a !== t.el) ||
                        ((i = n ? n.width : (s[0] || s).inlineSize),
                        (r = n ? n.height : (s[0] || s).blockSize));
                    }),
                      (i === s && r === n) || o();
                  });
                })),
                r.observe(t.el))
              : (i.addEventListener("resize", o),
                i.addEventListener("orientationchange", l));
          }),
            s("destroy", () => {
              a && i.cancelAnimationFrame(a),
                r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                i.removeEventListener("resize", o),
                i.removeEventListener("orientationchange", l);
            });
        },
        function (e) {
          let { swiper: t, extendParams: s, on: n, emit: i } = e;
          const r = [],
            a = Tt(),
            o = function (e, t) {
              void 0 === t && (t = {});
              const s = new (a.MutationObserver || a.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void i("observerUpdate", e[0]);
                  const t = function () {
                    i("observerUpdate", e[0]);
                  };
                  a.requestAnimationFrame
                    ? a.requestAnimationFrame(t)
                    : a.setTimeout(t, 0);
                }
              );
              s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                r.push(s);
            };
          s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            n("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1) o(e[t]);
                }
                o(t.$el[0], { childList: t.params.observeSlideChildren }),
                  o(t.$wrapperEl[0], { attributes: !1 });
              }
            }),
            n("destroy", () => {
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]);
    const bs = vs;
    function ys(e, t, s, n) {
      const i = Et();
      return (
        e.params.createElements &&
          Object.keys(n).forEach((r) => {
            if (!s[r] && !0 === s.auto) {
              let a = e.$el.children(`.${n[r]}`)[0];
              a ||
                ((a = i.createElement("div")),
                (a.className = n[r]),
                e.$el.append(a)),
                (s[r] = a),
                (t[r] = a);
            }
          }),
        s
      );
    }
    function ws(e) {
      let { swiper: t, extendParams: s, on: n, emit: i } = e;
      function r(e) {
        let s;
        return (
          e &&
            ((s = $t(e)),
            t.params.uniqueNavElements &&
              "string" == typeof e &&
              s.length > 1 &&
              1 === t.$el.find(e).length &&
              (s = t.$el.find(e))),
          s
        );
      }
      function a(e, s) {
        const n = t.params.navigation;
        e &&
          e.length > 0 &&
          (e[s ? "addClass" : "removeClass"](n.disabledClass),
          e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s),
          t.params.watchOverflow &&
            t.enabled &&
            e[t.isLocked ? "addClass" : "removeClass"](n.lockClass));
      }
      function o() {
        if (t.params.loop) return;
        const { $nextEl: e, $prevEl: s } = t.navigation;
        a(s, t.isBeginning && !t.params.rewind),
          a(e, t.isEnd && !t.params.rewind);
      }
      function l(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
      }
      function c(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
      }
      function d() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = ys(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        const s = r(e.nextEl),
          n = r(e.prevEl);
        s && s.length > 0 && s.on("click", c),
          n && n.length > 0 && n.on("click", l),
          Object.assign(t.navigation, {
            $nextEl: s,
            nextEl: s && s[0],
            $prevEl: n,
            prevEl: n && n[0],
          }),
          t.enabled ||
            (s && s.addClass(e.lockClass), n && n.addClass(e.lockClass));
      }
      function u() {
        const { $nextEl: e, $prevEl: s } = t.navigation;
        e &&
          e.length &&
          (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)),
          s &&
            s.length &&
            (s.off("click", l),
            s.removeClass(t.params.navigation.disabledClass));
      }
      s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
        },
      }),
        (t.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        n("init", () => {
          d(), o();
        }),
        n("toEdge fromEdge lock unlock", () => {
          o();
        }),
        n("destroy", () => {
          u();
        }),
        n("enable disable", () => {
          const { $nextEl: e, $prevEl: s } = t.navigation;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.navigation.lockClass
            ),
            s &&
              s[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              );
        }),
        n("click", (e, s) => {
          const { $nextEl: n, $prevEl: r } = t.navigation,
            a = s.target;
          if (t.params.navigation.hideOnClick && !$t(a).is(r) && !$t(a).is(n)) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === a || t.pagination.el.contains(a))
            )
              return;
            let e;
            n
              ? (e = n.hasClass(t.params.navigation.hiddenClass))
              : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
              i(!0 === e ? "navigationShow" : "navigationHide"),
              n && n.toggleClass(t.params.navigation.hiddenClass),
              r && r.toggleClass(t.params.navigation.hiddenClass);
          }
        }),
        Object.assign(t.navigation, { update: o, init: d, destroy: u });
    }
    function Ss(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function xs(e) {
      let { swiper: t, extendParams: s, on: n, emit: i } = e;
      const r = "swiper-pagination";
      let a;
      s({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
        },
      }),
        (t.pagination = { el: null, $el: null, bullets: [] });
      let o = 0;
      function l() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          !t.pagination.$el ||
          0 === t.pagination.$el.length
        );
      }
      function c(e, s) {
        const { bulletActiveClass: n } = t.params.pagination;
        e[s]().addClass(`${n}-${s}`)[s]().addClass(`${n}-${s}-${s}`);
      }
      function d() {
        const e = t.rtl,
          s = t.params.pagination;
        if (l()) return;
        const n =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          r = t.pagination.$el;
        let d;
        const u = t.params.loop
          ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup)
          : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((d = Math.ceil(
                (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
              )),
              d > n - 1 - 2 * t.loopedSlides && (d -= n - 2 * t.loopedSlides),
              d > u - 1 && (d -= u),
              d < 0 && "bullets" !== t.params.paginationType && (d = u + d))
            : (d = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
          "bullets" === s.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const n = t.pagination.bullets;
          let i, l, u;
          if (
            (s.dynamicBullets &&
              ((a = n
                .eq(0)
                [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              r.css(
                t.isHorizontal() ? "width" : "height",
                a * (s.dynamicMainBullets + 4) + "px"
              ),
              s.dynamicMainBullets > 1 &&
                void 0 !== t.previousIndex &&
                ((o += d - (t.previousIndex - t.loopedSlides || 0)),
                o > s.dynamicMainBullets - 1
                  ? (o = s.dynamicMainBullets - 1)
                  : o < 0 && (o = 0)),
              (i = Math.max(d - o, 0)),
              (l = i + (Math.min(n.length, s.dynamicMainBullets) - 1)),
              (u = (l + i) / 2)),
            n.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${s.bulletActiveClass}${e}`)
                .join(" ")
            ),
            r.length > 1)
          )
            n.each((e) => {
              const t = $t(e),
                n = t.index();
              n === d && t.addClass(s.bulletActiveClass),
                s.dynamicBullets &&
                  (n >= i &&
                    n <= l &&
                    t.addClass(`${s.bulletActiveClass}-main`),
                  n === i && c(t, "prev"),
                  n === l && c(t, "next"));
            });
          else {
            const e = n.eq(d),
              r = e.index();
            if ((e.addClass(s.bulletActiveClass), s.dynamicBullets)) {
              const e = n.eq(i),
                a = n.eq(l);
              for (let e = i; e <= l; e += 1)
                n.eq(e).addClass(`${s.bulletActiveClass}-main`);
              if (t.params.loop)
                if (r >= n.length) {
                  for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                    n.eq(n.length - e).addClass(`${s.bulletActiveClass}-main`);
                  n.eq(n.length - s.dynamicMainBullets - 1).addClass(
                    `${s.bulletActiveClass}-prev`
                  );
                } else c(e, "prev"), c(a, "next");
              else c(e, "prev"), c(a, "next");
            }
          }
          if (s.dynamicBullets) {
            const i = Math.min(n.length, s.dynamicMainBullets + 4),
              r = (a * i - a) / 2 - u * a,
              o = e ? "right" : "left";
            n.css(t.isHorizontal() ? o : "top", `${r}px`);
          }
        }
        if (
          ("fraction" === s.type &&
            (r.find(Ss(s.currentClass)).text(s.formatFractionCurrent(d + 1)),
            r.find(Ss(s.totalClass)).text(s.formatFractionTotal(u))),
          "progressbar" === s.type)
        ) {
          let e;
          e = s.progressbarOpposite
            ? t.isHorizontal()
              ? "vertical"
              : "horizontal"
            : t.isHorizontal()
            ? "horizontal"
            : "vertical";
          const n = (d + 1) / u;
          let i = 1,
            a = 1;
          "horizontal" === e ? (i = n) : (a = n),
            r
              .find(Ss(s.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${a})`)
              .transition(t.params.speed);
        }
        "custom" === s.type && s.renderCustom
          ? (r.html(s.renderCustom(t, d + 1, u)), i("paginationRender", r[0]))
          : i("paginationUpdate", r[0]),
          t.params.watchOverflow &&
            t.enabled &&
            r[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
      }
      function u() {
        const e = t.params.pagination;
        if (l()) return;
        const s =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          n = t.pagination.$el;
        let r = "";
        if ("bullets" === e.type) {
          let i = t.params.loop
            ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.loop &&
            i > s &&
            (i = s);
          for (let s = 0; s < i; s += 1)
            e.renderBullet
              ? (r += e.renderBullet.call(t, s, e.bulletClass))
              : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
          n.html(r), (t.pagination.bullets = n.find(Ss(e.bulletClass)));
        }
        "fraction" === e.type &&
          ((r = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          n.html(r)),
          "progressbar" === e.type &&
            ((r = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
            n.html(r)),
          "custom" !== e.type && i("paginationRender", t.pagination.$el[0]);
      }
      function p() {
        t.params.pagination = ys(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" }
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let s = $t(e.el);
        0 !== s.length &&
          (t.params.uniqueNavElements &&
            "string" == typeof e.el &&
            s.length > 1 &&
            ((s = t.$el.find(e.el)),
            s.length > 1 &&
              (s = s.filter((e) => $t(e).parents(".swiper")[0] === t.el))),
          "bullets" === e.type && e.clickable && s.addClass(e.clickableClass),
          s.addClass(e.modifierClass + e.type),
          s.addClass(e.modifierClass + t.params.direction),
          "bullets" === e.type &&
            e.dynamicBullets &&
            (s.addClass(`${e.modifierClass}${e.type}-dynamic`),
            (o = 0),
            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
          "progressbar" === e.type &&
            e.progressbarOpposite &&
            s.addClass(e.progressbarOppositeClass),
          e.clickable &&
            s.on("click", Ss(e.bulletClass), function (e) {
              e.preventDefault();
              let s = $t(this).index() * t.params.slidesPerGroup;
              t.params.loop && (s += t.loopedSlides), t.slideTo(s);
            }),
          Object.assign(t.pagination, { $el: s, el: s[0] }),
          t.enabled || s.addClass(e.lockClass));
      }
      function f() {
        const e = t.params.pagination;
        if (l()) return;
        const s = t.pagination.$el;
        s.removeClass(e.hiddenClass),
          s.removeClass(e.modifierClass + e.type),
          s.removeClass(e.modifierClass + t.params.direction),
          t.pagination.bullets &&
            t.pagination.bullets.removeClass &&
            t.pagination.bullets.removeClass(e.bulletActiveClass),
          e.clickable && s.off("click", Ss(e.bulletClass));
      }
      n("init", () => {
        p(), u(), d();
      }),
        n("activeIndexChange", () => {
          (t.params.loop || void 0 === t.snapIndex) && d();
        }),
        n("snapIndexChange", () => {
          t.params.loop || d();
        }),
        n("slidesLengthChange", () => {
          t.params.loop && (u(), d());
        }),
        n("snapGridLengthChange", () => {
          t.params.loop || (u(), d());
        }),
        n("destroy", () => {
          f();
        }),
        n("enable disable", () => {
          const { $el: e } = t.pagination;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.pagination.lockClass
            );
        }),
        n("lock unlock", () => {
          d();
        }),
        n("click", (e, s) => {
          const n = s.target,
            { $el: r } = t.pagination;
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            r.length > 0 &&
            !$t(n).hasClass(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && n === t.navigation.nextEl) ||
                (t.navigation.prevEl && n === t.navigation.prevEl))
            )
              return;
            const e = r.hasClass(t.params.pagination.hiddenClass);
            i(!0 === e ? "paginationShow" : "paginationHide"),
              r.toggleClass(t.params.pagination.hiddenClass);
          }
        }),
        Object.assign(t.pagination, {
          render: u,
          update: d,
          init: p,
          destroy: f,
        });
    }
    function Es(e) {
      let { swiper: t, extendParams: s, on: n } = e;
      s({ parallax: { enabled: !1 } });
      const i = (e, s) => {
          const { rtl: n } = t,
            i = $t(e),
            r = n ? -1 : 1,
            a = i.attr("data-swiper-parallax") || "0";
          let o = i.attr("data-swiper-parallax-x"),
            l = i.attr("data-swiper-parallax-y");
          const c = i.attr("data-swiper-parallax-scale"),
            d = i.attr("data-swiper-parallax-opacity");
          if (
            (o || l
              ? ((o = o || "0"), (l = l || "0"))
              : t.isHorizontal()
              ? ((o = a), (l = "0"))
              : ((l = a), (o = "0")),
            (o =
              o.indexOf("%") >= 0
                ? parseInt(o, 10) * s * r + "%"
                : o * s * r + "px"),
            (l =
              l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px"),
            null != d)
          ) {
            const e = d - (d - 1) * (1 - Math.abs(s));
            i[0].style.opacity = e;
          }
          if (null == c) i.transform(`translate3d(${o}, ${l}, 0px)`);
          else {
            const e = c - (c - 1) * (1 - Math.abs(s));
            i.transform(`translate3d(${o}, ${l}, 0px) scale(${e})`);
          }
        },
        r = () => {
          const { $el: e, slides: s, progress: n, snapGrid: r } = t;
          e
            .children(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
            )
            .each((e) => {
              i(e, n);
            }),
            s.each((e, s) => {
              let a = e.progress;
              t.params.slidesPerGroup > 1 &&
                "auto" !== t.params.slidesPerView &&
                (a += Math.ceil(s / 2) - n * (r.length - 1)),
                (a = Math.min(Math.max(a, -1), 1)),
                $t(e)
                  .find(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                  )
                  .each((e) => {
                    i(e, a);
                  });
            });
        };
      n("beforeInit", () => {
        t.params.parallax.enabled &&
          ((t.params.watchSlidesProgress = !0),
          (t.originalParams.watchSlidesProgress = !0));
      }),
        n("init", () => {
          t.params.parallax.enabled && r();
        }),
        n("setTranslate", () => {
          t.params.parallax.enabled && r();
        }),
        n("setTransition", (e, s) => {
          t.params.parallax.enabled &&
            (function (e) {
              void 0 === e && (e = t.params.speed);
              const { $el: s } = t;
              s.find(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              ).each((t) => {
                const s = $t(t);
                let n =
                  parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (n = 0), s.transition(n);
              });
            })(s);
        });
    }
    function Cs(e) {
      let t,
        { swiper: s, extendParams: n, on: i, emit: r } = e;
      function a() {
        const e = s.slides.eq(s.activeIndex);
        let n = s.params.autoplay.delay;
        e.attr("data-swiper-autoplay") &&
          (n = e.attr("data-swiper-autoplay") || s.params.autoplay.delay),
          clearTimeout(t),
          (t = Dt(() => {
            let e;
            s.params.autoplay.reverseDirection
              ? s.params.loop
                ? (s.loopFix(),
                  (e = s.slidePrev(s.params.speed, !0, !0)),
                  r("autoplay"))
                : s.isBeginning
                ? s.params.autoplay.stopOnLastSlide
                  ? l()
                  : ((e = s.slideTo(
                      s.slides.length - 1,
                      s.params.speed,
                      !0,
                      !0
                    )),
                    r("autoplay"))
                : ((e = s.slidePrev(s.params.speed, !0, !0)), r("autoplay"))
              : s.params.loop
              ? (s.loopFix(),
                (e = s.slideNext(s.params.speed, !0, !0)),
                r("autoplay"))
              : s.isEnd
              ? s.params.autoplay.stopOnLastSlide
                ? l()
                : ((e = s.slideTo(0, s.params.speed, !0, !0)), r("autoplay"))
              : ((e = s.slideNext(s.params.speed, !0, !0)), r("autoplay")),
              ((s.params.cssMode && s.autoplay.running) || !1 === e) && a();
          }, n));
      }
      function o() {
        return (
          void 0 === t &&
          !s.autoplay.running &&
          ((s.autoplay.running = !0), r("autoplayStart"), a(), !0)
        );
      }
      function l() {
        return (
          !!s.autoplay.running &&
          void 0 !== t &&
          (t && (clearTimeout(t), (t = void 0)),
          (s.autoplay.running = !1),
          r("autoplayStop"),
          !0)
        );
      }
      function c(e) {
        s.autoplay.running &&
          (s.autoplay.paused ||
            (t && clearTimeout(t),
            (s.autoplay.paused = !0),
            0 !== e && s.params.autoplay.waitForTransition
              ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                  s.$wrapperEl[0].addEventListener(e, u);
                })
              : ((s.autoplay.paused = !1), a())));
      }
      function d() {
        const e = Et();
        "hidden" === e.visibilityState && s.autoplay.running && c(),
          "visible" === e.visibilityState &&
            s.autoplay.paused &&
            (a(), (s.autoplay.paused = !1));
      }
      function u(e) {
        s &&
          !s.destroyed &&
          s.$wrapperEl &&
          e.target === s.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((e) => {
            s.$wrapperEl[0].removeEventListener(e, u);
          }),
          (s.autoplay.paused = !1),
          s.autoplay.running ? a() : l());
      }
      function p() {
        s.params.autoplay.disableOnInteraction
          ? l()
          : (r("autoplayPause"), c()),
          ["transitionend", "webkitTransitionEnd"].forEach((e) => {
            s.$wrapperEl[0].removeEventListener(e, u);
          });
      }
      function f() {
        s.params.autoplay.disableOnInteraction ||
          ((s.autoplay.paused = !1), r("autoplayResume"), a());
      }
      (s.autoplay = { running: !1, paused: !1 }),
        n({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        }),
        i("init", () => {
          if (s.params.autoplay.enabled) {
            o();
            Et().addEventListener("visibilitychange", d),
              s.params.autoplay.pauseOnMouseEnter &&
                (s.$el.on("mouseenter", p), s.$el.on("mouseleave", f));
          }
        }),
        i("beforeTransitionStart", (e, t, n) => {
          s.autoplay.running &&
            (n || !s.params.autoplay.disableOnInteraction
              ? s.autoplay.pause(t)
              : l());
        }),
        i("sliderFirstMove", () => {
          s.autoplay.running &&
            (s.params.autoplay.disableOnInteraction ? l() : c());
        }),
        i("touchEnd", () => {
          s.params.cssMode &&
            s.autoplay.paused &&
            !s.params.autoplay.disableOnInteraction &&
            a();
        }),
        i("destroy", () => {
          s.$el.off("mouseenter", p),
            s.$el.off("mouseleave", f),
            s.autoplay.running && l();
          Et().removeEventListener("visibilitychange", d);
        }),
        Object.assign(s.autoplay, { pause: c, run: a, start: o, stop: l });
    }
    function Ts(e) {
      let { swiper: t, extendParams: s, on: n } = e;
      s({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let i = !1,
        r = !1;
      function a() {
        const e = t.thumbs.swiper;
        if (!e) return;
        const s = e.clickedIndex,
          n = e.clickedSlide;
        if (n && $t(n).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
        if (null == s) return;
        let i;
        if (
          ((i = e.params.loop
            ? parseInt($t(e.clickedSlide).attr("data-swiper-slide-index"), 10)
            : s),
          t.params.loop)
        ) {
          let e = t.activeIndex;
          t.slides.eq(e).hasClass(t.params.slideDuplicateClass) &&
            (t.loopFix(),
            (t._clientLeft = t.$wrapperEl[0].clientLeft),
            (e = t.activeIndex));
          const s = t.slides
              .eq(e)
              .prevAll(`[data-swiper-slide-index="${i}"]`)
              .eq(0)
              .index(),
            n = t.slides
              .eq(e)
              .nextAll(`[data-swiper-slide-index="${i}"]`)
              .eq(0)
              .index();
          i = void 0 === s ? n : void 0 === n ? s : n - e < e - s ? n : s;
        }
        t.slideTo(i);
      }
      function o() {
        const { thumbs: e } = t.params;
        if (i) return !1;
        i = !0;
        const s = t.constructor;
        if (e.swiper instanceof s)
          (t.thumbs.swiper = e.swiper),
            Object.assign(t.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(t.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            });
        else if (Vt(e.swiper)) {
          const n = Object.assign({}, e.swiper);
          Object.assign(n, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (t.thumbs.swiper = new s(n)),
            (r = !0);
        }
        return (
          t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),
          t.thumbs.swiper.on("tap", a),
          !0
        );
      }
      function l(e) {
        const s = t.thumbs.swiper;
        if (!s) return;
        const n =
            "auto" === s.params.slidesPerView
              ? s.slidesPerViewDynamic()
              : s.params.slidesPerView,
          i = t.params.thumbs.autoScrollOffset,
          r = i && !s.params.loop;
        if (t.realIndex !== s.realIndex || r) {
          let a,
            o,
            l = s.activeIndex;
          if (s.params.loop) {
            s.slides.eq(l).hasClass(s.params.slideDuplicateClass) &&
              (s.loopFix(),
              (s._clientLeft = s.$wrapperEl[0].clientLeft),
              (l = s.activeIndex));
            const e = s.slides
                .eq(l)
                .prevAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                .eq(0)
                .index(),
              n = s.slides
                .eq(l)
                .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                .eq(0)
                .index();
            (a =
              void 0 === e
                ? n
                : void 0 === n
                ? e
                : n - l == l - e
                ? s.params.slidesPerGroup > 1
                  ? n
                  : l
                : n - l < l - e
                ? n
                : e),
              (o = t.activeIndex > t.previousIndex ? "next" : "prev");
          } else (a = t.realIndex), (o = a > t.previousIndex ? "next" : "prev");
          r && (a += "next" === o ? i : -1 * i),
            s.visibleSlidesIndexes &&
              s.visibleSlidesIndexes.indexOf(a) < 0 &&
              (s.params.centeredSlides
                ? (a =
                    a > l
                      ? a - Math.floor(n / 2) + 1
                      : a + Math.floor(n / 2) - 1)
                : a > l && s.params.slidesPerGroup,
              s.slideTo(a, e ? 0 : void 0));
        }
        let a = 1;
        const o = t.params.thumbs.slideThumbActiveClass;
        if (
          (t.params.slidesPerView > 1 &&
            !t.params.centeredSlides &&
            (a = t.params.slidesPerView),
          t.params.thumbs.multipleActiveThumbs || (a = 1),
          (a = Math.floor(a)),
          s.slides.removeClass(o),
          s.params.loop || (s.params.virtual && s.params.virtual.enabled))
        )
          for (let e = 0; e < a; e += 1)
            s.$wrapperEl
              .children(`[data-swiper-slide-index="${t.realIndex + e}"]`)
              .addClass(o);
        else
          for (let e = 0; e < a; e += 1)
            s.slides.eq(t.realIndex + e).addClass(o);
      }
      (t.thumbs = { swiper: null }),
        n("beforeInit", () => {
          const { thumbs: e } = t.params;
          e && e.swiper && (o(), l(!0));
        }),
        n("slideChange update resize observerUpdate", () => {
          t.thumbs.swiper && l();
        }),
        n("setTransition", (e, s) => {
          const n = t.thumbs.swiper;
          n && n.setTransition(s);
        }),
        n("beforeDestroy", () => {
          const e = t.thumbs.swiper;
          e && r && e && e.destroy();
        }),
        Object.assign(t.thumbs, { init: o, update: l });
    }
    function Os() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      !(function () {
        if (
          (Os(),
          document.querySelector(".main-block__slider") &&
            new bs(".main-block__slider", {
              modules: [ws, xs, Es, Cs],
              effect: "fade",
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              observer: !0,
              observeParents: !0,
              slidesPerView: 1,
              spaceBetween: 50,
              parallax: !0,
              speed: 800,
              loop: !0,
              pagination: { el: ".controll-main-block__dotts", clickable: !0 },
              on: {
                init: function (e) {
                  const t = document.querySelector(".fraction-controll__all"),
                    s = document.querySelectorAll(
                      ".slide-main-block:not(.swiper-slide-duplicate)"
                    );
                  t.innerHTML = s.length < 10 ? `0${s.length}` : s.length;
                },
                slideChange: function (e) {
                  document.querySelector(
                    ".fraction-controll__current"
                  ).innerHTML =
                    e.realIndex + 1 < 10
                      ? `0${e.realIndex + 1}`
                      : e.realIndex + 1;
                },
              },
            }),
          document.querySelector(".products-slider__slider") &&
            new bs(".products-slider__slider", {
              modules: [ws, xs],
              observer: !0,
              watchOverflow: !0,
              observeParents: !0,
              slidesPerView: 4,
              spaceBetween: 30,
              speed: 800,
              pagination: { el: ".products-slider__dotts", clickable: !0 },
              breakpoints: {
                320: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                992: { slidesPerView: 3, spaceBetween: 20 },
                1370: { slidesPerView: 4, spaceBetween: 30 },
              },
              on: { init: function (e) {} },
            }),
          document.querySelector(".products-new__slider") &&
            new bs(".products-new__slider", {
              modules: [ws, xs],
              observer: !0,
              watchOverflow: !0,
              observeParents: !0,
              slidesPerView: 3,
              spaceBetween: 30,
              speed: 800,
              pagination: { el: ".products-new__dotts", clickable: !0 },
              breakpoints: {
                320: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                992: { slidesPerView: 2, spaceBetween: 20 },
                1330: { slidesPerView: 3, spaceBetween: 30 },
              },
              on: { init: function (e) {} },
            }),
          document.querySelector(".images-product"))
        ) {
          const e = new bs(".thumbs-images", {
            modules: [ws, xs, Ts],
            observer: !0,
            watchOverflow: !0,
            observeParents: !0,
            slidesPerView: 4,
            spaceBetween: 16,
            speed: 800,
            pagination: { el: ".products-new__dotts", clickable: !0 },
            breakpoints: {
              992: { slidesPerView: 3, spaceBetween: 10 },
              1330: { slidesPerView: 4, spaceBetween: 16 },
            },
            on: { init: function (e) {} },
          });
          new bs(".images-product__slider", {
            modules: [ws, xs, Ts],
            thumbs: { swiper: e },
            observer: !0,
            watchOverflow: !0,
            observeParents: !0,
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 800,
            on: { init: function (e) {} },
          });
        }
      })();
    });
    let As = !1;
    setTimeout(() => {
      if (As) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0),
      document.addEventListener("click", function (e) {
        const t = e.target;
        if (t.closest("[data-parent]")) {
          const s = t.dataset.parent ? t.dataset.parent : null,
            n = document.querySelector(`[data-submenu="${s}"]`);
          if (n) {
            const e = document.querySelector("._sub-menu-active"),
              s = document.querySelector("._sub-menu-open");
            e &&
              e !== t &&
              (e.classList.remove("_sub-menu-active"),
              s.classList.remove("_sub-menu-open"),
              document.documentElement.classList.remove("sub-menu-open")),
              document.documentElement.classList.toggle("sub-menu-open"),
              t.classList.toggle("_sub-menu-active"),
              n.classList.toggle("_sub-menu-open");
          } else console.log("Ой");
          e.preventDefault();
        }
        t.closest(".menu-top-header__link_catalog") &&
          (document.documentElement.classList.add("catalog-open"),
          e.preventDefault());
        t.closest(".menu-catalog__back") &&
          (document.documentElement.classList.remove("catalog-open"),
          document.querySelector("._sub-menu-active") &&
            document
              .querySelector("._sub-menu-active")
              .classList.remove("_sub-menu-active"),
          document.querySelector("._sub-menu-open") &&
            document
              .querySelector("._sub-menu-open")
              .classList.remove("_sub-menu-open"),
          e.preventDefault());
        t.closest(".sub-menu-catalog__back") &&
          (document.documentElement.classList.remove("sub-menu-open"),
          document.querySelector("._sub-menu-active") &&
            document
              .querySelector("._sub-menu-active")
              .classList.remove("_sub-menu-active"),
          document.querySelector("._sub-menu-open") &&
            document
              .querySelector("._sub-menu-open")
              .classList.remove("_sub-menu-open"),
          e.preventDefault());
      });
    const Ls = document.querySelectorAll(".sub-menu-catalog__block");
    Ls.length &&
      Ls.forEach((e) => {
        const t = e.querySelectorAll(".sub-menu-catalog__category").length;
        e.classList.add(`sub-menu-catalog__block_${t}`);
      }),
      document.querySelector(".filter-catalog__title") &&
        document
          .querySelector(".filter-catalog__title")
          .addEventListener("click", function (e) {
            window.innerWidth < 992 &&
              document
                .querySelector(".filter-catalog__items")
                .classList.toggle("_active");
          }),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            a &&
              (o(),
              document.documentElement.classList.toggle("menu-open"),
              document.documentElement.classList.contains("catalog-open") &&
                document.documentElement.classList.remove("catalog-open"),
              document.documentElement.classList.contains("sub-menu-open") &&
                document.documentElement.classList.remove("sub-menu-open"));
          });
      })(),
      (function () {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const t = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.spollers.split(",")[0];
          });
          t.length && i(t);
          let s = u(e, "spollers");
          function i(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    a(e),
                    e.addEventListener("click", o))
                  : (e.classList.remove("_spoller-init"),
                    a(e, !1),
                    e.removeEventListener("click", o));
            });
          }
          function a(e, t = !0) {
            const s = e.querySelectorAll("[data-spoller]");
            s.length > 0 &&
              s.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              });
          }
          function o(e) {
            const t = e.target;
            if (t.closest("[data-spoller]")) {
              const s = t.closest("[data-spoller]"),
                n = s.closest("[data-spollers]"),
                i = !!n.hasAttribute("data-one-spoller");
              n.querySelectorAll("._slide").length ||
                (i && !s.classList.contains("_spoller-active") && l(n),
                s.classList.toggle("_spoller-active"),
                r(s.nextElementSibling, 500)),
                e.preventDefault();
            }
          }
          function l(e) {
            const t = e.querySelector("[data-spoller]._spoller-active");
            t &&
              (t.classList.remove("_spoller-active"),
              n(t.nextElementSibling, 500));
          }
          s &&
            s.length &&
            s.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                i(e.itemsArray, e.matchMedia);
              }),
                i(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      (function () {
        const e = document.querySelectorAll("[data-tabs]");
        let t = [];
        if (e.length > 0) {
          const n = location.hash.replace("#", "");
          n.startsWith("tab-") && (t = n.replace("tab-", "").split("-")),
            e.forEach((e, s) => {
              e.classList.add("_tab-init"),
                e.setAttribute("data-tabs-index", s),
                e.addEventListener("click", r),
                (function (e) {
                  const s = e.querySelectorAll("[data-tabs-titles]>*"),
                    n = e.querySelectorAll("[data-tabs-body]>*"),
                    i = e.dataset.tabsIndex,
                    r = t[0] == i;
                  if (r) {
                    e.querySelector(
                      "[data-tabs-titles]>._tab-active"
                    ).classList.remove("_tab-active");
                  }
                  n.length > 0 &&
                    n.forEach((e, n) => {
                      s[n].setAttribute("data-tabs-title", ""),
                        e.setAttribute("data-tabs-item", ""),
                        r && n == t[1] && s[n].classList.add("_tab-active"),
                        (e.hidden = !s[n].classList.contains("_tab-active"));
                    });
                })(e);
            });
          let i = u(e, "tabs");
          i &&
            i.length &&
            i.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                s(e.itemsArray, e.matchMedia);
              }),
                s(e.itemsArray, e.matchMedia);
            });
        }
        function s(e, t) {
          e.forEach((e) => {
            const s = (e = e.item).querySelector("[data-tabs-titles]"),
              n = e.querySelectorAll("[data-tabs-title]"),
              i = e.querySelector("[data-tabs-body]");
            e.querySelectorAll("[data-tabs-item]").forEach((r, a) => {
              t.matches
                ? (i.append(n[a]), i.append(r), e.classList.add("_tab-spoller"))
                : (s.append(n[a]), e.classList.remove("_tab-spoller"));
            });
          });
        }
        function r(e) {
          const t = e.target;
          if (t.closest("[data-tabs-title]")) {
            const s = t.closest("[data-tabs-title]"),
              r = s.closest("[data-tabs]");
            if (
              !s.classList.contains("_tab-active") &&
              !r.querySelectorAll("._slide").length
            ) {
              const e = r.querySelector("[data-tabs-title]._tab-active");
              e && e.classList.remove("_tab-active"),
                s.classList.add("_tab-active"),
                (function (e) {
                  const t = e.querySelectorAll("[data-tabs-title]"),
                    s = e.querySelectorAll("[data-tabs-item]"),
                    r = e.dataset.tabsIndex,
                    a = (function (e) {
                      if (e.hasAttribute("data-tabs-animate"))
                        return e.dataset.tabsAnimate > 0
                          ? e.dataset.tabsAnimate
                          : 500;
                    })(e);
                  s.length > 0 &&
                    s.forEach((e, s) => {
                      t[s].classList.contains("_tab-active")
                        ? (a ? i(e, a) : (e.hidden = !1),
                          e.closest(".popup") ||
                            (location.hash = `tab-${r}-${s}`))
                        : a
                        ? n(e, a)
                        : (e.hidden = !0);
                    });
                })(r);
            }
            e.preventDefault();
          }
        }
      })(),
      new t({}),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              h.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && h.validateInput(t));
          });
      })(),
      document.addEventListener("click", function (e) {
        let t = e.target;
        if (t.closest(".quantity__button")) {
          let e = parseInt(t.closest(".quantity").querySelector("input").value);
          t.classList.contains("quantity__button_plus")
            ? e++
            : (--e, e < 1 && (e = 1)),
            (t.closest(".quantity").querySelector("input").value = e);
        }
      }),
      (function () {
        const e = document.querySelectorAll(".rating");
        e.length > 0 &&
          (function () {
            let t, s;
            for (let t = 0; t < e.length; t++) {
              n(e[t]);
            }
            function n(e) {
              i(e), r(), e.classList.contains("rating_set") && a(e);
            }
            function i(e) {
              (t = e.querySelector(".rating__active")),
                (s = e.querySelector(".rating__value"));
            }
            function r(e = s.innerHTML) {
              const n = e / 0.05;
              t.style.width = `${n}%`;
            }
            function a(e) {
              const t = e.querySelectorAll(".rating__item");
              for (let n = 0; n < t.length; n++) {
                const a = t[n];
                a.addEventListener("mouseenter", function (t) {
                  i(e), r(a.value);
                }),
                  a.addEventListener("mouseleave", function (e) {
                    r();
                  }),
                  a.addEventListener("click", function (t) {
                    i(e),
                      e.dataset.ajax
                        ? o(a.value, e)
                        : ((s.innerHTML = n + 1), r());
                  });
              }
            }
            async function o(e, t) {
              if (!t.classList.contains("rating_sending")) {
                t.classList.add("rating_sending");
                let e = await fetch("rating.json", { method: "GET" });
                if (e.ok) {
                  const n = (await e.json()).newRating;
                  (s.innerHTML = n), r(), t.classList.remove("rating_sending");
                } else alert("Ошибка"), t.classList.remove("rating_sending");
              }
            }
          })();
      })(),
      (f.selectModule = new p({}));
  })();
})();
