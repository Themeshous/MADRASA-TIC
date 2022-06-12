import { useState,useEffect} from "react";
import React from 'react'

const UseForm = (callback ,ValidateInfo) => {
  const [values, setvalues] = useState({
      nom:'',
      prenom: '',
      email: '',
      numero:'',
      role: '',
      profession: '',
      pswd:'',
      pswd1:''

  })
  const [errors, seterrors] = useState({})
  const [isSubmitting, setisSubmitting] = useState(false)
  const handlechange = e =>{
      const {name , value} = e.target
      setvalues({
          ...values,
          [name]:value
      })
  }
  
  const HandleSubmit = e =>{
      e.preventDefault();

      seterrors(ValidateInfo(values));
      setisSubmitting(true)
  }

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return {handlechange,values,HandleSubmit,errors};
}

export default UseForm