import { useState, useEffect } from "react";
import axios from 'axios';

const UseLogin = (callback, ValidateLog) => {
const [role, setrole] = useState()
const [errors, seterrors] = useState({})

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
    const { data } = await axios.post("http://localhost:2000/auth/connect", loginUser)
    console.log(data);
    if(data.requestSucceeded) {
       seterrors(ValidateLog(val,false,false));
       console.log(data)
       setrole(data)
    } else {
      if (!data.emailFound) {
          seterrors(ValidateLog(val,true,false));
      } else {
        seterrors(ValidateLog(val,false,true));
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

  return { handlechange, val, HandleConnect, errors,role};
}

export default UseLogin