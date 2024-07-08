
import './App.css';
import Home from './component/Home';
import NavBar from './component/NavBar';
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';
function App() {
  // js code
  return (
    <div className="App">
      <body>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      </body>
      
      
      
    </div>
  );
}

export default App;
