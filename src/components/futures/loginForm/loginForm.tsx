'use client';
import { Button,Form, InputBox } from '@/components';
import { loginSchema } from '@/models/client/loginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm({ resolver: yupResolver(loginSchema) });
     const inputinfo = [
         
          {
               name: 'username',
               type: 'text',
               error: errors.username?.message,
               icon: (
                    <svg
                         className="w-8 h-9 text-gray-100  bg-slate-500/10 rounded-3xl"
                         aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                    >
                         <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                              d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                         />
                    </svg>
               ),
               label: 'UserName',
               placeholder: 'Enter Your UserName',
          },
          {
               name: 'password',
               type: 'password',
               error: errors.password?.message,
               icon: (
                    <svg
                         className="w-8 h-9 text-gray-100  bg-slate-500/10 rounded-3xl"
                         aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                    >
                         <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                              d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
                         />
                    </svg>
               ),
               label: 'Password',
               placeholder: 'Enter Your Password',
          },
         
     ];

     return (
          <Form handleSubmit={handleSubmit}>
               {inputinfo.map((inp) => (
                    <InputBox
                         name={inp.name}
                         type={inp.type as 'text' | 'email' | 'password'}
                         error={inp.error}
                         icon={inp.icon}
                         key={inp.name}
                         label={inp.label}
                         placeholder={inp.placeholder}
                         register={register}
                    />
               ))}
               <div className="w-full flex justify-center items-center p-7">
                    
                    <Button value="Submit" type="submit" />
               </div>
          </Form>
     );
};

export default LoginForm;
