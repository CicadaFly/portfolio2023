import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
function App() {
// Header 
// Navbar 
// Banner 
// About 
// Project & Key Skill 
// Contact
// bulma做不到fixed效果

  return (
    <>
    {/* <Header /> */}
    <Banner/>
    <About/>
    <Project/>
    <Contact/>
    <NavBar/>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Portfolio by <strong>Harvie Liu</strong>, established in 2023
        </p>
      </div>
    </footer>
    </>
  )
}

export default App
