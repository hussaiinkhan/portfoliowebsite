import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';

import { ChakraProvider } from '@chakra-ui/react'
import Contact from './components/Contact';


function App() {
  return (
    <div >
      <ChakraProvider>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
      </ChakraProvider>
      
    </div>
  );
}

export default App;
