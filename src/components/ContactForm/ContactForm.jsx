import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import style from './ContactForm.module.css';

import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ']+\s[A-Za-zА-Яа-яЁёЇїІіЄєҐґ']+$/,
      'Enter first and last name separated'
    )
    .required('Required'),
  number: Yup.string()
    .min(7, 'Incorrect form of phone number')
    .max(50, 'Incorrect form of phone number')
    .required('Required'),
});

function ContactForm() {
  const dispatch = useDispatch();

  const nameField = useId();
  const numberField = useId();

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
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
      >
        <Form className={style.form}>
          <label className={style.label} htmlFor={nameField}>
            Name
          </label>
          <Field
            className={style.input}
            id={nameField}
            type="text"
            name="name"
            placeholder="Lolita Onoiko..."
          />
          <ErrorMessage className={style.error} name="name" component="span" />

          <label className={style.label} htmlFor={numberField}>
            Number
          </label>
          <Field
            className={style.input}
            id={numberField}
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
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
