
export type ShapeConfig = {
    id?: number
    blockType: number
    shapeType: number
    spOffset: [number, number]
}

export const shapesConfig: Array<ShapeConfig> = [
    { blockType: 0, shapeType: 0, spOffset: [0, 0] },
    { blockType: 0, shapeType: 1, spOffset: [0, 0] },
    { blockType: 0, shapeType: 5, spOffset: [0, 0] },
    { blockType: 0, shapeType: 3, spOffset: [0, 0] },
    { blockType: 0, shapeType: 6, spOffset: [0, 0] },
    { blockType: 1, shapeType: 0, spOffset: [35, 57] },
    { blockType: 2, shapeType: 1, spOffset: [35, 50] },
    { blockType: 3, shapeType: 5, spOffset: [41, 56] },
    { blockType: 4, shapeType: 3, spOffset: [85, 74] },
    { blockType: 5, shapeType: 6, spOffset: [52, 48] },
    { blockType: 1, shapeType: 0, spOffset: [35, 57] },
    { blockType: 2, shapeType: 1, spOffset: [35, 50] },
    { blockType: 3, shapeType: 5, spOffset: [41, 56] },
    { blockType: 4, shapeType: 3, spOffset: [85, 74] },
    { blockType: 5, shapeType: 6, spOffset: [52, 48] },
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
    bagMaxSize: [6, 6],
    bagDefalueSize: [4, 4],
}


