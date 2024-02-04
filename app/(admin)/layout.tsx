export const metadata = {
  title: 'CMS | Zomar',
  description: 'Zomar CMS',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
