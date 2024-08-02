

import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Project from './components/Project'


function App() {


  return (
    <>
       <div className="bg-white dark:bg-gray-900">
      <Navbar/>
      <Banner/>
       <Skills/>
      <Project/>
      <Contact/>
      </div>
    </>
  )
}

export default App
