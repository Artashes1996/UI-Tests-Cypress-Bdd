class SwitchToIframe {

    getIframeDocument = () => {
        return cy
            .get('iframe[id="storybook-preview-iframe"]')
            .its('0.contentDocument').should('exist')
    }

    getIframeBody = () => {
        return this.getIframeDocument()
            .its('body').should('not.be.undefined')
            .then(cy.wrap)
    }
}

export default SwitchToIframe;