'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitContactForm } from '@/app/actions/contact'
import { useToast } from '@/hooks/use-toast'
import { useEffect } from 'react'

// Submit Button Component with loading state
function SubmitButton() {
  const { pending } = useFormStatus()
  
  return (
    <button
      type="submit"
      disabled={pending}
      className="px-6 py-3 text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors disabled:opacity-70"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  )
}

export default function ContactForm() {
  const { toast } = useToast()
  const [formState, setFormState] = useState({ success: false, message: '' })
  
  async function handleFormSubmit(formData: FormData) {
    try {
      const result = await submitContactForm(formState, formData)
      setFormState(result)
      
      toast({
        title: result.success ? "Success!" : "Error",
        description: result.message,
        variant: result.success ? "default" : "destructive",
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setFormState({
        success: false,
        message: 'An unexpected error occurred. Please try again.'
      })
      
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    }
  }
  
  if (formState.success) {
    return (
      <div className="p-4 mb-6 bg-green-50 border border-green-200 rounded-md">
        <p className="text-green-800 font-medium">{formState.message}</p>
      </div>
    )
  }
  
  return (
    <form action={handleFormSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full p-3 border rounded-md"
            placeholder="Your name"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full p-3 border rounded-md"
            placeholder="Your email"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="w-full p-3 border rounded-md"
          placeholder="Subject"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full p-3 border rounded-md min-h-[150px]"
          placeholder="Your message"
          required
        />
      </div>
      
      <SubmitButton />
      
      {formState.message && !formState.success && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-700">
          {formState.message}
        </div>
      )}
    </form>
  )
}
