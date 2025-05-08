export const validateSearch = (input) => {
    //checks for multiple alphanumeric characters and no special characters besides @
    if (input) {
        let alphaNumRegex = /[A-Za-z0-9]+/i;
        let specialRegex = /[*|\":<>[\]{}`\\()';&$]/;
        return alphaNumRegex.test(input) && !specialRegex.test(input);
    }
}