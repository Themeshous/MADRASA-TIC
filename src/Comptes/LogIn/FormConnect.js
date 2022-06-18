import React , {useState} from 'react'
import FormLogIn from './FormLogIn'
import '../SignUp/FormLog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'

export const FormConnect = () => {

    const [isconnected, setisconnected] = useState(false)
  
    function connectForm() {
     setisconnected(true)
    }
    
    return (
    
      <div className='form-container-login'> 
        
          {!isconnected?
          (<FormLogIn connectForm={connectForm}/>
          ) : ('')}
          <div className='btn-retour'>
            <a href='/' className='retour-aceuil'>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} className="icon" />
                Page d'accueil
            </a>
          </div>
          </div>
  
    )
}