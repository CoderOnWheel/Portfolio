import Sidebox from './components/Sidebox';
import './App.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Service from './components/Service';
import Contact from './components/Contact';

function App() {
 

  return (
    <>
<main className="main-box">
  <aside className="sidebox">
    <Sidebox />
  </aside>

  <div className="content-area">
    <header className="navbar">
      <Navbar />
    </header>

    <div className="portfolio-contain">
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="services"><Service /></section>
    </div>
  </div>
</main>


    </>
  )
}

export default App
