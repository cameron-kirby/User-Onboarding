import * as yup from 'yup'

const formSchema = yup.object().shape({
  username: yup.string()
    .trim()
    .min(3, 'The username must be at least three characters long')
    .required('The username is a required field'),
  email: yup.string()
    .email('The email must be a valid email address')
    .required('The email is a required field'),
  password: yup.string()
    .min(6, 'The password must be at least 6 characters long')
    .required('The password is a required field'),
  tos: yup.string().required('You must accept our terms of service'),
})

export default formSchema
