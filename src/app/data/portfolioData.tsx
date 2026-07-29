import { Code2, Globe, Layers, LayoutDashboard, Terminal } from "lucide-react";
import { PortfolioProject } from "../models/PortfolioProject";
import { ProjectCategory } from "../models/ProjectCategory";
import { Skill } from "../models/Skill";
import { SkillGroup } from "../models/SkillGroup";
import { Experience } from "../models/Experience";
import { PortfolioCatalog } from "../services/PortfolioCatalog";
import productLogin from "../../assets/projects/product-order-management/login.png";
import productManager from "../../assets/projects/product-order-management/manager-panel-blurred.png";
import productCustomers from "../../assets/projects/product-order-management/customer-list-blurred.png";
import financeDashboard from "../../assets/projects/finance-app/dashboard-cropped.png";
import financeForecasting from "../../assets/projects/finance-app/forecasting-cropped.png";
import financeReports from "../../assets/projects/finance-app/reports-cropped.png";
import chatbotResponse from "../../assets/projects/unity-chatbot/chat-response.png";
import astroWelcome from "../../assets/projects/astrorush/welcome.jpg";
import astroAbout from "../../assets/projects/astrorush/about.jpg";
import productCover from "../../assets/projects/covers/product-order-management.png";
import financeCover from "../../assets/projects/covers/finance-app.png";
import chatbotCover from "../../assets/projects/covers/unity-chatbot.png";
import astroCover from "../../assets/projects/covers/astrorush.png";
import compilerCover from "../../assets/projects/covers/two-pass-compiler-dark.png";
import compilerOriginal from "../../assets/projects/two-pass-compiler/original-clean.png";

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
    description: "A management application for custom-sized customer orders, customer records, and order-history tracking.",
    tags: ["JavaScript", "Web", "Order Management"],
    github: "https://github.com/gksngkmn/ProductOrderManagement",
    image: productCover,
    gallery: [productLogin, productManager, productCustomers],
    color: "#7cffd4",
  }),
  new PortfolioProject({
    id: 2,
    category: "management",
    title: "Finance App",
    description: "A Flutter application for account-based income and expense tracking with historical and forward-looking analysis.",
    tags: ["Flutter", "Dart", "Mobile", "Finance"],
    github: "https://github.com/gksngkmn/FinanceApp",
    image: financeCover,
    gallery: [financeDashboard, financeForecasting, financeReports],
    color: "#b57bff",
  }),
  new PortfolioProject({
    id: 3,
    category: "ai",
    title: "Unity ChatBot",
    description: "A voice-enabled chatbot prototype developed with Unity.",
    tags: ["Unity", "C#", "Ready Player Me", "Lip Sync"],
    github: "https://github.com/gksngkmn/UnityChatBot",
    image: chatbotCover,
    gallery: [chatbotResponse],
    color: "#7cb8ff",
  }),
  new PortfolioProject({
    id: 4,
    category: "ai",
    title: "AstroRush",
    description: "A space game where the player steers a rocket to avoid falling meteors.",
    tags: ["Python"],
    github: "https://github.com/gksngkmn/astrorush",
    image: astroCover,
    gallery: [astroWelcome, astroAbout],
    color: "#ff9f7c",
  }),
  new PortfolioProject({
    id: 5,
    category: "systems",
    title: "Simple Two-Pass Compiler",
    description: "A Python-based two-pass compiler with lexical analysis, symbol-table construction, parsing, and semantic analysis.",
    tags: ["Python", "CustomTkinter", "Compiler", "AST"],
    github: "https://github.com/gksngkmn/TwoPassCompiler",
    image: compilerCover,
    gallery: [compilerOriginal],
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
