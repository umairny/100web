import React, { useEffect, useState } from "react";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";

// --- Static Data Helpers ---

const navLinks = [
  { label: "Projects", target: "projects" },
  { label: "Craft", target: "craft" },
  { label: "Expertise", target: "expertise" },
  { label: "Geography", target: "geography" },
  { label: "Engage", target: "engage" },
];

const disciplines = [
  {
    title: "STRUCTURAL",
    subtitle: "(Rebar installation)",
    desc: "From high-rise cores to complex retaining walls, we build the skeleton.",
    img: "https://images.unsplash.com/photo-1590665851293-2762c413ef58?q=80&w=800&auto=format&fit=crop", // Rebar
  },
  {
    title: "FOUNDATIONS",
    subtitle: "(Mass pour)",
    desc: "The deepest, most stable footings for commercial and industrial projects.",
    img: "https://images.unsplash.com/photo-1624726175445-c71d27f10a64?q=80&w=800&auto=format&fit=crop", // Pouring concrete
  },
  {
    title: "FLATWORK",
    subtitle: "(Finishing crew)",
    desc: "Flawless, durable surfaces for driveways, plazas, and industrial slabs.",
    img: "https://images.unsplash.com/photo-1605022377869-b1374404a258?q=80&w=800&auto=format&fit=crop", // Polished floor
  },
];

const gallery = [
  {
    img: "https://images.unsplash.com/photo-1624726175445-c71d27f10a64?q=80&w=800&auto=format&fit=crop",
    title: "Mass Pour Foundation",
  },
  {
    img: "https://images.unsplash.com/photo-1604146835930-d3e3f7721054?q=80&w=800&auto=format&fit=crop",
    title: "Rebar Skeleton",
  },
  {
    img: "https://images.unsplash.com/photo-1512342654-e7394c4e3e3e?q=80&w=800&auto=format&fit=crop",
    title: "Industrial Flooring",
  },
  {
    img: "https://images.unsplash.com/photo-1605022377869-b1374404a258?q=80&w=800&auto=format&fit=crop",
    title: "Polished Plaza Deck",
  },
  {
    img: "https://images.unsplash.com/photo-1596465041904-f5e06d35e578?q=80&w=800&auto=format&fit=crop",
    title: "Stamped Concrete Driveway",
  },
  {
    img: "https://images.unsplash.com/photo-1596014139149-8a6e2c45039f?q=80&w=800&auto=format&fit=crop",
    title: "Architectural Concrete Formwork",
  },
];

const commitments = [
  { title: "CERTIFIED ACI PROFESSIONALS", icon: "shield" },
  { title: "RIGOROUS SAFETY CULTURE", icon: "hard-hat" },
  { title: "20+ YEARS OF UNCOMPROMISING QUALITY", icon: "award" },
];

// --- Sub-components ---

const SectionHeader = ({
  title,
  centered = true,
}: {
  title: string;
  centered?: boolean;
}) => (
  <h2
    className={`text-4xl font-extrabold text-slate-950 mb-16 ${centered ? "text-center" : ""}`}
  >
    {title}
  </h2>
);

const TextInput = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div>
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="w-full p-4 rounded-md bg-slate-800/80 border border-slate-700 text-slate-100 placeholder-slate-400 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition"
    />
  </div>
);

const SocialIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <a href="#" className="text-slate-500 hover:text-amber-600 transition">
    <Icon className="w-6 h-6" />
  </a>
);

// --- Main Component ---

