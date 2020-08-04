import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { NameNavbarProvider } from '../contexts/navbar-context';
import { ToggleProvider } from '../contexts/toggle-context';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Container from './Container';

import Routes from '../routes/routes';

function App() {

  const [ nameNavbar, setNameNavbar ] = useState('Home');
  const [toggle, setToggle] = useState(false);

  const nameProvider = {
    nameValue: [nameNavbar, setNameNavbar]
  };

  const toggleProvider = {
    toggleValue: [toggle, setToggle]
  };

  return (
    <>
      <ToggleProvider value={toggleProvider}>
        <div className={`app ${toggle ? '--hidden': ''}`}>
          <Router>
            <NameNavbarProvider value={nameProvider}>
              <Sidebar />

              <Navbar />

              <Container>
                <Routes />
              </Container>
            </NameNavbarProvider>
          </Router>
        </div>
      </ToggleProvider>
    </>
  );
}

export default App;
