import React from 'react';
// Components
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
import { Counter } from './features/counter/Counter';
import Categories from './Components/SubComponents/Categories/Categories'
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Counter />
      <Categories />
    </>
  );
}

export default App;
