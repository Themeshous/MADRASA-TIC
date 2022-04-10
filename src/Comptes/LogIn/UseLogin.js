import { useState,useEffect} from "react";

const UseLogin= (callback ,ValidateLog) => {
  const [val, setval] = useState({
      email: '',
      pswd:''
  })
  const [errors, seterrors] = useState({})
  const [isConnecting, setisconnecting] = useState(false)
  const handlechange = e =>{
    const {name , value} = e.target
    setval({
        ...val,
        [name]:value
    })
}
  
  const HandleConnect = e =>{
      e.preventDefault();

      seterrors(ValidateLog(val));
      setisconnecting(true)
  }

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isConnecting ) {
        callback();
      }
    },
    [errors]
  );

  return {handlechange,val,HandleConnect,errors};
}

export default UseLogin