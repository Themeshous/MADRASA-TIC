export default function ValidateInfo(values){
    let errors = {}

    if(!values.nom.trim()){
        errors.nom="Le nom est requis"
    }
    if(!values.prenom.trim()){
        errors.prenom="Le prénom est requis"
    }
    if(!values.email){
        errors.email="L'adresse email est requise"
    }else if(!/\S+\.\S+@esi-sba.dz+/.test(values.email)){
        errors.email = "Adresse email non pas valide";
    }

    if(!values.role.trim()){
        errors.role="Le rôle est requis"
    }
    if(!values.profession.trim()){
        errors.profession="La profession est requise"
    }
    if (!values.pswd) {
        errors.pswd= 'Le mot de passe est requis';
      } 
     else if (values.pswd.length < 8) {
        errors.pswd = 'Le mot de passe doit contenir 8 symboles ou plus';
      }
    
      if (!values.pswd1) {
        errors.pswd1= 'Le mot de passe est requis';
      } else if (values.pswd1 !== values.pswd) {
        errors.pswd1 = 'Veuillez comfirmer avec le meme mot de passe';
      }
   
      return errors;
    
}