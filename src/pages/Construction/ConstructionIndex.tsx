import { Link } from "react-router-dom";
import { AnimatedSection, Container, CTAButton } from "../../components";
import { constructionWebsites } from "../../data/websites";

const serviceTypes = [
  "Custom Homes",
  "Renovations",
  "Commercial Buildouts",
  "Project Planning",
  "Permits",
  "Site Management",
];

const uxNotes = [
  [
    "Proof wins trust",
    "Construction pages need project evidence, credentials, process clarity, and visible service areas.",
  ],
  [
    "Quote paths matter",
    "Users should understand the scope, timeline, and next step before they request an estimate.",
  ],
  [
    "Rugged but readable",
    "The visual system can feel sturdy and hands-on while keeping content organized for scanning.",
  ],
];

const comingSoonConcepts = [
  ["Summit Roof Co.", "roofing estimates and storm repair"],
  ["ClearLine Remodeling", "kitchen and bath transformations"],
  ["IronGate Commercial", "tenant improvements and buildouts"],
  ["StoneField Landscapes", "outdoor living and hardscape projects"],
  ["PrimeDeck Builders", "decks, pergolas, and backyard upgrades"],
  ["CivicWorks Contractors", "municipal and infrastructure projects"],
  ["ForgeLine Electrical", "residential and commercial electrical work"],
  ["TerraForm Concrete", "foundations, flatwork, and structural concrete"],
  ["BluePeak Plumbing", "plumbing installation and emergency service"],
];

