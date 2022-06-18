import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const UseLogin = (callback, ValidateLog) => {

  const [errors, seterrors] = useState({})
  
  localStorage.removeItem("user")


  const navigate = useNavigate();
  const location = useLocation();
  const [isConnecting, setisconnecting] = useState(false)

  const [val, setval] = useState({
    email: '',
    pswd: ''
  })


  const handlechange = e => {
    const { name, value } = e.target
    setval({
      ...val,
      [name]: value
    })
  }

  const HandleConnect = async (e) => {

    e.preventDefault();
    const loginUser = {
      email: val.email,
      password: val.pswd,
    };
    const { data } = await axios.post("http://localhost:2000/auth/connect", loginUser);
    console.log(data);
    if (data.role==="standard user") {
      seterrors(ValidateLog(val, false, false,false,true))
    }
    else if (data.requestSucceeded) {

      seterrors(ValidateLog(val, false, false,false,false));
 
      const roles = data.role
      const name = data.nom
      const name2 = data.prenom
      const email = data.email
      const prof = data.profession
      const id = data.id
      localStorage.setItem("user",JSON.stringify({ name, name2, email, roles,prof ,id}));
      
      const p = "/" + (roles.replace(/\s/g, ''))
      const from = (p !== "/") ? p : location.pathname;
      navigate(from, { replace: true })

    } else {
      if (!data.emailFound) {
        seterrors(ValidateLog(val, true, false,false,false));
      } else if (!data.passwordFound){
          seterrors(ValidateLog(val,false,true,false,false));
      }
      if((data.isActive)===false){
        seterrors(ValidateLog(val, false,false,true,false));
      }
    }
    setisconnecting(true)
  }
  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isConnecting) {
        callback();
      }
    },
    [errors, callback, isConnecting]
  );

  return { handlechange, val, HandleConnect, errors };
}

export default UseLogin