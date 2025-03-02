// describe('links funcionant', () => {
//   it('Projectes de github', () => {
//     cy.visit('http://ejprojectes.dam.inspedralbes.cat/')
//       .get('a').contains('Projectes').click()
//       .url().should('include', '/projectes')
//       .get('a').contains('Transversals_minim').click()
//   })
// })

describe('Tests E2E de la aplicación', () => {
  beforeEach(() => {
      cy.visit('http://ejprojectes.dam.inspedralbes.cat/');
  });

  it('Verifica que la página principal carga correctamente y contiene el nombre del usuario', () => {
      cy.contains('p', 'Kaetheen').should('be.visible');
  });

  it('Verifica que el enlace a projectes.html funciona', () => {
      cy.get('a[href="projectes.html"]').click();
      cy.url().should('include', '/projectes.html');
  });

  it('Verifica que la página projectes.html contiene los enlaces a los repositorios de GitHub', () => {
      cy.visit('http://ejprojectes.dam.inspedralbes.cat/projectes.html');
      cy.get('a[href*="github.com"]').should('have.length.at.least', 3);
  });

  it('Verifica que al hacer clic en un enlace de GitHub, se abre correctamente', () => {
      cy.visit('https://github.com/a23kaeguapio/');
      cy.origin('https://github.com/a23kaeguapio/', () => {
        cy.get('a[href*="microserveis"]').first().invoke('removeAttr', 'target').click();
        cy.url().should('include', 'github.com');
      })
  });
});
