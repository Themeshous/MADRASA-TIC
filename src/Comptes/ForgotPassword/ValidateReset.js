export default function validateReset(value){
    let errors ={}  
    if (!value.pswd) {
        errors.pswd= 'Le mot de passe est requis';
      } 
    if (value.pswd && !value.pswd1) {
        errors.pswd1= 'La confirmation de mot de passe est requise';
    } 
    if (value.pswd && value.pswd1 && value.pswd !== value.pswd1){
        errors.pswd1= 'Vous devez entrer le même mot de passe pour confirmer';
    } 
    if (value.pswd.length< 8) {
        errors.pswd = 'Le mot de passe doit contenir 8 symboles ou plus';
    }
    return errors;
}