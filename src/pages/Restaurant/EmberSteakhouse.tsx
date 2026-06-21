import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container, CTAButton, RestaurantSubNav } from "../../components";

const emberImages = {
  hero: {
    src: "/images/ember/hero-steak.jpg",
    alt: "Ember Steakhouse ribeye with charred crust and warm dining room light",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_34%_30%,rgba(227,106,44,0.38),transparent_22%),radial-gradient(circle_at_72%_72%,rgba(230,182,109,0.2),transparent_28%),linear-gradient(135deg,#0f0f10,#26211d_48%,#5d2d19)]",
  },
  ribeye: {
    src: "/images/ember/prime-ribeye.jpg",
    alt: "Prime ribeye steak with ember butter and rosemary",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_42%_42%,#e36a2c_0_20%,transparent_21%),radial-gradient(circle_at_62%_62%,#e6b66d_0_12%,transparent_13%),linear-gradient(135deg,#211713,#5d2d19,#0f0f10)]",
  },
  filet: {
    src: "/images/ember/filet-mignon.jpg",
    alt: "Filet mignon with black garlic jus on dark plate",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_48%_46%,#7a3420_0_18%,transparent_19%),radial-gradient(circle_at_68%_30%,#e6b66d_0_10%,transparent_11%),linear-gradient(135deg,#161414,#30231d,#0f0f10)]",
  },
  strip: {
    src: "/images/ember/dry-aged-strip.jpg",
    alt: "Dry-aged strip steak with smoked salt and bone marrow glaze",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_38%_42%,#a94825_0_18%,transparent_19%),radial-gradient(circle_at_70%_66%,#f4ead7_0_9%,transparent_10%),linear-gradient(135deg,#0f0f10,#3c241b,#161414)]",
  },
  diningRoom: {
    src: "/images/ember/private-dining.jpg",
    alt: "Dark elegant private dining room at Ember Steakhouse",
    fallbackStyle:
      "bg-[linear-gradient(90deg,rgba(244,234,215,0.08)_1px,transparent_1px),linear-gradient(180deg,#0f0f10,#201915_58%,#3b2118)] [background-size:42px_42px]",
  },
};

const signatureCuts = [
  {
    name: "Prime Ribeye",
    label: "Best Seller",
    price: "$58",
    image: emberImages.ribeye,
    detail: "16 oz prime cut, ember butter, charred rosemary, smoked sea salt.",
  },
  {
    name: "Filet Mignon",
    label: "Classic",
    price: "$64",
    image: emberImages.filet,
    detail: "8 oz center cut, black garlic jus, crisp shallots, warm plate finish.",
  },
  {
    name: "Dry-Aged Strip",
    label: "28-Day Aged",
    price: "$72",
    image: emberImages.strip,
    detail: "New York strip, bone marrow glaze, cracked pepper, charred lemon.",
  },
];

const menuItems = [
  ["Ember Potatoes", "Crisp edges, smoked paprika, roasted garlic aioli", "$14"],
  ["Creamed Spinach", "Gruyere, nutmeg, toasted breadcrumbs", "$16"],
  ["Wild Mushrooms", "Herb butter, shallots, sherry vinegar", "$18"],
  ["Bone Marrow Toast", "Parsley salad, sourdough, black pepper", "$22"],
  ["Wedge Salad", "Blue cheese, bacon, chives, ember tomato", "$17"],
  ["Dark Chocolate Torte", "Espresso cream, smoked salt, cocoa nibs", "$15"],
];

const diningDetails = [
  {
    title: "Fire-Led Technique",
    text: "Every cut is seared hot, rested patiently, and finished with restrained sauces that support the steak.",
  },
  {
    title: "Polished Service",
    text: "Warm pacing, precise recommendations, and enough ceremony to make dinner feel like an occasion.",
  },
  {
    title: "Private Dining",
    text: "A quieter room for milestone dinners, client evenings, chef menus, and curated wine pairings.",
  },
];

const wineHighlights = [
  "Cabernet-heavy cellar",
  "Old world reds",
  "By-the-glass favorites",
  "Sommelier pairings",
];

const testimonials = [
  {
    quote:
      "The ribeye had a perfect crust, the room felt intimate, and the service never missed a beat.",
    name: "Marcus Hale",
    role: "Anniversary Guest",
  },
  {
    quote:
      "Ember is where we take clients when the meal needs to feel composed, confident, and memorable.",
    name: "Priya Shah",
    role: "Partner, Design Studio",
  },
  {
    quote:
      "A serious steakhouse without feeling stiff. The dry-aged strip and wine pairing were outstanding.",
    name: "Julian Torres",
    role: "Weekend Regular",
  },
];

