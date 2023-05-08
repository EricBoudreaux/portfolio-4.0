import { useState } from 'react'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';


function App() {

  const [display, setDisplay] = useState('hero');

  const [navBrand, setNavBrand] = useState(true)

  const changeDisplay = (display) => {
    setDisplay(display);

    if(display === 'hero'){
      setNavBrand(false)
    } else {
      setNavBrand(true)
    }

    if(display === 'about'){

    }
  }




  return (
    <div className="p-2 h-screen md:max-w-[1060px] mx-auto">
      <Navbar changeDisplay={changeDisplay} navBrand={navBrand}/>
      {/* <Hero />  */}

      {/* <About /> */}
      {/* <Work />   */}

      {/* <Contact />  */}
      {display === 'hero' ? <Hero className=''  /> : null}
      {display === 'about' ? <About /> : null}
      {display === 'work' ? <Work /> : null}
      {display === 'contact' ? <Contact /> : null}
    </div>
  );
}

export default App;
