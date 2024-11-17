import clsx from 'clsx';
import { ItemBox } from '@/components';

export default function Home() {
     const miniprojects = [
          { title: 'ثبت نام', href: '/register' },
          { title: 'ورود', href: '/login' },
          { title: 'لیست کاربران', href: '/users' },
     ];
     return (
          <div className="flex gap-3 m-12">
               {miniprojects.map((p) => (
                    <ItemBox key={p.title} href={p.href} title={p.title} />
               ))}
          </div>
     );
}
