import { Store } from 'simply-state';

import { useDispatch } from '../../../src';

export interface RootState {
  count: number;
}

const initialState: RootState = {
  count: 0,
};

export const store = new Store<RootState>(initialState);

export const useAppDispatch = () => useDispatch<RootState>();
