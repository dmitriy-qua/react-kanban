# React Beautiful DnD Mocks

## Overview
This repository contains mock implementations of the `react-beautiful-dnd` library. These mocks are designed to facilitate testing React components that rely on drag-and-drop functionality without needing to implement the entire library in a testing environment. By using these mocks, developers can ensure that their components interact with drag-and-drop APIs appropriately while effectively isolating and testing UI behavior.

## Key Components

The following key components are included in this mock implementation:

### 1. `DragDropContext`
- **Purpose:** Serves as a context provider for managing the drag-and-drop lifecycle.
- **Props:**
  - `onDragEnd` (function): Callback to execute when a drag operation ends.
- **Returns:** Renders the children components within the context.

### 2. `Droppable`
- **Purpose:** Wraps components that can accept draggable items.
- **Props:**
  - `children` (function): A function that receives `droppableProvide` and should render the droppable area.
- **Provides:** An object containing properties and methods to support drag-and-drop functionality.

### 3. `Draggable`
- **Purpose:** Wraps components that can be dragged.
- **Props:**
  - `children` (function): A function that receives `draggableProvide` and `draggableSnapshot`, allowing rendering of draggable items.
- **Provides:** An object containing properties and methods for draggable behavior.

### 4. `callbacks`
- **Purpose:** A collection of callback functions and states to manage drag events:
  - `onDragEnd` (jest mock function): A mock for handling drag end events.
  - `isDragging` (function): Updates the `isDragging` state in the `draggableSnapshot`.

## Installation/Setup Requirements

To use these mocks in your React tests, ensure that you have the following requirements met:

- Node.js >= 10.0.0
- A project using Jest for testing
- React >= 16.8.0 (Hooks compliant)

### Installation
You can include the mock package in your test files as follows:
```bash
npm install --save-dev <your-mock-package>
```

## Usage Examples

### Basic Example
Here is a simple example of how to use these mocks in your Jest tests:

```javascript
import React from 'react';
import { render } from '@testing-library/react';
import { DragDropContext, Droppable, Draggable } from '__mocks__/react-beautiful-dnd';

test('renders draggable items', () => {
  const { getByText } = render(
    <DragDropContext onDragEnd={() => {}}>
      <Droppable>
        {(droppable) => (
          <div {...droppable.droppableProps} ref={droppable.innerRef}>
            <Draggable>
              {(draggable) => (
                <div {...draggable.draggableProps} ref={draggable.innerRef}>
                  Draggable Item
                </div>
              )}
            </Draggable>
            {droppable.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );

  expect(getByText('Draggable Item')).toBeInTheDocument();
});
```

## Important Features
- **Jest Integration:** The `callbacks` object utilizes Jest mock functions, making it seamless for debugging and verifying function calls.
- **Snapshot Management:** The `draggableSnapshot` maintains an `isDragging` state that you can manipulate in your tests for simulating dragging behavior.

## Configuration and Important Notes
- Ensure to reset the mocks between tests to maintain state isolation, especially if testing multiple interactions. This can be done using `jest.clearAllMocks()`.
- This mock implementation mimics the basic functionality and structure of the `react-beautiful-dnd` library but does not cover all features. Be sure to refer to the original library for advanced use cases or additional options.

By following these essentials, you can effectively integrate the mock implementations into your testing workflow, making it easier to build and validate drag-and-drop UI components in React.