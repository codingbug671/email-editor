/// <reference types="cypress" />

import EmailEditorPage from "../support/Editor/EmailEditorPO"

const emaileditorPage = new EmailEditorPage()



describe('Test suite for Email editor', () => {
  let logs = []
  beforeEach(() => {
    cy.viewport('macbook-15')
    cy.setCookie(
      "CookieConsent",
      "{stamp:%27vjpVJCpe9QeDb7Ba7mmn6GE5TtAmzBnDEVA8csu2OzT/ZGu6jV7YGw==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%:%27gr%27}"
    )

    cy.on('window:before:load', (win) => {
      // Capture console log messages
      win.console.log = (...args) => {
        logs.push({ type: 'log', message: args.join(' ') });
      };
    
    });

  

  })

 
  it('should visit editor app', () => {
    emaileditorPage.visiteditorapp()
  })

  it('should select heading and update font family', () => {
  
    emaileditorPage.selectHeadingTextPortion()
    emaileditorPage.updateFontFamily("Arial Black")

  })

  it('should select subheading and update font weight', () => {
  
    emaileditorPage.selectSubheadingTextPortion()
    emaileditorPage.updateFontWeight("Bold")
    emaileditorPage.clickExportHtmlBtn()
  
  })

  it('export html code and validate generated code', () => {
  
    emaileditorPage.clickExportHtmlBtn()
    emaileditorPage.validateFontFamilyHtmlInCode(logs,'<table id="u_content_heading_1','#u_content_heading_1 h1','arial black')
    emaileditorPage.validateFontWeightHtmlInCode(logs,'<table id="u_content_heading_2','#u_content_heading_2 h2','700')
   
  
  })

  
  
  



})