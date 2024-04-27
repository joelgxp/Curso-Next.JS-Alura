import { Prompt } from 'next/font/google'

import { Aside } from '@/components/Aside';
import './globals.css'

const prompt = Prompt({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Curso Next.JS",
  description: "Curso",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.classNameß}>
      <body>
        <div className='app-container'>
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
