export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <nav style={{ marginBottom: 20 }}>
          <a href="/">Accueil</a> | <a href="/armours">Armures</a> | <a href="/augmentations">Augmentations</a> | <a href="/skills">Talents</a>
        </nav>
        {children}
      </body>
    </html>
  )
}
