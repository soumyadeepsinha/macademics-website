import { useEffect, useState } from 'react';

const useScrollProgess = () => {
  const [completion, setCompletion] = useState(0);
  useEffect(() => {
    const updateScroll = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }
    };
    // event
    window.addEventListener('scroll', updateScroll);
    // clear event
    return () => window.removeEventListener('scroll', updateScroll);
  }, [])
  return completion;
};

export default useScrollProgess