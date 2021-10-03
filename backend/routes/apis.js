const { request } = require('express')
const express = require('express')
const router = express.Router()
const Item = require('../models/Item')
const IventoryItem = require('../models/InventoryItem')
const InventoryItem = require('../models/InventoryItem')

// get all
router.get("/items/", async (req, res) => {
    try {
        const items = await Item.find()
        res.json(items)
    } catch (err){
        res.status(500).json({ message: err.message })
    }
})


// get one
router.get("/items/:id", getItem, (req, res) => {
    res.json(res.item1)
})

// delete one
router.delete("/items/:id", getItem, async (req, res) => {

    try {
        await res.item1.remove()
        res.json({ message: "deleted item" })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


// create
router.post("/items/", async (req, res) => {
    const item = new Item({
        itemID: req.body.itemID,
        name: req.body.name,
        type: req.body.type,
        rarity: req.body.rarity,
        description: req.body.description,
        vendorPrice: req.body.vendorPrice,
        physicalAttack: req.body.physicalAttack,
        attackSpeed: req.body.attackSpeed,
        magicalAttack: req.body.magicalAttack,
        castingSpeed: req.body.castingSpeed,
        health: req.body.health,
        physicalDefense: req.body.physicalDefense,
        magicalDefense: req.body.magicalDefense,
        movementSpeed: req.body.movementSpeed,
        luck: req.body.luck,
        physicalAttackPercent: req.body.physicalAttackPercent,
        attackSpeedPercent: req.body.attackSpeedPercent,
        magicalAttackPercent: req.body.magicalAttackPercent,
        castingSpeedPercent: req.body.castingSpeedPercent,
        healthPercent: req.body.healthPercent,
        physicalDefensePercent: req.body.physicalDefensePercent,
        magicalDefensePercent: req.body.magicalDefensePercent,
        movementSpeedPercent: req.body.movementSpeedPercent,
        luckPercent: req.body.luckPercent
    })

    try {
        const newItem = await item.save()
        res.status(201).json(newItem)
    } catch (err){
        res.status(400).json({ message: err.message })
    }
    
})

router.patch('/:id', getItem, async (req, res) => {



    if (req.body.itemID != null) {
        res.item1.itemID = req.body.itemID
    }

    if (req.body.name!= null) {
        res.item1.name = req.body.name
    }

    
    if (req.body.type!= null) {
        res.item1.type = req.body.type
    }

    
    if (req.body.rarity!= null) {
        res.item1.rarity = req.body.rarity
    }

    
    if (req.body.description!= null) {
        res.item1.description = req.body.description
    }

    
    if (req.body.vendorPrice!= null) {
        res.item1.vendorPrice = req.body.vendorPrice
    }

    
    if (req.body.physicalAttack!= null) {
        res.item1.physicalAttack = req.body.physicalAttack
    }

    
    if (req.body.attackSpeed!= null) {
        res.item1.attackSpeed = req.body.attackSpeed
    }

    
    if (req.body.magicalAttack!= null) {
        res.item1.magicalAttack = req.body.magicalAttack
    }

    
    if (req.body.castingSpeed!= null) {
        res.item1.castingSpeed = req.body.castingSpeed
    }

    
    if (req.body.health!= null) {
        res.item1.health = req.body.health
    }

    
    if (req.body.physicalDefense!= null) {
        res.item1.physicalDefense = req.body.physicalDefense
    }

    
    if (req.body.magicalDefense!= null) {
        res.item1.magicalDefense = req.body.magicalDefense
    }
    
    if (req.body.movementSpeed!= null) {
        res.item1.movementSpeed = req.body.movementSpeed
    }

    
    if (req.body.luck!= null) {
        res.item1.luck = req.body.luck
    }
    

    if (req.body.expBonus!= null) {
        res.item1.expBonus = req.body.expBonus
    }
    

    if (req.body.physicalAttackPercent!= null) {
        res.item1.physicalAttackPercent = req.body.physicalAttackPercent
    }

    
    if (req.body.attackSpeedPercent!= null) {
        res.item1.attackSpeedPercent = req.body.attackSpeedPercent
    }

    
    if (req.body.magicalAttackPercent!= null) {
        res.item1.magicalAttackPercent = req.body.magicalAttackPercent
    }

    
    if (req.body.castingSpeedPercent!= null) {
        res.item1.castingSpeedPercent = req.body.castingSpeedPercent
    }

    
    if (req.body.healthPercent!= null) {
        res.item1.healthPercent = req.body.healthPercent
    }

    
    if (req.body.physicalDefensePercent!= null) {
        res.item1.physicalDefensePercent = req.body.physicalDefensePercent
    }

    
    if (req.body.magicalDefensePercent!= null) {
        res.item1.magicalDefensePercent = req.body.magicalDefensePercent
    }
    
    if (req.body.movementSpeedPercent!= null) {
        res.item1.movementSpeedPercent = req.body.movementSpeedPercent
    }

    
    if (req.body.luckPercent!= null) {
        res.item1.luckPercent = req.body.luckPercent
    }
    
    if (req.body.expBonusPercent!= null) {
        res.item1.expBonusPercent = req.body.expBonusPercent
    }

    try {
        const updatedItem = await res.item1.save()
        res.json(updatedItem)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})



async function getItem(req, res, next) {

    let item1 

    try {
        item1 = await Item.findOne({ itemID: req.params.id})
        if (item1 == null) {
            return res.status(404).json({ message: "cannot find item" })
        }

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.item1 = item1
    next()
}




// get inventory
router.get("/inventory/:user", async (req, res) => {
    try {
        const inventoryItems = await IventoryItem.find({ userID: req.params.user })
        res.json(inventoryItems)
    } catch (err){
        res.status(500).json({ message: err.message })
    }
})



router.patch('/inventory/:user/:num', getInventoryItem, async (req, res) => {

    if (req.body.userID != null) {
        res.inventoryItem1.userID = req.body.userID
    }

    if (req.body.itemID!= null) {
        res.inventoryItem1.itemID = req.body.itemID
    }

    if (req.body.equip != null) {
        res.inventoryItem1.equip = req.body.equip
    }

    if (req.body.amount!= null) {
        res.inventoryItem1.amount = req.body.amount
    }

    try {
        const updatedItem = await res.inventoryItem1.save()
        res.json(updatedItem)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})


// create
router.post("/inventory/:user", async (req, res) => {
    const inventoryItem = new InventoryItem({
        userID: req.body.userID,
        itemID: req.body.itemID,
        equip: req.body.equip,
        amount: req.body.amount
    })

    try {
        const newIventoryItem = await inventoryItem.save()
        res.status(201).json(newIventoryItem)
    } catch (err){
        res.status(400).json({ message: err.message })
    }
    
})


// delete one
router.delete("/inventory/:user/:num", getInventoryItem, async (req, res) => {

    try {
        await res.inventoryItem1.remove()
        res.json({ message: "deleted item" })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// get one
router.get("/inventory/:user/:num", getInventoryItem, (req, res) => {
    res.json(res.inventoryItem1)
})


async function getInventoryItem(req, res, next) {

    let inventoryItem1 

    try {
        
        inventoryItem1 = await IventoryItem.find({ userID: req.params.user })
        console.log(req.params.num)
        console.log(inventoryItem1.length)
        if ((inventoryItem1.length <= req.params.num)) {
            
            return res.status(404).json({ message: "cannot find item" })
        }

        else {
            inventoryItem1 = inventoryItem1[req.params.num]
        }

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.inventoryItem1 = inventoryItem1
    next()
}



module.exports = router