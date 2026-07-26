import React, { useEffect, useState } from "react";
import { MapPin, Phone, ShieldCheck, Users, Clock4, Star } from "lucide-react";

// --- Static Data & Helpers ---

// Helper to generate responsive Tailwind grid classes based on item count
const getGridCols = (count: number) => {
  if (count === 4) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
  if (count === 3) return "grid-cols-1 md:grid-cols-3";
  if (count === 2) return "grid-cols-1 md:grid-cols-2";
  return "grid-cols-1";
};

const navLinks = [
  { label: "Home", target: "home" },
  { label: "Services", target: "services" },
  { label: "Our Work", target: "work" },
  { label: "Certifications", target: "certifications" },
  { label: "Service Zones", target: "zones" },
  { label: "Contact", target: "contact" },
];

const coreServices = [
  {
    icon: Phone,
    title: "24/7 EMERGENCY",
    desc: "Rapid response to any plumbing crisis, day or night.",
    img: "https://images.unsplash.com/photo-1599658880436-c61796e70221?q=80&w=400",
  },
  {
    icon: MapPin,
    title: "RESIDENTIAL REPIPE",
    desc: "Complete home repiping for lasting reliability.",
    img: "https://images.unsplash.com/photo-1581094288338-23a4ddbb3789?q=80&w=400",
  },
  {
    icon: Users,
    title: "COMMERCIAL SOLUTIONS",
    desc: "Expert plumbing for businesses and large facilities.",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a268e?q=80&w=400",
  },
  {
    icon: ShieldCheck,
    title: "WATER HEATER SVC",
    desc: "Installation and repair for all water heater types.",
    img: "https://images.unsplash.com/photo-1615397204056-39e7d93c8c6f?q=80&w=400",
  },
];

const completedProjects = [
  {
    img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=800",
    title: "Complex Boiler System",
  },
  {
    img: "https://images.unsplash.com/photo-1613553507747-5f8d652e9993?q=80&w=400",
    title: "Modern Bathroom Reno",
  },
  {
    img: "https://images.unsplash.com/photo-1620626011761-999317b44466?q=80&w=400",
    title: "Luxury Shower Installation",
  },
  {
    img: "https://images.unsplash.com/photo-1584622650111-ead93a40610f?q=80&w=400",
    title: "Commercial Fixture Upgrade",
  },
  {
    img: "https://images.unsplash.com/photo-1611262588024-d12460b9d4db?q=80&w=400",
    title: "Utility Room Piping",
  },
  {
    img: "https://images.unsplash.com/photo-1607472582849-078d6897896f?q=80&w=400",
    title: "Boiler Room Installation",
  },
];

const certifications = [
  {
    icon: ShieldCheck,
    title: "LICENSED & INSURED MASTER PLUMBERS",
    desc: "Rest easy knowing certified professionals are handling your home.",
  },
  {
    icon: Star,
    title: "SAFETY-FIRST CULTURE & TOP RATINGS",
    desc: "A+ rated service committed to the safety of your property.",
  },
  {
    icon: Clock4,
    title: "10+ YEARS OF TRUSTED SERVICE",
    desc: "A decade of reliable solutions for the BluePeak community.",
  },
];

// --- Sub-components ---

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="mb-12">
    <h2 className="text-4xl font-extrabold text-slate-950">{title}</h2>
    {subtitle && <p className="text-lg text-slate-700 mt-2">{subtitle}</p>}
  </div>
);

const ServiceCard = ({ service }: { service: (typeof coreServices)[0] }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md group">
    <img
      src={service.img}
      alt={service.title}
      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div className="p-6">
      <div className="flex items-center gap-3 mb-3">
        <service.icon className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-bold text-slate-950">{service.title}</h3>
      </div>
      <p className="text-slate-700 text-sm">{service.desc}</p>
    </div>
  </div>
);

// --- Main Component ---

