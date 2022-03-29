import React , {useState} from 'react'
import FormSignup from './FormSignup'
import FormSucc from './FormSucc'
import './FormLog.css'

  const Form = () => {
  const [issubmitted, setissubmitted] = useState(false)
  function submitForm() {
   setissubmitted(true)
  }
  return (
    <>
    <div className='form-container'> 
      
        {!issubmitted?
        (<FormSignup submitForm={submitForm}/>
        ) : (<FormSucc/>)}
        </div>

    </>
  )
}

export default Form