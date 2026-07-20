import type { ContactMessage } from "../models/ContactMessage";

export class ContactService {
  constructor(private readonly recipient: string) {}

  async send(message: ContactMessage): Promise<void> {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(this.recipient)}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: message.name,
        email: message.email,
        message: message.message,
        _subject: `Portfolio message from ${message.name}`,
        _template: "table",
        _honey: "",
      }),
    });

    if (!response.ok) {
      throw new Error("Your message could not be sent. Please try again.");
    }

    const result = (await response.json()) as { success?: boolean | string };
    if (result.success === false || result.success === "false") {
      throw new Error("Your message could not be sent. Please try again.");
    }
  }
}
