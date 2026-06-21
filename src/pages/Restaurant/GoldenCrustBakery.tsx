import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container, CTAButton, RestaurantSubNav } from "../../components";

const bakeryImages = {
  storefront: {
    src: "/images/golden-crust-bakery-card.png",
    alt: "Golden Crust Bakery storefront and fresh bakery display",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_28%_24%,rgba(245,191,86,0.45),transparent_24%),radial-gradient(circle_at_72%_72%,rgba(111,63,34,0.2),transparent_28%),linear-gradient(135deg,#fff8e8,#f4d18a_48%,#8f5429)]",
  },
  case: {
    src: "/images/golden-crust/display-case.jpg",
    alt: "Golden bakery display case with breads, rolls, and pastries",
    fallbackStyle:
      "bg-[linear-gradient(90deg,rgba(109,63,34,0.12)_1px,transparent_1px),linear-gradient(180deg,#fff8e8,#f3d493_54%,#6d3f22)] [background-size:42px_42px]",
  },
};

const morningBakes = [
  {
    name: "Honey Butter Croissant",
    label: "Best seller",
    price: "$5.50",
    note: "Flaky butter layers brushed with local honey and finished warm.",
    time: "7:00 AM",
  },
  {
    name: "Sourdough Country Loaf",
    label: "Fresh today",
    price: "$9.00",
    note: "Naturally leavened for 24 hours with crisp crust and tender crumb.",
    time: "7:30 AM",
  },
  {
    name: "Chocolate Almond Danish",
    label: "Bakery favorite",
    price: "$6.25",
    note: "Dark chocolate, almond cream, toasted almonds, laminated pastry.",
    time: "8:15 AM",
  },
  {
    name: "Cinnamon Morning Roll",
    label: "Limited batch",
    price: "$5.75",
    note: "Soft morning dough, cinnamon sugar, and light vanilla cream glaze.",
    time: "9:00 AM",
  },
];

const caseMenu = [
  ["Classic Baguette", "Crisp crust, open crumb", "$4.75"],
  ["Blueberry Cream Tart", "Vanilla cream, berries", "$6.50"],
  ["Butter Brioche", "Soft, rich, golden", "$7.25"],
  ["Spinach Feta Pastry", "Savory fold, herbs", "$5.95"],
  ["Apple Crumble Slice", "Brown sugar oat topping", "$5.25"],
  ["Sesame Bagel", "Chewy, toasted sesame", "$3.75"],
  ["Mini Cheesecake", "Lemon zest, graham base", "$4.95"],
  ["Seasonal Fruit Galette", "Market fruit, flaky crust", "$6.75"],
];

const processSteps = [
  ["Mix", "Flour, butter, starter, and seasonal fillings are measured in small batches."],
  ["Rest", "Doughs develop flavor slowly before shaping begins."],
  ["Shape", "Loaves are scored, pastry is folded, and morning trays are finished by hand."],
  ["Bake", "The first shelves land warm before the neighborhood breakfast rush."],
];

const notes = [
  {
    quote:
      "The sourdough tastes like it came from a tiny European bakery, but the staff makes it feel like home.",
    name: "Maya Henderson",
  },
  {
    quote:
      "I stop in after school drop-off for a croissant and coffee. It is the warmest part of my morning.",
    name: "Daniel Ortiz",
  },
  {
    quote:
      "Their fruit galette and cinnamon rolls are what I bring when I want everyone to ask where they came from.",
    name: "Priya Shah",
  },
];

function BakeryImage({
  src,
  alt,
  fallbackStyle,
  className = "",
  children,
}: {
  src: string;
  alt: string;
  fallbackStyle: string;
  className?: string;
  children?: ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className={`absolute inset-0 ${fallbackStyle}`} />
      {isLoaded && (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setIsLoaded(false)}
        />
      )}
      {children}
    </div>
  );
}

