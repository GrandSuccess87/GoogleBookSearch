const getSearchInput = require('../assets/js/book');
const sum = require('../assets/js/book');

test ('but there is a "stop" in Christoph', () => {
	expect(getSearchInput('Christoph')).toMatch(/stop/);
});

test('there is no I in team', () => {
	expect(getSearchInput('team')).not.toMatch(/I/);
});

test('Mastering Programming', () => {
	expect(getSearchInput('Mastering Programming')).toMatch(/Mastering Programming/);
});

// sample test
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});