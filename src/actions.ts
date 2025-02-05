"use server";

import nodemailer from "nodemailer";
import { EmailHtmlTemplate } from "@/template/template";

export async function sendBookVisitData(formData: FormData): Promise<{
  message: string;
}> {
  const { SMTP_PASSWORD, SMTP_EMAIL, RECEIVER_EMAIL } = process.env;
  const name = formData.get("name");
  const email = formData.get("email");
  const phone_number = formData.get("phone_number");
  const work_area = formData.get("work_area");

  const missingFields = [];

  if (!name) missingFields.push("name");
  if (!email) missingFields.push("email");
  if (!phone_number) missingFields.push("phone_number");
  if (!work_area) missingFields.push("work_area");

  if (missingFields.length > 0) {
    throw new Error(`Missing required field(s): ${missingFields.join(", ")}`);
  }

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    await transport.sendMail({
      from: SMTP_EMAIL,
      to: RECEIVER_EMAIL,
      subject: "New booking request",
      html: EmailHtmlTemplate(name, email, phone_number, work_area),
    });
    return {
      message: "Submitted successfully.",
    };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to send, please try again.");
  }
}
