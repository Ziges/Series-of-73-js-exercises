/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here

    document.getElementById("run").addEventListener("click", function () {
        // 1. combine two arrays with map method
        const array = keys.map((el, i) => {
            return [keys[i], values[i]];
        });
        // [["name", "Skitty"], ["species", "cat"], [...]...]

        // 2. then convert it with Object.fromEntries method
        var output = Object.fromEntries(array);
        console.log(output);
        // {name: "Skitty", species: "cat", age: 9, gender: "female", color: "tabby"}
    });

})();
