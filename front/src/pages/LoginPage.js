import React, { useState, useEffect } from 'react'
import { FormContainer } from '../components/FormContainer'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message/Message'
import Loader from '../components/Loader/Loader'
import { login } from '../actions/userActions'

const LoginPage = ({ location }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
	const redirect = location.search ? location.search.split('=')[1] : '/'
	const submitHandler = (event) => {
  	event.preventDefault()
	}

  return (
    <FormContainer>
      <h1>Zaloguj</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type='email'
            placeholder='Wprowadź e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Hasło</Form.Label>
          <Form.Control
            type='password'
            placeholder='Wprowadź hasło'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type='submit' variant='primary'>
          Zaloguj się
        </Button>
      </Form>
      <Row>
        <Col>
          Nie posiadasz konta?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Zarejestruj się
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginPage
