export class AddEducation {
  readonly addYear: Date;
  readonly addInst: string;
  readonly addSpecialty: string;

  constructor(addYear: Date, addInst: string, addSpecialty: string) {
    this.addYear = addYear;
    this.addInst = addInst;
    this.addSpecialty = addSpecialty;
  }
}
