import {useRef, useEffect} from 'react';

interface UseScrollToTop {
  scrollRef: React.RefObject<any>;
  condition: boolean;
}

export const useScrollToTop = ({scrollRef, condition}: UseScrollToTop) => {
  const prevConditionRef = useRef<any>(null);

  useEffect(() => {
    if (condition && !prevConditionRef.current) {
      prevConditionRef.current = condition;
      scrollRef.current?.scrollTo({y: 0});
    } else if (!condition) {
      prevConditionRef.current = condition;
    }
  }, [condition, scrollRef]);
};
