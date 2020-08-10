/* 
使用babel.config.js为babel-loader的配置文件，可以转换node_modules中的文件，
即需要在webpack的loader的配置下将需要转换的node_modules的包文件包含在include选项下 。

以下是相对于普通项目开发来说比较合理的babel配置。
1. 按需引入新版babel/polyfill
2. 开启es6的模块化规范，利于tree-shaking
3. 开启@babel/plugin-transform-runtime的辅助函数提取功能，而不转换api，api由babel/polyfill来补齐，利于打包体积。
*/
module.exports = {
  presets: [
    ['@babel/preset-env', {
      // 按需引入@babel/polyfill，按照配置的浏览器列表和源代码中用到的新API
      useBuiltIns: 'usage',
      // 使用corejs@3版本
      corejs: 3,
      // 不自动转换为require模块化规范
      modules: false,
      // 目标浏览器，如果在.browserslistrc中配置了目标浏览器，在这就不需要配置了。
      targets: [
        '> 1%',
        'last 2 version',
        'not ie <= 9'
      ]
    }]
  ],
  plugins: [
    // 提取语法转换辅助函数的插件
    ['@babel/plugin-transform-runtime', {
      // 是否开启API转换功能，例如转换Promise，默认不开启
      // corejs: 3
    }]
  ]
};