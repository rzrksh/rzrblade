export const metadata = {
  title: "URL Builder | rzrblade",
  description: "Build and do whatever things you need for URL.",
};

export default function UrlBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
