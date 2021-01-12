import { Time } from "./Time.model";

export class Project {
  name: string = "";
  description: string = "";
  projectHours: Time[] = [];

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

  addProjectHour(time: Time): void {
    this.projectHours.push(time);
  }

  calculateTotalHours(): number {
    return this.projectHours.reduce(
      (totalHours, item) => (totalHours += item.hour),
      0
    );
  }
}
