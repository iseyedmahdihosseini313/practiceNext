import './globals.css';
import { Vazirmatn } from 'next/font/google';
const vazir = Vazirmatn({
     weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
     subsets: ['arabic'],
});
export default async function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {

     return (
          <html lang="en">
               <body className={vazir.className}>
                    <div
                         className={
                              'w-screen h-screen overflow-hidden bg-gradient-to-t from-blue-900 to-black/90 flex justify-center items-center text-white/80 tracking-wide  '
                         }
                    >
                         <div className="flex min-w-[100%] min-h-[100%]   shadow-inner shadow-slate-500 ">
                              {children}
                         </div>
                    </div>
               </body>
          </html>
     );
}
