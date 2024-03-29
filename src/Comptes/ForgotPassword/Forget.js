import React , {useState} from 'react'
import '../SignUp/FormLog.css'
import FormForget from './FormForget'
import Interfacemail from './lienmail' 


export const Forget = () => {
    const [isForgotten, setisForgotten] = useState(false)
    
    function forgetForm() {
     setisForgotten(true)
    }
   
    return (
      <div className='form-container-login'> 
          {!isForgotten?
          (<FormForget forgetForm={forgetForm}/>
          ) :(<Interfacemail/>
          )}
          </div>
  
    )
}