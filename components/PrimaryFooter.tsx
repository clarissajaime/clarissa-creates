import Link from "next/link";
import React from "react";
import AnimatedUnderline from "./animated-underline";
import SignupForm from "./SignupForm";

const PrimaryFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Subscribe to{" "}
                <AnimatedUnderline color="#8b5cf6">
                  My Newsletter
                </AnimatedUnderline>
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Get fresh insights, tips, and inspiration on creative coding and
                AI—delivered straight to your inbox.
              </p>
            </div>
            <SignupForm />
          </div>
        </div>
      </section>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {currentYear} Created by Clarissa Jaime. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrimaryFooter;
