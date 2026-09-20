import { useEffect, useState } from "react";
import { BrowserRouter, useLocation, useSearchParams } from "react-router-dom";
import { Navbar, Footer, CommandPalette, ShowcaseToolbar, ShortlistDrawer } from "./components";
import type { DeviceMode } from "./components/ShowcaseToolbar";
import { allWebsites } from "./data/websites";
import { importFavoriteIds } from "./utils/favorites";
import { RotateCcw } from "lucide-react";
import { useThemeAccent, applyThemeVariables } from "./utils/themeAccent";
import { AppRoutes } from "./AppRoutes";

function AppShell() {
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const isEmbed = searchParams.get('embed') === 'true';
  const isHomePage = pathname === '/';

  const isDemoPage =
    (pathname.startsWith("/restaurant/") && pathname !== "/restaurant") ||
    (pathname.startsWith("/beauty/") && pathname !== "/beauty") ||
    (pathname.startsWith("/real-estate/") && pathname !== "/real-estate") ||
    (pathname.startsWith("/fitness/") && pathname !== "/fitness") ||
    (pathname.startsWith("/medical/") && pathname !== "/medical") ||
    (pathname.startsWith("/construction/") && pathname !== "/construction") ||
    (pathname.startsWith("/education/") && pathname !== "/education") ||
    (pathname.startsWith("/e-commerce/") && pathname !== "/e-commerce") ||
    (pathname.startsWith("/portfolio/") && pathname !== "/portfolio") ||
    (pathname.startsWith("/saas/") && pathname !== "/saas") ||
    pathname.startsWith("/flowpilot") ||
    pathname.startsWith("/metricnest") ||
    pathname.startsWith("/supportdock") ||
    pathname.startsWith("/launchgrid") ||
    pathname.startsWith("/invoicepilot") ||
    pathname.startsWith("/recruitflow") ||
    pathname.startsWith("/securelayer") ||
    pathname.startsWith("/peoplepulse") ||
    pathname.startsWith("/consentlayer") ||
    pathname.startsWith("/routestack");

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isShortlistOpen, setIsShortlistOpen] = useState(false);
  const { currentPreset, isOriginal, resetTheme, activePresetId, customPrimary, customThemes } = useThemeAccent(pathname);
  const rawDevice = searchParams.get('device');
  const initialDevice: DeviceMode = (rawDevice === 'tablet' || rawDevice === 'mobile') ? rawDevice : 'desktop';
  const [deviceMode, setDeviceMode] = useState<DeviceMode>(initialDevice);

  const handleDeviceModeChange = (mode: DeviceMode) => {
    setDeviceMode(mode);
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (mode === 'desktop') {
          next.delete('device');
        } else {
          next.set('device', mode);
        }
        return next;
      },
      { replace: true }
    );
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.body.style.overflow = '';
    const currentDeviceParam = searchParams.get('device');
    if (currentDeviceParam === 'tablet' || currentDeviceParam === 'mobile') {
      setDeviceMode(currentDeviceParam);
    } else {
      setDeviceMode('desktop');
    }
  }, [pathname, searchParams]);

  // Deep-link auto-import and open for shared shortlist (?shortlist=id1,id2)
  useEffect(() => {
    const shortlistParam = searchParams.get('shortlist');
    if (shortlistParam) {
      const ids = shortlistParam.split(',').map((id) => id.trim()).filter(Boolean);
      if (ids.length > 0) {
        importFavoriteIds(ids);
        setIsShortlistOpen(true);
      }
    }
  }, [searchParams]);

  // Dynamic document title based on active template or category
  useEffect(() => {
    if (isEmbed) return;
    const cleanPath = pathname.toLowerCase();
    const matched = allWebsites.find((site) => {
      const catPath = site.category.toLowerCase().replace(/\s+/g, '-');
      return (
        cleanPath === `/${catPath}/${site.slug}` ||
        cleanPath.startsWith(`/${catPath}/${site.slug}/`) ||
        cleanPath === `/${site.slug}` ||
        cleanPath.startsWith(`/${site.slug}/`)
      );
    }) || allWebsites.find((site) => cleanPath.includes(site.slug));

    if (matched) {
      document.title = `${matched.title} — ${matched.category} | 100Web`;
      return;
    }
    const catMap: Record<string, string> = {
      restaurant: "Restaurant & Dining",
      beauty: "Beauty & Wellness",
      "real-estate": "Real Estate & Architecture",
      fitness: "Fitness & Athletics",
      medical: "Healthcare & Medical",
      construction: "Construction & Trades",
      education: "Education & Learning",
      "e-commerce": "E-Commerce & Retail",
      portfolio: "Creative & Portfolios",
      saas: "SaaS & Software",
    };
    const firstSegment = pathname.split("/").filter(Boolean)[0];
    if (firstSegment && catMap[firstSegment]) {
      document.title = `${catMap[firstSegment]} — 100Web Showcase`;
    } else if (pathname === "/") {
      document.title = "100Web — 100 Production Ready Modern Website Templates";
    } else {
      document.title = "100Web — Modern Web Experience Showcase";
    }
  }, [pathname, isEmbed]);

  // Global spotlight keyboard shortcut: Ctrl+K / Cmd+K
  useEffect(() => {
    if (isEmbed) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEmbed]);

  // Re-apply active theme to iframe when theme or device mode changes
  useEffect(() => {
    if (!isEmbed && isDemoPage && deviceMode !== 'desktop') {
      const timer = setTimeout(() => {
        applyThemeVariables(activePresetId, customPrimary, customThemes);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isEmbed, isDemoPage, deviceMode, activePresetId, customPrimary, customThemes]);

  // If in embedded mode (inside phone/tablet preview iframe), render template directly without outer chrome
  if (isEmbed) {
    return (
      <div id="device-frame-embed" className="demo-canvas demo-mode min-h-screen w-full bg-white transition-[filter] duration-300 overflow-x-hidden">
        <AppRoutes />
      </div>
    );
  }

  return (
    <div
      className={`flex min-h-screen flex-col ${isDemoPage ? "demo-mode" : ""}`}
    >
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <ShortlistDrawer
        isOpen={isShortlistOpen}
        onClose={() => setIsShortlistOpen(false)}
      />
      {isDemoPage && (
        <ShowcaseToolbar
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenShortlist={() => setIsShortlistOpen(true)}
          deviceMode={deviceMode}
          onDeviceModeChange={handleDeviceModeChange}
        />
      )}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenShortlist={() => setIsShortlistOpen(true)}
      />

      {/* Floating Theme Active Indicator Badge */}
      {isDemoPage && !isOriginal && deviceMode === 'desktop' && (
        <div className="fixed top-20 right-5 z-[60] flex items-center gap-2 rounded-full border border-purple-300/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-purple-900 shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200">
          <span
            className="h-2.5 w-2.5 rounded-full ring-1 ring-purple-200 animate-pulse shrink-0"
            style={{
              background: currentPreset.gradient || currentPreset.primary || '#9333ea',
            }}
          />
          <span>Theme: {currentPreset.name}</span>
          {currentPreset.isCustom && currentPreset.colors && (
            <span className="rounded-full bg-purple-100 text-purple-800 text-[9px] px-1.5 py-0.2 font-extrabold">
              {currentPreset.colors.length}C
            </span>
          )}
          <button
            type="button"
            onClick={resetTheme}
            className="ml-1 rounded-full p-0.5 text-purple-500 hover:bg-purple-100 hover:text-purple-800 transition"
            title="Reset to original design palette"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      <div
        className={`flex-grow ${isHomePage ? "pt-16" : ""} ${
          isDemoPage && deviceMode !== 'desktop'
            ? "bg-slate-950/95 py-8 px-4 transition-colors duration-300 min-h-screen flex flex-col items-center justify-start"
            : ""
        }`}
      >
        {isDemoPage && deviceMode !== 'desktop' ? (
          <div
            style={{
              boxShadow:
                '0 25px 60px -15px rgba(0,0,0,0.8), 0 0 35px -8px var(--theme-accent-primary, transparent)',
            }}
            className={`w-full bg-slate-900 border-[10px] border-slate-900 overflow-hidden transition-all duration-300 relative flex flex-col shadow-2xl ring-1 ring-white/10 ${
              deviceMode === 'tablet'
                ? 'max-w-[768px] h-[920px] rounded-[38px]'
                : 'max-w-[390px] h-[844px] rounded-[50px]'
            }`}
          >
            {/* Realistic Device Status Bar */}
            <div className="bg-slate-900 py-2 px-6 flex items-center justify-between shrink-0 select-none z-50 border-b border-slate-800/80">
              <span className="text-[11px] font-semibold text-slate-200 tracking-wider font-mono">9:41</span>
              {deviceMode === 'mobile' ? (
                <div className="w-24 h-5 bg-black rounded-full flex items-center justify-end pr-2 ring-1 ring-slate-800">
                  <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-700/80" />
                </div>
              ) : (
                <div className="w-12 h-1.5 bg-slate-700 rounded-full" />
              )}
              <div className="flex items-center gap-1.5 text-[10px] text-slate-300 font-medium font-mono">
                <span>5G</span>
                <span>100%</span>
              </div>
            </div>

            {/* Embedded Iframe Viewport */}
            <iframe
              id="device-frame-iframe"
              key={`${pathname}-${deviceMode}`}
              src={`${pathname}?embed=true`}
              title={`${deviceMode} preview`}
              onLoad={() => {
                applyThemeVariables(activePresetId, customPrimary, customThemes);
              }}
              className="w-full flex-grow border-none bg-white select-auto"
            />

            {/* Home Indicator */}
            <div className="bg-slate-900 py-1.5 shrink-0 flex justify-center z-50 pointer-events-none border-t border-slate-800/80">
              <div className="w-32 h-1 bg-slate-600 rounded-full" />
            </div>
          </div>
        ) : (
          <div className={isDemoPage ? "demo-canvas transition-[filter] duration-300" : ""}>
            <AppRoutes />
          </div>
        )}
      </div>

      {!isDemoPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
