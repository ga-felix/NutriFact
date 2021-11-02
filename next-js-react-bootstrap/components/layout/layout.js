import Sidebar from '../sidebar/sidebar'

export default function Layout ({ children }) {
  return (
    <Sidebar>{children}</Sidebar>
  )
}
