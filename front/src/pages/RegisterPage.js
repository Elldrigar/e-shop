import React, { useState, useEffect } from 'react'
import { FormContainer } from '../components/FormContainer'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message/Message'
import Loader from '../components/Loader/Loader'
import { register } from '../actions/userActions'

const RegisterPage = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const dispatch = useDispatch()
  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister
  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Hasła nie są takie same!')
    } else {
      dispatch(register(name, email, password))
    }
  }

  return (
    <FormContainer>
      <h1>Zarejestruj się</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Imię</Form.Label>
          <Form.Control
            type='name'
            placeholder='Wprowadź imię'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type='email'
            placeholder='Wprowadź e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Hasło</Form.Label>
          <Form.Control
            type='password'
            placeholder='Wprowadź hasło'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='confirmPassword'>
          <Form.Label>Potwierdź Hasło</Form.Label>
          <Form.Control
            type='password'
            placeholder='Potwierdź hasło'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Button type='submit' variant='primary'>
          Zarejestruj się
        </Button>
      </Form>
      <Row>
        <Col>
          Posiadasz już konto?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Zaloguj się
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterPage
