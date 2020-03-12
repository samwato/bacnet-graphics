export default (props) => (
  <div className="canvas">
    {props.children}
    <style jsx>{`
      .canvas {
        width: 1250px;
        height: 700px;
        position: relative;
        background-color: #f7f7f7;
      }
    `}</style>
  </div>
)
