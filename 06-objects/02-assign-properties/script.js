/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    // your code here

    document.getElementById("run").addEventListener("click", function () {
        // your code here

        //a forEach doesn't work here below because the element in a forEach function is a copy, not a reference.
        // so if item is assigned as per below it wouldn't affect the array. With a for loop we don't have this problem.
        // computers.forEach(function (item) {
        //     item = { ...defaultProps, ...item }; OR Object.assign(computers, defaultProps);
        // });

        //merge objects using Object.assign for every index[i] in computers
        for (let i = 0; i < computers.length; i++) {
            var newObj = new Object();
            Object.assign(newObj, defaultProps);
            Object.assign(newObj, computers[i]);
            computers[i] = newObj;
        }
        console.log(computers);
    });
})();

// in uw code ging hij de defaultprops in een element van computers steken.
// Dus heb ik gewoon een newObj gemaakt eerst daar defaultprops aan toegevoegd en daarna het computers element.
// Dan assign je dat aan computers[i] (overschrijf je het element).