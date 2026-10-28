var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t, n) => () => {
    if (n) throw n[0];
    try {
      return (e && (t = e((e = 0))), t);
    } catch (e) {
      throw ((n = [e]), e);
    }
  },
  s = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t, t.exports), (e = null)),
    t.exports
  ),
  c = (e, n) => {
    let r = {};
    for (var i in e) t(r, i, { get: e[i], enumerable: !0 });
    return (n || t(r, Symbol.toStringTag, { value: `Module` }), r);
  },
  l = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  },
  u = (n, r, o) => (
    (o = n == null ? {} : e(i(n))),
    l(
      r || !n || !n.__esModule || !a.call(n, `default`)
        ? t(o, `default`, { value: n, enumerable: !0 })
        : o,
      n,
    )
  ),
  d = (e) =>
    a.call(e, `module.exports`)
      ? e[`module.exports`]
      : l(t({}, `__esModule`, { value: !0 }), e);
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      (t.credentials =
        e.crossOrigin === `use-credentials`
          ? `include`
          : e.crossOrigin === `anonymous`
            ? `omit`
            : `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var f = s((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n;) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null;) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m)) {
        if (n(c) !== null) ((m = !0), S || ((S = !0), ne()));
        else {
          var t = n(l);
          t !== null && ae(x, t.startTime - e);
        }
      }
    }
    var S = !1,
      C = -1,
      ee = 5,
      w = -1;
    function te() {
      return g ? !0 : !(e.unstable_now() - w < ee);
    }
    function T() {
      if (((g = !1), S)) {
        var t = e.unstable_now();
        w = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (
                  b(t), d = n(c);
                  d !== null && !(d.expirationTime > t && te());
                ) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ((d.callback = s), b(t), (i = !0));
                      break b;
                    }
                    (d === n(c) && r(c), b(t));
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  (u !== null && ae(x, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
            i = void 0;
          }
        } finally {
          i ? ne() : (S = !1);
        }
      }
    }
    var ne;
    if (typeof y == `function`)
      ne = function () {
        y(T);
      };
    else if (typeof MessageChannel < `u`) {
      var re = new MessageChannel(),
        ie = re.port2;
      ((re.port1.onmessage = T),
        (ne = function () {
          ie.postMessage(null);
        }));
    } else
      ne = function () {
        _(T, 0);
      };
    function ae(t, n) {
      C = _(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (ee = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (v(C), (C = -1)) : (h = !0), ae(x, a - o)))
            : ((r.sortIndex = s),
              t(c, r),
              m || p || ((m = !0), S || ((S = !0), ne()))),
          r
        );
      }),
      (e.unstable_shouldYield = te),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  p = s((e, t) => {
    t.exports = f();
  }),
  m = s((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.for(`react.view_transition`),
      m = Symbol.iterator;
    function h(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (m && e[m]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var g = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      _ = Object.assign,
      v = {};
    function y(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = v),
        (this.updater = n || g));
    }
    ((y.prototype.isReactComponent = {}),
      (y.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (y.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }));
    function b() {}
    b.prototype = y.prototype;
    function x(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = v),
        (this.updater = n || g));
    }
    var S = (x.prototype = new b());
    ((S.constructor = x), _(S, y.prototype), (S.isPureReactComponent = !0));
    var C = Array.isArray;
    function ee() {}
    var w = { H: null, A: null, T: null, S: null },
      te = Object.prototype.hasOwnProperty;
    function T(e, n, r) {
      var i = r.ref;
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      };
    }
    function ne(e, t) {
      return T(e.type, t, e.props);
    }
    function re(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function ie(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var ae = /\/+/g;
    function oe(e, t) {
      return typeof e == `object` && e && e.key != null
        ? ie(`` + e.key)
        : t.toString(36);
    }
    function se(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(ee, ee)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t));
                  },
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function ce(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return ((c = e._init), ce(c(e._payload), r, i, a, o));
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + oe(e, 0) : a),
          C(o)
            ? ((i = ``),
              c != null && (i = c.replace(ae, `$&/`) + `/`),
              ce(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (re(o) &&
                (o = ne(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(ae, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (C(e))
        for (var u = 0; u < e.length; u++)
          ((a = e[u]), (s = l + oe(a, u)), (c += ce(a, r, i, s, o)));
      else if (((u = h(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done;)
          ((a = a.value), (s = l + oe(a, u++)), (c += ce(a, r, i, s, o)));
      else if (s === `object`) {
        if (typeof e.then == `function`) return ce(se(e), r, i, a, o);
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      }
      return c;
    }
    function le(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        ce(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function ue(e) {
      if (e._status === -1) {
        var t = e._result,
          n = t();
        (n.then(
          function (t) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1),
              (e._result = t),
              n.status === void 0 && ((n.status = `fulfilled`), (n.value = t)));
          },
          function (t) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2),
              (e._result = t),
              n.status === void 0 && ((n.status = `rejected`), (n.reason = t)));
          },
        ),
          e._status === -1 && ((e._status = 0), (e._result = n)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var E =
      typeof reportError == `function`
        ? reportError
        : function (e) {
            if (
              typeof window == `object` &&
              typeof window.ErrorEvent == `function`
            ) {
              var t = new window.ErrorEvent(`error`, {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == `object` && e && typeof e.message == `string`
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == `object` &&
              typeof process.emit == `function`
            ) {
              process.emit(`uncaughtException`, e);
              return;
            }
            console.error(e);
          };
    function de(e) {
      var t = w.T,
        n = {};
      ((n.types = t === null ? null : t.types), (w.T = n));
      try {
        var r = e(),
          i = w.S;
        (i !== null && i(n, r),
          typeof r == `object` &&
            r &&
            typeof r.then == `function` &&
            r.then(ee, E));
      } catch (e) {
        E(e);
      } finally {
        (t !== null && n.types !== null && (t.types = n.types), (w.T = t));
      }
    }
    function fe(e) {
      var t = w.T;
      if (t !== null) {
        var n = t.types;
        n === null ? (t.types = [e]) : n.indexOf(e) === -1 && n.push(e);
      } else de(fe.bind(null, e));
    }
    var pe = {
      map: le,
      forEach: function (e, t, n) {
        le(
          e,
          function () {
            t.apply(this, arguments);
          },
          n,
        );
      },
      count: function (e) {
        var t = 0;
        return (
          le(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          le(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!re(e))
          throw Error(
            `React.Children.only expected to receive a single React element child.`,
          );
        return e;
      },
    };
    ((e.Activity = f),
      (e.Children = pe),
      (e.Component = y),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = x),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.ViewTransition = p),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return w.H.useMemoCache(e);
        },
      }),
      (e.addTransitionType = fe),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`,
          );
        var r = _({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !te.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return T(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            te.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return T(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = re),
      (e.lazy = function (e) {
        return {
          $$typeof: d,
          _payload: { _status: -1, _result: e },
          _init: ue,
        };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = de),
      (e.unstable_useCacheRefresh = function () {
        return w.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return w.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return w.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return w.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return w.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return w.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return w.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return w.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return w.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return w.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return w.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return w.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return w.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return w.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return w.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return w.H.useRef(e);
      }),
      (e.useState = function (e) {
        return w.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return w.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return w.H.useTransition();
      }),
      (e.version = `19.3.1`));
  }),
  h = s((e, t) => {
    t.exports = m();
  }),
  g = s((e) => {
    var t = h();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: function () {
            throw Error(n(522));
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for(`react.portal`),
      o = Symbol.for(`react.recoverable`),
      s = Symbol.for(`react.optimistic_key`);
    function c(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: a,
        key: r == null ? null : r === s ? s : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var l = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function u(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    ((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
      (e.browser = function (e) {
        return { $$typeof: o, _reason: e };
      }),
      (e.createPortal = function (e, t) {
        var r =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
          throw Error(n(299));
        return c(e, t, null, r);
      }),
      (e.flushSync = function (e) {
        var t = l.T,
          n = i.p;
        try {
          if (((l.T = null), (i.p = 2), e)) return e();
        } finally {
          ((l.T = t), (i.p = n), i.d.f());
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t =
                typeof t == `string`
                  ? t === `use-credentials`
                    ? t
                    : ``
                  : void 0))
            : (t = null),
          i.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && i.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = u(n, t.crossOrigin),
            a = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? i.d.S(
                e,
                typeof t.precedence == `string` ? t.precedence : void 0,
                { crossOrigin: r, integrity: a, fetchPriority: o },
              )
            : n === `script` &&
              i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`) {
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = u(t.as, t.crossOrigin);
              i.d.M(e, {
                crossOrigin: n,
                integrity:
                  typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
                fetchPriority:
                  typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
              });
            }
          } else t ?? i.d.M(e);
        }
      }),
      (e.preload = function (e, t) {
        if (
          typeof e == `string` &&
          typeof t == `object` &&
          t &&
          typeof t.as == `string`
        ) {
          var n = t.as,
            r = u(n, t.crossOrigin);
          i.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority:
              typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy:
              typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet:
              typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`) {
          if (t) {
            var n = u(t.as, t.crossOrigin);
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
              nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              fetchPriority:
                typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            });
          } else i.d.m(e);
        }
      }),
      (e.requestFormReset = function (e) {
        i.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return l.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return l.H.useHostTransitionStatus();
      }),
      (e.version = `19.3.1`));
  }),
  _ = s((e, t) => {
    function n() {
      if (
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = g()));
  }),
  v = s((e) => {
    var t = p(),
      n = h(),
      r = _();
    function i(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function a(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function o(e) {
      for (var t = e, n = t; n && !n.alternate;)
        ((t = n), t.flags & 4098 && (e = t.return), (n = t.return));
      for (; t.return;) t = t.return;
      return t.tag === 3 ? e : null;
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188));
    }
    function u(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ;) {
        var a = n.return;
        if (a === null) break;
        var s = a.alternate;
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === s.child) {
          for (s = a.child; s;) {
            if (s === n) return (l(a), e);
            if (s === r) return (l(a), t);
            s = s.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) ((n = a), (r = s));
        else {
          for (var c = !1, u = a.child; u;) {
            if (u === n) {
              ((c = !0), (n = a), (r = s));
              break;
            }
            if (u === r) {
              ((c = !0), (r = a), (n = s));
              break;
            }
            u = u.sibling;
          }
          if (!c) {
            for (u = s.child; u;) {
              if (u === n) {
                ((c = !0), (n = s), (r = a));
                break;
              }
              if (u === r) {
                ((c = !0), (r = s), (n = a));
                break;
              }
              u = u.sibling;
            }
            if (!c) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function d(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null;) {
        if (((t = d(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    function f(e, t, n, r, i, a) {
      for (; e !== null;) {
        if (
          ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a)) ||
          ((e.tag !== 22 || e.memoizedState === null) &&
            (t || (e.tag !== 5 && e.tag !== 27)) &&
            f(e.child, t, n, r, i, a))
        )
          return !0;
        e = e.sibling;
      }
      return !1;
    }
    function m(e) {
      for (e = e.return; e !== null;) {
        if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
        e = e.return;
      }
      return null;
    }
    function g(e) {
      var t = !1;
      for (
        e = e.return;
        e !== null &&
        (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);
      )
        e = e.return;
      return t;
    }
    function v(e) {
      var t = [null, null],
        n = m(e);
      return (n === null || y(t, e, n.child, { foundSelf: !1 }), t);
    }
    function y(e, t, n, r) {
      for (; n !== null;) {
        if (n === t) r.foundSelf = !0;
        else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
          if (r.foundSelf) return ((e[1] = n), !0);
          e[0] = n;
        } else if (
          (n.tag !== 22 || n.memoizedState === null) &&
          y(e, t, n.child, r)
        )
          return !0;
        n = n.sibling;
      }
      return !1;
    }
    function b(e) {
      switch (e.tag) {
        case 5:
        case 27:
        case 6:
          return e.stateNode;
        case 3:
          return e.stateNode.containerInfo;
        default:
          throw Error(i(559));
      }
    }
    var x = null,
      S = null;
    function C(e, t, n) {
      return e === n || (e === t && ((x = e), !0));
    }
    function ee(e, t, n) {
      return e === n ? ((S = e), !1) : e === t && (S !== null && (x = e), !0);
    }
    function w(e) {
      if (e === null) return null;
      do e = e === null ? null : e.return;
      while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
      return e || null;
    }
    function te(e, t, n) {
      for (var r = 0, i = e; i; i = n(i)) r++;
      i = 0;
      for (var a = t; a; a = n(a)) i++;
      for (; 0 < r - i;) ((e = n(e)), r--);
      for (; 0 < i - r;) ((t = n(t)), i--);
      for (; r--;) {
        if (e === t || (t !== null && e === t.alternate)) return e;
        ((e = n(e)), (t = n(t)));
      }
      return null;
    }
    var T = Object.assign,
      ne = Symbol.for(`react.element`),
      re = Symbol.for(`react.transitional.element`),
      ie = Symbol.for(`react.portal`),
      ae = Symbol.for(`react.fragment`),
      oe = Symbol.for(`react.strict_mode`),
      se = Symbol.for(`react.profiler`),
      ce = Symbol.for(`react.consumer`),
      le = Symbol.for(`react.context`),
      ue = Symbol.for(`react.forward_ref`),
      E = Symbol.for(`react.suspense`),
      de = Symbol.for(`react.suspense_list`),
      fe = Symbol.for(`react.memo`),
      pe = Symbol.for(`react.lazy`),
      me = Symbol.for(`react.activity`),
      he = Symbol.for(`react.legacy_hidden`),
      ge = Symbol.for(`react.memo_cache_sentinel`),
      _e = Symbol.for(`react.view_transition`),
      ve = Symbol.for(`react.recoverable`),
      ye = Symbol.iterator;
    function be(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (ye && e[ye]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var xe = Symbol.for(`react.client.reference`);
    function Se(e) {
      if (e == null) return null;
      if (typeof e == `function`)
        return e.$$typeof === xe ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case ae:
          return `Fragment`;
        case se:
          return `Profiler`;
        case oe:
          return `StrictMode`;
        case E:
          return `Suspense`;
        case de:
          return `SuspenseList`;
        case me:
          return `Activity`;
        case _e:
          return `ViewTransition`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case ie:
            return `Portal`;
          case le:
            return e.displayName || `Context`;
          case ce:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case ue:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case fe:
            return (
              (t = e.displayName || null),
              t === null ? Se(e.type) || `Memo` : t
            );
          case pe:
            ((t = e._payload), (e = e._init));
            try {
              return Se(e(t));
            } catch {}
        }
      return null;
    }
    var Ce = Array.isArray,
      D = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      O = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      we = { pending: !1, data: null, method: null, action: null },
      Te = [],
      Ee = -1;
    function De(e) {
      return { current: e };
    }
    function Oe(e) {
      0 > Ee || ((e.current = Te[Ee]), (Te[Ee] = null), Ee--);
    }
    function k(e, t) {
      (Ee++, (Te[Ee] = e.current), (e.current = t));
    }
    var ke = De(null),
      Ae = De(null),
      je = De(null),
      Me = De(null);
    function Ne(e, t) {
      switch ((k(je, t), k(Ae, e), k(ke, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? up(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            ((t = up(t)), (e = dp(t, e)));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (Oe(ke), k(ke, e));
    }
    function Pe() {
      (Oe(ke), Oe(Ae), Oe(je));
    }
    function Fe(e) {
      var t = e.memoizedState;
      (t !== null && ((sh._currentValue = t.memoizedState), k(Me, e)),
        (t = ke.current));
      var n = dp(t, e.type);
      t !== n && (k(Ae, e), k(ke, n));
    }
    function Ie(e) {
      (Ae.current === e && (Oe(ke), Oe(Ae)),
        Me.current === e && (Oe(Me), (sh._currentValue = we)));
    }
    var Le, Re;
    function ze(e) {
      if (Le === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((Le = (t && t[1]) || ``),
            (Re =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        Le +
        e +
        Re
      );
    }
    var Be = !1;
    function A(e, t) {
      if (!e || Be) return ``;
      Be = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  n = !1;
                  try {
                    var i = Object.getOwnPropertyDescriptor(
                      e.prototype,
                      `props`,
                    );
                    (Object.defineProperty(e.prototype, "props", {
                      configurable: !0,
                      set: function () {
                        throw Error();
                      },
                    }),
                      (n = !0),
                      new e());
                  } finally {
                    n &&
                      (i === void 0
                        ? delete e.prototype.props
                        : Object.defineProperty(e.prototype, "props", i));
                  }
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  typeof n.catch == `function` &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          `name`,
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (
            i = r = 0;
            r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);
          )
            r++;
          for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);)
            i++;
          if (r === c.length || i === l.length)
            for (
              r = c.length - 1, i = l.length - 1;
              1 <= r && 0 <= i && c[r] !== l[i];
            )
              i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        ((Be = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? ze(n) : ``;
    }
    function Ve(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return ze(e.type);
        case 16:
          return ze(`Lazy`);
        case 13:
          return e.child !== t && t !== null
            ? ze(`Suspense Fallback`)
            : ze(`Suspense`);
        case 19:
          return ze(`SuspenseList`);
        case 0:
        case 15:
          return A(e.type, !1);
        case 11:
          return A(e.type.render, !1);
        case 1:
          return A(e.type, !0);
        case 31:
          return ze(`Activity`);
        case 30:
          return ze(`ViewTransition`);
        default:
          return ``;
      }
    }
    function He(e) {
      try {
        var t = ``,
          n = null;
        do ((t += Ve(e, n)), (n = e), (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var Ue = Object.prototype.hasOwnProperty,
      We = t.unstable_scheduleCallback,
      Ge = t.unstable_cancelCallback,
      Ke = t.unstable_shouldYield,
      qe = t.unstable_requestPaint,
      Je = t.unstable_now,
      Ye = t.unstable_getCurrentPriorityLevel,
      Xe = t.unstable_ImmediatePriority,
      Ze = t.unstable_UserBlockingPriority,
      Qe = t.unstable_NormalPriority,
      $e = t.unstable_LowPriority,
      et = t.unstable_IdlePriority,
      tt = t.log,
      nt = t.unstable_setDisableYieldValue,
      rt = null,
      it = null;
    function at(e) {
      if (
        (typeof tt == `function` && nt(e),
        it && typeof it.setStrictMode == `function`)
      )
        try {
          it.setStrictMode(rt, e);
        } catch {}
    }
    var ot = Math.clz32 ? Math.clz32 : lt,
      st = Math.log,
      ct = Math.LN2;
    function lt(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((st(e) / ct) | 0)) | 0);
    }
    var ut = 256,
      dt = 262144,
      ft = 4194304;
    function pt(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & -e;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function mt(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = pt(n)))
                : (i = pt(o))
              : (i = pt(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s),
                o === 0
                  ? n || ((n = s & ~e), n !== 0 && (i = pt(n)))
                  : (i = pt(o)))
              : (i = pt(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function ht(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function gt(e, t) {
      t & 8 && (t |= t & 32);
      var n = e.entangledLanes;
      if (n !== 0)
        for (e = e.entanglements, n &= t; 0 < n;) {
          var r = 31 - ot(n),
            i = 1 << r;
          ((t |= e[r]), (n &= ~i));
        }
      return t;
    }
    function _t(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function vt() {
      var e = ft;
      return ((ft <<= 1), !(ft & 62914560) && (ft = 4194304), e);
    }
    function yt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function bt(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function xt(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      ((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0));
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n;) {
        var u = 31 - ot(n),
          d = 1 << u;
        ((s[u] = 0), (c[u] = -1));
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      (r !== 0 && St(e, r, 0),
        a !== 0 &&
          i === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function St(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - ot(t);
      ((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function Ct(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n;) {
        var r = 31 - ot(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function wt(e, t) {
      var n = t & -t;
      return (
        (n = n & 42 ? 1 : Tt(n)),
        (n & (e.suspendedLanes | t)) === 0 ? n : 0
      );
    }
    function Tt(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function Et(e) {
      return (
        (e &= -e),
        2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
      );
    }
    function Dt() {
      var e = O.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : Ch(e.type)) : e;
    }
    function Ot(e, t) {
      var n = O.p;
      try {
        return ((O.p = e), t());
      } finally {
        O.p = n;
      }
    }
    var kt = Math.random().toString(36).slice(2),
      At = `__reactFiber$` + kt,
      jt = `__reactProps$` + kt,
      Mt = `__reactContainer$` + kt,
      Nt = `__reactEvents$` + kt,
      Pt = `__reactListeners$` + kt,
      Ft = `__reactHandles$` + kt,
      j = `__reactResources$` + kt,
      It = `__reactMarker$` + kt,
      Lt = `__reactLoad$` + kt;
    function Rt(e) {
      (delete e[At], delete e[jt], delete e[Pt], delete e[Ft]);
    }
    function zt(e) {
      var t;
      if ((t = e[At])) return t;
      for (var n = e.parentNode; n;) {
        if ((t = n[Mt] || n[At])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = fm(e); e !== null;) {
              if ((n = e[At])) return n;
              e = fm(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function Bt(e) {
      if ((e = e[At] || e[Mt])) {
        var t = e.tag;
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 31 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return e;
      }
      return null;
    }
    function Vt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function Ht(e) {
      var t = e[j];
      return (
        (t ||= e[j] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function Ut(e) {
      e[It] = !0;
    }
    function Wt(e) {
      e[Lt] = void 0;
    }
    var Gt = new Set(),
      Kt = {};
    function qt(e, t) {
      (Jt(e, t), Jt(e + `Capture`, t));
    }
    function Jt(e, t) {
      for (Kt[e] = t, e = 0; e < t.length; e++) Gt.add(t[e]);
    }
    var Yt = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      Xt = {},
      Zt = {};
    function Qt(e) {
      return Ue.call(Zt, e)
        ? !0
        : Ue.call(Xt, e)
          ? !1
          : Yt.test(e)
            ? (Zt[e] = !0)
            : ((Xt[e] = !0), !1);
    }
    var M = !1;
    function $t() {
      var e = M;
      return ((M = !1), e);
    }
    function en(e, t, n) {
      if (Qt(t)) {
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, n);
        }
      }
    }
    function tn(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, n);
      }
    }
    function nn(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, r);
      }
    }
    function rn(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function an(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function on(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((n = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function sn(e) {
      if (!e._valueTracker) {
        var t = an(e) ? `checked` : `value`;
        e._valueTracker = on(e, t, `` + e[t]);
      }
    }
    function cn(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = an(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e !== n && (t.setValue(e), !0)
      );
    }
    var ln = /[\n"\\]/g;
    function un(e) {
      return e.replace(ln, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function N(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null &&
        typeof o != `function` &&
        typeof o != `symbol` &&
        typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) &&
              (e.value = `` + rn(t))
            : e.value !== `` + rn(t) && (e.value = `` + rn(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : fn(e, rn(n))
          : o === `number` && e.value == t
            ? fn(e, rn(e.value))
            : fn(e, rn(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null &&
          (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null &&
        typeof s != `function` &&
        typeof s != `symbol` &&
        typeof s != `boolean`
          ? (e.name = `` + rn(s))
          : e.removeAttribute(`name`));
    }
    function dn(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          sn(e);
          return;
        }
        ((n = n == null ? `` : `` + rn(n)),
          (t = t == null ? n : `` + rn(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        sn(e));
    }
    function fn(e, t) {
      e.defaultValue !== `` + t && (e.defaultValue = `` + t);
    }
    function pn(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + rn(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function mn(e, t, n) {
      t != null && ((t = `` + rn(t)), t !== e.value && (e.value = t), n == null)
        ? e.defaultValue !== t && (e.defaultValue = t)
        : (e.defaultValue = n == null ? `` : `` + rn(n));
    }
    function hn(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (Ce(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = rn(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        sn(e));
    }
    function gn(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var _n = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function vn(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || _n.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function yn(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``),
            (M = !0));
        for (var a in t)
          ((r = t[a]),
            t.hasOwnProperty(a) && n[a] !== r && (vn(e, a, r), (M = !0)));
      } else for (var o in t) t.hasOwnProperty(o) && vn(e, o, t[o]);
    }
    function bn(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var xn = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`maskType`, `mask-type`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      Sn =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Cn(e) {
      return Sn.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function wn() {}
    var Tn = null;
    function En(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var Dn = null,
      On = null;
    function kn(e) {
      var t = Bt(e);
      if (t && (e = t.stateNode)) {
        var n = e[jt] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (N(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name="` + un(`` + t) + `"][type="radio"]`,
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[jt] || null;
                  if (!a) throw Error(i(90));
                  N(
                    r,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                ((r = n[t]), r.form === e.form && cn(r));
            }
            break a;
          case `textarea`:
            mn(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && pn(e, !!n.multiple, t, !1));
        }
      }
    }
    var An = !1;
    function jn(e, t, n) {
      if (An) return e(t, n);
      An = !0;
      try {
        return e(t);
      } finally {
        if (
          ((An = !1),
          (Dn !== null || On !== null) &&
            (zd(), Dn && ((t = Dn), (e = On), (On = Dn = null), kn(t), e)))
        )
          for (t = 0; t < e.length; t++) kn(e[t]);
      }
    }
    function Mn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[jt] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type),
            (r =
              e !== `button` &&
              e !== `input` &&
              e !== `select` &&
              e !== `textarea`)),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var Nn =
        typeof window < `u` &&
        window.document !== void 0 &&
        window.document.createElement !== void 0,
      Pn = !1;
    if (Nn)
      try {
        var P = {};
        (Object.defineProperty(P, "passive", {
          get: function () {
            Pn = !0;
          },
        }),
          window.addEventListener(`test`, P, P),
          window.removeEventListener(`test`, P, P));
      } catch {
        Pn = !1;
      }
    var Fn = null,
      In = null,
      Ln = null;
    function Rn() {
      if (Ln) return Ln;
      var e,
        t = In,
        n = t.length,
        r,
        i = `value` in Fn ? Fn.value : Fn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (Ln = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function zn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Bn() {
      return !0;
    }
    function Vn() {
      return !1;
    }
    function Hn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? Bn
            : Vn),
          (this.isPropagationStopped = Vn),
          this
        );
      }
      return (
        T(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Bn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Bn));
          },
          persist: function () {},
          isPersistent: Bn,
        }),
        t
      );
    }
    var Un = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Wn = Hn(Un),
      Gn = T({}, Un, { view: 0, detail: 0 }),
      Kn = Hn(Gn),
      qn,
      Jn,
      Yn,
      Xn = T({}, Gn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: sr,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== Yn &&
                (Yn && e.type === `mousemove`
                  ? ((qn = e.screenX - Yn.screenX),
                    (Jn = e.screenY - Yn.screenY))
                  : (Jn = qn = 0),
                (Yn = e)),
              qn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : Jn;
        },
      }),
      Zn = Hn(Xn),
      Qn = Hn(T({}, Xn, { dataTransfer: 0 })),
      $n = Hn(T({}, Gn, { relatedTarget: 0 })),
      er = Hn(
        T({}, Un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      ),
      tr = Hn(
        T({}, Un, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
      ),
      nr = Hn(T({}, Un, { data: 0 })),
      rr = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      ir = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      ar = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function or(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = ar[e])
          ? !!t[e]
          : !1;
    }
    function sr() {
      return or;
    }
    var cr = Hn(
        T({}, Gn, {
          key: function (e) {
            if (e.key) {
              var t = rr[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = zn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? ir[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: sr,
          charCode: function (e) {
            return e.type === `keypress` ? zn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? zn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      lr = Hn(
        T({}, Xn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      ur = Hn(T({}, Un, { submitter: 0 })),
      dr = Hn(
        T({}, Gn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: sr,
        }),
      ),
      fr = Hn(T({}, Un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      pr = Hn(
        T({}, Xn, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      mr = Hn(T({}, Un, { newState: 0, oldState: 0, source: 0 })),
      hr = [9, 13, 27, 32],
      gr = Nn && `CompositionEvent` in window,
      _r = null;
    Nn && `documentMode` in document && (_r = document.documentMode);
    var vr = Nn && `TextEvent` in window && !_r,
      yr = Nn && (!gr || (_r && 8 < _r && 11 >= _r)),
      br = ` `,
      xr = !1;
    function Sr(e, t) {
      switch (e) {
        case `keyup`:
          return hr.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function Cr(e) {
      return (
        (e = e.detail),
        typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var wr = !1;
    function Tr(e, t) {
      switch (e) {
        case `compositionend`:
          return Cr(t);
        case `keypress`:
          return t.which === 32 ? ((xr = !0), br) : null;
        case `textInput`:
          return ((e = t.data), e === br && xr ? null : e);
        default:
          return null;
      }
    }
    function Er(e, t) {
      if (wr)
        return e === `compositionend` || (!gr && Sr(e, t))
          ? ((e = Rn()), (Ln = In = Fn = null), (wr = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return yr && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var Dr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function Or(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!Dr[e.type] : t === `textarea`;
    }
    function kr(e, t, n, r) {
      (Dn ? (On ? On.push(r) : (On = [r])) : (Dn = r),
        (t = Jf(t, `onChange`)),
        0 < t.length &&
          ((n = new Wn(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t })));
    }
    var Ar = null,
      jr = null;
    function Mr(e) {
      Vf(e, 0);
    }
    function Nr(e) {
      if (cn(Vt(e))) return e;
    }
    function Pr(e, t) {
      if (e === `change`) return t;
    }
    var Fr = !1;
    if (Nn) {
      var Ir;
      if (Nn) {
        var Lr = `oninput` in document;
        if (!Lr) {
          var Rr = document.createElement(`div`);
          (Rr.setAttribute(`oninput`, `return;`),
            (Lr = typeof Rr.oninput == `function`));
        }
        Ir = Lr;
      } else Ir = !1;
      Fr = Ir && (!document.documentMode || 9 < document.documentMode);
    }
    function zr() {
      Ar && (Ar.detachEvent(`onpropertychange`, Br), (jr = Ar = null));
    }
    function Br(e) {
      if (e.propertyName === `value` && Nr(jr)) {
        var t = [];
        (kr(t, jr, e, En(e)), jn(Mr, t));
      }
    }
    function Vr(e, t, n) {
      e === `focusin`
        ? (zr(), (Ar = t), (jr = n), Ar.attachEvent(`onpropertychange`, Br))
        : e === `focusout` && zr();
    }
    function Hr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return Nr(jr);
    }
    function Ur(e, t) {
      if (e === `click`) return Nr(t);
    }
    function Wr(e, t) {
      if (e === `input` || e === `change`) return Nr(t);
    }
    function Gr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Kr = typeof Object.is == `function` ? Object.is : Gr;
    function qr(e, t) {
      if (Kr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ue.call(t, i) || !Kr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Jr(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Yr(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function Xr(e, t) {
      var n = Yr(e);
      e = 0;
      for (var r; n;) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n;) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Yr(n);
      }
    }
    function Zr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Zr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Qr(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Jr(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Jr(e.document);
      }
      return t;
    }
    function $r(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var ei = Nn && `documentMode` in document && 11 >= document.documentMode,
      ti = null,
      ni = null,
      ri = null,
      ii = !1;
    function ai(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      ii ||
        ti == null ||
        ti !== Jr(r) ||
        ((r = ti),
        `selectionStart` in r && $r(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (ri && qr(ri, r)) ||
          ((ri = r),
          (r = Jf(ni, `onSelect`)),
          0 < r.length &&
            ((t = new Wn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = ti))));
    }
    function oi(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var si = {
        animationend: oi(`Animation`, `AnimationEnd`),
        animationiteration: oi(`Animation`, `AnimationIteration`),
        animationstart: oi(`Animation`, `AnimationStart`),
        transitionrun: oi(`Transition`, `TransitionRun`),
        transitionstart: oi(`Transition`, `TransitionStart`),
        transitioncancel: oi(`Transition`, `TransitionCancel`),
        transitionend: oi(`Transition`, `TransitionEnd`),
      },
      ci = {},
      li = {};
    Nn &&
      ((li = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete si.animationend.animation,
        delete si.animationiteration.animation,
        delete si.animationstart.animation),
      `TransitionEvent` in window || delete si.transitionend.transition);
    function ui(e) {
      if (ci[e]) return ci[e];
      if (!si[e]) return e;
      var t = si[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in li) return (ci[e] = t[n]);
      return e;
    }
    var di = ui(`animationend`),
      fi = ui(`animationiteration`),
      pi = ui(`animationstart`),
      mi = ui(`transitionrun`),
      hi = ui(`transitionstart`),
      gi = ui(`transitioncancel`),
      _i = ui(`transitionend`),
      vi = new Map(),
      yi =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    yi.push(`scrollEnd`);
    function bi(e, t) {
      (vi.set(e, t), qt(t, [e]));
    }
    var xi = 0;
    function Si(e, t) {
      if (e.name != null && e.name !== `auto`) return e.name;
      if (t.autoName !== null) return t.autoName;
      e = bd.identifierPrefix;
      var n = xi++;
      return ((e = `_` + e + `t_` + n.toString(32) + `_`), (t.autoName = e));
    }
    function Ci(e) {
      if (e == null || typeof e == `string`) return e;
      var t = null,
        n = Od;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = e[n[r]];
          if (i != null) {
            if (i === `none`) return `none`;
            t = t == null ? i : t + (` ` + i);
          }
        }
      return t ?? e.default;
    }
    function wi(e, t) {
      return (
        (e = Ci(e)),
        (t = Ci(t)),
        t == null ? (e === `auto` ? null : e) : t === `auto` ? null : t
      );
    }
    var Ti =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      Ei = [],
      Di = 0,
      Oi = 0;
    function ki() {
      for (var e = Di, t = (Oi = Di = 0); t < e;) {
        var n = Ei[t];
        Ei[t++] = null;
        var r = Ei[t];
        Ei[t++] = null;
        var i = Ei[t];
        Ei[t++] = null;
        var a = Ei[t];
        if (((Ei[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i));
        }
        a !== 0 && Ni(n, i, a);
      }
    }
    function Ai(e, t, n, r) {
      ((Ei[Di++] = e),
        (Ei[Di++] = t),
        (Ei[Di++] = n),
        (Ei[Di++] = r),
        (Oi |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function ji(e, t, n, r) {
      return (Ai(e, t, n, r), Pi(e));
    }
    function Mi(e, t) {
      return (Ai(e, null, null, t), Pi(e));
    }
    function Ni(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null;)
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 &&
            ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return));
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - ot(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function Pi(e) {
      if (50 < kd) throw ((kd = 0), (Ad = null), Error(i(185)));
      for (var t = e.return; t !== null;) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var Fi = {};
    function Ii(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function Li(e, t, n, r) {
      return new Ii(e, t, n, r);
    }
    function Ri(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function zi(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = Li(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 1206910976),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function Bi(e, t) {
      e.flags &= 1206910978;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function Vi(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof r == `function`)) Ri(r) && (s = 1);
      else if (typeof r == `string`)
        s = qm(e, n, ke.current)
          ? 26
          : e === `html` || e === `head` || e === `body`
            ? 27
            : 5;
      else
        a: switch (r) {
          case me:
            return (
              (e = Li(31, n, t, a)),
              (e.elementType = me),
              (e.lanes = o),
              e
            );
          case ae:
            return Hi(n.children, a, o, t);
          case oe:
            ((s = 8), (a |= 24));
            break;
          case se:
            return (
              (e = Li(12, n, t, a | 2)),
              (e.elementType = se),
              (e.lanes = o),
              e
            );
          case E:
            return (
              (e = Li(13, n, t, a)),
              (e.elementType = E),
              (e.lanes = o),
              e
            );
          case de:
            return (
              (e = Li(19, n, t, a)),
              (e.elementType = de),
              (e.lanes = o),
              e
            );
          case he:
          case _e:
            return (
              (e = a | 32),
              (e = Li(30, n, t, e)),
              (e.elementType = _e),
              (e.lanes = o),
              (e.stateNode = {
                autoName: null,
                paired: null,
                clones: null,
                ref: null,
              }),
              e
            );
          default:
            if (typeof r == `object` && r)
              switch (r.$$typeof) {
                case le:
                  s = 10;
                  break a;
                case ce:
                  s = 9;
                  break a;
                case ue:
                  s = 11;
                  break a;
                case fe:
                  s = 14;
                  break a;
                case pe:
                  ((s = 16), (r = null));
                  break a;
              }
            ((s = 29),
              (n = Error(i(130, e === null ? `null` : typeof e, ``))),
              (r = null));
        }
      return (
        (t = Li(s, n, t, a)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      );
    }
    function Hi(e, t, n, r) {
      return ((e = Li(7, e, r, t)), (e.lanes = n), e);
    }
    function Ui(e, t, n) {
      return ((e = Li(6, e, null, t)), (e.lanes = n), e);
    }
    function Wi(e) {
      var t = Li(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function Gi(e, t, n) {
      return (
        (t = Li(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var Ki = new WeakMap();
    function qi(e, t) {
      if (typeof e == `object` && e) {
        var n = Ki.get(e);
        return n === void 0
          ? ((t = { value: e, source: t, stack: He(t) }), Ki.set(e, t), t)
          : n;
      }
      return { value: e, source: t, stack: He(t) };
    }
    var Ji = [],
      Yi = 0,
      Xi = null,
      Zi = 0,
      Qi = [],
      $i = 0,
      ea = null,
      ta = 1,
      na = ``;
    function ra(e, t) {
      ((Ji[Yi++] = Zi), (Ji[Yi++] = Xi), (Xi = e), (Zi = t));
    }
    function ia(e, t, n) {
      ((Qi[$i++] = ta), (Qi[$i++] = na), (Qi[$i++] = ea), (ea = e));
      var r = ta;
      e = na;
      var i = 32 - ot(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - ot(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (ta = (1 << (32 - ot(t) + i)) | (n << i) | r),
          (na = a + e));
      } else ((ta = (1 << a) | (n << i) | r), (na = e));
    }
    function aa(e) {
      e.return !== null && (ra(e, 1), ia(e, 1, 0));
    }
    function oa(e) {
      for (; e === Xi;)
        ((Xi = Ji[--Yi]), (Ji[Yi] = null), (Zi = Ji[--Yi]), (Ji[Yi] = null));
      for (; e === ea;)
        ((ea = Qi[--$i]),
          (Qi[$i] = null),
          (na = Qi[--$i]),
          (Qi[$i] = null),
          (ta = Qi[--$i]),
          (Qi[$i] = null));
    }
    function sa(e, t) {
      ((Qi[$i++] = ta),
        (Qi[$i++] = na),
        (Qi[$i++] = ea),
        (ta = t.id),
        (na = t.overflow),
        (ea = e));
    }
    var ca = null,
      F = null,
      I = !1,
      la = null,
      ua = !1,
      da = Error(i(519));
    function fa(e) {
      throw (
        va(
          qi(
            Error(
              i(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                  ? `text`
                  : `HTML`,
                ``,
              ),
            ),
            e,
          ),
        ),
        da
      );
    }
    function pa(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[At] = e), (t[jt] = r), n)) {
        case `dialog`:
          (Q(`cancel`, t), Q(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Q(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < zf.length; n++) Q(zf[n], t);
          break;
        case `source`:
          Q(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (Q(`error`, t), Q(`load`, t));
          break;
        case `details`:
          Q(`toggle`, t);
          break;
        case `input`:
          (Q(`invalid`, t),
            dn(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0,
            ));
          break;
        case `select`:
          Q(`invalid`, t);
          break;
        case `textarea`:
          (Q(`invalid`, t), hn(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` &&
          typeof n != `number` &&
          typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        ep(t.textContent, n)
          ? (r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t)),
            r.onScroll != null && Q(`scroll`, t),
            r.onScrollEnd != null && Q(`scrollend`, t),
            r.onClick != null && (t.onclick = wn),
            (t = !0))
          : (t = !1),
        t || fa(e, !0));
    }
    function ma(e) {
      for (ca = e.return; ca;)
        switch (ca.tag) {
          case 5:
          case 31:
          case 13:
            ua = !1;
            return;
          case 27:
          case 3:
            ua = !0;
            return;
          default:
            ca = ca.return;
        }
    }
    function ha(e) {
      if (e !== ca) return !1;
      if (!I) return (ma(e), (I = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type),
            (n =
              n === `form` || n === `button` || pp(e.type, e.memoizedProps))),
          (n = !n)),
        n && F && fa(e),
        ma(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        F = dm(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        F = dm(e);
      } else
        t === 27
          ? ((t = F), Sp(e.type) ? ((e = um), (um = null), (F = e)) : (F = t))
          : (F = ca ? lm(e.stateNode.nextSibling) : null);
      return !0;
    }
    function ga() {
      ((F = ca = null), (I = !1));
    }
    function _a() {
      var e = la;
      return (
        e !== null &&
          (fd === null ? (fd = e) : fd.push.apply(fd, e), (la = null)),
        e
      );
    }
    function va(e) {
      la === null ? (la = [e]) : la.push(e);
    }
    var ya = De(null),
      ba = null,
      xa = null;
    function Sa(e, t, n) {
      (k(ya, t._currentValue), (t._currentValue = n));
    }
    function Ca(e) {
      ((e._currentValue = ya.current), Oe(ya));
    }
    function wa(e, t, n) {
      for (; e !== null;) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function Ta(e, t, n, r) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null;) {
        var o = a.dependencies;
        if (o !== null) {
          var s = a.child;
          o = o.firstContext;
          a: for (; o !== null;) {
            var c = o;
            o = a;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ((o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  wa(o.return, n, e),
                  r || (s = null));
                break a;
              }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341));
          ((s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            wa(s, n, e),
            (s = null));
        } else
          a.tag === 13 &&
          a.memoizedState !== null &&
          a.memoizedState.dehydrated === null
            ? ((a.lanes |= n),
              (s = a.alternate),
              s !== null && (s.lanes |= n),
              wa(a.return, n, e),
              (s = a.child),
              (s = s === null ? null : s.sibling))
            : (s = a.child);
        if (s !== null) s.return = a;
        else
          for (s = a; s !== null;) {
            if (s === e) {
              s = null;
              break;
            }
            if (((a = s.sibling), a !== null)) {
              ((a.return = s.return), (s = a));
              break;
            }
            s = s.return;
          }
        a = s;
      }
    }
    function Ea(e, t, n, r) {
      e = null;
      for (var a = t, o = !1; a !== null;) {
        if (!o) {
          if (a.flags & 524288) o = !0;
          else if (a.flags & 262144) break;
        }
        if (a.tag === 10) {
          var s = a.alternate;
          if (s === null) throw Error(i(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type;
            Kr(a.pendingProps.value, s.value) ||
              (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === Me.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [sh]) : e.push(sh));
        }
        a = a.return;
      }
      return (e !== null && Ta(t, e, n, r), (t.flags |= 262144), e !== null);
    }
    function Da(e) {
      for (e = e.firstContext; e !== null;) {
        if (!Kr(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function Oa(e) {
      ((ba = e),
        (xa = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null));
    }
    function ka(e) {
      return ja(ba, e);
    }
    function Aa(e, t) {
      return (ba === null && Oa(e), ja(e, t));
    }
    function ja(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), xa === null)) {
        if (e === null) throw Error(i(308));
        ((xa = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288));
      } else xa = xa.next = t;
      return n;
    }
    var Ma =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      Na = t.unstable_scheduleCallback,
      Pa = t.unstable_NormalPriority,
      Fa = {
        $$typeof: le,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function Ia() {
      return { controller: new Ma(), data: new Map(), refCount: 0 };
    }
    function La(e) {
      (e.refCount--,
        e.refCount === 0 &&
          Na(Pa, function () {
            e.controller.abort();
          }));
    }
    function Ra(e, t) {
      if (e.pendingLanes & 4194048) {
        var n = e.transitionTypes;
        for (
          n === null && (n = e.transitionTypes = []), e = 0;
          e < t.length;
          e++
        ) {
          var r = t[e];
          n.indexOf(r) === -1 && n.push(r);
        }
      }
    }
    var za = null;
    function Ba(e) {
      var t = e.transitionTypes;
      return ((e.transitionTypes = null), t);
    }
    var Va = null,
      Ha = 0,
      Ua = 0,
      Wa = null;
    function Ga(e, t) {
      if (Va === null) {
        var n = (Va = []);
        ((Ha = 0),
          (Ua = Pf()),
          (Wa = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (Ha++, t.then(Ka, Ka), t);
    }
    function Ka() {
      if (--Ha === 0 && ((za = null), Va !== null)) {
        Wa !== null && (Wa.status = `fulfilled`);
        var e = Va;
        ((Va = null), (Ua = 0), (Wa = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function qa(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            ((r.status = `fulfilled`), (r.value = t));
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
              (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var Ja = D.S;
    D.S = function (e, t) {
      if (
        ((hd = Je()),
        typeof t == `object` && t && typeof t.then == `function` && Ga(e, t),
        za !== null)
      )
        for (var n = bf; n !== null;) (Ra(n, za), (n = n.next));
      if (((n = e.types), n !== null)) {
        for (var r = bf; r !== null;) (Ra(r, n), (r = r.next));
        if (Ua !== 0) {
          ((r = za), r === null && (r = za = []));
          for (var i = 0; i < n.length; i++) {
            var a = n[i];
            r.indexOf(a) === -1 && r.push(a);
          }
        }
      }
      Ja !== null && Ja(e, t);
    };
    var Ya = De(null);
    function Xa() {
      var e = Ya.current;
      return e === null ? K.pooledCache : e;
    }
    function Za(e, t) {
      t === null ? k(Ya, Ya.current) : k(Ya, t.pool);
    }
    function Qa() {
      var e = Xa();
      return e === null ? null : { parent: Fa._currentValue, pool: e };
    }
    var $a = Error(i(460)),
      eo = Error(i(474)),
      to = Error(i(542)),
      no = { then: function () {} };
    function ro(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function io(e, t, n) {
      switch (
        ((n = e[n]),
        n === void 0 ? e.push(t) : n !== t && (t.then(wn, wn), (t = n)),
        t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw (
            (e = t.reason),
            co(e),
            e === void 0 && !(`reason` in t) ? Error(i(600)) : e
          );
        default:
          if (typeof t.status == `string`) t.then(wn, wn);
          else {
            if (((e = K), e !== null && 100 < e.shellSuspendCounter))
              throw Error(i(482));
            ((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `fulfilled`), (n.value = e));
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `rejected`), (n.reason = e));
                  }
                },
              ));
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), co(e), e);
          }
          throw ((oo = t), $a);
      }
    }
    function ao(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function`
          ? ((oo = e), $a)
          : e;
      }
    }
    var oo = null;
    function so() {
      if (oo === null) throw Error(i(459));
      var e = oo;
      return ((oo = null), e);
    }
    function co(e) {
      if (e === $a || e === to) throw Error(i(483));
    }
    var lo = null,
      uo = 0;
    function fo(e) {
      var t = uo;
      return ((uo += 1), lo === null && (lo = []), io(lo, e, t));
    }
    function po(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function mo(e, t) {
      throw t.$$typeof === ne
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            i(
              31,
              e === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : e,
            ),
          ));
    }
    function ho(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null;) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null;)
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e),
            (e = e.sibling));
        return t;
      }
      function a(e, t) {
        return ((e = zi(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 134217730), n)
                : ((r = r.index), r < n ? ((t.flags |= 2), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 134217730), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = Ui(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === ae
          ? ((e = d(e, t, n.props.children, r, n.key)), po(e, n), e)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` &&
                  i &&
                  i.$$typeof === pe &&
                  ao(i) === t.type))
            ? ((t = a(t, n.props)), po(t, n), (t.return = e), t)
            : ((t = Vi(n.type, n.key, n.props, null, e.mode, r)),
              po(t, n),
              (t.return = e),
              t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = Gi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = Hi(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if (
          (typeof t == `string` && t !== ``) ||
          typeof t == `number` ||
          typeof t == `bigint`
        )
          return ((t = Ui(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case re:
              return (
                (n = Vi(t.type, t.key, t.props, null, e.mode, n)),
                po(n, t),
                (n.return = e),
                n
              );
            case ie:
              return ((t = Gi(t, e.mode, n)), (t.return = e), t);
            case pe:
              return ((t = ao(t)), f(e, t, n));
          }
          if (Ce(t) || be(t))
            return ((t = Hi(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, fo(t), n);
          if (t.$$typeof === le) return f(e, Aa(e, t), n);
          mo(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if (
          (typeof n == `string` && n !== ``) ||
          typeof n == `number` ||
          typeof n == `bigint`
        )
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case re:
              return n.key === i ? l(e, t, n, r) : null;
            case ie:
              return n.key === i ? u(e, t, n, r) : null;
            case pe:
              return ((n = ao(n)), p(e, t, n, r));
          }
          if (Ce(n) || be(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, fo(n), r);
          if (n.$$typeof === le) return p(e, t, Aa(e, n), r);
          mo(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if (
          (typeof r == `string` && r !== ``) ||
          typeof r == `number` ||
          typeof r == `bigint`
        )
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case re:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                l(t, e, r, i)
              );
            case ie:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                u(t, e, r, i)
              );
            case pe:
              return ((r = ao(r)), m(e, t, n, r, i));
          }
          if (Ce(r) || be(r))
            return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return m(e, t, n, fo(r), i);
          if (r.$$typeof === le) return m(e, t, n, Aa(t, r), i);
          mo(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(i, d), I && ra(i, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d)));
          return (I && ra(i, h), l);
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                ((_ = g.alternate),
                _ !== null && d.delete(_.key === null ? h : _.key)),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          I && ra(i, h),
          l
        );
      }
      function g(a, s, c, l) {
        if (c == null) throw Error(i(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(a, h), I && ra(a, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)));
          return (I && ra(a, g), u);
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, a, g, v.value, l)),
            v !== null &&
              (e &&
                ((_ = v.alternate),
                _ !== null && h.delete(_.key === null ? g : _.key)),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          I && ra(a, g),
          u
        );
      }
      function _(e, r, o, c) {
        if (
          (typeof o == `object` &&
            o &&
            o.type === ae &&
            o.key === null &&
            o.props.ref === void 0 &&
            (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case re:
              a: {
                for (var l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (((l = o.type), l === ae)) {
                      if (r.tag === 7) {
                        (n(e, r.sibling),
                          (c = a(r, o.props.children)),
                          po(c, o),
                          (c.return = e),
                          (e = c));
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` &&
                        l &&
                        l.$$typeof === pe &&
                        ao(l) === r.type)
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.props)),
                        po(c, o),
                        (c.return = e),
                        (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                o.type === ae
                  ? ((c = Hi(o.props.children, e.mode, c, o.key)),
                    po(c, o),
                    (c.return = e),
                    (e = c))
                  : ((c = Vi(o.type, o.key, o.props, null, e.mode, c)),
                    po(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case ie:
              a: {
                for (l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.children || [])),
                        (c.return = e),
                        (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                ((c = Gi(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case pe:
              return ((o = ao(o)), _(e, r, o, c));
          }
          if (Ce(o)) return h(e, r, o, c);
          if (be(o)) {
            if (((l = be(o)), typeof l != `function`)) throw Error(i(150));
            return ((o = l.call(o)), g(e, r, o, c));
          }
          if (typeof o.then == `function`) return _(e, r, fo(o), c);
          if (o.$$typeof === le) return _(e, r, Aa(e, o), c);
          mo(e, o);
        }
        return (typeof o == `string` && o !== ``) ||
          typeof o == `number` ||
          typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = Ui(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          uo = 0;
          var i = _(e, t, n, r);
          return ((lo = null), i);
        } catch (t) {
          if (t === $a || t === to) throw t;
          var a = Li(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var go = ho(!0),
      _o = ho(!1),
      vo = !1;
    function yo(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function bo(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function xo(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function So(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), G & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = Pi(e)),
          Ni(e, null, n),
          t
        );
      }
      return (Ai(e, r, t, n), Pi(e));
    }
    function Co(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ct(e, n));
      }
    }
    function wo(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n));
      } else
        ((e = n.lastBaseUpdate),
          e === null ? (n.firstBaseUpdate = t) : (e.next = t),
          (n.lastBaseUpdate = t));
    }
    var To = !1;
    function Eo() {
      if (To) {
        var e = Wa;
        if (e !== null) throw e;
      }
    }
    function L(e, t, n, r) {
      To = !1;
      var i = e.updateQueue;
      vo = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane;
          if (p ? (J & f) === f : (r & f) === f) {
            (f !== 0 && f === Ua && (To = !0),
              u !== null &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null,
                  }));
            a: {
              var m = e,
                h = s;
              f = t;
              var g = n;
              switch (h.tag) {
                case 1:
                  if (((m = h.payload), typeof m == `function`)) {
                    d = m.call(g, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (
                    ((m = h.payload),
                    (f = typeof m == `function` ? m.call(g, d, f) : m),
                    f == null)
                  )
                    break a;
                  d = T({}, d, f);
                  break a;
                case 2:
                  vo = !0;
              }
            }
            ((f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                (p = i.callbacks),
                p === null ? (i.callbacks = [f]) : p.push(f)));
          } else
            ((p = {
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((p = s),
              (s = p.next),
              (p.next = null),
              (i.lastBaseUpdate = p),
              (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (od |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function Do(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function Oo(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++) Do(n[e], t);
    }
    var ko = De(null),
      Ao = De(0);
    function jo(e, t) {
      ((e = ad), k(Ao, e), k(ko, t), (ad = e | t.baseLanes));
    }
    function Mo() {
      (k(Ao, ad), k(ko, ko.current));
    }
    function No() {
      ((ad = Ao.current), Oe(ko), Oe(Ao));
    }
    var Po = De(null),
      Fo = null;
    function Io(e) {
      var t = e.alternate;
      (k(Vo, Vo.current & 1),
        k(Po, e),
        Fo === null &&
          (t === null || ko.current !== null || t.memoizedState !== null) &&
          (Fo = e));
    }
    function Lo(e) {
      (k(Vo, Vo.current), k(Po, e), Fo === null && (Fo = e));
    }
    function Ro(e) {
      e.tag === 22
        ? (k(Vo, Vo.current), k(Po, e), Fo === null && (Fo = e))
        : zo();
    }
    function zo() {
      (k(Vo, Vo.current), k(Po, Po.current));
    }
    function Bo(e) {
      (Oe(Po), Fo === e && (Fo = null), Oe(Vo));
    }
    var Vo = De(0);
    function Ho(e, t) {
      (k(Po, Po.current), k(Vo, t));
    }
    function Uo(e) {
      (Oe(Vo), Oe(Po), Fo === e && (Fo = null));
    }
    function Wo(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || om(n) || sm(n)))
            return t;
        } else if (
          t.tag === 19 &&
          t.memoizedProps.revealOrder !== `independent`
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var Go = 0,
      R = null,
      z = null,
      Ko = null,
      qo = !1,
      Jo = !1,
      Yo = !1,
      Xo = 0,
      Zo = 0,
      Qo = null,
      $o = 0;
    function B() {
      throw Error(i(321));
    }
    function es(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Kr(e[n], t[n])) return !1;
      return !0;
    }
    function ts(e, t, n, r, i, a) {
      return (
        (Go = a),
        (R = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (D.H = e === null || e.memoizedState === null ? vc : yc),
        (Yo = !1),
        (a = n(r, i)),
        (Yo = !1),
        Jo && (a = rs(t, n, r, i)),
        ns(e),
        a
      );
    }
    function ns(e) {
      D.H = _c;
      var t = z !== null && z.next !== null;
      if (((Go = 0), (Ko = z = R = null), (qo = !1), (Zo = 0), (Qo = null), t))
        throw Error(i(300));
      e === null ||
        V ||
        ((e = e.dependencies), e !== null && Da(e) && (V = !0));
    }
    function rs(e, t, n, r) {
      R = e;
      var a = 0;
      do {
        if ((Jo && (Qo = null), (Zo = 0), (Jo = !1), 25 <= a))
          throw Error(i(301));
        if (((a += 1), (Ko = z = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((D.H = bc), (o = t(n, r)));
      } while (Jo);
      return o;
    }
    function is() {
      var e = D.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? ds(t) : t),
        (e = e.useState()[0]),
        (z === null ? null : z.memoizedState) !== e && (R.flags |= 1024),
        t
      );
    }
    function as() {
      var e = Xo !== 0;
      return ((Xo = 0), e);
    }
    function os(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function ss(e) {
      if (qo) {
        for (e = e.memoizedState; e !== null;) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        qo = !1;
      }
      ((Go = 0), (Ko = z = R = null), (Jo = !1), (Zo = Xo = 0), (Qo = null));
    }
    function cs() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        Ko === null ? (R.memoizedState = Ko = e) : (Ko = Ko.next = e),
        Ko
      );
    }
    function ls() {
      if (z === null) {
        var e = R.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = z.next;
      var t = Ko === null ? R.memoizedState : Ko.next;
      if (t !== null) ((Ko = t), (z = e));
      else {
        if (e === null)
          throw R.alternate === null ? Error(i(467)) : Error(i(310));
        ((z = e),
          (e = {
            memoizedState: z.memoizedState,
            baseState: z.baseState,
            baseQueue: z.baseQueue,
            queue: z.queue,
            next: null,
          }),
          Ko === null ? (R.memoizedState = Ko = e) : (Ko = Ko.next = e));
      }
      return Ko;
    }
    function us() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function ds(e) {
      var t = Zo;
      return (
        (Zo += 1),
        Qo === null && (Qo = []),
        (e = io(Qo, e, t)),
        (t = R),
        (Ko === null ? t.memoizedState : Ko.next) === null &&
          ((t = t.alternate),
          (D.H = t === null || t.memoizedState === null ? vc : yc)),
        e
      );
    }
    function fs(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return ds(e);
        if (e.$$typeof === ve) return;
        if (e.$$typeof === le) return ka(e);
      }
      throw Error(i(438, String(e)));
    }
    function ps(e) {
      var t = null,
        n = R.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = R.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = us()), (R.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ge;
      return (t.index++, n);
    }
    function ms(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function hs(e) {
      return gs(ls(), z, e);
    }
    function gs(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(i(311));
      r.lastRenderedReducer = n;
      var a = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          ((a.next = o.next), (o.next = s));
        }
        ((t.baseQueue = a = o), (r.pending = null));
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o;
      else {
        t = a.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (Go & f) === f : (J & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === Ua && (d = !0));
            else if ((Go & p) === p) {
              ((u = u.next), p === Ua && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (R.lanes |= p),
                (od |= p));
            ((f = u.action),
              Yo && n(o, f),
              (o = u.hasEagerState ? u.eagerState : n(o, f)));
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (R.lanes |= f),
              (od |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !Kr(o, e.memoizedState) && ((V = !0), d && ((n = Wa), n !== null)))
        )
          throw n;
        ((e.memoizedState = o),
          (e.baseState = s),
          (e.baseQueue = l),
          (r.lastRenderedState = o));
      }
      return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function _s(e) {
      var t = ls(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== a);
        (Kr(o, t.memoizedState) || (V = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function vs(e, t, n) {
      var r = R,
        a = ls(),
        o = I;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !Kr((z || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (V = !0)),
        (a = a.queue),
        Us(xs.bind(null, r, a, e), [e]),
        (e =
          a.getSnapshot !== t ||
          s ||
          (Ko !== null && !!(Ko.memoizedState.tag & 1))),
        Rs(e ? 9 : 8, { destroy: void 0 }, bs.bind(null, r, a, n, t), null),
        e)
      ) {
        if (((r.flags |= 2048), K === null)) throw Error(i(349));
        o || Go & 127 || ys(r, t, n);
      }
      return n;
    }
    function ys(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = R.updateQueue),
        t === null
          ? ((t = us()), (R.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function bs(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Ss(t) && Cs(e));
    }
    function xs(e, t, n) {
      return n(function () {
        Ss(t) && Cs(e);
      });
    }
    function Ss(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Kr(e, n);
      } catch {
        return !0;
      }
    }
    function Cs(e) {
      var t = Mi(e, 2);
      t !== null && Pd(t, e, 2);
    }
    function ws(e) {
      var t = cs();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), Yo)) {
          at(!0);
          try {
            n();
          } finally {
            at(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ms,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Ts(e, t, n, r) {
      return ((e.baseState = n), gs(e, z, typeof r == `function` ? r : ms));
    }
    function Es(e, t, n, r, a) {
      if (mc(e)) throw Error(i(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        (D.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), Ds(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function Ds(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = D.T,
          o = {};
        ((o.types = a === null ? null : a.types), (D.T = o));
        try {
          var s = n(i, r),
            c = D.S;
          (c !== null && c(o, s), Os(e, t, s));
        } catch (n) {
          As(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (D.T = a));
        }
      } else
        try {
          ((a = n(i, r)), Os(e, t, a));
        } catch (n) {
          As(e, t, n);
        }
    }
    function Os(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              ks(e, t, n);
            },
            function (n) {
              return As(e, t, n);
            },
          )
        : ks(e, t, n);
    }
    function ks(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        js(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next),
          n === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), Ds(e, n))));
    }
    function As(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), js(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function js(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Ms(e, t) {
      return t;
    }
    function Ns(e, t) {
      if (I) {
        var n = K.formState;
        if (n !== null) {
          a: {
            var r = R;
            if (I) {
              if (F) {
                b: {
                  for (var i = F, a = ua; i.nodeType !== 8;)
                    if (!a || ((i = lm(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((F = lm(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              fa(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = cs()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ms,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = dc.bind(null, R, r)),
        (r.dispatch = n),
        (r = ws(!1)),
        (a = pc.bind(null, R, !1, r.queue)),
        (r = cs()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Es.bind(null, R, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function Ps(e) {
      return Fs(ls(), z, e);
    }
    function Fs(e, t, n) {
      if (
        ((t = gs(e, t, Ms)[0]),
        (e = hs(ms)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = ds(t);
        } catch (e) {
          throw e === $a ? to : e;
        }
      else r = t;
      t = ls();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((R.flags |= 2048),
          Rs(9, { destroy: void 0 }, Is.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function Is(e, t) {
      e.action = t;
    }
    function Ls(e) {
      var t = ls(),
        n = z;
      if (n !== null) return Fs(t, n, e);
      (ls(), (t = t.memoizedState), (n = ls()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function Rs(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = R.updateQueue),
        t === null && ((t = us()), (R.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function zs() {
      return ls().memoizedState;
    }
    function Bs(e, t, n, r) {
      var i = cs();
      ((R.flags |= e),
        (i.memoizedState = Rs(
          1 | t,
          { destroy: void 0 },
          n,
          r === void 0 ? null : r,
        )));
    }
    function Vs(e, t, n, r) {
      var i = ls();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      z !== null && r !== null && es(r, z.memoizedState.deps)
        ? (i.memoizedState = Rs(t, a, n, r))
        : ((R.flags |= e), (i.memoizedState = Rs(1 | t, a, n, r)));
    }
    function Hs(e, t) {
      Bs(8390656, 8, e, t);
    }
    function Us(e, t) {
      Vs(2048, 8, e, t);
    }
    function Ws(e) {
      R.flags |= 4;
      var t = R.updateQueue;
      if (t === null) ((t = us()), (R.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function Gs(e) {
      var t = ls().memoizedState;
      return (
        Ws({ ref: t, nextImpl: e }),
        function () {
          if (G & 2) throw Error(i(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function Ks(e, t) {
      return Vs(4, 2, e, t);
    }
    function qs(e, t) {
      return Vs(4, 4, e, t);
    }
    function Js(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function Ys(e, t, n) {
      ((n = n == null ? null : n.concat([e])),
        Vs(4, 4, Js.bind(null, t, e), n));
    }
    function Xs() {}
    function Zs(e, t) {
      var n = ls();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && es(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function Qs(e, t) {
      var n = ls();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && es(t, r[1])) return r[0];
      if (((r = e()), Yo)) {
        at(!0);
        try {
          e();
        } finally {
          at(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function $s(e, t, n) {
      return n === void 0 || (Go & 1073741824 && !(J & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = Md()), (R.lanes |= e), (od |= e), n);
    }
    function ec(e, t, n, r) {
      return Kr(n, t)
        ? n
        : ko.current === null
          ? !(Go & 106) || (Go & 1073741824 && !(J & 261930))
            ? ((V = !0), (e.memoizedState = n))
            : ((e = Md()), (R.lanes |= e), (od |= e), t)
          : ((e = $s(e, n, r)), Kr(e, t) || (V = !0), e);
    }
    function tc(e, t, n, r, i) {
      var a = O.p;
      O.p = a !== 0 && 8 > a ? a : 8;
      var o = D.T,
        s = {};
      ((s.types = o === null ? null : o.types), (D.T = s), pc(e, !1, t, n));
      try {
        var c = i(),
          l = D.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? fc(e, t, qa(c, r), jd(e))
            : fc(e, t, r, jd(e)));
      } catch (n) {
        fc(e, t, { then: function () {}, status: `rejected`, reason: n }, jd());
      } finally {
        ((O.p = a),
          o !== null && s.types !== null && (o.types = s.types),
          (D.T = o));
      }
    }
    function nc() {}
    function rc(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = ic(e).queue;
      tc(
        e,
        a,
        t,
        we,
        n === null
          ? nc
          : function () {
              return (ac(e), n(r));
            },
      );
    }
    function ic(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: we,
        baseState: we,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ms,
          lastRenderedState: we,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ms,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function ac(e) {
      var t = ic(e);
      (t.next === null && (t = e.alternate.memoizedState),
        fc(e, t.next.queue, {}, jd()));
    }
    function oc() {
      return ka(sh);
    }
    function sc() {
      return ls().memoizedState;
    }
    function cc() {
      return ls().memoizedState;
    }
    function lc(e) {
      for (var t = e.return; t !== null;) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = jd();
            e = xo(n);
            var r = So(t, e, n);
            (r !== null && (Pd(r, t, n), Co(r, t, n)),
              (t = { cache: Ia() }),
              (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function uc(e, t, n) {
      var r = jd();
      ((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        mc(e)
          ? hc(t, n)
          : ((n = ji(e, t, n, r)), n !== null && (Pd(n, e, r), gc(n, t, r))));
    }
    function dc(e, t, n) {
      fc(e, t, n, jd());
    }
    function fc(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (mc(e)) hc(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Kr(s, o)))
              return (Ai(e, t, i, 0), K === null && ki(), !1);
          } catch {}
        if (((n = ji(e, t, i, r)), n !== null))
          return (Pd(n, e, r), gc(n, t, r), !0);
      }
      return !1;
    }
    function pc(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: Pf(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        mc(e))
      ) {
        if (t) throw Error(i(479));
      } else ((t = ji(e, n, r, 2)), t !== null && Pd(t, e, 2));
    }
    function mc(e) {
      var t = e.alternate;
      return e === R || (t !== null && t === R);
    }
    function hc(e, t) {
      Jo = qo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t));
    }
    function gc(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ct(e, n));
      }
    }
    var _c = {
        readContext: ka,
        use: fs,
        useCallback: B,
        useContext: B,
        useEffect: B,
        useImperativeHandle: B,
        useLayoutEffect: B,
        useInsertionEffect: B,
        useMemo: B,
        useReducer: B,
        useRef: B,
        useState: B,
        useDebugValue: B,
        useDeferredValue: B,
        useTransition: B,
        useSyncExternalStore: B,
        useId: B,
        useHostTransitionStatus: B,
        useFormState: B,
        useActionState: B,
        useOptimistic: B,
        useMemoCache: B,
        useCacheRefresh: B,
        useEffectEvent: B,
      },
      vc = {
        readContext: ka,
        use: fs,
        useCallback: function (e, t) {
          return ((cs().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: ka,
        useEffect: Hs,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])),
            Bs(4194308, 4, Js.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return Bs(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          Bs(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = cs();
          t = t === void 0 ? null : t;
          var r = e();
          if (Yo) {
            at(!0);
            try {
              e();
            } finally {
              at(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = cs();
          if (n !== void 0) {
            var i = n(t);
            if (Yo) {
              at(!0);
              try {
                n(t);
              } finally {
                at(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = uc.bind(null, R, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = cs();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = ws(e);
          var t = e.queue,
            n = dc.bind(null, R, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: Xs,
        useDeferredValue: function (e, t) {
          return $s(cs(), e, t);
        },
        useTransition: function () {
          var e = ws(!1);
          return (
            (e = tc.bind(null, R, e.queue, !0, !1)),
            (cs().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var r = R,
            a = cs();
          if (I) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), K === null)) throw Error(i(349));
            J & 127 || ys(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            Hs(xs.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            Rs(9, { destroy: void 0 }, bs.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = cs(),
            t = K.identifierPrefix;
          if (I) {
            var n = na,
              r = ta;
            ((n = (r & ~(1 << (32 - ot(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = Xo++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = $o++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: oc,
        useFormState: Ns,
        useActionState: Ns,
        useOptimistic: function (e) {
          var t = cs();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = pc.bind(null, R, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: ps,
        useCacheRefresh: function () {
          return (cs().memoizedState = lc.bind(null, R));
        },
        useEffectEvent: function (e) {
          var t = cs(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (G & 2) throw Error(i(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      yc = {
        readContext: ka,
        use: fs,
        useCallback: Zs,
        useContext: ka,
        useEffect: Us,
        useImperativeHandle: Ys,
        useInsertionEffect: Ks,
        useLayoutEffect: qs,
        useMemo: Qs,
        useReducer: hs,
        useRef: zs,
        useState: function () {
          return hs(ms);
        },
        useDebugValue: Xs,
        useDeferredValue: function (e, t) {
          return ec(ls(), z.memoizedState, e, t);
        },
        useTransition: function () {
          var e = hs(ms)[0],
            t = ls().memoizedState;
          return [typeof e == `boolean` ? e : ds(e), t];
        },
        useSyncExternalStore: vs,
        useId: sc,
        useHostTransitionStatus: oc,
        useFormState: Ps,
        useActionState: Ps,
        useOptimistic: function (e, t) {
          return Ts(ls(), z, e, t);
        },
        useMemoCache: ps,
        useCacheRefresh: cc,
        useEffectEvent: Gs,
      },
      bc = {
        readContext: ka,
        use: fs,
        useCallback: Zs,
        useContext: ka,
        useEffect: Us,
        useImperativeHandle: Ys,
        useInsertionEffect: Ks,
        useLayoutEffect: qs,
        useMemo: Qs,
        useReducer: _s,
        useRef: zs,
        useState: function () {
          return _s(ms);
        },
        useDebugValue: Xs,
        useDeferredValue: function (e, t) {
          var n = ls();
          return z === null ? $s(n, e, t) : ec(n, z.memoizedState, e, t);
        },
        useTransition: function () {
          var e = _s(ms)[0],
            t = ls().memoizedState;
          return [typeof e == `boolean` ? e : ds(e), t];
        },
        useSyncExternalStore: vs,
        useId: sc,
        useHostTransitionStatus: oc,
        useFormState: Ls,
        useActionState: Ls,
        useOptimistic: function (e, t) {
          var n = ls();
          return z === null
            ? ((n.baseState = e), [e, n.queue.dispatch])
            : Ts(n, z, e, t);
        },
        useMemoCache: ps,
        useCacheRefresh: cc,
        useEffectEvent: Gs,
      };
    function xc(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : T({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Sc = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = jd(),
          i = xo(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = So(e, i, r)),
          t !== null && (Pd(t, e, r), Co(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = jd(),
          i = xo(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = So(e, i, r)),
          t !== null && (Pd(t, e, r), Co(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = jd(),
          r = xo(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = So(e, r, n)),
          t !== null && (Pd(t, e, n), Co(t, e, n)));
      },
    };
    function Cc(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !qr(n, r) || !qr(i, a)
            : !0
      );
    }
    function wc(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Sc.enqueueReplaceState(t, t.state, null));
    }
    function Tc(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = T({}, n)), e))
          n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function Ec(e) {
      Ti(e);
    }
    function Dc(e) {
      console.error(e);
    }
    function Oc(e) {
      Ti(e);
    }
    function kc(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Ac(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function jc(e, t, n) {
      return (
        (n = xo(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          kc(e, t);
        }),
        n
      );
    }
    function Mc(e) {
      return ((e = xo(e)), (e.tag = 3), e);
    }
    function Nc(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            Ac(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          (Ac(t, n, r),
            typeof i != `function` &&
              (vd === null ? (vd = new Set([this])) : vd.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: e === null ? `` : e,
          });
        });
    }
    function Pc(e, t, n, r, a) {
      if (
        ((n.flags |= 32768),
        typeof r == `object` && r && typeof r.then == `function`)
      ) {
        if (
          ((t = n.alternate),
          t !== null && Ea(t, n, a, !0),
          (n = Po.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 31:
            case 13:
            case 19:
              return (
                Fo === null ? Kd() : n.alternate === null && X === 0 && (X = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === no
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    mf(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === no
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    mf(e, r, a)),
                !1
              );
          }
          throw Error(i(435, n.tag));
        }
        return (mf(e, r, a), Kd(), !1);
      }
      if (I)
        return (
          (t = Po.current),
          t === null
            ? (r !== da && ((t = Error(i(423), { cause: r })), va(qi(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = qi(r, n)),
              (a = jc(e.stateNode, r, a)),
              wo(e, a),
              X !== 4 && (X = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== da && ((e = Error(i(422), { cause: r })), va(qi(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (
        ((o = qi(o, n)),
        dd === null ? (dd = [o]) : dd.push(o),
        X !== 4 && (X = 2),
        t === null)
      )
        return !0;
      ((r = qi(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = jc(n.stateNode, r, e)),
              wo(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (vd === null || !vd.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = Mc(a)),
                Nc(a, e, n, r),
                wo(n, a),
                !1
              );
            break;
          case 22:
            if (n.memoizedState !== null) return ((n.flags |= 65536), !1);
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var Fc = Error(i(461)),
      V = !1;
    function Ic(e, t, n, r) {
      t.child = e === null ? _o(t, null, n, r) : go(t, e.child, n, r);
    }
    function Lc(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        Oa(t),
        (r = ts(e, t, n, o, a, i)),
        (s = as()),
        e !== null && !V
          ? (os(e, t, i), dl(e, t, i))
          : (I && s && aa(t), (t.flags |= 1), Ic(e, t, r, i), t.child)
      );
    }
    function Rc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !Ri(a) &&
          a.defaultProps === void 0 &&
          n.compare === null
          ? ((t.tag = 15), (t.type = a), zc(e, t, a, r, i))
          : ((e = Vi(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !fl(e, i))) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? qr : n),
          n(o, r) && e.ref === t.ref)
        )
          return dl(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = zi(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function zc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (qr(a, r) && e.ref === t.ref) {
          if (((V = !1), (t.pendingProps = r = a), fl(e, i)))
            e.flags & 131072 && (V = !0);
          else return ((t.lanes = e.lanes), dl(e, t, i));
        }
      }
      return qc(e, t, n, r, i);
    }
    function Bc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null;)
              ((i = i | r.lanes | r.childLanes), (r = r.sibling));
            r = i & ~a;
          } else ((r = 0), (t.child = null));
          return Hc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && Za(t, a === null ? null : a.cachePool),
            a === null ? Mo() : jo(t, a),
            Ro(t));
        else
          return (
            (r = t.lanes = 536870912),
            Hc(e, t, a === null ? n : a.baseLanes | n, n, r)
          );
      } else
        a === null
          ? (e !== null && Za(t, null), Mo(), zo())
          : (Za(t, a.cachePool), jo(t, a), zo(), (t.memoizedState = null));
      return (Ic(e, t, i, n), t.child);
    }
    function Vc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function Hc(e, t, n, r, i) {
      var a = Xa();
      return (
        (a = a === null ? null : { parent: Fa._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && Za(t, null),
        Mo(),
        Ro(t),
        e !== null && Ea(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function Uc(e, t) {
      return (
        (t = nl({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function Wc(e, t, n) {
      return (
        go(t, e.child, null, n),
        (e = Uc(t, t.pendingProps)),
        (e.flags |= 2),
        Bo(t),
        (t.memoizedState = null),
        e
      );
    }
    function Gc(e, t, n) {
      var r = t.pendingProps,
        a = !!(t.flags & 128);
      if (((t.flags &= -129), e === null)) {
        if (I) {
          if (r.mode === `hidden`)
            return (
              (e = Uc(t, r)),
              (t.lanes = 536870912),
              (e.memoizedState = { baseLanes: 0, cachePool: null }),
              Vc(null, e)
            );
          if (
            (Lo(t),
            (e = F)
              ? ((e = am(e, ua)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: ea === null ? null : { id: ta, overflow: na },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = Wi(e)),
                  (n.return = t),
                  (t.child = n),
                  (ca = t),
                  (F = null)))
              : (e = null),
            e === null)
          )
            throw fa(t);
          return ((t.lanes = 536870912), null);
        }
        return Uc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((Lo(t), a)) {
          if (t.flags & 256) ((t.flags &= -257), (t = Wc(e, t, n)));
          else if (t.memoizedState !== null)
            ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(i(558));
        } else if (
          (V || Ea(e, t, n, !1), (a = (n & e.childLanes) !== 0), V || a)
        ) {
          if (ko.current === null) {
            if (
              ((r = K),
              r !== null && ((s = wt(r, n)), s !== 0 && s !== o.retryLane))
            )
              throw ((o.retryLane = s), Mi(e, s), Pd(r, e, s), Fc);
            Kd();
          }
          t = Wc(e, t, n);
        } else
          ((e = o.treeContext),
            (F = lm(s.nextSibling)),
            (ca = t),
            (I = !0),
            (la = null),
            (ua = !1),
            e !== null && sa(t, e),
            (t = Uc(t, r)),
            (t.flags |= 134221824));
        return t;
      }
      return (
        (e = zi(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function Kc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function qc(e, t, n, r, i) {
      return (
        Oa(t),
        (n = ts(e, t, n, r, void 0, i)),
        (r = as()),
        e !== null && !V
          ? (os(e, t, i), dl(e, t, i))
          : (I && r && aa(t), (t.flags |= 1), Ic(e, t, n, i), t.child)
      );
    }
    function Jc(e, t, n, r, i, a) {
      return (
        Oa(t),
        (t.updateQueue = null),
        (n = rs(t, r, n, i)),
        ns(e),
        (r = as()),
        e !== null && !V
          ? (os(e, t, a), dl(e, t, a))
          : (I && r && aa(t), (t.flags |= 1), Ic(e, t, n, a), t.child)
      );
    }
    function Yc(e, t, n, r, i) {
      if ((Oa(t), t.stateNode === null)) {
        var a = Fi,
          o = n.contextType;
        (typeof o == `object` && o && (a = ka(o)),
          (a = new n(r, a)),
          (t.memoizedState =
            a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Sc),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          yo(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? ka(o) : Fi),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` &&
            (xc(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && Sc.enqueueReplaceState(a, a.state, null),
            L(t, r, a, i),
            Eo(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Tc(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = Fi), typeof u == `object` && u && (o = ka(u)));
        var d = n.getDerivedStateFromProps;
        ((u =
          typeof d == `function` ||
          typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && wc(t, a, r, o)),
          (vo = !1));
        var f = t.memoizedState;
        ((a.state = f),
          L(t, r, a, i),
          Eo(),
          (l = t.memoizedState),
          s || f !== l || vo
            ? (typeof d == `function` &&
                (xc(t, n, d, r), (l = t.memoizedState)),
              (c = vo || Cc(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` &&
                      a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1)));
      } else {
        ((a = t.stateNode),
          bo(e, t),
          (o = t.memoizedProps),
          (u = Tc(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = Fi),
          typeof l == `object` && l && (c = ka(l)),
          (s = n.getDerivedStateFromProps),
          (l =
            typeof s == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && wc(t, a, r, c)),
          (vo = !1),
          (f = t.memoizedState),
          (a.state = f),
          L(t, r, a, i),
          Eo());
        var p = t.memoizedState;
        o !== d ||
        f !== p ||
        vo ||
        (e !== null && e.dependencies !== null && Da(e.dependencies))
          ? (typeof s == `function` && (xc(t, n, s, r), (p = t.memoizedState)),
            (u =
              vo ||
              Cc(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && Da(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` &&
                    a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        Kc(e, t),
        (r = !!(t.flags & 128)),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && typeof n.getDerivedStateFromError != `function`
                ? null
                : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = go(t, e.child, null, i)),
                (t.child = go(t, null, n, i)))
              : Ic(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = dl(e, t, i)),
        e
      );
    }
    function Xc(e, t, n, r) {
      return (ga(), (t.flags |= 256), Ic(e, t, n, r), t.child);
    }
    var Zc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function Qc(e) {
      return { baseLanes: e, cachePool: Qa() };
    }
    function $c(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= ld), e);
    }
    function el(e, t, n) {
      var r = t.pendingProps,
        i = !1,
        a = !!(t.flags & 128),
        o;
      if (
        ((o = a) ||
          (o =
            e !== null && e.memoizedState === null ? !1 : !!(Vo.current & 2)),
        o && ((i = !0), (t.flags &= -129)),
        (o = !!(t.flags & 32)),
        (t.flags &= -33),
        e === null)
      ) {
        if (I) {
          if (
            (i ? Io(t) : zo(),
            (e = F)
              ? ((e = am(e, ua)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: ea === null ? null : { id: ta, overflow: na },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = Wi(e)),
                  (n.return = t),
                  (t.child = n),
                  (ca = t),
                  (F = null)))
              : (e = null),
            e === null)
          )
            throw fa(t);
          return ((t.lanes = sm(e) ? 32 : 536870912), null);
        }
        return (
          (a = r.children),
          (r = r.fallback),
          i
            ? (zo(),
              (i = t.mode),
              (a = nl({ mode: `hidden`, children: a }, i)),
              (r = Hi(r, i, n, null)),
              (a.return = t),
              (r.return = t),
              (a.sibling = r),
              (t.child = a),
              (r = t.child),
              (r.memoizedState = Qc(n)),
              (r.childLanes = $c(e, o, n)),
              (t.memoizedState = Zc),
              Vc(null, r))
            : (Io(t), tl(t, a))
        );
      }
      var s = e.memoizedState;
      if (s !== null) {
        var c = s.dehydrated;
        if (c !== null) return il(e, t, a, o, r, c, s, n);
      }
      return i
        ? (zo(),
          (i = r.fallback),
          (a = t.mode),
          (s = e.child),
          (c = s.sibling),
          (r = zi(s, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = s.subtreeFlags & 1206910976),
          c === null
            ? ((i = Hi(i, a, n, null)), (i.flags |= 2))
            : (i = zi(c, i)),
          (i.return = t),
          (r.return = t),
          (r.sibling = i),
          (t.child = r),
          Vc(null, r),
          (r = t.child),
          (i = e.child.memoizedState),
          i === null
            ? (i = Qc(n))
            : ((a = i.cachePool),
              a === null
                ? (a = Qa())
                : ((s = Fa._currentValue),
                  (a = a.parent === s ? a : { parent: s, pool: s })),
              (i = { baseLanes: i.baseLanes | n, cachePool: a })),
          (r.memoizedState = i),
          (r.childLanes = $c(e, o, n)),
          (t.memoizedState = Zc),
          Vc(e.child, r))
        : (Io(t),
          (n = e.child),
          (e = n.sibling),
          (n = zi(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((o = t.deletions),
            o === null ? ((t.deletions = [e]), (t.flags |= 16)) : o.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function tl(e, t) {
      return (
        (t = nl({ mode: `visible`, children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      );
    }
    function nl(e, t) {
      return ((e = Li(22, e, null, t)), (e.lanes = 0), e);
    }
    function rl(e, t, n) {
      return (
        go(t, e.child, null, n),
        (e = tl(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function il(e, t, n, r, a, o, s, c) {
      if (n)
        return t.flags & 256
          ? (Io(t), (t.flags &= -257), rl(e, t, c))
          : t.memoizedState === null
            ? (zo(),
              (o = a.fallback),
              (s = t.mode),
              (a = nl({ mode: `visible`, children: a.children }, s)),
              (o = Hi(o, s, c, null)),
              (o.flags |= 2),
              (a.return = t),
              (o.return = t),
              (a.sibling = o),
              (t.child = a),
              go(t, e.child, null, c),
              (a = t.child),
              (a.memoizedState = Qc(c)),
              (a.childLanes = $c(e, r, c)),
              (t.memoizedState = Zc),
              Vc(null, a))
            : (zo(), (t.child = e.child), (t.flags |= 128), null);
      if ((Io(t), sm(o))) {
        if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
        return (
          (r = l),
          r !== `` &&
            ((a = Error(i(419))),
            (a.stack = ``),
            (a.digest = r),
            va({ value: a, source: null, stack: null })),
          rl(e, t, c)
        );
      }
      if ((V || Ea(e, t, c, !1), (r = (c & e.childLanes) !== 0), V || r)) {
        if (ko.current !== null) return rl(e, t, c);
        if (
          ((r = K),
          r !== null && ((a = wt(r, c)), a !== 0 && a !== s.retryLane))
        )
          throw ((s.retryLane = a), Mi(e, a), Pd(r, e, a), Fc);
        return (om(o) || Kd(), rl(e, t, c));
      }
      return om(o)
        ? ((t.flags |= 192), (t.child = e.child), null)
        : ((e = s.treeContext),
          (F = lm(o.nextSibling)),
          (ca = t),
          (I = !0),
          (la = null),
          (ua = !1),
          e !== null && sa(t, e),
          (t = tl(t, a.children)),
          (t.flags |= 134221824),
          t);
    }
    function al(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), wa(e.return, t, n));
    }
    function ol(e) {
      for (var t = null; e !== null;) {
        var n = e.alternate;
        (n !== null && Wo(n) === null && (t = e), (e = e.sibling));
      }
      return t;
    }
    function sl(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function cl(e) {
      var t = e.child;
      for (e.child = null; t !== null;) {
        var n = t.sibling;
        ((t.sibling = e.child), (e.child = t), (t = n));
      }
    }
    function ll(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = Vo.current;
      if (t.flags & 128) return (Ho(t, o), null);
      var s = !!(o & 2);
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        Ho(t, o),
        i === `backwards` && e !== null
          ? (cl(e), Ic(e, t, r, n), cl(e))
          : Ic(e, t, r, n),
        (r = I ? Zi : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && al(e, n, t);
          else if (e.tag === 19) al(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (i) {
        case `backwards`:
          ((n = ol(t.child)),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null), cl(t)),
            sl(t, !0, i, null, a, r));
          break;
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null;) {
            if (((e = i.alternate), e !== null && Wo(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          sl(t, !0, n, null, a, r);
          break;
        case `together`:
          sl(t, !1, null, null, void 0, r);
          break;
        case `independent`:
          t.memoizedState = null;
          break;
        default:
          ((n = ol(t.child)),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            sl(t, !1, i, n, a, r));
      }
      return t.child;
    }
    function ul(e, t, n) {
      var r = t.pendingProps;
      return (Sa(t, t.type, r.value), Ic(e, t, r.children, n), t.child);
    }
    function dl(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (od |= t.lanes),
        (n & t.childLanes) === 0)
      ) {
        if (e !== null) {
          if ((Ea(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      }
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (
          e = t.child, n = zi(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = zi(e, e.pendingProps)),
            (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function fl(e, t) {
      return (
        (e.lanes & t) !== 0 || ((e = e.dependencies), !!(e !== null && Da(e)))
      );
    }
    function pl(e, t, n) {
      switch (t.tag) {
        case 3:
          (Ne(t, t.stateNode.containerInfo),
            Sa(t, Fa, e.memoizedState.cache),
            ga());
          break;
        case 27:
        case 5:
          Fe(t);
          break;
        case 4:
          Ne(t, t.stateNode.containerInfo);
          break;
        case 10:
          Sa(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), Lo(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null) {
            if (r.dehydrated !== null) return (Io(t), (t.flags |= 128), null);
            r = Ea(e, t, n, !1);
            var i = t.child.childLanes;
            return r || (n & i) !== 0
              ? el(e, t, n)
              : (Io(t), (e = dl(e, t, n)), e === null ? null : e.sibling);
          }
          Io(t);
          break;
        case 19:
          if (t.flags & 128) return ll(e, t, n);
          if (
            ((i = !!(e.flags & 128)),
            (r = (n & t.childLanes) !== 0),
            (r ||= (Ea(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return ll(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            Ho(t, Vo.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), Bc(e, t, n, t.pendingProps));
        case 24:
          Sa(t, Fa, e.memoizedState.cache);
      }
      return dl(e, t, n);
    }
    function ml(e, t, n) {
      if (e !== null) {
        if (e.memoizedProps !== t.pendingProps) V = !0;
        else {
          if (!fl(e, n) && !(t.flags & 128)) return ((V = !1), pl(e, t, n));
          V = !!(e.flags & 131072);
        }
      } else ((V = !1), I && t.flags & 1048576 && ia(t, Zi, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = ao(t.elementType)), (t.type = e), typeof e == `function`))
              Ri(e)
                ? ((r = Tc(e, r)), (t.tag = 1), (t = Yc(null, t, e, r, n)))
                : ((t.tag = 0), (t = qc(null, t, e, r, n)));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === ue) {
                  ((t.tag = 11), (t = Lc(null, t, e, r, n)));
                  break a;
                }
                if (a === fe) {
                  ((t.tag = 14), (t = Rc(null, t, e, r, n)));
                  break a;
                }
                if (a === le) {
                  ((t.tag = 10), (t.type = e), (t = ul(null, t, n)));
                  break a;
                }
              }
              throw ((t = Se(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return qc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (a = Tc(r, t.pendingProps)), Yc(e, t, r, a, n));
        case 3:
          a: {
            if ((Ne(t, t.stateNode.containerInfo), e === null))
              throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((a = o.element), bo(e, t), L(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              Sa(t, Fa, r),
              r !== o.cache && Ta(t, [Fa], n, !0),
              Eo(),
              (r = s.element),
              o.isDehydrated)
            ) {
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = Xc(e, t, r, n);
                break a;
              }
              if (r !== a) {
                ((a = qi(Error(i(424)), t)), va(a), (t = Xc(e, t, r, n)));
                break a;
              }
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
              }
              for (
                F = lm(e.firstChild),
                  ca = t,
                  I = !0,
                  la = null,
                  ua = !0,
                  n = _o(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 134221824), (n = n.sibling));
            } else {
              if ((ga(), r === a)) {
                t = dl(e, t, n);
                break a;
              }
              Ic(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            Kc(e, t),
            e === null
              ? (n = Nm(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : I || (t.stateNode = fp(t.type, t.pendingProps, je.current, t))
              : (t.memoizedState = Nm(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState,
                )),
            null
          );
        case 27:
          return (
            Fe(t),
            e === null &&
              I &&
              ((r = t.stateNode = hm(t.type, t.pendingProps, je.current)),
              (ca = t),
              (ua = !0),
              (a = F),
              Sp(t.type) ? ((um = a), (F = lm(r.firstChild))) : (F = a)),
            Ic(e, t, t.pendingProps.children, n),
            Kc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              I &&
              ((a = r = F) &&
                ((r = rm(r, t.type, t.pendingProps, ua)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r),
                    (ca = t),
                    (F = lm(r.firstChild)),
                    (ua = !1),
                    (a = !0))),
              a || fa(t)),
            Fe(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            pp(a, o) ? (r = null) : s !== null && pp(a, s) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((a = ts(e, t, is, null, null, n)), (sh._currentValue = a)),
            Kc(e, t),
            Ic(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              I &&
              ((e = n = F) &&
                ((n = im(n, t.pendingProps, ua)),
                n === null
                  ? (e = !1)
                  : ((t.stateNode = n), (ca = t), (F = null), (e = !0))),
              e || fa(t)),
            null
          );
        case 13:
          return el(e, t, n);
        case 4:
          return (
            Ne(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = go(t, null, r, n)) : Ic(e, t, r, n),
            t.child
          );
        case 11:
          return Lc(e, t, t.type, t.pendingProps, n);
        case 7:
          return ((r = t.pendingProps), Kc(e, t), Ic(e, t, r, n), t.child);
        case 8:
          return (Ic(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (Ic(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return ul(e, t, n);
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            Oa(t),
            (a = ka(a)),
            (r = r(a)),
            (t.flags |= 1),
            Ic(e, t, r, n),
            t.child
          );
        case 14:
          return Rc(e, t, t.type, t.pendingProps, n);
        case 15:
          return zc(e, t, t.type, t.pendingProps, n);
        case 19:
          return ll(e, t, n);
        case 31:
          return Gc(e, t, n);
        case 22:
          return Bc(e, t, n, t.pendingProps);
        case 24:
          return (
            Oa(t),
            (r = ka(Fa)),
            e === null
              ? ((a = Xa()),
                a === null &&
                  ((a = K),
                  (o = Ia()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                yo(t),
                Sa(t, Fa, a))
              : ((e.lanes & n) !== 0 && (bo(e, t), L(t, null, null, n), Eo()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache),
                    Sa(t, Fa, r),
                    r !== a.cache && Ta(t, [Fa], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = a),
                    Sa(t, Fa, r))),
            Ic(e, t, t.pendingProps.children, n),
            t.child
          );
        case 30:
          return (
            t.stateNode === null &&
              (t.stateNode = {
                autoName: null,
                paired: null,
                clones: null,
                ref: null,
              }),
            (r = t.pendingProps),
            r.name != null && r.name !== `auto`
              ? (t.flags |= e === null ? 18882560 : 18874368)
              : I && aa(t),
            e !== null && e.memoizedProps.name !== r.name
              ? (t.flags |= 4194816)
              : Kc(e, t),
            Ic(e, t, r.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function hl(e) {
      e.flags |= 4;
    }
    function gl(e, t, n, r, i) {
      var a;
      if (
        ((a = !!(e.mode & 32)) &&
          (a =
            n === null
              ? Jm(t, r)
              : Jm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)),
        a)
      ) {
        if (((e.flags |= 16777216), (i & 335544128) === i)) {
          if (e.stateNode.complete) e.flags |= 8192;
          else if (Ud()) e.flags |= 8192;
          else throw ((oo = no), eo);
        }
      } else e.flags &= -16777217;
    }
    function _l(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Ym(t))) {
        if (Ud()) e.flags |= 8192;
        else throw ((oo = no), eo);
      }
    }
    function vl(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag === 22 ? 536870912 : vt()), (e.lanes |= t), (ud |= t)));
    }
    function yl(e, t) {
      if (!I)
        switch (e.tailMode) {
          case `visible`:
            break;
          case `collapsed`:
            for (var n = e.tail, r = null; n !== null;)
              (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
            break;
          default:
            for (t = e.tail, n = null; t !== null;)
              (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
        }
    }
    function H(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 1206910976),
            (r |= i.flags & 1206910976),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function bl(e, t, n) {
      var r = t.pendingProps;
      switch ((oa(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (H(t), null);
        case 1:
          return (H(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            Ca(Fa),
            Pe(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (ha(t)
                ? hl(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), _a())),
            H(t),
            null
          );
        case 26:
          var a = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (hl(t),
                o === null ? (H(t), gl(t, a, null, r, n)) : (H(t), _l(t, o)))
              : o
                ? o === e.memoizedState
                  ? (H(t), (t.flags &= -16777217))
                  : (hl(t), H(t), _l(t, o))
                : ((e = e.memoizedProps),
                  e !== r && hl(t),
                  H(t),
                  gl(t, a, e, r, n)),
            null
          );
        case 27:
          if (
            (Ie(t),
            (n = je.current),
            (a = t.type),
            e !== null && t.stateNode != null)
          )
            e.memoizedProps !== r && hl(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (H(t), (t.subtreeFlags &= -33554433), null);
            }
            ((e = ke.current),
              ha(t) ? pa(t, e) : ((e = hm(a, r, n)), (t.stateNode = e), hl(t)));
          }
          return (H(t), (t.subtreeFlags &= -33554433), null);
        case 5:
          if ((Ie(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && hl(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (H(t), (t.subtreeFlags &= -33554433), null);
            }
            if (((o = ke.current), ha(t))) pa(t, o);
            else {
              var s = lp(je.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                  break;
                case 2:
                  o = s.createElementNS(
                    `http://www.w3.org/1998/Math/MathML`,
                    a,
                  );
                  break;
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                      break;
                    case `math`:
                      o = s.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        a,
                      );
                      break;
                    case `script`:
                      ((o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild)));
                      break;
                    case `select`:
                      ((o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size));
                      break;
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a);
                  }
              }
              ((o[At] = t), (o[jt] = r));
              a: for (s = t.child; s !== null;) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ((s.child.return = s), (s = s.child));
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null;) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                ((s.sibling.return = s.return), (s = s.sibling));
              }
              t.stateNode = o;
              a: switch ((np(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && hl(t);
            }
          }
          return (
            H(t),
            (t.subtreeFlags &= -33554433),
            gl(
              t,
              t.type,
              e === null ? null : e.memoizedProps,
              t.pendingProps,
              n,
            ),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && hl(t);
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(i(166));
            if (((e = je.current), ha(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (r = null),
                (a = ca),
                a !== null)
              )
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              ((e[At] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  ep(e.nodeValue, n)
                )),
                e || fa(t, !0));
            } else
              ((e = lp(e).createTextNode(r)), (e[At] = t), (t.stateNode = e));
          }
          return (H(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = ha(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (
                  ((e = t.memoizedState),
                  (e = e === null ? null : e.dehydrated),
                  !e)
                )
                  throw Error(i(557));
                e[At] = t;
              } else
                (ga(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (H(t), (e = !1));
            } else
              ((n = _a()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (Bo(t), t) : (Bo(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return (H(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = ha(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (
                  ((a = t.memoizedState),
                  (a = a === null ? null : a.dehydrated),
                  !a)
                )
                  throw Error(i(317));
                a[At] = t;
              } else
                (ga(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (H(t), (a = !1));
            } else
              ((a = _a()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = a),
                (a = !0));
            if (!a) return t.flags & 256 ? (Bo(t), t) : (Bo(t), null);
          }
          return (
            Bo(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                vl(t, t.updateQueue),
                H(t),
                null)
          );
        case 4:
          return (
            Pe(),
            e === null && Wf(t.stateNode.containerInfo),
            (t.flags |= 67108864),
            H(t),
            null
          );
        case 10:
          return (Ca(t.type), H(t), null);
        case 19:
          if ((Uo(t), (r = t.memoizedState), r === null)) return (H(t), null);
          if (((a = !!(t.flags & 128)), (o = r.rendering), o === null)) {
            if (a) yl(r, !1);
            else {
              if (X !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null;) {
                  if (((o = Wo(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        yl(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        vl(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (Bi(n, e), (n = n.sibling));
                    return (
                      Ho(t, (Vo.current & 1) | 2),
                      I && ra(t, r.treeForkCount),
                      t.child
                    );
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                Je() > gd &&
                ((t.flags |= 128), (a = !0), yl(r, !1), (t.lanes = 4194304));
            }
          } else {
            if (!a) {
              if (((e = Wo(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  vl(t, e),
                  yl(r, !0),
                  r.tail === null &&
                    r.tailMode !== `collapsed` &&
                    r.tailMode !== `visible` &&
                    !o.alternate &&
                    !I)
                )
                  return (H(t), null);
              } else
                2 * Je() - r.renderingStartTime > gd &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), yl(r, !1), (t.lanes = 4194304));
            }
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last),
                e === null ? (t.child = o) : (e.sibling = o),
                (r.last = o));
          }
          if (r.tail !== null) {
            e = r.tail;
            a: {
              for (n = e; n !== null;) {
                if (n.alternate !== null) {
                  n = !1;
                  break a;
                }
                n = n.sibling;
              }
              n = !0;
            }
            return (
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = Je()),
              (e.sibling = null),
              (o = Vo.current),
              (o = a ? (o & 1) | 2 : o & 1),
              r.tailMode === `visible` || r.tailMode === `collapsed` || !n || I
                ? Ho(t, o)
                : ((n = o), k(Po, t), k(Vo, n), Fo === null && (Fo = t)),
              I && ra(t, r.treeForkCount),
              e
            );
          }
          return (H(t), null);
        case 22:
        case 23:
          return (
            Bo(t),
            No(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (H(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : H(t),
            (n = t.updateQueue),
            n !== null && vl(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && Oe(Ya),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            Ca(Fa),
            H(t),
            null
          );
        case 25:
          return null;
        case 30:
          return ((t.flags |= 33554432), H(t), null);
      }
      throw Error(i(156, t.tag));
    }
    function xl(e, t) {
      switch ((oa(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            Ca(Fa),
            Pe(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (Ie(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((Bo(t), t.alternate === null)) throw Error(i(340));
            ga();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 13:
          if (
            (Bo(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(i(340));
            ga();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (
            Uo(t),
            (e = t.flags),
            e & 65536
              ? ((t.flags = (e & -65537) | 128),
                (e = t.memoizedState),
                e !== null && ((e.rendering = null), (e.tail = null)),
                (t.flags |= 4),
                t)
              : null
          );
        case 4:
          return (Pe(), null);
        case 10:
          return (Ca(t.type), null);
        case 22:
        case 23:
          return (
            Bo(t),
            No(),
            e !== null && Oe(Ya),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (Ca(Fa), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Sl(e, t) {
      switch ((oa(t), t.tag)) {
        case 3:
          (Ca(Fa), Pe());
          break;
        case 26:
        case 27:
        case 5:
          Ie(t);
          break;
        case 4:
          Pe();
          break;
        case 31:
          t.memoizedState !== null && Bo(t);
          break;
        case 13:
          Bo(t);
          break;
        case 19:
          Uo(t);
          break;
        case 10:
          Ca(t.type);
          break;
        case 22:
        case 23:
          (Bo(t), No(), e !== null && Oe(Ya));
          break;
        case 24:
          Ca(Fa);
      }
    }
    function Cl(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              ((r = a()), (o.destroy = r));
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function wl(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                ((o.destroy = void 0), (i = t));
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  Z(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Tl(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          Oo(t, n);
        } catch (t) {
          Z(e, e.return, t);
        }
      }
    }
    function El(e, t, n) {
      ((n.props = Tc(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Dl(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              var i = e.stateNode,
                a = Si(e.memoizedProps, i);
              ((i.ref === null || i.ref.name !== a) && (i.ref = Pp(a)),
                (r = i.ref));
              break;
            case 7:
              if (e.stateNode === null) {
                var o = new Fp(e);
                (f(e.child, !1, Qp, o, void 0, void 0), (e.stateNode = o));
              }
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Ol(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null) {
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            Z(e, t, n);
          } finally {
            ((e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Z(e, t, n);
          }
        else n.current = null;
      }
    }
    function kl(e, t) {
      if (
        (e.tag === 5 || e.tag === 27 || e.tag === 6) &&
        e.alternate === null &&
        t !== null
      )
        for (var n = 0; n < t.length; n++) em(e.stateNode, t[n]);
    }
    function Al(e) {
      for (
        var t = e.return;
        t !== null && (Nl(t) && em(e.stateNode, t.stateNode), !Ml(t));
      )
        t = t.return;
    }
    function jl(e) {
      for (
        var t = e.return;
        t !== null && (Nl(t) && tm(e.stateNode, t.stateNode), !Ml(t));
      )
        t = t.return;
    }
    function Ml(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 27;
    }
    function Nl(e) {
      return e && e.tag === 7 && e.stateNode !== null;
    }
    function Pl(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Fl(e, t, n) {
      try {
        var r = e.stateNode;
        (ip(r, e.type, n, t), (r[jt] = t));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Il(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && Sp(e.type)) ||
        e.tag === 4
      );
    }
    function Ll(e) {
      a: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || Il(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (
            (e.tag === 27 && Sp(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Rl(e, t, n, r) {
      var i = e.tag;
      if (i === 5 || i === 6)
        ((i = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(i, t)
            : ((t =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                    ? n.ownerDocument.body
                    : n),
              t.appendChild(i),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = wn)),
          kl(e, r),
          (M = !0));
      else if (
        i !== 4 &&
        (i === 27 &&
          (kl(e, r), (r = null), Sp(e.type) && ((n = e.stateNode), (t = null))),
        (e = e.child),
        e !== null)
      )
        for (Rl(e, t, n, r), e = e.sibling; e !== null;)
          (Rl(e, t, n, r), (e = e.sibling));
    }
    function zl(e, t, n, r) {
      var i = e.tag;
      if (i === 5 || i === 6)
        ((i = e.stateNode),
          t ? n.insertBefore(i, t) : n.appendChild(i),
          kl(e, r),
          (M = !0));
      else if (
        i !== 4 &&
        (i === 27 && (kl(e, r), (r = null), Sp(e.type) && (n = e.stateNode)),
        (e = e.child),
        e !== null)
      )
        for (zl(e, t, n, r), e = e.sibling; e !== null;)
          (zl(e, t, n, r), (e = e.sibling));
    }
    function Bl(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length;)
          t.removeAttributeNode(i[0]);
        (np(t, r, n), (t[At] = e), (t[jt] = n));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    var Vl = !1,
      Hl = null;
    function Ul(e) {
      (e.tag === 30 || e.subtreeFlags & 33554432) && (Vl = !0);
    }
    var Wl = null;
    function Gl() {
      var e = Wl;
      return ((Wl = null), e);
    }
    var Kl = 0;
    function ql(e, t, n, r, i) {
      return ((Kl = 0), Jl(e.child, t, n, r, i));
    }
    function Jl(e, t, n, r, i) {
      for (var a = !1; e !== null;) {
        if (e.tag === 5) {
          var o = e.stateNode;
          if (r !== null) {
            var s = Op(o);
            (r.push(s), s.view && (a = !0));
          } else a || (Op(o).view && (a = !0));
          ((Vl = !0), Tp(o, Kl === 0 ? t : t + `_` + Kl, n), Kl++);
        } else
          (e.tag === 22 && e.memoizedState !== null) ||
            (e.tag === 30 && i) ||
            (Jl(e.child, t, n, r, i) && (a = !0));
        e = e.sibling;
      }
      return a;
    }
    function Yl(e, t) {
      for (; e !== null;)
        (e.tag === 5
          ? Ep(e.stateNode, e.memoizedProps)
          : (e.tag === 22 && e.memoizedState !== null) ||
            (e.tag === 30 && t) ||
            Yl(e.child, t),
          (e = e.sibling));
    }
    function Xl(e) {
      if (e.subtreeFlags & 18874368)
        for (e = e.child; e !== null;) {
          if (
            (e.tag !== 22 || e.memoizedState === null) &&
            (Xl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)
          ) {
            var t = e.memoizedProps;
            if (t.name == null || t.name === `auto`) throw Error(i(544));
            var n = t.name;
            ((t = wi(t.default, t.share)),
              t !== `none` && (ql(e, n, t, null, !1) || Yl(e.child, !1)));
          }
          e = e.sibling;
        }
    }
    function Zl(e, t) {
      if (e.tag === 30) {
        var n = e.stateNode,
          r = e.memoizedProps,
          i = Si(r, n),
          a = wi(r.default, n.paired ? r.share : r.enter);
        a === `none`
          ? Xl(e)
          : ql(e, i, a, null, !1)
            ? (Xl(e), n.paired || t || Nd(e, r.onEnter))
            : Yl(e.child, !1);
      } else if (e.subtreeFlags & 33554432)
        for (e = e.child; e !== null;) (Zl(e, t), (e = e.sibling));
      else Xl(e);
    }
    function Ql(e) {
      if (Hl !== null && Hl.size !== 0) {
        var t = Hl;
        if (e.subtreeFlags & 18874368)
          for (e = e.child; e !== null;) {
            if (e.tag !== 22 || e.memoizedState === null) {
              if (e.tag === 30 && e.flags & 18874368) {
                var n = e.memoizedProps,
                  r = n.name;
                if (r != null && r !== `auto`) {
                  var i = t.get(r);
                  if (i !== void 0) {
                    var a = wi(n.default, n.share);
                    if (
                      (a !== `none` &&
                        (ql(e, r, a, null, !1)
                          ? ((a = e.stateNode),
                            (i.paired = a),
                            (a.paired = i),
                            Nd(e, n.onShare))
                          : Yl(e.child, !1)),
                      t.delete(r),
                      t.size === 0)
                    )
                      break;
                  }
                }
              }
              Ql(e);
            }
            e = e.sibling;
          }
      }
    }
    function $l(e) {
      if (e.tag === 30) {
        var t = e.memoizedProps,
          n = Si(t, e.stateNode),
          r = Hl === null ? void 0 : Hl.get(n),
          i = wi(t.default, r === void 0 ? t.exit : t.share);
        (i !== `none` &&
          (ql(e, n, i, null, !1)
            ? r === void 0
              ? Nd(e, t.onExit)
              : ((i = e.stateNode),
                (r.paired = i),
                (i.paired = r),
                Hl.delete(n),
                Nd(e, t.onShare))
            : Yl(e.child, !1)),
          Hl !== null && Ql(e));
      } else if (e.subtreeFlags & 33554432)
        for (e = e.child; e !== null;) ($l(e), (e = e.sibling));
      else Hl !== null && Ql(e);
    }
    function eu(e) {
      for (e = e.child; e !== null;) {
        if (e.tag === 30) {
          var t = e.memoizedProps,
            n = Si(t, e.stateNode);
          ((t = wi(t.default, t.update)),
            (e.flags &= -5),
            t !== `none` && ql(e, n, t, (e.memoizedState = []), !1));
        } else e.subtreeFlags & 33554432 && eu(e);
        e = e.sibling;
      }
    }
    function tu(e) {
      if (e.subtreeFlags & 18874368)
        for (e = e.child; e !== null;) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && e.flags & 18874368) {
              var t = e.stateNode;
              t.paired !== null && ((t.paired = null), Yl(e.child, !1));
            }
            tu(e);
          }
          e = e.sibling;
        }
    }
    function nu(e) {
      if (e.tag === 30) ((e.stateNode.paired = null), Yl(e.child, !1), tu(e));
      else if (e.subtreeFlags & 33554432)
        for (e = e.child; e !== null;) (nu(e), (e = e.sibling));
      else tu(e);
    }
    function ru(e) {
      for (e = e.child; e !== null;)
        (e.tag === 30 ? Yl(e.child, !1) : e.subtreeFlags & 33554432 && ru(e),
          (e = e.sibling));
    }
    function iu(e, t, n, r, i, a, o) {
      for (var s = !1; t !== null;) {
        if (t.tag === 5) {
          var c = t.stateNode;
          if (a !== null && Kl < a.length) {
            var l = a[Kl],
              u = Op(c);
            (l.view || u.view) && (s = !0);
            var d;
            if ((d = !(e.flags & 4))) {
              if (u.clip) d = !0;
              else {
                d = l.rect;
                var f = u.rect;
                d =
                  d.y !== f.y ||
                  d.x !== f.x ||
                  d.height !== f.height ||
                  d.width !== f.width;
              }
            }
            (d && (e.flags |= 4),
              u.abs
                ? (u = !l.abs)
                : ((l = l.rect),
                  (u = u.rect),
                  (u = l.height !== u.height || l.width !== u.width)),
              u && (e.flags |= 32));
          } else e.flags |= 32;
          (e.flags & 4 && Tp(c, Kl === 0 ? n : n + `_` + Kl, i),
            (s && e.flags & 4) ||
              (Wl === null && (Wl = []),
              Wl.push(c, Kl === 0 ? r : r + `_` + Kl, t.memoizedProps)),
            Kl++);
        } else
          (t.tag !== 22 || t.memoizedState === null) &&
            (t.tag === 30 && o
              ? (e.flags |= t.flags & 32)
              : iu(e, t.child, n, r, i, a, o) && (s = !0));
        t = t.sibling;
      }
      return s;
    }
    function au(e, t) {
      for (e = e.child; e !== null;) {
        if (e.tag === 30) {
          var n = e.memoizedProps,
            r = e.stateNode,
            i = Si(n, r),
            a = wi(n.default, n.update);
          if (t) {
            r = r.clones;
            var o = r === null ? null : r.map(kp);
          } else ((o = e.memoizedState), (e.memoizedState = null));
          r = e;
          var s = e.child;
          ((Kl = 0),
            (i = iu(r, s, i, i, a, o, !1)),
            e.flags & 4 && i && (t || Nd(e, n.onUpdate)));
        } else e.subtreeFlags & 33554432 && au(e, t);
        e = e.sibling;
      }
    }
    var ou = !1,
      U = !1,
      su = !1,
      cu = !1,
      lu = typeof WeakSet == `function` ? WeakSet : Set,
      uu = null,
      du = !1,
      fu = !1,
      pu = !1,
      mu = !1;
    function hu(e, t, n) {
      if (((e = e.containerInfo), (sp = gh), (e = Qr(e)), $r(e))) {
        if (`selectionStart` in e)
          var r = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            r = ((r = e.ownerDocument) && r.defaultView) || window;
            var i = r.getSelection && r.getSelection();
            if (i && i.rangeCount !== 0) {
              r = i.anchorNode;
              var a = i.anchorOffset,
                o = i.focusNode;
              i = i.focusOffset;
              try {
                (r.nodeType, o.nodeType);
              } catch {
                r = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== r || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === r && ++u === a && (c = s),
                    p === o && ++d === i && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              r = c === -1 || l === -1 ? null : { start: c, end: l };
            } else r = null;
          }
        r ||= { start: 0, end: 0 };
      } else r = null;
      for (
        cp = { focusedElem: e, selectionRange: r },
          gh = !1,
          n = (n & 335544064) === n,
          uu = t,
          t = n ? 9270 : 1024;
        uu !== null;
      ) {
        if (((e = uu), n && ((r = e.deletions), r !== null)))
          for (a = 0; a < r.length; a++) n && $l(r[a]);
        if (e.alternate === null && e.flags & 2) (n && Ul(e), gu(n));
        else {
          if (e.tag === 22) {
            if (((r = e.alternate), e.memoizedState !== null)) {
              (r !== null && r.memoizedState === null && n && $l(r), gu(n));
              continue;
            }
            if (r !== null && r.memoizedState !== null) {
              (n && Ul(e), gu(n));
              continue;
            }
          }
          ((r = e.child),
            (e.subtreeFlags & t) !== 0 && r !== null
              ? ((r.return = e), (uu = r))
              : (n && eu(e), gu(n)));
        }
      }
      Hl = null;
    }
    function gu(e) {
      for (; uu !== null;) {
        var t = uu,
          n = e,
          r = t.alternate,
          a = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (a & 1024 && r !== null) {
              ((n = void 0), (a = r.memoizedProps), (r = r.memoizedState));
              var o = t.stateNode;
              try {
                var s = Tc(t.type, a);
                ((n = o.getSnapshotBeforeUpdate(s, r)),
                  (o.__reactInternalSnapshotBeforeUpdate = n));
              } catch (e) {
                Z(t, t.return, e);
              }
            }
            break;
          case 3:
            if (a & 1024) {
              if (((r = t.stateNode.containerInfo), (n = r.nodeType), n === 9))
                nm(r);
              else if (n === 1)
                switch (r.nodeName) {
                  case `HEAD`:
                  case `HTML`:
                  case `BODY`:
                    nm(r);
                    break;
                  default:
                    r.textContent = ``;
                }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          case 30:
            n &&
              r !== null &&
              ((n = Si(r.memoizedProps, r.stateNode)),
              (a = t.memoizedProps),
              (a = wi(a.default, a.update)),
              a !== `none` && ql(r, n, a, (r.memoizedState = []), !0));
            break;
          default:
            if (a & 1024) throw Error(i(163));
        }
        if (((r = t.sibling), r !== null)) {
          ((r.return = t.return), (uu = r));
          break;
        }
        uu = t.return;
      }
    }
    function _u(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (Iu(e, n), r & 4 && Cl(5, n));
          break;
        case 1:
          if ((Iu(e, n), r & 4)) {
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                Z(n, n.return, e);
              }
            else {
              var i = Tc(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (e) {
                Z(n, n.return, e);
              }
            }
          }
          (r & 64 && Tl(n), r & 512 && Dl(n, n.return));
          break;
        case 3:
          if ((Iu(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              Oo(e, t);
            } catch (e) {
              Z(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && Bl(n);
        case 26:
        case 5:
          (Iu(e, n), t === null && r & 4 && Pl(n), r & 512 && Dl(n, n.return));
          break;
        case 12:
          Iu(e, n);
          break;
        case 31:
          (Iu(e, n), r & 4 && Tu(e, n));
          break;
        case 13:
          (Iu(e, n),
            r & 4 && Eu(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((n = _f.bind(null, n)), cm(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || ou), !r)) {
            var a = (t !== null && t.memoizedState !== null) || U;
            ((t = ou),
              (i = U),
              (ou = r),
              (U = a) && !i
                ? ((r = 2), n.subtreeFlags & 8772 && (r |= 1), Ru(e, n, r))
                : Iu(e, n),
              (ou = t),
              (U = i));
          }
          break;
        case 30:
          (Iu(e, n), r & 512 && Dl(n, n.return));
          break;
        case 7:
          r & 512 && Dl(n, n.return);
        default:
          Iu(e, n);
      }
    }
    function vu(e, t) {
      for (e = e.child; e !== null;) (yu(e, t), (e = e.sibling));
    }
    function yu(e, t) {
      switch (e.tag) {
        case 5:
        case 26:
          try {
            var n = e.stateNode;
            if (t) {
              var r = n.style;
              typeof r.setProperty == `function`
                ? r.setProperty(`display`, `none`, `important`)
                : (r.display = `none`);
            } else {
              var i = e.stateNode,
                a = e.memoizedProps.style,
                o = a != null && a.hasOwnProperty(`display`) ? a.display : null;
              i.style.display =
                o == null || typeof o == `boolean` ? `` : (`` + o).trim();
            }
          } catch (t) {
            Z(e, e.return, t);
          }
          bu(e, t);
          break;
        case 6:
          try {
            ((e.stateNode.nodeValue = t ? `` : e.memoizedProps), (M = !0));
          } catch (t) {
            Z(e, e.return, t);
          }
          break;
        case 18:
          try {
            var s = e.stateNode;
            t ? wp(s, !0) : wp(e.stateNode, !1);
          } catch (t) {
            Z(e, e.return, t);
          }
          break;
        case 22:
        case 23:
          e.memoizedState === null && vu(e, t);
          break;
        default:
          vu(e, t);
      }
    }
    function bu(e, t) {
      if (e.subtreeFlags & 67108864)
        for (e = e.child; e !== null;) {
          a: {
            var n = e,
              r = t;
            switch (n.tag) {
              case 4:
                yu(n, r);
                break a;
              case 22:
                n.memoizedState === null && bu(n, r);
                break a;
              default:
                bu(n, r);
            }
          }
          e = e.sibling;
        }
    }
    function xu(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), xu(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && Rt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var W = null,
      Su = !1;
    function Cu(e, t, n) {
      for (n = n.child; n !== null;) (wu(e, t, n), (n = n.sibling));
    }
    function wu(e, t, n) {
      if (it && typeof it.onCommitFiberUnmount == `function`)
        try {
          it.onCommitFiberUnmount(rt, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (U || Ol(n, t),
            Cu(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode &&
                !U &&
                ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          (U || Ol(n, t), jl(n));
          var r = W,
            i = Su;
          (Sp(n.type) && ((W = n.stateNode), (Su = !1)),
            Cu(e, t, n),
            gm(n.stateNode, n.type, n.memoizedProps),
            (W = r),
            (Su = i));
          break;
        case 5:
          (U || Ol(n, t), jl(n));
        case 6:
          if (
            (n.tag === 6 && jl(n),
            (r = W),
            (i = Su),
            (W = null),
            Cu(e, t, n),
            (W = r),
            (Su = i),
            W !== null)
          ) {
            if (Su)
              try {
                ((W.nodeType === 9
                  ? W.body
                  : W.nodeName === `HTML`
                    ? W.ownerDocument.body
                    : W
                ).removeChild(n.stateNode),
                  (M = !0));
              } catch (e) {
                Z(n, t, e);
              }
            else
              try {
                (W.removeChild(n.stateNode), (M = !0));
              } catch (e) {
                Z(n, t, e);
              }
          }
          break;
        case 18:
          W !== null &&
            (Su
              ? ((e = W),
                Cp(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                      ? e.ownerDocument.body
                      : e,
                  n.stateNode,
                ),
                Hh(e))
              : Cp(W, n.stateNode));
          break;
        case 4:
          ((r = W),
            (i = Su),
            (W = n.stateNode.containerInfo),
            (Su = !0),
            Cu(e, t, n),
            (W = r),
            (Su = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (wl(2, n, t), U || wl(4, n, t), Cu(e, t, n));
          break;
        case 1:
          (U ||
            (Ol(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && El(n, t, r)),
            Cu(e, t, n));
          break;
        case 21:
          Cu(e, t, n);
          break;
        case 22:
          ((U = (r = U) || n.memoizedState !== null), Cu(e, t, n), (U = r));
          break;
        case 30:
          (Ol(n, t), Cu(e, t, n));
          break;
        case 7:
          (U || Ol(n, t), Cu(e, t, n));
          break;
        default:
          Cu(e, t, n);
      }
    }
    function Tu(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Hh(e);
        } catch (e) {
          Z(t, t.return, e);
        }
      }
    }
    function Eu(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Hh(e);
        } catch (e) {
          Z(t, t.return, e);
        }
    }
    function Du(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new lu()), t);
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new lu()),
            t
          );
        default:
          throw Error(i(435, e.tag));
      }
    }
    function Ou(e, t) {
      var n = Du(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = vf.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function ku(e, t, n) {
      var r = t.deletions;
      if (r !== null)
        for (var a = 0; a < r.length; a++) {
          var o = r[a],
            s = e,
            c = t,
            l = c;
          a: for (; l !== null;) {
            switch (l.tag) {
              case 27:
                if (Sp(l.type)) {
                  ((W = l.stateNode), (Su = !1));
                  break a;
                }
                break;
              case 5:
                ((W = l.stateNode), (Su = !1));
                break a;
              case 3:
              case 4:
                ((W = l.stateNode.containerInfo), (Su = !0));
                break a;
            }
            l = l.return;
          }
          if (W === null) throw Error(i(160));
          (wu(s, c, o),
            (W = null),
            (Su = !1),
            (s = o.alternate),
            s !== null && (s.return = null),
            (o.return = null));
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null;) (ju(t, e, n), (t = t.sibling));
    }
    var Au = null;
    function ju(e, t, n) {
      var r = e.alternate,
        a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            a & 4 &&
            ((r = e.updateQueue),
            (r = r === null ? null : r.events),
            r !== null)
          )
            for (var o = 0; o < r.length; o++) {
              var s = r[o];
              s.ref.impl = s.nextImpl;
            }
          (ku(t, e, n),
            Mu(e),
            a & 4 && (wl(3, e, e.return), Cl(3, e), wl(5, e, e.return)));
          break;
        case 1:
          (ku(t, e, n),
            Mu(e),
            a & 512 && (U || r === null || Ol(r, r.return)),
            a & 64 &&
              ou &&
              ((e = e.updateQueue),
              e !== null &&
                ((t = e.callbacks),
                t !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? t : n.concat(t))))));
          break;
        case 26:
          if (
            ((o = Au),
            ku(t, e, n),
            Mu(e),
            a & 512 && (U || r === null || Ol(r, r.return)),
            a & 4)
          ) {
            if (
              ((a = r === null ? null : r.memoizedState),
              (n = e.memoizedState),
              r === null)
            ) {
              if (n === null) {
                if (e.stateNode === null) {
                  if (ou)
                    e.stateNode = fp(
                      e.type,
                      e.memoizedProps,
                      t.containerInfo,
                      e,
                    );
                  else {
                    a: {
                      ((t = e.type),
                        (n = e.memoizedProps),
                        (a = o.ownerDocument || o));
                      b: switch (t) {
                        case `title`:
                          ((r = a.getElementsByTagName(`title`)[0]),
                            (!r ||
                              r[It] ||
                              r[At] ||
                              r.namespaceURI === `http://www.w3.org/2000/svg` ||
                              r.hasAttribute(`itemprop`)) &&
                              ((r = a.createElement(t)),
                              a.head.insertBefore(
                                r,
                                a.querySelector(`head > title`),
                              )),
                            np(r, t, n),
                            (r[At] = e),
                            Ut(r),
                            (t = r));
                          break a;
                        case `link`:
                          if (
                            (o = Gm(`link`, `href`, a).get(t + (n.href || ``)))
                          ) {
                            for (s = 0; s < o.length; s++)
                              if (
                                ((r = o[s]),
                                r.getAttribute(`href`) ===
                                  (n.href == null || n.href === ``
                                    ? null
                                    : n.href) &&
                                  r.getAttribute(`rel`) ===
                                    (n.rel == null ? null : n.rel) &&
                                  r.getAttribute(`title`) ===
                                    (n.title == null ? null : n.title) &&
                                  r.getAttribute(`crossorigin`) ===
                                    (n.crossOrigin == null
                                      ? null
                                      : n.crossOrigin))
                              ) {
                                o.splice(s, 1);
                                break b;
                              }
                          }
                          ((r = a.createElement(t)),
                            np(r, t, n),
                            a.head.appendChild(r));
                          break;
                        case `meta`:
                          if (
                            (o = Gm(`meta`, `content`, a).get(
                              t + (n.content || ``),
                            ))
                          ) {
                            for (s = 0; s < o.length; s++)
                              if (
                                ((r = o[s]),
                                r.getAttribute(`content`) ===
                                  (n.content == null ? null : `` + n.content) &&
                                  r.getAttribute(`name`) ===
                                    (n.name == null ? null : n.name) &&
                                  r.getAttribute(`property`) ===
                                    (n.property == null ? null : n.property) &&
                                  r.getAttribute(`http-equiv`) ===
                                    (n.httpEquiv == null
                                      ? null
                                      : n.httpEquiv) &&
                                  r.getAttribute(`charset`) ===
                                    (n.charSet == null ? null : n.charSet))
                              ) {
                                o.splice(s, 1);
                                break b;
                              }
                          }
                          ((r = a.createElement(t)),
                            np(r, t, n),
                            a.head.appendChild(r));
                          break;
                        default:
                          throw Error(i(468, t));
                      }
                      ((r[At] = e), Ut(r), (t = r));
                    }
                    e.stateNode = t;
                  }
                } else ou || Km(o, e.type, e.stateNode);
              } else e.stateNode = Bm(o, n, e.memoizedProps);
            } else
              a === n
                ? n === null &&
                  e.stateNode !== null &&
                  Fl(e, e.memoizedProps, r.memoizedProps)
                : (a === null
                    ? ((t = r.stateNode),
                      t === null || U || t.parentNode.removeChild(t))
                    : a.count--,
                  n === null
                    ? ou || Km(o, e.type, e.stateNode)
                    : Bm(o, n, e.memoizedProps));
          }
          break;
        case 27:
          (ku(t, e, n),
            Mu(e),
            a & 512 && (U || r === null || Ol(r, r.return)),
            r !== null && a & 4 && Fl(e, e.memoizedProps, r.memoizedProps));
          break;
        case 5:
          if (
            ((o = su),
            (su = !1),
            ku(t, e, n),
            (su = o),
            Mu(e),
            a & 512 && (U || r === null || Ol(r, r.return)),
            e.flags & 32)
          ) {
            t = e.stateNode;
            try {
              (gn(t, ``), (M = !0));
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          (a & 4 &&
            e.stateNode != null &&
            ((t = e.memoizedProps), Fl(e, t, r === null ? t : r.memoizedProps)),
            a & 1024 && (cu = !0));
          break;
        case 6:
          if ((ku(t, e, n), Mu(e), a & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            ((t = e.memoizedProps), (n = e.stateNode));
            try {
              ((n.nodeValue = t), (M = !0));
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((M = !1),
            (Wm = null),
            (o = Au),
            (Au = bm(t.containerInfo)),
            ku(t, e, n),
            (Au = o),
            Mu(e),
            a & 4 && r !== null && r.memoizedState.isDehydrated)
          )
            try {
              Hh(t.containerInfo);
            } catch (t) {
              Z(e, e.return, t);
            }
          (cu && ((cu = !1), Nu(e)), (M = !1));
          break;
        case 4:
          ((a = su),
            (su = ou),
            (r = $t()),
            (o = Au),
            (Au = bm(e.stateNode.containerInfo)),
            ku(t, e, n),
            Mu(e),
            (Au = o),
            M && fu && (pu = !0),
            (M = r),
            (su = a));
          break;
        case 12:
          (ku(t, e, n), Mu(e));
          break;
        case 31:
          (ku(t, e, n),
            Mu(e),
            a & 4 &&
              ((t = e.updateQueue),
              t !== null && ((e.updateQueue = null), Ou(e, t))));
          break;
        case 13:
          (ku(t, e, n),
            Mu(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (r !== null && r.memoizedState !== null) &&
              (md = Je()),
            a & 4 &&
              ((t = e.updateQueue),
              t !== null && ((e.updateQueue = null), Ou(e, t))));
          break;
        case 22:
          ((o = e.memoizedState !== null),
            (s = r !== null && r.memoizedState !== null));
          var c = ou,
            l = U,
            u = su;
          ((ou = c || o),
            (su = u || o),
            (U = l || s),
            ku(t, e, n),
            (U = l),
            (su = u),
            (ou = c),
            Mu(e),
            a & 8192 &&
              ((t = e.stateNode),
              (t._visibility = o ? t._visibility & -2 : t._visibility | 1),
              !o ||
                r === null ||
                s ||
                ou ||
                U ||
                ((t = s || U),
                (n = ou),
                (r = U),
                (ou = o || ou),
                (U = t),
                Lu(e, 2),
                (ou = n),
                (U = r)),
              (!o && su) || vu(e, o)),
            a & 4 &&
              ((t = e.updateQueue),
              t !== null &&
                ((n = t.retryQueue),
                n !== null && ((t.retryQueue = null), Ou(e, n)))));
          break;
        case 19:
          (ku(t, e, n),
            Mu(e),
            a & 4 &&
              ((t = e.updateQueue),
              t !== null && ((e.updateQueue = null), Ou(e, t))));
          break;
        case 30:
          (a & 512 && (U || r === null || Ol(r, r.return)),
            (a = $t()),
            (o = fu),
            (s = (n & 335544064) === n),
            (c = e.memoizedProps),
            (fu = s && wi(c.default, c.update) !== `none`),
            ku(t, e, n),
            Mu(e),
            s && r !== null && M && (e.flags |= 4),
            (fu = o),
            (M = a));
          break;
        case 21:
          break;
        case 7:
          (a & 512 && (U || r === null || Ol(r, r.return)),
            r && r.stateNode !== null && (r.stateNode._fragmentFiber = e));
        default:
          (ku(t, e, n), Mu(e));
      }
    }
    function Mu(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null;) {
            if (Il(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          r = null;
          for (var a = e.return; a !== null;) {
            if (Nl(a)) {
              var o = a.stateNode;
              r === null ? (r = [o]) : r.push(o);
            }
            if (Ml(a)) break;
            a = a.return;
          }
          var s = r;
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27:
              var c = n.stateNode;
              zl(e, Ll(e), c, s);
              break;
            case 5:
              var l = n.stateNode;
              (n.flags & 32 && (gn(l, ``), (n.flags &= -33)),
                zl(e, Ll(e), l, s));
              break;
            case 3:
            case 4:
              var u = n.stateNode.containerInfo;
              Rl(e, Ll(e), u, s);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          Z(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Nu(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null;) {
          var t = e;
          (Nu(t),
            t.tag === 5 &&
              t.flags & 1024 &&
              ((t = t.stateNode), (gh = !0), t.reset(), (gh = !1)),
            (e = e.sibling));
        }
    }
    function Pu(e, t) {
      if (t.subtreeFlags & 9270)
        for (t = t.child; t !== null;) (Fu(t, e), (t = t.sibling));
      else au(t, !1);
    }
    function Fu(e, t) {
      var n = e.alternate;
      if (n === null) Zl(e, !1);
      else
        switch (e.tag) {
          case 3:
            if (((mu = du = !1), Gl(), Pu(t, e), !du && !pu)) {
              if (((e = Wl), e !== null))
                for (var r = 0; r < e.length; r += 3) {
                  n = e[r];
                  var i = e[r + 1];
                  (Ep(n, e[r + 2]),
                    (n = n.ownerDocument.documentElement),
                    n !== null &&
                      n.animate(
                        { opacity: [0, 0], pointerEvents: [`none`, `none`] },
                        {
                          duration: 0,
                          fill: `forwards`,
                          pseudoElement: `::view-transition-group(` + i + `)`,
                        },
                      ));
                }
              ((e = t.containerInfo),
                (e =
                  e.nodeType === 9
                    ? e.documentElement
                    : e.ownerDocument.documentElement),
                e !== null &&
                  e.style.viewTransitionName === `` &&
                  ((e.style.viewTransitionName = `none`),
                  e.animate(
                    { opacity: [0, 0], pointerEvents: [`none`, `none`] },
                    {
                      duration: 0,
                      fill: `forwards`,
                      pseudoElement: `::view-transition-group(root)`,
                    },
                  ),
                  e.animate(
                    { width: [0, 0], height: [0, 0] },
                    {
                      duration: 0,
                      fill: `forwards`,
                      pseudoElement: `::view-transition`,
                    },
                  )),
                (mu = !0));
            }
            Wl = null;
            break;
          case 5:
            Pu(t, e);
            break;
          case 4:
            ((r = du), (du = !1), Pu(t, e), du && (pu = !0), (du = r));
            break;
          case 22:
            e.memoizedState === null &&
              (n.memoizedState === null ? Pu(t, e) : Zl(e, !1));
            break;
          case 30:
            ((r = du), (i = Gl()), (du = !1), Pu(t, e), du && (e.flags |= 4));
            var a = e.memoizedProps,
              o = e.stateNode;
            ((t = Si(a, o)), (o = Si(n.memoizedProps, o)));
            var s = wi(a.default, a.update);
            (s === `none`
              ? (t = !1)
              : ((a = n.memoizedState),
                (n.memoizedState = null),
                (n = e.child),
                (Kl = 0),
                (t = iu(e, n, t, o, s, a, !0)),
                Kl !== (a === null ? 0 : a.length) && (e.flags |= 32)),
              e.flags & 4 && t
                ? (Nd(e, e.memoizedProps.onUpdate), (Wl = i))
                : i !== null && (i.push.apply(i, Wl), (Wl = i)),
              (du = e.flags & 32 ? !0 : r));
            break;
          default:
            Pu(t, e);
        }
    }
    function Iu(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null;) (_u(e, t.alternate, t), (t = t.sibling));
    }
    function Lu(e, t) {
      for (e = e.child; e !== null;) {
        var n = e,
          r = t;
        switch (n.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (wl(4, n, n.return), Lu(n, r));
            break;
          case 1:
            Ol(n, n.return);
            var i = n.stateNode;
            (typeof i.componentWillUnmount == `function` && El(n, n.return, i),
              Lu(n, r));
            break;
          case 27:
            r & 2 && gm(n.stateNode, n.type, n.memoizedProps);
          case 5:
            (Ol(n, n.return), (n.tag !== 5 && n.tag !== 27) || jl(n), Lu(n, r));
            break;
          case 6:
            jl(n);
            break;
          case 26:
            (Ol(n, n.return),
              (i = n.stateNode),
              n.memoizedState !== null ||
                i === null ||
                U ||
                i.parentNode.removeChild(i),
              Lu(n, r));
            break;
          case 22:
            n.memoizedState === null && Lu(n, r);
            break;
          case 30:
            (Ol(n, n.return), Lu(n, r));
            break;
          case 7:
            Ol(n, n.return);
          default:
            Lu(n, r);
        }
        e = e.sibling;
      }
    }
    function Ru(e, t, n) {
      for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags,
          s = !!(n & 1);
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (Ru(i, a, n), Cl(4, a));
            break;
          case 1:
            if (
              (Ru(i, a, n),
              (r = a),
              (i = r.stateNode),
              typeof i.componentDidMount == `function`)
            )
              try {
                i.componentDidMount();
              } catch (e) {
                Z(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var c = r.stateNode;
              try {
                var l = i.shared.hiddenCallbacks;
                if (l !== null)
                  for (
                    i.shared.hiddenCallbacks = null, i = 0;
                    i < l.length;
                    i++
                  )
                    Do(l[i], c);
              } catch (e) {
                Z(r, r.return, e);
              }
            }
            (s && o & 64 && Tl(a), Dl(a, a.return));
            break;
          case 27:
            n & 2 && Bl(a);
          case 5:
            ((a.tag !== 5 && a.tag !== 27) || Al(a),
              Ru(i, a, n),
              s && r === null && o & 4 && Pl(a),
              Dl(a, a.return));
            break;
          case 6:
            Al(a);
            break;
          case 26:
            ((c = a.stateNode),
              a.memoizedState !== null ||
                c === null ||
                ou ||
                Km(bm(c.ownerDocument), a.type, c),
              Ru(i, a, n),
              s && r === null && o & 4 && Pl(a),
              Dl(a, a.return));
            break;
          case 12:
            Ru(i, a, n);
            break;
          case 31:
            (Ru(i, a, n), s && o & 4 && Tu(i, a));
            break;
          case 13:
            (Ru(i, a, n), s && o & 4 && Eu(i, a));
            break;
          case 22:
            (a.memoizedState === null && Ru(i, a, n), Dl(a, a.return));
            break;
          case 30:
            (Ru(i, a, n), Dl(a, a.return));
            break;
          case 7:
            Dl(a, a.return);
          default:
            Ru(i, a, n);
        }
        t = t.sibling;
      }
    }
    function zu(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && La(n)));
    }
    function Bu(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && La(e)));
    }
    function Vu(e, t, n, r) {
      var i = (n & 335544064) === n;
      if (t.subtreeFlags & (i ? 10262 : 10256))
        for (t = t.child; t !== null;) (Hu(e, t, n, r), (t = t.sibling));
      else i && ru(t);
    }
    function Hu(e, t, n, r) {
      var i = (n & 335544064) === n;
      i &&
        t.alternate === null &&
        t.return !== null &&
        t.return.alternate !== null &&
        nu(t);
      var a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (Vu(e, t, n, r), a & 2048 && Cl(9, t));
          break;
        case 1:
          Vu(e, t, n, r);
          break;
        case 3:
          (Vu(e, t, n, r),
            i &&
              mu &&
              ((e = e.containerInfo),
              (e =
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === `HTML`
                    ? e.ownerDocument.body
                    : e),
              e.style.viewTransitionName === `root` &&
                (e.style.viewTransitionName = ``),
              (e = e.ownerDocument.documentElement),
              e !== null &&
                e.style.viewTransitionName === `none` &&
                (e.style.viewTransitionName = ``)),
            a & 2048 &&
              ((a = null),
              t.alternate !== null && (a = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== a && (t.refCount++, a != null && La(a))));
          break;
        case 12:
          if (a & 2048) {
            (Vu(e, t, n, r), (a = t.stateNode));
            try {
              var o = t.memoizedProps,
                s = o.id,
                c = o.onPostCommit;
              typeof c == `function` &&
                c(
                  s,
                  t.alternate === null ? `mount` : `update`,
                  a.passiveEffectDuration,
                  -0,
                );
            } catch (e) {
              Z(t, t.return, e);
            }
          } else Vu(e, t, n, r);
          break;
        case 31:
          Vu(e, t, n, r);
          break;
        case 13:
          Vu(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((o = t.stateNode),
            (s = t.alternate),
            t.memoizedState === null
              ? (i && s !== null && s.memoizedState !== null && nu(t),
                o._visibility & 2
                  ? Vu(e, t, n, r)
                  : ((o._visibility |= 2),
                    Uu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1)))
              : (i && s !== null && s.memoizedState === null && nu(s),
                o._visibility & 2 ? Vu(e, t, n, r) : Wu(e, t)),
            a & 2048 && zu(s, t));
          break;
        case 24:
          (Vu(e, t, n, r), a & 2048 && Bu(t.alternate, t));
          break;
        case 30:
          (i &&
            ((a = t.alternate),
            a !== null && (Yl(a.child, !0), Yl(t.child, !0))),
            Vu(e, t, n, r));
          break;
        default:
          Vu(e, t, n, r);
      }
    }
    function Uu(e, t, n, r, i) {
      for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (Uu(a, o, s, c, i), Cl(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), Uu(a, o, s, c, i))
              : u._visibility & 2
                ? Uu(a, o, s, c, i)
                : Wu(a, o),
              i && l & 2048 && zu(o.alternate, o));
            break;
          case 24:
            (Uu(a, o, s, c, i), i && l & 2048 && Bu(o.alternate, o));
            break;
          default:
            Uu(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function Wu(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (Wu(n, r), i & 2048 && zu(r.alternate, r));
              break;
            case 24:
              (Wu(n, r), i & 2048 && Bu(r.alternate, r));
              break;
            default:
              Wu(n, r);
          }
          t = t.sibling;
        }
    }
    var Gu = 8192;
    function Ku(e, t, n) {
      if (e.subtreeFlags & Gu)
        for (e = e.child; e !== null;) (qu(e, t, n), (e = e.sibling));
    }
    function qu(e, t, n) {
      switch (e.tag) {
        case 26:
          (Ku(e, t, n),
            e.flags & Gu &&
              (e.memoizedState === null
                ? ((e = e.stateNode), (t & 335544128) === t && Zm(n, e))
                : Qm(n, Au, e.memoizedState, e.memoizedProps)));
          break;
        case 5:
          (Ku(e, t, n),
            e.flags & Gu &&
              ((e = e.stateNode), (t & 335544128) === t && Zm(n, e)));
          break;
        case 3:
        case 4:
          var r = Au;
          ((Au = bm(e.stateNode.containerInfo)), Ku(e, t, n), (Au = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = Gu), (Gu = 16777216), Ku(e, t, n), (Gu = r))
              : Ku(e, t, n));
          break;
        case 30:
          if (
            (e.flags & Gu) !== 0 &&
            ((r = e.memoizedProps.name), r != null && r !== `auto`)
          ) {
            var i = e.stateNode;
            ((i.paired = null), Hl === null && (Hl = new Map()), Hl.set(r, i));
          }
          Ku(e, t, n);
          break;
        default:
          Ku(e, t, n);
      }
    }
    function Ju(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function Yu(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((uu = r), Qu(r, e));
          }
        Ju(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null;) (Xu(e), (e = e.sibling));
    }
    function Xu(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Yu(e), e.flags & 2048 && wl(9, e, e.return));
          break;
        case 3:
          Yu(e);
          break;
        case 12:
          Yu(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Zu(e))
            : Yu(e);
          break;
        default:
          Yu(e);
      }
    }
    function Zu(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((uu = r), Qu(r, e));
          }
        Ju(e);
      }
      for (e = e.child; e !== null;) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (wl(8, t, t.return), Zu(t));
            break;
          case 22:
            ((n = t.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), Zu(t)));
            break;
          default:
            Zu(t);
        }
        e = e.sibling;
      }
    }
    function Qu(e, t) {
      for (; uu !== null;) {
        var n = uu;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            wl(8, n, t);
            break;
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            La(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (uu = r));
        else
          a: for (n = e; uu !== null;) {
            r = uu;
            var i = r.sibling,
              a = r.return;
            if ((xu(r), r === n)) {
              uu = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (uu = i));
              break a;
            }
            uu = a;
          }
      }
    }
    var $u = {
        getCacheForType: function (e) {
          var t = ka(Fa),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return ka(Fa).controller.signal;
        },
      },
      ed = typeof WeakMap == `function` ? WeakMap : Map,
      G = 0,
      K = null,
      q = null,
      J = 0,
      Y = 0,
      td = null,
      nd = !1,
      rd = !1,
      id = !1,
      ad = 0,
      X = 0,
      od = 0,
      sd = 0,
      cd = 0,
      ld = 0,
      ud = 0,
      dd = null,
      fd = null,
      pd = !1,
      md = 0,
      hd = 0,
      gd = 1 / 0,
      _d = null,
      vd = null,
      yd = 0,
      bd = null,
      xd = null,
      Sd = 0,
      Cd = 0,
      wd = null,
      Td = null,
      Ed = null,
      Dd = null,
      Od = null,
      kd = 0,
      Ad = null;
    function jd() {
      return G & 2 && J !== 0 ? J & -J : D.T === null ? Dt() : Pf();
    }
    function Md() {
      if (ld === 0) {
        if (!(J & 536870912) || I) {
          var e = dt;
          ((dt <<= 1), !(dt & 3932160) && (dt = 262144), (ld = e));
        } else ld = 536870912;
      }
      return ((e = Po.current), e !== null && (e.flags |= 32), ld);
    }
    function Nd(e, t) {
      if (t != null) {
        var n = e.stateNode,
          r = n.ref;
        (r === null && (r = n.ref = Pp(Si(e.memoizedProps, n))),
          Dd === null && (Dd = []),
          Dd.push(t.bind(null, r)));
      }
    }
    function Pd(e, t, n) {
      (((e === K && (Y === 2 || Y === 9)) || e.cancelPendingCommit !== null) &&
        (Vd(e, 0), Rd(e, J, ld, !1)),
        bt(e, n),
        (G & 2 && e === K) ||
          (e === K && (!(G & 2) && (sd |= n), X === 4 && Rd(e, J, ld, !1)),
          Ef(e)));
    }
    function Fd(e, t, n) {
      if (G & 6) throw Error(i(327));
      var r = (!n && !(t & 127) && (t & e.expiredLanes) === 0) || ht(e, t),
        a = r ? Yd(e, t) : qd(e, t, !0),
        o = r;
      do {
        if (a === 0) {
          rd && !r && Rd(e, t, 0, !1);
          break;
        }
        if (((n = e.current.alternate), o && !Ld(n)))
          ((a = qd(e, t, !1)), (o = !1));
        else {
          if (a === 2) {
            if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
            else
              ((s = e.pendingLanes & -536870913),
                (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
            if (s !== 0) {
              t = s;
              a: {
                var c = e;
                a = dd;
                var l = c.current.memoizedState.isDehydrated;
                if (
                  (l && (Vd(c, s).flags |= 256),
                  (s = qd(c, s, !1)),
                  s !== 2 && s !== 6)
                ) {
                  if (id && !l) {
                    ((c.errorRecoveryDisabledLanes |= o), (sd |= o), (a = 4));
                    break a;
                  }
                  ((o = fd),
                    (fd = a),
                    o !== null &&
                      (fd === null ? (fd = o) : fd.push.apply(fd, o)));
                }
                a = s;
              }
              if (((o = !1), a !== 2)) continue;
            }
          }
          if (a === 1) {
            (Vd(e, 0), Rd(e, t, 0, !0));
            break;
          }
          a: {
            switch (((r = e), (o = a), o)) {
              case 0:
              case 1:
                throw Error(i(345));
              case 4:
                if ((t & 4194048) !== t && (t & 62914560) !== t) break;
              case 6:
                Rd(r, t, ld, !nd);
                break a;
              case 2:
                fd = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(i(329));
            }
            if ((t & 62914560) === t && ((a = md + 300 - Je()), 10 < a)) {
              if ((Rd(r, t, ld, !nd), mt(r, 0, !0) !== 0)) break a;
              ((Sd = t),
                (r.timeoutHandle = gp(
                  Id.bind(
                    null,
                    r,
                    n,
                    fd,
                    _d,
                    pd,
                    t,
                    ld,
                    sd,
                    ud,
                    nd,
                    o,
                    `Throttled`,
                    -0,
                    0,
                  ),
                  a,
                )));
              break a;
            }
            Id(r, n, fd, _d, pd, t, ld, sd, ud, nd, o, null, -0, 0);
          }
          break;
        }
      } while (1);
      Ef(e);
    }
    function Id(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      e.timeoutHandle = -1;
      var m = t.subtreeFlags,
        h = (a & 335544064) === a;
      ((d = null),
        (h || m & 8192 || (m & 16785408) == 16785408) &&
        ((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: wn,
        }),
        (Hl = null),
        qu(t, a, d),
        h &&
          ((m = d),
          (h = e.containerInfo),
          (h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition),
          h != null &&
            (m.count++,
            (m.waitingForViewTransition = !0),
            (m = nh.bind(m)),
            h.finished.then(m, m))),
        (m =
          (a & 62914560) === a
            ? md - Je()
            : (a & 4194048) === a
              ? hd - Je()
              : 0),
        (m = eh(d, m)),
        m !== null)
          ? ((Sd = a),
            (e.cancelPendingCommit = m(
              nf.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p),
            )),
            Rd(e, a, o, !l))
          : nf(e, t, a, n, r, i, o, s, c, l, u, d));
    }
    function Ld(e) {
      for (var t = e; ;) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!Kr(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function Rd(e, t, n, r) {
      ((t = gt(e, t)),
        (t &= ~cd),
        (t &= ~sd),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i;) {
        var a = 31 - ot(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && St(e, n, t);
    }
    function zd() {
      return G & 6 ? !0 : (Df(0, !1), !1);
    }
    function Bd() {
      if (q !== null) {
        if (Y === 0) var e = q.return;
        else ((e = q), (xa = ba = null), ss(e), (lo = null), (uo = 0), (e = q));
        for (; e !== null;) (Sl(e.alternate, e), (e = e.return));
        q = null;
      }
    }
    function Vd(e, t) {
      var n = e.timeoutHandle;
      return (
        n !== -1 && ((e.timeoutHandle = -1), _p(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (Sd = 0),
        Bd(),
        (K = e),
        (q = n = zi(e.current, null)),
        (J = t),
        (Y = 0),
        (td = null),
        (nd = !1),
        (rd = ht(e, t)),
        (id = !1),
        (ud = ld = cd = sd = od = X = 0),
        (fd = dd = null),
        (pd = !1),
        (ad = gt(e, t)),
        ki(),
        n
      );
    }
    function Hd(e, t) {
      ((R = null),
        (D.H = _c),
        t === $a || t === to
          ? ((t = so()), (Y = 3))
          : t === eo
            ? ((t = so()), (Y = 4))
            : (Y =
                t === Fc
                  ? 8
                  : typeof t == `object` && t && typeof t.then == `function`
                    ? 6
                    : 1),
        (td = t),
        q === null && ((X = 1), kc(e, qi(t, e.current))));
    }
    function Ud() {
      var e = Po.current;
      return e === null
        ? !0
        : (J & 4194048) === J
          ? Fo === null
          : (J & 62914560) === J || J & 536870912
            ? e === Fo
            : !1;
    }
    function Wd() {
      var e = D.H;
      return ((D.H = _c), e === null ? _c : e);
    }
    function Gd() {
      var e = D.A;
      return ((D.A = $u), e);
    }
    function Kd() {
      ((X = 4),
        nd || ((J & 4194048) !== J && Po.current !== null) || (rd = !0),
        (!(od & 134217727) && !(sd & 134217727)) ||
          K === null ||
          Rd(K, J, ld, !1));
    }
    function qd(e, t, n) {
      var r = G;
      G |= 2;
      var i = Wd(),
        a = Gd();
      ((K !== e || J !== t) && ((_d = null), Vd(e, t)), (t = !1));
      var o = X;
      a: do
        try {
          if (Y !== 0 && q !== null) {
            var s = q,
              c = td;
            switch (Y) {
              case 8:
                (Bd(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                Po.current === null && (t = !0);
                var l = Y;
                if (((Y = 0), (td = null), $d(e, s, c, l), n && rd)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = Y), (Y = 0), (td = null), $d(e, s, c, l));
            }
          }
          (Jd(), (o = X));
          break;
        } catch (t) {
          Hd(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (xa = ba = null),
        (G = r),
        (D.H = i),
        (D.A = a),
        q === null && ((K = null), (J = 0), ki()),
        o
      );
    }
    function Jd() {
      for (; q !== null;) Zd(q);
    }
    function Yd(e, t) {
      var n = G;
      G |= 2;
      var r = Wd(),
        a = Gd();
      K !== e || J !== t
        ? ((_d = null), (gd = Je() + 500), Vd(e, t))
        : (rd = ht(e, t));
      a: do
        try {
          if (Y !== 0 && q !== null) {
            t = q;
            var o = td;
            b: switch (Y) {
              case 1:
                ((Y = 0), (td = null), $d(e, t, o, 1));
                break;
              case 2:
              case 9:
                if (ro(o)) {
                  ((Y = 0), (td = null), Qd(t));
                  break;
                }
                ((t = function () {
                  ((Y !== 2 && Y !== 9) || K !== e || (Y = 7), Ef(e));
                }),
                  o.then(t, t));
                break a;
              case 3:
                Y = 7;
                break a;
              case 4:
                Y = 5;
                break a;
              case 7:
                ro(o)
                  ? ((Y = 0), (td = null), Qd(t))
                  : ((Y = 0), (td = null), $d(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (q.tag) {
                  case 26:
                    s = q.memoizedState;
                  case 5:
                  case 27:
                    var c = q;
                    if (s ? Ym(s) : c.stateNode.complete) {
                      ((Y = 0), (td = null));
                      var l = c.sibling;
                      if (l !== null) q = l;
                      else {
                        var u = c.return;
                        u === null ? (q = null) : ((q = u), ef(u));
                      }
                      break b;
                    }
                }
                ((Y = 0), (td = null), $d(e, t, o, 5));
                break;
              case 6:
                ((Y = 0), (td = null), $d(e, t, o, 6));
                break;
              case 8:
                (Bd(), (X = 6));
                break a;
              default:
                throw Error(i(462));
            }
          }
          Xd();
          break;
        } catch (t) {
          Hd(e, t);
        }
      while (1);
      return (
        (xa = ba = null),
        (D.H = r),
        (D.A = a),
        (G = n),
        q === null ? ((K = null), (J = 0), ki(), X) : 0
      );
    }
    function Xd() {
      for (; q !== null && !Ke();) Zd(q);
    }
    function Zd(e) {
      var t = ml(e.alternate, e, ad);
      ((e.memoizedProps = e.pendingProps), t === null ? ef(e) : (q = t));
    }
    function Qd(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = Jc(n, t, t.pendingProps, t.type, void 0, J);
          break;
        case 11:
          t = Jc(n, t, t.pendingProps, t.type.render, t.ref, J);
          break;
        case 5:
          ss(t);
          var r = t;
          r === ca &&
            (I
              ? (ma(r), r.tag === 5 && r.stateNode != null && (F = r.stateNode))
              : (ma(r), (I = !0)));
        default:
          (Sl(n, t), (t = q = Bi(t, ad)), (t = ml(n, t, ad)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? ef(e) : (q = t));
    }
    function $d(e, t, n, r) {
      ((xa = ba = null), ss(t), (lo = null), (uo = 0));
      var i = t.return;
      try {
        if (Pc(e, i, t, n, J)) {
          ((X = 1), kc(e, qi(n, e.current)), (q = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((q = i), t);
        ((X = 1), kc(e, qi(n, e.current)), (q = null));
        return;
      }
      t.flags & 32768
        ? (I || r === 1
            ? (e = !0)
            : rd || J & 536870912
              ? (e = !1)
              : ((nd = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = Po.current),
                  r !== null && r.tag === 13 && (r.flags |= 16384))),
          tf(t, e))
        : ef(t);
    }
    function ef(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          tf(t, nd);
          return;
        }
        e = t.return;
        var n = bl(t.alternate, t, ad);
        if (n !== null) {
          q = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          q = t;
          return;
        }
        q = t = e;
      } while (t !== null);
      X === 0 && (X = 5);
    }
    function tf(e, t) {
      do {
        var n = xl(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), (q = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          q = e;
          return;
        }
        q = e = n;
      } while (e !== null);
      ((X = 6), (q = null));
    }
    function nf(e, t, n, r, a, o, s, c, l, u, d, f) {
      e.cancelPendingCommit = null;
      do df();
      while (yd !== 0);
      if (G & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        (e === K && ((q = K = null), (J = 0)),
          (xd = t),
          (bd = e),
          (Sd = n),
          (wd = a),
          (Td = r),
          rf(e, t, n, s, c, l, f));
      }
    }
    function rf(e, t, n, r, i, a, o) {
      var s = t.lanes | t.childLanes;
      if (
        ((Cd = s),
        (s |= Oi),
        xt(e, n, s, r, i, a),
        (Dd = null),
        (n & 335544064) === n
          ? ((Od = Ba(e)), (r = 10262))
          : ((Od = null), (r = 10256)),
        (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            yf(Qe, function () {
              return (ff(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (Vl = !1),
        (r = !!(t.flags & 13878)),
        t.subtreeFlags & 13878 || r)
      ) {
        ((r = D.T), (D.T = null), (i = O.p), (O.p = 2), (a = G), (G |= 4));
        try {
          hu(e, t, n);
        } finally {
          ((G = a), (O.p = i), (D.T = r));
        }
      }
      ((yd = 1),
        Vl
          ? (Ed = Mp(
              o,
              e.containerInfo,
              Od,
              sf,
              cf,
              of,
              lf,
              ff,
              af,
              null,
              null,
            ))
          : (sf(), cf(), lf()));
    }
    function af(e) {
      if (yd !== 0) {
        var t = bd.onRecoverableError;
        t(e, { componentStack: null });
      }
    }
    function of() {
      yd === 3 && ((yd = 0), Fu(xd, bd), (yd = 4));
    }
    function sf() {
      if (yd === 1) {
        yd = 0;
        var e = bd,
          t = xd,
          n = Sd,
          r = !!(t.flags & 13878);
        if (t.subtreeFlags & 13878 || r) {
          ((r = D.T), (D.T = null));
          var i = O.p;
          O.p = 2;
          var a = G;
          G |= 4;
          try {
            ((fu = pu = !1), ju(t, e, n), (n = cp));
            var o = Qr(e.containerInfo),
              s = n.focusedElem,
              c = n.selectionRange;
            if (
              o !== s &&
              s &&
              s.ownerDocument &&
              Zr(s.ownerDocument.documentElement, s)
            ) {
              if (c !== null && $r(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l),
                    (s.selectionEnd = Math.min(u, s.value.length)));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = Xr(s, h),
                      v = Xr(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode);)
                p.nodeType === 1 &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (
                typeof s.focus == `function` && s.focus(), s = 0;
                s < d.length;
                s++
              ) {
                var b = d[s];
                ((b.element.scrollLeft = b.left),
                  (b.element.scrollTop = b.top));
              }
            }
            ((gh = !!sp), (cp = sp = null));
          } finally {
            ((G = a), (O.p = i), (D.T = r));
          }
        }
        ((e.current = t), (yd = 2));
      }
    }
    function cf() {
      if (yd === 2) {
        yd = 0;
        var e = bd,
          t = xd,
          n = !!(t.flags & 8772);
        if (t.subtreeFlags & 8772 || n) {
          ((n = D.T), (D.T = null));
          var r = O.p;
          O.p = 2;
          var i = G;
          G |= 4;
          try {
            _u(e, t.alternate, t);
          } finally {
            ((G = i), (O.p = r), (D.T = n));
          }
        }
        yd = 3;
      }
    }
    function lf() {
      if (yd === 4 || yd === 3) {
        yd = 0;
        var e = Ed;
        ((Ed = null), qe());
        var t = bd,
          n = xd,
          r = Sd,
          i = Td,
          a = (r & 335544064) === r ? 10262 : 10256;
        if (
          ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0
            ? (yd = 5)
            : ((yd = 0), (xd = bd = null), uf(t, t.pendingLanes)),
          (a = t.pendingLanes),
          a === 0 && (vd = null),
          Et(r),
          (n = n.stateNode),
          it && typeof it.onCommitFiberRoot == `function`)
        )
          try {
            it.onCommitFiberRoot(rt, n, void 0, (n.current.flags & 128) == 128);
          } catch {}
        if (i !== null) {
          ((n = D.T), (a = O.p), (O.p = 2), (D.T = null));
          try {
            for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
              var c = i[s];
              o(c.value, { componentStack: c.stack });
            }
          } finally {
            ((D.T = n), (O.p = a));
          }
        }
        if (
          ((i = Dd),
          (o = Od),
          (Od = null),
          i !== null && ((Dd = null), o === null && (o = []), e !== null))
        )
          for (c = 0; c < i.length; c++)
            ((n = (0, i[c])(o)), n !== void 0 && e.finished.finally(n));
        (Sd & 3 && df(),
          Ef(t),
          (a = t.pendingLanes),
          r & 261930 && a & 42
            ? t === Ad
              ? kd++
              : ((kd = 0), (Ad = t))
            : ((kd = 0), (Ad = null)),
          Df(0, !1));
      }
    }
    function uf(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), La(t)));
    }
    function df() {
      return (
        Ed !== null && (Ed.skipTransition(), (Ed = null)),
        sf(),
        cf(),
        lf(),
        ff()
      );
    }
    function ff() {
      if (yd !== 5) return !1;
      var e = bd,
        t = Cd;
      Cd = 0;
      var n = Et(Sd),
        r = D.T,
        a = O.p;
      try {
        ((O.p = 32 > n ? 32 : n), (D.T = null), (n = wd), (wd = null));
        var o = bd,
          s = Sd;
        if (((yd = 0), (xd = bd = null), (Sd = 0), G & 6)) throw Error(i(331));
        var c = G;
        if (
          ((G |= 4),
          Xu(o.current),
          Hu(o, o.current, s, n),
          (G = c),
          Df(0, !1),
          it && typeof it.onPostCommitFiberRoot == `function`)
        )
          try {
            it.onPostCommitFiberRoot(rt, o);
          } catch {}
        return !0;
      } finally {
        ((O.p = a), (D.T = r), uf(e, t));
      }
    }
    function pf(e, t, n) {
      ((t = qi(n, t)),
        (t = jc(e.stateNode, t, 2)),
        (e = So(e, t, 2)),
        e !== null && (bt(e, 2), Ef(e)));
    }
    function Z(e, t, n) {
      if (e.tag === 3) pf(e, e, n);
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            pf(t, e, n);
            break;
          }
          if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (vd === null || !vd.has(r)))
            ) {
              ((e = qi(n, e)),
                (n = Mc(2)),
                (r = So(t, n, 2)),
                r !== null && (Nc(n, r, t, e), bt(r, 2), Ef(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function mf(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new ed();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) ||
        ((id = !0), i.add(n), (e = hf.bind(null, e, t, n)), t.then(e, e));
    }
    function hf(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        K === e &&
          (J & n) === n &&
          (X === 4 || (X === 3 && (J & 62914560) === J && 300 > Je() - md)
            ? G & 2
              ? (cd |= n)
              : Vd(e, 0)
            : (cd |= n),
          ud === J && (ud = 0)),
        Ef(e));
    }
    function gf(e, t) {
      (t === 0 && (t = vt()), (e = Mi(e, t)), e !== null && (bt(e, t), Ef(e)));
    }
    function _f(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), gf(e, n));
    }
    function vf(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      (r !== null && r.delete(t), gf(e, n));
    }
    function yf(e, t) {
      return We(e, t);
    }
    var bf = null,
      xf = null,
      Sf = !1,
      Cf = !1,
      wf = !1,
      Tf = 0;
    function Ef(e) {
      (e !== xf &&
        e.next === null &&
        (xf === null ? (bf = xf = e) : (xf = xf.next = e)),
        (Cf = !0),
        Sf || ((Sf = !0), Nf()));
    }
    function Df(e, t) {
      if (!wf && Cf) {
        wf = !0;
        do
          for (var n = !1, r = bf; r !== null;) {
            if (!t) {
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - ot(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), Mf(r, a));
              } else
                ((a = J),
                  (a = mt(
                    r,
                    r === K ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || ht(r, a) || ((n = !0), Mf(r, a)));
            }
            r = r.next;
          }
        while (n);
        wf = !1;
      }
    }
    function Of() {
      kf();
    }
    function kf() {
      Cf = Sf = !1;
      var e = 0;
      Tf !== 0 && hp() && (e = Tf);
      for (var t = Je(), n = null, r = bf; r !== null;) {
        var i = r.next,
          a = Af(r, t);
        (a === 0
          ? ((r.next = null),
            n === null ? (bf = i) : (n.next = i),
            i === null && (xf = n))
          : ((n = r), (e !== 0 || a & 3) && (Cf = !0)),
          (r = i));
      }
      ((yd !== 0 && yd !== 5) || Df(e, !1), Tf !== 0 && (Tf = 0));
    }
    function Af(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - ot(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = _t(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = K),
        (n = J),
        (n = mt(
          e,
          e === t ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        (r = e.callbackNode),
        n === 0 ||
          (e === t && (Y === 2 || Y === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && Ge(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || ht(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && Ge(r), Et(n))) {
          case 2:
          case 8:
            n = Ze;
            break;
          case 32:
            n = Qe;
            break;
          case 268435456:
            n = et;
            break;
          default:
            n = Qe;
        }
        return (
          (r = jf.bind(null, e)),
          (n = We(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && Ge(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function jf(e, t) {
      if (yd !== 0 && yd !== 5)
        return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (df() && e.callbackNode !== n) return null;
      var r = J;
      return (
        (r = mt(
          e,
          e === K ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        r === 0
          ? null
          : (Fd(e, r, t),
            Af(e, Je()),
            e.callbackNode != null && e.callbackNode === n
              ? jf.bind(null, e)
              : null)
      );
    }
    function Mf(e, t) {
      if (df()) return null;
      Fd(e, t, !0);
    }
    function Nf() {
      bp(function () {
        G & 6 ? We(Xe, Of) : kf();
      });
    }
    function Pf() {
      if (Tf === 0) {
        var e = Ua;
        (e === 0 && ((e = ut), (ut <<= 1), !(ut & 261888) && (ut = 256)),
          (Tf = e));
      }
      return Tf;
    }
    function Ff(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : Cn(e);
    }
    function If(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = Ff((i[jt] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[jt] || null)
            ? Ff(t.formAction)
            : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new Wn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (Tf !== 0) {
                    var e = new FormData(i, o);
                    rc(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      null,
                      e,
                    );
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = new FormData(i, o)),
                    rc(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      a,
                      e,
                    ));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var Lf = 0; Lf < yi.length; Lf++) {
      var Rf = yi[Lf];
      bi(Rf.toLowerCase(), `on` + (Rf[0].toUpperCase() + Rf.slice(1)));
    }
    (bi(di, `onAnimationEnd`),
      bi(fi, `onAnimationIteration`),
      bi(pi, `onAnimationStart`),
      bi(`dblclick`, `onDoubleClick`),
      bi(`focusin`, `onFocus`),
      bi(`focusout`, `onBlur`),
      bi(mi, `onTransitionRun`),
      bi(hi, `onTransitionStart`),
      bi(gi, `onTransitionCancel`),
      bi(_i, `onTransitionEnd`),
      Jt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      Jt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      Jt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      Jt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      qt(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      qt(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      qt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      qt(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      qt(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      qt(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      ));
    var zf =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      Bf = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(zf),
      );
    function Vf(e, t) {
      t = !!(t & 4);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                Ti(e);
              }
              ((i.currentTarget = null), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                Ti(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function Q(e, t) {
      var n = t[Nt];
      n === void 0 && (n = t[Nt] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Gf(t, e, 2, !1), n.add(r));
    }
    function Hf(e, t, n) {
      var r = 0;
      (t && (r |= 4), Gf(n, e, r, t));
    }
    var Uf = `_reactListening` + Math.random().toString(36).slice(2);
    function Wf(e) {
      if (!e[Uf]) {
        ((e[Uf] = !0),
          Gt.forEach(function (t) {
            t !== `selectionchange` &&
              (Bf.has(t) || Hf(t, !1, e), Hf(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Uf] || ((t[Uf] = !0), Hf(`selectionchange`, !1, t));
      }
    }
    function Gf(e, t, n, r) {
      switch (Ch(t)) {
        case 2:
          var i = _h;
          break;
        case 8:
          i = vh;
          break;
        default:
          i = yh;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !Pn ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function Kf(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i) break;
            if (s === 4)
              for (s = r.return; s !== null;) {
                var l = s.tag;
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i)
                  return;
                s = s.return;
              }
            for (; c !== null;) {
              if (((s = zt(c)), s === null)) return;
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      jn(function () {
        var r = a,
          i = En(n),
          s = [];
        a: {
          var c = vi.get(e);
          if (c !== void 0) {
            var l = Wn,
              u = e;
            switch (e) {
              case `keypress`:
                if (zn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = cr;
                break;
              case `focusin`:
                ((u = `focus`), (l = $n));
                break;
              case `focusout`:
                ((u = `blur`), (l = $n));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = $n;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = Zn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = Qn;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = dr;
                break;
              case di:
              case fi:
              case pi:
                l = er;
                break;
              case _i:
                l = fr;
                break;
              case `scroll`:
              case `scrollend`:
                l = Kn;
                break;
              case `wheel`:
                l = pr;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = tr;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = lr;
                break;
              case `submit`:
                l = ur;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = mr;
            }
            var d = !!(t & 4),
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c;
            d = [];
            for (var m = r, h; m !== null;) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = Mn(m, p)), g != null && d.push(qf(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length &&
              ((c = new l(c, u, null, n, i)),
              s.push({ event: c, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((l = e === `mouseover` || e === `pointerover`),
              (c = e === `mouseout` || e === `pointerout`),
              l &&
                n !== Tn &&
                (u = n.relatedTarget || n.fromElement) &&
                (zt(u) || u[Mt]))
            )
              break a;
            (c || l) &&
              ((u =
                i.window === i
                  ? i
                  : (l = i.ownerDocument)
                    ? l.defaultView || l.parentWindow
                    : window),
              c
                ? ((l = n.relatedTarget || n.toElement),
                  (c = r),
                  (l = l ? zt(l) : null),
                  l !== null &&
                    ((f = o(l)),
                    (d = l.tag),
                    l !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (l = null))
                : ((c = null), (l = r)),
              c !== l &&
                ((d = Zn),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = lr),
                  (g = `onPointerLeave`),
                  (p = `onPointerEnter`),
                  (m = `pointer`)),
                (f = c == null ? u : Vt(c)),
                (h = l == null ? u : Vt(l)),
                (u = new d(g, m + `leave`, c, n, i)),
                (u.target = f),
                (u.relatedTarget = h),
                (g = null),
                zt(i) === r &&
                  ((d = new d(p, m + `enter`, l, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                (d = c && l ? te(c, l, Yf) : null),
                c !== null && Xf(s, u, c, d, !1),
                l !== null && f !== null && Xf(s, f, l, d, !0)));
          }
          a: {
            if (
              ((c = r ? Vt(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var _ = Pr;
            else if (Or(c)) {
              if (Fr) _ = Wr;
              else {
                _ = Hr;
                var v = Vr;
              }
            } else
              ((l = c.nodeName),
                !l ||
                l.toLowerCase() !== `input` ||
                (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && bn(r.elementType) && (_ = Pr)
                  : (_ = Ur));
            if ((_ &&= _(e, r))) {
              kr(s, _, n, i);
              break a;
            }
            v && v(e, c, r);
          }
          switch (((v = r ? Vt(r) : window), e)) {
            case `focusin`:
              (Or(v) || v.contentEditable === `true`) &&
                ((ti = v), (ni = r), (ri = null));
              break;
            case `focusout`:
              ri = ni = ti = null;
              break;
            case `mousedown`:
              ii = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((ii = !1), ai(s, n, i));
              break;
            case `selectionchange`:
              if (ei) break;
            case `keydown`:
            case `keyup`:
              ai(s, n, i);
          }
          var y;
          if (gr)
            b: {
              switch (e) {
                case `compositionstart`:
                  var b = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  b = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  b = `onCompositionUpdate`;
                  break b;
              }
              b = void 0;
            }
          else
            wr
              ? Sr(e, n) && (b = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (b = `onCompositionStart`);
          (b &&
            (yr &&
              n.locale !== `ko` &&
              (wr || b !== `onCompositionStart`
                ? b === `onCompositionEnd` && wr && (y = Rn())
                : ((Fn = i),
                  (In = `value` in Fn ? Fn.value : Fn.textContent),
                  (wr = !0))),
            (v = Jf(r, b)),
            0 < v.length &&
              ((b = new nr(b, e, null, n, i)),
              s.push({ event: b, listeners: v }),
              y ? (b.data = y) : ((y = Cr(n)), y !== null && (b.data = y)))),
            (y = vr ? Tr(e, n) : Er(e, n)) &&
              ((b = Jf(r, `onBeforeInput`)),
              0 < b.length &&
                ((v = new nr(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: v, listeners: b }),
                (v.data = y))),
            If(s, e, r, n, i));
        }
        Vf(s, t);
      });
    }
    function qf(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Jf(e, t) {
      for (var n = t + `Capture`, r = []; e !== null;) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = Mn(e, n)),
            i != null && r.unshift(qf(e, i, a)),
            (i = Mn(e, t)),
            i != null && r.push(qf(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Yf(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Xf(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = Mn(n, a)), l != null && o.unshift(qf(n, l, c)))
            : i || ((l = Mn(n, a)), l != null && o.push(qf(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var Zf = /\r\n?/g,
      Qf = /\u0000|\uFFFD/g;
    function $f(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          Zf,
          `
`,
        )
        .replace(Qf, ``);
    }
    function ep(e, t) {
      return ((t = $f(t)), $f(e) === t);
    }
    function $(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          if (typeof r == `string`)
            t === `body` || (t === `textarea` && r === ``) || gn(e, r);
          else if (typeof r == `number` || typeof r == `bigint`)
            t !== `body` && gn(e, `` + r);
          else return;
          break;
        case `className`:
          tn(e, `class`, r);
          break;
        case `tabIndex`:
          tn(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          tn(e, n, r);
          break;
        case `style`:
          yn(e, r, o);
          return;
        case `data`:
          if (t !== `object`) {
            tn(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (
            (r === `` && (t !== `a` || n !== `href`)) ||
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = Cn(r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          }
          if (
            (typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && $(e, t, `name`, a.name, a, null),
                  $(e, t, `formEncType`, a.formEncType, a, null),
                  $(e, t, `formMethod`, a.formMethod, a, null),
                  $(e, t, `formTarget`, a.formTarget, a, null))
                : ($(e, t, `encType`, a.encType, a, null),
                  $(e, t, `method`, a.method, a, null),
                  $(e, t, `target`, a.target, a, null))),
            r == null || typeof r == `symbol` || typeof r == `boolean`)
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = Cn(r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = wn);
          return;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          return;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          return;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              o?.__html !== n && (e.innerHTML = n);
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = Cn(r)),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `credentialless`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r &&
                r != null &&
                typeof r != `function` &&
                typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null &&
          typeof r != `function` &&
          typeof r != `symbol` &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null ||
          typeof r == `function` ||
          typeof r == `symbol` ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), en(e, `popover`, r));
          break;
        case `xlinkActuate`:
          nn(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          nn(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          nn(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          nn(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          nn(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          nn(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          nn(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          nn(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          nn(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          en(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          return;
        default:
          if (
            !(2 < n.length) ||
            (n[0] !== `o` && n[0] !== `O`) ||
            (n[1] !== `n` && n[1] !== `N`)
          )
            ((n = xn.get(n) || n), en(e, n, r));
          else return;
      }
      M = !0;
    }
    function tp(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          yn(e, r, o);
          return;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              o?.__html !== n && (e.innerHTML = n);
            }
          }
          break;
        case `children`:
          if (typeof r == `string`) gn(e, r);
          else if (typeof r == `number` || typeof r == `bigint`) gn(e, `` + r);
          else return;
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          return;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          return;
        case `onClick`:
          r != null && (e.onclick = wn);
          return;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          return;
        case `innerText`:
        case `textContent`:
          return;
        default:
          if (!Kt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (o = n.slice(2, a ? n.length - 7 : void 0)),
                (t = e[jt] || null),
                (t = t == null ? null : t[n]),
                typeof t == `function` && e.removeEventListener(o, t, a),
                typeof r == `function`)
              ) {
                (typeof t != `function` &&
                  t !== null &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(o, r, a));
                break a;
              }
              ((M = !0),
                n in e
                  ? (e[n] = r)
                  : !0 === r
                    ? e.setAttribute(n, ``)
                    : en(e, n, r));
            }
          return;
      }
      M = !0;
    }
    function np(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          (Q(`error`, e), Q(`load`, e));
          var r = !1,
            a = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    a = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t));
                  default:
                    $(e, t, o, s, n, null);
                }
            }
          (a && $(e, t, `srcSet`, n.srcSet, n, null),
            r && $(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          Q(`invalid`, e);
          var c = (o = s = a = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t));
                    break;
                  default:
                    $(e, t, r, d, n, null);
                }
            }
          dn(e, o, c, l, u, s, a, !1);
          return;
        case `select`:
          for (a in (Q(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  $(e, t, a, c, n, null);
              }
          ((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && pn(e, !!r, n, !0) : pn(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in (Q(`invalid`, e), (o = a = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  a = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91));
                  break;
                default:
                  $(e, t, s, c, n, null);
              }
          hn(e, r, a, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected =
                    r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  $(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Q(`cancel`, e), Q(`close`, e));
          break;
        case `iframe`:
        case `object`:
          Q(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < zf.length; r++) Q(zf[r], e);
          break;
        case `image`:
          (Q(`error`, e), Q(`load`, e));
          break;
        case `details`:
          Q(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (Q(`error`, e), Q(`load`, e));
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t));
                default:
                  $(e, t, u, r, n, null);
              }
          return;
        default:
          if (bn(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                ((r = n[d]), r !== void 0 && tp(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n)
        n.hasOwnProperty(c) &&
          ((r = n[c]), r != null && $(e, t, c, r, n, null));
    }
    var rp = {};
    function ip(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || $(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  (m !== f && (M = !0), (o = m));
                  break;
                case `name`:
                  (m !== f && (M = !0), (a = m));
                  break;
                case `checked`:
                  (m !== f && (M = !0), (u = m));
                  break;
                case `defaultChecked`:
                  (m !== f && (M = !0), (d = m));
                  break;
                case `value`:
                  (m !== f && (M = !0), (s = m));
                  break;
                case `defaultValue`:
                  (m !== f && (M = !0), (c = m));
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t));
                  break;
                default:
                  m !== f && $(e, t, p, m, r, f);
              }
          }
          N(e, s, c, l, u, d, o, a);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || $(e, t, o, null, r, l);
              }
          for (a in r)
            if (
              ((o = r[a]),
              (l = n[a]),
              r.hasOwnProperty(a) && (o != null || l != null))
            )
              switch (a) {
                case `value`:
                  (o !== l && (M = !0), (p = o));
                  break;
                case `defaultValue`:
                  (o !== l && (M = !0), (c = o));
                  break;
                case `multiple`:
                  (o !== l && (M = !0), (s = o));
                default:
                  o !== l && $(e, t, a, o, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n &&
                (t == null ? pn(e, !!n, n ? [] : ``, !1) : pn(e, !!n, t, !0))
              : pn(e, !!n, p, !1));
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (
              ((a = n[c]),
              n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c))
            )
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  $(e, t, c, null, r, a);
              }
          for (s in r)
            if (
              ((a = r[s]),
              (o = n[s]),
              r.hasOwnProperty(s) && (a != null || o != null))
            )
              switch (s) {
                case `value`:
                  (a !== o && (M = !0), (p = a));
                  break;
                case `defaultValue`:
                  (a !== o && (M = !0), (m = a));
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91));
                  break;
                default:
                  a !== o && $(e, t, s, a, r, o);
              }
          mn(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (
              ((p = n[h]),
              n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
            )
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  $(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]),
              (m = n[l]),
              r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  (p !== m && (M = !0),
                    (e.selected =
                      p && typeof p != `function` && typeof p != `symbol`));
                  break;
                default:
                  $(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) &&
                p != null &&
                !r.hasOwnProperty(g) &&
                $(e, t, g, null, r, p));
          for (u in r)
            if (
              ((p = r[u]),
              (m = n[u]),
              r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t));
                  break;
                default:
                  $(e, t, u, p, r, m);
              }
          return;
        default:
          if (bn(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  tp(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  tp(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) &&
            p != null &&
            !r.hasOwnProperty(v) &&
            $(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) ||
            p === m ||
            (p == null && m == null) ||
            $(e, t, f, p, r, m));
    }
    function ap(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function op() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && ap(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u &&
                ap(d) &&
                ((c = c.responseEnd),
                (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e))
              break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection &&
        ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var sp = null,
      cp = null;
    function lp(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function up(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function dp(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function fp(e, t, n, r) {
      return (
        (n = lp(n).createElement(e)),
        (n[At] = r),
        (n[jt] = t),
        np(n, e, t),
        Ut(n),
        n
      );
    }
    function pp(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var mp = null;
    function hp() {
      var e = window.event;
      return e && e.type === `popstate`
        ? e !== mp && ((mp = e), !0)
        : ((mp = null), !1);
    }
    var gp = typeof setTimeout == `function` ? setTimeout : void 0,
      _p = typeof clearTimeout == `function` ? clearTimeout : void 0,
      vp = typeof Promise == `function` ? Promise : void 0,
      yp =
        typeof requestAnimationFrame == `function` ? requestAnimationFrame : gp,
      bp =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : vp === void 0
            ? gp
            : function (e) {
                return vp.resolve(null).then(e).catch(xp);
              };
    function xp(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Sp(e) {
      return e === `head`;
    }
    function Cp(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8)) {
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              (e.removeChild(i), Hh(t));
              return;
            }
            r--;
          } else if (
            n === `$` ||
            n === `$?` ||
            n === `$~` ||
            n === `$!` ||
            n === `&`
          )
            r++;
          else if (n === `html`) _m(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), _m(n));
            for (var a = n.firstChild; a;) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[It] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && _m(e.ownerDocument.body);
        }
        n = i;
      } while (n);
      Hh(t);
    }
    function wp(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        ) {
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        }
        n = r;
      } while (n);
    }
    function Tp(e, t, n) {
      if (
        ((t = CSS.escape(t) === t ? t : `r-` + btoa(t).replace(/=/g, ``)),
        (e.style.viewTransitionName = t),
        n != null && (e.style.viewTransitionClass = n),
        (n = getComputedStyle(e)),
        n.display === `inline`)
      ) {
        if (((t = e.getClientRects()), t.length === 1)) var r = 1;
        else
          for (var i = (r = 0); i < t.length; i++) {
            var a = t[i];
            0 < a.width && 0 < a.height && r++;
          }
        r === 1 &&
          ((e = e.style),
          (e.display = t.length === 1 ? `inline-block` : `block`),
          (e.marginTop = `-` + n.paddingTop),
          (e.marginBottom = `-` + n.paddingBottom));
      }
    }
    function Ep(e, t) {
      ((e = e.style), (t = t.style));
      var n =
        t == null
          ? null
          : t.hasOwnProperty(`viewTransitionName`)
            ? t.viewTransitionName
            : t.hasOwnProperty(`view-transition-name`)
              ? t[`view-transition-name`]
              : null;
      ((e.viewTransitionName =
        n == null || typeof n == `boolean` ? `` : (`` + n).trim()),
        (n =
          t == null
            ? null
            : t.hasOwnProperty(`viewTransitionClass`)
              ? t.viewTransitionClass
              : t.hasOwnProperty(`view-transition-class`)
                ? t[`view-transition-class`]
                : null),
        (e.viewTransitionClass =
          n == null || typeof n == `boolean` ? `` : (`` + n).trim()),
        e.display === `inline-block` &&
          (t == null
            ? (e.display = e.margin = ``)
            : ((n = t.display),
              (e.display = n == null || typeof n == `boolean` ? `` : n),
              (n = t.margin),
              n == null
                ? ((n = t.hasOwnProperty(`marginTop`)
                    ? t.marginTop
                    : t[`margin-top`]),
                  (e.marginTop = n == null || typeof n == `boolean` ? `` : n),
                  (t = t.hasOwnProperty(`marginBottom`)
                    ? t.marginBottom
                    : t[`margin-bottom`]),
                  (e.marginBottom =
                    t == null || typeof t == `boolean` ? `` : t))
                : (e.margin = n))));
    }
    function Dp(e, t, n) {
      return (
        (n = n.ownerDocument.defaultView),
        {
          rect: e,
          abs: t.position === `absolute` || t.position === `fixed`,
          clip:
            t.clipPath !== `none` ||
            t.overflow !== `visible` ||
            t.filter !== `none` ||
            t.mask !== `none` ||
            t.mask !== `none` ||
            t.borderRadius !== `0px`,
          view:
            0 <= e.bottom &&
            0 <= e.right &&
            e.top <= n.innerHeight &&
            e.left <= n.innerWidth,
        }
      );
    }
    function Op(e) {
      return Dp(e.getBoundingClientRect(), getComputedStyle(e), e);
    }
    function kp(e) {
      var t = e.getBoundingClientRect();
      t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
      var n = getComputedStyle(e);
      return Dp(t, n, e);
    }
    function Ap(e) {
      return e.documentElement.clientHeight;
    }
    function jp(e) {
      (this.addEventListener(`load`, e), this.addEventListener(`error`, e));
    }
    function Mp(e, t, n, r, i, a, o, s, c) {
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      try {
        var u = l.startViewTransition({
          update: function () {
            var t = l.defaultView,
              n = t.navigation && t.navigation.transition,
              o = l.fonts.status;
            r();
            var s = [];
            if (
              (o === `loaded` &&
                (Ap(l), l.fonts.status === `loading` && s.push(l.fonts.ready)),
              (o = s.length),
              e !== null)
            )
              for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
                var f = c[d];
                if (!f.complete) {
                  var p = f.getBoundingClientRect();
                  if (
                    0 < p.bottom &&
                    0 < p.right &&
                    p.top < t.innerHeight &&
                    p.left < t.innerWidth
                  ) {
                    if (((u += Xm(f)), u > $m)) {
                      s.length = o;
                      break;
                    }
                    ((f = new Promise(jp.bind(f))), s.push(f));
                  }
                }
              }
            if (0 < s.length)
              return (
                (t = Promise.race([
                  Promise.all(s),
                  new Promise(function (e) {
                    return setTimeout(e, 500);
                  }),
                ]).then(i, i)),
                (n ? Promise.allSettled([n.finished, t]) : t).then(a, a)
              );
            if ((i(), n)) return n.finished.then(a, a);
            a();
          },
          types: n,
        });
        l.__reactViewTransition = u;
        var d = [];
        return (
          u.ready.then(
            function () {
              for (
                var e = l.documentElement.getAnimations({ subtree: !0 }), t = 0;
                t < e.length;
                t++
              ) {
                var n = e[t],
                  r = n.effect,
                  i = r.pseudoElement;
                if (i != null && i.startsWith(`::view-transition`)) {
                  (d.push(n), (n = r.getKeyframes()));
                  for (var a = (i = void 0), s = !0, c = 0; c < n.length; c++) {
                    var u = n[c],
                      f = u.width;
                    if (i === void 0) i = f;
                    else if (i !== f) {
                      s = !1;
                      break;
                    }
                    if (((f = u.height), a === void 0)) a = f;
                    else if (a !== f) {
                      s = !1;
                      break;
                    }
                    (delete u.width,
                      delete u.height,
                      u.transform === `none` && delete u.transform);
                  }
                  s &&
                    i !== void 0 &&
                    a !== void 0 &&
                    (r.setKeyframes(n),
                    (s = getComputedStyle(r.target, r.pseudoElement)),
                    s.width !== i || s.height !== a) &&
                    ((s = n[0]),
                    (s.width = i),
                    (s.height = a),
                    (s = n[n.length - 1]),
                    (s.width = i),
                    (s.height = a),
                    r.setKeyframes(n));
                }
              }
              o();
            },
            function (e) {
              l.__reactViewTransition === u && (l.__reactViewTransition = null);
              try {
                if (typeof e == `object` && e)
                  switch (e.name) {
                    case `InvalidStateError`:
                      (e.message ===
                        `View transition was skipped because document visibility state is hidden.` ||
                        e.message ===
                          `Skipping view transition because document visibility state has become hidden.` ||
                        e.message ===
                          `Skipping view transition because viewport size changed.` ||
                        e.message ===
                          `Transition was aborted because of invalid state`) &&
                        (e = null);
                  }
                e !== null && c(e);
              } finally {
                (r(), i(), o());
              }
            },
          ),
          u.finished.finally(function () {
            for (var e = 0; e < d.length; e++) d[e].cancel();
            (l.__reactViewTransition === u && (l.__reactViewTransition = null),
              s());
          }),
          u
        );
      } catch {
        return (r(), i(), o(), null);
      }
    }
    function Np(e, t) {
      ((this._scope = document.documentElement),
        (this._selector = `::view-transition-` + e + `(` + t + `)`));
    }
    ((Np.prototype.animate = function (e, t) {
      return (
        (t = typeof t == `number` ? { duration: t } : T({}, t)),
        (t.pseudoElement = this._selector),
        this._scope.animate(e, t)
      );
    }),
      (Np.prototype.getAnimations = function () {
        for (
          var e = this._scope,
            t = this._selector,
            n = e.getAnimations({ subtree: !0 }),
            r = [],
            i = 0;
          i < n.length;
          i++
        ) {
          var a = n[i].effect;
          a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
        }
        return r;
      }),
      (Np.prototype.getComputedStyle = function () {
        return getComputedStyle(this._scope, this._selector);
      }));
    function Pp(e) {
      return {
        name: e,
        group: new Np(`group`, e),
        imagePair: new Np(`image-pair`, e),
        old: new Np(`old`, e),
        new: new Np(`new`, e),
      };
    }
    function Fp(e) {
      ((this._fragmentFiber = e),
        (this._observers = this._eventListeners = null));
    }
    Fp.prototype.addEventListener = function (e, t, n) {
      var r = null,
        i = null;
      if (!(
        n != null &&
        typeof n != `boolean` &&
        ((r = n.signal || null), r !== null && r.aborted)
      )) {
        this._eventListeners === null && (this._eventListeners = []);
        var a = this._eventListeners;
        if (Bp(a, e, t, n) === -1) {
          var o = this,
            s = t;
          (n != null &&
            typeof n != `boolean` &&
            !0 === n.once &&
            (s = function (r) {
              (o.removeEventListener(e, t, n),
                typeof t == `function` ? t.call(this, r) : t.handleEvent(r));
            }),
            r !== null &&
              ((i = o.removeEventListener.bind(o, e, t, n)),
              r.addEventListener(`abort`, i, { once: !0 }),
              (i = r.removeEventListener.bind(r, `abort`, i))),
            (r = Rp(n)),
            a.push({
              type: e,
              listener: t,
              optionsOrUseCapture: n,
              attachedListener: s,
              cleanup: i,
            }),
            f(this._fragmentFiber.child, !1, Ip, e, s, r));
        }
        this._eventListeners = a;
      }
    };
    function Ip(e, t, n, r) {
      return (b(e).addEventListener(t, n, r), !1);
    }
    Fp.prototype.removeEventListener = function (e, t, n) {
      var r = this._eventListeners;
      if (r !== null && ((t = Bp(r, e, t, n)), t !== -1)) {
        var i = r[t];
        n = i.attachedListener;
        var a = i.cleanup;
        ((i = Rp(i.optionsOrUseCapture)),
          f(this._fragmentFiber.child, !1, Lp, e, n, i),
          r.splice(t, 1),
          a !== null && a());
      }
    };
    function Lp(e, t, n, r) {
      return (b(e).removeEventListener(t, n, r), !1);
    }
    function Rp(e) {
      return e != null &&
        typeof e != `boolean` &&
        (!0 === e.once || e.signal instanceof AbortSignal)
        ? { capture: e.capture, passive: e.passive }
        : e;
    }
    function zp(e) {
      return e == null
        ? `c=0`
        : typeof e == `boolean`
          ? `c=` + (e ? `1` : `0`)
          : `c=` + (e.capture ? `1` : `0`);
    }
    function Bp(e, t, n, r) {
      if (e.length === 0) return -1;
      r = zp(r);
      for (var i = 0; i < e.length; i++) {
        var a = e[i];
        if (a.type === t && a.listener === n && zp(a.optionsOrUseCapture) === r)
          return i;
      }
      return -1;
    }
    ((Fp.prototype.dispatchEvent = function (e) {
      var t = m(this._fragmentFiber);
      if (t === null) return !0;
      t = b(t);
      var n = this._eventListeners;
      if ((n !== null && 0 < n.length) || !e.bubbles) {
        var r =
          t.nodeType === 9 ? t.createComment(``) : document.createTextNode(``);
        if (n)
          for (var i = 0; i < n.length; i++) {
            var a = n[i];
            r.addEventListener(
              a.type,
              a.attachedListener,
              Rp(a.optionsOrUseCapture),
            );
          }
        if ((t.appendChild(r), (e = r.dispatchEvent(e)), n))
          for (i = 0; i < n.length; i++)
            ((a = n[i]),
              r.removeEventListener(
                a.type,
                a.attachedListener,
                Rp(a.optionsOrUseCapture),
              ));
        return (t.removeChild(r), e);
      }
      return t.dispatchEvent(e);
    }),
      (Fp.prototype.focus = function (e) {
        f(this._fragmentFiber.child, !0, Vp, e, void 0, void 0);
      }));
    function Vp(e, t) {
      return e.tag !== 6 && ((e = b(e)), pm(e, t));
    }
    Fp.prototype.focusLast = function (e) {
      var t = [];
      f(this._fragmentFiber.child, !0, Hp, t, void 0, void 0);
      for (var n = t.length - 1; 0 <= n && !Vp(t[n], e); n--);
    };
    function Hp(e, t) {
      return (t.push(e), !1);
    }
    Fp.prototype.blur = function () {
      var e = m(this._fragmentFiber);
      e !== null &&
        ((e = b(e)),
        (e = lp(e).activeElement),
        e !== null && f(this._fragmentFiber.child, !1, Up, e, void 0, void 0));
    };
    function Up(e, t) {
      return (
        e.tag !== 6 &&
        ((e = b(e)), e === t || e.contains(t) ? (t.blur(), !0) : !1)
      );
    }
    Fp.prototype.observeUsing = function (e) {
      (this._observers === null && (this._observers = new Set()),
        this._observers.add(e),
        f(this._fragmentFiber.child, !1, Wp, e, void 0, void 0));
    };
    function Wp(e, t) {
      return (e.tag === 6 || ((e = b(e)), t.observe(e)), !1);
    }
    Fp.prototype.unobserveUsing = function (e) {
      var t = this._observers;
      if (t !== null && t.has(e)) {
        (t.delete(e), f(this._fragmentFiber.child, !1, Gp, e, void 0, void 0));
        for (var n = (t = 0); n < Kp.length; n++) {
          var r = Kp[n];
          r.fragmentInstance === this && r.observer === e
            ? e.unobserve(r.instance)
            : (Kp[t++] = r);
        }
        Kp.length = t;
      }
    };
    function Gp(e, t) {
      return (e.tag === 6 || ((e = b(e)), t.unobserve(e)), !1);
    }
    var Kp = [],
      qp = !1;
    function Jp(e, t, n) {
      (Kp.push({ fragmentInstance: e, observer: t, instance: n }),
        qp ||
          ((qp = !0),
          mm(function () {
            qp = !1;
            var e = Kp;
            Kp = [];
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              n.observer.unobserve(n.instance);
            }
          })));
    }
    Fp.prototype.getClientRects = function () {
      var e = [];
      return (f(this._fragmentFiber.child, !1, Yp, e, void 0, void 0), e);
    };
    function Yp(e, t) {
      if (e.tag === 6) {
        e = e.stateNode;
        var n = e.ownerDocument.createRange();
        (n.selectNodeContents(e), t.push.apply(t, n.getClientRects()));
      } else ((e = b(e)), t.push.apply(t, e.getClientRects()));
      return !1;
    }
    ((Fp.prototype.getRootNode = function (e) {
      var t = m(this._fragmentFiber);
      return t === null ? this : b(t).getRootNode(e);
    }),
      (Fp.prototype.compareDocumentPosition = function (e) {
        var t = m(this._fragmentFiber);
        if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
        var n = [];
        f(this._fragmentFiber.child, !1, Hp, n, void 0, void 0);
        var r = b(t);
        if (n.length === 0) {
          if (((n = r), g(this._fragmentFiber))) {
            a: {
              for (t = this._fragmentFiber.return; t !== null;) {
                if (t.tag === 4) {
                  t = t.stateNode.containerInfo;
                  break a;
                }
                if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
                t = t.return;
              }
              t = null;
            }
            t != null && (n = t);
          }
          t = this._fragmentFiber;
          var i = (r = n.compareDocumentPosition(e));
          return (
            n === e
              ? (i = Node.DOCUMENT_POSITION_CONTAINS)
              : r & Node.DOCUMENT_POSITION_CONTAINED_BY &&
                ((n = v(t)[1]),
                n === null
                  ? (i = Node.DOCUMENT_POSITION_PRECEDING)
                  : ((e = b(n).compareDocumentPosition(e)),
                    (i =
                      e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING
                        ? Node.DOCUMENT_POSITION_FOLLOWING
                        : Node.DOCUMENT_POSITION_PRECEDING))),
            (i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
          );
        }
        ((t = b(n[0])), (i = b(n[n.length - 1])));
        var a = g(this._fragmentFiber) ? t.parentElement : r;
        if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
        ((r =
          a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY),
          (a =
            a.compareDocumentPosition(i) &
            Node.DOCUMENT_POSITION_CONTAINED_BY));
        var o = t.compareDocumentPosition(e),
          s = i.compareDocumentPosition(e),
          c =
            o & Node.DOCUMENT_POSITION_CONTAINED_BY ||
            s & Node.DOCUMENT_POSITION_CONTAINED_BY;
        return (
          (s =
            r &&
            a &&
            o & Node.DOCUMENT_POSITION_FOLLOWING &&
            s & Node.DOCUMENT_POSITION_PRECEDING),
          (t =
            (r && t === e) || (a && i === e) || c || s
              ? Node.DOCUMENT_POSITION_CONTAINED_BY
              : (!r && t === e) || (!a && i === e)
                ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
                : o),
          t & Node.DOCUMENT_POSITION_DISCONNECTED ||
          t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC ||
          Xp(t, this._fragmentFiber, n[0], n[n.length - 1], e)
            ? t
            : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
        );
      }));
    function Xp(e, t, n, r, i) {
      var a = zt(i);
      if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        if ((n = !!a))
          a: {
            for (; a !== null;) {
              if (a.tag === 7 && (a === t || a.alternate === t)) {
                n = !0;
                break a;
              }
              a = a.return;
            }
            n = !1;
          }
        return n;
      }
      if (e & Node.DOCUMENT_POSITION_CONTAINS) {
        if (a === null)
          return (
            (a = i.ownerDocument),
            i === a || i === a.documentElement || i === a.body
          );
        a: {
          for (a = t, t = m(t); a !== null;) {
            if (!(
              (a.tag !== 5 && a.tag !== 3 && a.tag !== 27) ||
              (a !== t && a.alternate !== t)
            )) {
              a = !0;
              break a;
            }
            a = a.return;
          }
          a = !1;
        }
        return a;
      }
      return e & Node.DOCUMENT_POSITION_PRECEDING
        ? ((t = !!a) &&
            !(t = a === n) &&
            ((t = te(n, a, w)),
            t === null
              ? (t = !1)
              : (f(t, !0, C, a, n), (a = x), (x = null), (t = a !== null))),
          t)
        : e & Node.DOCUMENT_POSITION_FOLLOWING
          ? ((t = !!a) &&
              !(t = a === r) &&
              ((t = te(r, a, w)),
              t === null
                ? (t = !1)
                : (f(t, !0, ee, a, r),
                  (a = x),
                  (S = x = null),
                  (t = a !== null))),
            t)
          : !1;
    }
    function Zp(e, t) {
      var n = e.ownerDocument.createRange();
      (n.selectNodeContents(e),
        (e = n.getBoundingClientRect()),
        window.scrollTo(
          window.scrollX + e.left,
          t
            ? window.scrollY + e.top
            : window.scrollY + e.bottom - window.innerHeight,
        ));
    }
    Fp.prototype.scrollIntoView = function (e) {
      if (typeof e == `object`) throw Error(i(566));
      var t = [];
      f(this._fragmentFiber.child, !1, Hp, t, void 0, void 0);
      var n = !1 !== e;
      if (t.length === 0) {
        var r = v(this._fragmentFiber);
        if (
          ((r = n ? r[1] || r[0] || m(this._fragmentFiber) : r[0] || r[1]),
          r === null)
        )
          return;
        if (r.tag === 6) {
          ((e = b(r)), Zp(e, n));
          return;
        }
        if (((r = b(r)), r.nodeType !== 9)) {
          if (r.nodeType === 11) {
            ((n = `host` in r ? r.host : null),
              n !== null && n.scrollIntoView(e));
            return;
          }
          r.scrollIntoView(e);
        }
      }
      for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
        var a = t[r];
        (a.tag === 6 ? ((a = b(a)), Zp(a, n)) : b(a).scrollIntoView(e),
          (r += n ? -1 : 1));
      }
    };
    function Qp(e, t) {
      return ((e = b(e)), $p(e, t), !1);
    }
    function $p(e, t) {
      ((e.reactFragments ??= new Set()), e.reactFragments.add(t));
    }
    function em(e, t) {
      var n = t._eventListeners;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          e.addEventListener(
            i.type,
            i.attachedListener,
            Rp(i.optionsOrUseCapture),
          );
        }
      e.nodeType !== 3 &&
        ((n = t._observers),
        n !== null &&
          n.forEach(function (n) {
            for (var r = 0, i = 0; i < Kp.length; i++) {
              var a = Kp[i];
              (a.fragmentInstance !== t ||
                a.observer !== n ||
                a.instance !== e) &&
                (Kp[r++] = a);
            }
            ((Kp.length = r), n.observe(e));
          }),
        $p(e, t));
    }
    function tm(e, t) {
      var n = t._eventListeners;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          e.removeEventListener(
            i.type,
            i.attachedListener,
            Rp(i.optionsOrUseCapture),
          );
        }
      e.nodeType !== 3 &&
        ((n = t._observers),
        n !== null &&
          n.forEach(function (n) {
            typeof n.rootMargin == `string` ? Jp(t, n, e) : n.unobserve(e);
          }),
        e.reactFragments != null && e.reactFragments.delete(t));
    }
    function nm(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (nm(n), Rt(n));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function rm(e, t, n, r) {
      for (; e.nodeType === 1;) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r) {
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        } else if (!e[It])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !==
                    (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !==
                    (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = lm(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function im(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3;)
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !n) ||
          ((e = lm(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function am(e, t) {
      for (; e.nodeType !== 8;)
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !t) ||
          ((e = lm(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function om(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function sm(e) {
      return (
        e.data === `$!` ||
        (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
      );
    }
    function cm(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          (t(), n.removeEventListener(`DOMContentLoaded`, r));
        };
        (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
      }
    }
    function lm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var um = null;
    function dm(e) {
      e = e.nextSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return lm(e.nextSibling);
            t--;
          } else
            (n !== `$` &&
              n !== `$!` &&
              n !== `$?` &&
              n !== `$~` &&
              n !== `&`) ||
              t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function fm(e) {
      e = e.previousSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (
            n === `$` ||
            n === `$!` ||
            n === `$?` ||
            n === `$~` ||
            n === `&`
          ) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function pm(e, t) {
      function n() {
        r = !0;
      }
      if (e.ownerDocument.activeElement === e) return !0;
      var r = !1;
      try {
        (e.ownerDocument.addEventListener(`focus`, n, !0),
          (e.focus || HTMLElement.prototype.focus).call(e, t));
      } finally {
        e.ownerDocument.removeEventListener(`focus`, n, !0);
      }
      return r;
    }
    function mm(e) {
      yp(function () {
        yp(function (t) {
          return e(t);
        });
      });
    }
    function hm(e, t, n) {
      switch (((t = lp(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454));
          return e;
        default:
          throw Error(i(451));
      }
    }
    function gm(e, t, n) {
      for (var r in n) {
        var i = n[r];
        n.hasOwnProperty(r) && i != null && $(e, t, r, null, rp, i);
      }
      (n.dangerouslySetInnerHTML != null && (e.textContent = ``),
        e.onclick === wn && (e.onclick = null),
        Rt(e));
    }
    function _m(e) {
      for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
      Rt(e);
    }
    var vm = new Map(),
      ym = new Set();
    function bm(e) {
      if (typeof e.getRootNode == `function`) {
        var t = e.getRootNode();
        if (t.nodeType === 9 || t.nodeType === 11) return t;
      }
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    var xm = O.d;
    O.d = { f: Sm, r: Cm, D: Em, C: Dm, L: Om, m: km, X: jm, S: Am, M: Mm };
    function Sm() {
      var e = xm.f(),
        t = zd();
      return e || t;
    }
    function Cm(e) {
      var t = Bt(e);
      t !== null && t.tag === 5 && t.type === `form` ? ac(t) : xm.r(e);
    }
    var wm = typeof document > `u` ? null : document;
    function Tm(e, t, n) {
      var r = wm;
      if (r && typeof t == `string` && t) {
        var i = un(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          ym.has(i) ||
            (ym.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)),
              np(t, `link`, e),
              Ut(t),
              r.head.appendChild(t))));
      }
    }
    function Em(e) {
      (xm.D(e), Tm(`dns-prefetch`, e, null));
    }
    function Dm(e, t) {
      (xm.C(e, t), Tm(`preconnect`, e, t));
    }
    function Om(e, t, n) {
      xm.L(e, t, n);
      var r = wm;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + un(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + un(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` &&
              (i += `[imagesizes="` + un(n.imageSizes) + `"]`))
          : (i += `[href="` + un(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Pm(e);
            break;
          case `script`:
            a = Rm(e);
        }
        if (!(
          vm.has(a) ||
          ((e = T(
            {
              rel: `preload`,
              href: t === `image` && n && n.imageSrcSet ? void 0 : e,
              as: t,
            },
            n,
          )),
          vm.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(Fm(a))) ||
            (t === `script` && r.querySelector(zm(a))))
        )) {
          var o = r.createElement(`link`);
          (np(o, `link`, e),
            t === `style` &&
              ((o[Lt] = !0),
              (o.onload = o.onerror =
                function () {
                  Wt(o);
                })),
            Ut(o),
            r.head.appendChild(o));
        }
      }
    }
    function km(e, t) {
      xm.m(e, t);
      var n = wm;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i =
            `link[rel="modulepreload"][as="` +
            un(r) +
            `"][href="` +
            un(e) +
            `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Rm(e);
        }
        if (
          !vm.has(a) &&
          ((e = T({ rel: `modulepreload`, href: e }, t)),
          vm.set(a, e),
          n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(zm(a))) return;
          }
          ((r = n.createElement(`link`)),
            np(r, `link`, e),
            Ut(r),
            n.head.appendChild(r));
        }
      }
    }
    function Am(e, t, n) {
      xm.S(e, t, n);
      var r = wm;
      if (r && e) {
        var i = Ht(r).hoistableStyles,
          a = Pm(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(Fm(a)))) s.loading = 5;
          else {
            ((e = T({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = vm.get(a)) && Hm(e, n));
            var c = (o = r.createElement(`link`));
            (Ut(c),
              np(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ((c.onload = e), (c.onerror = t));
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Vm(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }),
            i.set(a, o));
        }
      }
    }
    function jm(e, t) {
      xm.X(e, t);
      var n = wm;
      if (n && e) {
        var r = Ht(n).hoistableScripts,
          i = Rm(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(zm(i))),
          a ||
            ((e = T({ src: e, async: !0 }, t)),
            (t = vm.get(i)) && Um(e, t),
            (a = n.createElement(`script`)),
            Ut(a),
            np(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Mm(e, t) {
      xm.M(e, t);
      var n = wm;
      if (n && e) {
        var r = Ht(n).hoistableScripts,
          i = Rm(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(zm(i))),
          a ||
            ((e = T({ src: e, async: !0, type: `module` }, t)),
            (t = vm.get(i)) && Um(e, t),
            (a = n.createElement(`script`)),
            Ut(a),
            np(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Nm(e, t, n, r) {
      var a = (a = je.current) ? bm(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((n = Pm(n.href)),
              (t = Ht(a).hoistableStyles),
              (r = t.get(n)),
              r ||
                ((r = { type: `style`, instance: null, count: 0, state: null }),
                t.set(n, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Pm(n.href);
            var o = Ht(a).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = a.querySelector(Fm(e)))
                  ? o._p || ((s.instance = o), (s.state.loading = 5))
                  : ((o = vm.get(e)),
                    o ||
                      ((o = {
                        rel: `preload`,
                        as: `style`,
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy,
                      }),
                      vm.set(e, o)),
                    Lm(a, e, o, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(i(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` &&
            t &&
            typeof t != `function` &&
            typeof t != `symbol`
              ? ((n = Rm(n)),
                (t = Ht(a).hoistableScripts),
                (r = t.get(n)),
                r ||
                  ((r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  t.set(n, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(i(444, e));
      }
    }
    function Pm(e) {
      return `href="` + un(e) + `"`;
    }
    function Fm(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Im(e) {
      return T({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Lm(e, t, n, r) {
      if ((t = e.querySelector(`link[rel="preload"][as="style"][` + t + `]`))) {
        if (!0 !== t[Lt]) {
          r.loading = 1;
          return;
        }
      } else
        ((t = e.createElement(`link`)),
          (t[Lt] = !0),
          (t.onload = t.onerror = Wt.bind(null, t)),
          np(t, `link`, n),
          Ut(t),
          e.head.appendChild(t));
      ((r.preload = t),
        t.addEventListener(`load`, function () {
          return (r.loading |= 1);
        }),
        t.addEventListener(`error`, function () {
          return (r.loading |= 2);
        }));
    }
    function Rm(e) {
      return `[src="` + un(e) + `"]`;
    }
    function zm(e) {
      return `script[async]` + e;
    }
    function Bm(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + un(n.href) + `"]`);
            if (r) return ((t.instance = r), Ut(r), r);
            var a = T({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              Ut(r),
              np(r, `style`, a),
              Vm(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            a = Pm(n.href);
            var o = e.querySelector(Fm(a));
            if (o) return ((t.state.loading |= 4), (t.instance = o), Ut(o), o);
            ((r = Im(n)),
              (a = vm.get(a)) && Hm(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              Ut(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              np(o, `link`, r),
              (t.state.loading |= 4),
              Vm(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = Rm(n.src)),
              (a = e.querySelector(zm(o)))
                ? ((t.instance = a), Ut(a), a)
                : ((r = n),
                  (a = vm.get(o)) && ((r = T({}, n)), Um(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  Ut(a),
                  np(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            );
          case `void`:
            return null;
          default:
            throw Error(i(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Vm(r, n.precedence, e));
      return t.instance;
    }
    function Vm(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n),
          t.insertBefore(e, t.firstChild));
    }
    function Hm(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title));
    }
    function Um(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Wm = null;
    function Gm(e, t, n) {
      if (Wm === null) {
        var r = new Map(),
          i = (Wm = new Map());
        i.set(n, r);
      } else ((i = Wm), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (
          !(
            a[It] ||
            a[At] ||
            (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
          ) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Km(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(
          n,
          t === `title` ? e.querySelector(`head > title`) : null,
        ));
    }
    function qm(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (
            typeof t.precedence != `string` ||
            typeof t.href != `string` ||
            t.href === ``
          )
            break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return (
                (e = t.disabled),
                typeof t.precedence == `string` && e == null
              );
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Jm(e, t) {
      return (
        e === `img` &&
        t.src != null &&
        t.src !== `` &&
        t.onLoad == null &&
        t.loading !== `lazy`
      );
    }
    function Ym(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Xm(e) {
      return (
        (e.width || 100) *
        (e.height || 100) *
        (typeof devicePixelRatio == `number` ? devicePixelRatio : 1) *
        0.25
      );
    }
    function Zm(e, t) {
      typeof t.decode == `function` &&
        (e.imgCount++,
        t.complete || ((e.imgBytes += Xm(t)), e.suspenseyImages.push(t)),
        (e = rh.bind(e)),
        t.decode().then(e, e));
    }
    function Qm(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Pm(r.href),
            a = t.querySelector(Fm(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = nh.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              Ut(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = Im(r)),
            (i = vm.get(i)) && Hm(r, i),
            (a = a.createElement(`link`)),
            Ut(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            np(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = nh.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)));
      }
    }
    var $m = 0;
    function eh(e, t) {
      return (
        e.stylesheets && e.count === 0 && ah(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && ah(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && $m === 0 && ($m = 62500 * op());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 &&
                      (e.stylesheets && ah(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > $m ? 50 : 800) + t,
              );
              return (
                (e.unsuspend = n),
                function () {
                  ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                }
              );
            }
          : null
      );
    }
    function th(e) {
      if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
        if (e.stylesheets) ah(e, e.stylesheets);
        else if (e.unsuspend) {
          var t = e.unsuspend;
          ((e.unsuspend = null), t());
        }
      }
    }
    function nh() {
      (this.count--, th(this));
    }
    function rh() {
      (this.imgCount--, th(this));
    }
    var ih = null;
    function ah(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (ih = new Map()),
          t.forEach(oh, e),
          (ih = null),
          nh.call(e)));
    }
    function oh(e, t) {
      if (!(t.state.loading & 4)) {
        var n = ih.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), ih.set(e, n));
          for (
            var i = e.querySelectorAll(
                `link[data-precedence],style[data-precedence]`,
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        ((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = nh.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var sh = {
      $$typeof: le,
      Provider: null,
      Consumer: null,
      _currentValue: we,
      _currentValue2: we,
      _threadCount: 0,
    };
    function ch(e, t, n, r, i, a, o, s, c) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = yt(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = yt(0)),
        (this.hiddenUpdates = yt(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.transitionTypes = null),
        (this.incompleteTransitions = new Map()));
    }
    function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new ch(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = Li(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = Ia()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        yo(a),
        e
      );
    }
    function uh(e) {
      return e ? ((e = Fi), e) : Fi;
    }
    function dh(e, t, n, r, i, a) {
      ((i = uh(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = xo(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = So(e, r, t)),
        n !== null && (Pd(n, e, t), Co(n, e, t)));
    }
    function fh(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function ph(e, t) {
      (fh(e, t), (e = e.alternate) && fh(e, t));
    }
    function mh(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Mi(e, 67108864);
        (t !== null && Pd(t, e, 67108864), ph(e, 67108864));
      }
    }
    function hh(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = jd();
        t = Tt(t);
        var n = Mi(e, t);
        (n !== null && Pd(n, e, t), ph(e, t));
      }
    }
    var gh = !0;
    function _h(e, t, n, r) {
      var i = D.T;
      D.T = null;
      var a = O.p;
      try {
        ((O.p = 2), yh(e, t, n, r));
      } finally {
        ((O.p = a), (D.T = i));
      }
    }
    function vh(e, t, n, r) {
      var i = D.T;
      D.T = null;
      var a = O.p;
      try {
        ((O.p = 8), yh(e, t, n, r));
      } finally {
        ((O.p = a), (D.T = i));
      }
    }
    function yh(e, t, n, r) {
      if (gh) {
        var i = bh(r);
        if (i === null) (Kf(e, t, r, xh, n), Mh(e, r));
        else if (Ph(i, e, t, n, r)) r.stopPropagation();
        else if ((Mh(e, r), t & 4 && -1 < jh.indexOf(e))) {
          for (; i !== null;) {
            var a = Bt(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (
                    ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                  ) {
                    var o = pt(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                        var c = 1 << (31 - ot(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (Ef(a), !(G & 6) && ((gd = Je() + 500), Df(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = Mi(a, 2)), s !== null && Pd(s, a, 2), zd(), ph(a, 2));
              }
            if (((a = bh(r)), a === null && Kf(e, t, r, xh, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else Kf(e, t, r, null, n);
      }
    }
    function bh(e) {
      return ((e = En(e)), Sh(e));
    }
    var xh = null;
    function Sh(e) {
      if (((xh = null), (e = zt(e)), e !== null)) {
        var t = o(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((xh = e), null);
    }
    function Ch(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `fullscreenerror`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `resize`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Ye()) {
            case Xe:
              return 2;
            case Ze:
              return 8;
            case Qe:
            case $e:
              return 32;
            case et:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var wh = !1,
      Th = null,
      Eh = null,
      Dh = null,
      Oh = new Map(),
      kh = new Map(),
      Ah = [],
      jh =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function Mh(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          Th = null;
          break;
        case `dragenter`:
        case `dragleave`:
          Eh = null;
          break;
        case `mouseover`:
        case `mouseout`:
          Dh = null;
          break;
        case `pointerover`:
        case `pointerout`:
          Oh.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          kh.delete(t.pointerId);
      }
    }
    function Nh(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = Bt(t)), t !== null && mh(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Ph(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((Th = Nh(Th, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((Eh = Nh(Eh, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((Dh = Nh(Dh, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (Oh.set(a, Nh(Oh.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            kh.set(a, Nh(kh.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function Fh(e) {
      var t = zt(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              ((e.blockedOn = t),
                Ot(e.priority, function () {
                  hh(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              ((e.blockedOn = t),
                Ot(e.priority, function () {
                  hh(n);
                }));
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Ih(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = bh(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((Tn = r), n.target.dispatchEvent(r), (Tn = null));
        } else return ((t = Bt(n)), t !== null && mh(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Lh(e, t, n) {
      Ih(e) && n.delete(t);
    }
    function Rh() {
      ((wh = !1),
        Th !== null && Ih(Th) && (Th = null),
        Eh !== null && Ih(Eh) && (Eh = null),
        Dh !== null && Ih(Dh) && (Dh = null),
        Oh.forEach(Lh),
        kh.forEach(Lh));
    }
    function zh(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        wh ||
          ((wh = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, Rh)));
    }
    var Bh = null;
    function Vh(e) {
      Bh !== e &&
        ((Bh = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          Bh === e && (Bh = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (Sh(r || n) === null) continue;
              break;
            }
            var a = Bt(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              rc(
                a,
                { pending: !0, data: i, method: n.method, action: r },
                r,
                i,
              ));
          }
        }));
    }
    function Hh(e) {
      function t(t) {
        return zh(t, e);
      }
      (Th !== null && zh(Th, e),
        Eh !== null && zh(Eh, e),
        Dh !== null && zh(Dh, e),
        Oh.forEach(t),
        kh.forEach(t));
      for (var n = 0; n < Ah.length; n++) {
        var r = Ah[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < Ah.length && ((n = Ah[0]), n.blockedOn === null);)
        (Fh(n), n.blockedOn === null && Ah.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[jt] || null;
          if (typeof a == `function`) o || Vh(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[jt] || null))) s = o.formAction;
              else if (Sh(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function`
              ? (n[r + 1] = s)
              : (n.splice(r, 3), (r -= 3)),
              Vh(n));
          }
        }
    }
    function Uh() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        (i !== null && (i(), (i = null)), r || setTimeout(n, 20));
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)));
          }
        );
      }
    }
    function Wh(e) {
      this._internalRoot = e;
    }
    ((Gh.prototype.render = Wh.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        dh(n, jd(), e, t, null, null);
      }),
      (Gh.prototype.unmount = Wh.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (dh(e.current, 2, null, e, null, null), zd(), (t[Mt] = null));
          }
        }));
    function Gh(e) {
      this._internalRoot = e;
    }
    Gh.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = Dt();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Ah.length && t !== 0 && t < Ah[n].priority; n++);
        (Ah.splice(n, 0, e), n === 0 && Fh(e));
      }
    };
    var Kh = n.version;
    if (Kh !== `19.3.1`) throw Error(i(527, Kh, `19.3.1`));
    O.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
      return (
        (e = u(t)),
        (e = e === null ? null : d(e)),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var qh = {
      bundleType: 0,
      version: `19.3.1`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: D,
      reconcilerVersion: `19.3.1`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Jh.isDisabled && Jh.supportsFiber)
        try {
          ((rt = Jh.inject(qh)), (it = Jh));
        } catch {}
    }
    e.createRoot = function (e, t) {
      if (!a(e)) throw Error(i(299));
      var n = !1,
        r = ``,
        o = Ec,
        s = Dc,
        c = Oc;
      return (
        t != null &&
          (!0 === t.unstable_strictMode && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = lh(e, 1, !1, null, null, n, r, null, o, s, c, Uh)),
        (e[Mt] = t.current),
        Wf(e),
        new Wh(t)
      );
    };
  }),
  y = s((e, t) => {
    function n() {
      if (
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = v()));
  }),
  b = u(h()),
  x = y(),
  S = {
    kunalSaniaArtwork: `/assets/aistudio/Gemini_Generated_Image_3jg3413jg3413jg3_670d7826.png`,
    kunalSaniaRealPhoto: `/assets/aistudio/WhatsApp_Image_2026-10-28_at_4.10.23_PM_24ea3598.jpeg`,
    weddingSongUrl: `/assets/aistudio/WhatsApp_Audio_2026-10-28_at_4.14.28_PM_60a49e95.mpeg`,
    albumPhotoRedDress: `/assets/aistudio/WhatsApp_Image_2026-10-28_at_5.03.56_PM_6fc2e700.jpeg`,
    albumPhotoRoyalRings: `/assets/aistudio/Screenshot_2026-10-28_164547_1c405234.png`,
    albumPhotoEthnicWhite: `/assets/aistudio/WhatsApp_Image_2026-10-28_at_4.43.58_PM__3__05ce46c0.jpeg`,
    albumPhotoRomeoJuliet: `/assets/aistudio/WhatsApp_Image_2026-10-28_at_4.43.58_PM__2__69998dd7.jpeg`,
    albumPhotoDoorstep: `/assets/aistudio/WhatsApp_Image_2026-10-28_at_4.43.59_PM__2__6eeff55f.jpeg`,
    albumPhotoSunnyRomance: `/assets/aistudio/WhatsApp_Image_2026-10-28_at_4.43.59_PM__3__27040dd2.jpeg`,
    punjabiEmbrace: `https://www.wedtale.shop/assets/punjabi_embrace_art_1788532200547-D2BVCeO_.jpg`,
    royalVarmala: `https://www.wedtale.shop/assets/royal_varmala_art_1788532216549-DxC3qr3C.jpg`,
    hastamelapHands: `https://www.wedtale.shop/assets/hastamelap_hands_art_1788532186106-vNm76WDx.jpg`,
    banglesWrist: `https://www.wedtale.shop/assets/bangles_wrist_art_1788532281750-BeEOYPvE.jpg`,
    goldenHaldi: `https://www.wedtale.shop/assets/golden_haldi_ceremony_1788535162943-Bohp8q0-.jpg`,
    twilightMehendi: `https://www.wedtale.shop/assets/twilight_garden_mehendi_1788535181766-CXxAcEoa.jpg`,
    ballroomDance: `https://www.wedtale.shop/assets/ballroom_first_dance_1788535197075-BjTDgFZM.jpg`,
    mandapArt: `https://www.wedtale.shop/assets/mandap_art_1788532238310-DPD7XfJB.jpg`,
    gajraHair: `https://www.wedtale.shop/assets/gajra_hair_art_1788532252996-Cm7iPB0c.jpg`,
    joyfulVarmala: `https://www.wedtale.shop/assets/joyful_varmala_art_1788532266907-DlamTvjs.jpg`,
    sindoorVivaha: `https://www.wedtale.shop/assets/royal_sindoor_vivaha_1788535101917-CzOKfdGu.jpg`,
    palaceMusicians: `https://www.wedtale.shop/assets/shining_palace_musicians_1788517105210-es406Pj8.jpg`,
    nightFireworks: `https://www.wedtale.shop/assets/sparkling_night_fireworks_1788517170207-CRpe2_P1.jpg`,
    kasavuCouple: `https://www.wedtale.shop/assets/kasavu_couple_art_1788532172867-cVsPxpYG.jpg`,
    southGopuram: `https://www.wedtale.shop/assets/south_temple_gopuram_1788535078716-x-KO--tb.jpg`,
    rajasthanDarbar: `https://www.wedtale.shop/assets/rajasthan_rajput_darbar_1788687242772-D4ShL30l.jpg`,
    rajasthanBaraat: `https://www.wedtale.shop/assets/rajasthan_baraat_procession_1788687264021-DfeBCDyx.jpg`,
    christianHero: `https://www.wedtale.shop/assets/christian_hero_banner_1788612828113-yAn6S2dX.jpg`,
    christianAltar: `https://www.wedtale.shop/assets/christian_church_altar_1788611107205-CBmIKVmR.jpg`,
    muslimNikah: `https://www.wedtale.shop/assets/muslim_nikah_sanctuary_1788627704964-Cl_7owFw.jpg`,
  },
  C = {
    presetId: `punjabi-kaleere`,
    groomName: `Kunal`,
    brideName: `Sania`,
    groomFather: `Mr. Sanjeev Makkar`,
    groomMother: `Mrs. Uma Makkar`,
    brideFather: `Mr. Rakesh Gusain`,
    brideMother: `Mrs. Pushpa Gusain`,
    eldersBlessing: `Late Sh PL Makkar & Late Sh AK Bhatia`,
    monogramText: `KS`,
    hashtag: `#KunalWedsSania`,
    weddingDate: `2026-12-13`,
    weddingDateFormatted: `December 13, 2026`,
    weddingTime: `07:00 PM (Wedding - Forever Begins)`,
    venueName: `LeafyLush Resort & Spa`,
    venueCity: `Jim Corbett, Uttarakhand`,
    venueAddress: `LeafyLush Resort & Spa, Jim Corbett National Park, Ramnagar, Uttarakhand 244715`,
    googleMapsUrl: `https://maps.app.goo.gl/TH96rHzhNupFHvSG9`,
    gatewayPhotoUrl: S.kunalSaniaRealPhoto,
    weddingSongUrl: S.weddingSongUrl,
    welcomeMessage: `With the eternal blessings of our revered elders Late Sh PL Makkar & Late Sh AK Bhatia, and the love of our parents Mrs. Uma & Mr. Sanjeev Makkar and Mrs. Pushpa & Mr. Rakesh Gusain, we invite you to join us in celebrating the wedding festivities of Kunal & Sania amidst the scenic wilderness of Jim Corbett.`,
    scratchRevealHeading: `3D MACRO RITUAL CLOSE-UP: HATHLEWA`,
    scratchRevealNote: `Gently scratch to reveal the sacred eternal bond of Kunal & Sania with the blessings of Late Sh PL Makkar & Late Sh AK Bhatia: red Chooda, bridal Mehendi & diamond ring`,
    heroCouplePhoto: S.punjabiEmbrace,
    secondaryImage: S.royalVarmala,
    culturalTheme: `North Indian / Punjabi Royal Wedding`,
    culturalInvocation: `॥ ॐ श्री गणेशाय नमः ॥`,
    audioPreset: `shehnai`,
    shloka: `Sakhe saptapada bhava sa mamanuvrata bhava vishnustva nayatu`,
    shlokaMeaning: `Having taken the sacred seven steps together, become my eternal companion; may we walk in harmony forever.`,
    poeticNote: `Grand, romantic, festive, warm luxury amidst the serene wilderness of Jim Corbett with glowing bokeh lights and intricate traditional rituals.`,
    colorPalette: {
      primaryBg: `#850B1B`,
      cardBg: `#FAF5EC`,
      accentGold: `#D4AF37`,
      borderGold: `#FBBF24`,
      textPrimary: `#2D0A0F`,
      textSecondary: `#7F1D1D`,
      badgeBg: `#850B1B`,
      badgeText: `#FEF3C7`,
      gradient: `from-[#850B1B] via-[#991B1B] to-[#D97706]`,
    },
    petalColors: [
      `#850B1B`,
      `#E11D48`,
      `#F472B6`,
      `#FFFDF7`,
      `#D4AF37`,
      `#059669`,
    ],
    events: [
      {
        id: `e-ks-1`,
        title: `Henna and Happiness (Mehendi)`,
        date: `Dec 12, 2026`,
        time: `14:00 (Noon)`,
        venue: `Riverside Garden, LeafyLush Resort & Spa`,
        description: `A vibrant sunny afternoon of delicate bridal henna artistry, traditional Punjabi folk songs, and joyful laughter amidst the Corbett greens.`,
        dressCode: `Festive Bohemian / Vibrant Green & Floral`,
        photoUrl: S.twilightMehendi,
        rituals: [
          `Bridal Mehendi Application`,
          `Folk Dholki & Sangeet Tappe`,
          `Kala Chashma Dance`,
        ],
        attireColors: [`#15803D`, `#84CC16`, `#F59E0B`],
        blessingCount: 195,
      },
      {
        id: `e-ks-2`,
        title: `The Royal Toast (Cocktail)`,
        date: `Dec 12, 2026`,
        time: `07:00 PM (Evening)`,
        venue: `Grand Poolside Deck & Starlight Lawn`,
        description: `An unforgettable evening of sparkling toasts, glamour, live DJ rhythms, gourmet delicacies, and dancing under the stars.`,
        dressCode: `Evening Glamour / Tuxedo & Shimmering Gowns`,
        photoUrl: S.ballroomDance,
        rituals: [
          `The Grand Couple Entry`,
          `Champagne Toast & Speeches`,
          `Live DJ Dhamaka & Dancing`,
        ],
        attireColors: [`#0F172A`, `#D4AF37`, `#BE185D`],
        blessingCount: 340,
      },
      {
        id: `e-ks-3`,
        title: `Marigold Magic (Haldi)`,
        date: `Dec 13, 2026`,
        time: `10:00 AM (Morning)`,
        venue: `Sunlit Courtyard, LeafyLush Resort`,
        description: `Golden ubtan turmeric paste ceremony infused with fresh rosewater and playful marigold petal showers (Phoolon Ki Holi).`,
        dressCode: `Marigold Yellow & Sunshine White`,
        photoUrl: S.goldenHaldi,
        rituals: [
          `Haldi Ubtan Blessings`,
          `Phoolon Ki Holi (Flower Petal Shower)`,
          `Dholki Tappe`,
        ],
        attireColors: [`#FBBF24`, `#FEF08A`, `#F59E0B`],
        blessingCount: 310,
      },
      {
        id: `e-ks-4`,
        title: `Forever Begins (The Wedding)`,
        date: `Dec 13, 2026`,
        time: `07:00 PM (Evening)`,
        venue: `Forest Mandap, LeafyLush Resort & Spa, Jim Corbett`,
        description: `The sacred wedding ceremony where Kunal & Sania exchange sacred rose Varmala, take the seven sacred pheras, and begin forever.`,
        dressCode: `Royal Traditional Indian / Sherwanis & Regal Lehengas`,
        photoUrl: S.royalVarmala,
        rituals: [
          `Baraat Swagat & Milni`,
          `Royal Varmala Exchange`,
          `Sacred 7 Pheras & Hathlewa`,
          `Sindoor & Mangalsutra Vidhi`,
          `Bidaai Blessings`,
        ],
        attireColors: [`#850B1B`, `#D4AF37`, `#FFFDF7`],
        blessingCount: 680,
      },
    ],
    galleryPhotos: [
      {
        id: `g-ks-1`,
        url: S.albumPhotoRedDress,
        caption: `Kunal & Sania: Sweet Romance & Vibrant Red Elegance`,
        date: `Sweet Romance`,
      },
      {
        id: `g-ks-2`,
        url: S.albumPhotoRoyalRings,
        caption: `Kunal & Sania: Sacred Rings & Royal Velvet Wedding Attire`,
        date: `Forever Begins`,
      },
      {
        id: `g-ks-3`,
        url: S.albumPhotoEthnicWhite,
        caption: `Traditional Ethnic Grace: Festive Kurta & Ivory Shimmer`,
        date: `Pre-Wedding Festivities`,
      },
      {
        id: `g-ks-4`,
        url: S.albumPhotoRomeoJuliet,
        caption: `Romeo & Juliet • Laughter, Glow & Everlasting Love`,
        date: `Celebration of Love`,
      },
      {
        id: `g-ks-5`,
        url: S.albumPhotoDoorstep,
        caption: `Warm Embrace: Togetherness & Lifelong Companionship`,
        date: `Tender Moments`,
      },
      {
        id: `g-ks-6`,
        url: S.albumPhotoSunnyRomance,
        caption: `Sunshine & Sweet Smiles: Kunal & Sania Candid Romance`,
        date: `Cherished Memories`,
      },
    ],
    rsvpResponses: [
      {
        id: `rsvp-1`,
        name: `The Makkar Family`,
        phone: `+91 98100 23456`,
        guests: 4,
        attending: !0,
        message: `Heartiest congratulations to Kunal & Sania! Looking forward to celebrating in Jim Corbett.`,
        dietary: `Vegetarian`,
        submittedAt: `Just now`,
      },
      {
        id: `rsvp-2`,
        name: `The Gusain Family`,
        phone: `+91 98110 34567`,
        guests: 4,
        attending: !0,
        message: `So much love and warm blessings for Sania & Kunal on their new beginning!`,
        dietary: `Vegetarian`,
        submittedAt: `1 hour ago`,
      },
      {
        id: `rsvp-3`,
        name: `Friends of Kunal & Sania`,
        phone: `+91 99999 88888`,
        guests: 2,
        attending: !0,
        message: `Cannot wait for The Royal Toast and Henna & Happiness! See you guys in Corbett!`,
        dietary: `Vegetarian`,
        submittedAt: `3 hours ago`,
      },
    ],
  },
  ee = C,
  w = [C];
function te(e) {
  if (!e || !e.trim()) return null;
  try {
    let t = decodeURIComponent(e.trim()).replace(/-/g, `+`).replace(/_/g, `/`);
    for (; t.length % 4 != 0;) t += `=`;
    let n = decodeURIComponent(escape(atob(t)));
    return JSON.parse(n);
  } catch {
    try {
      let t = atob(e.trim().replace(/-/g, `+`).replace(/_/g, `/`));
      return JSON.parse(t);
    } catch {
      return (
        console.warn(`Could not decode compact config from URL payload`),
        null
      );
    }
  }
}
function T(e) {
  try {
    let t = {
        presetId: e.presetId,
        groom: e.groomName,
        bride: e.brideName,
        monogram: e.monogramText,
        hashtag: e.hashtag,
        date: e.weddingDate,
        dateFormatted: e.weddingDateFormatted,
        time: e.weddingTime,
        venue: e.venueName,
        city: e.venueCity,
        welcome: e.welcomeMessage,
        scratchTitle: e.scratchRevealHeading,
        scratchSubtitle: e.scratchRevealNote,
        music: e.audioPreset,
        culturalTheme: e.culturalTheme,
      },
      n = JSON.stringify(t);
    return btoa(unescape(encodeURIComponent(n)))
      .replace(/\+/g, `-`)
      .replace(/\//g, `_`)
      .replace(/=+$/, ``);
  } catch (e) {
    return (console.warn(`Failed to encode compact config for URL:`, e), ``);
  }
}
function ne(
  e,
  t = typeof window < `u` ? window.location.origin : `https://www.wedtale.shop`,
  n = `punjabi-wedding`,
) {
  let r = new URLSearchParams();
  (r.set(`view`, `guest`),
    r.set(`i`, e.presetId === `punjabi-kaleere` ? `punjabi` : e.presetId),
    e.groomName && r.set(`g`, e.groomName.trim()),
    e.brideName && r.set(`b`, e.brideName.trim()),
    e.weddingDate && r.set(`d`, e.weddingDate),
    e.venueName && r.set(`v`, e.venueName.trim()),
    n && r.set(`invite`, n));
  let i = T(e);
  return (i && r.set(`c`, i), `${t}/?${r.toString()}`);
}
function re(e = typeof window < `u` ? window.location.search : ``) {
  let t = new URLSearchParams(e),
    n =
      !(
        t.get(`mode`) === `builder` ||
        t.get(`mode`) === `studio` ||
        t.get(`studio`) === `true` ||
        t.has(`edit`)
      ) &&
      (t.get(`view`) === `guest` ||
        t.get(`view`) === `invitation` ||
        t.get(`mode`) === `guest` ||
        t.has(`g`) ||
        t.has(`b`) ||
        t.has(`i`) ||
        t.has(`invite`) ||
        t.has(`c`) ||
        !0),
    r = t.get(`i`)?.toLowerCase() || `punjabi`,
    i =
      w.find(
        (e) =>
          e.presetId === r ||
          (r === `punjabi` && e.presetId === `punjabi-kaleere`) ||
          (r === `kerala` && e.presetId === `south-indian-kasavu`) ||
          e.culturalTheme.toLowerCase().includes(r),
      ) || ee,
    a = JSON.parse(JSON.stringify(i)),
    o = te(t.get(`c`));
  if (
    (o &&
      (o.groom && (a.groomName = o.groom),
      o.bride && (a.brideName = o.bride),
      o.monogram && (a.monogramText = o.monogram),
      o.hashtag && (a.hashtag = o.hashtag),
      o.date && (a.weddingDate = o.date),
      o.dateFormatted && (a.weddingDateFormatted = o.dateFormatted),
      o.time && (a.weddingTime = o.time),
      o.venue && (a.venueName = o.venue),
      o.city && (a.venueCity = o.city),
      o.welcome && (a.welcomeMessage = o.welcome),
      o.scratchTitle && (a.scratchRevealHeading = o.scratchTitle),
      o.scratchSubtitle && (a.scratchRevealNote = o.scratchSubtitle),
      o.music && (a.audioPreset = o.music)),
    t.get(`g`) && (a.groomName = t.get(`g`)),
    t.get(`b`) && (a.brideName = t.get(`b`)),
    t.get(`d`))
  ) {
    a.weddingDate = t.get(`d`);
    let e = new Date(a.weddingDate);
    isNaN(e.getTime()) ||
      (a.weddingDateFormatted = e.toLocaleDateString(`en-US`, {
        month: `long`,
        day: `numeric`,
        year: `numeric`,
      }));
  }
  return (
    t.get(`v`) && (a.venueName = t.get(`v`)),
    {
      config: a,
      isGuestView: n,
      inviteSlug: t.get(`invite`) || `kerala-wedding`,
    }
  );
}
var ie = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  ae = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase(),
    ),
  oe = (e) => {
    let t = ae(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  se = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  ce = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
  },
  le = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  ue = (0, b.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...s
      },
      c,
    ) =>
      (0, b.createElement)(
        `svg`,
        {
          ref: c,
          ...le,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: se(`lucide`, i),
          ...(!a && !ce(s) && { "aria-hidden": `true` }),
          ...s,
        },
        [
          ...o.map(([e, t]) => (0, b.createElement)(e, t)),
          ...(Array.isArray(a) ? a : [a]),
        ],
      ),
  ),
  E = (e, t) => {
    let n = (0, b.forwardRef)(({ className: n, ...r }, i) =>
      (0, b.createElement)(ue, {
        ref: i,
        iconNode: t,
        className: se(`lucide-${ie(oe(e))}`, `lucide-${e}`, n),
        ...r,
      }),
    );
    return ((n.displayName = oe(e)), n);
  },
  de = E(`calendar`, [
    [`path`, { d: `M8 2v4`, key: `1cmpym` }],
    [`path`, { d: `M16 2v4`, key: `4m81vk` }],
    [
      `rect`,
      { width: `18`, height: `18`, x: `3`, y: `4`, rx: `2`, key: `1hopcy` },
    ],
    [`path`, { d: `M3 10h18`, key: `8toen8` }],
  ]),
  fe = E(`car`, [
    [
      `path`,
      {
        d: `M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2`,
        key: `5owen`,
      },
    ],
    [`circle`, { cx: `7`, cy: `17`, r: `2`, key: `u2ysq9` }],
    [`path`, { d: `M9 17h6`, key: `r8uit2` }],
    [`circle`, { cx: `17`, cy: `17`, r: `2`, key: `axvx0g` }],
  ]),
  pe = E(`check`, [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]]),
  me = E(`chevron-down`, [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]]),
  he = E(`chevron-left`, [[`path`, { d: `m15 18-6-6 6-6`, key: `1wnfg3` }]]),
  ge = E(`chevron-right`, [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]]),
  _e = E(`circle-check`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
  ]),
  ve = E(`clock`, [
    [`path`, { d: `M12 6v6l4 2`, key: `mmk7yg` }],
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
  ]),
  ye = E(`copy`, [
    [
      `rect`,
      {
        width: `14`,
        height: `14`,
        x: `8`,
        y: `8`,
        rx: `2`,
        ry: `2`,
        key: `17jyea`,
      },
    ],
    [
      `path`,
      {
        d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,
        key: `zix9uf`,
      },
    ],
  ]),
  be = E(`eye`, [
    [
      `path`,
      {
        d: `M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,
        key: `1nclc0`,
      },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
  ]),
  xe = E(`heart`, [
    [
      `path`,
      {
        d: `M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,
        key: `mvr1a0`,
      },
    ],
  ]),
  Se = E(`lock-open`, [
    [
      `rect`,
      {
        width: `18`,
        height: `11`,
        x: `3`,
        y: `11`,
        rx: `2`,
        ry: `2`,
        key: `1w4ew1`,
      },
    ],
    [`path`, { d: `M7 11V7a5 5 0 0 1 9.9-1`, key: `1mm8w8` }],
  ]),
  Ce = E(`lock`, [
    [
      `rect`,
      {
        width: `18`,
        height: `11`,
        x: `3`,
        y: `11`,
        rx: `2`,
        ry: `2`,
        key: `1w4ew1`,
      },
    ],
    [`path`, { d: `M7 11V7a5 5 0 0 1 10 0v4`, key: `fwvmzm` }],
  ]),
  D = E(`map-pin`, [
    [
      `path`,
      {
        d: `M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,
        key: `1r0f0z`,
      },
    ],
    [`circle`, { cx: `12`, cy: `10`, r: `3`, key: `ilqhr7` }],
  ]),
  O = E(`maximize-2`, [
    [`path`, { d: `M15 3h6v6`, key: `1q9fwt` }],
    [`path`, { d: `m21 3-7 7`, key: `1l2asr` }],
    [`path`, { d: `m3 21 7-7`, key: `tjx5ai` }],
    [`path`, { d: `M9 21H3v-6`, key: `wtvkvv` }],
  ]),
  we = E(`monitor`, [
    [
      `rect`,
      { width: `20`, height: `14`, x: `2`, y: `3`, rx: `2`, key: `48i651` },
    ],
    [`line`, { x1: `8`, x2: `16`, y1: `21`, y2: `21`, key: `1svkeh` }],
    [`line`, { x1: `12`, x2: `12`, y1: `17`, y2: `21`, key: `vw1qmm` }],
  ]),
  Te = E(`music`, [
    [`path`, { d: `M9 18V5l12-2v13`, key: `1jmyc2` }],
    [`circle`, { cx: `6`, cy: `18`, r: `3`, key: `fqmcym` }],
    [`circle`, { cx: `18`, cy: `16`, r: `3`, key: `1hluhg` }],
  ]),
  Ee = E(`navigation`, [
    [`polygon`, { points: `3 11 22 2 13 21 11 13 3 11`, key: `1ltx0t` }],
  ]),
  De = E(`plane`, [
    [
      `path`,
      {
        d: `M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z`,
        key: `1v9wt8`,
      },
    ],
  ]),
  Oe = E(`rotate-ccw`, [
    [
      `path`,
      { d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`, key: `1357e3` },
    ],
    [`path`, { d: `M3 3v5h5`, key: `1xhq8a` }],
  ]),
  k = E(`rotate-cw`, [
    [
      `path`,
      { d: `M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8`, key: `1p45f6` },
    ],
    [`path`, { d: `M21 3v5h-5`, key: `1q7to0` }],
  ]),
  ke = E(`scroll-text`, [
    [`path`, { d: `M15 12h-5`, key: `r7krc0` }],
    [`path`, { d: `M15 8h-5`, key: `1khuty` }],
    [`path`, { d: `M19 17V5a2 2 0 0 0-2-2H4`, key: `zz82l3` }],
    [
      `path`,
      {
        d: `M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3`,
        key: `1ph1d7`,
      },
    ],
  ]),
  Ae = E(`share-2`, [
    [`circle`, { cx: `18`, cy: `5`, r: `3`, key: `gq8acd` }],
    [`circle`, { cx: `6`, cy: `12`, r: `3`, key: `w7nqdw` }],
    [`circle`, { cx: `18`, cy: `19`, r: `3`, key: `1xt0gg` }],
    [
      `line`,
      { x1: `8.59`, x2: `15.42`, y1: `13.51`, y2: `17.49`, key: `47mynk` },
    ],
    [
      `line`,
      { x1: `15.41`, x2: `8.59`, y1: `6.51`, y2: `10.49`, key: `1n3mei` },
    ],
  ]),
  je = E(`shirt`, [
    [
      `path`,
      {
        d: `M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z`,
        key: `1wgbhj`,
      },
    ],
  ]),
  Me = E(`smartphone`, [
    [
      `rect`,
      {
        width: `14`,
        height: `20`,
        x: `5`,
        y: `2`,
        rx: `2`,
        ry: `2`,
        key: `1yt0o3`,
      },
    ],
    [`path`, { d: `M12 18h.01`, key: `mhygvu` }],
  ]),
  Ne = E(`sparkles`, [
    [
      `path`,
      {
        d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
        key: `1s2grr`,
      },
    ],
    [`path`, { d: `M20 2v4`, key: `1rf3ol` }],
    [`path`, { d: `M22 4h-4`, key: `gwowj6` }],
    [`circle`, { cx: `4`, cy: `20`, r: `2`, key: `6kqj1y` }],
  ]),
  Pe = E(`tablet`, [
    [
      `rect`,
      {
        width: `16`,
        height: `20`,
        x: `4`,
        y: `2`,
        rx: `2`,
        ry: `2`,
        key: `76otgf`,
      },
    ],
    [`line`, { x1: `12`, x2: `12.01`, y1: `18`, y2: `18`, key: `1dp563` }],
  ]),
  Fe = E(`tram-front`, [
    [
      `rect`,
      { width: `16`, height: `16`, x: `4`, y: `3`, rx: `2`, key: `1wxw4b` },
    ],
    [`path`, { d: `M4 11h16`, key: `mpoxn0` }],
    [`path`, { d: `M12 3v8`, key: `1h2ygw` }],
    [`path`, { d: `m8 19-2 3`, key: `13i0xs` }],
    [`path`, { d: `m18 22-2-3`, key: `1p0ohu` }],
    [`path`, { d: `M8 15h.01`, key: `a7atzg` }],
    [`path`, { d: `M16 15h.01`, key: `rnfrdf` }],
  ]),
  Ie = E(`volume-2`, [
    [
      `path`,
      {
        d: `M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,
        key: `uqj9uw`,
      },
    ],
    [`path`, { d: `M16 9a5 5 0 0 1 0 6`, key: `1q6k2b` }],
    [`path`, { d: `M19.364 18.364a9 9 0 0 0 0-12.728`, key: `ijwkga` }],
  ]),
  Le = E(`volume-x`, [
    [
      `path`,
      {
        d: `M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,
        key: `uqj9uw`,
      },
    ],
    [`line`, { x1: `22`, x2: `16`, y1: `9`, y2: `15`, key: `1ewh16` }],
    [`line`, { x1: `16`, x2: `22`, y1: `9`, y2: `15`, key: `5ykzw1` }],
  ]),
  Re = E(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  ze = new (class {
    constructor() {
      if (
        ((this.ctx = null),
        (this.isPlaying = !1),
        (this.gainNode = null),
        (this.musicInterval = null),
        (this.currentPreset = `romantic`),
        (this.audioElement = null),
        (this.audioTrackUrl = `/assets/aistudio/WhatsApp_Audio_2026-10-28_at_4.14.28_PM_60a49e95.mpeg`),
        (this.listeners = new Set()),
        typeof window < `u`)
      )
        try {
          ((this.audioElement = new Audio(this.audioTrackUrl)),
            (this.audioElement.loop = !0),
            (this.audioElement.preload = `auto`),
            this.audioElement.addEventListener(`play`, () => {
              ((this.isPlaying = !0), this.notifyListeners());
            }),
            this.audioElement.addEventListener(`pause`, () => {
              ((this.isPlaying = !1), this.notifyListeners());
            }),
            this.audioElement.addEventListener(`ended`, () => {
              ((this.isPlaying = !1), this.notifyListeners());
            }));
        } catch (e) {
          console.warn(`Audio element initialization error:`, e);
        }
    }
    notifyListeners() {
      this.listeners.forEach((e) => {
        try {
          e(this.isPlaying);
        } catch (e) {
          console.error(e);
        }
      });
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        e(this.isPlaying),
        () => this.listeners.delete(e)
      );
    }
    initCtx() {
      if (!this.ctx && typeof window < `u`) {
        let e = window.AudioContext || window.webkitAudioContext;
        e && (this.ctx = new e());
      }
      this.ctx && this.ctx.state === `suspended` && this.ctx.resume();
    }
    setAudioTrackUrl(e) {
      if (e && e !== this.audioTrackUrl) {
        this.audioTrackUrl = e;
        let t = this.isPlaying;
        this.audioElement &&
          (this.audioElement.pause(),
          (this.audioElement.src = e),
          t && this.audioElement.play().catch(() => {}));
      }
    }
    setPreset(e) {
      this.currentPreset = e;
    }
    getIsPlaying() {
      return this.isPlaying;
    }
    toggleMusic() {
      return this.isPlaying
        ? (this.stopWeddingMusic(), !1)
        : (this.playWeddingMusic(), !0);
    }
    playWeddingMusic() {
      (this.initCtx(),
        this.audioElement
          ? this.audioElement
              .play()
              .then(() => {
                ((this.isPlaying = !0), this.notifyListeners());
              })
              .catch((e) => {
                (console.warn(
                  `Direct audio play failed, falling back to Web Audio synth:`,
                  e,
                ),
                  this.playSynthWeddingMusic());
              })
          : this.playSynthWeddingMusic());
    }
    stopWeddingMusic() {
      if (
        ((this.isPlaying = !1),
        this.notifyListeners(),
        this.audioElement && this.audioElement.pause(),
        (this.musicInterval &&= (clearInterval(this.musicInterval), null)),
        this.ctx && this.gainNode)
      ) {
        let e = this.ctx.currentTime;
        this.gainNode.gain.exponentialRampToValueAtTime(0.001, e + 0.5);
      }
    }
    playSynthWeddingMusic() {
      if (!this.ctx || this.isPlaying) return;
      ((this.isPlaying = !0), this.notifyListeners());
      let e = this.ctx.currentTime,
        t = this.ctx.createGain();
      (t.gain.setValueAtTime(0.01, e),
        t.gain.exponentialRampToValueAtTime(0.25, e + 2),
        t.connect(this.ctx.destination),
        (this.gainNode = t));
      let n = this.currentPreset === `flute` ? 174.61 : 146.83;
      [n, n * 1.5, n * 2, n * 0.75].forEach((t, n) => {
        if (!this.ctx || !this.gainNode) return;
        let r = this.ctx.createOscillator(),
          i = this.ctx.createGain(),
          a = this.ctx.createBiquadFilter();
        ((r.type = n % 2 == 0 ? `triangle` : `sawtooth`),
          r.frequency.setValueAtTime(t, e));
        let o = this.ctx.createOscillator(),
          s = this.ctx.createGain();
        (o.frequency.setValueAtTime(0.18 + n * 0.08, e),
          s.gain.setValueAtTime(0.7, e),
          o.connect(r.frequency),
          o.start(e),
          (a.type = `lowpass`),
          a.frequency.setValueAtTime(400 + n * 70, e),
          i.gain.setValueAtTime(0.035 / (n + 1), e),
          r.connect(a),
          a.connect(i),
          i.connect(this.gainNode),
          r.start(e));
      });
      let r = [293.66, 329.63, 369.99, 415.3, 440, 493.88, 554.37, 587.33],
        i = [
          0, 2, 4, 3, 2, 4, 5, 7, 6, 4, 2, 0, 1, 2, 4, 0, 4, 5, 7, 6, 4, 2, 0,
          2,
        ],
        a = 0,
        o = () => {
          if (!this.isPlaying || !this.ctx || !this.gainNode) return;
          let e = this.ctx.currentTime,
            t = this.ctx.createOscillator(),
            n = this.ctx.createGain(),
            o = this.ctx.createBiquadFilter(),
            s = i[a % i.length],
            c = r[s % r.length];
          (a++,
            (t.type = `sawtooth`),
            (o.type = `bandpass`),
            o.frequency.setValueAtTime(c * 1.85, e),
            o.Q.setValueAtTime(2.8, e),
            t.frequency.setValueAtTime(c, e),
            t.frequency.exponentialRampToValueAtTime(c * 1.015, e + 0.25),
            t.frequency.exponentialRampToValueAtTime(c, e + 0.65));
          let l = 1.2 + Math.random() * 0.6;
          (n.gain.setValueAtTime(0.001, e),
            n.gain.exponentialRampToValueAtTime(0.07, e + 0.25),
            n.gain.exponentialRampToValueAtTime(0.001, e + l),
            t.connect(o),
            o.connect(n),
            n.connect(this.gainNode),
            t.start(e),
            t.stop(e + l + 0.1));
        };
      (o(), (this.musicInterval = setInterval(o, 950)));
    }
    playScratchSound() {
      if ((this.initCtx(), !this.ctx)) return;
      let e = this.ctx.currentTime,
        t = this.ctx.createOscillator(),
        n = this.ctx.createGain();
      ((t.type = `triangle`),
        t.frequency.setValueAtTime(130 + Math.random() * 70, e),
        n.gain.setValueAtTime(0.045, e),
        n.gain.exponentialRampToValueAtTime(0.001, e + 0.08),
        t.connect(n),
        n.connect(this.ctx.destination),
        t.start(e),
        t.stop(e + 0.08));
    }
    playCardFlipSound() {
      if ((this.initCtx(), !this.ctx)) return;
      let e = this.ctx.currentTime,
        t = Math.floor(this.ctx.sampleRate * 0.18),
        n = this.ctx.createBuffer(1, t, this.ctx.sampleRate),
        r = n.getChannelData(0);
      for (let e = 0; e < t; e++)
        r[e] = (Math.random() * 2 - 1) * Math.exp(-e / (t * 0.38));
      let i = this.ctx.createBufferSource();
      i.buffer = n;
      let a = this.ctx.createBiquadFilter();
      ((a.type = `bandpass`),
        a.frequency.setValueAtTime(1400, e),
        a.frequency.exponentialRampToValueAtTime(450, e + 0.15));
      let o = this.ctx.createGain();
      (o.gain.setValueAtTime(0.12, e),
        o.gain.exponentialRampToValueAtTime(0.001, e + 0.16),
        i.connect(a),
        a.connect(o),
        o.connect(this.ctx.destination),
        i.start(e));
    }
    playTempleBellSound() {
      if ((this.initCtx(), !this.ctx)) return;
      let e = this.ctx.currentTime;
      [
        { f: 880, g: 0.14, decay: 2.2 },
        { f: 1760, g: 0.07, decay: 1.4 },
        { f: 2640, g: 0.035, decay: 0.8 },
        { f: 3520, g: 0.015, decay: 0.5 },
      ].forEach((t) => {
        if (!this.ctx) return;
        let n = this.ctx.createOscillator(),
          r = this.ctx.createGain();
        ((n.type = `sine`),
          n.frequency.setValueAtTime(t.f, e),
          r.gain.setValueAtTime(t.g, e),
          r.gain.exponentialRampToValueAtTime(1e-4, e + t.decay),
          n.connect(r),
          r.connect(this.ctx.destination),
          n.start(e),
          n.stop(e + t.decay));
      });
    }
    playWaxSealSound() {
      if ((this.initCtx(), !this.ctx)) return;
      let e = this.ctx.currentTime,
        t = this.ctx.createOscillator(),
        n = this.ctx.createGain();
      ((t.type = `sine`),
        t.frequency.setValueAtTime(190, e),
        t.frequency.exponentialRampToValueAtTime(60, e + 0.18),
        n.gain.setValueAtTime(0.2, e),
        n.gain.exponentialRampToValueAtTime(0.001, e + 0.22),
        t.connect(n),
        n.connect(this.ctx.destination),
        t.start(e),
        t.stop(e + 0.22));
    }
    playBlessingChime() {
      if ((this.initCtx(), !this.ctx)) return;
      let e = this.ctx.currentTime;
      [587.33, 739.99, 880, 1174.66, 1479.98, 1760].forEach((t, n) => {
        if (!this.ctx) return;
        let r = this.ctx.createOscillator(),
          i = this.ctx.createGain();
        ((r.type = `sine`),
          r.frequency.setValueAtTime(t, e + n * 0.07),
          i.gain.setValueAtTime(0.08, e + n * 0.07),
          i.gain.exponentialRampToValueAtTime(0.001, e + n * 0.07 + 1.2),
          r.connect(i),
          i.connect(this.ctx.destination),
          r.start(e + n * 0.07),
          r.stop(e + n * 0.07 + 1.2));
      });
    }
    playFireworkSound() {
      if ((this.initCtx(), !this.ctx)) return;
      let e = this.ctx.currentTime,
        t = Math.floor(this.ctx.sampleRate * 0.5),
        n = this.ctx.createBuffer(1, t, this.ctx.sampleRate),
        r = n.getChannelData(0);
      for (let e = 0; e < t; e++) r[e] = Math.random() * 2 - 1;
      let i = this.ctx.createBufferSource();
      i.buffer = n;
      let a = this.ctx.createBiquadFilter();
      ((a.type = `lowpass`),
        a.frequency.setValueAtTime(800, e),
        a.frequency.exponentialRampToValueAtTime(140, e + 0.4));
      let o = this.ctx.createGain();
      (o.gain.setValueAtTime(0.14, e),
        o.gain.exponentialRampToValueAtTime(0.001, e + 0.45),
        i.connect(a),
        a.connect(o),
        o.connect(this.ctx.destination),
        i.start(e));
    }
  })(),
  Be = s((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
  }),
  A = s((e, t) => {
    t.exports = Be();
  })(),
  Ve = () => {
    let [e, t] = (0, b.useState)(!1),
      [n, r] = (0, b.useState)(!0);
    return (
      (0, b.useEffect)(() => {
        let e = ze.subscribe((e) => {
          t(e);
        });
        return () => e();
      }, []),
      (0, b.useEffect)(() => {
        let e = setTimeout(() => {
          r(!1);
        }, 7e3);
        return () => clearTimeout(e);
      }, []),
      (0, A.jsxs)(`div`, {
        className: `fixed top-4 right-4 z-40 flex items-center gap-2`,
        children: [
          n &&
            !e &&
            (0, A.jsx)(`span`, {
              className: `hidden sm:inline-block bg-neutral-900/85 backdrop-blur-md text-amber-200 text-xs px-3.5 py-1.5 rounded-full font-cinzel animate-pulse shadow-xl border border-amber-500/40`,
              children: `Tap for Romantic Love Song 🎵`,
            }),
          (0, A.jsx)(`button`, {
            id: `wedding-music-toggle-btn`,
            onClick: () => {
              (ze.toggleMusic(), r(!1));
            },
            "aria-label": `Toggle Wedding Music`,
            type: `button`,
            className: `relative flex items-center justify-center w-11 h-11 rounded-full shadow-2xl border transition-all duration-300 cursor-pointer ${e ? `bg-gradient-to-tr from-amber-700 via-rose-800 to-amber-600 text-amber-100 border-amber-300 scale-105 shadow-[0_0_20px_rgba(245,158,11,0.5)]` : `bg-black/70 backdrop-blur-md text-neutral-200 border-amber-500/40 hover:bg-neutral-900 hover:text-white`}`,
            children: e
              ? (0, A.jsxs)(A.Fragment, {
                  children: [
                    (0, A.jsx)(Te, {
                      className: `w-5 h-5 animate-spin-slow text-amber-200`,
                    }),
                    (0, A.jsxs)(`span`, {
                      className: `absolute -top-1 -right-1 flex h-3.5 w-3.5`,
                      children: [
                        (0, A.jsx)(`span`, {
                          className: `animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75`,
                        }),
                        (0, A.jsx)(`span`, {
                          className: `relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500`,
                        }),
                      ],
                    }),
                  ],
                })
              : (0, A.jsx)(Le, { className: `w-5 h-5 text-amber-300` }),
          }),
        ],
      })
    );
  },
  He = {};
(function e(t, n, r, i) {
  var a = !!(
      t.Worker &&
      t.Blob &&
      t.Promise &&
      t.OffscreenCanvas &&
      t.OffscreenCanvasRenderingContext2D &&
      t.HTMLCanvasElement &&
      t.HTMLCanvasElement.prototype.transferControlToOffscreen &&
      t.URL &&
      t.URL.createObjectURL
    ),
    o = typeof Path2D == `function` && typeof DOMMatrix == `function`,
    s = (function () {
      if (!t.OffscreenCanvas) return !1;
      try {
        var e = new OffscreenCanvas(1, 1),
          n = e.getContext(`2d`);
        n.fillRect(0, 0, 1, 1);
        var r = e.transferToImageBitmap();
        n.createPattern(r, `no-repeat`);
      } catch {
        return !1;
      }
      return !0;
    })();
  function c() {}
  function l(e) {
    var r = n.exports.Promise,
      i = r === void 0 ? t.Promise : r;
    return typeof i == `function` ? new i(e) : (e(c, c), null);
  }
  var u = (function (e, t) {
      return {
        transform: function (n) {
          if (e) return n;
          if (t.has(n)) return t.get(n);
          var r = new OffscreenCanvas(n.width, n.height);
          return (r.getContext(`2d`).drawImage(n, 0, 0), t.set(n, r), r);
        },
        clear: function () {
          t.clear();
        },
      };
    })(s, new Map()),
    d = (function () {
      var e,
        t,
        n = {},
        r = 0;
      return (
        typeof requestAnimationFrame == `function` &&
        typeof cancelAnimationFrame == `function`
          ? ((e = function (e) {
              var t = Math.random();
              return (
                (n[t] = requestAnimationFrame(function i(a) {
                  r === a || r + 16 - 1 < a
                    ? ((r = a), delete n[t], e())
                    : (n[t] = requestAnimationFrame(i));
                })),
                t
              );
            }),
            (t = function (e) {
              n[e] && cancelAnimationFrame(n[e]);
            }))
          : ((e = function (e) {
              return setTimeout(e, 16);
            }),
            (t = function (e) {
              return clearTimeout(e);
            })),
        { frame: e, cancel: t }
      );
    })(),
    f = (function () {
      var t,
        n,
        i = {};
      function o(e) {
        function t(t, n) {
          e.postMessage({ options: t || {}, callback: n });
        }
        ((e.init = function (t) {
          var n = t.transferControlToOffscreen();
          e.postMessage({ canvas: n }, [n]);
        }),
          (e.fire = function (r, a, o) {
            if (n) return (t(r, null), n);
            var s = Math.random().toString(36).slice(2);
            return (
              (n = l(function (a) {
                function c(t) {
                  t.data.callback === s &&
                    (delete i[s],
                    e.removeEventListener(`message`, c),
                    (n = null),
                    u.clear(),
                    o(),
                    a());
                }
                (e.addEventListener(`message`, c),
                  t(r, s),
                  (i[s] = c.bind(null, { data: { callback: s } })));
              })),
              n
            );
          }),
          (e.reset = function () {
            for (var t in (e.postMessage({ reset: !0 }), i))
              (i[t](), delete i[t]);
          }));
      }
      return function () {
        if (t) return t;
        if (!r && a) {
          var n = [
            `var CONFETTI, SIZE = {}, module = {};`,
            `(` + e.toString() + `)(this, module, true, SIZE);`,
            `onmessage = function(msg) {`,
            `  if (msg.data.options) {`,
            `    CONFETTI(msg.data.options).then(function () {`,
            `      if (msg.data.callback) {`,
            `        postMessage({ callback: msg.data.callback });`,
            `      }`,
            `    });`,
            `  } else if (msg.data.reset) {`,
            `    CONFETTI && CONFETTI.reset();`,
            `  } else if (msg.data.resize) {`,
            `    SIZE.width = msg.data.resize.width;`,
            `    SIZE.height = msg.data.resize.height;`,
            `  } else if (msg.data.canvas) {`,
            `    SIZE.width = msg.data.canvas.width;`,
            `    SIZE.height = msg.data.canvas.height;`,
            `    CONFETTI = module.exports.create(msg.data.canvas);`,
            `  }`,
            `}`,
          ].join(`
`);
          try {
            t = new Worker(URL.createObjectURL(new Blob([n])));
          } catch (e) {
            return (
              typeof console < `u` &&
                typeof console.warn == `function` &&
                console.warn(`🎊 Could not load worker`, e),
              null
            );
          }
          o(t);
        }
        return t;
      };
    })(),
    p = {
      particleCount: 50,
      angle: 90,
      spread: 45,
      startVelocity: 45,
      decay: 0.9,
      gravity: 1,
      drift: 0,
      ticks: 200,
      x: 0.5,
      y: 0.5,
      shapes: [`square`, `circle`],
      zIndex: 100,
      colors: [
        `#26ccff`,
        `#a25afd`,
        `#ff5e7e`,
        `#88ff5a`,
        `#fcff42`,
        `#ffa62d`,
        `#ff36ff`,
      ],
      disableForReducedMotion: !1,
      scalar: 1,
    };
  function m(e, t) {
    return t ? t(e) : e;
  }
  function h(e) {
    return e != null;
  }
  function g(e, t, n) {
    return m(e && h(e[t]) ? e[t] : p[t], n);
  }
  function _(e) {
    return e < 0 ? 0 : Math.floor(e);
  }
  function v(e, t) {
    return Math.floor(Math.random() * (t - e)) + e;
  }
  function y(e) {
    return parseInt(e, 16);
  }
  function b(e) {
    return e.map(x);
  }
  function x(e) {
    var t = String(e).replace(/[^0-9a-f]/gi, ``);
    return (
      t.length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]),
      {
        r: y(t.substring(0, 2)),
        g: y(t.substring(2, 4)),
        b: y(t.substring(4, 6)),
      }
    );
  }
  function S(e) {
    var t = g(e, `origin`, Object);
    return ((t.x = g(t, `x`, Number)), (t.y = g(t, `y`, Number)), t);
  }
  function C(e) {
    ((e.width = document.documentElement.clientWidth),
      (e.height = document.documentElement.clientHeight));
  }
  function ee(e) {
    var t = e.getBoundingClientRect();
    ((e.width = t.width), (e.height = t.height));
  }
  function w(e) {
    var t = document.createElement(`canvas`);
    return (
      (t.style.position = `fixed`),
      (t.style.top = `0px`),
      (t.style.left = `0px`),
      (t.style.pointerEvents = `none`),
      (t.style.zIndex = e),
      t
    );
  }
  function te(e, t, n, r, i, a, o, s, c) {
    (e.save(),
      e.translate(t, n),
      e.rotate(a),
      e.scale(r, i),
      e.arc(0, 0, 1, o, s, c),
      e.restore());
  }
  function T(e) {
    var t = e.angle * (Math.PI / 180),
      n = e.spread * (Math.PI / 180);
    return {
      x: e.x,
      y: e.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: e.startVelocity * 0.5 + Math.random() * e.startVelocity,
      angle2D: -t + (0.5 * n - Math.random() * n),
      tiltAngle: (Math.random() * 0.5 + 0.25) * Math.PI,
      color: e.color,
      shape: e.shape,
      tick: 0,
      totalTicks: e.ticks,
      decay: e.decay,
      drift: e.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: e.gravity * 3,
      ovalScalar: 0.6,
      scalar: e.scalar,
      flat: e.flat,
    };
  }
  function ne(e, t) {
    ((t.x += Math.cos(t.angle2D) * t.velocity + t.drift),
      (t.y += Math.sin(t.angle2D) * t.velocity + t.gravity),
      (t.velocity *= t.decay),
      t.flat
        ? ((t.wobble = 0),
          (t.wobbleX = t.x + 10 * t.scalar),
          (t.wobbleY = t.y + 10 * t.scalar),
          (t.tiltSin = 0),
          (t.tiltCos = 0),
          (t.random = 1))
        : ((t.wobble += t.wobbleSpeed),
          (t.wobbleX = t.x + 10 * t.scalar * Math.cos(t.wobble)),
          (t.wobbleY = t.y + 10 * t.scalar * Math.sin(t.wobble)),
          (t.tiltAngle += 0.1),
          (t.tiltSin = Math.sin(t.tiltAngle)),
          (t.tiltCos = Math.cos(t.tiltAngle)),
          (t.random = Math.random() + 2)));
    var n = t.tick++ / t.totalTicks,
      r = t.x + t.random * t.tiltCos,
      i = t.y + t.random * t.tiltSin,
      a = t.wobbleX + t.random * t.tiltCos,
      s = t.wobbleY + t.random * t.tiltSin;
    if (
      ((e.fillStyle =
        `rgba(` +
        t.color.r +
        `, ` +
        t.color.g +
        `, ` +
        t.color.b +
        `, ` +
        (1 - n) +
        `)`),
      e.beginPath(),
      o &&
        t.shape.type === `path` &&
        typeof t.shape.path == `string` &&
        Array.isArray(t.shape.matrix))
    )
      e.fill(
        se(
          t.shape.path,
          t.shape.matrix,
          t.x,
          t.y,
          Math.abs(a - r) * 0.1,
          Math.abs(s - i) * 0.1,
          (Math.PI / 10) * t.wobble,
        ),
      );
    else if (t.shape.type === `bitmap`) {
      var c = (Math.PI / 10) * t.wobble,
        l = Math.abs(a - r) * 0.1,
        d = Math.abs(s - i) * 0.1,
        f = t.shape.bitmap.width * t.scalar,
        p = t.shape.bitmap.height * t.scalar,
        m = new DOMMatrix([
          Math.cos(c) * l,
          Math.sin(c) * l,
          -Math.sin(c) * d,
          Math.cos(c) * d,
          t.x,
          t.y,
        ]);
      m.multiplySelf(new DOMMatrix(t.shape.matrix));
      var h = e.createPattern(u.transform(t.shape.bitmap), `no-repeat`);
      (h.setTransform(m),
        (e.globalAlpha = 1 - n),
        (e.fillStyle = h),
        e.fillRect(t.x - f / 2, t.y - p / 2, f, p),
        (e.globalAlpha = 1));
    } else if (t.shape === `circle`)
      e.ellipse
        ? e.ellipse(
            t.x,
            t.y,
            Math.abs(a - r) * t.ovalScalar,
            Math.abs(s - i) * t.ovalScalar,
            (Math.PI / 10) * t.wobble,
            0,
            2 * Math.PI,
          )
        : te(
            e,
            t.x,
            t.y,
            Math.abs(a - r) * t.ovalScalar,
            Math.abs(s - i) * t.ovalScalar,
            (Math.PI / 10) * t.wobble,
            0,
            2 * Math.PI,
          );
    else if (t.shape === `star`)
      for (
        var g = (Math.PI / 2) * 3,
          _ = 4 * t.scalar,
          v = 8 * t.scalar,
          y = t.x,
          b = t.y,
          x = 5,
          S = Math.PI / x;
        x--;
      )
        ((y = t.x + Math.cos(g) * v),
          (b = t.y + Math.sin(g) * v),
          e.lineTo(y, b),
          (g += S),
          (y = t.x + Math.cos(g) * _),
          (b = t.y + Math.sin(g) * _),
          e.lineTo(y, b),
          (g += S));
    else
      (e.moveTo(Math.floor(t.x), Math.floor(t.y)),
        e.lineTo(Math.floor(t.wobbleX), Math.floor(i)),
        e.lineTo(Math.floor(a), Math.floor(s)),
        e.lineTo(Math.floor(r), Math.floor(t.wobbleY)));
    return (e.closePath(), e.fill(), t.tick < t.totalTicks);
  }
  function re(e, t, n, a, o) {
    var s = t.slice(),
      c = e.getContext(`2d`),
      f,
      p,
      m = l(function (t) {
        function l() {
          ((f = p = null),
            c.clearRect(0, 0, a.width, a.height),
            u.clear(),
            o(),
            t());
        }
        function m() {
          (r &&
            (a.width !== i.width || a.height !== i.height) &&
            ((a.width = e.width = i.width), (a.height = e.height = i.height)),
            !a.width &&
              !a.height &&
              (n(e), (a.width = e.width), (a.height = e.height)),
            c.clearRect(0, 0, a.width, a.height),
            (s = s.filter(function (e) {
              return ne(c, e);
            })),
            s.length ? (f = d.frame(m)) : l());
        }
        ((f = d.frame(m)), (p = l));
      });
    return {
      addFettis: function (e) {
        return ((s = s.concat(e)), m);
      },
      canvas: e,
      promise: m,
      reset: function () {
        (f && d.cancel(f), p && p());
      },
    };
  }
  function ie(e, n) {
    var r = !e,
      i = !!g(n || {}, `resize`),
      o = !1,
      s = g(n, `disableForReducedMotion`, Boolean),
      c = a && g(n || {}, `useWorker`) ? f() : null,
      u = r ? C : ee,
      d = e && c ? !!e.__confetti_initialized : !1,
      p =
        typeof matchMedia == `function` &&
        matchMedia(`(prefers-reduced-motion)`).matches,
      m;
    function h(t, n, r) {
      for (
        var i = g(t, `particleCount`, _),
          a = g(t, `angle`, Number),
          o = g(t, `spread`, Number),
          s = g(t, `startVelocity`, Number),
          c = g(t, `decay`, Number),
          l = g(t, `gravity`, Number),
          d = g(t, `drift`, Number),
          f = g(t, `colors`, b),
          p = g(t, `ticks`, Number),
          h = g(t, `shapes`),
          y = g(t, `scalar`),
          x = !!g(t, `flat`),
          C = S(t),
          ee = i,
          w = [],
          te = e.width * C.x,
          ne = e.height * C.y;
        ee--;
      )
        w.push(
          T({
            x: te,
            y: ne,
            angle: a,
            spread: o,
            startVelocity: s,
            color: f[ee % f.length],
            shape: h[v(0, h.length)],
            ticks: p,
            decay: c,
            gravity: l,
            drift: d,
            scalar: y,
            flat: x,
          }),
        );
      return m ? m.addFettis(w) : ((m = re(e, w, u, n, r)), m.promise);
    }
    function y(n) {
      var a = s || g(n, `disableForReducedMotion`, Boolean),
        f = g(n, `zIndex`, Number);
      if (a && p)
        return l(function (e) {
          e();
        });
      (r && m
        ? (e = m.canvas)
        : r && !e && ((e = w(f)), document.body.appendChild(e)),
        i && !d && u(e));
      var _ = { width: e.width, height: e.height };
      (c && !d && c.init(e), (d = !0), c && (e.__confetti_initialized = !0));
      function v() {
        if (c) {
          var t = {
            getBoundingClientRect: function () {
              if (!r) return e.getBoundingClientRect();
            },
          };
          (u(t),
            c.postMessage({ resize: { width: t.width, height: t.height } }));
        } else _.width = _.height = null;
      }
      function y() {
        ((m = null),
          i && ((o = !1), t.removeEventListener(`resize`, v)),
          r &&
            e &&
            (document.body.contains(e) && document.body.removeChild(e),
            (e = null),
            (d = !1)));
      }
      return (
        i && !o && ((o = !0), t.addEventListener(`resize`, v, !1)),
        c ? c.fire(n, _, y) : h(n, _, y)
      );
    }
    return (
      (y.reset = function () {
        (c && c.reset(), m && m.reset());
      }),
      y
    );
  }
  var ae;
  function oe() {
    return ((ae ||= ie(null, { useWorker: !0, resize: !0 })), ae);
  }
  function se(e, t, n, r, i, a, o) {
    var s = new Path2D(e),
      c = new Path2D();
    c.addPath(s, new DOMMatrix(t));
    var l = new Path2D();
    return (
      l.addPath(
        c,
        new DOMMatrix([
          Math.cos(o) * i,
          Math.sin(o) * i,
          -Math.sin(o) * a,
          Math.cos(o) * a,
          n,
          r,
        ]),
      ),
      l
    );
  }
  function ce(e) {
    if (!o) throw Error(`path confetti are not supported in this browser`);
    var t, n;
    typeof e == `string` ? (t = e) : ((t = e.path), (n = e.matrix));
    var r = new Path2D(t),
      i = document.createElement(`canvas`).getContext(`2d`);
    if (!n) {
      for (var a = 1e3, s = a, c = a, l = 0, u = 0, d, f, p = 0; p < a; p += 2)
        for (var m = 0; m < a; m += 2)
          i.isPointInPath(r, p, m, `nonzero`) &&
            ((s = Math.min(s, p)),
            (c = Math.min(c, m)),
            (l = Math.max(l, p)),
            (u = Math.max(u, m)));
      ((d = l - s), (f = u - c));
      var h = 10,
        g = Math.min(h / d, h / f);
      n = [g, 0, 0, g, -Math.round(d / 2 + s) * g, -Math.round(f / 2 + c) * g];
    }
    return { type: `path`, path: t, matrix: n };
  }
  function le(e) {
    var t,
      n = 1,
      r = `#000000`,
      i = `"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;
    typeof e == `string`
      ? (t = e)
      : ((t = e.text),
        (n = `scalar` in e ? e.scalar : n),
        (i = `fontFamily` in e ? e.fontFamily : i),
        (r = `color` in e ? e.color : r));
    var a = 10 * n,
      o = `` + a + `px ` + i,
      s = new OffscreenCanvas(a, a),
      c = s.getContext(`2d`);
    c.font = o;
    var l = c.measureText(t),
      u = Math.ceil(l.actualBoundingBoxRight + l.actualBoundingBoxLeft),
      d = Math.ceil(l.actualBoundingBoxAscent + l.actualBoundingBoxDescent),
      f = 2,
      p = l.actualBoundingBoxLeft + f,
      m = l.actualBoundingBoxAscent + f;
    ((u += f + f),
      (d += f + f),
      (s = new OffscreenCanvas(u, d)),
      (c = s.getContext(`2d`)),
      (c.font = o),
      (c.fillStyle = r),
      c.fillText(t, p, m));
    var h = 1 / n;
    return {
      type: `bitmap`,
      bitmap: s.transferToImageBitmap(),
      matrix: [h, 0, 0, h, (-u * h) / 2, (-d * h) / 2],
    };
  }
  ((n.exports = function () {
    return oe().apply(this, arguments);
  }),
    (n.exports.reset = function () {
      oe().reset();
    }),
    (n.exports.create = ie),
    (n.exports.shapeFromPath = ce),
    (n.exports.shapeFromText = le));
})(
  (function () {
    return typeof window < `u` ? window : typeof self < `u` ? self : this || {};
  })(),
  He,
  !1,
);
var Ue = He.exports;
He.exports.create;
var We = ({
    burstTrigger: e,
    petalColors: t = [
      `#850B1B`,
      `#E11D48`,
      `#F472B6`,
      `#FFFDF7`,
      `#D4AF37`,
      `#059669`,
    ],
  }) => {
    let n = (0, b.useRef)(null),
      r = (0, b.useRef)([]),
      i = (0, b.useRef)(null);
    return (
      (0, b.useEffect)(() => {
        if (e > 0) {
          Ue({
            particleCount: 50,
            spread: 80,
            origin: { y: 0.65 },
            colors: t,
            scalar: 1.1,
          });
          let e = n.current;
          if (!e) return;
          let i = e.width;
          e.height;
          let a = Array.from({ length: 60 }, () => {
            let e = t[Math.floor(Math.random() * t.length)];
            return {
              x: Math.random() * i,
              y: -20 - Math.random() * 80,
              size: Math.random() * 12 + 10,
              color: e,
              vx: (Math.random() - 0.5) * 2.2,
              vy: Math.random() * 2.5 + 2,
              rotX: Math.random() * Math.PI,
              rotY: Math.random() * Math.PI,
              rotZ: Math.random() * Math.PI,
              rotSpeedX: (Math.random() - 0.5) * 0.05,
              rotSpeedY: (Math.random() - 0.5) * 0.06,
              rotSpeedZ: (Math.random() - 0.5) * 0.04,
              opacity: 1,
            };
          });
          r.current.push(...a);
        }
      }, [e, t]),
      (0, b.useEffect)(() => {
        let e = n.current;
        if (!e) return;
        let t = () => {
          ((e.width = window.innerWidth), (e.height = window.innerHeight));
        };
        (t(), window.addEventListener(`resize`, t));
        let a = e.getContext(`2d`);
        if (!a) return;
        let o = () => {
          (a.clearRect(0, 0, e.width, e.height),
            (r.current = r.current.filter(
              (t) => (
                (t.x += t.vx + Math.sin(t.y * 0.02) * 1.2),
                (t.y += t.vy),
                (t.rotX += t.rotSpeedX),
                (t.rotY += t.rotSpeedY),
                (t.rotZ += t.rotSpeedZ),
                t.y > e.height - 50 && (t.opacity -= 0.025),
                t.opacity <= 0 || t.y > e.height + 20
                  ? !1
                  : (a.save(),
                    a.translate(t.x, t.y),
                    a.rotate(t.rotZ),
                    a.scale(Math.cos(t.rotX), Math.sin(t.rotY)),
                    (a.globalAlpha = Math.max(0, t.opacity)),
                    a.beginPath(),
                    a.moveTo(0, -t.size / 2),
                    a.bezierCurveTo(
                      t.size * 0.6,
                      -t.size * 0.3,
                      t.size * 0.6,
                      t.size * 0.3,
                      0,
                      t.size / 2,
                    ),
                    a.bezierCurveTo(
                      -t.size * 0.6,
                      t.size * 0.3,
                      -t.size * 0.6,
                      -t.size * 0.3,
                      0,
                      -t.size / 2,
                    ),
                    (a.fillStyle = t.color),
                    a.fill(),
                    a.beginPath(),
                    a.moveTo(0, -t.size * 0.3),
                    a.lineTo(0, t.size * 0.3),
                    (a.strokeStyle = `rgba(255, 255, 255, 0.35)`),
                    (a.lineWidth = 1),
                    a.stroke(),
                    a.restore(),
                    !0)
              ),
            )),
            (i.current = requestAnimationFrame(o)));
        };
        return (
          o(),
          () => {
            (window.removeEventListener(`resize`, t),
              i.current && cancelAnimationFrame(i.current));
          }
        );
      }, []),
      (0, A.jsx)(`canvas`, {
        ref: n,
        className: `fixed inset-0 pointer-events-none z-50 w-full h-full`,
        style: { pointerEvents: `none` },
      })
    );
  },
  Ge = (0, b.createContext)({});
function Ke(e) {
  let t = (0, b.useRef)(null);
  return (t.current === null && (t.current = e()), t.current);
}
var qe = typeof window < `u` ? b.useLayoutEffect : b.useEffect,
  Je = (0, b.createContext)(null);
function Ye(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Xe(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var Ze = (e, t, n) => (n > t ? t : n < e ? e : n),
  Qe = {},
  $e = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  et = (e) => typeof e == `object` && !!e,
  tt = (e) => /^0[^.\s]+$/u.test(e);
function nt(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var rt = (e) => e,
  it = (...e) => e.reduce((e, t) => (n) => t(e(n))),
  at = (e, t, n) => {
    let r = t - e;
    return r ? (n - e) / r : 1;
  },
  ot = class {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return (Ye(this.subscriptions, e), () => Xe(this.subscriptions, e));
    }
    notify(e, t, n) {
      let r = this.subscriptions.length;
      if (r) {
        if (r === 1) this.subscriptions[0](e, t, n);
        else
          for (let i = 0; i < r; i++) {
            let r = this.subscriptions[i];
            r && r(e, t, n);
          }
      }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  },
  st = (e) => e * 1e3,
  ct = (e) => e / 1e3,
  lt = (e, t) => (t ? (1e3 / t) * e : 0),
  ut = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  dt = 1e-7,
  ft = 12;
function pt(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do ((o = t + (n - t) / 2), (a = ut(o, r, i) - e), a > 0 ? (n = o) : (t = o));
  while (Math.abs(a) > dt && ++s < ft);
  return o;
}
function mt(e, t, n, r) {
  if (e === t && n === r) return rt;
  let i = (t) => pt(t, 0, 1, e, n);
  return (e) => (e === 0 || e === 1 ? e : ut(i(e), t, r));
}
var ht = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  gt = (e) => (t) => 1 - e(1 - t),
  _t = mt(0.33, 1.53, 0.69, 0.99),
  vt = gt(_t),
  yt = ht(vt),
  bt = (e) =>
    e >= 1 ? 1 : (e *= 2) < 1 ? 0.5 * vt(e) : 0.5 * (2 - 2 ** (-10 * (e - 1))),
  xt = (e) => 1 - Math.sin(Math.acos(e)),
  St = gt(xt),
  Ct = ht(xt),
  wt = mt(0.42, 0, 1, 1),
  Tt = mt(0, 0, 0.58, 1),
  Et = mt(0.42, 0, 0.58, 1),
  Dt = (e) => Array.isArray(e) && typeof e[0] != `number`,
  Ot = (e) => Array.isArray(e) && typeof e[0] == `number`,
  kt = {
    linear: rt,
    easeIn: wt,
    easeInOut: Et,
    easeOut: Tt,
    circIn: xt,
    circInOut: Ct,
    circOut: St,
    backIn: vt,
    backInOut: yt,
    backOut: _t,
    anticipate: bt,
  },
  At = (e) => typeof e == `string`,
  jt = (e) => {
    if (Ot(e)) {
      e.length;
      let [t, n, r, i] = e;
      return mt(t, n, r, i);
    }
    return At(e) ? (kt[e], `${e}`, kt[e]) : e;
  },
  Mt = [
    `setup`,
    `read`,
    `resolveKeyframes`,
    `preUpdate`,
    `update`,
    `preRender`,
    `render`,
    `postRender`,
  ];
function Nt(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1,
    a = new WeakSet(),
    o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function s(t) {
    (a.has(t) && (c.schedule(t), e()), t(o));
  }
  let c = {
    schedule: (e, i = !1, o = !1) => {
      let s = o && r ? t : n;
      return (i && a.add(e), s.add(e), e);
    },
    cancel: (e) => {
      (n.delete(e), a.delete(e));
    },
    process: (e) => {
      if (((o = e), r)) {
        i = !0;
        return;
      }
      r = !0;
      let a = t;
      ((t = n),
        (n = a),
        t.forEach(s),
        t.clear(),
        (r = !1),
        i && ((i = !1), c.process(e)));
    },
  };
  return c;
}
var Pt = 40;
function Ft(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = () => (n = !0),
    o = Mt.reduce((e, t) => ((e[t] = Nt(a)), e), {}),
    {
      setup: s,
      read: c,
      resolveKeyframes: l,
      preUpdate: u,
      update: d,
      preRender: f,
      render: p,
      postRender: m,
    } = o,
    h = () => {
      let a = Qe.useManualTiming,
        o = a ? i.timestamp : performance.now();
      ((n = !1),
        a ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, Pt), 1)),
        (i.timestamp = o),
        (i.isProcessing = !0),
        s.process(i),
        c.process(i),
        l.process(i),
        u.process(i),
        d.process(i),
        f.process(i),
        p.process(i),
        m.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(h)));
    },
    g = () => {
      ((n = !0), (r = !0), i.isProcessing || e(h));
    };
  return {
    schedule: Mt.reduce((e, t) => {
      let r = o[t];
      return (
        (e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i))),
        e
      );
    }, {}),
    cancel: (e) => {
      for (let t = 0; t < Mt.length; t++) o[Mt[t]].cancel(e);
    },
    state: i,
    steps: o,
  };
}
var {
    schedule: j,
    cancel: It,
    state: Lt,
    steps: Rt,
  } = Ft(typeof requestAnimationFrame < `u` ? requestAnimationFrame : rt, !0),
  zt;
function Bt() {
  zt = void 0;
}
var Vt = {
    now: () => (
      zt === void 0 &&
        Vt.set(
          Lt.isProcessing || Qe.useManualTiming
            ? Lt.timestamp
            : performance.now(),
        ),
      zt
    ),
    set: (e) => {
      ((zt = e), queueMicrotask(Bt));
    },
  },
  Ht = (e) => (t) => typeof t == `string` && t.startsWith(e),
  Ut = Ht(`--`),
  Wt = Ht(`var(--`),
  Gt = (e) => (Wt(e) ? Kt.test(e.split(`/*`)[0].trim()) : !1),
  Kt =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function qt(e) {
  return typeof e == `string` && e.split(`/*`)[0].includes(`var(--`);
}
var Jt = {
    test: (e) => typeof e == `number`,
    parse: parseFloat,
    transform: (e) => e,
  },
  Yt = { ...Jt, transform: (e) => Ze(0, 1, e) },
  Xt = { ...Jt, default: 1 },
  Zt = (e) => Math.round(e * 1e5) / 1e5,
  Qt = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function M(e) {
  return e == null;
}
var $t =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  en = (e, t) => (n) =>
    !!(
      (typeof n == `string` && $t.test(n) && n.startsWith(e)) ||
      (t && !M(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  tn = (e, t, n) => (r) => {
    if (typeof r != `string`) return r;
    let [i, a, o, s] = r.match(Qt);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(a),
      [n]: parseFloat(o),
      alpha: s === void 0 ? 1 : parseFloat(s),
    };
  },
  nn = (e) => Ze(0, 255, e),
  rn = { ...Jt, transform: (e) => Math.round(nn(e)) },
  an = {
    test: en(`rgb`, `red`),
    parse: tn(`red`, `green`, `blue`),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      `rgba(` +
      rn.transform(e) +
      `, ` +
      rn.transform(t) +
      `, ` +
      rn.transform(n) +
      `, ` +
      Zt(Yt.transform(r)) +
      `)`,
  };
function on(e) {
  let t = ``,
    n = ``,
    r = ``,
    i = ``;
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var sn = { test: en(`#`), parse: on, transform: an.transform },
  cn = (e) => ({
    test: (t) =>
      typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  ln = cn(`deg`),
  un = cn(`%`),
  N = cn(`px`),
  dn = cn(`vh`),
  fn = cn(`vw`),
  pn = {
    ...un,
    parse: (e) => un.parse(e) / 100,
    transform: (e) => un.transform(e * 100),
  },
  mn = {
    test: en(`hsl`, `hue`),
    parse: tn(`hue`, `saturation`, `lightness`),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      `hsla(` +
      Math.round(e) +
      `, ` +
      un.transform(Zt(t)) +
      `, ` +
      un.transform(Zt(n)) +
      `, ` +
      Zt(Yt.transform(r)) +
      `)`,
  },
  hn = {
    test: (e) => an.test(e) || sn.test(e) || mn.test(e),
    parse: (e) =>
      an.test(e) ? an.parse(e) : mn.test(e) ? mn.parse(e) : sn.parse(e),
    transform: (e) =>
      typeof e == `string`
        ? e
        : e.hasOwnProperty(`red`)
          ? an.transform(e)
          : mn.transform(e),
    getAnimatableNone: (e) => {
      let t = hn.parse(e);
      return ((t.alpha = 0), hn.transform(t));
    },
  },
  gn =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function _n(e) {
  return (
    isNaN(e) &&
    typeof e == `string` &&
    (e.match(Qt)?.length || 0) + (e.match(gn)?.length || 0) > 0
  );
}
var vn = `number`,
  yn = `color`,
  bn = `var`,
  xn = `var(`,
  Sn = "${}",
  Cn =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function wn(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    a = 0;
  return {
    values: n,
    split: t
      .replace(
        Cn,
        (e) => (
          hn.test(e)
            ? (r.color.push(a), i.push(yn), n.push(hn.parse(e)))
            : e.startsWith(xn)
              ? (r.var.push(a), i.push(bn), n.push(e))
              : (r.number.push(a), i.push(vn), n.push(parseFloat(e))),
          ++a,
          Sn
        ),
      )
      .split(Sn),
    indexes: r,
    types: i,
  };
}
function Tn(e) {
  return wn(e).values;
}
function En({ split: e, types: t }) {
  let n = e.length;
  return (r) => {
    let i = ``;
    for (let a = 0; a < n; a++)
      if (((i += e[a]), r[a] !== void 0)) {
        let e = t[a];
        i += e === vn ? Zt(r[a]) : e === yn ? hn.transform(r[a]) : r[a];
      }
    return i;
  };
}
function Dn(e) {
  return En(wn(e));
}
var On = (e) =>
    typeof e == `number` ? 0 : hn.test(e) ? hn.getAnimatableNone(e) : e,
  kn = (e, t) =>
    typeof e == `number` ? (t?.trim().endsWith(`/`) ? e : 0) : On(e);
function An(e) {
  let t = wn(e);
  return En(t)(t.values.map((e, n) => kn(e, t.split[n])));
}
var jn = { test: _n, parse: Tn, createTransformer: Dn, getAnimatableNone: An };
function Mn(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function Nn({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;
  else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r;
    ((i = Mn(s, r, e + 1 / 3)), (a = Mn(s, r, e)), (o = Mn(s, r, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Pn(e, t) {
  return (n) => (n > 0 ? t : e);
}
var P = (e, t, n) => e + (t - e) * n,
  Fn = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  In = [sn, an, mn],
  Ln = (e) => In.find((t) => t.test(e));
function Rn(e) {
  let t = Ln(e);
  if ((`${e}`, !t)) return !1;
  let n = t.parse(e);
  return (t === mn && (n = Nn(n)), n);
}
var zn = (e, t) => {
    let n = Rn(e),
      r = Rn(t);
    if (!n || !r) return Pn(e, t);
    let i = { ...n };
    return (e) => (
      (i.red = Fn(n.red, r.red, e)),
      (i.green = Fn(n.green, r.green, e)),
      (i.blue = Fn(n.blue, r.blue, e)),
      (i.alpha = P(n.alpha, r.alpha, e)),
      an.transform(i)
    );
  },
  Bn = new Set([`none`, `hidden`]);
function Vn(e, t) {
  return Bn.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Hn(e, t) {
  return (n) => P(e, t, n);
}
function Un(e) {
  return typeof e == `number`
    ? Hn
    : typeof e == `string`
      ? Gt(e)
        ? Pn
        : hn.test(e)
          ? zn
          : qn
      : Array.isArray(e)
        ? Wn
        : typeof e == `object`
          ? hn.test(e)
            ? zn
            : Gn
          : Pn;
}
function Wn(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => Un(e)(e, t[n]));
  return (e) => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function Gn(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Un(e[i])(e[i], t[i]));
  return (e) => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
function Kn(e, t) {
  let n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i],
      o = e.indexes[a][r[a]],
      s = e.values[o] ?? 0;
    ((n[i] = s), r[a]++);
  }
  return n;
}
var qn = (e, t) => {
  let n = jn.createTransformer(t),
    r = wn(e),
    i = wn(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Bn.has(e) && !i.values.length) || (Bn.has(t) && !r.values.length)
      ? Vn(e, t)
      : it(Wn(Kn(r, i), i.values), n)
    : (`${e}${t}`, Pn(e, t));
};
function Jn(e, t, n) {
  return typeof e == `number` && typeof t == `number` && typeof n == `number`
    ? P(e, t, n)
    : Un(e)(e, t);
}
var Yn = (e) => {
    let t = ({ timestamp: t }) => e(t);
    return {
      start: (e = !0) => j.update(t, e),
      stop: () => It(t),
      now: () => (Lt.isProcessing ? Lt.timestamp : Vt.now()),
    };
  },
  Xn = (e, t, n = 10) => {
    let r = ``,
      i = Math.max(Math.round(t / n), 2);
    for (let t = 0; t < i; t++)
      r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + `, `;
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Zn = 2e4;
function Qn(e) {
  let t = 0,
    n = e.next(t);
  for (; !n.done && t < 2e4;) ((t += 50), (n = e.next(t)));
  return t >= 2e4 ? 1 / 0 : t;
}
function $n(e, t = 100, n) {
  let r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(Qn(r), Zn);
  return {
    type: `keyframes`,
    ease: (e) => r.next(i * e).value / t,
    duration: ct(i),
  };
}
var er = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function tr(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var nr = 12;
function rr(e, t, n) {
  let r = n;
  for (let n = 1; n < nr; n++) r -= e(r) / t(r);
  return r;
}
var ir = 0.001;
function ar({
  duration: e = er.duration,
  bounce: t = er.bounce,
  velocity: n = er.velocity,
  mass: r = er.mass,
}) {
  let i, a;
  er.maxDuration;
  let o = 1 - t;
  ((o = Ze(er.minDamping, er.maxDamping, o)),
    (e = Ze(er.minDuration, er.maxDuration, ct(e))),
    o < 1
      ? ((i = (t) => {
          let r = t * o,
            i = r * e,
            a = r - n,
            s = tr(t, o),
            c = Math.exp(-i);
          return ir - (a / s) * c;
        }),
        (a = (t) => {
          let r = t * o * e,
            a = r * n + n,
            s = o ** 2 * t ** 2 * e,
            c = Math.exp(-r),
            l = tr(t ** 2, o);
          return ((-i(t) + ir > 0 ? -1 : 1) * ((a - s) * c)) / l;
        }))
      : ((i = (t) => -0.001 + Math.exp(-t * e) * ((t - n) * e + 1)),
        (a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)))));
  let s = 5 / e,
    c = rr(i, a, s);
  if (((e = st(e)), isNaN(c)))
    return { stiffness: er.stiffness, damping: er.damping, duration: e };
  {
    let t = c ** 2 * r;
    return { stiffness: t, damping: o * 2 * Math.sqrt(r * t), duration: e };
  }
}
var or = [`duration`, `bounce`],
  sr = [`stiffness`, `damping`, `mass`];
function cr(e, t) {
  return t.some((t) => e[t] !== void 0);
}
function lr(e) {
  let t = {
    velocity: er.velocity,
    stiffness: er.stiffness,
    damping: er.damping,
    mass: er.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!cr(e, sr) && cr(e, or)) {
    if (((t.velocity = 0), e.visualDuration)) {
      let n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        a = 2 * Ze(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: er.mass, stiffness: i, damping: a };
    } else {
      let n = ar({ ...e, velocity: 0 });
      ((t = { ...t, ...n, mass: er.mass }), (t.isResolvedFromDuration = !0));
    }
  }
  return t;
}
function ur(e = er.visualDuration, t = er.bounce) {
  let n =
      typeof e == `object`
        ? e
        : { visualDuration: e, keyframes: [0, 1], bounce: t },
    { restSpeed: r, restDelta: i } = n,
    a = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    s = { done: !1, value: a },
    {
      stiffness: c,
      damping: l,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: p,
    } = lr({ ...n, velocity: -ct(n.velocity || 0) }),
    m = f || 0,
    h = l / (2 * Math.sqrt(c * u)),
    g = o - a,
    _ = ct(Math.sqrt(c / u)),
    v = Math.abs(g) < 5;
  ((r ||= v ? er.restSpeed.granular : er.restSpeed.default),
    (i ||= v ? er.restDelta.granular : er.restDelta.default));
  let y, b, x, S, C, ee;
  if (h < 1)
    ((x = tr(_, h)),
      (S = (m + h * _ * g) / x),
      (y = (e) => {
        let t = Math.exp(-h * _ * e);
        return o - t * (S * Math.sin(x * e) + g * Math.cos(x * e));
      }),
      (C = h * _ * S + g * x),
      (ee = h * _ * g - S * x),
      (b = (e) =>
        Math.exp(-h * _ * e) * (C * Math.sin(x * e) + ee * Math.cos(x * e))));
  else if (h === 1) {
    y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
    let e = m + _ * g;
    b = (t) => Math.exp(-_ * t) * (_ * e * t - m);
  } else {
    let e = _ * Math.sqrt(h * h - 1);
    y = (t) => {
      let n = Math.exp(-h * _ * t),
        r = Math.min(e * t, 300);
      return (
        o - (n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r))) / e
      );
    };
    let t = (m + h * _ * g) / e,
      n = h * _ * t - g * e,
      r = h * _ * g - t * e;
    b = (t) => {
      let i = Math.exp(-h * _ * t),
        a = Math.min(e * t, 300);
      return i * (n * Math.sinh(a) + r * Math.cosh(a));
    };
  }
  let w = {
    calculatedDuration: (p && d) || null,
    velocity: (e) => st(b(e)),
    next: (e) => {
      if (!p && h < 1) {
        let t = Math.exp(-h * _ * e),
          n = Math.sin(x * e),
          a = Math.cos(x * e),
          c = o - t * (S * n + g * a),
          l = st(t * (C * n + ee * a));
        return (
          (s.done = Math.abs(l) <= r && Math.abs(o - c) <= i),
          (s.value = s.done ? o : c),
          s
        );
      }
      let t = y(e);
      if (p) s.done = e >= d;
      else {
        let n = st(b(e));
        s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
      }
      return ((s.value = s.done ? o : t), s);
    },
    toString: () => {
      let e = Math.min(Qn(w), Zn),
        t = Xn((t) => w.next(e * t).value, e, 30);
      return e + `ms ` + t;
    },
    toTransition: () => {},
  };
  return w;
}
ur.applyToOptions = (e) => {
  let t = $n(e, 100, ur);
  return (
    (e.ease = t.ease),
    (e.duration = st(t.duration)),
    (e.type = `keyframes`),
    e
  );
};
var dr = 5;
function fr(e, t, n) {
  let r = Math.max(t - dr, 0);
  return lt(n - e(r), t - r);
}
function pr({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  let d = e[0],
    f = { done: !1, value: d },
    p = (e) => (s !== void 0 && e < s) || (c !== void 0 && e > c),
    m = (e) =>
      s === void 0
        ? c
        : c === void 0 || Math.abs(s - e) < Math.abs(c - e)
          ? s
          : c,
    h = n * t,
    g = d + h,
    _ = o === void 0 ? g : o(g);
  _ !== g && (h = _ - d);
  let v = (e) => -h * Math.exp(-e / r),
    y = (e) => _ + v(e),
    b = (e) => {
      let t = v(e),
        n = y(e);
      ((f.done = Math.abs(t) <= l), (f.value = f.done ? _ : n));
    },
    x,
    S,
    C = (e) => {
      p(f.value) &&
        ((x = e),
        (S = ur({
          keyframes: [f.value, m(f.value)],
          velocity: fr(y, e, f.value),
          damping: i,
          stiffness: a,
          restDelta: l,
          restSpeed: u,
        })));
    };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (e) => {
        let t = !1;
        return (
          !S && x === void 0 && ((t = !0), b(e), C(e)),
          x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f)
        );
      },
    }
  );
}
function mr(e, t, n) {
  let r = [],
    i = n || Qe.mix || Jn,
    a = e.length - 1;
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1]);
    (t && (a = it(Array.isArray(t) ? t[n] || rt : t, a)), r.push(a));
  }
  return r;
}
function hr(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length;
  if ((t.length, a === 1)) return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  let o = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = mr(t, r, i),
    c = s.length,
    l = (n) => {
      if (o && n < e[0]) return t[0];
      let r = 0;
      if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = at(e[r], e[r + 1], n);
      return s[r](i);
    };
  return n ? (t) => l(Ze(e[0], e[a - 1], t)) : l;
}
function gr(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = at(0, t, r);
    e.push(P(n, 1, i));
  }
}
function _r(e) {
  let t = [0];
  return (gr(t, e.length - 1), t);
}
function vr(e, t) {
  return e.map((e) => e * t);
}
function yr(e, t) {
  return e.map(() => t || Et).splice(0, e.length - 1);
}
function br({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = `easeInOut`,
}) {
  let i = Dt(r) ? r.map(jt) : jt(r),
    a = { done: !1, value: t[0] },
    o = hr(vr(n && n.length === t.length ? n : _r(t), e), t, {
      ease: Array.isArray(i) ? i : yr(t, i),
    });
  return {
    calculatedDuration: e,
    next: (t) => ((a.value = o(t)), (a.done = t >= e), a),
  };
}
var xr = (e) => e !== null;
function Sr(e, { repeat: t, repeatType: n = `loop` }, r, i = 1) {
  let a = e.filter(xr),
    o = i < 0 || (t && n !== `loop` && t % 2 == 1) ? 0 : a.length - 1;
  return !o || r === void 0 ? a[o] : r;
}
var Cr = { decay: pr, inertia: pr, tween: br, keyframes: br, spring: ur };
function wr(e) {
  typeof e.type == `string` && (e.type = Cr[e.type]);
}
var Tr = class {
    constructor() {
      this.updateFinished();
    }
    get finished() {
      return this._finished;
    }
    updateFinished() {
      this._finished = new Promise((e) => {
        this.resolve = e;
      });
    }
    notifyFinished() {
      this.resolve();
    }
    then(e, t) {
      return this.finished.then(e, t);
    }
  },
  Er = (e) => e / 100,
  Dr = class extends Tr {
    constructor(e) {
      (super(),
        (this.state = `idle`),
        (this.startTime = null),
        (this.isStopped = !1),
        (this.currentTime = 0),
        (this.holdTime = null),
        (this.playbackSpeed = 1),
        (this.delayState = { done: !1, value: void 0 }),
        (this.stop = () => {
          let { motionValue: e } = this.options;
          (e && e.updatedAt !== Vt.now() && this.tick(Vt.now()),
            (this.isStopped = !0),
            this.state !== `idle` &&
              (this.teardown(), this.options.onStop?.()));
        }),
        (this.options = e),
        this.initAnimation(),
        this.play(),
        e.autoplay === !1 && this.pause());
    }
    initAnimation() {
      let { options: e } = this;
      wr(e);
      let {
          type: t = br,
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: a = 0,
        } = e,
        { keyframes: o } = e,
        s = t || br;
      s !== br &&
        typeof o[0] != `number` &&
        ((this.mixKeyframes = it(Er, Jn(o[0], o[1]))), (o = [0, 100]));
      let c = s({ ...e, keyframes: o });
      (i === `mirror` &&
        (this.mirroredGenerator = s({
          ...e,
          keyframes: [...o].reverse(),
          velocity: -a,
        })),
        c.calculatedDuration === null && (c.calculatedDuration = Qn(c)));
      let { calculatedDuration: l } = c;
      ((this.calculatedDuration = l),
        (this.resolvedDuration = l + r),
        (this.totalDuration = this.resolvedDuration * (n + 1) - r),
        (this.generator = c));
    }
    updateTime(e) {
      let t = Math.round(e - this.startTime) * this.playbackSpeed;
      this.currentTime = this.holdTime === null ? t : this.holdTime;
    }
    tick(e, t = !1) {
      let {
        generator: n,
        totalDuration: r,
        mixKeyframes: i,
        mirroredGenerator: a,
        resolvedDuration: o,
        calculatedDuration: s,
      } = this;
      if (this.startTime === null) return n.next(0);
      let {
        delay: c = 0,
        keyframes: l,
        repeat: u,
        repeatType: d,
        repeatDelay: f,
        type: p,
        onUpdate: m,
        finalKeyframe: h,
      } = this.options;
      (this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - r / this.speed, this.startTime)),
        t ? (this.currentTime = e) : this.updateTime(e));
      let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
        _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
      ((this.currentTime = Math.max(g, 0)),
        this.state === `finished` &&
          this.holdTime === null &&
          (this.currentTime = r));
      let v = this.currentTime,
        y = n;
      if (u) {
        let e = Math.min(this.currentTime, r) / o,
          t = Math.floor(e),
          n = e % 1;
        (!n && e >= 1 && (n = 1),
          n === 1 && t--,
          (t = Math.min(t, u + 1)),
          t % 2 &&
            (d === `reverse`
              ? ((n = 1 - n), f && (n -= f / o))
              : d === `mirror` && (y = a)),
          (v = Ze(0, 1, n) * o));
      }
      let b;
      (_
        ? ((this.delayState.value = l[0]), (b = this.delayState))
        : (b = y.next(v)),
        i && !_ && (b.value = i(b.value)));
      let { done: x } = b;
      !_ &&
        s !== null &&
        (x =
          this.playbackSpeed >= 0
            ? this.currentTime >= r
            : this.currentTime <= 0);
      let S =
        this.holdTime === null &&
        (this.state === `finished` || (this.state === `running` && x));
      return (
        S && p !== pr && (b.value = Sr(l, this.options, h, this.speed)),
        m && m(b.value),
        S && this.finish(),
        b
      );
    }
    then(e, t) {
      return this.finished.then(e, t);
    }
    get duration() {
      return ct(this.calculatedDuration);
    }
    get iterationDuration() {
      let { delay: e = 0 } = this.options || {};
      return this.duration + ct(e);
    }
    get time() {
      return ct(this.currentTime);
    }
    set time(e) {
      ((e = st(e)),
        (this.currentTime = e),
        this.startTime === null ||
        this.holdTime !== null ||
        this.playbackSpeed === 0
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.playbackSpeed),
        this.driver
          ? this.driver.start(!1)
          : ((this.startTime = 0),
            (this.state = `paused`),
            (this.holdTime = e),
            this.tick(e)));
    }
    getGeneratorVelocity() {
      let e = this.currentTime;
      if (e <= 0) return this.options.velocity || 0;
      if (this.generator.velocity) return this.generator.velocity(e);
      let t = this.generator.next(e).value;
      return fr((e) => this.generator.next(e).value, e, t);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      (t && this.driver && this.updateTime(Vt.now()),
        (this.playbackSpeed = e),
        t && this.driver && (this.time = ct(this.currentTime)));
    }
    play() {
      if (this.isStopped) return;
      let { driver: e = Yn, startTime: t } = this.options;
      ((this.driver ||= e((e) => this.tick(e))), this.options.onPlay?.());
      let n = this.driver.now();
      (this.state === `finished`
        ? (this.updateFinished(), (this.startTime = n))
        : this.holdTime === null
          ? (this.startTime ||= t ?? n)
          : (this.startTime = n - this.holdTime),
        this.state === `finished` &&
          this.speed < 0 &&
          (this.startTime += this.calculatedDuration),
        (this.holdTime = null),
        (this.state = `running`),
        this.driver.start());
    }
    pause() {
      ((this.state = `paused`),
        this.updateTime(Vt.now()),
        (this.holdTime = this.currentTime));
    }
    complete() {
      (this.state !== `running` && this.play(),
        (this.state = `finished`),
        (this.holdTime = null));
    }
    finish() {
      (this.notifyFinished(),
        this.teardown(),
        (this.state = `finished`),
        this.options.onComplete?.());
    }
    cancel() {
      ((this.holdTime = null),
        (this.startTime = 0),
        this.tick(0),
        this.teardown(),
        this.options.onCancel?.());
    }
    teardown() {
      ((this.state = `idle`),
        this.stopDriver(),
        (this.startTime = this.holdTime = null));
    }
    stopDriver() {
      this.driver &&= (this.driver.stop(), void 0);
    }
    sample(e) {
      return ((this.startTime = 0), this.tick(e, !0));
    }
    attachTimeline(e) {
      return (
        this.options.allowFlatten &&
          ((this.options.type = `keyframes`),
          (this.options.ease = `linear`),
          this.initAnimation()),
        this.driver?.stop(),
        e.observe(this)
      );
    }
  };
function Or(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
var kr = (e) => (e * 180) / Math.PI,
  Ar = (e) => Mr(kr(Math.atan2(e[1], e[0]))),
  jr = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Ar,
    rotateZ: Ar,
    skewX: (e) => kr(Math.atan(e[1])),
    skewY: (e) => kr(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  Mr = (e) => ((e %= 360), e < 0 && (e += 360), e),
  Nr = Ar,
  Pr = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  Fr = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  Ir = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Pr,
    scaleY: Fr,
    scale: (e) => (Pr(e) + Fr(e)) / 2,
    rotateX: (e) => Mr(kr(Math.atan2(e[6], e[5]))),
    rotateY: (e) => Mr(kr(Math.atan2(-e[2], e[0]))),
    rotateZ: Nr,
    rotate: Nr,
    skewX: (e) => kr(Math.atan(e[4])),
    skewY: (e) => kr(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function Lr(e) {
  return +!!e.includes(`scale`);
}
function Rr(e, t) {
  if (!e || e === `none`) return Lr(t);
  let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),
    r,
    i;
  if (n) ((r = Ir), (i = n));
  else {
    let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = jr), (i = t));
  }
  if (!i) return Lr(t);
  let a = r[t],
    o = i[1].split(`,`).map(Br);
  return typeof a == `function` ? a(o) : o[a];
}
var zr = (e, t) => {
  let { transform: n = `none` } = getComputedStyle(e);
  return Rr(n, t);
};
function Br(e) {
  return parseFloat(e.trim());
}
var Vr = [
    `transformPerspective`,
    `x`,
    `y`,
    `z`,
    `translateX`,
    `translateY`,
    `translateZ`,
    `scale`,
    `scaleX`,
    `scaleY`,
    `rotate`,
    `rotateX`,
    `rotateY`,
    `rotateZ`,
    `skew`,
    `skewX`,
    `skewY`,
  ],
  Hr = new Set([...Vr, `pathRotation`]),
  Ur = (e) => e === Jt || e === N,
  Wr = new Set([`x`, `y`, `z`]),
  Gr = Vr.filter((e) => !Wr.has(e));
function Kr(e) {
  let t = [];
  return (
    Gr.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith(`scale`)));
    }),
    t
  );
}
var qr = {
  width: (
    { x: e },
    { paddingLeft: t = `0`, paddingRight: n = `0`, boxSizing: r },
  ) => {
    let i = e.max - e.min;
    return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n);
  },
  height: (
    { y: e },
    { paddingTop: t = `0`, paddingBottom: n = `0`, boxSizing: r },
  ) => {
    let i = e.max - e.min;
    return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n);
  },
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => Rr(t, `x`),
  y: (e, { transform: t }) => Rr(t, `y`),
};
((qr.translateX = qr.x), (qr.translateY = qr.y));
var Jr = new Set(),
  Yr = !1,
  Xr = !1,
  Zr = !1;
function Qr() {
  if (Xr) {
    let e = Array.from(Jr).filter((e) => e.needsMeasurement),
      t = new Set(e.map((e) => e.element)),
      n = new Map();
    (t.forEach((e) => {
      let t = Kr(e);
      t.length && (n.set(e, t), e.render());
    }),
      e.forEach((e) => e.measureInitialState()),
      t.forEach((e) => {
        e.render();
        let t = n.get(e);
        t &&
          t.forEach(([t, n]) => {
            e.getValue(t)?.set(n);
          });
      }),
      e.forEach((e) => e.measureEndState()),
      e.forEach((e) => {
        e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
      }));
  }
  ((Xr = !1), (Yr = !1), Jr.forEach((e) => e.complete(Zr)), Jr.clear());
}
function $r() {
  Jr.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Xr = !0));
  });
}
function ei() {
  ((Zr = !0), $r(), Qr(), (Zr = !1));
}
var ti = class {
    constructor(e, t, n, r, i, a = !1) {
      ((this.state = `pending`),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.unresolvedKeyframes = [...e]),
        (this.onComplete = t),
        (this.name = n),
        (this.motionValue = r),
        (this.element = i),
        (this.isAsync = a));
    }
    scheduleResolve() {
      ((this.state = `scheduled`),
        this.isAsync
          ? (Jr.add(this),
            Yr || ((Yr = !0), j.read($r), j.resolveKeyframes(Qr)))
          : (this.readKeyframes(), this.complete()));
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: e,
        name: t,
        element: n,
        motionValue: r,
      } = this;
      if (e[0] === null) {
        let i = r?.get(),
          a = e[e.length - 1];
        if (i !== void 0) e[0] = i;
        else if (n && t) {
          let r = n.readValue(t, a);
          r != null && (e[0] = r);
        }
        (e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]));
      }
      Or(e);
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(e = !1) {
      ((this.state = `complete`),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
        Jr.delete(this));
    }
    cancel() {
      this.state === `scheduled` && (Jr.delete(this), (this.state = `pending`));
    }
    resume() {
      this.state === `pending` && this.scheduleResolve();
    }
  },
  ni = (e) => e.startsWith(`--`);
function ri(e, t, n) {
  ni(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
var ii = {};
function ai(e, t) {
  let n = nt(e);
  return () => ii[t] ?? n();
}
var oi = ai(() => window.ScrollTimeline !== void 0, `scrollTimeline`),
  si = ai(() => {
    try {
      document
        .createElement(`div`)
        .animate({ opacity: 0 }, { easing: `linear(0, 1)` });
    } catch {
      return !1;
    }
    return !0;
  }, `linearEasing`),
  ci = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  li = {
    linear: `linear`,
    ease: `ease`,
    easeIn: `ease-in`,
    easeOut: `ease-out`,
    easeInOut: `ease-in-out`,
    circIn: ci([0, 0.65, 0.55, 1]),
    circOut: ci([0.55, 0, 1, 0.45]),
    backIn: ci([0.31, 0.01, 0.66, -0.59]),
    backOut: ci([0.33, 1.53, 0.69, 0.99]),
  };
function ui(e, t) {
  if (e)
    return typeof e == `function`
      ? si()
        ? Xn(e, t)
        : `ease-out`
      : Ot(e)
        ? ci(e)
        : Array.isArray(e)
          ? e.map((e) => ui(e, t) || li.easeOut)
          : li[e];
}
function di(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = `loop`,
    ease: s = `easeOut`,
    times: c,
  } = {},
  l = void 0,
) {
  let u = { [t]: n };
  c && (u.offset = c);
  let d = ui(s, i);
  Array.isArray(d) && (u.easing = d);
  let f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? `linear` : d,
    fill: `both`,
    iterations: a + 1,
    direction: o === `reverse` ? `alternate` : `normal`,
  };
  return (l && (f.pseudoElement = l), e.animate(u, f));
}
function fi(e) {
  return typeof e == `function` && `applyToOptions` in e;
}
function pi({ type: e, ...t }) {
  return fi(e) && si()
    ? e.applyToOptions(t)
    : ((t.duration ??= 300), (t.ease ??= `easeOut`), t);
}
var mi = class extends Tr {
    constructor(e) {
      if (
        (super(),
        (this.finishedTime = null),
        (this.isStopped = !1),
        (this.manualStartTime = null),
        !e)
      )
        return;
      let {
        element: t,
        name: n,
        keyframes: r,
        pseudoElement: i,
        allowFlatten: a = !1,
        finalKeyframe: o,
        onComplete: s,
      } = e;
      ((this.isPseudoElement = !!i),
        (this.allowFlatten = a),
        (this.options = e),
        e.type);
      let c = pi(e);
      ((this.animation = di(t, n, r, c, i)),
        c.autoplay === !1 && this.animation.pause(),
        (this.animation.onfinish = () => {
          if (((this.finishedTime = this.time), !i)) {
            let e = Sr(r, this.options, o, this.speed);
            (this.updateMotionValue && this.updateMotionValue(e),
              ri(t, n, e),
              this.animation.cancel());
          }
          (s?.(), this.notifyFinished());
        }));
    }
    play() {
      this.isStopped ||
        ((this.manualStartTime = null),
        this.animation.play(),
        this.state === `finished` && this.updateFinished());
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.finish?.();
    }
    cancel() {
      try {
        this.animation.cancel();
      } catch {}
    }
    stop() {
      if (this.isStopped) return;
      this.isStopped = !0;
      let { state: e } = this;
      e !== `idle` &&
        e !== `finished` &&
        (this.updateMotionValue
          ? this.updateMotionValue()
          : this.commitStyles(),
        this.isPseudoElement || this.cancel());
    }
    commitStyles() {
      let e = this.options?.element;
      !this.isPseudoElement &&
        e?.isConnected &&
        this.animation.commitStyles?.();
    }
    get duration() {
      let e = this.animation.effect?.getComputedTiming?.().duration || 0;
      return ct(Number(e));
    }
    get iterationDuration() {
      let { delay: e = 0 } = this.options || {};
      return this.duration + ct(e);
    }
    get time() {
      return ct(Number(this.animation.currentTime) || 0);
    }
    set time(e) {
      let t = this.finishedTime !== null;
      ((this.manualStartTime = null),
        (this.finishedTime = null),
        (this.animation.currentTime = st(e)),
        t && this.animation.pause());
    }
    get speed() {
      return this.animation.playbackRate;
    }
    set speed(e) {
      (e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e));
    }
    get state() {
      return this.finishedTime === null ? this.animation.playState : `finished`;
    }
    get startTime() {
      return this.manualStartTime ?? Number(this.animation.startTime);
    }
    set startTime(e) {
      this.manualStartTime = this.animation.startTime = e;
    }
    attachTimeline({ timeline: e, rangeStart: t, rangeEnd: n, observe: r }) {
      return (
        this.allowFlatten &&
          this.animation.effect?.updateTiming({ easing: `linear` }),
        (this.animation.onfinish = null),
        e && oi()
          ? ((this.animation.timeline = e),
            t && (this.animation.rangeStart = t),
            n && (this.animation.rangeEnd = n),
            rt)
          : r(this)
      );
    }
  },
  hi = { anticipate: bt, backInOut: yt, circInOut: Ct };
function gi(e) {
  return e in hi;
}
function _i(e) {
  typeof e.ease == `string` && gi(e.ease) && (e.ease = hi[e.ease]);
}
var vi = 10,
  yi = class extends mi {
    constructor(e) {
      (_i(e),
        wr(e),
        super(e),
        e.startTime !== void 0 &&
          e.autoplay !== !1 &&
          (this.startTime = e.startTime),
        (this.options = e));
    }
    updateMotionValue(e) {
      let {
        motionValue: t,
        onUpdate: n,
        onComplete: r,
        element: i,
        ...a
      } = this.options;
      if (!t) return;
      if (e !== void 0) {
        t.set(e);
        return;
      }
      let o = new Dr({ ...a, autoplay: !1 }),
        s = Math.max(vi, Vt.now() - this.startTime),
        c = Ze(0, vi, s - vi),
        l = o.sample(s).value,
        { name: u } = this.options;
      (i && u && ri(i, u, l),
        t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c),
        o.stop());
    }
  },
  bi = (e, t) =>
    t !== `zIndex` &&
    !!(
      typeof e == `number` ||
      Array.isArray(e) ||
      (typeof e == `string` &&
        (jn.test(e) || e === `0`) &&
        !e.startsWith(`url(`))
    );
function xi(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Si(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === `display` || t === `visibility`) return !0;
  let a = e[e.length - 1],
    o = bi(i, t),
    s = bi(a, t);
  return (
    `${t}${i}${a}${o ? a : i}`,
    !o || !s ? !1 : xi(e) || ((n === `spring` || fi(n)) && r)
  );
}
function Ci(e) {
  ((e.duration = 0), (e.type = `keyframes`));
}
var wi = new Set([
    `opacity`,
    `clipPath`,
    `filter`,
    `transform`,
    `backgroundColor`,
  ]),
  Ti = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Ei(e) {
  for (let t = 0; t < e.length; t++)
    if (typeof e[t] == `string` && Ti.test(e[t])) return !0;
  return !1;
}
var Di = new Set([
    `color`,
    `backgroundColor`,
    `outlineColor`,
    `fill`,
    `stroke`,
    `borderColor`,
    `borderTopColor`,
    `borderRightColor`,
    `borderBottomColor`,
    `borderLeftColor`,
  ]),
  Oi = nt(() => Object.hasOwnProperty.call(Element.prototype, `animate`));
function ki(e) {
  let {
      motionValue: t,
      name: n,
      repeatDelay: r,
      repeatType: i,
      damping: a,
      type: o,
      keyframes: s,
    } = e,
    c = t?.owner?.current;
  if (!(c instanceof HTMLElement) && !(c instanceof SVGElement)) return !1;
  let { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return (
    Oi() &&
    n &&
    (wi.has(n) || (Di.has(n) && Ei(s))) &&
    (n !== `transform` || !u) &&
    !l &&
    !r &&
    i !== `mirror` &&
    a !== 0 &&
    o !== `inertia`
  );
}
var Ai = 40,
  ji = class extends Tr {
    constructor({
      autoplay: e = !0,
      delay: t = 0,
      type: n = `keyframes`,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: a = `loop`,
      keyframes: o,
      name: s,
      motionValue: c,
      element: l,
      ...u
    }) {
      (super(),
        (this.stop = () => {
          (this._animation && (this._animation.stop(), this.stopTimeline?.()),
            this.keyframeResolver?.cancel());
        }),
        (this.createdAt = Vt.now()));
      let d = {
          autoplay: e,
          delay: t,
          type: n,
          repeat: r,
          repeatDelay: i,
          repeatType: a,
          name: s,
          motionValue: c,
          element: l,
          ...u,
        },
        f = l?.KeyframeResolver || ti;
      ((this.keyframeResolver = new f(
        o,
        (e, t, n) => this.onKeyframesResolved(e, t, d, !n),
        s,
        c,
        l,
      )),
        this.keyframeResolver?.scheduleResolve());
    }
    onKeyframesResolved(e, t, n, r) {
      this.keyframeResolver = void 0;
      let {
        name: i,
        type: a,
        velocity: o,
        delay: s,
        isHandoff: c,
        onUpdate: l,
      } = n;
      this.resolvedAt = Vt.now();
      let u = !0;
      Si(e, i, a, o) ||
        ((u = !1),
        (Qe.instantAnimations || !s) && l?.(Sr(e, n, t)),
        (e[0] = e[e.length - 1]),
        Ci(n),
        (n.repeat = 0));
      let d = {
          startTime: r
            ? this.resolvedAt && this.resolvedAt - this.createdAt > Ai
              ? this.resolvedAt
              : this.createdAt
            : void 0,
          finalKeyframe: t,
          ...n,
          keyframes: e,
        },
        f = u && !c && ki(d),
        p = d.motionValue?.owner?.current,
        m;
      if (f)
        try {
          m = new yi({ ...d, element: p });
        } catch {
          m = new Dr(d);
        }
      else m = new Dr(d);
      (m.finished
        .then(() => {
          this.notifyFinished();
        })
        .catch(rt),
        (this.pendingTimeline &&=
          ((this.stopTimeline = m.attachTimeline(this.pendingTimeline)),
          void 0)),
        (this._animation = m));
    }
    get finished() {
      return this._animation ? this.animation.finished : this._finished;
    }
    then(e, t) {
      return this.finished.finally(e).then(() => {});
    }
    get animation() {
      return (
        this._animation || (this.keyframeResolver?.resume(), ei()),
        this._animation
      );
    }
    get duration() {
      return this.animation.duration;
    }
    get iterationDuration() {
      return this.animation.iterationDuration;
    }
    get time() {
      return this.animation.time;
    }
    set time(e) {
      this.animation.time = e;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(e) {
      this.animation.speed = e;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(e) {
      return (
        this._animation
          ? (this.stopTimeline = this.animation.attachTimeline(e))
          : (this.pendingTimeline = e),
        () => this.stop()
      );
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      (this._animation && this.animation.cancel(),
        this.keyframeResolver?.cancel());
    }
  };
function Mi(e, t, n, r = 0, i = 1) {
  let a = Array.from(e)
      .sort((e, t) => e.sortNodePosition(t))
      .indexOf(t),
    o = e.size,
    s = (o - 1) * r;
  return typeof n == `function` ? n(a, o) : i === 1 ? a * r : s - a * r;
}
var Ni = 30,
  Pi = (e) => !isNaN(parseFloat(e)),
  Fi = { current: void 0 },
  Ii = class {
    constructor(e, t = {}) {
      ((this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (e) => {
          let t = Vt.now();
          if (
            (this.updatedAt !== t && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(e),
            this.current !== this.prev &&
              (this.events.change?.notify(this.current), this.dependents))
          )
            for (let e of this.dependents) e.dirty();
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner));
    }
    setCurrent(e) {
      ((this.current = e),
        (this.updatedAt = Vt.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = Pi(this.current)));
    }
    setPrevFrameValue(e = this.current) {
      ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(e) {
      return this.on(`change`, e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new ot());
      let n = this.events[e].add(t);
      return e === `change`
        ? () => {
            (n(),
              j.read(() => {
                this.events.change.getSize() || this.stop();
              }));
          }
        : n;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      ((this.passiveEffect = e), (this.stopPassiveEffect = t));
    }
    set(e) {
      this.passiveEffect
        ? this.passiveEffect(e, this.updateAndNotify)
        : this.updateAndNotify(e);
    }
    setWithVelocity(e, t, n) {
      (this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n));
    }
    jump(e, t = !0) {
      (this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
    dirty() {
      this.events.change?.notify(this.current);
    }
    addDependent(e) {
      ((this.dependents ||= new Set()), this.dependents.add(e));
    }
    removeDependent(e) {
      this.dependents && this.dependents.delete(e);
    }
    get() {
      return (Fi.current && Fi.current.push(this), this.current);
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = Vt.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > Ni
      )
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, Ni);
      return lt(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          ((this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify());
        }).then(() => {
          (this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation());
        })
      );
    }
    stop() {
      (this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation());
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      (this.dependents?.clear(),
        this.events.destroy?.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
  };
function Li(e, t) {
  return new Ii(e, t);
}
function Ri(e, t) {
  if (e?.inherit && t) {
    let { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function zi(e, t) {
  let n = e?.[t] ?? e?.default ?? e;
  return n === e ? n : Ri(n, e);
}
var Bi = { type: `spring`, stiffness: 500, damping: 25, restSpeed: 10 },
  Vi = (e) => ({
    type: `spring`,
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Hi = { type: `keyframes`, duration: 0.8 },
  Ui = { type: `keyframes`, ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Wi = (e, { keyframes: t }) =>
    t.length > 2
      ? Hi
      : Hr.has(e)
        ? e.startsWith(`scale`)
          ? Vi(t[1])
          : Bi
        : Ui,
  Gi = new Set([
    `when`,
    `delay`,
    `delayChildren`,
    `staggerChildren`,
    `staggerDirection`,
    `repeat`,
    `repeatType`,
    `repeatDelay`,
    `from`,
    `elapsed`,
  ]);
function Ki(e) {
  for (let t in e) if (!Gi.has(t)) return !0;
  return !1;
}
var qi =
    (e, t, n, r = {}, i, a) =>
    (o) => {
      let s = zi(r, e) || {},
        c = s.delay || r.delay || 0,
        { elapsed: l = 0 } = r;
      l -= st(c);
      let u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: `easeOut`,
        velocity: t.getVelocity(),
        ...s,
        delay: -l,
        onUpdate: (e) => {
          (t.set(e), s.onUpdate && s.onUpdate(e));
        },
        onComplete: () => {
          (o(), s.onComplete && s.onComplete());
        },
        name: e,
        motionValue: t,
        element: a ? void 0 : i,
      };
      (Ki(s) || Object.assign(u, Wi(e, u)),
        (u.duration &&= st(u.duration)),
        (u.repeatDelay &&= st(u.repeatDelay)),
        u.from !== void 0 && (u.keyframes[0] = u.from));
      let d = !1;
      if (
        ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
          (Ci(u), u.delay === 0 && (d = !0)),
        (Qe.instantAnimations ||
          Qe.skipAnimations ||
          i?.shouldSkipAnimations ||
          s.skipAnimations) &&
          ((d = !0), Ci(u), (u.delay = 0)),
        (u.allowFlatten = !s.type && !s.ease),
        d && !a && t.get() !== void 0)
      ) {
        let e = Sr(u.keyframes, s);
        if (e !== void 0) {
          j.update(() => {
            (u.onUpdate(e), u.onComplete());
          });
          return;
        }
      }
      return s.isSync ? new Dr(u) : new ji(u);
    },
  Ji = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Yi(e) {
  let t = Ji.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Xi(e, t, n = 1) {
  `${e}`;
  let [r, i] = Yi(e);
  if (!r) return;
  let a = window.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    let e = a.trim();
    return $e(e) ? parseFloat(e) : e;
  }
  return Gt(i) ? Xi(i, t, n + 1) : i;
}
function Zi(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((e, n) => {
      ((t[0][n] = e.get()), (t[1][n] = e.getVelocity()));
    }),
    t
  );
}
function Qi(e, t, n, r) {
  if (typeof t == `function`) {
    let [i, a] = Zi(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  if (
    (typeof t == `string` && (t = e.variants && e.variants[t]),
    typeof t == `function`)
  ) {
    let [i, a] = Zi(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  return t;
}
function $i(e, t, n) {
  let r = e.getProps();
  return Qi(r, t, n === void 0 ? r.custom : n, e);
}
var ea = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...Vr]),
  ta = (e) => Array.isArray(e);
function na(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Li(n));
}
function ra(e) {
  return ta(e) ? e[e.length - 1] || 0 : e;
}
function ia(e, t) {
  let { transitionEnd: n = {}, transition: r = {}, ...i } = $i(e, t) || {};
  i = { ...i, ...n };
  for (let t in i) na(e, t, ra(i[t]));
}
var aa = (e) => !!(e && e.getVelocity);
function oa(e) {
  return !!(aa(e) && e.add);
}
function sa(e, t) {
  let n = e.getValue(`willChange`);
  if (oa(n)) return n.add(t);
  if (!n && Qe.WillChange) {
    let n = new Qe.WillChange(`auto`);
    (e.addValue(`willChange`, n), n.add(t));
  }
}
function ca(e) {
  return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var F = `data-` + ca(`framerAppearId`);
function I(e) {
  return e.props[F];
}
function la({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function ua(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a, transitionEnd: o, ...s } = t,
    c = e.getDefaultTransition();
  a = a ? Ri(a, c) : c;
  let l = a?.reduceMotion,
    u = a?.skipAnimations;
  r && (a = r);
  let d = [],
    f = i && e.animationState && e.animationState.getState()[i],
    p = a?.path;
  p && p.animateVisualElement(e, s, a, n, d);
  for (let t in s) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = s[t];
    if (i === void 0 || (f && la(f, t))) continue;
    let o = { delay: n, ...zi(a || {}, t) };
    u && (o.skipAnimations = !0);
    let c = r.get();
    if (
      c !== void 0 &&
      !r.isAnimating() &&
      !Array.isArray(i) &&
      i === c &&
      !o.velocity
    ) {
      j.update(() => r.set(i));
      continue;
    }
    let p = !1;
    if (window.MotionHandoffAnimation) {
      let n = I(e);
      if (n) {
        let e = window.MotionHandoffAnimation(n, t, j);
        e !== null && ((o.startTime = e), (p = !0));
      }
    }
    sa(e, t);
    let m = l ?? e.shouldReduceMotion;
    r.start(qi(t, r, i, m && ea.has(t) ? { type: !1 } : o, e, p));
    let h = r.animation;
    h && d.push(h);
  }
  if (o) {
    let t = () =>
      j.update(() => {
        o && ia(e, o);
      });
    d.length ? Promise.all(d).then(t) : t();
  }
  return d;
}
function da(e, t, n = {}) {
  let r = $i(e, t, n.type === `exit` ? e.presenceContext?.custom : void 0),
    { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  let a = r ? () => Promise.all(ua(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (r = 0) => {
            let {
              delayChildren: a = 0,
              staggerChildren: o,
              staggerDirection: s,
            } = i;
            return fa(e, t, r, a, o, s, n);
          }
        : () => Promise.resolve(),
    { when: s } = i;
  if (s) {
    let [e, t] = s === `beforeChildren` ? [a, o] : [o, a];
    return e().then(() => t());
  }
  return Promise.all([a(), o(n.delay)]);
}
function fa(e, t, n = 0, r = 0, i = 0, a = 1, o) {
  let s = [];
  for (let c of e.variantChildren)
    (c.notify(`AnimationStart`, t),
      s.push(
        da(c, t, {
          ...o,
          delay:
            n +
            (typeof r == `function` ? 0 : r) +
            Mi(e.variantChildren, c, r, i, a),
        }).then(() => c.notify(`AnimationComplete`, t)),
      ));
  return Promise.all(s);
}
function pa(e, t, n = {}) {
  e.notify(`AnimationStart`, t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((t) => da(e, t, n));
    r = Promise.all(i);
  } else if (typeof t == `string`) r = da(e, t, n);
  else {
    let i = typeof t == `function` ? $i(e, t, n.custom) : t;
    r = Promise.all(ua(e, i, n));
  }
  return r.then(() => {
    e.notify(`AnimationComplete`, t);
  });
}
var ma = { test: (e) => e === `auto`, parse: (e) => e },
  ha = (e) => (t) => t.test(e),
  ga = [Jt, N, un, ln, fn, dn, ma],
  _a = (e) => ga.find(ha(e));
function va(e) {
  return typeof e == `number`
    ? e === 0
    : e === null || e === `none` || e === `0` || tt(e);
}
var ya = new Set([`brightness`, `contrast`, `saturate`, `opacity`]);
function ba(e) {
  let [t, n] = e.slice(0, -1).split(`(`);
  if (t === `drop-shadow`) return e;
  let [r] = n.match(Qt) || [];
  if (!r) return e;
  let i = n.replace(r, ``),
    a = +!!ya.has(t);
  return (r !== n && (a *= 100), t + `(` + a + i + `)`);
}
var xa = /\b([a-z-]*)\(.*?\)/gu,
  Sa = {
    ...jn,
    getAnimatableNone: (e) => {
      let t = e.match(xa);
      return t ? t.map(ba).join(` `) : e;
    },
  },
  Ca = {
    ...jn,
    getAnimatableNone: (e) => {
      let t = jn.parse(e);
      return jn.createTransformer(e)(
        t.map((e) =>
          typeof e == `number`
            ? 0
            : typeof e == `object`
              ? { ...e, alpha: 1 }
              : e,
        ),
      );
    },
  },
  wa = { ...Jt, transform: Math.round },
  Ta = {
    borderWidth: N,
    borderTopWidth: N,
    borderRightWidth: N,
    borderBottomWidth: N,
    borderLeftWidth: N,
    borderRadius: N,
    borderTopLeftRadius: N,
    borderTopRightRadius: N,
    borderBottomRightRadius: N,
    borderBottomLeftRadius: N,
    width: N,
    maxWidth: N,
    height: N,
    maxHeight: N,
    top: N,
    right: N,
    bottom: N,
    left: N,
    inset: N,
    insetBlock: N,
    insetBlockStart: N,
    insetBlockEnd: N,
    insetInline: N,
    insetInlineStart: N,
    insetInlineEnd: N,
    padding: N,
    paddingTop: N,
    paddingRight: N,
    paddingBottom: N,
    paddingLeft: N,
    paddingBlock: N,
    paddingBlockStart: N,
    paddingBlockEnd: N,
    paddingInline: N,
    paddingInlineStart: N,
    paddingInlineEnd: N,
    margin: N,
    marginTop: N,
    marginRight: N,
    marginBottom: N,
    marginLeft: N,
    marginBlock: N,
    marginBlockStart: N,
    marginBlockEnd: N,
    marginInline: N,
    marginInlineStart: N,
    marginInlineEnd: N,
    fontSize: N,
    backgroundPositionX: N,
    backgroundPositionY: N,
    rotate: ln,
    pathRotation: ln,
    rotateX: ln,
    rotateY: ln,
    rotateZ: ln,
    scale: Xt,
    scaleX: Xt,
    scaleY: Xt,
    scaleZ: Xt,
    skew: ln,
    skewX: ln,
    skewY: ln,
    distance: N,
    translateX: N,
    translateY: N,
    translateZ: N,
    x: N,
    y: N,
    z: N,
    perspective: N,
    transformPerspective: N,
    opacity: Yt,
    originX: pn,
    originY: pn,
    originZ: N,
    zIndex: wa,
    fillOpacity: Yt,
    strokeOpacity: Yt,
    numOctaves: wa,
  },
  Ea = {
    ...Ta,
    color: hn,
    backgroundColor: hn,
    outlineColor: hn,
    fill: hn,
    stroke: hn,
    borderColor: hn,
    borderTopColor: hn,
    borderRightColor: hn,
    borderBottomColor: hn,
    borderLeftColor: hn,
    filter: Sa,
    WebkitFilter: Sa,
    mask: Ca,
    WebkitMask: Ca,
  },
  Da = (e) => Ea[e],
  Oa = new Set([Sa, Ca]);
function ka(e, t) {
  let n = Da(e);
  return (
    Oa.has(n) || (n = jn),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
var Aa = new Set([`auto`, `none`, `0`]);
function ja(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i;) {
    let t = e[r];
    (typeof t == `string` && !Aa.has(t) && wn(t).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (let r of t) e[r] = ka(n, i);
}
var Ma = class extends ti {
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i, !0);
    }
    readKeyframes() {
      let { unresolvedKeyframes: e, element: t, name: n } = this;
      if (!t || !t.current) return;
      super.readKeyframes();
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (typeof r == `string` && ((r = r.trim()), Gt(r))) {
          let i = Xi(r, t.current);
          (i !== void 0 && (e[n] = i),
            n === e.length - 1 && (this.finalKeyframe = r));
        }
      }
      if ((this.resolveNoneKeyframes(), !ea.has(n) || e.length !== 2)) return;
      let [r, i] = e,
        a = _a(r),
        o = _a(i);
      if (qt(r) !== qt(i) && qr[n]) this.needsMeasurement = !0;
      else if (a !== o) {
        if (Ur(a) && Ur(o))
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            typeof n == `string` && (e[t] = parseFloat(n));
          }
        else qr[n] && (this.needsMeasurement = !0);
      }
    }
    resolveNoneKeyframes() {
      let { unresolvedKeyframes: e, name: t } = this,
        n = [];
      for (let t = 0; t < e.length; t++)
        (e[t] === null || va(e[t])) && n.push(t);
      n.length && ja(e, n, t);
    }
    measureInitialState() {
      let { element: e, unresolvedKeyframes: t, name: n } = this;
      if (!e || !e.current) return;
      (n === `height` && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = qr[n](
          e.measureViewportBox(),
          window.getComputedStyle(e.current),
        )),
        (t[0] = this.measuredOrigin));
      let r = t[t.length - 1];
      r !== void 0 && e.getValue(n, r).jump(r, !1);
    }
    measureEndState() {
      let { element: e, name: t, unresolvedKeyframes: n } = this;
      if (!e || !e.current) return;
      let r = e.getValue(t);
      r && r.jump(this.measuredOrigin, !1);
      let i = n.length - 1,
        a = n[i];
      ((n[i] = qr[t](
        e.measureViewportBox(),
        window.getComputedStyle(e.current),
      )),
        a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
        this.removedTransforms?.length &&
          this.removedTransforms.forEach(([t, n]) => {
            e.getValue(t).set(n);
          }),
        this.resolveNoneKeyframes());
    }
  },
  Na = [
    `borderTopLeftRadius`,
    `borderTopRightRadius`,
    `borderBottomRightRadius`,
    `borderBottomLeftRadius`,
  ];
function Pa(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == `string`) {
    let r = document;
    t && (r = t.current);
    let i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter((e) => e != null);
}
var Fa = (e, t) => (t && typeof e == `number` ? t.transform(e) : e);
function Ia(e) {
  return et(e) && `offsetHeight` in e && !(`ownerSVGElement` in e);
}
var { schedule: La, cancel: Ra } = Ft(queueMicrotask, !1),
  za = { x: !1, y: !1 };
function Ba() {
  return za.x || za.y;
}
function Va(e) {
  return e === `x` || e === `y`
    ? za[e]
      ? null
      : ((za[e] = !0),
        () => {
          za[e] = !1;
        })
    : za.x || za.y
      ? null
      : ((za.x = za.y = !0),
        () => {
          za.x = za.y = !1;
        });
}
function Ha(e, t) {
  let n = Pa(e),
    r = new AbortController();
  return [n, { passive: !0, ...t, signal: r.signal }, () => r.abort()];
}
function Ua(e) {
  return !(e.pointerType === `touch` || Ba());
}
function Wa(e, t, n = {}) {
  let [r, i, a] = Ha(e, n);
  return (
    r.forEach((e) => {
      let n = !1,
        r = !1,
        a,
        o = () => {
          e.removeEventListener(`pointerleave`, u);
        },
        s = (e) => {
          ((a &&= (a(e), void 0)), o());
        },
        c = (e) => {
          ((n = !1),
            window.removeEventListener(`pointerup`, c),
            window.removeEventListener(`pointercancel`, c),
            r && ((r = !1), s(e)));
        },
        l = () => {
          ((n = !0),
            window.addEventListener(`pointerup`, c, i),
            window.addEventListener(`pointercancel`, c, i));
        },
        u = (e) => {
          e.pointerType !== `touch` && (n ? (r = !0) : s(e));
        };
      (e.addEventListener(
        `pointerenter`,
        (n) => {
          if (!Ua(n)) return;
          r = !1;
          let o = t(e, n);
          typeof o == `function` &&
            ((a = o), e.addEventListener(`pointerleave`, u, i));
        },
        i,
      ),
        e.addEventListener(`pointerdown`, l, i));
    }),
    a
  );
}
var Ga = (e, t) => (t ? e === t || Ga(e, t.parentElement) : !1),
  Ka = (e) =>
    e.pointerType === `mouse`
      ? typeof e.button != `number` || e.button <= 0
      : e.isPrimary !== !1,
  qa = new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`]);
function Ja(e) {
  return qa.has(e.tagName) || e.isContentEditable === !0;
}
var Ya = new Set([`INPUT`, `SELECT`, `TEXTAREA`]);
function Xa(e) {
  return Ya.has(e.tagName) || e.isContentEditable === !0;
}
var Za = new WeakSet();
function Qa(e) {
  return (t) => {
    t.key === `Enter` && e(t);
  };
}
function $a(e, t) {
  e.dispatchEvent(
    new PointerEvent(`pointer` + t, { isPrimary: !0, bubbles: !0 }),
  );
}
var eo = (e, t) => {
  let n = e.currentTarget;
  if (!n) return;
  let r = Qa(() => {
    if (Za.has(n)) return;
    $a(n, `down`);
    let e = Qa(() => {
      $a(n, `up`);
    });
    (n.addEventListener(`keyup`, e, t),
      n.addEventListener(`blur`, () => $a(n, `cancel`), t));
  });
  (n.addEventListener(`keydown`, r, t),
    n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t));
};
function to(e) {
  return Ka(e) && !Ba();
}
var no = new WeakSet();
function ro(e, t, n = {}) {
  let [r, i, a] = Ha(e, n),
    o = (e) => {
      let r = e.currentTarget;
      if (!to(e) || no.has(e)) return;
      (Za.add(r), n.stopPropagation && no.add(e));
      let a = t(r, e),
        o = { ...i, capture: !0 },
        s = (e, t) => {
          (window.removeEventListener(`pointerup`, c, o),
            window.removeEventListener(`pointercancel`, l, o),
            Za.has(r) && Za.delete(r),
            to(e) && typeof a == `function` && a(e, { success: t }));
        },
        c = (e) => {
          s(
            e,
            r === window ||
              r === document ||
              n.useGlobalTarget ||
              Ga(r, e.target),
          );
        },
        l = (e) => {
          s(e, !1);
        };
      (window.addEventListener(`pointerup`, c, o),
        window.addEventListener(`pointercancel`, l, o));
    };
  return (
    r.forEach((e) => {
      ((n.useGlobalTarget ? window : e).addEventListener(`pointerdown`, o, i),
        Ia(e) &&
          (e.addEventListener(`focus`, (e) => eo(e, i)),
          !Ja(e) && !e.hasAttribute(`tabindex`) && (e.tabIndex = 0)));
    }),
    a
  );
}
function io(e) {
  return et(e) && `ownerSVGElement` in e;
}
var ao = new WeakMap(),
  oo,
  so = (e, t, n) => (r, i) =>
    i && i[0]
      ? i[0][e + `Size`]
      : io(r) && `getBBox` in r
        ? r.getBBox()[t]
        : r[n],
  co = so(`inline`, `width`, `offsetWidth`),
  lo = so(`block`, `height`, `offsetHeight`);
function uo({ target: e, borderBoxSize: t }) {
  ao.get(e)?.forEach((n) => {
    n(e, {
      get width() {
        return co(e, t);
      },
      get height() {
        return lo(e, t);
      },
    });
  });
}
function fo(e) {
  e.forEach(uo);
}
function po() {
  typeof ResizeObserver < `u` && (oo = new ResizeObserver(fo));
}
function mo(e, t) {
  oo || po();
  let n = Pa(e);
  return (
    n.forEach((e) => {
      let n = ao.get(e);
      (n || ((n = new Set()), ao.set(e, n)), n.add(t), oo?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = ao.get(e);
        (n?.delete(t), n?.size || oo?.unobserve(e));
      });
    }
  );
}
var ho = new Set(),
  go;
function _o() {
  ((go = () => {
    let e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    ho.forEach((t) => t(e));
  }),
    window.addEventListener(`resize`, go));
}
function vo(e) {
  return (
    ho.add(e),
    go || _o(),
    () => {
      (ho.delete(e),
        !ho.size &&
          typeof go == `function` &&
          (window.removeEventListener(`resize`, go), (go = void 0)));
    }
  );
}
function yo(e, t) {
  return typeof e == `function` ? vo(e) : mo(e, t);
}
var bo = { value: null, addProjectionMetrics: null };
function xo(e) {
  return io(e) && e.tagName === `svg`;
}
var So = [...ga, hn, jn],
  Co = (e) => So.find(ha(e)),
  wo = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  To = () => ({ x: wo(), y: wo() }),
  Eo = () => ({ min: 0, max: 0 }),
  L = () => ({ x: Eo(), y: Eo() }),
  Do = new WeakMap();
function Oo(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`;
}
function ko(e) {
  return typeof e == `string` || Array.isArray(e);
}
var Ao = [
    `animate`,
    `whileInView`,
    `whileFocus`,
    `whileHover`,
    `whileTap`,
    `whileDrag`,
    `exit`,
  ],
  jo = [`initial`, ...Ao];
function Mo(e) {
  return Oo(e.animate) || jo.some((t) => ko(e[t]));
}
function No(e) {
  return !!(Mo(e) || e.variants);
}
function Po(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r];
    if (aa(i)) e.addValue(r, i);
    else if (aa(a)) e.addValue(r, Li(i, { owner: e }));
    else if (a !== i) {
      if (e.hasValue(r)) {
        let t = e.getValue(r);
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
      } else {
        let t = e.getStaticValue(r);
        e.addValue(r, Li(t === void 0 ? i : t, { owner: e }));
      }
    }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
var Fo = { current: null },
  Io = { current: !1 },
  Lo = typeof window < `u`;
function Ro() {
  if (((Io.current = !0), Lo)) {
    if (window.matchMedia) {
      let e = window.matchMedia(`(prefers-reduced-motion)`),
        t = () => (Fo.current = e.matches);
      (e.addEventListener(`change`, t), t());
    } else Fo.current = !1;
  }
}
var zo = [
    `AnimationStart`,
    `AnimationComplete`,
    `Update`,
    `BeforeLayoutMeasure`,
    `LayoutMeasure`,
    `LayoutAnimationStart`,
    `LayoutAnimationComplete`,
  ],
  Bo = {};
function Vo(e) {
  Bo = e;
}
function Ho() {
  return Bo;
}
var Uo = class {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        skipAnimations: i,
        blockInitialAnimation: a,
        visualState: o,
      },
      s = {},
    ) {
      ((this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.shouldSkipAnimations = !1),
        (this.values = new Map()),
        (this.KeyframeResolver = ti),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.hasBeenMounted = !1),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify(`Update`, this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection,
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          let e = Vt.now();
          this.renderScheduledAt < e &&
            ((this.renderScheduledAt = e), j.render(this.render, !1, !0));
        }));
      let { latestValues: c, renderState: l } = o;
      ((this.latestValues = c),
        (this.baseTarget = { ...c }),
        (this.initialValues = t.initial ? { ...c } : {}),
        (this.renderState = l),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.skipAnimationsConfig = i),
        (this.options = s),
        (this.blockInitialAnimation = !!a),
        (this.isControllingVariants = Mo(t)),
        (this.isVariantNode = No(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current)));
      let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
        t,
        {},
        this,
      );
      for (let e in d) {
        let t = d[e];
        c[e] !== void 0 && aa(t) && t.set(c[e]);
      }
    }
    mount(e) {
      if (this.hasBeenMounted)
        for (let e in this.initialValues)
          (this.values.get(e)?.jump(this.initialValues[e]),
            (this.latestValues[e] = this.initialValues[e]));
      ((this.current = e),
        Do.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
        this.reducedMotionConfig === `never`
          ? (this.shouldReduceMotion = !1)
          : this.reducedMotionConfig === `always`
            ? (this.shouldReduceMotion = !0)
            : (Io.current || Ro(), (this.shouldReduceMotion = Fo.current)),
        (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
        this.parent?.addChild(this),
        this.update(this.props, this.presenceContext),
        (this.hasBeenMounted = !0));
    }
    unmount() {
      (this.projection && this.projection.unmount(),
        It(this.notifyUpdate),
        It(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this));
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) {
        let t = this.features[e];
        t && (t.unmount(), (t.isMounted = !1));
      }
      this.current = null;
    }
    addChild(e) {
      (this.children.add(e),
        (this.enteringChildren ??= new Set()),
        this.enteringChildren.add(e));
    }
    removeChild(e) {
      (this.children.delete(e),
        this.enteringChildren && this.enteringChildren.delete(e));
    }
    bindToMotionValue(e, t) {
      if (
        (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
        t.accelerate && wi.has(e) && this.current instanceof HTMLElement)
      ) {
        let {
            factory: n,
            keyframes: r,
            times: i,
            ease: a,
            duration: o,
          } = t.accelerate,
          s = new mi({
            element: this.current,
            name: e,
            keyframes: r,
            times: i,
            ease: a,
            duration: st(o),
          }),
          c = n(s);
        this.valueSubscriptions.set(e, () => {
          (c(), s.cancel());
        });
        return;
      }
      let n = Hr.has(e);
      n && this.onBindTransform && this.onBindTransform();
      let r = t.on(`change`, (t) => {
          ((this.latestValues[e] = t),
            this.props.onUpdate && j.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender());
        }),
        i;
      (typeof window < `u` &&
        window.MotionCheckAppearSync &&
        (i = window.MotionCheckAppearSync(this, e, t)),
        this.valueSubscriptions.set(e, () => {
          (r(), i && i());
        }));
    }
    sortNodePosition(e) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    updateFeatures() {
      let e = `animation`;
      for (e in Bo) {
        let t = Bo[e];
        if (!t) continue;
        let { isEnabled: n, Feature: r } = t;
        if (
          (!this.features[e] &&
            r &&
            n(this.props) &&
            (this.features[e] = new r(this)),
          this.features[e])
        ) {
          let t = this.features[e];
          t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : L();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      ((e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t));
      for (let t = 0; t < zo.length; t++) {
        let n = zo[t];
        this.propEventSubscriptions[n] &&
          (this.propEventSubscriptions[n](),
          delete this.propEventSubscriptions[n]);
        let r = e[`on` + n];
        r && (this.propEventSubscriptions[n] = this.on(n, r));
      }
      ((this.prevMotionValues = Po(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
        this.prevMotionValues,
      )),
        this.handleChildMotionValue && this.handleChildMotionValue());
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode();
      if (t)
        return (
          t.variantChildren && t.variantChildren.add(e),
          () => t.variantChildren.delete(e)
        );
    }
    addValue(e, t) {
      let n = this.values.get(e);
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()));
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      (t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState));
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let n = this.values.get(e);
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = Li(t === null ? void 0 : t, { owner: this })),
          this.addValue(e, n)),
        n
      );
    }
    readValue(e, t) {
      let n =
        this.latestValues[e] !== void 0 || !this.current
          ? this.latestValues[e]
          : (this.getBaseTargetFromProps(this.props, e) ??
            this.readValueFromInstance(this.current, e, this.options));
      return (
        n != null &&
          (typeof n == `string` && ($e(n) || tt(n))
            ? (n = parseFloat(n))
            : !Co(n) && jn.test(t) && (n = ka(e, t)),
          this.setBaseTarget(e, aa(n) ? n.get() : n)),
        aa(n) ? n.get() : n
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      let { initial: t } = this.props,
        n;
      if (typeof t == `string` || typeof t == `object`) {
        let r = Qi(this.props, t, this.presenceContext?.custom);
        r && (n = r[e]);
      }
      if (t && n !== void 0) return n;
      let r = this.getBaseTargetFromProps(this.props, e);
      return r !== void 0 && !aa(r)
        ? r
        : this.initialValues[e] !== void 0 && n === void 0
          ? void 0
          : this.baseTarget[e];
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new ot()),
        this.events[e].add(t)
      );
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
    scheduleRenderMicrotask() {
      La.render(this.render);
    }
  },
  Wo = class extends Uo {
    constructor() {
      (super(...arguments), (this.KeyframeResolver = Ma));
    }
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      let n = e.style;
      return n ? n[t] : void 0;
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      (delete t[e], delete n[e]);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      aa(e) &&
        (this.childSubscription = e.on(`change`, (e) => {
          this.current && (this.current.textContent = `${e}`);
        }));
    }
  },
  Go = class {
    constructor(e) {
      ((this.isMounted = !1), (this.node = e));
    }
    update() {}
  };
function R({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function z({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Ko(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function qo(e) {
  return e === void 0 || e === 1;
}
function Jo({ scale: e, scaleX: t, scaleY: n }) {
  return !qo(e) || !qo(t) || !qo(n);
}
function Yo(e) {
  return (
    Jo(e) ||
    Xo(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Xo(e) {
  return Zo(e.x) || Zo(e.y);
}
function Zo(e) {
  return e && e !== `0%`;
}
function Qo(e, t, n) {
  return n + t * (e - n);
}
function $o(e, t, n, r, i) {
  return (i !== void 0 && (e = Qo(e, i, r)), Qo(e, n, r) + t);
}
function B(e, t = 0, n = 1, r, i) {
  ((e.min = $o(e.min, t, n, r, i)), (e.max = $o(e.max, t, n, r, i)));
}
function es(e, { x: t, y: n }) {
  (B(e.x, t.translate, t.scale, t.originPoint),
    B(e.y, n.translate, n.scale, n.originPoint));
}
var ts = 0.999999999999,
  ns = 1.0000000000001;
function rs(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let a, o;
  for (let s = 0; s < i; s++) {
    ((a = n[s]), (o = a.projectionDelta));
    let { visualElement: i } = a.options;
    (i && i.props.style && i.props.style.display === `contents`) ||
      (r &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        (is(e.x, -a.scroll.offset.x), is(e.y, -a.scroll.offset.y)),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), es(e, o)),
      r && Yo(a.latestValues) && ss(e, a.latestValues, a.layout?.layoutBox));
  }
  (t.x < ns && t.x > ts && (t.x = 1), t.y < ns && t.y > ts && (t.y = 1));
}
function is(e, t) {
  ((e.min += t), (e.max += t));
}
function as(e, t, n, r, i = 0.5) {
  B(e, t, n, P(e.min, e.max, i), r);
}
function os(e, t) {
  return typeof e == `string` ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function ss(e, t, n) {
  let r = n ?? e;
  (as(e.x, os(t.x, r.x), t.scaleX, t.scale, t.originX),
    as(e.y, os(t.y, r.y), t.scaleY, t.scale, t.originY));
}
function cs(e, t) {
  return R(Ko(e.getBoundingClientRect(), t));
}
function ls(e, t, n) {
  let r = cs(e, n),
    { scroll: i } = t;
  return (i && (is(r.x, i.offset.x), is(r.y, i.offset.y)), r);
}
var us = {
    x: `translateX`,
    y: `translateY`,
    z: `translateZ`,
    transformPerspective: `perspective`,
  },
  ds = Vr.length;
function fs(e, t, n) {
  let r = ``,
    i = !0;
  for (let a = 0; a < ds; a++) {
    let o = Vr[a],
      s = e[o];
    if (s === void 0) continue;
    let c = !0;
    if (typeof s == `number`) c = s === +!!o.startsWith(`scale`);
    else {
      let e = parseFloat(s);
      c = o.startsWith(`scale`) ? e === 1 : e === 0;
    }
    if (!c || n) {
      let e = Fa(s, Ta[o]);
      if (!c) {
        i = !1;
        let t = us[o] || o;
        r += `${t}(${e}) `;
      }
      n && (t[o] = e);
    }
  }
  let a = e.pathRotation;
  return (
    a && ((i = !1), (r += `rotate(${Fa(a, Ta.pathRotation)}) `)),
    (r = r.trim()),
    n ? (r = n(t, i ? `` : r)) : i && (r = `none`),
    r
  );
}
function ps(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    s = !1;
  for (let e in t) {
    let n = t[e];
    if (Hr.has(e)) o = !0;
    else if (Ut(e)) i[e] = n;
    else {
      let t = Fa(n, Ta[e]);
      e.startsWith(`origin`) ? ((s = !0), (a[e] = t)) : (r[e] = t);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = fs(t, e.transform, n))
        : (r.transform &&= `none`)),
    s)
  ) {
    let { originX: e = `50%`, originY: t = `50%`, originZ: n = 0 } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
function ms(e, { style: t, vars: n }, r, i) {
  let a = e.style,
    o;
  for (o in t) a[o] = t[o];
  for (o in (i?.applyProjectionStyles(a, r), n)) a.setProperty(o, n[o]);
}
function hs(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var gs = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == `string`) {
        if (N.test(e)) e = parseFloat(e);
        else return e;
      }
      return `${hs(e, t.target.x)}% ${hs(e, t.target.y)}%`;
    },
  },
  _s = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = jn.parse(e);
      if (i.length > 5) return r;
      let a = jn.createTransformer(e),
        o = typeof i[0] == `number` ? 0 : 1,
        s = n.x.scale * t.x,
        c = n.y.scale * t.y;
      ((i[0 + o] /= s), (i[1 + o] /= c));
      let l = P(s, c, 0.5);
      return (
        typeof i[2 + o] == `number` && (i[2 + o] /= l),
        typeof i[3 + o] == `number` && (i[3 + o] /= l),
        a(i)
      );
    },
  },
  vs = {
    borderRadius: { ...gs, applyTo: [...Na] },
    borderTopLeftRadius: gs,
    borderTopRightRadius: gs,
    borderBottomLeftRadius: gs,
    borderBottomRightRadius: gs,
    boxShadow: _s,
  };
function ys(e, { layout: t, layoutId: n }) {
  return (
    Hr.has(e) ||
    e.startsWith(`origin`) ||
    ((t || n !== void 0) && (!!vs[e] || e === `opacity`))
  );
}
function bs(e, t, n) {
  let r = e.style,
    i = t?.style,
    a = {};
  if (!r) return a;
  for (let t in r)
    (aa(r[t]) ||
      (i && aa(i[t])) ||
      ys(t, e) ||
      n?.getValue(t)?.liveStyle !== void 0) &&
      (a[t] = r[t]);
  return a;
}
function xs(e) {
  return window.getComputedStyle(e);
}
var Ss = class extends Wo {
    constructor() {
      (super(...arguments), (this.type = `html`), (this.renderInstance = ms));
    }
    mount(e) {
      (e.style, super.mount(e));
    }
    readValueFromInstance(e, t) {
      if (Hr.has(t)) return this.projection?.isProjecting ? Lr(t) : zr(e, t);
      {
        let n = xs(e),
          r = (Ut(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == `string` ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return cs(e, t);
    }
    build(e, t, n) {
      ps(e, t, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return bs(e, t, n);
    }
  },
  Cs = { offset: `stroke-dashoffset`, array: `stroke-dasharray` },
  ws = { offset: `strokeDashoffset`, array: `strokeDasharray` };
function Ts(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let a = i ? Cs : ws;
  ((e[a.offset] = `${-r}`), (e[a.array] = `${t} ${n}`));
}
var Es = [`offsetDistance`, `offsetPath`, `offsetRotate`, `offsetAnchor`];
function Ds(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: a = 1,
    pathOffset: o = 0,
    ...s
  },
  c,
  l,
  u,
) {
  if ((ps(e, s, l), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  let { attrs: d, style: f } = e;
  (d.transform && ((f.transform = d.transform), delete d.transform),
    (f.transform || d.transformOrigin) &&
      ((f.transformOrigin = d.transformOrigin ?? `50% 50%`),
      delete d.transformOrigin),
    f.transform &&
      ((f.transformBox = u?.transformBox ?? `fill-box`),
      delete d.transformBox));
  for (let e of Es) d[e] !== void 0 && ((f[e] = d[e]), delete d[e]);
  (t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && Ts(d, i, a, o, !1));
}
var Os = new Set([
    `baseFrequency`,
    `diffuseConstant`,
    `kernelMatrix`,
    `kernelUnitLength`,
    `keySplines`,
    `keyTimes`,
    `limitingConeAngle`,
    `markerHeight`,
    `markerWidth`,
    `numOctaves`,
    `targetX`,
    `targetY`,
    `surfaceScale`,
    `specularConstant`,
    `specularExponent`,
    `stdDeviation`,
    `tableValues`,
    `viewBox`,
    `gradientTransform`,
    `pathLength`,
    `startOffset`,
    `textLength`,
    `lengthAdjust`,
  ]),
  ks = (e) => typeof e == `string` && e.toLowerCase() === `svg`;
function As(e, t, n, r) {
  ms(e, t, void 0, r);
  for (let n in t.attrs) e.setAttribute(Os.has(n) ? n : ca(n), t.attrs[n]);
}
function js(e, t, n) {
  let r = bs(e, t, n);
  for (let n in e)
    if (aa(e[n]) || aa(t[n])) {
      let t =
        Vr.indexOf(n) === -1
          ? n
          : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
      r[t] = e[n];
    }
  return r;
}
var Ms = class extends Wo {
    constructor() {
      (super(...arguments),
        (this.type = `svg`),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = L));
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (Hr.has(t)) {
        let e = Da(t);
        return (e && e.default) || 0;
      }
      return ((t = Os.has(t) ? t : ca(t)), e.getAttribute(t));
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return js(e, t, n);
    }
    build(e, t, n) {
      Ds(e, t, this.isSVGTag, n.transformTemplate, n.style);
    }
    renderInstance(e, t, n, r) {
      As(e, t, n, r);
    }
    mount(e) {
      ((this.isSVGTag = ks(e.tagName)), super.mount(e));
    }
  },
  Ns = jo.length;
function Ps(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    let t = (e.parent && Ps(e.parent)) || {};
    return (e.props.initial !== void 0 && (t.initial = e.props.initial), t);
  }
  let t = {};
  for (let n = 0; n < Ns; n++) {
    let r = jo[n],
      i = e.props[r];
    (ko(i) || i === !1) && (t[r] = i);
  }
  return t;
}
function Fs(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
var Is = [...Ao].reverse(),
  Ls = Ao.length;
function Rs(e) {
  return (t) =>
    Promise.all(t.map(({ animation: t, options: n }) => pa(e, t, n)));
}
function zs(e) {
  let t = Rs(e),
    n = Hs(),
    r = !0,
    i = !1,
    a = (t) => (n, r) => {
      let i = $i(e, r, t === `exit` ? e.presenceContext?.custom : void 0);
      if (i) {
        let { transition: e, transitionEnd: t, ...r } = i;
        n = { ...n, ...r, ...t };
      }
      return n;
    };
  function o(n) {
    t = n(e);
  }
  function s(o) {
    let { props: s } = e,
      c = Ps(e.parent) || {},
      l = [],
      u = new Set(),
      d = {},
      f = 1 / 0;
    for (let t = 0; t < Ls; t++) {
      let p = Is[t],
        m = n[p],
        h = s[p] === void 0 ? c[p] : s[p],
        g = ko(h),
        _ = p === o ? m.isActive : null;
      _ === !1 && (f = t);
      let v = h === c[p] && h !== s[p] && g;
      if (
        (v && (r || i) && e.manuallyAnimateOnMount && (v = !1),
        (m.protectedKeys = { ...d }),
        (!m.isActive && _ === null) ||
          (!h && !m.prevProp) ||
          Oo(h) ||
          typeof h == `boolean`)
      )
        continue;
      if (p === `exit` && m.isActive && _ !== !0) {
        m.prevResolvedValues && (d = { ...d, ...m.prevResolvedValues });
        continue;
      }
      let y = Bs(m.prevProp, h),
        b = y || (p === o && m.isActive && !v && g) || (t > f && g),
        x = !1,
        S = Array.isArray(h) ? h : [h],
        C = S.reduce(a(p), {});
      _ === !1 && (C = {});
      let { prevResolvedValues: ee = {} } = m,
        w = { ...ee, ...C },
        te = (t) => {
          ((b = !0),
            u.has(t) && ((x = !0), u.delete(t)),
            (m.needsAnimating[t] = !0));
          let n = e.getValue(t);
          n && (n.liveStyle = !1);
        };
      for (let e in w) {
        let t = C[e],
          n = ee[e];
        if (d.hasOwnProperty(e)) continue;
        let r = !1;
        ((r = ta(t) && ta(n) ? !Fs(t, n) || y : t !== n),
          r
            ? t == null
              ? u.add(e)
              : te(e)
            : t !== void 0 && u.has(e)
              ? te(e)
              : (m.protectedKeys[e] = !0));
      }
      ((m.prevProp = h),
        (m.prevResolvedValues = C),
        m.isActive && (d = { ...d, ...C }),
        (r || i) && e.blockInitialAnimation && (b = !1));
      let T = v && y;
      b &&
        (!T || x) &&
        l.push(
          ...S.map((t) => {
            let n = { type: p };
            if (
              typeof t == `string` &&
              (r || i) &&
              !T &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              let { parent: r } = e,
                i = $i(r, t);
              if (r.enteringChildren && i) {
                let { delayChildren: t } = i.transition || {};
                n.delay = Mi(r.enteringChildren, e, t);
              }
            }
            return { animation: t, options: n };
          }),
        );
    }
    if (u.size) {
      let t = {};
      if (typeof s.initial != `boolean`) {
        let n = $i(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
        n && n.transition && (t.transition = n.transition);
      }
      (u.forEach((n) => {
        let r = e.getBaseTarget(n),
          i = e.getValue(n);
        (i && (i.liveStyle = !0), (t[n] = r ?? null));
      }),
        l.push({ animation: t }));
    }
    let p = !!l.length;
    return (
      r &&
        (s.initial === !1 || s.initial === s.animate) &&
        !e.manuallyAnimateOnMount &&
        (p = !1),
      (r = !1),
      (i = !1),
      p ? t(l) : Promise.resolve()
    );
  }
  function c(t, r) {
    if (n[t].isActive === r) return Promise.resolve();
    (e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)),
      (n[t].isActive = r));
    let i = s(t);
    for (let e in n) n[e].protectedKeys = {};
    return i;
  }
  return {
    animateChanges: s,
    setActive: c,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      ((n = Hs()), (i = !0));
    },
  };
}
function Bs(e, t) {
  return typeof t == `string` ? t !== e : Array.isArray(t) ? !Fs(t, e) : !1;
}
function Vs(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Hs() {
  return {
    animate: Vs(!0),
    whileInView: Vs(),
    whileHover: Vs(),
    whileTap: Vs(),
    whileDrag: Vs(),
    whileFocus: Vs(),
    exit: Vs(),
  };
}
function Us(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function Ws(e, t) {
  (Us(e.x, t.x), Us(e.y, t.y));
}
function Gs(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
var Ks = 0.9999,
  qs = 1.0001,
  Js = -0.01,
  Ys = 0.01;
function Xs(e) {
  return e.max - e.min;
}
function Zs(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Qs(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = P(t.min, t.max, e.origin)),
    (e.scale = Xs(n) / Xs(t)),
    (e.translate = P(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Ks && e.scale <= qs) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Js && e.translate <= Ys) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function $s(e, t, n, r) {
  (Qs(e.x, t.x, n.x, r ? r.originX : void 0),
    Qs(e.y, t.y, n.y, r ? r.originY : void 0));
}
function ec(e, t, n, r = 0) {
  ((e.min = (r ? P(n.min, n.max, r) : n.min) + t.min), (e.max = e.min + Xs(t)));
}
function tc(e, t, n, r) {
  (ec(e.x, t.x, n.x, r?.x), ec(e.y, t.y, n.y, r?.y));
}
function nc(e, t, n, r = 0) {
  let i = r ? P(n.min, n.max, r) : n.min;
  ((e.min = t.min - i), (e.max = e.min + Xs(t)));
}
function rc(e, t, n, r) {
  (nc(e.x, t.x, n.x, r?.x), nc(e.y, t.y, n.y, r?.y));
}
function ic(e, t, n, r, i) {
  return (
    (e -= t),
    (e = Qo(e, 1 / n, r)),
    i !== void 0 && (e = Qo(e, 1 / i, r)),
    e
  );
}
function ac(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    (un.test(t) &&
      ((t = parseFloat(t)), (t = P(o.min, o.max, t / 100) - o.min)),
    typeof t != `number`)
  )
    return;
  let s = P(a.min, a.max, r);
  (e === a && (s -= t),
    (e.min = ic(e.min, t, n, s, i)),
    (e.max = ic(e.max, t, n, s, i)));
}
function oc(e, t, [n, r, i], a, o) {
  ac(e, t[n], t[r], t[i], t.scale, a, o);
}
var sc = [`x`, `scaleX`, `originX`],
  cc = [`y`, `scaleY`, `originY`];
function lc(e, t, n, r) {
  (oc(e.x, t, sc, n ? n.x : void 0, r ? r.x : void 0),
    oc(e.y, t, cc, n ? n.y : void 0, r ? r.y : void 0));
}
function uc(e) {
  return e.translate === 0 && e.scale === 1;
}
function dc(e) {
  return uc(e.x) && uc(e.y);
}
function fc(e, t) {
  return e.min === t.min && e.max === t.max;
}
function pc(e, t) {
  return fc(e.x, t.x) && fc(e.y, t.y);
}
function mc(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function hc(e, t) {
  return mc(e.x, t.x) && mc(e.y, t.y);
}
function gc(e) {
  return Xs(e.x) / Xs(e.y);
}
function _c(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
function vc(e) {
  return [e(`x`), e(`y`)];
}
function yc(e, t, n) {
  let r = ``,
    i = e.x.translate / t.x,
    a = e.y.translate / t.y,
    o = n?.z || 0;
  if (
    ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: e,
      rotate: t,
      pathRotation: i,
      rotateX: a,
      rotateY: o,
      skewX: s,
      skewY: c,
    } = n;
    (e && (r = `perspective(${e}px) ${r}`),
      t && (r += `rotate(${t}deg) `),
      i && (r += `rotate(${i}deg) `),
      a && (r += `rotateX(${a}deg) `),
      o && (r += `rotateY(${o}deg) `),
      s && (r += `skewX(${s}deg) `),
      c && (r += `skewY(${c}deg) `));
  }
  let s = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return ((s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || `none`);
}
var bc = Na.length,
  xc = (e) => (typeof e == `string` ? parseFloat(e) : e),
  Sc = (e) => typeof e == `number` || N.test(e);
function Cc(e, t, n, r, i, a) {
  i
    ? ((e.opacity = P(0, n.opacity ?? 1, Tc(r))),
      (e.opacityExit = P(t.opacity ?? 1, 0, Ec(r))))
    : a && (e.opacity = P(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let i = 0; i < bc; i++) {
    let a = Na[i],
      o = wc(t, a),
      s = wc(n, a);
    (o !== void 0 || s !== void 0) &&
      ((o ||= 0),
      (s ||= 0),
      o === 0 || s === 0 || Sc(o) === Sc(s)
        ? ((e[a] = Math.max(P(xc(o), xc(s), r), 0)),
          (un.test(s) || un.test(o)) && (e[a] += `%`))
        : (e[a] = s));
  }
  (t.rotate || n.rotate) && (e.rotate = P(t.rotate || 0, n.rotate || 0, r));
}
function wc(e, t) {
  return e[t] === void 0 ? e.borderRadius : e[t];
}
var Tc = Dc(0, 0.5, St),
  Ec = Dc(0.5, 0.95, rt);
function Dc(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(at(e, t, r)));
}
function Oc(e, t, n) {
  let r = aa(e) ? e : Li(e);
  return (r.start(qi(``, r, t, n)), r.animation);
}
function kc(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r));
}
var Ac = (e, t) => e.depth - t.depth,
  jc = class {
    constructor() {
      ((this.children = []), (this.isDirty = !1));
    }
    add(e) {
      (Ye(this.children, e), (this.isDirty = !0));
    }
    remove(e) {
      (Xe(this.children, e), (this.isDirty = !0));
    }
    forEach(e) {
      (this.isDirty && this.children.sort(Ac),
        (this.isDirty = !1),
        this.children.forEach(e));
    }
  };
function Mc(e, t) {
  let n = Vt.now(),
    r = ({ timestamp: i }) => {
      let a = i - n;
      a >= t && (It(r), e(a - t));
    };
  return (j.setup(r, !0), () => It(r));
}
function Nc(e) {
  return aa(e) ? e.get() : e;
}
var Pc = class {
    constructor() {
      this.members = [];
    }
    add(e) {
      Ye(this.members, e);
      for (let t = this.members.length - 1; t >= 0; t--) {
        let n = this.members[t];
        if (n === e || n === this.lead || n === this.prevLead) continue;
        let r = n.instance;
        (r && r.isConnected !== !1) ||
          n.snapshot ||
          (Xe(this.members, n), n.unmount());
      }
      e.scheduleRender();
    }
    remove(e) {
      if (
        (Xe(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead)
      ) {
        let e = this.members[this.members.length - 1];
        e && this.promote(e);
      }
    }
    relegate(e) {
      for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
        let e = this.members[t];
        if (e.isPresent !== !1 && e.instance?.isConnected !== !1)
          return (this.promote(e), !0);
      }
      return !1;
    }
    promote(e, t) {
      let n = this.lead;
      if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
        (n.updateSnapshot(), e.scheduleRender());
        let { layoutDependency: r } = n.options,
          { layoutDependency: i } = e.options;
        ((r === void 0 || r !== i) &&
          ((e.resumeFrom = n),
          t && (n.preserveOpacity = !0),
          n.snapshot &&
            ((e.snapshot = n.snapshot),
            (e.snapshot.latestValues = n.animationValues || n.latestValues)),
          e.root?.isUpdating && (e.isLayoutDirty = !0)),
          e.options.crossfade === !1 && n.hide());
      }
    }
    exitAnimationComplete() {
      this.members.forEach((e) => {
        (e.options.onExitComplete?.(),
          e.resumingFrom?.options.onExitComplete?.());
      });
    }
    scheduleRender() {
      this.members.forEach((e) => e.instance && e.scheduleRender(!1));
    }
    removeLeadSnapshot() {
      this.lead?.snapshot && (this.lead.snapshot = void 0);
    }
  },
  Fc = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  V = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 },
  Ic = [``, `X`, `Y`, `Z`],
  Lc = 1e3,
  Rc = 0;
function zc(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Bc(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  let { visualElement: t } = e.options;
  if (!t) return;
  let n = I(t);
  if (window.MotionHasOptimisedAnimation(n, `transform`)) {
    let { layout: t, layoutId: r } = e.options;
    window.MotionCancelOptimisedAnimation(n, `transform`, j, !(t || r));
  }
  let { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Bc(r);
}
function Vc({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(e = {}, n = t?.()) {
      ((this.id = Rc++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            bo.value &&
              (V.nodes =
                V.calculatedTargetDeltas =
                V.calculatedProjections =
                  0),
            this.nodes.forEach(Wc),
            this.nodes.forEach($c),
            this.nodes.forEach(el),
            this.nodes.forEach(Gc),
            bo.addProjectionMetrics && bo.addProjectionMetrics(V));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = e),
        (this.root = n ? n.root || n : this),
        (this.path = n ? [...n.path, n] : []),
        (this.parent = n),
        (this.depth = n ? n.depth + 1 : 0));
      for (let e = 0; e < this.path.length; e++)
        this.path[e].shouldResetTransform = !0;
      this.root === this && (this.nodes = new jc());
    }
    addEventListener(e, t) {
      return (
        this.eventHandlers.has(e) || this.eventHandlers.set(e, new ot()),
        this.eventHandlers.get(e).add(t)
      );
    }
    notifyListeners(e, ...t) {
      let n = this.eventHandlers.get(e);
      n && n.notify(...t);
    }
    hasListeners(e) {
      return this.eventHandlers.has(e);
    }
    mount(t) {
      if (this.instance) return;
      ((this.isSVG = io(t) && !xo(t)), (this.instance = t));
      let { layoutId: n, layout: r, visualElement: i } = this.options;
      if (
        (i && !i.current && i.mount(t),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0),
        e)
      ) {
        let n,
          r = 0,
          i = () => (this.root.updateBlockedByResize = !1);
        (j.read(() => {
          r = window.innerWidth;
        }),
          e(t, () => {
            let e = window.innerWidth;
            e !== r &&
              ((r = e),
              (this.root.updateBlockedByResize = !0),
              n && n(),
              (n = Mc(i, 250)),
              Fc.hasAnimatedSinceResize &&
                ((Fc.hasAnimatedSinceResize = !1), this.nodes.forEach(Qc)));
          }));
      }
      (n && this.root.registerSharedNode(n, this),
        this.options.animate !== !1 &&
          i &&
          (n || r) &&
          this.addEventListener(
            `didUpdate`,
            ({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeLayoutChanged: n,
              layout: r,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              let a = this.options.transition || i.getDefaultTransition() || sl,
                { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } =
                  i.getProps(),
                c = !this.targetLayout || !hc(this.targetLayout, r),
                l = !t && n;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                l ||
                (t && (c || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                let t = { ...zi(a, `layout`), onPlay: o, onComplete: s };
                ((i.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t),
                  this.setAnimationOrigin(e, l, t.path));
              } else
                (t || Qc(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = r;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      let e = this.getStack();
      (e && e.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        It(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(tl),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: e } = this.options;
      return e && e.getProps().transformTemplate;
    }
    willUpdate(e = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Bc(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let e = 0; e < this.path.length; e++) {
        let t = this.path[e];
        ((t.shouldResetTransform = !0),
          (typeof t.latestValues.x == `string` ||
            typeof t.latestValues.y == `string`) &&
            (t.isLayoutDirty = !0),
          t.updateScroll(`snapshot`),
          t.options.layoutRoot && t.willUpdate(!1));
      }
      let { layoutId: t, layout: n } = this.options;
      if (t === void 0 && !n) return;
      let r = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = r
        ? r(this.latestValues, ``)
        : void 0),
        this.updateSnapshot(),
        e && this.notifyListeners(`willUpdate`));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        let e = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          e && this.nodes.forEach(Jc),
          this.nodes.forEach(qc));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Yc);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(Xc),
            this.nodes.forEach(Zc),
            this.nodes.forEach(Hc),
            this.nodes.forEach(Uc))
          : this.nodes.forEach(Yc),
        this.clearAllSnapshots());
      let e = Vt.now();
      ((Lt.delta = Ze(0, 1e3 / 60, e - Lt.timestamp)),
        (Lt.timestamp = e),
        (Lt.isProcessing = !0),
        Rt.update.process(Lt),
        Rt.preRender.process(Lt),
        Rt.render.process(Lt),
        (Lt.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), La.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(Kc), this.sharedNodes.forEach(nl));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        j.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      j.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      !this.snapshot &&
        this.instance &&
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !Xs(this.snapshot.measuredBox.x) &&
          !Xs(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
      let e = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected ||= L()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners(`measure`, this.layout.layoutBox));
      let { visualElement: t } = this.options;
      t &&
        t.notify(
          `LayoutMeasure`,
          this.layout.layoutBox,
          e ? e.layoutBox : void 0,
        );
    }
    updateScroll(e = `measure`) {
      let t = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === e &&
          (t = !1),
        t && this.instance)
      ) {
        let t = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: e,
          isRoot: t,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : t,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      let e =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        t = this.projectionDelta && !dc(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, ``) : void 0,
        a = r !== this.prevTransformTemplateValue;
      e &&
        this.instance &&
        (t || Yo(this.latestValues) || a) &&
        (i(this.instance, r),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(e = !0) {
      let t = this.measurePageBox(),
        n = this.removeElementScroll(t);
      return (
        e && (n = this.removeTransform(n)),
        dl(n),
        {
          animationId: this.root.animationId,
          measuredBox: t,
          layoutBox: n,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: e } = this.options;
      if (!e) return L();
      let t = e.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(pl))) {
        let { scroll: e } = this.root;
        e && (is(t.x, e.offset.x), is(t.y, e.offset.y));
      }
      return t;
    }
    removeElementScroll(e) {
      let t = L();
      if ((Ws(t, e), this.scroll?.wasRoot)) return t;
      for (let n = 0; n < this.path.length; n++) {
        let r = this.path[n],
          { scroll: i, options: a } = r;
        r !== this.root &&
          i &&
          a.layoutScroll &&
          (i.wasRoot && Ws(t, e), is(t.x, i.offset.x), is(t.y, i.offset.y));
      }
      return t;
    }
    applyTransform(e, t = !1, n) {
      let r = n || L();
      Ws(r, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        (!t &&
          n.options.layoutScroll &&
          n.scroll &&
          n !== n.root &&
          (is(r.x, -n.scroll.offset.x), is(r.y, -n.scroll.offset.y)),
          Yo(n.latestValues) && ss(r, n.latestValues, n.layout?.layoutBox));
      }
      return (
        Yo(this.latestValues) &&
          ss(r, this.latestValues, this.layout?.layoutBox),
        r
      );
    }
    removeTransform(e) {
      let t = L();
      Ws(t, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        if (!Yo(n.latestValues)) continue;
        let r;
        (n.instance &&
          (Jo(n.latestValues) && n.updateSnapshot(),
          (r = L()),
          Ws(r, n.measurePageBox())),
          lc(t, n.latestValues, n.snapshot?.layoutBox, r));
      }
      return (Yo(this.latestValues) && lc(t, this.latestValues), t);
    }
    setTargetDelta(e) {
      ((this.targetDelta = e),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(e) {
      this.options = {
        ...this.options,
        ...e,
        crossfade: e.crossfade === void 0 || e.crossfade,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Lt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(e = !1) {
      let t = this.getLead();
      ((this.isProjectionDirty ||= t.isProjectionDirty),
        (this.isTransformDirty ||= t.isTransformDirty),
        (this.isSharedProjectionDirty ||= t.isSharedProjectionDirty));
      let n = !!this.resumingFrom || this !== t;
      if (!(
        e ||
        (n && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        this.parent?.isProjectionDirty ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      let { layout: r, layoutId: i } = this.options;
      if (!this.layout || !(r || i)) return;
      this.resolvedRelativeTargetAt = Lt.timestamp;
      let a = this.getClosestProjectingParent();
      (a &&
        this.linkedParentVersion !== a.layoutVersion &&
        !a.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && a && a.layout
            ? this.createRelativeTarget(
                a,
                this.layout.layoutBox,
                a.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        (this.relativeTarget || this.targetDelta) &&
          (this.target ||
            ((this.target = L()), (this.targetWithTransforms = L())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              tc(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : Ws(this.target, this.layout.layoutBox),
                es(this.target, this.targetDelta))
              : Ws(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            a &&
            !!a.resumingFrom == !!this.resumingFrom &&
            !a.options.layoutScroll &&
            a.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(a, this.target, a.target)
              : (this.relativeParent = this.relativeTarget = void 0)),
          bo.value && V.calculatedTargetDeltas++));
    }
    getClosestProjectingParent() {
      if (!(
        !this.parent ||
        Jo(this.parent.latestValues) ||
        Xo(this.parent.latestValues)
      ))
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(e, t, n) {
      ((this.relativeParent = e),
        (this.linkedParentVersion = e.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = L()),
        (this.relativeTargetOrigin = L()),
        rc(
          this.relativeTargetOrigin,
          t,
          n,
          this.options.layoutAnchor || void 0,
        ),
        Ws(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      let e = this.getLead(),
        t = !!this.resumingFrom || this !== e,
        n = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1),
        t &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (n = !1),
        this.resolvedRelativeTargetAt === Lt.timestamp && (n = !1),
        n)
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(r || i))
      )
        return;
      Ws(this.layoutCorrected, this.layout.layoutBox);
      let a = this.treeScale.x,
        o = this.treeScale.y;
      (rs(this.layoutCorrected, this.treeScale, this.path, t),
        e.layout &&
          !e.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((e.target = e.layout.layoutBox), (e.targetWithTransforms = L())));
      let { target: s } = e;
      s
        ? (!this.projectionDelta || !this.prevProjectionDelta
            ? this.createProjectionDeltas()
            : (Gs(this.prevProjectionDelta.x, this.projectionDelta.x),
              Gs(this.prevProjectionDelta.y, this.projectionDelta.y)),
          $s(this.projectionDelta, this.layoutCorrected, s, this.latestValues),
          (this.treeScale.x === a &&
            this.treeScale.y === o &&
            _c(this.projectionDelta.x, this.prevProjectionDelta.x) &&
            _c(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
            ((this.hasProjected = !0),
            this.scheduleRender(),
            this.notifyListeners(`projectionUpdate`, s)),
          bo.value && V.calculatedProjections++)
        : this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(e = !0) {
      if ((this.options.visualElement?.scheduleRender(), e)) {
        let e = this.getStack();
        e && e.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = To()),
        (this.projectionDelta = To()),
        (this.projectionDeltaWithTransform = To()));
    }
    setAnimationOrigin(e, t = !1, n) {
      let r = this.snapshot,
        i = r ? r.latestValues : {},
        a = { ...this.latestValues },
        o = To();
      ((this.relativeParent && this.relativeParent.options.layoutRoot) ||
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !t));
      let s = L(),
        c =
          (r ? r.source : void 0) !==
          (this.layout ? this.layout.source : void 0),
        l = this.getStack(),
        u = !l || l.members.length <= 1,
        d = !(!c || u || this.options.crossfade !== !0 || this.path.some(ol));
      this.animationProgress = 0;
      let f,
        p = n?.interpolateProjection(e);
      ((this.mixTargetDelta = (t) => {
        let n = t / 1e3,
          r = p?.(n);
        (r
          ? ((o.x.translate = r.x),
            (o.x.scale = P(e.x.scale, 1, n)),
            (o.x.origin = e.x.origin),
            (o.x.originPoint = e.x.originPoint),
            (o.y.translate = r.y),
            (o.y.scale = P(e.y.scale, 1, n)),
            (o.y.origin = e.y.origin),
            (o.y.originPoint = e.y.originPoint))
          : (rl(o.x, e.x, n), rl(o.y, e.y, n)),
          this.setTargetDelta(o),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (rc(
              s,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            al(this.relativeTarget, this.relativeTargetOrigin, s, n),
            f && pc(this.relativeTarget, f) && (this.isProjectionDirty = !1),
            (f ||= L()),
            Ws(f, this.relativeTarget)),
          c &&
            ((this.animationValues = a), Cc(a, i, this.latestValues, n, d, u)),
          r &&
            r.rotate !== void 0 &&
            ((this.animationValues ||= a),
            (this.animationValues.pathRotation = r.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = n));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(e) {
      (this.notifyListeners(`animationStart`),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        (this.pendingAnimation &&= (It(this.pendingAnimation), void 0)),
        (this.pendingAnimation = j.update(() => {
          ((Fc.hasAnimatedSinceResize = !0),
            (this.motionValue ||= Li(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = Oc(this.motionValue, [0, 1e3], {
              ...e,
              velocity: 0,
              isSync: !0,
              onUpdate: (t) => {
                (this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t));
              },
              onComplete: () => {
                (e.onComplete && e.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let e = this.getStack();
      (e && e.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners(`animationComplete`));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Lc),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      let e = this.getLead(),
        { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
      if (t && n && r) {
        if (
          this !== e &&
          this.layout &&
          r &&
          fl(this.options.animationType, this.layout.layoutBox, r.layoutBox)
        ) {
          n = this.target || L();
          let t = Xs(this.layout.layoutBox.x);
          ((n.x.min = e.target.x.min), (n.x.max = n.x.min + t));
          let r = Xs(this.layout.layoutBox.y);
          ((n.y.min = e.target.y.min), (n.y.max = n.y.min + r));
        }
        (Ws(t, n),
          ss(t, i),
          $s(this.projectionDeltaWithTransform, this.layoutCorrected, t, i));
      }
    }
    registerSharedNode(e, t) {
      (this.sharedNodes.has(e) || this.sharedNodes.set(e, new Pc()),
        this.sharedNodes.get(e).add(t));
      let n = t.options.initialPromotionConfig;
      t.promote({
        transition: n ? n.transition : void 0,
        preserveFollowOpacity:
          n && n.shouldPreserveFollowOpacity
            ? n.shouldPreserveFollowOpacity(t)
            : void 0,
      });
    }
    isLead() {
      let e = this.getStack();
      return !e || e.lead === this;
    }
    getLead() {
      let { layoutId: e } = this.options;
      return (e && this.getStack()?.lead) || this;
    }
    getPrevLead() {
      let { layoutId: e } = this.options;
      return e ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let { layoutId: e } = this.options;
      if (e) return this.root.sharedNodes.get(e);
    }
    promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
      let r = this.getStack();
      (r && r.promote(this, n),
        e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        t && this.setOptions({ transition: t }));
    }
    relegate() {
      let e = this.getStack();
      return e ? e.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: e } = this.options;
      if (!e) return;
      let t = !1,
        { latestValues: n } = e;
      if (
        ((n.z ||
          n.rotate ||
          n.rotateX ||
          n.rotateY ||
          n.rotateZ ||
          n.skewX ||
          n.skewY) &&
          (t = !0),
        !t)
      )
        return;
      let r = {};
      n.z && zc(`z`, e, r, this.animationValues);
      for (let t = 0; t < Ic.length; t++)
        (zc(`rotate${Ic[t]}`, e, r, this.animationValues),
          zc(`skew${Ic[t]}`, e, r, this.animationValues));
      e.render();
      for (let t in r)
        (e.setStaticValue(t, r[t]),
          this.animationValues && (this.animationValues[t] = r[t]));
      e.scheduleRender();
    }
    applyProjectionStyles(e, t) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        e.visibility = `hidden`;
        return;
      }
      let n = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (e.visibility = ``),
          (e.opacity = ``),
          (e.pointerEvents = Nc(t?.pointerEvents) || ``),
          (e.transform = n ? n(this.latestValues, ``) : `none`));
        return;
      }
      let r = this.getLead();
      if (!this.projectionDelta || !this.layout || !r.target) {
        (this.options.layoutId &&
          ((e.opacity =
            this.latestValues.opacity === void 0
              ? 1
              : this.latestValues.opacity),
          (e.pointerEvents = Nc(t?.pointerEvents) || ``)),
          this.hasProjected &&
            !Yo(this.latestValues) &&
            ((e.transform = n ? n({}, ``) : `none`), (this.hasProjected = !1)));
        return;
      }
      e.visibility = ``;
      let i = r.animationValues || r.latestValues;
      this.applyTransformsToTarget();
      let a = yc(this.projectionDeltaWithTransform, this.treeScale, i);
      (n && (a = n(i, a)), (e.transform = a));
      let { x: o, y: s } = this.projectionDelta;
      ((e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`),
        (e.opacity = r.animationValues
          ? r === this
            ? (i.opacity ?? this.latestValues.opacity ?? 1)
            : this.preserveOpacity
              ? this.latestValues.opacity
              : i.opacityExit
          : r === this
            ? i.opacity === void 0
              ? ``
              : i.opacity
            : i.opacityExit === void 0
              ? 0
              : i.opacityExit));
      for (let t in vs) {
        if (i[t] === void 0) continue;
        let { correct: n, applyTo: o, isCSSVariable: s } = vs[t],
          c = a === `none` ? i[t] : n(i[t], r);
        if (o) {
          let t = o.length;
          for (let n = 0; n < t; n++) e[o[n]] = c;
        } else
          s ? (this.options.visualElement.renderState.vars[t] = c) : (e[t] = c);
      }
      this.options.layoutId &&
        (e.pointerEvents = r === this ? Nc(t?.pointerEvents) || `` : `none`);
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
        this.root.nodes.forEach(qc),
        this.root.sharedNodes.clear());
    }
  };
}
function Hc(e) {
  e.updateLayout();
}
function Uc(e) {
  let t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
    let { layoutBox: n, measuredBox: r } = e.layout,
      { animationType: i } = e.options,
      a = t.source !== e.layout.source;
    if (i === `size`)
      vc((e) => {
        let r = a ? t.measuredBox[e] : t.layoutBox[e],
          i = Xs(r);
        ((r.min = n[e].min), (r.max = r.min + i));
      });
    else if (i === `x` || i === `y`) {
      let e = i === `x` ? `y` : `x`;
      Us(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
    } else
      fl(i, t.layoutBox, n) &&
        vc((r) => {
          let i = a ? t.measuredBox[r] : t.layoutBox[r],
            o = Xs(n[r]);
          ((i.max = i.min + o),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[r].max = e.relativeTarget[r].min + o)));
        });
    let o = To();
    $s(o, n, t.layoutBox);
    let s = To();
    a ? $s(s, e.applyTransform(r, !0), t.measuredBox) : $s(s, n, t.layoutBox);
    let c = !dc(o),
      l = !1;
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent();
      if (r && !r.resumeFrom) {
        let { snapshot: i, layout: a } = r;
        if (i && a) {
          let o = e.options.layoutAnchor || void 0,
            s = L();
          rc(s, t.layoutBox, i.layoutBox, o);
          let c = L();
          (rc(c, n, a.layoutBox, o),
            hc(s, c) || (l = !0),
            r.options.layoutRoot &&
              ((e.relativeTarget = c),
              (e.relativeTargetOrigin = s),
              (e.relativeParent = r)));
        }
      }
    }
    e.notifyListeners(`didUpdate`, {
      layout: n,
      snapshot: t,
      delta: s,
      layoutDelta: o,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: l,
    });
  } else if (e.isLead()) {
    let { onExitComplete: t } = e.options;
    t && t();
  }
  e.options.transition = void 0;
}
function Wc(e) {
  (bo.value && V.nodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      (e.isSharedProjectionDirty ||= !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      (e.isTransformDirty ||= e.parent.isTransformDirty)));
}
function Gc(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Kc(e) {
  e.clearSnapshot();
}
function qc(e) {
  e.clearMeasurements();
}
function Jc(e) {
  ((e.isLayoutDirty = !0), e.updateLayout());
}
function Yc(e) {
  e.isLayoutDirty = !1;
}
function Xc(e) {
  e.isAnimationBlocked &&
    e.layout &&
    !e.isLayoutDirty &&
    ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
}
function Zc(e) {
  let { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`),
    e.resetTransform());
}
function Qc(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function $c(e) {
  e.resolveTargetDelta();
}
function el(e) {
  e.calcProjection();
}
function tl(e) {
  e.resetSkewAndRotation();
}
function nl(e) {
  e.removeLeadSnapshot();
}
function rl(e, t, n) {
  ((e.translate = P(t.translate, 0, n)),
    (e.scale = P(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function il(e, t, n, r) {
  ((e.min = P(t.min, n.min, r)), (e.max = P(t.max, n.max, r)));
}
function al(e, t, n, r) {
  (il(e.x, t.x, n.x, r), il(e.y, t.y, n.y, r));
}
function ol(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var sl = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  cl = (e) =>
    typeof navigator < `u` &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  ll = cl(`applewebkit/`) && !cl(`chrome/`) ? Math.round : rt;
function ul(e) {
  ((e.min = ll(e.min)), (e.max = ll(e.max)));
}
function dl(e) {
  (ul(e.x), ul(e.y));
}
function fl(e, t, n) {
  return (
    e === `position` || (e === `preserve-aspect` && !Zs(gc(t), gc(n), 0.2))
  );
}
function pl(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
var ml = Vc({
    attachResizeListener: (e, t) => kc(e, `resize`, t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
    }),
    checkIsScrollRoot: () => !0,
  }),
  hl = { current: void 0 },
  gl = Vc({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!hl.current) {
        let e = new ml({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (hl.current = e));
      }
      return hl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t === void 0 ? `none` : t;
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === `fixed`,
  }),
  _l = (0, b.createContext)({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: `never`,
  });
function vl(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
function yl(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = vl(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : vl(e[t], null);
        }
      };
  };
}
function H(...e) {
  return b.useCallback(yl(...e), e);
}
var bl = class extends b.Component {
  getSnapshotBeforeUpdate(e) {
    let t = this.props.childRef.current;
    if (
      Ia(t) &&
      e.isPresent &&
      !this.props.isPresent &&
      this.props.pop !== !1
    ) {
      let e = t.offsetParent,
        n = (Ia(e) && e.offsetWidth) || 0,
        r = (Ia(e) && e.offsetHeight) || 0,
        i = getComputedStyle(t),
        a = this.props.sizeRef.current;
      ((a.height = parseFloat(i.height)),
        (a.width = parseFloat(i.width)),
        (a.top = t.offsetTop),
        (a.left = t.offsetLeft),
        (a.right = n - a.width - a.left),
        (a.bottom = r - a.height - a.top),
        (a.direction = i.direction));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
};
function xl({
  children: e,
  isPresent: t,
  anchorX: n,
  anchorY: r,
  root: i,
  pop: a,
}) {
  let o = (0, b.useId)(),
    s = (0, b.useRef)(null),
    c = (0, b.useRef)({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      direction: `ltr`,
    }),
    { nonce: l } = (0, b.useContext)(_l),
    u = H(s, a === !1 ? void 0 : (e.props?.ref ?? e?.ref));
  return (
    (0, b.useInsertionEffect)(() => {
      let {
        width: e,
        height: u,
        top: d,
        left: f,
        right: p,
        bottom: m,
        direction: h,
      } = c.current;
      if (t || a === !1 || !s.current || !e || !u) return;
      let g = h === `rtl`,
        _ =
          n === `left`
            ? g
              ? `right: ${p}`
              : `left: ${f}`
            : g
              ? `left: ${f}`
              : `right: ${p}`,
        v = r === `bottom` ? `bottom: ${m}` : `top: ${d}`;
      s.current.dataset.motionPopId = o;
      let y = document.createElement(`style`);
      l && (y.nonce = l);
      let b = i ?? document.head;
      return (
        b.appendChild(y),
        y.sheet &&
          y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `),
        () => {
          (s.current?.removeAttribute(`data-motion-pop-id`),
            b.contains(y) && b.removeChild(y));
        }
      );
    }, [t]),
    (0, A.jsx)(bl, {
      isPresent: t,
      childRef: s,
      sizeRef: c,
      pop: a,
      children: a === !1 ? e : b.cloneElement(e, { ref: u }),
    })
  );
}
var Sl = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: a,
  mode: o,
  anchorX: s,
  anchorY: c,
  root: l,
}) => {
  let u = Ke(Cl),
    d = (0, b.useId)(),
    f = (0, b.useRef)(n),
    p = (0, b.useRef)(r);
  qe(() => {
    ((f.current = n), (p.current = r));
  });
  let m = !0,
    h = (0, b.useMemo)(
      () => (
        (m = !1),
        {
          id: d,
          initial: t,
          isPresent: n,
          custom: i,
          onExitComplete: (e) => {
            u.set(e, !0);
            for (let e of u.values()) if (!e) return;
            r && r();
          },
          register: (e) => (
            u.set(e, !1),
            () => {
              (u.delete(e), !f.current && !u.size && p.current?.());
            }
          ),
        }
      ),
      [n, u, r],
    );
  return (
    a && m && (h = { ...h }),
    (0, b.useMemo)(() => {
      u.forEach((e, t) => u.set(t, !1));
    }, [n]),
    b.useEffect(() => {
      !n && !u.size && r && r();
    }, [n]),
    (e = (0, A.jsx)(xl, {
      pop: o === `popLayout`,
      isPresent: n,
      anchorX: s,
      anchorY: c,
      root: l,
      children: e,
    })),
    (0, A.jsx)(Je.Provider, { value: h, children: e })
  );
};
function Cl() {
  return new Map();
}
function wl(e = !0) {
  let t = (0, b.useContext)(Je);
  if (t === null) return [!0, null];
  let { isPresent: n, onExitComplete: r, register: i } = t,
    a = (0, b.useId)();
  (0, b.useEffect)(() => {
    if (e) return i(a);
  }, [e]);
  let o = (0, b.useCallback)(() => e && r && r(a), [a, r, e]);
  return !n && r ? [!1, o] : [!0];
}
var Tl = (e) => e.key || ``;
function El(e) {
  let t = [];
  return (
    b.Children.forEach(e, (e) => {
      (0, b.isValidElement)(e) && t.push(e);
    }),
    t
  );
}
var Dl = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: a = `sync`,
    propagate: o = !1,
    anchorX: s = `left`,
    anchorY: c = `top`,
    root: l,
  }) => {
    let [u, d] = wl(o),
      f = (0, b.useMemo)(() => El(e), [e]),
      p = o && !u ? [] : f.map(Tl),
      m = (0, b.useRef)(!0),
      h = (0, b.useRef)(f),
      g = Ke(() => new Map()),
      _ = (0, b.useRef)(new Set()),
      [v, y] = (0, b.useState)(f),
      [x, S] = (0, b.useState)(f);
    qe(() => {
      ((m.current = !1), (h.current = f));
      for (let e = 0; e < x.length; e++) {
        let t = Tl(x[e]);
        p.includes(t)
          ? (g.delete(t), _.current.delete(t))
          : g.get(t) !== !0 && g.set(t, !1);
      }
    }, [x, p.length, p.join(`-`)]);
    let C = [];
    if (f !== v) {
      let e = [...f];
      for (let t = 0; t < x.length; t++) {
        let n = x[t],
          r = Tl(n);
        p.includes(r) || (e.splice(t, 0, n), C.push(n));
      }
      return (a === `wait` && C.length && (e = C), S(El(e)), y(f), null);
    }
    let { forceRender: ee } = (0, b.useContext)(Ge);
    return (0, A.jsx)(A.Fragment, {
      children: x.map((e) => {
        let v = Tl(e),
          y = o && !u ? !1 : f === x || p.includes(v);
        return (0, A.jsx)(
          Sl,
          {
            isPresent: y,
            initial: !m.current || n ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: i,
            mode: a,
            root: l,
            onExitComplete: y
              ? void 0
              : () => {
                  if (_.current.has(v)) return;
                  if (g.has(v)) (_.current.add(v), g.set(v, !0));
                  else return;
                  let e = !0;
                  (g.forEach((t) => {
                    t || (e = !1);
                  }),
                    e && (ee?.(), S(h.current), o && d?.(), r && r()));
                },
            anchorX: s,
            anchorY: c,
            children: e,
          },
          v,
        );
      }),
    });
  },
  Ol = (0, b.createContext)({ strict: !1 }),
  kl = {
    animation: [
      `animate`,
      `variants`,
      `whileHover`,
      `whileTap`,
      `exit`,
      `whileInView`,
      `whileFocus`,
      `whileDrag`,
    ],
    exit: [`exit`],
    drag: [`drag`, `dragControls`],
    focus: [`whileFocus`],
    hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
    tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
    pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
    inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
    layout: [`layout`, `layoutId`],
  },
  Al = !1;
function jl() {
  if (Al) return;
  let e = {};
  for (let t in kl) e[t] = { isEnabled: (e) => kl[t].some((t) => !!e[t]) };
  (Vo(e), (Al = !0));
}
function Ml() {
  return (jl(), Ho());
}
function Nl(e) {
  let t = Ml();
  for (let n in e) t[n] = { ...t[n], ...e[n] };
  Vo(t);
}
var Pl = new Set(
  `animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(
    `.`,
  ),
);
function Fl(e) {
  return (
    e.startsWith(`while`) ||
    (e.startsWith(`drag`) && e !== `draggable`) ||
    e.startsWith(`layout`) ||
    e.startsWith(`onTap`) ||
    e.startsWith(`onPan`) ||
    e.startsWith(`onLayout`) ||
    Pl.has(e)
  );
}
var Il = c({ default: () => Ll }),
  Ll,
  Rl = o(() => {
    throw (
      (Ll = {}),
      Error(
        `Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`,
      )
    );
  }),
  zl = (e) => !Fl(e);
function Bl(e) {
  typeof e == `function` && (zl = (t) => (t.startsWith(`on`) ? !Fl(t) : e(t)));
}
try {
  Bl((Rl(), d(Il)).default);
} catch {}
function Vl(e, t, n) {
  let r = {};
  for (let i in e)
    (i === `values` && typeof e.values == `object`) ||
      aa(e[i]) ||
      ((zl(i) ||
        (n === !0 && Fl(i)) ||
        (!t && !Fl(i)) ||
        (e.draggable && i.startsWith(`onDrag`))) &&
        (r[i] = e[i]));
  return r;
}
var Hl = (0, b.createContext)({});
function Ul(e, t) {
  if (Mo(e)) {
    let { initial: t, animate: n } = e;
    return {
      initial: t === !1 || ko(t) ? t : void 0,
      animate: ko(n) ? n : void 0,
    };
  }
  return e.inherit === !1 ? {} : t;
}
function Wl(e) {
  let { initial: t, animate: n } = Ul(e, (0, b.useContext)(Hl));
  return (0, b.useMemo)(() => ({ initial: t, animate: n }), [Gl(t), Gl(n)]);
}
function Gl(e) {
  return Array.isArray(e) ? e.join(` `) : e;
}
var Kl = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function ql(e, t, n) {
  for (let r in t) !aa(t[r]) && !ys(r, n) && (e[r] = t[r]);
}
function Jl({ transformTemplate: e }, t) {
  return (0, b.useMemo)(() => {
    let n = Kl();
    return (ps(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function Yl(e, t) {
  let n = e.style || {},
    r = {};
  return (ql(r, n, e), Object.assign(r, Jl(e, t)), r);
}
function Xl(e, t) {
  let n = {},
    r = Yl(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`),
      (r.touchAction =
        e.drag === !0 ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
var Zl = () => ({ ...Kl(), attrs: {} });
function Ql(e, t, n, r) {
  let i = (0, b.useMemo)(() => {
    let n = Zl();
    return (
      Ds(n, t, ks(r), e.transformTemplate, e.style),
      { ...n.attrs, style: { ...n.style } }
    );
  }, [t]);
  if (e.style) {
    let t = {};
    (ql(t, e.style, e), (i.style = { ...t, ...i.style }));
  }
  return i;
}
var $l = [
  `animate`,
  `circle`,
  `defs`,
  `desc`,
  `ellipse`,
  `g`,
  `image`,
  `line`,
  `filter`,
  `marker`,
  `mask`,
  `metadata`,
  `path`,
  `pattern`,
  `polygon`,
  `polyline`,
  `rect`,
  `stop`,
  `switch`,
  `symbol`,
  `svg`,
  `text`,
  `tspan`,
  `use`,
  `view`,
];
function eu(e) {
  return typeof e != `string` || e.includes(`-`)
    ? !1
    : !!($l.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function tu(e, t, n, { latestValues: r }, i, a = !1, o) {
  let s = ((o ?? eu(e)) ? Ql : Xl)(t, r, i, e),
    c = Vl(t, typeof e == `string`, a),
    l = e === b.Fragment ? {} : { ...c, ...s, ref: n },
    { children: u } = t,
    d = (0, b.useMemo)(() => (aa(u) ? u.get() : u), [u]);
  return (0, b.createElement)(e, { ...l, children: d });
}
function nu({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: ru(n, r, i, e), renderState: t() };
}
function ru(e, t, n, r) {
  let i = {},
    a = r(e, {});
  for (let e in a) i[e] = Nc(a[e]);
  let { initial: o, animate: s } = e,
    c = Mo(e),
    l = No(e);
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
  let u = n ? n.initial === !1 : !1;
  u ||= o === !1;
  let d = u ? s : o;
  if (d && typeof d != `boolean` && !Oo(d)) {
    let t = Array.isArray(d) ? d : [d];
    for (let n = 0; n < t.length; n++) {
      let r = Qi(e, t[n]);
      if (r) {
        let { transitionEnd: e, transition: t, ...n } = r;
        for (let e in n) {
          let t = n[e];
          if (Array.isArray(t)) {
            let e = u ? t.length - 1 : 0;
            t = t[e];
          }
          t !== null && (i[e] = t);
        }
        for (let t in e) i[t] = e[t];
      }
    }
  }
  return i;
}
var iu = (e) => (t, n) => {
    let r = (0, b.useContext)(Hl),
      i = (0, b.useContext)(Je),
      a = () => nu(e, t, r, i);
    return n ? a() : Ke(a);
  },
  au = iu({ scrapeMotionValuesFromProps: bs, createRenderState: Kl }),
  ou = iu({ scrapeMotionValuesFromProps: js, createRenderState: Zl }),
  U = Symbol.for(`motionComponentSymbol`);
function su(e, t, n) {
  let r = (0, b.useRef)(n);
  (0, b.useInsertionEffect)(() => {
    r.current = n;
  });
  let i = (0, b.useRef)(null);
  return (0, b.useCallback)(
    (n) => {
      (n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount()));
      let a = r.current;
      if (typeof a == `function`) {
        if (n) {
          let e = a(n);
          typeof e == `function` && (i.current = e);
        } else i.current ? (i.current(), (i.current = null)) : a(n);
      } else a && (a.current = n);
    },
    [t],
  );
}
var cu = (0, b.createContext)({});
function lu(e) {
  return (
    e &&
    typeof e == `object` &&
    Object.prototype.hasOwnProperty.call(e, `current`)
  );
}
function uu(e, t, n, r, i, a) {
  let { visualElement: o } = (0, b.useContext)(Hl),
    s = (0, b.useContext)(Ol),
    c = (0, b.useContext)(Je),
    l = (0, b.useContext)(_l),
    u = l.reducedMotion,
    d = l.skipAnimations,
    f = (0, b.useRef)(null),
    p = (0, b.useRef)(!1);
  ((r ||= s.renderer),
    !f.current &&
      r &&
      ((f.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: u,
        skipAnimations: d,
        isSVG: a,
      })),
      p.current && f.current && (f.current.manuallyAnimateOnMount = !0)));
  let m = f.current,
    h = (0, b.useContext)(cu);
  m &&
    !m.projection &&
    i &&
    (m.type === `html` || m.type === `svg`) &&
    du(f.current, n, i, h);
  let g = (0, b.useRef)(!1);
  (0, b.useInsertionEffect)(() => {
    m && g.current && m.update(n, c);
  });
  let _ = n[F],
    v = (0, b.useRef)(
      !!_ &&
        typeof window < `u` &&
        !window.MotionHandoffIsComplete?.(_) &&
        window.MotionHasOptimisedAnimation?.(_),
    );
  return (
    qe(() => {
      ((p.current = !0),
        m &&
          ((g.current = !0),
          (window.MotionIsMounted = !0),
          m.updateFeatures(),
          m.scheduleRenderMicrotask(),
          v.current && m.animationState && m.animationState.animateChanges()));
    }),
    (0, b.useEffect)(() => {
      m &&
        (!v.current && m.animationState && m.animationState.animateChanges(),
        (v.current &&=
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(_);
          }),
          !1)),
        (m.enteringChildren = void 0));
    }),
    m
  );
}
function du(e, t, n, r) {
  let {
    layoutId: i,
    layout: a,
    drag: o,
    dragConstraints: s,
    layoutScroll: c,
    layoutRoot: l,
    layoutAnchor: u,
    layoutCrossfade: d,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t[`data-framer-portal-id`] ? void 0 : fu(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && lu(s)),
      visualElement: e,
      animationType: typeof a == `string` ? a : `both`,
      initialPromotionConfig: r,
      crossfade: d,
      layoutScroll: c,
      layoutRoot: l,
      layoutAnchor: u,
    }));
}
function fu(e) {
  if (e) return e.options.allowProjection === !1 ? fu(e.parent) : e.projection;
}
function pu(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
  r && Nl(r);
  let a = n ? n === `svg` : eu(e),
    o = a ? ou : au;
  function s(n, s) {
    let c,
      l = { ...(0, b.useContext)(_l), ...n, layoutId: mu(n) },
      { isStatic: u } = l,
      d = Wl(n),
      f = o(n, u);
    if (!u && typeof window < `u`) {
      hu(l, r);
      let t = gu(l);
      ((c = t.MeasureLayout),
        (d.visualElement = uu(e, f, l, i, t.ProjectionNode, a)));
    }
    return (0, A.jsxs)(Hl.Provider, {
      value: d,
      children: [
        c && d.visualElement
          ? (0, A.jsx)(c, { visualElement: d.visualElement, ...l })
          : null,
        tu(e, n, su(f, d.visualElement, s), f, u, t, a),
      ],
    });
  }
  s.displayName = `motion.${typeof e == `string` ? e : `create(${e.displayName ?? e.name ?? ``})`}`;
  let c = (0, b.forwardRef)(s);
  return ((c[U] = e), c);
}
function mu({ layoutId: e }) {
  let t = (0, b.useContext)(Ge).id;
  return t && e !== void 0 ? t + `-` + e : e;
}
function hu(e, t) {
  (0, b.useContext)(Ol).strict;
}
function gu(e) {
  let { drag: t, layout: n } = Ml();
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout:
      t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function _u(e, t) {
  if (typeof Proxy > `u`) return pu;
  let n = new Map(),
    r = (n, r) => pu(n, r, e, t);
  return new Proxy((e, t) => r(e, t), {
    get: (i, a) =>
      a === `create`
        ? r
        : (n.has(a) || n.set(a, pu(a, void 0, e, t)), n.get(a)),
  });
}
var vu = (e, t) =>
    (t.isSVG ?? eu(e))
      ? new Ms(t)
      : new Ss(t, { allowProjection: e !== b.Fragment }),
  yu = class extends Go {
    constructor(e) {
      (super(e), (e.animationState ||= zs(e)));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      Oo(e) && (this.unmountControls = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {
      (this.node.animationState.reset(), this.unmountControls?.());
    }
  },
  bu = 0,
  xu = {
    animation: { Feature: yu },
    exit: {
      Feature: class extends Go {
        constructor() {
          (super(...arguments), (this.id = bu++), (this.isExitComplete = !1));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          if (e && n === !1) {
            if (this.isExitComplete) {
              let { initial: e, custom: t } = this.node.getProps();
              if (
                typeof e == `string` ||
                (typeof e == `object` && e && !Array.isArray(e))
              ) {
                let n = $i(this.node, e, t);
                if (n) {
                  let { transition: e, transitionEnd: t, ...r } = n;
                  for (let e in r) this.node.getValue(e)?.jump(r[e]);
                }
              }
              (this.node.animationState.reset(),
                this.node.animationState.animateChanges());
            } else this.node.animationState.setActive(`exit`, !1);
            this.isExitComplete = !1;
            return;
          }
          let r = this.node.animationState.setActive(`exit`, !e);
          t &&
            !e &&
            r.then(() => {
              ((this.isExitComplete = !0), t(this.id));
            });
        }
        mount() {
          let { register: e, onExitComplete: t } =
            this.node.presenceContext || {};
          (t && t(this.id), e && (this.unmount = e(this.id)));
        }
        unmount() {}
      },
    },
  };
function W(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
var Su = (e) => (t) => Ka(t) && e(t, W(t));
function Cu(e, t, n, r) {
  return kc(e, t, Su(n), r);
}
var wu = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Tu = (e, t) => Math.abs(e - t);
function Eu(e, t) {
  let n = Tu(e.x, t.x),
    r = Tu(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
var Du = new Set([`auto`, `scroll`]),
  Ou = class {
    constructor(
      e,
      t,
      {
        transformPagePoint: n,
        contextWindow: r = window,
        dragSnapToOrigin: i = !1,
        distanceThreshold: a = 3,
        element: o,
      } = {},
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.lastRawMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.scrollPositions = new Map()),
        (this.removeScrollListeners = null),
        (this.onElementScroll = (e) => {
          this.handleScroll(e.target);
        }),
        (this.onWindowScroll = () => {
          this.handleScroll(window);
        }),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          this.lastRawMoveEventInfo &&
            (this.lastMoveEventInfo = ku(
              this.lastRawMoveEventInfo,
              this.transformPagePoint,
            ));
          let e = ju(this.lastMoveEventInfo, this.history),
            t = this.startEvent !== null,
            n = Eu(e.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
          if (!t && !n) return;
          let { point: r } = e,
            { timestamp: i } = Lt;
          this.history.push({ ...r, timestamp: i });
          let { onStart: a, onMove: o } = this.handlers;
          (t ||
            (a && a(this.lastMoveEvent, e),
            (this.startEvent = this.lastMoveEvent)),
            o && o(this.lastMoveEvent, e));
        }),
        (this.handlePointerMove = (e, t) => {
          ((this.lastMoveEvent = e),
            (this.lastRawMoveEventInfo = t),
            (this.lastMoveEventInfo = ku(t, this.transformPagePoint)),
            j.update(this.updatePoint, !0));
        }),
        (this.handlePointerUp = (e, t) => {
          this.end();
          let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
          if (
            ((this.dragSnapToOrigin || !this.startEvent) && i && i(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          let a = ju(
            e.type === `pointercancel`
              ? this.lastMoveEventInfo
              : ku(t, this.transformPagePoint),
            this.history,
          );
          (this.startEvent && n && n(e, a), r && r(e, a));
        }),
        !Ka(e))
      )
        return;
      ((this.dragSnapToOrigin = i),
        (this.handlers = t),
        (this.transformPagePoint = n),
        (this.distanceThreshold = a),
        (this.contextWindow = r || window));
      let s = ku(W(e), this.transformPagePoint),
        { point: c } = s,
        { timestamp: l } = Lt;
      this.history = [{ ...c, timestamp: l }];
      let { onSessionStart: u } = t;
      u && u(e, ju(s, this.history));
      let d = { passive: !0, capture: !0 };
      ((this.removeListeners = it(
        Cu(this.contextWindow, `pointermove`, this.handlePointerMove, d),
        Cu(this.contextWindow, `pointerup`, this.handlePointerUp, d),
        Cu(this.contextWindow, `pointercancel`, this.handlePointerUp, d),
      )),
        o && this.startScrollTracking(o));
    }
    startScrollTracking(e) {
      let t = e.parentElement;
      for (; t;) {
        let e = getComputedStyle(t);
        ((Du.has(e.overflowX) || Du.has(e.overflowY)) &&
          this.scrollPositions.set(t, { x: t.scrollLeft, y: t.scrollTop }),
          (t = t.parentElement));
      }
      (this.scrollPositions.set(window, {
        x: window.scrollX,
        y: window.scrollY,
      }),
        window.addEventListener(`scroll`, this.onElementScroll, {
          capture: !0,
        }),
        window.addEventListener(`scroll`, this.onWindowScroll),
        (this.removeScrollListeners = () => {
          (window.removeEventListener(`scroll`, this.onElementScroll, {
            capture: !0,
          }),
            window.removeEventListener(`scroll`, this.onWindowScroll));
        }));
    }
    handleScroll(e) {
      let t = this.scrollPositions.get(e);
      if (!t) return;
      let n = e === window,
        r = n
          ? { x: window.scrollX, y: window.scrollY }
          : { x: e.scrollLeft, y: e.scrollTop },
        i = { x: r.x - t.x, y: r.y - t.y };
      (i.x !== 0 || i.y !== 0) &&
        (n
          ? this.lastMoveEventInfo &&
            ((this.lastMoveEventInfo.point.x += i.x),
            (this.lastMoveEventInfo.point.y += i.y))
          : this.history.length > 0 &&
            ((this.history[0].x -= i.x), (this.history[0].y -= i.y)),
        this.scrollPositions.set(e, r),
        j.update(this.updatePoint, !0));
    }
    updateHandlers(e) {
      this.handlers = e;
    }
    end() {
      (this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        It(this.updatePoint));
    }
  };
function ku(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Au(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ju({ point: e }, t) {
  return {
    point: e,
    delta: Au(e, Nu(t)),
    offset: Au(e, Mu(t)),
    velocity: Pu(t, 0.1),
  };
}
function Mu(e) {
  return e[0];
}
function Nu(e) {
  return e[e.length - 1];
}
function Pu(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = Nu(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > st(t)));) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] &&
    e.length > 2 &&
    i.timestamp - r.timestamp > st(t) * 2 &&
    (r = e[1]);
  let a = ct(i.timestamp - r.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  let o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function Fu(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? P(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? P(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Iu(e, t, n) {
  return {
    min: t === void 0 ? void 0 : e.min + t,
    max: n === void 0 ? void 0 : e.max + n - (e.max - e.min),
  };
}
function Lu(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Iu(e.x, n, i), y: Iu(e.y, t, r) };
}
function Ru(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function zu(e, t) {
  return { x: Ru(e.x, t.x), y: Ru(e.y, t.y) };
}
function Bu(e, t) {
  let n = 0.5,
    r = Xs(e),
    i = Xs(t);
  return (
    i > r
      ? (n = at(t.min, t.max - r, e.min))
      : r > i && (n = at(e.min, e.max - i, t.min)),
    Ze(0, 1, n)
  );
}
function Vu(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var Hu = 0.35;
function Uu(e = Hu) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Hu),
    { x: Wu(e, `left`, `right`), y: Wu(e, `top`, `bottom`) }
  );
}
function Wu(e, t, n) {
  return { min: Gu(e, t), max: Gu(e, n) };
}
function Gu(e, t) {
  return typeof e == `number` ? e : e[t] || 0;
}
var Ku = new WeakMap(),
  qu = class {
    constructor(e) {
      ((this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = L()),
        (this.latestPointerEvent = null),
        (this.latestPanInfo = null),
        (this.visualElement = e));
    }
    start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
      let { presenceContext: r } = this.visualElement;
      if (r && r.isPresent === !1) return;
      let i = (e) => {
          (t && this.snapToCursor(W(e).point), this.stopAnimation());
        },
        a = (e, t) => {
          let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
          if (
            n &&
            !r &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = Va(n)),
            !this.openDragLock)
          )
            return;
          ((this.latestPointerEvent = e),
            (this.latestPanInfo = t),
            (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            vc((e) => {
              let t = this.getAxisMotionValue(e).get() || 0;
              if (un.test(t)) {
                let { projection: n } = this.visualElement;
                if (n && n.layout) {
                  let r = n.layout.layoutBox[e];
                  r && (t = Xs(r) * (parseFloat(t) / 100));
                }
              }
              this.originPoint[e] = t;
            }),
            i && j.update(() => i(e, t), !1, !0),
            sa(this.visualElement, `transform`));
          let { animationState: a } = this.visualElement;
          a && a.setActive(`whileDrag`, !0);
        },
        o = (e, t) => {
          ((this.latestPointerEvent = e), (this.latestPanInfo = t));
          let {
            dragPropagation: n,
            dragDirectionLock: r,
            onDirectionLock: i,
            onDrag: a,
          } = this.getProps();
          if (!n && !this.openDragLock) return;
          let { offset: o } = t;
          r && this.currentDirection === null
            ? ((this.currentDirection = Zu(o)),
              this.currentDirection !== null && i && i(this.currentDirection))
            : (this.updateAxis(`x`, t.point, o),
              this.updateAxis(`y`, t.point, o),
              this.visualElement.render(),
              a && j.update(() => a(e, t), !1, !0));
        },
        s = (e, t) => {
          ((this.latestPointerEvent = e),
            (this.latestPanInfo = t),
            this.stop(e, t),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null));
        },
        c = () => {
          let { dragSnapToOrigin: e } = this.getProps();
          (e || this.constraints) && this.startAnimation({ x: 0, y: 0 });
        },
        { dragSnapToOrigin: l } = this.getProps();
      this.panSession = new Ou(
        e,
        {
          onSessionStart: i,
          onStart: a,
          onMove: o,
          onSessionEnd: s,
          resumeAnimation: c,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: l,
          distanceThreshold: n,
          contextWindow: wu(this.visualElement),
          element: this.visualElement.current,
        },
      );
    }
    stop(e, t) {
      let n = e || this.latestPointerEvent,
        r = t || this.latestPanInfo,
        i = this.isDragging;
      if ((this.cancel(), !i || !r || !n)) return;
      let { velocity: a } = r;
      this.startAnimation(a);
      let { onDragEnd: o } = this.getProps();
      o && j.postRender(() => o(n, r));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: t } = this.visualElement;
      (e && (e.isAnimationBlocked = !1), this.endPanSession());
      let { dragPropagation: n } = this.getProps();
      (!n &&
        this.openDragLock &&
        (this.openDragLock(), (this.openDragLock = null)),
        t && t.setActive(`whileDrag`, !1));
    }
    endPanSession() {
      (this.panSession && this.panSession.end(), (this.panSession = void 0));
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps();
      if (!n || !Xu(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        a = this.originPoint[e] + n[e];
      (this.constraints &&
        this.constraints[e] &&
        (a = Fu(a, this.constraints[e], this.elastic[e])),
        i.set(a));
    }
    resolveConstraints() {
      let { dragConstraints: e, dragElastic: t } = this.getProps(),
        n =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : this.visualElement.projection?.layout,
        r = this.constraints;
      (e && lu(e)
        ? (this.constraints ||= this.resolveRefConstraints())
        : (this.constraints = e && n ? Lu(n.layoutBox, e) : !1),
        (this.elastic = Uu(t)),
        r !== this.constraints &&
          !lu(e) &&
          n &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          vc((e) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(e) &&
              (this.constraints[e] = Vu(n.layoutBox[e], this.constraints[e]));
          }));
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !lu(e)) return !1;
      let n = e.current,
        { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      r.root && ((r.root.scroll = void 0), r.root.updateScroll());
      let i = ls(n, r.root, this.visualElement.getTransformPagePoint()),
        a = zu(r.layout.layoutBox, i);
      if (t) {
        let e = t(z(a));
        ((this.hasMutatedConstraints = !!e), e && (a = R(e)));
      }
      return a;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: a,
          onDragTransitionEnd: o,
        } = this.getProps(),
        s = this.constraints || {},
        c = vc((o) => {
          if (!Xu(o, t, this.currentDirection)) return;
          let c = (s && s[o]) || {};
          (a === !0 || a === o) && (c = { min: 0, max: 0 });
          let l = r ? 200 : 1e6,
            u = r ? 40 : 1e7,
            d = {
              type: `inertia`,
              velocity: n ? e[o] : 0,
              bounceStiffness: l,
              bounceDamping: u,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...c,
            };
          return this.startAxisValueAnimation(o, d);
        });
      return Promise.all(c).then(o);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return (
        sa(this.visualElement, e),
        n.start(qi(e, n, 0, t, this.visualElement, !1))
      );
    }
    stopAnimation() {
      vc((e) => this.getAxisMotionValue(e).stop());
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`;
      return (
        this.visualElement.getProps()[t] ||
        this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0)
      );
    }
    snapToCursor(e) {
      vc((t) => {
        let { drag: n } = this.getProps();
        if (!Xu(t, n, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let { min: n, max: a } = r.layout.layoutBox[t],
            o = i.get() || 0;
          i.set(e[t] - P(n, a, 0.5) + o);
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!lu(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = { x: 0, y: 0 };
      vc((e) => {
        let t = this.getAxisMotionValue(e);
        if (t && this.constraints !== !1) {
          let n = t.get();
          r[e] = Bu({ min: n, max: n }, this.constraints[e]);
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      ((this.visualElement.current.style.transform = i ? i({}, ``) : `none`),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        (this.constraints = !1),
        this.resolveConstraints(),
        vc((t) => {
          if (!Xu(t, e, null)) return;
          let n = this.getAxisMotionValue(t),
            { min: i, max: a } = this.constraints[t];
          n.set(P(i, a, r[t]));
        }),
        this.visualElement.render());
    }
    addListeners() {
      if (!this.visualElement.current) return;
      Ku.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = Cu(e, `pointerdown`, (t) => {
          let { drag: n, dragListener: r = !0 } = this.getProps(),
            i = t.target,
            a = i !== e && Xa(i);
          n && r && !a && this.start(t);
        }),
        n,
        r = () => {
          let { dragConstraints: t } = this.getProps();
          lu(t) &&
            t.current &&
            ((this.constraints = this.resolveRefConstraints()),
            (n ||= Yu(e, t.current, () =>
              this.scalePositionWithinConstraints(),
            )));
        },
        { projection: i } = this.visualElement,
        a = i.addEventListener(`measure`, r);
      (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
        j.read(r));
      let o = kc(window, `resize`, () => this.scalePositionWithinConstraints()),
        s = i.addEventListener(
          `didUpdate`,
          ({ delta: e, hasLayoutChanged: t }) => {
            this.isDragging &&
              t &&
              (vc((t) => {
                let n = this.getAxisMotionValue(t);
                n &&
                  ((this.originPoint[t] += e[t].translate),
                  n.set(n.get() + e[t].translate));
              }),
              this.visualElement.render());
          },
        );
      return () => {
        (o(), t(), a(), s && s(), n && n());
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: a = Hu,
          dragMomentum: o = !0,
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: a,
        dragMomentum: o,
      };
    }
  };
function Ju(e) {
  let t = !0;
  return () => {
    t ? (t = !1) : e();
  };
}
function Yu(e, t, n) {
  let r = yo(e, Ju(n)),
    i = yo(t, Ju(n));
  return () => {
    (r(), i());
  };
}
function Xu(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Zu(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = `y`) : Math.abs(e.x) > t && (n = `x`), n);
}
var Qu = class extends Go {
    constructor(e) {
      (super(e),
        (this.removeGroupControls = rt),
        (this.removeListeners = rt),
        (this.controls = new qu(e)));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      (e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || rt));
    }
    update() {
      let { dragControls: e } = this.node.getProps(),
        { dragControls: t } = this.node.prevProps || {};
      e !== t &&
        (this.removeGroupControls(),
        e && (this.removeGroupControls = e.subscribe(this.controls)));
    }
    unmount() {
      (this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession());
    }
  },
  $u = (e) => (t, n) => {
    e && j.update(() => e(t, n), !1, !0);
  },
  ed = class extends Go {
    constructor() {
      (super(...arguments), (this.removePointerDownListener = rt));
    }
    onPointerDown(e) {
      this.session = new Ou(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: wu(this.node),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: t,
        onPan: n,
        onPanEnd: r,
      } = this.node.getProps();
      return {
        onSessionStart: $u(e),
        onStart: $u(t),
        onMove: $u(n),
        onEnd: (e, t) => {
          (delete this.session, r && j.postRender(() => r(e, t)));
        },
      };
    }
    mount() {
      this.removePointerDownListener = Cu(
        this.node.current,
        `pointerdown`,
        (e) => this.onPointerDown(e),
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      (this.removePointerDownListener(), this.session && this.session.end());
    }
  },
  G = !1,
  K = class extends b.Component {
    componentDidMount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e;
      (i &&
        (t.group && t.group.add(i),
        n && n.register && r && n.register(i),
        G && i.root.didUpdate(),
        i.addEventListener(`animationComplete`, () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          layoutDependency: this.props.layoutDependency,
          onExitComplete: () => this.safeToRemove(),
        })),
        (Fc.hasEverUpdated = !0));
    }
    getSnapshotBeforeUpdate(e) {
      let {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        { projection: a } = n;
      return (
        a &&
          ((a.isPresent = i),
          e.layoutDependency !== t &&
            a.setOptions({ ...a.options, layoutDependency: t }),
          (G = !0),
          r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i
            ? a.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? a.promote()
              : a.relegate() ||
                j.postRender(() => {
                  let e = a.getStack();
                  (e && e.members.length) || this.safeToRemove();
                }))),
        null
      );
    }
    componentDidUpdate() {
      let { visualElement: e, layoutAnchor: t } = this.props,
        { projection: n } = e;
      n &&
        ((n.options.layoutAnchor = t),
        n.root.didUpdate(),
        La.postRender(() => {
          !n.currentAnimation && n.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      ((G = !0),
        r &&
          (r.scheduleCheckAfterUnmount(),
          t && t.group && t.group.remove(r),
          n && n.deregister && n.deregister(r)));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function q(e) {
  let [t, n] = wl(),
    r = (0, b.useContext)(Ge);
  return (0, A.jsx)(K, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: (0, b.useContext)(cu),
    isPresent: t,
    safeToRemove: n,
  });
}
var J = {
  pan: { Feature: ed },
  drag: { Feature: Qu, ProjectionNode: gl, MeasureLayout: q },
};
function Y(e, t, n) {
  let { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive(`whileHover`, n === `Start`);
  let i = r[`onHover` + n];
  i && j.postRender(() => i(t, W(t)));
}
var td = class extends Go {
    mount() {
      let { current: e } = this.node;
      e &&
        (this.unmount = Wa(
          e,
          (e, t) => (Y(this.node, t, `Start`), (e) => Y(this.node, e, `End`)),
        ));
    }
    unmount() {}
  },
  nd = class extends Go {
    constructor() {
      (super(...arguments), (this.isActive = !1));
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(`:focus-visible`);
      } catch {
        e = !0;
      }
      e &&
        this.node.animationState &&
        (this.node.animationState.setActive(`whileFocus`, !0),
        (this.isActive = !0));
    }
    onBlur() {
      this.isActive &&
        this.node.animationState &&
        (this.node.animationState.setActive(`whileFocus`, !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = it(
        kc(this.node.current, `focus`, () => this.onFocus()),
        kc(this.node.current, `blur`, () => this.onBlur()),
      );
    }
    unmount() {}
  };
function rd(e, t, n) {
  let { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive(`whileTap`, n === `Start`);
  let i = r[`onTap` + (n === `End` ? `` : n)];
  i && j.postRender(() => i(t, W(t)));
}
var id = class extends Go {
    mount() {
      let { current: e } = this.node;
      if (!e) return;
      let { globalTapTarget: t, propagate: n } = this.node.props;
      this.unmount = ro(
        e,
        (e, t) => (
          rd(this.node, t, `Start`),
          (e, { success: t }) => rd(this.node, e, t ? `End` : `Cancel`)
        ),
        { useGlobalTarget: t, stopPropagation: n?.tap === !1 },
      );
    }
    unmount() {}
  },
  ad = new WeakMap(),
  X = new WeakMap(),
  od = (e) => {
    let t = ad.get(e.target);
    t && t(e);
  },
  sd = (e) => {
    e.forEach(od);
  };
function cd({ root: e, ...t }) {
  let n = e || document;
  X.has(n) || X.set(n, {});
  let r = X.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(sd, { root: e, ...t })),
    r[i]
  );
}
function ld(e, t, n) {
  let r = cd(t);
  return (
    ad.set(e, n),
    r.observe(e),
    () => {
      (ad.delete(e), r.unobserve(e));
    }
  );
}
var ud = { some: 0, all: 1 },
  dd = class extends Go {
    constructor() {
      (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
    }
    startObserver() {
      this.stopObserver?.();
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = `some`, once: i } = e,
        a = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == `number` ? r : ud[r],
        },
        o = (e) => {
          let { isIntersecting: t } = e;
          if (
            this.isInView === t ||
            ((this.isInView = t), i && !t && this.hasEnteredView)
          )
            return;
          (t && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive(`whileInView`, t));
          let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(),
            a = t ? n : r;
          a && a(e);
        };
      this.stopObserver = ld(this.node.current, a, o);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > `u`) return;
      let { props: e, prevProps: t } = this.node;
      [`amount`, `margin`, `root`].some(fd(e, t)) && this.startObserver();
    }
    unmount() {
      (this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1));
    }
  };
function fd({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var pd = {
    inView: { Feature: dd },
    tap: { Feature: id },
    focus: { Feature: nd },
    hover: { Feature: td },
  },
  md = { layout: { ProjectionNode: gl, MeasureLayout: q } },
  hd = _u({ ...xu, ...pd, ...J, ...md }, vu),
  gd = ({ config: e, onScrollNext: t, onScrollToEvents: n }) => {
    let [r, i] = (0, b.useState)(!0),
      [a, o] = (0, b.useState)(`embrace`),
      s = a === `embrace` ? S.punjabiEmbrace : S.royalVarmala;
    return (0, A.jsxs)(`section`, {
      className: `relative w-full min-h-[700px] h-full flex flex-col items-center justify-between overflow-hidden bg-[#18040A] select-none text-white`,
      children: [
        (0, A.jsxs)(`div`, {
          className: `absolute inset-0 z-0`,
          children: [
            (0, A.jsx)(`img`, {
              src: s,
              alt: `${e.groomName} & ${e.brideName} Royal Punjabi Wedding`,
              className: `w-full h-full object-cover object-center brightness-[0.98] contrast-[1.08] saturate-[1.15] transition-all duration-700`,
            }),
            (0, A.jsx)(`div`, {
              className: `absolute inset-0 pointer-events-none transition-colors duration-700`,
              style: {
                background: `radial-gradient(circle at 50% 25%, rgba(212, 175, 55, 0.32), transparent 70%), linear-gradient(to bottom, rgba(133, 11, 27, 0.65) 0%, rgba(45, 10, 15, 0.45) 45%, rgba(26, 5, 11, 0.95) 100%)`,
              },
            }),
            (0, A.jsx)(`div`, {
              className: `absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#D4AF37_1.5px,transparent_1.5px)] [background-size:28px_28px]`,
            }),
            (0, A.jsx)(`div`, {
              className: `absolute top-1/4 right-8 w-3 h-3 rounded-full bg-yellow-200 animate-sparkle`,
            }),
            (0, A.jsx)(`div`, {
              className: `absolute top-1/3 left-6 w-2.5 h-2.5 rounded-full bg-amber-300 animate-sparkle [animation-delay:600ms]`,
            }),
            (0, A.jsx)(`div`, {
              className: `absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-yellow-100 animate-sparkle [animation-delay:1200ms]`,
            }),
          ],
        }),
        (0, A.jsxs)(`div`, {
          className: `relative z-20 w-full flex flex-col items-center pt-5 sm:pt-7 px-3 sm:px-4`,
          children: [
            (0, A.jsx)(Dl, {
              children:
                r &&
                (0, A.jsxs)(hd.div, {
                  initial: { height: 0, opacity: 0.3, scaleY: 0 },
                  animate: {
                    height: `auto`,
                    opacity: 1,
                    scaleY: 1,
                    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
                  },
                  exit: { height: 0, opacity: 0, scaleY: 0 },
                  className: `relative w-full max-w-[370px] sm:max-w-[440px] md:max-w-2xl lg:max-w-3xl origin-top preserve-3d`,
                  children: [
                    (0, A.jsxs)(`div`, {
                      className: `relative z-10 w-[104%] -left-[2%] h-4 bg-gradient-to-r from-[#451f08] via-[#854d19] to-[#451f08] rounded-full shadow-lg border-b border-[#2b1204] flex items-center justify-between px-2`,
                      children: [
                        (0, A.jsx)(`div`, {
                          className: `w-2.5 h-2.5 rounded-full bg-amber-300 border border-amber-500 shadow-sm`,
                        }),
                        (0, A.jsx)(`div`, {
                          className: `w-2.5 h-2.5 rounded-full bg-amber-300 border border-amber-500 shadow-sm`,
                        }),
                      ],
                    }),
                    (0, A.jsxs)(`div`, {
                      className: `relative bg-[#FFFDF7] border-x-2 border-b-2 border-amber-400/90 shadow-[0_20px_50px_rgba(0,0,0,0.85)] rounded-b-2xl px-4 py-5 md:px-8 md:py-7 text-center overflow-hidden`,
                      children: [
                        (0, A.jsx)(`div`, {
                          className: `absolute inset-0 opacity-20 pointer-events-none`,
                          style: {
                            backgroundImage: `radial-gradient(#D4AF37 1.5px, transparent 1.5px)`,
                            backgroundSize: `16px 16px`,
                          },
                        }),
                        (0, A.jsxs)(`div`, {
                          className: `relative border-2 border-amber-400/80 p-3 sm:p-5 md:p-6 rounded-xl bg-[#FAF5EC]/90 backdrop-blur-[1px] shadow-inner`,
                          children: [
                            (0, A.jsxs)(`div`, {
                              className: `flex items-center justify-center gap-1.5 mb-1.5 text-amber-900`,
                              children: [
                                (0, A.jsx)(xe, {
                                  className: `w-2.5 h-2.5 fill-amber-600 text-amber-600`,
                                }),
                                (0, A.jsx)(`span`, {
                                  className: `text-[10px] sm:text-[11px] md:text-xs font-cinzel tracking-wider font-bold uppercase drop-shadow-xs text-amber-950`,
                                  children:
                                    e.culturalInvocation ||
                                    `॥ ॐ श्री गणेशाय नमः ॥`,
                                }),
                                (0, A.jsx)(xe, {
                                  className: `w-2.5 h-2.5 fill-amber-600 text-amber-600`,
                                }),
                              ],
                            }),
                            (0, A.jsxs)(`div`, {
                              className: `mb-2 py-1.5 px-4 bg-gradient-to-r from-amber-100/80 via-amber-200/90 to-amber-100/80 rounded-xl border border-amber-400/60 inline-block shadow-xs`,
                              children: [
                                (0, A.jsx)(`p`, {
                                  className: `text-[9px] sm:text-[10px] font-cinzel text-neutral-700 font-semibold uppercase tracking-wider`,
                                  children: `With the Eternal Blessings of`,
                                }),
                                (0, A.jsxs)(`div`, {
                                  className: `text-xs sm:text-sm font-serif font-bold text-red-600 leading-tight drop-shadow-xs flex flex-col items-center justify-center my-1`,
                                  children: [
                                    (0, A.jsx)(`span`, {
                                      className: `text-red-600 font-bold tracking-wide text-xs sm:text-sm`,
                                      children: `Late Sh PL Makkar`,
                                    }),
                                    (0, A.jsx)(`span`, {
                                      className: `text-red-500 font-script text-base leading-none my-0.5`,
                                      children: `&`,
                                    }),
                                    (0, A.jsx)(`span`, {
                                      className: `text-red-600 font-bold tracking-wide text-xs sm:text-sm`,
                                      children: `Late Sh AK Bhatia`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, A.jsx)(`p`, {
                              className: `text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] font-cinzel font-bold text-amber-950 mb-2`,
                              children: `WE ARE GETTING MARRIED`,
                            }),
                            (0, A.jsxs)(`div`, {
                              className: `md:grid md:grid-cols-12 md:gap-6 md:items-center my-2`,
                              children: [
                                (0, A.jsxs)(`div`, {
                                  className: `md:col-span-5 my-2 md:my-0 flex flex-col items-center justify-center`,
                                  children: [
                                    (0, A.jsxs)(`div`, {
                                      className: `relative w-28 h-28 sm:w-32 sm:h-32 md:w-44 md:h-44 rounded-full p-1.5 shadow-xl bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 transition-transform duration-300 hover:scale-105`,
                                      children: [
                                        (0, A.jsx)(`div`, {
                                          className: `w-full h-full rounded-full overflow-hidden border-2 md:border-[3px] border-[#FFFDF7] bg-neutral-100 shadow-inner`,
                                          children: (0, A.jsx)(`img`, {
                                            src: s,
                                            alt: `${e.groomName} & ${e.brideName}`,
                                            className: `w-full h-full object-cover object-center`,
                                          }),
                                        }),
                                        (0, A.jsx)(`div`, {
                                          className: `absolute -bottom-1 -right-1 w-6 h-6 md:w-7 md:h-7 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center text-xs shadow-md`,
                                          children: `✨`,
                                        }),
                                      ],
                                    }),
                                    (0, A.jsxs)(`div`, {
                                      className: `mt-2.5 flex items-center gap-1.5`,
                                      children: [
                                        (0, A.jsx)(`button`, {
                                          type: `button`,
                                          onClick: () => o(`embrace`),
                                          className: `text-[9px] font-cinzel px-2.5 py-0.5 rounded-full border transition-all cursor-pointer ${a === `embrace` ? `bg-[#850B1B] text-amber-100 border-amber-400 font-bold shadow-xs` : `bg-white/90 text-neutral-700 border-neutral-300 hover:bg-neutral-100`}`,
                                          children: `Embrace (Shot 1)`,
                                        }),
                                        (0, A.jsx)(`button`, {
                                          type: `button`,
                                          onClick: () => o(`varmala`),
                                          className: `text-[9px] font-cinzel px-2.5 py-0.5 rounded-full border transition-all cursor-pointer ${a === `varmala` ? `bg-[#850B1B] text-amber-100 border-amber-400 font-bold shadow-xs` : `bg-white/90 text-neutral-700 border-neutral-300 hover:bg-neutral-100`}`,
                                          children: `Varmala (Shot 3)`,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, A.jsxs)(`div`, {
                                  className: `md:col-span-7 flex flex-col items-center text-center`,
                                  children: [
                                    (0, A.jsxs)(`div`, {
                                      className: `my-1.5 py-2 border-y border-amber-400/50 w-full`,
                                      children: [
                                        (0, A.jsx)(`h1`, {
                                          className: `font-playfair text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide leading-tight text-[#850B1B]`,
                                          children: e.groomName,
                                        }),
                                        (0, A.jsxs)(`p`, {
                                          className: `text-[10px] sm:text-[11px] text-neutral-700 font-montserrat`,
                                          children: [
                                            `Son of `,
                                            (0, A.jsx)(`span`, {
                                              className: `font-semibold text-amber-950`,
                                              children: `Mrs. Uma Makkar & Mr. Sanjeev Makkar`,
                                            }),
                                          ],
                                        }),
                                        (0, A.jsxs)(`div`, {
                                          className: `flex items-center justify-center gap-2 my-1`,
                                          children: [
                                            (0, A.jsx)(`span`, {
                                              className: `w-10 md:w-16 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500 to-transparent`,
                                            }),
                                            (0, A.jsx)(`span`, {
                                              className: `font-script text-2xl md:text-3xl font-bold text-[#D4AF37]`,
                                              children: `&`,
                                            }),
                                            (0, A.jsx)(`span`, {
                                              className: `w-10 md:w-16 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500 to-transparent`,
                                            }),
                                          ],
                                        }),
                                        (0, A.jsx)(`h1`, {
                                          className: `font-playfair text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide leading-tight text-[#850B1B]`,
                                          children: e.brideName,
                                        }),
                                        (0, A.jsxs)(`p`, {
                                          className: `text-[10px] sm:text-[11px] text-neutral-700 font-montserrat`,
                                          children: [
                                            `Daughter of `,
                                            (0, A.jsx)(`span`, {
                                              className: `font-semibold text-amber-950`,
                                              children: `Mrs. Pushpa Gusain & Mr. Rakesh Gusain`,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, A.jsxs)(`div`, {
                                      className: `mt-2`,
                                      children: [
                                        (0, A.jsx)(`p`, {
                                          className: `text-xs sm:text-sm md:text-base font-cinzel font-bold text-neutral-900 tracking-wider`,
                                          children: e.weddingDateFormatted,
                                        }),
                                        (0, A.jsx)(`p`, {
                                          className: `text-[11px] sm:text-xs font-montserrat text-neutral-700 font-medium mt-0.5`,
                                          children: e.weddingTime,
                                        }),
                                        (0, A.jsxs)(`p`, {
                                          className: `text-[11px] sm:text-xs font-montserrat text-neutral-800 font-bold mt-0.5`,
                                          children: [
                                            e.venueName,
                                            ` • `,
                                            e.venueCity,
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, A.jsx)(`div`, {
                                      className: `mt-4 flex flex-wrap items-center justify-center gap-2.5 pt-2 border-t border-amber-900/10 w-full`,
                                      children: (0, A.jsxs)(`button`, {
                                        type: `button`,
                                        onClick: n,
                                        className: `px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#850B1B] via-[#991B1B] to-[#B91C1C] hover:opacity-95 text-white text-xs font-cinzel font-bold shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 border border-amber-300/40 cursor-pointer`,
                                        children: [
                                          (0, A.jsx)(de, {
                                            className: `w-3.5 h-3.5 text-amber-300`,
                                          }),
                                          `View Ceremonies & Itinerary`,
                                        ],
                                      }),
                                    }),
                                    (0, A.jsx)(`div`, {
                                      className: `mt-3 flex justify-center`,
                                      children: (0, A.jsx)(`div`, {
                                        className: `w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 flex items-center justify-center text-red-950 shadow-md font-title text-xs font-black border border-amber-200`,
                                        children: e.monogramText,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, A.jsx)(`div`, {
                          className: `absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-[#451f08] via-[#854d19] to-[#451f08] shadow-md border-t border-[#2b1204]`,
                        }),
                      ],
                    }),
                  ],
                }),
            }),
            (0, A.jsxs)(`button`, {
              onClick: () => i(!r),
              type: `button`,
              className: `mt-3 text-[11px] font-cinzel tracking-wider text-amber-950 bg-amber-100/90 hover:bg-white backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-400/80 shadow-md flex items-center gap-1.5 transition-all cursor-pointer`,
              children: [
                (0, A.jsx)(ke, { className: `w-3.5 h-3.5 text-amber-800` }),
                r ? `Fold Banner` : `Unroll Royal Scroll ✨`,
              ],
            }),
          ],
        }),
        (0, A.jsx)(`div`, {
          className: `relative z-20 w-full flex flex-col items-center pb-6 pt-8`,
          children: (0, A.jsxs)(`button`, {
            onClick: t,
            type: `button`,
            className: `group flex flex-col items-center gap-1 text-white text-xs font-cinzel tracking-widest uppercase hover:scale-105 transition-transform cursor-pointer`,
            children: [
              (0, A.jsxs)(`span`, {
                className: `bg-neutral-950/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-amber-400/60 text-amber-300 flex items-center gap-2 shadow-[0_0_25px_rgba(255,215,0,0.35)]`,
                children: [
                  (0, A.jsx)(Ne, {
                    className: `w-4 h-4 text-amber-400 animate-sparkle`,
                  }),
                  `Enter Royal Celebration`,
                ],
              }),
              (0, A.jsx)(me, {
                className: `w-5 h-5 text-amber-300 animate-bounce mt-1 drop-shadow`,
              }),
            ],
          }),
        }),
      ],
    });
  },
  _d = ({
    variant: e = `kaleerein`,
    label: t,
    themeAccent: n = `#D4AF37`,
    isKerala: r = !1,
  }) =>
    r
      ? (0, A.jsx)(`div`, {
          "aria-hidden": `true`,
          className: `relative w-full py-6 my-2 overflow-hidden flex flex-col items-center select-none pointer-events-none z-20`,
          children: (0, A.jsxs)(`div`, {
            className: `relative w-full max-w-lg flex items-center justify-center gap-2 px-4 mb-1`,
            children: [
              (0, A.jsx)(`div`, {
                className: `flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#F59E0B] to-[#FBBF24]`,
              }),
              (0, A.jsxs)(`div`, {
                className: `flex items-center gap-2 bg-[#062419]/95 px-4 py-1.5 rounded-full border border-amber-400/80 shadow-[0_0_20px_rgba(245,158,11,0.4)]`,
                children: [
                  (0, A.jsx)(`span`, {
                    className: `text-xs`,
                    title: `Coconut Palm`,
                    children: `🌴`,
                  }),
                  (0, A.jsx)(`span`, {
                    className: `w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10B981]`,
                  }),
                  (0, A.jsx)(`span`, { className: `text-xs`, children: `🌸` }),
                  (0, A.jsx)(`div`, {
                    className: `w-6 h-6 rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-amber-600 flex items-center justify-center text-[11px] text-amber-950 font-bold shadow-md`,
                    children: `🪔`,
                  }),
                  (0, A.jsx)(`span`, { className: `text-xs`, children: `🌸` }),
                  (0, A.jsx)(`span`, {
                    className: `w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10B981]`,
                  }),
                  (0, A.jsx)(`span`, { className: `text-xs`, children: `🌴` }),
                ],
              }),
              (0, A.jsx)(`div`, {
                className: `flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#F59E0B] to-[#FBBF24]`,
              }),
            ],
          }),
        })
      : (0, A.jsxs)(`div`, {
          "aria-hidden": `true`,
          className: `relative w-full py-6 my-3 overflow-hidden flex flex-col items-center select-none pointer-events-none z-20`,
          children: [
            (0, A.jsxs)(`div`, {
              className: `relative w-full max-w-xl flex items-center justify-center gap-3 px-4`,
              children: [
                (0, A.jsx)(`div`, {
                  className: `flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400 to-amber-500 opacity-90`,
                }),
                (0, A.jsxs)(`div`, {
                  className: `flex items-center gap-2.5 bg-gradient-to-b from-[#2D0A0F] to-[#18040A] px-5 py-1.5 rounded-full border border-amber-400/80 shadow-[0_0_25px_rgba(212,175,55,0.45)]`,
                  children: [
                    (0, A.jsx)(`span`, {
                      className: `text-xs text-amber-300 drop-shadow-xs`,
                      children: `🌸`,
                    }),
                    (0, A.jsx)(`span`, {
                      className: `w-1.5 h-1.5 rounded-full bg-amber-400 border border-amber-200`,
                    }),
                    (0, A.jsxs)(`div`, {
                      className: `flex items-center gap-1.5`,
                      children: [
                        (0, A.jsx)(Ne, {
                          className: `w-3.5 h-3.5 text-amber-300 animate-sparkle`,
                        }),
                        (0, A.jsx)(`span`, {
                          className: `font-cinzel text-[11px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-100 uppercase tracking-widest`,
                          className: (t && t.includes(`LATE SH PL MAKKAR`))
                            ? `font-cinzel text-[11px] sm:text-xs font-bold text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)] uppercase tracking-widest`
                            : `font-cinzel text-[11px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-100 uppercase tracking-widest`,
                          children:
                            t || `॥ WEDDING CELEBRATIONS ॥`,
                        }),
                        (0, A.jsx)(Ne, {
                          className: `w-3.5 h-3.5 text-amber-300 animate-sparkle`,
                        }),
                      ],
                    }),
                    (0, A.jsx)(`span`, {
                      className: `w-1.5 h-1.5 rounded-full bg-amber-400 border border-amber-200`,
                    }),
                    (0, A.jsx)(`span`, {
                      className: `text-xs text-amber-300 drop-shadow-xs`,
                      children: `🌸`,
                    }),
                  ],
                }),
                (0, A.jsx)(`div`, {
                  className: `flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-amber-400 to-amber-500 opacity-90`,
                }),
              ],
            }),
            (0, A.jsxs)(`div`, {
              className: `flex items-center justify-center gap-6 mt-1 text-[10px] text-amber-400/60 font-serif`,
              children: [
                (0, A.jsx)(`span`, { children: `✨` }),
                (0, A.jsx)(`span`, { children: `•` }),
                (0, A.jsx)(`span`, { children: `🔔` }),
                (0, A.jsx)(`span`, { children: `•` }),
                (0, A.jsx)(`span`, { children: `✨` }),
              ],
            }),
          ],
        }),
  vd = ({ config: e }) => {
    let [t, n] = (0, b.useState)({
        timeString: ``,
        dateString: ``,
        fullFormatted: ``,
      }),
      [r, i] = (0, b.useState)({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: !1,
      });
    return (
      (0, b.useEffect)(() => {
        let e = () => {
          let e = new Date(),
            t = new Intl.DateTimeFormat(`en-IN`, {
              timeZone: `Asia/Kolkata`,
              hour: `2-digit`,
              minute: `2-digit`,
              second: `2-digit`,
              hour12: !0,
            }),
            r = new Intl.DateTimeFormat(`en-IN`, {
              timeZone: `Asia/Kolkata`,
              weekday: `long`,
              day: `numeric`,
              month: `short`,
              year: `numeric`,
            }),
            a = t.format(e),
            o = r.format(e);
          n({ timeString: a, dateString: o, fullFormatted: `${o}, ${a} IST` });
          let s = new Date(`2026-12-13T19:00:00+05:30`).getTime() - e.getTime();
          if (s <= 0)
            i({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: !0 });
          else {
            let e = Math.floor(s / 864e5),
              t = Math.floor((s / 36e5) % 24),
              n = Math.floor((s / 6e4) % 60),
              r = Math.floor((s / 1e3) % 60);
            i({ days: e, hours: t, minutes: n, seconds: r, isExpired: !1 });
          }
        };
        e();
        let t = setInterval(e, 1e3);
        return () => clearInterval(t);
      }, []),
      (0, A.jsxs)(`section`, {
        id: `scene-sacred-invitation`,
        className: `relative w-full min-h-[660px] h-full flex flex-col items-center justify-between overflow-hidden select-none text-white py-10 px-4`,
        style: { backgroundColor: `#18040A` },
        children: [
          (0, A.jsxs)(`div`, {
            className: `absolute inset-0 z-0`,
            children: [
              (0, A.jsx)(`img`, {
                src: S.royalVarmala,
                alt: `Royal Mandap & Crystal Chandelier`,
                className: `w-full h-full object-cover object-center brightness-[1.04] contrast-[1.1] saturate-[1.15]`,
              }),
              (0, A.jsx)(`div`, {
                className: `absolute inset-0`,
                style: {
                  background: `linear-gradient(to bottom, rgba(133, 11, 27, 0.78) 0%, rgba(45, 10, 15, 0.65) 50%, rgba(26, 5, 11, 0.95) 100%)`,
                },
              }),
              (0, A.jsx)(`div`, {
                className: `absolute top-1/4 right-8 w-3 h-3 rounded-full bg-yellow-200 animate-sparkle`,
              }),
              (0, A.jsx)(`div`, {
                className: `absolute top-1/3 left-6 w-2.5 h-2.5 rounded-full bg-amber-300 animate-sparkle [animation-delay:500ms]`,
              }),
            ],
          }),
          (0, A.jsx)(`div`, {
            className: `relative z-20 w-full flex flex-col items-center pt-4 text-center`,
            children: (0, A.jsxs)(`div`, {
              className: `relative flex flex-col items-center`,
              children: [
                (0, A.jsxs)(`div`, {
                  className: `relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#FBBF24] backdrop-blur-md shadow-[0_0_40px_rgba(255,215,0,0.6)] animate-aura-glow bg-gradient-to-br from-[#F59E0B]/30 via-[#2A0610]/90 to-black`,
                  children: [
                    (0, A.jsx)(`div`, {
                      className: `absolute -inset-2 border-2 border-[#FBBF24]/40 rounded-full animate-spin-slow pointer-events-none`,
                    }),
                    (0, A.jsx)(`span`, {
                      className: `font-title text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-yellow-200 via-amber-100 to-yellow-400 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] tracking-tight`,
                      children: e.monogramText,
                    }),
                  ],
                }),
                (0, A.jsxs)(`div`, {
                  className: `flex items-center gap-2 mt-4 text-amber-200 text-xs font-cinzel tracking-widest uppercase drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]`,
                  children: [
                    (0, A.jsx)(Ne, {
                      className: `w-3.5 h-3.5 text-amber-400 animate-sparkle`,
                    }),
                    (0, A.jsx)(`span`, {
                      className: `font-bold`,
                      children: `🌸 Kunal & Sania • Wedding Countdown 🌸`,
                    }),
                    (0, A.jsx)(Ne, {
                      className: `w-3.5 h-3.5 text-amber-400 animate-sparkle`,
                    }),
                  ],
                }),
                (0, A.jsxs)(`div`, {
                  className: `mt-2.5 px-4 py-1.5 rounded-full bg-black/80 border border-red-500/70 text-[11px] text-amber-200 shadow-[0_0_15px_rgba(239,68,68,0.4)]`,
                  children: [
                    (0, A.jsx)(`span`, {
                      className: `font-cinzel text-neutral-300 text-[10px] uppercase mr-1.5`,
                      children: `With Eternal Blessings of`,
                    }),
                    (0, A.jsxs)(`span`, {
                      className: `font-serif font-bold text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.9)] tracking-wide`,
                      children: [
                        `Late Sh PL Makkar `,
                        (0, A.jsx)(`span`, { className: `text-red-400 font-script text-sm mx-0.5`, children: `&` }),
                        ` Late Sh AK Bhatia`,
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, A.jsx)(`div`, {
            className: `relative z-10 w-full flex justify-center px-4 py-3`,
            children: (0, A.jsxs)(`div`, {
              className: `max-w-md md:max-w-2xl px-6 md:px-8 py-3 md:py-4 rounded-full backdrop-blur-md border border-amber-400/80 text-center shadow-[0_0_25px_rgba(0,0,0,0.7)] bg-[#2A0610]/85`,
              children: [
                (0, A.jsxs)(`p`, {
                  className: `text-amber-200 text-xs sm:text-sm md:text-base font-serif italic tracking-wide`,
                  children: [
                    `“`,
                    e.shloka ||
                      `Sakhe saptapada bhava sa mamanuvrata bhava vishnustva nayatu`,
                    `”`,
                  ],
                }),
                e.shlokaMeaning &&
                  (0, A.jsx)(`p`, {
                    className: `text-[10px] md:text-xs text-amber-100/80 font-body mt-1`,
                    children: e.shlokaMeaning,
                  }),
              ],
            }),
          }),
          (0, A.jsx)(`div`, {
            className: `relative z-20 w-full flex flex-col items-center pb-8 px-4 text-center`,
            children: (0, A.jsxs)(`div`, {
              className: `w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl backdrop-blur-md rounded-2xl p-5 md:p-6 border border-amber-500/80 shadow-[0_0_40px_rgba(0,0,0,0.85)] bg-[#18040A]/90`,
              children: [
                (0, A.jsxs)(`p`, {
                  className: `text-amber-100/95 text-xs md:text-sm font-editorial italic mb-3.5 leading-relaxed px-2 md:px-6`,
                  children: [
                    `“With the eternal blessings of our revered elders `,
                    (0, A.jsx)(`span`, {
                      className: `text-red-500 font-bold not-italic drop-shadow-[0_0_8px_rgba(239,68,68,0.7)]`,
                      children: `Late Sh PL Makkar & Late Sh AK Bhatia`,
                    }),
                    `, and the love of our parents Mrs. Uma & Mr. Sanjeev Makkar and Mrs. Pushpa & Mr. Rakesh Gusain, we invite you to join us in celebrating the wedding festivities of Kunal & Sania amidst the scenic wilderness of Jim Corbett.”`,
                  ],
                }),
                (0, A.jsxs)(`div`, {
                  className: `mb-4 px-3.5 py-1.5 md:py-2 rounded-xl bg-black/60 border border-amber-500/30 flex items-center justify-between gap-2 shadow-inner max-w-md mx-auto`,
                  children: [
                    (0, A.jsxs)(`div`, {
                      className: `flex items-center gap-1.5`,
                      children: [
                        (0, A.jsxs)(`span`, {
                          className: `relative flex h-2 w-2`,
                          children: [
                            (0, A.jsx)(`span`, {
                              className: `animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75`,
                            }),
                            (0, A.jsx)(`span`, {
                              className: `relative inline-flex rounded-full h-2 w-2 bg-emerald-500`,
                            }),
                          ],
                        }),
                        (0, A.jsx)(`span`, {
                          className: `text-[10px] md:text-xs font-mono text-emerald-300 font-semibold tracking-wider`,
                          children: `LIVE IST`,
                        }),
                      ],
                    }),
                    (0, A.jsxs)(`div`, {
                      className: `flex items-center gap-1.5 text-[10px] md:text-xs font-mono text-amber-200`,
                      children: [
                        (0, A.jsx)(ve, { className: `w-3 h-3 text-amber-400` }),
                        (0, A.jsx)(`span`, {
                          children: t.fullFormatted || `Loading IST...`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, A.jsx)(`div`, {
                  className: `grid grid-cols-4 gap-2 sm:gap-3 max-w-md mx-auto`,
                  children: [
                    { label: `Days`, val: r.days },
                    { label: `Hours`, val: r.hours },
                    { label: `Minutes`, val: r.minutes },
                    { label: `Seconds`, val: r.seconds },
                  ].map((e, t) =>
                    (0, A.jsxs)(
                      `div`,
                      {
                        className: `flex flex-col items-center justify-center p-2.5 rounded-xl bg-black/70 border border-amber-400/40 shadow-inner`,
                        children: [
                          (0, A.jsx)(`span`, {
                            className: `font-title text-xl sm:text-2xl md:text-3xl font-bold text-amber-300`,
                            children: String(e.val).padStart(2, `0`),
                          }),
                          (0, A.jsx)(`span`, {
                            className: `text-[9px] md:text-[10px] uppercase font-cinzel text-amber-200/80 tracking-wider`,
                            children: e.label,
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
                (0, A.jsxs)(`p`, {
                  className: `mt-3 text-[11px] font-cinzel text-amber-300 font-semibold uppercase tracking-widest`,
                  children: [e.weddingDateFormatted, ` • `, e.venueName],
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  yd = ({ config: e, onTriggerPetalShower: t }) => {
    let [n, r] = (0, b.useState)(!1),
      [i, a] = (0, b.useState)(!1),
      o =
        e.gatewayPhotoUrl ||
        `/assets/aistudio/WhatsApp_Image_2026-10-28_at_4.10.23_PM_24ea3598.jpeg`;
    (0, b.useEffect)(() => {
      let e = ze.subscribe((e) => {
        a(e);
      });
      return () => e();
    }, []);
    let s = () => {
        (ze.playWaxSealSound(),
          r(!0),
          t(),
          ze.getIsPlaying() ||
            setTimeout(() => {
              ze.playWeddingMusic();
            }, 300));
      },
      c = () => {
        n ? (ze.playCardFlipSound(), r(!1)) : s();
      },
      l = (e) => {
        (e.stopPropagation(), ze.toggleMusic());
      };
    return (0, A.jsxs)(`section`, {
      id: `scene-3d-gateway-reveal`,
      className: `relative w-full min-h-screen py-20 px-4 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-950 via-[#18040A] to-neutral-950 text-white select-none`,
      children: [
        (0, A.jsxs)(`div`, {
          className: `absolute inset-0 pointer-events-none overflow-hidden`,
          children: [
            (0, A.jsx)(`div`, {
              className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-900/15 rounded-full blur-3xl`,
            }),
            (0, A.jsx)(`div`, {
              className: `absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl`,
            }),
            (0, A.jsx)(`div`, {
              className: `absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-20`,
            }),
          ],
        }),
        (0, A.jsxs)(`div`, {
          className: `relative z-10 text-center max-w-2xl mx-auto mb-8 px-4`,
          children: [
            (0, A.jsxs)(`div`, {
              className: `inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-300/40 shadow-lg text-xs font-cinzel tracking-widest text-amber-300 uppercase mb-3`,
              children: [
                (0, A.jsx)(Ne, {
                  className: `w-3.5 h-3.5 text-amber-400 animate-sparkle`,
                }),
                (0, A.jsx)(`span`, { children: `3D Royal Gateway Reveal` }),
                (0, A.jsx)(Ne, {
                  className: `w-3.5 h-3.5 text-amber-400 animate-sparkle`,
                }),
              ],
            }),
            (0, A.jsx)(`h2`, {
              className: `font-title text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-amber-200 to-yellow-400 font-bold tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]`,
              children: `The Heart of Our Love`,
            }),
            (0, A.jsx)(`p`, {
              className: `mt-2 text-xs sm:text-sm text-amber-100/90 font-montserrat max-w-lg mx-auto leading-relaxed`,
              children: `Unlock the grand 3D palace doors to unveil the cherished moments of Kunal & Sania celebrating love amidst roses, candlelight, and soulful music.`,
            }),
            (0, A.jsxs)(`div`, {
              className: `mt-4 inline-flex items-center gap-3 bg-black/60 backdrop-blur-md border border-amber-500/40 px-4 py-1.5 rounded-full text-xs text-amber-200 shadow-md`,
              children: [
                (0, A.jsxs)(`div`, {
                  className: `flex items-center gap-1.5`,
                  children: [
                    (0, A.jsx)(Te, {
                      className: `w-3.5 h-3.5 text-rose-400 ${i ? `animate-bounce` : ``}`,
                    }),
                    (0, A.jsx)(`span`, {
                      className: `font-cinzel text-[11px] font-semibold`,
                      children: i
                        ? `Playing: Tere Naal Pyaar 🎵`
                        : `Soundtrack: Kunal & Sania Love Song`,
                    }),
                  ],
                }),
                (0, A.jsx)(`button`, {
                  type: `button`,
                  onClick: l,
                  className: `p-1 rounded-full transition-colors cursor-pointer ${i ? `bg-amber-500 text-neutral-950` : `bg-neutral-800 text-neutral-300 hover:text-white`}`,
                  title: i ? `Pause Song` : `Play Romantic Song`,
                  children: i
                    ? (0, A.jsx)(Ie, { className: `w-3.5 h-3.5` })
                    : (0, A.jsx)(Le, { className: `w-3.5 h-3.5` }),
                }),
              ],
            }),
          ],
        }),
        (0, A.jsx)(`div`, {
          className: `relative z-20 w-full max-w-[360px] sm:max-w-[420px] md:max-w-[460px] aspect-[9/13] perspective-1000 p-2 sm:p-3 rounded-3xl bg-gradient-to-b from-[#D4AF37] via-[#850B1B] to-[#450A0A] shadow-[0_0_60px_rgba(212,175,55,0.45)] border-2 border-amber-300`,
          children: (0, A.jsxs)(`div`, {
            className: `relative w-full h-full rounded-2xl overflow-hidden bg-neutral-950 shadow-inner preserve-3d`,
            children: [
              (0, A.jsxs)(`div`, {
                className: `absolute inset-0 z-0`,
                children: [
                  (0, A.jsx)(`img`, {
                    src: o,
                    alt: `Kunal & Sania Heart of Roses Celebration`,
                    className: `w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.05]`,
                  }),
                  (0, A.jsxs)(`div`, {
                    className: `absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none flex flex-col justify-between p-4 sm:p-5`,
                    children: [
                      (0, A.jsxs)(`div`, {
                        className: `flex items-center justify-between`,
                        children: [
                          (0, A.jsx)(`span`, {
                            className: `bg-[#850B1B]/90 backdrop-blur-md text-amber-200 text-[10px] font-cinzel font-bold px-3 py-1 rounded-full border border-amber-400/50 uppercase tracking-wider`,
                            children: `✦ Heart of Roses`,
                          }),
                          (0, A.jsxs)(`span`, {
                            className: `bg-black/60 text-rose-300 text-[10px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1`,
                            children: [
                              (0, A.jsx)(xe, {
                                className: `w-2.5 h-2.5 fill-rose-500 text-rose-500`,
                              }),
                              ` Kunal & Sania`,
                            ],
                          }),
                        ],
                      }),
                      (0, A.jsxs)(`div`, {
                        className: `text-center`,
                        children: [
                          (0, A.jsxs)(`div`, {
                            className: `mb-1 text-[11px] font-serif font-bold text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.9)]`,
                            children: [
                              `With Blessings: Late Sh PL Makkar `,
                              (0, A.jsx)(`span`, { className: `text-red-400 font-script`, children: `&` }),
                              ` Late Sh AK Bhatia`,
                            ],
                          }),
                          (0, A.jsx)(`p`, {
                            className: `font-playfair text-lg sm:text-xl font-bold text-amber-200 drop-shadow-md`,
                            children: `A Love to Last a Lifetime`,
                          }),
                          (0, A.jsx)(`p`, {
                            className: `text-[11px] sm:text-xs text-amber-100/90 font-montserrat mt-0.5`,
                            children: `LeafyLush Resort & Spa, Jim Corbett`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, A.jsx)(hd.div, {
                initial: !1,
                animate: { rotateY: n ? -115 : 0 },
                transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] },
                style: { transformOrigin: `left center` },
                className: `absolute top-0 left-0 w-1/2 h-full z-20 origin-left preserve-3d cursor-pointer shadow-[10px_0_25px_rgba(0,0,0,0.85)]`,
                onClick: c,
                children: (0, A.jsxs)(`div`, {
                  className: `relative w-full h-full bg-gradient-to-r from-[#3B0715] via-[#52091D] to-[#2D0A0F] border-r border-amber-400/70 p-3 flex flex-col justify-between overflow-hidden`,
                  children: [
                    (0, A.jsx)(`div`, {
                      className: `absolute inset-1.5 border-2 border-amber-400/60 rounded-l-xl pointer-events-none`,
                    }),
                    (0, A.jsx)(`div`, {
                      className: `absolute inset-3 border border-amber-300/30 rounded-l-lg pointer-events-none`,
                    }),
                    (0, A.jsx)(`div`, {
                      className: `relative z-10 flex items-center justify-start text-[10px] font-cinzel text-amber-300 uppercase tracking-wider pt-2`,
                      children: (0, A.jsx)(`span`, {
                        children: `✦ PALACE GATE`,
                      }),
                    }),
                    (0, A.jsx)(`div`, {
                      className: `relative z-10 flex flex-col items-end pr-2`,
                      children: (0, A.jsx)(`div`, {
                        className: `w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-600 flex items-center justify-center text-red-950 font-bold shadow-lg border border-amber-200`,
                        children: (0, A.jsx)(`span`, {
                          className: `text-xs`,
                          children: `⚜`,
                        }),
                      }),
                    }),
                    (0, A.jsx)(`div`, {
                      className: `relative z-10 text-[9px] font-cinzel text-amber-200/80 pb-2`,
                      children: (0, A.jsx)(`span`, {
                        children: `॥ मङ्गलम् ॥`,
                      }),
                    }),
                  ],
                }),
              }),
              (0, A.jsx)(hd.div, {
                initial: !1,
                animate: { rotateY: n ? 115 : 0 },
                transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] },
                style: { transformOrigin: `right center` },
                className: `absolute top-0 right-0 w-1/2 h-full z-20 origin-right preserve-3d cursor-pointer shadow-[-10px_0_25px_rgba(0,0,0,0.85)]`,
                onClick: c,
                children: (0, A.jsxs)(`div`, {
                  className: `relative w-full h-full bg-gradient-to-l from-[#3B0715] via-[#52091D] to-[#2D0A0F] border-l border-amber-400/70 p-3 flex flex-col justify-between overflow-hidden`,
                  children: [
                    (0, A.jsx)(`div`, {
                      className: `absolute inset-1.5 border-2 border-amber-400/60 rounded-r-xl pointer-events-none`,
                    }),
                    (0, A.jsx)(`div`, {
                      className: `absolute inset-3 border border-amber-300/30 rounded-r-lg pointer-events-none`,
                    }),
                    (0, A.jsx)(`div`, {
                      className: `relative z-10 flex items-center justify-end text-[10px] font-cinzel text-amber-300 uppercase tracking-wider pt-2`,
                      children: (0, A.jsx)(`span`, {
                        children: `ROYAL REVEAL ✦`,
                      }),
                    }),
                    (0, A.jsx)(`div`, {
                      className: `relative z-10 flex flex-col items-start pl-2`,
                      children: (0, A.jsx)(`div`, {
                        className: `w-8 h-8 rounded-full bg-gradient-to-bl from-amber-300 via-yellow-400 to-amber-600 flex items-center justify-center text-red-950 font-bold shadow-lg border border-amber-200`,
                        children: (0, A.jsx)(`span`, {
                          className: `text-xs`,
                          children: `⚜`,
                        }),
                      }),
                    }),
                    (0, A.jsx)(`div`, {
                      className: `relative z-10 text-[9px] font-cinzel text-amber-200/80 text-right pb-2`,
                      children: (0, A.jsx)(`span`, {
                        children: `॥ सदा सुहागन ॥`,
                      }),
                    }),
                  ],
                }),
              }),
              !n &&
                (0, A.jsxs)(hd.div, {
                  initial: { scale: 0.9, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center cursor-pointer pointer-events-none`,
                  children: [
                    (0, A.jsx)(`div`, {
                      className: `relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-600 p-1 shadow-[0_0_35px_rgba(245,158,11,0.8)] border-2 border-white animate-aura-glow`,
                      children: (0, A.jsx)(`div`, {
                        className: `w-full h-full rounded-full bg-gradient-to-tr from-[#850B1B] to-[#450A0A] flex flex-col items-center justify-center text-center`,
                        children: (0, A.jsx)(`span`, {
                          className: `font-title text-2xl font-black text-amber-200 tracking-tight`,
                          children: e.monogramText || `KS`,
                        }),
                      }),
                    }),
                    (0, A.jsxs)(`div`, {
                      className: `mt-3 px-3.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-amber-300 text-[10px] font-cinzel font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5 shadow-lg`,
                      children: [
                        (0, A.jsx)(Ce, { className: `w-3 h-3 text-amber-400` }),
                        (0, A.jsx)(`span`, { children: `Tap to Open Gateway` }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        }),
        (0, A.jsxs)(`div`, {
          className: `relative z-10 flex flex-wrap items-center justify-center gap-3 mt-6`,
          children: [
            (0, A.jsxs)(`button`, {
              type: `button`,
              onClick: c,
              className: `px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-600 via-rose-700 to-amber-600 hover:brightness-110 text-white font-cinzel font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 border border-amber-300 cursor-pointer transition-transform active:scale-95`,
              children: [
                n
                  ? (0, A.jsx)(Ce, { className: `w-4 h-4` })
                  : (0, A.jsx)(Se, { className: `w-4 h-4` }),
                (0, A.jsx)(`span`, {
                  children: n
                    ? `Close Palace Gateway`
                    : `Open 3D Gateway & Reveal`,
                }),
              ],
            }),
            (0, A.jsxs)(`button`, {
              type: `button`,
              onClick: t,
              className: `px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-rose-300 font-cinzel font-semibold text-xs uppercase tracking-wider shadow-md flex items-center gap-2 border border-rose-500/40 cursor-pointer transition-transform active:scale-95`,
              children: [
                (0, A.jsx)(xe, {
                  className: `w-4 h-4 fill-rose-500 text-rose-500`,
                }),
                (0, A.jsx)(`span`, { children: `Shower Rose Petals` }),
              ],
            }),
            (0, A.jsxs)(`button`, {
              type: `button`,
              onClick: l,
              className: `px-5 py-2.5 rounded-full font-cinzel font-semibold text-xs uppercase tracking-wider shadow-md flex items-center gap-2 border transition-all cursor-pointer ${i ? `bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 border-amber-200 font-bold` : `bg-neutral-900 text-amber-200 border-amber-500/40 hover:bg-neutral-800`}`,
              children: [
                (0, A.jsx)(Te, {
                  className: `w-4 h-4 ${i ? `animate-spin-slow` : ``}`,
                }),
                (0, A.jsx)(`span`, {
                  children: i ? `Music Playing 🎵` : `Play Background Audio`,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  bd = ({ config: e }) => {
    let [t, n] = (0, b.useState)(!1),
      [r, i] = (0, b.useState)(0),
      [a, o] = (0, b.useState)(!1),
      s = (0, b.useRef)(null),
      c = (0, b.useRef)(0),
      l =
        S.kunalSaniaArtwork ||
        `/assets/aistudio/Gemini_Generated_Image_3jg3413jg3413jg3_670d7826.png`,
      u = (0, b.useCallback)(() => {
        let e = s.current;
        if (!e) return;
        let t = e.getContext(`2d`, { willReadFrequently: !0 });
        if (!t) return;
        let n = e.offsetWidth || 340,
          r = e.offsetHeight || 440;
        ((e.width = n), (e.height = r));
        let i = t.createLinearGradient(0, 0, n, r);
        (i.addColorStop(0, `#7F1D1D`),
          i.addColorStop(0.2, `#D97706`),
          i.addColorStop(0.4, `#FBBF24`),
          i.addColorStop(0.6, `#F59E0B`),
          i.addColorStop(0.8, `#B45309`),
          i.addColorStop(1, `#450A0A`),
          (t.fillStyle = i),
          t.fillRect(0, 0, n, r),
          (t.fillStyle = `rgba(255, 255, 255, 0.45)`));
        for (let e = 0; e < 300; e++) {
          let e = Math.random() * n,
            i = Math.random() * r,
            a = Math.random() * 2 + 0.5;
          (t.beginPath(), t.arc(e, i, a, 0, Math.PI * 2), t.fill());
        }
        ((t.strokeStyle = `rgba(255, 240, 180, 0.85)`),
          (t.lineWidth = 2),
          t.strokeRect(12, 12, n - 24, r - 24),
          (t.strokeStyle = `rgba(212, 175, 55, 0.95)`),
          (t.lineWidth = 1),
          t.strokeRect(16, 16, n - 32, r - 32));
        let a = n / 2,
          o = r / 2;
        (t.save(),
          (t.fillStyle = `rgba(20, 10, 5, 0.75)`),
          t.beginPath(),
          t.arc(a, o, 56, 0, Math.PI * 2),
          t.fill(),
          (t.strokeStyle = `rgba(255, 215, 0, 0.95)`),
          (t.lineWidth = 2),
          t.stroke(),
          (t.fillStyle = `#FFE58F`),
          (t.font = `bold 24px serif`),
          (t.textAlign = `center`),
          (t.textBaseline = `middle`),
          t.fillText(`✨`, a, o - 14),
          (t.font = `bold 11px sans-serif`),
          (t.fillStyle = `#FFFFFF`),
          t.fillText(`SCRATCH TO REVEAL`, a, o + 14),
          (t.font = `9px sans-serif`),
          (t.fillStyle = `#FDE68A`),
          t.fillText(`SACRED HATHLEWA UNION`, a, o + 28),
          t.restore());
      }, []);
    (0, b.useEffect)(() => {
      if (!t) {
        let e = setTimeout(() => {
          u();
        }, 100);
        return () => clearTimeout(e);
      }
    }, [u, t]);
    let d = () => {
        let e = s.current;
        if (!e) return;
        let n = e.getContext(`2d`, { willReadFrequently: !0 });
        if (n)
          try {
            let r = n.getImageData(0, 0, e.width, e.height).data,
              a = 0,
              o = Math.floor(r.length / 128);
            if (o <= 0) return;
            for (let e = 3; e < r.length; e += 128) r[e] === 0 && a++;
            let s = Math.min(100, Math.max(0, Math.round((a / o) * 100)));
            (i(s), s >= 38 && !t && f());
          } catch {}
      },
      f = () => {
        (n(!0),
          i(100),
          ze.playTempleBellSound(),
          ze.playBlessingChime(),
          Ue({
            particleCount: 65,
            spread: 80,
            origin: { y: 0.6 },
            colors: [`#FFD700`, `#F59E0B`, `#E11D48`, `#850B1B`, `#FFFFFF`],
          }));
      },
      p = (e, t) => {
        let n = s.current;
        if (!n) return;
        let r = n.getContext(`2d`, { willReadFrequently: !0 });
        if (!r) return;
        let i = n.getBoundingClientRect(),
          a = e - i.left,
          o = t - i.top;
        ((r.globalCompositeOperation = `destination-out`),
          r.beginPath(),
          r.arc(a, o, 28, 0, Math.PI * 2),
          r.fill());
        let l = Date.now();
        l - c.current > 160 && (ze.playScratchSound(), (c.current = l));
      },
      m = (e) => {
        (o(!0), p(e.clientX, e.clientY));
      },
      h = (e) => {
        a && (p(e.clientX, e.clientY), d());
      },
      g = () => {
        (o(!1), d());
      };
    return (0, A.jsxs)(`section`, {
      id: `scene-scratch-gatefold`,
      className: `relative min-h-screen py-16 px-4 flex flex-col items-center justify-center overflow-hidden bg-neutral-950 text-white select-none`,
      children: [
        (0, A.jsxs)(`div`, {
          className: `absolute inset-0 z-0 overflow-hidden pointer-events-none`,
          children: [
            (0, A.jsx)(`img`, {
              src: S.punjabiEmbrace,
              alt: `Royal Punjabi Hathlewa Atmosphere`,
              className: `w-full h-full object-cover object-center filter brightness-[0.22] contrast-[1.1] scale-105`,
            }),
            (0, A.jsx)(`div`, {
              className: `absolute inset-0 bg-gradient-to-b from-[#850B1B]/75 via-neutral-950/85 to-neutral-950`,
            }),
            (0, A.jsx)(`div`, {
              className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none`,
            }),
          ],
        }),
        (0, A.jsxs)(`div`, {
          className: `relative z-10 text-center max-w-2xl mx-auto mb-8 px-4`,
          children: [
            (0, A.jsxs)(`div`, {
              className: `inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-300/40 shadow-lg text-xs font-cinzel tracking-widest text-amber-300 uppercase mb-3`,
              children: [
                (0, A.jsx)(Ne, {
                  className: `w-3.5 h-3.5 text-amber-400 animate-sparkle`,
                }),
                (0, A.jsx)(`span`, {
                  children: `✨ 3D Macro Ritual Scratch Reveal ✨`,
                }),
                (0, A.jsx)(Ne, {
                  className: `w-3.5 h-3.5 text-amber-400 animate-sparkle`,
                }),
              ],
            }),
            (0, A.jsx)(`h2`, {
              className: `font-title text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-amber-200 to-yellow-400 font-bold tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]`,
              children:
                e.scratchRevealHeading || `3D MACRO RITUAL CLOSE-UP: HATHLEWA`,
            }),
            (0, A.jsx)(`p`, {
              className: `mt-2 text-xs sm:text-sm text-amber-100/90 font-montserrat max-w-lg mx-auto leading-relaxed`,
              children: [
                `Gently scratch to reveal the sacred eternal bond of Kunal & Sania with the blessings of `,
                (0, A.jsx)(`span`, {
                  className: `text-red-500 font-bold drop-shadow-[0_0_8px_rgba(239,68,68,0.7)]`,
                  children: `Late Sh PL Makkar & Late Sh AK Bhatia`,
                }),
                `: red Chooda, bridal Mehendi & diamond ring`,
              ],
            }),
            (0, A.jsx)(`div`, {
              className: `mt-4 flex items-center justify-center gap-3`,
              children: (0, A.jsxs)(`div`, {
                className: `flex items-center gap-2 bg-black/60 px-4 py-1.5 rounded-full border border-amber-500/30 text-xs font-cinzel text-amber-200 shadow-md`,
                children: [
                  (0, A.jsx)(`span`, { children: `Revealed:` }),
                  (0, A.jsxs)(`span`, {
                    className: `font-mono font-bold text-amber-400`,
                    children: [r, `%`],
                  }),
                  (0, A.jsx)(`div`, {
                    className: `w-20 h-2 bg-neutral-800 rounded-full overflow-hidden border border-amber-400/30`,
                    children: (0, A.jsx)(`div`, {
                      className: `h-full bg-gradient-to-r from-amber-500 to-rose-500 transition-all duration-300`,
                      style: { width: `${r}%` },
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
        (0, A.jsx)(`div`, {
          className: `relative z-10 w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-[9/16] rounded-2xl p-2.5 bg-gradient-to-b from-[#FBBF24] via-[#D4AF37] to-[#850B1B] shadow-[0_0_50px_rgba(212,175,55,0.45)] border-2 border-amber-300/80`,
          children: (0, A.jsxs)(`div`, {
            className: `relative w-full h-full rounded-xl overflow-hidden bg-[#FAF5EC] shadow-inner`,
            children: [
              (0, A.jsx)(`div`, {
                className: `absolute inset-0`,
                children: (0, A.jsx)(`img`, {
                  src: l,
                  alt: `Sacred Hathlewa & Eternal Blessings of Kunal & Sania`,
                  className: `w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.04]`,
                }),
              }),
              !t &&
                (0, A.jsx)(`canvas`, {
                  ref: s,
                  onMouseDown: m,
                  onMouseMove: h,
                  onMouseUp: g,
                  onMouseLeave: g,
                  onTouchStart: (e) => {
                    o(!0);
                    let t = e.touches[0];
                    t && p(t.clientX, t.clientY);
                  },
                  onTouchMove: (e) => {
                    if (a) {
                      let t = e.touches[0];
                      t && (p(t.clientX, t.clientY), d());
                    }
                  },
                  onTouchEnd: () => {
                    (o(!1), d());
                  },
                  className: `absolute inset-0 w-full h-full cursor-crosshair touch-none transition-opacity duration-500`,
                }),
              t &&
                (0, A.jsxs)(`div`, {
                  className: `absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-emerald-950/90 border border-emerald-400 text-emerald-300 text-xs font-cinzel px-3 py-1 rounded-full shadow-lg animate-bounce`,
                  children: [
                    (0, A.jsx)(_e, {
                      className: `w-3.5 h-3.5 text-emerald-400`,
                    }),
                    (0, A.jsx)(`span`, { children: `Ritual Revealed!` }),
                  ],
                }),
            ],
          }),
        }),
        (0, A.jsx)(`div`, {
          className: `relative z-10 flex items-center gap-3 mt-6`,
          children: t
            ? (0, A.jsxs)(`button`, {
                type: `button`,
                onClick: () => {
                  (n(!1),
                    i(0),
                    setTimeout(() => {
                      u();
                    }, 60));
                },
                className: `px-5 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-amber-300 font-cinzel font-semibold text-xs uppercase tracking-wider shadow-md flex items-center gap-2 cursor-pointer transition-transform active:scale-95 border border-amber-500/40`,
                children: [
                  (0, A.jsx)(Oe, { className: `w-4 h-4` }),
                  `Scratch Again`,
                ],
              })
            : (0, A.jsxs)(`button`, {
                type: `button`,
                onClick: f,
                className: `px-5 py-2 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 hover:brightness-110 text-neutral-950 font-cinzel font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 cursor-pointer transition-transform active:scale-95 border border-amber-300`,
                children: [
                  (0, A.jsx)(be, { className: `w-4 h-4` }),
                  `Auto Reveal Ritual`,
                ],
              }),
        }),
      ],
    });
  },
  xd = ({ config: e, onTriggerPetalShower: t }) => {
    let n = e.events || [],
      [r, i] = (0, b.useState)(n[0]?.id || `e-pj-1`),
      [a, o] = (0, b.useState)(() => {
        let e = {};
        return (
          n.forEach((t, n) => {
            let r = localStorage.getItem(`wedding_blessings_${t.id}`);
            r
              ? (e[t.id] = parseInt(r, 10))
              : (e[t.id] = t.blessingCount || 150 + n * 60);
          }),
          e
        );
      }),
      [s, c] = (0, b.useState)({}),
      l = (e, t) => {
        (t.stopPropagation(),
          ze.playCardFlipSound(),
          c((t) => ({ ...t, [e]: !t[e] })));
      },
      u = (e, n) => {
        n.stopPropagation();
        let r = (a[e.id] || 100) + 1;
        (o((t) => ({ ...t, [e.id]: r })),
          localStorage.setItem(`wedding_blessings_${e.id}`, r.toString()),
          ze.playBlessingChime(),
          t());
      },
      d = (t, n) => {
        n.stopPropagation();
        let r = encodeURIComponent(
            `${t.title} - Wedding of ${e.groomName} & ${e.brideName}`,
          ),
          i = encodeURIComponent(
            `${t.description}\nDress Code: ${t.dressCode || `Traditional Festive`}\nVenue: ${t.venue}\nCouple: ${e.groomName} & ${e.brideName}`,
          ),
          a = encodeURIComponent(`${t.venue}, ${e.venueCity}`),
          o = e.weddingDate.replace(/-/g, ``),
          s = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${r}&details=${i}&location=${a}&dates=${o}T100000Z/${o}T230000Z`;
        window.open(s, `_blank`);
      },
      f = (e) => {
        i(e);
        let t = document.getElementById(`ceremony-card-${e}`);
        t && t.scrollIntoView({ behavior: `smooth`, block: `center` });
      };
    return (0, A.jsxs)(`div`, {
      id: `scene-functions-3d-wrapper`,
      className: `relative w-full text-white bg-neutral-950 py-12`,
      children: [
        (0, A.jsxs)(`div`, {
          className: `sticky top-0 z-40 w-full bg-neutral-950/90 backdrop-blur-md border-y border-amber-500/30 px-3 py-2 flex items-center justify-between shadow-2xl`,
          children: [
            (0, A.jsxs)(`div`, {
              className: `flex items-center gap-1.5 shrink-0 pr-3`,
              children: [
                (0, A.jsx)(Ne, {
                  className: `w-3.5 h-3.5 text-amber-400 animate-sparkle`,
                }),
                (0, A.jsx)(`span`, {
                  className: `font-cinzel text-xs font-bold text-amber-200 uppercase tracking-widest hidden sm:inline`,
                  children: `3D Ceremonies:`,
                }),
              ],
            }),
            (0, A.jsx)(`div`, {
              className: `flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5`,
              children: n.map((e) =>
                (0, A.jsx)(
                  `button`,
                  {
                    type: `button`,
                    onClick: () => f(e.id),
                    className: `px-3 py-1 rounded-full text-xs font-cinzel whitespace-nowrap transition-all cursor-pointer ${r === e.id ? `bg-gradient-to-r from-amber-600 to-rose-700 text-white font-bold border border-amber-300 shadow-md scale-105` : `bg-neutral-900/80 text-neutral-300 hover:bg-neutral-800 border border-neutral-700`}`,
                    children: e.title.split(` `)[0],
                  },
                  e.id,
                ),
              ),
            }),
          ],
        }),
        (0, A.jsxs)(`div`, {
          className: `text-center max-w-2xl mx-auto my-8 px-4`,
          children: [
            (0, A.jsxs)(`div`, {
              className: `inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#850B1B]/80 border border-amber-400/50 text-amber-200 text-xs font-cinzel tracking-widest uppercase mb-2`,
              children: [
                (0, A.jsx)(Ne, {
                  className: `w-3.5 h-3.5 text-amber-300 animate-sparkle`,
                }),
                (0, A.jsx)(`span`, {
                  children: `Auspicious Itinerary & Timeline`,
                }),
                (0, A.jsx)(Ne, {
                  className: `w-3.5 h-3.5 text-amber-300 animate-sparkle`,
                }),
              ],
            }),
            (0, A.jsx)(`h2`, {
              className: `font-title text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-100`,
              children: `Wedding Ceremonies`,
            }),
            (0, A.jsx)(`p`, {
              className: `text-xs sm:text-sm text-neutral-300 font-montserrat mt-1`,
              children: `Join us as we embark on our lifelong journey of love, joy, and sacred vows in Amritsar.`,
            }),
          ],
        }),
        (0, A.jsx)(`div`, {
          className: `max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8`,
          children: n.map((e) => {
            let t = s[e.id] || !1;
            return (0, A.jsx)(
              `div`,
              {
                id: `ceremony-card-${e.id}`,
                className: `relative rounded-2xl p-1 bg-gradient-to-b from-amber-400/60 via-amber-600/30 to-[#850B1B] shadow-[0_15px_35px_rgba(0,0,0,0.85)] border border-amber-400/40 transition-transform duration-300 hover:scale-[1.01]`,
                children: (0, A.jsx)(`div`, {
                  className: `relative rounded-xl overflow-hidden bg-neutral-900/95 p-5 flex flex-col justify-between min-h-[460px]`,
                  children: t
                    ? (0, A.jsxs)(`div`, {
                        className: `flex flex-col h-full justify-between`,
                        children: [
                          (0, A.jsxs)(`div`, {
                            children: [
                              (0, A.jsxs)(`div`, {
                                className: `flex items-center justify-between border-b border-amber-500/30 pb-3 mb-4`,
                                children: [
                                  (0, A.jsxs)(`div`, {
                                    children: [
                                      (0, A.jsx)(`span`, {
                                        className: `text-[10px] font-cinzel uppercase text-amber-400 font-bold tracking-widest`,
                                        children: `Ritual Flow`,
                                      }),
                                      (0, A.jsx)(`h4`, {
                                        className: `font-title text-lg font-bold text-amber-200`,
                                        children: e.title,
                                      }),
                                    ],
                                  }),
                                  (0, A.jsx)(`button`, {
                                    type: `button`,
                                    onClick: (t) => l(e.id, t),
                                    className: `p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-amber-300 border border-amber-500/30 cursor-pointer`,
                                    children: (0, A.jsx)(k, {
                                      className: `w-4 h-4`,
                                    }),
                                  }),
                                ],
                              }),
                              (0, A.jsxs)(`div`, {
                                className: `space-y-2.5`,
                                children: [
                                  (0, A.jsx)(`p`, {
                                    className: `text-xs text-neutral-300 font-montserrat`,
                                    children: `Traditional sequence & festive rituals for this auspicious gathering:`,
                                  }),
                                  e.rituals && e.rituals.length > 0
                                    ? (0, A.jsx)(`div`, {
                                        className: `space-y-2 mt-3`,
                                        children: e.rituals.map((e, t) =>
                                          (0, A.jsxs)(
                                            `div`,
                                            {
                                              className: `flex items-center gap-2 p-2 rounded-lg bg-black/50 border border-amber-500/20 text-xs text-amber-100 font-montserrat`,
                                              children: [
                                                (0, A.jsx)(`span`, {
                                                  className: `w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-[10px] shrink-0`,
                                                  children: t + 1,
                                                }),
                                                (0, A.jsx)(`span`, {
                                                  children: e,
                                                }),
                                              ],
                                            },
                                            t,
                                          ),
                                        ),
                                      })
                                    : (0, A.jsx)(`div`, {
                                        className: `p-3 bg-neutral-900 rounded-lg text-xs text-neutral-400`,
                                        children: `Traditional Punjabi customs with live Shehnai, Dhol beats, and blessings.`,
                                      }),
                                ],
                              }),
                            ],
                          }),
                          (0, A.jsx)(`div`, {
                            className: `mt-5 pt-3 border-t border-white/10 flex justify-end`,
                            children: (0, A.jsx)(`button`, {
                              type: `button`,
                              onClick: (t) => l(e.id, t),
                              className: `px-4 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-cinzel font-semibold border border-amber-400/40 cursor-pointer`,
                              children: `Back to Overview`,
                            }),
                          }),
                        ],
                      })
                    : (0, A.jsxs)(`div`, {
                        className: `flex flex-col h-full justify-between`,
                        children: [
                          (0, A.jsxs)(`div`, {
                            children: [
                              e.photoUrl &&
                                (0, A.jsxs)(`div`, {
                                  className: `relative w-full h-44 rounded-lg overflow-hidden mb-4 border border-amber-400/40 shadow-inner group`,
                                  children: [
                                    (0, A.jsx)(`img`, {
                                      src: e.photoUrl,
                                      alt: e.title,
                                      className: `w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500`,
                                    }),
                                    (0, A.jsx)(`div`, {
                                      className: `absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20`,
                                    }),
                                    (0, A.jsx)(`div`, {
                                      className: `absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-mono text-amber-300 border border-amber-400/40`,
                                      children: e.date,
                                    }),
                                    (0, A.jsxs)(`div`, {
                                      className: `absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs`,
                                      children: [
                                        (0, A.jsx)(`span`, {
                                          className: `font-cinzel text-amber-200 font-bold drop-shadow-md`,
                                          children: e.time,
                                        }),
                                        (0, A.jsx)(`span`, {
                                          className: `font-montserrat text-neutral-300 text-[11px] truncate max-w-[180px]`,
                                          children: e.venue,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              (0, A.jsxs)(`div`, {
                                className: `flex items-start justify-between gap-2`,
                                children: [
                                  (0, A.jsxs)(`div`, {
                                    children: [
                                      (0, A.jsx)(`h3`, {
                                        className: `font-title text-xl font-bold text-amber-300 leading-tight`,
                                        children: e.title,
                                      }),
                                      (0, A.jsxs)(`div`, {
                                        className: `flex items-center gap-1.5 text-xs text-neutral-400 mt-1`,
                                        children: [
                                          (0, A.jsx)(ve, {
                                            className: `w-3.5 h-3.5 text-amber-400`,
                                          }),
                                          (0, A.jsx)(`span`, {
                                            children: e.time,
                                          }),
                                          (0, A.jsx)(`span`, { children: `•` }),
                                          (0, A.jsx)(D, {
                                            className: `w-3.5 h-3.5 text-amber-400`,
                                          }),
                                          (0, A.jsx)(`span`, {
                                            className: `truncate max-w-[150px]`,
                                            children: e.venue,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, A.jsx)(`button`, {
                                    type: `button`,
                                    onClick: (t) => l(e.id, t),
                                    title: `View Rituals Breakdown`,
                                    className: `p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-amber-300 border border-amber-500/30 transition-transform active:rotate-180 cursor-pointer`,
                                    children: (0, A.jsx)(k, {
                                      className: `w-4 h-4`,
                                    }),
                                  }),
                                ],
                              }),
                              (0, A.jsx)(`p`, {
                                className: `text-xs text-neutral-300 mt-3 leading-relaxed font-montserrat`,
                                children: e.description,
                              }),
                              e.dressCode &&
                                (0, A.jsxs)(`div`, {
                                  className: `mt-4 p-2.5 rounded-xl bg-amber-950/40 border border-amber-400/30 flex items-center justify-between text-xs`,
                                  children: [
                                    (0, A.jsxs)(`div`, {
                                      className: `flex items-center gap-2`,
                                      children: [
                                        (0, A.jsx)(je, {
                                          className: `w-3.5 h-3.5 text-amber-400`,
                                        }),
                                        (0, A.jsx)(`span`, {
                                          className: `text-amber-300 font-cinzel font-bold text-[10px] uppercase tracking-wider`,
                                          children: `Attire:`,
                                        }),
                                        (0, A.jsx)(`span`, {
                                          className: `font-montserrat text-neutral-200 text-[11px] truncate`,
                                          children: e.dressCode,
                                        }),
                                      ],
                                    }),
                                    e.attireColors &&
                                      e.attireColors.length > 0 &&
                                      (0, A.jsx)(`div`, {
                                        className: `flex items-center gap-1`,
                                        children: e.attireColors.map((e, t) =>
                                          (0, A.jsx)(
                                            `span`,
                                            {
                                              className: `w-3.5 h-3.5 rounded-full border border-white/60 shadow-xs`,
                                              style: { backgroundColor: e },
                                              title: e,
                                            },
                                            t,
                                          ),
                                        ),
                                      }),
                                  ],
                                }),
                            ],
                          }),
                          (0, A.jsxs)(`div`, {
                            className: `mt-5 pt-3 border-t border-white/10 flex items-center justify-between gap-3`,
                            children: [
                              (0, A.jsxs)(`button`, {
                                type: `button`,
                                onClick: (t) => u(e, t),
                                className: `flex-1 py-2 rounded-xl bg-gradient-to-r from-amber-600 via-rose-700 to-amber-700 hover:brightness-110 text-white text-xs font-cinzel font-bold flex items-center justify-center gap-2 shadow-md border border-amber-300/40 transition-transform active:scale-95 cursor-pointer`,
                                children: [
                                  (0, A.jsx)(xe, {
                                    className: `w-3.5 h-3.5 text-rose-300 fill-rose-300 animate-pulse`,
                                  }),
                                  (0, A.jsx)(`span`, {
                                    children: `Bless Ceremony`,
                                  }),
                                  (0, A.jsx)(`span`, {
                                    className: `bg-black/40 px-2 py-0.5 rounded-full text-[10px] font-mono text-amber-200`,
                                    children: a[e.id],
                                  }),
                                ],
                              }),
                              (0, A.jsxs)(`button`, {
                                type: `button`,
                                onClick: (t) => d(e, t),
                                title: `Add to Google Calendar`,
                                className: `px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-amber-300 text-xs font-cinzel font-medium flex items-center gap-1.5 border border-amber-500/30 transition-transform active:scale-95 cursor-pointer`,
                                children: [
                                  (0, A.jsx)(de, { className: `w-3.5 h-3.5` }),
                                  (0, A.jsx)(`span`, {
                                    className: `hidden sm:inline`,
                                    children: `Add to Cal`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                }),
              },
              e.id,
            );
          }),
        }),
      ],
    });
  },
  Sd = ({ size: e, color: t, rotation: n }) =>
    (0, A.jsxs)(`svg`, {
      width: e,
      height: e,
      viewBox: `0 0 30 30`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: { transform: `rotate(${n}deg)` },
      className: `drop-shadow-[0_2px_4px_rgba(244,114,182,0.35)]`,
      children: [
        (0, A.jsx)(`path`, {
          d: `M15 2C15 2 24 6 26 14C28 22 21 28 15 28C9 28 2 22 4 14C6 6 15 2 15 2Z`,
          fill: t,
          opacity: `0.85`,
        }),
        (0, A.jsx)(`path`, {
          d: `M15 6C15 6 21 9 22 15C23 20 18 24 15 25C12 24 7 20 8 15C9 9 15 6 15 6Z`,
          fill: `#FFF0F5`,
          opacity: `0.3`,
        }),
      ],
    }),
  Cd = ({ photos: e, config: t }) => {
    let [n, r] = (0, b.useState)(null),
      i = (e) => {
        r(e);
      },
      a = () => {
        r(null);
      },
      o = (t) => {
        (t && t.stopPropagation(), n !== null && r((n + 1) % e.length));
      },
      s = (t) => {
        (t && t.stopPropagation(),
          n !== null && r((n - 1 + e.length) % e.length));
      };
    b.useEffect(() => {
      if (n === null) return;
      let e = (e) => {
        (e.key === `Escape` && a(),
          e.key === `ArrowRight` && o(),
          e.key === `ArrowLeft` && s());
      };
      return (
        window.addEventListener(`keydown`, e),
        () => window.removeEventListener(`keydown`, e)
      );
    }, [n, e.length]);
    let c = (0, b.useMemo)(() => {
      let e = [
        `#FFB6C1`,
        `#FFC0CB`,
        `#FDA4AF`,
        `#F472B6`,
        `#FB7185`,
        `#FBCFE8`,
        `#FFE4E6`,
      ];
      return Array.from({ length: 26 }).map((t, n) => ({
        id: n,
        left: Math.round(((n * 3.8 + 2) % 96) * 10) / 10,
        size: 14 + (n % 5) * 4,
        duration: 7 + (n % 7) * 1.5,
        delay: -((n * 1.7) % 12),
        color: e[n % e.length],
        initialRotation: (n * 37) % 360,
      }));
    }, []);
    return (0, A.jsxs)(`section`, {
      className: `relative w-full py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#FFF2F6] via-[#FFE4EE] to-[#FFD8E6] text-neutral-800 overflow-hidden`,
      children: [
        (0, A.jsx)(`div`, {
          className: `absolute inset-0 pointer-events-none overflow-hidden z-0`,
          "aria-hidden": `true`,
          children: c.map((e) =>
            (0, A.jsx)(
              `div`,
              {
                className: `absolute -top-12 animate-falling-petal pointer-events-none`,
                style: {
                  left: `${e.left}%`,
                  animationDuration: `${e.duration}s`,
                  animationDelay: `${e.delay}s`,
                },
                children: (0, A.jsx)(Sd, {
                  size: e.size,
                  color: e.color,
                  rotation: e.initialRotation,
                }),
              },
              e.id,
            ),
          ),
        }),
        (0, A.jsx)(`div`, {
          className: `absolute top-10 left-1/3 -translate-x-1/2 w-80 h-80 bg-pink-300/35 rounded-full blur-[90px] pointer-events-none`,
        }),
        (0, A.jsx)(`div`, {
          className: `absolute bottom-16 right-1/4 translate-x-1/2 w-96 h-96 bg-rose-300/25 rounded-full blur-[110px] pointer-events-none`,
        }),
        (0, A.jsx)(`div`, {
          className: `absolute top-1/2 right-10 w-72 h-72 bg-amber-200/20 rounded-full blur-[100px] pointer-events-none`,
        }),
        (0, A.jsxs)(`div`, {
          className: `relative z-10 text-center max-w-2xl mx-auto mb-12 sm:mb-14`,
          children: [
            (0, A.jsxs)(`div`, {
              className: `inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-pink-300/90 text-rose-600 text-xs font-cinzel tracking-widest uppercase mb-3 shadow-[0_4px_16px_rgba(244,114,182,0.25)] backdrop-blur-md`,
              children: [
                (0, A.jsx)(xe, {
                  className: `w-3.5 h-3.5 text-rose-500 fill-rose-400 animate-pulse`,
                }),
                (0, A.jsx)(`span`, { children: `Sweet Moments & Romance` }),
                (0, A.jsx)(Ne, {
                  className: `w-3.5 h-3.5 text-pink-500 animate-sparkle`,
                }),
              ],
            }),
            (0, A.jsx)(`h2`, {
              className: `font-title text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-pink-600 to-rose-600 drop-shadow-xs tracking-tight`,
              children: `The Wedding Album`,
            }),
            (0, A.jsxs)(`div`, {
              className: `flex items-center justify-center gap-3 my-3`,
              children: [
                (0, A.jsx)(`div`, {
                  className: `h-[1.5px] w-14 bg-gradient-to-r from-transparent to-pink-400/80`,
                }),
                (0, A.jsx)(xe, {
                  className: `w-3.5 h-3.5 text-rose-500 fill-rose-400`,
                }),
                (0, A.jsx)(`div`, {
                  className: `h-[1.5px] w-14 bg-gradient-to-l from-transparent to-pink-400/80`,
                }),
              ],
            }),
            (0, A.jsxs)(`p`, {
              className: `text-xs sm:text-sm text-rose-900/85 font-montserrat max-w-xl mx-auto leading-relaxed`,
              children: [
                `Every moment with you is a cherished memory. Celebrating the sweet romance and joyful togetherness of `,
                t.groomName,
                ` & `,
                t.brideName,
                `.`,
              ],
            }),
          ],
        }),
        (0, A.jsx)(`div`, {
          className: `relative z-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6`,
          children: e.map((e, t) =>
            (0, A.jsx)(
              `div`,
              {
                onClick: () => i(t),
                className: `group relative bg-white/85 p-2 sm:p-2.5 rounded-3xl border border-pink-200/90 shadow-[0_8px_25px_rgba(244,114,182,0.2)] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-[0_16px_40px_rgba(244,63,94,0.28)]`,
                children: (0, A.jsxs)(`div`, {
                  className: `relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-pink-100/50`,
                  children: [
                    (0, A.jsx)(`img`, {
                      src: e.url,
                      alt: `Wedding Moment ${t + 1}`,
                      className: `w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out`,
                      loading: `lazy`,
                    }),
                    (0, A.jsx)(`div`, {
                      className: `absolute inset-0 bg-gradient-to-t from-rose-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`,
                    }),
                    (0, A.jsx)(`div`, {
                      className: `absolute bottom-3 right-3 sm:bottom-3.5 sm:right-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0`,
                      children: (0, A.jsx)(`div`, {
                        className: `w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 backdrop-blur-md border border-pink-300 flex items-center justify-center text-rose-600 shadow-md`,
                        children: (0, A.jsx)(O, { className: `w-4 h-4` }),
                      }),
                    }),
                  ],
                }),
              },
              e.id || t,
            ),
          ),
        }),
        n !== null &&
          (0, A.jsxs)(`div`, {
            onClick: a,
            className: `fixed inset-0 z-50 bg-[#16030B]/95 backdrop-blur-xl flex items-center justify-center p-4 select-none animate-in fade-in duration-200`,
            children: [
              (0, A.jsx)(`button`, {
                onClick: a,
                className: `absolute top-5 right-5 p-2.5 rounded-full bg-rose-950/70 hover:bg-rose-900 border border-rose-400/40 text-rose-200 transition-colors cursor-pointer z-50 shadow-md`,
                title: `Close`,
                children: (0, A.jsx)(Re, { className: `w-6 h-6` }),
              }),
              (0, A.jsx)(`button`, {
                onClick: s,
                className: `absolute left-4 p-3 rounded-full bg-rose-950/80 hover:bg-rose-900 text-rose-200 border border-rose-400/40 transition-transform active:scale-95 cursor-pointer z-50 shadow-lg`,
                title: `Previous`,
                children: (0, A.jsx)(he, { className: `w-6 h-6` }),
              }),
              (0, A.jsxs)(`div`, {
                onClick: (e) => e.stopPropagation(),
                className: `relative max-w-4xl max-h-[88vh] flex flex-col items-center`,
                children: [
                  (0, A.jsx)(`img`, {
                    src: e[n].url,
                    alt: `Photo ${n + 1}`,
                    className: `max-w-full max-h-[80vh] object-contain rounded-2xl border border-pink-400/50 shadow-[0_0_50px_rgba(244,114,182,0.35)]`,
                  }),
                  (0, A.jsxs)(`div`, {
                    className: `mt-3.5 flex items-center gap-2 text-xs text-rose-200/90 font-cinzel tracking-wider`,
                    children: [
                      (0, A.jsx)(xe, {
                        className: `w-3.5 h-3.5 text-pink-400 fill-pink-400`,
                      }),
                      (0, A.jsxs)(`span`, {
                        children: [n + 1, ` of `, e.length],
                      }),
                      (0, A.jsx)(xe, {
                        className: `w-3.5 h-3.5 text-pink-400 fill-pink-400`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, A.jsx)(`button`, {
                onClick: o,
                className: `absolute right-4 p-3 rounded-full bg-rose-950/80 hover:bg-rose-900 text-rose-200 border border-rose-400/40 transition-transform active:scale-95 cursor-pointer z-50 shadow-lg`,
                title: `Next`,
                children: (0, A.jsx)(ge, { className: `w-6 h-6` }),
              }),
            ],
          }),
      ],
    });
  },
  wd = ({ config: e }) => {
    let t = (0, b.useRef)(null);
    return (
      (0, b.useEffect)(() => {
        let e = t.current;
        if (!e) return;
        let n = e.getContext(`2d`);
        if (!n) return;
        let r = (e.width = e.offsetWidth || 400),
          i = (e.height = e.offsetHeight || 600),
          a = Array.from({ length: 45 }, () => ({
            x: Math.random() * r,
            y: i * 0.7 * Math.random(),
            radius: Math.random() * 1.8 + 0.5,
            alpha: Math.random(),
            speed: Math.random() * 0.03 + 0.01,
          })),
          o,
          s = () => {
            (n.clearRect(0, 0, r, i),
              a.forEach((e) => {
                e.alpha += e.speed;
                let t = Math.abs(Math.sin(e.alpha));
                (n.beginPath(),
                  n.arc(e.x, e.y, e.radius, 0, Math.PI * 2),
                  (n.fillStyle = `rgba(255, 235, 160, ${t * 0.85})`),
                  (n.shadowBlur = 4),
                  (n.shadowColor = `#FFD700`),
                  n.fill());
              }),
              (o = requestAnimationFrame(s)));
          };
        return (s(), () => cancelAnimationFrame(o));
      }, []),
      (0, A.jsxs)(`section`, {
        className: `relative w-full min-h-[720px] h-full flex flex-col items-center justify-between overflow-hidden select-none text-white p-4 py-16 bg-[#18040A]`,
        children: [
          (0, A.jsxs)(`div`, {
            className: `absolute inset-0 z-0`,
            children: [
              (0, A.jsx)(`img`, {
                src: S.royalVarmala,
                alt: `Taj Swarna Amritsar Grand Destination`,
                className: `w-full h-full object-cover object-center brightness-[0.8] contrast-[1.1] saturate-[1.2]`,
              }),
              (0, A.jsx)(`div`, {
                className: `absolute inset-0`,
                style: {
                  background: `linear-gradient(to bottom, rgba(133, 11, 27, 0.78) 0%, rgba(20, 5, 10, 0.65) 50%, rgba(133, 11, 27, 0.95) 100%)`,
                },
              }),
            ],
          }),
          (0, A.jsx)(`canvas`, {
            ref: t,
            className: `absolute inset-0 pointer-events-none z-10 w-full h-full`,
          }),
          (0, A.jsxs)(`div`, {
            className: `relative z-20 w-full flex flex-col items-center pt-4 text-center`,
            children: [
              (0, A.jsx)(`div`, {
                className: `px-6 py-2 rounded-full backdrop-blur-md border border-amber-400/60 shadow-[0_0_25px_rgba(255,215,0,0.4)] mb-3 bg-[#18040A]/80`,
                children: (0, A.jsxs)(`span`, {
                  className: `text-amber-300 font-cinzel text-xs font-bold tracking-widest uppercase flex items-center gap-2`,
                  children: [
                    (0, A.jsx)(Ne, {
                      className: `w-3.5 h-3.5 text-amber-400 animate-sparkle`,
                    }),
                    `The Wedding Destination & Travel Guide`,
                    (0, A.jsx)(Ne, {
                      className: `w-3.5 h-3.5 text-amber-400 animate-sparkle`,
                    }),
                  ],
                }),
              }),
              (0, A.jsx)(`h2`, {
                className: `font-title text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-100 to-yellow-300`,
                children: e.venueName,
              }),
              (0, A.jsx)(`p`, {
                className: `text-sm font-montserrat text-amber-200 font-medium mt-1`,
                children: e.venueCity,
              }),
            ],
          }),
          (0, A.jsxs)(`div`, {
            className: `relative z-20 w-full max-w-xl mx-auto my-6 p-6 rounded-2xl bg-black/75 backdrop-blur-md border border-amber-400/50 shadow-2xl text-center`,
            children: [
              (0, A.jsxs)(`div`, {
                className: `flex items-center justify-center gap-2 text-amber-300 mb-2`,
                children: [
                  (0, A.jsx)(D, { className: `w-5 h-5 text-rose-400` }),
                  (0, A.jsx)(`span`, {
                    className: `font-cinzel text-xs uppercase font-bold tracking-wider`,
                    children: `Official Address`,
                  }),
                ],
              }),
              (0, A.jsx)(`p`, {
                className: `font-playfair text-base sm:text-lg text-white font-semibold leading-relaxed`,
                children: e.venueAddress,
              }),
              (0, A.jsxs)(`div`, {
                className: `grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-5 text-left`,
                children: [
                  (0, A.jsxs)(`div`, {
                    className: `p-2.5 rounded-xl bg-neutral-900/80 border border-amber-500/20 text-xs`,
                    children: [
                      (0, A.jsxs)(`div`, {
                        className: `flex items-center gap-1.5 text-amber-400 font-cinzel font-bold mb-1`,
                        children: [
                          (0, A.jsx)(De, { className: `w-3.5 h-3.5` }),
                          (0, A.jsx)(`span`, { children: `Nearest Airport` }),
                        ],
                      }),
                      (0, A.jsx)(`p`, {
                        className: `text-[11px] text-neutral-300`,
                        children: `Pantnagar (PGH) / Dehradun`,
                      }),
                    ],
                  }),
                  (0, A.jsxs)(`div`, {
                    className: `p-2.5 rounded-xl bg-neutral-900/80 border border-amber-500/20 text-xs`,
                    children: [
                      (0, A.jsxs)(`div`, {
                        className: `flex items-center gap-1.5 text-amber-400 font-cinzel font-bold mb-1`,
                        children: [
                          (0, A.jsx)(Fe, { className: `w-3.5 h-3.5` }),
                          (0, A.jsx)(`span`, { children: `Railway Station` }),
                        ],
                      }),
                      (0, A.jsx)(`p`, {
                        className: `text-[11px] text-neutral-300`,
                        children: `Ramnagar (~12 km / 20 mins)`,
                      }),
                    ],
                  }),
                  (0, A.jsxs)(`div`, {
                    className: `p-2.5 rounded-xl bg-neutral-900/80 border border-amber-500/20 text-xs`,
                    children: [
                      (0, A.jsxs)(`div`, {
                        className: `flex items-center gap-1.5 text-amber-400 font-cinzel font-bold mb-1`,
                        children: [
                          (0, A.jsx)(Ne, { className: `w-3.5 h-3.5` }),
                          (0, A.jsx)(`span`, {
                            children: `Wilderness & Safari`,
                          }),
                        ],
                      }),
                      (0, A.jsx)(`p`, {
                        className: `text-[11px] text-neutral-300`,
                        children: `Jim Corbett Reserve & Kosi River`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, A.jsxs)(`div`, {
                className: `flex flex-wrap items-center justify-center gap-3 pt-2`,
                children: [
                  (0, A.jsxs)(`button`, {
                    type: `button`,
                    onClick: () => {
                      let t =
                        e.googleMapsUrl ||
                        `https://maps.google.com/?q=${encodeURIComponent(e.venueName + ` ` + e.venueCity)}`;
                      window.open(t, `_blank`);
                    },
                    className: `px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-700 hover:brightness-110 text-white font-cinzel font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 border border-emerald-400 cursor-pointer`,
                    children: [
                      (0, A.jsx)(Ee, { className: `w-4 h-4` }),
                      `Open Google Maps Directions`,
                    ],
                  }),
                  (0, A.jsxs)(`button`, {
                    type: `button`,
                    onClick: () => {
                      let t = `https://m.uber.com/ul/?action=setPickup&dropoff[formatted_address]=${encodeURIComponent(e.venueAddress)}&dropoff[nickname]=${encodeURIComponent(e.venueName)}`;
                      window.open(t, `_blank`);
                    },
                    className: `px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-300 font-cinzel font-semibold text-xs uppercase tracking-wider shadow-md flex items-center gap-2 border border-amber-500/40 cursor-pointer`,
                    children: [
                      (0, A.jsx)(fe, { className: `w-4 h-4` }),
                      `Ride with Uber / Cab`,
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, A.jsx)(`div`, {
            className: `relative z-20 w-full flex flex-col items-center pb-4 text-center`,
            children: (0, A.jsxs)(`button`, {
              type: `button`,
              onClick: () => {
                (ze.playFireworkSound(),
                  Ue({
                    particleCount: 80,
                    angle: 60,
                    spread: 75,
                    origin: { x: 0.15, y: 0.6 },
                    colors: [
                      `#FFE87C`,
                      `#FF4500`,
                      `#FFD700`,
                      `#FF69B4`,
                      `#00FFFF`,
                      `#FFFFFF`,
                    ],
                  }),
                  Ue({
                    particleCount: 80,
                    angle: 120,
                    spread: 75,
                    origin: { x: 0.85, y: 0.6 },
                    colors: [
                      `#FFE87C`,
                      `#FF4500`,
                      `#FFD700`,
                      `#FF69B4`,
                      `#00FFFF`,
                      `#FFFFFF`,
                    ],
                  }));
              },
              className: `group px-6 py-2 rounded-full bg-gradient-to-r from-purple-900/80 via-rose-900/80 to-purple-900/80 hover:brightness-125 text-amber-200 text-xs font-cinzel font-bold border border-amber-400/50 shadow-xl flex items-center gap-2 cursor-pointer transition-transform active:scale-95`,
              children: [
                (0, A.jsx)(Ne, {
                  className: `w-3.5 h-3.5 text-amber-300 group-hover:rotate-45 transition-transform`,
                }),
                (0, A.jsx)(`span`, {
                  children: `Launch Celebration Sky Fireworks 🎆`,
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  Td = ({ config: e }) => {
    let [t, n] = (0, b.useState)(!1),
      r = typeof window < `u` ? ne(e, window.location.origin) : ne(e);
    return (0, A.jsx)(`footer`, {
      className: `relative w-full py-16 px-4 bg-gradient-to-b from-[#18040A] via-[#0F0206] to-[#080103] text-white border-t border-amber-500/30 text-center select-none`,
      children: (0, A.jsxs)(`div`, {
        className: `flex flex-col items-center justify-center max-w-xl mx-auto`,
        children: [
          (0, A.jsx)(`div`, {
            className: `w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-600 p-0.5 shadow-[0_0_30px_rgba(255,215,0,0.5)] mb-4`,
            children: (0, A.jsx)(`div`, {
              className: `w-full h-full rounded-full bg-[#1A030A] flex items-center justify-center font-title text-xl font-bold text-amber-300 border border-amber-200/80`,
              children: e.monogramText,
            }),
          }),
          (0, A.jsxs)(`h3`, {
            className: `font-playfair text-2xl sm:text-3xl font-bold text-amber-200`,
            children: [e.groomName, ` & `, e.brideName],
          }),
          (0, A.jsxs)(`p`, {
            className: `font-cinzel text-xs text-amber-400 font-semibold tracking-widest mt-1`,
            children: [e.weddingDateFormatted, ` • `, e.venueCity],
          }),
          (0, A.jsx)(`div`, {
            className: `mt-3 inline-block px-4 py-1 rounded-full bg-black/60 border border-amber-500/30 text-xs font-mono text-amber-300`,
            children: e.hashtag,
          }),
          (0, A.jsxs)(`div`, {
            className: `flex flex-wrap items-center justify-center gap-3 mt-6`,
            children: [
              (0, A.jsxs)(`button`, {
                type: `button`,
                onClick: () => {
                  let t = encodeURIComponent(
                    `🌸 *Wedding Invitation* 🌸\n\nWith the Eternal Blessings of Late Sh PL Makkar & Late Sh AK Bhatia and our loving parents Mrs. Uma & Mr. Sanjeev Makkar and Mrs. Pushpa & Mr. Rakesh Gusain, we cordially invite you to celebrate the wedding festivities of *${e.groomName}* & *${e.brideName}* on *${e.weddingDateFormatted}* at *${e.venueName}, ${e.venueCity}*.\n\n✨ Open our Interactive 3D Wedding Invitation & Scratch Card here:\n${r}\n\n${e.hashtag}`,
                  );
                  window.open(
                    `https://api.whatsapp.com/send?text=${t}`,
                    `_blank`,
                  );
                },
                className: `px-6 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-cinzel font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 border border-emerald-400 cursor-pointer transition-transform active:scale-95`,
                children: [
                  (0, A.jsx)(Ae, { className: `w-4 h-4` }),
                  `Share via WhatsApp`,
                ],
              }),
              (0, A.jsxs)(`button`, {
                type: `button`,
                onClick: () => {
                  navigator.clipboard.writeText(r).then(() => {
                    (n(!0), setTimeout(() => n(!1), 2500));
                  });
                },
                className: `px-6 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-amber-300 font-cinzel font-semibold text-xs uppercase tracking-wider shadow-md flex items-center gap-2 border border-amber-500/40 cursor-pointer transition-transform active:scale-95`,
                children: [
                  t
                    ? (0, A.jsx)(pe, { className: `w-4 h-4 text-emerald-400` })
                    : (0, A.jsx)(ye, { className: `w-4 h-4 text-amber-300` }),
                  t ? `Link Copied!` : `Copy Invitation Link`,
                ],
              }),
            ],
          }),
          (0, A.jsx)(`p`, {
            className: `text-[11px] text-amber-200/70 font-editorial italic mt-8 max-w-md`,
            children: [
              `“With the Eternal Blessings of `,
              (0, A.jsx)(`span`, {
                className: `text-red-500 font-bold not-italic drop-shadow-[0_0_8px_rgba(239,68,68,0.7)]`,
                children: `Late Sh PL Makkar & Late Sh AK Bhatia`,
              }),
              ` • Mrs. Uma & Mr. Sanjeev Makkar • Mrs. Pushpa & Mr. Rakesh Gusain”`,
            ],
          }),
          (0, A.jsxs)(`div`, {
            className: `mt-6 pt-6 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-400 font-montserrat gap-2`,
            children: [
              (0, A.jsx)(`span`, {
                children: `Kunal & Sania • LeafyLush Resort & Spa, Jim Corbett`,
              }),
              (0, A.jsxs)(`span`, {
                className: `flex items-center gap-1 text-amber-400 font-cinzel`,
                children: [
                  (0, A.jsx)(Ne, { className: `w-3 h-3` }),
                  ` #KunalWedsSania`,
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Ed = ({ config: e }) => {
    let [t, n] = (0, b.useState)(0),
      r = (0, b.useRef)(null),
      i = () => {
        n((e) => e + 1);
      },
      a = () => {
        let e = document.getElementById(`scene-sacred-invitation`);
        e && e.scrollIntoView({ behavior: `smooth` });
      },
      o = () => {
        let e = document.getElementById(`scene-functions-3d-wrapper`);
        e && e.scrollIntoView({ behavior: `smooth` });
      },
      s =
        e.presetId === `south-indian-kasavu` ||
        e.culturalTheme.toLowerCase().includes(`kerala`);
    return (0, A.jsxs)(`div`, {
      ref: r,
      id: `wedding-website-container`,
      className: `relative w-full h-full min-h-screen overflow-y-auto overflow-x-hidden no-scrollbar bg-neutral-950 font-body scroll-smooth`,
      children: [
        (0, A.jsx)(Ve, { musicPreset: e.audioPreset }),
        (0, A.jsx)(We, { burstTrigger: t, petalColors: e.petalColors }),
        (0, A.jsx)(gd, { config: e, onScrollNext: a, onScrollToEvents: o }),
        (0, A.jsx)(_d, {
          variant: `kaleerein`,
          label: `॥ WITH BLESSINGS OF LATE SH PL MAKKAR & LATE SH AK BHATIA ॥`,
          isKerala: s,
        }),
        (0, A.jsx)(vd, { config: e }),
        (0, A.jsx)(_d, {
          variant: `kaleerein`,
          label: `॥ 3D PALACE GATEWAY REVEAL ॥`,
          isKerala: s,
        }),
        (0, A.jsx)(yd, { config: e, onTriggerPetalShower: i }),
        (0, A.jsx)(_d, {
          variant: `kaleerein`,
          label: `॥ SACRED HATHLEWA UNION ॥`,
          isKerala: s,
        }),
        (0, A.jsx)(bd, { config: e }),
        (0, A.jsx)(_d, {
          variant: `kaleerein`,
          label: `॥ WEDDING CEREMONIES ॥`,
          isKerala: s,
        }),
        (0, A.jsx)(xd, { config: e, onTriggerPetalShower: i }),
        (0, A.jsx)(_d, {
          variant: `kaleerein`,
          label: `॥ MEMORIES & MOMENTS ॥`,
          isKerala: s,
        }),
        (0, A.jsx)(Cd, { photos: e.galleryPhotos, config: e }),
        (0, A.jsx)(_d, {
          variant: `kaleerein`,
          label: `॥ THE WEDDING DESTINATION ॥`,
          isKerala: s,
        }),
        (0, A.jsx)(wd, { config: e }),
        (0, A.jsx)(Td, { config: e }),
      ],
    });
  };
function Dd() {
  let [e, t] = (0, b.useState)(() =>
      re(typeof window < `u` ? window.location.search : ``),
    ),
    [n, r] = (0, b.useState)(e.config),
    [i, a] = (0, b.useState)(`desktop-wide`);
  return (
    (0, b.useEffect)(() => {
      let e = () => {
        let e = re(window.location.search);
        (t(e), r(e.config));
      };
      return (
        window.addEventListener(`popstate`, e),
        () => window.removeEventListener(`popstate`, e)
      );
    }, []),
    (0, A.jsxs)(`div`, {
      className: `relative w-full min-h-screen bg-neutral-950 text-white flex flex-col font-body selection:bg-amber-500 selection:text-neutral-950`,
      children: [
        (0, A.jsxs)(`header`, {
          className: `sticky top-0 z-40 w-full px-4 py-2.5 bg-black/85 backdrop-blur-md border-b border-amber-500/30 flex items-center justify-between shadow-lg`,
          children: [
            (0, A.jsxs)(`div`, {
              className: `flex items-center gap-2.5`,
              children: [
                (0, A.jsx)(`div`, {
                  className: `w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-600 to-amber-600 flex items-center justify-center shadow-md`,
                  children: (0, A.jsx)(Ne, {
                    className: `w-3.5 h-3.5 text-white animate-sparkle`,
                  }),
                }),
                (0, A.jsx)(`div`, {
                  children: (0, A.jsxs)(`span`, {
                    className: `font-cinzel text-xs font-bold text-amber-200 tracking-wider uppercase flex items-center gap-1.5`,
                    children: [
                      n.groomName,
                      ` & `,
                      n.brideName,
                      ` • Wedding`,
                    ],
                  }),
                }),
              ],
            }),
            (0, A.jsx)(`div`, {
              className: `flex items-center gap-2`,
              children: (0, A.jsxs)(`div`, {
                className: `flex items-center bg-neutral-900 px-1 py-0.5 rounded-lg border border-amber-500/30 text-xs`,
                children: [
                  (0, A.jsx)(`button`, {
                    type: `button`,
                    onClick: () => a(`mobile`),
                    title: `Mobile View`,
                    className: `p-1.5 rounded cursor-pointer transition-colors ${i === `mobile` ? `bg-amber-500 text-neutral-950 font-bold` : `text-neutral-400 hover:text-white`}`,
                    children: (0, A.jsx)(Me, { className: `w-3.5 h-3.5` }),
                  }),
                  (0, A.jsx)(`button`, {
                    type: `button`,
                    onClick: () => a(`tablet`),
                    title: `Tablet View`,
                    className: `p-1.5 rounded cursor-pointer transition-colors ${i === `tablet` ? `bg-amber-500 text-neutral-950 font-bold` : `text-neutral-400 hover:text-white`}`,
                    children: (0, A.jsx)(Pe, { className: `w-3.5 h-3.5` }),
                  }),
                  (0, A.jsx)(`button`, {
                    type: `button`,
                    onClick: () => a(`desktop-wide`),
                    title: `Full Screen Responsive View`,
                    className: `p-1.5 rounded cursor-pointer transition-colors ${i === `desktop-wide` ? `bg-amber-500 text-neutral-950 font-bold` : `text-neutral-400 hover:text-white`}`,
                    children: (0, A.jsx)(we, { className: `w-3.5 h-3.5` }),
                  }),
                ],
              }),
            }),
          ],
        }),
        (0, A.jsx)(`main`, {
          className: `flex-1 w-full flex items-center justify-center p-0 overflow-hidden bg-neutral-950`,
          children:
            i === `mobile`
              ? (0, A.jsx)(`div`, {
                  className: `py-6 flex items-center justify-center w-full min-h-[calc(100vh-45px)]`,
                  children: (0, A.jsxs)(`div`, {
                    className: `relative w-[390px] h-[844px] rounded-[48px] overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.4)] border-[10px] border-neutral-800 bg-neutral-950 flex flex-col`,
                    children: [
                      (0, A.jsx)(`div`, {
                        className: `absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-neutral-800 rounded-b-2xl z-50 flex items-center justify-center`,
                        children: (0, A.jsx)(`div`, {
                          className: `w-10 h-1 bg-neutral-700 rounded-full`,
                        }),
                      }),
                      (0, A.jsx)(`div`, {
                        className: `flex-1 w-full h-full overflow-y-auto no-scrollbar`,
                        children: (0, A.jsx)(Ed, { config: n }),
                      }),
                    ],
                  }),
                })
              : i === `tablet`
                ? (0, A.jsx)(`div`, {
                    className: `py-6 flex items-center justify-center w-full min-h-[calc(100vh-45px)]`,
                    children: (0, A.jsx)(`div`, {
                      className: `relative w-[768px] h-[1024px] rounded-[36px] overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.4)] border-[10px] border-neutral-800 bg-neutral-950 flex flex-col`,
                      children: (0, A.jsx)(`div`, {
                        className: `flex-1 w-full h-full overflow-y-auto no-scrollbar`,
                        children: (0, A.jsx)(Ed, { config: n }),
                      }),
                    }),
                  })
                : (0, A.jsx)(`div`, {
                    className: `w-full h-full flex-1`,
                    children: (0, A.jsx)(Ed, { config: n }),
                  }),
        }),
      ],
    })
  );
}
(0, x.createRoot)(document.getElementById(`root`)).render((0, A.jsx)(Dd, {}));
