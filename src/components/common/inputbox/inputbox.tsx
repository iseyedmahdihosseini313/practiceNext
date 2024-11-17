'use client';
import './inputBox.css';
import { useState } from 'react';
import IInputBox from './inputbox.types';

const InputBox = ({
     name,
     type,
     error,
     icon,
     label,
     register,
     placeholder,
}: IInputBox) => {
     const [showPass, setShowPass] = useState(false);

     return (
          <div className="w-full h-16  flex flex-col p-3">
               <div className="flex gap-1 p-1 ring-1 rounded-md  relative">
                    {icon && icon}
                    <input
                     autoComplete="off"
         
                         readOnly
                         onFocus={(e) => e.target.removeAttribute('readonly')}
                         placeholder={placeholder}
                         type={
                              type === 'password'
                                   ? showPass
                                        ? 'text'
                                        : 'password'
                                   : type
                         }
                         id={name}
                         {...register(name)}
                         className="focus:bg-transparent appearance-none caret-transparent placeholder:focus:text-blue-400/25 placeholder:text-sm text-center text-sm tracking-widest placeholder:tracking-wide mr-3 outline-none bg-transparent w-full p-2 font-extralight placeholder:font-normal  placeholder:text-gray-400 focus:scale-90 transition-all duration-1000 text-blue-200"
                    />

                    {type === 'password' &&
                         (showPass ? (
                              <svg
                                   onClick={() => setShowPass(!showPass)}
                                   className="w-8 h-9 text-cyan-50  "
                                   aria-hidden="true"
                                   xmlns="http://www.w3.org/2000/svg"
                                   fill="none"
                                   viewBox="0 0 24 24"
                              >
                                   <path
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                   />
                                   <path
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                   />
                              </svg>
                         ) : (
                              <svg
                                   onClick={() => setShowPass(!showPass)}
                                   className="w-8 h-9 text-cyan-50  "
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
                                        d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                   />
                              </svg>
                         ))}
                    <label
                         className="absolute -top-3 left-5 text-white text-[0.6rem] px-1 bg-cyan-800  rounded-lg shadow-md shadow-blue-800 border-2 border-blue-100/5"
                         htmlFor={name}
                    >
                         {label}
                    </label>
               </div>

          {error && <span className="text-red-500/80 text-[0.7rem] text-end p-1  h-5 ">{error.substring(0, 20)}{error.length > 15 ? '...' : ''}</span>}
          </div>     );
};
export default InputBox;
