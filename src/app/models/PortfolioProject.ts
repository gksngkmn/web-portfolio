export type ProjectCategoryId =
  | "web"
  | "robotics"
  | "security"
  | "management"
  | "systems"
  | "ai";

export interface PortfolioProjectData {
  id: number;
  category: ProjectCategoryId;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string | null;
  image: string;
  color: string;
}

export class PortfolioProject {
  readonly id: number;
  readonly category: ProjectCategoryId;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly github: string;
  readonly live: string | null;
  readonly image: string;
  readonly color: string;

  constructor(data: PortfolioProjectData) {
    this.id = data.id;
    this.category = data.category;
    this.title = data.title;
    this.description = data.description;
    this.tags = Object.freeze([...data.tags]);
    this.github = data.github;
    this.live = data.live ?? null;
    this.image = data.image;
    this.color = data.color;
  }

  get hasLiveDemo(): boolean {
    return Boolean(this.live);
  }
}
