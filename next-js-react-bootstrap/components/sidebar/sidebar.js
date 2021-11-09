import 'bootstrap/dist/css/bootstrap.min.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt, faBars, faSignOutAlt, faThLarge, faCog, faUser, faQuestion, faNotesMedical, faWeight, faHome, faSearch } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'

import styles from './sidebar.module.css'

export default function Alimentos (props) {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.sidebar}>
          <div className={styles.logoContent}>
            <div className={styles.logo}>
              <i> <FontAwesomeIcon icon={faAppleAlt} /> </i>
              <div className={styles.logoName}> Nutrifact </div>
            </div>
            <FontAwesomeIcon icon={faBars} id={styles.button} />
          </div>
          <ul className={styles.navList}>
            <li>
              <i id={styles.searchIcon}> <FontAwesomeIcon icon={faSearch} /> </i>
              <input type='text' placeholder='Pesquisar...' />
              <span className={styles.tooltip}> Pesquisar </span>
            </li>
            <li>
              <Link href='/' passHref>
                <a href='#'>
                  <i> <FontAwesomeIcon icon={faHome} /> </i>
                  <span className={styles.linksName}> Início </span>
                </a>
              </Link>
              <span className={styles.tooltip}> Início </span>
            </li>
            <li>
              <Link href='/alimentos' passHref>
                <a href='#'>
                  <i> <FontAwesomeIcon icon={faNotesMedical} /> </i>
                  <span className={styles.linksName}> Valores nutricionais </span>
                </a>
              </Link>
              <span className={styles.tooltip}> Valores nutricionais </span>
            </li>
            <li>
              <Link href='/calcularImc' passHref>
                <a href='#'>
                  <i> <FontAwesomeIcon icon={faWeight} /> </i>
                  <span className={styles.linksName}> Cálcular IMC </span>
                </a>
              </Link>
              <span className={styles.tooltip}> Cálcular IMC </span>
            </li>
            <li>
              <Link href='/cadastro' passHref>
                <a href='#'>
                  <i> <FontAwesomeIcon icon={faThLarge} /> </i>
                  <span className={styles.linksName}> Cadastro </span>
                </a>
              </Link>
              <span className={styles.tooltip}> Cadastro </span>
            </li>
            <li>
              <Link href='/entrar' passHref>
                <a href='#'>
                  <i> <FontAwesomeIcon icon={faThLarge} /> </i>
                  <span className={styles.linksName}> Entrar </span>
                </a>
              </Link>
              <span className={styles.tooltip}> Entrar </span>
            </li>
            <li>
              <a href='#'>
                <i> <FontAwesomeIcon icon={faUser} /> </i>
                <span className={styles.linksName}> Minha Conta </span>
              </a>
              <span className={styles.tooltip}> Minha Conta </span>
            </li>
            <li>
              <a href='#'>
                <i> <FontAwesomeIcon icon={faQuestion} /> </i>
                <span className={styles.linksName}> Ajuda </span>
              </a>
              <span className={styles.tooltip}> Ajuda </span>
            </li>
            <li>
              <a href='#'>
                <i> <FontAwesomeIcon icon={faCog} /> </i>
                <span className={styles.linksName}> Configurações </span>
              </a>
              <span className={styles.tooltip}> Configurações </span>
            </li>
          </ul>
          <div className={styles.profileContent}>
            <div className={styles.profile}>
              <div className={styles.profileDetails}>
                <img src='./Equipe.jpeg' />
                <div className={styles.nameJob}>
                  <div className={styles.name}> Vinicius Santana </div>
                  <div className={styles.job}> Software Engineer </div>
                </div>
              </div>
              <i id={styles.logOut}> <FontAwesomeIcon icon={faSignOutAlt} /> </i>
            </div>
          </div>
        </div>
        <div className={styles.homeContent}>
          {props.children}
          {/* <div className={styles.text}> Home </div> */}
        </div>
      </div>

    </>
  )
}
