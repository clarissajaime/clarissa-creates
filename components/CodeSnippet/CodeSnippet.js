import React from 'react';
import { Code } from "bright";
import theme from "./theme";

function CodeSnippet(props) {
  return (
    <div className="wrapper border border-[var(--color-card-border)] rounded-none md:rounded-lg mx-[-var(--viewport-padding)] mb-16">
      <pre className="p-[var(--viewport-padding)]">
        <code className="font-mono">
          <div className="text-lg p-0">
            <Code {...props} theme={theme} />
          </div>
        </code>
      </pre>
    </div>
  );
}

export default CodeSnippet;


