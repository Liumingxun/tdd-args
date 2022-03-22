import {parse} from "./parse";

export function parseArgs(options: { [key: string]: any }, args: string[]) {
  const v: { [key: string]: any } = {}
  Object.keys(options).forEach((key) => {
    Object.assign(v, parse(options, key, args))
  })
  return v
}
