import CodeSnippet from '@/components/CodeSnippet';
import DivisionGroupsDemo from '@/components/DivisionGroupsDemo';
import CircularColorsDemo from '@/components/CircularColorsDemo';

const COMPONENT_MAP = {
  pre: CodeSnippet,
  DivisionGroupsDemo,
  CircularColorsDemo,
  h2: ({ children }) => {
    const id =
      typeof children === "string"
        ? children
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-")
        : "";
    return (
      <h2 id={id} className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {children}
      </h2>
    );
  },
  h3: ({ children }) => {
    const id =
      typeof children === "string"
        ? children
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-")
        : "";
    return (
      <h3 id={id} className="scroll-m-20 text-xl font-semibold tracking-tight">
        {children}
      </h3>
    );
  },
};
export default COMPONENT_MAP;