import React, { useEffect, useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Building2,
  Home,
  Wifi,
  Search,
  HardHat,
  Zap,
} from "lucide-react";

// --- Static Data Helpers ---
const navLinks = [
  { label: "About Us", target: "about-us" },
  { label: "Services", target: "services" },
  { label: "Completed Work", target: "completed-work" },
  { label: "Credentials", target: "credentials" },
  { label: "Service Areas", target: "service-areas" },
];

const services = [
  {
    icon: Home,
    title: "RESIDENTIAL",
    desc: "Expert home rewiring, panel upgrades, lighting installation, and troubleshooting.",
  },
  {
    icon: Building2,
    title: "COMMERCIAL",
    desc: "Full-scale electrical solutions for offices, retail, restaurants, and industrial spaces.",
  },
  {
    icon: Wifi,
    title: "SYSTEMS & AUTOMATION",
    desc: "Integration of smart lighting, security systems, and energy-efficient solutions.",
  },
];

const credibleWork = [
  {
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop",
    title: "MODERN RETAIL FIT-OUT",
  },
  {
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a268e?q=80&w=800&auto=format&fit=crop",
    title: "INDUSTRIAL PANEL UPGRADE",
  },
  {
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
    title: "HOME WIRING SOLUTIONS",
  },
];

const credentials = [
  {
    icon: () => <span className="font-bold text-4xl text-blue-600">C-10</span>,
    title: "LICENSED & INSURED",
    desc: "Our team is fully licensed, bonded, and insured for your peace of mind.",
  },
  {
    icon: HardHat,
    title: "SAFETY-FIRST CULTURE",
    desc: "We prioritize rigorous safety protocols on every single job, large or small.",
  },
  {
    icon: Zap,
    title: "EXPERIENCE TEAM",
    desc: "Over 15 years of combined experience in the electrical contracting field.",
  },
];

// --- Sub-components ---
const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-4xl font-bold text-center text-slate-950 mb-16">
    {title}
  </h2>
);

