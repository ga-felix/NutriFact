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
    calcularIMC(altura, massa)
    // Alternativa 1
    // const formData = event.target
    // formData.map(el => {
    //     console.log(el.value)
    // })

    // Alternativa 2
    // console.log(formData[0].value)
    // console.log(formData[1].value)
  }

  const calcularIMC = (alt, mas) => {
    const resultado = (mas / (alt * alt)).toFixed(2)

    setResultado(resultado)

    switch (true) {
      case (resultado <= 18.5):
        setMessage('De acordo com a OMS, seu IMC está abaixo do recomendado para a sua altura.')
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
        setResultado('0')
        setMessage('Não foi possível calcular seu IMC. Verifique os valores inseridos.')
        setVariante('primary')
    }
  }

  return (
    <>
      <Layout>

        <h1 id={styles.pageTitle}> Calcular IMC </h1>

        <div className={styles.introducao}>
          <div className={styles.info}>
            <h3>O que é IMC?</h3>
            <p>
              IMC significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura, o que pode interferir diretamente na saúde e qualidade de vida da pessoa. Assim, a partir do resultado do IMC é possível saber também se a pessoa está dentro do peso ideal e também identificar sobrepeso, obesidade ou desnutrição em crianças, adolescentes, adultos ou idosos.
              Dessa forma, com o cálculo do IMC, é possível fazer algumas mudanças na rotina diária, como mudar a dieta, melhorar os hábitos alimentares e praticar atividade física de forma regular, por exemplo.
            </p>
          </div>
          <div className={styles.info}>
            <h3>Por que é importante saber o IMC?</h3>
            <p>
              Saber o IMC é importante para verificar se o peso está de acordo com a altura da pessoa, além de ser importante para saber se existe risco de desenvolver alguma doença. No caso das crianças, o IMC é importante para saber se o desenvolvimento está de acordo com o esperado.

              Além disso, sabendo o IMC, é possível também verificar qual o peso ideal e, assim, saber se a pessoa está acima ou abaixo do peso recomendado para a sua altura. Veja como é feito o cálculo do peso ideal.
            </p>
          </div>
        </div>

        <div className={styles.calcularImc}>
          <Form className={styles.formContainer}>
            <h3>Calcule seu IMC</h3>
            <p>Insira seus dados para calcularmos seu IMC</p>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Altura</Form.Label>
              <Form.Control type='text' value={altura} onChange={(e) => setAltura(e.target.value)} placeholder='Exemplo: 1.75' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Peso</Form.Label>
              <Form.Control type='text' value={massa} onChange={(e) => setMassa(e.target.value)} placeholder='Em quilogramas. Exemplo: 70' />
            </Form.Group>

            <Button variant='primary' type='button' onClick={handlerCalculate}>
              Calcular
            </Button>
          </Form>
        </div>

        {resultado && (
          <div className={styles.resultado}>
            <Alert variant={variante}>
              <Alert.Heading>Resultado</Alert.Heading>
              <hr />
              <p> Seu IMC é de <b>{resultado} kg/m².</b></p>
              {message}
            </Alert>
          </div>

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
