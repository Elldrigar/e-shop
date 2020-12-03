import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer/FormContainer'
import { saveShippingAdress } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps/CheckoutSteps'

const ShippingPage = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)
  const dispatch = useDispatch()
  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(saveShippingAdress({ address, city, postalCode, country }))
    history.push('/payment')
  }
  return (
    <FormContainer>
      <CheckoutSteps stepOne stepTwo/>
      <h1>Wysyłka</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Adres</Form.Label>
          <Form.Control
            type='text'
            placeholder='Wprowadź adres'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='city'>
          <Form.Label>Miasto</Form.Label>
          <Form.Control
            type='text'
            placeholder='Wprowadź miasto'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='postalCode'>
          <Form.Label>Kod Pocztowy</Form.Label>
          <Form.Control
            type='text'
            placeholder='Wprowadź kod pocztowy'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='country'>
          <Form.Label>Kraj</Form.Label>
          <Form.Control
            type='text'
            placeholder='Wprowadź kraj'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          />
        </Form.Group>
        <Button type='submit' variant='primary'>
          Kontynuj
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingPage
