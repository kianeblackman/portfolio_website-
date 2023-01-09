// Description: This is the main component of the app. It contains the navigation bar and the routes.

// Additional imports
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Styles/App.css';

// Page imports
import AboutPage from './pages/AboutPage/AboutPage.js';
import CodePage from './pages/CodePage/CodePage.js';
import DesignPage from './pages/DesignPage/DesignPage.js';
import FilmPage from './pages/FilmPage/FilmPage.js';

// Design project imports
import MammalsMoo from './pages/DesignPage/projects/MammalsMoo.js';
import CktrlRobyn from './pages/DesignPage/projects/CktrlRobyn.js';
import MediaPlanet from './pages/DesignPage/projects/MediaPlanet.js';
import KingstonGraphicsWeekend from './pages/DesignPage/projects/KingstonGraphicsWeekend.js';
import ToiletRollRoll from './pages/DesignPage/projects/ToiletRollRoll.js';
import RootedAndBooted from './pages/DesignPage/projects/RootedAndBooted.js';

// Film project imports
import Joyride from './pages/FilmPage/projects/Joyride.js';
import WreckedCare from './pages/FilmPage/projects/WreckedCare.js';
import StrawsSuck from './pages/FilmPage/projects/StrawsSuck.js';
import Ablert from './pages/FilmPage/projects/Ablert.js';
import TakeAChance from './pages/FilmPage/projects/TakeAChance.js';
import Jargogle from './pages/FilmPage/projects/Jargogle.js';

// Code project imports
import Trove from './pages/CodePage/projects/Trove.js';
import ToDoList from './pages/CodePage/projects/ToDoList.js';
import Portfolio from './pages/CodePage/projects/Portfolio.js';

// 404 page import
import NotFound from './pages/NotFound.js';

// App component
function App() {
  // Set's the default state background colour
  const [color, setColour] = useState('#FFFBEB');

  // Set's the background colour to the colour stored in local storage on page refresh
  useEffect(() => {
    const data = localStorage.getItem('my-background-colour');
    if (data) {
      setColour(data);
    }
  }, []);

  // Sets the background colour to the colour passed in
  let lsColour = (document.body.style.backgroundColor = color);

  // Stores the last set background colour in local storage
  useEffect(() => {
    localStorage.setItem('my-background-colour', lsColour);
  });

  // Returns the navigation bar and the all app routes
  return (
    <>
      <nav className="z-1 fixed grid h-6 w-full grid-cols-4">
        <div className="flex h-12 items-center justify-center bg-yellow-50">
          <NavLink to="/" onClick={() => setColour('#FFFBEB')}>
            <li className="text-1xl prevent-highlight flex items-center justify-center font-head font-medium hover:underline xs:text-2xl">
              ABOUT
            </li>
          </NavLink>
        </div>
        <div className="flex h-12 items-center justify-center bg-orange-400">
          <NavLink to="/code" onClick={() => setColour('#FB923C')}>
            <li className="text-1xl prevent-highlight flex items-center justify-center font-head font-medium hover:underline xs:text-2xl">
              CODE
            </li>
          </NavLink>
        </div>
        <div className="flex h-12 items-center justify-center bg-blue-500">
          <NavLink to="/design" onClick={() => setColour('#3B82F6')}>
            <li className="text-1xl prevent-highlight flex items-center justify-center font-head font-medium hover:underline xs:text-2xl">
              DESIGN
            </li>
          </NavLink>
        </div>
        <div className="flex h-12 items-center justify-center bg-pink-400">
          <NavLink to="/film" onClick={() => setColour('#F472B6')}>
            <li className="text-1xl prevent-highlight flex items-center justify-center font-head font-medium hover:underline xs:text-2xl">
              FILM
            </li>
          </NavLink>
        </div>
      </nav>
      <div className="z-0">
        <Routes>
          <Route path="/" element={<AboutPage />}></Route>
          <Route path="/code" element={<CodePage />}></Route>
          <Route path="/code/trove" element={<Trove />}></Route>
          <Route path="/code/to-do-list" element={<ToDoList />}></Route>
          <Route path="/code/portfolio" element={<Portfolio />}></Route>
          <Route path="/design" element={<DesignPage />}></Route>
          <Route path="/design/mammals-moo" element={<MammalsMoo />}></Route>
          <Route path="/design/cktrl-robyn" element={<CktrlRobyn />}></Route>
          <Route path="/design/media-planet" element={<MediaPlanet />}></Route>
          <Route
            path="/design/toilet-roll-roll"
            element={<ToiletRollRoll />}
          ></Route>
          <Route
            path="/design/kingston-graphics-weekend"
            element={<KingstonGraphicsWeekend />}
          ></Route>
          <Route
            path="/design/rooted-and-booted"
            element={<RootedAndBooted />}
          ></Route>
          <Route path="/film" element={<FilmPage />}></Route>
          <Route path="/film/joyride" element={<Joyride />}></Route>
          <Route
            path="/film/2-wrecked-2-care"
            element={<WreckedCare />}
          ></Route>
          <Route path="/film/straws-suck" element={<StrawsSuck />}></Route>
          <Route path="/film/&albert" element={<Ablert />}></Route>
          <Route path="/film/take-a-chance" element={<TakeAChance />}></Route>
          <Route path="/film/jargogle" element={<Jargogle />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
