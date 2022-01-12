import fetch from 'node-fetch'
import React, { useState } from 'react'

import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Row, Col, Accordion } from 'react-bootstrap'

import styles from './alimentos.module.css'

import InfoComida from '../components/info-comida'
import Category from '../components/Category'

import Layout from '../components/layout/layout'

export default function Alimentos (props) {
  const padrao = [{
    id: 1,
    description: '-',
    base_qty: 100,
    base_unit: 'g',
    category_id: 1,
    attributes: {
      humidity: {
        qty: '-',
        unit: 'percents'
      },
      protein: {
        qty: '-',
        unit: 'g'
      },
      lipid: {
        qty: '-',
        unit: 'g'
      },
      cholesterol: {
        qty: 'NA',
        unit: 'mg'
      },
      carbohydrate: {
        qty: '-',
        unit: 'g'
      },
      fiber: {
        qty: '-',
        unit: 'g'
      },
      ashes: {
        qty: '-',
        unit: 'g'
      },
      calcium: {
        qty: '-',
        unit: 'mg'
      },
      magnesium: {
        qty: '-',
        unit: 'mg'
      },
      phosphorus: {
        qty: '-',
        unit: 'mg'
      },
      iron: {
        qty: '-',
        unit: 'mg'
      },
      sodium: {
        qty: '-',
        unit: 'mg'
      },
      potassium: {
        qty: '-',
        unit: 'mg'
      },
      copper: {
        qty: '-',
        unit: 'mg'
      },
      zinc: {
        qty: '-',
        unit: 'mg'
      },
      retinol: {
        qty: '-',
        unit: 'mcg'
      },
      thiamine: {
        qty: '-',
        unit: 'mg'
      },
      riboflavin: {
        qty: '-',
        unit: 'mg'
      },
      pyridoxine: {
        qty: '-',
        unit: 'mg'
      },
      niacin: {
        qty: '-',
        unit: 'mg'
      },
      energy: {
        kcal: '-',
        kj: 516.86999022
      },
      manganese: {
        qty: '-',
        unit: 'mg'
      }
    }
  }]

  const [show, setShow] = useState(false)

  const [alimento, setAlimento] = useState(padrao)

  return (

    <>
      <Head>
        <title>Alimentos</title>
        <meta name='description' content='Página inicial do site do Cursinho da EACH' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <h1 id={styles.pageTitle}> Valores Nutricionais</h1>
        <div className={styles.table}>
          <Accordion className={styles.accordion}>
            <Category key={1} chave={1} category='Cereais e derivados' alimentos={props.categoria1} show={setShow} alimento={setAlimento} />
            <Category key={2} chave={2} category='Verduras, hortaliças e derivados' alimentos={props.categoria2} show={setShow} alimento={setAlimento} />
            <Category key={3} chave={3} category='Frutas e derivados' alimentos={props.categoria3} show={setShow} alimento={setAlimento} />
            <Category key={4} chave={4} category='Gorduras e óleos' alimentos={props.categoria4} show={setShow} alimento={setAlimento} />
            <Category key={5} chave={5} category='Pescados e frutos do mar' alimentos={props.categoria5} show={setShow} alimento={setAlimento} />
            <Category key={6} chave={6} category='Carnes e derivados' alimentos={props.categoria6} show={setShow} alimento={setAlimento} />
            <Category key={7} chave={7} category='Leite e derivados' alimentos={props.categoria7} show={setShow} alimento={setAlimento} />
            <Category key={8} chave={8} category='Bebidas' alimentos={props.categoria8} show={setShow} alimento={setAlimento} />
            <Category key={9} chave={9} category='Ovos e derivados' alimentos={props.categoria9} show={setShow} alimento={setAlimento} />
            <Category key={10} chave={10} category='Produtos açucarados' alimentos={props.categoria10} show={setShow} alimento={setAlimento} />
            <Category key={11} chave={11} category='Miscelâneas' alimentos={props.categoria11} show={setShow} alimento={setAlimento} />
            <Category key={12} chave={12} category='Outros alimentos industrializados' alimentos={props.categoria12} show={setShow} alimento={setAlimento} />
            <Category key={13} chave={13} category='Alimentos preparados' alimentos={props.categoria13} show={setShow} alimento={setAlimento} />
            <Category key={14} chave={14} category='Leguminosas e derivados' alimentos={props.categoria14} show={setShow} alimento={setAlimento} />
            <Category key={15} chave={15} category='Nozes e semestes' alimentos={props.categoria15} show={setShow} alimento={setAlimento} />
          </Accordion>
        </div>

        <InfoComida
          alimento={alimento}
          show={show}
          onHide={() => setShow(false)}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps (context) {
  const res = await fetch('http://localhost:4000/api/v1/category')
  const categorias = await res.json()

  const res1 = await fetch('http://localhost:4000/api/v1/category/1/food')
  const categoria1 = await res1.json()

  const res2 = await fetch('http://localhost:4000/api/v1/category/2/food')
  const categoria2 = await res2.json()

  const res3 = await fetch('http://localhost:4000/api/v1/category/3/food')
  const categoria3 = await res3.json()

  const res4 = await fetch('http://localhost:4000/api/v1/category/4/food')
  const categoria4 = await res4.json()

  const res5 = await fetch('http://localhost:4000/api/v1/category/5/food')
  const categoria5 = await res5.json()

  const res6 = await fetch('http://localhost:4000/api/v1/category/6/food')
  const categoria6 = await res6.json()

  const res7 = await fetch('http://localhost:4000/api/v1/category/7/food')
  const categoria7 = await res7.json()

  const res8 = await fetch('http://localhost:4000/api/v1/category/8/food')
  const categoria8 = await res8.json()

  const res9 = await fetch('http://localhost:4000/api/v1/category/9/food')
  const categoria9 = await res9.json()

  const res10 = await fetch('http://localhost:4000/api/v1/category/10/food')
  const categoria10 = await res10.json()

  const res11 = await fetch('http://localhost:4000/api/v1/category/11/food')
  const categoria11 = await res11.json()

  const res12 = await fetch('http://localhost:4000/api/v1/category/12/food')
  const categoria12 = await res12.json()

  const res13 = await fetch('http://localhost:4000/api/v1/category/13/food')
  const categoria13 = await res13.json()

  const res14 = await fetch('http://localhost:4000/api/v1/category/14/food')
  const categoria14 = await res14.json()

  const res15 = await fetch('http://localhost:4000/api/v1/category/15/food')
  const categoria15 = await res15.json()

  return {
    props: {
      categorias,
      categoria1,
      categoria2,
      categoria3,
      categoria4,
      categoria5,
      categoria6,
      categoria7,
      categoria8,
      categoria9,
      categoria10,
      categoria11,
      categoria12,
      categoria13,
      categoria14,
      categoria15
    } // will be passed to the page component as props
  }
}
