import React, { useEffect } from 'react';

const Timer = () => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      console.log('Key Pressed:', event.key);
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return <div>Press any key</div>;
};

export default Timer;
