import { t as e } from './rolldown-runtime.hBrq4iGT.mjs';
import {
  E as t,
  L as n,
  N as r,
  P as i,
  _ as a,
  b as o,
  c as s,
  j as c,
  l,
  o as u,
} from './react.C4KsdBhc.mjs';
import { S as d, a as f, r as p, t as m } from './motion.CLMuhvIE.mjs';
import {
  D as h,
  E as g,
  K as _,
  O as v,
  R as y,
  a as b,
  bt as x,
  j as S,
  m as C,
  pt as w,
  r as T,
  rt as E,
  xt as D,
} from './framer.CmCM7JFA.mjs';
import { n as O, t as k } from './RollingTextHover_Prod.CmNtZp_K.mjs';
function A(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W = e(() => {
    (u(),
      _(),
      m(),
      t(),
      O(),
      (j = y(k)),
      (M = { iJrMk7HF5: { hover: !0 } }),
      (N = [`iJrMk7HF5`, `TM6f2ytrb`]),
      (P = `framer-znJo4`),
      (F = { iJrMk7HF5: `framer-v-1irdo7w`, TM6f2ytrb: `framer-v-8j0kce` }),
      (I = { damping: 40, delay: 0, mass: 1, stiffness: 350, type: `spring` }),
      (L = ({ value: e, children: t }) => {
        let n = r(f),
          a = e ?? n.transition,
          o = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return s(f.Provider, { value: o, children: t });
      }),
      (R = d.create(n)),
      (z = { Primary: `iJrMk7HF5`, Secondary: `TM6f2ytrb` }),
      (B = ({
        height: e,
        id: t,
        link: n,
        newTab: r,
        smoothScroll: i,
        title: a,
        width: o,
        ...s
      }) => ({
        ...s,
        CSyo3aTPk: r ?? s.CSyo3aTPk,
        Gh9QOfeLM: a ?? s.Gh9QOfeLM ?? `SEE WORKS`,
        JQPbxOZrF: n ?? s.JQPbxOZrF,
        variant: z[s.variant] ?? s.variant ?? `iJrMk7HF5`,
        vZZm_o9LA: i ?? s.vZZm_o9LA,
      })),
      (V = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (H = D(
        a(function (e, t) {
          let n = c(null),
            r = t ?? n,
            i = o(),
            { activeLocale: a, setLocale: u } = w();
          E();
          let {
              style: f,
              className: m,
              layoutId: h,
              variant: _,
              Gh9QOfeLM: v,
              JQPbxOZrF: y,
              vZZm_o9LA: b,
              CSyo3aTPk: D,
              ...O
            } = B(e),
            {
              baseVariant: j,
              classNames: z,
              clearLoadingGesture: H,
              gestureHandlers: U,
              gestureVariant: W,
              isLoading: G,
              setGestureState: K,
              setVariant: q,
              variants: J,
            } = x({
              cycleOrder: N,
              defaultVariant: `iJrMk7HF5`,
              enabledGestures: M,
              ref: r,
              variant: _,
              variantClassNames: F,
            }),
            Y = V(e, J),
            X = S(P);
          return s(p, {
            id: h ?? i,
            children: s(R, {
              animate: J,
              initial: !1,
              children: s(L, {
                value: I,
                children: s(C, {
                  href: y,
                  motionChild: !0,
                  nodeId: `iJrMk7HF5`,
                  openInNewTab: D,
                  scopeId: `Wt4XK6WYf`,
                  smoothScroll: b,
                  children: l(d.a, {
                    ...O,
                    ...U,
                    className: `${S(X, `framer-1irdo7w`, m, z)} framer-dyycq1`,
                    'data-border': !0,
                    'data-framer-name': `Primary`,
                    layoutDependency: Y,
                    layoutId: `iJrMk7HF5`,
                    ref: r,
                    style: {
                      '--border-bottom-width': `2px`,
                      '--border-color': `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                      '--border-left-width': `2px`,
                      '--border-right-width': `2px`,
                      '--border-style': `solid`,
                      '--border-top-width': `2px`,
                      borderBottomLeftRadius: 259,
                      borderBottomRightRadius: 259,
                      borderTopLeftRadius: 259,
                      borderTopRightRadius: 259,
                      ...f,
                    },
                    ...A(
                      {
                        'iJrMk7HF5-hover': { 'data-framer-name': void 0 },
                        TM6f2ytrb: { 'data-framer-name': `Secondary` },
                      },
                      j,
                      W
                    ),
                    children: [
                      s(d.div, {
                        className: `framer-1sl4ib4`,
                        'data-framer-name': `Filler`,
                        layoutDependency: Y,
                        layoutId: `veMm_F3FU`,
                        style: {
                          backgroundColor: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                          borderBottomLeftRadius: 30,
                          borderBottomRightRadius: 30,
                          borderTopLeftRadius: 30,
                          borderTopRightRadius: 30,
                        },
                      }),
                      s(T, {
                        children: s(g, {
                          className: `framer-ultjt1-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: Y,
                          layoutId: `fruL1yXzo-container`,
                          nodeId: `fruL1yXzo`,
                          rendersWithMotion: !0,
                          scopeId: `Wt4XK6WYf`,
                          children: s(k, {
                            color: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                            font: {
                              fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
                              fontSize: `23px`,
                              fontStyle: `normal`,
                              fontWeight: 700,
                              letterSpacing: `-0.3px`,
                              lineHeight: `20px`,
                            },
                            height: `100%`,
                            id: `fruL1yXzo`,
                            layoutId: `fruL1yXzo`,
                            padding: `12px 18px 12px 18px`,
                            reverse: !1,
                            stagger: 55,
                            tag: `p`,
                            text: v,
                            textTransform: `uppercase`,
                            transition: {
                              delay: 0,
                              duration: 0.4,
                              ease: [0.82, 0.08, 0.29, 1],
                              type: `tween`,
                            },
                            width: `100%`,
                            ...A(
                              {
                                TM6f2ytrb: {
                                  font: {
                                    fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                    fontSize: `16px`,
                                    fontStyle: `normal`,
                                    fontWeight: 700,
                                    letterSpacing: `-0.3px`,
                                    lineHeight: `16px`,
                                  },
                                  padding: `8px 14px 8px 14px`,
                                },
                              },
                              j,
                              W
                            ),
                          }),
                        }),
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
          `.framer-znJo4.framer-dyycq1, .framer-znJo4 .framer-dyycq1 { display: block; }`,
          `.framer-znJo4.framer-1irdo7w { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-znJo4 .framer-1sl4ib4 { flex: none; height: 6px; left: 0px; overflow: visible; position: absolute; right: 0px; top: calc(115.90909090909093% - 6px / 2); }`,
          `.framer-znJo4 .framer-ultjt1-container { flex: none; height: auto; mix-blend-mode: difference; position: relative; width: auto; }`,
          `.framer-znJo4.framer-v-8j0kce.framer-1irdo7w { cursor: unset; }`,
          `.framer-znJo4.framer-v-1irdo7w.hover .framer-1sl4ib4 { height: 186px; order: 0; top: calc(115.90909090909093% - 186px / 2); }`,
          `.framer-znJo4.framer-v-1irdo7w.hover .framer-ultjt1-container { order: 1; }`,
          `.framer-znJo4[data-border="true"]::after, .framer-znJo4 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-znJo4`
      )),
      (U = H),
      (H.displayName = `Primary Button`),
      (H.defaultProps = { height: 44, width: 167 }),
      v(H, {
        variant: {
          options: [`iJrMk7HF5`, `TM6f2ytrb`],
          optionTitles: [`Primary`, `Secondary`],
          title: `Variant`,
          type: b.Enum,
        },
        Gh9QOfeLM: {
          defaultValue: `SEE WORKS`,
          displayTextArea: !1,
          title: `Title`,
          type: b.String,
        },
        JQPbxOZrF: { title: `Link`, type: b.Link },
        vZZm_o9LA: { defaultValue: !1, title: `Smooth Scroll`, type: b.Boolean },
        CSyo3aTPk: { defaultValue: !1, title: `New Tab`, type: b.Boolean },
      }),
      h(
        H,
        [
          {
            explicitInter: !0,
            fonts: [
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
            ],
          },
          ...j,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { W as n, U as t };
//# sourceMappingURL=Wt4XK6WYf.g8OMkRWP.mjs.map
