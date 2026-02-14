import { t as e } from './rolldown-runtime.hBrq4iGT.mjs';
import {
  B as t,
  D as n,
  E as r,
  F as i,
  H as a,
  I as o,
  L as s,
  M as ee,
  N as c,
  P as te,
  R as ne,
  _ as l,
  b as re,
  c as u,
  j as d,
  l as f,
  o as p,
  v as ie,
  w as ae,
  x as m,
} from './react.C4KsdBhc.mjs';
import {
  L as oe,
  P as se,
  S as h,
  W as ce,
  a as g,
  h as le,
  r as ue,
  t as _,
  z as de,
} from './motion.CLMuhvIE.mjs';
import {
  D as v,
  K as y,
  M as fe,
  O as b,
  a as x,
  bt as pe,
  j as S,
  pt as me,
  rt as he,
  w as C,
  x as ge,
  xt as w,
  z as _e,
} from './framer.CmCM7JFA.mjs';
var T,
  E = e(() => {
    T = (e) => e;
  }),
  D = e(() => {
    E();
  }),
  O = e(() => {
    D();
  });
function k(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
var A = e(() => {}),
  j,
  M = e(() => {
    ((j = {}),
      Object.defineProperty(j, `__esModule`, { value: !0 }),
      (j.warning = function () {}),
      (j.invariant = function () {}),
      j.__esModule,
      j.warning,
      j.invariant);
  }),
  N = e(() => {
    E();
  });
function P(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function F(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = P(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e);
              typeof n == `function` ? o.set(e.target, n) : s.unobserve(e.target);
            } else n && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : Ee[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function ve(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function ye({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = Y.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return ve(e, n);
        },
      });
    });
}
function I(e) {
  e.forEach(ye);
}
function L() {
  typeof ResizeObserver < `u` && (X = new ResizeObserver(I));
}
function R(e, t) {
  X || L();
  let n = P(e);
  return (
    n.forEach((e) => {
      let n = Y.get(e);
      (n || ((n = new Set()), Y.set(e, n)), n.add(t), X?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = Y.get(e);
        (n?.delete(t), (n != null && n.size) || X == null || X.unobserve(e));
      });
    }
  );
}
function be() {
  ((Q = () => {
    let e = { width: a.innerWidth, height: a.innerHeight },
      t = { target: a, size: e, contentSize: e };
    Z.forEach((e) => e(t));
  }),
    a.addEventListener(`resize`, Q));
}
function xe(e) {
  return (
    Z.add(e),
    Q || be(),
    () => {
      (Z.delete(e), !Z.size && Q && (Q = void 0));
    }
  );
}
function Se(e, t) {
  return typeof e == `function` ? xe(e) : R(e, t);
}
function z(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function B(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var V,
  Ce,
  H,
  U,
  W,
  G,
  K,
  q,
  we,
  J,
  Te,
  Ee,
  Y,
  X,
  Z,
  Q,
  De,
  Oe,
  ke,
  Ae = e(() => {
    for (let e in (t(),
    E(),
    O(),
    A(),
    M(),
    N(),
    (V = [``, `X`, `Y`, `Z`]),
    (Ce = [`translate`, `scale`, `rotate`, `skew`]),
    (H = { syntax: `<angle>`, initialValue: `0deg`, toDefaultUnit: (e) => e + `deg` }),
    (U = {
      translate: {
        syntax: `<length-percentage>`,
        initialValue: `0px`,
        toDefaultUnit: (e) => e + `px`,
      },
      rotate: H,
      scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: T },
      skew: H,
    }),
    (W = new Map()),
    (G = (e) => `--motion-${e}`),
    (K = [`x`, `y`, `z`]),
    Ce.forEach((e) => {
      V.forEach((t) => {
        (K.push(e + t), W.set(G(e + t), U[e]));
      });
    }),
    new Set(K),
    (q = (e) => document.createElement(`div`).animate(e, { duration: 0.001 })),
    (we = {
      cssRegisterProperty: () =>
        typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
      waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
      partialKeyframes: () => {
        try {
          q({ opacity: [1] });
        } catch {
          return !1;
        }
        return !0;
      },
      finished: () => !!q({ opacity: [0, 1] }).finished,
    }),
    (J = {}),
    (Te = {}),
    we))
      Te[e] = () => (J[e] === void 0 && (J[e] = we[e]()), J[e]);
    ((Ee = { any: 0, all: 1 }),
      (Y = new WeakMap()),
      (Z = new Set()),
      (De = {
        isActive: (e) => !!e.inView,
        subscribe: (e, { enable: t, disable: n }, { inViewOptions: r = {} }) => {
          let { once: i } = r;
          return F(
            e,
            (r) => {
              if ((t(), B(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), B(e, `viewleave`, t));
                };
            },
            k(r, [`once`])
          );
        },
      }),
      (Oe = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), z(e, t, r));
      }),
      (ke = {
        inView: De,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = Oe(e, `hoverstart`, t),
              i = Oe(e, `hoverend`, n);
            return (
              e.addEventListener(`pointerenter`, r),
              e.addEventListener(`pointerleave`, i),
              () => {
                (e.removeEventListener(`pointerenter`, r),
                  e.removeEventListener(`pointerleave`, i));
              }
            );
          },
        },
        press: {
          isActive: (e) => !!e.press,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = (t) => {
                (n(), z(e, `pressend`, t), a.removeEventListener(`pointerup`, r));
              },
              i = (n) => {
                (t(), z(e, `pressstart`, n), a.addEventListener(`pointerup`, r));
              };
            return (
              e.addEventListener(`pointerdown`, i),
              () => {
                (e.removeEventListener(`pointerdown`, i), a.removeEventListener(`pointerup`, r));
              }
            );
          },
        },
      }),
      [...Object.keys(ke)]);
  });
