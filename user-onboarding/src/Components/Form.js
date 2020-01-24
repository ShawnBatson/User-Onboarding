import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";

const NewUser = ({ errors, touched, values, status }) => {
  const [user, setUser] = useState([]);
  return (
    <div className="personForm">
      <h1>User Form</h1>
      <Form>
        <label forHTML="name">
          Name:
          <Field type="text" name="name"></Field>
        </label>

        <label forHTML=" email">
          E-mail:
          <Field type="text" name="email"></Field>
        </label>

        <label forHTML="Password">
          Password:
          <Field type="password" name="password"></Field>
        </label>

        <label forHTML="termsAndConditions">
          Terms and Conditions
          <Field as="checkbox" name="terms"></Field>
        </label>

        <button type="submit">Submit!</button>
      </Form>
    </div>
  );
};

const formikUserForm = withFormik({})(NewUser);

export default formikUserForm;
