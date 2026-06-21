import { Container, CTAButton, SubWebsiteNav } from '../../components'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Insurance', href: '#insurance' },
  { label: 'Visit', href: '#visit' },
]

const services = [
  ['Annual Wellness', 'Preventive visits, screenings, labs, and care planning in one clear appointment.'],
  ['Same-Week Sick Visits', 'Fast support for common symptoms, medication questions, and follow-up needs.'],
  ['Chronic Care', 'Ongoing support for blood pressure, diabetes, asthma, and long-term health goals.'],
]

const doctors = [
  ['Dr. Maya Chen', 'Family Medicine', 'Preventive care, women\'s health, chronic care'],
  ['Dr. Aaron Patel', 'Internal Medicine', 'Adult primary care, metabolic health, hypertension'],
]

const visitSteps = [
  ['01', 'Choose your visit', 'Select wellness, sick visit, telehealth, or follow-up care.'],
  ['02', 'Confirm coverage', 'Share insurance details or choose transparent self-pay pricing.'],
  ['03', 'Arrive prepared', 'Forms, reminders, and portal access arrive before the appointment.'],
]

export function HarborHealthClinic() {
  return (
    <main className="bg-[#f4fbfa] text-[#102522]">
      <SubWebsiteNav
        brand="Harbor Health"
        links={navLinks}
        ctaLabel="Book Visit"
        ctaHref="#visit"
        collectionPath="/medical"
        className="border-b border-[#cce8e4] bg-white/94 text-[#102522]"
        brandClassName="text-[#0f766e]"
        linkClassName="text-slate-600 hover:text-[#0f766e]"
        ctaClassName="bg-[#0f766e] text-white hover:bg-[#0b5f59]"
        menuButtonClassName="border-[#cce8e4] text-[#0f766e] hover:bg-[#ecfeff]"
        mobilePanelClassName="border border-[#cce8e4] bg-white"
      />

      <section className="relative overflow-hidden bg-[#073b35] pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(20,184,166,0.42),transparent_26%),radial-gradient(circle_at_78%_18%,rgba(239,68,68,0.18),transparent_22%),linear-gradient(135deg,#073b35,#0f766e_54%,#052f2b)]" />
        <Container>
          <div className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.26em] text-[#99f6e4]">Harbor Health Clinic</p>
              <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl">
                Primary care that makes next steps feel simple.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
                A modern neighborhood clinic for preventive visits, same-week care, telehealth, and long-term health plans.
                Patients get clear scheduling, plain-language guidance, and a calmer path into care.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#visit" size="lg" className="bg-[#99f6e4] text-[#073b35] hover:bg-white">
                  Book Appointment
                </CTAButton>
                <CTAButton href="tel:555-0402" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  Call (555) 040-2000
                </CTAButton>
              </div>
            </div>

            <div className="relative min-h-[560px]">
              <div className="absolute right-0 top-0 h-[32rem] w-full max-w-[38rem] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="grid h-full grid-rows-[1fr_auto] overflow-hidden bg-[#ecfeff] text-[#102522]">
                  <div className="relative bg-[linear-gradient(135deg,#ccfbf1,#0f766e_52%,#ef4444)]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.24)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:48px_48px]" />
                    <div className="absolute left-6 top-6 rounded-full bg-white/92 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#0f766e] shadow-sm">
                      New patients welcome
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 bg-white/94 p-5 shadow-xl">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f766e]">Next available</p>
                      <h2 className="mt-2 text-3xl font-black">Tomorrow at 10:30 AM</h2>
                      <p className="mt-2 text-sm font-bold text-slate-500">In-clinic or telehealth appointment</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 border-t border-slate-200 bg-white text-center">
                    {[
                      ['12', 'Providers'],
                      ['24h', 'Portal reply'],
                      ['4.8', 'Patient rating'],
                    ].map(([value, label]) => (
                      <div key={label} className="border-r border-slate-200 p-4 last:border-r-0">
                        <p className="text-2xl font-black text-[#0f766e]">{value}</p>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-64 bg-white p-5 text-[#102522] shadow-2xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0f766e]">Care desk</p>
                <p className="mt-3 text-3xl font-black">Insurance checked before your visit.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0f766e]">Patient services</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Care options that are easy to understand.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Harbor Health keeps the first decision simple: choose the reason for your visit, see what to expect,
              and get the right care path without digging through clinical language.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map(([title, text]) => (
              <article key={title} className="border border-[#cce8e4] bg-white p-7 shadow-sm">
                <div className="mb-8 h-2 w-16 bg-[#0f766e]" />
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="doctors" className="border-y border-[#cce8e4] bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0f766e]">Provider team</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Doctors who explain the plan before you leave.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Each visit ends with a clear summary, medication notes, follow-up timing, and portal instructions.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {doctors.map(([name, specialty, focus]) => (
                <article key={name} className="bg-[#f4fbfa] p-7 shadow-sm">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#0f766e] text-2xl font-black text-white">
                    {name.split(' ').map((part) => part[0]).join('')}
                  </div>
                  <h3 className="text-2xl font-black">{name}</h3>
                  <p className="mt-2 text-sm font-black uppercase tracking-[0.16em] text-[#0f766e]">{specialty}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{focus}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="insurance" className="py-20 md:py-28">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div className="border border-[#cce8e4] bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0f766e]">Insurance and pricing</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Coverage questions answered before the front desk.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The page design makes accepted plans, self-pay pricing, referrals, and lab billing easy to scan so patients
              know what to bring and what to expect.
            </p>
          </div>
          <div className="grid gap-4">
            {['Most major plans accepted', 'Transparent self-pay visits', 'Referral support available'].map((item) => (
              <div key={item} className="bg-[#ecfeff] p-6 shadow-sm">
                <p className="text-xl font-black">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="visit" className="bg-[#073b35] py-20 text-white md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#99f6e4]">Book a visit</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">A clear path from symptom to appointment.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {visitSteps.map(([number, title, text]) => (
              <article key={title} className="border border-white/12 bg-white/8 p-7">
                <p className="text-5xl font-black text-[#99f6e4]">{number}</p>
                <h3 className="mt-8 text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/72">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CTAButton href="tel:555-0402" size="lg" className="bg-[#99f6e4] text-[#073b35] hover:bg-white">
              Call (555) 040-2000
            </CTAButton>
            <CTAButton href="mailto:care@harborhealth.example" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
              Email Care Team
            </CTAButton>
          </div>
        </Container>
      </section>
    </main>
  )
}
