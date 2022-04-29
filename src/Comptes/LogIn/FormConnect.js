import React , {useState} from 'react'
import FormLogIn from './FormLogIn'
import '../SignUp/FormLog.css'
import CreateComp from '../../InterfaceAdmin/Pages/CreateComp'
import ConsulterDeclr from "../../InterfaceGestAiguillage/pages/ConsulterDeclaration/ConsulterDeclr"
export const FormConnect = () => {

    const [isconnected, setisconnected] = useState(false)
    const [Data, setData] = useState()
    function connectForm() {
     setisconnected(true)
    }
    function updata(value) {
        setData(value)
    }

     var interf;
     function redirect(valeur) {
          if (valeur=="responsable d'aiguillage") {
              interf=<ConsulterDeclr/>
          }else if (valeur=="responsable des relations extérieures") {
             interf=<>Bien venu responsable des relation externes</>
          }else if((valeur=="administrateur-secondaire") || (valeur=="administrateur")) {
              interf=<CreateComp/>;
          }else{ interf=<>Bienvenu chef de service</>}
       }
   
    return (
    
      <div className='form-container-login'> 
        
          {!isconnected?
          (<FormLogIn connectForm={connectForm} data={updata}/>
          ) : (<>{redirect(Data.role)}
                 {interf}
          </>)}
          </div>
  
    )
}