function je(e) {
  let {
      slots: t = [],
      gap: r,
      padding: a,
      paddingPerSide: s,
      paddingTop: c,
      paddingRight: l,
      paddingBottom: re,
      paddingLeft: p,
      speed: m,
      hoverFactor: g,
      direction: _,
      alignment: v,
      sizingOptions: y,
      fadeOptions: fe,
      style: b,
    } = e,
    { fadeContent: x, overflow: pe, fadeWidth: S, fadeInset: me, fadeAlpha: he } = fe,
    { widthType: C, heightType: w } = y,
    _e = s ? `${c}px ${l}px ${re}px ${p}px` : `${a}px`,
    T = ge.current(),
    E = T === ge.canvas || T === ge.export,
    D = t.filter(Boolean),
    O = n.count(D),
    k = O > 0;
  _ === !0 && (_ = `left`);
  let A = _ === `left` || _ === `right`,
    j = oe(0),
    M = Ne[_];
  ce(j, M);
  let N = d(null),
    P = te(() => [{ current: null }, { current: null }], []),
    [F, ve] = ne({ parent: null, children: null }),
    ye = null,
    I = [],
    L = 0,
    R = 0;
  (E && ((L = O ? Math.floor(10 / O) : 0), (R = 1)),
    !E &&
      k &&
      F.parent &&
      ((L = Math.round((F.parent / F.children) * 2) + 1), (L = Math.min(L, Me)), (R = 1)));
  let be = i(() => {
      if (k && N.current) {
        let e = A ? N.current.offsetWidth : N.current.offsetHeight,
          t = P[0].current ? (A ? P[0].current.offsetLeft : P[0].current.offsetTop) : 0,
          n =
            (P[1].current
              ? A
                ? P[1].current.offsetLeft + P[1].current.offsetWidth
                : P[1].current.offsetTop + P[1].current.offsetHeight
              : 0) -
            t +
            r;
        ie(() => {
          ve({ parent: e, children: n });
        });
      }
    }, []),
    xe = E ? { contentVisibility: `auto` } : {};
  if (k) {
    if (!E) {
      let e = d(!0);
      ae(
        () => (
          le.read(be, !1, !0),
          Se(N.current, ({ contentSize: t }) => {
            (!e.current && (t.width || t.height) && le.read(be, !1, !0), (e.current = !1));
          })
        ),
        []
      );
    }
    ye = n.map(D, (e, t) => {
      let n;
      (t === 0 && (n = P[0]), t === D.length - 1 && (n = P[1]));
      let r = { width: C ? e.props?.width : `100%`, height: w ? e.props?.height : `100%` };
      return u(ue, {
        inherit: `id`,
        children: u(Pe, {
          ref: n,
          style: r,
          children: ee(
            e,
            {
              style: { ...e.props?.style, ...r, flexShrink: 0, ...xe },
              layoutId: e.props.layoutId ? e.props.layoutId + `-original-` + t : void 0,
            },
            e.props?.children
          ),
        }),
      });
    });
  }
  let z = E ? !0 : se(N);
  if (!E)
    for (let e = 0; e < L; e++)
      I = I.concat(
        n.map(D, (t, n) =>
          u(
            ue,
            {
              inherit: `id`,
              children: u(
                Pe,
                {
                  style: {
                    width: C ? t.props?.width : `100%`,
                    height: w ? t.props?.height : `100%`,
                    willChange: z ? `transform` : void 0,
                  },
                  children: ee(
                    t,
                    {
                      key: e + ` ` + n,
                      style: {
                        ...t.props?.style,
                        width: C ? t.props?.width : `100%`,
                        height: w ? t.props?.height : `100%`,
                        flexShrink: 0,
                        ...xe,
                      },
                      layoutId: t.props.layoutId ? t.props.layoutId + `-dupe-` + e : void 0,
                    },
                    t.props?.children
                  ),
                },
                e + `li` + n
              ),
            },
            e + `lg` + n
          )
        )
      );
  let B = F.children + F.children * Math.round(F.parent / F.children);
  (d(null), d(null), d(0));
  let V = d(!1),
    Ce = de(),
    H = d(null),
    U = d(null);
  if (!E) {
    o(() => {
      if (!(Ce || !B || !m))
        return (
          (U.current = H.current.animate(
            { transform: [M(0), M(B)] },
            { duration: (Math.abs(B) / m) * 1e3, iterations: 1 / 0, easing: `linear` }
          )),
          () => U.current.cancel()
        );
    }, [g, B, m]);
    let e = i(() => {
      if (!U.current) return;
      let e = document.hidden;
      z && !e && U.current.playState === `paused`
        ? U.current.play()
        : (!z || e) && U.current.playState === `running` && U.current.pause();
    }, [z]);
    (o(() => {
      e();
    }, [z, g, B, m]),
      o(
        () => (
          document.addEventListener(`visibilitychange`, e),
          () => {
            document.removeEventListener(`visibilitychange`, e);
          }
        ),
        [e]
      ));
  }
  let W = A ? `to right` : `to bottom`,
    G = S / 2,
    K = 100 - S / 2,
    q = `linear-gradient(${W}, rgba(0, 0, 0, ${he}) ${Be(me, 0, G)}%, rgba(0, 0, 0, 1) ${G}%, rgba(0, 0, 0, 1) ${K}%, rgba(0, 0, 0, ${he}) ${100 - me}%)`;
  return k
    ? u(`section`, {
        style: {
          ...Fe,
          opacity: R,
          WebkitMaskImage: x ? q : void 0,
          maskImage: x ? q : void 0,
          overflow: pe ? `visible` : `hidden`,
          padding: _e,
        },
        ref: N,
        children: f(h.ul, {
          ref: H,
          style: {
            ...Fe,
            gap: r,
            top: _ === `bottom` && Ve(B) ? -B : void 0,
            left: _ === `right` && Ve(B) ? -B : void 0,
            placeItems: v,
            position: `relative`,
            flexDirection: A ? `row` : `column`,
            ...b,
            willChange: E || !z ? `auto` : `transform`,
            transform: M(0),
          },
          onMouseEnter: () => {
            ((V.current = !0), U.current && (U.current.playbackRate = g));
          },
          onMouseLeave: () => {
            ((V.current = !1), U.current && (U.current.playbackRate = 1));
          },
          children: [ye, I],
        }),
      })
    : f(`section`, {
        style: Ie,
        children: [
          u(`div`, { style: Le, children: `✨` }),
          u(`p`, { style: Re, children: `Connect to Content` }),
          u(`p`, {
            style: ze,
            children: `Add layers or components to infinitely loop on your page.`,
          }),
        ],
      });
}
var Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He = e(() => {
    (p(),
      r(),
      y(),
      _(),
      Ae(),
      (Me = 100),
      (Ne = {
        left: (e) => `translateX(-${e}px)`,
        right: (e) => `translateX(${e}px)`,
        top: (e) => `translateY(-${e}px)`,
        bottom: (e) => `translateY(${e}px)`,
      }),
      (Pe = l(({ children: e, ...t }, n) => {
        let r = d(),
          i = se(r);
        return (
          m(n, () => r.current),
          o(() => {
            let e = r.current;
            e &&
              (i
                ? e.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.dataset.origTabIndex;
                    t ? (e.tabIndex = t) : e.removeAttribute(`tabIndex`);
                  })
                : e.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.getAttribute(`tabIndex`);
                    (t && (e.dataset.origTabIndex = t), (e.tabIndex = -1));
                  }));
          }, [i]),
          u(`li`, { ...t, 'aria-hidden': !i, ref: r, children: e })
        );
      })),
      (je.defaultProps = {
        gap: 10,
        padding: 10,
        sizingOptions: { widthType: !0, heightType: !0 },
        fadeOptions: { fadeContent: !0, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        direction: !0,
      }),
      b(je, {
        slots: { type: x.Array, title: `Children`, control: { type: x.ComponentInstance } },
        speed: {
          type: x.Number,
          title: `Speed`,
          min: 0,
          max: 1e3,
          defaultValue: 100,
          unit: `%`,
          displayStepper: !0,
          step: 5,
        },
        direction: {
          type: x.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          defaultValue: `left`,
          displaySegmentedControl: !0,
        },
        alignment: {
          type: x.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        gap: { type: x.Number, title: `Gap` },
        padding: {
          title: `Padding`,
          type: x.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        sizingOptions: {
          type: x.Object,
          title: `Sizing`,
          controls: {
            widthType: {
              type: x.Boolean,
              title: `Width`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
            heightType: {
              type: x.Boolean,
              title: `Height`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
          },
        },
        fadeOptions: {
          type: x.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: x.Boolean, title: `Fade`, defaultValue: !0 },
            overflow: {
              type: x.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: x.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: x.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: x.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        hoverFactor: {
          type: x.Number,
          title: `Hover`,
          min: 0,
          max: 1,
          unit: `x`,
          defaultValue: 1,
          step: 0.1,
          displayStepper: !0,
          description: `Slows down the speed while you are hovering.`,
        },
      }),
      (Fe = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (Ie = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (Le = { fontSize: 32, marginBottom: 10 }),
      (Re = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (ze = { margin: 0, opacity: 0.7, maxWidth: 150, lineHeight: 1.5, textAlign: `center` }),
      (Be = (e, t, n) => Math.min(Math.max(e, t), n)),
      (Ve = (e) => typeof e == `number` && !isNaN(e)));
  }),
  Ue,
  We,
  Ge,
  Ke = e(() => {
    (y(),
      fe.loadFonts([
        `FR;InterDisplay`,
        `FR;InterDisplay-Bold`,
        `FR;InterDisplay-BoldItalic`,
        `FR;InterDisplay-Italic`,
      ]),
      (Ue = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/2uIBiALfCHVpWbHqRMZutfT7giU.woff2`,
              weight: `400`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/Zwfz6xbVe5pmcWRJRgBDHnMkOkI.woff2`,
              weight: `400`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/U9LaDDmbRhzX3sB8g8glTy5feTE.woff2`,
              weight: `400`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/tVew2LzXJ1t7QfxP1gdTIdj2o0g.woff2`,
              weight: `400`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/DF7bjCRmStYPqSb945lAlMfCCVQ.woff2`,
              weight: `400`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/nCpxWS6DaPlPe0lHzStXAPCo3lw.woff2`,
              weight: `400`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/vebZUMjGyKkYsfcY73iwWTzLNag.woff2`,
              weight: `400`,
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
              url: `https://framerusercontent.com/assets/THWAFHoAcmqLMy81E8hCSdziVKA.woff2`,
              weight: `400`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/sQxGYWDlRkDr0eOKqiNRl6g5rs.woff2`,
              weight: `400`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/NNTAT1XAm8ZRkr824inYPkjNeL4.woff2`,
              weight: `400`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/P2qr9PAWBt905929rHfxmneMUG0.woff2`,
              weight: `400`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/2BmSa4TZZvFKAZg2DydxTbvKlTU.woff2`,
              weight: `400`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/djqIk3Er2JcAcz7Rup88BdINEw.woff2`,
              weight: `400`,
            },
            {
              family: `Inter Display`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/KMFW46iYsEZaUBwXbwPc9nQm71o.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (We = [
        `.framer-7NCyt .framer-styles-preset-5i8emc:not(.rich-text-wrapper), .framer-7NCyt .framer-styles-preset-5i8emc.rich-text-wrapper h6 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0px; --framer-line-height: 13px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
      ]),
      (Ge = `framer-7NCyt`));
  });
function qe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  $,
  rt,
  it = e(() => {
    (p(),
      y(),
      _(),
      r(),
      Ke(),
      (Je = [`XFF72MIUC`, `kQZZjN_Db`, `CmSf9J7E0`]),
      (Ye = `framer-YdhKA`),
      (Xe = {
        CmSf9J7E0: `framer-v-1fsakk`,
        kQZZjN_Db: `framer-v-121ho0w`,
        XFF72MIUC: `framer-v-1vyxjad`,
      }),
      (Ze = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Qe = ({ value: e, children: t }) => {
        let n = c(g),
          r = e ?? n.transition,
          i = te(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return u(g.Provider, { value: i, children: t });
      }),
      ($e = h.create(s)),
      (et = { L: `XFF72MIUC`, M: `kQZZjN_Db`, S: `CmSf9J7E0` }),
      (tt = ({ height: e, id: t, title1: n, title2: r, title3: i, width: a, ...o }) => ({
        ...o,
        Hq7BZwPem: r ?? o.Hq7BZwPem ?? `(WDX® — 02)`,
        NHubkDs7R: i ?? o.NHubkDs7R ?? `Digital Designer`,
        pWoyTVtQ4: n ?? o.pWoyTVtQ4 ?? `©\xA0Selected Works こんにちは`,
        variant: et[o.variant] ?? o.variant ?? `XFF72MIUC`,
      })),
      (nt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = w(
        l(function (e, t) {
          let n = d(null),
            r = t ?? n,
            i = re(),
            { activeLocale: a, setLocale: o } = me();
          he();
          let {
              style: ee,
              className: c,
              layoutId: te,
              variant: ne,
              pWoyTVtQ4: l,
              Hq7BZwPem: p,
              NHubkDs7R: ie,
              ...ae
            } = tt(e),
            {
              baseVariant: m,
              classNames: oe,
              clearLoadingGesture: se,
              gestureHandlers: ce,
              gestureVariant: g,
              isLoading: le,
              setGestureState: _,
              setVariant: de,
              variants: v,
            } = pe({
              cycleOrder: Je,
              defaultVariant: `XFF72MIUC`,
              ref: r,
              variant: ne,
              variantClassNames: Xe,
            }),
            y = nt(e, v),
            fe = S(Ye, Ge),
            b = () => ![`kQZZjN_Db`, `CmSf9J7E0`].includes(m);
          return u(ue, {
            id: te ?? i,
            children: u($e, {
              animate: v,
              initial: !1,
              children: u(Qe, {
                value: Ze,
                children: f(h.div, {
                  ...ae,
                  ...ce,
                  className: S(fe, `framer-1vyxjad`, c, oe),
                  'data-framer-name': `L`,
                  layoutDependency: y,
                  layoutId: `XFF72MIUC`,
                  ref: r,
                  style: { ...ee },
                  ...qe(
                    {
                      CmSf9J7E0: { 'data-framer-name': `S` },
                      kQZZjN_Db: { 'data-framer-name': `M` },
                    },
                    m,
                    g
                  ),
                  children: [
                    f(h.div, {
                      className: `framer-16gon14`,
                      'data-framer-name': `Content`,
                      layoutDependency: y,
                      layoutId: `kaKbTNkgB`,
                      children: [
                        f(h.div, {
                          className: `framer-1mi7f9s`,
                          'data-framer-name': `Left`,
                          layoutDependency: y,
                          layoutId: `qcjsyObBY`,
                          children: [
                            u(h.div, {
                              className: `framer-hyji2a`,
                              'data-framer-name': `Text 1`,
                              layoutDependency: y,
                              layoutId: `AEJzXvKsL`,
                              children: u(C, {
                                __fromCanvasComponent: !0,
                                children: u(s, {
                                  children: u(h.h6, {
                                    className: `framer-styles-preset-5i8emc`,
                                    'data-styles-preset': `tb6OyQMXK`,
                                    children: `©\xA0Selected Works こんにちは`,
                                  }),
                                }),
                                className: `framer-9ner88`,
                                'data-framer-name': `Text`,
                                fonts: [`Inter`],
                                layoutDependency: y,
                                layoutId: `QmCJpLMaT`,
                                style: { '--framer-paragraph-spacing': `0px` },
                                text: l,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            b() &&
                              u(h.div, {
                                className: `framer-aqepui`,
                                'data-framer-name': `Text 2`,
                                layoutDependency: y,
                                layoutId: `aAHnGE99P`,
                                children: u(C, {
                                  __fromCanvasComponent: !0,
                                  children: u(s, {
                                    children: u(h.h6, {
                                      className: `framer-styles-preset-5i8emc`,
                                      'data-styles-preset': `tb6OyQMXK`,
                                      style: {
                                        '--framer-text-color': `var(--extracted-1w1cjl5, var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgba(187, 187, 187, 0.2)))`,
                                      },
                                      children: `(BO® —\xA002)`,
                                    }),
                                  }),
                                  className: `framer-12fneig`,
                                  'data-framer-name': `Text`,
                                  fonts: [`Inter`],
                                  layoutDependency: y,
                                  layoutId: `dzoIgEq5w`,
                                  style: {
                                    '--extracted-1w1cjl5': `var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgba(187, 187, 187, 0.2))`,
                                    '--framer-paragraph-spacing': `0px`,
                                  },
                                  text: p,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                          ],
                        }),
                        u(h.div, {
                          className: `framer-2av448`,
                          'data-framer-name': `Right`,
                          layoutDependency: y,
                          layoutId: `GYtHgG7RZ`,
                          children: u(C, {
                            __fromCanvasComponent: !0,
                            children: u(s, {
                              children: u(h.h6, {
                                className: `framer-styles-preset-5i8emc`,
                                'data-styles-preset': `tb6OyQMXK`,
                                style: {
                                  '--framer-text-color': `var(--extracted-1w1cjl5, var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgba(187, 187, 187, 0.2)))`,
                                },
                                children: `Digital Designer`,
                              }),
                            }),
                            className: `framer-rfpfgd`,
                            'data-framer-name': `Text`,
                            fonts: [`Inter`],
                            layoutDependency: y,
                            layoutId: `chb6zjuMX`,
                            style: {
                              '--extracted-1w1cjl5': `var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgba(187, 187, 187, 0.2))`,
                              '--framer-paragraph-spacing': `0px`,
                            },
                            text: ie,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    u(h.div, {
                      className: `framer-l8tp04`,
                      'data-framer-name': `Line`,
                      layoutDependency: y,
                      layoutId: `FaGeQYvjw`,
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
          `.framer-YdhKA.framer-txbf68, .framer-YdhKA .framer-txbf68 { display: block; }`,
          `.framer-YdhKA.framer-1vyxjad { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1440px; }`,
          `.framer-YdhKA .framer-16gon14 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
          `.framer-YdhKA .framer-1mi7f9s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 350px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-YdhKA .framer-hyji2a, .framer-YdhKA .framer-aqepui, .framer-YdhKA .framer-2av448 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-YdhKA .framer-9ner88, .framer-YdhKA .framer-12fneig, .framer-YdhKA .framer-rfpfgd { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-YdhKA .framer-l8tp04 { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }`,
          `.framer-YdhKA.framer-v-121ho0w.framer-1vyxjad { width: 810px; }`,
          `.framer-YdhKA.framer-v-1fsakk.framer-1vyxjad { width: 390px; }`,
          `.framer-YdhKA.framer-v-1fsakk .framer-16gon14 { padding: 0px 20px 0px 20px; }`,
          ...We,
        ],
        `framer-YdhKA`
      )),
      (rt = $),
      ($.displayName = `Header`),
      ($.defaultProps = { height: 24, width: 1440 }),
      b($, {
        variant: {
          options: [`XFF72MIUC`, `kQZZjN_Db`, `CmSf9J7E0`],
          optionTitles: [`L`, `M`, `S`],
          title: `Variant`,
          type: x.Enum,
        },
        pWoyTVtQ4: {
          defaultValue: `©\xA0Selected Works こんにちは`,
          displayTextArea: !1,
          title: `Title 1`,
          type: x.String,
        },
        Hq7BZwPem: {
          defaultValue: `(WDX® — 02)`,
          displayTextArea: !1,
          title: `Title 2`,
          type: x.String,
        },
        NHubkDs7R: {
          defaultValue: `Digital Designer`,
          displayTextArea: !1,
          title: `Title 3`,
          type: x.String,
        },
      }),
      v(
        $,
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
          ..._e(Ue),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { Ue as a, He as c, We as i, it as n, Ke as o, Ge as r, je as s, rt as t };
//# sourceMappingURL=XiwmsdpiU.BSOmk-TN.mjs.map
