import './App.css'
import './components/Components.css'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <body>
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Education/>
        <Contact/>
      </body>
    </div>
  );
}

export default App;
