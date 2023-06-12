# React Simply State

React bindings for [simply-state](https://www.npmjs.com/package/simply-state), a lightweight, easy-to-use state management library for JavaScript applications.

# Installation

You can install Simply State via npm:

```sh
npm install react-simply-state
```

# Usage

## Setup

Firstly, wrap your app with the `Provider` component:

```jsx
import { Store } from 'simply-state';
import { Provider } from 'react-simply-state';

const store = new Store({ count: 0 });

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
```

The `Provider` component makes the state store available to all component inside of it.

## useSelector

The `useSelector` hook can be used to select a part of the state:

```jsx
import { useSelector } from 'react-simply-state';

function Counter() {
  const count = useSelector((state) => state.count);

  return <div>{count}</div>;
}
```

`useSelector` will only cause the component to re-render if the selected part of the state has changed.

## useDispatch

The `useDispatch` hook can be used to dispatch actions to the state:

```jsx
import { useDispatch } from 'react-simply-state';

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch((state) => {
      state.count++;
    });
  };

  return (
    <div>
      {count}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

Actions are functions that receive the draft state and can mutate it directly.

# License

[MIT](LICENSE)