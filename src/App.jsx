import Home from './pages/home'
import About from './pages/about'
import ScrollyProgress from './components/scrollyprogress'
import NavBar from './components/navbar'
import Contact from './pages/contact'

function App() {

  return (
    <>
      <ScrollyProgress />

      <div className='bg-gray-300 h-full flex flex-col items-center '>
        <NavBar/>
        <div className='flex flex-col items-center w-full'>
        <Home />
        <About />
        </div>
        
      </div>
    </>
  )
}

export default App
