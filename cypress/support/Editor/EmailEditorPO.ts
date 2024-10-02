export default class EmailEditorPage {

    getHeadingText() {
        return 'div[id="u_content_heading_1"] span';
    }

    getSubheadingText() {
        return 'div[id="u_content_heading_2"] span';
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
        cy.getIframe(this.getIframe()) // Using the custom 'cy.getIframe'
          .find(this.getHeadingText())
          .click({ force: true });
    }

    
    selectSubheadingTextPortion() {
        cy.getIframe(this.getIframe()) // Using the custom 'cy.getIframe'
          .find(this.getSubheadingText())
          .click({ force: true });
    }
    getFontFamilyListLength() {
        return cy.getIframe(this.getIframe()) // Using the custom 'cy.getIframe'
          .find(this.getFontFamilyList())
          .then(elements => elements.length); // Simply returning the length
    }

    getFontWeightListLength() {
        return cy.getIframe(this.getIframe()) // Using the custom 'cy.getIframe'
          .find(this.getFontWeightList())
          .then(elements => elements.length); // Simply returning the length
    }

    clickFontFamilyBtn() {
        cy.getIframe(this.getIframe()) // Using the custom 'cy.getIframe'
          .find(this.getFontFamilyBtn())
          .click({ force: true });
    }

    clickFontWeightBtn() {
        cy.getIframe(this.getIframe()) // Using the custom 'cy.getIframe'
          .find(this.getFontWeightBtn())
          .click({ force: true });
    }

    updateFontFamily(fontfamily: string) {
        this.clickFontFamilyBtn(); // Open the font family list
        this.getFontFamilyListLength().then((length) => {
            for (let i = 0; i < length; i++) {
                cy.getIframe(this.getIframe()) // Using 'cy.getIframe' for each interaction
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
        this.clickFontWeightBtn(); // Open the font family list
        this.getFontWeightListLength().then((length) => {
            for (let i = 0; i < length; i++) {
                cy.getIframe(this.getIframe()) // Using 'cy.getIframe' for each interaction
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
}
