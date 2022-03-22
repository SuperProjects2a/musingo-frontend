import React from 'react'
import {Container, Form, Col, Button,Row} from 'react-bootstrap'

const SignUp = () => {
  return (
    <Container className='d-grid h-100 signContainer' >
        <Form>
            <h1>Zarejestruj się</h1>
            <Col xs={{span:10, offset: 1}} md={{span:8, offset: 2}}>
            <Form.Group>
                <Form.Label className='labelText'>Imię</Form.Label>
                <Form.Control type='text' size='lg' placeholder='Wprowadź imię'
                autoComplete='name' />
            </Form.Group>
            <Form.Group>
                <Form.Label className='labelText'>Nazwisko</Form.Label>
                <Form.Control type='text' size='lg' placeholder='Wprowadź nazwisko'
                autoComplete='surname' />
            </Form.Group>
            <Form.Group>
                <Form.Label className='labelText'>Adres email</Form.Label>
                <Form.Control type='email' size='lg' placeholder='Wprowadź adres email'
                autoComplete='email' />
            </Form.Group>
            <Form.Group>
                <Form.Label className='labelText'>Hasło</Form.Label>
                <Form.Control type='password' size='lg' placeholder='Wprowadź hasło'
                autoComplete='password' />
            </Form.Group>
            <Form.Group>
                <Form.Label className='labelText'>Data urodzenia</Form.Label>
                <Form.Control type='date' size='lg' placeholder='Wprowadź date urodzenia'
                autoComplete='birth' />
            </Form.Group>
            <Form.Group>
                <Form.Label className='labelText'>Płeć</Form.Label>
                <Form.Control type='text' size='lg' placeholder='Wybierz płeć'
                autoComplete='gender' />
            </Form.Group>
            <Form.Group>
                <Form.Label className='labelText'>Numer telefonu</Form.Label>
                <Form.Control type='tel' size='lg' placeholder='Wprowadź numer telefonu'
                autoComplete='phoneNumber' />
            </Form.Group>
            <Row>
                <Col xs={8}>
                <Form.Group>
                <Form.Label className='labelText'>Ulica</Form.Label>
                <Form.Control type='text' size='lg' placeholder='Wprowadź ulice'
                autoComplete='street' />
            </Form.Group>
                </Col>
                <Col xs={4}>
                <Form.Group>
                <Form.Label className='labelText'>Numer domu</Form.Label>
                <Form.Control type='text' size='lg' placeholder=''
                autoComplete='houseNumber' />
            </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                <Form.Group>
                <Form.Label className='labelText'>Miasto</Form.Label>
                <Form.Control type='tel' size='lg' placeholder='Wybierz miasto'
                autoComplete='City' />
            </Form.Group>
                </Col>
                <Col xs={4}>
                <Form.Group>
                <Form.Label className='labelText'>Kod pocztowy</Form.Label>
                <Form.Control type='text' size='lg' placeholder='__-___'
                autoComplete='postCode' />
            </Form.Group>
                </Col>
            </Row>
              <br />
            <div className='d-grid'>
            <Button variant="primary" size='lg'>Zarejestruj się</Button>
            </div>
            <p>
                Masz już konto? <a href='#'>Zaloguj się</a>
            </p>
            </Col>
        </Form>
    </Container>
  )
}

export default SignUp