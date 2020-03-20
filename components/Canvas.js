export default (props) => (
  <div className="wrapper">
    <div className="canvas">
      {props.children}
    </div>
    <style jsx>{`
      .wrapper {
        background-color: #f7f7f7;
      }
      .canvas {
        width: 1250px;
        height: 100vh;
        position: relative;
        margin: 0 auto;
        border: 1px solid #e7e7e7;
      }
    `}</style>
  </div>
)
