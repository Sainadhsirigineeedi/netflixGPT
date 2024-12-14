export const formFiledValidation = (email, password) => {
    
    const isEmailvalid = /^[a-z0-9._%+!$&*^|~#%'`?{}\-]+@[a-z0-9\-]+\.[a-z]{2,}$/i.test(email);

    
    const isPassword =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

    if(!isEmailvalid) return "email is not valid";
    if(!isPassword) return "password is not valid";

    return null;
}
