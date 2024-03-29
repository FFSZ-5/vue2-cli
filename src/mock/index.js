// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock新闻数据，包括新闻标题title、内容content、创建时间createdTime
const produceNewsData = function () {
  const newsList = []
  for (let i = 0; i < 20; i++) {
    const newNewsObject = {
      title: Random.ctitle(), //  Random.ctitle( min, max ) 随机产生一个中文标题，长度默认在3-7之间
      content: Random.cparagraph(), // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个
      createdTime: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；
    }
    newsList.push(newNewsObject)
  }

  return newsList
}
function getData(val) {
  const data = {}
  switch (val.type) {
    case 'POST': {
      const originData = val.body
      if (originData) {
        originData.split('&').forEach((element) => {
          data[element.split('=')[0]] = element.split('=')[1]
        })
      }
      break
    }
    case 'GET': {
      const originData = val.split('?')[1]
      if (originData) {
        originData.split('&').forEach((element) => {
          data[element.split('=')[0]] = element.split('=')[1]
        })
      }
      break
    }
  }
  return data
}
// 请求该url，就可以返回newsList
Mock.mock(/\/mock\/news/, 'delete', (req) => {
  const data = getData(req)
  console.log(data)
  return produceNewsData()
})
