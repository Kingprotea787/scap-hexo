import { t as e } from './rolldown-runtime.hBrq4iGT.mjs';
import {
  B as t,
  E as n,
  F as r,
  I as i,
  P as a,
  R as o,
  V as s,
  c,
  g as l,
  j as u,
  o as d,
} from './react.C4KsdBhc.mjs';
import { P as f, b as p, t as m } from './motion.CLMuhvIE.mjs';
import { K as h, O as ee, a as g, lt as _, x as v } from './framer.CmCM7JFA.mjs';
var y,
  b,
  x,
  S = e(() => {
    (h(),
      (y = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (b = {
        ...y,
        borderRadius: 6,
        background: `rgba(136, 85, 255, 0.3)`,
        color: `#85F`,
        border: `1px dashed #85F`,
        flexDirection: `column`,
      }),
      (x = {
        onClick: { type: g.EventHandler },
        onMouseEnter: { type: g.EventHandler },
        onMouseLeave: { type: g.EventHandler },
      }),
      g.Number,
      g.Boolean,
      g.String,
      g.Enum);
  });
function te(e, t) {
  return C(!0, e, t);
}
function ne(e, t) {
  return C(!1, e, t);
}
function C(e, t, n = !0) {
  let r = _();
  i(() => {
    n && r === e && t();
  }, [r]);
}
var w = e(() => {
    (h(), n());
  }),
  T = e(() => {
    n();
  }),
  E = e(() => {
    h();
  }),
  D = e(() => {
    h();
  }),
  O = e(() => {
    n();
  }),
  k = e(() => {
    h();
  }),
  A,
  j,
  M = e(() => {
    (t(),
      n(),
      (A = () => {
        if (s !== void 0) {
          let e = s.userAgent.toLowerCase();
          return (
            (e.indexOf(`safari`) > -1 ||
              e.indexOf(`framermobile`) > -1 ||
              e.indexOf(`framerx`) > -1) &&
            e.indexOf(`chrome`) < 0
          );
        } else return !1;
      }),
      (j = () => a(() => A(), [])));
  }),
  N = e(() => {
    (n(), D());
  }),
  P = e(() => {
    (n(), h(), D(), T());
  }),
  F = e(() => {
    (h(), n(), S());
  });
function re() {
  return a(() => v.current(), []);
}
function I() {
  return a(() => v.current() === v.canvas, []);
}
var L = e(() => {
    (n(), h());
  }),
  R = e(() => {
    n();
  });
function z(e) {
  let {
    borderRadius: t,
    isMixedBorderRadius: n,
    topLeftRadius: r,
    topRightRadius: i,
    bottomRightRadius: o,
    bottomLeftRadius: s,
  } = e;
  return a(() => (n ? `${r}px ${i}px ${o}px ${s}px` : `${t}px`), [t, n, r, i, o, s]);
}
var B,
  V = e(() => {
    (n(),
      h(),
      (B = {
        borderRadius: {
          title: `Radius`,
          type: g.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      g.FusedNumber);
  }),
  H = e(() => {
    (S(), w(), T(), E(), D(), O(), k(), M(), N(), P(), F(), L(), R(), V());
  });
function U(e) {
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
function W(e) {
  return c(X, { ...U(e) });
}
function ie(e) {
  let t = _(),
    n = u(!1),
    i = u(!1),
    a = r((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: r(() => {
      let r = e.current;
      r &&
        ((r.preload = `auto`),
        !(
          r.currentTime > 0 &&
          r.onplaying &&
          !r.paused &&
          !r.ended &&
          r.readyState >= r.HAVE_CURRENT_DATA
        ) &&
          r &&
          !n.current &&
          t &&
          ((n.current = !0),
          (i.current = !0),
          r
            .play()
            .catch((e) => {})
            .finally(() => (n.current = !1))));
    }, []),
    pause: r(() => {
      !e.current || n.current || (e.current.pause(), (i.current = !1));
    }, []),
    setProgress: a,
    isPlaying: i,
  };
}
function ae({ playingProp: e, muted: t, loop: n, playsinline: r, controls: i }) {
  let [a] = o(() => e),
    [s, c] = o(!1);
  e !== a && !s && c(!0);
  let l = a && t && n && r && !i && !s,
    u;
  return ((u = l ? `on-viewport` : a ? `on-mount` : `no-autoplay`), u);
}
function G(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function K(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(G).join(` `);
}
var q,
  J,
  Y,
  X,
  Z,
  Q = e(() => {
    (d(),
      h(),
      m(),
      H(),
      n(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((q ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((J ||= {})),
      (Y = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (X = l(function (e) {
        let {
            srcType: t = `URL`,
            srcUrl: n,
            srcFile: r = ``,
            posterEnabled: o = !1,
            controls: s = !1,
            playing: l = !0,
            loop: d = !0,
            muted: m = !0,
            playsinline: h = !0,
            restartOnEnter: ee = !1,
            objectFit: g = `cover`,
            backgroundColor: _ = `rgba(0,0,0,0)`,
            radius: y = 0,
            volume: b = 25,
            startTime: x = 0,
            poster: S,
            playing: C,
            progress: w,
            onSeeked: T,
            onPause: E,
            onPlay: D,
            onEnd: O,
            onClick: k,
            onMouseEnter: A,
            onMouseLeave: M,
            onMouseDown: N,
            onMouseUp: P,
          } = e,
          F = u(),
          L = j(),
          R = u(null),
          B = u(null),
          V = I(),
          H = re(),
          U = V || H === v.export,
          W = z(e),
          G = U
            ? `no-autoplay`
            : ae({ playingProp: C, muted: m, loop: d, playsinline: h, controls: s }),
          K = U ? !0 : f(F),
          q = U ? !1 : f(F, { margin: `10%`, once: !0 }),
          J = x === 100 ? 99.9 : x,
          { play: X, pause: Z, setProgress: Q, isPlaying: $ } = ie(F);
        (i(() => {
          U || (G !== `on-viewport` && (C ? X() : Z()));
        }, [G, C]),
          i(() => {
            U || (K && C && G !== `no-autoplay` && X(), G === `on-viewport` && Z());
          }, [G, K, C]),
          i(() => {
            !V || S || o || J || !F.current || (F.current.currentTime = 0.01);
          }, [o, S, J]));
        let oe = u(!1);
        (i(() => {
          if (!oe.current) {
            oe.current = !0;
            return;
          }
          Q(((p(w) ? w.get() : (w ?? 0) * 0.01) ?? 0) || (J ?? 0) / 100);
        }, [J, r, n, w]),
          i(() => {
            if (p(w)) return w.on(`change`, (e) => Q(e));
          }, [w]),
          te(() => {
            R.current !== null && F.current && ((!B && d) || !R.current) && X();
          }),
          ne(() => {
            F.current && ((B.current = F.current.ended), (R.current = F.current.paused), Z());
          }));
        let se = a(() => {
          if (t === `URL`) return n + ``;
          if (t === `Upload`) return r + ``;
        }, [t, r, n, J]);
        return (
          i(() => {
            L && F.current && G === `on-mount` && setTimeout(() => X(), 50);
          }, []),
          i(() => {
            F.current && !m && (F.current.volume = (b ?? 0) / 100);
          }, [b]),
          c(`video`, {
            onClick: k,
            onMouseEnter: A,
            onMouseLeave: M,
            onMouseDown: N,
            onMouseUp: P,
            src: se,
            loop: d,
            ref: F,
            onSeeked: (e) => T?.(e),
            onPause: (e) => E?.(e),
            onPlay: (e) => D?.(e),
            onEnded: (e) => O?.(e),
            autoPlay: $.current || G === `on-mount` || (C && G === `on-viewport` && K),
            preload: $.current
              ? `auto`
              : U && !S
                ? `metadata`
                : G !== `on-mount` && !q
                  ? `none`
                  : `metadata`,
            poster:
              o && !r && n === Y
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : o && S
                  ? S
                  : void 0,
            onLoadedData: () => {
              let e = F.current;
              e &&
                (e.currentTime < 0.3 && J > 0 && Q((J ?? 0) * 0.01),
                ($.current || G === `on-mount` || (C && G === `on-viewport` && K)) && X());
            },
            controls: s,
            muted: U ? !0 : m,
            playsInline: h,
            style: {
              cursor: k ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: W,
              display: `block`,
              objectFit: g,
              backgroundColor: _,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (W.displayName = `Video`),
      (Z = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      ee(W, {
        srcType: {
          type: g.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: g.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: g.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: { type: g.Boolean, title: `Playing`, enabledTitle: `Yes`, disabledTitle: `No` },
        ...B,
        posterEnabled: {
          type: g.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: {
          type: g.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        backgroundColor: { type: g.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
        startTime: { title: `Start Time`, type: g.Number, min: 0, max: 100, step: 0.1, unit: `%` },
        loop: { type: g.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        objectFit: { type: g.Enum, title: `Fit`, options: Z, optionTitles: Z.map(K) },
        controls: {
          type: g.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
        },
        muted: { type: g.Boolean, title: `Muted`, enabledTitle: `Yes`, disabledTitle: `No` },
        volume: {
          type: g.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
        },
        onEnd: { type: g.EventHandler },
        onSeeked: { type: g.EventHandler },
        onPause: { type: g.EventHandler },
        onPlay: { type: g.EventHandler },
        ...x,
      }));
  });
export { z as a, x as c, B as i, b as l, Q as n, I as o, H as r, y as s, W as t };
//# sourceMappingURL=Video._bQufj64.mjs.map
