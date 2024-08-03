import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react'; // Correct import for ThemeProvider
import About from './component/About';
import Footer from './component/footer';
import Logo from './component/logo';
import Nav from './component/nav';
import OurProject from './component/our-projects';
import CreativeDirector from './component/creative-director';
import Service from './component/service';
import Home from './Home'; // Import the Home component

// Define your theme object
const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1c1c1c',
  },
  // Add other theme properties as needed
};

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Wrap the entire application with ThemeProvider */}
      <Router>
        <Nav /> {/* Add the Nav component here to display it on all pages */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Add the Home route */}
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/our-projects" element={<OurProject />} />
          <Route path="/services" element={<Service />} />
          <Route path="/creative-director" element={<CreativeDirector />} />
        </Routes>
        <Footer /> {/* Add the Footer component here to display it on all pages */}
      </Router>
    </ThemeProvider>
  );
}

export default App;