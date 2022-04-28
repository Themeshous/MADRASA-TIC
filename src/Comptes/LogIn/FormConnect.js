import React , {useState} from 'react'
import Interfwelcome from './Interfwelcome'
import FormLogIn from './FormLogIn'
import '../SignUp/FormLog.css'

export const FormConnect = () => {
    const [isconnected, setisconnected] = useState(false)
    const [Data, setData] = useState()
    function connectForm() {
     setisconnected(true)
    }
    function updata(value) {
        setData(value)
    }
    return (
    
      <div className='form-container-login'> 
        
          {!isconnected?
          (<FormLogIn connectForm={connectForm} data={updata}/>
          ) : (<><Interfwelcome/>
                 {Data}
          </>)}
          </div>
  
    )
}