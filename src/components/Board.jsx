import Square from './Square'

const Board = () => {
  return(
    <>
      <div>
        <Square value={1}/>
        <Square value={0}/>
        <Square value={0}/>
      </div>
      <div>
        <Square value={0}/>
        <Square value={0}/>
        <Square value={0}/>
      </div>
      <div>
        <Square value={0}/>
        <Square value={0}/>
        <Square value={0}/>
      </div>
    </>
  )
}

export default Board