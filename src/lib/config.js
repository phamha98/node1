
function getRandomDate(start = new Date('2023/01/01'), end = new Date('2023/12/31')) {
    const startTimeStamp = start.getTime();
    const endTimeStamp = end.getTime();
    const randomTimeStamp = startTimeStamp + Math.random() * (endTimeStamp - startTimeStamp);
    const randomDate = new Date(randomTimeStamp);

    return randomDate;
}
function getRandomPhoneNumber() {
    const digits = '0123456789';
    let phoneNumber = '';

    for (let i = 0; i < 10; i++) {
        phoneNumber += digits.charAt(Math.floor(Math.random() * digits.length));
        if (i === 2 || i === 5) {
            phoneNumber += '-';
        }
    }

    return phoneNumber;
}
function getRandomEmail() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const domain = ['gmail.com', 'yahoo.com', 'outlook.com', 'example.com']; // Add more domains as needed
    const randomLocalPartLength = Math.floor(Math.random() * 10) + 5; // Random length between 5 and 14

    let localPart = '';
    for (let i = 0; i < randomLocalPartLength; i++) {
        localPart += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    const randomDomain = domain[Math.floor(Math.random() * domain.length)];

    return `${localPart}@${randomDomain}`;
}
function getRandomFirstName() {
    const firstNames = [
        'John', 'Alice', 'Michael', 'Emily', 'David', 'Sarah', 'Robert', 'Olivia',
        'James', 'Emma', 'William', 'Ava', 'Joseph', 'Sophia', 'Richard', 'Isabella',
        // Add more first names as needed
    ];

    return firstNames[Math.floor(Math.random() * firstNames.length)];
}
function getRandomLastName() {
    const lastNames = [
        'Smith', 'Johnson', 'Brown', 'Lee', 'Wilson', 'Anderson', 'Taylor', 'Clark',
        'Walker', 'Hall', 'Davis', 'White', 'Harris', 'King', 'Wright', 'Evans',
        // Add more last names as needed
    ];

    return lastNames[Math.floor(Math.random() * lastNames.length)];
}
function getRandomName() {
    const firstName = getRandomFirstName();
    const lastName = getRandomLastName();
    return `${firstName} ${lastName}`;
}
// npx sequelize-cli db:migrate
module.exports = {
    getRandomDate,
    getRandomPhoneNumber,
    getRandomEmail,
    getRandomFirstName,
    getRandomLastName,
    getRandomName,
}