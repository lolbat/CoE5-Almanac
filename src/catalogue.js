/**
 * CoE5 Browser - catalogue.js
 * @author Zac Belado
 */

import {catalogueData} from "./catalogueData.js"
import dialogs from "./dialogs.js"

const dialogMgr = new dialogs();

/**
 * a class to manage the import and storage of external data that the app will eventually try to load and display. 
 * @param {obj} currentDoc - the name of the document we are loading and displaying
 * @param {string} dataDirectory - the relative path to the directory where the files are stored
 * @param {array} docNames -the names of all of the documents as determined from the keys in the catalogueData object
 * @param {JQuery} displayElement - the JQuery reference to the  element we load the final HTML data into
 */
export default class catalogue {

    /**
     * build the class
     */
    constructor () {

        this.currentDoc = null;
        this.dataDirectory = "data/";
        this.docNames = Object.keys(catalogueData);
        this.displayElement = $('#tableArea');
        this.currentTable = null;

    }
    
    displayDetails(clickedRow) {
        
        // use the row selector that we have been sent to get the row index
        let thisRow = this.currentTable.row(clickedRow);
        let rowIndex = thisRow.index();

        // get the data from the JSON  storage
        let JSONData = this.currentDoc.json;
        let rootKeyName = Object.keys(JSONData)[0]; // all the tables that have a details popup have a single root key
        let selectedRow = JSONData[rootKeyName][rowIndex];
  
        //now render it
        let displayHTML = $.templates(this.currentDoc.modalTemplate).render(selectedRow);

        dialogMgr.displayDetailsModal(displayHTML);
        
    }
    
    displayError(errorText) {

      // hide the loading modal
      dialogMgr.closeLoadModal();
      
      // show the error modal with our error text
      dialogMgr.displayError(errorText);
      
    }
        
    finishDocumentLoad () {

        // clean up
        dialogMgr.closeLoadModal();
        
    }
    
    displayHTMLData () {

        // this gets called when the data has been loaded and rendered. So we pull the HTML data from the current doc var
        // and append it to the jQuery reference's html
        this.displayElement.empty();
        this.displayElement.append(this.currentDoc.html);
        
        let createDataTable = this.currentDoc.filepath.indexOf('.json') != -1;

        if (createDataTable) {
            
            // we need to assign the DataTables code to all of the tables created via JSON data
            let tableOptions = this.currentDoc.tableOptions;
            this.currentTable = new DataTable('#renderedDataTable', {scrollY:400, paging:false, columnDefs: tableOptions});
            
        }
        
        // finish the loading process
        this.finishDocumentLoad();

    }
            
    renderJSONData() {

        // get the template name and table options
        let templateName = this.currentDoc.template;
        let tableDefs = this.currentDoc.tableOptions;
        
        this.currentDoc.html  = $.templates(templateName).render(this.currentDoc.json);
        this.currentDoc.rendered = true;

        this.displayHTMLData();
        
    }

    storeDataResult(dataResult) {

        let dataIsJson = this.currentDoc.filepath.indexOf('.json') != -1;
        
        this.currentDoc.loaded = true;
        
        // lets see what type of data we have
        if (dataIsJson) {
            
            // we have a JSON object
            this.currentDoc.json = dataResult;
            this.renderJSONData();
            
        } else {
            
            // must be HTML 
            this.currentDoc.html = dataResult;
            this.currentDoc.rendered = true; // save this for the HTML data

            this.displayHTMLData();
            
        }

    }
    
    loadHTML(filePath) {
        
        // use the jQuery .get() function to load the HTML data.
        let me = this; // this is a contextual variable in JS so we need to store a reference to it to use it in the async functions.
        
        $.get(filePath)
                
          .done(function( data ) {
            me.storeDataResult(data);
          })
          
          .fail(function( jqxhr, textStatus, error ) {
 
            let err = `${textStatus}, ${error}`;
            me.displayError(`Request to load: ${filePath} failed with error ${err}` );
            console.error( `Request to load: ${filePath} failed with error ${err}` );
            
        });
                
    }
    
    loadJSON(filePath) {
        
        // use the jQuery .getJSON method to load the JSON data
        let me = this; // this is a contextual variable in JS so we need to store a reference to it to use it in the async functions.
        
        $.getJSON(filePath)
    
          .done(function( data ) {
            me.storeDataResult(data);
          })
          
          .fail(function( jqxhr, textStatus, error ) {
 
            let err = `${textStatus}, ${error}`; 
            me.displayError(`Request to load: ${filePath} failed with error ${err}` );
            console.error( `Request to load: ${filePath} failed with error ${err}` );
            
        });
                
    }
    
    loadExternalData() {

        // build a path and set the jQuery JSON function or the get function to load the data
        let filePath = `${this.dataDirectory}${this.currentDoc.filepath}`;
        let dataIsJson = this.currentDoc.filepath.indexOf('.json') != -1;
        
        // build an informative text string so the user knows what is going on
        let modalText = `Loading data from ${filePath}`
        
        // clear out the display element
        this.displayElement.empty;
        
        //display the modal load message
        dialogMgr.displayLoadModal(modalText);

        if (dataIsJson) {
            this.loadJSON(filePath);
        } else {
            this.loadHTML(filePath);
        }

    }

    loadDocument(documentName) {

        // load the data for the document
        
        // store the current doc for possible later use
        this.currentDoc = catalogueData[documentName];

        // make sure we have an object
        if (this.currentDoc !== undefined) {
            
            // check to see if the document has been loaded
            // since we are down a contextual level 'this' won't work any more
            if (this.currentDoc.loaded) {
                
                // we have the data already
                //do we have a rendered version of it?
                if (this.currentDoc.rendered) {
                    
                    // we have some so just display it
                    this.displayHTMLData();

                } else {
                    
                    // do we have JSON data?
                    if (this.currentDoc.json !== '') {
                        
                        // render the JSON data
                        this.renderJSONData();
                        
                    } else {
                        
                        // how is it marked as loaded but not actually loaded?
                        console.warning(`Data for ${documentName} was marked as loaded but no data was present`);
                        this.loadExternalData();
                        
                    }

                } //if doc loaded 
                
            } else {
                
                // so no data so we need to load the JSON or html 
                this.loadExternalData();
                
            }
            
        } else {
            
            this.displayError(`Unable to determine  file data for document name: ${documentName}`);
            console.error(`Unable to determine  file data for document name: ${documentName}`);
            
        }
        
    }
    
    /**
     * test to see if a document has been loaded already
     * @param {string} docName - the name of the document. Defined in catalogueData
     * @returns {boolean} - returns true or false
     * @returns {string} - returns an error string if the name can't be found
     */
    checkLoadState (docName) {
        
        // first see if we have a doc by that name
        if (docNames.indexOf(docName) !== -1) {
            return catalogueData[docName].loaded;
        }
        
        // so if we are here then there wasn't a doc by that name so return a string with an error message
        return `Unable to find a document by the name of ${docName}`;
        console.error(`Unable to find a document by the name of ${docName}`);
        
    }
    
}