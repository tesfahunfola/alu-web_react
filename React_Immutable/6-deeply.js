import immutable from 'immutable';

const { Map } = immutable;

// Accept two objects and merge them | if two values are the same they'll combine
export default function mergeDeeplyElements(page1, page2) {
  return Map(page1).mergeDeep(Map(page2));
}
