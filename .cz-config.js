module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: 'feat:     🚀  新增功能', emoji: '🚀' },
    { value: 'fix', name: 'fix:      🧩  修复缺陷', emoji: '🧩' },
    { value: 'docs', name: 'docs:     📚  文档变更', emoji: '📚' },
    {
      value: 'style',
      name: 'style:    🎨  代码格式（不影响功能，例如空格、分号等格式修正）',
      emoji: '🎨'
    },
    {
      value: 'refactor',
      name: 'refactor: ♻️   代码重构（不包括 bug 修复、功能新增）',
      emoji: '♻️'
    },
    { value: 'perf', name: 'perf:     ⚡️  性能优化', emoji: '⚡️' },
    {
      value: '测试',
      name: 'test:     ✅  添加疏漏测试或已有测试改动',
      emoji: '✅'
    },
    {
      value: 'chore',
      name: 'chore:    📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）',
      emoji: '📦️'
    },
    { value: 'revert', name: 'revert:   ⏪️  回滚 commit', emoji: '⏪️' },
    { value: 'build', name: 'build:    🎡  打包', emoji: '🎡' }
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
