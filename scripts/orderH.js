import { getMinerals } from "./database.js"
import { getBoughtMinerals } from "./database.js"

const minerals = getMinerals()
const boughtMinerals =getBoughtMinerals()


export const orderHistory =()=>{

for (const mineral of minerals){
    for(const boughtMineral of boughtMinerals){
        if(mineral.id === boughtMineral.mineralId){
            let html =`<li>${boughtMineral.mineralAmount} ${mineral.name}</li>`
            return html
        }
    }
}

}


document.addEventListener(
    "click",
    (clickEvent)=>{
        const itemClicked =clickEvent
        if(itemClicked.id ==="orderButton"){
            orderHistory()
        }
    }
)