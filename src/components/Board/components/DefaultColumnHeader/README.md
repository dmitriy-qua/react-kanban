```markdown
# Default Column Header Component

## Overview
The Default Column Header component is used within a Kanban board application to represent a header for a column. It allows users to rename columns and optionally remove them if permissions are provided. The component utilizes React state management for handling the renaming functionality and provides a user-friendly interface for interaction.

## Key Components
- **ColumnTitle**: This is a subcomponent that displays the title of the column. It supports click interactions if renaming is allowed.
- **useRenameMode**: A custom hook that manages the rename state of the column header.
- **DefaultColumnHeader**: The main functional component that encapsulates the column header logic. It manages state for the renaming process, handles user interactions, and defines callbacks for renaming and removing columns.

### Responsibilities
- Display the column title with the option to rename it.
- Provide functionality to cancel or confirm the renaming of the column.
- Allow the column to be removed if specified by props.

## Installation
1. Ensure you have React and ReactDOM installed in your project. You can add them with:
   ```bash
   npm install react react-dom
   ```
2. Place the `DefaultColumnHeader` component code located in the `src/components/Board/components/DefaultColumnHeader/` directory of your project.

## Usage
To use the Default Column Header component, you can import it within your board component and provide the necessary props:

```javascript
import DefaultColumnHeader from './components/DefaultColumnHeader';

const handleRenameColumn = (column, newTitle) => {
  console.log(`Renamed ${column.title} to ${newTitle}`);
};

const handleRemoveColumn = (column) => {
  console.log(`Removed ${column.title}`);
};

const columnData = { title: 'Todo', id: 1 };

<DefaultColumnHeader
  column={columnData}
  allowRenameColumn={true}
  allowRemoveColumn={true}
  onColumnRename={handleRenameColumn}
  onColumnRemove={handleRemoveColumn}
/>
```

## Important Features
- **Renaming**: Click on the column title to activate renaming mode. Enter a new title and submit to update it. Alternatively, you can cancel the operation.
- **Removing**: If allowed, a remove button (×) appears next to the title for deleting the column.
- **Responsive UI**: The component's rendering logic adjusts based on props to provide a responsive user experience regarding renaming and removing columns.

## Configuration and Important Notes
- **Props**:
  - `allowRenameColumn` (boolean): If true, the title becomes clickable, enabling the rename functionality.
  - `onColumnRename` (function): Callback invoked with the column and the new title when renaming is confirmed.
  - `allowRemoveColumn` (boolean): If true, displays the 'remove' button, allowing users to delete the column.
  - `onColumnRemove` (function): Callback invoked with the column when the remove button is clicked.

- Be sure to handle the callbacks appropriately to manage the state in your parent component.

## Testing
The component has unit tests that cover rendering, renaming, and removal functionalities. Use a testing library such as `@testing-library/react` to run your tests and ensure reliability.

To run the tests:
```bash
npm test
```

This will execute the test suite included for the Default Column Header.
```
