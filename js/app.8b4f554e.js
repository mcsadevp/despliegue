(function () {
  "use strict";
  var n = {
      2944: function (n, t, e) {
        var r = e(5130),
          o = e(6768);
        function i(n, t, e, r, i, u) {
          const c = (0, o.g2)("GameList");
          return (0, o.uX)(), (0, o.Wv)(c);
        }
        var u = e(4232);
        const c = { id: "app" },
          a = (0, o.Lk)("h1", null, "Tienda 32 Bits", -1),
          s = (0, o.Lk)("h3", null, "Lista de juegos", -1),
          l = { class: "double-border-table" },
          f = (0, o.Lk)(
            "thead",
            null,
            [
              (0, o.Lk)("tr", null, [
                (0, o.Lk)("th", null, "Código"),
                (0, o.Lk)("th", null, "Nombre"),
                (0, o.Lk)("th", null, "Stock"),
                (0, o.Lk)("th", null, "Precio"),
                (0, o.Lk)("th", null, "Acciones"),
              ]),
            ],
            -1
          ),
          m = ["onClick"],
          d = ["onClick"];
        function k(n, t, e, r, i, k) {
          return (
            (0, o.uX)(),
            (0, o.CE)("div", c, [
              a,
              s,
              (0, o.Lk)("table", l, [
                f,
                (0, o.Lk)("tbody", null, [
                  ((0, o.uX)(!0),
                  (0, o.CE)(
                    o.FK,
                    null,
                    (0, o.pI)(
                      n.games,
                      (t, e) => (
                        (0, o.uX)(),
                        (0, o.CE)("tr", { key: e }, [
                          (0, o.Lk)("td", null, (0, u.v_)(t.codigo), 1),
                          (0, o.Lk)("td", null, (0, u.v_)(t.nombre), 1),
                          (0, o.Lk)("td", null, (0, u.v_)(t.stock), 1),
                          (0, o.Lk)("td", null, "$" + (0, u.v_)(t.precio), 1),
                          (0, o.Lk)("td", null, [
                            (0, o.Lk)(
                              "button",
                              { onClick: (t) => n.Incrementar(e) },
                              "+",
                              8,
                              m
                            ),
                            (0, o.Lk)(
                              "button",
                              { onClick: (t) => n.Disminuir(e) },
                              "-",
                              8,
                              d
                            ),
                          ]),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ])
          );
        }
        var p = e(782),
          v = {
            name: "App",
            computed: { ...(0, p.aH)(["games"]) },
            methods: {
              ...(0, p.i0)(["fetchGames", "Incrementar", "Disminuir"]),
            },
            created() {
              this.fetchGames();
            },
          },
          h = e(1241);
        const b = (0, h.A)(v, [["render", k]]);
        var g = b,
          L = { name: "App", components: { GameList: g } };
        const y = (0, h.A)(L, [["render", i]]);
        var O = y,
          j = e(4373),
          C = (0, p.y$)({
            state: { games: [] },
            getters: { games: (n) => n.games },
            mutations: {
              setGames(n, t) {
                n.games = t;
              },
              incrementar(n, t) {
                n.games[t].stock++;
              },
              disminuir(n, t) {
                n.games[t].stock--;
              },
            },
            actions: {
              async fetchGames({ commit: n }) {
                try {
                  const t = await j.A.get("../juegos.json");
                  n("setGames", t.data);
                } catch (t) {
                  console.error("Error fetching games:", t);
                }
              },
              Incrementar({ commit: n }, t) {
                n("incrementar", t);
              },
              Disminuir(n, t) {
                n.commit("disminuir", t);
              },
            },
            modules: {},
          });
        (0, r.Ef)(O).use(C).mount("#app");
      },
    },
    t = {};
  function e(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return n[r].call(i.exports, i, i.exports, e), i.exports;
  }
  (e.m = n),
    (function () {
      var n = [];
      e.O = function (t, r, o, i) {
        if (!r) {
          var u = 1 / 0;
          for (l = 0; l < n.length; l++) {
            (r = n[l][0]), (o = n[l][1]), (i = n[l][2]);
            for (var c = !0, a = 0; a < r.length; a++)
              (!1 & i || u >= i) &&
              Object.keys(e.O).every(function (n) {
                return e.O[n](r[a]);
              })
                ? r.splice(a--, 1)
                : ((c = !1), i < u && (u = i));
            if (c) {
              n.splice(l--, 1);
              var s = o();
              void 0 !== s && (t = s);
            }
          }
          return t;
        }
        i = i || 0;
        for (var l = n.length; l > 0 && n[l - 1][2] > i; l--) n[l] = n[l - 1];
        n[l] = [r, o, i];
      };
    })(),
    (function () {
      e.n = function (n) {
        var t =
          n && n.__esModule
            ? function () {
                return n["default"];
              }
            : function () {
                return n;
              };
        return e.d(t, { a: t }), t;
      };
    })(),
    (function () {
      e.d = function (n, t) {
        for (var r in t)
          e.o(t, r) &&
            !e.o(n, r) &&
            Object.defineProperty(n, r, { enumerable: !0, get: t[r] });
      };
    })(),
    (function () {
      e.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (n) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      e.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t);
      };
    })(),
    (function () {
      e.r = function (n) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(n, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      var n = { 524: 0 };
      e.O.j = function (t) {
        return 0 === n[t];
      };
      var t = function (t, r) {
          var o,
            i,
            u = r[0],
            c = r[1],
            a = r[2],
            s = 0;
          if (
            u.some(function (t) {
              return 0 !== n[t];
            })
          ) {
            for (o in c) e.o(c, o) && (e.m[o] = c[o]);
            if (a) var l = a(e);
          }
          for (t && t(r); s < u.length; s++)
            (i = u[s]), e.o(n, i) && n[i] && n[i][0](), (n[i] = 0);
          return e.O(l);
        },
        r = (self["webpackChunktienda_bits"] =
          self["webpackChunktienda_bits"] || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var r = e.O(void 0, [504], function () {
    return e(2944);
  });
  r = e.O(r);
})();
//# sourceMappingURL=app.8b4f554e.js.map
