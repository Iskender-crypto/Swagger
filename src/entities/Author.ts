import { Entity } from "./Entity";

export class Author extends Entity {
  public idBook!: string;
  public firstName!: string;
  public lastName!: string;
  constructor(instance?: Partial<Author>) {
    super(instance);
    Object.assign(this, instance);
  }
}
