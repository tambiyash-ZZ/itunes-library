import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './router/AppRouter';

const App: React.FC = () => {
  return (
      <div>
          <AppRouter />
      </div>
  );
}

export default App;
