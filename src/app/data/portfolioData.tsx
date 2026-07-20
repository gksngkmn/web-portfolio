import { Code2, Globe, Layers, LayoutDashboard, Terminal } from "lucide-react";
import { PortfolioProject } from "../models/PortfolioProject";
import { ProjectCategory } from "../models/ProjectCategory";
import { Skill } from "../models/Skill";
import { SkillGroup } from "../models/SkillGroup";
import { Experience } from "../models/Experience";
import { PortfolioCatalog } from "../services/PortfolioCatalog";

export const NAV_ITEMS = [
  { id: "about", translationKey: "nav.about" },
  { id: "skills", translationKey: "nav.skills" },
  { id: "experience", translationKey: "nav.experience" },
  { id: "projects", translationKey: "nav.projects" },
  { id: "contact", translationKey: "nav.contact" },
] as const;

export const PROJECT_CATEGORIES = Object.freeze([
  new ProjectCategory("all", "All", <Layers size={14} />),
  new ProjectCategory("web", "Web", <Globe size={14} />),
  new ProjectCategory("management", "Management", <LayoutDashboard size={14} />),
  new ProjectCategory("systems", "Systems", <Terminal size={14} />),
  new ProjectCategory("ai", "AI / ML", <Code2 size={14} />),
]);

const projects = [
  new PortfolioProject({
    id: 1,
    category: "web",
    title: "Product Order Management",
    description: "A JavaScript-based product and order management application.",
    tags: ["JavaScript", "Web", "Order Management"],
    github: "https://github.com/gksngkmn/ProductOrderManagement",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&h=420&fit=crop&auto=format",
    color: "#7cffd4",
  }),
  new PortfolioProject({
    id: 2,
    category: "management",
    title: "Finance App",
    description: "A Flutter-based financial analysis application currently under development.",
    tags: ["Flutter", "Dart", "Mobile", "Finance"],
    github: "https://github.com/gksngkmn/FinanceApp",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&h=420&fit=crop&auto=format",
    color: "#b57bff",
  }),
  new PortfolioProject({
    id: 3,
    category: "ai",
    title: "Unity ChatBot",
    description: "An interactive Unity chatbot with Ready Player Me avatar support and real-time lip sync.",
    tags: ["Unity", "C#", "Ready Player Me", "Lip Sync"],
    github: "https://github.com/gksngkmn/UnityChatBot",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=700&h=420&fit=crop&auto=format",
    color: "#7cb8ff",
  }),
  new PortfolioProject({
    id: 4,
    category: "ai",
    title: "AstroRush",
    description: "A compact Python project published as part of my programming studies.",
    tags: ["Python"],
    github: "https://github.com/gksngkmn/astrorush",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=700&h=420&fit=crop&auto=format",
    color: "#ff9f7c",
  }),
  new PortfolioProject({
    id: 5,
    category: "systems",
    title: "Simple Two-Pass Compiler",
    description: "A two-pass compiler featuring lexical analysis, symbol-table construction, recursive-descent parsing, semantic analysis, AST generation, and error reporting.",
    tags: ["Python", "CustomTkinter", "Compiler", "AST"],
    github: "https://github.com/gksngkmn/TwoPassCompiler",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=700&h=420&fit=crop&auto=format",
    color: "#7cffd4",
  }),
];

export const PORTFOLIO_CATALOG = new PortfolioCatalog(projects);

const skills = Object.freeze([
  new Skill("Python", "proficient"),
  new Skill("JavaScript", "proficient"),
  new Skill("SQL / PostgreSQL", "proficient"),
  new Skill("C / C++", "proficient"),
  new Skill("Java", "working-knowledge"),
  new Skill("Node.js", "working-knowledge"),
  new Skill("OpenCV", "working-knowledge"),
  new Skill("ROS 2", "working-knowledge"),
  new Skill("Docker", "working-knowledge"),
  new Skill("Cybersecurity", "exploring"),
]);

export const SKILL_GROUPS = Object.freeze([
  new SkillGroup("proficient", "Proficient", "Technologies I can use independently in complete projects.", skills.filter((skill) => skill.level === "proficient")),
  new SkillGroup("working-knowledge", "Working Knowledge", "Technologies I have used and continue to strengthen.", skills.filter((skill) => skill.level === "working-knowledge")),
  new SkillGroup("exploring", "Exploring", "Areas I am currently learning through hands-on work.", skills.filter((skill) => skill.level === "exploring")),
]);

export const EXPERIENCES = Object.freeze([
  new Experience({
    company: "Kuartis Technology",
    role: "Software Engineering Intern",
    startDate: "Jul 16, 2025",
    endDate: "Aug 26, 2025",
    companyUrl: "https://kuartis.com/",
    responsibilities: [
      "Developed a C++ GUI for ROS 2-based autonomous systems by rewriting an existing Python interface with Qt and adding new features.",
      "Annotated computer-vision datasets with CVAT and prepared training data for machine-learning models.",
    ],
    technologies: ["ROS 2", "C++", "Python", "Qt", "CVAT", "Computer Vision"],
  }),
]);
