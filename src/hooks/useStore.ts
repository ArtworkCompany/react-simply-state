import { useContext } from 'react';

import {
  SimplyStateContext,
  SimplyStateContextValue,
} from '../components/Context';

export const useStore = <S>() => {
  const { store } = useContext<SimplyStateContextValue<S>>(SimplyStateContext);

  return store;
};
