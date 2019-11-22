let knightPosition = [0, 0];
let observer = null;

export const emitChange = () => {
    observer(knightPosition)
};

export const observe = o => {
    if (observer) {
        throw new Error('Multiple observers not implemented.')
    }
    observer = o;
    emitChange();
};

export const canMove = (toX, toY) => {
    const [x,y] = knightPosition;
    const dx = toX - x, dy = toY - y;
    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
};

export const moveKnight = (toX, toY) => {
    knightPosition = [toX, toY];
    emitChange();
};