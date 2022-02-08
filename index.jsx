import React from 'https://esm.sh/react';
import ReactDOM from 'https://esm.sh/react-dom/server'
import { serve } from './deps.ts'
import App from './src/index.jsx'

serve(
  (req) => {
    const { url } = req
    const { pathname } = new URL(url)
    const app = ReactDOM.renderToString(<App pathname={pathname} />)

    return new Response(`<div id="root">${app}</div>`, {
      headers: { 'content-type': 'text/html' },
    })
  },
  { port: 3000 }
)
