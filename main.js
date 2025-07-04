const ROWS = 7;
const COLS = 7;
const gameContainer = document.querySelector(".game-container");
let curCol = 1;
let prevCol = COLS;

const getTile = (r, c) => document.getElementById(`${r}-${c}`)

const mainLoop = () => {
	if (curCol != prevCol) {
		getTile(1, curCol).classList.add("selected");
		getTile(1, prevCol).classList.remove("selected");
		prevCol = curCol;
	}
	requestAnimationFrame(mainLoop);
}

window.onload = function() {
	init();
	mainLoop();
}

const initControl = () => {
	document.addEventListener("keyup", e => handleInput(e.code));
}

const initBoard = () => {
	for (let r = 1; r <= ROWS; r++) {
		const gameRow = document.createElement("div");
		gameRow.classList.add("game-row");
		gameRow.id = `${r}`;
		for (let c = 1; c <= COLS; c++) {
			const gameTile = document.createElement("div");
			gameTile.classList.add("game-tile");
			gameTile.id = `${r}-${c}`;
			gameRow.appendChild(gameTile);
		}
		gameContainer.appendChild(gameRow);
	}
}

const init = () => {
	initBoard();
	initControl();
}

const handleInput = keyCode => {
	if (keyCode == "Space") dropDisc();
	if (keyCode == "Enter") console.log(curCol);
	if (keyCode == "ArrowLeft" || keyCode == "ArrowRight") moveDisc(keyCode.slice(5));
}

const dropDisc = () => {

}

const moveDisc = dir => {
	const dx = (dir == "Left") ? -1 : 1;
	curCol += dx;
	if (curCol > COLS) curCol = 1;
	else if (curCol < 1) curCol = COLS; 
}