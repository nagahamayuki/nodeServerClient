# nodeServerClient

**nodeのサーバーにて、
・クライアントサイドレンダリング
・サーバーサイドレンダリング
をする簡単なサンプル。**

@Webpack
@babelcore
@React.js
@node.js

この記事を参照
http://blog.namiking.net/post/2016/02/react-server-using-webpack/


  
**■ クライアントサイドレンダリング**

`$ npm install --save react react-dom`  
`$ npm install --save-dev webpack babel-loader babel-preset-es2015 babel-preset-react`

*webpackの構成*

clientside ディレクトリの app.js を起点として、  
同じディレクトリにbundle.js

server.js では  
app.use(express.static('clientside'))
で、publicディレクトリ以下のファイルを静的ファイルとして、読み込み可能として、  
プリレンダする内容をクライアント側の時に試したtest.htmlと同じような記述に変更する。  

server.jsでは、  

```
ReactDOM.render(
  <p>クライアントサイドレンダリング</p>,
  document.getElementById('client')
)
```

こんな感じでクライアントサイドのレンダリングを読み込んでいる。  



**サーバーサイドレンダリング**

*$npm install --save express*  
*$npm install --save-dev babel-cli*  

*こちらはwebpackの外*

server.jsにてexpressでサーバーを立てて、  
そこからサーバーサイドレンダリング。

```
app.get('/', (req, res) => {
  res.send(
    ReactDOMServer.renderToString(
      <div>
        <p>サーバーサイドレンダリング</p>
        <div id="client"></div>
        <script src="bundle.js" />
      </div>
    )
  )
})

// start listen
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
```

このようにserver.jsにてnodeサーバーでサーバーサイドレンダリングをしています。
この時 id=client の場所に、クライアントサイドのレンダリングを表示します。


ただし、この時  
`$ npm start`  
をしても、babel-nodeコマンドが働いて、http://localhost:3000 にてアプリケーションを見ることはできるが、  
`$ npm run build`  
をしなければ、内容は変わらない。つまりreload機能が付いていない。
