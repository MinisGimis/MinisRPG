const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({

    itemID: {
        type: Number,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    rarity: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        default: null
    },

    vendorPrice: {
        type: Number,
        default: null
    },
    
    physicalAttack: {
        type: Number,
        default: null

    },
    
    attackSpeed: {
        type: Number,
        default: null

    },
    
    magicalAttack: {
        type: Number,
        default: null

    },
    
    castingSpeed: {
        type: Number,
        default: null

    },
    
    health: {
        type: Number,
        default: null
    },
    
    physicalDefense: {
        type: Number,
        default: null

    },
    
    magicalDefense: {
        type: Number,
        default: null

    },
    
    movementSpeed: {
        type: Number,
        default: null

    },
    
    luck: {
        type: Number,
        default: null

    },
    
    expBonus: {
        type: Number,
        default: null

    },

        
    physicalAttackPercent: {
        type: Number,
        default: null

    },
    
    attackSpeedPercent: {
        type: Number,
        default: null

    },
    
    magicalAttackPercent: {
        type: Number,
        default: null

    },
    
    castingSpeedPercent: {
        type: Number,
        default: null

    },
    
    healthPercent: {
        type: Number,
        default: null

    },
    
    physicalDefensePercent: {
        type: Number,
        default: null

    },
    
    magicalDefensePercent: {
        type: Number,
        default: null
    },
    
    movementSpeedPercent: {
        type: Number,
        default: null

    },
    
    luckPercent: {
        type: Number,
        default: null

    },
    
    expBonusPercent: {
        type: Number,
        default: null

    }

})

module.exports = mongoose.model('Item', itemSchema)