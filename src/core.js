/**
 * CoE5 Browser - core.js
 * @author Zac Belado
 */

 import {tableData, catalogueData, tableObj} from "./catalogueData.js"
 import catalogue from "./catalogue.js"
 
 /**
  * the catalogue that will store all of the data that we load and allow access to it
  * @type {object}
  */
const objCatalogue = new catalogue();

/**
 * use the array we loaded to build a menu of the modding tables
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
    let tableType = this.dataset['tabletype'];
    let row = $(this).closest('tr');

    let thisRow = currentTable.row(row); //dataTables uses selectors to find specific rows in a table
    let rowIndex = thisRow.index();

    // ask the dataMgr for all the data at this row index
    let fullData = objDataMgr.getDataByIndex(tableType, rowIndex);
  
    // lets render the details for this data
    let renderTemplate = templateNames[tableType]['modalTemplate'];
    let modalHTML = $.templates(renderTemplate).render(fullData);
    
    // build the modal
    let myModal = new bootstrap.Modal(document.getElementById('descriptionModal'));

    $('#modalContent').empty();
    $('#modalContent').append(modalHTML);
    
    // show the modal
    myModal.show();
    
});

// !onClick docButton
/**
 * Load the table(s) that represent the data the user wants
 * @param {JQuery} this - a selector for the button the user clicked on
 */
$(document).on('click', '.documentButton', function() {

    // clear out the table area
    $('#tableArea').empty();
    
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