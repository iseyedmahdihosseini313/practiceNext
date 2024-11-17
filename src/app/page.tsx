import clsx from 'clsx';
import { ItemBox } from '@/components';

export default function Home() {
     const miniprojects = [
          { title: 'Register', href: '/register' },
          { title: 'LogIn', href: '/login' },
     ];
     return (
          <div className="flex gap-3 m-12">
               {miniprojects.map((p) => (
                    <ItemBox key={p.title} href={p.href} title={p.title} />
               ))}
          </div>
     );
}
