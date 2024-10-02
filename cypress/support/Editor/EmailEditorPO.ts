export default class EmailEditorPage {

    getHeadingText() {
        return 'div[id="u_content_heading_1"] span';
    }

    getSubheadingText() {
        return 'div[id="u_content_heading_2"] span';
    }

    getExportHtmlBtn()
    {
        return 'div[id="root"] button'
    }


    getIframe() {
        return 'iframe[src*="editor.unlayer.com"]';
    }

    getFontFamilyBtn() {
        return 'div[class="blockbuilder-widget blockbuilder-font-family-widget"] button[aria-haspopup="listbox"]';
    }

    getFontWeightBtn() {
        return 'div[class="blockbuilder-widget blockbuilder-font-weight-widget"] button[aria-haspopup="listbox"]';
    }

    getFontFamilyList() {
        return 'div[class="blockbuilder-widget blockbuilder-font-family-widget"] div[class="dropdown-item"] span';
    }

    getFontWeightList() {
        return 'div[class="blockbuilder-widget blockbuilder-font-weight-widget"] div[class="dropdown-item"] span';
    }

    visiteditorapp() {
        cy.visit("https://react-email-editor-demo.netlify.app/");
    }

    selectHeadingTextPortion() {
        cy.getIframe(this.getIframe())
          .find(this.getHeadingText())
          .click({ force: true });
    }

    clickExportHtmlBtn()
    {
        cy.get(this.getExportHtmlBtn()).eq(2).click()
    }

    
    selectSubheadingTextPortion() {
        cy.getIframe(this.getIframe()) 
          .find(this.getSubheadingText())
          .click({ force: true });
    }
    getFontFamilyListLength() {
        return cy.getIframe(this.getIframe())
          .find(this.getFontFamilyList())
          .then(elements => elements.length);
    }

    getFontWeightListLength() {
        return cy.getIframe(this.getIframe()) 
          .find(this.getFontWeightList())
          .then(elements => elements.length); 
    }

    clickFontFamilyBtn() {
        cy.getIframe(this.getIframe()) 
          .find(this.getFontFamilyBtn())
          .click({ force: true });
    }

    clickFontWeightBtn() {
        cy.getIframe(this.getIframe()) 
          .find(this.getFontWeightBtn())
          .click({ force: true });
    }

    updateFontFamily(fontfamily: string) {
        this.clickFontFamilyBtn(); 
        this.getFontFamilyListLength().then((length) => {
            for (let i = 0; i < length; i++) {
                cy.getIframe(this.getIframe()) 
                  .find(this.getFontFamilyList()).eq(i)
                  .invoke('text')
                  .then((titleText) => {
                      titleText = titleText.trim();
                      fontfamily = fontfamily.trim();
                      if (titleText === fontfamily) {
                          cy.getIframe(this.getIframe())
                            .find(this.getFontFamilyList()).eq(i)
                            .click({ force: true });
                          return;
                      }
                  });
            }
        });
    }

    updateFontWeight(fontweight: string) {
        this.clickFontWeightBtn(); 
        this.getFontWeightListLength().then((length) => {
            for (let i = 0; i < length; i++) {
                cy.getIframe(this.getIframe()) 
                  .find(this.getFontWeightList()).eq(i)
                  .invoke('text')
                  .then((titleText) => {
                      titleText = titleText.trim();
                      fontweight = fontweight.trim();
                      if (titleText === fontweight) {
                          cy.getIframe(this.getIframe())
                            .find(this.getFontWeightList()).eq(i)
                            .click({ force: true });
                          return;
                      }
                  });
            }
        });
    }


    validateFontFamilyHtmlInCode(logs: string, message: string, element: string, font: string)
    {
    
        const logEntry = logs.find(log => log.message.includes(message));
        

    
        const parser = new DOMParser();
        const doc = parser.parseFromString(logEntry.message, 'text/html');
      
      
        const h1Element = doc.querySelector(element);
        cy.log(h1Element)
      

        expect(h1Element).to.not.be.null; 
        const fontFamily = h1Element.style.fontFamily || getComputedStyle(h1Element).fontFamily; 
        expect(fontFamily).to.include(font);
      
      
      
    
    }

    validateFontWeightHtmlInCode(logs: string, message: string, element: string, font: string)
    {
    
        const logEntry = logs.find(log => log.message.includes(message));
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(logEntry.message, 'text/html');
      
        const h2Element = doc.querySelector(element);
        cy.log(h2Element)
      
    
        expect(h2Element).to.not.be.null; 
        expect(h2Element.style.fontWeight).to.equal(font); 
      
      
      
    
    }
}
