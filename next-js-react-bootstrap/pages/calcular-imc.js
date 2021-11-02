import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Row, Col, Form, Button } from 'react-bootstrap'
import styles from './calcular-imc.module.css'
import Layout from '../components/layout/layout'

export default function Home () {
  return (

    <>
      <Head>
        <title>Calcular IMC</title>
        <meta name='description' content='Página inicial do site do Cursinho da EACH' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <h1 id={styles.pageTitle}> Calcular IMC </h1>
        <Row>
          <Col lg={1} md={1} sm={0} xs={0} />
          <Col lg={10} md={10} sm={12} xs={12}>
            <Form>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId='exampleForm.SelectCustom'>
                <Form.Label>Custom select</Form.Label>
                <Form.Control as='select' custom>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check type='checkbox' label='Check me out' />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Enviar
              </Button>
            </Form>
          </Col>
          <Col lg={10} md={10} sm={0} xs={0} />
        </Row>

      </Layout>

    </>
  )
}
