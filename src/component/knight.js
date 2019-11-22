import React from 'react';
import {useDrag} from "react-dnd";
import {ItemTypes} from "../gameManager/constant";

const knightStyle = ({isDragging}) => ({
    fontSize: 40,
    fontWeight: 'bold',
    opacity: isDragging ? 0.1 : 1,
    cursor: 'move'
});

const Knight = () => {
    const [{isDragging}, drag] = useDrag({
        item: {type: ItemTypes.KNIGHT},
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    });

    return (
        <span
            ref={drag}
            style={knightStyle({isDragging})}
        >
            ♘
        </span>
    )
};

export default Knight;