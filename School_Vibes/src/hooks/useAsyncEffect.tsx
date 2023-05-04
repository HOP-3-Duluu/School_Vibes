import {useEffect, DependencyList} from 'react';

type AsyncEffectCallback = () => Promise<void>;

export const useAsyncEffect = (
  effect: AsyncEffectCallback,
  deps?: DependencyList,
): void => {
  useEffect(() => {
    effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
