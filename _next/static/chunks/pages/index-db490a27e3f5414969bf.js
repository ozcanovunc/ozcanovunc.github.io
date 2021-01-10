_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [11],
  {
    "/EDR": function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t("QeBL");
        },
      ]);
    },
    AFKX: function (e, r) {},
    QeBL: function (e, r, t) {
      "use strict";
      t.r(r);
      var a = t("nKUr"),
        n = t("q1tI"),
        c = t("wZsY"),
        i = t("sKyC"),
        s = t("4jWa"),
        l = t("CRla"),
        o = t("U6LL"),
        u = t("epLR"),
        f = t("pr4h");
      function b() {
        return (b =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var a in t)
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      var j = Object(i.a)((e, r) => {
        var t = Object(s.b)("Heading", e),
          a = (function (e, r) {
            if (null == e) return {};
            var t,
              a,
              n = {},
              c = Object.keys(e);
            for (a = 0; a < c.length; a++)
              (t = c[a]), r.indexOf(t) >= 0 || (n[t] = e[t]);
            return n;
          })(Object(l.b)(e), ["className"]);
        return n.createElement(
          o.a.h2,
          b(
            { ref: r, className: Object(u.a)("chakra-heading", e.className) },
            a,
            { __css: t },
          ),
        );
      });
      f.a && (j.displayName = "Heading");
      var O = t("5+Am"),
        g = t("hMXk"),
        p = t("x9W9");
      function d() {
        return (d =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var a in t)
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function m(e, r) {
        if (null == e) return {};
        var t,
          a,
          n = {},
          c = Object.keys(e);
        for (a = 0; a < c.length; a++)
          (t = c[a]), r.indexOf(t) >= 0 || (n[t] = e[t]);
        return n;
      }
      var h = Object(i.a)((e, r) => {
        var {
            spacing: t = "0.5rem",
            children: a,
            justify: c,
            direction: i,
            align: s,
            className: l,
          } = e,
          f = m(e, [
            "spacing",
            "children",
            "justify",
            "direction",
            "align",
            "className",
          ]),
          b = Object(O.d)(),
          j = Object(p.b)(t, (e) => {
            var { margin: r } = Object(g.css)({ margin: e })(b);
            return "calc(" + r + " / 2)";
          }),
          h = {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: c,
            alignItems: s,
            flexDirection: i,
            listStyleType: "none",
            padding: "0",
            margin: Object(p.b)(t, (e) => {
              var { margin: r } = Object(g.css)({ margin: e })(b);
              return "calc(" + r + " / 2 * -1)";
            }),
          },
          v = { display: "flex", alignItems: "flex-start", margin: j };
        return n.createElement(
          O.b,
          { value: { item: v } },
          n.createElement(
            o.a.div,
            d({ ref: r, className: Object(u.a)("chakra-wrap", l) }, f),
            n.createElement(
              o.a.ul,
              { className: "chakra-wrap__list", __css: h },
              a,
            ),
          ),
        );
      });
      f.a && (h.displayName = "Wrap");
      var v = Object(i.a)((e, r) => {
        var { className: t } = e,
          a = m(e, ["className"]),
          c = Object(O.c)();
        return n.createElement(
          o.a.li,
          d(
            {
              ref: r,
              __css: c.item,
              className: Object(u.a)("chakra-wrap__listitem", t),
            },
            a,
          ),
        );
      });
      f.a && (v.displayName = "WrapItem");
      var y = t("3L07"),
        w = t("oSKe"),
        x = t("rePB"),
        _ = t("BXwj"),
        k = t("zlS4");
      function N() {
        return (N =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var a in t)
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function E(e, r) {
        if (null == e) return {};
        var t,
          a,
          n = {},
          c = Object.keys(e);
        for (a = 0; a < c.length; a++)
          (t = c[a]), r.indexOf(t) >= 0 || (n[t] = e[t]);
        return n;
      }
      var P = n.forwardRef((e, r) => {
          var { htmlWidth: t, htmlHeight: a, alt: c } = e,
            i = E(e, ["htmlWidth", "htmlHeight", "alt"]);
          return n.createElement(
            "img",
            N({ width: t, height: a, ref: r, alt: c }, i),
          );
        }),
        S = Object(i.a)((e, r) => {
          var {
              fallbackSrc: t,
              fallback: a,
              src: c,
              align: i,
              fit: s,
              loading: l,
              ignoreFallback: u,
              crossOrigin: f,
            } = e,
            b = E(e, [
              "fallbackSrc",
              "fallback",
              "src",
              "align",
              "fit",
              "loading",
              "ignoreFallback",
              "crossOrigin",
            ]),
            j = null != l || u,
            O = (function (e) {
              var {
                  src: r,
                  srcSet: t,
                  onLoad: a,
                  onError: c,
                  crossOrigin: i,
                  sizes: s,
                  ignoreFallback: l,
                } = e,
                [o, u] = Object(n.useState)("pending");
              Object(n.useEffect)(() => {
                u(r ? "loading" : "pending");
              }, [r]);
              var f = Object(n.useRef)(),
                b = Object(n.useCallback)(() => {
                  if (r) {
                    j();
                    var e = new Image();
                    (e.src = r),
                      i && (e.crossOrigin = i),
                      t && (e.srcset = t),
                      s && (e.sizes = s),
                      (e.onload = (e) => {
                        j(), u("loaded"), null == a || a(e);
                      }),
                      (e.onerror = (e) => {
                        j(), u("failed"), null == c || c(e);
                      }),
                      (f.current = e);
                  }
                }, [r, i, t, s, a, c]),
                j = () => {
                  f.current &&
                    ((f.current.onload = null),
                    (f.current.onerror = null),
                    (f.current = null));
                };
              return (
                Object(k.a)(() => {
                  if (!l)
                    return (
                      "loading" === o && b(),
                      () => {
                        j();
                      }
                    );
                }, [o, b, l]),
                l ? "loaded" : o
              );
            })(N({}, e, { ignoreFallback: j })),
            g = N(
              { ref: r, objectFit: s, objectPosition: i },
              j ? b : Object(_.h)(b, ["onError", "onLoad"]),
            );
          return "loaded" !== O
            ? a ||
                n.createElement(
                  o.a.img,
                  N(
                    { as: P, className: "chakra-image__placeholder", src: t },
                    g,
                  ),
                )
            : n.createElement(
                o.a.img,
                N(
                  {
                    as: P,
                    src: c,
                    crossOrigin: f,
                    loading: l,
                    className: "chakra-image",
                  },
                  g,
                ),
              );
        });
      function D(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          r &&
            (a = a.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, a);
        }
        return t;
      }
      f.a && (S.displayName = "Image");
      var F = function (e) {
          return Object(a.jsx)(
            S,
            (function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2
                  ? D(Object(t), !0).forEach(function (r) {
                      Object(x.a)(e, r, t[r]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(t),
                    )
                  : D(Object(t)).forEach(function (r) {
                      Object.defineProperty(
                        e,
                        r,
                        Object.getOwnPropertyDescriptor(t, r),
                      );
                    });
              }
              return e;
            })({}, e),
          );
        },
        I = t("9ixD"),
        L = t("Rwd9"),
        R = t("se3C"),
        W = t.n(R);
      r.default = function () {
        var e = Object(L.a)();
        return Object(a.jsxs)(a.Fragment, {
          children: [
            Object(a.jsx)(I.a, { title: W.a.title, titleTemplate: "%s" }),
            Object(a.jsxs)(c.b, {
              alignItems: "center",
              px: 8,
              spacing: 4,
              textAlign: "center",
              w: "full",
              children: [
                Object(a.jsx)(F, {
                  borderRadius: "full",
                  boxSize: "125px",
                  src: W.a.profileUrl,
                }),
                Object(a.jsx)(j, { size: "2xl", children: W.a.title }),
                Object(a.jsx)(j, {
                  fontWeight: "normal",
                  pb: 8,
                  size: "md",
                  children: W.a.description,
                }),
                Object(a.jsx)(h, {
                  justify: "center",
                  spacing: 4,
                  children: e.map(function (e) {
                    var r = e.href,
                      t = e.icon,
                      n = e.name;
                    return Object(a.jsx)(
                      v,
                      {
                        children: Object(a.jsx)(y.a, {
                          as: "a",
                          href: r,
                          leftIcon: Object(a.jsx)(w.a, { as: t }),
                          target: "_blank",
                          children: n,
                        }),
                      },
                      n,
                    );
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    hMXk: function (e, r, t) {
      "use strict";
      var a = t("0sYf");
      t.o(a, "css") &&
        t.d(r, "css", function () {
          return a.css;
        });
      var n = t("AFKX");
      t.o(n, "css") &&
        t.d(r, "css", function () {
          return n.css;
        });
    },
  },
  [["/EDR", 1, 0, 3, 2, 4]],
]);
