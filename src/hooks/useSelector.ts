import {
  useDebugValue,
  useEffect,
  useRef,
  useState,
} from 'react';

import isEqual from 'fast-deep-equal/es6';

import { useStore } from './useStore';

export const useSelector = <S, T>(selector: (state: S) => T) => {
  if (!selector) {
    throw new Error(`You must pass a selector to useSelector`)
  }

  if (typeof selector !== 'function') {
    throw new Error(`You must pass a function as a selector to useSelector`)
  }

  const store = useStore<S>();

  const selectedState = selector(store.getState());
  const [, forceRender] = useState(false);
  const stateRef = useRef(selectedState);

  useEffect(() => {
    return store.subscribe(() => {
      const newState = selector(store.getState());
      if (!isEqual(newState, stateRef.current)) {
        stateRef.current = newState;
        forceRender(n => !n);
      }
    });
  }, [store, selector]);

  useDebugValue(stateRef.current);

  return stateRef.current;
};
