import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// formik components

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: ''
}

const onSubmit = values => {
  console.log('formData', values);
}

const validationSchema = Yup.object({
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  email: Yup.string().email('Invalid Email Address!').required('Required'),
  password: Yup.string().required('Required')
})

const Login4 = () => {

  return (
    <div>
      <div>
        <h1 className='text-center bg-green-700 text-white p-6 text-4xl'>React formik</h1>
        <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
          <div className='bg-gray-400 flex flex-col justify-center items-center h-screen'>
            <Form>
              <div className='border-4 border-solid border-black p-6 flex flex-col text-2xl bg-purple-700 '>
                <div className='mb-4 flex flex-col'>
                  <label className='me-4' htmlFor='firstname'>FirstName</label>
                  <Field type="text" name="firstname" id="firstname" />
                  <ErrorMessage name="firstname"/>
                </div>
                <div className='mb-4 flex flex-col'>
                  <label className='me-4' htmlFor='lastname'>LastName</label>
                  <Field type="text" name="lastname" id="lastname" />
                  <ErrorMessage name="lastname"/>
                </div>
                <div className='mb-4 flex flex-col'>
                  <label className='me-4' htmlFor='email'>Email</label>
                  <Field type="email" name="email" id="email" />
                  <ErrorMessage name="email"/>
                </div>
                <div className='mb-4 flex flex-col'>
                  <label className='me-4' htmlFor='password'>Password</label>
                  <Field type="password" name="password" id="password" />
                  <ErrorMessage name="password"/>
                </div>
                <button type="submit" className='border-2 border-solid border-white' >Submit</button>
              </div>
            </Form>
          </div>
        </Formik>
      </div>
    </div>
  )
}

export default Login4
