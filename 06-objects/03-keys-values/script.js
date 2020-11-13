/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    // your code here
    document.getElementById("run").addEventListener("click", function () {
    // Object.values() converts an object to an array.
    console.log(Object.values(person));

    // Object.getOwnPropertyNames() method returns an array of all properties found directly in a given object.
    console.log(Object.getOwnPropertyNames(person));
    //OR
    console.log(Object.keys(person));
    });
})();
