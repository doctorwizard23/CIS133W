

/**
* @description This get the lower case of thing
*
* @param {string} character this is description
* @return {string}
*/


function isLower(character) {
    return character >= "a" && character <= "z";
}

function isUpper(character) {
    return character >= "A" && character <= "Z";
}
            
function isDigit(character) {
    return character >= "0" && character <= "9";
}
            

function isValidUsernameCharacter(character) {
    return isLower(character) || isUpper(character) || isDigit(character);
}
    
function isSpecial(character) {
    var specialChars = "!@~#$%^&*+=";
    return specialChars.indexOf(character) >= 0;
}
            
function setMessage(id, message) {
    var messageBox = window.document.getElementById(id);
    messageBox.innerText = message;
}
            
function clearMessage(id) {
    setMessage(id, "");
}
            
function getInputValue(id) {
    return document.getElementById(id).value;
}
            
function checkUsernameRequirements(value) {
if (value == "") {
    setMessage("userNameMessage", "Username must be one or more alphanumeric characters.");
} 

for(var counter = 0; counter < value.length; counter++) {
    var character = value.charAt(counter);

    if (!isValidUsernameCharacter(character)) {
        setMessage("userNameMessage", "Character '" + character + "' is invalid in the username.");
        }
    }
}

function validateUserName() {
    var value = getInputValue("userName");

    clearMessage("userNameMessage");
    checkUsernameRequirements(value);
}

function validateLength(value) {
    var specialChars = "!@~#$%^&*+=";
    if (value == "") {
        setMessage("passwordMessage", "Password must be at least 8 characters, with at least "
                   + "1 upper-case, 1 number, and 1 character from '" + specialChars + "'.");
    } 

    if (value.length < 8) {
        setMessage("passwordMessage", "Password must be at least 8 characters.");
        return;
    }
}

function checkPasswordRequirements(value) {
    var hasUpper = false;
    var hasDigit = false;
    var hasRequired = false;
    var specialChars = "!@~#$%^&*+=";

    for (var counter = 0; counter < value.length; counter++) {
        var character = value.charAt(counter);

        if (isUpper(character)) {
            hasUpper = true;
        } else if (isDigit(character)) {
            hasDigit = true;
        } else if (isSpecial(character)) {
            hasRequired = true;
        }
    }

    if (!hasUpper) {
        setMessage("passwordMessage", "Password must have at least one upper-case letter.");
    } else if (!hasDigit) {
        setMessage("passwordMessage", "Password must have at least one number.");
    } else if (!hasRequired) {
        setMessage("passwordMessage", "Password must have at least 1 character from '" 
                   + specialChars + "'.");
    }
}

function validatePassword() {
    var value = getInputValue("password");

    clearMessage("passwordMessage");
    validateLength(value);
    checkPasswordRequirements(value);
}


window.addEventListener("load", function() {
    document.getElementById("userName").addEventListener("input", validateUserName);
    document.getElementById("password").addEventListener("input", validatePassword);
});

var x = function () {
    console.log("Hello");
}