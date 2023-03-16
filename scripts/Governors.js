import { getGovernors, getSelectedGovernor } from "./database.js"


//export to exominer.js for html setup
export const Governors = () => {
    const governors = getGovernors()
    const selectedGovernor = getSelectedGovernor()
    if(selectedGovernor.id === null) {
    let html = `<select id="resource" class="govName">`
    html += `<option value="0">Select Governor</option>`
    let governorsList = governors.map((governor) => {
        if (governor.active === true) {
            return `<option value="${governor.id}">${governor.name}</option>`
        }
    })
    html += governorsList.join('')
    html += "</select>"
    return html
}  
    let html = `<select id="resource" class="govName">`
    html += `<option value="0">Select Governor</option>`
    let governorsList = governors.map((governor) => {
        if (governor.active === true) {
            if(selectedGovernor.id === governor.id) {
                return `<option selected value="${selectedGovernor.id}">${governor.name}</option>`
            } else {
                return `<option value="${governor.id}">${governor.name}</option>`
            }
        }
    })
    html += governorsList.join('')
    html += "</select>"
    return html
}

//add event listener for setting the state