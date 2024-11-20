import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainSection } from './components/MainSection';
import { Services } from './components/Services';

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


function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* The header should stay on all pages */}
        
        <Routes>
          <Route path="/" element={
            <>
              <MainSection />
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
