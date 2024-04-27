import { Aside } from '@/components/Aside';
import './globals.css'

export const metadata = {
  title: "Curso Next.JS",
  description: "Curso",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Aside />
        {children}
        </body>
    </html>
  );
}
