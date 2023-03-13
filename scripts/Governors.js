import { getGovernors } from "./database.js"

const governors = getGovernors()

//export to exominer.js for html setup
export const Governors = () => {
    let html = `<select id="resource">`
    html += `<option value="0">Select Governor</option>`
    let governorsList = governors.map((governor) => {
        if (governor.active === true) {
            return `<option value="${governor.id}>${governor.name}</option>`
        }
    })
    html += governorsList.join('')
    html += "</select>"
    return html
}

//add event listener for setting the state