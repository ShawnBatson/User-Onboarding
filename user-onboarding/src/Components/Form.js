import React, { useState, useEffect } from "react";
import { Form, Field, withFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import Axios from "axios";

const NewUser = ({ errors, touched, values, status }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    status && setUser(person => [...person, status]);
  }, [status]);

  return (
    <div className="personForm">
      <h1>User Form</h1>
      <div className="formContainer">
        <Form>
          <label forHTML="name">
            Name:
            <Field type="text" name="name" value={values.name} />
            {touched.name && errors.name && <p>{errors.name}</p>}
          </label>

          <label forHTML=" email">
            E-mail:
            <Field type="text" name="email" value={values.email} />
            {touched.email && errors.email && <p>{errors.email}</p>}
          </label>

          <label forHTML="Password">
            Password:
            <Field type="password" name="password" value={values.password} />
            {touched.password && errors.password && <p>{errors.password}</p>}
          </label>

          <label forHTML="termsAndConditions">
            Terms and Conditions
            <Field as="checkbox" name="terms" />
            {touched.terms && errors.terms && <p>{errors.terms}</p>}
          </label>

          <button type="submit">Submit!</button>
        </Form>
      </div>
      user.map(user => <div>{values.name}</div>)
    </div>
  );
};

const formikUserForm = withFormik({
  mapPropsToValues({ name }) {
    return {
      name: "",
      email: "",
      password: "",
      termsAndConditions: false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("I'd really like to know your name"),
    email: Yup.string().required("It's annoying, but this is required"),
    password: Yup.string()
      .password()
      .required("Don't forget to make a strong password!"),
    termsAndConditions: Yup.bool().required(
      "I know you didn't read this, so just check that you've read them anyway."
    )
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    console.log("Submitting form:", values);

    Axios.post("https://reqres.in/api/users", values)
      .then(res => {
        setStatus(res.data);
        resetForm();
        console.log("Success!", res.data);
      })
      .catch(err => {
        console.log("You have encountered an error", err);
      });
  }
})(NewUser);

export default formikUserForm;
