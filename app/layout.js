import Layout from '../components/Layout'
import './globals.css'

export const metadata = {
  title: 'Meu Portfolio- Levi Vitor',
  description: 'projeto cadeira frontEnd',
}
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}