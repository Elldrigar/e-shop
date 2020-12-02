import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer/FormContainer'

const ShippingPage = ({ history }) => {
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState('')
  const submitHandler = (event) => {
    event.preventDefault()
    console.log('button clicked')
  }
  return (
    <FormContainer>
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
