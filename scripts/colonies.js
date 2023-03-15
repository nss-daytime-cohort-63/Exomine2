import { getColonies, getSelectedGovernor} from "./database.js"



export const buildColonyOptions = () => {
    const colonies = getColonies()
    const selectedGov = getSelectedGovernor()

        for( const colony of colonies){
            if(selectedGov.colonyId===colony.id) {
              return`<h2 class='colonyName'>${colony.name} Display</h2>`
            }
        
        }
        return `<h2 class='colonyName'>Colony Display</h2>`
}

