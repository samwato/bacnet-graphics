import fetch from 'unfetch'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Canvas from '../../components/Canvas'
import Point from '../../components/Point'

const fetcher = url => fetch(url).then(res => res.json())

export default () => {
  const { id } = useRouter().query
  const { data, error } = useSWR(`/api/build?graphic=${id}`, fetcher)
  let pageData = data
  if (!data) pageData = { points: [] }
  if (error) pageData.error = 'Failed to fetch graphic json data.'

  return (
    <Layout>
      <div>
      { pageData.error ? <p>{pageData.error}</p> : null }

      <div className="title_container">
        <h2>{pageData.title}</h2>
      </div>

      <Canvas>
        {pageData.points.map((point, i) => (
          <Point key={i} point={point} />
        ))}
        <img className="template" src={`/${pageData.template}`} alt="" />

      </Canvas>

      <style jsx>{`
        h2 {
          margin: 0;
        }
        .template {
          width: 0 auto;
          height: auto;
        }
        .title_container {
          height: 30px;
        }
      `}</style>
      </div>
    </Layout>
  )
}
