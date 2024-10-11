let grassCount = 0;
let dirtCount = 0;
let grassMultiplier = 1;
let dollars = 0;

const grassCounter = document.getElementById('grassCounter');
const dirtCounter = document.getElementById('dirtCounter');
const dollarsCounter = document.getElementById('dollarsCounter');
const getGrassButton = document.getElementById('getGrassButton');
const sellGrassButton = document.getElementById('sellGrassButton');

getGrassButton.addEventListener('click', () => {
    // Increase grass count based on the current multiplier
    grassCount += grassMultiplier;
    
    // Update grass counter display
    grassCounter.textContent = `Grass: ${grassCount}`;

    // Check if grass count reaches 1e6 to unlock Dirt
    if (grassCount >= 1e6) {
        unlockDirt();
    }
    
    // Show the Sell Grass button if there is any grass
    if (grassCount > 0) {
        sellGrassButton.style.display = 'inline-block';
    }
});

function unlockDirt() {
    // Show dirt counter and button to convert grass to dirt
    dirtCounter.style.display = 'block';
    
    // Increase dirt count and grass multiplier
    dirtCount++;
    grassMultiplier = 3;

    // Update dirt counter display
    dirtCounter.textContent = `Dirt: ${dirtCount}`;
    
    // Disable button to prevent additional grass collecting
    getGrassButton.disabled = true;
}

// Add functionality for the Sell Grass button
sellGrassButton.addEventListener('click', () => {
    // Calculate earnings from selling grass
    const earnings = grassCount * 1.1235;
    
    // Update dollars count
    dollars += earnings;
    
    // Reset grass count
    grassCount = 0;

    // Update displays
    dollarsCounter.textContent = `Dollars: ${dollars}`;
    grassCounter.textContent = `Grass: ${grassCount}`;
    
    // Hide Sell Grass button if there is no grass left
    sellGrassButton.style.display = 'none';
});

// Optional: Add settings functionality
document.getElementById('soundToggle').addEventListener('change', function() {
    if (this.checked) {
        // Add sound effect functionality here
        console.log("Sound effects enabled");
    } else {
        console.log("Sound effects disabled");
    }
});
