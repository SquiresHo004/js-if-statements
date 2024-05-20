// Hope Squires
// May 20, 2024
// JS IF Statements

// const knowsPython = "false";

// if (knowsPython) {
//     alert("You should start learning Python.");
// }



// const balance = prompt("How much money is in your bank account?");

// if (balance >= 100){
//     alert("Woohoo! You're rich!");
// }

// else {
//     alert("You should start adding $10.00 to your savings account every week.");
// }



function checkSeason(month){
    const seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
    const winter_months = [12, 1, 2];
    const spring_months = [3, 4, 5];
    const summer_months = [6, 7, 8]
    const fall_months = [9, 10, 11];

    if (winter_months.includes(month)) {
        return seasons[0];
    } else if (spring_months.includes(month)) {
        return seasons[1];
    } else if (summer_months.includes(month)) {
        return seasons[2];
    } else if (fall_months.includes(month)) {
        return seasons[3];
    } else {
        return "Invalid month number."
    }

} 

const month = parseInt(prompt("Enter any month's number 1 - 12 (Ex. May is 5.)"));
console.log(`It is the season: ${checkSeason(month)}`);

