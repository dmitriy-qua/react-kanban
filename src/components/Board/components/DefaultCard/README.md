# DefaultCard Component

## Overview
The `DefaultCard` component is a fundamental building block of a Kanban board UI, designed to represent individual cards on the board. It allows for the display of a card's title and description, as well as the option to remove the card if permitted. The component also provides visual feedback when the card is being dragged.

## Key Components and Responsibilities
- **Title and Description**: The component displays a card's title and description, extracted from the `card` prop.
- **Draggable State**: When the card is being dragged, a specific class is applied to give visual feedback to the user.
- **Remove Card Functionality**: An optional "remove" button allows users to delete the card if the `allowRemoveCard` prop is enabled. When clicked, the button triggers the `onCardRemove` callback, passing the card data as an argument.

## Installation/Setup Requirements
To use the `DefaultCard` component, ensure that you have the following dependencies:
- React
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) (for testing purposes)

### Installation
Make sure you have Node.js and npm installed. Then, you can install React and testing dependencies in your project:
```bash
npm install react
npm install @testing-library/react --save-dev
```

## Usage Example

Here’s how to use the `DefaultCard` component in your application:

```jsx
import DefaultCard from './src/components/Board/components/DefaultCard';

// Example card object
const card = { id: 1, title: 'Sample Card', description: 'This is a sample description.' };

// Function to handle card removal
const handleCardRemove = (cardToRemove) => {
  console.log('Card removed:', cardToRemove);
};

const App = () => {
  return (
    <div>
      <DefaultCard 
        dragging={false} 
        allowRemoveCard={true} 
        onCardRemove={handleCardRemove}
      >
        {card}
      </DefaultCard>
    </div>
  );
};

export default App;
```

### Important Features
- **Dynamic Dragging State**: The card visually indicates when it is being dragged by applying the `react-kanban-card--dragging` class.
- **Conditional Rendering of Remove Button**: The remove button is rendered only when `allowRemoveCard` is set to `true`.
- **Callback Mechanism**: The component relies on the `onCardRemove` callback function to handle the card removal logic. This ensures separation of concerns and makes the component reusable in different contexts.

## Configuration and Important Notes
- **Props**:
  - `dragging` (boolean): Indicates whether the card is currently being dragged. It adds a specific styling to the card for a clear visual cue.
  - `allowRemoveCard` (boolean): Controls the visibility of the remove button.
  - `onCardRemove` (function): A callback function that gets executed when the remove button is clicked, receiving the card object as an argument.

- When using the `DefaultCard` component, ensure you provide a valid `card` prop containing at least a `title` and `description` for proper rendering.

- The component utilizes CSS classes that should be defined in your project's stylesheet to reflect the expected styles visually.

In summary, the `DefaultCard` component is a versatile and functional part of a Kanban board implementation, tailored for a clean user experience while enabling dynamic interactions.