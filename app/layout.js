import "./globals.css";

export const metadata = {
  title: "Grand Citadel Palace",
  description: "The Sovereign Seat of the House of Dorvilus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="/zoe.js" defer></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
