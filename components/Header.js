import fetch from 'unfetch'
import useSWR from 'swr'
import Link from 'next/link'
import { ModeContext } from './mode-context'

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
            <a>{link.menu}</a>
          </Link>
        ))}
      </div>

      <ModeContext.Consumer>
        {({editMode, toggleMode}) => (
          <div>
            <button
              onClick={toggleMode}>
              {editMode ? 'Preview' : 'Edit'}
            </button>
          </div>
        )}
      </ModeContext.Consumer>

      <style jsx>{`
        .header {
          background-color: #fff;
          width: 100;
          padding: 0 20px;
          display: flex;
          flex-direction: row;
          align-items: center;
          font-family: sans-serif;
          box-shadow: 0 2px 2px -1px rgba(152, 162, 179, 0.3), 0 1px 5px -2px rgba(152, 162, 179, 0.3);
          border-bottom: 1px solid #D3DAE6;
          box-sizing: border-box;
        }
        .title {
          margin-right: 20px;
        }
        h1 {
          margin: 0;
        }
        a {
          padding: 15px 20px;
          text-decoration: none;
          color: #333;
          font-size: 0.8em;
          height: 100%;
          display: inline-block;
        }
        a:hover {
          color: #444;
          background-color: rgba(0,0,0,0.05);
        }
      `}</style>

    </div>
  )
}
