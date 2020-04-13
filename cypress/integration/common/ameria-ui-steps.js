import { Then } from "cypress-cucumber-preprocessor/steps";
import SwitchToIframe from "../pages/IframeUtility";
let switchToIframe = new SwitchToIframe();

Then(`I see {string} in the title`, title => {
  cy.title().should("include", title);
});

Then(`I open {string} url`, url => {
  cy.visit(url);
})

Then(`I click on Date Picker tab`, () => {
  cy.get('#explorerdatepicker').click();
});

Then(`I click on Inline Date Picker tab`, () => {
  cy.get('#explorerdatepicker--inline-date-picker').click();
});

Then(`I fill {string} value in Inline Date Picker field`, value => {
  switchToIframe.getIframeBody().find('#date-picker-inline').clear().type(value)
});

Then(`I should see {string} for Inline Date Picker field`, value => {
  switchToIframe.getIframeBody().find('#date-picker-inline-helper-text').should('have.text', value);
})
