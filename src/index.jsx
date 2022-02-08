import React from 'https://esm.sh/react'
import HomePage from './pages/HomePage.tsx'


const App = ({ pathname }) => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
      body{
        font-family: system-ui, sans-serif;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
        }}
      ></style>
      {pathname === '/' ? <HomePage /> : <h1>404</h1>}
    </>
  )
}

export default App
