// ============================================================
//  PROJECTS.JS — Edit this file to manage your portfolio
//  Add, remove, or reorder projects here.
//  Each project will automatically appear on the site.
// ============================================================

const projects = [
  {
    id: 1,
    title: "Project One",
    tag: "Product Design",
    emoji: "🛠",
    // thumb: "img/project1.jpg",   // ← uncomment to use a real image
    summary: "A short one-liner about this project and what it does.",
    description: [
      "This is where you write a longer description of your project. Explain the problem you were solving, the approach you took, and any interesting design or technical decisions you made.",
      "You can add as many paragraphs as you want — just add a new string to this array. Talk about the context, who the users were, what constraints you were working with, and how you got from problem to solution."
    ],
    learned: [
      "Describe what you learned from this project. What worked? What didn't? What would you do differently?",
      "This is a great place to show self-awareness and growth mindset — qualities any PM or hiring manager will appreciate."
    ],
    link: "https://your-project-link.com",
    tech: ["Figma", "Amplitude", "SQL", "Python"]
  },

  {
    id: 2,
    title: "Project Two",
    tag: "Data & Analytics",
    emoji: "📊",
    // thumb: "img/project2.jpg",
    summary: "A short one-liner about this project.",
    description: [
      "Describe your second project here. What was the problem? Who was affected? How did you approach it?",
      "Include any relevant context about the team, timeline, or constraints you were working within."
    ],
    learned: [
      "What did you take away from this experience? What skills did it sharpen?"
    ],
    link: "https://your-project-link.com",
    tech: ["SQL", "Amplitude", "Looker", "Python"]
  },

  {
    id: 3,
    title: "Project Three",
    tag: "Side Project",
    emoji: "💡",
    // thumb: "img/project3.jpg",
    summary: "A short one-liner about this project.",
    description: [
      "Describe your third project here. Personal projects, hackathon entries, and side experiments are all great to include — they show initiative and curiosity."
    ],
    learned: [
      "What surprised you? What would you build differently next time?"
    ],
    link: "https://your-project-link.com",
    tech: ["React", "Node.js", "Figma"]
  }

  // ── To add a new project, copy the block below and fill it in ──
  //
  // {
  //   id: 4,
  //   title: "Your Project Title",
  //   tag: "Category",
  //   emoji: "🚀",
  //   // thumb: "img/project4.jpg",
  //   summary: "One-line summary.",
  //   description: [
  //     "First paragraph.",
  //     "Second paragraph (optional)."
  //   ],
  //   learned: [
  //     "What you learned."
  //   ],
  //   link: "https://...",
  //   tech: ["Tool 1", "Tool 2"]
  // },

];
