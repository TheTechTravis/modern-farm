import { addPlant, usePlants } from "./field.js";
import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";

console.log("Welcome to the main module")

// This code validates createPlan() functionality
// const yearlyPlan = createPlan()
// console.log(yearlyPlan)


// This code validates createSeed functionality {createCorn(), createAsparagus(), etc.}
// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

// This code validates addPlant functionality.
// let test = addPlant(createCorn())
// console.log(test)

createPlan()
addPlant()
usePlants()