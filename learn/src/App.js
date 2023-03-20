import React from 'react';

function Square({ value }) {
  return <button className="square">{value}</button>
}

export default function Board() {
  return (
    <span>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
    </span>
  );
}
