# Column Component

## Overview
The `Column` component is a part of a Kanban-style board application, allowing users to manage tasks represented as cards. Each column represents a logical grouping of these cards, such as "To Do", "In Progress", or "Done". The `Column` component supports drag-and-drop functionality, allowing users to rearrange columns and cards interactively.

## Key Components and Responsibilities
- **Column**: The main component that represents a single column in the Kanban board. It organizes cards and handles drag-and-drop functionality.
- **Draggable**: A higher-order component from `react-beautiful-dnd` that enables dragging for the column itself.
- **Card**: A component representing individual tasks within the column.
- **CardAdder**: A component that provides functionality for adding new cards to the column. It appears conditionally based on props.
- **DroppableColumn**: A wrapper component that utilizes the `withDroppable` HOC to support dropping functionality for cards.

## Installation

To use the `Column` component, ensure you have the following dependencies in your project:

1. **React**: Make sure you have React installed in your project.
2. **react-beautiful-dnd**: This library is essential for drag-and-drop functionality.

You can install the necessary dependencies using npm or yarn:

```bash
npm install react react-beautiful-dnd
```

or 

```bash
yarn add react react-beautiful-dnd
```

## Usage

Here's an example of how to implement the `Column` component in your Kanban board:

```javascript
import React from 'react';
import Column from './path/to/Column';

const columnData = {
  id: 1,
  title: 'Backlog',
  cards: [
    { id: 1, title: 'Card title 1', description: 'Description 1' },
    { id: 2, title: 'Card title 2', description: 'Description 2' },
  ],
};

const App = () => {
  const renderCard = (column, card, dragging) => (
    <div style={{ opacity: dragging ? 0.5 : 1 }}>{card.title}</div>
  );

  return (
    <Column
      index={0}
      renderColumnHeader={() => <h3>{columnData.title}</h3>}
      renderColumnFooter={() => <div>Footer</div>}
      renderCard={renderCard}
      allowAddCard={true}
      onCardNew={(column, newCard) => console.log('New card:', newCard)}
    >
      {columnData}
    </Column>
  );
};
```

### Important Features
- **Draggable Columns and Cards**: Users can reorder cards within a column and even reorder columns themselves.
- **Dynamic Card Rendering**: The component allows passing a rendering function to customize how individual cards appear.
- **Conditional Card Adding**: The `allowAddCard` prop dictates whether a button to add new cards is displayed.

## Configuration and Important Notes
- **Props**:
  - `children`: The data for the column, which includes its ID, title, and an array of cards.
  - `index`: The index of the column in the overall board layout.
  - `renderCard`: A function to customize how cards are rendered.
  - `renderColumnHeader`: A function to specify how the column header should look.
  - `renderColumnFooter`: A function to specify how the column footer should look.
  - `disableColumnDrag` and `disableCardDrag`: Boolean flags to control drag-and-drop functionalities.
  - `allowAddCard`: A boolean flag to indicate whether users can add new cards to the column.
  - `onCardNew`: A callback function that gets called with the new card data when a card is added.

Make sure to handle the props wisely to maintain the functionality expected in your board application.

### Testing
The `Column` component comes with a comprehensive test suite using the `@testing-library/react`. Ensure your test library is set up correctly to run the tests provided in `index.spec.js`.

Following this guide should help you integrate the `Column` component seamlessly into your application while understanding its structure and functionalities.