/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
   let target =  document.getElementById("target");

    // creates a <table> element and a <tbody> element
   let tbl = document.createElement("table");
   let tblBody = document.createElement("tbody");

   target.appendChild(tbl);

    // creating all cells
    for (let i = 0; i < 10; i++) {
        // creates a table row
        let row = document.createElement("tr");

        for (let j = 0; j < 1; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            let cell = document.createElement("td");
            let cellText = document.createTextNode("cell in row "+i+", column "+j);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }
// put the <tbody> in the <table>
    tbl.appendChild(tblBody);
// appends <table> into <body>
   target.appendChild(tbl);

})();





