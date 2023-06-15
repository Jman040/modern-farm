


//make a function that iterates through plant array
//use an if statement to filter out the corn case
//use else to make all other cases return into seed array
//if the plant output is more than 1 output the object for each

export const harvestPlants = (currentPlants) => {
    let seedArray = []
    for (const plant of currentPlants){
        if (plant.type === "Corn"){
            for (let i = 0; i < (plant.output / 2); i++){
                seedArray.push(plant)
            }
        }
        else {
            for (let i = 0; i < plant.output; i++){
                seedArray.push(plant)
            }
        }
    }
    return seedArray
    }

