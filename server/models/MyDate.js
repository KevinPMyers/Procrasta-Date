const { Schema, model } = require('mongoose');
const recipeSchema = require('./Recipe');


// date error
const dateSchema = new Schema({
    datename: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

    username: {
        type: String,
        required: true
    },
    recipes: [recipeSchema],
    
    music: {
        type: String
    }

});

const MyDate = model('Date', dateSchema);

module.exports = MyDate;