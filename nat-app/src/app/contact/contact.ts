export class Contact {
  readonly city: string;
  readonly phone: number;
  readonly mail: string;
  readonly telegram: string;
  readonly linkTelegramm: string;

  constructor(city: string, phone: number, mail: string, telegram: string, linkTelegramm: string) {
    this.city = city;
    this.phone = phone;
    this.mail = mail;
    this.telegram = telegram;
    this.linkTelegramm = linkTelegramm;
  }
}