function EmberImage({
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

function EmberPlateFallback() {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border-[22px] border-[#f4ead7]/12 bg-[#0f0f10]/55 shadow-2xl" />
      <div className="absolute left-1/2 top-1/2 h-36 w-52 -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] rounded-[3rem] bg-[#7a3420] shadow-[0_22px_70px_rgba(0,0,0,0.45)]" />
      <div className="absolute left-[43%] top-[43%] h-4 w-28 rotate-[-18deg] rounded-full bg-[#e6b66d]/70" />
      <div className="absolute bottom-24 right-20 h-16 w-16 rounded-full bg-[#e36a2c]/65 blur-xl" />
    </>
  );
}

export function EmberSteakhouse() {
  return (
    <main className="brand-motion motion-ember bg-[#0f0f10] text-[#f4ead7]">
      <RestaurantSubNav
        brand="Ember Steakhouse"
        links={[
          { label: "About", href: "#about" },
          { label: "Cuts", href: "#steaks" },
          { label: "Private", href: "#private" },
          { label: "Wine", href: "#wine" },
          { label: "Reserve", href: "#reserve" },
        ]}
        ctaLabel="Reserve"
        ctaHref="#reserve"
        className="border-b border-[#f4ead7]/10 bg-[#0f0f10]/95"
        brandClassName="uppercase tracking-[0.2em] text-[#e6b66d]"
        linkClassName="rounded-full px-3 py-2 text-[#f4ead7]/82 transition hover:bg-white/10 hover:text-[#e36a2c]"
        ctaClassName="bg-[#e36a2c] text-white shadow-sm shadow-[#e36a2c]/20 hover:bg-[#c95a22]"
        menuButtonClassName="border-[#f4ead7]/20 text-[#e6b66d] hover:bg-white/10"
        mobilePanelClassName="border border-[#f4ead7]/10 bg-[#0f0f10]"
      />

      <section className="relative overflow-hidden border-b border-[#f4ead7]/10 pt-28 md:pt-36">
        <EmberImage
          src={emberImages.hero.src}
          alt={emberImages.hero.alt}
          fallbackStyle={emberImages.hero.fallbackStyle}
          className="absolute inset-0"
        >
          <EmberPlateFallback />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,15,16,0.96)_0%,rgba(15,15,16,0.82)_38%,rgba(15,15,16,0.5)_68%,rgba(15,15,16,0.82)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,15,16,0.22),#0f0f10_92%)]" />
        </EmberImage>

        <Container className="relative pb-12 md:pb-16">
          <div className="grid min-h-[720px] gap-8 lg:grid-cols-[5rem_minmax(0,1fr)_22rem] lg:items-end">
            <aside className="hidden h-full border-x border-[#f4ead7]/10 lg:flex lg:items-center lg:justify-center">
              <p className="-rotate-90 whitespace-nowrap text-xs font-black uppercase tracking-[0.42em] text-[#e6b66d]">
                Prime steakhouse
              </p>
            </aside>

            <div className="flex min-h-[560px] flex-col justify-end py-10">
              <div className="mb-8 inline-flex w-fit border-y border-[#f4ead7]/20 py-3 text-xs font-black uppercase tracking-[0.28em] text-[#e6b66d]">
                Fire-led dining since 2016
              </div>
              <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-normal text-[#f4ead7] md:text-7xl lg:text-8xl">
                Steak, smoke, and a slower kind of night.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d8c7aa] md:text-xl">
                Ember is a low-lit dining room for prime cuts, polished service,
                deep reds, and dinners that unfold without rushing the table.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#reserve" size="lg" className="bg-[#e36a2c] hover:bg-[#c95a22]">
                  Reserve Tonight
                </CTAButton>
                <CTAButton
                  href="#steaks"
                  variant="outline"
                  size="lg"
                  className="border-[#e6b66d] text-[#e6b66d] hover:bg-white/10"
                >
                  View Cuts
                </CTAButton>
              </div>
            </div>

            <aside className="mb-10 border border-[#f4ead7]/12 bg-[#0f0f10]/78 p-6 shadow-2xl shadow-black/40 backdrop-blur md:p-7">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#e36a2c]">
                Tonight's board
              </p>
              <div className="mt-7 space-y-5">
                {[
                  ["28-Day Strip", "$72"],
                  ["Prime Ribeye", "$58"],
                  ["Filet Mignon", "$64"],
                ].map(([name, price]) => (
                  <div key={name} className="flex items-end justify-between gap-4 border-b border-[#f4ead7]/10 pb-4">
                    <span className="text-lg font-black">{name}</span>
                    <span className="font-black text-[#e6b66d]">{price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 grid grid-cols-2 gap-3 text-sm">
                <div className="border border-[#f4ead7]/10 p-4">
                  <p className="text-2xl font-black text-[#e6b66d]">5 PM</p>
                  <p className="mt-1 text-[#d8c7aa]">Dinner service</p>
                </div>
                <div className="border border-[#f4ead7]/10 p-4">
                  <p className="text-2xl font-black text-[#e6b66d]">12</p>
                  <p className="mt-1 text-[#d8c7aa]">Private seats</p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section id="about" className="border-b border-[#f4ead7]/10 bg-[#161414] py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="border-l border-[#f4ead7]/14 pl-6 md:pl-10">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#e36a2c]">About Ember</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                A dark, elegant dining room for serious steak and long conversations.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#d8c7aa]">
                Ember is built for the kind of dinner where timing matters:
                hard sears, warm plates, composed sides, and service that knows
                when to step in and when to let the table breathe.
              </p>
            </div>
            <div className="grid gap-0 border border-[#f4ead7]/10">
              {diningDetails.map((item) => (
                <article key={item.title} className="border-b border-[#f4ead7]/10 bg-white/[0.035] p-7 last:border-b-0">
                  <div className="mb-8 h-px w-20 bg-[#e36a2c]" />
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#d8c7aa]/82">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="steaks" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div className="border-l-4 border-[#e36a2c] pl-6">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#e36a2c]">Signature steaks</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                A cut list, not a card gallery.
              </h2>
            </div>
            <p className="max-w-2xl leading-7 text-[#d8c7aa]">
              Classic cuts, precise temperatures, and sauces that frame the
              steak instead of covering it.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
            <EmberImage
              src={emberImages.strip.src}
              alt={emberImages.strip.alt}
              fallbackStyle={emberImages.strip.fallbackStyle}
              className="min-h-[520px] border border-[#f4ead7]/10 shadow-2xl shadow-black/30"
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(15,15,16,0.72))]" />
              <div className="absolute bottom-6 left-6 right-6 border border-[#f4ead7]/12 bg-[#0f0f10]/80 p-6 backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e6b66d]">Featured cut</p>
                <p className="mt-2 text-3xl font-black">Dry-aged strip, smoked salt, bone marrow glaze.</p>
              </div>
            </EmberImage>

            <div className="border-y border-[#f4ead7]/10">
              {signatureCuts.map((steak, index) => (
                <article
                  key={steak.name}
                  className="group grid gap-5 border-b border-[#f4ead7]/10 py-7 last:border-b-0 md:grid-cols-[4rem_1fr_auto] md:items-center"
                >
                  <span className="text-sm font-black uppercase tracking-[0.18em] text-[#e36a2c]">
                    0{index + 1}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-3xl font-black">{steak.name}</h3>
                      <span className="bg-[#f4ead7] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#5d2d19]">
                        {steak.label}
                      </span>
                    </div>
                    <p className="mt-3 max-w-2xl leading-7 text-[#d8c7aa]">{steak.detail}</p>
                  </div>
                  <span className="text-3xl font-black text-[#e6b66d] md:text-right">
                    {steak.price}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="private" className="bg-[#f4ead7] py-20 text-[#0f0f10] md:py-28">
        <Container>
          <div className="grid gap-0 overflow-hidden border border-[#0f0f10]/10 bg-white shadow-2xl shadow-[#0f0f10]/12 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="bg-[#0f0f10] p-8 text-[#f4ead7] md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8a4b24]">Private dining</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                A quieter room for milestone nights.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#d8c7aa]">
                Host business dinners, anniversaries, chef-led tastings, and
                celebrations with dedicated service and custom menus.
              </p>
              <div className="mt-8 grid gap-3">
                {["12-seat room", "Chef menus", "Wine pairing"].map((item) => (
                  <div key={item} className="border border-[#f4ead7]/12 p-4">
                    <h3 className="text-xl font-black">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
            <EmberImage
              src={emberImages.diningRoom.src}
              alt={emberImages.diningRoom.alt}
              fallbackStyle={emberImages.diningRoom.fallbackStyle}
              className="min-h-[460px]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_46%,rgba(15,15,16,0.72))]" />
              <div className="absolute bottom-6 left-6 max-w-md bg-[#0f0f10]/82 p-6 text-[#f4ead7] shadow-xl backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#e6b66d]">Private service</p>
                <p className="mt-2 text-2xl font-black">A composed setting for slower evenings.</p>
              </div>
            </EmberImage>
          </div>
        </Container>
      </section>

      <section id="wine" className="border-y border-[#f4ead7]/10 bg-[#161414] py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#e6b66d]">Wine and sides</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Built to support the steak, not distract from it.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#d8c7aa]">
                Bold reds, thoughtful glass pours, and a short list of sides
                with enough richness to complete the table.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {wineHighlights.map((item) => (
                <div key={item} className="rounded-3xl border border-[#f4ead7]/10 bg-white/[0.05] p-6 shadow-xl shadow-black/10">
                  <div className="mb-6 h-2 w-16 rounded-full bg-[#e6b66d]" />
                  <h3 className="text-2xl font-black">{item}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {menuItems.map(([name, note, price]) => (
              <article key={name} className="flex items-start justify-between gap-5 rounded-3xl border border-[#f4ead7]/10 bg-[#0f0f10] p-5 shadow-sm">
                <div>
                  <h3 className="text-xl font-black">{name}</h3>
                  <p className="mt-2 leading-6 text-[#d8c7aa]/78">{note}</p>
                </div>
                <span className="shrink-0 rounded-full bg-[#e6b66d] px-3 py-1 text-sm font-black text-[#0f0f10]">{price}</span>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#e36a2c]">Guest notes</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">What guests remember after the last pour.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="rounded-[2rem] border border-[#f4ead7]/10 bg-[#161414] p-8 shadow-xl shadow-black/12">
                <div className="mb-5 flex gap-1 text-[#e6b66d]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>*</span>
                  ))}
                </div>
                <p className="text-lg font-semibold leading-8">"{testimonial.quote}"</p>
                <footer className="mt-7">
                  <p className="font-black">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-[#d8c7aa]/72">{testimonial.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section id="reserve" className="relative overflow-hidden bg-[#e36a2c] py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.18),transparent_22%),radial-gradient(circle_at_82%_78%,rgba(15,15,16,0.22),transparent_24%)]" />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-white/75">Reserve your evening</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Dinner service begins at five. The best tables go early.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                Call for reservations, private dining inquiries, and wine
                pairing requests.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="tel:555-017-7700" size="lg" className="bg-[#0f0f10] text-white hover:bg-[#26211d]">
                  Call (555) 017-7700
                </CTAButton>
                <CTAButton href="#private" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Private Dining
                </CTAButton>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/20 bg-[#0f0f10]/28 p-6 backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-white/75">Hours</p>
                <div className="mt-5 space-y-3 text-sm text-white/85">
                  <div className="flex justify-between gap-4"><span>Tue - Thu</span><span className="font-bold">5 PM - 10 PM</span></div>
                  <div className="flex justify-between gap-4"><span>Fri - Sat</span><span className="font-bold">5 PM - 11 PM</span></div>
                  <div className="flex justify-between gap-4"><span>Sunday</span><span className="font-bold">5 PM - 9 PM</span></div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/20 bg-[#0f0f10]/28 p-6 backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-white/75">Location</p>
                <div className="mt-5 space-y-3 text-sm text-white/85">
                  <p>19 Ashford Lane</p>
                  <p>Old Market Dining District</p>
                  <p>Valet after 5 PM</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <footer className="border-t border-[#f4ead7]/10 bg-[#0a0a0b] py-12 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-2xl font-black text-[#f4ead7]">Ember Steakhouse</p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/65">
                Prime steak, fire-led technique, private dining, and a wine list
                made for slower evenings.
              </p>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#e6b66d]">Hours</p>
              <div className="mt-4 space-y-2 text-sm text-white/65">
                <p>Tue - Thu: 5 PM - 10 PM</p>
                <p>Fri - Sat: 5 PM - 11 PM</p>
                <p>Sunday: 5 PM - 9 PM</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#e6b66d]">Location & Social</p>
              <div className="mt-4 space-y-2 text-sm text-white/65">
                <p>19 Ashford Lane, Old Market</p>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Private Events</p>
              </div>
            </div>
          </div>
        </Container>
      </footer>

      <section className="border-t border-[#f4ead7]/10 bg-[#0f0f10] py-10">
        <Container className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <Link to="/restaurant" className="font-bold text-[#e6b66d] hover:text-[#e36a2c]">
            Back to Restaurant Collection
          </Link>
          <Link to="/" className="font-bold text-[#d8c7aa] hover:text-[#e36a2c]">
            Back to 100 Designs Portfolio
          </Link>
        </Container>
      </section>
    </main>
  );
}
