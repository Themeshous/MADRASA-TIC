export default function validateLog(val , BddErrors){
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
    else if (BddErrors) {
        errors.pswd = "Le mot de passe est incorrecte oubien adresse email n'existe pas ou compte désactivé";
      }
      return errors;
    
}