import React, { useState } from 'https://esm.sh/react'

const HomePage = () => {
  const [count, setCount] = useState<number>(0)

  const handleClick = () => setCount((prevCount) => prevCount + 1)

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Hola mundo!</h1>
      <p>Hagamos un contador!</p>
      <p>{count}</p>
      <button onClick={handleClick}>Aumentar +1</button>
    </section>
  )
}

export default HomePage
