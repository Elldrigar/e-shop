import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message/Message'
import CheckoutSteps from '../components/CheckoutSteps/CheckoutSteps'

const PlaceOrderPage = () => {
  const cart = useSelector((state) => state.cart)
  return (
    <>
      <CheckoutSteps stepOne stepTwo stepThree stepFour />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Wysyłka</h2>
              <p>
                <strong>Adres: </strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city},{' '}
                {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Metoda Płatności</h2>
              <strong>Metoda: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>
          </ListGroup>

          <ListGroup.Item>
            <h2>Zamawiane Przedmioty</h2>
            {cart.cartItems.length === 0 ? (
              <Message>Twój koszyk jest pusty</Message>
            ) : (
              <ListGroup variant='flush'>
                {cart.cartItems.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <Row>
                      <Col md={1}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
	                    <Col md={4}>
		                    {item.qty} x {item.price} zł = {item.qty * item.price} zł
	                    </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        </Col>
      </Row>
    </>
  )
}

export default PlaceOrderPage
