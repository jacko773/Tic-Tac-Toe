import Square from "./Square";

const Board = ({ data, handleClick }) => {
  return (
    <>
      <div className="board-row">
        <Square value={data[0]} onClick={() => handleClick(0)}></Square>
        <Square value={data[1]} onClick={() => handleClick(1)}></Square>
        <Square value={data[2]} onClick={() => handleClick(2)}></Square>
      </div>
      <div className="board-row">
        <Square value={data[3]} onClick={() => handleClick(3)}></Square>
        <Square value={data[4]} onClick={() => handleClick(4)}></Square>
        <Square value={data[5]} onClick={() => handleClick(5)}></Square>
      </div>
      <div className="board-row">
        <Square value={data[6]} onClick={() => handleClick(6)}></Square>
        <Square value={data[7]} onClick={() => handleClick(7)}></Square>
        <Square value={data[8]} onClick={() => handleClick(8)}></Square>
      </div>
    </>
  );
};

export default Board;
