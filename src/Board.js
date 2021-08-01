import React from 'react';
import Square from './Square'
class Board extends React.Component {

  renderSquare(i) {
    return <Square 
            value={this.props.squares[i]}
            onClick={()=>this.props.onClick(i)}
          />;
  }

  render() {
    let boardDivs = []
    for(let i = 0; i<9;i=i+3){
      boardDivs.push(
        this.renderSquare(i),
        this.renderSquare(i+1),
        this.renderSquare(i+2),
      )
    }
    return (
      <div>
        <div className="board-row">
          {boardDivs.slice(0,3)}
        </div>
        <div className="board-row">
          {boardDivs.slice(3,6)}
        </div>
        <div className="board-row">
          {boardDivs.slice(6,9)}
        </div>
      </div>
    );
  }
}


export default Board;