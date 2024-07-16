import React from 'react'
import Layout from './components/Layout/Layout'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contect from './pages/Contect'
import Menu from './pages/Menu'
import Pagefound from './pages/Pagefound'
import MenuItemPage from './pages/MenuItemPage'



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/contect' element={<Contect/>}/>
        <Route path='*' element={<Pagefound/>}/>
        <Route path="/" element={<Menu />} />
        <Route path="/menu/:name" element={<MenuItemPage />} />
      
       
      </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
