import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Form, Button, Row, Col } from 'react-bootstrap'

import styles from './cadastro.module.css'

import Layout from '../components/layout/layout'

export default function Icmc () {
  return (

    <>
      <Head>
        <title>Nutrifact - Calcular IMC</title>
        <meta name='description' content='Página inicial NutriFact' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Container fluid>
          <h1 id={styles.pageTitle}> Cadastro </h1>
          <div className={styles.cadastro}>
            <h3>Informe seus dados</h3>
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
              <Button variant='primary' type='submit'>
                Enviar
              </Button>
            </Form>
          </div>
        </Container>
      </Layout>

    </>
  )
}
