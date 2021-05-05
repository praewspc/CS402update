import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import axios from 'axios';
import '../Home.css';
// import Home from '../Home';
// import { BrowserRouter, Router, Route , Switch} from "react-router-dom";
// import { browserHistory } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import { withRouter } from 'react-router-dom'


export const Signup = () => {
 
  const validate = Yup.object({
    username: Yup.string()
      .max(10, 'Must be 10 characters')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  })
  
  let history = useHistory ();
  
  
  
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log("va",values.username)
         axios.post('http://localhost:5000/username/',{
           username: values.username,
           password: values.password
         })
         .then((response) => {
            console.log("React",response);
            if(response.data === "Student"){
              history.push ('/home') 
            } 
            else if (response.data === "Teacher"){
              history.push ('/home') }
            else if (response.data === "Adivisor"){
                history.push ('/home') }
         }).catch((error) => {
          console.log(error);
        })
      }}
    >
      {formik=> (
        <div>
          <h1 className="aa">Log in</h1>
          <Form>
            <TextField  label="Username" name="username" type="text" />
            <TextField label="Password" name="password" type="password" />
            <button className="btn btn-primary mt-3" type="submit">Submit</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}