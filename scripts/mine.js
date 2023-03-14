import { getMines, getMinerals, getAvailableMinerals, getSelectedMine, setSelectedMine } from "./database.js"


document.addEventListener(
       "change",
       (changeEvent) => {
              const mines = getMines()
              if (changeEvent.target.id === "mines") {
                     const selectedMineId = parseInt(changeEvent.target.value)
                     for (const mine of mines) {
                            if (mine.id === selectedMineId) {
                                   setSelectedMine(mine)
                            }
                     }
                     if (selectedMineId === 0) {
                            document.querySelector("#MineralOptions").innerHTML = " "  
                     }
                     else {
                            document.querySelector("#MineralOptions").innerHTML = buildMineralOptions()
                     }
              }
       }
)

const findMatchingMineMinerals = () => {
       const selectedMine = getSelectedMine()
       const mineMinerals = getAvailableMinerals()

       let selectedMineMinerals = []
       for (const mineMineral of mineMinerals) {
              if (mineMineral.mineId === selectedMine.id) {
                     selectedMineMinerals.push(mineMineral)
              }
       }
       return selectedMineMinerals
}

export const Mines = () => {
       const mines = getMines()
       let html = ""

       html += `<select name="mines" id="mines">`

       html += `<option value="0">Select a Mine Facility</option>`

       const arrayMines = mines.map((mine) => {
              if (mine.active === true) {
                     return `<option value="${mine.id}" name ="mine">${mine.name}</option>`
              }
       }
       )

       html += arrayMines.join(``)
       html += "</select>"

       return html
}


//invoke buildMineralOptions in exominer.js
export const buildMineralOptions = () => {

       const selectedMineMinerals = findMatchingMineMinerals()
       const minerals = getMinerals()

       let html = "<ul>"
       const listItems = minerals.map(mineral => {
              for (const selectedMineMineral of selectedMineMinerals) {
                     if (mineral.id === selectedMineMineral.mineralId) {
                            return `<li>
                                          <input type="radio" name="mineral" value="${mineral.id}" /> ${selectedMineMineral.mineralAmount} tons of ${mineral.name}
                                   </li>`
                     }
              }
       })
       html += listItems.join("")
       html += "</ul>"

       return html
}

/* changes to other modules

needs to be in main.js (john should have added)
document.addEventListener( "stateChanged", event => {
    console.log("State has changed")
    renderAllHTML()
})

needs to be added to exominer.js
<div id="MineralOptions">
        </div>

add to database.js
export const setSelectedMine = (mine) => {
    database.transientState.selectedMine = mine
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getSelectedMine = () => {
    return database.transientState.selectedMine
}

*/