
import About from './About'
import './App.css'
import Profile from './Profile'
import Interests from './Interest'
import Footer from './Footer'


function App() {

  return (
    <main className='main-page'>
      <div className='container'>
      <Profile />
        <div className='main-text-container'>
          <About/>
          <Interests/>
        </div>
  
      <Footer/>
      </div>
     </main>
  )
}

export default App
