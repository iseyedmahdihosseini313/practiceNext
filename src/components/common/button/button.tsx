import { memo } from 'react';
import IButton from './button.types';
const Button = ({ type, children, value, classname, isloading }: IButton) => {
     return (
          <button
               disabled={isloading}
               type={type}
               value={value}
               className={`${classname} cursor-pointer tracking-widest bg-slate-300/5 text-[1rem] rounded-md hover:scale-95 transition-all duration-500  px-5 py-2.5 text-center`}
          >
               {children
                    ? isloading
                         ? 'loading...'
                         : children
                    : value
                    ? isloading
                         ? 'loading...'
                         : value
                    : null}
          </button>
     );
};

export default memo(Button)
