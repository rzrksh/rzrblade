import type { Metadata } from "next";
import JSONBuilder from "@/features/json-builder";

export const metadata: Metadata = {
  title: "JSON Builder | rzrblade",
};

const JSONBuilderPage = () => {
  return <JSONBuilder />;
};

export default JSONBuilderPage;
