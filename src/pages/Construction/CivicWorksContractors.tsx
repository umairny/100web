import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Droplets,
  HardHat,
  MapPin,
  Menu,
  ShieldCheck,
  Trees,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
const r = "/src/assets/optimized/Construction/civicworks";
const civicNav = [
  ["Services", "services"],
  ["Projects", "projects"],
  ["About", "about"],
  ["Qualifications", "qualifications"],
  ["Contact", "contact"],
] as const;
const services = [
  [
    "Roadways & Streetscapes",
    "Paving, grading, sidewalks, curbs, and streetscape improvements.",
    Building2,
  ],
  [
    "Water & Sewer Infrastructure",
    "Underground utilities, water mains, storm systems, and sanitary sewer.",
    Droplets,
  ],
  [
    "Site Development",
    "Earthwork, drainage, retaining walls, and site preparation.",
    HardHat,
  ],
  [
    "Parks & Public Spaces",
    "Parks, trails, sports facilities, and public amenities.",
    Trees,
  ],
] as const;
export function CivicWorksContractors() {
  const [o, setO] = useState(false),
    [active, setActive] = useState("home");
  useEffect(() => {
    const f = () => {
      let a = "home";
      civicNav.forEach(([, id]) => {
        const e = document.getElementById(id);
        if (e && e.offsetTop <= scrollY + 150) a = id;
      });
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 8)
        a = "contact";
      setActive(a);
    };
    f();
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  return (
    <main className="bg-white text-[#0b1c2b] font-sans">
      <header className="sticky top-0 z-[100] bg-[#061a2c]/95 text-white shadow-xl backdrop-blur-md">
        <div className="mx-auto flex h-24 max-w-[1450px] items-center gap-8 px-5">
          <a
            href="#home"
            className="text-xl font-black tracking-wide text-white"
          >
            🏛 CIVICWORKS
            <small className="block text-[9px] tracking-[.3em]">
              CONTRACTORS
            </small>
          </a>
          <button onClick={() => setO(!o)} className="ml-auto lg:hidden">
            {o ? <X /> : <Menu />}
          </button>
          <nav
            className={`${o ? "flex" : "hidden"} absolute left-0 right-0 top-24 flex-col bg-[#061a2c] p-6 lg:static lg:ml-auto lg:flex lg:flex-row lg:items-center lg:gap-10 lg:p-0`}
          >
            {civicNav.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setO(false)}
                className={`relative py-3 text-sm font-bold uppercase transition after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-[#f5b800] ${active === id ? "text-[#f5b800] after:w-full" : "text-white after:w-0 hover:text-[#f5b800]"}`}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden bg-[#f5b800] px-6 py-4 text-xs font-black uppercase text-[#061a2c] lg:block"
          >
            Request a Quote
          </a>
        </div>
      </header>
      <section id="home" className="relative min-h-[720px] text-white">
        <img
          src={`${r}/hero.webp`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041421]/95 via-[#041421]/65 to-transparent" />
        <div className="relative mx-auto max-w-[1450px] px-5 py-28">
          <p className="font-black uppercase tracking-wider">
            — Built for communities. Built to last.
          </p>
          <h1 className="mt-7 max-w-3xl text-5xl font-black uppercase leading-tight md:text-7xl">
            Infrastructure{" "}
            <span className="text-[#f5b800]">
              That Moves Communities Forward.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">
            Reliable, compliant, high-quality municipal projects that support
            safer, stronger communities.
          </p>
          <a
            href="#projects"
            className="mt-8 inline-flex border border-white px-7 py-4 text-sm font-black uppercase"
          >
            Our Projects <ArrowRight className="ml-3 w-4" />
          </a>
        </div>
      </section>
      <section id="services" className="px-5 py-24">
        <div className="mx-auto grid max-w-[1450px] gap-10 lg:grid-cols-[320px_1fr]">
          <div>
            <b className="text-[#c58f00]">OUR SERVICES</b>
            <h2 className="mt-3 text-4xl font-black">
              Complete Solutions. Built for Public Impact.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map(([a, b, I]) => (
              <article className="border-l border-slate-300 p-6" key={a}>
                <I className="h-12 w-12 text-[#e5aa00]" />
                <h3 className="mt-5 text-xl font-black">{a}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="bg-[#0b1c2b] px-5 py-24 text-white">
        <div className="mx-auto max-w-[1450px]">
          <b className="text-[#f5b800]">FEATURED PROJECTS</b>
          <h2 className="my-4 text-4xl font-black">
            Proven Results. Public Impact.
          </h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Riverdale Boulevard", "road.webp"],
              ["Oak Creek Improvements", "bridge.webp"],
              ["North County WRF Upgrade", "water.webp"],
              ["County Bridge Rehab", "bridge.webp"],
            ].map(([a, p]) => (
              <article key={a}>
                <img src={`${r}/${p}`} className="h-64 w-full object-cover" />
                <h3 className="mt-4 font-black uppercase text-[#f5b800]">
                  {a}
                </h3>
                <p className="text-sm text-white/65">
                  Public infrastructure delivered safely and transparently.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="px-5 py-24">
        <div className="mx-auto grid max-w-[1450px] gap-8 md:grid-cols-5">
          {[
            ["25+", "Years of Service"],
            ["250+", "Public Projects"],
            ["$750M+", "Completed Value"],
            ["20+", "Agencies Served"],
            ["0", "Compromise on Safety"],
          ].map(([a, b]) => (
            <div className="border-r p-5 text-center" key={b}>
              <strong className="text-4xl text-[#dda600]">{a}</strong>
              <p className="mt-2 text-xs font-black uppercase">{b}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="qualifications" className="bg-slate-100 px-5 py-24">
        <div className="mx-auto max-w-[1450px]">
          <h2 className="text-4xl font-black">
            Qualified. Certified. Committed.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-6">
            {[
              "DBE Certified",
              "SBA Certified",
              "OSHA 10/30",
              "APWA Member",
              "ISNetworld",
              "Bonded & Insured",
            ].map((x) => (
              <div className="bg-white p-8 text-center font-black" key={x}>
                <ShieldCheck className="mx-auto mb-4 h-12 w-12 text-[#dba400]" />
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-[#0b1c2b] px-5 py-24 text-white">
        <div className="mx-auto grid max-w-[1450px] items-center gap-12 lg:grid-cols-[340px_1fr_320px]">
          <div>
            <b className="text-sm font-black uppercase tracking-[.18em] text-[#f5b800]">
              We Serve
            </b>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Proudly Serving Our Communities
            </h2>
            <p className="mt-5 text-base leading-7 text-white/65">
              Local expertise. Regional reach. We deliver dependable
              infrastructure solutions across our growing service area.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center border border-white/60 px-6 py-4 text-xs font-black uppercase text-white transition hover:border-[#f5b800] hover:text-[#f5b800]"
            >
              View Service Areas <ArrowRight className="ml-3 w-4" />
            </a>
          </div>
          <div className="relative min-h-[390px] overflow-hidden rounded-xl border border-white/10 bg-[#172b3b]">
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(30deg,transparent_48%,rgba(255,255,255,.18)_49%,rgba(255,255,255,.18)_51%,transparent_52%),linear-gradient(-30deg,transparent_48%,rgba(255,255,255,.1)_49%,rgba(255,255,255,.1)_51%,transparent_52%)] [background-size:90px_90px]" />
            <div className="absolute left-[12%] top-[20%] h-44 w-52 rotate-[-8deg] rounded-[35%] bg-[#d7a500]/75" />
            <div className="absolute right-[14%] top-[26%] h-48 w-48 rotate-[13deg] rounded-[30%] bg-[#edbd16]/85" />
            <div className="absolute bottom-[12%] left-[32%] h-44 w-56 rotate-[5deg] rounded-[36%] bg-[#c69400]/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-[#f5b800] bg-[#071d31] shadow-2xl">
                <MapPin className="h-7 w-7 text-[#f5b800]" />
                <strong className="mt-1 text-sm">Riverdale</strong>
                <small className="text-[8px] uppercase text-white/55">
                  Home Base
                </small>
              </div>
            </div>
            <span className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-widest text-white/45">
              Regional project coverage
            </span>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-7">
            <p className="text-xs font-black uppercase tracking-[.16em] text-[#f5b800]">
              Communities Covered
            </p>
            <div className="mt-6 grid gap-4">
              {[
                "Riverdale County",
                "Oak Creek County",
                "Northfield County",
                "Pine Valley County",
                "Lakeside City",
                "Westport City",
                "Surrounding Areas",
              ].map((x) => (
                <span
                  key={x}
                  className="flex items-center gap-3 border-b border-white/10 pb-3 text-sm font-bold last:border-0"
                >
                  <CheckCircle2 className="h-5 w-5 flex-none text-[#f5b800]" />
                  {x}
                </span>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-white/50">
              Don't see your municipality? Contact our team to confirm
              availability.
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className="bg-[#d9a400] px-5 py-16">
        <div className="mx-auto flex max-w-[1450px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl font-black">
              Let's Build Better Communities—Together.
            </h2>
            <p>
              Partner with a contractor that understands public responsibility.
            </p>
          </div>
          <a
            className="bg-[#061a2c] px-8 py-5 font-black uppercase text-white"
            href="mailto:info@civicworks.com"
          >
            Request a Quote
          </a>
        </div>
      </section>
      <footer className="bg-[#061522] px-5 py-16 text-white">
        <div className="mx-auto grid max-w-[1450px] gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-black text-[#f5b800]">CIVICWORKS</h3>
            <p className="mt-4 text-sm text-white/65">
              Building infrastructure that strengthens communities.
            </p>
          </div>
          {["Company", "Services", "Resources"].map((x) => (
            <div key={x}>
              <h3 className="font-black uppercase">{x}</h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                About Us
                <br />
                Projects
                <br />
                Safety
                <br />
                Qualifications
                <br />
                Contact
              </p>
            </div>
          ))}
        </div>
      </footer>
    </main>
  );
}
