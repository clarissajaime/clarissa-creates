import React from "react";
import clsx from "clsx";
import { humanizedDate } from "@/helpers/date-helpers";

import styles from "./BlogHero.module.css";

function BlogHero({ title, publishedOn, className, ...delegated }) {
  return (
    <header className="border-b pb-4 mb-6">
      <div className={styles.content}>
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
        <p className="text-gray-600 mt-2">
          Published on{" "}
          <time dateTime={publishedOn}>{humanizedDate(publishedOn)}</time>
        </p>
      </div>
    </header>
  );
}
export default BlogHero;