import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message/Message'
import Loader from '../components/Loader/Loader'
import { getuserDetails } from '../actions/userActions'

const ProfilePage = ({ location, history }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState(null)
	const dispatch = useDispatch()
	const userDetails = useSelector((state) => state.userDetails)
	const { loading, error, user } = userDetails
	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	useEffect(() => {
		if (!userInfo) {
			history.push('/login')
		} else {
			if(!user.name) {
				dispatch(getuserDetails('profile'))
			} else {
				setName(user.name)
				setEmail(user.email)
			}
		}
	}, [dispatch, history, userInfo, user])

	const submitHandler = (event) => {
		event.preventDefault()
		if (password !== confirmPassword) {
			setMessage('Hasła nie są takie same!')
		} else {
			//DISPATCH PROFILE UPDATE
		}
	}

	return <Row>
		<Col md={3}>
			<h2>Profil Użytkownika</h2>
			{message && <Message variant='danger'>{message}</Message>}
			{error && <Message variant='danger'>{error}</Message>}
			{loading && <Loader />}
			<Form onSubmit={submitHandler}>
				<Form.Group controlId='name'>
					<Form.Label>Imię</Form.Label>
					<Form.Control
						type='name'
						placeholder='Wprowadź imigę'
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
					Uaktualnij
				</Button>
			</Form>
		</Col>
		<Col md={9}>
			<h2>Moje zamówienia</h2>
		</Col>
	</Row>
}

export default ProfilePage