function PastryShelf() {
  return (
    <div className="grid gap-4">
      {[0, 1, 2].map((row) => (
        <div key={row} className="border-b-4 border-[#6d3f22]/30 pb-4">
          <div className="grid grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((item) => (
              <div
                key={item}
                className={`aspect-square ${
                  (row + item) % 3 === 0
                    ? "rounded-t-[3rem] rounded-b-xl bg-gradient-to-br from-[#b87536] via-[#d99a35] to-[#fff0bf]"
                    : (row + item) % 3 === 1
                      ? "rounded-full bg-gradient-to-br from-[#f7c75f] via-[#d89131] to-[#7a4524]"
                      : "rounded-[1.25rem] bg-gradient-to-br from-[#fff1c7] via-[#d99a35] to-[#8f5429]"
                } shadow-lg shadow-[#6d3f22]/10`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function GoldenCrustBakery() {
  return (
    <main className="brand-motion motion-goldencrust bg-[#fff8e8] text-[#332015]">
      <RestaurantSubNav
        brand="Golden Crust Bakery"
        links={[
          { label: "Window", href: "#window" },
          { label: "Morning Bakes", href: "#bakes" },
          { label: "Case Menu", href: "#case-menu" },
          { label: "Process", href: "#process" },
          { label: "Visit", href: "#visit" },
        ]}
        ctaLabel="Morning Hours"
        ctaHref="#visit"
        className="border-b border-[#efd9a8] bg-[#fff8e8]/95 shadow-sm shadow-[#6f3f22]/5"
        brandClassName="text-[#6d3f22]"
        linkClassName="px-3 py-2 text-[#6d3f22] transition hover:bg-[#f4dfad] hover:text-[#9f661f]"
        ctaClassName="bg-[#6d3f22] text-[#fff8e8] shadow-sm hover:bg-[#4b2b19]"
        menuButtonClassName="border-[#e8c985] text-[#6d3f22] hover:bg-[#f4dfad]"
        mobilePanelClassName="border border-[#efd9a8] bg-[#fff8e8]"
      />

      <section id="window" className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(109,63,34,0.08)_1px,transparent_1px),linear-gradient(rgba(217,165,69,0.13)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <Container className="relative pb-16 md:pb-24">
          <div className="grid min-h-[720px] border border-[#6d3f22]/20 bg-[#fffaf0] shadow-2xl shadow-[#6d3f22]/10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col justify-between border-b border-[#6d3f22]/20 p-6 md:p-10 lg:border-b-0 lg:border-r">
              <div>
                <div className="inline-flex border-y border-[#b3772e]/35 py-3 text-xs font-black uppercase tracking-[0.28em] text-[#9f661f]">
                  Fresh baked daily / first tray at 7
                </div>
                <h1 className="mt-8 max-w-3xl text-5xl font-black leading-[0.94] text-[#332015] md:text-7xl">
                  A bakery window for warm mornings.
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-[#6d3f22]">
                  Golden Crust turns early dough, real butter, and neighborhood
                  rituals into shelves of bread, pastry, and weekend treats
                  worth carrying home in a paper bag.
                </p>
              </div>

              <div className="mt-10">
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ["30+", "daily bakes"],
                    ["5:30", "kitchen start"],
                    ["9 AM", "pastry restock"],
                  ].map(([value, label]) => (
                    <div key={label} className="border border-[#efd9a8] bg-white p-4">
                      <p className="text-3xl font-black text-[#9f661f]">{value}</p>
                      <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-[#6d3f22]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <CTAButton href="#bakes" size="lg" className="bg-[#e5a939] text-[#332015] hover:bg-[#f1bd55]">
                    View Today's Bakes
                  </CTAButton>
                  <CTAButton href="#visit" variant="outline" size="lg" className="border-[#6d3f22] text-[#6d3f22] hover:bg-[#f4dfad]">
                    Visit Bakery
                  </CTAButton>
                </div>
              </div>
            </div>

            <div className="relative min-h-[560px] bg-[#f4dfad] p-5 md:p-8">
              <BakeryImage
                src={bakeryImages.storefront.src}
                alt={bakeryImages.storefront.alt}
                fallbackStyle={bakeryImages.storefront.fallbackStyle}
                className="h-full min-h-[520px] border border-[#6d3f22]/20 bg-[#fff8e8]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,232,0.08),rgba(51,32,21,0.42))]" />
                <div className="absolute left-6 top-6 bg-[#332015] px-4 py-3 text-xs font-black uppercase tracking-[0.22em] text-[#f2c45d]">
                  Bakery display
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-[#fffaf0]/92 p-5 shadow-xl backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b3772e]">
                    Today's first tray
                  </p>
                  <p className="mt-2 text-3xl font-black text-[#332015]">
                    Honey croissants at 7:00 AM
                  </p>
                </div>
              </BakeryImage>
            </div>
          </div>
        </Container>
      </section>

      <section id="bakes" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[20rem_1fr]">
            <aside className="bg-[#332015] p-7 text-[#fff8e8]">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f2c45d]">
                Morning bakes
              </p>
              <h2 className="mt-4 text-4xl font-black leading-none">
                Pulled warm, sold by the tray.
              </h2>
              <p className="mt-6 leading-7 text-[#f8dfac]">
                This section acts like a bakery shelf: simple rows, clear times,
                warm labels, and no restaurant-card repetition.
              </p>
            </aside>

            <div className="border-y border-[#6d3f22]/25">
              {morningBakes.map((item, index) => (
                <article
                  key={item.name}
                  className="grid gap-5 border-b border-[#6d3f22]/20 py-6 last:border-b-0 md:grid-cols-[5rem_1fr_auto] md:items-center"
                >
                  <div className="text-sm font-black uppercase tracking-[0.16em] text-[#b3772e]">
                    {item.time}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-3xl font-black leading-none">{item.name}</h3>
                      <span className="bg-[#e5a939] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#332015]">
                        {item.label}
                      </span>
                    </div>
                    <p className="mt-3 max-w-2xl leading-7 text-[#6d3f22]">{item.note}</p>
                  </div>
                  <div className="text-3xl font-black text-[#9f661f] md:text-right">
                    {item.price}
                  </div>
                  {index === 0 && <span className="hidden" />}
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="case-menu" className="bg-[#fffaf0] py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="border border-[#efd9a8] bg-white p-6 md:p-8">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b3772e]">
                Case menu
              </p>
              <h2 className="mt-4 text-5xl font-black leading-none text-[#332015] md:text-6xl">
                The counter changes as the morning moves.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#6d3f22]">
                Specials rotate with the season, the market, and whatever the
                bakers are most excited to pull from the oven.
              </p>
              <div className="mt-8 bg-[#f4dfad] p-5">
                <PastryShelf />
              </div>
            </div>

            <div className="grid gap-px bg-[#6d3f22]/25">
              {caseMenu.map(([name, note, price]) => (
                <article key={name} className="flex items-start justify-between gap-5 bg-[#fff8e8] p-5">
                  <div>
                    <h3 className="text-xl font-black">{name}</h3>
                    <p className="mt-2 leading-6 text-[#6d3f22]">{note}</p>
                  </div>
                  <span className="shrink-0 bg-[#332015] px-3 py-1 text-sm font-black text-[#fff8e8]">
                    {price}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="process" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="font-black uppercase tracking-[0.24em] text-[#b3772e]">
              Baking process
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              From starter to shelf, every step has a reason.
            </h2>
          </div>
          <div className="relative border-l-4 border-[#e5a939] pl-6 md:pl-10">
            {processSteps.map(([step, text], index) => (
              <article key={step} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[2.15rem] top-1 grid h-8 w-8 place-items-center bg-[#e5a939] text-xs font-black text-[#332015] md:-left-[3.15rem]">
                  {index + 1}
                </span>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b3772e]">
                  {step}
                </p>
                <p className="mt-2 max-w-3xl text-2xl font-black leading-snug text-[#332015]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[#efd9a8] bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {notes.map((item) => (
              <blockquote key={item.name} className="border border-[#efd9a8] bg-[#fffaf0] p-7 shadow-[8px_8px_0_#e5a939]">
                <p className="text-xl font-bold leading-8 text-[#332015]">"{item.quote}"</p>
                <footer className="mt-8 border-t border-[#efd9a8] pt-4 text-sm font-black uppercase tracking-[0.18em] text-[#9f661f]">
                  {item.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section id="visit" className="bg-[#e5a939] py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_23rem] lg:items-stretch">
            <div className="border-y border-[#332015]/25 py-8">
              <p className="font-black uppercase tracking-[0.22em] text-[#6d3f22]">
                Visit us
              </p>
              <h2 className="mt-4 max-w-4xl text-5xl font-black leading-none text-[#332015] md:text-7xl">
                Come early for warm bread and a full pastry case.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6d3f22]">
                Bring the family, grab a table by the front window, or take a
                paper bag of fresh bakes to go.
              </p>
              <CTAButton
                href="tel:5550188000"
                size="lg"
                className="mt-8 bg-[#332015] text-white hover:bg-[#24160f]"
              >
                Call (555) 018-8000
              </CTAButton>
            </div>

            <div className="bg-[#332015] p-6 text-[#fff8e8]">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f2c45d]">
                Bakery card
              </p>
              <div className="mt-6 space-y-5 text-[#f8dfac]">
                <p className="text-2xl font-black text-[#fff8e8]">Daily 7 AM - 3 PM</p>
                <p>First bread batch at 7 AM.</p>
                <p>Pastry restock around 9 AM.</p>
                <div className="border-t border-white/15 pt-5">
                  <p>88 Brioche Lane</p>
                  <p className="mt-2">Old Market District, Suite 4</p>
                  <p className="mt-2">hello@goldencrust.example</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#efd9a8] bg-[#fff8e8] py-8">
        <Container className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <Link to="/restaurant" className="font-black text-[#6d3f22] transition hover:text-[#b3772e]">
            Back to Restaurant Collection
          </Link>
          <Link to="/" className="font-black text-[#9f661f] transition hover:text-[#332015]">
            Back to 100 Designs Portfolio
          </Link>
        </Container>
      </section>

      <footer className="bg-[#332015] py-12 text-[#fff8e8]">
        <Container className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <p className="text-2xl font-black">Golden Crust Bakery</p>
            <p className="mt-3 max-w-sm leading-7 text-[#f8dfac]">
              Handcrafted bread, warm pastries, and neighborhood mornings baked
              fresh every day.
            </p>
          </div>
          <div>
            <p className="font-black text-[#f2c45d]">Hours</p>
            <p className="mt-3 leading-7 text-[#f8dfac]">Daily<br />7 AM - 3 PM</p>
          </div>
          <div>
            <p className="font-black text-[#f2c45d]">Location</p>
            <p className="mt-3 leading-7 text-[#f8dfac]">88 Brioche Lane<br />Old Market District</p>
          </div>
          <div>
            <p className="font-black text-[#f2c45d]">Social</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm font-bold text-[#fff8e8]">
              <a href="#visit" className="hover:text-[#f2c45d]">Instagram</a>
              <a href="#visit" className="hover:text-[#f2c45d]">Facebook</a>
              <a href="#visit" className="hover:text-[#f2c45d]">Reviews</a>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
