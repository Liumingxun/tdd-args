import {test, expect} from 'vitest'
import {parseArgs} from './index'

test.todo('happy path', () => {
const options = {
  l: Boolean,
  p: Number,
  d: String,
  a: Array,
}
  // 定义方法对外的使用方法
  const args = parseArgs(options, ['-l', '-p', '8080', '-d', '/usr/logs', '-a', 'this', 'is', 'a', 'array'])
  expect(args).toEqual({
    l: true,
    p: 8080,
    d: '/usr/logs',
    a: ['this', 'is', 'a', 'array']
  })
})

test.todo('read options name', () => {
  const options = {
    l: Boolean,
    p: Number,
    d: String,
    a: Array,
  }
  const args = parseArgs(options, ['-l', '-p', '8080', '-d', '/usr/logs', '-a', 'this', 'is', 'a', 'array'])
  expect(Object.keys(args)).toEqual(['-l', '-p', '-d', '-a'])
})

test('read l prop', () => {
  const options = {l: Boolean}
  const args = parseArgs(options, ['-l'])
  console.log(args)
  expect(args).toEqual({l: true})
})

test('read p prop', () => {
  const options = {p: Number}
  const args = parseArgs(options, ['-p', '8080'])
  expect(args).toEqual({p: 8080})
})


