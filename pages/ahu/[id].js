import fetch from 'unfetch'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Header from '../../components/Header'

const fetcher = url => fetch(url).then(res => res.json())

export default () => {
  const { id } = useRouter().query
  const { data, error } = useSWR(`/api/build?graphic=${id}`, fetcher)
  let pageData = data
  if (!data) pageData = { points: [] }
  if (error) pageData.error = 'Failed to fetch graphic json data.'

  return (
    <div>
      <Header />
      <p>{pageData.error}</p>
      <h2>{pageData.title}</h2>
      {pageData.points.map((point, i) => (
        <ul key={i}>
          <li>{point.name}</li>
          <li>{point.value}</li>
          <li>{point.errorMessage}</li>
        </ul>
      ))}
      <img src={`/${pageData.template}`} alt="" />
      <style jsx>{`
        li {
          list-style: none;
          margin: 5px 0;
        }
      `}</style>
    </div>
  )
}
