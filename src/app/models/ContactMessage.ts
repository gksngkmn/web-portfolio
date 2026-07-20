export interface ContactMessageData {
  name: string;
  email: string;
  message: string;
}

export class ContactMessage {
  readonly name: string;
  readonly email: string;
  readonly message: string;

  constructor(data: ContactMessageData) {
    this.name = data.name.trim();
    this.email = data.email.trim();
    this.message = data.message.trim();

    if (!this.name || !this.email || !this.message) {
      throw new Error("Please complete all fields.");
    }
  }
}
