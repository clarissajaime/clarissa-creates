'use client';

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function SignupForm() {
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Script
        src="https://f.convertkit.com/ckjs/ck.5.js"
        strategy="lazyOnload"
      />

      <div className="w-full max-w-md">
        <form
          action="https://app.kit.com/forms/7909209/subscriptions"
          className="seva-form formkit-form"
          method="post"
          data-sv-form="7909209"
          data-uid="df65f9132e"
          data-format="inline"
          data-version="5"
        >
          <div data-style="clean">
            <ul
              className="formkit-alert formkit-alert-error"
              data-element="errors"
              data-group="alert"
            ></ul>
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
              >
                <div className="formkit-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span>Subscribe</span>
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
