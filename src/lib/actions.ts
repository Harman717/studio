
"use server";

import { z } from "zod";
import type { ContactFormState } from "@/types"; // Import the type
import { contactFormSchema } from "@/types"; // Import the schema

// contactFormSchema is now defined in src/types/index.ts
// ContactFormState is now defined in src/types/index.ts

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const validatedFields = contactFormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check your input.",
      success: false,
    };
  }

  // Simulate sending an email or saving to a database
  console.log("Contact form data submitted:", validatedFields.data);
  // In a real application, you would integrate with an email service (e.g., Resend, SendGrid)
  // or save the data to a database here.

  // For demonstration purposes, we'll just return a success message.
  // await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay


  return {
    message: "Thank you! Your message has been sent successfully.",
    success: true,
    errors: {},
  };
}
