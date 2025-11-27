import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Homepage.jsx'
import Submit from './pages/Submit.jsx'
import Wallpaper from './pages/Wallpaper.jsx'
import Header from "./pages/Components/Header.jsx"

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/submit' element={<Submit />} />
          <Route path='/wallpaper' element={<Wallpaper />} />
          <Route path='/wallpaper/:wallpaperId' element={<Wallpaper />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
