const exerciseButton = document.getElementById('exercisebutton');
exerciseButton.addEventListener('click', addExercise);

// Function to add a new exercise card
function addExercise() {
    // Create a new card container
    const card = document.createElement('div');
    card.classList.add('exercise-card'); // Add a class for styling

    // Add a title to the card
    const cardTitle = document.createElement('h2');
    cardTitle.textContent = "New Exercise Title"; // Example title
    cardTitle.classList.add('exname'); // Add a class for styling

    // Create a sw-container div
    const swContainer = document.createElement('div');
    swContainer.classList.add('sw-container');

    // Create the "Add Set & Weight" button
    const addSWButton = document.createElement('button');
    addSWButton.textContent = "+ Add Set & Weight";
    addSWButton.classList.add('button-animation-one');
    addSWButton.addEventListener('click', () => addSW(swContainer)); // Pass the swContainer to addSW

    // Create the result display area
    const result = document.createElement('div');
    result.classList.add('result');
    result.textContent = "Total Set Weight: 0";

    // Append the title, sw-container, button, and result to the card
    card.appendChild(cardTitle);
    card.appendChild(swContainer);
    card.appendChild(addSWButton);
    card.appendChild(result);

    // Append the card to the parent element with class 'sheet'
    const sheet = document.querySelector('.sheet');
    sheet.appendChild(card);
}

// Function to add a set and weight input inside a specific exercise
function addSW(container) {
    // Create a new div for the set and weight inputs
    const newSW = document.createElement('div');
    newSW.classList.add('set-weight-entry');

    // Create the set input
    const newSet = document.createElement('input');
    newSet.type = "number";
    newSet.className = "set";
    newSet.placeholder = "Set";

    // Create the weight input
    const newWeight = document.createElement('input');
    newWeight.type = "number";
    newWeight.step = "0.01";
    newWeight.className = "weight";
    newWeight.placeholder = "Weight";

    // Create the Done button
    const doneButton = document.createElement("button");
    doneButton.textContent = "Do Math";
    doneButton.addEventListener('click', (e) => doMath(e.target.closest('.exercise-card'))); // Pass the parent card

    // Append the inputs and button to the newSW div
    newSW.appendChild(newSet);
    newSW.appendChild(newWeight);
    newSW.appendChild(doneButton);

    // Append the newSW div to the container passed as an argument
    container.appendChild(newSW);
}

// Function to calculate the total weight for a specific exercise card
function doMath(card) {
    // Find all set and weight inputs within this card
    const sets = card.querySelectorAll('.set');
    const weights = card.querySelectorAll('.weight');
    let totalProduct = 0;

    // Loop through the inputs and calculate the total
    sets.forEach((set, index) => {
        const setValue = parseFloat(set.value) || 0;
        const weightValue = parseFloat(weights[index].value) || 0;
        totalProduct += setValue * weightValue;
    });

    // Update the result div within this card
    const result = card.querySelector('.result');
    result.textContent = `Total Set Weight: ${totalProduct}`;
}

//adds reset after click on button
document.getElementById('new').addEventListener('click', () => {
    const button = document.getElementById('new');

    // Remove the animation class to reset it
    button.classList.remove('button-animation-one');

    // Trigger reflow to restart the animation
    void button.offsetWidth;

    // Add the animation class back
    button.classList.add('button-animation-one');
});