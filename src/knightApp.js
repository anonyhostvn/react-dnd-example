import React from 'react';
import Board from "./component/board";
import {DndProvider} from 'react-dnd';
import HTML5Backend from "react-dnd-html5-backend";

const containerStyle = {width: 500, height: 500};

const KnightApp = ({knightPosition}) => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={containerStyle}
            >
                <Board
                    knightPosition={knightPosition}
                />
            </div>
        </DndProvider>
    )
};

export default KnightApp;