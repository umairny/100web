import { Container, CTAButton, SubWebsiteNav } from '../../components'

const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Trial', href: '#trial' },
]

const features = [
  ['Smart Next Steps', 'Rank follow-ups by deal value, urgency, owner, and last activity.'],
  ['Pipeline Health', 'Spot stalled deals, missing notes, and risky handoffs before the weekly meeting.'],
  ['Team Automations', 'Trigger reminders, CRM updates, and Slack alerts without rebuilding your workflow.'],
]

const integrations = ['Slack', 'Gmail', 'HubSpot', 'Stripe', 'Notion', 'Zapier']

const pricing = [
  ['Starter', '$19', 'Solo sellers and tiny teams'],
  ['Growth', '$49', 'Pipeline teams that need automation'],
  ['Scale', '$99', 'Advanced permissions and reporting'],
]

export function FlowPilotCRM() {
  return (
    <main className="bg-[#f4fbff] text-[#082f49]">
      <SubWebsiteNav
        brand="FlowPilot CRM"
        links={navLinks}
        ctaLabel="Start Trial"
        ctaHref="#trial"
        collectionPath="/saas"
        className="border-b border-[#cfeaf6] bg-white/94 text-[#082f49]"
        brandClassName="text-[#075985]"
        linkClassName="text-slate-600 hover:text-[#075985]"
        ctaClassName="bg-[#075985] text-white hover:bg-[#082f49]"
        menuButtonClassName="border-[#cfeaf6] text-[#075985] hover:bg-[#e0f2fe]"
        mobilePanelClassName="border border-[#cfeaf6] bg-white"
      />

      <section className="relative overflow-hidden bg-[#082f49] pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(14,165,233,0.45),transparent_26%),radial-gradient(circle_at_78%_18%,rgba(20,184,166,0.26),transparent_22%),linear-gradient(135deg,#082f49,#075985_54%,#0f172a)]" />
        <Container>
          <div className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.26em] text-[#99f6e4]">FlowPilot CRM</p>
              <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl">
                A calmer CRM for sales teams that need the next move, not another dashboard.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
                FlowPilot turns scattered deal activity into ranked follow-ups, pipeline health signals,
                and lightweight automations that help teams move faster without losing context.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#trial" size="lg" className="bg-[#99f6e4] text-[#082f49] hover:bg-white">
                  Start 14-Day Trial
                </CTAButton>
                <CTAButton href="#product" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  See Product Tour
                </CTAButton>
              </div>
            </div>

            <div className="relative min-h-[560px]">
              <div className="absolute right-0 top-0 h-[32rem] w-full max-w-[38rem] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="grid h-full grid-rows-[1fr_auto] overflow-hidden bg-[#e0f2fe] text-[#082f49]">
                  <div className="relative bg-[linear-gradient(135deg,#e0f2fe,#075985_52%,#14b8a6)]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:48px_48px]" />
                    <div className="absolute left-6 top-6 rounded-full bg-white/92 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#075985] shadow-sm">
                      14 hot follow-ups today
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 bg-white/94 p-5 shadow-xl">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#075985]">Pipeline command</p>
                      <h2 className="mt-2 text-3xl font-black">North region renewal at risk.</h2>
                      <p className="mt-2 text-sm font-bold text-slate-500">Owner assigned / note missing / follow-up due in 2 hours</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 border-t border-slate-200 bg-white text-center">
                    {[
                      ['32%', 'Faster replies'],
                      ['18%', 'More closed'],
                      ['6h', 'Saved weekly'],
                    ].map(([value, label]) => (
                      <div key={label} className="border-r border-slate-200 p-4 last:border-r-0">
                        <p className="text-2xl font-black text-[#075985]">{value}</p>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-64 bg-white p-5 text-[#082f49] shadow-2xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#075985]">Trial setup</p>
                <p className="mt-3 text-3xl font-black">Import your pipeline in under 10 minutes.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="product" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#075985]">Product tour</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">A CRM homepage that shows workflow value quickly.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              SaaS buyers need to understand where the product sits in their day. FlowPilot leads with action, not a vague dashboard promise.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map(([title, text]) => (
              <article key={title} className="border border-[#cfeaf6] bg-white p-7 shadow-sm">
                <div className="mb-8 h-2 w-16 bg-[#14b8a6]" />
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="features" className="border-y border-[#cfeaf6] bg-white py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#075985]">Integrations</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Connects to the tools teams already trust.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The integrations section reduces switching anxiety and makes the product feel easy to adopt.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {integrations.map((item) => (
              <div key={item} className="bg-[#f4fbff] p-5 text-center font-black shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="pricing" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#075985]">Pricing</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Plans that make trial decisions easier.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {pricing.map(([name, price, text]) => (
              <article key={name} className="bg-white p-7 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#075985]">{name}</p>
                <p className="mt-5 text-5xl font-black">{price}<span className="text-base text-slate-500">/mo</span></p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
                <a href="#trial" className="mt-6 inline-flex w-full justify-center rounded-lg bg-[#082f49] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#075985]">
                  Start Trial
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="trial" className="bg-[#082f49] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.76fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#99f6e4]">Start trial</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                Try FlowPilot with your real pipeline and no setup call required.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                Trial sections should lower adoption anxiety with setup time, import help, support, and cancellation clarity.
              </p>
            </div>
            <div className="bg-white p-6 text-[#082f49]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">Trial desk</p>
              <a href="mailto:start@flowpilot.example" className="mt-5 block bg-[#075985] px-5 py-4 text-center text-sm font-black text-white transition hover:bg-[#082f49]">
                Start Free Trial
              </a>
              <a href="tel:555-0806" className="mt-3 block bg-[#ccfbf1] px-5 py-4 text-center text-sm font-black text-[#0f766e] transition hover:bg-[#99f6e4]">
                Talk to Sales
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
