import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { loginThunk } from '../../redux/auth/operations';

import style from './LoginForm.module.css';

import * as Yup from 'yup';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const ValidationSchema = Yup.object().shape({
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
    dispatch(loginThunk(values));
    // .unwrap()
    // .then(() => navigate('/'));
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
