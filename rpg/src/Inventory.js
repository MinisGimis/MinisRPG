import { useState, useEffect } from 'react'
import { read_amount, read_attack, read_defense, read_equip, read_health, read_rarity } from './itemReader'
import './rarity.css'
import './inventory.css'

const Inventory = () => {
    



    const [blobs, setBlobs] = useState([
  
        { itemName: "Weeds",
        rarity: 0,
        type: "material",
        equip: false,
        description: "Some weeds found growing among the grass.",
        vendorValue: 1,
        amount: 136,
        id: 2 },

        { itemName: "Kuku Eggshell",
        rarity: 1,
        type: "material",
        equip: false,
        description: "The cracked eggshell of a Kuku Bird.",
        vendorValue: 5,
        amount: 7,
        id: 3 },

        { itemName: "Wooden Planks",
        rarity: 2,
        type: "material",
        equip: false,
        description: "Long, rectangular planks of wood.",
        vendorValue: 20,
        amount: 30,
        id: 4 },

        { itemName: "Wispy Mushroom",
        rarity: 3,
        type: "material",
        equip: false,
        description: "A crooked light-blue mushroom with faint magical power",
        vendorValue: 100,
        amount: 17,
        id: 5 },

        { itemName: "Five Leaf Clover",
        rarity: 4,
        type: "material",
        equip: false,
        description: "Perhaps this will bring good luck?",
        vendorValue: 500,
        amount: 4,
        id: 6 },

        { itemName: "Roaring Magical Shield",
        rarity: 5,
        type: "offhand",
        equip: false,
        defense: 24,
        attack: 5,
        description: "An expertly crafted shield that has been fully awakened by the famous Sage Baldwin.",
        vendorValue: 2000,
        amount: 1,
        id: 7 },

        { itemName: "Ursidae Warrior's Skull",
        rarity: 6,
        type: "helmet",
        equip: false,
        attack: 12,
        defense: 30,
        health: 100,
        description: "Crafted from the skull of a fallen Ursidae warrior, this helmet offers great protection and strength to its wearer.",
        vendorValue: 3000,
        amount: 1,
        id: 8 },

        { itemName: "Nouver's Fang",
        rarity: 7,
        type: "material",
        equip: false,
        description: "Fang of the Dragon Nouver. In mint condition too.",
        vendorValue: 5000,
        amount: 2,
        id: 9 },

        { itemName: "Bheg's Gloves",
        rarity: 8,
        type: "gloves",
        equip: true,
        health: 150,
        defense: 52,
        description: "The precious lost gloves of Dastard Bheg. No one knows how it was lost.",
        vendorValue: 10000,
        amount: 1,
        id: 10 },

        { itemName: "Blackstar Aad Sphera",
        rarity: 9,
        type: "two-handed",
        equip: true,
        attack: 134,
        health: 100,
        defense: 20,
        description: "A pair of mysterious orbs discovered in the Backstar region radiating intense elemental power. The wielder of these orbs are capable of causing great devastation to the world.",
        vendorValue: 50000,
        amount: 1,
        id: 11 },

        { itemName: "Tear of the Fallen God",
        rarity: 10,
        type: "earring",
        equip: true,
        attack: "30%",
        health: "20%",
        defense: "20%",
        description: "An unknown craftsman took the crystalized tears of a Fallen God and created this earring. The condensed magic stored inside can allow even infants to slay an ogre.",
        vendorValue: 100000,
        amount: 1,
        id: 12 }
    ])  


    useEffect(() => {
        console.log("asdasd")

    }, [blobs])

    
    const [current, setCurrent] = useState(() => {
        return(-1)
    })

    const [current_amount, setCurrentAmount] = useState(() => {
        return(0)
    })

    const [max_amount, setMaxAmount] = useState(() => {
        return(0)
    })

    const [equip_status, setEquip] = useState(() => {
        return("Equip")
    })

    const delete_items = (action) => {

        var id = current     

        if (id > 0) {

            var item = blobs.find(blob => blob.id === id)

            if (action == "sell") {
                console.log("sold " + current_amount + " " + item.itemName + " for a total of " + item.vendorValue*current_amount + " coins")
            }

            else if (action == "trash") {
                console.log("trashed " + current_amount + " of " + item.itemName)
            }

            if (current_amount === max_amount) {
                const newBlobs = blobs.filter(blob => blob.id !== id)
                setBlobs(newBlobs)
                setCurrent(-1)
                setCurrentAmount(0)
                setMaxAmount(0)
                var target = document.getElementById("equip")
                target.className = "cannot_equip"
                target = document.getElementById("num")
                target.value=setCurrentAmount
            }
    
            else {
                item.amount = item.amount - current_amount
                var newMax = max_amount - current_amount
                if (newMax < current_amount) {
                    setCurrentAmount(newMax)
                    document.getElementById("num").value = newMax
                }
                setMaxAmount(newMax) 
            }

        }
    }



    function changeVal(item) {
        var target = document.getElementById("num")
        
        if (target.value > max_amount) {
            setCurrentAmount(max_amount)
            target.value=max_amount
        }

        else if (target.value < 0) {
            setCurrentAmount(0)
            target.value=0
        }

        else {
            setCurrentAmount(target.value)
            
        }
    }


    function selected(item) {
        var id = item.id
        setCurrent(id)
        if (current > 0) {
            var target = document.getElementById(current)
            console.log(current)
            target.className = "item-preview"
        }

        target = document.getElementById(id)
        target.className = "selected_item"
        target = document.getElementById("equip")
        
        if (item.type == "material") {     
            target.className = "cannot_equip"
        }

        else {
            target.className = "sidenav_content"
        }

        setCurrentAmount(item.amount)
        setMaxAmount(item.amount)
        target = document.getElementById("num")
        target.value = item.amount


    }

    return (
        <div className="home">
            <div className="sidenav">


                <p className="cannot_equip" id="equip"
                onClick={() => {
                    console.log("equip " + current)
                }}>{equip_status}</p>


                <p className="sidenav_content" 
                onClick={() => {
                    delete_items("sell")
                }}>Sell</p>
                <p className="sidenav_content"
                onClick={() => {
                    delete_items("trash")
                }}>Trash</p>
                <input type="number" min="0" max={max_amount} className="input_box" id="num" onChange={() => {
                    changeVal()
                }}></input>

            </div>
            <h1>Inventory</h1>
            {blobs.map((item) => (
                <div id={item.id} className="item-preview" key={item.id} onClick={() => {
                    selected(item)
                }}>
                    {read_rarity(item)}
                    {read_attack(item)}
                    {read_health(item)}
                    {read_defense(item)}
                    <p className="description">{item.description}</p>
                    <div className = "item-footer">
                        <p>Can be sold for {item.vendorValue} coins</p>
                        {read_equip(item)}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Inventory;