export function ConstructionIndex() {
  const liveWebsites = constructionWebsites.filter(
    (website) => website.status === "completed" || website.status === "live",
  );
  const normalizeName = (name: string) =>
    name.toLowerCase().replace(/[^a-z0-9]/g, "");
  const liveNames = new Set(
    liveWebsites.map((website) => normalizeName(website.title)),
  );
  const upcomingConcepts = comingSoonConcepts.filter(
    ([name]) => !liveNames.has(normalizeName(name)),
  );
  const totalConcepts = liveWebsites.length + upcomingConcepts.length;

  return (
    <main className="bg-[#faf7ef] text-[#1f2428]">
      <section className="relative -mt-16 overflow-hidden bg-[#252525] pb-20 pt-24 text-white md:pb-28 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(217,119,6,0.42),transparent_28%),radial-gradient(circle_at_84%_24%,rgba(254,243,199,0.18),transparent_22%),linear-gradient(135deg,#1f1f1f,#3f3f46_58%,#171717)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_56px)]" />
        <Container>
          <AnimatedSection className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <Link
                to="/"
                className="text-sm font-bold text-white/70 transition hover:text-white"
              >
                Back to Home
              </Link>
              <div className="mt-8 inline-flex border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#fbbf24]">
                {liveWebsites.length} live / {totalConcepts} total concepts
              </div>
              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl">
                Construction websites built for trust, proof, and quote
                requests.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
                A category hub for contractors, builders, remodelers, roofers,
                commercial crews, and specialty trades that need strong project
                proof and a clear path from interest to estimate.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton
                  href="#live-concepts"
                  size="lg"
                  className="bg-[#fbbf24] text-[#252525] hover:bg-white"
                >
                  Explore Live Websites
                </CTAButton>
                <CTAButton
                  href="#roadmap"
                  variant="outline"
                  size="lg"
                  className="border-white/40 text-white hover:bg-white/10"
                >
                  See Roadmap
                </CTAButton>
              </div>
            </div>

            <div className="relative min-h-[520px]">
              <div className="absolute right-0 top-8 h-[29rem] w-full border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="grid h-full grid-rows-[1fr_auto] overflow-hidden bg-[#fef3c7] text-[#1f2428]">
                  <div className="relative bg-[linear-gradient(135deg,#fef3c7,#3f3f46_54%,#d97706)]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:46px_46px]" />
                    <div className="absolute left-8 top-8 border border-white/50 bg-white/92 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#92400e] shadow-sm">
                      Licensed and insured
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 bg-white/94 p-5 shadow-xl">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#92400e]">
                        ForgePoint Builders
                      </p>
                      <p className="mt-2 text-3xl font-black">
                        Projects scoped clearly before the first wall moves.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 border-t border-stone-200 bg-white text-center">
                    {[
                      ["18+", "Years"],
                      ["240", "Projects"],
                      ["A+", "Rating"],
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        className="border-r border-stone-200 p-4 last:border-r-0"
                      >
                        <p className="text-2xl font-black text-[#92400e]">
                          {value}
                        </p>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-stone-500">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="border-b border-[#eadfc8] bg-white py-8">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {serviceTypes.map((service) => (
              <span
                key={service}
                className="rounded-full border border-[#eadfc8] bg-[#faf7ef] px-4 py-2 text-sm font-bold text-stone-600"
              >
                {service}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section id="live-concepts" className="py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#92400e]">
                Live websites
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                {liveWebsites.length} contractor websites ready to explore.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-stone-600">
              Compare distinct construction niches, visual systems, project
              storytelling, and conversion paths across complete responsive
              homepage experiences.
            </p>
          </AnimatedSection>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {liveWebsites.map((website) => (
              <Link
                key={website.id}
                to={`/construction/${website.slug}`}
                className="group flex min-h-full flex-col overflow-hidden rounded-2xl border border-[#eadfc8] bg-white shadow-lg shadow-stone-950/8 transition duration-300 hover:-translate-y-2 hover:border-[#d6b77c] hover:shadow-2xl"
              >
                <div
                  className="relative min-h-64 overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(145deg, ${website.colors.secondary} 0%, ${website.colors.primary} 56%, ${website.colors.accent} 100%)`,
                  }}
                >
                  {website.image && (
                    <img
                      src={website.image}
                      alt={`${website.title} website preview`}
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                  <div
                    className={`absolute inset-0 ${website.image ? "bg-gradient-to-t from-[#1f2428]/55 via-transparent to-transparent" : "bg-[linear-gradient(90deg,rgba(255,255,255,0.24)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:44px_44px]"}`}
                  />
                  <div className="absolute bottom-5 left-5 flex gap-2">
                    {[
                      website.colors.primary,
                      website.colors.secondary,
                      website.colors.accent,
                      website.colors.dark,
                    ].map((color) => (
                      <span
                        key={color}
                        className="h-7 w-7 rounded-full border border-white/80 shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#92400e]">
                      Live website
                    </p>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">
                      Ready
                    </span>
                  </div>
                  <h3 className="mt-4 text-3xl font-black transition group-hover:text-[#92400e]">
                    {website.title}
                  </h3>
                  <p className="mt-3 text-sm font-bold text-stone-600">
                    {website.style}
                  </p>
                  <p className="mt-5 text-base leading-7 text-stone-600">
                    {website.shortDescription}
                  </p>
                  <div className="mt-auto pt-7">
                    <span className="inline-flex w-full items-center justify-center rounded-xl bg-[#1f2428] px-4 py-4 text-sm font-bold text-white transition group-hover:bg-[#92400e]">
                      View Website{" "}
                      <span className="ml-2 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <AnimatedSection className="mt-16 overflow-hidden rounded-2xl border border-[#eadfc8] bg-[#fef3c7] p-7 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#92400e]">
                  Construction UX essentials
                </p>
                <h3 className="mt-4 text-3xl font-black md:text-4xl">
                  Proof turns project uncertainty into confidence.
                </h3>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {uxNotes.map(([title, text], index) => (
                  <article
                    key={title}
                    className="rounded-xl bg-white p-6 shadow-sm"
                  >
                    <span className="text-sm font-black text-[#d97706]">
                      0{index + 1}
                    </span>
                    <h4 className="mt-3 text-xl font-black">{title}</h4>
                    <p className="mt-2 text-sm leading-6 text-stone-600">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section
        id="roadmap"
        className="border-y border-[#eadfc8] bg-white py-20 md:py-28"
      >
        <Container>
          <AnimatedSection className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#92400e]">
                Roadmap
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                More trade and contractor niches can follow.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-stone-600">
              Upcoming concepts stay here until their status becomes live or
              completed. Published websites are removed automatically.
            </p>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {upcomingConcepts.map(([name, focus], index) => (
              <article
                key={name}
                className="group overflow-hidden border border-[#eadfc8] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-40 overflow-hidden bg-[linear-gradient(145deg,#faf7ef,#3f3f46_58%,#d97706)]">
                  <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(90deg,white_1px,transparent_1px),linear-gradient(white_1px,transparent_1px)] [background-size:32px_32px]" />
                  <div className="absolute bottom-0 left-[12%] h-[50%] w-[28%] bg-white/20" />
                  <div className="absolute bottom-0 right-[16%] h-[75%] w-[34%] bg-white/30 [clip-path:polygon(50%_0,100%_36%,100%_100%,0_100%,0_36%)]" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#92400e]">
                    Coming soon
                  </div>
                  <span className="absolute bottom-4 left-4 text-xs font-black uppercase tracking-[0.16em] text-white">
                    Concept{" "}
                    {String(index + liveWebsites.length + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#92400e]">
                    Trade & contractor
                  </p>
                  <h3 className="mt-3 text-2xl font-black">{name}</h3>
                  <p className="mt-2 text-sm font-bold capitalize text-stone-500">
                    {focus}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-stone-600">
                    A proof-led contractor concept featuring services, completed
                    work, credentials, service areas, and a straightforward
                    quote request.
                  </p>
                  <div className="mt-5 flex gap-2 border-t border-stone-200 pt-5">
                    {["#3f3f46", "#faf7ef", "#d97706", "#171717"].map(
                      (color) => (
                        <span
                          key={color}
                          className="h-6 w-6 rounded-full border border-stone-300"
                          style={{ backgroundColor: color }}
                        />
                      ),
                    )}
                  </div>
                  <Link to="/construction/coming-soon">
                    <span className="mt-5 inline-flex w-full  items-center justify-center rounded-lg bg-stone-100 px-4 py-3 text-sm font-bold text-stone-500">
                      Coming Soon
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
