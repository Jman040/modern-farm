

let currentPlants = []

//create function which iterates through array seed
//seed is undefined but thats ok
//use array.isarray to filter through corn function
//use for loop to filter and push corn object to current plants

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        for (const corn of seed){
        currentPlants.push(corn)
}
    }
    else {
        currentPlants.push(seed) 
    }
}

export const usePlants = () => {
    console.log(currentPlants)
    return currentPlants
}
