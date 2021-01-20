import { Time } from "./Time.model";
export class Project {
  id: string = "";
  name: string = "";
  description: string = "";
  projectHours: Time[] = [];

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

  addProjectHour(time: Time): void {
    time.id = this.generateIdTime();
    this.projectHours.push(time);
  }

  getHours(): Time[] {
    return this.projectHours;
  }

  updateHours(time: Time) {
    const idx = this.projectHours.findIndex((item) => item.id === time.id);
    const times = this.projectHours;
    times[idx] = time;

    this.projectHours = [...times];
  }

  removeHourById(id: string) {
    const remainingHours = this.projectHours.filter((time) => time.id !== id);
    this.projectHours = remainingHours;
  }

  generateId() {
    this.id = Math.random().toString(36);
  }

  generateIdTime() {
    return Math.random().toString(36);
  }

  calculateTotalHours(): number {
    return this.projectHours.reduce(
      (totalHours, item) => (totalHours += item.hour),
      0
    );
  }
}
