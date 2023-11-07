

import React from 'react';
import ChildComponent from './ChildComponent';
import { useAppContext } from './AppContext';

function ParentComponent() {
  const { count } = useAppContext();

  return (
    <div>
      <h1>Count: {count}</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '100px 100px',
          gap: '10px',
        }}
      >
        <ChildComponent />
        <ChildComponent />
        <ChildComponent />
        <ChildComponent />
      </div>
    </div>
  );
}

export default ParentComponent;
