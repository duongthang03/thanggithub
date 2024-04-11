import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes, useNavigate } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductDetail from './pages/ProductDetail'
import Dashboard from './pages/admin/Dashboard'
import { Product } from './interfaces/Product'
import { getAllProducts, createProduct, updateProduct, removeProduct } from './services/product'
// import Add from './components/Form/Add'
import ProductAdd from './pages/admin/ProductAdd'
import ProductEdit from './pages/admin/ProductEdit'
import CheckPermission from './components/CheckPermission'
// import Banner from './components/Banner/Banner-Boostrap'

const App = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    ;(async () => {
      const data = await getAllProducts()
      setProducts(data)
    })()
  }, [])
  const handleAddProduct = (product: Product) => {
    ;(async () => {
      const newProduct = await createProduct(product)
      setProducts([...products, newProduct])
      navigate('/admin')
    })()
  }
  const handleEditProduct = (product: Product) => {
    ;(async () => {
      const p = await updateProduct(product)
      setProducts(products.map((i) => (i.id === p.id ? p : i)))
      navigate('/admin')
    })()
  }
  const handleDeleteProduct = (id: number | undefined) => {
    ;(async () => {
      const isConfirm = window.confirm('Are you sure')

      if (isConfirm) {
        await removeProduct(`${id}`)
        setProducts(products.filter((i) => i.id !== id))
      }
    })()
  }
  // const [useLogged, setUseLogged] = useState((localStorage.getItem("accessToken")))
  // useEffect(() => {
  //   localStorage.setItem("accessToken", JSON.stringify(useLogged))
  // }, [useLogged])

  // const login = () => setUseLogged(true)
  // const logout = () => setUseLogged(false)
  // const checkPermision = () => {
  //   const checkSession = (localStorage.getItem("accessToken"));
  //   console.log(checkSession);
  //   if (checkSession) {
  //     navigate("/admin")
  //   } else {
  //     navigate("/")
  //   }
  // }
  return (
    <>
      <Header />
      {/* <Banner /> */}
      <Routes>
        {/* Client */}
        <Route path='/'>
          <Route index element={<Home product={products} />} />
          <Route path='/shop' element={<Home product={products} />} />
          <Route path='/shop/:id' element={<ProductDetail />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>
        {/* Admin */}
        <Route element={<CheckPermission />}>
          <Route path='/admin'>
            <Route index element={<Dashboard product={products} onDel={handleDeleteProduct} />} />
            <Route path='/admin/add' element={<ProductAdd onAdd={handleAddProduct} />} />
            <Route path='/admin/edit/:id' element={<ProductEdit onEdit={handleEditProduct} />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
