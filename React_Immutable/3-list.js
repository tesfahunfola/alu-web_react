import immutable from 'immutable';

const { List } = immutable;

// Accept an array and convert it to an immutable List using List from immutable.js
const getListObject = (array) => List(array);

// Accept a List and string and it appends the string to the List and returns the List
const addElementToList = (list, element) => list.push(element);

export { getListObject, addElementToList };
