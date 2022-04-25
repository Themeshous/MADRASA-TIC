export default function validateForget(email) {
    let errors = {}
    
    if (!email) {
        errors.email = "L'adresse email est requise"
    }else if (!/\S+\.\S+@esi-sba.dz+/.test(email)) {
        errors.email = "L'adresse email n'est pas valide";
    }
    return errors;
}