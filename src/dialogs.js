/**
 * CoE5 Browser - dialogs.js
 *
 * @author Zac Belado
 */
 
 /**
  * a class to manage displaying bootstrap modal dialogs to the user
  * @param {DOM} loadingModal - a DOM reference to the Bootstrap modal we display when showing text
  * @param {DOM} errorModal - a DOM reference to the Bootstrap modal we display when showing an error
  * @param {DOM} detailsModal - a DOM reference to the Bootstrap modal we display when showing the user details of a record
  * @param {DOM} loadingText - the DOM reference to the text element
  * @param {DOM} errorText - the DOM reference to the  element that we display the error text into
  * @param {DOM} detailsText - the DOM reference to the  element that we display the details text into
  */
  
export default class dialogs {
    
    constructor() {
        
        this.errorModal = new bootstrap.Modal(document.getElementById('loadingError'), {
                backdrop: true,
                keyboard:true,
                focus:true
            });
        
        this.loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'), {
                backdrop:"static",
                keyboard:false,
                focus:true
            });
        
        this.detailsModal = new bootstrap.Modal(document.getElementById('detailsModal'), {
                backdrop:true,
                keyboard:true,
                focus:true
            });
            
        this.detailsText =  document.getElementById('detailsModalText');
        this.loadingText = document.getElementById('loadingModalText');
        this.errorText = document.getElementById('errorModalText');
        
    }
    
    displayError(errorMessage){
        
        // clear out the old text and add the new text
          this.errorText.textContent = "";
          this.errorText.append(errorText);

          // show the error modal
          this.errorModal.show();
          
    }
    
    displayLoadModal(loadingMessage) {
        
        //display the modal load message
        this.loadingText.textContent = "";
        this.loadingText.append(loadingMessage);
        
        // display the loading modal
        this.loadingModal.show();
        
    }
    
    displayDetailsModal(detailsData) {
        
        this.detailsText.textContent = "";
        this.detailsText.innerHTML = detailsData;
        
        this.detailsModal.show();
        
    }
    
    closeLoadModal() {
        this.loadingModal.hide();
    }
    
    closeErrorModal() {
        this.errorModal.hide();
    }
    
    closeDetailsModal() {
        this.detailsModal.hide();
    }
    
}