# react-webpack2-demo

### 搭建项目步骤

1.安装 node（node 自带 npm包管理工具）
```bash
	npm init
```


2.安装 webpack
```bash
	npm i webpack -g

	npm i webpack -D
```

> webpack.config.js 配置文件

```javascript
const path = require('path');

console.log(path.resolve(__dirname, 'dist'))

const config = {
  entry: './app/index.jsx',
  output: {
    publicPath: "/dist/",
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  }
};

module.exports = config;
```

2.安装 react

```bash
	npm i react react-dom -S
```

3.安装babel及编译react的插件

```bash
	npm i babel-core babel-loader babel-preset-react -D
```

>babel配置文件.babelrc

```javascript
{ "presets": ["react"] }
```

4.创建index.html

```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>react webpack2 demo</title>
	</head>
	<body>
		<div id="root"></div>
		<script src="./dist/bundle.js" charset="utf-8"></script>
	</body>
	</html>
```

5.创建index.jsx


# 启动

```bash
	npm i webpack -g

	npm i webpack-dev-server -g

	npm install

	webpack-dev-server
```
