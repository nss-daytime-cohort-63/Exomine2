//import { Governors } from "./Governors.js"
//import { Mines } from "./mine.js"

//import { addCustomOrder } from "./database.js"


/*document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)*/



export const Exomine = () => {
    return `
        <h1>Solar System Mining Markertplace</h1>

        <div>
            <article class="choices">
                <section class="governors">
                <h3>Choose a governor</h3>
                </section>

                <section class="facilities">
                <h3>Choose a facility</h3>
                </section>
            </article>
                
            <article>
                <section class="colonies">
            
                </section>
            </article>
        </div>

        <div>
            <article class="customOrders">
            
            </article>

            <article>
                <h2>Space cart</h2>
                <button id="orderButton">Purchase Mineral</button>
            </article>

        </div> 
    `
}
