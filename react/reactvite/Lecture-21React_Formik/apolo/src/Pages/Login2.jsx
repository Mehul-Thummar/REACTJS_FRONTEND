import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'



// Yup Lib.... with Validation

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
  firstname:Yup.string().required('Required'),
  lastname:Yup.string().required('Required'),
  email:Yup.string().email('Invalid Email Address!').required('Required'),
  password:Yup.string().required('Required')
})

// const validate = values => {
//   const errors = {}
//   if (!values.firstname) {
//     errors.firstname = 'Required'
//   }
//   if (!values.lastname) {
//     errors.lastname = 'Required'
//   }
//   if (!values.email) {
//     errors.email = 'Required'
//   } else if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//   ) {
//     errors.email = 'Invalid email address';
//   }
//   if (!values.password) {
//     errors.password = 'Required'
//   }
//   return errors
// }

const Login2 = () => {

  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate
    validationSchema
  })

  console.log('FormikFormData' , formik.values);
  console.log('formikFormError' , formik.errors);

  return (
    <div>
      <div>
        <h1 className='text-center bg-green-700 text-white p-6 text-4xl'>React formik</h1>
        <div className='bg-gray-400 flex flex-col justify-center items-center h-screen'>
          <form onSubmit={formik.handleSubmit}>
            <div className='border-4 border-solid border-black p-6 flex flex-col text-2xl bg-purple-700 '>
              <div className='mb-4 flex flex-col'>
                <label className='me-4' htmlFor='firstname'>FirstName</label>
                <input type="text" name="firstname" id="firstname" value={formik.values.firstname} onChange={formik.handleChange}/>
                {
                  formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null
                }
              </div>
              <div className='mb-4 flex flex-col'>
                <label className='me-4' htmlFor='lastname'>LastName</label>
                <input type="text" name="lastname" id="lastname" value={formik.values.lastname} onChange={formik.handleChange} />
                {
                  formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null
                }
              </div>
              <div className='mb-4 flex flex-col'>
                <label className='me-4' htmlFor='email'>Email</label>
                <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} />
                {
                  formik.errors.email ? <div>{formik.errors.email}</div> : null
                }
              </div>
              <div className='mb-4 flex flex-col'>
                <label className='me-4' htmlFor='password'>Password</label>
                <input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} />
                {
                  formik.errors.password ? <div>{formik.errors.password}</div> : null
                }
              </div>
              <button type="submit" className='border-2 border-solid border-white' >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login2
