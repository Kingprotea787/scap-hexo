import { t as e } from './rolldown-runtime.BRwTesTf.mjs';
import {
  A as t,
  B as n,
  C as r,
  D as i,
  E as a,
  F as o,
  H as s,
  I as c,
  L as l,
  M as u,
  N as d,
  P as f,
  R as p,
  S as m,
  T as h,
  V as g,
  _,
  a as v,
  b as y,
  c as b,
  d as x,
  f as S,
  g as C,
  h as w,
  i as T,
  j as E,
  l as D,
  m as ee,
  o as te,
  s as O,
  u as ne,
  v as k,
  w as re,
  y as ie,
  z as A,
} from './react.DPVtOLUT.mjs';
import {
  $ as j,
  A as ae,
  B as oe,
  C as M,
  D as se,
  E as ce,
  F as le,
  H as ue,
  I as de,
  J as N,
  K as fe,
  L as pe,
  M as me,
  O as he,
  Q as P,
  R as ge,
  S as _e,
  T as ve,
  U as ye,
  V as be,
  W as xe,
  X as Se,
  Y as F,
  Z as Ce,
  _ as we,
  a as Te,
  b as Ee,
  c as De,
  d as Oe,
  et as ke,
  f as Ae,
  g as je,
  h as Me,
  i as Ne,
  it as Pe,
  j as Fe,
  k as Ie,
  l as Le,
  m as Re,
  n as ze,
  nt as Be,
  o as Ve,
  p as He,
  q as Ue,
  r as We,
  rt as Ge,
  s as Ke,
  tt as I,
  u as qe,
  v as Je,
  w as Ye,
  x as Xe,
  y as Ze,
} from './motion.BMjj-i1j.mjs';
function Qe(e) {
  return typeof e == `function`;
}
function $e(e) {
  return typeof e == `boolean`;
}
function L(e) {
  return typeof e == `string`;
}
function R(e) {
  return Number.isFinite(e);
}
function et(e) {
  return Array.isArray(e);
}
function z(e) {
  return typeof e == `object` && !!e && !et(e);
}
function tt(e) {
  for (let t in e) return !1;
  return !0;
}
function nt(e) {
  return e === void 0;
}
function rt(e) {
  return e === null;
}
function it(e) {
  return e == null;
}
function at(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function ot(e) {
  return z(e) && Qe(e.return);
}
function st(e) {
  return z(e) && Qe(e.then);
}
function ct(e) {
  return e instanceof Promise;
}
function lt(e) {
  return `url('data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`)}')`;
}
function ut(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${
    e
      ? `${e}
`
      : ``
  }In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${
    n
      ? `:
${n}`
      : `.`
  }`;
}
function dt() {
  if (!Km) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = import(n)
      .then((t) => (Xm.set(e, t), t))
      .catch((t) => {
        throw (Xm.delete(e), console.warn(`Failed to import lazy module: ${n}`, t), t);
      });
    (r.catch(Gm), Xm.set(e, r));
  }
}
function ft(e) {
  return typeof e == `object` && !!e && !S(e) && Qm in e;
}
function pt(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function mt(e, t = `default`, n) {
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !Xm.has(n)) return;
      let e = Xm.get(n);
      ct(e) ? s(() => e) : (i = pt(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = pt(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    l = !1,
    u = _(function (t, r) {
      if (
        (c(() => {
          l = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && Zm !== void 0 && Zm.add(n), !i)) throw s(e);
      return b(i, { ref: r, ...t });
    });
  return (
    (u.preload = () => (o(), s(e))),
    (u.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: l })),
    u
  );
}
function ht(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function gt(e) {
  return e === null || !(eh in e) ? !1 : typeof e.equals == `function`;
}
function _t(e, t) {
  return e === t ? !0 : e !== e && t !== t;
}
function vt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!_t(e[r], t[r])) return !1;
  return !0;
}
function yt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!Tt(e[r], t[r], !0)) return !1;
  return !0;
}
function bt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!_t(r, t.get(n))) return !1;
  return !0;
}
function xt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Tt(r, t.get(n), !0)) return !1;
  return !0;
}
function St(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function Ct(e, t) {
  let n = $m(e);
  if (n.length !== $m(t).length) return !1;
  for (let r of n)
    if (!ht(t, r) || (!(r === `_owner` && ht(e, `$$typeof`) && e.$$typeof) && !_t(e[r], t[r])))
      return !1;
  return !0;
}
function wt(e, t) {
  let n = $m(e);
  if (n.length !== $m(t).length) return !1;
  for (let r of n)
    if (!ht(t, r) || (!(r === `_owner` && ht(e, `$$typeof`) && e.$$typeof) && !Tt(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Tt(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? yt(e, t) : vt(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? xt(e, t) : bt(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return St(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? gt(e) && gt(t)
        ? e.equals(t)
        : n
          ? wt(e, t)
          : Ct(e, t)
      : !1;
}
function Et(e, t, n = !0) {
  try {
    return Tt(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function Dt(e) {
  return r.useCallback((t) => e[t], [e]);
}
function Ot({ api: e, children: t }) {
  return b(th.Provider, { value: e, children: t });
}
function kt() {
  return r.useContext(th);
}
function At({ routes: e, children: t }) {
  let n = Dt(e),
    r = f(() => ({ getRoute: n }), [n]);
  return b(th.Provider, { value: r, children: t });
}
function jt() {
  let e = kt(),
    t = d(nh),
    n = t?.routeId ?? e.currentRouteId,
    r = t?.routeId ? t.pathVariables : e.currentPathVariables,
    i = n ? e.getRoute?.(n) : void 0;
  return f(() => {
    if (!(!n || !i)) return { ...i, id: n, pathVariables: r };
  }, [n, r, i]);
}
function Mt() {
  let e = jt();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Nt(e) {
  let t = jt(),
    n = r.useRef(t);
  Et(n.current, t) || !t || ((n.current = t), e(t));
}
function Pt(e) {
  let t = kt();
  if (e) return t.getRoute?.(e);
}
function Ft(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function It(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function Lt(e, t) {
  let n = jt(),
    i = Pt(t) ?? n;
  return r.useMemo(() => (i ? Ft(i, e) : e), [e, i]);
}
function B(e, ...t) {
  if (e) return;
  let n = Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function V(e, t) {
  throw t || Error(e ? `Unexpected value: ${e}` : `Application entered invalid state`);
}
function Rt(e) {
  return Object(e) !== e;
}
function zt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === dh
  );
}
function Bt(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Vt(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` ` ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``;
  }
}
function Ht(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Vt(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Ut(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function Wt(e) {
  return fh.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function Gt(e) {
  let t = new DataView(e),
    n = ``;
  for (let r = 0; r < e.byteLength; r++) n += String.fromCharCode(t.getUint8(r));
  return Jt(n);
}
function Kt(e) {
  let t = qt(e),
    n = new ArrayBuffer(t.length),
    r = new DataView(n);
  for (let e = 0; e < n.byteLength; e++) r.setUint8(e, t.charCodeAt(e));
  return n;
}
function qt(e) {
  e.length % 4 == 0 && (e = e.replace(/==?$/, ``));
  let t = ``,
    n = 0,
    r = 0;
  for (let i = 0; i < e.length; i++)
    ((n <<= 6),
      (n |= ph.indexOf(e[i])),
      (r += 6),
      r === 24 &&
        ((t += String.fromCharCode((n & 16711680) >> 16)),
        (t += String.fromCharCode((n & 65280) >> 8)),
        (t += String.fromCharCode(n & 255)),
        (n = r = 0)));
  return (
    r === 12
      ? ((n >>= 4), (t += String.fromCharCode(n)))
      : r === 18 &&
        ((n >>= 2),
        (t += String.fromCharCode((n & 65280) >> 8)),
        (t += String.fromCharCode(n & 255))),
    t
  );
}
function Jt(e) {
  let t = ``;
  for (let n = 0; n < e.length; n += 3) {
    let r = [void 0, void 0, void 0, void 0];
    ((r[0] = e.charCodeAt(n) >> 2),
      (r[1] = (e.charCodeAt(n) & 3) << 4),
      e.length > n + 1 &&
        ((r[1] |= e.charCodeAt(n + 1) >> 4), (r[2] = (e.charCodeAt(n + 1) & 15) << 2)),
      e.length > n + 2 && ((r[2] |= e.charCodeAt(n + 2) >> 6), (r[3] = e.charCodeAt(n + 2) & 63)));
    for (let e = 0; e < r.length; e++) r[e] === void 0 ? (t += `=`) : (t += ph[r[e]]);
  }
  return t;
}
function Yt(e, t) {
  return Xt(JSON.parse(e), t);
}
function Xt(e, t) {
  if (typeof e == `number`) return i(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let n = e,
    r = Array(n.length);
  function i(e, a = !1) {
    if (e === mh) return;
    if (e === gh) return NaN;
    if (e === _h) return 1 / 0;
    if (e === vh) return -1 / 0;
    if (e === yh) return -0;
    if (a || typeof e != `number`) throw Error(`Invalid input`);
    if (e in r) return r[e];
    let o = n[e];
    if (!o || typeof o != `object`) r[e] = o;
    else if (Array.isArray(o))
      if (typeof o[0] == `string`) {
        let a = o[0],
          s = t?.[a];
        if (s) {
          let t = o[1];
          return (typeof t != `number` && (t = n.push(o[1]) - 1), (r[e] = s(i(t))));
        }
        switch (a) {
          case `Date`:
            r[e] = new Date(o[1]);
            break;
          case `Set`:
            let t = new Set();
            r[e] = t;
            for (let e = 1; e < o.length; e += 1) t.add(i(o[e]));
            break;
          case `Map`:
            let n = new Map();
            r[e] = n;
            for (let e = 1; e < o.length; e += 2) n.set(i(o[e]), i(o[e + 1]));
            break;
          case `RegExp`:
            r[e] = new RegExp(o[1], o[2]);
            break;
          case `Object`:
            r[e] = Object(o[1]);
            break;
          case `BigInt`:
            r[e] = BigInt(o[1]);
            break;
          case `null`:
            let s = Object.create(null);
            r[e] = s;
            for (let e = 1; e < o.length; e += 2) s[o[e]] = i(o[e + 1]);
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`: {
            let t = globalThis[a],
              n = new t(i(o[1]));
            r[e] = o[2] === void 0 ? n : n.subarray(o[2], o[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = o[1];
            r[e] = Kt(t);
            break;
          }
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`: {
            let t = a.slice(9);
            r[e] = Temporal[t].from(o[1]);
            break;
          }
          case `URL`:
            r[e] = new URL(o[1]);
            break;
          case `URLSearchParams`:
            r[e] = new URLSearchParams(o[1]);
            break;
          default:
            throw Error(`Unknown type ${a}`);
        }
      } else {
        let t = Array(o.length);
        r[e] = t;
        for (let e = 0; e < o.length; e += 1) {
          let n = o[e];
          n !== hh && (t[e] = i(n));
        }
      }
    else {
      let t = {};
      for (let n in ((r[e] = t), o)) {
        if (n === `__proto__`) throw Error('Cannot parse an object with a `__proto__` property');
        let e = o[n];
        t[n] = i(e);
      }
    }
    return r[e];
  }
  return i(0);
}
function Zt(e, t) {
  let n = [],
    r = new Map(),
    i = [];
  if (t) for (let e of Object.getOwnPropertyNames(t)) i.push({ key: e, fn: t[e] });
  let a = [],
    o = 0;
  function s(e) {
    if (e === void 0) return mh;
    if (Number.isNaN(e)) return gh;
    if (e === 1 / 0) return _h;
    if (e === -1 / 0) return vh;
    if (e === 0 && 1 / e < 0) return yh;
    if (r.has(e)) return r.get(e);
    let t = o++;
    r.set(e, t);
    for (let { key: r, fn: a } of i) {
      let i = a(e);
      if (i) return ((n[t] = `["${r}",${s(i)}]`), t);
    }
    if (typeof e == `function`) throw new uh(`Cannot stringify a function`, a);
    let c = ``;
    if (Rt(e)) c = Qt(e);
    else {
      let t = Bt(e);
      switch (t) {
        case `Number`:
        case `String`:
        case `Boolean`:
          c = `["Object",${Qt(e)}]`;
          break;
        case `BigInt`:
          c = `["BigInt",${e}]`;
          break;
        case `Date`:
          c = `["Date","${isNaN(e.getDate()) ? `` : e.toISOString()}"]`;
          break;
        case `URL`:
          c = `["URL",${Ht(e.toString())}]`;
          break;
        case `URLSearchParams`:
          c = `["URLSearchParams",${Ht(e.toString())}]`;
          break;
        case `RegExp`:
          let { source: n, flags: r } = e;
          c = r ? `["RegExp",${Ht(n)},"${r}"]` : `["RegExp",${Ht(n)}]`;
          break;
        case `Array`:
          c = `[`;
          for (let t = 0; t < e.length; t += 1)
            (t > 0 && (c += `,`), t in e ? (a.push(`[${t}]`), (c += s(e[t])), a.pop()) : (c += hh));
          c += `]`;
          break;
        case `Set`:
          c = `["Set"`;
          for (let t of e) c += `,${s(t)}`;
          c += `]`;
          break;
        case `Map`:
          c = `["Map"`;
          for (let [t, n] of e)
            (a.push(`.get(${Rt(t) ? Qt(t) : `...`})`), (c += `,${s(t)},${s(n)}`), a.pop());
          c += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`: {
          let n = e;
          c = `["` + t + `",` + s(n.buffer);
          let r = e.byteOffset,
            i = r + e.byteLength;
          if (r > 0 || i !== n.buffer.byteLength) {
            let e = /(\d+)/.exec(t)[1] / 8;
            c += `,${r / e},${i / e}`;
          }
          c += `]`;
          break;
        }
        case `ArrayBuffer`:
          c = `["ArrayBuffer","${Gt(e)}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          c = `["${t}",${Ht(e.toString())}]`;
          break;
        default:
          if (!zt(e)) throw new uh(`Cannot stringify arbitrary non-POJOs`, a);
          if (Ut(e).length > 0) throw new uh(`Cannot stringify POJOs with symbolic keys`, a);
          if (Object.getPrototypeOf(e) === null) {
            for (let t in ((c = `["null"`), e))
              (a.push(Wt(t)), (c += `,${Ht(t)},${s(e[t])}`), a.pop());
            c += `]`;
          } else {
            c = `{`;
            let t = !1;
            for (let n in e)
              (t && (c += `,`), (t = !0), a.push(Wt(n)), (c += `${Ht(n)}:${s(e[n])}`), a.pop());
            c += `}`;
          }
      }
    }
    return ((n[t] = c), t);
  }
  let c = s(e);
  return c < 0 ? `${c}` : `[${n.join(`,`)}]`;
}
function Qt(e) {
  let t = typeof e;
  return t === `string`
    ? Ht(e)
    : e instanceof String
      ? Ht(e.toString())
      : e === void 0
        ? mh.toString()
        : e === 0 && 1 / e < 0
          ? yh.toString()
          : t === `bigint`
            ? `["BigInt","${e}"]`
            : String(e);
}
function $t(e, t, n = `lazy`) {
  switch ((K.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
  }
}
function en() {
  return { [xh.QueryCache]: new Map(), [xh.CollectionUtilsCache]: new Map() };
}
function tn() {
  if (!Km) return;
  if (Sh !== void 0) return Sh;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      Sh = Yt(e.text) ?? en();
    } catch (e) {
      ((Sh = en()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      Ym(() => {
        (e?.remove(), (e = null));
      }),
      Sh
    );
  }
}
function nn(e, t) {
  if (
    (console.warn(
      ut(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`
      )
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    $t(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function rn(e, t) {
  let n = tn();
  return n ? n[e].has(t) : !1;
}
function an(e, t) {
  let n = tn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function on(e) {
  return e?.id ?? sh;
}
function sn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function cn(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (Eh.has(n)) return Eh.get(n);
    let r = new Oh(n, t);
    return (Eh.set(n, r), r);
  };
}
function ln({ children: e, collectionUtils: t }) {
  let n = f(() => ({ get: cn(t) }), [t]);
  return b(Dh.Provider, { value: n, children: e });
}
function un() {
  return d(Dh);
}
function dn() {
  for (let e of jh) e();
  jh.clear();
}
function fn(e) {
  return new Promise((t) => {
    if ((jh.add(t), document.hidden)) {
      dn();
      return;
    }
    (document.addEventListener(`visibilitychange`, dn),
      document.addEventListener(`pagehide`, dn),
      Me.read(() => {
        mn(e).then(() => {
          (jh.delete(t), !e?.signal?.aborted && t());
        });
      }));
  });
}
function pn(e) {
  return new Promise((t) => {
    (setTimeout(t, 100),
      Me.read(
        () => {
          mn(e).then(t);
        },
        !1,
        !0
      ));
  });
}
function mn(e) {
  let t = e?.priority;
  return kh || Ah
    ? t === `background`
      ? new Promise((e) => {
          setTimeout(e, 1);
        })
      : kh
        ? K.scheduler.yield(e).catch(Gm)
        : K.scheduler.postTask(() => {}, e).catch(Gm)
    : t === `user-blocking`
      ? Promise.resolve()
      : new Promise((e) => {
          setTimeout(e, t === `background` ? 1 : 0);
        });
}
function hn(e) {
  let { continueAfter: t, ensureContinueBeforeUnload: n, ...r } = e ?? {};
  return n ? fn(r) : t === `paint` ? pn(r) : mn(r);
}
function gn() {
  return r.useContext(Fh);
}
function _n() {
  return gn().activeLocale?.code ?? `en-US`;
}
function vn() {
  let { activeLocale: e } = gn(),
    t = un(),
    { autobahnNavigation: n } = oh(),
    { getRoute: r } = kt();
  return o(
    (i, a, o = !0) => {
      if (!(!i || !r))
        return bn(
          r(i),
          i && n
            ? { routeId: i, pathVariables: a, locale: e ?? void 0, collectionUtils: t }
            : void 0,
          o
        );
    },
    [r, e, t, n]
  );
}
function yn(e, t = !0) {
  let n = vn();
  c(() => {
    if (!(!t || !Lh)) for (let t of e) n(t);
  }, [e, t, n]);
}
async function bn(e, t, n = !0) {
  if (!Lh || !e) return;
  let r = e.page;
  if (!(!r || !ft(r))) {
    n && (await hn());
    try {
      let e = await r.preload();
      t && e && (await xn(e, t));
    } catch {}
  }
}
async function xn(e, t) {
  let n = e.loader;
  if (!n?.load) return;
  let r = {
    signal: t.signal ?? new AbortController().signal,
    pathVariables: t.pathVariables ?? {},
    routeId: t.routeId,
    locale: t.locale,
    collectionUtils: t.collectionUtils,
  };
  try {
    await n.load({}, r);
  } catch {}
}
function Sn(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = Cn(e),
    [r, i] = Cn(t),
    a = wn(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function Cn(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function wn(e, t) {
  if (e === t || ((e = `/` + Tn(e)), (t = `/` + Tn(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = Bh(e, 1 + s);
    if (n !== Bh(t, 1 + s)) break;
    n === zh && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (Bh(t, 1 + s) === zh) return Hh(t, 1 + s + 1);
      if (s === 0) return Hh(t, 1 + s);
    } else r > a && (Bh(e, 1 + s) === zh ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || Bh(e, s) === zh) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${Hh(t, 1 + o)}`;
}
function Tn(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = Bh(e, o);
    else if (Gh(a)) break;
    else a = zh;
    if (Gh(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || Bh(t, t.length - 1) !== Rh || Bh(t, t.length - 2) !== Rh) {
            if (t.length > 2) {
              let e = Vh(t, Wh);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = Hh(t, 0, e)), (n = t.length - 1 - Vh(t, Wh))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          Uh && ((t += t.length > 0 ? `${Wh}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${Wh}${Hh(e, r + 1, o)}`) : (t = Hh(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === Rh && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function En(e, t) {
  return e.replace(Mh, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function Dn(e) {
  let t = s === void 0 ? `` : s.location.search;
  return t ? On(t, e) : e;
}
function On(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== qh && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function kn(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(Mh)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !L(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = ct(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = ct(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = ct(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    !t ||
      !n ||
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
async function An({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await kn(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (t.slug && (u.path = `/` + t.slug + u.path), o && u.path && (u.path = Dn(u.path)), u);
}
function jn(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || s.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function Mn({ children: e, value: t }) {
  return b(Jh.Provider, { value: t, children: e });
}
function Nn() {
  return r.useContext(Jh);
}
function Pn(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function Fn(e) {
  let t = Yh,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < Xh; ) ((n = e.next(t)), r.push(n.value), (t += Yh));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - Yh }
  );
}
function In(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function Ln(e) {
  let { innerWidth: t, innerHeight: n } = s,
    [r, i] = In(e.x),
    [a, o] = In(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function Rn(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function zn(e) {
  return e ? Qh[e] : void 0;
}
function Bn(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (Vn(t)) {
    let { easing: e, duration: n } = Fn(
      se({ keyframes: [0, 1], ...Hn(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = zn(n?.mask?.type),
    o = Rn(n, `start`, e, a),
    s = Rn({ ...$h, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function Vn(e) {
  return e.type === `spring`;
}
function Hn(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function Un({ exit: e = tg, enter: t }) {
  let n = document.createElement(`style`);
  n.id = eg;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += Bn(`exit`, e)),
    (r += Bn(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function Wn() {
  Ym(() => {
    Me.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(eg);
      e && document.head.removeChild(e);
    });
  });
}
function Gn() {
  return !!document.startViewTransition;
}
function Kn(e) {
  return new Promise((t) => {
    Me.render(() => {
      (performance.mark(`framer-vt-style`), Un(e), t());
    });
  });
}
async function qn(e, t, n) {
  if (!Gn()) {
    e();
    return;
  }
  if ((await Kn(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(ng),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), Wn());
      })
      .catch(ng),
    r
  );
}
function Jn() {
  let e = Nn(),
    t = E(void 0);
  return (
    c(() => {
      t.current &&= (t.current(), void 0);
    }),
    o(
      (n, r, i, a) => {
        let o = Pn(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return qn(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function Yn(e, t) {
  Ym(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function Xn(e, t, n, r = re) {
  r(() => {
    let t = async (e) => (await hn({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function Zn(e) {
  let t = E(void 0);
  return (
    Xn(
      () => {
        t.current &&= (t.current(), void 0);
      },
      void 0,
      { priority: `user-blocking` }
    ),
    o(
      (n) => {
        let r = new Promise((e) => {
          t.current = e;
        });
        if (!e) return { promise: r, measureDetail: n, ignore: null };
        let i = `${e}-start`,
          a = `${e}-end`,
          o = !1;
        return (
          performance.mark(i),
          r
            .finally(() => {
              o || (performance.mark(a), performance.measure(e, { start: i, end: a, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: r,
            measureDetail: n,
            ignore: () => {
              ((o = !0), t.current?.(), (t.current = void 0));
            },
          }
        );
      },
      [e]
    )
  );
}
async function Qn(
  e,
  t,
  {
    currentRoutePath: n,
    currentRoutePathLocalized: r,
    currentPathVariables: i,
    hash: a,
    pathVariables: o,
    localeId: s,
    preserveQueryParams: c,
    siteCanonicalURL: l,
  },
  u = !1
) {
  let { path: d } = t;
  if (!d) return;
  let f = ar(t, {
    currentRoutePath: n,
    currentRoutePathLocalized: r,
    currentPathVariables: i,
    hash: a,
    pathVariables: o,
    preserveQueryParams: c,
    siteCanonicalURL: l,
    localeId: s,
  });
  try {
    return await tr({ routeId: e, hash: a, pathVariables: o, localeId: s }, f, u);
  } catch {}
}
function $n(e) {
  return z(e) && L(e.routeId);
}
function er(e, t, n = !1) {
  (performance.mark(`framer-history-replace`),
    (n ? s.history.__proto__.replaceState : s.history.replaceState).call(s.history, e, ``, t));
}
async function tr(e, t, n = !1) {
  if ((performance.mark(`framer-history-push`), Yn(t, s.location.href), !n)) {
    s.history.pushState(e, ``, t);
    return;
  }
  let r = !1,
    i;
  (ag &&
    ((i = () => {
      if (((r = !0), og)) return;
      let e = `Popstate called after intercept(). Please report this to the Framer team.`;
      (console.error(e), $t(`published_site_load_recoverable_error`, { message: e }));
    }),
    s.addEventListener(`popstate`, i, { once: !0 })),
    og && ag
      ? s.history.__proto__.pushState.call(s.history, e, ``, t)
      : s.history.pushState(e, ``, t),
    ag &&
      queueMicrotask(() => {
        r || ((ag = !1), s.removeEventListener(`popstate`, i));
      }));
}
function nr({ disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: r }) {
  re(() => {
    e ||
      (performance.mark(`framer-history-set-initial-state`),
      er({ routeId: t, pathVariables: n, localeId: r }, void 0, !0));
  }, []);
}
function rr(e, t) {
  let n = Jn(),
    r = Zn(`framer-route-change`),
    i = E(void 0),
    a = o(
      async ({ state: a }) => {
        if (
          (s.navigation?.transition && s.navigation?.transition?.navigationType !== `traverse`) ||
          !z(a)
        )
          return;
        let { routeId: o, hash: c, pathVariables: l, localeId: u } = a;
        if (!L(o)) return;
        let d = r({ popstate: !0 }),
          f = It();
        d.promise.finally(f);
        let p = await n(e.current, o, () => {
            t(
              o,
              L(u) ? u : void 0,
              L(c) ? c : void 0,
              s.location.pathname + s.location.search + s.location.hash,
              z(l) ? l : void 0,
              !0,
              d,
              !1
            );
          }),
          m = s.navigation?.transition;
        (await (p?.updateCallbackDone ?? Promise.resolve())
          .then(i.current?.resolve)
          .catch(i.current?.reject),
          await d.promise);
        try {
          await m?.finished;
        } catch (e) {
          console.warn(`Popstate transition failed`, e);
        }
        (ig(), Yn(s.location.href));
      },
      [e, r, t, n]
    ),
    l = o((e) => {
      e.navigationType !== `traverse` ||
        !e.canIntercept ||
        e.intercept({
          async handler() {
            (await new Promise((e, t) => {
              i.current = { resolve: e, reject: t };
            }),
              (i.current = void 0));
          },
          scroll: `after-transition`,
        });
    }, []);
  c(
    () => (
      s.addEventListener(`popstate`, a),
      sg && s.navigation.addEventListener(`navigate`, l),
      () => {
        (s.removeEventListener(`popstate`, a),
          sg && s.navigation.removeEventListener(`navigate`, l));
      }
    ),
    [a, l]
  );
}
function ir(e, t, n) {
  let r = Ft(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(Mh, (e, t) => i[t] ?? e);
}
function ar(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: c = !0,
    preserveQueryParams: l,
    onlyHash: u = !1,
    siteCanonicalURL: d,
    localeId: f,
  }
) {
  let p = ir(i, e, o);
  if (u) return p ?? ``;
  let m = t ?? `/`;
  (n && f && (m = n[f] ?? m), r && (m = m.replace(Mh, (e, t) => String(r[t] || e))));
  let h = (f ? e?.pathLocalized?.[f] : void 0) ?? e?.path ?? `/`;
  a && (h = h.replace(Mh, (e, t) => String(a[t] || e)));
  let g = m === h && p;
  if (c)
    if (Kh.has(m) && s !== void 0) {
      let e = jn(d);
      h = Sn(s.location.pathname, e + h);
    } else h = Sn(m, h);
  return ((l || g) && (h = Dn(h)), p && (h = `${h}#${p}`), h);
}
async function or(e, t, n) {
  if (!e.path || !t) return !1;
  let r = `${n.slug ? `/${n.slug}` : ``}${En(e.path, t)}`;
  return (await fetch(r, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((s.location.href = s.location.origin + r), !0)
    : !1;
}
function sr() {
  let e = un();
  return o((t) => cr({ ...t, collectionUtils: e }), [e]);
}
async function cr(e) {
  let t = await An(e);
  if (t) {
    try {
      localStorage.preferredLocale = e.nextLocale.code;
    } catch {}
    try {
      if (!L(t.path)) throw Error(`Expected result.path to be a string`);
      if (t.isMissingInLocale && (await or(e.route, t.pathVariables, e.nextLocale))) return;
    } catch {}
    return t;
  }
}
function lr(e, t) {
  try {
    let n = s.history.state;
    if (!$n(n)) return;
    let r = n?.paginationInfo === void 0 || n.paginationInfo[e] === void 0,
      i = { ...n.paginationInfo, [e]: t };
    er({ ...n, paginationInfo: i }, void 0, r);
  } catch {}
}
function ur() {
  let e = E(Promise.resolve()),
    t = E(),
    n = o((n) => {
      if (n.navigationType === `traverse` || !n.canIntercept) return;
      let r = t.current;
      (r?.signal.addEventListener(`abort`, () => {
        r.abort(`user aborted`);
      }),
        n.intercept({ handler: () => e.current }));
    }, []);
  return o(
    (r, i, a) => {
      if (!sg) {
        i();
        return;
      }
      ((e.current = r),
        (t.current = a),
        s.navigation.addEventListener(`navigate`, n),
        i(!0),
        r.finally(() => {
          s.navigation.removeEventListener(`navigate`, n);
        }));
    },
    [n]
  );
}
function dr(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`; ) t++;
  for (; n > t && e[n - 1] === `-`; ) n--;
  return e.slice(t, n);
}
function fr(e) {
  return dr(e.trim().toLowerCase().replace(cg, `-`));
}
function pr(e, t) {
  let n = p(() => ({ inputs: t, result: e() }))[0],
    r = E(!0),
    i = E(n),
    a =
      r.current || (t && i.current.inputs && Et(t, i.current.inputs, !1))
        ? i.current
        : { inputs: t, result: e() };
  return (
    c(() => {
      ((r.current = !1), (i.current = a));
    }, [a]),
    a.result
  );
}
function mr(e) {
  let t = e.replace(/\+/g, ` `);
  try {
    return decodeURIComponent(t);
  } catch {
    return t;
  }
}
function hr(e) {
  let t = e.indexOf(`?`),
    n = t === -1 ? e : e.slice(t + 1);
  if (!n) return rh;
  let r = [];
  for (let e of n.split(`&`)) {
    if (!e) continue;
    let t = e.indexOf(`=`),
      n = t === -1 ? e : e.slice(0, t);
    if (!n) continue;
    let i = mr(n);
    if (t === -1) r.push({ key: i, value: void 0 });
    else {
      let n = mr(e.slice(t + 1));
      r.push({ key: i, value: n });
    }
  }
  return r;
}
function gr({ children: e }) {
  let n = E(null),
    r = t(
      m(
        (e) => {
          n.current = e;
          let t = () => {
            e();
          };
          return (
            s.addEventListener(`popstate`, t),
            () => {
              ((n.current = null), s.removeEventListener(`popstate`, t));
            }
          );
        },
        () => s.location.search,
        () => ``
      )
    ),
    i = o(() => {
      n.current?.();
    }, []),
    a = pr(() => ({ searchEntries: hr(r), triggerUpdate: i }), [r, i]);
  return b(ug.Provider, { value: a, children: e });
}
function _r() {
  if (!dg) return;
  ((pg = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  dg.forEach((n) => t.addEventListener(n, fg, e));
}
function vr() {
  return (
    c(() => {
      if (!pg || !dg) return;
      let e = { capture: !0 },
        t = document.body;
      (dg.forEach((n) => t.removeEventListener(n, fg, e)),
        (dg = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function yr(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function br(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function xr() {
  ((Ng = new Mg()), Ng.render.markStart());
}
function Sr() {
  (h(() => {
    Ng?.useInsertionEffects.markRouterStart();
  }, []),
    re(() => {
      Ng?.useLayoutEffects.markRouterStart();
    }, []),
    c(() => {
      Ng?.useEffects.markRouterStart();
    }, []));
}
function Cr() {
  (h(() => {
    (Ng?.render.markEnd(), Ng?.useInsertionEffects.markStart());
  }, []),
    re(() => {
      if ((Ng?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        Pg = !0;
        return;
      }
      Me.read(() => {
        (Ng?.browserRendering.requestAnimationFrame.markStart(),
          Ng?.unattributedHydrationOverhead.measure());
      });
    }, []),
    c(() => {
      (Ng?.useEffects.markStart(),
        Ng?.browserRendering.hasStarted ||
          (Ng?.mutationEffects.measure(), Ng?.useEffects.markAreSynchronous()));
    }, []));
}
function wr() {
  (h(() => {
    Ng?.useInsertionEffects.markEnd();
  }, []),
    re(() => {
      (Ng?.useLayoutEffects.markEnd(),
        !(Pg || document.visibilityState !== `visible`) &&
          Me.read(() => {
            (Ng?.browserRendering.requestAnimationFrame.markEnd(),
              hn().then(() => {
                Ng?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    c(() => {
      Ng?.useEffects.markEnd();
    }, []));
}
function Tr() {
  return (Cr(), null);
}
function Er() {
  return (wr(), null);
}
function Dr(e, t) {
  let n = { style: t, 'data-framer-root': `` };
  return r.isValidElement(e) ? r.cloneElement(e, n) : b(e, { ...n });
}
function Or() {
  return Rg;
}
function kr(e) {
  if (zg?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      B(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: Mr(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          B(t, `localizedPath must be defined`);
          let i = Mr(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    for (let e in ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e), n)) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    zg = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: zg.pathRoutes,
    paths: zg.paths,
    pathRoutesLocalized: zg.pathRoutesLocalized,
    pathsLocalized: zg.pathsLocalized,
  };
}
function Ar(e, t, n = !0, r = Or()) {
  return jr(e, t, r, n);
}
function jr(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = kr(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = Nr(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = Nr(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = Nr(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = Nr(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function Mr(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function Nr(e, t) {
  let n = [],
    r = Pr(t).replace(Mh, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
      continue;
    }
    if (r === void 0) throw Error(`Path variable values cannot be undefined`);
    o[t] = r;
  }
  return { isMatch: !0, pathVariables: o };
}
function Pr(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Fr() {
  if (`PerformanceServerTiming` in s) {
    let e = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
    if (!e || e.length === 0) return new URLSearchParams();
    let t = e.find((e) => e.name === `abtests`);
    return t ? new URLSearchParams(t.description) : new URLSearchParams();
  }
  return new URLSearchParams();
}
function Ir(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n;
  if (!e[i]) return;
  let { abTestingParentId: a, ...o } = r,
    s = e[i].elements || r.elements ? { ...e[i].elements, ...r.elements } : void 0;
  e[i] = { ...o, elements: s, abTestingVariantId: n, abTestId: t };
}
function Lr(e, t) {
  for (let [n, r] of t) Ir(e, n, r);
}
function Rr(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function zr(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    { abTestingParentId: r, ...i } = e[t],
    a = e[n]?.elements || i.elements ? { ...e[n]?.elements, ...i.elements } : void 0;
  e[n] = { ...i, elements: a, abTestingVariantId: t };
}
function Br(e, t) {
  if (s === void 0) return t;
  let n = t;
  if (t) {
    zr(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (Lr(e, Fr()), Rr(e), n);
}
function Vr(e) {
  (c(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    h(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function Hr(e, ...t) {
  Bg.has(e) || (Bg.add(e), console.warn(e, ...t));
}
function Ur(e, t, n) {
  Hr(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function Wr(e) {
  return (
    typeof e == `object` &&
    !!e &&
    Ug in e &&
    e[Ug] instanceof Function &&
    Wg in e &&
    e[Wg] instanceof Function
  );
}
function Gr(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = Hg(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function Kr(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function qr(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Jr(e) {
  return Math.round(e * 2) / 2;
}
function Yr(e, t) {
  return { x: e, y: t };
}
function Xr(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0)
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  return u;
}
function Zr(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Qr(e) {
  let t = $r(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function $r(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function ei(e, t, n) {
  return (
    (qg.rgb_r = e / 255),
    (qg.rgb_g = t / 255),
    (qg.rgb_b = n / 255),
    qg.rgbToHsluv(),
    { h: qg.hsluv_h, s: qg.hsluv_s, l: qg.hsluv_l }
  );
}
function ti(e, t, n, r = 1) {
  return (
    (qg.hsluv_h = e),
    (qg.hsluv_s = t),
    (qg.hsluv_l = n),
    qg.hsluvToRgb(),
    { r: qg.rgb_r * 255, g: qg.rgb_g * 255, b: qg.rgb_b * 255, a: r }
  );
}
function ni(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function ri(e, t, n) {
  return {
    r: Zr(e) ? ui(e, 255) * 255 : 0,
    g: Zr(t) ? ui(t, 255) * 255 : 0,
    b: Zr(n) ? ui(n, 255) * 255 : 0,
  };
}
function ii(e, t, n, r) {
  let i = [
    pi(Math.round(e).toString(16)),
    pi(Math.round(t).toString(16)),
    pi(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function ai(e, t, n) {
  let r,
    i,
    a = ui(e, 255),
    o = ui(t, 255),
    s = ui(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function oi(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function si(e, t, n) {
  let r, i, a;
  if (((e = ui(e, 360)), (t = ui(t * 100, 100)), (n = ui(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = oi(s, o, e + 1 / 3)), (i = oi(s, o, e)), (a = oi(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function ci(e, t, n) {
  ((e = ui(e, 255)), (t = ui(t, 255)), (n = ui(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function li(e, t, n) {
  ((e = ui(e, 360) * 6), (t = ui(t * 100, 100)), (n = ui(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function ui(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    di(e) && (e = `100%`);
    let t = fi(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function di(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function fi(e) {
  return typeof e == `string` && e.includes(`%`);
}
function pi(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function mi(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = Kg[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = Jg.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = Jg.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = Jg.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: Qr(r[2] ?? ``), l: Qr(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = Jg.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: Qr(r[2] ?? ``),
              l: Qr(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = Jg.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: Qr(r[2] ?? ``), v: Qr(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = Jg.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: Qr(r[2] ?? ``),
                  v: Qr(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = Jg.hex8.exec(t))
                ? {
                    r: hi(r[1] ?? ``),
                    g: hi(r[2] ?? ``),
                    b: hi(r[3] ?? ``),
                    a: gi(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = Jg.hex6.exec(t))
                  ? {
                      r: hi(r[1] ?? ``),
                      g: hi(r[2] ?? ``),
                      b: hi(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = Jg.hex4.exec(t))
                    ? {
                        r: hi(`${r[1]}${r[1]}`),
                        g: hi(`${r[2]}${r[2]}`),
                        b: hi(`${r[3]}${r[3]}`),
                        a: gi(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = Jg.hex3.exec(t))
                      ? {
                          r: hi(`${r[1]}${r[1]}`),
                          g: hi(`${r[2]}${r[2]}`),
                          b: hi(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function hi(e) {
  return parseInt(e, 16);
}
function gi(e) {
  return hi(e) / 255;
}
function _i(e) {
  let t = Yg.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function vi(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function yi({ r: e, g: t, b: n, a: r }) {
  return { r: vi(e), g: vi(t), b: vi(n), a: r };
}
function bi(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function xi({ r: e, g: t, b: n, a: r }) {
  return { r: bi(e), g: bi(t), b: bi(n), a: r };
}
function Si({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function Ci(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function wi({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = Ci(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function Ti(e) {
  return $g(Qg(e));
}
function Ei(e) {
  return Zg(Xg(e));
}
function Di(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = Ai({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = Oi(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? Ai(e)
              : ji(e)),
    i
  );
}
function Oi(e) {
  let t = mi(e);
  if (t) return t.format === `hsl` ? ji(t) : t.format === `hsv` ? ki(t) : Ai(t);
}
function ki(e) {
  let t = li(e.h, e.s, e.v);
  return { ...ai(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Mi(e.a) };
}
function Ai(e) {
  let t = ri(e.r, e.g, e.b);
  return { ...ai(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Mi(e.a) };
}
function ji(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = Zr(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Zr(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = $r(e.s)),
    (r = Zr(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = $r(e.l)),
    (i = si(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function Mi(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function Ni({ children: e }) {
  if (d(p_).top) return b(O, { children: e });
  let t = E({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    n = E({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    r = E(new Set()).current,
    i = E({
      getLayoutId: o(({ id: e, name: i, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = i ? `byName` : `byId`,
          s = t.current[o][e];
        if (s) return s;
        let c = i || e;
        if (!a && !r.has(c) && (!t.current.byLayoutId[c] || t.current.byLayoutId[c] === c))
          return (
            t.current.count[o][c] === void 0 &&
              ((t.current.count[o][c] = 0), (t.current.byLayoutId[c] = c), (n.current[o][e] = c)),
            r.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            B(!!c, `duplicatedId must be defined`);
            let u = t.current[o][c],
              d = t.current.byLastId[c];
            if (d && !l) {
              let e = t.current.byLayoutId[d],
                n = !e || e === i;
              d && !r.has(d) && (!i || n) && (l = [d, c]);
            }
            let f = u ? t.current.byLayoutId[u] : void 0,
              p = !f || f === i;
            if (u && !r.has(u) && (!i || p))
              return ((n.current[o][e] = u), (n.current.byLastId[c] = u), r.add(u), u);
          }
        let u = t.current.byLastId[e];
        if (u && !r.has(u)) return (r.add(u), (n.current.byId[e] = u), u);
        if (l) {
          let [t, i] = l;
          return ((n.current[o][e] = t), (n.current.byLastId[i] = t), r.add(t), t);
        }
        let d = t.current.byPossibleId[e];
        if (d && !r.has(d)) return (r.add(d), (n.current.byId[e] = d), d);
        let f = a?.[0],
          p = i || f || e,
          { layoutId: m, value: h } = Pi(p, (t.current.count[o][p] ?? -1) + 1, r);
        if (((t.current.count[o][p] = h), (n.current[o][e] = m), a?.length && !i)) {
          let e = a[a.length - 1];
          if ((e && (n.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 && (n.current.byPossibleId[t] || (n.current.byPossibleId[t] = m));
            }
        }
        return ((n.current.byLayoutId[m] = c), r.add(m), m);
      }, []),
      persistLayoutIdCache: o(() => {
        ((t.current = {
          byId: { ...t.current.byId, ...n.current.byId },
          byLastId: { ...t.current.byLastId, ...n.current.byLastId },
          byPossibleId: { ...t.current.byPossibleId, ...n.current.byPossibleId },
          byName: { ...t.current.byName, ...n.current.byName },
          byLastName: { ...t.current.byLastName, ...n.current.byLastName },
          byLayoutId: { ...t.current.byLayoutId, ...n.current.byLayoutId },
          count: { ...t.current.count, byName: {} },
        }),
          (n.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
          }),
          r.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return b(p_.Provider, { value: i, children: e });
}
function Pi(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function Fi({ enabled: e = !0, ...t }) {
  let n = d(p_),
    r = f(() => ({ ...n, enabled: e }), [e]);
  return b(p_.Provider, { ...t, value: r });
}
function Ii(e) {
  let t = E(null);
  return (t.current === null && (t.current = e()), t.current);
}
function Li(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Ri(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return D(`div`, {
    style: h_,
    children: [
      b(`div`, { className: `text`, style: __, children: r }),
      i && b(`div`, { className: `text`, style: v_, children: i }),
    ],
  });
}
function Ri(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function H(e) {
  return Number.isFinite(e);
}
function zi(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function Bi(e) {
  return typeof e != `string` && typeof e != `number`;
}
function Vi(e) {
  return e != null && typeof e != `boolean` && !zi(e);
}
function Hi(e) {
  return e * (Math.PI / 180);
}
function Ui(e) {
  return nt(e) ? !1 : e === 2 || e === 5;
}
function Wi(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function Gi(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return Ki(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function Ki(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      V(e, `unknown constraint key`);
  }
}
function qi(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(Gi(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(Gi(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function Ji(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(Gi(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(Gi(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function Yi(e, t, n, r, i) {
  let a = Ji(H(e) ? e : C_, n, r, i),
    o = qi(H(t) ? t : w_, n, r, i);
  return (
    H(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (H(n.left) && H(n.right)
        ? (o = a / n.aspectRatio)
        : (H(n.top) && H(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function Xi(e, t) {
  return !H(e) || !H(t) ? null : e + t;
}
function Zi(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function Qi(e) {
  return !e._constraints || Zi(e) ? !1 : e._constraints.enabled;
}
function $i(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    H(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    H(n) && H(r) ? { width: n, height: r } : null
  );
}
function ea(e) {
  let t = $i(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return H(n) && H(r) ? { x: n, y: r, ...t } : null;
}
function ta(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Qi(e) || r) return ea(e);
  let i = na(e),
    a = ra(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return S_.toRect(i, o, null, n, null);
}
function na(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = x_.quickfix({
      left: H(t),
      right: H(n),
      top: H(r),
      bottom: H(i),
      widthType: Wi(c),
      heightType: Wi(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function ra(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function ia() {
  return r.useContext(T_).parentSize;
}
function aa(e) {
  return typeof e == `object`;
}
function oa(e) {
  return aa(e) ? e.width : e;
}
function sa(e) {
  return aa(e) ? e.height : e;
}
function ca(e, t) {
  return b(E_, { parentSize: t, children: e });
}
function la(e) {
  return ta(e, ia(), !0);
}
function ua({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function da(e, t, n = k_) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!A_) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) A_ = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = A_;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function fa() {
  if (X_ !== void 0) return X_;
  let e = document.createElement(`div`);
  (Object.assign(e.style, {
    position: `absolute`,
    display: `flex`,
    flexDirection: `column`,
    rowGap: `1px`,
  }),
    e.appendChild(document.createElement(`div`)),
    e.appendChild(document.createElement(`div`)),
    document.body.appendChild(e));
  let t = e.scrollHeight === 1;
  return (e.parentNode && e.parentNode.removeChild(e), (X_ = t), t);
}
function pa() {
  Q_ || ((Q_ = !0), !fa() && document.body.classList.add(Z_));
}
function ma(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? nv.variable(e) : e === `` ? `""` : e;
}
function ha(e, t) {
  return nv.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function ga() {
  return J.current() === J.preview ? Yv : Jv;
}
function _a(e) {
  return q_(e, ga, `framer-lib-combinedCSSRules`);
}
function va(e) {
  return z(e) || Qe(e);
}
function ya(e) {
  return !!e && Xv in e && e[Xv] === !0;
}
function ba(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
        return L(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return $e(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return nt(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return et(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return et(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = z(e.defaultValue) ? e.defaultValue : {};
        return (z(e.controls) && xa(t, e.controls), t);
      }
      case `array`:
        return et(e.defaultValue) ? e.defaultValue : void 0;
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function xa(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!nt(i) || ya(r)) continue;
    let a = ba(r);
    nt(a) || (e[n] = a);
  }
}
function Sa(e) {
  if (z(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function Ca(e, t) {
  va(e) && xa(Sa(e), t);
}
function wa(e, t) {
  (Object.assign(e, { propertyControls: t }), Ca(e, t));
}
function Ta(e) {
  return e.propertyControls;
}
function Ea() {
  let e = J.current();
  return e === J.canvas || e === J.export;
}
function Da() {
  let [e] = p(() => Ea());
  return e;
}
function Oa(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function ka(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of oy) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function Aa(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function ja(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < sy) continue;
    let n = Aa(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${Aa(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function Ma(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of ay) {
    let n = Aa(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function Na(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = Ma(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: ja(n, t, ka(t.pixelWidth, t.pixelHeight)) };
}
function Pa() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: lt(X.imagePlaceholderSvg),
  };
}
function Fa(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function Ia(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function La(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...iy,
    objectPosition: Ia(e.positionX, e.positionY),
    objectFit: Fa(e.fit),
  };
}
function Ra(e) {
  let t = r.useRef(e ? `auto` : `async`),
    n = o((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    i = o(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    a = o(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: i, onImageMount: a };
}
function za({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = X.useImageSource(e, t, n),
    s = La(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = Ra(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : Na(e.nodeFixedSize, e, o);
  return b(`img`, {
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function Ba({ image: e, containerSize: t, nodeId: n }) {
  let i = r.useRef(null),
    a = X.useImageElement(e, t, n),
    o = La(e);
  return (
    r.useLayoutEffect(() => {
      let e = i.current;
      if (e !== null)
        return (
          e.appendChild(a),
          () => {
            e.removeChild(a);
          }
        );
    }, [a]),
    Object.assign(a.style, o),
    b(`div`, { ref: i, style: { display: `contents`, ...iy } })
  );
}
function Va({ nodeId: e, image: t, containerSize: n }) {
  let i = r.useRef(null),
    a = X.useImageSource(t, n, e);
  return (
    r.useLayoutEffect(() => {
      let n = i.current;
      if (n === null) return;
      let r = La(t);
      X.renderOptimizedCanvasImage(n, a, r, e);
    }, [e, t, a]),
    b(`div`, { ref: i, style: { display: `contents`, ...iy } })
  );
}
function Ha({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (L(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = R(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = Jr(e * (t.pixelWidth / 2)),
        s = X.useImageSource(t, n);
      ((r = {
        ...cy,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: Ia(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        J.current() === J.canvas
          ? X.canRenderOptimizedCanvasImage(X.useImageSource(t))
            ? b(Va, { image: t, ...n })
            : b(Ba, { image: t, ...n })
          : b(za, { image: t, avoidAsyncDecoding: J.current() === J.export, ...n });
  let o = a ? cy : (r ?? { ...cy, ...Pa() });
  return i
    ? b(_e.div, { layoutId: e, style: o, 'data-framer-background-image-wrapper': !0, children: a })
    : b(`div`, { style: o, 'data-framer-background-image-wrapper': !0, children: a });
}
function Ua(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  if (
    (typeof r == `number`
      ? (o = s = c = l = r)
      : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    !(o === 0 && s === 0 && c === 0 && l === 0))
  ) {
    if (n && o === s && o === c && o === l) {
      t.border = `${o}px ${i} ${a}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${o}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${c}px`),
      (t.borderRightWidth = `${l}px`));
  }
}
function Wa(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...iy,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), b(_e.div, { style: n }))
    : (Ua(e, n, !1), b(_e.div, { 'data-frame-border': !0, style: n, layoutId: t }));
}
function Ga(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function Ka(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !uy.isImageObject(t)) return;
  let r = null;
  if (((r = L(n) ? { alt: ``, src: n } : Hg.get(t, null)), uy.isImageObject(r))) return Ga(r, e);
}
function qa(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Ja(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? _e[e] : _e.div;
}
function Ya(e, t) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` ? !0 : void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` ? !0 : void 0));
}
function Xa(e) {
  let t = {};
  return (!e || !dy || J.current() !== J.canvas || Ya(t, e), t);
}
function Za(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function Qa(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = r.Children.map(t, (e) =>
        r.isValidElement(e) ? r.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function $a(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function eo(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: r, layoutIdKey: i, duplicatedFrom: a, __fromCodeComponentNode: o = !1, drag: s } = e,
    { getLayoutId: c, enabled: l } = d(p_);
  return f(() => {
    if (!l) return e.layoutId;
    let u = t || e.layoutId;
    if (!u && (s || !i || o)) return;
    let d = u || c({ id: i, name: r, duplicatedFrom: a });
    if (d) return n ? `${d}-${n}` : d;
  }, [l]);
}
function to() {
  let [e, t] = r.useState(0);
  return r.useCallback(() => t((e) => e + 1), []);
}
function no(e) {
  let t = to();
  c(() => {
    let n = e?.current;
    if (n)
      return (
        hy?.observeElementWithCallback(e.current, t),
        () => {
          hy?.unobserve(n);
        }
      );
  }, [e, t]);
}
function ro(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(gy)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(io)
    .map(ao);
}
function io(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function ao(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(io);
  return t ? ao(t) : e;
}
function oo(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = d(py),
    l = J.current() === J.canvas;
  fy(() => {
    !l ||
      c ||
      s ||
      (t.current && i && a && o && X.queueMeasureRequest(Za(i), t.current, n(t.current)));
  });
}
function so(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && X.queueMeasureRequest(Za(t.id), t, ro(t));
}
function co(e) {
  e.willChange = `transform`;
  let t = J.current() === J.canvas;
  yy && t && (e.translateZ = _y);
}
function lo(e) {
  ((e.willChange = `transform`), uo(e, !0));
}
function uo(e, t) {
  let n = J.current() === J.canvas;
  if (!yy || !n) return;
  let r = (L(e.transform) && e.transform) || ``;
  t ? r.includes(vy) || (e.transform = r + vy) : (e.transform = r.replace(vy, ``));
}
function fo(e, t, n, r = !0) {
  if (!e) return;
  let i = Zv(e.style),
    a = n || i[t],
    o = () => {
      po(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function po(e) {
  return L(e) || R(e) || rt(e);
}
function mo(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function ho(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  mo(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function go(e, t) {
  let n = [e, t];
  return Cy.test(e) ? e : ho(1e3, wy, n, () => Sy.multiplyAlpha(e, t));
}
function _o(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: go(e.value, t) }))
  );
}
function vo(e, t) {
  let n = 0;
  return (
    _o(e, t).forEach((e) => {
      n ^= xy(e.value) ^ e.position;
    }),
    n
  );
}
function yo(e) {
  return e && Ty.every((t) => t in e);
}
function bo(e) {
  return e && Ey.every((t) => t in e);
}
function xo({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || n_(t)
      ? (n.backgroundColor = t)
      : q.isColorObject(e) && (n.backgroundColor = e.initialValue || q.toRgbString(e))
    : e &&
      ((e = Hg.get(e, null)),
      typeof e == `string` || n_(e)
        ? (n.background = e)
        : Oy.isLinearGradient(e)
          ? (n.background = Oy.toCSS(e))
          : Ay.isRadialGradient(e)
            ? (n.background = Ay.toCSS(e))
            : q.isColorObject(e) && (n.backgroundColor = e.initialValue || q.toRgbString(e)));
}
function U(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function So(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function Co(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function wo(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    Ee(n)
      ? (t.cornerShape = ae(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    U(e, `size`, t),
    U(e, `width`, t),
    U(e, `height`, t),
    U(e, `minWidth`, t),
    U(e, `minHeight`, t),
    U(e, `top`, t),
    U(e, `right`, t),
    U(e, `bottom`, t),
    U(e, `left`, t),
    U(e, `position`, t),
    U(e, `overflow`, t),
    U(e, `opacity`, t),
    (!e._border || !e._border.borderWidth) && U(e, `border`, t),
    U(e, `borderRadius`, t),
    U(e, `radius`, t, `borderRadius`),
    U(e, `color`, t),
    U(e, `shadow`, t, `boxShadow`),
    U(e, `x`, t),
    U(e, `y`, t),
    U(e, `z`, t),
    U(e, `rotate`, t),
    U(e, `rotateX`, t),
    U(e, `rotateY`, t),
    U(e, `rotateZ`, t),
    U(e, `scale`, t),
    U(e, `scaleX`, t),
    U(e, `scaleY`, t),
    U(e, `skew`, t),
    U(e, `skewX`, t),
    U(e, `skewY`, t),
    U(e, `originX`, t),
    U(e, `originY`, t),
    U(e, `originZ`, t),
    xo(e, t),
    t
  );
}
function To(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof Zv(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function Eo(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (My.has(t)) return `pointer`;
}
function Do(e) {
  return Oo(e) ? !0 : e.style ? !!Oo(e.style) : !1;
}
function Oo(e) {
  return Ny in e && (e[Ny] === `scroll` || e[Ny] === `auto`);
}
function ko(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = ve(e.minWidth),
    h = ve(e.minHeight),
    g = ve(e.maxWidth),
    _ = ve(e.maxHeight);
  return {
    top: ve(n),
    left: ve(t),
    bottom: ve(r),
    right: ve(i),
    width: ve(a),
    height: ve(o),
    size: ve(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function Ao(e) {
  let t = d(py),
    { style: n, _initialStyle: i, __fromCanvasComponent: a, size: o } = e,
    s = ko(e),
    c = la(s),
    l = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: J.current() === J.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let u = !To(e) && !e.__fromCanvasComponent && !Do(e),
    f = e.style ? !(`pointerEvents` in e.style) : !0;
  u && f && (l.pointerEvents = `none`);
  let p = r.Children.count(e.children) > 0 &&
      r.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    m = wo(e);
  (o === void 0 && !a && (So(m) || (l.width = Py.width), Co(m) || (l.height = Py.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight));
  let h = {};
  (Qi(s) &&
    c &&
    !ua(e) &&
    (h = { left: c.x, top: c.y, width: c.width, height: c.height, right: void 0, bottom: void 0 }),
    Object.assign(l, p, i, m, h, n),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    by.applyWillChange(e, l, !0));
  let g = l;
  l.transform || (g = { x: 0, y: 0, ...l });
  let _ = Ea();
  return (
    e.positionSticky
      ? (!_ || X.isOnPageCanvas || t) &&
        ((g.position = `sticky`),
        (g.willChange = `transform`),
        (g.zIndex = 1),
        (g.top = e.positionStickyTop),
        (g.right = e.positionStickyRight),
        (g.bottom = e.positionStickyBottom),
        (g.left = e.positionStickyLeft))
      : _ &&
        (e.positionFixed
          ? (g.position = X.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (g.position = `absolute`)),
    `rotate` in g && g.rotate === void 0 && delete g.rotate,
    [g, c]
  );
}
function jo(e) {
  let t = {};
  for (let n in e)
    (Xe(n) || $v(n)) && !Fy.has(n)
      ? (t[n] = Zv(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof Zv(e)[n] != `boolean` && !e.transition && (t.transition = Zv(e)[n]));
  return t;
}
function Mo(e) {
  return `data-framer-name` in e;
}
function No(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function Po(e) {
  return b(_e.div, { layoutId: Ry, style: Vy, children: e.children });
}
function Fo(e, t) {
  Qe(e) ? e(t) : Io(e) && (e.current = t);
}
function Io(e) {
  return z(e) && `current` in e;
}
function Lo() {
  let e = Ii(() => new Set()),
    t = Ii(() => new Map());
  return Ii(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      if (i !== n.current) {
        if (
          ((n.current = i),
          r && r(i),
          t.forEach((e, t) => {
            e ? e() : t(null);
          }),
          i === null)
        ) {
          (t.clear(), e.clear());
          return;
        }
        e.forEach((e) => {
          let n = e(i);
          t.set(e, n);
        });
      }
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function Ro(e) {
  let t = E(null),
    n = Lo();
  return Ii(() => (Io(e) ? n(e) : Qe(e) ? n(t, e) : n(t)));
}
function zo(e, t, n) {
  let r = E(),
    i = E();
  (pr(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function Bo(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new Hy({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Vo(e, t, n) {
  let r = Ii(() => `${n.rootMargin}`),
    i = d(Uy),
    { enabled: a, root: o, rootMargin: s, threshold: c } = n;
  zo(
    e,
    (e) => {
      if (a && e !== null) return Bo(i, r, e, o, t, s, c);
    },
    [a, t, o, s, c]
  );
}
function Ho(e, t, n) {
  let i = r.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: a, animateOnce: o, threshold: s, rootMargin: c = `0px 0px 0px 0px` } = n;
  Wy(
    e,
    r.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: r } = i.current,
          a = Wo(e, s?.y ?? 0);
        if (a && !n) {
          if (o && r) return;
          ((i.current.hasAnimatedOnce = !0), (i.current.isInView = !0), t(!0));
          return;
        }
        if (!a && n) {
          if (((i.current.isInView = !1), o)) return;
          t(!1);
          return;
        }
      },
      [o, s?.y, t]
    ),
    { threshold: Gy, rootMargin: c, enabled: a ?? !0 }
  );
}
function Uo(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, K.innerHeight);
}
function Wo({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && Uo(t, e) >= r;
}
function Go() {
  return d(Yy);
}
function Ko() {
  return new Map();
}
function qo() {
  return Ii(Ko);
}
function Jo(e, t = []) {
  let { register: n, deregister: r } = d(Xy);
  c(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function Yo(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function Xo(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (H(t.originX) && (r.originX = t.originX),
      H(t.originY) && (r.originY = t.originY),
      H(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (H(n.originX) && (r.originX = n.originX),
      H(n.originY) && (r.originY = n.originY),
      H(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function Zo(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function Qo(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return nb.PushLeft;
    case `left`:
      return nb.PushRight;
    case `bottom`:
      return nb.PushUp;
    case `top`:
      return nb.PushDown;
  }
}
function $o(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return nb.OverlayLeft;
    case `left`:
      return nb.OverlayRight;
    case `bottom`:
      return nb.OverlayUp;
    case `top`:
      return nb.OverlayDown;
  }
}
function es(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return nb.FlipLeft;
    case `left`:
      return nb.FlipRight;
    case `bottom`:
      return nb.FlipUp;
    case `top`:
      return nb.FlipDown;
  }
}
function ts(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return rs(e, t.transition, t.component);
    case `removeOverlay`:
      return is(e);
    case `add`:
      return as(e, t.key, t.transition, t.component);
    case `remove`:
      return cs(e);
    case `update`:
      return ns(e, t.key, t.component);
    case `back`:
      return os(e);
    case `forward`:
      return ss(e);
    default:
      return;
  }
}
function ns(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function rs(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function is(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function as(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i && i.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? ps(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = ds(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = ls(e, t, c),
    p = fs(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function os(e) {
  let t = { ...e.containers },
    n = cs(e);
  if (n) return ((n.containers = t), n);
}
function ss(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = as(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function cs(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (B(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = us(e, r, n),
    u = fs(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function ls(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function us(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function ds(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function fs(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = ms(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function ps(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1
        ? !0
        : !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function ms(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return hs(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return hs(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return hs(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return hs(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function hs(e, t, n) {
  let r = {},
    i = {};
  return (
    ib.forEach((e) => {
      ((r[e] = $y[e]), (i[e] = { ...n, from: $y[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${Zv($y)[a]}%` : Zv($y)[a];
        ((Zv(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function gs(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function _s({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function vs({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
      ? t.transition.animation
      : cb;
}
function ys({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function bs(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function xs(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  } else if (e < n) {
    let t = r[e + 1];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  } else {
    let t = r[e];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  }
}
function Ss(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function Cs(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function ws(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let t = r[e + 1];
      if (t && t.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t && t.transition) return t.transition.enter;
    }
}
function Ts(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t && t.transition.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t && t.transition.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return cb;
}
function Es(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function Ds(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function Os(e) {
  return r.Children.map(e.component, (t) => {
    if (!Vi(t) || !Bi(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      i = e?.transition?.position,
      a = !i || (i.left !== void 0 && i.right !== void 0),
      o = !i || (i.top !== void 0 && i.bottom !== void 0),
      s = `style` in t.props ? z(t.props.style) : !0;
    return (
      a && (`width` in t.props && (n.width = `100%`), s && (n.style.width = `100%`)),
      o && (`height` in t.props && (n.height = `100%`), s && (n.style.height = `100%`)),
      r.cloneElement(t, n)
    );
  });
}
function ks(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function As(e) {
  let t = be(),
    n = le();
  return b(sb, { ...e, resetProjection: t, skipLayoutAnimation: n, children: e.children });
}
function js(e) {
  return hb in e;
}
function Ms(e, t) {
  if (!js(e)) return;
  let n = Hg.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function Ns(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function Ps(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function Fs(e, t) {
  let n = [];
  (H(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    H(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    H(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    H(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    H(e.invert) && n.push(`invert(${e.invert / 100})`),
    H(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    H(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    H(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Ns(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function Is(e, t) {
  H(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Ls(e, t) {
  (Is(e, t), Fs(e, t));
}
function Rs(e, t) {
  let n,
    r = (...r) => {
      (K.clearTimeout(n), (n = K.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      K.clearTimeout(n);
    }),
    r
  );
}
function zs(...e) {
  return e.filter(Boolean).join(` `);
}
function Bs(e) {
  if (e.startsWith(bb)) return e.substr(xb);
}
function Vs(e, t, n) {
  let r = i.map(e, (e) => (S(e) ? u(e, t) : e));
  return n ? r : b(O, { children: r });
}
function Hs(e) {
  let t = Ii(() => Us(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function Us(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = Ws(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = Ws(t)));
    },
    r = !1;
  function a(a, o) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      i.count(a) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      i.map(a, (e) => {
        if (S(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = Qe(o) ? o(e.props) : o;
          return u(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let o = function (e, t) {
    return b(O, { children: a(e, t) });
  };
  return (
    (o.cloneAsArray = a),
    {
      useSetup: (e) => {
        ((r = !1), n(e, t.childRef));
      },
      cloneAsElement: o,
    }
  );
}
function Ws(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (Fo(n, e), Fo(t, e));
  };
}
function Gs(e, t, n, i, a, o, s, c) {
  let l = r.Children.toArray(t),
    u = l[0];
  if (l.length !== 1 || !r.isValidElement(u))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      s(t, n)
    );
  let d = [],
    f = [];
  for (let [t] of Object.entries(i)) {
    if (t === a) continue;
    let n = e[t];
    if (!n || !Ys(u.props, n)) {
      f.push(t);
      continue;
    }
    let r = Js([t], o);
    r.length && d.push({ variants: r, propOverrides: n });
  }
  if (d.length === 0) return s(u, n);
  let p = Js([a, ...f], o);
  p.length && d.unshift({ variants: p });
  let m = [];
  for (let { variants: e, propOverrides: t } of d) {
    if (c && !e.includes(c)) continue;
    let r = e.join(`+`),
      l = b(
        Cb.Provider,
        {
          value: { primaryVariantId: a, variants: new Set(e) },
          children: s(u, t ? { ...n, ...t } : n),
        },
        r
      ),
      f = qs(e, o, i);
    (f.length
      ? (B(d.length > 1, `Must branch out when there are hiddenClassNames`),
        (l = b(`div`, { className: `${wb} ${f.join(` `)}`, children: l }, r)))
      : B(d.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      m.push(l));
  }
  return (
    B(!c || m.length === 1, `Must render exactly one branch when activeVariantId is given`),
    m
  );
}
function Ks(e) {
  return e.split(`-`)[2];
}
function qs(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${Ks(a)}`);
  }
  return r;
}
function Js(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function Ys(e, t) {
  for (let n of Object.keys(t)) if (!Et(e[n], t[n], !0)) return !0;
  return !1;
}
function Xs(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function Zs(e) {
  return r.forwardRef(({ optimized: t, ...n }, i) => {
    let a = r.useContext(Sb),
      o = r.useContext(Cb)?.variants,
      s = n[Ib];
    s && !M_() && Pb.setAll(s, o, t ? n : null, a);
    let c = Rb(n);
    return b(e, { ref: i, ...n, ...c });
  });
}
function Qs(e) {
  return L(e) || Array.isArray(e);
}
function $s(e) {
  return e in Vb;
}
function ec(e, t) {
  let n = Ii(() => ({ values: Bb(t ? e : void 0) }));
  return (
    r.useEffect(() => {
      if (!t)
        for (let e of zb) {
          let t = Vb[e];
          nt(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function tc(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: t,
    loopTransition: n,
    loopRepeatType: r,
    loop: i,
    loopPauseOffscreen: a,
  },
  s
) {
  let l = oe(),
    u = Ii(Bb),
    d = E(!1),
    m = Gb(),
    h = E(null),
    g = o(async () => {
      if (!i) return;
      let e = n || void 0,
        t = d.current && r === `mirror`,
        a = t ? Vb : i,
        o = t ? i : Vb;
      return (
        (d.current = !d.current),
        (h.current = Promise.all(
          zb.map((t) => {
            if (!(l && t !== `opacity`))
              return (
                u[t].jump(o[t] ?? Vb[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    i = a[t] ?? o[t];
                  typeof i == `number` && Ae(u[t], i, r);
                })
              );
          })
        )),
        h.current
      );
    }, [i, r, n, l]),
    [_, v] = p(!1),
    y = E(!1),
    b = o(async () => {
      !e || !y.current || (await g(), await m(t ?? 0), b());
    }, [g, m, e, t]),
    x = o(() => {
      y.current || ((y.current = !0), k(() => v(!0)), b());
    }, [b]),
    S = o((e = !0) => {
      (zb.forEach((e) => {
        u[e].stop();
      }),
        zb.forEach((e) => {
          u[e].set(Vb[e]);
        }),
        (d.current = !1),
        e && ((y.current = !1), k(() => v(!1))));
    }, []),
    C = e && i,
    w = o(() => {
      document.hidden ? S(!1) : y.current && ((y.current = !1), x());
    }, [x, S]);
  (c(() => {
    if (C)
      return (
        document.addEventListener(`visibilitychange`, w),
        () => {
          document.removeEventListener(`visibilitychange`, w);
        }
      );
  }, [C, w]),
    c(() => {
      (C && a) || (C ? x() : S());
    }, [x, S, a, C]),
    c(() => () => S(), [S]));
  let T = E(!1),
    D = o(async () => {
      h.current && (await h.current, !T.current && S());
    }, [S]);
  Wy(
    s,
    o(
      (e) => {
        e.isIntersecting ? ((T.current = !0), x()) : ((T.current = !1), D());
      },
      [x, D]
    ),
    { enabled: C && a }
  );
  let ee = _ || !a;
  return f(() => ({ values: u, style: C && ee ? Hb : Ub }), [C, ee]);
}
function nc(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function rc(e, t, n) {
  let { speed: i = 100, offset: a = 0, adjustPosition: o = !1, parallaxTransformEnabled: s } = e,
    c = r.useRef(null),
    l = oe(),
    u = r.useCallback(
      (e) => (c.current === null || i === 100 ? 0 : nc(e, c.current, i, a, o)),
      [i, a, o]
    ),
    { scrollY: f } = ue(),
    p = xe(f, u),
    m = pe(o && c.current === null ? `hidden` : n),
    h = pe(0),
    g = d(Uy);
  return (
    zo(
      t,
      (e) => {
        if (e === null || !s) return;
        let t = Bo(g, `undefined`, e, null, (e) => {
          ((c.current = e.boundingClientRect.top),
            Me.update(() => {
              (p.set(u(f.get())), o && m.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [o, s]
    ),
    Nt(() => {
      s && p.set(0);
    }),
    { values: { y: l || !s ? h : p }, style: s ? { ...Hb, visibility: m } : Ub }
  );
}
function ic(e) {
  return typeof e == `object` && !!e;
}
function ac(e) {
  if (ic(e)) return e?.transition;
}
function oc(e, t, n, r, i, a) {
  let o = ac(e);
  return Promise.all(
    zb.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = ic(e) ? (e?.[s] ?? Vb[s]) : Vb[s];
          if ((Ee(u) && (u = u.get()), !R(u))) return c();
          let d = fe.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (L(i) && !l?.hasAnimated && K.MotionHandoffAnimation) {
            let e = K.MotionHandoffAnimation(i, s, Me);
            e && (f = e);
          }
          a ? l.set(u) : Ae(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function sc(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  o,
  s,
  c,
  l
) {
  let u = r ?? e,
    d = i ?? t,
    p = a ?? n,
    [m, h] = ge(),
    g = E({ lastPresence: !1, lastAnimate: d, hasMounted: !1, running: !1 }),
    _ = Ii(() => {
      let e = u ?? c;
      if (!z(e)) return { values: Bb() };
      let t = {};
      for (let n in e) {
        let r = z(e) ? e[n] : void 0;
        R(r) && (t[n] = r);
      }
      return { values: Bb(t) };
    });
  zo(
    o,
    (e) => {
      let { hasMounted: t } = g.current;
      if (t && d) return;
      let n = fe.get(e);
      if (n)
        for (let e in (Object.assign(g.current, { hasMounted: !0 }), _.values)) {
          if (!$s(e)) continue;
          let t = c?.[e];
          n.setBaseTarget(e, R(t) ? t : Vb[e]);
        }
    },
    [d]
  );
  let v = oe();
  zo(o, (e) => {
    if (!s) {
      h?.();
      return;
    }
    if (e === null) return;
    if (m !== g.current.lastPresence) {
      (Object.assign(g.current, { lastPresence: m }),
        m
          ? u &&
            d &&
            (Object.assign(g.current, { running: !0 }),
            oc(d, _, v, o, l).then(() => Object.assign(g.current, { running: !1 })))
          : p
            ? (Object.assign(g.current, { running: !0 }),
              oc(p, _, v, o, l)
                .then(() => Object.assign(g.current, { running: !1 }))
                .then(() => h()))
            : h());
      return;
    }
    let { lastAnimate: t, running: n } = g.current;
    Et(d, t) ||
      !d ||
      (Object.assign(g.current, { lastAnimate: d }),
      oc(d, _, v, o, l, !n).then(() => Object.assign(g.current, { running: !1 })));
  });
  let y = s && d;
  return f(() => ({ values: _.values, style: y ? Hb : Ub }), [y]);
}
function cc(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; ) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function lc(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o || !o.current) continue;
    let c = cc(o.current, document.documentElement) - Jb - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function uc(e, t = 0) {
  return e < t ? `up` : `down`;
}
function dc(e, t, n = {}) {
  let { direction: i, target: a } = e ?? {},
    { repeat: o = !0, enabled: s = !0 } = n,
    c = Mt();
  r.useEffect(() => {
    if (!i || !s) return;
    let e,
      n = 0,
      r,
      c;
    return ce((s, { y: l }) => {
      if ((!o && c === a) || l.current > l.scrollLength || l.current < 0) return;
      let u = uc(l.current, e);
      e = l.current;
      let d = u !== r;
      if (((r = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < Yb) return;
        let e = u === i ? a : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [c, i, o, a, s, t]);
}
function fc(e, t, n) {
  let r = lc(e, t),
    i = [...Zb],
    a = r[0];
  if (!R(a)) return Qb;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!R(e)) return Qb;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function pc(e) {
  return {
    x: e?.x ?? Vb.x,
    y: e?.y ?? Vb.y,
    scale: e?.scale ?? Vb.scale,
    opacity: e?.opacity ?? Vb.opacity,
    transformPerspective: e?.transformPerspective ?? Vb.transformPerspective,
    rotate: e?.rotate ?? Vb.rotate,
    rotateX: e?.rotateX ?? Vb.rotateX,
    rotateY: e?.rotateY ?? Vb.rotateY,
    skewX: e?.skewX ?? Vb.skewX,
    skewY: e?.skewY ?? Vb.skewY,
    transition: e?.transition ?? void 0,
  };
}
function mc({ opacity: e, targetOpacity: t, perspective: n, enter: i, exit: a, animate: o, ...s }) {
  return r.useMemo(
    () => ({
      initial: i ?? pc({ ...s, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: o ?? pc({ opacity: t }),
      exit: a ?? pc(),
    }),
    [o, s, i, a, e, t, n]
  );
}
function hc(e, t) {
  let n = oe(),
    i = mc(e),
    a = e.styleAppearEffectEnabled,
    o = ec(a ? i.initial : i.animate, a),
    s = r.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    c = Mt(),
    l = r.useRef(),
    u = r.useCallback(async ({ transition: r, ...a }, s) => {
      let c = r ?? i.animate.transition ?? e.transition;
      await l.current;
      let u = fe.get(t.current);
      l.current = Promise.all(
        zb.map((e) => {
          s && o.values[e].set(i.initial[e] ?? Vb[e]);
          let t = a[e] ?? Vb[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (R(t) && o.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...c, onComplete: () => r() };
                typeof t == `number` && Ae(o.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    d = e.animateOnce && s.current.lastAppearState === !0;
  Ho(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = s.current;
      if (t) {
        s.current.scheduledAppearState = e;
        return;
      }
      ((s.current.scheduledAppearState = void 0),
        (s.current.lastAppearState = e),
        n !== e && u(e ? i.animate : i.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !d,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let p = e.targets && a && !e.scrollDirection;
  return (
    r.useEffect(() => {
      if (!p) return;
      let t = { initial: !0 },
        n = `initial`;
      return ce((r, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = fc(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let l = Ie(a.current, s, c);
        if ((e.animateOnce && t[l]) || ((t[l] = !0), n === l)) return;
        n = l;
        let d = Zv(i)[l];
        d && u(d);
      });
    }, [c, p]),
    dc(e.scrollDirection, (e) => void u(e ?? i.animate), { enabled: a, repeat: !e.animateOnce }),
    Nt(() => {
      if (a && !(!e.targets && !e.scrollDirection))
        for (let e of zb) o.values[e].set(i.initial?.[e] ?? Vb[e]);
    }),
    f(() => ({ values: o.values, style: a ? Hb : Ub }), [a])
  );
}
function gc(e, t) {
  let n = r.useRef({});
  r.useEffect(() => {
    if (t !== void 0)
      for (let r of $m(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = He({
                keyframes: [a.get(), s],
                velocity: a.getVelocity(),
                ...t,
                restDelta: 0.001,
                onUpdate: o,
              })));
          },
          a = e[r],
          o,
          s;
        a.attach((e, t) => ((s = e), (o = t), Me.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function _c(e, t) {
  let n = tx();
  return {
    inputRange: lc(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of zb) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function vc(e) {
  let t = tx();
  for (let { target: n } of e) for (let e of zb) t[e]?.push(n[e]);
  return t;
}
function yc(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: i,
    transformViewportThreshold: a = 0,
  },
  o
) {
  let s = oe(),
    c = ec(ex(n, s), t),
    l = !t || !n,
    u = e === `onScrollTarget`,
    d = Mt();
  return (
    re(() => {
      if (!(l || !u))
        return ce((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: i } = _c(n, a * t.containerLength);
          if (r.length !== 0)
            for (let e of zb)
              (s && e !== `opacity`) ||
                (r.length === i[e].length &&
                  i[e][0] !== void 0 &&
                  c.values[e].set(Ie(t.current, r, i[e])));
        });
    }, [s, u, a, n, l]),
    zo(
      o,
      (t) => {
        if (l || u || t === null) return;
        let r = vc(n);
        return ce(
          (e, { y: t }) => {
            for (let e of zb)
              (s && e !== `opacity`) ||
                (nx.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  c.values[e].set(Ie(t.progress, nx, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [d, s, e, u, n, l]
    ),
    gc(c.values, i),
    Nt(() => {
      if (l) return;
      let e = ex(n, s);
      for (let t of zb) c.values[t].set(e?.[t] ?? Vb[t]);
    }),
    r.useMemo(() => ({ values: c.values, style: t ? Hb : Ub }), [t])
  );
}
function bc(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function xc(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = Bs(n);
    if (r) {
      for (let i of ix)
        if (rx[i]?.has(r)) {
          t[i][r] = Zv(e)[n];
          break;
        }
    } else t.forwardedProps[n] = Zv(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = bc(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = bc(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function Sc(e) {
  return z(e) && sx in e;
}
function Cc(e, t) {
  if (!e || !z(e)) return t;
  for (let n in e) {
    let r = e[n];
    !Ee(r) || !$s(n) || (R(r.get()) && t[n].push(r));
  }
}
function wc(e) {
  return L(e) || Array.isArray(e);
}
function Tc({ componentIdentifier: e, children: t }) {
  return t(d(lx)[e] ?? {});
}
function Ec() {
  return r.useContext(ux);
}
function Dc(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function Oc() {
  if (s === void 0 || px)
    return b(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw hx;
}
function kc({ children: e }) {
  return d(_x) ? b(O, { children: e }) : b(ee, { fallback: gx, children: e });
}
function Ac() {
  return b(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function jc(e, t) {
  if (!Km || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  $t(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Mc(...e) {
  console.error(...e);
}
function Nc() {
  return J.current() !== J.canvas;
}
function Pc({ getErrorMessage: e, fallback: t, children: n }) {
  return Nc()
    ? b(Fc, { fallback: t, children: b(yx, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function Fc({ children: e, fallback: t = vx }) {
  return s === void 0 ? b(ee, { fallback: t, children: e }) : b(kc, { children: e });
}
function Ic() {
  return r.useContext(xx);
}
function Lc() {
  let e = Ic();
  return r.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0; ) t = t.parent;
    return t;
  }, [e]);
}
function Rc({ children: e, scopeId: t, nodeId: n }) {
  let i = Ic(),
    a = r.useMemo(
      () => ({ level: (i?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: i }),
      [t, n, i]
    );
  return b(xx.Provider, { value: a, children: e });
}
function zc(e, t) {
  return `${Sx}${e}:${t}`;
}
function Bc(e, t) {
  return Hc(`component`, e, t);
}
function Vc(e, t) {
  return Hc(`override`, e, t);
}
function Hc(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${zc(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function Uc(e, t, n, r, i, a) {
  let o = Gc(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function Wc(e, t, n, r) {
  return Gc(e, t, n, r);
}
function Gc(e, t, n, r) {
  return !!(nt(n) || (n === 1 && r && e === t));
}
function Kc(e, t, n, r, i, a) {
  let o = Ic();
  return nt(t) || nt(n)
    ? b(bx, { children: e })
    : (Uc(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = b(Pc, { getErrorMessage: Bc.bind(null, t, n), fallback: null, children: e })),
      i && (e = b(Rc, { scopeId: t, nodeId: n, children: e })),
      e);
}
function qc(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function Jc(e) {
  return !(!e || e.placement || e.alignment);
}
function Yc(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      V(e);
  }
}
function Xc(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${Yc(t)}, -100%`;
    case `right`:
      return `0%, ${Yc(t)}`;
    case `bottom`:
      return `${Yc(t)}, 0%`;
    case `left`:
      return `-100%, ${Yc(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function Zc(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n; ) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(jx)) {
      let e = n.getAttribute(jx);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function Qc(e) {
  let { registerCursors: t } = d(Tx),
    n = Ii(() => e),
    r = y();
  re(() => t(n, r), [t, r]);
}
function $c(e) {
  return !!(e && typeof e == `object` && Nx in e);
}
function el(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function tl() {
  return J.current() === J.canvas;
}
function nl(e) {
  return e === void 0 ? !1 : !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function rl(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function il(e, t, n, r) {
  if (L(e)) {
    let i = nl(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    let { routeId: s } = Ar(t.routes, o, void 0, r);
    return t.getRoute(s);
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function al(e) {
  return L(e) && e.startsWith(`data:${Bx}`);
}
function ol(e) {
  if (al(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(Bx.length),
        r = t.searchParams,
        i = r.has(Ix) ? r.get(Ix) : void 0,
        a,
        o = r.get(Lx),
        s = r.get(Rx),
        c = r.get(zx);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function sl(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = ol(e);
    if (!n || !n.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function cl(e) {
  if (!al(e)) return e;
  let t = ol(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: ll(i) };
}
function ll(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function ul({ children: e }) {
  return b(Vx.Provider, { value: void 0, children: e });
}
function dl(e, t, n, r, a, s) {
  let c = d(Vx),
    l = Lc(),
    u = f(() => ({ scopeId: t, nodeId: n, furthestExternalComponent: l }), [t, n, l]),
    p = kt(),
    m = jt(),
    { locales: h } = gn(),
    _ = f(() => {
      let e = $c(r) ? r : cl(r);
      if (e) return il(e, p, m, h);
    }, [m, r, p, h]),
    v = !!(!tl() && c?.nodeId && u.nodeId),
    y = o(
      (e) => {
        if (a.href) {
          if (
            (e.preventDefault(),
            e.stopPropagation(),
            /Mac|iPod|iPhone|iPad/u.test(g.userAgent) ? e.metaKey : e.ctrlKey)
          ) {
            ml(a.href, ``, `_blank`);
            return;
          }
          _ ? a.navigate?.() : ml(a.href, a.rel, a.target);
        }
      },
      [a, _]
    ),
    x = o(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), ml(a.href, ``, `_blank`));
      },
      [a]
    ),
    S = o(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          _ ? a.navigate?.() : ml(a.href, a.rel, a.target));
      },
      [a, _]
    );
  zo(
    s,
    (e) => {
      e !== null && v && (e.dataset.hydrated = `true`);
    },
    [v]
  );
  let C = e;
  return (
    v &&
      (i.forEach(e, (e) => {
        pl(e) &&
          (B(
            fl(c),
            'outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above'
          ),
          B(
            fl(u),
            'innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above'
          ),
          Fx.collectNestedLink(c, u));
      }),
      (C = i.map(e, (e) => {
        if (!pl(e)) return e;
        let t = hl(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            'data-nested-link': !0,
            role: `link`,
            tabIndex: 0,
            onClick: y,
            onAuxClick: x,
            onKeyDown: S,
            as: r.as && hl(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return ne(t, { ...i, ref: a }, n);
      }))),
    b(Vx.Provider, { value: u, children: C })
  );
}
function fl(e) {
  return !nt(e?.nodeId);
}
function pl(e) {
  return S(e) && (hl(e.type) !== e.type || hl(e.props.as) !== e.props.as);
}
function ml(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function hl(e) {
  return e === `a` ? `span` : Ze(e) && Fe(e) === `a` ? _e.span : e;
}
function gl(e) {
  e &&
    Me.read(() => {
      let t = document.getElementById(e);
      if (!t) return;
      let n = getComputedStyle(t),
        r = n.getPropertyValue(`--selection-color`).trim(),
        i = n.getPropertyValue(`--selection-background-color`).trim();
      Me.render(() => {
        let t = document.querySelectorAll(`[data-framer-portal-id="${e}"]`);
        t.length !== 0 &&
          (r && t.forEach((e) => e.style.setProperty(Hx, r)),
          i && t.forEach((e) => e.style.setProperty(Ux, i)));
      });
    });
}
function _l(e) {
  return [
    `[data-framer-portal-id="${e}"] * ::selection {
    color: var(${Hx});
    background-color: var(${Ux});
}`,
  ];
}
function vl({ triggerId: e, children: t }) {
  return (
    r.useLayoutEffect(() => {
      e && gl(e);
    }, [e]),
    t
  );
}
function yl(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : yl(e.parentElement, t)
      : null;
}
function bl({ children: e }) {
  return b(kc, { children: e });
}
function xl(e) {
  return _(function (t, n) {
    return b(bl, { children: b(e, { ...t, ref: n }) });
  });
}
function Sl() {
  let e = g.connection || g.mozConnection || g.webkitConnection || {},
    t = g.deviceMemory && g.deviceMemory > Xx,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? Zx : Qx));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: Yx }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    let { routeId: n, pathVariables: i, preload: a } = e,
      c = tS.get(n);
    if (!c?.size || eS.has(n)) return;
    (++s, eS.add(n));
    let l = a(n, i)?.catch(() => {});
    (o.unobserve(t), $x.delete(t));
    for (let e of c) (o.unobserve(e), $x.delete(e));
    (c.clear(), tS.delete(n), await l, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = $x.get(e);
      if (!n || eS.has(n.routeId)) {
        (o.unobserve(e), $x.delete(e));
        continue;
      }
      let { routeId: r } = n,
        a = tS.get(r),
        l = tS.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (s >= i) continue;
        (a ? a.add(e) : tS.set(r, new Set([e])), setTimeout(c.bind(void 0, n, e), Jx));
      } else (a && a.delete(e), l <= 1 && tS.delete(r));
    }
  }
  return (e, t, n, r) => {
    if (!eS.has(n))
      return (
        $x.set(e, { routeId: n, pathVariables: r, preload: t }),
        o.observe(e),
        () => {
          ($x.delete(e), o.unobserve(e));
        }
      );
  };
}
function Cl(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return Tl(e, t, o, s, a, c, l, i, r);
}
function wl(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && nl(t))
    try {
      let [i, a] = t.split(`#`, 2);
      B(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      B(o !== void 0, `A href must have a defined pathname.`);
      let { routeId: s, pathVariables: c } = Ar(e.routes, o, void 0, r),
        l = e.getRoute(s);
      if (l)
        return {
          routeId: s,
          route: l,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, c),
        };
    } catch {}
}
function Tl(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = ar(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return { routeId: n, route: d, href: f, elementId: f.split(`#`, 2)[1], pathVariables: l };
}
function El() {
  let e = d(iS),
    t = jt()?.pathVariables;
  return e || t;
}
function Dl(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(rS)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Ol(e, t) {
  let n = nl(e),
    r = {
      href: e === `` || rl(e, n) ? e : `https://${e}`,
      target: kl(t?.openInNewTab, n),
      rel: n ? void 0 : Al(`noopener`, t?.rel),
    };
  return (
    t?.preserveParams && ((r.href = Dn(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function kl(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Al(e, t) {
  if (e && !t) return e;
  if (!e && t) return t;
  if (e && t) return `${e} ${t}`;
}
function jl(e, t) {
  console.warn(
    ut(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function Ml(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return jl(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return ct(i) ? i.catch(jl) : i;
  } catch (e) {
    jl(e);
  }
}
function Nl(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = Ml(o, r, n);
      ct(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function Pl() {
  let e = un();
  return o((t, n, r, i = []) => Nl(t, n, r, e, i), [e]);
}
function Fl({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = un();
  return o(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = $c(r) ? r : cl(r);
      if (!$c(c))
        return $t(
          `published_site_click`,
          {
            ...s,
            href: o ? Il(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (L(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (ct(n) ? await n : n) ?? null;
        }
      }
      return $t(
        `published_site_click`,
        {
          ...s,
          href: o ? Il(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, t, n, r, i, a]
  );
}
function Il(e) {
  try {
    let t = new URL(e, K.document.baseURI);
    return t.origin === K.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function Ll(e, t, n, r, i, a, o) {
  (n(t, i, !1), e.navigate?.(t, r, i, a, o));
}
function Rl(e, t, n, r, i, a, o, s) {
  return async (c) => {
    let l = c.metaKey,
      u = yl(c.target),
      d = !u || u.getAttribute(`target`) === `_blank`,
      f = !l && !d,
      p = () => void r(n);
    if (!f) {
      (await hn({
        priority: `user-blocking`,
        ensureContinueBeforeUnload: !0,
        continueAfter: `paint`,
      }),
        p());
      return;
    }
    (c.preventDefault(), Ll(e, t, i, a, o, s, p));
  };
}
function zl(e, t, n, r, i, a, o, s) {
  if (!n) return Ol(e, r);
  let c = wl(t, e, s, o);
  if (!c) return Ol(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f } = c;
  if (!u) return Ol(e, r);
  let p = ar(u, {
    currentRoutePath: n.path,
    currentRoutePathLocalized: n.pathLocalized,
    currentPathVariables: n.pathVariables,
    hash: d,
    pathVariables: f,
    preserveQueryParams: t.preserveQueryParams && !qm,
    siteCanonicalURL: t.siteCanonicalURL,
    localeId: a,
  });
  return {
    routeId: l,
    href: p,
    target: kl(r.openInNewTab, !0),
    onClick: Rl(t, l, p, r.trackLinkClick, i, d, f, r.smoothScroll),
    navigate: () => Ll(t, l, i, d, f, r.smoothScroll),
    'data-framer-page-link-current':
      (n && Dl(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
  };
}
function Bl(e, t, n) {
  let r = Vl(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (Qe(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (Qe(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function Vl(e, t) {
  let n = z(e) ? e : void 0,
    r = n && !tt(n),
    i = t && !tt(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function Hl(e, t, n) {
  if (!(t && B_())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: Ul } : { ...i, onTap: r }) : e;
}
function Ul(e) {
  let t = yl(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function Wl(e, t, n, r, i, a) {
  let o = $c(e) ? e : cl(e);
  if (!$c(o)) return L(e) ? Ol(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (ct(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash),
    v = ar(m, {
      currentRoutePath: s?.path,
      currentRoutePathLocalized: s?.pathLocalized,
      currentPathVariables: t.currentPathVariables,
      hash: l,
      pathVariables: g,
      hashVariables: _,
      relative: !1,
      preserveQueryParams: t.preserveQueryParams,
      onlyHash: r,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: i?.id,
    });
  return r ? v : (i?.slug ? `/${i.slug}` : ``) + v;
}
function Gl({ EditorBar: e, fast: t = !1 }) {
  let n = oh(),
    r = d(oS),
    i = m(fS, t ? lS : uS, dS),
    a = f(() => {
      let e = {},
        t;
      for (t in n)
        n.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = n[t]);
      return e;
    }, [n]);
  return !e || !r || !i
    ? null
    : b(cS, { children: b(ee, { children: b(e, { framerSiteId: r, features: a }) }) });
}
function Kl({ children: e, loadSnippetsModule: t }) {
  return b(CS.Provider, { value: t, children: e });
}
function ql() {
  return r.useContext(CS);
}
function Jl(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function Yl(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (B(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (B(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      V(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await Xl(a.createContextualFragment(e), r, i));
}
async function Xl(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = Zl(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await Xl(r, e, null)));
  }
}
function Zl(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return Ql(r, t, n);
}
function Ql(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function $l(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = yS), (n = bS));
      break;
    case `bodyEnd`:
      ((t = xS), (n = SS));
      break;
    case `headStart`:
      ((t = hS), (n = gS));
      break;
    case `headEnd`:
      ((t = _S), (n = vS));
      break;
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function eu(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = Jl(e),
    s = t.nextSibling;
  for (; s && s !== n; ) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function tu(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = $l(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = eu(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((nu(t, o), s)) {
      await Yl(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = Jl(e.id),
      u = `${c}
${e.code}
${l}`,
      d = iu(e.id, n, r, i);
    d ? await Yl(u, d, `afterend`) : await Yl(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function nu(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t; ) {
    let e = n.nextSibling;
    (ru(n) && n.remove(), (n = e));
  }
}
function ru(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function iu(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = eu(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function au() {
  let e = ql();
  return o(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(pS),
        o = a && a.dataset[mS] !== void 0;
      if (i && o) return;
      let { getSnippets: s, snippetsSorting: c } = await e.readMaybeAsync(),
        l = await s(t, n, r);
      for (let e in l) {
        let t = e,
          n = l[t],
          r = c[t];
        await tu(t, n, r);
      }
    },
    [e]
  );
}
function ou(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function su() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((wS = e.timeZone), (TS = e.locale));
}
function cu() {
  let [e, t] = r.useState(0);
  return [e, r.useCallback(() => t((e) => e + 1), [])];
}
function lu(e, t, n) {
  let r = e && document.getElementById(e);
  if (r) {
    hu(r, t);
    return;
  }
  n || s.scrollTo(0, 0);
}
function uu(e) {
  let t = E([]);
  return (
    re(() => {
      t.current?.length && (t.current.forEach((e) => e()), (t.current = []));
    }, [e]),
    o((e) => {
      t.current.push(e);
    }, [])
  );
}
function du(e) {
  if (!e) return Gm;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function fu() {
  let e = ur(),
    t = E(void 0);
  return o(
    async (n, r, i, a = !0) => {
      let o = i !== void 0;
      t.current?.abort();
      let c = a ? new AbortController() : void 0;
      t.current = c;
      let l = c?.signal,
        u = It(l);
      if ((r.promise.finally(u), !o)) return ((t.current = void 0), n(l), r.promise);
      n(l);
      let d;
      if (
        (e(
          new Promise((e, t) => {
            ((d = e), l?.addEventListener(`abort`, t));
          }).catch(Gm),
          i,
          c
        ),
        await r.promise,
        l?.aborted)
      )
        return;
      let f = s.navigation?.transition;
      d();
      try {
        await f?.finished;
      } catch (e) {
        console.error(`Navigation transition failed`, e);
      }
      l?.aborted || ig();
    },
    [e]
  );
}
function pu({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: i,
  collectionUtils: a,
  routes: u,
  initialLocaleId: d,
  locales: p = rh,
  preserveQueryParams: m = !1,
  LayoutTemplate: h,
  EditorBar: g,
  siteCanonicalURL: _,
  adaptLayoutToTextDirection: v,
}) {
  (Sr(), nr({ disabled: t, routeId: r, initialPathVariables: n, initialLocaleId: d }));
  let y = Jn(),
    [x, S] = cu(),
    C = uu(x),
    w = fu(),
    T = Zn(`framer-route-change`),
    { synchronousNavigationOnDesktop: ee } = oh(),
    te = f(() => (!ee || !V_() ? k : (e) => e()), [ee]),
    O = au(),
    ne = E(!0),
    ie = E(),
    A = E(r),
    j = E(n),
    ae = E(d),
    oe = ae.current,
    M = f(() => p.find(({ id: e }) => (oe ? e === oe : e === sh)) ?? null, [oe, p]),
    se = M?.textDirection ?? `ltr`,
    ce = v ? se : `ltr`;
  re(() => {
    v && document.documentElement.setAttribute(`dir`, se);
  }, [se, v]);
  let le = sr(),
    ue = f(
      () => ({
        activeLocale: M,
        locales: p,
        setLocale: async (e) => {
          let t = T({ localized: !0 });
          await hn({ priority: `user-blocking`, continueAfter: `paint` });
          let n;
          L(e) ? (n = e) : z(e) && (n = e.id);
          let r = p.find(({ id: e }) => e === sh),
            i = p.find(({ id: e }) => e === n);
          if (!i) return;
          let a = A.current,
            o = u[a];
          if (o)
            try {
              let e = await le({
                currentLocale: M,
                nextLocale: i,
                route: o,
                routeId: a,
                defaultLocale: r,
                pathVariables: j.current,
                preserveQueryParams: m,
              });
              if (!e) return;
              let n = $n(s.history.state) ? s.history.state.paginationInfo : void 0,
                c = e.path;
              ((ne.current = !1),
                (j.current = e.pathVariables),
                (ae.current = i.id),
                w(
                  () => {
                    y(a, a, () => te(S));
                  },
                  t,
                  async (t = !1) => {
                    if (c)
                      return tr(
                        {
                          routeId: a,
                          pathVariables: e.pathVariables,
                          localeId: i.id,
                          paginationInfo: n,
                        },
                        c,
                        t
                      );
                  },
                  !1
                ));
            } catch {}
        },
      }),
      [M, S, p, m, u, w, y, T, te, le]
    ),
    de = o(
      (e, t, n, r, i, a, o, s = !1, c) => {
        ne.current = !1;
        let l = A.current;
        if (
          ((A.current = e),
          (j.current = i),
          (ae.current = t),
          (ie.current = r),
          C(() => {
            lu(n, s, a);
          }),
          a)
        ) {
          te(S);
          return;
        }
        w(
          (t) => {
            y(l, e, () => te(S), t);
          },
          o,
          c,
          !0
        );
      },
      [S, C, w, y, te]
    );
  rr(A, de);
  let N = o(
      async (e, n, r, i, a) => {
        let o = u[e],
          c = ft(o?.page) ? o.page.getStatus() : void 0,
          l = c?.hasRendered,
          d = T({ cached: l, preloaded: l ? void 0 : c?.hasLoaded }),
          f = du(a);
        if (
          (hn({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(f),
          await hn({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(Mh)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let p = Ft(o, n),
          h = j.current,
          g = ae.current;
        if (ou({ routeId: A.current, pathVariables: h }, { routeId: e, pathVariables: r })) {
          d.ignore?.();
          let a = u[e];
          (s.history.state?.hash !== n &&
            !t &&
            a &&
            (f(),
            await Qn(e, a, {
              currentRoutePath: a.path,
              currentPathVariables: h,
              pathVariables: r,
              hash: n,
              localeId: g,
              preserveQueryParams: m,
              siteCanonicalURL: _,
              currentRoutePathLocalized: a.pathLocalized,
            })),
            lu(p, i, !1));
          return;
        }
        if (!o) return;
        let v = u[A.current];
        de(
          e,
          g,
          p,
          jn(_) +
            ar(o, {
              currentRoutePath: v?.path,
              currentRoutePathLocalized: v?.pathLocalized,
              currentPathVariables: h,
              hash: n,
              pathVariables: r,
              localeId: g,
              preserveQueryParams: m,
              siteCanonicalURL: _,
              relative: !1,
            }),
          r,
          !1,
          d,
          i,
          t
            ? void 0
            : async (t = !1) => (
                f(),
                Qn(
                  e,
                  o,
                  {
                    currentRoutePath: v?.path,
                    currentPathVariables: h,
                    currentRoutePathLocalized: v?.pathLocalized,
                    hash: n,
                    pathVariables: r,
                    localeId: g,
                    preserveQueryParams: m,
                    siteCanonicalURL: _,
                  },
                  t
                )
              )
        );
      },
      [u, de, t, m, _, T]
    ),
    fe = Dt(u),
    pe = A.current,
    me = ie.current,
    he = j.current,
    P = u[pe],
    ge = P?.path,
    _e = ES(P, pe, me, he, M),
    ve = ne.current;
  c(() => {
    O(pe, he ?? {}, ue.activeLocale, ve);
  }, [O, pe, he, ue, ve]);
  let ye = f(
    () => ({
      navigate: N,
      getRoute: fe,
      currentRouteId: pe,
      currentPathVariables: he,
      routes: u,
      collectionUtils: a,
      preserveQueryParams: m,
      pageviewEventData: _e,
      siteCanonicalURL: _,
      isInitialNavigation: ve,
    }),
    [N, fe, pe, he, u, a, m, _, _e, ve]
  );
  if (!P) throw Error(`Router cannot find route for ${pe}`);
  let be = !M || !P.includedLocales || P.includedLocales.includes(M.id),
    xe = ge && he ? En(ge, he) : ge,
    Se = String(oe) + xe,
    F = Ii(() => ({ ...e, display: `contents` }));
  return b(Ot, {
    api: ye,
    children: b(Fh.Provider, {
      value: ue,
      children: b(Ih.Provider, {
        value: ce,
        children: D(gr, {
          children: [
            g && b(Gl, { EditorBar: g, fast: !0 }),
            b(mx, {
              children: D(kc, {
                children: [
                  D(Lg, {
                    notFoundPage: i,
                    defaultPageStyle: e,
                    forceUpdateKey: x,
                    children: [
                      b(Fg.Start, {}),
                      b(mu, {
                        LayoutTemplate: h,
                        webPageId: P?.abTestingVariantId ?? pe,
                        style: e,
                        children: (t) =>
                          b(l, { children: be ? Dr(P.page, t ? F : e) : i && Dr(i, e) }, Se),
                      }),
                    ],
                  }),
                  g && b(Gl, { EditorBar: g }),
                  b(vr, {}),
                  b(Fg.End, {}),
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  });
}
function mu({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? b(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function hu(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function gu(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function _u(e) {
  return typeof e == `object` && !!e;
}
function vu(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!_u(r)) return;
    r = r[e];
  }
  return r;
}
function yu(e) {
  return `${e.credentials}:${e.url}`;
}
function bu(e) {
  return L(e) && !Number.isNaN(Number(e));
}
function xu(e, t) {
  switch (e) {
    case `string`:
      return L(t) || R(t);
    case `color`:
      return L(t);
    case `boolean`:
      return $e(t);
    case `number`:
      return R(t) || bu(t);
    case `link`:
    case `image`:
      return L(t) && rl(t, !1);
    default:
      return !1;
  }
}
function Su(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = vu(e.data, t.resultKeyPath);
  if (nt(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!xu(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function Cu(e, t) {
  if (J.current() === J.canvas) return !1;
  let n = Math.max(t * 1e3, OS);
  return Date.now() >= e + n;
}
function wu({
  RootComponent: e,
  isWebsite: t,
  routeId: n,
  framerSiteId: i,
  pathVariables: a,
  routes: o,
  collectionUtils: s,
  notFoundPage: c,
  isReducedMotion: l = !1,
  includeDataObserver: u = !1,
  localeId: d,
  locales: f,
  preserveQueryParams: p,
  EditorBar: m,
  defaultPageStyle: h,
  disableHistory: g,
  LayoutTemplate: _,
  siteCanonicalURL: v,
  adaptLayoutToTextDirection: y,
  loadSnippetsModule: x,
}) {
  return (
    r.useEffect(() => {
      t || u_.start();
    }, []),
    t
      ? b(Ne, {
          reducedMotion: l ? `user` : `never`,
          children: b(ln, {
            collectionUtils: s,
            children: b(BS, {
              children: b(kx, {
                children: b(oS.Provider, {
                  value: i,
                  children: b(Kl, {
                    loadSnippetsModule: x,
                    children: b(pu, {
                      initialRoute: n,
                      initialPathVariables: a,
                      initialLocaleId: d,
                      routes: o,
                      collectionUtils: s,
                      notFoundPage: c,
                      locales: f,
                      defaultPageStyle: h ?? { minHeight: `100vh`, width: `auto` },
                      preserveQueryParams: p,
                      EditorBar: m,
                      disableHistory: g,
                      LayoutTemplate: _,
                      siteCanonicalURL: v,
                      adaptLayoutToTextDirection: y,
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : b(u ? yb : r.Fragment, {
          children: b(At, {
            routes: o,
            children: b(lb, { children: r.isValidElement(e) ? e : r.createElement(e, { key: n }) }),
          }),
        })
  );
}
function Tu(e) {
  return {
    trace(...t) {
      return X.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return X.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return X.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return X.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return X.getLogger(e)?.error(...t);
    },
    get enabled() {
      return X.getLogger(e) !== void 0;
    },
  };
}
function Eu(e) {
  let t = e.next();
  return (B(t.done, `Generator must not yield`), t.value);
}
async function Du(e, t = e.next()) {
  for (; !t.done; ) {
    let n = await t.value;
    t = e.next(n);
  }
  return t.value;
}
function Ou(e) {
  let t = e.next();
  return t.done ? t.value : Du(e, t);
}
function* W(e) {
  let t = {},
    n = Object.keys(e),
    r = [];
  for (let i of n) {
    let n = e[i];
    if (ot(n)) {
      let e = n.next();
      e.done
        ? (t[i] = e.value)
        : r.push(
            Du(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function* ku(e) {
  let t = [],
    n = e.keys(),
    r = [];
  for (let i of n) {
    let n = e[i];
    if (ot(n)) {
      let e = n.next();
      e.done
        ? (t[i] = e.value)
        : r.push(
            Du(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function Au(e) {
  return Nu(e) || Iu(e);
}
function ju(e) {
  return et(e) && e.every(z);
}
function Mu(e) {
  return z(e) && Qe(e.read) && Qe(e.preload);
}
function Nu(e) {
  return ju(e) || Mu(e);
}
function Pu(e) {
  return z(e) && z(e.schema);
}
function Fu(e) {
  return z(e) && z(e.collectionByLocaleId);
}
function Iu(e) {
  return Pu(e) || Fu(e);
}
function Lu(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = fd(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Ru(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => Z.cast(e, t.definition)) };
  }
  return null;
}
function zu(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Bu(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function Vu(e) {
  return Bu(e)?.value ?? !1;
}
function Hu(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Uu(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function Wu(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Gu(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return at(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function Ku(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function qu(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function Ju(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Yu(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function Xu(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Zu(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function Qu(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function $u(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function ed(e) {
  return $u(e)?.value ?? null;
}
function td(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = fd(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function nd(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = Z.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function rd(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function id(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function ad(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
function od(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function sd(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
function cd(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function ld(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : r > i ? 1 : 0
  );
}
function ud(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function dd(e) {
  return ud(e)?.value ?? null;
}
function fd(e, t, n) {
  if (rt(e) || rt(t)) return (B(e === t), 0);
  switch (e.type) {
    case `array`:
      return (B(e.type === t.type), Lu(e, t, n));
    case `boolean`:
      return (B(e.type === t.type), zu(e, t));
    case `color`:
      return (B(e.type === t.type), Hu(e, t));
    case `date`:
      return (B(e.type === t.type), Wu(e, t));
    case `enum`:
      return (B(e.type === t.type), Ku(e, t));
    case `file`:
      return (B(e.type === t.type), Ju(e, t));
    case `link`:
      return (B(e.type === t.type), Xu(e, t));
    case `number`:
      return (B(e.type === t.type), Qu(e, t));
    case `object`:
      return (B(e.type === t.type), td(e, t, n));
    case `responsiveimage`:
      return (B(e.type === t.type), rd(e, t));
    case `richtext`:
      return (B(e.type === t.type), ad(e, t));
    case `vectorsetitem`:
      return (B(e.type === t.type), sd(e, t));
    case `string`:
      return (B(e.type === t.type), ld(e, t, n));
    default:
      V(e);
  }
}
async function pd(e, t) {
  return Mu(e) ? (await e.preload(t), e.read(t)) : e;
}
function md(e) {
  return e.includes(GS);
}
function hd(e) {
  if (Iu(e) && e.id) return e.id;
  let t = WS.get(e);
  if (t) return t;
  let n = `${GS}${Math.random().toString(16).slice(2)}`;
  return (WS.set(e, n), n);
}
function gd(e, t) {
  if (Nu(e)) {
    let n = hd(e) + (t?.id ?? sh),
      r = KS.get(n);
    if (r) return r;
    let i = new US(e, t);
    return (KS.set(n, i), i);
  }
  if (Pu(e)) return e;
  if (Fu(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  V(e, `Unsupported collection type`);
}
function _d() {
  return 25;
}
function vd() {
  return 12500;
}
function yd(e) {
  return e;
}
function bd(e) {
  return e;
}
function xd(e) {
  return z(e) && Qe(e.getHash);
}
function G(e, ...t) {
  return bd(
    `${e}(${t.map((e) => (B(!(e instanceof tC), `Pass CollectionMetadata.id instead`), B(!(e instanceof iC), `Pass FieldMetadata.id instead`), B(!(e instanceof nC), `Pass IndexMetadata.id instead`), B(!(e instanceof ZS), `Pass RelationalNode.group.id instead`), B(!(e instanceof JS), `Pass Group.id instead`), xd(e) ? e.getHash() : JSON.stringify(e))).join(`, `)})`
  );
}
function Sd(e, t) {
  return { collectionId: hd(e), pointer: t };
}
function Cd(e) {
  return z(e) && L(e.collectionId);
}
function wd(e, t) {
  return { collectionId: hd(e), pointer: t };
}
function Td(e) {
  return z(e) && L(e.collectionId);
}
function Ed(e, t) {
  let n = new Map();
  function r(e) {
    if (z(e))
      if (e.type === `Collection` && Au(e.data)) {
        let r = gd(e.data, t),
          i = hd(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (et(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function Dd(e) {
  return e;
}
function Od(e) {
  return e;
}
function kd(e) {
  return e;
}
function Ad(e) {
  return Array(e).fill({ type: `All` });
}
function jd(e, ...t) {
  if (e) return;
  let n = Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function Md(e) {
  let t = new Set();
  if (!e) return t;
  jd(e.type === `array`, `ScalarIntersection expects an array, got:`, e.type);
  for (let n of e.value)
    n &&
      (jd(
        n.type === `string`,
        `ScalarIntersection expects an array of strings, got an array with:`,
        n.type
      ),
      t.add(n.value));
  return t;
}
function Nd(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function Pd(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Fd(e) {
  return `${e.functionName}(${e.arguments.map((e) => Bd(e)).join(`, `)})`;
}
function Id(e) {
  let t = `CASE`;
  e.value && (t += ` ${Bd(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Bd(n.when)} THEN ${Bd(n.then)}`;
  return (e.else && (t += ` ELSE ${Bd(e.else)}`), (t += ` END`), t);
}
function Ld(e) {
  let t = Bd(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function Rd(e) {
  let t = Bd(e.left),
    n = Bd(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function zd(e) {
  return `CAST(${Bd(e.value)} as ${e.dataType})`;
}
function Bd(e) {
  switch (e.type) {
    case `Identifier`:
      return Nd(e);
    case `LiteralValue`:
      return Pd(e);
    case `FunctionCall`:
      return Fd(e);
    case `Case`:
      return Id(e);
    case `UnaryOperation`:
      return Ld(e);
    case `BinaryOperation`:
      return Rd(e);
    case `TypeCast`:
      return zd(e);
    case `Select`:
      return `${Gd(e)}`;
    default:
      V(e);
  }
}
function Vd(e) {
  return Pu(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function Hd(e) {
  let t = `${Ud(e.left)} LEFT JOIN ${Ud(e.right)}`;
  return (e.constraint && (t += ` ON ${Bd(e.constraint)}`), t);
}
function Ud(e) {
  switch (e.type) {
    case `Collection`:
      return Vd(e);
    case `LeftJoin`:
      return Hd(e);
    default:
      V(e);
  }
}
function Wd(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `
${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `
	${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function Gd(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = Bd(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${Ud(e.from)}`),
    e.where && (t += ` WHERE ${Bd(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${Bd(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Bd(e.limit)}`),
    e.offset && (t += ` OFFSET ${Bd(e.offset)}`),
    Wd(t)
  );
}
function Kd(e) {
  return z(e) && e.type === `Collection`;
}
function qd(e, t) {
  return Kd(t) && Au(t.data) ? hd(t.data) : t;
}
function Jd(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, qd) + n;
}
function Yd(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function Xd() {
  return new Set();
}
function Zd(e) {
  let t = Ii(Xd),
    n = Ii(Xd);
  return (
    Jo(() => () => Yd(n, t)),
    c(() => () => Yd(n, t), []),
    c(() => {
      Yd(n, t);
    }, [e]),
    E({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function Qd(e, t, n) {
  return r.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function $d(e) {
  for (let [t, n] of Object.entries(e)) if (K.matchMedia(n).matches) return t;
}
function ef(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && K.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function tf(e, t, n = !0) {
  let r = d(ob),
    i = Da(),
    a = E(!i && M_() ? ($d(t) ?? e) : e),
    s = E(n && r ? e : a.current),
    l = to(),
    u = de(),
    f = o(
      (e) => {
        if (e !== a.current || e !== s.current) {
          let t = function () {
            ((a.current = s.current = e),
              k(() => {
                l();
              }));
          };
          i
            ? t()
            : u(() => {
                t();
              });
        }
      },
      [u, l, i]
    );
  return (
    fy(() => {
      i && f(e);
    }, [e, i, f]),
    fy(() => {
      !n || r !== !0 || f(a.current);
    }, []),
    c(() => {
      let e = [];
      for (let [n, r] of Object.entries(t)) {
        let t = K.matchMedia(r),
          i = (e) => {
            e.matches && f(n);
          };
        (nf(t, i), e.push([t, i]));
      }
      return () => e.forEach(([e, t]) => rf(e, t));
    }, [t, f]),
    [a.current, s.current]
  );
}
function nf(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function rf(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function af(e) {
  setTimeout(e, 1);
}
function of(e) {
  let t = new Set(),
    n = ef(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (sf(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (Jm ? K.requestIdleCallback : af)(() => {
    document.querySelector(gw)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (sf(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    cf(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function sf(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function cf(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function lf() {
  let e = Ii(() => new Map());
  return r.useCallback((t) => {
    let n = e.get(t);
    if (n) return n;
    let r = w();
    return (e.set(t, r), r);
  }, []);
}
function uf(e, t) {
  if (e[t]) return e[t];
  if (!(t in e)) return e.default;
}
function df(e, t) {
  if (Ea()) return;
  let n = r.useRef(!0),
    i = r.useRef(t);
  (Jo((t, r) => {
    let a = t && !r;
    if (!n.current && a) {
      let t = uf(i.current, e);
      t && t();
    }
    n.current = a;
  }, []),
    r.useEffect(() => {
      if (n.current) {
        let t = uf(i.current, e);
        t && t();
      }
    }, [e]));
}
function ff(e, t) {
  e !== !1 &&
    Me.render(() => {
      let e = document.documentElement.style;
      t ? e.setProperty(`overflow`, `hidden`) : e.removeProperty(`overflow`);
    });
}
function pf({ blockDocumentScrolling: e = !0, dismissWithEsc: t = !1 } = {}) {
  let [n, i] = r.useState(!1),
    a = r.useCallback(
      async (t) => {
        (await hn({ priority: `user-blocking`, continueAfter: `paint` }), k(() => i(t)), ff(e, t));
      },
      [e]
    );
  return (
    r.useEffect(
      () => () => {
        hn({ priority: `user-blocking`, continueAfter: `paint` }).then(() => {
          ff(e, !1);
        });
      },
      [e]
    ),
    r.useEffect(() => {
      if (!t) return;
      let e = (e) => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), a(!1));
      };
      return (K.addEventListener(`keydown`, e), () => K.removeEventListener(`keydown`, e));
    }, [t, a]),
    [n, a]
  );
}
function mf(e) {
  return z(e) && _w in e && e.page !== void 0;
}
function hf(e) {
  let { activeLocale: t } = gn();
  return vw.get(e, t).use();
}
function gf(e) {
  return hf({ ...e, select: [] }).length;
}
function _f(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(nt(e) || z(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function vf(e, t, n, r = !1) {
  let [i, a] = ie(),
    s = Math.ceil(e / t),
    [l, u] = p(globalThis?.history?.state?.paginationInfo?.[n]?.currentPage ?? 1),
    d = E(l),
    m = f(() => ({ currentPage: l, totalPages: s, isLoading: i }), [l, s, i]);
  c(() => {
    lr(n, m);
  }, [n, m]);
  let h = tl();
  return {
    paginationInfo: m,
    loadMore: o(
      async () =>
        h ||
        d.current >= s ||
        (await hn({ priority: `user-blocking`, continueAfter: `paint` }), d.current >= s)
          ? void 0
          : ((e) => {
              e(() => {
                u((e) => {
                  let t = Math.min(e + 1, s);
                  return ((d.current = t), t);
                });
              });
            })(r ? a : k),
      [s, r]
    ),
  };
}
function yf(e, t, n) {
  let { paginationInfo: r, loadMore: i } = vf(gf(e), t, n, !0);
  return {
    paginatedQuery: f(() => {
      let n = t * r.currentPage;
      if (e.limit) {
        if (e.limit.type !== `LiteralValue` || typeof e.limit.value != `number`)
          throw Error(`Unexpected type for query limit`);
        n = Math.min(n, e.limit.value);
      }
      return { ...e, limit: { type: `LiteralValue`, value: n } };
    }, [e, t, r]),
    paginationInfo: r,
    loadMore: i,
  };
}
function bf(e, t) {
  return `${e}-${t}`;
}
function xf(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (B(r !== void 0, `nextVariant should be defined`), r);
}
function Sf(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function Cf(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function wf(e, t) {
  return t[e] || `framer-v-${e}`;
}
function Tf(e, t, n) {
  return e && n.has(e) ? e : t;
}
function Ef() {
  let e = E(),
    t = E(),
    n = o(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    c(
      () => () => {
        n();
      },
      [n]
    ),
    o(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n]
    )
  );
}
function Df() {
  let e = E(),
    t = E(!1),
    n = E(),
    r = d(Uy);
  return (
    c(
      () => () => {
        (e.current?.(), (n.current = void 0), (e.current = void 0));
      },
      []
    ),
    o(
      (i, a) => {
        if (!a?.current || t.current) {
          i();
          return;
        }
        if (((n.current = i), e.current)) return;
        let o = !1;
        e.current = Bo(r, `undefined`, a.current, null, (e) => {
          ((t.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), t.current && n.current?.());
              })));
        });
      },
      [r]
    )
  );
}
function Of(e) {
  let t = Ef(),
    n = Df();
  return o(
    (r, i = !1) => {
      if (qm) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function kf() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (xw = () => {
        (e(), (t = void 0));
      }));
  });
}
function Af(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (bw = kf()));
}
function jf() {
  (performance.mark(`click-received-listener`), (bw = void 0), xw?.(), (xw = void 0));
}
function Mf(e = !1) {
  c(() => {
    e &&
      (document.addEventListener(`pointerup`, Af, !0),
      document.__proto__.addEventListener.call(document, `click`, jf, !0));
  }, [e]);
}
function Nf({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: s = {},
  ref: c,
}) {
  let l = to(),
    u = tl(),
    d = Ii(() => new Set(i)),
    { yieldOnTap: p } = oh();
  Mf(p);
  let m = Of(c),
    h = E({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: Tf(e, t, d),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    g = o((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = h.current,
        o = Tf(e, a, d),
        s = Cf(i?.[o], t, n, !1, r);
      return [o, s ? bf(o, s) : void 0];
    }, []),
    _ = o(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = g(r);
        if (o === e && s === t) return;
        (a && (h.current.isError = !1),
          (h.current.baseVariant = o || n),
          (h.current.gestureVariant = s));
        let c = p && h.current.isPressedHasUpdated;
        (c &&
          bw &&
          (performance.mark(`wait-for-tap-start`),
          await bw,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await hn({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: u,
          isPressed: d,
          isHoveredHasUpdated: f,
          isPressedHasUpdated: _,
        } = h.current;
        if (u || f || d || _) {
          k(l);
          return;
        }
        m(() => k(l), i);
      },
      [g, l, m, p]
    ),
    v = o(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        let r = t !== h.current.isPressed,
          i = e !== h.current.isHovered;
        (e !== void 0 && (h.current.isHovered = e),
          t !== void 0 && (h.current.isPressed = t),
          n !== void 0 && (h.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = h.current;
        ((h.current.isPressedHasUpdated = r),
          (h.current.isHoveredHasUpdated = i),
          _(a, o, s, a, !1));
      },
      [_]
    ),
    y = o(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = h.current;
        _(i, a, n, e === yw ? xf(r || [], i || n) : e, t, !0);
      },
      [_]
    ),
    b = o(() => {
      let { baseVariant: e } = h.current;
      ((h.current.loadedBaseVariant[e] = !0), m(() => k(l), !0));
    }, [l, m]);
  if (e !== h.current.lastVariant) {
    let [t, n] = g(e);
    ((h.current.lastVariant = t),
      (t !== h.current.baseVariant || n !== h.current.gestureVariant) &&
        ((h.current.baseVariant = t), (h.current.gestureVariant = n)));
  }
  let {
      baseVariant: x,
      gestureVariant: S,
      defaultVariant: C,
      enabledGestures: w,
      isHovered: T,
      isPressed: D,
      isError: ee,
      loadedBaseVariant: te,
    } = h.current,
    O = Qd(h.current.baseVariant, h.current.gestureVariant, a);
  return f(() => {
    let e = [];
    x !== C && e.push(x);
    let t = w?.[x]?.loading,
      n = !ee && !u && !!t && !te[x],
      r = n ? bf(x, `loading`) : S;
    r && e.push(r);
    let i = w?.[x],
      a = { onMouseEnter: () => v({ isHovered: !0 }), onMouseLeave: () => v({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => v({ isPressed: !0 }),
          onTapCancel: () => v({ isPressed: !1 }),
          onTap: () => v({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: x,
        gestureVariant: r,
        isLoading: n,
        transition: Sf(h.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: O,
        gestureHandlers: a,
        classNames: zs(wf(x, s), Cf(i, T, D, n, ee)),
      }
    );
  }, [x, S, T, D, te, O, y, C, w, v, b, s]);
}
function Pf(e, { scopeId: t, nodeId: n, override: i, inComponentSlot: a }) {
  if (!Nc()) return i(e);
  let o = Ff(e, i),
    s = !1;
  function c(r, i) {
    let c = Ic();
    if (Wc(t, c?.scopeId, c?.level, a ?? !1))
      return o.status === `success`
        ? b(lg.Provider, {
            value: n,
            children: b(Pc, {
              getErrorMessage: Vc.bind(null, t, n),
              fallback: b(e, { ...r, ref: i }),
              children: b(o.Component, { ...r, ref: i }),
            }),
          })
        : ((s ||= (Mc(o.error), Mc(Vc(t, n)), jc(o.error), !0)), b(e, { ...r, ref: i }));
    if (o.status === `success`)
      return b(lg.Provider, { value: n, children: b(o.Component, { ...r, ref: i }) });
    throw o.error;
  }
  return r.forwardRef(c);
}
function Ff(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function If(e) {
  return e.weight !== void 0 && e.style !== void 0;
}
function Lf(e, t) {
  let n = t === `normal` ? `Regular` : `Italic`;
  return e === 400 ? n : t === `normal` ? `${Aw[e]}` : `${Aw[e]} ${n}`;
}
function Rf() {
  return s === void 0 ? {} : Mw || ((Mw = zf()), Mw);
}
function zf() {
  let e = s.location,
    t = s?.bootstrap?.services;
  if (t) return t;
  let n;
  try {
    if (((n = s.top.location.origin), (t = s.top?.bootstrap?.services), t)) return t;
  } catch {}
  if (n && n !== e.origin) throw Error(`Unexpectedly embedded by ${n} (expected ${e.origin})`);
  if (e.origin.endsWith(`framer.com`) || e.origin.endsWith(`framer.dev`))
    throw Error(`ServiceMap data was not provided in document`);
  try {
    let n =
      new URLSearchParams(e.search).get(`services`) ||
      new URLSearchParams(e.hash.substring(1)).get(`services`);
    n && (t = JSON.parse(n));
  } catch {}
  if (t && typeof t == `object` && t.api) return t;
  throw Error(`ServiceMap requested but not available`);
}
function Bf(e) {
  return e.key + e.extension;
}
function Vf(e) {
  return `${Rf().userContent}/assets/${e}`;
}
function Hf(e) {
  return Vf(Bf(e));
}
function Uf(e, t) {
  return t ? `${e} ${Nw}` : e;
}
function Wf(e, t) {
  switch (t) {
    case `custom`:
      throw Error(`Custom fonts are not supported`);
    default:
      return Uf(e.name, e.isVariable);
  }
}
function Gf(e) {
  return !!(e && Array.isArray(e));
}
function Kf(e) {
  if (!e || !Array.isArray(e)) return;
  let t = [];
  for (let n of e)
    Jf(n) &&
      t.push({
        tag: n.tag,
        name: n.name,
        minValue: n.minValue,
        maxValue: n.maxValue,
        defaultValue: n.defaultValue,
      });
  return t;
}
function qf(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`coverage` in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
  );
}
function Jf(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`name` in e && typeof e.name != `string`) ||
    !(`minValue` in e) ||
    typeof e.minValue != `number` ||
    !(`maxValue` in e) ||
    typeof e.maxValue != `number` ||
    !(`defaultValue` in e) ||
    typeof e.defaultValue != `number`
  );
}
function Yf(e) {
  return Iw[Xf(e)];
}
function Xf(e) {
  return e.toLowerCase().replace(/\s+/gu, `-`);
}
function Zf(e) {
  return (
    (e = e.toLowerCase()),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`) ? `italic` : `normal`
  );
}
function Qf(e, t) {
  return { ...$f(e, t), ...ep(e, t) };
}
function $f(e, t) {
  if (t.length === 0)
    return { variantBold: void 0, variantBoldItalic: void 0, variantItalic: void 0 };
  let { weight: n, style: r } = e,
    i = new Map(),
    a = new Map();
  for (let r of t)
    r.isVariable === e.isVariable &&
      (i.set(`${r.weight}-${r.style}`, r),
      !(r.weight <= n) && (a.has(r.style) || a.set(r.style, r)));
  let o = a.get(r),
    s = a.get(`italic`),
    c = e.weight;
  c <= 300
    ? ((o = i.get(`400-${r}`) ?? o), (s = i.get(`400-italic`) ?? s))
    : c <= 500
      ? ((o = i.get(`700-${r}`) ?? o), (s = i.get(`700-italic`) ?? s))
      : ((o = i.get(`900-${r}`) ?? o), (s = i.get(`900-italic`) ?? s));
  let l = i.get(`${n}-italic`);
  return { variantBold: o, variantItalic: l, variantBoldItalic: s };
}
function ep(e, t) {
  if (t.length === 0) return { variantVariable: void 0, variantVariableItalic: void 0 };
  let n, r, i, a;
  for (let o of t) {
    if (!o.isVariable) continue;
    let t = o.weight === e.weight,
      s = o.weight === 400;
    o.style === `normal`
      ? t
        ? (n = o)
        : s
          ? (i = o)
          : (i ||= o)
      : o.style === `italic` && (t ? (r = o) : s ? (a = o) : (a ||= o));
  }
  return { variantVariable: n ?? i, variantVariableItalic: r ?? a };
}
function tp(e) {
  return !!e.variationAxes;
}
function np(e) {
  return rp(e) || ip(e);
}
function rp(e) {
  return e.startsWith(zw);
}
function ip(e) {
  return e.startsWith(Rw);
}
function ap(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r) {
      if (r.owner !== t.owner && r.file === t.file)
        return { existingFont: r, index: n, projectDuplicate: !0 };
      if (r && r.selector === t.selector)
        return { existingFont: r, index: n, projectDuplicate: !1 };
    }
  }
}
function op(e) {
  let { font: t } = e,
    n = t.fontFamily,
    r = Array.isArray(t.variationAxes);
  if (r && n.toLowerCase().includes(`variable`)) return n;
  let i = r ? Nw : t.fontSubFamily.trim();
  return i === `` ? n : `${n} ${i}`;
}
function sp({ fontFamily: e, fontSubFamily: t, variationAxes: n, faceDescriptors: r }) {
  let i = t.trim() || `Regular`,
    a = i.toLocaleLowerCase().includes(`variable`),
    o = Kf(n) && !a ? `Variable ${i}` : i,
    s = `normal`,
    c = 400;
  return (
    r && ((c = r.weight), (s = r.italic || r.oblique ? `italic` : `normal`)),
    { family: e, variant: o, weight: c, style: s }
  );
}
function cp(e) {
  if (!(!e.weight || !e.style))
    return { weight: e.weight, style: e.style, isVariable: tp(e), selector: e.selector };
}
function lp(e) {
  let t = e.fonts.map((e) => cp(e)).filter((e) => e !== void 0);
  for (let n of e.fonts) {
    let e = cp(n);
    if (!e) continue;
    let r = Qf(e, t);
    ((n.selectorVariable = r.variantVariable?.selector),
      (n.selectorVariableItalic = r.variantVariableItalic?.selector),
      (n.selectorBold = r.variantBold?.selector),
      (n.selectorBoldItalic = r.variantBoldItalic?.selector),
      (n.selectorItalic = r.variantItalic?.selector));
  }
}
function up(e) {
  return e.ownerTypes.includes(`team`) ? `team` : `project`;
}
async function dp(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-AG6EYFMK.BIMh-w5Z.mjs`))?.default;
    case `fontshare`:
      return (await import(`./fontshare-LTYJMI6Q.Cmf5_Ibv.mjs`))?.default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
async function fp(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-EJBUPU3N.DOSoXjTg.mjs`))?.default;
    case `fontshare`:
      return (await import(`./fontshare-XMKN2FOD.4SKpAf8B.mjs`))?.default;
    case `framer`:
      return (await import(`./framer-font-D6RMCRV4.F4xpcGAt.mjs`))?.default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
function pp(e) {
  return e
    .split(`,`)
    .map((e) => e.trim().toLowerCase())
    .filter(mp);
}
function mp(e) {
  return Vw.includes(e);
}
function hp(e) {
  let t = {
      serif: `serif`,
      sans: `sans-serif`,
      slab: `slab`,
      display: `display`,
      handwritten: `handwriting`,
      script: `handwriting`,
    },
    n = pp(e)[0];
  return n && t[n];
}
function gp(e) {
  let t = {
    serif: `serif`,
    'sans-serif': `sans-serif`,
    display: `display`,
    handwriting: `handwriting`,
    monospace: `monospace`,
  };
  if (e) return t[e];
}
function _p(e, t) {
  return e.reduce((e, n) => ((e[t(n)] = n), e), {});
}
async function vp(e, t, n = 0) {
  let { family: r, url: i, stretch: a, unicodeRange: o } = e,
    s = e.weight,
    c = e.style || `normal`,
    l = `${r}-${c}-${s}-${i}`;
  if (!rT.has(l) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: L(s) ? s : s?.toString(),
        style: c,
        stretch: a,
        unicodeRange: o,
      }),
      d = u
        .load()
        .then(() => (t.fonts.add(u), yp(r, c, s)))
        .catch((l) => {
          if (l.name !== `NetworkError`) throw l;
          if (n < tT) return vp(e, t, n + 1);
          throw new nT(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: c, weight: s, url: i, stretch: a, unicodeRange: o })}`
          );
        });
    rT.set(l, d);
  }
  await rT.get(l);
}
async function yp(e, t, n) {
  let r = `${e}-${t}-${n}`;
  if (!iT.has(r)) {
    let i = new $w.default(e, { style: t, weight: n }).load(null, eT);
    iT.set(r, i);
  }
  try {
    await iT.get(r);
  } catch {
    throw new nT(
      `Failed to check if font is ready (${eT}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`
    );
  }
}
function bp(e) {
  try {
    if (e === `framer`) return xp(oT) ? oT : void 0;
    {
      let t = (async () => {
        switch (e) {
          case `google`:
            return (await import(`./google-CQFUID6E.CQPIoQ9Q.mjs`)).default;
          case `fontshare`:
            return (await import(`./fontshare-X63NXWGB.Ch6yfvRK.mjs`)).default;
          default:
            V(e);
        }
      })();
      return xp(t) ? t : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function xp(e) {
  return z(e) && Object.values(e).every(Cp);
}
function Sp(e) {
  return z(e) && L(e.tag);
}
function Cp(e) {
  return Array.isArray(e) && e.every(Sp);
}
function wp(e, t) {
  c(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (s.addEventListener(`keyup`, n), () => s.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function Tp(e, t, n, r) {
  let i = s.innerHeight - r,
    a = Math.min(s.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function Ep(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new s.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function Dp() {
  return document.getElementById(Kx) ?? document.getElementById(Gx) ?? document.body;
}
function Op(e, t) {
  return R(e) ? e : (t ?? 0);
}
function kp(e) {
  return Op(e?.paddingTop, e?.padding) + Op(e?.paddingBottom, e?.padding);
}
function Ap(e) {
  return Op(e?.paddingLeft, e?.padding) + Op(e?.paddingRight, e?.padding);
}
function jp(e) {
  let t = E(e);
  return ((t.current = e), o((...e) => t.current(...e), []));
}
function Mp(e, t) {
  if (!e || !t || !t.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - Ap(e)}px)`,
      srcSet: Na(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function Np(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in lT)) continue;
    let n = lT[t],
      r = e[t];
    if (!(!R(n) || !R(r)) && n !== r) return !0;
  }
  return !1;
}
function Pp(e) {
  let t = fe.get(e.current);
  if (!t) return !1;
  if (Np(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (Np(e.latestValues)) return !0;
  return !1;
}
function Fp(e) {
  return _(function ({ lightbox: t, lightboxClassName: n, onClick: r, ...i }, a) {
    let s = d(Te),
      u = d(Sw),
      m = !!u,
      h = E(null),
      g = a ?? h,
      _ = E(),
      v = f(() => Mp(t, i.background), [t, i.background]),
      [x, S] = p(!1),
      [C, w] = p(),
      ee = o(() => {
        if (t) {
          if (x) {
            k(() => {
              S(!0);
            });
            return;
          }
          Me.read(() => {
            if (!g.current) return;
            let e = getComputedStyle(g.current),
              n =
                g.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(g.current, `::after`)
                  : void 0,
              r = g.current.offsetWidth ?? 1,
              i = g.current.offsetHeight ?? 1,
              a = Pp(g) || m ? { duration: 0 } : t.transition;
            k(() => {
              (w({
                borderRadius: e.borderRadius,
                aspectRatio: r / (i || 1),
                borderTop: n?.borderTopWidth,
                borderRight: n?.borderRightWidth,
                borderBottom: n?.borderBottomWidth,
                borderLeft: n?.borderLeftWidth,
                borderStyle: n?.borderStyle,
                borderColor: n?.borderColor,
                transition: a,
                imageRendering: e.imageRendering,
                filter: e.filter,
              }),
                S(!0),
                u?.stop());
            });
          });
        }
      }, [t, x, g, u?.stop, m]),
      te = C?.aspectRatio ?? 1,
      ne = jp(() => {
        if (!t || !v || !v.src) return;
        let e = _.current?.[v.src];
        if (e) return e;
        let n = Tp(te, t.maxWidth, Ap(t), kp(t)),
          r = Ep(v, { width: n, height: n * te });
        return ((_.current = { [v.src]: r }), r);
      }),
      re = o(
        async (e) => {
          (r?.(e), !(x || !t || !v) && (await ne(), ee()));
        },
        [r, ee, x, v, t, ne]
      ),
      ie = o((e) => {
        (e?.stopPropagation(),
          k(() => {
            S(!1);
          }));
      }, []);
    (wp(x, ie),
      c(() => {
        if (!t) return;
        let e;
        function n() {
          e = setTimeout(() => {
            ne();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = g.current;
        return (
          i?.addEventListener(`mouseenter`, n),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, ne),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, n),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, ne));
          }
        );
      }, [ne, g, t]));
    let A = y(),
      j = C?.transition ?? i.transition ?? s.transition,
      ae = C?.borderRadius,
      oe = C?.imageRendering,
      M = C?.filter,
      se = C?.borderTop,
      ce = C?.borderRight,
      le = C?.borderBottom,
      ue = C?.borderLeft,
      de = C?.borderStyle,
      N = C?.borderColor,
      fe = !!(se || ce || le || ue || de || N),
      pe = fe
        ? {
            '--border-top-width': se,
            '--border-right-width': ce,
            '--border-bottom-width': le,
            '--border-left-width': ue,
            '--border-style': de,
            '--border-color': N,
          }
        : void 0,
      me = { [jx]: i.id },
      he = Op(t?.paddingTop, t?.padding),
      P = Op(t?.paddingBottom, t?.padding),
      ge = Op(t?.paddingLeft, t?.padding),
      ve = Op(t?.paddingRight, t?.padding),
      ye = C?.borderRadius ? { ...i.style, borderRadius: C.borderRadius } : i.style,
      be = x ? (i.layoutDependency ? `${i.layoutDependency}-open` : `open`) : i.layoutDependency,
      xe = m ? void 0 : (i.layoutId ?? (t ? A : void 0));
    return D(O, {
      children: [
        b(e, {
          ...i,
          style: ye,
          onClick: re,
          layoutId: xe,
          ref: g,
          layoutDependency: be,
          transition: j,
        }),
        b(ze, {
          onExitComplete: () => {
            k(() => {
              (w(void 0), u?.start());
            });
          },
          children:
            x &&
            t &&
            v &&
            b(
              l,
              {
                children: T(
                  D(O, {
                    children: [
                      b(_e.div, {
                        ...me,
                        className: n,
                        onClick: ie,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: t.zIndex,
                          backgroundColor: t.backdrop ?? `transparent`,
                        },
                        transition: j,
                        initial: uT,
                        animate: dT,
                        exit: uT,
                      }),
                      b(_e.div, {
                        ...me,
                        className: n,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${he}px ${ve}px ${P}px ${ge}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: t.zIndex,
                        },
                        children: b(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: te,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: t.maxWidth,
                          },
                          children: b(_e.div, {
                            layoutId: xe,
                            transition: j,
                            onClick: ee,
                            className: `framer-lightbox-container`,
                            'data-border': fe,
                            style: {
                              aspectRatio: te,
                              borderRadius: ae,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: oe,
                              filter: M,
                              ...pe,
                            },
                            children: b(Ha, { image: v, alt: v.alt, draggable: i.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  Dp()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function Ip(e, t) {
  return mT && !t
    ? Document.parseHTMLUnsafe(e)
    : ((pT ??= new DOMParser()), pT.parseFromString(e, t ?? `text/html`));
}
function Lp(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function Rp(e, t, n, r) {
  return e.replace(hT, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = ol(u.replace(/&amp;/gu, `&`));
    if (!d || !d.target) return e;
    let f = t(d.target);
    if (!mf(f) || !mf(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Ft(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = cl(u);
    if (!_ || L(_)) return e;
    Dl(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(rS, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = Sn(m, v)), i + o + `"${Lp(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function zp(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function Bp(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function Vp(e, t, n) {
  let r = E([]);
  zp(r.current, e) ||
    ((r.current = e),
    cT.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || J.current() !== J.canvas || (e > 0 && so(n.current));
    }));
}
function Hp() {
  return { current: null };
}
async function Up(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, `current`, {
      get() {
        return n;
      },
      set(e) {
        if (((n = e), e === null)) {
          t.abort();
          return;
        }
        r(e);
      },
      configurable: !0,
    }),
    i
  );
}
function Wp(e) {
  return e in yT;
}
function Gp(e, t) {
  let n = {};
  for (let r in e) {
    if (!Wp(r)) continue;
    let i = e[r],
      a = yT[r];
    nt(i) || nt(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function Kp(e, t = `character`, n, r, i) {
  if (r) {
    let t = Hp();
    return (n.add(t), b(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r;
        return D(
          l,
          {
            children: [
              b(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(bT)?.map((e, t) => {
                  let r = Hp();
                  return (n.add(r), b(`span`, { ref: r, style: i, children: e }, e + t));
                }),
              }),
              a ? null : ` `,
            ],
          },
          e + t + a
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r,
          o = Hp();
        return (
          n.add(o),
          D(
            l,
            { children: [b(`span`, { ref: o, style: i, children: e }), a ? null : ` `] },
            e + t + a
          )
        );
      });
    }
    case `element`:
    default:
      return e;
  }
}
function qp(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      V(t);
  }
}
function Jp(e) {
  let t = [];
  return (
    R(e.x) && t.push(`translateX(${e.x}px)`),
    R(e.y) && t.push(`translateY(${e.y}px)`),
    R(e.scale) && t.push(`scale(${e.scale})`),
    R(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    R(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    R(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    R(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    R(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function Yp(e, t, n, r) {
  if (!n || !n.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Jp(n.effect),
              };
        case `line`:
        case `word`:
        case `character`:
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Jp(n.effect),
              };
      }
    default:
      V(i);
  }
}
function Xp(e, t, n) {
  let r = Ii(() => new Set()),
    i = Ea(),
    a = n || !i,
    o = oe(),
    s = E({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  s.current.effect = e;
  let l = e?.trigger ?? `onMount`,
    u = e?.target,
    d = e?.threshold;
  c(() => {
    if (!a || n) return;
    s.current.hasMounted = !0;
    function e() {
      let { effect: e } = s.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && s.current.hasAnimatedOnce) ||
        (e?.type === `appear` && s.current.isAnimating)
      )
        return;
      Object.assign(s.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            c = { current: void 0 };
          return (
            Qp(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              o,
              () => {
                Object.assign(s.current, { isAnimating: !1 });
              },
              c
            ),
            () => c.current?.()
          );
        }
        default:
          V(t);
      }
    }
    switch (l) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? je(n, e, { amount: d ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = u?.ref?.current;
        return t
          ? je(t, e, {
              amount: d ?? 0,
              root: document,
              margin: u?.offset ? `${u.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        V(l);
    }
  }, [a, r, n, t, u, d, l]);
  let p = !!e,
    m = e ? qp(e) : void 0;
  return f(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !p)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = s.current,
          c = Yp(a, n || Zp(e, t, i), s.current.effect, o);
        return {
          text: (e) => Kp(e, m, r, o, c),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = Hp();
            return (r.add(t), { ref: t, style: { ...e, ...c } });
          },
        };
      },
      play: () => {
        let { effect: e } = s.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            Qp(m, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            V(t);
        }
      },
    }),
    [a, p, r, n, m]
  );
}
function Zp(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function Qp(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = Gp(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await $p(n, u);
      if (
        e === null ||
        (Ae(e, l, { ...r, restDelta: 0.001, delay: he(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        Ae(e, o ? { opacity: t.opacity } : t, {
          ...r,
          restDelta: 0.001,
          delay: he(r?.delay ?? 0, { startDelay: i }),
        });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await Up(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (Me.read(() => {
          ((e = em(n)),
            e.length !== 0 &&
              Me.update(() => {
                let t = e.map((e, t) =>
                  Ae(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          Ae(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      V(e);
  }
}
async function $p(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await Up(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function em(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function tm(e) {
  return e.type === l;
}
function nm(e) {
  return e.type === `br`;
}
function rm(e, t, n, r, a = {}, o, s = tm(e) ? -1 : 0) {
  let c = i.toArray(e.props.children);
  nt(n) || (c = c.slice(0, 1));
  let l = !0;
  c = c.map((e) => {
    if (((!S(e) || !nm(e)) && (l = !1), S(e))) return rm(e, t, n, r, a, o, s + 1);
    let i = nt(n) ? e : n;
    return L(i) && o ? o.text(i) : i;
  });
  let { 'data-preset-tag': d, ...f } = e.props;
  if (L(e.type) || Ze(e.type)) {
    let n = Fe(e.type) || e.type,
      i = d || n,
      u = L(i) ? t?.[i] : void 0;
    ((f.className = zs(`framer-text`, f.className, u)),
      o && s === 0 && !l && Object.assign(f, o.props(f.style)));
    let p = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      m = t?.anchor;
    if (p && m) {
      let e = im(c, a);
      f.id = e;
      let t = zs(`framer-text`, m),
        n = b(`a`, { href: `#${e}`, className: t, children: c });
      ((f.style = { ...(f.style ?? {}), scrollMarginTop: r }), (c = [n]));
    }
  }
  return u(e, f, ...c);
}
function im(e, t) {
  let n = fr(e.map(am).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function am(e) {
  return L(e) || R(e)
    ? e.toString()
    : S(e)
      ? am(e.props.children)
      : Array.isArray(e)
        ? e.map(am).join(``)
        : ``;
}
function om(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = Yr(n.x, n.y),
    i = y_(Yr(0.5, 0.5), r),
    a = Y.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: Yr.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  B(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !Yr.isEqual(e, s) && !Yr.isEqual(e, c));
  B(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = y_.intersection(i, y_(s, c)),
    f = y_.intersection(i, y_(l, u));
  return (B(d && f, `linearGradientLine: Must have a start and end point.`), y_(d, f));
}
function sm(e, t) {
  let n = om(e.angle),
    r = _o(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = y_.pointAtPercentDistance(n, i),
    s = y_.pointAtPercentDistance(n, a),
    c = Je([i, a], [0, 1]);
  return {
    id: `id${t}g${Oy.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: Sy.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function cm(e, t) {
  return {
    id: `id${t}g${Ay.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: _o(e).map((t) => ({
      color: t.value,
      alpha: Sy.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function lm(e) {
  if (!L(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return R(parseFloat(t));
}
function um(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return R(n) ? n : 50;
}
function dm(e) {
  return lm(e) ? um(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function fm(e) {
  return lm(e) ? um(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function pm(e, t, n, r) {
  if (((e = Hg.get(e, `#09F`)), !uy.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
  let i = e.pixelWidth,
    a = e.pixelHeight,
    o,
    { fit: s } = e,
    c = 1,
    l = 1,
    u = 0,
    d = 0;
  if (s === `fill` || s === `fit` || s === `tile` || !s) {
    let n = 1,
      f = 1,
      p = i / a,
      m = t.height * p,
      h = t.width / p,
      g = m / t.width,
      _ = h / t.height;
    if (s === `tile`) {
      ((e.backgroundSize ??= 1),
        (c = Math.round(e.backgroundSize * (i / 2))),
        (l = Math.round(e.backgroundSize * (a / 2))));
      let n = t.x ?? 0,
        s = t.y ?? 0,
        f = 0,
        p = 0;
      (r && ((f = n), (p = s)),
        (u = (t.width - c) * dm(e.positionX) + f),
        (d = (t.height - l) * fm(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * fm(e.positionY)))
        : ((n = g), (u = (1 - g) * dm(e.positionX))),
        (o = `translate(${u}, ${d}) scale(${n}, ${f})`));
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? ``,
    transform: o,
    width: c,
    height: l,
    offsetX: u,
    offsetY: d,
  };
}
function mm(e) {
  return e.startsWith(`data:${OT}`);
}
function hm(e, t) {
  if (/^\w+:/u.test(e) && !mm(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = J.current() === J.export;
  return X.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function gm(e) {
  try {
    let t = Ip(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function _m(e, t) {
  ym(e, vm(t));
}
function vm(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function ym(e, t) {
  (bm(e, t),
    Array.from(e.children).forEach((e) => {
      ym(e, t);
    }));
}
function bm(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function xm(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (FT[t[2]] || 1));
}
function Sm(e) {
  let t = xm(e.getAttribute(`width`)),
    n = xm(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function Cm(e) {
  return e.indexOf(`image`) >= 0;
}
function wm(e) {
  return e.indexOf(`var(--`) >= 0;
}
function Tm(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function Em(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? K,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = PT.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && Qi(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    H(s) &&
    H(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l && l.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function Dm(e) {
  return e > BT ? `lazy` : void 0;
}
function Om(e, t, n) {
  let r = jm(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function km(e) {
  return e ? (e.fonts ?? Or()) : Or();
}
function Am(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : jm(e);
}
function jm(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    Mm(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(Nm) })
      : t.fonts.push(Nm(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function Mm(e) {
  return VT in e;
}
function Nm(e) {
  let t = Pm(e) || Fm(e) ? e : Im(e);
  return Fm(t) ? t : Lm(t);
}
function Pm(e) {
  return `source` in e;
}
function Fm(e) {
  return `cssFamilyName` in e;
}
function Im(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function Lm(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${Nw}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function Rm(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
var zm,
  Bm,
  Vm,
  Hm,
  Um,
  Wm,
  Gm,
  Km,
  qm,
  Jm,
  Ym,
  Xm,
  Zm,
  Qm,
  $m,
  eh,
  th,
  nh,
  rh,
  ih,
  ah,
  oh,
  sh,
  ch,
  lh,
  uh,
  dh,
  fh,
  ph,
  mh,
  hh,
  gh,
  _h,
  vh,
  yh,
  K,
  bh,
  xh,
  Sh,
  Ch,
  wh,
  Th,
  Eh,
  Dh,
  Oh,
  kh,
  Ah,
  jh,
  Mh,
  Nh,
  Ph,
  Fh,
  Ih,
  Lh,
  Rh,
  zh,
  Bh,
  Vh,
  Hh,
  Uh,
  Wh,
  Gh,
  Kh,
  qh,
  Jh,
  Yh,
  Xh,
  Zh,
  Qh,
  $h,
  eg,
  tg,
  ng,
  rg,
  ig,
  ag,
  og,
  sg,
  cg,
  lg,
  ug,
  dg,
  fg,
  pg,
  mg,
  hg,
  gg,
  _g,
  vg,
  yg,
  bg,
  xg,
  Sg,
  Cg,
  wg,
  Tg,
  Eg,
  Dg,
  Og,
  kg,
  Ag,
  jg,
  Mg,
  Ng,
  Pg,
  Fg,
  Ig,
  Lg,
  Rg,
  zg,
  Bg,
  Vg,
  Hg,
  Ug,
  Wg,
  Gg,
  Kg,
  qg,
  Jg,
  Yg,
  Xg,
  Zg,
  Qg,
  $g,
  e_,
  t_,
  q,
  n_,
  r_,
  i_,
  a_,
  o_,
  s_,
  c_,
  l_,
  u_,
  d_,
  J,
  f_,
  p_,
  m_,
  h_,
  g_,
  __,
  v_,
  y_,
  Y,
  b_,
  x_,
  S_,
  C_,
  w_,
  T_,
  E_,
  D_,
  O_,
  k_,
  A_,
  j_,
  M_,
  N_,
  P_,
  F_,
  I_,
  L_,
  R_,
  z_,
  B_,
  V_,
  H_,
  U_,
  W_,
  G_,
  K_,
  q_,
  J_,
  Y_,
  X_,
  Z_,
  Q_,
  $_,
  ev,
  tv,
  nv,
  rv,
  iv,
  av,
  ov,
  sv,
  cv,
  lv,
  uv,
  dv,
  fv,
  pv,
  mv,
  hv,
  gv,
  _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  X,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  Z,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  Q,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  $,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT = e(() => {
    (n(),
      //! Credit to Astro | MIT License
      /**
       * @license Emotion v11.0.0
       * MIT License
       *
       * Copyright (c) Emotion team and other contributors
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in all
       * copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
       * SOFTWARE.
       */
      /*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
      we(),
      Pe(),
      a(),
      te(),
      v(),
      (zm = Ue({
        '../../../node_modules/hsluv/dist/hsluv.cjs'(e) {
          (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.Hsluv = void 0));
          var t = class e {
            constructor() {
              ((this.hex = `#000000`),
                (this.rgb_r = 0),
                (this.rgb_g = 0),
                (this.rgb_b = 0),
                (this.xyz_x = 0),
                (this.xyz_y = 0),
                (this.xyz_z = 0),
                (this.luv_l = 0),
                (this.luv_u = 0),
                (this.luv_v = 0),
                (this.lch_l = 0),
                (this.lch_c = 0),
                (this.lch_h = 0),
                (this.hsluv_h = 0),
                (this.hsluv_s = 0),
                (this.hsluv_l = 0),
                (this.hpluv_h = 0),
                (this.hpluv_p = 0),
                (this.hpluv_l = 0),
                (this.r0s = 0),
                (this.r0i = 0),
                (this.r1s = 0),
                (this.r1i = 0),
                (this.g0s = 0),
                (this.g0i = 0),
                (this.g1s = 0),
                (this.g1i = 0),
                (this.b0s = 0),
                (this.b0i = 0),
                (this.b1s = 0),
                (this.b1i = 0));
            }
            static fromLinear(e) {
              return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
            }
            static toLinear(e) {
              return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
            }
            static yToL(t) {
              return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
            }
            static lToY(t) {
              return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
            }
            static rgbChannelToHex(t) {
              let n = Math.round(t * 255),
                r = n % 16,
                i = ((n - r) / 16) | 0;
              return e.hexChars.charAt(i) + e.hexChars.charAt(r);
            }
            static hexToRgbChannel(t, n) {
              let r = e.hexChars.indexOf(t.charAt(n)),
                i = e.hexChars.indexOf(t.charAt(n + 1));
              return (r * 16 + i) / 255;
            }
            static distanceFromOriginAngle(e, t, n) {
              let r = t / (Math.sin(n) - e * Math.cos(n));
              return r < 0 ? 1 / 0 : r;
            }
            static distanceFromOrigin(e, t) {
              return Math.abs(t) / Math.sqrt(e ** 2 + 1);
            }
            static min6(e, t, n, r, i, a) {
              return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
            }
            rgbToHex() {
              ((this.hex = `#`),
                (this.hex += e.rgbChannelToHex(this.rgb_r)),
                (this.hex += e.rgbChannelToHex(this.rgb_g)),
                (this.hex += e.rgbChannelToHex(this.rgb_b)));
            }
            hexToRgb() {
              ((this.hex = this.hex.toLowerCase()),
                (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
                (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
                (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
            }
            xyzToRgb() {
              ((this.rgb_r = e.fromLinear(
                e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
              )),
                (this.rgb_g = e.fromLinear(
                  e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
                )),
                (this.rgb_b = e.fromLinear(
                  e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
                )));
            }
            rgbToXyz() {
              let t = e.toLinear(this.rgb_r),
                n = e.toLinear(this.rgb_g),
                r = e.toLinear(this.rgb_b);
              ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
                (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
                (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
            }
            xyzToLuv() {
              let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
                n = 4 * this.xyz_x,
                r = 9 * this.xyz_y;
              (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
                (this.luv_l = e.yToL(this.xyz_y)),
                this.luv_l === 0
                  ? ((this.luv_u = 0), (this.luv_v = 0))
                  : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                    (this.luv_v = 13 * this.luv_l * (r - e.refV))));
            }
            luvToXyz() {
              if (this.luv_l === 0) {
                ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
                return;
              }
              let t = this.luv_u / (13 * this.luv_l) + e.refU,
                n = this.luv_v / (13 * this.luv_l) + e.refV;
              ((this.xyz_y = e.lToY(this.luv_l)),
                (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
                (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
            }
            luvToLch() {
              ((this.lch_l = this.luv_l),
                (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
                this.lch_c < 1e-8
                  ? (this.lch_h = 0)
                  : ((this.lch_h = (Math.atan2(this.luv_v, this.luv_u) * 180) / Math.PI),
                    this.lch_h < 0 && (this.lch_h = 360 + this.lch_h)));
            }
            lchToLuv() {
              let e = (this.lch_h / 180) * Math.PI;
              ((this.luv_l = this.lch_l),
                (this.luv_u = Math.cos(e) * this.lch_c),
                (this.luv_v = Math.sin(e) * this.lch_c));
            }
            calculateBoundingLines(t) {
              let n = (t + 16) ** 3 / 1560896,
                r = n > e.epsilon ? n : t / e.kappa,
                i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
                a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
                o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
                s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
                c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
                l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
                u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
                d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
                f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
              ((this.r0s = i / o),
                (this.r0i = (a * t) / o),
                (this.r1s = i / (o + 126452)),
                (this.r1i = ((a - 769860) * t) / (o + 126452)),
                (this.g0s = s / l),
                (this.g0i = (c * t) / l),
                (this.g1s = s / (l + 126452)),
                (this.g1i = ((c - 769860) * t) / (l + 126452)),
                (this.b0s = u / f),
                (this.b0i = (d * t) / f),
                (this.b1s = u / (f + 126452)),
                (this.b1i = ((d - 769860) * t) / (f + 126452)));
            }
            calcMaxChromaHpluv() {
              let t = e.distanceFromOrigin(this.r0s, this.r0i),
                n = e.distanceFromOrigin(this.r1s, this.r1i),
                r = e.distanceFromOrigin(this.g0s, this.g0i),
                i = e.distanceFromOrigin(this.g1s, this.g1i),
                a = e.distanceFromOrigin(this.b0s, this.b0i),
                o = e.distanceFromOrigin(this.b1s, this.b1i);
              return e.min6(t, n, r, i, a, o);
            }
            calcMaxChromaHsluv(t) {
              let n = (t / 360) * Math.PI * 2,
                r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
                i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
                a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
                o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
                s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
                c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
              return e.min6(r, i, a, o, s, c);
            }
            hsluvToLch() {
              (this.hsluv_l > 99.9999999
                ? ((this.lch_l = 100), (this.lch_c = 0))
                : this.hsluv_l < 1e-8
                  ? ((this.lch_l = 0), (this.lch_c = 0))
                  : ((this.lch_l = this.hsluv_l),
                    this.calculateBoundingLines(this.hsluv_l),
                    (this.lch_c = (this.calcMaxChromaHsluv(this.hsluv_h) / 100) * this.hsluv_s)),
                (this.lch_h = this.hsluv_h));
            }
            lchToHsluv() {
              if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
              else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHsluv(this.lch_h);
                ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
              }
              this.hsluv_h = this.lch_h;
            }
            hpluvToLch() {
              (this.hpluv_l > 99.9999999
                ? ((this.lch_l = 100), (this.lch_c = 0))
                : this.hpluv_l < 1e-8
                  ? ((this.lch_l = 0), (this.lch_c = 0))
                  : ((this.lch_l = this.hpluv_l),
                    this.calculateBoundingLines(this.hpluv_l),
                    (this.lch_c = (this.calcMaxChromaHpluv() / 100) * this.hpluv_p)),
                (this.lch_h = this.hpluv_h));
            }
            lchToHpluv() {
              if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
              else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHpluv();
                ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
              }
              this.hpluv_h = this.lch_h;
            }
            hsluvToRgb() {
              (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
            }
            hpluvToRgb() {
              (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
            }
            hsluvToHex() {
              (this.hsluvToRgb(), this.rgbToHex());
            }
            hpluvToHex() {
              (this.hpluvToRgb(), this.rgbToHex());
            }
            rgbToHsluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHsluv());
            }
            rgbToHpluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHpluv());
            }
            hexToHsluv() {
              (this.hexToRgb(), this.rgbToHsluv());
            }
            hexToHpluv() {
              (this.hexToRgb(), this.rgbToHpluv());
            }
          };
          ((e.Hsluv = t),
            (t.hexChars = `0123456789abcdef`),
            (t.refY = 1),
            (t.refU = 0.19783000664283),
            (t.refV = 0.46831999493879),
            (t.kappa = 903.2962962),
            (t.epsilon = 0.0088564516),
            (t.m_r0 = 3.240969941904521),
            (t.m_r1 = -1.537383177570093),
            (t.m_r2 = -0.498610760293),
            (t.m_g0 = -0.96924363628087),
            (t.m_g1 = 1.87596750150772),
            (t.m_g2 = 0.041555057407175),
            (t.m_b0 = 0.055630079696993),
            (t.m_b1 = -0.20397695888897),
            (t.m_b2 = 1.056971514242878));
        },
      })),
      (Bm = Ue({
        '../../../node_modules/eventemitter3/index.js'(e, t) {
          var n = Object.prototype.hasOwnProperty,
            r = `~`;
          function i() {}
          Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
          function a(e, t, n) {
            ((this.fn = e), (this.context = t), (this.once = n || !1));
          }
          function o(e, t, n, i, o) {
            if (typeof n != `function`) throw TypeError(`The listener must be a function`);
            var s = new a(n, i || e, o),
              c = r ? r + t : t;
            return (
              e._events[c]
                ? e._events[c].fn
                  ? (e._events[c] = [e._events[c], s])
                  : e._events[c].push(s)
                : ((e._events[c] = s), e._eventsCount++),
              e
            );
          }
          function s(e, t) {
            --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
          }
          function c() {
            ((this._events = new i()), (this._eventsCount = 0));
          }
          ((c.prototype.eventNames = function () {
            var e = [],
              t,
              i;
            if (this._eventsCount === 0) return e;
            for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
          }),
            (c.prototype.listeners = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
              return o;
            }),
            (c.prototype.listenerCount = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              return n ? (n.fn ? 1 : n.length) : 0;
            }),
            (c.prototype.emit = function (e, t, n, i, a, o) {
              var s = r ? r + e : e;
              if (!this._events[s]) return !1;
              var c = this._events[s],
                l = arguments.length,
                u,
                d;
              if (c.fn) {
                switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                  case 1:
                    return (c.fn.call(c.context), !0);
                  case 2:
                    return (c.fn.call(c.context, t), !0);
                  case 3:
                    return (c.fn.call(c.context, t, n), !0);
                  case 4:
                    return (c.fn.call(c.context, t, n, i), !0);
                  case 5:
                    return (c.fn.call(c.context, t, n, i, a), !0);
                  case 6:
                    return (c.fn.call(c.context, t, n, i, a, o), !0);
                }
                for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
                c.fn.apply(c.context, u);
              } else {
                var f = c.length,
                  p;
                for (d = 0; d < f; d++)
                  switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                    case 1:
                      c[d].fn.call(c[d].context);
                      break;
                    case 2:
                      c[d].fn.call(c[d].context, t);
                      break;
                    case 3:
                      c[d].fn.call(c[d].context, t, n);
                      break;
                    case 4:
                      c[d].fn.call(c[d].context, t, n, i);
                      break;
                    default:
                      if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                      c[d].fn.apply(c[d].context, u);
                  }
              }
              return !0;
            }),
            (c.prototype.on = function (e, t, n) {
              return o(this, e, t, n, !1);
            }),
            (c.prototype.once = function (e, t, n) {
              return o(this, e, t, n, !0);
            }),
            (c.prototype.removeListener = function (e, t, n, i) {
              var a = r ? r + e : e;
              if (!this._events[a]) return this;
              if (!t) return (s(this, a), this);
              var o = this._events[a];
              if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
              else {
                for (var c = 0, l = [], u = o.length; c < u; c++)
                  (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
                l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
              }
              return this;
            }),
            (c.prototype.removeAllListeners = function (e) {
              var t;
              return (
                e
                  ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                  : ((this._events = new i()), (this._eventsCount = 0)),
                this
              );
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.addListener = c.prototype.on),
            (c.prefixed = r),
            (c.EventEmitter = c),
            t !== void 0 && (t.exports = c));
        },
      })),
      (Vm = Ue({
        '../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js'(
          e
        ) {
          var t = typeof Symbol == `function` && Symbol.for,
            n = t ? Symbol.for(`react.element`) : 60103,
            r = t ? Symbol.for(`react.portal`) : 60106,
            i = t ? Symbol.for(`react.fragment`) : 60107,
            a = t ? Symbol.for(`react.strict_mode`) : 60108,
            o = t ? Symbol.for(`react.profiler`) : 60114,
            s = t ? Symbol.for(`react.provider`) : 60109,
            c = t ? Symbol.for(`react.context`) : 60110,
            l = t ? Symbol.for(`react.async_mode`) : 60111,
            u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
            d = t ? Symbol.for(`react.forward_ref`) : 60112,
            f = t ? Symbol.for(`react.suspense`) : 60113,
            p = t ? Symbol.for(`react.suspense_list`) : 60120,
            m = t ? Symbol.for(`react.memo`) : 60115,
            h = t ? Symbol.for(`react.lazy`) : 60116,
            g = t ? Symbol.for(`react.block`) : 60121,
            _ = t ? Symbol.for(`react.fundamental`) : 60117,
            v = t ? Symbol.for(`react.responder`) : 60118,
            y = t ? Symbol.for(`react.scope`) : 60119;
          function b(e) {
            if (typeof e == `object` && e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  switch (((e = e.type), e)) {
                    case l:
                    case u:
                    case i:
                    case o:
                    case a:
                    case f:
                      return e;
                    default:
                      switch (((e &&= e.$$typeof), e)) {
                        case c:
                        case d:
                        case h:
                        case m:
                        case s:
                          return e;
                        default:
                          return t;
                      }
                  }
                case r:
                  return t;
              }
            }
          }
          function x(e) {
            return b(e) === u;
          }
          ((e.AsyncMode = l),
            (e.ConcurrentMode = u),
            (e.ContextConsumer = c),
            (e.ContextProvider = s),
            (e.Element = n),
            (e.ForwardRef = d),
            (e.Fragment = i),
            (e.Lazy = h),
            (e.Memo = m),
            (e.Portal = r),
            (e.Profiler = o),
            (e.StrictMode = a),
            (e.Suspense = f),
            (e.isAsyncMode = function (e) {
              return x(e) || b(e) === l;
            }),
            (e.isConcurrentMode = x),
            (e.isContextConsumer = function (e) {
              return b(e) === c;
            }),
            (e.isContextProvider = function (e) {
              return b(e) === s;
            }),
            (e.isElement = function (e) {
              return typeof e == `object` && !!e && e.$$typeof === n;
            }),
            (e.isForwardRef = function (e) {
              return b(e) === d;
            }),
            (e.isFragment = function (e) {
              return b(e) === i;
            }),
            (e.isLazy = function (e) {
              return b(e) === h;
            }),
            (e.isMemo = function (e) {
              return b(e) === m;
            }),
            (e.isPortal = function (e) {
              return b(e) === r;
            }),
            (e.isProfiler = function (e) {
              return b(e) === o;
            }),
            (e.isStrictMode = function (e) {
              return b(e) === a;
            }),
            (e.isSuspense = function (e) {
              return b(e) === f;
            }),
            (e.isValidElementType = function (e) {
              return (
                typeof e == `string` ||
                typeof e == `function` ||
                e === i ||
                e === u ||
                e === o ||
                e === a ||
                e === f ||
                e === p ||
                (typeof e == `object` &&
                  !!e &&
                  (e.$$typeof === h ||
                    e.$$typeof === m ||
                    e.$$typeof === s ||
                    e.$$typeof === c ||
                    e.$$typeof === d ||
                    e.$$typeof === _ ||
                    e.$$typeof === v ||
                    e.$$typeof === y ||
                    e.$$typeof === g))
              );
            }),
            (e.typeOf = b));
        },
      })),
      (Hm = Ue({
        '../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js'(e, t) {
          t.exports = Vm();
        },
      })),
      (Um = Ue({
        '../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'(e, t) {
          var n = Hm(),
            r = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
            o = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            s = {};
          ((s[n.ForwardRef] = a), (s[n.Memo] = o));
          function c(e) {
            return n.isMemo(e) ? o : s[e.$$typeof] || r;
          }
          var l = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
          function h(e, t, n) {
            if (typeof t != `string`) {
              if (m) {
                var r = p(t);
                r && r !== m && h(e, r, n);
              }
              var a = u(t);
              d && (a = a.concat(d(t)));
              for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                var _ = a[g];
                if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                  var v = f(t, _);
                  try {
                    l(e, _, v);
                  } catch {}
                }
              }
            }
            return e;
          }
          t.exports = h;
        },
      })),
      (Wm = Ue({
        '../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js'(e, t) {
          (function () {
            function e(e, t) {
              document.addEventListener
                ? e.addEventListener(`scroll`, t, !1)
                : e.attachEvent(`scroll`, t);
            }
            function n(e) {
              document.body
                ? e()
                : document.addEventListener
                  ? document.addEventListener(`DOMContentLoaded`, function t() {
                      (document.removeEventListener(`DOMContentLoaded`, t), e());
                    })
                  : document.attachEvent(`onreadystatechange`, function t() {
                      (document.readyState == `interactive` || document.readyState == `complete`) &&
                        (document.detachEvent(`onreadystatechange`, t), e());
                    });
            }
            function r(e) {
              ((this.g = document.createElement(`div`)),
                this.g.setAttribute(`aria-hidden`, `true`),
                this.g.appendChild(document.createTextNode(e)),
                (this.h = document.createElement(`span`)),
                (this.i = document.createElement(`span`)),
                (this.m = document.createElement(`span`)),
                (this.j = document.createElement(`span`)),
                (this.l = -1),
                (this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`),
                this.h.appendChild(this.m),
                this.i.appendChild(this.j),
                this.g.appendChild(this.h),
                this.g.appendChild(this.i));
            }
            function i(e, t) {
              e.g.style.cssText =
                `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` +
                t +
                `;`;
            }
            function a(e) {
              var t = e.g.offsetWidth,
                n = t + 100;
              return (
                (e.j.style.width = n + `px`),
                (e.i.scrollLeft = n),
                (e.h.scrollLeft = e.h.scrollWidth + 100),
                e.l === t ? !1 : ((e.l = t), !0)
              );
            }
            function o(t, n) {
              function r() {
                var e = i;
                a(e) && e.g.parentNode !== null && n(e.l);
              }
              var i = t;
              (e(t.h, r), e(t.i, r), a(t));
            }
            function c(e, t, n) {
              ((t ||= {}),
                (n ||= s),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = n));
            }
            var l = null,
              u = null,
              d = null,
              f = null;
            function p(e) {
              return (
                u === null &&
                  (m(e) && /Apple/.test(s.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        s.navigator.userAgent
                      )),
                      (u = !!e && 603 > parseInt(e[1], 10)))
                    : (u = !1)),
                u
              );
            }
            function m(e) {
              return (f === null && (f = !!e.document.fonts), f);
            }
            function h(e, t) {
              var n = e.style,
                r = e.weight;
              if (d === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                d = i.style.font !== ``;
              }
              return [n, r, d ? e.stretch : ``, `100px`, t].join(` `);
            }
            ((c.prototype.load = function (e, t) {
              var a = this,
                c = e || `BESbswy`,
                u = 0,
                d = t || 3e3,
                f = new Date().getTime();
              return new Promise(function (e, t) {
                if (m(a.context) && !p(a.context)) {
                  var g = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - f >= d
                          ? t(Error(`` + d + `ms timeout exceeded`))
                          : a.context.document.fonts
                              .load(h(a, `"` + a.family + `"`), c)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    _ = new Promise(function (e, t) {
                      u = setTimeout(function () {
                        t(Error(`` + d + `ms timeout exceeded`));
                      }, d);
                    });
                  Promise.race([_, g]).then(function () {
                    (clearTimeout(u), e(a));
                  }, t);
                } else
                  n(function () {
                    function n() {
                      var t;
                      ((t = (v != -1 && y != -1) || (v != -1 && b != -1) || (y != -1 && b != -1)) &&
                        ((t = v != y && v != b && y != b) ||
                          (l === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              s.navigator.userAgent
                            )),
                            (l =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 && 11 >= parseInt(t[2], 10))))),
                          (t =
                            l &&
                            ((v == x && y == x && b == x) ||
                              (v == S && y == S && b == S) ||
                              (v == C && y == C && b == C)))),
                        (t = !t)),
                        t &&
                          (w.parentNode !== null && w.parentNode.removeChild(w),
                          clearTimeout(u),
                          e(a)));
                    }
                    function p() {
                      if (new Date().getTime() - f >= d)
                        (w.parentNode !== null && w.parentNode.removeChild(w),
                          t(Error(`` + d + `ms timeout exceeded`)));
                      else {
                        var e = a.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((v = m.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          (b = _.g.offsetWidth),
                          n()),
                          (u = setTimeout(p, 50)));
                      }
                    }
                    var m = new r(c),
                      g = new r(c),
                      _ = new r(c),
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = -1,
                      w = document.createElement(`div`);
                    ((w.dir = `ltr`),
                      i(m, h(a, `sans-serif`)),
                      i(g, h(a, `serif`)),
                      i(_, h(a, `monospace`)),
                      w.appendChild(m.g),
                      w.appendChild(g.g),
                      w.appendChild(_.g),
                      a.context.document.body.appendChild(w),
                      (x = m.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      (C = _.g.offsetWidth),
                      p(),
                      o(m, function (e) {
                        ((v = e), n());
                      }),
                      i(m, h(a, `"` + a.family + `",sans-serif`)),
                      o(g, function (e) {
                        ((y = e), n());
                      }),
                      i(g, h(a, `"` + a.family + `",serif`)),
                      o(_, function (e) {
                        ((b = e), n());
                      }),
                      i(_, h(a, `"` + a.family + `",monospace`)));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = c)
                : ((s.FontFaceObserver = c),
                  (s.FontFaceObserver.prototype.load = c.prototype.load)));
          })();
        },
      })),
      (Gm = () => {}),
      (Km = s !== void 0),
      (qm = (() =>
        Km &&
        (g.webdriver ||
          /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(g.userAgent)))()),
      (Jm = Km && typeof s.requestIdleCallback == `function`),
      (Ym = (() => (Jm ? s.requestIdleCallback : setTimeout))()),
      (Xm = new Map()),
      (Zm = Km ? void 0 : new Set()),
      (Qm = `preload`),
      ($m = Object.keys),
      (eh = `equals`),
      (th = (() => r.createContext({}))()),
      (nh = (() => r.createContext({}))()),
      (rh = []),
      (ih = r.createContext(void 0)),
      (ih.displayName = `LibraryFeaturesContext`),
      (ah = (() => ih.Provider)()),
      (oh = () => r.useContext(ih) ?? {}),
      (sh = `default`),
      (ch = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (lh = class e {
        constructor(e, t) {
          ((this.resolver = e),
            (this.cacheHash = t),
            I(this, `promiseState`, ch.Pending),
            I(this, `preloadPromise`),
            I(this, `value`),
            I(this, `reason`),
            I(this, `read`, () => {
              if (this.promiseState === ch.Fulfilled) return this.value;
              throw this.promiseState === ch.Rejected
                ? this.reason
                : Error(`Need to call preload() before read()`);
            }));
        }
        static is(t) {
          return t instanceof e;
        }
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        then(e, t) {
          return this.promiseState === ch.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === ch.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== ch.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && Zm !== void 0 && Zm.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = ch.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = ch.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && Xm.has(this.cacheHash) ? Xm.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!ct(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (uh = class extends Error {
        constructor(e, t) {
          (super(e), (this.name = `DevalueError`), (this.path = t.join(``)));
        }
      }),
      (dh = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (fh = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (ph = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`),
      (mh = -1),
      (hh = -2),
      (gh = -3),
      (_h = -4),
      (vh = -5),
      (yh = -6),
      (K = Km
        ? s
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            scheduler: void 0,
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (bh = 2),
      (xh = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (Ch = class {
        constructor() {
          (I(this, `payload`, en()), I(this, `isEmpty`, !0));
        }
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return Zt(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (wh = (() => (Km ? void 0 : new Ch()))()),
      (Th = (() => xh.CollectionUtilsCache)()),
      (Eh = new WeakMap()),
      (Dh = A(void 0)),
      (Oh = class {
        constructor(e, t) {
          ((this.collectionId = t),
            I(this, `module`),
            I(this, `cacheMap`, new Map()),
            (this.module = new lh(async () => {
              try {
                let t = await e();
                return (B(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(ut(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        callUtilsMethod(e, t, n) {
          let r = on(n),
            i = sn(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (wh !== void 0) {
              if (ct(e)) return e.then((e) => (wh.set(Th, i, e), e));
              wh.set(Th, i, e);
            }
            return e;
          }
          if (rn(Th, i)) {
            let e = an(Th, i);
            return (this.cacheMap.set(i, new lh(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = ct(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e](t, n)) : a?.[e](t, n);
          } catch (e) {
            (console.error(ut(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (wh !== void 0 && wh.set(Th, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new lh(() =>
            s
              .then((e) => (wh !== void 0 && wh.set(Th, i, e), e))
              .catch((e) => {
                console.error(ut(`Failed to call CollectionUtils method.`, e));
              })
          );
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
      }),
      (kh = (() => K.scheduler && `yield` in K.scheduler)()),
      (Ah = (() => K.scheduler && `postTask` in K.scheduler)()),
      (jh = new Set()),
      (Mh = RegExp(`:([a-z]\\w*)`, `gi`)),
      (Nh = async () => {}),
      (Ph = { activeLocale: null, locales: [], setLocale: Nh }),
      (Fh = (() => {
        let e = r.createContext(Ph);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (Ih = (() => {
        let e = r.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (Lh = !qm),
      (Rh = 46),
      (zh = 47),
      (Bh = (e, t) => e.charCodeAt(t)),
      (Vh = (e, t) => e.lastIndexOf(t)),
      (Hh = (e, t, n) => e.slice(t, n)),
      (Uh = !1),
      (Wh = `/`),
      (Gh = (e) => e === zh),
      (Kh = new Set([`/404.html`, `/404`, `/404/`])),
      (qh = `framer_variant`),
      (Jh = r.createContext({ global: void 0, routes: {} })),
      (Yh = 10),
      (Xh = 1e4),
      (Zh = (e) => `--view-transition-${e}`),
      (Qh = {
        circle: {
          makeKeyframe: (e, t) => {
            let { x: n, y: r } = Ln(e);
            return t === `start`
              ? `clip-path: circle(0 at ${n}px ${r}px);`
              : `clip-path: circle(${Math.hypot(Math.max(n, s.innerWidth - n), Math.max(r, s.innerHeight - r))}px at ${n}px ${r}px);`;
          },
        },
        conic: {
          makeKeyframe: (e, t, n) => {
            let r = 0;
            return (
              ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
                (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
                (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
                (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
                (r = (e.sweepAngle / 360) * 100),
              `${Zh(`conic-offset`)}: ${r}%;`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${Zh(`conic-offset`)})`,
              r =
                (t === `exit` && e.angularDirection === `clockwise`) ||
                (t === `enter` && e.angularDirection === `counter-clockwise`),
              i = r ? `transparent` : `black`,
              a = r ? `black` : `transparent`,
              o = `conic-gradient(from `;
            return (
              (o += `${e.angle}deg at ${e.x} ${e.y}, `),
              (o += `${i} 0%, ${i} ${n}, `),
              (o += `${a} ${n}, ${a} 100%)`),
              `mask-image: ${o}; -webkit-mask-image: ${o};`
            );
          },
          makePropertyRules: () => `
        @property ${Zh(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
        },
        inset: {
          makeKeyframe: (e, t) => {
            let { x: n, y: r } = Ln(e),
              i = s.innerHeight - r,
              a = s.innerWidth - n;
            return t === `start`
              ? `clip-path: inset(${r}px ${a}px ${i}px ${n}px round ${e.round}px);`
              : `clip-path: inset(0 round 0);`;
          },
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = In(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${Zh(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${Zh(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${Zh(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = (t === `start` && n === `exit`) || (t === `end` && n === `enter`) ? 1 : 0;
            return `${Zh(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${Zh(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${Zh(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      ($h = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (eg = `view-transition-styles`),
      (tg = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (ng = () => {}),
      (ig = () => {
        (rg ||
          ((rg = document.createElement(`div`)),
          rg.setAttribute(`aria-live`, `assertive`),
          rg.setAttribute(`aria-atomic`, `true`),
          (rg.style.position = `absolute`),
          (rg.style.transform = `scale(0)`),
          document.body.append(rg)),
          setTimeout(() => {
            rg.textContent = document.title;
          }, 60));
      }),
      (ag = !0),
      (og = (() => {
        if (g === void 0) return !1;
        let e = g.userAgent,
          t = e.indexOf(`Chrome/`),
          n = +e.slice(t + 7, e.indexOf(`.`, t));
        return n > 101 && n < 128;
      })()),
      (sg = (() => Km && typeof s.navigation?.back == `function`)()),
      (cg = /[\s_?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (lg = r.createContext(null)),
      (ug = (() => {
        let e = A({ searchEntries: rh, triggerUpdate: () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (dg =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (fg = (e) => {
        e.target?.closest?.(`#main`) &&
          (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`));
      }),
      (pg = !1),
      (Ag = [yr]),
      (kg = [yr]),
      (Og = [yr]),
      (Dg = [yr]),
      (Eg = [yr]),
      (Tg = [yr]),
      (wg = [yr]),
      (Cg = [yr]),
      (Sg = [yr]),
      (xg = [yr]),
      (bg = [yr]),
      (yg = [yr]),
      (vg = [yr]),
      (_g = [yr]),
      (gg = [yr]),
      (hg = [yr]),
      (mg = [yr]),
      (Mg = class {
        constructor() {
          (Be(jg, 5, this),
            I(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            I(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            I(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            I(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            I(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            I(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            I(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            br(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            br(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        }
        markUseLayoutEffectsStart() {
          performance.mark(`framer-hydration-layout-effects-start`);
        }
        markRouterUseLayoutEffectStart() {
          performance.mark(`framer-hydration-router-layout-effect`);
        }
        markUseLayoutEffectsEnd() {
          (performance.mark(`framer-hydration-layout-effects-end`),
            br(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        }
        markUseEffectsStart() {
          performance.mark(`framer-hydration-effects-start`);
        }
        markUseEffectsRouterStart() {
          performance.mark(`framer-hydration-router-effect`);
        }
        markUseEffectsAreSynchronous() {
          performance.mark(`framer-hydration-effects-sync`);
        }
        markUseEffectsEnd() {
          (performance.mark(`framer-hydration-effects-end`),
            br(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        }
        markRafStart() {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        }
        markRafEnd() {
          (performance.mark(`framer-hydration-browser-raf-end`),
            br(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            br(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            br(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          br(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          br(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (jg = Se(null)),
      N(jg, 1, `markRenderStart`, Ag, Mg),
      N(jg, 1, `markRenderEnd`, kg, Mg),
      N(jg, 1, `markUseInsertionEffectsStart`, Og, Mg),
      N(jg, 1, `markUseInsertionEffectRouterStart`, Dg, Mg),
      N(jg, 1, `markUseInsertionEffectsEnd`, Eg, Mg),
      N(jg, 1, `markUseLayoutEffectsStart`, Tg, Mg),
      N(jg, 1, `markRouterUseLayoutEffectStart`, wg, Mg),
      N(jg, 1, `markUseLayoutEffectsEnd`, Cg, Mg),
      N(jg, 1, `markUseEffectsStart`, Sg, Mg),
      N(jg, 1, `markUseEffectsRouterStart`, xg, Mg),
      N(jg, 1, `markUseEffectsAreSynchronous`, bg, Mg),
      N(jg, 1, `markUseEffectsEnd`, yg, Mg),
      N(jg, 1, `markRafStart`, vg, Mg),
      N(jg, 1, `markRafEnd`, _g, Mg),
      N(jg, 1, `markLayoutStylePaintEnd`, gg, Mg),
      N(jg, 1, `measureMutationEffects`, hg, Mg),
      N(jg, 1, `measureUnattributedHydrationOverhead`, mg, Mg),
      F(jg, Mg),
      (Pg = !1),
      (Fg = { Start: Tr, End: Er }),
      (Ig = class extends Error {}),
      (Lg = class extends x {
        constructor(e) {
          (super(e), (this.state = { error: void 0, forceUpdateKey: e.forceUpdateKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.forceUpdateKey !== t.forceUpdateKey) {
            let n = { forceUpdateKey: e.forceUpdateKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof Ig)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return Dr(e, t);
        }
      }),
      (Rg = Object.freeze([])),
      (Bg = new Set()),
      (Vg = class {
        constructor() {
          (I(this, `observers`, new Set()), I(this, `transactions`, {}));
        }
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (Hg = (() => {
        function e(e) {
          return (
            Ur(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            Wr(e) ? e : new Gg(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : Wr(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              Wr(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (Ug = `onUpdate`),
      (Wg = `finishTransaction`),
      (Gg = class {
        constructor(e) {
          ((this.value = e), I(this, `observers`, new Vg()));
        }
        static interpolationFor(e, t) {
          if (Wr(e)) return Gr(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (Wr(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      ((e) => {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: qr(e.x, t.x), y: qr(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(t) {
          let n = e.centroid(t),
            r = new Map();
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x));
          }
          return t.sort((e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((Yr ||= {})),
      (Kg = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (qg = new ((() => zm().Hsluv)())()),
      (Jg = (() => {
        let e = `(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,
          t =
            `[\\s|\\(]+(` +
            e +
            `)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,
          n =
            `[\\s|\\(]+(` +
            e +
            `)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`;
        return {
          rgb: RegExp(`rgb` + t),
          rgba: RegExp(`rgba` + n),
          hsl: RegExp(`hsl` + t),
          hsla: RegExp(`hsla` + n),
          hsv: RegExp(`hsv` + t),
          hsva: RegExp(`hsva` + n),
          hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
          hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
          hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
          hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        };
      })()),
      (Yg =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (Xg = (e) => {
        let { r: t, g: n, b: r, a: i } = yi(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (Zg = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        xi({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (Qg = (e) => {
        let { r: t, g: n, b: r, a: i } = yi(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      ($g = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        xi({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (e_ = class e {
        constructor(e) {
          (I(this, `format`, `p3`),
            I(this, `r`),
            I(this, `g`),
            I(this, `b`),
            I(this, `a`),
            (this.r = e.r ?? 0),
            (this.g = e.g ?? 0),
            (this.b = e.b ?? 0),
            (this.a = e.a ?? 1));
        }
        hsv() {
          return Si(this);
        }
        rgb() {
          return Ei(this);
        }
        hsl() {
          return ai(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(wi(t));
            case `srgb`:
              return new e(Ti(wi(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            Ti({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = q(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = _i(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!L(t) || !q.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (t_ = new Map()),
      (q = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = t_.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (t_.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = Di(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          } else return;
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => (typeof e == `string` ? mi(e) !== !1 : !1)),
          (e.isColorObject = (e) =>
            z(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => ii(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => (typeof e == `string` ? e_.isP3String(e) : !1)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...ei(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = ci(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = ci(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = ii(e.r, e.g, e.b, !0);
            for (let e of Object.keys(Kg)) if (Kg[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: Xr(i, [0, 1], [t.r, r.r], a),
                g: Xr(i, [0, 1], [t.g, r.g], a),
                b: Xr(i, [0, 1], [t.b, r.b], a),
                a: Xr(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: Xr(i, [0, 1], [u, u + f], a),
                s: Xr(i, [0, 1], [c.s, l.s], a),
                l: Xr(i, [0, 1], [c.l, l.l], a),
                a: Xr(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(ti(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => ai(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !!(
              (t.toLowerCase().slice(-5) === `color` || t === `fill` || t === `stroke`) &&
              typeof n == `string` &&
              e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        let r = Je([0, 255], [0, 1]);
        function i(e) {
          e = r(e);
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: r, b: a } = e.toRgb(t);
            return 0.2126 * i(n) + 0.7152 * i(r) + 0.0722 * i(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (n_ = (e) => e instanceof Ke),
      (r_ = (() => Bm().EventEmitter)()),
      (i_ = class {
        constructor() {
          I(this, `_emitter`, new r_());
        }
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (a_ = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (o_ = (() => K.requestAnimationFrame || a_)()),
      (s_ = (e) => o_(e)),
      (c_ = (() => 1 / 60)()),
      (l_ = class extends i_ {
        constructor(e = !1) {
          (super(),
            I(this, `_started`, !1),
            I(this, `_frame`, 0),
            I(this, `_frameTasks`, []),
            I(this, `tick`, () => {
              this._started &&
                (s_(this.tick),
                this.emit(`update`, this._frame, c_),
                this.emit(`render`, this._frame, c_),
                this._processFrameTasks(),
                this._frame++);
            }),
            e && this.start());
        }
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          c_ = e;
        }
        static get TimeStep() {
          return c_;
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), s_(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * c_;
        }
      }),
      (u_ = new l_()),
      (d_ = {
        target: K.location.origin === `https://screenshot.framer.invalid` ? `EXPORT` : `PREVIEW`,
        zoom: 1,
      }),
      (J = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => d_.target,
        hasRestrictions: () => {
          let e = d_.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (f_ = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      Oe({
        borderTopWidth: f_(`y`),
        borderLeftWidth: f_(`x`),
        borderRightWidth: f_(`x`),
        borderBottomWidth: f_(`y`),
      }),
      (p_ = r.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (m_ = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (h_ = (() => ({
        ...m_,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }))()),
      (g_ = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (__ = (() => ({ ...g_, fontWeight: 500 }))()),
      (v_ = (() => ({
        ...g_,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }))()),
      (y_ = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = Hi(Yr.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(Yr(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => Yr.distance(e.a, e.b)),
          e
        );
      })()),
      (Y = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => Y.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: Kr(e.x, t),
          y: Kr(e.y, t),
          width: Kr(e.width, t),
          height: Kr(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: Y.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: Y.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: Yr.distance(t, n), height: Yr.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(Y.minX)), y: Math.min(...e.map(Y.minY)) },
            n = { x: Math.max(...e.map(Y.maxX)), y: Math.max(...e.map(Y.maxY)) };
          return Y.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: Y.minX(e), y: Y.minY(e) },
          { x: Y.minX(e), y: Y.maxY(e) },
          { x: Y.maxX(e), y: Y.minY(e) },
          { x: Y.maxX(e), y: Y.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < Y.minX(e) ||
            t.x > Y.maxX(e) ||
            t.y < Y.minY(e) ||
            t.y > Y.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of Y.points(t)) if (!Y.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= Y.maxX(e) || Y.maxX(t) <= e.x || t.y >= Y.maxY(e) || Y.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = Y.maxX(e),
            r = Y.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = Y.maxY(e),
            r = Y.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => t.find((t) => Y.intersects(t, e)) === void 0,
        isEqual: (e, t) => Y.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > Y.maxX(e) && (n = t.x - Y.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > Y.maxY(e) && (r = t.y - Y.maxY(e)),
            Yr.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: Y.minX(e), y: Y.minY(e) },
            r = { x: Y.minX(t), y: Y.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = Y.minX(e),
            r = Y.minY(e),
            i = Y.maxX(e),
            a = Y.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = Y.cornerPoints(e);
          return [y_(t, n), y_(n, r), y_(r, i), y_(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  V(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              V(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  V(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              V(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = y_(t, Y.center(e)),
            r = Y.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && y_.intersection(n, t, !0)) {
              let n = b_[e];
              return (B(n, `Invalid edge name`, b_), { edge: t, name: n });
            }
          }
        },
      }),
      (b_ = [`top`, `right`, `bottom`, `left`]),
      (x_ = {
        quickfix: (e) => (
          (Ui(e.widthType) || Ui(e.heightType)) && (e.aspectRatio = null),
          H(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || Ui(e.widthType) || H(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || Ui(e.heightType) || H(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (S_ = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = x_.quickfix({
              left: H(t) || Wr(t),
              right: H(n) || Wr(n),
              top: H(r) || Wr(r),
              bottom: H(i) || Wr(i),
              widthType: Wi(a),
              heightType: Wi(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = Hg.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = Hg.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? Hg.getNumber(t) : null,
              right: d.right ? Hg.getNumber(n) : null,
              top: d.top ? Hg.getNumber(r) : null,
              bottom: d.bottom ? Hg.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? Hg.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? Hg.getNumber(t?.sizing.height) : null,
            c = Xi(e.left, e.right);
          if (o && H(c)) i = o - c;
          else if (n && Ui(e.widthType)) i = n.width;
          else if (H(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                V(e.widthType);
            }
          let l = Xi(e.top, e.bottom);
          if (s && H(l)) a = s - l;
          else if (n && Ui(e.heightType)) a = n.height;
          else if (H(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                V(e.heightType);
            }
          return Yi(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = S_.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? Hg.getNumber(l.width) : null,
            d = l ? Hg.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? Y.pixelAligned(f) : f;
        },
      }),
      (C_ = 200),
      (w_ = 200),
      (T_ = r.createContext({ parentSize: 0 })),
      (E_ = (e) => {
        let t = ia(),
          { parentSize: n, children: i } = e,
          a = r.useMemo(() => ({ parentSize: n }), [oa(n), sa(n)]);
        return t === 1
          ? i
            ? b(O, { children: i })
            : null
          : b(T_.Provider, { value: a, children: i });
      }),
      (D_ = ((e) => (
        (e.Boolean = `boolean`),
        (e.Number = `number`),
        (e.String = `string`),
        (e.RichText = `richtext`),
        (e.FusedNumber = `fusednumber`),
        (e.Enum = `enum`),
        (e.SegmentedEnum = `segmentedenum`),
        (e.Color = `color`),
        (e.Image = `image`),
        (e.ResponsiveImage = `responsiveimage`),
        (e.File = `file`),
        (e.ComponentInstance = `componentinstance`),
        (e.Slot = `slot`),
        (e.Array = `array`),
        (e.EventHandler = `eventhandler`),
        (e.Transition = `transition`),
        (e.BoxShadow = `boxshadow`),
        (e.Link = `link`),
        (e.Date = `date`),
        (e.Object = `object`),
        (e.Font = `font`),
        (e.PageScope = `pagescope`),
        (e.ScrollSectionRef = `scrollsectionref`),
        (e.CustomCursor = `customcursor`),
        (e.Border = `border`),
        (e.Cursor = `cursor`),
        (e.Padding = `padding`),
        (e.BorderRadius = `borderradius`),
        (e.Gap = `gap`),
        (e.CollectionReference = `collectionreference`),
        (e.MultiCollectionReference = `multicollectionreference`),
        (e.TrackingId = `trackingid`),
        (e.VectorSetItem = `vectorsetitem`),
        (e.LinkRelValues = `linkrelvalues`),
        e
      ))(D_ || {})),
      (O_ = r.createContext(void 0)),
      (k_ = new Set()),
      (j_ = g === void 0 ? void 0 : g),
      (M_ = () => typeof document == `object`),
      (N_ = () => j_ && /Chrome/u.test(j_.userAgent) && /Google Inc/u.test(j_.vendor) && !L_()),
      (P_ = () => j_ && /Safari/u.test(j_.userAgent) && /Apple Computer/u.test(j_.vendor)),
      (F_ = () => j_ && /Firefox\/\d+\.\d+$/u.test(j_.userAgent)),
      (I_ = () => j_ && /FramerX/u.test(j_.userAgent)),
      (L_ = () => j_ && /Edg\//u.test(j_.userAgent)),
      (R_ = /iPhone|iPod|iPad/iu),
      (z_ = /MacIntel/iu),
      (B_ = () =>
        j_
          ? R_.test(j_.platform)
            ? !0
            : z_.test(j_.platform) && j_.maxTouchPoints && j_.maxTouchPoints > 2
          : !1),
      (V_ = () => U_() === `desktop`),
      (H_ = () => !1),
      (U_ = () =>
        j_ && /tablet|iPad|Nexus 9/i.test(j_.userAgent)
          ? `tablet`
          : j_ && /mobi/iu.test(j_.userAgent)
            ? `phone`
            : `desktop`),
      (W_ = `style[data-framer-css-ssr-minified]`),
      (G_ = (() => {
        if (!M_()) return new Set();
        let e = document.querySelector(W_)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (K_ = `data-framer-css-ssr`),
      (q_ = (e, t, n) =>
        r.forwardRef((i, a) => {
          let { sheet: o, cache: s } = r.useContext(O_) ?? {},
            c = n;
          if (!M_()) {
            Qe(t) && (t = t(J.current(), i));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            Y_.add(e, c);
          }
          return (
            h(() => {
              (c && G_.has(c)) ||
                (Qe(t)
                  ? t(J.current(), i)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && da(e, o, s));
            }, []),
            b(e, { ...i, ref: a })
          );
        })),
      (J_ = class {
        constructor() {
          (I(this, `styles`, new Set()), I(this, `componentIds`, new Set()));
        }
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (Y_ = new J_()),
      (Z_ = `flexbox-gap-not-supported`),
      (Q_ = !1),
      ($_ = [
        `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
        `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`,
      ]),
      (ev = ((e) => (
        (e.Padding = `--framer-input-padding`),
        (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
        (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
        (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
        (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
        (e.CornerShape = `--framer-input-corner-shape`),
        (e.BorderColor = `--framer-input-border-color`),
        (e.BorderTopWidth = `--framer-input-border-top-width`),
        (e.BorderRightWidth = `--framer-input-border-right-width`),
        (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
        (e.BorderLeftWidth = `--framer-input-border-left-width`),
        (e.BorderStyle = `--framer-input-border-style`),
        (e.Background = `--framer-input-background`),
        (e.FontFamily = `--framer-input-font-family`),
        (e.FontWeight = `--framer-input-font-weight`),
        (e.FontSize = `--framer-input-font-size`),
        (e.FontColor = `--framer-input-font-color`),
        (e.FontStyle = `--framer-input-font-style`),
        (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
        (e.FontTextAlignment = `--framer-input-font-text-alignment`),
        (e.FontLineHeight = `--framer-input-font-line-height`),
        (e.FontOpenType = `--framer-input-font-open-type-features`),
        (e.FontVariationAxes = `--framer-input-font-variation-axes`),
        (e.PlaceholderColor = `--framer-input-placeholder-color`),
        (e.BoxShadow = `--framer-input-box-shadow`),
        (e.FocusedBorderColor = `--framer-input-focused-border-color`),
        (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
        (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
        (e.FocusedBackground = `--framer-input-focused-background`),
        (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
        (e.FocusedTransition = `--framer-input-focused-transition`),
        (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
        (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
        (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
        (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
        (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
        (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
        (e.InvalidTextColor = `--framer-input-invalid-text-color`),
        (e.IconBackgroundImage = `--framer-input-icon-image`),
        (e.IconMaskImage = `--framer-input-icon-mask-image`),
        (e.IconColor = `--framer-input-icon-color`),
        (e.WrapperHeight = `--framer-input-wrapper-height`),
        e
      ))(ev || {})),
      (tv = ev),
      (nv = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (B(r !== void 0, 'Encountered `undefined` in CSSDeclaration'),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${ma(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            B(t !== void 0, 'Zero variables passed to `css.variable`');
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      `${tv.BorderTopWidth}${tv.BorderRightWidth}${tv.BorderBottomWidth}${tv.BorderLeftWidth}`,
      (rv = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (iv = { display: `inline-block` }),
      (av = { display: `block` }),
      (ov = (() => [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${rv.display};
            flex-direction: ${rv.flexDirection};
            justify-content: ${rv.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes, normal);
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${ha([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${ha([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${ha([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${iv.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${ha([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${ha([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ha([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${ha([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${ha([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${ha([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${ha([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${ha([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${ha([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${ha([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ha([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${ha([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${ha([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ha([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${ha([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ha([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${ha([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${ha([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ha([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${av.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: none;
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 10),
        ol.framer-text > li.framer-text:nth-last-child(n + 10) ~ li {
            padding-inline-start: 3ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 100),
        ol.framer-text > li.framer-text:nth-last-child(n + 100) ~ li {
            padding-inline-start: 4ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 1000),
        ol.framer-text > li.framer-text:nth-last-child(n + 1000) ~ li {
            padding-inline-start: 5ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 10000),
        ol.framer-text > li.framer-text:nth-last-child(n + 10000) ~ li {
            padding-inline-start: 6ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 100000),
        ol.framer-text > li.framer-text:nth-last-child(n + 100000) ~ li {
            padding-inline-start: 7ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 1000000),
        ol.framer-text > li.framer-text:nth-last-child(n + 1000000) ~ li {
            padding-inline-start: 8ch;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            vertical-align: top;
        }
    `,
        `
        .framer-text-module[data-width="fill"] > :first-child,
        .framer-text-module:not([data-width="fit"])[style*="aspect-ratio"] > :first-child {
            width: 100%;
        }
    `,
        `
        @supports not (aspect-ratio: 1) {
            .framer-text-module:not([data-width="fit"])[style*="aspect-ratio"] {
                position: relative;
            }
        }
    `,
        `
        @supports not (aspect-ratio: 1) {
            .framer-text-module:not([data-width="fit"])[style*="aspect-ratio"]::before {
                content: "";
                display: block;
                padding-bottom: calc(100% / calc(var(--aspect-ratio)));
            }
        }
    `,
        `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[data-width="fill"] > :first-child,
            .framer-text-module:not([data-width="fit"])[style*="aspect-ratio"] > :first-child {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            }
        }
    `,
      ])()),
      (sv = `--text-truncation-display-inline-for-safari-16`),
      (cv = `--text-truncation-display-none-for-safari-16`),
      (lv = `--text-truncation-line-break-for-safari-16`),
      (uv = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (dv = `(background: -webkit-named-image(i))`),
      (fv = `(contain-intrinsic-size: inherit)`),
      (pv = (() => [
        `@supports ${dv} and (not ${fv}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${uv.join(`, `)} { display: var(${sv}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${uv.map((e) => `${e}::after`).join(`, `)} { content: var(${lv}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${cv}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${sv}, ${iv.display}) }
    }`,
      ])()),
      (mv = [`[data-framer-component-type] { position: absolute; }`]),
      (hv = [
        `[data-framer-component-type="Text"] { cursor: inherit; }`,
        `[data-framer-component-text-autosized] * { white-space: pre; }`,
        `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
        `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
        `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
        `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
        `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
        `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
        `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
        `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
      ]),
      (gv = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`),
      (_v = (() => [
        `[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`,
        `.${Z_} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`,
      ])()),
      (vv = (() => `
.${Z_} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)()),
      (yv = (() => `
.${Z_}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${Z_}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)()),
      (bv = (() => `
.${Z_}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${Z_}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)()),
      (xv = (() => [gv, vv, ..._v, yv, bv])()),
      (Sv = [
        `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
      ]),
      (Cv = [
        `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
        `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
      ]),
      (wv = [
        `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
        `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
        `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
        `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
        `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
        `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
        `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
        `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
      ]),
      (Tv = [
        `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
      ]),
      (Ev = [
        `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
      ]),
      (Dv = [
        `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
      ]),
      (Ov = [
        `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
      ]),
      (kv = [
        `[data-framer-cursor="pointer"] { cursor: pointer; }`,
        `[data-framer-cursor="grab"] { cursor: grab; }`,
        `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
      ]),
      (Av = [
        `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
        `[data-framer-generated] * { pointer-events: unset }`,
      ]),
      (jv = [
        `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
      ]),
      (Mv = [
        `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
        `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
        `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
      ]),
      (Nv = `--framer-will-change-override`),
      (Pv = `--framer-will-change-effect-override`),
      (Fv = `--framer-will-change-filter-override`),
      (Iv = `(background: -webkit-named-image(i))`),
      (Lv = `(grid-template-rows: subgrid)`),
      (Rv = `(position-area: top right)`),
      (zv = (e) =>
        e
          ? [
              `body { ${Nv}: none; }`,
              `@supports ${Iv} and (not ${Lv}) { body { ${Nv}: transform; } }`,
            ]
          : [`body { ${Nv}: none; ${Pv}: none; }`]),
      (Bv = (e) =>
        e
          ? [`body { ${Fv}: none; }`, `@supports ${Iv} and (not ${Rv}) { body { ${Fv}: filter; } }`]
          : [`body { ${Fv}: none; }`]),
      (Vv = (e) => (e ? Av : [])),
      (Hv = [`.svgContainer svg { display: block; }`]),
      (Uv = `--overflow-clip-fallback`),
      (Wv = (() => [
        `@supports (not (overflow: clip)) {
        :root { ${Uv}: hidden; }
    }`,
      ])()),
      (Gv = `--one-if-corner-shape-supported`),
      (Kv = (() => [`@supports (corner-shape: superellipse(2)) { :root { ${Gv}: 1 } }`])()),
      (qv = (e) => [
        ...zv(e),
        ...Bv(e),
        ...mv,
        ...hv,
        ...ov,
        ...$_,
        ...xv,
        ...Sv,
        ...Cv,
        ...wv,
        ...Ev,
        ...Tv,
        ...Dv,
        ...kv,
        ...Vv(e),
        ...Hv,
        ...jv,
        ...Mv,
        ...Wv,
        ...Ov,
        ...pv,
        ...Kv,
      ]),
      (Jv = qv(!1)),
      (Yv = qv(!0)),
      (Xv = `optional`),
      (Zv = (e) => e),
      (Qv =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      ($v = Oa(
        (e) =>
          Qv.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (ey = (e) => () => {
        Hr(e);
      }),
      (ty = () => () => {}),
      (ny = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = X.useImageSource(e, t, n);
          return f(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        isOnPageCanvas: !1,
      }),
      (ry = !1),
      (X = new Proxy(ny, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? ty()
              : ey(
                  ry
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (iy = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (ay = [1, 2, 2.2]),
      (oy = [512, 1024, 2048, 4096]),
      (sy = 512),
      (cy = (() => ({ position: `absolute`, ...iy, top: 0, right: 0, bottom: 0, left: 0 }))()),
      (ly = `src`),
      (uy = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && ly in e;
        },
      }),
      (dy = N_()),
      (fy = typeof document < `u` ? re : c),
      (py = r.createContext(!1)),
      (my = class {
        constructor() {
          (I(this, `sharedResizeObserver`),
            I(this, `callbacks`, new WeakMap()),
            (this.sharedResizeObserver = new ResizeObserver(
              this.updateResizedElements.bind(this)
            )));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (hy = (() => (M_() ? new my() : void 0))()),
      (gy = `data-framer-size-compatibility-wrapper`),
      (_y = `0.000001px`),
      (vy = (() => ` translateZ(${_y})`)()),
      (yy = (() => I_() || P_() || H_())()),
      (by = (() => {
        class e extends x {
          constructor() {
            (super(...arguments),
              I(this, `layerElement`, null),
              I(this, `setLayerElement`, (e) => {
                this.layerElement = e;
              }));
          }
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? co(t) : lo(t));
          }
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Et(this.props, e);
          }
          componentDidUpdate(e) {
            Zv(this.props).clip &&
              Zv(this.props).radius === 0 &&
              Zv(e).radius !== 0 &&
              fo(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return (I(e, `defaultProps`, {}), e);
      })()),
      (xy = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (Sy = {
        hueRotate: (e, t) => q.toHslString(q.hueRotate(q(e), t)),
        setAlpha: (e, t) => q.toRgbString(q.alpha(q(e), t)),
        getAlpha: (e) => {
          let t = mi(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => q.toRgbString(q.multiplyAlpha(q(e), t)),
        toHexValue: (e) => q.toHex(q(e)).toUpperCase(),
        toHex: (e) => q.toHexString(q(e)).toUpperCase(),
        toRgb: (e) => q.toRgb(q(e)),
        toRgbString: (e) => q.toRgbString(q(e)),
        toHSV: (e) => q.toHsv(q(e)),
        toHSL: (e) => q.toHsl(q(e)),
        toHslString: (e) => q.toHslString(q(e)),
        toHsvString: (e) => q.toHsvString(q(e)),
        hsvToHSLString: (e) => q.toHslString(q(ni(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => q.toHex(q(ni(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => q.toHexString(q(ni(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => q.toRgbString(q(ni(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => ni(e.h, e.s, e.v),
        rgbaToString: (e) => q.toRgbString(q(e)),
        rgbToHexValue: (e) => q.toHex(q(e)),
        rgbToHexString: (e) => q.toHexString(q(e)),
        hslToString: (e) => q.toHslString(q(e)),
        hslToRgbString: (e) => q.toRgbString(q(e)),
        toColorPickerSquare: (e) => q.toRgbString(q({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => q(e).isValid !== !1,
        equals: (e, t) =>
          q.isP3String(e) || q.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = q(e)),
              typeof t == `string` && (t = q(t)),
              q.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = q(e);
          return t.a === 1 ? q.toHexString(t) : q.toRgbString(t);
        },
        toFormatString: (e) => (q.isP3String(e) ? e : q.toRgbString(q(e))),
      }),
      (Cy = /var\(.+\)/u),
      (wy = new Map()),
      (Ty = [`stops`]),
      (Ey = [`start`, `end`]),
      (Dy = [`angle`, `alpha`]),
      (Oy = {
        isLinearGradient: (e) => z(e) && Dy.every((t) => t in e) && (bo(e) || yo(e)),
        hash: (e) => e.angle ^ vo(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = _o(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (ky = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (Ay = {
        isRadialGradient: (e) => z(e) && ky.every((t) => t in e) && (bo(e) || yo(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ vo(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = _o(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (jy = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (My = (() => new Set([...jy, ...jy.map((e) => `${e}Capture`)]))()),
      (Ny = `overflow`),
      (Py = { x: 0, y: 0, width: 200, height: 200 }),
      (Fy = new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (Iy = _(function (e, t) {
        let { name: n, center: r, border: i, _border: a, __portal: o } = e,
          { props: s, children: c } = Qa(e),
          l = jo(s),
          u = eo(e),
          f = Eo(e),
          p = E(null),
          m = t ?? p,
          h = {
            'data-framer-component-type': e.componentType ?? `Frame`,
            'data-framer-cursor': f,
            'data-framer-highlight': f === `pointer` ? !0 : void 0,
            'data-layoutid': u,
            'data-framer-offset-parent-id': Zv(e)[`data-framer-offset-parent-id`],
          };
        !Mo(e) && n && (Zv(h)[`data-framer-name`] = n);
        let [g, _] = Ao(s),
          v = ko(s),
          y = ua(v);
        (r && !(_ && !y && Qi(v))
          ? ((l.transformTemplate ||= $a(r)), Object.assign(h, Xa(r)))
          : (l.transformTemplate ||= void 0),
          oo(e, m));
        let x = Ka(e),
          S = No(s, v, _, d(py)),
          C = ca(
            D(O, {
              children: [
                x
                  ? b(Ha, {
                      alt: e.alt ?? ``,
                      image: x,
                      containerSize: _ ?? void 0,
                      nodeId: e.id && Za(e.id),
                      layoutId: u,
                    })
                  : null,
                c,
                b(Wa, { ...a, border: i, layoutId: u }),
              ],
            }),
            S
          ),
          w = Ja(e.as),
          T = qa(x);
        return (
          e.fitImageDimension &&
            T &&
            ((g[e.fitImageDimension] = `auto`), (g.aspectRatio = T.width / T.height)),
          D(w, { ...h, ...l, layoutId: u, style: g, ref: m, children: [C, o] })
        );
      })),
      (Ly = _a(
        _(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? b(Iy, { ...e, ref: t }) : null;
        })
      )),
      (Ry = `__LAYOUT_TREE_ROOT`),
      (zy = r.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (By = class extends x {
        constructor() {
          (super(...arguments),
            I(this, `shouldAnimate`, !1),
            I(this, `transition`),
            I(this, `lead`),
            I(this, `follow`),
            I(this, `scheduledPromotion`, !1),
            I(this, `scheduledDidUpdate`, !1),
            I(this, `scheduleProjectionDidUpdate`, () => {
              this.scheduledDidUpdate = !0;
            }),
            I(this, `schedulePromoteTree`, (e, t, n) => {
              ((this.follow = this.lead),
                (this.shouldAnimate = n),
                (this.lead = e),
                (this.transition = t),
                (this.scheduledPromotion = !0));
            }),
            I(this, `initLead`, (e, t) => {
              ((this.follow = this.lead),
                (this.lead = e),
                this.follow && t && (this.follow.layoutMaybeMutated = !0));
            }),
            I(this, `sharedLayoutContext`, {
              schedulePromoteTree: this.schedulePromoteTree,
              scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
              initLead: this.initLead,
            }));
        }
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: t.options.layoutId === Ry && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        render() {
          return b(zy.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (Vy = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (Hy = class {
        constructor(e) {
          (I(this, `sharedIntersectionObserver`),
            I(this, `callbacks`, new WeakMap()),
            (this.sharedIntersectionObserver = new IntersectionObserver(
              this.intersectionObserverCallback.bind(this),
              e
            )));
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (Uy = A(new Map())),
      (Wy = typeof IntersectionObserver > `u` ? Gm : Vo),
      (Gy = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (Ky = r.createContext(null)),
      (qy = class extends x {
        constructor() {
          (super(...arguments),
            I(this, `layoutMaybeMutated`, !1),
            I(this, `projectionNodes`, new Map()),
            I(this, `rootProjectionNode`),
            I(this, `isExiting`),
            I(
              this,
              `shouldPreserveFollowOpacity`,
              (e) => e.options.layoutId === Ry && !this.props.isExiting
            ),
            I(this, `switchLayoutGroupContext`, {
              register: (e) => this.addChild(e),
              deregister: (e) => this.removeChild(e),
              transition:
                this.props.isLead !== void 0 && this.props.animatesLayout
                  ? this.props.transition
                  : void 0,
              shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
            }));
        }
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return b(Le.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (Jy = (e) => {
        let t = r.useContext(zy);
        return b(qy, { ...e, sharedLayoutContext: t });
      }),
      (Yy = r.createContext(!0)),
      (Xy = A({ register: () => {}, deregister: () => {} })),
      (Zy = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = qo(),
          i = E({
            register: o(
              (e) => {
                if (r.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                r.set(e, void 0);
              },
              [r]
            ),
            deregister: o(
              (e) => {
                (r.get(e)?.(), r.delete(e));
              },
              [r]
            ),
          }).current;
        return (
          c(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, Qe(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r]
          ),
          b(Xy.Provider, { value: i, children: n })
        );
      }),
      (Qy = r.memo(function ({
        isLayeredContainer: e,
        isCurrent: t,
        isPrevious: n,
        isOverlayed: r = !1,
        visible: i,
        transitionProps: a,
        children: o,
        backdropColor: s,
        onTapBackdrop: l,
        backfaceVisible: u,
        exitBackfaceVisible: f,
        animation: p,
        exitAnimation: m,
        instant: h,
        initialProps: g,
        exitProps: _,
        position: v = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: y,
        index: x,
        areMagicMotionLayersPresent: S,
        id: C,
        isInitial: w,
      }) {
        let T = me(),
          ee = d(De),
          { persistLayoutIdCache: te } = d(p_),
          O = E({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: Xo({}, g, a),
          }),
          ne = E(null),
          k = ee !== null && !ee.isPresent;
        (t && O.current.wasCurrent === void 0 && te(),
          c(() => {
            if (e || !T) return;
            if (k) {
              O.current = { ...O.current, wasBeingRemoved: k };
              return;
            }
            let { wasPrevious: r, wasCurrent: i } = O.current,
              o = (t && !i) || (!k && O.current.wasBeingRemoved && t),
              s = n && !r,
              c = Xo(O.current.origins, g, a),
              l = O.current.wasReset;
            (o || s
              ? (T.stop(), T.start({ zIndex: x, ...c, ...a }), (l = !1))
              : l === !1 && (T.stop(), T.set({ zIndex: x, ...$y, opacity: 0 }), (l = !0)),
              (O.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [t, n, k]));
        let re = h ? { type: !1 } : `velocity` in p ? { ...p, velocity: 0 } : p,
          ie = h ? { type: !1 } : m || p,
          A = { ...v };
        ((A.left === void 0 || A.right === void 0) && (A.width = `auto`),
          (A.top === void 0 || A.bottom === void 0) && (A.height = `auto`));
        let j = (Zo(a) || Zo(g)) && (e || t || n) ? 1200 : void 0,
          ae = { ...$y, ...O.current.origins },
          oe = e
            ? {
                initial: { ...ae, ...g },
                animate: { ...ae, ...a, transition: re },
                exit: { ...ae, ..._, transition: p },
              }
            : { animate: T, exit: { ...ae, ..._, transition: ie } },
          M = !(k || S === !1),
          se = !!t && M,
          ce = t && w;
        return D(Ly, {
          'data-framer-component-type': `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || k || (t && y) ? x : void 0,
            pointerEvents: void 0,
            visibility: i ? `visible` : `hidden`,
            perspective: j,
          },
          children: [
            e &&
              b(Ly, {
                width: `100%`,
                height: `100%`,
                'data-framer-component-type': `NavigationContainerBackdrop`,
                transition: p,
                initial: { opacity: h && i ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: s || `transparent`,
                onTap: k ? void 0 : l,
              }),
            b(Ly, {
              ...A,
              ...oe,
              transition: {
                default: re,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: k ? f : u,
              'data-framer-component-type': `NavigationContainer`,
              'data-framer-is-current-navigation-target': !!t,
              style: { pointerEvents: void 0, opacity: ce || e || (t && y) ? 1 : 0 },
              'data-is-present': M ? void 0 : !1,
              ref: ne,
              children: b(Ky.Provider, {
                value: ne,
                children: b(Yy.Provider, {
                  value: se,
                  children: b(Zy, {
                    isCurrent: se,
                    isOverlayed: r,
                    children: b(Jy, {
                      isLead: t,
                      animatesLayout: !!y,
                      transition: re,
                      isExiting: !M,
                      isOverlayed: r,
                      id: C,
                      children: o,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, Yo)),
      ($y = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (eb = class {
        constructor() {
          (I(this, `warning`, () => {
            Hr(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
          }),
            I(this, `goBack`, () => this.warning()),
            I(this, `instant`, () => this.warning()),
            I(this, `fade`, () => this.warning()),
            I(this, `push`, () => this.warning()),
            I(this, `modal`, () => this.warning()),
            I(this, `overlay`, () => this.warning()),
            I(this, `flip`, () => this.warning()),
            I(this, `customTransition`, () => this.warning()),
            I(this, `magicMotion`, () => this.warning()));
        }
      }),
      (tb = A(new eb())),
      (nb = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (rb = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (ib = $m($y)),
      (ab = r.createContext(void 0)),
      (ob = r.createContext(void 0)),
      (sb = (() => {
        var e, t, n, r, i, a, o;
        return (
          (t = class extends x {
            constructor(t) {
              (super(t),
                Ce(this, n),
                Ce(this, e, null),
                I(this, `state`, rb()),
                Ce(this, a, (e) => {
                  if (!this.props.enabled && this.state.history.length > 0) return;
                  let t = ts(this.state, e);
                  if (!t) return;
                  let { skipLayoutAnimation: n } = this.props,
                    r = t.history[t.current],
                    i =
                      (e.type === `add` && e.transition.withMagicMotion) ||
                      (e.type === `forward` && r?.transition.withMagicMotion) ||
                      (e.type === `remove` && !!t.previousTransition),
                    a = () => {
                      (this.setState(t), r?.key && this.context?.(r.key));
                    };
                  n && !i ? n(a) : a();
                }),
                I(this, `goBack`, () => {
                  if (!j(this, n, i).call(this))
                    return (
                      ke(this, e, globalThis.event?.timeStamp || null),
                      this.state.currentOverlay === -1
                        ? P(this, a).call(this, { type: `remove` })
                        : P(this, a).call(this, { type: `removeOverlay` })
                    );
                }));
              let r = this.props.children;
              if (!r || !Vi(r) || !Bi(r)) return;
              let o = { ...nb.Instant },
                s = {
                  type: `add`,
                  key: r.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                  transition: o,
                  component: r,
                },
                c = ts(this.state, s);
              c && (this.state = c);
            }
            componentDidMount() {
              let e = this.state.history[this.state.current];
              e && this.context?.(e.key);
            }
            UNSAFE_componentWillReceiveProps(e) {
              let t = e.children;
              if (!Vi(t) || !Bi(t)) return;
              let r = t.key?.toString();
              r &&
                (this.state.history.length === 0
                  ? j(this, n, o).call(this, t, nb.Instant)
                  : P(this, a).call(this, { type: `update`, key: r, component: t }));
            }
            componentWillUnmount() {
              this.props.resetProjection?.();
            }
            instant(e) {
              j(this, n, o).call(this, e, nb.Instant, void 0);
            }
            fade(e, t) {
              j(this, n, o).call(this, e, nb.Fade, t);
            }
            push(e, t) {
              j(this, n, o).call(this, e, Qo(t), t);
            }
            modal(e, t) {
              j(this, n, o).call(this, e, nb.Modal, t);
            }
            overlay(e, t) {
              j(this, n, o).call(this, e, $o(t), t);
            }
            flip(e, t) {
              j(this, n, o).call(this, e, es(t), t);
            }
            magicMotion(e, t) {
              j(this, n, o).call(this, e, nb.MagicMotion, t);
            }
            customTransition(e, t) {
              j(this, n, o).call(this, e, t);
            }
            render() {
              let e = j(this, n, r).call(this, { overCurrentContext: !1 }),
                t = j(this, n, r).call(this, { overCurrentContext: !0 }),
                i = gs(t),
                a = t.current > -1,
                o = this.state.history.length === 1,
                s = [];
              for (let [t, n] of Object.entries(this.state.containers)) {
                let r = this.state.containerIndex[t];
                B(r !== void 0, `Container's index must be registered`);
                let i = this.state.containerVisualIndex[t];
                B(i !== void 0, `Container's visual index must be registered`);
                let c = this.state.containerIsRemoved[t],
                  l = this.state.history[r],
                  u = this.state.transitionForContainer[t],
                  d = r === this.state.current,
                  f = r === this.state.previous,
                  p = d ? !1 : c,
                  m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
                s.push(
                  b(
                    Qy,
                    {
                      id: t,
                      index: i,
                      isInitial: o,
                      isCurrent: d,
                      isPrevious: f,
                      isOverlayed: a,
                      visible: d || f,
                      position: l?.transition?.position,
                      instant: Es(r, e),
                      transitionProps: u,
                      animation: Ts(r, e),
                      backfaceVisible: Cs(r, e),
                      exitAnimation: l?.transition?.animation,
                      exitBackfaceVisible: l?.transition?.backfaceVisible,
                      exitProps: l?.transition?.enter,
                      withMagicMotion: m,
                      areMagicMotionLayersPresent: p ? !1 : void 0,
                      children: b(Po, {
                        children: Os({ component: n, transition: l?.transition }),
                      }),
                    },
                    t
                  )
                );
              }
              let c = this.state.overlayStack.map((e, n) =>
                b(
                  Qy,
                  {
                    isLayeredContainer: !0,
                    isCurrent: n === this.state.currentOverlay,
                    position: e.transition.position,
                    initialProps: Ss(n, t),
                    transitionProps: ws(n, t),
                    instant: Es(n, t, !0),
                    animation: Ts(n, t),
                    exitProps: e.transition.enter,
                    visible: Ds(n, t),
                    backdropColor: bs(e.transition),
                    backfaceVisible: xs(n, t),
                    onTapBackdrop: ks(e.transition, this.goBack),
                    index: this.state.current + 1 + n,
                    children: Os({ component: e.component, transition: e.transition }),
                  },
                  e.key
                )
              );
              return b(Ly, {
                'data-framer-component-type': `NavigationRoot`,
                top: 0,
                left: 0,
                width: `100%`,
                height: `100%`,
                position: `relative`,
                style: {
                  overflow: `hidden`,
                  backgroundColor: `unset`,
                  pointerEvents: void 0,
                  ...this.props.style,
                },
                children: b(tb.Provider, {
                  value: this,
                  children: D(ob.Provider, {
                    value: o,
                    children: [
                      b(Qy, {
                        isLayeredContainer: !0,
                        position: void 0,
                        initialProps: {},
                        instant: !1,
                        transitionProps: _s(i),
                        animation: vs(i),
                        backfaceVisible: ys(i),
                        visible: !0,
                        backdropColor: void 0,
                        onTapBackdrop: void 0,
                        index: 0,
                        children: b(Ni, {
                          children: b(By, {
                            children: b(ze, { presenceAffectsLayout: !1, children: s }),
                          }),
                        }),
                      }),
                      b(ze, { children: c }),
                    ],
                  }),
                }),
              });
            }
          }),
          (e = new WeakMap()),
          (n = new WeakSet()),
          (r = function (e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }),
          (i = function () {
            return globalThis.event ? P(this, e) === globalThis.event.timeStamp : !1;
          }),
          (a = new WeakMap()),
          (o = function (t, r, o) {
            if (
              j(this, n, i).call(this) ||
              (ke(this, e, globalThis.event?.timeStamp || null), !t || !Vi(t) || !Bi(t))
            )
              return;
            let s = { ...r, ...o };
            if (s.overCurrentContext)
              return P(this, a).call(this, { type: `addOverlay`, transition: s, component: t });
            let c = t.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            P(this, a).call(this, { type: `add`, key: c, transition: s, component: t });
          }),
          I(t, `defaultProps`, { enabled: !0 }),
          I(t, `contextType`, ab),
          t
        );
      })()),
      (cb = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (lb = _a(As)),
      Ge(Um(), 1),
      Ge(Um(), 1),
      Ge(Um(), 1),
      (ub = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (db = Symbol(`private`)),
      (fb = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [db]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new Vg(),
                reset() {
                  for (let t in i)
                    if (ub(i, t)) {
                      let n = ub(e, t) ? Zv(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, mb);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[db].reset()),
          (e.addObserver = (e, t) => e[db].observers.add(t)),
          e
        );
      })()),
      (pb = class {
        constructor() {
          (I(this, `set`, (e, t, n, r) => {
            if (t === db) return !1;
            let i = e[db],
              a,
              o;
            if (
              (Wr(n) ? ((a = n), (o = a.get())) : (o = n),
              i.makeAnimatables &&
                typeof n != `function` &&
                typeof n != `object` &&
                !a &&
                (a = Hg(n)),
              i.observeAnimatables && a)
            ) {
              let e = i.transactions;
              a.onUpdate({
                update: (t, n) => {
                  (n && e.add(n), i.observers.notify({ value: r }, n));
                },
                finish: (t) => {
                  e.delete(t) && i.observers.finishTransaction(t);
                },
              });
            }
            let s = !1,
              c = !0,
              l = Zv(e)[t];
            if (l !== void 0) {
              Wr(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (Zv(e)[t] = o));
              let n = typeof o == `object` && !!o;
              ((Array.isArray(o) || n) && (c = !0), (s = !0));
            } else (a && (n = a), (s = Reflect.set(e, t, n)));
            return (c && i.observers.notify({ value: r }), s);
          }),
            I(this, `get`, (e, t, n) => {
              if (t === db) return Zv(e)[t];
              let r = Reflect.get(e, t, n);
              return typeof r == `function` ? r.bind(n) : r;
            }));
        }
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[db].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(db);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== db) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (mb = new pb()),
      (hb = `opacity`),
      (gb = (() => {
        function e(t = {}) {
          let n = fb(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => fb.resetObject(e));
          }),
          (e.addObserver = (e, t) => fb.addObserver(e, t)),
          e
        );
      })()),
      (_b = { update: 0 }),
      (vb = r.createContext({ update: NaN })),
      (yb = class extends x {
        constructor() {
          (super(...arguments),
            I(this, `observers`, []),
            I(this, `state`, _b),
            I(this, `taskAdded`, !1),
            I(this, `frameTask`, () => {
              (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
            }),
            I(this, `observer`, () => {
              this.taskAdded || ((this.taskAdded = !0), u_.addFrameTask(this.frameTask));
            }));
        }
        componentWillUnmount() {
          (this.observers.map((e) => e()), gb.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            gb._stores.forEach((e) => {
              let t = gb.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            b(vb.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      Ge(Um(), 1),
      (bb = `__framer__`),
      (xb = (() => bb.length)()),
      (Sb = r.createContext(void 0)),
      (Cb = r.createContext(void 0)),
      (wb = `ssr-variant`),
      (Tb = () => () => {}),
      (Eb = () => !0),
      (Db = () => !1),
      (Ob = r.forwardRef(function (e, t) {
        let n = Hs(t),
          i = r.useContext(Cb),
          a = r.useSyncExternalStore(Tb, Db, Eb),
          o = Ii(() => (a ? (M_() ? 1 : 2) : 0)),
          s = r.useContext(Sb);
        return pr(() => {
          let { breakpoint: t, overrides: r, children: a, ...c } = e;
          if (!s)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(a, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = s,
            d = i?.primaryVariantId === l ? i?.variants : void 0;
          switch (o) {
            case 0:
              return n(a, Xs(t, c, r));
            case 1:
              return Gs(r, a, c, u, l, d, n, t);
            case 2:
              return Gs(r, a, c, u, l, d, Vs, void 0);
            default:
              V(o);
          }
        }, [s, i, n, e]);
      })),
      (kb = (() => q_(Ob, `.${wb} { display: contents }`, `PropertyOverrides`))()),
      (Ab = `default`),
      (jb = new Set([Ab])),
      (Nb = class {
        constructor() {
          (I(this, `entries`, new Map()), Ce(this, Mb, {}));
        }
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (B(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (B(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = Ab, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return Ab;
          let n = P(this, Mb)[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (P(this, Mb)[e] = Ks(r)) : Ab;
        }
        setAll(e, t = jb, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = Qe(n.transformTemplate) ? n.transformTemplate?.({}, Fb) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: z(a) ? a : void 0,
              animate: z(o) ? o : void 0,
              transformTemplate: L(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (Mb = new WeakMap()),
      (Pb = new Nb()),
      (Fb = `__Appear_Animation_Transform__`),
      (Ib = `data-framer-appear-id`),
      (Lb = `data-framer-appear-animation`),
      (Rb = (e) => {
        if (Ea())
          return {
            animate: Qs(e.animate) ? e.animate : void 0,
            initial: Qs(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (zb = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (Bb = (e) => ({
        x: M(e?.x ?? 0),
        y: M(e?.y ?? 0),
        opacity: M(e?.opacity ?? 1),
        scale: M(e?.scale ?? 1),
        rotate: M(e?.rotate ?? 0),
        rotateX: M(e?.rotateX ?? 0),
        rotateY: M(e?.rotateY ?? 0),
        skewX: M(e?.skewX ?? 0),
        skewY: M(e?.skewY ?? 0),
        transformPerspective: M(e?.transformPerspective ?? 0),
      })),
      (Vb = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (Hb = { willChange: `transform` }),
      Object.freeze(Hb),
      (Ub = {}),
      Object.freeze(Ub),
      (Wb = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (Gb = () => {
        let e = E();
        return (
          c(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (Kb = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (qb = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (Jb = 1),
      (Yb = 4),
      (Xb = new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (Zb = [`animate`, `animate`]),
      (Qb = { inputRange: [], outputRange: [] }),
      ($b = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (ex = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (tx = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (nx = [0, 1]),
      (rx = { parallax: Kb, styleAppear: Xb, styleTransform: $b, loop: Wb, presence: qb }),
      (ix = $m(rx)),
      (ax = (e) => e.reduce((e, t) => (e += t), 0)),
      (ox = (e) => e.reduce((e, t) => (e *= t), 1)),
      (sx = `current`),
      (cx = (e) =>
        r.forwardRef((t, n) => {
          if (t.__withFX)
            return b(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let i = Rb(t);
          if (i) return b(e, { ...t, ...i, ref: n });
          let {
              parallax: a = {},
              styleAppear: o = {},
              styleTransform: s = {},
              presence: c = {},
              loop: l = {},
              forwardedProps: u,
              targetOpacityValue: d,
              withPerspective: f,
              inSmartComponent: p = !1,
            } = xc(t),
            m = Ro(n),
            { values: h, style: g } = sc(c, m, p, t.style, t[Ye]),
            { values: _, style: v } = rc(a, m, t.style?.visibility),
            { values: y, style: x } = yc(s, m),
            { values: S, style: C } = hc(o, m),
            { values: w, style: T } = tc(l, m),
            E = r.useMemo(() => {
              let e = new Ke(d ?? 1);
              return {
                scale: [S.scale, w.scale, h.scale, y.scale],
                opacity: [S.opacity, w.opacity, h.opacity, e, y.opacity],
                x: [S.x, w.x, h.x, y.x],
                y: [S.y, w.y, _.y, h.y, y.y],
                rotate: [S.rotate, w.rotate, h.rotate, y.rotate],
                rotateX: [S.rotateX, w.rotateX, h.rotateX, y.rotateX],
                rotateY: [S.rotateY, w.rotateY, h.rotateY, y.rotateY],
                skewX: [S.skewX, w.skewX, h.skewX, y.skewX],
                skewY: [S.skewY, w.skewY, h.skewY, y.skewY],
                transformPerspective: [y.transformPerspective, S.transformPerspective],
              };
            }, [d, y, _, S, w, h]);
          Cc(t.style, E);
          let D = xe(E.scale, ox),
            ee = xe(E.opacity, ox),
            te = xe(E.x, ax),
            O = xe(E.y, ax),
            ne = xe(E.rotate, ax),
            k = xe(E.rotateX, ax),
            re = xe(E.rotateY, ax),
            ie = xe(E.skewX, ax),
            A = xe(E.skewY, ax),
            j = xe(E.transformPerspective, ax),
            { drag: ae, dragConstraints: oe } = u;
          no(ae && Sc(oe) ? oe : void 0);
          let M = {
            opacity: ee,
            scale: D,
            x: te,
            y: O,
            rotate: ne,
            rotateX: k,
            rotateY: re,
            skewX: ie,
            skewY: A,
          };
          nt(f) && (M.transformPerspective = j);
          let se = wc(t.animate) ? t.animate : void 0,
            ce = wc(t.initial) ? t.initial : void 0,
            le = wc(t.exit) ? t.exit : void 0,
            ue = p && !c.presenceInitial ? { initial: ce, animate: se, exit: le } : {};
          return b(e, {
            ...u,
            ...ue,
            __withFX: !0,
            style: { ...t.style, ...v, ...x, ...T, ...M, ...C, ...g },
            values: h,
            ref: m,
          });
        })),
      (lx = A({})),
      (ux = r.createContext({})),
      (dx = r.forwardRef(function ({ width: e, height: t, y: n, children: i, ...a }, o) {
        let s = r.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          c = Hs(o);
        return b(ux.Provider, { value: s, children: c(i, a) });
      })),
      (fx = (e) =>
        r.forwardRef((t, n) =>
          b(e, { layoutId: eo(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (px = !1),
      (mx = class extends x {
        constructor() {
          (super(...arguments), I(this, `state`, { error: void 0 }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!Dc(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              ut(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          $t(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!Dc(e)) throw e;
          return ((px = !0), this.props.children);
        }
      }),
      (hx = (() => (s === void 0 ? null : new Promise(() => {})))()),
      (gx = b(Oc, {})),
      (_x = A(!1)),
      (_x.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (vx = b(Ac, {})),
      (yx = class extends x {
        constructor() {
          (super(...arguments), I(this, `state`, { hasError: !1 }));
        }
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Mc(this.props.getErrorMessage(), t?.componentStack), jc(e, t));
        }
        render() {
          let { children: e, fallback: t = vx } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (bx = class extends x {
        constructor() {
          (super(...arguments), I(this, `state`, { hasError: !1 }));
        }
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            jc(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (xx = (() => r.createContext(void 0))()),
      (Sx = `code-crash:`),
      (Cx = fx(
        r.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            isModuleExternal: s,
            inComponentSlot: c,
            ...l
          },
          u
        ) {
          let d = Ii(() => (t ? `${t}-container` : void 0)),
            f = Ja(n),
            p = Kc(
              r.Children.map(e, (e) =>
                r.isValidElement(e) ? r.cloneElement(e, { layoutId: t }) : e
              ),
              i,
              a,
              o,
              s,
              c
            );
          return b(f, {
            layoutId: d,
            ...l,
            ref: u,
            children: b(py.Provider, {
              value: !0,
              children: b(lg.Provider, {
                value: a ?? null,
                children: b(Fi, {
                  enabled: !1,
                  children: b(We, { id: t ?? ``, inherit: l.layout ? !0 : `id`, children: p }),
                }),
              }),
            }),
          });
        })
      )),
      (wx = r.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = Kc(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = Ja(f);
          return b(lg.Provider, {
            value: a ?? null,
            children: b(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return b(lg.Provider, {
            value: a ?? null,
            children: b(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (Tx = A({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (Ex = `framer-cursor-none`),
      (Dx = `framer-pointer-events-none`),
      (Ox = C(function ({ children: e }) {
        let t = Ii(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = qc(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = oe();
        return D(Tx.Provider, { value: t, children: [e, !n && b(Mx, {})] });
      })),
      (kx = (() =>
        q_(
          Ox,
          [
            `.${Ex}, .${Ex} * { cursor: none !important; }`,
            `.${Dx}, .${Dx} * { pointer-events: none !important; }`,
          ],
          `framer-lib-cursors-host`
        ))()),
      (Ax = (() => ({ position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }))()),
      (jx = `data-framer-portal-id`),
      (Mx = C(function () {
        let { onRegisterCursors: e } = d(Tx),
          [t, n] = p(!1),
          r = pe(0),
          i = pe(0),
          a = pe(0),
          s = E(null),
          l = E({ cursors: {}, cursorHash: void 0 }),
          u = to();
        (re(() => {
          let e = K.matchMedia(`(any-hover: none)`);
          function t(e) {
            e.matches ? k(() => n(!1)) : n(!0);
          }
          return (
            e.addEventListener(`change`, t),
            e.matches || n(!0),
            () => {
              e.removeEventListener(`change`, t);
            }
          );
        }, []),
          c(() => {
            if (!t) return;
            let e = 0,
              n = 0;
            function o() {
              (r.set(e), i.set(n), Ae(a, 1, { type: `tween`, duration: 0.2 }));
            }
            let c = () => {
              if (tt(l.current.cursors)) return;
              let t = Zc(e, n);
              t !== l.current.cursorHash && ((l.current.cursorHash = t), Me.update(() => u()));
            };
            function d(t) {
              if (t.pointerType === `touch`) {
                Re(c);
                return;
              }
              (Me.read(c, !0), (e = t.clientX), (n = t.clientY), Me.update(o));
            }
            function f(e) {
              if (e.target === s.current || !s.current) return;
              let t = new PointerEvent(e.type, {
                bubbles: !0,
                cancelable: e.cancelable,
                pointerType: e.pointerType,
                pointerId: e.pointerId,
                composed: e.composed,
                isPrimary: e.isPrimary,
                buttons: e.buttons,
                button: e.button,
              });
              Me.update(() => {
                s.current?.dispatchEvent(t);
              });
            }
            return (
              K.addEventListener(`pointermove`, d),
              document.addEventListener(`pointerdown`, f),
              document.addEventListener(`pointerup`, f),
              Me.read(c, !0),
              () => {
                (K.removeEventListener(`pointermove`, d),
                  document.removeEventListener(`pointerdown`, f),
                  document.removeEventListener(`pointerup`, f),
                  Re(c));
              }
            );
          }, [a, r, i, u, t]),
          c(() => {
            if (!t) return;
            function e() {
              Ae(a, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              K.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), K.removeEventListener(`blur`, e));
              }
            );
          }, [a, t]),
          re(() => {
            function t(e) {
              ((l.current.cursors = e),
                (l.current.cursorHash = tt(e) ? null : Zc(r.get(), i.get())),
                u());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(Ex, !1));
            };
          }, [r, i, e, u]));
        let { cursors: f, cursorHash: m } = l.current,
          h = m ? f[m] : null,
          g = Jc(h);
        re(() => {
          t && document.body.classList.toggle(Ex, g);
        }, [g, t]);
        let _ = h?.component,
          v = h?.transition ?? { duration: 0 },
          y = ye(r, v),
          x = ye(i, v),
          S = xe(() => y.get() + (h?.offset?.x ?? 0)),
          C = xe(() => x.get() + (h?.offset?.y ?? 0)),
          w = h?.alignment,
          T = h?.placement,
          D = o((e, t) => `translate(${Xc(T, w)}) ${t}`, [w, T]);
        return !t || !h || !_
          ? null
          : b(ee, {
              children: b(_, {
                transformTemplate: D,
                style: { ...Ax, x: S, y: C, opacity: a },
                globalTapTarget: !0,
                variant: h?.variant,
                ref: s,
                className: Dx,
              }),
            });
      })),
      (Nx = `webPageId`),
      (Px = class {
        constructor() {
          (I(this, `collectedLinks`, new Map()), I(this, `nestingInfo`, new Map()));
        }
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            B(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (B(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((Km && !H_()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(el(e), e), this.collectedLinks.set(el(t), t));
          let n = this.nestingInfo.get(el(e)) ?? new Set();
          (n.add(el(t)), this.nestingInfo.set(el(e), n));
        }
      }),
      (Fx = new Px()),
      (Ix = `element`),
      (Lx = `collection`),
      (Rx = `collectionItemId`),
      (zx = `pathVariables`),
      (Bx = `framer/page-link,`),
      (Vx = A(void 0)),
      (Hx = `--text-selection-color`),
      (Ux = `--text-selection-background-color`),
      (Wx = (() => q_(vl, (e, t) => _l(t?.triggerId), `InjectSelectionStyle`))()),
      (Gx = `overlay`),
      (Kx = `template-overlay`),
      (qx = class extends x {
        constructor() {
          (super(...arguments),
            I(this, `state`, { error: void 0 }),
            I(this, `message`, `Made UI non-interactive due to an error.`),
            I(this, `messageFatal`, `Fatal error.`));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((s.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(ut(qm ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          $t(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (qm && document.getElementById(`main`)?.innerHTML) || ``;
          return b(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${ut()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (Jx = 500),
      (Yx = 0.9),
      (Xx = 1.7),
      (Zx = 4),
      (Qx = 1 / 0),
      ($x = new WeakMap()),
      (eS = new Set()),
      (tS = new Map()),
      (nS = !Lh || typeof IntersectionObserver > `u` ? null : Sl()),
      (rS = /:([a-z]\w*)/gi),
      (iS = A(void 0)),
      (aS = xl(
        _(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: o,
            nodeId: s,
            scopeId: c,
            motionChild: l,
            ...u
          },
          d
        ) {
          let p = kt(),
            m = jt(),
            h = El(),
            { activeLocale: g, locales: _ } = gn(),
            v = Pl(),
            y = vn(),
            b = Fl({ nodeId: s, clickTrackingId: i, router: p, href: t, activeLocale: g }),
            x = f(() => {
              if (!t) return {};
              let e = $c(t) ? t : cl(t);
              if (!e) return {};
              if (L(e))
                return zl(
                  e,
                  p,
                  m,
                  {
                    openInNewTab: n,
                    trackLinkClick: b,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  y,
                  g?.id,
                  _,
                  h
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = v(i, s, g);
              if (ct(c)) throw c;
              let { routeId: l, href: u, elementId: d, pathVariables: f } = Cl(p, m, e, g, c, h);
              return {
                routeId: l,
                href: u,
                target: kl(n, !0),
                onClick: Rl(p, l, u, b, y, d, f, r),
                navigate: () => Ll(p, l, y, d, f, r),
                'data-framer-page-link-current': (m && Dl(m, e, h)) || void 0,
              };
            }, [t, p, g, h, n, m, r, b, a, _, o, v, y]),
            C = Ro(S(e) && `ref` in e ? e.ref : void 0),
            { navigate: w, routeId: T, ...E } = x;
          zo(
            C,
            (e) => {
              if (e === null || !T) return;
              let n = $c(t) ? t : cl(t);
              if (!n) return;
              let r = L(n) ? void 0 : n.pathVariables;
              return nS?.(e, y, T, r);
            },
            [t, y, T]
          );
          let D = !!w;
          return dl(
            Hs(d).cloneAsArray(e, (e) => Bl(e, { ...u, ...Hl(E, l, D) }, C)),
            c,
            s,
            t,
            x,
            C
          );
        })
      )),
      (oS = r.createContext(void 0)),
      (sS = `__framer_force_showing_editorbar_since`),
      (cS = class extends x {
        constructor() {
          (super(...arguments), I(this, `state`, { error: void 0 }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (lS = () => {
        try {
          return !!localStorage[sS];
        } catch {
          return !1;
        }
      }),
      (uS = () => !lS()),
      (dS = () => !1),
      (fS = () => () => {}),
      (pS = `main`),
      (mS = `framerGeneratedPage`),
      (hS = `<!-- Start of headStart -->`),
      (gS = `<!-- End of headStart -->`),
      (_S = `<!-- Start of headEnd -->`),
      (vS = `<!-- End of headEnd -->`),
      (yS = `<!-- Start of bodyStart -->`),
      (bS = `<!-- End of bodyStart -->`),
      (xS = `<!-- Start of bodyEnd -->`),
      (SS = `<!-- End of bodyEnd -->`),
      (CS = (() => r.createContext(void 0))()),
      (wS = null),
      (TS = null),
      Ym(su),
      (ES = (e, t, n, r, i) => {
        let a = d(oS),
          o = E(),
          l = un(),
          u = E(!0);
        return (
          c(() => {
            function c() {
              (!wS || !TS) && su();
              let o = n ? new URL(K.location.origin + n) : K.location,
                s = {
                  version: bh,
                  abTestId: e?.abTestId,
                  framerSiteId: a ?? null,
                  webPageId: e?.abTestingVariantId ?? t,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: i?.code || null,
                  referrer: null,
                  url: o.href,
                  hostname: o.hostname,
                  pathname: o.pathname,
                  search: o.search || null,
                  hash: o.hash || null,
                  timezone: wS,
                  locale: TS,
                };
              return e?.collectionId && r
                ? (async () => {
                    let t = null,
                      n = e.collectionId && l?.get(e.collectionId),
                      [a] = Object.values(r);
                    if (n && L(a)) {
                      let e = n.getRecordIdBySlug(a, i || void 0);
                      t = (ct(e) ? await e : e) ?? null;
                    }
                    return { ...s, collectionItemId: t };
                  })()
                : s;
            }
            (async () => {
              let e = (o.current = c()),
                t = e instanceof Promise ? await e : e;
              ((o.current = t),
                u.current ? (u.current = !1) : $t(`published_site_pageview`, t, `eager`));
            })();
            let d = async (e) => {
              if (e.persisted) {
                let e = (o.current = c()),
                  t = e instanceof Promise ? await e : e;
                ((o.current = t), $t(`published_site_pageview`, t, `eager`));
              }
            };
            return (
              s.addEventListener(`pageshow`, d),
              () => {
                s.removeEventListener(`pageshow`, d);
              }
            );
          }, [e, t, n, r, i, a, l]),
          o
        );
      }),
      (DS = { status: `loading`, data: void 0 }),
      (OS = 5e3),
      (kS = () => {}),
      (IS = class e {
        constructor() {
          (I(this, `responseValues`, new Map()),
            Ce(this, AS, new Map()),
            Ce(this, jS, new Set()),
            Ce(this, MS, new Map()),
            Ce(this, NS, new Map()),
            Ce(this, PS, new Map()),
            Ce(this, FS, new Map()),
            I(
              this,
              `persistCache`,
              Rs(() => {
                let t = {};
                for (let [e, n] of this.responseValues) {
                  if (!n || n.status !== `success`) continue;
                  let r = P(this, MS).get(e);
                  if (!r || r === 0) continue;
                  let i = P(this, NS).get(e);
                  i && ((i && Cu(i, r)) || (t[e] = [i, r, n.data]));
                }
                try {
                  localStorage.setItem(e.cacheKey, JSON.stringify(t));
                } catch {}
              }, 500)
            ));
        }
        unmount() {
          for (let [e, t] of P(this, FS)) (clearInterval(t), P(this, FS).delete(e));
        }
        stopQueryRefetching(e) {
          let t = yu(e),
            n = P(this, FS).get(t);
          n && (clearInterval(n), P(this, FS).delete(t));
        }
        startQueryRefetching(e) {
          let t = yu(e),
            n = P(this, FS).get(t),
            r = P(this, MS).get(t);
          if (n || !r) return;
          let i = K.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = P(this, NS).get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          P(this, FS).set(t, i);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              Cu(r, i) ||
                (P(this, NS).set(e, r),
                P(this, MS).set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = P(this, AS).get(e);
          if (n) for (let e of n) e();
        }
        async prefetch(e) {
          if (!M_() || !rl(e.url, !1)) return;
          let t = yu(e);
          (P(this, jS).add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = P(this, AS).get(t);
          for (let e of r ?? []) e();
          let i = Su(n, e);
          return (e.resultOutputType === `image` && L(i) && (await gu(i).catch(kS)), i);
        }
        async fetchWithCache(e) {
          if (!M_()) return;
          let t = yu(e),
            n = P(this, PS).get(t);
          if (n) return n;
          let r = P(this, NS).get(t),
            i = r && Cu(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, DS);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                P(this, NS).set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            P(this, PS).set(t, a),
            a.finally(() => {
              P(this, PS).delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !P(this, jS).has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!rl(r, !1)) return kS;
          let a = yu(e),
            o = P(this, MS).get(a);
          ((!o || i < o) && P(this, MS).set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = P(this, AS).get(a) ?? new Set();
          return (
            s.add(t),
            P(this, AS).set(a, s),
            () => {
              let n = P(this, AS).get(a);
              n &&
                (n.delete(t),
                n.size === 0 && P(this, AS).delete(a),
                P(this, AS).size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (AS = new WeakMap()),
      (jS = new WeakMap()),
      (MS = new WeakMap()),
      (NS = new WeakMap()),
      (PS = new WeakMap()),
      (FS = new WeakMap()),
      I(IS, `cacheKey`, `framer-fetch-client-cache`),
      (LS = IS),
      (RS = A(void 0)),
      (zS = A(!0)),
      (BS = ({ children: e, client: t }) => {
        let [n] = p(() => t ?? new LS()),
          [r, i] = p(!0);
        return (
          c(
            () => (
              n.hydrateCache(),
              k(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          b(zS.Provider, { value: r, children: b(RS.Provider, { value: n, children: e }) })
        );
      }),
      (Ve.WillChange = qe),
      (VS = xl(
        _(function ({ links: e, children: t, ...n }, r) {
          let i = kt(),
            { activeLocale: a } = gn(),
            o = Hs(r),
            s = Pl(),
            c = [],
            l = e.map((e) => {
              if (e)
                return L(e)
                  ? Wl(e, i, void 0, void 0, a)
                  : Wl(e.href, i, e.implicitPathVariables, e.refKey, a, (e, t) => s(e, t, a, c));
            });
          if (c.length > 0) throw Promise.allSettled(c);
          return o(t(l), n);
        })
      )),
      (Z = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return Ru(e, t);
            case `boolean`:
              return Bu(e);
            case `color`:
              return Uu(e);
            case `date`:
              return Gu(e);
            case `enum`:
              return qu(e);
            case `file`:
              return Yu(e);
            case `link`:
              return Zu(e);
            case `number`:
              return $u(e);
            case `object`:
              return nd(e, t);
            case `responsiveimage`:
              return id(e);
            case `richtext`:
              return od(e);
            case `string`:
              return ud(e);
            case `vectorsetitem`:
              return cd(e);
            case `unknown`:
              return e;
            default:
              V(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return $e(e)
            ? { type: `boolean`, value: e }
            : at(e)
              ? { type: `date`, value: e.toISOString() }
              : R(e)
                ? { type: `number`, value: e }
                : L(e)
                  ? { type: `string`, value: e }
                  : et(e)
                    ? { type: `array`, value: e.map(Z.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type ? fd(e, t, n) === 0 : !1;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type ? fd(e, t, n) < 0 : !1;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type ? fd(e, t, n) <= 0 : !1;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type ? fd(e, t, n) > 0 : !1;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type ? fd(e, t, n) >= 0 : !1;
        },
        in(e, t, n) {
          return t?.type === `array` ? t.value.some((t) => Z.equal(t, e, n)) : !1;
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => Z.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = dd(e),
            i = dd(t);
          return rt(r) || rt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = dd(e),
            i = dd(t);
          return rt(r) || rt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = dd(e),
            i = dd(t);
          return rt(r) || rt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          switch (e?.type) {
            case `array`:
              return e.value.length;
          }
          return 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(Z.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return L(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              V(e);
          }
        },
      }),
      (HS = { type: `unknown`, isNullable: !0 }),
      (US = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t), I(this, `schema`), I(this, `indexes`, []));
          let n = Ta(e);
          B(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (B(n !== `array`, `Array properties are not supported`),
              B(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (it(i)) continue;
            let a = this.schema[t];
            if (!nt(a)) {
              if ((B(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
                n[t] = { type: a.type, value: { itemIndex: r, key: t } };
                continue;
              }
              n[t] = { type: a.type, value: i };
            }
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await pd(this.collection, this.locale))[t]?.[n];
          return lh.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems() {
          return (await pd(this.collection, this.locale)).map((e, t) => {
            let n = String(t);
            return this.getDatabaseItem(e, n);
          });
        }
        async resolveItems(e) {
          let t = await pd(this.collection, this.locale);
          return e.map((e) => {
            let n = t[Number(e)];
            return (B(n, `Can't find collection item`), this.getDatabaseItem(n, e));
          });
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (WS = new WeakMap()),
      (GS = `$r_`),
      (KS = new Map()),
      (qS = 1e3),
      (Q = class e {
        constructor(e) {
          this.network = e;
        }
        static estimate(t, n) {
          let r = _d(),
            i = vd();
          return new e(t * r + n / i);
        }
        static max(t, n) {
          return new e(Math.max(t.network, n.network));
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : e.network > t.network ? 1 : 0;
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (JS = class {
        constructor(e, t) {
          ((this.id = e),
            (this.relational = t),
            I(this, `nodes`, []),
            I(this, `winners`, new Map()));
        }
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new YS();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          B(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (YS = class {
        constructor() {
          (I(this, `node`), I(this, `cost`, new Q(1 / 0)), I(this, `nodes`, []));
        }
        update(e, t) {
          (this.nodes.push(e), Q.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (XS = class {
        constructor(e) {
          this.isSynchronous = e;
        }
      }),
      (ZS = class extends XS {
        constructor() {
          (super(...arguments), I(this, `group`));
        }
        getGroup() {
          return (B(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (B(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return Eu(this.evaluate(void 0));
        }
        evaluateAsync() {
          return Du(this.evaluate(void 0));
        }
      }),
      (QS = class {
        constructor(e, t) {
          (I(this, `collections`),
            I(this, `richTextCache`, new WeakMap()),
            I(this, `vectorSetItemCache`, new WeakMap()),
            (this.collections = Ed(e, t)));
        }
        *resolveArrayValue(e) {
          return yield* ku(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* W(t);
        }
        loadRichTextValue(e) {
          let t = e.value;
          B(Cd(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          B(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return st(t) ? yield t : t;
        }
        loadVectorSetItemValue(e) {
          let t = e.value;
          B(Td(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (B(n, `Can't find collection for vector set item pointer`),
            B(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return st(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      ($S = `index`),
      (eC = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), G(this.name, ...e));
        }
      }),
      (tC = class {
        constructor(e, t, n) {
          ((this.id = e),
            (this.name = t),
            (this.data = n),
            I(this, `indexes`, new rC()),
            I(this, `fields`, new $()));
        }
      }),
      (nC = class {
        constructor(e, t, n, r, i, a) {
          for (let o in ((this.id = e),
          (this.data = t),
          (this.collection = n),
          (this.lookupNodes = r),
          (this.constraint = i),
          (this.ordering = a),
          I(this, `resolvedFields`, new $()),
          t.schema))
            for (let e of n.fields) e.name === o && this.resolvedFields.add(e);
        }
      }),
      (rC = class extends eC {
        constructor() {
          (super(...arguments), I(this, `name`, `Indexes`));
        }
      }),
      (iC = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        getValue(e) {
          B(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          switch (t?.type) {
            case `richtext`:
              return (
                B(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: Sd(this.collection.data, t.value) }
              );
            case `vectorsetitem`:
              return (
                B(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: wd(this.collection.data, t.value) }
              );
          }
          return t ?? null;
        }
      }),
      ($ = class extends eC {
        constructor() {
          (super(...arguments), I(this, `name`, `Fields`));
        }
      }),
      (aC = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        getHash() {
          return G(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (oC = class {
        constructor(e) {
          (I(this, `fields`, []), e && this.merge(e));
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return G(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e ? !0 : this.length === e.length ? this.getHash() === e.getHash() : !1;
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== $S) return !1;
          return !0;
        }
      }),
      (sC = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        getHash() {
          return G(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 ? !0 : e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0
            ? !0
            : e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (cC = class e {
        constructor(e) {
          ((this.parent = e), I(this, `node`), I(this, `ordering`), I(this, `fields`, []));
        }
        takeNode() {
          let e = this.node;
          return (B(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (B(!this.node, `Node already set`), (this.node = e));
        }
        setOrdering(e) {
          this.ordering = e;
        }
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.addField(t);
        }
        resolveField(e, t) {
          let n = [];
          for (let r of this.fields) r.name === e && ((t && r.collectionName !== t) || n.push(r));
          if (n.length === 1) return n[0];
          if (n.length > 1) throw Error(`Ambiguous fields`);
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fields.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new oC();
        }
        getRequiredResolvedFields() {
          let e = new $();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new sC(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          B(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (B(e, `Field must exist`), e.field);
        }
      }),
      (lC = class {
        constructor() {
          (I(this, `pointers`, new Map()), I(this, `values`, new Map()));
        }
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (uC = class e {
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          return new e(t, this.tuples.map(n));
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new $();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new $();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (dC = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        getHash() {
          return G(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (fC = class e extends ZS {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            I(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new $();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new $();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new sC(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new Q(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = Q.max(i, n);
          }
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(
            this.inputGroup.getOptimized(n),
            this.projections.map((e) => new dC(e.input.getOptimized(), e.field)),
            this.passthrough
          );
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* ku(
              n.tuples.map((t) =>
                ku(
                  this.projections.map((n) => W({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new lC();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            B(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (pC = { type: 0 }),
      (mC = class extends XS {
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        evaluateSync() {
          return Eu(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return Du(this.evaluate(void 0, void 0));
        }
      }),
      (hC = { type: 0 }),
      (gC = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        getHash() {
          return G(`CaseCondition`, this.when, this.then);
        }
      }),
      (_C = class e extends mC {
        constructor(e, t, n) {
          let r = new $(),
            i = new $(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n),
            I(this, `definition`, { type: `unknown`, isNullable: !0 }));
        }
        getHash() {
          return G(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new Q(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new gC(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* W({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: ku(
              this.conditions.map((n) =>
                W({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (Z.equal(n, e, hC)) return t;
          } else for (let { when: e, then: t } of r) if (Vu(e)) return t;
          return i;
        }
      }),
      (vC = class {
        constructor(e, t, n) {
          ((this.normalizer = e),
            (this.query = t),
            (this.locale = n),
            I(this, `collectionId`, 0),
            I(this, `indexId`, 0),
            I(this, `fieldId`, 0),
            I(this, `subqueries`, []));
        }
        build() {
          let e = new cC();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new $(),
            o;
          if (t.orderBy) {
            o = new oC();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (nt(t)) continue;
                a.add(t.field);
                let r = new aC(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new iC(kd(this.fieldId++), void 0, t.definition, void 0),
                  a = new dC(t, r);
                i.push(a);
                let s = new aC(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new $(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (nt(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              B(n.alias, `Subqueries should have an alias`);
              let r = kd(this.fieldId++),
                a = n.alias,
                s = new iC(r, a, t.definition, void 0),
                c = new dC(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              V(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = gd(t.data, this.locale),
            i = t.alias,
            a = new tC(Dd(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new iC(kd(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.fields.add(r));
          }
          {
            let e = new iC(kd(this.fieldId++), $S, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: $S, collectionName: i });
            let t = new oC(),
              r = new aC(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new oC(),
              o = new nC(Od(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new oC(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              V(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              V(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(HS, null);
        }
        buildLiteralValue(e) {
          let t = Z.parse(e.value);
          return this.normalizer.newScalarConstant(HS, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (B(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                B(n, `Missing argument`),
                B(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                B(n, `Missing argument`),
                B(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              V(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new yC(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new yC(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new gC(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              V(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              V(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (yC = class {
        constructor(e) {
          ((this.inScope = e),
            I(this, `referencedFields`, new $()),
            I(this, `referencedOuterFields`, new $()));
        }
      }),
      (bC = class e extends ZS {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            I(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new sC(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.predicate.getOptimized());
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* ku(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => Vu(n[t] ?? null));
        }
      }),
      (xC = class e extends ZS {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        getHash() {
          return G(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return Q.estimate(1, e ? 100 * qS : 50 * qS);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection;
          return new uC(
            this.getOutputFields(),
            (yield e.data.lookupItems(this.query)).map((n) => {
              let r = new lC();
              for (let i of e.resolvedFields) {
                let e = i.getValue(n);
                (r.addPointer(t, n.pointer), r.addValue(i, e));
              }
              return r;
            })
          );
        }
      }),
      (SC = class e extends ZS {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            I(this, `leftGroup`),
            I(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return G(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new $(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new sC(new oC(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t);
          return new e(r, this.rightGroup.getOptimized(i));
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* W({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (CC = class e extends mC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.equal(n, r, pC) };
        }
      }),
      (wC = class e extends ZS {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            I(this, `leftGroup`),
            I(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return G(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new $();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new $(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new sC(new oC(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return Q.max(Q.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t);
          return new e(r, this.rightGroup.getOptimized(i), this.constraint.getOptimized());
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new uC(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new lC();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* W({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof CC) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new uC(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new lC();
              (n.merge(i),
                n.merge(a),
                Vu(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (TC = class e extends ZS {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            I(this, `leftGroup`),
            I(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return G(`RelationalRightJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new $();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new $(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new sC(new oC(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return Q.max(Q.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t);
          return new e(r, this.rightGroup.getOptimized(i), this.constraint.getOptimized());
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              o = a.get(r) ?? [];
            (o.push(t), a.set(r, o));
          }
          let o = new uC(this.getOutputFields());
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              s = a.get(n) ?? [];
            if (s.length === 0) o.push(e);
            else
              for (let t of s) {
                let n = new lC();
                (n.merge(e), n.merge(t), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* W({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof CC) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new uC(this.getOutputFields());
          for (let i of n.tuples) {
            let n = !1;
            for (let a of t.tuples) {
              let t = new lC();
              (t.merge(i),
                t.merge(a),
                Vu(yield* this.constraint.evaluate(e, t)) && (r.push(t), (n = !0)));
            }
            n || r.push(i);
          }
          return r;
        }
      }),
      (EC = class e extends ZS {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        getHash() {
          return G(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return Q.estimate(1, 200 * qS);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields();
          return new uC(
            t,
            (yield e.data.scanItems()).map((n) => {
              let r = new lC();
              for (let i of t) {
                let t = i.getValue(n);
                (r.addPointer(e, n.pointer), r.addValue(i, t));
              }
              return r;
            })
          );
        }
      }),
      (DC = class e extends ZS {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            I(this, `leftGroup`),
            I(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return G(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new $(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new sC(new oC(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t);
          return new e(r, this.rightGroup.getOptimized(i));
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* W({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (OC = class e extends mC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Vu(n) && Vu(r) };
        }
      }),
      (kC = class extends mC {
        constructor(e, t) {
          let n = new $(),
            r = new $();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        getHash() {
          return G(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (AC = { type: 0 }),
      (jC = class e extends mC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* W({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.contains(n, r, AC) };
        }
      }),
      (MC = { type: 0 }),
      (NC = class e extends mC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* W({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.endsWith(n, r, MC) };
        }
      }),
      (PC = class e extends mC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.greaterThan(n, r, pC) };
        }
      }),
      (FC = class e extends mC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.greaterThanOrEqual(n, r, pC) };
        }
      }),
      (IC = class e extends mC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.lessThan(n, r, pC) };
        }
      }),
      (LC = class e extends mC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.lessThanOrEqual(n, r, pC) };
        }
      }),
      (RC = class e extends mC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Z.equal(n, r, pC) };
        }
      }),
      (zC = class e extends mC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Vu(n) || Vu(r) };
        }
      }),
      (BC = { type: 0 }),
      (VC = class e extends mC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* W({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.startsWith(n, r, BC) };
        }
      }),
      (HC = class {
        constructor(e) {
          ((this.normalizer = e), I(this, `memo`), (this.memo = e.memo));
        }
        explore(e) {
          let t = e.getGroup();
          if (e instanceof wC) {
            let n = new TC(e.right, e.left, e.constraint);
            this.memo.addRelational(n, t);
          }
          if (e instanceof bC) {
            if (e.predicate instanceof OC) {
              let n = new SC(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof zC) {
              let n = new DC(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof EC)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new xC(n, Ad(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof bC) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof EC)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof CC &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof kC &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = Ad(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new xC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof RC &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof kC &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = Ad(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new xC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof IC &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof kC &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Ad(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new xC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof LC &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof kC &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Ad(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new xC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof PC &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof kC &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Ad(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new xC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof FC &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof kC &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Ad(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new xC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof jC &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof kC &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = Ad(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new xC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof VC &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof kC &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = Ad(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new xC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof NC &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof kC &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = Ad(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new xC(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (UC = class {
        constructor(e) {
          this.outputFields = e;
        }
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (WC = class {
        constructor() {
          (I(this, `nodes`, new Map()), I(this, `groups`, []));
        }
        addGroup(e) {
          let t = new JS(yd(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new UC(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            B(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (GC = class e extends ZS {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            I(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new sC(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.limit.getOptimized(), this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* W({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = ed(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (KC = class e extends ZS {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            I(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new sC(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.offset.getOptimized(), this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* W({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = ed(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (qC = class e extends mC {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            I(this, `inputGroup`),
            I(this, `definition`),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return G(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new $(),
            t = Object.values(this.namedFields);
          for (let n of t) nt(n.collection) || e.add(n);
          return new sC(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps();
          return new e(
            this.inputGroup.getOptimized(t),
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new lC();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (JC = class e extends mC {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            B(t.isNullable, `Unsupported non-nullable cast`));
        }
        getHash() {
          return G(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          return new e(this.input.getOptimized(), this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return Z.cast(n, this.definition);
        }
      }),
      (YC = class e extends mC {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            I(this, `inputGroup`),
            I(this, `definition`),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        getHash() {
          return G(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new $();
          return (nt(this.field.collection) || e.add(this.field), new sC(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps();
          return new e(
            this.inputGroup.getOptimized(t),
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new lC();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (XC = { type: 0 }),
      (ZC = class e extends mC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.in(n, r, XC) };
        }
      }),
      (QC = { type: 1 }),
      ($C = class e extends mC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            I(this, `definition`, { type: `number`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* W({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: Z.indexOf(n, r, QC) };
        }
      }),
      (ew = class e extends mC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            I(this, `definition`, {
              type: `array`,
              definition: { type: `string`, isNullable: !1 },
              isNullable: !1,
            }));
        }
        getHash() {
          return G(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = Md(n),
            a = Md(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (tw = class e extends mC {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            I(this, `definition`, { type: `number`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          return new e(this.input.getOptimized());
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: Z.length(n) };
        }
      }),
      (nw = class e extends mC {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          return new e(this.input.getOptimized());
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !Vu(yield* this.input.evaluate(e, t)) };
        }
      }),
      (rw = { type: 0 }),
      (iw = class e extends mC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Z.in(n, r, rw) };
        }
      }),
      (aw = class extends mC {
        constructor(e, t) {
          B(e.name !== $S, `Invalid field name`);
          let n = new $(),
            r = new $();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            I(this, `definition`),
            (this.definition = e.definition));
        }
        getHash() {
          return G(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (B(e, `Context must exist`), e.getValue(this.field))
            : (B(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (ow = class {
        constructor(e) {
          this.memo = e;
        }
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new EC(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new xC(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new wC(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof kC && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof wC && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          if (
            e instanceof TC &&
            t.referencedFields.subsetOf(e.rightGroup.relational.outputFields)
          ) {
            let n = this.newRelationalFilter(e.right, t);
            return this.newRelationalLeftJoin(e.left, n, e.constraint);
          }
          let n = new bC(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new fC(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof fC &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new GC(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new KC(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof kC) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new aw(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new kC(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof nw)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof CC) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof RC) return this.newScalarEquals(e.left, e.right);
          if (e instanceof IC) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof LC) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof PC) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof FC) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof OC) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof zC) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new nw(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof kC && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof kC && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof kC && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof kC && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new OC(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof kC && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof kC && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof kC && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof kC && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new zC(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof aw;
          if (t instanceof aw && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new CC(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof aw;
          if (t instanceof aw && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new RC(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof aw;
          if (t instanceof aw && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new IC(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof aw;
          if (t instanceof aw && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new LC(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof aw;
          if (t instanceof aw && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new PC(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof aw;
          if (t instanceof aw && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new FC(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new ZC(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new iw(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new gC(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new _C(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new jC(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new VC(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new NC(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new tw(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new $C(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new qC(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new YC(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new ew(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new JC(e, t);
          return this.finishScalar(n);
        }
      }),
      (sw = class extends ZS {}),
      (cw = class e extends sw {
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            I(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new $();
          return new sC(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return Q.estimate(0, 100 * qS).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          B(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Set();
          for (let e of this.fields)
            (B(e.collection, `Collection required to resolve field`), n.add(e.collection));
          for (let e of t.tuples)
            for (let t of this.fields) {
              let n = e.getValue(t);
              n?.type === `richtext`
                ? this.resolver.preloadRichTextValue(n)
                : n?.type === `vectorsetitem` && this.resolver.preloadVectorSetItemValue(n);
            }
          let r = yield Promise.all(
            Array.from(n).map(async (e) => {
              let n = [];
              for (let r of t.tuples) {
                let t = r.getPointer(e);
                t && n.push(t);
              }
              let r = await e.data.resolveItems(n);
              return (B(r.length === n.length, `Invalid number of items`), [e, r]);
            })
          );
          return t.map(t.fields, (e) => {
            let t = new lC();
            t.merge(e);
            for (let [n, i] of r) {
              let r = e.getPointer(n);
              if (!r) continue;
              let a = i.shift();
              (B(a, `Item not found`), B(a.pointer === r, `Pointer mismatch`));
              for (let e of n.fields) {
                let n = e.getValue(a);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (lw = { type: 0 }),
      (uw = class e extends sw {
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            I(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== $S && (nt(e.collection) || t.add(e));
          return new sC(new oC(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new Q(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === $S) {
                let r = n.collection;
                B(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                B(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                B(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!Z.equal(a, o, lw)) {
                if (rt(a) || Z.lessThan(a, o, lw)) return i ? -1 : 1;
                if (rt(o) || Z.greaterThan(a, o, lw)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (dw = class {
        constructor(e, t, n) {
          ((this.query = e),
            (this.locale = t),
            (this.resolver = n),
            I(this, `memo`, new WC()),
            I(this, `normalizer`, new ow(this.memo)),
            I(this, `explorer`, new HC(this.normalizer)));
        }
        optimize() {
          let e = new vC(this.normalizer, this.query, this.locale).build(),
            t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (B(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new cw(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new uw(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (fw = Tu(`query-engine`)),
      (pw = class {
        async evalQuery(e, t, n) {
          fw.enabled &&
            fw.debug(`Query:
${Gd(e)}`);
          let r = new QS(e, t),
            [i, a] = new dw(e, t, r).optimize(),
            o = await i.evaluateAsync(),
            s = Object.entries(a),
            c = [],
            l = Ou(
              ku(
                o.tuples.map((e) => {
                  let t = {},
                    i = {};
                  for (let [a, o] of s) {
                    let s = e.getValue(o);
                    ((t[a] = r.resolveValue(s)), n && (i[a] = s));
                  }
                  return (n && c.push(i), W(t));
                })
              )
            );
          return n ? [ct(l) ? await l : l, c] : l;
        }
        async serializeableQuery(e, t) {
          return this.evalQuery(e, t, !0);
        }
        async query(e, t) {
          return this.evalQuery(e, t, !1);
        }
        resolveSerializableQueryResult(e, t, n) {
          let r = new QS(t, n);
          return Ou(
            ku(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let i = e[n];
                  t[n] = r.resolveValue(i);
                }
                return W(t);
              })
            )
          );
        }
      }),
      (mw = (() => xh.QueryCache)()),
      (hw = class {
        constructor(e, t = 1 / 0) {
          ((this.queryEngine = e),
            (this.maxSize = t),
            I(this, `cache`, new Map()),
            I(this, `serializedCache`, wh === void 0 ? void 0 : new Map()));
        }
        prune() {
          if (!(this.cache.size <= this.maxSize))
            for (let [e, t] of this.cache) {
              if (this.cache.size <= this.maxSize) break;
              t.state !== `pending` && (this.cache.delete(e), this.serializedCache?.delete(e));
            }
        }
        get(e, t) {
          let n = Jd(e, t),
            r = this.cache.get(n);
          if (r) {
            if (
              (this.cache.delete(n),
              this.cache.set(n, r),
              wh !== void 0 && this.serializedCache !== void 0 && !md(n) && r.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(n);
              e !== void 0 && wh.set(mw, n, e);
            }
            return r;
          }
          let i = new lh(() => {
            let r = md(n),
              i = r ? void 0 : an(mw, n);
            if (i)
              try {
                return this.queryEngine.resolveSerializableQueryResult(i, e, t);
              } catch (e) {
                nn(e, n);
              }
            return wh !== void 0 && !r
              ? this.queryEngine
                  .serializeableQuery(e, t)
                  .then(([e, t]) => (this.serializedCache?.set(n, t), wh.set(mw, n, t), e))
              : this.queryEngine.query(e, t);
          });
          return (this.cache.set(n, i), this.prune(), i);
        }
      }),
      (gw = `style[data-framer-breakpoint-css]`),
      (_w = `page`),
      (vw = new hw(new pw())),
      (yw = Symbol(`cycle`)),
      (Sw = (() => {
        let e = A(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (Cw = r.createContext(void 0)),
      (ww = () => r.useContext(Cw)),
      (Tw = {
        Arial: {
          Regular: { selector: `Arial`, weight: void 0 },
          Black: { selector: `Arial-Black`, weight: void 0 },
          Narrow: { selector: `Arial Narrow`, weight: void 0 },
          'Rounded Bold': { selector: `Arial Rounded MT Bold`, weight: void 0 },
        },
        Avenir: {
          Book: { selector: `Avenir`, weight: void 0 },
          Light: { selector: `Avenir-Light`, weight: void 0 },
          Medium: { selector: `Avenir-Medium`, weight: void 0 },
          Heavy: { selector: `Avenir-Heavy`, weight: void 0 },
          Black: { selector: `Avenir-Black`, weight: void 0 },
        },
        'Avenir Next': {
          Regular: { selector: `Avenir Next`, weight: void 0 },
          'Ultra Light': { selector: `AvenirNext-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNext-Medium`, weight: void 0 },
          'Demi Bold': { selector: `AvenirNext-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNext-Heavy`, weight: void 0 },
        },
        'Avenir Next Condensed': {
          Regular: { selector: `Avenir Next Condensed`, weight: void 0 },
          'Ultra Light': { selector: `AvenirNextCondensed-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNextCondensed-Medium`, weight: void 0 },
          'Demi Bold': { selector: `AvenirNextCondensed-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNextCondensed-Heavy`, weight: void 0 },
        },
        Baskerville: {
          Regular: { selector: `Baskerville`, weight: void 0 },
          'Semi Bold': { selector: `Baskerville-SemiBold`, weight: void 0 },
        },
        'Bodoni 72': {
          Book: { selector: `Bodoni 72`, weight: void 0 },
          Oldstyle: { selector: `Bodoni 72 Oldstyle`, weight: void 0 },
          Smallcaps: { selector: `Bodoni 72 Smallcaps`, weight: void 0 },
        },
        Courier: { Regular: { selector: `Courier`, weight: void 0 } },
        'Courier New': { Regular: { selector: `Courier New`, weight: void 0 } },
        Futura: {
          Medium: { selector: `Futura`, weight: void 0 },
          Condensed: { selector: `Futura-CondensedMedium`, weight: void 0 },
          'Condensed ExtraBold': { selector: `Futura-CondensedExtraBold`, weight: void 0 },
        },
        Georgia: { Regular: { selector: `Georgia`, weight: void 0 } },
        'Gill Sans': {
          Regular: { selector: `Gill Sans`, weight: void 0 },
          Light: { selector: `GillSans-Light`, weight: void 0 },
          SemiBold: { selector: `GillSans-SemiBold`, weight: void 0 },
          UltraBold: { selector: `GillSans-UltraBold`, weight: void 0 },
        },
        Helvetica: {
          Regular: { selector: `Helvetica`, weight: void 0 },
          Light: { selector: `Helvetica-Light`, weight: void 0 },
          Bold: { selector: `Helvetica-Bold`, weight: void 0 },
          Oblique: { selector: `Helvetica-Oblique`, weight: void 0 },
          'Light Oblique': { selector: `Helvetica-LightOblique`, weight: void 0 },
          'Bold Oblique': { selector: `Helvetica-BoldOblique`, weight: void 0 },
        },
        'Helvetica Neue': {
          Regular: { selector: `Helvetica Neue`, weight: void 0 },
          UltraLight: { selector: `HelveticaNeue-UltraLight`, weight: void 0 },
          Thin: { selector: `HelveticaNeue-Thin`, weight: void 0 },
          Light: { selector: `HelveticaNeue-Light`, weight: void 0 },
          Medium: { selector: `HelveticaNeue-Medium`, weight: void 0 },
          Bold: { selector: `HelveticaNeue-Bold`, weight: void 0 },
          Italic: { selector: `HelveticaNeue-Italic`, weight: void 0 },
          'UltraLight Italic': { selector: `HelveticaNeue-UltraLightItalic`, weight: void 0 },
          'Thin Italic': { selector: `HelveticaNeue-ThinItalic`, weight: void 0 },
          'Light Italic': { selector: `HelveticaNeue-LightItalic`, weight: void 0 },
          'Medium Italic': { selector: `HelveticaNeue-MediumItalic`, weight: void 0 },
          'Bold Italic': { selector: `HelveticaNeue-BoldItalic`, weight: void 0 },
          'Condensed Bold': { selector: `HelveticaNeue-CondensedBold`, weight: void 0 },
          'Condensed Black': { selector: `HelveticaNeue-CondensedBlack`, weight: void 0 },
        },
        'Hoefler Text': { Regular: { selector: `Hoefler Text`, weight: void 0 } },
        Impact: { Regular: { selector: `Impact`, weight: void 0 } },
        'Lucida Grande': { Regular: { selector: `Lucida Grande`, weight: void 0 } },
        Menlo: { Regular: { selector: `Menlo`, weight: void 0 } },
        Monaco: { Regular: { selector: `Monaco`, weight: void 0 } },
        Optima: {
          Regular: { selector: `Optima`, weight: void 0 },
          ExtraBlack: { selector: `Optima-ExtraBlack`, weight: void 0 },
        },
        Palatino: { Regular: { selector: `Palatino`, weight: void 0 } },
        'SF Pro Display': {
          Regular: { selector: `__SF-UI-Display-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Black__`, weight: 900 },
          Italic: { selector: `__SF-UI-Display-Italic__`, weight: 400 },
          'Ultralight Italic': { selector: `__SF-UI-Display-Ultralight-Italic__`, weight: 100 },
          'Thin Italic': { selector: `__SF-UI-Display-Thin-Italic__`, weight: 200 },
          'Light Italic': { selector: `__SF-UI-Display-Light-Italic__`, weight: 300 },
          'Medium Italic': { selector: `__SF-UI-Display-Medium-Italic__`, weight: 500 },
          'Semibold Italic': { selector: `__SF-UI-Display-Semibold-Italic__`, weight: 600 },
          'Bold Italic': { selector: `__SF-UI-Display-Bold-Italic__`, weight: 700 },
          'Heavy Italic': { selector: `__SF-UI-Display-Heavy-Italic__`, weight: 800 },
          'Black Italic': { selector: `__SF-UI-Display-Black-Italic__`, weight: 900 },
        },
        'SF Pro Display Condensed': {
          Regular: { selector: `__SF-UI-Display-Condensed-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Condensed-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Condensed-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Condensed-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Condensed-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Condensed-Black__`, weight: 900 },
        },
        'SF Pro Text': {
          Regular: { selector: `__SF-UI-Text-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Heavy__`, weight: 800 },
          Italic: { selector: `__SF-UI-Text-Italic__`, weight: 400 },
          'Light Italic': { selector: `__SF-UI-Text-Light-Italic__`, weight: 200 },
          'Medium Italic': { selector: `__SF-UI-Text-Medium-Italic__`, weight: 500 },
          'Semibold Italic': { selector: `__SF-UI-Text-Semibold-Italic__`, weight: 600 },
          'Bold Italic': { selector: `__SF-UI-Text-Bold-Italic__`, weight: 700 },
          'Heavy Italic': { selector: `__SF-UI-Text-Heavy-Italic__`, weight: 800 },
        },
        'SF Pro Text Condensed': {
          Regular: { selector: `__SF-UI-Text-Condensed-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Condensed-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Condensed-Heavy__`, weight: 800 },
        },
        Tahoma: { Regular: { selector: `Tahoma`, weight: void 0 } },
        Times: { Regular: { selector: `Times`, weight: void 0 } },
        'Times New Roman': { Regular: { selector: `Times New Roman`, weight: void 0 } },
        Trebuchet: { Regular: { selector: `Trebuchet MS`, weight: void 0 } },
        Verdana: { Regular: { selector: `Verdana`, weight: void 0 } },
      }),
      (Ew = {
        '__SF-Compact-Display-Regular__': `SFCompactDisplay-Regular|.SFCompactDisplay-Regular`,
        '__SF-Compact-Display-Ultralight__': `SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight`,
        '__SF-Compact-Display-Thin__': `SFCompactDisplay-Thin|.SFCompactDisplay-Thin`,
        '__SF-Compact-Display-Light__': `SFCompactDisplay-Light|.SFCompactDisplay-Light`,
        '__SF-Compact-Display-Medium__': `SFCompactDisplay-Medium|.SFCompactDisplay-Medium`,
        '__SF-Compact-Display-Semibold__': `SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold`,
        '__SF-Compact-Display-Heavy__': `SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy`,
        '__SF-Compact-Display-Black__': `SFCompactDisplay-Black|.SFCompactDisplay-Black`,
        '__SF-Compact-Display-Bold__': `SFCompactDisplay-Bold|.SFCompactDisplay-Bold`,
        '__SF-UI-Text-Regular__': `.SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText`,
        '__SF-UI-Text-Light__': `.SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light`,
        '__SF-UI-Text-Medium__': `.SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium`,
        '__SF-UI-Text-Semibold__': `.SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold`,
        '__SF-UI-Text-Bold__': `.SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold`,
        '__SF-UI-Text-Heavy__': `.SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy`,
        '__SF-UI-Text-Italic__': `.SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic`,
        '__SF-UI-Text-Light-Italic__': `.SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic`,
        '__SF-UI-Text-Medium-Italic__': `.SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic`,
        '__SF-UI-Text-Semibold-Italic__': `.SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic`,
        '__SF-UI-Text-Bold-Italic__': `.SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic`,
        '__SF-UI-Text-Heavy-Italic__': `.SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic`,
        '__SF-Compact-Text-Regular__': `SFCompactText-Regular|.SFCompactText-Regular`,
        '__SF-Compact-Text-Light__': `SFCompactText-Light|.SFCompactText-Light`,
        '__SF-Compact-Text-Medium__': `SFCompactText-Medium|.SFCompactText-Medium`,
        '__SF-Compact-Text-Semibold__': `SFCompactText-Semibold|.SFCompactText-Semibold`,
        '__SF-Compact-Text-Bold__': `SFCompactText-Bold|.SFCompactText-Bold`,
        '__SF-Compact-Text-Heavy__': `SFCompactText-Heavy|.SFCompactText-Heavy`,
        '__SF-Compact-Text-Italic__': `SFCompactText-Italic|.SFCompactText-Italic`,
        '__SF-Compact-Text-Light-Italic__': `SFCompactText-LightItalic|.SFCompactText-LightItalic`,
        '__SF-Compact-Text-Medium-Italic__': `SFCompactText-MediumItalic|.SFCompactText-MediumItalic`,
        '__SF-Compact-Text-Semibold-Italic__': `SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic`,
        '__SF-Compact-Text-Bold-Italic__': `SFCompactText-BoldItalic|.SFCompactText-BoldItalic`,
        '__SF-Compact-Text-Heavy-Italic__': `SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic`,
        '__SF-UI-Display-Condensed-Regular__': `.SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular`,
        '__SF-UI-Display-Condensed-Ultralight__': `.SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight`,
        '__SF-UI-Display-Condensed-Thin__': `.SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin`,
        '__SF-UI-Display-Condensed-Light__': `.SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light`,
        '__SF-UI-Display-Condensed-Medium__': `.SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium`,
        '__SF-UI-Display-Condensed-Semibold__': `.SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold`,
        '__SF-UI-Display-Condensed-Bold__': `.SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold`,
        '__SF-UI-Display-Condensed-Heavy__': `.SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy`,
        '__SF-UI-Display-Condensed-Black__': `.SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black`,
        '__SF-UI-Display-Regular__': `.SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay`,
        '__SF-UI-Display-Ultralight__': `.SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight`,
        '__SF-UI-Display-Thin__': `.SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin`,
        '__SF-UI-Display-Light__': `.SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light`,
        '__SF-UI-Display-Medium__': `.SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium`,
        '__SF-UI-Display-Semibold__': `.SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold`,
        '__SF-UI-Display-Bold__': `.SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold`,
        '__SF-UI-Display-Heavy__': `.SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy`,
        '__SF-UI-Display-Black__': `.SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black`,
        '__SF-UI-Display-Italic__': `.SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic`,
        '__SF-UI-Display-Ultralight-Italic__': `.SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic`,
        '__SF-UI-Display-Thin-Italic__': `.SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic`,
        '__SF-UI-Display-Light-Italic__': `.SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic`,
        '__SF-UI-Display-Medium-Italic__': `.SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic`,
        '__SF-UI-Display-Semibold-Italic__': `.SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic`,
        '__SF-UI-Display-Bold-Italic__': `.SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic`,
        '__SF-UI-Display-Heavy-Italic__': `.SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic`,
        '__SF-UI-Display-Black-Italic__': `.SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic`,
        '__SF-UI-Text-Condensed-Regular__': `.SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular`,
        '__SF-UI-Text-Condensed-Light__': `.SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light`,
        '__SF-UI-Text-Condensed-Medium__': `.SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium`,
        '__SF-UI-Text-Condensed-Semibold__': `.SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold`,
        '__SF-UI-Text-Condensed-Bold__': `.SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold`,
        '__SF-UI-Text-Condensed-Heavy__': `.SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy`,
        '__SF-Compact-Rounded-Regular__': `SFCompactRounded-Regular|.SFCompactRounded-Regular`,
        '__SF-Compact-Rounded-Ultralight__': `SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight`,
        '__SF-Compact-Rounded-Thin__': `SFCompactRounded-Thin|.SFCompactRounded-Thin`,
        '__SF-Compact-Rounded-Light__': `SFCompactRounded-Light|.SFCompactRounded-Light`,
        '__SF-Compact-Rounded-Medium__': `SFCompactRounded-Medium|.SFCompactRounded-Medium`,
        '__SF-Compact-Rounded-Semibold__': `SFCompactRounded-Semibold|.SFCompactRounded-Semibold`,
        '__SF-Compact-Rounded-Bold__': `SFCompactRounded-Bold|.SFCompactRounded-Bold`,
        '__SF-Compact-Rounded-Heavy__': `SFCompactRounded-Heavy|.SFCompactRounded-Heavy`,
        '__SF-Compact-Rounded-Black__': `SFCompactRounded-Black|.SFCompactRounded-Black`,
      }),
      (Dw = Tw),
      (Ow = `System Default`),
      (kw = class {
        constructor() {
          (I(this, `name`, `local`),
            I(this, `fontFamilies`, []),
            I(this, `byFamilyName`, new Map()),
            I(this, `fontAliasBySelector`, new Map()),
            I(this, `fontAliases`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.addFontFamily(t), t);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        importFonts() {
          let e = [];
          for (let t of Object.keys(Dw)) {
            let n = Dw[t];
            if (!n) continue;
            let r = this.createFontFamily(t);
            for (let e of Object.keys(n)) {
              let t = n[e];
              if (!t) continue;
              let { selector: i, weight: a } = t,
                o = { variant: e, selector: i, weight: a, family: r, cssFamilyName: r.name };
              r.fonts.push(o);
            }
            e.push(...r.fonts);
          }
          for (let [e, t] of Object.entries(Ew)) this.addFontAlias(e, t);
          let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
          this.addFontFamily(t);
          for (let [e, t] of n) this.addFontAlias(e, t);
          return (e.push(...t.fonts), e);
        }
        addFontAlias(e, t) {
          (this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e));
        }
        getSystemFontFamily() {
          let e = { name: Ow, fonts: [], source: this.name },
            t = new Map(),
            n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
          for (let r of [`normal`, `italic`])
            for (let i of n) {
              let n = Lf(i, r),
                a = `__SystemDefault-${i}-${r}__`,
                o = {
                  variant: n,
                  selector: a,
                  style: r,
                  weight: i,
                  family: e,
                  cssFamilyName: e.name,
                };
              (e.fonts.push(o),
                t.set(
                  a,
                  `system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif`
                ));
            }
          return { fontFamily: e, aliases: t };
        }
        getFontAliasBySelector(e) {
          return this.fontAliasBySelector.get(e) || null;
        }
        getFontSelectorByAlias(e) {
          return this.fontAliases.get(e) || null;
        }
        isFontFamilyAlias(e) {
          return !!(e && /^__.*__$/u.exec(e));
        }
      }),
      (Aw = {
        100: `Thin`,
        200: `Extra Light`,
        300: `Light`,
        400: `Normal`,
        500: `Medium`,
        600: `Semi Bold`,
        700: `Bold`,
        800: `Extra Bold`,
        900: `Black`,
      }),
      (jw = class extends Map {
        constructor() {
          (super(...arguments), I(this, `_hash`, 0));
        }
        get hash() {
          return this._hash;
        }
        set(e, t) {
          return (this._hash++, super.set(e, t));
        }
        delete(e) {
          return (this._hash++, super.delete(e));
        }
        clear() {
          return (this._hash++, super.clear());
        }
      }),
      (Nw = `Variable`),
      (Pw = `BI;`),
      (Fw = class {
        constructor() {
          (I(this, `name`, `builtIn`),
            I(this, `fontFamilies`, []),
            I(this, `byFamilyName`, new Map()),
            I(this, `assetByKey`, new Map()));
        }
        importFonts(e) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetByKey.clear());
          let t = [];
          for (let n of e) {
            if (!this.isValidBuiltInFont(n)) continue;
            let { properties: e } = n,
              r = e.font.fontFamily,
              i = this.createFontFamily(r, e.font.foundryName, e.font.fontVersion),
              a = e.font.openTypeData,
              o = e.font.variationAxes,
              s = Array.isArray(o),
              c = s ? `variable` : e.font.fontSubFamily || `regular`,
              l = Hf(n),
              u = {
                assetKey: n.key,
                family: i,
                selector: this.createSelector(r, c, e.font.fontVersion),
                variant: c,
                file: l,
                hasOpenTypeFeatures: Gf(a),
                variationAxes: Kf(o),
                category: e.font.fontCategory,
                weight: Yf(c),
                style: Zf(c),
                cssFamilyName: Uf(r, s),
              };
            (i.fonts.push(u), this.assetByKey.set(n.key, n), t.push(u));
          }
          for (let e of this.fontFamilies)
            e.fonts.sort((e, t) => {
              let n = Yf(e.variant),
                r = Yf(t.variant);
              return !n || !r ? 1 : n - r;
            });
          return t;
        }
        static parseVariant(e) {
          return { weight: Iw[Xf(e)], style: Zf(e) };
        }
        getFontBySelector(e) {
          let t = this.parseSelector(e);
          if (!t) return;
          let n = this.getFontFamilyByName(t.name);
          if (n) return n.fonts.find((t) => t.selector === e);
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e, t, n) {
          let r = this.byFamilyName.get(e);
          if (r && r.version === n) return r;
          let i = { source: this.name, name: e, fonts: [], foundryName: t, version: n };
          return (this.addFontFamily(i), i);
        }
        getOpenTypeFeatures(e) {
          B(e.assetKey, `Font must have an asset key`);
          let t = this.assetByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return Gf(t)
            ? t?.map((e) => {
                if (qf(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        isValidBuiltInFont(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font ||
            !e.properties.font.fontVersion ||
            !e.properties.font.fontFamily
            ? !1
            : `fontFamily` in e.properties.font;
        }
        createSelector(e, t, n) {
          return `${Pw}${e}/${t}/${n}`;
        }
        parseSelector(e) {
          if (!e.startsWith(Pw)) return null;
          let [t, n] = e.split(Pw);
          if (n === void 0) return null;
          let [r, i, a] = n.split(`/`);
          return !r || !i || !a
            ? null
            : {
                name: r,
                variant: i,
                source: this.name,
                isVariable: i.toLowerCase().includes(`variable`),
              };
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
      }),
      (Iw = {
        ultralight: 100,
        'ultralight-italic': 100,
        thin: 200,
        'thin-italic': 200,
        demi: 200,
        light: 300,
        'light-italic': 300,
        normal: 350,
        base: 400,
        regular: 400,
        classic: 400,
        'regular-slanted': 400,
        italic: 400,
        oblique: 400,
        dense: 400,
        brukt: 300,
        book: 400,
        'book-italic': 400,
        text: 400,
        'text-italic': 400,
        medium: 500,
        solid: 500,
        'medium-oblique': 500,
        'medium-italic': 500,
        mittel: 500,
        semibold: 600,
        'semibold-italic': 600,
        bold: 700,
        'bold-italic': 700,
        'bold-oblique': 700,
        fett: 700,
        ultrabold: 800,
        'ultrabold-italic': 800,
        extrabold: 800,
        'extrabold-italic': 800,
        black: 900,
        extralight: 100,
        'extralight-italic': 100,
        'black-italic': 900,
        'extra-italic': 900,
        'extra-italic-bold': 900,
        satt: 900,
        heavy: 900,
        'heavy-italic': 900,
        serif: 100,
        school: 200,
        expanded: 300,
        gothique: 500,
        'dense-light': 200,
        'dense-regular': 300,
        'dense-medium': 400,
        'dense-bold': 500,
        'solid-light': 600,
        'solid-regular': 700,
        'solid-medium': 800,
        'solid-bold': 900,
        53: 400,
        55: 600,
        'narrow-regular': 350,
        'narrow-black': 850,
        variable: 1e3,
        'variable-italic': 1e3,
      }),
      (Lw = Tu(`custom-font-source`)),
      (Rw = `CUSTOM;`),
      (zw = `CUSTOMV2;`),
      (Bw = class e {
        constructor() {
          (I(this, `name`, `custom`),
            I(this, `fontFamilies`, []),
            I(this, `byFamilyName`, new Map()),
            I(this, `assetsByKey`, new Map()));
        }
        deprecatedImportFonts(t) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
          let n = [];
          for (let r of t) {
            if (!this.isValidCustomFontAsset(r)) continue;
            let t = r.properties?.font.variationAxes,
              i = Array.isArray(t),
              a = op(r.properties),
              o = this.createFontFamily(a),
              s = r.properties?.font.openTypeData,
              c = i ? `variable` : this.inferVariantName(a),
              l = Hf(r),
              u = e.createLegacySelector(a),
              { family: d, variant: f } = sp(r.properties.font),
              p = e.createSelector(d, f),
              m = {
                assetKey: r.key,
                family: o,
                selector: u,
                variant: c,
                file: l,
                hasOpenTypeFeatures: Gf(s),
                variationAxes: Kf(t),
                owner: up(r),
                cssFamilyName: e.cssFontFamilyFromSelector(u),
                alternativeSelectors: {
                  [p]: { variant: f, cssFamilyName: e.cssFontFamilyFromSelector(p) },
                },
              };
            (o.fonts.push(m), this.assetsByKey.set(r.key, r), n.push(...o.fonts));
          }
          return n;
        }
        importFonts(t, n) {
          if (!n) return this.deprecatedImportFonts(t);
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
          let r = {};
          for (let n of t) {
            if (!this.isValidCustomFontAsset(n)) continue;
            let { family: t, variant: i, weight: a, style: o } = sp(n.properties.font),
              s = n.properties.font.variationAxes,
              c = Array.isArray(s),
              l = n.properties.font.openTypeData,
              u = Hf(n),
              d = up(n),
              f = op(n.properties),
              p = e.createLegacySelector(f),
              m = this.createFontFamily(t),
              h = e.createSelector(m.name, i),
              g = {
                assetKey: n.key,
                family: m,
                selector: h,
                variant: i,
                weight: a,
                style: o,
                file: u,
                hasOpenTypeFeatures: Gf(l),
                variationAxes: Kf(s),
                owner: d,
                alternativeSelectors: {
                  [p]: {
                    variant: c ? `variable` : this.inferVariantName(f),
                    cssFamilyName: e.cssFontFamilyFromSelector(p),
                  },
                },
                cssFamilyName: e.cssFontFamilyFromSelector(h),
              },
              _ = ap(m.fonts, g);
            if (_?.projectDuplicate) g.owner === `project` && ((m.fonts[_.index] = g), (r[h] = g));
            else if (_) {
              Lw.warn(`Duplicate font found for:`, g, `with existing font:`, _.existingFont);
              let e = _.existingFont,
                t = g.file?.endsWith(`.woff2`) ?? !1,
                n = e.file?.endsWith(`.woff2`) ?? !1;
              t && !n && ((m.fonts[_.index] = g), (r[h] = g));
            } else (m.fonts.push(g), (r[h] = g));
            this.assetsByKey.set(n.key, n);
          }
          for (let e of this.fontFamilies) e.fonts.length > 0 && lp(e);
          return Object.values(r);
        }
        static createSelector(e, t) {
          return `${zw}${e}${t ? ` ${t}` : ``}`;
        }
        static createLegacySelector(e) {
          return `${Rw}${e}`;
        }
        static cssFontFamilyFromSelector(e) {
          return (
            B(np(e), `Selector must be a custom font selector`),
            ip(e) ? e.slice(Rw.length) : e.slice(zw.length)
          );
        }
        isValidCustomFontAsset(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font
            ? !1
            : `fontFamily` in e.properties.font;
        }
        getOpenTypeFeatures(e) {
          B(e.assetKey, `Font must have an asset key`);
          let t = this.assetsByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return Gf(t)
            ? t?.map((e) => {
                if (qf(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        inferVariantName(e) {
          let t = [
              `thin`,
              `ultra light`,
              `extra light`,
              `light`,
              `normal`,
              `medium`,
              `semi bold`,
              `bold`,
              `extra bold`,
              `black`,
            ],
            n = [...t.map((e) => `${e} italic`), ...t],
            r = e.toLowerCase(),
            i = [...r.split(` `), ...r.split(`-`), ...r.split(`_`)],
            a = n.find((e) => i.includes(e) || i.includes(e.replace(/\s+/gu, ``)));
          return a ? a.replace(/^\w|\s\w/gu, (e) => e.toUpperCase()) : `Regular`;
        }
        createFontFamily(e) {
          let t = this.byFamilyName.get(e);
          if (t) return t;
          let n = { source: this.name, name: e, fonts: [] };
          return (this.addFontFamily(n), n);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) || null;
        }
      }),
      (Vw = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`]),
      (Hw = `FS;`),
      (Uw = {
        thin: 100,
        hairline: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        ultra: 800,
        black: 900,
        heavy: 900,
      }),
      (Ww = Object.keys(Uw)),
      (Gw = (() => RegExp(`^(?:${[...Ww, `italic`, `variable`].join(`|`)})`, `u`))()),
      (Kw = class e {
        constructor() {
          (I(this, `name`, `fontshare`),
            I(this, `fontFamilies`, []),
            I(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          let t = e.toLowerCase().split(` `),
            n = Ww.find((e) => t.includes(e)),
            r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`;
          return { weight: (n && Uw[n]) || 400, style: r === `italic` ? r : `normal` };
        }
        parseSelector(e) {
          if (!e.startsWith(Hw)) return null;
          let t = e.split(`-`);
          if (t.length !== 2) return null;
          let [n, r] = t;
          return !n || !r
            ? null
            : {
                name: n.replace(Hw, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`),
              };
        }
        static createSelector(e, t) {
          return `${Hw}${e}-${t.toLowerCase()}`;
        }
        static createMetadataSelector(e) {
          return `${Hw}${e}`;
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        async importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = await dp(`fontshare`),
            i = [];
          for (let a of t) {
            let t = a.font_styles
                .filter((e) => {
                  let t = e.name.toLowerCase();
                  return !(!Gw.exec(t) || t.split(` `).includes(`wide`));
                })
                .map((t) => ({
                  ...e.parseVariant(t.name),
                  selector: e.createSelector(a.name, t.name),
                  isVariable: t.is_variable,
                  fontshareVariantName: t.name,
                  file: t.file,
                })),
              o = e.createMetadataSelector(a.name),
              s = n?.[o],
              c = a.name,
              l = this.getFontFamilyByName(c);
            l || ((l = { name: c, fonts: [], source: this.name }), this.addFontFamily(l));
            let u = r[e.createMetadataSelector(a.name)];
            for (let e of t) {
              let {
                  variantBold: n,
                  variantBoldItalic: r,
                  variantItalic: o,
                  variantVariable: c,
                  variantVariableItalic: d,
                } = Qf(e, t),
                f = {
                  family: l,
                  variant: e.fontshareVariantName.toLowerCase(),
                  selector: e.selector,
                  selectorBold: n?.selector,
                  selectorBoldItalic: r?.selector,
                  selectorItalic: o?.selector,
                  selectorVariable: c?.selector,
                  selectorVariableItalic: d?.selector,
                  weight: e.weight,
                  style: e.style,
                  file: e.file,
                  category: hp(a.category),
                  hasOpenTypeFeatures: u,
                  variationAxes: e.isVariable ? s : void 0,
                  cssFamilyName: Uf(l.name, e.isVariable),
                };
              (l.fonts.push(f), i.push(f));
            }
          }
          return i;
        }
        async getOpenTypeFeatures(t) {
          return (await fp(`fontshare`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (qw = `Inter`),
      (Jw = `FR;`),
      (Yw = {
        Thin: 100,
        ExtraLight: 200,
        Light: 300,
        '': 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 800,
        Black: 900,
      }),
      (Xw = class e {
        constructor() {
          (I(this, `name`, `framer`),
            I(this, `fontFamilies`, []),
            I(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        static getDraftFontPropertiesBySelector(e) {
          if (!e.startsWith(Jw) && !e.startsWith(qw)) return null;
          let [t, n = ``] = e.split(`-`);
          if (!t) return null;
          let r = n.includes(`Italic`) ? `italic` : `normal`,
            i = n.replace(`Italic`, ``);
          return {
            cssFamilyName: t,
            style: r,
            weight: (i && Yw[i]) || 400,
            source: `framer`,
            variant: void 0,
            category: `sans-serif`,
          };
        }
        static createMetadataSelector(e) {
          return `${Jw}${e}`;
        }
        importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = [];
          return (
            t.forEach((t) => {
              let { uiFamilyName: i, ...a } = t,
                o = e.createMetadataSelector(t.uiFamilyName),
                s = n?.[o],
                c = this.getFontFamilyByName(i);
              c ||= this.addFontFamily(i);
              let l = t.selector === t.selectorVariable || t.selector === t.selectorVariableItalic,
                u = { ...a, family: c, variationAxes: l ? s : void 0 };
              (c.fonts.push(u), r.push(u));
            }),
            r
          );
        }
        async getOpenTypeFeatures(t) {
          return (await fp(`framer`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (Zw = `GF;`),
      (Qw = class e {
        constructor() {
          (I(this, `name`, `google`),
            I(this, `fontFamilies`, []),
            I(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          if (e === `regular`) return { style: `normal`, weight: 400 };
          let t = /(\d*)(normal|italic)?/u.exec(e);
          return t
            ? { weight: parseInt(t[1] || `400`), style: t[2] === `italic` ? `italic` : `normal` }
            : {};
        }
        parseSelector(e) {
          if (!e.startsWith(Zw)) return null;
          let t = e.includes(`-variable-`),
            n = t ? e.split(`-variable-`) : e.split(`-`);
          if (n.length !== 2) return null;
          let [r, i] = n;
          return !r || !i
            ? null
            : { name: r.replace(Zw, ``), variant: i, source: this.name, isVariable: t };
        }
        static createSelector(e, t, n) {
          return `${Zw}${e}-${n ? `variable-` : ``}${t}`;
        }
        static createMetadataSelector(e) {
          return `${Zw}${e}`;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        async importFonts(t, n, r) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let i = await dp(`google`),
            a = [],
            o = _p(t, (e) => e.family),
            s = _p(n, (e) => e.family);
          for (let t in o) {
            let n = o[t];
            if (!n) continue;
            let c = this.getFontFamilyByName(n.family);
            c ||= this.addFontFamily(n.family);
            let l = n.variants.map((r) => ({
                ...e.parseVariant(r),
                googleFontsVariantName: r,
                selector: e.createSelector(t, r, !1),
                isVariable: !1,
                file: n.files[r],
              })),
              u = s[t],
              d = u?.axes
                ? u.variants.map((n) => ({
                    ...e.parseVariant(n),
                    googleFontsVariantName: n,
                    selector: e.createSelector(t, n, !0),
                    isVariable: !0,
                    file: u.files[n],
                  }))
                : [],
              f = e.createMetadataSelector(n.family),
              p = r?.[f],
              m = [...l, ...d],
              h = m.filter(If),
              g = i[e.createMetadataSelector(t)];
            for (let e of m) {
              let { weight: t, style: r, selector: i, googleFontsVariantName: o } = e,
                {
                  variantBold: s,
                  variantItalic: l,
                  variantBoldItalic: u,
                  variantVariable: d,
                  variantVariableItalic: f,
                } = (If(e) ? Qf(e, h) : void 0) ?? {},
                m = {
                  family: c,
                  variant: o,
                  selector: i,
                  selectorBold: s?.selector,
                  selectorBoldItalic: u?.selector,
                  selectorItalic: l?.selector,
                  selectorVariable: d?.selector,
                  selectorVariableItalic: f?.selector,
                  weight: t,
                  style: r,
                  category: gp(n.category),
                  file: e.file?.replace(`http://`, `https://`),
                  variationAxes: e.isVariable ? p : void 0,
                  hasOpenTypeFeatures: g,
                  cssFamilyName: Uf(c.name, e.isVariable),
                };
              (c.fonts.push(m), a.push(m));
            }
          }
          return a;
        }
        async getOpenTypeFeatures(t) {
          return (await fp(`google`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      ($w = Ge(Wm(), 1)),
      (eT = 5e3),
      (tT = 3),
      (nT = class extends Error {
        constructor(e) {
          (super(e), (this.name = `FontLoadingError`));
        }
      }),
      (rT = new Map()),
      (iT = new Map()),
      (aT = (e, t) => vp(e, t)),
      (oT = {
        'FR;Inter': [
          { tag: `opsz`, minValue: 14, maxValue: 32, defaultValue: 14, name: `Optical size` },
          { tag: `wght`, minValue: 100, maxValue: 900, defaultValue: 400, name: `Weight` },
        ],
      }),
      (sT = class {
        constructor() {
          (I(this, `enabled`, !1),
            I(this, `bySelector`, new jw()),
            I(this, `loadedSelectors`, new Set()),
            I(this, `getGoogleFontsListPromise`),
            I(this, `getFontshareFontsListPromise`),
            I(this, `getBuiltInFontsListPromise`),
            I(
              this,
              `customFontsImportPromise`,
              new Promise((e) => {
                this.resolveCustomFontsImportPromise = e;
              })
            ),
            I(this, `local`),
            I(this, `google`),
            I(this, `fontshare`),
            I(this, `builtIn`),
            I(this, `framer`),
            I(this, `custom`),
            I(this, `bySelectorValuesCache`),
            I(this, `testing`, { addFont: this.addFont.bind(this) }),
            (this.local = new kw()),
            (this.google = new Qw()),
            (this.fontshare = new Kw()),
            (this.framer = new Xw()),
            (this.custom = new Bw()),
            (this.builtIn = new Fw()),
            this.importLocalFonts());
        }
        get hash() {
          return this.bySelector.hash;
        }
        addFont(e) {
          if ((this.bySelector.set(e.selector, e), e.alternativeSelectors))
            for (let t of Object.keys(e.alternativeSelectors)) this.bySelector.set(t, e);
        }
        getAvailableFonts() {
          if (
            !this.bySelectorValuesCache ||
            this.bySelectorValuesCache.hash !== this.bySelector.hash
          ) {
            let e = new Map();
            for (let t of this.bySelector.values()) e.set(t, !0);
            this.bySelectorValuesCache = {
              result: Array.from(e.keys()),
              hash: this.bySelector.hash,
            };
          }
          return this.bySelectorValuesCache.result;
        }
        importLocalFonts() {
          for (let e of this.local.importFonts()) (this.addFont(e), this.loadFont(e.selector));
        }
        async importGoogleFonts() {
          return (
            (this.getGoogleFontsListPromise ||= Promise.resolve().then(async () => {
              let { staticFonts: e, variableFonts: t } = await X.fetchGoogleFontsList(),
                n = await bp(`google`);
              for (let r of await this.google.importFonts(e, t, n)) this.addFont(r);
              return { staticFonts: e, variableFonts: t };
            })),
            this.getGoogleFontsListPromise
          );
        }
        async importFontshareFonts() {
          if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = X.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise,
              t = await bp(`fontshare`);
            for (let n of await this.fontshare.importFonts(e, t)) this.addFont(n);
          }
          return this.getFontshareFontsListPromise;
        }
        async importBuiltInFonts() {
          if (!this.getBuiltInFontsListPromise) {
            this.getBuiltInFontsListPromise = X.fetchBuiltInFontsList();
            let e = await this.getBuiltInFontsListPromise;
            for (let t of await this.builtIn.importFonts(e)) this.addFont(t);
          }
          return this.getBuiltInFontsListPromise;
        }
        importFramerFonts(e) {
          let t = bp(`framer`);
          this.framer.importFonts(e, t).forEach((e) => {
            this.addFont(e);
          });
        }
        importCustomFonts(e, t) {
          this.bySelector.forEach((e, t) => {
            np(t) && this.bySelector.delete(t);
          });
          let n = this.custom.importFonts(e, t);
          for (let e of n) this.addFont(e);
          this.resolveCustomFontsImportPromise();
        }
        getCustomFontsImportPromise() {
          return this.customFontsImportPromise;
        }
        getFontFamily(e) {
          return this[e.source].getFontFamilyByName(e.name);
        }
        getFontBySelector(e) {
          if (!e) return;
          let t;
          if (((t = this.bySelector.get(e)), t))
            return t.alternativeSelectors && e in t.alternativeSelectors
              ? { ...t, ...t.alternativeSelectors[e] }
              : t;
        }
        getDraftPropertiesBySelector(e) {
          let t = this.getFontBySelector(e);
          if (t)
            return {
              style: t.style,
              weight: t.weight,
              variant: t.variant,
              cssFamilyName: t.cssFamilyName,
              source: t.family.source,
              category: t.category,
            };
          let n = this.google.parseSelector(e);
          if (n) {
            let e = Qw.parseVariant(n.variant);
            if (If(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: n.variant,
                cssFamilyName: Wf(n, `google`),
                source: `google`,
                category: void 0,
              };
          }
          let r = this.fontshare.parseSelector(e);
          if (r) {
            let e = Kw.parseVariant(r.variant);
            if (If(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: r.variant,
                cssFamilyName: Wf(r, `fontshare`),
                source: `fontshare`,
                category: void 0,
              };
          }
          let i = this.builtIn.parseSelector(e);
          if (i) {
            let e = Fw.parseVariant(i.variant);
            if (If(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: i.variant,
                cssFamilyName: Wf(i, `builtIn`),
                source: `builtIn`,
                category: void 0,
              };
          }
          return Xw.getDraftFontPropertiesBySelector(e) || null;
        }
        isSelectorLoaded(e) {
          return this.loadedSelectors.has(e);
        }
        async loadFont(e) {
          let t = this.getFontBySelector(e);
          if (!t) return 2;
          if (this.loadedSelectors.has(e)) return 0;
          let n = t.cssFamilyName,
            r = t.family.source,
            i = tp(t);
          switch (r) {
            case `local`:
              return (this.loadedSelectors.add(e), 1);
            case `framer`:
              if ((H_() || (await yp(t.family.name, t.style, t.weight)), i)) {
                if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
                await aT({ family: n, url: t.file, weight: t.weight, style: t.style }, document);
              }
              return (this.loadedSelectors.add(e), 1);
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`:
              return t.file
                ? (await aT({ family: n, url: t.file, weight: t.weight, style: t.style }, document),
                  this.loadedSelectors.add(e),
                  1)
                : Promise.reject(`Unable to load font: ${e}`);
            default:
              V(r);
          }
        }
        async loadFontsFromSelectors(e) {
          if (!this.enabled) return [];
          let t = [];
          (e.some((e) => e.startsWith(Hw)) &&
            t.push(
              this.importFontshareFonts().catch((e) => {
                Hr(`Failed to load Fontshare fonts:`, e);
              })
            ),
            e.some((e) => e.startsWith(Zw)) &&
              t.push(
                this.importGoogleFonts().catch((e) => {
                  Hr(`Failed to load Google fonts:`, e);
                })
              ),
            e.some((e) => e.startsWith(Pw)) &&
              t.push(
                this.importBuiltInFonts().catch((e) => {
                  Hr(`Failed to load built-in fonts:`, e);
                })
              ),
            e.some(np) &&
              t.push(
                this.customFontsImportPromise.catch((e) => {
                  Hr(`Failed to load custom fonts:`, e);
                })
              ),
            t.length > 0 && (await Promise.all(t)));
          let n = [];
          for (let t of e) n.push(this.loadFont(t));
          return Promise.allSettled(n);
        }
        async loadFonts(e) {
          return {
            newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
              (e) => e.status === `fulfilled` && e.value === 1
            ).length,
          };
        }
        async loadMissingFonts(e, t) {
          let n = e.filter((e) => !cT.loadedSelectors.has(e));
          n.length !== 0 &&
            (await cT.loadWebFontsFromSelectors(n),
            n.every((e) => cT.loadedSelectors.has(e)) && t && t());
        }
        async loadWebFontsFromSelectors(e) {
          return this.loadFontsFromSelectors(e);
        }
        get defaultFont() {
          let e = this.getFontBySelector(`Inter`);
          return (B(e, `Can’t find Inter font`), e);
        }
      }),
      (cT = new sT()),
      (lT = (() => ({
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }))()),
      (uT = { opacity: 0 }),
      (dT = { opacity: 1 }),
      (fT = Fp(
        r.forwardRef(function (e, t) {
          let {
              background: n,
              children: i,
              alt: a,
              draggable: o,
              fitImageDimension: s,
              style: c,
              ...l
            } = e,
            u = { ...c },
            d = f(() => qa(n), [n]),
            [m, h] = p();
          r.useLayoutEffect(() => {
            if (!n?.src || !s || d) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                h({ width: e.naturalWidth, height: e.naturalHeight });
            }),
              (e.src = n.src));
          }, [n?.src, s, d]);
          let g = d ?? m;
          return (
            s && g && ((u[s] = `auto`), (u.aspectRatio = g.width / g.height)),
            n && delete u.background,
            D(Ja(e.as), {
              ...l,
              style: u,
              ref: t,
              draggable: o,
              children: [n && b(Ha, { image: n, alt: a, draggable: o }), i],
            })
          );
        })
      )),
      (mT = (() =>
        !F_() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`)()),
      (hT =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (gT = `{{ text-placeholder }}`),
      (_T = `rich-text-wrapper`),
      (vT = _a(
        _(function (e, t) {
          let {
              id: n,
              name: r,
              html: i,
              htmlFromDesign: a,
              text: o,
              textFromDesign: s,
              fonts: l = [],
              width: u,
              height: p,
              left: m,
              right: h,
              top: g,
              bottom: _,
              center: v,
              className: y,
              stylesPresetsClassName: x,
              visible: S = !0,
              opacity: C,
              rotation: w = 0,
              verticalAlignment: T = `top`,
              isEditable: D = !1,
              environment: ee = J.current,
              withExternalLayout: te = !1,
              positionSticky: O,
              positionStickyTop: ne,
              positionStickyRight: k,
              positionStickyBottom: re,
              positionStickyLeft: ie,
              __htmlStructure: A,
              __fromCanvasComponent: j = !1,
              _forwardedOverrideId: ae,
              _forwardedOverrides: oe,
              _usesDOMRect: M,
              children: se,
              ...ce
            } = e,
            le = ia(),
            ue = eo(e),
            de = E(null),
            N = t ?? de,
            { navigate: fe, getRoute: pe } = kt(),
            me = jt();
          (yn(e.preload ?? []), oo(e, N));
          let he = d(py),
            P = tl(),
            ge = o,
            ve = ae ?? n;
          if (ve && oe) {
            let e = oe[ve];
            typeof e == `string` && (ge = e);
          }
          let ye = ``;
          if (ge) {
            let e = Lp(ge);
            ye = A ? A.replace(gT, e) : `<p>${e}</p>`;
          } else if (i) ye = i;
          else if (s) {
            let e = Lp(s);
            ye = A ? A.replace(gT, e) : `<p>${e}</p>`;
          } else a && (ye = a);
          let be = El(),
            xe = f(() => (P || !pe || !me ? ye : Rp(ye, pe, me, be)), [ye, pe, me, be]);
          if (
            (c(() => {
              let e = N.current;
              if (e === null) return;
              function t(e) {
                let t = yl(e.target, N.current);
                e.metaKey ||
                  !fe ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (sl(fe, t, be) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [fe, be]),
            Vp(l, j, N),
            !S)
          )
            return null;
          let Se = D && ee() === J.canvas,
            F = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: Bp(T),
              opacity: Se ? 0 : C,
              flexShrink: 0,
            },
            Ce = J.hasRestrictions(),
            we = ta(e, le || 0, !1),
            Te = M && (u === `auto` || p === `auto`),
            Ee =
              e.transformTemplate || !we || !Ce || j || Te
                ? (e.transformTemplate ?? $a(v))
                : void 0;
          if (!te) {
            if (we && Ce && !Te) {
              let e = Hg.getNumber(w).toFixed(4);
              ((F.transform = `translate(${we.x}px, ${we.y}px) rotate(${e}deg)`),
                (F.width = we.width),
                (F.minWidth = we.width),
                (F.height = we.height));
            } else
              ((F.left = m),
                (F.right = h),
                (F.top = g),
                (F.bottom = _),
                (F.width = u),
                (F.height = p),
                (F.rotate = w));
            O
              ? (!P || he) &&
                ((F.position = `sticky`),
                (F.willChange = `transform`),
                (F.zIndex = 1),
                (F.top = ne),
                (F.right = k),
                (F.bottom = re),
                (F.left = ie))
              : P && (e.positionFixed || e.positionAbsolute) && (F.position = `absolute`);
          }
          return (
            Ls(e, F),
            Ps(e, F),
            Object.assign(F, e.style),
            b(_e.div, {
              id: n,
              ref: N,
              ...ce,
              style: F,
              layoutId: ue,
              'data-framer-name': r,
              'data-framer-component-type': `DeprecatedRichText`,
              'data-center': v,
              className: zs(y, x, _T),
              transformTemplate: Ee,
              dangerouslySetInnerHTML: { __html: xe },
            })
          );
        })
      )),
      (yT = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (bT = (() =>
        RegExp(
          `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
          `gu`
        ))()),
      (xT = _(function (e, t) {
        return b(`svg`, { ...e, ref: t, children: e.children });
      })),
      (ST = _e.create(xT)),
      (CT = _(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return b(ST, {
          ...r,
          ref: i,
          viewBox: t,
          children: b(_e.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (wT = []),
      (TT = `RichTextContainer`),
      (ET = _(function (e, t) {
        let {
            __fromCanvasComponent: n = !1,
            _forwardedOverrideId: r,
            _forwardedOverrides: i,
            _usesDOMRect: a,
            anchorLinkOffsetY: o,
            as: s,
            bottom: c,
            center: l,
            children: u,
            environment: p = J.current,
            fonts: m = wT,
            height: h,
            isEditable: g = !1,
            left: _,
            name: v,
            opacity: y,
            positionSticky: x,
            positionStickyBottom: S,
            positionStickyLeft: C,
            positionStickyRight: w,
            positionStickyTop: T,
            right: D,
            rotation: ee = 0,
            style: te,
            _initialStyle: O,
            stylesPresetsClassNames: ne,
            text: k,
            top: re,
            verticalAlignment: ie = `top`,
            visible: A = !0,
            width: j,
            withExternalLayout: ae = !1,
            viewBox: oe,
            viewBoxScale: M = 1,
            effect: se,
            ...ce
          } = e,
          le = ia(),
          ue = tl(),
          de = d(py),
          N = eo(e),
          fe = E(null),
          pe = t ?? fe;
        (oo(e, pe), Vp(m, n, pe));
        let me = Xp(se, pe),
          he = f(() => {
            if (u) return rm(u, ne, k, o, void 0, me.getTokenizer());
          }, [u, ne, k, o, me]);
        if (!A) return null;
        let P = { opacity: g && p() === J.canvas ? 0 : y },
          ge = Bp(ie);
        ge !== rv.justifyContent && (P.justifyContent = ge);
        let _e = {},
          ve = J.hasRestrictions(),
          ye = ta(e, le || 0, !1),
          be = a && (j === `auto` || h === `auto`),
          xe =
            e.transformTemplate || !ye || !ve || n || be ? (e.transformTemplate ?? $a(l)) : void 0;
        (ae ||
          (ye && ve && !be
            ? ((_e.x = ye.x + (R(te?.x) ? te.x : 0)),
              (_e.y = ye.y + (R(te?.y) ? te.y : 0)),
              (_e.left = 0),
              (_e.top = 0),
              (P.rotate = Hg.getNumber(ee)),
              (P.width = ye.width),
              (P.minWidth = ye.width),
              (P.height = ye.height))
            : ((P.left = _),
              (P.right = D),
              (P.top = re),
              (P.bottom = c),
              (P.width = j),
              (P.height = h),
              (P.rotate = ee)),
          x
            ? (!ue || de) &&
              ((P.position = `sticky`),
              (P.willChange = `transform`),
              (P.zIndex = 1),
              (P.top = T),
              (P.right = w),
              (P.bottom = S),
              (P.left = C))
            : ue && (e.positionFixed || e.positionAbsolute) && (P.position = `absolute`)),
          Ls(e, P),
          Ps(e, P),
          Object.assign(P, O, te, _e),
          N && (ce.layout = `preserve-aspect`));
        let Se = Ja(e.as),
          F = ce[`data-framer-name`] ?? v;
        return L(e.viewBox)
          ? e.as === void 0
            ? b(CT, {
                ...ce,
                ref: pe,
                style: P,
                layoutId: N,
                viewBox: oe,
                viewBoxScale: M,
                transformTemplate: xe,
                'data-framer-name': F,
                'data-framer-component-type': TT,
                children: he,
              })
            : b(Se, {
                ...ce,
                ref: pe,
                style: P,
                layoutId: N,
                transformTemplate: xe,
                'data-framer-name': F,
                'data-framer-component-type': TT,
                children: b(CT, {
                  viewBox: oe,
                  viewBoxScale: M,
                  style: { width: `100%`, height: `100%` },
                  children: he,
                }),
              })
          : b(Se, {
              ...ce,
              ref: pe,
              style: P,
              layoutId: N,
              transformTemplate: xe,
              'data-framer-name': F,
              'data-framer-component-type': TT,
              children: he,
            });
      })),
      (DT = _a(
        _(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (L(a)) {
            !r.stylesPresetsClassName &&
              z(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [L(t) ? `html` : `htmlFromDesign`]: a };
            return b(vT, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && L(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return b(ET, { ...r, ref: i, children: S(a) ? a : void 0 });
        })
      )),
      (OT = `framer/asset-reference,`),
      (kT = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = hm(t);
        return b(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: b(
            `image`,
            {
              width: r ? i : 1,
              height: r ? a : 1,
              href: c,
              preserveAspectRatio: `none`,
              transform: r ? void 0 : n,
              x: r ? 0 : void 0,
              y: r ? 0 : void 0,
            },
            c
          ),
        });
      }),
      (AT = M_()),
      (jT = class {
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
      }),
      (MT = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (NT = class {
        constructor() {
          (I(this, `entries`, new Map()), I(this, `vectorSetItems`, new Map()));
        }
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(xy(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = gm(e);
            (s &&
              (t && _m(s, n),
              (s.id = n),
              (o = Sm(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (!(!e || e === ``)) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          AT && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = MT),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          AT && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new jT(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !AT) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        AT && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${MT}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t) => e.push(t.svg)),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (PT = new NT()),
      (FT = (() => ({
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }))()),
      (IT = _(function (e, t) {
        let n = ia(),
          i = eo(e),
          a = r.useRef(null),
          o = t ?? a,
          s = ww();
        return (
          oo(e, a),
          b(RT, { ...e, innerRef: o, parentSize: n, layoutId: i, providedWindow: s })
        );
      })),
      (LT = 5e4),
      (RT = (() => {
        var e;
        return (
          (e = class extends by {
            constructor() {
              (super(...arguments),
                I(this, `container`, r.createRef()),
                I(this, `svgElement`, null),
                I(this, `setSVGElement`, (e) => {
                  ((this.svgElement = e), this.setLayerElement(e));
                }),
                I(this, `previouslyRenderedSVG`, ``),
                I(this, `unmountedSVG`, ``));
            }
            static frame(e) {
              return ta(e, e.parentSize || 0);
            }
            get frame() {
              return ta(this.props, this.props.parentSize || 0);
            }
            componentDidMount() {
              if (this.unmountedSVG) {
                let { svgContentId: e } = this.props,
                  t = e ? `svg${e}` : null;
                (PT.subscribe(this.unmountedSVG, !e, t),
                  (this.previouslyRenderedSVG = this.unmountedSVG));
              }
              this.props.svgContentId || Em(this.container, this.props);
            }
            componentWillUnmount() {
              (PT.unsubscribe(this.previouslyRenderedSVG),
                (this.unmountedSVG = this.previouslyRenderedSVG),
                (this.previouslyRenderedSVG = ``));
            }
            componentDidUpdate(e) {
              if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
              let { fill: t } = this.props;
              (uy.isImageObject(t) &&
                uy.isImageObject(e.fill) &&
                t.src !== e.fill.src &&
                fo(this.svgElement, `fill`, null, !1),
                Em(this.container, this.props));
            }
            collectLayout(e, t) {
              if (this.props.withExternalLayout) {
                ((t.width = `100%`), (t.height = `100%`), (t.aspectRatio = `inherit`));
                return;
              }
              let n = this.frame,
                {
                  rotation: r,
                  intrinsicWidth: i,
                  intrinsicHeight: a,
                  width: o,
                  height: s,
                } = this.props,
                c = Hg.getNumber(r);
              if (
                ((e.opacity = H(this.props.opacity) ? this.props.opacity : 1),
                J.hasRestrictions() && n)
              ) {
                (Object.assign(e, {
                  transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
                  width: `${n.width}px`,
                  height: `${n.height}px`,
                }),
                  Qi(this.props) && (e.position = `absolute`));
                let r = n.width / (i || 1),
                  o = n.height / (a || 1);
                t.transformOrigin = `top left`;
                let { zoom: s, target: l } = d_;
                if (l === J.export) {
                  let e = s > 1 ? s : 1;
                  ((t.transform = `scale(${r * e}, ${o * e})`), (t.zoom = 1 / e));
                } else t.transform = `scale(${r}, ${o})`;
                i && a && ((t.width = i), (t.height = a));
                return;
              }
              let { left: l, right: u, top: d, bottom: f } = this.props;
              (Object.assign(e, {
                left: l,
                right: u,
                top: d,
                bottom: f,
                width: o,
                height: s,
                rotate: c,
              }),
                Object.assign(t, { left: 0, top: 0, bottom: 0, right: 0, position: `absolute` }));
            }
            render() {
              let {
                id: e,
                visible: t,
                style: n,
                fill: r,
                svg: i,
                intrinsicHeight: a,
                intrinsicWidth: o,
                title: s,
                description: c,
                layoutId: l,
                className: u,
                variants: d,
                withExternalLayout: f,
                innerRef: p,
                svgContentId: m,
                height: h,
                opacity: g,
                width: _,
                requiresOverflowVisible: v,
                ...y
              } = this.props;
              if (!f && (!t || !e)) return null;
              let x = e ?? l ?? `svg`,
                S = this.frame,
                C = S || { width: o || 100, height: a || 100 },
                w = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
                T = {};
              (this.collectLayout(w, T),
                Ms(this.props, w),
                Ls(this.props, w),
                by.applyWillChange(this.props, w, !1));
              let E = null;
              if (typeof r == `string` || q.isColorObject(r)) {
                let e = q.isColorObject(r) ? r.initialValue || q.toRgbString(r) : r;
                ((w.fill = e), (w.color = e));
              } else if (Oy.isLinearGradient(r)) {
                let t = r,
                  n = `${encodeURI(e || ``)}g${Oy.hash(t)}`;
                w.fill = `url(#${n})`;
                let { stops: i, x1: a, x2: o, y1: s, y2: c } = sm(t, x);
                E = b(`svg`, {
                  ref: this.setSVGElement,
                  width: `100%`,
                  height: `100%`,
                  style: { position: `absolute` },
                  role: `presentation`,
                  children: b(`linearGradient`, {
                    id: n,
                    x1: a,
                    x2: o,
                    y1: s,
                    y2: c,
                    children: i.map((e, t) =>
                      b(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                    ),
                  }),
                });
              } else if (Ay.isRadialGradient(r)) {
                let t = r,
                  n = `${encodeURI(e || ``)}g${Ay.hash(t)}`;
                w.fill = `url(#${n})`;
                let i = cm(t, x);
                E = b(`svg`, {
                  ref: this.setSVGElement,
                  width: `100%`,
                  height: `100%`,
                  style: { position: `absolute` },
                  role: `presentation`,
                  children: b(`radialGradient`, {
                    id: n,
                    cy: t.centerAnchorY,
                    cx: t.centerAnchorX,
                    r: t.widthFactor,
                    children: i.stops.map((e, t) =>
                      b(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                    ),
                  }),
                });
              } else if (uy.isImageObject(r)) {
                let e = pm(r, C, x);
                e &&
                  ((w.fill = `url(#${e.id})`),
                  (E = b(`svg`, {
                    ref: this.setSVGElement,
                    width: `100%`,
                    height: `100%`,
                    style: { position: `absolute` },
                    role: `presentation`,
                    children: b(`defs`, { children: b(kT, { ...e }) }),
                  })));
              }
              let ee = { 'data-framer-component-type': `SVG` },
                te = !S;
              te && Object.assign(ee, Xa(this.props.center));
              let ne =
                  !v &&
                  !E &&
                  !w.fill &&
                  !w.background &&
                  !w.backgroundImage &&
                  i.length < LT &&
                  !Cm(i) &&
                  !wm(i),
                k = null;
              if (ne)
                ((w.backgroundSize = `100% 100%`),
                  (w.backgroundImage = lt(i)),
                  PT.unsubscribe(this.previouslyRenderedSVG),
                  (this.previouslyRenderedSVG = ``));
              else {
                let e = m ? `svg${m}` : null,
                  t = PT.subscribe(i, !m, e, v);
                (PT.unsubscribe(this.previouslyRenderedSVG),
                  (this.previouslyRenderedSVG = i),
                  Tm(w) && (w.overflow = `hidden`),
                  (k = D(O, {
                    children: [
                      E,
                      b(
                        `div`,
                        {
                          className: `svgContainer`,
                          style: T,
                          ref: this.container,
                          dangerouslySetInnerHTML: { __html: t },
                        },
                        uy.isImageObject(r) ? r.src : ``
                      ),
                    ],
                  })));
              }
              let re = Ja(this.props.as),
                { href: ie, target: A, rel: j, onClick: ae, onTap: oe } = this.props,
                M = s || c;
              return b(re, {
                ...ee,
                ...y,
                layoutId: l,
                transformTemplate: te ? $a(this.props.center) : void 0,
                id: e,
                ref: p,
                style: w,
                className: u,
                variants: d,
                tabIndex: this.props.tabIndex,
                role: M ? `img` : void 0,
                'aria-label': s,
                'aria-description': c,
                'aria-hidden': M ? void 0 : `true`,
                onTap: oe,
                onClick: ae,
                href: ie,
                target: A,
                rel: j,
                children: k,
              });
            }
          }),
          I(e, `supportsConstraints`, !0),
          I(e, `defaultSVGProps`, {
            left: void 0,
            right: void 0,
            top: void 0,
            bottom: void 0,
            style: void 0,
            _constraints: { enabled: !0, aspectRatio: null },
            parentSize: 0,
            rotation: 0,
            visible: !0,
            svg: ``,
            shadows: [],
          }),
          I(e, `defaultProps`, { ...by.defaultProps, ...e.defaultSVGProps }),
          e
        );
      })()),
      (zT = _a(IT)),
      (BT = 1e3),
      (VT = `explicitInter`),
      (Ke.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = M(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
export {
  of as $,
  zs as A,
  Ta as B,
  DT as C,
  Zs as Ct,
  wa as D,
  Om as E,
  Fb as F,
  HT as G,
  wh as H,
  K_ as I,
  Zm as J,
  pa as K,
  km as L,
  Lb as M,
  Pb as N,
  Yv as O,
  Ib as P,
  vw as Q,
  Am as R,
  VS as S,
  cx as St,
  wx as T,
  hn as Tt,
  Ar as U,
  _f as V,
  dt as W,
  Fx as X,
  xr as Y,
  Br as Z,
  iS as _,
  Lt as _t,
  D_ as a,
  Qc as at,
  J as b,
  q_ as bt,
  Sb as c,
  Go as ct,
  Wx as d,
  _n as dt,
  PT as et,
  lh as f,
  gn as ft,
  wu as g,
  hf as gt,
  Mn as h,
  pf as ht,
  Cx as i,
  jt as it,
  cT as j,
  Y_ as k,
  qx as l,
  tl as lt,
  aS as m,
  df as mt,
  Tc as n,
  Zd as nt,
  yw as o,
  lf as ot,
  ah as p,
  Vr as pt,
  mt as q,
  dx as r,
  Ec as rt,
  Li as s,
  tf as st,
  bl as t,
  _r as tt,
  fT as u,
  yf as ut,
  kb as v,
  kt as vt,
  zT as w,
  Rm as wt,
  ul as x,
  Pf as xt,
  pw as y,
  Nf as yt,
  Dm as z,
};
