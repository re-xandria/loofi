export const validateEmail = (email) => {
    // eventually validate by trying to send a verification email, if fails return error
    const validPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !!email.match(validPattern);
}

export const validatePassword = (password) => {
    // Must be at least 8 chars, one upper, one lower, one number, and one special
    const validPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return !!password.match(validPattern);

}

export const validateName = (name) => {
    return 2 < name.length < 30;
}