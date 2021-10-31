import React, { useState } from 'react'

import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

import { ListGroup, Row, Col } from 'react-bootstrap'

import InfoComida from '../components/info-comida'

export default function Alimentos () {
  const [modalShow, setModalShow] = useState(false)

  const Alimentos = [
    {
      nome: 'maçã',
      peso: '500g'
    },
    {
      nome: 'pera',
      peso: '500g'
    }
  ]

  return (

    <>
      <Head>
        <title>Alimentos</title>
        <meta name='description' content='Página inicial do site do Cursinho da EACH' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Row>
        <Col lg={2} md={2} sm={12} xs={12} />
        <Col lg={8} md={8} sm={12} xs={12}>
          <ListGroup>
            {Alimentos.map((data, key) => {
              return (
                <ListGroup.Item key={key} action href='#link1' onClick={() => setModalShow(true)}>
                  {data.nome}
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </Col>
        <Col lg={2} md={2} sm={12} xs={12} />
      </Row>

      <InfoComida
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </>
  )
}
