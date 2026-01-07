function validateUser({name, email, password}){
    if(!name || name.length<2){
        return {valid: false, message:'Name must be at least 2 characters'};
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email || !emailRegex.test(email)){
        return {valid: false, message:'Invalid email format'};
    }
    if(!password || password.length<6){
        return {valid:false, message:'Password must be at least 6 characters'};
    }
    return {valid:true};
}
    module.exports = validateUser;