import { useStore } from './useStore';

export const useDispatch = <S>() => {
  const { dispatch } = useStore<S>();

  return dispatch;
};
