import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

/* ================= PERSON ================= */

const person: Person = {
  firstName: "Bhanu",
  lastName: "Pratap Singh",
  name: "Bhanu Pratap Singh",
  role: "Full-Stack Engineer → Tech Lead → Founding Engineer",
  avatar: "https://avatars.githubusercontent.com/u/148634914?v=4",
  email: "bhanupss137@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

/* ================= NEWSLETTER ================= */

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Engineering, systems, and real-world product building.</>,
};

/* ================= SOCIAL ================= */

const social: Social = [
  { name: "GitHub", icon: "github", link: "https://github.com/bhanupratapsingh21", essential: true },
  { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/bhanu-pratap-singh-bbb976257/", essential: true },
  { name: "Email", icon: "email", link: `mailto:${person.email}`, essential: true },
  { name: "Twitter", icon: "twitter", link: "https://x.com/bhanu_pratap_21", essential: true },
  { name: "Instagram", icon: "instagram", link: "https://www.instagram.com/bhanu_pratap.2103/", essential: true },

];

/* ================= HOME ================= */

const home: Home = {
  path: "/",
  image: "https://avatars.githubusercontent.com/u/148634914?v=4",
  label: "Home",
  title: `${person.name} – Portfolio`,
  description: `Work and systems built by ${person.name}`,
  headline: <>Building scalable products from MVP to production.</>,
  featured: { display: false, title: "", href: "" },
  subline: (
    <>
      Founding Engineer at Newral building <Text as="span" weight="strong">Synapses</Text> (EdTech SaaS platform).
      Previously Tech Lead for Competishun — scaling production systems across web, mobile, and backend.
    </>
  ),
};

/* ================= ABOUT ================= */

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Work history and technical profile of ${person.name}`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: true, link: "https://cal.com/whybhanu" },

  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Core engineer at Newral working across client and internal products.
        Progressed from execution-focused development to Tech Lead and Founding Engineer
        responsibilities, owning systems end-to-end.
      </>
    ),
  },

  /* ================= WORK (FROM expriencedata) ================= */

  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Newral Softwares Inc.",
        timeframe: "Dec 2024 – Present",
        role: "Full-Stack Engineer → Tech Lead → Founding Engineer",
        achievements: [
          <>Built monitoring infrastructure and CI/CD pipelines for Fizz Social.</>,
          <>Developed Emotions AI with React Native (mobile) and Next.js (web).</>,
          <>Solo founding engineer for AssumeChat — delivered MVP & V1 for VC demos and funding.</>,
          <>Built Newral.in and CSX.bpss.tech landing pages using 3D UI and Framer Motion.</>,
          <>Delivered MVP for Agrevon under Startup India Seed Round.</>,
          <>Built complete backend for Rapid Stroke with doctors and medical students.</>,
          <>Designed and delivered IHOIK Media landing page with brand focus.</>,
          <>Tech Lead for Competishun LMS — web, mobile, microservices, scale optimization.</>,
          <>Reviewed PRs for 3+ months, handled DB indexing, CPU optimization, async flows, video transcoding.</>,
          <>Currently building Synapses — white-label enterprise LMS SaaS platform.</>,
        ],
        images: [
          { src: "https://res.cloudinary.com/dhvkjanwa/image/upload/v173928858/qrfjgl5ayfadxd84h58g.jpg", alt: "Newral Project 1", width: 8, height: 4 },
          { src: "https://res.cloudinary.com/dhvkjanwa/image/upload/v1739288988/ysspkyfkncgoeuddtzgi.jpg", alt: "Newral Project 2", width: 8, height: 4 },
          { src: "https://res.cloudinary.com/dhvkjanwa/image/upload/v173928858/th40gtw2gqnk11tpajdi.jpg", alt: "Newral Project 3", width: 8, height: 4 },
          { src: "https://res.cloudinary.com/dhvkjanwa/image/upload/v1739288990/rftuvw1iy4w0yagoxf5m.png", alt: "Newral Project 4", width: 8, height: 4 }
        ],
      },
      {
        company: "Eventory",
        timeframe: "Aug 2024 – Oct 2024",
        role: "Full Stack Intern",
        achievements: [
          <>Engineered dual-sided marketplace platform with vendor SaaS subscriptions.</>,
          <>Implemented complex payment flows using Razorpay and Stripe.</>,
          <>Built customer-facing event discovery and booking systems.</>,
        ],
        images: [
          { src: "https://res.cloudinary.com/dhvkjanwa/image/upload/v1725615042/Screenshot_2024-09-06_at_14-54-08_Eventory_xgfkyi.png", alt: "Eventory UI 1", width: 8, height: 4 },
          { src: "https://res.cloudinary.com/dhvkjanwa/image/upload/v1725615042/Screenshot_2024-09-06_at_14-54-47_Eventory_wuhv6f.png", alt: "Eventory UI 2", width: 8, height: 4 },
          { src: "https://res.cloudinary.com/dhvkjanwa/image/upload/v1725615048/Screenshot_2024-09-06_at_14-55-30_Eventory_zoxvdl.png", alt: "Eventory UI 3", width: 8, height: 4 },
          { src: "https://res.cloudinary.com/dhvkjanwa/image/upload/v1725615041/Screenshot_2024-09-06_at_14-54-29_Eventory_badpxi.png", alt: "Eventory UI 4", width: 8, height: 4 }
        ],
      },
      {
        company: "Technical Development",
        timeframe: "Jun 2024 – Jul 2024",
        role: "Independent Project",
        achievements: [
          <>Built Vibe Social — unified platform for short-form posts and long-form video sharing.</>,
          <>Implemented subscriptions, playlists, dynamic comments, and personalized feeds.</>,
          <>Designed full content management with thumbnails, moderation, and analytics.</>,
          <>Optimized backend systems for high media traffic and scalability.</>,
        ],
        images: [
          { src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1723476884/Screenshot_2024-08-12_at_20-51-13_VibeSocial_By_BPSS_Video_Post_s_Shareing_Platform_ff3qv9.png", alt: "Vibe Social UI 1", width: 8, height: 4 },
          { src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1723476859/Screenshot_2024-08-12_at_20-51-30_VibeSocial_By_BPSS_Video_Post_s_Shareing_Platform_dtmo82.png", alt: "Vibe Social UI 2", width: 8, height: 4 }
        ],
      },
      {
        company: "Engineering Foundation",
        timeframe: "Early 2024",
        role: "Self-Driven Learning",
        achievements: [
          <>Deep-dived into MERN stack architecture and production patterns.</>,
          <>Built Tata 1mg clone and URL shorteners for backend mastery.</>,
          <>Focused on database indexing, API design, and system architecture.</>,
        ],
        images: [],
      },
      {
        company: "Masai School",
        timeframe: "Sep 2023 – Present",
        role: "Full Stack Web Development",
        achievements: [
          <>1.5-year immersive program in MERN, DSA, and System Design.</>,
          <>Rigorous training in production-grade engineering and system design.</>,
        ],
        images: [],
      },
      {
        company: "Content Strategy",
        timeframe: "Jun 2023 – Jul 2023",
        role: "Content Creator",
        achievements: [
          <>Achieved 250K+ monthly views through strategic content creation.</>,
          <>Developed high-impact communication and audience engagement skills.</>,
        ],
        images: [],
      },
    ],
  },

  /* ================= STUDIES ================= */

  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Masai School",
        description: <>1.5-year Full Stack Web Development program with focus on MERN, DSA, and System Design</>
      },
      {
        name: "B.Com",
        description: <>Business and finance background providing unique bridge between technical implementation and business profitability</>
      },
    ],
  },

  /* ================= TECHNICAL (FROM TechStackGrid + categories) ================= */

  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend",
        description: <>Production-grade UI development for web and mobile applications.</>,
        tags: [
          { name: "HTML", icon: "html" },
          { name: "CSS", icon: "css" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "React Native", icon: "react" },
          { name: "EXPO", icon: "expo" },
          { name: "Redux", icon: "redux" },
          { name: "ZOD", icon: "zod" },
        ],
        images: [],
      },
      {
        title: "Backend & Databases",
        description: <>APIs, database design, microservices, and server-side architecture.</>,
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Express", icon: "express" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "Mongoose", icon: "mongoose" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Prisma", icon: "prisma" },
          { name: "NGINX", icon: "nginx" },
        ],
        images: [],
      },
      {
        title: "UI Libraries & Styling",
        description: <>Modern UI development with component libraries and styling solutions.</>,
        tags: [
          { name: "Tailwind CSS", icon: "tailwind" },
          { name: "Chakra UI", icon: "chakra" },
          { name: "ShadCN", icon: "shadcn" },
          { name: "Framer Motion", icon: "framer" },
        ],
        images: [],
      },
      {
        title: "DevOps & Cloud",
        description: <>CI/CD, cloud infrastructure, monitoring, and deployment pipelines.</>,
        tags: [
          { name: "AWS", icon: "aws" },
          { name: "Docker", icon: "docker" },
          { name: "Git", icon: "git" },
          { name: "GitHub Actions", icon: "github" },
          { name: "Vercel", icon: "vercel" },
          { name: "Prometheus", icon: "prometheus" },
          { name: "Grafana", icon: "grafana" },
        ],
        images: [],
      },
      {
        title: "Storage & BaaS",
        description: <>Cloud storage, database management, and backend-as-a-service solutions.</>,
        tags: [
          { name: "AWS S3", icon: "aws" },
          { name: "AppWrite", icon: "appwrite" },
          { name: "Cloudinary", icon: "cloudinary" },
        ],
        images: [],
      },
      {
        title: "Tools & Creative",
        description: <>Productivity, design, and content creation tools.</>,
        tags: [
          { name: "Figma", icon: "figma" },
          { name: "Adobe Premiere Pro", icon: "adobe" },
          { name: "CapCut", icon: "capcut" },
          { name: "Canva", icon: "canva" },
          { name: "Notion", icon: "notion" },
          { name: "Content Creation", icon: "content" },
        ],
        images: [],
      },
    ],
  },

  /* ================= DIFFERENTIATORS (FROM TechStackGrid whyHireMe) ================= */

  differentiators: {
    display: true,
    title: "Differentiation",
    items: [
      {
        title: "Business Acumen",
        description: "Unique B.Com background providing a rare bridge between technical implementation and business profitability.",
        index: "01"
      },
      {
        title: "Early Adopter",
        description: "Started engineering at 17. A career built on fast-learning cycles and deep curiosity for the stack.",
        index: "02"
      },
      {
        title: "Full Stack Mastery",
        description: "Not just a coder, but an architect. Deep understanding of the entire data flow from DB to DOM.",
        index: "03"
      },
      {
        title: "Content Creator",
        description: "Communicator with 250k+ monthly views. Can explain complex logic to stakeholders and teams effectively.",
        index: "04"
      },
      {
        title: "Problem Solver",
        description: "Analytical mindset focused on shipping solutions, not just features. Proven track record of clean deployments.",
        index: "05"
      },
      {
        title: "Future-Ready",
        description: "Deep diving into AI/ML and DevOps pipelines to ensure applications are scalable for the next decade.",
        index: "06"
      },
    ],
  },

  /* ================= CORE COMPETENCIES ================= */

  competencies: {
    display: true,
    title: "Core Competencies",
    items: [
      "Problem Solving",
      "Team Collaboration",
      "Technical Leadership",
      "Communication",
      "Time Management",
      "Systems Design"
    ],
  },

  /* ================= STATISTICS ================= */

  stats: {
    display: true,
    items: [
      {
        value: "250K+",
        label: "Monthly Content Views",
        description: "High Impact Communication"
      },
      {
        value: "10+",
        label: "Projects Completed",
        description: "End-to-end Delivery"
      },
      {
        value: "15+",
        label: "Tech Mastered",
        description: "Agile Learning"
      }
    ],
  },

  /* ================= FREELANCE SERVICES ================= */



  /* ================= CTA ================= */

  cta: {
    display: true,
    title: <>READY TO BUILD <br /> <span className="text-zinc-500 underline decoration-zinc-8">SOMETHING REAL?</span></>,
    description: "Available for full-time SDE roles or high-impact freelance projects.",
    button: {
      text: "CONNECT WITH ME",
      link: "/Connect-With-Me"
    }
  }
};

/* ================= BLOG ================= */

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Engineering, systems, and scale",
  description: `Notes and learnings by ${person.name}`,
};

/* ================= WORK PAGE ================= */

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Selected systems and products`,
};

