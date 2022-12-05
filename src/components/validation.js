export function validation(inputs){
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const errors={}
    if(!inputs.username) errors.username = "El nombre de usuario es requerido"
    else if(inputs.username.length>35) errors.username = "Nombre de usuario muy largo"
    else if(!regexEmail.test(inputs.username)) errors.username = "El nombre de usuario debe ser un email" 

    if(inputs.password.length<6) errors.password="La contraseña es muy corta"
    if(inputs.password.length>10) errors.password="La contraseña es muy larga"
    return errors
}