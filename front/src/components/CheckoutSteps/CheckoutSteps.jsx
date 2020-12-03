import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ stepOne, stepTwo, stepThree, stepFour }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {stepOne ? (
          <LinkContainer to='/login'>
            <Nav.Link>Logowanie</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Logowanie</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {stepTwo ? (
          <LinkContainer to='/shipping'>
            <Nav.Link>Wysyłka</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Wysyłka</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {stepThree ? (
          <LinkContainer to='/payment'>
            <Nav.Link>Płatności</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Płatności</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {stepFour ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>Zamawiam</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Zamawiam</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
