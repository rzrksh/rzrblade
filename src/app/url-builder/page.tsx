import type { Metadata } from "next";
import URLComposser from "@/features/url-builder";

export const metadata: Metadata = {
  title: "URL Builder | rzrblade",
};

const URLComposserPage = () => {
  return <URLComposser />;
};

export default URLComposserPage;
