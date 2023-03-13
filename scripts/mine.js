import { getMines, getMinerals } from "./database.js"

const mines = getMines()

let selectedMine = null

document.addEventListener(
       "change",
       (changeEvent) => {
              if (changeEvent.target.id === "mines"){
                     const selectedMineId = parseInt(changeEvent.target.value)
                     for (const mine of mines) {
                            if (mine.id === selectedMineId){
                                   selectedMine = {...mine}
                            }
                     }
                     checkSelectedMine(selectedMine, mineMinerals)
              }
       }
)

export const checkSelectedMine = (selectedMine, mineMinerals) => {
       let html = "<ul>"
       let selectedMineMinerals = []

       const minerals = getMinerals()
       const mineMinerals = getAvailableMinerals()

       //find matching mineMineral entry based on mine
       for (const mineMineral of mineMinerals){
              if (mineMineral.mineId === selectedMine.id){
                     selectedMineMinerals.push(mineMineral)
              }
       }

              const listItems = minerals.map(mineral => {
                     for (const selectedMineMineral of selectedMineMinerals){
                            if (mineral.id === selectedMineMineral.mineralId){
                                   return `<li>
                                          <input type="radio" name="mineral" value="${mineral.id}" /> 'mineral amount' tons of ${mineral.name}
                                   </li>`
                            }
                     }
              })
       html += listItems.join("")
       html += "</ul>"

       return html
}

export const Mines =() =>{
    let html=""
    
    html += `<select name="mines" id="mines">`
    
    html += `<option value="0">Select a Mine Facility</option>`
           
           const arrayMines = mines.map( (mine) =>{
            if(mine.active === true){
           return `<option value="${mine.id}" name ="mine">${mine.name}</option>`
            }
           }
           )
           
           html +=  arrayMines.join(``)
           html += "</select>"
    
           return html
       }