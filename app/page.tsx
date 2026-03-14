import Image from "next/image";
export default function MennaPortfolioPage() {
  const skills = [
    "Python",
    "Java",
    "SQL",
    "Machine Learning",
    "Data Science",
    "OOP",
    "Data Structures",
    "Git",
    "Microsoft Office",
  ];

  const education = [
    {
      title: "B.Sc. in Computer Engineering",
      org: "Alamein International University (AIU)",
      details: "Major: AI Science • GPA: 3.923/4.0",
      period: "2023 — Present",
    },
    {
      title: "USAID Scholars Program (Cohort 4)",
      org: "Merit-based scholarship for high-achieving public-school students in Egypt",
      details: "Scholarship & leadership development",
      period: "2023 — Present",
    },
    {
      title: "Virginia Tech Scholar",
      org: "Integrated undergraduate CS knowledge and skills",
      details: "Spring Term",
      period: "2026",
    },
  ];

  const training = [
    {
      title: "DEPI — Data Science Track",
      details:
        "IBM-designed training in AI and Data Science focused on extracting insights from data and business problem solving.",
      period: "Dec 2025 — Jul 2026",
    },
    {
      title: "QWorld — Quantum Computing",
      details:
        "Hands-on summer training in quantum computing organized by QWorld AIU, QEgypt, and AleQCG.",
      period: "Jul 2025 — Sep 2025",
    },
    {
      title: "ITI — Java Developer Training",
      details:
        "Java application development, OOP, databases, web frameworks, secure authentication, and deployment.",
      period: "Jul 2025 — Sep 2025",
    },
    {
      title: "She Can — ICT Graduation Program",
      details:
        "8-month ICT training program focused on digital skills, technology fundamentals, and career readiness.",
      period: "8 Months",
    },
  ];

  const projects = [
    {
      title: "MomVillage",
      description:
        "A software engineering project for analyzing, designing, and demonstrating a human-centered digital system for motherhood support.",
      stack: ["Software Engineering", "Web App", "System Analysis"],
      github: "https://github.com/Mennatullah122/MomVillage",
    },
    {
      title: "ITI-Cafeteria-System",
      description:
        "A cafeteria order and loyalty platform where students can place food orders, earn points, redeem rewards, and receive notifications.",
      stack: ["Java", "Database", "OOP"],
      github: "https://github.com/Mennatullah122/ITI-Cafeteria-System",
    },
    {
      title: "Brain Tumor MRI Classification Using CNN",
      description:
        "Deep learning pipeline for brain tumor classification from MRI images. Achieved 91.84% test accuracy.",
      stack: ["Python", "CNN", "Deep Learning"],
      github: "https://github.com/HodaMahmoud-2005/Brain-Tumor-MRI",
    },
    {
      title: "BigMart Sales Data Preprocessing & PCA Analysis",
      description:
        "Jupyter notebook workflow including EDA, cleaning, encoding, scaling, and PCA with visual reporting.",
      stack: ["Python", "Pandas", "EDA"],
      github: "https://github.com/Basmala-ElKady/BigMart-Sales-Data-Preprocessing-PCA-Analysis",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:px-10 lg:px-16">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-4 py-1 text-sm text-fuchsia-200">
            AI Science Student • Internship Seeker
          </span>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Mennatullah Abdelaziz
            </h1>
            <p className="text-lg text-cyan-300">AI Engineer Portfolio</p>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Computer Engineering student specializing in AI Science, building
            human-centered intelligent systems with machine learning, data
            science, and software engineering. Currently seeking internship
            opportunities in AI, Data Science, and Software Engineering.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-2xl bg-fuchsia-500 px-5 py-3 font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-slate-200 transition hover:bg-white/5"
            >
              Contact Me
            </a>
          </div>
          <div className="grid gap-3 pt-4 text-sm text-slate-300 sm:grid-cols-2">
            <p>📍 Cairo, Egypt</p>
            <p>📧 menmohamed49@gmail.com</p>
            <p>📞 (+20) 1006488673</p>
            <a
              href="https://www.linkedin.com/in/menna-abdelaziz12"
              className="underline decoration-fuchsia-400/50 underline-offset-4"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -right-6 top-10 h-64 w-64 rounded-[2rem] bg-lime-300/90 blur-[2px]" />
          <div className="absolute -bottom-6 left-8 h-28 w-28 rounded-3xl bg-cyan-400" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-fuchsia-500 p-4 shadow-2xl shadow-fuchsia-950/50">
            <div className="aspect-[4/5] rounded-[1.5rem] bg-slate-900/30 p-3">
              <div className="flex h-full items-center justify-center rounded-[1.25rem] border border-white/20 bg-slate-950/40 text-center text-slate-200">
                <div className="space-y-3 px-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-100/80">
<Image
  src="/menna.jpg"
  alt="Menna Mohamed"
  width={350}
  height={420}
  className="rounded-2xl object-cover"
/>                  </p>
                  <p className="text-2xl font-semibold">Mennatullah Abdelaziz</p>
                  <p className="text-sm text-slate-200/80">
                  t’s all about a woman that believes that a person gets only what he strives for so she strives with love, passion and clarity of well. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-16" id="about">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
            <h2 className="mb-4 text-2xl font-semibold">About</h2>
            <p className="leading-8 text-slate-300">
              Driven by a passion for mathematics, scientific exploration, and
              meaningful impact, I chose computer engineering to combine
              analytical thinking with creative problem solving. I enjoy
              designing intelligent systems that transform data and human needs
              into practical, community-centered solutions.
            </p>
          </div>
          <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-500/5 p-8">
            <h2 className="mb-4 text-2xl font-semibold">Core Focus</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Artificial Intelligence",
                "Machine Learning",
                "Data Science",
                "Java Development",
                "Human-Centered Design",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/20 bg-slate-900 px-4 py-2 text-sm text-cyan-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-16" id="education">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Education</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {education.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lg"
            >
              <p className="mb-2 text-sm text-fuchsia-300">{item.period}</p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-slate-300">{item.org}</p>
              <p className="mt-3 text-sm text-slate-400">{item.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-16" id="training">
        <h2 className="mb-6 text-2xl font-semibold">Training & Programs</h2>
        <div className="grid gap-5 lg:grid-cols-2">
          {training.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="rounded-full bg-fuchsia-500/10 px-3 py-1 text-xs text-fuchsia-200">
                  {item.period}
                </span>
              </div>
              <p className="mt-4 leading-7 text-slate-300">{item.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-16" id="skills">
        <h2 className="mb-6 text-2xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-16" id="projects">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <a
            href="https://github.com/Mennatullah122"
            className="text-sm text-cyan-300 underline underline-offset-4"
          >
            View GitHub
          </a>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 shadow-lg"
            >
              <div className="mb-4 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-fuchsia-500/10 px-3 py-1 text-xs text-fuchsia-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">
                {project.description}
              </p>
              <a
                href={project.github}
                className="mt-5 inline-flex rounded-xl border border-cyan-400/30 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-400/10"
              >
                Open Project
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16" id="contact">
        <div className="rounded-[2rem] border border-white/10 bg-fuchsia-500/10 p-8">
          <h2 className="text-3xl font-semibold">Let’s build something impactful</h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-300">
            I am open to internships, collaborations, and opportunities in AI,
            data science, and software engineering.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:menmohamed49@gmail.com"
              className="rounded-2xl bg-white px-5 py-3 font-medium text-slate-950"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/menna-abdelaziz12"
              className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
