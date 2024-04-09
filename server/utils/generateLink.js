const crypto = require('crypto');

function generateHashedString(username) {
    // Create a string by combining username and current timestamp
    const inputString = `${username}${Date.now()}`;

    // Create a hash using SHA-256 algorithm
    const hash = crypto.createHash('sha256');

    // Update the hash object with the input string
    hash.update(inputString);

    // Get the hashed result in hexadecimal format
    const hashedResult = hash.digest('hex');


    // Convert the hexadecimal to base64 to get alphanumeric characters
    let alphanumericString = Buffer.from(hashedResult, 'hex').toString('base64');

    // Replace characters that are not alphanumeric
    alphanumericString = alphanumericString.replace(/[^a-zA-Z0-9]/g, '');

    // Take the first 8 characters of the base64 encoded string
    const finalString = alphanumericString.substring(0, 8);

    return finalString;
}

module.exports = generateHashedString;