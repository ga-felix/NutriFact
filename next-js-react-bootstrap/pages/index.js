import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Form, Button, Row, Col, Container } from 'react-bootstrap'

import styles from './index.module.css'

import Layout from '../components/layout/layout'

export default function Home () {
  return (

    <>
      <Head>
        <title>Nutrifact</title>
        <meta name='description' content='Página inicial do site do Cursinho da EACH' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Container fluid>
          <h1 id={styles.pageTitle}> Início </h1>
          <Row>
            <Col lg={2} md={2} sm={12} xs={12} />
            <Col lg={8} md={8} sm={12} xs={12}>
              <Form>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type='text' placeholder='Insira seu nome' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' placeholder='exemplo@exemplo.com' />
                  <Form.Text className='text-muted'>
                    Nós nunca compartilharemos seu email com ninguém.
                  </Form.Text>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type='password' placeholder='Senha' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Label>Confirme sua senha</Form.Label>
                  <Form.Control type='password' placeholder='Senha' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                  <Form.Check type='checkbox' label='Check me out' />
                </Form.Group>
                <Button variant='primary' type='submit'>
                  Enviar
                </Button>
              </Form>
            </Col>
            <Col lg={2} md={2} sm={12} xs={12} />
          </Row>
        </Container>
      </Layout>
    </>
  )
}
