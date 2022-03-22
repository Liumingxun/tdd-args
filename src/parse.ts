type parser = (key: string, args: string[]) => {}

const getValue = (key: string, args: string[]) => args[args.indexOf('-' + key) + 1]
const parseBoolean = (key: string, args: string[]) => (args.includes('-' + key))
const parseNumber = (key: string, args: string[]) => Number.parseInt(getValue(key, args))
const parseString = (key: string, args: string[]) => getValue(key, args)

function initMap() {
  const map = new Map<object, parser>()
  map.set(Boolean, parseBoolean)
  map.set(Number, parseNumber)
  map.set(String, parseString)
  return map;
}

const map = initMap();

export function parse(options: { [p: string]: any }, key: string, args: string[]) {
  if (!args.includes('-' + key)) return
  return (map.get(options[key]) as parser)(key, args)
}


