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
            <Col lg={8} md={8} sm={12} xs={12} />
            <Col lg={2} md={2} sm={12} xs={12} />
          </Row>
        </Container>
      </Layout>
    </>
  )
}
