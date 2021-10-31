import { Modal, Button, Table } from 'react-bootstrap'

import styles from './info-comida.module.css'

function InfoComida (props) {
  function capitalizeFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  function showKeys () {
    console.log({ values })
  }

  const alimento = {
    id: 1,
    description: 'Arroz, integral, cozido',
    base_qty: 100,
    base_unit: 'g',
    category_id: 1,
    attributes: {
      humidity: {
        qty: 70.1386666666667,
        unit: 'percents'
      },
      protein: {
        qty: 2.58825,
        unit: 'g'
      },
      lipid: {
        qty: 1.00033333333333,
        unit: 'g'
      },
      cholesterol: {
        qty: 'NA',
        unit: 'mg'
      },
      carbohydrate: {
        qty: 25.80975,
        unit: 'g'
      },
      fiber: {
        qty: 2.74933333333333,
        unit: 'g'
      },
      ashes: {
        qty: 0.463,
        unit: 'g'
      },
      calcium: {
        qty: 5.204,
        unit: 'mg'
      },
      magnesium: {
        qty: 58.702,
        unit: 'mg'
      },
      phosphorus: {
        qty: 105.853,
        unit: 'mg'
      },
      iron: {
        qty: 0.262,
        unit: 'mg'
      },
      sodium: {
        qty: 1.24466666666667,
        unit: 'mg'
      },
      potassium: {
        qty: 75.1516666666667,
        unit: 'mg'
      },
      copper: {
        qty: 0.020333333333333,
        unit: 'mg'
      },
      zinc: {
        qty: 0.682666666666667,
        unit: 'mg'
      },
      retinol: {
        qty: 'NA',
        unit: 'mcg'
      },
      thiamine: {
        qty: 0.08,
        unit: 'mg'
      },
      riboflavin: {
        qty: 'Tr',
        unit: 'mg'
      },
      pyridoxine: {
        qty: 0.08,
        unit: 'mg'
      },
      niacin: {
        qty: 'Tr',
        unit: 'mg'
      },
      energy: {
        kcal: 123.5348925,
        kj: 516.86999022
      },
      manganese: {
        qty: 0.627333333333333,
        unit: 'mg'
      }
    }
  }

  const keys = Object.keys(alimento.attributes)
  const values = Object.entries(alimento.attributes)

  return (
    <Modal
      {...props}
      aria-labelledby='example-custom-modal-styling-title'
      centered
      dialogClassName={styles.modal90w}
    >
      <Modal.Header closeButton>
        <Modal.Title id='example-custom-modal-styling-title'>
          Maçã
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Informações Nutricionais</h4>
        <Table responsive striped borderless hover>
          <thead>
            <tr>
              {keys.map((data, key) => {
                const label = capitalizeFirstLetter(data)
                return (
                  <th key={key}> {label} </th>
                )
              })}

            </tr>
          </thead>
          <tbody>
            <tr>
              {values.map((data, key) => {
                return (
                  <td key={key}> {data[1].qty} </td>
                )
              })}
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={() => showKeys()}>Keys</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default InfoComida
