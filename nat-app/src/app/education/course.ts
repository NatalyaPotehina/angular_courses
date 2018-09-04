export class Course {
  readonly courseYear: Date;
  readonly courseInst: string;
  readonly courseSpecialty: string;

  constructor(courseYear: Date, courseInst: string, courseSpecialty: string){
    this.courseYear = courseYear;
    this.courseInst = courseInst;
    this.courseSpecialty = courseSpecialty;
  }
}
