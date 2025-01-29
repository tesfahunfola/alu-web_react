import immutable from 'immutable';

const { is } = immutable;

// Accept two maps both immutable.js and return true if they are equal
export default function areMapsEqual(map1, map2) {
  return is(map1, map2);
}
