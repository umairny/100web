import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Check, GraduationCap, LayoutGrid, School, Sparkles, Users } from 'lucide-react'
import { educationWebsites } from '../../data/websites'
import './EducationIndex.css'
import fluentPathImage from '../../assets/images/education/fluentpath.png'
import tutorLoopImage from '../../assets/images/education/tutorloop.png'
import skillForgeImage from '../../assets/images/education/skillforge.png'
import scholarSpringImage from '../../assets/images/education/scholarspring.png'
import atlasCollegeImage from '../../assets/images/education/atlascollege.png'
import proTrackImage from '../../assets/images/education/protrack.png'
import examEdgeImage from '../../assets/images/education/examedge.png'

const categories = [
  [GraduationCap, 'Online Academies'],
  [School, 'Private Schools'],
  [BookOpen, 'Tutoring & Prep'],
  [Users, 'Student Communities'],
  [Sparkles, 'Workshops'],
  [LayoutGrid, 'Learning Portals'],
]

const principles = [
  ['01', 'Make the path visible', 'Show programs, curriculum, schedules, and the next enrollment step without making families search.'],
  ['02', 'Build trust early', 'Lead with outcomes, faculty credibility, student support, and specific proof of learning.'],
  ['03', 'Design for decisions', 'Give every visitor a clear route based on their goals, age, learning style, and timeline.'],
]

const upcoming = [
  { name: 'TutorLoop', focus: 'Tutoring marketplace', audience: 'Students & families', format: 'One-to-one sessions', image: tutorLoopImage, description: 'A trusted marketplace that helps families compare tutors, book sessions, and track learning goals.', features: ['Verified tutors', 'Smart matching', 'Session dashboard'], status: 'Design ready' },
  { name: 'SkillForge', focus: 'Career workshops', audience: 'Career switchers', format: 'Short intensives', image: skillForgeImage, description: 'Practical, instructor-led workshops focused on skills learners can apply immediately at work.', features: ['Workshop calendar', 'Skill pathways', 'Completion badges'], status: 'In planning' },
  { name: 'ScholarSpring', focus: 'Early learning', audience: 'Children & parents', format: 'Campus programs', image: scholarSpringImage, description: 'A warm preschool enrollment experience built around play, safety, routines, and family trust.', features: ['Program comparison', 'Family resources', 'Visit scheduling'], status: 'In planning' },
  { name: 'ProTrack Trades', focus: 'Skilled-trade training', audience: 'Career starters', format: 'Hands-on programs', image: proTrackImage, description: 'A direct enrollment experience for practical training, certifications, apprenticeships, and job placement.', features: ['Trade pathways', 'Facility tours', 'Career outcomes'], status: 'Researching' },
]

