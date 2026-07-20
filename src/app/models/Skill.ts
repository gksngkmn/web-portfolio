export type ProficiencyLevel = "proficient" | "working-knowledge" | "exploring";

export class Skill {
  readonly name: string;
  readonly level: ProficiencyLevel;

  constructor(name: string, level: ProficiencyLevel) {
    this.name = name;
    this.level = level;
  }
}
