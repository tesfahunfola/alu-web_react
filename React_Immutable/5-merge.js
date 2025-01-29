import immutable from 'immutable';

const { Map, List } = immutable;

// Accept two arrays and returns a list containing the values of both arrays
export function concatElements(page1, page2) {
  const list1 = List(page1);
  const list2 = List(page2);
  const list3 = list1.concat(list2);
  return list3;
}

// Accept two objects and returns a map containing the key-value pairs of both objects
export function mergeElements(page1, page2) {
  const obj1 = Map(page1);
  const obj2 = Map(page2);
  const obj3 = obj1.merge(obj2);
  return obj3;
}
