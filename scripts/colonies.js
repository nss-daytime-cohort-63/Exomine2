import { getColonies, getGovernors, setSelectedGovernor, getSelectedGovernor} from "./database.js"



export const buildColonyOptions = () => {
    const colonies = getColonies()
    const selectedGov = getSelectedGovernor()
        let html = ''
        for( const colony of colonies){
            if(selectedGov.colonyId===colony.id) {
               html= `${colony.name} display`
            }
        }
        return html
}

