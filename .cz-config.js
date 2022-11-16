module.exports = {
  // 可选类型
  types: [
    // { value: '特性', name: '特性:   🚀  新增功能', emoji: '🚀' },
    // { value: '修复', name: '修复:   🧩  修复缺陷', emoji: '🧩' },
    // { value: '文档', name: '文档:   📚  文档变更', emoji: '📚' },
    // {
    //   value: '格式',
    //   name: '格式:   🎨  代码格式（不影响功能，例如空格、分号等格式修正）',
    //   emoji: '🎨'
    // },
    // {
    //   value: '重构',
    //   name: '重构:   ♻️  代码重构（不包括 bug 修复、功能新增）',
    //   emoji: '♻️'
    // },
    // { value: '性能', name: '性能:   ⚡️  性能优化', emoji: '⚡️' },
    // {
    //   value: '测试',
    //   name: '测试:   ✅  添加疏漏测试或已有测试改动',
    //   emoji: '✅'
    // },
    // {
    //   value: '构建',
    //   name: '构建:   📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）',
    //   emoji: '📦️'
    // },
    // { value: '集成', name: '集成:   🎡  修改 CI 配置、脚本', emoji: '🎡' },
    // { value: '回退', name: '回退:   ⏪️  回滚 commit', emoji: '⏪️' },
    // {
    //   value: '其他',
    //   name: '其他:   🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）',
    //   emoji: '🔨'
    // }
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
    {
      value: 'chore',
      name: 'chore:    构建过程或辅助工具的变动'
    },
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
