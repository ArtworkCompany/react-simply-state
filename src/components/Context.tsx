import { createContext } from 'react';

import { Store } from 'simply-state';

export interface SimplyStateContextValue<S = any> {
  store: Store<S>;
}

export const SimplyStateContext = createContext<SimplyStateContextValue>(
  null as never
);

if (process.env.NODE_ENV !== 'production') {
  SimplyStateContext.displayName = 'SimplyState';
}
