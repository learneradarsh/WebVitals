Web Vitals SDK

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
    - [In a Module-based Project](#in-a-module-based-project)
    - [In a Browser Environment](#in-a-browser-environment)
- [API](#api)
    - [init()](#init)
    - [getVitals(callback)](#getvitalscallback)
- [Testing](#testing)
- [Development](#development)
- [License](#license)

## Introduction
Web Vitals SDK is a lightweight JavaScript library designed to help developers monitor and collect performance metrics such as Largest Contentful Paint (LCP), First Contentful Paint (FCP), and other Core Web Vitals for their frontend applications.

## Features

- Monitor key Web Vitals metrics.
- Lightweight and easy to integrate.
- Collect insights for analysis and optimization.
- Customizable callback for real-time metric reporting.

## Installation

### Using npm

```sh
npm install web-vitals-x
```

### Using Yarn

```sh
yarn add web-vitals-x
```

## Usage

### Import and Initialize

#### In a Module-based Project

```js
import WebVitalsSDK from 'web-vitals-x';

const sdk = new WebVitalsSDK();
sdk.init();

sdk.getVitals((vitals) => {
    console.log('Web Vitals:', vitals);
});
```

#### In a Browser Environment

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Vitals SDK Test</title>
</head>
<body>
    <h1>Testing Web Vitals SDK</h1>
    <script src="./web-vitals-x.cjs.js"></script>
    <script>
        const sdk = new WebVitalsSDK();
        sdk.init();
        sdk.getVitals((vitals) => {
            console.log('Web Vitals:', vitals);
        });
    </script>
</body>
</html>
```

## API

### init()

Initializes the SDK and begins monitoring Web Vitals metrics.

### getVitals(callback)

Registers a callback function that receives the collected Web Vitals metrics.

**Parameters:**

- `callback` (function): A function that takes an object containing Web Vitals metrics.

**Example:**

```js
sdk.getVitals((vitals) => {
    console.log('LCP:', vitals.lcp);
    console.log('FCP:', vitals.fcp);
    console.log('CLS:', vitals.cls);
});
```

## Testing

To test the SDK locally, ensure that you have installed all dependencies:

```sh
npm install
```

### Run Tests

```sh
npm test
```

## Development

### Building the Library

To build the SDK for distribution:

```sh
npm run build
```

The output files will be generated in the `dist/` folder:

- `web-vitals-x.cjs.js` (CommonJS format)
- `web-vitals-x.esm.js` (ES Module format)

## License

This project is licensed under the MIT License.