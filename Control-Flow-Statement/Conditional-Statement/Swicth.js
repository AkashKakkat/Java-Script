const prompt = require('prompt-sync')();
let day = prompt("Enter the Dayy :");



switch (day) {
    case "Monday":
        console.log("It's MONDAYY..!!!");
        break;
    case "Tuesday":
        console.log("It's TUESDAYY..!!!");
        break;
    case "Sunday":
        console.log("It's SUNDAYY..!!!");
        break;


    default:
        console.log("U R FOOOL...!!!");

        break;
}