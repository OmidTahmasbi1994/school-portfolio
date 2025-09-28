import {Routes , Route , useLocation} from 'react-router-dom'
import {Header} from './components/header'
import {AnimatePresence} from 'framer-motion'
import {Home} from './routes/home'
import {Manage} from './routes/manage'
import {Achivements} from './routes/achivments'
import {Arts} from './routes/arts'


function App() {
  const location = useLocation()

  return (
    <div className="w-full min-h-screen bg-[#ffffff] direction">
      <Header />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home/>} />
          <Route path="/management" element={<Manage/>} />
          <Route path="/achivements" element={<Achivements/>} />
          <Route path="/arts" element={<Arts/>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