/* ================= GALLERY ================= */

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `Visual snapshots`,
  images: [
  { src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1769450119/IMG_20250908_032325748_njdlup.jpg", alt: "Gallery Image 1",  orientation: "vertical", },
  { src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1769450120/IMG_20250808_194938986_i6sgv2.jpg", alt: "Gallery Image 2",  orientation: "vertical", },
  { src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1769450121/IMG_20251025_215751375_thlurx.jpg", alt: "Gallery Image 3",  orientation: "vertical", },
  { src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1769450123/IMG_20251028_223522914_wftoi9.jpg", alt: "Gallery Image 4",  orientation: "vertical", },
  { src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1769450128/IMG_20250811_215539911_rbg6c2.jpg", alt: "Gallery Image 5",  orientation: "vertical", },
  { src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1769450129/IMG_20250930_175455167_btwrjt.jpg", alt: "Gallery Image 6",  orientation: "vertical", },
  { src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1769450129/IMG_20250921_161337615_vmvhjs.jpg", alt: "Gallery Image 7",  orientation: "vertical", },
  { src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1769450128/IMG_20251028_223601286_nme1n0.jpg", alt: "Gallery Image 8",  orientation: "vertical", },
  { src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1769450130/IMG_20250908_032429686_s1511t.jpg", alt: "Gallery Image 9",  orientation: "vertical", },
  { src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1769450133/IMG_20251028_223526485_kstd3y.jpg", alt: "Gallery Image 10",  orientation: "vertical", },
  { src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1769450133/IMG_20251002_073024200_rleijo.jpg", alt: "Gallery Image 11",  orientation: "vertical", },
  { src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1769450139/IMG_20251028_223432175_yd8cyn.jpg", alt: "Gallery Image 12",  orientation: "vertical", },
  { src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1769450140/IMG_20250908_032301169_y3nbmi.jpg", alt: "Gallery Image 13",  orientation: "vertical", },
  { src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1769450140/IMG_20251028_223351171_ncc61u.jpg", alt: "Gallery Image 14",  orientation: "vertical", },
  { src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1769450141/IMG_20250811_215544266_m1cuhj.jpg", alt: "Gallery Image 15",  orientation: "vertical", }
]

};

export { person, social, newsletter, home, about, blog, work, gallery };