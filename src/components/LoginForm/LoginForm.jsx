import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';

import style from './LoginForm.module.css';
import { useId } from 'react';

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too short password')
    .max(50, 'Too long password')
    .required('Required'),
});
const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    const trimmedValues = {
      email: values.email.trim(),
      password: values.password.trim(),
    };

    dispatch(
      loginThunk({
        email: trimmedValues.email,
        password: trimmedValues.password,
      })
    );

    actions.resetForm();
  };

  // onoiko@lolita.ua
  return (
    <div className={style.formBox}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
      >
        <Form className={style.form}>
          <p className={style.welcome}>Welcome back!</p>

          <label htmlFor={emailId}>
            <span>Email</span>
            <Field
              name="email"
              type="email"
              id={emailId}
              className={style.inpt}
            />
            <ErrorMessage
              className={style.error}
              name="email"
              component="div"
            />
          </label>
          <label htmlFor={passwordId}>
            <span>Password</span>
            <Field
              name="password"
              type="password"
              id={passwordId}
              className={style.inpt}
            />
            <ErrorMessage
              className={style.error}
              name="password"
              component="div"
            />
          </label>
          <button className={style.btn} type="submit">
            Log in
          </button>
          <p className={style.text}>
            Not with us yet?
            <Link className={style.link} to="/register">
              Join
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
