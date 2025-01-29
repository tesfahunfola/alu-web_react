import immutable from 'immutable';

const { Map } = immutable;

// Convert the object to an immutable Map using Map from immutable.js
const getImmutableObject = (object) => Map(object);

export default getImmutableObject;
