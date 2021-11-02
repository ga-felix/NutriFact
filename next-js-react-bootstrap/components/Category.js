import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import fetch from 'node-fetch'
import { Accordion, Card, ListGroup } from 'react-bootstrap'

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
      <Card key={props.chave}>
        <Accordion.Toggle as={Card.Header} eventKey={props.chave}>
          {props.category}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.chave}>
          <ListGroup>
            {props.alimentos.map((data, key) => {
              return (
                <ListGroup.Item key={data.id} action onClick={() => handleClick(data.id)}>
                  {data.description}
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </Accordion.Collapse>
      </Card>
    </>
  )
}
