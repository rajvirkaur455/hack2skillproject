import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Counter({ end, suffix = '' }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div ref={ref}>
      {count.toLocaleString()}{suffix}
    </div>
  );
}
