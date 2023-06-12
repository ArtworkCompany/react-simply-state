import React, { ReactNode } from 'react';

import { Store } from 'simply-state';

import { SimplyStateContext } from './Context';

interface ProviderProps<S> {
  store: Store<S>;
  children: ReactNode;
}

export default function Provider<S>({ store, children }: ProviderProps<S>) {
  return (
    <SimplyStateContext.Provider value={{ store }}>
      {children}
    </SimplyStateContext.Provider>
  );
}
