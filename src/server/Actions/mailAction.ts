"use server";
import "server-only";

import nodemailer from "nodemailer";
import winston from "winston";

import env from "@/env";

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

if (env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

export async function sendMail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}): Promise<void> {
  const transporter = nodemailer.createTransport({
    service: process.env.MAIL_HOST,
    auth: { user: env.MAIL_USERNAME, pass: env.MAIL_PASSWORD },
  });

  const mailOptions = {
    from: env.MAIL_FROM,
    to,
    subject,
    html,
  };

  logger.info(`Sending mail to - ${to}`);

  try {
    const info = await transporter.sendMail(mailOptions);
    logger.info(`Email sent: ${info.response}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error(`Error sending email: ${error.message}`);
    } else {
      logger.error("An unknown error occurred while sending the email.");
    }
  }
}
