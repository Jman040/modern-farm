import { createSoybean } from "./seeds/soybean.js"

import { createCorn } from "./seeds/corn.js"

import { createSunflower } from "./seeds/sunflower.js"

import { createAsparagus } from "./seeds/asparagus.js"

import { createWheat } from "./seeds/wheat.js"

import { createPotato } from "./seeds/potato.js"

import { addPlant } from "./field.js"

//create function with yearly plan as input(parameter)
//use for loop to iterate through array yearlyPlanning
//use if statements after for loop to iterate through child array

export const plantSeeds = (yearlyPlanning) =>{
    for (const plan of yearlyPlanning) {
        
        for (const plant of plan){
            if (plant === "Asparagus"){
                addPlant(createAsparagus())
            }
            else if (plant === "Soybean"){
                addPlant(createSoybean())
            }
            else if (plant === "Corn"){
                addPlant(createCorn())
            }
            else if (plant === "Sunflower"){
                    addPlant(createSunflower())
            }
            else if (plant === "Wheat"){
                addPlant(createWheat())
            }
            else if (plant === "Potato"){
                addPlant(createPotato())
            }
        }
    }
}