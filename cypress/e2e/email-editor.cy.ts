/// <reference types="cypress" />

import EmailEditorPage from "../support/Editor/EmailEditorPO"

const emaileditorPage = new EmailEditorPage()



describe('Test suite for Email editor', () => {
  beforeEach(() => {
    cy.viewport('macbook-15')
    cy.setCookie(
      "CookieConsent",
      "{stamp:%27vjpVJCpe9QeDb7Ba7mmn6GE5TtAmzBnDEVA8csu2OzT/ZGu6jV7YGw==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%:%27gr%27}"
    )

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

  })
  
  



})