import React, { useState } from 'react'

import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

import { ListGroup, Row, Col } from 'react-bootstrap'

import InfoComida from '../components/info-comida'

export default function Alimentos () {
  const [show, setShow] = useState(false)

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

  //   const categorias = [{ id: 1, category: 'Cereais e derivados' }, { id: 2, category: 'Verduras, hortaliças e derivados' }, { id: 3, category: 'Frutas e derivados' }, { id: 4, category: 'Gorduras e óleos' }, { id: 5, category: 'Pescados e frutos do mar' }, { id: 6, category: 'Carnes e derivados' }, { id: 7, category: 'Leite e derivados' }, { id: 8, category: 'Bebidas (alcoólicas e não alcoólicas)' }, { id: 9, category: 'Ovos e derivados' }, { id: 10, category: 'Produtos açucarados' }, { id: 11, category: 'Miscelâneas' }, { id: 12, category: 'Outros alimentos industrializados' }, { id: 13, category: 'Alimentos preparados' }, { id: 14, category: 'Leguminosas e derivados' }, { id: 15, category: 'Nozes e sementes' }]
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
                <ListGroup.Item key={key} action onClick={() => setShow(true)}>
                  {data.nome}
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </Col>
        <Col lg={2} md={2} sm={12} xs={12} />
      </Row>

      <InfoComida
        show={show}
        onHide={() => setShow(false)}
      />

    </>
  )
}
