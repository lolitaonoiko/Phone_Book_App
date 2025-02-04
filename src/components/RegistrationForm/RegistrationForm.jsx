import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';
import { Link, useNavigate } from 'react-router-dom';

import style from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const ValidationSchema = Yup.object().shape({
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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate('/'));
    actions.resetForm();
  };
  // sasha@spivak.ua
  return (
    <div className={style.formBox}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
      >
        <Form className={style.form}>
          <p className={style.welcome}>Join us now!</p>
          <label>
            <span>Full Name</span>
            <Field name="name" type="text" />
            <ErrorMessage className={style.error} name="name" component="div" />
          </label>
          <label>
            <span>Email</span>
            <Field name="email" type="email" />
            <ErrorMessage
              className={style.error}
              name="email"
              component="div"
            />
          </label>
          <label>
            <span>Password</span>
            <Field name="password" type="password" />
            <ErrorMessage
              className={style.error}
              name="password"
              component="div"
            />
          </label>

          <button className={style.btn} type="submit">
            Sign Up
          </button>
          <p className={style.text}>
            If you already have an account,
            <Link className={style.link} to="/login">
              log in!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
