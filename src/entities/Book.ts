import { Entity } from "./Entity";

export class Book extends Entity {
  public title!: string;
  public description!: string;
  public pageCount!: number;
  public excerpt!: string;
  public publishDate!: string;
  constructor(instance?: Partial<Book>) {
    super(instance);
    Object.assign(this, instance);
  }
}
