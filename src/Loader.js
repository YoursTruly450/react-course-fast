import React from 'react';

function Loader() {
  return (
    <div className='lds-roller' style={{display: 'flex', justifyContent: 'center', margin: '5.5rem', width: '100%'}}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Loader;