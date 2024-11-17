import clsx from 'clsx';

export default function Home() {
     const miniprojects = [
          { title: 'ثبت نام', href: '/register' },
          { title: 'ورود', href: '/login' },
          { title: 'لیست کاربران', href: '/users' },
     ];
     return (
          <div
               className={
                    'w-screen h-screen overflow-hidden bg-gradient-to-t from-blue-950 to-black/90 flex justify-center items-center text-white/80 tracking-wide  '
               }
          >
               <div className="flex min-w-[100%] min-h-[100%]   lg:w-72 bg-gradient-to-tr from-bg-cyan-50/15  rounded-sm  shadow-inner shadow-slate-400 "></div>
          </div>
     );
}
