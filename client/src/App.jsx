
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AnasayfaPage from './pages/AnasayfaPage'
import AuthPage from './pages/AuthPage'
import SepetPage from './pages/SepetPage'
import ProductDetailPage from './pages/ProductDetailPage'
import IletisimPage from './pages/IletisimPage'
import AlisverisPage from './pages/AlisverisPage'





function App() {
 

  return (
    <Routes>
    <Route path='/' element={<AnasayfaPage/>}></Route>
    <Route path='/Auth' element={<AuthPage/>}></Route>
    <Route path='/Sepet' element={<SepetPage/>}></Route>
    <Route path='/Product/:id' element={<ProductDetailPage/>}></Route>
    <Route path='/Iletisim' element={<IletisimPage/>}></Route>
    <Route path='/Alisveris' element={<AlisverisPage/>}></Route>
    </Routes>
  )
}

export default App
