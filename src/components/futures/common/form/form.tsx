import { toast, Toaster } from 'sonner';
import IForm from './form.type';
const Form = ({children,handleSubmit}:IForm) => {
     return (
          <>
               <Toaster richColors position="top-right" expand={true} />
               <form
                    autoComplete="off"
                    autoSave="off"
                    spellCheck="false"
                    onSubmit={handleSubmit((data: any) => {
                         console.log(data);
                         toast.success('Successfully action');
                    })}
                    className="min-w-[80%] sm:min-w-[50%]  md:min-w-[27%]  p-4 gap-2 bg-blue-100/5 rounded-md ring-1 ring-cyan-200/5"
               >
                    {children}
               </form>
          </>
     );
};


export default Form;