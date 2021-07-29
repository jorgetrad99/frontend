import React from 'react';
import '../styles/App.styl';

import Header from '../components/Header';
/* import About from '../components/About'; */
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

const App = () => {
  return (
    <div className="App__container">
      <Header />
      {/*   <About />
      </Header> */}
      <Profile />
      <Experience />
      <div className="Container">
        <Academic />
        <Skills />
      </div>
      <div className="Container">
        <Interest />
        <Languages />
      </div>
    </div>
  );
};

export default App;