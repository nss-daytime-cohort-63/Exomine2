import { Exomine } from "./exominer.js"
import { getColonies, getGovernors, setSelectedGovernor, getSelectedGovernor} from "./database.js"
import { buildColonyOptions } from "./colonies.js"

document.addEventListener(
    "change",
    (changeEvent) => {
           const govs = getGovernors()
           if (changeEvent.target.id === "resource") {
                  const selectedGovId = parseInt(changeEvent.target.value)
                  for (const gov of govs) {
                         if (gov.id === selectedGovId) {
                                setSelectedGovernor(gov)
                         }
                  }
                  if (selectedGovId === 0) {
                          
                  }
                  else {
                         document.querySelector("#ColonyOptions").innerHTML = buildColonyOptions()
                  }
           }
    }
)

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = Exomine()
}

renderAllHTML()



