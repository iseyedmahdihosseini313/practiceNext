import './globals.css';
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({
     weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
     subsets: ['arabic'],
});
export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang="fa" dir="rtl">
               <body className={vazir.className}>{children}</body>
          </html>
     );
}
