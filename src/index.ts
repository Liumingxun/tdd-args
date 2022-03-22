function parse(options: { [p: string]: any }, key: string, args: string[]) {
  if (options[key] === Boolean)
    return {[key]: args.includes('-' + key)}
  else if (options[key] === Number)
    return {[key]: Number.parseInt(args[(args.indexOf('-' + key)) + 1])}
  else if (options[key] === String)
    return {[key]: args[args.indexOf('-' + key) + 1]}
  else return {[key]: undefined}
}

export function parseArgs(options: { [key: string]: any }, args: string[]) {
  const v: { [key: string]: any } = {}
  Object.keys(options).forEach((key) => {
    Object.assign(v, parse(options, key, args))
  })
  return v
}
