import {parse} from "./parse";

export function parseArgs(options: { [key: string]: any }, args: string[]) {
  // const v: { [key: string]: any } = {}
  // Object.keys(options).forEach((key) => {
  //   v[key] = parse(options, key, args)
  // })
  // return v
  const keys = Object.keys(options)
  return keys.reduce((res: {[key: string]: any}, key: string) => {
    res[key] = parse(options, key, args)
    return res
  }, {})
}
