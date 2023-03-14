import { getColonies, getGovernors, } from "./database.js"

document.addEventListener(
    "change",
    (changeEvent) => {
           const govs = getGovernors()
           if (changeEvent.target.id === "resource") {
                  const selectedGovId = parseInt(changeEvent.target.value)
                  for (const gov of govs) {
                         if (gov.id === selectedGovId) {
                                setSelectedMine(gov)
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

/*
import { getGovernors } from "./database.js";
import { getColonies } from "./database.js"
import { getTransientState } from "./database.js";
import { getTransientStateColony } from "./database.js";



export const colonyDisplay = () => {
    let html = '<h2>Colony Display</h2>'
    
    //get the current state for selected colony 
    //if you find a governor/colony display that data
    //if you dont find a governor/colony display the default colony display
    
    const colonies = getColonies()
    const govs = getGovernors()
    const tranColony = getTransientStateColony()

    const transientState = getTransientState()

   const govFound=govs.find((gov) =>  {
        return gov.id === transientState.selectedGovernor
   
})
    
    const colonyFound=colonies.find((colony) => {

        return colony.id=== transientState.selectedColony.id
    })

    if(govFound.colonyId===colonyFound.id){
        
        html=`<h2>${colonyFound.name} display</h2>`
        return html
    }
    else{
        return html
    }
} */