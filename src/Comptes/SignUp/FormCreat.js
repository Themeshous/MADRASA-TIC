import React , {useState,useEffect} from 'react'
import FormSignup from './FormSignup'
import './FormLog.css'

const FormCreat = () => {
  const [issubmitted, setissubmitted] = useState(false)
  const [show, setshow] = useState(false)
  function submitForm() {
   setissubmitted(true)
   setshow(true)
  }
  useEffect(() => {
    setInterval(() => { setshow(false); }, 4000)
}, [show])
  return (
    <>
    <div className='form-container-signup'> 
      
        
        <FormSignup submitForm={submitForm}/>
        {issubmitted && (show && <div className="alerte-msg">Le compte à été créé avec succes</div>)}
        </div>
    </>
  )
}

export default FormCreat