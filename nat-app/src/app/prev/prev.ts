import construct = Reflect.construct;

export class Prev {
  readonly name: string;
  readonly course: string;

  constructor(name: string, course: string) {
    this.name = name;
    this.course = course;
  }
}
