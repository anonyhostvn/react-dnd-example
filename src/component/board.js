import React from 'react';
import Knight from "./knight";
import {canMove, moveKnight} from "../gameManager/game";
import BoardSquare from "./boardSquare";

const boardStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap'
};

const squareStyle = {width: '12.5%', height: '12.5%'};

const Board = ({knightPosition}) => {

    const handleSquareClick = (toX, toY) => {
        if (canMove(toX,toY)) moveKnight(toX,toY);
    };

    const renderSquare = (i, [knightX, knightY])  => {
        const x = i % 8;
        const y = Math.floor(i / 8);
        return (
            <div key={i} style={squareStyle} onClick={() => handleSquareClick(x,y)}>
                <BoardSquare
                    x={x} y={y}
                >
                    {renderPiece(x,y,[knightX, knightY])}
                </BoardSquare>
            </div>
        )
    };

    const renderPiece = (x,y, [knightX, knightY]) => {
        if (x === knightX && y === knightY) return <Knight/>;
        return null;
    };

    const squares = [];
    for (let i = 0; i < 64; i ++)
        squares.push(renderSquare(i, knightPosition));

    return (
        <div
            style={boardStyle}
        >
            {
                squares
            }
        </div>
    )
};

export default Board;