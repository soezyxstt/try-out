import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prosman | Latihan Soal',
  description: 'Page by Adi Haditya Nursyam',
}

export default function ProsmanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='py-8 min-h-screen bg-cyan-100 md:bg-gradient-to-b from-cyan-200 to-blue-100 [background-size:_100vw_100vh] bg-no-repeat bg-fixed'>
      {children}
    </main>
  );
}