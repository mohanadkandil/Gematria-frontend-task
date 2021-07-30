var floorSize = 10;
var wallSize = 1;
var player = {
	x: 0,
	y: 0,
	velX: 0,
	velY: 0,
	speed: 5,
	size: floorSize - 1,
};
var game = document.getElementById("game").getContext("2d");
game.canvas.width = Math.round((window.innerWidth - floorSize*2) / floorSize)*floorSize + wallSize;
var WIDTH = game.canvas.width - wallSize; 
var HEIGHT = game.canvas.height - wallSize;
var rows = Math.floor(HEIGHT/floorSize);
var cols = Math.floor(WIDTH/floorSize);
var map = new Array(rows);
var exit = null;
var game = null;