import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/Sidebar'
import Feed from './components/feed/Feed';

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />

      {/* APP body */}
      <div className="app__body">
        <Sidebar />
        {/* side bar */}
        <Feed />
        {/* feed */}
        {/* widgets */}
      
      </div>
    </div>
  );
}

export default App;
