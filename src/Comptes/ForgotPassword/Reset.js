import React , {useState} from 'react'
import '../SignUp/FormLog.css'
import FormReset from './FormReset'
import { Forget } from './Forget'

export const Reset = () => {
    const [isReset, setisReset] = useState(false)

    function resetForm() {
     setisReset(true)
    }

    return (    
      <div className='form-container-login'> 
          {
          (<FormReset resetForm={resetForm}/>
          ) }
          </div>
    )
}