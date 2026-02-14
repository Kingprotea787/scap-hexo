import { t as e } from './rolldown-runtime.D3cOTcPh.mjs';
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
  m as O,
  o as ee,
  s as k,
  u as te,
  v as A,
  w as ne,
  y as re,
  z as j,
} from './react.BQ4DvozU.mjs';
import {
  $ as M,
  A as ie,
  B as ae,
  C as N,
  D as oe,
  E as se,
  F as ce,
  G as le,
  H as ue,
  I as de,
  J as fe,
  K as P,
  L as pe,
  M as me,
  O as F,
  P as he,
  Q as ge,
  S as _e,
  T as I,
  U as ve,
  V as ye,
  W as be,
  X as L,
  Y as xe,
  Z as Se,
  _ as Ce,
  a as we,
  b as Te,
  c as Ee,
  d as De,
  et as Oe,
  f as ke,
  g as Ae,
  h as je,
  i as Me,
  j as Ne,
  k as Pe,
  l as Fe,
  m as Ie,
  n as Le,
  nt as Re,
  o as ze,
  p as Be,
  q as Ve,
  r as He,
  s as Ue,
  tt as We,
  u as Ge,
  v as Ke,
  w as qe,
  x as Je,
  y as Ye,
  z as Xe,
} from './motion.CySVqtnK.mjs';
function Ze(e) {
  return typeof e == `function`;
}
function Qe(e) {
  return typeof e == `boolean`;
}
function R(e) {
  return typeof e == `string`;
}
function z(e) {
  return Number.isFinite(e);
}
function $e(e) {
  return Array.isArray(e);
}
function B(e) {
  return typeof e == `object` && !!e && !$e(e);
}
function et(e) {
  for (let t in e) return !1;
  return !0;
}
function tt(e) {
  return e === void 0;
}
function nt(e) {
  return e === null;
}
function rt(e) {
  return e == null;
}
function it(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function at(e) {
  return B(e) && Ze(e.return);
}
function ot(e) {
  return B(e) && Ze(e.then);
}
function st(e) {
  return e instanceof Promise;
}
function ct(e) {
  return `url('data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`)}')`;
}
function lt(e, t) {
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
function ut() {
  if (!oh) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = import(n)
      .then((t) => (uh.set(e, t), t))
      .catch((t) => {
        throw (uh.delete(e), console.warn(`Failed to import lazy module: ${n}`, t), t);
      });
    (r.catch(ah), uh.set(e, r));
  }
}
function dt(e) {
  return typeof e == `object` && !!e && !S(e) && fh in e;
}
function ft(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function pt(e, t = `default`, n) {
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !uh.has(n)) return;
      let e = uh.get(n);
      st(e) ? s(() => e) : (i = ft(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = ft(e, t);
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
      if ((o(), n !== void 0 && dh !== void 0 && dh.add(n), !i)) throw s(e);
      return b(i, { ref: r, ...t });
    });
  return (
    (u.preload = () => (o(), s(e))),
    (u.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: l })),
    u
  );
}
function mt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function ht(e) {
  return e === null || !(mh in e) ? !1 : typeof e.equals == `function`;
}
function gt(e, t) {
  return e === t ? !0 : e !== e && t !== t;
}
function _t(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!gt(e[r], t[r])) return !1;
  return !0;
}
function vt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!wt(e[r], t[r], !0)) return !1;
  return !0;
}
function yt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!gt(r, t.get(n))) return !1;
  return !0;
}
function bt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!wt(r, t.get(n), !0)) return !1;
  return !0;
}
function xt(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function St(e, t) {
  let n = ph(e);
  if (n.length !== ph(t).length) return !1;
  for (let r of n)
    if (!mt(t, r) || (!(r === `_owner` && mt(e, `$$typeof`) && e.$$typeof) && !gt(e[r], t[r])))
      return !1;
  return !0;
}
function Ct(e, t) {
  let n = ph(e);
  if (n.length !== ph(t).length) return !1;
  for (let r of n)
    if (!mt(t, r) || (!(r === `_owner` && mt(e, `$$typeof`) && e.$$typeof) && !wt(e[r], t[r], !0)))
      return !1;
  return !0;
}
function wt(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? vt(e, t) : _t(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? bt(e, t) : yt(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return xt(e, t);
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
      ? ht(e) && ht(t)
        ? e.equals(t)
        : n
          ? Ct(e, t)
          : St(e, t)
      : !1;
}
function Tt(e, t, n = !0) {
  try {
    return wt(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function Et(e) {
  return r.useCallback((t) => e[t], [e]);
}
function Dt({ api: e, children: t }) {
  return b(hh.Provider, { value: e, children: t });
}
function Ot() {
  return r.useContext(hh);
}
function kt({ routes: e, children: t }) {
  let n = Et(e),
    r = f(() => ({ getRoute: n }), [n]);
  return b(hh.Provider, { value: r, children: t });
}
function At() {
  let e = Ot(),
    t = d(gh),
    n = t?.routeId ?? e.currentRouteId,
    r = t?.routeId ? t.pathVariables : e.currentPathVariables,
    i = n ? e.getRoute?.(n) : void 0;
  return f(() => {
    if (!(!n || !i)) return { ...i, id: n, pathVariables: r };
  }, [n, r, i]);
}
function jt() {
  let e = At();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Mt(e) {
  let t = At(),
    n = r.useRef(t);
  Tt(n.current, t) || !t || ((n.current = t), e(t));
}
function Nt(e) {
  let t = Ot();
  if (e) return t.getRoute?.(e);
}
function Pt(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Ft(e) {
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
function It(e, t) {
  let n = At(),
    i = Nt(t) ?? n;
  return r.useMemo(() => (i ? Pt(i, e) : e), [e, i]);
}
function V(e, ...t) {
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
function H(e, t) {
  throw t || Error(e ? `Unexpected value: ${e}` : `Application entered invalid state`);
}
function Lt(e) {
  return Object(e) !== e;
}
function Rt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === Th
  );
}
function zt(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Bt(e) {
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
function Vt(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Bt(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Ht(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function Ut(e) {
  return Eh.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function Wt(e) {
  let t = new DataView(e),
    n = ``;
  for (let r = 0; r < e.byteLength; r++) n += String.fromCharCode(t.getUint8(r));
  return qt(n);
}
function Gt(e) {
  let t = Kt(e),
    n = new ArrayBuffer(t.length),
    r = new DataView(n);
  for (let e = 0; e < n.byteLength; e++) r.setUint8(e, t.charCodeAt(e));
  return n;
}
function Kt(e) {
  e.length % 4 == 0 && (e = e.replace(/==?$/, ``));
  let t = ``,
    n = 0,
    r = 0;
  for (let i = 0; i < e.length; i++)
    ((n <<= 6),
      (n |= Dh.indexOf(e[i])),
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
function qt(e) {
  let t = ``;
  for (let n = 0; n < e.length; n += 3) {
    let r = [void 0, void 0, void 0, void 0];
    ((r[0] = e.charCodeAt(n) >> 2),
      (r[1] = (e.charCodeAt(n) & 3) << 4),
      e.length > n + 1 &&
        ((r[1] |= e.charCodeAt(n + 1) >> 4), (r[2] = (e.charCodeAt(n + 1) & 15) << 2)),
      e.length > n + 2 && ((r[2] |= e.charCodeAt(n + 2) >> 6), (r[3] = e.charCodeAt(n + 2) & 63)));
    for (let e = 0; e < r.length; e++) r[e] === void 0 ? (t += `=`) : (t += Dh[r[e]]);
  }
  return t;
}
function Jt(e, t) {
  return Yt(JSON.parse(e), t);
}
function Yt(e, t) {
  if (typeof e == `number`) return a(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let n = e,
    r = Array(n.length),
    i = null;
  function a(e, o = !1) {
    if (e === Oh) return;
    if (e === Ah) return NaN;
    if (e === jh) return 1 / 0;
    if (e === Mh) return -1 / 0;
    if (e === Nh) return -0;
    if (o || typeof e != `number`) throw Error(`Invalid input`);
    if (e in r) return r[e];
    let s = n[e];
    if (!s || typeof s != `object`) r[e] = s;
    else if (Array.isArray(s))
      if (typeof s[0] == `string`) {
        let o = s[0],
          c = t && Object.hasOwn(t, o) ? t[o] : void 0;
        if (c) {
          let t = s[1];
          if ((typeof t != `number` && (t = n.push(s[1]) - 1), (i ??= new Set()), i.has(t)))
            throw Error(`Invalid circular reference`);
          return (i.add(t), (r[e] = c(a(t))), i.delete(t), r[e]);
        }
        switch (o) {
          case `Date`:
            r[e] = new Date(s[1]);
            break;
          case `Set`:
            let t = new Set();
            r[e] = t;
            for (let e = 1; e < s.length; e += 1) t.add(a(s[e]));
            break;
          case `Map`:
            let i = new Map();
            r[e] = i;
            for (let e = 1; e < s.length; e += 2) i.set(a(s[e]), a(s[e + 1]));
            break;
          case `RegExp`:
            r[e] = new RegExp(s[1], s[2]);
            break;
          case `Object`:
            r[e] = Object(s[1]);
            break;
          case `BigInt`:
            r[e] = BigInt(s[1]);
            break;
          case `null`:
            let c = Object.create(null);
            r[e] = c;
            for (let e = 1; e < s.length; e += 2) c[s[e]] = a(s[e + 1]);
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
            if (n[s[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = globalThis[o],
              i = new t(a(s[1]));
            r[e] = s[2] === void 0 ? i : i.subarray(s[2], s[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = s[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            r[e] = Gt(t);
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
            let t = o.slice(9);
            r[e] = Temporal[t].from(s[1]);
            break;
          }
          case `URL`:
            r[e] = new URL(s[1]);
            break;
          case `URLSearchParams`:
            r[e] = new URLSearchParams(s[1]);
            break;
          default:
            throw Error(`Unknown type ${o}`);
        }
      } else {
        let t = Array(s.length);
        r[e] = t;
        for (let e = 0; e < s.length; e += 1) {
          let n = s[e];
          n !== kh && (t[e] = a(n));
        }
      }
    else {
      let t = {};
      for (let n in ((r[e] = t), s)) {
        if (n === `__proto__`) throw Error('Cannot parse an object with a `__proto__` property');
        let e = s[n];
        t[n] = a(e);
      }
    }
    return r[e];
  }
  return a(0);
}
function Xt(e, t) {
  let n = [],
    r = new Map(),
    i = [];
  if (t) for (let e of Object.getOwnPropertyNames(t)) i.push({ key: e, fn: t[e] });
  let a = [],
    o = 0;
  function s(t) {
    if (t === void 0) return Oh;
    if (Number.isNaN(t)) return Ah;
    if (t === 1 / 0) return jh;
    if (t === -1 / 0) return Mh;
    if (t === 0 && 1 / t < 0) return Nh;
    if (r.has(t)) return r.get(t);
    let c = o++;
    r.set(t, c);
    for (let { key: e, fn: r } of i) {
      let i = r(t);
      if (i) return ((n[c] = `["${e}",${s(i)}]`), c);
    }
    if (typeof t == `function`) throw new wh(`Cannot stringify a function`, a, t, e);
    let l = ``;
    if (Lt(t)) l = Zt(t);
    else {
      let n = zt(t);
      switch (n) {
        case `Number`:
        case `String`:
        case `Boolean`:
          l = `["Object",${Zt(t)}]`;
          break;
        case `BigInt`:
          l = `["BigInt",${t}]`;
          break;
        case `Date`:
          l = `["Date","${isNaN(t.getDate()) ? `` : t.toISOString()}"]`;
          break;
        case `URL`:
          l = `["URL",${Vt(t.toString())}]`;
          break;
        case `URLSearchParams`:
          l = `["URLSearchParams",${Vt(t.toString())}]`;
          break;
        case `RegExp`:
          let { source: r, flags: i } = t;
          l = i ? `["RegExp",${Vt(r)},"${i}"]` : `["RegExp",${Vt(r)}]`;
          break;
        case `Array`:
          l = `[`;
          for (let e = 0; e < t.length; e += 1)
            (e > 0 && (l += `,`), e in t ? (a.push(`[${e}]`), (l += s(t[e])), a.pop()) : (l += kh));
          l += `]`;
          break;
        case `Set`:
          l = `["Set"`;
          for (let e of t) l += `,${s(e)}`;
          l += `]`;
          break;
        case `Map`:
          l = `["Map"`;
          for (let [e, n] of t)
            (a.push(`.get(${Lt(e) ? Zt(e) : `...`})`), (l += `,${s(e)},${s(n)}`), a.pop());
          l += `]`;
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
          let e = t;
          l = `["` + n + `",` + s(e.buffer);
          let r = t.byteOffset,
            i = r + t.byteLength;
          if (r > 0 || i !== e.buffer.byteLength) {
            let e = /(\d+)/.exec(n)[1] / 8;
            l += `,${r / e},${i / e}`;
          }
          l += `]`;
          break;
        }
        case `ArrayBuffer`:
          l = `["ArrayBuffer","${Wt(t)}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          l = `["${n}",${Vt(t.toString())}]`;
          break;
        default:
          if (!Rt(t)) throw new wh(`Cannot stringify arbitrary non-POJOs`, a, t, e);
          if (Ht(t).length > 0) throw new wh(`Cannot stringify POJOs with symbolic keys`, a, t, e);
          if (Object.getPrototypeOf(t) === null) {
            for (let e in ((l = `["null"`), t))
              (a.push(Ut(e)), (l += `,${Vt(e)},${s(t[e])}`), a.pop());
            l += `]`;
          } else {
            l = `{`;
            let e = !1;
            for (let n in t)
              (e && (l += `,`), (e = !0), a.push(Ut(n)), (l += `${Vt(n)}:${s(t[n])}`), a.pop());
            l += `}`;
          }
      }
    }
    return ((n[c] = l), c);
  }
  let c = s(e);
  return c < 0 ? `${c}` : `[${n.join(`,`)}]`;
}
function Zt(e) {
  let t = typeof e;
  return t === `string`
    ? Vt(e)
    : e instanceof String
      ? Vt(e.toString())
      : e === void 0
        ? Oh.toString()
        : e === 0 && 1 / e < 0
          ? Nh.toString()
          : t === `bigint`
            ? `["BigInt","${e}"]`
            : String(e);
}
function Qt(e, t, n = `lazy`) {
  switch ((q.__framer_events?.push([e, t, n]), e)) {
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
function $t() {
  return { [Fh.QueryCache]: new Map(), [Fh.CollectionUtilsCache]: new Map() };
}
function en() {
  if (!oh) return;
  if (Ih !== void 0) return Ih;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      Ih = Jt(e.text) ?? $t();
    } catch (e) {
      ((Ih = $t()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      lh(() => {
        (e?.remove(), (e = null));
      }),
      Ih
    );
  }
}
function tn(e, t) {
  if (
    (console.warn(
      lt(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`
      )
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    Qt(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function nn(e, t) {
  let n = en();
  return n ? n[e].has(t) : !1;
}
function rn(e, t) {
  let n = en();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function an(e) {
  return e?.id ?? xh;
}
function on(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function sn(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (Bh.has(n)) return Bh.get(n);
    let r = new Hh(n, t);
    return (Bh.set(n, r), r);
  };
}
function cn({ children: e, collectionUtils: t }) {
  let n = f(() => ({ get: sn(t) }), [t]);
  return b(Vh.Provider, { value: n, children: e });
}
function ln() {
  return d(Vh);
}
function un() {
  for (let e of Gh) e();
  Gh.clear();
}
function dn(e) {
  return new Promise((t) => {
    if ((Gh.add(t), document.hidden)) {
      un();
      return;
    }
    (document.addEventListener(`visibilitychange`, un),
      document.addEventListener(`pagehide`, un),
      je.read(() => {
        pn(e).then(() => {
          (Gh.delete(t), !e?.signal?.aborted && t());
        });
      }));
  });
}
function fn(e) {
  return new Promise((t) => {
    (setTimeout(t, 100),
      je.read(
        () => {
          pn(e).then(t);
        },
        !1,
        !0
      ));
  });
}
function pn(e) {
  let t = e?.priority;
  return Uh || Wh
    ? t === `background`
      ? new Promise((e) => {
          setTimeout(e, 1);
        })
      : Uh
        ? q.scheduler.yield(e).catch(ah)
        : q.scheduler.postTask(() => {}, e).catch(ah)
    : t === `user-blocking`
      ? Promise.resolve()
      : new Promise((e) => {
          setTimeout(e, t === `background` ? 1 : 0);
        });
}
function mn(e) {
  let { continueAfter: t, ensureContinueBeforeUnload: n, ...r } = e ?? {};
  return n ? dn(r) : t === `paint` ? fn(r) : pn(r);
}
function hn() {
  let e = ln(),
    { autobahnNavigation: t } = bh(),
    { getRoute: n } = Ot();
  return o(
    (r, i, a = !0, o = !0) => {
      if (!r || !n) return;
      let s = n(r),
        { pathVariables: c, locale: l } = i;
      return _n(s, { routeId: r, pathVariables: c, locale: l, collectionUtils: e }, a, o && t);
    },
    [n, e, t]
  );
}
function gn(e, t = !0) {
  let n = hn();
  c(() => {
    if (!(!t || !Kh)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function _n(e, t, n = !0, r = !0) {
  if (!Kh || !e) return;
  let i = e.page;
  if (!(!i || !dt(i))) {
    n && (await mn());
    try {
      let e = await i.preload();
      r && t && e && (await vn(e, t));
    } catch {}
  }
}
async function vn(e, t) {
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
function yn(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = bn(e),
    [r, i] = bn(t),
    a = xn(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function bn(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function xn(e, t) {
  if (e === t || ((e = `/` + Sn(e)), (t = `/` + Sn(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = Yh(e, 1 + s);
    if (n !== Yh(t, 1 + s)) break;
    n === Jh && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (Yh(t, 1 + s) === Jh) return Zh(t, 1 + s + 1);
      if (s === 0) return Zh(t, 1 + s);
    } else r > a && (Yh(e, 1 + s) === Jh ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || Yh(e, s) === Jh) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${Zh(t, 1 + o)}`;
}
function Sn(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = Yh(e, o);
    else if (eg(a)) break;
    else a = Jh;
    if (eg(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || Yh(t, t.length - 1) !== qh || Yh(t, t.length - 2) !== qh) {
            if (t.length > 2) {
              let e = Xh(t, $h);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = Zh(t, 0, e)), (n = t.length - 1 - Xh(t, $h))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          Qh && ((t += t.length > 0 ? `${$h}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${$h}${Zh(e, r + 1, o)}`) : (t = Zh(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === qh && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function Cn(e, t) {
  return e.replace(ng, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function wn(e) {
  let t = s === void 0 ? `` : s.location.search;
  return t ? Tn(t, e) : e;
}
function Tn(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== rg && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function En(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(ng)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !R(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = st(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = st(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = st(e) ? await e : e;
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
async function Dn({
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
      u = await En(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (t.slug && (u.path = `/` + t.slug + u.path), o && u.path && (u.path = wn(u.path)), u);
}
function On(e) {
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
function kn({ children: e, value: t }) {
  return b(ig.Provider, { value: t, children: e });
}
function An() {
  return r.useContext(ig);
}
function jn(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function Mn(e) {
  let t = ag,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < og; ) ((n = e.next(t)), r.push(n.value), (t += ag));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - ag }
  );
}
function Nn(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function Pn(e) {
  let { innerWidth: t, innerHeight: n } = s,
    [r, i] = Nn(e.x),
    [a, o] = Nn(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function Fn(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function In(e) {
  return e ? cg[e] : void 0;
}
function Ln(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (Rn(t)) {
    let { easing: e, duration: n } = Mn(
      oe({ keyframes: [0, 1], ...zn(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = In(n?.mask?.type),
    o = Fn(n, `start`, e, a),
    s = Fn({ ...lg, mask: n.mask }, `end`, e, a);
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
function Rn(e) {
  return e.type === `spring`;
}
function zn(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function Bn({ exit: e = dg, enter: t }) {
  let n = document.createElement(`style`);
  n.id = ug;
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
    (r += Ln(`exit`, e)),
    (r += Ln(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function Vn() {
  lh(() => {
    je.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(ug);
      e && document.head.removeChild(e);
    });
  });
}
function Hn() {
  return !!document.startViewTransition;
}
function Un(e) {
  return new Promise((t) => {
    je.render(() => {
      (performance.mark(`framer-vt-style`), Bn(e), t());
    });
  });
}
async function Wn(e, t, n) {
  if (!Hn()) {
    e();
    return;
  }
  if ((await Un(t), n?.aborted)) return;
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
      .catch(fg),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), Vn());
      })
      .catch(fg),
    r
  );
}
function Gn() {
  let e = An(),
    t = E(void 0);
  return (
    c(() => {
      t.current &&= (t.current(), void 0);
    }),
    o(
      (n, r, i, a) => {
        let o = jn(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return Wn(
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
function Kn(e, t) {
  lh(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function qn(e, t, n, r = ne) {
  r(() => {
    let t = async (e) => (await mn({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function Jn(e) {
  let t = E(void 0);
  return (
    qn(
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
async function Yn(
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
  let f = nr(t, {
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
    return await Qn({ routeId: e, hash: a, pathVariables: o, localeId: s }, f, u);
  } catch {}
}
function Xn(e) {
  return B(e) && R(e.routeId);
}
function Zn(e, t, n = !1) {
  (performance.mark(`framer-history-replace`),
    (n ? s.history.__proto__.replaceState : s.history.replaceState).call(s.history, e, ``, t));
}
async function Qn(e, t, n = !1) {
  if ((performance.mark(`framer-history-push`), Kn(t, s.location.href), !n)) {
    s.history.pushState(e, ``, t);
    return;
  }
  let r = !1,
    i;
  (hg &&
    ((i = () => {
      if (((r = !0), gg)) return;
      let e = `Popstate called after intercept(). Please report this to the Framer team.`;
      (console.error(e), Qt(`published_site_load_recoverable_error`, { message: e }));
    }),
    s.addEventListener(`popstate`, i, { once: !0 })),
    gg && hg
      ? s.history.__proto__.pushState.call(s.history, e, ``, t)
      : s.history.pushState(e, ``, t),
    hg &&
      queueMicrotask(() => {
        r || ((hg = !1), s.removeEventListener(`popstate`, i));
      }));
}
function $n({ disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: r }) {
  ne(() => {
    e ||
      (performance.mark(`framer-history-set-initial-state`),
      Zn({ routeId: t, pathVariables: n, localeId: r }, void 0, !0));
  }, []);
}
function er(e, t) {
  let n = Gn(),
    r = Jn(`framer-route-change`),
    i = E(void 0),
    a = o(
      async ({ state: a }) => {
        if (
          (s.navigation?.transition && s.navigation?.transition?.navigationType !== `traverse`) ||
          !B(a)
        )
          return;
        let { routeId: o, hash: c, pathVariables: l, localeId: u } = a;
        if (!R(o)) return;
        let d = r({ popstate: !0 }),
          f = Ft();
        d.promise.finally(f);
        let p = await n(e.current, o, () => {
            t(
              o,
              R(u) ? u : void 0,
              R(c) ? c : void 0,
              s.location.pathname + s.location.search + s.location.hash,
              B(l) ? l : void 0,
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
        (mg(), Kn(s.location.href));
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
      _g && s.navigation.addEventListener(`navigate`, l),
      () => {
        (s.removeEventListener(`popstate`, a),
          _g && s.navigation.removeEventListener(`navigate`, l));
      }
    ),
    [a, l]
  );
}
function tr(e, t, n) {
  let r = Pt(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(ng, (e, t) => i[t] ?? e);
}
function nr(
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
  let p = tr(i, e, o);
  if (u) return p ?? ``;
  let m = t ?? `/`;
  (n && f && (m = n[f] ?? m), r && (m = m.replace(ng, (e, t) => String(r[t] || e))));
  let h = (f ? e?.pathLocalized?.[f] : void 0) ?? e?.path ?? `/`;
  a && (h = h.replace(ng, (e, t) => String(a[t] || e)));
  let g = m === h && p;
  if (c)
    if (tg.has(m) && s !== void 0) {
      let e = On(d);
      h = yn(s.location.pathname, e + h);
    } else h = yn(m, h);
  return ((l || g) && (h = wn(h)), p && (h = `${h}#${p}`), h);
}
async function rr(e, t, n) {
  if (!e.path || !t) return !1;
  let r = `${n.slug ? `/${n.slug}` : ``}${Cn(e.path, t)}`;
  return (await fetch(r, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((s.location.href = s.location.origin + r), !0)
    : !1;
}
function ir() {
  let e = ln();
  return o((t) => ar({ ...t, collectionUtils: e }), [e]);
}
async function ar(e) {
  let t = await Dn(e);
  if (t) {
    try {
      localStorage.preferredLocale = e.nextLocale.code;
    } catch {}
    try {
      if (!R(t.path)) throw Error(`Expected result.path to be a string`);
      if (t.isMissingInLocale && (await rr(e.route, t.pathVariables, e.nextLocale))) return;
    } catch {}
    return t;
  }
}
function or(e, t) {
  try {
    let n = s.history.state;
    if (!Xn(n)) return;
    let r = n?.paginationInfo === void 0 || n.paginationInfo[e] === void 0,
      i = { ...n.paginationInfo, [e]: t };
    Zn({ ...n, paginationInfo: i }, void 0, r);
  } catch {}
}
function sr() {
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
      if (!_g) {
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
function cr(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`; ) t++;
  for (; n > t && e[n - 1] === `-`; ) n--;
  return e.slice(t, n);
}
function lr(e) {
  return cr(e.trim().toLowerCase().replace(vg, `-`));
}
function ur(e, t) {
  let n = p(() => ({ inputs: t, result: e() }))[0],
    r = E(!0),
    i = E(n),
    a =
      r.current || (t && i.current.inputs && Tt(t, i.current.inputs, !1))
        ? i.current
        : { inputs: t, result: e() };
  return (
    c(() => {
      ((r.current = !1), (i.current = a));
    }, [a]),
    a.result
  );
}
function dr() {
  return r.useContext(Sg);
}
function fr() {
  return dr().activeLocale?.code ?? `en-US`;
}
function pr({ children: e }) {
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
    a = ur(() => ({ urlSearchParams: new URLSearchParams(r), triggerUpdate: i }), [r, i]);
  return b(wg.Provider, { value: a, children: e });
}
function mr() {
  if (!Tg) return;
  ((Dg = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  Tg.forEach((n) => t.addEventListener(n, Eg, e));
}
function hr() {
  return (
    c(() => {
      if (!Dg || !Tg) return;
      let e = { capture: !0 },
        t = document.body;
      (Tg.forEach((n) => t.removeEventListener(n, Eg, e)),
        (Tg = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function gr(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function _r(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function vr() {
  ((qg = new Kg()), qg.render.markStart());
}
function yr() {
  (h(() => {
    qg?.useInsertionEffects.markRouterStart();
  }, []),
    ne(() => {
      qg?.useLayoutEffects.markRouterStart();
    }, []),
    c(() => {
      qg?.useEffects.markRouterStart();
    }, []));
}
function br() {
  (h(() => {
    (qg?.render.markEnd(), qg?.useInsertionEffects.markStart());
  }, []),
    ne(() => {
      if ((qg?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        Jg = !0;
        return;
      }
      je.read(() => {
        (qg?.browserRendering.requestAnimationFrame.markStart(),
          qg?.unattributedHydrationOverhead.measure());
      });
    }, []),
    c(() => {
      (qg?.useEffects.markStart(),
        qg?.browserRendering.hasStarted ||
          (qg?.mutationEffects.measure(), qg?.useEffects.markAreSynchronous()));
    }, []));
}
function xr() {
  (h(() => {
    qg?.useInsertionEffects.markEnd();
  }, []),
    ne(() => {
      (qg?.useLayoutEffects.markEnd(),
        !(Jg || document.visibilityState !== `visible`) &&
          je.read(() => {
            (qg?.browserRendering.requestAnimationFrame.markEnd(),
              mn().then(() => {
                qg?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    c(() => {
      qg?.useEffects.markEnd();
    }, []));
}
function Sr() {
  return (br(), null);
}
function Cr() {
  return (xr(), null);
}
function wr(e, t) {
  let n = { style: t, 'data-framer-root': `` };
  return r.isValidElement(e) ? r.cloneElement(e, n) : b(e, { ...n });
}
function Tr() {
  return Qg;
}
function Er(e) {
  if ($g?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      V(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: kr(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          V(t, `localizedPath must be defined`);
          let i = kr(t),
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
    $g = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: $g.pathRoutes,
    paths: $g.paths,
    pathRoutesLocalized: $g.pathRoutesLocalized,
    pathsLocalized: $g.pathsLocalized,
  };
}
function Dr(e, t, n = !0, r = Tr()) {
  return Or(e, t, r, n);
}
function Or(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = Er(e),
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
      let e = Ar(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = Ar(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = Ar(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = Ar(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function kr(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function Ar(e, t) {
  let n = [],
    r = jr(t).replace(ng, (e, t) => (n.push(t), `([^/]+)`)),
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
function jr(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Mr() {
  if (`PerformanceServerTiming` in s) {
    let e = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
    if (!e || e.length === 0) return new URLSearchParams();
    let t = e.find((e) => e.name === `abtests`);
    return t ? new URLSearchParams(t.description) : new URLSearchParams();
  }
  return new URLSearchParams();
}
function Nr(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n;
  if (!e[i]) return;
  let { abTestingParentId: a, ...o } = r,
    s = e[i].elements || r.elements ? { ...e[i].elements, ...r.elements } : void 0;
  e[i] = { ...o, elements: s, abTestingVariantId: n, abTestId: t };
}
function Pr(e, t) {
  for (let [n, r] of t) Nr(e, n, r);
}
function Fr(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function Ir(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    { abTestingParentId: r, ...i } = e[t],
    a = e[n]?.elements || i.elements ? { ...e[n]?.elements, ...i.elements } : void 0;
  e[n] = { ...i, elements: a, abTestingVariantId: t };
}
function Lr(e, t) {
  if (s === void 0) return t;
  let n = t;
  if (t) {
    Ir(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (Pr(e, Mr()), Fr(e), n);
}
function Rr(e) {
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
function zr(e, ...t) {
  e_.has(e) || (e_.add(e), console.warn(e, ...t));
}
function Br(e, t, n) {
  zr(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function Vr(e) {
  return (
    typeof e == `object` &&
    !!e &&
    r_ in e &&
    e[r_] instanceof Function &&
    i_ in e &&
    e[i_] instanceof Function
  );
}
function Hr(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = n_(r);
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
function Ur(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Wr(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Gr(e) {
  return Math.round(e * 2) / 2;
}
function Kr(e, t) {
  return { x: e, y: t };
}
function qr(e, t, n, r = !1) {
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
function Jr(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Yr(e) {
  let t = Xr(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function Xr(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function Zr(e, t, n) {
  return (
    (s_.rgb_r = e / 255),
    (s_.rgb_g = t / 255),
    (s_.rgb_b = n / 255),
    s_.rgbToHsluv(),
    { h: s_.hsluv_h, s: s_.hsluv_s, l: s_.hsluv_l }
  );
}
function Qr(e, t, n, r = 1) {
  return (
    (s_.hsluv_h = e),
    (s_.hsluv_s = t),
    (s_.hsluv_l = n),
    s_.hsluvToRgb(),
    { r: s_.rgb_r * 255, g: s_.rgb_g * 255, b: s_.rgb_b * 255, a: r }
  );
}
function $r(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function ei(e, t, n) {
  return {
    r: Jr(e) ? si(e, 255) * 255 : 0,
    g: Jr(t) ? si(t, 255) * 255 : 0,
    b: Jr(n) ? si(n, 255) * 255 : 0,
  };
}
function ti(e, t, n, r) {
  let i = [
    ui(Math.round(e).toString(16)),
    ui(Math.round(t).toString(16)),
    ui(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function ni(e, t, n) {
  let r,
    i,
    a = si(e, 255),
    o = si(t, 255),
    s = si(n, 255),
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
function ri(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function ii(e, t, n) {
  let r, i, a;
  if (((e = si(e, 360)), (t = si(t * 100, 100)), (n = si(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = ri(s, o, e + 1 / 3)), (i = ri(s, o, e)), (a = ri(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function ai(e, t, n) {
  ((e = si(e, 255)), (t = si(t, 255)), (n = si(n, 255)));
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
function oi(e, t, n) {
  ((e = si(e, 360) * 6), (t = si(t * 100, 100)), (n = si(n * 100, 100)));
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
function si(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    ci(e) && (e = `100%`);
    let t = li(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function ci(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function li(e) {
  return typeof e == `string` && e.includes(`%`);
}
function ui(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function di(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = o_[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = c_.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = c_.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = c_.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: Yr(r[2] ?? ``), l: Yr(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = c_.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: Yr(r[2] ?? ``),
              l: Yr(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = c_.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: Yr(r[2] ?? ``), v: Yr(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = c_.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: Yr(r[2] ?? ``),
                  v: Yr(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = c_.hex8.exec(t))
                ? {
                    r: fi(r[1] ?? ``),
                    g: fi(r[2] ?? ``),
                    b: fi(r[3] ?? ``),
                    a: pi(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = c_.hex6.exec(t))
                  ? {
                      r: fi(r[1] ?? ``),
                      g: fi(r[2] ?? ``),
                      b: fi(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = c_.hex4.exec(t))
                    ? {
                        r: fi(`${r[1]}${r[1]}`),
                        g: fi(`${r[2]}${r[2]}`),
                        b: fi(`${r[3]}${r[3]}`),
                        a: pi(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = c_.hex3.exec(t))
                      ? {
                          r: fi(`${r[1]}${r[1]}`),
                          g: fi(`${r[2]}${r[2]}`),
                          b: fi(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function fi(e) {
  return parseInt(e, 16);
}
function pi(e) {
  return fi(e) / 255;
}
function mi(e) {
  let t = l_.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function hi(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function gi({ r: e, g: t, b: n, a: r }) {
  return { r: hi(e), g: hi(t), b: hi(n), a: r };
}
function _i(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function vi({ r: e, g: t, b: n, a: r }) {
  return { r: _i(e), g: _i(t), b: _i(n), a: r };
}
function yi({ r: e, g: t, b: n, a: r }) {
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
function bi(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function xi({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = bi(e),
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
function Si(e) {
  return p_(f_(e));
}
function Ci(e) {
  return d_(u_(e));
}
function wi(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = Di({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = Ti(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? Di(e)
              : Oi(e)),
    i
  );
}
function Ti(e) {
  let t = di(e);
  if (t) return t.format === `hsl` ? Oi(t) : t.format === `hsv` ? Ei(t) : Di(t);
}
function Ei(e) {
  let t = oi(e.h, e.s, e.v);
  return { ...ni(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : ki(e.a) };
}
function Di(e) {
  let t = ei(e.r, e.g, e.b);
  return { ...ni(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : ki(e.a) };
}
function Oi(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = Jr(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Jr(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = Xr(e.s)),
    (r = Jr(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = Xr(e.l)),
    (i = ii(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function ki(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function Ai({ children: e }) {
  if (d(D_).top) return b(k, { children: e });
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
            V(!!c, `duplicatedId must be defined`);
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
          { layoutId: m, value: h } = ji(p, (t.current.count[o][p] ?? -1) + 1, r);
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
  return b(D_.Provider, { value: i, children: e });
}
function ji(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function Mi({ enabled: e = !0, ...t }) {
  let n = d(D_),
    r = f(() => ({ ...n, enabled: e }), [e]);
  return b(D_.Provider, { ...t, value: r });
}
function Ni(e) {
  let t = E(null);
  return (t.current === null && (t.current = e()), t.current);
}
function Pi(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Fi(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return D(`div`, {
    style: k_,
    children: [
      b(`div`, { className: `text`, style: j_, children: r }),
      i && b(`div`, { className: `text`, style: M_, children: i }),
    ],
  });
}
function Fi(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function U(e) {
  return Number.isFinite(e);
}
function Ii(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function Li(e) {
  return typeof e != `string` && typeof e != `number`;
}
function Ri(e) {
  return e != null && typeof e != `boolean` && !Ii(e);
}
function zi(e) {
  return e * (Math.PI / 180);
}
function Bi(e) {
  return tt(e) ? !1 : e === 2 || e === 5;
}
function Vi(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function Hi(e, t, n, r) {
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
      if (!r) return Ui(e);
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
function Ui(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      H(e, `unknown constraint key`);
  }
}
function Wi(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(Hi(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(Hi(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function Gi(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(Hi(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(Hi(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function Ki(e, t, n, r, i) {
  let a = Gi(U(e) ? e : L_, n, r, i),
    o = Wi(U(t) ? t : R_, n, r, i);
  return (
    U(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (U(n.left) && U(n.right)
        ? (o = a / n.aspectRatio)
        : (U(n.top) && U(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function qi(e, t) {
  return !U(e) || !U(t) ? null : e + t;
}
function Ji(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function Yi(e) {
  return !e._constraints || Ji(e) ? !1 : e._constraints.enabled;
}
function Xi(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    U(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    U(n) && U(r) ? { width: n, height: r } : null
  );
}
function Zi(e) {
  let t = Xi(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return U(n) && U(r) ? { x: n, y: r, ...t } : null;
}
function Qi(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Yi(e) || r) return Zi(e);
  let i = $i(e),
    a = ea(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return I_.toRect(i, o, null, n, null);
}
function $i(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = F_.quickfix({
      left: U(t),
      right: U(n),
      top: U(r),
      bottom: U(i),
      widthType: Vi(c),
      heightType: Vi(l),
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
function ea(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function ta() {
  return r.useContext(z_).parentSize;
}
function na(e) {
  return typeof e == `object`;
}
function ra(e) {
  return na(e) ? e.width : e;
}
function ia(e) {
  return na(e) ? e.height : e;
}
function aa(e, t) {
  return b(B_, { parentSize: t, children: e });
}
function oa(e) {
  return Qi(e, ta(), !0);
}
function sa({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function ca() {
  return g === void 0 ? void 0 : g;
}
function la() {
  let e = ca();
  return e ? H_.test(e.platform) : !1;
}
function ua() {
  let e = ca();
  return e
    ? U_.test(e.platform)
      ? !0
      : W_.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function da() {
  return la() || ua();
}
function fa() {
  let e = ca();
  return e ? G_.test(e.userAgent) : !1;
}
function pa() {
  let e = ca();
  return e ? K_.test(e.userAgent) && q_.test(e.vendor) && !fa() : !1;
}
function ma() {
  let e = ca();
  return e ? J_.test(e.userAgent) && Y_.test(e.vendor) : !1;
}
function ha() {
  let e = ca();
  return e ? X_.test(e.userAgent) : !1;
}
function ga() {
  return typeof document == `object`;
}
function _a() {
  let e = ca();
  return e ? Z_.test(e.userAgent) : !1;
}
function va() {
  return !1;
}
function ya() {
  let e = ca();
  return e && Q_.test(e.userAgent) ? `tablet` : e && $_.test(e.userAgent) ? `phone` : `desktop`;
}
function ba() {
  return ya() === `desktop`;
}
function xa(e) {
  return da() ? e.metaKey : e.ctrlKey;
}
function Sa(e, t, n = tv) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!nv) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) nv = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = nv;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function Ca() {
  if (lv !== void 0) return lv;
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
  return (e.parentNode && e.parentNode.removeChild(e), (lv = t), t);
}
function wa() {
  dv || ((dv = !0), !Ca() && document.body.classList.add(uv));
}
function Ta(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? hv.variable(e) : e === `` ? `""` : e;
}
function Ea(e, t) {
  return hv.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function Da() {
  return Y.current() === Y.preview ? cy : sy;
}
function Oa(e) {
  return ov(e, Da, `framer-lib-combinedCSSRules`);
}
function ka(e) {
  return B(e) || Ze(e);
}
function Aa(e) {
  return !!e && ly in e && e[ly] === !0;
}
function ja(e) {
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
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return Qe(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return tt(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return $e(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return $e(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = B(e.defaultValue) ? e.defaultValue : {};
        return (B(e.controls) && Ma(t, e.controls), t);
      }
      case `array`:
        return $e(e.defaultValue) ? e.defaultValue : void 0;
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
function Ma(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!tt(i) || Aa(r)) continue;
    let a = ja(r);
    tt(a) || (e[n] = a);
  }
}
function Na(e) {
  if (B(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function Pa(e, t) {
  ka(e) && Ma(Na(e), t);
}
function Fa(e, t) {
  (Object.assign(e, { propertyControls: t }), Pa(e, t));
}
function Ia(e) {
  return e.propertyControls;
}
function La() {
  let e = Y.current();
  return e === Y.canvas || e === Y.export;
}
function Ra() {
  let [e] = p(() => La());
  return e;
}
function za(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function Ba(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of by) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function Va(e, t) {
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
function Ha(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < xy) continue;
    let n = Va(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${Va(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function Ua(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of yy) {
    let n = Va(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function Wa(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = Ua(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: Ha(n, t, Ba(t.pixelWidth, t.pixelHeight)) };
}
function Ga() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: ct(_y.imagePlaceholderSvg),
  };
}
function Ka(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function qa(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function Ja(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...vy,
    objectPosition: qa(e.positionX, e.positionY),
    objectFit: Ka(e.fit),
  };
}
function Ya(e) {
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
function Xa({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = _y.useImageSource(e, t, n),
    s = Ja(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = Ya(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : Wa(e.nodeFixedSize, e, o);
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
function Za({ image: e, containerSize: t, nodeId: n }) {
  let i = r.useRef(null),
    a = _y.useImageElement(e, t, n),
    o = Ja(e);
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
    b(`div`, { ref: i, style: { display: `contents`, ...vy } })
  );
}
function Qa({ nodeId: e, image: t, containerSize: n }) {
  let i = r.useRef(null),
    a = _y.useImageSource(t, n, e);
  return (
    r.useLayoutEffect(() => {
      let n = i.current;
      if (n === null) return;
      let r = Ja(t);
      _y.renderOptimizedCanvasImage(n, a, r, e);
    }, [e, t, a]),
    b(`div`, { ref: i, style: { display: `contents`, ...vy } })
  );
}
function $a({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (R(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = z(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = Gr(e * (t.pixelWidth / 2)),
        s = _y.useImageSource(t, n);
      ((r = {
        ...Sy,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: qa(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        Y.current() === Y.canvas
          ? _y.canRenderOptimizedCanvasImage(_y.useImageSource(t))
            ? b(Qa, { image: t, ...n })
            : b(Za, { image: t, ...n })
          : b(Xa, { image: t, avoidAsyncDecoding: Y.current() === Y.export, ...n });
  let o = a ? Sy : (r ?? { ...Sy, ...Ga() });
  return i
    ? b(_e.div, { layoutId: e, style: o, 'data-framer-background-image-wrapper': !0, children: a })
    : b(`div`, { style: o, 'data-framer-background-image-wrapper': !0, children: a });
}
function eo(e, t, n = !0) {
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
function to(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...vy,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), b(_e.div, { style: n }))
    : (eo(e, n, !1), b(_e.div, { 'data-frame-border': !0, style: n, layoutId: t }));
}
function no(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function ro(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !wy.isImageObject(t)) return;
  let r = null;
  if (((r = R(n) ? { alt: ``, src: n } : n_.get(t, null)), wy.isImageObject(r))) return no(r, e);
}
function io(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function ao(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? _e[e] : _e.div;
}
function oo(e, t) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` ? !0 : void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` ? !0 : void 0));
}
function so(e) {
  let t = {};
  return (!e || !Ty || Y.current() !== Y.canvas || oo(t, e), t);
}
function co(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function lo(e, t) {
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
function uo(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function fo(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: r, layoutIdKey: i, duplicatedFrom: a, __fromCodeComponentNode: o = !1, drag: s } = e,
    { getLayoutId: c, enabled: l } = d(D_);
  return f(() => {
    if (!l) return e.layoutId;
    let u = t || e.layoutId;
    if (!u && (s || !i || o)) return;
    let d = u || c({ id: i, name: r, duplicatedFrom: a });
    if (d) return n ? `${d}-${n}` : d;
  }, [l]);
}
function po() {
  let [e, t] = r.useState(0);
  return r.useCallback(() => t((e) => e + 1), []);
}
function mo(e) {
  let t = po();
  c(() => {
    let n = e?.current;
    if (n)
      return (
        ky?.observeElementWithCallback(e.current, t),
        () => {
          ky?.unobserve(n);
        }
      );
  }, [e, t]);
}
function ho(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(Ay)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(go)
    .map(_o);
}
function go(e) {
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
function _o(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(go);
  return t ? _o(t) : e;
}
function vo(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = d(Dy),
    l = Y.current() === Y.canvas;
  Ey(() => {
    !l ||
      c ||
      s ||
      (t.current && i && a && o && _y.queueMeasureRequest(co(i), t.current, n(t.current)));
  });
}
function yo(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && _y.queueMeasureRequest(co(t.id), t, ho(t));
}
function bo(e) {
  e.willChange = `transform`;
  let t = Y.current() === Y.canvas;
  Ny && t && (e.translateZ = jy);
}
function xo(e) {
  ((e.willChange = `transform`), So(e, !0));
}
function So(e, t) {
  let n = Y.current() === Y.canvas;
  if (!Ny || !n) return;
  let r = (R(e.transform) && e.transform) || ``;
  t ? r.includes(My) || (e.transform = r + My) : (e.transform = r.replace(My, ``));
}
function Co(e, t, n, r = !0) {
  if (!e) return;
  let i = uy(e.style),
    a = n || i[t],
    o = () => {
      wo(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function wo(e) {
  return R(e) || z(e) || nt(e);
}
function To(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function Eo(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  To(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function Do(e, t) {
  let n = [e, t];
  return Ly.test(e) ? e : Eo(1e3, Ry, n, () => Iy.multiplyAlpha(e, t));
}
function Oo(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: Do(e.value, t) }))
  );
}
function ko(e, t) {
  let n = 0;
  return (
    Oo(e, t).forEach((e) => {
      n ^= Fy(e.value) ^ e.position;
    }),
    n
  );
}
function Ao(e) {
  return e && zy.every((t) => t in e);
}
function jo(e) {
  return e && By.every((t) => t in e);
}
function Mo({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || g_(t)
      ? (n.backgroundColor = t)
      : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e))
    : e &&
      ((e = n_.get(e, null)),
      typeof e == `string` || g_(e)
        ? (n.background = e)
        : Hy.isLinearGradient(e)
          ? (n.background = Hy.toCSS(e))
          : Wy.isRadialGradient(e)
            ? (n.background = Wy.toCSS(e))
            : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e)));
}
function W(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function No(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function Po(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function Fo(e) {
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
    Te(n)
      ? (t.cornerShape = ie(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    W(e, `size`, t),
    W(e, `width`, t),
    W(e, `height`, t),
    W(e, `minWidth`, t),
    W(e, `minHeight`, t),
    W(e, `top`, t),
    W(e, `right`, t),
    W(e, `bottom`, t),
    W(e, `left`, t),
    W(e, `position`, t),
    W(e, `overflow`, t),
    W(e, `opacity`, t),
    (!e._border || !e._border.borderWidth) && W(e, `border`, t),
    W(e, `borderRadius`, t),
    W(e, `radius`, t, `borderRadius`),
    W(e, `color`, t),
    W(e, `shadow`, t, `boxShadow`),
    W(e, `x`, t),
    W(e, `y`, t),
    W(e, `z`, t),
    W(e, `rotate`, t),
    W(e, `rotateX`, t),
    W(e, `rotateY`, t),
    W(e, `rotateZ`, t),
    W(e, `scale`, t),
    W(e, `scaleX`, t),
    W(e, `scaleY`, t),
    W(e, `skew`, t),
    W(e, `skewX`, t),
    W(e, `skewY`, t),
    W(e, `originX`, t),
    W(e, `originY`, t),
    W(e, `originZ`, t),
    Mo(e, t),
    t
  );
}
function Io(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof uy(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function Lo(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (Ky.has(t)) return `pointer`;
}
function Ro(e) {
  return zo(e) ? !0 : e.style ? !!zo(e.style) : !1;
}
function zo(e) {
  return qy in e && (e[qy] === `scroll` || e[qy] === `auto`);
}
function Bo(e) {
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
    m = I(e.minWidth),
    h = I(e.minHeight),
    g = I(e.maxWidth),
    _ = I(e.maxHeight);
  return {
    top: I(n),
    left: I(t),
    bottom: I(r),
    right: I(i),
    width: I(a),
    height: I(o),
    size: I(l),
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
function Vo(e) {
  let t = d(Dy),
    { style: n, _initialStyle: i, __fromCanvasComponent: a, size: o } = e,
    s = Bo(e),
    c = oa(s),
    l = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: Y.current() === Y.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let u = !Io(e) && !e.__fromCanvasComponent && !Ro(e),
    f = e.style ? !(`pointerEvents` in e.style) : !0;
  u && f && (l.pointerEvents = `none`);
  let p = r.Children.count(e.children) > 0 &&
      r.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    m = Fo(e);
  (o === void 0 && !a && (No(m) || (l.width = Jy.width), Po(m) || (l.height = Jy.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight));
  let h = {};
  (Yi(s) &&
    c &&
    !sa(e) &&
    (h = { left: c.x, top: c.y, width: c.width, height: c.height, right: void 0, bottom: void 0 }),
    Object.assign(l, p, i, m, h, n),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    Py.applyWillChange(e, l, !0));
  let g = l;
  l.transform || (g = { x: 0, y: 0, ...l });
  let _ = La();
  return (
    e.positionSticky
      ? (!_ || _y.isOnPageCanvas || t) &&
        ((g.position = `sticky`),
        (g.willChange = `transform`),
        (g.zIndex = 1),
        (g.top = e.positionStickyTop),
        (g.right = e.positionStickyRight),
        (g.bottom = e.positionStickyBottom),
        (g.left = e.positionStickyLeft))
      : _ &&
        (e.positionFixed
          ? (g.position = _y.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (g.position = `absolute`)),
    `rotate` in g && g.rotate === void 0 && delete g.rotate,
    [g, c]
  );
}
function Ho(e) {
  let t = {};
  for (let n in e)
    (Je(n) || fy(n)) && !Yy.has(n)
      ? (t[n] = uy(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof uy(e)[n] != `boolean` && !e.transition && (t.transition = uy(e)[n]));
  return t;
}
function Uo(e) {
  return `data-framer-name` in e;
}
function Wo(e, t, n, r) {
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
function Go(e) {
  return b(_e.div, { layoutId: Qy, style: tb, children: e.children });
}
function Ko(e, t) {
  Ze(e) ? e(t) : qo(e) && (e.current = t);
}
function qo(e) {
  return B(e) && `current` in e;
}
function Jo() {
  let e = Ni(() => new Set()),
    t = Ni(() => new Map());
  return Ni(() => (n, r) => ({
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
function Yo(e) {
  let t = E(null),
    n = Jo();
  return Ni(() => (qo(e) ? n(e) : Ze(e) ? n(t, e) : n(t)));
}
function Xo(e, t, n) {
  let r = E(),
    i = E();
  (ur(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function Zo(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new nb({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Qo(e, t, n) {
  let r = Ni(() => `${n.rootMargin}`),
    i = d(rb),
    { enabled: a, root: o, rootMargin: s, threshold: c } = n;
  Xo(
    e,
    (e) => {
      if (a && e !== null) return Zo(i, r, e, o, t, s, c);
    },
    [a, t, o, s, c]
  );
}
function $o(e, t, n) {
  let i = r.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: a, animateOnce: o, threshold: s, rootMargin: c = `0px 0px 0px 0px` } = n;
  ib(
    e,
    r.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: r } = i.current,
          a = ts(e, s?.y ?? 0);
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
    { threshold: ab, rootMargin: c, enabled: a ?? !0 }
  );
}
function es(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, q.innerHeight);
}
function ts({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && es(t, e) >= r;
}
function ns() {
  return d(lb);
}
function rs() {
  return new Map();
}
function is() {
  return Ni(rs);
}
function as(e, t = []) {
  let { register: n, deregister: r } = d(ub);
  c(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function os(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function ss(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (U(t.originX) && (r.originX = t.originX),
      U(t.originY) && (r.originY = t.originY),
      U(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (U(n.originX) && (r.originX = n.originX),
      U(n.originY) && (r.originY = n.originY),
      U(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function cs(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function ls(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return gb.PushLeft;
    case `left`:
      return gb.PushRight;
    case `bottom`:
      return gb.PushUp;
    case `top`:
      return gb.PushDown;
  }
}
function us(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return gb.OverlayLeft;
    case `left`:
      return gb.OverlayRight;
    case `bottom`:
      return gb.OverlayUp;
    case `top`:
      return gb.OverlayDown;
  }
}
function ds(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return gb.FlipLeft;
    case `left`:
      return gb.FlipRight;
    case `bottom`:
      return gb.FlipUp;
    case `top`:
      return gb.FlipDown;
  }
}
function fs(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return ms(e, t.transition, t.component);
    case `removeOverlay`:
      return hs(e);
    case `add`:
      return gs(e, t.key, t.transition, t.component);
    case `remove`:
      return ys(e);
    case `update`:
      return ps(e, t.key, t.component);
    case `back`:
      return _s(e);
    case `forward`:
      return vs(e);
    default:
      return;
  }
}
function ps(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function ms(e, t, n) {
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
function hs(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function gs(e, t, n, r) {
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
    c = i?.key && n.withMagicMotion ? ws(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = Ss(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = bs(e, t, c),
    p = Cs(l, u, e.history, e.containerIndex, e.transitionForContainer);
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
function _s(e) {
  let t = { ...e.containers },
    n = ys(e);
  if (n) return ((n.containers = t), n);
}
function vs(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = gs(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function ys(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (V(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = xs(e, r, n),
    u = Cs(i, a, e.history, e.containerIndex, e.transitionForContainer);
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
function bs(e, t, n) {
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
function xs(e, t, n) {
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
function Ss(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function Cs(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = Ts(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function ws(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1
        ? !0
        : !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function Ts(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return Es(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return Es(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return Es(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return Es(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function Es(e, t, n) {
  let r = {},
    i = {};
  return (
    vb.forEach((e) => {
      ((r[e] = pb[e]), (i[e] = { ...n, from: pb[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${uy(pb)[a]}%` : uy(pb)[a];
        ((uy(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function Ds(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function Os({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function ks({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
      ? t.transition.animation
      : Sb;
}
function As({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function js(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function Ms(e, t) {
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
function Ns(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function Ps(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function Fs(e, t) {
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
function Is(e, t) {
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
  return Sb;
}
function Ls(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function Rs(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function zs(e) {
  return r.Children.map(e.component, (t) => {
    if (!Ri(t) || !Li(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      i = e?.transition?.position,
      a = !i || (i.left !== void 0 && i.right !== void 0),
      o = !i || (i.top !== void 0 && i.bottom !== void 0),
      s = `style` in t.props ? B(t.props.style) : !0;
    return (
      a && (`width` in t.props && (n.width = `100%`), s && (n.style.width = `100%`)),
      o && (`height` in t.props && (n.height = `100%`), s && (n.style.height = `100%`)),
      r.cloneElement(t, n)
    );
  });
}
function Bs(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function Vs(e) {
  let t = ae(),
    n = he();
  return b(xb, { ...e, resetProjection: t, skipLayoutAnimation: n, children: e.children });
}
function Hs(e) {
  return kb in e;
}
function Us(e, t) {
  if (!Hs(e)) return;
  let n = n_.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function Ws(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function Gs(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function Ks(e, t) {
  let n = [];
  (U(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    U(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    U(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    U(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    U(e.invert) && n.push(`invert(${e.invert / 100})`),
    U(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    U(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    U(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Ws(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function qs(e, t) {
  U(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Js(e, t) {
  (qs(e, t), Ks(e, t));
}
function Ys(e, t) {
  let n,
    r = (...r) => {
      (q.clearTimeout(n), (n = q.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      q.clearTimeout(n);
    }),
    r
  );
}
function Xs(...e) {
  return e.filter(Boolean).join(` `);
}
function Zs(e) {
  if (e.startsWith(Pb)) return e.substr(Fb);
}
function Qs(e, t, n) {
  let r = i.map(e, (e) => (S(e) ? u(e, t) : e));
  return n ? r : b(k, { children: r });
}
function $s(e) {
  let t = Ni(() => ec(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function ec(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = tc(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = tc(t)));
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
          let i = Ze(o) ? o(e.props) : o;
          return u(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let o = function (e, t) {
    return b(k, { children: a(e, t) });
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
function tc(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (Ko(n, e), Ko(t, e));
  };
}
function nc(e, t, n, i, a, o, s, c) {
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
    if (!n || !oc(u.props, n)) {
      f.push(t);
      continue;
    }
    let r = ac([t], o);
    r.length && d.push({ variants: r, propOverrides: n });
  }
  if (d.length === 0) return s(u, n);
  let p = ac([a, ...f], o);
  p.length && d.unshift({ variants: p });
  let m = [];
  for (let { variants: e, propOverrides: t } of d) {
    if (c && !e.includes(c)) continue;
    let r = e.join(`+`),
      l = b(
        Lb.Provider,
        {
          value: { primaryVariantId: a, variants: new Set(e) },
          children: s(u, t ? { ...n, ...t } : n),
        },
        r
      ),
      f = ic(e, o, i);
    (f.length
      ? (V(d.length > 1, `Must branch out when there are hiddenClassNames`),
        (l = b(`div`, { className: `${Rb} ${f.join(` `)}`, children: l }, r)))
      : V(d.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      m.push(l));
  }
  return (
    V(!c || m.length === 1, `Must render exactly one branch when activeVariantId is given`),
    m
  );
}
function rc(e) {
  return e.split(`-`)[2];
}
function ic(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${rc(a)}`);
  }
  return r;
}
function ac(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function oc(e, t) {
  for (let n of Object.keys(t)) if (!Tt(e[n], t[n], !0)) return !0;
  return !1;
}
function sc(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function cc(e) {
  return r.forwardRef(({ optimized: t, ...n }, i) => {
    let a = r.useContext(Ib),
      o = r.useContext(Lb)?.variants,
      s = n[Xb];
    s && !ga() && Jb.setAll(s, o, t ? n : null, a);
    let c = Qb(n);
    return b(e, { ref: i, ...n, ...c });
  });
}
function lc(e) {
  return R(e) || Array.isArray(e);
}
function uc(e) {
  return e in tx;
}
function dc(e, t) {
  let n = Ni(() => ({ values: ex(t ? e : void 0) }));
  return (
    r.useEffect(() => {
      if (!t)
        for (let e of $b) {
          let t = tx[e];
          tt(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function fc(
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
  let l = Xe(),
    u = Ni(ex),
    d = E(!1),
    m = ax(),
    h = E(null),
    g = o(async () => {
      if (!i) return;
      let e = n || void 0,
        t = d.current && r === `mirror`,
        a = t ? tx : i,
        o = t ? i : tx;
      return (
        (d.current = !d.current),
        (h.current = Promise.all(
          $b.map((t) => {
            if (!(l && t !== `opacity`))
              return (
                u[t].jump(o[t] ?? tx[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    i = a[t] ?? o[t];
                  typeof i == `number` && ke(u[t], i, r);
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
      y.current || ((y.current = !0), A(() => v(!0)), b());
    }, [b]),
    S = o((e = !0) => {
      ($b.forEach((e) => {
        u[e].stop();
      }),
        $b.forEach((e) => {
          u[e].set(tx[e]);
        }),
        (d.current = !1),
        e && ((y.current = !1), A(() => v(!1))));
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
  ib(
    s,
    o(
      (e) => {
        e.isIntersecting ? ((T.current = !0), x()) : ((T.current = !1), D());
      },
      [x, D]
    ),
    { enabled: C && a }
  );
  let O = _ || !a;
  return f(() => ({ values: u, style: C && O ? nx : rx }), [C, O]);
}
function pc(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function mc(e, t, n) {
  let { speed: i = 100, offset: a = 0, adjustPosition: o = !1, parallaxTransformEnabled: s } = e,
    c = r.useRef(null),
    l = Xe(),
    u = r.useCallback(
      (e) => (c.current === null || i === 100 ? 0 : pc(e, c.current, i, a, o)),
      [i, a, o]
    ),
    { scrollY: f } = ye(),
    p = ve(f, u),
    m = de(o && c.current === null ? `hidden` : n),
    h = de(0),
    g = d(rb);
  return (
    Xo(
      t,
      (e) => {
        if (e === null || !s) return;
        let t = Zo(g, `undefined`, e, null, (e) => {
          ((c.current = e.boundingClientRect.top),
            je.update(() => {
              (p.set(u(f.get())), o && m.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [o, s]
    ),
    Mt(() => {
      s && p.set(0);
    }),
    { values: { y: l || !s ? h : p }, style: s ? { ...nx, visibility: m } : rx }
  );
}
function hc(e) {
  return typeof e == `object` && !!e;
}
function gc(e) {
  if (hc(e)) return e?.transition;
}
function _c(e, t, n, r, i, a) {
  let o = gc(e);
  return Promise.all(
    $b.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = hc(e) ? (e?.[s] ?? tx[s]) : tx[s];
          if ((Te(u) && (u = u.get()), !z(u))) return c();
          let d = be.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (R(i) && !l?.hasAnimated && q.MotionHandoffAnimation) {
            let e = q.MotionHandoffAnimation(i, s, je);
            e && (f = e);
          }
          a ? l.set(u) : ke(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function vc(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  o,
  s,
  c,
  l
) {
  let u = r ?? e,
    d = i ?? t,
    p = a ?? n,
    [m, h] = pe(),
    g = E({ lastPresence: !1, lastAnimate: d, hasMounted: !1, running: !1 }),
    _ = Ni(() => {
      let e = u ?? c;
      if (!B(e)) return { values: ex() };
      let t = {};
      for (let n in e) {
        let r = B(e) ? e[n] : void 0;
        z(r) && (t[n] = r);
      }
      return { values: ex(t) };
    });
  Xo(
    o,
    (e) => {
      let { hasMounted: t } = g.current;
      if (t && d) return;
      let n = be.get(e);
      if (n)
        for (let e in (Object.assign(g.current, { hasMounted: !0 }), _.values)) {
          if (!uc(e)) continue;
          let t = c?.[e];
          n.setBaseTarget(e, z(t) ? t : tx[e]);
        }
    },
    [d]
  );
  let v = Xe();
  Xo(o, (e) => {
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
            _c(d, _, v, o, l).then(() => Object.assign(g.current, { running: !1 })))
          : p
            ? (Object.assign(g.current, { running: !0 }),
              _c(p, _, v, o, l)
                .then(() => Object.assign(g.current, { running: !1 }))
                .then(() => h()))
            : h());
      return;
    }
    let { lastAnimate: t, running: n } = g.current;
    Tt(d, t) ||
      !d ||
      (Object.assign(g.current, { lastAnimate: d }),
      _c(d, _, v, o, l, !n).then(() => Object.assign(g.current, { running: !1 })));
  });
  let y = s && d;
  return f(() => ({ values: _.values, style: y ? nx : rx }), [y]);
}
function yc(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; ) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function bc(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o || !o.current) continue;
    let c = yc(o.current, document.documentElement) - cx - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function xc(e, t = 0) {
  return e < t ? `up` : `down`;
}
function Sc(e, t, n = {}) {
  let { direction: i, target: a } = e ?? {},
    { repeat: o = !0, enabled: s = !0 } = n,
    c = jt();
  r.useEffect(() => {
    if (!i || !s) return;
    let e,
      n = 0,
      r,
      c;
    return se((s, { y: l }) => {
      if ((!o && c === a) || l.current > l.scrollLength || l.current < 0) return;
      let u = xc(l.current, e);
      e = l.current;
      let d = u !== r;
      if (((r = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < lx) return;
        let e = u === i ? a : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [c, i, o, a, s, t]);
}
function Cc(e, t, n) {
  let r = bc(e, t),
    i = [...dx],
    a = r[0];
  if (!z(a)) return fx;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!z(e)) return fx;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function wc(e) {
  return {
    x: e?.x ?? tx.x,
    y: e?.y ?? tx.y,
    scale: e?.scale ?? tx.scale,
    opacity: e?.opacity ?? tx.opacity,
    transformPerspective: e?.transformPerspective ?? tx.transformPerspective,
    rotate: e?.rotate ?? tx.rotate,
    rotateX: e?.rotateX ?? tx.rotateX,
    rotateY: e?.rotateY ?? tx.rotateY,
    skewX: e?.skewX ?? tx.skewX,
    skewY: e?.skewY ?? tx.skewY,
    transition: e?.transition ?? void 0,
  };
}
function Tc({ opacity: e, targetOpacity: t, perspective: n, enter: i, exit: a, animate: o, ...s }) {
  return r.useMemo(
    () => ({
      initial: i ?? wc({ ...s, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: o ?? wc({ opacity: t }),
      exit: a ?? wc(),
    }),
    [o, s, i, a, e, t, n]
  );
}
function Ec(e, t) {
  let n = Xe(),
    i = Tc(e),
    a = e.styleAppearEffectEnabled,
    o = dc(a ? i.initial : i.animate, a),
    s = r.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    c = jt(),
    l = r.useRef(),
    u = r.useCallback(async ({ transition: r, ...a }, s) => {
      let c = r ?? i.animate.transition ?? e.transition;
      await l.current;
      let u = be.get(t.current);
      l.current = Promise.all(
        $b.map((e) => {
          s && o.values[e].set(i.initial[e] ?? tx[e]);
          let t = a[e] ?? tx[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (z(t) && o.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...c, onComplete: () => r() };
                typeof t == `number` && ke(o.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    d = e.animateOnce && s.current.lastAppearState === !0;
  $o(
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
      return se((r, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = Cc(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let l = Pe(a.current, s, c);
        if ((e.animateOnce && t[l]) || ((t[l] = !0), n === l)) return;
        n = l;
        let d = uy(i)[l];
        d && u(d);
      });
    }, [c, p]),
    Sc(e.scrollDirection, (e) => void u(e ?? i.animate), { enabled: a, repeat: !e.animateOnce }),
    Mt(() => {
      if (a && !(!e.targets && !e.scrollDirection))
        for (let e of $b) o.values[e].set(i.initial?.[e] ?? tx[e]);
    }),
    f(() => ({ values: o.values, style: a ? nx : rx }), [a])
  );
}
function Dc(e, t) {
  let n = r.useRef({});
  r.useEffect(() => {
    if (t !== void 0)
      for (let r of ph(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = Be({
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
        a.attach((e, t) => ((s = e), (o = t), je.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function Oc(e, t) {
  let n = hx();
  return {
    inputRange: bc(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of $b) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function kc(e) {
  let t = hx();
  for (let { target: n } of e) for (let e of $b) t[e]?.push(n[e]);
  return t;
}
function Ac(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: i,
    transformViewportThreshold: a = 0,
  },
  o
) {
  let s = Xe(),
    c = dc(mx(n, s), t),
    l = !t || !n,
    u = e === `onScrollTarget`,
    d = jt();
  return (
    ne(() => {
      if (!(l || !u))
        return se((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: i } = Oc(n, a * t.containerLength);
          if (r.length !== 0)
            for (let e of $b)
              (s && e !== `opacity`) ||
                (r.length === i[e].length &&
                  i[e][0] !== void 0 &&
                  c.values[e].set(Pe(t.current, r, i[e])));
        });
    }, [s, u, a, n, l]),
    Xo(
      o,
      (t) => {
        if (l || u || t === null) return;
        let r = kc(n);
        return se(
          (e, { y: t }) => {
            for (let e of $b)
              (s && e !== `opacity`) ||
                (gx.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  c.values[e].set(Pe(t.progress, gx, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [d, s, e, u, n, l]
    ),
    Dc(c.values, i),
    Mt(() => {
      if (l) return;
      let e = mx(n, s);
      for (let t of $b) c.values[t].set(e?.[t] ?? tx[t]);
    }),
    r.useMemo(() => ({ values: c.values, style: t ? nx : rx }), [t])
  );
}
function jc(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function Mc(e) {
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
    let r = Zs(n);
    if (r) {
      for (let i of vx)
        if (_x[i]?.has(r)) {
          t[i][r] = uy(e)[n];
          break;
        }
    } else t.forwardedProps[n] = uy(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = jc(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = jc(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function Nc(e) {
  return B(e) && xx in e;
}
function Pc(e, t) {
  if (!e || !B(e)) return t;
  for (let n in e) {
    let r = e[n];
    !Te(r) || !uc(n) || (z(r.get()) && t[n].push(r));
  }
}
function Fc(e) {
  return R(e) || Array.isArray(e);
}
function Ic({ componentIdentifier: e, children: t }) {
  return t(d(Cx)[e] ?? {});
}
function Lc() {
  return r.useContext(wx);
}
function Rc(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function zc() {
  if (s === void 0 || Dx)
    return b(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw kx;
}
function Bc({ children: e }) {
  return d(jx) ? b(k, { children: e }) : b(O, { fallback: Ax, children: e });
}
function Vc() {
  return b(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function Hc(e, t) {
  if (!oh || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  Qt(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Uc(...e) {
  console.error(...e);
}
function Wc() {
  return Y.current() !== Y.canvas;
}
function Gc({ getErrorMessage: e, fallback: t, children: n }) {
  return Wc()
    ? b(Kc, { fallback: t, children: b(Nx, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function Kc({ children: e, fallback: t = Mx }) {
  return s === void 0 ? b(O, { fallback: t, children: e }) : b(Bc, { children: e });
}
function qc() {
  return r.useContext(Fx);
}
function Jc() {
  let e = qc();
  return r.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0; ) t = t.parent;
    return t;
  }, [e]);
}
function Yc({ children: e, scopeId: t, nodeId: n }) {
  let i = qc(),
    a = r.useMemo(
      () => ({ level: (i?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: i }),
      [t, n, i]
    );
  return b(Fx.Provider, { value: a, children: e });
}
function Xc(e, t) {
  return `${Ix}${e}:${t}`;
}
function Zc(e, t) {
  return $c(`component`, e, t);
}
function Qc(e, t) {
  return $c(`override`, e, t);
}
function $c(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${Xc(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function el(e, t, n, r, i, a) {
  let o = nl(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function tl(e, t, n, r) {
  return nl(e, t, n, r);
}
function nl(e, t, n, r) {
  return !!(tt(n) || (n === 1 && r && e === t));
}
function rl(e, t, n, r, i, a) {
  let o = qc();
  return tt(t) || tt(n)
    ? b(Px, { children: e })
    : (el(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = b(Gc, { getErrorMessage: Zc.bind(null, t, n), fallback: null, children: e })),
      i && (e = b(Yc, { scopeId: t, nodeId: n, children: e })),
      e);
}
function il(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function al(e) {
  return !(!e || e.placement || e.alignment);
}
function ol(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      H(e);
  }
}
function sl(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${ol(t)}, -100%`;
    case `right`:
      return `0%, ${ol(t)}`;
    case `bottom`:
      return `${ol(t)}, 0%`;
    case `left`:
      return `-100%, ${ol(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function cl(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n; ) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(Gx)) {
      let e = n.getAttribute(Gx);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function ll(e) {
  let { registerCursors: t } = d(zx),
    n = Ni(() => e),
    r = y();
  ne(() => t(n, r), [t, r]);
}
function ul(e) {
  return !!(e && typeof e == `object` && qx in e);
}
function dl(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function fl() {
  return Y.current() === Y.canvas;
}
function pl(e) {
  return e === void 0 ? !1 : !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function ml(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function hl(e, t, n, r) {
  if (R(e)) {
    let i = pl(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    let { routeId: s } = Dr(t.routes, o, void 0, r);
    return t.getRoute(s);
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function gl(e) {
  return R(e) && e.startsWith(`data:${eS}`);
}
function _l(e) {
  if (gl(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(eS.length),
        r = t.searchParams,
        i = r.has(Xx) ? r.get(Xx) : void 0,
        a,
        o = r.get(Zx),
        s = r.get(Qx),
        c = r.get($x);
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
function vl(e, t, n) {
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
    let n = _l(e);
    if (!n || !n.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function yl(e) {
  if (!gl(e)) return e;
  let t = _l(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: bl(i) };
}
function bl(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function xl({ children: e }) {
  return b(tS.Provider, { value: void 0, children: e });
}
function Sl(e, t, n, r, a, s) {
  let c = d(tS),
    l = Jc(),
    u = f(() => ({ scopeId: t, nodeId: n, furthestExternalComponent: l }), [t, n, l]),
    p = Ot(),
    m = At(),
    { locales: h } = dr(),
    g = f(() => {
      let e = ul(r) ? r : yl(r);
      if (e) return hl(e, p, m, h);
    }, [m, r, p, h]),
    _ = !!(!fl() && c?.nodeId && u.nodeId),
    v = o(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), xa(e))) {
            Tl(a.href, ``, `_blank`);
            return;
          }
          g ? a.navigate?.() : Tl(a.href, a.rel, a.target);
        }
      },
      [a, g]
    ),
    y = o(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), Tl(a.href, ``, `_blank`));
      },
      [a]
    ),
    x = o(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          g ? a.navigate?.() : Tl(a.href, a.rel, a.target));
      },
      [a, g]
    );
  Xo(
    s,
    (e) => {
      e !== null && _ && (e.dataset.hydrated = `true`);
    },
    [_]
  );
  let S = e;
  return (
    _ &&
      (i.forEach(e, (e) => {
        wl(e) &&
          (V(
            Cl(c),
            'outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above'
          ),
          V(
            Cl(u),
            'innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above'
          ),
          Yx.collectNestedLink(c, u));
      }),
      (S = i.map(e, (e) => {
        if (!wl(e)) return e;
        let t = El(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            'data-nested-link': !0,
            role: `link`,
            tabIndex: 0,
            onClick: v,
            onAuxClick: y,
            onKeyDown: x,
            as: r.as && El(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return te(t, { ...i, ref: a }, n);
      }))),
    b(tS.Provider, { value: u, children: S })
  );
}
function Cl(e) {
  return !tt(e?.nodeId);
}
function wl(e) {
  return S(e) && (El(e.type) !== e.type || El(e.props.as) !== e.props.as);
}
function Tl(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function El(e) {
  return e === `a` ? `span` : Ye(e) && Ne(e) === `a` ? _e.span : e;
}
function Dl(e) {
  e &&
    je.read(() => {
      let t = document.getElementById(e);
      if (!t) return;
      let n = getComputedStyle(t),
        r = n.getPropertyValue(`--selection-color`).trim(),
        i = n.getPropertyValue(`--selection-background-color`).trim();
      je.render(() => {
        let t = document.querySelectorAll(`[data-framer-portal-id="${e}"]`);
        t.length !== 0 &&
          (r && t.forEach((e) => e.style.setProperty(nS, r)),
          i && t.forEach((e) => e.style.setProperty(rS, i)));
      });
    });
}
function Ol(e) {
  return [
    `[data-framer-portal-id="${e}"] * ::selection {
    color: var(${nS});
    background-color: var(${rS});
}`,
  ];
}
function kl({ triggerId: e, children: t }) {
  return (
    r.useLayoutEffect(() => {
      e && Dl(e);
    }, [e]),
    t
  );
}
function Al(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : Al(e.parentElement, t)
      : null;
}
function jl({ children: e }) {
  return b(Bc, { children: e });
}
function Ml(e) {
  return _(function (t, n) {
    return b(jl, { children: b(e, { ...t, ref: n }) });
  });
}
function Nl(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return Fl(e, t, o, s, a, c, l, i, r);
}
function Pl(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && pl(t))
    try {
      let [i, a] = t.split(`#`, 2);
      V(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      V(o !== void 0, `A href must have a defined pathname.`);
      let { routeId: s, pathVariables: c, localeId: l } = Dr(e.routes, o, void 0, r),
        u = e.getRoute(s);
      if (u)
        return {
          routeId: s,
          route: u,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, c),
          locale: l ? r?.find(({ id: e }) => e === l) : void 0,
        };
    } catch {}
}
function Fl(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = nr(d, {
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
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function Il() {
  let e = d(lS),
    t = At()?.pathVariables;
  return e || t;
}
function Ll(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(cS)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Rl() {
  let e = g.connection || g.mozConnection || g.webkitConnection || {},
    t = g.deviceMemory && g.deviceMemory > fS,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? pS : mS));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: dS }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    let { id: n, preload: i } = e,
      a = _S.get(n);
    if (!a?.size || gS.has(n)) return;
    (++s, gS.add(n));
    let c = i()?.catch(() => {});
    (o.unobserve(t), hS.delete(t));
    for (let e of a) (o.unobserve(e), hS.delete(e));
    (a.clear(), _S.delete(n), await c, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = hS.get(e);
      if (!n || gS.has(n.id)) {
        (o.unobserve(e), hS.delete(e));
        continue;
      }
      let r = n.id,
        a = _S.get(r),
        l = _S.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (s >= i) continue;
        (a ? a.add(e) : _S.set(r, new Set([e])), setTimeout(c, uS, n, e));
      } else (a && a.delete(e), l <= 1 && _S.delete(r));
    }
  }
  return (e, t, n) => {
    if (!gS.has(n))
      return (
        hS.set(e, { id: n, preload: t }),
        o.observe(e),
        () => {
          (hS.delete(e), o.unobserve(e));
        }
      );
  };
}
function zl(e, t) {
  let n = pl(e),
    r = {
      href: e === `` || ml(e, n) ? e : `https://${e}`,
      target: Bl(t?.openInNewTab, n),
      rel: n ? void 0 : Vl(`noopener`, t?.rel),
    };
  return (
    t?.preserveParams && ((r.href = wn(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function Bl(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Vl(e, t) {
  if (e && !t) return e;
  if (!e && t) return t;
  if (e && t) return `${e} ${t}`;
}
function Hl(e, t) {
  console.warn(
    lt(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function Ul(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return Hl(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return st(i) ? i.catch(Hl) : i;
  } catch (e) {
    Hl(e);
  }
}
function Wl(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = Ul(o, r, n);
      st(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function Gl() {
  let e = ln();
  return o((t, n, r, i = []) => Wl(t, n, r, e, i), [e]);
}
function Kl({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = ln();
  return o(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = ul(r) ? r : yl(r);
      if (!ul(c))
        return Qt(
          `published_site_click`,
          {
            ...s,
            href: o ? ql(o) : null,
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
        if (R(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (st(n) ? await n : n) ?? null;
        }
      }
      return Qt(
        `published_site_click`,
        {
          ...s,
          href: o ? ql(o) : null,
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
function ql(e) {
  try {
    let t = new URL(e, q.document.baseURI);
    return t.origin === q.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function Jl(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function Yl(e, t, n) {
  return async (r) => {
    let i = xa(r),
      a = Al(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await mn({
        priority: `user-blocking`,
        ensureContinueBeforeUnload: !0,
        continueAfter: `paint`,
      }),
        c());
      return;
    }
    (r.preventDefault(), n(c));
  };
}
function Xl(e, t, n, r, i, a, o, s) {
  if (!n) return zl(e, r);
  let c = Pl(t, e, s, o);
  if (!c) return zl(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return zl(e, r);
  let m = nr(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !sh,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = Bl(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = { pathVariables: f, locale: p },
    v = (e) => Jl(t, l, () => i(l, _, !1, !g), d, f, r.smoothScroll, e);
  return {
    href: m,
    target: h,
    onClick: Yl(m, r.trackLinkClick, v),
    navigate: v,
    'data-framer-page-link-current':
      (n && Ll(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () => i(l, _, !0, !g),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
  };
}
function Zl(e, t, n) {
  let r = Ql(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (Ze(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (Ze(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function Ql(e, t) {
  let n = B(e) ? e : void 0,
    r = n && !et(n),
    i = t && !et(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function $l(e, t, n) {
  if (!(t && ua())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: eu } : { ...i, onTap: r }) : e;
}
function eu(e) {
  let t = Al(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function tu(e, t, n, r, i, a) {
  let o = ul(e) ? e : yl(e);
  if (!ul(o)) return R(e) ? zl(e).href : void 0;
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
  if (st(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash),
    v = nr(m, {
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
function nu({ EditorBar: e, fast: t = !1 }) {
  let n = bh(),
    r = d(bS),
    i = m(ES, t ? CS : wS, TS),
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
    : b(SS, { children: b(O, { children: b(e, { framerSiteId: r, features: a }) }) });
}
function ru({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = E(),
    i = E(),
    a = E(t);
  ((a.current = t),
    c(() => {
      e && ((r.current ??= new Set()), r.current.add(e), i.current?.(e));
    }, [e]));
  let [o] = p(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? new Set(),
      getCurrentRoutePath: () =>
        iu(a.current, a.current.currentRouteId, a.current.currentPathVariables),
      resolveRoute: (e) => iu(a.current, e.webPageId, e.pathVariables),
      setRouteChangeHandler: (e) => {
        i.current = e;
      },
    }),
  }));
  return b(DS.Provider, { value: o, children: n });
}
function iu(e, t, n) {
  let r = e.getRoute(t);
  return !r || !r.path ? `` : n ? Cn(r.path, n) : r.path;
}
function au({ children: e, loadSnippetsModule: t }) {
  return b(RS.Provider, { value: t, children: e });
}
function ou() {
  return r.useContext(RS);
}
function su(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function cu(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (V(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (V(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
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
      H(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await lu(a.createContextualFragment(e), r, i));
}
async function lu(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = uu(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await lu(r, e, null)));
  }
}
function uu(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return du(r, t, n);
}
function du(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function fu(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = PS), (n = FS));
      break;
    case `bodyEnd`:
      ((t = IS), (n = LS));
      break;
    case `headStart`:
      ((t = AS), (n = jS));
      break;
    case `headEnd`:
      ((t = MS), (n = NS));
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
function pu(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = su(e),
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
async function mu(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = fu(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = pu(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((hu(t, o), s)) {
      await cu(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = su(e.id),
      u = `${c}
${e.code}
${l}`,
      d = _u(e.id, n, r, i);
    d ? await cu(u, d, `afterend`) : await cu(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function hu(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t; ) {
    let e = n.nextSibling;
    (gu(n) && n.remove(), (n = e));
  }
}
function gu(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function _u(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = pu(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function vu() {
  let e = ou();
  return o(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(OS),
        o = a && a.dataset[kS] !== void 0;
      if (i && o) return;
      let { getSnippets: s, snippetsSorting: c } = await e.readMaybeAsync(),
        l = await s(t, n, r);
      for (let e in l) {
        let t = e,
          n = l[t],
          r = c[t];
        await mu(t, n, r);
      }
    },
    [e]
  );
}
function yu(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function bu() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((zS = e.timeZone), (BS = e.locale));
}
function xu() {
  let [e, t] = r.useState(0);
  return [e, r.useCallback(() => t((e) => e + 1), [])];
}
function Su(e, t, n) {
  let r = e && document.getElementById(e);
  if (r) {
    Ou(r, t);
    return;
  }
  n || s.scrollTo(0, 0);
}
function Cu(e) {
  let t = E([]);
  return (
    ne(() => {
      t.current?.length && (t.current.forEach((e) => e()), (t.current = []));
    }, [e]),
    o((e) => {
      t.current.push(e);
    }, [])
  );
}
function wu(e) {
  if (!e) return ah;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function Tu() {
  let e = sr(),
    t = E(void 0);
  return o(
    async (n, r, i, a = !0) => {
      let o = i !== void 0;
      t.current?.abort();
      let c = a ? new AbortController() : void 0;
      t.current = c;
      let l = c?.signal,
        u = Ft(l);
      if ((r.promise.finally(u), !o)) return ((t.current = void 0), n(l), r.promise);
      n(l);
      let d;
      if (
        (e(
          new Promise((e, t) => {
            ((d = e), l?.addEventListener(`abort`, t));
          }).catch(ah),
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
      l?.aborted || mg();
    },
    [e]
  );
}
function Eu({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: i,
  collectionUtils: a,
  routes: u,
  initialLocaleId: d,
  initialCollectionItemId: p,
  locales: m = _h,
  preserveQueryParams: h = !1,
  LayoutTemplate: g,
  EditorBar: _,
  siteCanonicalURL: v,
  adaptLayoutToTextDirection: y,
}) {
  (yr(), $n({ disabled: t, routeId: r, initialPathVariables: n, initialLocaleId: d }));
  let x = Gn(),
    [S, C] = xu(),
    w = Cu(S),
    T = Tu(),
    O = Jn(`framer-route-change`),
    { synchronousNavigationOnDesktop: ee } = bh(),
    k = f(() => (!ee || !ba() ? A : (e) => e()), [ee]),
    te = vu(),
    re = E(!0),
    j = E(),
    M = E(r),
    ie = E(n),
    ae = E(d),
    N = ae.current,
    oe = f(() => m.find(({ id: e }) => (N ? e === N : e === xh)) ?? null, [N, m]),
    se = oe?.textDirection ?? `ltr`,
    ce = y ? se : `ltr`;
  ne(() => {
    y && document.documentElement.setAttribute(`dir`, se);
  }, [se, y]);
  let le = ir(),
    ue = f(
      () => ({
        activeLocale: oe,
        locales: m,
        setLocale: async (e) => {
          let t = O({ localized: !0 });
          await mn({ priority: `user-blocking`, continueAfter: `paint` });
          let n;
          R(e) ? (n = e) : B(e) && (n = e.id);
          let r = m.find(({ id: e }) => e === xh),
            i = m.find(({ id: e }) => e === n);
          if (!i) return;
          let a = M.current,
            o = u[a];
          if (o)
            try {
              let e = await le({
                currentLocale: oe,
                nextLocale: i,
                route: o,
                routeId: a,
                defaultLocale: r,
                pathVariables: ie.current,
                preserveQueryParams: h,
              });
              if (!e) return;
              let n = Xn(s.history.state) ? s.history.state.paginationInfo : void 0,
                c = e.path;
              ((re.current = !1),
                (ie.current = e.pathVariables),
                (ae.current = i.id),
                T(
                  () => {
                    x(a, a, () => k(C));
                  },
                  t,
                  async (t = !1) => {
                    if (c)
                      return Qn(
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
      [oe, C, m, h, u, T, x, O, k, le]
    ),
    de = o(
      (e, t, n, r, i, a, o, s = !1, c) => {
        re.current = !1;
        let l = M.current;
        if (
          ((M.current = e),
          (ie.current = i),
          (ae.current = t),
          (j.current = r),
          w(() => {
            Su(n, s, a);
          }),
          a)
        ) {
          k(C);
          return;
        }
        T(
          (t) => {
            x(l, e, () => k(C), t);
          },
          o,
          c,
          !0
        );
      },
      [C, w, T, x, k]
    );
  er(M, de);
  let fe = o(
      async (e, n, r, i, a) => {
        let o = u[e],
          c = dt(o?.page) ? o.page.getStatus() : void 0,
          l = c?.hasRendered,
          d = O({ cached: l, preloaded: l ? void 0 : c?.hasLoaded }),
          f = wu(a);
        if (
          (mn({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(f),
          await mn({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(ng)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let p = Pt(o, n),
          m = ie.current,
          g = ae.current;
        if (yu({ routeId: M.current, pathVariables: m }, { routeId: e, pathVariables: r })) {
          d.ignore?.();
          let a = u[e];
          (s.history.state?.hash !== n &&
            !t &&
            a &&
            (f(),
            await Yn(e, a, {
              currentRoutePath: a.path,
              currentPathVariables: m,
              pathVariables: r,
              hash: n,
              localeId: g,
              preserveQueryParams: h,
              siteCanonicalURL: v,
              currentRoutePathLocalized: a.pathLocalized,
            })),
            Su(p, i, !1));
          return;
        }
        if (!o) return;
        let _ = u[M.current];
        de(
          e,
          g,
          p,
          On(v) +
            nr(o, {
              currentRoutePath: _?.path,
              currentRoutePathLocalized: _?.pathLocalized,
              currentPathVariables: m,
              hash: n,
              pathVariables: r,
              localeId: g,
              preserveQueryParams: h,
              siteCanonicalURL: v,
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
                Yn(
                  e,
                  o,
                  {
                    currentRoutePath: _?.path,
                    currentPathVariables: m,
                    currentRoutePathLocalized: _?.pathLocalized,
                    hash: n,
                    pathVariables: r,
                    localeId: g,
                    preserveQueryParams: h,
                    siteCanonicalURL: v,
                  },
                  t
                )
              )
        );
      },
      [u, de, t, h, v, O]
    ),
    P = Et(u),
    pe = M.current,
    me = j.current,
    F = ie.current,
    he = u[pe],
    ge = he?.path,
    _e = VS(he, pe, me, F, oe, p),
    I = re.current;
  c(() => {
    te(pe, F ?? {}, ue.activeLocale, I);
  }, [te, pe, F, ue, I]);
  let ve = f(
    () => ({
      navigate: fe,
      getRoute: P,
      currentRouteId: pe,
      currentPathVariables: F,
      routes: u,
      collectionUtils: a,
      preserveQueryParams: h,
      pageviewEventData: _e,
      siteCanonicalURL: v,
      isInitialNavigation: I,
    }),
    [fe, P, pe, F, u, a, h, v, _e, I]
  );
  if (!he) throw Error(`Router cannot find route for ${pe}`);
  let ye = !oe || !he.includedLocales || he.includedLocales.includes(oe.id),
    be = ge && F ? Cn(ge, F) : ge,
    L = String(N) + be,
    xe = Ni(() => ({ ...e, display: `contents` }));
  return b(Dt, {
    api: ve,
    children: b(Sg.Provider, {
      value: ue,
      children: b(Cg.Provider, {
        value: ce,
        children: b(pr, {
          children: D(ru, {
            currentRoutePath: be,
            routerAPI: ve,
            children: [
              _ && b(nu, { EditorBar: _, fast: !0 }),
              b(Ox, {
                children: D(Bc, {
                  children: [
                    D(Zg, {
                      notFoundPage: i,
                      defaultPageStyle: e,
                      forceUpdateKey: S,
                      children: [
                        b(Yg.Start, {}),
                        b(Du, {
                          LayoutTemplate: g,
                          webPageId: he?.abTestingVariantId ?? pe,
                          style: e,
                          children: (t) =>
                            b(l, { children: ye ? wr(he.page, t ? xe : e) : i && wr(i, e) }, L),
                        }),
                      ],
                    }),
                    _ && b(nu, { EditorBar: _ }),
                    b(hr, {}),
                    b(Yg.End, {}),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
    }),
  });
}
function Du({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? b(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function Ou(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function ku(e) {
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
function Au(e) {
  return typeof e == `object` && !!e;
}
function ju(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!Au(r)) return;
    r = r[e];
  }
  return r;
}
function Mu(e) {
  return `${e.credentials}:${e.url}`;
}
function Nu(e) {
  return R(e) && !Number.isNaN(Number(e));
}
function Pu(e, t) {
  switch (e) {
    case `string`:
      return R(t) || z(t);
    case `color`:
      return R(t);
    case `boolean`:
      return Qe(t);
    case `number`:
      return z(t) || Nu(t);
    case `link`:
    case `image`:
      return R(t) && ml(t, !1);
    default:
      return !1;
  }
}
function Fu(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = ju(e.data, t.resultKeyPath);
  if (tt(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!Pu(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function Iu(e, t) {
  if (Y.current() === Y.canvas) return !1;
  let n = Math.max(t * 1e3, US);
  return Date.now() >= e + n;
}
function Lu({
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
  initialCollectionItemId: S,
}) {
  return (
    r.useEffect(() => {
      t || w_.start();
    }, []),
    t
      ? b(Me, {
          reducedMotion: l ? `user` : `never`,
          children: b(cn, {
            collectionUtils: s,
            children: b(tC, {
              children: b(Ux, {
                children: b(bS.Provider, {
                  value: i,
                  children: b(au, {
                    loadSnippetsModule: x,
                    children: b(Eu, {
                      initialRoute: n,
                      initialPathVariables: a,
                      initialLocaleId: d,
                      initialCollectionItemId: S,
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
      : b(u ? Nb : r.Fragment, {
          children: b(kt, {
            routes: o,
            children: b(Cb, { children: r.isValidElement(e) ? e : r.createElement(e, { key: n }) }),
          }),
        })
  );
}
function Ru(e) {
  return {
    trace(...t) {
      return _y.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return _y.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return _y.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return _y.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return _y.getLogger(e)?.error(...t);
    },
    get enabled() {
      return _y.getLogger(e) !== void 0;
    },
  };
}
function zu(e) {
  let t = e.next();
  return (V(t.done, `Generator must not yield`), t.value);
}
async function Bu(e, t = e.next()) {
  for (; !t.done; ) {
    let n = await t.value;
    t = e.next(n);
  }
  return t.value;
}
function Vu(e) {
  let t = e.next();
  return t.done ? t.value : Bu(e, t);
}
function* G(e) {
  let t = {},
    n = Object.keys(e),
    r = [];
  for (let i of n) {
    let n = e[i];
    if (at(n)) {
      let e = n.next();
      e.done
        ? (t[i] = e.value)
        : r.push(
            Bu(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function* Hu(e) {
  let t = [],
    n = e.keys(),
    r = [];
  for (let i of n) {
    let n = e[i];
    if (at(n)) {
      let e = n.next();
      e.done
        ? (t[i] = e.value)
        : r.push(
            Bu(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function Uu(e) {
  return Ku(e) || Yu(e);
}
function Wu(e) {
  return $e(e) && e.every(B);
}
function Gu(e) {
  return B(e) && Ze(e.read) && Ze(e.preload);
}
function Ku(e) {
  return Wu(e) || Gu(e);
}
function qu(e) {
  return B(e) && B(e.schema);
}
function Ju(e) {
  return B(e) && B(e.collectionByLocaleId);
}
function Yu(e) {
  return qu(e) || Ju(e);
}
function Xu(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = Td(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Zu(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => Z.cast(e, t.definition)) };
  }
  return null;
}
function Qu(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function $u(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function ed(e) {
  return $u(e)?.value ?? !1;
}
function td(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function nd(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function rd(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function id(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return it(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function ad(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function od(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function sd(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function cd(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function ld(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function ud(e) {
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
function dd(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function fd(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function pd(e) {
  return fd(e)?.value ?? null;
}
function md(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = Td(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function hd(e, t) {
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
function gd(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function _d(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function vd(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
function yd(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function bd(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
function xd(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function Sd(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : r > i ? 1 : 0
  );
}
function Cd(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function wd(e) {
  return Cd(e)?.value ?? null;
}
function Td(e, t, n) {
  if (nt(e) || nt(t)) return (V(e === t), 0);
  switch (e.type) {
    case `array`:
      return (V(e.type === t.type), Xu(e, t, n));
    case `boolean`:
      return (V(e.type === t.type), Qu(e, t));
    case `color`:
      return (V(e.type === t.type), td(e, t));
    case `date`:
      return (V(e.type === t.type), rd(e, t));
    case `enum`:
      return (V(e.type === t.type), ad(e, t));
    case `file`:
      return (V(e.type === t.type), sd(e, t));
    case `link`:
      return (V(e.type === t.type), ld(e, t));
    case `number`:
      return (V(e.type === t.type), dd(e, t));
    case `object`:
      return (V(e.type === t.type), md(e, t, n));
    case `responsiveimage`:
      return (V(e.type === t.type), gd(e, t));
    case `richtext`:
      return (V(e.type === t.type), vd(e, t));
    case `vectorsetitem`:
      return (V(e.type === t.type), bd(e, t));
    case `string`:
      return (V(e.type === t.type), Sd(e, t, n));
    default:
      H(e);
  }
}
async function Ed(e, t) {
  return Gu(e) ? (await e.preload(t), e.read(t)) : e;
}
function Dd(e) {
  return e.includes(sC);
}
function Od(e) {
  if (!Yu(e) || !e.id) return;
  let t = aC.get(e.id);
  if (!t) return (aC.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function kd(e) {
  let t = Od(e);
  if (t) return t;
  let n = oC.get(e);
  if (n) return n;
  let r = `${sC}${Math.random().toString(16).slice(2)}`;
  return (oC.set(e, r), r);
}
function Ad(e, t) {
  if (Ku(e)) {
    let n = kd(e) + (t?.id ?? xh),
      r = cC.get(n);
    if (r) return r;
    let i = new iC(e, t);
    return (cC.set(n, i), i);
  }
  if (qu(e)) return e;
  if (Ju(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  H(e, `Unsupported collection type`);
}
function jd() {
  return 25;
}
function Md() {
  return 12500;
}
function Nd(e) {
  return e;
}
function Pd(e) {
  return e;
}
function Fd(e) {
  return B(e) && Ze(e.getHash);
}
function K(e, ...t) {
  return Pd(
    `${e}(${t.map((e) => (V(!(e instanceof _C), `Pass CollectionMetadata.id instead`), V(!(e instanceof bC), `Pass FieldMetadata.id instead`), V(!(e instanceof vC), `Pass IndexMetadata.id instead`), V(!(e instanceof pC), `Pass RelationalNode.group.id instead`), V(!(e instanceof uC), `Pass Group.id instead`), Fd(e) ? e.getHash() : JSON.stringify(e))).join(`, `)})`
  );
}
function Id(e, t) {
  return { collectionId: kd(e), pointer: t };
}
function Ld(e) {
  return B(e) && R(e.collectionId);
}
function Rd(e, t) {
  return { collectionId: kd(e), pointer: t };
}
function zd(e) {
  return B(e) && R(e.collectionId);
}
function Bd(e, t) {
  let n = new Map();
  function r(e) {
    if (B(e))
      if (e.type === `Collection` && Uu(e.data)) {
        let r = Ad(e.data, t),
          i = kd(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if ($e(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function Vd(e) {
  return e;
}
function Hd(e) {
  return e;
}
function Ud(e) {
  return e;
}
function Wd(e) {
  return Array(e).fill({ type: `All` });
}
function Gd(e, ...t) {
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
function Kd(e) {
  let t = new Set();
  if (!e) return t;
  Gd(e.type === `array`, `ScalarIntersection expects an array, got:`, e.type);
  for (let n of e.value)
    n &&
      (Gd(
        n.type === `string`,
        `ScalarIntersection expects an array of strings, got an array with:`,
        n.type
      ),
      t.add(n.value));
  return t;
}
function qd(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function Jd(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Yd(e) {
  return `${e.functionName}(${e.arguments.map((e) => ef(e)).join(`, `)})`;
}
function Xd(e) {
  let t = `CASE`;
  e.value && (t += ` ${ef(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${ef(n.when)} THEN ${ef(n.then)}`;
  return (e.else && (t += ` ELSE ${ef(e.else)}`), (t += ` END`), t);
}
function Zd(e) {
  let t = ef(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function Qd(e) {
  let t = ef(e.left),
    n = ef(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function $d(e) {
  return `CAST(${ef(e.value)} as ${e.dataType})`;
}
function ef(e) {
  switch (e.type) {
    case `Identifier`:
      return qd(e);
    case `LiteralValue`:
      return Jd(e);
    case `FunctionCall`:
      return Yd(e);
    case `Case`:
      return Xd(e);
    case `UnaryOperation`:
      return Zd(e);
    case `BinaryOperation`:
      return Qd(e);
    case `TypeCast`:
      return $d(e);
    case `Select`:
      return `${of(e)}`;
    default:
      H(e);
  }
}
function tf(e) {
  return qu(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function nf(e) {
  let t = `${rf(e.left)} LEFT JOIN ${rf(e.right)}`;
  return (e.constraint && (t += ` ON ${ef(e.constraint)}`), t);
}
function rf(e) {
  switch (e.type) {
    case `Collection`:
      return tf(e);
    case `LeftJoin`:
      return nf(e);
    default:
      H(e);
  }
}
function af(e) {
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
function of(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = ef(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${rf(e.from)}`),
    e.where && (t += ` WHERE ${ef(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${ef(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${ef(e.limit)}`),
    e.offset && (t += ` OFFSET ${ef(e.offset)}`),
    af(t)
  );
}
function sf(e) {
  return B(e) && e.type === `Collection`;
}
function cf(e, t) {
  return sf(t) && Uu(t.data) ? kd(t.data) : t;
}
function lf(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, cf) + n;
}
function uf(e) {
  let { activeLocale: t } = dr();
  return Mw.get(e, t).use();
}
function df(e) {
  return uf({ ...e, select: [] }).length;
}
function ff(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(tt(e) || B(e)))
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
function pf(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function mf() {
  return new Set();
}
function hf(e) {
  let t = Ni(mf),
    n = Ni(mf);
  return (
    as(() => () => pf(n, t)),
    c(() => () => pf(n, t), []),
    c(() => {
      pf(n, t);
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
function gf(e, t, n) {
  return r.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function _f(e) {
  for (let [t, n] of Object.entries(e)) if (q.matchMedia(n).matches) return t;
}
function vf(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && q.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function yf(e, t, n = !0) {
  let r = d(bb),
    i = Ra(),
    a = E(!i && ga() ? (_f(t) ?? e) : e),
    s = E(n && r ? e : a.current),
    l = po(),
    u = ce(),
    f = o(
      (e) => {
        if (e !== a.current || e !== s.current) {
          let t = function () {
            ((a.current = s.current = e),
              A(() => {
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
    Ey(() => {
      i && f(e);
    }, [e, i, f]),
    Ey(() => {
      !n || r !== !0 || f(a.current);
    }, []),
    c(() => {
      let e = [];
      for (let [n, r] of Object.entries(t)) {
        let t = q.matchMedia(r),
          i = (e) => {
            e.matches && f(n);
          };
        (bf(t, i), e.push([t, i]));
      }
      return () => e.forEach(([e, t]) => xf(e, t));
    }, [t, f]),
    [a.current, s.current]
  );
}
function bf(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function xf(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function Sf(e) {
  setTimeout(e, 1);
}
function Cf(e) {
  let t = new Set(),
    n = vf(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (wf(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (ch ? q.requestIdleCallback : Sf)(() => {
    document.querySelector(Nw)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (wf(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    Tf(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function wf(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function Tf(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function Ef() {
  let e = Ni(() => new Map());
  return r.useCallback((t) => {
    let n = e.get(t);
    if (n) return n;
    let r = w();
    return (e.set(t, r), r);
  }, []);
}
function Df(e, t) {
  if (e[t]) return e[t];
  if (!(t in e)) return e.default;
}
function Of(e, t) {
  if (La()) return;
  let n = r.useRef(!0),
    i = r.useRef(t);
  (as((t, r) => {
    let a = t && !r;
    if (!n.current && a) {
      let t = Df(i.current, e);
      t && t();
    }
    n.current = a;
  }, []),
    r.useEffect(() => {
      if (n.current) {
        let t = Df(i.current, e);
        t && t();
      }
    }, [e]));
}
function kf(e, t) {
  e !== !1 &&
    je.render(() => {
      let e = document.documentElement.style;
      t ? e.setProperty(`overflow`, `hidden`) : e.removeProperty(`overflow`);
    });
}
function Af({ blockDocumentScrolling: e = !0, dismissWithEsc: t = !1 } = {}) {
  let [n, i] = r.useState(!1),
    a = r.useCallback(
      async (t) => {
        (await mn({ priority: `user-blocking`, continueAfter: `paint` }), A(() => i(t)), kf(e, t));
      },
      [e]
    );
  return (
    r.useEffect(
      () => () => {
        mn({ priority: `user-blocking`, continueAfter: `paint` }).then(() => {
          kf(e, !1);
        });
      },
      [e]
    ),
    r.useEffect(() => {
      if (!t) return;
      let e = (e) => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), a(!1));
      };
      return (q.addEventListener(`keydown`, e), () => q.removeEventListener(`keydown`, e));
    }, [t, a]),
    [n, a]
  );
}
function jf(e) {
  return B(e) && Pw in e && e.page !== void 0;
}
function Mf(e, t, n, r = !1) {
  let [i, a] = re(),
    s = Math.ceil(e / t),
    [l, u] = p(globalThis?.history?.state?.paginationInfo?.[n]?.currentPage ?? 1),
    d = E(l),
    m = f(() => ({ currentPage: l, totalPages: s, isLoading: i }), [l, s, i]);
  c(() => {
    or(n, m);
  }, [n, m]);
  let h = fl();
  return {
    paginationInfo: m,
    loadMore: o(
      async () =>
        h ||
        d.current >= s ||
        (await mn({ priority: `user-blocking`, continueAfter: `paint` }), d.current >= s)
          ? void 0
          : ((e) => {
              e(() => {
                u((e) => {
                  let t = Math.min(e + 1, s);
                  return ((d.current = t), t);
                });
              });
            })(r ? a : A),
      [s, r]
    ),
  };
}
function Nf(e, t, n) {
  let { paginationInfo: r, loadMore: i } = Mf(df(e), t, n, !0);
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
function Pf(e, t) {
  return `${e}-${t}`;
}
function Ff(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (V(r !== void 0, `nextVariant should be defined`), r);
}
function If(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function Lf(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function Rf(e, t) {
  return t[e] || `framer-v-${e}`;
}
function zf(e, t, n) {
  return e && n.has(e) ? e : t;
}
function Bf() {
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
function Vf() {
  let e = E(),
    t = E(!1),
    n = E(),
    r = d(rb);
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
        e.current = Zo(r, `undefined`, a.current, null, (e) => {
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
function Hf(e) {
  let t = Bf(),
    n = Vf();
  return o(
    (r, i = !1) => {
      if (sh) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function Uf() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (Lw = () => {
        (e(), (t = void 0));
      }));
  });
}
function Wf(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (Iw = Uf()));
}
function Gf() {
  (performance.mark(`click-received-listener`), (Iw = void 0), Lw?.(), (Lw = void 0));
}
function Kf(e = !1) {
  c(() => {
    e &&
      (document.addEventListener(`pointerup`, Wf, !0),
      document.__proto__.addEventListener.call(document, `click`, Gf, !0));
  }, [e]);
}
function qf({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: s = {},
  ref: c,
}) {
  let l = po(),
    u = fl(),
    d = Ni(() => new Set(i)),
    { yieldOnTap: p } = bh();
  Kf(p);
  let m = Hf(c),
    h = E({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: zf(e, t, d),
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
        o = zf(e, a, d),
        s = Lf(i?.[o], t, n, !1, r);
      return [o, s ? Pf(o, s) : void 0];
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
          Iw &&
          (performance.mark(`wait-for-tap-start`),
          await Iw,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await mn({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: u,
          isPressed: d,
          isHoveredHasUpdated: f,
          isPressedHasUpdated: _,
        } = h.current;
        if (u || f || d || _) {
          A(l);
          return;
        }
        m(() => A(l), i);
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
        _(i, a, n, e === Fw ? Ff(r || [], i || n) : e, t, !0);
      },
      [_]
    ),
    b = o(() => {
      let { baseVariant: e } = h.current;
      ((h.current.loadedBaseVariant[e] = !0), m(() => A(l), !0));
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
      isError: O,
      loadedBaseVariant: ee,
    } = h.current,
    k = gf(h.current.baseVariant, h.current.gestureVariant, a);
  return f(() => {
    let e = [];
    x !== C && e.push(x);
    let t = w?.[x]?.loading,
      n = !O && !u && !!t && !ee[x],
      r = n ? Pf(x, `loading`) : S;
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
        transition: If(h.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: k,
        gestureHandlers: a,
        classNames: Xs(Rf(x, s), Lf(i, T, D, n, O)),
      }
    );
  }, [x, S, T, D, ee, k, y, C, w, v, b, s]);
}
function Jf(e, { scopeId: t, nodeId: n, override: i, inComponentSlot: a }) {
  if (!Wc()) return i(e);
  let o = Yf(e, i),
    s = !1;
  function c(r, i) {
    let c = qc();
    if (tl(t, c?.scopeId, c?.level, a ?? !1))
      return o.status === `success`
        ? b(yg.Provider, {
            value: n,
            children: b(Gc, {
              getErrorMessage: Qc.bind(null, t, n),
              fallback: b(e, { ...r, ref: i }),
              children: b(o.Component, { ...r, ref: i }),
            }),
          })
        : ((s ||= (Uc(o.error), Uc(Qc(t, n)), Hc(o.error), !0)), b(e, { ...r, ref: i }));
    if (o.status === `success`)
      return b(yg.Provider, { value: n, children: b(o.Component, { ...r, ref: i }) });
    throw o.error;
  }
  return r.forwardRef(c);
}
function Yf(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function Xf(e) {
  return e.weight !== void 0 && e.style !== void 0;
}
function Zf(e, t) {
  let n = t === `normal` ? `Regular` : `Italic`;
  return e === 400 ? n : t === `normal` ? `${Kw[e]}` : `${Kw[e]} ${n}`;
}
function Qf() {
  return s === void 0 ? {} : Jw || ((Jw = $f()), Jw);
}
function $f() {
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
function ep(e) {
  return e.key + e.extension;
}
function tp(e) {
  return `${Qf().userContent}/assets/${e}`;
}
function np(e) {
  return tp(ep(e));
}
function rp(e, t) {
  return t ? `${e} ${Yw}` : e;
}
function ip(e, t) {
  switch (t) {
    case `custom`:
      throw Error(`Custom fonts are not supported`);
    default:
      return rp(e.name, e.isVariable);
  }
}
function ap(e) {
  return !!(e && Array.isArray(e));
}
function op(e) {
  if (!e || !Array.isArray(e)) return;
  let t = [];
  for (let n of e)
    cp(n) &&
      t.push({
        tag: n.tag,
        name: n.name,
        minValue: n.minValue,
        maxValue: n.maxValue,
        defaultValue: n.defaultValue,
      });
  return t;
}
function sp(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`coverage` in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
  );
}
function cp(e) {
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
function lp(e) {
  return Qw[up(e)];
}
function up(e) {
  return e.toLowerCase().replace(/\s+/gu, `-`);
}
function dp(e) {
  return (
    (e = e.toLowerCase()),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`) ? `italic` : `normal`
  );
}
function fp(e, t) {
  return { ...pp(e, t), ...mp(e, t) };
}
function pp(e, t) {
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
function mp(e, t) {
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
function hp(e) {
  return !!e.variationAxes;
}
function gp(e) {
  return _p(e) || vp(e);
}
function _p(e) {
  return e.startsWith(tT);
}
function vp(e) {
  return e.startsWith(eT);
}
function yp(e, t) {
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
function bp(e) {
  let { font: t } = e,
    n = t.fontFamily,
    r = Array.isArray(t.variationAxes);
  if (r && n.toLowerCase().includes(`variable`)) return n;
  let i = r ? Yw : t.fontSubFamily.trim();
  return i === `` ? n : `${n} ${i}`;
}
function xp({ fontFamily: e, fontSubFamily: t, variationAxes: n, faceDescriptors: r }) {
  let i = t.trim() || `Regular`,
    a = i.toLocaleLowerCase().includes(`variable`),
    o = op(n) && !a ? `Variable ${i}` : i,
    s = `normal`,
    c = 400;
  return (
    r && ((c = r.weight), (s = r.italic || r.oblique ? `italic` : `normal`)),
    { family: e, variant: o, weight: c, style: s }
  );
}
function Sp(e) {
  if (!(!e.weight || !e.style))
    return { weight: e.weight, style: e.style, isVariable: hp(e), selector: e.selector };
}
function Cp(e) {
  let t = e.fonts.map((e) => Sp(e)).filter((e) => e !== void 0);
  for (let n of e.fonts) {
    let e = Sp(n);
    if (!e) continue;
    let r = fp(e, t);
    ((n.selectorVariable = r.variantVariable?.selector),
      (n.selectorVariableItalic = r.variantVariableItalic?.selector),
      (n.selectorBold = r.variantBold?.selector),
      (n.selectorBoldItalic = r.variantBoldItalic?.selector),
      (n.selectorItalic = r.variantItalic?.selector));
  }
}
function wp(e) {
  return e.ownerTypes.includes(`team`) ? `team` : `project`;
}
async function Tp(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-VQ4ZP4WR.JCOVo371.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-Q7VOJ3QT.CkpB6Zoj.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
async function Ep(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-TRAPONMP.KpHbXIdF.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-LJWOE5KG.CxUWduPn.mjs`)).default;
    case `framer`:
      return (await import(`./framer-font-G73BNA7N.C6eAH2lE.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
function Dp(e) {
  return e
    .split(`,`)
    .map((e) => e.trim().toLowerCase())
    .filter(Op);
}
function Op(e) {
  return rT.includes(e);
}
function kp(e) {
  let t = {
      serif: `serif`,
      sans: `sans-serif`,
      slab: `slab`,
      display: `display`,
      handwritten: `handwriting`,
      script: `handwriting`,
    },
    n = Dp(e)[0];
  return n && t[n];
}
function Ap(e) {
  let t = {
    serif: `serif`,
    'sans-serif': `sans-serif`,
    display: `display`,
    handwriting: `handwriting`,
    monospace: `monospace`,
  };
  if (e) return t[e];
}
function jp(e, t) {
  return e.reduce((e, n) => ((e[t(n)] = n), e), {});
}
async function Mp(e, t, n = 0) {
  let { family: r, url: i, stretch: a, unicodeRange: o } = e,
    s = e.weight,
    c = e.style || `normal`,
    l = `${r}-${c}-${s}-${i}`;
  if (!yT.has(l) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: R(s) ? s : s?.toString(),
        style: c,
        stretch: a,
        unicodeRange: o,
      }),
      d = u
        .load()
        .then(() => (t.fonts.add(u), Np(r, c, s)))
        .catch((l) => {
          if (l.name !== `NetworkError`) throw l;
          if (n < _T) return Mp(e, t, n + 1);
          throw new vT(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: c, weight: s, url: i, stretch: a, unicodeRange: o })}`
          );
        });
    yT.set(l, d);
  }
  await yT.get(l);
}
async function Np(e, t, n) {
  let r = `${e}-${t}-${n}`;
  if (!bT.has(r)) {
    let i = new hT.default(e, { style: t, weight: n }).load(null, gT);
    bT.set(r, i);
  }
  try {
    await bT.get(r);
  } catch {
    throw new vT(
      `Failed to check if font is ready (${gT}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`
    );
  }
}
function Pp(e) {
  try {
    if (e === `framer`) return Fp(ST) ? ST : void 0;
    {
      let t = (async () => {
        switch (e) {
          case `google`:
            return (await import(`./google-LLNWFNMY.Cx2SB-e8.mjs`)).default;
          case `fontshare`:
            return (await import(`./fontshare-MHXFPDHS.BJ3gP313.mjs`)).default;
          default:
            H(e);
        }
      })();
      return Fp(t) ? t : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function Fp(e) {
  return B(e) && Object.values(e).every(Lp);
}
function Ip(e) {
  return B(e) && R(e.tag);
}
function Lp(e) {
  return Array.isArray(e) && e.every(Ip);
}
function Rp(e, t) {
  c(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (s.addEventListener(`keyup`, n), () => s.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function zp(e, t, n, r) {
  let i = s.innerHeight - r,
    a = Math.min(s.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function Bp(e, { width: t, height: n }) {
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
function Vp() {
  return document.getElementById(oS) ?? document.getElementById(aS) ?? document.body;
}
function Hp(e, t) {
  return z(e) ? e : (t ?? 0);
}
function Up(e) {
  return Hp(e?.paddingTop, e?.padding) + Hp(e?.paddingBottom, e?.padding);
}
function Wp(e) {
  return Hp(e?.paddingLeft, e?.padding) + Hp(e?.paddingRight, e?.padding);
}
function Gp(e) {
  let t = E(e);
  return ((t.current = e), o((...e) => t.current(...e), []));
}
function Kp(e, t) {
  if (!e || !t || !t.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - Wp(e)}px)`,
      srcSet: Wa(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function qp(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in TT)) continue;
    let n = TT[t],
      r = e[t];
    if (!(!z(n) || !z(r)) && n !== r) return !0;
  }
  return !1;
}
function Jp(e) {
  let t = be.get(e.current);
  if (!t) return !1;
  if (qp(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (qp(e.latestValues)) return !0;
  return !1;
}
function Yp(e) {
  return _(function ({ lightbox: t, lightboxClassName: n, onClick: r, ...i }, a) {
    let s = d(we),
      u = d(Rw),
      m = !!u,
      h = E(null),
      g = a ?? h,
      _ = E(),
      v = f(() => Kp(t, i.background), [t, i.background]),
      [x, S] = p(!1),
      [C, w] = p(),
      O = o(() => {
        if (t) {
          if (x) {
            A(() => {
              S(!0);
            });
            return;
          }
          je.read(() => {
            if (!g.current) return;
            let e = getComputedStyle(g.current),
              n =
                g.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(g.current, `::after`)
                  : void 0,
              r = g.current.offsetWidth ?? 1,
              i = g.current.offsetHeight ?? 1,
              a = Jp(g) || m ? { duration: 0 } : t.transition;
            A(() => {
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
      ee = C?.aspectRatio ?? 1,
      te = Gp(() => {
        if (!t || !v || !v.src) return;
        let e = _.current?.[v.src];
        if (e) return e;
        let n = zp(ee, t.maxWidth, Wp(t), Up(t)),
          r = Bp(v, { width: n, height: n * ee });
        return ((_.current = { [v.src]: r }), r);
      }),
      ne = o(
        async (e) => {
          (r?.(e), !(x || !t || !v) && (await te(), O()));
        },
        [r, O, x, v, t, te]
      ),
      re = o((e) => {
        (e?.stopPropagation(),
          A(() => {
            S(!1);
          }));
      }, []);
    (Rp(x, re),
      c(() => {
        if (!t) return;
        let e;
        function n() {
          e = setTimeout(() => {
            te();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = g.current;
        return (
          i?.addEventListener(`mouseenter`, n),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, te),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, n),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, te));
          }
        );
      }, [te, g, t]));
    let j = y(),
      M = C?.transition ?? i.transition ?? s.transition,
      ie = C?.borderRadius,
      ae = C?.imageRendering,
      N = C?.filter,
      oe = C?.borderTop,
      se = C?.borderRight,
      ce = C?.borderBottom,
      le = C?.borderLeft,
      ue = C?.borderStyle,
      de = C?.borderColor,
      fe = !!(oe || se || ce || le || ue || de),
      P = fe
        ? {
            '--border-top-width': oe,
            '--border-right-width': se,
            '--border-bottom-width': ce,
            '--border-left-width': le,
            '--border-style': ue,
            '--border-color': de,
          }
        : void 0,
      pe = { [Gx]: i.id },
      me = Hp(t?.paddingTop, t?.padding),
      F = Hp(t?.paddingBottom, t?.padding),
      he = Hp(t?.paddingLeft, t?.padding),
      ge = Hp(t?.paddingRight, t?.padding),
      I = C?.borderRadius ? { ...i.style, borderRadius: C.borderRadius } : i.style,
      ve = x ? (i.layoutDependency ? `${i.layoutDependency}-open` : `open`) : i.layoutDependency,
      ye = m && x ? void 0 : (i.layoutId ?? (t ? j : void 0));
    return D(k, {
      children: [
        b(e, {
          ...i,
          style: I,
          onClick: ne,
          layoutId: ye,
          ref: g,
          layoutDependency: ve,
          transition: M,
        }),
        b(Le, {
          onExitComplete: () => {
            A(() => {
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
                  D(k, {
                    children: [
                      b(_e.div, {
                        ...pe,
                        className: n,
                        onClick: re,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: t.zIndex,
                          backgroundColor: t.backdrop ?? `transparent`,
                        },
                        transition: M,
                        initial: ET,
                        animate: DT,
                        exit: ET,
                      }),
                      b(_e.div, {
                        ...pe,
                        className: n,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${me}px ${ge}px ${F}px ${he}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: t.zIndex,
                        },
                        children: b(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: ee,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: t.maxWidth,
                          },
                          children: b(_e.div, {
                            layoutId: ye,
                            transition: M,
                            onClick: O,
                            className: `framer-lightbox-container`,
                            'data-border': fe,
                            style: {
                              aspectRatio: ee,
                              borderRadius: ie,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: ae,
                              filter: N,
                              ...P,
                            },
                            children: b($a, { image: v, alt: v.alt, draggable: i.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  Vp()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function Xp(e, t) {
  return AT && !t
    ? Document.parseHTMLUnsafe(e)
    : ((kT ??= new DOMParser()), kT.parseFromString(e, t ?? `text/html`));
}
function Zp(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function Qp(e, t, n, r) {
  return e.replace(jT, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = _l(u.replace(/&amp;/gu, `&`));
    if (!d || !d.target) return e;
    let f = t(d.target);
    if (!jf(f) || !jf(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Pt(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = yl(u);
    if (!_ || R(_)) return e;
    Ll(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(cS, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = yn(m, v)), i + o + `"${Zp(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function $p(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function em(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function tm(e, t, n) {
  let r = E([]);
  $p(r.current, e) ||
    ((r.current = e),
    wT.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || Y.current() !== Y.canvas || (e > 0 && yo(n.current));
    }));
}
function nm() {
  return { current: null };
}
async function rm(e, t) {
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
function im(e) {
  return e in FT;
}
function am(e, t) {
  let n = {};
  for (let r in e) {
    if (!im(r)) continue;
    let i = e[r],
      a = FT[r];
    tt(i) || tt(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function om(e, t = `character`, n, r, i) {
  if (r) {
    let t = nm();
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
                children: e.match(IT)?.map((e, t) => {
                  let r = nm();
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
          o = nm();
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
function sm(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      H(t);
  }
}
function cm(e) {
  let t = [];
  return (
    z(e.x) && t.push(`translateX(${e.x}px)`),
    z(e.y) && t.push(`translateY(${e.y}px)`),
    z(e.scale) && t.push(`scale(${e.scale})`),
    z(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    z(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    z(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    z(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    z(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function lm(e, t, n, r) {
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
                transform: r ? void 0 : cm(n.effect),
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
                transform: r ? void 0 : cm(n.effect),
              };
      }
    default:
      H(i);
  }
}
function um(e, t, n) {
  let r = Ni(() => new Set()),
    i = La(),
    a = n || !i,
    o = Xe(),
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
            fm(
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
          H(t);
      }
    }
    switch (l) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? Ae(n, e, { amount: d ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = u?.ref?.current;
        return t
          ? Ae(t, e, {
              amount: d ?? 0,
              root: document,
              margin: u?.offset ? `${u.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        H(l);
    }
  }, [a, r, n, t, u, d, l]);
  let p = !!e,
    m = e ? sm(e) : void 0;
  return f(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !p)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = s.current,
          c = lm(a, n || dm(e, t, i), s.current.effect, o);
        return {
          text: (e) => om(e, m, r, o, c),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = nm();
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
            fm(m, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            H(t);
        }
      },
    }),
    [a, p, r, n, m]
  );
}
function dm(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function fm(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = am(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await pm(n, u);
      if (
        e === null ||
        (ke(e, l, { ...r, restDelta: 0.001, delay: F(r?.delay ?? 0, { startDelay: i }) }).then(() =>
          s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        ke(e, o ? { opacity: t.opacity } : t, {
          ...r,
          restDelta: 0.001,
          delay: F(r?.delay ?? 0, { startDelay: i }),
        });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await rm(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (je.read(() => {
          ((e = mm(n)),
            e.length !== 0 &&
              je.update(() => {
                let t = e.map((e, t) =>
                  ke(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
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
          ke(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      H(e);
  }
}
async function pm(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await rm(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function mm(e) {
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
function hm(e) {
  return e.type === l;
}
function gm(e) {
  return e.type === `br`;
}
function _m(e, t, n, r, a = {}, o, s = hm(e) ? -1 : 0) {
  let c = i.toArray(e.props.children);
  tt(n) || (c = c.slice(0, 1));
  let l = !0;
  c = c.map((e) => {
    if (((!S(e) || !gm(e)) && (l = !1), S(e))) return _m(e, t, n, r, a, o, s + 1);
    let i = tt(n) ? e : n;
    return R(i) && o ? o.text(i) : i;
  });
  let { 'data-preset-tag': d, ...f } = e.props;
  if (R(e.type) || Ye(e.type)) {
    let n = Ne(e.type) || e.type,
      i = d || n,
      u = R(i) ? t?.[i] : void 0;
    ((f.className = Xs(`framer-text`, f.className, u)),
      o && s === 0 && !l && Object.assign(f, o.props(f.style)));
    let p = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      m = t?.anchor;
    if (p && m) {
      let e = vm(c, a);
      f.id = e;
      let t = Xs(`framer-text`, m),
        n = b(`a`, { href: `#${e}`, className: t, children: c });
      ((f.style = { ...(f.style ?? {}), scrollMarginTop: r }), (c = [n]));
    }
  }
  return u(e, f, ...c);
}
function vm(e, t) {
  let n = lr(e.map(ym).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function ym(e) {
  return R(e) || z(e)
    ? e.toString()
    : S(e)
      ? ym(e.props.children)
      : Array.isArray(e)
        ? e.map(ym).join(``)
        : ``;
}
function bm(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = Kr(n.x, n.y),
    i = N_(Kr(0.5, 0.5), r),
    a = X.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: Kr.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  V(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !Kr.isEqual(e, s) && !Kr.isEqual(e, c));
  V(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = N_.intersection(i, N_(s, c)),
    f = N_.intersection(i, N_(l, u));
  return (V(d && f, `linearGradientLine: Must have a start and end point.`), N_(d, f));
}
function xm(e, t) {
  let n = bm(e.angle),
    r = Oo(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = N_.pointAtPercentDistance(n, i),
    s = N_.pointAtPercentDistance(n, a),
    c = Ke([i, a], [0, 1]);
  return {
    id: `id${t}g${Hy.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: Iy.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function Sm(e, t) {
  return {
    id: `id${t}g${Wy.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: Oo(e).map((t) => ({
      color: t.value,
      alpha: Iy.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function Cm(e) {
  if (!R(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return z(parseFloat(t));
}
function wm(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return z(n) ? n : 50;
}
function Tm(e) {
  return Cm(e) ? wm(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function Em(e) {
  return Cm(e) ? wm(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function Dm(e, t, n, r) {
  if (((e = n_.get(e, `#09F`)), !wy.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
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
        (u = (t.width - c) * Tm(e.positionX) + f),
        (d = (t.height - l) * Em(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * Em(e.positionY)))
        : ((n = g), (u = (1 - g) * Tm(e.positionX))),
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
function Om(e) {
  return e.startsWith(`data:${WT}`);
}
function km(e, t) {
  if (/^\w+:/u.test(e) && !Om(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = Y.current() === Y.export;
  return _y.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function Am(e) {
  try {
    let t = Xp(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function jm(e, t) {
  Nm(e, Mm(t));
}
function Mm(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function Nm(e, t) {
  (Pm(e, t),
    Array.from(e.children).forEach((e) => {
      Nm(e, t);
    }));
}
function Pm(e, t) {
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
function Fm(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (ZT[t[2]] || 1));
}
function Im(e) {
  let t = Fm(e.getAttribute(`width`)),
    n = Fm(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function Lm(e) {
  return e.indexOf(`image`) >= 0;
}
function Rm(e) {
  return e.indexOf(`var(--`) >= 0;
}
function zm(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function Bm(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? q,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = XT.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && Yi(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    U(s) &&
    U(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l && l.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function Vm(e) {
  return e > nE ? `lazy` : void 0;
}
function Hm(e, t, n) {
  let r = Gm(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function Um(e) {
  return e ? (e.fonts ?? Tr()) : Tr();
}
function Wm(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : Gm(e);
}
function Gm(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    Km(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(qm) })
      : t.fonts.push(qm(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function Km(e) {
  return rE in e;
}
function qm(e) {
  let t = Jm(e) || Ym(e) ? e : Xm(e);
  return Ym(t) ? t : Zm(t);
}
function Jm(e) {
  return `source` in e;
}
function Ym(e) {
  return `cssFamilyName` in e;
}
function Xm(e) {
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
function Zm(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${Yw}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function Qm(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
var $m,
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
  q,
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
  f_,
  p_,
  m_,
  h_,
  J,
  g_,
  __,
  v_,
  y_,
  b_,
  x_,
  S_,
  C_,
  w_,
  T_,
  Y,
  E_,
  D_,
  O_,
  k_,
  A_,
  j_,
  M_,
  N_,
  X,
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
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  Z,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  Q,
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
  $,
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
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  QT,
  $T,
  eE,
  tE,
  nE,
  rE,
  iE = e(() => {
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
      Ce(),
      Re(),
      a(),
      ee(),
      v(),
      ($m = le({
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
      (eh = le({
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
      (th = le({
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
      (nh = le({
        '../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js'(e, t) {
          t.exports = th();
        },
      })),
      (rh = le({
        '../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'(e, t) {
          var n = nh(),
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
      (ih = le({
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
      (ah = () => {}),
      (oh = s !== void 0),
      (sh = (() =>
        oh &&
        (g.webdriver ||
          /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(g.userAgent)))()),
      (ch = oh && typeof s.requestIdleCallback == `function`),
      (lh = (() => (ch ? s.requestIdleCallback : setTimeout))()),
      (uh = new Map()),
      (dh = oh ? void 0 : new Set()),
      (fh = `preload`),
      (ph = Object.keys),
      (mh = `equals`),
      (hh = (() => r.createContext({}))()),
      (gh = (() => r.createContext({}))()),
      (_h = []),
      (vh = r.createContext(void 0)),
      (vh.displayName = `LibraryFeaturesContext`),
      (yh = (() => vh.Provider)()),
      (bh = () => r.useContext(vh) ?? {}),
      (xh = `default`),
      (Sh = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (Ch = class e {
        constructor(e, t) {
          ((this.resolver = e),
            (this.cacheHash = t),
            M(this, `promiseState`, Sh.Pending),
            M(this, `preloadPromise`),
            M(this, `value`),
            M(this, `reason`),
            M(this, `read`, () => {
              if (this.promiseState === Sh.Fulfilled) return this.value;
              throw this.promiseState === Sh.Rejected
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
          return this.promiseState === Sh.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === Sh.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== Sh.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && dh !== void 0 && dh.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = Sh.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = Sh.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && uh.has(this.cacheHash) ? uh.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!st(n)) {
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
      (wh = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (Th = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (Eh = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (Dh = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`),
      (Oh = -1),
      (kh = -2),
      (Ah = -3),
      (jh = -4),
      (Mh = -5),
      (Nh = -6),
      (q = oh
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
      (Ph = 2),
      (Fh = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (Lh = class {
        constructor() {
          (M(this, `payload`, $t()), M(this, `isEmpty`, !0));
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
              return Xt(this.payload);
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
      (Rh = (() => (oh ? void 0 : new Lh()))()),
      (zh = (() => Fh.CollectionUtilsCache)()),
      (Bh = new WeakMap()),
      (Vh = j(void 0)),
      (Hh = class {
        constructor(e, t) {
          ((this.collectionId = t),
            M(this, `module`),
            M(this, `cacheMap`, new Map()),
            (this.module = new Ch(async () => {
              try {
                let t = await e();
                return (V(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(lt(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        callUtilsMethod(e, t, n) {
          let r = an(n),
            i = on(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (Rh !== void 0) {
              if (st(e)) return e.then((e) => (Rh.set(zh, i, e), e));
              Rh.set(zh, i, e);
            }
            return e;
          }
          if (nn(zh, i)) {
            let e = rn(zh, i);
            return (this.cacheMap.set(i, new Ch(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = st(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e](t, n)) : a?.[e](t, n);
          } catch (e) {
            (console.error(lt(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (Rh !== void 0 && Rh.set(zh, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new Ch(() =>
            s
              .then((e) => (Rh !== void 0 && Rh.set(zh, i, e), e))
              .catch((e) => {
                console.error(lt(`Failed to call CollectionUtils method.`, e));
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
      (Uh = (() => q.scheduler && `yield` in q.scheduler)()),
      (Wh = (() => q.scheduler && `postTask` in q.scheduler)()),
      (Gh = new Set()),
      (Kh = !sh),
      (qh = 46),
      (Jh = 47),
      (Yh = (e, t) => e.charCodeAt(t)),
      (Xh = (e, t) => e.lastIndexOf(t)),
      (Zh = (e, t, n) => e.slice(t, n)),
      (Qh = !1),
      ($h = `/`),
      (eg = (e) => e === Jh),
      (tg = new Set([`/404.html`, `/404`, `/404/`])),
      (ng = RegExp(`:([a-z]\\w*)`, `gi`)),
      (rg = `framer_variant`),
      (ig = r.createContext({ global: void 0, routes: {} })),
      (ag = 10),
      (og = 1e4),
      (sg = (e) => `--view-transition-${e}`),
      (cg = {
        circle: {
          makeKeyframe: (e, t) => {
            let { x: n, y: r } = Pn(e);
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
              `${sg(`conic-offset`)}: ${r}%;`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${sg(`conic-offset`)})`,
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
        @property ${sg(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
        },
        inset: {
          makeKeyframe: (e, t) => {
            let { x: n, y: r } = Pn(e),
              i = s.innerHeight - r,
              a = s.innerWidth - n;
            return t === `start`
              ? `clip-path: inset(${r}px ${a}px ${i}px ${n}px round ${e.round}px);`
              : `clip-path: inset(0 round 0);`;
          },
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = Nn(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${sg(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${sg(`blinds-width`)})`,
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
            @property ${sg(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = (t === `start` && n === `exit`) || (t === `end` && n === `enter`) ? 1 : 0;
            return `${sg(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${sg(`wipe-offset`)})`,
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
            @property ${sg(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (lg = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (ug = `view-transition-styles`),
      (dg = {
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
      (fg = () => {}),
      (mg = () => {
        (pg ||
          ((pg = document.createElement(`div`)),
          pg.setAttribute(`aria-live`, `assertive`),
          pg.setAttribute(`aria-atomic`, `true`),
          (pg.style.position = `absolute`),
          (pg.style.transform = `scale(0)`),
          document.body.append(pg)),
          setTimeout(() => {
            pg.textContent = document.title;
          }, 60));
      }),
      (hg = !0),
      (gg = (() => {
        if (g === void 0) return !1;
        let e = g.userAgent,
          t = e.indexOf(`Chrome/`),
          n = +e.slice(t + 7, e.indexOf(`.`, t));
        return n > 101 && n < 128;
      })()),
      (_g = (() => oh && typeof s.navigation?.back == `function`)()),
      (vg = /[\s_?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (yg = r.createContext(null)),
      (bg = async () => {}),
      (xg = { activeLocale: null, locales: [], setLocale: bg }),
      (Sg = (() => {
        let e = r.createContext(xg);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (Cg = (() => {
        let e = r.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (wg = (() => {
        let e = j({ urlSearchParams: new URLSearchParams(), triggerUpdate: () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (Tg =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (Eg = (e) => {
        e.target?.closest?.(`#main`) &&
          (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`));
      }),
      (Dg = !1),
      (Wg = [gr]),
      (Ug = [gr]),
      (Hg = [gr]),
      (Vg = [gr]),
      (Bg = [gr]),
      (zg = [gr]),
      (Rg = [gr]),
      (Lg = [gr]),
      (Ig = [gr]),
      (Fg = [gr]),
      (Pg = [gr]),
      (Ng = [gr]),
      (Mg = [gr]),
      (jg = [gr]),
      (Ag = [gr]),
      (kg = [gr]),
      (Og = [gr]),
      (Kg = class {
        constructor() {
          (Oe(Gg, 5, this),
            M(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            M(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            M(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            M(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            M(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            M(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            M(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            _r(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            _r(
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
            _r(
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
            _r(
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
            _r(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            _r(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            _r(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          _r(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          _r(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (Gg = fe(null)),
      P(Gg, 1, `markRenderStart`, Wg, Kg),
      P(Gg, 1, `markRenderEnd`, Ug, Kg),
      P(Gg, 1, `markUseInsertionEffectsStart`, Hg, Kg),
      P(Gg, 1, `markUseInsertionEffectRouterStart`, Vg, Kg),
      P(Gg, 1, `markUseInsertionEffectsEnd`, Bg, Kg),
      P(Gg, 1, `markUseLayoutEffectsStart`, zg, Kg),
      P(Gg, 1, `markRouterUseLayoutEffectStart`, Rg, Kg),
      P(Gg, 1, `markUseLayoutEffectsEnd`, Lg, Kg),
      P(Gg, 1, `markUseEffectsStart`, Ig, Kg),
      P(Gg, 1, `markUseEffectsRouterStart`, Fg, Kg),
      P(Gg, 1, `markUseEffectsAreSynchronous`, Pg, Kg),
      P(Gg, 1, `markUseEffectsEnd`, Ng, Kg),
      P(Gg, 1, `markRafStart`, Mg, Kg),
      P(Gg, 1, `markRafEnd`, jg, Kg),
      P(Gg, 1, `markLayoutStylePaintEnd`, Ag, Kg),
      P(Gg, 1, `measureMutationEffects`, kg, Kg),
      P(Gg, 1, `measureUnattributedHydrationOverhead`, Og, Kg),
      Ve(Gg, Kg),
      (Jg = !1),
      (Yg = { Start: Sr, End: Cr }),
      (Xg = class extends Error {}),
      (Zg = class extends x {
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
          if (!(this.state.error instanceof Xg)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return wr(e, t);
        }
      }),
      (Qg = Object.freeze([])),
      (e_ = new Set()),
      (t_ = class {
        constructor() {
          (M(this, `observers`, new Set()), M(this, `transactions`, {}));
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
      (n_ = (() => {
        function e(e) {
          return (
            Br(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            Vr(e) ? e : new a_(e)
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
          (e.get = (e, t) => (e == null ? t : Vr(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              Vr(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (r_ = `onUpdate`),
      (i_ = `finishTransaction`),
      (a_ = class {
        constructor(e) {
          ((this.value = e), M(this, `observers`, new t_()));
        }
        static interpolationFor(e, t) {
          if (Vr(e)) return Hr(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (Vr(e) && (e = e.get()), (this.value = e));
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
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Wr(e.x, t.x), y: Wr(e.y, t.y) })),
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
      })((Kr ||= {})),
      (o_ = {
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
      (s_ = new ((() => $m().Hsluv)())()),
      (c_ = (() => {
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
      (l_ =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (u_ = (e) => {
        let { r: t, g: n, b: r, a: i } = gi(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (d_ = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        vi({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (f_ = (e) => {
        let { r: t, g: n, b: r, a: i } = gi(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (p_ = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        vi({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (m_ = class e {
        constructor(e) {
          (M(this, `format`, `p3`),
            M(this, `r`),
            M(this, `g`),
            M(this, `b`),
            M(this, `a`),
            (this.r = e.r ?? 0),
            (this.g = e.g ?? 0),
            (this.b = e.b ?? 0),
            (this.a = e.a ?? 1));
        }
        hsv() {
          return yi(this);
        }
        rgb() {
          return Ci(this);
        }
        hsl() {
          return ni(this.r, this.g, this.b);
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
              return new e(xi(t));
            case `srgb`:
              return new e(Si(xi(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            Si({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = J(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = mi(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!R(t) || !J.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (h_ = new Map()),
      (J = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = h_.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (h_.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = wi(t, n, r, i);
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
          (e.isColorString = (e) => (typeof e == `string` ? di(e) !== !1 : !1)),
          (e.isColorObject = (e) =>
            B(e) &&
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
          (e.toHex = (e, t = !1) => ti(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => (typeof e == `string` ? m_.isP3String(e) : !1)),
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
          (e.toHusl = (e) => ({ ...Zr(e.r, e.g, e.b), a: e.roundA })),
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
            let t = ai(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = ai(e.r, e.g, e.b),
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
            let t = ti(e.r, e.g, e.b, !0);
            for (let e of Object.keys(o_)) if (o_[e] === t) return e;
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
                r: qr(i, [0, 1], [t.r, r.r], a),
                g: qr(i, [0, 1], [t.g, r.g], a),
                b: qr(i, [0, 1], [t.b, r.b], a),
                a: qr(i, [0, 1], [t.a, r.a], a),
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
                h: qr(i, [0, 1], [u, u + f], a),
                s: qr(i, [0, 1], [c.s, l.s], a),
                l: qr(i, [0, 1], [c.l, l.l], a),
                a: qr(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(Qr(p.h, p.s, p.l, p.a));
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
          (e.rgbToHsl = (e, t, n) => ni(e, t, n)),
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
        let r = Ke([0, 255], [0, 1]);
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
      (g_ = (e) => e instanceof Ue),
      (__ = (() => eh().EventEmitter)()),
      (v_ = class {
        constructor() {
          M(this, `_emitter`, new __());
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
      (y_ = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (b_ = (() => q.requestAnimationFrame || y_)()),
      (x_ = (e) => b_(e)),
      (S_ = (() => 1 / 60)()),
      (C_ = class extends v_ {
        constructor(e = !1) {
          (super(),
            M(this, `_started`, !1),
            M(this, `_frame`, 0),
            M(this, `_frameTasks`, []),
            M(this, `tick`, () => {
              this._started &&
                (x_(this.tick),
                this.emit(`update`, this._frame, S_),
                this.emit(`render`, this._frame, S_),
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
          S_ = e;
        }
        static get TimeStep() {
          return S_;
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), x_(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * S_;
        }
      }),
      (w_ = new C_()),
      (T_ = {
        target: q.location.origin === `https://screenshot.framer.invalid` ? `EXPORT` : `PREVIEW`,
        zoom: 1,
      }),
      (Y = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => T_.target,
        hasRestrictions: () => {
          let e = T_.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (E_ = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      De({
        borderTopWidth: E_(`y`),
        borderLeftWidth: E_(`x`),
        borderRightWidth: E_(`x`),
        borderBottomWidth: E_(`y`),
      }),
      (D_ = r.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (O_ = {
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
      (k_ = (() => ({
        ...O_,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }))()),
      (A_ = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (j_ = (() => ({ ...A_, fontWeight: 500 }))()),
      (M_ = (() => ({
        ...A_,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }))()),
      (N_ = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = zi(Kr.angleFromX(t.a, t.b)),
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
            return e(Kr(n.x - i, n.y + r), n);
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
          (e.distance = (e) => Kr.distance(e.a, e.b)),
          e
        );
      })()),
      (X = {
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
        divide: (e, t) => X.multiply(e, 1 / t),
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
          x: Ur(e.x, t),
          y: Ur(e.y, t),
          width: Ur(e.width, t),
          height: Ur(e.height, t),
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
          maxX: X.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: X.maxY(e),
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
          return { x: a, y: o, width: Kr.distance(t, n), height: Kr.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(X.minX)), y: Math.min(...e.map(X.minY)) },
            n = { x: Math.max(...e.map(X.maxX)), y: Math.max(...e.map(X.maxY)) };
          return X.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: X.minX(e), y: X.minY(e) },
          { x: X.minX(e), y: X.maxY(e) },
          { x: X.maxX(e), y: X.minY(e) },
          { x: X.maxX(e), y: X.maxY(e) },
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
            t.x < X.minX(e) ||
            t.x > X.maxX(e) ||
            t.y < X.minY(e) ||
            t.y > X.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of X.points(t)) if (!X.containsPoint(e, n)) return !1;
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
          !(t.x >= X.maxX(e) || X.maxX(t) <= e.x || t.y >= X.maxY(e) || X.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = X.maxX(e),
            r = X.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = X.maxY(e),
            r = X.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => t.find((t) => X.intersects(t, e)) === void 0,
        isEqual: (e, t) => X.equals(e, t),
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
            t.x < e.x ? (n = e.x - t.x) : t.x > X.maxX(e) && (n = t.x - X.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > X.maxY(e) && (r = t.y - X.maxY(e)),
            Kr.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: X.minX(e), y: X.minY(e) },
            r = { x: X.minX(t), y: X.minY(t) };
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
          let n = X.minX(e),
            r = X.minY(e),
            i = X.maxX(e),
            a = X.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = X.cornerPoints(e);
          return [N_(t, n), N_(n, r), N_(r, i), N_(i, t)];
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
                  H(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              H(n);
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
                  H(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              H(n);
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
          let n = N_(t, X.center(e)),
            r = X.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && N_.intersection(n, t, !0)) {
              let n = P_[e];
              return (V(n, `Invalid edge name`, P_), { edge: t, name: n });
            }
          }
        },
      }),
      (P_ = [`top`, `right`, `bottom`, `left`]),
      (F_ = {
        quickfix: (e) => (
          (Bi(e.widthType) || Bi(e.heightType)) && (e.aspectRatio = null),
          U(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || Bi(e.widthType) || U(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || Bi(e.heightType) || U(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (I_ = {
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
            d = F_.quickfix({
              left: U(t) || Vr(t),
              right: U(n) || Vr(n),
              top: U(r) || Vr(r),
              bottom: U(i) || Vr(i),
              widthType: Vi(a),
              heightType: Vi(o),
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
          } else a !== void 0 && typeof a != `string` && (f = n_.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = n_.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? n_.getNumber(t) : null,
              right: d.right ? n_.getNumber(n) : null,
              top: d.top ? n_.getNumber(r) : null,
              bottom: d.bottom ? n_.getNumber(i) : null,
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
            o = t?.sizing ? n_.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? n_.getNumber(t?.sizing.height) : null,
            c = qi(e.left, e.right);
          if (o && U(c)) i = o - c;
          else if (n && Bi(e.widthType)) i = n.width;
          else if (U(e.width))
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
                H(e.widthType);
            }
          let l = qi(e.top, e.bottom);
          if (s && U(l)) a = s - l;
          else if (n && Bi(e.heightType)) a = n.height;
          else if (U(e.height))
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
                H(e.heightType);
            }
          return Ki(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = I_.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? n_.getNumber(l.width) : null,
            d = l ? n_.getNumber(l.height) : null;
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
          return r ? X.pixelAligned(f) : f;
        },
      }),
      (L_ = 200),
      (R_ = 200),
      (z_ = r.createContext({ parentSize: 0 })),
      (B_ = (e) => {
        let t = ta(),
          { parentSize: n, children: i } = e,
          a = r.useMemo(() => ({ parentSize: n }), [ra(n), ia(n)]);
        return t === 1
          ? i
            ? b(k, { children: i })
            : null
          : b(z_.Provider, { value: a, children: i });
      }),
      (V_ = ((e) => (
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
      ))(V_ || {})),
      (H_ = /Mac/u),
      (U_ = /iPhone|iPod|iPad/iu),
      (W_ = /MacIntel/iu),
      (G_ = /Edg\//u),
      (K_ = /Chrome/u),
      (q_ = /Google Inc/u),
      (J_ = /Safari/u),
      (Y_ = /Apple Computer/u),
      (X_ = /Firefox\/\d+\.\d+$/u),
      (Z_ = /FramerX/u),
      (Q_ = /tablet|iPad|Nexus 9/iu),
      ($_ = /mobi/iu),
      (ev = r.createContext(void 0)),
      (tv = new Set()),
      (rv = `style[data-framer-css-ssr-minified]`),
      (iv = (() => {
        if (!ga()) return new Set();
        let e = document.querySelector(rv)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (av = `data-framer-css-ssr`),
      (ov = (e, t, n) =>
        r.forwardRef((i, a) => {
          let { sheet: o, cache: s } = r.useContext(ev) ?? {},
            c = n;
          if (!ga()) {
            Ze(t) && (t = t(Y.current(), i));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            cv.add(e, c);
          }
          return (
            h(() => {
              (c && iv.has(c)) ||
                (Ze(t)
                  ? t(Y.current(), i)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && Sa(e, o, s));
            }, []),
            b(e, { ...i, ref: a })
          );
        })),
      (sv = class {
        constructor() {
          (M(this, `styles`, new Set()), M(this, `componentIds`, new Set()));
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
      (cv = new sv()),
      (uv = `flexbox-gap-not-supported`),
      (dv = !1),
      (fv = [
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
      (pv = ((e) => (
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
      ))(pv || {})),
      (mv = pv),
      (hv = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (V(r !== void 0, 'Encountered `undefined` in CSSDeclaration'),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${Ta(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            V(t !== void 0, 'Zero variables passed to `css.variable`');
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      `${mv.BorderTopWidth}${mv.BorderRightWidth}${mv.BorderBottomWidth}${mv.BorderLeftWidth}`,
      (gv = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (_v = { display: `inline-block` }),
      (vv = { display: `block` }),
      (yv = (() => [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${gv.display};
            flex-direction: ${gv.flexDirection};
            justify-content: ${gv.justifyContent};
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
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
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
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
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
                color: ${Ea([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${Ea([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${Ea([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
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
            display: ${_v.display};
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
                color: ${Ea([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
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
                color: ${Ea([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ea([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Ea([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
            color: ${Ea([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
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
            color: ${Ea([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${Ea([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${Ea([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
            color: ${Ea([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
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
                color: ${Ea([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ea([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${Ea([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
                color: ${Ea([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ea([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
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
                color: ${Ea([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ea([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Ea([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
                color: ${Ea([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ea([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${vv.display};
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
      (bv = `--text-truncation-display-inline-for-safari-16`),
      (xv = `--text-truncation-display-none-for-safari-16`),
      (Sv = `--text-truncation-line-break-for-safari-16`),
      (Cv = [
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
      (wv = `(background: -webkit-named-image(i))`),
      (Tv = `(contain-intrinsic-size: inherit)`),
      (Ev = (() => [
        `@supports ${wv} and (not ${Tv}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${Cv.join(`, `)} { display: var(${bv}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${Cv.map((e) => `${e}::after`).join(`, `)} { content: var(${Sv}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${xv}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${bv}, ${_v.display}) }
    }`,
      ])()),
      (Dv = [`[data-framer-component-type] { position: absolute; }`]),
      (Ov = [
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
      (kv = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`),
      (Av = (() => [
        `[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`,
        `.${uv} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`,
      ])()),
      (jv = (() => `
.${uv} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)()),
      (Mv = (() => `
.${uv}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${uv}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)()),
      (Nv = (() => `
.${uv}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${uv}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)()),
      (Pv = (() => [kv, jv, ...Av, Mv, Nv])()),
      (Fv = [
        `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
      ]),
      (Iv = [
        `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
        `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
      ]),
      (Lv = [
        `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
        `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
        `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
        `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
        `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
        `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
        `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
        `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
      ]),
      (Rv = [
        `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
      ]),
      (zv = [
        `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
      ]),
      (Bv = [
        `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
      ]),
      (Vv = [
        `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
      ]),
      (Hv = [
        `[data-framer-cursor="pointer"] { cursor: pointer; }`,
        `[data-framer-cursor="grab"] { cursor: grab; }`,
        `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
      ]),
      (Uv = [
        `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
        `[data-framer-generated] * { pointer-events: unset }`,
      ]),
      (Wv = [
        `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
      ]),
      (Gv = [
        `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
        `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
        `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
      ]),
      (Kv = `--framer-will-change-override`),
      (qv = `--framer-will-change-effect-override`),
      (Jv = `--framer-will-change-filter-override`),
      (Yv = `(background: -webkit-named-image(i))`),
      (Xv = `(grid-template-rows: subgrid)`),
      (Zv = `(position-area: top right)`),
      (Qv = (e) =>
        e
          ? [
              `body { ${Kv}: none; }`,
              `@supports ${Yv} and (not ${Xv}) { body { ${Kv}: transform; } }`,
            ]
          : [`body { ${Kv}: none; ${qv}: none; }`]),
      ($v = (e) =>
        e
          ? [`body { ${Jv}: none; }`, `@supports ${Yv} and (not ${Zv}) { body { ${Jv}: filter; } }`]
          : [`body { ${Jv}: none; }`]),
      (ey = (e) => (e ? Uv : [])),
      (ty = [`.svgContainer svg { display: block; }`]),
      (ny = `--overflow-clip-fallback`),
      (ry = (() => [
        `@supports (not (overflow: clip)) {
        :root { ${ny}: hidden; }
    }`,
      ])()),
      (iy = `--one-if-corner-shape-supported`),
      (ay = (() => [`@supports (corner-shape: superellipse(2)) { :root { ${iy}: 1 } }`])()),
      (oy = (e) => [
        ...Qv(e),
        ...$v(e),
        ...Dv,
        ...Ov,
        ...yv,
        ...fv,
        ...Pv,
        ...Fv,
        ...Iv,
        ...Lv,
        ...zv,
        ...Rv,
        ...Bv,
        ...Hv,
        ...ey(e),
        ...ty,
        ...Wv,
        ...Gv,
        ...ry,
        ...Vv,
        ...Ev,
        ...ay,
      ]),
      (sy = oy(!1)),
      (cy = oy(!0)),
      (ly = `optional`),
      (uy = (e) => e),
      (dy =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (fy = za(
        (e) =>
          dy.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (py = (e) => () => {
        zr(e);
      }),
      (my = () => () => {}),
      (hy = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = _y.useImageSource(e, t, n);
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
      (gy = !1),
      (_y = new Proxy(hy, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? my()
              : py(
                  gy
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (vy = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (yy = [1, 2, 2.2]),
      (by = [512, 1024, 2048, 4096]),
      (xy = 512),
      (Sy = (() => ({ position: `absolute`, ...vy, top: 0, right: 0, bottom: 0, left: 0 }))()),
      (Cy = `src`),
      (wy = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && Cy in e;
        },
      }),
      (Ty = pa()),
      (Ey = typeof document < `u` ? ne : c),
      (Dy = r.createContext(!1)),
      (Oy = class {
        constructor() {
          (M(this, `sharedResizeObserver`),
            M(this, `callbacks`, new WeakMap()),
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
      (ky = (() => (ga() ? new Oy() : void 0))()),
      (Ay = `data-framer-size-compatibility-wrapper`),
      (jy = `0.000001px`),
      (My = (() => ` translateZ(${jy})`)()),
      (Ny = (() => _a() || ma() || va())()),
      (Py = (() => {
        class e extends x {
          constructor() {
            (super(...arguments),
              M(this, `layerElement`, null),
              M(this, `setLayerElement`, (e) => {
                this.layerElement = e;
              }));
          }
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? bo(t) : xo(t));
          }
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Tt(this.props, e);
          }
          componentDidUpdate(e) {
            uy(this.props).clip &&
              uy(this.props).radius === 0 &&
              uy(e).radius !== 0 &&
              Co(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return (M(e, `defaultProps`, {}), e);
      })()),
      (Fy = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (Iy = {
        hueRotate: (e, t) => J.toHslString(J.hueRotate(J(e), t)),
        setAlpha: (e, t) => J.toRgbString(J.alpha(J(e), t)),
        getAlpha: (e) => {
          let t = di(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => J.toRgbString(J.multiplyAlpha(J(e), t)),
        toHexValue: (e) => J.toHex(J(e)).toUpperCase(),
        toHex: (e) => J.toHexString(J(e)).toUpperCase(),
        toRgb: (e) => J.toRgb(J(e)),
        toRgbString: (e) => J.toRgbString(J(e)),
        toHSV: (e) => J.toHsv(J(e)),
        toHSL: (e) => J.toHsl(J(e)),
        toHslString: (e) => J.toHslString(J(e)),
        toHsvString: (e) => J.toHsvString(J(e)),
        hsvToHSLString: (e) => J.toHslString(J($r(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => J.toHex(J($r(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => J.toHexString(J($r(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => J.toRgbString(J($r(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => $r(e.h, e.s, e.v),
        rgbaToString: (e) => J.toRgbString(J(e)),
        rgbToHexValue: (e) => J.toHex(J(e)),
        rgbToHexString: (e) => J.toHexString(J(e)),
        hslToString: (e) => J.toHslString(J(e)),
        hslToRgbString: (e) => J.toRgbString(J(e)),
        toColorPickerSquare: (e) => J.toRgbString(J({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => J(e).isValid !== !1,
        equals: (e, t) =>
          J.isP3String(e) || J.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = J(e)),
              typeof t == `string` && (t = J(t)),
              J.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = J(e);
          return t.a === 1 ? J.toHexString(t) : J.toRgbString(t);
        },
        toFormatString: (e) => (J.isP3String(e) ? e : J.toRgbString(J(e))),
      }),
      (Ly = /var\(.+\)/u),
      (Ry = new Map()),
      (zy = [`stops`]),
      (By = [`start`, `end`]),
      (Vy = [`angle`, `alpha`]),
      (Hy = {
        isLinearGradient: (e) => B(e) && Vy.every((t) => t in e) && (jo(e) || Ao(e)),
        hash: (e) => e.angle ^ ko(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = Oo(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (Uy = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (Wy = {
        isRadialGradient: (e) => B(e) && Uy.every((t) => t in e) && (jo(e) || Ao(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ ko(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = Oo(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (Gy = [
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
      (Ky = (() => new Set([...Gy, ...Gy.map((e) => `${e}Capture`)]))()),
      (qy = `overflow`),
      (Jy = { x: 0, y: 0, width: 200, height: 200 }),
      (Yy = new Set([
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
      (Xy = _(function (e, t) {
        let { name: n, center: r, border: i, _border: a, __portal: o } = e,
          { props: s, children: c } = lo(e),
          l = Ho(s),
          u = fo(e),
          f = Lo(e),
          p = E(null),
          m = t ?? p,
          h = {
            'data-framer-component-type': e.componentType ?? `Frame`,
            'data-framer-cursor': f,
            'data-framer-highlight': f === `pointer` ? !0 : void 0,
            'data-layoutid': u,
            'data-framer-offset-parent-id': uy(e)[`data-framer-offset-parent-id`],
          };
        !Uo(e) && n && (uy(h)[`data-framer-name`] = n);
        let [g, _] = Vo(s),
          v = Bo(s),
          y = sa(v);
        (r && !(_ && !y && Yi(v))
          ? ((l.transformTemplate ||= uo(r)), Object.assign(h, so(r)))
          : (l.transformTemplate ||= void 0),
          vo(e, m));
        let x = ro(e),
          S = Wo(s, v, _, d(Dy)),
          C = aa(
            D(k, {
              children: [
                x
                  ? b($a, {
                      alt: e.alt ?? ``,
                      image: x,
                      containerSize: _ ?? void 0,
                      nodeId: e.id && co(e.id),
                      layoutId: u,
                    })
                  : null,
                c,
                b(to, { ...a, border: i, layoutId: u }),
              ],
            }),
            S
          ),
          w = ao(e.as),
          T = io(x);
        return (
          e.fitImageDimension &&
            T &&
            ((g[e.fitImageDimension] = `auto`), (g.aspectRatio = T.width / T.height)),
          D(w, { ...h, ...l, layoutId: u, style: g, ref: m, children: [C, o] })
        );
      })),
      (Zy = Oa(
        _(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? b(Xy, { ...e, ref: t }) : null;
        })
      )),
      (Qy = `__LAYOUT_TREE_ROOT`),
      ($y = r.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (eb = class extends x {
        constructor() {
          (super(...arguments),
            M(this, `shouldAnimate`, !1),
            M(this, `transition`),
            M(this, `lead`),
            M(this, `follow`),
            M(this, `scheduledPromotion`, !1),
            M(this, `scheduledDidUpdate`, !1),
            M(this, `scheduleProjectionDidUpdate`, () => {
              this.scheduledDidUpdate = !0;
            }),
            M(this, `schedulePromoteTree`, (e, t, n) => {
              ((this.follow = this.lead),
                (this.shouldAnimate = n),
                (this.lead = e),
                (this.transition = t),
                (this.scheduledPromotion = !0));
            }),
            M(this, `initLead`, (e, t) => {
              ((this.follow = this.lead),
                (this.lead = e),
                this.follow && t && (this.follow.layoutMaybeMutated = !0));
            }),
            M(this, `sharedLayoutContext`, {
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
                preserveFollowOpacity: t.options.layoutId === Qy && !this.follow?.isExiting,
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
          return b($y.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (tb = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (nb = class {
        constructor(e) {
          (M(this, `sharedIntersectionObserver`),
            M(this, `callbacks`, new WeakMap()),
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
      (rb = j(new Map())),
      (ib = typeof IntersectionObserver > `u` ? ah : Qo),
      (ab = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (ob = r.createContext(null)),
      (sb = class extends x {
        constructor() {
          (super(...arguments),
            M(this, `layoutMaybeMutated`, !1),
            M(this, `projectionNodes`, new Map()),
            M(this, `rootProjectionNode`),
            M(this, `isExiting`),
            M(
              this,
              `shouldPreserveFollowOpacity`,
              (e) => e.options.layoutId === Qy && !this.props.isExiting
            ),
            M(this, `switchLayoutGroupContext`, {
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
          return b(Fe.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (cb = (e) => {
        let t = r.useContext($y);
        return b(sb, { ...e, sharedLayoutContext: t });
      }),
      (lb = r.createContext(!0)),
      (ub = j({ register: () => {}, deregister: () => {} })),
      (db = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = is(),
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
                r.set(i, Ze(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r]
          ),
          b(ub.Provider, { value: i, children: n })
        );
      }),
      (fb = r.memo(function ({
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
          O = d(Ee),
          { persistLayoutIdCache: ee } = d(D_),
          k = E({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: ss({}, g, a),
          }),
          te = E(null),
          A = O !== null && !O.isPresent;
        (t && k.current.wasCurrent === void 0 && ee(),
          c(() => {
            if (e || !T) return;
            if (A) {
              k.current = { ...k.current, wasBeingRemoved: A };
              return;
            }
            let { wasPrevious: r, wasCurrent: i } = k.current,
              o = (t && !i) || (!A && k.current.wasBeingRemoved && t),
              s = n && !r,
              c = ss(k.current.origins, g, a),
              l = k.current.wasReset;
            (o || s
              ? (T.stop(), T.start({ zIndex: x, ...c, ...a }), (l = !1))
              : l === !1 && (T.stop(), T.set({ zIndex: x, ...pb, opacity: 0 }), (l = !0)),
              (k.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [t, n, A]));
        let ne = h ? { type: !1 } : `velocity` in p ? { ...p, velocity: 0 } : p,
          re = h ? { type: !1 } : m || p,
          j = { ...v };
        ((j.left === void 0 || j.right === void 0) && (j.width = `auto`),
          (j.top === void 0 || j.bottom === void 0) && (j.height = `auto`));
        let M = (cs(a) || cs(g)) && (e || t || n) ? 1200 : void 0,
          ie = { ...pb, ...k.current.origins },
          ae = e
            ? {
                initial: { ...ie, ...g },
                animate: { ...ie, ...a, transition: ne },
                exit: { ...ie, ..._, transition: p },
              }
            : { animate: T, exit: { ...ie, ..._, transition: re } },
          N = !(A || S === !1),
          oe = !!t && N,
          se = t && w;
        return D(Zy, {
          'data-framer-component-type': `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || A || (t && y) ? x : void 0,
            pointerEvents: void 0,
            visibility: i ? `visible` : `hidden`,
            perspective: M,
          },
          children: [
            e &&
              b(Zy, {
                width: `100%`,
                height: `100%`,
                'data-framer-component-type': `NavigationContainerBackdrop`,
                transition: p,
                initial: { opacity: h && i ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: s || `transparent`,
                onTap: A ? void 0 : l,
              }),
            b(Zy, {
              ...j,
              ...ae,
              transition: {
                default: ne,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: A ? f : u,
              'data-framer-component-type': `NavigationContainer`,
              'data-framer-is-current-navigation-target': !!t,
              style: { pointerEvents: void 0, opacity: se || e || (t && y) ? 1 : 0 },
              'data-is-present': N ? void 0 : !1,
              ref: te,
              children: b(ob.Provider, {
                value: te,
                children: b(lb.Provider, {
                  value: oe,
                  children: b(db, {
                    isCurrent: oe,
                    isOverlayed: r,
                    children: b(cb, {
                      isLead: t,
                      animatesLayout: !!y,
                      transition: ne,
                      isExiting: !N,
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
      }, os)),
      (pb = {
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
      (mb = class {
        constructor() {
          (M(this, `warning`, () => {
            zr(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
          }),
            M(this, `goBack`, () => this.warning()),
            M(this, `instant`, () => this.warning()),
            M(this, `fade`, () => this.warning()),
            M(this, `push`, () => this.warning()),
            M(this, `modal`, () => this.warning()),
            M(this, `overlay`, () => this.warning()),
            M(this, `flip`, () => this.warning()),
            M(this, `customTransition`, () => this.warning()),
            M(this, `magicMotion`, () => this.warning()));
        }
      }),
      (hb = j(new mb())),
      (gb = {
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
      (_b = () => ({
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
      (vb = ph(pb)),
      (yb = r.createContext(void 0)),
      (bb = r.createContext(void 0)),
      (xb = (() => {
        var e, t, n, r, i, a, o;
        return (
          (t = class extends x {
            constructor(t) {
              (super(t),
                xe(this, n),
                xe(this, e, null),
                M(this, `state`, _b()),
                xe(this, a, (e) => {
                  if (!this.props.enabled && this.state.history.length > 0) return;
                  let t = fs(this.state, e);
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
                M(this, `goBack`, () => {
                  if (!Se(this, n, i).call(this))
                    return (
                      ge(this, e, globalThis.event?.timeStamp || null),
                      this.state.currentOverlay === -1
                        ? L(this, a).call(this, { type: `remove` })
                        : L(this, a).call(this, { type: `removeOverlay` })
                    );
                }));
              let r = this.props.children;
              if (!r || !Ri(r) || !Li(r)) return;
              let o = { ...gb.Instant },
                s = {
                  type: `add`,
                  key: r.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                  transition: o,
                  component: r,
                },
                c = fs(this.state, s);
              c && (this.state = c);
            }
            componentDidMount() {
              let e = this.state.history[this.state.current];
              e && this.context?.(e.key);
            }
            UNSAFE_componentWillReceiveProps(e) {
              let t = e.children;
              if (!Ri(t) || !Li(t)) return;
              let r = t.key?.toString();
              r &&
                (this.state.history.length === 0
                  ? Se(this, n, o).call(this, t, gb.Instant)
                  : L(this, a).call(this, { type: `update`, key: r, component: t }));
            }
            componentWillUnmount() {
              this.props.resetProjection?.();
            }
            instant(e) {
              Se(this, n, o).call(this, e, gb.Instant, void 0);
            }
            fade(e, t) {
              Se(this, n, o).call(this, e, gb.Fade, t);
            }
            push(e, t) {
              Se(this, n, o).call(this, e, ls(t), t);
            }
            modal(e, t) {
              Se(this, n, o).call(this, e, gb.Modal, t);
            }
            overlay(e, t) {
              Se(this, n, o).call(this, e, us(t), t);
            }
            flip(e, t) {
              Se(this, n, o).call(this, e, ds(t), t);
            }
            magicMotion(e, t) {
              Se(this, n, o).call(this, e, gb.MagicMotion, t);
            }
            customTransition(e, t) {
              Se(this, n, o).call(this, e, t);
            }
            render() {
              let e = Se(this, n, r).call(this, { overCurrentContext: !1 }),
                t = Se(this, n, r).call(this, { overCurrentContext: !0 }),
                i = Ds(t),
                a = t.current > -1,
                o = this.state.history.length === 1,
                s = [];
              for (let [t, n] of Object.entries(this.state.containers)) {
                let r = this.state.containerIndex[t];
                V(r !== void 0, `Container's index must be registered`);
                let i = this.state.containerVisualIndex[t];
                V(i !== void 0, `Container's visual index must be registered`);
                let c = this.state.containerIsRemoved[t],
                  l = this.state.history[r],
                  u = this.state.transitionForContainer[t],
                  d = r === this.state.current,
                  f = r === this.state.previous,
                  p = d ? !1 : c,
                  m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
                s.push(
                  b(
                    fb,
                    {
                      id: t,
                      index: i,
                      isInitial: o,
                      isCurrent: d,
                      isPrevious: f,
                      isOverlayed: a,
                      visible: d || f,
                      position: l?.transition?.position,
                      instant: Ls(r, e),
                      transitionProps: u,
                      animation: Is(r, e),
                      backfaceVisible: Ps(r, e),
                      exitAnimation: l?.transition?.animation,
                      exitBackfaceVisible: l?.transition?.backfaceVisible,
                      exitProps: l?.transition?.enter,
                      withMagicMotion: m,
                      areMagicMotionLayersPresent: p ? !1 : void 0,
                      children: b(Go, {
                        children: zs({ component: n, transition: l?.transition }),
                      }),
                    },
                    t
                  )
                );
              }
              let c = this.state.overlayStack.map((e, n) =>
                b(
                  fb,
                  {
                    isLayeredContainer: !0,
                    isCurrent: n === this.state.currentOverlay,
                    position: e.transition.position,
                    initialProps: Ns(n, t),
                    transitionProps: Fs(n, t),
                    instant: Ls(n, t, !0),
                    animation: Is(n, t),
                    exitProps: e.transition.enter,
                    visible: Rs(n, t),
                    backdropColor: js(e.transition),
                    backfaceVisible: Ms(n, t),
                    onTapBackdrop: Bs(e.transition, this.goBack),
                    index: this.state.current + 1 + n,
                    children: zs({ component: e.component, transition: e.transition }),
                  },
                  e.key
                )
              );
              return b(Zy, {
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
                children: b(hb.Provider, {
                  value: this,
                  children: D(bb.Provider, {
                    value: o,
                    children: [
                      b(fb, {
                        isLayeredContainer: !0,
                        position: void 0,
                        initialProps: {},
                        instant: !1,
                        transitionProps: Os(i),
                        animation: ks(i),
                        backfaceVisible: As(i),
                        visible: !0,
                        backdropColor: void 0,
                        onTapBackdrop: void 0,
                        index: 0,
                        children: b(Ai, {
                          children: b(eb, {
                            children: b(Le, { presenceAffectsLayout: !1, children: s }),
                          }),
                        }),
                      }),
                      b(Le, { children: c }),
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
            return globalThis.event ? L(this, e) === globalThis.event.timeStamp : !1;
          }),
          (a = new WeakMap()),
          (o = function (t, r, o) {
            if (
              Se(this, n, i).call(this) ||
              (ge(this, e, globalThis.event?.timeStamp || null), !t || !Ri(t) || !Li(t))
            )
              return;
            let s = { ...r, ...o };
            if (s.overCurrentContext)
              return L(this, a).call(this, { type: `addOverlay`, transition: s, component: t });
            let c = t.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            L(this, a).call(this, { type: `add`, key: c, transition: s, component: t });
          }),
          M(t, `defaultProps`, { enabled: !0 }),
          M(t, `contextType`, yb),
          t
        );
      })()),
      (Sb = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (Cb = Oa(Vs)),
      We(rh(), 1),
      We(rh(), 1),
      We(rh(), 1),
      (wb = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (Tb = Symbol(`private`)),
      (Eb = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [Tb]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new t_(),
                reset() {
                  for (let t in i)
                    if (wb(i, t)) {
                      let n = wb(e, t) ? uy(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, Ob);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[Tb].reset()),
          (e.addObserver = (e, t) => e[Tb].observers.add(t)),
          e
        );
      })()),
      (Db = class {
        constructor() {
          (M(this, `set`, (e, t, n, r) => {
            if (t === Tb) return !1;
            let i = e[Tb],
              a,
              o;
            if (
              (Vr(n) ? ((a = n), (o = a.get())) : (o = n),
              i.makeAnimatables &&
                typeof n != `function` &&
                typeof n != `object` &&
                !a &&
                (a = n_(n)),
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
              l = uy(e)[t];
            if (l !== void 0) {
              Vr(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (uy(e)[t] = o));
              let n = typeof o == `object` && !!o;
              ((Array.isArray(o) || n) && (c = !0), (s = !0));
            } else (a && (n = a), (s = Reflect.set(e, t, n)));
            return (c && i.observers.notify({ value: r }), s);
          }),
            M(this, `get`, (e, t, n) => {
              if (t === Tb) return uy(e)[t];
              let r = Reflect.get(e, t, n);
              return typeof r == `function` ? r.bind(n) : r;
            }));
        }
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[Tb].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(Tb);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== Tb) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (Ob = new Db()),
      (kb = `opacity`),
      (Ab = (() => {
        function e(t = {}) {
          let n = Eb(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => Eb.resetObject(e));
          }),
          (e.addObserver = (e, t) => Eb.addObserver(e, t)),
          e
        );
      })()),
      (jb = { update: 0 }),
      (Mb = r.createContext({ update: NaN })),
      (Nb = class extends x {
        constructor() {
          (super(...arguments),
            M(this, `observers`, []),
            M(this, `state`, jb),
            M(this, `taskAdded`, !1),
            M(this, `frameTask`, () => {
              (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
            }),
            M(this, `observer`, () => {
              this.taskAdded || ((this.taskAdded = !0), w_.addFrameTask(this.frameTask));
            }));
        }
        componentWillUnmount() {
          (this.observers.map((e) => e()), Ab.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            Ab._stores.forEach((e) => {
              let t = Ab.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            b(Mb.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      We(rh(), 1),
      (Pb = `__framer__`),
      (Fb = (() => Pb.length)()),
      (Ib = r.createContext(void 0)),
      (Lb = r.createContext(void 0)),
      (Rb = `ssr-variant`),
      (zb = () => () => {}),
      (Bb = () => !0),
      (Vb = () => !1),
      (Hb = r.forwardRef(function (e, t) {
        let n = $s(t),
          i = r.useContext(Lb),
          a = r.useSyncExternalStore(zb, Vb, Bb),
          o = Ni(() => (a ? (ga() ? 1 : 2) : 0)),
          s = r.useContext(Ib);
        return ur(() => {
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
              return n(a, sc(t, c, r));
            case 1:
              return nc(r, a, c, u, l, d, n, t);
            case 2:
              return nc(r, a, c, u, l, d, Qs, void 0);
            default:
              H(o);
          }
        }, [s, i, n, e]);
      })),
      (Ub = (() => ov(Hb, `.${Rb} { display: contents }`, `PropertyOverrides`))()),
      (Wb = `default`),
      (Gb = new Set([Wb])),
      (qb = class {
        constructor() {
          (M(this, `entries`, new Map()), xe(this, Kb, {}));
        }
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (V(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (V(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = Wb, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return Wb;
          let n = L(this, Kb)[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (L(this, Kb)[e] = rc(r)) : Wb;
        }
        setAll(e, t = Gb, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = Ze(n.transformTemplate) ? n.transformTemplate?.({}, Yb) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: B(a) ? a : void 0,
              animate: B(o) ? o : void 0,
              transformTemplate: R(i) ? i : void 0,
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
      (Kb = new WeakMap()),
      (Jb = new qb()),
      (Yb = `__Appear_Animation_Transform__`),
      (Xb = `data-framer-appear-id`),
      (Zb = `data-framer-appear-animation`),
      (Qb = (e) => {
        if (La())
          return {
            animate: lc(e.animate) ? e.animate : void 0,
            initial: lc(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      ($b = [
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
      (ex = (e) => ({
        x: N(e?.x ?? 0),
        y: N(e?.y ?? 0),
        opacity: N(e?.opacity ?? 1),
        scale: N(e?.scale ?? 1),
        rotate: N(e?.rotate ?? 0),
        rotateX: N(e?.rotateX ?? 0),
        rotateY: N(e?.rotateY ?? 0),
        skewX: N(e?.skewX ?? 0),
        skewY: N(e?.skewY ?? 0),
        transformPerspective: N(e?.transformPerspective ?? 0),
      })),
      (tx = {
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
      (nx = { willChange: `transform` }),
      Object.freeze(nx),
      (rx = {}),
      Object.freeze(rx),
      (ix = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (ax = () => {
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
      (ox = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (sx = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (cx = 1),
      (lx = 4),
      (ux = new Set([
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
      (dx = [`animate`, `animate`]),
      (fx = { inputRange: [], outputRange: [] }),
      (px = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (mx = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (hx = () => ({
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
      (gx = [0, 1]),
      (_x = { parallax: ox, styleAppear: ux, styleTransform: px, loop: ix, presence: sx }),
      (vx = ph(_x)),
      (yx = (e) => e.reduce((e, t) => (e += t), 0)),
      (bx = (e) => e.reduce((e, t) => (e *= t), 1)),
      (xx = `current`),
      (Sx = (e) =>
        r.forwardRef((t, n) => {
          if (t.__withFX)
            return b(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let i = Qb(t);
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
            } = Mc(t),
            m = Yo(n),
            { values: h, style: g } = vc(c, m, p, t.style, t[qe]),
            { values: _, style: v } = mc(a, m, t.style?.visibility),
            { values: y, style: x } = Ac(s, m),
            { values: S, style: C } = Ec(o, m),
            { values: w, style: T } = fc(l, m),
            E = r.useMemo(() => {
              let e = new Ue(d ?? 1);
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
          Pc(t.style, E);
          let D = ve(E.scale, bx),
            O = ve(E.opacity, bx),
            ee = ve(E.x, yx),
            k = ve(E.y, yx),
            te = ve(E.rotate, yx),
            A = ve(E.rotateX, yx),
            ne = ve(E.rotateY, yx),
            re = ve(E.skewX, yx),
            j = ve(E.skewY, yx),
            M = ve(E.transformPerspective, yx),
            { drag: ie, dragConstraints: ae } = u;
          mo(ie && Nc(ae) ? ae : void 0);
          let N = {
            opacity: O,
            scale: D,
            x: ee,
            y: k,
            rotate: te,
            rotateX: A,
            rotateY: ne,
            skewX: re,
            skewY: j,
          };
          tt(f) && (N.transformPerspective = M);
          let oe = Fc(t.animate) ? t.animate : void 0,
            se = Fc(t.initial) ? t.initial : void 0,
            ce = Fc(t.exit) ? t.exit : void 0,
            le = p && !c.presenceInitial ? { initial: se, animate: oe, exit: ce } : {};
          return b(e, {
            ...u,
            ...le,
            __withFX: !0,
            style: { ...t.style, ...v, ...x, ...T, ...N, ...C, ...g },
            values: h,
            ref: m,
          });
        })),
      (Cx = j({})),
      (wx = r.createContext({})),
      (Tx = r.forwardRef(function ({ width: e, height: t, y: n, children: i, ...a }, o) {
        let s = r.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          c = $s(o);
        return b(wx.Provider, { value: s, children: c(i, a) });
      })),
      (Ex = (e) =>
        r.forwardRef((t, n) =>
          b(e, { layoutId: fo(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (Dx = !1),
      (Ox = class extends x {
        constructor() {
          (super(...arguments), M(this, `state`, { error: void 0 }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!Rc(e)) return;
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
              lt(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          Qt(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!Rc(e)) throw e;
          return ((Dx = !0), this.props.children);
        }
      }),
      (kx = (() => (s === void 0 ? null : new Promise(() => {})))()),
      (Ax = b(zc, {})),
      (jx = j(!1)),
      (jx.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (Mx = b(Vc, {})),
      (Nx = class extends x {
        constructor() {
          (super(...arguments), M(this, `state`, { hasError: !1 }));
        }
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Uc(this.props.getErrorMessage(), t?.componentStack), Hc(e, t));
        }
        render() {
          let { children: e, fallback: t = Mx } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (Px = class extends x {
        constructor() {
          (super(...arguments), M(this, `state`, { hasError: !1 }));
        }
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            Hc(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (Fx = (() => r.createContext(void 0))()),
      (Ix = `code-crash:`),
      (Lx = Ex(
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
          let d = Ni(() => (t ? `${t}-container` : void 0)),
            f = ao(n),
            p = rl(
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
            children: b(Dy.Provider, {
              value: !0,
              children: b(yg.Provider, {
                value: a ?? null,
                children: b(Mi, {
                  enabled: !1,
                  children: b(He, { id: t ?? ``, inherit: l.layout ? !0 : `id`, children: p }),
                }),
              }),
            }),
          });
        })
      )),
      (Rx = r.forwardRef(function (e, t) {
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
          d = rl(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = ao(f);
          return b(yg.Provider, {
            value: a ?? null,
            children: b(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return b(yg.Provider, {
            value: a ?? null,
            children: b(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (zx = j({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (Bx = `framer-cursor-none`),
      (Vx = `framer-pointer-events-none`),
      (Hx = C(function ({ children: e }) {
        let t = Ni(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = il(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = Xe();
        return D(zx.Provider, { value: t, children: [e, !n && b(Kx, {})] });
      })),
      (Ux = (() =>
        ov(
          Hx,
          [
            `.${Bx}, .${Bx} * { cursor: none !important; }`,
            `.${Vx}, .${Vx} * { pointer-events: none !important; }`,
          ],
          `framer-lib-cursors-host`
        ))()),
      (Wx = (() => ({ position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }))()),
      (Gx = `data-framer-portal-id`),
      (Kx = C(function () {
        let { onRegisterCursors: e } = d(zx),
          [t, n] = p(!1),
          r = de(0),
          i = de(0),
          a = de(0),
          s = E(null),
          l = E({ cursors: {}, cursorHash: void 0 }),
          u = po();
        (ne(() => {
          let e = q.matchMedia(`(any-hover: none)`);
          function t(e) {
            e.matches ? A(() => n(!1)) : n(!0);
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
              (r.set(e), i.set(n), ke(a, 1, { type: `tween`, duration: 0.2 }));
            }
            let c = () => {
              if (et(l.current.cursors)) return;
              let t = cl(e, n);
              t !== l.current.cursorHash && ((l.current.cursorHash = t), je.update(() => u()));
            };
            function d(t) {
              if (t.pointerType === `touch`) {
                Ie(c);
                return;
              }
              (je.read(c, !0), (e = t.clientX), (n = t.clientY), je.update(o));
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
              je.update(() => {
                s.current?.dispatchEvent(t);
              });
            }
            return (
              q.addEventListener(`pointermove`, d),
              document.addEventListener(`pointerdown`, f),
              document.addEventListener(`pointerup`, f),
              je.read(c, !0),
              () => {
                (q.removeEventListener(`pointermove`, d),
                  document.removeEventListener(`pointerdown`, f),
                  document.removeEventListener(`pointerup`, f),
                  Ie(c));
              }
            );
          }, [a, r, i, u, t]),
          c(() => {
            if (!t) return;
            function e() {
              ke(a, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              q.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), q.removeEventListener(`blur`, e));
              }
            );
          }, [a, t]),
          ne(() => {
            function t(e) {
              ((l.current.cursors = e),
                (l.current.cursorHash = et(e) ? null : cl(r.get(), i.get())),
                u());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(Bx, !1));
            };
          }, [r, i, e, u]));
        let { cursors: f, cursorHash: m } = l.current,
          h = m ? f[m] : null,
          g = al(h);
        ne(() => {
          t && document.body.classList.toggle(Bx, g);
        }, [g, t]);
        let _ = h?.component,
          v = h?.transition ?? { duration: 0 },
          y = ue(r, v),
          x = ue(i, v),
          S = ve(() => y.get() + (h?.offset?.x ?? 0)),
          C = ve(() => x.get() + (h?.offset?.y ?? 0)),
          w = h?.alignment,
          T = h?.placement,
          D = o((e, t) => `translate(${sl(T, w)}) ${t}`, [w, T]);
        return !t || !h || !_
          ? null
          : b(O, {
              children: b(_, {
                transformTemplate: D,
                style: { ...Wx, x: S, y: C, opacity: a },
                globalTapTarget: !0,
                variant: h?.variant,
                ref: s,
                className: Vx,
              }),
            });
      })),
      (qx = `webPageId`),
      (Jx = class {
        constructor() {
          (M(this, `collectedLinks`, new Map()), M(this, `nestingInfo`, new Map()));
        }
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            V(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (V(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((oh && !va()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(dl(e), e), this.collectedLinks.set(dl(t), t));
          let n = this.nestingInfo.get(dl(e)) ?? new Set();
          (n.add(dl(t)), this.nestingInfo.set(dl(e), n));
        }
      }),
      (Yx = new Jx()),
      (Xx = `element`),
      (Zx = `collection`),
      (Qx = `collectionItemId`),
      ($x = `pathVariables`),
      (eS = `framer/page-link,`),
      (tS = j(void 0)),
      (nS = `--text-selection-color`),
      (rS = `--text-selection-background-color`),
      (iS = (() => ov(kl, (e, t) => Ol(t?.triggerId), `InjectSelectionStyle`))()),
      (aS = `overlay`),
      (oS = `template-overlay`),
      (sS = class extends x {
        constructor() {
          (super(...arguments),
            M(this, `state`, { error: void 0 }),
            M(this, `message`, `Made UI non-interactive due to an error.`),
            M(this, `messageFatal`, `Fatal error.`));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((s.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(lt(sh ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          Qt(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (sh && document.getElementById(`main`)?.innerHTML) || ``;
          return b(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${lt()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (cS = /:([a-z]\w*)/gi),
      (lS = j(void 0)),
      (uS = 500),
      (dS = 0.9),
      (fS = 1.7),
      (pS = 4),
      (mS = 1 / 0),
      (hS = new WeakMap()),
      (gS = new Set()),
      (_S = new Map()),
      (vS = !Kh || typeof IntersectionObserver > `u` ? null : Rl()),
      (yS = Ml(
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
          let p = Ot(),
            m = At(),
            h = Il(),
            { activeLocale: g, locales: _ } = dr(),
            v = Gl(),
            y = hn(),
            b = fl(),
            x = Kl({ nodeId: s, clickTrackingId: i, router: p, href: t, activeLocale: g }),
            C = f(() => {
              if (!t) return {};
              let e = ul(t) ? t : yl(t);
              if (!e) return {};
              if (R(e))
                return Xl(
                  e,
                  p,
                  m,
                  {
                    openInNewTab: n,
                    trackLinkClick: x,
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
              if (st(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: b,
                } = Nl(p, m, e, g, c, h),
                S = Bl(n, !0),
                C = S === `_blank`,
                w = { pathVariables: f, locale: b },
                T = (e) => Jl(p, l, () => y(l, w, !1, !C), d, f, r, e);
              return {
                href: u,
                target: S,
                onClick: Yl(u, x, T),
                'data-framer-page-link-current': (m && Ll(m, e, h)) || void 0,
                navigate: T,
                preload: () => y(l, w, !0, !C),
                _routeId: l,
                _pathVariables: f,
                _locale: b,
              };
            }, [t, p, g, h, n, m, r, x, a, _, o, v, y]),
            w = Yo(S(e) && `ref` in e ? e.ref : void 0),
            { navigate: T, preload: E, _routeId: D, _pathVariables: O, _locale: ee, ...k } = C;
          Xo(
            w,
            (e) => {
              if (!(e === null || !D || !E || b))
                return vS?.(e, E, `${D}:${ee?.id}:${JSON.stringify(O)}`);
            },
            [E, D, O, ee]
          );
          let te = !!T;
          return Sl(
            $s(d).cloneAsArray(e, (e) => Zl(e, { ...u, ...$l(k, l, te) }, w)),
            c,
            s,
            t,
            C,
            w
          );
        })
      )),
      (bS = r.createContext(void 0)),
      (xS = `__framer_force_showing_editorbar_since`),
      (SS = class extends x {
        constructor() {
          (super(...arguments), M(this, `state`, { error: void 0 }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (CS = () => {
        try {
          return !!localStorage[xS];
        } catch {
          return !1;
        }
      }),
      (wS = () => !CS()),
      (TS = () => !1),
      (ES = () => () => {}),
      (DS = (() => {
        let e = j(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (OS = `main`),
      (kS = `framerGeneratedPage`),
      (AS = `<!-- Start of headStart -->`),
      (jS = `<!-- End of headStart -->`),
      (MS = `<!-- Start of headEnd -->`),
      (NS = `<!-- End of headEnd -->`),
      (PS = `<!-- Start of bodyStart -->`),
      (FS = `<!-- End of bodyStart -->`),
      (IS = `<!-- Start of bodyEnd -->`),
      (LS = `<!-- End of bodyEnd -->`),
      (RS = (() => r.createContext(void 0))()),
      (zS = null),
      (BS = null),
      lh(bu),
      (VS = (e, t, n, r, i, a) => {
        let o = d(bS),
          l = E(),
          u = ln(),
          f = E(!0);
        return (
          c(() => {
            function c() {
              (!zS || !BS) && bu();
              let s = n ? new URL(q.location.origin + n) : q.location,
                c = {
                  version: Ph,
                  abTestId: e?.abTestId,
                  framerSiteId: o ?? null,
                  webPageId: e?.abTestingVariantId ?? t,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: i?.code || null,
                  referrer: null,
                  url: s.href,
                  hostname: s.hostname,
                  pathname: s.pathname,
                  search: s.search || null,
                  hash: s.hash || null,
                  timezone: zS,
                  locale: BS,
                },
                l = f.current && a !== void 0 ? a : void 0;
              return e?.collectionId && r
                ? (async () => {
                    let t = l ?? null;
                    if (l === void 0) {
                      let n = e.collectionId && u?.get(e.collectionId),
                        [a] = Object.values(r);
                      if (n && R(a)) {
                        let e = n.getRecordIdBySlug(a, i || void 0);
                        t = (st(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (l.current = c()),
                t = e instanceof Promise ? await e : e;
              ((l.current = t),
                f.current ? (f.current = !1) : Qt(`published_site_pageview`, t, `eager`));
            })();
            let d = async (e) => {
              if (e.persisted) {
                let e = (l.current = c()),
                  t = e instanceof Promise ? await e : e;
                ((l.current = t), Qt(`published_site_pageview`, t, `eager`));
              }
            };
            return (
              s.addEventListener(`pageshow`, d),
              () => {
                s.removeEventListener(`pageshow`, d);
              }
            );
          }, [e, t, n, r, i, o, u, a]),
          l
        );
      }),
      (HS = { status: `loading`, data: void 0 }),
      (US = 5e3),
      (WS = () => {}),
      (ZS = class e {
        constructor() {
          (M(this, `responseValues`, new Map()),
            xe(this, GS, new Map()),
            xe(this, KS, new Set()),
            xe(this, qS, new Map()),
            xe(this, JS, new Map()),
            xe(this, YS, new Map()),
            xe(this, XS, new Map()),
            M(
              this,
              `persistCache`,
              Ys(() => {
                let t = {};
                for (let [e, n] of this.responseValues) {
                  if (!n || n.status !== `success`) continue;
                  let r = L(this, qS).get(e);
                  if (!r || r === 0) continue;
                  let i = L(this, JS).get(e);
                  i && ((i && Iu(i, r)) || (t[e] = [i, r, n.data]));
                }
                try {
                  localStorage.setItem(e.cacheKey, JSON.stringify(t));
                } catch {}
              }, 500)
            ));
        }
        unmount() {
          for (let [e, t] of L(this, XS)) (clearInterval(t), L(this, XS).delete(e));
        }
        stopQueryRefetching(e) {
          let t = Mu(e),
            n = L(this, XS).get(t);
          n && (clearInterval(n), L(this, XS).delete(t));
        }
        startQueryRefetching(e) {
          let t = Mu(e),
            n = L(this, XS).get(t),
            r = L(this, qS).get(t);
          if (n || !r) return;
          let i = q.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = L(this, JS).get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          L(this, XS).set(t, i);
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
              Iu(r, i) ||
                (L(this, JS).set(e, r),
                L(this, qS).set(e, i),
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
          let n = L(this, GS).get(e);
          if (n) for (let e of n) e();
        }
        async prefetch(e) {
          if (!ga() || !ml(e.url, !1)) return;
          let t = Mu(e);
          (L(this, KS).add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = L(this, GS).get(t);
          for (let e of r ?? []) e();
          let i = Fu(n, e);
          return (e.resultOutputType === `image` && R(i) && (await ku(i).catch(WS)), i);
        }
        async fetchWithCache(e) {
          if (!ga()) return;
          let t = Mu(e),
            n = L(this, YS).get(t);
          if (n) return n;
          let r = L(this, JS).get(t),
            i = r && Iu(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, HS);
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
                L(this, JS).set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            L(this, YS).set(t, a),
            a.finally(() => {
              L(this, YS).delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !L(this, KS).has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!ml(r, !1)) return WS;
          let a = Mu(e),
            o = L(this, qS).get(a);
          ((!o || i < o) && L(this, qS).set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = L(this, GS).get(a) ?? new Set();
          return (
            s.add(t),
            L(this, GS).set(a, s),
            () => {
              let n = L(this, GS).get(a);
              n &&
                (n.delete(t),
                n.size === 0 && L(this, GS).delete(a),
                L(this, GS).size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (GS = new WeakMap()),
      (KS = new WeakMap()),
      (qS = new WeakMap()),
      (JS = new WeakMap()),
      (YS = new WeakMap()),
      (XS = new WeakMap()),
      M(ZS, `cacheKey`, `framer-fetch-client-cache`),
      (QS = ZS),
      ($S = j(void 0)),
      (eC = j(!0)),
      (tC = ({ children: e, client: t }) => {
        let [n] = p(() => t ?? new QS()),
          [r, i] = p(!0);
        return (
          c(
            () => (
              n.hydrateCache(),
              A(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          b(eC.Provider, { value: r, children: b($S.Provider, { value: n, children: e }) })
        );
      }),
      (ze.WillChange = Ge),
      (nC = Ml(
        _(function ({ links: e, children: t, ...n }, r) {
          let i = Ot(),
            { activeLocale: a } = dr(),
            o = $s(r),
            s = Gl(),
            c = [],
            l = e.map((e) => {
              if (e)
                return R(e)
                  ? tu(e, i, void 0, void 0, a)
                  : tu(e.href, i, e.implicitPathVariables, e.refKey, a, (e, t) => s(e, t, a, c));
            });
          if (c.length > 0) throw Promise.allSettled(c);
          return o(t(l), n);
        })
      )),
      (Z = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return Zu(e, t);
            case `boolean`:
              return $u(e);
            case `color`:
              return nd(e);
            case `date`:
              return id(e);
            case `enum`:
              return od(e);
            case `file`:
              return cd(e);
            case `link`:
              return ud(e);
            case `number`:
              return fd(e);
            case `object`:
              return hd(e, t);
            case `responsiveimage`:
              return _d(e);
            case `richtext`:
              return yd(e);
            case `string`:
              return Cd(e);
            case `vectorsetitem`:
              return xd(e);
            case `unknown`:
              return e;
            default:
              H(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Qe(e)
            ? { type: `boolean`, value: e }
            : it(e)
              ? { type: `date`, value: e.toISOString() }
              : z(e)
                ? { type: `number`, value: e }
                : R(e)
                  ? { type: `string`, value: e }
                  : $e(e)
                    ? { type: `array`, value: e.map(Z.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type ? Td(e, t, n) === 0 : !1;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type ? Td(e, t, n) < 0 : !1;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type ? Td(e, t, n) <= 0 : !1;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type ? Td(e, t, n) > 0 : !1;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type ? Td(e, t, n) >= 0 : !1;
        },
        in(e, t, n) {
          return t?.type === `array` ? t.value.some((t) => Z.equal(t, e, n)) : !1;
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => Z.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = wd(e),
            i = wd(t);
          return nt(r) || nt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = wd(e),
            i = wd(t);
          return nt(r) || nt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = wd(e),
            i = wd(t);
          return nt(r) || nt(i)
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
              return R(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              H(e);
          }
        },
      }),
      (rC = { type: `unknown`, isNullable: !0 }),
      (iC = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t), M(this, `schema`), M(this, `indexes`, []));
          let n = Ia(e);
          V(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (V(n !== `array`, `Array properties are not supported`),
              V(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (rt(i)) continue;
            let a = this.schema[t];
            if (!tt(a)) {
              if ((V(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
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
            r = (await Ed(this.collection, this.locale))[t]?.[n];
          return Ch.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems() {
          return (await Ed(this.collection, this.locale)).map((e, t) => {
            let n = String(t);
            return this.getDatabaseItem(e, n);
          });
        }
        async resolveItems(e) {
          let t = await Ed(this.collection, this.locale);
          return e.map((e) => {
            let n = t[Number(e)];
            return (V(n, `Can't find collection item`), this.getDatabaseItem(n, e));
          });
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (aC = new Map()),
      (oC = new WeakMap()),
      (sC = `$r_`),
      (cC = new Map()),
      (lC = 1e3),
      (Q = class e {
        constructor(e) {
          this.network = e;
        }
        static estimate(t, n) {
          let r = jd(),
            i = Md();
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
      (uC = class {
        constructor(e, t) {
          ((this.id = e),
            (this.relational = t),
            M(this, `nodes`, []),
            M(this, `winners`, new Map()));
        }
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new dC();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          V(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (dC = class {
        constructor() {
          (M(this, `node`), M(this, `cost`, new Q(1 / 0)), M(this, `nodes`, []));
        }
        update(e, t) {
          (this.nodes.push(e), Q.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (fC = class {
        constructor(e) {
          this.isSynchronous = e;
        }
      }),
      (pC = class extends fC {
        constructor() {
          (super(...arguments), M(this, `group`));
        }
        getGroup() {
          return (V(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (V(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return zu(this.evaluate(void 0));
        }
        evaluateAsync() {
          return Bu(this.evaluate(void 0));
        }
      }),
      (mC = class {
        constructor(e, t) {
          (M(this, `collections`),
            M(this, `richTextCache`, new WeakMap()),
            M(this, `vectorSetItemCache`, new WeakMap()),
            (this.collections = Bd(e, t)));
        }
        *resolveArrayValue(e) {
          return yield* Hu(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* G(t);
        }
        loadRichTextValue(e) {
          let t = e.value;
          V(Ld(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          V(n, `Can't find collection for rich text pointer`);
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
          return ot(t) ? yield t : t;
        }
        loadVectorSetItemValue(e) {
          let t = e.value;
          V(zd(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (V(n, `Can't find collection for vector set item pointer`),
            V(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
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
          return ot(t) ? yield t : t;
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
      (hC = `index`),
      (gC = class extends Set {
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
          return (e.sort((e, t) => e - t), K(this.name, ...e));
        }
      }),
      (_C = class {
        constructor(e, t, n) {
          ((this.id = e),
            (this.name = t),
            (this.data = n),
            M(this, `indexes`, new yC()),
            M(this, `fields`, new $()));
        }
      }),
      (vC = class {
        constructor(e, t, n, r, i, a) {
          for (let o in ((this.id = e),
          (this.data = t),
          (this.collection = n),
          (this.lookupNodes = r),
          (this.constraint = i),
          (this.ordering = a),
          M(this, `resolvedFields`, new $()),
          t.schema))
            for (let e of n.fields) e.name === o && this.resolvedFields.add(e);
        }
      }),
      (yC = class extends gC {
        constructor() {
          (super(...arguments), M(this, `name`, `Indexes`));
        }
      }),
      (bC = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        getValue(e) {
          V(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          switch (t?.type) {
            case `richtext`:
              return (
                V(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: Id(this.collection.data, t.value) }
              );
            case `vectorsetitem`:
              return (
                V(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: Rd(this.collection.data, t.value) }
              );
          }
          return t ?? null;
        }
      }),
      ($ = class extends gC {
        constructor() {
          (super(...arguments), M(this, `name`, `Fields`));
        }
      }),
      (xC = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        getHash() {
          return K(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (SC = class {
        constructor(e) {
          (M(this, `fields`, []), e && this.merge(e));
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return K(`Ordering`, ...this.fields);
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
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== hC) return !1;
          return !0;
        }
      }),
      (CC = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        getHash() {
          return K(`RequiredProps`, this.ordering, this.resolvedFields);
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
      (wC = class e {
        constructor(e) {
          ((this.parent = e), M(this, `node`), M(this, `ordering`), M(this, `fields`, []));
        }
        takeNode() {
          let e = this.node;
          return (V(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (V(!this.node, `Node already set`), (this.node = e));
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
          return this.ordering ?? new SC();
        }
        getRequiredResolvedFields() {
          let e = new $();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new CC(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          V(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (V(e, `Field must exist`), e.field);
        }
      }),
      (TC = class {
        constructor() {
          (M(this, `pointers`, new Map()), M(this, `values`, new Map()));
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
      (EC = class e {
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
      (DC = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        getHash() {
          return K(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (OC = class e extends pC {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            M(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return K(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
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
          return new CC(e.ordering, t);
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
            this.projections.map((e) => new DC(e.input.getOptimized(), e.field)),
            this.passthrough
          );
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Hu(
              n.tuples.map((t) =>
                Hu(
                  this.projections.map((n) => G({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new TC();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            V(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (kC = { type: 0 }),
      (AC = class extends fC {
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        evaluateSync() {
          return zu(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return Bu(this.evaluate(void 0, void 0));
        }
      }),
      (jC = { type: 0 }),
      (MC = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        getHash() {
          return K(`CaseCondition`, this.when, this.then);
        }
      }),
      (NC = class e extends AC {
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
            M(this, `definition`, { type: `unknown`, isNullable: !0 }));
        }
        getHash() {
          return K(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new Q(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new MC(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* G({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: Hu(
              this.conditions.map((n) =>
                G({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (Z.equal(n, e, jC)) return t;
          } else for (let { when: e, then: t } of r) if (ed(e)) return t;
          return i;
        }
      }),
      (PC = class {
        constructor(e, t, n) {
          ((this.normalizer = e),
            (this.query = t),
            (this.locale = n),
            M(this, `collectionId`, 0),
            M(this, `indexId`, 0),
            M(this, `fieldId`, 0),
            M(this, `subqueries`, []));
        }
        build() {
          let e = new wC();
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
            o = new SC();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (tt(t)) continue;
                a.add(t.field);
                let r = new xC(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new bC(Ud(this.fieldId++), void 0, t.definition, void 0),
                  a = new DC(t, r);
                i.push(a);
                let s = new xC(r, e.direction);
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
              if (tt(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              V(n.alias, `Subqueries should have an alias`);
              let r = Ud(this.fieldId++),
                a = n.alias,
                s = new bC(r, a, t.definition, void 0),
                c = new DC(t, s);
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
              H(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = Ad(t.data, this.locale),
            i = t.alias,
            a = new _C(Vd(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new bC(Ud(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.fields.add(r));
          }
          {
            let e = new bC(Ud(this.fieldId++), hC, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: hC, collectionName: i });
            let t = new SC(),
              r = new xC(e);
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
            let i = new SC(),
              o = new vC(Hd(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new SC(),
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
              H(t.type, `Unsupported join type`);
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
              H(t, `Unsupported expression`);
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
          return this.normalizer.newScalarConstant(rC, null);
        }
        buildLiteralValue(e) {
          let t = Z.parse(e.value);
          return this.normalizer.newScalarConstant(rC, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (V(r, `Missing argument`), this.buildExpression(e, r));
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
                V(n, `Missing argument`),
                V(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                V(n, `Missing argument`),
                V(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              H(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new FC(e);
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
            let n = new FC(e);
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
              (t) => new MC(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
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
              H(t.operator, `Unsupported unary operator`);
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
              H(t.operator, `Unsupported binary operator`);
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
      (FC = class {
        constructor(e) {
          ((this.inScope = e),
            M(this, `referencedFields`, new $()),
            M(this, `referencedOuterFields`, new $()));
        }
      }),
      (IC = class e extends pC {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            M(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return K(`RelationalFilter`, this.inputGroup.id, this.predicate);
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
          return (t.merge(this.predicate.referencedFields), new CC(e.ordering, t));
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
            n = yield* Hu(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => ed(n[t] ?? null));
        }
      }),
      (LC = class e extends pC {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        getHash() {
          return K(`RelationalIndexLookup`, this.index.id, ...this.query);
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
          return Q.estimate(1, e ? 100 * lC : 50 * lC);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection;
          return new EC(
            this.getOutputFields(),
            (yield e.data.lookupItems(this.query)).map((n) => {
              let r = new TC();
              for (let i of e.resolvedFields) {
                let e = i.getValue(n);
                (r.addPointer(t, n.pointer), r.addValue(i, e));
              }
              return r;
            })
          );
        }
      }),
      (RC = class e extends pC {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            M(this, `leftGroup`),
            M(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return K(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
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
          return new CC(new SC(), e.resolvedFields);
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
          let { left: t, right: n } = yield* G({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (zC = class e extends AC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarEquals`, this.left, this.right);
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
          let { left: n, right: r } = yield* G({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.equal(n, r, kC) };
        }
      }),
      (BC = class e extends pC {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            M(this, `leftGroup`),
            M(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return K(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
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
          return new CC(new SC(), n);
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
          let o = new EC(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new TC();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* G({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof zC) {
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
          let r = new EC(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new TC();
              (n.merge(i),
                n.merge(a),
                ed(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (VC = class e extends pC {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            M(this, `leftGroup`),
            M(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return K(`RelationalRightJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
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
          return new CC(new SC(), n);
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
          let o = new EC(this.getOutputFields());
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              s = a.get(n) ?? [];
            if (s.length === 0) o.push(e);
            else
              for (let t of s) {
                let n = new TC();
                (n.merge(e), n.merge(t), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* G({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof zC) {
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
          let r = new EC(this.getOutputFields());
          for (let i of n.tuples) {
            let n = !1;
            for (let a of t.tuples) {
              let t = new TC();
              (t.merge(i),
                t.merge(a),
                ed(yield* this.constraint.evaluate(e, t)) && (r.push(t), (n = !0)));
            }
            n || r.push(i);
          }
          return r;
        }
      }),
      (HC = class e extends pC {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        getHash() {
          return K(`RelationalScan`, this.collection.id);
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
          return Q.estimate(1, 200 * lC);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields();
          return new EC(
            t,
            (yield e.data.scanItems()).map((n) => {
              let r = new TC();
              for (let i of t) {
                let t = i.getValue(n);
                (r.addPointer(e, n.pointer), r.addValue(i, t));
              }
              return r;
            })
          );
        }
      }),
      (UC = class e extends pC {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            M(this, `leftGroup`),
            M(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return K(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
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
          return new CC(new SC(), e.resolvedFields);
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
          let { left: t, right: n } = yield* G({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (WC = class e extends AC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarAnd`, this.left, this.right);
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
          let { left: n, right: r } = yield* G({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: ed(n) && ed(r) };
        }
      }),
      (GC = class extends AC {
        constructor(e, t) {
          let n = new $(),
            r = new $();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        getHash() {
          return K(`ScalarConstant`, this.definition, this.value);
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
      (KC = { type: 0 }),
      (qC = class e extends AC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarContains`, this.source, this.target);
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
          let { source: n, target: r } = yield* G({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.contains(n, r, KC) };
        }
      }),
      (JC = { type: 0 }),
      (YC = class e extends AC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarEndsWith`, this.source, this.target);
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
          let { source: n, target: r } = yield* G({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.endsWith(n, r, JC) };
        }
      }),
      (XC = class e extends AC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarGreaterThan`, this.left, this.right);
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
          let { left: n, right: r } = yield* G({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.greaterThan(n, r, kC) };
        }
      }),
      (ZC = class e extends AC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarGreaterThanOrEqual`, this.left, this.right);
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
          let { left: n, right: r } = yield* G({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.greaterThanOrEqual(n, r, kC) };
        }
      }),
      (QC = class e extends AC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarLessThan`, this.left, this.right);
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
          let { left: n, right: r } = yield* G({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.lessThan(n, r, kC) };
        }
      }),
      ($C = class e extends AC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarLessThanOrEqual`, this.left, this.right);
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
          let { left: n, right: r } = yield* G({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.lessThanOrEqual(n, r, kC) };
        }
      }),
      (ew = class e extends AC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarNotEquals`, this.left, this.right);
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
          let { left: n, right: r } = yield* G({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Z.equal(n, r, kC) };
        }
      }),
      (tw = class e extends AC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarOr`, this.left, this.right);
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
          let { left: n, right: r } = yield* G({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: ed(n) || ed(r) };
        }
      }),
      (nw = { type: 0 }),
      (rw = class e extends AC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarStartsWith`, this.source, this.target);
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
          let { source: n, target: r } = yield* G({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.startsWith(n, r, nw) };
        }
      }),
      (iw = class {
        constructor(e) {
          ((this.normalizer = e), M(this, `memo`), (this.memo = e.memo));
        }
        explore(e) {
          let t = e.getGroup();
          if (e instanceof BC) {
            let n = new VC(e.right, e.left, e.constraint);
            this.memo.addRelational(n, t);
          }
          if (e instanceof IC) {
            if (e.predicate instanceof WC) {
              let n = new RC(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof tw) {
              let n = new UC(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof HC)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new LC(n, Wd(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof IC) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof HC)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof zC &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof GC &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = Wd(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new LC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof ew &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof GC &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = Wd(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new LC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof QC &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof GC &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Wd(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new LC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof $C &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof GC &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Wd(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new LC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof XC &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof GC &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Wd(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new LC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof ZC &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof GC &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Wd(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new LC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof qC &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof GC &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = Wd(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new LC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof rw &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof GC &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = Wd(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new LC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof YC &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof GC &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = Wd(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new LC(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (aw = class {
        constructor(e) {
          this.outputFields = e;
        }
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (ow = class {
        constructor() {
          (M(this, `nodes`, new Map()), M(this, `groups`, []));
        }
        addGroup(e) {
          let t = new uC(Nd(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new aw(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            V(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (sw = class e extends pC {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            M(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return K(`RelationalLimit`, this.inputGroup.id, this.limit);
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
          return (t.merge(this.limit.referencedFields), new CC(this.ordering, t));
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
          let { input: t, limit: n } = yield* G({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = pd(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (cw = class e extends pC {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            M(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return K(`RelationalOffset`, this.inputGroup.id, this.offset);
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
          return (t.merge(this.offset.referencedFields), new CC(this.ordering, t));
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
          let { input: t, offset: n } = yield* G({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = pd(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (lw = class e extends AC {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            M(this, `inputGroup`),
            M(this, `definition`),
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
          return K(
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
          for (let n of t) tt(n.collection) || e.add(n);
          return new CC(this.ordering, e);
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
          let n = new TC();
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
      (uw = class e extends AC {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            V(t.isNullable, `Unsupported non-nullable cast`));
        }
        getHash() {
          return K(`ScalarCast`, this.input, this.definition);
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
      (dw = class e extends AC {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            M(this, `inputGroup`),
            M(this, `definition`),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        getHash() {
          return K(
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
          return (tt(this.field.collection) || e.add(this.field), new CC(this.ordering, e));
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
          let n = new TC();
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
      (fw = { type: 0 }),
      (pw = class e extends AC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarIn`, this.left, this.right);
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
          let { left: n, right: r } = yield* G({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.in(n, r, fw) };
        }
      }),
      (mw = { type: 1 }),
      (hw = class e extends AC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            M(this, `definition`, { type: `number`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarIndexOf`, this.source, this.target);
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
          let { source: n, target: r } = yield* G({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: Z.indexOf(n, r, mw) };
        }
      }),
      (gw = class e extends AC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, {
              type: `array`,
              definition: { type: `string`, isNullable: !1 },
              isNullable: !1,
            }));
        }
        getHash() {
          return K(`ScalarIntersection`, this.left, this.right);
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
          let { left: n, right: r } = yield* G({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = Kd(n),
            a = Kd(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (_w = class e extends AC {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            M(this, `definition`, { type: `number`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarLength`, this.input);
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
      (vw = class e extends AC {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          return new e(this.input.getOptimized());
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !ed(yield* this.input.evaluate(e, t)) };
        }
      }),
      (yw = { type: 0 }),
      (bw = class e extends AC {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarNotIn`, this.left, this.right);
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
          let { left: n, right: r } = yield* G({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Z.in(n, r, yw) };
        }
      }),
      (xw = class extends AC {
        constructor(e, t) {
          V(e.name !== hC, `Invalid field name`);
          let n = new $(),
            r = new $();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            M(this, `definition`),
            (this.definition = e.definition));
        }
        getHash() {
          return K(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (V(e, `Context must exist`), e.getValue(this.field))
            : (V(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (Sw = class {
        constructor(e) {
          this.memo = e;
        }
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new HC(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new LC(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new BC(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof GC && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof BC && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          if (
            e instanceof VC &&
            t.referencedFields.subsetOf(e.rightGroup.relational.outputFields)
          ) {
            let n = this.newRelationalFilter(e.right, t);
            return this.newRelationalLeftJoin(e.left, n, e.constraint);
          }
          let n = new IC(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new OC(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof OC &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new sw(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new cw(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof GC) &&
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
          let n = new xw(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new GC(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof vw)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof zC) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof ew) return this.newScalarEquals(e.left, e.right);
          if (e instanceof QC) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof $C) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof XC) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof ZC) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof WC) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof tw) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new vw(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof GC && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof GC && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof GC && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof GC && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new WC(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof GC && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof GC && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof GC && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof GC && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new tw(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof xw;
          if (t instanceof xw && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new zC(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof xw;
          if (t instanceof xw && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new ew(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof xw;
          if (t instanceof xw && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new QC(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof xw;
          if (t instanceof xw && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new $C(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof xw;
          if (t instanceof xw && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new XC(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof xw;
          if (t instanceof xw && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new ZC(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new pw(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new bw(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new MC(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new NC(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new qC(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new rw(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new YC(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new _w(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new hw(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new lw(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new dw(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new gw(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new uw(e, t);
          return this.finishScalar(n);
        }
      }),
      (Cw = class extends pC {}),
      (ww = class e extends Cw {
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            M(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return K(`EnforcerResolve`, this.inputGroup.id, this.fields);
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
          return new CC(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return Q.estimate(0, 100 * lC).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          V(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Set();
          for (let e of this.fields)
            (V(e.collection, `Collection required to resolve field`), n.add(e.collection));
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
              return (V(r.length === n.length, `Invalid number of items`), [e, r]);
            })
          );
          return t.map(t.fields, (e) => {
            let t = new TC();
            t.merge(e);
            for (let [n, i] of r) {
              let r = e.getPointer(n);
              if (!r) continue;
              let a = i.shift();
              (V(a, `Item not found`), V(a.pointer === r, `Pointer mismatch`));
              for (let e of n.fields) {
                let n = e.getValue(a);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (Tw = { type: 0 }),
      (Ew = class e extends Cw {
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            M(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return K(`EnforcerSort`, this.inputGroup.id, this.ordering);
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
            e.name !== hC && (tt(e.collection) || t.add(e));
          return new CC(new SC(), t);
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
              if (n.name === hC) {
                let r = n.collection;
                V(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                V(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                V(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!Z.equal(a, o, Tw)) {
                if (nt(a) || Z.lessThan(a, o, Tw)) return i ? -1 : 1;
                if (nt(o) || Z.greaterThan(a, o, Tw)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (Dw = class {
        constructor(e, t, n) {
          ((this.query = e),
            (this.locale = t),
            (this.resolver = n),
            M(this, `memo`, new ow()),
            M(this, `normalizer`, new Sw(this.memo)),
            M(this, `explorer`, new iw(this.normalizer)));
        }
        optimize() {
          let e = new PC(this.normalizer, this.query, this.locale).build(),
            t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (V(r, `Normalized node not found`), this.createEnforcer(n, r, t));
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
            let r = new ww(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new Ew(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (Ow = Ru(`query-engine`)),
      (kw = class {
        async evalQuery(e, t, n) {
          Ow.enabled &&
            Ow.debug(`Query:
${of(e)}`);
          let r = new mC(e, t),
            [i, a] = new Dw(e, t, r).optimize(),
            o = await i.evaluateAsync(),
            s = Object.entries(a),
            c = [],
            l = Vu(
              Hu(
                o.tuples.map((e) => {
                  let t = {},
                    i = {};
                  for (let [a, o] of s) {
                    let s = e.getValue(o);
                    ((t[a] = r.resolveValue(s)), n && (i[a] = s));
                  }
                  return (n && c.push(i), G(t));
                })
              )
            );
          return n ? [st(l) ? await l : l, c] : l;
        }
        async serializeableQuery(e, t) {
          return this.evalQuery(e, t, !0);
        }
        async query(e, t) {
          return this.evalQuery(e, t, !1);
        }
        resolveSerializableQueryResult(e, t, n) {
          let r = new mC(t, n);
          return Vu(
            Hu(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let i = e[n];
                  t[n] = r.resolveValue(i);
                }
                return G(t);
              })
            )
          );
        }
      }),
      (Aw = (() => Fh.QueryCache)()),
      (jw = class {
        constructor(e, t = 1 / 0) {
          ((this.queryEngine = e),
            (this.maxSize = t),
            M(this, `cache`, new Map()),
            M(this, `serializedCache`, Rh === void 0 ? void 0 : new Map()));
        }
        prune() {
          if (!(this.cache.size <= this.maxSize))
            for (let [e, t] of this.cache) {
              if (this.cache.size <= this.maxSize) break;
              t.state !== `pending` && (this.cache.delete(e), this.serializedCache?.delete(e));
            }
        }
        get(e, t) {
          let n = lf(e, t),
            r = this.cache.get(n);
          if (r) {
            if (
              (this.cache.delete(n),
              this.cache.set(n, r),
              Rh !== void 0 && this.serializedCache !== void 0 && !Dd(n) && r.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(n);
              e !== void 0 && Rh.set(Aw, n, e);
            }
            return r;
          }
          let i = new Ch(() => {
            let r = Dd(n),
              i = r ? void 0 : rn(Aw, n);
            if (i)
              try {
                return this.queryEngine.resolveSerializableQueryResult(i, e, t);
              } catch (e) {
                tn(e, n);
              }
            return Rh !== void 0 && !r
              ? this.queryEngine
                  .serializeableQuery(e, t)
                  .then(([e, t]) => (this.serializedCache?.set(n, t), Rh.set(Aw, n, t), e))
              : this.queryEngine.query(e, t);
          });
          return (this.cache.set(n, i), this.prune(), i);
        }
      }),
      (Mw = new jw(new kw())),
      (Nw = `style[data-framer-breakpoint-css]`),
      (Pw = `page`),
      (Fw = Symbol(`cycle`)),
      (Rw = (() => {
        let e = j(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (zw = r.createContext(void 0)),
      (Bw = () => r.useContext(zw)),
      (Vw = {
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
      (Hw = {
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
      (Uw = Vw),
      (Ww = `System Default`),
      (Gw = class {
        constructor() {
          (M(this, `name`, `local`),
            M(this, `fontFamilies`, []),
            M(this, `byFamilyName`, new Map()),
            M(this, `fontAliasBySelector`, new Map()),
            M(this, `fontAliases`, new Map()));
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
          for (let t of Object.keys(Uw)) {
            let n = Uw[t];
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
          for (let [e, t] of Object.entries(Hw)) this.addFontAlias(e, t);
          let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
          this.addFontFamily(t);
          for (let [e, t] of n) this.addFontAlias(e, t);
          return (e.push(...t.fonts), e);
        }
        addFontAlias(e, t) {
          (this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e));
        }
        getSystemFontFamily() {
          let e = { name: Ww, fonts: [], source: this.name },
            t = new Map(),
            n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
          for (let r of [`normal`, `italic`])
            for (let i of n) {
              let n = Zf(i, r),
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
      (Kw = {
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
      (qw = class extends Map {
        constructor() {
          (super(...arguments), M(this, `_hash`, 0));
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
      (Yw = `Variable`),
      (Xw = `BI;`),
      (Zw = class {
        constructor() {
          (M(this, `name`, `builtIn`),
            M(this, `fontFamilies`, []),
            M(this, `byFamilyName`, new Map()),
            M(this, `assetByKey`, new Map()));
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
              l = np(n),
              u = {
                assetKey: n.key,
                family: i,
                selector: this.createSelector(r, c, e.font.fontVersion),
                variant: c,
                file: l,
                hasOpenTypeFeatures: ap(a),
                variationAxes: op(o),
                category: e.font.fontCategory,
                weight: lp(c),
                style: dp(c),
                cssFamilyName: rp(r, s),
              };
            (i.fonts.push(u), this.assetByKey.set(n.key, n), t.push(u));
          }
          for (let e of this.fontFamilies)
            e.fonts.sort((e, t) => {
              let n = lp(e.variant),
                r = lp(t.variant);
              return !n || !r ? 1 : n - r;
            });
          return t;
        }
        static parseVariant(e) {
          return { weight: Qw[up(e)], style: dp(e) };
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
          V(e.assetKey, `Font must have an asset key`);
          let t = this.assetByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return ap(t)
            ? t?.map((e) => {
                if (sp(e)) return { tag: e.tag, coverage: e.coverage };
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
          return `${Xw}${e}/${t}/${n}`;
        }
        parseSelector(e) {
          if (!e.startsWith(Xw)) return null;
          let [t, n] = e.split(Xw);
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
      (Qw = {
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
      ($w = Ru(`custom-font-source`)),
      (eT = `CUSTOM;`),
      (tT = `CUSTOMV2;`),
      (nT = class e {
        constructor() {
          (M(this, `name`, `custom`),
            M(this, `fontFamilies`, []),
            M(this, `byFamilyName`, new Map()),
            M(this, `assetsByKey`, new Map()));
        }
        deprecatedImportFonts(t) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
          let n = [];
          for (let r of t) {
            if (!this.isValidCustomFontAsset(r)) continue;
            let t = r.properties?.font.variationAxes,
              i = Array.isArray(t),
              a = bp(r.properties),
              o = this.createFontFamily(a),
              s = r.properties?.font.openTypeData,
              c = i ? `variable` : this.inferVariantName(a),
              l = np(r),
              u = e.createLegacySelector(a),
              { family: d, variant: f } = xp(r.properties.font),
              p = e.createSelector(d, f),
              m = {
                assetKey: r.key,
                family: o,
                selector: u,
                variant: c,
                file: l,
                hasOpenTypeFeatures: ap(s),
                variationAxes: op(t),
                owner: wp(r),
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
            let { family: t, variant: i, weight: a, style: o } = xp(n.properties.font),
              s = n.properties.font.variationAxes,
              c = Array.isArray(s),
              l = n.properties.font.openTypeData,
              u = np(n),
              d = wp(n),
              f = bp(n.properties),
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
                hasOpenTypeFeatures: ap(l),
                variationAxes: op(s),
                owner: d,
                alternativeSelectors: {
                  [p]: {
                    variant: c ? `variable` : this.inferVariantName(f),
                    cssFamilyName: e.cssFontFamilyFromSelector(p),
                  },
                },
                cssFamilyName: e.cssFontFamilyFromSelector(h),
              },
              _ = yp(m.fonts, g);
            if (_?.projectDuplicate) g.owner === `project` && ((m.fonts[_.index] = g), (r[h] = g));
            else if (_) {
              $w.warn(`Duplicate font found for:`, g, `with existing font:`, _.existingFont);
              let e = _.existingFont,
                t = g.file?.endsWith(`.woff2`) ?? !1,
                n = e.file?.endsWith(`.woff2`) ?? !1;
              t && !n && ((m.fonts[_.index] = g), (r[h] = g));
            } else (m.fonts.push(g), (r[h] = g));
            this.assetsByKey.set(n.key, n);
          }
          for (let e of this.fontFamilies) e.fonts.length > 0 && Cp(e);
          return Object.values(r);
        }
        static createSelector(e, t) {
          return `${tT}${e}${t ? ` ${t}` : ``}`;
        }
        static createLegacySelector(e) {
          return `${eT}${e}`;
        }
        static cssFontFamilyFromSelector(e) {
          return (
            V(gp(e), `Selector must be a custom font selector`),
            vp(e) ? e.slice(eT.length) : e.slice(tT.length)
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
          V(e.assetKey, `Font must have an asset key`);
          let t = this.assetsByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return ap(t)
            ? t?.map((e) => {
                if (sp(e)) return { tag: e.tag, coverage: e.coverage };
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
      (rT = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`]),
      (iT = `FS;`),
      (aT = {
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
      (oT = Object.keys(aT)),
      (sT = (() => RegExp(`^(?:${[...oT, `italic`, `variable`].join(`|`)})`, `u`))()),
      (cT = class e {
        constructor() {
          (M(this, `name`, `fontshare`),
            M(this, `fontFamilies`, []),
            M(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          let t = e.toLowerCase().split(` `),
            n = oT.find((e) => t.includes(e)),
            r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`;
          return { weight: (n && aT[n]) || 400, style: r === `italic` ? r : `normal` };
        }
        parseSelector(e) {
          if (!e.startsWith(iT)) return null;
          let t = e.split(`-`);
          if (t.length !== 2) return null;
          let [n, r] = t;
          return !n || !r
            ? null
            : {
                name: n.replace(iT, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`),
              };
        }
        static createSelector(e, t) {
          return `${iT}${e}-${t.toLowerCase()}`;
        }
        static createMetadataSelector(e) {
          return `${iT}${e}`;
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        async importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = await Tp(`fontshare`),
            i = [];
          for (let a of t) {
            let t = a.font_styles
                .filter((e) => {
                  let t = e.name.toLowerCase();
                  return !(!sT.exec(t) || t.split(` `).includes(`wide`));
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
                } = fp(e, t),
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
                  category: kp(a.category),
                  hasOpenTypeFeatures: u,
                  variationAxes: e.isVariable ? s : void 0,
                  cssFamilyName: rp(l.name, e.isVariable),
                };
              (l.fonts.push(f), i.push(f));
            }
          }
          return i;
        }
        async getOpenTypeFeatures(t) {
          return (await Ep(`fontshare`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (lT = `Inter`),
      (uT = `FR;`),
      (dT = {
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
      (fT = class e {
        constructor() {
          (M(this, `name`, `framer`),
            M(this, `fontFamilies`, []),
            M(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        static getDraftFontPropertiesBySelector(e) {
          if (!e.startsWith(uT) && !e.startsWith(lT)) return null;
          let [t, n = ``] = e.split(`-`);
          if (!t) return null;
          let r = n.includes(`Italic`) ? `italic` : `normal`,
            i = n.replace(`Italic`, ``);
          return {
            cssFamilyName: t,
            style: r,
            weight: (i && dT[i]) || 400,
            source: `framer`,
            variant: void 0,
            category: `sans-serif`,
          };
        }
        static createMetadataSelector(e) {
          return `${uT}${e}`;
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
          return (await Ep(`framer`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (pT = `GF;`),
      (mT = class e {
        constructor() {
          (M(this, `name`, `google`),
            M(this, `fontFamilies`, []),
            M(this, `byFamilyName`, new Map()));
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
          if (!e.startsWith(pT)) return null;
          let t = e.includes(`-variable-`),
            n = t ? e.split(`-variable-`) : e.split(`-`);
          if (n.length !== 2) return null;
          let [r, i] = n;
          return !r || !i
            ? null
            : { name: r.replace(pT, ``), variant: i, source: this.name, isVariable: t };
        }
        static createSelector(e, t, n) {
          return `${pT}${e}-${n ? `variable-` : ``}${t}`;
        }
        static createMetadataSelector(e) {
          return `${pT}${e}`;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        async importFonts(t, n, r) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let i = await Tp(`google`),
            a = [],
            o = jp(t, (e) => e.family),
            s = jp(n, (e) => e.family);
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
              h = m.filter(Xf),
              g = i[e.createMetadataSelector(t)];
            for (let e of m) {
              let { weight: t, style: r, selector: i, googleFontsVariantName: o } = e,
                {
                  variantBold: s,
                  variantItalic: l,
                  variantBoldItalic: u,
                  variantVariable: d,
                  variantVariableItalic: f,
                } = (Xf(e) ? fp(e, h) : void 0) ?? {},
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
                  category: Ap(n.category),
                  file: e.file?.replace(`http://`, `https://`),
                  variationAxes: e.isVariable ? p : void 0,
                  hasOpenTypeFeatures: g,
                  cssFamilyName: rp(c.name, e.isVariable),
                };
              (c.fonts.push(m), a.push(m));
            }
          }
          return a;
        }
        async getOpenTypeFeatures(t) {
          return (await Ep(`google`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (hT = We(ih(), 1)),
      (gT = 5e3),
      (_T = 3),
      (vT = class extends Error {
        constructor(e) {
          (super(e), (this.name = `FontLoadingError`));
        }
      }),
      (yT = new Map()),
      (bT = new Map()),
      (xT = (e, t) => Mp(e, t)),
      (ST = {
        'FR;Inter': [
          { tag: `opsz`, minValue: 14, maxValue: 32, defaultValue: 14, name: `Optical size` },
          { tag: `wght`, minValue: 100, maxValue: 900, defaultValue: 400, name: `Weight` },
        ],
      }),
      (CT = class {
        constructor() {
          (M(this, `enabled`, !1),
            M(this, `bySelector`, new qw()),
            M(this, `loadedSelectors`, new Set()),
            M(this, `getGoogleFontsListPromise`),
            M(this, `getFontshareFontsListPromise`),
            M(this, `getBuiltInFontsListPromise`),
            M(
              this,
              `customFontsImportPromise`,
              new Promise((e) => {
                this.resolveCustomFontsImportPromise = e;
              })
            ),
            M(this, `local`),
            M(this, `google`),
            M(this, `fontshare`),
            M(this, `builtIn`),
            M(this, `framer`),
            M(this, `custom`),
            M(this, `bySelectorValuesCache`),
            M(this, `testing`, { addFont: this.addFont.bind(this) }),
            (this.local = new Gw()),
            (this.google = new mT()),
            (this.fontshare = new cT()),
            (this.framer = new fT()),
            (this.custom = new nT()),
            (this.builtIn = new Zw()),
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
              let { staticFonts: e, variableFonts: t } = await _y.fetchGoogleFontsList(),
                n = await Pp(`google`);
              for (let r of await this.google.importFonts(e, t, n)) this.addFont(r);
              return { staticFonts: e, variableFonts: t };
            })),
            this.getGoogleFontsListPromise
          );
        }
        async importFontshareFonts() {
          if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = _y.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise,
              t = await Pp(`fontshare`);
            for (let n of await this.fontshare.importFonts(e, t)) this.addFont(n);
          }
          return this.getFontshareFontsListPromise;
        }
        async importBuiltInFonts() {
          if (!this.getBuiltInFontsListPromise) {
            this.getBuiltInFontsListPromise = _y.fetchBuiltInFontsList();
            let e = await this.getBuiltInFontsListPromise;
            for (let t of await this.builtIn.importFonts(e)) this.addFont(t);
          }
          return this.getBuiltInFontsListPromise;
        }
        importFramerFonts(e) {
          let t = Pp(`framer`);
          this.framer.importFonts(e, t).forEach((e) => {
            this.addFont(e);
          });
        }
        importCustomFonts(e, t) {
          this.bySelector.forEach((e, t) => {
            gp(t) && this.bySelector.delete(t);
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
            let e = mT.parseVariant(n.variant);
            if (Xf(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: n.variant,
                cssFamilyName: ip(n, `google`),
                source: `google`,
                category: void 0,
              };
          }
          let r = this.fontshare.parseSelector(e);
          if (r) {
            let e = cT.parseVariant(r.variant);
            if (Xf(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: r.variant,
                cssFamilyName: ip(r, `fontshare`),
                source: `fontshare`,
                category: void 0,
              };
          }
          let i = this.builtIn.parseSelector(e);
          if (i) {
            let e = Zw.parseVariant(i.variant);
            if (Xf(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: i.variant,
                cssFamilyName: ip(i, `builtIn`),
                source: `builtIn`,
                category: void 0,
              };
          }
          return fT.getDraftFontPropertiesBySelector(e) || null;
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
            i = hp(t);
          switch (r) {
            case `local`:
              return (this.loadedSelectors.add(e), 1);
            case `framer`:
              if ((va() || (await Np(t.family.name, t.style, t.weight)), i)) {
                if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
                await xT({ family: n, url: t.file, weight: t.weight, style: t.style }, document);
              }
              return (this.loadedSelectors.add(e), 1);
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`:
              return t.file
                ? (await xT({ family: n, url: t.file, weight: t.weight, style: t.style }, document),
                  this.loadedSelectors.add(e),
                  1)
                : Promise.reject(`Unable to load font: ${e}`);
            default:
              H(r);
          }
        }
        async loadFontsFromSelectors(e) {
          if (!this.enabled) return [];
          let t = [];
          (e.some((e) => e.startsWith(iT)) &&
            t.push(
              this.importFontshareFonts().catch((e) => {
                zr(`Failed to load Fontshare fonts:`, e);
              })
            ),
            e.some((e) => e.startsWith(pT)) &&
              t.push(
                this.importGoogleFonts().catch((e) => {
                  zr(`Failed to load Google fonts:`, e);
                })
              ),
            e.some((e) => e.startsWith(Xw)) &&
              t.push(
                this.importBuiltInFonts().catch((e) => {
                  zr(`Failed to load built-in fonts:`, e);
                })
              ),
            e.some(gp) &&
              t.push(
                this.customFontsImportPromise.catch((e) => {
                  zr(`Failed to load custom fonts:`, e);
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
          let n = e.filter((e) => !wT.loadedSelectors.has(e));
          n.length !== 0 &&
            (await wT.loadWebFontsFromSelectors(n),
            n.every((e) => wT.loadedSelectors.has(e)) && t && t());
        }
        async loadWebFontsFromSelectors(e) {
          return this.loadFontsFromSelectors(e);
        }
        get defaultFont() {
          let e = this.getFontBySelector(`Inter`);
          return (V(e, `Can’t find Inter font`), e);
        }
      }),
      (wT = new CT()),
      (TT = (() => ({
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
      (ET = { opacity: 0 }),
      (DT = { opacity: 1 }),
      (OT = Yp(
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
            d = f(() => io(n), [n]),
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
            D(ao(e.as), {
              ...l,
              style: u,
              ref: t,
              draggable: o,
              children: [n && b($a, { image: n, alt: a, draggable: o }), i],
            })
          );
        })
      )),
      (AT = (() =>
        !ha() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`)()),
      (jT =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (MT = `{{ text-placeholder }}`),
      (NT = `rich-text-wrapper`),
      (PT = Oa(
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
              environment: O = Y.current,
              withExternalLayout: ee = !1,
              positionSticky: k,
              positionStickyTop: te,
              positionStickyRight: A,
              positionStickyBottom: ne,
              positionStickyLeft: re,
              __htmlStructure: j,
              __fromCanvasComponent: M = !1,
              _forwardedOverrideId: ie,
              _forwardedOverrides: ae,
              _usesDOMRect: N,
              children: oe,
              ...se
            } = e,
            ce = ta(),
            le = fo(e),
            ue = E(null),
            de = t ?? ue,
            { navigate: fe, getRoute: P } = Ot(),
            pe = At();
          (gn(e.preload ?? []), vo(e, de));
          let me = d(Dy),
            F = fl(),
            he = o,
            ge = ie ?? n;
          if (ge && ae) {
            let e = ae[ge];
            typeof e == `string` && (he = e);
          }
          let I = ``;
          if (he) {
            let e = Zp(he);
            I = j ? j.replace(MT, e) : `<p>${e}</p>`;
          } else if (i) I = i;
          else if (s) {
            let e = Zp(s);
            I = j ? j.replace(MT, e) : `<p>${e}</p>`;
          } else a && (I = a);
          let ve = Il(),
            ye = f(() => (F || !P || !pe ? I : Qp(I, P, pe, ve)), [I, P, pe, ve]);
          if (
            (c(() => {
              let e = de.current;
              if (e === null) return;
              function t(e) {
                let t = Al(e.target, de.current);
                xa(e) ||
                  !fe ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (vl(fe, t, ve) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [fe, ve]),
            tm(l, M, de),
            !S)
          )
            return null;
          let be = D && O() === Y.canvas,
            L = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: em(T),
              opacity: be ? 0 : C,
              flexShrink: 0,
            },
            xe = Y.hasRestrictions(),
            Se = Qi(e, ce || 0, !1),
            Ce = N && (u === `auto` || p === `auto`),
            we =
              e.transformTemplate || !Se || !xe || M || Ce
                ? (e.transformTemplate ?? uo(v))
                : void 0;
          if (!ee) {
            if (Se && xe && !Ce) {
              let e = n_.getNumber(w).toFixed(4);
              ((L.transform = `translate(${Se.x}px, ${Se.y}px) rotate(${e}deg)`),
                (L.width = Se.width),
                (L.minWidth = Se.width),
                (L.height = Se.height));
            } else
              ((L.left = m),
                (L.right = h),
                (L.top = g),
                (L.bottom = _),
                (L.width = u),
                (L.height = p),
                (L.rotate = w));
            k
              ? (!F || me) &&
                ((L.position = `sticky`),
                (L.willChange = `transform`),
                (L.zIndex = 1),
                (L.top = te),
                (L.right = A),
                (L.bottom = ne),
                (L.left = re))
              : F && (e.positionFixed || e.positionAbsolute) && (L.position = `absolute`);
          }
          return (
            Js(e, L),
            Gs(e, L),
            Object.assign(L, e.style),
            b(_e.div, {
              id: n,
              ref: de,
              ...se,
              style: L,
              layoutId: le,
              'data-framer-name': r,
              'data-framer-component-type': `DeprecatedRichText`,
              'data-center': v,
              className: Xs(y, x, NT),
              transformTemplate: we,
              dangerouslySetInnerHTML: { __html: ye },
            })
          );
        })
      )),
      (FT = {
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
      (IT = (() =>
        RegExp(
          `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
          `gu`
        ))()),
      (LT = _(function (e, t) {
        return b(`svg`, { ...e, ref: t, children: e.children });
      })),
      (RT = _e.create(LT)),
      (zT = _(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return b(RT, {
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
      (BT = []),
      (VT = `RichTextContainer`),
      (HT = _(function (e, t) {
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
            environment: p = Y.current,
            fonts: m = BT,
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
            rotation: O = 0,
            style: ee,
            _initialStyle: k,
            stylesPresetsClassNames: te,
            text: A,
            top: ne,
            verticalAlignment: re = `top`,
            visible: j = !0,
            width: M,
            withExternalLayout: ie = !1,
            viewBox: ae,
            viewBoxScale: N = 1,
            effect: oe,
            ...se
          } = e,
          ce = ta(),
          le = fl(),
          ue = d(Dy),
          de = fo(e),
          fe = E(null),
          P = t ?? fe;
        (vo(e, P), tm(m, n, P));
        let pe = um(oe, P),
          me = f(() => {
            if (u) return _m(u, te, A, o, void 0, pe.getTokenizer());
          }, [u, te, A, o, pe]);
        if (!j) return null;
        let F = { opacity: g && p() === Y.canvas ? 0 : y },
          he = em(re);
        he !== gv.justifyContent && (F.justifyContent = he);
        let ge = {},
          _e = Y.hasRestrictions(),
          I = Qi(e, ce || 0, !1),
          ve = a && (M === `auto` || h === `auto`),
          ye =
            e.transformTemplate || !I || !_e || n || ve ? (e.transformTemplate ?? uo(l)) : void 0;
        (ie ||
          (I && _e && !ve
            ? ((ge.x = I.x + (z(ee?.x) ? ee.x : 0)),
              (ge.y = I.y + (z(ee?.y) ? ee.y : 0)),
              (ge.left = 0),
              (ge.top = 0),
              (F.rotate = n_.getNumber(O)),
              (F.width = I.width),
              (F.minWidth = I.width),
              (F.height = I.height))
            : ((F.left = _),
              (F.right = D),
              (F.top = ne),
              (F.bottom = c),
              (F.width = M),
              (F.height = h),
              (F.rotate = O)),
          x
            ? (!le || ue) &&
              ((F.position = `sticky`),
              (F.willChange = `transform`),
              (F.zIndex = 1),
              (F.top = T),
              (F.right = w),
              (F.bottom = S),
              (F.left = C))
            : le && (e.positionFixed || e.positionAbsolute) && (F.position = `absolute`)),
          Js(e, F),
          Gs(e, F),
          Object.assign(F, k, ee, ge),
          de && (se.layout = `preserve-aspect`));
        let be = ao(e.as),
          L = se[`data-framer-name`] ?? v;
        return R(e.viewBox)
          ? e.as === void 0
            ? b(zT, {
                ...se,
                ref: P,
                style: F,
                layoutId: de,
                viewBox: ae,
                viewBoxScale: N,
                transformTemplate: ye,
                'data-framer-name': L,
                'data-framer-component-type': VT,
                children: me,
              })
            : b(be, {
                ...se,
                ref: P,
                style: F,
                layoutId: de,
                transformTemplate: ye,
                'data-framer-name': L,
                'data-framer-component-type': VT,
                children: b(zT, {
                  viewBox: ae,
                  viewBoxScale: N,
                  style: { width: `100%`, height: `100%` },
                  children: me,
                }),
              })
          : b(be, {
              ...se,
              ref: P,
              style: F,
              layoutId: de,
              transformTemplate: ye,
              'data-framer-name': L,
              'data-framer-component-type': VT,
              children: me,
            });
      })),
      (UT = Oa(
        _(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (R(a)) {
            !r.stylesPresetsClassName &&
              B(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [R(t) ? `html` : `htmlFromDesign`]: a };
            return b(PT, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && R(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return b(HT, { ...r, ref: i, children: S(a) ? a : void 0 });
        })
      )),
      (WT = `framer/asset-reference,`),
      (GT = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = km(t);
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
      (KT = ga()),
      (qT = class {
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
      }),
      (JT = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (YT = class {
        constructor() {
          (M(this, `entries`, new Map()), M(this, `vectorSetItems`, new Map()));
        }
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(Fy(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = Am(e);
            (s &&
              (t && jm(s, n),
              (s.id = n),
              (o = Im(s)),
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
          KT && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = JT),
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
          KT && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new qT(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !KT) ||
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
                        KT && document?.getElementById(e)?.remove());
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
            e.push(`<div id="svg-templates" style="${JT}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t) => e.push(t.svg)),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (XT = new YT()),
      (ZT = (() => ({
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
      (QT = _(function (e, t) {
        let n = ta(),
          i = fo(e),
          a = r.useRef(null),
          o = t ?? a,
          s = Bw();
        return (
          vo(e, a),
          b(eE, { ...e, innerRef: o, parentSize: n, layoutId: i, providedWindow: s })
        );
      })),
      ($T = 5e4),
      (eE = (() => {
        var e;
        return (
          (e = class extends Py {
            constructor() {
              (super(...arguments),
                M(this, `container`, r.createRef()),
                M(this, `svgElement`, null),
                M(this, `setSVGElement`, (e) => {
                  ((this.svgElement = e), this.setLayerElement(e));
                }),
                M(this, `previouslyRenderedSVG`, ``),
                M(this, `unmountedSVG`, ``));
            }
            static frame(e) {
              return Qi(e, e.parentSize || 0);
            }
            get frame() {
              return Qi(this.props, this.props.parentSize || 0);
            }
            componentDidMount() {
              if (this.unmountedSVG) {
                let { svgContentId: e } = this.props,
                  t = e ? `svg${e}` : null;
                (XT.subscribe(this.unmountedSVG, !e, t),
                  (this.previouslyRenderedSVG = this.unmountedSVG));
              }
              this.props.svgContentId || Bm(this.container, this.props);
            }
            componentWillUnmount() {
              (XT.unsubscribe(this.previouslyRenderedSVG),
                (this.unmountedSVG = this.previouslyRenderedSVG),
                (this.previouslyRenderedSVG = ``));
            }
            componentDidUpdate(e) {
              if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
              let { fill: t } = this.props;
              (wy.isImageObject(t) &&
                wy.isImageObject(e.fill) &&
                t.src !== e.fill.src &&
                Co(this.svgElement, `fill`, null, !1),
                Bm(this.container, this.props));
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
                c = n_.getNumber(r);
              if (
                ((e.opacity = U(this.props.opacity) ? this.props.opacity : 1),
                Y.hasRestrictions() && n)
              ) {
                (Object.assign(e, {
                  transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
                  width: `${n.width}px`,
                  height: `${n.height}px`,
                }),
                  Yi(this.props) && (e.position = `absolute`));
                let r = n.width / (i || 1),
                  o = n.height / (a || 1);
                t.transformOrigin = `top left`;
                let { zoom: s, target: l } = T_;
                if (l === Y.export) {
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
                Us(this.props, w),
                Js(this.props, w),
                Py.applyWillChange(this.props, w, !1));
              let E = null;
              if (typeof r == `string` || J.isColorObject(r)) {
                let e = J.isColorObject(r) ? r.initialValue || J.toRgbString(r) : r;
                ((w.fill = e), (w.color = e));
              } else if (Hy.isLinearGradient(r)) {
                let t = r,
                  n = `${encodeURI(e || ``)}g${Hy.hash(t)}`;
                w.fill = `url(#${n})`;
                let { stops: i, x1: a, x2: o, y1: s, y2: c } = xm(t, x);
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
              } else if (Wy.isRadialGradient(r)) {
                let t = r,
                  n = `${encodeURI(e || ``)}g${Wy.hash(t)}`;
                w.fill = `url(#${n})`;
                let i = Sm(t, x);
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
              } else if (wy.isImageObject(r)) {
                let e = Dm(r, C, x);
                e &&
                  ((w.fill = `url(#${e.id})`),
                  (E = b(`svg`, {
                    ref: this.setSVGElement,
                    width: `100%`,
                    height: `100%`,
                    style: { position: `absolute` },
                    role: `presentation`,
                    children: b(`defs`, { children: b(GT, { ...e }) }),
                  })));
              }
              let O = { 'data-framer-component-type': `SVG` },
                ee = !S;
              ee && Object.assign(O, so(this.props.center));
              let te =
                  !v &&
                  !E &&
                  !w.fill &&
                  !w.background &&
                  !w.backgroundImage &&
                  i.length < $T &&
                  !Lm(i) &&
                  !Rm(i),
                A = null;
              if (te)
                ((w.backgroundSize = `100% 100%`),
                  (w.backgroundImage = ct(i)),
                  XT.unsubscribe(this.previouslyRenderedSVG),
                  (this.previouslyRenderedSVG = ``));
              else {
                let e = m ? `svg${m}` : null,
                  t = XT.subscribe(i, !m, e, v);
                (XT.unsubscribe(this.previouslyRenderedSVG),
                  (this.previouslyRenderedSVG = i),
                  zm(w) && (w.overflow = `hidden`),
                  (A = D(k, {
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
                        wy.isImageObject(r) ? r.src : ``
                      ),
                    ],
                  })));
              }
              let ne = ao(this.props.as),
                { href: re, target: j, rel: M, onClick: ie, onTap: ae } = this.props,
                N = s || c;
              return b(ne, {
                ...O,
                ...y,
                layoutId: l,
                transformTemplate: ee ? uo(this.props.center) : void 0,
                id: e,
                ref: p,
                style: w,
                className: u,
                variants: d,
                tabIndex: this.props.tabIndex,
                role: N ? `img` : void 0,
                'aria-label': s,
                'aria-description': c,
                'aria-hidden': N ? void 0 : `true`,
                onTap: ae,
                onClick: ie,
                href: re,
                target: j,
                rel: M,
                children: A,
              });
            }
          }),
          M(e, `supportsConstraints`, !0),
          M(e, `defaultSVGProps`, {
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
          M(e, `defaultProps`, { ...Py.defaultProps, ...e.defaultSVGProps }),
          e
        );
      })()),
      (tE = Oa(QT)),
      (nE = 1e3),
      (rE = `explicitInter`),
      (Ue.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = N(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
export {
  XT as $,
  Xs as A,
  Ia as B,
  UT as C,
  Qm as Ct,
  Fa as D,
  Hm as E,
  Yb as F,
  iE as G,
  Rh as H,
  av as I,
  dh as J,
  wa as K,
  Um as L,
  Zb as M,
  Jb as N,
  cy as O,
  Xb as P,
  Cf as Q,
  Wm as R,
  nC as S,
  cc as St,
  Rx as T,
  Dr as U,
  ff as V,
  ut as W,
  Yx as X,
  vr as Y,
  Lr as Z,
  lS as _,
  Ot as _t,
  V_ as a,
  Ef as at,
  Y as b,
  Jf as bt,
  Ib as c,
  fl as ct,
  iS as d,
  dr as dt,
  mr as et,
  Ch as f,
  Rr as ft,
  Lu as g,
  It as gt,
  kn as h,
  uf as ht,
  Lx as i,
  ll as it,
  wT as j,
  cv as k,
  sS as l,
  Nf as lt,
  yS as m,
  Af as mt,
  Ic as n,
  Lc as nt,
  Fw as o,
  yf as ot,
  yh as p,
  Of as pt,
  pt as q,
  Tx as r,
  At as rt,
  Pi as s,
  ns as st,
  jl as t,
  hf as tt,
  OT as u,
  fr as ut,
  Ub as v,
  qf as vt,
  tE as w,
  mn as wt,
  xl as x,
  Sx as xt,
  kw as y,
  ov as yt,
  Vm as z,
};
