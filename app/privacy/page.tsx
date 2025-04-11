import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Clarissa Creates",
  description: "Privacy policy for Clarissa Creates",
};

export default function Privacy() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto prose">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>Introduction</h2>
        <p>
          This Privacy Policy describes how Clarissa Creates ("we", "our", or "us") collects, uses, and shares your personal information when you visit or interact with our website.
        </p>
        
        <h2>Information We Collect</h2>
        <p>
          When you visit our website, we may collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
        </p>
        <p>
          Additionally, when you subscribe to our newsletter or contact us through our contact form, we collect the personal information you provide, such as your name and email address.
        </p>
        
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Send you our newsletter if you've subscribed</li>
          <li>Respond to your inquiries and comments</li>
          <li>Improve our website and content</li>
          <li>Analyze website usage to enhance user experience</li>
        </ul>
        
        <h2>Sharing Your Information</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this Privacy Policy.
        </p>
        
        <h2>Third-Party Services</h2>
        <p>
          We may use third-party services such as newsletter providers and analytics tools that collect, monitor, and analyze this information. These third parties have their own privacy policies addressing how they use such information.
        </p>
        
        <h2>Cookies</h2>
        <p>
          We use cookies to help us understand how you interact with our website, to improve your experience, and for analytics purposes.
        </p>
        
        <h2>Your Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your personal data.
        </p>
        
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
        </p>
        
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us through our <Link href="/contact" className="text-purple-600 hover:text-purple-800">contact page</Link>.
        </p>
        
        <p className="text-sm text-muted-foreground mt-12">
          © {currentYear} Created by Clarissa Jaime. All rights reserved.
        </p>
      </div>
    </div>
  );
}
