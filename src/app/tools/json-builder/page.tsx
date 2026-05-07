import type { Metadata } from "next";
import JSONBuilder from "@/features/json-builder";

export const metadata: Metadata = {
  title: "JSON Builder | rzrblade",
};

const JSONBuilderPage = () => {
  return (
    <div className="pt-[52px] pb-[24px] max-w-[var(--max-page-width)] mx-auto">
      <JSONBuilder />
    </div>
  );
};

export default JSONBuilderPage;
