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
    {
        thoughtText: 'Wonderfull weather today!',
        username: 'rainbow',},

    {
        thoughtText: 'Art is amazing!',
        username: 'artlover',},

    {
        thoughtText: 'Travelling is my favorite!',
        username: 'traveller',},

    {
        thoughtText: 'Rockstar is the best!',
        username: 'rockstar',},
];
const reactions = [
    'Liked',
    'Disliked',
    'Awesome',
    'Really great',
];
const users = [
    {
        username: 'rainbow',
        email: 'rainbow@a.com',},

    {
        username: 'artlover',
        email: 'artlover@b.com',},

    {
        username: 'traveller',
        email: 'traveller@c.com',},

    {
        username: 'rockstar',
        email: 'rockstar@d.com',},

]


const getRandomUsername = () => names[Math.floor(Math.random() * names.length)];
const getRandomEmail = () => emails[Math.floor(Math.random() * emails.length)];
const getUsers = () => users;
const getRandomThoughts = () => thoughts;

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
module.exports = { getRandomUsername, getRandomEmail, getRandomThoughts, getThoughtReaction, getUsers };
