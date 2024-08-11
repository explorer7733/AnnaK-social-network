const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomUsername, getRandomEmail, getRandomThoughts, getUsers } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    //Delete the collections if they exist
    let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtsCheck.length) {
        await connection.dropCollection('thoughts');
    }
    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
        await connection.dropCollection('users');
    }
    //Create empty array to hold the users
    const users = getUsers();

    const thoughts = getRandomThoughts(10);
    //Loop through the users and create them
    
    console.table(thoughts);
    console.table(users);
    await User.deleteMany({});
    await Thought.deleteMany({});
    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    //Log the seed data to the console
   
    console.info('Seeding complete!');
    process.exit(0);
});