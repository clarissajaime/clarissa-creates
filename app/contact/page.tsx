import ContactForm from '@/components/contact-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Me | Clarissa Creates',
  description: 'Get in touch with Clarissa Jaime for collaborations, questions, or just to say hello.',
}

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
          Contact Me
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <ContactForm />
        <p className="text-muted-foreground mt-8">
          Feel free to reach out on 
          <a 
            href="https://linkedin.com/in/clarissajaime" 
            className="text-purple-600 hover:text-purple-800 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>.
        </p>
      </div>
    </div>
  )
}
