import React, { useEffect } from 'react'

const About = () => {

  

  // let interval = setInterval(() => {
  //   console.log("hey, i am in about")
  // },1000)

  

  // useEffect(()=> {
  //   console.log("about rendering...");

  //   return () => {
  //     console.log("this will run when you are unmounted")
  //     clearInterval(interval);
  //   }
  // }, [])
  return (
    <div>
      <h1>This is about section</h1>
    </div>
  )
}

export default About
