import Header from './Header'

export default (props) => (
  <div className="container">
    <Header />
    {props.children}
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        font-size: 18px;
        font-weight: 400;
        color: #333;
        font-family: sans-serif;
      }
      h1 {
        font-weight: 700;
      }
      p {
        margin-bottom: 10px;
      }
    `}</style>
  </div>
)
