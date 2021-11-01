import styles from './calcularImc.module.css'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Form, Button, Table } from 'react-bootstrap'

export default function CalcularImc() {
    const [altura, setAltura] = useState('')        // Ao alterar os valores, um reload do componente é feito
    const [massa, setMassa] = useState('')
    const [resultado, setResultado] = useState('')

    const handlerCalculate = (event) => {
        event.preventDefault()        // Comando responsável por prevenir de dar refresh na página ao enviar o formulário.

        // Alternativa 1
        //const formData = event.target
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

        const resultado = mas / (alt * alt)

        return resultado
    }

    return (
        <>
            <Form className={styles.formContainer}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Altura</Form.Label>
                    <Form.Control type="text" value={altura} onChange={(e) => setAltura(e.target.value)} placeholder="Metros" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Massa</Form.Label>
                    <Form.Control type="text" value={massa} onChange={(e) => setMassa(e.target.value)} placeholder="Quilograma" />
                </Form.Group>

                <Button variant="primary" type="button" onClick={handlerCalculate}>
                    Calcular
                </Button>
            </Form>

            {resultado && (
                <div className={styles.resultadoContainer}>
                    <>
                        {resultado.toFixed(2)} kg
                    </>
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
        </>
    )
}