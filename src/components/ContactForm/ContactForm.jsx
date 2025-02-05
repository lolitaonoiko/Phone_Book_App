import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

import style from './ContactForm.module.css';

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ']+\s[A-Za-zА-Яа-яЁёЇїІіЄєҐґ']+$/,
      'Enter first and last name separated'
    )
    .required('Required'),
  number: Yup.string()
    .matches(
      /^\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Invalid phone number format'
    )
    .min(7, 'Number is too short')
    .max(50, 'Number is too long')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

function ContactForm() {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    const trimmedValues = {
      name: values.name.trim(),
      number: values.number.trim(),
    };

    dispatch(
      addContact({
        name: trimmedValues.name,
        number: trimmedValues.number,
      })
    );

    actions.resetForm();
  };
  return (
    <div className={style.box}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
      >
        <Form className={style.form}>
          <label className={style.label} htmlFor={nameId}>
            Name
          </label>
          <Field
            className={style.input}
            id={nameId}
            type="text"
            name="name"
            placeholder="Lolita Onoiko..."
          />
          <ErrorMessage className={style.error} name="name" component="span" />

          <label className={style.label} htmlFor={numberId}>
            Number
          </label>
          <Field
            className={style.input}
            id={numberId}
            type="tel"
            name="number"
            placeholder="777-77-77..."
          />
          <ErrorMessage
            className={style.error}
            name="number"
            component="span"
          />

          <button className={style.button} type="submit">
            ADD CONTACT
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
