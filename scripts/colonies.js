import { getColonies, getSelectedGovernor} from "./database.js"



export const buildColonyOptions = () => {
    const colonies = getColonies()
    const selectedGov = getSelectedGovernor()

        for( const colony of colonies){
            if(selectedGov.colonyId===colony.id) {
              return`${colony.name} Display`
            }
        
        }
        return 'Colony Display'
}

