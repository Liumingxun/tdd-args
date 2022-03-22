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

test('read options', () => {
  const options = {
    l: Boolean,
    p: Number,
    d: String,
    a: Array,
  }
  const args = parseArgs(options, ['-l', '-p', '8080', '-d', '/usr/logs', '-a', 'this', 'is', 'a', 'array'])
  expect(Object.keys(args)).toEqual(['l', 'p', 'd', 'a'])
})

test('read l prop', () => {
  const options = {l: Boolean}
  const args = parseArgs(options, ['-l'])
  expect(args).toEqual({l: true})
})

test('read p prop', () => {
  const options = {p: Number}
  const args = parseArgs(options, ['-p', '8080'])
  expect(args).toEqual({p: 8080})
})

test('read d prop', () => {
  const options = {d: String}
  const args = parseArgs(options, ['-d', '/usr/logs'])
  expect(args).toEqual({d: '/usr/logs'})
})


test('assign kv into object', () => {
  const obj = {a: 'a', b: 'b'}
  Object.assign(obj, {c: 'c'})
  expect(obj).toEqual({a: 'a', b: 'b', c: 'c'})
})


