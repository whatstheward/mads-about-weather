import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherCont from './containers/WeatherCont'
import AppHeader from './components/AppHeader';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <WeatherCont/>
    </div>
  );
}

export default App;
