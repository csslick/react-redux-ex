import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Detail from './pages/Detail'
import About from './pages/About'
import Navbar from './components/Navbar'

// redux 모듈 및 store
import { Provider } from 'react-redux'
import store from './store'

function App() {

  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/detail' element={<Detail/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
