import fetch from 'unfetch'
import useSWR from 'swr'
import Link from 'next/link'

import Layout from '../components/Layout'

const fetcher = url => fetch(url).then(res => res.json())

export default () => {
  const { data, error } = useSWR(`/api/config`, fetcher)
  let pageData = data
  if (!data) pageData = { graphics: [] }
  if (error) pageData.error = 'Failed to fetch config json data'

  return (
    <Layout>
      <h1>Home page</h1>
    </Layout>
  )
}
