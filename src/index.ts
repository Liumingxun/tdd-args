export function parseArgs(options: {[key: string]: any}, args: string[]) {
  const v: {[key: string]: any} = {}
  Object.keys(options).forEach((key) => {
    if (options[key] === Boolean)
      v[key] = args.includes('-' + key)
    else if (options[key] === Number) {
      v[key] = Number.parseInt(args[(args.indexOf('-' + key)) + 1])
    }
  })
  return v
}
