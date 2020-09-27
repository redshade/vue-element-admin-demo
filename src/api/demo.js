import { param } from '@/utils'
import request from '@/utils/request'

export function demoList(params) {
  return request({
    // url: '/vue-element-admin/demo/list',
    url: 'http://rap2api.taobao.org/app/mock/266984/example/text',
    method: 'get',
    params
  })
}

export function demoList2() {
  return request({
    url: '/vue-element-admin/demo/list2',
    // url: 'http://rap2api.taobao.org/app/mock/266984/example/text',
    method: 'get'
  })
}
