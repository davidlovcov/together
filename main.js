let nooblyDate = new Date("09/11/2024");
let realDate = new Date("09/29/2024");
let currentDate;

let timeDifferenceNoobly;
let timeDifferenceReal;

let daysTogetherNoobly;
let daysTogetherReal;

document.addEventListener("DOMContentLoaded", (event) => {
    let yearsTogetherNooblyText = document.getElementById('noobly-years-together');
    let monthsTogetherNooblyText = document.getElementById('noobly-months-together');
    let daysTogetherNooblyText = document.getElementById('noobly-days-together');
    let hoursTogetherNooblyText = document.getElementById('noobly-hours-together');

    let yearsTogetherRealText = document.getElementById('real-years-together');
    let monthsTogetherRealText = document.getElementById('real-months-together');
    let daysTogetherRealText = document.getElementById('real-days-together');
    let hoursTogetherRealText = document.getElementById('real-hours-together');

    setInterval(function() {
        currentDate = new Date();
        
        timeDifferenceNoobly = currentDate.getTime() - nooblyDate.getTime();
        timeDifferenceReal = currentDate.getTime() - realDate.getTime();

        // --------------------------------------------------------------- //
        
        // Hours 
        let hoursTogether = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + " Stunden"
        hoursTogetherNooblyText.textContent = hoursTogether;
        hoursTogetherRealText.textContent = hoursTogether;

        // --------------------------------------------------------------- //

        // Days
        // Noobly
        daysTogetherNoobly = parseInt(timeDifferenceNoobly / (1000 * 3600 * 24));
        if (daysTogetherNoobly % 30 > 1 || daysTogetherNoobly % 30 == 0) {
            daysTogetherNooblyText.textContent = daysTogetherNoobly % 30 + " Tage";
        } else {
            daysTogetherNooblyText.textContent = daysTogetherNoobly % 30 + " Tag";
        }

        // Real
        daysTogetherReal = parseInt(timeDifferenceReal / (1000 * 3600 * 24));
        if (daysTogetherReal % 30 > 1 || daysTogetherReal % 30 == 0) {
            daysTogetherRealText.textContent = daysTogetherReal % 30 + " Tage";
        } else {
            daysTogetherRealText.textContent = daysTogetherReal % 30 + " Tag";
        }

        // --------------------------------------------------------------- //

        // Months
        // Noobly
        let monthsTogetherNoobly = parseInt(daysTogetherNoobly / 30);
        if (monthsTogetherNoobly > 1 || monthsTogetherNoobly == 0) {
            monthsTogetherNoobly += " Monate";
        } else {
            monthsTogetherNoobly += " Monat";
        }
        monthsTogetherNooblyText.textContent = monthsTogetherNoobly;

        // Real
        let monthsTogetherReal = parseInt(daysTogetherReal / 30);
        if (monthsTogetherReal > 1 || monthsTogetherReal == 0) {
            monthsTogetherReal += " Monate";
        } else {
            monthsTogetherReal += " Monat";
        }
        monthsTogetherRealText.textContent = monthsTogetherReal;

        // --------------------------------------------------------------- //

        // Years
        // Noobly
        let yearsTogetherNoobly = parseInt(daysTogetherNoobly / 365);
        if (yearsTogetherNoobly > 1 || yearsTogetherNoobly == 0) {
            yearsTogetherNoobly += " Jahre";
        } else {
            yearsTogetherNoobly += " Jahr";
        }
        yearsTogetherNooblyText.textContent = yearsTogetherNoobly;

        // Real
        let yearsTogetherReal = parseInt(daysTogetherReal / 365);
        if (yearsTogetherReal > 1 || yearsTogetherReal == 0) {
            yearsTogetherReal += " Jahre";
        } else {
            yearsTogetherReal += " Jahr";
        }
        yearsTogetherRealText.textContent = yearsTogetherReal;

        
    }, 1000); 
});