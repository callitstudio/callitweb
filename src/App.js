import React from 'react';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {MainSection} from './components/MainSection';
import {Services} from './components/Services';
import {ProjectsSlider} from './components/ProjectsSlider';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Services />
      <ProjectsSlider />
      <Footer />
    </div>
  );
}

export default App;
