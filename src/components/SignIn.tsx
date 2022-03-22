import React from 'react'
import {Container, Form, Col, Button} from 'react-bootstrap'

const SignIn = () => {
  return (
    <Container className='d-grid h-100 signContainer' >
        <Form>
            <h1>Zaloguj się</h1>
            <Col xs={{span:10, offset:1}} md={{span:12}}>
            <Form.Group>
                <Form.Label className='labelText'>Adres email</Form.Label>
                <Form.Control type='email' size='lg' placeholder='Wprowadź adres email'
                autoComplete='email' className='position-relative'/>
            </Form.Group>
            <Form.Group>
                <Form.Label className='labelText'>Hasło</Form.Label>
                <Form.Control type='password' size='lg' placeholder='Wprowadź hasło'
                autoComplete='password' className='position-relative'/>
            </Form.Group>
            <br />
            <div className='d-grid'>
            <Button variant="primary" size='lg'>Zarejestruj się</Button>
            </div>
            <p>
                Nie masz konta? <a href='#'>Zarejestruj się</a>
            </p>
            </Col>
        </Form>
    </Container>
  )
}

export default SignIn