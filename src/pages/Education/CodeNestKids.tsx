import { useState } from 'react'
import {
  ArrowRight, Award, BookOpen, Bot, Brain, CalendarDays, Check, ChevronDown,
  Clock3, Code2, Gamepad2, Heart, Laptop, Lightbulb, Menu, MessageCircle,
  Palette, Rocket, ShieldCheck, Sparkles, Star, Trophy, Users, X
} from 'lucide-react'
import './CodeNestKids.css'

const programs = [
  ['Little Coders', 'Ages 6–8', 'Explore playful coding through stories, puzzles, and creative activities.', '🐲', 'violet'],
  ['Junior Builders', 'Ages 9–11', 'Build games and animations while learning real coding concepts.', '🧑🏾‍💻', 'mint'],
  ['Future Developers', 'Ages 12–14', 'Create websites, apps, and explore Python with project-based learning.', '👨🏽‍💻', 'blue'],
  ['Game Lab', 'Robotics + Coding', 'Design games and program robots in exciting hands-on challenges.', '🤖', 'peach'],
]

const journeys = [
  ['1', 'Logic Basics', 'Understand patterns, loops, and conditions.', '🧩', 'purple'],
  ['2', 'Scratch Coding', 'Create animations and interactive stories.', '🧱', 'green'],
  ['3', 'Game Design', 'Design fun games and learn game mechanics.', '🎮', 'orange'],
  ['4', 'Web Basics', 'Build your first website using HTML & CSS.', '⌨️', 'blue'],
  ['5', 'Python Intro', 'Write real code and solve exciting challenges.', '🐍', 'purple'],
  ['6', 'Final Project', 'Build, present and publish your capstone project!', '🏆', 'green'],
]

