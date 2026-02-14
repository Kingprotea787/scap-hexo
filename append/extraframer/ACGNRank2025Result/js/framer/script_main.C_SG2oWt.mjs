import { t as e } from './rolldown-runtime.BRwTesTf.mjs';
import {
  B as t,
  E as n,
  F as r,
  H as i,
  I as a,
  L as o,
  N as s,
  P as c,
  R as l,
  V as u,
  _ as d,
  a as f,
  b as p,
  c as m,
  g as h,
  i as g,
  j as _,
  l as v,
  m as y,
  n as b,
  o as x,
  p as S,
  r as C,
  t as w,
  u as T,
  v as E,
  w as D,
} from './react.DPVtOLUT.mjs';
import { S as O, a as k, r as A, t as j } from './motion.BMjj-i1j.mjs';
import {
  $ as M,
  A as N,
  C as P,
  Ct as F,
  D as I,
  E as L,
  G as R,
  K as ee,
  L as z,
  R as B,
  S as te,
  St as V,
  T as H,
  Tt as U,
  U as ne,
  W as re,
  Y as ie,
  Z as ae,
  a as W,
  at as oe,
  b as se,
  bt as G,
  c as ce,
  f as le,
  ft as K,
  g as ue,
  h as de,
  i as q,
  it as fe,
  j as pe,
  l as me,
  lt as he,
  m as J,
  nt as ge,
  p as _e,
  q as ve,
  r as Y,
  rt as X,
  s as ye,
  st as be,
  tt as xe,
  v as Z,
  vt as Se,
  wt as Ce,
  yt as Q,
} from './framer.BPheaWej.mjs';
import {
  A as we,
  B as Te,
  C as Ee,
  D as De,
  E as Oe,
  G as $,
  H as ke,
  J as Ae,
  K as je,
  M as Me,
  N as Ne,
  O as Pe,
  P as Fe,
  S as Ie,
  T as Le,
  U as Re,
  V as ze,
  W as Be,
  X as Ve,
  Y as He,
  _ as Ue,
  b as We,
  d as Ge,
  f as Ke,
  g as qe,
  h as Je,
  j as Ye,
  k as Xe,
  l as Ze,
  m as Qe,
  p as $e,
  q as et,
  u as tt,
  v as nt,
  w as rt,
  x as it,
  y as at,
  z as ot,
} from './shared-lib.lUkqKhRJ.mjs';
function st(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
var ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt = e(() => {
    (t(),
      (ct = class {
        constructor() {
          ((this.isRunning = !1),
            (this.value = 0),
            (this.from = 0),
            (this.to = 0),
            (this.duration = 0),
            (this.currentTime = 0));
        }
        advance(e) {
          var t;
          if (!this.isRunning) return;
          let n = !1;
          if (this.duration && this.easing) {
            this.currentTime += e;
            let t = st(0, this.currentTime / this.duration, 1);
            n = t >= 1;
            let r = n ? 1 : this.easing(t);
            this.value = this.from + (this.to - this.from) * r;
          } else
            this.lerp
              ? ((this.value = (function (e, t, n, r) {
                  return (function (e, t, n) {
                    return (1 - n) * e + n * t;
                  })(e, t, 1 - Math.exp(-n * r));
                })(this.value, this.to, 60 * this.lerp, e)),
                Math.round(this.value) === this.to && ((this.value = this.to), (n = !0)))
              : ((this.value = this.to), (n = !0));
          (n && this.stop(), (t = this.onUpdate) == null || t.call(this, this.value, n));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(e, t, { lerp: n, duration: r, easing: i, onStart: a, onUpdate: o }) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o));
        }
      }),
      (lt = class {
        constructor({ wrapper: e, content: t, autoResize: n = !0, debounce: r = 250 } = {}) {
          ((this.width = 0),
            (this.height = 0),
            (this.scrollWidth = 0),
            (this.scrollHeight = 0),
            (this.resize = () => {
              (this.onWrapperResize(), this.onContentResize());
            }),
            (this.onWrapperResize = () => {
              this.wrapper === i
                ? ((this.width = i.innerWidth), (this.height = i.innerHeight))
                : this.wrapper instanceof HTMLElement &&
                  ((this.width = this.wrapper.clientWidth),
                  (this.height = this.wrapper.clientHeight));
            }),
            (this.onContentResize = () => {
              this.wrapper === i
                ? ((this.scrollHeight = this.content.scrollHeight),
                  (this.scrollWidth = this.content.scrollWidth))
                : this.wrapper instanceof HTMLElement &&
                  ((this.scrollHeight = this.wrapper.scrollHeight),
                  (this.scrollWidth = this.wrapper.scrollWidth));
            }),
            (this.wrapper = e),
            (this.content = t),
            n &&
              ((this.debouncedResize = (function (e, t) {
                let n;
                return function () {
                  let r = arguments,
                    i = this;
                  (clearTimeout(n),
                    (n = setTimeout(function () {
                      e.apply(i, r);
                    }, t)));
                };
              })(this.resize, r)),
              this.wrapper === i
                ? i.addEventListener(`resize`, this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        destroy() {
          var e, t;
          ((e = this.wrapperResizeObserver) == null || e.disconnect(),
            (t = this.contentResizeObserver) == null || t.disconnect(),
            i.removeEventListener(`resize`, this.debouncedResize, !1));
        }
        get limit() {
          return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
        }
      }),
      (ut = class {
        constructor() {
          this.events = {};
        }
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e](...t);
        }
        on(e, t) {
          var n;
          return (
            ((n = this.events[e]) != null && n.push(t)) || (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }),
      (dt = 100 / 6),
      (ft = class {
        constructor(e, { wheelMultiplier: t = 1, touchMultiplier: n = 1 }) {
          ((this.lastDelta = { x: 0, y: 0 }),
            (this.windowWidth = 0),
            (this.windowHeight = 0),
            (this.onTouchStart = (e) => {
              let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
              ((this.touchStart.x = t),
                (this.touchStart.y = n),
                (this.lastDelta = { x: 0, y: 0 }),
                this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
            }),
            (this.onTouchMove = (e) => {
              let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e,
                r = -(t - (this.touchStart?.x ?? 0)) * this.touchMultiplier,
                i = -(n - (this.touchStart?.y ?? 0)) * this.touchMultiplier;
              ((this.touchStart.x = t),
                (this.touchStart.y = n),
                (this.lastDelta = { x: r, y: i }),
                this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
            }),
            (this.onTouchEnd = (e) => {
              this.emitter.emit(`scroll`, {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: e,
              });
            }),
            (this.onWheel = (e) => {
              let { deltaX: t, deltaY: n, deltaMode: r } = e;
              ((t *= r === 1 ? dt : r === 2 ? this.windowWidth : 1),
                (n *= r === 1 ? dt : r === 2 ? this.windowHeight : 1),
                (t *= this.wheelMultiplier),
                (n *= this.wheelMultiplier),
                this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
            }),
            (this.onWindowResize = () => {
              ((this.windowWidth = i.innerWidth), (this.windowHeight = i.innerHeight));
            }),
            (this.element = e),
            (this.wheelMultiplier = t),
            (this.touchMultiplier = n),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new ut()),
            i.addEventListener(`resize`, this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, { passive: !1 }),
            this.element.addEventListener(`touchstart`, this.onTouchStart, { passive: !1 }),
            this.element.addEventListener(`touchmove`, this.onTouchMove, { passive: !1 }),
            this.element.addEventListener(`touchend`, this.onTouchEnd, { passive: !1 }));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            i.removeEventListener(`resize`, this.onWindowResize, !1),
            this.element.removeEventListener(`wheel`, this.onWheel),
            this.element.removeEventListener(`touchstart`, this.onTouchStart),
            this.element.removeEventListener(`touchmove`, this.onTouchMove),
            this.element.removeEventListener(`touchend`, this.onTouchEnd));
        }
      }),
      (pt = class {
        constructor({
          wrapper: e = i,
          content: t = document.documentElement,
          wheelEventsTarget: n = e,
          eventsTarget: r = n,
          smoothWheel: a = !0,
          syncTouch: o = !1,
          syncTouchLerp: s = 0.075,
          touchInertiaMultiplier: c = 35,
          duration: l,
          easing: u = (e) => Math.min(1, 1.001 - 2 ** (-10 * e)),
          lerp: d = 0.1,
          infinite: f = !1,
          orientation: p = `vertical`,
          gestureOrientation: m = `vertical`,
          touchMultiplier: h = 1,
          wheelMultiplier: g = 1,
          autoResize: _ = !0,
          prevent: v,
          virtualScroll: y,
          __experimental__naiveDimensions: b = !1,
        } = {}) {
          ((this.__isScrolling = !1),
            (this.__isStopped = !1),
            (this.__isLocked = !1),
            (this.userData = {}),
            (this.lastVelocity = 0),
            (this.velocity = 0),
            (this.direction = 0),
            (this.onPointerDown = (e) => {
              e.button === 1 && this.reset();
            }),
            (this.onVirtualScroll = (e) => {
              if (
                typeof this.options.virtualScroll == `function` &&
                !1 === this.options.virtualScroll(e)
              )
                return;
              let { deltaX: t, deltaY: n, event: r } = e;
              if (
                (this.emitter.emit(`virtual-scroll`, { deltaX: t, deltaY: n, event: r }), r.ctrlKey)
              )
                return;
              let i = r.type.includes(`touch`),
                a = r.type.includes(`wheel`);
              if (
                ((this.isTouching = r.type === `touchstart` || r.type === `touchmove`),
                this.options.syncTouch &&
                  i &&
                  r.type === `touchstart` &&
                  !this.isStopped &&
                  !this.isLocked)
              )
                return void this.reset();
              let o = t === 0 && n === 0,
                s =
                  (this.options.gestureOrientation === `vertical` && n === 0) ||
                  (this.options.gestureOrientation === `horizontal` && t === 0);
              if (o || s) return;
              let c = r.composedPath();
              c = c.slice(0, c.indexOf(this.rootElement));
              let l = this.options.prevent;
              if (
                c.find(
                  (e) =>
                    e instanceof Element &&
                    ((typeof l == `function` && l?.(e)) ||
                      e.hasAttribute?.call(e, `data-lenis-prevent`) ||
                      (i && e.hasAttribute?.call(e, `data-lenis-prevent-touch`)) ||
                      (a && e.hasAttribute?.call(e, `data-lenis-prevent-wheel`)) ||
                      (e.classList?.contains(`lenis`) && !e.classList?.contains(`lenis-stopped`)))
                )
              )
                return;
              if (this.isStopped || this.isLocked) return void r.preventDefault();
              if (!((this.options.syncTouch && i) || (this.options.smoothWheel && a)))
                return ((this.isScrolling = `native`), void this.animate.stop());
              r.preventDefault();
              let u = n;
              this.options.gestureOrientation === `both`
                ? (u = Math.abs(n) > Math.abs(t) ? n : t)
                : this.options.gestureOrientation === `horizontal` && (u = t);
              let d = i && this.options.syncTouch,
                f = i && r.type === `touchend` && Math.abs(u) > 5;
              (f && (u = this.velocity * this.options.touchInertiaMultiplier),
                this.scrollTo(
                  this.targetScroll + u,
                  Object.assign(
                    { programmatic: !1 },
                    d
                      ? { lerp: f ? this.options.syncTouchLerp : 1 }
                      : {
                          lerp: this.options.lerp,
                          duration: this.options.duration,
                          easing: this.options.easing,
                        }
                  )
                ));
            }),
            (this.onNativeScroll = () => {
              if (
                (clearTimeout(this.__resetVelocityTimeout),
                delete this.__resetVelocityTimeout,
                this.__preventNextNativeScrollEvent)
              )
                delete this.__preventNextNativeScrollEvent;
              else if (!1 === this.isScrolling || this.isScrolling === `native`) {
                let e = this.animatedScroll;
                ((this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = this.animatedScroll - e),
                  (this.direction = Math.sign(this.animatedScroll - e)),
                  (this.isScrolling = `native`),
                  this.emit(),
                  this.velocity !== 0 &&
                    (this.__resetVelocityTimeout = setTimeout(() => {
                      ((this.lastVelocity = this.velocity),
                        (this.velocity = 0),
                        (this.isScrolling = !1),
                        this.emit());
                    }, 400)));
              }
            }),
            (i.lenisVersion = `1.1.9`),
            (e && e !== document.documentElement && e !== document.body) || (e = i),
            (this.options = {
              wrapper: e,
              content: t,
              wheelEventsTarget: n,
              eventsTarget: r,
              smoothWheel: a,
              syncTouch: o,
              syncTouchLerp: s,
              touchInertiaMultiplier: c,
              duration: l,
              easing: u,
              lerp: d,
              infinite: f,
              gestureOrientation: m,
              orientation: p,
              touchMultiplier: h,
              wheelMultiplier: g,
              autoResize: _,
              prevent: v,
              virtualScroll: y,
              __experimental__naiveDimensions: b,
            }),
            (this.animate = new ct()),
            (this.emitter = new ut()),
            (this.dimensions = new lt({ wrapper: e, content: t, autoResize: _ })),
            this.updateClassName(),
            (this.userData = {}),
            (this.time = 0),
            (this.velocity = this.lastVelocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll, !1),
            this.options.wrapper.addEventListener(`pointerdown`, this.onPointerDown, !1),
            (this.virtualScroll = new ft(r, { touchMultiplier: h, wheelMultiplier: g })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll, !1),
            this.options.wrapper.removeEventListener(`pointerdown`, this.onPointerDown, !1),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName());
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        setScroll(e) {
          this.isHorizontal ? (this.rootElement.scrollLeft = e) : (this.rootElement.scrollTop = e);
        }
        resize() {
          this.dimensions.resize();
        }
        emit() {
          this.emitter.emit(`scroll`, this);
        }
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          this.isStopped && ((this.isStopped = !1), this.reset());
        }
        stop() {
          this.isStopped || ((this.isStopped = !0), this.animate.stop(), this.reset());
        }
        raf(e) {
          let t = e - (this.time || e);
          ((this.time = e), this.animate.advance(0.001 * t));
        }
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            lock: r = !1,
            duration: a = this.options.duration,
            easing: o = this.options.easing,
            lerp: s = this.options.lerp,
            onStart: c,
            onComplete: l,
            force: u = !1,
            programmatic: d = !0,
            userData: f = {},
          } = {}
        ) {
          if ((!this.isStopped && !this.isLocked) || u) {
            if (typeof e == `string` && [`top`, `left`, `start`].includes(e)) e = 0;
            else if (typeof e == `string` && [`bottom`, `right`, `end`].includes(e)) e = this.limit;
            else {
              let n;
              if (
                (typeof e == `string`
                  ? (n = document.querySelector(e))
                  : e instanceof HTMLElement && e != null && e.nodeType && (n = e),
                n)
              ) {
                if (this.options.wrapper !== i) {
                  let e = this.rootElement.getBoundingClientRect();
                  t -= this.isHorizontal ? e.left : e.top;
                }
                let r = n.getBoundingClientRect();
                e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll;
              }
            }
            if (
              typeof e == `number` &&
              ((e += t),
              (e = Math.round(e)),
              this.options.infinite
                ? d && (this.targetScroll = this.animatedScroll = this.scroll)
                : (e = st(0, e, this.limit)),
              e !== this.targetScroll)
            ) {
              if (((this.userData = f), n))
                return (
                  (this.animatedScroll = this.targetScroll = e),
                  this.setScroll(this.scroll),
                  this.reset(),
                  this.preventNextNativeScrollEvent(),
                  this.emit(),
                  l?.(this),
                  void (this.userData = {})
                );
              (d || (this.targetScroll = e),
                this.animate.fromTo(this.animatedScroll, e, {
                  duration: a,
                  easing: o,
                  lerp: s,
                  onStart: () => {
                    (r && (this.isLocked = !0), (this.isScrolling = `smooth`), c?.(this));
                  },
                  onUpdate: (e, t) => {
                    ((this.isScrolling = `smooth`),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      d && (this.targetScroll = e),
                      t || this.emit(),
                      t &&
                        (this.reset(),
                        this.emit(),
                        l?.(this),
                        (this.userData = {}),
                        this.preventNextNativeScrollEvent()));
                  },
                }));
            }
          }
        }
        preventNextNativeScrollEvent() {
          ((this.__preventNextNativeScrollEvent = !0),
            requestAnimationFrame(() => {
              delete this.__preventNextNativeScrollEvent;
            }));
        }
        get rootElement() {
          return this.options.wrapper === i ? document.documentElement : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
        }
        get scroll() {
          return this.options.infinite
            ? (function (e, t) {
                return ((e % t) + t) % t;
              })(this.animatedScroll, this.limit)
            : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(e) {
          this.__isScrolling !== e && ((this.__isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(e) {
          this.__isStopped !== e && ((this.__isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(e) {
          this.__isLocked !== e && ((this.__isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim()));
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, ``)
            .trim();
        }
      }));
  });
function ht(e) {
  let { intensity: t } = e,
    n = _(null);
  return (
    a(() => {
      if (n.current)
        try {
          n.current.scrollTo(0, { immediate: !0 });
        } catch (e) {
          console.error(`Error scrolling to top:`, e);
        }
    }, [n]),
    a(() => {
      let e = () => {
        try {
          let e = document.querySelector(`[data-frameruni-stop-scroll]`),
            t = document.documentElement,
            r = t && t.style && t.style.overflow === `hidden`;
          n.current && (e || r ? n.current.stop() : n.current.start());
        } catch (e) {
          console.error(`Error in checkForStopScroll:`, e);
        }
      };
      e();
      let t, r;
      try {
        ((t = new MutationObserver(e)),
          (r = new MutationObserver(e)),
          document &&
            document.documentElement &&
            (t.observe(document.documentElement, {
              childList: !0,
              subtree: !0,
              attributes: !0,
              attributeFilter: [`data-frameruni-stop-scroll`],
            }),
            r.observe(document.documentElement, { attributes: !0, attributeFilter: [`style`] })));
      } catch (e) {
        console.error(`Error setting up observers:`, e);
      }
      return () => {
        try {
          (t && t.disconnect(), r && r.disconnect());
        } catch (e) {
          console.error(`Error disconnecting observers:`, e);
        }
      };
    }, []),
    a(() => {
      try {
        if (!document) return;
        let e = document.getElementsByTagName(`*`);
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          if (n)
            try {
              let e = i.getComputedStyle(n);
              e &&
                e.getPropertyValue(`overflow`) === `auto` &&
                n.setAttribute(`data-lenis-prevent`, `true`);
            } catch (e) {
              console.error(`Error getting computed style:`, e);
            }
        }
      } catch (e) {
        console.error(`Error in overflow detection:`, e);
      }
    }, []),
    a(() => {
      try {
        if (typeof pt != `function`) {
          console.error(`Lenis is not available`);
          return;
        }
        n.current = new pt({ duration: (t || 10) / 10 });
        let e = (t) => {
            if (n.current)
              try {
                (n.current.raf(t), requestAnimationFrame(e));
              } catch (e) {
                console.error(`Error in animation frame:`, e);
              }
          },
          r = requestAnimationFrame(e);
        return () => {
          if ((cancelAnimationFrame(r), n.current))
            try {
              (n.current.destroy(), (n.current = null));
            } catch (e) {
              console.error(`Error destroying Lenis:`, e);
            }
        };
      } catch (e) {
        return (console.error(`Error initializing Lenis:`, e), () => {});
      }
    }, [t]),
    a(() => {
      try {
        if (!document || !n.current) return;
        let e = Array.from(document.querySelectorAll(`a[href]`) || [])
            .filter((e) => {
              if (!e) return !1;
              let t = e;
              if (!t.href) return !1;
              let n =
                  t.href.startsWith(i.location.origin) ||
                  t.href.startsWith(`./`) ||
                  t.href.startsWith(`/`),
                r = t.href.includes(`#`);
              return n && r;
            })
            .map((e) => {
              try {
                let t = e,
                  n = t.href.includes(`#`) ? `#${t.href.split(`#`).pop()}` : ``,
                  r = n ? decodeURIComponent(n) : ``,
                  a = 0;
                try {
                  if (r) {
                    let e = document.querySelector(r);
                    if (e) {
                      let t = i.getComputedStyle(e).scrollMarginTop;
                      a = (t && parseInt(t)) || 0;
                    }
                  }
                } catch (e) {
                  console.error(`Error finding target element:`, e);
                }
                return { href: n, scrollMargin: a, anchorElement: t };
              } catch (e) {
                return (console.error(`Error processing anchor:`, e), null);
              }
            })
            .filter(Boolean),
          t = (e, t, r) => {
            try {
              (e && e.preventDefault && e.preventDefault(),
                n.current && t && n.current.scrollTo(t, { offset: -(r || 0) }));
            } catch (e) {
              console.error(`Error in anchor click handler:`, e);
            }
          },
          r = e.map(
            ({ href: e, scrollMargin: n }) =>
              (r) =>
                t(r, e, n)
          );
        return (
          e.forEach(({ anchorElement: e }, t) => {
            e && r[t] && e.addEventListener(`click`, r[t]);
          }),
          () => {
            e.forEach(({ anchorElement: e }, t) => {
              e && r[t] && e.removeEventListener(`click`, r[t]);
            });
          }
        );
      } catch (e) {
        return (console.error(`Error setting up anchor links:`, e), () => {});
      }
    }, [n]),
    m(`div`, { style: e.style })
  );
}
var gt,
  _t,
  vt = e(() => {
    (t(),
      x(),
      R(),
      mt(),
      n(),
      (gt = G(
        ht,
        [
          `html.lenis { height: auto; }`,
          `.lenis.lenis-smooth { scroll-behavior: auto !important; }`,
          `.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }`,
          `.lenis.lenis-stopped { overflow: hidden; }`,
          `.lenis.lenis-scrolling iframe { pointer-events: none; }`,
        ],
        ``
      )),
      (_t = gt),
      (gt.displayName = `Smooth Scroll`),
      I(gt, {
        intensity: {
          title: `Intensity`,
          type: W.Number,
          defaultValue: 10,
          min: 0,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }),
  yt,
  bt,
  xt,
  St = e(() => {
    (R(),
      pe.loadFonts([`HelveticaNeue-Medium`]),
      (yt = [{ explicitInter: !0, fonts: [] }]),
      (bt = [
        `.framer-eqhS5 .framer-styles-preset-feeaq9:not(.rich-text-wrapper), .framer-eqhS5 .framer-styles-preset-feeaq9.rich-text-wrapper p { --framer-font-family: "HelveticaNeue-Medium", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: -0.3px; --framer-line-height: 30.6px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (xt = `framer-eqhS5`));
  });
function Ct(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var wt,
  Tt,
  Et,
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
    (x(),
      R(),
      j(),
      n(),
      je(),
      (wt = z($)),
      (Tt = [`xE4SDhndv`, `ug4FrLxJu`, `qcgWviSPW`, `ZLJzdvQ8h`, `zVM3DKXtJ`]),
      (Et = `framer-uI4me`),
      (Dt = {
        qcgWviSPW: `framer-v-1e4e34v`,
        ug4FrLxJu: `framer-v-1hspjk8`,
        xE4SDhndv: `framer-v-9tme3y`,
        ZLJzdvQ8h: `framer-v-22l3ap`,
        zVM3DKXtJ: `framer-v-19xi2gr`,
      }),
      (Ot = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (kt = ({ value: e, children: t }) => {
        let n = s(k),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(k.Provider, { value: i, children: t });
      }),
      (At = O.create(o)),
      (jt = {
        'All Active': `xE4SDhndv`,
        'Archive Active': `qcgWviSPW`,
        'Contact Active': `zVM3DKXtJ`,
        'Home Active': `ug4FrLxJu`,
        'Work Active': `ZLJzdvQ8h`,
      }),
      (Mt = ({
        _1: e,
        _2: t,
        _3: n,
        _4: r,
        height: i,
        id: a,
        link1: o,
        link2: s,
        link3: c,
        link4: l,
        newTab1: u,
        newTab2: d,
        newTab3: f,
        newTab4: p,
        width: m,
        ...h
      }) => ({
        ...h,
        DxrPeKSZi: u ?? h.DxrPeKSZi,
        Jaj0J8v2n: r ?? h.Jaj0J8v2n ?? `Contact`,
        Ki3TDRD07: l ?? h.Ki3TDRD07,
        olQrAbdLT: t ?? h.olQrAbdLT ?? `Archive, `,
        qWUpLfuiL: s ?? h.qWUpLfuiL,
        R3f3pz6dW: f ?? h.R3f3pz6dW,
        sxQGmBuKT: p ?? h.sxQGmBuKT,
        V4S60oOTR: e ?? h.V4S60oOTR ?? `Home, `,
        variant: jt[h.variant] ?? h.variant ?? `xE4SDhndv`,
        vkG_P2nP8: o ?? h.vkG_P2nP8,
        vXZKQGCTP: d ?? h.vXZKQGCTP,
        ycxJzIaoA: c ?? h.ycxJzIaoA,
        YjodoOjpE: n ?? h.YjodoOjpE ?? `Work, `,
      })),
      (Nt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Pt = G(
        d(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = p(),
            { activeLocale: a, setLocale: o } = K();
          X();
          let {
              style: s,
              className: c,
              layoutId: l,
              variant: u,
              V4S60oOTR: d,
              vkG_P2nP8: f,
              DxrPeKSZi: h,
              olQrAbdLT: g,
              qWUpLfuiL: y,
              vXZKQGCTP: b,
              YjodoOjpE: x,
              ycxJzIaoA: S,
              R3f3pz6dW: C,
              Jaj0J8v2n: w,
              Ki3TDRD07: T,
              sxQGmBuKT: E,
              ...D
            } = Mt(e),
            {
              baseVariant: k,
              classNames: j,
              clearLoadingGesture: M,
              gestureHandlers: P,
              gestureVariant: F,
              isLoading: I,
              setGestureState: L,
              setVariant: R,
              variants: ee,
            } = Q({
              cycleOrder: Tt,
              defaultVariant: `xE4SDhndv`,
              ref: r,
              variant: u,
              variantClassNames: Dt,
            }),
            z = Nt(e, ee),
            { activeVariantCallback: B, delay: te } = ge(k),
            V = B(async (...e) => {
              R(`ug4FrLxJu`);
            }),
            U = B(async (...e) => {
              R(`xE4SDhndv`);
            }),
            ne = B(async (...e) => {
              R(`qcgWviSPW`);
            }),
            re = B(async (...e) => {
              R(`ZLJzdvQ8h`);
            }),
            ie = B(async (...e) => {
              R(`zVM3DKXtJ`);
            }),
            ae = N(Et);
          return m(A, {
            id: l ?? i,
            children: m(At, {
              animate: ee,
              initial: !1,
              children: m(kt, {
                value: Ot,
                children: v(O.div, {
                  ...D,
                  ...P,
                  className: N(ae, `framer-9tme3y`, c, j),
                  'data-framer-name': `All Active`,
                  layoutDependency: z,
                  layoutId: `xE4SDhndv`,
                  ref: r,
                  style: { ...s },
                  ...Ct(
                    {
                      qcgWviSPW: { 'data-framer-name': `Archive Active` },
                      ug4FrLxJu: { 'data-framer-name': `Home Active` },
                      ZLJzdvQ8h: { 'data-framer-name': `Work Active` },
                      zVM3DKXtJ: { 'data-framer-name': `Contact Active` },
                    },
                    k,
                    F
                  ),
                  children: [
                    m(J, {
                      href: f,
                      motionChild: !0,
                      nodeId: `oyVZIU6L_`,
                      openInNewTab: h,
                      scopeId: `x9JxN9scX`,
                      children: m(O.a, {
                        className: `framer-uijz4x framer-12fazzh`,
                        'data-framer-name': `1`,
                        'data-highlight': !0,
                        layoutDependency: z,
                        layoutId: `oyVZIU6L_`,
                        onMouseEnter: V,
                        style: { opacity: 1 },
                        variants: {
                          qcgWviSPW: { opacity: 0.5 },
                          ZLJzdvQ8h: { opacity: 0.5 },
                          zVM3DKXtJ: { opacity: 0.5 },
                        },
                        ...Ct({ ug4FrLxJu: { onMouseEnter: void 0, onMouseLeave: U } }, k, F),
                        children: m(Y, {
                          children: m(H, {
                            className: `framer-mgrps-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: z,
                            layoutId: `iy8MOexI1-container`,
                            nodeId: `iy8MOexI1`,
                            rendersWithMotion: !0,
                            scopeId: `x9JxN9scX`,
                            children: m($, {
                              color: `var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153))`,
                              font: {
                                fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                fontSize: `14px`,
                                fontStyle: `normal`,
                                fontWeight: 600,
                                letterSpacing: `0px`,
                                lineHeight: `17px`,
                              },
                              height: `100%`,
                              id: `iy8MOexI1`,
                              layoutId: `iy8MOexI1`,
                              padding: `0px`,
                              reverse: !1,
                              stagger: 55,
                              tag: `p`,
                              text: d,
                              textTransform: `none`,
                              transition: {
                                delay: 0,
                                duration: 0.4,
                                ease: [0.82, 0.08, 0.29, 1],
                                type: `tween`,
                              },
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    m(J, {
                      href: y,
                      motionChild: !0,
                      nodeId: `GJ8oPRzty`,
                      openInNewTab: b,
                      scopeId: `x9JxN9scX`,
                      children: m(O.a, {
                        className: `framer-tjmgqh framer-12fazzh`,
                        'data-framer-name': `2`,
                        'data-highlight': !0,
                        layoutDependency: z,
                        layoutId: `GJ8oPRzty`,
                        onMouseEnter: ne,
                        style: { opacity: 1 },
                        variants: {
                          qcgWviSPW: { opacity: 1 },
                          ug4FrLxJu: { opacity: 0.5 },
                          ZLJzdvQ8h: { opacity: 0.5 },
                          zVM3DKXtJ: { opacity: 0.5 },
                        },
                        ...Ct({ qcgWviSPW: { onMouseEnter: void 0, onMouseLeave: U } }, k, F),
                        children: m(Y, {
                          children: m(H, {
                            className: `framer-11hl7mm-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: z,
                            layoutId: `vXda8ibcO-container`,
                            nodeId: `vXda8ibcO`,
                            rendersWithMotion: !0,
                            scopeId: `x9JxN9scX`,
                            children: m($, {
                              color: `var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153))`,
                              font: {
                                fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                fontSize: `14px`,
                                fontStyle: `normal`,
                                fontWeight: 600,
                                letterSpacing: `0px`,
                                lineHeight: `17px`,
                              },
                              height: `100%`,
                              id: `vXda8ibcO`,
                              layoutId: `vXda8ibcO`,
                              padding: `0px`,
                              reverse: !1,
                              stagger: 55,
                              tag: `p`,
                              text: g,
                              textTransform: `none`,
                              transition: {
                                delay: 0,
                                duration: 0.4,
                                ease: [0.82, 0.08, 0.29, 1],
                                type: `tween`,
                              },
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    m(J, {
                      href: S,
                      motionChild: !0,
                      nodeId: `dtd8hMloD`,
                      openInNewTab: C,
                      scopeId: `x9JxN9scX`,
                      children: m(O.a, {
                        className: `framer-1l4tx1y framer-12fazzh`,
                        'data-framer-name': `3`,
                        'data-highlight': !0,
                        layoutDependency: z,
                        layoutId: `dtd8hMloD`,
                        onMouseEnter: re,
                        style: { opacity: 1 },
                        variants: {
                          qcgWviSPW: { opacity: 0.5 },
                          ug4FrLxJu: { opacity: 0.5 },
                          ZLJzdvQ8h: { opacity: 1 },
                          zVM3DKXtJ: { opacity: 0.5 },
                        },
                        ...Ct({ ZLJzdvQ8h: { onMouseEnter: void 0, onMouseLeave: U } }, k, F),
                        children: m(Y, {
                          children: m(H, {
                            className: `framer-14ebavv-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: z,
                            layoutId: `dL6s7w7op-container`,
                            nodeId: `dL6s7w7op`,
                            rendersWithMotion: !0,
                            scopeId: `x9JxN9scX`,
                            children: m($, {
                              color: `var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153))`,
                              font: {
                                fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                fontSize: `14px`,
                                fontStyle: `normal`,
                                fontWeight: 600,
                                letterSpacing: `0px`,
                                lineHeight: `17px`,
                              },
                              height: `100%`,
                              id: `dL6s7w7op`,
                              layoutId: `dL6s7w7op`,
                              padding: `0px`,
                              reverse: !1,
                              stagger: 55,
                              tag: `p`,
                              text: x,
                              textTransform: `none`,
                              transition: {
                                delay: 0,
                                duration: 0.4,
                                ease: [0.82, 0.08, 0.29, 1],
                                type: `tween`,
                              },
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    m(J, {
                      href: T,
                      motionChild: !0,
                      nodeId: `cMQ0oNFLD`,
                      openInNewTab: E,
                      scopeId: `x9JxN9scX`,
                      children: m(O.a, {
                        className: `framer-1v4uxuf framer-12fazzh`,
                        'data-framer-name': `4`,
                        'data-highlight': !0,
                        layoutDependency: z,
                        layoutId: `cMQ0oNFLD`,
                        onMouseEnter: ie,
                        style: { opacity: 1 },
                        variants: {
                          qcgWviSPW: { opacity: 0.5 },
                          ug4FrLxJu: { opacity: 0.5 },
                          ZLJzdvQ8h: { opacity: 0.5 },
                          zVM3DKXtJ: { opacity: 1 },
                        },
                        ...Ct({ zVM3DKXtJ: { onMouseEnter: void 0, onMouseLeave: U } }, k, F),
                        children: m(Y, {
                          children: m(H, {
                            className: `framer-1bodzwk-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: z,
                            layoutId: `h2dYp1PoD-container`,
                            nodeId: `h2dYp1PoD`,
                            rendersWithMotion: !0,
                            scopeId: `x9JxN9scX`,
                            children: m($, {
                              color: `var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153))`,
                              font: {
                                fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                fontSize: `14px`,
                                fontStyle: `normal`,
                                fontWeight: 600,
                                letterSpacing: `0px`,
                                lineHeight: `17px`,
                              },
                              height: `100%`,
                              id: `h2dYp1PoD`,
                              layoutId: `h2dYp1PoD`,
                              padding: `0px`,
                              reverse: !1,
                              stagger: 55,
                              tag: `p`,
                              text: w,
                              textTransform: `none`,
                              transition: {
                                delay: 0,
                                duration: 0.4,
                                ease: [0.82, 0.08, 0.29, 1],
                                type: `tween`,
                              },
                              width: `100%`,
                            }),
                          }),
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
          `.framer-uI4me.framer-12fazzh, .framer-uI4me .framer-12fazzh { display: block; }`,
          `.framer-uI4me.framer-9tme3y { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 192px; }`,
          `.framer-uI4me .framer-uijz4x, .framer-uI4me .framer-tjmgqh, .framer-uI4me .framer-1l4tx1y, .framer-uI4me .framer-1v4uxuf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-uI4me .framer-mgrps-container, .framer-uI4me .framer-11hl7mm-container, .framer-uI4me .framer-14ebavv-container, .framer-uI4me .framer-1bodzwk-container { flex: none; height: auto; mix-blend-mode: difference; position: relative; width: auto; }`,
        ],
        `framer-uI4me`
      )),
      (Ft = Pt),
      (Pt.displayName = `Menu Links`),
      (Pt.defaultProps = { height: 17, width: 191.5 }),
      I(Pt, {
        variant: {
          options: [`xE4SDhndv`, `ug4FrLxJu`, `qcgWviSPW`, `ZLJzdvQ8h`, `zVM3DKXtJ`],
          optionTitles: [
            `All Active`,
            `Home Active`,
            `Archive Active`,
            `Work Active`,
            `Contact Active`,
          ],
          title: `Variant`,
          type: W.Enum,
        },
        V4S60oOTR: { defaultValue: `Home, `, title: `1`, type: W.String },
        vkG_P2nP8: { title: `Link 1`, type: W.Link },
        DxrPeKSZi: { defaultValue: !1, title: `New Tab 1`, type: W.Boolean },
        olQrAbdLT: { defaultValue: `Archive, `, title: `2`, type: W.String },
        qWUpLfuiL: { title: `Link 2`, type: W.Link },
        vXZKQGCTP: { defaultValue: !1, title: `New Tab 2`, type: W.Boolean },
        YjodoOjpE: { defaultValue: `Work, `, title: `3`, type: W.String },
        ycxJzIaoA: { title: `Link 3`, type: W.Link },
        R3f3pz6dW: { defaultValue: !1, title: `New Tab 3`, type: W.Boolean },
        Jaj0J8v2n: { defaultValue: `Contact`, title: `4`, type: W.String },
        Ki3TDRD07: { title: `Link 4`, type: W.Link },
        sxQGmBuKT: { defaultValue: !1, title: `New Tab 4`, type: W.Boolean },
      }),
      L(
        Pt,
        [
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
            ],
          },
          ...wt,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Lt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on = e(() => {
    (x(),
      R(),
      j(),
      n(),
      St(),
      Ve(),
      It(),
      (Rt = z(Ft)),
      (zt = F(V(O.nav))),
      (Bt = F(V(O.div))),
      (Vt = V(O.header)),
      (Ht = [`c81AFkYLs`, `xS2d0EbR9`, `jPYk09a3W`]),
      (Ut = `framer-vbd0P`),
      (Wt = {
        c81AFkYLs: `framer-v-sy2x3u`,
        jPYk09a3W: `framer-v-187cma4`,
        xS2d0EbR9: `framer-v-18uoxr8`,
      }),
      (Gt = { damping: 60, delay: 0, mass: 1, stiffness: 300, type: `spring` }),
      (Kt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -94,
      }),
      (qt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Jt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 60, delay: 4.5, mass: 1, stiffness: 300, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Yt = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -90,
      }),
      (Xt = {
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
      (Zt = {
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
      (Qt = ({ value: e, children: t }) => {
        let n = s(k),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(k.Provider, { value: i, children: t });
      }),
      ($t = O.create(o)),
      (en = { L: `c81AFkYLs`, M: `xS2d0EbR9`, S: `jPYk09a3W` }),
      (tn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: en[r.variant] ?? r.variant ?? `c81AFkYLs`,
      })),
      (nn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (rn = G(
        d(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = p(),
            { activeLocale: a, setLocale: s } = K(),
            c = X(),
            { style: l, className: u, layoutId: d, variant: f, ...h } = tn(e),
            {
              baseVariant: g,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = Q({
              cycleOrder: Ht,
              defaultVariant: `c81AFkYLs`,
              ref: r,
              variant: f,
              variantClassNames: Wt,
            }),
            D = nn(e, E),
            k = N(Ut, xt, et);
          Se();
          let j = () => ![`xS2d0EbR9`, `jPYk09a3W`].includes(g);
          return m(A, {
            id: d ?? i,
            children: m($t, {
              animate: E,
              initial: !1,
              children: m(Qt, {
                value: qt,
                children: v(Vt, {
                  ...h,
                  ...x,
                  __framer__animate: { transition: Gt },
                  __framer__animateOnce: !1,
                  __framer__scrollDirection: { direction: `down`, target: Kt },
                  __framer__styleAppearEffectEnabled: !0,
                  __framer__threshold: 0.5,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: N(k, `framer-sy2x3u`, u, y),
                  'data-framer-name': `L`,
                  layoutDependency: D,
                  layoutId: `c81AFkYLs`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                    ...l,
                  },
                  ...Lt(
                    {
                      jPYk09a3W: { 'data-framer-name': `S` },
                      xS2d0EbR9: { 'data-framer-name': `M` },
                    },
                    g,
                    S
                  ),
                  children: [
                    v(zt, {
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      animate: Jt,
                      className: `framer-17v787v`,
                      'data-framer-appear-id': `17v787v`,
                      'data-framer-name': `Nav Menu`,
                      initial: Yt,
                      layoutDependency: D,
                      layoutId: `rCMZEX1py`,
                      optimized: !0,
                      children: [
                        m(J, {
                          href: { hash: `:MHiTKHdUJ`, webPageId: `augiA20Il` },
                          motionChild: !0,
                          nodeId: `ExebtioNd`,
                          openInNewTab: !1,
                          scopeId: `BtsatMlQF`,
                          children: m(O.a, {
                            className: `framer-u3en3y framer-1v2nl5`,
                            'data-framer-name': `Logo`,
                            layoutDependency: D,
                            layoutId: `ExebtioNd`,
                            children: m(P, {
                              __fromCanvasComponent: !0,
                              children: m(o, {
                                children: m(O.p, {
                                  className: `framer-styles-preset-feeaq9`,
                                  'data-styles-preset': `DpImcAo6o`,
                                  children: `SCAP®`,
                                }),
                              }),
                              className: `framer-qur3dp`,
                              'data-framer-name': `Text`,
                              fonts: [`Inter`],
                              layoutDependency: D,
                              layoutId: `IUUX18Ezz`,
                              style: { '--framer-paragraph-spacing': `0px` },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        v(O.div, {
                          className: `framer-79zklx`,
                          'data-framer-name': `Items`,
                          layoutDependency: D,
                          layoutId: `wfHYfXt3J`,
                          children: [
                            v(O.div, {
                              className: `framer-ok1jlb`,
                              'data-framer-name': `Menu`,
                              layoutDependency: D,
                              layoutId: `NHODl1ZfL`,
                              children: [
                                m(P, {
                                  __fromCanvasComponent: !0,
                                  children: m(o, {
                                    children: m(O.p, {
                                      className: `framer-styles-preset-8vm16z`,
                                      'data-styles-preset': `uDh9bONtj`,
                                      children: `SCAP Links`,
                                    }),
                                  }),
                                  className: `framer-1dg004d`,
                                  'data-framer-name': `Heading`,
                                  fonts: [`Inter`],
                                  layoutDependency: D,
                                  layoutId: `hO6fnVas2`,
                                  style: { '--framer-paragraph-spacing': `0px` },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                m(te, {
                                  links: [
                                    {
                                      href: { webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `VjvTIQXE3` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `TMUEGlXDC` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Yb_WXsK4v` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `VjvTIQXE3` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `TMUEGlXDC` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Yb_WXsK4v` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `VjvTIQXE3` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `TMUEGlXDC` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Yb_WXsK4v` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    m(Y, {
                                      height: 17,
                                      width: `300px`,
                                      y:
                                        (c?.y || 0) +
                                        0 +
                                        (((c?.height || 90) - 0 - 90) / 2 + 0 + 0) +
                                        26 +
                                        0 +
                                        0 +
                                        20,
                                      ...Lt(
                                        {
                                          jPYk09a3W: {
                                            y:
                                              (c?.y || 0) +
                                              0 +
                                              (((c?.height || 200) - 0 - 90) / 2 + 0 + 0) +
                                              26 +
                                              0 +
                                              0 +
                                              20,
                                          },
                                        },
                                        g,
                                        S
                                      ),
                                      children: m(H, {
                                        className: `framer-xdnjn9-container`,
                                        layoutDependency: D,
                                        layoutId: `M4AOuAsWQ-container`,
                                        nodeId: `M4AOuAsWQ`,
                                        rendersWithMotion: !0,
                                        scopeId: `BtsatMlQF`,
                                        children: m(Ft, {
                                          DxrPeKSZi: !1,
                                          height: `100%`,
                                          id: `M4AOuAsWQ`,
                                          Jaj0J8v2n: `Contact`,
                                          Ki3TDRD07: e[3],
                                          layoutId: `M4AOuAsWQ`,
                                          olQrAbdLT: `Gallery, `,
                                          qWUpLfuiL: e[1],
                                          R3f3pz6dW: !1,
                                          style: { width: `100%` },
                                          sxQGmBuKT: !1,
                                          V4S60oOTR: `Home, `,
                                          variant: `xE4SDhndv`,
                                          vkG_P2nP8: e[0],
                                          vXZKQGCTP: !1,
                                          width: `100%`,
                                          ycxJzIaoA: e[2],
                                          YjodoOjpE: `Work, `,
                                          ...Lt(
                                            {
                                              jPYk09a3W: {
                                                Ki3TDRD07: e[11],
                                                qWUpLfuiL: e[9],
                                                vkG_P2nP8: e[8],
                                                ycxJzIaoA: e[10],
                                              },
                                              xS2d0EbR9: {
                                                Ki3TDRD07: e[7],
                                                qWUpLfuiL: e[5],
                                                vkG_P2nP8: e[4],
                                                ycxJzIaoA: e[6],
                                              },
                                            },
                                            g,
                                            S
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                            j() &&
                              v(O.div, {
                                className: `framer-1jkd2rj`,
                                'data-framer-name': `Info`,
                                layoutDependency: D,
                                layoutId: `BQMubodhY`,
                                children: [
                                  m(P, {
                                    __fromCanvasComponent: !0,
                                    children: m(o, {
                                      children: m(O.p, {
                                        className: `framer-styles-preset-8vm16z`,
                                        'data-styles-preset': `uDh9bONtj`,
                                        children: `Based in SUSTC 深圳`,
                                      }),
                                    }),
                                    className: `framer-1k7jery`,
                                    'data-framer-name': `Location`,
                                    fonts: [`Inter`],
                                    layoutDependency: D,
                                    layoutId: `hRUyJ5Ofz`,
                                    style: { '--framer-paragraph-spacing': `0px` },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  m(P, {
                                    __fromCanvasComponent: !0,
                                    children: m(o, {
                                      children: m(O.p, {
                                        className: `framer-styles-preset-8vm16z`,
                                        'data-styles-preset': `uDh9bONtj`,
                                        style: {
                                          '--framer-text-color': `var(--extracted-r6o4lv, var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153)))`,
                                        },
                                        children: `Art Director + ACGN Developer`,
                                      }),
                                    }),
                                    className: `framer-113bfs`,
                                    'data-framer-name': `Date`,
                                    fonts: [`Inter`],
                                    layoutDependency: D,
                                    layoutId: `c78rp82A7`,
                                    style: {
                                      '--extracted-r6o4lv': `var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153))`,
                                      '--framer-paragraph-spacing': `0px`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    m(Bt, {
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      animate: Xt,
                      className: `framer-1nghd2e`,
                      'data-framer-appear-id': `1nghd2e`,
                      'data-framer-name': `Line`,
                      initial: Zt,
                      layoutDependency: D,
                      layoutId: `UNjMDOmF6`,
                      optimized: !0,
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
          `.framer-vbd0P.framer-1v2nl5, .framer-vbd0P .framer-1v2nl5 { display: block; }`,
          `.framer-vbd0P.framer-sy2x3u { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-vbd0P .framer-17v787v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 26px 140px 26px 24px; position: relative; width: 100%; }`,
          `.framer-vbd0P .framer-u3en3y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-vbd0P .framer-qur3dp { flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: auto; }`,
          `.framer-vbd0P .framer-79zklx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 270px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-vbd0P .framer-ok1jlb, .framer-vbd0P .framer-1jkd2rj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: center; max-width: 300px; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-vbd0P .framer-1dg004d, .framer-vbd0P .framer-1k7jery, .framer-vbd0P .framer-113bfs { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-vbd0P .framer-xdnjn9-container { align-self: stretch; flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-vbd0P .framer-1nghd2e { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }`,
          `.framer-vbd0P.framer-v-18uoxr8.framer-sy2x3u { width: 810px; }`,
          `.framer-vbd0P.framer-v-187cma4.framer-sy2x3u { width: 390px; }`,
          `.framer-vbd0P.framer-v-187cma4 .framer-17v787v { padding: 26px 24px 26px 24px; }`,
          ...bt,
          ...Ae,
        ],
        `framer-vbd0P`
      )),
      (an = rn),
      (rn.displayName = `Primary Navigation Bar`),
      (rn.defaultProps = { height: 90, width: 1200 }),
      I(rn, {
        variant: {
          options: [`c81AFkYLs`, `xS2d0EbR9`, `jPYk09a3W`],
          optionTitles: [`L`, `M`, `S`],
          title: `Variant`,
          type: W.Enum,
        },
      }),
      L(
        rn,
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
          ...Rt,
          ...B(yt),
          ...B(He),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn = e(() => {
    (x(),
      R(),
      j(),
      n(),
      (sn = `framer-j0tw1`),
      (cn = { V6dS2fAGT: `framer-v-1rilhv6` }),
      (ln = { damping: 40, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (un = ({ value: e, children: t }) => {
        let n = s(k),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(k.Provider, { value: i, children: t });
      }),
      (dn = O.create(o)),
      (fn = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (pn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (mn = G(
        d(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = p(),
            { activeLocale: a, setLocale: o } = K();
          X();
          let { style: s, className: c, layoutId: l, variant: u, ...d } = fn(e),
            {
              baseVariant: f,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: b,
              setGestureState: x,
              setVariant: S,
              variants: C,
            } = Q({ defaultVariant: `V6dS2fAGT`, ref: r, variant: u, variantClassNames: cn }),
            w = pn(e, C),
            { activeVariantCallback: T, delay: E } = ge(f),
            D = T(async (...e) => {
              (x({ isPressed: !1 }), S(`V6dS2fAGT`));
            }),
            k = N(sn);
          return m(A, {
            id: l ?? i,
            children: m(dn, {
              animate: C,
              initial: !1,
              children: m(un, {
                value: ln,
                children: m(J, {
                  href: `https://framer.link/19KZOSh`,
                  motionChild: !0,
                  nodeId: `V6dS2fAGT`,
                  openInNewTab: !0,
                  scopeId: `CLcUgIu3c`,
                  children: m(O.a, {
                    ...d,
                    ...v,
                    className: `${N(k, `framer-1rilhv6`, c, h)} framer-18i2ezf`,
                    'data-framer-name': `Primary`,
                    'data-highlight': !0,
                    layoutDependency: w,
                    layoutId: `V6dS2fAGT`,
                    onTap: D,
                    ref: r,
                    style: {
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      boxShadow: `0px 4px 6px 0px rgba(0, 0, 0, 0.25)`,
                      ...s,
                    },
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-j0tw1.framer-18i2ezf, .framer-j0tw1 .framer-18i2ezf { display: block; }`,
          `.framer-j0tw1.framer-1rilhv6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 142px; will-change: var(--framer-will-change-override, transform); }`,
        ],
        `framer-j0tw1`
      )),
      (hn = mn),
      (mn.displayName = `Get Template Button`),
      (mn.defaultProps = { height: 40, width: 142 }),
      L(mn, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function _n(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln = e(() => {
    (x(),
      R(),
      j(),
      n(),
      Te(),
      Ve(),
      Fe(),
      Me(),
      we(),
      It(),
      Pe(),
      (vn = z(De)),
      (yn = z(Ye)),
      (bn = z(ot)),
      (xn = z(Ne)),
      (Sn = z(Xe)),
      (Cn = z(Ft)),
      (wn = V(P)),
      (Tn = [`er_eF3Aj4`, `BVgGRXO1i`, `fol9xHtCS`, `F1PWQk2Ec`]),
      (En = `framer-B5N7f`),
      (Dn = {
        BVgGRXO1i: `framer-v-1f5qd2t`,
        er_eF3Aj4: `framer-v-142vb5r`,
        F1PWQk2Ec: `framer-v-1mc2d1k`,
        fol9xHtCS: `framer-v-11nqrhj`,
      }),
      (On = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (kn = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (An = ({ value: e, children: t }) => {
        let n = s(k),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(k.Provider, { value: i, children: t });
      }),
      (jn = O.create(o)),
      (Mn = { L: `BVgGRXO1i`, M: `fol9xHtCS`, S: `F1PWQk2Ec`, XL: `er_eF3Aj4` }),
      (Nn = ({
        footerButtonLink: e,
        footerButtonText: t,
        height: n,
        id: r,
        newTab: i,
        smoothScroll: a,
        width: o,
        ...s
      }) => ({
        ...s,
        OwSWNpHNf: e ?? s.OwSWNpHNf,
        RWfjd3mjg: i ?? s.RWfjd3mjg,
        variant: Mn[s.variant] ?? s.variant ?? `er_eF3Aj4`,
        VShZDQ_S6: a ?? s.VShZDQ_S6,
        xqvBbSQlQ: t ?? s.xqvBbSQlQ ?? `Back To Top`,
      })),
      (Pn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Fn = G(
        d(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = p(),
            { activeLocale: a, setLocale: s } = K(),
            c = X(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              xqvBbSQlQ: h,
              OwSWNpHNf: g,
              VShZDQ_S6: y,
              RWfjd3mjg: b,
              ...x
            } = Nn(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: D,
              setGestureState: k,
              setVariant: j,
              variants: M,
            } = Q({
              cycleOrder: Tn,
              defaultVariant: `er_eF3Aj4`,
              ref: r,
              variant: f,
              variantClassNames: Dn,
            }),
            F = Pn(e, M),
            I = N(En, et);
          return (
            Se(),
            m(A, {
              id: d ?? i,
              children: m(jn, {
                animate: M,
                initial: !1,
                children: m(An, {
                  value: On,
                  children: v(O.footer, {
                    ...x,
                    ...T,
                    className: N(I, `framer-142vb5r`, u, C),
                    'data-framer-name': `XL`,
                    layoutDependency: F,
                    layoutId: `er_eF3Aj4`,
                    ref: r,
                    style: {
                      backgroundColor: `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                      ...l,
                    },
                    ..._n(
                      {
                        BVgGRXO1i: { 'data-framer-name': `L` },
                        F1PWQk2Ec: { 'data-framer-name': `S` },
                        fol9xHtCS: { 'data-framer-name': `M` },
                      },
                      S,
                      E
                    ),
                    children: [
                      m(Y, {
                        height: 24,
                        width: c?.width || `100vw`,
                        children: m(H, {
                          className: `framer-drotkq-container`,
                          layoutDependency: F,
                          layoutId: `aXPuz0Muo-container`,
                          nodeId: `aXPuz0Muo`,
                          rendersWithMotion: !0,
                          scopeId: `l9HS3KS2Q`,
                          children: m(De, {
                            height: `100%`,
                            Hq7BZwPem: `(WDX® — 12)`,
                            id: `aXPuz0Muo`,
                            layoutId: `aXPuz0Muo`,
                            NHubkDs7R: `Studio Wrap`,
                            pWoyTVtQ4: `© Final Section クロージング`,
                            style: { width: `100%` },
                            variant: `XFF72MIUC`,
                            width: `100%`,
                            ..._n(
                              {
                                F1PWQk2Ec: { variant: `CmSf9J7E0` },
                                fol9xHtCS: { variant: `kQZZjN_Db` },
                              },
                              S,
                              E
                            ),
                          }),
                        }),
                      }),
                      v(O.div, {
                        className: `framer-1ktrnok`,
                        'data-framer-name': `Top`,
                        layoutDependency: F,
                        layoutId: `V77q9rTej`,
                        children: [
                          m(Y, {
                            children: m(H, {
                              className: `framer-16z4bvg-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              layoutDependency: F,
                              layoutId: `C_m_EBdpU-container`,
                              nodeId: `C_m_EBdpU`,
                              rendersWithMotion: !0,
                              scopeId: `l9HS3KS2Q`,
                              children: m(ot, {
                                alignment: `flex-start`,
                                direction: `left`,
                                fadeOptions: {
                                  fadeAlpha: 0,
                                  fadeContent: !1,
                                  fadeInset: 0,
                                  fadeWidth: 25,
                                  overflow: !1,
                                },
                                gap: 10,
                                height: `100%`,
                                hoverFactor: 1,
                                id: `C_m_EBdpU`,
                                layoutId: `C_m_EBdpU`,
                                padding: 10,
                                paddingBottom: 10,
                                paddingLeft: 10,
                                paddingPerSide: !1,
                                paddingRight: 10,
                                paddingTop: 10,
                                sizingOptions: { heightType: !0, widthType: !0 },
                                slots: [
                                  m(Y, {
                                    height: 193,
                                    width: `132px`,
                                    children: m(H, {
                                      className: `framer-6ryda7-container`,
                                      inComponentSlot: !0,
                                      layoutDependency: F,
                                      layoutId: `DvBcVYzlF-container`,
                                      nodeId: `DvBcVYzlF`,
                                      rendersWithMotion: !0,
                                      scopeId: `l9HS3KS2Q`,
                                      children: m(Ye, {
                                        height: `100%`,
                                        i7pN4vRMh: kn(
                                          {
                                            pixelHeight: 1520,
                                            pixelWidth: 784,
                                            src: `https://framerusercontent.com/images/paXKCIXQ8y7O5Ou6v3z5dUUUJaQ.png?width=784&height=1520`,
                                            srcSet: `https://framerusercontent.com/images/paXKCIXQ8y7O5Ou6v3z5dUUUJaQ.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/paXKCIXQ8y7O5Ou6v3z5dUUUJaQ.png?width=784&height=1520 784w`,
                                          },
                                          ``
                                        ),
                                        id: `DvBcVYzlF`,
                                        layoutId: `DvBcVYzlF`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  m(Y, {
                                    height: 110,
                                    width: `154px`,
                                    children: m(H, {
                                      className: `framer-19fo8pi-container`,
                                      inComponentSlot: !0,
                                      layoutDependency: F,
                                      layoutId: `cnEyhQ1WK-container`,
                                      nodeId: `cnEyhQ1WK`,
                                      rendersWithMotion: !0,
                                      scopeId: `l9HS3KS2Q`,
                                      children: m(Ye, {
                                        height: `100%`,
                                        i7pN4vRMh: kn(
                                          {
                                            pixelHeight: 1520,
                                            pixelWidth: 784,
                                            src: `https://framerusercontent.com/images/M3nohCYIUUQ9CUpGOQO4l1MnE.png?width=784&height=1520`,
                                            srcSet: `https://framerusercontent.com/images/M3nohCYIUUQ9CUpGOQO4l1MnE.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/M3nohCYIUUQ9CUpGOQO4l1MnE.png?width=784&height=1520 784w`,
                                          },
                                          ``
                                        ),
                                        id: `cnEyhQ1WK`,
                                        layoutId: `cnEyhQ1WK`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  m(Y, {
                                    height: 193,
                                    width: `150px`,
                                    children: m(H, {
                                      className: `framer-1k22hqw-container`,
                                      inComponentSlot: !0,
                                      layoutDependency: F,
                                      layoutId: `DkRDn9gZ9-container`,
                                      nodeId: `DkRDn9gZ9`,
                                      rendersWithMotion: !0,
                                      scopeId: `l9HS3KS2Q`,
                                      children: m(Ye, {
                                        height: `100%`,
                                        i7pN4vRMh: kn(
                                          {
                                            pixelHeight: 1520,
                                            pixelWidth: 784,
                                            src: `https://framerusercontent.com/images/kjJHmd4jz78zEp33F5CELukTELs.png?width=784&height=1520`,
                                            srcSet: `https://framerusercontent.com/images/kjJHmd4jz78zEp33F5CELukTELs.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/kjJHmd4jz78zEp33F5CELukTELs.png?width=784&height=1520 784w`,
                                          },
                                          `Black Man`
                                        ),
                                        id: `DkRDn9gZ9`,
                                        layoutId: `DkRDn9gZ9`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  m(Y, {
                                    height: 245,
                                    width: `165px`,
                                    children: m(H, {
                                      className: `framer-1qyu2tm-container`,
                                      inComponentSlot: !0,
                                      layoutDependency: F,
                                      layoutId: `jjvhxHJdK-container`,
                                      nodeId: `jjvhxHJdK`,
                                      rendersWithMotion: !0,
                                      scopeId: `l9HS3KS2Q`,
                                      children: m(Ye, {
                                        height: `100%`,
                                        i7pN4vRMh: kn(
                                          {
                                            pixelHeight: 1520,
                                            pixelWidth: 784,
                                            src: `https://framerusercontent.com/images/sXuf9q286mGncWpYoF5X150b4fs.png?width=784&height=1520`,
                                            srcSet: `https://framerusercontent.com/images/sXuf9q286mGncWpYoF5X150b4fs.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/sXuf9q286mGncWpYoF5X150b4fs.png?width=784&height=1520 784w`,
                                          },
                                          `Woman Side Pose`
                                        ),
                                        id: `jjvhxHJdK`,
                                        layoutId: `jjvhxHJdK`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  m(Y, {
                                    height: 110,
                                    width: `154px`,
                                    children: m(H, {
                                      className: `framer-1cgexat-container`,
                                      inComponentSlot: !0,
                                      layoutDependency: F,
                                      layoutId: `L0u5hNjOl-container`,
                                      nodeId: `L0u5hNjOl`,
                                      rendersWithMotion: !0,
                                      scopeId: `l9HS3KS2Q`,
                                      children: m(Ye, {
                                        height: `100%`,
                                        i7pN4vRMh: kn(
                                          {
                                            pixelHeight: 1520,
                                            pixelWidth: 784,
                                            src: `https://framerusercontent.com/images/7NvvLt2O39LDz6rTnIs7RyjuY8.png?width=784&height=1520`,
                                            srcSet: `https://framerusercontent.com/images/7NvvLt2O39LDz6rTnIs7RyjuY8.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/7NvvLt2O39LDz6rTnIs7RyjuY8.png?width=784&height=1520 784w`,
                                          },
                                          `Woman Glasses`
                                        ),
                                        id: `L0u5hNjOl`,
                                        layoutId: `L0u5hNjOl`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  m(Y, {
                                    height: 193,
                                    width: `132px`,
                                    children: m(H, {
                                      className: `framer-1o0hif3-container`,
                                      inComponentSlot: !0,
                                      layoutDependency: F,
                                      layoutId: `AL13LhQ1U-container`,
                                      nodeId: `AL13LhQ1U`,
                                      rendersWithMotion: !0,
                                      scopeId: `l9HS3KS2Q`,
                                      children: m(Ye, {
                                        height: `100%`,
                                        i7pN4vRMh: kn(
                                          {
                                            pixelHeight: 1520,
                                            pixelWidth: 784,
                                            src: `https://framerusercontent.com/images/4KldRAyLujfmhw8TTovABA4UuIE.png?width=784&height=1520`,
                                            srcSet: `https://framerusercontent.com/images/4KldRAyLujfmhw8TTovABA4UuIE.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/4KldRAyLujfmhw8TTovABA4UuIE.png?width=784&height=1520 784w`,
                                          },
                                          `Woman`
                                        ),
                                        id: `AL13LhQ1U`,
                                        layoutId: `AL13LhQ1U`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  m(Y, {
                                    height: 136,
                                    width: `190px`,
                                    children: m(H, {
                                      className: `framer-dis1bv-container`,
                                      inComponentSlot: !0,
                                      layoutDependency: F,
                                      layoutId: `uHmoHm9bl-container`,
                                      nodeId: `uHmoHm9bl`,
                                      rendersWithMotion: !0,
                                      scopeId: `l9HS3KS2Q`,
                                      children: m(Ye, {
                                        height: `100%`,
                                        i7pN4vRMh: kn(
                                          {
                                            pixelHeight: 1520,
                                            pixelWidth: 784,
                                            src: `https://framerusercontent.com/images/JsWzvJ7arIK8bTRExshNOjA0.png?width=784&height=1520`,
                                            srcSet: `https://framerusercontent.com/images/JsWzvJ7arIK8bTRExshNOjA0.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/JsWzvJ7arIK8bTRExshNOjA0.png?width=784&height=1520 784w`,
                                          },
                                          `Woman`
                                        ),
                                        id: `uHmoHm9bl`,
                                        layoutId: `uHmoHm9bl`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  m(Y, {
                                    height: 193,
                                    width: `190px`,
                                    children: m(H, {
                                      className: `framer-1ve9vkr-container`,
                                      inComponentSlot: !0,
                                      layoutDependency: F,
                                      layoutId: `T3mwQ3y2C-container`,
                                      nodeId: `T3mwQ3y2C`,
                                      rendersWithMotion: !0,
                                      scopeId: `l9HS3KS2Q`,
                                      children: m(Ye, {
                                        height: `100%`,
                                        i7pN4vRMh: kn(
                                          {
                                            pixelHeight: 1520,
                                            pixelWidth: 784,
                                            src: `https://framerusercontent.com/images/TSvdWY9nZgJIwvfEjbER8khWks.png?width=784&height=1520`,
                                            srcSet: `https://framerusercontent.com/images/TSvdWY9nZgJIwvfEjbER8khWks.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/TSvdWY9nZgJIwvfEjbER8khWks.png?width=784&height=1520 784w`,
                                          },
                                          `Woman Sit On The Floor`
                                        ),
                                        id: `T3mwQ3y2C`,
                                        layoutId: `T3mwQ3y2C`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                ],
                                speed: 40,
                                style: { height: `100%`, width: `100%` },
                                width: `100%`,
                              }),
                            }),
                          }),
                          m(Y, {
                            height: 24,
                            width: c?.width || `100vw`,
                            children: m(H, {
                              className: `framer-l8q6i6-container`,
                              layoutDependency: F,
                              layoutId: `tF5yirdyl-container`,
                              nodeId: `tF5yirdyl`,
                              rendersWithMotion: !0,
                              scopeId: `l9HS3KS2Q`,
                              children: m(Ne, {
                                F9s7G6Ce8: `Overview`,
                                height: `100%`,
                                id: `tF5yirdyl`,
                                layoutId: `tF5yirdyl`,
                                rpGEGECg1: `Focused`,
                                Ssp7h9ebx: `Independent`,
                                style: { width: `100%` },
                                variant: `SJFvvEqmc`,
                                width: `100%`,
                                xxFoBYQ6z: `Multidisciplinary`,
                              }),
                            }),
                          }),
                          v(O.div, {
                            className: `framer-15d2be5`,
                            'data-framer-name': `Content`,
                            layoutDependency: F,
                            layoutId: `W53xNs4WS`,
                            children: [
                              m(P, {
                                __fromCanvasComponent: !0,
                                children: m(o, {
                                  children: m(O.p, {
                                    className: `framer-styles-preset-8vm16z`,
                                    'data-styles-preset': `uDh9bONtj`,
                                    style: { '--framer-text-alignment': `center` },
                                    children: `I build expressive, performance-driven websites by blending clean design and native development inside Framer to help creative teams and modern brands stand out with intention.`,
                                  }),
                                }),
                                className: `framer-1wyxtpc`,
                                'data-framer-name': `Text`,
                                fonts: [`Inter`],
                                layoutDependency: F,
                                layoutId: `x1BFU4RFu`,
                                style: { '--framer-paragraph-spacing': `0px` },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              m(Y, {
                                height: 44,
                                children: m(H, {
                                  className: `framer-1tx43ga-container`,
                                  layoutDependency: F,
                                  layoutId: `fedHWFwA9-container`,
                                  nodeId: `fedHWFwA9`,
                                  rendersWithMotion: !0,
                                  scopeId: `l9HS3KS2Q`,
                                  children: m(Xe, {
                                    CSyo3aTPk: b,
                                    Gh9QOfeLM: h,
                                    height: `100%`,
                                    id: `fedHWFwA9`,
                                    JQPbxOZrF: g,
                                    layoutId: `fedHWFwA9`,
                                    variant: `iJrMk7HF5`,
                                    vZZm_o9LA: y,
                                    width: `100%`,
                                    ..._n({ F1PWQk2Ec: { variant: `TM6f2ytrb` } }, S, E),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      v(O.div, {
                        className: `framer-ic9f1x`,
                        'data-framer-name': `Bottom`,
                        layoutDependency: F,
                        layoutId: `vQnlcs_xu`,
                        children: [
                          v(O.div, {
                            className: `framer-oz2owl`,
                            'data-framer-name': `Navigation`,
                            layoutDependency: F,
                            layoutId: `tguzJM22v`,
                            children: [
                              m(O.div, {
                                className: `framer-ugtqxm`,
                                'data-framer-name': `Nav Menu`,
                                layoutDependency: F,
                                layoutId: `tguzJM22vrCMZEX1py`,
                                children: v(O.div, {
                                  className: `framer-nb884n`,
                                  'data-framer-name': `Items`,
                                  layoutDependency: F,
                                  layoutId: `tguzJM22vwfHYfXt3J`,
                                  children: [
                                    v(O.div, {
                                      className: `framer-1jtsqst`,
                                      'data-framer-name': `Menu Links`,
                                      layoutDependency: F,
                                      layoutId: `PDJvl6NBv`,
                                      children: [
                                        m(P, {
                                          __fromCanvasComponent: !0,
                                          children: m(o, {
                                            children: m(O.p, {
                                              className: `framer-styles-preset-8vm16z`,
                                              'data-styles-preset': `uDh9bONtj`,
                                              children: `Quick Links`,
                                            }),
                                          }),
                                          className: `framer-1vxsgyu`,
                                          'data-framer-name': `Heading`,
                                          fonts: [`Inter`],
                                          layoutDependency: F,
                                          layoutId: `FbxTf1PTC`,
                                          style: { '--framer-paragraph-spacing': `0px` },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        m(te, {
                                          links: [
                                            {
                                              href: { webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `VjvTIQXE3` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `TMUEGlXDC` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `Yb_WXsK4v` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `VjvTIQXE3` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `TMUEGlXDC` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `Yb_WXsK4v` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `VjvTIQXE3` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `TMUEGlXDC` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `Yb_WXsK4v` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `VjvTIQXE3` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `TMUEGlXDC` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `Yb_WXsK4v` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            m(Y, {
                                              height: 17,
                                              width: `300px`,
                                              children: m(H, {
                                                className: `framer-18jhjwi-container`,
                                                layoutDependency: F,
                                                layoutId: `BSI5KoAL1-container`,
                                                nodeId: `BSI5KoAL1`,
                                                rendersWithMotion: !0,
                                                scopeId: `l9HS3KS2Q`,
                                                children: m(Ft, {
                                                  DxrPeKSZi: !1,
                                                  height: `100%`,
                                                  id: `BSI5KoAL1`,
                                                  Jaj0J8v2n: `Contact`,
                                                  Ki3TDRD07: e[3],
                                                  layoutId: `BSI5KoAL1`,
                                                  olQrAbdLT: `Gallery, `,
                                                  qWUpLfuiL: e[1],
                                                  R3f3pz6dW: !1,
                                                  style: { width: `100%` },
                                                  sxQGmBuKT: !1,
                                                  V4S60oOTR: `Home, `,
                                                  variant: `xE4SDhndv`,
                                                  vkG_P2nP8: e[0],
                                                  vXZKQGCTP: !1,
                                                  width: `100%`,
                                                  ycxJzIaoA: e[2],
                                                  YjodoOjpE: `Work, `,
                                                  ..._n(
                                                    {
                                                      BVgGRXO1i: {
                                                        Ki3TDRD07: e[7],
                                                        qWUpLfuiL: e[5],
                                                        vkG_P2nP8: e[4],
                                                        ycxJzIaoA: e[6],
                                                      },
                                                      F1PWQk2Ec: {
                                                        Ki3TDRD07: e[15],
                                                        qWUpLfuiL: e[13],
                                                        vkG_P2nP8: e[12],
                                                        ycxJzIaoA: e[14],
                                                      },
                                                      fol9xHtCS: {
                                                        Ki3TDRD07: e[11],
                                                        qWUpLfuiL: e[9],
                                                        vkG_P2nP8: e[8],
                                                        ycxJzIaoA: e[10],
                                                      },
                                                    },
                                                    S,
                                                    E
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                    v(O.div, {
                                      className: `framer-1dvhdhe`,
                                      'data-framer-name': `Social Links`,
                                      layoutDependency: F,
                                      layoutId: `wAmkcTqKs`,
                                      children: [
                                        m(P, {
                                          __fromCanvasComponent: !0,
                                          children: m(o, {
                                            children: m(O.p, {
                                              className: `framer-styles-preset-8vm16z`,
                                              'data-styles-preset': `uDh9bONtj`,
                                              children: `Networks`,
                                            }),
                                          }),
                                          className: `framer-vlehe`,
                                          'data-framer-name': `Heading`,
                                          fonts: [`Inter`],
                                          layoutDependency: F,
                                          layoutId: `i6pFoyVxh`,
                                          style: { '--framer-paragraph-spacing': `0px` },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        m(Y, {
                                          height: 17,
                                          width: `300px`,
                                          children: m(H, {
                                            className: `framer-1kzzr6r-container`,
                                            layoutDependency: F,
                                            layoutId: `V6qfwtJ9b-container`,
                                            nodeId: `V6qfwtJ9b`,
                                            rendersWithMotion: !0,
                                            scopeId: `l9HS3KS2Q`,
                                            children: m(Ft, {
                                              DxrPeKSZi: !0,
                                              height: `100%`,
                                              id: `V6qfwtJ9b`,
                                              Jaj0J8v2n: `Twitter`,
                                              Ki3TDRD07: `https://x.com/MandroDesign`,
                                              layoutId: `V6qfwtJ9b`,
                                              olQrAbdLT: `Dribbble, `,
                                              qWUpLfuiL: `https://dribbble.com/`,
                                              R3f3pz6dW: !0,
                                              style: { width: `100%` },
                                              sxQGmBuKT: !0,
                                              V4S60oOTR: `Instagram, `,
                                              variant: `xE4SDhndv`,
                                              vkG_P2nP8: `https://www.instagram.com/`,
                                              vXZKQGCTP: !0,
                                              width: `100%`,
                                              ycxJzIaoA: `https://www.framer.com/`,
                                              YjodoOjpE: `Framer, `,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              m(O.div, {
                                className: `framer-118gr46`,
                                'data-framer-name': `Line`,
                                layoutDependency: F,
                                layoutId: `tguzJM22vUNjMDOmF6`,
                                style: {
                                  backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`,
                                },
                              }),
                            ],
                          }),
                          m(O.div, {
                            className: `framer-1vdw828`,
                            'data-framer-name': `Title`,
                            layoutDependency: F,
                            layoutId: `heLze1wPQ`,
                            children: m(wn, {
                              __framer__spring: {
                                damping: 60,
                                delay: 0,
                                duration: 0.3,
                                ease: [0.44, 0, 0.56, 1],
                                mass: 1,
                                stiffness: 400,
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
                                    y: 200,
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
                              children: m(o, {
                                children: m(O.p, {
                                  style: {
                                    '--font-selector': `RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk`,
                                    '--framer-font-family': `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                    '--framer-font-open-type-features': `'ss01' on, 'ss02' on, 'ss07' on, 'cv01' on, 'cv09' on, 'cv02' on, 'cv03' on, 'cv04' on, 'cv12' on, 'cv10' on, 'cv08' on, 'cv05' on, 'cv07' on, 'cv13' on, 'cv06' on`,
                                    '--framer-font-size': `454.10227715186204px`,
                                    '--framer-font-weight': `600`,
                                    '--framer-letter-spacing': `-21.47px`,
                                    '--framer-line-height': `90%`,
                                    '--framer-text-color': `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                  },
                                  children: `©2026`,
                                }),
                              }),
                              className: `framer-boe3ic`,
                              'data-framer-name': `Text`,
                              fonts: [`FR;InterDisplay-SemiBold`],
                              layoutDependency: F,
                              layoutId: `aEVhSDS5N`,
                              style: {
                                '--extracted-r6o4lv': `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                '--framer-paragraph-spacing': `0px`,
                              },
                              verticalAlignment: `top`,
                              viewBox: `0 0 1392 409`,
                              withExternalLayout: !0,
                              ..._n(
                                {
                                  BVgGRXO1i: { viewBox: `0 0 1407.47 409` },
                                  F1PWQk2Ec: {
                                    __framer__styleTransformEffectEnabled: void 0,
                                    viewBox: `0 0 1407.47 409`,
                                  },
                                  fol9xHtCS: {
                                    __framer__styleTransformEffectEnabled: void 0,
                                    viewBox: `0 0 1407.47 409`,
                                  },
                                },
                                S,
                                E
                              ),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-B5N7f.framer-mc42kd, .framer-B5N7f .framer-mc42kd { display: block; }`,
          `.framer-B5N7f.framer-142vb5r { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 180px 0px 0px 0px; position: relative; width: 1440px; }`,
          `.framer-B5N7f .framer-drotkq-container, .framer-B5N7f .framer-l8q6i6-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-B5N7f .framer-1ktrnok { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-B5N7f .framer-16z4bvg-container { flex: none; height: 260px; position: relative; width: 100%; }`,
          `.framer-B5N7f .framer-6ryda7-container, .framer-B5N7f .framer-1o0hif3-container { height: 193px; position: relative; width: 132px; }`,
          `.framer-B5N7f .framer-19fo8pi-container, .framer-B5N7f .framer-1cgexat-container { height: 110px; position: relative; width: 154px; }`,
          `.framer-B5N7f .framer-1k22hqw-container { height: 193px; position: relative; width: 150px; }`,
          `.framer-B5N7f .framer-1qyu2tm-container { height: 245px; position: relative; width: 165px; }`,
          `.framer-B5N7f .framer-dis1bv-container { height: 136px; position: relative; width: 190px; }`,
          `.framer-B5N7f .framer-1ve9vkr-container { height: 193px; position: relative; width: 190px; }`,
          `.framer-B5N7f .framer-15d2be5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
          `.framer-B5N7f .framer-1wyxtpc { flex: none; height: auto; max-width: 550px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-B5N7f .framer-1tx43ga-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-B5N7f .framer-ic9f1x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-B5N7f .framer-oz2owl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-B5N7f .framer-ugtqxm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 24px; position: relative; width: 100%; }`,
          `.framer-B5N7f .framer-nb884n { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-B5N7f .framer-1jtsqst { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: center; max-width: 300px; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-B5N7f .framer-1vxsgyu, .framer-B5N7f .framer-vlehe { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-B5N7f .framer-18jhjwi-container, .framer-B5N7f .framer-1kzzr6r-container { align-self: stretch; flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-B5N7f .framer-1dvhdhe { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: center; max-width: 300px; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-B5N7f .framer-118gr46 { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }`,
          `.framer-B5N7f .framer-1vdw828 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
          `.framer-B5N7f .framer-boe3ic { flex: 1 0 0px; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: 1px; }`,
          `.framer-B5N7f.framer-v-1f5qd2t.framer-142vb5r { width: 1200px; }`,
          `.framer-B5N7f.framer-v-11nqrhj.framer-142vb5r { padding: 120px 0px 0px 0px; width: 810px; }`,
          `.framer-B5N7f.framer-v-11nqrhj .framer-1vdw828 { padding: 0px 24px 10px 24px; }`,
          `.framer-B5N7f.framer-v-1mc2d1k.framer-142vb5r { gap: 60px; padding: 80px 0px 0px 0px; width: 390px; }`,
          `.framer-B5N7f.framer-v-1mc2d1k .framer-1ktrnok { gap: 60px; }`,
          `.framer-B5N7f.framer-v-1mc2d1k .framer-15d2be5 { padding: 0px 20px 0px 20px; }`,
          `.framer-B5N7f.framer-v-1mc2d1k .framer-ugtqxm { padding: 20px; }`,
          `.framer-B5N7f.framer-v-1mc2d1k .framer-nb884n { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 20px; justify-content: flex-start; }`,
          `.framer-B5N7f.framer-v-1mc2d1k .framer-1dvhdhe { align-content: flex-start; align-items: flex-start; }`,
          `.framer-B5N7f.framer-v-1mc2d1k .framer-1vdw828 { padding: 0px 20px 10px 20px; }`,
          ...Ae,
        ],
        `framer-B5N7f`
      )),
      (In = Fn),
      (Fn.displayName = `Footer`),
      (Fn.defaultProps = { height: 1378, width: 1440 }),
      I(Fn, {
        variant: {
          options: [`er_eF3Aj4`, `BVgGRXO1i`, `fol9xHtCS`, `F1PWQk2Ec`],
          optionTitles: [`XL`, `L`, `M`, `S`],
          title: `Variant`,
          type: W.Enum,
        },
        xqvBbSQlQ: {
          defaultValue: `Back To Top`,
          displayTextArea: !1,
          title: `Footer Button Text`,
          type: W.String,
        },
        OwSWNpHNf: { title: `Footer Button Link`, type: W.Link },
        VShZDQ_S6: { defaultValue: !1, title: `Smooth Scroll`, type: W.Boolean },
        RWfjd3mjg: { defaultValue: !1, title: `New Tab`, type: W.Boolean },
      }),
      L(
        Fn,
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
            ],
          },
          ...vn,
          ...yn,
          ...bn,
          ...xn,
          ...Sn,
          ...Cn,
          ...B(He),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Rn({ direction: e, style: t }) {
  let n = se.current() === se.canvas,
    r = _(null),
    i = _(),
    o = e === `vertical` || e === `both`,
    s = e === `horizontal` || e === `both`;
  return (
    a(() => {
      if (n) return;
      let e = r.current?.parentElement?.parentElement;
      if (!e) return;
      let t = e.parentElement;
      if (!t) return;
      let a = () => {
        let n = e.getBoundingClientRect();
        (s && (t.style.width = `${n.width}px`),
          o && (t.style.height = `${n.height}px`),
          (i.current = requestAnimationFrame(a)));
      };
      return (
        (i.current = requestAnimationFrame(a)),
        () => {
          (i.current && cancelAnimationFrame(i.current),
            t && (s && (t.style.width = ``), o && (t.style.height = ``)));
        }
      );
    }, [e]),
    m(`div`, { ref: r, style: { ...t } })
  );
}
var zn = e(() => {
  (x(),
    R(),
    n(),
    (Rn.displayName = `Layout Jump Preventer`),
    I(Rn, {
      direction: {
        type: W.Enum,
        defaultValue: `vertical`,
        options: [`vertical`, `horizontal`, `both`],
        optionTitles: [`Vertical`, `Horizontal`, `Both`],
        displaySegmentedControl: !0,
        segmentedControlDirection: `vertical`,
        optionIcons: [`direction-vertical`, `direction-horizontal`, `direction-all`],
        description: `More components at [Framer University](https://frameruni.link/cc).`,
      },
    }));
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
    (x(),
      R(),
      j(),
      n(),
      zn(),
      Oe(),
      rt(),
      We(),
      (Vn = z(Le)),
      (Hn = z(Rn)),
      (Un = [
        `dKwP95Lfi`,
        `nUBbPJveT`,
        `gqljWeQpK`,
        `VZpAlkgib`,
        `GHKJhM8_s`,
        `oUcbfmAPl`,
        `m1JndHWRE`,
        `SKNoUT0bv`,
      ]),
      (Wn = `framer-Ar9qQ`),
      (Gn = {
        dKwP95Lfi: `framer-v-qdx5ul`,
        GHKJhM8_s: `framer-v-uemeep`,
        gqljWeQpK: `framer-v-tl7i5v`,
        m1JndHWRE: `framer-v-17an9fl`,
        nUBbPJveT: `framer-v-12s9wa2`,
        oUcbfmAPl: `framer-v-mwbs9y`,
        SKNoUT0bv: `framer-v-j9w8ah`,
        VZpAlkgib: `framer-v-nz5kwb`,
      }),
      (Kn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (qn = (e, t) => `translateX(-50%) ${t}`),
      (Jn = ({ value: e, children: t }) => {
        let n = s(k),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(k.Provider, { value: i, children: t });
      }),
      (Yn = O.create(o)),
      (Xn = {
        'S Primary Closed': `oUcbfmAPl`,
        'S Primary Opened': `GHKJhM8_s`,
        'S Secondary Closed': `SKNoUT0bv`,
        'S Secondary Opened': `m1JndHWRE`,
        'XL Primary Closed': `nUBbPJveT`,
        'XL Primary Opened': `dKwP95Lfi`,
        'XL Secondary Closed': `VZpAlkgib`,
        'XL Secondary Opened': `gqljWeQpK`,
      }),
      (Zn = ({ answer: e, height: t, id: n, question: r, rollNo: i, width: a, ...o }) => ({
        ...o,
        CAMoD9Z8N: r ?? o.CAMoD9Z8N ?? `What industries do you specialize in?`,
        cBVn29Nvc: i ?? o.cBVn29Nvc ?? `01`,
        rz_T6n7XM:
          e ??
          o.rz_T6n7XM ??
          `I have experience working across various industries including but not limited to technology, healthcare, fashion, hospitality, and non-profit organizations.`,
        variant: Xn[o.variant] ?? o.variant ?? `dKwP95Lfi`,
      })),
      (Qn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($n = G(
        d(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = p(),
            { activeLocale: a, setLocale: s } = K();
          X();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              cBVn29Nvc: f,
              CAMoD9Z8N: h,
              rz_T6n7XM: g,
              ...y
            } = Zn(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: k,
            } = Q({
              cycleOrder: Un,
              defaultVariant: `dKwP95Lfi`,
              ref: r,
              variant: d,
              variantClassNames: Gn,
            }),
            j = Qn(e, k),
            { activeVariantCallback: M, delay: F } = ge(b),
            I = M(async (...e) => {
              (E({ isPressed: !1 }), D(`nUBbPJveT`));
            }),
            L = M(async (...e) => {
              (E({ isPressed: !1 }), D(`dKwP95Lfi`));
            }),
            R = M(async (...e) => {
              (E({ isPressed: !1 }), D(`VZpAlkgib`));
            }),
            ee = M(async (...e) => {
              (E({ isPressed: !1 }), D(`gqljWeQpK`));
            }),
            z = M(async (...e) => {
              (E({ isPressed: !1 }), D(`oUcbfmAPl`));
            }),
            B = M(async (...e) => {
              (E({ isPressed: !1 }), D(`GHKJhM8_s`));
            }),
            te = M(async (...e) => {
              (E({ isPressed: !1 }), D(`SKNoUT0bv`));
            }),
            V = M(async (...e) => {
              (E({ isPressed: !1 }), D(`m1JndHWRE`));
            }),
            U = N(Wn, Ue, it),
            ne = () => ![`GHKJhM8_s`, `oUcbfmAPl`, `m1JndHWRE`, `SKNoUT0bv`].includes(b),
            re = () => ![`nUBbPJveT`, `VZpAlkgib`, `oUcbfmAPl`, `SKNoUT0bv`].includes(b),
            ie = () => !![`gqljWeQpK`, `VZpAlkgib`, `m1JndHWRE`, `SKNoUT0bv`].includes(b);
          return m(A, {
            id: u ?? i,
            children: m(Yn, {
              animate: k,
              initial: !1,
              children: m(Jn, {
                value: Kn,
                children: v(O.div, {
                  ...y,
                  ...C,
                  className: N(U, `framer-qdx5ul`, l, x),
                  'data-framer-name': `XL Primary Opened`,
                  'data-highlight': !0,
                  layoutDependency: j,
                  layoutId: `dKwP95Lfi`,
                  onTap: I,
                  ref: r,
                  style: { ...c },
                  ...Bn(
                    {
                      GHKJhM8_s: { 'data-framer-name': `S Primary Opened`, onTap: z },
                      gqljWeQpK: { 'data-framer-name': `XL Secondary Opened`, onTap: R },
                      m1JndHWRE: { 'data-framer-name': `S Secondary Opened`, onTap: te },
                      nUBbPJveT: { 'data-framer-name': `XL Primary Closed`, onTap: L },
                      oUcbfmAPl: { 'data-framer-name': `S Primary Closed`, onTap: B },
                      SKNoUT0bv: { 'data-framer-name': `S Secondary Closed`, onTap: V },
                      VZpAlkgib: { 'data-framer-name': `XL Secondary Closed`, onTap: ee },
                    },
                    b,
                    w
                  ),
                  children: [
                    m(O.div, {
                      className: `framer-t43jeg`,
                      'data-framer-name': `Line`,
                      layoutDependency: j,
                      layoutId: `OeHQnD4J2`,
                      style: {
                        backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`,
                      },
                    }),
                    v(O.div, {
                      className: `framer-1ibueu3`,
                      'data-framer-name': `Content`,
                      layoutDependency: j,
                      layoutId: `Dvcr_X0iS`,
                      children: [
                        ne() &&
                          m(O.div, {
                            className: `framer-egdmeq`,
                            'data-framer-name': `Roll Now`,
                            layoutDependency: j,
                            layoutId: `LdZyVysyW`,
                            children: m(P, {
                              __fromCanvasComponent: !0,
                              children: m(o, {
                                children: m(O.p, {
                                  className: `framer-styles-preset-8vm16z`,
                                  'data-styles-preset': `uDh9bONtj`,
                                  children: `01`,
                                }),
                              }),
                              className: `framer-1kfxinv`,
                              'data-framer-name': `Text`,
                              fonts: [`Inter`],
                              layoutDependency: j,
                              layoutId: `GDU7y4QNB`,
                              style: { '--framer-paragraph-spacing': `0px` },
                              text: f,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        v(O.div, {
                          className: `framer-glrtz`,
                          'data-framer-name': `Q/A`,
                          layoutDependency: j,
                          layoutId: `msGNaTrPi`,
                          children: [
                            m(P, {
                              __fromCanvasComponent: !0,
                              children: m(o, {
                                children: m(O.p, {
                                  className: `framer-styles-preset-14w8e6o`,
                                  'data-styles-preset': `FsS03h6Vk`,
                                  children: `What industries do you specialize in?`,
                                }),
                              }),
                              className: `framer-26j1nm`,
                              'data-framer-name': `Question`,
                              fonts: [`Inter`],
                              layoutDependency: j,
                              layoutId: `m2KgutE9J`,
                              style: { '--framer-paragraph-spacing': `0px` },
                              text: h,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            re() &&
                              m(O.div, {
                                className: `framer-1hj9hac`,
                                'data-framer-name': `Answer`,
                                layoutDependency: j,
                                layoutId: `gOujzoAMe`,
                                children: m(P, {
                                  __fromCanvasComponent: !0,
                                  children: m(o, {
                                    children: m(O.p, {
                                      className: `framer-styles-preset-8vm16z`,
                                      'data-styles-preset': `uDh9bONtj`,
                                      style: {
                                        '--framer-text-color': `var(--extracted-r6o4lv, var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153)))`,
                                      },
                                      children: `I have experience working across various industries including but not limited to technology, healthcare, fashion, hospitality, and non-profit organizations.`,
                                    }),
                                  }),
                                  className: `framer-1y7bnjn`,
                                  'data-framer-name': `Text`,
                                  fonts: [`Inter`],
                                  layoutDependency: j,
                                  layoutId: `mGlXMoIKU`,
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
                        m(O.div, {
                          className: `framer-1ah365h`,
                          'data-framer-name': `Icon`,
                          layoutDependency: j,
                          layoutId: `U6x9x2QzF`,
                          children: m(Y, {
                            children: m(H, {
                              className: `framer-7pszae-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              layoutDependency: j,
                              layoutId: `rHlUkkB70-container`,
                              nodeId: `rHlUkkB70`,
                              rendersWithMotion: !0,
                              scopeId: `Bc6qx0mDi`,
                              children: m(Le, {
                                color: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                height: `100%`,
                                iconSearch: `House`,
                                iconSelection: `Minus`,
                                id: `rHlUkkB70`,
                                layoutId: `rHlUkkB70`,
                                mirrored: !1,
                                selectByList: !0,
                                style: { height: `100%`, width: `100%` },
                                weight: `bold`,
                                width: `100%`,
                                ...Bn(
                                  {
                                    nUBbPJveT: { iconSelection: `Plus` },
                                    oUcbfmAPl: { iconSelection: `Plus` },
                                    SKNoUT0bv: { iconSelection: `Plus` },
                                    VZpAlkgib: { iconSelection: `Plus` },
                                  },
                                  b,
                                  w
                                ),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    ie() &&
                      m(O.div, {
                        className: `framer-1q1fr7`,
                        'data-framer-name': `Line`,
                        layoutDependency: j,
                        layoutId: `sr5EUFHI6`,
                        style: {
                          backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgba(187, 187, 187, 0.2))`,
                        },
                      }),
                    m(Y, {
                      children: m(H, {
                        className: `framer-149t9qt-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: j,
                        layoutId: `BTXgFMW8p-container`,
                        nodeId: `BTXgFMW8p`,
                        rendersWithMotion: !0,
                        scopeId: `Bc6qx0mDi`,
                        transformTemplate: qn,
                        children: m(Rn, {
                          direction: `vertical`,
                          height: `100%`,
                          id: `BTXgFMW8p`,
                          layoutId: `BTXgFMW8p`,
                          width: `100%`,
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
          `.framer-Ar9qQ.framer-2axa8v, .framer-Ar9qQ .framer-2axa8v { display: block; }`,
          `.framer-Ar9qQ.framer-qdx5ul { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 40px 0px; position: relative; width: 772px; }`,
          `.framer-Ar9qQ .framer-t43jeg, .framer-Ar9qQ .framer-1q1fr7 { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }`,
          `.framer-Ar9qQ .framer-1ibueu3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Ar9qQ .framer-egdmeq { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 30px; overflow: hidden; padding: 3px 0px 0px 0px; position: relative; width: 1px; }`,
          `.framer-Ar9qQ .framer-1kfxinv, .framer-Ar9qQ .framer-1y7bnjn { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Ar9qQ .framer-glrtz { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-Ar9qQ .framer-26j1nm { flex: none; height: auto; max-width: 470px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Ar9qQ .framer-1hj9hac { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 470px; overflow: hidden; padding: 3px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-Ar9qQ .framer-1ah365h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 3px 0px 0px 0px; position: relative; width: min-content; }`,
          `.framer-Ar9qQ .framer-7pszae-container { flex: none; height: 18px; position: relative; width: 18px; }`,
          `.framer-Ar9qQ .framer-149t9qt-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; width: auto; z-index: 1; }`,
          `.framer-Ar9qQ.framer-v-tl7i5v.framer-qdx5ul, .framer-Ar9qQ.framer-v-nz5kwb.framer-qdx5ul, .framer-Ar9qQ.framer-v-17an9fl.framer-qdx5ul, .framer-Ar9qQ.framer-v-j9w8ah.framer-qdx5ul { padding: 0px; }`,
          `.framer-Ar9qQ.framer-v-uemeep .framer-1ibueu3, .framer-Ar9qQ.framer-v-mwbs9y .framer-1ibueu3, .framer-Ar9qQ.framer-v-17an9fl .framer-1ibueu3, .framer-Ar9qQ.framer-v-j9w8ah .framer-1ibueu3 { gap: 100px; }`,
          ...nt,
          ...Ie,
        ],
        `framer-Ar9qQ`
      )),
      (er = $n),
      ($n.displayName = `FAQ Single`),
      ($n.defaultProps = { height: 170, width: 772 }),
      I($n, {
        variant: {
          options: [
            `dKwP95Lfi`,
            `nUBbPJveT`,
            `gqljWeQpK`,
            `VZpAlkgib`,
            `GHKJhM8_s`,
            `oUcbfmAPl`,
            `m1JndHWRE`,
            `SKNoUT0bv`,
          ],
          optionTitles: [
            `XL Primary Opened`,
            `XL Primary Closed`,
            `XL Secondary Opened`,
            `XL Secondary Closed`,
            `S Primary Opened`,
            `S Primary Closed`,
            `S Secondary Opened`,
            `S Secondary Closed`,
          ],
          title: `Variant`,
          type: W.Enum,
        },
        cBVn29Nvc: { defaultValue: `01`, displayTextArea: !1, title: `Roll No`, type: W.String },
        CAMoD9Z8N: {
          defaultValue: `What industries do you specialize in?`,
          displayTextArea: !0,
          title: `Question`,
          type: W.String,
        },
        rz_T6n7XM: {
          defaultValue: `I have experience working across various industries including but not limited to technology, healthcare, fashion, hospitality, and non-profit organizations.`,
          displayTextArea: !0,
          title: `Answer`,
          type: W.String,
        },
      }),
      L(
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
          ...Vn,
          ...Hn,
          ...B(at),
          ...B(Ee),
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
  hr = e(() => {
    (x(),
      R(),
      j(),
      n(),
      tr(),
      (rr = z(er)),
      (ir = [`kC1V2m6rR`, `KtcjtZQyH`]),
      (ar = `framer-DF93D`),
      (or = { kC1V2m6rR: `framer-v-1d4s822`, KtcjtZQyH: `framer-v-psspqg` }),
      (sr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (cr = ({ value: e, children: t }) => {
        let n = s(k),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(k.Provider, { value: i, children: t });
      }),
      (lr = O.create(o)),
      (ur = { Primary: `kC1V2m6rR`, Secondary: `KtcjtZQyH` }),
      (dr = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: ur[r.variant] ?? r.variant ?? `kC1V2m6rR`,
      })),
      (fr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (pr = G(
        d(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = p(),
            { activeLocale: a, setLocale: o } = K(),
            s = X(),
            { style: c, className: l, layoutId: u, variant: d, ...f } = dr(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: S,
              setGestureState: C,
              setVariant: w,
              variants: T,
            } = Q({
              cycleOrder: ir,
              defaultVariant: `kC1V2m6rR`,
              ref: r,
              variant: d,
              variantClassNames: or,
            }),
            E = fr(e, T),
            D = N(ar);
          return m(A, {
            id: u ?? i,
            children: m(lr, {
              animate: T,
              initial: !1,
              children: m(cr, {
                value: sr,
                children: v(O.div, {
                  ...f,
                  ...b,
                  className: N(D, `framer-1d4s822`, l, g),
                  'data-framer-name': `Primary`,
                  layoutDependency: E,
                  layoutId: `kC1V2m6rR`,
                  ref: r,
                  style: { ...c },
                  ...nr({ KtcjtZQyH: { 'data-framer-name': `Secondary` } }, h, x),
                  children: [
                    m(Y, {
                      height: 170,
                      width: s?.width || `100vw`,
                      y: (s?.y || 0) + 0 + (((s?.height || 638) - 0 - 1020) / 2 + 0 + 0),
                      children: m(H, {
                        className: `framer-1lob0zh-container`,
                        layoutDependency: E,
                        layoutId: `SXL7xShsm-container`,
                        nodeId: `SXL7xShsm`,
                        rendersWithMotion: !0,
                        scopeId: `MOuypzF69`,
                        children: m(er, {
                          CAMoD9Z8N: `What services do you offer?`,
                          cBVn29Nvc: `01`,
                          height: `100%`,
                          id: `SXL7xShsm`,
                          layoutId: `SXL7xShsm`,
                          rz_T6n7XM: `I provide creative direction, branding, UI/UX design, and Framer development tailored for modern digital experiences.`,
                          style: { width: `100%` },
                          variant: `nUBbPJveT`,
                          width: `100%`,
                          ...nr({ KtcjtZQyH: { variant: `oUcbfmAPl` } }, h, x),
                        }),
                      }),
                    }),
                    m(Y, {
                      height: 170,
                      width: s?.width || `100vw`,
                      y: (s?.y || 0) + 0 + (((s?.height || 638) - 0 - 1020) / 2 + 170 + 0),
                      children: m(H, {
                        className: `framer-1xheqgm-container`,
                        layoutDependency: E,
                        layoutId: `F0ZkmWxRM-container`,
                        nodeId: `F0ZkmWxRM`,
                        rendersWithMotion: !0,
                        scopeId: `MOuypzF69`,
                        children: m(er, {
                          CAMoD9Z8N: `What is your typical turnaround time?`,
                          cBVn29Nvc: `02`,
                          height: `100%`,
                          id: `F0ZkmWxRM`,
                          layoutId: `F0ZkmWxRM`,
                          rz_T6n7XM: `Turnaround depends on the project scope, but most sites are delivered within 2–4 weeks from initial kickoff.`,
                          style: { width: `100%` },
                          variant: `nUBbPJveT`,
                          width: `100%`,
                          ...nr({ KtcjtZQyH: { variant: `oUcbfmAPl` } }, h, x),
                        }),
                      }),
                    }),
                    m(Y, {
                      height: 170,
                      width: s?.width || `100vw`,
                      y: (s?.y || 0) + 0 + (((s?.height || 638) - 0 - 1020) / 2 + 340 + 0),
                      children: m(H, {
                        className: `framer-hxskjg-container`,
                        layoutDependency: E,
                        layoutId: `rFiyJJio6-container`,
                        nodeId: `rFiyJJio6`,
                        rendersWithMotion: !0,
                        scopeId: `MOuypzF69`,
                        children: m(er, {
                          CAMoD9Z8N: `Do you only work in Framer?`,
                          cBVn29Nvc: `03`,
                          height: `100%`,
                          id: `rFiyJJio6`,
                          layoutId: `rFiyJJio6`,
                          rz_T6n7XM: `While Framer is my primary tool, I also work with Figma, Webflow, and occasionally deliver HTML/CSS code.`,
                          style: { width: `100%` },
                          variant: `nUBbPJveT`,
                          width: `100%`,
                          ...nr({ KtcjtZQyH: { variant: `oUcbfmAPl` } }, h, x),
                        }),
                      }),
                    }),
                    m(Y, {
                      height: 170,
                      width: s?.width || `100vw`,
                      y: (s?.y || 0) + 0 + (((s?.height || 638) - 0 - 1020) / 2 + 510 + 0),
                      children: m(H, {
                        className: `framer-1k7cc9b-container`,
                        layoutDependency: E,
                        layoutId: `uPjtf8lE8-container`,
                        nodeId: `uPjtf8lE8`,
                        rendersWithMotion: !0,
                        scopeId: `MOuypzF69`,
                        children: m(er, {
                          CAMoD9Z8N: `Can you handle both design and build?`,
                          cBVn29Nvc: `04`,
                          height: `100%`,
                          id: `uPjtf8lE8`,
                          layoutId: `uPjtf8lE8`,
                          rz_T6n7XM: `Absolutely. I specialize in merging design and development to create clean, efficient, and cohesive results.`,
                          style: { width: `100%` },
                          variant: `nUBbPJveT`,
                          width: `100%`,
                          ...nr({ KtcjtZQyH: { variant: `oUcbfmAPl` } }, h, x),
                        }),
                      }),
                    }),
                    m(Y, {
                      height: 170,
                      width: s?.width || `100vw`,
                      y: (s?.y || 0) + 0 + (((s?.height || 638) - 0 - 1020) / 2 + 680 + 0),
                      children: m(H, {
                        className: `framer-q95t80-container`,
                        layoutDependency: E,
                        layoutId: `DYsSVnJmO-container`,
                        nodeId: `DYsSVnJmO`,
                        rendersWithMotion: !0,
                        scopeId: `MOuypzF69`,
                        children: m(er, {
                          CAMoD9Z8N: `Do you offer brand strategy too?`,
                          cBVn29Nvc: `05`,
                          height: `100%`,
                          id: `DYsSVnJmO`,
                          layoutId: `DYsSVnJmO`,
                          rz_T6n7XM: `Yes, I offer strategy sessions to align design with business goals, especially for startups and creative teams.`,
                          style: { width: `100%` },
                          variant: `nUBbPJveT`,
                          width: `100%`,
                          ...nr({ KtcjtZQyH: { variant: `oUcbfmAPl` } }, h, x),
                        }),
                      }),
                    }),
                    m(Y, {
                      height: 170,
                      width: s?.width || `100vw`,
                      y: (s?.y || 0) + 0 + (((s?.height || 638) - 0 - 1020) / 2 + 850 + 0),
                      children: m(H, {
                        className: `framer-o2g5t6-container`,
                        layoutDependency: E,
                        layoutId: `shVwBU58D-container`,
                        nodeId: `shVwBU58D`,
                        rendersWithMotion: !0,
                        scopeId: `MOuypzF69`,
                        children: m(er, {
                          CAMoD9Z8N: `What’s your process like?`,
                          cBVn29Nvc: `06`,
                          height: `100%`,
                          id: `shVwBU58D`,
                          layoutId: `shVwBU58D`,
                          rz_T6n7XM: `Each project begins with a discovery call, followed by design phases, client reviews, and hands-on development.`,
                          style: { width: `100%` },
                          variant: `VZpAlkgib`,
                          width: `100%`,
                          ...nr({ KtcjtZQyH: { variant: `SKNoUT0bv` } }, h, x),
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
          `.framer-DF93D.framer-1eb1lfx, .framer-DF93D .framer-1eb1lfx { display: block; }`,
          `.framer-DF93D.framer-1d4s822 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 772px; }`,
          `.framer-DF93D .framer-1lob0zh-container, .framer-DF93D .framer-1xheqgm-container, .framer-DF93D .framer-hxskjg-container, .framer-DF93D .framer-1k7cc9b-container, .framer-DF93D .framer-q95t80-container, .framer-DF93D .framer-o2g5t6-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ],
        `framer-DF93D`
      )),
      (mr = pr),
      (pr.displayName = `FAQ List`),
      (pr.defaultProps = { height: 638, width: 772 }),
      I(pr, {
        variant: {
          options: [`kC1V2m6rR`, `KtcjtZQyH`],
          optionTitles: [`Primary`, `Secondary`],
          title: `Variant`,
          type: W.Enum,
        },
      }),
      L(pr, [{ explicitInter: !0, fonts: [] }, ...rr], { supportsExplicitInterCodegen: !0 }));
  });
function gr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var _r,
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
    (x(),
      R(),
      j(),
      n(),
      Oe(),
      (_r = z(Le)),
      (vr = { pGgkWGj7G: { hover: !0 } }),
      (yr = `framer-Joc5E`),
      (br = { pGgkWGj7G: `framer-v-1epj0s9` }),
      (xr = { damping: 60, delay: 0, mass: 1, stiffness: 300, type: `spring` }),
      (Sr = ({ value: e, children: t }) => {
        let n = s(k),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(k.Provider, { value: i, children: t });
      }),
      (Cr = O.create(o)),
      (wr = ({ height: e, id: t, link: n, width: r, ...i }) => ({
        ...i,
        HUPO7Yj4E: n ?? i.HUPO7Yj4E,
      })),
      (Tr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Er = G(
        d(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = p(),
            { activeLocale: a, setLocale: o } = K();
          X();
          let { style: s, className: c, layoutId: l, variant: u, HUPO7Yj4E: d, ...f } = wr(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: S,
              setVariant: C,
              variants: w,
            } = Q({
              defaultVariant: `pGgkWGj7G`,
              enabledGestures: vr,
              ref: r,
              variant: u,
              variantClassNames: br,
            }),
            T = Tr(e, w),
            E = N(yr);
          return m(A, {
            id: l ?? i,
            children: m(Cr, {
              animate: w,
              initial: !1,
              children: m(Sr, {
                value: xr,
                children: m(J, {
                  href: d,
                  motionChild: !0,
                  nodeId: `pGgkWGj7G`,
                  openInNewTab: !0,
                  scopeId: `vWCSYUCQ8`,
                  children: m(O.a, {
                    ...f,
                    ...y,
                    className: `${N(E, `framer-1epj0s9`, c, g)} framer-11somrw`,
                    'data-framer-name': `XL`,
                    layoutDependency: T,
                    layoutId: `pGgkWGj7G`,
                    ref: r,
                    style: {
                      backgroundColor: `var(--token-76df3e68-730d-4393-aeac-0a21875001c9, rgb(34, 34, 34))`,
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                      ...s,
                    },
                    variants: { 'pGgkWGj7G-hover': { backgroundColor: `rgb(255, 255, 255)` } },
                    ...gr({ 'pGgkWGj7G-hover': { 'data-framer-name': void 0 } }, h, b),
                    children: m(Y, {
                      children: m(H, {
                        className: `framer-1103nkj-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: T,
                        layoutId: `p80r2u_e8-container`,
                        nodeId: `p80r2u_e8`,
                        rendersWithMotion: !0,
                        scopeId: `vWCSYUCQ8`,
                        children: m(Le, {
                          color: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                          height: `100%`,
                          iconSearch: `House`,
                          iconSelection: `TwitterLogo`,
                          id: `p80r2u_e8`,
                          layoutId: `p80r2u_e8`,
                          mirrored: !1,
                          selectByList: !0,
                          style: { height: `100%`, width: `100%` },
                          weight: `fill`,
                          width: `100%`,
                          ...gr(
                            {
                              'pGgkWGj7G-hover': {
                                color: `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                              },
                            },
                            h,
                            b
                          ),
                        }),
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
          `.framer-Joc5E.framer-11somrw, .framer-Joc5E .framer-11somrw { display: block; }`,
          `.framer-Joc5E.framer-1epj0s9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 28px; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 28px; }`,
          `.framer-Joc5E .framer-1103nkj-container { flex: none; height: 16px; position: relative; width: 15px; }`,
        ],
        `framer-Joc5E`
      )),
      (Dr = Er),
      (Er.displayName = `Social Button`),
      (Er.defaultProps = { height: 28, width: 28 }),
      I(Er, { HUPO7Yj4E: { title: `Link`, type: W.Link } }),
      L(Er, [{ explicitInter: !0, fonts: [] }, ..._r], { supportsExplicitInterCodegen: !0 }));
  }),
  kr,
  Ar,
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
  Wr,
  Gr,
  Kr,
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
  oi,
  si,
  ci,
  li = e(() => {
    (x(),
      R(),
      j(),
      n(),
      vt(),
      on(),
      gn(),
      Be(),
      ke(),
      Ln(),
      hr(),
      Or(),
      Pe(),
      qe(),
      Ke(),
      (kr = z(an)),
      (Ar = z(De)),
      (jr = V(P)),
      (Mr = z(Re)),
      (Nr = z(mr)),
      (Pr = z(In)),
      (Fr = z(_t)),
      (Ir = z(Dr)),
      (Lr = F(q)),
      (Rr = z(hn)),
      (zr = z(ze)),
      (Br = {
        aH3P6zlal: `(min-width: 810px) and (max-width: 1199.98px)`,
        CTiLUQu9X: `(min-width: 1200px)`,
        XZldiOSrP: `(max-width: 809.98px)`,
      }),
      (Vr = () => typeof document < `u`),
      (Hr = `framer-o4vTy`),
      (Ur = {
        aH3P6zlal: `framer-v-1hug0ju`,
        CTiLUQu9X: `framer-v-v5sct`,
        XZldiOSrP: `framer-v-1kp9gsl`,
      }),
      (Wr = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (Gr = (e, t) => `translateY(-50%) ${t}`),
      (Kr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 60, delay: 4.8, mass: 1, stiffness: 300, type: `spring` },
        x: 0,
        y: 0,
      }),
      (qr = {
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
      (Jr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.3, delay: 5.5, duration: 0.9, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Yr = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 20,
      }),
      (Xr = {
        aH3P6zlal: [
          `.framer-o4vTy .framer-122h8qz { gap: 80px; padding: 120px 0px 0px 0px; }`,
          `.framer-o4vTy .framer-z6xuga { align-content: flex-start; align-items: flex-start; flex-direction: column; }`,
          `.framer-o4vTy .framer-12vvn99 { flex: none; order: 1; overflow: hidden; width: 100%; }`,
          `.framer-o4vTy .framer-1s9lvga-container { flex: none; order: 2; width: 100%; }`,
          `.framer-o4vTy .framer-d7c48n-container { right: 12px; }`,
        ],
        XZldiOSrP: [
          `.framer-o4vTy .framer-122h8qz { gap: 60px; padding: 80px 0px 0px 0px; }`,
          `.framer-o4vTy .framer-z6xuga { flex-direction: column; gap: 60px; padding: 0px 20px 0px 20px; }`,
          `.framer-o4vTy .framer-12vvn99 { flex: none; order: 1; overflow: hidden; width: 100%; }`,
          `.framer-o4vTy .framer-1s9lvga-container { flex: none; order: 2; width: 100%; }`,
        ],
      }),
      (Zr = Object.keys(Xr)),
      (Qr = { aH3P6zlal: `.framer-1hug0ju-override`, XZldiOSrP: `.framer-1kp9gsl-override` }),
      ($r = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-o4vTy.framer-54pxwf, .framer-o4vTy .framer-54pxwf { display: block; }`,
        `.framer-o4vTy.framer-v5sct { --selection-background-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff) /* {"name":"White"} */; --selection-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000) /* {"name":"Black"} */; align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-o4vTy .framer-18sftzr-container { flex: none; height: auto; left: 50%; max-width: 1480px; order: -1000; position: var(--framer-canvas-fixed-position, fixed); top: 0px; transform: translateX(-50%); width: 100%; z-index: 10; }`,
        `.framer-o4vTy .framer-1eurto5 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-o4vTy .framer-122h8qz { align-content: flex-start; align-items: flex-start; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; max-width: 1480px; order: 1002; overflow: hidden; padding: 180px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-o4vTy .framer-158frte-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-o4vTy .framer-z6xuga { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-o4vTy .framer-12vvn99 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 870px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-o4vTy .framer-63xfnz { --framer-paragraph-spacing: 0px; flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: auto; }`,
        `.framer-o4vTy .framer-sdbg06 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 540px; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 1px; z-index: 1; }`,
        `.framer-o4vTy .framer-1t26hkh-container { flex: none; height: 198px; left: calc(12.592592592592613% - 136px / 2); position: absolute; top: calc(-37.530864197530846% - 198px / 2); width: 136px; }`,
        `.framer-o4vTy .framer-1h581f8 { --framer-paragraph-spacing: 0px; flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-o4vTy .framer-1s9lvga-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-o4vTy .framer-golmbb-container { flex: none; height: auto; max-width: 1480px; order: 1003; position: relative; width: 100%; }`,
        `.framer-o4vTy .framer-qmzt3j-container { flex: none; height: auto; order: 1004; position: relative; width: auto; }`,
        `.framer-o4vTy .framer-d7c48n-container { flex: none; height: auto; order: 1005; position: var(--framer-canvas-fixed-position, fixed); right: 12px; top: calc(min(var(--framer-viewport-height, 100%), 100%) * 0.5000000000000002); width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,
        `.framer-o4vTy .framer-gctuvv-container { bottom: calc(calc(100% - min(var(--framer-viewport-height, 100%), 100%)) + 62px); flex: none; height: 1px; order: 1006; position: var(--framer-canvas-fixed-position, fixed); right: 20px; width: 4px; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
        ...tt,
        ...Qe,
        `.framer-o4vTy[data-selection="true"] * ::selection, .framer-o4vTy [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
      ]),
      (ei = {
        aH3P6zlal: `(min-width: 810px) and (max-width: 1199.98px)`,
        CTiLUQu9X: `(min-width: 1200px)`,
        XZldiOSrP: `(max-width: 809.98px)`,
      }),
      (ti = ({ value: e }) =>
        he()
          ? null
          : m(`style`, { dangerouslySetInnerHTML: { __html: e }, 'data-framer-html-style': `` })),
      (ni = { L: `CTiLUQu9X`, M: `aH3P6zlal`, S: `XZldiOSrP` }),
      (ri = ({
        footerButtonLink: e,
        footerButtonText: t,
        height: n,
        id: r,
        smoothScroll: i,
        width: a,
        ...o
      }) => ({
        ...o,
        CyUreTA4c: i ?? o.CyUreTA4c ?? !0,
        jkuXVKEYY: e ?? o.jkuXVKEYY,
        mq3ybqrZM: t ?? o.mq3ybqrZM ?? `Back To Top`,
        variant: ni[o.variant] ?? o.variant ?? `CTiLUQu9X`,
      })),
      (ii = { component: ze, variant: `PdMEYMdQg` }),
      (ai = d(function (e, t) {
        let n = _(null),
          r = t ?? n,
          i = p(),
          { activeLocale: a, setLocale: s } = K(),
          {
            style: c,
            className: l,
            layoutId: u,
            variant: d,
            mq3ybqrZM: f,
            jkuXVKEYY: h,
            CyUreTA4c: g,
            children: y,
            ...b
          } = ri(e),
          [x, S] = be(d, Br, !1),
          C = N(Hr, Ze, $e),
          w = () => !!(!Vr() || [`aH3P6zlal`, `XZldiOSrP`].includes(x)),
          T = () => (Vr() ? ![`aH3P6zlal`, `XZldiOSrP`].includes(x) : !0);
        return (
          oe({ '16nradr': ii }),
          m(ce.Provider, {
            value: { isLayoutTemplate: !0, primaryVariantId: `CTiLUQu9X`, variantClassNames: Ur },
            children: v(A, {
              id: u ?? i,
              children: [
                m(ti, {
                  value: `:root body { background: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)); }`,
                }),
                v(O.div, {
                  ...b,
                  className: N(C, `framer-v5sct`, l),
                  'data-framer-cursor': `16nradr`,
                  'data-layout-template': !0,
                  'data-selection': !0,
                  ref: r,
                  style: { ...c },
                  children: [
                    m(Y, {
                      height: 90,
                      width: `min(100vw, 1480px)`,
                      y: 0,
                      children: m(q, {
                        className: `framer-18sftzr-container`,
                        'data-framer-layout-hint-center-x': !0,
                        layoutScroll: !0,
                        nodeId: `uUqnpc2mO`,
                        scopeId: `Z96j7eI_f`,
                        children: m(Z, {
                          breakpoint: x,
                          overrides: {
                            aH3P6zlal: { variant: `xS2d0EbR9` },
                            XZldiOSrP: { variant: `jPYk09a3W` },
                          },
                          children: m(an, {
                            height: `100%`,
                            id: `uUqnpc2mO`,
                            layoutId: `uUqnpc2mO`,
                            style: { maxWidth: `100%`, width: `100%` },
                            variant: `c81AFkYLs`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    y,
                    m(`div`, { className: `framer-1eurto5` }),
                    v(`section`, {
                      className: `framer-122h8qz`,
                      'data-framer-name': `FAQ`,
                      children: [
                        m(Z, {
                          breakpoint: x,
                          overrides: { aH3P6zlal: { y: 1120 }, XZldiOSrP: { y: 1080 } },
                          children: m(Y, {
                            height: 24,
                            width: `min(100vw, 1480px)`,
                            y: 1180,
                            children: m(q, {
                              className: `framer-158frte-container`,
                              nodeId: `Wd2gCQSaK`,
                              scopeId: `Z96j7eI_f`,
                              children: m(Z, {
                                breakpoint: x,
                                overrides: {
                                  aH3P6zlal: { variant: `kQZZjN_Db` },
                                  XZldiOSrP: { variant: `CmSf9J7E0` },
                                },
                                children: m(De, {
                                  height: `100%`,
                                  Hq7BZwPem: `(WDX® — 11)`,
                                  id: `Wd2gCQSaK`,
                                  layoutId: `Wd2gCQSaK`,
                                  NHubkDs7R: `Clarifications`,
                                  pWoyTVtQ4: `© Help Center ヘルプ`,
                                  style: { width: `100%` },
                                  variant: `XFF72MIUC`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                        v(`div`, {
                          className: `framer-z6xuga`,
                          'data-framer-name': `Content`,
                          children: [
                            w() &&
                              m(`div`, {
                                className: `framer-12vvn99 hidden-v5sct`,
                                'data-framer-name': `Responsive Heading`,
                                children: m(jr, {
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
                                  children: m(o, {
                                    children: m(`h1`, {
                                      className: `framer-styles-preset-je0rn0`,
                                      'data-styles-preset': `YMtdKmiBu`,
                                      style: { '--framer-text-alignment': `left` },
                                      children: `FAQ.`,
                                    }),
                                  }),
                                  className: `framer-63xfnz`,
                                  'data-framer-name': `Text`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            T() &&
                              v(`div`, {
                                className: `framer-sdbg06 hidden-1hug0ju hidden-1kp9gsl`,
                                'data-framer-name': `Heading`,
                                children: [
                                  m(Y, {
                                    height: 198,
                                    width: `136px`,
                                    y: 1499.7094,
                                    children: m(q, {
                                      className: `framer-1t26hkh-container`,
                                      nodeId: `mZXpjTRbN`,
                                      scopeId: `Z96j7eI_f`,
                                      children: m(Re, {
                                        bNIxmSYTX: Wr(
                                          {
                                            pixelHeight: 1520,
                                            pixelWidth: 784,
                                            src: `https://framerusercontent.com/images/LAfSSJDuuPWvnBM2HTqTmOxjiL0.png?width=784&height=1520`,
                                            srcSet: `https://framerusercontent.com/images/LAfSSJDuuPWvnBM2HTqTmOxjiL0.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/LAfSSJDuuPWvnBM2HTqTmOxjiL0.png?width=784&height=1520 784w`,
                                          },
                                          ``
                                        ),
                                        CXo7fyVBS: Wr(
                                          {
                                            pixelHeight: 1520,
                                            pixelWidth: 784,
                                            src: `https://framerusercontent.com/images/YPm921puDi9RksbECP0BNHnD8.png?width=784&height=1520`,
                                            srcSet: `https://framerusercontent.com/images/YPm921puDi9RksbECP0BNHnD8.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/YPm921puDi9RksbECP0BNHnD8.png?width=784&height=1520 784w`,
                                          },
                                          ``
                                        ),
                                        height: `100%`,
                                        Hu6fn5bt1: Wr(
                                          {
                                            pixelHeight: 1440,
                                            pixelWidth: 743,
                                            src: `https://framerusercontent.com/images/aN8QVjRUn0htaXnzzzXqPu2ZI.png?width=743&height=1440`,
                                            srcSet: `https://framerusercontent.com/images/aN8QVjRUn0htaXnzzzXqPu2ZI.png?scale-down-to=1024&width=743&height=1440 528w,https://framerusercontent.com/images/aN8QVjRUn0htaXnzzzXqPu2ZI.png?width=743&height=1440 743w`,
                                          },
                                          `Woman`
                                        ),
                                        id: `mZXpjTRbN`,
                                        layoutId: `mZXpjTRbN`,
                                        style: { height: `100%`, width: `100%` },
                                        UhE81XPkg: Wr(
                                          {
                                            pixelHeight: 1440,
                                            pixelWidth: 743,
                                            src: `https://framerusercontent.com/images/v0MX86fqk0sHH199cin2KdpT3g.png?width=743&height=1440`,
                                            srcSet: `https://framerusercontent.com/images/v0MX86fqk0sHH199cin2KdpT3g.png?scale-down-to=1024&width=743&height=1440 528w,https://framerusercontent.com/images/v0MX86fqk0sHH199cin2KdpT3g.png?width=743&height=1440 743w`,
                                          },
                                          `Sidewalk`
                                        ),
                                        variant: `RSG36cpMb`,
                                        width: `100%`,
                                        YzLWPJL0x: Wr(
                                          {
                                            pixelHeight: 1520,
                                            pixelWidth: 784,
                                            src: `https://framerusercontent.com/images/vh4K6lIuizQChQco1ldOD2GyFew.png?width=784&height=1520`,
                                            srcSet: `https://framerusercontent.com/images/vh4K6lIuizQChQco1ldOD2GyFew.png?scale-down-to=1024&width=784&height=1520 528w,https://framerusercontent.com/images/vh4K6lIuizQChQco1ldOD2GyFew.png?width=784&height=1520 784w`,
                                          },
                                          `Woman On The Sofa`
                                        ),
                                      }),
                                    }),
                                  }),
                                  m(P, {
                                    __fromCanvasComponent: !0,
                                    children: m(o, {
                                      children: v(`h3`, {
                                        className: `framer-styles-preset-sng7in`,
                                        'data-styles-preset': `bLxN69a46`,
                                        children: [
                                          `Clarifying Deliverable's `,
                                          m(`br`, {}),
                                          `Before They Begin `,
                                          m(`br`, {}),
                                          `with Real Process and `,
                                          m(`br`, {}),
                                          `Honest アンサー.`,
                                        ],
                                      }),
                                    }),
                                    className: `framer-1h581f8`,
                                    'data-framer-name': `Text`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            m(Z, {
                              breakpoint: x,
                              overrides: {
                                aH3P6zlal: { width: `calc(min(100vw, 1480px) - 48px)`, y: 1472 },
                                XZldiOSrP: { width: `calc(min(100vw, 1480px) - 40px)`, y: 1392 },
                              },
                              children: m(Y, {
                                height: 638,
                                width: `max((min(100vw, 1480px) - 128px) / 2, 1px)`,
                                y: 1324,
                                children: m(q, {
                                  className: `framer-1s9lvga-container`,
                                  nodeId: `llOY_gwlw`,
                                  scopeId: `Z96j7eI_f`,
                                  children: m(Z, {
                                    breakpoint: x,
                                    overrides: {
                                      aH3P6zlal: { variant: `KtcjtZQyH` },
                                      XZldiOSrP: { variant: `KtcjtZQyH` },
                                    },
                                    children: m(mr, {
                                      height: `100%`,
                                      id: `llOY_gwlw`,
                                      layoutId: `llOY_gwlw`,
                                      style: { width: `100%` },
                                      variant: `kC1V2m6rR`,
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
                    m(Z, {
                      breakpoint: x,
                      overrides: { aH3P6zlal: { y: 2110 }, XZldiOSrP: { y: 2030 } },
                      children: m(Y, {
                        height: 1373,
                        width: `min(100vw, 1480px)`,
                        y: 1962,
                        children: m(q, {
                          className: `framer-golmbb-container`,
                          nodeId: `pYRvMXmN4`,
                          scopeId: `Z96j7eI_f`,
                          children: m(Z, {
                            breakpoint: x,
                            overrides: {
                              aH3P6zlal: { variant: `fol9xHtCS` },
                              XZldiOSrP: { variant: `F1PWQk2Ec` },
                            },
                            children: m(In, {
                              height: `100%`,
                              id: `pYRvMXmN4`,
                              layoutId: `pYRvMXmN4`,
                              OwSWNpHNf: h,
                              RWfjd3mjg: !1,
                              style: { maxWidth: `100%`, width: `100%` },
                              variant: `er_eF3Aj4`,
                              VShZDQ_S6: g,
                              width: `100%`,
                              xqvBbSQlQ: f,
                            }),
                          }),
                        }),
                      }),
                    }),
                    m(Y, {
                      children: m(q, {
                        className: `framer-qmzt3j-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `E9dRULHX1`,
                        scopeId: `Z96j7eI_f`,
                        children: m(_t, {
                          height: `100%`,
                          id: `E9dRULHX1`,
                          intensity: 16,
                          layoutId: `E9dRULHX1`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    m(Y, {
                      height: 28,
                      y: 486,
                      children: m(Lr, {
                        animate: Kr,
                        className: `framer-d7c48n-container`,
                        'data-framer-appear-id': `d7c48n`,
                        'data-framer-layout-hint-center-y': !0,
                        'data-framer-name': `Social Button`,
                        initial: qr,
                        layoutScroll: !0,
                        name: `Social Button`,
                        nodeId: `xksyeLvAY`,
                        optimized: !0,
                        rendersWithMotion: !0,
                        scopeId: `Z96j7eI_f`,
                        transformTemplate: Gr,
                        children: m(Dr, {
                          height: `100%`,
                          HUPO7Yj4E: `https://x.com/MandroDesign`,
                          id: `xksyeLvAY`,
                          layoutId: `xksyeLvAY`,
                          name: `Social Button`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    m(Y, {
                      height: 1,
                      width: `4px`,
                      y: 937,
                      children: m(Lr, {
                        animate: Jr,
                        className: `framer-gctuvv-container`,
                        'data-framer-appear-id': `gctuvv`,
                        initial: Yr,
                        layoutScroll: !0,
                        nodeId: `Hi51p3flb`,
                        optimized: !0,
                        rendersWithMotion: !0,
                        scopeId: `Z96j7eI_f`,
                        children: m(hn, {
                          height: `100%`,
                          id: `Hi51p3flb`,
                          layoutId: `Hi51p3flb`,
                          style: { height: `100%`, width: `100%` },
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                m(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (oi = (e) =>
        e === se.canvas || e === se.export
          ? [
              ...$r,
              ...Zr.flatMap((e) => {
                let t = Qr[e];
                return Xr[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...$r, ...Zr.map((e) => `@media ${ei[e]} { ${Xr[e].join(` `)} }`)]),
      (si = G(ai, oi, `framer-o4vTy`)),
      (ci = si),
      (si.displayName = `Main Page Template`),
      (si.defaultProps = { height: 3e3, width: 1200 }),
      I(si, {
        mq3ybqrZM: {
          defaultValue: `Back To Top`,
          displayTextArea: !1,
          title: `Footer Button Text`,
          type: W.String,
        },
        jkuXVKEYY: { title: `Footer Button Link`, type: W.Link },
        CyUreTA4c: { defaultValue: !0, title: `Smooth Scroll`, type: W.Boolean },
      }),
      L(
        si,
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
          ...kr,
          ...Ar,
          ...Mr,
          ...Nr,
          ...Pr,
          ...Fr,
          ...Ir,
          ...Rr,
          ...zr,
          ...B(Ge),
          ...B(Je),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  ui,
  di,
  fi,
  pi = e(() => {
    (R(),
      pe.loadFonts([`HelveticaNeue-Medium`]),
      (ui = [{ explicitInter: !0, fonts: [] }]),
      (di = [
        `.framer-eqhS5 .framer-styles-preset-feeaq9:not(.rich-text-wrapper), .framer-eqhS5 .framer-styles-preset-feeaq9.rich-text-wrapper p { --framer-font-family: "HelveticaNeue-Medium", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: -0.3px; --framer-line-height: 30.6px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (fi = `framer-eqhS5`));
  });
function mi(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di = e(() => {
    (x(),
      R(),
      j(),
      n(),
      je(),
      (hi = z($)),
      (gi = [`xE4SDhndv`, `ug4FrLxJu`, `qcgWviSPW`, `ZLJzdvQ8h`, `zVM3DKXtJ`]),
      (_i = `framer-uI4me`),
      (vi = {
        qcgWviSPW: `framer-v-1e4e34v`,
        ug4FrLxJu: `framer-v-1hspjk8`,
        xE4SDhndv: `framer-v-9tme3y`,
        ZLJzdvQ8h: `framer-v-22l3ap`,
        zVM3DKXtJ: `framer-v-19xi2gr`,
      }),
      (yi = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (bi = ({ value: e, children: t }) => {
        let n = s(k),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(k.Provider, { value: i, children: t });
      }),
      (xi = O.create(o)),
      (Si = {
        'All Active': `xE4SDhndv`,
        'Archive Active': `qcgWviSPW`,
        'Contact Active': `zVM3DKXtJ`,
        'Home Active': `ug4FrLxJu`,
        'Work Active': `ZLJzdvQ8h`,
      }),
      (Ci = ({
        _1: e,
        _2: t,
        _3: n,
        _4: r,
        height: i,
        id: a,
        link1: o,
        link2: s,
        link3: c,
        link4: l,
        newTab1: u,
        newTab2: d,
        newTab3: f,
        newTab4: p,
        width: m,
        ...h
      }) => ({
        ...h,
        DxrPeKSZi: u ?? h.DxrPeKSZi,
        Jaj0J8v2n: r ?? h.Jaj0J8v2n ?? `Contact`,
        Ki3TDRD07: l ?? h.Ki3TDRD07,
        olQrAbdLT: t ?? h.olQrAbdLT ?? `Archive, `,
        qWUpLfuiL: s ?? h.qWUpLfuiL,
        R3f3pz6dW: f ?? h.R3f3pz6dW,
        sxQGmBuKT: p ?? h.sxQGmBuKT,
        V4S60oOTR: e ?? h.V4S60oOTR ?? `Home, `,
        variant: Si[h.variant] ?? h.variant ?? `xE4SDhndv`,
        vkG_P2nP8: o ?? h.vkG_P2nP8,
        vXZKQGCTP: d ?? h.vXZKQGCTP,
        ycxJzIaoA: c ?? h.ycxJzIaoA,
        YjodoOjpE: n ?? h.YjodoOjpE ?? `Work, `,
      })),
      (wi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ti = G(
        d(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = p(),
            { activeLocale: a, setLocale: o } = K();
          X();
          let {
              style: s,
              className: c,
              layoutId: l,
              variant: u,
              V4S60oOTR: d,
              vkG_P2nP8: f,
              DxrPeKSZi: h,
              olQrAbdLT: g,
              qWUpLfuiL: y,
              vXZKQGCTP: b,
              YjodoOjpE: x,
              ycxJzIaoA: S,
              R3f3pz6dW: C,
              Jaj0J8v2n: w,
              Ki3TDRD07: T,
              sxQGmBuKT: E,
              ...D
            } = Ci(e),
            {
              baseVariant: k,
              classNames: j,
              clearLoadingGesture: M,
              gestureHandlers: P,
              gestureVariant: F,
              isLoading: I,
              setGestureState: L,
              setVariant: R,
              variants: ee,
            } = Q({
              cycleOrder: gi,
              defaultVariant: `xE4SDhndv`,
              ref: r,
              variant: u,
              variantClassNames: vi,
            }),
            z = wi(e, ee),
            { activeVariantCallback: B, delay: te } = ge(k),
            V = B(async (...e) => {
              R(`ug4FrLxJu`);
            }),
            U = B(async (...e) => {
              R(`xE4SDhndv`);
            }),
            ne = B(async (...e) => {
              R(`qcgWviSPW`);
            }),
            re = B(async (...e) => {
              R(`ZLJzdvQ8h`);
            }),
            ie = B(async (...e) => {
              R(`zVM3DKXtJ`);
            }),
            ae = N(_i);
          return m(A, {
            id: l ?? i,
            children: m(xi, {
              animate: ee,
              initial: !1,
              children: m(bi, {
                value: yi,
                children: v(O.div, {
                  ...D,
                  ...P,
                  className: N(ae, `framer-9tme3y`, c, j),
                  'data-framer-name': `All Active`,
                  layoutDependency: z,
                  layoutId: `xE4SDhndv`,
                  ref: r,
                  style: { ...s },
                  ...mi(
                    {
                      qcgWviSPW: { 'data-framer-name': `Archive Active` },
                      ug4FrLxJu: { 'data-framer-name': `Home Active` },
                      ZLJzdvQ8h: { 'data-framer-name': `Work Active` },
                      zVM3DKXtJ: { 'data-framer-name': `Contact Active` },
                    },
                    k,
                    F
                  ),
                  children: [
                    m(J, {
                      href: f,
                      motionChild: !0,
                      nodeId: `oyVZIU6L_`,
                      openInNewTab: h,
                      scopeId: `x9JxN9scX`,
                      children: m(O.a, {
                        className: `framer-uijz4x framer-12fazzh`,
                        'data-framer-name': `1`,
                        'data-highlight': !0,
                        layoutDependency: z,
                        layoutId: `oyVZIU6L_`,
                        onMouseEnter: V,
                        style: { opacity: 1 },
                        variants: {
                          qcgWviSPW: { opacity: 0.5 },
                          ZLJzdvQ8h: { opacity: 0.5 },
                          zVM3DKXtJ: { opacity: 0.5 },
                        },
                        ...mi({ ug4FrLxJu: { onMouseEnter: void 0, onMouseLeave: U } }, k, F),
                        children: m(Y, {
                          children: m(H, {
                            className: `framer-mgrps-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: z,
                            layoutId: `iy8MOexI1-container`,
                            nodeId: `iy8MOexI1`,
                            rendersWithMotion: !0,
                            scopeId: `x9JxN9scX`,
                            children: m($, {
                              color: `var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153))`,
                              font: {
                                fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                fontSize: `14px`,
                                fontStyle: `normal`,
                                fontWeight: 600,
                                letterSpacing: `0px`,
                                lineHeight: `17px`,
                              },
                              height: `100%`,
                              id: `iy8MOexI1`,
                              layoutId: `iy8MOexI1`,
                              padding: `0px`,
                              reverse: !1,
                              stagger: 55,
                              tag: `p`,
                              text: d,
                              textTransform: `none`,
                              transition: {
                                delay: 0,
                                duration: 0.4,
                                ease: [0.82, 0.08, 0.29, 1],
                                type: `tween`,
                              },
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    m(J, {
                      href: y,
                      motionChild: !0,
                      nodeId: `GJ8oPRzty`,
                      openInNewTab: b,
                      scopeId: `x9JxN9scX`,
                      children: m(O.a, {
                        className: `framer-tjmgqh framer-12fazzh`,
                        'data-framer-name': `2`,
                        'data-highlight': !0,
                        layoutDependency: z,
                        layoutId: `GJ8oPRzty`,
                        onMouseEnter: ne,
                        style: { opacity: 1 },
                        variants: {
                          qcgWviSPW: { opacity: 1 },
                          ug4FrLxJu: { opacity: 0.5 },
                          ZLJzdvQ8h: { opacity: 0.5 },
                          zVM3DKXtJ: { opacity: 0.5 },
                        },
                        ...mi({ qcgWviSPW: { onMouseEnter: void 0, onMouseLeave: U } }, k, F),
                        children: m(Y, {
                          children: m(H, {
                            className: `framer-11hl7mm-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: z,
                            layoutId: `vXda8ibcO-container`,
                            nodeId: `vXda8ibcO`,
                            rendersWithMotion: !0,
                            scopeId: `x9JxN9scX`,
                            children: m($, {
                              color: `var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153))`,
                              font: {
                                fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                fontSize: `14px`,
                                fontStyle: `normal`,
                                fontWeight: 600,
                                letterSpacing: `0px`,
                                lineHeight: `17px`,
                              },
                              height: `100%`,
                              id: `vXda8ibcO`,
                              layoutId: `vXda8ibcO`,
                              padding: `0px`,
                              reverse: !1,
                              stagger: 55,
                              tag: `p`,
                              text: g,
                              textTransform: `none`,
                              transition: {
                                delay: 0,
                                duration: 0.4,
                                ease: [0.82, 0.08, 0.29, 1],
                                type: `tween`,
                              },
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    m(J, {
                      href: S,
                      motionChild: !0,
                      nodeId: `dtd8hMloD`,
                      openInNewTab: C,
                      scopeId: `x9JxN9scX`,
                      children: m(O.a, {
                        className: `framer-1l4tx1y framer-12fazzh`,
                        'data-framer-name': `3`,
                        'data-highlight': !0,
                        layoutDependency: z,
                        layoutId: `dtd8hMloD`,
                        onMouseEnter: re,
                        style: { opacity: 1 },
                        variants: {
                          qcgWviSPW: { opacity: 0.5 },
                          ug4FrLxJu: { opacity: 0.5 },
                          ZLJzdvQ8h: { opacity: 1 },
                          zVM3DKXtJ: { opacity: 0.5 },
                        },
                        ...mi({ ZLJzdvQ8h: { onMouseEnter: void 0, onMouseLeave: U } }, k, F),
                        children: m(Y, {
                          children: m(H, {
                            className: `framer-14ebavv-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: z,
                            layoutId: `dL6s7w7op-container`,
                            nodeId: `dL6s7w7op`,
                            rendersWithMotion: !0,
                            scopeId: `x9JxN9scX`,
                            children: m($, {
                              color: `var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153))`,
                              font: {
                                fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                fontSize: `14px`,
                                fontStyle: `normal`,
                                fontWeight: 600,
                                letterSpacing: `0px`,
                                lineHeight: `17px`,
                              },
                              height: `100%`,
                              id: `dL6s7w7op`,
                              layoutId: `dL6s7w7op`,
                              padding: `0px`,
                              reverse: !1,
                              stagger: 55,
                              tag: `p`,
                              text: x,
                              textTransform: `none`,
                              transition: {
                                delay: 0,
                                duration: 0.4,
                                ease: [0.82, 0.08, 0.29, 1],
                                type: `tween`,
                              },
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    m(J, {
                      href: T,
                      motionChild: !0,
                      nodeId: `cMQ0oNFLD`,
                      openInNewTab: E,
                      scopeId: `x9JxN9scX`,
                      children: m(O.a, {
                        className: `framer-1v4uxuf framer-12fazzh`,
                        'data-framer-name': `4`,
                        'data-highlight': !0,
                        layoutDependency: z,
                        layoutId: `cMQ0oNFLD`,
                        onMouseEnter: ie,
                        style: { opacity: 1 },
                        variants: {
                          qcgWviSPW: { opacity: 0.5 },
                          ug4FrLxJu: { opacity: 0.5 },
                          ZLJzdvQ8h: { opacity: 0.5 },
                          zVM3DKXtJ: { opacity: 1 },
                        },
                        ...mi({ zVM3DKXtJ: { onMouseEnter: void 0, onMouseLeave: U } }, k, F),
                        children: m(Y, {
                          children: m(H, {
                            className: `framer-1bodzwk-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: z,
                            layoutId: `h2dYp1PoD-container`,
                            nodeId: `h2dYp1PoD`,
                            rendersWithMotion: !0,
                            scopeId: `x9JxN9scX`,
                            children: m($, {
                              color: `var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153))`,
                              font: {
                                fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                fontSize: `14px`,
                                fontStyle: `normal`,
                                fontWeight: 600,
                                letterSpacing: `0px`,
                                lineHeight: `17px`,
                              },
                              height: `100%`,
                              id: `h2dYp1PoD`,
                              layoutId: `h2dYp1PoD`,
                              padding: `0px`,
                              reverse: !1,
                              stagger: 55,
                              tag: `p`,
                              text: w,
                              textTransform: `none`,
                              transition: {
                                delay: 0,
                                duration: 0.4,
                                ease: [0.82, 0.08, 0.29, 1],
                                type: `tween`,
                              },
                              width: `100%`,
                            }),
                          }),
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
          `.framer-uI4me.framer-12fazzh, .framer-uI4me .framer-12fazzh { display: block; }`,
          `.framer-uI4me.framer-9tme3y { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 192px; }`,
          `.framer-uI4me .framer-uijz4x, .framer-uI4me .framer-tjmgqh, .framer-uI4me .framer-1l4tx1y, .framer-uI4me .framer-1v4uxuf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-uI4me .framer-mgrps-container, .framer-uI4me .framer-11hl7mm-container, .framer-uI4me .framer-14ebavv-container, .framer-uI4me .framer-1bodzwk-container { flex: none; height: auto; mix-blend-mode: difference; position: relative; width: auto; }`,
        ],
        `framer-uI4me`
      )),
      (Ei = Ti),
      (Ti.displayName = `Menu Links`),
      (Ti.defaultProps = { height: 17, width: 191.5 }),
      I(Ti, {
        variant: {
          options: [`xE4SDhndv`, `ug4FrLxJu`, `qcgWviSPW`, `ZLJzdvQ8h`, `zVM3DKXtJ`],
          optionTitles: [
            `All Active`,
            `Home Active`,
            `Archive Active`,
            `Work Active`,
            `Contact Active`,
          ],
          title: `Variant`,
          type: W.Enum,
        },
        V4S60oOTR: { defaultValue: `Home, `, title: `1`, type: W.String },
        vkG_P2nP8: { title: `Link 1`, type: W.Link },
        DxrPeKSZi: { defaultValue: !1, title: `New Tab 1`, type: W.Boolean },
        olQrAbdLT: { defaultValue: `Archive, `, title: `2`, type: W.String },
        qWUpLfuiL: { title: `Link 2`, type: W.Link },
        vXZKQGCTP: { defaultValue: !1, title: `New Tab 2`, type: W.Boolean },
        YjodoOjpE: { defaultValue: `Work, `, title: `3`, type: W.String },
        ycxJzIaoA: { title: `Link 3`, type: W.Link },
        R3f3pz6dW: { defaultValue: !1, title: `New Tab 3`, type: W.Boolean },
        Jaj0J8v2n: { defaultValue: `Contact`, title: `4`, type: W.String },
        Ki3TDRD07: { title: `Link 4`, type: W.Link },
        sxQGmBuKT: { defaultValue: !1, title: `New Tab 4`, type: W.Boolean },
      }),
      L(
        Ti,
        [
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
            ],
          },
          ...hi,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Oi(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi = e(() => {
    (x(),
      R(),
      j(),
      n(),
      pi(),
      We(),
      Di(),
      (ki = z(Ei)),
      (Ai = V(O.header)),
      (ji = [`PoWXwXBiw`, `goiL7wajJ`, `MNXJYYH5o`]),
      (Mi = `framer-E6X9r`),
      (Ni = {
        goiL7wajJ: `framer-v-fzgqfp`,
        MNXJYYH5o: `framer-v-g2ni5c`,
        PoWXwXBiw: `framer-v-1rkyevh`,
      }),
      (Pi = { damping: 60, delay: 0, mass: 1, stiffness: 300, type: `spring` }),
      (Fi = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -94,
      }),
      (Ii = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Li = ({ value: e, children: t }) => {
        let n = s(k),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(k.Provider, { value: i, children: t });
      }),
      (Ri = O.create(o)),
      (zi = { L: `PoWXwXBiw`, M: `goiL7wajJ`, S: `MNXJYYH5o` }),
      (Bi = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: zi[r.variant] ?? r.variant ?? `PoWXwXBiw`,
      })),
      (Vi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Hi = G(
        d(function (e, t) {
          let n = _(null),
            r = t ?? n,
            i = p(),
            { activeLocale: a, setLocale: s } = K(),
            c = X(),
            { style: l, className: u, layoutId: d, variant: f, ...h } = Bi(e),
            {
              baseVariant: g,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = Q({
              cycleOrder: ji,
              defaultVariant: `PoWXwXBiw`,
              ref: r,
              variant: f,
              variantClassNames: Ni,
            }),
            D = Vi(e, E),
            k = N(Mi, fi, Ue);
          Se();
          let j = () => ![`goiL7wajJ`, `MNXJYYH5o`].includes(g);
          return m(A, {
            id: d ?? i,
            children: m(Ri, {
              animate: E,
              initial: !1,
              children: m(Li, {
                value: Ii,
                children: v(Ai, {
                  ...h,
                  ...x,
                  __framer__animate: { transition: Pi },
                  __framer__animateOnce: !1,
                  __framer__scrollDirection: { direction: `down`, target: Fi },
                  __framer__styleAppearEffectEnabled: !0,
                  __framer__threshold: 0.5,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: N(k, `framer-1rkyevh`, u, y),
                  'data-framer-name': `L`,
                  layoutDependency: D,
                  layoutId: `PoWXwXBiw`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                    ...l,
                  },
                  ...Oi(
                    {
                      goiL7wajJ: { 'data-framer-name': `M` },
                      MNXJYYH5o: { 'data-framer-name': `S` },
                    },
                    g,
                    S
                  ),
                  children: [
                    v(O.nav, {
                      className: `framer-1gz7i6n`,
                      'data-framer-name': `Nav Menu`,
                      layoutDependency: D,
                      layoutId: `yspFInms1`,
                      children: [
                        m(J, {
                          href: { hash: `:MHiTKHdUJ`, webPageId: `augiA20Il` },
                          motionChild: !0,
                          nodeId: `BJKU5rP6Z`,
                          openInNewTab: !1,
                          scopeId: `hZs2GDUCT`,
                          children: m(O.a, {
                            className: `framer-jkx7b1 framer-fxx7td`,
                            'data-framer-name': `Logo`,
                            layoutDependency: D,
                            layoutId: `BJKU5rP6Z`,
                            children: m(P, {
                              __fromCanvasComponent: !0,
                              children: m(o, {
                                children: m(O.p, {
                                  className: `framer-styles-preset-feeaq9`,
                                  'data-styles-preset': `DpImcAo6o`,
                                  children: `Palmer®`,
                                }),
                              }),
                              className: `framer-1p59sgy`,
                              'data-framer-name': `Text`,
                              fonts: [`Inter`],
                              layoutDependency: D,
                              layoutId: `f4J6wEwJz`,
                              style: { '--framer-paragraph-spacing': `0px` },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        v(O.div, {
                          className: `framer-1t5hlt2`,
                          'data-framer-name': `Items`,
                          layoutDependency: D,
                          layoutId: `lBiGnmrth`,
                          children: [
                            v(O.div, {
                              className: `framer-1cv75im`,
                              'data-framer-name': `Menu`,
                              layoutDependency: D,
                              layoutId: `wjHg7ZbiI`,
                              children: [
                                m(P, {
                                  __fromCanvasComponent: !0,
                                  children: m(o, {
                                    children: m(O.p, {
                                      className: `framer-styles-preset-8vm16z`,
                                      'data-styles-preset': `uDh9bONtj`,
                                      children: `Quick Links`,
                                    }),
                                  }),
                                  className: `framer-of5ztt`,
                                  'data-framer-name': `Heading`,
                                  fonts: [`Inter`],
                                  layoutDependency: D,
                                  layoutId: `reU2mPNyE`,
                                  style: { '--framer-paragraph-spacing': `0px` },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                m(te, {
                                  links: [
                                    {
                                      href: { webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `VjvTIQXE3` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `TMUEGlXDC` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Yb_WXsK4v` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `VjvTIQXE3` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `TMUEGlXDC` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Yb_WXsK4v` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `VjvTIQXE3` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `TMUEGlXDC` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Yb_WXsK4v` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    m(Y, {
                                      height: 17,
                                      width: `300px`,
                                      y:
                                        (c?.y || 0) +
                                        0 +
                                        (((c?.height || 90) - 0 - 90) / 2 + 0 + 0) +
                                        26 +
                                        0 +
                                        0 +
                                        20,
                                      ...Oi(
                                        {
                                          MNXJYYH5o: {
                                            y:
                                              (c?.y || 0) +
                                              0 +
                                              (((c?.height || 200) - 0 - 90) / 2 + 0 + 0) +
                                              26 +
                                              0 +
                                              0 +
                                              20,
                                          },
                                        },
                                        g,
                                        S
                                      ),
                                      children: m(H, {
                                        className: `framer-1dp2uu0-container`,
                                        layoutDependency: D,
                                        layoutId: `R1MdponQl-container`,
                                        nodeId: `R1MdponQl`,
                                        rendersWithMotion: !0,
                                        scopeId: `hZs2GDUCT`,
                                        children: m(Ei, {
                                          DxrPeKSZi: !1,
                                          height: `100%`,
                                          id: `R1MdponQl`,
                                          Jaj0J8v2n: `Contact`,
                                          Ki3TDRD07: e[3],
                                          layoutId: `R1MdponQl`,
                                          olQrAbdLT: `Gallery, `,
                                          qWUpLfuiL: e[1],
                                          R3f3pz6dW: !1,
                                          style: { width: `100%` },
                                          sxQGmBuKT: !1,
                                          V4S60oOTR: `Home, `,
                                          variant: `xE4SDhndv`,
                                          vkG_P2nP8: e[0],
                                          vXZKQGCTP: !1,
                                          width: `100%`,
                                          ycxJzIaoA: e[2],
                                          YjodoOjpE: `Work, `,
                                          ...Oi(
                                            {
                                              goiL7wajJ: {
                                                Ki3TDRD07: e[7],
                                                qWUpLfuiL: e[5],
                                                vkG_P2nP8: e[4],
                                                ycxJzIaoA: e[6],
                                              },
                                              MNXJYYH5o: {
                                                Ki3TDRD07: e[11],
                                                qWUpLfuiL: e[9],
                                                vkG_P2nP8: e[8],
                                                ycxJzIaoA: e[10],
                                              },
                                            },
                                            g,
                                            S
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                            j() &&
                              v(O.div, {
                                className: `framer-h7l4e`,
                                'data-framer-name': `Info`,
                                layoutDependency: D,
                                layoutId: `qWwJEVnpd`,
                                children: [
                                  m(P, {
                                    __fromCanvasComponent: !0,
                                    children: m(o, {
                                      children: m(O.p, {
                                        className: `framer-styles-preset-8vm16z`,
                                        'data-styles-preset': `uDh9bONtj`,
                                        children: `Based in Tokyo 東京`,
                                      }),
                                    }),
                                    className: `framer-13yqmqz`,
                                    'data-framer-name': `Location`,
                                    fonts: [`Inter`],
                                    layoutDependency: D,
                                    layoutId: `okiBRtNb3`,
                                    style: { '--framer-paragraph-spacing': `0px` },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  m(P, {
                                    __fromCanvasComponent: !0,
                                    children: m(o, {
                                      children: m(O.p, {
                                        className: `framer-styles-preset-8vm16z`,
                                        'data-styles-preset': `uDh9bONtj`,
                                        style: {
                                          '--framer-text-color': `var(--extracted-r6o4lv, var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153)))`,
                                        },
                                        children: `Art Director + Framer Developer`,
                                      }),
                                    }),
                                    className: `framer-19o0x58`,
                                    'data-framer-name': `Date`,
                                    fonts: [`Inter`],
                                    layoutDependency: D,
                                    layoutId: `oMXr2x_zg`,
                                    style: {
                                      '--extracted-r6o4lv': `var(--token-af1df47b-ea84-448e-bdf0-a5ce0f875a59, rgb(153, 153, 153))`,
                                      '--framer-paragraph-spacing': `0px`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    m(O.div, {
                      className: `framer-mmv1b3`,
                      'data-framer-name': `Line`,
                      layoutDependency: D,
                      layoutId: `Wr0EPHstp`,
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
          `.framer-E6X9r.framer-fxx7td, .framer-E6X9r .framer-fxx7td { display: block; }`,
          `.framer-E6X9r.framer-1rkyevh { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-E6X9r .framer-1gz7i6n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 26px 140px 26px 24px; position: relative; width: 100%; }`,
          `.framer-E6X9r .framer-jkx7b1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-E6X9r .framer-1p59sgy { flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: auto; }`,
          `.framer-E6X9r .framer-1t5hlt2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 270px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-E6X9r .framer-1cv75im, .framer-E6X9r .framer-h7l4e { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: center; max-width: 300px; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-E6X9r .framer-of5ztt, .framer-E6X9r .framer-13yqmqz, .framer-E6X9r .framer-19o0x58 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-E6X9r .framer-1dp2uu0-container { align-self: stretch; flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-E6X9r .framer-mmv1b3 { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }`,
          `.framer-E6X9r.framer-v-fzgqfp.framer-1rkyevh { width: 810px; }`,
          `.framer-E6X9r.framer-v-g2ni5c.framer-1rkyevh { width: 390px; }`,
          `.framer-E6X9r.framer-v-g2ni5c .framer-1gz7i6n { padding: 26px 24px 26px 24px; }`,
          ...di,
          ...nt,
        ],
        `framer-E6X9r`
      )),
      (Ui = Hi),
      (Hi.displayName = `Static Navigation Bar`),
      (Hi.defaultProps = { height: 90, width: 1200 }),
      I(Hi, {
        variant: {
          options: [`PoWXwXBiw`, `goiL7wajJ`, `MNXJYYH5o`],
          optionTitles: [`L`, `M`, `S`],
          title: `Variant`,
          type: W.Enum,
        },
      }),
      L(
        Hi,
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
          ...ki,
          ...B(ui),
          ...B(at),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Gi,
  Ki,
  qi,
  Ji,
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
  oa,
  sa,
  ca,
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
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea = e(() => {
    (x(),
      R(),
      j(),
      n(),
      vt(),
      gn(),
      Be(),
      ke(),
      Wi(),
      Ln(),
      hr(),
      Or(),
      Pe(),
      qe(),
      Ke(),
      (Gi = z(Ui)),
      (Ki = z(De)),
      (qi = V(P)),
      (Ji = z(Re)),
      (Yi = z(mr)),
      (Xi = z(In)),
      (Zi = z(_t)),
      (Qi = z(Dr)),
      ($i = F(q)),
      (ea = z(hn)),
      (ta = z(ze)),
      (na = {
        mKj7uxqJq: `(max-width: 809.98px)`,
        SxIMbl8sq: `(min-width: 1200px)`,
        t7zptj0q5: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (ra = () => typeof document < `u`),
      (ia = `framer-UOWM4`),
      (aa = {
        mKj7uxqJq: `framer-v-1j0k7bl`,
        SxIMbl8sq: `framer-v-1obgs3g`,
        t7zptj0q5: `framer-v-ntpwop`,
      }),
      (oa = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (sa = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (ca = (e, t) => `translateY(-50%) ${t}`),
      (la = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 60, delay: 4.8, mass: 1, stiffness: 300, type: `spring` },
        x: 0,
        y: 0,
      }),
      (ua = {
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
      (da = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.3, delay: 5.5, duration: 0.9, type: `spring` },
        x: 0,
        y: 0,
      }),
      (fa = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 20,
      }),
      (pa = {
        mKj7uxqJq: [
          `.framer-UOWM4 .framer-y84tos { gap: 60px; }`,
          `.framer-UOWM4 .framer-w97ppa { flex-direction: column; gap: 60px; padding: 0px 20px 0px 20px; }`,
          `.framer-UOWM4 .framer-pifquk { flex: none; order: 1; overflow: hidden; width: 100%; }`,
          `.framer-UOWM4 .framer-i78b0z-container { flex: none; order: 2; width: 100%; }`,
        ],
        t7zptj0q5: [
          `.framer-UOWM4 .framer-y84tos { gap: 80px; }`,
          `.framer-UOWM4 .framer-w97ppa { align-content: flex-start; align-items: flex-start; flex-direction: column; }`,
          `.framer-UOWM4 .framer-pifquk { flex: none; order: 1; overflow: hidden; width: 100%; }`,
          `.framer-UOWM4 .framer-i78b0z-container { flex: none; order: 2; width: 100%; }`,
          `.framer-UOWM4 .framer-gsozwe-container { right: 12px; }`,
        ],
      }),
      (ma = Object.keys(pa)),
      (ha = { mKj7uxqJq: `.framer-1j0k7bl-override`, t7zptj0q5: `.framer-ntpwop-override` }),
      (ga = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-UOWM4.framer-bjd28a, .framer-UOWM4 .framer-bjd28a { display: block; }`,
        `.framer-UOWM4.framer-1obgs3g { --selection-background-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff) /* {"name":"White"} */; --selection-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000) /* {"name":"Black"} */; align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-UOWM4 .framer-7xk2gx-container { flex: none; height: auto; left: 50%; max-width: 1480px; order: -1000; position: var(--framer-canvas-fixed-position, fixed); top: 0px; transform: translateX(-50%); width: 100%; z-index: 10; }`,
        `.framer-UOWM4 .framer-1oriq9n { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-UOWM4 .framer-y84tos { align-content: flex-start; align-items: flex-start; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; max-width: 1480px; order: 1002; overflow: hidden; padding: var(--eakuq3); position: relative; width: 100%; }`,
        `.framer-UOWM4 .framer-1kdktzv-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-UOWM4 .framer-w97ppa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-UOWM4 .framer-pifquk { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 870px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-UOWM4 .framer-13i08i6 { --framer-paragraph-spacing: 0px; flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: auto; }`,
        `.framer-UOWM4 .framer-k7jwxk { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 540px; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 1px; z-index: 1; }`,
        `.framer-UOWM4 .framer-1nzq06x-container { flex: none; height: 198px; left: calc(12.592592592592613% - 136px / 2); position: absolute; top: calc(-37.530864197530846% - 198px / 2); width: 136px; }`,
        `.framer-UOWM4 .framer-796qqj { --framer-paragraph-spacing: 0px; flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-UOWM4 .framer-i78b0z-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-UOWM4 .framer-1ag4t5x-container { flex: none; height: auto; max-width: 1480px; order: 1003; position: relative; width: 100%; }`,
        `.framer-UOWM4 .framer-1yx9816-container { flex: none; height: auto; order: 1004; position: relative; width: auto; }`,
        `.framer-UOWM4 .framer-gsozwe-container { flex: none; height: auto; order: 1005; position: var(--framer-canvas-fixed-position, fixed); right: 12px; top: calc(min(var(--framer-viewport-height, 100%), 100%) * 0.5000000000000002); width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,
        `.framer-UOWM4 .framer-1n9aes-container { bottom: calc(calc(100% - min(var(--framer-viewport-height, 100%), 100%)) + 60px); flex: none; height: auto; order: 1006; position: var(--framer-canvas-fixed-position, fixed); right: 20px; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
        ...tt,
        ...Qe,
        `.framer-UOWM4[data-selection="true"] * ::selection, .framer-UOWM4 [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
      ]),
      (_a = {
        mKj7uxqJq: `(max-width: 809.98px)`,
        SxIMbl8sq: `(min-width: 1200px)`,
        t7zptj0q5: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (va = ({ value: e }) =>
        he()
          ? null
          : m(`style`, { dangerouslySetInnerHTML: { __html: e }, 'data-framer-html-style': `` })),
      (ya = { L: `SxIMbl8sq`, M: `t7zptj0q5`, S: `mKj7uxqJq` }),
      (ba = ({
        fAQPadding: e,
        footerButtonLink: t,
        footerButtonText: n,
        height: r,
        id: i,
        newTab: a,
        smoothScroll: o,
        width: s,
        ...c
      }) => ({
        ...c,
        AXRGuklf7: o ?? c.AXRGuklf7 ?? !0,
        HIR7gZ2PR: a ?? c.HIR7gZ2PR,
        jkuXVKEYY: t ?? c.jkuXVKEYY,
        QBtj4RI16: n ?? c.QBtj4RI16 ?? `Back To Top`,
        variant: ya[c.variant] ?? c.variant ?? `SxIMbl8sq`,
        yqYGaLxRH: e ?? c.yqYGaLxRH ?? `180px 0px 0px 0px`,
      })),
      (xa = { component: ze, variant: `PdMEYMdQg` }),
      (Sa = d(function (e, t) {
        let n = _(null),
          r = t ?? n,
          i = p(),
          { activeLocale: a, setLocale: s } = K(),
          {
            style: c,
            className: l,
            layoutId: u,
            variant: d,
            QBtj4RI16: f,
            jkuXVKEYY: h,
            yqYGaLxRH: g,
            AXRGuklf7: y,
            HIR7gZ2PR: b,
            children: x,
            ...S
          } = ba(e),
          [C, w] = be(d, na, !1),
          T = N(ia, Ze, $e),
          E = () => !!(!ra() || [`t7zptj0q5`, `mKj7uxqJq`].includes(C)),
          D = () => (ra() ? ![`t7zptj0q5`, `mKj7uxqJq`].includes(C) : !0);
        return (
          oe({ '16nradr': xa }),
          m(ce.Provider, {
            value: { isLayoutTemplate: !0, primaryVariantId: `SxIMbl8sq`, variantClassNames: aa },
            children: v(A, {
              id: u ?? i,
              children: [
                m(va, {
                  value: `:root body { background: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)); }`,
                }),
                v(O.div, {
                  ...S,
                  className: N(T, `framer-1obgs3g`, l),
                  'data-framer-cursor': `16nradr`,
                  'data-layout-template': !0,
                  'data-selection': !0,
                  ref: r,
                  style: { ...c },
                  children: [
                    m(Y, {
                      height: 90,
                      width: `min(100vw, 1480px)`,
                      y: 0,
                      children: m(q, {
                        className: `framer-7xk2gx-container`,
                        'data-framer-layout-hint-center-x': !0,
                        layoutScroll: !0,
                        nodeId: `wkIJ9GL9y`,
                        scopeId: `pWHvmmtNE`,
                        children: m(Z, {
                          breakpoint: C,
                          overrides: {
                            mKj7uxqJq: { variant: `MNXJYYH5o` },
                            t7zptj0q5: { variant: `goiL7wajJ` },
                          },
                          children: m(Ui, {
                            height: `100%`,
                            id: `wkIJ9GL9y`,
                            layoutId: `wkIJ9GL9y`,
                            style: { maxWidth: `100%`, width: `100%` },
                            variant: `PoWXwXBiw`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    x,
                    m(`div`, { className: `framer-1oriq9n` }),
                    v(`section`, {
                      className: `framer-y84tos`,
                      'data-framer-name': `FAQ`,
                      style: { '--eakuq3': oa(g) },
                      children: [
                        m(Y, {
                          height: 24,
                          width: `calc(min(100vw, 1480px) - ${g * 2}px)`,
                          children: m(q, {
                            className: `framer-1kdktzv-container`,
                            nodeId: `pePte5frW`,
                            scopeId: `pWHvmmtNE`,
                            children: m(Z, {
                              breakpoint: C,
                              overrides: {
                                mKj7uxqJq: { variant: `CmSf9J7E0` },
                                t7zptj0q5: { variant: `kQZZjN_Db` },
                              },
                              children: m(De, {
                                height: `100%`,
                                Hq7BZwPem: `(WDX® — 01)`,
                                id: `pePte5frW`,
                                layoutId: `pePte5frW`,
                                NHubkDs7R: `Clarifications`,
                                pWoyTVtQ4: `© Help Center ヘルプ`,
                                style: { width: `100%` },
                                variant: `XFF72MIUC`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        v(`div`, {
                          className: `framer-w97ppa`,
                          'data-framer-name': `Content`,
                          children: [
                            E() &&
                              m(`div`, {
                                className: `framer-pifquk hidden-1obgs3g`,
                                'data-framer-name': `Responsive Heading`,
                                children: m(qi, {
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
                                  children: m(o, {
                                    children: m(`h1`, {
                                      className: `framer-styles-preset-je0rn0`,
                                      'data-styles-preset': `YMtdKmiBu`,
                                      style: { '--framer-text-alignment': `left` },
                                      children: `FAQ.`,
                                    }),
                                  }),
                                  className: `framer-13i08i6`,
                                  'data-framer-name': `Text`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            D() &&
                              v(`div`, {
                                className: `framer-k7jwxk hidden-ntpwop hidden-1j0k7bl`,
                                'data-framer-name': `Heading`,
                                children: [
                                  m(Y, {
                                    height: 198,
                                    width: `136px`,
                                    children: m(q, {
                                      className: `framer-1nzq06x-container`,
                                      nodeId: `yfZpJtO98`,
                                      scopeId: `pWHvmmtNE`,
                                      children: m(Re, {
                                        CXo7fyVBS: sa(
                                          {
                                            pixelHeight: 1280,
                                            pixelWidth: 896,
                                            src: `https://framerusercontent.com/images/fd3PfavaULEOqoI2kVj4XmiR5g.png?width=896&height=1280`,
                                            srcSet: `https://framerusercontent.com/images/fd3PfavaULEOqoI2kVj4XmiR5g.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/fd3PfavaULEOqoI2kVj4XmiR5g.png?width=896&height=1280 896w`,
                                          },
                                          ``
                                        ),
                                        height: `100%`,
                                        id: `yfZpJtO98`,
                                        layoutId: `yfZpJtO98`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: `RSG36cpMb`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  m(P, {
                                    __fromCanvasComponent: !0,
                                    children: m(o, {
                                      children: v(`h3`, {
                                        className: `framer-styles-preset-sng7in`,
                                        'data-styles-preset': `bLxN69a46`,
                                        children: [
                                          `Clarifying Deliverable's  Before They Begin`,
                                          m(`br`, {}),
                                          `with Real Process and  Honest アンサー.`,
                                        ],
                                      }),
                                    }),
                                    className: `framer-796qqj`,
                                    'data-framer-name': `Text`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            m(Z, {
                              breakpoint: C,
                              overrides: {
                                mKj7uxqJq: {
                                  width: `calc((min(100vw, 1480px) - ${g * 2}px) - 40px)`,
                                },
                                t7zptj0q5: {
                                  width: `calc((min(100vw, 1480px) - ${g * 2}px) - 48px)`,
                                },
                              },
                              children: m(Y, {
                                height: 638,
                                width: `max(((min(100vw, 1480px) - ${g * 2}px) - 128px) / 2, 1px)`,
                                children: m(q, {
                                  className: `framer-i78b0z-container`,
                                  nodeId: `kBGE3jEwm`,
                                  scopeId: `pWHvmmtNE`,
                                  children: m(Z, {
                                    breakpoint: C,
                                    overrides: {
                                      mKj7uxqJq: { variant: `KtcjtZQyH` },
                                      t7zptj0q5: { variant: `KtcjtZQyH` },
                                    },
                                    children: m(mr, {
                                      height: `100%`,
                                      id: `kBGE3jEwm`,
                                      layoutId: `kBGE3jEwm`,
                                      style: { width: `100%` },
                                      variant: `kC1V2m6rR`,
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
                    m(Y, {
                      height: 1373,
                      width: `min(100vw, 1480px)`,
                      children: m(q, {
                        className: `framer-1ag4t5x-container`,
                        nodeId: `oo2SZz8g4`,
                        scopeId: `pWHvmmtNE`,
                        children: m(Z, {
                          breakpoint: C,
                          overrides: {
                            mKj7uxqJq: { variant: `F1PWQk2Ec` },
                            t7zptj0q5: { variant: `fol9xHtCS` },
                          },
                          children: m(In, {
                            height: `100%`,
                            id: `oo2SZz8g4`,
                            layoutId: `oo2SZz8g4`,
                            OwSWNpHNf: h,
                            RWfjd3mjg: b,
                            style: { maxWidth: `100%`, width: `100%` },
                            variant: `er_eF3Aj4`,
                            VShZDQ_S6: y,
                            width: `100%`,
                            xqvBbSQlQ: f,
                          }),
                        }),
                      }),
                    }),
                    m(Y, {
                      children: m(q, {
                        className: `framer-1yx9816-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `YmHuf1y2h`,
                        scopeId: `pWHvmmtNE`,
                        children: m(_t, {
                          height: `100%`,
                          id: `YmHuf1y2h`,
                          intensity: 16,
                          layoutId: `YmHuf1y2h`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    m(Y, {
                      height: 28,
                      y: 486,
                      children: m($i, {
                        animate: la,
                        className: `framer-gsozwe-container`,
                        'data-framer-appear-id': `gsozwe`,
                        'data-framer-layout-hint-center-y': !0,
                        'data-framer-name': `Social Button`,
                        initial: ua,
                        layoutScroll: !0,
                        name: `Social Button`,
                        nodeId: `gSFzkBLe4`,
                        optimized: !0,
                        rendersWithMotion: !0,
                        scopeId: `pWHvmmtNE`,
                        transformTemplate: ca,
                        children: m(Dr, {
                          height: `100%`,
                          HUPO7Yj4E: `https://x.com/MandroDesign`,
                          id: `gSFzkBLe4`,
                          layoutId: `gSFzkBLe4`,
                          name: `Social Button`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    m(Y, {
                      height: 40,
                      y: 900,
                      children: m($i, {
                        animate: da,
                        className: `framer-1n9aes-container`,
                        'data-framer-appear-id': `1n9aes`,
                        initial: fa,
                        layoutScroll: !0,
                        nodeId: `b5pYLz8Gt`,
                        optimized: !0,
                        rendersWithMotion: !0,
                        scopeId: `pWHvmmtNE`,
                        children: m(hn, {
                          height: `100%`,
                          id: `b5pYLz8Gt`,
                          layoutId: `b5pYLz8Gt`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                m(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Ca = (e) =>
        e === se.canvas || e === se.export
          ? [
              ...ga,
              ...ma.flatMap((e) => {
                let t = ha[e];
                return pa[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...ga, ...ma.map((e) => `@media ${_a[e]} { ${pa[e].join(` `)} }`)]),
      (wa = G(Sa, Ca, `framer-UOWM4`)),
      (Ta = wa),
      (wa.displayName = `Inner Page Template`),
      (wa.defaultProps = { height: 3e3, width: 1200 }),
      I(wa, {
        QBtj4RI16: {
          defaultValue: `Back To Top`,
          displayTextArea: !1,
          title: `Footer Button Text`,
          type: W.String,
        },
        jkuXVKEYY: { title: `Footer Button Link`, type: W.Link },
        yqYGaLxRH: { defaultValue: `180px 0px 0px 0px`, title: `FAQ Padding`, type: W.Padding },
        AXRGuklf7: { defaultValue: !0, title: `Smooth Scroll`, type: W.Boolean },
        HIR7gZ2PR: { defaultValue: !1, title: `New Tab`, type: W.Boolean },
      }),
      L(
        wa,
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
          ...Gi,
          ...Ki,
          ...Ji,
          ...Yi,
          ...Xi,
          ...Zi,
          ...Qi,
          ...ea,
          ...ta,
          ...B(Ge),
          ...B(Je),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Da({ webPageId: e, children: t, style: n, ...r }) {
  let i =
    {
      augiA20Il: {
        CyUreTA4c: !0,
        jkuXVKEYY: { href: { hash: `:MHiTKHdUJ`, webPageId: `augiA20Il` } },
        mq3ybqrZM: `Back To Top`,
      },
      DHcmosPD8: {
        AXRGuklf7: !0,
        HIR7gZ2PR: !1,
        jkuXVKEYY: { href: { hash: `:Mtoka3G63`, webPageId: `DHcmosPD8` } },
        QBtj4RI16: `Back To Top`,
        yqYGaLxRH: `180px 0px 0px 0px`,
      },
    }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
      return T(te, { links: [i.jkuXVKEYY] }, (e) =>
        T(ci, { ...i, jkuXVKEYY: e[0], key: `MainPageTemplate`, style: n }, t(!0))
      );
    case `DHcmosPD8`:
      return T(te, { links: [i.jkuXVKEYY] }, (e) =>
        T(Ta, { ...i, jkuXVKEYY: e[0], key: `InnerPageTemplate`, style: n }, t(!0))
      );
    default:
      return t(!1);
  }
}
function Oa(e) {
  switch (e) {
    case `augiA20Il`:
      return [
        { hash: `v5sct`, mediaQuery: `(min-width: 1200px)` },
        { hash: `1hug0ju`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `1kp9gsl`, mediaQuery: `(max-width: 809.98px)` },
      ];
    case `DHcmosPD8`:
      return [
        { hash: `1obgs3g`, mediaQuery: `(min-width: 1200px)` },
        { hash: `ntpwop`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `1j0k7bl`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function ka({ routeId: e, pathVariables: t, localeId: n }) {
  let s = Ma[e].page.preload(),
    c = T(de, {
      children: T(me, {
        children: T(_e, {
          children: T(ue, {
            isWebsite: !0,
            routeId: e,
            pathVariables: t,
            routes: Ma,
            collectionUtils: Pa,
            framerSiteId: Fa,
            notFoundPage: ve(
              () => import(`./cyK-dSKRVzx8h93G3IhJP0ujmOIyMFmQrgTQiFGqljU.9guAIoQk.mjs`)
            ),
            isReducedMotion: void 0,
            localeId: n,
            locales: Na,
            preserveQueryParams: void 0,
            siteCanonicalURL: `https://gold-background-949526.framer.app`,
            EditorBar:
              i === void 0
                ? void 0
                : (() => {
                    if (/bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(u.userAgent)) {
                      console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                      return;
                    }
                    return ve(async () => {
                      i.__framer_editorBarDependencies = {
                        __version: 3,
                        framer: { useCurrentRoute: fe, useLocaleInfo: K, useRouter: Se },
                        react: {
                          createElement: T,
                          Fragment: o,
                          memo: h,
                          useCallback: r,
                          useEffect: a,
                          useRef: _,
                          useState: l,
                          useLayoutEffect: D,
                        },
                        'react-dom': { createPortal: g },
                      };
                      let { createEditorBar: e } = await import(`https://framer.com/edit/init.mjs`);
                      return { default: e() };
                    });
                  })(),
            adaptLayoutToTextDirection: !1,
            LayoutTemplate: Da,
            loadSnippetsModule: new le(
              () => import(`./-OQyCf7Wrht1WaU6_rxcEu5UNMui_vleLnCwAIgL6gU.RPwANAtg.mjs`)
            ),
          }),
          value: {
            autobahnNavigation: !1,
            editorBarDisableFrameAncestorsSecurity: !1,
            motionDivToDiv: !1,
            onPageLocalizationSupport: !1,
            onPageMoveTool: !1,
            synchronousNavigationOnDesktop: !1,
            yieldOnTap: !1,
          },
        }),
      }),
      value: {
        global: {
          enter: {
            mask: { angle: 270, type: `wipe`, width: `0%` },
            opacity: 0,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              damping: 30,
              delay: 0.5,
              duration: 0.6,
              ease: [0.73, 0, 0.33, 1],
              mass: 1,
              stiffness: 400,
              type: `tween`,
            },
            x: `0px`,
            y: `20%`,
          },
          exit: {
            mask: { angle: 270, type: `wipe`, width: `0%` },
            opacity: 0,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              damping: 30,
              delay: 0,
              duration: 0.6,
              ease: [0.73, 0, 0.33, 1],
              mass: 1,
              stiffness: 400,
              type: `tween`,
            },
            x: `0px`,
            y: `-20%`,
          },
        },
        routes: {},
      },
    });
  return (await s, c);
}
function Aa() {
  Ia && i.__framer_events.push(arguments);
}
async function ja(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || i.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    Aa(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, a, o, s;
    if (e) {
      let e = JSON.parse(t.dataset.framerHydrateV2);
      ((r = e.routeId),
        (a = e.localeId),
        (o = e.pathVariables),
        (s = e.breakpoints),
        (r = ae(Ma, r)));
    } else {
      ae(Ma, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (a = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((o ??= {}), (o[e.slice(4)] = n));
      }
      if (!r || !a) {
        let e = ne(Ma, decodeURIComponent(location.pathname), !0, Na);
        ((r = e.routeId), (a = e.localeId), (o = e.pathVariables));
      }
    }
    let c = ka({ routeId: r, localeId: a, pathVariables: o });
    i !== void 0 &&
      (async () => {
        let e = Ma[r],
          t = Na.find(({ id: e }) => (a ? e === a : e === `default`)).code,
          n = null;
        if (e?.collectionId && Pa) {
          let r = await Pa[e.collectionId]?.(),
            [i] = Object.values(o);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let s = Intl.DateTimeFormat().resolvedOptions(),
          c = s.timeZone,
          l = s.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          i.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Fa ?? null,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: i.location.href,
              hostname: i.location.hostname || null,
              pathname: i.location.pathname || null,
              hash: i.location.hash || null,
              search: i.location.search || null,
              timezone: c,
              locale: l,
            },
            `eager`,
          ]),
          await U({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let l = await c;
    e
      ? (Ce(`framer-rewrite-breakpoints`, () => {
          (M(s), i.__framer_onRewriteBreakpoints?.(s));
        }),
        E(() => {
          (ie(), xe(), w(t, l, { onRecoverableError: n }));
        }))
      : C(t, { onRecoverableError: n }).render(l);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var Ma, Na, Pa, Fa, Ia;
e(() => {
  if (
    (t(),
    R(),
    n(),
    f(),
    b(),
    li(),
    Ea(),
    (Ma = {
      augiA20Il: {
        elements: {
          cxKKrit_s: `card-2`,
          gXO5T5l0P: `card-3`,
          HwcwFPeWv: `card-1`,
          MHiTKHdUJ: `top`,
          PlaDQURl5: `card-4`,
          qkDPHMqEp: `images`,
        },
        page: ve(() => import(`./aeNfm8R8hfIAgyhiG-J2NK8SGXLJNTWr-PxeazYWP4s.BxFd17-c.mjs`)),
        path: `/`,
      },
      DHcmosPD8: {
        elements: { Mtoka3G63: `top` },
        page: ve(() => import(`./cyK-dSKRVzx8h93G3IhJP0ujmOIyMFmQrgTQiFGqljU.9guAIoQk.mjs`)),
        path: `/404`,
      },
    }),
    (Na = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (Pa = {}),
    (Fa = `b662e3aab8ca7889ba7f92723dfd782ff8187a475e3400dfabeef868ccfcd7a8`),
    (Ia = typeof document < `u`),
    Ia)
  ) {
    ((i.__framer_importFromPackage = (e, t) => () =>
      T(ye, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (i.__framer_events = i.__framer_events || []),
      re(),
      ee());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? ja(!0, e) : ja(!1, e);
  }
  (function () {
    Ia &&
      E(() => {
        w(
          document.getElementById(`__framer-badge-container`),
          T(y, {}, T(S(() => import(`./PX9hIOIVM.BIz7JOq7.mjs`))))
        );
      });
  })();
})();
export { Oa as getLayoutTemplateBreakpoints, ka as getPageRoot };
