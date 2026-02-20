import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "rzrblade - Dev Super Toolbox",
  description: "Your one stop developer toolbox",
  icons: {
    icon: [
      { url: "/rzrblade-emblem-dark.png", sizes: "32x32", type: "image/png" },
      { url: "/rzrblade-emblem-dark.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/rzrblade-emblem-dark.png",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/rzrblade-emblem-dark.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
