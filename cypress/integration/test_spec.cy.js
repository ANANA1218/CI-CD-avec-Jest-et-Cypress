describe('Welcome Page', () => {
    it('should display welcome message', () => {
      cy.visit('/');
      cy.contains('h1', 'Welcome to My App');
    });
  });
  