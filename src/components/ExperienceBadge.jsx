import { useEffect, useRef, useState } from 'react';

export default function ExperienceBadge({ years = 3 }) {
  const ref = useRef(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    let timer;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let next = 1;
      setCount(1);
      timer = window.setInterval(() => {
        next += 1;
        setCount(Math.min(next, years));
        if (next >= years) window.clearInterval(timer);
      }, 280);
      observer.disconnect();
    }, { threshold: 0.5 });
    observer.observe(node);
    return () => {
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, [years]);

  return (
    <div ref={ref} className="experience-badge">
      <strong>{count}</strong>
      <span>YEARS</span>
      <small>Experience</small>
    </div>
  );
}
