import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Signup = () => {
  const validate = Yup.object({
    username: Yup.string()
      .max(10, 'Must be 10 characters')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  })
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik=> (
        <div>
          <h1 className="aa">Sign Up</h1>
          <Form>
            <TextField label="Username" name="username" type="text" />
            <TextField label="Password" name="password" type="password" />
            <button className="btn btn-primary mt-3" type="submit">Submit</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