export function BluePeakPlumbing() {
  const [activeNav, setActiveNav] = useState(navLinks[0].target);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    target: string,
  ) => {
    event.preventDefault();
    setActiveNav(target);
    document
      .getElementById(target)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY + 140;
      const current = navLinks
        .map((link) => ({
          target: link.target,
          top: document.getElementById(link.target)?.offsetTop ?? 0,
        }))
        .filter((entry) => entry.top <= offset)
        .sort((a, b) => b.top - a.top)[0];
      if (current?.target && current.target !== activeNav) {
        setActiveNav(current.target);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeNav]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Top Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-slate-800">
        <span>EMERGENCY SERVICE: 24/7 (123) 456-BLUE</span>
        <span>LICENSE #BP1234S</span>
      </div>

      {/* Header/Nav */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <nav className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://i.imgur.com/i6nN6L7.png"
              alt="BluePeak Plumbing Logo"
              className="h-10"
            />{" "}
            {/* Replace with your logo URL */}
            <span className="text-xl font-bold text-blue-950">
              BluePeak<span className="font-light">Plumbing</span>
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            {navLinks.map((link) => {
              const isActive = activeNav === link.target;
              return (
                <a
                  key={link.target}
                  href={`#${link.target}`}
                  onClick={(event) => handleNavClick(event, link.target)}
                  className={`transition-colors ${isActive ? "text-blue-600 underline underline-offset-4 decoration-blue-600" : "hover:text-blue-600"}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
          <button className="bg-white text-slate-800 border border-slate-300 text-sm font-semibold px-6 py-2 rounded-full hover:bg-slate-50 transition-colors">
            Schedule Service
          </button>
        </nav>
      </header>

      {/* Main Content Wrapper */}
      <main className="container mx-auto px-4 md:px-8 py-12 md:py-16 space-y-24">
        {/* Hero Section */}
        <section id="home" className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-950 leading-tight">
              BluePeak Plumbing: Peak Performance, Reliable Flow. Emergency &
              Installation Experts.
            </h1>
            <p className="text-lg text-slate-700">
              Serving Residential & Commercial needs across the region.
            </p>
            <button className="bg-blue-600 text-white text-lg font-bold px-10 py-4 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              GET A FAST QUOTE
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581094288338-23a4ddbb3789?q=80&w=1200"
              alt="Plumber looking at pipes"
              className="rounded-3xl shadow-2xl aspect-[5/4] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-transparent rounded-3xl"></div>
          </div>
        </section>

        {/* Core Services */}
        <section id="services">
          <SectionHeader title="Core Services" />
          <div className={`grid ${getGridCols(coreServices.length)} gap-8`}>
            {coreServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </section>

        {/* Completed Projects & Credentials - Split Layout */}
        <section className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Completed Projects */}
          <div>
            <SectionHeader title="Our Completed Projects" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {completedProjects.map((project, index) => (
                <div
                  key={index}
                  className={`relative rounded-lg overflow-hidden group ${index === 0 ? "col-span-2 row-span-2" : ""}`}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${index === 0 ? "h-80" : "h-36"}`}
                  />
                  {index === 0 && (
                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-lg font-semibold">
                        {project.title}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Credibility */}
          <div id="certifications">
            <SectionHeader title="Certifications & Credibility" />
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-blue-950 text-white p-8 rounded-xl flex items-start gap-6 shadow-lg"
                >
                  <div className="bg-blue-800 p-4 rounded-full mt-1">
                    <cert.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Zones */}
        <section
          id="zones"
          className="grid lg:grid-cols-3 gap-12 items-center bg-white p-10 rounded-3xl shadow-xl border border-slate-100"
        >
          <div className="lg:col-span-1 space-y-4">
            <SectionHeader title="Service Zones" />
            <p className="text-slate-700 text-sm leading-relaxed">
              We proudly serve the entire metropolitan region. Find your
              neighborhood listed below or check the map for our coverage area.
              Reliable, On-Time Service Throughout the Region.
            </p>
            <p className="text-xs font-semibold text-blue-700 mt-4">
              SERVING NORTH REGION / CENTRAL CITY / SOUTHSIDE / EAST SUBURBS /
              WEST COUNTY
            </p>
          </div>
          <div className="lg:col-span-2">
            <img
              src="https://i.imgur.com/6tB2R6K.png" // Placeholder for the map image
              alt="Service Area Map"
              className="w-full rounded-2xl aspect-video object-cover"
            />
          </div>
        </section>

        {/* Quote Request Section */}
        <section
          id="contact"
          className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100"
        >
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3 p-12 bg-slate-50 flex flex-col justify-center">
              <h2 className="text-4xl font-extrabold text-slate-950 mb-6">
                Quote Request
              </h2>
              <p className="text-slate-700 mb-8 max-w-xl">
                Start your project with emergency services with sanitizes
                sanitize a termen you veg permuh gear fiarm.
              </p>
              <form className="space-y-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 rounded-xl border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-blue-200"
                />
                <textarea
                  placeholder="Details (Optional)"
                  rows={4}
                  className="w-full p-4 rounded-xl border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-blue-200"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  SUBMIT
                </button>
              </form>
            </div>
            <div className="md:col-span-2 p-12 bg-white border-l border-slate-100">
              <h3 className="text-xl font-bold text-slate-950 mb-6">
                START YOUR PROJECT
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full p-3 rounded-lg border border-slate-200 text-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg border border-slate-200 text-sm"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 rounded-lg border border-slate-200 text-sm"
                />
                <textarea
                  placeholder="Message..."
                  rows={3}
                  className="w-full p-3 rounded-lg border border-slate-200 text-sm"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white font-semibold py-3 rounded-lg hover:bg-slate-800 transition-colors text-sm"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-100 mt-24">
        <div className="container mx-auto px-4 md:px-8 py-16 grid md:grid-cols-3 gap-12 border-b border-blue-900">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="https://i.imgur.com/i6nN6L7.png"
                alt="BluePeak Plumbing Logo"
                className="h-10"
              />
              <span className="text-2xl font-bold text-white">
                BluePeak<span className="font-light">Plumbing</span>
              </span>
            </div>
            <p className="text-sm text-blue-200 max-w-xs">
              © 2024 BluePeak Plumbing | All rights reserved.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-5">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.target}>
                  <a
                    href={`#${link.target}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-5">Follow Us</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <span className="w-5 h-5 inline-block text-sm font-semibold">
                  F
                </span>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <span className="w-5 h-5 inline-block text-sm font-semibold">
                  T
                </span>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <span className="w-5 h-5 inline-block text-sm font-semibold">
                  I
                </span>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <span className="w-5 h-5 inline-block text-sm font-semibold">
                  in
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-blue-200 py-6">
          Designed & Developed by{" "}
          <a
            href="#"
            className="font-semibold hover:text-blue-400 transition-colors"
          >
            YourCompany
          </a>
        </div>
      </footer>
    </div>
  );
}
