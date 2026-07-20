import type { ReactNode } from "react";
import type { ProjectCategoryId } from "./PortfolioProject";

export type ProjectFilterId = "all" | ProjectCategoryId;

export class ProjectCategory {
  readonly id: ProjectFilterId;
  readonly label: string;
  readonly icon: ReactNode;

  constructor(id: ProjectFilterId, label: string, icon: ReactNode) {
    this.id = id;
    this.label = label;
    this.icon = icon;
  }
}
