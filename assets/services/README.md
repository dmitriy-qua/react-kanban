```markdown
# URL Parameter Extraction Service

## Overview
The `getUrlParams.js` service is designed to parse URL parameters from the current browser window's URL, converting them into a more convenient JavaScript object. It intelligently handles boolean string values (`'true'` and `'false'`) and retains other parameter types as strings.

## Key Components
- **`isBoolean`**: A helper function that checks if a given value is a string representation of a boolean.
- **`not`**: A higher-order function that negates the result of another function.
- **Main function**: The default export that extracts URL parameters, converting boolean strings to actual Boolean types, while preserving other parameter types as strings.

## Installation/Setup Requirements
To use this service, ensure you have a JavaScript environment set up, such as a web application that can utilize ES6 imports. This code relies on the native `URL` interface available in modern browsers.

## Usage
To use the `getUrlParams` function, simply call it in your JavaScript code after loading this service. It will return an object containing the URL parameters.

### Example
```javascript
import getUrlParams from '@assets/services/getUrlParams';

const urlParameters = getUrlParams();

console.log(urlParameters);
// Example output for a URL like http://example.com?isActive=true&user=JohnDoe
// { isActive: true, user: "JohnDoe" }
```

## Important Features
- **Automatic Boolean Conversion**: The service automatically converts URL parameters that are specifically `'true'` or `'false'` strings to their respective Boolean values.
- **Dynamic Parameter Handling**: The service does not require specification of parameters; it dynamically handles all present in the URL.

## Configuration and Important Notes
- The function reads parameters from the current window location. Ensure that your application context has the required URL to work with.
- If parameters are modified or replaced in the URL after page load, you may want to call this function again to reflect those changes.
- This service does not handle cases where URL parameters may be malformed or contain unexpected characters.

By utilizing `getUrlParams`, you can streamline parameter retrieval for your web applications, enabling clearer handling of dynamic values passed through URLs.
```