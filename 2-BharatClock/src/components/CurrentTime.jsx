import React from 'react'

function CurrentTime() {
    const time = new Date();
  return (
    <>
    <p>This is the current Time: {time.toLocaleString()}</p>
    </>
  )
}

export default CurrentTime