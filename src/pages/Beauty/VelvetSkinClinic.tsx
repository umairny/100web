import { Link } from 'react-router-dom'
import { Container, CTAButton, SubWebsiteNav } from '../../components'

const treatments = [
  ['Signature Glow Facial', 'Hydration, barrier support, gentle resurfacing, and a calm post-treatment finish.', '$145'],
  ['Texture Reset Peel', 'A progressive peel plan for uneven tone, congestion, and dull texture.', '$185'],
  ['LED Recovery Session', 'Red and blue light therapy paired with cooling serums and a quiet recovery room.', '$95'],
]

const careSteps = [
  ['01', 'Skin consult', 'Aesthetic goals, sensitivities, routines, and treatment history shape the plan.'],
  ['02', 'Treatment map', 'A clear protocol explains what happens today, what changes later, and how skin should respond.'],
  ['03', 'Home rhythm', 'Simple product guidance and timing notes keep results steady between visits.'],
]

const specialists = [
  ['Mara Ellison', 'Licensed Esthetician', 'Barrier repair, sensitive skin, glow treatments'],
  ['Tessa Grant', 'Skin Therapist', 'Texture, peels, LED, acne-support protocols'],
]

export function VelvetSkinClinic() {
  return (
    <main className="brand-motion bg-[#fff7f5] text-[#3d3030]">
      <SubWebsiteNav
        brand="Velvet Skin Clinic"
        collectionPath="/beauty"
        links={[{ label: 'Treatments', href: '#treatments' }, { label: 'Method', href: '#method' }, { label: 'Specialists', href: '#specialists' }, { label: 'Book', href: '#book' }]}
        ctaLabel="Book Consult"
        ctaHref="#book"
        className="border-b border-[#ead3cf] bg-[#fff7f5]/95"
        brandClassName="text-[#9f6f6f]"
        linkClassName="text-[#6f5757] transition hover:bg-white/75 hover:text-[#b98f8f]"
        ctaClassName="bg-[#3d3030] text-white hover:bg-[#9f6f6f]"
        menuButtonClassName="border-[#ead3cf] text-[#9f6f6f] hover:bg-white/70"
        mobilePanelClassName="border border-[#ead3cf] bg-[#fff7f5]"
      />

      <section className="relative overflow-hidden bg-[#fff7f5] pt-28 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(185,143,143,0.24),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(232,199,187,0.32),transparent_24%),linear-gradient(135deg,#fff7f5,#ffffff_54%,#f4e2dc)]" />
        <div className="absolute right-0 top-0 hidden h-full w-28 bg-[#3d3030] lg:block" />
        <Container className="relative grid items-center gap-12 pb-20 md:grid-cols-[0.95fr_1.05fr] md:pb-28">
          <div>
            <Link to="/beauty" className="text-sm font-bold text-[#9f6f6f] transition hover:text-[#3d3030]">
              Back to Beauty Collection
            </Link>
            <p className="mt-8 text-sm font-black uppercase tracking-[0.28em] text-[#b98f8f]">Clinical skincare studio</p>
            <h1 className="mt-4 max-w-5xl text-5xl font-black leading-[0.94] md:text-7xl">
              Skin treatments that feel precise, soft, and never rushed.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6f5757]">
              Velvet Skin Clinic blends esthetic expertise with a calmer treatment experience: facials, peels,
              LED recovery, and skin plans explained in plain language before anything touches your face.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="#book" size="lg" className="bg-[#3d3030] text-white hover:bg-[#9f6f6f]">
                Book Skin Consult
              </CTAButton>
              <CTAButton href="#treatments" variant="outline" size="lg" className="border-[#b98f8f] bg-white/60 text-[#9f6f6f] hover:bg-white">
                View Treatments
              </CTAButton>
            </div>
          </div>

          <div className="relative mx-auto min-h-[560px] w-full max-w-xl">
            <div className="absolute left-1/2 top-6 h-[31rem] w-[24rem] -translate-x-1/2 rounded-t-[13rem] rounded-b-[3rem] bg-[#3d3030] shadow-2xl shadow-[#b98f8f]/20" />
            <div className="absolute left-1/2 top-16 h-[24rem] w-[18rem] -translate-x-1/2 rounded-t-[10rem] rounded-b-[2rem] bg-[linear-gradient(160deg,#fffdfb,#e8c7bb_46%,#b98f8f)] p-5">
              <div className="h-full rounded-t-[8rem] rounded-b-[1.5rem] border border-white/70 bg-white/45" />
            </div>
            <div className="absolute left-2 top-24 w-52 rotate-[-5deg] border border-[#ead3cf] bg-white p-5 shadow-xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b98f8f]">Today</p>
              <p className="mt-2 text-2xl font-black text-[#3d3030]">Glow Facial</p>
              <p className="mt-2 text-sm leading-6 text-[#6f5757]">Barrier support, hydration, soft finish.</p>
            </div>
            <div className="absolute bottom-24 right-0 w-56 rotate-[4deg] bg-[#fffdfb] p-5 shadow-xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b98f8f]">Recovery note</p>
              <p className="mt-2 text-2xl font-black text-[#3d3030]">No guesswork after treatment.</p>
            </div>
            <div className="absolute bottom-0 left-1/2 grid w-full max-w-md -translate-x-1/2 grid-cols-3 border border-[#ead3cf] bg-white/92 text-center shadow-xl">
              {[
                ['45m', 'consults'],
                ['2', 'specialists'],
                ['24h', 'aftercare'],
              ].map(([value, label]) => (
                <div key={label} className="border-r border-[#ead3cf] p-4 last:border-r-0">
                  <p className="text-2xl font-black text-[#9f6f6f]">{value}</p>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#6f5757]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="treatments" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b98f8f]">Treatments</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Soft clinical care, mapped to real skin goals.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#6f5757]">
              The page is built around confidence: treatment purpose, timing, price cues, and a gentle route into booking.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {treatments.map(([name, detail, price]) => (
              <article key={name} className="rounded-[2rem] border border-[#ead3cf] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-6 aspect-[4/3] rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_28%,#fffdfb_0_18%,transparent_19%),linear-gradient(135deg,#fff7f5,#b98f8f_58%,#3d3030)]" />
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black">{name}</h3>
                  <span className="rounded-full bg-[#fff7f5] px-3 py-1 text-sm font-black text-[#9f6f6f]">{price}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-[#6f5757]">{detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="method" className="border-y border-[#ead3cf] bg-white py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b98f8f]">The Velvet method</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">A treatment plan clients can understand before they commit.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {careSteps.map(([number, title, text]) => (
              <article key={title} className="bg-[#fff7f5] p-7 shadow-sm">
                <p className="text-5xl font-black text-[#b98f8f]">{number}</p>
                <h3 className="mt-8 text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#6f5757]">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="specialists" className="py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b98f8f]">Specialists</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Expert enough to trust. Warm enough to ask questions.</h2>
            <p className="mt-5 text-lg leading-8 text-[#6f5757]">
              Skin clinic pages need provider trust without becoming cold. These cards keep credentials and care style together.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {specialists.map(([name, role, focus]) => (
              <article key={name} className="border border-[#ead3cf] bg-white p-7 shadow-sm">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#3d3030] text-2xl font-black text-white">
                  {name.split(' ').map((part) => part[0]).join('')}
                </div>
                <h3 className="text-2xl font-black">{name}</h3>
                <p className="mt-2 text-sm font-black uppercase tracking-[0.16em] text-[#b98f8f]">{role}</p>
                <p className="mt-4 text-sm leading-7 text-[#6f5757]">{focus}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-6 md:grid-cols-3">
          {['The consult felt honest and calm.', 'My skin looked fresh without feeling irritated.', 'They explained every step before starting.'].map((quote) => (
            <blockquote key={quote} className="rounded-3xl bg-[#fff7f5] p-8">
              <p className="text-xl font-bold leading-8">"{quote}"</p>
              <footer className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#b98f8f]">Skin client</footer>
            </blockquote>
          ))}
        </Container>
      </section>

      <section id="book" className="bg-[#3d3030] py-20 text-white md:py-28">
        <Container className="text-center">
          <h2 className="text-4xl font-black md:text-5xl">Book a skin consult at Velvet.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">Start with a consult, then choose the treatment rhythm that fits your skin and schedule.</p>
          <CTAButton href="tel:555-0214" size="lg" className="mt-8 bg-[#e8c7bb] text-[#3d3030] hover:bg-white">Call (555) 021-4000</CTAButton>
        </Container>
      </section>

      <section className="border-t border-[#ead3cf] py-8"><Container><Link to="/beauty" className="font-bold text-[#9f6f6f] hover:text-[#3d3030]">Back to Beauty Collection</Link></Container></section>
      <footer className="py-10"><Container className="flex flex-col justify-between gap-4 text-sm md:flex-row"><p className="font-black">Velvet Skin Clinic</p><p className="text-[#6f5757]">Facials, peels, LED recovery, and skincare plans</p></Container></footer>
    </main>
  )
}
