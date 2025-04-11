'use server'

import { z } from 'zod'

// Define a schema for form validation
const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
})

type FormResult = {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string[]>;
}

export async function submitContactForm(prevState: FormResult, formData: FormData): Promise<FormResult> {
  try {
    // Extract and validate form data
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    }
    
    // Validate the data
    const validatedData = ContactFormSchema.parse(data)
    
    // Send to Formspree
    const response = await fetch("https://formspree.io/f/xyzeoglk", {
      method: "POST",
      body: JSON.stringify(validatedData),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
    
    if (!response.ok) {
      throw new Error("Form submission failed")
    }
    
    return { 
      success: true, 
      message: "Thank you for your message! I'll get back to you soon." 
    }
  } catch (error) {
    console.error("Error submitting form:", error)
    
    if (error instanceof z.ZodError) {
      // Format Zod errors into a more usable structure
      const fieldErrors: Record<string, string[]> = {};
      
      error.errors.forEach((err) => {
        const path = err.path.join('.');
        if (!fieldErrors[path]) {
          fieldErrors[path] = [];
        }
        fieldErrors[path].push(err.message);
      });
      
      console.log("Validation errors:", fieldErrors);
      
      return { 
        success: false, 
        message: fieldErrors.message?.[0] || "Please check your form inputs",
        fieldErrors 
      }
    }
    
    return { 
      success: false, 
      message: "Sorry, there was a problem submitting your form. Please try again." 
    }
  }
}
