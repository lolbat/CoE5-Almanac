/**
 * CoE5 Browser - core.js
 * @author Zac Belado
 */

 import {tableObj} from "./catalogueData.js"
 import catalogue from "./catalogue.js"
 
/**
  * the catalogue that will store all of the data that we load and allow access to it
  * @type {object}
  */
const objCatalogue = new catalogue();

/**
 * use the tableObj data we loaded to build a menu of the modding tables
 */
function buildTableMenu() {
    
    // send the table data to the render template and then stick it in the DOM
    let menuHTML = $.templates('#modTableNavTemplate').render(tableObj);
    $('#modTableList').empty();
    $('#modTableList').append(menuHTML);
    
}

// !onClick viewDescription
/**
 * Determine the row in the table the user clicked on and provide them
 * all the data for the row they clicked on. There is a different template for each type of record
 * @param {JQuery} this - a selector for the viewDescription icon the user clicked
 */
$(document).on('click', '.viewDescriptionIcon', function() {

    // show the command description in a popup.
    let row = $(this).closest('tr');
    
    // tell the catalogue class to display the details for this row
    objCatalogue.displayDetails(row);
    
});

// !onClick docButton
/**
 * Load the table(s) that represent the data the user wants
 * @param {JQuery} this - a selector for the button the user clicked on
 */
$(document).on('click', '.documentButton', function() {

    // get the name from the data-docname attribute
    let docName = this.dataset['docname'];

    //tell the catalogue object to show it
    objCatalogue.loadDocument(docName);
    
});

// !document ready
$(document).ready(function() {
  
  // build the menu for the individual tables
  buildTableMenu();
    
}); 