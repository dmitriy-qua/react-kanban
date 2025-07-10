```markdown
# Board Page Integration Tests

## Overview
This repository contains integration tests for the Board Page of a task management application using Cypress. These tests verify that the board correctly renders columns and cards, allows for moving cards and columns when enabled, and correctly handles user interactions under various scenarios.

## Key Components and Responsibilities
- **Board Rendering Test**: Confirms that the board displays the correct number of columns and cards, as well as their expected titles.
- **Card Movement Tests**: Validates that cards can be moved within the same column or to a different column, and checks the functionality when card movement is blocked.
- **Column Movement Tests**: Ensures that columns can be moved to different positions and checks behavior when column movement is restricted.

## Installation
To run the tests in this directory, ensure you have the following setup:

1. **Node.js**: Make sure Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
2. **Cypress**: Install Cypress via npm:
   ```bash
   npm install cypress --save-dev
   ```

3. **Project Dependencies**: Ensure you have all project dependencies set up by running:
   ```bash
   npm install
   ```

4. **Open Cypress**: Launch Cypress with the following command:
   ```bash
   npx cypress open
   ```

## Usage
To execute the tests in the `cypress/integration` directory:

1. Open Cypress using the command mentioned above.
2. Select the `board.spec.js` file from the integration test runner.

Cypress will automatically open a browser instance where you can observe the test execution in real-time.

## Examples
### Rendering the Board
The first test case verifies that the board correctly renders with two columns and nine cards:

```javascript
it('renders a board with its columns and cards in their position', function () {
  cy.get('[data-testid^="column"]').should('have.length', 2);
  // Verify column titles
  cy.get('[data-testid^="column"]:first > div:eq(0)').should('have.text', 'Column Backlog');
  cy.get('[data-testid^="column"]:last > div:eq(0)').should('have.text', 'Column Doing');
});
```

### Moving Cards within the Same Column
This test checks if a card can be moved between the positions in the same column:

```javascript
it('moves the cards to another position in the same column', () => {
  // Move card using keyboard interactions
  cy.get(firstCardSelector)
    .trigger('keydown', { keyCode: 32, which: 32 })
    .trigger('keydown', { keyCode: 40, which: 40, force: true })
    // Verify the new positions
  cy.get('[data-testid^="column"]:eq(0) [data-testid^="card"]:eq(0)').contains(/Card title 2/);
});
```

### Moving Cards between Columns
The following example shows how to test moving a card from one column to another:

```javascript
it('moves the cards to another column', () => {
  // Move card from first to the second column
  cy.get(firstCardSelector)
    .trigger('keydown', { keyCode: 32, which: 32 })
    .trigger('keydown', { keyCode: 39, which: 39, force: true });
  // Verify the card counts
  cy.get('[data-testid^="column"]:eq(0) [data-testid^="card"]').should('have.length', 7);
  cy.get('[data-testid^="column"]:eq(1) [data-testid^="card"]').should('have.length', 2);
});
```

## Configuration and Important Notes
- **Blocking Movement**: Some tests are designed to simulate scenarios where card or column movement is blocked by visiting the URL with specific parameters (e.g., `/?disableCardDrag=true`, `/?disableColumnDrag=true`). Ensure the server can handle these queries.
- **Key Codes**: The tests utilize specific key codes to simulate user interactions. Ensure your environment supports these keyboard events for accurate testing.

## Conclusion
This repository provides a comprehensive set of integration tests for verifying the user experience on the Board Page. With Cypress, you can easily run and observe these tests, ensuring your application behaves correctly across various scenarios.
```