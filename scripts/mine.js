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

       html += `<select name="mines" id="mines" class="mineName">`

       html += `<option value="0">Select a Mine Facility</option>`

       const arrayMines = mines.map((mine) => {
              if (mine.active === true) {
                     return `<option value="${mine.id}" class='mine'>${mine.name}</option>`
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
       const selectedMine = getSelectedMine()

       let html = "<ul class='mineral'>"
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

       if (selectedMine.id !== null){
              return html
       }
       else {
              return " "
       }

}

