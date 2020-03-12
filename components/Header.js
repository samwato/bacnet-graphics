import fetch from 'unfetch'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = url => fetch(url).then(res => res.json())

export default () => {
  const { data, error } = useSWR(`/api/config`, fetcher)
  let pageData = data
  if (!data) pageData = { graphics: [] }
  if (error) pageData.error = 'Failed to fetch config json data'

  return (
    <div className="header">
      <div>
        <h1 className="title">bacstack</h1>
      </div>

      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        {pageData.graphics.map(link => (
          <Link key={link.id} href="/ahu/[id]" as={`/ahu/${link.id}`}>
            <a>{link.name}</a>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .header {
          background-color: #fff;
          height: 50px;
          width: 100;
          margin: 0 20px;
          display: flex;
          flex-direction: row;
          align-items: center;
          font-family: sans-serif;
        }
        .title {
          margin-right: 20px;
        }
        h1 {
          margin: 0;
        }
        a {
          padding: 20px;
          text-decoration: none;
          color: grey;
        }
      `}</style>

    </div>
  )
}
