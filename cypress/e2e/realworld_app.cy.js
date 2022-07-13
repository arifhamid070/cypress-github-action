describe('Test',function (){

it('Sign Up Test', function(){

    cy.visit('https://react-redux.realworld.io');
    cy.get('a').contains('Sign up').click();
    cy.get('input[placeholder="Username"]').type(userID_Alpha());
    cy.get('input[placeholder="Email"]').type(userID_Alpha()+'@gmail.com');
    cy.get('input[placeholder="Password"]').type(userID_Alpha()+'343234232');
    cy.get('button').contains('Sign in').click();
    cy.get('a').contains('Home').should('have.text','Home');
    
});

 it('New Post and Verify',function(){
     cy.get('.ion-compose').click();
     cy.get('input[placeholder="Article Title"]').type('DemoTest#1234');
     cy.get('#main > div fieldset:nth-child(2) > input').type(userID_Alpha());
     cy.get('#main > div fieldset:nth-child(3) > textarea').type('dasddasd');
     cy.get('button').contains('Publish Article').click();
     cy.get('.container h1').should('have.text','DemoTest#1234');
    


 });

    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
        for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random()* possible.length));

        return text;
    }

});