import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

// init express
const app = express()

app.use(express.static('clientside'))
// add top page routing
app.get('/', (req, res) => {
  res.send(
    ReactDOMServer.renderToString(
      <div>
        <p>サーバーサイドレンダリング</p>
        <div id="client"></div>
        <script src="./dist/bundle.js" />
      </div>
    )
  )
})

// start listen
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
