import './body.css';
import $ from 'jquery';
import _ from 'lodash';

let count = 0;
function updateCounter() {
    count += 1;
    return count;
}

$(function() {
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    
    let debouncedUpdateCounter = _.debounce(() => {
        $('#count').text(`${updateCounter()} clicks on the button`);
    }, 500);
    $('button').on('click', debouncedUpdateCounter);
});


