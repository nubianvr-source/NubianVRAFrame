var boxEl = document.querySelector('a-box');
var cur = document.getElementById('cursor');
var board = document.getElementById('board');

console.log('here');


boxEl.addEventListener('click', function () {
	console.log('here2');
	board.setAttribute('visible', true);
	cur.setAttribute('wasd-controls', 'enabled', false);
});

board.addEventListener('click', function () {
	console.log('here2');
	board.setAttribute('visible', false);
	cur.setAttribute('wasd-controls', 'enabled', true);
});
// boxEl.addEventListener('mouseleave', function () {
// 	console.log('here3');
// 	boxEl.setAttribute('visible', true);
// });