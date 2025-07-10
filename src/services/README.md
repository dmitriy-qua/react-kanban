# README.md for src/services

## Overview
The `src/services` directory contains a collection of functions that facilitate the manipulation and management of a board and its associated columns and cards. This code is primarily used in applications that require dynamic handling of card-based systems, such as Kanban boards or project management tools. The functions enable users to add, remove, and reorder columns and cards within a board, enhancing the interactivity and usability of the application's interface.

## Key Components and Their Responsibilities

- **Card and Column Management Functions:**
  - `reorderCardsOnColumn(column, reorderCards)`: Reorders the cards in a specified column based on the provided order.
  - `moveColumn(board, { fromPosition }, { toPosition })`: Moves a column from one position to another within the board.
  - `moveCard(board, { fromPosition, fromColumnId }, { toPosition, toColumnId })`: Moves a card from one position in its column to another position in a different column.
  - `addColumn(board, column)`: Adds a new column to the board.
  - `removeColumn(board, column)`: Removes a column from the board.
  - `changeColumn(board, column, newColumn)`: Changes the properties of an existing column.
  - `addCard(board, inColumn, card, { on } = {})`: Adds a new card to a specified column.
  - `removeCard(board, fromColumn, card)`: Removes a specified card from a column.

- **Utility Functions:**
  - `compose(...fns)`: Composes multiple functions into a single function so that they can be executed in sequence.
  - `partialRight(fn, ...args)`: Partially applies arguments to a function on the right.
  - `addInArrayAtPosition(array, element, position)`: Inserts an element into an array at the specified position.
  - `removeFromArrayAtPosition(array, position)`: Removes an element from an array at the specified position.
  - `changeElementOfPositionInArray(array, from, to)`: Changes an element in an array from one position to another.
  - `identity(value)`: Returns the value passed as an argument, acting as an identity function.
  - `when(value, predicate = identity)`: Executes a predicate function if the value meets certain conditions.
  - `replaceElementOfArray(array)`: Returns a function that replaces an element in an array based on given options.
  - `pickPropOut(object, prop)`: Picks a property value out from an object.

## Installation Requirements
To get started with the functions in `src/services`, ensure you have the following prerequisites:

- A JavaScript runtime environment (Node.js recommended)
- A package manager like npm or yarn

Installation of necessary dependencies can be completed using:
```bash
npm install
# or
yarn install
```

## Usage Examples

### Moving a Card
To move a card from one column to another:
```javascript
import { moveCard } from './services';

const board = { /* your board state */ };
const fromPosition = { /* current position of card */ };
const fromColumnId = 'column1';
const toPosition = { /* target position of card */ };
const toColumnId = 'column2';

const updatedBoard = moveCard(board, { fromPosition, fromColumnId }, { toPosition, toColumnId });
```

### Adding a New Column
To add a new column to the board:
```javascript
import { addColumn } from './services';

const board = { /* your board state */ };
const newColumn = { id: 'newColumnId', title: 'New Column' };

const updatedBoard = addColumn(board, newColumn);
```

### Removing a Card
To remove a specific card from a column:
```javascript
import { removeCard } from './services';

const board = { /* your board state */ };
const fromColumn = 'columnId';
const card = { id: 'cardId' };

const updatedBoard = removeCard(board, fromColumn, card);
```

## Configuration and Important Notes
- Ensure the board's structure adheres to a specific format for the functions to work correctly.
- Handle edge cases such as moving cards to non-existent columns gracefully within your application logic.
- For better error handling, consider wrapping function calls in try-catch blocks.
- Review and adjust the parameters passed to functions as required by your application needs.

This documentation aims to provide a clear and concise overview of the services available within the `src/services` directory, ensuring ease of integration and utilization in your applications.
