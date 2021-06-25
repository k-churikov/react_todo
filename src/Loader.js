import React from 'react';

function Loader() {
  const style = {
    div: {
      display: 'flex',
      justifyContent: 'center',
      padding: '2rem'
    }
  }

  return (
    <div style={style.div}>
      <div className="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader
