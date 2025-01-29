import { fromJS, getIn } from 'immutable';

// Edit and return the object at the given array path
export default function accessImmutableObject(object, array) {
  return getIn(fromJS(object), array);
}
