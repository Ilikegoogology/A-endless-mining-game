let grassCount = 0;
let dirtCount = 0;
let grassMultiplier = 1;
let dollars = 0;

const grassCounter = document.getElementById('grassCounter');
const dirtCounter = document.getElementById('dirtCounter');
const dollarsCounter = document.getElementById('dollarsCounter');
const getGrassButton = document.getElementById('getGrassButton');
const sellGrassButton = document.getElementById('sellGrassButton');
const getDirtButton = document.getElementById('getDirtButton');

// Increase grass count when clicking the "Get Grass" button
getGrassButton.addEventListener('click', () => {
    grassCount += grassMultiplier;
    grassCounter.textContent = `Grass: ${grassCount}`;
    
    // Show "Get Dirt" button after 300 grass or 3 dirt
    if (grassCount >= 300 || dirtCount >= 3) {
        unlockDirtButton();
    }
});

function unlockDirtButton() {
    getDirtButton.style.display = 'inline-block';
}

// "Sell Grass" button logic (always available)
sellGrassButton.addEventListener('click', () => {
    const earnings = grassCount * 1.1235;
    dollars += earnings;
    grassCount = 0;

    // Update displays
    grassCounter.textContent = `Grass: ${grassCount}`;
    dollarsCounter.textContent = `Dollars: ${dollars}`;

    // If dirt conditions are met, ensure dirt is unlocked
    if (dirtCount >= 3) {
        unlockDirtButton();
    }
});

// "Get Dirt" button logic (unlocked after 300 grass or 3 dirt)
getDirtButton.addEventListener('click', () => {
    dirtCount++;
    grassMultiplier = 3;
    dirtCounter.style.display = 'block';
    dirtCounter.textContent = `Dirt: ${dirtCount}`;

    // Check if player has reached the dirt threshold
    if (dirtCount >= 3) {
        alert("You have unlocked a special dirt!");
        // Add further logic for what happens with dirt collection
    }
});

// Optional: Add settings functionality
document.getElementById('soundToggle').addEventListener('change', function() {
    if (this.checked) {
        console.log("Sound effects enabled");
    } else {
        console.log("Sound effects disabled");
    }
});
