import * as Yup from 'yup';

export const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ']+\s[A-Za-zА-Яа-яЁёЇїІіЄєҐґ']+$/,
      'Enter first and last name separated'
    )
    .required('Required'),
  email: Yup.string()
    .matches(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too short password')
    .max(50, 'Too long password')
    .required('Required'),
});
