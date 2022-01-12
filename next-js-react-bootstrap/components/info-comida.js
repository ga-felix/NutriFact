import { Modal, Button, Table } from 'react-bootstrap'

import styles from './info-comida.module.css'

function InfoComida (props) {
  function capitalizeFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const keys = Object.keys(props.alimento[0].attributes)
  const values = Object.entries(props.alimento[0].attributes)

  return (
    <Modal
      {...props}
      aria-labelledby='example-custom-modal-styling-title'
      centered
      dialogClassName={styles.modal90w}
    >
      <Modal.Header closeButton>
        <Modal.Title id='example-custom-modal-styling-title'>
          {props.alimento[0].description}
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
    </Modal>
  )
}

export default InfoComida
