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
