/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here

    var response = false;

    while (response === false)
    {
        var age = prompt("your age?");
        var gender = prompt("male or female?");
        var town = prompt("town in which you live?");
        var response = confirm("Please confirm your responses - age: " + age + ", gender: " + gender + ", town: " + town);
    }

    // var age = prompt("your age?");
    // var gender = prompt("male or female?");
    // var town = prompt("town in which you live?");
    // var response = confirm("Please confirm your responses - age: " + age + ", gender: " + gender + ", town: " + town);
    //
    // if (response == false) {
    // recall the function above - give it a name in that case.
    // }
    //
    //

})();
