export const read_attack = (item) => {
    if (item.attack) {
        return <p>Attack: +{item.attack}</p>
    }
}

export const read_health = (item) => {
    if (item.health) {
        return <p>Health: +{item.health}</p>
    }
}

export const read_defense = (item) => {
    if (item.defense) {
        return <p>Defense: +{item.defense}</p>
    }
}

export const read_equip = (item) => {
    if (item.equip == true) {
        return <p className="equipped">Equipped</p>
    }

    else {
        return <p className="unequipped"></p>
    }
}

export const read_rarity = (item) => {
    var rarity = item.rarity
    var type = item.type.toUpperCase()
    
    if (rarity === 0) {
        return (
        <div className="item-heading">
            <h2 className="rarity0">{item.itemName}</h2>
            <p className="amount">x{item.amount}</p>
            <p>{type}</p>
        </div>)
    }

    if (rarity === 1) {
        return (
            <div className="item-heading">
                <h2 className="rarity1">{item.itemName}</h2>
                <p className="amount">x{item.amount}</p>
                <p >{type}</p>
            </div>)
        }

    if (rarity === 2) {
        return (
            <div className="item-heading">
                <h2 className="rarity2">{item.itemName}</h2>
                <p className="amount">x{item.amount}</p>
                <p>{type}</p>
            </div>)
        }

    if (rarity === 3) {
        return (
        <div className="item-heading">
            <h2 className="rarity3">{item.itemName}</h2>
            <p className="amount">x{item.amount}</p>
            <p>{type}</p>
        </div>)
    }

    if (rarity === 4) {
        return (
            <div className="item-heading">
                <h2 className="rarity4">{item.itemName}</h2>
                <div className="amount">
                    <p>x{item.amount}</p>
                </div>
                
                <p>{type}</p>
            </div>)
        }

    if (rarity === 5) {
        return (
            <div className="item-heading">
                <h2 className="rarity5">{item.itemName}</h2>
                <p className="amount">x{item.amount}</p>
                <p>{type}</p>
            </div>)
        }

    if (rarity === 6) {
        return (
            <div className="item-heading">
                <h2 className="rarity6">{item.itemName}</h2>
                <p className="amount">x{item.amount}</p>
                <p>{type}</p>
            </div>)
        }

    if (rarity === 7) {
        return (
            <div className="item-heading">
                <h2 className="rarity7">{item.itemName}</h2>
                <p className="amount">x{item.amount}</p>
                <p>{type}</p>
            </div>)
        }

    if (rarity === 8) {
        return (
            <div className="item-heading">
                <h2 className="rarity8">{item.itemName}</h2>
                <p className="amount">x{item.amount}</p>
                <p>{type}</p>
            </div>)
        }

    if (rarity === 9) {
        return (
            <div className="item-heading">
                <h2 className="rarity9">{item.itemName}</h2>
                <p className="amount">x{item.amount}</p>
                <p>{type}</p>
            </div>)
        }

    if (rarity === 10) {
        return (
            <div className="item-heading">
                <h2 className="rarity10">{item.itemName}</h2>
                <p className="amount">x{item.amount}</p>
                <p>{type}</p>
            </div>)
        }

}







