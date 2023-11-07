// App.jsx

import React from 'react';
import './App.css';
import ParentComponent from './ParentComponent';
import { AppProvider } from './AppContext';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <ParentComponent />
      </div>
    </AppProvider>
  );
}

export default App;
