import React , {useState} from 'react'
import FormSignup from './FormSignup'
import FormSucc from './FormSucc'
import './FormLog.css'

const FormCreat = () => {
  const [issubmitted, setissubmitted] = useState(false)
  function submitForm() {
   setissubmitted(true)
  }
  return (
    <>
    <div className='form-container-signup'> 
      
        {!issubmitted?
        (<FormSignup submitForm={submitForm}/>
        ) : (<FormSucc/>)}
        </div>
    </>
  )
}

export default FormCreat