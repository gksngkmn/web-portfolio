import type { ProjectFilterId } from "../models/ProjectCategory";
import type { PortfolioProject } from "../models/PortfolioProject";

export class PortfolioCatalog {
  readonly projects: readonly PortfolioProject[];

  constructor(projects: readonly PortfolioProject[]) {
    this.projects = Object.freeze([...projects]);
  }

  filterByCategory(category: ProjectFilterId): readonly PortfolioProject[] {
    if (category === "all") return this.projects;
    return this.projects.filter((project) => project.category === category);
  }
}
