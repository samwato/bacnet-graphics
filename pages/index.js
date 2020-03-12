import fetch from 'unfetch'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = url => fetch(url).then(res => res.json())

export default () => {
  const { data, error } = useSWR(`/api/config`, fetcher)
  let pageData = data
  if (!data) pageData = { graphics: [] }
  if (error) pageData.error = 'Failed to fetch config json data'

  const GraphicLink = ({ data }) => (
    <li>
      <Link href="/ahu/[id]" as={`/ahu/${data.id}`}>
        <a>{data.name}</a>
      </Link>
    </li>
  )

  return (
    <div>
      <ul>
        {pageData.graphics.map(data => (
          <GraphicLink key={data.id} data={data} />
        ))}
      </ul>
    </div>
  )
}
