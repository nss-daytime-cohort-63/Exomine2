import { getMinerals,  getSelectedMineral, setSelectedMineral, getSelectedMine } from "./database.js"

//put mineral in the transient state
// MOVE TO MAIN.JS
// UPDATE database.js
// export const setSelectedMineral = (mineral) => {
//     database.transientState.selectedMineral = mineral
//     document.dispatchEvent(new CustomEvent("stateChanged"))
// }
document.addEventListener(
    "change",
    (changeEvent) => {
        let minerals = getMinerals()
        if (changeEvent.target.name === "mineral") {
            let chosenMineralId = parseInt(changeEvent.target.value)
            for (let mineral of minerals) {
                    if (chosenMineralId === mineral.id) {
                        setSelectedMineral(mineral)
                }
            }
        }
    }
)


//find the selectedMine and store it in a variable (pretty sure this is no longer necessary with most recent change)

//display 1 of selected mineral in the cart when it is selected
//called in exominer
export const cartMineral = () => {
    let selectedMineral = getSelectedMineral()
    let selectedMine = getSelectedMine()
    let html = ''
        if (selectedMineral.name === null) {
            return html
        } else {
            html = `<div>One ton of ${selectedMineral.name} from ${selectedMine.name}</>`
            return html
    }
}




//Make sure that everything which needs to be added throughout the modules for functionality (commented stuff from mine.js, mineralSet.js, etc.)
//Transient state (mineral) needs to be cleared between purchases, but not gov/colony
//Push transient state objects into the colonyMinerals database array
//MineralAMount on MineMinerals will need to reduce upon purchase
//Styling and formatting
