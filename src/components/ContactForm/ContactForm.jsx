import { nanoid } from "nanoid";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

import style from "./ContactForm.module.css";

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short name")
    .max(50, "Too long Name")
    .required("Required"),
  number: Yup.string()
    .min(3, "Incorrect form of phone number")
    .max(50, "Incorrect form of phone number")
    .required("Required"),
});

function ContactForm({ onAdd }) {
  const nameField = useId();
  const numberField = useId();

  const handleSubmit = (values, actions) => {
    const trimmedValues = {
      name: values.name.trim(),
      number: values.number.trim(),
    };

    onAdd({
      id: nanoid(),
      name: trimmedValues.name,
      number: trimmedValues.number,
    });

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
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
        <ErrorMessage className={style.error} name="number" component="span" />

        <button className={style.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
