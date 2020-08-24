import React from 'react';
import { Layout } from 'antd';

import { BrowserRouter as Router } from 'react-router-dom';
import { StoresContext, createStore } from './entities/index';
import { Routes } from './pages/index';

import { Header } from 'src/Layout/Header';
import { Footer } from 'src/Layout/Footer';
import './App.css';

const { Content } = Layout;

function App() {
  return (
    <Layout id="rootSection">
      <Router>
        <Header />
        <StoresContext.Provider value={createStore()}>
          <Content>
            <Routes />
          </Content>
        </StoresContext.Provider>
        <Footer />
      </Router>
    </Layout>
  );
}

export default App;
