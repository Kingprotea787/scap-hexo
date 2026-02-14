import { t as e } from './rolldown-runtime.hBrq4iGT.mjs';
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
  _ as f,
  a as p,
  b as m,
  c as h,
  i as g,
  j as _,
  l as v,
  o as y,
  s as b,
} from './react.C4KsdBhc.mjs';
import {
  H as x,
  L as S,
  S as C,
  W as ee,
  a as w,
  n as T,
  r as E,
  t as D,
} from './motion.CLMuhvIE.mjs';
import {
  B as O,
  C as k,
  Ct as A,
  D as j,
  E as M,
  K as N,
  M as te,
  O as P,
  R as F,
  S as I,
  T as ne,
  V as re,
  _t as ie,
  a as L,
  bt as R,
  c as ae,
  ct as oe,
  d as se,
  dt as ce,
  gt as le,
  ht as ue,
  i as z,
  j as B,
  m as de,
  mt as fe,
  nt as pe,
  o as me,
  ot as he,
  pt as V,
  r as H,
  rt as U,
  st as ge,
  t as _e,
  u as W,
  ut as ve,
  v as ye,
  vt as be,
  w as G,
  wt as xe,
  x as Se,
  xt as K,
  y as q,
  yt as Ce,
  z as J,
} from './framer.CmCM7JFA.mjs';
import { i as we, n as Te, r as Ee, t as De } from './uDh9bONtj.Bbyyg0aU.mjs';
import { i as Oe, n as ke, r as Ae, t as je } from './e5sg_hatD.C-bqqh0G.mjs';
import { a as Me, i as Ne, n as Pe, o as Fe, r as Ie, t as Le } from './FsS03h6Vk.cYyJ6DCw.mjs';
import { n as Re, t as ze } from './XiwmsdpiU.BSOmk-TN.mjs';
import { i as Be, n as Ve, r as He, t as Ue } from './eqDmnbQxL.DoawUbJc.mjs';
import { i as We, n as Ge, r as Ke, t as qe } from './bLxN69a46.DA1Ak13L.mjs';
import { i as Je, n as Ye, r as Xe, t as Ze } from './YMtdKmiBu.BcGe0gdj.mjs';
import {
  a as Qe,
  c as $e,
  i as et,
  l as tt,
  n as nt,
  o as rt,
  r as it,
  s as at,
  t as ot,
} from './Video._bQufj64.mjs';
import { n as st, t as ct } from './aDaMEpysA.23HIeEml.mjs';
import { n as lt, t as ut } from './gJm1Hubun.DxXC4mjf.mjs';
import { a as dt, i as ft, n as pt, o as mt, r as ht, t as gt } from './FsS03h6Vk.B0ZuuB86.mjs';
import { n as _t, t as vt } from './sxUe_G8Sa.CT-yyp37.mjs';
import { n as yt, t as bt } from './Wt4XK6WYf.g8OMkRWP.mjs';
import { i as Y, t as xt } from './ERDJzzQHr.BEMXLLzK.mjs';
import { i as St, t as Ct } from './ZRM2PWVwA.Cmp2wvPl.mjs';
import { n as wt, r as Tt } from './augiA20Il.COYon96O.mjs';
function Et({
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
    [m, g] = d(0),
    _ = ((Dt - t + 1) / Dt) * 5,
    y = n * 1e3,
    x = _ * 1e3,
    S = Se.current() === Se.canvas,
    [ee, w] = d(!0);
  return (
    o(() => {
      let e = ee ? x / 3 + y : x + y,
        t = setInterval(() => {
          (w(!1), m < p.length - 1 ? g((e) => e + 1) : l && g(0));
        }, e);
      return () => clearInterval(t);
    }, [m, l, ee]),
    v(`div`, {
      style: {
        userSelect: i ? `auto` : `none`,
        position: `relative`,
        display: `flex`,
        flexDirection: `row`,
        overflow: `visible`,
        justifyContent: s === `center` ? `center` : s === `right` ? `flex-end` : `flex-start`,
      },
      children: [
        h(f, {
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
        S &&
          h(f, {
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
        !S &&
          h(b, {
            children: p.map((e, t) => {
              let n = 0,
                i = e
                  .split(/(\s+|\b)/)
                  .map((e) => ({
                    text: e,
                    chars: e.split(``).map((e) => ({ char: e, originalIndex: n++ })),
                  }));
              return (
                console.log(i),
                h(
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
                    children: h(T, {
                      mode: `sync`,
                      children:
                        m === t &&
                        h(`div`, {
                          style: {
                            display: `flex`,
                            flexWrap: `wrap`,
                            width: `100%`,
                            justifyContent:
                              s === `center` ? `center` : s === `right` ? `flex-end` : `flex-start`,
                            gap: 0,
                          },
                          children: i.map((t, n) =>
                            h(
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
                                        transition: { ...Ot, duration: _ / 2, delay: o * u },
                                      },
                                      animate: {
                                        transform: `translate(0px, 0px)`,
                                        transition: { ...Ot, duration: _ / 2, delay: s * u },
                                      },
                                      exit: {
                                        transform: `translate(0px, -150%)`,
                                        transition: { ...Ot, duration: _ / 2, delay: c * u },
                                      },
                                    };
                                  return h(
                                    C.div,
                                    {
                                      variants: l,
                                      initial: ee ? !1 : `initial`,
                                      animate: ee ? !1 : `animate`,
                                      exit: `exit`,
                                      style: { display: `inline-block` },
                                      children: h(f, {
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
var Dt,
  Ot,
  kt = e(() => {
    (y(),
      r(),
      N(),
      D(),
      (Dt = 20),
      (Ot = { ease: [0.11, 0.72, 0, 1] }),
      (Et.displayName = `Staggered Cycle`),
      P(Et, {
        text: {
          type: L.String,
          title: `Text`,
          defaultValue: `DESIGNER, DEVELOPER`,
          description: `Divide the words with a comma (,) if you want to display them separately.`,
        },
        speed: { type: L.Number, title: `Speed`, defaultValue: Dt / 2, min: 1, max: Dt },
        delay: { type: L.Number, title: `Delay`, defaultValue: 1, min: 0, max: 10, unit: `s` },
        stagger: {
          title: `Stagger`,
          description: `The delay between each word.`,
          type: L.Number,
          defaultValue: 0.5,
          step: 0.1,
          min: 0,
          max: 1,
        },
        font: { title: `Font`, type: L.Font, controls: `extended` },
        alignment: {
          type: L.Enum,
          displaySegmentedControl: !0,
          title: `Alignment`,
          defaultValue: `left`,
          options: [`left`, `center`, `right`],
          optionTitles: [`Left`, `Center`, `Right`],
        },
        userSelect: { title: `User Select`, type: L.Boolean, defaultValue: !1 },
        color: { title: `Color`, type: L.Color, defaultValue: `#ffffff` },
        tag: {
          type: L.Enum,
          title: `Tag`,
          defaultValue: `p`,
          displaySegmentedControl: !0,
          segmentedControlDirection: `horizontal`,
          options: [`h1`, `h2`, `h3`, `p`],
          optionTitles: [`H1`, `H2`, `H3`, `P`],
        },
        loop: {
          title: `Loop`,
          type: L.Boolean,
          defaultValue: !0,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }),
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt = e(() => {
    (y(),
      N(),
      D(),
      r(),
      (At = `framer-ZpfHZ`),
      (jt = { XvqTw0Be9: `framer-v-jjcw9a` }),
      (Mt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Nt = ({ value: e, children: t }) => {
        let n = c(w),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (Pt = C.create(s)),
      (Ft = ({ height: e, id: t, subtitle: n, title: r, width: i, ...a }) => ({
        ...a,
        WuF2iG84P:
          n ??
          a.WuF2iG84P ??
          `Set up the component by adding background and bouncer elements to the component properties.`,
        yeAnKbEUZ: r ?? a.yeAnKbEUZ ?? `Screen Saver`,
      })),
      (It = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Lt = K(
        f(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = m(),
            { activeLocale: a, setLocale: o } = V();
          U();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              yeAnKbEUZ: f,
              WuF2iG84P: p,
              ...g
            } = Ft(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: ee,
              isLoading: w,
              setGestureState: T,
              setVariant: D,
              variants: O,
            } = R({ defaultVariant: `XvqTw0Be9`, ref: r, variant: d, variantClassNames: jt }),
            k = It(e, O),
            A = B(At);
          return h(E, {
            id: u ?? i,
            children: h(Pt, {
              animate: O,
              initial: !1,
              children: h(Nt, {
                value: Mt,
                children: h(C.div, {
                  ...g,
                  ...S,
                  className: B(A, `framer-jjcw9a`, l, b),
                  'data-framer-name': `Default`,
                  layoutDependency: k,
                  layoutId: `XvqTw0Be9`,
                  ref: r,
                  style: { backgroundColor: `rgba(136, 85, 255, 0.1)`, ...c },
                  children: v(C.div, {
                    className: `framer-uh2i08`,
                    layoutDependency: k,
                    layoutId: `aM7oiNoFL`,
                    children: [
                      h(ne, {
                        className: `framer-flw0dh`,
                        'data-framer-name': `Logo`,
                        layout: `position`,
                        layoutDependency: k,
                        layoutId: `GthLmGmBt`,
                        opacity: 1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"><g><path d="M 0 0 L 28 0 L 28 28 L 0 28 Z" fill="transparent"></path><path d="M 21 7.113 C 21 7.041 21.029 6.971 21.079 6.921 L 27.534 0.465 C 27.613 0.388 27.73 0.365 27.831 0.407 C 27.933 0.449 28 0.548 28 0.658 L 28 13.888 C 28 13.96 27.971 14.028 27.921 14.079 L 21 21 Z M 7 21 L 7 7.658 C 7 7.548 6.933 7.449 6.831 7.407 C 6.73 7.365 6.613 7.388 6.534 7.465 L 0.079 13.921 C 0.028 13.972 0 14.041 0 14.113 L 0 27.728 C 0 27.877 0.122 28 0.273 28 L 13.888 28 C 13.96 28 14.028 27.971 14.079 27.921 L 21 21 Z" fill="rgb(153, 102, 255)"></path></g></svg>`,
                        svgContentId: 11036020200,
                        withExternalLayout: !0,
                      }),
                      v(C.div, {
                        className: `framer-k3ullq`,
                        layoutDependency: k,
                        layoutId: `E3DQBYSAf`,
                        children: [
                          h(G, {
                            __fromCanvasComponent: !0,
                            children: h(s, {
                              children: h(C.p, {
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
                            layoutDependency: k,
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
                          h(G, {
                            __fromCanvasComponent: !0,
                            children: h(s, {
                              children: h(C.p, {
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
                            layoutDependency: k,
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
      (Rt = Lt),
      (Lt.displayName = `Utils/Component Message`),
      (Lt.defaultProps = { height: 200, width: 400 }),
      P(Lt, {
        yeAnKbEUZ: {
          defaultValue: `Screen Saver`,
          displayTextArea: !1,
          title: `Title`,
          type: L.String,
        },
        WuF2iG84P: {
          defaultValue: `Set up the component by adding background and bouncer elements to the component properties.`,
          displayTextArea: !1,
          title: `Subtitle`,
          type: L.String,
        },
      }),
      j(
        Lt,
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
function Bt(e) {
  let t = _(null),
    r = S(0),
    a = S(0);
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
    ? h(Rt, {
        title: `3D Hover Component`,
        subtitle: `Connect a frame to the component.`,
        style: { ...e.style },
      })
    : h(`div`, {
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
var Vt = e(() => {
    (y(),
      r(),
      N(),
      D(),
      zt(),
      (Bt.displayName = `3D Hover`),
      (Bt.defaultProps = {
        tiltLimit: 15,
        effect: `evade`,
        scale: 1.1,
        perspective: 500,
        borderRadius: 0,
      }),
      P(Bt, {
        children: { type: L.ComponentInstance, title: `Frame` },
        effect: {
          type: L.Enum,
          title: `Effect`,
          options: [`gravitate`, `evade`],
          optionTitles: [`Gravitate`, `Evade`],
          defaultValue: `evade`,
          displaySegmentedControl: !0,
        },
        tiltLimit: {
          type: L.Number,
          title: `Tilt Limit`,
          min: 1,
          max: 100,
          step: 1,
          defaultValue: 15,
          displayStepper: !0,
        },
        scale: {
          type: L.Number,
          title: `Scale`,
          min: 1,
          max: 10,
          step: 0.1,
          defaultValue: 1.1,
          displayStepper: !0,
        },
        perspective: {
          type: L.Number,
          title: `Perspective`,
          min: 500,
          max: 5e3,
          step: 10,
          defaultValue: 500,
        },
        borderRadius: {
          type: L.Number,
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
  Ht = e(() => {
    it();
  });
function Ut({
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
  let m = rt(),
    g = t !== `Off`,
    _ = m || (r !== `Off` && !g),
    [y, x] = l(() => !0, !1),
    [S, C] = l(() => !0, !_),
    [ee, w] = d(!1),
    T = Qe(p),
    E = T !== `0px 0px 0px 0px` && T !== `0px`;
  if (e === ``) return h(qt, {});
  let D = Wt(e);
  if (D === void 0) return h(Jt, { message: `Invalid Youtube URL.` });
  let [O, k, A] = D,
    j = k.searchParams;
  if (A) for (let [e, t] of A) (j.set(e, t), e === `t` && j.set(`start`, t));
  (j.set(`iv_load_policy`, `3`),
    j.set(`rel`, `0`),
    j.set(`modestbranding`, `1`),
    j.set(`playsinline`, `1`),
    S ? (g || (_ && S)) && j.set(`autoplay`, `1`) : j.set(`autoplay`, `0`),
    g && n && j.set(`mute`, `1`),
    t === `Loop` && (j.set(`loop`, `1`), j.set(`playlist`, O)),
    i || j.set(`color`, `white`));
  let M = {
    title: f || `Youtube Video`,
    allow: `presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture`,
    src: k.href,
    frameBorder: `0`,
    onClick: a,
    onMouseEnter: o,
    onMouseLeave: s,
    onMouseDown: c,
    onMouseUp: u,
  };
  return v(`article`, {
    onPointerEnter: () => w(!0),
    onPointerLeave: () => w(!1),
    onPointerOver: x,
    onKeyDown: C,
    onClick: C,
    style: {
      ...$t,
      borderRadius: T,
      transform: E && (S || m) ? `translateZ(0.000001px)` : `unset`,
      cursor: `pointer`,
      overflow: `hidden`,
    },
    role: `presentation`,
    children: [
      y && h(`link`, { rel: `preconnect`, href: `https://www.youtube.com` }),
      y && h(`link`, { rel: `preconnect`, href: `https://www.google.com` }),
      _ &&
        v(b, {
          children: [
            h(`link`, { rel: `preconnect`, href: `https://i.ytimg.com` }),
            h(`img`, { decoding: `async`, src: Kt(O, r), style: { ...tn, objectFit: `cover` } }),
          ],
        }),
      m
        ? null
        : h(`iframe`, {
            loading: S ? void 0 : `lazy`,
            style: S ? tn : { ...tn, display: `none` },
            ...M,
          }),
      S ? null : h(Yt, { onClick: C, isHovered: ee, isRed: i }),
    ],
  });
}
function Wt(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return [e, Gt(e), null];
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
      return [e, Gt(e), n];
    }
    if (r === `embed`) return [e[1], t, n];
    if (r === `shorts` || r === `live`) {
      let t = e[1];
      return [t, Gt(t), n];
    }
  }
  if (t.hostname === `youtu.be`) {
    let e = t.pathname.slice(1);
    return [e, Gt(e), n];
  }
}
function Gt(e) {
  return new URL(`https://www.youtube.com/embed/${e}`);
}
function Kt(e, t) {
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
function qt() {
  return h(`div`, {
    style: { ...tt, overflow: `hidden` },
    children: h(`div`, {
      style: en,
      children: `To embed a Youtube video, add the URL to the properties\xA0panel.`,
    }),
  });
}
function Jt({ message: e }) {
  return h(`div`, {
    className: `framerInternalUI-errorPlaceholder`,
    style: { ...at, overflow: `hidden` },
    children: v(`div`, { style: en, children: [`Error: `, e] }),
  });
}
function Yt({ onClick: e, isHovered: t, isRed: n }) {
  return h(`button`, {
    onClick: e,
    'aria-label': `Play`,
    style: Qt,
    children: v(`svg`, {
      height: `100%`,
      version: `1.1`,
      viewBox: `0 0 68 48`,
      width: `100%`,
      children: [
        h(`path`, {
          d: `M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z`,
          fill: t ? (n ? `#f00` : `#000`) : `#212121`,
          fillOpacity: t && n ? 1 : 0.8,
          style: {
            transition: `fill .1s cubic-bezier(0.4, 0, 1, 1), fill-opacity .1s cubic-bezier(0.4, 0, 1, 1)`,
          },
        }),
        h(`path`, { d: `M 45,24 27,14 27,34`, fill: `#fff` }),
      ],
    }),
  });
}
var Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn = e(() => {
    (y(),
      r(),
      N(),
      Ht(),
      (function (e) {
        ((e.Normal = `Off`), (e.Auto = `On`), (e.Loop = `Loop`));
      })((Xt ||= {})),
      (function (e) {
        ((e.High = `High Quality`),
          (e.Medium = `Medium Quality`),
          (e.Low = `Low Quality`),
          (e.Off = `Off`));
      })((Zt ||= {})),
      (Ut.displayName = `YouTube`),
      P(Ut, {
        url: { type: L.String, title: `Video` },
        play: { type: L.Enum, title: `Autoplay`, options: Object.values(Xt) },
        shouldMute: {
          title: `Mute`,
          type: L.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hidden(e) {
            return e.play === `Off`;
          },
        },
        thumbnail: {
          title: `Thumbnail`,
          description: `Showing a thumbnail improves performance.`,
          type: L.Enum,
          options: Object.values(Zt),
          hidden(e) {
            return e.play !== `Off`;
          },
        },
        isRed: { title: `Color`, type: L.Boolean, enabledTitle: `Red`, disabledTitle: `White` },
        ...et,
        ...$e,
      }),
      (Ut.defaultProps = {
        url: `https://youtu.be/8AHPXm9Y6mI`,
        play: `Off`,
        shouldMute: !0,
        thumbnail: `Medium Quality`,
        isRed: !0,
      }),
      (Qt = {
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
      ($t = { position: `relative`, width: `100%`, height: `100%` }),
      (en = { textAlign: `center`, minWidth: 140 }),
      (tn = { position: `absolute`, top: 0, left: 0, height: `100%`, width: `100%` }));
  });
function rn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn = e(() => {
    (y(),
      N(),
      D(),
      r(),
      (an = xe(A(C.div))),
      (on = [`TYT7GU9zj`, `vH7Y42YRC`, `rFjN4yoEW`, `sP9zw4_Pq`, `sex0Kr1iV`]),
      (sn = `framer-erENg`),
      (cn = {
        rFjN4yoEW: `framer-v-12utkr9`,
        sex0Kr1iV: `framer-v-pmmvii`,
        sP9zw4_Pq: `framer-v-34fjgw`,
        TYT7GU9zj: `framer-v-gfv0f3`,
        vH7Y42YRC: `framer-v-k7b6mc`,
      }),
      (ln = {
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
      (un = {
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
      (dn = { bounce: 0, delay: 0, duration: 0.5, type: `spring` }),
      (fn = ({ value: e, children: t }) => {
        let n = c(w),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (pn = C.create(s)),
      (mn = { 1: `TYT7GU9zj`, 2: `vH7Y42YRC`, 3: `rFjN4yoEW`, 4: `sP9zw4_Pq`, 5: `sex0Kr1iV` }),
      (hn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: mn[r.variant] ?? r.variant ?? `TYT7GU9zj`,
      })),
      (gn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (_n = K(
        f(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = m(),
            { activeLocale: a, setLocale: o } = V(),
            s = U(),
            { style: c, className: l, layoutId: u, variant: d, ...f } = hn(e),
            {
              baseVariant: p,
              classNames: g,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: S,
              setGestureState: ee,
              setVariant: w,
              variants: T,
            } = R({
              cycleOrder: on,
              defaultVariant: `TYT7GU9zj`,
              ref: r,
              variant: d,
              variantClassNames: cn,
            }),
            D = gn(e, T),
            k = B(sn),
            A = () => p !== `sex0Kr1iV`,
            j = () => ![`vH7Y42YRC`, `sP9zw4_Pq`, `sex0Kr1iV`].includes(p),
            M = () => !![`rFjN4yoEW`, `sP9zw4_Pq`, `sex0Kr1iV`].includes(p);
          return h(E, {
            id: u ?? i,
            children: h(pn, {
              animate: T,
              initial: !1,
              children: h(fn, {
                value: dn,
                children: v(an, {
                  ...f,
                  ...b,
                  __framer__presenceAnimate: ln,
                  __framer__presenceInitial: un,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: B(k, `framer-gfv0f3`, l, g),
                  'data-framer-appear-id': `gfv0f3`,
                  'data-framer-name': `1`,
                  layoutDependency: D,
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
                  ...rn(
                    {
                      rFjN4yoEW: { 'data-framer-name': `3` },
                      sex0Kr1iV: { 'data-framer-name': `5` },
                      sP9zw4_Pq: { 'data-framer-name': `4` },
                      vH7Y42YRC: { 'data-framer-name': `2` },
                    },
                    p,
                    x
                  ),
                  children: [
                    A() &&
                      h(C.div, {
                        className: `framer-1n6hb5q`,
                        'data-framer-name': `SPACER`,
                        layoutDependency: D,
                        layoutId: `HdgiL5gFe`,
                      }),
                    A() &&
                      h(C.div, {
                        className: `framer-2ad5tn`,
                        'data-framer-name': `SPACER`,
                        layoutDependency: D,
                        layoutId: `HxzD6QCqc`,
                      }),
                    j() &&
                      h(C.div, {
                        className: `framer-14q95ci`,
                        'data-framer-name': `SPACER`,
                        layoutDependency: D,
                        layoutId: `hVnlEoJVr`,
                      }),
                    j() &&
                      h(C.div, {
                        className: `framer-d2f4rg`,
                        'data-framer-name': `SPACER`,
                        layoutDependency: D,
                        layoutId: `KrhDzZCLt`,
                      }),
                    h(W, {
                      background: {
                        alt: `Woman Side Pose`,
                        fit: `fill`,
                        loading: O(
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
                        pixelHeight: 1280,
                        pixelWidth: 896,
                        sizes: s?.width || `100vw`,
                        src: `https://framerusercontent.com/images/er1aOMKJCJuCxihFmaOaonRR58.png`,
                        srcSet: `https://framerusercontent.com/images/er1aOMKJCJuCxihFmaOaonRR58.png?scale-down-to=1024 716w,https://framerusercontent.com/images/er1aOMKJCJuCxihFmaOaonRR58.png 896w`,
                      },
                      className: `framer-gg9h8h`,
                      'data-framer-name': `Image 1`,
                      layoutDependency: D,
                      layoutId: `GOH4p5abo`,
                      ...rn(
                        {
                          rFjN4yoEW: {
                            background: {
                              alt: `Woman Side Pose`,
                              fit: `fill`,
                              loading: O(
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
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/er1aOMKJCJuCxihFmaOaonRR58.png`,
                              srcSet: `https://framerusercontent.com/images/er1aOMKJCJuCxihFmaOaonRR58.png?scale-down-to=1024 716w,https://framerusercontent.com/images/er1aOMKJCJuCxihFmaOaonRR58.png 896w`,
                            },
                          },
                          sex0Kr1iV: {
                            background: {
                              alt: `Woman Side Pose`,
                              fit: `fill`,
                              loading: O(
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
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/er1aOMKJCJuCxihFmaOaonRR58.png`,
                              srcSet: `https://framerusercontent.com/images/er1aOMKJCJuCxihFmaOaonRR58.png?scale-down-to=1024 716w,https://framerusercontent.com/images/er1aOMKJCJuCxihFmaOaonRR58.png 896w`,
                            },
                          },
                          sP9zw4_Pq: {
                            background: {
                              alt: `Woman Side Pose`,
                              fit: `fill`,
                              loading: O(
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
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/er1aOMKJCJuCxihFmaOaonRR58.png`,
                              srcSet: `https://framerusercontent.com/images/er1aOMKJCJuCxihFmaOaonRR58.png?scale-down-to=1024 716w,https://framerusercontent.com/images/er1aOMKJCJuCxihFmaOaonRR58.png 896w`,
                            },
                          },
                          vH7Y42YRC: {
                            background: {
                              alt: `Woman Side Pose`,
                              fit: `fill`,
                              loading: O(
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
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/er1aOMKJCJuCxihFmaOaonRR58.png`,
                              srcSet: `https://framerusercontent.com/images/er1aOMKJCJuCxihFmaOaonRR58.png?scale-down-to=1024 716w,https://framerusercontent.com/images/er1aOMKJCJuCxihFmaOaonRR58.png 896w`,
                            },
                          },
                        },
                        p,
                        x
                      ),
                    }),
                    h(W, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: O(
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
                        src: `https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png`,
                        srcSet: `https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png?scale-down-to=1024 768w,https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png 864w`,
                      },
                      className: `framer-a3d2tv`,
                      'data-framer-name': `Image 2`,
                      layoutDependency: D,
                      layoutId: `e2TUE1DdW`,
                      ...rn(
                        {
                          rFjN4yoEW: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O(
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
                              src: `https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png`,
                              srcSet: `https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png?scale-down-to=1024 768w,https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png 864w`,
                            },
                          },
                          sex0Kr1iV: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O(
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
                              src: `https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png`,
                              srcSet: `https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png?scale-down-to=1024 768w,https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png 864w`,
                            },
                          },
                          sP9zw4_Pq: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O(
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
                              src: `https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png`,
                              srcSet: `https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png?scale-down-to=1024 768w,https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png 864w`,
                            },
                          },
                          vH7Y42YRC: {
                            background: {
                              alt: `Woman B&W`,
                              fit: `fill`,
                              loading: O(
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
                              pixelHeight: 1152,
                              pixelWidth: 864,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png`,
                              srcSet: `https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png?scale-down-to=1024 768w,https://framerusercontent.com/images/Z4oPcqnRC4FT9BLlaHxEazAtQ.png 864w`,
                            },
                          },
                        },
                        p,
                        x
                      ),
                    }),
                    h(W, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: O(
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
                        src: `https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png`,
                        srcSet: `https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png?scale-down-to=1024 716w,https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png 896w`,
                      },
                      className: `framer-1ar1jwg`,
                      'data-framer-name': `Image 3`,
                      layoutDependency: D,
                      layoutId: `JYgX8UHYU`,
                      ...rn(
                        {
                          rFjN4yoEW: {
                            background: {
                              alt: `African`,
                              fit: `fill`,
                              loading: O(
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
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png`,
                              srcSet: `https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png?scale-down-to=1024 716w,https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png 896w`,
                            },
                          },
                          sex0Kr1iV: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O(
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
                              src: `https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png`,
                              srcSet: `https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png?scale-down-to=1024 716w,https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png 896w`,
                            },
                          },
                          sP9zw4_Pq: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O(
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
                              src: `https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png`,
                              srcSet: `https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png?scale-down-to=1024 716w,https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png 896w`,
                            },
                          },
                          vH7Y42YRC: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O(
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
                              src: `https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png`,
                              srcSet: `https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png?scale-down-to=1024 716w,https://framerusercontent.com/images/METjsCzy2138YklB2x1F6Y6qnnA.png 896w`,
                            },
                          },
                        },
                        p,
                        x
                      ),
                    }),
                    h(W, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: O(
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
                        src: `https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png`,
                        srcSet: `https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png?scale-down-to=1024 716w,https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png 896w`,
                      },
                      className: `framer-ev0kc9`,
                      'data-framer-name': `Image 4`,
                      layoutDependency: D,
                      layoutId: `DzXsHu2zj`,
                      ...rn(
                        {
                          rFjN4yoEW: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O(
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
                              src: `https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png`,
                              srcSet: `https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png?scale-down-to=1024 716w,https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png 896w`,
                            },
                          },
                          sex0Kr1iV: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O(
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
                              src: `https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png`,
                              srcSet: `https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png?scale-down-to=1024 716w,https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png 896w`,
                            },
                          },
                          sP9zw4_Pq: {
                            background: {
                              alt: `Man Glare`,
                              fit: `fill`,
                              loading: O(
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
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png`,
                              srcSet: `https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png?scale-down-to=1024 716w,https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png 896w`,
                            },
                          },
                          vH7Y42YRC: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O(
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
                              src: `https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png`,
                              srcSet: `https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png?scale-down-to=1024 716w,https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png 896w`,
                            },
                          },
                        },
                        p,
                        x
                      ),
                    }),
                    h(W, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: O(
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
                        src: `https://framerusercontent.com/images/tqo25UoLX3yzZX9eWz4sP3BzU.webp`,
                        srcSet: `https://framerusercontent.com/images/tqo25UoLX3yzZX9eWz4sP3BzU.webp 768w`,
                      },
                      className: `framer-1n7i0xe`,
                      'data-framer-name': `Image 5`,
                      layoutDependency: D,
                      layoutId: `d7U4wAbOr`,
                      ...rn(
                        {
                          rFjN4yoEW: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O(
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
                              src: `https://framerusercontent.com/images/tqo25UoLX3yzZX9eWz4sP3BzU.webp`,
                              srcSet: `https://framerusercontent.com/images/tqo25UoLX3yzZX9eWz4sP3BzU.webp 768w`,
                            },
                          },
                          sex0Kr1iV: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O(
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
                              pixelHeight: 960,
                              pixelWidth: 768,
                              sizes: s?.width || `100vw`,
                              src: `https://framerusercontent.com/images/tqo25UoLX3yzZX9eWz4sP3BzU.webp`,
                              srcSet: `https://framerusercontent.com/images/tqo25UoLX3yzZX9eWz4sP3BzU.webp 768w`,
                            },
                          },
                          sP9zw4_Pq: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O(
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
                              src: `https://framerusercontent.com/images/tqo25UoLX3yzZX9eWz4sP3BzU.webp`,
                              srcSet: `https://framerusercontent.com/images/tqo25UoLX3yzZX9eWz4sP3BzU.webp 768w`,
                            },
                          },
                          vH7Y42YRC: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O(
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
                              src: `https://framerusercontent.com/images/tqo25UoLX3yzZX9eWz4sP3BzU.webp`,
                              srcSet: `https://framerusercontent.com/images/tqo25UoLX3yzZX9eWz4sP3BzU.webp 768w`,
                            },
                          },
                        },
                        p,
                        x
                      ),
                    }),
                    M() &&
                      h(C.div, {
                        className: `framer-e0h5wc`,
                        'data-framer-name': `SPACER`,
                        layoutDependency: D,
                        layoutId: `rkkVMNkkm`,
                      }),
                    M() &&
                      h(C.div, {
                        className: `framer-q9iz8k`,
                        'data-framer-name': `SPACER`,
                        layoutDependency: D,
                        layoutId: `DwXsM0YCo`,
                      }),
                    M() &&
                      h(C.div, {
                        className: `framer-1thje2f`,
                        'data-framer-name': `SPACER`,
                        layoutDependency: D,
                        layoutId: `E4_azW1dt`,
                      }),
                    M() &&
                      h(C.div, {
                        className: `framer-usoxe1`,
                        'data-framer-name': `SPACER`,
                        layoutDependency: D,
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
          `.framer-erENg.framer-mzrdik, .framer-erENg .framer-mzrdik { display: block; }`,
          `.framer-erENg.framer-gfv0f3 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 230px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 160px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-erENg .framer-1n6hb5q, .framer-erENg .framer-2ad5tn, .framer-erENg .framer-14q95ci, .framer-erENg .framer-d2f4rg, .framer-erENg .framer-e0h5wc, .framer-erENg .framer-q9iz8k, .framer-erENg .framer-1thje2f, .framer-erENg .framer-usoxe1 { flex: none; height: 100%; overflow: hidden; pointer-events: none; position: relative; width: 100%; }`,
          `.framer-erENg .framer-gg9h8h, .framer-erENg .framer-a3d2tv, .framer-erENg .framer-1ar1jwg, .framer-erENg .framer-ev0kc9, .framer-erENg .framer-1n7i0xe { flex: none; height: 100%; overflow: hidden; position: relative; width: 100%; }`,
        ],
        `framer-erENg`
      )),
      (vn = _n),
      (_n.displayName = `Image Cursor`),
      (_n.defaultProps = { height: 230, width: 160 }),
      P(_n, {
        variant: {
          options: [`TYT7GU9zj`, `vH7Y42YRC`, `rFjN4yoEW`, `sP9zw4_Pq`, `sex0Kr1iV`],
          optionTitles: [`1`, `2`, `3`, `4`, `5`],
          title: `Variant`,
          type: L.Enum,
        },
      }),
      j(_n, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  bn,
  xn,
  Sn,
  Cn = e(() => {
    (N(),
      te.loadFonts([`FR;InterDisplay-Medium`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
      (bn = [
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
      (xn = [
        `.framer-A61Fx .framer-styles-preset-d3a9yv:not(.rich-text-wrapper), .framer-A61Fx .framer-styles-preset-d3a9yv.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0px; --framer-line-height: 21.2px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Sn = `framer-A61Fx`));
  }),
  wn,
  Tn,
  En,
  Dn = e(() => {
    (N(),
      te.loadFonts([
        `FR;InterDisplay-Medium`,
        `FR;InterDisplay-Bold`,
        `FR;InterDisplay-BoldItalic`,
        `FR;InterDisplay-MediumItalic`,
      ]),
      (wn = [
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
      (Tn = [
        `.framer-jmocc .framer-styles-preset-mx6dc5:not(.rich-text-wrapper), .framer-jmocc .framer-styles-preset-mx6dc5.rich-text-wrapper h2 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 79px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -2.1px; --framer-line-height: 78.6px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-jmocc .framer-styles-preset-mx6dc5:not(.rich-text-wrapper), .framer-jmocc .framer-styles-preset-mx6dc5.rich-text-wrapper h2 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 63px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -2.1px; --framer-line-height: 62.6px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-jmocc .framer-styles-preset-mx6dc5:not(.rich-text-wrapper), .framer-jmocc .framer-styles-preset-mx6dc5.rich-text-wrapper h2 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 51px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -2.1px; --framer-line-height: 50.6px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (En = `framer-jmocc`));
  });
function On(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn = e(() => {
    (y(),
      N(),
      D(),
      r(),
      Oe(),
      Cn(),
      (kn = F(Ae)),
      (An = [`sItibB2AA`, `wQQdJzbP3`]),
      (jn = `framer-Xts66`),
      (Mn = { sItibB2AA: `framer-v-1acbbm2`, wQQdJzbP3: `framer-v-rvmgre` }),
      (Nn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Pn = ({ value: e, children: t }) => {
        let n = c(w),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (Fn = C.create(s)),
      (In = { Primary: `sItibB2AA`, Secondary: `wQQdJzbP3` }),
      (Ln = ({ height: e, id: t, text: n, width: r, ...i }) => ({
        ...i,
        variant: In[i.variant] ?? i.variant ?? `sItibB2AA`,
        yz3P4R8Ig: n ?? i.yz3P4R8Ig ?? `Framer CMS-powered sections`,
      })),
      (Rn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (zn = K(
        f(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = m(),
            { activeLocale: a, setLocale: o } = V();
          U();
          let { style: c, className: l, layoutId: u, variant: d, yz3P4R8Ig: f, ...p } = Ln(e),
            {
              baseVariant: g,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: ee,
              setGestureState: w,
              setVariant: T,
              variants: D,
            } = R({
              cycleOrder: An,
              defaultVariant: `sItibB2AA`,
              ref: r,
              variant: d,
              variantClassNames: Mn,
            }),
            O = Rn(e, D),
            k = B(jn, Sn);
          return h(E, {
            id: u ?? i,
            children: h(Fn, {
              animate: D,
              initial: !1,
              children: h(Pn, {
                value: Nn,
                children: v(C.div, {
                  ...p,
                  ...x,
                  className: B(k, `framer-1acbbm2`, l, y),
                  'data-framer-name': `Primary`,
                  layoutDependency: O,
                  layoutId: `sItibB2AA`,
                  ref: r,
                  style: { opacity: 1, ...c },
                  variants: { wQQdJzbP3: { opacity: 0.5 } },
                  ...On({ wQQdJzbP3: { 'data-framer-name': `Secondary` } }, g, S),
                  children: [
                    h(H, {
                      children: h(M, {
                        className: `framer-whum1l-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: O,
                        layoutId: `ExrjkIv9H-container`,
                        nodeId: `ExrjkIv9H`,
                        rendersWithMotion: !0,
                        scopeId: `YT1hLp8Qh`,
                        children: h(Ae, {
                          color: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                          height: `100%`,
                          iconSearch: `House`,
                          iconSelection: `Check`,
                          id: `ExrjkIv9H`,
                          layoutId: `ExrjkIv9H`,
                          mirrored: !1,
                          selectByList: !0,
                          style: { height: `100%`, width: `100%` },
                          weight: `bold`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    h(G, {
                      __fromCanvasComponent: !0,
                      children: h(s, {
                        children: h(C.p, {
                          className: `framer-styles-preset-d3a9yv`,
                          'data-styles-preset': `gVvtfPznu`,
                          style: {
                            '--framer-text-color': `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                          },
                          children: `12 on demand video lessons`,
                        }),
                      }),
                      className: `framer-vclukx`,
                      'data-framer-name': `Text`,
                      fonts: [`Inter`],
                      layoutDependency: O,
                      layoutId: `B73BtS0sL`,
                      style: {
                        '--extracted-r6o4lv': `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                        '--framer-paragraph-spacing': `0px`,
                      },
                      text: f,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Xts66.framer-1xq1psr, .framer-Xts66 .framer-1xq1psr { display: block; }`,
          `.framer-Xts66.framer-1acbbm2 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 408px; }`,
          `.framer-Xts66 .framer-whum1l-container { flex: none; height: 16px; position: relative; width: 16px; }`,
          `.framer-Xts66 .framer-vclukx { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          ...xn,
        ],
        `framer-Xts66`
      )),
      (Bn = zn),
      (zn.displayName = `Point`),
      (zn.defaultProps = { height: 21, width: 408 }),
      P(zn, {
        variant: {
          options: [`sItibB2AA`, `wQQdJzbP3`],
          optionTitles: [`Primary`, `Secondary`],
          title: `Variant`,
          type: L.Enum,
        },
        yz3P4R8Ig: {
          defaultValue: `Framer CMS-powered sections`,
          displayTextArea: !0,
          title: `Text`,
          type: L.String,
        },
      }),
      j(
        zn,
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
          ...kn,
          ...J(bn),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Hn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Un,
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
    (y(),
      N(),
      D(),
      r(),
      Ne(),
      Cn(),
      Dn(),
      Vn(),
      (Un = F(Bn)),
      (Wn = [`O9OWA4jlv`, `ZaXfd313A`, `x7wfHPdzB`]),
      (Gn = `framer-9yKMC`),
      (Kn = {
        O9OWA4jlv: `framer-v-rup2j0`,
        x7wfHPdzB: `framer-v-9w27z1`,
        ZaXfd313A: `framer-v-1ytxxyh`,
      }),
      (qn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Jn = ({ value: e, children: t }) => {
        let n = c(w),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (Yn = C.create(s)),
      (Xn = { Primary: `O9OWA4jlv`, Secondary: `ZaXfd313A`, Tertiary: `x7wfHPdzB` }),
      (Zn = ({
        bodyText: e,
        duration: t,
        height: n,
        id: r,
        point1: i,
        point2: a,
        point3: o,
        point4: s,
        point5: c,
        point6: l,
        point7: u,
        point8: d,
        pricing: f,
        title: p,
        width: m,
        ...h
      }) => ({
        ...h,
        dja90qj9m: l ?? h.dja90qj9m ?? `Point 6`,
        fOX92qcMT: t ?? h.fOX92qcMT ?? `/Month`,
        fpya69uj1: u ?? h.fpya69uj1 ?? `Point 7`,
        Iux3h95Y2: s ?? h.Iux3h95Y2 ?? `Point 4`,
        jKPIbAit0: d ?? h.jKPIbAit0 ?? `Point 8`,
        LVy4SICzK: i ?? h.LVy4SICzK ?? `Point 1`,
        m6o5YyZhi: o ?? h.m6o5YyZhi ?? `Point 3`,
        rojPY6fRa: f ?? h.rojPY6fRa ?? `$99`,
        thPyOmv2A: c ?? h.thPyOmv2A ?? `Point 5`,
        uV71JgkNW:
          e ??
          h.uV71JgkNW ??
          `Perfect for small launches and personal sites that need a fast online presence.`,
        variant: Xn[h.variant] ?? h.variant ?? `O9OWA4jlv`,
        Yj8NwxqdY: a ?? h.Yj8NwxqdY ?? `Point 2`,
        YyGjbNizN: p ?? h.YyGjbNizN ?? `Starter Plan`,
      })),
      (Qn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($n = K(
        f(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = m(),
            { activeLocale: a, setLocale: o } = V(),
            c = U(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              rojPY6fRa: p,
              fOX92qcMT: g,
              YyGjbNizN: y,
              uV71JgkNW: b,
              LVy4SICzK: x,
              Yj8NwxqdY: S,
              m6o5YyZhi: ee,
              Iux3h95Y2: w,
              thPyOmv2A: T,
              dja90qj9m: D,
              fpya69uj1: O,
              jKPIbAit0: k,
              ...A
            } = Zn(e),
            {
              baseVariant: j,
              classNames: N,
              clearLoadingGesture: te,
              gestureHandlers: P,
              gestureVariant: F,
              isLoading: I,
              setGestureState: ne,
              setVariant: re,
              variants: ie,
            } = R({
              cycleOrder: Wn,
              defaultVariant: `O9OWA4jlv`,
              ref: r,
              variant: f,
              variantClassNames: Kn,
            }),
            L = Qn(e, ie),
            ae = B(Gn, En, Sn, Le);
          return h(E, {
            id: d ?? i,
            children: h(Yn, {
              animate: ie,
              initial: !1,
              children: h(Jn, {
                value: qn,
                children: v(C.div, {
                  ...A,
                  ...P,
                  className: B(ae, `framer-rup2j0`, u, N),
                  'data-border': !0,
                  'data-framer-name': `Primary`,
                  layoutDependency: L,
                  layoutId: `O9OWA4jlv`,
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
                    ...l,
                  },
                  ...Hn(
                    {
                      x7wfHPdzB: { 'data-framer-name': `Tertiary` },
                      ZaXfd313A: { 'data-framer-name': `Secondary` },
                    },
                    j,
                    F
                  ),
                  children: [
                    v(C.div, {
                      className: `framer-u7exyw`,
                      'data-framer-name': `Top`,
                      layoutDependency: L,
                      layoutId: `GCcf_uYnw`,
                      children: [
                        v(C.div, {
                          className: `framer-1cb19ft`,
                          'data-framer-name': `Pricing`,
                          layoutDependency: L,
                          layoutId: `pkTZPMh4b`,
                          children: [
                            h(C.div, {
                              className: `framer-8pfqrq`,
                              'data-framer-name': `Price`,
                              layoutDependency: L,
                              layoutId: `rENxIjO0y`,
                              children: h(G, {
                                __fromCanvasComponent: !0,
                                children: h(s, {
                                  children: h(C.h2, {
                                    className: `framer-styles-preset-mx6dc5`,
                                    'data-styles-preset': `qkGSnf0mU`,
                                    children: `$99`,
                                  }),
                                }),
                                className: `framer-1pjjmu4`,
                                'data-framer-name': `Text`,
                                fonts: [`Inter`],
                                layoutDependency: L,
                                layoutId: `CvIvjjRCa`,
                                style: { '--framer-paragraph-spacing': `0px` },
                                text: p,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            h(C.div, {
                              className: `framer-1pivty2`,
                              'data-framer-name': `Duration`,
                              layoutDependency: L,
                              layoutId: `h3QMi1KSV`,
                              children: h(G, {
                                __fromCanvasComponent: !0,
                                children: h(s, {
                                  children: h(C.p, {
                                    className: `framer-styles-preset-d3a9yv`,
                                    'data-styles-preset': `gVvtfPznu`,
                                    style: {
                                      '--framer-text-color': `var(--extracted-r6o4lv, var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153)))`,
                                    },
                                    children: `/Month`,
                                  }),
                                }),
                                className: `framer-x3rbhe`,
                                'data-framer-name': `Text`,
                                fonts: [`Inter`],
                                layoutDependency: L,
                                layoutId: `IrHFeUS_r`,
                                style: {
                                  '--extracted-r6o4lv': `var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153))`,
                                  '--framer-paragraph-spacing': `0px`,
                                },
                                text: g,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        v(C.div, {
                          className: `framer-3ipz0y`,
                          'data-framer-name': `Content`,
                          layoutDependency: L,
                          layoutId: `d5sRakjTE`,
                          children: [
                            h(G, {
                              __fromCanvasComponent: !0,
                              children: h(s, {
                                children: h(C.p, {
                                  className: `framer-styles-preset-14w8e6o`,
                                  'data-styles-preset': `FsS03h6Vk`,
                                  children: `Monthly Plan`,
                                }),
                              }),
                              className: `framer-7yate6`,
                              'data-framer-name': `Title`,
                              fonts: [`Inter`],
                              layoutDependency: L,
                              layoutId: `GbWtPKMK9`,
                              style: { '--framer-paragraph-spacing': `0px` },
                              text: y,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            h(G, {
                              __fromCanvasComponent: !0,
                              children: h(s, {
                                children: h(C.p, {
                                  className: `framer-styles-preset-d3a9yv`,
                                  'data-styles-preset': `gVvtfPznu`,
                                  style: {
                                    '--framer-text-color': `var(--extracted-r6o4lv, var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153)))`,
                                  },
                                  children: `Pay in 5 instalments and get access right away when you join.`,
                                }),
                              }),
                              className: `framer-kxv1ci`,
                              'data-framer-name': `Body Text`,
                              fonts: [`Inter`],
                              layoutDependency: L,
                              layoutId: `Tuk29rtiv`,
                              style: {
                                '--extracted-r6o4lv': `var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153))`,
                                '--framer-paragraph-spacing': `0px`,
                              },
                              text: b,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    h(C.div, {
                      className: `framer-17xlol5`,
                      'data-framer-name': `Seperator`,
                      layoutDependency: L,
                      layoutId: `msP7vYBKF`,
                      children: h(C.div, {
                        className: `framer-bmxgyw`,
                        'data-framer-name': `Line`,
                        layoutDependency: L,
                        layoutId: `N88Zr1_Ro`,
                        style: {
                          backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`,
                        },
                      }),
                    }),
                    h(C.div, {
                      className: `framer-ubq6hy`,
                      'data-framer-name': `Bottom`,
                      layoutDependency: L,
                      layoutId: `kSh_XDAIO`,
                      children: v(C.div, {
                        className: `framer-124pmsp`,
                        'data-framer-name': `Points`,
                        layoutDependency: L,
                        layoutId: `SL_VS28_P`,
                        children: [
                          h(H, {
                            height: 21,
                            width: `calc(${c?.width || `100vw`} - 40px)`,
                            y: (c?.y || 0) + 0 + 443 + 30 + 0 + 0 + 0,
                            children: h(M, {
                              className: `framer-yrror8-container`,
                              layoutDependency: L,
                              layoutId: `h3CwT1cnB-container`,
                              nodeId: `h3CwT1cnB`,
                              rendersWithMotion: !0,
                              scopeId: `I0Iy_7PWm`,
                              children: h(Bn, {
                                height: `100%`,
                                id: `h3CwT1cnB`,
                                layoutId: `h3CwT1cnB`,
                                style: { width: `100%` },
                                variant: `sItibB2AA`,
                                width: `100%`,
                                yz3P4R8Ig: x,
                              }),
                            }),
                          }),
                          h(H, {
                            height: 21,
                            width: `calc(${c?.width || `100vw`} - 40px)`,
                            y: (c?.y || 0) + 0 + 443 + 30 + 0 + 0 + 33,
                            children: h(M, {
                              className: `framer-2xqhk0-container`,
                              layoutDependency: L,
                              layoutId: `ZtKD7GzlZ-container`,
                              nodeId: `ZtKD7GzlZ`,
                              rendersWithMotion: !0,
                              scopeId: `I0Iy_7PWm`,
                              children: h(Bn, {
                                height: `100%`,
                                id: `ZtKD7GzlZ`,
                                layoutId: `ZtKD7GzlZ`,
                                style: { width: `100%` },
                                variant: `sItibB2AA`,
                                width: `100%`,
                                yz3P4R8Ig: S,
                              }),
                            }),
                          }),
                          h(H, {
                            height: 21,
                            width: `calc(${c?.width || `100vw`} - 40px)`,
                            y: (c?.y || 0) + 0 + 443 + 30 + 0 + 0 + 66,
                            children: h(M, {
                              className: `framer-bqsiq4-container`,
                              layoutDependency: L,
                              layoutId: `qvML7Aj9f-container`,
                              nodeId: `qvML7Aj9f`,
                              rendersWithMotion: !0,
                              scopeId: `I0Iy_7PWm`,
                              children: h(Bn, {
                                height: `100%`,
                                id: `qvML7Aj9f`,
                                layoutId: `qvML7Aj9f`,
                                style: { width: `100%` },
                                variant: `sItibB2AA`,
                                width: `100%`,
                                yz3P4R8Ig: ee,
                              }),
                            }),
                          }),
                          h(H, {
                            height: 21,
                            width: `calc(${c?.width || `100vw`} - 40px)`,
                            y: (c?.y || 0) + 0 + 443 + 30 + 0 + 0 + 99,
                            children: h(M, {
                              className: `framer-1q0oqce-container`,
                              layoutDependency: L,
                              layoutId: `y2mLnn55d-container`,
                              nodeId: `y2mLnn55d`,
                              rendersWithMotion: !0,
                              scopeId: `I0Iy_7PWm`,
                              children: h(Bn, {
                                height: `100%`,
                                id: `y2mLnn55d`,
                                layoutId: `y2mLnn55d`,
                                style: { width: `100%` },
                                variant: `wQQdJzbP3`,
                                width: `100%`,
                                yz3P4R8Ig: w,
                                ...Hn(
                                  {
                                    x7wfHPdzB: { variant: `sItibB2AA` },
                                    ZaXfd313A: { variant: `sItibB2AA` },
                                  },
                                  j,
                                  F
                                ),
                              }),
                            }),
                          }),
                          h(H, {
                            height: 21,
                            width: `calc(${c?.width || `100vw`} - 40px)`,
                            y: (c?.y || 0) + 0 + 443 + 30 + 0 + 0 + 132,
                            children: h(M, {
                              className: `framer-s6th71-container`,
                              layoutDependency: L,
                              layoutId: `qiHfKOWKs-container`,
                              nodeId: `qiHfKOWKs`,
                              rendersWithMotion: !0,
                              scopeId: `I0Iy_7PWm`,
                              children: h(Bn, {
                                height: `100%`,
                                id: `qiHfKOWKs`,
                                layoutId: `qiHfKOWKs`,
                                style: { width: `100%` },
                                variant: `wQQdJzbP3`,
                                width: `100%`,
                                yz3P4R8Ig: T,
                                ...Hn(
                                  {
                                    x7wfHPdzB: { variant: `sItibB2AA` },
                                    ZaXfd313A: { variant: `sItibB2AA` },
                                  },
                                  j,
                                  F
                                ),
                              }),
                            }),
                          }),
                          h(H, {
                            height: 21,
                            width: `calc(${c?.width || `100vw`} - 40px)`,
                            y: (c?.y || 0) + 0 + 443 + 30 + 0 + 0 + 165,
                            children: h(M, {
                              className: `framer-1ppi9rm-container`,
                              layoutDependency: L,
                              layoutId: `IzUuSK6FS-container`,
                              nodeId: `IzUuSK6FS`,
                              rendersWithMotion: !0,
                              scopeId: `I0Iy_7PWm`,
                              children: h(Bn, {
                                height: `100%`,
                                id: `IzUuSK6FS`,
                                layoutId: `IzUuSK6FS`,
                                style: { width: `100%` },
                                variant: `wQQdJzbP3`,
                                width: `100%`,
                                yz3P4R8Ig: D,
                                ...Hn({ x7wfHPdzB: { variant: `sItibB2AA` } }, j, F),
                              }),
                            }),
                          }),
                          h(H, {
                            height: 21,
                            width: `calc(${c?.width || `100vw`} - 40px)`,
                            y: (c?.y || 0) + 0 + 443 + 30 + 0 + 0 + 198,
                            children: h(M, {
                              className: `framer-9u7yxn-container`,
                              layoutDependency: L,
                              layoutId: `tyFhqDiBr-container`,
                              nodeId: `tyFhqDiBr`,
                              rendersWithMotion: !0,
                              scopeId: `I0Iy_7PWm`,
                              children: h(Bn, {
                                height: `100%`,
                                id: `tyFhqDiBr`,
                                layoutId: `tyFhqDiBr`,
                                style: { width: `100%` },
                                variant: `wQQdJzbP3`,
                                width: `100%`,
                                yz3P4R8Ig: O,
                                ...Hn({ x7wfHPdzB: { variant: `sItibB2AA` } }, j, F),
                              }),
                            }),
                          }),
                          h(H, {
                            height: 21,
                            width: `calc(${c?.width || `100vw`} - 40px)`,
                            y: (c?.y || 0) + 0 + 443 + 30 + 0 + 0 + 231,
                            children: h(M, {
                              className: `framer-qsubhq-container`,
                              layoutDependency: L,
                              layoutId: `ojzD9S1zG-container`,
                              nodeId: `ojzD9S1zG`,
                              rendersWithMotion: !0,
                              scopeId: `I0Iy_7PWm`,
                              children: h(Bn, {
                                height: `100%`,
                                id: `ojzD9S1zG`,
                                layoutId: `ojzD9S1zG`,
                                style: { width: `100%` },
                                variant: `wQQdJzbP3`,
                                width: `100%`,
                                yz3P4R8Ig: k,
                                ...Hn({ x7wfHPdzB: { variant: `sItibB2AA` } }, j, F),
                              }),
                            }),
                          }),
                        ],
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
          `.framer-9yKMC.framer-1myktjr, .framer-9yKMC .framer-1myktjr { display: block; }`,
          `.framer-9yKMC.framer-rup2j0 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 448px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-9yKMC .framer-u7exyw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 30px 20px 30px 20px; position: relative; width: 100%; }`,
          `.framer-9yKMC .framer-1cb19ft { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-9yKMC .framer-8pfqrq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-9yKMC .framer-1pjjmu4 { flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: auto; }`,
          `.framer-9yKMC .framer-1pivty2 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 4px 0px; position: relative; width: 1px; }`,
          `.framer-9yKMC .framer-x3rbhe, .framer-9yKMC .framer-7yate6, .framer-9yKMC .framer-kxv1ci { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-9yKMC .framer-3ipz0y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-9yKMC .framer-17xlol5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 1px 0px 1px; position: relative; width: 100%; }`,
          `.framer-9yKMC .framer-bmxgyw { flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 1px; }`,
          `.framer-9yKMC .framer-ubq6hy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 30px 20px 30px 20px; position: relative; width: 100%; }`,
          `.framer-9yKMC .framer-124pmsp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-9yKMC .framer-yrror8-container, .framer-9yKMC .framer-2xqhk0-container, .framer-9yKMC .framer-bqsiq4-container, .framer-9yKMC .framer-1q0oqce-container, .framer-9yKMC .framer-s6th71-container, .framer-9yKMC .framer-1ppi9rm-container, .framer-9yKMC .framer-9u7yxn-container, .framer-9yKMC .framer-qsubhq-container { flex: none; height: auto; position: relative; width: 100%; }`,
          ...Tn,
          ...xn,
          ...Pe,
          `.framer-9yKMC[data-border="true"]::after, .framer-9yKMC [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-9yKMC`
      )),
      (er = $n),
      ($n.displayName = `Pricing Card`),
      ($n.defaultProps = { height: 561, width: 448 }),
      P($n, {
        variant: {
          options: [`O9OWA4jlv`, `ZaXfd313A`, `x7wfHPdzB`],
          optionTitles: [`Primary`, `Secondary`, `Tertiary`],
          title: `Variant`,
          type: L.Enum,
        },
        rojPY6fRa: { defaultValue: `$99`, displayTextArea: !1, title: `Pricing`, type: L.String },
        fOX92qcMT: {
          defaultValue: `/Month`,
          displayTextArea: !1,
          title: `Duration`,
          type: L.String,
        },
        YyGjbNizN: {
          defaultValue: `Starter Plan`,
          displayTextArea: !1,
          title: `Title`,
          type: L.String,
        },
        uV71JgkNW: {
          defaultValue: `Perfect for small launches and personal sites that need a fast online presence.`,
          displayTextArea: !0,
          title: `Body Text`,
          type: L.String,
        },
        LVy4SICzK: {
          defaultValue: `Point 1`,
          displayTextArea: !0,
          title: `Point 1`,
          type: L.String,
        },
        Yj8NwxqdY: {
          defaultValue: `Point 2`,
          displayTextArea: !0,
          title: `Point 2`,
          type: L.String,
        },
        m6o5YyZhi: {
          defaultValue: `Point 3`,
          displayTextArea: !0,
          title: `Point 3`,
          type: L.String,
        },
        Iux3h95Y2: {
          defaultValue: `Point 4`,
          displayTextArea: !0,
          title: `Point 4`,
          type: L.String,
        },
        thPyOmv2A: {
          defaultValue: `Point 5`,
          displayTextArea: !0,
          title: `Point 5`,
          type: L.String,
        },
        dja90qj9m: {
          defaultValue: `Point 6`,
          displayTextArea: !0,
          title: `Point 6`,
          type: L.String,
        },
        fpya69uj1: {
          defaultValue: `Point 7`,
          displayTextArea: !0,
          title: `Point 7`,
          type: L.String,
        },
        jKPIbAit0: {
          defaultValue: `Point 8`,
          displayTextArea: !0,
          title: `Point 8`,
          type: L.String,
        },
      }),
      j(
        $n,
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
          ...Un,
          ...J(wn),
          ...J(bn),
          ...J(Ie),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function nr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r = e(() => {
    (y(),
      N(),
      D(),
      r(),
      nt(),
      (rr = F(ot)),
      (ir = re(ot)),
      (ar = [`vifpDyxXC`, `Mj_yFQ3Et`]),
      (or = `framer-EKbvM`),
      (sr = { Mj_yFQ3Et: `framer-v-12ruab9`, vifpDyxXC: `framer-v-1dvnqn6` }),
      (cr = { delay: 0.1, duration: 0.6, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (lr = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (ur = ({ value: e, children: t }) => {
        let n = c(w),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (dr = C.create(s)),
      (fr = { Default: `vifpDyxXC`, Video: `Mj_yFQ3Et` }),
      (pr = ({ file: e, height: t, id: n, image: r, logo: i, width: a, ...o }) => ({
        ...o,
        SXjjKopWL: i ??
          o.SXjjKopWL ?? {
            alt: ``,
            pixelHeight: 87,
            pixelWidth: 230,
            src: `https://framerusercontent.com/images/liDp6RqOmZpoiyriU2da9i9ZRNM.png`,
          },
        variant: fr[o.variant] ?? o.variant ?? `vifpDyxXC`,
        vH_Dks4GI: e ?? o.vH_Dks4GI,
        VypX2yAlC: r ??
          o.VypX2yAlC ?? {
            pixelHeight: 1200,
            pixelWidth: 1200,
            src: `https://framerusercontent.com/images/LoV9BSvvjJosyi5ofeYweCCDrw.jpeg?scale-down-to=512`,
            srcSet: `https://framerusercontent.com/images/LoV9BSvvjJosyi5ofeYweCCDrw.jpeg?scale-down-to=512 512w,https://framerusercontent.com/images/LoV9BSvvjJosyi5ofeYweCCDrw.jpeg?scale-down-to=1024 1024w,https://framerusercontent.com/images/LoV9BSvvjJosyi5ofeYweCCDrw.jpeg 1200w`,
          },
      })),
      (mr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (hr = K(
        f(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = m(),
            { activeLocale: a, setLocale: o } = V(),
            s = U(),
            {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              VypX2yAlC: f,
              SXjjKopWL: p,
              vH_Dks4GI: g,
              ...y
            } = pr(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: ee,
              gestureVariant: w,
              isLoading: T,
              setGestureState: D,
              setVariant: k,
              variants: A,
            } = R({
              cycleOrder: ar,
              defaultVariant: `vifpDyxXC`,
              ref: r,
              variant: d,
              variantClassNames: sr,
            }),
            j = mr(e, A),
            N = B(or),
            te = () => b === `Mj_yFQ3Et`,
            P = () => b !== `Mj_yFQ3Et`;
          return h(E, {
            id: u ?? i,
            children: h(dr, {
              animate: A,
              initial: !1,
              children: h(ur, {
                value: cr,
                children: v(C.div, {
                  ...y,
                  ...ee,
                  className: B(N, `framer-1dvnqn6`, l, x),
                  'data-framer-name': `Default`,
                  layoutDependency: j,
                  layoutId: `vifpDyxXC`,
                  ref: r,
                  style: {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    ...c,
                  },
                  ...nr({ Mj_yFQ3Et: { 'data-framer-name': `Video` } }, b, w),
                  children: [
                    te() &&
                      h(H, {
                        children: h(M, {
                          className: `framer-zsocgq-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: j,
                          layoutId: `zIPPgA3eT-container`,
                          nodeId: `zIPPgA3eT`,
                          rendersWithMotion: !0,
                          scopeId: `k9r0KF_Ps`,
                          children: h(ot, {
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
                            posterEnabled: !0,
                            srcFile: g,
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
                    P() &&
                      h(W, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: O((s?.y || 0) + 0),
                          pixelHeight: 1200,
                          pixelWidth: 1200,
                          sizes: s?.width || `100vw`,
                          ...lr(f),
                          positionX: `center`,
                          positionY: `center`,
                        },
                        className: `framer-144g2sq`,
                        draggable: `false`,
                        layoutDependency: j,
                        layoutId: `UJ_Qf7QME`,
                        style: { filter: `brightness(0.6)`, WebkitFilter: `brightness(0.6)` },
                      }),
                    h(C.div, {
                      className: `framer-1kzr9zt`,
                      'data-framer-name': `Text`,
                      layoutDependency: j,
                      layoutId: `V9AsDOwoe`,
                      children: h(W, {
                        background: {
                          alt: ``,
                          fit: `fit`,
                          intrinsicHeight: 43.5,
                          intrinsicWidth: 115,
                          loading: O(
                            (s?.y || 0) + 0 + (((s?.height || 215) - 0 - 21) / 2 + 0 + 0) + 0 + 0
                          ),
                          pixelHeight: 87,
                          pixelWidth: 230,
                          sizes: `65px`,
                          ...lr(p),
                          positionX: `center`,
                          positionY: `center`,
                        },
                        className: `framer-1bcygkq`,
                        'data-framer-name': `675d4cbc10e6dcb01229787c Cairo Logo Black 2`,
                        layoutDependency: j,
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
          `.framer-EKbvM.framer-17kjg2f, .framer-EKbvM .framer-17kjg2f { display: block; }`,
          `.framer-EKbvM.framer-1dvnqn6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 215px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 320px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-EKbvM .framer-zsocgq-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-EKbvM .framer-144g2sq { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-EKbvM .framer-1kzr9zt { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; user-select: none; width: min-content; z-index: 1; }`,
          `.framer-EKbvM .framer-1bcygkq { aspect-ratio: 2.6436781609195403 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 25px); overflow: visible; position: relative; width: 65px; }`,
        ],
        `framer-EKbvM`
      )),
      (gr = hr),
      (hr.displayName = `Client Card`),
      (hr.defaultProps = { height: 215, width: 320 }),
      P(hr, {
        variant: {
          options: [`vifpDyxXC`, `Mj_yFQ3Et`],
          optionTitles: [`Default`, `Video`],
          title: `Variant`,
          type: L.Enum,
        },
        VypX2yAlC: {
          __defaultAssetReference: `data:framer/asset-reference,LoV9BSvvjJosyi5ofeYweCCDrw.jpeg?originalFilename=418b82bd-5063-4a2a-8c5a-5fb14b62764b.jpeg&preferredSize=auto`,
          title: `Image`,
          type: L.ResponsiveImage,
        },
        SXjjKopWL: {
          __defaultAssetReference: `data:framer/asset-reference,liDp6RqOmZpoiyriU2da9i9ZRNM.png?originalFilename=675d4cbc10e6dcb01229787c_Cairo+Logo+Black+2.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,liDp6RqOmZpoiyriU2da9i9ZRNM.png?originalFilename=675d4cbc10e6dcb01229787c_Cairo+Logo+Black+2.png&preferredSize=auto`,
          },
          title: `Logo`,
          type: L.ResponsiveImage,
        },
        vH_Dks4GI: ir?.srcFile && {
          ...ir.srcFile,
          __defaultAssetReference: ``,
          description: void 0,
          hidden: void 0,
          title: `File`,
        },
      }),
      j(hr, [{ explicitInter: !0, fonts: [] }, ...rr], { supportsExplicitInterCodegen: !0 }));
  });
function vr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr = e(() => {
    (y(),
      N(),
      D(),
      r(),
      Be(),
      (yr = xe(A(G))),
      (br = [`p6MHOXaId`, `yQnSBc9qa`]),
      (xr = `framer-HEDEE`),
      (Sr = { p6MHOXaId: `framer-v-xlotgl`, yQnSBc9qa: `framer-v-1rbv0do` }),
      (Cr = { damping: 60, delay: 0, mass: 1, stiffness: 300, type: `spring` }),
      (wr = {
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
      (Tr = {
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
      (Er = ({ value: e, children: t }) => {
        let n = c(w),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (Dr = C.create(s)),
      (Or = { Appear: `yQnSBc9qa`, Normal: `p6MHOXaId` }),
      (kr = ({ height: e, id: t, title1: n, title2: r, title3: i, title4: a, width: o, ...s }) => ({
        ...s,
        DTbD9rT1W: i ?? s.DTbD9rT1W ?? `Strategy`,
        L7I1r5V52: r ?? s.L7I1r5V52 ?? `Branding`,
        UVsRBS2xZ: a ?? s.UVsRBS2xZ ?? `Web Design`,
        variant: Or[s.variant] ?? s.variant ?? `p6MHOXaId`,
        Y0AFFcDc9: n ?? s.Y0AFFcDc9 ?? `Art Direction`,
      })),
      (Ar = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (jr = K(
        f(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = m(),
            { activeLocale: a, setLocale: o } = V();
          U();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              Y0AFFcDc9: f,
              L7I1r5V52: p,
              DTbD9rT1W: g,
              UVsRBS2xZ: y,
              ...b
            } = kr(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: ee,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: D,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = R({
              cycleOrder: br,
              defaultVariant: `p6MHOXaId`,
              ref: r,
              variant: d,
              variantClassNames: Sr,
            }),
            j = Ar(e, A),
            { activeVariantCallback: M, delay: N } = pe(x);
          ue(x, {
            default: M(async (...e) => {
              await N(() => k(`yQnSBc9qa`), 4400);
            }),
          });
          let te = B(xr, Ue);
          return h(E, {
            id: u ?? i,
            children: h(Dr, {
              animate: A,
              initial: !1,
              children: h(Er, {
                value: Cr,
                children: v(C.div, {
                  ...b,
                  ...w,
                  className: B(te, `framer-xlotgl`, l, S),
                  'data-framer-name': `Normal`,
                  'data-highlight': !0,
                  layoutDependency: j,
                  layoutId: `p6MHOXaId`,
                  ref: r,
                  style: { ...c },
                  ...vr({ yQnSBc9qa: { 'data-framer-name': `Appear` } }, x, T),
                  children: [
                    h(C.div, {
                      className: `framer-u73k71`,
                      'data-framer-name': `BG`,
                      layoutDependency: j,
                      layoutId: `iwHtwVKD0`,
                      style: {
                        backgroundColor: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                        opacity: 0,
                      },
                      variants: { yQnSBc9qa: { opacity: 1 } },
                    }),
                    h(yr, {
                      __fromCanvasComponent: !0,
                      children: h(s, {
                        children: h(C.p, {
                          className: `framer-styles-preset-izlnn8`,
                          'data-styles-preset': `eqDmnbQxL`,
                          children: `Art Direction`,
                        }),
                      }),
                      className: `framer-1602xft`,
                      'data-framer-appear-id': `1602xft`,
                      'data-framer-name': `Text 1`,
                      fonts: [`Inter`],
                      layoutDependency: j,
                      layoutId: `aY_Xk3vyV`,
                      style: { '--framer-paragraph-spacing': `0px` },
                      text: f,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...vr(
                        {
                          yQnSBc9qa: {
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: wr,
                            initial: Tr,
                            optimized: !0,
                          },
                        },
                        x,
                        T
                      ),
                    }),
                    h(yr, {
                      __fromCanvasComponent: !0,
                      children: h(s, {
                        children: h(C.p, {
                          className: `framer-styles-preset-izlnn8`,
                          'data-styles-preset': `eqDmnbQxL`,
                          children: `Branding`,
                        }),
                      }),
                      className: `framer-1qj1b6h`,
                      'data-framer-appear-id': `1qj1b6h`,
                      'data-framer-name': `Text 2`,
                      fonts: [`Inter`],
                      layoutDependency: j,
                      layoutId: `PJPUjepfJ`,
                      style: { '--framer-paragraph-spacing': `0px` },
                      text: p,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...vr(
                        {
                          yQnSBc9qa: {
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: wr,
                            initial: Tr,
                            optimized: !0,
                          },
                        },
                        x,
                        T
                      ),
                    }),
                    h(yr, {
                      __fromCanvasComponent: !0,
                      children: h(s, {
                        children: h(C.p, {
                          className: `framer-styles-preset-izlnn8`,
                          'data-styles-preset': `eqDmnbQxL`,
                          children: `Strategy`,
                        }),
                      }),
                      className: `framer-1f7wmhl`,
                      'data-framer-appear-id': `1f7wmhl`,
                      'data-framer-name': `Text 3`,
                      fonts: [`Inter`],
                      layoutDependency: j,
                      layoutId: `kIqde0XrR`,
                      style: { '--framer-paragraph-spacing': `0px` },
                      text: g,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...vr(
                        {
                          yQnSBc9qa: {
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: wr,
                            initial: Tr,
                            optimized: !0,
                          },
                        },
                        x,
                        T
                      ),
                    }),
                    h(yr, {
                      __fromCanvasComponent: !0,
                      children: h(s, {
                        children: h(C.p, {
                          className: `framer-styles-preset-izlnn8`,
                          'data-styles-preset': `eqDmnbQxL`,
                          children: `Web Design`,
                        }),
                      }),
                      className: `framer-t0tsr`,
                      'data-framer-appear-id': `t0tsr`,
                      'data-framer-name': `Text 4`,
                      fonts: [`Inter`],
                      layoutDependency: j,
                      layoutId: `mRnqcLbm7`,
                      style: { '--framer-paragraph-spacing': `0px` },
                      text: y,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...vr(
                        {
                          yQnSBc9qa: {
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: wr,
                            initial: Tr,
                            optimized: !0,
                          },
                        },
                        x,
                        T
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
          ...Ve,
        ],
        `framer-HEDEE`
      )),
      (Mr = jr),
      (jr.displayName = `Animated Banner`),
      (jr.defaultProps = { height: 24, width: 1440 }),
      P(jr, {
        variant: {
          options: [`p6MHOXaId`, `yQnSBc9qa`],
          optionTitles: [`Normal`, `Appear`],
          title: `Variant`,
          type: L.Enum,
        },
        Y0AFFcDc9: {
          defaultValue: `Art Direction`,
          displayTextArea: !1,
          title: `Title 1`,
          type: L.String,
        },
        L7I1r5V52: {
          defaultValue: `Branding`,
          displayTextArea: !1,
          title: `Title 2`,
          type: L.String,
        },
        DTbD9rT1W: {
          defaultValue: `Strategy`,
          displayTextArea: !1,
          title: `Title 3`,
          type: L.String,
        },
        UVsRBS2xZ: {
          defaultValue: `Web Design`,
          displayTextArea: !1,
          title: `Title 4`,
          type: L.String,
        },
      }),
      j(
        jr,
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
          ...J(He),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Pr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Fr,
  Ir,
  Lr,
  Rr,
  X,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr = e(() => {
    (y(),
      N(),
      D(),
      r(),
      (Fr = [`e_BwIEW_8`, `CMMavfnMt`, `jPs3_WrdW`, `Vj9qKoT_G`, `gfRe1MGnZ`]),
      (Ir = `framer-7ya09`),
      (Lr = {
        CMMavfnMt: `framer-v-15xxrby`,
        e_BwIEW_8: `framer-v-d7g5a3`,
        gfRe1MGnZ: `framer-v-1ts6k6s`,
        jPs3_WrdW: `framer-v-11zr2v2`,
        Vj9qKoT_G: `framer-v-3uhaw`,
      }),
      (Rr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (X = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (zr = ({ value: e, children: t }) => {
        let n = c(w),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (Br = C.create(s)),
      (Vr = {
        1: `e_BwIEW_8`,
        2: `CMMavfnMt`,
        3: `jPs3_WrdW`,
        Mobile: `Vj9qKoT_G`,
        Tab: `gfRe1MGnZ`,
      }),
      (Hr = ({ height: e, id: t, image1: n, image2: r, image3: i, image4: a, width: o, ...s }) => ({
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
        variant: Vr[s.variant] ?? s.variant ?? `e_BwIEW_8`,
      })),
      (Ur = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Wr = K(
        f(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = m(),
            { activeLocale: a, setLocale: o } = V(),
            s = U(),
            {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              dBhRHdeNn: f,
              DvlHLjdnV: p,
              U82U1Mfx6: g,
              NGjSoReVt: y,
              ...b
            } = Hr(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: ee,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: D,
              setGestureState: k,
              setVariant: A,
              variants: j,
            } = R({
              cycleOrder: Fr,
              defaultVariant: `e_BwIEW_8`,
              ref: r,
              variant: d,
              variantClassNames: Lr,
            }),
            M = Ur(e, j),
            N = B(Ir);
          return h(E, {
            id: u ?? i,
            children: h(Br, {
              animate: j,
              initial: !1,
              children: h(zr, {
                value: Rr,
                children: v(C.div, {
                  ...b,
                  ...w,
                  className: B(N, `framer-d7g5a3`, l, S),
                  'data-framer-name': `1`,
                  layoutDependency: M,
                  layoutId: `e_BwIEW_8`,
                  ref: r,
                  style: { ...c },
                  ...Pr(
                    {
                      CMMavfnMt: { 'data-framer-name': `2` },
                      gfRe1MGnZ: { 'data-framer-name': `Tab` },
                      jPs3_WrdW: { 'data-framer-name': `3` },
                      Vj9qKoT_G: { 'data-framer-name': `Mobile` },
                    },
                    x,
                    T
                  ),
                  children: [
                    h(W, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: O((s?.y || 0) + 0),
                        pixelHeight: 1280,
                        pixelWidth: 896,
                        sizes: `84px`,
                        ...X(f),
                      },
                      className: `framer-5y8s7c`,
                      'data-framer-name': `1`,
                      layoutDependency: M,
                      layoutId: `huXK7OFBl`,
                      style: {
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                      },
                      ...Pr(
                        {
                          gfRe1MGnZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O((s?.y || 0) + 0),
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: `max((${s?.width || `100vw`} - 30px) / 4, 1px)`,
                              ...X(f),
                            },
                          },
                          jPs3_WrdW: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O((s?.y || 0) + 0),
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: `102px`,
                              ...X(f),
                            },
                          },
                          Vj9qKoT_G: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O((s?.y || 0) + 0),
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: `max((${s?.width || `100vw`} - 30px) / 4, 1px)`,
                              ...X(f),
                            },
                          },
                        },
                        x,
                        T
                      ),
                    }),
                    h(W, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: O((s?.y || 0) + 0),
                        pixelHeight: 1024,
                        pixelWidth: 1024,
                        sizes: `102px`,
                        ...X(p),
                      },
                      className: `framer-h33s0b`,
                      'data-framer-name': `2`,
                      layoutDependency: M,
                      layoutId: `JMLnMCqsu`,
                      style: {
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                      },
                      ...Pr(
                        {
                          CMMavfnMt: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O((s?.y || 0) + 0),
                              pixelHeight: 1024,
                              pixelWidth: 1024,
                              sizes: `107px`,
                              ...X(p),
                            },
                          },
                          gfRe1MGnZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O((s?.y || 0) + 0),
                              pixelHeight: 1024,
                              pixelWidth: 1024,
                              sizes: `max((${s?.width || `100vw`} - 30px) / 4, 1px)`,
                              ...X(p),
                            },
                          },
                          jPs3_WrdW: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O((s?.y || 0) + 0),
                              pixelHeight: 1024,
                              pixelWidth: 1024,
                              sizes: `107px`,
                              ...X(p),
                            },
                          },
                          Vj9qKoT_G: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O((s?.y || 0) + 0),
                              pixelHeight: 1024,
                              pixelWidth: 1024,
                              sizes: `max((${s?.width || `100vw`} - 30px) / 4, 1px)`,
                              ...X(p),
                            },
                          },
                        },
                        x,
                        T
                      ),
                    }),
                    h(W, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: O((s?.y || 0) + 0),
                        pixelHeight: 1408,
                        pixelWidth: 768,
                        sizes: `107px`,
                        ...X(g),
                      },
                      className: `framer-n6nikx`,
                      'data-framer-name': `3`,
                      layoutDependency: M,
                      layoutId: `yhsbjdKdy`,
                      style: {
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                      },
                      ...Pr(
                        {
                          CMMavfnMt: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O((s?.y || 0) + 0),
                              pixelHeight: 1408,
                              pixelWidth: 768,
                              sizes: `87px`,
                              ...X(g),
                            },
                          },
                          gfRe1MGnZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O((s?.y || 0) + 0),
                              pixelHeight: 1408,
                              pixelWidth: 768,
                              sizes: `max((${s?.width || `100vw`} - 30px) / 4, 1px)`,
                              ...X(g),
                            },
                          },
                          jPs3_WrdW: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O((s?.y || 0) + 0),
                              pixelHeight: 1408,
                              pixelWidth: 768,
                              sizes: `87px`,
                              ...X(g),
                            },
                          },
                          Vj9qKoT_G: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O((s?.y || 0) + 0),
                              pixelHeight: 1408,
                              pixelWidth: 768,
                              sizes: `max((${s?.width || `100vw`} - 30px) / 4, 1px)`,
                              ...X(g),
                            },
                          },
                        },
                        x,
                        T
                      ),
                    }),
                    h(W, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: O((s?.y || 0) + 0),
                        pixelHeight: 1280,
                        pixelWidth: 896,
                        sizes: `87px`,
                        ...X(y),
                      },
                      className: `framer-10zvzro`,
                      'data-framer-name': `4`,
                      layoutDependency: M,
                      layoutId: `iutUSWsot`,
                      style: {
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                      },
                      ...Pr(
                        {
                          CMMavfnMt: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O((s?.y || 0) + 0),
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: `102px`,
                              ...X(y),
                            },
                          },
                          gfRe1MGnZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O((s?.y || 0) + 0),
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: `max((${s?.width || `100vw`} - 30px) / 4, 1px)`,
                              ...X(y),
                            },
                          },
                          jPs3_WrdW: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O((s?.y || 0) + 0),
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: `84px`,
                              ...X(y),
                            },
                          },
                          Vj9qKoT_G: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: O((s?.y || 0) + 0),
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              sizes: `max((${s?.width || `100vw`} - 30px) / 4, 1px)`,
                              ...X(y),
                            },
                          },
                        },
                        x,
                        T
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
      (Gr = Wr),
      (Wr.displayName = `Awards Images List`),
      (Wr.defaultProps = { height: 123, width: 410 }),
      P(Wr, {
        variant: {
          options: [`e_BwIEW_8`, `CMMavfnMt`, `jPs3_WrdW`, `Vj9qKoT_G`, `gfRe1MGnZ`],
          optionTitles: [`1`, `2`, `3`, `Mobile`, `Tab`],
          title: `Variant`,
          type: L.Enum,
        },
        dBhRHdeNn: {
          __defaultAssetReference: `data:framer/asset-reference,gykz5t3Atm9UtfI5YcnYcpGmng.png?originalFilename=visualelectric-1743060562561.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,gykz5t3Atm9UtfI5YcnYcpGmng.png?originalFilename=visualelectric-1743060562561.png&preferredSize=auto`,
          },
          title: `Image 1`,
          type: L.ResponsiveImage,
        },
        DvlHLjdnV: {
          __defaultAssetReference: `data:framer/asset-reference,PxSsJrthME1XjSwGQXwUMx7rI.png?originalFilename=visualelectric-1743060359014.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,PxSsJrthME1XjSwGQXwUMx7rI.png?originalFilename=visualelectric-1743060359014.png&preferredSize=auto`,
          },
          title: `Image 2`,
          type: L.ResponsiveImage,
        },
        U82U1Mfx6: {
          __defaultAssetReference: `data:framer/asset-reference,41QaDdGvmS3kEQL4oJyWQuJz8.png?originalFilename=visualelectric-1740465328915.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,41QaDdGvmS3kEQL4oJyWQuJz8.png?originalFilename=visualelectric-1740465328915.png&preferredSize=auto`,
          },
          title: `Image 3`,
          type: L.ResponsiveImage,
        },
        NGjSoReVt: {
          __defaultAssetReference: `data:framer/asset-reference,dfa6kXeZNdp07AUexK86lC0Av1Q.png?originalFilename=visualelectric-1740465285187.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,dfa6kXeZNdp07AUexK86lC0Av1Q.png?originalFilename=visualelectric-1740465285187.png&preferredSize=auto`,
          },
          title: `Image 4`,
          type: L.ResponsiveImage,
        },
      }),
      j(Wr, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function qr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Jr,
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
  oi,
  si = e(() => {
    (y(),
      N(),
      D(),
      r(),
      Cn(),
      we(),
      Kr(),
      (Jr = F(Gr)),
      (Yr = [`O97fLYJ9K`, `kMQn5ErT3`, `ifjXWUY_3`, `qFEdVbZ6h`, `LPwhvULmf`, `ssS_Ygkc0`]),
      (Xr = `framer-98GYR`),
      (Zr = {
        ifjXWUY_3: `framer-v-k3z85h`,
        kMQn5ErT3: `framer-v-11avowu`,
        LPwhvULmf: `framer-v-ephvq4`,
        O97fLYJ9K: `framer-v-ubytdd`,
        qFEdVbZ6h: `framer-v-1yrsbmk`,
        ssS_Ygkc0: `framer-v-1bfdgu4`,
      }),
      (Qr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      ($r = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (ei = ({ value: e, children: t }) => {
        let n = c(w),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (ti = C.create(s)),
      (ni = {
        'M Primary': `ifjXWUY_3`,
        'M Secondary': `qFEdVbZ6h`,
        'S Primary': `LPwhvULmf`,
        'S Secondary': `ssS_Ygkc0`,
        'XL Primary': `O97fLYJ9K`,
        'XL Secondary': `kMQn5ErT3`,
      }),
      (ri = ({
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
        variant: ni[u.variant] ?? u.variant ?? `O97fLYJ9K`,
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
      (ii = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ai = K(
        f(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = m(),
            { activeLocale: a, setLocale: o } = V(),
            c = U(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              iHqB9hYVD: p,
              wur4hMCKZ: g,
              Sd3FXOKpR: y,
              Cn5AbWh3t: b,
              WwECqnj4l: x,
              CoxGWKoXF: S,
              CDJ0zN5Ly: ee,
              tx5FlZg7v: w,
              ...T
            } = ri(e),
            {
              baseVariant: D,
              classNames: O,
              clearLoadingGesture: k,
              gestureHandlers: A,
              gestureVariant: j,
              isLoading: N,
              setGestureState: te,
              setVariant: P,
              variants: F,
            } = R({
              cycleOrder: Yr,
              defaultVariant: `O97fLYJ9K`,
              ref: r,
              variant: f,
              variantClassNames: Zr,
            }),
            I = ii(e, F),
            ne = B(Xr, Sn, De),
            re = () => ![`kMQn5ErT3`, `qFEdVbZ6h`, `ssS_Ygkc0`].includes(D),
            ie = () => ![`ifjXWUY_3`, `qFEdVbZ6h`, `LPwhvULmf`, `ssS_Ygkc0`].includes(D);
          return h(E, {
            id: d ?? i,
            children: h(ti, {
              animate: F,
              initial: !1,
              children: h(ei, {
                value: Qr,
                children: v(C.div, {
                  ...T,
                  ...A,
                  className: B(ne, `framer-ubytdd`, u, O),
                  'data-framer-name': `XL Primary`,
                  layoutDependency: I,
                  layoutId: `O97fLYJ9K`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                    ...l,
                  },
                  ...qr(
                    {
                      ifjXWUY_3: { 'data-framer-name': `M Primary` },
                      kMQn5ErT3: { 'data-framer-name': `XL Secondary` },
                      LPwhvULmf: { 'data-framer-name': `S Primary` },
                      qFEdVbZ6h: { 'data-framer-name': `M Secondary` },
                      ssS_Ygkc0: { 'data-framer-name': `S Secondary` },
                    },
                    D,
                    j
                  ),
                  children: [
                    re() &&
                      h(C.div, {
                        className: `framer-8eeueu`,
                        'data-framer-name': `Line`,
                        layoutDependency: I,
                        layoutId: `NiVst4HfS`,
                        style: {
                          backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`,
                        },
                      }),
                    v(C.div, {
                      className: `framer-xqy3fp`,
                      'data-framer-name': `Container`,
                      layoutDependency: I,
                      layoutId: `ekd_3ueq4`,
                      children: [
                        v(C.div, {
                          className: `framer-1i3fl25`,
                          'data-framer-name': `Text Content`,
                          layoutDependency: I,
                          layoutId: `oH1Fj5z5a`,
                          children: [
                            h(C.div, {
                              className: `framer-1es903h`,
                              'data-framer-name': `Roll No`,
                              layoutDependency: I,
                              layoutId: `lho9sKyff`,
                              children: h(G, {
                                __fromCanvasComponent: !0,
                                children: h(s, {
                                  children: h(C.p, {
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
                            h(C.div, {
                              className: `framer-th4lgr`,
                              'data-framer-name': `Awardee`,
                              layoutDependency: I,
                              layoutId: `tlO8ZgbEo`,
                              children: h(G, {
                                __fromCanvasComponent: !0,
                                children: h(s, {
                                  children: h(C.p, {
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
                                text: g,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...qr(
                                  {
                                    ifjXWUY_3: {
                                      children: h(s, {
                                        children: h(C.p, {
                                          className: `framer-styles-preset-d3a9yv`,
                                          'data-styles-preset': `gVvtfPznu`,
                                          style: { '--framer-text-alignment': `right` },
                                          children: `Awwwards`,
                                        }),
                                      }),
                                    },
                                    LPwhvULmf: {
                                      children: h(s, {
                                        children: h(C.p, {
                                          className: `framer-styles-preset-d3a9yv`,
                                          'data-styles-preset': `gVvtfPznu`,
                                          style: { '--framer-text-alignment': `right` },
                                          children: `Awwwards`,
                                        }),
                                      }),
                                    },
                                    qFEdVbZ6h: {
                                      children: h(s, {
                                        children: h(C.p, {
                                          className: `framer-styles-preset-d3a9yv`,
                                          'data-styles-preset': `gVvtfPznu`,
                                          style: { '--framer-text-alignment': `right` },
                                          children: `Awwwards`,
                                        }),
                                      }),
                                    },
                                    ssS_Ygkc0: {
                                      children: h(s, {
                                        children: h(C.p, {
                                          className: `framer-styles-preset-d3a9yv`,
                                          'data-styles-preset': `gVvtfPznu`,
                                          style: { '--framer-text-alignment': `right` },
                                          children: `Awwwards`,
                                        }),
                                      }),
                                    },
                                  },
                                  D,
                                  j
                                ),
                              }),
                            }),
                            ie() &&
                              h(C.div, {
                                className: `framer-13ihha8`,
                                'data-framer-name': `Body Text`,
                                layoutDependency: I,
                                layoutId: `J6wEVVvcp`,
                                children: h(G, {
                                  __fromCanvasComponent: !0,
                                  children: h(s, {
                                    children: h(C.p, {
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
                                  text: y,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                          ],
                        }),
                        h(H, {
                          height: 123,
                          y: (c?.y || 0) + 0 + (((c?.height || 205) - 0 - 205) / 2 + 1 + 40) + 0,
                          ...qr(
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
                            D,
                            j
                          ),
                          children: h(M, {
                            className: `framer-1l8mj8b-container`,
                            layoutDependency: I,
                            layoutId: `hzdN1nRo8-container`,
                            nodeId: `hzdN1nRo8`,
                            rendersWithMotion: !0,
                            scopeId: `PYgFOyI__`,
                            children: h(Gr, {
                              dBhRHdeNn: $r(b),
                              DvlHLjdnV: $r(x),
                              height: `100%`,
                              id: `hzdN1nRo8`,
                              layoutId: `hzdN1nRo8`,
                              NGjSoReVt: $r(ee),
                              U82U1Mfx6: $r(S),
                              variant: `e_BwIEW_8`,
                              width: `100%`,
                              ...qr(
                                {
                                  ifjXWUY_3: { style: { width: `100%` }, variant: `gfRe1MGnZ` },
                                  kMQn5ErT3: { variant: w },
                                  LPwhvULmf: { style: { width: `100%` }, variant: `Vj9qKoT_G` },
                                  qFEdVbZ6h: { style: { width: `100%` }, variant: `gfRe1MGnZ` },
                                  ssS_Ygkc0: { style: { width: `100%` }, variant: `Vj9qKoT_G` },
                                },
                                D,
                                j
                              ),
                            }),
                          }),
                        }),
                      ],
                    }),
                    h(C.div, {
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
          ...xn,
          ...Te,
        ],
        `framer-98GYR`
      )),
      (oi = ai),
      (ai.displayName = `Awards Card`),
      (ai.defaultProps = { height: 205, width: 1392 }),
      P(ai, {
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
          type: L.Enum,
        },
        iHqB9hYVD: { defaultValue: `27x`, displayTextArea: !1, title: `Roll No`, type: L.String },
        wur4hMCKZ: {
          defaultValue: `Awwwards`,
          displayTextArea: !1,
          title: `Awardee`,
          type: L.String,
        },
        Sd3FXOKpR: {
          defaultValue: `Recognized for bold interaction, structured visual rhythm, and design consistency across creative categories.`,
          displayTextArea: !0,
          title: `Body Text`,
          type: L.String,
        },
        Cn5AbWh3t: {
          __defaultAssetReference: `data:framer/asset-reference,gykz5t3Atm9UtfI5YcnYcpGmng.png?originalFilename=visualelectric-1743060562561.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,gykz5t3Atm9UtfI5YcnYcpGmng.png?originalFilename=visualelectric-1743060562561.png&preferredSize=auto`,
          },
          title: `Image 1`,
          type: L.ResponsiveImage,
        },
        WwECqnj4l: {
          __defaultAssetReference: `data:framer/asset-reference,PxSsJrthME1XjSwGQXwUMx7rI.png?originalFilename=visualelectric-1743060359014.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,PxSsJrthME1XjSwGQXwUMx7rI.png?originalFilename=visualelectric-1743060359014.png&preferredSize=auto`,
          },
          title: `Image 2`,
          type: L.ResponsiveImage,
        },
        CoxGWKoXF: {
          __defaultAssetReference: `data:framer/asset-reference,41QaDdGvmS3kEQL4oJyWQuJz8.png?originalFilename=visualelectric-1740465328915.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,41QaDdGvmS3kEQL4oJyWQuJz8.png?originalFilename=visualelectric-1740465328915.png&preferredSize=auto`,
          },
          title: `Image 3`,
          type: L.ResponsiveImage,
        },
        CDJ0zN5Ly: {
          __defaultAssetReference: `data:framer/asset-reference,dfa6kXeZNdp07AUexK86lC0Av1Q.png?originalFilename=visualelectric-1740465285187.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,dfa6kXeZNdp07AUexK86lC0Av1Q.png?originalFilename=visualelectric-1740465285187.png&preferredSize=auto`,
          },
          title: `Image 4`,
          type: L.ResponsiveImage,
        },
      }),
      j(
        ai,
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
          ...Jr,
          ...J(bn),
          ...J(Ee),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function ci(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var li,
  ui,
  di,
  fi,
  pi,
  Z,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi = e(() => {
    (y(),
      N(),
      D(),
      r(),
      si(),
      (li = F(oi)),
      (ui = [`cGfMLjpbo`, `P6hgzGRDq`, `tCRSSoKh7`]),
      (di = `framer-iMVDZ`),
      (fi = {
        cGfMLjpbo: `framer-v-3239ys`,
        P6hgzGRDq: `framer-v-1320no6`,
        tCRSSoKh7: `framer-v-15yjqej`,
      }),
      (pi = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Z = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (mi = ({ value: e, children: t }) => {
        let n = c(w),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (hi = C.create(s)),
      (gi = { M: `P6hgzGRDq`, S: `tCRSSoKh7`, XL: `cGfMLjpbo` }),
      (_i = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: gi[r.variant] ?? r.variant ?? `cGfMLjpbo`,
      })),
      (vi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (yi = K(
        f(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = m(),
            { activeLocale: a, setLocale: o } = V(),
            s = U(),
            { style: c, className: l, layoutId: u, variant: d, ...f } = _i(e),
            {
              baseVariant: p,
              classNames: g,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: S,
              setGestureState: ee,
              setVariant: w,
              variants: T,
            } = R({
              cycleOrder: ui,
              defaultVariant: `cGfMLjpbo`,
              ref: r,
              variant: d,
              variantClassNames: fi,
            }),
            D = vi(e, T),
            O = B(di);
          return h(E, {
            id: u ?? i,
            children: h(hi, {
              animate: T,
              initial: !1,
              children: h(mi, {
                value: pi,
                children: v(C.div, {
                  ...f,
                  ...b,
                  className: B(O, `framer-3239ys`, l, g),
                  'data-framer-name': `XL`,
                  layoutDependency: D,
                  layoutId: `cGfMLjpbo`,
                  ref: r,
                  style: { ...c },
                  ...ci(
                    {
                      P6hgzGRDq: { 'data-framer-name': `M` },
                      tCRSSoKh7: { 'data-framer-name': `S` },
                    },
                    p,
                    x
                  ),
                  children: [
                    h(H, {
                      height: 205,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 818) - 0 - 820) / 2 + 0 + 0),
                      ...ci(
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
                        x
                      ),
                      children: h(M, {
                        className: `framer-95swuw-container`,
                        layoutDependency: D,
                        layoutId: `vEXDAsV9F-container`,
                        nodeId: `vEXDAsV9F`,
                        rendersWithMotion: !0,
                        scopeId: `MIbiQECTD`,
                        children: h(oi, {
                          Cn5AbWh3t: Z(
                            {
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              src: `https://framerusercontent.com/images/5QMl4IurwLvQ40GhcE9evVfTQW0.png`,
                              srcSet: `https://framerusercontent.com/images/5QMl4IurwLvQ40GhcE9evVfTQW0.png?scale-down-to=1024 716w,https://framerusercontent.com/images/5QMl4IurwLvQ40GhcE9evVfTQW0.png 896w`,
                            },
                            `Black Man`
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
                          WwECqnj4l: Z(
                            {
                              pixelHeight: 3584,
                              pixelWidth: 5120,
                              src: `https://framerusercontent.com/images/TGpbpkV9gbzPz61ATQTzIwpBBPU.jpg`,
                              srcSet: `https://framerusercontent.com/images/TGpbpkV9gbzPz61ATQTzIwpBBPU.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/TGpbpkV9gbzPz61ATQTzIwpBBPU.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/TGpbpkV9gbzPz61ATQTzIwpBBPU.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/TGpbpkV9gbzPz61ATQTzIwpBBPU.jpg?scale-down-to=4096 4096w,https://framerusercontent.com/images/TGpbpkV9gbzPz61ATQTzIwpBBPU.jpg 5120w`,
                            },
                            `Woman Glasses`
                          ),
                          ...ci(
                            {
                              P6hgzGRDq: { variant: `ifjXWUY_3` },
                              tCRSSoKh7: { variant: `LPwhvULmf` },
                            },
                            p,
                            x
                          ),
                        }),
                      }),
                    }),
                    h(H, {
                      height: 205,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 818) - 0 - 820) / 2 + 205 + 0),
                      ...ci(
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
                        x
                      ),
                      children: h(M, {
                        className: `framer-24ohso-container`,
                        layoutDependency: D,
                        layoutId: `EVeJUPqmQ-container`,
                        nodeId: `EVeJUPqmQ`,
                        rendersWithMotion: !0,
                        scopeId: `MIbiQECTD`,
                        children: h(oi, {
                          CDJ0zN5Ly: Z(
                            {
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              src: `https://framerusercontent.com/images/7zDvQk8tt3iZmAn51N2mbMG6pM.png`,
                              srcSet: `https://framerusercontent.com/images/7zDvQk8tt3iZmAn51N2mbMG6pM.png?scale-down-to=1024 716w,https://framerusercontent.com/images/7zDvQk8tt3iZmAn51N2mbMG6pM.png 896w`,
                            },
                            `Woman Zoom Shot`
                          ),
                          Cn5AbWh3t: Z(
                            {
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              src: `https://framerusercontent.com/images/PxLb8BDiVT7EGmdeXqCrY6sAc.png`,
                              srcSet: `https://framerusercontent.com/images/PxLb8BDiVT7EGmdeXqCrY6sAc.png?scale-down-to=1024 716w,https://framerusercontent.com/images/PxLb8BDiVT7EGmdeXqCrY6sAc.png 896w`,
                            },
                            `Woman Side Pose`
                          ),
                          CoxGWKoXF: Z(
                            {
                              pixelHeight: 1248,
                              pixelWidth: 832,
                              src: `https://framerusercontent.com/images/J1Q74WRyFPKRGnwpdricaO9Ad0.png`,
                              srcSet: `https://framerusercontent.com/images/J1Q74WRyFPKRGnwpdricaO9Ad0.png?scale-down-to=1024 682w,https://framerusercontent.com/images/J1Q74WRyFPKRGnwpdricaO9Ad0.png 832w`,
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
                          WwECqnj4l: Z(
                            {
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              src: `https://framerusercontent.com/images/aPQiidta60oegcTH3cTfAPygffo.png`,
                              srcSet: `https://framerusercontent.com/images/aPQiidta60oegcTH3cTfAPygffo.png?scale-down-to=1024 716w,https://framerusercontent.com/images/aPQiidta60oegcTH3cTfAPygffo.png 896w`,
                            },
                            ``
                          ),
                          ...ci(
                            {
                              P6hgzGRDq: { variant: `qFEdVbZ6h` },
                              tCRSSoKh7: { variant: `ssS_Ygkc0` },
                            },
                            p,
                            x
                          ),
                        }),
                      }),
                    }),
                    h(H, {
                      height: 205,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 818) - 0 - 820) / 2 + 410 + 0),
                      ...ci(
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
                        x
                      ),
                      children: h(M, {
                        className: `framer-h62iav-container`,
                        layoutDependency: D,
                        layoutId: `lgYmqHQbN-container`,
                        nodeId: `lgYmqHQbN`,
                        rendersWithMotion: !0,
                        scopeId: `MIbiQECTD`,
                        children: h(oi, {
                          CDJ0zN5Ly: Z(
                            {
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              src: `https://framerusercontent.com/images/JR6gofaz38J5kX4BQiMcn7nob4.png`,
                              srcSet: `https://framerusercontent.com/images/JR6gofaz38J5kX4BQiMcn7nob4.png?scale-down-to=1024 716w,https://framerusercontent.com/images/JR6gofaz38J5kX4BQiMcn7nob4.png 896w`,
                            },
                            `Woman In The Smoke`
                          ),
                          Cn5AbWh3t: Z(
                            {
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              src: `https://framerusercontent.com/images/XNRYGgOFhpafGTgRg64oNix1dc.png`,
                              srcSet: `https://framerusercontent.com/images/XNRYGgOFhpafGTgRg64oNix1dc.png?scale-down-to=1024 716w,https://framerusercontent.com/images/XNRYGgOFhpafGTgRg64oNix1dc.png 896w`,
                            },
                            `Woman Flowers`
                          ),
                          CoxGWKoXF: Z(
                            {
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              src: `https://framerusercontent.com/images/higLDZKTZifAO3UujqIIRQCVTM.png`,
                              srcSet: `https://framerusercontent.com/images/higLDZKTZifAO3UujqIIRQCVTM.png?scale-down-to=1024 716w,https://framerusercontent.com/images/higLDZKTZifAO3UujqIIRQCVTM.png 896w`,
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
                          WwECqnj4l: Z(
                            {
                              pixelHeight: 1024,
                              pixelWidth: 1024,
                              src: `https://framerusercontent.com/images/Z2NHZ6NBGhRJSliWFhlR4dZSSA8.png`,
                              srcSet: `https://framerusercontent.com/images/Z2NHZ6NBGhRJSliWFhlR4dZSSA8.png?scale-down-to=512 512w,https://framerusercontent.com/images/Z2NHZ6NBGhRJSliWFhlR4dZSSA8.png 1024w`,
                            },
                            `Basketballer`
                          ),
                          ...ci(
                            {
                              P6hgzGRDq: { variant: `qFEdVbZ6h` },
                              tCRSSoKh7: { variant: `ssS_Ygkc0` },
                            },
                            p,
                            x
                          ),
                        }),
                      }),
                    }),
                    h(H, {
                      height: 205,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 818) - 0 - 820) / 2 + 615 + 0),
                      ...ci(
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
                        x
                      ),
                      children: h(M, {
                        className: `framer-6bchpi-container`,
                        layoutDependency: D,
                        layoutId: `wtabExkwK-container`,
                        nodeId: `wtabExkwK`,
                        rendersWithMotion: !0,
                        scopeId: `MIbiQECTD`,
                        children: h(oi, {
                          CDJ0zN5Ly: Z(
                            {
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              src: `https://framerusercontent.com/images/jA1qpVSmkaG1iOloC5NZWxJfofQ.png`,
                              srcSet: `https://framerusercontent.com/images/jA1qpVSmkaG1iOloC5NZWxJfofQ.png?scale-down-to=1024 716w,https://framerusercontent.com/images/jA1qpVSmkaG1iOloC5NZWxJfofQ.png 896w`,
                            },
                            `Man Casual`
                          ),
                          Cn5AbWh3t: Z(
                            {
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              src: `https://framerusercontent.com/images/vhHIJv4PmmgQ1TXOzia8Qs7b5g.png`,
                              srcSet: `https://framerusercontent.com/images/vhHIJv4PmmgQ1TXOzia8Qs7b5g.png?scale-down-to=1024 716w,https://framerusercontent.com/images/vhHIJv4PmmgQ1TXOzia8Qs7b5g.png 896w`,
                            },
                            `Blue Hall`
                          ),
                          CoxGWKoXF: Z(
                            {
                              pixelHeight: 1280,
                              pixelWidth: 896,
                              src: `https://framerusercontent.com/images/gSYRlBgpTRIsra86H4SkUPaCm4E.png`,
                              srcSet: `https://framerusercontent.com/images/gSYRlBgpTRIsra86H4SkUPaCm4E.png?scale-down-to=1024 716w,https://framerusercontent.com/images/gSYRlBgpTRIsra86H4SkUPaCm4E.png 896w`,
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
                          WwECqnj4l: Z(
                            {
                              pixelHeight: 1024,
                              pixelWidth: 1024,
                              src: `https://framerusercontent.com/images/GsvUhduUuKpqabW4bstAZkXg2I.png`,
                              srcSet: `https://framerusercontent.com/images/GsvUhduUuKpqabW4bstAZkXg2I.png?scale-down-to=512 512w,https://framerusercontent.com/images/GsvUhduUuKpqabW4bstAZkXg2I.png 1024w`,
                            },
                            `Car`
                          ),
                          ...ci(
                            {
                              P6hgzGRDq: { variant: `qFEdVbZ6h` },
                              tCRSSoKh7: { variant: `ssS_Ygkc0` },
                            },
                            p,
                            x
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
          `.framer-iMVDZ.framer-1dkxevi, .framer-iMVDZ .framer-1dkxevi { display: block; }`,
          `.framer-iMVDZ.framer-3239ys { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 1440px; }`,
          `.framer-iMVDZ .framer-95swuw-container, .framer-iMVDZ .framer-24ohso-container, .framer-iMVDZ .framer-h62iav-container, .framer-iMVDZ .framer-6bchpi-container { flex: none; height: auto; position: relative; width: 100%; z-index: 6; }`,
          `.framer-iMVDZ.framer-v-1320no6.framer-3239ys { width: 810px; }`,
          `.framer-iMVDZ.framer-v-15yjqej.framer-3239ys { padding: 0px 20px 0px 20px; width: 390px; }`,
        ],
        `framer-iMVDZ`
      )),
      (bi = yi),
      (yi.displayName = `Awards List`),
      (yi.defaultProps = { height: 818, width: 1440 }),
      P(yi, {
        variant: {
          options: [`cGfMLjpbo`, `P6hgzGRDq`, `tCRSSoKh7`],
          optionTitles: [`XL`, `M`, `S`],
          title: `Variant`,
          type: L.Enum,
        },
      }),
      j(yi, [{ explicitInter: !0, fonts: [] }, ...li], { supportsExplicitInterCodegen: !0 }));
  }),
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni = e(() => {
    (y(),
      N(),
      D(),
      r(),
      Oe(),
      Ne(),
      we(),
      (Si = F(Ae)),
      (Ci = `framer-2CFza`),
      (wi = { VhoKG8QEP: `framer-v-vev6gr` }),
      (Ti = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ei = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Di = ({ value: e, children: t }) => {
        let n = c(w),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (Oi = C.create(s)),
      (ki = ({
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
            alt: ``,
            pixelHeight: 87,
            pixelWidth: 230,
            src: `https://framerusercontent.com/images/liDp6RqOmZpoiyriU2da9i9ZRNM.png`,
          },
        GDX03WB2s: o ?? c.GDX03WB2s ?? `Senior Designer`,
        PXhdA1o5u:
          e ??
          c.PXhdA1o5u ??
          `"Akihiko elevated every layer of our brand’s online presence. From motion details to structural layout, every piece felt crafted and intentional. The site not only looked beautiful but performed well too — and the entire collaboration process was smooth."`,
        SfDOWebi7: i ?? c.SfDOWebi7 ?? `Karizmia`,
        TQKawNzuI: a ??
          c.TQKawNzuI ?? {
            alt: ``,
            pixelHeight: 1280,
            pixelWidth: 896,
            src: `https://framerusercontent.com/images/yUjsrtPDoJaAyLT8KHf8xhtWa8A.png?scale-down-to=512`,
            srcSet: `https://framerusercontent.com/images/yUjsrtPDoJaAyLT8KHf8xhtWa8A.png?scale-down-to=1024 716w,https://framerusercontent.com/images/yUjsrtPDoJaAyLT8KHf8xhtWa8A.png 896w`,
          },
      })),
      (Ai = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ji = K(
        f(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = m(),
            { activeLocale: a, setLocale: o } = V();
          U();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              PXhdA1o5u: f,
              TQKawNzuI: p,
              SfDOWebi7: g,
              GDX03WB2s: y,
              CE9vq930d: b,
              ...x
            } = ki(e),
            {
              baseVariant: S,
              classNames: ee,
              clearLoadingGesture: w,
              gestureHandlers: T,
              gestureVariant: D,
              isLoading: O,
              setGestureState: k,
              setVariant: A,
              variants: j,
            } = R({ defaultVariant: `VhoKG8QEP`, ref: r, variant: d, variantClassNames: wi }),
            N = Ai(e, j),
            te = B(Ci, Le, De);
          return h(E, {
            id: u ?? i,
            children: h(Oi, {
              animate: j,
              initial: !1,
              children: h(Di, {
                value: Ti,
                children: v(C.div, {
                  ...x,
                  ...T,
                  className: B(te, `framer-vev6gr`, l, ee),
                  'data-border': !0,
                  'data-framer-name': `Primary`,
                  layoutDependency: N,
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
                    h(C.div, {
                      className: `framer-1nn2wo3`,
                      'data-framer-name': `Top`,
                      layoutDependency: N,
                      layoutId: `Hmy3vptUg`,
                      children: h(C.div, {
                        className: `framer-1j7mtj2`,
                        'data-framer-name': `Body Text`,
                        layoutDependency: N,
                        layoutId: `NpQe3AJO6`,
                        children: h(G, {
                          __fromCanvasComponent: !0,
                          children: h(s, {
                            children: h(C.p, {
                              className: `framer-styles-preset-14w8e6o`,
                              'data-styles-preset': `FsS03h6Vk`,
                              children: `“We're all about taking a 360-degree approach, bringing all our services under the same umbrella to create communication.We're all about taking a 360-degree approach, bringing all our services under the same umbrella to create communication.”`,
                            }),
                          }),
                          className: `framer-1kkewbg`,
                          'data-framer-name': `Text`,
                          fonts: [`Inter`],
                          layoutDependency: N,
                          layoutId: `bgTwk2u95`,
                          style: { '--framer-paragraph-spacing': `0px` },
                          text: f,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                    v(C.div, {
                      className: `framer-1npv4am`,
                      'data-framer-name': `Bottom`,
                      layoutDependency: N,
                      layoutId: `eO3xasijZ`,
                      children: [
                        h(C.div, {
                          className: `framer-1phmwxj`,
                          'data-framer-name': `Line`,
                          layoutDependency: N,
                          layoutId: `tVUzTO0AT`,
                          style: {
                            backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`,
                          },
                        }),
                        v(C.div, {
                          className: `framer-kyvaz1`,
                          'data-framer-name': `User Content`,
                          layoutDependency: N,
                          layoutId: `Hc2C_4QYP`,
                          children: [
                            h(W, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                pixelHeight: 1280,
                                pixelWidth: 896,
                                sizes: `50px`,
                                ...Ei(p),
                              },
                              className: `framer-1ndln84`,
                              'data-framer-name': `User Image`,
                              layoutDependency: N,
                              layoutId: `XOkqmhLrA`,
                              style: {
                                borderBottomLeftRadius: 5,
                                borderBottomRightRadius: 5,
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5,
                              },
                            }),
                            v(C.div, {
                              className: `framer-1r42972`,
                              'data-framer-name': `User Details`,
                              layoutDependency: N,
                              layoutId: `hJZp2Yqbm`,
                              children: [
                                v(C.div, {
                                  className: `framer-ti0ea7`,
                                  'data-framer-name': `Name`,
                                  layoutDependency: N,
                                  layoutId: `ZxN61Lxjj`,
                                  children: [
                                    h(G, {
                                      __fromCanvasComponent: !0,
                                      children: h(s, {
                                        children: h(C.p, {
                                          className: `framer-styles-preset-14w8e6o`,
                                          'data-styles-preset': `FsS03h6Vk`,
                                          children: `Karizmia`,
                                        }),
                                      }),
                                      className: `framer-j4uuzi`,
                                      'data-framer-name': `Text`,
                                      fonts: [`Inter`],
                                      layoutDependency: N,
                                      layoutId: `hNx78IYnS`,
                                      style: { '--framer-paragraph-spacing': `0px` },
                                      text: g,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    h(H, {
                                      children: h(M, {
                                        className: `framer-k1hfd-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        layoutDependency: N,
                                        layoutId: `f96cuMGky-container`,
                                        nodeId: `f96cuMGky`,
                                        rendersWithMotion: !0,
                                        scopeId: `PSDgyKIIH`,
                                        children: h(Ae, {
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
                                h(C.div, {
                                  className: `framer-1l16y93`,
                                  'data-framer-name': `Role`,
                                  layoutDependency: N,
                                  layoutId: `S3WLPuCsc`,
                                  children: h(G, {
                                    __fromCanvasComponent: !0,
                                    children: h(s, {
                                      children: h(C.p, {
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
                                    layoutDependency: N,
                                    layoutId: `PZfm3G1Ir`,
                                    style: {
                                      '--extracted-r6o4lv': `var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153))`,
                                      '--framer-paragraph-spacing': `0px`,
                                    },
                                    text: y,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            h(W, {
                              background: {
                                alt: ``,
                                fit: `fit`,
                                intrinsicHeight: 43.5,
                                intrinsicWidth: 115,
                                pixelHeight: 87,
                                pixelWidth: 230,
                                sizes: `65px`,
                                ...Ei(b),
                                positionX: `center`,
                                positionY: `center`,
                              },
                              className: `framer-1hwamcv`,
                              'data-framer-name': `Logo`,
                              layoutDependency: N,
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
          `.framer-2CFza.framer-z3y36, .framer-2CFza .framer-z3y36 { display: block; }`,
          `.framer-2CFza.framer-vev6gr { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px 20px 24px 20px; position: relative; width: 370px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-2CFza .framer-1nn2wo3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-2CFza .framer-1j7mtj2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-2CFza .framer-1kkewbg { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-2CFza .framer-1npv4am { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-2CFza .framer-1phmwxj { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }`,
          `.framer-2CFza .framer-kyvaz1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 10px 0px 0px; position: relative; width: 100%; }`,
          `.framer-2CFza .framer-1ndln84 { flex: none; height: 50px; overflow: hidden; position: relative; width: 50px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-2CFza .framer-1r42972 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: wrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-2CFza .framer-ti0ea7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 10px 5px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-2CFza .framer-j4uuzi { flex: none; height: auto; max-width: 470px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }`,
          `.framer-2CFza .framer-k1hfd-container { flex: none; height: 20px; position: relative; width: 20px; }`,
          `.framer-2CFza .framer-1l16y93 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 470px; overflow: hidden; padding: 3px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-2CFza .framer-1dmvvwk { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-2CFza .framer-1hwamcv { aspect-ratio: 2.6436781609195403 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 25px); overflow: visible; position: relative; width: 65px; }`,
          ...Pe,
          ...Te,
          `.framer-2CFza[data-border="true"]::after, .framer-2CFza [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-2CFza`
      )),
      (Mi = ji),
      (ji.displayName = `Testimonial Card`),
      (ji.defaultProps = { height: 321.5, width: 370 }),
      P(ji, {
        PXhdA1o5u: {
          defaultValue: `"Akihiko elevated every layer of our brand’s online presence. From motion details to structural layout, every piece felt crafted and intentional. The site not only looked beautiful but performed well too — and the entire collaboration process was smooth."`,
          displayTextArea: !0,
          title: `Body Text`,
          type: L.String,
        },
        TQKawNzuI: {
          __defaultAssetReference: `data:framer/asset-reference,yUjsrtPDoJaAyLT8KHf8xhtWa8A.png?originalFilename=visualelectric-1745309981139.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,yUjsrtPDoJaAyLT8KHf8xhtWa8A.png?originalFilename=visualelectric-1745309981139.png&preferredSize=auto`,
          },
          title: `Profile`,
          type: L.ResponsiveImage,
        },
        SfDOWebi7: { defaultValue: `Karizmia`, displayTextArea: !1, title: `Name`, type: L.String },
        GDX03WB2s: {
          defaultValue: `Senior Designer`,
          displayTextArea: !1,
          title: `Role`,
          type: L.String,
        },
        CE9vq930d: {
          __defaultAssetReference: `data:framer/asset-reference,liDp6RqOmZpoiyriU2da9i9ZRNM.png?originalFilename=675d4cbc10e6dcb01229787c_Cairo+Logo+Black+2.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,liDp6RqOmZpoiyriU2da9i9ZRNM.png?originalFilename=675d4cbc10e6dcb01229787c_Cairo+Logo+Black+2.png&preferredSize=auto`,
          },
          title: `Logo`,
          type: L.ResponsiveImage,
        },
      }),
      j(
        ji,
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
          ...Si,
          ...J(Ie),
          ...J(Ee),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Pi(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki = e(() => {
    (y(),
      N(),
      D(),
      r(),
      Ne(),
      we(),
      (Fi = [`RDKzUs_Fz`, `cSNZa7lRK`, `LVXTmyQFQ`, `MkgJQUnPV`]),
      (Ii = `framer-EhULR`),
      (Li = {
        cSNZa7lRK: `framer-v-szcp6t`,
        LVXTmyQFQ: `framer-v-x3qdnr`,
        MkgJQUnPV: `framer-v-tnd4c0`,
        RDKzUs_Fz: `framer-v-g2q9aj`,
      }),
      (Ri = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (zi = ({ value: e, children: t }) => {
        let n = c(w),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (Bi = C.create(s)),
      (Vi = {
        'S Primary': `LVXTmyQFQ`,
        'S Secondary': `MkgJQUnPV`,
        'XL Primary': `RDKzUs_Fz`,
        'XL Secondary': `cSNZa7lRK`,
      }),
      (Hi = ({ bodyText: e, height: t, id: n, rollNo: r, service: i, width: a, ...o }) => ({
        ...o,
        bGkBZIVtS:
          e ??
          o.bGkBZIVtS ??
          `We guide every visual decision from start to finish, ensuring clarity, emotion, and impact across every touchpoint.`,
        mm2TadyHO: r ?? o.mm2TadyHO ?? `01`,
        Pbe6da3x3: i ?? o.Pbe6da3x3 ?? `Art Direction`,
        variant: Vi[o.variant] ?? o.variant ?? `RDKzUs_Fz`,
      })),
      (Ui = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Wi = K(
        f(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = m(),
            { activeLocale: a, setLocale: o } = V();
          U();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              mm2TadyHO: f,
              Pbe6da3x3: p,
              bGkBZIVtS: g,
              ...y
            } = Hi(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: ee,
              gestureVariant: w,
              isLoading: T,
              setGestureState: D,
              setVariant: O,
              variants: k,
            } = R({
              cycleOrder: Fi,
              defaultVariant: `RDKzUs_Fz`,
              ref: r,
              variant: d,
              variantClassNames: Li,
            }),
            A = Ui(e, k),
            j = B(Ii, De, Le),
            M = () => ![`LVXTmyQFQ`, `MkgJQUnPV`].includes(b),
            N = () => !![`cSNZa7lRK`, `MkgJQUnPV`].includes(b);
          return h(E, {
            id: u ?? i,
            children: h(Bi, {
              animate: k,
              initial: !1,
              children: h(zi, {
                value: Ri,
                children: v(C.div, {
                  ...y,
                  ...ee,
                  className: B(j, `framer-g2q9aj`, l, x),
                  'data-framer-name': `XL Primary`,
                  layoutDependency: A,
                  layoutId: `RDKzUs_Fz`,
                  ref: r,
                  style: { ...c },
                  ...Pi(
                    {
                      cSNZa7lRK: { 'data-framer-name': `XL Secondary` },
                      LVXTmyQFQ: { 'data-framer-name': `S Primary` },
                      MkgJQUnPV: { 'data-framer-name': `S Secondary` },
                    },
                    b,
                    w
                  ),
                  children: [
                    h(C.div, {
                      className: `framer-1it428z`,
                      'data-framer-name': `Line`,
                      layoutDependency: A,
                      layoutId: `DfkpTCT8T`,
                      style: {
                        backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`,
                      },
                    }),
                    v(C.div, {
                      className: `framer-107pdi9`,
                      'data-framer-name': `Content`,
                      layoutDependency: A,
                      layoutId: `t5soOghr4`,
                      children: [
                        v(C.div, {
                          className: `framer-l6wrfx`,
                          'data-framer-name': `Left`,
                          layoutDependency: A,
                          layoutId: `xll6TLkPf`,
                          children: [
                            M() &&
                              h(C.div, {
                                className: `framer-o0po6w`,
                                'data-framer-name': `Roll No`,
                                layoutDependency: A,
                                layoutId: `Diwx5j1_P`,
                                children: h(G, {
                                  __fromCanvasComponent: !0,
                                  children: h(s, {
                                    children: h(C.p, {
                                      className: `framer-styles-preset-8vm16z`,
                                      'data-styles-preset': `uDh9bONtj`,
                                      children: `01`,
                                    }),
                                  }),
                                  className: `framer-1uch2fs`,
                                  'data-framer-name': `Text`,
                                  fonts: [`Inter`],
                                  layoutDependency: A,
                                  layoutId: `r6sS4xMY3`,
                                  style: { '--framer-paragraph-spacing': `0px` },
                                  text: f,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            h(G, {
                              __fromCanvasComponent: !0,
                              children: h(s, {
                                children: h(C.p, {
                                  className: `framer-styles-preset-14w8e6o`,
                                  'data-styles-preset': `FsS03h6Vk`,
                                  children: `Art Direction`,
                                }),
                              }),
                              className: `framer-77ym80`,
                              'data-framer-name': `Text`,
                              fonts: [`Inter`],
                              layoutDependency: A,
                              layoutId: `jAR4zM27S`,
                              style: { '--framer-paragraph-spacing': `0px` },
                              text: p,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        h(C.div, {
                          className: `framer-1sfns59`,
                          'data-framer-name': `Body Text`,
                          layoutDependency: A,
                          layoutId: `UZNXli93y`,
                          children: h(G, {
                            __fromCanvasComponent: !0,
                            children: h(s, {
                              children: h(C.p, {
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
                            layoutDependency: A,
                            layoutId: `BZxFxaL8h`,
                            style: {
                              '--extracted-r6o4lv': `var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153))`,
                              '--framer-paragraph-spacing': `0px`,
                            },
                            text: g,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    N() &&
                      h(C.div, {
                        className: `framer-zhh7a`,
                        'data-framer-name': `Line`,
                        layoutDependency: A,
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
          `.framer-EhULR.framer-10cw8ys, .framer-EhULR .framer-10cw8ys { display: block; }`,
          `.framer-EhULR.framer-g2q9aj { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 40px 0px; position: relative; width: 869px; }`,
          `.framer-EhULR .framer-1it428z, .framer-EhULR .framer-zhh7a { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }`,
          `.framer-EhULR .framer-107pdi9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 227px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-EhULR .framer-l6wrfx { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 124px; height: min-content; justify-content: center; max-width: 300px; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-EhULR .framer-o0po6w { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 30px; overflow: hidden; padding: 3px 0px 0px 0px; position: relative; width: 1px; }`,
          `.framer-EhULR .framer-1uch2fs, .framer-EhULR .framer-gz3nsm { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-EhULR .framer-77ym80 { flex: 1 0 0px; height: auto; max-width: 312px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-EhULR .framer-1sfns59 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 320px; overflow: hidden; padding: 3px 0px 0px 0px; position: relative; width: 1px; }`,
          `.framer-EhULR.framer-v-szcp6t.framer-g2q9aj { padding: 0px; }`,
          `.framer-EhULR.framer-v-szcp6t .framer-1it428z, .framer-EhULR.framer-v-tnd4c0 .framer-1it428z { order: 0; }`,
          `.framer-EhULR.framer-v-szcp6t .framer-107pdi9 { order: 1; }`,
          `.framer-EhULR.framer-v-szcp6t .framer-zhh7a, .framer-EhULR.framer-v-tnd4c0 .framer-zhh7a { order: 2; }`,
          `.framer-EhULR.framer-v-x3qdnr.framer-g2q9aj { width: 390px; }`,
          `.framer-EhULR.framer-v-x3qdnr .framer-107pdi9 { gap: 40px; }`,
          `.framer-EhULR.framer-v-tnd4c0.framer-g2q9aj { padding: 0px; width: 390px; }`,
          `.framer-EhULR.framer-v-tnd4c0 .framer-107pdi9 { gap: 40px; order: 1; }`,
          ...Te,
          ...Pe,
        ],
        `framer-EhULR`
      )),
      (Gi = Wi),
      (Wi.displayName = `Service Card`),
      (Wi.defaultProps = { height: 135, width: 869 }),
      P(Wi, {
        variant: {
          options: [`RDKzUs_Fz`, `cSNZa7lRK`, `LVXTmyQFQ`, `MkgJQUnPV`],
          optionTitles: [`XL Primary`, `XL Secondary`, `S Primary`, `S Secondary`],
          title: `Variant`,
          type: L.Enum,
        },
        mm2TadyHO: { defaultValue: `01`, displayTextArea: !1, title: `Roll No`, type: L.String },
        Pbe6da3x3: {
          defaultValue: `Art Direction`,
          displayTextArea: !1,
          title: `Service`,
          type: L.String,
        },
        bGkBZIVtS: {
          defaultValue: `We guide every visual decision from start to finish, ensuring clarity, emotion, and impact across every touchpoint.`,
          displayTextArea: !0,
          title: `Body Text`,
          type: L.String,
        },
      }),
      j(
        Wi,
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
          ...J(Ee),
          ...J(Ie),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function qi(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa,
  oa = e(() => {
    (y(),
      N(),
      D(),
      r(),
      Ki(),
      (Ji = F(Gi)),
      (Yi = [`K8RDTGEIl`, `IGLDqE_JA`, `m85hHFNAk`]),
      (Xi = `framer-0Iuzr`),
      (Zi = {
        IGLDqE_JA: `framer-v-1l2jgsa`,
        K8RDTGEIl: `framer-v-5wkc61`,
        m85hHFNAk: `framer-v-1mj398i`,
      }),
      (Qi = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      ($i = ({ value: e, children: t }) => {
        let n = c(w),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (ea = C.create(s)),
      (ta = { Primary: `K8RDTGEIl`, Secondary: `IGLDqE_JA`, Tertiary: `m85hHFNAk` }),
      (na = ({
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
        variant: ta[s.variant] ?? s.variant ?? `K8RDTGEIl`,
        wNMx0LJLM: n ?? s.wNMx0LJLM,
      })),
      (ra = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ia = K(
        f(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = m(),
            { activeLocale: a, setLocale: o } = V(),
            s = U(),
            {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              lVTXes8OT: f,
              nM49zxtOZ: p,
              wNMx0LJLM: g,
              h2QFIa86Z: y,
              ...b
            } = na(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: ee,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: D,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = R({
              cycleOrder: Yi,
              defaultVariant: `K8RDTGEIl`,
              ref: r,
              variant: d,
              variantClassNames: Zi,
            }),
            j = ra(e, A),
            N = B(Xi);
          return h(E, {
            id: u ?? i,
            children: h(ea, {
              animate: A,
              initial: !1,
              children: h($i, {
                value: Qi,
                children: v(C.div, {
                  ...b,
                  ...w,
                  className: B(N, `framer-5wkc61`, l, S),
                  'data-framer-name': `Primary`,
                  layoutDependency: j,
                  layoutId: `K8RDTGEIl`,
                  ref: r,
                  style: { ...c },
                  ...qi(
                    {
                      IGLDqE_JA: { 'data-framer-name': `Secondary` },
                      m85hHFNAk: { 'data-framer-name': `Tertiary` },
                    },
                    x,
                    T
                  ),
                  children: [
                    h(H, {
                      height: 135,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 541) - 0 - 540) / 2 + 0 + 0),
                      ...qi(
                        {
                          IGLDqE_JA: { width: `calc(${s?.width || `100vw`} - 40px)` },
                          m85hHFNAk: {
                            y: (s?.y || 0) + 0 + (((s?.height || 200) - 0 - 540) / 2 + 0 + 0),
                          },
                        },
                        x,
                        T
                      ),
                      children: h(M, {
                        className: `framer-1lwd9lz-container`,
                        'data-framer-cursor': f,
                        layoutDependency: j,
                        layoutId: `oUIRWjK0G-container`,
                        nodeId: `oUIRWjK0G`,
                        rendersWithMotion: !0,
                        scopeId: `QdPTPGk0T`,
                        ...qi(
                          {
                            IGLDqE_JA: { 'data-framer-cursor': void 0 },
                            m85hHFNAk: { 'data-framer-cursor': void 0 },
                          },
                          x,
                          T
                        ),
                        children: h(Gi, {
                          bGkBZIVtS: `We guide every visual decision from start to finish, ensuring clarity, emotion, and impact across every touchpoint.`,
                          height: `100%`,
                          id: `oUIRWjK0G`,
                          layoutId: `oUIRWjK0G`,
                          mm2TadyHO: `01`,
                          Pbe6da3x3: `Art Direction`,
                          style: { width: `100%` },
                          variant: `RDKzUs_Fz`,
                          width: `100%`,
                          ...qi(
                            {
                              IGLDqE_JA: { variant: `LVXTmyQFQ` },
                              m85hHFNAk: { variant: `LVXTmyQFQ` },
                            },
                            x,
                            T
                          ),
                        }),
                      }),
                    }),
                    h(H, {
                      height: 135,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 541) - 0 - 540) / 2 + 135 + 0),
                      ...qi(
                        {
                          IGLDqE_JA: { width: `calc(${s?.width || `100vw`} - 40px)` },
                          m85hHFNAk: {
                            y: (s?.y || 0) + 0 + (((s?.height || 200) - 0 - 540) / 2 + 135 + 0),
                          },
                        },
                        x,
                        T
                      ),
                      children: h(M, {
                        className: `framer-1ruwwko-container`,
                        'data-framer-cursor': p,
                        layoutDependency: j,
                        layoutId: `CEZAmcpKh-container`,
                        nodeId: `CEZAmcpKh`,
                        rendersWithMotion: !0,
                        scopeId: `QdPTPGk0T`,
                        ...qi(
                          {
                            IGLDqE_JA: { 'data-framer-cursor': void 0 },
                            m85hHFNAk: { 'data-framer-cursor': void 0 },
                          },
                          x,
                          T
                        ),
                        children: h(Gi, {
                          bGkBZIVtS: `From strategy to execution, we shape consistent brand systems that speak clearly and feel uniquely ownable.`,
                          height: `100%`,
                          id: `CEZAmcpKh`,
                          layoutId: `CEZAmcpKh`,
                          mm2TadyHO: `02`,
                          Pbe6da3x3: `Brand Identity`,
                          style: { width: `100%` },
                          variant: `RDKzUs_Fz`,
                          width: `100%`,
                          ...qi(
                            {
                              IGLDqE_JA: { variant: `LVXTmyQFQ` },
                              m85hHFNAk: { variant: `LVXTmyQFQ` },
                            },
                            x,
                            T
                          ),
                        }),
                      }),
                    }),
                    h(H, {
                      height: 135,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 541) - 0 - 540) / 2 + 270 + 0),
                      ...qi(
                        {
                          IGLDqE_JA: { width: `calc(${s?.width || `100vw`} - 40px)` },
                          m85hHFNAk: {
                            y: (s?.y || 0) + 0 + (((s?.height || 200) - 0 - 540) / 2 + 270 + 0),
                          },
                        },
                        x,
                        T
                      ),
                      children: h(M, {
                        className: `framer-1pwncit-container`,
                        'data-framer-cursor': g,
                        layoutDependency: j,
                        layoutId: `aavA4t_AC-container`,
                        nodeId: `aavA4t_AC`,
                        rendersWithMotion: !0,
                        scopeId: `QdPTPGk0T`,
                        ...qi(
                          {
                            IGLDqE_JA: { 'data-framer-cursor': void 0 },
                            m85hHFNAk: { 'data-framer-cursor': void 0 },
                          },
                          x,
                          T
                        ),
                        children: h(Gi, {
                          bGkBZIVtS: `We use motion as a design tool — adding clarity, rhythm, and energy to digital experiences with intention.`,
                          height: `100%`,
                          id: `aavA4t_AC`,
                          layoutId: `aavA4t_AC`,
                          mm2TadyHO: `03`,
                          Pbe6da3x3: `Motion Direction`,
                          style: { width: `100%` },
                          variant: `RDKzUs_Fz`,
                          width: `100%`,
                          ...qi(
                            {
                              IGLDqE_JA: { variant: `LVXTmyQFQ` },
                              m85hHFNAk: { variant: `LVXTmyQFQ` },
                            },
                            x,
                            T
                          ),
                        }),
                      }),
                    }),
                    h(H, {
                      height: 135,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 541) - 0 - 540) / 2 + 405 + 0),
                      ...qi(
                        {
                          IGLDqE_JA: { width: `calc(${s?.width || `100vw`} - 40px)` },
                          m85hHFNAk: {
                            y: (s?.y || 0) + 0 + (((s?.height || 200) - 0 - 540) / 2 + 405 + 0),
                          },
                        },
                        x,
                        T
                      ),
                      children: h(M, {
                        className: `framer-sauztn-container`,
                        'data-framer-cursor': y,
                        layoutDependency: j,
                        layoutId: `EDVQR9DcI-container`,
                        nodeId: `EDVQR9DcI`,
                        rendersWithMotion: !0,
                        scopeId: `QdPTPGk0T`,
                        ...qi(
                          {
                            IGLDqE_JA: { 'data-framer-cursor': void 0 },
                            m85hHFNAk: { 'data-framer-cursor': void 0 },
                          },
                          x,
                          T
                        ),
                        children: h(Gi, {
                          bGkBZIVtS: `Design meets execution with real-time, scalable websites — all crafted natively inside Framer for speed and precision.`,
                          height: `100%`,
                          id: `EDVQR9DcI`,
                          layoutId: `EDVQR9DcI`,
                          mm2TadyHO: `04`,
                          Pbe6da3x3: `Framer Sites`,
                          style: { width: `100%` },
                          variant: `cSNZa7lRK`,
                          width: `100%`,
                          ...qi(
                            {
                              IGLDqE_JA: { variant: `MkgJQUnPV` },
                              m85hHFNAk: { variant: `MkgJQUnPV` },
                            },
                            x,
                            T
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
      (aa = ia),
      (ia.displayName = `Service List`),
      (ia.defaultProps = { height: 541, width: 893 }),
      P(ia, {
        variant: {
          options: [`K8RDTGEIl`, `IGLDqE_JA`, `m85hHFNAk`],
          optionTitles: [`Primary`, `Secondary`, `Tertiary`],
          title: `Variant`,
          type: L.Enum,
        },
        lVTXes8OT: { title: `Cursor 1`, type: L.CustomCursor },
        nM49zxtOZ: { title: `Cursor 2`, type: L.CustomCursor },
        wNMx0LJLM: { title: `Cursor 3`, type: L.CustomCursor },
        h2QFIa86Z: { title: `Cursor 4`, type: L.CustomCursor },
      }),
      j(ia, [{ explicitInter: !0, fonts: [] }, ...Ji], { supportsExplicitInterCodegen: !0 }));
  });
function sa(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ca,
  la,
  ua,
  da,
  fa,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya = e(() => {
    (y(),
      N(),
      D(),
      r(),
      Cn(),
      (ca = [`jwXtXigQo`, `DVdht7Dg0`, `dk0rLLXb2`, `H6SNXfFLK`]),
      (la = `framer-3MqPs`),
      (ua = {
        dk0rLLXb2: `framer-v-xo1mi3`,
        DVdht7Dg0: `framer-v-1ovr5ew`,
        H6SNXfFLK: `framer-v-1orii42`,
        jwXtXigQo: `framer-v-1l3w08a`,
      }),
      (da = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (fa = ({ value: e, children: t }) => {
        let n = c(w),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (pa = C.create(s)),
      (ma = {
        'S Primary': `dk0rLLXb2`,
        'S Secondary': `H6SNXfFLK`,
        'XL Primary': `jwXtXigQo`,
        'XL Secondary': `DVdht7Dg0`,
      }),
      (ha = ({ _2023: e, company: t, height: n, id: r, location: i, role: a, width: o, ...s }) => ({
        ...s,
        LkF37SPSL: e ?? s.LkF37SPSL ?? `Art Direction`,
        PKW0WF81w: t ?? s.PKW0WF81w ?? `Akihiko Co.`,
        variant: ma[s.variant] ?? s.variant ?? `jwXtXigQo`,
        wEubQ5Rgj: i ?? s.wEubQ5Rgj ?? `Tokyo`,
        Xh_EsYKat: a ?? s.Xh_EsYKat ?? `Art Direction`,
      })),
      (ga = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (_a = K(
        f(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = m(),
            { activeLocale: a, setLocale: o } = V();
          U();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              PKW0WF81w: f,
              LkF37SPSL: p,
              Xh_EsYKat: g,
              wEubQ5Rgj: y,
              ...b
            } = ha(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: ee,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: D,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = R({
              cycleOrder: ca,
              defaultVariant: `jwXtXigQo`,
              ref: r,
              variant: d,
              variantClassNames: ua,
            }),
            j = ga(e, A),
            M = B(la, Sn),
            N = () => !![`DVdht7Dg0`, `H6SNXfFLK`].includes(x);
          return h(E, {
            id: u ?? i,
            children: h(pa, {
              animate: A,
              initial: !1,
              children: h(fa, {
                value: da,
                children: v(C.div, {
                  ...b,
                  ...w,
                  className: B(M, `framer-1l3w08a`, l, S),
                  'data-framer-name': `XL Primary`,
                  layoutDependency: j,
                  layoutId: `jwXtXigQo`,
                  ref: r,
                  style: { ...c },
                  ...sa(
                    {
                      dk0rLLXb2: { 'data-framer-name': `S Primary` },
                      DVdht7Dg0: { 'data-framer-name': `XL Secondary` },
                      H6SNXfFLK: { 'data-framer-name': `S Secondary` },
                    },
                    x,
                    T
                  ),
                  children: [
                    h(C.div, {
                      className: `framer-bbal8w`,
                      'data-framer-name': `Line`,
                      layoutDependency: j,
                      layoutId: `Olih6GvHe`,
                      style: {
                        backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`,
                      },
                    }),
                    N() &&
                      h(C.div, {
                        className: `framer-1g1qxmv`,
                        'data-framer-name': `Line`,
                        layoutDependency: j,
                        layoutId: `VToQjDrxR`,
                        style: {
                          backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`,
                        },
                      }),
                    v(C.div, {
                      className: `framer-15mx0bf`,
                      'data-framer-name': `Content`,
                      layoutDependency: j,
                      layoutId: `qh14vuoky`,
                      children: [
                        v(C.div, {
                          className: `framer-1ssoti0`,
                          'data-framer-name': `Left`,
                          layoutDependency: j,
                          layoutId: `ydbhRnZ1r`,
                          children: [
                            h(C.div, {
                              className: `framer-193nh8n`,
                              'data-framer-name': `Company`,
                              layoutDependency: j,
                              layoutId: `IV6JxSwxs`,
                              children: h(G, {
                                __fromCanvasComponent: !0,
                                children: h(s, {
                                  children: h(C.p, {
                                    className: `framer-styles-preset-d3a9yv`,
                                    'data-styles-preset': `gVvtfPznu`,
                                    children: `Art Direction`,
                                  }),
                                }),
                                className: `framer-1xa879l`,
                                'data-framer-name': `Text`,
                                fonts: [`Inter`],
                                layoutDependency: j,
                                layoutId: `cowhcNMwT`,
                                style: { '--framer-paragraph-spacing': `0px` },
                                text: f,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            h(C.div, {
                              className: `framer-1buv54b`,
                              'data-framer-name': `Year`,
                              layoutDependency: j,
                              layoutId: `DhhQeNLQ4`,
                              children: h(G, {
                                __fromCanvasComponent: !0,
                                children: h(s, {
                                  children: h(C.p, {
                                    className: `framer-styles-preset-d3a9yv`,
                                    'data-styles-preset': `gVvtfPznu`,
                                    children: `Art Direction`,
                                  }),
                                }),
                                className: `framer-8iztlc`,
                                'data-framer-name': `Text`,
                                fonts: [`Inter`],
                                layoutDependency: j,
                                layoutId: `I69v7uP5D`,
                                style: { '--framer-paragraph-spacing': `0px` },
                                text: p,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...sa(
                                  {
                                    dk0rLLXb2: {
                                      children: h(s, {
                                        children: h(C.p, {
                                          className: `framer-styles-preset-d3a9yv`,
                                          'data-styles-preset': `gVvtfPznu`,
                                          style: { '--framer-text-alignment': `right` },
                                          children: `Art Direction`,
                                        }),
                                      }),
                                    },
                                    H6SNXfFLK: {
                                      children: h(s, {
                                        children: h(C.p, {
                                          className: `framer-styles-preset-d3a9yv`,
                                          'data-styles-preset': `gVvtfPznu`,
                                          style: { '--framer-text-alignment': `right` },
                                          children: `Art Direction`,
                                        }),
                                      }),
                                    },
                                  },
                                  x,
                                  T
                                ),
                              }),
                            }),
                          ],
                        }),
                        v(C.div, {
                          className: `framer-wgw9gi`,
                          'data-framer-name': `Right`,
                          layoutDependency: j,
                          layoutId: `GlFviHLc4`,
                          children: [
                            h(C.div, {
                              className: `framer-1je8max`,
                              'data-framer-name': `Role`,
                              layoutDependency: j,
                              layoutId: `h6wXJ_kGV`,
                              children: h(G, {
                                __fromCanvasComponent: !0,
                                children: h(s, {
                                  children: h(C.p, {
                                    className: `framer-styles-preset-d3a9yv`,
                                    'data-styles-preset': `gVvtfPznu`,
                                    children: `Art Direction`,
                                  }),
                                }),
                                className: `framer-ih2l1`,
                                'data-framer-name': `Text`,
                                fonts: [`Inter`],
                                layoutDependency: j,
                                layoutId: `g2vEJCM4m`,
                                style: { '--framer-paragraph-spacing': `0px` },
                                text: g,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            h(C.div, {
                              className: `framer-1x1fpy4`,
                              'data-framer-name': `Location`,
                              layoutDependency: j,
                              layoutId: `xyPwaDiTS`,
                              children: h(G, {
                                __fromCanvasComponent: !0,
                                children: h(s, {
                                  children: h(C.p, {
                                    className: `framer-styles-preset-d3a9yv`,
                                    'data-styles-preset': `gVvtfPznu`,
                                    style: { '--framer-text-alignment': `right` },
                                    children: `Tokyo`,
                                  }),
                                }),
                                className: `framer-3tqjgn`,
                                'data-framer-name': `Text`,
                                fonts: [`Inter`],
                                layoutDependency: j,
                                layoutId: `Rrbm0Gk_e`,
                                style: { '--framer-paragraph-spacing': `0px` },
                                text: y,
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
          ...xn,
        ],
        `framer-3MqPs`
      )),
      (va = _a),
      (_a.displayName = `Experience Card`),
      (_a.defaultProps = { height: 38, width: 1392 }),
      P(_a, {
        variant: {
          options: [`jwXtXigQo`, `DVdht7Dg0`, `dk0rLLXb2`, `H6SNXfFLK`],
          optionTitles: [`XL Primary`, `XL Secondary`, `S Primary`, `S Secondary`],
          title: `Variant`,
          type: L.Enum,
        },
        PKW0WF81w: {
          defaultValue: `Akihiko Co.`,
          displayTextArea: !1,
          title: `Company`,
          type: L.String,
        },
        LkF37SPSL: {
          defaultValue: `Art Direction`,
          displayTextArea: !1,
          title: `2023`,
          type: L.String,
        },
        Xh_EsYKat: {
          defaultValue: `Art Direction`,
          displayTextArea: !1,
          title: `Role`,
          type: L.String,
        },
        wEubQ5Rgj: { defaultValue: `Tokyo`, title: `Location`, type: L.String },
      }),
      j(
        _a,
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
          ...J(bn),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function ba(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na = e(() => {
    (y(),
      N(),
      D(),
      r(),
      ya(),
      (xa = F(va)),
      (Sa = [`xn79ShhRM`, `nTqkcZrXm`, `GsDxk_3Ju`]),
      (Ca = `framer-Tw3Vd`),
      (wa = {
        GsDxk_3Ju: `framer-v-1o8zmie`,
        nTqkcZrXm: `framer-v-jyei0`,
        xn79ShhRM: `framer-v-1drld19`,
      }),
      (Ta = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ea = ({ value: e, children: t }) => {
        let n = c(w),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (Da = C.create(s)),
      (Oa = { Primary: `xn79ShhRM`, Secondary: `nTqkcZrXm`, Tertiary: `GsDxk_3Ju` }),
      (ka = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Oa[r.variant] ?? r.variant ?? `xn79ShhRM`,
      })),
      (Aa = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ja = K(
        f(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = m(),
            { activeLocale: a, setLocale: o } = V(),
            s = U(),
            { style: c, className: l, layoutId: u, variant: d, ...f } = ka(e),
            {
              baseVariant: p,
              classNames: g,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: S,
              setGestureState: ee,
              setVariant: w,
              variants: T,
            } = R({
              cycleOrder: Sa,
              defaultVariant: `xn79ShhRM`,
              ref: r,
              variant: d,
              variantClassNames: wa,
            }),
            D = Aa(e, T),
            O = B(Ca);
          return h(E, {
            id: u ?? i,
            children: h(Da, {
              animate: T,
              initial: !1,
              children: h(Ea, {
                value: Ta,
                children: v(C.div, {
                  ...f,
                  ...b,
                  className: B(O, `framer-1drld19`, l, g),
                  'data-framer-name': `Primary`,
                  layoutDependency: D,
                  layoutId: `xn79ShhRM`,
                  ref: r,
                  style: { ...c },
                  ...ba(
                    {
                      GsDxk_3Ju: { 'data-framer-name': `Tertiary` },
                      nTqkcZrXm: { 'data-framer-name': `Secondary` },
                    },
                    p,
                    x
                  ),
                  children: [
                    h(H, {
                      height: 38,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 272) - 0 - 254) / 2 + 0 + 0),
                      ...ba(
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
                        x
                      ),
                      children: h(M, {
                        className: `framer-1gjgywn-container`,
                        layoutDependency: D,
                        layoutId: `Ml9uRaItP-container`,
                        nodeId: `Ml9uRaItP`,
                        rendersWithMotion: !0,
                        scopeId: `RV9z89wz3`,
                        children: h(va, {
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
                          ...ba(
                            {
                              GsDxk_3Ju: { variant: `dk0rLLXb2` },
                              nTqkcZrXm: { variant: `dk0rLLXb2` },
                            },
                            p,
                            x
                          ),
                        }),
                      }),
                    }),
                    h(H, {
                      height: 38,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 272) - 0 - 254) / 2 + 38 + 16),
                      ...ba(
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
                        x
                      ),
                      children: h(M, {
                        className: `framer-h9998f-container`,
                        layoutDependency: D,
                        layoutId: `T1Ia5uHi9-container`,
                        nodeId: `T1Ia5uHi9`,
                        rendersWithMotion: !0,
                        scopeId: `RV9z89wz3`,
                        children: h(va, {
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
                          ...ba(
                            {
                              GsDxk_3Ju: { variant: `dk0rLLXb2` },
                              nTqkcZrXm: { variant: `dk0rLLXb2` },
                            },
                            p,
                            x
                          ),
                        }),
                      }),
                    }),
                    h(H, {
                      height: 38,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 272) - 0 - 254) / 2 + 76 + 32),
                      ...ba(
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
                        x
                      ),
                      children: h(M, {
                        className: `framer-me3esw-container`,
                        layoutDependency: D,
                        layoutId: `femSsTB0b-container`,
                        nodeId: `femSsTB0b`,
                        rendersWithMotion: !0,
                        scopeId: `RV9z89wz3`,
                        children: h(va, {
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
                          ...ba(
                            {
                              GsDxk_3Ju: { variant: `dk0rLLXb2` },
                              nTqkcZrXm: { variant: `dk0rLLXb2` },
                            },
                            p,
                            x
                          ),
                        }),
                      }),
                    }),
                    h(H, {
                      height: 38,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 272) - 0 - 254) / 2 + 114 + 48),
                      ...ba(
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
                        x
                      ),
                      children: h(M, {
                        className: `framer-1whwcdw-container`,
                        layoutDependency: D,
                        layoutId: `FhQTCIaQs-container`,
                        nodeId: `FhQTCIaQs`,
                        rendersWithMotion: !0,
                        scopeId: `RV9z89wz3`,
                        children: h(va, {
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
                          ...ba(
                            {
                              GsDxk_3Ju: { variant: `dk0rLLXb2` },
                              nTqkcZrXm: { variant: `dk0rLLXb2` },
                            },
                            p,
                            x
                          ),
                        }),
                      }),
                    }),
                    h(H, {
                      height: 38,
                      width: `calc(${s?.width || `100vw`} - 48px)`,
                      y: (s?.y || 0) + 0 + (((s?.height || 272) - 0 - 254) / 2 + 152 + 64),
                      ...ba(
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
                        x
                      ),
                      children: h(M, {
                        className: `framer-8kbyx4-container`,
                        layoutDependency: D,
                        layoutId: `vk_qsAsf0-container`,
                        nodeId: `vk_qsAsf0`,
                        rendersWithMotion: !0,
                        scopeId: `RV9z89wz3`,
                        children: h(va, {
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
                          ...ba(
                            {
                              GsDxk_3Ju: { variant: `H6SNXfFLK` },
                              nTqkcZrXm: { variant: `H6SNXfFLK` },
                            },
                            p,
                            x
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
      (Ma = ja),
      (ja.displayName = `Experience List`),
      (ja.defaultProps = { height: 272, width: 1440 }),
      P(ja, {
        variant: {
          options: [`xn79ShhRM`, `nTqkcZrXm`, `GsDxk_3Ju`],
          optionTitles: [`Primary`, `Secondary`, `Tertiary`],
          title: `Variant`,
          type: L.Enum,
        },
      }),
      j(ja, [{ explicitInter: !0, fonts: [] }, ...xa], { supportsExplicitInterCodegen: !0 }));
  }),
  Pa = e(() => {
    it();
  });
function Fa({ type: e, url: t, html: n, zoom: r, radius: i, border: a, style: o = {} }) {
  return e === `url` && t
    ? h(La, { url: t, zoom: r, radius: i, border: a, style: o })
    : e === `html` && n
      ? h(za, { html: n, style: o })
      : h(Ia, { style: o });
}
function Ia({ style: e }) {
  return h(`div`, {
    style: { minHeight: Ka(e), ...tt, overflow: `hidden`, ...e },
    children: h(`div`, {
      style: Ya,
      children: `To embed a website or widget, add it to the properties\xA0panel.`,
    }),
  });
}
function La({ url: e, zoom: t, radius: n, border: r, style: i }) {
  let a = !i.height;
  /[a-z]+:\/\//.test(e) || (e = `https://` + e);
  let s = rt(),
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
      ? h(Ga, { message: `URL embeds do not support auto height.`, style: i })
      : e.startsWith(`https://`)
        ? c === void 0
          ? h(Wa, {})
          : c instanceof Error
            ? h(Ga, { message: c.message, style: i })
            : c === !0
              ? h(Ga, { message: `Can’t embed ${e} due to its content security policy.`, style: i })
              : h(`iframe`, {
                  src: e,
                  style: {
                    ...qa,
                    ...i,
                    ...r,
                    zoom: t,
                    borderRadius: n,
                    transformOrigin: `top center`,
                  },
                  loading: `lazy`,
                  fetchPriority: s ? `low` : `auto`,
                  referrerPolicy: `no-referrer`,
                  sandbox: Ra(s),
                })
        : h(Ga, { message: `Unsupported protocol.`, style: i })
  );
}
function Ra(e) {
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
function za({ html: e, ...t }) {
  if (e.includes(`<\/script>`)) {
    let n = e.includes(`</spline-viewer>`),
      r = e.includes(`<!-- framer-direct-embed -->`);
    return h(n || r ? Va : Ba, { html: e, ...t });
  }
  return h(Ha, { html: e, ...t });
}
function Ba({ html: e, style: t }) {
  let n = _(),
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
    c = { ...qa, ...t };
  return (t.height || (c.height = r + `px`), h(`iframe`, { ref: n, style: c, srcDoc: s }));
}
function Va({ html: e, style: t }) {
  let n = _();
  return (
    o(() => {
      let t = n.current;
      if (t)
        return (
          (t.innerHTML = e),
          Ua(t),
          () => {
            t.innerHTML = ``;
          }
        );
    }, [e]),
    h(`div`, { ref: n, style: { ...Ja, ...t } })
  );
}
function Ha({ html: e, style: t }) {
  return h(`div`, { style: { ...Ja, ...t }, dangerouslySetInnerHTML: { __html: e } });
}
function Ua(e) {
  if (e instanceof Element && e.tagName === `SCRIPT`) {
    let t = document.createElement(`script`);
    t.text = e.innerHTML;
    for (let { name: n, value: r } of e.attributes) t.setAttribute(n, r);
    e.parentElement.replaceChild(t, e);
  } else for (let t of e.childNodes) Ua(t);
}
function Wa() {
  return h(`div`, {
    className: `framerInternalUI-componentPlaceholder`,
    style: { ...at, overflow: `hidden` },
    children: h(`div`, { style: Ya, children: `Loading…` }),
  });
}
function Ga({ message: e, style: t }) {
  return h(`div`, {
    className: `framerInternalUI-errorPlaceholder`,
    style: { minHeight: Ka(t), ...at, overflow: `hidden`, ...t },
    children: h(`div`, { style: Ya, children: e }),
  });
}
function Ka(e) {
  if (!e.height) return 200;
}
var qa,
  Ja,
  Ya,
  Xa = e(() => {
    (t(),
      y(),
      r(),
      N(),
      Pa(),
      P(Fa, {
        type: {
          type: L.Enum,
          defaultValue: `url`,
          displaySegmentedControl: !0,
          options: [`url`, `html`],
          optionTitles: [`URL`, `HTML`],
        },
        url: {
          title: `URL`,
          type: L.String,
          description: `Some websites don’t support embedding.`,
          hidden(e) {
            return e.type !== `url`;
          },
        },
        html: {
          title: `HTML`,
          type: L.String,
          displayTextArea: !0,
          hidden(e) {
            return e.type !== `html`;
          },
        },
        border: {
          title: `Border`,
          type: L.Border,
          optional: !0,
          hidden(e) {
            return e.type !== `url`;
          },
        },
        radius: {
          type: L.BorderRadius,
          title: `Radius`,
          hidden(e) {
            return e.type !== `url`;
          },
        },
        zoom: {
          title: `Zoom`,
          defaultValue: 1,
          type: L.Number,
          hidden(e) {
            return e.type !== `url`;
          },
          min: 0.1,
          max: 1,
          step: 0.1,
          displayStepper: !0,
        },
      }),
      (qa = { width: `100%`, height: `100%`, border: `none` }),
      (Ja = {
        width: `100%`,
        height: `100%`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (Ya = { textAlign: `center`, minWidth: 140 }));
  }),
  Za,
  Qa,
  $a,
  eo,
  to,
  no,
  ro,
  io,
  ao,
  oo,
  so,
  co,
  lo = e(() => {
    (y(),
      N(),
      D(),
      r(),
      Xa(),
      (Za = F(Fa)),
      (Qa = re(Fa)),
      ($a = `framer-ftJha`),
      (eo = { yXZsKtn6j: `framer-v-oynkpq` }),
      (to = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (no = ({ value: e, children: t }) => {
        let n = c(w),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (ro = C.create(s)),
      (io = { HTML: `html`, URL: `url` }),
      (ao = ({ height: e, hTML: t, id: n, type: r, width: i, ...a }) => ({
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
        tuzgfJ02F: io[r] ?? r ?? a.tuzgfJ02F ?? `html`,
      })),
      (oo = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (so = K(
        f(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = m(),
            { activeLocale: a, setLocale: o } = V();
          U();
          let {
              style: s,
              className: c,
              layoutId: l,
              variant: u,
              tuzgfJ02F: d,
              BA7jwhB7b: f,
              ...p
            } = ao(e),
            {
              baseVariant: g,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: ee,
              setGestureState: w,
              setVariant: T,
              variants: D,
            } = R({ defaultVariant: `yXZsKtn6j`, ref: r, variant: u, variantClassNames: eo }),
            O = oo(e, D),
            { activeVariantCallback: k, delay: A } = pe(g);
          ue(g, {
            default: k(async (...e) => {
              await A(() => T(me, !0), 1500);
            }),
          });
          let j = B($a);
          return h(E, {
            id: l ?? i,
            children: h(ro, {
              animate: D,
              initial: !1,
              children: h(no, {
                value: to,
                children: v(C.div, {
                  ...p,
                  ...x,
                  className: B(j, `framer-oynkpq`, c, y),
                  'data-framer-name': `Primary`,
                  'data-highlight': !0,
                  layoutDependency: O,
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
                    h(H, {
                      children: h(M, {
                        className: `framer-8f0ulg-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: O,
                        layoutId: `cOKDVduVk-container`,
                        nodeId: `cOKDVduVk`,
                        rendersWithMotion: !0,
                        scopeId: `wPQEBj6SF`,
                        children: h(Fa, {
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
                    h(C.div, {
                      className: `framer-sz7x46`,
                      'data-framer-name': `Cursor Preventer`,
                      layoutDependency: O,
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
      (co = so),
      (so.displayName = `Embed Card`),
      (so.defaultProps = { height: 379, width: 390 }),
      P(so, {
        tuzgfJ02F: Qa?.type && {
          ...Qa.type,
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
          type: L.String,
        },
      }),
      j(so, [{ explicitInter: !0, fonts: [] }, ...Za], { supportsExplicitInterCodegen: !0 }));
  });
function uo(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var fo,
  po,
  mo,
  ho,
  go,
  _o,
  vo,
  yo,
  bo,
  xo,
  So,
  Co,
  wo,
  To = e(() => {
    (y(),
      N(),
      D(),
      r(),
      (fo = [`e9mENscFv`, `D_1vjmCIs`]),
      (po = `framer-nNOB7`),
      (mo = { D_1vjmCIs: `framer-v-1nom068`, e9mENscFv: `framer-v-1gvalky` }),
      (ho = (e, t) => {
        if (typeof e == `number` && Number.isFinite(e)) return Math.max(0, e) + `px`;
        if (typeof e != `string` || typeof t != `number`) return;
        let n = e.split(` `);
        return n[t] || n[t - 2] || n[0];
      }),
      (go = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (_o = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (vo = ({ value: e, children: t }) => {
        let n = c(w),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (yo = C.create(s)),
      (bo = { Empty: `D_1vjmCIs`, Primary: `e9mENscFv` }),
      (xo = ({ height: e, id: t, image: n, radius: r, width: i, ...a }) => ({
        ...a,
        BDcLqNvJI: r ?? a.BDcLqNvJI ?? `0px`,
        MSyIX7cs8: n ??
          a.MSyIX7cs8 ?? {
            alt: ``,
            pixelHeight: 87,
            pixelWidth: 230,
            src: `https://framerusercontent.com/images/liDp6RqOmZpoiyriU2da9i9ZRNM.png`,
          },
        variant: bo[a.variant] ?? a.variant ?? `e9mENscFv`,
      })),
      (So = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Co = K(
        f(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = m(),
            { activeLocale: a, setLocale: o } = V(),
            s = U(),
            {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              MSyIX7cs8: f,
              BDcLqNvJI: p,
              ...g
            } = xo(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: ee,
              setGestureState: w,
              setVariant: T,
              variants: D,
            } = R({
              cycleOrder: fo,
              defaultVariant: `e9mENscFv`,
              ref: r,
              variant: d,
              variantClassNames: mo,
            }),
            k = So(e, D),
            A = B(po),
            j = () => v !== `D_1vjmCIs`;
          return h(E, {
            id: u ?? i,
            children: h(yo, {
              animate: D,
              initial: !1,
              children: h(vo, {
                value: go,
                children: h(C.div, {
                  ...g,
                  ...x,
                  className: B(A, `framer-1gvalky`, l, y),
                  'data-border': !0,
                  'data-framer-name': `Primary`,
                  layoutDependency: k,
                  layoutId: `e9mENscFv`,
                  ref: r,
                  style: {
                    '--border-bottom-width': `1px`,
                    '--border-color': `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`,
                    '--border-left-width': `1px`,
                    '--border-right-width': `1px`,
                    '--border-style': `solid`,
                    '--border-top-width': `1px`,
                    borderBottomLeftRadius: ho(p, 3),
                    borderBottomRightRadius: ho(p, 2),
                    borderTopLeftRadius: ho(p, 0),
                    borderTopRightRadius: ho(p, 1),
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
                  ...uo({ D_1vjmCIs: { 'data-framer-name': `Empty` } }, v, S),
                  children:
                    j() &&
                    h(W, {
                      background: {
                        alt: ``,
                        fit: `fit`,
                        loading: O(
                          (s?.y || 0) + 65 + (((s?.height || 151) - 130 - 21) / 2 + 0 + 0)
                        ),
                        pixelHeight: 87,
                        pixelWidth: 230,
                        sizes: `58px`,
                        ..._o(f),
                        positionX: `center`,
                        positionY: `center`,
                      },
                      className: `framer-xrlw7a`,
                      layoutDependency: k,
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
      (wo = Co),
      (Co.displayName = `Logo Card`),
      (Co.defaultProps = { height: 151, width: 180 }),
      P(Co, {
        variant: {
          options: [`e9mENscFv`, `D_1vjmCIs`],
          optionTitles: [`Primary`, `Empty`],
          title: `Variant`,
          type: L.Enum,
        },
        MSyIX7cs8: {
          __defaultAssetReference: `data:framer/asset-reference,liDp6RqOmZpoiyriU2da9i9ZRNM.png?originalFilename=675d4cbc10e6dcb01229787c_Cairo+Logo+Black+2.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,liDp6RqOmZpoiyriU2da9i9ZRNM.png?originalFilename=675d4cbc10e6dcb01229787c_Cairo+Logo+Black+2.png&preferredSize=auto`,
          },
          title: `Image`,
          type: L.ResponsiveImage,
        },
        BDcLqNvJI: { defaultValue: `0px`, title: `Radius`, type: L.BorderRadius },
      }),
      j(Co, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function Eo(e) {
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
    m = _(null),
    { scrollYProgress: g } = x({ target: m, offset: [`start 0.75`, `start 0.15`] });
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
  let v = 0;
  return h(`p`, {
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
        s = v;
      return (
        (v += o + 1),
        h(
          Oo,
          {
            word: e,
            progress: g,
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
var Do,
  Oo,
  ko = e(() => {
    (y(),
      N(),
      D(),
      r(),
      (Do = ({
        char: e,
        start: t,
        end: n,
        progress: r,
        duration: i,
        easing: a,
        index: o,
        transitionStartIndex: s,
      }) => {
        let c = ee(r, [t, n], [`#666666`, `#FFFFFF`]),
          l = o < s ? `#FFFFFF` : `#666666`;
        return h(C.span, {
          style: { color: o < s ? l : c },
          transition: { duration: i, ease: a },
          children: e,
        });
      }),
      (Oo = ({
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
        return v(C.span, {
          children: [
            c.map((e, r) =>
              h(
                Do,
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
      P(Eo, {
        text: { title: `Text`, type: L.String, defaultValue: `Hello Text` },
        fontFamily: { title: `Font Family`, type: L.String, defaultValue: `Urbanist` },
        fontSize: { title: `Font Size`, type: L.Number, defaultValue: 48, min: 10, max: 100 },
        fontWeight: {
          title: `Font Weight`,
          type: L.Enum,
          options: [`400`, `500`, `700`],
          optionTitles: [`Regular`, `Medium`, `Bold`],
          defaultValue: `400`,
        },
        lineHeight: { title: `Line Height`, type: L.Number, defaultValue: 60, min: 10, max: 100 },
        letterSpacing: {
          title: `Letter Spacing`,
          type: L.Number,
          defaultValue: -3,
          min: -10,
          max: 10,
        },
        paragraphAlign: {
          title: `Paragraph Align`,
          type: L.Enum,
          options: [`flex-start`, `center`, `flex-end`],
          optionTitles: [`Left`, `Center`, `Right`],
          defaultValue: `center`,
        },
        duration: {
          title: `Duration`,
          type: L.Number,
          defaultValue: 0.3,
          min: 0.1,
          max: 3,
          step: 0.1,
        },
        easing: {
          title: `Easing`,
          type: L.Enum,
          options: [`easeInOut`, `easeIn`, `easeOut`, `linear`],
          optionTitles: [`Ease In Out`, `Ease In`, `Ease Out`, `Linear`],
          defaultValue: `easeInOut`,
        },
        transitionStartIndex: {
          title: `Transition Start Index`,
          type: L.Number,
          defaultValue: 22,
          min: 0,
          max: 1e3,
        },
      }));
  }),
  Ao,
  jo,
  Mo,
  No,
  Po,
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
  ts,
  ns,
  rs,
  is,
  as,
  os,
  ss,
  cs,
  ls,
  us,
  ds,
  fs,
  ps,
  ms,
  hs,
  gs,
  _s,
  vs,
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
  js,
  Ms,
  Ns,
  Ps,
  Q,
  $,
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
  Ks,
  qs,
  Js,
  Ys,
  Xs,
  Zs,
  Qs,
  $s,
  ec,
  tc,
  nc,
  rc;
e(() => {
  (y(),
    N(),
    D(),
    r(),
    p(),
    kt(),
    Vt(),
    nt(),
    nn(),
    st(),
    yn(),
    ke(),
    lt(),
    Fe(),
    tr(),
    _r(),
    Nr(),
    xi(),
    mt(),
    Ni(),
    oa(),
    Na(),
    vt(),
    lo(),
    yt(),
    Re(),
    To(),
    ko(),
    Y(),
    St(),
    We(),
    ft(),
    Je(),
    wt(),
    (Ao = F(Mr)),
    (jo = xe(G)),
    (Mo = F(co)),
    (No = F(Bt)),
    (Po = xe(z)),
    (Fo = F(Ut)),
    (Io = xe(C.div)),
    (Lo = F(ze)),
    (Ro = F(ct)),
    (zo = A(W)),
    (Bo = F(bt)),
    (Vo = F(wo)),
    (Ho = F(dt)),
    (Uo = F(ut)),
    (Wo = A(G)),
    (Go = F(aa)),
    (Ko = F(ot)),
    (qo = F(Eo)),
    (Jo = F(Et)),
    (Yo = A(z)),
    (Xo = F(je)),
    (Zo = F(Ma)),
    (Qo = F(Mi)),
    ($o = F(bi)),
    (es = F(gr)),
    (ts = A(C.div)),
    (ns = F(er)),
    (rs = F(_t)),
    (is = F(Me)),
    (as = F(vn)),
    (os = {
      TARYGz5CA: `(max-width: 809.98px)`,
      uQRrO6hCw: `(min-width: 810px) and (max-width: 1199.98px)`,
      WQLkyLRf1: `(min-width: 1200px)`,
    }),
    (ss = () => typeof document < `u`),
    (cs = `framer-30D1W`),
    (ls = {
      TARYGz5CA: `framer-v-12a2gtg`,
      uQRrO6hCw: `framer-v-1tqphhv`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (us = {
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
    (ds = {
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
    (fs = {
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
    (ps = {
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
    (ms = {
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
    (hs = { delay: 2.9, duration: 1.4, ease: [0.96, -0.02, 0.38, 1.01], type: `tween` }),
    (gs = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: hs,
      x: 0,
      y: 0,
    }),
    (_s = {
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
    (vs = {
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
    (ys = { bounce: 0.2, delay: 0, duration: 0.6, type: `spring` }),
    (bs = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: ys,
      x: 0,
      y: 0,
    }),
    (xs = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: ys,
      x: 0,
      y: 0,
    }),
    (Ss = {
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
    (Cs = (e, t) => `translate(-50%, -50%) ${t}`),
    (ws = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (Ts = ({ children: e, blockDocumentScrolling: t, enabled: n = !0 }) => {
      let [r, i] = le({ blockDocumentScrolling: t });
      return e({ hide: () => i(!1), show: () => i(!0), toggle: () => i(!r), visible: n && r });
    }),
    (Es = {
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
    (Ds = {
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
    (Os = {
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
    (ks = {
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
    (As = {
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
    (js = {
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
    (Ms = {
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
    (Ns = {
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
    (Ps = {
      opacity: 0.9,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: hs,
      x: 0,
      y: 0,
    }),
    (Q = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    ($ = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Fs = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = ce(e, t, `X2zJgUEET`);
      return n(ie(r), i, a);
    }),
    (Is = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = ce(e, t, `KaprhgW6L`);
      return n(ie(r), i, a);
    }),
    (Ls = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = ce(e, t, `yP6ayj6je`);
      return n(ie(r), i, a);
    }),
    (Rs = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = ce(e, t, `dVg7BWnyh`);
      return n(ie(r), i, a);
    }),
    (zs = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = ce(e, t, `Xq8XtaAUP`);
      return n(ie(r), i, a);
    }),
    (Bs = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = ce(e, t, `pCK9VFdyL`);
      return n(ie(r), i, a);
    }),
    (Vs = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = ce(e, t, `BqYRJ2f6p`);
      return n(ie(r), i, a);
    }),
    (Hs = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = ce(e, t, `xiQtB0ygJ`);
      return n(ie(r), i, a);
    }),
    (Us = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = ce(e, t, `ws_bTD3yG`);
      return n(ie(r), i, a);
    }),
    (Ws = ({ value: e }) =>
      ve()
        ? null
        : h(`style`, { dangerouslySetInnerHTML: { __html: e }, 'data-framer-html-style': `` })),
    (Gs = { L: `WQLkyLRf1`, M: `uQRrO6hCw`, S: `TARYGz5CA` }),
    (Ks = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Gs[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    (qs = { component: Me, variant: `PdMEYMdQg` }),
    (Js = { component: Me, variant: `M2qPC78ZG` }),
    (Ys = { component: Me, variant: `pzyIxJPyJ` }),
    (Xs = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
    (Zs = { component: vn, transition: Xs, variant: `TYT7GU9zj` }),
    (Qs = { component: vn, transition: Xs, variant: `vH7Y42YRC` }),
    ($s = { component: vn, transition: Xs, variant: `rFjN4yoEW` }),
    (ec = { component: vn, transition: Xs, variant: `sP9zw4_Pq` }),
    (tc = K(
      f(function (e, t) {
        let n = _(null),
          r = t ?? n,
          i = m(),
          { activeLocale: a, setLocale: o } = V(),
          c = U(),
          {
            style: l,
            className: d,
            layoutId: f,
            variant: p,
            XVH_tgELrX2zJgUEET: y,
            yphiaikeGX2zJgUEET: x,
            YHo9k2VRNX2zJgUEET: S,
            YHsDzvkBNX2zJgUEET: ee,
            wfPmAnXMdX2zJgUEET: w,
            P3BOIXzYKX2zJgUEET: D,
            idX2zJgUEET: O,
            XVH_tgELrKaprhgW6L: A,
            yphiaikeGKaprhgW6L: j,
            YHo9k2VRNKaprhgW6L: M,
            YHsDzvkBNKaprhgW6L: N,
            wfPmAnXMdKaprhgW6L: te,
            P3BOIXzYKKaprhgW6L: P,
            idKaprhgW6L: F,
            XVH_tgELryP6ayj6je: ne,
            yphiaikeGyP6ayj6je: re,
            YHo9k2VRNyP6ayj6je: ie,
            YHsDzvkBNyP6ayj6je: L,
            wfPmAnXMdyP6ayj6je: R,
            P3BOIXzYKyP6ayj6je: ce,
            idyP6ayj6je: le,
            XVH_tgELrdVg7BWnyh: ue,
            yphiaikeGdVg7BWnyh: me,
            YHo9k2VRNdVg7BWnyh: ve,
            YHsDzvkBNdVg7BWnyh: xe,
            wfPmAnXMddVg7BWnyh: Se,
            P3BOIXzYKdVg7BWnyh: K,
            iddVg7BWnyh: J,
            XVH_tgELrXq8XtaAUP: we,
            yphiaikeGXq8XtaAUP: Te,
            YHo9k2VRNXq8XtaAUP: Ee,
            YHsDzvkBNXq8XtaAUP: De,
            wfPmAnXMdXq8XtaAUP: Oe,
            P3BOIXzYKXq8XtaAUP: ke,
            idXq8XtaAUP: Ae,
            XG3otaDlZpCK9VFdyL: Me,
            XbJge9FsppCK9VFdyL: Ne,
            XpFWjsiiEpCK9VFdyL: Pe,
            F1KVBlC4ypCK9VFdyL: Fe,
            dAZk2JaonpCK9VFdyL: Ie,
            vtA10ARAUpCK9VFdyL: Le,
            b3XlDEEmGpCK9VFdyL: Re,
            idpCK9VFdyL: Be,
            XG3otaDlZBqYRJ2f6p: Ve,
            XbJge9FspBqYRJ2f6p: He,
            XpFWjsiiEBqYRJ2f6p: Ue,
            F1KVBlC4yBqYRJ2f6p: We,
            dAZk2JaonBqYRJ2f6p: Ge,
            vtA10ARAUBqYRJ2f6p: Ke,
            b3XlDEEmGBqYRJ2f6p: Je,
            idBqYRJ2f6p: Ye,
            XG3otaDlZxiQtB0ygJ: Xe,
            XbJge9FspxiQtB0ygJ: Qe,
            XpFWjsiiExiQtB0ygJ: $e,
            F1KVBlC4yxiQtB0ygJ: et,
            dAZk2JaonxiQtB0ygJ: tt,
            vtA10ARAUxiQtB0ygJ: nt,
            b3XlDEEmGxiQtB0ygJ: rt,
            idxiQtB0ygJ: it,
            XG3otaDlZws_bTD3yG: at,
            XbJge9Fspws_bTD3yG: st,
            XpFWjsiiEws_bTD3yG: lt,
            F1KVBlC4yws_bTD3yG: ft,
            dAZk2Jaonws_bTD3yG: pt,
            vtA10ARAUws_bTD3yG: mt,
            b3XlDEEmGws_bTD3yG: ht,
            idws_bTD3yG: vt,
            ...yt
          } = Ks(e);
        fe(u(() => Tt({}, a), [a]));
        let [Y, St] = oe(p, os, !1),
          { activeVariantCallback: wt, delay: Dt } = pe(void 0),
          Ot = ({ overlay: e, loadMore: t }) =>
            wt(async (...t) => {
              e.toggle();
            }),
          kt = B(cs, qe, gt, Ze),
          At = be(`MHiTKHdUJ`),
          jt = _(null),
          Mt = () => (ss() ? Y !== `TARYGz5CA` : !0),
          Nt = () => (ss() ? ![`uQRrO6hCw`, `TARYGz5CA`].includes(Y) : !0);
        Ce();
        let Pt = () => !!(!ss() || [`uQRrO6hCw`, `TARYGz5CA`].includes(Y)),
          Ft = _(null),
          It = be(`qkDPHMqEp`),
          Lt = be(`cxKKrit_s`),
          Rt = ge(),
          zt = be(`HwcwFPeWv`),
          Vt = be(`gXO5T5l0P`),
          Ht = be(`PlaDQURl5`);
        return (
          he({
            '14bg376': Ys,
            '16nradr': qs,
            '1njupo3': ec,
            lbrotf: Js,
            o4krbg: $s,
            qd9j2w: Qs,
            rpcde8: Zs,
          }),
          h(ae.Provider, {
            value: { primaryVariantId: `WQLkyLRf1`, variantClassNames: ls },
            children: v(E, {
              id: f ?? i,
              children: [
                h(Ws, {
                  value: `html body { background: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)); }`,
                }),
                v(C.div, {
                  ...yt,
                  className: B(kt, `framer-72rtr7`, d),
                  'data-framer-cursor': `16nradr`,
                  'data-selection': !0,
                  ref: r,
                  style: { ...l },
                  children: [
                    v(`section`, {
                      className: `framer-dhlfab`,
                      'data-framer-name': `Hero`,
                      id: At,
                      ref: jt,
                      children: [
                        Mt() &&
                          h(H, {
                            height: 24,
                            width: `min(${c?.width || `100vw`}, 1480px)`,
                            children: h(z, {
                              className: `framer-1y2k8yn-container hidden-12a2gtg`,
                              nodeId: `rNTD5l1zU`,
                              scopeId: `augiA20Il`,
                              children: h(Mr, {
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
                        v(`div`, {
                          className: `framer-ty36tk`,
                          'data-framer-name': `Top`,
                          children: [
                            v(`div`, {
                              className: `framer-1n76yiy`,
                              'data-framer-name': `Heading`,
                              children: [
                                h(`div`, {
                                  className: `framer-x5pde`,
                                  'data-framer-name': `1`,
                                  children: h(jo, {
                                    __fromCanvasComponent: !0,
                                    animate: us,
                                    children: h(s, {
                                      children: h(`h3`, {
                                        className: `framer-styles-preset-sng7in`,
                                        'data-styles-preset': `bLxN69a46`,
                                        children: `Pattern Dimensions`,
                                      }),
                                    }),
                                    className: `framer-7eph4s`,
                                    'data-framer-appear-id': `7eph4s`,
                                    'data-framer-name': `Text`,
                                    fonts: [`Inter`],
                                    initial: ds,
                                    optimized: !0,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                h(`div`, {
                                  className: `framer-1ki04el`,
                                  'data-framer-name': `2`,
                                  children: h(jo, {
                                    __fromCanvasComponent: !0,
                                    animate: fs,
                                    children: h(s, {
                                      children: h(`h3`, {
                                        className: `framer-styles-preset-sng7in`,
                                        'data-styles-preset': `bLxN69a46`,
                                        children: `and Moments that`,
                                      }),
                                    }),
                                    className: `framer-19l0zu6`,
                                    'data-framer-appear-id': `19l0zu6`,
                                    'data-framer-name': `Text`,
                                    fonts: [`Inter`],
                                    initial: ds,
                                    optimized: !0,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                h(`div`, {
                                  className: `framer-mxo2f9`,
                                  'data-framer-name': `3`,
                                  children: h(jo, {
                                    __fromCanvasComponent: !0,
                                    animate: ps,
                                    children: h(s, {
                                      children: h(`h3`, {
                                        className: `framer-styles-preset-sng7in`,
                                        'data-styles-preset': `bLxN69a46`,
                                        children: `Connect and Leave a `,
                                      }),
                                    }),
                                    className: `framer-1xqbms1`,
                                    'data-framer-appear-id': `1xqbms1`,
                                    'data-framer-name': `Text`,
                                    fonts: [`Inter`],
                                    initial: ds,
                                    optimized: !0,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                h(`div`, {
                                  className: `framer-za16rf`,
                                  'data-framer-name': `4`,
                                  children: h(jo, {
                                    __fromCanvasComponent: !0,
                                    animate: ms,
                                    children: h(s, {
                                      children: h(`h3`, {
                                        className: `framer-styles-preset-sng7in`,
                                        'data-styles-preset': `bLxN69a46`,
                                        children: `Bold イメージ.`,
                                      }),
                                    }),
                                    className: `framer-9kazno`,
                                    'data-framer-appear-id': `9kazno`,
                                    'data-framer-name': `Text`,
                                    fonts: [`Inter`],
                                    initial: ds,
                                    optimized: !0,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            h(Ts, {
                              children: (e) =>
                                h(b, {
                                  children: v(C.div, {
                                    className: `framer-ajhxcq`,
                                    'data-framer-name': `Reel`,
                                    id: `ajhxcq`,
                                    onTap: Ot({ overlay: e }),
                                    children: [
                                      h(H, {
                                        children: h(q, {
                                          breakpoint: Y,
                                          overrides: { TARYGz5CA: { animate: vs } },
                                          children: h(Po, {
                                            animate: gs,
                                            className: `framer-1uxqzhi-container`,
                                            'data-framer-appear-id': `1uxqzhi`,
                                            'data-framer-cursor': `lbrotf`,
                                            initial: _s,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: `KbVENUdy6`,
                                            optimized: !0,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            children: h(q, {
                                              breakpoint: Y,
                                              overrides: {
                                                TARYGz5CA: {
                                                  style: { height: `100%`, width: `100%` },
                                                },
                                              },
                                              children: h(Bt, {
                                                borderRadius: 0,
                                                effect: `evade`,
                                                height: `100%`,
                                                id: `KbVENUdy6`,
                                                layoutId: `KbVENUdy6`,
                                                perspective: 500,
                                                scale: 1,
                                                tiltLimit: 6,
                                                width: `100%`,
                                                children: h(H, {
                                                  height: 379,
                                                  width: `390px`,
                                                  children: h(z, {
                                                    className: `framer-unlq7x-container`,
                                                    inComponentSlot: !0,
                                                    nodeId: `j9kRA3hEl`,
                                                    rendersWithMotion: !0,
                                                    scopeId: `augiA20Il`,
                                                    children: h(co, {
                                                      BA7jwhB7b: `<iframe 
  src="https://player.vimeo.com/video/315891633?autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0"
  frameborder="0" 
  allow="autoplay; fullscreen" 
  allowfullscreen 
  width="144%" 
  height="101%">
</iframe>
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
                                      h(T, {
                                        children:
                                          e.visible &&
                                          h(b, {
                                            children: g(
                                              h(se, {
                                                triggerId: `ajhxcq`,
                                                children: v(I, {
                                                  children: [
                                                    h(
                                                      C.div,
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
                                                        className: B(kt, `framer-gul5pu`),
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
                                                    h(C.div, {
                                                      animate: xs,
                                                      className: B(kt, `framer-169szll`),
                                                      'data-framer-name': `BG`,
                                                      'data-framer-portal-id': `ajhxcq`,
                                                      exit: bs,
                                                      initial: Ss,
                                                    }),
                                                    h(C.div, {
                                                      animate: xs,
                                                      className: B(kt, `framer-nqfrei`),
                                                      'data-border': !0,
                                                      'data-framer-name': `Container`,
                                                      'data-framer-portal-id': `ajhxcq`,
                                                      exit: bs,
                                                      initial: Ss,
                                                      transformTemplate: Cs,
                                                      children: h(H, {
                                                        children: h(z, {
                                                          className: `framer-o1tapf-container`,
                                                          isAuthoredByUser: !0,
                                                          isModuleExternal: !0,
                                                          nodeId: `gcXxkyhQ9`,
                                                          scopeId: `augiA20Il`,
                                                          children: h(Ut, {
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
                                              ws()
                                            ),
                                          }),
                                      }),
                                    ],
                                  }),
                                }),
                            }),
                          ],
                        }),
                        v(`div`, {
                          className: `framer-1jn9ae6`,
                          'data-framer-name': `Bottom`,
                          children: [
                            h(Io, {
                              animate: Es,
                              className: `framer-1snsm42`,
                              'data-framer-appear-id': `1snsm42`,
                              'data-framer-name': `Line`,
                              initial: Ds,
                              optimized: !0,
                            }),
                            v(Io, {
                              animate: Os,
                              className: `framer-2xxdw2`,
                              'data-framer-appear-id': `2xxdw2`,
                              'data-framer-name': `Title`,
                              initial: ks,
                              optimized: !0,
                              children: [
                                h(q, {
                                  breakpoint: Y,
                                  overrides: {
                                    TARYGz5CA: { viewBox: `0 0 1406.47 357` },
                                    uQRrO6hCw: { viewBox: `0 0 1406.47 357` },
                                  },
                                  children: h(jo, {
                                    __fromCanvasComponent: !0,
                                    animate: As,
                                    children: h(s, {
                                      children: h(`p`, {
                                        style: {
                                          '--font-selector': `RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk`,
                                          '--framer-font-family': `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                          '--framer-font-open-type-features': `'ss01' on, 'ss02' on, 'ss07' on, 'cv01' on, 'cv09' on, 'cv02' on, 'cv03' on, 'cv04' on, 'cv12' on, 'cv10' on, 'cv08' on, 'cv05' on, 'cv07' on, 'cv13' on, 'cv06' on`,
                                          '--framer-font-size': `397.19276501310577px`,
                                          '--framer-font-weight': `600`,
                                          '--framer-letter-spacing': `-21.47px`,
                                          '--framer-line-height': `90%`,
                                          '--framer-text-color': `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                        },
                                        children: `Akihiko™`,
                                      }),
                                    }),
                                    className: `framer-1nbr0fn`,
                                    'data-framer-appear-id': `1nbr0fn`,
                                    'data-framer-name': `Text`,
                                    fonts: [`FR;InterDisplay-SemiBold`],
                                    initial: js,
                                    optimized: !0,
                                    verticalAlignment: `top`,
                                    viewBox: `0 0 1404 357`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                h(Io, {
                                  animate: Ms,
                                  className: `framer-icxlw2`,
                                  'data-framer-appear-id': `icxlw2`,
                                  'data-framer-name': `Loader`,
                                  initial: Ns,
                                  optimized: !0,
                                  children: h(Io, {
                                    animate: Ps,
                                    className: `framer-19mjztk`,
                                    'data-framer-appear-id': `19mjztk`,
                                    'data-framer-name': `Filler`,
                                    initial: js,
                                    optimized: !0,
                                  }),
                                }),
                              ],
                            }),
                            h(Io, {
                              animate: Es,
                              className: `framer-1oqrrs3`,
                              'data-framer-appear-id': `1oqrrs3`,
                              'data-framer-name': `Line`,
                              initial: Ds,
                              optimized: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    v(`section`, {
                      className: `framer-1ax983m`,
                      'data-framer-name': `About`,
                      children: [
                        h(H, {
                          height: 24,
                          width: `min(${c?.width || `100vw`}, 1480px)`,
                          children: h(z, {
                            className: `framer-1njfbtx-container`,
                            nodeId: `RkyiUStin`,
                            scopeId: `augiA20Il`,
                            children: h(q, {
                              breakpoint: Y,
                              overrides: {
                                TARYGz5CA: { variant: `CmSf9J7E0` },
                                uQRrO6hCw: { variant: `kQZZjN_Db` },
                              },
                              children: h(ze, {
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
                        v(`div`, {
                          className: `framer-iysrdq`,
                          'data-framer-name': `Content`,
                          children: [
                            Nt() &&
                              h(H, {
                                height: 24,
                                width: `min(${c?.width || `100vw`}, 1480px)`,
                                children: h(z, {
                                  className: `framer-1ms48bc-container hidden-1tqphhv hidden-12a2gtg`,
                                  nodeId: `YcKJy39p7`,
                                  scopeId: `augiA20Il`,
                                  children: h(ct, {
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
                            h(`div`, {
                              className: `framer-lr824`,
                              'data-framer-name': `Image`,
                              children: h(q, {
                                breakpoint: Y,
                                overrides: {
                                  TARYGz5CA: {
                                    background: {
                                      alt: `Women`,
                                      fit: `fill`,
                                      pixelHeight: 1080,
                                      pixelWidth: 445,
                                      sizes: `max(min(${c?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                      src: `https://framerusercontent.com/images/tY8u6w6WcMvM2lq1ng3voV3T5k.jpg?width=445&height=1080`,
                                      srcSet: `https://framerusercontent.com/images/tY8u6w6WcMvM2lq1ng3voV3T5k.jpg?width=445&height=1080 445w`,
                                    },
                                  },
                                  uQRrO6hCw: {
                                    background: {
                                      alt: `Women`,
                                      fit: `fill`,
                                      pixelHeight: 1080,
                                      pixelWidth: 445,
                                      sizes: `max(min(${c?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                      src: `https://framerusercontent.com/images/tY8u6w6WcMvM2lq1ng3voV3T5k.jpg?width=445&height=1080`,
                                      srcSet: `https://framerusercontent.com/images/tY8u6w6WcMvM2lq1ng3voV3T5k.jpg?width=445&height=1080 445w`,
                                    },
                                  },
                                },
                                children: h(zo, {
                                  __framer__adjustPosition: !1,
                                  __framer__offset: 0,
                                  __framer__parallaxTransformEnabled: !0,
                                  __framer__speed: 110,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  background: {
                                    alt: `Women`,
                                    fit: `fill`,
                                    pixelHeight: 1080,
                                    pixelWidth: 445,
                                    sizes: `473px`,
                                    src: `https://framerusercontent.com/images/tY8u6w6WcMvM2lq1ng3voV3T5k.jpg?width=445&height=1080`,
                                    srcSet: `https://framerusercontent.com/images/tY8u6w6WcMvM2lq1ng3voV3T5k.jpg?width=445&height=1080 445w`,
                                  },
                                  className: `framer-udqf9x`,
                                  'data-framer-name': `Parallex Effect`,
                                }),
                              }),
                            }),
                            v(`div`, {
                              className: `framer-1rl8hlq`,
                              'data-framer-name': `Content`,
                              children: [
                                v(`div`, {
                                  className: `framer-1v555c3`,
                                  'data-framer-name': `Heading`,
                                  children: [
                                    h(G, {
                                      __fromCanvasComponent: !0,
                                      children: h(s, {
                                        children: h(`h3`, {
                                          className: `framer-styles-preset-sng7in`,
                                          'data-styles-preset': `bLxN69a46`,
                                          children: `13+ years™ of digital form, sharp interactions, and relentless creative discipline and effort.`,
                                        }),
                                      }),
                                      className: `framer-em85qg`,
                                      'data-framer-name': `Text`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    h(k, {
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
                                        h(H, {
                                          height: 44,
                                          children: h(z, {
                                            className: `framer-1ajmrvo-container`,
                                            nodeId: `Fv0lw2fWK`,
                                            scopeId: `augiA20Il`,
                                            children: h(q, {
                                              breakpoint: Y,
                                              overrides: {
                                                TARYGz5CA: {
                                                  JQPbxOZrF: e[2],
                                                  variant: `TM6f2ytrb`,
                                                },
                                                uQRrO6hCw: { JQPbxOZrF: e[1] },
                                              },
                                              children: h(bt, {
                                                CSyo3aTPk: !1,
                                                Gh9QOfeLM: `Contact`,
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
                                v(`div`, {
                                  className: `framer-g03chh`,
                                  'data-framer-name': `Bottom`,
                                  children: [
                                    v(`div`, {
                                      className: `framer-175z5lx`,
                                      'data-framer-name': `Top Logos`,
                                      children: [
                                        h(q, {
                                          breakpoint: Y,
                                          overrides: {
                                            TARYGz5CA: {
                                              width: `calc(min(${c?.width || `100vw`}, 1480px) - 40px)`,
                                            },
                                            uQRrO6hCw: {
                                              width: `max((min(${c?.width || `100vw`}, 1480px) - 48px) / 5, 1px)`,
                                            },
                                          },
                                          children: h(H, {
                                            height: 151,
                                            children: h(z, {
                                              className: `framer-1iijldg-container`,
                                              nodeId: `dkryR8EHH`,
                                              scopeId: `augiA20Il`,
                                              children: h(q, {
                                                breakpoint: Y,
                                                overrides: { TARYGz5CA: { BDcLqNvJI: `10px` } },
                                                children: h(wo, {
                                                  BDcLqNvJI: `10px 10px 0px 10px`,
                                                  height: `100%`,
                                                  id: `dkryR8EHH`,
                                                  layoutId: `dkryR8EHH`,
                                                  style: { width: `100%` },
                                                  variant: `e9mENscFv`,
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        Mt() &&
                                          h(q, {
                                            breakpoint: Y,
                                            overrides: {
                                              uQRrO6hCw: {
                                                width: `max((min(${c?.width || `100vw`}, 1480px) - 48px) / 5, 1px)`,
                                              },
                                            },
                                            children: h(H, {
                                              height: 151,
                                              children: h(z, {
                                                className: `framer-1xfh2b8-container hidden-12a2gtg`,
                                                nodeId: `qep3AIqZp`,
                                                scopeId: `augiA20Il`,
                                                children: h(wo, {
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
                                        h(q, {
                                          breakpoint: Y,
                                          overrides: {
                                            TARYGz5CA: {
                                              width: `calc(min(${c?.width || `100vw`}, 1480px) - 40px)`,
                                            },
                                            uQRrO6hCw: {
                                              width: `max((min(${c?.width || `100vw`}, 1480px) - 48px) / 5, 1px)`,
                                            },
                                          },
                                          children: h(H, {
                                            height: 151,
                                            children: h(z, {
                                              className: `framer-ngmrzn-container`,
                                              nodeId: `qiHA8FDku`,
                                              scopeId: `augiA20Il`,
                                              children: h(q, {
                                                breakpoint: Y,
                                                overrides: { TARYGz5CA: { BDcLqNvJI: `10px` } },
                                                children: h(wo, {
                                                  BDcLqNvJI: `10px 10px 0px 0px`,
                                                  height: `100%`,
                                                  id: `qiHA8FDku`,
                                                  layoutId: `qiHA8FDku`,
                                                  MSyIX7cs8: Q(
                                                    {
                                                      pixelHeight: 58,
                                                      pixelWidth: 282,
                                                      src: `https://framerusercontent.com/images/6IX9srHugK666NPKQJythMbMME.png?width=282&height=58`,
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
                                        Mt() &&
                                          h(q, {
                                            breakpoint: Y,
                                            overrides: {
                                              uQRrO6hCw: {
                                                width: `max((min(${c?.width || `100vw`}, 1480px) - 48px) / 5, 1px)`,
                                              },
                                            },
                                            children: h(H, {
                                              height: 151,
                                              children: h(z, {
                                                className: `framer-1tvmme6-container hidden-12a2gtg`,
                                                nodeId: `T4tsvu21P`,
                                                scopeId: `augiA20Il`,
                                                children: h(wo, {
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
                                        h(q, {
                                          breakpoint: Y,
                                          overrides: {
                                            TARYGz5CA: {
                                              width: `calc(min(${c?.width || `100vw`}, 1480px) - 40px)`,
                                            },
                                            uQRrO6hCw: {
                                              width: `max((min(${c?.width || `100vw`}, 1480px) - 48px) / 5, 1px)`,
                                            },
                                          },
                                          children: h(H, {
                                            height: 151,
                                            children: h(z, {
                                              className: `framer-1tv4fvb-container`,
                                              nodeId: `gTaxO9rJh`,
                                              scopeId: `augiA20Il`,
                                              children: h(q, {
                                                breakpoint: Y,
                                                overrides: { TARYGz5CA: { BDcLqNvJI: `10px` } },
                                                children: h(wo, {
                                                  BDcLqNvJI: `10px 10px 10px 0px`,
                                                  height: `100%`,
                                                  id: `gTaxO9rJh`,
                                                  layoutId: `gTaxO9rJh`,
                                                  MSyIX7cs8: Q(
                                                    {
                                                      pixelHeight: 63,
                                                      pixelWidth: 225,
                                                      src: `https://framerusercontent.com/images/3cl6kEyD2XtSr3RQpeBuJPLW0DA.png?width=225&height=63`,
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
                                      ],
                                    }),
                                    v(`div`, {
                                      className: `framer-uxzvq2`,
                                      'data-framer-name': `Bottom Logos`,
                                      children: [
                                        Mt() &&
                                          h(q, {
                                            breakpoint: Y,
                                            overrides: {
                                              uQRrO6hCw: {
                                                width: `max((min(${c?.width || `100vw`}, 1480px) - 48px) / 5, 1px)`,
                                              },
                                            },
                                            children: h(H, {
                                              height: 151,
                                              children: h(z, {
                                                className: `framer-1yslzav-container hidden-12a2gtg`,
                                                nodeId: `JHvbstfzJ`,
                                                scopeId: `augiA20Il`,
                                                children: h(wo, {
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
                                        h(q, {
                                          breakpoint: Y,
                                          overrides: {
                                            TARYGz5CA: {
                                              width: `calc(min(${c?.width || `100vw`}, 1480px) - 40px)`,
                                            },
                                            uQRrO6hCw: {
                                              width: `max((min(${c?.width || `100vw`}, 1480px) - 48px) / 5, 1px)`,
                                            },
                                          },
                                          children: h(H, {
                                            height: 151,
                                            children: h(z, {
                                              className: `framer-w56dtp-container`,
                                              nodeId: `CIPVTHjl_`,
                                              scopeId: `augiA20Il`,
                                              children: h(q, {
                                                breakpoint: Y,
                                                overrides: { TARYGz5CA: { BDcLqNvJI: `10px` } },
                                                children: h(wo, {
                                                  BDcLqNvJI: `0px 0px 10px 10px`,
                                                  height: `100%`,
                                                  id: `CIPVTHjl_`,
                                                  layoutId: `CIPVTHjl_`,
                                                  MSyIX7cs8: Q(
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
                                        Mt() &&
                                          h(q, {
                                            breakpoint: Y,
                                            overrides: {
                                              uQRrO6hCw: {
                                                width: `max((min(${c?.width || `100vw`}, 1480px) - 48px) / 5, 1px)`,
                                              },
                                            },
                                            children: h(H, {
                                              height: 151,
                                              children: h(z, {
                                                className: `framer-5sd1c5-container hidden-12a2gtg`,
                                                nodeId: `LcXycjGmo`,
                                                scopeId: `augiA20Il`,
                                                children: h(wo, {
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
                                        h(q, {
                                          breakpoint: Y,
                                          overrides: {
                                            TARYGz5CA: {
                                              width: `calc(min(${c?.width || `100vw`}, 1480px) - 40px)`,
                                            },
                                            uQRrO6hCw: {
                                              width: `max((min(${c?.width || `100vw`}, 1480px) - 48px) / 5, 1px)`,
                                            },
                                          },
                                          children: h(H, {
                                            height: 151,
                                            children: h(z, {
                                              className: `framer-1umn22f-container`,
                                              nodeId: `MOxQuOqXt`,
                                              scopeId: `augiA20Il`,
                                              children: h(q, {
                                                breakpoint: Y,
                                                overrides: { TARYGz5CA: { BDcLqNvJI: `10px` } },
                                                children: h(wo, {
                                                  BDcLqNvJI: `0px 0px 10px 10px`,
                                                  height: `100%`,
                                                  id: `MOxQuOqXt`,
                                                  layoutId: `MOxQuOqXt`,
                                                  MSyIX7cs8: Q(
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
                                        Mt() &&
                                          h(q, {
                                            breakpoint: Y,
                                            overrides: {
                                              uQRrO6hCw: {
                                                width: `max((min(${c?.width || `100vw`}, 1480px) - 48px) / 5, 1px)`,
                                              },
                                            },
                                            children: h(H, {
                                              height: 151,
                                              children: h(z, {
                                                className: `framer-1pdl6xk-container hidden-12a2gtg`,
                                                nodeId: `UnNtufslh`,
                                                scopeId: `augiA20Il`,
                                                children: h(wo, {
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
                    v(`section`, {
                      className: `framer-7ma1j6`,
                      'data-framer-name': `Work`,
                      children: [
                        h(H, {
                          height: 24,
                          width: `min(${c?.width || `100vw`}, 1480px)`,
                          children: h(z, {
                            className: `framer-tjjepc-container`,
                            nodeId: `XfhgclTzR`,
                            scopeId: `augiA20Il`,
                            children: h(q, {
                              breakpoint: Y,
                              overrides: {
                                TARYGz5CA: {
                                  pWoyTVtQ4: `© Featured Projects`,
                                  variant: `CmSf9J7E0`,
                                },
                                uQRrO6hCw: { variant: `kQZZjN_Db` },
                              },
                              children: h(ze, {
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
                        v(`div`, {
                          className: `framer-nioezp`,
                          'data-framer-name': `Container`,
                          children: [
                            v(`div`, {
                              className: `framer-1iqzdbj`,
                              'data-framer-name': `Top`,
                              children: [
                                h(H, {
                                  height: 200,
                                  width: `min(${c?.width || `100vw`}, 1480px)`,
                                  children: h(z, {
                                    className: `framer-19mrkgn-container`,
                                    nodeId: `YpgrrxUtY`,
                                    scopeId: `augiA20Il`,
                                    children: h(q, {
                                      breakpoint: Y,
                                      overrides: {
                                        TARYGz5CA: { variant: `mURiTOP2G` },
                                        uQRrO6hCw: { variant: `bkXk11oSP` },
                                      },
                                      children: h(dt, {
                                        bO6IhWfEy: `Featured Works© `,
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
                                h(`div`, {
                                  className: `framer-hrs0gc`,
                                  'data-framer-name': `Line`,
                                }),
                                v(`div`, {
                                  className: `framer-1vtzatb`,
                                  'data-framer-name': `Body & Button`,
                                  children: [
                                    h(G, {
                                      __fromCanvasComponent: !0,
                                      children: h(s, {
                                        children: v(`p`, {
                                          className: `framer-styles-preset-14w8e6o`,
                                          'data-styles-preset': `FsS03h6Vk`,
                                          style: {
                                            '--framer-text-color': `var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgb(187, 187, 187))`,
                                          },
                                          children: [
                                            `Every project is a chance to blend design and development, shaping bold interactive ideas into `,
                                            h(`span`, {
                                              style: {
                                                '--framer-text-color': `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                              },
                                              children: v(`strong`, {
                                                children: [
                                                  `sleek digital `,
                                                  h(`br`, {}),
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
                                    h(k, {
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
                                        h(H, {
                                          height: 44,
                                          children: h(z, {
                                            className: `framer-1k5nnzf-container`,
                                            nodeId: `GIHZ11bCZ`,
                                            scopeId: `augiA20Il`,
                                            children: h(q, {
                                              breakpoint: Y,
                                              overrides: {
                                                TARYGz5CA: {
                                                  JQPbxOZrF: e[2],
                                                  variant: `TM6f2ytrb`,
                                                },
                                                uQRrO6hCw: { JQPbxOZrF: e[1] },
                                              },
                                              children: h(bt, {
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
                            h(`div`, {
                              className: `framer-ydi31p`,
                              'data-framer-name': `Bottom`,
                              children: v(`div`, {
                                className: `framer-1ejixw2`,
                                'data-framer-name': `Cards`,
                                children: [
                                  v(`div`, {
                                    className: `framer-yyr9dg`,
                                    'data-framer-name': `1`,
                                    children: [
                                      h(`div`, {
                                        className: `framer-aieywt`,
                                        'data-framer-name': `Work Card 1`,
                                        children: h(`div`, {
                                          className: `framer-1avqepk`,
                                          children: h(_e, {
                                            children: h(Fs, {
                                              pageSize: 1,
                                              query: {
                                                from: {
                                                  alias: `X2zJgUEET`,
                                                  data: Ct,
                                                  type: `Collection`,
                                                },
                                                offset: { type: `LiteralValue`, value: 0 },
                                                select: [
                                                  {
                                                    collection: `X2zJgUEET`,
                                                    name: `XVH_tgELr`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `X2zJgUEET`,
                                                    name: `yphiaikeG`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `X2zJgUEET`,
                                                    name: `YHo9k2VRN`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `X2zJgUEET`,
                                                    name: `YHsDzvkBN`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `X2zJgUEET`,
                                                    name: `wfPmAnXMd`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `X2zJgUEET`,
                                                    name: `P3BOIXzYK`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `X2zJgUEET`,
                                                    name: `id`,
                                                    type: `Identifier`,
                                                  },
                                                ],
                                              },
                                              children: (e, t, n) =>
                                                h(b, {
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
                                                      h(
                                                        E,
                                                        {
                                                          id: `X2zJgUEET-${e}`,
                                                          children: h(ye.Provider, {
                                                            value: { XVH_tgELr: r },
                                                            children: h(de, {
                                                              href: {
                                                                pathVariables: { XVH_tgELr: r },
                                                                webPageId: `AQdzOvSwE`,
                                                              },
                                                              motionChild: !0,
                                                              nodeId: `HiQeHNpv4`,
                                                              scopeId: `augiA20Il`,
                                                              children: h(C.a, {
                                                                className: `framer-tqvx7w framer-lux5qc`,
                                                                'data-framer-name': `Project`,
                                                                children: h(q, {
                                                                  breakpoint: Y,
                                                                  overrides: {
                                                                    TARYGz5CA: {
                                                                      height: 390,
                                                                      width: `max(min(${c?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                                                    },
                                                                    uQRrO6hCw: {
                                                                      height: 600,
                                                                      width: `max(min(${c?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                                                    },
                                                                  },
                                                                  children: h(H, {
                                                                    height: 749,
                                                                    width: `max((min(${c?.width || `100vw`}, 1480px) - 48px) * 0.5014, 1px)`,
                                                                    children: h(z, {
                                                                      className: `framer-1nqezu6-container`,
                                                                      'data-framer-cursor': `14bg376`,
                                                                      nodeId: `NajvUnw1T`,
                                                                      scopeId: `augiA20Il`,
                                                                      children: h(q, {
                                                                        breakpoint: Y,
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
                                                                        children: h(ut, {
                                                                          AqtGNwpbH: n,
                                                                          dRIEmL6Sy: a,
                                                                          G7pLazd_I: t,
                                                                          height: `100%`,
                                                                          id: `NajvUnw1T`,
                                                                          layoutId: `NajvUnw1T`,
                                                                          PC_QK2Qt6: $(i),
                                                                          style: { width: `100%` },
                                                                          T69HEV85j: $(o),
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
                                      h(`div`, {
                                        className: `framer-1bn3y75`,
                                        'data-framer-name': `Work Card 2`,
                                        children: h(`div`, {
                                          className: `framer-r9l3vn`,
                                          children: h(_e, {
                                            children: h(Is, {
                                              pageSize: 1,
                                              query: {
                                                from: {
                                                  alias: `KaprhgW6L`,
                                                  data: Ct,
                                                  type: `Collection`,
                                                },
                                                offset: { type: `LiteralValue`, value: 1 },
                                                select: [
                                                  {
                                                    collection: `KaprhgW6L`,
                                                    name: `XVH_tgELr`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `KaprhgW6L`,
                                                    name: `yphiaikeG`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `KaprhgW6L`,
                                                    name: `YHo9k2VRN`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `KaprhgW6L`,
                                                    name: `YHsDzvkBN`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `KaprhgW6L`,
                                                    name: `wfPmAnXMd`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `KaprhgW6L`,
                                                    name: `P3BOIXzYK`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `KaprhgW6L`,
                                                    name: `id`,
                                                    type: `Identifier`,
                                                  },
                                                ],
                                              },
                                              children: (e, t, n) =>
                                                h(b, {
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
                                                      h(
                                                        E,
                                                        {
                                                          id: `KaprhgW6L-${e}`,
                                                          children: h(ye.Provider, {
                                                            value: { XVH_tgELr: r },
                                                            children: h(de, {
                                                              href: {
                                                                pathVariables: { XVH_tgELr: r },
                                                                webPageId: `AQdzOvSwE`,
                                                              },
                                                              motionChild: !0,
                                                              nodeId: `Ag5f5XlUr`,
                                                              scopeId: `augiA20Il`,
                                                              children: h(C.a, {
                                                                className: `framer-1c3zuno framer-lux5qc`,
                                                                'data-framer-name': `Project`,
                                                                children: h(q, {
                                                                  breakpoint: Y,
                                                                  overrides: {
                                                                    TARYGz5CA: {
                                                                      width: `max(min(${c?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                                                    },
                                                                    uQRrO6hCw: {
                                                                      height: 600,
                                                                      width: `max(min(${c?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                                                    },
                                                                  },
                                                                  children: h(H, {
                                                                    height: 390,
                                                                    width: `max((min(${c?.width || `100vw`}, 1480px) - 48px) * 0.3506, 1px)`,
                                                                    children: h(z, {
                                                                      className: `framer-1io1jaa-container`,
                                                                      'data-framer-cursor': `14bg376`,
                                                                      nodeId: `TXEs8QD0D`,
                                                                      scopeId: `augiA20Il`,
                                                                      children: h(q, {
                                                                        breakpoint: Y,
                                                                        overrides: {
                                                                          TARYGz5CA: {
                                                                            variant: `gO3DGLxth`,
                                                                          },
                                                                          uQRrO6hCw: {
                                                                            variant: `gO3DGLxth`,
                                                                          },
                                                                        },
                                                                        children: h(ut, {
                                                                          AqtGNwpbH: n,
                                                                          dRIEmL6Sy: a,
                                                                          G7pLazd_I: t,
                                                                          height: `100%`,
                                                                          id: `TXEs8QD0D`,
                                                                          layoutId: `TXEs8QD0D`,
                                                                          PC_QK2Qt6: $(i),
                                                                          style: {
                                                                            height: `100%`,
                                                                            width: `100%`,
                                                                          },
                                                                          T69HEV85j: $(o),
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
                                  h(`div`, {
                                    className: `framer-1ep4u7l`,
                                    'data-framer-name': `2`,
                                    children: h(`div`, {
                                      className: `framer-19fh9pm`,
                                      children: h(_e, {
                                        children: h(Ls, {
                                          pageSize: 1,
                                          query: {
                                            from: {
                                              alias: `yP6ayj6je`,
                                              data: Ct,
                                              type: `Collection`,
                                            },
                                            offset: { type: `LiteralValue`, value: 2 },
                                            select: [
                                              {
                                                collection: `yP6ayj6je`,
                                                name: `XVH_tgELr`,
                                                type: `Identifier`,
                                              },
                                              {
                                                collection: `yP6ayj6je`,
                                                name: `yphiaikeG`,
                                                type: `Identifier`,
                                              },
                                              {
                                                collection: `yP6ayj6je`,
                                                name: `YHo9k2VRN`,
                                                type: `Identifier`,
                                              },
                                              {
                                                collection: `yP6ayj6je`,
                                                name: `YHsDzvkBN`,
                                                type: `Identifier`,
                                              },
                                              {
                                                collection: `yP6ayj6je`,
                                                name: `wfPmAnXMd`,
                                                type: `Identifier`,
                                              },
                                              {
                                                collection: `yP6ayj6je`,
                                                name: `P3BOIXzYK`,
                                                type: `Identifier`,
                                              },
                                              {
                                                collection: `yP6ayj6je`,
                                                name: `id`,
                                                type: `Identifier`,
                                              },
                                            ],
                                          },
                                          children: (e, t, n) =>
                                            h(b, {
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
                                                  h(
                                                    E,
                                                    {
                                                      id: `yP6ayj6je-${e}`,
                                                      children: h(ye.Provider, {
                                                        value: { XVH_tgELr: r },
                                                        children: h(de, {
                                                          href: {
                                                            pathVariables: { XVH_tgELr: r },
                                                            webPageId: `AQdzOvSwE`,
                                                          },
                                                          motionChild: !0,
                                                          nodeId: `DE5ctoLbr`,
                                                          scopeId: `augiA20Il`,
                                                          children: h(C.a, {
                                                            className: `framer-859d0m framer-lux5qc`,
                                                            'data-framer-name': `Project`,
                                                            children: h(q, {
                                                              breakpoint: Y,
                                                              overrides: {
                                                                TARYGz5CA: {
                                                                  height: 390,
                                                                  width: `max(min(${c?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                                                },
                                                                uQRrO6hCw: {
                                                                  height: 600,
                                                                  width: `max(min(${c?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                                                },
                                                              },
                                                              children: h(H, {
                                                                height: 590,
                                                                width: `max((min(${c?.width || `100vw`}, 1480px) - 48px) * 0.3218, 1px)`,
                                                                children: h(z, {
                                                                  className: `framer-1gusm9m-container`,
                                                                  'data-framer-cursor': `14bg376`,
                                                                  nodeId: `l4MamVi71`,
                                                                  scopeId: `augiA20Il`,
                                                                  children: h(q, {
                                                                    breakpoint: Y,
                                                                    overrides: {
                                                                      TARYGz5CA: {
                                                                        variant: `gO3DGLxth`,
                                                                      },
                                                                      uQRrO6hCw: {
                                                                        variant: `gO3DGLxth`,
                                                                      },
                                                                    },
                                                                    children: h(ut, {
                                                                      AqtGNwpbH: n,
                                                                      dRIEmL6Sy: a,
                                                                      G7pLazd_I: t,
                                                                      height: `100%`,
                                                                      id: `l4MamVi71`,
                                                                      layoutId: `l4MamVi71`,
                                                                      PC_QK2Qt6: $(i),
                                                                      style: {
                                                                        height: `100%`,
                                                                        width: `100%`,
                                                                      },
                                                                      T69HEV85j: $(o),
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
                                  v(`div`, {
                                    className: `framer-a02h80`,
                                    'data-framer-name': `3`,
                                    children: [
                                      h(`div`, {
                                        className: `framer-ayya54`,
                                        'data-framer-name': `Work Card 4`,
                                        children: h(`div`, {
                                          className: `framer-vrk7k3`,
                                          children: h(_e, {
                                            children: h(Rs, {
                                              pageSize: 1,
                                              query: {
                                                from: {
                                                  alias: `dVg7BWnyh`,
                                                  data: Ct,
                                                  type: `Collection`,
                                                },
                                                offset: { type: `LiteralValue`, value: 3 },
                                                select: [
                                                  {
                                                    collection: `dVg7BWnyh`,
                                                    name: `XVH_tgELr`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `dVg7BWnyh`,
                                                    name: `yphiaikeG`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `dVg7BWnyh`,
                                                    name: `YHo9k2VRN`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `dVg7BWnyh`,
                                                    name: `YHsDzvkBN`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `dVg7BWnyh`,
                                                    name: `wfPmAnXMd`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `dVg7BWnyh`,
                                                    name: `P3BOIXzYK`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `dVg7BWnyh`,
                                                    name: `id`,
                                                    type: `Identifier`,
                                                  },
                                                ],
                                              },
                                              children: (e, t, n) =>
                                                h(b, {
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
                                                      h(
                                                        E,
                                                        {
                                                          id: `dVg7BWnyh-${e}`,
                                                          children: h(ye.Provider, {
                                                            value: { XVH_tgELr: r },
                                                            children: h(de, {
                                                              href: {
                                                                pathVariables: { XVH_tgELr: r },
                                                                webPageId: `AQdzOvSwE`,
                                                              },
                                                              motionChild: !0,
                                                              nodeId: `Pkfg1aBpD`,
                                                              scopeId: `augiA20Il`,
                                                              children: h(C.a, {
                                                                className: `framer-2b77dg framer-lux5qc`,
                                                                'data-framer-name': `Project`,
                                                                children: h(q, {
                                                                  breakpoint: Y,
                                                                  overrides: {
                                                                    TARYGz5CA: {
                                                                      width: `max(min(${c?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                                                    },
                                                                    uQRrO6hCw: {
                                                                      height: 600,
                                                                      width: `max(min(${c?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                                                    },
                                                                  },
                                                                  children: h(H, {
                                                                    height: 390,
                                                                    width: `max((min(${c?.width || `100vw`}, 1480px) - 48px) * 0.3218, 1px)`,
                                                                    children: h(z, {
                                                                      className: `framer-1d8vcph-container`,
                                                                      'data-framer-cursor': `14bg376`,
                                                                      nodeId: `gJeFz4xSx`,
                                                                      scopeId: `augiA20Il`,
                                                                      children: h(q, {
                                                                        breakpoint: Y,
                                                                        overrides: {
                                                                          TARYGz5CA: {
                                                                            variant: `gO3DGLxth`,
                                                                          },
                                                                          uQRrO6hCw: {
                                                                            variant: `gO3DGLxth`,
                                                                          },
                                                                        },
                                                                        children: h(ut, {
                                                                          AqtGNwpbH: n,
                                                                          dRIEmL6Sy: a,
                                                                          G7pLazd_I: t,
                                                                          height: `100%`,
                                                                          id: `gJeFz4xSx`,
                                                                          layoutId: `gJeFz4xSx`,
                                                                          PC_QK2Qt6: $(i),
                                                                          style: {
                                                                            height: `100%`,
                                                                            width: `100%`,
                                                                          },
                                                                          T69HEV85j: $(o),
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
                                      h(`div`, {
                                        className: `framer-roc34l`,
                                        'data-framer-name': `Work Card 5`,
                                        children: h(`div`, {
                                          className: `framer-1nmac4u`,
                                          children: h(_e, {
                                            children: h(zs, {
                                              pageSize: 1,
                                              query: {
                                                from: {
                                                  alias: `Xq8XtaAUP`,
                                                  data: Ct,
                                                  type: `Collection`,
                                                },
                                                offset: { type: `LiteralValue`, value: 4 },
                                                select: [
                                                  {
                                                    collection: `Xq8XtaAUP`,
                                                    name: `XVH_tgELr`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `Xq8XtaAUP`,
                                                    name: `yphiaikeG`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `Xq8XtaAUP`,
                                                    name: `YHo9k2VRN`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `Xq8XtaAUP`,
                                                    name: `YHsDzvkBN`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `Xq8XtaAUP`,
                                                    name: `wfPmAnXMd`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `Xq8XtaAUP`,
                                                    name: `P3BOIXzYK`,
                                                    type: `Identifier`,
                                                  },
                                                  {
                                                    collection: `Xq8XtaAUP`,
                                                    name: `id`,
                                                    type: `Identifier`,
                                                  },
                                                ],
                                              },
                                              children: (e, t, n) =>
                                                h(b, {
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
                                                      h(
                                                        E,
                                                        {
                                                          id: `Xq8XtaAUP-${e}`,
                                                          children: h(ye.Provider, {
                                                            value: { XVH_tgELr: r },
                                                            children: h(de, {
                                                              href: {
                                                                pathVariables: { XVH_tgELr: r },
                                                                webPageId: `AQdzOvSwE`,
                                                              },
                                                              motionChild: !0,
                                                              nodeId: `L2npSo_Xt`,
                                                              scopeId: `augiA20Il`,
                                                              children: h(C.a, {
                                                                className: `framer-1vtosv4 framer-lux5qc`,
                                                                'data-framer-name': `Project`,
                                                                children: h(q, {
                                                                  breakpoint: Y,
                                                                  overrides: {
                                                                    TARYGz5CA: {
                                                                      height: 390,
                                                                      width: `max(min(${c?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                                                    },
                                                                    uQRrO6hCw: {
                                                                      height: 600,
                                                                      width: `max(min(${c?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                                                    },
                                                                  },
                                                                  children: h(H, {
                                                                    height: 490,
                                                                    width: `max((min(${c?.width || `100vw`}, 1480px) - 48px) * 0.3218, 1px)`,
                                                                    children: h(z, {
                                                                      className: `framer-1cx19ot-container`,
                                                                      'data-framer-cursor': `14bg376`,
                                                                      nodeId: `hTitG5I3J`,
                                                                      scopeId: `augiA20Il`,
                                                                      children: h(q, {
                                                                        breakpoint: Y,
                                                                        overrides: {
                                                                          TARYGz5CA: {
                                                                            variant: `gO3DGLxth`,
                                                                          },
                                                                          uQRrO6hCw: {
                                                                            variant: `gO3DGLxth`,
                                                                          },
                                                                        },
                                                                        children: h(ut, {
                                                                          AqtGNwpbH: n,
                                                                          dRIEmL6Sy: a,
                                                                          G7pLazd_I: t,
                                                                          height: `100%`,
                                                                          id: `hTitG5I3J`,
                                                                          layoutId: `hTitG5I3J`,
                                                                          PC_QK2Qt6: $(i),
                                                                          style: {
                                                                            height: `100%`,
                                                                            width: `100%`,
                                                                          },
                                                                          T69HEV85j: $(o),
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
                    v(`section`, {
                      className: `framer-ywystf`,
                      'data-framer-name': `Services`,
                      children: [
                        h(H, {
                          height: 24,
                          width: `min(${c?.width || `100vw`}, 1480px)`,
                          children: h(z, {
                            className: `framer-17yesjc-container`,
                            nodeId: `QHJIkFW3i`,
                            scopeId: `augiA20Il`,
                            children: h(q, {
                              breakpoint: Y,
                              overrides: {
                                TARYGz5CA: { variant: `CmSf9J7E0` },
                                uQRrO6hCw: { variant: `CmSf9J7E0` },
                              },
                              children: h(ze, {
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
                        v(`div`, {
                          className: `framer-1shioqx`,
                          'data-framer-name': `Heading`,
                          children: [
                            h(Wo, {
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
                              children: h(s, {
                                children: h(`h1`, {
                                  className: `framer-styles-preset-je0rn0`,
                                  'data-styles-preset': `YMtdKmiBu`,
                                  style: { '--framer-text-alignment': `left` },
                                  children: `Services`,
                                }),
                              }),
                              className: `framer-qfi1to`,
                              'data-framer-name': `Text`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            h(`div`, {
                              className: `framer-z6tqd1`,
                              'data-framer-name': `Number`,
                              children: h(Wo, {
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
                                children: h(s, {
                                  children: h(`h3`, {
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
                        h(H, {
                          height: 24,
                          width: `min(${c?.width || `100vw`}, 1480px)`,
                          children: h(z, {
                            className: `framer-dlgb9u-container`,
                            nodeId: `efNFxisVk`,
                            scopeId: `augiA20Il`,
                            children: h(ct, {
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
                        h(q, {
                          breakpoint: Y,
                          overrides: {
                            TARYGz5CA: { width: `min(${c?.width || `100vw`}, 1480px)` },
                            uQRrO6hCw: { width: `min(${c?.width || `100vw`}, 1480px)` },
                          },
                          children: h(H, {
                            height: 541,
                            width: `calc(min(${c?.width || `100vw`}, 1480px) * 0.64)`,
                            children: h(z, {
                              className: `framer-b48xgz-container`,
                              nodeId: `PtpQBNC0J`,
                              scopeId: `augiA20Il`,
                              children: h(q, {
                                breakpoint: Y,
                                overrides: {
                                  TARYGz5CA: { variant: `IGLDqE_JA` },
                                  uQRrO6hCw: { variant: `m85hHFNAk` },
                                },
                                children: h(aa, {
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
                    v(`section`, {
                      className: `framer-1390c7e`,
                      'data-framer-name': `About`,
                      children: [
                        h(H, {
                          height: 24,
                          width: `min(${c?.width || `100vw`}, 1480px)`,
                          children: h(z, {
                            className: `framer-1bhtlar-container`,
                            nodeId: `wGpl0KdgI`,
                            scopeId: `augiA20Il`,
                            children: h(q, {
                              breakpoint: Y,
                              overrides: {
                                TARYGz5CA: { variant: `CmSf9J7E0` },
                                uQRrO6hCw: { variant: `kQZZjN_Db` },
                              },
                              children: h(ze, {
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
                        v(`div`, {
                          className: `framer-1wqpm7v`,
                          'data-framer-name': `Content`,
                          children: [
                            h(q, {
                              breakpoint: Y,
                              overrides: {
                                TARYGz5CA: {
                                  __framer__speed: 105,
                                  background: {
                                    alt: `Man Back Pose`,
                                    fit: `fill`,
                                    pixelHeight: 1280,
                                    pixelWidth: 896,
                                    sizes: `76px`,
                                    src: `https://framerusercontent.com/images/5emb8oOwafbQsfWVIaaZ12WcTM.png?width=896&height=1280`,
                                    srcSet: `https://framerusercontent.com/images/5emb8oOwafbQsfWVIaaZ12WcTM.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/5emb8oOwafbQsfWVIaaZ12WcTM.png?width=896&height=1280 896w`,
                                  },
                                },
                                uQRrO6hCw: {
                                  __framer__speed: 105,
                                  background: {
                                    alt: `Man Back Pose`,
                                    fit: `fill`,
                                    pixelHeight: 1280,
                                    pixelWidth: 896,
                                    sizes: `147px`,
                                    src: `https://framerusercontent.com/images/5emb8oOwafbQsfWVIaaZ12WcTM.png?width=896&height=1280`,
                                    srcSet: `https://framerusercontent.com/images/5emb8oOwafbQsfWVIaaZ12WcTM.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/5emb8oOwafbQsfWVIaaZ12WcTM.png?width=896&height=1280 896w`,
                                  },
                                },
                              },
                              children: h(zo, {
                                __framer__adjustPosition: !1,
                                __framer__offset: 0,
                                __framer__parallaxTransformEnabled: !0,
                                __framer__speed: 110,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: `Man Back Pose`,
                                  fit: `fill`,
                                  pixelHeight: 1280,
                                  pixelWidth: 896,
                                  sizes: `326px`,
                                  src: `https://framerusercontent.com/images/5emb8oOwafbQsfWVIaaZ12WcTM.png?width=896&height=1280`,
                                  srcSet: `https://framerusercontent.com/images/5emb8oOwafbQsfWVIaaZ12WcTM.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/5emb8oOwafbQsfWVIaaZ12WcTM.png?width=896&height=1280 896w`,
                                },
                                className: `framer-ica3fy`,
                                'data-framer-name': `Parallex Image`,
                              }),
                            }),
                            h(q, {
                              breakpoint: Y,
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
                              children: h(zo, {
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
                                children: h(H, {
                                  children: h(z, {
                                    className: `framer-qplkjo-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `ssKq0581X`,
                                    scopeId: `augiA20Il`,
                                    children: h(ot, {
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
                                      posterEnabled: !0,
                                      srcFile: `https://framerusercontent.com/assets/fEkvm0HYUUFHc0WiH6ssCVGITR0.mp4`,
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
                            h(q, {
                              breakpoint: Y,
                              overrides: {
                                TARYGz5CA: {
                                  __framer__speed: 105,
                                  background: {
                                    alt: `Woman`,
                                    fit: `fill`,
                                    pixelHeight: 1280,
                                    pixelWidth: 896,
                                    sizes: `85px`,
                                    src: `https://framerusercontent.com/images/yUjsrtPDoJaAyLT8KHf8xhtWa8A.png?width=896&height=1280`,
                                    srcSet: `https://framerusercontent.com/images/yUjsrtPDoJaAyLT8KHf8xhtWa8A.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/yUjsrtPDoJaAyLT8KHf8xhtWa8A.png?width=896&height=1280 896w`,
                                  },
                                },
                                uQRrO6hCw: {
                                  __framer__speed: 105,
                                  background: {
                                    alt: `Woman`,
                                    fit: `fill`,
                                    pixelHeight: 1280,
                                    pixelWidth: 896,
                                    sizes: `156px`,
                                    src: `https://framerusercontent.com/images/yUjsrtPDoJaAyLT8KHf8xhtWa8A.png?width=896&height=1280`,
                                    srcSet: `https://framerusercontent.com/images/yUjsrtPDoJaAyLT8KHf8xhtWa8A.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/yUjsrtPDoJaAyLT8KHf8xhtWa8A.png?width=896&height=1280 896w`,
                                  },
                                },
                              },
                              children: h(zo, {
                                __framer__adjustPosition: !1,
                                __framer__offset: 0,
                                __framer__parallaxTransformEnabled: !0,
                                __framer__speed: 110,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: `Woman`,
                                  fit: `fill`,
                                  pixelHeight: 1280,
                                  pixelWidth: 896,
                                  sizes: `326px`,
                                  src: `https://framerusercontent.com/images/yUjsrtPDoJaAyLT8KHf8xhtWa8A.png?width=896&height=1280`,
                                  srcSet: `https://framerusercontent.com/images/yUjsrtPDoJaAyLT8KHf8xhtWa8A.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/yUjsrtPDoJaAyLT8KHf8xhtWa8A.png?width=896&height=1280 896w`,
                                },
                                className: `framer-cpykhu`,
                                'data-framer-name': `Parallex Image`,
                              }),
                            }),
                            h(`div`, {
                              className: `framer-3j4you`,
                              'data-framer-name': `Text`,
                              children: h(H, {
                                children: h(z, {
                                  className: `framer-p0ih05-container`,
                                  'data-framer-name': `Reveal Text`,
                                  isAuthoredByUser: !0,
                                  name: `Reveal Text`,
                                  nodeId: `lM3wAY8xL`,
                                  scopeId: `augiA20Il`,
                                  children: h(q, {
                                    breakpoint: Y,
                                    overrides: { TARYGz5CA: { fontSize: 45, lineHeight: 48 } },
                                    children: h(Eo, {
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
                                      text: `Blending design and code with functional clarity and creative precision. Delivering thoughtful digital systems with structure, flow, and expressive interaction.`,
                                      transitionStartIndex: 0,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            h(`div`, {
                              className: `framer-1wraq4e`,
                              'data-framer-name': `Container`,
                              children: v(`div`, {
                                className: `framer-6vahvq`,
                                'data-framer-name': `Body Text & Button`,
                                children: [
                                  h(G, {
                                    __fromCanvasComponent: !0,
                                    children: h(s, {
                                      children: v(`p`, {
                                        className: `framer-styles-preset-14w8e6o`,
                                        'data-styles-preset': `FsS03h6Vk`,
                                        style: {
                                          '--framer-text-color': `var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgb(187, 187, 187))`,
                                        },
                                        children: [
                                          `We bridge creative direction with real-world execution, combining design and development into one `,
                                          h(`span`, {
                                            style: {
                                              '--framer-text-color': `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                            },
                                            children: h(`strong`, {
                                              children: `seamless workflow`,
                                            }),
                                          }),
                                          ` to deliver digital experiences that are thoughtful, fast, and built to perform.`,
                                        ],
                                      }),
                                    }),
                                    className: `framer-10fi5y6`,
                                    'data-framer-name': `Body Text`,
                                    fonts: [`Inter`, `Inter-Bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  h(k, {
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
                                      h(H, {
                                        height: 44,
                                        children: h(z, {
                                          className: `framer-lm13iu-container`,
                                          nodeId: `fpIsyyPbF`,
                                          scopeId: `augiA20Il`,
                                          children: h(q, {
                                            breakpoint: Y,
                                            overrides: {
                                              TARYGz5CA: { JQPbxOZrF: e[2], variant: `TM6f2ytrb` },
                                              uQRrO6hCw: { JQPbxOZrF: e[1] },
                                            },
                                            children: h(bt, {
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
                    v(`section`, {
                      className: `framer-3bo6w`,
                      'data-framer-name': `Experience`,
                      children: [
                        h(H, {
                          height: 24,
                          width: `min(${c?.width || `100vw`}, 1480px)`,
                          children: h(z, {
                            className: `framer-1fvzi93-container`,
                            nodeId: `ktb673ff6`,
                            scopeId: `augiA20Il`,
                            children: h(q, {
                              breakpoint: Y,
                              overrides: {
                                TARYGz5CA: { variant: `CmSf9J7E0` },
                                uQRrO6hCw: { variant: `kQZZjN_Db` },
                              },
                              children: h(ze, {
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
                        v(`div`, {
                          className: `framer-1gmzvq4`,
                          'data-framer-name': `Container`,
                          children: [
                            v(`div`, {
                              className: `framer-1l9i2gv`,
                              'data-framer-name': `Content`,
                              children: [
                                h(`div`, {
                                  className: `framer-bcin9m`,
                                  'data-framer-name': `Heading`,
                                  children: h(H, {
                                    children: h(Yo, {
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
                                      children: h(q, {
                                        breakpoint: Y,
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
                                        children: h(Et, {
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
                                          text: `Practice., Craft., Tenure.`,
                                          userSelect: !1,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                Nt() &&
                                  v(`div`, {
                                    className: `framer-pq27se hidden-1tqphhv hidden-12a2gtg`,
                                    'data-framer-name': `Image`,
                                    children: [
                                      h(W, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 45.5,
                                          intrinsicWidth: 256.5,
                                          pixelHeight: 91,
                                          pixelWidth: 513,
                                          sizes: `128px`,
                                          src: `https://framerusercontent.com/images/4oaOsuXcxdhxXiQToWWNNSmbM.png?scale-down-to=512&width=513&height=91`,
                                          srcSet: `https://framerusercontent.com/images/4oaOsuXcxdhxXiQToWWNNSmbM.png?scale-down-to=512&width=513&height=91 512w,https://framerusercontent.com/images/4oaOsuXcxdhxXiQToWWNNSmbM.png?width=513&height=91 513w`,
                                        },
                                        className: `framer-vzjr3v`,
                                        'data-framer-name': `Signature`,
                                      }),
                                      h(H, {
                                        height: 198,
                                        width: `136px`,
                                        children: h(z, {
                                          className: `framer-uibrbw-container`,
                                          nodeId: `XhhHrXDzG`,
                                          scopeId: `augiA20Il`,
                                          children: h(je, {
                                            bNIxmSYTX: Q(
                                              {
                                                pixelHeight: 1280,
                                                pixelWidth: 896,
                                                src: `https://framerusercontent.com/images/O8QHzRBHCQM4fDoxXZEZmECZs.png?width=896&height=1280`,
                                                srcSet: `https://framerusercontent.com/images/O8QHzRBHCQM4fDoxXZEZmECZs.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/O8QHzRBHCQM4fDoxXZEZmECZs.png?width=896&height=1280 896w`,
                                              },
                                              `Man On The Chair`
                                            ),
                                            CXo7fyVBS: Q(
                                              {
                                                pixelHeight: 1280,
                                                pixelWidth: 896,
                                                src: `https://framerusercontent.com/images/1PWWcESZI457g1Ne2vCs8dotnFg.png?width=896&height=1280`,
                                                srcSet: `https://framerusercontent.com/images/1PWWcESZI457g1Ne2vCs8dotnFg.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/1PWWcESZI457g1Ne2vCs8dotnFg.png?width=896&height=1280 896w`,
                                              },
                                              `Woman In The Garden`
                                            ),
                                            height: `100%`,
                                            Hu6fn5bt1: Q(
                                              {
                                                pixelHeight: 1280,
                                                pixelWidth: 896,
                                                src: `https://framerusercontent.com/images/mILv5tZazFB5OMaifXibUEL1w.png?width=896&height=1280`,
                                                srcSet: `https://framerusercontent.com/images/mILv5tZazFB5OMaifXibUEL1w.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/mILv5tZazFB5OMaifXibUEL1w.png?width=896&height=1280 896w`,
                                              },
                                              `Woman Running`
                                            ),
                                            id: `XhhHrXDzG`,
                                            layoutId: `XhhHrXDzG`,
                                            style: { height: `100%`, width: `100%` },
                                            UhE81XPkg: Q(
                                              {
                                                pixelHeight: 2560,
                                                pixelWidth: 1792,
                                                src: `https://framerusercontent.com/images/Lb6dFhKJo6UvYVXUafcZv0n5E.jpg?width=1792&height=2560`,
                                                srcSet: `https://framerusercontent.com/images/Lb6dFhKJo6UvYVXUafcZv0n5E.jpg?scale-down-to=1024&width=1792&height=2560 716w,https://framerusercontent.com/images/Lb6dFhKJo6UvYVXUafcZv0n5E.jpg?scale-down-to=2048&width=1792&height=2560 1433w,https://framerusercontent.com/images/Lb6dFhKJo6UvYVXUafcZv0n5E.jpg?width=1792&height=2560 1792w`,
                                              },
                                              `Man Back Pose`
                                            ),
                                            variant: `RSG36cpMb`,
                                            width: `100%`,
                                            YzLWPJL0x: Q(
                                              {
                                                pixelHeight: 1280,
                                                pixelWidth: 896,
                                                src: `https://framerusercontent.com/images/NImckIKrMa4ftZSKkbYa96daA.png?width=896&height=1280`,
                                                srcSet: `https://framerusercontent.com/images/NImckIKrMa4ftZSKkbYa96daA.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/NImckIKrMa4ftZSKkbYa96daA.png?width=896&height=1280 896w`,
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
                            h(H, {
                              height: 24,
                              width: `min(${c?.width || `100vw`}, 1480px)`,
                              children: h(z, {
                                className: `framer-1tu45ze-container`,
                                nodeId: `oC0j7jxo5`,
                                scopeId: `augiA20Il`,
                                children: h(ct, {
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
                        h(H, {
                          height: 272,
                          width: `min(${c?.width || `100vw`}, 1480px)`,
                          children: h(z, {
                            className: `framer-ziuq0f-container`,
                            nodeId: `xeTXEJLF3`,
                            scopeId: `augiA20Il`,
                            children: h(q, {
                              breakpoint: Y,
                              overrides: {
                                TARYGz5CA: { variant: `nTqkcZrXm` },
                                uQRrO6hCw: { variant: `GsDxk_3Ju` },
                              },
                              children: h(Ma, {
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
                    v(`section`, {
                      className: `framer-1584asb`,
                      'data-framer-name': `Testimonial`,
                      children: [
                        h(H, {
                          height: 24,
                          width: `min(${c?.width || `100vw`}, 1480px)`,
                          children: h(z, {
                            className: `framer-izk59c-container`,
                            nodeId: `mNNtD1AF6`,
                            scopeId: `augiA20Il`,
                            children: h(q, {
                              breakpoint: Y,
                              overrides: {
                                TARYGz5CA: { variant: `CmSf9J7E0` },
                                uQRrO6hCw: { variant: `kQZZjN_Db` },
                              },
                              children: h(ze, {
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
                        v(`div`, {
                          className: `framer-1y8re1e`,
                          'data-framer-name': `Container`,
                          children: [
                            h(`div`, {
                              className: `framer-1yqd1cr`,
                              'data-framer-name': `Sticky`,
                              children: v(`div`, {
                                className: `framer-cugt0u`,
                                'data-framer-name': `Content`,
                                children: [
                                  h(H, {
                                    height: 200,
                                    width: `max(min(${c?.width || `100vw`}, 1480px), 1px)`,
                                    children: h(z, {
                                      className: `framer-1da5zd7-container`,
                                      nodeId: `PSZc6R4uf`,
                                      scopeId: `augiA20Il`,
                                      children: h(q, {
                                        breakpoint: Y,
                                        overrides: {
                                          TARYGz5CA: { variant: `mURiTOP2G` },
                                          uQRrO6hCw: { variant: `bkXk11oSP` },
                                        },
                                        children: h(dt, {
                                          bO6IhWfEy: `Testimonial© - Reviews  `,
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
                                  h(`div`, {
                                    className: `framer-iz2ttu`,
                                    'data-framer-name': `Button`,
                                    children: h(k, {
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
                                        h(H, {
                                          height: 44,
                                          children: h(z, {
                                            className: `framer-6n8j6c-container`,
                                            nodeId: `HHKyxuRpk`,
                                            scopeId: `augiA20Il`,
                                            children: h(q, {
                                              breakpoint: Y,
                                              overrides: {
                                                TARYGz5CA: {
                                                  JQPbxOZrF: e[2],
                                                  variant: `TM6f2ytrb`,
                                                },
                                                uQRrO6hCw: { JQPbxOZrF: e[1] },
                                              },
                                              children: h(bt, {
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
                            v(`div`, {
                              className: `framer-1ci02mx`,
                              'data-framer-name': `Testimonial Cards`,
                              children: [
                                v(`div`, {
                                  className: `framer-1lhy046`,
                                  'data-framer-name': `1 & 2`,
                                  children: [
                                    h(q, {
                                      breakpoint: Y,
                                      overrides: {
                                        TARYGz5CA: {
                                          width: `calc(min(${c?.width || `100vw`}, 1480px) - 40px)`,
                                        },
                                        uQRrO6hCw: { width: `330px` },
                                      },
                                      children: h(H, {
                                        height: 321,
                                        width: `370px`,
                                        children: h(z, {
                                          className: `framer-fh9adf-container`,
                                          nodeId: `HfE9uDuRR`,
                                          scopeId: `augiA20Il`,
                                          children: h(Mi, {
                                            GDX03WB2s: `Founder, Studio Analog`,
                                            height: `100%`,
                                            id: `HfE9uDuRR`,
                                            layoutId: `HfE9uDuRR`,
                                            PXhdA1o5u: `"Akihiko elevated every layer of our brand’s online presence. From motion details to structural layout, every piece felt crafted and intentional. The site not only looked beautiful but performed well too — and the entire collaboration process was smooth."`,
                                            SfDOWebi7: `Lisa Kuroda`,
                                            style: { width: `100%` },
                                            TQKawNzuI: Q(
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
                                    h(`div`, {
                                      className: `framer-1w24wxd`,
                                      'data-framer-name': `2`,
                                      children: h(q, {
                                        breakpoint: Y,
                                        overrides: {
                                          TARYGz5CA: {
                                            width: `calc(min(${c?.width || `100vw`}, 1480px) - 40px)`,
                                          },
                                          uQRrO6hCw: { width: `330px` },
                                        },
                                        children: h(H, {
                                          height: 321,
                                          width: `370px`,
                                          children: h(z, {
                                            className: `framer-217sdr-container`,
                                            nodeId: `VO_wV88VM`,
                                            scopeId: `augiA20Il`,
                                            children: h(Mi, {
                                              GDX03WB2s: `Director, Framehaus`,
                                              height: `100%`,
                                              id: `VO_wV88VM`,
                                              layoutId: `VO_wV88VM`,
                                              PXhdA1o5u: `"Akihiko approaches every project with a deep sense of purpose. His work is never just about the surface — it’s about how each element functions, connects, and flows. He brings logic, sharpness, and confidence to every decision, and his build quality."`,
                                              SfDOWebi7: `Daniel Reyes`,
                                              style: { width: `100%` },
                                              TQKawNzuI: Q(
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
                                h(`div`, {
                                  className: `framer-ut62vy`,
                                  'data-framer-name': `3`,
                                  children: h(q, {
                                    breakpoint: Y,
                                    overrides: {
                                      TARYGz5CA: {
                                        width: `max(min(${c?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                      },
                                    },
                                    children: h(H, {
                                      height: 321,
                                      width: `350px`,
                                      children: h(z, {
                                        className: `framer-sxcm2e-container`,
                                        nodeId: `iVHn_iN4a`,
                                        scopeId: `augiA20Il`,
                                        children: h(Mi, {
                                          GDX03WB2s: `UX Designer, Nuro`,
                                          height: `100%`,
                                          id: `iVHn_iN4a`,
                                          layoutId: `iVHn_iN4a`,
                                          PXhdA1o5u: `"His ability to merge storytelling with clean interaction design is unmatched. Akihiko understands not just how things should look, but why they should look that way — and that insight came through in every part of the work."`,
                                          SfDOWebi7: `Mei Tanaka`,
                                          style: { width: `100%` },
                                          TQKawNzuI: Q(
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
                                v(`div`, {
                                  className: `framer-kk01de`,
                                  'data-framer-name': `4 & 5`,
                                  children: [
                                    h(`div`, {
                                      className: `framer-1v5lw3w`,
                                      'data-framer-name': `4`,
                                      children: h(q, {
                                        breakpoint: Y,
                                        overrides: {
                                          TARYGz5CA: {
                                            width: `calc(min(${c?.width || `100vw`}, 1480px) - 40px)`,
                                          },
                                          uQRrO6hCw: { width: `330px` },
                                        },
                                        children: h(H, {
                                          height: 321,
                                          width: `370px`,
                                          children: h(z, {
                                            className: `framer-vwcvun-container`,
                                            nodeId: `hP5z0jZQo`,
                                            scopeId: `augiA20Il`,
                                            children: h(Mi, {
                                              GDX03WB2s: `Director, Vektor Inc.`,
                                              height: `100%`,
                                              id: `hP5z0jZQo`,
                                              layoutId: `hP5z0jZQo`,
                                              PXhdA1o5u: `"Working with Akihiko was more than just hiring a designer — it felt like bringing on a creative partner who truly understood our goals. He took our raw ideas, added clarity, and transformed them into something that not only looked stunning."`,
                                              SfDOWebi7: `Julian Pierce`,
                                              style: { width: `100%` },
                                              TQKawNzuI: Q(
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
                                    h(q, {
                                      breakpoint: Y,
                                      overrides: {
                                        TARYGz5CA: {
                                          width: `calc(min(${c?.width || `100vw`}, 1480px) - 40px)`,
                                        },
                                        uQRrO6hCw: { width: `330px` },
                                      },
                                      children: h(H, {
                                        height: 321,
                                        width: `350px`,
                                        children: h(z, {
                                          className: `framer-nyb1nu-container`,
                                          nodeId: `d3pOhcUSR`,
                                          scopeId: `augiA20Il`,
                                          children: h(Mi, {
                                            GDX03WB2s: `CEO, Willow Studio`,
                                            height: `100%`,
                                            id: `d3pOhcUSR`,
                                            layoutId: `d3pOhcUSR`,
                                            PXhdA1o5u: `"Akihiko brings a rare balance of creativity and discipline. He’s incredibly fast without ever sacrificing attention to detail. From early ideation to the final product, his process is intentional, his communication is clear."`,
                                            SfDOWebi7: `Hana Samoto`,
                                            style: { width: `100%` },
                                            TQKawNzuI: Q(
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
                                Mt() &&
                                  h(`div`, {
                                    className: `framer-pemt1m hidden-12a2gtg`,
                                    'data-framer-name': `Spacer`,
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    v(`section`, {
                      className: `framer-516i77`,
                      'data-framer-name': `Awards`,
                      children: [
                        h(H, {
                          height: 24,
                          width: `min(${c?.width || `100vw`}, 1480px)`,
                          children: h(z, {
                            className: `framer-1j301b2-container`,
                            nodeId: `zDfpnHpxf`,
                            scopeId: `augiA20Il`,
                            children: h(q, {
                              breakpoint: Y,
                              overrides: {
                                TARYGz5CA: { variant: `CmSf9J7E0` },
                                uQRrO6hCw: { variant: `kQZZjN_Db` },
                              },
                              children: h(ze, {
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
                        h(`div`, {
                          className: `framer-101ri9t`,
                          'data-framer-name': `Content`,
                          children: v(`div`, {
                            className: `framer-1m9mwkk`,
                            'data-framer-name': `Heading`,
                            children: [
                              h(Wo, {
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
                                children: h(s, {
                                  children: h(`h1`, {
                                    className: `framer-styles-preset-je0rn0`,
                                    'data-styles-preset': `YMtdKmiBu`,
                                    style: { '--framer-text-alignment': `left` },
                                    children: `Awards`,
                                  }),
                                }),
                                className: `framer-hevtxl`,
                                'data-framer-name': `Text`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              h(`div`, {
                                className: `framer-1q7buau`,
                                'data-framer-name': `Number`,
                                children: h(Wo, {
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
                                  children: h(s, {
                                    children: h(`h3`, {
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
                        h(H, {
                          height: 24,
                          width: `min(${c?.width || `100vw`}, 1480px)`,
                          children: h(z, {
                            className: `framer-9xrb9k-container`,
                            nodeId: `a5L29UuWh`,
                            scopeId: `augiA20Il`,
                            children: h(ct, {
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
                        h(H, {
                          height: 818,
                          width: `min(${c?.width || `100vw`}, 1480px)`,
                          children: h(z, {
                            className: `framer-1f0kzgh-container`,
                            nodeId: `x49BvaqPH`,
                            scopeId: `augiA20Il`,
                            children: h(q, {
                              breakpoint: Y,
                              overrides: {
                                TARYGz5CA: { variant: `tCRSSoKh7` },
                                uQRrO6hCw: { variant: `P6hgzGRDq` },
                              },
                              children: h(bi, {
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
                    v(`section`, {
                      className: `framer-jx0221`,
                      'data-framer-name': `Client`,
                      children: [
                        Pt() &&
                          v(`div`, {
                            className: `framer-1cb3c26 hidden-72rtr7`,
                            'data-framer-name': `Responsive Heading`,
                            children: [
                              h(Wo, {
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
                                children: h(s, {
                                  children: h(`h1`, {
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
                              h(`div`, {
                                className: `framer-fxw7eo`,
                                'data-framer-name': `Number`,
                                children: h(Wo, {
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
                                  children: h(s, {
                                    children: h(`h3`, {
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
                        h(H, {
                          height: 24,
                          width: `min(${c?.width || `100vw`}, 1480px)`,
                          children: h(z, {
                            className: `framer-1a29w76-container`,
                            nodeId: `CkoYFk8Ix`,
                            scopeId: `augiA20Il`,
                            children: h(q, {
                              breakpoint: Y,
                              overrides: {
                                TARYGz5CA: { variant: `CmSf9J7E0` },
                                uQRrO6hCw: { variant: `kQZZjN_Db` },
                              },
                              children: h(ze, {
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
                        v(`div`, {
                          className: `framer-aw0pws`,
                          'data-framer-name': `Scroll Animation Section`,
                          children: [
                            h(`div`, {
                              className: `framer-uhiquf`,
                              'data-framer-name': `Sticky`,
                              children: h(`div`, {
                                className: `framer-yo1wig`,
                                'data-framer-name': `Content`,
                                children: h(q, {
                                  breakpoint: Y,
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
                                  children: v(ts, {
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
                                        ref: Ft,
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
                                      h(`div`, {
                                        className: `framer-nubgww`,
                                        'data-framer-name': `1`,
                                        children: h(q, {
                                          breakpoint: Y,
                                          overrides: {
                                            TARYGz5CA: {
                                              height: 240,
                                              width: `max(min(${c?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                            },
                                            uQRrO6hCw: {
                                              height: 360,
                                              width: `max(min(${c?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                            },
                                          },
                                          children: h(H, {
                                            height: 215,
                                            width: `320px`,
                                            children: h(q, {
                                              breakpoint: Y,
                                              overrides: {
                                                TARYGz5CA: { style: {} },
                                                uQRrO6hCw: { style: {} },
                                              },
                                              children: h(z, {
                                                className: `framer-1ptiw9v-container`,
                                                nodeId: `MJW8jdvhp`,
                                                rendersWithMotion: !0,
                                                scopeId: `augiA20Il`,
                                                style: { rotateY: -90 },
                                                children: h(q, {
                                                  breakpoint: Y,
                                                  overrides: {
                                                    TARYGz5CA: { variant: `vifpDyxXC` },
                                                  },
                                                  children: h(gr, {
                                                    height: `100%`,
                                                    id: `MJW8jdvhp`,
                                                    layoutId: `MJW8jdvhp`,
                                                    style: { height: `100%`, width: `100%` },
                                                    variant: `Mj_yFQ3Et`,
                                                    vH_Dks4GI: `https://framerusercontent.com/assets/EzwClJ2Vn62LFoIphoP2kTBvQUc.mp4`,
                                                    VypX2yAlC: Q(
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
                                      h(q, {
                                        breakpoint: Y,
                                        overrides: {
                                          TARYGz5CA: { style: {} },
                                          uQRrO6hCw: { style: {} },
                                        },
                                        children: h(C.div, {
                                          className: `framer-o6wfn3`,
                                          'data-framer-name': `2`,
                                          style: { rotateY: 45 },
                                          children: h(q, {
                                            breakpoint: Y,
                                            overrides: {
                                              TARYGz5CA: {
                                                height: 240,
                                                width: `max(min(${c?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                              },
                                              uQRrO6hCw: {
                                                height: 360,
                                                width: `max(min(${c?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                              },
                                            },
                                            children: h(H, {
                                              height: 215,
                                              width: `320px`,
                                              children: h(q, {
                                                breakpoint: Y,
                                                overrides: {
                                                  TARYGz5CA: { style: {} },
                                                  uQRrO6hCw: { style: {} },
                                                },
                                                children: h(z, {
                                                  className: `framer-1yykzln-container`,
                                                  nodeId: `eJOob7WuE`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotateY: -90 },
                                                  children: h(gr, {
                                                    height: `100%`,
                                                    id: `eJOob7WuE`,
                                                    layoutId: `eJOob7WuE`,
                                                    style: { height: `100%`, width: `100%` },
                                                    SXjjKopWL: Q(
                                                      {
                                                        pixelHeight: 67,
                                                        pixelWidth: 303,
                                                        src: `https://framerusercontent.com/images/np97j2F8KUZ2HLiullJ6eZCAlsQ.png?width=303&height=67`,
                                                      },
                                                      ``
                                                    ),
                                                    variant: `vifpDyxXC`,
                                                    VypX2yAlC: Q(
                                                      {
                                                        pixelHeight: 1536,
                                                        pixelWidth: 2728,
                                                        src: `https://framerusercontent.com/images/rmeBLxZhEpvUaEnrIirzHJQynwc.png?width=2728&height=1536`,
                                                        srcSet: `https://framerusercontent.com/images/rmeBLxZhEpvUaEnrIirzHJQynwc.png?scale-down-to=512&width=2728&height=1536 512w,https://framerusercontent.com/images/rmeBLxZhEpvUaEnrIirzHJQynwc.png?scale-down-to=1024&width=2728&height=1536 1024w,https://framerusercontent.com/images/rmeBLxZhEpvUaEnrIirzHJQynwc.png?scale-down-to=2048&width=2728&height=1536 2048w,https://framerusercontent.com/images/rmeBLxZhEpvUaEnrIirzHJQynwc.png?width=2728&height=1536 2728w`,
                                                      },
                                                      `Man Side Pose`
                                                    ),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      h(q, {
                                        breakpoint: Y,
                                        overrides: {
                                          TARYGz5CA: { style: {} },
                                          uQRrO6hCw: { style: {} },
                                        },
                                        children: h(C.div, {
                                          className: `framer-lpbbuk`,
                                          'data-framer-name': `3`,
                                          style: { rotateY: 90 },
                                          children: h(q, {
                                            breakpoint: Y,
                                            overrides: {
                                              TARYGz5CA: {
                                                height: 240,
                                                width: `max(min(${c?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                              },
                                              uQRrO6hCw: {
                                                height: 360,
                                                width: `max(min(${c?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                              },
                                            },
                                            children: h(H, {
                                              height: 215,
                                              width: `320px`,
                                              children: h(q, {
                                                breakpoint: Y,
                                                overrides: {
                                                  TARYGz5CA: { style: {} },
                                                  uQRrO6hCw: { style: {} },
                                                },
                                                children: h(z, {
                                                  className: `framer-1mim42x-container`,
                                                  nodeId: `Rk9N7owQL`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotateY: -90 },
                                                  children: h(gr, {
                                                    height: `100%`,
                                                    id: `Rk9N7owQL`,
                                                    layoutId: `Rk9N7owQL`,
                                                    style: { height: `100%`, width: `100%` },
                                                    SXjjKopWL: Q(
                                                      {
                                                        pixelHeight: 66,
                                                        pixelWidth: 258,
                                                        src: `https://framerusercontent.com/images/f0y1IAXP7xxPZoecHyx9XHFdiHA.png?width=258&height=66`,
                                                      },
                                                      ``
                                                    ),
                                                    variant: `vifpDyxXC`,
                                                    VypX2yAlC: Q(
                                                      {
                                                        pixelHeight: 1024,
                                                        pixelWidth: 1024,
                                                        src: `https://framerusercontent.com/images/yw1GCZxhNp9c0ifxjP3zVlEc.png?width=1024&height=1024`,
                                                        srcSet: `https://framerusercontent.com/images/yw1GCZxhNp9c0ifxjP3zVlEc.png?scale-down-to=512&width=1024&height=1024 512w,https://framerusercontent.com/images/yw1GCZxhNp9c0ifxjP3zVlEc.png?width=1024&height=1024 1024w`,
                                                      },
                                                      `Woman Sofa`
                                                    ),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      h(q, {
                                        breakpoint: Y,
                                        overrides: {
                                          TARYGz5CA: { style: {} },
                                          uQRrO6hCw: { style: {} },
                                        },
                                        children: h(C.div, {
                                          className: `framer-1lhrha6`,
                                          'data-framer-name': `4`,
                                          style: { rotateY: 135 },
                                          children: h(q, {
                                            breakpoint: Y,
                                            overrides: {
                                              TARYGz5CA: {
                                                height: 240,
                                                width: `max(min(${c?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                              },
                                              uQRrO6hCw: {
                                                height: 360,
                                                width: `max(min(${c?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                              },
                                            },
                                            children: h(H, {
                                              height: 215,
                                              width: `320px`,
                                              children: h(q, {
                                                breakpoint: Y,
                                                overrides: {
                                                  TARYGz5CA: { style: {} },
                                                  uQRrO6hCw: { style: {} },
                                                },
                                                children: h(z, {
                                                  className: `framer-wu7qjo-container`,
                                                  nodeId: `NHZWjpx6l`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotateY: -90 },
                                                  children: h(gr, {
                                                    height: `100%`,
                                                    id: `NHZWjpx6l`,
                                                    layoutId: `NHZWjpx6l`,
                                                    style: { height: `100%`, width: `100%` },
                                                    SXjjKopWL: Q(
                                                      {
                                                        pixelHeight: 58,
                                                        pixelWidth: 282,
                                                        src: `https://framerusercontent.com/images/6IX9srHugK666NPKQJythMbMME.png?width=282&height=58`,
                                                      },
                                                      ``
                                                    ),
                                                    variant: `Mj_yFQ3Et`,
                                                    vH_Dks4GI: `https://framerusercontent.com/assets/Ehe42PKiSCrm7iEv3XiwdHbR4.mp4`,
                                                    VypX2yAlC: Q(
                                                      {
                                                        pixelHeight: 768,
                                                        pixelWidth: 1408,
                                                        src: `https://framerusercontent.com/images/KOQjQrydrJvVSvzcz2fLyVMiuBc.png?width=1408&height=768`,
                                                        srcSet: `https://framerusercontent.com/images/KOQjQrydrJvVSvzcz2fLyVMiuBc.png?scale-down-to=512&width=1408&height=768 512w,https://framerusercontent.com/images/KOQjQrydrJvVSvzcz2fLyVMiuBc.png?scale-down-to=1024&width=1408&height=768 1024w,https://framerusercontent.com/images/KOQjQrydrJvVSvzcz2fLyVMiuBc.png?width=1408&height=768 1408w`,
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
                                      h(q, {
                                        breakpoint: Y,
                                        overrides: {
                                          TARYGz5CA: { style: {} },
                                          uQRrO6hCw: { style: {} },
                                        },
                                        children: h(C.div, {
                                          className: `framer-yt13h4`,
                                          'data-framer-name': `5`,
                                          style: { rotateY: 180 },
                                          children: h(q, {
                                            breakpoint: Y,
                                            overrides: {
                                              TARYGz5CA: {
                                                height: 240,
                                                width: `max(min(${c?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                              },
                                              uQRrO6hCw: {
                                                height: 360,
                                                width: `max(min(${c?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                              },
                                            },
                                            children: h(H, {
                                              height: 215,
                                              width: `320px`,
                                              children: h(q, {
                                                breakpoint: Y,
                                                overrides: {
                                                  TARYGz5CA: { style: {} },
                                                  uQRrO6hCw: { style: {} },
                                                },
                                                children: h(z, {
                                                  className: `framer-1qqals2-container`,
                                                  nodeId: `cN0AzruUB`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotateY: -90 },
                                                  children: h(gr, {
                                                    height: `100%`,
                                                    id: `cN0AzruUB`,
                                                    layoutId: `cN0AzruUB`,
                                                    style: { height: `100%`, width: `100%` },
                                                    SXjjKopWL: Q(
                                                      {
                                                        pixelHeight: 58,
                                                        pixelWidth: 282,
                                                        src: `https://framerusercontent.com/images/6IX9srHugK666NPKQJythMbMME.png?width=282&height=58`,
                                                      },
                                                      ``
                                                    ),
                                                    variant: `vifpDyxXC`,
                                                    VypX2yAlC: Q(
                                                      {
                                                        pixelHeight: 768,
                                                        pixelWidth: 1408,
                                                        src: `https://framerusercontent.com/images/KOQjQrydrJvVSvzcz2fLyVMiuBc.png?width=1408&height=768`,
                                                        srcSet: `https://framerusercontent.com/images/KOQjQrydrJvVSvzcz2fLyVMiuBc.png?scale-down-to=512&width=1408&height=768 512w,https://framerusercontent.com/images/KOQjQrydrJvVSvzcz2fLyVMiuBc.png?scale-down-to=1024&width=1408&height=768 1024w,https://framerusercontent.com/images/KOQjQrydrJvVSvzcz2fLyVMiuBc.png?width=1408&height=768 1408w`,
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
                            Nt() &&
                              h(`div`, {
                                className: `framer-n0cvq4 hidden-1tqphhv hidden-12a2gtg`,
                                'data-framer-name': `Trigger`,
                                id: It,
                                ref: Ft,
                              }),
                          ],
                        }),
                      ],
                    }),
                    v(`section`, {
                      className: `framer-1edeiw8`,
                      'data-framer-name': `Pricing`,
                      children: [
                        h(H, {
                          height: 24,
                          width: `min(${c?.width || `100vw`}, 1480px)`,
                          children: h(z, {
                            className: `framer-d7vt5m-container`,
                            nodeId: `xWJG7L74A`,
                            scopeId: `augiA20Il`,
                            children: h(q, {
                              breakpoint: Y,
                              overrides: {
                                TARYGz5CA: { variant: `CmSf9J7E0` },
                                uQRrO6hCw: { variant: `kQZZjN_Db` },
                              },
                              children: h(ze, {
                                height: `100%`,
                                Hq7BZwPem: `(WDX® — 09)`,
                                id: `xWJG7L74A`,
                                layoutId: `xWJG7L74A`,
                                NHubkDs7R: `Custom Quotes`,
                                pWoyTVtQ4: `© Project Pricing プラン`,
                                style: { width: `100%` },
                                variant: `XFF72MIUC`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        v(`div`, {
                          className: `framer-qenayq`,
                          'data-framer-name': `Top`,
                          children: [
                            h(`div`, {
                              className: `framer-1jn02w5`,
                              'data-framer-name': `Heading`,
                              children: h(`div`, {
                                className: `framer-we35tc`,
                                'data-framer-name': `Text`,
                                children: h(H, {
                                  children: h(Yo, {
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
                                    className: `framer-8mcdq1-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `t_3AD04uo`,
                                    rendersWithMotion: !0,
                                    scopeId: `augiA20Il`,
                                    children: h(q, {
                                      breakpoint: Y,
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
                                          tag: `h2`,
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
                                      children: h(Et, {
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
                                        id: `t_3AD04uo`,
                                        layoutId: `t_3AD04uo`,
                                        loop: !0,
                                        speed: 15,
                                        stagger: 0.5,
                                        style: { width: `100%` },
                                        tag: `p`,
                                        text: `Pick Plans., Price less., Starter.`,
                                        userSelect: !1,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            h(H, {
                              height: 24,
                              width: `min(${c?.width || `100vw`}, 1480px)`,
                              children: h(z, {
                                className: `framer-1qacodu-container`,
                                nodeId: `lSdYpjpG5`,
                                scopeId: `augiA20Il`,
                                children: h(ct, {
                                  F9s7G6Ce8: `Transparent`,
                                  height: `100%`,
                                  id: `lSdYpjpG5`,
                                  layoutId: `lSdYpjpG5`,
                                  rpGEGECg1: `Pricing Tiers`,
                                  Ssp7h9ebx: `Custom Options`,
                                  style: { width: `100%` },
                                  variant: `SJFvvEqmc`,
                                  width: `100%`,
                                  xxFoBYQ6z: `Design Packages`,
                                }),
                              }),
                            }),
                          ],
                        }),
                        v(`div`, {
                          className: `framer-k8wqra`,
                          'data-framer-name': `Bottom`,
                          children: [
                            h(q, {
                              breakpoint: Y,
                              overrides: {
                                TARYGz5CA: {
                                  width: `calc(min(${c?.width || `100vw`}, 1480px) - 40px)`,
                                },
                                uQRrO6hCw: {
                                  width: `calc(min(${c?.width || `100vw`}, 1480px) - 48px)`,
                                },
                              },
                              children: h(H, {
                                height: 561,
                                width: `max((min(${c?.width || `100vw`}, 1480px) - 96px) / 3, 1px)`,
                                children: h(z, {
                                  className: `framer-8rssa6-container`,
                                  nodeId: `icpasTOt7`,
                                  scopeId: `augiA20Il`,
                                  children: h(er, {
                                    dja90qj9m: `SEO-ready structure`,
                                    fOX92qcMT: `/Month`,
                                    fpya69uj1: `Basic CMS integration`,
                                    height: `100%`,
                                    id: `icpasTOt7`,
                                    Iux3h95Y2: `Fast delivery (within 7 days)`,
                                    jKPIbAit0: `Contact form setup`,
                                    layoutId: `icpasTOt7`,
                                    LVy4SICzK: `One-page Framer site`,
                                    m6o5YyZhi: `Mobile-first responsive build`,
                                    rojPY6fRa: `$99`,
                                    style: { width: `100%` },
                                    thPyOmv2A: `Design system setup`,
                                    uV71JgkNW: `Perfect for small launches and personal sites that need a fast online presence.`,
                                    variant: `O9OWA4jlv`,
                                    width: `100%`,
                                    Yj8NwxqdY: `Custom layout & visuals`,
                                    YyGjbNizN: `Starter Plan`,
                                  }),
                                }),
                              }),
                            }),
                            h(q, {
                              breakpoint: Y,
                              overrides: {
                                TARYGz5CA: {
                                  width: `calc(min(${c?.width || `100vw`}, 1480px) - 40px)`,
                                },
                                uQRrO6hCw: {
                                  width: `calc(min(${c?.width || `100vw`}, 1480px) - 48px)`,
                                },
                              },
                              children: h(H, {
                                height: 561,
                                width: `max((min(${c?.width || `100vw`}, 1480px) - 96px) / 3, 1px)`,
                                children: h(z, {
                                  className: `framer-1985ok6-container`,
                                  nodeId: `rhuOpZyks`,
                                  scopeId: `augiA20Il`,
                                  children: h(er, {
                                    dja90qj9m: `Device-optimized responsiveness`,
                                    fOX92qcMT: `/Month`,
                                    fpya69uj1: `Style guide system`,
                                    height: `100%`,
                                    id: `rhuOpZyks`,
                                    Iux3h95Y2: `Motion design & transitions`,
                                    jKPIbAit0: `Email capture / integrations`,
                                    layoutId: `rhuOpZyks`,
                                    LVy4SICzK: `Up to 5 pages`,
                                    m6o5YyZhi: `Component-based structure`,
                                    rojPY6fRa: `$299`,
                                    style: { width: `100%` },
                                    thPyOmv2A: `Clean UX-focused layout`,
                                    uV71JgkNW: `Designed for growing brands that need flexibility and CMS support.`,
                                    variant: `ZaXfd313A`,
                                    width: `100%`,
                                    Yj8NwxqdY: `Framer CMS-powered sections`,
                                    YyGjbNizN: `Growth Plan`,
                                  }),
                                }),
                              }),
                            }),
                            h(q, {
                              breakpoint: Y,
                              overrides: {
                                TARYGz5CA: {
                                  width: `calc(min(${c?.width || `100vw`}, 1480px) - 40px)`,
                                },
                                uQRrO6hCw: {
                                  width: `calc(min(${c?.width || `100vw`}, 1480px) - 48px)`,
                                },
                              },
                              children: h(H, {
                                height: 561,
                                width: `max((min(${c?.width || `100vw`}, 1480px) - 96px) / 3, 1px)`,
                                children: h(z, {
                                  className: `framer-19licix-container`,
                                  nodeId: `m72M8C_qQ`,
                                  scopeId: `augiA20Il`,
                                  children: h(er, {
                                    dja90qj9m: `Framer CMS training`,
                                    fOX92qcMT: `/Month`,
                                    fpya69uj1: `Launch support + QA`,
                                    height: `100%`,
                                    id: `m72M8C_qQ`,
                                    Iux3h95Y2: `Animation direction`,
                                    jKPIbAit0: `Performance optimization`,
                                    layoutId: `m72M8C_qQ`,
                                    LVy4SICzK: `10+ pages with CMS`,
                                    m6o5YyZhi: `Full brand system support`,
                                    rojPY6fRa: `$899`,
                                    style: { width: `100%` },
                                    thPyOmv2A: `Custom-built components`,
                                    uV71JgkNW: `Best for studios or teams needing structure and enterprise-level execution.`,
                                    variant: `x7wfHPdzB`,
                                    width: `100%`,
                                    Yj8NwxqdY: `Advanced layout strategy`,
                                    YyGjbNizN: ` Full Scope Plan`,
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    v(`section`, {
                      className: `framer-1r2gzzg`,
                      'data-framer-name': `Blog`,
                      children: [
                        h(H, {
                          height: 24,
                          width: `min(${c?.width || `100vw`}, 1480px)`,
                          children: h(z, {
                            className: `framer-1psm513-container`,
                            nodeId: `SczMiEYiN`,
                            scopeId: `augiA20Il`,
                            children: h(q, {
                              breakpoint: Y,
                              overrides: {
                                TARYGz5CA: { variant: `CmSf9J7E0` },
                                uQRrO6hCw: { variant: `kQZZjN_Db` },
                              },
                              children: h(ze, {
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
                        h(H, {
                          height: 200,
                          width: `min(${c?.width || `100vw`}, 1480px)`,
                          children: h(z, {
                            className: `framer-17hi2r4-container`,
                            nodeId: `CWmRPs9cc`,
                            scopeId: `augiA20Il`,
                            children: h(q, {
                              breakpoint: Y,
                              overrides: {
                                TARYGz5CA: { variant: `mURiTOP2G` },
                                uQRrO6hCw: { variant: `bkXk11oSP` },
                              },
                              children: h(dt, {
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
                        h(`div`, { className: `framer-1ue40ad`, 'data-framer-name': `Line` }),
                        v(`div`, {
                          className: `framer-1xuj707`,
                          'data-framer-name': `Article Cards`,
                          children: [
                            h(`div`, {
                              className: `framer-1f0ztrn`,
                              children: h(_e, {
                                children: h(Bs, {
                                  pageSize: 1,
                                  query: {
                                    from: { alias: `pCK9VFdyL`, data: xt, type: `Collection` },
                                    offset: { type: `LiteralValue`, value: 0 },
                                    select: [
                                      {
                                        collection: `pCK9VFdyL`,
                                        name: `XG3otaDlZ`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `pCK9VFdyL`,
                                        name: `XbJge9Fsp`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `pCK9VFdyL`,
                                        name: `XpFWjsiiE`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `pCK9VFdyL`,
                                        name: `F1KVBlC4y`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `pCK9VFdyL`,
                                        name: `dAZk2Jaon`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `pCK9VFdyL`,
                                        name: `vtA10ARAU`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `pCK9VFdyL`,
                                        name: `b3XlDEEmG`,
                                        type: `Identifier`,
                                      },
                                      { collection: `pCK9VFdyL`, name: `id`, type: `Identifier` },
                                    ],
                                  },
                                  children: (e, t, n) =>
                                    h(b, {
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
                                          l
                                        ) => (
                                          (o ??= ``),
                                          (a ??= ``),
                                          (t ??= ``),
                                          (e ??= ``),
                                          h(
                                            E,
                                            {
                                              id: `pCK9VFdyL-${r}`,
                                              children: h(ye.Provider, {
                                                value: { XG3otaDlZ: o },
                                                children: h(de, {
                                                  href: {
                                                    pathVariables: { XG3otaDlZ: o },
                                                    webPageId: `iZRHiEHic`,
                                                  },
                                                  motionChild: !0,
                                                  nodeId: `IGOWfbqbZ`,
                                                  scopeId: `augiA20Il`,
                                                  children: h(C.a, {
                                                    className: `framer-15ho39z framer-lux5qc`,
                                                    children: h(q, {
                                                      breakpoint: Y,
                                                      overrides: {
                                                        TARYGz5CA: {
                                                          width: `max(min(${c?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                                        },
                                                      },
                                                      children: h(H, {
                                                        height: 600,
                                                        width: `max(min(${c?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                                        children: h(Yo, {
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
                                                              ref: Rt(`clive-willow-${Lt}`),
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
                                                          id: `${o}-${zt}`,
                                                          nodeId: `HwcwFPeWv`,
                                                          ref: Rt(`${o}-${zt}`),
                                                          rendersWithMotion: !0,
                                                          scopeId: `augiA20Il`,
                                                          children: h(q, {
                                                            breakpoint: Y,
                                                            overrides: {
                                                              TARYGz5CA: { variant: `dXXWsfsWX` },
                                                              uQRrO6hCw: { variant: `D_OALAPaM` },
                                                            },
                                                            children: h(_t, {
                                                              a052i7pNy: t,
                                                              height: `100%`,
                                                              hQbwNsuVj: a,
                                                              id: `HwcwFPeWv`,
                                                              layoutId: `HwcwFPeWv`,
                                                              nf6LNDsi3: $(s),
                                                              s3OJlGzku: e,
                                                              style: { width: `100%` },
                                                              tYkTHyPu6: $(n),
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
                            h(`div`, {
                              className: `framer-1th58uk`,
                              children: h(_e, {
                                children: h(Vs, {
                                  pageSize: 1,
                                  query: {
                                    from: { alias: `BqYRJ2f6p`, data: xt, type: `Collection` },
                                    offset: { type: `LiteralValue`, value: 1 },
                                    select: [
                                      {
                                        collection: `BqYRJ2f6p`,
                                        name: `XG3otaDlZ`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `BqYRJ2f6p`,
                                        name: `XbJge9Fsp`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `BqYRJ2f6p`,
                                        name: `XpFWjsiiE`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `BqYRJ2f6p`,
                                        name: `F1KVBlC4y`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `BqYRJ2f6p`,
                                        name: `dAZk2Jaon`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `BqYRJ2f6p`,
                                        name: `vtA10ARAU`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `BqYRJ2f6p`,
                                        name: `b3XlDEEmG`,
                                        type: `Identifier`,
                                      },
                                      { collection: `BqYRJ2f6p`, name: `id`, type: `Identifier` },
                                    ],
                                  },
                                  children: (e, t, n) =>
                                    h(b, {
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
                                          l
                                        ) => (
                                          (o ??= ``),
                                          (a ??= ``),
                                          (t ??= ``),
                                          (e ??= ``),
                                          h(
                                            E,
                                            {
                                              id: `BqYRJ2f6p-${r}`,
                                              children: h(ye.Provider, {
                                                value: { XG3otaDlZ: o },
                                                children: h(de, {
                                                  href: {
                                                    pathVariables: { XG3otaDlZ: o },
                                                    webPageId: `iZRHiEHic`,
                                                  },
                                                  motionChild: !0,
                                                  nodeId: `f0QbgPgaJ`,
                                                  scopeId: `augiA20Il`,
                                                  children: h(C.a, {
                                                    className: `framer-h0rdv8 framer-lux5qc`,
                                                    children: h(q, {
                                                      breakpoint: Y,
                                                      overrides: {
                                                        TARYGz5CA: {
                                                          width: `max(min(${c?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                                        },
                                                      },
                                                      children: h(H, {
                                                        height: 600,
                                                        width: `max(min(${c?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                                        children: h(Yo, {
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
                                                              ref: Rt(`raven-claw-${Vt}`),
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
                                                          id: `${o}-${Lt}`,
                                                          nodeId: `cxKKrit_s`,
                                                          ref: Rt(`${o}-${Lt}`),
                                                          rendersWithMotion: !0,
                                                          scopeId: `augiA20Il`,
                                                          children: h(q, {
                                                            breakpoint: Y,
                                                            overrides: {
                                                              TARYGz5CA: { variant: `dXXWsfsWX` },
                                                              uQRrO6hCw: { variant: `D_OALAPaM` },
                                                            },
                                                            children: h(_t, {
                                                              a052i7pNy: t,
                                                              height: `100%`,
                                                              hQbwNsuVj: a,
                                                              id: `cxKKrit_s`,
                                                              layoutId: `cxKKrit_s`,
                                                              nf6LNDsi3: $(s),
                                                              s3OJlGzku: e,
                                                              style: { width: `100%` },
                                                              tYkTHyPu6: $(n),
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
                            h(`div`, {
                              className: `framer-1tb74ez`,
                              children: h(_e, {
                                children: h(Hs, {
                                  pageSize: 1,
                                  query: {
                                    from: { alias: `xiQtB0ygJ`, data: xt, type: `Collection` },
                                    offset: { type: `LiteralValue`, value: 2 },
                                    select: [
                                      {
                                        collection: `xiQtB0ygJ`,
                                        name: `XG3otaDlZ`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `xiQtB0ygJ`,
                                        name: `XbJge9Fsp`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `xiQtB0ygJ`,
                                        name: `XpFWjsiiE`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `xiQtB0ygJ`,
                                        name: `F1KVBlC4y`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `xiQtB0ygJ`,
                                        name: `dAZk2Jaon`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `xiQtB0ygJ`,
                                        name: `vtA10ARAU`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `xiQtB0ygJ`,
                                        name: `b3XlDEEmG`,
                                        type: `Identifier`,
                                      },
                                      { collection: `xiQtB0ygJ`, name: `id`, type: `Identifier` },
                                    ],
                                  },
                                  children: (e, t, n) =>
                                    h(b, {
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
                                          l
                                        ) => (
                                          (o ??= ``),
                                          (a ??= ``),
                                          (t ??= ``),
                                          (e ??= ``),
                                          h(
                                            E,
                                            {
                                              id: `xiQtB0ygJ-${r}`,
                                              children: h(ye.Provider, {
                                                value: { XG3otaDlZ: o },
                                                children: h(de, {
                                                  href: {
                                                    pathVariables: { XG3otaDlZ: o },
                                                    webPageId: `iZRHiEHic`,
                                                  },
                                                  motionChild: !0,
                                                  nodeId: `Y2XvY8nea`,
                                                  scopeId: `augiA20Il`,
                                                  children: h(C.a, {
                                                    className: `framer-1su5na9 framer-lux5qc`,
                                                    children: h(q, {
                                                      breakpoint: Y,
                                                      overrides: {
                                                        TARYGz5CA: {
                                                          width: `max(min(${c?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                                        },
                                                      },
                                                      children: h(H, {
                                                        height: 600,
                                                        width: `max(min(${c?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                                        children: h(Yo, {
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
                                                              ref: Rt(`clay-nicolas-${Ht}`),
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
                                                          id: `${o}-${Vt}`,
                                                          nodeId: `gXO5T5l0P`,
                                                          ref: Rt(`${o}-${Vt}`),
                                                          rendersWithMotion: !0,
                                                          scopeId: `augiA20Il`,
                                                          children: h(q, {
                                                            breakpoint: Y,
                                                            overrides: {
                                                              TARYGz5CA: { variant: `dXXWsfsWX` },
                                                              uQRrO6hCw: { variant: `D_OALAPaM` },
                                                            },
                                                            children: h(_t, {
                                                              a052i7pNy: t,
                                                              height: `100%`,
                                                              hQbwNsuVj: a,
                                                              id: `gXO5T5l0P`,
                                                              layoutId: `gXO5T5l0P`,
                                                              nf6LNDsi3: $(s),
                                                              s3OJlGzku: e,
                                                              style: { width: `100%` },
                                                              tYkTHyPu6: $(n),
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
                            h(`div`, {
                              className: `framer-g3svvv`,
                              children: h(_e, {
                                children: h(Us, {
                                  pageSize: 1,
                                  query: {
                                    from: { alias: `ws_bTD3yG`, data: xt, type: `Collection` },
                                    offset: { type: `LiteralValue`, value: 3 },
                                    select: [
                                      {
                                        collection: `ws_bTD3yG`,
                                        name: `XG3otaDlZ`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `ws_bTD3yG`,
                                        name: `XbJge9Fsp`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `ws_bTD3yG`,
                                        name: `XpFWjsiiE`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `ws_bTD3yG`,
                                        name: `F1KVBlC4y`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `ws_bTD3yG`,
                                        name: `dAZk2Jaon`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `ws_bTD3yG`,
                                        name: `vtA10ARAU`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `ws_bTD3yG`,
                                        name: `b3XlDEEmG`,
                                        type: `Identifier`,
                                      },
                                      { collection: `ws_bTD3yG`, name: `id`, type: `Identifier` },
                                    ],
                                  },
                                  children: (e, t, n) =>
                                    h(b, {
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
                                          l
                                        ) => (
                                          (o ??= ``),
                                          (a ??= ``),
                                          (t ??= ``),
                                          (e ??= ``),
                                          h(
                                            E,
                                            {
                                              id: `ws_bTD3yG-${r}`,
                                              children: h(ye.Provider, {
                                                value: { XG3otaDlZ: o },
                                                children: h(de, {
                                                  href: {
                                                    pathVariables: { XG3otaDlZ: o },
                                                    webPageId: `iZRHiEHic`,
                                                  },
                                                  motionChild: !0,
                                                  nodeId: `OBumd3Vc7`,
                                                  scopeId: `augiA20Il`,
                                                  children: h(C.a, {
                                                    className: `framer-14bojy4 framer-lux5qc`,
                                                    children: h(q, {
                                                      breakpoint: Y,
                                                      overrides: {
                                                        TARYGz5CA: {
                                                          width: `max(min(${c?.width || `100vw`}, 1480px) - 40px, 1px)`,
                                                        },
                                                      },
                                                      children: h(H, {
                                                        height: 600,
                                                        width: `max(min(${c?.width || `100vw`}, 1480px) - 48px, 1px)`,
                                                        children: h(z, {
                                                          className: `framer-1v9gz2l-container`,
                                                          'data-framer-cursor': `14bg376`,
                                                          id: `${o}-${Ht}`,
                                                          nodeId: `PlaDQURl5`,
                                                          ref: Rt(`${o}-${Ht}`),
                                                          scopeId: `augiA20Il`,
                                                          children: h(q, {
                                                            breakpoint: Y,
                                                            overrides: {
                                                              TARYGz5CA: { variant: `dXXWsfsWX` },
                                                              uQRrO6hCw: { variant: `D_OALAPaM` },
                                                            },
                                                            children: h(_t, {
                                                              a052i7pNy: t,
                                                              height: `100%`,
                                                              hQbwNsuVj: a,
                                                              id: `PlaDQURl5`,
                                                              layoutId: `PlaDQURl5`,
                                                              nf6LNDsi3: $(s),
                                                              s3OJlGzku: e,
                                                              style: { width: `100%` },
                                                              tYkTHyPu6: $(n),
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
                        h(`div`, { className: `framer-bngqg2`, 'data-framer-name': `Line` }),
                      ],
                    }),
                  ],
                }),
                h(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-30D1W.framer-lux5qc, .framer-30D1W .framer-lux5qc { display: block; }`,
        `.framer-30D1W.framer-72rtr7 { --selection-background-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff) /* {"name":"White"} */; --selection-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000) /* {"name":"Black"} */; align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-30D1W .framer-dhlfab { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1480px; overflow: hidden; padding: 90px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1y2k8yn-container { flex: none; height: auto; left: 50%; position: absolute; top: 396px; transform: translateX(-50%); width: 100%; }`,
        `.framer-30D1W .framer-ty36tk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 24px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1n76yiy { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 540px; overflow: visible; padding: 16px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-30D1W .framer-x5pde, .framer-30D1W .framer-1ki04el, .framer-30D1W .framer-za16rf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-7eph4s, .framer-30D1W .framer-19l0zu6, .framer-30D1W .framer-9kazno { --framer-paragraph-spacing: 0px; flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-30D1W .framer-mxo2f9, .framer-30D1W .framer-1ep4u7l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1xqbms1 { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; mix-blend-mode: difference; position: relative; white-space: pre-wrap; width: 1px; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-30D1W .framer-ajhxcq { align-content: center; align-items: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-30D1W .framer-1uxqzhi-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-30D1W .framer-unlq7x-container { height: 379px; position: relative; width: 390px; }`,
        `.framer-30D1W.framer-gul5pu { inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-30D1W.framer-169szll { -webkit-backdrop-filter: blur(20px); -webkit-user-select: none; backdrop-filter: blur(20px); background-color: var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2)); bottom: 0px; flex: none; left: 0px; overflow: hidden; pointer-events: none; position: fixed; right: 0px; top: 0px; user-select: none; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,
        `.framer-30D1W.framer-nqfrei { --border-bottom-width: 1px; --border-color: var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; aspect-ratio: 1.7733990147783252 / 1; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; flex: none; height: var(--framer-aspect-ratio-supported, 113px); left: 50%; overflow: hidden; position: fixed; top: 50%; transform: translate(-50%, -50%); width: 70%; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,
        `.framer-30D1W .framer-o1tapf-container, .framer-30D1W .framer-qplkjo-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-30D1W .framer-1jn9ae6, .framer-30D1W .framer-1y8re1e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1snsm42, .framer-30D1W .framer-1oqrrs3 { background-color: var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2)); flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-30D1W .framer-2xxdw2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-30D1W .framer-1nbr0fn { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-30D1W .framer-icxlw2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: 1440px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-30D1W .framer-19mjztk { background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); flex: none; height: 100%; opacity: 0.9; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-30D1W .framer-1ax983m { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1480px; overflow: hidden; padding: 80px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1njfbtx-container, .framer-30D1W .framer-tjjepc-container, .framer-30D1W .framer-19mrkgn-container, .framer-30D1W .framer-17yesjc-container, .framer-30D1W .framer-dlgb9u-container, .framer-30D1W .framer-1bhtlar-container, .framer-30D1W .framer-1fvzi93-container, .framer-30D1W .framer-1tu45ze-container, .framer-30D1W .framer-ziuq0f-container, .framer-30D1W .framer-izk59c-container, .framer-30D1W .framer-1da5zd7-container, .framer-30D1W .framer-1j301b2-container, .framer-30D1W .framer-9xrb9k-container, .framer-30D1W .framer-1f0kzgh-container, .framer-30D1W .framer-1a29w76-container, .framer-30D1W .framer-d7vt5m-container, .framer-30D1W .framer-1qacodu-container, .framer-30D1W .framer-1psm513-container, .framer-30D1W .framer-17hi2r4-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-iysrdq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1ms48bc-container { flex: none; height: auto; left: 50%; position: absolute; top: 49%; transform: translate(-50%, -50%); width: 100%; }`,
        `.framer-30D1W .framer-lr824 { align-content: center; align-items: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 797px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-30D1W .framer-udqf9x { flex: none; gap: 10px; height: 150%; position: relative; width: 473px; }`,
        `.framer-30D1W .framer-1rl8hlq { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: visible; padding: 50px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-30D1W .framer-1v555c3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-em85qg { --framer-paragraph-spacing: 0px; flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-30D1W .framer-1ajmrvo-container, .framer-30D1W .framer-1k5nnzf-container, .framer-30D1W .framer-lm13iu-container, .framer-30D1W .framer-6n8j6c-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-30D1W .framer-g03chh, .framer-30D1W .framer-nioezp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-175z5lx, .framer-30D1W .framer-uxzvq2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1iijldg-container, .framer-30D1W .framer-1xfh2b8-container, .framer-30D1W .framer-ngmrzn-container, .framer-30D1W .framer-1tvmme6-container, .framer-30D1W .framer-1tv4fvb-container, .framer-30D1W .framer-1yslzav-container, .framer-30D1W .framer-w56dtp-container, .framer-30D1W .framer-5sd1c5-container, .framer-30D1W .framer-1umn22f-container, .framer-30D1W .framer-1pdl6xk-container, .framer-30D1W .framer-1nqezu6-container, .framer-30D1W .framer-8rssa6-container, .framer-30D1W .framer-1985ok6-container, .framer-30D1W .framer-19licix-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-30D1W .framer-7ma1j6 { align-content: flex-start; align-items: flex-start; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 1480px; overflow: hidden; padding: 180px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1iqzdbj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-hrs0gc, .framer-30D1W .framer-1ue40ad, .framer-30D1W .framer-bngqg2 { background-color: var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2)); flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1vtzatb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 570px; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1nbs19a { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 540px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }`,
        `.framer-30D1W .framer-ydi31p { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1ejixw2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-yyr9dg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-aieywt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 0px 0px 0px; position: relative; width: 50%; }`,
        `.framer-30D1W .framer-1avqepk, .framer-30D1W .framer-r9l3vn, .framer-30D1W .framer-vrk7k3, .framer-30D1W .framer-1nmac4u, .framer-30D1W .framer-g3svvv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-tqvx7w, .framer-30D1W .framer-1c3zuno, .framer-30D1W .framer-859d0m, .framer-30D1W .framer-2b77dg, .framer-30D1W .framer-1vtosv4, .framer-30D1W .framer-15ho39z, .framer-30D1W .framer-h0rdv8, .framer-30D1W .framer-1su5na9, .framer-30D1W .framer-14bojy4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-30D1W .framer-1bn3y75 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 35%; }`,
        `.framer-30D1W .framer-1io1jaa-container, .framer-30D1W .framer-1d8vcph-container { flex: 1 0 0px; height: 390px; position: relative; width: 1px; }`,
        `.framer-30D1W .framer-19fh9pm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 32%; }`,
        `.framer-30D1W .framer-1gusm9m-container { flex: 1 0 0px; height: 590px; position: relative; width: 1px; }`,
        `.framer-30D1W .framer-a02h80 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-ayya54, .framer-30D1W .framer-roc34l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 0px 0px 0px; position: relative; width: 32%; }`,
        `.framer-30D1W .framer-1cx19ot-container { flex: 1 0 0px; height: 490px; position: relative; width: 1px; }`,
        `.framer-30D1W .framer-ywystf, .framer-30D1W .framer-3bo6w { align-content: flex-end; align-items: flex-end; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1480px; overflow: hidden; padding: 180px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1shioqx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-qfi1to, .framer-30D1W .framer-zpgfvt, .framer-30D1W .framer-hevtxl, .framer-30D1W .framer-1gfm96s, .framer-30D1W .framer-z1zavc, .framer-30D1W .framer-iqp5t0 { --framer-paragraph-spacing: 0px; flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: auto; }`,
        `.framer-30D1W .framer-z6tqd1, .framer-30D1W .framer-1q7buau, .framer-30D1W .framer-fxw7eo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-30D1W .framer-b48xgz-container { flex: none; height: auto; position: relative; width: 64%; }`,
        `.framer-30D1W .framer-1390c7e { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1480px; overflow: hidden; padding: 180px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1wqpm7v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 264px; height: min-content; justify-content: center; overflow: hidden; padding: 280px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-ica3fy { border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: none; height: 473px; left: 116px; overflow: hidden; position: absolute; top: 1356px; width: 326px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-30D1W .framer-6h0ehn { border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: none; height: 659px; overflow: hidden; position: absolute; right: 24px; top: 896px; width: 454px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-30D1W .framer-cpykhu { border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: none; height: 473px; left: 116px; overflow: hidden; position: absolute; top: 670px; width: 326px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-30D1W .framer-3j4you { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1000px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-p0ih05-container { flex: 1 0 0px; height: auto; max-width: 1000px; mix-blend-mode: difference; position: relative; width: 1px; }`,
        `.framer-30D1W .framer-1wraq4e { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 356px 0px 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-6vahvq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 450px; mix-blend-mode: difference; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-10fi5y6 { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 450px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-30D1W .framer-1gmzvq4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1l9i2gv, .framer-30D1W .framer-1jn02w5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-bcin9m { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1000px; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-30D1W .framer-1xdtwk-container, .framer-30D1W .framer-8mcdq1-container { flex: none; height: auto; mix-blend-mode: difference; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-pq27se { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; }`,
        `.framer-30D1W .framer-vzjr3v { aspect-ratio: 5.637362637362638 / 1; bottom: 2px; flex: none; height: var(--framer-aspect-ratio-supported, 23px); left: -40px; mix-blend-mode: difference; overflow: visible; position: absolute; width: 128px; z-index: 1; }`,
        `.framer-30D1W .framer-uibrbw-container { flex: none; height: 198px; position: relative; width: 136px; }`,
        `.framer-30D1W .framer-1584asb { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1480px; overflow: visible; padding: 180px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1yqd1cr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-30D1W .framer-cugt0u { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-30D1W .framer-iz2ttu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 540px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1ci02mx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 200px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-30D1W .framer-1lhy046, .framer-30D1W .framer-kk01de { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 420px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-fh9adf-container, .framer-30D1W .framer-217sdr-container, .framer-30D1W .framer-vwcvun-container { flex: none; height: auto; position: relative; width: 370px; }`,
        `.framer-30D1W .framer-1w24wxd, .framer-30D1W .framer-1v5lw3w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 140px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-30D1W .framer-ut62vy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 300px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-sxcm2e-container, .framer-30D1W .framer-nyb1nu-container { flex: none; height: auto; position: relative; width: 350px; }`,
        `.framer-30D1W .framer-pemt1m { flex: none; gap: 500px; height: 200px; overflow: hidden; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-516i77 { align-content: flex-end; align-items: flex-end; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1480px; overflow: hidden; padding: 140px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-101ri9t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1m9mwkk { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 870px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-30D1W .framer-jx0221 { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1480px; overflow: visible; padding: 180px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1cb3c26 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 870px; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-aw0pws { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-uhiquf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: 100vh; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-30D1W .framer-yo1wig { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-zc56pd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; transform-style: preserve-3d; width: min-content; }`,
        `.framer-30D1W .framer-nubgww, .framer-30D1W .framer-o6wfn3, .framer-30D1W .framer-lpbbuk, .framer-30D1W .framer-1lhrha6, .framer-30D1W .framer-yt13h4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 151px; justify-content: center; overflow: visible; padding: 0px; position: relative; transform-style: preserve-3d; width: 865px; }`,
        `.framer-30D1W .framer-1ptiw9v-container { flex: none; height: 215px; left: calc(-0.1615508885298647% - 320px / 2); position: absolute; top: calc(49.62406015037596% - 215px / 2); width: 320px; z-index: 1; }`,
        `.framer-30D1W .framer-1yykzln-container, .framer-30D1W .framer-1mim42x-container, .framer-30D1W .framer-wu7qjo-container, .framer-30D1W .framer-1qqals2-container { flex: none; height: 215px; left: -161px; position: absolute; top: -82px; width: 320px; z-index: 1; }`,
        `.framer-30D1W .framer-n0cvq4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1400px; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1edeiw8 { align-content: flex-start; align-items: flex-start; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1480px; overflow: hidden; padding: 50px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-qenayq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-we35tc { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-30D1W .framer-k8wqra { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1r2gzzg { align-content: flex-start; align-items: flex-start; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 1480px; overflow: visible; padding: 180px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1xuj707 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-30D1W .framer-1f0ztrn, .framer-30D1W .framer-1th58uk, .framer-30D1W .framer-1tb74ez { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: sticky; top: 20px; width: 100%; z-index: 1; }`,
        `.framer-30D1W .framer-1r87psp-container, .framer-30D1W .framer-y6m9g-container, .framer-30D1W .framer-yp67ai-container, .framer-30D1W .framer-1v9gz2l-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; z-index: 1; }`,
        ...Ge,
        ...pt,
        ...Ye,
        `.framer-30D1W[data-selection="true"] * ::selection, .framer-30D1W [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
        `.framer-30D1W[data-border="true"]::after, .framer-30D1W [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-30D1W.framer-72rtr7 { width: 810px; } .framer-30D1W .framer-ty36tk { gap: 20px; justify-content: flex-start; } .framer-30D1W.framer-nqfrei { width: 80%; } .framer-30D1W .framer-iysrdq, .framer-30D1W .framer-k8wqra { flex-direction: column; } .framer-30D1W .framer-lr824 { height: 640px; width: 100%; } .framer-30D1W .framer-udqf9x, .framer-30D1W .framer-19fh9pm { flex: 1 0 0px; width: 1px; } .framer-30D1W .framer-1rl8hlq { align-self: unset; flex: none; gap: 80px; height: min-content; justify-content: flex-start; width: 100%; } .framer-30D1W .framer-7ma1j6 { padding: 130px 0px 0px 0px; } .framer-30D1W .framer-1ejixw2 { gap: 24px; } .framer-30D1W .framer-yyr9dg, .framer-30D1W .framer-a02h80 { flex-direction: column; gap: 24px; justify-content: flex-start; } .framer-30D1W .framer-aieywt { padding: 80px 0px 0px 0px; width: 100%; } .framer-30D1W .framer-1nqezu6-container, .framer-30D1W .framer-1io1jaa-container, .framer-30D1W .framer-1gusm9m-container, .framer-30D1W .framer-1d8vcph-container, .framer-30D1W .framer-1cx19ot-container { height: 600px; } .framer-30D1W .framer-1bn3y75, .framer-30D1W .framer-b48xgz-container { width: 100%; } .framer-30D1W .framer-ayya54, .framer-30D1W .framer-roc34l { padding: 0px; width: 100%; } .framer-30D1W .framer-ywystf, .framer-30D1W .framer-1390c7e, .framer-30D1W .framer-3bo6w, .framer-30D1W .framer-1584asb, .framer-30D1W .framer-516i77, .framer-30D1W .framer-1edeiw8, .framer-30D1W .framer-1r2gzzg { padding: 120px 0px 0px 0px; } .framer-30D1W .framer-1wqpm7v { align-content: flex-start; align-items: flex-start; gap: 50px; padding: 40px 24px 0px 24px; } .framer-30D1W .framer-ica3fy { aspect-ratio: 0.6892177589852009 / 1; height: var(--framer-aspect-ratio-supported, 213px); top: 1126px; width: 147px; } .framer-30D1W .framer-6h0ehn { aspect-ratio: 0.6889226100151745 / 1; height: var(--framer-aspect-ratio-supported, 296px); width: 204px; } .framer-30D1W .framer-cpykhu { aspect-ratio: 0.6892177589852009 / 1; height: var(--framer-aspect-ratio-supported, 227px); left: 36px; top: 590px; width: 156px; } .framer-30D1W .framer-1wraq4e { align-content: flex-start; align-items: flex-start; padding: 0px; } .framer-30D1W .framer-1gmzvq4, .framer-30D1W .framer-1lhy046, .framer-30D1W .framer-kk01de { gap: 80px; } .framer-30D1W .framer-fh9adf-container, .framer-30D1W .framer-217sdr-container, .framer-30D1W .framer-vwcvun-container, .framer-30D1W .framer-nyb1nu-container { width: 330px; } .framer-30D1W .framer-1m9mwkk { max-width: unset; } .framer-30D1W .framer-jx0221 { gap: 80px; padding: 120px 0px 0px 0px; } .framer-30D1W .framer-1cb3c26 { max-width: unset; order: 1; overflow: hidden; } .framer-30D1W .framer-z1zavc { mix-blend-mode: unset; } .framer-30D1W .framer-1a29w76-container { order: 0; } .framer-30D1W .framer-aw0pws { order: 2; } .framer-30D1W .framer-uhiquf { height: min-content; padding: 0px 24px 0px 24px; position: relative; top: unset; } .framer-30D1W .framer-yo1wig { flex: none; height: min-content; } .framer-30D1W .framer-zc56pd { gap: 24px; width: 100%; } .framer-30D1W .framer-nubgww, .framer-30D1W .framer-o6wfn3, .framer-30D1W .framer-1lhrha6, .framer-30D1W .framer-yt13h4 { height: 360px; transform-style: unset; width: 100%; } .framer-30D1W .framer-1ptiw9v-container, .framer-30D1W .framer-1yykzln-container, .framer-30D1W .framer-wu7qjo-container, .framer-30D1W .framer-1qqals2-container { flex: 1 0 0px; height: 100%; left: unset; position: relative; top: unset; width: 1px; } .framer-30D1W .framer-lpbbuk { height: 360px; width: 100%; } .framer-30D1W .framer-1mim42x-container { flex: 1 0 0px; height: 360px; left: unset; position: relative; top: unset; width: 1px; } .framer-30D1W .framer-8rssa6-container, .framer-30D1W .framer-1985ok6-container, .framer-30D1W .framer-19licix-container { flex: none; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-30D1W.framer-72rtr7 { width: 390px; } .framer-30D1W .framer-ty36tk { flex-direction: column; gap: 30px; justify-content: flex-start; padding: 30px 20px 30px 20px; } .framer-30D1W .framer-1n76yiy { flex: none; padding: 0px; width: 100%; } .framer-30D1W .framer-ajhxcq { height: 220px; width: 100%; } .framer-30D1W .framer-1uxqzhi-container { flex: 1 0 0px; height: 100%; width: 1px; } .framer-30D1W.framer-nqfrei { width: 90%; } .framer-30D1W .framer-2xxdw2, .framer-30D1W .framer-ydi31p, .framer-30D1W .framer-1shioqx, .framer-30D1W .framer-1l9i2gv, .framer-30D1W .framer-ut62vy, .framer-30D1W .framer-101ri9t, .framer-30D1W .framer-1jn02w5 { padding: 0px 20px 0px 20px; } .framer-30D1W .framer-iysrdq { flex-direction: column; gap: 0px; padding: 0px 20px 0px 20px; } .framer-30D1W .framer-lr824 { height: 380px; width: 100%; } .framer-30D1W .framer-udqf9x, .framer-30D1W .framer-19fh9pm, .framer-30D1W .framer-sxcm2e-container { flex: 1 0 0px; width: 1px; } .framer-30D1W .framer-1rl8hlq { align-self: unset; flex: none; gap: 60px; height: min-content; justify-content: center; padding: 60px 0px 0px 0px; width: 100%; } .framer-30D1W .framer-1v555c3, .framer-30D1W .framer-6vahvq, .framer-30D1W .framer-cugt0u, .framer-30D1W .framer-1ci02mx { gap: 30px; } .framer-30D1W .framer-g03chh { gap: 10px; } .framer-30D1W .framer-175z5lx, .framer-30D1W .framer-uxzvq2 { flex-direction: column; gap: 10px; } .framer-30D1W .framer-1iijldg-container, .framer-30D1W .framer-ngmrzn-container, .framer-30D1W .framer-1tv4fvb-container, .framer-30D1W .framer-w56dtp-container, .framer-30D1W .framer-1umn22f-container, .framer-30D1W .framer-8rssa6-container, .framer-30D1W .framer-1985ok6-container, .framer-30D1W .framer-19licix-container { flex: none; width: 100%; } .framer-30D1W .framer-7ma1j6, .framer-30D1W .framer-ywystf, .framer-30D1W .framer-1390c7e, .framer-30D1W .framer-3bo6w, .framer-30D1W .framer-516i77, .framer-30D1W .framer-jx0221, .framer-30D1W .framer-1edeiw8, .framer-30D1W .framer-1r2gzzg { gap: 60px; padding: 80px 0px 0px 0px; } .framer-30D1W .framer-nioezp, .framer-30D1W .framer-qenayq { gap: 60px; } .framer-30D1W .framer-1vtzatb { gap: 30px; padding: 0px 20px 0px 20px; } .framer-30D1W .framer-1ejixw2 { gap: 24px; } .framer-30D1W .framer-yyr9dg, .framer-30D1W .framer-a02h80 { flex-direction: column; gap: 24px; justify-content: flex-start; } .framer-30D1W .framer-aieywt, .framer-30D1W .framer-ayya54, .framer-30D1W .framer-roc34l, .framer-30D1W .framer-1w24wxd, .framer-30D1W .framer-1v5lw3w { padding: 0px; width: 100%; } .framer-30D1W .framer-1nqezu6-container, .framer-30D1W .framer-1gusm9m-container, .framer-30D1W .framer-1cx19ot-container { height: 390px; } .framer-30D1W .framer-1bn3y75, .framer-30D1W .framer-b48xgz-container, .framer-30D1W .framer-fh9adf-container, .framer-30D1W .framer-217sdr-container, .framer-30D1W .framer-vwcvun-container, .framer-30D1W .framer-nyb1nu-container { width: 100%; } .framer-30D1W .framer-1wqpm7v { align-content: flex-start; align-items: flex-start; gap: 60px; padding: 0px 20px 0px 20px; } .framer-30D1W .framer-ica3fy { aspect-ratio: 0.6892177589852009 / 1; height: var(--framer-aspect-ratio-supported, 111px); left: 16px; top: 686px; width: 76px; } .framer-30D1W .framer-6h0ehn { aspect-ratio: 0.6889226100151745 / 1; height: var(--framer-aspect-ratio-supported, 209px); top: 936px; width: 144px; } .framer-30D1W .framer-cpykhu { aspect-ratio: 0.6892177589852009 / 1; height: var(--framer-aspect-ratio-supported, 124px); left: 286px; top: 440px; width: 85px; } .framer-30D1W .framer-1wraq4e { padding: 0px; } .framer-30D1W .framer-1xdtwk-container, .framer-30D1W .framer-8mcdq1-container { width: auto; } .framer-30D1W .framer-1584asb { padding: 80px 0px 0px 0px; } .framer-30D1W .framer-1lhy046, .framer-30D1W .framer-kk01de { flex-direction: column; gap: 30px; padding: 0px 20px 0px 20px; } .framer-30D1W .framer-1cb3c26 { order: 1; overflow: hidden; padding: 0px 20px 0px 20px; } .framer-30D1W .framer-1a29w76-container { order: 0; } .framer-30D1W .framer-aw0pws { order: 2; } .framer-30D1W .framer-uhiquf { height: min-content; padding: 0px 20px 0px 20px; position: relative; top: unset; } .framer-30D1W .framer-yo1wig { flex: none; height: min-content; } .framer-30D1W .framer-zc56pd { gap: 24px; transform-style: unset; width: 100%; } .framer-30D1W .framer-nubgww, .framer-30D1W .framer-o6wfn3, .framer-30D1W .framer-lpbbuk, .framer-30D1W .framer-1lhrha6, .framer-30D1W .framer-yt13h4 { height: 240px; transform-style: unset; width: 100%; } .framer-30D1W .framer-1ptiw9v-container, .framer-30D1W .framer-1yykzln-container, .framer-30D1W .framer-1mim42x-container, .framer-30D1W .framer-wu7qjo-container, .framer-30D1W .framer-1qqals2-container { flex: 1 0 0px; height: 100%; left: unset; position: relative; top: unset; width: 1px; } .framer-30D1W .framer-k8wqra { flex-direction: column; padding: 0px 20px 0px 20px; } .framer-30D1W .framer-1xuj707 { gap: 24px; padding: 0px 20px 0px 20px; }}`,
      ],
      `framer-30D1W`
    )),
    (nc = tc),
    (tc.displayName = `Home`),
    (tc.defaultProps = { height: 22080.5, width: 1200 }),
    j(
      tc,
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
        ...Ao,
        ...Mo,
        ...No,
        ...Fo,
        ...Lo,
        ...Ro,
        ...Bo,
        ...Vo,
        ...Ho,
        ...Uo,
        ...Go,
        ...Ko,
        ...qo,
        ...Jo,
        ...Xo,
        ...Zo,
        ...Qo,
        ...$o,
        ...es,
        ...ns,
        ...rs,
        ...is,
        ...as,
        ...J(Ke),
        ...J(ht),
        ...J(Xe),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (rc = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"uQRrO6hCw":{"layout":["fixed","auto"]},"TARYGz5CA":{"layout":["fixed","auto"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicWidth: `1200`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `22080.5`,
            framerScrollSections: `{"MHiTKHdUJ":{"pattern":":MHiTKHdUJ","name":"top"},"qkDPHMqEp":{"pattern":":qkDPHMqEp","name":"images"},"cxKKrit_s":{"pattern":":XG3otaDlZ-:cxKKrit_s","name":"card-2","slugs":{"XG3otaDlZ":{"identifier":"local-module:collection/ERDJzzQHr:default","provider":"BqYRJ2f6p"}}},"HwcwFPeWv":{"pattern":":XG3otaDlZ-:HwcwFPeWv","name":"card-1","slugs":{"XG3otaDlZ":{"identifier":"local-module:collection/ERDJzzQHr:default","provider":"pCK9VFdyL"}}},"gXO5T5l0P":{"pattern":":XG3otaDlZ-:gXO5T5l0P","name":"card-3","slugs":{"XG3otaDlZ":{"identifier":"local-module:collection/ERDJzzQHr:default","provider":"xiQtB0ygJ"}}},"PlaDQURl5":{"pattern":":XG3otaDlZ-:PlaDQURl5","name":"card-4","slugs":{"XG3otaDlZ":{"identifier":"local-module:collection/ERDJzzQHr:default","provider":"ws_bTD3yG"}}}}`,
            framerColorSyntax: `true`,
            framerResponsiveScreen: ``,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { rc as __FramerMetadata__, nc as default };
//# sourceMappingURL=5iyDad2U2rvPlqXprHltu6PD53Ci8tNj7TvSt_sqo8E.BfFRjXR7.mjs.map
