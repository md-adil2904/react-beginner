import React from 'react'

const Home = ({greet}) => {
  console.log("home is rendering")
  greet();
  return (
    <div>
      <h1>this is home</h1>
    </div>
  )
};

// export default React.memo(Home, (prevProps,nextProps) => {
//   return prevProps.users.id === nextProps.users.id;
// })

export default React.memo(Home)

