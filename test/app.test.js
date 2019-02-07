const getSearchInput = require('../assets/js/test');

// test('there is no I in team', () => {
// 	expect('team').not.toMatch(/I/);
// });

test ('but there is a "stop" in Christoph', () => {
	expect(getSearchInput('Christoph')).toMatch(/stop/);
});