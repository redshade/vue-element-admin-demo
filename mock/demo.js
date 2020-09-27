const Mock = require('mockjs')
var Random = Mock.Random
const list = []
Random.guid()
Random.title()
Random.datetime('yyyy-MM-dd A HH:mm:ss')

for (let idx = 0; idx < 10; idx++) {
  list.push(Mock.mock({
    'id': '@guid',
    'name|1-100': 'abc',
    'creationtime': Random.image()
  }))
}

module.exports = [
  {
    url: '/vue-element-admin/demo/list',
    type: 'get',
    response: {
      code: 20000,
      thedata: list
    }
  },
  {
    url: '/vue-element-admin/demo/list2',
    type: 'get',
    response: {
      code: 20000,
      thedata: list
    }
  }
]
