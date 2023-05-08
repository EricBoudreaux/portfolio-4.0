import { useState } from 'react'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';


function App() {

  const [display, setDisplay] = useState('hero');

  const changeDisplay = (display) => {
    setDisplay(display);
  }




  return (
    <div className="p-2 h-screen md:max-w-[1060px] mx-auto">
      <Navbar changeDisplay={changeDisplay}/>
      {/* <Hero />  */}

      {/* <About /> */}
      {/* <Work />   */}

      {/* <Contact />  */}
      {display === 'hero' ? <Hero /> : null}
      {display === 'about' ? <About /> : null}
      {display === 'work' ? <Work /> : null}
      {display === 'contact' ? <Contact /> : null}
    </div>
  );
}

export default App;
