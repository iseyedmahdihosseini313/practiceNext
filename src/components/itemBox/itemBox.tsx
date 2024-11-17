import Link from 'next/link';
import IItemBox from './itemBox.type';

const ItemBox = ({ href, title, classname }: IItemBox) => {
     return (
          <Link href={href} className={`min-w-24 h-12 text-sm font-light  flex justify-center items-center rounded shadow-sm hover:text-blue-200  p-2 shadow-emerald-500 hover:rounded-lg transition-all duration-500 hover:bg-blue-950  hover:scale-95  ${classname}`}>
               {title}
          </Link>
     );
};

export default ItemBox;
