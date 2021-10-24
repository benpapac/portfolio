import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Route } from 'react-router';
import {GameContext} from './GameContext';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Thoughts from './components/Thoughts/Thoughts.jsx';
import Projects from './components/Projects/Projects';


function App() {
  const [gameState, setGameState] = useState(false);
  return (
		<GameContext.Provider value={
      gameState,
      setGameState
      }
      >

        <div className='App'>
          <header className='App-header'>
            <Nav component={Nav} />
          </header>
          <main>

            <Route exact path='/'>
                <Home />
              </Route>

              <Route exact path='/thoughts'>
                <Thoughts component={Thoughts} />
              </Route>

              <Route exact path='/projects'>
                <Projects />
              </Route>
            
          </main>
          <footer>
          </footer>
        </div>

		</GameContext.Provider>
	);
}

export default App;
