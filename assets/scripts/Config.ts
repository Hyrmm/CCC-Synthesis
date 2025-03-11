
type ShapeConfig = {
    blockType: number
    shapeType: number
}

export const shapesConfig: Array<ShapeConfig> = [
    { blockType: 0, shapeType: 0 },
    { blockType: 0, shapeType: 1 },
    { blockType: 0, shapeType: 2 },
    { blockType: 0, shapeType: 3 },
    { blockType: 0, shapeType: 4 },
    { blockType: 0, shapeType: 5 },
    { blockType: 0, shapeType: 6 },
    { blockType: 1, shapeType: 0 },
    { blockType: 2, shapeType: 1 },
    { blockType: 1, shapeType: 0 },
    { blockType: 2, shapeType: 1 },
    // { blockType: 1, shapeType: 2},
    // { blockType: 1, shapeType: 3},
    // { blockType: 1, shapeType: 4},
    // { blockType: 1, shapeType: 5},
    // { blockType: 1, shapeType: 6},
]

export const shapeType2BlockCnt = {
    0: 1,
    1: 2,
    2: 2,
    3: 3,
    4: 3,
    5: 3,
    6: 4,
}

export const globalConfig = {
    spacing: 5,
    blockSize: 60,
    shapeSize: 70,
    bagMaxSize: [8, 10],
    bagDefalueSize: [4, 4],
}