const NavLink = ({
  href,
  children,
  isActive,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) => (
  <a
    href={href}
    onClick={onClick}
    className={`text-sm font-medium transition ${isActive ? "text-blue-600 underline underline-offset-4 decoration-blue-600" : "text-slate-700 hover:text-blue-600"}`}
    aria-current={isActive ? "page" : undefined}
  >
    {children}
  </a>
);

const FormField = ({
  id,
  label,
  type = "text",
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
}) => (
  <div>
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
    />
  </div>
);

// --- Main Page Component ---
export function ForgeLineElectric() {
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
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-slate-950">
              ForgeLine<span className="font-light">Electrical</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.target}
                href={`#${link.target}`}
                isActive={activeNav === link.target}
                onClick={(event) => handleNavClick(event, link.target)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <a
            href="#"
            className="bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Request a Quote
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about-us" className="bg-slate-950 text-white py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              ForgeLine Electrical:
              <br />
              Powering Your Vision.
              <br />
              <span className="text-blue-400">
                Residential & Commercial Expertise.
              </span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-xl">
              Licensed, Insured, and Trusted for Precision Electrical Work.
            </p>
            <a
              href="#"
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 inline-block transition-all transform hover:scale-105"
            >
              GET A FAST QUOTE
            </a>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35491327b4a?q=80&w=1200&auto=format&fit=crop"
              alt="Electricians working"
              className="rounded-lg shadow-2xl aspect-[5/3] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-24 container mx-auto px-6">
        <SectionHeader title="Our Services" />
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 flex flex-col items-center text-center group transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="bg-blue-50 p-5 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <service.icon
                  className="w-10 h-10 text-blue-600"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-950 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 flex-grow">{service.desc}</p>
              <a
                href="#"
                className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More <Search className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Our Credible Work */}
      <section id="completed-work" className="bg-white py-24">
        <div className="container mx-auto px-6">
          <SectionHeader title="Our Credible Work" />
          <div className="grid md:grid-cols-3 gap-8">
            {credibleWork.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden group">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-6 bg-slate-100 border-t-0 border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-950 mb-2">
                    {item.title}
                  </h3>
                  <a
                    href="#"
                    className="text-blue-600 text-sm font-medium flex items-center gap-2 hover:underline"
                  >
                    View Case Study <Search className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Credentials & Safety */}
      <section
        id="credentials"
        className="py-24 container mx-auto px-6 bg-slate-50"
      >
        <SectionHeader title="Our Credentials & Safety" />
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {credentials.map((cred, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-6 w-24 h-24 flex items-center justify-center">
                <cred.icon />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-3">
                {cred.title}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                {cred.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Serving Our Community */}
      <section id="service-areas" className="bg-white py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://i.imgur.com/7mR8l4U.webp" // Placeholder image for the complex map shown in original
              alt="Service Area Map"
              className="w-full rounded-lg shadow-md border border-slate-100"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-slate-950 mb-6">
              Serving Our Community
            </h2>
            <p className="text-slate-600 mb-4 text-lg font-medium">
              Metro City, Suburban County, Industrial District, North Region,
              South Valley
            </p>
            <p className="text-slate-600 leading-relaxed">
              Reliable, On-Time Service Throughout the Region. Our coverage
              extends to residential neighborhoods, commercial hubs, and
              industrial parks within the highlighted areas.
            </p>
          </div>
        </div>
      </section>

      {/* Request a Quote Form Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 bg-white p-12 rounded-2xl shadow-xl border border-slate-100">
          <div>
            <h2 className="text-4xl font-bold text-slate-950 mb-6 leading-tight">
              Ready to Power Up Your Project? <br />
              Request a Quote
            </h2>
            <p className="text-slate-700 mb-5 font-medium">
              You can expect to list to expect:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2.5 text-sm marker:text-blue-400">
              <li>Detailed Proposals</li>
              <li>Fast Response</li>
              <li>Service Type (Residential/Commercial)</li>
              <li>Project Start plans</li>
              <li>File Upload (e.g., plans, photos)</li>
            </ul>
          </div>
          <form className="space-y-5">
            <FormField
              id="name"
              label="Name (Required)"
              placeholder="Name (Required)"
            />
            <FormField
              id="email"
              label="Email (Required)"
              type="email"
              placeholder="Email (Required)"
            />
            <FormField
              id="phone"
              label="Phone"
              type="tel"
              placeholder="Phone"
            />
            <FormField
              id="serviceType"
              label="Service Type"
              placeholder="Service Type (Residential/Commercial)"
            />
            <FormField
              id="details"
              label="Project Details"
              placeholder="Project Details"
            />
            <div className="relative border-2 border-dashed border-slate-300 rounded-md p-6 text-center hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer">
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <p className="text-sm text-slate-600">
                Drag & drop files here or{" "}
                <span className="text-blue-600 font-medium">browse</span>
              </p>
              <p className="text-xs text-slate-400 mt-1">
                File Upload (e.g., plans, photos)
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-4 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            >
              SUBMIT QUOTE REQUEST
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-12">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Zap className="w-10 h-10 text-blue-600" />
              <span className="text-2xl font-bold text-white">
                ForgeLineElectrical
              </span>
            </div>
            <p className="text-sm text-slate-500">
              © 2024 ForgeLine Electrical. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="#" className="hover:text-blue-400">
                Services
              </a>
              <a href="#" className="hover:text-blue-400">
                Completed Work
              </a>
              <a href="#" className="hover:text-blue-400">
                Credentials
              </a>
              <a href="#" className="hover:text-blue-400">
                Privacy Policy
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact Info</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" /> 123 Main St,
                Industrial City, USA
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} /> (555) 123-4567
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} /> info@forgeline.com
              </div>
            </div>
          </div>

          <div className="flex items-start justify-start md:justify-end gap-6">
            <a href="#" className="hover:text-white">
              <span className="font-bold text-xl">f</span>
            </a>{" "}
            {/* Placeholder for F icon */}
          </div>
        </div>
        <div className="container mx-auto px-6 text-center md:text-right text-sm text-slate-500">
          Building Connections, Lighting Futures
        </div>
      </footer>
    </div>
  );
}