export function TerraFormConcrete() {
  const [currentDiscipline, setCurrentDiscipline] = useState(0);
  const [activeNav, setActiveNav] = useState(navLinks[0].target);

  const nextDiscipline = () =>
    setCurrentDiscipline((prev) => (prev + 1) % disciplines.length);
  const prevDiscipline = () =>
    setCurrentDiscipline(
      (prev) => (prev - 1 + disciplines.length) % disciplines.length,
    );

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
      const scrollPosition = window.scrollY + 140;
      const currentSection = navLinks
        .map((link) => ({
          target: link.target,
          top: document.getElementById(link.target)?.offsetTop ?? 0,
        }))
        .filter((item) => item.top <= scrollPosition)
        .sort((a, b) => b.top - a.top)[0];

      if (currentSection?.target && currentSection.target !== activeNav) {
        setActiveNav(currentSection.target);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeNav]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 font-sans">
      {/* Header */}
      <header className="bg-slate-950 text-slate-100 sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-end gap-0.5">
              <div className="w-2 h-8 bg-amber-600"></div>
              <div className="w-5 h-5 border-4 border-amber-600"></div>
            </div>
            <span className="text-2xl font-bold tracking-tighter">
              TerraForm <span className="font-light">Concrete</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeNav === link.target;
              return (
                <a
                  key={link.target}
                  href={`#${link.target}`}
                  onClick={(event) => handleNavClick(event, link.target)}
                  className={`text-sm font-medium transition ${isActive ? "text-amber-400 underline underline-offset-4 decoration-amber-400" : "text-slate-200 hover:text-amber-500"}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
          <a
            href="#"
            className="border-2 border-amber-600 text-amber-600 px-5 py-2 rounded-full text-sm font-semibold hover:bg-amber-600 hover:text-slate-950 transition"
          >
            Start a Project
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl font-extrabold text-slate-950 leading-tight">
              TerraForm Concrete: Engineering the Future, from the Ground Up.
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              Mastery in Foundations, Flatwork, and Structural Concrete.
            </p>
            <a
              href="#"
              className="inline-block bg-amber-600 text-slate-950 px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition transform hover:scale-105"
            >
              DISCOVER OUR WORK
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 h-96">
            <img
              src="https://images.unsplash.com/photo-1590665851293-2762c413ef58?q=80&w=800&auto=format&fit=crop"
              alt="Rebar construction"
              className="w-full h-full object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1605022377869-b1374404a258?q=80&w=800&auto=format&fit=crop"
              alt="Polished concrete floor"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Core Disciplines Section */}
      <section id="craft" className="py-24 container mx-auto px-6 relative">
        <SectionHeader title="Core Disciplines" />

        {/* Mobile Carousel View */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={disciplines[currentDiscipline].img}
              alt={disciplines[currentDiscipline].title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-950/90 to-transparent text-white">
              <h3 className="text-3xl font-bold">
                {disciplines[currentDiscipline].title}
              </h3>
              <p className="text-amber-400 mb-2">
                {disciplines[currentDiscipline].subtitle}
              </p>
              <p className="text-sm text-slate-200">
                {disciplines[currentDiscipline].desc}
              </p>
            </div>
          </div>
          <button
            onClick={prevDiscipline}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-slate-900"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextDiscipline}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-slate-900"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {disciplines.map((disc, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={disc.img}
                  alt={disc.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold text-white">
                    {disc.title}
                  </h3>
                  <p className="text-amber-400 mb-3 font-medium">
                    {disc.subtitle}
                  </p>
                  <p className="text-sm text-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {disc.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Gallery & Commitment */}
      <section id="projects" className="bg-white py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-16 items-start">
          {/* Gallery */}
          <div className="md:col-span-2">
            <div className="flex justify-between items-end mb-16">
              <SectionHeader title="Project Gallery" centered={false} />
              <a
                href="#"
                className="text-amber-600 hover:underline text-sm font-medium"
              >
                View All Projects →
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {gallery.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden shadow-md group ${index === 0 ? "col-span-2 row-span-2" : ""}`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${index === 0 ? "h-96" : "h-48"}`}
                  />
                  <div
                    className={`p-5 bg-slate-900 text-white border-t-0 border border-slate-800`}
                  >
                    <p
                      className={`font-semibold ${index === 0 ? "text-xl" : ""}`}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment Side Panel */}
          <aside
            id="expertise"
            className="bg-slate-950 text-white p-10 rounded-3xl sticky top-24"
          >
            <h3 className="text-3xl font-bold mb-10">Commitment</h3>
            <div className="space-y-10">
              {commitments.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 border-b border-slate-800 pb-8 last:border-b-0 last:pb-0"
                >
                  <div className="bg-amber-600/10 p-5 rounded-2xl border border-amber-900">
                    {item.icon === "shield" && (
                      <div className="w-10 h-10 border-4 border-amber-600 rounded-full"></div>
                    )}
                    {item.icon === "hard-hat" && (
                      <div className="w-10 h-10 border-4 border-amber-600"></div>
                    )}
                    {item.icon === "award" && (
                      <div className="w-10 h-10 border-4 border-amber-600 transform rotate-45"></div>
                    )}
                  </div>
                  <p className="text-lg font-semibold flex-1">{item.title}</p>
                </div>
              ))}
            </div>
            <button className="mt-12 w-full text-center bg-amber-600 text-slate-950 py-4 rounded-xl font-bold text-lg hover:bg-amber-700">
              LEARN MORE
            </button>
          </aside>
        </div>
      </section>

      {/* Service Areas */}
      <section id="geography" className="py-24 container mx-auto px-6">
        <SectionHeader title="Service Areas" />
        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 space-y-10">
          <div className="bg-slate-900 rounded-2xl overflow-hidden p-6 h-[600px]">
            {/* Placeholder for the intricate map image */}
            <div className="w-full h-full flex items-center justify-center bg-slate-800 rounded-xl border border-slate-700 text-amber-400 text-2xl font-bold">
              MAP VISUALIZATION (Placeholder)
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-slate-950 leading-tight">
              SERVING METRO CITY / SUBURBAN COUNTY / INDUSTRIAL PARK / NORTH
              REGION / SOUTH VALLEY
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Extensive service coverage across the entire region. From complex
              industrial projects in the park to master-planned communities in
              the north and south valleys, our expert crews are ready to
              mobilize. Fast response and on-time completion guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Project Request Form Section */}
      <section id="engage" className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
          <div>
            <SectionHeader
              title="Request a Project Estimate"
              centered={false}
            />
            <p className="text-slate-600 mb-8">
              Fill out the form and our team will reach out to discuss your
              project needs, timelines, and provide a detailed estimate.
            </p>
            <form className="space-y-6">
              <TextInput id="name" label="Name" placeholder="Your Name" />
              <TextInput id="email" label="Email" placeholder="Your Email" />
              <TextInput
                id="phone"
                label="Phone"
                placeholder="Your Phone Number"
              />
              <TextInput
                id="project"
                label="Project Details"
                placeholder="Brief Description of Your Project"
              />
            </form>
          </div>
          <div className="bg-slate-950 text-white p-10 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="mb-4">
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p className="mb-4">
              <strong>Email:</strong> info@terraformconcrete.com
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-bold text-lg mb-4">
              TerraForm Concrete
            </h4>
            <p className="text-sm">
              © 2024 TerraForm Concrete. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <SocialIcon Icon={Camera} />
            <SocialIcon Icon={Camera} />
            <SocialIcon Icon={Camera} />
          </div>
          <div className="text-sm">
            <p>123 Concrete Lane</p>
            <p>Metropolis, ST 12345</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
