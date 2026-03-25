import './globals.css';

export const metadata = {
  title: 'Grand Citadel Palace',
  description: 'GCS Gateway',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
