import { getMines, getMinerals, getAvailableMinerals } from "./database.js"

const mines = getMines()

let selectedMine = null

document.addEventListener(
       "change",
       (changeEvent) => {
              if (changeEvent.target.id === "mines") {
                     const selectedMineId = parseInt(changeEvent.target.value)
                     for (const mine of mines) {
                            if (mine.id === selectedMineId) {
                                   selectedMine = mine
                            }
                     }
              }
       }
)

const findMatchingMineMinerals = (selectedMine) => {
       let selectedMineMinerals = []
       const mineMinerals = getAvailableMinerals()

       for (const mineMineral of mineMinerals) {
              if (mineMineral.mineId === selectedMine.id) {
                     selectedMineMinerals.push(mineMineral)
              }
       }
       return selectedMineMinerals
}

export const Mines = () => {
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

const selectedMineMinerals = findMatchingMineMinerals(selectedMine)

//invoke buildMineralOptions in exominer.js
export const buildMineralOptions = () => {
       let html = "<ul>"

       const minerals = getMinerals()

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