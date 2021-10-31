import { Navbar, Nav, NavDropdown, Button, Modal, Container, Row, Col, Collapse, ListGroup } from 'react-bootstrap'
import React, { useState } from 'react'

import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './customnavbar.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function CustomNavbar () {
  const [show, setShow] = useState(false)
  const [openAluno, setOpenAluno] = useState(false)
  const [open, setOpen] = useState(false)

  function handleClick (e) {
    e.preventDefault()
    setShow(true)
    console.log('The link was clicked.')
  }

  return (
    <>
      <div className={[styles.header_background].join(' ')}>
        <Container fluid>
          <Row>
            <Col lg={1} md={1} sm={0} xs={0} />
            <Col>
              <Row className={styles.desktop_navbar}>
                <Col lg={1} md={1} sm={4} xs={4} className={styles.logoarea}>
                  <Link href='/' passHref>
                    <Navbar.Brand>
                      <img
                        alt=''
                        src='/logo.svg'
                        width='80'
                        height='80'
                        className='d-inline-block align-top'
                      />{' '}
                    </Navbar.Brand>
                  </Link>
                </Col>
                <Col lg={11} md={11} className={[styles.desktop_navbar_items_area, 'd-md-flex d-none'].join(' ')}>
                  <Link href='/' passHref>
                    <Nav.Link>
                      <span className={styles.desktop_navbar_item}>
                        INÍCIO
                      </span>
                    </Nav.Link>
                  </Link>
                  <Link href='/' passHref>
                    <Nav.Link>
                      <span className={styles.desktop_navbar_item}>
                        Quem Somos
                      </span>
                    </Nav.Link>
                  </Link>

                  <Link href='/' passHref>
                    <Nav.Link>
                      <span className={styles.desktop_navbar_item}>
                        Blog
                      </span>
                    </Nav.Link>
                  </Link>

                  <Link href='/' passHref>
                    <Nav.Link>
                      <span className={styles.desktop_navbar_item}>
                        Acesso
                      </span>
                    </Nav.Link>
                  </Link>

                  <div>
                    <NavDropdown id={styles.desktop_navbar_item_dropdown} title='Área do Aluno'>
                      <NavDropdown.Item href='#action/3.1' id={styles.desktop_navbar_item_dropdown_item}>Moodle</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href='#action/3.2' id={styles.desktop_navbar_item_dropdown_item}>Plurall</NavDropdown.Item>
                    </NavDropdown>
                  </div>

                  <NavDropdown id={styles.desktop_navbar_item_dropdown} title='Faça Parte'>
                    <NavDropdown.Item href='#action/3.1' id={styles.desktop_navbar_item_dropdown_item}>Seja Professor</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='#action/3.2' id={styles.desktop_navbar_item_dropdown_item}>Seja Plantonista</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='#action/3.3' id={styles.desktop_navbar_item_dropdown_item}>Seja Voluntário</NavDropdown.Item>
                  </NavDropdown>

                  <Link href='/contato' passHref>
                    <Nav.Link>
                      <span className={styles.desktop_navbar_item}>
                        CONTATO
                      </span>
                    </Nav.Link>
                  </Link>

                  <button type='button' id={styles.button_nos_apoie}>NOS APOIE</button>
                </Col>
                <Col sm={8} xs={8} className={[styles.mobile_button_area, 'd-xs-flex d-sm-flex d-md-none'].join(' ')}>
                  <Button id={styles.nav_hamburger_button} onClick={handleClick}><FontAwesomeIcon icon={faBars} /></Button>
                </Col>
              </Row>
            </Col>
            <Col lg={1} md={1} sm={0} xs={0} />
          </Row>
        </Container>

        <div className={styles.header_text_block}>
          <h1><b>Cursinho Popular EACH-USP</b></h1>
          <h5>Transformando em <b>realidade</b> o sonho de entrar na <b>universidade</b>.</h5>
        </div>
      </div>
      <section>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName='modal-100w'
          aria-labelledby='example-custom-modal-styling-title'
        >
          <ListGroup variant='flush'>
            <Link href='/' passHref>
              <ListGroup.Item className='mt-2 mb-2' action> <span>Inicio</span> </ListGroup.Item>
            </Link>

            <Link href='/' passHref>
              <ListGroup.Item action> Quem Somos </ListGroup.Item>
            </Link>

            <ListGroup.Item action onClick={() => setOpenAluno(!openAluno)} aria-controls='area-do-aluno' aria-expanded={openAluno}>
              Área do Aluno
            </ListGroup.Item>

            <Collapse in={openAluno}>
              <div className='area-do-aluno'>
                <Link href='#' passHref>
                  <ListGroup.Item action> <span className='ml-2'>Moodle</span> </ListGroup.Item>
                </Link>
                <Link href='#' passHref>
                  <ListGroup.Item action> <span className='ml-2'>Plurall</span> </ListGroup.Item>
                </Link>
              </div>
            </Collapse>

            <ListGroup.Item action onClick={() => setOpen(!open)} aria-controls='faca-parte' aria-expanded={open}>
              Faça Parte
            </ListGroup.Item>

            <Collapse in={open}>
              <div className='faca-parte'>
                <Link href='#' passHref>
                  <ListGroup.Item action> <span className='ml-2'>Seja Professor</span> </ListGroup.Item>
                </Link>
                <Link href='#' passHref>
                  <ListGroup.Item action> <span className='ml-2'>Seja Plantonista</span> </ListGroup.Item>
                </Link>
                <Link href='#' passHref>
                  <ListGroup.Item action> <span className='ml-2'>Seja Voluntário</span> </ListGroup.Item>
                </Link>
              </div>
            </Collapse>

            <Link href='/contato' passHref>
              <ListGroup.Item action> Contato </ListGroup.Item>
            </Link>

            <Link href='/' passHref>
              <ListGroup.Item id={styles.list_nos_apoie} action> Nos Apoie </ListGroup.Item>
            </Link>
          </ListGroup>
        </Modal>
      </section>

    </>
  )
}

export default CustomNavbar
