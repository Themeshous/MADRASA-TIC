export default function validateLog(val){
    let errors = {}


    if(!val.email){
        errors.email="L'adresse email est requise"
    }else if(!/\S+\.\S+@esi-sba.dz+/.test(val.email)){
        errors.email = "Adresse email non  valide";
    }
    if (!val.pswd) {
        errors.pswd= 'Le mot de passe est requis';
      } 
     else if (val.pswd.length < 8) {
        errors.pswd = 'Le mot de passe doit contenir 8 symboles ou plus';
      }
      return errors;
    
}