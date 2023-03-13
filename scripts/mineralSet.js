import { getMinerals, getMines, setMineral } from "./database.js"

//put mineral in the transient state
export const mineralChange = () => {
    document.addEventListener(
        "change",
        (changeEvent) => {
            if (changeEvent.target.name === "mineral") {
                const chosenMineral = changeEvent.target.value
                setMineral(parseInt(chosenMineral))
            }
        }
    )
}

//find the selectedMine and store it in a variable
let selectedMine = null
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "mines") {
            const changeMineId = parseInt(changeEvent.target.value)
            let mines = getMines()
            for (let mine of mines) {
                if (mine.id === changeMineId) {
                    selectedMine = mine
                }
            }
        }
    }
)
//display 1 of selected mineral in the cart when it is selected

export const cartMineral = () => {
    let minerals = getMinerals()
    
    for (let mineral of minerals)
    if (database.transientState.selectedMineral === mineral.id) {
        let html = `<div>One ton of ${mineral.name} from ${selectedMine.name}</>`
        return html
    }
}
