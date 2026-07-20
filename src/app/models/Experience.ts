export interface ExperienceData {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  companyUrl: string;
  responsibilities: string[];
  technologies: string[];
}

export class Experience {
  readonly company: string;
  readonly role: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly companyUrl: string;
  readonly responsibilities: readonly string[];
  readonly technologies: readonly string[];

  constructor(data: ExperienceData) {
    this.company = data.company;
    this.role = data.role;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.companyUrl = data.companyUrl;
    this.responsibilities = Object.freeze([...data.responsibilities]);
    this.technologies = Object.freeze([...data.technologies]);
  }

  get dateRange(): string {
    return `${this.startDate} — ${this.endDate}`;
  }
}
