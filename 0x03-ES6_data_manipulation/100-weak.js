export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let p = weakMap.get(endpoint) || 0;

  p += 1;

  weakMap.set(endpoint, p);

  if (p >= 5) throw Error('Endpoint load is high');

  return p;
}
