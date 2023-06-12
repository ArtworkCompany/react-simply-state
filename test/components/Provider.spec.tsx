import '@testing-library/jest-dom';

import React from 'react';

import { Store } from 'simply-state';

import {
  fireEvent,
  render,
} from '@testing-library/react';

import {
  Provider,
  useDispatch,
  useSelector,
} from '../../src';

interface RootState {
  count: number;
}

describe('Provider', () => {
  function Counter() {
    const count = useSelector((state: RootState) => state.count);
    const dispatch = useDispatch<RootState>();

    const increment = () => {
      dispatch((state) => {
        state.count++;
      });
    };

    return (
      <div>
        <span>{count}</span>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }

  it('should be increment on click', () => {
    const store = new Store<RootState>({ count: 0 });

    const { getByText } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )

    fireEvent.click(getByText('Increment'))

    expect(getByText('1')).toBeInTheDocument()
  })
});

