const mongoose = require('mongoose')

const iventoryItemSchema = new mongoose.Schema({

    userID: {
        type: String,
        required: true
    },

    itemID: {
        type: Number,
        required: true
    },

    equip: {
        type: Boolean,
        required: true,
        default: false
    },

    amount: {
        type: Number,
        required: true,
        default: 1
    }
})

module.exports = mongoose.model('IventoryItem', iventoryItemSchema)