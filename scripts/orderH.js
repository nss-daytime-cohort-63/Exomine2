import { getMinerals } from "./database.js"
import { getBoughtMinerals } from "./database.js"
import { getColonies } from "./database.js"
import { getSelectedGovernor, getSelectedMineral, setColony, setMineral } from "./database.js"
import { purchaseMineral } from "./database.js"



export const orderHistory = () => {

    const minerals = getMinerals()
    const boughtMinerals = getBoughtMinerals()

    const colonies = getColonies()
    const selectedGov = getSelectedGovernor()

    let html = ""


    if (selectedGov.name === null) {
        return ""
    }

    const colonyFound = colonies.find((colony) => {
        return colony.id === selectedGov.colonyId
    })
    const mineralsFound = []
    for (const boughtMineral of boughtMinerals) {
        if (boughtMineral.colonyId === colonyFound.id) {
            mineralsFound.push(boughtMineral)
        }
    }


    for (const mineral of minerals) {
        for (const mineralFound of mineralsFound) {
            if (mineral.id === mineralFound.mineralId) {
                html += `<li>${mineralFound.mineralAmount} ${mineral.name}</li>`


            }
        }
    }
    return html
}







document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent
        if (itemClicked.id === "orderButton") {
            const selectedGov = getSelectedGovernor()
            const selectedMin = getSelectedMineral()
            setColony(selectedGov.colonyId)
            setMineral(selectedMin)
            purchaseMineral()
// push transient state minerals into colony array
        }
    }
)

//add to exominer
