export class MainEducation {
  readonly mainYear: Date;
  readonly mainInst: string;
  readonly mainSpecialty: string;

  constructor(mainYear: Date, mainInst: string, mainSpecialty: string) {
    this.mainYear = mainYear;
    this.mainInst = mainInst;
    this.mainSpecialty = mainSpecialty;
  }
}
