import React from 'react';

import { Store } from 'simply-state';

import {
  act,
  renderHook,
} from '@testing-library/react';

import {
  Provider,
  useDispatch,
} from '../../src';

interface RootState {
  count: number;
}

describe('useDispatch', () => {
  let store: Store<RootState>;

  beforeEach(() => {
    store = new Store({ count: 0 });
  });

  it('should dispatch an action', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );

    const { result } = renderHook(() => useDispatch(), { wrapper });

    act(() => {
      result.current((state: RootState) => { state.count += 1; });
    });

    expect(store.getState().count).toEqual(1);
  });
});