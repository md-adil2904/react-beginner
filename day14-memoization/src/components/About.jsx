import React from 'react'

const About = ({users}) => {
  console.log("about is rendering")
  return (
    <div>
      <h1>this is home</h1>
    </div>
  )
}

export default React.memo(About)
