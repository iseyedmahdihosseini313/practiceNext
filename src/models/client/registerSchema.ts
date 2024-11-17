import * as yup from 'yup';
export const registerSchema = yup.object().shape({
     fullname: yup.string().required('required value').max(20).min(3).trim(),
     username: yup.string().required('required value').max(20).min(3).trim(),
     email: yup
          .string()
          .required('required value')
          .trim()
          .email("email is not valid"),
     phonenumber: yup.string().required('required value').max(11).min(11),
     password: yup
          .string()
          .required('required value')
          .max(24)
          .min(8)
          .trim()
          .matches(
               /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
               "password must contain at least one lowercase letter, one uppercase letter, and one digit"
          ),
     confirmPassword: yup
          .string()
          .required('required value')
          .oneOf([yup.ref('password')], "password must match")
          .trim(),
});
