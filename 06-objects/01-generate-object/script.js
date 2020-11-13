/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var me = {
        lastname: "szygo",
        firstname: "dim",
        age: "35",
        city: "gent",
        country: "bel"
    }

    document.getElementById("run").addEventListener("click", function () {
        // your code here
        console.log(me);
    });


})();
