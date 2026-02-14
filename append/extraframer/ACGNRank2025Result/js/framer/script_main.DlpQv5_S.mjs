import { t as e } from './rolldown-runtime.D3cOTcPh.mjs';
import {
  B as t,
  E as n,
  F as r,
  H as i,
  I as a,
  L as o,
  R as s,
  V as c,
  a as l,
  g as u,
  i as d,
  j as f,
  m as p,
  n as m,
  p as h,
  r as g,
  t as _,
  u as v,
  v as y,
  w as b,
} from './react.BQ4DvozU.mjs';
import {
  Ct as x,
  G as S,
  K as C,
  Q as w,
  S as ee,
  U as T,
  W as E,
  Y as D,
  Z as O,
  _t as k,
  dt as A,
  et as j,
  f as M,
  g as N,
  h as P,
  l as F,
  p as I,
  q as L,
  rt as R,
  s as z,
  wt as B,
} from './framer.D2tS51Ci.mjs';
import { v as V, y as H } from './shared-lib.DWmYmsXa.mjs';
function U({ webPageId: e, children: t, style: n, ...r }) {
  let i =
    {
      augiA20Il: {
        CyUreTA4c: !0,
        jkuXVKEYY: { href: { hash: `:MHiTKHdUJ`, webPageId: `augiA20Il` } },
        mq3ybqrZM: `Back To Top`,
      },
    }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
      return v(ee, { links: [i.jkuXVKEYY] }, (e) =>
        v(V, { ...i, jkuXVKEYY: e[0], key: `MainPageTemplate`, style: n }, t(!0))
      );
    default:
      return t(!1);
  }
}
function W(e) {
  switch (e) {
    case `augiA20Il`:
      return [
        { hash: `v5sct`, mediaQuery: `(min-width: 1200px)` },
        { hash: `1hug0ju`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `1kp9gsl`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function G({ routeId: e, pathVariables: t, localeId: n, collectionItemId: c }) {
  let l = J[e].page.preload(),
    p = v(P, {
      children: v(F, {
        children: v(I, {
          children: v(N, {
            isWebsite: !0,
            routeId: e,
            pathVariables: t,
            routes: J,
            collectionUtils: X,
            framerSiteId: Z,
            notFoundPage: L(() => import(`./SitesNotFoundPage.js@1.4.DbCGsAce.mjs`)),
            isReducedMotion: void 0,
            localeId: n,
            locales: Y,
            preserveQueryParams: void 0,
            siteCanonicalURL: `https://gold-background-949526.framer.app`,
            EditorBar:
              i === void 0
                ? void 0
                : (() => {
                    if ($) {
                      console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                      return;
                    }
                    return L(async () => {
                      i.__framer_editorBarDependencies = {
                        __version: 3,
                        framer: { useCurrentRoute: R, useLocaleInfo: A, useRouter: k },
                        react: {
                          createElement: v,
                          Fragment: o,
                          memo: u,
                          useCallback: r,
                          useEffect: a,
                          useRef: f,
                          useState: s,
                          useLayoutEffect: b,
                        },
                        'react-dom': { createPortal: d },
                      };
                      let { createEditorBar: e } = await import(`https://framer.com/edit/init.mjs`);
                      return { default: e() };
                    });
                  })(),
            adaptLayoutToTextDirection: !1,
            LayoutTemplate: U,
            loadSnippetsModule: new M(
              () => import(`./-OQyCf7Wrht1WaU6_rxcEu5UNMui_vleLnCwAIgL6gU.D07Whn3Y.mjs`)
            ),
            initialCollectionItemId: c,
          }),
          value: {
            autobahnNavigation: !1,
            editorBarDisableFrameAncestorsSecurity: !1,
            motionDivToDiv: !1,
            onPageLocalizationSupport: !0,
            onPageMoveTool: !0,
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
  return (await l, p);
}
function K() {
  Q && i.__framer_events.push(arguments);
}
async function q(e, t) {
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
    K(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, a, o, s, c;
    if (e)
      ((c = JSON.parse(t.dataset.framerHydrateV2)),
        (r = c.routeId),
        (a = c.localeId),
        (o = c.pathVariables),
        (s = c.breakpoints),
        (r = O(J, r)));
    else {
      O(J, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (a = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((o ??= {}), (o[e.slice(4)] = n));
      }
      if (!r || !a) {
        let e = T(J, decodeURIComponent(location.pathname), !0, Y);
        ((r = e.routeId), (a = e.localeId), (o = e.pathVariables));
      }
    }
    let l = G({ routeId: r, localeId: a, pathVariables: o, collectionItemId: c?.collectionItemId });
    i !== void 0 &&
      (async () => {
        let e = J[r],
          t = Y.find(({ id: e }) => (a ? e === a : e === `default`)).code,
          n = c?.collectionItemId ?? null;
        if (n === null && e?.collectionId && X) {
          let r = await X[e.collectionId]?.(),
            [i] = Object.values(o);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let s = Intl.DateTimeFormat().resolvedOptions(),
          l = s.timeZone,
          u = s.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          i.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Z ?? null,
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
              timezone: l,
              locale: u,
            },
            `eager`,
          ]),
          await B({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let u = await l;
    e
      ? (x(`framer-rewrite-breakpoints`, () => {
          (w(s), i.__framer_onRewriteBreakpoints?.(s));
        }),
        ($ ? (e) => e() : y)(() => {
          (D(), j(), _(t, u, { onRecoverableError: n }));
        }))
      : g(t, { onRecoverableError: n }).render(u);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var J, Y, X, Z, Q, $;
e(() => {
  if (
    (t(),
    S(),
    n(),
    l(),
    m(),
    H(),
    (J = {
      augiA20Il: {
        elements: {
          cxKKrit_s: `card-2`,
          gXO5T5l0P: `card-3`,
          HwcwFPeWv: `card-1`,
          MHiTKHdUJ: `top`,
          PlaDQURl5: `card-4`,
          qkDPHMqEp: `images`,
        },
        page: L(() => import(`./KBNxDRNbnhvuLD4z1M9rvh50IUvujZOewHT2rZkEtWo.CUhPvmvI.mjs`)),
        path: `/`,
      },
    }),
    (Y = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (X = {}),
    (Z = `b662e3aab8ca7889ba7f92723dfd782ff8187a475e3400dfabeef868ccfcd7a8`),
    (Q = typeof document < `u`),
    ($ = Q && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(c.userAgent)),
    Q)
  ) {
    ((i.__framer_importFromPackage = (e, t) => () =>
      v(z, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (i.__framer_events = i.__framer_events || []),
      E(),
      C());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? q(!0, e) : q(!1, e);
  }
  (function () {
    Q &&
      y(() => {
        _(
          document.getElementById(`__framer-badge-container`),
          v(p, {}, v(h(() => import(`./PX9hIOIVM.CXsEThUM.mjs`))))
        );
      });
  })();
})();
export { W as getLayoutTemplateBreakpoints, G as getPageRoot };
