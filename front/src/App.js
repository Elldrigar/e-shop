import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import LoginPage from './pages/LoginPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import ShippingPage from './pages/ShippingPage'
import PaymentPage from './pages/PaymentPage'
import PlaceOrderPage from './pages/PlaceOrderPage'
import OrderPage from './pages/OrderPage'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-2'>
        <Container>
          <Route path='/order/:id' component={OrderPage} />
          <Route path='/shipping' component={ShippingPage} />
          <Route path='/payment' component={PaymentPage} />
          <Route path='/placeorder' component={PlaceOrderPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/product/:id' component={ProductPage} />
          <Route path='/cart/:id?' component={CartPage} />
          <Route path='/' component={HomePage} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
