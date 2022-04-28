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
    if (data.connected) {
       seterrors(ValidateLog(val,false));
       setrole(data.role)
    } else {
      seterrors(ValidateLog(val,true));
      console.log(data.message)
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