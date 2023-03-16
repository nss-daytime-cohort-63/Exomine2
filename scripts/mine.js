import { getMines, getMinerals, getAvailableMinerals, getSelectedMine, setSelectedMine, getSelectedMineral } from "./database.js"


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
       const selectedMine = getSelectedMine()
       if (selectedMine.id === null) {
              let html = ""

              html += `<select class="mineName" name="mines" id="mines">`

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
       let html = ""

       html += `<select class="mineName" name="mines" id="mines">`

       html += `<option value="0">Select a Mine Facility</option>`

       const arrayMines = mines.map((mine) => {
              if (mine.active === true) {
                     if (mine.id === selectedMine.id) {
                            html += `<option selected value="${selectedMine.id}" name ="mine">${mine.name}</option>`
                     }
                     else {
                            html += `<option value="${mine.id}" name ="mine">${mine.name}</option>`
                     }
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
       const selectedMineral = getSelectedMineral()
       if (selectedMine.id === null) {
              let html = `<h2 class="facilityTitle">Facility Minerals</h2>`
              return html
       } else {
              let html = `<h2 class="facilityTitle">${selectedMine.name}</h2><ul>`
              const listItems = minerals.map(mineral => {
                     for (const selectedMineMineral of selectedMineMinerals) {
                            if (mineral.id === selectedMineMineral.mineralId) {
                                   if (selectedMineral.id === mineral.id) {
                                          return `<input type="radio" name="mineral" checked value="${mineral.id}" />${selectedMineMineral.mineralAmount} tons of ${mineral.name}`
                                   } else {
                                          return `
                                   <input type="radio" name="mineral" value="${mineral.id}" /> ${selectedMineMineral.mineralAmount} tons of ${mineral.name}
                                   `
                                   }
                            }
                     }
              })
              html += listItems.join("")
              html += "</ul>"

              if (selectedMine.id !== null) {
                     return html
              }
              else {
                     return " "
              }
       }
}

