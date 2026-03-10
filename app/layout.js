export const metadata = {
  title: 'Grand Citadel Palace',
  description: 'Official Registry',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: '#000' }}>{children}</body>
    </html>
  )
}