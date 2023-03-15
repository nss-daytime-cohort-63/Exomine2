const database = {
    transientState: {
        selectedGov:{id: null, name: null, colonyId:null, active: null},
        selectedMine: {id: null, name: null, active: null}
    },
    governors: [
        { id: 1, name: "John Smith", colonyId: 1, active: true },
        { id: 2, name: "Jane Doe", colonyId: 2, active: true },
        { id: 3, name: "Jack Husein", colonyId: 1, active: true },
        { id: 4, name: "Will Smith", colonyId: 3, active: true },
        { id: 5, name: "Barack Obama", colonyId: 5, active: true },
        { id: 6, name: "Michelle Obama", colonyId: 5, active: true },
        { id: 7, name: "Hillary Clinton", colonyId: 4, active: true },
        { id: 8, name: "Donald Trump", colonyId: 2, active: true },
        { id: 9, name: "Mr. Junior", colonyId: 4, active: false },
        { id: 10, name: "Mrs. Junior", colonyId: 4, active: true },
        { id: 11, name: "Mr. Senior", colonyId: 3, active: true }
    ],
    colonies: [
        { id: 1, name: "Gorp" },
        { id: 2, name: "Glop" },
        { id: 3, name: "Glee" },
        { id: 4, name: "Glooo" },
        { id: 5, name: "Moo" }
    ],
    mines: [
        { id: 1, name: "Mine 1", active: true },
        { id: 2, name: "Mine 2", active: true },
        { id: 3, name: "Mine 3", active: false },
        { id: 4, name: "Mine 4", active: true }
    ],
    mineMinerals: [
        { id: 1, mineId: 1, mineralId: 1, mineralAmount: 10 },
        { id: 2, mineId: 2, mineralId: 1, mineralAmount: 11 },
        { id: 3, mineId: 3, mineralId: 1, mineralAmount: 9 },
        { id: 4, mineId: 4, mineralId: 1, mineralAmount: 8 },
        { id: 5, mineId: 1, mineralId: 2, mineralAmount: 8 },
        { id: 6, mineId: 2, mineralId: 3, mineralAmount: 8 },
        { id: 7, mineId: 3, mineralId: 2, mineralAmount: 8 },
        { id: 8, mineId: 4, mineralId: 3, mineralAmount: 8 }
    ],
    minerals: [
        { id: 1, name: "iron" },
        { id: 2, name: "magnesium" },
        { id: 3, name: "sulfur" }
    ],
    colonyMinerals: [
        { id: 1, colonyId: 1, mineralId: 1, mineralAmount: 2}
    ]
}

//setters to temporarily change state
// basically stores part of order in order builder (transientState)

//definitely need a colonyId, mineralId, and mineralAmount (just 1 for each click) stored in colonyMinerals
export const setColony = (colonyId) => {
    database.transientState.selectedColony = colonyId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setMineral = (mineralId) => {
    database.transientState.selectedMineral = mineralId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

//if problems, look at this setter
export const setMineralAmount = (minAmount) => {
    if (database.transientState.mineralAmount = null) {
        database.transientState.mineralAmount = minAmount
    }
    else {
        database.transientState.mineralAmount += minAmount
    }
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

//getters to retrieve copy of state
export const getFacilities = () => {
    return database.facilities.map(f => ({ ...f }))
}

export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}

export const getColonies = () => {
    return database.colonies.map(colony => ({ ...colony }))
}

export const getMines = () => {
    return database.mines.map(mine => ({ ...mine }))
}

export const getMinerals = () => {
    return database.minerals.map(mineral => ({ ...mineral }))
}

export const getAvailableMinerals = () => {
    return database.mineMinerals.map(mineral => ({ ...mineral }))
}

export const getBoughtMinerals = () => {
    return database.colonyMinerals.map(mineral => ({ ...mineral }))
}

//function to permanently change state (FINISH LATER)
export const purchaseMineral = () => {

    // Broadcast custom event to entire documement so that the
    // application can re-render and update state
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getSelectedMine = () => {
    return database.transientState.selectedMine
}

export const setSelectedGovernor = (gov) => {
    database.transientState.selectedGov = gov
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setSelectedMine = (mine) => {
    database.transientState.selectedMine = mine
    document.dispatchEvent(new CustomEvent("stateChanged"))
}



export const getSelectedGovernor = () => {
       return database.transientState.selectedGov

}

export const setSelectedMineral = (mineral) => {
        database.transientState.selectedMineral = mineral
       document.dispatchEvent(new CustomEvent("stateChanged")) }