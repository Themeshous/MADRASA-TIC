import { useState,useEffect} from "react";

const UseReset= (callback ,validateReset) => {
    const [value, setValue] = useState({
        pswd: '',
        pswd1: ''
    })
    const [errors, setErrors] = useState({})
    const [isReset, setisReset] = useState(false)
    const HandleChange = e =>{
      setValue(prevVal => {
        return {
          ...prevVal,
          [e.target.id]: e.target.value
        }
      })
  }
    const HandleReset = e =>{
        e.preventDefault();
        console.log(value.pswd,value.pswd1);
        setErrors(validateReset(value));
        setisReset(true);
    }
    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isReset) {
            callback();
          }
        },
        [errors]
      );
  return {HandleReset,value,HandleChange,errors}

}
export default UseReset