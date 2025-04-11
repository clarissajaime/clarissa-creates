'use client';

import { useRef, useState } from "react";
import Script from "next/script";

export default function SignupForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setStatus("loading");

    try {
      const formData = new FormData(formRef.current);

      const response = await fetch(
        "https://app.kit.com/forms/7909209/subscriptions",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thanks for subscribing!");
        formRef.current.reset();
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Script
        src="https://f.convertkit.com/ckjs/ck.5.js"
        strategy="lazyOnload"
      />

      <div className="w-full max-w-md">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="seva-form formkit-form"
          data-sv-form="7909209"
          data-uid="df65f9132e"
          data-format="inline"
          data-version="5"
        >
          <div data-style="clean">
            {status === "error" && (
              <ul
                className="formkit-alert formkit-alert-error"
                data-element="errors"
                data-group="alert"
              >
                <li>{message}</li>
              </ul>
            )}
            {status === "success" && (
              <div className="formkit-alert formkit-alert-success p-2 mb-4 bg-green-100 text-green-800 rounded">
                {message}
              </div>
            )}
            <div
              data-element="fields"
              data-stacked="false"
              className="seva-fields formkit-fields flex space-x-2"
            >
              <div className="formkit-field flex-grow">
                <input
                  className="formkit-input w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  name="email_address"
                  aria-label="Email Address"
                  placeholder="Email Address"
                  required
                  type="email"
                />
              </div>
              <button
                data-element="submit"
                className="formkit-submit bg-violet-600 hover:bg-violet-700 text-white rounded-md px-4 py-2"
                type="submit"
                disabled={status === "loading"}
              >
                <div
                  className="formkit-spinner"
                  style={{ display: status === "loading" ? "block" : "none" }}
                >
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span>
                  {status === "loading" ? "Submitting..." : "Subscribe"}
                </span>
              </button>
            </div>
            <div className="formkit-powered-by-convertkit-container text-xs text-muted-foreground mt-2">
              <a
                href="https://kit.com/features/forms"
                data-element="powered-by"
                className="formkit-powered-by-convertkit"
                data-variant="dark"
                target="_blank"
                rel="nofollow"
              >
                Built with Kit
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
