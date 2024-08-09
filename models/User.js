const { Schema, model } = require('mongoose');

//Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'] //checks if email is valid
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought' // reference the Thought model
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User' // reference the User model
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

//Create a virtual called friendCount that retrieves the length of the user's friends 
userSchema
    .virtual('friendCount')
    .get(function() {
        return this.friends.length;
    });

const User = model('User', userSchema);

module.exports = User;