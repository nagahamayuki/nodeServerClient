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

*$ npm install --save react react-dom*  
*$ npm install --save-dev webpack babel-loader babel-preset-es2015 babel-preset-react*  

*webpackの構成*

clientside ディレクトリの app.js を起点として、  
同じディレクトリにbundle.js

server.js では  
app.use(express.static('clientside'))
で、publicディレクトリ以下のファイルを静的ファイルとして、読み込み可能として、  
プリレンダする内容をクライアント側の時に試したtest.htmlと同じような記述に変更する。  

server.jsでは、  
<div>  
  <p>サーバーサイドレンダリング</p>  
  <div id="client"></div>  
  <script src="bundle.js" /> ← クライアントサイドレンダリング
</div>  

こんな感じでクライアントサイドのレンダリングを読み込んでいる。  



**サーバーサイドレンダリング**

*$npm install --save express*  
*$npm install --save-dev babel-cli*  

*こちらはwebpackの外*

server.jsにてexpressでサーバーを立てて、  
そこからサーバーサイドレンダリング。
