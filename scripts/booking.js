/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let perDayCost = 35;
let totalCost = 0;
var selectedDays = 0;
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");
let full = document.getElementById("full");
let half = document.getElementById("half");
let clear_button = document.getElementById("clear-button");
let costDisplay = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
const days = [monday, tuesday, wednesday, thursday, friday];
for (const day of days) {
    day.addEventListener("click", () => {
        if (day.classList.contains("clicked")) {
            return;
        }
        selectedDays++;
        calculateCost();
        day.classList.add("clicked");
    }
    );
}
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clear_button.addEventListener("click", () => {
    for (const day of days) {
        day.classList.remove("clicked");
    }
    selectedDays = 0;
    calculateCost();
}
);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
half.addEventListener("click", () => {
    perDayCost = 20;
    half.classList.add("clicked");
    full.classList.remove("clicked");
    calculateCost();
}
);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
full.addEventListener("click", () => {
    perDayCost = 35;
    full.classList.add("clicked");
    half.classList.remove("clicked");
    calculateCost();
}
);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateCost() {
    totalCost = selectedDays * perDayCost;
    costDisplay.innerHTML = totalCost;
}
