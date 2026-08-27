import{g as s,j as e}from"./index-CmsPmo6E.js";const A="/assets/hero-B0cjaANi.webp",v="/assets/gallary01-D1IwC8T_.webp",L="/assets/gallary02-CFWAMTLF.webp",F="/assets/gallary03-BoV4Qeb1.webp",y="/assets/gallary04-Dl9C_Klq.webp",j="/assets/gallary05-CtywPbRO.webp",w="/assets/gallary06-Bv4yPofe.webp",S="/assets/interior-B-9MbMvz.webp",G="/assets/passion-Ct5Dqmrt.webp",i={hero:A,featured1:v,featured2:L,featured3:F,featured4:y,featured5:j,featured6:w,studio:S,artistLead:G,artist1:v,artist2:y,artist3:j,sideBride:w,footer1:v,footer2:L,footer3:S,footer4:y,footer5:j,footer6:w},k=["Home","About","Services","Gallery","Packages","Journey","Blog","Contact"],Y=[{icon:"hair",title:"Bridal Hair",text:"Elegant styles that last all day"},{icon:"brush",title:"Bridal Makeup",text:"Soft glam looks that enhance you"},{icon:"mirror",title:"Trials",text:"Find your perfect look with confidence"},{icon:"ring",title:"Wedding Day Styling",text:"We’re with you every step of the way"}],q=[{no:"01",title:"Inquiry",text:"Tell us about your day and your vision."},{no:"02",title:"Trial",text:"We create your perfect look with a trial session."},{no:"03",title:"Wedding Morning",text:"Relax and enjoy while we take care of you."},{no:"04",title:"Final Touch-Up",text:"We stay with you until you walk down the aisle."}],D=[{image:i.artist1,name:"Jessica Lee",role:"Makeup Artist"},{image:i.artist2,name:"Sarah James",role:"Hair Specialist"},{image:i.artist3,name:"Megha Patel",role:"Styling Expert"}],g=[{text:"Bloom Bridal Studio made me feel like the most beautiful version of myself. I couldn’t have asked for a better team on my big day!",name:"Anisha R."},{text:"The trial was so helpful and the results on my wedding day were absolutely flawless. Highly recommended!",name:"Karishma D."},{text:"They are pure magic! Calm, professional, and talented. Thank you for making me feel so confident.",name:"Meghna S."}],M=[{title:"The Essential",tag:"For the effortlessly beautiful bride.",price:"$950",items:["Bridal Hair","Bridal Makeup","Touch-up Kit"]},{title:"The Signature",tag:"Our most loved bridal experience.",price:"$1,450",featured:!0,items:["Bridal Hair & Makeup","Trial Session","Touch-up Kit","Veil / Hair Accessory"]},{title:"The Luxe",tag:"The ultimate bridal indulgence.",price:"$2,250",items:["Bridal Hair & Makeup","Trial Session","Touch-up Kit","2nd Look or Hair Change","Premium Accessory"]}],E=[["How far ahead should I book?","Most brides reserve 9–14 months ahead. Popular spring and autumn weekends can fill sooner."],["Is a bridal trial included?","Trials are included in Signature and Luxe packages and can be added to Essential."],["Do you travel to wedding venues?","Yes. We serve Beverly Hills, Los Angeles, Malibu, Orange County, and destination weddings."],["Can you style my bridal party?","Absolutely. Hair and makeup can be added for bridesmaids, mothers, and other family members."]];function x({name:o}){const r={fill:"none",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"};return e.jsxs("svg",{viewBox:"0 0 32 32","aria-hidden":"true",children:[o==="hair"&&e.jsxs(e.Fragment,{children:[e.jsx("path",{...r,d:"M7 27c1-8 2-17 10-21 3-1 6 0 8 2-7 1-8 7-7 11 1 5-2 8-6 8"}),e.jsx("path",{...r,d:"M11 26c-2-6 0-12 7-16M8 16c3 1 6 0 8-3"})]}),o==="brush"&&e.jsxs(e.Fragment,{children:[e.jsx("path",{...r,d:"m9 26 8-15 5 3-9 14Z"}),e.jsx("path",{...r,d:"m17 11 2-7 6 3-3 7M11 23l4 2"})]}),o==="mirror"&&e.jsxs(e.Fragment,{children:[e.jsx("ellipse",{...r,cx:"16",cy:"12",rx:"7",ry:"9"}),e.jsx("path",{...r,d:"M16 21v7M12 28h8M12 12c0-3 2-5 5-6"})]}),o==="ring"&&e.jsxs(e.Fragment,{children:[e.jsx("circle",{...r,cx:"16",cy:"19",r:"8"}),e.jsx("path",{...r,d:"m11 10 5-6 5 6-5 3Z"}),e.jsx("path",{...r,d:"m13 6 3 7 3-7"})]}),o==="calendar"&&e.jsxs(e.Fragment,{children:[e.jsx("rect",{...r,x:"5",y:"7",width:"22",height:"20",rx:"3"}),e.jsx("path",{...r,d:"M10 4v6M22 4v6M5 13h22M10 18h4M18 18h4M10 22h4"})]}),o==="sparkle"&&e.jsxs(e.Fragment,{children:[e.jsx("path",{...r,d:"M16 3c1 7 4 11 11 12-7 1-10 5-11 13-1-8-4-12-11-13 7-1 10-5 11-12Z"}),e.jsx("path",{...r,d:"M25 3v6M22 6h6"})]})]})}function h({children:o,outline:r=!1,href:c,onClick:u}){const n=r?"btn btnOutline":"btn";return u?e.jsxs("button",{type:"button",onClick:u,className:n,children:[o,e.jsx("span",{children:"→"})]}):e.jsxs("a",{href:c??"#contact",className:n,children:[o,e.jsx("span",{children:"→"})]})}function H(){const[o,r]=s.useState(!1),[c,u]=s.useState("home"),[n,p]=s.useState(!1),[I,N]=s.useState("The Signature"),[b,C]=s.useState(0),[f,T]=s.useState(0);s.useEffect(()=>{const a=()=>{var z;const t=window.scrollY+140,B=k.map(l=>document.getElementById(l.toLowerCase())).filter(l=>!!l).sort((l,P)=>l.offsetTop-P.offsetTop).filter(l=>l.offsetTop<=t);u(((z=B[B.length-1])==null?void 0:z.id)??"home")};return a(),window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),s.useEffect(()=>{const a=t=>{t.key==="Escape"&&(r(!1),p(!1))};return document.body.style.overflow=n||o?"hidden":"",window.addEventListener("keydown",a),()=>{document.body.style.overflow="",window.removeEventListener("keydown",a)}},[n,o]);const m=(a="The Signature")=>{N(a),p(!0)};return e.jsxs("main",{className:"bloomPage",children:[e.jsx("style",{children:W}),e.jsxs("header",{className:"navWrap",children:[e.jsxs("a",{className:"logo",href:"#home","aria-label":"Bloom Bridal Studio home",children:[e.jsx("span",{children:"Bloom"}),e.jsx("small",{children:"Bridal Studio"})]}),e.jsx("nav",{className:"navLinks","aria-label":"Main navigation",children:k.map(a=>e.jsx("a",{className:c===a.toLowerCase()?"active":"","aria-current":c===a.toLowerCase()?"page":void 0,href:`#${a.toLowerCase()}`,children:a},a))}),e.jsxs("button",{className:"bookTop",type:"button",onClick:()=>m(),children:["Book Your Date ",e.jsx(x,{name:"calendar"})]}),e.jsx("button",{className:"menuButton",type:"button",onClick:()=>r(a=>!a),"aria-expanded":o,"aria-label":"Toggle navigation",children:o?"×":"☰"}),o&&e.jsx("nav",{className:"mobileNav","aria-label":"Mobile navigation",children:k.map(a=>e.jsx("a",{className:c===a.toLowerCase()?"active":"",onClick:()=>r(!1),href:`#${a.toLowerCase()}`,children:a},a))})]}),e.jsxs("section",{id:"home",className:"hero sectionShell",children:[e.jsxs("div",{className:"heroCopy",children:[e.jsx("p",{className:"eyebrow",children:"Luxury Bridal Beauty"}),e.jsxs("h1",{children:["Where You ",e.jsx("em",{children:"Bloom"})," for Your Big Day"]}),e.jsx("div",{className:"goldLine"}),e.jsx("p",{className:"lead",children:"Luxury bridal hair & makeup for the modern bride. Designed to make you feel confident, radiant and unforgettable."}),e.jsxs("div",{className:"heroActions",children:[e.jsx(h,{onClick:()=>m(),children:"Book Your Consultation"}),e.jsx(h,{href:"#about",outline:!0,children:"Explore the Studio"})]})]}),e.jsxs("div",{className:"heroArt",children:[e.jsxs("div",{className:"award",children:["2025",e.jsx("br",{}),e.jsx("span",{children:"Bridal Beauty"})]}),e.jsx("img",{src:i.hero,alt:"Bride with romantic updo and lace dress",fetchPriority:"high",decoding:"async"}),e.jsx("div",{className:"floral floralRight",children:"✿"})]})]}),e.jsx("section",{id:"services",className:"serviceBar sectionShell","aria-label":"Services overview",children:Y.map(a=>e.jsxs("article",{className:"serviceItem",children:[e.jsx("div",{className:"serviceIcon",children:e.jsx(x,{name:a.icon})}),e.jsxs("div",{children:[e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.text})]})]},a.title))}),e.jsxs("section",{id:"gallery",className:"gallery sectionShell",children:[e.jsxs("div",{className:"sectionIntro",children:[e.jsx("p",{className:"eyebrow",children:"Featured Looks"}),e.jsxs("h2",{children:["Timeless Beauty, Modern ",e.jsx("em",{children:"Romance"})]}),e.jsx("p",{children:"A glimpse into the brides we’ve had the honor of making feel their most beautiful."}),e.jsx("a",{className:"textLink",href:"#gallery",children:"View Full Gallery →"})]}),e.jsxs("div",{className:"galleryGrid",children:[e.jsx("img",{className:"tall",src:i.featured1,alt:"Bridal portrait",loading:"lazy",decoding:"async"}),e.jsx("img",{src:i.featured2,alt:"Bridal hair detail",loading:"lazy",decoding:"async"}),e.jsx("img",{src:i.featured3,alt:"Makeup products flatlay",loading:"lazy",decoding:"async"}),e.jsx("img",{className:"tall wide",src:i.featured4,alt:"Soft glam bridal makeup",loading:"lazy",decoding:"async"}),e.jsx("img",{src:i.featured5,alt:"Bride holding bouquet",loading:"lazy",decoding:"async"}),e.jsx("img",{src:i.featured6,alt:"Bride with bridesmaids",loading:"lazy",decoding:"async"})]})]}),e.jsxs("section",{id:"about",className:"about sectionShell",children:[e.jsx("img",{className:"studioImg",src:i.studio,alt:"Elegant bridal beauty studio interior",loading:"lazy",decoding:"async"}),e.jsxs("div",{className:"aboutCopy",children:[e.jsx("p",{className:"eyebrow",children:"About Bloom"}),e.jsxs("h2",{children:["Beauty with Heart, Artistry with ",e.jsx("em",{children:"Purpose"})]}),e.jsx("p",{children:"Bloom Bridal Studio is a luxury beauty studio specializing in bridal hair, makeup and styling. We believe every bride deserves a calm, joyful experience and a look that feels like the most beautiful version of herself."}),e.jsx("p",{className:"script",children:"Your dream, it is meant to."}),e.jsx(h,{href:"#about",outline:!0,children:"Our Story"})]}),e.jsx("div",{className:"flowerCard",children:"✿"})]}),e.jsxs("section",{id:"journey",className:"journey sectionShell",children:[e.jsxs("div",{className:"sectionIntro small",children:[e.jsx("p",{className:"eyebrow",children:"Your Bridal"}),e.jsx("h2",{children:"Beauty Journey ✨"}),e.jsx("p",{children:"A seamless, stress-free experience from start to finish."}),e.jsx("a",{className:"textLink",href:"#journey",children:"How It Works →"})]}),e.jsx("div",{className:"steps",children:q.map(a=>e.jsxs("article",{className:"step",children:[e.jsx("div",{className:"stepIcon",children:e.jsx(x,{name:a.no==="01"?"calendar":a.no==="02"?"mirror":a.no==="03"?"hair":"brush"})}),e.jsx("span",{children:a.no}),e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.text})]},a.no))})]}),e.jsxs("section",{id:"blog",className:"artists sectionShell",children:[e.jsx("img",{className:"artistLead",src:i.artistLead,alt:"Lead bridal artist",loading:"lazy",decoding:"async"}),e.jsxs("article",{className:"artistNote",children:[e.jsx("p",{className:"eyebrow",children:"Meet The Artists"}),e.jsxs("h2",{children:["Led by ",e.jsx("em",{children:"Passion"}),". Driven by Perfection."]}),e.jsx("p",{children:"Our team of experienced artists are here to make your bridal beauty journey effortless and unforgettable."}),e.jsx("strong",{children:"Lisa Monteiro"}),e.jsx("small",{children:"Lead Hair & Makeup Artist"})]}),D.map(a=>e.jsxs("article",{className:"artistCard",children:[e.jsx("img",{src:a.image,alt:a.name,loading:"lazy",decoding:"async"}),e.jsx("h3",{children:a.name}),e.jsx("p",{children:a.role}),e.jsxs("div",{className:"socials",children:[e.jsx("a",{href:"#contact","aria-label":`${a.name} on Instagram`,children:"ig"}),e.jsx("a",{href:"#contact","aria-label":`${a.name} portfolio`,children:"◌"})]})]},a.name)),e.jsx("aside",{className:"greenQuote",children:"A team that cares as much as you do."})]}),e.jsxs("section",{className:"reviews sectionShell",children:[e.jsxs("div",{className:"sectionIntro small",children:[e.jsx("p",{className:"eyebrow",children:"Love Notes"}),e.jsxs("h2",{children:["From Our Beautiful ",e.jsx("em",{children:"Brides"})]}),e.jsx("a",{className:"textLink",href:"#blog",children:"Read More Reviews →"})]}),e.jsxs("div",{className:"reviewCards",children:[g.map((a,t)=>e.jsxs("article",{className:`reviewCard ${b===t?"active":""}`,children:[e.jsx("div",{className:"quote",children:"“"}),e.jsx("div",{className:"stars",children:"★★★★★"}),e.jsx("p",{children:a.text}),e.jsxs("strong",{children:["— ",a.name]})]},a.name)),e.jsxs("div",{className:"reviewControls","aria-label":"Testimonial controls",children:[e.jsx("button",{type:"button",onClick:()=>C((b+g.length-1)%g.length),"aria-label":"Previous testimonial",children:"←"}),e.jsxs("span",{children:[b+1," / ",g.length]}),e.jsx("button",{type:"button",onClick:()=>C((b+1)%g.length),"aria-label":"Next testimonial",children:"→"})]})]}),e.jsx("img",{className:"sideBride",src:i.sideBride,alt:"Bride holding bouquet",loading:"lazy",decoding:"async"})]}),e.jsxs("section",{id:"packages",className:"packages sectionShell",children:[e.jsxs("div",{className:"sectionIntro small",children:[e.jsx("p",{className:"eyebrow",children:"Choose Your"}),e.jsx("h2",{children:"Perfect Package"}),e.jsx("p",{children:"Curated experiences to suit every bride’s needs."}),e.jsx("a",{className:"textLink",href:"#packages",children:"View All Packages →"})]}),e.jsxs("div",{className:"packageCards",children:[M.map(a=>e.jsxs("article",{className:a.featured?"packageCard featured":"packageCard",children:[a.featured&&e.jsx("div",{className:"badge",children:"Most Loved"}),e.jsx("div",{className:"packageIcon",children:"✺"}),e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.tag}),e.jsx("ul",{children:a.items.map(t=>e.jsx("li",{children:t},t))}),e.jsx("small",{children:"Starting at"}),e.jsx("strong",{children:a.price}),e.jsxs("button",{type:"button",className:"choosePackage",onClick:()=>m(a.title),children:["Choose ",a.title.replace("The ","")]})]},a.title)),e.jsxs("article",{className:"addons",children:[e.jsx("h3",{children:"Add-ons"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Bridesmaid Makeup"}),e.jsx("li",{children:"Bridesmaid Hair"}),e.jsx("li",{children:"Mother / Family Styling"}),e.jsx("li",{children:"Pre-Wedding Events"})]}),e.jsx("p",{children:"Custom packages available for all bridal parties."})]})]})]}),e.jsxs("section",{className:"planning sectionShell","aria-labelledby":"planning-title",children:[e.jsxs("div",{className:"availability",children:[e.jsx("p",{className:"eyebrow",children:"Now Reserving"}),e.jsx("h2",{id:"planning-title",children:"Your Date Deserves a Calm, Beautiful Plan."}),e.jsx("p",{children:"We are currently welcoming 2026–2027 celebrations throughout Los Angeles, Beverly Hills, Malibu, Orange County, and select destination locations."}),e.jsxs("div",{className:"availabilityMeta",children:[e.jsxs("span",{children:[e.jsx(x,{name:"calendar"})," Limited weekend dates"]}),e.jsxs("span",{children:[e.jsx(x,{name:"sparkle"})," Travel available"]})]}),e.jsx(h,{onClick:()=>m(),children:"Check Your Date"})]}),e.jsxs("div",{className:"faqList",children:[e.jsx("p",{className:"eyebrow",children:"Questions, Answered"}),E.map(([a,t],d)=>e.jsxs("article",{className:"faqItem",children:[e.jsxs("button",{type:"button",onClick:()=>T(f===d?-1:d),"aria-expanded":f===d,children:[a,e.jsx("span",{children:f===d?"−":"+"})]}),f===d&&e.jsx("p",{children:t})]},a))]})]}),e.jsxs("section",{id:"contact",className:"cta",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Let’s Create Your Dream Look"}),e.jsx("p",{children:"Your day is one of a kind. Your beauty should be too."})]}),e.jsx(h,{onClick:()=>m(),outline:!0,children:"Book Your Date"}),e.jsxs("p",{children:["Or call us at ",e.jsx("strong",{children:"+1 (555) 123-4567"})]})]}),e.jsxs("footer",{className:"footer sectionShell",children:[e.jsxs("div",{children:[e.jsxs("a",{className:"logo footerLogo",href:"#home",children:[e.jsx("span",{children:"Bloom"}),e.jsx("small",{children:"Bridal Studio"})]}),e.jsx("p",{children:"Luxury bridal hair, makeup and styling for your most beautiful day."}),e.jsxs("div",{className:"socials footerSocials",children:[e.jsx("a",{href:"#gallery","aria-label":"Instagram",children:"Instagram"}),e.jsx("a",{href:"#gallery","aria-label":"Pinterest",children:"Pinterest"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Quick Links"}),e.jsx("a",{href:"#about",children:"About Us"}),e.jsx("a",{href:"#services",children:"Services"}),e.jsx("a",{href:"#gallery",children:"Gallery"}),e.jsx("a",{href:"#packages",children:"Packages"}),e.jsx("a",{href:"#contact",children:"Contact"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Studio"}),e.jsxs("p",{children:["123 Blossom Lane",e.jsx("br",{}),"Beverly Hills, CA 90210"]}),e.jsx("p",{children:"+1 (555) 123-4567"}),e.jsx("p",{children:"hello@bloombridalstudio.com"}),e.jsx("p",{children:"Open Tue – Sun | 9am – 6pm"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Follow Along"}),e.jsx("div",{className:"instaGrid",children:[i.footer1,i.footer2,i.footer3,i.footer4,i.footer5,i.footer6].map(a=>e.jsx("img",{src:a,alt:"Bloom Bridal Studio social preview",loading:"lazy",decoding:"async"},a))})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Stay in Bloom"}),e.jsx("p",{children:"Get beauty tips, special offers and studio updates."}),e.jsxs("form",{className:"subscribe",onSubmit:a=>a.preventDefault(),children:[e.jsx("label",{htmlFor:"bloom-email",children:"Email address"}),e.jsx("input",{id:"bloom-email",type:"email",placeholder:"Your email address",required:!0}),e.jsx("button",{type:"submit",children:"Subscribe"})]})]})]}),n&&e.jsx("div",{className:"modalBackdrop",role:"presentation",onMouseDown:a=>a.target===a.currentTarget&&p(!1),children:e.jsxs("section",{className:"bookingModal",role:"dialog","aria-modal":"true","aria-labelledby":"booking-title",children:[e.jsx("button",{className:"modalClose",type:"button",onClick:()=>p(!1),"aria-label":"Close booking form",children:"×"}),e.jsx("p",{className:"eyebrow",children:"Begin Your Bridal Journey"}),e.jsx("h2",{id:"booking-title",children:"Tell Us About Your Day"}),e.jsx("p",{children:"Share a few details and our bridal concierge will be in touch within two business days."}),e.jsxs("form",{className:"bookingForm",onSubmit:a=>{a.preventDefault(),p(!1)},children:[e.jsxs("label",{children:["Full name",e.jsx("input",{autoFocus:!0,name:"name",required:!0,autoComplete:"name"})]}),e.jsxs("label",{children:["Email address",e.jsx("input",{name:"email",type:"email",required:!0,autoComplete:"email"})]}),e.jsxs("label",{children:["Wedding date",e.jsx("input",{name:"date",type:"date",required:!0})]}),e.jsxs("label",{children:["Wedding location",e.jsx("input",{name:"location",required:!0})]}),e.jsxs("label",{children:["Package",e.jsx("select",{name:"package",value:I,onChange:a=>N(a.target.value),children:M.map(a=>e.jsx("option",{children:a.title},a.title))})]}),e.jsxs("label",{children:["Estimated party size",e.jsx("input",{name:"party",type:"number",min:"1",defaultValue:"1"})]}),e.jsxs("label",{className:"fullField",children:["Tell us about your vision",e.jsx("textarea",{name:"vision",rows:3,placeholder:"Your style, timing, and anything else you’d love us to know..."})]}),e.jsxs("button",{className:"btn fullField",type:"submit",children:["Request Consultation ",e.jsx("span",{children:"→"})]})]})]})})]})}const W=`
  :root {
    --cream: #fff8ef;
    --ivory: #fffdf8;
    --blush: #f5d7cd;
    --blush-soft: #faece6;
    --coral: #d7655d;
    --coral-dark: #b84d47;
    --gold: #c69b52;
    --sage: #8f9874;
    --ink: #3f3834;
    --muted: #746863;
    --line: rgba(176, 122, 88, 0.25);
    --shadow: 0 24px 70px rgba(92, 59, 45, 0.13);
  }

  * { box-sizing: border-box; }

  body { margin: 0; background: var(--cream); }

  .bloomPage {
    min-height: 100vh;
    color: var(--ink);
    background:
      radial-gradient(circle at 0 10%, rgba(245, 190, 180, 0.45), transparent 20rem),
      radial-gradient(circle at 100% 12%, rgba(238, 202, 176, 0.65), transparent 22rem),
      linear-gradient(180deg, #fff9f1 0%, #fffaf3 45%, #fff5ec 100%);
    font-family: "Avenir Next", Avenir, "Segoe UI", system-ui, sans-serif;
    overflow-x: clip;
    isolation: isolate;
  }

  .bloomPage section[id] { scroll-margin-top: 92px; }
  .bloomPage button, .bloomPage input, .bloomPage select, .bloomPage textarea { font: inherit; }
  .bloomPage a:focus-visible, .bloomPage button:focus-visible, .bloomPage input:focus-visible, .bloomPage select:focus-visible, .bloomPage textarea:focus-visible { outline: 3px solid rgba(198,155,82,.5); outline-offset: 3px; }

  .sectionShell { width: min(1280px, calc(100% - 48px)); margin-inline: auto; }

  .navWrap {
    width: 100%;
    margin: 0;
    padding-inline: max(24px, calc((100vw - 1280px) / 2));
    min-height: 82px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 28px;
    position: sticky;
    top: 0;
    z-index: 50;
    border-bottom: 1px solid rgba(176, 122, 88, 0.14);
    background: rgba(255, 251, 245, 0.94);
    box-shadow: 0 8px 30px rgba(92, 59, 45, 0.06);
    backdrop-filter: blur(18px);
  }

  .logo { text-decoration: none; color: var(--coral-dark); display: inline-grid; line-height: 0.9; }
  .logo span { font-family: Georgia, "Times New Roman", serif; font-size: clamp(2.3rem, 4vw, 3.6rem); font-weight: 500; letter-spacing: -0.05em; }
  .logo small { color: var(--muted); text-transform: uppercase; letter-spacing: 0.28em; font-weight: 700; font-size: 0.7rem; margin-left: 4px; }

  .navLinks { display: flex; justify-content: center; gap: clamp(14px, 2vw, 34px); }
  .navLinks a { color: var(--ink); text-transform: uppercase; font-size: 0.76rem; letter-spacing: 0.08em; font-weight: 700; text-decoration: none; position: relative; padding: 18px 0; transition: color .2s ease; }
  .navLinks a::after { content: ""; position: absolute; left: 0; right: 0; bottom: 8px; height: 2px; background: var(--coral); transform: scaleX(0); transform-origin: left; transition: transform .25s ease; }
  .navLinks a:hover, .navLinks a.active { color: var(--coral-dark); }
  .navLinks a.active::after { transform: scaleX(1); }

  .menuButton { display: none; width: 44px; height: 44px; place-items: center; border: 1px solid var(--line); border-radius: 50%; background: white; color: var(--coral-dark); font-size: 1.35rem; cursor: pointer; }
  .mobileNav { display: none; }

  .bookTop,
  .btn {
    border: 0;
    background: var(--coral);
    color: white;
    border-radius: 4px;
    padding: 15px 25px;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 14px;
    box-shadow: 0 12px 24px rgba(215, 101, 93, 0.22);
    cursor: pointer;
    transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
  }

  .bookTop:hover, .btn:hover { transform: translateY(-2px); box-shadow: 0 16px 30px rgba(215, 101, 93, 0.28); }
  .btnOutline:hover { background: white; box-shadow: 0 12px 26px rgba(92, 59, 45, 0.1); }
  .bookTop svg { width: 17px; height: 17px; }

  .btnOutline { background: rgba(255,255,255,0.55); color: var(--coral-dark); border: 1px solid rgba(198, 155, 82, 0.5); box-shadow: none; }

  .hero { min-height: 650px; display: grid; grid-template-columns: 1.04fr 0.96fr; gap: 42px; align-items: center; padding: 28px 0 66px; position: relative; }
  .hero::before { content: ""; position: absolute; left: -18vw; top: 8%; width: 30vw; height: 70%; border-radius: 50%; background: radial-gradient(circle, rgba(238,175,164,.28), transparent 68%); pointer-events: none; }
  .eyebrow { color: var(--coral); text-transform: uppercase; font-size: 0.74rem; letter-spacing: 0.17em; font-weight: 800; margin: 0 0 16px; }
  .hero h1,
  h2 { font-family: Georgia, "Times New Roman", serif; font-weight: 500; letter-spacing: -0.055em; line-height: 0.98; margin: 0; }
  .hero h1 { font-size: clamp(4rem, 6.4vw, 6.2rem); max-width: 680px; }
  h2 { font-size: clamp(2.4rem, 5vw, 4.2rem); }
  em { color: var(--coral); font-style: italic; }
  .goldLine { width: 88px; height: 2px; background: var(--gold); margin: 28px 0; }
  .lead { max-width: 460px; color: var(--muted); font-size: 1.06rem; line-height: 1.8; }
  .heroActions { display: flex; flex-wrap: wrap; gap: 18px; margin-top: 28px; }

  .heroArt { position: relative; min-height: 570px; display: grid; place-items: end center; }
  .heroArt::before { content: ""; position: absolute; width: min(88%, 560px); height: 548px; border: 2px solid var(--gold); border-radius: 999px 999px 12px 12px; top: 0; left: 5%; }
  .heroArt img { width: min(88%, 540px); height: 550px; object-fit: cover; object-position: center 20%; border-radius: 999px 999px 12px 12px; box-shadow: var(--shadow); position: relative; z-index: 1; }
  .award { position: absolute; right: 0; top: 34px; z-index: 3; width: 155px; aspect-ratio: 1; border: 4px double var(--gold); border-radius: 50%; display: grid; place-items: center; text-align: center; color: var(--gold); background: rgba(255, 250, 242, .82); font-family: Georgia, serif; font-size: 2rem; line-height: .8; backdrop-filter: blur(8px); }
  .award span { font-family: Inter, sans-serif; display: block; text-transform: uppercase; font-size: .75rem; letter-spacing: .12em; line-height: 1.25; margin-top: 8px; }
  .floral { position: absolute; color: var(--coral); font-size: 8rem; opacity: .35; z-index: 2; }
  .floralRight { right: -2rem; bottom: 2rem; }

  .serviceBar { margin-top: -34px; position: relative; z-index: 5; display: grid; grid-template-columns: repeat(4, 1fr); background: rgba(255, 252, 246, 0.96); border: 1px solid var(--line); border-radius: 12px; box-shadow: var(--shadow); backdrop-filter: blur(12px); }
  .serviceItem { display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 18px; padding: 30px 36px; border-right: 1px solid var(--line); }
  .serviceItem:last-child { border-right: 0; }
  .serviceIcon { color: var(--coral-dark); }
  .serviceIcon svg { display: block; width: 42px; height: 42px; }
  h3 { margin: 0 0 8px; text-transform: uppercase; letter-spacing: .1em; font-size: .85rem; }
  p { color: var(--muted); line-height: 1.65; }
  .serviceItem p { margin: 0; font-size: .9rem; }

  .gallery { display: grid; grid-template-columns: 270px 1fr; gap: 42px; align-items: center; padding: 78px 0 42px; }
  .sectionIntro p:not(.eyebrow) { margin: 18px 0; }
  .textLink { color: var(--coral); text-decoration: none; text-transform: uppercase; font-weight: 800; letter-spacing: .1em; font-size: .78rem; }
  .galleryGrid { display: grid; grid-template-columns: 1.05fr .8fr 1.05fr .75fr; grid-auto-rows: 150px; gap: 14px; }
  .galleryGrid img { width: 100%; height: 100%; object-fit: cover; object-position: center 20%; border-radius: 8px; box-shadow: 0 12px 30px rgba(70, 45, 32, .11); transition: transform .35s ease, box-shadow .35s ease; }
  .galleryGrid img:hover { transform: translateY(-4px); box-shadow: 0 18px 38px rgba(70, 45, 32, .16); }
  .galleryGrid .tall { grid-row: span 2; }
  .galleryGrid .wide { grid-column: span 1; grid-row: span 2; }

  .about { display: grid; grid-template-columns: 1.05fr .85fr 180px; gap: 34px; align-items: center; padding: 32px 0 70px; }
  .studioImg { width: 100%; min-height: 300px; height: 100%; object-fit: cover; border-radius: 0 40px 0 0; box-shadow: var(--shadow); }
  .aboutCopy { padding: 30px 0; }
  .aboutCopy p { max-width: 560px; }
  .script { font-family: Georgia, serif; font-style: italic; color: var(--coral) !important; font-size: 1.3rem; }
  .flowerCard { height: 260px; display: grid; place-items: center; font-size: 7rem; color: var(--coral); background: rgba(255,255,255,.72); border-radius: 90px 0 0 0; border: 1px solid var(--line); }

  .journey { display: grid; grid-template-columns: 250px 1fr; gap: 50px; padding: 10px 0 58px; }
  .sectionIntro.small h2 { font-size: clamp(2rem, 3.6vw, 3.2rem); }
  .steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; position: relative; }
  .steps::before { content: ""; position: absolute; top: 36px; left: 8%; right: 8%; height: 1px; background: var(--gold); opacity: .6; }
  .step { position: relative; z-index: 1; }
  .stepIcon { width: 74px; aspect-ratio: 1; border: 1px solid var(--gold); background: var(--cream); color: var(--gold); border-radius: 50%; display: grid; place-items: center; margin-bottom: 18px; }
  .stepIcon svg { width: 32px; height: 32px; }
  .step span { font-family: Georgia, serif; color: var(--coral-dark); font-size: 2.1rem; font-weight: 600; }

  .artists { display: grid; grid-template-columns: 1fr .95fr repeat(3, .82fr) .7fr; gap: 16px; align-items: stretch; padding: 10px 0 50px; }
  .artistLead, .artistCard img { width: 100%; height: 100%; object-fit: cover; object-position: center 20%; }
  .artistLead { border-radius: 0 16px 0 0; min-height: 250px; }
  .artistNote, .artistCard, .greenQuote { background: rgba(255, 252, 246, .92); border: 1px solid var(--line); border-radius: 10px; box-shadow: 0 10px 28px rgba(70,45,32,.08); padding: 24px; }
  .artistNote h2 { font-size: 2.2rem; }
  .artistNote small { display: block; color: var(--muted); margin-top: 4px; }
  .artistCard { text-align: center; padding: 0 0 20px; overflow: hidden; }
  .artistCard img { height: 160px; margin-bottom: 16px; }
  .artistCard p, .artistCard h3 { margin: 0; }
  .socials { display: flex; justify-content: center; gap: 8px; color: var(--coral); font-size: .78rem; margin-top: 12px; }
  .socials a { color: inherit; text-decoration: none; border: 1px solid currentColor; border-radius: 99px; padding: 4px 7px; }
  .greenQuote { background: var(--sage); color: white; display: grid; place-items: center; font-family: Georgia, serif; font-size: 2rem; line-height: 1.1; }

  .reviews { display: grid; grid-template-columns: 250px 1fr 170px; gap: 30px; align-items: center; padding: 10px 0 44px; }
  .reviewCards { display: grid; grid-template-columns: repeat(3, 1fr); background: rgba(255, 252, 246, .92); border: 1px solid var(--line); box-shadow: var(--shadow); border-radius: 12px; overflow: hidden; }
  .reviewCard { padding: 30px; border-right: 1px solid var(--line); }
  .reviewCard:last-child { border-right: 0; }
  .quote { color: var(--coral); font-family: Georgia, serif; font-size: 4rem; height: 32px; }
  .stars { color: var(--gold); letter-spacing: .08em; }
  .sideBride { width: 100%; height: 260px; object-fit: cover; border-radius: 999px 999px 10px 10px; }
  .reviewControls { display: none; }

  .packages { display: grid; grid-template-columns: 250px 1fr; gap: 30px; align-items: start; padding: 16px 0 70px; }
  .packageCards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; align-items: stretch; }
  .packageCard, .addons { position: relative; text-align: center; padding: 34px 26px; background: rgba(255,252,246,.94); border: 1px solid var(--line); border-radius: 10px; box-shadow: 0 18px 42px rgba(70,45,32,.1); }
  .packageCard.featured { border: 2px solid var(--coral); transform: translateY(-14px); }
  .badge { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: var(--coral); color: white; padding: 8px 24px; border-radius: 3px; text-transform: uppercase; letter-spacing: .12em; font-size: .68rem; font-weight: 800; }
  .packageIcon { color: var(--gold); font-size: 2.2rem; }
  ul { text-align: left; color: var(--muted); line-height: 1.8; padding-left: 20px; }
  .packageCard strong { display: block; color: var(--coral-dark); font-family: Georgia, serif; font-size: 2.1rem; margin-top: 2px; }
  .packageCard small { color: var(--gold); text-transform: uppercase; letter-spacing: .12em; font-weight: 800; }
  .addons { background: var(--sage); color: white; text-align: left; }
  .addons p, .addons li { color: rgba(255,255,255,.86); }
  .choosePackage { margin-top: 18px; padding: 10px 14px; border: 1px solid var(--line); border-radius: 4px; background: var(--blush-soft); color: var(--coral-dark); text-transform: uppercase; font-size: .7rem; font-weight: 800; letter-spacing: .08em; cursor: pointer; transition: background .2s ease, color .2s ease; }
  .choosePackage:hover { background: var(--coral); color: white; }

  .planning { display: grid; grid-template-columns: .92fr 1.08fr; gap: 60px; align-items: start; padding: 20px 0 78px; }
  .availability { padding: 42px; border-radius: 180px 16px 16px 16px; background: linear-gradient(145deg, #f6ded5, #fffaf3 62%); border: 1px solid var(--line); box-shadow: var(--shadow); }
  .availability h2 { font-size: clamp(2.3rem, 4vw, 3.5rem); }
  .availabilityMeta { display: flex; flex-wrap: wrap; gap: 12px; margin: 24px 0; }
  .availabilityMeta span { display: inline-flex; align-items: center; gap: 8px; color: var(--muted); font-size: .85rem; font-weight: 700; }
  .availabilityMeta svg { width: 24px; height: 24px; color: var(--gold); }
  .faqList { padding-top: 18px; }
  .faqItem { border-top: 1px solid var(--line); }
  .faqItem:last-child { border-bottom: 1px solid var(--line); }
  .faqItem button { width: 100%; display: flex; justify-content: space-between; gap: 20px; padding: 21px 0; border: 0; background: transparent; color: var(--ink); text-align: left; font-weight: 700; cursor: pointer; }
  .faqItem button span { color: var(--coral); font-size: 1.35rem; }
  .faqItem p { margin: -4px 0 22px; max-width: 620px; }

  .cta { background: var(--coral); color: white; padding: 32px min(6vw, 86px); display: grid; grid-template-columns: 1fr auto auto; gap: 50px; align-items: center; }
  .cta h2 { color: white; font-size: clamp(2rem, 3vw, 3rem); }
  .cta p { color: rgba(255,255,255,.9); margin: 0; }
  .cta .btnOutline { background: white; color: var(--coral-dark); border-color: white; }

  .footer { display: grid; grid-template-columns: 1.1fr .75fr 1.2fr 1fr 1.15fr; gap: 38px; padding: 48px 0 38px; }
  .footer h3 { color: var(--coral); }
  .footer a { display: block; color: var(--muted); text-decoration: none; margin: 8px 0; }
  .footer p { font-size: .92rem; margin: 8px 0; }
  .footerLogo span { font-size: 2.7rem; }
  .instaGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
  .instaGrid img { width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 4px; }
  .subscribe { display: grid; gap: 10px; }
  .subscribe label { font-size: .8rem; font-weight: 700; color: var(--muted); }
  .subscribe input { width: 100%; padding: 13px 14px; border: 1px solid var(--line); background: white; border-radius: 3px; }
  .subscribe button { background: var(--gold); color: white; border: 0; border-radius: 3px; padding: 12px 14px; text-transform: uppercase; font-weight: 800; letter-spacing: .1em; cursor: pointer; }

  .modalBackdrop { position: fixed; inset: 0; z-index: 100; display: grid; place-items: center; padding: 22px; background: rgba(52,39,34,.58); backdrop-filter: blur(10px); }
  .bookingModal { position: relative; width: min(720px, 100%); max-height: calc(100vh - 44px); overflow-y: auto; padding: 42px; border: 1px solid var(--line); border-radius: 18px; background: var(--ivory); box-shadow: 0 35px 100px rgba(30,20,16,.3); }
  .bookingModal h2 { font-size: clamp(2.5rem, 5vw, 4rem); }
  .modalClose { position: absolute; top: 16px; right: 16px; width: 42px; height: 42px; border: 1px solid var(--line); border-radius: 50%; background: white; color: var(--coral-dark); font-size: 1.5rem; cursor: pointer; }
  .bookingForm { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 26px; }
  .bookingForm label { display: grid; gap: 7px; color: var(--ink); font-size: .8rem; font-weight: 700; }
  .bookingForm input, .bookingForm select, .bookingForm textarea { width: 100%; min-width: 0; padding: 12px 13px; border: 1px solid var(--line); border-radius: 5px; background: white; color: var(--ink); }
  .bookingForm textarea { resize: vertical; }
  .fullField { grid-column: 1 / -1; }

  @media (max-width: 1100px) {
    .navWrap { grid-template-columns: 1fr auto; }
    .navLinks { grid-column: 1 / -1; justify-content: flex-start; flex-wrap: wrap; order: 3; }
    .hero { grid-template-columns: 1fr; }
    .heroArt { min-height: auto; justify-content: center; }
    .serviceBar, .steps, .reviewCards { grid-template-columns: repeat(2, 1fr); }
    .serviceItem:nth-child(2) { border-right: 0; }
    .gallery, .about, .journey, .reviews, .packages, .planning { grid-template-columns: 1fr; }
    .about { gap: 20px; }
    .flowerCard { display: none; }
    .artists { grid-template-columns: repeat(3, 1fr); }
    .artistLead, .artistNote, .greenQuote { grid-column: span 1; }
    .packageCards { grid-template-columns: repeat(2, 1fr); }
    .cta { grid-template-columns: 1fr; gap: 18px; }
    .footer { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 720px) {
    .sectionShell { width: min(100% - 28px, 1280px); }
    .navWrap { min-height: 72px; padding: 10px 16px; grid-template-columns: 1fr auto; gap: 12px; }
    .navWrap .logo span { font-size: 2.5rem; }
    .navLinks, .bookTop { display: none; }
    .menuButton { display: grid; }
    .mobileNav { position: absolute; left: 12px; right: 12px; top: calc(100% + 8px); display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; padding: 12px; border: 1px solid var(--line); border-radius: 12px; background: rgba(255,252,246,.98); box-shadow: var(--shadow); }
    .mobileNav a { padding: 12px; border-radius: 8px; color: var(--ink); text-decoration: none; text-transform: uppercase; font-size: .78rem; font-weight: 700; }
    .mobileNav a.active { color: var(--coral-dark); background: var(--blush-soft); }
    .hero { padding-top: 18px; }
    .hero h1 { font-size: clamp(3.35rem, 15vw, 4.2rem); }
    .heroArt img { height: 420px; width: 100%; }
    .heroArt::before, .award { display: none; }
    .serviceBar, .galleryGrid, .steps, .artists, .reviewCards, .packageCards, .footer { grid-template-columns: 1fr; }
    .serviceItem, .reviewCard { border-right: 0; border-bottom: 1px solid var(--line); }
    .galleryGrid { grid-auto-rows: 240px; }
    .galleryGrid .tall, .galleryGrid .wide { grid-row: span 1; grid-column: span 1; }
    .steps::before { display: none; }
    .packageCard.featured { transform: none; }
    .reviewCard { display: none; }
    .reviewCard.active { display: block; }
    .reviewControls { display: flex; align-items: center; justify-content: center; gap: 18px; padding: 14px; }
    .reviewControls button { width: 38px; height: 38px; border: 1px solid var(--line); border-radius: 50%; background: white; color: var(--coral-dark); cursor: pointer; }
    .availability { padding: 32px 24px; border-radius: 90px 14px 14px 14px; }
    .bookingModal { padding: 32px 20px 24px; }
    .bookingForm { grid-template-columns: 1fr; }
    .fullField { grid-column: 1; }
  }

  @media (prefers-reduced-motion: no-preference) {
    .heroCopy { animation: bloomRise .75s ease-out both; }
    .heroArt { animation: bloomRise .85s .12s ease-out both; }
    .serviceBar { animation: bloomRise .75s .2s ease-out both; }
    @keyframes bloomRise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  }

  @media (prefers-reduced-motion: reduce) {
    .bloomPage *, .bloomPage *::before, .bloomPage *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; transition-duration: .01ms !important; }
  }
`;export{H as default};
