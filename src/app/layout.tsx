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
               <body className={vazir.className}>
                    <div
                         className={
                              'w-screen h-screen overflow-hidden bg-gradient-to-t from-blue-900 to-black/90 flex justify-center items-center text-white/80 tracking-wide  '
                         }
                    >
                         <div className="flex min-w-[100%] min-h-[100%]   lg:w-72 bg-gradient-to-tr from-bg-cyan-50/15  rounded-sm  shadow-inner shadow-slate-400 ">
                              {' '}
                              {children}
                         </div>
                    </div>
               </body>
          </html>
     );
}
