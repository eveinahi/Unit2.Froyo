

// Object to store flavor counts
let flavorCounts = {};

// Function to prompt user for flavors and process the input
function promptForFlavors() {
// Prompt the user for comma-separated flavors
    let userInput = prompt("Enter a list of comma-separated froyo flavors:");
    
// Parse the input into an array of flavors
    let flavors = parseFlavors(userInput);
    
// Update the flavorCounts object with the parsed flavors
    updateFlavorCounts(flavors);
    
// Log the flavor counts to the console
    logFlavorCounts();
}

// Function to parse the user input into an array of flavors
function parseFlavors(input) {
    return input.split(',').map(flavor => flavor.trim());
}

// Function to update the flavorCounts object with each parsed flavor
function updateFlavorCounts(flavors) {
    flavors.forEach(flavor => {
        if (flavorCounts[flavor]) {
            flavorCounts[flavor] += 1;
        } else {
            flavorCounts[flavor] = 1;
        }
    });
}

// Function to log the flavor counts in the console
function logFlavorCounts() {
    console.table(flavorCounts);
}
