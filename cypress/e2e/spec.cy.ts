describe('App E2E', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.get('div[data-testid="clearFinished"').click();
		cy.window().then(win => {
			cy.get('div[data-testid="addTodo"]').click();
			cy.stub(win, 'prompt').returns('Test todo');
		});
	});

	it('should add todo', () => {
		cy.get('ul[data-testid="todoList"] div:last-child h3').should('have.text', 'Test todo');
	});

	it('should remove todo', () => {
		cy.get('ul[data-testid="todoList"] li').should('have.length', 1);

		cy.get('ul[data-testid="todoList"] div:last-child button').invoke('show').click();
		cy.get('ul[data-testid="todoList"] li').should('have.length', 0);
	});

	it('should show all todos when click AllTodos button', () => {
		cy.get('ul[data-testid="todoList"]')
			.find('li')
			.then((li) => {
				const liAmount: number = Cypress.$(li).length;
				cy.get('div[data-testid="getAllTodos"]').click();

				cy.get('ul[data-testid="todoList"]')
					.find('li')
					.its('length')
					.should('eq', liAmount);
			});
	});

	it('should show finished todos when click FinishedTodos button', () => {
		cy.get('div[data-testid="getFinishedTodos"]').click();
		cy.get('ul[data-testid="todoList"]').within(() => {
			cy.get('li').should('not.exist');
		});
	});

	it('should show unfinished todos when click UnfinishedTodos button', () => {
		cy.get('input[data-testid="checkBoxContainer"]').click();

		cy.get('div[data-testid="getUnfinishedTodos"]').click();
		cy.get('ul[data-testid="todoList"]').within(() => {
			cy.get('li').should('not.exist');
		});
	});

	it('should remove finished todos when click ClearFinished button', () => {
		cy.get('input[data-testid="checkBoxContainer"]').click();

		cy.get('div[data-testid="clearFinished"]').click();
		cy.get('ul[data-testid="todoList"]').within(() => {
			cy.get('li').should('not.exist');
		});
	});
});
