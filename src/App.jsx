import './App.css'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
function App() {
  return (
    <>
    {/* <Header /> */}
    <Banner/>
    <About/>
    <Project/>
    <Contact/>
    <NavBar/>
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          Portfolio by <strong>Harvie Liu</strong>, established in 2023.
        </p>
      </div>
    </footer>
    </>
  )
}

export default App
