import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoresContext, createStore } from './entities/index';
import { Routes } from './pages/index';
import ErrorModal from './molecules/ErrorModal';

import './App.css';

function App() {
  return (
    <Router>
      <StoresContext.Provider value={createStore()}>
        <Routes />
        <ErrorModal />
      </StoresContext.Provider>
    </Router>
  );
}

export default App;
