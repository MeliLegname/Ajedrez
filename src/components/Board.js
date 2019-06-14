import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import React from 'react';
import Square from './Square';
import Knight from './Knight';
import { canMoveKnight, moveKnight } from './Game';

function renderSquare(i, [ knightX, knightY ]) {
	const x = i % 8;
	const y = Math.floor(i / 8);
	const isKnightHere = x === knightX && y === knightY;
	const black = (x + y) % 2 === 1;
	const piece = isKnightHere ? <Knight /> : null;

	return (
		<div key={i} style={{ width: '12.5%', height: '12.5%' }}>
			<div onClick={() => handleSquareClick(x, y)}>
				<Square black={black}>
					<DragDropContextProvider backend={HTML5Backend}>{piece}</DragDropContextProvider>
				</Square>
			</div>
		</div>
	);
}

export default function Board({ knightPosition }) {
	const squares = [];
	for (let i = 0; i < 64; i++) {
		squares.push(renderSquare(i, knightPosition));
	}

	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				flexWrap: 'wrap'
			}}
		>
			{squares}
		</div>
	);
}

function handleSquareClick(toX, toY) {
	if (canMoveKnight(toX, toY)) {
		moveKnight(toX, toY);
	}
}
