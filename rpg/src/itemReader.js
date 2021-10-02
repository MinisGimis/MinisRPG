export const read_attack = (item) => {
    if (item.attack) {
        return <p>Attack: {item.attack}</p>
    }
}

export const read_health = (item) => {
    if (item.health) {
        return <p>Health: {item.health}</p>
    }
}

export const read_defense = (item) => {
    if (item.defense) {
        return <p>Defense: {item.defense}</p>
    }
}

export const read_rarity = (item) => {
    var rarity = item.rarity
    
    if (rarity == 0) {
        return <p className="rarity0">Trash</p>
    }

    if (rarity == 1) {
        return <p className="rarity1">Common</p>
    }

    if (rarity == 2) {
        return <p className="rarity2">Uncommon</p>
    }

    if (rarity == 3) {
        return <p className="rarity3">...</p>
    }

}







