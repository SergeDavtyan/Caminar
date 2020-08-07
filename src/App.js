import React from 'react';
import './App.css';
import Header from './components/header/header';
import One from './components/one/one-section/one-section';
import Two from './components/two/two-section/two-section';
import Three from './components/three/three-section/three-section';
import Footer from './components/footer/footer';

const App = () => {

  return (

    <React.Fragment>

      <Header />
      <main className="inner">
        <One />
        <Two />
        <Three />
      </main>
      <Footer />
    </React.Fragment>

  );
}

export default App;
