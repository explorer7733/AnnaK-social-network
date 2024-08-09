const { Schema, model } = require('mongoose');
const Thought = require('./Thought');
const reactionSchema = require('./Reaction');

//Sschema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now 
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema] // array of nested documents created with the Reaction schema
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

//Create a virtual called reactionCount that retrieves the length of the thought's reactions
thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;