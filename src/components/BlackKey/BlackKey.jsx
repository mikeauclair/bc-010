import React from 'react';

function Key(props) {
  return(
    <div
      className={`key-black key 
                  ${props.highlightKey === props.keyCode ? 'keyboard-click' : 'black-ky-bg'} 
                  ${props.id === 7 ? 'm-left-3' : props.id === 2 ? 'm-left' : ''}`}
      onClick={() => props.keyPress(props.note)}
    >
    {props.note}
    </div>
  );
};

export default Key;