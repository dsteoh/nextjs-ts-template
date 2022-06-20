import Layout from '../components/Layout'
import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

const About: NextPageWithLayout = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Test</p>
    </div>
  )
}

About.getLayout = function getLayout(about: ReactElement) {
    return (
      <Layout>
        {about}
      </Layout>
    )
  }

export default About
