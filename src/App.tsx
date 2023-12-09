
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
        <Route path='/' element={<HomePage/>}/>
        <Route path='/blog' element={<BlogHome/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/product' element={<ProductList1/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App

