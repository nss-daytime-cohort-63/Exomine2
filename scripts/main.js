import { Exomine } from "./exominer.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = Exomine()
}

renderAllHTML()