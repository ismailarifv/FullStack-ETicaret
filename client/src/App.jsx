
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AnasayfaPage from './pages/AnasayfaPage'
import AuthPage from './pages/AuthPage'
import SepetPage from './pages/SepetPage'
import ProductDetailPage from './pages/ProductDetailPage'
import IletisimPage from './pages/IletisimPage'
import AlisverisPage from './pages/AlisverisPage'
import AdminUserPage from "./pages/admin/AdminUserPage";
import CategoryPage from './pages/admin/Categories/CategoryPage'
import UpdateCategoryPage from './pages/admin/Categories/UpdateCategoryPage'
import CreateCategoryPage from './pages/admin/Categories/CreateCategoryPage'
import CreateProductPage from './pages/admin/Products/CreateProductPage'





function App() {
 

  return (
    <Routes>
    <Route path='/' element={<AnasayfaPage/>}></Route>
    <Route path='/Auth' element={<AuthPage/>}></Route>
    <Route path='/Sepet' element={<SepetPage/>}></Route>
    <Route path='/Product/:id' element={<ProductDetailPage/>}></Route>
    <Route path='/Iletisim' element={<IletisimPage/>}></Route>
    <Route path='/Alisveris' element={<AlisverisPage/>}></Route>
    <Route path="/admin/*">
        <Route path="users" element={<AdminUserPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
        <Route path="categories/create" element={<CreateCategoryPage />} />
        <Route path="products/create" element={<CreateProductPage />} />

      </Route>
    </Routes>
  )
}

export default App
