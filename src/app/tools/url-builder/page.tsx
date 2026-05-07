import type { Metadata } from "next";
import URLComposser from "@/features/url-builder";

export const metadata: Metadata = {
  title: "URL Builder | rzrblade",
};

const URLComposserPage = () => {
  return (
    <div className="py-[53px] max-w-[var(--max-page-width)] mx-auto">
      <URLComposser />
    </div>
  );
};

export default URLComposserPage;