export function CodeNestKids() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return <main className="cn-site">
    <nav className="cn-nav">
      <a className="cn-brand" href="#top" aria-label="CodeNest Kids home"><span>🤖</span>CodeNest <b>Kids</b></a>
      <button className="cn-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <div className={`cn-navlinks ${menuOpen ? 'open' : ''}`}>
        {['Programs', 'Curriculum', 'Projects', 'Mentors', 'Schedule'].map((item) => <button key={item} onClick={() => { setMenuOpen(false); scrollTo(item.toLowerCase()) }}>{item}</button>)}
        <button onClick={() => { setMenuOpen(false); scrollTo('pricing') }}>Pricing</button>
        <button onClick={() => { setMenuOpen(false); scrollTo('faq') }}>FAQ</button>
        <button className="cn-navcta" onClick={() => scrollTo('pricing')}><CalendarDays/> Book a Free Trial</button>
      </div>
    </nav>

    <section id="top" className="cn-hero cn-wrap">
      <div className="cn-hero-copy">
        <div className="cn-kicker"><Sparkles/> Coding adventures for curious kids</div>
        <h1>Where <em>curious</em><br/>kids learn to<br/><strong>build with code.</strong></h1>
        <p>Fun coding classes for children with structured pathways, small groups, and project-based learning that builds confidence for the future.</p>
        <div className="cn-actions"><button className="cn-yellow" onClick={() => scrollTo('programs')}>Explore Classes <ArrowRight/></button><button className="cn-purple" onClick={() => scrollTo('pricing')}>Start Free Trial <Rocket/></button></div>
        <div className="cn-pills"><span><Check/> Ages 6–14</span><span><Check/> Live & After-School</span><span><Check/> Project-Based</span></div>
      </div>
      <div className="cn-hero-art" aria-label="Happy young coder learning with a friendly robot">
        <div className="cn-code-window"><i/><i/><i/><b>function <em>create()</em> {'{'}</b><small>&nbsp;&nbsp;let ideas = <strong>∞</strong></small><small>&nbsp;&nbsp;build(ideas);</small><b>{'}'}</b></div>
        <div className="cn-kid">🧑🏽‍💻</div><div className="cn-laptop"><Code2/></div><div className="cn-bot"><Bot/></div>
        <article className="cn-float lesson"><span>📘 Today’s Lesson</span><b>Make a Platformer<br/>in Scratch</b><small>Progress <i><b/></i> 75%</small></article>
        <article className="cn-float challenge"><span>🏆 Weekly Challenge</span><b>Design a Space<br/>Adventure Game!</b></article>
        <article className="cn-float parent"><span>💬 Parent Update</span><b>Great job, Alex!</b><small>You solved 12 challenges this week.</small></article>
      </div>
    </section>

    <section className="cn-stats cn-wrap">{[["4,500+",'Young Coders','🧑‍🚀'],['96%','Parent Satisfaction','⭐'],['12','Students Max per Class','🧑🏽‍🤝‍🧑🏼'],['200+','Coding Projects Built','⌨️'],['8','Week Sessions','🗓️']].map(([num,label,emoji], i)=><article key={label} className={`stat-${i}`}><b>{num}</b><span>{label}</span><i>{emoji}</i></article>)}</section>

    <section className="cn-wrap cn-section why"><h2>Why Parents Choose <em>CodeNest Kids</em></h2><div className="cn-benefits">
      {[[BookOpen,'Structured Curriculum','Step-by-step learning pathways designed by education experts.'],[ShieldCheck,'Builds Confidence','Kids see progress quickly and feel proud of what they create.'],[Brain,'Beginner Friendly','No prior experience needed. We start from zero and make it fun!'],[Heart,'Safe & Collaborative','Small classes with a positive community and respectful culture.'],[Rocket,'Real Projects','Students build games, apps, websites, and share their work.'],[Clock3,'Flexible Schedules','Weekday after-school and weekend options for busy families.']].map(([Icon,title,desc])=>{const I=Icon as typeof BookOpen; return <article key={String(title)}><I/><div><b>{title as string}</b><p>{desc as string}</p></div></article>})}
    </div></section>

    <section id="programs" className="cn-wrap cn-section"><h2>Our Programs by Age <Code2/></h2><div className="cn-programs">{programs.map(([name, age, desc, emoji, theme])=><article key={name} className={`cn-program ${theme}`}><header><h3>{name}</h3><span>{age}</span></header><div className="cn-program-emoji">{emoji}</div><p>{desc}</p><small><b>Skills:</b> Coding, Creativity, Problem Solving</small><footer><span>Duration: 8 Weeks</span><button onClick={() => scrollTo('pricing')}>Learn More <ArrowRight/></button></footer></article>)}</div></section>

    <section id="curriculum" className="cn-roadmap"><div className="cn-wrap"><h2>Our Curriculum Roadmap</h2><p>Every learner follows a clear, exciting path from their first idea to a project they can proudly share.</p><div className="cn-journey">{journeys.map(([num,title,text,emoji,color])=><article key={title} className={color}><b className="journey-num">{num}</b><i>{emoji}</i><h3>{title}</h3><p>{text}</p><small><Check/> {num === '1' ? 'Completed' : num === '3' ? 'In Progress' : 'Upcoming'}</small></article>)}</div></div></section>

    <section id="schedule" className="cn-wrap cn-section"><h2>Weekly Schedule</h2><div className="cn-schedule"><div className="schedule-head"><b>Program</b>{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=><b key={d}>{d}</b>)}</div>{[['Little Coders (6–8)','4:30 PM','–','4:30 PM','–','4:30 PM','10:00 AM','–'],['Junior Builders (9–11)','5:30 PM','5:30 PM','5:30 PM','–','5:30 PM','11:30 AM','–'],['Future Developers (12–14)','–','6:30 PM','6:30 PM','6:30 PM','–','1:00 PM','–'],['Game Lab / Robotics','–','–','–','–','–','2:30 PM','2:00 PM']].map(row=><div className="schedule-row" key={row[0]}>{row.map((cell,i)=><span key={i} className={i && cell !== '–' ? `slot s${i}` : ''}>{cell}</span>)}</div>)}</div></section>

    <section id="mentors" className="cn-wrap cn-section"><h2>Learn from Amazing Mentors <Sparkles/></h2><div className="cn-mentors">{[['👩🏽‍🏫','Ms. Aisha','Computer Science Teacher','Loves turning complex ideas into fun projects for kids.'],['👨🏿‍💻','Mr. David','Game Design Mentor','Passionate about games and inspiring creativity.'],['👩🏾‍🔬','Ms. Priya','STEM Coach','Encourages problem solving and curiosity.'],['🧑🏻‍🔧','Mr. Leo','Robotics Expert','Builds sensors and lets ideas run hands-on!']].map(([face,name,role,bio])=><article key={name}><i>{face}</i><div><b>{name}</b><span>{role}</span><p>{bio}</p><small>🏅 6+ Years Experience</small></div></article>)}</div></section>

    <section id="projects" className="cn-projects cn-wrap cn-section"><h2>Build Real Projects. Gain Real Skills. <Code2/></h2><div>{[['🎮','Platformer Game','Creative Thinking'],['🐙','Animated Story','Problem Solving'],['🖥️','Personal Website','Teamwork'],['📱','Quiz App','Presentation Skills'],['🤖','Robot Challenge','Portfolio Ready']].map(([emoji,title,skill])=><article key={title}><i>{emoji}</i><b>{title}</b><span>{skill}</span></article>)}</div></section>

    <section className="cn-wrap cn-section cn-process"><h2>Your Child’s Journey with Us</h2><div>{[['1','Choose Program','Find the perfect program for your child’s age and goals.'],['2','Book Free Trial','Pick a time and experience a real class for free.'],['3','Meet Instructor','Your child meets the mentor and explores the class.'],['4','Join the Cohort','Get on board with a small group of motivated peers.'],['5','Build Projects','Create, code and showcase amazing projects!']].map(([n,title,copy])=><article key={n}><b>{n}</b><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className="cn-wrap cn-section cn-testimonials"><h2>What Parents Are Saying <Heart/></h2><div>{[['“My daughter went from zero coding to building her own game! She looks forward to every class each week.”','Sarah M.','Mom of a 9-year-old'],['“The instructors are patient, engaging, and truly care. We love the progress updates and real projects.”','James T.','Dad of a 12-year-old'],['“CodeNest Kids gave my son confidence and problem solving skills that help in school too!”','Priya K.','Mom of a 10-year-old']].map(([quote,name,about])=><article key={name}><p>{quote}</p><b>{name}</b><small>{about}</small></article>)}</div></section>

    <section id="pricing" className="cn-pricing cn-wrap cn-section"><h2>Simple Plans. Big Impact.</h2><div>{[['Starter','$129','1 Class / Week',['Small class (12 students max)','Project-based learning','Parent progress updates']],['Coder','$199','2 Classes / Week',['Everything in Starter','Weekly project','Parent support','Showcase feedback']],['Advanced Lab','$249','2 Classes / Week',['Advanced projects','Robotics / AI modules','Personal mentorship']]].map(([name,price,frequency,features],i)=><article key={String(name)} className={i===1?'popular':''}>{i===1&&<span className="popular-tag">Most Popular</span>}<h3>{name}</h3><b>{price}<small>/ month</small></b><p>{frequency}</p><ul>{(features as string[]).map(f=><li key={f}><Check/>{f}</li>)}</ul><button onClick={() => setSelectedPlan(name as string)}>Book Free Trial</button></article>)}</div>{selectedPlan&&<p className="cn-toast">Great choice — the {selectedPlan} trial is ready to book! <button onClick={()=>setSelectedPlan(null)}>×</button></p>}</section>

    <section id="faq" className="cn-wrap cn-section cn-faq"><h2>Questions? We’ve got you.</h2><details><summary>Do children need coding experience? <ChevronDown/></summary><p>Not at all. Our beginner-friendly programs start with simple, visual projects and grow with your child.</p></details><details><summary>What happens in the free trial? <ChevronDown/></summary><p>Your child joins a welcoming live class, meets an instructor, and builds a tiny project to take home.</p></details></section>

    <section className="cn-final"><div className="cn-wrap"><div><h2>Ready to help your<br/>child <em>build with code?</em></h2><p>Start their coding adventure with a free trial today!</p><button className="cn-yellow" onClick={() => scrollTo('pricing')}>Choose a Class <ArrowRight/></button></div><i>👧🏽‍💻</i></div></section>
    <footer className="cn-footer"><div className="cn-wrap"><div><a className="cn-brand" href="#top"><span>🤖</span>CodeNest <b>Kids</b></a><p>Inspiring young innovators to build, create, and shape the future with code.</p></div><div><b>Quick Links</b><a href="#programs">Programs</a><a href="#curriculum">Curriculum</a><a href="#pricing">Pricing</a></div><div><b>Programs</b><a href="#programs">Little Coders</a><a href="#programs">Junior Builders</a><a href="#programs">Game Lab</a></div><div><b>Contact Us</b><p>hello@codenestkids.com<br/>(555) 123-4567<br/>New York, NY</p></div></div></footer>
  </main>
}
