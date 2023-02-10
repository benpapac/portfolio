import './App.css';
import { Route } from 'react-router';
import { createRef } from 'react';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects.jsx';
// import Contact from './components/Contact/emailJS';

function App() {


  const mainRef = createRef(null);
  const handleScroll = (e) => {
    console.log(e);
    console.log('hello');
  }

  return (
        <div className='App'>
          <header className='App-header'>
            <Nav component={Nav} />
          </header>
          <main>

            <Route exact path='/'>
                <Home />
              </Route>

              {/* <Route exact path='/thoughts'>
                <Thoughts component={Thoughts} />
              </Route> */}
              <Route exact path='/projects'>
                <Projects component={Projects}/>
              </Route>

              {/* <Route exact path='/contact'>
                <Resume component={Contact}/>
              </Route> */}
            
          </main>
          <footer>
          </footer>
        </div>
	);
}

export default App;
