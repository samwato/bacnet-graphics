import fetch from 'unfetch'
import useSWR from 'swr'
import { useRouter } from 'next/router'

import Header from '../components/Header'

const fetcher = url => fetch(url).then(res => res.json())

export default () => {
  const { route } = useRouter()
  const graphic = route.substring(1)

  const { data, error } = useSWR(`/api/build?graphic=${graphic}`, fetcher);
  let pageData = data;
  if(!data) pageData = {
    points: []
  };
  if(error) pageData.error = 'Failed to fetch the quote.';

  return (
    <div>
      <Header />
      <h2>{pageData.title}</h2>
      {pageData.points.map(point => (
        <ul>
          <li>{point.name}</li>
          <li>{point.value}</li>
          <li>{point.errorMessage}</li>
        </ul>
      ))}
      <img src="/templates/ahu_v1.png" alt="" />
      <style jsx>{`
        li {
          list-style: none;
          margin: 5px 0;
        }
      `}</style>
    </div>
  )
}
