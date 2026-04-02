import "./globals.css";
import React from "react";

export const metadata = {
  title: "Grand Citadel Palace",
  description: "The Sovereign Seat of the House of Dorvilus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="/zoe.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
