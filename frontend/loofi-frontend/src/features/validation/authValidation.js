export const validateEmail = (email) => {
    // eventually validate by trying to send a verification email, if fails return error
    const validPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !!email.match(validPattern);
}

export const validatePassword = (password, passwordConfirmation = "none") => {
    // Must be at least 8 chars, one upper, one lower, one number, and one special
    const validPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (password.match(validPattern)) {
        if (passwordConfirmation !== "none" && password === passwordConfirmation) {
            return true;
        }
        return true;
    }
    return false;
}

export const validateName = (name) => {
    // Accepts alphabetical chars, 1 space max, and length must be between 2 and 30
    const validPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return name.match(validPattern);
}