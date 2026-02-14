import { t as e } from './rolldown-runtime.BRwTesTf.mjs';
import {
  B as t,
  D as n,
  E as r,
  F as i,
  H as a,
  I as o,
  L as s,
  N as c,
  O as l,
  P as u,
  R as d,
  V as f,
  _ as p,
  a as m,
  b as h,
  c as g,
  f as _,
  g as v,
  i as y,
  j as b,
  l as x,
  o as S,
  s as ee,
  u as te,
} from './react.DPVtOLUT.mjs';
import {
  H as C,
  L as w,
  P as T,
  S as E,
  W as D,
  a as O,
  b as k,
  n as A,
  r as j,
  t as M,
} from './motion.BMjj-i1j.mjs';
import {
  A as N,
  B as P,
  C as F,
  Ct as ne,
  D as I,
  E as L,
  G as R,
  L as z,
  Q as re,
  R as B,
  S as ie,
  St as ae,
  T as V,
  _ as oe,
  _t as se,
  a as H,
  at as ce,
  b as le,
  bt as ue,
  c as de,
  ct as fe,
  d as pe,
  dt as me,
  ft as he,
  gt as ge,
  ht as _e,
  i as U,
  j as ve,
  lt as ye,
  m as be,
  mt as xe,
  n as Se,
  nt as Ce,
  o as we,
  ot as Te,
  pt as Ee,
  r as W,
  rt as De,
  st as Oe,
  t as ke,
  u as Ae,
  ut as je,
  v as G,
  vt as Me,
  w as Ne,
  x as Pe,
  y as Fe,
  yt as Ie,
  z as K,
} from './framer.BPheaWej.mjs';
import {
  A as Le,
  B as Re,
  C as ze,
  D as Be,
  E as Ve,
  F as He,
  H as Ue,
  I as We,
  J as Ge,
  L as Ke,
  N as qe,
  O as Je,
  P as Ye,
  R as Xe,
  S as Ze,
  T as Qe,
  U as $e,
  V as et,
  W as tt,
  X as nt,
  Y as rt,
  _ as it,
  b as at,
  d as ot,
  f as st,
  g as ct,
  h as lt,
  k as ut,
  l as dt,
  m as ft,
  o as pt,
  p as mt,
  q as ht,
  s as gt,
  u as _t,
  v as vt,
  w as yt,
  x as bt,
  y as xt,
  z as St,
} from './shared-lib.lUkqKhRJ.mjs';
function Ct({
  text: e,
  speed: t,
  delay: n,
  font: r,
  userSelect: i,
  color: a,
  alignment: s,
  tag: c,
  loop: l,
  stagger: u,
}) {
  let f = c,
    p = e.split(`, `).map((e) => e.replace(/\s+/g, ` `).trim()),
    [m, h] = d(0),
    _ = ((wt - t + 1) / wt) * 5,
    v = n * 1e3,
    y = _ * 1e3,
    b = le.current() === le.canvas,
    [S, te] = d(!0);
  return (
    o(() => {
      let e = S ? y / 3 + v : y + v,
        t = setInterval(() => {
          (te(!1), m < p.length - 1 ? h((e) => e + 1) : l && h(0));
        }, e);
      return () => clearInterval(t);
    }, [m, l, S]),
    x(`div`, {
      style: {
        userSelect: i ? `auto` : `none`,
        position: `relative`,
        display: `flex`,
        flexDirection: `row`,
        overflow: `visible`,
        justifyContent: s === `center` ? `center` : s === `right` ? `flex-end` : `flex-start`,
      },
      children: [
        g(f, {
          'aria-hidden': !0,
          style: {
            fontSize: `24px`,
            ...r,
            marginBlockStart: `0px`,
            marginBlockEnd: `0px`,
            pointerEvents: `none`,
            opacity: 0,
            whiteSpace: `pre-wrap`,
            width: `100%`,
            textAlign: s,
          },
          children: p.reduce((e, t) => (t.length > e.length ? t : e)),
        }),
        b &&
          g(f, {
            style: {
              fontSize: `24px`,
              ...r,
              color: a,
              marginBlockStart: `0px`,
              marginBlockEnd: `0px`,
              whiteSpace: `pre-wrap`,
              position: `absolute`,
              top: 0,
              left: 0,
              width: `100%`,
              textAlign: s,
            },
            children: p[0],
          }),
        !b &&
          g(ee, {
            children: p.map((e, t) => {
              let n = 0,
                i = e.split(/(\s+|\b)/).map((e) => ({
                  text: e,
                  chars: e.split(``).map((e) => ({ char: e, originalIndex: n++ })),
                }));
              return (
                console.log(i),
                g(
                  `div`,
                  {
                    style: {
                      position: `absolute`,
                      top: 0,
                      left: 0,
                      overflow: `visible`,
                      width: `100%`,
                      textAlign: s,
                    },
                    children: g(A, {
                      mode: `sync`,
                      children:
                        m === t &&
                        g(`div`, {
                          style: {
                            display: `flex`,
                            flexWrap: `wrap`,
                            width: `100%`,
                            justifyContent:
                              s === `center` ? `center` : s === `right` ? `flex-end` : `flex-start`,
                            gap: 0,
                          },
                          children: i.map((t, n) =>
                            g(
                              `div`,
                              {
                                style: {
                                  display: `inline-flex`,
                                  flexWrap: `nowrap`,
                                  whiteSpace: `pre`,
                                  overflow: `hidden`,
                                },
                                children: t.chars.map(({ char: t, originalIndex: n }) => {
                                  let i = n / (e.length - 1),
                                    o = _ * 0.3 * i,
                                    s = _ * 0.4 * i,
                                    c = _ * 0.3 * i,
                                    l = {
                                      initial: {
                                        transform: `translate(0px, 150%)`,
                                        transition: { ...Tt, duration: _ / 2, delay: o * u },
                                      },
                                      animate: {
                                        transform: `translate(0px, 0px)`,
                                        transition: { ...Tt, duration: _ / 2, delay: s * u },
                                      },
                                      exit: {
                                        transform: `translate(0px, -150%)`,
                                        transition: { ...Tt, duration: _ / 2, delay: c * u },
                                      },
                                    };
                                  return g(
                                    E.div,
                                    {
                                      variants: l,
                                      initial: S ? !1 : `initial`,
                                      animate: S ? !1 : `animate`,
                                      exit: `exit`,
                                      style: { display: `inline-block` },
                                      children: g(f, {
                                        style: {
                                          fontSize: `24px`,
                                          ...r,
                                          color: a,
                                          marginBlockStart: `0px`,
                                          marginBlockEnd: `0px`,
                                          opacity: 1,
                                        },
                                        children: t,
                                      }),
                                    },
                                    e + n
                                  );
                                }),
                              },
                              n
                            )
                          ),
                        }),
                    }),
                  },
                  t
                )
              );
            }),
          }),
      ],
    })
  );
}
var wt,
  Tt,
  Et = e(() => {
    (S(),
      r(),
      R(),
      M(),
      (wt = 20),
      (Tt = { ease: [0.11, 0.72, 0, 1] }),
      (Ct.displayName = `Staggered Cycle`),
      I(Ct, {
        text: {
          type: H.String,
          title: `Text`,
          defaultValue: `DESIGNER, DEVELOPER`,
          description: `Divide the words with a comma (,) if you want to display them separately.`,
        },
        speed: { type: H.Number, title: `Speed`, defaultValue: wt / 2, min: 1, max: wt },
        delay: { type: H.Number, title: `Delay`, defaultValue: 1, min: 0, max: 10, unit: `s` },
        stagger: {
          title: `Stagger`,
          description: `The delay between each word.`,
          type: H.Number,
          defaultValue: 0.5,
          step: 0.1,
          min: 0,
          max: 1,
        },
        font: { title: `Font`, type: H.Font, controls: `extended` },
        alignment: {
          type: H.Enum,
          displaySegmentedControl: !0,
          title: `Alignment`,
          defaultValue: `left`,
          options: [`left`, `center`, `right`],
          optionTitles: [`Left`, `Center`, `Right`],
        },
        userSelect: { title: `User Select`, type: H.Boolean, defaultValue: !1 },
        color: { title: `Color`, type: H.Color, defaultValue: `#ffffff` },
        tag: {
          type: H.Enum,
          title: `Tag`,
          defaultValue: `p`,
          displaySegmentedControl: !0,
          segmentedControlDirection: `horizontal`,
          options: [`h1`, `h2`, `h3`, `p`],
          optionTitles: [`H1`, `H2`, `H3`, `P`],
        },
        loop: {
          title: `Loop`,
          type: H.Boolean,
          defaultValue: !0,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }),
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It = e(() => {
    (S(),
      R(),
      M(),
      r(),
      (Dt = `framer-ZpfHZ`),
      (Ot = { XvqTw0Be9: `framer-v-jjcw9a` }),
      (kt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (At = ({ value: e, children: t }) => {
        let n = c(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return g(O.Provider, { value: i, children: t });
      }),
      (jt = E.create(s)),
      (Mt = ({ height: e, id: t, subtitle: n, title: r, width: i, ...a }) => ({
        ...a,
        WuF2iG84P:
          n ??
          a.WuF2iG84P ??
          `Set up the component by adding background and bouncer elements to the component properties.`,
        yeAnKbEUZ: r ?? a.yeAnKbEUZ ?? `Screen Saver`,
      })),
      (Nt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Pt = ue(
        p(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = h(),
            { activeLocale: a, setLocale: o } = he();
          De();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              yeAnKbEUZ: f,
              WuF2iG84P: p,
              ...m
            } = Mt(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: S,
              gestureVariant: ee,
              isLoading: te,
              setGestureState: C,
              setVariant: w,
              variants: T,
            } = Ie({ defaultVariant: `XvqTw0Be9`, ref: r, variant: d, variantClassNames: Ot }),
            D = Nt(e, T),
            O = N(Dt);
          return g(j, {
            id: u ?? i,
            children: g(jt, {
              animate: T,
              initial: !1,
              children: g(At, {
                value: kt,
                children: g(E.div, {
                  ...m,
                  ...S,
                  className: N(O, `framer-jjcw9a`, l, v),
                  'data-framer-name': `Default`,
                  layoutDependency: D,
                  layoutId: `XvqTw0Be9`,
                  ref: r,
                  style: { backgroundColor: `rgba(136, 85, 255, 0.1)`, ...c },
                  children: x(E.div, {
                    className: `framer-uh2i08`,
                    layoutDependency: D,
                    layoutId: `aM7oiNoFL`,
                    children: [
                      g(Ne, {
                        className: `framer-flw0dh`,
                        'data-framer-name': `Logo`,
                        layout: `position`,
                        layoutDependency: D,
                        layoutId: `GthLmGmBt`,
                        opacity: 1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"><g><path d="M 0 0 L 28 0 L 28 28 L 0 28 Z" fill="transparent"></path><path d="M 21 7.113 C 21 7.041 21.029 6.971 21.079 6.921 L 27.534 0.465 C 27.613 0.388 27.73 0.365 27.831 0.407 C 27.933 0.449 28 0.548 28 0.658 L 28 13.888 C 28 13.96 27.971 14.028 27.921 14.079 L 21 21 Z M 7 21 L 7 7.658 C 7 7.548 6.933 7.449 6.831 7.407 C 6.73 7.365 6.613 7.388 6.534 7.465 L 0.079 13.921 C 0.028 13.972 0 14.041 0 14.113 L 0 27.728 C 0 27.877 0.122 28 0.273 28 L 13.888 28 C 13.96 28 14.028 27.971 14.079 27.921 L 21 21 Z" fill="rgb(153, 102, 255)"></path></g></svg>`,
                        svgContentId: 11036020200,
                        withExternalLayout: !0,
                      }),
                      x(E.div, {
                        className: `framer-k3ullq`,
                        layoutDependency: D,
                        layoutId: `E3DQBYSAf`,
                        children: [
                          g(F, {
                            __fromCanvasComponent: !0,
                            children: g(s, {
                              children: g(E.p, {
                                style: {
                                  '--font-selector': `SW50ZXItQm9sZA==`,
                                  '--framer-font-family': `"Inter", "Inter Placeholder", sans-serif`,
                                  '--framer-font-size': `11px`,
                                  '--framer-font-weight': `700`,
                                  '--framer-letter-spacing': `-0.02em`,
                                  '--framer-line-height': `1em`,
                                  '--framer-text-alignment': `center`,
                                  '--framer-text-color': `var(--extracted-r6o4lv, rgb(153, 102, 255))`,
                                },
                                children: `Screen Saver`,
                              }),
                            }),
                            className: `framer-q0gs4u`,
                            'data-framer-name': `Title`,
                            fonts: [`Inter-Bold`],
                            layoutDependency: D,
                            layoutId: `UqJwZqJjg`,
                            style: {
                              '--extracted-r6o4lv': `rgb(153, 102, 255)`,
                              '--framer-link-text-color': `rgb(0, 153, 255)`,
                              '--framer-link-text-decoration': `underline`,
                            },
                            text: f,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          g(F, {
                            __fromCanvasComponent: !0,
                            children: g(s, {
                              children: g(E.p, {
                                style: {
                                  '--framer-font-size': `11px`,
                                  '--framer-letter-spacing': `-0.03em`,
                                  '--framer-line-height': `1.4em`,
                                  '--framer-text-alignment': `center`,
                                  '--framer-text-color': `var(--extracted-r6o4lv, rgba(153, 102, 255, 0.7))`,
                                },
                                children: `Set up the component by adding background and bouncer elements to the component properties.`,
                              }),
                            }),
                            className: `framer-g5dqhc`,
                            'data-framer-name': `Subtitle`,
                            fonts: [`Inter`],
                            layoutDependency: D,
                            layoutId: `RJ7UF99m8`,
                            style: {
                              '--extracted-r6o4lv': `rgba(153, 102, 255, 0.7)`,
                              '--framer-link-text-color': `rgb(0, 153, 255)`,
                              '--framer-link-text-decoration': `underline`,
                            },
                            text: p,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-ZpfHZ.framer-qanqo2, .framer-ZpfHZ .framer-qanqo2 { display: block; }`,
          `.framer-ZpfHZ.framer-jjcw9a { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 200px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 400px; }`,
          `.framer-ZpfHZ .framer-uh2i08 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; width: 1px; }`,
          `.framer-ZpfHZ .framer-flw0dh { flex: none; height: 28px; position: relative; width: 28px; }`,
          `.framer-ZpfHZ .framer-k3ullq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 200px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-ZpfHZ .framer-q0gs4u, .framer-ZpfHZ .framer-g5dqhc { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        ],
        `framer-ZpfHZ`
      )),
      (Ft = Pt),
      (Pt.displayName = `Utils/Component Message`),
      (Pt.defaultProps = { height: 200, width: 400 }),
      I(Pt, {
        yeAnKbEUZ: {
          defaultValue: `Screen Saver`,
          displayTextArea: !1,
          title: `Title`,
          type: H.String,
        },
        WuF2iG84P: {
          defaultValue: `Set up the component by adding background and bouncer elements to the component properties.`,
          displayTextArea: !1,
          title: `Subtitle`,
          type: H.String,
        },
      }),
      L(
        Pt,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Lt(e) {
  let t = b(null),
    r = w(0),
    a = w(0);
  o(() => {
    t.current &&
      (t.current.style.transform = `perspective(${e.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
  }, [e.perspective]);
  function s(e, t) {
    let n;
    return function (...r) {
      (clearTimeout(n),
        (n = setTimeout(() => {
          (clearTimeout(n), e(...r));
        }, t)));
    };
  }
  let c = i(
    s((n) => {
      let { width: i, height: o, top: s, left: c } = t.current.getBoundingClientRect(),
        l = e.effect === `evade` ? -1 : 1,
        u = ((n.clientY - s) / o - 0.5) * (e.tiltLimit * 2) * l,
        d = ((n.clientX - c) / i - 0.5) * -(e.tiltLimit * 2) * l;
      (r.set(u),
        a.set(d),
        (t.current.style.transform = `perspective(${e.perspective}px) rotateX(${u}deg) rotateY(${d}deg) scale3d(${e.scale}, ${e.scale}, ${e.scale})`));
    }, 2),
    [e.tiltLimit, e.scale, e.perspective, e.effect]
  );
  return n.count(e.children) === 0
    ? g(Ft, {
        title: `3D Hover Component`,
        subtitle: `Connect a frame to the component.`,
        style: { ...e.style },
      })
    : g(`div`, {
        ref: t,
        onMouseMove: c,
        onMouseLeave: () => {
          t.current &&
            (r.set(0),
            a.set(0),
            (t.current.style.transform = `perspective(${e.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`));
        },
        style: {
          width: `100%`,
          height: `100%`,
          transition: `transform 0.2s ease-out`,
          position: `relative`,
          overflow: `visible`,
          borderRadius: e.borderRadius,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          willChange: `transform`,
        },
        children: e.children,
      });
}
var Rt = e(() => {
    (S(),
      r(),
      R(),
      M(),
      It(),
      (Lt.displayName = `3D Hover`),
      (Lt.defaultProps = {
        tiltLimit: 15,
        effect: `evade`,
        scale: 1.1,
        perspective: 500,
        borderRadius: 0,
      }),
      I(Lt, {
        children: { type: H.ComponentInstance, title: `Frame` },
        effect: {
          type: H.Enum,
          title: `Effect`,
          options: [`gravitate`, `evade`],
          optionTitles: [`Gravitate`, `Evade`],
          defaultValue: `evade`,
          displaySegmentedControl: !0,
        },
        tiltLimit: {
          type: H.Number,
          title: `Tilt Limit`,
          min: 1,
          max: 100,
          step: 1,
          defaultValue: 15,
          displayStepper: !0,
        },
        scale: {
          type: H.Number,
          title: `Scale`,
          min: 1,
          max: 10,
          step: 0.1,
          defaultValue: 1.1,
          displayStepper: !0,
        },
        perspective: {
          type: H.Number,
          title: `Perspective`,
          min: 500,
          max: 5e3,
          step: 10,
          defaultValue: 500,
        },
        borderRadius: {
          type: H.Number,
          title: `Radius`,
          min: 0,
          max: 1e3,
          step: 1,
          defaultValue: 0,
          displayStepper: !0,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }),
  zt,
  Bt,
  Vt,
  Ht = e(() => {
    (R(),
      (zt = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (Bt = {
        ...zt,
        borderRadius: 6,
        background: `rgba(136, 85, 255, 0.3)`,
        color: `#85F`,
        border: `1px dashed #85F`,
        flexDirection: `column`,
      }),
      (Vt = {
        onClick: { type: H.EventHandler },
        onMouseEnter: { type: H.EventHandler },
        onMouseLeave: { type: H.EventHandler },
      }),
      H.Number,
      H.Boolean,
      H.String,
      H.Enum);
  });
function Ut(e, t) {
  return Gt(!0, e, t);
}
function Wt(e, t) {
  return Gt(!1, e, t);
}
function Gt(e, t, n = !0) {
  let r = fe();
  o(() => {
    n && r === e && t();
  }, [r]);
}
var Kt = e(() => {
    (R(), r());
  }),
  qt = e(() => {
    r();
  }),
  Jt = e(() => {
    R();
  }),
  Yt = e(() => {
    R();
  }),
  Xt = e(() => {
    r();
  }),
  Zt = e(() => {
    R();
  }),
  Qt,
  $t,
  en = e(() => {
    (t(),
      r(),
      (Qt = () => {
        if (f !== void 0) {
          let e = f.userAgent.toLowerCase();
          return (
            (e.indexOf(`safari`) > -1 ||
              e.indexOf(`framermobile`) > -1 ||
              e.indexOf(`framerx`) > -1) &&
            e.indexOf(`chrome`) < 0
          );
        } else return !1;
      }),
      ($t = () => u(() => Qt(), [])));
  }),
  tn = e(() => {
    (r(), Yt());
  }),
  nn = e(() => {
    (r(), R(), Yt(), qt());
  }),
  rn = e(() => {
    (R(), r(), Ht());
  });
function an() {
  return u(() => le.current(), []);
}
function on() {
  return u(() => le.current() === le.canvas, []);
}
var sn = e(() => {
    (r(), R());
  }),
  cn = e(() => {
    r();
  });
function ln(e) {
  let {
    borderRadius: t,
    isMixedBorderRadius: n,
    topLeftRadius: r,
    topRightRadius: i,
    bottomRightRadius: a,
    bottomLeftRadius: o,
  } = e;
  return u(() => (n ? `${r}px ${i}px ${a}px ${o}px` : `${t}px`), [t, n, r, i, a, o]);
}
var un,
  dn = e(() => {
    (r(),
      R(),
      (un = {
        borderRadius: {
          title: `Radius`,
          type: H.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      H.FusedNumber);
  }),
  fn = e(() => {
    (Ht(), Kt(), qt(), Jt(), Yt(), Xt(), Zt(), en(), tn(), nn(), rn(), sn(), cn(), dn());
  });
function pn(e) {
  let {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: c,
    ...l
  } = e;
  return l;
}
function mn(e) {
  return g(Sn, { ...pn(e) });
}
function hn(e) {
  let t = fe(),
    n = b(!1),
    r = b(!1),
    a = i((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: i(() => {
      let i = e.current;
      i &&
        ((i.preload = `auto`),
        !(
          i.currentTime > 0 &&
          i.onplaying &&
          !i.paused &&
          !i.ended &&
          i.readyState >= i.HAVE_CURRENT_DATA
        ) &&
          i &&
          !n.current &&
          t &&
          ((n.current = !0),
          (r.current = !0),
          i
            .play()
            .catch((e) => {})
            .finally(() => (n.current = !1))));
    }, []),
    pause: i(() => {
      !e.current || n.current || (e.current.pause(), (r.current = !1));
    }, []),
    setProgress: a,
    isPlaying: r,
  };
}
function gn({ playingProp: e, muted: t, loop: n, playsinline: r, controls: i }) {
  let [a] = d(() => e),
    [o, s] = d(!1);
  e !== a && !o && s(!0);
  let c = a && t && n && r && !i && !o,
    l;
  return ((l = c ? `on-viewport` : a ? `on-mount` : `no-autoplay`), l);
}
function _n(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function vn(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(_n).join(` `);
}
var yn,
  bn,
  xn,
  Sn,
  Cn,
  wn = e(() => {
    (S(),
      R(),
      M(),
      fn(),
      r(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((yn ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((bn ||= {})),
      (xn = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (Sn = v(function (e) {
        let {
            srcType: t = `URL`,
            srcUrl: n,
            srcFile: r = ``,
            posterEnabled: i = !1,
            controls: a = !1,
            playing: s = !0,
            loop: c = !0,
            muted: l = !0,
            playsinline: d = !0,
            restartOnEnter: f = !1,
            objectFit: p = `cover`,
            backgroundColor: m = `rgba(0,0,0,0)`,
            radius: h = 0,
            volume: _ = 25,
            startTime: v = 0,
            poster: y,
            playing: x,
            progress: S,
            onSeeked: ee,
            onPause: te,
            onPlay: C,
            onEnd: w,
            onClick: E,
            onMouseEnter: D,
            onMouseLeave: O,
            onMouseDown: A,
            onMouseUp: j,
          } = e,
          M = b(),
          N = $t(),
          P = b(null),
          F = b(null),
          ne = on(),
          I = an(),
          L = ne || I === le.export,
          R = ln(e),
          z = L
            ? `no-autoplay`
            : gn({ playingProp: x, muted: l, loop: c, playsinline: d, controls: a }),
          re = L ? !0 : T(M),
          B = L ? !1 : T(M, { margin: `10%`, once: !0 }),
          ie = v === 100 ? 99.9 : v,
          { play: ae, pause: V, setProgress: oe, isPlaying: se } = hn(M);
        (o(() => {
          L || (z !== `on-viewport` && (x ? ae() : V()));
        }, [z, x]),
          o(() => {
            L || (re && x && z !== `no-autoplay` && ae(), z === `on-viewport` && V());
          }, [z, re, x]),
          o(() => {
            !ne || y || i || ie || !M.current || (M.current.currentTime = 0.01);
          }, [i, y, ie]));
        let H = b(!1);
        (o(() => {
          if (!H.current) {
            H.current = !0;
            return;
          }
          oe(((k(S) ? S.get() : (S ?? 0) * 0.01) ?? 0) || (ie ?? 0) / 100);
        }, [ie, r, n, S]),
          o(() => {
            if (k(S)) return S.on(`change`, (e) => oe(e));
          }, [S]),
          Ut(() => {
            P.current !== null && M.current && ((!F && c) || !P.current) && ae();
          }),
          Wt(() => {
            M.current && ((F.current = M.current.ended), (P.current = M.current.paused), V());
          }));
        let ce = u(() => {
          if (t === `URL`) return n + ``;
          if (t === `Upload`) return r + ``;
        }, [t, r, n, ie]);
        return (
          o(() => {
            N && M.current && z === `on-mount` && setTimeout(() => ae(), 50);
          }, []),
          o(() => {
            M.current && !l && (M.current.volume = (_ ?? 0) / 100);
          }, [_]),
          g(`video`, {
            onClick: E,
            onMouseEnter: D,
            onMouseLeave: O,
            onMouseDown: A,
            onMouseUp: j,
            src: ce,
            loop: c,
            ref: M,
            onSeeked: (e) => ee?.(e),
            onPause: (e) => te?.(e),
            onPlay: (e) => C?.(e),
            onEnded: (e) => w?.(e),
            autoPlay: se.current || z === `on-mount` || (x && z === `on-viewport` && re),
            preload: se.current
              ? `auto`
              : L && !y
                ? `metadata`
                : z !== `on-mount` && !B
                  ? `none`
                  : `metadata`,
            poster:
              i && !r && n === xn
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : i && y
                  ? y
                  : void 0,
            onLoadedData: () => {
              let e = M.current;
              e &&
                (e.currentTime < 0.3 && ie > 0 && oe((ie ?? 0) * 0.01),
                (se.current || z === `on-mount` || (x && z === `on-viewport` && re)) && ae());
            },
            controls: a,
            muted: L ? !0 : l,
            playsInline: d,
            style: {
              cursor: E ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: R,
              display: `block`,
              objectFit: p,
              backgroundColor: m,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (mn.displayName = `Video`),
      (Cn = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      I(mn, {
        srcType: {
          type: H.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: H.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: H.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: { type: H.Boolean, title: `Playing`, enabledTitle: `Yes`, disabledTitle: `No` },
        ...un,
        posterEnabled: {
          type: H.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: {
          type: H.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        backgroundColor: { type: H.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
        startTime: { title: `Start Time`, type: H.Number, min: 0, max: 100, step: 0.1, unit: `%` },
        loop: { type: H.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        objectFit: { type: H.Enum, title: `Fit`, options: Cn, optionTitles: Cn.map(vn) },
        controls: {
          type: H.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
        },
        muted: { type: H.Boolean, title: `Muted`, enabledTitle: `Yes`, disabledTitle: `No` },
        volume: {
          type: H.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
        },
        onEnd: { type: H.EventHandler },
        onSeeked: { type: H.EventHandler },
        onPause: { type: H.EventHandler },
        onPlay: { type: H.EventHandler },
        ...Vt,
      }));
  }),
  Tn = e(() => {
    fn();
  });
function En({
  url: e,
  play: t,
  shouldMute: n,
  thumbnail: r,
  isRed: i,
  onClick: a,
  onMouseEnter: o,
  onMouseLeave: s,
  onMouseDown: c,
  onMouseUp: u,
  title: f,
  ...p
}) {
  let m = on(),
    h = t !== `Off`,
    _ = m || (r !== `Off` && !h),
    [v, y] = l(() => !0, !1),
    [b, S] = l(() => !0, !_),
    [te, C] = d(!1),
    w = ln(p),
    T = w !== `0px 0px 0px 0px` && w !== `0px`;
  if (e === ``) return g(An, {});
  let E = Dn(e);
  if (E === void 0) return g(jn, { message: `Invalid Youtube URL.` });
  let [D, O, k] = E,
    A = O.searchParams;
  if (k) for (let [e, t] of k) (A.set(e, t), e === `t` && A.set(`start`, t));
  (A.set(`iv_load_policy`, `3`),
    A.set(`rel`, `0`),
    A.set(`modestbranding`, `1`),
    A.set(`playsinline`, `1`),
    b ? (h || (_ && b)) && A.set(`autoplay`, `1`) : A.set(`autoplay`, `0`),
    h && n && A.set(`mute`, `1`),
    t === `Loop` && (A.set(`loop`, `1`), A.set(`playlist`, D)),
    i || A.set(`color`, `white`));
  let j = {
    title: f || `Youtube Video`,
    allow: `presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture`,
    src: O.href,
    frameBorder: `0`,
    onClick: a,
    onMouseEnter: o,
    onMouseLeave: s,
    onMouseDown: c,
    onMouseUp: u,
  };
  return x(`article`, {
    onPointerEnter: () => C(!0),
    onPointerLeave: () => C(!1),
    onPointerOver: y,
    onKeyDown: S,
    onClick: S,
    style: {
      ...In,
      borderRadius: w,
      transform: T && (b || m) ? `translateZ(0.000001px)` : `unset`,
      cursor: `pointer`,
      overflow: `hidden`,
    },
    role: `presentation`,
    children: [
      v && g(`link`, { rel: `preconnect`, href: `https://www.youtube.com` }),
      v && g(`link`, { rel: `preconnect`, href: `https://www.google.com` }),
      _ &&
        x(ee, {
          children: [
            g(`link`, { rel: `preconnect`, href: `https://i.ytimg.com` }),
            g(`img`, { decoding: `async`, src: kn(D, r), style: { ...Rn, objectFit: `cover` } }),
          ],
        }),
      m
        ? null
        : g(`iframe`, {
            loading: b ? void 0 : `lazy`,
            style: b ? Rn : { ...Rn, display: `none` },
            ...j,
          }),
      b ? null : g(Mn, { onClick: S, isHovered: te, isRed: i }),
    ],
  });
}
function Dn(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return [e, On(e), null];
  }
  let n = t.searchParams;
  if (
    t.hostname === `youtube.com` ||
    t.hostname === `www.youtube.com` ||
    t.hostname === `youtube-nocookie.com` ||
    t.hostname === `www.youtube-nocookie.com`
  ) {
    let e = t.pathname.slice(1).split(`/`),
      r = e[0];
    if (r === `watch`) {
      let e = t.searchParams.get(`v`);
      return [e, On(e), n];
    }
    if (r === `embed`) return [e[1], t, n];
    if (r === `shorts` || r === `live`) {
      let t = e[1];
      return [t, On(t), n];
    }
  }
  if (t.hostname === `youtu.be`) {
    let e = t.pathname.slice(1);
    return [e, On(e), n];
  }
}
function On(e) {
  return new URL(`https://www.youtube.com/embed/${e}`);
}
function kn(e, t) {
  let n = `https://i.ytimg.com/vi_webp/`,
    r = `webp`;
  switch (t) {
    case `Low Quality`:
      return `${n}${e}/hqdefault.${r}`;
    case `Medium Quality`:
      return `${n}${e}/sddefault.${r}`;
    case `High Quality`:
      return `${n}${e}/maxresdefault.${r}`;
    default:
      return `${n}${e}/0.${r}`;
  }
}
function An() {
  return g(`div`, {
    style: { ...Bt, overflow: `hidden` },
    children: g(`div`, {
      style: Ln,
      children: `To embed a Youtube video, add the URL to the properties\xA0panel.`,
    }),
  });
}
function jn({ message: e }) {
  return g(`div`, {
    className: `framerInternalUI-errorPlaceholder`,
    style: { ...zt, overflow: `hidden` },
    children: x(`div`, { style: Ln, children: [`Error: `, e] }),
  });
}
function Mn({ onClick: e, isHovered: t, isRed: n }) {
  return g(`button`, {
    onClick: e,
    'aria-label': `Play`,
    style: Fn,
    children: x(`svg`, {
      height: `100%`,
      version: `1.1`,
      viewBox: `0 0 68 48`,
      width: `100%`,
      children: [
        g(`path`, {
          d: `M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z`,
          fill: t ? (n ? `#f00` : `#000`) : `#212121`,
          fillOpacity: t && n ? 1 : 0.8,
          style: {
            transition: `fill .1s cubic-bezier(0.4, 0, 1, 1), fill-opacity .1s cubic-bezier(0.4, 0, 1, 1)`,
          },
        }),
        g(`path`, { d: `M 45,24 27,14 27,34`, fill: `#fff` }),
      ],
    }),
  });
}
var Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn = e(() => {
    (S(),
      r(),
      R(),
      Tn(),
      (function (e) {
        ((e.Normal = `Off`), (e.Auto = `On`), (e.Loop = `Loop`));
      })((Nn ||= {})),
      (function (e) {
        ((e.High = `High Quality`),
          (e.Medium = `Medium Quality`),
          (e.Low = `Low Quality`),
          (e.Off = `Off`));
      })((Pn ||= {})),
      (En.displayName = `YouTube`),
      I(En, {
        url: { type: H.String, title: `Video` },
        play: { type: H.Enum, title: `Autoplay`, options: Object.values(Nn) },
        shouldMute: {
          title: `Mute`,
          type: H.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hidden(e) {
            return e.play === `Off`;
          },
        },
        thumbnail: {
          title: `Thumbnail`,
          description: `Showing a thumbnail improves performance.`,
          type: H.Enum,
          options: Object.values(Pn),
          hidden(e) {
            return e.play !== `Off`;
          },
        },
        isRed: { title: `Color`, type: H.Boolean, enabledTitle: `Red`, disabledTitle: `White` },
        ...un,
        ...Vt,
      }),
      (En.defaultProps = {
        url: `https://youtu.be/8AHPXm9Y6mI`,
        play: `Off`,
        shouldMute: !0,
        thumbnail: `Medium Quality`,
        isRed: !0,
      }),
      (Fn = {
        position: `absolute`,
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        width: 68,
        height: 48,
        padding: 0,
        border: `none`,
        background: `transparent`,
        cursor: `pointer`,
      }),
      (In = { position: `relative`, width: `100%`, height: `100%` }),
      (Ln = { textAlign: `center`, minWidth: 140 }),
      (Rn = { position: `absolute`, top: 0, left: 0, height: `100%`, width: `100%` }));
  });
function Bn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr = e(() => {
    (S(),
      R(),
      M(),
      r(),
      (Vn = ne(ae(E.div))),
      (Hn = [`TYT7GU9zj`, `vH7Y42YRC`, `rFjN4yoEW`, `sP9zw4_Pq`, `sex0Kr1iV`]),
      (Un = `framer-iJ1j0`),
      (Wn = {
        rFjN4yoEW: `framer-v-12utkr9`,
        sex0Kr1iV: `framer-v-pmmvii`,
        sP9zw4_Pq: `framer-v-34fjgw`,
        TYT7GU9zj: `framer-v-gfv0f3`,
        vH7Y42YRC: `framer-v-k7b6mc`,
      }),
      (Gn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Kn = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (qn = { bounce: 0, delay: 0, duration: 0.5, type: `spring` }),
      (Jn = ({ value: e, children: t }) => {
        let n = c(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return g(O.Provider, { value: i, children: t });
      }),
      (Yn = E.create(s)),
      (Xn = { 1: `TYT7GU9zj`, 2: `vH7Y42YRC`, 3: `rFjN4yoEW`, 4: `sP9zw4_Pq`, 5: `sex0Kr1iV` }),
      (Zn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Xn[r.variant] ?? r.variant ?? `TYT7GU9zj`,
      })),
      (Qn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($n = ue(
        p(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = h(),
            { activeLocale: a, setLocale: o } = he(),
            s = De(),
            { style: c, className: l, layoutId: u, variant: d, ...f } = Zn(e),
            {
              baseVariant: p,
              classNames: m,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: S,
              setGestureState: ee,
              setVariant: te,
              variants: C,
            } = Ie({
              cycleOrder: Hn,
              defaultVariant: `TYT7GU9zj`,
              ref: r,
              variant: d,
              variantClassNames: Wn,
            }),
            w = Qn(e, C),
            T = N(Un),
            D = () => p !== `sex0Kr1iV`,
            O = () => ![`vH7Y42YRC`, `sP9zw4_Pq`, `sex0Kr1iV`].includes(p),
            k = () => !![`rFjN4yoEW`, `sP9zw4_Pq`, `sex0Kr1iV`].includes(p);
          return g(j, {
            id: u ?? i,
            children: g(Yn, {
              animate: C,
              initial: !1,
              children: g(Jn, {
                value: qn,
                children: x(Vn, {
                  ...f,
                  ...v,
                  __framer__presenceAnimate: Gn,
                  __framer__presenceInitial: Kn,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: N(T, `framer-gfv0f3`, l, m),
                  'data-framer-appear-id': `gfv0f3`,
                  'data-framer-name': `1`,
                  layoutDependency: w,
                  layoutId: `TYT7GU9zj`,
                  optimized: !0,
                  ref: r,
                  style: {
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    ...c,
                  },
                  ...Bn(
                    {
                      rFjN4yoEW: { 'data-framer-name': `3` },
                      sex0Kr1iV: { 'data-framer-name': `5` },
                      sP9zw4_Pq: { 'data-framer-name': `4` },
                      vH7Y42YRC: { 'data-framer-name': `2` },
                    },
                    p,
                    y
                  ),
                  children: [
                    D() &&
                      g(E.div, {
                        className: `framer-1n6hb5q`,
                        'data-framer-name': `SPACER`,
                        layoutDependency: w,
                        layoutId: `HdgiL5gFe`,
                      }),
                    D() &&
                      g(E.div, {
                        className: `framer-2ad5tn`,
                        'data-framer-name': `SPACER`,
                        layoutDependency: w,
                        layoutId: `HxzD6QCqc`,
                      }),
                    O() &&
                      g(E.div, {
                        className: `framer-14q95ci`,
                        'data-framer-name': `SPACER`,
                        layoutDependency: w,
                        layoutId: `hVnlEoJVr`,
                      }),
                    O() &&
                      g(E.div, {
                        className: `framer-d2f4rg`,
                        'data-framer-name': `SPACER`,
                        layoutDependency: w,
                        layoutId: `KrhDzZCLt`,
                      }),
                    g(Ae, {
                      background: {
                        alt: `Woman Side Pose`,
                        fit: `fill`,
                        loading: K(
                          (s?.y || 0) +
                            0 +
                            (((s?.height || 230) -
                              0 -
                              (((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                0)) /
                              2 +
                              (((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1) +
                              0)
                        ),
                        pixelHeight: 1896,
                        pixelWidth: 948,
                        sizes: s?.width || `100vw`,
                        src: `https://framerusercontent.com/images/6S5qo3AubSG0uV2Sg53O1VrGE.png?width=948&height=1896`,
                        srcSet: `https://framerusercontent.com/images/6S5qo3AubSG0uV2Sg53O1VrGE.png?scale-down-to=1024&width=948&height=1896 512w,https://framerusercontent.com/images/6S5qo3AubSG0uV2Sg53O1VrGE.png?width=948&height=1896 948w`,
                      },
                      className: `framer-gg9h8h`,
                      'data-framer-name': `Image 1`,
                      layoutDependency: w,
                      layoutId: `GOH4p5abo`,
                      ...Bn(
                        {
                          rFjN4yoEW: {
                            background: {
                              alt: `Woman Side Pose`,
                              fit: `fill`,
                              loading: K(
                                (s?.y || 0) +
                                  0 +
                                  (((s?.height || 230) -
                                    0 -
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      0)) /
                                    2 +
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1) +
                                    0)
                              ),
                              pixelHeight: 1896,
                              pixelWidth: 948,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/6S5qo3AubSG0uV2Sg53O1VrGE.png?width=948&height=1896`,
                              srcSet: `https://framerusercontent.com/images/6S5qo3AubSG0uV2Sg53O1VrGE.png?scale-down-to=1024&width=948&height=1896 512w,https://framerusercontent.com/images/6S5qo3AubSG0uV2Sg53O1VrGE.png?width=948&height=1896 948w`,
                            },
                          },
                          sex0Kr1iV: {
                            background: {
                              alt: `Woman Side Pose`,
                              fit: `fill`,
                              loading: K(
                                (s?.y || 0) +
                                  0 +
                                  (((s?.height || 230) -
                                    0 -
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      0)) /
                                    2 +
                                    0 +
                                    0)
                              ),
                              pixelHeight: 1896,
                              pixelWidth: 948,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/6S5qo3AubSG0uV2Sg53O1VrGE.png?width=948&height=1896`,
                              srcSet: `https://framerusercontent.com/images/6S5qo3AubSG0uV2Sg53O1VrGE.png?scale-down-to=1024&width=948&height=1896 512w,https://framerusercontent.com/images/6S5qo3AubSG0uV2Sg53O1VrGE.png?width=948&height=1896 948w`,
                            },
                          },
                          sP9zw4_Pq: {
                            background: {
                              alt: `Woman Side Pose`,
                              fit: `fill`,
                              loading: K(
                                (s?.y || 0) +
                                  0 +
                                  (((s?.height || 230) -
                                    0 -
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      0)) /
                                    2 +
                                    (((s?.height || 230) - 0) * 1 + ((s?.height || 230) - 0) * 1) +
                                    0)
                              ),
                              pixelHeight: 1896,
                              pixelWidth: 948,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/6S5qo3AubSG0uV2Sg53O1VrGE.png?width=948&height=1896`,
                              srcSet: `https://framerusercontent.com/images/6S5qo3AubSG0uV2Sg53O1VrGE.png?scale-down-to=1024&width=948&height=1896 512w,https://framerusercontent.com/images/6S5qo3AubSG0uV2Sg53O1VrGE.png?width=948&height=1896 948w`,
                            },
                          },
                          vH7Y42YRC: {
                            background: {
                              alt: `Woman Side Pose`,
                              fit: `fill`,
                              loading: K(
                                (s?.y || 0) +
                                  0 +
                                  (((s?.height || 230) -
                                    0 -
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      0)) /
                                    2 +
                                    (((s?.height || 230) - 0) * 1 + ((s?.height || 230) - 0) * 1) +
                                    0)
                              ),
                              pixelHeight: 1896,
                              pixelWidth: 948,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/6S5qo3AubSG0uV2Sg53O1VrGE.png?width=948&height=1896`,
                              srcSet: `https://framerusercontent.com/images/6S5qo3AubSG0uV2Sg53O1VrGE.png?scale-down-to=1024&width=948&height=1896 512w,https://framerusercontent.com/images/6S5qo3AubSG0uV2Sg53O1VrGE.png?width=948&height=1896 948w`,
                            },
                          },
                        },
                        p,
                        y
                      ),
                    }),
                    g(Ae, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: K(
                          (s?.y || 0) +
                            0 +
                            (((s?.height || 230) -
                              0 -
                              (((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                0)) /
                              2 +
                              (((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1) +
                              0)
                        ),
                        pixelHeight: 1152,
                        pixelWidth: 864,
                        sizes: s?.width || `100vw`,
                        src: `https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png?width=864&height=1152`,
                        srcSet: `https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png?scale-down-to=1024&width=864&height=1152 768w,https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png?width=864&height=1152 864w`,
                      },
                      className: `framer-a3d2tv`,
                      'data-framer-name': `Image 2`,
                      layoutDependency: w,
                      layoutId: `e2TUE1DdW`,
                      ...Bn(
                        {
                          rFjN4yoEW: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K(
                                (s?.y || 0) +
                                  0 +
                                  (((s?.height || 230) -
                                    0 -
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      0)) /
                                    2 +
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1) +
                                    0)
                              ),
                              pixelHeight: 1152,
                              pixelWidth: 864,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png?width=864&height=1152`,
                              srcSet: `https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png?scale-down-to=1024&width=864&height=1152 768w,https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png?width=864&height=1152 864w`,
                            },
                          },
                          sex0Kr1iV: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K(
                                (s?.y || 0) +
                                  0 +
                                  (((s?.height || 230) -
                                    0 -
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      0)) /
                                    2 +
                                    ((s?.height || 230) - 0) * 1 +
                                    0)
                              ),
                              pixelHeight: 1152,
                              pixelWidth: 864,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png?width=864&height=1152`,
                              srcSet: `https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png?scale-down-to=1024&width=864&height=1152 768w,https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png?width=864&height=1152 864w`,
                            },
                          },
                          sP9zw4_Pq: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K(
                                (s?.y || 0) +
                                  0 +
                                  (((s?.height || 230) -
                                    0 -
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      0)) /
                                    2 +
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1) +
                                    0)
                              ),
                              pixelHeight: 1152,
                              pixelWidth: 864,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png?width=864&height=1152`,
                              srcSet: `https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png?scale-down-to=1024&width=864&height=1152 768w,https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png?width=864&height=1152 864w`,
                            },
                          },
                          vH7Y42YRC: {
                            background: {
                              alt: `Woman B&W`,
                              fit: `fill`,
                              loading: K(
                                (s?.y || 0) +
                                  0 +
                                  (((s?.height || 230) -
                                    0 -
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      0)) /
                                    2 +
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1) +
                                    0)
                              ),
                              pixelHeight: 1896,
                              pixelWidth: 948,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/x3mtgbwobHf35roliTaQZyLSBBY.png?width=948&height=1896`,
                              srcSet: `https://framerusercontent.com/images/x3mtgbwobHf35roliTaQZyLSBBY.png?scale-down-to=1024&width=948&height=1896 512w,https://framerusercontent.com/images/x3mtgbwobHf35roliTaQZyLSBBY.png?width=948&height=1896 948w`,
                            },
                          },
                        },
                        p,
                        y
                      ),
                    }),
                    g(Ae, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: K(
                          (s?.y || 0) +
                            0 +
                            (((s?.height || 230) -
                              0 -
                              (((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                0)) /
                              2 +
                              (((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1) +
                              0)
                        ),
                        pixelHeight: 1280,
                        pixelWidth: 896,
                        sizes: s?.width || `100vw`,
                        src: `https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png?width=896&height=1280`,
                        srcSet: `https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png?width=896&height=1280 896w`,
                      },
                      className: `framer-1ar1jwg`,
                      'data-framer-name': `Image 3`,
                      layoutDependency: w,
                      layoutId: `JYgX8UHYU`,
                      ...Bn(
                        {
                          rFjN4yoEW: {
                            background: {
                              alt: `African`,
                              fit: `fill`,
                              loading: K(
                                (s?.y || 0) +
                                  0 +
                                  (((s?.height || 230) -
                                    0 -
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      0)) /
                                    2 +
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1) +
                                    0)
                              ),
                              pixelHeight: 1896,
                              pixelWidth: 948,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/GuSCyWKjOBEoN8LOcKZHKn1jMA.png?width=948&height=1896`,
                              srcSet: `https://framerusercontent.com/images/GuSCyWKjOBEoN8LOcKZHKn1jMA.png?scale-down-to=1024&width=948&height=1896 512w,https://framerusercontent.com/images/GuSCyWKjOBEoN8LOcKZHKn1jMA.png?width=948&height=1896 948w`,
                            },
                          },
                          sex0Kr1iV: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K(
                                (s?.y || 0) +
                                  0 +
                                  (((s?.height || 230) -
                                    0 -
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      0)) /
                                    2 +
                                    (((s?.height || 230) - 0) * 1 + ((s?.height || 230) - 0) * 1) +
                                    0)
                              ),
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png?width=896&height=1280`,
                              srcSet: `https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png?width=896&height=1280 896w`,
                            },
                          },
                          sP9zw4_Pq: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K(
                                (s?.y || 0) +
                                  0 +
                                  (((s?.height || 230) -
                                    0 -
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      0)) /
                                    2 +
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1) +
                                    0)
                              ),
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png?width=896&height=1280`,
                              srcSet: `https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png?width=896&height=1280 896w`,
                            },
                          },
                          vH7Y42YRC: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K(
                                (s?.y || 0) +
                                  0 +
                                  (((s?.height || 230) -
                                    0 -
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      0)) /
                                    2 +
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1) +
                                    0)
                              ),
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png?width=896&height=1280`,
                              srcSet: `https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png?width=896&height=1280 896w`,
                            },
                          },
                        },
                        p,
                        y
                      ),
                    }),
                    g(Ae, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: K(
                          (s?.y || 0) +
                            0 +
                            (((s?.height || 230) -
                              0 -
                              (((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                0)) /
                              2 +
                              (((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1) +
                              0)
                        ),
                        pixelHeight: 1280,
                        pixelWidth: 896,
                        sizes: s?.width || `100vw`,
                        src: `https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png?width=896&height=1280`,
                        srcSet: `https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png?width=896&height=1280 896w`,
                      },
                      className: `framer-ev0kc9`,
                      'data-framer-name': `Image 4`,
                      layoutDependency: w,
                      layoutId: `DzXsHu2zj`,
                      ...Bn(
                        {
                          rFjN4yoEW: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K(
                                (s?.y || 0) +
                                  0 +
                                  (((s?.height || 230) -
                                    0 -
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      0)) /
                                    2 +
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1) +
                                    0)
                              ),
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png?width=896&height=1280`,
                              srcSet: `https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png?width=896&height=1280 896w`,
                            },
                          },
                          sex0Kr1iV: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K(
                                (s?.y || 0) +
                                  0 +
                                  (((s?.height || 230) -
                                    0 -
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      0)) /
                                    2 +
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1) +
                                    0)
                              ),
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png?width=896&height=1280`,
                              srcSet: `https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png?width=896&height=1280 896w`,
                            },
                          },
                          sP9zw4_Pq: {
                            background: {
                              alt: `Man Glare`,
                              fit: `fill`,
                              loading: K(
                                (s?.y || 0) +
                                  0 +
                                  (((s?.height || 230) -
                                    0 -
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      0)) /
                                    2 +
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1) +
                                    0)
                              ),
                              pixelHeight: 1896,
                              pixelWidth: 948,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/U7eH9SaR4WNyFTGVtU9ToYpA5A.png?width=948&height=1896`,
                              srcSet: `https://framerusercontent.com/images/U7eH9SaR4WNyFTGVtU9ToYpA5A.png?scale-down-to=1024&width=948&height=1896 512w,https://framerusercontent.com/images/U7eH9SaR4WNyFTGVtU9ToYpA5A.png?width=948&height=1896 948w`,
                            },
                          },
                          vH7Y42YRC: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K(
                                (s?.y || 0) +
                                  0 +
                                  (((s?.height || 230) -
                                    0 -
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      0)) /
                                    2 +
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1) +
                                    0)
                              ),
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png?width=896&height=1280`,
                              srcSet: `https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png?width=896&height=1280 896w`,
                            },
                          },
                        },
                        p,
                        y
                      ),
                    }),
                    g(Ae, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: K(
                          (s?.y || 0) +
                            0 +
                            (((s?.height || 230) -
                              0 -
                              (((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                0)) /
                              2 +
                              (((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1 +
                                ((s?.height || 230) - 0) * 1) +
                              0)
                        ),
                        pixelHeight: 960,
                        pixelWidth: 768,
                        sizes: s?.width || `100vw`,
                        src: `https://framerusercontent.com/images/tqo25UoLX3yzZX9eWz4sP3BzU.webp?width=768&height=960`,
                        srcSet: `https://framerusercontent.com/images/tqo25UoLX3yzZX9eWz4sP3BzU.webp?width=768&height=960 768w`,
                      },
                      className: `framer-1n7i0xe`,
                      'data-framer-name': `Image 5`,
                      layoutDependency: w,
                      layoutId: `d7U4wAbOr`,
                      ...Bn(
                        {
                          rFjN4yoEW: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K(
                                (s?.y || 0) +
                                  0 +
                                  (((s?.height || 230) -
                                    0 -
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      0)) /
                                    2 +
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1) +
                                    0)
                              ),
                              pixelHeight: 960,
                              pixelWidth: 768,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/tqo25UoLX3yzZX9eWz4sP3BzU.webp?width=768&height=960`,
                              srcSet: `https://framerusercontent.com/images/tqo25UoLX3yzZX9eWz4sP3BzU.webp?width=768&height=960 768w`,
                            },
                          },
                          sex0Kr1iV: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K(
                                (s?.y || 0) +
                                  0 +
                                  (((s?.height || 230) -
                                    0 -
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      0)) /
                                    2 +
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1) +
                                    0)
                              ),
                              pixelHeight: 1896,
                              pixelWidth: 948,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/MIsem6ieNBDU8XBtbTRQucCs18.png?width=948&height=1896`,
                              srcSet: `https://framerusercontent.com/images/MIsem6ieNBDU8XBtbTRQucCs18.png?scale-down-to=1024&width=948&height=1896 512w,https://framerusercontent.com/images/MIsem6ieNBDU8XBtbTRQucCs18.png?width=948&height=1896 948w`,
                            },
                          },
                          sP9zw4_Pq: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K(
                                (s?.y || 0) +
                                  0 +
                                  (((s?.height || 230) -
                                    0 -
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      0)) /
                                    2 +
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1) +
                                    0)
                              ),
                              pixelHeight: 960,
                              pixelWidth: 768,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/tqo25UoLX3yzZX9eWz4sP3BzU.webp?width=768&height=960`,
                              srcSet: `https://framerusercontent.com/images/tqo25UoLX3yzZX9eWz4sP3BzU.webp?width=768&height=960 768w`,
                            },
                          },
                          vH7Y42YRC: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K(
                                (s?.y || 0) +
                                  0 +
                                  (((s?.height || 230) -
                                    0 -
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      0)) /
                                    2 +
                                    (((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1 +
                                      ((s?.height || 230) - 0) * 1) +
                                    0)
                              ),
                              pixelHeight: 960,
                              pixelWidth: 768,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/tqo25UoLX3yzZX9eWz4sP3BzU.webp?width=768&height=960`,
                              srcSet: `https://framerusercontent.com/images/tqo25UoLX3yzZX9eWz4sP3BzU.webp?width=768&height=960 768w`,
                            },
                          },
                        },
                        p,
                        y
                      ),
                    }),
                    k() &&
                      g(E.div, {
                        className: `framer-e0h5wc`,
                        'data-framer-name': `SPACER`,
                        layoutDependency: w,
                        layoutId: `rkkVMNkkm`,
                      }),
                    k() &&
                      g(E.div, {
                        className: `framer-q9iz8k`,
                        'data-framer-name': `SPACER`,
                        layoutDependency: w,
                        layoutId: `DwXsM0YCo`,
                      }),
                    k() &&
                      g(E.div, {
                        className: `framer-1thje2f`,
                        'data-framer-name': `SPACER`,
                        layoutDependency: w,
                        layoutId: `E4_azW1dt`,
                      }),
                    k() &&
                      g(E.div, {
                        className: `framer-usoxe1`,
                        'data-framer-name': `SPACER`,
                        layoutDependency: w,
                        layoutId: `NHwv878VQ`,
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-iJ1j0.framer-mzrdik, .framer-iJ1j0 .framer-mzrdik { display: block; }`,
          `.framer-iJ1j0.framer-gfv0f3 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 230px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 160px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-iJ1j0 .framer-1n6hb5q, .framer-iJ1j0 .framer-2ad5tn, .framer-iJ1j0 .framer-14q95ci, .framer-iJ1j0 .framer-d2f4rg, .framer-iJ1j0 .framer-e0h5wc, .framer-iJ1j0 .framer-q9iz8k, .framer-iJ1j0 .framer-1thje2f, .framer-iJ1j0 .framer-usoxe1 { flex: none; height: 100%; overflow: hidden; pointer-events: none; position: relative; width: 100%; }`,
          `.framer-iJ1j0 .framer-gg9h8h, .framer-iJ1j0 .framer-a3d2tv, .framer-iJ1j0 .framer-1ar1jwg, .framer-iJ1j0 .framer-ev0kc9, .framer-iJ1j0 .framer-1n7i0xe { flex: none; height: 100%; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        ],
        `framer-iJ1j0`
      )),
      (er = $n),
      ($n.displayName = `Image Cursor`),
      ($n.defaultProps = { height: 230, width: 160 }),
      I($n, {
        variant: {
          options: [`TYT7GU9zj`, `vH7Y42YRC`, `rFjN4yoEW`, `sP9zw4_Pq`, `sex0Kr1iV`],
          optionTitles: [`1`, `2`, `3`, `4`, `5`],
          title: `Variant`,
          type: H.Enum,
        },
      }),
      L($n, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  nr,
  rr,
  ir,
  ar = e(() => {
    (R(),
      ve.loadFonts([
        `FR;InterDisplay-SemiBold`,
        `FR;InterDisplay-Bold`,
        `FR;InterDisplay-BoldItalic`,
        `FR;InterDisplay-SemiBoldItalic`,
      ]),
      (nr = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/dHHUz45rhM2KCQpj9zttNVlibk.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/I11LrmuBDQZweplJ62KkVsklU5Y.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/UjFZPDy3qGuDktQM4q9CxhKfIa8.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/8exwVHJy2DhJ4N5prYlVMrEKmQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/UTeedEK21hO5jDxEUldzdScUqpg.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/Ig8B8nzy11hzIWEIYnkg91sofjo.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/n9CXKI3tsmCPeC6MCT9NziShSuQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/qctQFoJqJ9aIbRSIp0AhCQpFxn8.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/fXvVh2JeZlehNcEhKHpHH0frSl0.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/7pScaNeb6M7n2HF2jKemDqzCIr4.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/qS4UjQYyATcVV9rODk0Zx9KhkY8.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/VfD2n20yM7v0hrUEBHEyafsmMBY.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/4oIO9fB59bn3cKFWz7piCj28z9s.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/TBccIZR9kIpkRce5i9ATfPp7a4.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/F5Lmfd3fCAu7TwiYbI4DLWw4ks.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/KKQXBq6BF0xEmVbrTnWxh3Yw.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/ugFYeIKZEJXDxI6Kh0YQUX6EK9I.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/DgDysCLt0HkIpWMu2uN5tivgQ.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/2yEyxokC6poTg3Uc5E2ogfVi6WE.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/wmHLUqO4QxLaADUScavxvknnBQ.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/08bCJfmvizuFi36VeazboYh54CQ.woff2`,
              weight: `600`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/DuYGXsyDXsSnxlZ8qzmcA4x3JiI.woff2`,
              weight: `600`,
            },
          ],
        },
      ]),
      (rr = [
        `.framer-kdUcE .framer-styles-preset-izlnn8:not(.rich-text-wrapper), .framer-kdUcE .framer-styles-preset-izlnn8.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0px; --framer-line-height: 24px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (ir = `framer-kdUcE`));
  }),
  or,
  sr,
  cr,
  lr = e(() => {
    (R(),
      ve.loadFonts([
        `FR;InterDisplay-Medium`,
        `FR;InterDisplay-Bold`,
        `FR;InterDisplay-BoldItalic`,
        `FR;InterDisplay-MediumItalic`,
      ]),
      (or = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/F3kdpd2N0cToWV5huaZjjgM.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/r0mv3NegmA0akcQsNFotG32Las.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/8yoV9pUxquX7VD7ZXlNYKQmkmk.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/I11LrmuBDQZweplJ62KkVsklU5Y.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/UjFZPDy3qGuDktQM4q9CxhKfIa8.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/8exwVHJy2DhJ4N5prYlVMrEKmQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/UTeedEK21hO5jDxEUldzdScUqpg.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/Ig8B8nzy11hzIWEIYnkg91sofjo.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/n9CXKI3tsmCPeC6MCT9NziShSuQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/qctQFoJqJ9aIbRSIp0AhCQpFxn8.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/fXvVh2JeZlehNcEhKHpHH0frSl0.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/7pScaNeb6M7n2HF2jKemDqzCIr4.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/qS4UjQYyATcVV9rODk0Zx9KhkY8.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/VfD2n20yM7v0hrUEBHEyafsmMBY.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/4oIO9fB59bn3cKFWz7piCj28z9s.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/TBccIZR9kIpkRce5i9ATfPp7a4.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/F5Lmfd3fCAu7TwiYbI4DLWw4ks.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/A5P4nkYCJlLQxGxaS1lzG8PNSc.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/vuPfygr1n1zYxscvWgGI8hRf3LE.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/jplzYzqFHXreyADwk9yrkQlWQ.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/sSIKP2TfVPvfK7YVENPE5H87A.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/gawbeo7iEJSRZ4kcrh6YRrU8o.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/xSzma7KIWAdctStaX171ey3lams.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/8E92vrr3j1gDqzepmeSbD2u0JxA.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (sr = [
        `.framer-GUdCm .framer-styles-preset-14w8e6o:not(.rich-text-wrapper), .framer-GUdCm .framer-styles-preset-14w8e6o.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 19px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0px; --framer-line-height: 25.2px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (cr = `framer-GUdCm`));
  });
function ur(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or = e(() => {
    (S(),
      R(),
      M(),
      r(),
      ar(),
      lr(),
      (dr = ne(ae(F))),
      (fr = { Cx_9OikEn: { hover: !0 } }),
      (pr = [`Cx_9OikEn`, `gO3DGLxth`]),
      (mr = `framer-jABAE`),
      (hr = { Cx_9OikEn: `framer-v-1la9h02`, gO3DGLxth: `framer-v-btlrul` }),
      (gr = { damping: 50, delay: 0, mass: 1, stiffness: 200, type: `spring` }),
      (_r = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (vr = (e, t) => `translateY(-50%) ${t}`),
      (yr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.2, delay: 0.1, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (br = {
        opacity: 1,
        rotate: 0,
        rotateX: 90,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (xr = ({ value: e, children: t }) => {
        let n = c(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return g(O.Provider, { value: i, children: t });
      }),
      (Sr = E.create(s)),
      (Cr = { Primary: `Cx_9OikEn`, Secondary: `gO3DGLxth` }),
      (wr = ({
        bGImage: e,
        category: t,
        count: n,
        height: r,
        id: i,
        innerImage: a,
        title: o,
        width: s,
        ...c
      }) => ({
        ...c,
        AqtGNwpbH: o ?? c.AqtGNwpbH ?? `Pass the batton`,
        dRIEmL6Sy: t ?? c.dRIEmL6Sy ?? `Art Direction`,
        G7pLazd_I: n ?? c.G7pLazd_I ?? `(01)`,
        PC_QK2Qt6: a ??
          c.PC_QK2Qt6 ?? {
            pixelHeight: 1694,
            pixelWidth: 1600,
            src: `https://framerusercontent.com/images/zXWJpELRLJGcBhhkQxfY32xP5YA.png?width=1600&height=1694`,
            srcSet: `https://framerusercontent.com/images/zXWJpELRLJGcBhhkQxfY32xP5YA.png?scale-down-to=1024&width=1600&height=1694 967w,https://framerusercontent.com/images/zXWJpELRLJGcBhhkQxfY32xP5YA.png?width=1600&height=1694 1600w`,
          },
        T69HEV85j: e ??
          c.T69HEV85j ?? {
            pixelHeight: 1694,
            pixelWidth: 1600,
            src: `https://framerusercontent.com/images/UBKg9UNYr71hmFdpM0azXQkmWg.png?width=1600&height=1694`,
            srcSet: `https://framerusercontent.com/images/UBKg9UNYr71hmFdpM0azXQkmWg.png?scale-down-to=1024&width=1600&height=1694 967w,https://framerusercontent.com/images/UBKg9UNYr71hmFdpM0azXQkmWg.png?width=1600&height=1694 1600w`,
          },
        variant: Cr[c.variant] ?? c.variant ?? `Cx_9OikEn`,
      })),
      (Tr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Er = ue(
        p(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = h(),
            { activeLocale: a, setLocale: o } = he(),
            c = De(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              T69HEV85j: p,
              PC_QK2Qt6: m,
              dRIEmL6Sy: _,
              AqtGNwpbH: v,
              G7pLazd_I: y,
              ...S
            } = wr(e),
            {
              baseVariant: ee,
              classNames: te,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: D,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = Ie({
              cycleOrder: pr,
              defaultVariant: `Cx_9OikEn`,
              enabledGestures: fr,
              ref: r,
              variant: f,
              variantClassNames: hr,
            }),
            M = Tr(e, A),
            P = N(mr, ir, cr),
            ne = () => T === `Cx_9OikEn-hover` || ee === `gO3DGLxth`;
          return g(j, {
            id: d ?? i,
            children: g(Sr, {
              animate: A,
              initial: !1,
              children: g(xr, {
                value: gr,
                children: x(E.div, {
                  ...S,
                  ...w,
                  className: N(P, `framer-1la9h02`, u, te),
                  'data-framer-name': `Primary`,
                  layoutDependency: M,
                  layoutId: `Cx_9OikEn`,
                  ref: r,
                  style: { ...l },
                  ...ur(
                    {
                      'Cx_9OikEn-hover': { 'data-framer-name': void 0 },
                      gO3DGLxth: { 'data-framer-name': `Secondary` },
                    },
                    ee,
                    T
                  ),
                  children: [
                    x(E.div, {
                      className: `framer-p9o99y`,
                      'data-framer-name': `Top`,
                      layoutDependency: M,
                      layoutId: `bE8CFTyPp`,
                      style: {
                        backgroundColor: `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      },
                      children: [
                        g(Ae, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: K(
                              (c?.y || 0) +
                                0 +
                                (((c?.height || 749) -
                                  0 -
                                  (Math.max(0, ((c?.height || 749) - 0 - 39.2) / 1) * 1 +
                                    25.2 +
                                    14)) /
                                  2 +
                                  0 +
                                  0) +
                                (Math.max(0, ((c?.height || 749) - 0 - 39.2) / 1) *
                                  1 *
                                  0.5000000000000002 -
                                  (Math.max(0, ((c?.height || 749) - 0 - 39.2) / 1) * 1 * 1) / 2)
                            ),
                            pixelHeight: 1694,
                            pixelWidth: 1600,
                            sizes: c?.width || `100vw`,
                            ..._r(p),
                          },
                          className: `framer-1ictoqu`,
                          'data-framer-name': `Image/Video`,
                          layoutDependency: M,
                          layoutId: `nh3dw93Nm`,
                          style: { opacity: 1 },
                          variants: { 'Cx_9OikEn-hover': { opacity: 0.4 } },
                        }),
                        g(E.div, {
                          className: `framer-dxxwoi`,
                          'data-framer-name': `Inner Image`,
                          layoutDependency: M,
                          layoutId: `EpqFYeFZQ`,
                          style: {
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                          },
                          children: g(Ae, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K(
                                (c?.y || 0) +
                                  0 +
                                  (((c?.height || 749) -
                                    0 -
                                    (Math.max(0, ((c?.height || 749) - 0 - 39.2) / 1) * 1 +
                                      25.2 +
                                      14)) /
                                    2 +
                                    0 +
                                    0) +
                                  0 +
                                  ((Math.max(0, ((c?.height || 749) - 0 - 39.2) / 1) * 1 -
                                    0 -
                                    ((Math.max(0, ((c?.height || 749) - 0 - 39.2) / 1) * 1 - 0) *
                                      0.5 +
                                      0)) /
                                    2 +
                                    0 +
                                    0) +
                                  (0 +
                                    ((Math.max(0, ((c?.height || 749) - 0 - 39.2) / 1) * 1 - 0) *
                                      0.5 -
                                      0 -
                                      ((Math.max(0, ((c?.height || 749) - 0 - 39.2) / 1) * 1 - 0) *
                                        0.5 -
                                        0) *
                                        1) /
                                      2)
                              ),
                              pixelHeight: 1694,
                              pixelWidth: 1600,
                              sizes: `max(${c?.width || `100vw`} / 2, 1px)`,
                              ..._r(m),
                            },
                            className: `framer-diwhiw`,
                            'data-framer-name': `Image`,
                            layoutDependency: M,
                            layoutId: `MIoNdnSdF`,
                            style: { scale: 1 },
                            variants: { 'Cx_9OikEn-hover': { scale: 1.2 } },
                          }),
                        }),
                        x(E.div, {
                          className: `framer-4lsz85`,
                          'data-framer-name': `Banner`,
                          layoutDependency: M,
                          layoutId: `Kz83UYoTw`,
                          style: { opacity: 0 },
                          transformTemplate: vr,
                          variants: {
                            'Cx_9OikEn-hover': { opacity: 1 },
                            gO3DGLxth: { opacity: 1 },
                          },
                          children: [
                            ne() &&
                              g(dr, {
                                __fromCanvasComponent: !0,
                                children: g(s, {
                                  children: g(E.p, {
                                    className: `framer-styles-preset-izlnn8`,
                                    'data-styles-preset': `eqDmnbQxL`,
                                    children: `Art Direction`,
                                  }),
                                }),
                                className: `framer-12mts4q`,
                                'data-framer-appear-id': `12mts4q`,
                                'data-framer-name': `Text`,
                                fonts: [`Inter`],
                                layoutDependency: M,
                                layoutId: `Qilc29BEy`,
                                style: { '--framer-paragraph-spacing': `0px` },
                                text: _,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...ur(
                                  {
                                    'Cx_9OikEn-hover': {
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      animate: yr,
                                      initial: br,
                                      optimized: !0,
                                    },
                                  },
                                  ee,
                                  T
                                ),
                              }),
                            g(E.div, {
                              className: `framer-1nkrcxv`,
                              'data-framer-name': `Filler`,
                              layoutDependency: M,
                              layoutId: `PJk7gQKmQ`,
                              style: {
                                backgroundColor: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    x(E.div, {
                      className: `framer-y7tfor`,
                      'data-framer-name': `Bottom`,
                      layoutDependency: M,
                      layoutId: `z2HlXTn6L`,
                      children: [
                        x(E.div, {
                          className: `framer-sftb92`,
                          'data-framer-name': `Title`,
                          layoutDependency: M,
                          layoutId: `eojJTvXDx`,
                          children: [
                            g(F, {
                              __fromCanvasComponent: !0,
                              children: g(s, {
                                children: g(E.p, {
                                  className: `framer-styles-preset-14w8e6o`,
                                  'data-styles-preset': `FsS03h6Vk`,
                                  children: `Pass the batton`,
                                }),
                              }),
                              className: `framer-o7z988`,
                              'data-framer-name': `Text 1`,
                              fonts: [`Inter`],
                              layoutDependency: M,
                              layoutId: `szcpebXb4`,
                              style: { '--framer-paragraph-spacing': `0px` },
                              text: v,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            g(F, {
                              __fromCanvasComponent: !0,
                              children: g(s, {
                                children: g(E.p, {
                                  className: `framer-styles-preset-14w8e6o`,
                                  'data-styles-preset': `FsS03h6Vk`,
                                  children: `Pass the batton`,
                                }),
                              }),
                              className: `framer-pzhh3u`,
                              'data-framer-name': `Text 2`,
                              fonts: [`Inter`],
                              layoutDependency: M,
                              layoutId: `glc7HcWIY`,
                              style: { '--framer-paragraph-spacing': `0px` },
                              text: v,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        g(F, {
                          __fromCanvasComponent: !0,
                          children: g(s, {
                            children: g(E.p, {
                              className: `framer-styles-preset-14w8e6o`,
                              'data-styles-preset': `FsS03h6Vk`,
                              children: `(01)`,
                            }),
                          }),
                          className: `framer-3oflgi`,
                          'data-framer-name': `Count`,
                          fonts: [`Inter`],
                          layoutDependency: M,
                          layoutId: `cVoPPgQfO`,
                          style: { '--framer-paragraph-spacing': `0px` },
                          text: y,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-jABAE.framer-1g96g07, .framer-jABAE .framer-1g96g07 { display: block; }`,
          `.framer-jABAE.framer-1la9h02 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: 749px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 698px; }`,
          `.framer-jABAE .framer-p9o99y { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-jABAE .framer-1ictoqu { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`,
          `.framer-jABAE .framer-dxxwoi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 50%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 50%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-jABAE .framer-diwhiw { flex: 1 0 0px; height: 100%; position: relative; width: 1px; z-index: 1; }`,
          `.framer-jABAE .framer-4lsz85 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 300px; height: min-content; justify-content: center; left: 0px; min-height: 24px; overflow: hidden; padding: 0px; position: absolute; top: 50%; width: 100%; z-index: 1; }`,
          `.framer-jABAE .framer-12mts4q, .framer-jABAE .framer-o7z988, .framer-jABAE .framer-pzhh3u, .framer-jABAE .framer-3oflgi { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-jABAE .framer-1nkrcxv { flex: none; height: 1px; left: 0px; overflow: visible; position: absolute; top: calc(50.00000000000002% - 1px / 2); width: 100%; }`,
          `.framer-jABAE .framer-y7tfor { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-jABAE .framer-sftb92 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 25px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-jABAE.framer-v-btlrul.framer-1la9h02 { cursor: unset; }`,
          `.framer-jABAE.framer-v-btlrul .framer-4lsz85, .framer-jABAE.framer-v-1la9h02.hover .framer-4lsz85 { min-height: unset; }`,
          `.framer-jABAE.framer-v-btlrul .framer-12mts4q { order: 1; z-index: 3; }`,
          `.framer-jABAE.framer-v-btlrul .framer-1nkrcxv { height: 100%; order: 0; top: calc(50.00000000000002% - 100% / 2); }`,
          `.framer-jABAE.framer-v-1la9h02.hover .framer-12mts4q { order: 1; }`,
          `.framer-jABAE.framer-v-1la9h02.hover .framer-1nkrcxv { height: 24px; order: 0; top: calc(50.00000000000002% - 24px / 2); }`,
          `.framer-jABAE.framer-v-1la9h02.hover .framer-sftb92 { justify-content: flex-end; }`,
          ...rr,
          ...sr,
        ],
        `framer-jABAE`
      )),
      (Dr = Er),
      (Er.displayName = `Work Card`),
      (Er.defaultProps = { height: 749, width: 698 }),
      I(Er, {
        variant: {
          options: [`Cx_9OikEn`, `gO3DGLxth`],
          optionTitles: [`Primary`, `Secondary`],
          title: `Variant`,
          type: H.Enum,
        },
        T69HEV85j: {
          __defaultAssetReference: `data:framer/asset-reference,UBKg9UNYr71hmFdpM0azXQkmWg.png?originalFilename=0037.png&width=1600&height=1694`,
          title: `BG Image`,
          type: H.ResponsiveImage,
        },
        PC_QK2Qt6: {
          __defaultAssetReference: `data:framer/asset-reference,zXWJpELRLJGcBhhkQxfY32xP5YA.png?originalFilename=0038.png&width=1600&height=1694`,
          title: `Inner Image`,
          type: H.ResponsiveImage,
        },
        dRIEmL6Sy: {
          defaultValue: `Art Direction`,
          displayTextArea: !1,
          title: `Category`,
          type: H.String,
        },
        AqtGNwpbH: {
          defaultValue: `Pass the batton`,
          displayTextArea: !1,
          title: `Title`,
          type: H.String,
        },
        G7pLazd_I: { defaultValue: `(01)`, displayTextArea: !1, title: `Count`, type: H.String },
      }),
      L(
        Er,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...B(nr),
          ...B(or),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function kr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr = e(() => {
    (S(),
      R(),
      M(),
      r(),
      wn(),
      (Ar = z(mn)),
      (jr = P(mn)),
      (Mr = [`vifpDyxXC`, `Mj_yFQ3Et`]),
      (Nr = `framer-BqIYx`),
      (Pr = { Mj_yFQ3Et: `framer-v-12ruab9`, vifpDyxXC: `framer-v-1dvnqn6` }),
      (Fr = { delay: 0.1, duration: 0.6, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Ir = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Lr = ({ value: e, children: t }) => {
        let n = c(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return g(O.Provider, { value: i, children: t });
      }),
      (Rr = E.create(s)),
      (zr = { Default: `vifpDyxXC`, Video: `Mj_yFQ3Et` }),
      (Br = ({ file: e, height: t, id: n, image: r, logo: i, width: a, ...o }) => ({
        ...o,
        SXjjKopWL: i ??
          o.SXjjKopWL ?? {
            alt: ``,
            pixelHeight: 87,
            pixelWidth: 230,
            src: `https://framerusercontent.com/images/liDp6RqOmZpoiyriU2da9i9ZRNM.png?width=230&height=87`,
          },
        variant: zr[o.variant] ?? o.variant ?? `vifpDyxXC`,
        vH_Dks4GI:
          e ?? o.vH_Dks4GI ?? `https://framerusercontent.com/assets/GGPiX7opDpW2wM3gwHFeCR7cZA.mp4`,
        VypX2yAlC: r ??
          o.VypX2yAlC ?? {
            pixelHeight: 963,
            pixelWidth: 1920,
            src: `https://framerusercontent.com/images/LFYyAGdW4Von1qJ8NoeNTgHM9yI.png?width=1920&height=963`,
            srcSet: `https://framerusercontent.com/images/LFYyAGdW4Von1qJ8NoeNTgHM9yI.png?scale-down-to=512&width=1920&height=963 512w,https://framerusercontent.com/images/LFYyAGdW4Von1qJ8NoeNTgHM9yI.png?scale-down-to=1024&width=1920&height=963 1024w,https://framerusercontent.com/images/LFYyAGdW4Von1qJ8NoeNTgHM9yI.png?width=1920&height=963 1920w`,
          },
      })),
      (Vr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Hr = ue(
        p(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = h(),
            { activeLocale: a, setLocale: o } = he(),
            s = De(),
            {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              VypX2yAlC: f,
              SXjjKopWL: p,
              vH_Dks4GI: m,
              ..._
            } = Br(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: S,
              gestureHandlers: ee,
              gestureVariant: te,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: D,
            } = Ie({
              cycleOrder: Mr,
              defaultVariant: `vifpDyxXC`,
              ref: r,
              variant: d,
              variantClassNames: Pr,
            }),
            O = Vr(e, D),
            k = N(Nr),
            A = () => v === `Mj_yFQ3Et`,
            M = () => v !== `Mj_yFQ3Et`;
          return g(j, {
            id: u ?? i,
            children: g(Rr, {
              animate: D,
              initial: !1,
              children: g(Lr, {
                value: Fr,
                children: x(E.div, {
                  ..._,
                  ...ee,
                  className: N(k, `framer-1dvnqn6`, l, y),
                  'data-framer-name': `Default`,
                  layoutDependency: O,
                  layoutId: `vifpDyxXC`,
                  ref: r,
                  style: {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    ...c,
                  },
                  ...kr({ Mj_yFQ3Et: { 'data-framer-name': `Video` } }, v, te),
                  children: [
                    A() &&
                      g(W, {
                        children: g(V, {
                          className: `framer-zsocgq-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: O,
                          layoutId: `zIPPgA3eT-container`,
                          nodeId: `zIPPgA3eT`,
                          rendersWithMotion: !0,
                          scopeId: `k9r0KF_Ps`,
                          children: g(mn, {
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderRadius: 0,
                            bottomLeftRadius: 0,
                            bottomRightRadius: 0,
                            controls: !1,
                            height: `100%`,
                            id: `zIPPgA3eT`,
                            isMixedBorderRadius: !1,
                            layoutId: `zIPPgA3eT`,
                            loop: !0,
                            muted: !0,
                            objectFit: `cover`,
                            playing: !0,
                            poster: `https://framerusercontent.com/images/pNhNmzIExexZl1L1DS4hRV9gR5U.png?width=1920&height=963`,
                            posterEnabled: !0,
                            srcFile: m,
                            srcType: `Upload`,
                            srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                            startTime: 0,
                            style: { height: `100%`, width: `100%` },
                            topLeftRadius: 0,
                            topRightRadius: 0,
                            volume: 25,
                            width: `100%`,
                          }),
                        }),
                      }),
                    M() &&
                      g(Ae, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: K((s?.y || 0) + 0),
                          pixelHeight: 963,
                          pixelWidth: 1920,
                          sizes: s?.width || `100vw`,
                          ...Ir(f),
                          positionX: `center`,
                          positionY: `center`,
                        },
                        className: `framer-144g2sq`,
                        draggable: `false`,
                        layoutDependency: O,
                        layoutId: `UJ_Qf7QME`,
                        style: { filter: `brightness(0.6)`, WebkitFilter: `brightness(0.6)` },
                      }),
                    g(E.div, {
                      className: `framer-1kzr9zt`,
                      'data-framer-name': `Text`,
                      layoutDependency: O,
                      layoutId: `V9AsDOwoe`,
                      children: g(Ae, {
                        background: {
                          alt: ``,
                          fit: `fit`,
                          intrinsicHeight: 43.5,
                          intrinsicWidth: 115,
                          loading: K(
                            (s?.y || 0) + 0 + (((s?.height || 215) - 0 - 21) / 2 + 0 + 0) + 0 + 0
                          ),
                          pixelHeight: 87,
                          pixelWidth: 230,
                          sizes: `65px`,
                          ...Ir(p),
                          positionX: `center`,
                          positionY: `center`,
                        },
                        className: `framer-1bcygkq`,
                        'data-framer-name': `675d4cbc10e6dcb01229787c Cairo Logo Black 2`,
                        layoutDependency: O,
                        layoutId: `AmDrb522U`,
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-BqIYx.framer-17kjg2f, .framer-BqIYx .framer-17kjg2f { display: block; }`,
          `.framer-BqIYx.framer-1dvnqn6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 215px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 320px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-BqIYx .framer-zsocgq-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-BqIYx .framer-144g2sq { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
          `.framer-BqIYx .framer-1kzr9zt { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; user-select: none; width: min-content; z-index: 1; }`,
          `.framer-BqIYx .framer-1bcygkq { aspect-ratio: 2.6436781609195403 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 25px); overflow: visible; position: relative; width: 65px; }`,
        ],
        `framer-BqIYx`
      )),
      (Ur = Hr),
      (Hr.displayName = `Client Card`),
      (Hr.defaultProps = { height: 215, width: 320 }),
      I(Hr, {
        variant: {
          options: [`vifpDyxXC`, `Mj_yFQ3Et`],
          optionTitles: [`Default`, `Video`],
          title: `Variant`,
          type: H.Enum,
        },
        VypX2yAlC: {
          __defaultAssetReference: `data:framer/asset-reference,LFYyAGdW4Von1qJ8NoeNTgHM9yI.png?originalFilename=IMG_0580.png&width=1920&height=963`,
          title: `Image`,
          type: H.ResponsiveImage,
        },
        SXjjKopWL: {
          __defaultAssetReference: `data:framer/asset-reference,liDp6RqOmZpoiyriU2da9i9ZRNM.png?originalFilename=675d4cbc10e6dcb01229787c_Cairo+Logo+Black+2.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,liDp6RqOmZpoiyriU2da9i9ZRNM.png?originalFilename=675d4cbc10e6dcb01229787c_Cairo+Logo+Black+2.png&preferredSize=auto`,
          },
          title: `Logo`,
          type: H.ResponsiveImage,
        },
        vH_Dks4GI: jr?.srcFile && {
          ...jr.srcFile,
          __defaultAssetReference: `data:framer/asset-reference,GGPiX7opDpW2wM3gwHFeCR7cZA.mp4?originalFilename=gunpv.mp4`,
          description: void 0,
          hidden: void 0,
          title: `File`,
        },
      }),
      L(Hr, [{ explicitInter: !0, fonts: [] }, ...Ar], { supportsExplicitInterCodegen: !0 }));
  });
function Gr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi = e(() => {
    (S(),
      R(),
      M(),
      r(),
      Xe(),
      (Kr = ne(ae(F))),
      (qr = [`p6MHOXaId`, `yQnSBc9qa`]),
      (Jr = `framer-HEDEE`),
      (Yr = { p6MHOXaId: `framer-v-xlotgl`, yQnSBc9qa: `framer-v-1rbv0do` }),
      (Xr = { damping: 60, delay: 0, mass: 1, stiffness: 300, type: `spring` }),
      (Zr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.2, delay: 0.1, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Qr = {
        opacity: 1,
        rotate: 0,
        rotateX: 90,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      ($r = ({ value: e, children: t }) => {
        let n = c(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return g(O.Provider, { value: i, children: t });
      }),
      (ei = E.create(s)),
      (ti = { Appear: `yQnSBc9qa`, Normal: `p6MHOXaId` }),
      (ni = ({ height: e, id: t, title1: n, title2: r, title3: i, title4: a, width: o, ...s }) => ({
        ...s,
        DTbD9rT1W: i ?? s.DTbD9rT1W ?? `Strategy`,
        L7I1r5V52: r ?? s.L7I1r5V52 ?? `Branding`,
        UVsRBS2xZ: a ?? s.UVsRBS2xZ ?? `Web Design`,
        variant: ti[s.variant] ?? s.variant ?? `p6MHOXaId`,
        Y0AFFcDc9: n ?? s.Y0AFFcDc9 ?? `Art Direction`,
      })),
      (ri = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ii = ue(
        p(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = h(),
            { activeLocale: a, setLocale: o } = he();
          De();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              Y0AFFcDc9: f,
              L7I1r5V52: p,
              DTbD9rT1W: m,
              UVsRBS2xZ: _,
              ...v
            } = ni(e),
            {
              baseVariant: y,
              classNames: S,
              clearLoadingGesture: ee,
              gestureHandlers: te,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: D,
              variants: O,
            } = Ie({
              cycleOrder: qr,
              defaultVariant: `p6MHOXaId`,
              ref: r,
              variant: d,
              variantClassNames: Yr,
            }),
            k = ri(e, O),
            { activeVariantCallback: A, delay: M } = Ce(y);
          xe(y, {
            default: A(async (...e) => {
              await M(() => D(`yQnSBc9qa`), 4400);
            }),
          });
          let P = N(Jr, He);
          return g(j, {
            id: u ?? i,
            children: g(ei, {
              animate: O,
              initial: !1,
              children: g($r, {
                value: Xr,
                children: x(E.div, {
                  ...v,
                  ...te,
                  className: N(P, `framer-xlotgl`, l, S),
                  'data-framer-name': `Normal`,
                  'data-highlight': !0,
                  layoutDependency: k,
                  layoutId: `p6MHOXaId`,
                  ref: r,
                  style: { ...c },
                  ...Gr({ yQnSBc9qa: { 'data-framer-name': `Appear` } }, y, C),
                  children: [
                    g(E.div, {
                      className: `framer-u73k71`,
                      'data-framer-name': `BG`,
                      layoutDependency: k,
                      layoutId: `iwHtwVKD0`,
                      style: {
                        backgroundColor: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                        opacity: 0,
                      },
                      variants: { yQnSBc9qa: { opacity: 1 } },
                    }),
                    g(Kr, {
                      __fromCanvasComponent: !0,
                      children: g(s, {
                        children: g(E.p, {
                          className: `framer-styles-preset-izlnn8`,
                          'data-styles-preset': `eqDmnbQxL`,
                          children: `Art Direction`,
                        }),
                      }),
                      className: `framer-1602xft`,
                      'data-framer-appear-id': `1602xft`,
                      'data-framer-name': `Text 1`,
                      fonts: [`Inter`],
                      layoutDependency: k,
                      layoutId: `aY_Xk3vyV`,
                      style: { '--framer-paragraph-spacing': `0px` },
                      text: f,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Gr(
                        {
                          yQnSBc9qa: {
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: Zr,
                            initial: Qr,
                            optimized: !0,
                          },
                        },
                        y,
                        C
                      ),
                    }),
                    g(Kr, {
                      __fromCanvasComponent: !0,
                      children: g(s, {
                        children: g(E.p, {
                          className: `framer-styles-preset-izlnn8`,
                          'data-styles-preset': `eqDmnbQxL`,
                          children: `Branding`,
                        }),
                      }),
                      className: `framer-1qj1b6h`,
                      'data-framer-appear-id': `1qj1b6h`,
                      'data-framer-name': `Text 2`,
                      fonts: [`Inter`],
                      layoutDependency: k,
                      layoutId: `PJPUjepfJ`,
                      style: { '--framer-paragraph-spacing': `0px` },
                      text: p,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Gr(
                        {
                          yQnSBc9qa: {
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: Zr,
                            initial: Qr,
                            optimized: !0,
                          },
                        },
                        y,
                        C
                      ),
                    }),
                    g(Kr, {
                      __fromCanvasComponent: !0,
                      children: g(s, {
                        children: g(E.p, {
                          className: `framer-styles-preset-izlnn8`,
                          'data-styles-preset': `eqDmnbQxL`,
                          children: `Strategy`,
                        }),
                      }),
                      className: `framer-1f7wmhl`,
                      'data-framer-appear-id': `1f7wmhl`,
                      'data-framer-name': `Text 3`,
                      fonts: [`Inter`],
                      layoutDependency: k,
                      layoutId: `kIqde0XrR`,
                      style: { '--framer-paragraph-spacing': `0px` },
                      text: m,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Gr(
                        {
                          yQnSBc9qa: {
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: Zr,
                            initial: Qr,
                            optimized: !0,
                          },
                        },
                        y,
                        C
                      ),
                    }),
                    g(Kr, {
                      __fromCanvasComponent: !0,
                      children: g(s, {
                        children: g(E.p, {
                          className: `framer-styles-preset-izlnn8`,
                          'data-styles-preset': `eqDmnbQxL`,
                          children: `Web Design`,
                        }),
                      }),
                      className: `framer-t0tsr`,
                      'data-framer-appear-id': `t0tsr`,
                      'data-framer-name': `Text 4`,
                      fonts: [`Inter`],
                      layoutDependency: k,
                      layoutId: `mRnqcLbm7`,
                      style: { '--framer-paragraph-spacing': `0px` },
                      text: _,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Gr(
                        {
                          yQnSBc9qa: {
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: Zr,
                            initial: Qr,
                            optimized: !0,
                          },
                        },
                        y,
                        C
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-HEDEE.framer-17qwq02, .framer-HEDEE .framer-17qwq02 { display: block; }`,
          `.framer-HEDEE.framer-xlotgl { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 300px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1440px; }`,
          `.framer-HEDEE .framer-u73k71 { flex: none; height: 1px; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 1px / 2); width: 100%; }`,
          `.framer-HEDEE .framer-1602xft, .framer-HEDEE .framer-1qj1b6h, .framer-HEDEE .framer-1f7wmhl, .framer-HEDEE .framer-t0tsr { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-HEDEE.framer-v-1rbv0do .framer-u73k71 { height: 24px; top: calc(50.00000000000002% - 24px / 2); }`,
          ...We,
        ],
        `framer-HEDEE`
      )),
      (ai = ii),
      (ii.displayName = `Animated Banner`),
      (ii.defaultProps = { height: 24, width: 1440 }),
      I(ii, {
        variant: {
          options: [`p6MHOXaId`, `yQnSBc9qa`],
          optionTitles: [`Normal`, `Appear`],
          title: `Variant`,
          type: H.Enum,
        },
        Y0AFFcDc9: {
          defaultValue: `Art Direction`,
          displayTextArea: !1,
          title: `Title 1`,
          type: H.String,
        },
        L7I1r5V52: {
          defaultValue: `Branding`,
          displayTextArea: !1,
          title: `Title 2`,
          type: H.String,
        },
        DTbD9rT1W: {
          defaultValue: `Strategy`,
          displayTextArea: !1,
          title: `Title 3`,
          type: H.String,
        },
        UVsRBS2xZ: {
          defaultValue: `Web Design`,
          displayTextArea: !1,
          title: `Title 4`,
          type: H.String,
        },
      }),
      L(
        ii,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...B(Ke),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  si,
  ci,
  li,
  ui = e(() => {
    (R(),
      ve.loadFonts([`FR;InterDisplay-Medium`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
      (si = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/F3kdpd2N0cToWV5huaZjjgM.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/r0mv3NegmA0akcQsNFotG32Las.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/8yoV9pUxquX7VD7ZXlNYKQmkmk.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/vFzuJY0c65av44uhEKB6vyjFMg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (ci = [
        `.framer-A61Fx .framer-styles-preset-d3a9yv:not(.rich-text-wrapper), .framer-A61Fx .framer-styles-preset-d3a9yv.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0px; --framer-line-height: 21.2px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (li = `framer-A61Fx`));
  });
function di(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi = e(() => {
    (S(),
      R(),
      M(),
      r(),
      (fi = [`e_BwIEW_8`, `CMMavfnMt`, `jPs3_WrdW`, `Vj9qKoT_G`, `gfRe1MGnZ`]),
      (pi = `framer-7ya09`),
      (mi = {
        CMMavfnMt: `framer-v-15xxrby`,
        e_BwIEW_8: `framer-v-d7g5a3`,
        gfRe1MGnZ: `framer-v-1ts6k6s`,
        jPs3_WrdW: `framer-v-11zr2v2`,
        Vj9qKoT_G: `framer-v-3uhaw`,
      }),
      (hi = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (gi = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (_i = ({ value: e, children: t }) => {
        let n = c(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return g(O.Provider, { value: i, children: t });
      }),
      (vi = E.create(s)),
      (yi = {
        1: `e_BwIEW_8`,
        2: `CMMavfnMt`,
        3: `jPs3_WrdW`,
        Mobile: `Vj9qKoT_G`,
        Tab: `gfRe1MGnZ`,
      }),
      (bi = ({ height: e, id: t, image1: n, image2: r, image3: i, image4: a, width: o, ...s }) => ({
        ...s,
        dBhRHdeNn: n ??
          s.dBhRHdeNn ?? {
            alt: ``,
            pixelHeight: 1280,
            pixelWidth: 896,
            src: `https://framerusercontent.com/images/gykz5t3Atm9UtfI5YcnYcpGmng.png?scale-down-to=512`,
            srcSet: `https://framerusercontent.com/images/gykz5t3Atm9UtfI5YcnYcpGmng.png?scale-down-to=1024 716w,https://framerusercontent.com/images/gykz5t3Atm9UtfI5YcnYcpGmng.png 896w`,
          },
        DvlHLjdnV: r ??
          s.DvlHLjdnV ?? {
            alt: ``,
            pixelHeight: 1024,
            pixelWidth: 1024,
            src: `https://framerusercontent.com/images/PxSsJrthME1XjSwGQXwUMx7rI.png?scale-down-to=512`,
            srcSet: `https://framerusercontent.com/images/PxSsJrthME1XjSwGQXwUMx7rI.png?scale-down-to=512 512w,https://framerusercontent.com/images/PxSsJrthME1XjSwGQXwUMx7rI.png 1024w`,
          },
        NGjSoReVt: a ??
          s.NGjSoReVt ?? {
            alt: ``,
            pixelHeight: 1280,
            pixelWidth: 896,
            src: `https://framerusercontent.com/images/dfa6kXeZNdp07AUexK86lC0Av1Q.png?scale-down-to=512`,
            srcSet: `https://framerusercontent.com/images/dfa6kXeZNdp07AUexK86lC0Av1Q.png?scale-down-to=1024 716w,https://framerusercontent.com/images/dfa6kXeZNdp07AUexK86lC0Av1Q.png 896w`,
          },
        U82U1Mfx6: i ??
          s.U82U1Mfx6 ?? {
            alt: ``,
            pixelHeight: 1408,
            pixelWidth: 768,
            src: `https://framerusercontent.com/images/41QaDdGvmS3kEQL4oJyWQuJz8.png?scale-down-to=512`,
            srcSet: `https://framerusercontent.com/images/41QaDdGvmS3kEQL4oJyWQuJz8.png?scale-down-to=1024 558w,https://framerusercontent.com/images/41QaDdGvmS3kEQL4oJyWQuJz8.png 768w`,
          },
        variant: yi[s.variant] ?? s.variant ?? `e_BwIEW_8`,
      })),
      (xi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Si = ue(
        p(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = h(),
            { activeLocale: a, setLocale: o } = he(),
            s = De(),
            {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              dBhRHdeNn: f,
              DvlHLjdnV: p,
              U82U1Mfx6: m,
              NGjSoReVt: _,
              ...v
            } = bi(e),
            {
              baseVariant: y,
              classNames: S,
              clearLoadingGesture: ee,
              gestureHandlers: te,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: D,
              variants: O,
            } = Ie({
              cycleOrder: fi,
              defaultVariant: `e_BwIEW_8`,
              ref: r,
              variant: d,
              variantClassNames: mi,
            }),
            k = xi(e, O),
            A = N(pi);
          return g(j, {
            id: u ?? i,
            children: g(vi, {
              animate: O,
              initial: !1,
              children: g(_i, {
                value: hi,
                children: x(E.div, {
                  ...v,
                  ...te,
                  className: N(A, `framer-d7g5a3`, l, S),
                  'data-framer-name': `1`,
                  layoutDependency: k,
                  layoutId: `e_BwIEW_8`,
                  ref: r,
                  style: { ...c },
                  ...di(
                    {
                      CMMavfnMt: { 'data-framer-name': `2` },
                      gfRe1MGnZ: { 'data-framer-name': `Tab` },
                      jPs3_WrdW: { 'data-framer-name': `3` },
                      Vj9qKoT_G: { 'data-framer-name': `Mobile` },
                    },
                    y,
                    C
                  ),
                  children: [
                    g(Ae, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: K((s?.y || 0) + 0),
                        pixelHeight: 1280,
                        pixelWidth: 896,
                        sizes: `84px`,
                        ...gi(f),
                      },
                      className: `framer-5y8s7c`,
                      'data-framer-name': `1`,
                      layoutDependency: k,
                      layoutId: `huXK7OFBl`,
                      style: {
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                      },
                      ...di(
                        {
                          gfRe1MGnZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K((s?.y || 0) + 0),
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: `max((${s?.width || `100vw`} - 30px) / 4, 1px)`,
                              ...gi(f),
                            },
                          },
                          jPs3_WrdW: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K((s?.y || 0) + 0),
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: `102px`,
                              ...gi(f),
                            },
                          },
                          Vj9qKoT_G: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K((s?.y || 0) + 0),
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: `max((${s?.width || `100vw`} - 30px) / 4, 1px)`,
                              ...gi(f),
                            },
                          },
                        },
                        y,
                        C
                      ),
                    }),
                    g(Ae, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: K((s?.y || 0) + 0),
                        pixelHeight: 1024,
                        pixelWidth: 1024,
                        sizes: `102px`,
                        ...gi(p),
                      },
                      className: `framer-h33s0b`,
                      'data-framer-name': `2`,
                      layoutDependency: k,
                      layoutId: `JMLnMCqsu`,
                      style: {
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                      },
                      ...di(
                        {
                          CMMavfnMt: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K((s?.y || 0) + 0),
                              pixelHeight: 1024,
                              pixelWidth: 1024,
                              sizes: `107px`,
                              ...gi(p),
                            },
                          },
                          gfRe1MGnZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K((s?.y || 0) + 0),
                              pixelHeight: 1024,
                              pixelWidth: 1024,
                              sizes: `max((${s?.width || `100vw`} - 30px) / 4, 1px)`,
                              ...gi(p),
                            },
                          },
                          jPs3_WrdW: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K((s?.y || 0) + 0),
                              pixelHeight: 1024,
                              pixelWidth: 1024,
                              sizes: `107px`,
                              ...gi(p),
                            },
                          },
                          Vj9qKoT_G: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K((s?.y || 0) + 0),
                              pixelHeight: 1024,
                              pixelWidth: 1024,
                              sizes: `max((${s?.width || `100vw`} - 30px) / 4, 1px)`,
                              ...gi(p),
                            },
                          },
                        },
                        y,
                        C
                      ),
                    }),
                    g(Ae, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: K((s?.y || 0) + 0),
                        pixelHeight: 1408,
                        pixelWidth: 768,
                        sizes: `107px`,
                        ...gi(m),
                      },
                      className: `framer-n6nikx`,
                      'data-framer-name': `3`,
                      layoutDependency: k,
                      layoutId: `yhsbjdKdy`,
                      style: {
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                      },
                      ...di(
                        {
                          CMMavfnMt: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K((s?.y || 0) + 0),
                              pixelHeight: 1408,
                              pixelWidth: 768,
                              sizes: `87px`,
                              ...gi(m),
                            },
                          },
                          gfRe1MGnZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K((s?.y || 0) + 0),
                              pixelHeight: 1408,
                              pixelWidth: 768,
                              sizes: `max((${s?.width || `100vw`} - 30px) / 4, 1px)`,
                              ...gi(m),
                            },
                          },
                          jPs3_WrdW: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K((s?.y || 0) + 0),
                              pixelHeight: 1408,
                              pixelWidth: 768,
                              sizes: `87px`,
                              ...gi(m),
                            },
                          },
                          Vj9qKoT_G: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K((s?.y || 0) + 0),
                              pixelHeight: 1408,
                              pixelWidth: 768,
                              sizes: `max((${s?.width || `100vw`} - 30px) / 4, 1px)`,
                              ...gi(m),
                            },
                          },
                        },
                        y,
                        C
                      ),
                    }),
                    g(Ae, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: K((s?.y || 0) + 0),
                        pixelHeight: 1280,
                        pixelWidth: 896,
                        sizes: `87px`,
                        ...gi(_),
                      },
                      className: `framer-10zvzro`,
                      'data-framer-name': `4`,
                      layoutDependency: k,
                      layoutId: `iutUSWsot`,
                      style: {
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                      },
                      ...di(
                        {
                          CMMavfnMt: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K((s?.y || 0) + 0),
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: `102px`,
                              ...gi(_),
                            },
                          },
                          gfRe1MGnZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K((s?.y || 0) + 0),
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: `max((${s?.width || `100vw`} - 30px) / 4, 1px)`,
                              ...gi(_),
                            },
                          },
                          jPs3_WrdW: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K((s?.y || 0) + 0),
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: `84px`,
                              ...gi(_),
                            },
                          },
                          Vj9qKoT_G: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K((s?.y || 0) + 0),
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: `max((${s?.width || `100vw`} - 30px) / 4, 1px)`,
                              ...gi(_),
                            },
                          },
                        },
                        y,
                        C
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-7ya09.framer-1e2a8as, .framer-7ya09 .framer-1e2a8as { display: block; }`,
          `.framer-7ya09.framer-d7g5a3 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-7ya09 .framer-5y8s7c { flex: none; gap: 10px; height: 123px; position: relative; width: 84px; z-index: 1; }`,
          `.framer-7ya09 .framer-h33s0b { flex: none; gap: 10px; height: 96px; position: relative; width: 102px; z-index: 1; }`,
          `.framer-7ya09 .framer-n6nikx { flex: none; gap: 10px; height: 123px; position: relative; width: 107px; z-index: 1; }`,
          `.framer-7ya09 .framer-10zvzro { flex: none; gap: 10px; height: 96px; position: relative; width: 87px; z-index: 1; }`,
          `.framer-7ya09.framer-v-15xxrby .framer-h33s0b, .framer-7ya09.framer-v-11zr2v2 .framer-h33s0b { height: 123px; width: 107px; }`,
          `.framer-7ya09.framer-v-15xxrby .framer-n6nikx, .framer-7ya09.framer-v-11zr2v2 .framer-n6nikx { height: 96px; width: 87px; }`,
          `.framer-7ya09.framer-v-15xxrby .framer-10zvzro { width: 102px; }`,
          `.framer-7ya09.framer-v-11zr2v2 .framer-5y8s7c { height: 96px; width: 102px; }`,
          `.framer-7ya09.framer-v-11zr2v2 .framer-10zvzro { height: 123px; width: 84px; }`,
          `.framer-7ya09.framer-v-3uhaw.framer-d7g5a3, .framer-7ya09.framer-v-1ts6k6s.framer-d7g5a3 { width: 410px; }`,
          `.framer-7ya09.framer-v-3uhaw .framer-5y8s7c, .framer-7ya09.framer-v-3uhaw .framer-n6nikx { flex: 1 0 0px; height: 96px; width: 1px; }`,
          `.framer-7ya09.framer-v-3uhaw .framer-h33s0b, .framer-7ya09.framer-v-3uhaw .framer-10zvzro { flex: 1 0 0px; width: 1px; }`,
          `.framer-7ya09.framer-v-1ts6k6s .framer-5y8s7c, .framer-7ya09.framer-v-1ts6k6s .framer-h33s0b, .framer-7ya09.framer-v-1ts6k6s .framer-n6nikx, .framer-7ya09.framer-v-1ts6k6s .framer-10zvzro { flex: 1 0 0px; height: 160px; width: 1px; }`,
        ],
        `framer-7ya09`
      )),
      (Ci = Si),
      (Si.displayName = `Awards Images List`),
      (Si.defaultProps = { height: 123, width: 410 }),
      I(Si, {
        variant: {
          options: [`e_BwIEW_8`, `CMMavfnMt`, `jPs3_WrdW`, `Vj9qKoT_G`, `gfRe1MGnZ`],
          optionTitles: [`1`, `2`, `3`, `Mobile`, `Tab`],
          title: `Variant`,
          type: H.Enum,
        },
        dBhRHdeNn: {
          __defaultAssetReference: `data:framer/asset-reference,gykz5t3Atm9UtfI5YcnYcpGmng.png?originalFilename=visualelectric-1743060562561.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,gykz5t3Atm9UtfI5YcnYcpGmng.png?originalFilename=visualelectric-1743060562561.png&preferredSize=auto`,
          },
          title: `Image 1`,
          type: H.ResponsiveImage,
        },
        DvlHLjdnV: {
          __defaultAssetReference: `data:framer/asset-reference,PxSsJrthME1XjSwGQXwUMx7rI.png?originalFilename=visualelectric-1743060359014.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,PxSsJrthME1XjSwGQXwUMx7rI.png?originalFilename=visualelectric-1743060359014.png&preferredSize=auto`,
          },
          title: `Image 2`,
          type: H.ResponsiveImage,
        },
        U82U1Mfx6: {
          __defaultAssetReference: `data:framer/asset-reference,41QaDdGvmS3kEQL4oJyWQuJz8.png?originalFilename=visualelectric-1740465328915.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,41QaDdGvmS3kEQL4oJyWQuJz8.png?originalFilename=visualelectric-1740465328915.png&preferredSize=auto`,
          },
          title: `Image 3`,
          type: H.ResponsiveImage,
        },
        NGjSoReVt: {
          __defaultAssetReference: `data:framer/asset-reference,dfa6kXeZNdp07AUexK86lC0Av1Q.png?originalFilename=visualelectric-1740465285187.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,dfa6kXeZNdp07AUexK86lC0Av1Q.png?originalFilename=visualelectric-1740465285187.png&preferredSize=auto`,
          },
          title: `Image 4`,
          type: H.ResponsiveImage,
        },
      }),
      L(Si, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function Ti(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi = e(() => {
    (S(),
      R(),
      M(),
      r(),
      ui(),
      at(),
      wi(),
      (Ei = z(Ci)),
      (Di = [`O97fLYJ9K`, `kMQn5ErT3`, `ifjXWUY_3`, `qFEdVbZ6h`, `LPwhvULmf`, `ssS_Ygkc0`]),
      (Oi = `framer-98GYR`),
      (ki = {
        ifjXWUY_3: `framer-v-k3z85h`,
        kMQn5ErT3: `framer-v-11avowu`,
        LPwhvULmf: `framer-v-ephvq4`,
        O97fLYJ9K: `framer-v-ubytdd`,
        qFEdVbZ6h: `framer-v-1yrsbmk`,
        ssS_Ygkc0: `framer-v-1bfdgu4`,
      }),
      (Ai = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ji = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Mi = ({ value: e, children: t }) => {
        let n = c(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return g(O.Provider, { value: i, children: t });
      }),
      (Ni = E.create(s)),
      (Pi = {
        'M Primary': `ifjXWUY_3`,
        'M Secondary': `qFEdVbZ6h`,
        'S Primary': `LPwhvULmf`,
        'S Secondary': `ssS_Ygkc0`,
        'XL Primary': `O97fLYJ9K`,
        'XL Secondary': `kMQn5ErT3`,
      }),
      (Fi = ({
        awardee: e,
        bodyText: t,
        height: n,
        id: r,
        image1: i,
        image2: a,
        image3: o,
        image4: s,
        rollNo: c,
        width: l,
        ...u
      }) => ({
        ...u,
        CDJ0zN5Ly: s ??
          u.CDJ0zN5Ly ?? {
            alt: ``,
            pixelHeight: 1280,
            pixelWidth: 896,
            src: `https://framerusercontent.com/images/dfa6kXeZNdp07AUexK86lC0Av1Q.png`,
            srcSet: `https://framerusercontent.com/images/dfa6kXeZNdp07AUexK86lC0Av1Q.png?scale-down-to=1024 716w,https://framerusercontent.com/images/dfa6kXeZNdp07AUexK86lC0Av1Q.png 896w`,
          },
        Cn5AbWh3t: i ??
          u.Cn5AbWh3t ?? {
            alt: ``,
            pixelHeight: 1280,
            pixelWidth: 896,
            src: `https://framerusercontent.com/images/gykz5t3Atm9UtfI5YcnYcpGmng.png`,
            srcSet: `https://framerusercontent.com/images/gykz5t3Atm9UtfI5YcnYcpGmng.png?scale-down-to=1024 716w,https://framerusercontent.com/images/gykz5t3Atm9UtfI5YcnYcpGmng.png 896w`,
          },
        CoxGWKoXF: o ??
          u.CoxGWKoXF ?? {
            alt: ``,
            pixelHeight: 1408,
            pixelWidth: 768,
            src: `https://framerusercontent.com/images/41QaDdGvmS3kEQL4oJyWQuJz8.png`,
            srcSet: `https://framerusercontent.com/images/41QaDdGvmS3kEQL4oJyWQuJz8.png?scale-down-to=1024 558w,https://framerusercontent.com/images/41QaDdGvmS3kEQL4oJyWQuJz8.png 768w`,
          },
        iHqB9hYVD: c ?? u.iHqB9hYVD ?? `27x`,
        Sd3FXOKpR:
          t ??
          u.Sd3FXOKpR ??
          `Recognized for bold interaction, structured visual rhythm, and design consistency across creative categories.`,
        variant: Pi[u.variant] ?? u.variant ?? `O97fLYJ9K`,
        wur4hMCKZ: e ?? u.wur4hMCKZ ?? `Awwwards`,
        WwECqnj4l: a ??
          u.WwECqnj4l ?? {
            alt: ``,
            pixelHeight: 1024,
            pixelWidth: 1024,
            src: `https://framerusercontent.com/images/PxSsJrthME1XjSwGQXwUMx7rI.png`,
            srcSet: `https://framerusercontent.com/images/PxSsJrthME1XjSwGQXwUMx7rI.png?scale-down-to=512 512w,https://framerusercontent.com/images/PxSsJrthME1XjSwGQXwUMx7rI.png 1024w`,
          },
      })),
      (Ii = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Li = ue(
        p(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = h(),
            { activeLocale: a, setLocale: o } = he(),
            c = De(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              iHqB9hYVD: p,
              wur4hMCKZ: m,
              Sd3FXOKpR: _,
              Cn5AbWh3t: v,
              WwECqnj4l: y,
              CoxGWKoXF: S,
              CDJ0zN5Ly: ee,
              tx5FlZg7v: te,
              ...C
            } = Fi(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: D,
              gestureHandlers: O,
              gestureVariant: k,
              isLoading: A,
              setGestureState: M,
              setVariant: P,
              variants: ne,
            } = Ie({
              cycleOrder: Di,
              defaultVariant: `O97fLYJ9K`,
              ref: r,
              variant: f,
              variantClassNames: ki,
            }),
            I = Ii(e, ne),
            L = N(Oi, li, it),
            R = () => ![`kMQn5ErT3`, `qFEdVbZ6h`, `ssS_Ygkc0`].includes(w),
            z = () => ![`ifjXWUY_3`, `qFEdVbZ6h`, `LPwhvULmf`, `ssS_Ygkc0`].includes(w);
          return g(j, {
            id: d ?? i,
            children: g(Ni, {
              animate: ne,
              initial: !1,
              children: g(Mi, {
                value: Ai,
                children: x(E.div, {
                  ...C,
                  ...O,
                  className: N(L, `framer-ubytdd`, u, T),
                  'data-framer-name': `XL Primary`,
                  layoutDependency: I,
                  layoutId: `O97fLYJ9K`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                    ...l,
                  },
                  ...Ti(
                    {
                      ifjXWUY_3: { 'data-framer-name': `M Primary` },
                      kMQn5ErT3: { 'data-framer-name': `XL Secondary` },
                      LPwhvULmf: { 'data-framer-name': `S Primary` },
                      qFEdVbZ6h: { 'data-framer-name': `M Secondary` },
                      ssS_Ygkc0: { 'data-framer-name': `S Secondary` },
                    },
                    w,
                    k
                  ),
                  children: [
                    R() &&
                      g(E.div, {
                        className: `framer-8eeueu`,
                        'data-framer-name': `Line`,
                        layoutDependency: I,
                        layoutId: `NiVst4HfS`,
                        style: {
                          backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`,
                        },
                      }),
                    x(E.div, {
                      className: `framer-xqy3fp`,
                      'data-framer-name': `Container`,
                      layoutDependency: I,
                      layoutId: `ekd_3ueq4`,
                      children: [
                        x(E.div, {
                          className: `framer-1i3fl25`,
                          'data-framer-name': `Text Content`,
                          layoutDependency: I,
                          layoutId: `oH1Fj5z5a`,
                          children: [
                            g(E.div, {
                              className: `framer-1es903h`,
                              'data-framer-name': `Roll No`,
                              layoutDependency: I,
                              layoutId: `lho9sKyff`,
                              children: g(F, {
                                __fromCanvasComponent: !0,
                                children: g(s, {
                                  children: g(E.p, {
                                    className: `framer-styles-preset-d3a9yv`,
                                    'data-styles-preset': `gVvtfPznu`,
                                    children: `27x`,
                                  }),
                                }),
                                className: `framer-5tvpp5`,
                                'data-framer-name': `Text`,
                                fonts: [`Inter`],
                                layoutDependency: I,
                                layoutId: `JaCmNvdLm`,
                                style: { '--framer-paragraph-spacing': `0px` },
                                text: p,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            g(E.div, {
                              className: `framer-th4lgr`,
                              'data-framer-name': `Awardee`,
                              layoutDependency: I,
                              layoutId: `tlO8ZgbEo`,
                              children: g(F, {
                                __fromCanvasComponent: !0,
                                children: g(s, {
                                  children: g(E.p, {
                                    className: `framer-styles-preset-d3a9yv`,
                                    'data-styles-preset': `gVvtfPznu`,
                                    children: `Awwwards`,
                                  }),
                                }),
                                className: `framer-su5krx`,
                                'data-framer-name': `Text`,
                                fonts: [`Inter`],
                                layoutDependency: I,
                                layoutId: `XlMe82xyP`,
                                style: { '--framer-paragraph-spacing': `0px` },
                                text: m,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...Ti(
                                  {
                                    ifjXWUY_3: {
                                      children: g(s, {
                                        children: g(E.p, {
                                          className: `framer-styles-preset-d3a9yv`,
                                          'data-styles-preset': `gVvtfPznu`,
                                          style: { '--framer-text-alignment': `right` },
                                          children: `Awwwards`,
                                        }),
                                      }),
                                    },
                                    LPwhvULmf: {
                                      children: g(s, {
                                        children: g(E.p, {
                                          className: `framer-styles-preset-d3a9yv`,
                                          'data-styles-preset': `gVvtfPznu`,
                                          style: { '--framer-text-alignment': `right` },
                                          children: `Awwwards`,
                                        }),
                                      }),
                                    },
                                    qFEdVbZ6h: {
                                      children: g(s, {
                                        children: g(E.p, {
                                          className: `framer-styles-preset-d3a9yv`,
                                          'data-styles-preset': `gVvtfPznu`,
                                          style: { '--framer-text-alignment': `right` },
                                          children: `Awwwards`,
                                        }),
                                      }),
                                    },
                                    ssS_Ygkc0: {
                                      children: g(s, {
                                        children: g(E.p, {
                                          className: `framer-styles-preset-d3a9yv`,
                                          'data-styles-preset': `gVvtfPznu`,
                                          style: { '--framer-text-alignment': `right` },
                                          children: `Awwwards`,
                                        }),
                                      }),
                                    },
                                  },
                                  w,
                                  k
                                ),
                              }),
                            }),
                            z() &&
                              g(E.div, {
                                className: `framer-13ihha8`,
                                'data-framer-name': `Body Text`,
                                layoutDependency: I,
                                layoutId: `J6wEVVvcp`,
                                children: g(F, {
                                  __fromCanvasComponent: !0,
                                  children: g(s, {
                                    children: g(E.p, {
                                      className: `framer-styles-preset-8vm16z`,
                                      'data-styles-preset': `uDh9bONtj`,
                                      style: {
                                        '--framer-text-color': `var(--extracted-r6o4lv, var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153)))`,
                                      },
                                      children: `We're all about taking a 360-degree approach, bringing all our services under the same umbrella to create conversion.`,
                                    }),
                                  }),
                                  className: `framer-p943t6`,
                                  'data-framer-name': `Text`,
                                  fonts: [`Inter`],
                                  layoutDependency: I,
                                  layoutId: `gPs5QoWwH`,
                                  style: {
                                    '--extracted-r6o4lv': `var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153))`,
                                    '--framer-paragraph-spacing': `0px`,
                                  },
                                  text: _,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                          ],
                        }),
                        g(W, {
                          height: 123,
                          y: (c?.y || 0) + 0 + (((c?.height || 205) - 0 - 205) / 2 + 1 + 40) + 0,
                          ...Ti(
                            {
                              ifjXWUY_3: {
                                width: c?.width || `100vw`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 293) - 0 - 341) / 2 + 1 + 40) +
                                  0 +
                                  136,
                              },
                              kMQn5ErT3: {
                                y:
                                  (c?.y || 0) +
                                  40 +
                                  (((c?.height || 204) - 40 - 164) / 2 + 0 + 0) +
                                  0,
                              },
                              LPwhvULmf: {
                                width: c?.width || `100vw`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 229) - 0 - 341) / 2 + 1 + 40) +
                                  0 +
                                  136,
                              },
                              qFEdVbZ6h: {
                                width: c?.width || `100vw`,
                                y:
                                  (c?.y || 0) +
                                  40 +
                                  (((c?.height || 292) - 40 - 300) / 2 + 0 + 0) +
                                  0 +
                                  136,
                              },
                              ssS_Ygkc0: {
                                width: c?.width || `100vw`,
                                y:
                                  (c?.y || 0) +
                                  40 +
                                  (((c?.height || 228) - 40 - 300) / 2 + 0 + 0) +
                                  0 +
                                  136,
                              },
                            },
                            w,
                            k
                          ),
                          children: g(V, {
                            className: `framer-1l8mj8b-container`,
                            layoutDependency: I,
                            layoutId: `hzdN1nRo8-container`,
                            nodeId: `hzdN1nRo8`,
                            rendersWithMotion: !0,
                            scopeId: `PYgFOyI__`,
                            children: g(Ci, {
                              dBhRHdeNn: ji(v),
                              DvlHLjdnV: ji(y),
                              height: `100%`,
                              id: `hzdN1nRo8`,
                              layoutId: `hzdN1nRo8`,
                              NGjSoReVt: ji(ee),
                              U82U1Mfx6: ji(S),
                              variant: `e_BwIEW_8`,
                              width: `100%`,
                              ...Ti(
                                {
                                  ifjXWUY_3: { style: { width: `100%` }, variant: `gfRe1MGnZ` },
                                  kMQn5ErT3: { variant: te },
                                  LPwhvULmf: { style: { width: `100%` }, variant: `Vj9qKoT_G` },
                                  qFEdVbZ6h: { style: { width: `100%` }, variant: `gfRe1MGnZ` },
                                  ssS_Ygkc0: { style: { width: `100%` }, variant: `Vj9qKoT_G` },
                                },
                                w,
                                k
                              ),
                            }),
                          }),
                        }),
                      ],
                    }),
                    g(E.div, {
                      className: `framer-8k6yam`,
                      'data-framer-name': `Line`,
                      layoutDependency: I,
                      layoutId: `hJK7PT99R`,
                      style: {
                        backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`,
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-98GYR.framer-19yhci9, .framer-98GYR .framer-19yhci9 { display: block; }`,
          `.framer-98GYR.framer-ubytdd { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1392px; }`,
          `.framer-98GYR .framer-8eeueu, .framer-98GYR .framer-8k6yam { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }`,
          `.framer-98GYR .framer-xqy3fp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-98GYR .framer-1i3fl25 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-98GYR .framer-1es903h, .framer-98GYR .framer-th4lgr { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 124px; height: min-content; justify-content: center; max-width: 150px; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-98GYR .framer-5tvpp5, .framer-98GYR .framer-su5krx, .framer-98GYR .framer-p943t6 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-98GYR .framer-13ihha8 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 270px; overflow: hidden; padding: 3px 0px 0px 0px; position: relative; width: 1px; }`,
          `.framer-98GYR .framer-1l8mj8b-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-98GYR.framer-v-11avowu.framer-ubytdd { padding: 40px 0px 0px 0px; }`,
          `.framer-98GYR.framer-v-k3z85h.framer-ubytdd, .framer-98GYR.framer-v-ephvq4.framer-ubytdd { width: 390px; }`,
          `.framer-98GYR.framer-v-k3z85h .framer-xqy3fp, .framer-98GYR.framer-v-1yrsbmk .framer-xqy3fp, .framer-98GYR.framer-v-ephvq4 .framer-xqy3fp, .framer-98GYR.framer-v-1bfdgu4 .framer-xqy3fp { flex-direction: column; gap: 30px; }`,
          `.framer-98GYR.framer-v-k3z85h .framer-1i3fl25, .framer-98GYR.framer-v-1yrsbmk .framer-1i3fl25, .framer-98GYR.framer-v-ephvq4 .framer-1i3fl25, .framer-98GYR.framer-v-1bfdgu4 .framer-1i3fl25 { flex: none; width: 100%; }`,
          `.framer-98GYR.framer-v-k3z85h .framer-1l8mj8b-container, .framer-98GYR.framer-v-1yrsbmk .framer-1l8mj8b-container, .framer-98GYR.framer-v-ephvq4 .framer-1l8mj8b-container, .framer-98GYR.framer-v-1bfdgu4 .framer-1l8mj8b-container { width: 100%; }`,
          `.framer-98GYR.framer-v-1yrsbmk.framer-ubytdd, .framer-98GYR.framer-v-1bfdgu4.framer-ubytdd { padding: 40px 0px 0px 0px; width: 390px; }`,
          ...ci,
          ...vt,
        ],
        `framer-98GYR`
      )),
      (Ri = Li),
      (Li.displayName = `Awards Card`),
      (Li.defaultProps = { height: 205, width: 1392 }),
      I(Li, {
        variant: {
          options: [`O97fLYJ9K`, `kMQn5ErT3`, `ifjXWUY_3`, `qFEdVbZ6h`, `LPwhvULmf`, `ssS_Ygkc0`],
          optionTitles: [
            `XL Primary`,
            `XL Secondary`,
            `M Primary`,
            `M Secondary`,
            `S Primary`,
            `S Secondary`,
          ],
          title: `Variant`,
          type: H.Enum,
        },
        iHqB9hYVD: { defaultValue: `27x`, displayTextArea: !1, title: `Roll No`, type: H.String },
        wur4hMCKZ: {
          defaultValue: `Awwwards`,
          displayTextArea: !1,
          title: `Awardee`,
          type: H.String,
        },
        Sd3FXOKpR: {
          defaultValue: `Recognized for bold interaction, structured visual rhythm, and design consistency across creative categories.`,
          displayTextArea: !0,
          title: `Body Text`,
          type: H.String,
        },
        Cn5AbWh3t: {
          __defaultAssetReference: `data:framer/asset-reference,gykz5t3Atm9UtfI5YcnYcpGmng.png?originalFilename=visualelectric-1743060562561.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,gykz5t3Atm9UtfI5YcnYcpGmng.png?originalFilename=visualelectric-1743060562561.png&preferredSize=auto`,
          },
          title: `Image 1`,
          type: H.ResponsiveImage,
        },
        WwECqnj4l: {
          __defaultAssetReference: `data:framer/asset-reference,PxSsJrthME1XjSwGQXwUMx7rI.png?originalFilename=visualelectric-1743060359014.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,PxSsJrthME1XjSwGQXwUMx7rI.png?originalFilename=visualelectric-1743060359014.png&preferredSize=auto`,
          },
          title: `Image 2`,
          type: H.ResponsiveImage,
        },
        CoxGWKoXF: {
          __defaultAssetReference: `data:framer/asset-reference,41QaDdGvmS3kEQL4oJyWQuJz8.png?originalFilename=visualelectric-1740465328915.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,41QaDdGvmS3kEQL4oJyWQuJz8.png?originalFilename=visualelectric-1740465328915.png&preferredSize=auto`,
          },
          title: `Image 3`,
          type: H.ResponsiveImage,
        },
        CDJ0zN5Ly: {
          __defaultAssetReference: `data:framer/asset-reference,dfa6kXeZNdp07AUexK86lC0Av1Q.png?originalFilename=visualelectric-1740465285187.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,dfa6kXeZNdp07AUexK86lC0Av1Q.png?originalFilename=visualelectric-1740465285187.png&preferredSize=auto`,
          },
          title: `Image 4`,
          type: H.ResponsiveImage,
        },
      }),
      L(
        Li,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Ei,
          ...B(si),
          ...B(xt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Bi(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea = e(() => {
    (S(),
      R(),
      M(),
      r(),
      zi(),
      (Vi = z(Ri)),
      (Hi = [`cGfMLjpbo`, `P6hgzGRDq`, `tCRSSoKh7`]),
      (Ui = `framer-EJvCx`),
      (Wi = {
        cGfMLjpbo: `framer-v-3239ys`,
        P6hgzGRDq: `framer-v-1320no6`,
        tCRSSoKh7: `framer-v-15yjqej`,
      }),
      (Gi = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ki = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (qi = ({ value: e, children: t }) => {
        let n = c(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return g(O.Provider, { value: i, children: t });
      }),
      (Ji = E.create(s)),
      (Yi = { M: `P6hgzGRDq`, S: `tCRSSoKh7`, XL: `cGfMLjpbo` }),
      (Xi = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Yi[r.variant] ?? r.variant ?? `cGfMLjpbo`,
      })),
      (Zi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Qi = ue(
        p(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = h(),
            { activeLocale: a, setLocale: o } = he(),
            s = De(),
            { style: c, className: l, layoutId: u, variant: d, ...f } = Xi(e),
            {
              baseVariant: p,
              classNames: m,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: S,
              setGestureState: ee,
              setVariant: te,
              variants: C,
            } = Ie({
              cycleOrder: Hi,
              defaultVariant: `cGfMLjpbo`,
              ref: r,
              variant: d,
              variantClassNames: Wi,
            }),
            w = Zi(e, C),
            T = N(Ui);
          return g(j, {
            id: u ?? i,
            children: g(Ji, {
              animate: C,
              initial: !1,
              children: g(qi, {
                value: Gi,
                children: x(E.div, {
                  ...f,
                  ...v,
                  className: N(T, `framer-3239ys`, l, m),
                  'data-framer-name': `XL`,
                  layoutDependency: w,
                  layoutId: `cGfMLjpbo`,
                  ref: r,
                  style: { ...c },
                  ...Bi(
                    {
                      P6hgzGRDq: { 'data-framer-name': `M` },
                      tCRSSoKh7: { 'data-framer-name': `S` },
                    },
                    p,
                    y
                  ),
                  children: [
                    g(W, {
                      height: 205,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 818) - 0 - 820) / 2 + 0 + 0),
                      ...Bi(
                        {
                          P6hgzGRDq: {
                            y: (s?.y || 0) + 0 + (((s?.height || 1170) - 0 - 820) / 2 + 0 + 0),
                          },
                          tCRSSoKh7: {
                            width: `calc(${s?.width || `100vw`} - 40px)`,
                            y: (s?.y || 0) + 0 + (((s?.height || 914) - 0 - 820) / 2 + 0 + 0),
                          },
                        },
                        p,
                        y
                      ),
                      children: g(V, {
                        className: `framer-95swuw-container`,
                        layoutDependency: w,
                        layoutId: `vEXDAsV9F-container`,
                        nodeId: `vEXDAsV9F`,
                        rendersWithMotion: !0,
                        scopeId: `MIbiQECTD`,
                        children: g(Ri, {
                          CDJ0zN5Ly: Ki(
                            {
                              pixelHeight: 1520,
                              pixelWidth: 784,
                              src: `https://framerusercontent.com/images/vh4K6lIuizQChQco1ldOD2GyFew.png?width=784&height=1520`,
                              srcSet: `https://framerusercontent.com/images/vh4K6lIuizQChQco1ldOD2GyFew.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/vh4K6lIuizQChQco1ldOD2GyFew.png?width=784&height=1520 784w`,
                            },
                            `Afro`
                          ),
                          Cn5AbWh3t: Ki(
                            {
                              pixelHeight: 1520,
                              pixelWidth: 784,
                              src: `https://framerusercontent.com/images/JsWzvJ7arIK8bTRExshNOjA0.png?width=784&height=1520`,
                              srcSet: `https://framerusercontent.com/images/JsWzvJ7arIK8bTRExshNOjA0.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/JsWzvJ7arIK8bTRExshNOjA0.png?width=784&height=1520 784w`,
                            },
                            `Black Man`
                          ),
                          CoxGWKoXF: Ki(
                            {
                              pixelHeight: 1520,
                              pixelWidth: 784,
                              src: `https://framerusercontent.com/images/YPm921puDi9RksbECP0BNHnD8.png?width=784&height=1520`,
                              srcSet: `https://framerusercontent.com/images/YPm921puDi9RksbECP0BNHnD8.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/YPm921puDi9RksbECP0BNHnD8.png?width=784&height=1520 784w`,
                            },
                            `Hallway`
                          ),
                          height: `100%`,
                          id: `vEXDAsV9F`,
                          iHqB9hYVD: `27x`,
                          layoutId: `vEXDAsV9F`,
                          Sd3FXOKpR: `Recognized for bold interaction, structured visual rhythm, and design consistency across creative categories.`,
                          style: { width: `100%` },
                          variant: `O97fLYJ9K`,
                          width: `100%`,
                          wur4hMCKZ: `Awwwards`,
                          WwECqnj4l: Ki(
                            {
                              pixelHeight: 1520,
                              pixelWidth: 784,
                              src: `https://framerusercontent.com/images/TSvdWY9nZgJIwvfEjbER8khWks.png?width=784&height=1520`,
                              srcSet: `https://framerusercontent.com/images/TSvdWY9nZgJIwvfEjbER8khWks.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/TSvdWY9nZgJIwvfEjbER8khWks.png?width=784&height=1520 784w`,
                            },
                            `Woman Glasses`
                          ),
                          ...Bi(
                            {
                              P6hgzGRDq: { variant: `ifjXWUY_3` },
                              tCRSSoKh7: { variant: `LPwhvULmf` },
                            },
                            p,
                            y
                          ),
                        }),
                      }),
                    }),
                    g(W, {
                      height: 205,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 818) - 0 - 820) / 2 + 205 + 0),
                      ...Bi(
                        {
                          P6hgzGRDq: {
                            y: (s?.y || 0) + 0 + (((s?.height || 1170) - 0 - 820) / 2 + 205 + 0),
                          },
                          tCRSSoKh7: {
                            width: `calc(${s?.width || `100vw`} - 40px)`,
                            y: (s?.y || 0) + 0 + (((s?.height || 914) - 0 - 820) / 2 + 205 + 0),
                          },
                        },
                        p,
                        y
                      ),
                      children: g(V, {
                        className: `framer-24ohso-container`,
                        layoutDependency: w,
                        layoutId: `EVeJUPqmQ-container`,
                        nodeId: `EVeJUPqmQ`,
                        rendersWithMotion: !0,
                        scopeId: `MIbiQECTD`,
                        children: g(Ri, {
                          CDJ0zN5Ly: Ki(
                            {
                              pixelHeight: 1520,
                              pixelWidth: 784,
                              src: `https://framerusercontent.com/images/LAfSSJDuuPWvnBM2HTqTmOxjiL0.png?width=784&height=1520`,
                              srcSet: `https://framerusercontent.com/images/LAfSSJDuuPWvnBM2HTqTmOxjiL0.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/LAfSSJDuuPWvnBM2HTqTmOxjiL0.png?width=784&height=1520 784w`,
                            },
                            `Woman Zoom Shot`
                          ),
                          Cn5AbWh3t: Ki(
                            {
                              pixelHeight: 1469,
                              pixelWidth: 759,
                              src: `https://framerusercontent.com/images/cq3IhFdEh5tTpnInAIjTib4P4.png?width=759&height=1469`,
                              srcSet: `https://framerusercontent.com/images/cq3IhFdEh5tTpnInAIjTib4P4.png?scale-down-to=1024&width=759&height=1469 529w,https://framerusercontent.com/images/cq3IhFdEh5tTpnInAIjTib4P4.png?width=759&height=1469 759w`,
                            },
                            `Woman Side Pose`
                          ),
                          CoxGWKoXF: Ki(
                            {
                              pixelHeight: 1520,
                              pixelWidth: 784,
                              src: `https://framerusercontent.com/images/FwAnpCGLc3Ns1OCb3nAMr4lLA.png?width=784&height=1520`,
                              srcSet: `https://framerusercontent.com/images/FwAnpCGLc3Ns1OCb3nAMr4lLA.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/FwAnpCGLc3Ns1OCb3nAMr4lLA.png?width=784&height=1520 784w`,
                            },
                            `Polish Woman`
                          ),
                          height: `100%`,
                          id: `EVeJUPqmQ`,
                          iHqB9hYVD: `14x`,
                          layoutId: `EVeJUPqmQ`,
                          Sd3FXOKpR: `Awarded for outstanding execution, seamless animation, and originality in modern digital experiences.

`,
                          style: { width: `100%` },
                          variant: `kMQn5ErT3`,
                          width: `100%`,
                          wur4hMCKZ: `FWA`,
                          WwECqnj4l: Ki(
                            {
                              pixelHeight: 1395,
                              pixelWidth: 720,
                              src: `https://framerusercontent.com/images/RO9YLCdB14aUt8fIcAPcE5WNcJc.png?width=720&height=1395`,
                              srcSet: `https://framerusercontent.com/images/RO9YLCdB14aUt8fIcAPcE5WNcJc.png?scale-down-to=1024&width=720&height=1395 528w,https://framerusercontent.com/images/RO9YLCdB14aUt8fIcAPcE5WNcJc.png?width=720&height=1395 720w`,
                            },
                            ``
                          ),
                          ...Bi(
                            {
                              P6hgzGRDq: { variant: `qFEdVbZ6h` },
                              tCRSSoKh7: { variant: `ssS_Ygkc0` },
                            },
                            p,
                            y
                          ),
                        }),
                      }),
                    }),
                    g(W, {
                      height: 205,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 818) - 0 - 820) / 2 + 410 + 0),
                      ...Bi(
                        {
                          P6hgzGRDq: {
                            y: (s?.y || 0) + 0 + (((s?.height || 1170) - 0 - 820) / 2 + 410 + 0),
                          },
                          tCRSSoKh7: {
                            width: `calc(${s?.width || `100vw`} - 40px)`,
                            y: (s?.y || 0) + 0 + (((s?.height || 914) - 0 - 820) / 2 + 410 + 0),
                          },
                        },
                        p,
                        y
                      ),
                      children: g(V, {
                        className: `framer-h62iav-container`,
                        layoutDependency: w,
                        layoutId: `lgYmqHQbN-container`,
                        nodeId: `lgYmqHQbN`,
                        rendersWithMotion: !0,
                        scopeId: `MIbiQECTD`,
                        children: g(Ri, {
                          CDJ0zN5Ly: Ki(
                            {
                              pixelHeight: 1520,
                              pixelWidth: 784,
                              src: `https://framerusercontent.com/images/9DKbSknTw5dawzRAOl83Yg7ZCM.png?width=784&height=1520`,
                              srcSet: `https://framerusercontent.com/images/9DKbSknTw5dawzRAOl83Yg7ZCM.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/9DKbSknTw5dawzRAOl83Yg7ZCM.png?width=784&height=1520 784w`,
                            },
                            `Woman In The Smoke`
                          ),
                          Cn5AbWh3t: Ki(
                            {
                              pixelHeight: 1520,
                              pixelWidth: 784,
                              src: `https://framerusercontent.com/images/Z8Glm5rcqSqPT9jjmXGP2RCvqk.png?width=784&height=1520`,
                              srcSet: `https://framerusercontent.com/images/Z8Glm5rcqSqPT9jjmXGP2RCvqk.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/Z8Glm5rcqSqPT9jjmXGP2RCvqk.png?width=784&height=1520 784w`,
                            },
                            `Woman Flowers`
                          ),
                          CoxGWKoXF: Ki(
                            {
                              pixelHeight: 1520,
                              pixelWidth: 784,
                              src: `https://framerusercontent.com/images/lhRubPEYF90QwyYiHDBLFAiokAM.png?width=784&height=1520`,
                              srcSet: `https://framerusercontent.com/images/lhRubPEYF90QwyYiHDBLFAiokAM.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/lhRubPEYF90QwyYiHDBLFAiokAM.png?width=784&height=1520 784w`,
                            },
                            `Woman Deep Shot`
                          ),
                          height: `100%`,
                          id: `lgYmqHQbN`,
                          iHqB9hYVD: `09x`,
                          layoutId: `lgYmqHQbN`,
                          Sd3FXOKpR: `Celebrated for front-end excellence, design innovation, and development precision across multiple showcases.`,
                          style: { width: `100%` },
                          variant: `kMQn5ErT3`,
                          width: `100%`,
                          wur4hMCKZ: `CSSDA`,
                          WwECqnj4l: Ki(
                            {
                              pixelHeight: 1520,
                              pixelWidth: 784,
                              src: `https://framerusercontent.com/images/1S2bnVvrANWw4tDAbRsO6KLNzxo.png?width=784&height=1520`,
                              srcSet: `https://framerusercontent.com/images/1S2bnVvrANWw4tDAbRsO6KLNzxo.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/1S2bnVvrANWw4tDAbRsO6KLNzxo.png?width=784&height=1520 784w`,
                            },
                            `Basketballer`
                          ),
                          ...Bi(
                            {
                              P6hgzGRDq: { variant: `qFEdVbZ6h` },
                              tCRSSoKh7: { variant: `ssS_Ygkc0` },
                            },
                            p,
                            y
                          ),
                        }),
                      }),
                    }),
                    g(W, {
                      height: 205,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 818) - 0 - 820) / 2 + 615 + 0),
                      ...Bi(
                        {
                          P6hgzGRDq: {
                            y: (s?.y || 0) + 0 + (((s?.height || 1170) - 0 - 820) / 2 + 615 + 0),
                          },
                          tCRSSoKh7: {
                            width: `calc(${s?.width || `100vw`} - 40px)`,
                            y: (s?.y || 0) + 0 + (((s?.height || 914) - 0 - 820) / 2 + 615 + 0),
                          },
                        },
                        p,
                        y
                      ),
                      children: g(V, {
                        className: `framer-6bchpi-container`,
                        layoutDependency: w,
                        layoutId: `wtabExkwK-container`,
                        nodeId: `wtabExkwK`,
                        rendersWithMotion: !0,
                        scopeId: `MIbiQECTD`,
                        children: g(Ri, {
                          CDJ0zN5Ly: Ki(
                            {
                              pixelHeight: 1440,
                              pixelWidth: 743,
                              src: `https://framerusercontent.com/images/lvgNmFPWnehNuXShMvSWlMSMk.png?width=743&height=1440`,
                              srcSet: `https://framerusercontent.com/images/lvgNmFPWnehNuXShMvSWlMSMk.png?scale-down-to=1024&width=743&height=1440 528w,https://framerusercontent.com/images/lvgNmFPWnehNuXShMvSWlMSMk.png?width=743&height=1440 743w`,
                            },
                            `Man Casual`
                          ),
                          Cn5AbWh3t: Ki(
                            {
                              pixelHeight: 1520,
                              pixelWidth: 784,
                              src: `https://framerusercontent.com/images/RFKaOeQqiFC1PVMqQRI4OiwHr8w.png?width=784&height=1520`,
                              srcSet: `https://framerusercontent.com/images/RFKaOeQqiFC1PVMqQRI4OiwHr8w.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/RFKaOeQqiFC1PVMqQRI4OiwHr8w.png?width=784&height=1520 784w`,
                            },
                            `Blue Hall`
                          ),
                          CoxGWKoXF: Ki(
                            {
                              pixelHeight: 1440,
                              pixelWidth: 743,
                              src: `https://framerusercontent.com/images/kvvsm3auwHzxy3r0stE9gDQiuCI.png?width=743&height=1440`,
                              srcSet: `https://framerusercontent.com/images/kvvsm3auwHzxy3r0stE9gDQiuCI.png?scale-down-to=1024&width=743&height=1440 528w,https://framerusercontent.com/images/kvvsm3auwHzxy3r0stE9gDQiuCI.png?width=743&height=1440 743w`,
                            },
                            `African Man`
                          ),
                          height: `100%`,
                          id: `wtabExkwK`,
                          iHqB9hYVD: `08x`,
                          layoutId: `wtabExkwK`,
                          Sd3FXOKpR: `Highlighted for strong typographic systems, visual hierarchy, and thoughtful layout built with intent.`,
                          style: { width: `100%` },
                          variant: `O97fLYJ9K`,
                          width: `100%`,
                          wur4hMCKZ: `Dribbble`,
                          WwECqnj4l: Ki(
                            {
                              pixelHeight: 1440,
                              pixelWidth: 743,
                              src: `https://framerusercontent.com/images/OYJq8mfGy5WLcI9VPVo321I14.png?width=743&height=1440`,
                              srcSet: `https://framerusercontent.com/images/OYJq8mfGy5WLcI9VPVo321I14.png?scale-down-to=1024&width=743&height=1440 528w,https://framerusercontent.com/images/OYJq8mfGy5WLcI9VPVo321I14.png?width=743&height=1440 743w`,
                            },
                            `Car`
                          ),
                          ...Bi(
                            {
                              P6hgzGRDq: { variant: `qFEdVbZ6h` },
                              tCRSSoKh7: { variant: `ssS_Ygkc0` },
                            },
                            p,
                            y
                          ),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-EJvCx.framer-1dkxevi, .framer-EJvCx .framer-1dkxevi { display: block; }`,
          `.framer-EJvCx.framer-3239ys { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 1440px; }`,
          `.framer-EJvCx .framer-95swuw-container, .framer-EJvCx .framer-24ohso-container, .framer-EJvCx .framer-h62iav-container, .framer-EJvCx .framer-6bchpi-container { flex: none; height: auto; position: relative; width: 100%; z-index: 6; }`,
          `.framer-EJvCx.framer-v-1320no6.framer-3239ys { width: 810px; }`,
          `.framer-EJvCx.framer-v-15yjqej.framer-3239ys { padding: 0px 20px 0px 20px; width: 390px; }`,
        ],
        `framer-EJvCx`
      )),
      ($i = Qi),
      (Qi.displayName = `Awards List`),
      (Qi.defaultProps = { height: 818, width: 1440 }),
      I(Qi, {
        variant: {
          options: [`cGfMLjpbo`, `P6hgzGRDq`, `tCRSSoKh7`],
          optionTitles: [`XL`, `M`, `S`],
          title: `Variant`,
          type: H.Enum,
        },
      }),
      L(Qi, [{ explicitInter: !0, fonts: [] }, ...Vi], { supportsExplicitInterCodegen: !0 }));
  });
function ta(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var na,
  ra,
  ia,
  aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  fa,
  pa,
  ma,
  ha = e(() => {
    (S(),
      R(),
      M(),
      r(),
      Re(),
      st(),
      (na = ae(F)),
      (ra = z(St)),
      (ia = [`XkAD5dcWw`, `bkXk11oSP`, `mURiTOP2G`]),
      (aa = `framer-LNRZH`),
      (oa = {
        bkXk11oSP: `framer-v-15taum5`,
        mURiTOP2G: `framer-v-qfb9jz`,
        XkAD5dcWw: `framer-v-1dh1rk8`,
      }),
      (sa = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ca = ({ value: e, children: t }) => {
        let n = c(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return g(O.Provider, { value: i, children: t });
      }),
      (la = E.create(s)),
      (ua = { L: `XkAD5dcWw`, M: `bkXk11oSP`, S: `mURiTOP2G` }),
      (da = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        bO6IhWfEy: n ?? i.bO6IhWfEy ?? `Featured Works© `,
        variant: ua[i.variant] ?? i.variant ?? `XkAD5dcWw`,
      })),
      (fa = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (pa = ue(
        p(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = h(),
            { activeLocale: a, setLocale: o } = he();
          De();
          let { style: c, className: l, layoutId: u, variant: d, bO6IhWfEy: f, ...p } = da(e),
            {
              baseVariant: m,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: x,
              isLoading: S,
              setGestureState: ee,
              setVariant: te,
              variants: C,
            } = Ie({
              cycleOrder: ia,
              defaultVariant: `XkAD5dcWw`,
              ref: r,
              variant: d,
              variantClassNames: oa,
            }),
            w = fa(e, C),
            T = N(aa, dt);
          return g(j, {
            id: u ?? i,
            children: g(la, {
              animate: C,
              initial: !1,
              children: g(ca, {
                value: sa,
                children: g(E.div, {
                  ...p,
                  ...y,
                  className: N(T, `framer-1dh1rk8`, l, _),
                  'data-framer-name': `L`,
                  layoutDependency: w,
                  layoutId: `XkAD5dcWw`,
                  ref: r,
                  style: { ...c },
                  ...ta(
                    {
                      bkXk11oSP: { 'data-framer-name': `M` },
                      mURiTOP2G: { 'data-framer-name': `S` },
                    },
                    m,
                    x
                  ),
                  children: g(W, {
                    children: g(V, {
                      className: `framer-l8l2zr-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: w,
                      layoutId: `uJfYPoVCB-container`,
                      nodeId: `uJfYPoVCB`,
                      rendersWithMotion: !0,
                      scopeId: `PGM1Bd_Lr`,
                      children: g(St, {
                        alignment: `center`,
                        direction: `left`,
                        fadeOptions: {
                          fadeAlpha: 0,
                          fadeContent: !1,
                          fadeInset: 0,
                          fadeWidth: 25,
                          overflow: !1,
                        },
                        gap: 0,
                        height: `100%`,
                        hoverFactor: 1,
                        id: `uJfYPoVCB`,
                        layoutId: `uJfYPoVCB`,
                        padding: 10,
                        paddingBottom: 10,
                        paddingLeft: 10,
                        paddingPerSide: !1,
                        paddingRight: 10,
                        paddingTop: 10,
                        sizingOptions: { heightType: !0, widthType: !0 },
                        slots: [
                          g(E.div, {
                            className: `framer-57qxj8`,
                            'data-framer-name': `Header Text`,
                            layoutDependency: w,
                            layoutId: `etLPDDpAm`,
                            children: g(na, {
                              __framer__spring: {
                                damping: 60,
                                delay: 0,
                                duration: 0.3,
                                ease: [0.44, 0, 0.56, 1],
                                mass: 1,
                                stiffness: 350,
                                type: `spring`,
                              },
                              __framer__styleTransformEffectEnabled: !0,
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 0,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 140,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                              ],
                              __framer__transformTrigger: `onInView`,
                              __fromCanvasComponent: !0,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              children: g(s, {
                                children: g(E.h1, {
                                  className: `framer-styles-preset-je0rn0`,
                                  'data-styles-preset': `YMtdKmiBu`,
                                  style: { '--framer-text-alignment': `left` },
                                  children: `Featured Works© `,
                                }),
                              }),
                              className: `framer-18vk1s1`,
                              'data-framer-name': `Text`,
                              fonts: [`Inter`],
                              layoutDependency: w,
                              layoutId: `FI5yEMo4v`,
                              style: { '--framer-paragraph-spacing': `0px` },
                              text: f,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                        speed: 100,
                        style: { height: `100%`, width: `100%` },
                        width: `100%`,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-LNRZH.framer-14lb28, .framer-LNRZH .framer-14lb28 { display: block; }`,
          `.framer-LNRZH.framer-1dh1rk8 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-LNRZH .framer-l8l2zr-container { flex: none; height: 200px; position: relative; width: 100%; }`,
          `.framer-LNRZH .framer-57qxj8 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 168px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-LNRZH .framer-18vk1s1 { flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: auto; }`,
          `.framer-LNRZH.framer-v-15taum5 .framer-l8l2zr-container { height: 120px; }`,
          `.framer-LNRZH.framer-v-qfb9jz .framer-l8l2zr-container { height: 60px; }`,
          ..._t,
        ],
        `framer-LNRZH`
      )),
      (ma = pa),
      (pa.displayName = `Ticker Header`),
      (pa.defaultProps = { height: 200, width: 1200 }),
      I(pa, {
        variant: {
          options: [`XkAD5dcWw`, `bkXk11oSP`, `mURiTOP2G`],
          optionTitles: [`L`, `M`, `S`],
          title: `Variant`,
          type: H.Enum,
        },
        bO6IhWfEy: {
          defaultValue: `Featured Works© `,
          displayTextArea: !1,
          title: `Title`,
          type: H.String,
        },
      }),
      L(
        pa,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...ra,
          ...B(ot),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  ga,
  _a,
  va,
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da = e(() => {
    (S(),
      R(),
      M(),
      r(),
      Ve(),
      lr(),
      nt(),
      (ga = z(Qe)),
      (_a = `framer-Ug6s5`),
      (va = { VhoKG8QEP: `framer-v-vev6gr` }),
      (ya = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ba = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (xa = ({ value: e, children: t }) => {
        let n = c(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return g(O.Provider, { value: i, children: t });
      }),
      (Sa = E.create(s)),
      (Ca = ({
        bodyText: e,
        height: t,
        id: n,
        logo: r,
        name1: i,
        profile: a,
        role: o,
        width: s,
        ...c
      }) => ({
        ...c,
        CE9vq930d: r ??
          c.CE9vq930d ?? {
            pixelHeight: 302,
            pixelWidth: 1052,
            src: `https://framerusercontent.com/images/2eK4hXQmW3JlRPZpRmCnq7RnRo.png?width=1052&height=302`,
            srcSet: `https://framerusercontent.com/images/2eK4hXQmW3JlRPZpRmCnq7RnRo.png?scale-down-to=512&width=1052&height=302 512w,https://framerusercontent.com/images/2eK4hXQmW3JlRPZpRmCnq7RnRo.png?scale-down-to=1024&width=1052&height=302 1024w,https://framerusercontent.com/images/2eK4hXQmW3JlRPZpRmCnq7RnRo.png?width=1052&height=302 1052w`,
          },
        GDX03WB2s: o ?? c.GDX03WB2s ?? `Senior Designer`,
        PXhdA1o5u:
          e ??
          c.PXhdA1o5u ??
          `"Akihiko elevated every layer of our brand’s online presence. From motion details to structural layout, every piece felt crafted and intentional. The site not only looked beautiful but performed well too — and the entire collaboration process was smooth."`,
        SfDOWebi7: i ?? c.SfDOWebi7 ?? `Karizmia`,
        TQKawNzuI: a ??
          c.TQKawNzuI ?? {
            pixelHeight: 2048,
            pixelWidth: 1448,
            src: `https://framerusercontent.com/images/cK7AGbI0VPrnRTVlZOEJ3NkPkM.jpg?width=1448&height=2048`,
            srcSet: `https://framerusercontent.com/images/cK7AGbI0VPrnRTVlZOEJ3NkPkM.jpg?scale-down-to=1024&width=1448&height=2048 724w,https://framerusercontent.com/images/cK7AGbI0VPrnRTVlZOEJ3NkPkM.jpg?width=1448&height=2048 1448w`,
          },
      })),
      (wa = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ta = ue(
        p(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = h(),
            { activeLocale: a, setLocale: o } = he();
          De();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              PXhdA1o5u: f,
              TQKawNzuI: p,
              SfDOWebi7: m,
              GDX03WB2s: _,
              CE9vq930d: v,
              ...y
            } = Ca(e),
            {
              baseVariant: S,
              classNames: ee,
              clearLoadingGesture: te,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: D,
              setVariant: O,
              variants: k,
            } = Ie({ defaultVariant: `VhoKG8QEP`, ref: r, variant: d, variantClassNames: va }),
            A = wa(e, k),
            M = N(_a, cr, ht);
          return g(j, {
            id: u ?? i,
            children: g(Sa, {
              animate: k,
              initial: !1,
              children: g(xa, {
                value: ya,
                children: x(E.div, {
                  ...y,
                  ...C,
                  className: N(M, `framer-vev6gr`, l, ee),
                  'data-border': !0,
                  'data-framer-name': `Primary`,
                  layoutDependency: A,
                  layoutId: `VhoKG8QEP`,
                  ref: r,
                  style: {
                    '--border-bottom-width': `1px`,
                    '--border-color': `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`,
                    '--border-left-width': `1px`,
                    '--border-right-width': `1px`,
                    '--border-style': `solid`,
                    '--border-top-width': `1px`,
                    backgroundColor: `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    ...c,
                  },
                  children: [
                    g(E.div, {
                      className: `framer-1nn2wo3`,
                      'data-framer-name': `Top`,
                      layoutDependency: A,
                      layoutId: `Hmy3vptUg`,
                      children: g(E.div, {
                        className: `framer-1j7mtj2`,
                        'data-framer-name': `Body Text`,
                        layoutDependency: A,
                        layoutId: `NpQe3AJO6`,
                        children: g(F, {
                          __fromCanvasComponent: !0,
                          children: g(s, {
                            children: g(E.p, {
                              className: `framer-styles-preset-14w8e6o`,
                              'data-styles-preset': `FsS03h6Vk`,
                              children: `“We're all about taking a 360-degree approach, bringing all our services under the same umbrella to create communication.We're all about taking a 360-degree approach, bringing all our services under the same umbrella to create communication.”`,
                            }),
                          }),
                          className: `framer-1kkewbg`,
                          'data-framer-name': `Text`,
                          fonts: [`Inter`],
                          layoutDependency: A,
                          layoutId: `bgTwk2u95`,
                          style: { '--framer-paragraph-spacing': `0px` },
                          text: f,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                    x(E.div, {
                      className: `framer-1npv4am`,
                      'data-framer-name': `Bottom`,
                      layoutDependency: A,
                      layoutId: `eO3xasijZ`,
                      children: [
                        g(E.div, {
                          className: `framer-1phmwxj`,
                          'data-framer-name': `Line`,
                          layoutDependency: A,
                          layoutId: `tVUzTO0AT`,
                          style: {
                            backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`,
                          },
                        }),
                        x(E.div, {
                          className: `framer-kyvaz1`,
                          'data-framer-name': `User Content`,
                          layoutDependency: A,
                          layoutId: `Hc2C_4QYP`,
                          children: [
                            g(Ae, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                pixelHeight: 2048,
                                pixelWidth: 1448,
                                sizes: `50px`,
                                ...ba(p),
                              },
                              className: `framer-1ndln84`,
                              'data-framer-name': `User Image`,
                              layoutDependency: A,
                              layoutId: `XOkqmhLrA`,
                              style: {
                                borderBottomLeftRadius: 5,
                                borderBottomRightRadius: 5,
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5,
                              },
                            }),
                            x(E.div, {
                              className: `framer-1r42972`,
                              'data-framer-name': `User Details`,
                              layoutDependency: A,
                              layoutId: `hJZp2Yqbm`,
                              children: [
                                x(E.div, {
                                  className: `framer-ti0ea7`,
                                  'data-framer-name': `Name`,
                                  layoutDependency: A,
                                  layoutId: `ZxN61Lxjj`,
                                  children: [
                                    g(F, {
                                      __fromCanvasComponent: !0,
                                      children: g(s, {
                                        children: g(E.p, {
                                          className: `framer-styles-preset-14w8e6o`,
                                          'data-styles-preset': `FsS03h6Vk`,
                                          children: `Karizmia`,
                                        }),
                                      }),
                                      className: `framer-j4uuzi`,
                                      'data-framer-name': `Text`,
                                      fonts: [`Inter`],
                                      layoutDependency: A,
                                      layoutId: `hNx78IYnS`,
                                      style: { '--framer-paragraph-spacing': `0px` },
                                      text: m,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    g(W, {
                                      children: g(V, {
                                        className: `framer-k1hfd-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        layoutDependency: A,
                                        layoutId: `f96cuMGky-container`,
                                        nodeId: `f96cuMGky`,
                                        rendersWithMotion: !0,
                                        scopeId: `PSDgyKIIH`,
                                        children: g(Qe, {
                                          color: `var(--token-cd0e64eb-ceb2-46a5-9c26-14d8ab40891a, rgb(0, 153, 255))`,
                                          height: `100%`,
                                          iconSearch: `House`,
                                          iconSelection: `SealCheck`,
                                          id: `f96cuMGky`,
                                          layoutId: `f96cuMGky`,
                                          mirrored: !1,
                                          selectByList: !0,
                                          style: { height: `100%`, width: `100%` },
                                          weight: `fill`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                g(E.div, {
                                  className: `framer-1l16y93`,
                                  'data-framer-name': `Role`,
                                  layoutDependency: A,
                                  layoutId: `S3WLPuCsc`,
                                  children: g(F, {
                                    __fromCanvasComponent: !0,
                                    children: g(s, {
                                      children: g(E.p, {
                                        className: `framer-styles-preset-8vm16z`,
                                        'data-styles-preset': `uDh9bONtj`,
                                        style: {
                                          '--framer-text-color': `var(--extracted-r6o4lv, var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153)))`,
                                        },
                                        children: `Senior Designer`,
                                      }),
                                    }),
                                    className: `framer-1dmvvwk`,
                                    'data-framer-name': `Text`,
                                    fonts: [`Inter`],
                                    layoutDependency: A,
                                    layoutId: `PZfm3G1Ir`,
                                    style: {
                                      '--extracted-r6o4lv': `var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153))`,
                                      '--framer-paragraph-spacing': `0px`,
                                    },
                                    text: _,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            g(Ae, {
                              background: {
                                alt: ``,
                                fit: `fit`,
                                intrinsicHeight: 43.5,
                                intrinsicWidth: 115,
                                pixelHeight: 302,
                                pixelWidth: 1052,
                                sizes: `65px`,
                                ...ba(v),
                                positionX: `center`,
                                positionY: `center`,
                              },
                              className: `framer-1hwamcv`,
                              'data-framer-name': `Logo`,
                              layoutDependency: A,
                              layoutId: `frtPfa8xN`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Ug6s5.framer-z3y36, .framer-Ug6s5 .framer-z3y36 { display: block; }`,
          `.framer-Ug6s5.framer-vev6gr { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px 20px 24px 20px; position: relative; width: 370px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Ug6s5 .framer-1nn2wo3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Ug6s5 .framer-1j7mtj2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Ug6s5 .framer-1kkewbg { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Ug6s5 .framer-1npv4am { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Ug6s5 .framer-1phmwxj { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }`,
          `.framer-Ug6s5 .framer-kyvaz1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 10px 0px 0px; position: relative; width: 100%; }`,
          `.framer-Ug6s5 .framer-1ndln84 { flex: none; height: 50px; overflow: hidden; position: relative; width: 50px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Ug6s5 .framer-1r42972 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: wrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-Ug6s5 .framer-ti0ea7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 10px 5px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Ug6s5 .framer-j4uuzi { flex: none; height: auto; max-width: 470px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Ug6s5 .framer-k1hfd-container { flex: none; height: 20px; position: relative; width: 20px; }`,
          `.framer-Ug6s5 .framer-1l16y93 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 470px; overflow: hidden; padding: 3px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-Ug6s5 .framer-1dmvvwk { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Ug6s5 .framer-1hwamcv { aspect-ratio: 2.6436781609195403 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 25px); overflow: visible; position: relative; width: 65px; }`,
          ...sr,
          ...Ge,
          `.framer-Ug6s5[data-border="true"]::after, .framer-Ug6s5 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-Ug6s5`
      )),
      (Ea = Ta),
      (Ta.displayName = `Testimonial Card`),
      (Ta.defaultProps = { height: 321.5, width: 370 }),
      I(Ta, {
        PXhdA1o5u: {
          defaultValue: `"Akihiko elevated every layer of our brand’s online presence. From motion details to structural layout, every piece felt crafted and intentional. The site not only looked beautiful but performed well too — and the entire collaboration process was smooth."`,
          displayTextArea: !0,
          title: `Body Text`,
          type: H.String,
        },
        TQKawNzuI: {
          __defaultAssetReference: `data:framer/asset-reference,cK7AGbI0VPrnRTVlZOEJ3NkPkM.jpg?originalFilename=%C3%A3%C2%83%C2%A9%C3%A3%C2%83%C2%83%C3%A3%C2%82%C2%AD%C3%A3%C2%83%C2%BC%C3%A3%C2%83%C2%BB%C3%A3%C2%83%C2%95%C3%A3%C2%82%C2%99%C3%A3%C2%83%C2%AB%C3%A3%C2%83%C2%BC%C3%A3%C2%83%C2%88.jpg&width=1448&height=2048`,
          title: `Profile`,
          type: H.ResponsiveImage,
        },
        SfDOWebi7: { defaultValue: `Karizmia`, displayTextArea: !1, title: `Name`, type: H.String },
        GDX03WB2s: {
          defaultValue: `Senior Designer`,
          displayTextArea: !1,
          title: `Role`,
          type: H.String,
        },
        CE9vq930d: {
          __defaultAssetReference: `data:framer/asset-reference,2eK4hXQmW3JlRPZpRmCnq7RnRo.png?originalFilename=Screenshot+2026-01-07+at+5.19.40%C3%A2%C2%80%C2%AFPM.png&width=1052&height=302`,
          title: `Logo`,
          type: H.ResponsiveImage,
        },
      }),
      L(
        Ta,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...ga,
          ...B(or),
          ...B(rt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Oa(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra,
  za,
  Ba = e(() => {
    (S(),
      R(),
      M(),
      r(),
      lr(),
      nt(),
      (ka = [`RDKzUs_Fz`, `cSNZa7lRK`, `LVXTmyQFQ`, `MkgJQUnPV`]),
      (Aa = `framer-x0RRf`),
      (ja = {
        cSNZa7lRK: `framer-v-szcp6t`,
        LVXTmyQFQ: `framer-v-x3qdnr`,
        MkgJQUnPV: `framer-v-tnd4c0`,
        RDKzUs_Fz: `framer-v-g2q9aj`,
      }),
      (Ma = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Na = ({ value: e, children: t }) => {
        let n = c(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return g(O.Provider, { value: i, children: t });
      }),
      (Pa = E.create(s)),
      (Fa = {
        'S Primary': `LVXTmyQFQ`,
        'S Secondary': `MkgJQUnPV`,
        'XL Primary': `RDKzUs_Fz`,
        'XL Secondary': `cSNZa7lRK`,
      }),
      (Ia = ({ bodyText: e, height: t, id: n, rollNo: r, service: i, width: a, ...o }) => ({
        ...o,
        bGkBZIVtS:
          e ??
          o.bGkBZIVtS ??
          `We guide every visual decision from start to finish, ensuring clarity, emotion, and impact across every touchpoint.`,
        mm2TadyHO: r ?? o.mm2TadyHO ?? `01`,
        Pbe6da3x3: i ?? o.Pbe6da3x3 ?? `Art Direction`,
        variant: Fa[o.variant] ?? o.variant ?? `RDKzUs_Fz`,
      })),
      (La = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ra = ue(
        p(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = h(),
            { activeLocale: a, setLocale: o } = he();
          De();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              mm2TadyHO: f,
              Pbe6da3x3: p,
              bGkBZIVtS: m,
              ..._
            } = Ia(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: S,
              gestureHandlers: ee,
              gestureVariant: te,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: D,
            } = Ie({
              cycleOrder: ka,
              defaultVariant: `RDKzUs_Fz`,
              ref: r,
              variant: d,
              variantClassNames: ja,
            }),
            O = La(e, D),
            k = N(Aa, ht, cr),
            A = () => ![`LVXTmyQFQ`, `MkgJQUnPV`].includes(v),
            M = () => !![`cSNZa7lRK`, `MkgJQUnPV`].includes(v);
          return g(j, {
            id: u ?? i,
            children: g(Pa, {
              animate: D,
              initial: !1,
              children: g(Na, {
                value: Ma,
                children: x(E.div, {
                  ..._,
                  ...ee,
                  className: N(k, `framer-g2q9aj`, l, y),
                  'data-framer-name': `XL Primary`,
                  layoutDependency: O,
                  layoutId: `RDKzUs_Fz`,
                  ref: r,
                  style: { ...c },
                  ...Oa(
                    {
                      cSNZa7lRK: { 'data-framer-name': `XL Secondary` },
                      LVXTmyQFQ: { 'data-framer-name': `S Primary` },
                      MkgJQUnPV: { 'data-framer-name': `S Secondary` },
                    },
                    v,
                    te
                  ),
                  children: [
                    g(E.div, {
                      className: `framer-1it428z`,
                      'data-framer-name': `Line`,
                      layoutDependency: O,
                      layoutId: `DfkpTCT8T`,
                      style: {
                        backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`,
                      },
                    }),
                    x(E.div, {
                      className: `framer-107pdi9`,
                      'data-framer-name': `Content`,
                      layoutDependency: O,
                      layoutId: `t5soOghr4`,
                      children: [
                        x(E.div, {
                          className: `framer-l6wrfx`,
                          'data-framer-name': `Left`,
                          layoutDependency: O,
                          layoutId: `xll6TLkPf`,
                          children: [
                            A() &&
                              g(E.div, {
                                className: `framer-o0po6w`,
                                'data-framer-name': `Roll No`,
                                layoutDependency: O,
                                layoutId: `Diwx5j1_P`,
                                children: g(F, {
                                  __fromCanvasComponent: !0,
                                  children: g(s, {
                                    children: g(E.p, {
                                      className: `framer-styles-preset-8vm16z`,
                                      'data-styles-preset': `uDh9bONtj`,
                                      children: `01`,
                                    }),
                                  }),
                                  className: `framer-1uch2fs`,
                                  'data-framer-name': `Text`,
                                  fonts: [`Inter`],
                                  layoutDependency: O,
                                  layoutId: `r6sS4xMY3`,
                                  style: { '--framer-paragraph-spacing': `0px` },
                                  text: f,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            g(F, {
                              __fromCanvasComponent: !0,
                              children: g(s, {
                                children: g(E.p, {
                                  className: `framer-styles-preset-14w8e6o`,
                                  'data-styles-preset': `FsS03h6Vk`,
                                  children: `Art Direction`,
                                }),
                              }),
                              className: `framer-77ym80`,
                              'data-framer-name': `Text`,
                              fonts: [`Inter`],
                              layoutDependency: O,
                              layoutId: `jAR4zM27S`,
                              style: { '--framer-paragraph-spacing': `0px` },
                              text: p,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        g(E.div, {
                          className: `framer-1sfns59`,
                          'data-framer-name': `Body Text`,
                          layoutDependency: O,
                          layoutId: `UZNXli93y`,
                          children: g(F, {
                            __fromCanvasComponent: !0,
                            children: g(s, {
                              children: g(E.p, {
                                className: `framer-styles-preset-8vm16z`,
                                'data-styles-preset': `uDh9bONtj`,
                                style: {
                                  '--framer-text-color': `var(--extracted-r6o4lv, var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153)))`,
                                },
                                children: `We're all about taking a 360-degree approach, \u2028\u2028bringing all our services under the same umbrella to create communication.`,
                              }),
                            }),
                            className: `framer-gz3nsm`,
                            'data-framer-name': `Text`,
                            fonts: [`Inter`],
                            layoutDependency: O,
                            layoutId: `BZxFxaL8h`,
                            style: {
                              '--extracted-r6o4lv': `var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153))`,
                              '--framer-paragraph-spacing': `0px`,
                            },
                            text: m,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    M() &&
                      g(E.div, {
                        className: `framer-zhh7a`,
                        'data-framer-name': `Line`,
                        layoutDependency: O,
                        layoutId: `j860tEL7g`,
                        style: {
                          backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`,
                        },
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-x0RRf.framer-10cw8ys, .framer-x0RRf .framer-10cw8ys { display: block; }`,
          `.framer-x0RRf.framer-g2q9aj { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 40px 0px; position: relative; width: 869px; }`,
          `.framer-x0RRf .framer-1it428z, .framer-x0RRf .framer-zhh7a { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }`,
          `.framer-x0RRf .framer-107pdi9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 227px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-x0RRf .framer-l6wrfx { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 124px; height: min-content; justify-content: center; max-width: 300px; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-x0RRf .framer-o0po6w { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 30px; overflow: hidden; padding: 3px 0px 0px 0px; position: relative; width: 1px; }`,
          `.framer-x0RRf .framer-1uch2fs, .framer-x0RRf .framer-gz3nsm { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-x0RRf .framer-77ym80 { flex: 1 0 0px; height: auto; max-width: 312px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-x0RRf .framer-1sfns59 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 320px; overflow: hidden; padding: 3px 0px 0px 0px; position: relative; width: 1px; }`,
          `.framer-x0RRf.framer-v-szcp6t.framer-g2q9aj { padding: 0px; }`,
          `.framer-x0RRf.framer-v-szcp6t .framer-1it428z, .framer-x0RRf.framer-v-tnd4c0 .framer-1it428z { order: 0; }`,
          `.framer-x0RRf.framer-v-szcp6t .framer-107pdi9 { order: 1; }`,
          `.framer-x0RRf.framer-v-szcp6t .framer-zhh7a, .framer-x0RRf.framer-v-tnd4c0 .framer-zhh7a { order: 2; }`,
          `.framer-x0RRf.framer-v-x3qdnr.framer-g2q9aj { width: 390px; }`,
          `.framer-x0RRf.framer-v-x3qdnr .framer-107pdi9 { gap: 40px; }`,
          `.framer-x0RRf.framer-v-tnd4c0.framer-g2q9aj { padding: 0px; width: 390px; }`,
          `.framer-x0RRf.framer-v-tnd4c0 .framer-107pdi9 { gap: 40px; order: 1; }`,
          ...Ge,
          ...sr,
        ],
        `framer-x0RRf`
      )),
      (za = Ra),
      (Ra.displayName = `Service Card`),
      (Ra.defaultProps = { height: 135, width: 869 }),
      I(Ra, {
        variant: {
          options: [`RDKzUs_Fz`, `cSNZa7lRK`, `LVXTmyQFQ`, `MkgJQUnPV`],
          optionTitles: [`XL Primary`, `XL Secondary`, `S Primary`, `S Secondary`],
          title: `Variant`,
          type: H.Enum,
        },
        mm2TadyHO: { defaultValue: `01`, displayTextArea: !1, title: `Roll No`, type: H.String },
        Pbe6da3x3: {
          defaultValue: `Art Direction`,
          displayTextArea: !1,
          title: `Service`,
          type: H.String,
        },
        bGkBZIVtS: {
          defaultValue: `We guide every visual decision from start to finish, ensuring clarity, emotion, and impact across every touchpoint.`,
          displayTextArea: !0,
          title: `Body Text`,
          type: H.String,
        },
      }),
      L(
        Ra,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...B(rt),
          ...B(or),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Va(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Xa,
  Za,
  Qa,
  $a,
  eo = e(() => {
    (S(),
      R(),
      M(),
      r(),
      Ba(),
      (Ha = z(za)),
      (Ua = [`K8RDTGEIl`, `IGLDqE_JA`, `m85hHFNAk`]),
      (Wa = `framer-0Iuzr`),
      (Ga = {
        IGLDqE_JA: `framer-v-1l2jgsa`,
        K8RDTGEIl: `framer-v-5wkc61`,
        m85hHFNAk: `framer-v-1mj398i`,
      }),
      (Ka = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (qa = ({ value: e, children: t }) => {
        let n = c(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return g(O.Provider, { value: i, children: t });
      }),
      (Ja = E.create(s)),
      (Ya = { Primary: `K8RDTGEIl`, Secondary: `IGLDqE_JA`, Tertiary: `m85hHFNAk` }),
      (Xa = ({
        cursor1: e,
        cursor2: t,
        cursor3: n,
        cursor4: r,
        height: i,
        id: a,
        width: o,
        ...s
      }) => ({
        ...s,
        h2QFIa86Z: r ?? s.h2QFIa86Z,
        lVTXes8OT: e ?? s.lVTXes8OT,
        nM49zxtOZ: t ?? s.nM49zxtOZ,
        variant: Ya[s.variant] ?? s.variant ?? `K8RDTGEIl`,
        wNMx0LJLM: n ?? s.wNMx0LJLM,
      })),
      (Za = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Qa = ue(
        p(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = h(),
            { activeLocale: a, setLocale: o } = he(),
            s = De(),
            {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              lVTXes8OT: f,
              nM49zxtOZ: p,
              wNMx0LJLM: m,
              h2QFIa86Z: _,
              ...v
            } = Xa(e),
            {
              baseVariant: y,
              classNames: S,
              clearLoadingGesture: ee,
              gestureHandlers: te,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: D,
              variants: O,
            } = Ie({
              cycleOrder: Ua,
              defaultVariant: `K8RDTGEIl`,
              ref: r,
              variant: d,
              variantClassNames: Ga,
            }),
            k = Za(e, O),
            A = N(Wa);
          return g(j, {
            id: u ?? i,
            children: g(Ja, {
              animate: O,
              initial: !1,
              children: g(qa, {
                value: Ka,
                children: x(E.div, {
                  ...v,
                  ...te,
                  className: N(A, `framer-5wkc61`, l, S),
                  'data-framer-name': `Primary`,
                  layoutDependency: k,
                  layoutId: `K8RDTGEIl`,
                  ref: r,
                  style: { ...c },
                  ...Va(
                    {
                      IGLDqE_JA: { 'data-framer-name': `Secondary` },
                      m85hHFNAk: { 'data-framer-name': `Tertiary` },
                    },
                    y,
                    C
                  ),
                  children: [
                    g(W, {
                      height: 135,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 541) - 0 - 540) / 2 + 0 + 0),
                      ...Va(
                        {
                          IGLDqE_JA: { width: `calc(${s?.width || `100vw`} - 40px)` },
                          m85hHFNAk: {
                            y: (s?.y || 0) + 0 + (((s?.height || 200) - 0 - 540) / 2 + 0 + 0),
                          },
                        },
                        y,
                        C
                      ),
                      children: g(V, {
                        className: `framer-1lwd9lz-container`,
                        'data-framer-cursor': f,
                        layoutDependency: k,
                        layoutId: `oUIRWjK0G-container`,
                        nodeId: `oUIRWjK0G`,
                        rendersWithMotion: !0,
                        scopeId: `QdPTPGk0T`,
                        ...Va(
                          {
                            IGLDqE_JA: { 'data-framer-cursor': void 0 },
                            m85hHFNAk: { 'data-framer-cursor': void 0 },
                          },
                          y,
                          C
                        ),
                        children: g(za, {
                          bGkBZIVtS: `We guide every visual decision from start to finish, ensuring clarity, emotion, and impact across every touchpoint.`,
                          height: `100%`,
                          id: `oUIRWjK0G`,
                          layoutId: `oUIRWjK0G`,
                          mm2TadyHO: `01`,
                          Pbe6da3x3: `Art Direction`,
                          style: { width: `100%` },
                          variant: `RDKzUs_Fz`,
                          width: `100%`,
                          ...Va(
                            {
                              IGLDqE_JA: { variant: `LVXTmyQFQ` },
                              m85hHFNAk: { variant: `LVXTmyQFQ` },
                            },
                            y,
                            C
                          ),
                        }),
                      }),
                    }),
                    g(W, {
                      height: 135,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 541) - 0 - 540) / 2 + 135 + 0),
                      ...Va(
                        {
                          IGLDqE_JA: { width: `calc(${s?.width || `100vw`} - 40px)` },
                          m85hHFNAk: {
                            y: (s?.y || 0) + 0 + (((s?.height || 200) - 0 - 540) / 2 + 135 + 0),
                          },
                        },
                        y,
                        C
                      ),
                      children: g(V, {
                        className: `framer-1ruwwko-container`,
                        'data-framer-cursor': p,
                        layoutDependency: k,
                        layoutId: `CEZAmcpKh-container`,
                        nodeId: `CEZAmcpKh`,
                        rendersWithMotion: !0,
                        scopeId: `QdPTPGk0T`,
                        ...Va(
                          {
                            IGLDqE_JA: { 'data-framer-cursor': void 0 },
                            m85hHFNAk: { 'data-framer-cursor': void 0 },
                          },
                          y,
                          C
                        ),
                        children: g(za, {
                          bGkBZIVtS: `From strategy to execution, we shape consistent brand systems that speak clearly and feel uniquely ownable.`,
                          height: `100%`,
                          id: `CEZAmcpKh`,
                          layoutId: `CEZAmcpKh`,
                          mm2TadyHO: `02`,
                          Pbe6da3x3: `Brand Identity`,
                          style: { width: `100%` },
                          variant: `RDKzUs_Fz`,
                          width: `100%`,
                          ...Va(
                            {
                              IGLDqE_JA: { variant: `LVXTmyQFQ` },
                              m85hHFNAk: { variant: `LVXTmyQFQ` },
                            },
                            y,
                            C
                          ),
                        }),
                      }),
                    }),
                    g(W, {
                      height: 135,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 541) - 0 - 540) / 2 + 270 + 0),
                      ...Va(
                        {
                          IGLDqE_JA: { width: `calc(${s?.width || `100vw`} - 40px)` },
                          m85hHFNAk: {
                            y: (s?.y || 0) + 0 + (((s?.height || 200) - 0 - 540) / 2 + 270 + 0),
                          },
                        },
                        y,
                        C
                      ),
                      children: g(V, {
                        className: `framer-1pwncit-container`,
                        'data-framer-cursor': m,
                        layoutDependency: k,
                        layoutId: `aavA4t_AC-container`,
                        nodeId: `aavA4t_AC`,
                        rendersWithMotion: !0,
                        scopeId: `QdPTPGk0T`,
                        ...Va(
                          {
                            IGLDqE_JA: { 'data-framer-cursor': void 0 },
                            m85hHFNAk: { 'data-framer-cursor': void 0 },
                          },
                          y,
                          C
                        ),
                        children: g(za, {
                          bGkBZIVtS: `We use motion as a design tool — adding clarity, rhythm, and energy to digital experiences with intention.`,
                          height: `100%`,
                          id: `aavA4t_AC`,
                          layoutId: `aavA4t_AC`,
                          mm2TadyHO: `03`,
                          Pbe6da3x3: `Motion Direction`,
                          style: { width: `100%` },
                          variant: `RDKzUs_Fz`,
                          width: `100%`,
                          ...Va(
                            {
                              IGLDqE_JA: { variant: `LVXTmyQFQ` },
                              m85hHFNAk: { variant: `LVXTmyQFQ` },
                            },
                            y,
                            C
                          ),
                        }),
                      }),
                    }),
                    g(W, {
                      height: 135,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 541) - 0 - 540) / 2 + 405 + 0),
                      ...Va(
                        {
                          IGLDqE_JA: { width: `calc(${s?.width || `100vw`} - 40px)` },
                          m85hHFNAk: {
                            y: (s?.y || 0) + 0 + (((s?.height || 200) - 0 - 540) / 2 + 405 + 0),
                          },
                        },
                        y,
                        C
                      ),
                      children: g(V, {
                        className: `framer-sauztn-container`,
                        'data-framer-cursor': _,
                        layoutDependency: k,
                        layoutId: `EDVQR9DcI-container`,
                        nodeId: `EDVQR9DcI`,
                        rendersWithMotion: !0,
                        scopeId: `QdPTPGk0T`,
                        ...Va(
                          {
                            IGLDqE_JA: { 'data-framer-cursor': void 0 },
                            m85hHFNAk: { 'data-framer-cursor': void 0 },
                          },
                          y,
                          C
                        ),
                        children: g(za, {
                          bGkBZIVtS: `Design meets execution with real-time, scalable websites — all crafted natively inside Framer for speed and precision.`,
                          height: `100%`,
                          id: `EDVQR9DcI`,
                          layoutId: `EDVQR9DcI`,
                          mm2TadyHO: `04`,
                          Pbe6da3x3: `Framer Sites`,
                          style: { width: `100%` },
                          variant: `cSNZa7lRK`,
                          width: `100%`,
                          ...Va(
                            {
                              IGLDqE_JA: { variant: `MkgJQUnPV` },
                              m85hHFNAk: { variant: `MkgJQUnPV` },
                            },
                            y,
                            C
                          ),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-0Iuzr.framer-1rcm4u7, .framer-0Iuzr .framer-1rcm4u7 { display: block; }`,
          `.framer-0Iuzr.framer-5wkc61 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 893px; }`,
          `.framer-0Iuzr .framer-1lwd9lz-container, .framer-0Iuzr .framer-1ruwwko-container, .framer-0Iuzr .framer-1pwncit-container, .framer-0Iuzr .framer-sauztn-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-0Iuzr.framer-v-1l2jgsa.framer-5wkc61 { padding: 0px 20px 0px 20px; }`,
        ],
        `framer-0Iuzr`
      )),
      ($a = Qa),
      (Qa.displayName = `Service List`),
      (Qa.defaultProps = { height: 541, width: 893 }),
      I(Qa, {
        variant: {
          options: [`K8RDTGEIl`, `IGLDqE_JA`, `m85hHFNAk`],
          optionTitles: [`Primary`, `Secondary`, `Tertiary`],
          title: `Variant`,
          type: H.Enum,
        },
        lVTXes8OT: { title: `Cursor 1`, type: H.CustomCursor },
        nM49zxtOZ: { title: `Cursor 2`, type: H.CustomCursor },
        wNMx0LJLM: { title: `Cursor 3`, type: H.CustomCursor },
        h2QFIa86Z: { title: `Cursor 4`, type: H.CustomCursor },
      }),
      L(Qa, [{ explicitInter: !0, fonts: [] }, ...Ha], { supportsExplicitInterCodegen: !0 }));
  });
function to(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var no,
  ro,
  io,
  ao,
  oo,
  so,
  co,
  lo,
  uo,
  fo,
  po,
  mo = e(() => {
    (S(),
      R(),
      M(),
      r(),
      ui(),
      (no = [`jwXtXigQo`, `DVdht7Dg0`, `dk0rLLXb2`, `H6SNXfFLK`]),
      (ro = `framer-3MqPs`),
      (io = {
        dk0rLLXb2: `framer-v-xo1mi3`,
        DVdht7Dg0: `framer-v-1ovr5ew`,
        H6SNXfFLK: `framer-v-1orii42`,
        jwXtXigQo: `framer-v-1l3w08a`,
      }),
      (ao = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (oo = ({ value: e, children: t }) => {
        let n = c(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return g(O.Provider, { value: i, children: t });
      }),
      (so = E.create(s)),
      (co = {
        'S Primary': `dk0rLLXb2`,
        'S Secondary': `H6SNXfFLK`,
        'XL Primary': `jwXtXigQo`,
        'XL Secondary': `DVdht7Dg0`,
      }),
      (lo = ({ _2023: e, company: t, height: n, id: r, location: i, role: a, width: o, ...s }) => ({
        ...s,
        LkF37SPSL: e ?? s.LkF37SPSL ?? `Art Direction`,
        PKW0WF81w: t ?? s.PKW0WF81w ?? `Akihiko Co.`,
        variant: co[s.variant] ?? s.variant ?? `jwXtXigQo`,
        wEubQ5Rgj: i ?? s.wEubQ5Rgj ?? `Tokyo`,
        Xh_EsYKat: a ?? s.Xh_EsYKat ?? `Art Direction`,
      })),
      (uo = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (fo = ue(
        p(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = h(),
            { activeLocale: a, setLocale: o } = he();
          De();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              PKW0WF81w: f,
              LkF37SPSL: p,
              Xh_EsYKat: m,
              wEubQ5Rgj: _,
              ...v
            } = lo(e),
            {
              baseVariant: y,
              classNames: S,
              clearLoadingGesture: ee,
              gestureHandlers: te,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: D,
              variants: O,
            } = Ie({
              cycleOrder: no,
              defaultVariant: `jwXtXigQo`,
              ref: r,
              variant: d,
              variantClassNames: io,
            }),
            k = uo(e, O),
            A = N(ro, li),
            M = () => !![`DVdht7Dg0`, `H6SNXfFLK`].includes(y);
          return g(j, {
            id: u ?? i,
            children: g(so, {
              animate: O,
              initial: !1,
              children: g(oo, {
                value: ao,
                children: x(E.div, {
                  ...v,
                  ...te,
                  className: N(A, `framer-1l3w08a`, l, S),
                  'data-framer-name': `XL Primary`,
                  layoutDependency: k,
                  layoutId: `jwXtXigQo`,
                  ref: r,
                  style: { ...c },
                  ...to(
                    {
                      dk0rLLXb2: { 'data-framer-name': `S Primary` },
                      DVdht7Dg0: { 'data-framer-name': `XL Secondary` },
                      H6SNXfFLK: { 'data-framer-name': `S Secondary` },
                    },
                    y,
                    C
                  ),
                  children: [
                    g(E.div, {
                      className: `framer-bbal8w`,
                      'data-framer-name': `Line`,
                      layoutDependency: k,
                      layoutId: `Olih6GvHe`,
                      style: {
                        backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`,
                      },
                    }),
                    M() &&
                      g(E.div, {
                        className: `framer-1g1qxmv`,
                        'data-framer-name': `Line`,
                        layoutDependency: k,
                        layoutId: `VToQjDrxR`,
                        style: {
                          backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`,
                        },
                      }),
                    x(E.div, {
                      className: `framer-15mx0bf`,
                      'data-framer-name': `Content`,
                      layoutDependency: k,
                      layoutId: `qh14vuoky`,
                      children: [
                        x(E.div, {
                          className: `framer-1ssoti0`,
                          'data-framer-name': `Left`,
                          layoutDependency: k,
                          layoutId: `ydbhRnZ1r`,
                          children: [
                            g(E.div, {
                              className: `framer-193nh8n`,
                              'data-framer-name': `Company`,
                              layoutDependency: k,
                              layoutId: `IV6JxSwxs`,
                              children: g(F, {
                                __fromCanvasComponent: !0,
                                children: g(s, {
                                  children: g(E.p, {
                                    className: `framer-styles-preset-d3a9yv`,
                                    'data-styles-preset': `gVvtfPznu`,
                                    children: `Art Direction`,
                                  }),
                                }),
                                className: `framer-1xa879l`,
                                'data-framer-name': `Text`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `cowhcNMwT`,
                                style: { '--framer-paragraph-spacing': `0px` },
                                text: f,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            g(E.div, {
                              className: `framer-1buv54b`,
                              'data-framer-name': `Year`,
                              layoutDependency: k,
                              layoutId: `DhhQeNLQ4`,
                              children: g(F, {
                                __fromCanvasComponent: !0,
                                children: g(s, {
                                  children: g(E.p, {
                                    className: `framer-styles-preset-d3a9yv`,
                                    'data-styles-preset': `gVvtfPznu`,
                                    children: `Art Direction`,
                                  }),
                                }),
                                className: `framer-8iztlc`,
                                'data-framer-name': `Text`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `I69v7uP5D`,
                                style: { '--framer-paragraph-spacing': `0px` },
                                text: p,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...to(
                                  {
                                    dk0rLLXb2: {
                                      children: g(s, {
                                        children: g(E.p, {
                                          className: `framer-styles-preset-d3a9yv`,
                                          'data-styles-preset': `gVvtfPznu`,
                                          style: { '--framer-text-alignment': `right` },
                                          children: `Art Direction`,
                                        }),
                                      }),
                                    },
                                    H6SNXfFLK: {
                                      children: g(s, {
                                        children: g(E.p, {
                                          className: `framer-styles-preset-d3a9yv`,
                                          'data-styles-preset': `gVvtfPznu`,
                                          style: { '--framer-text-alignment': `right` },
                                          children: `Art Direction`,
                                        }),
                                      }),
                                    },
                                  },
                                  y,
                                  C
                                ),
                              }),
                            }),
                          ],
                        }),
                        x(E.div, {
                          className: `framer-wgw9gi`,
                          'data-framer-name': `Right`,
                          layoutDependency: k,
                          layoutId: `GlFviHLc4`,
                          children: [
                            g(E.div, {
                              className: `framer-1je8max`,
                              'data-framer-name': `Role`,
                              layoutDependency: k,
                              layoutId: `h6wXJ_kGV`,
                              children: g(F, {
                                __fromCanvasComponent: !0,
                                children: g(s, {
                                  children: g(E.p, {
                                    className: `framer-styles-preset-d3a9yv`,
                                    'data-styles-preset': `gVvtfPznu`,
                                    children: `Art Direction`,
                                  }),
                                }),
                                className: `framer-ih2l1`,
                                'data-framer-name': `Text`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `g2vEJCM4m`,
                                style: { '--framer-paragraph-spacing': `0px` },
                                text: m,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            g(E.div, {
                              className: `framer-1x1fpy4`,
                              'data-framer-name': `Location`,
                              layoutDependency: k,
                              layoutId: `xyPwaDiTS`,
                              children: g(F, {
                                __fromCanvasComponent: !0,
                                children: g(s, {
                                  children: g(E.p, {
                                    className: `framer-styles-preset-d3a9yv`,
                                    'data-styles-preset': `gVvtfPznu`,
                                    style: { '--framer-text-alignment': `right` },
                                    children: `Tokyo`,
                                  }),
                                }),
                                className: `framer-3tqjgn`,
                                'data-framer-name': `Text`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `Rrbm0Gk_e`,
                                style: { '--framer-paragraph-spacing': `0px` },
                                text: _,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-3MqPs.framer-86w3lj, .framer-3MqPs .framer-86w3lj { display: block; }`,
          `.framer-3MqPs.framer-1l3w08a { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1392px; }`,
          `.framer-3MqPs .framer-bbal8w, .framer-3MqPs .framer-1g1qxmv { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }`,
          `.framer-3MqPs .framer-15mx0bf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 227px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-3MqPs .framer-1ssoti0, .framer-3MqPs .framer-wgw9gi { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 227px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-3MqPs .framer-193nh8n, .framer-3MqPs .framer-1buv54b, .framer-3MqPs .framer-1je8max, .framer-3MqPs .framer-1x1fpy4 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 124px; height: min-content; justify-content: center; max-width: 300px; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-3MqPs .framer-1xa879l, .framer-3MqPs .framer-8iztlc, .framer-3MqPs .framer-ih2l1, .framer-3MqPs .framer-3tqjgn { flex: 1 0 0px; height: auto; max-width: 312px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-3MqPs.framer-v-1ovr5ew .framer-bbal8w, .framer-3MqPs.framer-v-1orii42 .framer-bbal8w { order: 0; }`,
          `.framer-3MqPs.framer-v-1ovr5ew .framer-1g1qxmv, .framer-3MqPs.framer-v-1orii42 .framer-1g1qxmv { order: 2; }`,
          `.framer-3MqPs.framer-v-1ovr5ew .framer-15mx0bf { order: 1; }`,
          `.framer-3MqPs.framer-v-xo1mi3.framer-1l3w08a, .framer-3MqPs.framer-v-1orii42.framer-1l3w08a { width: 390px; }`,
          `.framer-3MqPs.framer-v-xo1mi3 .framer-15mx0bf { flex-direction: column; gap: 30px; }`,
          `.framer-3MqPs.framer-v-xo1mi3 .framer-1ssoti0, .framer-3MqPs.framer-v-xo1mi3 .framer-wgw9gi, .framer-3MqPs.framer-v-1orii42 .framer-1ssoti0, .framer-3MqPs.framer-v-1orii42 .framer-wgw9gi { flex: none; gap: 40px; width: 100%; }`,
          `.framer-3MqPs.framer-v-xo1mi3 .framer-193nh8n, .framer-3MqPs.framer-v-xo1mi3 .framer-1xa879l, .framer-3MqPs.framer-v-xo1mi3 .framer-1buv54b, .framer-3MqPs.framer-v-xo1mi3 .framer-8iztlc, .framer-3MqPs.framer-v-xo1mi3 .framer-1je8max, .framer-3MqPs.framer-v-xo1mi3 .framer-ih2l1, .framer-3MqPs.framer-v-xo1mi3 .framer-1x1fpy4, .framer-3MqPs.framer-v-xo1mi3 .framer-3tqjgn, .framer-3MqPs.framer-v-1orii42 .framer-193nh8n, .framer-3MqPs.framer-v-1orii42 .framer-1xa879l, .framer-3MqPs.framer-v-1orii42 .framer-1buv54b, .framer-3MqPs.framer-v-1orii42 .framer-8iztlc, .framer-3MqPs.framer-v-1orii42 .framer-1je8max, .framer-3MqPs.framer-v-1orii42 .framer-ih2l1, .framer-3MqPs.framer-v-1orii42 .framer-1x1fpy4, .framer-3MqPs.framer-v-1orii42 .framer-3tqjgn { max-width: unset; }`,
          `.framer-3MqPs.framer-v-1orii42 .framer-15mx0bf { flex-direction: column; gap: 30px; order: 1; }`,
          ...ci,
        ],
        `framer-3MqPs`
      )),
      (po = fo),
      (fo.displayName = `Experience Card`),
      (fo.defaultProps = { height: 38, width: 1392 }),
      I(fo, {
        variant: {
          options: [`jwXtXigQo`, `DVdht7Dg0`, `dk0rLLXb2`, `H6SNXfFLK`],
          optionTitles: [`XL Primary`, `XL Secondary`, `S Primary`, `S Secondary`],
          title: `Variant`,
          type: H.Enum,
        },
        PKW0WF81w: {
          defaultValue: `Akihiko Co.`,
          displayTextArea: !1,
          title: `Company`,
          type: H.String,
        },
        LkF37SPSL: {
          defaultValue: `Art Direction`,
          displayTextArea: !1,
          title: `2023`,
          type: H.String,
        },
        Xh_EsYKat: {
          defaultValue: `Art Direction`,
          displayTextArea: !1,
          title: `Role`,
          type: H.String,
        },
        wEubQ5Rgj: { defaultValue: `Tokyo`, title: `Location`, type: H.String },
      }),
      L(
        fo,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...B(si),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function ho(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var go,
  _o,
  vo,
  yo,
  bo,
  xo,
  So,
  Co,
  wo,
  To,
  Eo,
  Do,
  Oo = e(() => {
    (S(),
      R(),
      M(),
      r(),
      mo(),
      (go = z(po)),
      (_o = [`xn79ShhRM`, `nTqkcZrXm`, `GsDxk_3Ju`]),
      (vo = `framer-Tw3Vd`),
      (yo = {
        GsDxk_3Ju: `framer-v-1o8zmie`,
        nTqkcZrXm: `framer-v-jyei0`,
        xn79ShhRM: `framer-v-1drld19`,
      }),
      (bo = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (xo = ({ value: e, children: t }) => {
        let n = c(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return g(O.Provider, { value: i, children: t });
      }),
      (So = E.create(s)),
      (Co = { Primary: `xn79ShhRM`, Secondary: `nTqkcZrXm`, Tertiary: `GsDxk_3Ju` }),
      (wo = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Co[r.variant] ?? r.variant ?? `xn79ShhRM`,
      })),
      (To = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Eo = ue(
        p(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = h(),
            { activeLocale: a, setLocale: o } = he(),
            s = De(),
            { style: c, className: l, layoutId: u, variant: d, ...f } = wo(e),
            {
              baseVariant: p,
              classNames: m,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: S,
              setGestureState: ee,
              setVariant: te,
              variants: C,
            } = Ie({
              cycleOrder: _o,
              defaultVariant: `xn79ShhRM`,
              ref: r,
              variant: d,
              variantClassNames: yo,
            }),
            w = To(e, C),
            T = N(vo);
          return g(j, {
            id: u ?? i,
            children: g(So, {
              animate: C,
              initial: !1,
              children: g(xo, {
                value: bo,
                children: x(E.div, {
                  ...f,
                  ...v,
                  className: N(T, `framer-1drld19`, l, m),
                  'data-framer-name': `Primary`,
                  layoutDependency: w,
                  layoutId: `xn79ShhRM`,
                  ref: r,
                  style: { ...c },
                  ...ho(
                    {
                      GsDxk_3Ju: { 'data-framer-name': `Tertiary` },
                      nTqkcZrXm: { 'data-framer-name': `Secondary` },
                    },
                    p,
                    y
                  ),
                  children: [
                    g(W, {
                      height: 38,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 272) - 0 - 254) / 2 + 0 + 0),
                      ...ho(
                        {
                          GsDxk_3Ju: {
                            y: (s?.y || 0) + 0 + (((s?.height || 200) - 0 - 254) / 2 + 0 + 0),
                          },
                          nTqkcZrXm: {
                            width: `calc(${s?.width || `100vw`} - 40px)`,
                            y: (s?.y || 0) + 0 + (((s?.height || 570.5) - 0 - 254) / 2 + 0 + 0),
                          },
                        },
                        p,
                        y
                      ),
                      children: g(V, {
                        className: `framer-1gjgywn-container`,
                        layoutDependency: w,
                        layoutId: `Ml9uRaItP-container`,
                        nodeId: `Ml9uRaItP`,
                        rendersWithMotion: !0,
                        scopeId: `RV9z89wz3`,
                        children: g(po, {
                          height: `100%`,
                          id: `Ml9uRaItP`,
                          layoutId: `Ml9uRaItP`,
                          LkF37SPSL: `2022 - present`,
                          PKW0WF81w: `Clavmen Studio`,
                          style: { width: `100%` },
                          variant: `jwXtXigQo`,
                          wEubQ5Rgj: `Tokyo`,
                          width: `100%`,
                          Xh_EsYKat: `Art Director & Designer`,
                          ...ho(
                            {
                              GsDxk_3Ju: { variant: `dk0rLLXb2` },
                              nTqkcZrXm: { variant: `dk0rLLXb2` },
                            },
                            p,
                            y
                          ),
                        }),
                      }),
                    }),
                    g(W, {
                      height: 38,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 272) - 0 - 254) / 2 + 38 + 16),
                      ...ho(
                        {
                          GsDxk_3Ju: {
                            y: (s?.y || 0) + 0 + (((s?.height || 200) - 0 - 254) / 2 + 38 + 16),
                          },
                          nTqkcZrXm: {
                            width: `calc(${s?.width || `100vw`} - 40px)`,
                            y: (s?.y || 0) + 0 + (((s?.height || 570.5) - 0 - 254) / 2 + 38 + 16),
                          },
                        },
                        p,
                        y
                      ),
                      children: g(V, {
                        className: `framer-h9998f-container`,
                        layoutDependency: w,
                        layoutId: `T1Ia5uHi9-container`,
                        nodeId: `T1Ia5uHi9`,
                        rendersWithMotion: !0,
                        scopeId: `RV9z89wz3`,
                        children: g(po, {
                          height: `100%`,
                          id: `T1Ia5uHi9`,
                          layoutId: `T1Ia5uHi9`,
                          LkF37SPSL: `2020 – 2022`,
                          PKW0WF81w: `Modular Eight`,
                          style: { width: `100%` },
                          variant: `jwXtXigQo`,
                          wEubQ5Rgj: `Osaka`,
                          width: `100%`,
                          Xh_EsYKat: `Senior Developer`,
                          ...ho(
                            {
                              GsDxk_3Ju: { variant: `dk0rLLXb2` },
                              nTqkcZrXm: { variant: `dk0rLLXb2` },
                            },
                            p,
                            y
                          ),
                        }),
                      }),
                    }),
                    g(W, {
                      height: 38,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 272) - 0 - 254) / 2 + 76 + 32),
                      ...ho(
                        {
                          GsDxk_3Ju: {
                            y: (s?.y || 0) + 0 + (((s?.height || 200) - 0 - 254) / 2 + 76 + 32),
                          },
                          nTqkcZrXm: {
                            width: `calc(${s?.width || `100vw`} - 40px)`,
                            y: (s?.y || 0) + 0 + (((s?.height || 570.5) - 0 - 254) / 2 + 76 + 32),
                          },
                        },
                        p,
                        y
                      ),
                      children: g(V, {
                        className: `framer-me3esw-container`,
                        layoutDependency: w,
                        layoutId: `femSsTB0b-container`,
                        nodeId: `femSsTB0b`,
                        rendersWithMotion: !0,
                        scopeId: `RV9z89wz3`,
                        children: g(po, {
                          height: `100%`,
                          id: `femSsTB0b`,
                          layoutId: `femSsTB0b`,
                          LkF37SPSL: `2018 – 2020`,
                          PKW0WF81w: `Haus of Signal`,
                          style: { width: `100%` },
                          variant: `jwXtXigQo`,
                          wEubQ5Rgj: `Berlin`,
                          width: `100%`,
                          Xh_EsYKat: `Creative Technologist`,
                          ...ho(
                            {
                              GsDxk_3Ju: { variant: `dk0rLLXb2` },
                              nTqkcZrXm: { variant: `dk0rLLXb2` },
                            },
                            p,
                            y
                          ),
                        }),
                      }),
                    }),
                    g(W, {
                      height: 38,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 272) - 0 - 254) / 2 + 114 + 48),
                      ...ho(
                        {
                          GsDxk_3Ju: {
                            y: (s?.y || 0) + 0 + (((s?.height || 200) - 0 - 254) / 2 + 114 + 48),
                          },
                          nTqkcZrXm: {
                            width: `calc(${s?.width || `100vw`} - 40px)`,
                            y: (s?.y || 0) + 0 + (((s?.height || 570.5) - 0 - 254) / 2 + 114 + 48),
                          },
                        },
                        p,
                        y
                      ),
                      children: g(V, {
                        className: `framer-1whwcdw-container`,
                        layoutDependency: w,
                        layoutId: `FhQTCIaQs-container`,
                        nodeId: `FhQTCIaQs`,
                        rendersWithMotion: !0,
                        scopeId: `RV9z89wz3`,
                        children: g(po, {
                          height: `100%`,
                          id: `FhQTCIaQs`,
                          layoutId: `FhQTCIaQs`,
                          LkF37SPSL: `2016 – 2018`,
                          PKW0WF81w: `Studio Orbit`,
                          style: { width: `100%` },
                          variant: `jwXtXigQo`,
                          wEubQ5Rgj: `Dallas`,
                          width: `100%`,
                          Xh_EsYKat: `UI/UX Designer`,
                          ...ho(
                            {
                              GsDxk_3Ju: { variant: `dk0rLLXb2` },
                              nTqkcZrXm: { variant: `dk0rLLXb2` },
                            },
                            p,
                            y
                          ),
                        }),
                      }),
                    }),
                    g(W, {
                      height: 38,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 272) - 0 - 254) / 2 + 152 + 64),
                      ...ho(
                        {
                          GsDxk_3Ju: {
                            y: (s?.y || 0) + 0 + (((s?.height || 200) - 0 - 254) / 2 + 152 + 64),
                          },
                          nTqkcZrXm: {
                            width: `calc(${s?.width || `100vw`} - 40px)`,
                            y: (s?.y || 0) + 0 + (((s?.height || 570.5) - 0 - 254) / 2 + 152 + 64),
                          },
                        },
                        p,
                        y
                      ),
                      children: g(V, {
                        className: `framer-8kbyx4-container`,
                        layoutDependency: w,
                        layoutId: `vk_qsAsf0-container`,
                        nodeId: `vk_qsAsf0`,
                        rendersWithMotion: !0,
                        scopeId: `RV9z89wz3`,
                        children: g(po, {
                          height: `100%`,
                          id: `vk_qsAsf0`,
                          layoutId: `vk_qsAsf0`,
                          LkF37SPSL: `2014 – 2016`,
                          PKW0WF81w: `Novaform Labs`,
                          style: { width: `100%` },
                          variant: `DVdht7Dg0`,
                          wEubQ5Rgj: `Kyoto`,
                          width: `100%`,
                          Xh_EsYKat: `Junior Designer`,
                          ...ho(
                            {
                              GsDxk_3Ju: { variant: `H6SNXfFLK` },
                              nTqkcZrXm: { variant: `H6SNXfFLK` },
                            },
                            p,
                            y
                          ),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Tw3Vd.framer-egsrnb, .framer-Tw3Vd .framer-egsrnb { display: block; }`,
          `.framer-Tw3Vd.framer-1drld19 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 1440px; }`,
          `.framer-Tw3Vd .framer-1gjgywn-container, .framer-Tw3Vd .framer-h9998f-container, .framer-Tw3Vd .framer-me3esw-container, .framer-Tw3Vd .framer-1whwcdw-container, .framer-Tw3Vd .framer-8kbyx4-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-Tw3Vd.framer-v-jyei0.framer-1drld19 { padding: 0px 20px 0px 20px; width: 390px; }`,
          `.framer-Tw3Vd.framer-v-1o8zmie.framer-1drld19 { width: 390px; }`,
        ],
        `framer-Tw3Vd`
      )),
      (Do = Eo),
      (Eo.displayName = `Experience List`),
      (Eo.defaultProps = { height: 272, width: 1440 }),
      I(Eo, {
        variant: {
          options: [`xn79ShhRM`, `nTqkcZrXm`, `GsDxk_3Ju`],
          optionTitles: [`Primary`, `Secondary`, `Tertiary`],
          title: `Variant`,
          type: H.Enum,
        },
      }),
      L(Eo, [{ explicitInter: !0, fonts: [] }, ...go], { supportsExplicitInterCodegen: !0 }));
  }),
  ko,
  Ao,
  jo,
  Mo = e(() => {
    (R(),
      ve.loadFonts([
        `FR;InterDisplay-Medium`,
        `FR;InterDisplay-Bold`,
        `FR;InterDisplay-BoldItalic`,
        `FR;InterDisplay-MediumItalic`,
      ]),
      (ko = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/F3kdpd2N0cToWV5huaZjjgM.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/r0mv3NegmA0akcQsNFotG32Las.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/8yoV9pUxquX7VD7ZXlNYKQmkmk.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/I11LrmuBDQZweplJ62KkVsklU5Y.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/UjFZPDy3qGuDktQM4q9CxhKfIa8.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/8exwVHJy2DhJ4N5prYlVMrEKmQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/UTeedEK21hO5jDxEUldzdScUqpg.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/Ig8B8nzy11hzIWEIYnkg91sofjo.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/n9CXKI3tsmCPeC6MCT9NziShSuQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/qctQFoJqJ9aIbRSIp0AhCQpFxn8.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/fXvVh2JeZlehNcEhKHpHH0frSl0.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/7pScaNeb6M7n2HF2jKemDqzCIr4.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/qS4UjQYyATcVV9rODk0Zx9KhkY8.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/VfD2n20yM7v0hrUEBHEyafsmMBY.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/4oIO9fB59bn3cKFWz7piCj28z9s.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/TBccIZR9kIpkRce5i9ATfPp7a4.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/F5Lmfd3fCAu7TwiYbI4DLWw4ks.woff2`,
              weight: `700`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/A5P4nkYCJlLQxGxaS1lzG8PNSc.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/vuPfygr1n1zYxscvWgGI8hRf3LE.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/jplzYzqFHXreyADwk9yrkQlWQ.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/sSIKP2TfVPvfK7YVENPE5H87A.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/gawbeo7iEJSRZ4kcrh6YRrU8o.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/xSzma7KIWAdctStaX171ey3lams.woff2`,
              weight: `500`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/8E92vrr3j1gDqzepmeSbD2u0JxA.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (Ao = [
        `.framer-5HwXn .framer-styles-preset-sng7in:not(.rich-text-wrapper), .framer-5HwXn .framer-styles-preset-sng7in.rich-text-wrapper h3 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'ss02' on, 'ss03' on, 'ss07' on, 'cv06' on, 'cv05' on, 'cv08' on, 'cv10' on, 'cv12' on, 'cv04' on, 'cv03' on, 'cv02' on, 'cv01' on, 'cv13' on; --framer-font-size: 49px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.8px; --framer-line-height: 50.6px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1439px) and (min-width: 1200px) { .framer-5HwXn .framer-styles-preset-sng7in:not(.rich-text-wrapper), .framer-5HwXn .framer-styles-preset-sng7in.rich-text-wrapper h3 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'ss02' on, 'ss03' on, 'ss07' on, 'cv06' on, 'cv05' on, 'cv08' on, 'cv10' on, 'cv12' on, 'cv04' on, 'cv03' on, 'cv02' on, 'cv01' on, 'cv13' on; --framer-font-size: 49px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.8px; --framer-line-height: 50.6px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-5HwXn .framer-styles-preset-sng7in:not(.rich-text-wrapper), .framer-5HwXn .framer-styles-preset-sng7in.rich-text-wrapper h3 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'ss02' on, 'ss03' on, 'ss07' on, 'cv06' on, 'cv05' on, 'cv08' on, 'cv10' on, 'cv12' on, 'cv04' on, 'cv03' on, 'cv02' on, 'cv01' on, 'cv13' on; --framer-font-size: 31px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.8px; --framer-line-height: 33.6px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-5HwXn .framer-styles-preset-sng7in:not(.rich-text-wrapper), .framer-5HwXn .framer-styles-preset-sng7in.rich-text-wrapper h3 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'ss02' on, 'ss03' on, 'ss07' on, 'cv06' on, 'cv05' on, 'cv08' on, 'cv10' on, 'cv12' on, 'cv04' on, 'cv03' on, 'cv02' on, 'cv01' on, 'cv13' on; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.8px; --framer-line-height: 24.6px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (jo = `framer-5HwXn`));
  });
function No(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Po,
  Fo,
  Io,
  Lo,
  Ro,
  zo,
  Bo,
  Vo,
  Ho,
  Uo,
  Wo,
  Go,
  Ko,
  qo,
  Jo,
  Yo,
  Xo,
  Zo,
  Qo,
  $o,
  es,
  ts = e(() => {
    (S(),
      R(),
      M(),
      r(),
      Mo(),
      Xe(),
      yt(),
      at(),
      (Po = ne(ae(F))),
      (Fo = { YDI2v_LhN: { hover: !0 } }),
      (Io = [`YDI2v_LhN`, `D_OALAPaM`, `dXXWsfsWX`]),
      (Lo = `framer-LH0Zp`),
      (Ro = {
        D_OALAPaM: `framer-v-1jruvjq`,
        dXXWsfsWX: `framer-v-9kjq5i`,
        YDI2v_LhN: `framer-v-1tfi2tl`,
      }),
      (zo = { damping: 50, delay: 0, mass: 1, stiffness: 200, type: `spring` }),
      (Bo = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Vo = (e, t) => `translateY(-50%) ${t}`),
      (Ho = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.2, delay: 0.1, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Uo = {
        opacity: 1,
        rotate: 0,
        rotateX: 90,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Wo = (e, t) => `translate(-50%, -50%) ${t}`),
      (Go = (e, t, n) => {
        if (typeof e != `string`) return ``;
        let r = new Date(e);
        if (isNaN(r.getTime())) return ``;
        let i = `en-US`;
        try {
          return r.toLocaleString(n || i, t);
        } catch {
          return r.toLocaleString(i, t);
        }
      }),
      (Ko = { dateStyle: `long`, timeZone: `UTC` }),
      (qo = (e, t) => Go(e, Ko, t)),
      (Jo = ({ value: e, children: t }) => {
        let n = c(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return g(O.Provider, { value: i, children: t });
      }),
      (Yo = E.create(s)),
      (Xo = { M: `D_OALAPaM`, S: `dXXWsfsWX`, XL: `YDI2v_LhN` }),
      (Zo = ({
        bodyText: e,
        category: t,
        date: n,
        height: r,
        id: i,
        image1: a,
        image2: o,
        title: s,
        width: c,
        ...l
      }) => ({
        ...l,
        a052i7pNy: s ?? l.a052i7pNy ?? `Gregory Lalle`,
        hQbwNsuVj: t ?? l.hQbwNsuVj ?? `Art Direction`,
        nf6LNDsi3: a ??
          l.nf6LNDsi3 ?? {
            alt: ``,
            pixelHeight: 1024,
            pixelWidth: 1024,
            src: `https://framerusercontent.com/images/7uG4BhwVaiwETVmXbIX3b81RuRw.png`,
            srcSet: `https://framerusercontent.com/images/7uG4BhwVaiwETVmXbIX3b81RuRw.png?scale-down-to=512 512w,https://framerusercontent.com/images/7uG4BhwVaiwETVmXbIX3b81RuRw.png 1024w`,
          },
        s3OJlGzku:
          e ??
          l.s3OJlGzku ??
          `Good design is not just about structure—it’s about the emotional weight of space, rhythm, and silence.`,
        tYkTHyPu6: o ??
          l.tYkTHyPu6 ?? {
            alt: ``,
            pixelHeight: 1280,
            pixelWidth: 896,
            src: `https://framerusercontent.com/images/ugBwEuej7fhC1teaxb2HaUX4bGw.png`,
            srcSet: `https://framerusercontent.com/images/ugBwEuej7fhC1teaxb2HaUX4bGw.png?scale-down-to=1024 716w,https://framerusercontent.com/images/ugBwEuej7fhC1teaxb2HaUX4bGw.png 896w`,
          },
        variant: Xo[l.variant] ?? l.variant ?? `YDI2v_LhN`,
        Zh9x85h4z: n ?? l.Zh9x85h4z ?? `2025-01-01T00:00:00.000Z`,
      })),
      (Qo = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($o = ue(
        p(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = h(),
            { activeLocale: a, setLocale: o } = he(),
            c = De(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              hQbwNsuVj: p,
              nf6LNDsi3: m,
              tYkTHyPu6: _,
              a052i7pNy: v,
              Zh9x85h4z: y,
              s3OJlGzku: S,
              ...ee
            } = Zo(e),
            {
              baseVariant: te,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: T,
              gestureVariant: D,
              isLoading: O,
              setGestureState: k,
              setVariant: A,
              variants: M,
            } = Ie({
              cycleOrder: Io,
              defaultVariant: `YDI2v_LhN`,
              enabledGestures: Fo,
              ref: r,
              variant: f,
              variantClassNames: Ro,
            }),
            P = Qo(e, M),
            ne = N(Lo, He, jo, bt, it),
            I = () => te !== `dXXWsfsWX`,
            L = () => D === `YDI2v_LhN-hover` || te === `D_OALAPaM`,
            R = qo(y, me());
          return g(j, {
            id: d ?? i,
            children: g(Yo, {
              animate: M,
              initial: !1,
              children: g(Jo, {
                value: zo,
                children: g(E.div, {
                  ...ee,
                  ...T,
                  className: N(ne, `framer-1tfi2tl`, u, C),
                  'data-framer-name': `XL`,
                  layoutDependency: P,
                  layoutId: `YDI2v_LhN`,
                  ref: r,
                  style: {
                    '--border-bottom-width': `0px`,
                    '--border-color': `rgba(0, 0, 0, 0)`,
                    '--border-left-width': `0px`,
                    '--border-right-width': `0px`,
                    '--border-style': `solid`,
                    '--border-top-width': `0px`,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    ...l,
                  },
                  variants: {
                    'YDI2v_LhN-hover': {
                      '--border-bottom-width': `0px`,
                      '--border-left-width': `0px`,
                      '--border-right-width': `0px`,
                      '--border-top-width': `0px`,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    },
                    dXXWsfsWX: {
                      '--border-bottom-width': `1px`,
                      '--border-color': `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`,
                      '--border-left-width': `1px`,
                      '--border-right-width': `1px`,
                      '--border-style': `solid`,
                      '--border-top-width': `1px`,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    },
                  },
                  ...No(
                    {
                      'YDI2v_LhN-hover': { 'data-framer-name': void 0 },
                      D_OALAPaM: { 'data-framer-name': `M` },
                      dXXWsfsWX: { 'data-border': !0, 'data-framer-name': `S` },
                    },
                    te,
                    D
                  ),
                  children: x(E.div, {
                    className: `framer-1hyyti1`,
                    'data-framer-name': `Container`,
                    layoutDependency: P,
                    layoutId: `RUyp17JVL`,
                    children: [
                      I() &&
                        g(E.div, {
                          className: `framer-tyresx`,
                          'data-framer-name': `Left`,
                          layoutDependency: P,
                          layoutId: `aChkwzCBg`,
                          children: g(Ae, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: K(
                                (c?.y || 0) +
                                  0 +
                                  (((c?.height || 600) - 0 - 600) / 2 + 0 + 0) +
                                  0 +
                                  0 +
                                  0
                              ),
                              pixelHeight: 1024,
                              pixelWidth: 1024,
                              sizes: `max(${c?.width || `100vw`} / 2, 1px)`,
                              ...Bo(m),
                            },
                            className: `framer-1x8ds5f`,
                            'data-framer-name': `Image/Video`,
                            layoutDependency: P,
                            layoutId: `uWfPdgVas`,
                            style: {
                              borderBottomLeftRadius: 10,
                              borderBottomRightRadius: 10,
                              borderTopLeftRadius: 10,
                              borderTopRightRadius: 10,
                            },
                            children: x(E.div, {
                              className: `framer-1biedfd`,
                              'data-framer-name': `Banner`,
                              layoutDependency: P,
                              layoutId: `x14lCQHiJ`,
                              style: { opacity: 0 },
                              transformTemplate: Vo,
                              variants: {
                                'YDI2v_LhN-hover': { opacity: 1 },
                                D_OALAPaM: { opacity: 1 },
                              },
                              children: [
                                L() &&
                                  g(Po, {
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    animate: Ho,
                                    children: g(s, {
                                      children: g(E.p, {
                                        className: `framer-styles-preset-izlnn8`,
                                        'data-styles-preset': `eqDmnbQxL`,
                                        children: `Art Direction`,
                                      }),
                                    }),
                                    className: `framer-1nsfiem`,
                                    'data-framer-appear-id': `1nsfiem`,
                                    'data-framer-name': `Text`,
                                    fonts: [`Inter`],
                                    initial: Uo,
                                    layoutDependency: P,
                                    layoutId: `P6E_isNUS`,
                                    optimized: !0,
                                    style: { '--framer-paragraph-spacing': `0px` },
                                    text: p,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                g(E.div, {
                                  className: `framer-y7727y`,
                                  'data-framer-name': `Filler`,
                                  layoutDependency: P,
                                  layoutId: `RnUPdCTNe`,
                                  style: {
                                    backgroundColor: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                  },
                                }),
                              ],
                            }),
                          }),
                        }),
                      x(E.div, {
                        className: `framer-1la49gs`,
                        'data-framer-name': `Right`,
                        layoutDependency: P,
                        layoutId: `B7KcwBFTR`,
                        style: {
                          backgroundColor: `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                        },
                        children: [
                          x(E.div, {
                            className: `framer-1irlp97`,
                            'data-framer-name': `Top`,
                            layoutDependency: P,
                            layoutId: `v9QEHURfF`,
                            children: [
                              g(E.div, {
                                className: `framer-lo8pqs`,
                                'data-framer-name': `Image`,
                                layoutDependency: P,
                                layoutId: `g5MzUAlTu`,
                                style: {
                                  borderBottomLeftRadius: 10,
                                  borderBottomRightRadius: 10,
                                  borderTopLeftRadius: 10,
                                  borderTopRightRadius: 10,
                                },
                                children: g(Ae, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: K(
                                      (c?.y || 0) +
                                        0 +
                                        (((c?.height || 600) - 0 - 600) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        3 +
                                        0 +
                                        0 +
                                        0
                                    ),
                                    sizes: `215px`,
                                    ...Bo(_),
                                  },
                                  className: `framer-u11he7`,
                                  'data-framer-name': `Fill Your Image Here`,
                                  layoutDependency: P,
                                  layoutId: `tjpNkNCbu`,
                                  style: { scale: 1 },
                                  variants: { 'YDI2v_LhN-hover': { scale: 1.2 } },
                                  ...No(
                                    {
                                      dXXWsfsWX: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          loading: K(
                                            (c?.y || 0) +
                                              0 +
                                              (((c?.height || 200) - 0 - 600) / 2 + 0 + 0) +
                                              0 +
                                              0 +
                                              0 +
                                              3 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          sizes: `215px`,
                                          ...Bo(_),
                                        },
                                      },
                                    },
                                    te,
                                    D
                                  ),
                                }),
                              }),
                              g(F, {
                                __fromCanvasComponent: !0,
                                children: g(s, {
                                  children: g(E.h3, {
                                    className: `framer-styles-preset-sng7in`,
                                    'data-styles-preset': `bLxN69a46`,
                                    style: { '--framer-text-alignment': `center` },
                                    children: `Gregory Lalle`,
                                  }),
                                }),
                                className: `framer-2dlte1`,
                                'data-framer-name': `Title`,
                                fonts: [`Inter`],
                                layoutDependency: P,
                                layoutId: `NDxgJ8nae`,
                                style: { '--framer-paragraph-spacing': `0px` },
                                text: v,
                                transformTemplate: Wo,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          x(E.div, {
                            className: `framer-1lv5936`,
                            'data-framer-name': `Bottom`,
                            layoutDependency: P,
                            layoutId: `d4nhTJuak`,
                            children: [
                              g(E.div, {
                                className: `framer-qtkpwo`,
                                'data-framer-name': `Date`,
                                layoutDependency: P,
                                layoutId: `LRxiKtvG7`,
                                children: g(F, {
                                  __fromCanvasComponent: !0,
                                  children: g(s, {
                                    children: g(E.p, {
                                      className: `framer-styles-preset-14w8e6o`,
                                      'data-styles-preset': `FsS03h6Vk`,
                                      children: `January 1, 2025`,
                                    }),
                                  }),
                                  className: `framer-i58t8s`,
                                  'data-framer-name': `Text`,
                                  fonts: [`Inter`],
                                  layoutDependency: P,
                                  layoutId: `xX3Q6ZU5K`,
                                  style: { '--framer-paragraph-spacing': `0px` },
                                  text: R,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              g(E.div, {
                                className: `framer-1p7qz20`,
                                'data-framer-name': `Body Text`,
                                layoutDependency: P,
                                layoutId: `TjnWgKT9B`,
                                children: g(F, {
                                  __fromCanvasComponent: !0,
                                  children: g(s, {
                                    children: g(E.p, {
                                      className: `framer-styles-preset-8vm16z`,
                                      'data-styles-preset': `uDh9bONtj`,
                                      style: {
                                        '--framer-text-color': `var(--extracted-r6o4lv, var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153)))`,
                                      },
                                      children: `We're all about taking a 360-degree approach, \u2028\u2028bringing all our services under the same umbrella to create communication.`,
                                    }),
                                  }),
                                  className: `framer-10k9x76`,
                                  'data-framer-name': `Text`,
                                  fonts: [`Inter`],
                                  layoutDependency: P,
                                  layoutId: `yO6HWbJWD`,
                                  style: {
                                    '--extracted-r6o4lv': `var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153))`,
                                    '--framer-paragraph-spacing': `0px`,
                                  },
                                  text: S,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-LH0Zp.framer-zpgpeq, .framer-LH0Zp .framer-zpgpeq { display: block; }`,
          `.framer-LH0Zp.framer-1tfi2tl { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1392px; }`,
          `.framer-LH0Zp .framer-1hyyti1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-LH0Zp .framer-tyresx { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: 600px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-LH0Zp .framer-1x8ds5f { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-LH0Zp .framer-1biedfd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 300px; height: min-content; justify-content: center; left: 0px; min-height: 24px; overflow: hidden; padding: 0px; position: absolute; top: 50%; width: 100%; z-index: 1; }`,
          `.framer-LH0Zp .framer-1nsfiem { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-LH0Zp .framer-y7727y { flex: none; height: 1px; left: 0px; overflow: visible; position: absolute; right: 0px; top: calc(50.00000000000002% - 1px / 2); }`,
          `.framer-LH0Zp .framer-1la49gs { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 110px; height: auto; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-LH0Zp .framer-1irlp97 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-LH0Zp .framer-lo8pqs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-LH0Zp .framer-u11he7 { flex: none; height: 226px; position: relative; width: 215px; }`,
          `.framer-LH0Zp .framer-2dlte1 { flex: none; height: auto; left: 50%; mix-blend-mode: difference; position: absolute; top: 54%; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-LH0Zp .framer-1lv5936 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 24px 40px 24px; position: relative; width: 100%; }`,
          `.framer-LH0Zp .framer-qtkpwo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 124px; height: min-content; justify-content: center; max-width: 300px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-LH0Zp .framer-i58t8s { flex: 1 0 0px; height: auto; max-width: 312px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-LH0Zp .framer-1p7qz20 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 320px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-LH0Zp .framer-10k9x76 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-LH0Zp.framer-v-1jruvjq.framer-1tfi2tl { cursor: unset; width: 810px; }`,
          `.framer-LH0Zp.framer-v-1jruvjq .framer-1biedfd { min-height: unset; }`,
          `.framer-LH0Zp.framer-v-1jruvjq .framer-1nsfiem, .framer-LH0Zp.framer-v-1tfi2tl.hover .framer-1nsfiem { order: 1; }`,
          `.framer-LH0Zp.framer-v-1jruvjq .framer-y7727y { height: 100%; order: 0; top: calc(50.00000000000002% - 100% / 2); }`,
          `.framer-LH0Zp.framer-v-9kjq5i.framer-1tfi2tl { cursor: unset; width: 390px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-LH0Zp.framer-v-9kjq5i .framer-1hyyti1 { flex-direction: column; }`,
          `.framer-LH0Zp.framer-v-9kjq5i .framer-1la49gs { align-self: unset; flex: none; height: 600px; width: 100%; }`,
          `.framer-LH0Zp.framer-v-1tfi2tl.hover .framer-1biedfd { min-height: unset; order: 0; }`,
          `.framer-LH0Zp.framer-v-1tfi2tl.hover .framer-y7727y { height: 24px; order: 0; top: calc(50.00000000000002% - 24px / 2); }`,
          ...We,
          ...Ao,
          ...Ze,
          ...vt,
          `.framer-LH0Zp[data-border="true"]::after, .framer-LH0Zp [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-LH0Zp`
      )),
      (es = $o),
      ($o.displayName = `Article Card`),
      ($o.defaultProps = { height: 600, width: 1392 }),
      I($o, {
        variant: {
          options: [`YDI2v_LhN`, `D_OALAPaM`, `dXXWsfsWX`],
          optionTitles: [`XL`, `M`, `S`],
          title: `Variant`,
          type: H.Enum,
        },
        hQbwNsuVj: {
          defaultValue: `Art Direction`,
          displayTextArea: !1,
          title: `Category`,
          type: H.String,
        },
        nf6LNDsi3: {
          __defaultAssetReference: `data:framer/asset-reference,7uG4BhwVaiwETVmXbIX3b81RuRw.png?originalFilename=visualelectric-1745309924512.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,7uG4BhwVaiwETVmXbIX3b81RuRw.png?originalFilename=visualelectric-1745309924512.png&preferredSize=auto`,
          },
          title: `Image 1`,
          type: H.ResponsiveImage,
        },
        tYkTHyPu6: {
          __defaultAssetReference: `data:framer/asset-reference,ugBwEuej7fhC1teaxb2HaUX4bGw.png?originalFilename=visualelectric-1743060585833.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,ugBwEuej7fhC1teaxb2HaUX4bGw.png?originalFilename=visualelectric-1743060585833.png&preferredSize=auto`,
          },
          title: `Image 2`,
          type: H.ResponsiveImage,
        },
        a052i7pNy: {
          defaultValue: `Gregory Lalle`,
          displayTextArea: !1,
          title: `Title`,
          type: H.String,
        },
        Zh9x85h4z: { defaultValue: `2025-01-01T00:00:00.000Z`, title: `Date`, type: H.Date },
        s3OJlGzku: {
          defaultValue: `Good design is not just about structure—it’s about the emotional weight of space, rhythm, and silence.`,
          description: ``,
          displayTextArea: !0,
          title: `Body Text`,
          type: H.String,
        },
      }),
      L(
        $o,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...B(Ke),
          ...B(ko),
          ...B(ze),
          ...B(xt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  ns = e(() => {
    fn();
  });
function rs({ type: e, url: t, html: n, zoom: r, radius: i, border: a, style: o = {} }) {
  return e === `url` && t
    ? g(as, { url: t, zoom: r, radius: i, border: a, style: o })
    : e === `html` && n
      ? g(ss, { html: n, style: o })
      : g(is, { style: o });
}
function is({ style: e }) {
  return g(`div`, {
    style: { minHeight: ms(e), ...Bt, overflow: `hidden`, ...e },
    children: g(`div`, {
      style: _s,
      children: `To embed a website or widget, add it to the properties\xA0panel.`,
    }),
  });
}
function as({ url: e, zoom: t, radius: n, border: r, style: i }) {
  let a = !i.height;
  /[a-z]+:\/\//.test(e) || (e = `https://` + e);
  let s = on(),
    [c, l] = d(s ? void 0 : !1);
  return (
    o(() => {
      if (!s) return;
      let t = !0;
      l(void 0);
      async function n() {
        let n = await fetch(
          `https://api.framer.com/functions/check-iframe-url?url=` + encodeURIComponent(e)
        );
        if (n.status == 200) {
          let { isBlocked: e } = await n.json();
          t && l(e);
        } else {
          let e = await n.text();
          (console.error(e), l(Error(`This site can’t be reached.`)));
        }
      }
      return (
        n().catch((e) => {
          (console.error(e), l(e));
        }),
        () => {
          t = !1;
        }
      );
    }, [e]),
    s && a
      ? g(ps, { message: `URL embeds do not support auto height.`, style: i })
      : e.startsWith(`https://`)
        ? c === void 0
          ? g(fs, {})
          : c instanceof Error
            ? g(ps, { message: c.message, style: i })
            : c === !0
              ? g(ps, { message: `Can’t embed ${e} due to its content security policy.`, style: i })
              : g(`iframe`, {
                  src: e,
                  style: {
                    ...hs,
                    ...i,
                    ...r,
                    zoom: t,
                    borderRadius: n,
                    transformOrigin: `top center`,
                  },
                  loading: `lazy`,
                  fetchPriority: s ? `low` : `auto`,
                  referrerPolicy: `no-referrer`,
                  sandbox: os(s),
                })
        : g(ps, { message: `Unsupported protocol.`, style: i })
  );
}
function os(e) {
  let t = [`allow-same-origin`, `allow-scripts`];
  return (
    e ||
      t.push(
        `allow-downloads`,
        `allow-forms`,
        `allow-modals`,
        `allow-orientation-lock`,
        `allow-pointer-lock`,
        `allow-popups`,
        `allow-popups-to-escape-sandbox`,
        `allow-presentation`,
        `allow-storage-access-by-user-activation`,
        `allow-top-navigation-by-user-activation`
      ),
    t.join(` `)
  );
}
function ss({ html: e, ...t }) {
  if (e.includes(`<\/script>`)) {
    let n = e.includes(`</spline-viewer>`),
      r = e.includes(`<!-- framer-direct-embed -->`);
    return g(n || r ? ls : cs, { html: e, ...t });
  }
  return g(us, { html: e, ...t });
}
function cs({ html: e, style: t }) {
  let n = b(),
    [r, i] = d(0);
  o(() => {
    let e = n.current?.contentWindow;
    function t(t) {
      if (t.source !== e) return;
      let n = t.data;
      if (typeof n != `object` || !n) return;
      let r = n.embedHeight;
      typeof r == `number` && i(r);
    }
    return (
      a.addEventListener(`message`, t),
      e?.postMessage(`getEmbedHeight`, `*`),
      () => {
        a.removeEventListener(`message`, t);
      }
    );
  }, []);
  let s = `
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${e}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`,
    c = { ...hs, ...t };
  return (t.height || (c.height = r + `px`), g(`iframe`, { ref: n, style: c, srcDoc: s }));
}
function ls({ html: e, style: t }) {
  let n = b();
  return (
    o(() => {
      let t = n.current;
      if (t)
        return (
          (t.innerHTML = e),
          ds(t),
          () => {
            t.innerHTML = ``;
          }
        );
    }, [e]),
    g(`div`, { ref: n, style: { ...gs, ...t } })
  );
}
function us({ html: e, style: t }) {
  return g(`div`, { style: { ...gs, ...t }, dangerouslySetInnerHTML: { __html: e } });
}
function ds(e) {
  if (e instanceof Element && e.tagName === `SCRIPT`) {
    let t = document.createElement(`script`);
    t.text = e.innerHTML;
    for (let { name: n, value: r } of e.attributes) t.setAttribute(n, r);
    e.parentElement.replaceChild(t, e);
  } else for (let t of e.childNodes) ds(t);
}
function fs() {
  return g(`div`, {
    className: `framerInternalUI-componentPlaceholder`,
    style: { ...zt, overflow: `hidden` },
    children: g(`div`, { style: _s, children: `Loading…` }),
  });
}
function ps({ message: e, style: t }) {
  return g(`div`, {
    className: `framerInternalUI-errorPlaceholder`,
    style: { minHeight: ms(t), ...zt, overflow: `hidden`, ...t },
    children: g(`div`, { style: _s, children: e }),
  });
}
function ms(e) {
  if (!e.height) return 200;
}
var hs,
  gs,
  _s,
  vs = e(() => {
    (t(),
      S(),
      r(),
      R(),
      ns(),
      I(rs, {
        type: {
          type: H.Enum,
          defaultValue: `url`,
          displaySegmentedControl: !0,
          options: [`url`, `html`],
          optionTitles: [`URL`, `HTML`],
        },
        url: {
          title: `URL`,
          type: H.String,
          description: `Some websites don’t support embedding.`,
          hidden(e) {
            return e.type !== `url`;
          },
        },
        html: {
          title: `HTML`,
          type: H.String,
          displayTextArea: !0,
          hidden(e) {
            return e.type !== `html`;
          },
        },
        border: {
          title: `Border`,
          type: H.Border,
          optional: !0,
          hidden(e) {
            return e.type !== `url`;
          },
        },
        radius: {
          type: H.BorderRadius,
          title: `Radius`,
          hidden(e) {
            return e.type !== `url`;
          },
        },
        zoom: {
          title: `Zoom`,
          defaultValue: 1,
          type: H.Number,
          hidden(e) {
            return e.type !== `url`;
          },
          min: 0.1,
          max: 1,
          step: 0.1,
          displayStepper: !0,
        },
      }),
      (hs = { width: `100%`, height: `100%`, border: `none` }),
      (gs = {
        width: `100%`,
        height: `100%`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (_s = { textAlign: `center`, minWidth: 140 }));
  }),
  ys,
  bs,
  xs,
  Ss,
  Cs,
  ws,
  Ts,
  Es,
  Ds,
  Os,
  ks,
  As,
  js = e(() => {
    (S(),
      R(),
      M(),
      r(),
      vs(),
      (ys = z(rs)),
      (bs = P(rs)),
      (xs = `framer-ftJha`),
      (Ss = { yXZsKtn6j: `framer-v-oynkpq` }),
      (Cs = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ws = ({ value: e, children: t }) => {
        let n = c(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return g(O.Provider, { value: i, children: t });
      }),
      (Ts = E.create(s)),
      (Es = { HTML: `html`, URL: `url` }),
      (Ds = ({ height: e, hTML: t, id: n, type: r, width: i, ...a }) => ({
        ...a,
        BA7jwhB7b:
          t ??
          a.BA7jwhB7b ??
          `<iframe 
  src="https://player.vimeo.com/video/315891633?autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0"
  frameborder="0" 
  allow="autoplay; fullscreen" 
  allowfullscreen 
  width="144%" 
  height="101%">
</iframe>
`,
        tuzgfJ02F: Es[r] ?? r ?? a.tuzgfJ02F ?? `html`,
      })),
      (Os = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ks = ue(
        p(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = h(),
            { activeLocale: a, setLocale: o } = he();
          De();
          let {
              style: s,
              className: c,
              layoutId: l,
              variant: u,
              tuzgfJ02F: d,
              BA7jwhB7b: f,
              ...p
            } = Ds(e),
            {
              baseVariant: m,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: S,
              isLoading: ee,
              setGestureState: te,
              setVariant: C,
              variants: w,
            } = Ie({ defaultVariant: `yXZsKtn6j`, ref: r, variant: u, variantClassNames: Ss }),
            T = Os(e, w),
            { activeVariantCallback: D, delay: O } = Ce(m);
          xe(m, {
            default: D(async (...e) => {
              await O(() => C(we, !0), 1500);
            }),
          });
          let k = N(xs);
          return g(j, {
            id: l ?? i,
            children: g(Ts, {
              animate: w,
              initial: !1,
              children: g(ws, {
                value: Cs,
                children: x(E.div, {
                  ...p,
                  ...y,
                  className: N(k, `framer-oynkpq`, c, _),
                  'data-framer-name': `Primary`,
                  'data-highlight': !0,
                  layoutDependency: T,
                  layoutId: `yXZsKtn6j`,
                  ref: r,
                  style: {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    ...s,
                  },
                  children: [
                    g(W, {
                      children: g(V, {
                        className: `framer-8f0ulg-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: T,
                        layoutId: `cOKDVduVk-container`,
                        nodeId: `cOKDVduVk`,
                        rendersWithMotion: !0,
                        scopeId: `wPQEBj6SF`,
                        children: g(rs, {
                          height: `100%`,
                          html: f,
                          id: `cOKDVduVk`,
                          layoutId: `cOKDVduVk`,
                          radius: `0px`,
                          style: { height: `100%`, width: `100%` },
                          type: d,
                          url: ``,
                          width: `100%`,
                          zoom: 1,
                        }),
                      }),
                    }),
                    g(E.div, {
                      className: `framer-sz7x46`,
                      'data-framer-name': `Cursor Preventer`,
                      layoutDependency: T,
                      layoutId: `jaQzlwJBv`,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-ftJha.framer-18i9yos, .framer-ftJha .framer-18i9yos { display: block; }`,
          `.framer-ftJha.framer-oynkpq { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 379px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 390px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-ftJha .framer-8f0ulg-container { flex: none; height: 101%; left: calc(50.10570824524315% - 144% / 2); position: absolute; top: calc(50.13192612137205% - 101.05540897097625% / 2); width: 144%; }`,
          `.framer-ftJha .framer-sz7x46 { flex: none; height: 101%; left: calc(49.89429175475689% - 145% / 2); overflow: hidden; position: absolute; top: calc(49.86807387862799% - 101% / 2); width: 145%; z-index: 1; }`,
        ],
        `framer-ftJha`
      )),
      (As = ks),
      (ks.displayName = `Embed Card`),
      (ks.defaultProps = { height: 379, width: 390 }),
      I(ks, {
        tuzgfJ02F: bs?.type && {
          ...bs.type,
          defaultValue: `html`,
          description: void 0,
          hidden: void 0,
          title: `Type`,
        },
        BA7jwhB7b: {
          defaultValue: `<iframe 
  src="https://player.vimeo.com/video/315891633?autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0"
  frameborder="0" 
  allow="autoplay; fullscreen" 
  allowfullscreen 
  width="144%" 
  height="101%">
</iframe>
`,
          displayTextArea: !0,
          title: `HTML`,
          type: H.String,
        },
      }),
      L(ks, [{ explicitInter: !0, fonts: [] }, ...ys], { supportsExplicitInterCodegen: !0 }));
  });
function Ms(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ns,
  Ps,
  Fs,
  Is,
  Ls,
  Rs,
  zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws,
  Gs,
  Ks = e(() => {
    (S(),
      R(),
      M(),
      r(),
      (Ns = [`e9mENscFv`, `D_1vjmCIs`]),
      (Ps = `framer-nNOB7`),
      (Fs = { D_1vjmCIs: `framer-v-1nom068`, e9mENscFv: `framer-v-1gvalky` }),
      (Is = (e, t) => {
        if (typeof e == `number` && Number.isFinite(e)) return Math.max(0, e) + `px`;
        if (typeof e != `string` || typeof t != `number`) return;
        let n = e.split(` `);
        return n[t] || n[t - 2] || n[0];
      }),
      (Ls = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Rs = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (zs = ({ value: e, children: t }) => {
        let n = c(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return g(O.Provider, { value: i, children: t });
      }),
      (Bs = E.create(s)),
      (Vs = { Empty: `D_1vjmCIs`, Primary: `e9mENscFv` }),
      (Hs = ({ height: e, id: t, image: n, radius: r, width: i, ...a }) => ({
        ...a,
        BDcLqNvJI: r ?? a.BDcLqNvJI ?? `0px`,
        MSyIX7cs8: n ??
          a.MSyIX7cs8 ?? {
            alt: ``,
            pixelHeight: 87,
            pixelWidth: 230,
            src: `https://framerusercontent.com/images/liDp6RqOmZpoiyriU2da9i9ZRNM.png`,
          },
        variant: Vs[a.variant] ?? a.variant ?? `e9mENscFv`,
      })),
      (Us = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ws = ue(
        p(function (e, t) {
          let n = b(null),
            r = t ?? n,
            i = h(),
            { activeLocale: a, setLocale: o } = he(),
            s = De(),
            {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              MSyIX7cs8: f,
              BDcLqNvJI: p,
              ...m
            } = Hs(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: ee,
              setGestureState: te,
              setVariant: C,
              variants: w,
            } = Ie({
              cycleOrder: Ns,
              defaultVariant: `e9mENscFv`,
              ref: r,
              variant: d,
              variantClassNames: Fs,
            }),
            T = Us(e, w),
            D = N(Ps),
            O = () => _ !== `D_1vjmCIs`;
          return g(j, {
            id: u ?? i,
            children: g(Bs, {
              animate: w,
              initial: !1,
              children: g(zs, {
                value: Ls,
                children: g(E.div, {
                  ...m,
                  ...x,
                  className: N(D, `framer-1gvalky`, l, v),
                  'data-border': !0,
                  'data-framer-name': `Primary`,
                  layoutDependency: T,
                  layoutId: `e9mENscFv`,
                  ref: r,
                  style: {
                    '--border-bottom-width': `1px`,
                    '--border-color': `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`,
                    '--border-left-width': `1px`,
                    '--border-right-width': `1px`,
                    '--border-style': `solid`,
                    '--border-top-width': `1px`,
                    borderBottomLeftRadius: Is(p, 3),
                    borderBottomRightRadius: Is(p, 2),
                    borderTopLeftRadius: Is(p, 0),
                    borderTopRightRadius: Is(p, 1),
                    ...c,
                  },
                  variants: {
                    D_1vjmCIs: {
                      '--border-bottom-width': `0px`,
                      '--border-left-width': `0px`,
                      '--border-right-width': `0px`,
                      '--border-top-width': `0px`,
                    },
                  },
                  ...Ms({ D_1vjmCIs: { 'data-framer-name': `Empty` } }, _, S),
                  children:
                    O() &&
                    g(Ae, {
                      background: {
                        alt: ``,
                        fit: `fit`,
                        loading: K(
                          (s?.y || 0) + 65 + (((s?.height || 151) - 130 - 21) / 2 + 0 + 0)
                        ),
                        pixelHeight: 87,
                        pixelWidth: 230,
                        sizes: `58px`,
                        ...Rs(f),
                        positionX: `center`,
                        positionY: `center`,
                      },
                      className: `framer-xrlw7a`,
                      layoutDependency: T,
                      layoutId: `LjpX0MZdD`,
                    }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-nNOB7.framer-10c3yw0, .framer-nNOB7 .framer-10c3yw0 { display: block; }`,
          `.framer-nNOB7.framer-1gvalky { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 65px 61px 65px 61px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-nNOB7 .framer-xrlw7a { flex: none; height: 21px; overflow: visible; position: relative; width: 58px; }`,
          `.framer-nNOB7.framer-v-1nom068.framer-1gvalky { min-height: 150px; min-width: 180px; }`,
          `.framer-nNOB7[data-border="true"]::after, .framer-nNOB7 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-nNOB7`
      )),
      (Gs = Ws),
      (Ws.displayName = `Logo Card`),
      (Ws.defaultProps = { height: 151, width: 180 }),
      I(Ws, {
        variant: {
          options: [`e9mENscFv`, `D_1vjmCIs`],
          optionTitles: [`Primary`, `Empty`],
          title: `Variant`,
          type: H.Enum,
        },
        MSyIX7cs8: {
          __defaultAssetReference: `data:framer/asset-reference,liDp6RqOmZpoiyriU2da9i9ZRNM.png?originalFilename=675d4cbc10e6dcb01229787c_Cairo+Logo+Black+2.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,liDp6RqOmZpoiyriU2da9i9ZRNM.png?originalFilename=675d4cbc10e6dcb01229787c_Cairo+Logo+Black+2.png&preferredSize=auto`,
          },
          title: `Image`,
          type: H.ResponsiveImage,
        },
        BDcLqNvJI: { defaultValue: `0px`, title: `Radius`, type: H.BorderRadius },
      }),
      L(Ws, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function qs(e) {
  let {
      text: t,
      duration: n,
      easing: r,
      fontSize: i,
      lineHeight: a,
      letterSpacing: s,
      paragraphAlign: c,
      transitionStartIndex: l,
      fontFamily: u,
      fontWeight: d,
    } = e,
    f = t.split(` `),
    p = f.length,
    m = b(null),
    { scrollYProgress: h } = C({ target: m, offset: [`start 0.75`, `start 0.15`] });
  o(() => {
    let e = document.createElement(`style`);
    return (
      e.appendChild(
        document.createTextNode(`
            @import url('https://fonts.googleapis.com/css2?family=${u.replace(/ /g, `+`)}:wght@400;500;700&display=swap');
        `)
      ),
      document.head.appendChild(e),
      () => {
        document.head.removeChild(e);
      }
    );
  }, [u]);
  let _ = 0;
  return g(`p`, {
    ref: m,
    style: {
      fontFamily: `${u}, sans-serif`,
      fontSize: `${i}px`,
      fontWeight: d,
      color: `#666666`,
      display: `flex`,
      flexWrap: `wrap`,
      lineHeight: `${a}px`,
      letterSpacing: `${s}px`,
      justifyContent: c,
      margin: 0,
    },
    children: f.map((e, t) => {
      let i = t / p,
        a = (t + 1) / p,
        o = e.length,
        s = _;
      return (
        (_ += o + 1),
        g(
          Ys,
          {
            word: e,
            progress: h,
            starting: i,
            ending: a,
            duration: n,
            easing: r,
            transitionStartIndex: l,
            currentCharacterIndex: s,
          },
          t
        )
      );
    }),
  });
}
var Js,
  Ys,
  Xs = e(() => {
    (S(),
      R(),
      M(),
      r(),
      (Js = ({
        char: e,
        start: t,
        end: n,
        progress: r,
        duration: i,
        easing: a,
        index: o,
        transitionStartIndex: s,
      }) => {
        let c = D(r, [t, n], [`#666666`, `#FFFFFF`]),
          l = o < s ? `#FFFFFF` : `#666666`;
        return g(E.span, {
          style: { color: o < s ? l : c },
          transition: { duration: i, ease: a },
          children: e,
        });
      }),
      (Ys = ({
        word: e,
        progress: t,
        starting: n,
        ending: r,
        duration: i,
        easing: a,
        transitionStartIndex: o,
        currentCharacterIndex: s,
      }) => {
        let c = e.split(``),
          l = e.length,
          u = (r - n) / l;
        return x(E.span, {
          children: [
            c.map((e, r) =>
              g(
                Js,
                {
                  char: e,
                  start: n + u * r,
                  end: n + u * (r + 1),
                  progress: t,
                  duration: i,
                  easing: a,
                  index: s + r,
                  transitionStartIndex: o,
                },
                r
              )
            ),
            `\xA0`,
          ],
        });
      }),
      I(qs, {
        text: { title: `Text`, type: H.String, defaultValue: `Hello Text` },
        fontFamily: { title: `Font Family`, type: H.String, defaultValue: `Urbanist` },
        fontSize: { title: `Font Size`, type: H.Number, defaultValue: 48, min: 10, max: 100 },
        fontWeight: {
          title: `Font Weight`,
          type: H.Enum,
          options: [`400`, `500`, `700`],
          optionTitles: [`Regular`, `Medium`, `Bold`],
          defaultValue: `400`,
        },
        lineHeight: { title: `Line Height`, type: H.Number, defaultValue: 60, min: 10, max: 100 },
        letterSpacing: {
          title: `Letter Spacing`,
          type: H.Number,
          defaultValue: -3,
          min: -10,
          max: 10,
        },
        paragraphAlign: {
          title: `Paragraph Align`,
          type: H.Enum,
          options: [`flex-start`, `center`, `flex-end`],
          optionTitles: [`Left`, `Center`, `Right`],
          defaultValue: `center`,
        },
        duration: {
          title: `Duration`,
          type: H.Number,
          defaultValue: 0.3,
          min: 0.1,
          max: 3,
          step: 0.1,
        },
        easing: {
          title: `Easing`,
          type: H.Enum,
          options: [`easeInOut`, `easeIn`, `easeOut`, `linear`],
          optionTitles: [`Ease In Out`, `Ease In`, `Ease Out`, `Linear`],
          defaultValue: `easeInOut`,
        },
        transitionStartIndex: {
          title: `Transition Start Index`,
          type: H.Number,
          defaultValue: 22,
          min: 0,
          max: 1e3,
        },
      }));
  });
function Zs(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function q(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Qs(e) {
  throw Error(`Unexpected value: ${e}`);
}
function $s(e, t, n, r) {
  (q(e >= t, e, `outside lower bound for`, r), q(e <= n, e, `outside upper bound for`, r));
}
function ec(e) {
  return typeof e == `string`;
}
function tc(e) {
  return Number.isFinite(e);
}
function nc(e) {
  return e === null;
}
function rc(e) {
  if (nc(e)) return 0;
  switch (e.type) {
    case H.Array:
      return 1;
    case H.Boolean:
      return 2;
    case H.Color:
      return 3;
    case H.Date:
      return 4;
    case H.Enum:
      return 5;
    case H.File:
      return 6;
    case H.ResponsiveImage:
      return 10;
    case H.Link:
      return 7;
    case H.Number:
      return 8;
    case H.Object:
      return 9;
    case H.RichText:
      return 11;
    case H.String:
      return 12;
    case H.VectorSetItem:
      return 13;
    default:
      Qs(e);
  }
}
function ic(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = qc.read(e);
    n.push(t);
  }
  return { type: H.Array, value: n };
}
function ac(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) qc.write(e, n);
}
function oc(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = qc.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function sc(e) {
  return { type: H.Boolean, value: e.readUint8() !== 0 };
}
function cc(e, t) {
  e.writeUint8(t.value ? 1 : 0);
}
function lc(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function uc(e) {
  return { type: H.Color, value: e.readString() };
}
function dc(e, t) {
  e.writeString(t.value);
}
function fc(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function pc(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: H.Date, value: n.toISOString() };
}
function mc(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function hc(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function gc(e) {
  return { type: H.Enum, value: e.readString() };
}
function _c(e, t) {
  e.writeString(t.value);
}
function vc(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function yc(e) {
  return { type: H.File, value: e.readString() };
}
function bc(e, t) {
  e.writeString(t.value);
}
function xc(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Sc(e) {
  return { type: H.Link, value: e.readJson() };
}
function Cc(e, t) {
  e.writeJson(t.value);
}
function wc(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Tc(e) {
  return { type: H.Number, value: e.readFloat64() };
}
function Ec(e, t) {
  e.writeFloat64(t.value);
}
function Dc(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Oc(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = qc.read(e);
  }
  return { type: H.Object, value: n };
}
function kc(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), qc.write(e, r));
}
function Ac(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = qc.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function jc(e) {
  return { type: H.ResponsiveImage, value: e.readJson() };
}
function Mc(e, t) {
  e.writeJson(t.value);
}
function Nc(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Pc(e) {
  let t = e.readInt8();
  if (t === 0) return { type: H.RichText, value: e.readUint32() };
  if (t === 1) return { type: H.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Fc(e, t) {
  if (tc(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (ec(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function Ic(e, t) {
  let n = e.value,
    r = t.value;
  if ((tc(n) && tc(r)) || (ec(n) && ec(r))) return n < r ? -1 : n > r ? 1 : 0;
  throw Error(`Invalid rich text pointer`);
}
function Lc(e) {
  return { type: H.String, value: e.readString() };
}
function Rc(e, t) {
  e.writeString(t.value);
}
function zc(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : r > i ? 1 : 0
  );
}
function Bc(e) {
  return { type: H.VectorSetItem, value: e.readUint32() };
}
function Vc(e, t) {
  e.writeUint32(t.value);
}
function Hc(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
async function Uc(e) {
  let t = Math.floor(vl * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function Wc(e, t) {
  let n = Kc(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await bl(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new xl(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function Gc(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function Kc(e) {
  q(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
var qc,
  Jc,
  Yc,
  Xc,
  Zc,
  Qc,
  $c,
  el,
  tl,
  nl,
  rl,
  J,
  il,
  al,
  ol,
  sl,
  cl,
  ll,
  ul,
  dl,
  fl,
  pl,
  ml,
  hl,
  gl,
  _l,
  vl,
  yl,
  bl,
  xl,
  Y,
  Sl,
  Cl,
  wl,
  Tl = e(() => {
    (t(),
      R(),
      (Jc = Object.create),
      (Yc = Object.defineProperty),
      (Xc = Object.getOwnPropertyDescriptor),
      (Zc = Object.getOwnPropertyNames),
      (Qc = Object.getPrototypeOf),
      ($c = Object.prototype.hasOwnProperty),
      (el = (e, t, n) =>
        t in e
          ? Yc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
          : (e[t] = n)),
      (tl = (e, t) =>
        function () {
          return (t || (0, e[Zc(e)[0]])((t = { exports: {} }).exports, t), t.exports);
        }),
      (nl = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of Zc(t))
            $c.call(e, i) ||
              i === n ||
              Yc(e, i, { get: () => t[i], enumerable: !(r = Xc(t, i)) || r.enumerable });
        return e;
      }),
      (rl = (e, t, n) => (
        (n = e == null ? {} : Jc(Qc(e))),
        nl(!t && e && e.__esModule ? n : Yc(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (J = (e, t, n) => el(e, typeof t == `symbol` ? t : t + ``, n)),
      (il = rl(
        tl({
          '../../../node_modules/dataloader/index.js'(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e)
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })()
      )),
      (al = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (ol = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = al.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return ((this.offset += e), t);
        }
        readUint16() {
          let e = al.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return ((this.offset += e), t);
        }
        readUint32() {
          let e = al.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return ((this.offset += e), t);
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = al.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return ((this.offset += e), t);
        }
        readInt8() {
          let e = al.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return ((this.offset += e), t);
        }
        readInt16() {
          let e = al.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return ((this.offset += e), t);
        }
        readInt32() {
          let e = al.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return ((this.offset += e), t);
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = al.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return ((this.offset += e), t);
        }
        readFloat32() {
          let e = al.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return ((this.offset += e), t);
        }
        readFloat64() {
          let e = al.Float64;
          this.ensureLength(e);
          let t = this.view.getFloat64(this.offset);
          return ((this.offset += e), t);
        }
        readBytes(e) {
          let t = this.offset,
            n = t + e,
            r = this.bytes.subarray(t, n);
          return ((this.offset = n), r);
        }
        readString() {
          let e = this.readUint32(),
            t = this.readBytes(e);
          return this.decoder.decode(t);
        }
        readJson() {
          let e = this.readString();
          return JSON.parse(e);
        }
        constructor(e) {
          ((this.bytes = e),
            J(this, `offset`, 0),
            J(this, `view`),
            J(this, `decoder`, new TextDecoder()),
            (this.view = Zs(this.bytes)));
        }
      }),
      a !== void 0 && a.requestIdleCallback,
      (sl = 1024),
      (cl = 1.5),
      (ll = (e) => 2 ** e - 1),
      (ul = (e) => -(2 ** (e - 1))),
      (dl = (e) => 2 ** (e - 1) - 1),
      (fl = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: ul(8),
        Int16: ul(16),
        Int32: ul(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (pl = {
        Uint8: ll(8),
        Uint16: ll(16),
        Uint32: ll(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: dl(8),
        Int16: dl(16),
        Int32: dl(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (ml = class {
        getOffset() {
          return this.offset;
        }
        slice(e = 0, t = this.offset) {
          return this.bytes.slice(e, t);
        }
        subarray(e = 0, t = this.offset) {
          return this.bytes.subarray(e, t);
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (this.offset + e <= t) return;
          let n = new Uint8Array(Math.ceil(t * cl) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = Zs(n)));
        }
        writeUint8(e) {
          $s(e, fl.Uint8, pl.Uint8, `Uint8`);
          let t = al.Uint8;
          (this.ensureLength(t), this.view.setUint8(this.offset, e), (this.offset += t));
        }
        writeUint16(e) {
          $s(e, fl.Uint16, pl.Uint16, `Uint16`);
          let t = al.Uint16;
          (this.ensureLength(t), this.view.setUint16(this.offset, e), (this.offset += t));
        }
        writeUint32(e) {
          $s(e, fl.Uint32, pl.Uint32, `Uint32`);
          let t = al.Uint32;
          (this.ensureLength(t), this.view.setUint32(this.offset, e), (this.offset += t));
        }
        writeUint64(e) {
          $s(e, fl.Uint64, pl.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          $s(e, fl.BigUint64, pl.BigUint64, `BigUint64`);
          let t = al.BigUint64;
          (this.ensureLength(t), this.view.setBigUint64(this.offset, e), (this.offset += t));
        }
        writeInt8(e) {
          $s(e, fl.Int8, pl.Int8, `Int8`);
          let t = al.Int8;
          (this.ensureLength(t), this.view.setInt8(this.offset, e), (this.offset += t));
        }
        writeInt16(e) {
          $s(e, fl.Int16, pl.Int16, `Int16`);
          let t = al.Int16;
          (this.ensureLength(t), this.view.setInt16(this.offset, e), (this.offset += t));
        }
        writeInt32(e) {
          $s(e, fl.Int32, pl.Int32, `Int32`);
          let t = al.Int32;
          (this.ensureLength(t), this.view.setInt32(this.offset, e), (this.offset += t));
        }
        writeInt64(e) {
          $s(e, fl.Int64, pl.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          $s(e, fl.BigInt64, pl.BigInt64, `BigInt64`);
          let t = al.BigInt64;
          (this.ensureLength(t), this.view.setBigInt64(this.offset, e), (this.offset += t));
        }
        writeFloat32(e) {
          let t = al.Float32;
          (this.ensureLength(t), this.view.setFloat32(this.offset, e), (this.offset += t));
        }
        writeFloat64(e) {
          let t = al.Float64;
          (this.ensureLength(t), this.view.setFloat64(this.offset, e), (this.offset += t));
        }
        writeBytes(e) {
          let t = e.length;
          (this.ensureLength(t), this.bytes.set(e, this.offset), (this.offset += t));
        }
        encodeString(e) {
          let t = this.encodedStrings.get(e);
          if (t) return t;
          let n = this.encoder.encode(e);
          return (this.encodedStrings.set(e, n), n);
        }
        writeString(e) {
          let t = this.encodeString(e),
            n = t.length;
          (this.writeUint32(n), this.writeBytes(t));
        }
        writeJson(e) {
          let t = JSON.stringify(e);
          this.writeString(t);
        }
        constructor() {
          (J(this, `offset`, 0),
            J(this, `bytes`, new Uint8Array(sl)),
            J(this, `view`, Zs(this.bytes)),
            J(this, `encoder`, new TextEncoder()),
            J(this, `encodedStrings`, new Map()));
        }
      }),
      (hl = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            q(tc(n), `Invalid chunkId`),
            q(tc(r), `Invalid offset`),
            q(tc(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          return new e(t.readUint16(), t.readUint32(), t.readUint32());
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (q(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          ((this.chunkId = e), (this.offset = t), (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return ic(e);
            case 2:
              return sc(e);
            case 3:
              return uc(e);
            case 4:
              return pc(e);
            case 5:
              return gc(e);
            case 6:
              return yc(e);
            case 7:
              return Sc(e);
            case 8:
              return Tc(e);
            case 9:
              return Oc(e);
            case 10:
              return jc(e);
            case 11:
              return Pc(e);
            case 12:
              return Lc(e);
            case 13:
              return Bc(e);
            default:
              Qs(t);
          }
        }),
          (e.write = function (e, t) {
            let n = rc(t);
            if ((e.writeUint8(n), !nc(t)))
              switch (t.type) {
                case H.Array:
                  return ac(e, t);
                case H.Boolean:
                  return cc(e, t);
                case H.Color:
                  return dc(e, t);
                case H.Date:
                  return mc(e, t);
                case H.Enum:
                  return _c(e, t);
                case H.File:
                  return bc(e, t);
                case H.Link:
                  return Cc(e, t);
                case H.Number:
                  return Ec(e, t);
                case H.Object:
                  return kc(e, t);
                case H.ResponsiveImage:
                  return Mc(e, t);
                case H.RichText:
                  return Fc(e, t);
                case H.VectorSetItem:
                  return Vc(e, t);
                case H.String:
                  return Rc(e, t);
                default:
                  Qs(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = rc(e),
              i = rc(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (nc(e) || nc(t)) return 0;
            switch (e.type) {
              case H.Array:
                return (q(t.type === H.Array), oc(e, t, n));
              case H.Boolean:
                return (q(t.type === H.Boolean), lc(e, t));
              case H.Color:
                return (q(t.type === H.Color), fc(e, t));
              case H.Date:
                return (q(t.type === H.Date), hc(e, t));
              case H.Enum:
                return (q(t.type === H.Enum), vc(e, t));
              case H.File:
                return (q(t.type === H.File), xc(e, t));
              case H.Link:
                return (q(t.type === H.Link), wc(e, t));
              case H.Number:
                return (q(t.type === H.Number), Dc(e, t));
              case H.Object:
                return (q(t.type === H.Object), Ac(e, t, n));
              case H.ResponsiveImage:
                return (q(t.type === H.ResponsiveImage), Nc(e, t));
              case H.RichText:
                return (q(t.type === H.RichText), Ic(e, t));
              case H.VectorSetItem:
                return (q(t.type === H.VectorSetItem), Hc(e, t));
              case H.String:
                return (q(t.type === H.String), zc(e, t, n));
              default:
                Qs(e);
            }
          }));
      })((qc ||= {})),
      (gl = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = qc.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static deserialize(t) {
          let n = new ol(t),
            r = n.readJson(),
            i = n.readUint8(),
            a = [];
          for (let e = 0; e < i; e++) {
            let e = n.readString();
            a.push(e);
          }
          let o = new e(a, { collation: r }),
            s = n.readUint32();
          for (let e = 0; e < s; e++) {
            let e = [];
            for (let t = 0; t < i; t++) {
              let t = qc.read(n);
              e.push(t);
            }
            let t = hl.read(n);
            o.entries.push({ values: e, pointer: t });
          }
          return o;
        }
        serialize() {
          let e = new ml();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(), e.writeUint32(this.entries.length), this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) qc.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          ((this.fieldNames = e), (this.options = t), J(this, `entries`, []));
        }
      }),
      (_l = 3),
      (vl = 250),
      (yl = [408, 429, 500, 502, 503, 504]),
      (bl = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!yl.includes(r.status) || ++n > _l) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > _l) throw e;
          }
          await Uc(n);
        }
      }),
      (xl = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((q(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = Gc(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((q(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = Gc(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          J(this, `chunks`, []);
        }
      }),
      (Y = class {
        async loadModel() {
          let [e] = await Wc(this.options.url, [this.options.range]);
          return (q(e, `Failed to load model`), gl.deserialize(e));
        }
        async getModel() {
          return (
            (this.modelPromise ??= this.loadModel()),
            (this.model ??= await this.modelPromise),
            this.model
          );
        }
        async lookupItems(e) {
          q(e.length === this.fields.length, `Invalid query length`);
          let t = await this.getModel(),
            n = e.reduce(
              (e, t, n) =>
                e.flatMap((e) => {
                  switch (t.type) {
                    case `All`:
                      return [e];
                    case `Equals`:
                      return this.queryEquals(e, t, n);
                    case `NotEquals`:
                      return this.queryNotEquals(e, t, n);
                    case `LessThan`:
                      return this.queryLessThan(e, t, n);
                    case `GreaterThan`:
                      return this.queryGreaterThan(e, t, n);
                    case `Contains`:
                      return this.queryContains(e, t, n);
                    case `StartsWith`:
                      return this.queryStartsWith(e, t, n);
                    case `EndsWith`:
                      return this.queryEndsWith(e, t, n);
                    default:
                      Qs(t);
                  }
                }),
              [t.entries]
            ),
            r = [];
          for (let e of n)
            for (let t of e) {
              let e = {};
              for (let n = 0; n < this.options.fieldNames.length; n++) {
                let r = this.options.fieldNames[n];
                e[r] = t.values[n];
              }
              r.push({ pointer: t.pointer.toString(), data: e });
            }
          return r;
        }
        queryEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = e.slice(r, i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryNotEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = [],
            o = e.slice(0, r);
          o.length > 0 && a.push(o);
          let s = e.slice(i + 1);
          return (s.length > 0 && a.push(s), a);
        }
        queryLessThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getRightMost(e, n, t.value),
              i = e.slice(0, r + 1);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getLeftMost(e, n, t.value),
            a = e.slice(0, i);
          return a.length > 0 ? [a] : [];
        }
        queryGreaterThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getLeftMost(e, n, t.value),
              i = e.slice(r);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getRightMost(e, n, t.value),
            a = e.slice(i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryContains(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== H.String || t.value?.type !== H.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.includes(r)
            );
          });
        }
        queryStartsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== H.String || t.value?.type !== H.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.startsWith(r)
            );
          });
        }
        queryEndsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== H.String || t.value?.type !== H.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.endsWith(r)
            );
          });
        }
        getLeftMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i; ) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            0 > qc.compare(o, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i; ) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            qc.compare(o, n, this.collation) > 0 ? (i = a) : (r = a + 1);
          }
          return i - 1;
        }
        findItems(e, t, n) {
          let r = [],
            i = 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a].values[t];
            if (!n(o)) {
              if (i < a) {
                let t = e.slice(i, a);
                r.push(t);
              }
              i = a + 1;
            }
          }
          if (i < e.length) {
            let t = e.slice(i);
            r.push(t);
          }
          return r;
        }
        constructor(e) {
          ((this.options = e),
            J(this, `schema`),
            J(this, `fields`),
            J(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            J(this, `modelPromise`),
            J(this, `model`),
            J(this, `collation`));
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            (q(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t), (this.fields = n), (this.collation = this.options.collation));
        }
      }),
      (Sl = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = qc.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), qc.write(e, n));
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          J(this, `fields`, new Map());
        }
      }),
      (Cl = class {
        scanItems() {
          return (
            (this.itemsPromise ??= bl(this.url).then(async (e) => {
              if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new ol(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = Sl.read(n),
                  i = n.getOffset() - e,
                  a = new hl(this.id, e, i).toString(),
                  o = { pointer: a, data: t.getData() };
                (this.itemLoader.prime(a, o), r.push(o));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          ((this.id = e),
            (this.url = t),
            J(this, `itemsPromise`),
            J(
              this,
              `itemLoader`,
              new il.default(async (e) => {
                let t = e.map((e) => {
                  let t = hl.fromString(e);
                  return { from: t.offset, to: t.offset + t.length };
                });
                return (await Wc(this.url, t)).map((t, n) => {
                  let r = new ol(t),
                    i = Sl.read(r),
                    a = e[n];
                  return (q(a, `Missing pointer`), { pointer: a, data: i.getData() });
                });
              })
            ));
        }
      }),
      (wl = class {
        async scanItems() {
          return (await Promise.all(this.chunks.map(async (e) => e.scanItems()))).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = hl.fromString(e),
                n = this.chunks[t.chunkId];
              return (q(n, `Missing chunk`), n.resolveItem(e));
            })
          );
        }
        compareItems(e, t) {
          let n = hl.fromString(e.pointer),
            r = hl.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return qc.compare(e, t, n);
        }
        constructor(e) {
          ((this.options = e),
            J(this, `id`),
            J(this, `schema`),
            J(this, `indexes`),
            J(this, `resolveRichText`),
            J(this, `resolveVectorSetItem`),
            J(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new Cl(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function El(e) {
  return typeof e == `object` && !!e && !_(e) && Al in e;
}
function Dl(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Ol(e) {
  let t = new Map();
  return (n) => {
    let r = t.get(n);
    if (r) return r;
    let i = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return te(s, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return te(be, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a] = n;
          for (let e of a) {
            let n = i[e];
            n && (i[e] = t(n));
          }
          let o = e[r];
          return (
            Dl(o, `Module not found`),
            El(o) && o.preload(),
            g(Se, { componentIdentifier: r, children: (e) => g(o, { ...e, ...i }) })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return te(e === `a` ? E.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, i), i);
  };
}
var kl,
  Al,
  jl,
  Ml = e(() => {
    (t(),
      S(),
      R(),
      r(),
      a !== void 0 && a.requestIdleCallback,
      (Al = `preload`),
      (jl =
        (((kl = jl || {})[(kl.Fragment = 1)] = `Fragment`),
        (kl[(kl.Link = 2)] = `Link`),
        (kl[(kl.Module = 3)] = `Module`),
        (kl[(kl.Tag = 4)] = `Tag`),
        (kl[(kl.Text = 5)] = `Text`),
        kl)));
  }),
  X,
  Nl,
  Pl,
  Fl,
  Il,
  Ll,
  Rl,
  zl,
  Z,
  Bl,
  Vl,
  Hl,
  Ul,
  Wl,
  Gl,
  Kl,
  ql,
  Jl,
  Yl,
  Xl,
  Zl,
  Ql,
  $l,
  eu,
  tu,
  nu,
  ru,
  iu,
  au,
  ou,
  su,
  cu,
  lu,
  uu,
  du,
  fu,
  pu,
  mu = e(() => {
    (R(),
      Tl(),
      Ml(),
      (X = {
        b3XlDEEmG: { isNullable: !0, type: H.String },
        b4tiQybAd: { isNullable: !0, type: H.String },
        createdAt: { isNullable: !0, type: H.Date },
        dAZk2Jaon: { isNullable: !0, type: H.String },
        dzQTLJWic: { isNullable: !0, type: H.String },
        F1KVBlC4y: { isNullable: !0, type: H.ResponsiveImage },
        Fv1GqGRfr: { isNullable: !0, type: H.String },
        gR2nhp5qm: { isNullable: !0, type: H.Link },
        id: { isNullable: !1, type: H.String },
        l2NBo7UWA: { isNullable: !0, type: H.ResponsiveImage },
        Na0xhxmje: { isNullable: !0, type: H.String },
        nEx8XU81L: { isNullable: !0, type: H.String },
        nextItemId: { isNullable: !0, type: H.String },
        previousItemId: { isNullable: !0, type: H.String },
        pXmRpf_lU: { isNullable: !0, type: H.ResponsiveImage },
        qfJQfvYBn: { isNullable: !0, type: H.ResponsiveImage },
        RrOlspu9Q: { isNullable: !0, type: H.String },
        slJKroNUw: { isNullable: !0, type: H.ResponsiveImage },
        SUlGM7z6N: { isNullable: !0, type: H.ResponsiveImage },
        updatedAt: { isNullable: !0, type: H.Date },
        vtA10ARAU: { isNullable: !0, type: H.Date },
        wQ1Rpjq3x: { isNullable: !0, type: H.String },
        XbJge9Fsp: { isNullable: !0, type: H.String },
        XG3otaDlZ: { isNullable: !0, type: H.String },
        XpFWjsiiE: { isNullable: !0, type: H.ResponsiveImage },
        y7hP7y7TX: { isNullable: !0, type: H.String },
        YBOUfrYdB: { isNullable: !0, type: H.String },
        YpT3cvwNm: { isNullable: !0, type: H.ResponsiveImage },
        zajOvbGoQ: { isNullable: !0, type: H.ResponsiveImage },
      }),
      (Nl = [`id`]),
      (Pl = { type: 1 }),
      (Fl = [`previousItemId`]),
      (Il = [`nextItemId`]),
      (Ll = [`id`, `XG3otaDlZ`]),
      (Rl = [`XG3otaDlZ`, `id`]),
      (zl = [`XG3otaDlZ`]),
      (Z = { type: 0 }),
      (Bl = [`dAZk2Jaon`]),
      (Vl = [`b3XlDEEmG`]),
      (Hl = [`gR2nhp5qm`]),
      (Ul = [`XbJge9Fsp`]),
      (Wl = [`RrOlspu9Q`]),
      (Gl = [`wQ1Rpjq3x`]),
      (Kl = [`y7hP7y7TX`]),
      (ql = [`vtA10ARAU`]),
      (Jl = [`XpFWjsiiE`]),
      (Yl = [`F1KVBlC4y`]),
      (Xl = [`zajOvbGoQ`]),
      (Zl = [`slJKroNUw`]),
      (Ql = [`dzQTLJWic`]),
      ($l = [`Fv1GqGRfr`]),
      (eu = [`pXmRpf_lU`]),
      (tu = [`YBOUfrYdB`]),
      (nu = [`b4tiQybAd`]),
      (ru = [`l2NBo7UWA`]),
      (iu = [`SUlGM7z6N`]),
      (au = [`YpT3cvwNm`]),
      (ou = [`qfJQfvYBn`]),
      (su = [`Na0xhxmje`]),
      (cu = [`nEx8XU81L`]),
      (lu = []),
      (uu = (e) => {
        let t = lu[e];
        if (t) return t().then((e) => e.default);
      }),
      (du = Ol({})),
      new Fe(),
      (fu = {
        collectionByLocaleId: {
          default: new wl({
            chunks: [
              new URL(
                `./ERDJzzQHr-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `239322d2-77bc-4cd1-b2c5-f1f50548c8dadefault`,
            indexes: [
              new Y({
                collation: Pl,
                collectionSchema: X,
                fieldNames: Nl,
                range: { from: 0, to: 121 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Pl,
                collectionSchema: X,
                fieldNames: Fl,
                range: { from: 121, to: 241 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Pl,
                collectionSchema: X,
                fieldNames: Il,
                range: { from: 241, to: 357 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Pl,
                collectionSchema: X,
                fieldNames: Ll,
                range: { from: 357, to: 558 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Pl,
                collectionSchema: X,
                fieldNames: Rl,
                range: { from: 558, to: 759 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: zl,
                range: { from: 759, to: 898 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: Bl,
                range: { from: 898, to: 1037 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: Vl,
                range: { from: 1037, to: 1585 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: Hl,
                range: { from: 1585, to: 1845 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: Ul,
                range: { from: 1845, to: 1977 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: Wl,
                range: { from: 1977, to: 2097 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: Gl,
                range: { from: 2097, to: 2217 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: Kl,
                range: { from: 2217, to: 2347 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: ql,
                range: { from: 2347, to: 2455 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: Jl,
                range: { from: 2455, to: 4520 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: Yl,
                range: { from: 4520, to: 6596 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: Xl,
                range: { from: 6596, to: 8414 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: Zl,
                range: { from: 8414, to: 10040 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: Ql,
                range: { from: 10040, to: 10448 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: $l,
                range: { from: 10448, to: 13751 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: eu,
                range: { from: 13751, to: 15804 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: tu,
                range: { from: 15804, to: 16176 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: nu,
                range: { from: 16176, to: 19728 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: ru,
                range: { from: 19728, to: 21420 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: iu,
                range: { from: 21420, to: 23246 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: au,
                range: { from: 23246, to: 24989 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: ou,
                range: { from: 24989, to: 26585 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: su,
                range: { from: 26585, to: 26931 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Y({
                collation: Z,
                collectionSchema: X,
                fieldNames: cu,
                range: { from: 26931, to: 29849 },
                url: new URL(
                  `./ERDJzzQHr-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/w7sZxyNLBzk0FYiQAcdD/6es6izZGbB56WXNEGlF7/ERDJzzQHr.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: du,
            resolveVectorSetItem: uu,
            schema: X,
          }),
        },
        displayName: `Article`,
        id: `239322d2-77bc-4cd1-b2c5-f1f50548c8da`,
      }),
      (pu = fu),
      I(fu, {
        XG3otaDlZ: { preventLocalization: !0, title: `Slug`, type: H.String },
        dAZk2Jaon: { defaultValue: ``, title: `Title`, type: H.String },
        b3XlDEEmG: {
          defaultValue: ``,
          displayTextArea: !0,
          title: `Primary Body Text`,
          type: H.String,
        },
        gR2nhp5qm: { title: `Link`, type: H.Link },
        XbJge9Fsp: { defaultValue: ``, title: `Category`, type: H.String },
        RrOlspu9Q: { defaultValue: ``, title: `Author`, type: H.String },
        wQ1Rpjq3x: { defaultValue: ``, title: `Read`, type: H.String },
        y7hP7y7TX: { defaultValue: ``, title: `Location`, type: H.String },
        vtA10ARAU: { title: `Date`, type: H.Date },
        XpFWjsiiE: { title: `Image 1`, type: H.ResponsiveImage },
        F1KVBlC4y: { title: `Image 2`, type: H.ResponsiveImage },
        zajOvbGoQ: { title: `Image 3`, type: H.ResponsiveImage },
        slJKroNUw: { title: `Image 4`, type: H.ResponsiveImage },
        dzQTLJWic: { defaultValue: ``, displayTextArea: !0, title: `Heading 1`, type: H.String },
        Fv1GqGRfr: { defaultValue: ``, displayTextArea: !0, title: `Body Text 1`, type: H.String },
        pXmRpf_lU: { title: `Image 5`, type: H.ResponsiveImage },
        YBOUfrYdB: { defaultValue: ``, displayTextArea: !0, title: `Heading 2`, type: H.String },
        b4tiQybAd: { defaultValue: ``, displayTextArea: !0, title: `Body Text 2`, type: H.String },
        l2NBo7UWA: { title: `Image 6`, type: H.ResponsiveImage },
        SUlGM7z6N: { title: `Image 7`, type: H.ResponsiveImage },
        YpT3cvwNm: { title: `Image 8`, type: H.ResponsiveImage },
        qfJQfvYBn: { title: `Image 9`, type: H.ResponsiveImage },
        Na0xhxmje: { defaultValue: ``, displayTextArea: !0, title: `Heading 3`, type: H.String },
        nEx8XU81L: { defaultValue: ``, displayTextArea: !0, title: `Body Text 3`, type: H.String },
        createdAt: { title: `Created`, type: H.Date },
        updatedAt: { title: `Updated`, type: H.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/ERDJzzQHr:default`,
          title: `Previous`,
          type: H.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/ERDJzzQHr:default`,
          title: `Next`,
          type: H.CollectionReference,
        },
      }));
  });
function hu(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Q(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function gu(e) {
  throw Error(`Unexpected value: ${e}`);
}
function _u(e, t, n, r) {
  (Q(e >= t, e, `outside lower bound for`, r), Q(e <= n, e, `outside upper bound for`, r));
}
function vu(e) {
  return typeof e == `string`;
}
function yu(e) {
  return Number.isFinite(e);
}
function bu(e) {
  return e === null;
}
function xu(e) {
  if (bu(e)) return 0;
  switch (e.type) {
    case H.Array:
      return 1;
    case H.Boolean:
      return 2;
    case H.Color:
      return 3;
    case H.Date:
      return 4;
    case H.Enum:
      return 5;
    case H.File:
      return 6;
    case H.ResponsiveImage:
      return 10;
    case H.Link:
      return 7;
    case H.Number:
      return 8;
    case H.Object:
      return 9;
    case H.RichText:
      return 11;
    case H.String:
      return 12;
    case H.VectorSetItem:
      return 13;
    default:
      gu(e);
  }
}
function Su(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = dd.read(e);
    n.push(t);
  }
  return { type: H.Array, value: n };
}
function Cu(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) dd.write(e, n);
}
function wu(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = dd.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Tu(e) {
  return { type: H.Boolean, value: e.readUint8() !== 0 };
}
function Eu(e, t) {
  e.writeUint8(t.value ? 1 : 0);
}
function Du(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Ou(e) {
  return { type: H.Color, value: e.readString() };
}
function ku(e, t) {
  e.writeString(t.value);
}
function Au(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function ju(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: H.Date, value: n.toISOString() };
}
function Mu(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function Nu(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Pu(e) {
  return { type: H.Enum, value: e.readString() };
}
function Fu(e, t) {
  e.writeString(t.value);
}
function Iu(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Lu(e) {
  return { type: H.File, value: e.readString() };
}
function Ru(e, t) {
  e.writeString(t.value);
}
function zu(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Bu(e) {
  return { type: H.Link, value: e.readJson() };
}
function Vu(e, t) {
  e.writeJson(t.value);
}
function Hu(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Uu(e) {
  return { type: H.Number, value: e.readFloat64() };
}
function Wu(e, t) {
  e.writeFloat64(t.value);
}
function Gu(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Ku(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = dd.read(e);
  }
  return { type: H.Object, value: n };
}
function qu(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), dd.write(e, r));
}
function Ju(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = dd.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Yu(e) {
  return { type: H.ResponsiveImage, value: e.readJson() };
}
function Xu(e, t) {
  e.writeJson(t.value);
}
function Zu(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Qu(e) {
  let t = e.readInt8();
  if (t === 0) return { type: H.RichText, value: e.readUint32() };
  if (t === 1) return { type: H.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function $u(e, t) {
  if (yu(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (vu(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function ed(e, t) {
  let n = e.value,
    r = t.value;
  if ((yu(n) && yu(r)) || (vu(n) && vu(r))) return n < r ? -1 : n > r ? 1 : 0;
  throw Error(`Invalid rich text pointer`);
}
function td(e) {
  return { type: H.String, value: e.readString() };
}
function nd(e, t) {
  e.writeString(t.value);
}
function rd(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : r > i ? 1 : 0
  );
}
function id(e) {
  return { type: H.VectorSetItem, value: e.readUint32() };
}
function ad(e, t) {
  e.writeUint32(t.value);
}
function od(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
async function sd(e) {
  let t = Math.floor(Id * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function cd(e, t) {
  let n = ud(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await Rd(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new zd(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function ld(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function ud(e) {
  Q(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
var dd,
  fd,
  pd,
  md,
  hd,
  gd,
  _d,
  vd,
  yd,
  bd,
  xd,
  $,
  Sd,
  Cd,
  wd,
  Td,
  Ed,
  Dd,
  Od,
  kd,
  Ad,
  jd,
  Md,
  Nd,
  Pd,
  Fd,
  Id,
  Ld,
  Rd,
  zd,
  Bd,
  Vd,
  Hd,
  Ud,
  Wd = e(() => {
    (t(),
      R(),
      (fd = Object.create),
      (pd = Object.defineProperty),
      (md = Object.getOwnPropertyDescriptor),
      (hd = Object.getOwnPropertyNames),
      (gd = Object.getPrototypeOf),
      (_d = Object.prototype.hasOwnProperty),
      (vd = (e, t, n) =>
        t in e
          ? pd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
          : (e[t] = n)),
      (yd = (e, t) =>
        function () {
          return (t || (0, e[hd(e)[0]])((t = { exports: {} }).exports, t), t.exports);
        }),
      (bd = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of hd(t))
            _d.call(e, i) ||
              i === n ||
              pd(e, i, { get: () => t[i], enumerable: !(r = md(t, i)) || r.enumerable });
        return e;
      }),
      (xd = (e, t, n) => (
        (n = e == null ? {} : fd(gd(e))),
        bd(!t && e && e.__esModule ? n : pd(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      ($ = (e, t, n) => vd(e, typeof t == `symbol` ? t : t + ``, n)),
      (Sd = xd(
        yd({
          '../../../node_modules/dataloader/index.js'(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e)
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })()
      )),
      (Cd = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (wd = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = Cd.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return ((this.offset += e), t);
        }
        readUint16() {
          let e = Cd.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return ((this.offset += e), t);
        }
        readUint32() {
          let e = Cd.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return ((this.offset += e), t);
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = Cd.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return ((this.offset += e), t);
        }
        readInt8() {
          let e = Cd.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return ((this.offset += e), t);
        }
        readInt16() {
          let e = Cd.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return ((this.offset += e), t);
        }
        readInt32() {
          let e = Cd.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return ((this.offset += e), t);
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = Cd.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return ((this.offset += e), t);
        }
        readFloat32() {
          let e = Cd.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return ((this.offset += e), t);
        }
        readFloat64() {
          let e = Cd.Float64;
          this.ensureLength(e);
          let t = this.view.getFloat64(this.offset);
          return ((this.offset += e), t);
        }
        readBytes(e) {
          let t = this.offset,
            n = t + e,
            r = this.bytes.subarray(t, n);
          return ((this.offset = n), r);
        }
        readString() {
          let e = this.readUint32(),
            t = this.readBytes(e);
          return this.decoder.decode(t);
        }
        readJson() {
          let e = this.readString();
          return JSON.parse(e);
        }
        constructor(e) {
          ((this.bytes = e),
            $(this, `offset`, 0),
            $(this, `view`),
            $(this, `decoder`, new TextDecoder()),
            (this.view = hu(this.bytes)));
        }
      }),
      a !== void 0 && a.requestIdleCallback,
      (Td = 1024),
      (Ed = 1.5),
      (Dd = (e) => 2 ** e - 1),
      (Od = (e) => -(2 ** (e - 1))),
      (kd = (e) => 2 ** (e - 1) - 1),
      (Ad = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: Od(8),
        Int16: Od(16),
        Int32: Od(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (jd = {
        Uint8: Dd(8),
        Uint16: Dd(16),
        Uint32: Dd(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: kd(8),
        Int16: kd(16),
        Int32: kd(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (Md = class {
        getOffset() {
          return this.offset;
        }
        slice(e = 0, t = this.offset) {
          return this.bytes.slice(e, t);
        }
        subarray(e = 0, t = this.offset) {
          return this.bytes.subarray(e, t);
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (this.offset + e <= t) return;
          let n = new Uint8Array(Math.ceil(t * Ed) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = hu(n)));
        }
        writeUint8(e) {
          _u(e, Ad.Uint8, jd.Uint8, `Uint8`);
          let t = Cd.Uint8;
          (this.ensureLength(t), this.view.setUint8(this.offset, e), (this.offset += t));
        }
        writeUint16(e) {
          _u(e, Ad.Uint16, jd.Uint16, `Uint16`);
          let t = Cd.Uint16;
          (this.ensureLength(t), this.view.setUint16(this.offset, e), (this.offset += t));
        }
        writeUint32(e) {
          _u(e, Ad.Uint32, jd.Uint32, `Uint32`);
          let t = Cd.Uint32;
          (this.ensureLength(t), this.view.setUint32(this.offset, e), (this.offset += t));
        }
        writeUint64(e) {
          _u(e, Ad.Uint64, jd.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          _u(e, Ad.BigUint64, jd.BigUint64, `BigUint64`);
          let t = Cd.BigUint64;
          (this.ensureLength(t), this.view.setBigUint64(this.offset, e), (this.offset += t));
        }
        writeInt8(e) {
          _u(e, Ad.Int8, jd.Int8, `Int8`);
          let t = Cd.Int8;
          (this.ensureLength(t), this.view.setInt8(this.offset, e), (this.offset += t));
        }
        writeInt16(e) {
          _u(e, Ad.Int16, jd.Int16, `Int16`);
          let t = Cd.Int16;
          (this.ensureLength(t), this.view.setInt16(this.offset, e), (this.offset += t));
        }
        writeInt32(e) {
          _u(e, Ad.Int32, jd.Int32, `Int32`);
          let t = Cd.Int32;
          (this.ensureLength(t), this.view.setInt32(this.offset, e), (this.offset += t));
        }
        writeInt64(e) {
          _u(e, Ad.Int64, jd.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          _u(e, Ad.BigInt64, jd.BigInt64, `BigInt64`);
          let t = Cd.BigInt64;
          (this.ensureLength(t), this.view.setBigInt64(this.offset, e), (this.offset += t));
        }
        writeFloat32(e) {
          let t = Cd.Float32;
          (this.ensureLength(t), this.view.setFloat32(this.offset, e), (this.offset += t));
        }
        writeFloat64(e) {
          let t = Cd.Float64;
          (this.ensureLength(t), this.view.setFloat64(this.offset, e), (this.offset += t));
        }
        writeBytes(e) {
          let t = e.length;
          (this.ensureLength(t), this.bytes.set(e, this.offset), (this.offset += t));
        }
        encodeString(e) {
          let t = this.encodedStrings.get(e);
          if (t) return t;
          let n = this.encoder.encode(e);
          return (this.encodedStrings.set(e, n), n);
        }
        writeString(e) {
          let t = this.encodeString(e),
            n = t.length;
          (this.writeUint32(n), this.writeBytes(t));
        }
        writeJson(e) {
          let t = JSON.stringify(e);
          this.writeString(t);
        }
        constructor() {
          ($(this, `offset`, 0),
            $(this, `bytes`, new Uint8Array(Td)),
            $(this, `view`, hu(this.bytes)),
            $(this, `encoder`, new TextEncoder()),
            $(this, `encodedStrings`, new Map()));
        }
      }),
      (Nd = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            Q(yu(n), `Invalid chunkId`),
            Q(yu(r), `Invalid offset`),
            Q(yu(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          return new e(t.readUint16(), t.readUint32(), t.readUint32());
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (Q(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          ((this.chunkId = e), (this.offset = t), (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return Su(e);
            case 2:
              return Tu(e);
            case 3:
              return Ou(e);
            case 4:
              return ju(e);
            case 5:
              return Pu(e);
            case 6:
              return Lu(e);
            case 7:
              return Bu(e);
            case 8:
              return Uu(e);
            case 9:
              return Ku(e);
            case 10:
              return Yu(e);
            case 11:
              return Qu(e);
            case 12:
              return td(e);
            case 13:
              return id(e);
            default:
              gu(t);
          }
        }),
          (e.write = function (e, t) {
            let n = xu(t);
            if ((e.writeUint8(n), !bu(t)))
              switch (t.type) {
                case H.Array:
                  return Cu(e, t);
                case H.Boolean:
                  return Eu(e, t);
                case H.Color:
                  return ku(e, t);
                case H.Date:
                  return Mu(e, t);
                case H.Enum:
                  return Fu(e, t);
                case H.File:
                  return Ru(e, t);
                case H.Link:
                  return Vu(e, t);
                case H.Number:
                  return Wu(e, t);
                case H.Object:
                  return qu(e, t);
                case H.ResponsiveImage:
                  return Xu(e, t);
                case H.RichText:
                  return $u(e, t);
                case H.VectorSetItem:
                  return ad(e, t);
                case H.String:
                  return nd(e, t);
                default:
                  gu(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = xu(e),
              i = xu(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (bu(e) || bu(t)) return 0;
            switch (e.type) {
              case H.Array:
                return (Q(t.type === H.Array), wu(e, t, n));
              case H.Boolean:
                return (Q(t.type === H.Boolean), Du(e, t));
              case H.Color:
                return (Q(t.type === H.Color), Au(e, t));
              case H.Date:
                return (Q(t.type === H.Date), Nu(e, t));
              case H.Enum:
                return (Q(t.type === H.Enum), Iu(e, t));
              case H.File:
                return (Q(t.type === H.File), zu(e, t));
              case H.Link:
                return (Q(t.type === H.Link), Hu(e, t));
              case H.Number:
                return (Q(t.type === H.Number), Gu(e, t));
              case H.Object:
                return (Q(t.type === H.Object), Ju(e, t, n));
              case H.ResponsiveImage:
                return (Q(t.type === H.ResponsiveImage), Zu(e, t));
              case H.RichText:
                return (Q(t.type === H.RichText), ed(e, t));
              case H.VectorSetItem:
                return (Q(t.type === H.VectorSetItem), od(e, t));
              case H.String:
                return (Q(t.type === H.String), rd(e, t, n));
              default:
                gu(e);
            }
          }));
      })((dd ||= {})),
      (Pd = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = dd.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static deserialize(t) {
          let n = new wd(t),
            r = n.readJson(),
            i = n.readUint8(),
            a = [];
          for (let e = 0; e < i; e++) {
            let e = n.readString();
            a.push(e);
          }
          let o = new e(a, { collation: r }),
            s = n.readUint32();
          for (let e = 0; e < s; e++) {
            let e = [];
            for (let t = 0; t < i; t++) {
              let t = dd.read(n);
              e.push(t);
            }
            let t = Nd.read(n);
            o.entries.push({ values: e, pointer: t });
          }
          return o;
        }
        serialize() {
          let e = new Md();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(), e.writeUint32(this.entries.length), this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) dd.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          ((this.fieldNames = e), (this.options = t), $(this, `entries`, []));
        }
      }),
      (Fd = 3),
      (Id = 250),
      (Ld = [408, 429, 500, 502, 503, 504]),
      (Rd = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!Ld.includes(r.status) || ++n > Fd) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > Fd) throw e;
          }
          await sd(n);
        }
      }),
      (zd = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((Q(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = ld(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((Q(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = ld(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          $(this, `chunks`, []);
        }
      }),
      (Bd = class {
        async loadModel() {
          let [e] = await cd(this.options.url, [this.options.range]);
          return (Q(e, `Failed to load model`), Pd.deserialize(e));
        }
        async getModel() {
          return (
            (this.modelPromise ??= this.loadModel()),
            (this.model ??= await this.modelPromise),
            this.model
          );
        }
        async lookupItems(e) {
          Q(e.length === this.fields.length, `Invalid query length`);
          let t = await this.getModel(),
            n = e.reduce(
              (e, t, n) =>
                e.flatMap((e) => {
                  switch (t.type) {
                    case `All`:
                      return [e];
                    case `Equals`:
                      return this.queryEquals(e, t, n);
                    case `NotEquals`:
                      return this.queryNotEquals(e, t, n);
                    case `LessThan`:
                      return this.queryLessThan(e, t, n);
                    case `GreaterThan`:
                      return this.queryGreaterThan(e, t, n);
                    case `Contains`:
                      return this.queryContains(e, t, n);
                    case `StartsWith`:
                      return this.queryStartsWith(e, t, n);
                    case `EndsWith`:
                      return this.queryEndsWith(e, t, n);
                    default:
                      gu(t);
                  }
                }),
              [t.entries]
            ),
            r = [];
          for (let e of n)
            for (let t of e) {
              let e = {};
              for (let n = 0; n < this.options.fieldNames.length; n++) {
                let r = this.options.fieldNames[n];
                e[r] = t.values[n];
              }
              r.push({ pointer: t.pointer.toString(), data: e });
            }
          return r;
        }
        queryEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = e.slice(r, i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryNotEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = [],
            o = e.slice(0, r);
          o.length > 0 && a.push(o);
          let s = e.slice(i + 1);
          return (s.length > 0 && a.push(s), a);
        }
        queryLessThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getRightMost(e, n, t.value),
              i = e.slice(0, r + 1);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getLeftMost(e, n, t.value),
            a = e.slice(0, i);
          return a.length > 0 ? [a] : [];
        }
        queryGreaterThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getLeftMost(e, n, t.value),
              i = e.slice(r);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getRightMost(e, n, t.value),
            a = e.slice(i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryContains(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== H.String || t.value?.type !== H.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.includes(r)
            );
          });
        }
        queryStartsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== H.String || t.value?.type !== H.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.startsWith(r)
            );
          });
        }
        queryEndsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== H.String || t.value?.type !== H.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.endsWith(r)
            );
          });
        }
        getLeftMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i; ) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            0 > dd.compare(o, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i; ) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            dd.compare(o, n, this.collation) > 0 ? (i = a) : (r = a + 1);
          }
          return i - 1;
        }
        findItems(e, t, n) {
          let r = [],
            i = 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a].values[t];
            if (!n(o)) {
              if (i < a) {
                let t = e.slice(i, a);
                r.push(t);
              }
              i = a + 1;
            }
          }
          if (i < e.length) {
            let t = e.slice(i);
            r.push(t);
          }
          return r;
        }
        constructor(e) {
          ((this.options = e),
            $(this, `schema`),
            $(this, `fields`),
            $(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            $(this, `modelPromise`),
            $(this, `model`),
            $(this, `collation`));
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            (Q(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t), (this.fields = n), (this.collation = this.options.collation));
        }
      }),
      (Vd = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = dd.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), dd.write(e, n));
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          $(this, `fields`, new Map());
        }
      }),
      (Hd = class {
        scanItems() {
          return (
            (this.itemsPromise ??= Rd(this.url).then(async (e) => {
              if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new wd(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = Vd.read(n),
                  i = n.getOffset() - e,
                  a = new Nd(this.id, e, i).toString(),
                  o = { pointer: a, data: t.getData() };
                (this.itemLoader.prime(a, o), r.push(o));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          ((this.id = e),
            (this.url = t),
            $(this, `itemsPromise`),
            $(
              this,
              `itemLoader`,
              new Sd.default(async (e) => {
                let t = e.map((e) => {
                  let t = Nd.fromString(e);
                  return { from: t.offset, to: t.offset + t.length };
                });
                return (await cd(this.url, t)).map((t, n) => {
                  let r = new wd(t),
                    i = Vd.read(r),
                    a = e[n];
                  return (Q(a, `Missing pointer`), { pointer: a, data: i.getData() });
                });
              })
            ));
        }
      }),
      (Ud = class {
        async scanItems() {
          return (await Promise.all(this.chunks.map(async (e) => e.scanItems()))).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = Nd.fromString(e),
                n = this.chunks[t.chunkId];
              return (Q(n, `Missing chunk`), n.resolveItem(e));
            })
          );
        }
        compareItems(e, t) {
          let n = Nd.fromString(e.pointer),
            r = Nd.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return dd.compare(e, t, n);
        }
        constructor(e) {
          ((this.options = e),
            $(this, `id`),
            $(this, `schema`),
            $(this, `indexes`),
            $(this, `resolveRichText`),
            $(this, `resolveVectorSetItem`),
            $(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new Hd(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function Gd(e) {
  return typeof e == `object` && !!e && !_(e) && Yd in e;
}
function Kd(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function qd(e) {
  let t = new Map();
  return (n) => {
    let r = t.get(n);
    if (r) return r;
    let i = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return te(s, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return te(be, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a] = n;
          for (let e of a) {
            let n = i[e];
            n && (i[e] = t(n));
          }
          let o = e[r];
          return (
            Kd(o, `Module not found`),
            Gd(o) && o.preload(),
            g(Se, { componentIdentifier: r, children: (e) => g(o, { ...e, ...i }) })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return te(e === `a` ? E.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, i), i);
  };
}
var Jd,
  Yd,
  Xd,
  Zd = e(() => {
    (t(),
      S(),
      R(),
      r(),
      a !== void 0 && a.requestIdleCallback,
      (Yd = `preload`),
      (Xd =
        (((Jd = Xd || {})[(Jd.Fragment = 1)] = `Fragment`),
        (Jd[(Jd.Link = 2)] = `Link`),
        (Jd[(Jd.Module = 3)] = `Module`),
        (Jd[(Jd.Tag = 4)] = `Tag`),
        (Jd[(Jd.Text = 5)] = `Text`),
        Jd)));
  }),
  Qd,
  $d,
  ef,
  tf,
  nf,
  rf,
  af,
  of,
  sf,
  cf,
  lf,
  uf,
  df,
  ff,
  pf,
  mf,
  hf,
  gf,
  _f,
  vf,
  yf,
  bf,
  xf,
  Sf,
  Cf,
  wf,
  Tf,
  Ef,
  Df = e(() => {
    (R(),
      Wd(),
      Zd(),
      (Qd = {
        aPs0LyMFs: { isNullable: !0, type: H.String },
        createdAt: { isNullable: !0, type: H.Date },
        e44O8jjMd: { isNullable: !0, type: H.Date },
        id: { isNullable: !1, type: H.String },
        nextItemId: { isNullable: !0, type: H.String },
        OqqCWBVct: { isNullable: !0, type: H.ResponsiveImage },
        P3BOIXzYK: { isNullable: !0, type: H.String },
        previousItemId: { isNullable: !0, type: H.String },
        qXUNIF8kG: { isNullable: !0, type: H.ResponsiveImage },
        S4o7z4Psh: { isNullable: !0, type: H.String },
        tsWKM6lyk: { isNullable: !0, type: H.String },
        updatedAt: { isNullable: !0, type: H.Date },
        VGQRXHMFS: { isNullable: !0, type: H.RichText },
        wfPmAnXMd: { isNullable: !0, type: H.String },
        XVH_tgELr: { isNullable: !0, type: H.String },
        XwulivaM5: { isNullable: !0, type: H.String },
        YHo9k2VRN: { isNullable: !0, type: H.ResponsiveImage },
        YHsDzvkBN: { isNullable: !0, type: H.String },
        yphiaikeG: { isNullable: !0, type: H.ResponsiveImage },
        Z8v3oSKF6: { isNullable: !0, type: H.Link },
      }),
      ($d = [`id`]),
      (ef = { type: 1 }),
      (tf = [`previousItemId`]),
      (nf = [`nextItemId`]),
      (rf = [`id`, `XVH_tgELr`]),
      (af = [`XVH_tgELr`, `id`]),
      (of = [`XVH_tgELr`]),
      (sf = { type: 0 }),
      (cf = [`YHsDzvkBN`]),
      (lf = [`wfPmAnXMd`]),
      (uf = [`aPs0LyMFs`]),
      (df = [`Z8v3oSKF6`]),
      (ff = [`P3BOIXzYK`]),
      (pf = [`yphiaikeG`]),
      (mf = [`YHo9k2VRN`]),
      (hf = [`OqqCWBVct`]),
      (gf = [`qXUNIF8kG`]),
      (_f = [`e44O8jjMd`]),
      (vf = [`S4o7z4Psh`]),
      (yf = [`tsWKM6lyk`]),
      (bf = [`XwulivaM5`]),
      (xf = [`VGQRXHMFS`]),
      (Sf = []),
      (Cf = (e) => {
        let t = Sf[e];
        if (t) return t().then((e) => e.default);
      }),
      (wf = qd({})),
      new Fe(),
      (Tf = {
        collectionByLocaleId: {
          default: new Ud({
            chunks: [
              new URL(
                `./ZRM2PWVwA-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/uBgfwbcwNLemHZ1MiG3b/szdjSO9cfk6zRfbFzfWf/ZRM2PWVwA.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `710e90b0-ef25-4e46-b260-b03496cdaa0cdefault`,
            indexes: [
              new Bd({
                collation: ef,
                collectionSchema: Qd,
                fieldNames: $d,
                range: { from: 0, to: 145 },
                url: new URL(
                  `./ZRM2PWVwA-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/uBgfwbcwNLemHZ1MiG3b/szdjSO9cfk6zRfbFzfWf/ZRM2PWVwA.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Bd({
                collation: ef,
                collectionSchema: Qd,
                fieldNames: tf,
                range: { from: 145, to: 289 },
                url: new URL(
                  `./ZRM2PWVwA-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/uBgfwbcwNLemHZ1MiG3b/szdjSO9cfk6zRfbFzfWf/ZRM2PWVwA.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Bd({
                collation: ef,
                collectionSchema: Qd,
                fieldNames: nf,
                range: { from: 289, to: 429 },
                url: new URL(
                  `./ZRM2PWVwA-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/uBgfwbcwNLemHZ1MiG3b/szdjSO9cfk6zRfbFzfWf/ZRM2PWVwA.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Bd({
                collation: ef,
                collectionSchema: Qd,
                fieldNames: rf,
                range: { from: 429, to: 664 },
                url: new URL(
                  `./ZRM2PWVwA-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/uBgfwbcwNLemHZ1MiG3b/szdjSO9cfk6zRfbFzfWf/ZRM2PWVwA.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Bd({
                collation: ef,
                collectionSchema: Qd,
                fieldNames: af,
                range: { from: 664, to: 899 },
                url: new URL(
                  `./ZRM2PWVwA-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/uBgfwbcwNLemHZ1MiG3b/szdjSO9cfk6zRfbFzfWf/ZRM2PWVwA.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Bd({
                collation: sf,
                collectionSchema: Qd,
                fieldNames: of,
                range: { from: 899, to: 1058 },
                url: new URL(
                  `./ZRM2PWVwA-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/uBgfwbcwNLemHZ1MiG3b/szdjSO9cfk6zRfbFzfWf/ZRM2PWVwA.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Bd({
                collation: sf,
                collectionSchema: Qd,
                fieldNames: cf,
                range: { from: 1058, to: 1231 },
                url: new URL(
                  `./ZRM2PWVwA-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/uBgfwbcwNLemHZ1MiG3b/szdjSO9cfk6zRfbFzfWf/ZRM2PWVwA.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Bd({
                collation: sf,
                collectionSchema: Qd,
                fieldNames: lf,
                range: { from: 1231, to: 1392 },
                url: new URL(
                  `./ZRM2PWVwA-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/uBgfwbcwNLemHZ1MiG3b/szdjSO9cfk6zRfbFzfWf/ZRM2PWVwA.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Bd({
                collation: sf,
                collectionSchema: Qd,
                fieldNames: uf,
                range: { from: 1392, to: 1568 },
                url: new URL(
                  `./ZRM2PWVwA-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/uBgfwbcwNLemHZ1MiG3b/szdjSO9cfk6zRfbFzfWf/ZRM2PWVwA.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Bd({
                collation: sf,
                collectionSchema: Qd,
                fieldNames: df,
                range: { from: 1568, to: 1885 },
                url: new URL(
                  `./ZRM2PWVwA-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/uBgfwbcwNLemHZ1MiG3b/szdjSO9cfk6zRfbFzfWf/ZRM2PWVwA.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Bd({
                collation: sf,
                collectionSchema: Qd,
                fieldNames: ff,
                range: { from: 1885, to: 2012 },
                url: new URL(
                  `./ZRM2PWVwA-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/uBgfwbcwNLemHZ1MiG3b/szdjSO9cfk6zRfbFzfWf/ZRM2PWVwA.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Bd({
                collation: sf,
                collectionSchema: Qd,
                fieldNames: pf,
                range: { from: 2012, to: 4471 },
                url: new URL(
                  `./ZRM2PWVwA-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/uBgfwbcwNLemHZ1MiG3b/szdjSO9cfk6zRfbFzfWf/ZRM2PWVwA.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Bd({
                collation: sf,
                collectionSchema: Qd,
                fieldNames: mf,
                range: { from: 4471, to: 6821 },
                url: new URL(
                  `./ZRM2PWVwA-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/uBgfwbcwNLemHZ1MiG3b/szdjSO9cfk6zRfbFzfWf/ZRM2PWVwA.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Bd({
                collation: sf,
                collectionSchema: Qd,
                fieldNames: hf,
                range: { from: 6821, to: 8935 },
                url: new URL(
                  `./ZRM2PWVwA-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/uBgfwbcwNLemHZ1MiG3b/szdjSO9cfk6zRfbFzfWf/ZRM2PWVwA.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Bd({
                collation: sf,
                collectionSchema: Qd,
                fieldNames: gf,
                range: { from: 8935, to: 10941 },
                url: new URL(
                  `./ZRM2PWVwA-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/uBgfwbcwNLemHZ1MiG3b/szdjSO9cfk6zRfbFzfWf/ZRM2PWVwA.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Bd({
                collation: sf,
                collectionSchema: Qd,
                fieldNames: _f,
                range: { from: 10941, to: 11068 },
                url: new URL(
                  `./ZRM2PWVwA-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/uBgfwbcwNLemHZ1MiG3b/szdjSO9cfk6zRfbFzfWf/ZRM2PWVwA.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Bd({
                collation: sf,
                collectionSchema: Qd,
                fieldNames: vf,
                range: { from: 11068, to: 11223 },
                url: new URL(
                  `./ZRM2PWVwA-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/uBgfwbcwNLemHZ1MiG3b/szdjSO9cfk6zRfbFzfWf/ZRM2PWVwA.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Bd({
                collation: sf,
                collectionSchema: Qd,
                fieldNames: yf,
                range: { from: 11223, to: 11393 },
                url: new URL(
                  `./ZRM2PWVwA-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/uBgfwbcwNLemHZ1MiG3b/szdjSO9cfk6zRfbFzfWf/ZRM2PWVwA.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Bd({
                collation: sf,
                collectionSchema: Qd,
                fieldNames: bf,
                range: { from: 11393, to: 11583 },
                url: new URL(
                  `./ZRM2PWVwA-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/uBgfwbcwNLemHZ1MiG3b/szdjSO9cfk6zRfbFzfWf/ZRM2PWVwA.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new Bd({
                collation: sf,
                collectionSchema: Qd,
                fieldNames: xf,
                range: { from: 11583, to: 12281 },
                url: new URL(
                  `./ZRM2PWVwA-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/uBgfwbcwNLemHZ1MiG3b/szdjSO9cfk6zRfbFzfWf/ZRM2PWVwA.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: wf,
            resolveVectorSetItem: Cf,
            schema: Qd,
          }),
        },
        displayName: `Work`,
        id: `710e90b0-ef25-4e46-b260-b03496cdaa0c`,
      }),
      (Ef = Tf),
      I(Tf, {
        XVH_tgELr: { preventLocalization: !0, title: `Slug`, type: H.String },
        YHsDzvkBN: { defaultValue: ``, title: `Category`, type: H.String },
        wfPmAnXMd: { defaultValue: ``, title: `Title`, type: H.String },
        aPs0LyMFs: { defaultValue: ``, displayTextArea: !1, title: `Inner Title`, type: H.String },
        Z8v3oSKF6: { title: `Site Link`, type: H.Link },
        P3BOIXzYK: { defaultValue: ``, title: `Roll No`, type: H.String },
        yphiaikeG: { title: `BG Image`, type: H.ResponsiveImage },
        YHo9k2VRN: { title: `Inner Image`, type: H.ResponsiveImage },
        OqqCWBVct: { title: `Image 1`, type: H.ResponsiveImage },
        qXUNIF8kG: { title: `Image 2`, type: H.ResponsiveImage },
        e44O8jjMd: { title: `Date`, type: H.Date },
        S4o7z4Psh: { defaultValue: ``, title: `Client`, type: H.String },
        tsWKM6lyk: { defaultValue: ``, title: `Duration`, type: H.String },
        XwulivaM5: { defaultValue: ``, title: `Location`, type: H.String },
        VGQRXHMFS: { defaultValue: ``, title: `Body Text`, type: H.RichText },
        createdAt: { title: `Created`, type: H.Date },
        updatedAt: { title: `Updated`, type: H.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/ZRM2PWVwA:default`,
          title: `Previous`,
          type: H.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/ZRM2PWVwA:default`,
          title: `Next`,
          type: H.CollectionReference,
        },
      }));
  }),
  Of,
  kf,
  Af,
  jf,
  Mf,
  Nf,
  Pf,
  Ff,
  If,
  Lf,
  Rf,
  zf,
  Bf,
  Vf,
  Hf,
  Uf,
  Wf,
  Gf,
  Kf,
  qf,
  Jf,
  Yf,
  Xf,
  Zf,
  Qf,
  $f,
  ep,
  tp,
  np,
  rp,
  ip,
  ap,
  op,
  sp,
  cp,
  lp,
  up,
  dp,
  fp,
  pp,
  mp,
  hp,
  gp,
  _p,
  vp,
  yp,
  bp,
  xp,
  Sp,
  Cp,
  wp,
  Tp,
  Ep,
  Dp,
  Op,
  kp,
  Ap,
  jp,
  Mp,
  Np,
  Pp,
  Fp,
  Ip,
  Lp,
  Rp,
  zp,
  Bp,
  Vp,
  Hp,
  Up,
  Wp,
  Gp,
  Kp,
  qp,
  Jp,
  Yp,
  Xp,
  Zp,
  Qp,
  $p,
  em,
  tm,
  nm,
  rm,
  im,
  am,
  om,
  sm,
  cm,
  lm,
  um,
  dm,
  fm;
e(() => {
  (S(),
    R(),
    M(),
    r(),
    m(),
    Et(),
    Rt(),
    wn(),
    zn(),
    Ye(),
    tr(),
    tt(),
    Or(),
    Ue(),
    Wr(),
    oi(),
    ea(),
    ha(),
    Da(),
    eo(),
    Oo(),
    ts(),
    js(),
    Le(),
    Je(),
    Ks(),
    Xs(),
    mu(),
    Df(),
    ct(),
    lr(),
    st(),
    pt(),
    (Of = z(ai)),
    (kf = ne(F)),
    (Af = z(As)),
    (jf = z(Lt)),
    (Mf = ne(U)),
    (Nf = z(En)),
    (Pf = ne(E.div)),
    (Ff = z(Be)),
    (If = z(qe)),
    (Lf = ae(Ae)),
    (Rf = z(ut)),
    (zf = z(Gs)),
    (Bf = z(ma)),
    (Vf = z(Dr)),
    (Hf = ae(F)),
    (Uf = z($a)),
    (Wf = z(mn)),
    (Gf = z(qs)),
    (Kf = z(Ct)),
    (qf = ae(U)),
    (Jf = z($e)),
    (Yf = z(Do)),
    (Xf = z(Ea)),
    (Zf = z($i)),
    (Qf = z(Ur)),
    ($f = ae(E.div)),
    (ep = z(es)),
    (tp = z(et)),
    (np = z(er)),
    (rp = {
      TARYGz5CA: `(max-width: 809.98px)`,
      uQRrO6hCw: `(min-width: 810px) and (max-width: 1199.98px)`,
      WQLkyLRf1: `(min-width: 1200px)`,
    }),
    (ip = () => typeof document < `u`),
    (ap = `framer-G3OxB`),
    (op = {
      TARYGz5CA: `framer-v-12a2gtg`,
      uQRrO6hCw: `framer-v-1tqphhv`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (sp = (e, t, n) => (e && t ? `position` : n)),
    (cp = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { damping: 60, delay: 4.3, mass: 1, stiffness: 300, type: `spring` },
      x: 0,
      y: 0,
    }),
    (lp = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 45,
    }),
    (up = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { damping: 60, delay: 4.35, mass: 1, stiffness: 300, type: `spring` },
      x: 0,
      y: 0,
    }),
    (dp = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { damping: 60, delay: 4.4, mass: 1, stiffness: 300, type: `spring` },
      x: 0,
      y: 0,
    }),
    (fp = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { damping: 60, delay: 4.45, mass: 1, stiffness: 300, type: `spring` },
      x: 0,
      y: 0,
    }),
    (pp = { delay: 2.9, duration: 1.4, ease: [0.96, -0.02, 0.38, 1.01], type: `tween` }),
    (mp = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: pp,
      x: 0,
      y: 0,
    }),
    (hp = {
      opacity: 0.1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0.3,
      skewX: 0,
      skewY: 0,
      x: 280,
      y: -270,
    }),
    (gp = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 3.2, duration: 1.4, ease: [0.96, -0.02, 0.38, 1.01], type: `tween` },
      x: 0,
      y: 0,
    }),
    (_p = { bounce: 0.2, delay: 0, duration: 0.6, type: `spring` }),
    (vp = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: _p,
      x: 0,
      y: 0,
    }),
    (yp = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: _p,
      x: 0,
      y: 0,
    }),
    (bp = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (xp = (e, t) => `translate(-50%, -50%) ${t}`),
    (Sp = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (Cp = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = _e({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (wp = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { damping: 60, delay: 4, mass: 1, stiffness: 200, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Tp = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: -1520,
      y: 0,
    }),
    (Ep = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0, duration: 2.8, ease: [0.69, 0, 0.05, 0.98], type: `tween` },
      x: 0,
      y: 0,
    }),
    (Dp = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: -520,
    }),
    (Op = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 2.9, duration: 1.4, ease: [0.95, -0.02, 0.38, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (kp = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0.6,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: -350,
    }),
    (Ap = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 3, duration: 2.5, type: `spring` },
      x: 0,
      y: 0,
    }),
    (jp = {
      opacity: 0.9,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: -1440,
      y: 0,
    }),
    (Mp = {
      opacity: 0.9,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: pp,
      x: 0,
      y: 0,
    }),
    (Np = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (Pp = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Fp = () => ({
      from: { alias: `X2zJgUEET`, data: Ef, type: `Collection` },
      offset: { type: `LiteralValue`, value: 0 },
      select: [
        { collection: `X2zJgUEET`, name: `XVH_tgELr`, type: `Identifier` },
        { collection: `X2zJgUEET`, name: `yphiaikeG`, type: `Identifier` },
        { collection: `X2zJgUEET`, name: `YHo9k2VRN`, type: `Identifier` },
        { collection: `X2zJgUEET`, name: `YHsDzvkBN`, type: `Identifier` },
        { collection: `X2zJgUEET`, name: `wfPmAnXMd`, type: `Identifier` },
        { collection: `X2zJgUEET`, name: `P3BOIXzYK`, type: `Identifier` },
        { collection: `X2zJgUEET`, name: `id`, type: `Identifier` },
      ],
    })),
    (Ip = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = je(e, t, `X2zJgUEET`);
      return n(ge(r), i, a);
    }),
    (Lp = () => ({
      from: { alias: `KaprhgW6L`, data: Ef, type: `Collection` },
      offset: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `KaprhgW6L`, name: `XVH_tgELr`, type: `Identifier` },
        { collection: `KaprhgW6L`, name: `yphiaikeG`, type: `Identifier` },
        { collection: `KaprhgW6L`, name: `YHo9k2VRN`, type: `Identifier` },
        { collection: `KaprhgW6L`, name: `YHsDzvkBN`, type: `Identifier` },
        { collection: `KaprhgW6L`, name: `wfPmAnXMd`, type: `Identifier` },
        { collection: `KaprhgW6L`, name: `P3BOIXzYK`, type: `Identifier` },
        { collection: `KaprhgW6L`, name: `id`, type: `Identifier` },
      ],
    })),
    (Rp = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = je(e, t, `KaprhgW6L`);
      return n(ge(r), i, a);
    }),
    (zp = () => ({
      from: { alias: `yP6ayj6je`, data: Ef, type: `Collection` },
      offset: { type: `LiteralValue`, value: 2 },
      select: [
        { collection: `yP6ayj6je`, name: `XVH_tgELr`, type: `Identifier` },
        { collection: `yP6ayj6je`, name: `yphiaikeG`, type: `Identifier` },
        { collection: `yP6ayj6je`, name: `YHo9k2VRN`, type: `Identifier` },
        { collection: `yP6ayj6je`, name: `YHsDzvkBN`, type: `Identifier` },
        { collection: `yP6ayj6je`, name: `wfPmAnXMd`, type: `Identifier` },
        { collection: `yP6ayj6je`, name: `P3BOIXzYK`, type: `Identifier` },
        { collection: `yP6ayj6je`, name: `id`, type: `Identifier` },
      ],
    })),
    (Bp = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = je(e, t, `yP6ayj6je`);
      return n(ge(r), i, a);
    }),
    (Vp = () => ({
      from: { alias: `dVg7BWnyh`, data: Ef, type: `Collection` },
      offset: { type: `LiteralValue`, value: 3 },
      select: [
        { collection: `dVg7BWnyh`, name: `XVH_tgELr`, type: `Identifier` },
        { collection: `dVg7BWnyh`, name: `yphiaikeG`, type: `Identifier` },
        { collection: `dVg7BWnyh`, name: `YHo9k2VRN`, type: `Identifier` },
        { collection: `dVg7BWnyh`, name: `YHsDzvkBN`, type: `Identifier` },
        { collection: `dVg7BWnyh`, name: `wfPmAnXMd`, type: `Identifier` },
        { collection: `dVg7BWnyh`, name: `P3BOIXzYK`, type: `Identifier` },
        { collection: `dVg7BWnyh`, name: `id`, type: `Identifier` },
      ],
    })),
    (Hp = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = je(e, t, `dVg7BWnyh`);
      return n(ge(r), i, a);
    }),
    (Up = () => ({
      from: { alias: `Xq8XtaAUP`, data: Ef, type: `Collection` },
      offset: { type: `LiteralValue`, value: 4 },
      select: [
        { collection: `Xq8XtaAUP`, name: `XVH_tgELr`, type: `Identifier` },
        { collection: `Xq8XtaAUP`, name: `yphiaikeG`, type: `Identifier` },
        { collection: `Xq8XtaAUP`, name: `YHo9k2VRN`, type: `Identifier` },
        { collection: `Xq8XtaAUP`, name: `YHsDzvkBN`, type: `Identifier` },
        { collection: `Xq8XtaAUP`, name: `wfPmAnXMd`, type: `Identifier` },
        { collection: `Xq8XtaAUP`, name: `P3BOIXzYK`, type: `Identifier` },
        { collection: `Xq8XtaAUP`, name: `id`, type: `Identifier` },
      ],
    })),
    (Wp = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = je(e, t, `Xq8XtaAUP`);
      return n(ge(r), i, a);
    }),
    (Gp = () => ({
      from: { alias: `pCK9VFdyL`, data: pu, type: `Collection` },
      offset: { type: `LiteralValue`, value: 0 },
      select: [
        { collection: `pCK9VFdyL`, name: `XG3otaDlZ`, type: `Identifier` },
        { collection: `pCK9VFdyL`, name: `XbJge9Fsp`, type: `Identifier` },
        { collection: `pCK9VFdyL`, name: `XpFWjsiiE`, type: `Identifier` },
        { collection: `pCK9VFdyL`, name: `F1KVBlC4y`, type: `Identifier` },
        { collection: `pCK9VFdyL`, name: `dAZk2Jaon`, type: `Identifier` },
        { collection: `pCK9VFdyL`, name: `vtA10ARAU`, type: `Identifier` },
        { collection: `pCK9VFdyL`, name: `b3XlDEEmG`, type: `Identifier` },
        { collection: `pCK9VFdyL`, name: `id`, type: `Identifier` },
      ],
    })),
    (Kp = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = je(e, t, `pCK9VFdyL`);
      return n(ge(r), i, a);
    }),
    (qp = () => ({
      from: { alias: `BqYRJ2f6p`, data: pu, type: `Collection` },
      offset: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `BqYRJ2f6p`, name: `XG3otaDlZ`, type: `Identifier` },
        { collection: `BqYRJ2f6p`, name: `XbJge9Fsp`, type: `Identifier` },
        { collection: `BqYRJ2f6p`, name: `XpFWjsiiE`, type: `Identifier` },
        { collection: `BqYRJ2f6p`, name: `F1KVBlC4y`, type: `Identifier` },
        { collection: `BqYRJ2f6p`, name: `dAZk2Jaon`, type: `Identifier` },
        { collection: `BqYRJ2f6p`, name: `vtA10ARAU`, type: `Identifier` },
        { collection: `BqYRJ2f6p`, name: `b3XlDEEmG`, type: `Identifier` },
        { collection: `BqYRJ2f6p`, name: `id`, type: `Identifier` },
      ],
    })),
    (Jp = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = je(e, t, `BqYRJ2f6p`);
      return n(ge(r), i, a);
    }),
    (Yp = () => ({
      from: { alias: `xiQtB0ygJ`, data: pu, type: `Collection` },
      offset: { type: `LiteralValue`, value: 2 },
      select: [
        { collection: `xiQtB0ygJ`, name: `XG3otaDlZ`, type: `Identifier` },
        { collection: `xiQtB0ygJ`, name: `XbJge9Fsp`, type: `Identifier` },
        { collection: `xiQtB0ygJ`, name: `XpFWjsiiE`, type: `Identifier` },
        { collection: `xiQtB0ygJ`, name: `F1KVBlC4y`, type: `Identifier` },
        { collection: `xiQtB0ygJ`, name: `dAZk2Jaon`, type: `Identifier` },
        { collection: `xiQtB0ygJ`, name: `vtA10ARAU`, type: `Identifier` },
        { collection: `xiQtB0ygJ`, name: `b3XlDEEmG`, type: `Identifier` },
        { collection: `xiQtB0ygJ`, name: `id`, type: `Identifier` },
      ],
    })),
    (Xp = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = je(e, t, `xiQtB0ygJ`);
      return n(ge(r), i, a);
    }),
    (Zp = () => ({
      from: { alias: `ws_bTD3yG`, data: pu, type: `Collection` },
      offset: { type: `LiteralValue`, value: 3 },
      select: [
        { collection: `ws_bTD3yG`, name: `XG3otaDlZ`, type: `Identifier` },
        { collection: `ws_bTD3yG`, name: `XbJge9Fsp`, type: `Identifier` },
        { collection: `ws_bTD3yG`, name: `XpFWjsiiE`, type: `Identifier` },
        { collection: `ws_bTD3yG`, name: `F1KVBlC4y`, type: `Identifier` },
        { collection: `ws_bTD3yG`, name: `dAZk2Jaon`, type: `Identifier` },
        { collection: `ws_bTD3yG`, name: `vtA10ARAU`, type: `Identifier` },
        { collection: `ws_bTD3yG`, name: `b3XlDEEmG`, type: `Identifier` },
        { collection: `ws_bTD3yG`, name: `id`, type: `Identifier` },
      ],
    })),
    (Qp = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = je(e, t, `ws_bTD3yG`);
      return n(ge(r), i, a);
    }),
    ($p = ({ value: e }) =>
      ye()
        ? null
        : g(`style`, { dangerouslySetInnerHTML: { __html: e }, 'data-framer-html-style': `` })),
    (em = { L: `WQLkyLRf1`, M: `uQRrO6hCw`, S: `TARYGz5CA` }),
    (tm = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: em[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    (nm = { component: et, variant: `PdMEYMdQg` }),
    (rm = { component: et, variant: `M2qPC78ZG` }),
    (im = { component: et, variant: `pzyIxJPyJ` }),
    (am = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
    (om = { component: er, transition: am, variant: `TYT7GU9zj` }),
    (sm = { component: er, transition: am, variant: `vH7Y42YRC` }),
    (cm = { component: er, transition: am, variant: `rFjN4yoEW` }),
    (lm = { component: er, transition: am, variant: `sP9zw4_Pq` }),
    (um = ue(
      p(function (e, t) {
        let n = b(null),
          r = t ?? n,
          i = h(),
          { activeLocale: a, setLocale: o } = he(),
          l = De(),
          { style: d, className: f, layoutId: p, variant: m, ..._ } = tm(e);
        Ee(u(() => gt({}, a), [a]));
        let [v, S] = Oe(m, rp, !1),
          { activeVariantCallback: te, delay: C } = Ce(void 0),
          w = ({ overlay: e }) =>
            te(async (...t) => {
              e.toggle();
            }),
          T = N(ap, mt, cr, dt),
          D = c(de)?.isLayoutTemplate,
          k = sp(D, !!c(O)?.transition?.layout),
          M = se(`MHiTKHdUJ`),
          P = b(null),
          ne = () => (ip() ? v !== `TARYGz5CA` : !0),
          I = () => (ip() ? ![`uQRrO6hCw`, `TARYGz5CA`].includes(v) : !0);
        Me();
        let L = () => !!(!ip() || [`uQRrO6hCw`, `TARYGz5CA`].includes(v)),
          R = b(null),
          z = se(`qkDPHMqEp`),
          re = se(`cxKKrit_s`),
          B = Te(),
          ae = se(`HwcwFPeWv`),
          V = se(`gXO5T5l0P`),
          H = se(`PlaDQURl5`);
        return (
          ce({
            '14bg376': im,
            '16nradr': nm,
            '1njupo3': lm,
            lbrotf: rm,
            o4krbg: cm,
            qd9j2w: sm,
            rpcde8: om,
          }),
          g(de.Provider, {
            value: { primaryVariantId: `WQLkyLRf1`, variantClassNames: op },
            children: x(j, {
              id: p ?? i,
              children: [
                g($p, {
                  value: `html body { background: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)); }`,
                }),
                x(E.div, {
                  ..._,
                  className: N(T, `framer-72rtr7`, f),
                  'data-framer-cursor': `16nradr`,
                  'data-selection': !0,
                  ref: r,
                  style: { ...d },
                  children: [
                    x(E.section, {
                      className: `framer-dhlfab`,
                      'data-framer-name': `Hero`,
                      id: M,
                      layout: k,
                      ref: P,
                      children: [
                        ne() &&
                          g(W, {
                            height: 24,
                            width: `min(${l?.width || `100vw`}, 1480px)`,
                            children: g(U, {
                              className: `framer-1y2k8yn-container hidden-12a2gtg`,
                              nodeId: `rNTD5l1zU`,
                              scopeId: `augiA20Il`,
                              children: g(ai, {
                                DTbD9rT1W: `Strategy`,
                                height: `100%`,
                                id: `rNTD5l1zU`,
                                L7I1r5V52: `Branding`,
                                layoutId: `rNTD5l1zU`,
                                style: { width: `100%` },
                                UVsRBS2xZ: `Web Design`,
                                variant: `p6MHOXaId`,
                                width: `100%`,
                                Y0AFFcDc9: `Art Direction`,
                              }),
                            }),
                          }),
                        x(`div`, {
                          className: `framer-ty36tk`,
                          'data-framer-name': `Top`,
                          children: [
                            x(`div`, {
                              className: `framer-1n76yiy`,
                              'data-framer-name': `Heading`,
                              children: [
                                g(`div`, {
                                  className: `framer-x5pde`,
                                  'data-framer-name': `1`,
                                  children: g(kf, {
                                    __fromCanvasComponent: !0,
                                    animate: cp,
                                    children: g(s, {
                                      children: g(`h3`, {
                                        className: `framer-styles-preset-sng7in`,
                                        'data-styles-preset': `bLxN69a46`,
                                        children: `Derived in SUSTC`,
                                      }),
                                    }),
                                    className: `framer-7eph4s`,
                                    'data-framer-appear-id': `7eph4s`,
                                    'data-framer-name': `Text`,
                                    fonts: [`Inter`],
                                    initial: lp,
                                    optimized: !0,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                g(`div`, {
                                  className: `framer-1ki04el`,
                                  'data-framer-name': `2`,
                                  children: g(kf, {
                                    __fromCanvasComponent: !0,
                                    animate: up,
                                    children: g(s, {
                                      children: g(`h3`, {
                                        className: `framer-styles-preset-sng7in`,
                                        'data-styles-preset': `bLxN69a46`,
                                        children: `Comic and Anime Party`,
                                      }),
                                    }),
                                    className: `framer-19l0zu6`,
                                    'data-framer-appear-id': `19l0zu6`,
                                    'data-framer-name': `Text`,
                                    fonts: [`Inter`],
                                    initial: lp,
                                    optimized: !0,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                g(`div`, {
                                  className: `framer-mxo2f9`,
                                  'data-framer-name': `3`,
                                  children: g(kf, {
                                    __fromCanvasComponent: !0,
                                    animate: dp,
                                    children: g(s, {
                                      children: g(`h3`, {
                                        className: `framer-styles-preset-sng7in`,
                                        'data-styles-preset': `bLxN69a46`,
                                        children: `Welcome Everyone`,
                                      }),
                                    }),
                                    className: `framer-1xqbms1`,
                                    'data-framer-appear-id': `1xqbms1`,
                                    'data-framer-name': `Text`,
                                    fonts: [`Inter`],
                                    initial: lp,
                                    optimized: !0,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                g(`div`, {
                                  className: `framer-za16rf`,
                                  'data-framer-name': `4`,
                                  children: g(kf, {
                                    __fromCanvasComponent: !0,
                                    animate: fp,
                                    children: g(s, {
                                      children: g(`h3`, {
                                        className: `framer-styles-preset-sng7in`,
                                        'data-styles-preset': `bLxN69a46`,
                                        children: `ようこそ〜`,
                                      }),
                                    }),
                                    className: `framer-9kazno`,
                                    'data-framer-appear-id': `9kazno`,
                                    'data-framer-name': `Text`,
                                    fonts: [`Inter`],
                                    initial: lp,
                                    optimized: !0,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            g(Cp, {
                              dismissWithEsc: !0,
                              children: (e) =>
                                g(ee, {
                                  children: x(E.div, {
                                    className: `framer-ajhxcq`,
                                    'data-framer-name': `Reel`,
                                    id: `ajhxcq`,
                                    onTap: w({ overlay: e }),
                                    children: [
                                      g(W, {
                                        children: g(G, {
                                          breakpoint: v,
                                          overrides: { TARYGz5CA: { animate: gp } },
                                          children: g(Mf, {
                                            animate: mp,
                                            className: `framer-1uxqzhi-container`,
                                            'data-framer-appear-id': `1uxqzhi`,
                                            'data-framer-cursor': `lbrotf`,
                                            initial: hp,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: `KbVENUdy6`,
                                            optimized: !0,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            children: g(G, {
                                              breakpoint: v,
                                              overrides: {
                                                TARYGz5CA: {
                                                  style: { height: `100%`, width: `100%` },
                                                },
                                              },
                                              children: g(Lt, {
                                                borderRadius: 0,
                                                effect: `evade`,
                                                height: `100%`,
                                                id: `KbVENUdy6`,
                                                layoutId: `KbVENUdy6`,
                                                perspective: 500,
                                                scale: 1,
                                                tiltLimit: 6,
                                                width: `100%`,
                                                children: g(W, {
                                                  height: 449,
                                                  width: `554px`,
                                                  children: g(U, {
                                                    className: `framer-unlq7x-container`,
                                                    inComponentSlot: !0,
                                                    nodeId: `j9kRA3hEl`,
                                                    rendersWithMotion: !0,
                                                    scopeId: `augiA20Il`,
                                                    children: g(As, {
                                                      BA7jwhB7b: `<iframe
  src="https://player.bilibili.com/player.html?bvid=BV1FbtMzCE4d&page=1"
  frameborder="0"
  allowfullscreen="true"
  scrolling="no"
  allow="autoplay; fullscreen; picture-in-picture"
  style="
    position: absolute;
    inset: 2;
    width: 130%;
    height: 300%;
    transform-origin: 20% 0%;
  "
></iframe>
`,
                                                      height: `100%`,
                                                      id: `j9kRA3hEl`,
                                                      layoutId: `j9kRA3hEl`,
                                                      style: { height: `100%`, width: `100%` },
                                                      tuzgfJ02F: `html`,
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      g(A, {
                                        children:
                                          e.visible &&
                                          g(ee, {
                                            children: y(
                                              g(pe, {
                                                triggerId: `ajhxcq`,
                                                children: x(Pe, {
                                                  children: [
                                                    g(
                                                      E.div,
                                                      {
                                                        animate: {
                                                          opacity: 1,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0,
                                                            ease: [0.5, 0, 0.88, 0.77],
                                                            type: `tween`,
                                                          },
                                                        },
                                                        className: N(T, `framer-gul5pu`),
                                                        'data-framer-portal-id': `ajhxcq`,
                                                        exit: {
                                                          opacity: 0,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0,
                                                            ease: [0.12, 0.23, 0.5, 1],
                                                            type: `tween`,
                                                          },
                                                        },
                                                        initial: { opacity: 0 },
                                                        onTap: () => e.hide(),
                                                      },
                                                      `Trb0vbelU`
                                                    ),
                                                    g(E.div, {
                                                      animate: yp,
                                                      className: N(T, `framer-169szll`),
                                                      'data-framer-name': `BG`,
                                                      'data-framer-portal-id': `ajhxcq`,
                                                      exit: vp,
                                                      initial: bp,
                                                    }),
                                                    g(E.div, {
                                                      animate: yp,
                                                      className: N(T, `framer-nqfrei`),
                                                      'data-border': !0,
                                                      'data-framer-name': `Container`,
                                                      'data-framer-portal-id': `ajhxcq`,
                                                      exit: vp,
                                                      initial: bp,
                                                      transformTemplate: xp,
                                                      children: g(W, {
                                                        children: g(U, {
                                                          className: `framer-o1tapf-container`,
                                                          isAuthoredByUser: !0,
                                                          isModuleExternal: !0,
                                                          nodeId: `gcXxkyhQ9`,
                                                          scopeId: `augiA20Il`,
                                                          children: g(En, {
                                                            borderRadius: 0,
                                                            bottomLeftRadius: 0,
                                                            bottomRightRadius: 0,
                                                            height: `100%`,
                                                            id: `gcXxkyhQ9`,
                                                            isMixedBorderRadius: !1,
                                                            isRed: !0,
                                                            layoutId: `gcXxkyhQ9`,
                                                            play: `Off`,
                                                            shouldMute: !0,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            thumbnail: `High Quality`,
                                                            topLeftRadius: 0,
                                                            topRightRadius: 0,
                                                            url: `https://youtu.be/1VNQB0SYLII?si=JHiJNWCy_I3bF213`,
                                                            width: `100%`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              Sp()
                                            ),
                                          }),
                                      }),
                                    ],
                                  }),
                                }),
                            }),
                          ],
                        }),
                        x(`div`, {
                          className: `framer-1jn9ae6`,
                          'data-framer-name': `Bottom`,
                          children: [
                            g(Pf, {
                              animate: wp,
                              className: `framer-1snsm42`,
                              'data-framer-appear-id': `1snsm42`,
                              'data-framer-name': `Line`,
                              initial: Tp,
                              optimized: !0,
                            }),
                            x(Pf, {
                              animate: Ep,
                              className: `framer-2xxdw2`,
                              'data-framer-appear-id': `2xxdw2`,
                              'data-framer-name': `Title`,
                              initial: Dp,
                              optimized: !0,
                              children: [
                                g(G, {
                                  breakpoint: v,
                                  overrides: {
                                    TARYGz5CA: { viewBox: `0 0 1157.47 343` },
                                    uQRrO6hCw: { viewBox: `0 0 1157.47 343` },
                                  },
                                  children: g(kf, {
                                    __fromCanvasComponent: !0,
                                    animate: Op,
                                    children: g(s, {
                                      children: g(`p`, {
                                        style: {
                                          '--font-selector': `RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk`,
                                          '--framer-font-family': `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                          '--framer-font-open-type-features': `'ss01' on, 'ss02' on, 'ss07' on, 'cv01' on, 'cv09' on, 'cv02' on, 'cv03' on, 'cv04' on, 'cv12' on, 'cv10' on, 'cv08' on, 'cv05' on, 'cv07' on, 'cv13' on, 'cv06' on`,
                                          '--framer-font-size': `380.8272648352238px`,
                                          '--framer-font-weight': `600`,
                                          '--framer-letter-spacing': `-21.47px`,
                                          '--framer-line-height': `90%`,
                                          '--framer-text-color': `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                        },
                                        children: `SCAP™`,
                                      }),
                                    }),
                                    className: `framer-1nbr0fn`,
                                    'data-framer-appear-id': `1nbr0fn`,
                                    'data-framer-name': `Text`,
                                    fonts: [`FR;InterDisplay-SemiBold`],
                                    initial: kp,
                                    optimized: !0,
                                    verticalAlignment: `top`,
                                    viewBox: `0 0 1152 343`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                g(Pf, {
                                  animate: Ap,
                                  className: `framer-icxlw2`,
                                  'data-framer-appear-id': `icxlw2`,
                                  'data-framer-name': `Loader`,
                                  initial: jp,
                                  optimized: !0,
                                  children: g(Pf, {
                                    animate: Mp,
                                    className: `framer-19mjztk`,
                                    'data-framer-appear-id': `19mjztk`,
                                    'data-framer-name': `Filler`,
                                    initial: kp,
                                    optimized: !0,
                                  }),
                                }),
                              ],
                            }),
                            g(Pf, {
                              animate: wp,
                              className: `framer-1oqrrs3`,
                              'data-framer-appear-id': `1oqrrs3`,
                              'data-framer-name': `Line`,
                              initial: Tp,
                              optimized: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    x(E.section, {
                      className: `framer-1ax983m`,
                      'data-framer-name': `About`,
                      layout: k,
                      children: [
                        g(W, {
                          height: 24,
                          width: `min(${l?.width || `100vw`}, 1480px)`,
                          children: g(U, {
                            className: `framer-1njfbtx-container`,
                            nodeId: `RkyiUStin`,
                            scopeId: `augiA20Il`,
                            children: g(G, {
                              breakpoint: v,
                              overrides: {
                                TARYGz5CA: { variant: `CmSf9J7E0` },
                                uQRrO6hCw: { variant: `kQZZjN_Db` },
                              },
                              children: g(Be, {
                                height: `100%`,
                                Hq7BZwPem: `(WDX® — 02)`,
                                id: `RkyiUStin`,
                                layoutId: `RkyiUStin`,
                                NHubkDs7R: `Digital Designer`,
                                pWoyTVtQ4: `© Curated Interfaces ビジュアル`,
                                style: { width: `100%` },
                                variant: `XFF72MIUC`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        x(`div`, {
                          className: `framer-iysrdq`,
                          'data-framer-name': `Content`,
                          children: [
                            I() &&
                              g(W, {
                                height: 24,
                                width: `min(${l?.width || `100vw`}, 1480px)`,
                                children: g(U, {
                                  className: `framer-1ms48bc-container hidden-1tqphhv hidden-12a2gtg`,
                                  nodeId: `YcKJy39p7`,
                                  scopeId: `augiA20Il`,
                                  children: g(qe, {
                                    F9s7G6Ce8: `Freelancer`,
                                    height: `100%`,
                                    id: `YcKJy39p7`,
                                    layoutId: `YcKJy39p7`,
                                    rpGEGECg1: `Creative Developer`,
                                    Ssp7h9ebx: `Visual`,
                                    style: { width: `100%` },
                                    variant: `SJFvvEqmc`,
                                    width: `100%`,
                                    xxFoBYQ6z: `Digital Nomad`,
                                  }),
                                }),
                              }),
                            g(`div`, {
                              className: `framer-lr824`,
                              'data-framer-name': `Image`,
                              children: g(G, {
                                breakpoint: v,
                                overrides: {
                                  TARYGz5CA: {
                                    background: {
                                      alt: `Women`,
                                      fit: `fill`,
                                      pixelHeight: 2732,
                                      pixelWidth: 1932,
                                      sizes: `max(min(${l?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                      src: `https://framerusercontent.com/images/Yl8pgquHgMghtIKTsgybkVH9Ks.jpg?width=1932&height=2732`,
                                      srcSet: `https://framerusercontent.com/images/Yl8pgquHgMghtIKTsgybkVH9Ks.jpg?scale-down-to=1024&width=1932&height=2732 724w,https://framerusercontent.com/images/Yl8pgquHgMghtIKTsgybkVH9Ks.jpg?scale-down-to=2048&width=1932&height=2732 1448w,https://framerusercontent.com/images/Yl8pgquHgMghtIKTsgybkVH9Ks.jpg?width=1932&height=2732 1932w`,
                                    },
                                  },
                                  uQRrO6hCw: {
                                    background: {
                                      alt: `Women`,
                                      fit: `fill`,
                                      pixelHeight: 2732,
                                      pixelWidth: 1932,
                                      sizes: `max(min(${l?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                      src: `https://framerusercontent.com/images/Yl8pgquHgMghtIKTsgybkVH9Ks.jpg?width=1932&height=2732`,
                                      srcSet: `https://framerusercontent.com/images/Yl8pgquHgMghtIKTsgybkVH9Ks.jpg?scale-down-to=1024&width=1932&height=2732 724w,https://framerusercontent.com/images/Yl8pgquHgMghtIKTsgybkVH9Ks.jpg?scale-down-to=2048&width=1932&height=2732 1448w,https://framerusercontent.com/images/Yl8pgquHgMghtIKTsgybkVH9Ks.jpg?width=1932&height=2732 1932w`,
                                    },
                                  },
                                },
                                children: g(Lf, {
                                  __framer__adjustPosition: !1,
                                  __framer__offset: 0,
                                  __framer__parallaxTransformEnabled: !0,
                                  __framer__speed: 110,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  background: {
                                    alt: `Women`,
                                    fit: `fill`,
                                    pixelHeight: 2732,
                                    pixelWidth: 1932,
                                    sizes: `473px`,
                                    src: `https://framerusercontent.com/images/Yl8pgquHgMghtIKTsgybkVH9Ks.jpg?width=1932&height=2732`,
                                    srcSet: `https://framerusercontent.com/images/Yl8pgquHgMghtIKTsgybkVH9Ks.jpg?scale-down-to=1024&width=1932&height=2732 724w,https://framerusercontent.com/images/Yl8pgquHgMghtIKTsgybkVH9Ks.jpg?scale-down-to=2048&width=1932&height=2732 1448w,https://framerusercontent.com/images/Yl8pgquHgMghtIKTsgybkVH9Ks.jpg?width=1932&height=2732 1932w`,
                                  },
                                  className: `framer-udqf9x`,
                                  'data-framer-name': `Parallex Effect`,
                                }),
                              }),
                            }),
                            x(`div`, {
                              className: `framer-1rl8hlq`,
                              'data-framer-name': `Content`,
                              children: [
                                x(`div`, {
                                  className: `framer-1v555c3`,
                                  'data-framer-name': `Heading`,
                                  children: [
                                    g(F, {
                                      __fromCanvasComponent: !0,
                                      children: g(s, {
                                        children: g(`h3`, {
                                          className: `framer-styles-preset-sng7in`,
                                          'data-styles-preset': `bLxN69a46`,
                                          children: `在南方科技大学的校园里，有这样一个充满活力与创意的社团 ——SCAP 动漫社。这里是 ACG 爱好者的天堂，是挥洒热情、结交同好的温暖家园。无论你是资深二次元达人，还是刚刚踏入动漫世界的萌新，都能在这里找到属于自己的舞台。`,
                                        }),
                                      }),
                                      className: `framer-em85qg`,
                                      'data-framer-name': `Text`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    g(ie, {
                                      links: [
                                        {
                                          href: { webPageId: `Yb_WXsK4v` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `Yb_WXsK4v` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `Yb_WXsK4v` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        g(W, {
                                          height: 44,
                                          children: g(U, {
                                            className: `framer-1ajmrvo-container`,
                                            nodeId: `Fv0lw2fWK`,
                                            scopeId: `augiA20Il`,
                                            children: g(G, {
                                              breakpoint: v,
                                              overrides: {
                                                TARYGz5CA: {
                                                  JQPbxOZrF: e[2],
                                                  variant: `TM6f2ytrb`,
                                                },
                                                uQRrO6hCw: { JQPbxOZrF: e[1] },
                                              },
                                              children: g(ut, {
                                                CSyo3aTPk: !1,
                                                Gh9QOfeLM: `learn more`,
                                                height: `100%`,
                                                id: `Fv0lw2fWK`,
                                                JQPbxOZrF: e[0],
                                                layoutId: `Fv0lw2fWK`,
                                                variant: `iJrMk7HF5`,
                                                vZZm_o9LA: !1,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                  ],
                                }),
                                x(`div`, {
                                  className: `framer-g03chh`,
                                  'data-framer-name': `Bottom`,
                                  children: [
                                    x(`div`, {
                                      className: `framer-175z5lx`,
                                      'data-framer-name': `Top Logos`,
                                      children: [
                                        ne() &&
                                          g(G, {
                                            breakpoint: v,
                                            overrides: {
                                              uQRrO6hCw: {
                                                width: `max((min(${l?.width || `100vw`}, 1480px) - 48px) / 2, 1px)`,
                                              },
                                            },
                                            children: g(W, {
                                              height: 151,
                                              children: g(U, {
                                                className: `framer-1xfh2b8-container hidden-12a2gtg`,
                                                nodeId: `qep3AIqZp`,
                                                scopeId: `augiA20Il`,
                                                children: g(Gs, {
                                                  BDcLqNvJI: `0px`,
                                                  height: `100%`,
                                                  id: `qep3AIqZp`,
                                                  layoutId: `qep3AIqZp`,
                                                  style: { width: `100%` },
                                                  variant: `D_1vjmCIs`,
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        ne() &&
                                          g(G, {
                                            breakpoint: v,
                                            overrides: {
                                              uQRrO6hCw: {
                                                width: `max((min(${l?.width || `100vw`}, 1480px) - 48px) / 2, 1px)`,
                                              },
                                            },
                                            children: g(W, {
                                              height: 151,
                                              children: g(U, {
                                                className: `framer-1tvmme6-container hidden-12a2gtg`,
                                                nodeId: `T4tsvu21P`,
                                                scopeId: `augiA20Il`,
                                                children: g(Gs, {
                                                  BDcLqNvJI: `0px`,
                                                  height: `100%`,
                                                  id: `T4tsvu21P`,
                                                  layoutId: `T4tsvu21P`,
                                                  style: { width: `100%` },
                                                  variant: `D_1vjmCIs`,
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                      ],
                                    }),
                                    x(`div`, {
                                      className: `framer-uxzvq2`,
                                      'data-framer-name': `Bottom Logos`,
                                      children: [
                                        ne() &&
                                          g(G, {
                                            breakpoint: v,
                                            overrides: {
                                              uQRrO6hCw: {
                                                width: `max((min(${l?.width || `100vw`}, 1480px) - 48px) / 5, 1px)`,
                                              },
                                            },
                                            children: g(W, {
                                              height: 151,
                                              children: g(U, {
                                                className: `framer-1yslzav-container hidden-12a2gtg`,
                                                nodeId: `JHvbstfzJ`,
                                                scopeId: `augiA20Il`,
                                                children: g(Gs, {
                                                  BDcLqNvJI: `0px`,
                                                  height: `100%`,
                                                  id: `JHvbstfzJ`,
                                                  layoutId: `JHvbstfzJ`,
                                                  style: { width: `100%` },
                                                  variant: `D_1vjmCIs`,
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        g(G, {
                                          breakpoint: v,
                                          overrides: {
                                            TARYGz5CA: {
                                              width: `calc(min(${l?.width || `100vw`}, 1480px) - 40px)`,
                                            },
                                            uQRrO6hCw: {
                                              width: `max((min(${l?.width || `100vw`}, 1480px) - 48px) / 5, 1px)`,
                                            },
                                          },
                                          children: g(W, {
                                            height: 151,
                                            children: g(U, {
                                              className: `framer-w56dtp-container`,
                                              nodeId: `CIPVTHjl_`,
                                              scopeId: `augiA20Il`,
                                              children: g(G, {
                                                breakpoint: v,
                                                overrides: { TARYGz5CA: { BDcLqNvJI: `10px` } },
                                                children: g(Gs, {
                                                  BDcLqNvJI: `0px 0px 10px 10px`,
                                                  height: `100%`,
                                                  id: `CIPVTHjl_`,
                                                  layoutId: `CIPVTHjl_`,
                                                  MSyIX7cs8: Np(
                                                    {
                                                      pixelHeight: 67,
                                                      pixelWidth: 303,
                                                      src: `https://framerusercontent.com/images/np97j2F8KUZ2HLiullJ6eZCAlsQ.png?width=303&height=67`,
                                                    },
                                                    ``
                                                  ),
                                                  style: { width: `100%` },
                                                  variant: `e9mENscFv`,
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        ne() &&
                                          g(G, {
                                            breakpoint: v,
                                            overrides: {
                                              uQRrO6hCw: {
                                                width: `max((min(${l?.width || `100vw`}, 1480px) - 48px) / 5, 1px)`,
                                              },
                                            },
                                            children: g(W, {
                                              height: 151,
                                              children: g(U, {
                                                className: `framer-5sd1c5-container hidden-12a2gtg`,
                                                nodeId: `LcXycjGmo`,
                                                scopeId: `augiA20Il`,
                                                children: g(Gs, {
                                                  BDcLqNvJI: `0px`,
                                                  height: `100%`,
                                                  id: `LcXycjGmo`,
                                                  layoutId: `LcXycjGmo`,
                                                  style: { width: `100%` },
                                                  variant: `D_1vjmCIs`,
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        g(G, {
                                          breakpoint: v,
                                          overrides: {
                                            TARYGz5CA: {
                                              width: `calc(min(${l?.width || `100vw`}, 1480px) - 40px)`,
                                            },
                                            uQRrO6hCw: {
                                              width: `max((min(${l?.width || `100vw`}, 1480px) - 48px) / 5, 1px)`,
                                            },
                                          },
                                          children: g(W, {
                                            height: 151,
                                            children: g(U, {
                                              className: `framer-1umn22f-container`,
                                              nodeId: `MOxQuOqXt`,
                                              scopeId: `augiA20Il`,
                                              children: g(G, {
                                                breakpoint: v,
                                                overrides: { TARYGz5CA: { BDcLqNvJI: `10px` } },
                                                children: g(Gs, {
                                                  BDcLqNvJI: `0px 0px 10px 10px`,
                                                  height: `100%`,
                                                  id: `MOxQuOqXt`,
                                                  layoutId: `MOxQuOqXt`,
                                                  MSyIX7cs8: Np(
                                                    {
                                                      pixelHeight: 66,
                                                      pixelWidth: 258,
                                                      src: `https://framerusercontent.com/images/f0y1IAXP7xxPZoecHyx9XHFdiHA.png?width=258&height=66`,
                                                    },
                                                    ``
                                                  ),
                                                  style: { width: `100%` },
                                                  variant: `e9mENscFv`,
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        ne() &&
                                          g(G, {
                                            breakpoint: v,
                                            overrides: {
                                              uQRrO6hCw: {
                                                width: `max((min(${l?.width || `100vw`}, 1480px) - 48px) / 5, 1px)`,
                                              },
                                            },
                                            children: g(W, {
                                              height: 151,
                                              children: g(U, {
                                                className: `framer-1pdl6xk-container hidden-12a2gtg`,
                                                nodeId: `UnNtufslh`,
                                                scopeId: `augiA20Il`,
                                                children: g(Gs, {
                                                  BDcLqNvJI: `0px`,
                                                  height: `100%`,
                                                  id: `UnNtufslh`,
                                                  layoutId: `UnNtufslh`,
                                                  style: { width: `100%` },
                                                  variant: `D_1vjmCIs`,
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    x(E.section, {
                      className: `framer-7ma1j6`,
                      'data-framer-name': `Work`,
                      layout: k,
                      children: [
                        g(W, {
                          height: 24,
                          width: `min(${l?.width || `100vw`}, 1480px)`,
                          children: g(U, {
                            className: `framer-tjjepc-container`,
                            nodeId: `XfhgclTzR`,
                            scopeId: `augiA20Il`,
                            children: g(G, {
                              breakpoint: v,
                              overrides: {
                                TARYGz5CA: {
                                  pWoyTVtQ4: `© Featured Projects`,
                                  variant: `CmSf9J7E0`,
                                },
                                uQRrO6hCw: { variant: `kQZZjN_Db` },
                              },
                              children: g(Be, {
                                height: `100%`,
                                Hq7BZwPem: `(WDX® — 03)`,
                                id: `XfhgclTzR`,
                                layoutId: `XfhgclTzR`,
                                NHubkDs7R: `Creative Development`,
                                pWoyTVtQ4: `© Featured Projects プロジェクト`,
                                style: { width: `100%` },
                                variant: `XFF72MIUC`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        x(`div`, {
                          className: `framer-nioezp`,
                          'data-framer-name': `Container`,
                          children: [
                            x(`div`, {
                              className: `framer-1iqzdbj`,
                              'data-framer-name': `Top`,
                              children: [
                                g(W, {
                                  height: 200,
                                  width: `min(${l?.width || `100vw`}, 1480px)`,
                                  children: g(U, {
                                    className: `framer-19mrkgn-container`,
                                    nodeId: `YpgrrxUtY`,
                                    scopeId: `augiA20Il`,
                                    children: g(G, {
                                      breakpoint: v,
                                      overrides: {
                                        TARYGz5CA: { variant: `mURiTOP2G` },
                                        uQRrO6hCw: { variant: `bkXk11oSP` },
                                      },
                                      children: g(ma, {
                                        bO6IhWfEy: `STAR影法师 © `,
                                        height: `100%`,
                                        id: `YpgrrxUtY`,
                                        layoutId: `YpgrrxUtY`,
                                        style: { width: `100%` },
                                        variant: `XkAD5dcWw`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                g(`div`, {
                                  className: `framer-hrs0gc`,
                                  'data-framer-name': `Line`,
                                }),
                                x(`div`, {
                                  className: `framer-1vtzatb`,
                                  'data-framer-name': `Body & Button`,
                                  children: [
                                    g(F, {
                                      __fromCanvasComponent: !0,
                                      children: g(s, {
                                        children: x(`p`, {
                                          className: `framer-styles-preset-14w8e6o`,
                                          'data-styles-preset': `FsS03h6Vk`,
                                          style: {
                                            '--framer-text-color': `var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgb(187, 187, 187))`,
                                          },
                                          children: [
                                            `Every project is a chance to blend design and development, shaping bold interactive ideas into `,
                                            g(`span`, {
                                              style: {
                                                '--framer-text-color': `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                              },
                                              children: x(`strong`, {
                                                children: [
                                                  `sleek digital `,
                                                  g(`br`, {}),
                                                  `realities — built with`,
                                                ],
                                              }),
                                            }),
                                            ` intent, speed, and visual clarity that attracts lot of peoples.`,
                                          ],
                                        }),
                                      }),
                                      className: `framer-1nbs19a`,
                                      'data-framer-name': `Body Text`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    g(ie, {
                                      links: [
                                        {
                                          href: { webPageId: `TMUEGlXDC` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `TMUEGlXDC` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `TMUEGlXDC` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        g(W, {
                                          height: 44,
                                          children: g(U, {
                                            className: `framer-1k5nnzf-container`,
                                            nodeId: `GIHZ11bCZ`,
                                            scopeId: `augiA20Il`,
                                            children: g(G, {
                                              breakpoint: v,
                                              overrides: {
                                                TARYGz5CA: {
                                                  JQPbxOZrF: e[2],
                                                  variant: `TM6f2ytrb`,
                                                },
                                                uQRrO6hCw: { JQPbxOZrF: e[1] },
                                              },
                                              children: g(ut, {
                                                CSyo3aTPk: !1,
                                                Gh9QOfeLM: `SEE WORKS`,
                                                height: `100%`,
                                                id: `GIHZ11bCZ`,
                                                JQPbxOZrF: e[0],
                                                layoutId: `GIHZ11bCZ`,
                                                variant: `iJrMk7HF5`,
                                                vZZm_o9LA: !1,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            g(`div`, {
                              className: `framer-ydi31p`,
                              'data-framer-name': `Bottom`,
                              children: x(`div`, {
                                className: `framer-1ejixw2`,
                                'data-framer-name': `Cards`,
                                children: [
                                  x(`div`, {
                                    className: `framer-yyr9dg`,
                                    'data-framer-name': `1`,
                                    children: [
                                      g(`div`, {
                                        className: `framer-aieywt`,
                                        'data-framer-name': `Work Card 1`,
                                        children: g(`div`, {
                                          className: `framer-1avqepk`,
                                          children: g(ke, {
                                            children: g(Ip, {
                                              pageSize: 1,
                                              query: Fp(),
                                              children: (e, t, n) =>
                                                g(ee, {
                                                  children: e?.map(
                                                    (
                                                      {
                                                        id: e,
                                                        P3BOIXzYK: t,
                                                        wfPmAnXMd: n,
                                                        XVH_tgELr: r,
                                                        YHo9k2VRN: i,
                                                        YHsDzvkBN: a,
                                                        yphiaikeG: o,
                                                      },
                                                      s
                                                    ) => (
                                                      (r ??= ``),
                                                      (a ??= ``),
                                                      (n ??= ``),
                                                      (t ??= ``),
                                                      g(
                                                        j,
                                                        {
                                                          id: `X2zJgUEET-${e}`,
                                                          children: g(oe.Provider, {
                                                            value: { XVH_tgELr: r },
                                                            children: g(be, {
                                                              href: {
                                                                pathVariables: { XVH_tgELr: r },
                                                                webPageId: `AQdzOvSwE`,
                                                              },
                                                              motionChild: !0,
                                                              nodeId: `HiQeHNpv4`,
                                                              scopeId: `augiA20Il`,
                                                              children: g(E.a, {
                                                                className: `framer-tqvx7w framer-lux5qc`,
                                                                'data-framer-name': `Project`,
                                                                children: g(G, {
                                                                  breakpoint: v,
                                                                  overrides: {
                                                                    TARYGz5CA: {
                                                                      height: 390,
                                                                      width: `max(min(${l?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                                                    },
                                                                    uQRrO6hCw: {
                                                                      height: 600,
                                                                      width: `max(min(${l?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                                                    },
                                                                  },
                                                                  children: g(W, {
                                                                    height: 749,
                                                                    width: `max((min(${l?.width || `100vw`}, 1480px) - 48px) * 0.5014, 1px)`,
                                                                    children: g(U, {
                                                                      className: `framer-1nqezu6-container`,
                                                                      'data-framer-cursor': `14bg376`,
                                                                      nodeId: `NajvUnw1T`,
                                                                      scopeId: `augiA20Il`,
                                                                      children: g(G, {
                                                                        breakpoint: v,
                                                                        overrides: {
                                                                          TARYGz5CA: {
                                                                            style: {
                                                                              height: `100%`,
                                                                              width: `100%`,
                                                                            },
                                                                            variant: `gO3DGLxth`,
                                                                          },
                                                                          uQRrO6hCw: {
                                                                            style: {
                                                                              height: `100%`,
                                                                              width: `100%`,
                                                                            },
                                                                            variant: `gO3DGLxth`,
                                                                          },
                                                                        },
                                                                        children: g(Dr, {
                                                                          AqtGNwpbH: n,
                                                                          dRIEmL6Sy: a,
                                                                          G7pLazd_I: t,
                                                                          height: `100%`,
                                                                          id: `NajvUnw1T`,
                                                                          layoutId: `NajvUnw1T`,
                                                                          PC_QK2Qt6: Pp(i),
                                                                          style: { width: `100%` },
                                                                          T69HEV85j: Pp(o),
                                                                          variant: `Cx_9OikEn`,
                                                                          width: `100%`,
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        },
                                                        e
                                                      )
                                                    )
                                                  ),
                                                }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      g(`div`, {
                                        className: `framer-1bn3y75`,
                                        'data-framer-name': `Work Card 2`,
                                        children: g(`div`, {
                                          className: `framer-r9l3vn`,
                                          children: g(ke, {
                                            children: g(Rp, {
                                              pageSize: 1,
                                              query: Lp(),
                                              children: (e, t, n) =>
                                                g(ee, {
                                                  children: e?.map(
                                                    (
                                                      {
                                                        id: e,
                                                        P3BOIXzYK: t,
                                                        wfPmAnXMd: n,
                                                        XVH_tgELr: r,
                                                        YHo9k2VRN: i,
                                                        YHsDzvkBN: a,
                                                        yphiaikeG: o,
                                                      },
                                                      s
                                                    ) => (
                                                      (r ??= ``),
                                                      (a ??= ``),
                                                      (n ??= ``),
                                                      (t ??= ``),
                                                      g(
                                                        j,
                                                        {
                                                          id: `KaprhgW6L-${e}`,
                                                          children: g(oe.Provider, {
                                                            value: { XVH_tgELr: r },
                                                            children: g(be, {
                                                              href: {
                                                                pathVariables: { XVH_tgELr: r },
                                                                webPageId: `AQdzOvSwE`,
                                                              },
                                                              motionChild: !0,
                                                              nodeId: `Ag5f5XlUr`,
                                                              scopeId: `augiA20Il`,
                                                              children: g(E.a, {
                                                                className: `framer-1c3zuno framer-lux5qc`,
                                                                'data-framer-name': `Project`,
                                                                children: g(G, {
                                                                  breakpoint: v,
                                                                  overrides: {
                                                                    TARYGz5CA: {
                                                                      width: `max(min(${l?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                                                    },
                                                                    uQRrO6hCw: {
                                                                      height: 600,
                                                                      width: `max(min(${l?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                                                    },
                                                                  },
                                                                  children: g(W, {
                                                                    height: 390,
                                                                    width: `max((min(${l?.width || `100vw`}, 1480px) - 48px) * 0.3506, 1px)`,
                                                                    children: g(U, {
                                                                      className: `framer-1io1jaa-container`,
                                                                      'data-framer-cursor': `14bg376`,
                                                                      nodeId: `TXEs8QD0D`,
                                                                      scopeId: `augiA20Il`,
                                                                      children: g(G, {
                                                                        breakpoint: v,
                                                                        overrides: {
                                                                          TARYGz5CA: {
                                                                            variant: `gO3DGLxth`,
                                                                          },
                                                                          uQRrO6hCw: {
                                                                            variant: `gO3DGLxth`,
                                                                          },
                                                                        },
                                                                        children: g(Dr, {
                                                                          AqtGNwpbH: n,
                                                                          dRIEmL6Sy: a,
                                                                          G7pLazd_I: t,
                                                                          height: `100%`,
                                                                          id: `TXEs8QD0D`,
                                                                          layoutId: `TXEs8QD0D`,
                                                                          PC_QK2Qt6: Pp(i),
                                                                          style: {
                                                                            height: `100%`,
                                                                            width: `100%`,
                                                                          },
                                                                          T69HEV85j: Pp(o),
                                                                          variant: `Cx_9OikEn`,
                                                                          width: `100%`,
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        },
                                                        e
                                                      )
                                                    )
                                                  ),
                                                }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  g(`div`, {
                                    className: `framer-1ep4u7l`,
                                    'data-framer-name': `2`,
                                    children: g(`div`, {
                                      className: `framer-19fh9pm`,
                                      children: g(ke, {
                                        children: g(Bp, {
                                          pageSize: 1,
                                          query: zp(),
                                          children: (e, t, n) =>
                                            g(ee, {
                                              children: e?.map(
                                                (
                                                  {
                                                    id: e,
                                                    P3BOIXzYK: t,
                                                    wfPmAnXMd: n,
                                                    XVH_tgELr: r,
                                                    YHo9k2VRN: i,
                                                    YHsDzvkBN: a,
                                                    yphiaikeG: o,
                                                  },
                                                  s
                                                ) => (
                                                  (r ??= ``),
                                                  (a ??= ``),
                                                  (n ??= ``),
                                                  (t ??= ``),
                                                  g(
                                                    j,
                                                    {
                                                      id: `yP6ayj6je-${e}`,
                                                      children: g(oe.Provider, {
                                                        value: { XVH_tgELr: r },
                                                        children: g(be, {
                                                          href: {
                                                            pathVariables: { XVH_tgELr: r },
                                                            webPageId: `AQdzOvSwE`,
                                                          },
                                                          motionChild: !0,
                                                          nodeId: `DE5ctoLbr`,
                                                          scopeId: `augiA20Il`,
                                                          children: g(E.a, {
                                                            className: `framer-859d0m framer-lux5qc`,
                                                            'data-framer-name': `Project`,
                                                            children: g(G, {
                                                              breakpoint: v,
                                                              overrides: {
                                                                TARYGz5CA: {
                                                                  height: 390,
                                                                  width: `max(min(${l?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                                                },
                                                                uQRrO6hCw: {
                                                                  height: 600,
                                                                  width: `max(min(${l?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                                                },
                                                              },
                                                              children: g(W, {
                                                                height: 590,
                                                                width: `max((min(${l?.width || `100vw`}, 1480px) - 48px) * 0.3218, 1px)`,
                                                                children: g(U, {
                                                                  className: `framer-1gusm9m-container`,
                                                                  'data-framer-cursor': `14bg376`,
                                                                  nodeId: `l4MamVi71`,
                                                                  scopeId: `augiA20Il`,
                                                                  children: g(G, {
                                                                    breakpoint: v,
                                                                    overrides: {
                                                                      TARYGz5CA: {
                                                                        variant: `gO3DGLxth`,
                                                                      },
                                                                      uQRrO6hCw: {
                                                                        variant: `gO3DGLxth`,
                                                                      },
                                                                    },
                                                                    children: g(Dr, {
                                                                      AqtGNwpbH: n,
                                                                      dRIEmL6Sy: a,
                                                                      G7pLazd_I: t,
                                                                      height: `100%`,
                                                                      id: `l4MamVi71`,
                                                                      layoutId: `l4MamVi71`,
                                                                      PC_QK2Qt6: Pp(i),
                                                                      style: {
                                                                        height: `100%`,
                                                                        width: `100%`,
                                                                      },
                                                                      T69HEV85j: Pp(o),
                                                                      variant: `Cx_9OikEn`,
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    },
                                                    e
                                                  )
                                                )
                                              ),
                                            }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  x(`div`, {
                                    className: `framer-a02h80`,
                                    'data-framer-name': `3`,
                                    children: [
                                      g(`div`, {
                                        className: `framer-ayya54`,
                                        'data-framer-name': `Work Card 4`,
                                        children: g(`div`, {
                                          className: `framer-vrk7k3`,
                                          children: g(ke, {
                                            children: g(Hp, {
                                              pageSize: 1,
                                              query: Vp(),
                                              children: (e, t, n) =>
                                                g(ee, {
                                                  children: e?.map(
                                                    (
                                                      {
                                                        id: e,
                                                        P3BOIXzYK: t,
                                                        wfPmAnXMd: n,
                                                        XVH_tgELr: r,
                                                        YHo9k2VRN: i,
                                                        YHsDzvkBN: a,
                                                        yphiaikeG: o,
                                                      },
                                                      s
                                                    ) => (
                                                      (r ??= ``),
                                                      (a ??= ``),
                                                      (n ??= ``),
                                                      (t ??= ``),
                                                      g(
                                                        j,
                                                        {
                                                          id: `dVg7BWnyh-${e}`,
                                                          children: g(oe.Provider, {
                                                            value: { XVH_tgELr: r },
                                                            children: g(be, {
                                                              href: {
                                                                pathVariables: { XVH_tgELr: r },
                                                                webPageId: `AQdzOvSwE`,
                                                              },
                                                              motionChild: !0,
                                                              nodeId: `Pkfg1aBpD`,
                                                              scopeId: `augiA20Il`,
                                                              children: g(E.a, {
                                                                className: `framer-2b77dg framer-lux5qc`,
                                                                'data-framer-name': `Project`,
                                                                children: g(G, {
                                                                  breakpoint: v,
                                                                  overrides: {
                                                                    TARYGz5CA: {
                                                                      width: `max(min(${l?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                                                    },
                                                                    uQRrO6hCw: {
                                                                      height: 600,
                                                                      width: `max(min(${l?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                                                    },
                                                                  },
                                                                  children: g(W, {
                                                                    height: 390,
                                                                    width: `max((min(${l?.width || `100vw`}, 1480px) - 48px) * 0.3218, 1px)`,
                                                                    children: g(U, {
                                                                      className: `framer-1d8vcph-container`,
                                                                      'data-framer-cursor': `14bg376`,
                                                                      nodeId: `gJeFz4xSx`,
                                                                      scopeId: `augiA20Il`,
                                                                      children: g(G, {
                                                                        breakpoint: v,
                                                                        overrides: {
                                                                          TARYGz5CA: {
                                                                            variant: `gO3DGLxth`,
                                                                          },
                                                                          uQRrO6hCw: {
                                                                            variant: `gO3DGLxth`,
                                                                          },
                                                                        },
                                                                        children: g(Dr, {
                                                                          AqtGNwpbH: n,
                                                                          dRIEmL6Sy: a,
                                                                          G7pLazd_I: t,
                                                                          height: `100%`,
                                                                          id: `gJeFz4xSx`,
                                                                          layoutId: `gJeFz4xSx`,
                                                                          PC_QK2Qt6: Pp(i),
                                                                          style: {
                                                                            height: `100%`,
                                                                            width: `100%`,
                                                                          },
                                                                          T69HEV85j: Pp(o),
                                                                          variant: `Cx_9OikEn`,
                                                                          width: `100%`,
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        },
                                                        e
                                                      )
                                                    )
                                                  ),
                                                }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      g(`div`, {
                                        className: `framer-roc34l`,
                                        'data-framer-name': `Work Card 5`,
                                        children: g(`div`, {
                                          className: `framer-1nmac4u`,
                                          children: g(ke, {
                                            children: g(Wp, {
                                              pageSize: 1,
                                              query: Up(),
                                              children: (e, t, n) =>
                                                g(ee, {
                                                  children: e?.map(
                                                    (
                                                      {
                                                        id: e,
                                                        P3BOIXzYK: t,
                                                        wfPmAnXMd: n,
                                                        XVH_tgELr: r,
                                                        YHo9k2VRN: i,
                                                        YHsDzvkBN: a,
                                                        yphiaikeG: o,
                                                      },
                                                      s
                                                    ) => (
                                                      (r ??= ``),
                                                      (a ??= ``),
                                                      (n ??= ``),
                                                      (t ??= ``),
                                                      g(
                                                        j,
                                                        {
                                                          id: `Xq8XtaAUP-${e}`,
                                                          children: g(oe.Provider, {
                                                            value: { XVH_tgELr: r },
                                                            children: g(be, {
                                                              href: {
                                                                pathVariables: { XVH_tgELr: r },
                                                                webPageId: `AQdzOvSwE`,
                                                              },
                                                              motionChild: !0,
                                                              nodeId: `L2npSo_Xt`,
                                                              scopeId: `augiA20Il`,
                                                              children: g(E.a, {
                                                                className: `framer-1vtosv4 framer-lux5qc`,
                                                                'data-framer-name': `Project`,
                                                                children: g(G, {
                                                                  breakpoint: v,
                                                                  overrides: {
                                                                    TARYGz5CA: {
                                                                      height: 390,
                                                                      width: `max(min(${l?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                                                    },
                                                                    uQRrO6hCw: {
                                                                      height: 600,
                                                                      width: `max(min(${l?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                                                    },
                                                                  },
                                                                  children: g(W, {
                                                                    height: 490,
                                                                    width: `max((min(${l?.width || `100vw`}, 1480px) - 48px) * 0.3218, 1px)`,
                                                                    children: g(U, {
                                                                      className: `framer-1cx19ot-container`,
                                                                      'data-framer-cursor': `14bg376`,
                                                                      nodeId: `hTitG5I3J`,
                                                                      scopeId: `augiA20Il`,
                                                                      children: g(G, {
                                                                        breakpoint: v,
                                                                        overrides: {
                                                                          TARYGz5CA: {
                                                                            variant: `gO3DGLxth`,
                                                                          },
                                                                          uQRrO6hCw: {
                                                                            variant: `gO3DGLxth`,
                                                                          },
                                                                        },
                                                                        children: g(Dr, {
                                                                          AqtGNwpbH: n,
                                                                          dRIEmL6Sy: a,
                                                                          G7pLazd_I: t,
                                                                          height: `100%`,
                                                                          id: `hTitG5I3J`,
                                                                          layoutId: `hTitG5I3J`,
                                                                          PC_QK2Qt6: Pp(i),
                                                                          style: {
                                                                            height: `100%`,
                                                                            width: `100%`,
                                                                          },
                                                                          T69HEV85j: Pp(o),
                                                                          variant: `Cx_9OikEn`,
                                                                          width: `100%`,
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        },
                                                        e
                                                      )
                                                    )
                                                  ),
                                                }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    x(E.section, {
                      className: `framer-ywystf`,
                      'data-framer-name': `Services`,
                      layout: k,
                      children: [
                        g(W, {
                          height: 24,
                          width: `min(${l?.width || `100vw`}, 1480px)`,
                          children: g(U, {
                            className: `framer-17yesjc-container`,
                            nodeId: `QHJIkFW3i`,
                            scopeId: `augiA20Il`,
                            children: g(G, {
                              breakpoint: v,
                              overrides: {
                                TARYGz5CA: { variant: `CmSf9J7E0` },
                                uQRrO6hCw: { variant: `CmSf9J7E0` },
                              },
                              children: g(Be, {
                                height: `100%`,
                                Hq7BZwPem: `(WDX® — 04)`,
                                id: `QHJIkFW3i`,
                                layoutId: `QHJIkFW3i`,
                                NHubkDs7R: `Digital Execution`,
                                pWoyTVtQ4: `© Capabilities サービス内容`,
                                style: { width: `100%` },
                                variant: `XFF72MIUC`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        x(`div`, {
                          className: `framer-1shioqx`,
                          'data-framer-name': `Heading`,
                          children: [
                            g(Hf, {
                              __framer__spring: {
                                damping: 60,
                                delay: 0,
                                duration: 0.3,
                                ease: [0.44, 0, 0.56, 1],
                                mass: 1,
                                stiffness: 350,
                                type: `spring`,
                              },
                              __framer__styleTransformEffectEnabled: !0,
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 0,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 140,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                              ],
                              __framer__transformTrigger: `onInView`,
                              __fromCanvasComponent: !0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              children: g(s, {
                                children: g(`h1`, {
                                  className: `framer-styles-preset-je0rn0`,
                                  'data-styles-preset': `YMtdKmiBu`,
                                  style: { '--framer-text-alignment': `left` },
                                  children: `Members`,
                                }),
                              }),
                              className: `framer-qfi1to`,
                              'data-framer-name': `Text`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            g(`div`, {
                              className: `framer-z6tqd1`,
                              'data-framer-name': `Number`,
                              children: g(Hf, {
                                __framer__spring: {
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.3,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stiffness: 350,
                                  type: `spring`,
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 0,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 30,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onInView`,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: g(s, {
                                  children: g(`h3`, {
                                    className: `framer-styles-preset-sng7in`,
                                    'data-styles-preset': `bLxN69a46`,
                                    children: `(6)`,
                                  }),
                                }),
                                className: `framer-zpgfvt`,
                                'data-framer-name': `Text`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        g(W, {
                          height: 24,
                          width: `min(${l?.width || `100vw`}, 1480px)`,
                          children: g(U, {
                            className: `framer-dlgb9u-container`,
                            nodeId: `efNFxisVk`,
                            scopeId: `augiA20Il`,
                            children: g(qe, {
                              F9s7G6Ce8: `Structured`,
                              height: `100%`,
                              id: `efNFxisVk`,
                              layoutId: `efNFxisVk`,
                              rpGEGECg1: `Visual Language`,
                              Ssp7h9ebx: `Precise`,
                              style: { width: `100%` },
                              variant: `SJFvvEqmc`,
                              width: `100%`,
                              xxFoBYQ6z: `Focused`,
                            }),
                          }),
                        }),
                        g(G, {
                          breakpoint: v,
                          overrides: {
                            TARYGz5CA: { width: `min(${l?.width || `100vw`}, 1480px)` },
                            uQRrO6hCw: { width: `min(${l?.width || `100vw`}, 1480px)` },
                          },
                          children: g(W, {
                            height: 541,
                            width: `calc(min(${l?.width || `100vw`}, 1480px) * 0.64)`,
                            children: g(U, {
                              className: `framer-b48xgz-container`,
                              id: `b48xgz`,
                              nodeId: `PtpQBNC0J`,
                              scopeId: `augiA20Il`,
                              children: g(G, {
                                breakpoint: v,
                                overrides: {
                                  TARYGz5CA: { variant: `IGLDqE_JA` },
                                  uQRrO6hCw: { variant: `m85hHFNAk` },
                                },
                                children: g($a, {
                                  h2QFIa86Z: `1njupo3`,
                                  height: `100%`,
                                  id: `PtpQBNC0J`,
                                  layoutId: `PtpQBNC0J`,
                                  lVTXes8OT: `rpcde8`,
                                  nM49zxtOZ: `qd9j2w`,
                                  style: { width: `100%` },
                                  variant: `K8RDTGEIl`,
                                  width: `100%`,
                                  wNMx0LJLM: `o4krbg`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    x(E.section, {
                      className: `framer-1390c7e`,
                      'data-framer-name': `About`,
                      layout: k,
                      children: [
                        g(W, {
                          height: 24,
                          width: `min(${l?.width || `100vw`}, 1480px)`,
                          children: g(U, {
                            className: `framer-1bhtlar-container`,
                            nodeId: `wGpl0KdgI`,
                            scopeId: `augiA20Il`,
                            children: g(G, {
                              breakpoint: v,
                              overrides: {
                                TARYGz5CA: { variant: `CmSf9J7E0` },
                                uQRrO6hCw: { variant: `kQZZjN_Db` },
                              },
                              children: g(Be, {
                                height: `100%`,
                                Hq7BZwPem: `(WDX® — 05)`,
                                id: `wGpl0KdgI`,
                                layoutId: `wGpl0KdgI`,
                                NHubkDs7R: `Visual Thinker`,
                                pWoyTVtQ4: `© Personal Profile プロフィール`,
                                style: { width: `100%` },
                                variant: `XFF72MIUC`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        x(`div`, {
                          className: `framer-1wqpm7v`,
                          'data-framer-name': `Content`,
                          children: [
                            g(G, {
                              breakpoint: v,
                              overrides: {
                                TARYGz5CA: {
                                  __framer__speed: 105,
                                  background: {
                                    alt: `Man Back Pose`,
                                    fit: `fill`,
                                    pixelHeight: 1170,
                                    pixelWidth: 862,
                                    sizes: `76px`,
                                    src: `https://framerusercontent.com/images/ArlHexiNI80PjOBanP5Zqybu7Mo.png?width=862&height=1170`,
                                    srcSet: `https://framerusercontent.com/images/ArlHexiNI80PjOBanP5Zqybu7Mo.png?scale-down-to=1024&width=862&height=1170 754w,https://framerusercontent.com/images/ArlHexiNI80PjOBanP5Zqybu7Mo.png?width=862&height=1170 862w`,
                                  },
                                },
                                uQRrO6hCw: {
                                  __framer__speed: 105,
                                  background: {
                                    alt: `Man Back Pose`,
                                    fit: `fill`,
                                    pixelHeight: 1170,
                                    pixelWidth: 862,
                                    sizes: `147px`,
                                    src: `https://framerusercontent.com/images/ArlHexiNI80PjOBanP5Zqybu7Mo.png?width=862&height=1170`,
                                    srcSet: `https://framerusercontent.com/images/ArlHexiNI80PjOBanP5Zqybu7Mo.png?scale-down-to=1024&width=862&height=1170 754w,https://framerusercontent.com/images/ArlHexiNI80PjOBanP5Zqybu7Mo.png?width=862&height=1170 862w`,
                                  },
                                },
                              },
                              children: g(Lf, {
                                __framer__adjustPosition: !1,
                                __framer__offset: 0,
                                __framer__parallaxTransformEnabled: !0,
                                __framer__speed: 110,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: `Man Back Pose`,
                                  fit: `fill`,
                                  pixelHeight: 1170,
                                  pixelWidth: 862,
                                  sizes: `326px`,
                                  src: `https://framerusercontent.com/images/ArlHexiNI80PjOBanP5Zqybu7Mo.png?width=862&height=1170`,
                                  srcSet: `https://framerusercontent.com/images/ArlHexiNI80PjOBanP5Zqybu7Mo.png?scale-down-to=1024&width=862&height=1170 754w,https://framerusercontent.com/images/ArlHexiNI80PjOBanP5Zqybu7Mo.png?width=862&height=1170 862w`,
                                },
                                className: `framer-ica3fy`,
                                'data-framer-name': `Parallex Image`,
                              }),
                            }),
                            g(G, {
                              breakpoint: v,
                              overrides: {
                                TARYGz5CA: {
                                  __framer__speed: 105,
                                  background: {
                                    alt: `Black Man`,
                                    fit: `fill`,
                                    pixelHeight: 1280,
                                    pixelWidth: 896,
                                    sizes: `144px`,
                                    src: `https://framerusercontent.com/images/tFXdT1GAWfzky0TCheIFtJR4O3I.png?width=896&height=1280`,
                                    srcSet: `https://framerusercontent.com/images/tFXdT1GAWfzky0TCheIFtJR4O3I.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/tFXdT1GAWfzky0TCheIFtJR4O3I.png?width=896&height=1280 896w`,
                                  },
                                },
                                uQRrO6hCw: {
                                  __framer__speed: 105,
                                  background: {
                                    alt: `Black Man`,
                                    fit: `fill`,
                                    pixelHeight: 1280,
                                    pixelWidth: 896,
                                    sizes: `204px`,
                                    src: `https://framerusercontent.com/images/tFXdT1GAWfzky0TCheIFtJR4O3I.png?width=896&height=1280`,
                                    srcSet: `https://framerusercontent.com/images/tFXdT1GAWfzky0TCheIFtJR4O3I.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/tFXdT1GAWfzky0TCheIFtJR4O3I.png?width=896&height=1280 896w`,
                                  },
                                },
                              },
                              children: g(Lf, {
                                __framer__adjustPosition: !1,
                                __framer__offset: 0,
                                __framer__parallaxTransformEnabled: !0,
                                __framer__speed: 110,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: `Black Man`,
                                  fit: `fill`,
                                  pixelHeight: 1280,
                                  pixelWidth: 896,
                                  sizes: `454px`,
                                  src: `https://framerusercontent.com/images/tFXdT1GAWfzky0TCheIFtJR4O3I.png?width=896&height=1280`,
                                  srcSet: `https://framerusercontent.com/images/tFXdT1GAWfzky0TCheIFtJR4O3I.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/tFXdT1GAWfzky0TCheIFtJR4O3I.png?width=896&height=1280 896w`,
                                },
                                className: `framer-6h0ehn`,
                                'data-framer-name': `Parallex Image/Video`,
                                children: g(W, {
                                  children: g(U, {
                                    className: `framer-qplkjo-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `ssKq0581X`,
                                    scopeId: `augiA20Il`,
                                    children: g(G, {
                                      breakpoint: v,
                                      overrides: {
                                        uQRrO6hCw: {
                                          srcFile: `https://framerusercontent.com/assets/Xee39u4PzSDaA5s6OTmGol1LuY.mp4`,
                                        },
                                      },
                                      children: g(mn, {
                                        backgroundColor: `rgba(0, 0, 0, 0)`,
                                        borderRadius: 10,
                                        bottomLeftRadius: 10,
                                        bottomRightRadius: 10,
                                        controls: !1,
                                        height: `100%`,
                                        id: `ssKq0581X`,
                                        isMixedBorderRadius: !1,
                                        layoutId: `ssKq0581X`,
                                        loop: !0,
                                        muted: !0,
                                        objectFit: `cover`,
                                        playing: !0,
                                        poster: `https://framerusercontent.com/images/bF7lJn36JOpPKs93Kx55FhUKRk.png?width=858&height=1168`,
                                        posterEnabled: !0,
                                        srcFile: `https://framerusercontent.com/assets/VHJOzAFsQyiNOCfrRQRsckpnJW0.mp4`,
                                        srcType: `Upload`,
                                        srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                        startTime: 0,
                                        style: { height: `100%`, width: `100%` },
                                        topLeftRadius: 10,
                                        topRightRadius: 10,
                                        volume: 25,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            g(G, {
                              breakpoint: v,
                              overrides: {
                                TARYGz5CA: {
                                  __framer__speed: 105,
                                  background: {
                                    alt: `Woman`,
                                    fit: `fill`,
                                    pixelHeight: 1172,
                                    pixelWidth: 860,
                                    sizes: `85px`,
                                    src: `https://framerusercontent.com/images/UAQMigO2P5DZX5KcRIt79CdBkRc.png?width=860&height=1172`,
                                    srcSet: `https://framerusercontent.com/images/UAQMigO2P5DZX5KcRIt79CdBkRc.png?scale-down-to=1024&width=860&height=1172 751w,https://framerusercontent.com/images/UAQMigO2P5DZX5KcRIt79CdBkRc.png?width=860&height=1172 860w`,
                                  },
                                },
                                uQRrO6hCw: {
                                  __framer__speed: 105,
                                  background: {
                                    alt: `Woman`,
                                    fit: `fill`,
                                    pixelHeight: 1172,
                                    pixelWidth: 860,
                                    sizes: `156px`,
                                    src: `https://framerusercontent.com/images/UAQMigO2P5DZX5KcRIt79CdBkRc.png?width=860&height=1172`,
                                    srcSet: `https://framerusercontent.com/images/UAQMigO2P5DZX5KcRIt79CdBkRc.png?scale-down-to=1024&width=860&height=1172 751w,https://framerusercontent.com/images/UAQMigO2P5DZX5KcRIt79CdBkRc.png?width=860&height=1172 860w`,
                                  },
                                },
                              },
                              children: g(Lf, {
                                __framer__adjustPosition: !1,
                                __framer__offset: 0,
                                __framer__parallaxTransformEnabled: !0,
                                __framer__speed: 110,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: `Woman`,
                                  fit: `fill`,
                                  pixelHeight: 1172,
                                  pixelWidth: 860,
                                  sizes: `326px`,
                                  src: `https://framerusercontent.com/images/UAQMigO2P5DZX5KcRIt79CdBkRc.png?width=860&height=1172`,
                                  srcSet: `https://framerusercontent.com/images/UAQMigO2P5DZX5KcRIt79CdBkRc.png?scale-down-to=1024&width=860&height=1172 751w,https://framerusercontent.com/images/UAQMigO2P5DZX5KcRIt79CdBkRc.png?width=860&height=1172 860w`,
                                },
                                className: `framer-cpykhu`,
                                'data-framer-name': `Parallex Image`,
                              }),
                            }),
                            g(`div`, {
                              className: `framer-3j4you`,
                              'data-framer-name': `Text`,
                              children: g(W, {
                                children: g(U, {
                                  className: `framer-p0ih05-container`,
                                  'data-framer-name': `Reveal Text`,
                                  isAuthoredByUser: !0,
                                  name: `Reveal Text`,
                                  nodeId: `lM3wAY8xL`,
                                  scopeId: `augiA20Il`,
                                  children: g(G, {
                                    breakpoint: v,
                                    overrides: { TARYGz5CA: { fontSize: 45, lineHeight: 48 } },
                                    children: g(qs, {
                                      duration: 3,
                                      easing: `easeInOut`,
                                      fontFamily: `inter display`,
                                      fontSize: 79,
                                      fontWeight: `500`,
                                      height: `100%`,
                                      id: `lM3wAY8xL`,
                                      layoutId: `lM3wAY8xL`,
                                      letterSpacing: -2.1,
                                      lineHeight: 78.6,
                                      name: `Reveal Text`,
                                      paragraphAlign: `flex-start`,
                                      style: { maxWidth: `100%`, width: `100%` },
                                      text: `The SCAP Anime Club regularly publishes a semi-annual magazine called "SCAP Anime", which serves as an important platform for members to showcase their talents. Here, whether you are a writer of small fan works or a painter, you can boldly show off your creations and let everyone know the ACG world in your heart.`,
                                      transitionStartIndex: 0,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            g(`div`, {
                              className: `framer-1wraq4e`,
                              'data-framer-name': `Container`,
                              children: x(`div`, {
                                className: `framer-6vahvq`,
                                'data-framer-name': `Body Text & Button`,
                                children: [
                                  g(F, {
                                    __fromCanvasComponent: !0,
                                    children: g(s, {
                                      children: x(`p`, {
                                        className: `framer-styles-preset-14w8e6o`,
                                        'data-styles-preset': `FsS03h6Vk`,
                                        style: {
                                          '--framer-text-color': `var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgb(187, 187, 187))`,
                                        },
                                        children: [
                                          `部員たちが才能を発揮する大切な場です。ここで、あなたは`,
                                          g(`span`, {
                                            style: { '--framer-text-color': `rgb(255, 255, 255)` },
                                            children: g(`strong`, { children: `白を創作` }),
                                          }),
                                          `するかどうかを書いて小さい同人が大きいタッチを描いて、すべて大胆に自分の作品を見せて、みんなにあなたの心の中の`,
                                          g(`span`, {
                                            style: { '--framer-text-color': `rgb(255, 255, 255)` },
                                            children: g(`strong`, { children: `ACG世界` }),
                                          }),
                                          `を認識させることができます。`,
                                        ],
                                      }),
                                    }),
                                    className: `framer-10fi5y6`,
                                    'data-framer-name': `Body Text`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  g(ie, {
                                    links: [
                                      {
                                        href: { webPageId: `TMUEGlXDC` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `TMUEGlXDC` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `TMUEGlXDC` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      g(W, {
                                        height: 44,
                                        children: g(U, {
                                          className: `framer-lm13iu-container`,
                                          nodeId: `fpIsyyPbF`,
                                          scopeId: `augiA20Il`,
                                          children: g(G, {
                                            breakpoint: v,
                                            overrides: {
                                              TARYGz5CA: { JQPbxOZrF: e[2], variant: `TM6f2ytrb` },
                                              uQRrO6hCw: { JQPbxOZrF: e[1] },
                                            },
                                            children: g(ut, {
                                              CSyo3aTPk: !1,
                                              Gh9QOfeLM: `SEE WORKS`,
                                              height: `100%`,
                                              id: `fpIsyyPbF`,
                                              JQPbxOZrF: e[0],
                                              layoutId: `fpIsyyPbF`,
                                              variant: `iJrMk7HF5`,
                                              vZZm_o9LA: !1,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    x(E.section, {
                      className: `framer-3bo6w`,
                      'data-framer-name': `Experience`,
                      layout: k,
                      children: [
                        g(W, {
                          height: 24,
                          width: `min(${l?.width || `100vw`}, 1480px)`,
                          children: g(U, {
                            className: `framer-1fvzi93-container`,
                            nodeId: `ktb673ff6`,
                            scopeId: `augiA20Il`,
                            children: g(G, {
                              breakpoint: v,
                              overrides: {
                                TARYGz5CA: { variant: `CmSf9J7E0` },
                                uQRrO6hCw: { variant: `kQZZjN_Db` },
                              },
                              children: g(Be, {
                                height: `100%`,
                                Hq7BZwPem: `(WDX® — 05)`,
                                id: `ktb673ff6`,
                                layoutId: `ktb673ff6`,
                                NHubkDs7R: `Digital Craft`,
                                pWoyTVtQ4: `© Experience エクスペリエンス`,
                                style: { width: `100%` },
                                variant: `XFF72MIUC`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        x(`div`, {
                          className: `framer-1gmzvq4`,
                          'data-framer-name': `Container`,
                          children: [
                            x(`div`, {
                              className: `framer-1l9i2gv`,
                              'data-framer-name': `Content`,
                              children: [
                                g(`div`, {
                                  className: `framer-bcin9m`,
                                  'data-framer-name': `Heading`,
                                  children: g(W, {
                                    children: g(qf, {
                                      __framer__spring: {
                                        damping: 60,
                                        delay: 0,
                                        duration: 0.3,
                                        ease: [0.44, 0, 0.56, 1],
                                        mass: 1,
                                        stiffness: 350,
                                        type: `spring`,
                                      },
                                      __framer__styleTransformEffectEnabled: !0,
                                      __framer__transformTargets: [
                                        {
                                          target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 140,
                                          },
                                        },
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                      ],
                                      __framer__transformTrigger: `onInView`,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1xdtwk-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      nodeId: `AZ06piyTF`,
                                      rendersWithMotion: !0,
                                      scopeId: `augiA20Il`,
                                      children: g(G, {
                                        breakpoint: v,
                                        overrides: {
                                          TARYGz5CA: {
                                            font: {
                                              fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                              fontFeatureSettings: `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on`,
                                              fontSize: `76px`,
                                              fontStyle: `normal`,
                                              fontWeight: 600,
                                              letterSpacing: `-4px`,
                                              lineHeight: `68px`,
                                            },
                                            text: `Pick Plans., Price less., Affordable.`,
                                          },
                                          uQRrO6hCw: {
                                            font: {
                                              fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                              fontFeatureSettings: `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on`,
                                              fontSize: `128px`,
                                              fontStyle: `normal`,
                                              fontWeight: 600,
                                              letterSpacing: `-6px`,
                                              lineHeight: `108px`,
                                            },
                                          },
                                        },
                                        children: g(Ct, {
                                          alignment: `left`,
                                          color: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                          delay: 0.5,
                                          font: {
                                            fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                            fontFeatureSettings: `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on`,
                                            fontSize: `208px`,
                                            fontStyle: `normal`,
                                            fontWeight: 600,
                                            letterSpacing: `-8px`,
                                            lineHeight: `168px`,
                                          },
                                          height: `100%`,
                                          id: `AZ06piyTF`,
                                          layoutId: `AZ06piyTF`,
                                          loop: !0,
                                          speed: 15,
                                          stagger: 0.5,
                                          style: { width: `100%` },
                                          tag: `h2`,
                                          text: `Anime., Comic.,Game., Novel.`,
                                          userSelect: !1,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                I() &&
                                  x(`div`, {
                                    className: `framer-pq27se hidden-1tqphhv hidden-12a2gtg`,
                                    'data-framer-name': `Image`,
                                    children: [
                                      g(Ae, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 45.5,
                                          intrinsicWidth: 256.5,
                                          pixelHeight: 91,
                                          pixelWidth: 513,
                                          sizes: `128px`,
                                          src: `https://framerusercontent.com/images/4oaOsuXcxdhxXiQToWWNNSmbM.png?width=513&height=91`,
                                          srcSet: `https://framerusercontent.com/images/4oaOsuXcxdhxXiQToWWNNSmbM.png?scale-down-to=512&width=513&height=91 512w,https://framerusercontent.com/images/4oaOsuXcxdhxXiQToWWNNSmbM.png?width=513&height=91 513w`,
                                        },
                                        className: `framer-vzjr3v`,
                                        'data-framer-name': `Signature`,
                                      }),
                                      g(W, {
                                        height: 198,
                                        width: `136px`,
                                        children: g(U, {
                                          className: `framer-uibrbw-container`,
                                          nodeId: `XhhHrXDzG`,
                                          scopeId: `augiA20Il`,
                                          children: g($e, {
                                            bNIxmSYTX: Np(
                                              {
                                                pixelHeight: 2064,
                                                pixelWidth: 1480,
                                                src: `https://framerusercontent.com/images/hAmwFeTJ4MyNWein6tPgYi2y5k.jpg?width=1480&height=2064`,
                                                srcSet: `https://framerusercontent.com/images/hAmwFeTJ4MyNWein6tPgYi2y5k.jpg?scale-down-to=1024&width=1480&height=2064 734w,https://framerusercontent.com/images/hAmwFeTJ4MyNWein6tPgYi2y5k.jpg?scale-down-to=2048&width=1480&height=2064 1468w,https://framerusercontent.com/images/hAmwFeTJ4MyNWein6tPgYi2y5k.jpg?width=1480&height=2064 1480w`,
                                              },
                                              ``
                                            ),
                                            CXo7fyVBS: Np(
                                              {
                                                pixelHeight: 1889,
                                                pixelWidth: 1310,
                                                src: `https://framerusercontent.com/images/PWWPFXf9XOzt63lLv5Pl1XXLoAs.jpg?width=1310&height=1889`,
                                                srcSet: `https://framerusercontent.com/images/PWWPFXf9XOzt63lLv5Pl1XXLoAs.jpg?scale-down-to=1024&width=1310&height=1889 710w,https://framerusercontent.com/images/PWWPFXf9XOzt63lLv5Pl1XXLoAs.jpg?width=1310&height=1889 1310w`,
                                              },
                                              `Woman In The Garden`
                                            ),
                                            height: `100%`,
                                            Hu6fn5bt1: Np(
                                              {
                                                pixelHeight: 2490,
                                                pixelWidth: 2752,
                                                src: `https://framerusercontent.com/images/9S99oZQQ0ErGDfNogIhzU1RyM.jpg?width=2752&height=2490`,
                                                srcSet: `https://framerusercontent.com/images/9S99oZQQ0ErGDfNogIhzU1RyM.jpg?scale-down-to=512&width=2752&height=2490 512w,https://framerusercontent.com/images/9S99oZQQ0ErGDfNogIhzU1RyM.jpg?scale-down-to=1024&width=2752&height=2490 1024w,https://framerusercontent.com/images/9S99oZQQ0ErGDfNogIhzU1RyM.jpg?scale-down-to=2048&width=2752&height=2490 2048w,https://framerusercontent.com/images/9S99oZQQ0ErGDfNogIhzU1RyM.jpg?width=2752&height=2490 2752w`,
                                              },
                                              `Woman Running`
                                            ),
                                            id: `XhhHrXDzG`,
                                            layoutId: `XhhHrXDzG`,
                                            style: { height: `100%`, width: `100%` },
                                            UhE81XPkg: Np(
                                              {
                                                pixelHeight: 2752,
                                                pixelWidth: 1870,
                                                src: `https://framerusercontent.com/images/lidRXvS9KEMSMeRiAIqpqn4MAY.jpg?width=1870&height=2752`,
                                                srcSet: `https://framerusercontent.com/images/lidRXvS9KEMSMeRiAIqpqn4MAY.jpg?scale-down-to=1024&width=1870&height=2752 695w,https://framerusercontent.com/images/lidRXvS9KEMSMeRiAIqpqn4MAY.jpg?scale-down-to=2048&width=1870&height=2752 1391w,https://framerusercontent.com/images/lidRXvS9KEMSMeRiAIqpqn4MAY.jpg?width=1870&height=2752 1870w`,
                                              },
                                              `Man Back Pose`
                                            ),
                                            variant: `RSG36cpMb`,
                                            width: `100%`,
                                            YzLWPJL0x: Np(
                                              {
                                                pixelHeight: 2052,
                                                pixelWidth: 1486,
                                                src: `https://framerusercontent.com/images/c6yfb27xehZu1R3DXZkcIpRc.jpg?width=1486&height=2052`,
                                                srcSet: `https://framerusercontent.com/images/c6yfb27xehZu1R3DXZkcIpRc.jpg?scale-down-to=1024&width=1486&height=2052 741w,https://framerusercontent.com/images/c6yfb27xehZu1R3DXZkcIpRc.jpg?scale-down-to=2048&width=1486&height=2052 1483w,https://framerusercontent.com/images/c6yfb27xehZu1R3DXZkcIpRc.jpg?width=1486&height=2052 1486w`,
                                              },
                                              `Skateboarders`
                                            ),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            g(W, {
                              height: 24,
                              width: `min(${l?.width || `100vw`}, 1480px)`,
                              children: g(U, {
                                className: `framer-1tu45ze-container`,
                                nodeId: `oC0j7jxo5`,
                                scopeId: `augiA20Il`,
                                children: g(qe, {
                                  F9s7G6Ce8: `Creative Collabs`,
                                  height: `100%`,
                                  id: `oC0j7jxo5`,
                                  layoutId: `oC0j7jxo5`,
                                  rpGEGECg1: `Creative Partnerships`,
                                  Ssp7h9ebx: `Global`,
                                  style: { width: `100%` },
                                  variant: `SJFvvEqmc`,
                                  width: `100%`,
                                  xxFoBYQ6z: `Studio`,
                                }),
                              }),
                            }),
                          ],
                        }),
                        g(W, {
                          height: 272,
                          width: `min(${l?.width || `100vw`}, 1480px)`,
                          children: g(U, {
                            className: `framer-ziuq0f-container`,
                            nodeId: `xeTXEJLF3`,
                            scopeId: `augiA20Il`,
                            children: g(G, {
                              breakpoint: v,
                              overrides: {
                                TARYGz5CA: { variant: `nTqkcZrXm` },
                                uQRrO6hCw: { variant: `GsDxk_3Ju` },
                              },
                              children: g(Do, {
                                height: `100%`,
                                id: `xeTXEJLF3`,
                                layoutId: `xeTXEJLF3`,
                                style: { width: `100%` },
                                variant: `xn79ShhRM`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    x(E.section, {
                      className: `framer-1584asb`,
                      'data-framer-name': `Testimonial`,
                      layout: k,
                      children: [
                        g(W, {
                          height: 24,
                          width: `min(${l?.width || `100vw`}, 1480px)`,
                          children: g(U, {
                            className: `framer-izk59c-container`,
                            nodeId: `mNNtD1AF6`,
                            scopeId: `augiA20Il`,
                            children: g(G, {
                              breakpoint: v,
                              overrides: {
                                TARYGz5CA: { variant: `CmSf9J7E0` },
                                uQRrO6hCw: { variant: `kQZZjN_Db` },
                              },
                              children: g(Be, {
                                height: `100%`,
                                Hq7BZwPem: `(WDX® — 06)`,
                                id: `mNNtD1AF6`,
                                layoutId: `mNNtD1AF6`,
                                NHubkDs7R: `Real Feedback`,
                                pWoyTVtQ4: `© Testimonials レビュー`,
                                style: { width: `100%` },
                                variant: `XFF72MIUC`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        x(`div`, {
                          className: `framer-1y8re1e`,
                          'data-framer-name': `Container`,
                          children: [
                            g(`div`, {
                              className: `framer-1yqd1cr`,
                              'data-framer-name': `Sticky`,
                              children: x(`div`, {
                                className: `framer-cugt0u`,
                                'data-framer-name': `Content`,
                                children: [
                                  g(W, {
                                    height: 200,
                                    width: `max(min(${l?.width || `100vw`}, 1480px), 1px)`,
                                    children: g(U, {
                                      className: `framer-1da5zd7-container`,
                                      nodeId: `PSZc6R4uf`,
                                      scopeId: `augiA20Il`,
                                      children: g(G, {
                                        breakpoint: v,
                                        overrides: {
                                          TARYGz5CA: { variant: `mURiTOP2G` },
                                          uQRrO6hCw: { variant: `bkXk11oSP` },
                                        },
                                        children: g(ma, {
                                          bO6IhWfEy: `Maintheme© - Designers  `,
                                          height: `100%`,
                                          id: `PSZc6R4uf`,
                                          layoutId: `PSZc6R4uf`,
                                          style: { width: `100%` },
                                          variant: `XkAD5dcWw`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  g(`div`, {
                                    className: `framer-iz2ttu`,
                                    'data-framer-name': `Button`,
                                    children: g(ie, {
                                      links: [
                                        {
                                          href: { webPageId: `Yb_WXsK4v` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `Yb_WXsK4v` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `Yb_WXsK4v` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        g(W, {
                                          height: 44,
                                          children: g(U, {
                                            className: `framer-6n8j6c-container`,
                                            nodeId: `HHKyxuRpk`,
                                            scopeId: `augiA20Il`,
                                            children: g(G, {
                                              breakpoint: v,
                                              overrides: {
                                                TARYGz5CA: {
                                                  JQPbxOZrF: e[2],
                                                  variant: `TM6f2ytrb`,
                                                },
                                                uQRrO6hCw: { JQPbxOZrF: e[1] },
                                              },
                                              children: g(ut, {
                                                CSyo3aTPk: !1,
                                                Gh9QOfeLM: `Get in touch`,
                                                height: `100%`,
                                                id: `HHKyxuRpk`,
                                                JQPbxOZrF: e[0],
                                                layoutId: `HHKyxuRpk`,
                                                variant: `iJrMk7HF5`,
                                                vZZm_o9LA: !1,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            x(`div`, {
                              className: `framer-1ci02mx`,
                              'data-framer-name': `Testimonial Cards`,
                              children: [
                                x(`div`, {
                                  className: `framer-1lhy046`,
                                  'data-framer-name': `1 & 2`,
                                  children: [
                                    g(G, {
                                      breakpoint: v,
                                      overrides: {
                                        TARYGz5CA: {
                                          width: `calc(min(${l?.width || `100vw`}, 1480px) - 40px)`,
                                        },
                                        uQRrO6hCw: { width: `330px` },
                                      },
                                      children: g(W, {
                                        height: 321,
                                        width: `370px`,
                                        children: g(U, {
                                          className: `framer-fh9adf-container`,
                                          nodeId: `HfE9uDuRR`,
                                          scopeId: `augiA20Il`,
                                          children: g(Ea, {
                                            GDX03WB2s: `Founder, Studio Analog`,
                                            height: `100%`,
                                            id: `HfE9uDuRR`,
                                            layoutId: `HfE9uDuRR`,
                                            PXhdA1o5u: `"Akihiko elevated every layer of our brand’s online presence. From motion details to structural layout, every piece felt crafted and intentional. The site not only looked beautiful but performed well too — and the entire collaboration process was smooth."`,
                                            SfDOWebi7: `Lisa Kuroda`,
                                            style: { width: `100%` },
                                            TQKawNzuI: Np(
                                              {
                                                pixelHeight: 2048,
                                                pixelWidth: 2048,
                                                src: `https://framerusercontent.com/images/nfHihiND3hFVe8PsrYPUstbAcQ.jpg?width=2048&height=2048`,
                                                srcSet: `https://framerusercontent.com/images/nfHihiND3hFVe8PsrYPUstbAcQ.jpg?scale-down-to=512&width=2048&height=2048 512w,https://framerusercontent.com/images/nfHihiND3hFVe8PsrYPUstbAcQ.jpg?scale-down-to=1024&width=2048&height=2048 1024w,https://framerusercontent.com/images/nfHihiND3hFVe8PsrYPUstbAcQ.jpg?width=2048&height=2048 2048w`,
                                              },
                                              `Red Woman`
                                            ),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    g(`div`, {
                                      className: `framer-1w24wxd`,
                                      'data-framer-name': `2`,
                                      children: g(G, {
                                        breakpoint: v,
                                        overrides: {
                                          TARYGz5CA: {
                                            width: `calc(min(${l?.width || `100vw`}, 1480px) - 40px)`,
                                          },
                                          uQRrO6hCw: { width: `330px` },
                                        },
                                        children: g(W, {
                                          height: 321,
                                          width: `370px`,
                                          children: g(U, {
                                            className: `framer-217sdr-container`,
                                            nodeId: `VO_wV88VM`,
                                            scopeId: `augiA20Il`,
                                            children: g(Ea, {
                                              GDX03WB2s: `Director, Framehaus`,
                                              height: `100%`,
                                              id: `VO_wV88VM`,
                                              layoutId: `VO_wV88VM`,
                                              PXhdA1o5u: `"Akihiko approaches every project with a deep sense of purpose. His work is never just about the surface — it’s about how each element functions, connects, and flows. He brings logic, sharpness, and confidence to every decision, and his build quality."`,
                                              SfDOWebi7: `Daniel Reyes`,
                                              style: { width: `100%` },
                                              TQKawNzuI: Np(
                                                {
                                                  pixelHeight: 1280,
                                                  pixelWidth: 896,
                                                  src: `https://framerusercontent.com/images/1NojF9yywMvqzHNbp79Nt0uTs.png?width=896&height=1280`,
                                                  srcSet: `https://framerusercontent.com/images/1NojF9yywMvqzHNbp79Nt0uTs.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/1NojF9yywMvqzHNbp79Nt0uTs.png?width=896&height=1280 896w`,
                                                },
                                                `Man B&W`
                                              ),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                g(`div`, {
                                  className: `framer-ut62vy`,
                                  'data-framer-name': `3`,
                                  children: g(G, {
                                    breakpoint: v,
                                    overrides: {
                                      TARYGz5CA: {
                                        width: `max(min(${l?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                      },
                                    },
                                    children: g(W, {
                                      height: 321,
                                      width: `350px`,
                                      children: g(U, {
                                        className: `framer-sxcm2e-container`,
                                        nodeId: `iVHn_iN4a`,
                                        scopeId: `augiA20Il`,
                                        children: g(Ea, {
                                          GDX03WB2s: `UX Designer, Nuro`,
                                          height: `100%`,
                                          id: `iVHn_iN4a`,
                                          layoutId: `iVHn_iN4a`,
                                          PXhdA1o5u: `"His ability to merge storytelling with clean interaction design is unmatched. Akihiko understands not just how things should look, but why they should look that way — and that insight came through in every part of the work."`,
                                          SfDOWebi7: `Mei Tanaka`,
                                          style: { width: `100%` },
                                          TQKawNzuI: Np(
                                            {
                                              pixelHeight: 1024,
                                              pixelWidth: 1024,
                                              src: `https://framerusercontent.com/images/3I9yi7BmKFs7ilmb0ijcCQZSZfo.png?width=1024&height=1024`,
                                              srcSet: `https://framerusercontent.com/images/3I9yi7BmKFs7ilmb0ijcCQZSZfo.png?scale-down-to=512&width=1024&height=1024 512w,https://framerusercontent.com/images/3I9yi7BmKFs7ilmb0ijcCQZSZfo.png?width=1024&height=1024 1024w`,
                                            },
                                            `Black Man`
                                          ),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                x(`div`, {
                                  className: `framer-kk01de`,
                                  'data-framer-name': `4 & 5`,
                                  children: [
                                    g(`div`, {
                                      className: `framer-1v5lw3w`,
                                      'data-framer-name': `4`,
                                      children: g(G, {
                                        breakpoint: v,
                                        overrides: {
                                          TARYGz5CA: {
                                            width: `calc(min(${l?.width || `100vw`}, 1480px) - 40px)`,
                                          },
                                          uQRrO6hCw: { width: `330px` },
                                        },
                                        children: g(W, {
                                          height: 321,
                                          width: `370px`,
                                          children: g(U, {
                                            className: `framer-vwcvun-container`,
                                            nodeId: `hP5z0jZQo`,
                                            scopeId: `augiA20Il`,
                                            children: g(Ea, {
                                              GDX03WB2s: `Director, Vektor Inc.`,
                                              height: `100%`,
                                              id: `hP5z0jZQo`,
                                              layoutId: `hP5z0jZQo`,
                                              PXhdA1o5u: `"Working with Akihiko was more than just hiring a designer — it felt like bringing on a creative partner who truly understood our goals. He took our raw ideas, added clarity, and transformed them into something that not only looked stunning."`,
                                              SfDOWebi7: `Julian Pierce`,
                                              style: { width: `100%` },
                                              TQKawNzuI: Np(
                                                {
                                                  pixelHeight: 1024,
                                                  pixelWidth: 1024,
                                                  src: `https://framerusercontent.com/images/CqJ0xMtE2jw5wg8qA63IwRzImN0.png?width=1024&height=1024`,
                                                  srcSet: `https://framerusercontent.com/images/CqJ0xMtE2jw5wg8qA63IwRzImN0.png?scale-down-to=512&width=1024&height=1024 512w,https://framerusercontent.com/images/CqJ0xMtE2jw5wg8qA63IwRzImN0.png?width=1024&height=1024 1024w`,
                                                },
                                                `Woman Side Pose`
                                              ),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    g(G, {
                                      breakpoint: v,
                                      overrides: {
                                        TARYGz5CA: {
                                          width: `calc(min(${l?.width || `100vw`}, 1480px) - 40px)`,
                                        },
                                        uQRrO6hCw: { width: `330px` },
                                      },
                                      children: g(W, {
                                        height: 321,
                                        width: `350px`,
                                        children: g(U, {
                                          className: `framer-nyb1nu-container`,
                                          nodeId: `d3pOhcUSR`,
                                          scopeId: `augiA20Il`,
                                          children: g(Ea, {
                                            GDX03WB2s: `CEO, Willow Studio`,
                                            height: `100%`,
                                            id: `d3pOhcUSR`,
                                            layoutId: `d3pOhcUSR`,
                                            PXhdA1o5u: `"Akihiko brings a rare balance of creativity and discipline. He’s incredibly fast without ever sacrificing attention to detail. From early ideation to the final product, his process is intentional, his communication is clear."`,
                                            SfDOWebi7: `Hana Samoto`,
                                            style: { width: `100%` },
                                            TQKawNzuI: Np(
                                              {
                                                pixelHeight: 1280,
                                                pixelWidth: 896,
                                                src: `https://framerusercontent.com/images/vYFurv3Bhpru2Pn28GNGdN5WOk.png?width=896&height=1280`,
                                                srcSet: `https://framerusercontent.com/images/vYFurv3Bhpru2Pn28GNGdN5WOk.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/vYFurv3Bhpru2Pn28GNGdN5WOk.png?width=896&height=1280 896w`,
                                              },
                                              `Woman Laughing`
                                            ),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                ne() &&
                                  g(`div`, {
                                    className: `framer-pemt1m hidden-12a2gtg`,
                                    'data-framer-name': `Spacer`,
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    x(E.section, {
                      className: `framer-516i77`,
                      'data-framer-name': `Awards`,
                      layout: k,
                      children: [
                        g(W, {
                          height: 24,
                          width: `min(${l?.width || `100vw`}, 1480px)`,
                          children: g(U, {
                            className: `framer-1j301b2-container`,
                            nodeId: `zDfpnHpxf`,
                            scopeId: `augiA20Il`,
                            children: g(G, {
                              breakpoint: v,
                              overrides: {
                                TARYGz5CA: { variant: `CmSf9J7E0` },
                                uQRrO6hCw: { variant: `kQZZjN_Db` },
                              },
                              children: g(Be, {
                                height: `100%`,
                                Hq7BZwPem: `(WDX® — 07)`,
                                id: `zDfpnHpxf`,
                                layoutId: `zDfpnHpxf`,
                                NHubkDs7R: `Selected Honors`,
                                pWoyTVtQ4: `© Awards アワード`,
                                style: { width: `100%` },
                                variant: `XFF72MIUC`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        g(`div`, {
                          className: `framer-101ri9t`,
                          'data-framer-name': `Content`,
                          children: x(`div`, {
                            className: `framer-1m9mwkk`,
                            'data-framer-name': `Heading`,
                            children: [
                              g(Hf, {
                                __framer__spring: {
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.3,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stiffness: 350,
                                  type: `spring`,
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 0,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 140,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onInView`,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: g(s, {
                                  children: g(`h1`, {
                                    className: `framer-styles-preset-je0rn0`,
                                    'data-styles-preset': `YMtdKmiBu`,
                                    style: { '--framer-text-alignment': `left` },
                                    children: `Tarots`,
                                  }),
                                }),
                                className: `framer-hevtxl`,
                                'data-framer-name': `Text`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              g(`div`, {
                                className: `framer-1q7buau`,
                                'data-framer-name': `Number`,
                                children: g(Hf, {
                                  __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: 0.3,
                                    ease: [0.44, 0, 0.56, 1],
                                    mass: 1,
                                    stiffness: 350,
                                    type: `spring`,
                                  },
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 0,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 30,
                                      },
                                    },
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onInView`,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  children: g(s, {
                                    children: g(`h3`, {
                                      className: `framer-styles-preset-sng7in`,
                                      'data-styles-preset': `bLxN69a46`,
                                      children: `(3)`,
                                    }),
                                  }),
                                  className: `framer-1gfm96s`,
                                  'data-framer-name': `Text`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        }),
                        g(W, {
                          height: 24,
                          width: `min(${l?.width || `100vw`}, 1480px)`,
                          children: g(U, {
                            className: `framer-9xrb9k-container`,
                            nodeId: `a5L29UuWh`,
                            scopeId: `augiA20Il`,
                            children: g(qe, {
                              F9s7G6Ce8: `CSSD`,
                              height: `100%`,
                              id: `a5L29UuWh`,
                              layoutId: `a5L29UuWh`,
                              rpGEGECg1: `Dribbble`,
                              Ssp7h9ebx: `Awwwards`,
                              style: { width: `100%` },
                              variant: `SJFvvEqmc`,
                              width: `100%`,
                              xxFoBYQ6z: `Framer`,
                            }),
                          }),
                        }),
                        g(W, {
                          height: 818,
                          width: `min(${l?.width || `100vw`}, 1480px)`,
                          children: g(U, {
                            className: `framer-1f0kzgh-container`,
                            nodeId: `x49BvaqPH`,
                            scopeId: `augiA20Il`,
                            children: g(G, {
                              breakpoint: v,
                              overrides: {
                                TARYGz5CA: { variant: `tCRSSoKh7` },
                                uQRrO6hCw: { variant: `P6hgzGRDq` },
                              },
                              children: g($i, {
                                height: `100%`,
                                id: `x49BvaqPH`,
                                layoutId: `x49BvaqPH`,
                                style: { width: `100%` },
                                variant: `cGfMLjpbo`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    x(E.section, {
                      className: `framer-jx0221`,
                      'data-framer-name': `Client`,
                      layout: k,
                      children: [
                        L() &&
                          x(`div`, {
                            className: `framer-1cb3c26 hidden-72rtr7`,
                            'data-framer-name': `Responsive Heading`,
                            children: [
                              g(Hf, {
                                __framer__spring: {
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.3,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stiffness: 350,
                                  type: `spring`,
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 0,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 140,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onInView`,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: g(s, {
                                  children: g(`h1`, {
                                    className: `framer-styles-preset-je0rn0`,
                                    'data-styles-preset': `YMtdKmiBu`,
                                    style: { '--framer-text-alignment': `left` },
                                    children: `Clients`,
                                  }),
                                }),
                                className: `framer-z1zavc`,
                                'data-framer-name': `Text`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              g(`div`, {
                                className: `framer-fxw7eo`,
                                'data-framer-name': `Number`,
                                children: g(Hf, {
                                  __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: 0.3,
                                    ease: [0.44, 0, 0.56, 1],
                                    mass: 1,
                                    stiffness: 350,
                                    type: `spring`,
                                  },
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 0,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 30,
                                      },
                                    },
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onInView`,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  children: g(s, {
                                    children: g(`h3`, {
                                      className: `framer-styles-preset-sng7in`,
                                      'data-styles-preset': `bLxN69a46`,
                                      children: `(3)`,
                                    }),
                                  }),
                                  className: `framer-iqp5t0`,
                                  'data-framer-name': `Text`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        g(W, {
                          height: 24,
                          width: `min(${l?.width || `100vw`}, 1480px)`,
                          children: g(U, {
                            className: `framer-1a29w76-container`,
                            nodeId: `CkoYFk8Ix`,
                            scopeId: `augiA20Il`,
                            children: g(G, {
                              breakpoint: v,
                              overrides: {
                                TARYGz5CA: { variant: `CmSf9J7E0` },
                                uQRrO6hCw: { variant: `kQZZjN_Db` },
                              },
                              children: g(Be, {
                                height: `100%`,
                                Hq7BZwPem: `(WDX® — 08)`,
                                id: `CkoYFk8Ix`,
                                layoutId: `CkoYFk8Ix`,
                                NHubkDs7R: `Creative Teams`,
                                pWoyTVtQ4: `© Brand Partners パートナー`,
                                style: { width: `100%` },
                                variant: `XFF72MIUC`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        x(`div`, {
                          className: `framer-aw0pws`,
                          'data-framer-name': `Scroll Animation Section`,
                          children: [
                            g(`div`, {
                              className: `framer-uhiquf`,
                              'data-framer-name': `Sticky`,
                              children: g(`div`, {
                                className: `framer-yo1wig`,
                                'data-framer-name': `Content`,
                                children: g(G, {
                                  breakpoint: v,
                                  overrides: {
                                    TARYGz5CA: {
                                      __framer__styleTransformEffectEnabled: void 0,
                                      style: {},
                                    },
                                    uQRrO6hCw: {
                                      __framer__styleTransformEffectEnabled: void 0,
                                      style: {},
                                    },
                                  },
                                  children: x($f, {
                                    __framer__spring: {
                                      bounce: 0,
                                      damping: 50,
                                      delay: 0,
                                      duration: 1,
                                      durationBasedSpring: !1,
                                      ease: [0.44, 0, 0.56, 1],
                                      mass: 0.1,
                                      stiffness: 500,
                                      type: `spring`,
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 240,
                                        },
                                      },
                                      {
                                        ref: R,
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: -180,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: -200,
                                        },
                                      },
                                    ],
                                    __framer__transformTrigger: `onScrollTarget`,
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-zc56pd`,
                                    'data-framer-name': `3D Space`,
                                    style: { rotateY: 90, transformPerspective: 1200 },
                                    children: [
                                      g(`div`, {
                                        className: `framer-nubgww`,
                                        'data-framer-name': `1`,
                                        children: g(G, {
                                          breakpoint: v,
                                          overrides: {
                                            TARYGz5CA: {
                                              height: 240,
                                              width: `max(min(${l?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                            },
                                            uQRrO6hCw: {
                                              height: 360,
                                              width: `max(min(${l?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                            },
                                          },
                                          children: g(W, {
                                            height: 215,
                                            width: `320px`,
                                            children: g(G, {
                                              breakpoint: v,
                                              overrides: {
                                                TARYGz5CA: { style: {} },
                                                uQRrO6hCw: { style: {} },
                                              },
                                              children: g(U, {
                                                className: `framer-1ptiw9v-container`,
                                                nodeId: `MJW8jdvhp`,
                                                rendersWithMotion: !0,
                                                scopeId: `augiA20Il`,
                                                style: { rotateY: -90 },
                                                children: g(G, {
                                                  breakpoint: v,
                                                  overrides: {
                                                    TARYGz5CA: { variant: `vifpDyxXC` },
                                                    uQRrO6hCw: {
                                                      VypX2yAlC: Np(
                                                        {
                                                          pixelHeight: 963,
                                                          pixelWidth: 1920,
                                                          src: `https://framerusercontent.com/images/VO1UJdm0o7TiQrgMQk7LP8BT4.png?width=1920&height=963`,
                                                          srcSet: `https://framerusercontent.com/images/VO1UJdm0o7TiQrgMQk7LP8BT4.png?scale-down-to=512&width=1920&height=963 512w,https://framerusercontent.com/images/VO1UJdm0o7TiQrgMQk7LP8BT4.png?scale-down-to=1024&width=1920&height=963 1024w,https://framerusercontent.com/images/VO1UJdm0o7TiQrgMQk7LP8BT4.png?width=1920&height=963 1920w`,
                                                        },
                                                        ``
                                                      ),
                                                    },
                                                  },
                                                  children: g(Ur, {
                                                    height: `100%`,
                                                    id: `MJW8jdvhp`,
                                                    layoutId: `MJW8jdvhp`,
                                                    style: { height: `100%`, width: `100%` },
                                                    variant: `Mj_yFQ3Et`,
                                                    vH_Dks4GI: `https://framerusercontent.com/assets/EzwClJ2Vn62LFoIphoP2kTBvQUc.mp4`,
                                                    VypX2yAlC: Np(
                                                      {
                                                        pixelHeight: 896,
                                                        pixelWidth: 1280,
                                                        src: `https://framerusercontent.com/images/oJWMhuQwJSgdOnsubtck1x9kwQQ.png?width=1280&height=896`,
                                                        srcSet: `https://framerusercontent.com/images/oJWMhuQwJSgdOnsubtck1x9kwQQ.png?scale-down-to=512&width=1280&height=896 512w,https://framerusercontent.com/images/oJWMhuQwJSgdOnsubtck1x9kwQQ.png?scale-down-to=1024&width=1280&height=896 1024w,https://framerusercontent.com/images/oJWMhuQwJSgdOnsubtck1x9kwQQ.png?width=1280&height=896 1280w`,
                                                      },
                                                      `Woman Back Pose`
                                                    ),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      g(G, {
                                        breakpoint: v,
                                        overrides: {
                                          TARYGz5CA: { style: {} },
                                          uQRrO6hCw: { style: {} },
                                        },
                                        children: g(E.div, {
                                          className: `framer-o6wfn3`,
                                          'data-framer-name': `2`,
                                          style: { rotateY: 45 },
                                          children: g(G, {
                                            breakpoint: v,
                                            overrides: {
                                              TARYGz5CA: {
                                                height: 240,
                                                width: `max(min(${l?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                              },
                                              uQRrO6hCw: {
                                                height: 360,
                                                width: `max(min(${l?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                              },
                                            },
                                            children: g(W, {
                                              height: 215,
                                              width: `320px`,
                                              children: g(G, {
                                                breakpoint: v,
                                                overrides: {
                                                  TARYGz5CA: { style: {} },
                                                  uQRrO6hCw: { style: {} },
                                                },
                                                children: g(U, {
                                                  className: `framer-1yykzln-container`,
                                                  nodeId: `eJOob7WuE`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotateY: -90 },
                                                  children: g(Ur, {
                                                    height: `100%`,
                                                    id: `eJOob7WuE`,
                                                    layoutId: `eJOob7WuE`,
                                                    style: { height: `100%`, width: `100%` },
                                                    SXjjKopWL: Np(
                                                      {
                                                        pixelHeight: 67,
                                                        pixelWidth: 303,
                                                        src: `https://framerusercontent.com/images/np97j2F8KUZ2HLiullJ6eZCAlsQ.png?width=303&height=67`,
                                                      },
                                                      ``
                                                    ),
                                                    variant: `vifpDyxXC`,
                                                    VypX2yAlC: Np(
                                                      {
                                                        pixelHeight: 963,
                                                        pixelWidth: 1920,
                                                        src: `https://framerusercontent.com/images/VO1UJdm0o7TiQrgMQk7LP8BT4.png?width=1920&height=963`,
                                                        srcSet: `https://framerusercontent.com/images/VO1UJdm0o7TiQrgMQk7LP8BT4.png?scale-down-to=512&width=1920&height=963 512w,https://framerusercontent.com/images/VO1UJdm0o7TiQrgMQk7LP8BT4.png?scale-down-to=1024&width=1920&height=963 1024w,https://framerusercontent.com/images/VO1UJdm0o7TiQrgMQk7LP8BT4.png?width=1920&height=963 1920w`,
                                                      },
                                                      ``
                                                    ),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      g(G, {
                                        breakpoint: v,
                                        overrides: {
                                          TARYGz5CA: { style: {} },
                                          uQRrO6hCw: { style: {} },
                                        },
                                        children: g(E.div, {
                                          className: `framer-lpbbuk`,
                                          'data-framer-name': `3`,
                                          style: { rotateY: 90 },
                                          children: g(G, {
                                            breakpoint: v,
                                            overrides: {
                                              TARYGz5CA: {
                                                height: 240,
                                                width: `max(min(${l?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                              },
                                              uQRrO6hCw: {
                                                height: 360,
                                                width: `max(min(${l?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                              },
                                            },
                                            children: g(W, {
                                              height: 215,
                                              width: `320px`,
                                              children: g(G, {
                                                breakpoint: v,
                                                overrides: {
                                                  TARYGz5CA: { style: {} },
                                                  uQRrO6hCw: { style: {} },
                                                },
                                                children: g(U, {
                                                  className: `framer-1mim42x-container`,
                                                  nodeId: `Rk9N7owQL`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotateY: -90 },
                                                  children: g(Ur, {
                                                    height: `100%`,
                                                    id: `Rk9N7owQL`,
                                                    layoutId: `Rk9N7owQL`,
                                                    style: { height: `100%`, width: `100%` },
                                                    SXjjKopWL: Np(
                                                      {
                                                        pixelHeight: 66,
                                                        pixelWidth: 258,
                                                        src: `https://framerusercontent.com/images/f0y1IAXP7xxPZoecHyx9XHFdiHA.png?width=258&height=66`,
                                                      },
                                                      ``
                                                    ),
                                                    variant: `vifpDyxXC`,
                                                    VypX2yAlC: Np(
                                                      {
                                                        pixelHeight: 963,
                                                        pixelWidth: 1920,
                                                        src: `https://framerusercontent.com/images/Ar0xOtyc6t6DOEroxGy83nJU40.png?width=1920&height=963`,
                                                        srcSet: `https://framerusercontent.com/images/Ar0xOtyc6t6DOEroxGy83nJU40.png?scale-down-to=512&width=1920&height=963 512w,https://framerusercontent.com/images/Ar0xOtyc6t6DOEroxGy83nJU40.png?scale-down-to=1024&width=1920&height=963 1024w,https://framerusercontent.com/images/Ar0xOtyc6t6DOEroxGy83nJU40.png?width=1920&height=963 1920w`,
                                                      },
                                                      ``
                                                    ),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      g(G, {
                                        breakpoint: v,
                                        overrides: {
                                          TARYGz5CA: { style: {} },
                                          uQRrO6hCw: { style: {} },
                                        },
                                        children: g(E.div, {
                                          className: `framer-1lhrha6`,
                                          'data-framer-name': `4`,
                                          style: { rotateY: 135 },
                                          children: g(G, {
                                            breakpoint: v,
                                            overrides: {
                                              TARYGz5CA: {
                                                height: 240,
                                                width: `max(min(${l?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                              },
                                              uQRrO6hCw: {
                                                height: 360,
                                                width: `max(min(${l?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                              },
                                            },
                                            children: g(W, {
                                              height: 215,
                                              width: `320px`,
                                              children: g(G, {
                                                breakpoint: v,
                                                overrides: {
                                                  TARYGz5CA: { style: {} },
                                                  uQRrO6hCw: { style: {} },
                                                },
                                                children: g(U, {
                                                  className: `framer-wu7qjo-container`,
                                                  nodeId: `NHZWjpx6l`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotateY: -90 },
                                                  children: g(Ur, {
                                                    height: `100%`,
                                                    id: `NHZWjpx6l`,
                                                    layoutId: `NHZWjpx6l`,
                                                    style: { height: `100%`, width: `100%` },
                                                    SXjjKopWL: Np(
                                                      {
                                                        pixelHeight: 58,
                                                        pixelWidth: 282,
                                                        src: `https://framerusercontent.com/images/6IX9srHugK666NPKQJythMbMME.png?width=282&height=58`,
                                                      },
                                                      ``
                                                    ),
                                                    variant: `Mj_yFQ3Et`,
                                                    vH_Dks4GI: `https://framerusercontent.com/assets/Ehe42PKiSCrm7iEv3XiwdHbR4.mp4`,
                                                    VypX2yAlC: Np(
                                                      {
                                                        pixelHeight: 963,
                                                        pixelWidth: 1920,
                                                        src: `https://framerusercontent.com/images/ho8Zfrh9Zn7cy1WwOya5LlUqJmg.png?width=1920&height=963`,
                                                        srcSet: `https://framerusercontent.com/images/ho8Zfrh9Zn7cy1WwOya5LlUqJmg.png?scale-down-to=512&width=1920&height=963 512w,https://framerusercontent.com/images/ho8Zfrh9Zn7cy1WwOya5LlUqJmg.png?scale-down-to=1024&width=1920&height=963 1024w,https://framerusercontent.com/images/ho8Zfrh9Zn7cy1WwOya5LlUqJmg.png?width=1920&height=963 1920w`,
                                                      },
                                                      `Pool Area`
                                                    ),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      g(G, {
                                        breakpoint: v,
                                        overrides: {
                                          TARYGz5CA: { style: {} },
                                          uQRrO6hCw: { style: {} },
                                        },
                                        children: g(E.div, {
                                          className: `framer-yt13h4`,
                                          'data-framer-name': `5`,
                                          style: { rotateY: 180 },
                                          children: g(G, {
                                            breakpoint: v,
                                            overrides: {
                                              TARYGz5CA: {
                                                height: 240,
                                                width: `max(min(${l?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                              },
                                              uQRrO6hCw: {
                                                height: 360,
                                                width: `max(min(${l?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                              },
                                            },
                                            children: g(W, {
                                              height: 215,
                                              width: `320px`,
                                              children: g(G, {
                                                breakpoint: v,
                                                overrides: {
                                                  TARYGz5CA: { style: {} },
                                                  uQRrO6hCw: { style: {} },
                                                },
                                                children: g(U, {
                                                  className: `framer-1qqals2-container`,
                                                  nodeId: `cN0AzruUB`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotateY: -90 },
                                                  children: g(Ur, {
                                                    height: `100%`,
                                                    id: `cN0AzruUB`,
                                                    layoutId: `cN0AzruUB`,
                                                    style: { height: `100%`, width: `100%` },
                                                    SXjjKopWL: Np(
                                                      {
                                                        pixelHeight: 58,
                                                        pixelWidth: 282,
                                                        src: `https://framerusercontent.com/images/6IX9srHugK666NPKQJythMbMME.png?width=282&height=58`,
                                                      },
                                                      ``
                                                    ),
                                                    variant: `vifpDyxXC`,
                                                    VypX2yAlC: Np(
                                                      {
                                                        pixelHeight: 963,
                                                        pixelWidth: 1920,
                                                        src: `https://framerusercontent.com/images/pNhNmzIExexZl1L1DS4hRV9gR5U.png?width=1920&height=963`,
                                                        srcSet: `https://framerusercontent.com/images/pNhNmzIExexZl1L1DS4hRV9gR5U.png?scale-down-to=512&width=1920&height=963 512w,https://framerusercontent.com/images/pNhNmzIExexZl1L1DS4hRV9gR5U.png?scale-down-to=1024&width=1920&height=963 1024w,https://framerusercontent.com/images/pNhNmzIExexZl1L1DS4hRV9gR5U.png?width=1920&height=963 1920w`,
                                                      },
                                                      `Pool Area`
                                                    ),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                            I() &&
                              g(`div`, {
                                className: `framer-n0cvq4 hidden-1tqphhv hidden-12a2gtg`,
                                'data-framer-name': `Trigger`,
                                id: z,
                                ref: R,
                              }),
                          ],
                        }),
                      ],
                    }),
                    x(E.section, {
                      className: `framer-1r2gzzg`,
                      'data-framer-name': `Blog`,
                      layout: k,
                      children: [
                        g(W, {
                          height: 24,
                          width: `min(${l?.width || `100vw`}, 1480px)`,
                          children: g(U, {
                            className: `framer-1psm513-container`,
                            nodeId: `SczMiEYiN`,
                            scopeId: `augiA20Il`,
                            children: g(G, {
                              breakpoint: v,
                              overrides: {
                                TARYGz5CA: { variant: `CmSf9J7E0` },
                                uQRrO6hCw: { variant: `kQZZjN_Db` },
                              },
                              children: g(Be, {
                                height: `100%`,
                                Hq7BZwPem: `(WDX® — 10)`,
                                id: `SczMiEYiN`,
                                layoutId: `SczMiEYiN`,
                                NHubkDs7R: `Creative Notes`,
                                pWoyTVtQ4: `© Visual Journal ジャーナル`,
                                style: { width: `100%` },
                                variant: `XFF72MIUC`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        g(W, {
                          height: 200,
                          width: `min(${l?.width || `100vw`}, 1480px)`,
                          children: g(U, {
                            className: `framer-17hi2r4-container`,
                            nodeId: `CWmRPs9cc`,
                            scopeId: `augiA20Il`,
                            children: g(G, {
                              breakpoint: v,
                              overrides: {
                                TARYGz5CA: { variant: `mURiTOP2G` },
                                uQRrO6hCw: { variant: `bkXk11oSP` },
                              },
                              children: g(ma, {
                                bO6IhWfEy: `Featured Article© `,
                                height: `100%`,
                                id: `CWmRPs9cc`,
                                layoutId: `CWmRPs9cc`,
                                style: { width: `100%` },
                                variant: `XkAD5dcWw`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        g(`div`, { className: `framer-1ue40ad`, 'data-framer-name': `Line` }),
                        x(`div`, {
                          className: `framer-1xuj707`,
                          'data-framer-name': `Article Cards`,
                          children: [
                            g(`div`, {
                              className: `framer-1f0ztrn`,
                              children: g(ke, {
                                children: g(Kp, {
                                  pageSize: 1,
                                  query: Gp(),
                                  children: (e, t, n) =>
                                    g(ee, {
                                      children: e?.map(
                                        (
                                          {
                                            b3XlDEEmG: e,
                                            dAZk2Jaon: t,
                                            F1KVBlC4y: n,
                                            id: r,
                                            vtA10ARAU: i,
                                            XbJge9Fsp: a,
                                            XG3otaDlZ: o,
                                            XpFWjsiiE: s,
                                          },
                                          c
                                        ) => (
                                          (o ??= ``),
                                          (a ??= ``),
                                          (t ??= ``),
                                          (e ??= ``),
                                          g(
                                            j,
                                            {
                                              id: `pCK9VFdyL-${r}`,
                                              children: g(oe.Provider, {
                                                value: { XG3otaDlZ: o },
                                                children: g(be, {
                                                  href: {
                                                    pathVariables: { XG3otaDlZ: o },
                                                    webPageId: `iZRHiEHic`,
                                                  },
                                                  motionChild: !0,
                                                  nodeId: `IGOWfbqbZ`,
                                                  scopeId: `augiA20Il`,
                                                  children: g(E.a, {
                                                    className: `framer-15ho39z framer-lux5qc`,
                                                    children: g(G, {
                                                      breakpoint: v,
                                                      overrides: {
                                                        TARYGz5CA: {
                                                          width: `max(min(${l?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                                        },
                                                      },
                                                      children: g(W, {
                                                        height: 600,
                                                        width: `max(min(${l?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                                        children: g(qf, {
                                                          __framer__spring: {
                                                            damping: 60,
                                                            delay: 0,
                                                            duration: 0.3,
                                                            ease: [0.44, 0, 0.56, 1],
                                                            mass: 1,
                                                            stagger: 0,
                                                            stiffness: 500,
                                                            type: `spring`,
                                                          },
                                                          __framer__styleTransformEffectEnabled: !0,
                                                          __framer__transformTargets: [
                                                            {
                                                              target: {
                                                                opacity: 1,
                                                                rotate: 0,
                                                                rotateX: 0,
                                                                rotateY: 0,
                                                                scale: 1,
                                                                skewX: 0,
                                                                skewY: 0,
                                                                x: 0,
                                                                y: 0,
                                                              },
                                                            },
                                                            {
                                                              ref: B(`clive-willow-${re}`),
                                                              target: {
                                                                opacity: 0,
                                                                rotate: 0,
                                                                rotateX: 0,
                                                                rotateY: 0,
                                                                scale: 0.5,
                                                                skewX: 0,
                                                                skewY: 0,
                                                                x: 0,
                                                                y: 0,
                                                              },
                                                            },
                                                          ],
                                                          __framer__transformTrigger: `onScrollTarget`,
                                                          __framer__transformViewportThreshold: 1,
                                                          __perspectiveFX: !1,
                                                          __targetOpacity: 1,
                                                          className: `framer-1r87psp-container`,
                                                          'data-framer-cursor': `14bg376`,
                                                          id: `${o}-${ae}`,
                                                          nodeId: `HwcwFPeWv`,
                                                          ref: B(`${o}-${ae}`),
                                                          rendersWithMotion: !0,
                                                          scopeId: `augiA20Il`,
                                                          children: g(G, {
                                                            breakpoint: v,
                                                            overrides: {
                                                              TARYGz5CA: { variant: `dXXWsfsWX` },
                                                              uQRrO6hCw: { variant: `D_OALAPaM` },
                                                            },
                                                            children: g(es, {
                                                              a052i7pNy: t,
                                                              height: `100%`,
                                                              hQbwNsuVj: a,
                                                              id: `HwcwFPeWv`,
                                                              layoutId: `HwcwFPeWv`,
                                                              nf6LNDsi3: Pp(s),
                                                              s3OJlGzku: e,
                                                              style: { width: `100%` },
                                                              tYkTHyPu6: Pp(n),
                                                              variant: `YDI2v_LhN`,
                                                              width: `100%`,
                                                              Zh9x85h4z: i,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            },
                                            r
                                          )
                                        )
                                      ),
                                    }),
                                }),
                              }),
                            }),
                            g(`div`, {
                              className: `framer-1th58uk`,
                              children: g(ke, {
                                children: g(Jp, {
                                  pageSize: 1,
                                  query: qp(),
                                  children: (e, t, n) =>
                                    g(ee, {
                                      children: e?.map(
                                        (
                                          {
                                            b3XlDEEmG: e,
                                            dAZk2Jaon: t,
                                            F1KVBlC4y: n,
                                            id: r,
                                            vtA10ARAU: i,
                                            XbJge9Fsp: a,
                                            XG3otaDlZ: o,
                                            XpFWjsiiE: s,
                                          },
                                          c
                                        ) => (
                                          (o ??= ``),
                                          (a ??= ``),
                                          (t ??= ``),
                                          (e ??= ``),
                                          g(
                                            j,
                                            {
                                              id: `BqYRJ2f6p-${r}`,
                                              children: g(oe.Provider, {
                                                value: { XG3otaDlZ: o },
                                                children: g(be, {
                                                  href: {
                                                    pathVariables: { XG3otaDlZ: o },
                                                    webPageId: `iZRHiEHic`,
                                                  },
                                                  motionChild: !0,
                                                  nodeId: `f0QbgPgaJ`,
                                                  scopeId: `augiA20Il`,
                                                  children: g(E.a, {
                                                    className: `framer-h0rdv8 framer-lux5qc`,
                                                    children: g(G, {
                                                      breakpoint: v,
                                                      overrides: {
                                                        TARYGz5CA: {
                                                          width: `max(min(${l?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                                        },
                                                      },
                                                      children: g(W, {
                                                        height: 600,
                                                        width: `max(min(${l?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                                        children: g(qf, {
                                                          __framer__spring: {
                                                            damping: 60,
                                                            delay: 0,
                                                            duration: 0.3,
                                                            ease: [0.44, 0, 0.56, 1],
                                                            mass: 1,
                                                            stagger: 0,
                                                            stiffness: 500,
                                                            type: `spring`,
                                                          },
                                                          __framer__styleTransformEffectEnabled: !0,
                                                          __framer__transformTargets: [
                                                            {
                                                              target: {
                                                                opacity: 1,
                                                                rotate: 0,
                                                                rotateX: 0,
                                                                rotateY: 0,
                                                                scale: 1,
                                                                skewX: 0,
                                                                skewY: 0,
                                                                x: 0,
                                                                y: 0,
                                                              },
                                                            },
                                                            {
                                                              ref: B(`raven-claw-${V}`),
                                                              target: {
                                                                opacity: 0,
                                                                rotate: 0,
                                                                rotateX: 0,
                                                                rotateY: 0,
                                                                scale: 0.5,
                                                                skewX: 0,
                                                                skewY: 0,
                                                                x: 0,
                                                                y: 0,
                                                              },
                                                            },
                                                          ],
                                                          __framer__transformTrigger: `onScrollTarget`,
                                                          __framer__transformViewportThreshold: 1,
                                                          __perspectiveFX: !1,
                                                          __targetOpacity: 1,
                                                          className: `framer-y6m9g-container`,
                                                          'data-framer-cursor': `14bg376`,
                                                          id: `${o}-${re}`,
                                                          nodeId: `cxKKrit_s`,
                                                          ref: B(`${o}-${re}`),
                                                          rendersWithMotion: !0,
                                                          scopeId: `augiA20Il`,
                                                          children: g(G, {
                                                            breakpoint: v,
                                                            overrides: {
                                                              TARYGz5CA: { variant: `dXXWsfsWX` },
                                                              uQRrO6hCw: { variant: `D_OALAPaM` },
                                                            },
                                                            children: g(es, {
                                                              a052i7pNy: t,
                                                              height: `100%`,
                                                              hQbwNsuVj: a,
                                                              id: `cxKKrit_s`,
                                                              layoutId: `cxKKrit_s`,
                                                              nf6LNDsi3: Pp(s),
                                                              s3OJlGzku: e,
                                                              style: { width: `100%` },
                                                              tYkTHyPu6: Pp(n),
                                                              variant: `YDI2v_LhN`,
                                                              width: `100%`,
                                                              Zh9x85h4z: i,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            },
                                            r
                                          )
                                        )
                                      ),
                                    }),
                                }),
                              }),
                            }),
                            g(`div`, {
                              className: `framer-1tb74ez`,
                              children: g(ke, {
                                children: g(Xp, {
                                  pageSize: 1,
                                  query: Yp(),
                                  children: (e, t, n) =>
                                    g(ee, {
                                      children: e?.map(
                                        (
                                          {
                                            b3XlDEEmG: e,
                                            dAZk2Jaon: t,
                                            F1KVBlC4y: n,
                                            id: r,
                                            vtA10ARAU: i,
                                            XbJge9Fsp: a,
                                            XG3otaDlZ: o,
                                            XpFWjsiiE: s,
                                          },
                                          c
                                        ) => (
                                          (o ??= ``),
                                          (a ??= ``),
                                          (t ??= ``),
                                          (e ??= ``),
                                          g(
                                            j,
                                            {
                                              id: `xiQtB0ygJ-${r}`,
                                              children: g(oe.Provider, {
                                                value: { XG3otaDlZ: o },
                                                children: g(be, {
                                                  href: {
                                                    pathVariables: { XG3otaDlZ: o },
                                                    webPageId: `iZRHiEHic`,
                                                  },
                                                  motionChild: !0,
                                                  nodeId: `Y2XvY8nea`,
                                                  scopeId: `augiA20Il`,
                                                  children: g(E.a, {
                                                    className: `framer-1su5na9 framer-lux5qc`,
                                                    children: g(G, {
                                                      breakpoint: v,
                                                      overrides: {
                                                        TARYGz5CA: {
                                                          width: `max(min(${l?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                                        },
                                                      },
                                                      children: g(W, {
                                                        height: 600,
                                                        width: `max(min(${l?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                                        children: g(qf, {
                                                          __framer__spring: {
                                                            damping: 60,
                                                            delay: 0,
                                                            duration: 0.3,
                                                            ease: [0.44, 0, 0.56, 1],
                                                            mass: 1,
                                                            stagger: 0,
                                                            stiffness: 500,
                                                            type: `spring`,
                                                          },
                                                          __framer__styleTransformEffectEnabled: !0,
                                                          __framer__transformTargets: [
                                                            {
                                                              target: {
                                                                opacity: 1,
                                                                rotate: 0,
                                                                rotateX: 0,
                                                                rotateY: 0,
                                                                scale: 1,
                                                                skewX: 0,
                                                                skewY: 0,
                                                                x: 0,
                                                                y: 0,
                                                              },
                                                            },
                                                            {
                                                              ref: B(`clay-nicolas-${H}`),
                                                              target: {
                                                                opacity: 0,
                                                                rotate: 0,
                                                                rotateX: 0,
                                                                rotateY: 0,
                                                                scale: 0.5,
                                                                skewX: 0,
                                                                skewY: 0,
                                                                x: 0,
                                                                y: 0,
                                                              },
                                                            },
                                                          ],
                                                          __framer__transformTrigger: `onScrollTarget`,
                                                          __framer__transformViewportThreshold: 1,
                                                          __perspectiveFX: !1,
                                                          __targetOpacity: 1,
                                                          className: `framer-yp67ai-container`,
                                                          'data-framer-cursor': `14bg376`,
                                                          id: `${o}-${V}`,
                                                          nodeId: `gXO5T5l0P`,
                                                          ref: B(`${o}-${V}`),
                                                          rendersWithMotion: !0,
                                                          scopeId: `augiA20Il`,
                                                          children: g(G, {
                                                            breakpoint: v,
                                                            overrides: {
                                                              TARYGz5CA: { variant: `dXXWsfsWX` },
                                                              uQRrO6hCw: { variant: `D_OALAPaM` },
                                                            },
                                                            children: g(es, {
                                                              a052i7pNy: t,
                                                              height: `100%`,
                                                              hQbwNsuVj: a,
                                                              id: `gXO5T5l0P`,
                                                              layoutId: `gXO5T5l0P`,
                                                              nf6LNDsi3: Pp(s),
                                                              s3OJlGzku: e,
                                                              style: { width: `100%` },
                                                              tYkTHyPu6: Pp(n),
                                                              variant: `YDI2v_LhN`,
                                                              width: `100%`,
                                                              Zh9x85h4z: i,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            },
                                            r
                                          )
                                        )
                                      ),
                                    }),
                                }),
                              }),
                            }),
                            g(`div`, {
                              className: `framer-g3svvv`,
                              children: g(ke, {
                                children: g(Qp, {
                                  pageSize: 1,
                                  query: Zp(),
                                  children: (e, t, n) =>
                                    g(ee, {
                                      children: e?.map(
                                        (
                                          {
                                            b3XlDEEmG: e,
                                            dAZk2Jaon: t,
                                            F1KVBlC4y: n,
                                            id: r,
                                            vtA10ARAU: i,
                                            XbJge9Fsp: a,
                                            XG3otaDlZ: o,
                                            XpFWjsiiE: s,
                                          },
                                          c
                                        ) => (
                                          (o ??= ``),
                                          (a ??= ``),
                                          (t ??= ``),
                                          (e ??= ``),
                                          g(
                                            j,
                                            {
                                              id: `ws_bTD3yG-${r}`,
                                              children: g(oe.Provider, {
                                                value: { XG3otaDlZ: o },
                                                children: g(be, {
                                                  href: {
                                                    pathVariables: { XG3otaDlZ: o },
                                                    webPageId: `iZRHiEHic`,
                                                  },
                                                  motionChild: !0,
                                                  nodeId: `OBumd3Vc7`,
                                                  scopeId: `augiA20Il`,
                                                  children: g(E.a, {
                                                    className: `framer-14bojy4 framer-lux5qc`,
                                                    children: g(G, {
                                                      breakpoint: v,
                                                      overrides: {
                                                        TARYGz5CA: {
                                                          width: `max(min(${l?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                                        },
                                                      },
                                                      children: g(W, {
                                                        height: 600,
                                                        width: `max(min(${l?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                                        children: g(U, {
                                                          className: `framer-1v9gz2l-container`,
                                                          'data-framer-cursor': `14bg376`,
                                                          id: `${o}-${H}`,
                                                          nodeId: `PlaDQURl5`,
                                                          ref: B(`${o}-${H}`),
                                                          scopeId: `augiA20Il`,
                                                          children: g(G, {
                                                            breakpoint: v,
                                                            overrides: {
                                                              TARYGz5CA: { variant: `dXXWsfsWX` },
                                                              uQRrO6hCw: { variant: `D_OALAPaM` },
                                                            },
                                                            children: g(es, {
                                                              a052i7pNy: t,
                                                              height: `100%`,
                                                              hQbwNsuVj: a,
                                                              id: `PlaDQURl5`,
                                                              layoutId: `PlaDQURl5`,
                                                              nf6LNDsi3: Pp(s),
                                                              s3OJlGzku: e,
                                                              style: { width: `100%` },
                                                              tYkTHyPu6: Pp(n),
                                                              variant: `YDI2v_LhN`,
                                                              width: `100%`,
                                                              Zh9x85h4z: i,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            },
                                            r
                                          )
                                        )
                                      ),
                                    }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        g(`div`, { className: `framer-bngqg2`, 'data-framer-name': `Line` }),
                      ],
                    }),
                  ],
                }),
                g(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-G3OxB.framer-lux5qc, .framer-G3OxB .framer-lux5qc { display: block; }`,
        `.framer-G3OxB.framer-72rtr7 { --selection-background-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff) /* {"name":"White"} */; --selection-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000) /* {"name":"Black"} */; align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-G3OxB .framer-dhlfab { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1480px; overflow: hidden; padding: 90px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-1y2k8yn-container { flex: none; height: auto; left: 50%; position: absolute; top: 396px; transform: translateX(-50%); width: 100%; }`,
        `.framer-G3OxB .framer-ty36tk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 24px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-1n76yiy { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 540px; overflow: visible; padding: 16px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-G3OxB .framer-x5pde, .framer-G3OxB .framer-1ki04el, .framer-G3OxB .framer-za16rf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-7eph4s, .framer-G3OxB .framer-19l0zu6, .framer-G3OxB .framer-9kazno { --framer-paragraph-spacing: 0px; flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-G3OxB .framer-mxo2f9, .framer-G3OxB .framer-1ep4u7l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-1xqbms1 { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; mix-blend-mode: difference; position: relative; white-space: pre-wrap; width: 1px; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-G3OxB .framer-ajhxcq { align-content: center; align-items: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-G3OxB .framer-1uxqzhi-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-G3OxB .framer-unlq7x-container { height: 449px; position: relative; width: 554px; }`,
        `.framer-G3OxB.framer-gul5pu { inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-G3OxB.framer-169szll { -webkit-backdrop-filter: blur(20px); -webkit-user-select: none; backdrop-filter: blur(20px); background-color: var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2)); bottom: 0px; flex: none; left: 0px; overflow: hidden; pointer-events: none; position: fixed; right: 0px; top: 0px; user-select: none; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,
        `.framer-G3OxB.framer-nqfrei { --border-bottom-width: 1px; --border-color: var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; aspect-ratio: 1.7733990147783252 / 1; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; flex: none; height: var(--framer-aspect-ratio-supported, 474px); left: 50%; overflow: hidden; position: fixed; top: 50%; transform: translate(-50%, -50%); width: 70%; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,
        `.framer-G3OxB .framer-o1tapf-container, .framer-G3OxB .framer-qplkjo-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-G3OxB .framer-1jn9ae6, .framer-G3OxB .framer-1y8re1e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-1snsm42, .framer-G3OxB .framer-1oqrrs3 { background-color: var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2)); flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-G3OxB .framer-2xxdw2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-G3OxB .framer-1nbr0fn { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-G3OxB .framer-icxlw2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: 1440px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-G3OxB .framer-19mjztk { background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); flex: none; height: 100%; opacity: 0.9; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-G3OxB .framer-1ax983m { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1480px; overflow: hidden; padding: 80px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-1njfbtx-container, .framer-G3OxB .framer-tjjepc-container, .framer-G3OxB .framer-19mrkgn-container, .framer-G3OxB .framer-17yesjc-container, .framer-G3OxB .framer-dlgb9u-container, .framer-G3OxB .framer-1bhtlar-container, .framer-G3OxB .framer-1fvzi93-container, .framer-G3OxB .framer-1tu45ze-container, .framer-G3OxB .framer-ziuq0f-container, .framer-G3OxB .framer-izk59c-container, .framer-G3OxB .framer-1da5zd7-container, .framer-G3OxB .framer-1j301b2-container, .framer-G3OxB .framer-9xrb9k-container, .framer-G3OxB .framer-1f0kzgh-container, .framer-G3OxB .framer-1a29w76-container, .framer-G3OxB .framer-1psm513-container, .framer-G3OxB .framer-17hi2r4-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-iysrdq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-1ms48bc-container { bottom: 214px; flex: none; height: auto; position: absolute; right: -22px; width: 100%; }`,
        `.framer-G3OxB .framer-lr824 { align-content: center; align-items: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 797px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-G3OxB .framer-udqf9x { flex: none; gap: 10px; height: 150%; position: relative; width: 473px; }`,
        `.framer-G3OxB .framer-1rl8hlq { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: visible; padding: 50px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-G3OxB .framer-1v555c3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-em85qg { --framer-paragraph-spacing: 0px; flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-G3OxB .framer-1ajmrvo-container, .framer-G3OxB .framer-1k5nnzf-container, .framer-G3OxB .framer-lm13iu-container, .framer-G3OxB .framer-6n8j6c-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-G3OxB .framer-g03chh, .framer-G3OxB .framer-nioezp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-175z5lx, .framer-G3OxB .framer-uxzvq2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-1xfh2b8-container, .framer-G3OxB .framer-1tvmme6-container, .framer-G3OxB .framer-1yslzav-container, .framer-G3OxB .framer-w56dtp-container, .framer-G3OxB .framer-5sd1c5-container, .framer-G3OxB .framer-1umn22f-container, .framer-G3OxB .framer-1pdl6xk-container, .framer-G3OxB .framer-1nqezu6-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-G3OxB .framer-7ma1j6 { align-content: flex-start; align-items: flex-start; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 1480px; overflow: hidden; padding: 180px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-1iqzdbj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-hrs0gc, .framer-G3OxB .framer-1ue40ad, .framer-G3OxB .framer-bngqg2 { background-color: var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2)); flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-1vtzatb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 570px; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-1nbs19a { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 540px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }`,
        `.framer-G3OxB .framer-ydi31p { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-1ejixw2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-yyr9dg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-aieywt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 0px 0px 0px; position: relative; width: 50%; }`,
        `.framer-G3OxB .framer-1avqepk, .framer-G3OxB .framer-r9l3vn, .framer-G3OxB .framer-vrk7k3, .framer-G3OxB .framer-1nmac4u, .framer-G3OxB .framer-g3svvv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-tqvx7w, .framer-G3OxB .framer-1c3zuno, .framer-G3OxB .framer-859d0m, .framer-G3OxB .framer-2b77dg, .framer-G3OxB .framer-1vtosv4, .framer-G3OxB .framer-15ho39z, .framer-G3OxB .framer-h0rdv8, .framer-G3OxB .framer-1su5na9, .framer-G3OxB .framer-14bojy4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-G3OxB .framer-1bn3y75 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 35%; }`,
        `.framer-G3OxB .framer-1io1jaa-container, .framer-G3OxB .framer-1d8vcph-container { flex: 1 0 0px; height: 390px; position: relative; width: 1px; }`,
        `.framer-G3OxB .framer-19fh9pm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 32%; }`,
        `.framer-G3OxB .framer-1gusm9m-container { flex: 1 0 0px; height: 590px; position: relative; width: 1px; }`,
        `.framer-G3OxB .framer-a02h80 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-ayya54, .framer-G3OxB .framer-roc34l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 0px 0px 0px; position: relative; width: 32%; }`,
        `.framer-G3OxB .framer-1cx19ot-container { flex: 1 0 0px; height: 490px; position: relative; width: 1px; }`,
        `.framer-G3OxB .framer-ywystf, .framer-G3OxB .framer-3bo6w { align-content: flex-end; align-items: flex-end; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1480px; overflow: hidden; padding: 180px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-1shioqx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-qfi1to, .framer-G3OxB .framer-zpgfvt, .framer-G3OxB .framer-hevtxl, .framer-G3OxB .framer-1gfm96s, .framer-G3OxB .framer-z1zavc, .framer-G3OxB .framer-iqp5t0 { --framer-paragraph-spacing: 0px; flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: auto; }`,
        `.framer-G3OxB .framer-z6tqd1, .framer-G3OxB .framer-1q7buau, .framer-G3OxB .framer-fxw7eo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-G3OxB .framer-b48xgz-container { flex: none; height: auto; position: relative; width: 64%; }`,
        `.framer-G3OxB .framer-1390c7e { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1480px; overflow: hidden; padding: 180px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-1wqpm7v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 264px; height: min-content; justify-content: center; overflow: hidden; padding: 280px 24px 835px 24px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-ica3fy { border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: none; height: 473px; left: 116px; overflow: hidden; position: absolute; top: 1356px; width: 326px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-G3OxB .framer-6h0ehn { border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: none; height: 659px; overflow: hidden; position: absolute; right: 24px; top: 896px; width: 454px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-G3OxB .framer-cpykhu { border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: none; height: 473px; left: 116px; overflow: hidden; position: absolute; top: 670px; width: 326px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-G3OxB .framer-3j4you { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1000px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-p0ih05-container { flex: 1 0 0px; height: auto; max-width: 1000px; mix-blend-mode: difference; position: relative; width: 1px; }`,
        `.framer-G3OxB .framer-1wraq4e { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 356px 0px 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-6vahvq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 450px; mix-blend-mode: difference; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-10fi5y6 { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 450px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-G3OxB .framer-1gmzvq4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-1l9i2gv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-bcin9m { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1000px; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-G3OxB .framer-1xdtwk-container { flex: none; height: auto; mix-blend-mode: difference; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-pq27se { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; }`,
        `.framer-G3OxB .framer-vzjr3v { aspect-ratio: 5.637362637362638 / 1; bottom: 2px; flex: none; height: var(--framer-aspect-ratio-supported, 23px); left: -40px; mix-blend-mode: difference; overflow: visible; position: absolute; width: 128px; z-index: 1; }`,
        `.framer-G3OxB .framer-uibrbw-container { flex: none; height: 198px; position: relative; width: 136px; }`,
        `.framer-G3OxB .framer-1584asb { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1480px; overflow: visible; padding: 180px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-1yqd1cr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-G3OxB .framer-cugt0u { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-G3OxB .framer-iz2ttu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 540px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-1ci02mx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 200px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-G3OxB .framer-1lhy046, .framer-G3OxB .framer-kk01de { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 420px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-fh9adf-container, .framer-G3OxB .framer-217sdr-container, .framer-G3OxB .framer-vwcvun-container { flex: none; height: auto; position: relative; width: 370px; }`,
        `.framer-G3OxB .framer-1w24wxd, .framer-G3OxB .framer-1v5lw3w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 140px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-G3OxB .framer-ut62vy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 300px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-sxcm2e-container, .framer-G3OxB .framer-nyb1nu-container { flex: none; height: auto; position: relative; width: 350px; }`,
        `.framer-G3OxB .framer-pemt1m { flex: none; gap: 500px; height: 200px; overflow: hidden; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-516i77 { align-content: flex-end; align-items: flex-end; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1480px; overflow: hidden; padding: 140px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-101ri9t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-1m9mwkk { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 870px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-G3OxB .framer-jx0221 { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1480px; overflow: visible; padding: 180px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-1cb3c26 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 870px; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-aw0pws { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-uhiquf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: 100vh; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-G3OxB .framer-yo1wig { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-zc56pd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; transform-style: preserve-3d; width: min-content; }`,
        `.framer-G3OxB .framer-nubgww, .framer-G3OxB .framer-o6wfn3, .framer-G3OxB .framer-lpbbuk, .framer-G3OxB .framer-1lhrha6, .framer-G3OxB .framer-yt13h4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 151px; justify-content: center; overflow: visible; padding: 0px; position: relative; transform-style: preserve-3d; width: 865px; }`,
        `.framer-G3OxB .framer-1ptiw9v-container { flex: none; height: 215px; left: calc(-0.1615508885298647% - 320px / 2); position: absolute; top: calc(49.62406015037596% - 215px / 2); width: 320px; z-index: 1; }`,
        `.framer-G3OxB .framer-1yykzln-container, .framer-G3OxB .framer-1mim42x-container, .framer-G3OxB .framer-wu7qjo-container, .framer-G3OxB .framer-1qqals2-container { flex: none; height: 215px; left: -161px; position: absolute; top: -82px; width: 320px; z-index: 1; }`,
        `.framer-G3OxB .framer-n0cvq4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1400px; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-1r2gzzg { align-content: flex-start; align-items: flex-start; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 1480px; overflow: visible; padding: 180px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-1xuj707 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-G3OxB .framer-1f0ztrn, .framer-G3OxB .framer-1th58uk, .framer-G3OxB .framer-1tb74ez { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: sticky; top: 20px; width: 100%; z-index: 1; }`,
        `.framer-G3OxB .framer-1r87psp-container, .framer-G3OxB .framer-y6m9g-container, .framer-G3OxB .framer-yp67ai-container, .framer-G3OxB .framer-1v9gz2l-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; z-index: 1; }`,
        ...ft,
        ...sr,
        ..._t,
        `.framer-G3OxB[data-selection="true"] * ::selection, .framer-G3OxB [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
        `.framer-G3OxB[data-border="true"]::after, .framer-G3OxB [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-G3OxB.framer-72rtr7 { width: 810px; } .framer-G3OxB .framer-ty36tk { gap: 20px; justify-content: flex-start; } .framer-G3OxB.framer-nqfrei { height: var(--framer-aspect-ratio-supported, 366px); width: 80%; } .framer-G3OxB .framer-iysrdq { flex-direction: column; } .framer-G3OxB .framer-lr824 { height: 640px; width: 100%; } .framer-G3OxB .framer-udqf9x, .framer-G3OxB .framer-19fh9pm { flex: 1 0 0px; width: 1px; } .framer-G3OxB .framer-1rl8hlq { align-self: unset; flex: none; gap: 80px; height: min-content; justify-content: flex-start; width: 100%; } .framer-G3OxB .framer-7ma1j6 { padding: 130px 0px 0px 0px; } .framer-G3OxB .framer-1ejixw2 { gap: 24px; } .framer-G3OxB .framer-yyr9dg, .framer-G3OxB .framer-a02h80 { flex-direction: column; gap: 24px; justify-content: flex-start; } .framer-G3OxB .framer-aieywt { padding: 80px 0px 0px 0px; width: 100%; } .framer-G3OxB .framer-1nqezu6-container, .framer-G3OxB .framer-1io1jaa-container, .framer-G3OxB .framer-1gusm9m-container, .framer-G3OxB .framer-1d8vcph-container, .framer-G3OxB .framer-1cx19ot-container { height: 600px; } .framer-G3OxB .framer-1bn3y75, .framer-G3OxB .framer-b48xgz-container { width: 100%; } .framer-G3OxB .framer-ayya54, .framer-G3OxB .framer-roc34l { padding: 0px; width: 100%; } .framer-G3OxB .framer-ywystf, .framer-G3OxB .framer-1390c7e, .framer-G3OxB .framer-3bo6w, .framer-G3OxB .framer-1584asb, .framer-G3OxB .framer-516i77, .framer-G3OxB .framer-1r2gzzg { padding: 120px 0px 0px 0px; } .framer-G3OxB .framer-1wqpm7v { align-content: flex-start; align-items: flex-start; gap: 50px; padding: 40px 24px 835px 24px; } .framer-G3OxB .framer-ica3fy { aspect-ratio: 0.6892177589852009 / 1; height: var(--framer-aspect-ratio-supported, 214px); top: 1126px; width: 147px; } .framer-G3OxB .framer-6h0ehn { aspect-ratio: 0.6889226100151745 / 1; height: var(--framer-aspect-ratio-supported, 296px); width: 204px; } .framer-G3OxB .framer-cpykhu { aspect-ratio: 0.6892177589852009 / 1; height: var(--framer-aspect-ratio-supported, 227px); left: 36px; top: 590px; width: 156px; } .framer-G3OxB .framer-1wraq4e { align-content: flex-start; align-items: flex-start; padding: 0px; } .framer-G3OxB .framer-1gmzvq4, .framer-G3OxB .framer-1lhy046, .framer-G3OxB .framer-kk01de { gap: 80px; } .framer-G3OxB .framer-fh9adf-container, .framer-G3OxB .framer-217sdr-container, .framer-G3OxB .framer-vwcvun-container, .framer-G3OxB .framer-nyb1nu-container { width: 330px; } .framer-G3OxB .framer-1m9mwkk { max-width: unset; } .framer-G3OxB .framer-jx0221 { gap: 80px; padding: 120px 0px 0px 0px; } .framer-G3OxB .framer-1cb3c26 { max-width: unset; order: 1; overflow: hidden; } .framer-G3OxB .framer-z1zavc { mix-blend-mode: unset; } .framer-G3OxB .framer-1a29w76-container { order: 0; } .framer-G3OxB .framer-aw0pws { order: 2; } .framer-G3OxB .framer-uhiquf { height: min-content; padding: 0px 24px 0px 24px; position: relative; top: unset; } .framer-G3OxB .framer-yo1wig { flex: none; height: min-content; } .framer-G3OxB .framer-zc56pd { gap: 24px; width: 100%; } .framer-G3OxB .framer-nubgww, .framer-G3OxB .framer-o6wfn3, .framer-G3OxB .framer-1lhrha6, .framer-G3OxB .framer-yt13h4 { height: 360px; transform-style: unset; width: 100%; } .framer-G3OxB .framer-1ptiw9v-container, .framer-G3OxB .framer-1yykzln-container, .framer-G3OxB .framer-wu7qjo-container, .framer-G3OxB .framer-1qqals2-container { flex: 1 0 0px; height: 100%; left: unset; position: relative; top: unset; width: 1px; } .framer-G3OxB .framer-lpbbuk { height: 360px; width: 100%; } .framer-G3OxB .framer-1mim42x-container { flex: 1 0 0px; height: 360px; left: unset; position: relative; top: unset; width: 1px; }}`,
        `@media (max-width: 809.98px) { .framer-G3OxB.framer-72rtr7 { width: 390px; } .framer-G3OxB .framer-ty36tk { flex-direction: column; gap: 30px; justify-content: flex-start; padding: 30px 20px 30px 20px; } .framer-G3OxB .framer-1n76yiy { flex: none; padding: 0px; width: 100%; } .framer-G3OxB .framer-ajhxcq { height: 220px; width: 100%; } .framer-G3OxB .framer-1uxqzhi-container { flex: 1 0 0px; height: 100%; width: 1px; } .framer-G3OxB.framer-nqfrei { height: var(--framer-aspect-ratio-supported, 198px); width: 90%; } .framer-G3OxB .framer-2xxdw2, .framer-G3OxB .framer-ydi31p, .framer-G3OxB .framer-1shioqx, .framer-G3OxB .framer-1l9i2gv, .framer-G3OxB .framer-ut62vy, .framer-G3OxB .framer-101ri9t { padding: 0px 20px 0px 20px; } .framer-G3OxB .framer-iysrdq { flex-direction: column; gap: 0px; padding: 0px 20px 0px 20px; } .framer-G3OxB .framer-lr824 { height: 380px; width: 100%; } .framer-G3OxB .framer-udqf9x, .framer-G3OxB .framer-19fh9pm, .framer-G3OxB .framer-sxcm2e-container { flex: 1 0 0px; width: 1px; } .framer-G3OxB .framer-1rl8hlq { align-self: unset; flex: none; gap: 60px; height: min-content; justify-content: center; padding: 60px 0px 0px 0px; width: 100%; } .framer-G3OxB .framer-1v555c3, .framer-G3OxB .framer-6vahvq, .framer-G3OxB .framer-cugt0u, .framer-G3OxB .framer-1ci02mx { gap: 30px; } .framer-G3OxB .framer-g03chh { gap: 10px; } .framer-G3OxB .framer-175z5lx { flex-direction: column; gap: 10px; min-height: 151px; } .framer-G3OxB .framer-uxzvq2 { flex-direction: column; gap: 10px; } .framer-G3OxB .framer-w56dtp-container, .framer-G3OxB .framer-1umn22f-container { flex: none; width: 100%; } .framer-G3OxB .framer-7ma1j6, .framer-G3OxB .framer-ywystf, .framer-G3OxB .framer-1390c7e, .framer-G3OxB .framer-3bo6w, .framer-G3OxB .framer-516i77, .framer-G3OxB .framer-jx0221, .framer-G3OxB .framer-1r2gzzg { gap: 60px; padding: 80px 0px 0px 0px; } .framer-G3OxB .framer-nioezp { gap: 60px; } .framer-G3OxB .framer-1vtzatb { gap: 30px; padding: 0px 20px 0px 20px; } .framer-G3OxB .framer-1ejixw2 { gap: 24px; } .framer-G3OxB .framer-yyr9dg, .framer-G3OxB .framer-a02h80 { flex-direction: column; gap: 24px; justify-content: flex-start; } .framer-G3OxB .framer-aieywt, .framer-G3OxB .framer-ayya54, .framer-G3OxB .framer-roc34l, .framer-G3OxB .framer-1w24wxd, .framer-G3OxB .framer-1v5lw3w { padding: 0px; width: 100%; } .framer-G3OxB .framer-1nqezu6-container, .framer-G3OxB .framer-1gusm9m-container, .framer-G3OxB .framer-1cx19ot-container { height: 390px; } .framer-G3OxB .framer-1bn3y75, .framer-G3OxB .framer-b48xgz-container, .framer-G3OxB .framer-fh9adf-container, .framer-G3OxB .framer-217sdr-container, .framer-G3OxB .framer-vwcvun-container, .framer-G3OxB .framer-nyb1nu-container { width: 100%; } .framer-G3OxB .framer-1wqpm7v { align-content: flex-start; align-items: flex-start; gap: 60px; padding: 0px 20px 835px 20px; } .framer-G3OxB .framer-ica3fy { aspect-ratio: 0.6892177589852009 / 1; height: var(--framer-aspect-ratio-supported, 110px); left: 16px; top: 686px; width: 76px; } .framer-G3OxB .framer-6h0ehn { aspect-ratio: 0.6889226100151745 / 1; height: var(--framer-aspect-ratio-supported, 209px); top: 936px; width: 144px; } .framer-G3OxB .framer-cpykhu { aspect-ratio: 0.6892177589852009 / 1; height: var(--framer-aspect-ratio-supported, 124px); left: 286px; top: 440px; width: 85px; } .framer-G3OxB .framer-1wraq4e { padding: 0px; } .framer-G3OxB .framer-1xdtwk-container { width: auto; } .framer-G3OxB .framer-1584asb { padding: 80px 0px 0px 0px; } .framer-G3OxB .framer-1lhy046, .framer-G3OxB .framer-kk01de { flex-direction: column; gap: 30px; padding: 0px 20px 0px 20px; } .framer-G3OxB .framer-1cb3c26 { order: 1; overflow: hidden; padding: 0px 20px 0px 20px; } .framer-G3OxB .framer-1a29w76-container { order: 0; } .framer-G3OxB .framer-aw0pws { order: 2; } .framer-G3OxB .framer-uhiquf { height: min-content; padding: 0px 20px 0px 20px; position: relative; top: unset; } .framer-G3OxB .framer-yo1wig { flex: none; height: min-content; } .framer-G3OxB .framer-zc56pd { gap: 24px; transform-style: unset; width: 100%; } .framer-G3OxB .framer-nubgww, .framer-G3OxB .framer-o6wfn3, .framer-G3OxB .framer-lpbbuk, .framer-G3OxB .framer-1lhrha6, .framer-G3OxB .framer-yt13h4 { height: 240px; transform-style: unset; width: 100%; } .framer-G3OxB .framer-1ptiw9v-container, .framer-G3OxB .framer-1yykzln-container, .framer-G3OxB .framer-1mim42x-container, .framer-G3OxB .framer-wu7qjo-container, .framer-G3OxB .framer-1qqals2-container { flex: 1 0 0px; height: 100%; left: unset; position: relative; top: unset; width: 1px; } .framer-G3OxB .framer-1xuj707 { gap: 24px; padding: 0px 20px 0px 20px; }}`,
      ],
      `framer-G3OxB`
    )),
    (dm = um),
    (um.displayName = `Home`),
    (um.defaultProps = { height: 22562.5, width: 1200 }),
    L(
      um,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/PfdOpgzFf7N2Uye9JX7xRKYTgSc.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
          ],
        },
        ...Of,
        ...Af,
        ...jf,
        ...Nf,
        ...Ff,
        ...If,
        ...Rf,
        ...zf,
        ...Bf,
        ...Vf,
        ...Uf,
        ...Wf,
        ...Gf,
        ...Kf,
        ...Jf,
        ...Yf,
        ...Xf,
        ...Zf,
        ...Qf,
        ...ep,
        ...tp,
        ...np,
        ...B(lt),
        ...B(or),
        ...B(ot),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (um.loader = {
      load: (e, t) =>
        Promise.allSettled([
          re.get(Fp(), t.locale).preload(),
          re.get(Lp(), t.locale).preload(),
          re.get(zp(), t.locale).preload(),
          re.get(Vp(), t.locale).preload(),
          re.get(Up(), t.locale).preload(),
          re.get(Gp(), t.locale).preload(),
          re.get(qp(), t.locale).preload(),
          re.get(Yp(), t.locale).preload(),
          re.get(Zp(), t.locale).preload(),
        ]),
    }),
    (fm = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerResponsiveScreen: `true`,
            framerIntrinsicWidth: `1200`,
            framerAutoSizeImages: `true`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerContractVersion: `1`,
            framerLayoutTemplateFlowEffect: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"uQRrO6hCw":{"layout":["fixed","auto"]},"TARYGz5CA":{"layout":["fixed","auto"]}}}`,
            framerAcceptsLayoutTemplate: `true`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `{"MHiTKHdUJ":{"pattern":":MHiTKHdUJ","name":"top"},"qkDPHMqEp":{"pattern":":qkDPHMqEp","name":"images"},"cxKKrit_s":{"pattern":":XG3otaDlZ-:cxKKrit_s","name":"card-2","slugs":{"XG3otaDlZ":{"identifier":"local-module:collection/ERDJzzQHr:default","provider":"BqYRJ2f6p"}}},"HwcwFPeWv":{"pattern":":XG3otaDlZ-:HwcwFPeWv","name":"card-1","slugs":{"XG3otaDlZ":{"identifier":"local-module:collection/ERDJzzQHr:default","provider":"pCK9VFdyL"}}},"gXO5T5l0P":{"pattern":":XG3otaDlZ-:gXO5T5l0P","name":"card-3","slugs":{"XG3otaDlZ":{"identifier":"local-module:collection/ERDJzzQHr:default","provider":"xiQtB0ygJ"}}},"PlaDQURl5":{"pattern":":XG3otaDlZ-:PlaDQURl5","name":"card-4","slugs":{"XG3otaDlZ":{"identifier":"local-module:collection/ERDJzzQHr:default","provider":"ws_bTD3yG"}}}}`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `22562.5`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { fm as __FramerMetadata__, dm as default };
