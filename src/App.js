import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
// import { MainSection } from './components/MainSection';
import { Services } from './components/Services';
import HeroSection from './components/HeroSection';
import logo from './assets/logo.png'
import { ProjectsSlider } from './components/ProjectsSlider';
import Marketing from './components/Marketing';
import IT from './components/IT';
import Media from './components/Media';
import ContactUs from './components/ContactUs';
import Courses from './components/Courses';
import Events from "./components/Events"
import AboutUs from'./components/AboutUs';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContentWriting from './components/ContentWriting';
import Studio from './components/Studio';
// import AboutUs from './components/AboutUs';

const avatarSrcs = [
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
];

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* The header should stay on all pages */}
        <HeroSection
          title="Call IT Studio"
          subTitle="Top-quality service and expert management for every project need."
          primaryBtn="Start Exploring"
          primaryBtnURL="/projects"
          secondaryBtn="Contact Sales Team"
          secondaryBtnURL="/contact"
          withReview={true}
          avatars={avatarSrcs}
          rating="4.8 / 5"
          starCount={4}
          reviews="From Over Reviews"
          src={logo}
          alt="Call IT Studio Logo Main"
        />
        <Routes>
          <Route path="/" element={
            <>
              {/* Removed  */}
              {/* <MainSection /> */}
              <div id="Service">
                <Services /> {/* This renders on the home page */}
              </div>
              <ProjectsSlider />
            </>
          } />
          <Route path="/marketing" element={<Marketing />} /> {/* Marketing page route */}
          <Route path="/it" element={<IT />} /> {/* IT page route */}
          <Route path="/media" element={<Media />} /> {/* IT page route */}
          <Route path="/ContentWriting" element={<ContentWriting />} />
          <Route path="/contact_us" element={<ContactUs />} /> {/* Contact us page route */}
          <Route path="/courses" element={<Courses />} /> {/* Contact us page route */}
          <Route path="/studio" element={<Studio />} />  
          <Route path='/events' element={<Events/>}/> 
          <Route path='/aboutus' element={<AboutUs/>}/> 
        </Routes>

        <Footer /> {/* The footer should stay on all pages */}
      </div>
    </Router>
  );
}

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header /> {/* The header should stay on all pages */}
        
//         <Routes>
//           <Route path="/" element={
//             <>
//               <MainSection />
//               <Services /> {/* This renders on the home page */}
//               <ProjectsSlider />
//             </>
//           } />
//           <Route path="/marketing" element={<Marketing />} /> {/* Marketing page route */}
//           <Route path="/it" element={<IT />} /> {/* IT page route */}
//           <Route path="/media" element={<Media />} /> {/* IT page route */}
//           <Route path="/ContentWriting" element={<ContentWriting/>}/>
//           <Route path="/contact_us" element={<ContactUs />} /> {/* Contact us page route */}
//           <Route path="/courses" element={<Courses />} /> {/* Contact us page route */}

//         </Routes>

//         <Footer /> {/* The footer should stay on all pages */}
//       </div>
//     </Router>
//   );
// }

export default App;
