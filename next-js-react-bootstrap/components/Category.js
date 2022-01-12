import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import fetch from 'node-fetch'
import { Accordion, Card, ListGroup } from 'react-bootstrap'

import styles from './category.module.css'

export default function Alimentos (props) {
  const fetchData = async (key) => {
    const req = await fetch('http://localhost:4000/api/v1/food/' + key)
    const newData = await req.json()
    console.log(newData)
    console.log('oi')
    props.alimento(newData)
  }

  function handleClick (key) {
    props.show(true)
    fetchData(key)
  }
  return (
    <>

      <Accordion.Item eventKey={props.chave} className={styles.noBorder}>
        <Accordion.Header>
          <div id={styles.bold}>
            {props.category}
          </div>
        </Accordion.Header>
        <Accordion.Body className={styles.accordionBody}>
          <ListGroup>
            {props.alimentos.map((data, key) => {
              return (
                <ListGroup.Item className={styles.item} key={data.id} action onClick={() => handleClick(data.id)}>
                  &gt; {data.description}
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </>
  )
}
