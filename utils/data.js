const names = [
    'rainbow',
    'artlover',
    'traveller',
    'rockstar',
];
const emails = [
    'rainbow@a.com',
    'artlover@b.com',
    'traveller@c.com',
    'rockstar@d.com',
];
const thoughts = [
    'Wonderfull weather today!',
    'Painting "Primavera" is the best!',
    'Grand Canyon is amazing!',
    'Just came back from the "Scorpions" consert!',
];
const reactions = [
    'Liked',
    'Disliked',
    'Awesome',
    'Really great',
];

const getRandomUsername = () => names[Math.floor(Math.random() * names.length)];
const getRandomEmail = () => emails[Math.floor(Math.random() * emails.length)];
const getRandomThoughts = () => thoughts[Math.floor(Math.random() * thoughts.length)];

const getThoughtReaction = (int) => {
    if (int === 1) {
        return reactions[0];
    } else if (int === 2) {
        return reactions[1];
    } else if (int === 3) {
        return reactions[2];
    } else if (int === 4) {
        return reactions[3];
    }
};
module.exports = { getRandomUsername, getRandomEmail, getRandomThoughts, getThoughtReaction };
