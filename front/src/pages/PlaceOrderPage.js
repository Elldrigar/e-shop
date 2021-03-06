import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message/Message'
import CheckoutSteps from '../components/CheckoutSteps/CheckoutSteps'
import { createOrder } from '../actions/orderActions'

const PlaceOrderPage = ({ history }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  //CALCULATE PRICES
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }
  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0),
  )
  cart.itemsShipping = addDecimals(cart.itemsPrice > 500 ? 0 : 29)
  cart.itemsTax = addDecimals(Number((0.07 * cart.itemsPrice).toFixed(2))) // JAKI PODATEK ? ^^
  cart.itemsTotal = addDecimals(
    Number(cart.itemsPrice) +
      Number(cart.itemsShipping) +
      Number(cart.itemsTax),
  )

  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`)
    }
    // eslint-disable-next-line
  }, [history, success])

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        itemsShipping: cart.itemsShipping,
        itemsTax: cart.itemsTax,
        itemsTotal: cart.itemsTotal,
      }),
    )
  }
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
                        {item.qty} x {item.price} zł = {item.qty * item.price}{' '}
                        zł
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Podsumowanie</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Przedmioty</Col>
                  <Col>{cart.itemsPrice} zł</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Dostawa</Col>
                  <Col>{cart.itemsShipping} zł</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Podatek</Col>
                  <Col>{cart.itemsTax} zł</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Razem</Col>
                  <Col>{cart.itemsTotal} zł</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant='danger'>{error}</Message>}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  ZAMAWIAM
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PlaceOrderPage
