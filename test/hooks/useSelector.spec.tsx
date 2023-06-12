import React from 'react';

import { Store } from 'simply-state';
import { vi } from 'vitest';

import {
  act,
  renderHook,
} from '@testing-library/react';

import {
  Provider,
  useSelector,
} from '../../src';

interface RootState {
  count: number;
}

describe('useSelector', () => {
  let store: Store<RootState>;
  let wrapper: (props: { children: React.ReactNode }) => JSX.Element;

  beforeEach(() => {
    store = new Store({ count: 0 });

    wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );
  });

  it('should return the selected state', () => {
    const { result } = renderHook(() => useSelector((state: RootState) => state.count), { wrapper });

    expect(result.current).toEqual(0);

    act(() => {
      store.dispatch(state => { state.count += 1; });
    });

    expect(result.current).toEqual(1);
  });

  it('should only re-render when selected state has changed', () => {
    const renderSpy = vi.fn();

    const { result } = renderHook(() => {
      const count = useSelector((state: RootState) => state.count);
      renderSpy(count);
      return count;
    }, { wrapper });

    expect(result.current).toEqual(0);
    expect(renderSpy).toHaveBeenCalledTimes(1);

    act(() => {
      store.dispatch(state => { state.count = 1; });
    });

    expect(result.current).toEqual(1);
    expect(renderSpy).toHaveBeenCalledTimes(2);

    // dispatching an action that does not change the selected state
    act(() => {
      store.dispatch(state => {
        state.count = 1;
      });
    });

    expect(result.current).toEqual(1);
    expect(renderSpy).toHaveBeenCalledTimes(2); // still 2, not 3
  });

  it('should throw an error when no selector is passed', () => {
    expect(() => renderHook(() => useSelector(null as any), { wrapper })).toThrowError('You must pass a selector to useSelector');
  });

  it('should throw an error when selector is not a function', () => {
    expect(() => renderHook(() => useSelector('not a function' as any), { wrapper })).toThrowError('You must pass a function as a selector to useSelector');
  });
})