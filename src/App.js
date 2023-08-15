import './App.css';
// import Navigation from './Navigation'
import Hero from './Hero'
import About from './About';
import Footer from './Footer';
import Skills from './Skills';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      < Hero />
      < About />
      < Skills />
      < Projects />
      < Footer />
    </div>
  );
}

export default App;
