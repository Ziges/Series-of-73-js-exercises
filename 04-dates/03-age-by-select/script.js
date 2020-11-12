/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById("run").addEventListener("click", function () {

        // your code here

    let birthYear = Number(document.getElementById("dob-year").value);
    let birthMonth = Number(document.getElementById("dob-month").value);
    let birthDay = Number(document.getElementById("dob-day").value);

    //convert months to years
    let months = (birthMonth / 12);

    //convert days to years
    let days = birthDay / 365;

    let total = birthYear + months + days;

    console.log(total);

    //snippet to calculate day of year
        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);
        //convert day to years
        let currentDays = day / 365;

    let currentYearAndDays = new Date().getFullYear() + currentDays;

    console.log(currentYearAndDays);

    let age = Math.floor(currentYearAndDays - total);
        console.log(age);

    alert('you are ' + age + ' years old.');

});

})();
