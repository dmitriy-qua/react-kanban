# Card Component

## Overview
The `Card` component is a key part of a drag-and-drop interface built using React and the `react-beautiful-dnd` library. It represents an individual draggable card within a column and enables users to interact with it by dragging and dropping.

This component encapsulates the rendering of a card, handling whether it is currently being dragged or not, and providing the necessary props to allow for customizable rendering through the `renderCard` function prop.

## Key Components
### Card
- **Props**:
  - `children`: Props passed directly to the component, including an object with card details (e.g., `id`, `title`, `description`).
  - `index`: The index of the card in the list for drag-and-drop purposes.
  - `renderCard`: A function that defines how the card is rendered, providing the dragging state as an argument.
  - `disableCardDrag`: A boolean to control whether the card should be draggable.
  
- **Responsibilities**:
  - Renders the draggable card using the `Draggable` component from `react-beautiful-dnd`.
  - Passes relevant props for drag-and-drop functionality, such as `draggableId`, `index`, and drag handlers.
  - Executes the `renderCard` function with the current dragging state for rendering flexibility.

## Installation
To use the `Card` component, ensure you have the following libraries in your project:

```bash
npm install react react-beautiful-dnd
```

## Usage Examples

Here are some usage examples to illustrate how to implement the `Card` component within your application.

### Basic Usage
```javascript
import React from 'react';
import Card from './components/Card';

const App = () => {
  const cardData = { id: 1, title: 'Card title' };

  const renderCard = (isDragging) => {
    return <div style={{ opacity: isDragging ? 0.5 : 1 }}>{cardData.title}</div>;
  };

  return (
    <Card
      index={0}
      disableCardDrag={false}
      renderCard={renderCard}
    >
      {cardData}
    </Card>
  );
};

export default App;
```

### Disabling Dragging
```javascript
<Card
  index={1}
  disableCardDrag={true}
  renderCard={(isDragging) => <div>{cardData.title}</div>}
>
  {cardData}
</Card>
```

## Important Features
- **Flexible Rendering**: The `renderCard` prop allows developers to customize what the card looks like based on its drag state.
- **Controlled Dragging**: The `disableCardDrag` prop provides control over whether the card can be dragged, making it easy to manage UI state.
- **Integration with Drag-and-Drop**: The component seamlessly integrates with `react-beautiful-dnd` for a smooth drag-and-drop experience.

## Testing
A set of unit tests is provided to ensure the `Card` component functions as expected. These tests cover rendering and behavior while dragging. 

To run tests, use:
```bash
npm test
```
  
## Important Notes
- Ensure that the draggable IDs provided to the `Card` component are unique to avoid issues in the drag-and-drop functionality.
- The component relies on the context provided by `react-beautiful-dnd`, so make sure it is nested within a `DragDropContext`.

This documentation outlines the key aspects of the `Card` component, its functionality, and proper usage for integration within your React application. For further customization, refer to `react-beautiful-dnd` documentation for advanced interactions and configurations.