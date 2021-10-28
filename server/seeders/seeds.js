const faker = require('faker');

const db = require('../config/connection');
const { User, MyDate } = require('../models');

db.once('open', async () => {
    await User.deleteMany({});
    await MyDate.deleteMany({});

    const userData = [];

    for (let i = 0; i < 50; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();
        
        userData.push({ username, email, password });
    }

    const createdUsers = await User.collection.insertMany(userData);

    let createdDates = [];
    for (let i = 0; i < 50; i += 1) {
        const datename = faker.internet.datename();
        const username = faker.internet.username();
        const recipe = faker.lorem.words(Math.round(Math.random() * 10) + 1);

        createdDates.push({ datename, username, recipe });

    }
    const madeUpDates = await MyDate.collection.insertMany(createdDates);
    console.log('all done');
    process.exit(0);
});