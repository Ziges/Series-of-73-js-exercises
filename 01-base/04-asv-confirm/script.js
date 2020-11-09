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

       var age = prompt("your age?");
       var gender = prompt("male or female?");
       var town = prompt("town in which you live?");

    var responses = window.alert("Please confirm your responses - age: " + age + ", gender: " + gender + ", town: " + town);

    var confirm = prompt("Do you confirm?");

    if (confirm != "yes")
    {
        // return false;
        return age;
        return gender;
        return town;
        return responses;
        return confirm;
    }

    return true;

})();
