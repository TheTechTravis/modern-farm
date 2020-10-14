let currentPlantsGrowing = []

// Check if the seedObj being pushed is an array via .isArray() method
// 
// Conditional Logic: 
// If it is
    // Iterate through the array and push each object
// If it isn't
    // push object

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj) === true) {
        for (const arrayIndex of seedObj) {
            currentPlantsGrowing.push(arrayIndex)
        }
    }
    else {
        currentPlantsGrowing.push(seedObj)
    }
    return currentPlantsGrowing
}

// Create a copy of currentPlantsGrowing array, so as to not mutate thhe original array.
export const usePlants = () => {
    return currentPlantsGrowing.slice()
}