import { Entity } from "./Entity";

export class Activity extends Entity {
  public title!: string;
  public dueDate!: string;
  public completed!: boolean;
  constructor(instance?: Partial<Activity>) {
    super(instance);
    Object.assign(this, instance);
  }
}
