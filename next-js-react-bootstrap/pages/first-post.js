import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout/layout'
import CustomNavbar from '../components/navbar/customnavbar'

import { Alert } from 'react-bootstrap'

export default function FirstPost () {
  return (
    <>
      <CustomNavbar />
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href='/'>
            <a>Back to home</a>
          </Link>
        </h2>
        <Alert key='1' variant='primary'>
          This is a alert—check it out!
        </Alert>
      </Layout>
    </>
  )
}
