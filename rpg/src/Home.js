import { useState } from 'react'
import { read_attack, read_defense, read_health, read_rarity } from './itemReader'

const Home = () => {

    const [blobs, setBlobs] = useState([
        { itemName: "Ploania\'s First Wand", 
        rarity: 5,
        type: "mainhand",
        attack: 10,
        description: "Despite looking like an ordinary stick, this was the first wand used by the Great Witch Ploania.",
        vendorValue: 100,
        id: 1 },

        { itemName: "Kuku Eggshell",
        rarity: 2,
        type: "material",
        description: "The cracked eggshell of a Kuku Bird.",
        vendorValue: 5,
        id: 2 },

        { itemName: "Bheg's Gloves",
        rarity: 8,
        type: "gloves",
        health: 150,
        defense: 52,
        description: "The precious lost gloves of Dastard Bheg. No one knows how it was lost.",
        vendorValue: 1500,
        id: 3 }
    ])

    return (
        <div className="home">
            {blobs.map((blob) => (
                <div id={blob.id} className="item-preview" key={blob.id}>
                    <h2>{blob.itemName}</h2>
                    {read_rarity(blob)}
                    {read_attack(blob)}
                    {read_health(blob)}
                    {read_defense(blob)}
                    <p className="description">{blob.description}</p>
                    <p>Can be sold for {blob.vendorValue} coins</p>
                    
                </div>


            ))}
        </div>
    )
}

export default Home;