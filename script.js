function generatePassword() {
    // Define character sets
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    // Get user preferences
    const includeUppercase = confirm('Include uppercase letters?');
    const includeLowercase = confirm('Include lowercase letters?');
    const includeNumbers = confirm('Include numbers?');
    const includeSymbols = confirm('Include symbols?');

    // Combine selected character sets
    let allChars = '';
    if (includeUppercase) allChars += uppercaseChars;
    if (includeLowercase) allChars += lowercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;

    // Get password length
    const passwordLength = parseInt(prompt('Enter password length (between 8 and 128 characters):'));
    
    // Validate password length
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert('Please enter a valid password length.');
        return;
    }

    // Generate password
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    // Display password
    document.getElementById('password').value = password;
}
