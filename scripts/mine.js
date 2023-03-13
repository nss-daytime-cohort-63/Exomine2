export const Mines =() =>{
    let html=""
    
    
    
    
    html += `<select name="mines" id="mines">`
    
    html += `<option value="0">Select a Mine Facility</option>`
           
           const arrayMines = mines.map( (mine) =>{
            if(mine.active === true){
           return `<option value="${mine.id}" name ="mine">${mine.name}</option>`
            }
           }
           )
           
           html +=  arrayMines.join(``)
           html += "</select>"
    
           return html
           
    
        
    
    }