(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [2],
  {
    "/0+H": function (e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(r.default.useContext(a.AmpStateContext));
        });
      var o,
        r = (o = n("q1tI")) && o.__esModule ? o : { default: o },
        a = n("lwAK");
      function i() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          o = e.hybrid,
          r = void 0 !== o && o,
          a = e.hasQuery,
          i = void 0 !== a && a;
        return n || (r && i);
      }
    },
    "7W2i": function (e, t, n) {
      var o = n("SksO");
      e.exports = function (e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && o(e, t);
      };
    },
    "8Kt/": function (e, t, n) {
      "use strict";
      n("lSNA");
      (t.__esModule = !0), (t.defaultHead = u), (t.default = void 0);
      var o,
        r = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== typeof e && "function" !== typeof e))
            return { default: e };
          var t = c();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, r) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, r, a)
                : (n[r] = e[r]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n("q1tI")),
        a = (o = n("Xuae")) && o.__esModule ? o : { default: o },
        i = n("lwAK"),
        p = n("FYa8"),
        l = n("/0+H");
      function c() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [r.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              r.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              }),
            ),
          t
        );
      }
      function s(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === r.default.Fragment
          ? e.concat(
              r.default.Children.toArray(t.props.children).reduce(function (
                e,
                t,
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t);
              },
              []),
            )
          : e.concat(t);
      }
      var h = ["name", "httpEquiv", "charSet", "itemProp"];
      function d(e, t) {
        return e
          .reduce(function (e, t) {
            var n = r.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(s, [])
          .reverse()
          .concat(u(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                o = {};
              return function (r) {
                var a = !0,
                  i = !1;
                if (
                  r.key &&
                  "number" !== typeof r.key &&
                  r.key.indexOf("$") > 0
                ) {
                  i = !0;
                  var p = r.key.slice(r.key.indexOf("$") + 1);
                  e.has(p) ? (a = !1) : e.add(p);
                }
                switch (r.type) {
                  case "title":
                  case "base":
                    t.has(r.type) ? (a = !1) : t.add(r.type);
                    break;
                  case "meta":
                    for (var l = 0, c = h.length; l < c; l++) {
                      var u = h[l];
                      if (r.props.hasOwnProperty(u))
                        if ("charSet" === u) n.has(u) ? (a = !1) : n.add(u);
                        else {
                          var s = r.props[u],
                            d = o[u] || new Set();
                          ("name" === u && i) || !d.has(s)
                            ? (d.add(s), (o[u] = d))
                            : (a = !1);
                        }
                    }
                }
                return a;
              };
            })(),
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t;
            return r.default.cloneElement(e, { key: n });
          });
      }
      function f(e) {
        var t = e.children,
          n = (0, r.useContext)(i.AmpStateContext),
          o = (0, r.useContext)(p.HeadManagerContext);
        return r.default.createElement(
          a.default,
          {
            reduceComponentsToState: d,
            headManager: o,
            inAmpMode: (0, l.isInAmpMode)(n),
          },
          t,
        );
      }
      f.rewind = function () {};
      var m = f;
      t.default = m;
    },
    "9ixD": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      }),
        n.d(t, "b", function () {
          return h;
        });
      var o = n("g4pe"),
        r = n.n(o),
        a = n("q1tI"),
        i = n.n(a);
      function p(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      var l = {
          templateTitle: "",
          noindex: !1,
          nofollow: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        c = function (e) {
          var t = [];
          e.titleTemplate && (l.templateTitle = e.titleTemplate);
          var n = "";
          e.title &&
            ((n = e.title),
            l.templateTitle &&
              (n = l.templateTitle.replace(/%s/g, function () {
                return n;
              })),
            t.push(i.a.createElement("title", { key: "title" }, n)));
          var o = e.noindex || l.noindex || e.dangerouslySetAllPagesToNoIndex,
            r = e.nofollow || l.nofollow || e.dangerouslySetAllPagesToNoFollow;
          if (
            (o || r
              ? (e.dangerouslySetAllPagesToNoIndex && (l.noindex = !0),
                e.dangerouslySetAllPagesToNoFollow && (l.nofollow = !0),
                t.push(
                  i.a.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content:
                      (o ? "noindex" : "index") +
                      "," +
                      (r ? "nofollow" : "follow"),
                  }),
                ),
                t.push(
                  i.a.createElement("meta", {
                    key: "googlebot",
                    name: "googlebot",
                    content:
                      (o ? "noindex" : "index") +
                      "," +
                      (r ? "nofollow" : "follow"),
                  }),
                ))
              : (t.push(
                  i.a.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content: "index,follow",
                  }),
                ),
                t.push(
                  i.a.createElement("meta", {
                    key: "googlebot",
                    name: "googlebot",
                    content: "index,follow",
                  }),
                )),
            e.description &&
              t.push(
                i.a.createElement("meta", {
                  key: "description",
                  name: "description",
                  content: e.description,
                }),
              ),
            e.mobileAlternate &&
              t.push(
                i.a.createElement("link", {
                  rel: "alternate",
                  key: "mobileAlternate",
                  media: e.mobileAlternate.media,
                  href: e.mobileAlternate.href,
                }),
              ),
            e.languageAlternates &&
              e.languageAlternates.length > 0 &&
              e.languageAlternates.forEach(function (e) {
                t.push(
                  i.a.createElement("link", {
                    rel: "alternate",
                    key: "languageAlternate-" + e.hrefLang,
                    hrefLang: e.hrefLang,
                    href: e.href,
                  }),
                );
              }),
            e.twitter &&
              (e.twitter.cardType &&
                t.push(
                  i.a.createElement("meta", {
                    key: "twitter:card",
                    name: "twitter:card",
                    content: e.twitter.cardType,
                  }),
                ),
              e.twitter.site &&
                t.push(
                  i.a.createElement("meta", {
                    key: "twitter:site",
                    name: "twitter:site",
                    content: e.twitter.site,
                  }),
                ),
              e.twitter.handle &&
                t.push(
                  i.a.createElement("meta", {
                    key: "twitter:creator",
                    name: "twitter:creator",
                    content: e.twitter.handle,
                  }),
                )),
            e.facebook &&
              e.facebook.appId &&
              t.push(
                i.a.createElement("meta", {
                  key: "fb:app_id",
                  property: "fb:app_id",
                  content: e.facebook.appId,
                }),
              ),
            e.openGraph)
          ) {
            if (
              ((e.openGraph.url || e.canonical) &&
                t.push(
                  i.a.createElement("meta", {
                    key: "og:url",
                    property: "og:url",
                    content: e.openGraph.url || e.canonical,
                  }),
                ),
              e.openGraph.type)
            ) {
              var a = e.openGraph.type.toLowerCase();
              t.push(
                i.a.createElement("meta", {
                  key: "og:type",
                  property: "og:type",
                  content: a,
                }),
              ),
                "profile" === a && e.openGraph.profile
                  ? (e.openGraph.profile.firstName &&
                      t.push(
                        i.a.createElement("meta", {
                          key: "profile:first_name",
                          property: "profile:first_name",
                          content: e.openGraph.profile.firstName,
                        }),
                      ),
                    e.openGraph.profile.lastName &&
                      t.push(
                        i.a.createElement("meta", {
                          key: "profile:last_name",
                          property: "profile:last_name",
                          content: e.openGraph.profile.lastName,
                        }),
                      ),
                    e.openGraph.profile.username &&
                      t.push(
                        i.a.createElement("meta", {
                          key: "profile:username",
                          property: "profile:username",
                          content: e.openGraph.profile.username,
                        }),
                      ),
                    e.openGraph.profile.gender &&
                      t.push(
                        i.a.createElement("meta", {
                          key: "profile:gender",
                          property: "profile:gender",
                          content: e.openGraph.profile.gender,
                        }),
                      ))
                  : "book" === a && e.openGraph.book
                  ? (e.openGraph.book.authors &&
                      e.openGraph.book.authors.length &&
                      e.openGraph.book.authors.forEach(function (e, n) {
                        t.push(
                          i.a.createElement("meta", {
                            key: "book:author:0" + n,
                            property: "book:author",
                            content: e,
                          }),
                        );
                      }),
                    e.openGraph.book.isbn &&
                      t.push(
                        i.a.createElement("meta", {
                          key: "book:isbn",
                          property: "book:isbn",
                          content: e.openGraph.book.isbn,
                        }),
                      ),
                    e.openGraph.book.releaseDate &&
                      t.push(
                        i.a.createElement("meta", {
                          key: "book:release_date",
                          property: "book:release_date",
                          content: e.openGraph.book.releaseDate,
                        }),
                      ),
                    e.openGraph.book.tags &&
                      e.openGraph.book.tags.length &&
                      e.openGraph.book.tags.forEach(function (e, n) {
                        t.push(
                          i.a.createElement("meta", {
                            key: "book:tag:0" + n,
                            property: "book:tag",
                            content: e,
                          }),
                        );
                      }))
                  : "article" === a && e.openGraph.article
                  ? (e.openGraph.article.publishedTime &&
                      t.push(
                        i.a.createElement("meta", {
                          key: "article:published_time",
                          property: "article:published_time",
                          content: e.openGraph.article.publishedTime,
                        }),
                      ),
                    e.openGraph.article.modifiedTime &&
                      t.push(
                        i.a.createElement("meta", {
                          key: "article:modified_time",
                          property: "article:modified_time",
                          content: e.openGraph.article.modifiedTime,
                        }),
                      ),
                    e.openGraph.article.expirationTime &&
                      t.push(
                        i.a.createElement("meta", {
                          key: "article:expiration_time",
                          property: "article:expiration_time",
                          content: e.openGraph.article.expirationTime,
                        }),
                      ),
                    e.openGraph.article.authors &&
                      e.openGraph.article.authors.length &&
                      e.openGraph.article.authors.forEach(function (e, n) {
                        t.push(
                          i.a.createElement("meta", {
                            key: "article:author:0" + n,
                            property: "article:author",
                            content: e,
                          }),
                        );
                      }),
                    e.openGraph.article.section &&
                      t.push(
                        i.a.createElement("meta", {
                          key: "article:section",
                          property: "article:section",
                          content: e.openGraph.article.section,
                        }),
                      ),
                    e.openGraph.article.tags &&
                      e.openGraph.article.tags.length &&
                      e.openGraph.article.tags.forEach(function (e, n) {
                        t.push(
                          i.a.createElement("meta", {
                            key: "article:tag:0" + n,
                            property: "article:tag",
                            content: e,
                          }),
                        );
                      }))
                  : ("video.movie" !== a &&
                      "video.episode" !== a &&
                      "video.tv_show" !== a &&
                      "video.other" !== a) ||
                    !e.openGraph.video ||
                    (e.openGraph.video.actors &&
                      e.openGraph.video.actors.length &&
                      e.openGraph.video.actors.forEach(function (e, n) {
                        e.profile &&
                          t.push(
                            i.a.createElement("meta", {
                              key: "video:actor:0" + n,
                              property: "video:actor",
                              content: e.profile,
                            }),
                          ),
                          e.role &&
                            t.push(
                              i.a.createElement("meta", {
                                key: "video:actor:role:0" + n,
                                property: "video:actor:role",
                                content: e.role,
                              }),
                            );
                      }),
                    e.openGraph.video.directors &&
                      e.openGraph.video.directors.length &&
                      e.openGraph.video.directors.forEach(function (e, n) {
                        t.push(
                          i.a.createElement("meta", {
                            key: "video:director:0" + n,
                            property: "video:director",
                            content: e,
                          }),
                        );
                      }),
                    e.openGraph.video.writers &&
                      e.openGraph.video.writers.length &&
                      e.openGraph.video.writers.forEach(function (e, n) {
                        t.push(
                          i.a.createElement("meta", {
                            key: "video:writer:0" + n,
                            property: "video:writer",
                            content: e,
                          }),
                        );
                      }),
                    e.openGraph.video.duration &&
                      t.push(
                        i.a.createElement("meta", {
                          key: "video:duration",
                          property: "video:duration",
                          content: e.openGraph.video.duration.toString(),
                        }),
                      ),
                    e.openGraph.video.releaseDate &&
                      t.push(
                        i.a.createElement("meta", {
                          key: "video:release_date",
                          property: "video:release_date",
                          content: e.openGraph.video.releaseDate,
                        }),
                      ),
                    e.openGraph.video.tags &&
                      e.openGraph.video.tags.length &&
                      e.openGraph.video.tags.forEach(function (e, n) {
                        t.push(
                          i.a.createElement("meta", {
                            key: "video:tag:0" + n,
                            property: "video:tag",
                            content: e,
                          }),
                        );
                      }),
                    e.openGraph.video.series &&
                      t.push(
                        i.a.createElement("meta", {
                          key: "video:series",
                          property: "video:series",
                          content: e.openGraph.video.series,
                        }),
                      ));
            }
            (e.openGraph.title || e.title) &&
              t.push(
                i.a.createElement("meta", {
                  key: "og:title",
                  property: "og:title",
                  content: e.openGraph.title || n,
                }),
              ),
              (e.openGraph.description || e.description) &&
                t.push(
                  i.a.createElement("meta", {
                    key: "og:description",
                    property: "og:description",
                    content: e.openGraph.description || e.description,
                  }),
                ),
              e.defaultOpenGraphImageWidth &&
                (l.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
              e.defaultOpenGraphImageHeight &&
                (l.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
              e.openGraph.images &&
                e.openGraph.images.length &&
                e.openGraph.images.forEach(function (e, n) {
                  t.push(
                    i.a.createElement("meta", {
                      key: "og:image:0" + n,
                      property: "og:image",
                      content: e.url,
                    }),
                  ),
                    e.alt &&
                      t.push(
                        i.a.createElement("meta", {
                          key: "og:image:alt0" + n,
                          property: "og:image:alt",
                          content: e.alt,
                        }),
                      ),
                    e.width
                      ? t.push(
                          i.a.createElement("meta", {
                            key: "og:image:width0" + n,
                            property: "og:image:width",
                            content: e.width.toString(),
                          }),
                        )
                      : l.defaultOpenGraphImageWidth &&
                        t.push(
                          i.a.createElement("meta", {
                            key: "og:image:width0" + n,
                            property: "og:image:width",
                            content: l.defaultOpenGraphImageWidth.toString(),
                          }),
                        ),
                    e.height
                      ? t.push(
                          i.a.createElement("meta", {
                            key: "og:image:height" + n,
                            property: "og:image:height",
                            content: e.height.toString(),
                          }),
                        )
                      : l.defaultOpenGraphImageHeight &&
                        t.push(
                          i.a.createElement("meta", {
                            key: "og:image:height" + n,
                            property: "og:image:height",
                            content: l.defaultOpenGraphImageHeight.toString(),
                          }),
                        );
                }),
              e.defaultOpenGraphVideoWidth &&
                (l.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
              e.defaultOpenGraphVideoHeight &&
                (l.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
              e.openGraph.videos &&
                e.openGraph.videos.length &&
                e.openGraph.videos.forEach(function (e, n) {
                  t.push(
                    i.a.createElement("meta", {
                      key: "og:video:0" + n,
                      property: "og:video",
                      content: e.url,
                    }),
                  ),
                    e.alt &&
                      t.push(
                        i.a.createElement("meta", {
                          key: "og:video:alt0" + n,
                          property: "og:video:alt",
                          content: e.alt,
                        }),
                      ),
                    e.width
                      ? t.push(
                          i.a.createElement("meta", {
                            key: "og:video:width0" + n,
                            property: "og:video:width",
                            content: e.width.toString(),
                          }),
                        )
                      : l.defaultOpenGraphVideoWidth &&
                        t.push(
                          i.a.createElement("meta", {
                            key: "og:video:width0" + n,
                            property: "og:video:width",
                            content: l.defaultOpenGraphVideoWidth.toString(),
                          }),
                        ),
                    e.height
                      ? t.push(
                          i.a.createElement("meta", {
                            key: "og:video:height" + n,
                            property: "og:video:height",
                            content: e.height.toString(),
                          }),
                        )
                      : l.defaultOpenGraphVideoHeight &&
                        t.push(
                          i.a.createElement("meta", {
                            key: "og:video:height" + n,
                            property: "og:video:height",
                            content: l.defaultOpenGraphVideoHeight.toString(),
                          }),
                        );
                }),
              e.openGraph.locale &&
                t.push(
                  i.a.createElement("meta", {
                    key: "og:locale",
                    property: "og:locale",
                    content: e.openGraph.locale,
                  }),
                ),
              e.openGraph.site_name &&
                t.push(
                  i.a.createElement("meta", {
                    key: "og:site_name",
                    property: "og:site_name",
                    content: e.openGraph.site_name,
                  }),
                );
          }
          return (
            e.canonical &&
              t.push(
                i.a.createElement("link", {
                  rel: "canonical",
                  href: e.canonical,
                  key: "canonical",
                }),
              ),
            e.additionalMetaTags &&
              e.additionalMetaTags.length > 0 &&
              e.additionalMetaTags.forEach(function (e) {
                t.push(
                  i.a.createElement(
                    "meta",
                    Object.assign({ key: e.name ? e.name : e.property }, e),
                  ),
                );
              }),
            t
          );
        },
        u =
          (a.Component,
          (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (
              p(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.title,
                  n = e.noindex,
                  o = void 0 !== n && n,
                  a = e.nofollow,
                  p = e.description,
                  l = e.canonical,
                  u = e.openGraph,
                  s = e.facebook,
                  h = e.twitter,
                  d = e.additionalMetaTags,
                  f = e.titleTemplate,
                  m = e.mobileAlternate,
                  g = e.languageAlternates;
                return i.a.createElement(
                  r.a,
                  null,
                  c({
                    title: t,
                    noindex: o,
                    nofollow: a,
                    description: p,
                    canonical: l,
                    facebook: s,
                    openGraph: u,
                    additionalMetaTags: d,
                    twitter: h,
                    titleTemplate: f,
                    mobileAlternate: m,
                    languageAlternates: g,
                  }),
                );
              }),
              t
            );
          })(a.Component)),
        s = function (e) {
          return { __html: e };
        },
        h = function (e) {
          var t = e.keyOverride,
            n = e.type,
            o = e.name,
            a = e.url,
            p = e.sameAs,
            l =
              '{\n    "@context": "https://schema.org",\n    "@type": "' +
              n +
              '",\n    "name": "' +
              o +
              '",\n    "url": "' +
              a +
              '",\n    "sameAs": [\n      ' +
              (void 0 === p ? [] : p).map(function (e) {
                return '"' + e + '"';
              }) +
              "\n     ]\n  }";
          return i.a.createElement(
            r.a,
            null,
            i.a.createElement("script", {
              type: "application/ld+json",
              dangerouslySetInnerHTML: s(l),
              key: "jsonld-social" + (t ? "-" + t : ""),
            }),
          );
        };
    },
    Bnag: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      };
    },
    EbDI: function (e, t) {
      e.exports = function (e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    FYa8: function (e, t, n) {
      "use strict";
      var o;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var r = ((o = n("q1tI")) && o.__esModule
        ? o
        : { default: o }
      ).default.createContext({});
      t.HeadManagerContext = r;
    },
    Ijbi: function (e, t, n) {
      var o = n("WkPL");
      e.exports = function (e) {
        if (Array.isArray(e)) return o(e);
      };
    },
    Nsbk: function (e, t) {
      function n(t) {
        return (
          (e.exports = n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          n(t)
        );
      }
      e.exports = n;
    },
    PJYZ: function (e, t) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      };
    },
    Qetd: function (e, t, n) {
      "use strict";
      var o = Object.assign.bind(Object);
      (e.exports = o), (e.exports.default = e.exports);
    },
    RIqP: function (e, t, n) {
      var o = n("Ijbi"),
        r = n("EbDI"),
        a = n("ZhPi"),
        i = n("Bnag");
      e.exports = function (e) {
        return o(e) || r(e) || a(e) || i();
      };
    },
    SksO: function (e, t) {
      function n(t, o) {
        return (
          (e.exports = n =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          n(t, o)
        );
      }
      e.exports = n;
    },
    W8MJ: function (e, t) {
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      e.exports = function (e, t, o) {
        return t && n(e.prototype, t), o && n(e, o), e;
      };
    },
    WkPL: function (e, t) {
      e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      };
    },
    Xuae: function (e, t, n) {
      "use strict";
      var o = n("RIqP"),
        r = n("lwsE"),
        a = n("W8MJ"),
        i = (n("PJYZ"), n("7W2i")),
        p = n("a1gu"),
        l = n("Nsbk");
      function c(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            o = l(e);
          if (t) {
            var r = l(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return p(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var u = n("q1tI"),
        s = (function (e) {
          i(n, e);
          var t = c(n);
          function n(e) {
            var a;
            return (
              r(this, n),
              ((a = t.call(this, e))._hasHeadManager = void 0),
              (a.emitChange = function () {
                a._hasHeadManager &&
                  a.props.headManager.updateHead(
                    a.props.reduceComponentsToState(
                      o(a.props.headManager.mountedInstances),
                      a.props,
                    ),
                  );
              }),
              (a._hasHeadManager =
                a.props.headManager && a.props.headManager.mountedInstances),
              a
            );
          }
          return (
            a(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange();
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.emitChange();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(u.Component);
      t.default = s;
    },
    ZhPi: function (e, t, n) {
      var o = n("WkPL");
      e.exports = function (e, t) {
        if (e) {
          if ("string" === typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? o(e, t)
              : void 0
          );
        }
      };
    },
    a1gu: function (e, t, n) {
      var o = n("cDf5"),
        r = n("PJYZ");
      e.exports = function (e, t) {
        return !t || ("object" !== o(t) && "function" !== typeof t) ? r(e) : t;
      };
    },
    cDf5: function (e, t) {
      function n(t) {
        return (
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? (e.exports = n = function (e) {
                return typeof e;
              })
            : (e.exports = n = function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
          n(t)
        );
      }
      e.exports = n;
    },
    g4pe: function (e, t, n) {
      e.exports = n("8Kt/");
    },
    lSNA: function (e, t) {
      e.exports = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      };
    },
    lwAK: function (e, t, n) {
      "use strict";
      var o;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var r = ((o = n("q1tI")) && o.__esModule
        ? o
        : { default: o }
      ).default.createContext({});
      t.AmpStateContext = r;
    },
    lwsE: function (e, t) {
      e.exports = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      };
    },
  },
]);
