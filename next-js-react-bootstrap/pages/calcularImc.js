import styles from './calcularImc.module.css'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Alert, FloatingLabel, Form, Button, Table, Row, Col } from 'react-bootstrap'

import Layout from '../components/layout/layout'

export default function CalcularImc () {
  const [altura, setAltura] = useState('') // Ao alterar os valores, um reload do componente é feito
  const [massa, setMassa] = useState('')
  const [resultado, setResultado] = useState('')
  const [variante, setVariante] = useState('')
  const [message, setMessage] = useState('')

  const handlerCalculate = (event) => {
    event.preventDefault() // Comando responsável por prevenir de dar refresh na página ao enviar o formulário.

    // Alternativa 1
    // const formData = event.target
    // formData.map(el => {
    //     console.log(el.value)
    // })

    // Alternativa 2
    // console.log(formData[0].value)
    // console.log(formData[1].value)

    const resultadoIMC = calcularIMC(altura, massa)

    setResultado(resultadoIMC)

    console.log(resultado)
  }

  const calcularIMC = (alt, mas) => {
    const resultado = (mas / (alt * alt)).toFixed(2)

    switch (true) {
      case (resultado <= 18.5):
        setMessage(`De acordo com a OMS, seu IMC está abaixo do recomendado para a sua altura ${resultado}`)
        setVariante('danger')
        break
      case (resultado > 18.5 && resultado <= 24.9):
        setMessage('De acordo com a OMS, seu IMC é considerado normal para a sua altura.')
        setVariante('success')
        break
      case (resultado > 24.9 && resultado <= 30):
        setMessage('De acordo com a OMS, seu IMC está acima do recomendado para a sua altura')
        setVariante('warning')
        break
      case (resultado > 30):
        setMessage('De acordo com a OMS, seu IMC está acima do recomendado para a sua altura')
        setVariante('danger')
        break
      default:
        console.log('Sorry, we are out of sei la')
    }

    return resultado
  }

  return (
    <>
      <Layout>

        <h1 id={styles.pageTitle}> Calcular IMC </h1>

        <Form className={styles.formContainer}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Altura</Form.Label>
            <Form.Control type='text' value={altura} onChange={(e) => setAltura(e.target.value)} placeholder='Metros' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Massa</Form.Label>
            <Form.Control type='text' value={massa} onChange={(e) => setMassa(e.target.value)} placeholder='Quilograma' />
          </Form.Group>

          <Button variant='primary' type='button' onClick={handlerCalculate}>
            Calcular
          </Button>
        </Form>

        {resultado && (
          <Row>
            <Col lg={1} md={1} sm={0} xs={0} />
            <Col lg={10} md={10} sm={12} xs={12}>
              <Alert variant={variante}>
                <Alert.Heading>Resultado</Alert.Heading>
                <hr />
                <p> Seu IMC é de <b>{resultado} kg/m².</b></p>
                {message}
              </Alert>
            </Col>
            <Col lg={1} md={1} sm={0} xs={0} />
          </Row>
        )}

        <div className={styles.tabelaContainer}>
          <Table striped bordered hover className={styles.tabelaIMC}>
            <thead>
              <tr>
                <th>IMC</th>
                <th>Classificação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Menor que 18,5</td>
                <td>Magro</td>
              </tr>
              <tr>
                <td>Entre 18,5 e 24,9</td>
                <td>Normal</td>
              </tr>
              <tr>
                <td>Entre 25,0 e 29,9</td>
                <td>Sobrepeso</td>
              </tr>
              <tr>
                <td>Entre 30,0 e 39,9</td>
                <td>Obesidade</td>
              </tr>
              <tr>
                <td>Maior que 40,0</td>
                <td>Obesidade Grave</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Layout>

    </>
  )
}
