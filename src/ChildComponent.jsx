

import React, { useState } from 'react';
import { useAppContext } from './AppContext';

function ChildComponent() {
  const { handleCellToggle } = useAppContext();
  const [isOn, setIsOn] = useState(false);

  const toggleCell = () => {
    setIsOn(!isOn);
    handleCellToggle(!isOn); 
  };

  const cellStyle = {
    width: '100px',
    height: '100px',
    border: '1px solid grey',
    backgroundColor: isOn ? 'black' : 'white',
  };

  return <div style={cellStyle} onClick={toggleCell}></div>;
}

export default ChildComponent;
