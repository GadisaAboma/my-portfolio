import './App.css';
import Header from './components/header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
