import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Benefits from './Components/Benefits'
import Tiers from './Components/Tiers'
import Contact from './Components/Contact'

function App() {

  return (
    <>
      {/* Animated Background */}
      <div className="fixed top-25 left-0 w-full h-full -z-10 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full animate-[waveMove_8s_ease-in-out_infinite_alternate]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#FF834A"
            fillOpacity="0.15"
            d="M0,320L480,288L960,192L1440,224L1920,160L1920,1080L0,1080Z"
          ></path>
        </svg>

        {/* Second layer for depth */}
        <svg
          className="absolute top-0 left-0 w-full h-full animate-[waveMove_10s_ease-in-out_infinite_alternate]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#FF4A5D"
            fillOpacity="0.1"
            d="M0,224L480,192L960,256L1440,192L1920,224L1920,1080L0,1080Z"
          ></path>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Benefits />
        <Tiers />
        <Contact />
      </div>
    </>
  )
}

export default App
