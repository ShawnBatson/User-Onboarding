import React, { useState, useEffect } from "react";
import { Form, Field, withFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import Axios from "axios";

const NewUser = ({ errors, touched, values, status }) => {
  const [user, setUser] = useState([]);
  return (
    <div className="personForm">
      <h1>User Form</h1>
      <div className="formContainer">
        <Form>
          <label forHTML="name">
            Name:
            <Field type="text" name="name" />
          </label>

          <label forHTML=" email">
            E-mail:
            <Field type="text" name="email" />
          </label>

          <label forHTML="Password">
            Password:
            <Field type="password" name="password" />
          </label>

          <label forHTML="termsAndConditions">
            Terms and Conditions
            <Field as="checkbox" name="terms" />
          </label>

          <button type="submit">Submit!</button>
        </Form>
      </div>
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
    name: Yup.string().required("please fill this in!"),
    email: Yup.string().required("please fill this in!"),
    password: Yup.string().required(),
    termsAndConditions: Yup.bool()
  })
})(NewUser);

export default formikUserForm;
