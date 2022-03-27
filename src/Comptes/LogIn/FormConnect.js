import React , {useState} from 'react'
import Interfwelcome from './Interfwelcome'
import FormLogIn from './FormLogIn'
import '../SignUp/FormLog.css'


export const FormConnect = () => {
    const [isconnected, setisconnected] = useState(false)
    function connectForm() {
     setisconnected(true)
    }
    return (
    
      <div className='form-container-login'> 
        
          {!isconnected?
          (<FormLogIn connectForm={connectForm}/>
          ) : (<Interfwelcome/>)}
          </div>
  
    )
}