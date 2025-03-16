export enum Direction {
    LB = 1, // 左下
    RT = 2, // 右上
    R = 3,  // 右
    T = 4,  // 上
    LT = 5, // 左上
    L = 6,  // 左
    B = 7,  // 下
    RB = 8  // 右下
}

export const getDirection = (currentPos: { x: number, y: number }, targetPos: { x: number, y: number }): Direction => {

    const dx = targetPos.x - currentPos.x;
    const dy = targetPos.y - currentPos.y;

    let angle = Math.atan2(dy, dx) * (180 / Math.PI);

    if (angle < 0) angle += 360;

    if (angle >= 337.5 || angle < 22.5) return Direction.R;   // 右
    if (angle >= 22.5 && angle < 67.5) return Direction.RT;  // 右上
    if (angle >= 67.5 && angle < 112.5) return Direction.T;  // 上
    if (angle >= 112.5 && angle < 157.5) return Direction.LT; // 左上
    if (angle >= 157.5 && angle < 202.5) return Direction.L;  // 左
    if (angle >= 202.5 && angle < 247.5) return Direction.LB; // 左下
    if (angle >= 247.5 && angle < 292.5) return Direction.B;  // 下
    if (angle >= 292.5 && angle < 337.5) return Direction.RB; // 右下

    return Direction.R
}
