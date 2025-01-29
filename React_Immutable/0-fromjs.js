import immutable from 'immutable';

const { fromJS } = immutable;

// Convert the object to an immutable Map using fromJS
const getImmutableObject = (object) => fromJS(object);

export default getImmutableObject;
