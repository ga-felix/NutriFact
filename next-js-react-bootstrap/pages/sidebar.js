import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './sidebar.module.css'

function CustomNavbar () {
  const sidebar = document.querySelector('.sidebar')
  const closeBtn = document.querySelector('#btn')
  const searchBtn = document.querySelector('.bx-search')

  closeBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open')
    menuBtnChange()// calling the function(optional)
  })

  searchBtn.addEventListener('click', () => { // Sidebar open when you click on the search iocn
    sidebar.classList.toggle('open')
    menuBtnChange() // calling the function(optional)
  })

  // following are the code to change sidebar button(optional)
  function menuBtnChange () {
    if (sidebar.classList.contains('open')) {
      closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right')// replacing the iocns class
    } else {
      closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu')// replacing the iocns class
    }
  }

  return (
    <>
      <head>
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <div className={styles.sidebar}>
        <div className={styles.logoDetails}>
          <i className={[styles.bx, 'bxl-c-plus-plus', styles.icon].join(' ')} />
          <div className={styles.logo_name}>CodingLab</div>
          <i className='bx bx-menu' id={styles.btn} />
        </div>
        <ul className={styles.navList}>
          <li>
            <i className='bx bx-search' />
            <input type='text' placeholder='Search...' />
            <span className={styles.tooltip}>Search</span>
          </li>
          <li>
            <a href='#'>
              <i className='bx bx-grid-alt' />
              <span className={styles.links_name}>Dashboard</span>
            </a>
            <span className={styles.tooltip}>Dashboard</span>
          </li>
          <li>
            <a href='#'>
              <i className='bx bx-user' />
              <span className={styles.links_name}>User</span>
            </a>
            <span className={styles.tooltip}>User</span>
          </li>
          <li>
            <a href='#'>
              <i className='bx bx-chat' />
              <span className={styles.links_name}>Messages</span>
            </a>
            <span className={styles.tooltip}>Messages</span>
          </li>
          <li>
            <a href='#'>
              <i className='bx bx-pie-chart-alt-2' />
              <span className={styles.links_name}>Analytics</span>
            </a>
            <span className={styles.tooltip}>Analytics</span>
          </li>
          <li>
            <a href='#'>
              <i className='bx bx-folder' />
              <span className={styles.links_name}>File Manager</span>
            </a>
            <span className={styles.tooltip}>Files</span>
          </li>
          <li>
            <a href='#'>
              <i className='bx bx-cart-alt' />
              <span className={styles.links_name}>Order</span>
            </a>
            <span className='tooltip'>Order</span>
          </li>
          <li>
            <a href='#'>
              <i className='bx bx-heart' />
              <span className={styles.links_name}>Saved</span>
            </a>
            <span className={styles.tooltip}>Saved</span>
          </li>
          <li>
            <a href='#'>
              <i className='bx bx-cog' />
              <span className={styles.links_name}>Setting</span>
            </a>
            <span className={styles.tooltip}>Setting</span>
          </li>
          <li className={styles.profile}>
            <div className='profile-details'>
              <img src='profile.jpg' alt='profileImg' />
              <div className={styles.ame_job}>
                <div className={styles.name}>Prem Shahi</div>
                <div className={styles.job}>Web designer</div>
              </div>
            </div>
            <li className='bx bx-log-out' id={styles.log_out} />
          </li>
        </ul>
      </div>
      <section className={styles.homeSection}>
        <div className={styles.text}>Dashboard</div>
      </section>

    </>
  )
}

export default CustomNavbar
