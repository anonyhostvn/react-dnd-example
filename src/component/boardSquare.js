import React from 'react';
import Square from "./square";
import {ItemTypes} from "../gameManager/constant";
import {canMove, moveKnight} from "../gameManager/game";
import {useDrop} from "react-dnd";
import Overlay from "./overlay";

const BoardSquare = ({x,y,children}) => {
    const black = (x + y) % 2 === 1;

    const [{isOver, canDrop}, drop] = useDrop({
        accept: ItemTypes.KNIGHT,
        drop: () => moveKnight(x,y),
        canDrop: () => canMove(x,y),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        }),
    });

    return (
        <div
            ref={drop}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%'
            }}
        >
            <Square black={black}>{children}</Square>
            {!isOver && canDrop && <Overlay color={'yellow'}/>}
            {isOver && !canDrop && <Overlay color={"red"}/>}
            {isOver && canDrop && <Overlay color={"green"}/>}
        </div>
    )
};

export default BoardSquare;