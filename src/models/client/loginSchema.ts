import * as yup from 'yup';
export const loginSchema = yup.object().shape({
     username: yup.string().required('required username').max(20).min(3).trim(),

     password: yup.string().required('required password').max(24),
});
