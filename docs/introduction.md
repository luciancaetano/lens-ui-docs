---
sidebar_position: 1
slug: /
title: Getting Started
---

Lens-ui is a fork of a personal design system that I've been working on for some time.

### Installation

LensUI is available in [npm](https://www.npmjs.com/package/lens-ui).

To install just run:

#### with npm
`npm install lens-ui`

#### with yarn
`yarn add lens-ui`

### Configuration
Lens-ui uses contexts from LensProvider and css file, just import `lens-ui/build/index.css` ,  `lens-ui/build/reset.css` and declare `LensProvider` on app root.

Here's a quick example to get you started, **it's literally all you need**:

**Note: In this doc's we dot import reset.css**

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, LensProvider } from 'lens-ui';
import 'node_modules/lens-ui/build/reset.css';
import 'node_modules/lens-ui/build/index.css';

function App() {
  return (
      <LensProvider>
        <Button intent="success">Hello World</Button>
      </LensProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```