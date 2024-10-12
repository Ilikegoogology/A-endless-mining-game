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
const sellAllButton = document.getElementById('sellAllButton');

let dirtAlertEnabled = true;

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

// "Get Dirt" button logic
getDirtButton.addEventListener('click', () => {
    dirtCount++;
    grassMultiplier = 3;
    dirtCounter.style.display = 'block';
    dirtCounter.textContent = `Dirt: ${dirtCount}`;

    // Show "Sell All" button after 15 dirt
    if (dirtCount >= 15) {
        dirtAlertEnabled = false;  // Stop showing alerts after 15 dirt
        sellAllButton.style.display = 'inline-block';
    }

    // Show alert until 15 dirt is collected
    if (dirtAlertEnabled && dirtCount < 15) {
        alert("You have unlocked a special dirt!");
    }
});

// "Sell All" button logic (appears after 15 dirt)
sellAllButton.addEventListener('click', () => {
    dollars += (grassCount * 1.1235) + (dirtCount * 100);  // Adjust as needed for dirt value
    grassCount = 0;
    dirtCount = 0;
    grassMultiplier = 1;

    // Update displays
    grassCounter.textContent = `Grass: ${grassCount}`;
    dirtCounter.textContent = `Dirt: ${dirtCount}`;
    dollarsCounter.textContent = `Dollars: ${dollars}`;

    // Hide "Sell All" button after selling all
    sellAllButton.style.display = 'none';
});

// Optional: Add settings functionality
document.getElementById('soundToggle').addEventListener('change', function() {
    if (this.checked) {
        console.log("Sound effects enabled");
    } else {
        console.log("Sound effects disabled");
    }
});
