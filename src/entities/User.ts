import { Entity } from "./Entity";

export class User extends Entity {
  public userName!: string;
  public password!: string;

  constructor(instance?: Partial<User>) {
    super(instance);
    Object.assign(this, instance);
  }
}
