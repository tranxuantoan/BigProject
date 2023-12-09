
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import BlogHome from './components/pages/BlogHome'
import Category from './components/pages/Category'
import LoginForm from './components/pages/Login'
import Customer from './components/pages/Customer'
import NoPage from './components/pages/NoPage'
import ProductList1 from './components/pages/Product1'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='BigProject/' element={<HomePage/>}/>
        <Route path='BigProject/blog' element={<BlogHome/>}/>
        <Route path='BigProject/category' element={<Category/>}/>
        <Route path='BigProject/product' element={<ProductList1/>}/>
        <Route path='BigProject/login' element={<LoginForm/>}/>
        <Route path='BigProject/customer' element={<Customer/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App

