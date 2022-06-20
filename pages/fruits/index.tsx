import Layout from '../../components/Layout'
import type { NextPageWithLayout } from '../_app'
import type { ReactElement } from 'react'

const Fruits: NextPageWithLayout = () => {
    return (
        <div>
            <p>Sub directory example using fruits/</p>
        </div>
    )
}

Fruits.getLayout = function getLayout(home: ReactElement) {
    return (
      <Layout>
        {home}
      </Layout>
    )
  }

export default Fruits;