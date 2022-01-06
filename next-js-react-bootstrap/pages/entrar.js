import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Row, Col, Form, Button } from 'react-bootstrap'

import styles from './entrar.module.css'

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
        <h1 id={styles.pageTitle}> Entrar </h1>
        <div className={styles.entrar}>
          <h3>Entrar </h3>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' placeholder='Insira seu email' />
              <Form.Text className='text-muted'>
                Nunca compartilharemos seu email com ninguém.
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Senha</Form.Label>
              <Form.Control type='password' placeholder='Insira sua senha' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Lembre de mim' />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Enviar
            </Button>
          </Form>
        </div>

      </Layout>

    </>
  )
}
