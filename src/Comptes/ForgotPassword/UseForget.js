import { useState,useEffect} from "react";

const UseForget= (callback ,validateForget) => {
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState({})
    const [isForget, setIsForget] = useState(false)
    const HandleChange = (e) => {
        setEmail(e.target.value);
      };
    const HandleForget = e =>{
        e.preventDefault();

        setErrors(validateForget(email));
        setIsForget(true);
    }
    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isForget) {
            callback();
          }
        },
        [errors]
      );
  return {HandleForget,email,HandleChange,errors}

}
export default UseForget