# 依赖

## 1.nrm

用于切换 npm 的地址

```js
npm i nrm -g
```

nrm ls 查看可切换的地址列表和当前处于哪个地址  
nrm use [name] 切换至改地址

## 2.less

官网：https://lesscss.org/#

```js
npm install less-loader@4.1.0 --save -D
npm install less@3.0.4 --save -D
```

```js
import less from 'less'
Vue.use(less)
```

## 3.style-resources-loader 和 vue-cli-plugin-style-resources-loader

方便在单个 vue 文件中使用全局的样式变量，没这个依赖，单个 vue 文件是无法使用全局变量的

```js
npm i style-resources-loader
npm i vue-cli-plugin-style-resources-loader
```

在 vue.config.js 中配置：

```js
const path = require('path')
module.exports = {
  // 安装 style-resources-loader 与 vue-cli-plugin-style-resources-loader
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 这三种 patterns 写法都是可以的
      // patterns: ["./src/assets/reset1.less", "./src/assets/reset2.less"]
      // patterns: "./src/assets/reset.less"
      patterns: [
        // 两种路径写法都可以，这里的路径不能使用 @ 符号，否则会报错
        // path.resolve(__dirname, './src/assets/reset.less')
        path.resolve(__dirname, 'src/assets/index.less')
      ]
    }
  }
}
```

## 4.commitizen 和 cz-customizable

用于使 git 提交更加规范

```js
npm install --save-dev commitizen
npm i cz-customizable --save-dev
```

在 package.json 文件中添加

```js
"config": {
     "commitizen": {
       "path": "node_modules/cz-customizable"
     }
   }
```

根目录下创建.cz-config.js 自定义提示文件

```js
module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: 'feat:     新功能' },
    { value: 'fix', name: 'fix:      修复' },
    { value: 'docs', name: 'docs:     文档变更' },
    { value: 'style', name: 'style:    代码格式(不影响代码运行的变动)' },
    {
      value: 'refactor',
      name: 'refactor: 重构(既不是增加feature，也不是修复bug)'
    },
    { value: 'perf', name: 'perf:     性能优化' },
    { value: 'test', name: 'test:     增加测试' },
    { value: 'chore', name: 'chore:    构建过程或辅助工具的变动' },
    { value: 'revert', name: 'revert:   回退' },
    { value: 'build', name: 'build:    打包' }
  ], // 消息步骤
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选):',
    footer: '请输入要关闭的issue(可选):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
  }, // 跳过问题
  skipQuestions: ['body', 'footer'], // subject文字长度默认是72
  subjectLimit: 72
}
```

此时可以用 git cz 来替代 git commit 了