export function EducationIndex() {
  const liveWebsites = educationWebsites.filter((website) => website.status === 'completed' || website.status === 'live')

  return (
    <main className="edu-index">
      <section className="edu-hero">
        <div className="edu-orb orb-one" />
        <div className="edu-orb orb-two" />
        <div className="edu-shell hero-layout">
          <div className="hero-content">
            <Link to="/" className="back-link">← Back to all categories</Link>
            <span className="hero-label"><span>{liveWebsites.length}</span> live education experiences</span>
            <h1>Education websites that make the next step feel clear.</h1>
            <p>Explore thoughtful digital experiences for online academies, private schools, tutors, and learning communities—each designed around trust, momentum, and enrollment.</p>
            <div className="hero-actions">
              <a href="#live-websites" className="edu-button primary">Explore websites <ArrowRight /></a>
              <a href="#approach" className="edu-button secondary">Our UX approach</a>
            </div>
            <div className="hero-proof">
              <span><Check /> Responsive by design</span>
              <span><Check /> Real enrollment flows</span>
              <span><Check /> Accessible structure</span>
            </div>
          </div>

          <div className="hero-showcase" aria-hidden="true">
            {liveWebsites.slice(0, 2).map((website, index) => (
              <div className={`showcase-card card-${index + 1}`} key={website.id}>
                <img src={website.image} alt="" />
                <div><span>Live concept</span><strong>{website.title}</strong></div>
              </div>
            ))}
            <div className="showcase-badge"><Sparkles /><strong>Designed for clarity</strong><span>From first visit to enrollment</span></div>
          </div>
        </div>
      </section>

      <section className="category-strip">
        <div className="edu-shell category-list">
          {categories.map(([Icon, label]) => <div key={String(label)}><Icon /><span>{String(label)}</span></div>)}
        </div>
      </section>

      <section className="live-section edu-shell" id="live-websites">
        <div className="section-heading">
          <div><span className="eyebrow">Live websites</span><h2>Distinct ways to inspire learners.</h2></div>
          <p>Explore experiences for online learners, private-school families, and young creators taking their first steps with code.</p>
        </div>

        <div className="live-grid">
          {liveWebsites.map((website, index) => (
            <Link to={`/education/${website.slug}`} className="website-card" key={website.id}>
              <div className="browser-frame">
                <div className="browser-bar"><span /><span /><span /><b>{website.slug}.edu</b></div>
                <div className="preview-window"><img src={website.image} alt={`${website.title} homepage preview`} loading="lazy" /></div>
                <span className="live-pill">Live</span>
              </div>
              <div className="website-copy">
                <div className="website-number">0{index + 1}</div>
                <div>
                  <span className="website-type">{website.slug === 'codenest-kids' ? 'Coding academy for kids' : index === 0 ? 'Online learning platform' : 'Private school admissions'}</span>
                  <h3>{website.title}</h3>
                  <p>{website.shortDescription}</p>
                  <div className="style-row">
                    <span>{website.style}</span>
                    <div className="swatches">{Object.values(website.colors).map(color => <i key={color} style={{ backgroundColor: color }} />)}</div>
                  </div>
                </div>
                <span className="open-site">View full website <ArrowRight /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="approach-section" id="approach">
        <div className="edu-shell">
          <div className="section-heading light">
            <div><span className="eyebrow">Education UX approach</span><h2>Good design reduces enrollment anxiety.</h2></div>
            <p>Education decisions carry weight. The interface should answer practical questions while making the experience feel welcoming and credible.</p>
          </div>
          <div className="principle-grid">
            {principles.map(([number, title, text]) => <article key={number}><span>{number}</span><div className="principle-icon">{number === '01' ? <LayoutGrid /> : number === '02' ? <Users /> : <ArrowRight />}</div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="roadmap-section edu-shell" id="roadmap">
        <div className="section-heading">
          <div><span className="eyebrow">Coming next</span><h2>More learning experiences are taking shape.</h2></div>
          <p>The roadmap expands beyond academies and schools into focused tools for tutoring, test preparation, language learning, and career growth.</p>
        </div>
        <div className="roadmap-summary">
          <span><strong>{upcoming.length}</strong> concepts in the pipeline</span>
          <span><strong>5</strong> learning audiences</span>
          <span><strong>3</strong> delivery models</span>
        </div>
        <div className="roadmap-grid">
          {upcoming.map((concept, index) => (
            <article key={concept.name}>
              <div className="concept-art">
                {concept.image ? <img src={concept.image} alt={`${concept.name} website preview`} loading="lazy" /> : <div className="examedge-preview"><span>1540</span><i/><i/><i/><strong>Score progress</strong></div>}
                <span className="concept-number">0{index + 3}</span>
                <span className={`concept-status status-${concept.status.toLowerCase().replace(/\s+/g, '-')}`}>{concept.status}</span>
              </div>
              <div className="concept-copy">
                <Link
                  to={`/education/${concept.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-slate-600 transition hover:border-slate-400 hover:text-slate-900"
                >
                  Coming soon
                </Link>
                <h3>{concept.name}</h3>
                <strong>{concept.focus}</strong>
                <p>{concept.description}</p>
                <div className="concept-meta"><span><b>For</b>{concept.audience}</span><span><b>Format</b>{concept.format}</span></div>
                <ul>{concept.features.map(feature => <li key={feature}><Check />{feature}</li>)}</ul>
                <div className="concept-footer"><span>Concept preview</span><BookOpen /></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="edu-cta">
        <div className="edu-shell">
          <div><span className="eyebrow">Explore the collection</span><h2>Find a design direction for your next education experience.</h2></div>
          <a href="#live-websites" className="edu-button primary">View live websites <ArrowRight /></a>
        </div>
      </section>
    </main>
  )
}
