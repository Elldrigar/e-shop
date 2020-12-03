import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer/FormContainer'
import { savePaymentMethod } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps/CheckoutSteps'

const PaymentPage = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  if (!shippingAddress) {
    history.push('/shipping')
  }
  const [paymentMethod, setPaymentMethod] = useState('PayPal')
  const dispatch = useDispatch()
  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }
  return (
    <FormContainer>
      <CheckoutSteps stepOne stepTwo stepThree />
      <h1>Płatności</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Wybierz metode płatności</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='PayPal lub Karta Kredytowa'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(event) => setPaymentMethod(event.target.value)}
            />
          </Col>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Kontynuj
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentPage
