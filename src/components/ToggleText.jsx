import React, { useState } from 'react';

function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={toggleText}>
        {isVisible ? 'Hide' : 'Show'}
      </button>

      {isVisible && <p>Hello, I am now visible!</p>}
    </div>
  );
}

export default ToggleText;