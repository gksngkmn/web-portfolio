import type { ProficiencyLevel, Skill } from "./Skill";

export class SkillGroup {
  readonly level: ProficiencyLevel;
  readonly label: string;
  readonly description: string;
  readonly skills: readonly Skill[];

  constructor(level: ProficiencyLevel, label: string, description: string, skills: readonly Skill[]) {
    if (skills.some((skill) => skill.level !== level)) {
      throw new Error(`Every skill in ${label} must use the ${level} level.`);
    }

    this.level = level;
    this.label = label;
    this.description = description;
    this.skills = Object.freeze([...skills]);
  }
}
