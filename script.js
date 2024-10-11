let grassCount = 0;
let dirtCount = 0;
let grassMultiplier = 1;

const grassCounter = document.getElementById('grassCounter');
const dirtCounter = document.getElementById('dirtCounter');
const getGrassButton = document.getElementById('getGrassButton');

getGrassButton.addEventListener('click', () => {
    // Increase grass count based on the current multiplier
    grassCount += grassMultiplier;
    
    // Update grass counter display
    grassCounter.textContent = `Grass: ${grassCount}`;

    // Check if grass count reaches 1e6 to unlock Dirt
    if (grassCount >= 1e6) {
        unlockDirt();
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

// Optional: Add settings functionality
document.getElementById('soundToggle').addEventListener('change', function() {
    if (this.checked) {
        // Add sound effect functionality here
        console.log("Sound effects enabled");
    } else {
        console.log("Sound effects disabled");
    }
});
