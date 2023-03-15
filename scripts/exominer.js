import { Governors } from "./Governors.js"
import { Mines } from "./mine.js"
import { cartMineral } from "./mineralSet.js"
import { buildColonyOptions } from "./colonies.js"


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
                ${Governors()}
                </section>
    
                <section class="facilities">
                <h3>Choose a facility</h3>
                ${Mines()}
                </section>
            </article>
                
            <article>
                <section class="colonies">
                ${buildColonyOptions()}
                </section>
            </article>
        </div>
        
        <div id="MineralOptions">
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
