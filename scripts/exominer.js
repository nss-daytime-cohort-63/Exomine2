import { Governors } from "./Governors.js"
import { buildMineralOptions, Mines } from "./mine.js"
import { cartMineral } from "./mineralSet.js"
import { buildColonyOptions } from "./colonies.js"
import { orderHistory } from "./orderH.js"


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
        <div class='headerContainer'>
        <h1 class='header'>Solar System Mining Markertplace</h1>
        </div>

        <div class="imgContainer">
        <img src="../images/space.jpg" class='img'>
        </div>

        <div class='mainContainer'>
            <article class="choices">
                <section class="governors">
                <h3 class="titles">Choose a governor</h3>
                ${Governors()}
                </section>
    
                <section class="facilities">
                <h3 class="titles">Choose a facility</h3>
                ${Mines()}
                </section>
            </article>
                
            <article class='colonyContainer'>
                <section class="colonies">
                <section class="colonytitle">
                ${buildColonyOptions()}
                </section>
                <section class='orders'>
                ${orderHistory()}
                </section>
                </section>
            </article>
        </div>
        
   
        <div class='bottomContainer'>

            <article class="customOrders">
                <div class='titleAndMins'>

                    <div class="facilityTitle">
                    </div>

                    <div class="mineralDisplay">
                    ${buildMineralOptions()}
                    </div>
                    
                    </div>
                    </article>
                    
                    <article class='spaceCartContainer'>
                    <div class='spaceCart'>
                    
                    <h2 class='spaceCartTitle'>
                    Space Cart
                    </h2>
                    
                    <div class='cartDisplay'>
                    
                    <div class="cart">
                    ${cartMineral()}
                    </div>
                    
                    <button id="orderButton">
                    Purchase Mineral
                    </button>
                    
                    </div>
                    
                    </div>
                    </article>

        </div> 
    `
}
