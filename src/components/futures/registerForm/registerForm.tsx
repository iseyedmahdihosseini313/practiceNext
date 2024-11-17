'use client';
import { Button,Form, InputBox } from '@/components';
import { registerSchema } from '@/models/client/registerSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm({ resolver: yupResolver(registerSchema) });
     const inputinfo = [
          {
               name: 'fullname',
               type: 'text',
               error: errors.fullname?.message,
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
                              strokeWidth="1"
                              d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                         />
                    </svg>
               ),
               label: 'Fullname',
               placeholder: 'Enter Your FullName',
          },
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
               name: 'email',
               type: 'eamil',
               error: errors.email?.message,
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
                              strokeWidth="1"
                              d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                         />
                    </svg>
               ),
               label: 'Email',
               placeholder: 'Enter Your Email',
          },
          {
               name: 'phonenumber',
               type: 'text',
               error: errors.phonenumber?.message,
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
                              d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                         />
                    </svg>
               ),
               label: 'PhoneNumber',
               placeholder: 'Enter Your PhoneNumber',
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
          {
               name: 'confirmPassword',
               type: 'password',
               error: errors.confirmPassword?.message,
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
               label: 'Confirm Password',
               placeholder: ' Please Confirm Password',
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

export default RegisterForm;
