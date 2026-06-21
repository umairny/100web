import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "./Container";

interface SubWebsiteNavLink {
  label: string;
  href: string;
}

interface SubWebsiteNavProps {
  brand: string;
  links: SubWebsiteNavLink[];
  ctaLabel: string;
  ctaHref: string;
  className: string;
  brandClassName: string;
  linkClassName: string;
  activeLinkClassName?: string;
  ctaClassName: string;
  activeCtaClassName?: string;
  menuButtonClassName: string;
  mobilePanelClassName: string;
  collectionPath?: string;
}

const normalizePath = (path: string) => path.replace(/\/+$/, "") || "/";

export function SubWebsiteNav({
  brand,
  links,
  ctaLabel,
  ctaHref,
  className,
  brandClassName,
  linkClassName,
  activeLinkClassName = "active opacity-100 underline decoration-2 underline-offset-8",
  ctaClassName,
  activeCtaClassName = "active ring-2 ring-current ring-offset-2",
  menuButtonClassName,
  mobilePanelClassName,
}: SubWebsiteNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(() => window.location.hash);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash);

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname, hash]);

  const isActiveHref = (href: string) => {
    const hashIndex = href.indexOf("#");

    if (hashIndex === -1 || !currentHash) {
      return false;
    }

    const targetPath = href.slice(0, hashIndex);
    const targetHash = href.slice(hashIndex);

    if (targetHash !== currentHash) {
      return false;
    }

    if (!targetPath) {
      return true;
    }

    const normalizedCurrentPath = normalizePath(pathname);
    const normalizedTargetSlug = normalizePath(targetPath.replace(/^\.?\//, ""));

    if (
      normalizedCurrentPath === `/${normalizedTargetSlug}` ||
      normalizedCurrentPath.endsWith(`/${normalizedTargetSlug}`)
    ) {
      return true;
    }

    try {
      const linkUrl = new URL(href, window.location.href);

      return normalizePath(linkUrl.pathname) === normalizedCurrentPath && linkUrl.hash === currentHash;
    } catch {
      return false;
    }
  };

  const handleBrandClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`restaurant-subnav fixed left-0 right-0 top-16 z-40 backdrop-blur fade-in-down ${className}`}
    >
      <Container>
        <div className="flex h-14 items-center justify-between gap-4">
          <Link
            to={pathname}
            onClick={handleBrandClick}
            className={`truncate font-black ${brandClassName}`}
          >
            {brand}
          </Link>

          <div className="hidden items-center gap-6 text-sm font-bold md:flex">
            {links.map((link) => {
              const isActive = isActiveHref(link.href);

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`${linkClassName} ${isActive ? activeLinkClassName : ""}`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <a
            href={ctaHref}
            aria-current={isActiveHref(ctaHref) ? "location" : undefined}
            className={`hidden rounded-full px-4 py-2 text-sm font-black transition-all duration-300 ease-out hover:-translate-y-0.5 md:inline-flex ${ctaClassName} ${isActiveHref(ctaHref) ? activeCtaClassName : ""}`}
          >
            {ctaLabel}
          </a>

          <button
            type="button"
            aria-label="Toggle sub website navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition md:hidden ${menuButtonClassName}`}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        {isOpen && (
          <div
            className={`mb-3 grid gap-2 rounded-2xl p-3 shadow-lg md:hidden ${mobilePanelClassName}`}
          >
            {links.map((link) => {
              const isActive = isActiveHref(link.href);

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-bold ${linkClassName} ${isActive ? activeLinkClassName : ""}`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={ctaHref}
              aria-current={isActiveHref(ctaHref) ? "location" : undefined}
              onClick={() => setIsOpen(false)}
              className={`rounded-xl px-4 py-3 text-center text-sm font-black ${ctaClassName} ${isActiveHref(ctaHref) ? activeCtaClassName : ""}`}
            >
              {ctaLabel}
            </a>
          </div>
        )}
      </Container>
    </nav>
  );
}
