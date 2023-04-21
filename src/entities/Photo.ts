import { Entity } from "./Entity";

export class Photo extends Entity {
  public idBook!: string;
  public url!: string;
  constructor(instance?: Partial<Photo>) {
    super(instance);
    Object.assign(this, instance);
  }
}
