export type TShapeData = {
    id?: number
    lv: number
    blockType: number
    shapeType: number
    spOffset: [number, number]
}


export type TEnemyData = {
    id: number
    keyId: number
    res: string
    type: number
    armType: number
    attr: [number, number]
    attrMax: [number, number]
}

export const globalConfig = {
    spacing: 5,
    blockSize: 60,
    shapeSize: 70,
    bagMaxSize: [8, 8],
    bagDefalueSize: [4, 4],
}

export const enemiesConfig = [
    {
        "id": "1",
        "npcType": "1",
        "armType": "1",
        "npcId": "1",
        "npcAttr": "[9,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "2",
        "npcType": "1",
        "armType": "2",
        "npcId": "2",
        "npcAttr": "[10,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "3",
        "npcType": "1",
        "armType": "3",
        "npcId": "3",
        "npcAttr": "[14,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "4",
        "npcType": "1",
        "armType": "1",
        "npcId": "4",
        "npcAttr": "[18,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "5",
        "npcType": "1",
        "armType": "2",
        "npcId": "5",
        "npcAttr": "[22,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "6",
        "npcType": "1",
        "armType": "3",
        "npcId": "6",
        "npcAttr": "[28,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "7",
        "npcType": "1",
        "armType": "1",
        "npcId": "7",
        "npcAttr": "[34,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "8",
        "npcType": "1",
        "armType": "2",
        "npcId": "8",
        "npcAttr": "[38,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "9",
        "npcType": "1",
        "armType": "3",
        "npcId": "9",
        "npcAttr": "[40,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "10",
        "npcType": "2",
        "armType": "1",
        "npcId": "10001",
        "npcAttr": "[168,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "11",
        "npcType": "1",
        "armType": "2",
        "npcId": "10",
        "npcAttr": "[68,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "12",
        "npcType": "1",
        "armType": "3",
        "npcId": "11",
        "npcAttr": "[71,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "13",
        "npcType": "1",
        "armType": "1",
        "npcId": "12",
        "npcAttr": "[74,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "14",
        "npcType": "1",
        "armType": "2",
        "npcId": "13",
        "npcAttr": "[79,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "15",
        "npcType": "1",
        "armType": "3",
        "npcId": "14",
        "npcAttr": "[82,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "16",
        "npcType": "1",
        "armType": "1",
        "npcId": "15",
        "npcAttr": "[88,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "17",
        "npcType": "1",
        "armType": "2",
        "npcId": "16",
        "npcAttr": "[91,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "18",
        "npcType": "1",
        "armType": "3",
        "npcId": "17",
        "npcAttr": "[94,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "19",
        "npcType": "1",
        "armType": "1",
        "npcId": "18",
        "npcAttr": "[99,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "20",
        "npcType": "2",
        "armType": "2",
        "npcId": "10002",
        "npcAttr": "[510,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "21",
        "npcType": "1",
        "armType": "3",
        "npcId": "19",
        "npcAttr": "[108,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "22",
        "npcType": "1",
        "armType": "1",
        "npcId": "20",
        "npcAttr": "[111,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "23",
        "npcType": "1",
        "armType": "2",
        "npcId": "21",
        "npcAttr": "[116,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "24",
        "npcType": "1",
        "armType": "3",
        "npcId": "22",
        "npcAttr": "[119,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "25",
        "npcType": "1",
        "armType": "1",
        "npcId": "23",
        "npcAttr": "[125,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "26",
        "npcType": "1",
        "armType": "2",
        "npcId": "24",
        "npcAttr": "[130,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "27",
        "npcType": "1",
        "armType": "3",
        "npcId": "25",
        "npcAttr": "[133,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "28",
        "npcType": "1",
        "armType": "1",
        "npcId": "26",
        "npcAttr": "[139,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "29",
        "npcType": "1",
        "armType": "2",
        "npcId": "27",
        "npcAttr": "[142,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "30",
        "npcType": "2",
        "armType": "3",
        "npcId": "10003",
        "npcAttr": "[882,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "31",
        "npcType": "1",
        "armType": "1",
        "npcId": "28",
        "npcAttr": "[150,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "32",
        "npcType": "1",
        "armType": "2",
        "npcId": "29",
        "npcAttr": "[153,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "33",
        "npcType": "1",
        "armType": "3",
        "npcId": "30",
        "npcAttr": "[156,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "34",
        "npcType": "1",
        "armType": "1",
        "npcId": "31",
        "npcAttr": "[159,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "35",
        "npcType": "1",
        "armType": "2",
        "npcId": "32",
        "npcAttr": "[162,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "36",
        "npcType": "1",
        "armType": "3",
        "npcId": "33",
        "npcAttr": "[164,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "37",
        "npcType": "1",
        "armType": "1",
        "npcId": "34",
        "npcAttr": "[167,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "38",
        "npcType": "1",
        "armType": "2",
        "npcId": "35",
        "npcAttr": "[170,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "39",
        "npcType": "1",
        "armType": "3",
        "npcId": "36",
        "npcAttr": "[173,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "40",
        "npcType": "2",
        "armType": "1",
        "npcId": "10004",
        "npcAttr": "[1232,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "41",
        "npcType": "1",
        "armType": "2",
        "npcId": "37",
        "npcAttr": "[238,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "42",
        "npcType": "1",
        "armType": "3",
        "npcId": "38",
        "npcAttr": "[242,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "43",
        "npcType": "1",
        "armType": "1",
        "npcId": "39",
        "npcAttr": "[246,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "44",
        "npcType": "1",
        "armType": "2",
        "npcId": "40",
        "npcAttr": "[249,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "45",
        "npcType": "1",
        "armType": "3",
        "npcId": "41",
        "npcAttr": "[257,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "46",
        "npcType": "1",
        "armType": "1",
        "npcId": "42",
        "npcAttr": "[261,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "47",
        "npcType": "1",
        "armType": "2",
        "npcId": "43",
        "npcAttr": "[265,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "48",
        "npcType": "1",
        "armType": "3",
        "npcId": "44",
        "npcAttr": "[268,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "49",
        "npcType": "1",
        "armType": "1",
        "npcId": "45",
        "npcAttr": "[272,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "50",
        "npcType": "2",
        "armType": "2",
        "npcId": "10005",
        "npcAttr": "[2208,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "51",
        "npcType": "1",
        "armType": "3",
        "npcId": "46",
        "npcAttr": "[280,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "52",
        "npcType": "1",
        "armType": "1",
        "npcId": "47",
        "npcAttr": "[287,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "53",
        "npcType": "1",
        "armType": "2",
        "npcId": "48",
        "npcAttr": "[291,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "54",
        "npcType": "1",
        "armType": "3",
        "npcId": "49",
        "npcAttr": "[295,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "55",
        "npcType": "1",
        "armType": "1",
        "npcId": "50",
        "npcAttr": "[302,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "56",
        "npcType": "1",
        "armType": "2",
        "npcId": "51",
        "npcAttr": "[306,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "57",
        "npcType": "1",
        "armType": "3",
        "npcId": "52",
        "npcAttr": "[310,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "58",
        "npcType": "1",
        "armType": "1",
        "npcId": "53",
        "npcAttr": "[314,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "59",
        "npcType": "1",
        "armType": "2",
        "npcId": "54",
        "npcAttr": "[321,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "60",
        "npcType": "2",
        "armType": "3",
        "npcId": "10006",
        "npcAttr": "[2600,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "61",
        "npcType": "1",
        "armType": "1",
        "npcId": "55",
        "npcAttr": "[411,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "62",
        "npcType": "1",
        "armType": "2",
        "npcId": "56",
        "npcAttr": "[421,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "63",
        "npcType": "1",
        "armType": "3",
        "npcId": "57",
        "npcAttr": "[425,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "64",
        "npcType": "1",
        "armType": "1",
        "npcId": "58",
        "npcAttr": "[435,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "65",
        "npcType": "1",
        "armType": "2",
        "npcId": "59",
        "npcAttr": "[439,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "66",
        "npcType": "1",
        "armType": "3",
        "npcId": "60",
        "npcAttr": "[444,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "67",
        "npcType": "1",
        "armType": "1",
        "npcId": "61",
        "npcAttr": "[454,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "68",
        "npcType": "1",
        "armType": "2",
        "npcId": "62",
        "npcAttr": "[458,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "69",
        "npcType": "1",
        "armType": "3",
        "npcId": "63",
        "npcAttr": "[468,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "70",
        "npcType": "2",
        "armType": "1",
        "npcId": "10007",
        "npcAttr": "[3784,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "71",
        "npcType": "1",
        "armType": "2",
        "npcId": "64",
        "npcAttr": "[482,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "72",
        "npcType": "1",
        "armType": "3",
        "npcId": "65",
        "npcAttr": "[487,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "73",
        "npcType": "1",
        "armType": "1",
        "npcId": "66",
        "npcAttr": "[496,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "74",
        "npcType": "1",
        "armType": "2",
        "npcId": "67",
        "npcAttr": "[501,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "75",
        "npcType": "1",
        "armType": "3",
        "npcId": "68",
        "npcAttr": "[510,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "76",
        "npcType": "1",
        "armType": "1",
        "npcId": "69",
        "npcAttr": "[515,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "77",
        "npcType": "1",
        "armType": "2",
        "npcId": "70",
        "npcAttr": "[524,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "78",
        "npcType": "1",
        "armType": "3",
        "npcId": "71",
        "npcAttr": "[529,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "79",
        "npcType": "1",
        "armType": "1",
        "npcId": "72",
        "npcAttr": "[539,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "80",
        "npcType": "2",
        "armType": "2",
        "npcId": "10008",
        "npcAttr": "[4344,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "81",
        "npcType": "1",
        "armType": "3",
        "npcId": "73",
        "npcAttr": "[663,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "82",
        "npcType": "1",
        "armType": "1",
        "npcId": "74",
        "npcAttr": "[669,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "83",
        "npcType": "1",
        "armType": "2",
        "npcId": "75",
        "npcAttr": "[680,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "84",
        "npcType": "1",
        "armType": "3",
        "npcId": "76",
        "npcAttr": "[692,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "85",
        "npcType": "1",
        "armType": "1",
        "npcId": "77",
        "npcAttr": "[703,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "86",
        "npcType": "1",
        "armType": "2",
        "npcId": "78",
        "npcAttr": "[709,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "87",
        "npcType": "1",
        "armType": "3",
        "npcId": "79",
        "npcAttr": "[720,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "88",
        "npcType": "1",
        "armType": "1",
        "npcId": "80",
        "npcAttr": "[731,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "89",
        "npcType": "1",
        "armType": "2",
        "npcId": "81",
        "npcAttr": "[737,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "90",
        "npcType": "2",
        "armType": "3",
        "npcId": "10009",
        "npcAttr": "[5984,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "91",
        "npcType": "1",
        "armType": "1",
        "npcId": "82",
        "npcAttr": "[886,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "92",
        "npcType": "1",
        "armType": "2",
        "npcId": "83",
        "npcAttr": "[900,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "93",
        "npcType": "1",
        "armType": "3",
        "npcId": "84",
        "npcAttr": "[906,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "94",
        "npcType": "1",
        "armType": "1",
        "npcId": "85",
        "npcAttr": "[919,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "95",
        "npcType": "1",
        "armType": "2",
        "npcId": "86",
        "npcAttr": "[933,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "96",
        "npcType": "1",
        "armType": "3",
        "npcId": "87",
        "npcAttr": "[946,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "97",
        "npcType": "1",
        "armType": "1",
        "npcId": "88",
        "npcAttr": "[959,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "98",
        "npcType": "1",
        "armType": "2",
        "npcId": "89",
        "npcAttr": "[966,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "99",
        "npcType": "1",
        "armType": "3",
        "npcId": "90",
        "npcAttr": "[979,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "100",
        "npcType": "2",
        "armType": "1",
        "npcId": "10010",
        "npcAttr": "[7936,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "101",
        "npcType": "1",
        "armType": "2",
        "npcId": "91",
        "npcAttr": "[1142,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "102",
        "npcType": "1",
        "armType": "3",
        "npcId": "92",
        "npcAttr": "[1157,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "103",
        "npcType": "1",
        "armType": "1",
        "npcId": "93",
        "npcAttr": "[1164,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "104",
        "npcType": "1",
        "armType": "2",
        "npcId": "94",
        "npcAttr": "[1172,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "105",
        "npcType": "1",
        "armType": "3",
        "npcId": "95",
        "npcAttr": "[1179,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "106",
        "npcType": "1",
        "armType": "1",
        "npcId": "96",
        "npcAttr": "[1194,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "107",
        "npcType": "1",
        "armType": "2",
        "npcId": "97",
        "npcAttr": "[1202,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "108",
        "npcType": "1",
        "armType": "3",
        "npcId": "98",
        "npcAttr": "[1210,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "109",
        "npcType": "1",
        "armType": "1",
        "npcId": "99",
        "npcAttr": "[1217,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "110",
        "npcType": "2",
        "armType": "2",
        "npcId": "10011",
        "npcAttr": "[9856,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "111",
        "npcType": "1",
        "armType": "3",
        "npcId": "100",
        "npcAttr": "[1395,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "112",
        "npcType": "1",
        "armType": "1",
        "npcId": "101",
        "npcAttr": "[1403,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "113",
        "npcType": "1",
        "armType": "2",
        "npcId": "102",
        "npcAttr": "[1412,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "114",
        "npcType": "1",
        "armType": "3",
        "npcId": "103",
        "npcAttr": "[1429,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "115",
        "npcType": "1",
        "armType": "1",
        "npcId": "104",
        "npcAttr": "[1437,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "116",
        "npcType": "1",
        "armType": "2",
        "npcId": "105",
        "npcAttr": "[1446,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "117",
        "npcType": "1",
        "armType": "3",
        "npcId": "106",
        "npcAttr": "[1454,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "118",
        "npcType": "1",
        "armType": "1",
        "npcId": "107",
        "npcAttr": "[1471,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "119",
        "npcType": "1",
        "armType": "2",
        "npcId": "108",
        "npcAttr": "[1480,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "120",
        "npcType": "2",
        "armType": "3",
        "npcId": "10012",
        "npcAttr": "[11904,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "121",
        "npcType": "1",
        "armType": "1",
        "npcId": "109",
        "npcAttr": "[1663,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "122",
        "npcType": "1",
        "armType": "2",
        "npcId": "110",
        "npcAttr": "[1682,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "123",
        "npcType": "1",
        "armType": "3",
        "npcId": "111",
        "npcAttr": "[1692,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "124",
        "npcType": "1",
        "armType": "1",
        "npcId": "112",
        "npcAttr": "[1701,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "125",
        "npcType": "1",
        "armType": "2",
        "npcId": "113",
        "npcAttr": "[1710,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "126",
        "npcType": "1",
        "armType": "3",
        "npcId": "114",
        "npcAttr": "[1729,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "127",
        "npcType": "1",
        "armType": "1",
        "npcId": "115",
        "npcAttr": "[1739,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "128",
        "npcType": "1",
        "armType": "2",
        "npcId": "116",
        "npcAttr": "[1748,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "129",
        "npcType": "1",
        "armType": "3",
        "npcId": "117",
        "npcAttr": "[1758,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "130",
        "npcType": "2",
        "armType": "1",
        "npcId": "10013",
        "npcAttr": "[14216,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "131",
        "npcType": "1",
        "armType": "2",
        "npcId": "118",
        "npcAttr": "[1965,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "132",
        "npcType": "1",
        "armType": "3",
        "npcId": "119",
        "npcAttr": "[1975,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "133",
        "npcType": "1",
        "armType": "1",
        "npcId": "120",
        "npcAttr": "[1985,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "134",
        "npcType": "1",
        "armType": "2",
        "npcId": "121",
        "npcAttr": "[2006,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "135",
        "npcType": "1",
        "armType": "3",
        "npcId": "122",
        "npcAttr": "[2017,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "136",
        "npcType": "1",
        "armType": "1",
        "npcId": "123",
        "npcAttr": "[2027,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "137",
        "npcType": "1",
        "armType": "2",
        "npcId": "124",
        "npcAttr": "[2037,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "138",
        "npcType": "1",
        "armType": "3",
        "npcId": "125",
        "npcAttr": "[2058,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "139",
        "npcType": "1",
        "armType": "1",
        "npcId": "126",
        "npcAttr": "[2069,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "140",
        "npcType": "2",
        "armType": "2",
        "npcId": "10014",
        "npcAttr": "[16632,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "141",
        "npcType": "1",
        "armType": "3",
        "npcId": "127",
        "npcAttr": "[2291,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "142",
        "npcType": "1",
        "armType": "1",
        "npcId": "128",
        "npcAttr": "[2325,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "143",
        "npcType": "1",
        "armType": "2",
        "npcId": "129",
        "npcAttr": "[2347,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "144",
        "npcType": "1",
        "armType": "3",
        "npcId": "130",
        "npcAttr": "[2370,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "145",
        "npcType": "1",
        "armType": "1",
        "npcId": "131",
        "npcAttr": "[2404,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "146",
        "npcType": "1",
        "armType": "2",
        "npcId": "132",
        "npcAttr": "[2427,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "147",
        "npcType": "1",
        "armType": "3",
        "npcId": "133",
        "npcAttr": "[2449,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "148",
        "npcType": "1",
        "armType": "1",
        "npcId": "134",
        "npcAttr": "[2483,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "149",
        "npcType": "1",
        "armType": "2",
        "npcId": "135",
        "npcAttr": "[2506,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "150",
        "npcType": "2",
        "armType": "3",
        "npcId": "10015",
        "npcAttr": "[20320,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "151",
        "npcType": "1",
        "armType": "1",
        "npcId": "136",
        "npcAttr": "[2776,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "152",
        "npcType": "1",
        "armType": "2",
        "npcId": "137",
        "npcAttr": "[2801,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "153",
        "npcType": "1",
        "armType": "3",
        "npcId": "138",
        "npcAttr": "[2838,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "154",
        "npcType": "1",
        "armType": "1",
        "npcId": "139",
        "npcAttr": "[2862,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "155",
        "npcType": "1",
        "armType": "2",
        "npcId": "140",
        "npcAttr": "[2887,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "156",
        "npcType": "1",
        "armType": "3",
        "npcId": "141",
        "npcAttr": "[2924,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "157",
        "npcType": "1",
        "armType": "1",
        "npcId": "142",
        "npcAttr": "[2948,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "158",
        "npcType": "1",
        "armType": "2",
        "npcId": "143",
        "npcAttr": "[2973,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "159",
        "npcType": "1",
        "armType": "3",
        "npcId": "144",
        "npcAttr": "[3010,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "160",
        "npcType": "2",
        "armType": "1",
        "npcId": "10016",
        "npcAttr": "[24272,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "161",
        "npcType": "1",
        "armType": "2",
        "npcId": "145",
        "npcAttr": "[3294,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "162",
        "npcType": "1",
        "armType": "3",
        "npcId": "146",
        "npcAttr": "[3334,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "163",
        "npcType": "1",
        "armType": "1",
        "npcId": "147",
        "npcAttr": "[3360,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "164",
        "npcType": "1",
        "armType": "2",
        "npcId": "148",
        "npcAttr": "[3387,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "165",
        "npcType": "1",
        "armType": "3",
        "npcId": "149",
        "npcAttr": "[3427,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "166",
        "npcType": "1",
        "armType": "1",
        "npcId": "150",
        "npcAttr": "[3453,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "167",
        "npcType": "1",
        "armType": "2",
        "npcId": "151",
        "npcAttr": "[3479,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "168",
        "npcType": "1",
        "armType": "3",
        "npcId": "152",
        "npcAttr": "[3519,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "169",
        "npcType": "1",
        "armType": "1",
        "npcId": "153",
        "npcAttr": "[3546,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "170",
        "npcType": "2",
        "armType": "2",
        "npcId": "10017",
        "npcAttr": "[28680,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "171",
        "npcType": "1",
        "armType": "3",
        "npcId": "154",
        "npcAttr": "[3870,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "172",
        "npcType": "1",
        "armType": "1",
        "npcId": "155",
        "npcAttr": "[3898,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "173",
        "npcType": "1",
        "armType": "2",
        "npcId": "156",
        "npcAttr": "[3941,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "174",
        "npcType": "1",
        "armType": "3",
        "npcId": "157",
        "npcAttr": "[3969,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "175",
        "npcType": "1",
        "armType": "1",
        "npcId": "158",
        "npcAttr": "[3997,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "176",
        "npcType": "1",
        "armType": "2",
        "npcId": "159",
        "npcAttr": "[4040,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "177",
        "npcType": "1",
        "armType": "3",
        "npcId": "160",
        "npcAttr": "[4068,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "178",
        "npcType": "1",
        "armType": "1",
        "npcId": "161",
        "npcAttr": "[4097,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "179",
        "npcType": "1",
        "armType": "2",
        "npcId": "162",
        "npcAttr": "[4139,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "180",
        "npcType": "2",
        "armType": "3",
        "npcId": "10018",
        "npcAttr": "[33336,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "181",
        "npcType": "1",
        "armType": "1",
        "npcId": "163",
        "npcAttr": "[4491,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "182",
        "npcType": "1",
        "armType": "2",
        "npcId": "164",
        "npcAttr": "[4536,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "183",
        "npcType": "1",
        "armType": "3",
        "npcId": "165",
        "npcAttr": "[4581,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "184",
        "npcType": "1",
        "armType": "1",
        "npcId": "166",
        "npcAttr": "[4627,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "185",
        "npcType": "1",
        "armType": "2",
        "npcId": "167",
        "npcAttr": "[4672,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "186",
        "npcType": "1",
        "armType": "3",
        "npcId": "168",
        "npcAttr": "[4702,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "187",
        "npcType": "1",
        "armType": "1",
        "npcId": "169",
        "npcAttr": "[4748,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "188",
        "npcType": "1",
        "armType": "2",
        "npcId": "170",
        "npcAttr": "[4793,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "189",
        "npcType": "1",
        "armType": "3",
        "npcId": "171",
        "npcAttr": "[4838,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "190",
        "npcType": "2",
        "armType": "1",
        "npcId": "10019",
        "npcAttr": "[39072,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "191",
        "npcType": "1",
        "armType": "2",
        "npcId": "172",
        "npcAttr": "[4929,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "192",
        "npcType": "1",
        "armType": "3",
        "npcId": "173",
        "npcAttr": "[4974,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "193",
        "npcType": "1",
        "armType": "1",
        "npcId": "174",
        "npcAttr": "[5020,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "194",
        "npcType": "1",
        "armType": "2",
        "npcId": "175",
        "npcAttr": "[5065,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "195",
        "npcType": "1",
        "armType": "3",
        "npcId": "176",
        "npcAttr": "[5111,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "196",
        "npcType": "1",
        "armType": "1",
        "npcId": "177",
        "npcAttr": "[5141,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "197",
        "npcType": "1",
        "armType": "2",
        "npcId": "178",
        "npcAttr": "[5186,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "198",
        "npcType": "1",
        "armType": "3",
        "npcId": "179",
        "npcAttr": "[5232,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "199",
        "npcType": "1",
        "armType": "1",
        "npcId": "180",
        "npcAttr": "[5277,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "200",
        "npcType": "2",
        "armType": "2",
        "npcId": "10020",
        "npcAttr": "[42576,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "201",
        "npcType": "1",
        "armType": "3",
        "npcId": "181",
        "npcAttr": "[5703,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "202",
        "npcType": "1",
        "armType": "1",
        "npcId": "182",
        "npcAttr": "[5751,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "203",
        "npcType": "1",
        "armType": "2",
        "npcId": "183",
        "npcAttr": "[5799,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "204",
        "npcType": "1",
        "armType": "3",
        "npcId": "184",
        "npcAttr": "[5848,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "205",
        "npcType": "1",
        "armType": "1",
        "npcId": "185",
        "npcAttr": "[5896,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "206",
        "npcType": "1",
        "armType": "2",
        "npcId": "186",
        "npcAttr": "[5928,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "207",
        "npcType": "1",
        "armType": "3",
        "npcId": "187",
        "npcAttr": "[5976,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "208",
        "npcType": "1",
        "armType": "1",
        "npcId": "188",
        "npcAttr": "[6024,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "209",
        "npcType": "1",
        "armType": "2",
        "npcId": "189",
        "npcAttr": "[6073,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "210",
        "npcType": "2",
        "armType": "3",
        "npcId": "10021",
        "npcAttr": "[48968,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "211",
        "npcType": "1",
        "armType": "1",
        "npcId": "190",
        "npcAttr": "[6169,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "212",
        "npcType": "1",
        "armType": "2",
        "npcId": "191",
        "npcAttr": "[6217,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "213",
        "npcType": "1",
        "armType": "3",
        "npcId": "192",
        "npcAttr": "[6265,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "214",
        "npcType": "1",
        "armType": "1",
        "npcId": "193",
        "npcAttr": "[6314,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "215",
        "npcType": "1",
        "armType": "2",
        "npcId": "194",
        "npcAttr": "[6346,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "216",
        "npcType": "1",
        "armType": "3",
        "npcId": "195",
        "npcAttr": "[6394,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "217",
        "npcType": "1",
        "armType": "1",
        "npcId": "196",
        "npcAttr": "[6442,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "218",
        "npcType": "1",
        "armType": "2",
        "npcId": "197",
        "npcAttr": "[6490,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "219",
        "npcType": "1",
        "armType": "3",
        "npcId": "198",
        "npcAttr": "[6538,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "220",
        "npcType": "2",
        "armType": "1",
        "npcId": "10022",
        "npcAttr": "[52696,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "221",
        "npcType": "1",
        "armType": "2",
        "npcId": "199",
        "npcAttr": "[7042,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "222",
        "npcType": "1",
        "armType": "3",
        "npcId": "200",
        "npcAttr": "[7093,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "223",
        "npcType": "1",
        "armType": "1",
        "npcId": "201",
        "npcAttr": "[7161,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "224",
        "npcType": "1",
        "armType": "2",
        "npcId": "202",
        "npcAttr": "[7212,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "225",
        "npcType": "1",
        "armType": "3",
        "npcId": "203",
        "npcAttr": "[7280,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "226",
        "npcType": "1",
        "armType": "1",
        "npcId": "204",
        "npcAttr": "[7331,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "227",
        "npcType": "1",
        "armType": "2",
        "npcId": "205",
        "npcAttr": "[7399,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "228",
        "npcType": "1",
        "armType": "3",
        "npcId": "206",
        "npcAttr": "[7450,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "229",
        "npcType": "1",
        "armType": "1",
        "npcId": "207",
        "npcAttr": "[7518,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "230",
        "npcType": "2",
        "armType": "2",
        "npcId": "10023",
        "npcAttr": "[60552,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "231",
        "npcType": "1",
        "armType": "3",
        "npcId": "208",
        "npcAttr": "[7637,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "232",
        "npcType": "1",
        "armType": "1",
        "npcId": "209",
        "npcAttr": "[7689,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "233",
        "npcType": "1",
        "armType": "2",
        "npcId": "210",
        "npcAttr": "[7757,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "234",
        "npcType": "1",
        "armType": "3",
        "npcId": "211",
        "npcAttr": "[7808,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "235",
        "npcType": "1",
        "armType": "1",
        "npcId": "212",
        "npcAttr": "[7876,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "236",
        "npcType": "1",
        "armType": "2",
        "npcId": "213",
        "npcAttr": "[7927,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "237",
        "npcType": "1",
        "armType": "3",
        "npcId": "214",
        "npcAttr": "[7995,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "238",
        "npcType": "1",
        "armType": "1",
        "npcId": "215",
        "npcAttr": "[8046,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "239",
        "npcType": "1",
        "armType": "2",
        "npcId": "216",
        "npcAttr": "[8114,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "240",
        "npcType": "2",
        "armType": "3",
        "npcId": "10024",
        "npcAttr": "[65320,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "241",
        "npcType": "1",
        "armType": "1",
        "npcId": "217",
        "npcAttr": "[8690,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "242",
        "npcType": "1",
        "armType": "2",
        "npcId": "218",
        "npcAttr": "[8762,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "243",
        "npcType": "1",
        "armType": "3",
        "npcId": "219",
        "npcAttr": "[8816,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "244",
        "npcType": "1",
        "armType": "1",
        "npcId": "220",
        "npcAttr": "[8888,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "245",
        "npcType": "1",
        "armType": "2",
        "npcId": "221",
        "npcAttr": "[8942,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "246",
        "npcType": "1",
        "armType": "3",
        "npcId": "222",
        "npcAttr": "[9013,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "247",
        "npcType": "1",
        "armType": "1",
        "npcId": "223",
        "npcAttr": "[9067,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "248",
        "npcType": "1",
        "armType": "2",
        "npcId": "224",
        "npcAttr": "[9139,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "249",
        "npcType": "1",
        "armType": "3",
        "npcId": "225",
        "npcAttr": "[9193,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "250",
        "npcType": "2",
        "armType": "1",
        "npcId": "10025",
        "npcAttr": "[74120,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "251",
        "npcType": "1",
        "armType": "2",
        "npcId": "226",
        "npcAttr": "[9319,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "252",
        "npcType": "1",
        "armType": "3",
        "npcId": "227",
        "npcAttr": "[9390,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "253",
        "npcType": "1",
        "armType": "1",
        "npcId": "228",
        "npcAttr": "[9444,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "254",
        "npcType": "1",
        "armType": "2",
        "npcId": "229",
        "npcAttr": "[9516,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "255",
        "npcType": "1",
        "armType": "3",
        "npcId": "230",
        "npcAttr": "[9570,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "256",
        "npcType": "1",
        "armType": "1",
        "npcId": "231",
        "npcAttr": "[9642,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "257",
        "npcType": "1",
        "armType": "2",
        "npcId": "232",
        "npcAttr": "[9696,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "258",
        "npcType": "1",
        "armType": "3",
        "npcId": "233",
        "npcAttr": "[9768,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "259",
        "npcType": "1",
        "armType": "1",
        "npcId": "234",
        "npcAttr": "[9821,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "260",
        "npcType": "2",
        "armType": "2",
        "npcId": "10026",
        "npcAttr": "[79144,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "261",
        "npcType": "1",
        "armType": "3",
        "npcId": "235",
        "npcAttr": "[10490,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "262",
        "npcType": "1",
        "armType": "1",
        "npcId": "236",
        "npcAttr": "[10565,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "263",
        "npcType": "1",
        "armType": "2",
        "npcId": "237",
        "npcAttr": "[10641,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "264",
        "npcType": "1",
        "armType": "3",
        "npcId": "238",
        "npcAttr": "[10735,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "265",
        "npcType": "1",
        "armType": "1",
        "npcId": "239",
        "npcAttr": "[10811,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "266",
        "npcType": "1",
        "armType": "2",
        "npcId": "240",
        "npcAttr": "[10886,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "267",
        "npcType": "1",
        "armType": "3",
        "npcId": "241",
        "npcAttr": "[10962,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "268",
        "npcType": "1",
        "armType": "1",
        "npcId": "242",
        "npcAttr": "[11038,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "269",
        "npcType": "1",
        "armType": "2",
        "npcId": "243",
        "npcAttr": "[11113,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "270",
        "npcType": "2",
        "armType": "3",
        "npcId": "10027",
        "npcAttr": "[89512,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "271",
        "npcType": "1",
        "armType": "1",
        "npcId": "244",
        "npcAttr": "[11283,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "272",
        "npcType": "1",
        "armType": "2",
        "npcId": "245",
        "npcAttr": "[11359,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "273",
        "npcType": "1",
        "armType": "3",
        "npcId": "246",
        "npcAttr": "[11435,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "274",
        "npcType": "1",
        "armType": "1",
        "npcId": "247",
        "npcAttr": "[11510,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "275",
        "npcType": "1",
        "armType": "2",
        "npcId": "248",
        "npcAttr": "[11586,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "276",
        "npcType": "1",
        "armType": "3",
        "npcId": "249",
        "npcAttr": "[11661,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "277",
        "npcType": "1",
        "armType": "1",
        "npcId": "250",
        "npcAttr": "[11756,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "278",
        "npcType": "1",
        "armType": "2",
        "npcId": "251",
        "npcAttr": "[11831,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "279",
        "npcType": "1",
        "armType": "3",
        "npcId": "252",
        "npcAttr": "[11907,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "280",
        "npcType": "2",
        "armType": "1",
        "npcId": "10028",
        "npcAttr": "[95864,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "281",
        "npcType": "1",
        "armType": "2",
        "npcId": "253",
        "npcAttr": "[12661,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "282",
        "npcType": "1",
        "armType": "3",
        "npcId": "254",
        "npcAttr": "[12740,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "283",
        "npcType": "1",
        "armType": "1",
        "npcId": "255",
        "npcAttr": "[12820,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "284",
        "npcType": "1",
        "armType": "2",
        "npcId": "256",
        "npcAttr": "[12919,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "285",
        "npcType": "1",
        "armType": "3",
        "npcId": "257",
        "npcAttr": "[12998,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "286",
        "npcType": "1",
        "armType": "1",
        "npcId": "258",
        "npcAttr": "[13078,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "287",
        "npcType": "1",
        "armType": "2",
        "npcId": "259",
        "npcAttr": "[13157,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "288",
        "npcType": "1",
        "armType": "3",
        "npcId": "260",
        "npcAttr": "[13237,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "289",
        "npcType": "1",
        "armType": "1",
        "npcId": "261",
        "npcAttr": "[13316,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "290",
        "npcType": "2",
        "armType": "2",
        "npcId": "10029",
        "npcAttr": "[107160,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "291",
        "npcType": "1",
        "armType": "3",
        "npcId": "262",
        "npcAttr": "[13495,50]",
        "npcRes": "gongjian1"
    },
    {
        "id": "292",
        "npcType": "1",
        "armType": "1",
        "npcId": "263",
        "npcAttr": "[13574,50]",
        "npcRes": "jianshi1"
    },
    {
        "id": "293",
        "npcType": "1",
        "armType": "2",
        "npcId": "264",
        "npcAttr": "[13653,50]",
        "npcRes": "qibing1"
    },
    {
        "id": "294",
        "npcType": "1",
        "armType": "3",
        "npcId": "265",
        "npcAttr": "[13733,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "295",
        "npcType": "1",
        "armType": "1",
        "npcId": "266",
        "npcAttr": "[13812,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "296",
        "npcType": "1",
        "armType": "2",
        "npcId": "267",
        "npcAttr": "[13892,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "297",
        "npcType": "1",
        "armType": "3",
        "npcId": "268",
        "npcAttr": "[13991,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "298",
        "npcType": "1",
        "armType": "1",
        "npcId": "269",
        "npcAttr": "[14070,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "299",
        "npcType": "1",
        "armType": "2",
        "npcId": "270",
        "npcAttr": "[14149,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "300",
        "npcType": "2",
        "armType": "3",
        "npcId": "10030",
        "npcAttr": "[113832,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "301",
        "npcType": "1",
        "armType": "1",
        "npcId": "271",
        "npcAttr": "[15010,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "302",
        "npcType": "1",
        "armType": "2",
        "npcId": "272",
        "npcAttr": "[15094,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "303",
        "npcType": "1",
        "armType": "3",
        "npcId": "273",
        "npcAttr": "[15197,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "304",
        "npcType": "1",
        "armType": "1",
        "npcId": "274",
        "npcAttr": "[15301,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "305",
        "npcType": "1",
        "armType": "2",
        "npcId": "275",
        "npcAttr": "[15405,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "306",
        "npcType": "1",
        "armType": "3",
        "npcId": "276",
        "npcAttr": "[15489,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "307",
        "npcType": "1",
        "armType": "1",
        "npcId": "277",
        "npcAttr": "[15593,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "308",
        "npcType": "1",
        "armType": "2",
        "npcId": "278",
        "npcAttr": "[15696,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "309",
        "npcType": "1",
        "armType": "3",
        "npcId": "279",
        "npcAttr": "[15800,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "310",
        "npcType": "2",
        "armType": "1",
        "npcId": "10031",
        "npcAttr": "[127072,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "311",
        "npcType": "1",
        "armType": "2",
        "npcId": "280",
        "npcAttr": "[15988,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "312",
        "npcType": "1",
        "armType": "3",
        "npcId": "281",
        "npcAttr": "[16091,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "313",
        "npcType": "1",
        "armType": "1",
        "npcId": "282",
        "npcAttr": "[16195,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "314",
        "npcType": "1",
        "armType": "2",
        "npcId": "283",
        "npcAttr": "[16279,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "315",
        "npcType": "1",
        "armType": "3",
        "npcId": "284",
        "npcAttr": "[16383,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "316",
        "npcType": "1",
        "armType": "1",
        "npcId": "285",
        "npcAttr": "[16486,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "317",
        "npcType": "1",
        "armType": "2",
        "npcId": "286",
        "npcAttr": "[16590,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "318",
        "npcType": "1",
        "armType": "3",
        "npcId": "287",
        "npcAttr": "[16674,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "319",
        "npcType": "1",
        "armType": "1",
        "npcId": "288",
        "npcAttr": "[16778,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "320",
        "npcType": "2",
        "armType": "2",
        "npcId": "10032",
        "npcAttr": "[135048,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "321",
        "npcType": "1",
        "armType": "3",
        "npcId": "289",
        "npcAttr": "[17757,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "322",
        "npcType": "1",
        "armType": "1",
        "npcId": "290",
        "npcAttr": "[17844,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "323",
        "npcType": "1",
        "armType": "2",
        "npcId": "291",
        "npcAttr": "[17953,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "324",
        "npcType": "1",
        "armType": "3",
        "npcId": "292",
        "npcAttr": "[18062,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "325",
        "npcType": "1",
        "armType": "1",
        "npcId": "293",
        "npcAttr": "[18170,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "326",
        "npcType": "1",
        "armType": "2",
        "npcId": "294",
        "npcAttr": "[18257,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "327",
        "npcType": "1",
        "armType": "3",
        "npcId": "295",
        "npcAttr": "[18366,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "328",
        "npcType": "1",
        "armType": "1",
        "npcId": "296",
        "npcAttr": "[18475,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "329",
        "npcType": "1",
        "armType": "2",
        "npcId": "297",
        "npcAttr": "[18583,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "330",
        "npcType": "2",
        "armType": "3",
        "npcId": "10033",
        "npcAttr": "[149360,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "331",
        "npcType": "1",
        "armType": "1",
        "npcId": "298",
        "npcAttr": "[18779,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "332",
        "npcType": "1",
        "armType": "2",
        "npcId": "299",
        "npcAttr": "[18888,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "333",
        "npcType": "1",
        "armType": "3",
        "npcId": "300",
        "npcAttr": "[18996,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "334",
        "npcType": "1",
        "armType": "1",
        "npcId": "301",
        "npcAttr": "[19083,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "335",
        "npcType": "1",
        "armType": "2",
        "npcId": "302",
        "npcAttr": "[19192,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "336",
        "npcType": "1",
        "armType": "3",
        "npcId": "303",
        "npcAttr": "[19301,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "337",
        "npcType": "1",
        "armType": "1",
        "npcId": "304",
        "npcAttr": "[19409,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "338",
        "npcType": "1",
        "armType": "2",
        "npcId": "305",
        "npcAttr": "[19496,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "339",
        "npcType": "1",
        "armType": "3",
        "npcId": "306",
        "npcAttr": "[19605,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "340",
        "npcType": "2",
        "armType": "1",
        "npcId": "10034",
        "npcAttr": "[157712,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "341",
        "npcType": "1",
        "armType": "2",
        "npcId": "307",
        "npcAttr": "[19822,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "342",
        "npcType": "1",
        "armType": "3",
        "npcId": "308",
        "npcAttr": "[19953,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "343",
        "npcType": "1",
        "armType": "1",
        "npcId": "309",
        "npcAttr": "[20061,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "344",
        "npcType": "1",
        "armType": "2",
        "npcId": "310",
        "npcAttr": "[20192,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "345",
        "npcType": "1",
        "armType": "3",
        "npcId": "311",
        "npcAttr": "[20300,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "346",
        "npcType": "1",
        "armType": "1",
        "npcId": "312",
        "npcAttr": "[20409,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "347",
        "npcType": "1",
        "armType": "2",
        "npcId": "313",
        "npcAttr": "[20540,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "348",
        "npcType": "1",
        "armType": "3",
        "npcId": "314",
        "npcAttr": "[20648,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "349",
        "npcType": "1",
        "armType": "1",
        "npcId": "315",
        "npcAttr": "[20779,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "350",
        "npcType": "2",
        "armType": "2",
        "npcId": "10035",
        "npcAttr": "[167096,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "351",
        "npcType": "1",
        "armType": "3",
        "npcId": "316",
        "npcAttr": "[20996,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "352",
        "npcType": "1",
        "armType": "1",
        "npcId": "317",
        "npcAttr": "[21126,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "353",
        "npcType": "1",
        "armType": "2",
        "npcId": "318",
        "npcAttr": "[21235,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "354",
        "npcType": "1",
        "armType": "3",
        "npcId": "319",
        "npcAttr": "[21366,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "355",
        "npcType": "1",
        "armType": "1",
        "npcId": "320",
        "npcAttr": "[21474,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "356",
        "npcType": "1",
        "armType": "2",
        "npcId": "321",
        "npcAttr": "[21583,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "357",
        "npcType": "1",
        "armType": "3",
        "npcId": "322",
        "npcAttr": "[21713,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "358",
        "npcType": "1",
        "armType": "1",
        "npcId": "323",
        "npcAttr": "[21822,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "359",
        "npcType": "1",
        "armType": "2",
        "npcId": "324",
        "npcAttr": "[21952,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "360",
        "npcType": "2",
        "armType": "3",
        "npcId": "10036",
        "npcAttr": "[176488,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "361",
        "npcType": "1",
        "armType": "1",
        "npcId": "325",
        "npcAttr": "[22170,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "362",
        "npcType": "1",
        "armType": "2",
        "npcId": "326",
        "npcAttr": "[22300,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "363",
        "npcType": "1",
        "armType": "3",
        "npcId": "327",
        "npcAttr": "[22409,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "364",
        "npcType": "1",
        "armType": "1",
        "npcId": "328",
        "npcAttr": "[22539,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "365",
        "npcType": "1",
        "armType": "2",
        "npcId": "329",
        "npcAttr": "[22648,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "366",
        "npcType": "1",
        "armType": "3",
        "npcId": "330",
        "npcAttr": "[22757,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "367",
        "npcType": "1",
        "armType": "1",
        "npcId": "331",
        "npcAttr": "[22887,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "368",
        "npcType": "1",
        "armType": "2",
        "npcId": "332",
        "npcAttr": "[22996,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "369",
        "npcType": "1",
        "armType": "3",
        "npcId": "333",
        "npcAttr": "[23126,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "370",
        "npcType": "2",
        "armType": "1",
        "npcId": "10037",
        "npcAttr": "[185880,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "371",
        "npcType": "1",
        "armType": "2",
        "npcId": "334",
        "npcAttr": "[23343,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "372",
        "npcType": "1",
        "armType": "3",
        "npcId": "335",
        "npcAttr": "[23474,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "373",
        "npcType": "1",
        "armType": "1",
        "npcId": "336",
        "npcAttr": "[23582,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "374",
        "npcType": "1",
        "armType": "2",
        "npcId": "337",
        "npcAttr": "[23713,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "375",
        "npcType": "1",
        "armType": "3",
        "npcId": "338",
        "npcAttr": "[23822,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "376",
        "npcType": "1",
        "armType": "1",
        "npcId": "339",
        "npcAttr": "[23930,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "377",
        "npcType": "1",
        "armType": "2",
        "npcId": "340",
        "npcAttr": "[24061,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "378",
        "npcType": "1",
        "armType": "3",
        "npcId": "341",
        "npcAttr": "[24169,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "379",
        "npcType": "1",
        "armType": "1",
        "npcId": "342",
        "npcAttr": "[24300,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "380",
        "npcType": "2",
        "armType": "2",
        "npcId": "10038",
        "npcAttr": "[195264,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "381",
        "npcType": "1",
        "armType": "3",
        "npcId": "343",
        "npcAttr": "[24539,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "382",
        "npcType": "1",
        "armType": "1",
        "npcId": "344",
        "npcAttr": "[24669,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "383",
        "npcType": "1",
        "armType": "2",
        "npcId": "345",
        "npcAttr": "[24800,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "384",
        "npcType": "1",
        "armType": "3",
        "npcId": "346",
        "npcAttr": "[24930,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "385",
        "npcType": "1",
        "armType": "1",
        "npcId": "347",
        "npcAttr": "[25060,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "386",
        "npcType": "1",
        "armType": "2",
        "npcId": "348",
        "npcAttr": "[25191,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "387",
        "npcType": "1",
        "armType": "3",
        "npcId": "349",
        "npcAttr": "[25321,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "388",
        "npcType": "1",
        "armType": "1",
        "npcId": "350",
        "npcAttr": "[25452,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "389",
        "npcType": "1",
        "armType": "2",
        "npcId": "351",
        "npcAttr": "[25582,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "390",
        "npcType": "2",
        "armType": "3",
        "npcId": "10039",
        "npcAttr": "[205704,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "391",
        "npcType": "1",
        "armType": "1",
        "npcId": "352",
        "npcAttr": "[25843,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "392",
        "npcType": "1",
        "armType": "2",
        "npcId": "353",
        "npcAttr": "[25973,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "393",
        "npcType": "1",
        "armType": "3",
        "npcId": "354",
        "npcAttr": "[26104,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "394",
        "npcType": "1",
        "armType": "1",
        "npcId": "355",
        "npcAttr": "[26234,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "395",
        "npcType": "1",
        "armType": "2",
        "npcId": "356",
        "npcAttr": "[26365,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "396",
        "npcType": "1",
        "armType": "3",
        "npcId": "357",
        "npcAttr": "[26495,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "397",
        "npcType": "1",
        "armType": "1",
        "npcId": "358",
        "npcAttr": "[26625,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "398",
        "npcType": "1",
        "armType": "2",
        "npcId": "359",
        "npcAttr": "[26756,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "399",
        "npcType": "1",
        "armType": "3",
        "npcId": "360",
        "npcAttr": "[26886,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "400",
        "npcType": "2",
        "armType": "1",
        "npcId": "10040",
        "npcAttr": "[216304,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "401",
        "npcType": "1",
        "armType": "2",
        "npcId": "361",
        "npcAttr": "[27169,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "402",
        "npcType": "1",
        "armType": "3",
        "npcId": "362",
        "npcAttr": "[27299,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "403",
        "npcType": "1",
        "armType": "1",
        "npcId": "363",
        "npcAttr": "[27430,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "404",
        "npcType": "1",
        "armType": "2",
        "npcId": "364",
        "npcAttr": "[27560,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "405",
        "npcType": "1",
        "armType": "3",
        "npcId": "365",
        "npcAttr": "[27690,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "406",
        "npcType": "1",
        "armType": "1",
        "npcId": "366",
        "npcAttr": "[27821,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "407",
        "npcType": "1",
        "armType": "2",
        "npcId": "367",
        "npcAttr": "[27951,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "408",
        "npcType": "1",
        "armType": "3",
        "npcId": "368",
        "npcAttr": "[28082,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "409",
        "npcType": "1",
        "armType": "1",
        "npcId": "369",
        "npcAttr": "[28212,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "410",
        "npcType": "2",
        "armType": "2",
        "npcId": "10041",
        "npcAttr": "[226736,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "411",
        "npcType": "1",
        "armType": "3",
        "npcId": "370",
        "npcAttr": "[28473,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "412",
        "npcType": "1",
        "armType": "1",
        "npcId": "371",
        "npcAttr": "[28603,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "413",
        "npcType": "1",
        "armType": "2",
        "npcId": "372",
        "npcAttr": "[28734,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "414",
        "npcType": "1",
        "armType": "3",
        "npcId": "373",
        "npcAttr": "[28864,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "415",
        "npcType": "1",
        "armType": "1",
        "npcId": "374",
        "npcAttr": "[28994,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "416",
        "npcType": "1",
        "armType": "2",
        "npcId": "375",
        "npcAttr": "[29125,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "417",
        "npcType": "1",
        "armType": "3",
        "npcId": "376",
        "npcAttr": "[29255,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "418",
        "npcType": "1",
        "armType": "1",
        "npcId": "377",
        "npcAttr": "[29386,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "419",
        "npcType": "1",
        "armType": "2",
        "npcId": "378",
        "npcAttr": "[29516,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "420",
        "npcType": "2",
        "armType": "3",
        "npcId": "10042",
        "npcAttr": "[237176,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "421",
        "npcType": "1",
        "armType": "1",
        "npcId": "379",
        "npcAttr": "[29799,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "422",
        "npcType": "1",
        "armType": "2",
        "npcId": "380",
        "npcAttr": "[29929,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "423",
        "npcType": "1",
        "armType": "3",
        "npcId": "381",
        "npcAttr": "[30081,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "424",
        "npcType": "1",
        "armType": "1",
        "npcId": "382",
        "npcAttr": "[30233,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "425",
        "npcType": "1",
        "armType": "2",
        "npcId": "383",
        "npcAttr": "[30364,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "426",
        "npcType": "1",
        "armType": "3",
        "npcId": "384",
        "npcAttr": "[30516,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "427",
        "npcType": "1",
        "armType": "1",
        "npcId": "385",
        "npcAttr": "[30668,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "428",
        "npcType": "1",
        "armType": "2",
        "npcId": "386",
        "npcAttr": "[30798,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "429",
        "npcType": "1",
        "armType": "3",
        "npcId": "387",
        "npcAttr": "[30951,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "430",
        "npcType": "2",
        "armType": "1",
        "npcId": "10043",
        "npcAttr": "[248824,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "431",
        "npcType": "1",
        "armType": "2",
        "npcId": "388",
        "npcAttr": "[31233,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "432",
        "npcType": "1",
        "armType": "3",
        "npcId": "389",
        "npcAttr": "[31385,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "433",
        "npcType": "1",
        "armType": "1",
        "npcId": "390",
        "npcAttr": "[31516,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "434",
        "npcType": "1",
        "armType": "2",
        "npcId": "391",
        "npcAttr": "[31668,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "435",
        "npcType": "1",
        "armType": "3",
        "npcId": "392",
        "npcAttr": "[31820,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "436",
        "npcType": "1",
        "armType": "1",
        "npcId": "393",
        "npcAttr": "[31950,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "437",
        "npcType": "1",
        "armType": "2",
        "npcId": "394",
        "npcAttr": "[32103,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "438",
        "npcType": "1",
        "armType": "3",
        "npcId": "395",
        "npcAttr": "[32255,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "439",
        "npcType": "1",
        "armType": "1",
        "npcId": "396",
        "npcAttr": "[32385,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "440",
        "npcType": "2",
        "armType": "2",
        "npcId": "10044",
        "npcAttr": "[260296,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "441",
        "npcType": "1",
        "armType": "3",
        "npcId": "397",
        "npcAttr": "[32689,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "442",
        "npcType": "1",
        "armType": "1",
        "npcId": "398",
        "npcAttr": "[32820,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "443",
        "npcType": "1",
        "armType": "2",
        "npcId": "399",
        "npcAttr": "[32972,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "444",
        "npcType": "1",
        "armType": "3",
        "npcId": "400",
        "npcAttr": "[33124,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "445",
        "npcType": "1",
        "armType": "1",
        "npcId": "401",
        "npcAttr": "[33255,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "446",
        "npcType": "1",
        "armType": "2",
        "npcId": "402",
        "npcAttr": "[33407,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "447",
        "npcType": "1",
        "armType": "3",
        "npcId": "403",
        "npcAttr": "[33559,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "448",
        "npcType": "1",
        "armType": "1",
        "npcId": "404",
        "npcAttr": "[33689,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "449",
        "npcType": "1",
        "armType": "2",
        "npcId": "405",
        "npcAttr": "[33841,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "450",
        "npcType": "2",
        "armType": "3",
        "npcId": "10045",
        "npcAttr": "[271952,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "451",
        "npcType": "1",
        "armType": "1",
        "npcId": "406",
        "npcAttr": "[34124,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "452",
        "npcType": "1",
        "armType": "2",
        "npcId": "407",
        "npcAttr": "[34276,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "453",
        "npcType": "1",
        "armType": "3",
        "npcId": "408",
        "npcAttr": "[34407,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "454",
        "npcType": "1",
        "armType": "1",
        "npcId": "409",
        "npcAttr": "[34559,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "455",
        "npcType": "1",
        "armType": "2",
        "npcId": "410",
        "npcAttr": "[34711,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "456",
        "npcType": "1",
        "armType": "3",
        "npcId": "411",
        "npcAttr": "[34841,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "457",
        "npcType": "1",
        "armType": "1",
        "npcId": "412",
        "npcAttr": "[34993,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "458",
        "npcType": "1",
        "armType": "2",
        "npcId": "413",
        "npcAttr": "[35145,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "459",
        "npcType": "1",
        "armType": "3",
        "npcId": "414",
        "npcAttr": "[35276,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "460",
        "npcType": "2",
        "armType": "1",
        "npcId": "10046",
        "npcAttr": "[283424,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "461",
        "npcType": "1",
        "armType": "2",
        "npcId": "415",
        "npcAttr": "[35580,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "462",
        "npcType": "1",
        "armType": "3",
        "npcId": "416",
        "npcAttr": "[35754,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "463",
        "npcType": "1",
        "armType": "1",
        "npcId": "417",
        "npcAttr": "[35906,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "464",
        "npcType": "1",
        "armType": "2",
        "npcId": "418",
        "npcAttr": "[36058,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "465",
        "npcType": "1",
        "armType": "3",
        "npcId": "419",
        "npcAttr": "[36232,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "466",
        "npcType": "1",
        "armType": "1",
        "npcId": "420",
        "npcAttr": "[36384,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "467",
        "npcType": "1",
        "armType": "2",
        "npcId": "421",
        "npcAttr": "[36537,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "468",
        "npcType": "1",
        "armType": "3",
        "npcId": "422",
        "npcAttr": "[36710,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "469",
        "npcType": "1",
        "armType": "1",
        "npcId": "423",
        "npcAttr": "[36863,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "470",
        "npcType": "2",
        "armType": "2",
        "npcId": "10047",
        "npcAttr": "[296120,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "471",
        "npcType": "1",
        "armType": "3",
        "npcId": "424",
        "npcAttr": "[37189,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "472",
        "npcType": "1",
        "armType": "1",
        "npcId": "425",
        "npcAttr": "[37341,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "473",
        "npcType": "1",
        "armType": "2",
        "npcId": "426",
        "npcAttr": "[37493,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "474",
        "npcType": "1",
        "armType": "3",
        "npcId": "427",
        "npcAttr": "[37667,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "475",
        "npcType": "1",
        "armType": "1",
        "npcId": "428",
        "npcAttr": "[37819,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "476",
        "npcType": "1",
        "armType": "2",
        "npcId": "429",
        "npcAttr": "[37971,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "477",
        "npcType": "1",
        "armType": "3",
        "npcId": "430",
        "npcAttr": "[38145,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "478",
        "npcType": "1",
        "armType": "1",
        "npcId": "431",
        "npcAttr": "[38297,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "479",
        "npcType": "1",
        "armType": "2",
        "npcId": "432",
        "npcAttr": "[38449,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "480",
        "npcType": "2",
        "armType": "3",
        "npcId": "10048",
        "npcAttr": "[308984,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "481",
        "npcType": "1",
        "armType": "1",
        "npcId": "433",
        "npcAttr": "[38775,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "482",
        "npcType": "1",
        "armType": "2",
        "npcId": "434",
        "npcAttr": "[38927,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "483",
        "npcType": "1",
        "armType": "3",
        "npcId": "435",
        "npcAttr": "[39080,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "484",
        "npcType": "1",
        "armType": "1",
        "npcId": "436",
        "npcAttr": "[39253,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "485",
        "npcType": "1",
        "armType": "2",
        "npcId": "437",
        "npcAttr": "[39406,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "486",
        "npcType": "1",
        "armType": "3",
        "npcId": "438",
        "npcAttr": "[39558,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "487",
        "npcType": "1",
        "armType": "1",
        "npcId": "439",
        "npcAttr": "[39732,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "488",
        "npcType": "1",
        "armType": "2",
        "npcId": "440",
        "npcAttr": "[39884,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "489",
        "npcType": "1",
        "armType": "3",
        "npcId": "441",
        "npcAttr": "[40036,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "490",
        "npcType": "2",
        "armType": "1",
        "npcId": "10049",
        "npcAttr": "[321680,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "491",
        "npcType": "1",
        "armType": "2",
        "npcId": "442",
        "npcAttr": "[40362,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "492",
        "npcType": "1",
        "armType": "3",
        "npcId": "443",
        "npcAttr": "[40514,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "493",
        "npcType": "1",
        "armType": "1",
        "npcId": "444",
        "npcAttr": "[40688,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "494",
        "npcType": "1",
        "armType": "2",
        "npcId": "445",
        "npcAttr": "[40840,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "495",
        "npcType": "1",
        "armType": "3",
        "npcId": "446",
        "npcAttr": "[40992,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "496",
        "npcType": "1",
        "armType": "1",
        "npcId": "447",
        "npcAttr": "[41166,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "497",
        "npcType": "1",
        "armType": "2",
        "npcId": "448",
        "npcAttr": "[41318,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "498",
        "npcType": "1",
        "armType": "3",
        "npcId": "449",
        "npcAttr": "[41470,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "499",
        "npcType": "1",
        "armType": "1",
        "npcId": "450",
        "npcAttr": "[41644,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "500",
        "npcType": "2",
        "armType": "2",
        "npcId": "10050",
        "npcAttr": "[334368,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "501",
        "npcType": "1",
        "armType": "3",
        "npcId": "451",
        "npcAttr": "[41970,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "502",
        "npcType": "1",
        "armType": "1",
        "npcId": "452",
        "npcAttr": "[42144,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "503",
        "npcType": "1",
        "armType": "2",
        "npcId": "453",
        "npcAttr": "[42318,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "504",
        "npcType": "1",
        "armType": "3",
        "npcId": "454",
        "npcAttr": "[42492,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "505",
        "npcType": "1",
        "armType": "1",
        "npcId": "455",
        "npcAttr": "[42666,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "506",
        "npcType": "1",
        "armType": "2",
        "npcId": "456",
        "npcAttr": "[42840,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "507",
        "npcType": "1",
        "armType": "3",
        "npcId": "457",
        "npcAttr": "[43014,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "508",
        "npcType": "1",
        "armType": "1",
        "npcId": "458",
        "npcAttr": "[43187,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "509",
        "npcType": "1",
        "armType": "2",
        "npcId": "459",
        "npcAttr": "[43361,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "510",
        "npcType": "2",
        "armType": "3",
        "npcId": "10051",
        "npcAttr": "[348280,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "511",
        "npcType": "1",
        "armType": "1",
        "npcId": "460",
        "npcAttr": "[43687,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "512",
        "npcType": "1",
        "armType": "2",
        "npcId": "461",
        "npcAttr": "[43861,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "513",
        "npcType": "1",
        "armType": "3",
        "npcId": "462",
        "npcAttr": "[44035,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "514",
        "npcType": "1",
        "armType": "1",
        "npcId": "463",
        "npcAttr": "[44209,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "515",
        "npcType": "1",
        "armType": "2",
        "npcId": "464",
        "npcAttr": "[44383,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "516",
        "npcType": "1",
        "armType": "3",
        "npcId": "465",
        "npcAttr": "[44557,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "517",
        "npcType": "1",
        "armType": "1",
        "npcId": "466",
        "npcAttr": "[44731,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "518",
        "npcType": "1",
        "armType": "2",
        "npcId": "467",
        "npcAttr": "[44905,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "519",
        "npcType": "1",
        "armType": "3",
        "npcId": "468",
        "npcAttr": "[45078,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "520",
        "npcType": "2",
        "armType": "1",
        "npcId": "10052",
        "npcAttr": "[362016,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "521",
        "npcType": "1",
        "armType": "2",
        "npcId": "469",
        "npcAttr": "[45426,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "522",
        "npcType": "1",
        "armType": "3",
        "npcId": "470",
        "npcAttr": "[45600,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "523",
        "npcType": "1",
        "armType": "1",
        "npcId": "471",
        "npcAttr": "[45774,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "524",
        "npcType": "1",
        "armType": "2",
        "npcId": "472",
        "npcAttr": "[45948,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "525",
        "npcType": "1",
        "armType": "3",
        "npcId": "473",
        "npcAttr": "[46122,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "526",
        "npcType": "1",
        "armType": "1",
        "npcId": "474",
        "npcAttr": "[46296,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "527",
        "npcType": "1",
        "armType": "2",
        "npcId": "475",
        "npcAttr": "[46469,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "528",
        "npcType": "1",
        "armType": "3",
        "npcId": "476",
        "npcAttr": "[46643,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "529",
        "npcType": "1",
        "armType": "1",
        "npcId": "477",
        "npcAttr": "[46817,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "530",
        "npcType": "2",
        "armType": "2",
        "npcId": "10053",
        "npcAttr": "[375928,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "531",
        "npcType": "1",
        "armType": "3",
        "npcId": "478",
        "npcAttr": "[47143,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "532",
        "npcType": "1",
        "armType": "1",
        "npcId": "479",
        "npcAttr": "[47317,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "533",
        "npcType": "1",
        "armType": "2",
        "npcId": "480",
        "npcAttr": "[47491,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "534",
        "npcType": "1",
        "armType": "3",
        "npcId": "481",
        "npcAttr": "[47665,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "535",
        "npcType": "1",
        "armType": "1",
        "npcId": "482",
        "npcAttr": "[47839,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "536",
        "npcType": "1",
        "armType": "2",
        "npcId": "483",
        "npcAttr": "[48013,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "537",
        "npcType": "1",
        "armType": "3",
        "npcId": "484",
        "npcAttr": "[48186,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "538",
        "npcType": "1",
        "armType": "1",
        "npcId": "485",
        "npcAttr": "[48360,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "539",
        "npcType": "1",
        "armType": "2",
        "npcId": "486",
        "npcAttr": "[48534,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "540",
        "npcType": "2",
        "armType": "3",
        "npcId": "10054",
        "npcAttr": "[389664,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "541",
        "npcType": "1",
        "armType": "1",
        "npcId": "487",
        "npcAttr": "[48904,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "542",
        "npcType": "1",
        "armType": "2",
        "npcId": "488",
        "npcAttr": "[49078,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "543",
        "npcType": "1",
        "armType": "3",
        "npcId": "489",
        "npcAttr": "[49273,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "544",
        "npcType": "1",
        "armType": "1",
        "npcId": "490",
        "npcAttr": "[49469,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "545",
        "npcType": "1",
        "armType": "2",
        "npcId": "491",
        "npcAttr": "[49643,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "546",
        "npcType": "1",
        "armType": "3",
        "npcId": "492",
        "npcAttr": "[49838,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "547",
        "npcType": "1",
        "armType": "1",
        "npcId": "493",
        "npcAttr": "[50012,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "548",
        "npcType": "1",
        "armType": "2",
        "npcId": "494",
        "npcAttr": "[50208,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "549",
        "npcType": "1",
        "armType": "3",
        "npcId": "495",
        "npcAttr": "[50403,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "550",
        "npcType": "2",
        "armType": "1",
        "npcId": "10055",
        "npcAttr": "[404616,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "551",
        "npcType": "1",
        "armType": "2",
        "npcId": "496",
        "npcAttr": "[50773,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "552",
        "npcType": "1",
        "armType": "3",
        "npcId": "497",
        "npcAttr": "[50969,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "553",
        "npcType": "1",
        "armType": "1",
        "npcId": "498",
        "npcAttr": "[51142,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "554",
        "npcType": "1",
        "armType": "2",
        "npcId": "499",
        "npcAttr": "[51338,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "555",
        "npcType": "1",
        "armType": "3",
        "npcId": "500",
        "npcAttr": "[51512,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "556",
        "npcType": "1",
        "armType": "1",
        "npcId": "501",
        "npcAttr": "[51708,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "557",
        "npcType": "1",
        "armType": "2",
        "npcId": "502",
        "npcAttr": "[51903,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "558",
        "npcType": "1",
        "armType": "3",
        "npcId": "503",
        "npcAttr": "[52077,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "559",
        "npcType": "1",
        "armType": "1",
        "npcId": "504",
        "npcAttr": "[52273,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "560",
        "npcType": "2",
        "armType": "2",
        "npcId": "10056",
        "npcAttr": "[419744,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "561",
        "npcType": "1",
        "armType": "3",
        "npcId": "505",
        "npcAttr": "[52642,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "562",
        "npcType": "1",
        "armType": "1",
        "npcId": "506",
        "npcAttr": "[52838,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "563",
        "npcType": "1",
        "armType": "2",
        "npcId": "507",
        "npcAttr": "[53012,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "564",
        "npcType": "1",
        "armType": "3",
        "npcId": "508",
        "npcAttr": "[53207,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "565",
        "npcType": "1",
        "armType": "1",
        "npcId": "509",
        "npcAttr": "[53403,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "566",
        "npcType": "1",
        "armType": "2",
        "npcId": "510",
        "npcAttr": "[53577,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "567",
        "npcType": "1",
        "armType": "3",
        "npcId": "511",
        "npcAttr": "[53772,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "568",
        "npcType": "1",
        "armType": "1",
        "npcId": "512",
        "npcAttr": "[53968,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "569",
        "npcType": "1",
        "armType": "2",
        "npcId": "513",
        "npcAttr": "[54142,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "570",
        "npcType": "2",
        "armType": "3",
        "npcId": "10057",
        "npcAttr": "[434704,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "571",
        "npcType": "1",
        "armType": "1",
        "npcId": "514",
        "npcAttr": "[54511,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "572",
        "npcType": "1",
        "armType": "2",
        "npcId": "515",
        "npcAttr": "[54707,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "573",
        "npcType": "1",
        "armType": "3",
        "npcId": "516",
        "npcAttr": "[54903,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "574",
        "npcType": "1",
        "armType": "1",
        "npcId": "517",
        "npcAttr": "[55076,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "575",
        "npcType": "1",
        "armType": "2",
        "npcId": "518",
        "npcAttr": "[55272,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "576",
        "npcType": "1",
        "armType": "3",
        "npcId": "519",
        "npcAttr": "[55468,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "577",
        "npcType": "1",
        "armType": "1",
        "npcId": "520",
        "npcAttr": "[55642,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "578",
        "npcType": "1",
        "armType": "2",
        "npcId": "521",
        "npcAttr": "[55837,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "579",
        "npcType": "1",
        "armType": "3",
        "npcId": "522",
        "npcAttr": "[56011,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "580",
        "npcType": "2",
        "armType": "1",
        "npcId": "10058",
        "npcAttr": "[449656,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "581",
        "npcType": "1",
        "armType": "2",
        "npcId": "523",
        "npcAttr": "[56402,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "582",
        "npcType": "1",
        "armType": "3",
        "npcId": "524",
        "npcAttr": "[56620,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "583",
        "npcType": "1",
        "armType": "1",
        "npcId": "525",
        "npcAttr": "[56815,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "584",
        "npcType": "1",
        "armType": "2",
        "npcId": "526",
        "npcAttr": "[57011,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "585",
        "npcType": "1",
        "armType": "3",
        "npcId": "527",
        "npcAttr": "[57207,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "586",
        "npcType": "1",
        "armType": "1",
        "npcId": "528",
        "npcAttr": "[57424,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "587",
        "npcType": "1",
        "armType": "2",
        "npcId": "529",
        "npcAttr": "[57619,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "588",
        "npcType": "1",
        "armType": "3",
        "npcId": "530",
        "npcAttr": "[57815,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "589",
        "npcType": "1",
        "armType": "1",
        "npcId": "531",
        "npcAttr": "[58011,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "590",
        "npcType": "2",
        "armType": "2",
        "npcId": "10059",
        "npcAttr": "[465824,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "591",
        "npcType": "1",
        "armType": "3",
        "npcId": "532",
        "npcAttr": "[58424,50]",
        "npcRes": "gongjian2"
    },
    {
        "id": "592",
        "npcType": "1",
        "armType": "1",
        "npcId": "533",
        "npcAttr": "[58619,50]",
        "npcRes": "jianshi2"
    },
    {
        "id": "593",
        "npcType": "1",
        "armType": "2",
        "npcId": "534",
        "npcAttr": "[58837,50]",
        "npcRes": "qibing2"
    },
    {
        "id": "594",
        "npcType": "1",
        "armType": "3",
        "npcId": "535",
        "npcAttr": "[59032,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "595",
        "npcType": "1",
        "armType": "1",
        "npcId": "536",
        "npcAttr": "[59228,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "596",
        "npcType": "1",
        "armType": "2",
        "npcId": "537",
        "npcAttr": "[59423,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "597",
        "npcType": "1",
        "armType": "3",
        "npcId": "538",
        "npcAttr": "[59641,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "598",
        "npcType": "1",
        "armType": "1",
        "npcId": "539",
        "npcAttr": "[59836,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "599",
        "npcType": "1",
        "armType": "2",
        "npcId": "540",
        "npcAttr": "[60032,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "600",
        "npcType": "2",
        "armType": "3",
        "npcId": "10060",
        "npcAttr": "[481992,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "601",
        "npcType": "1",
        "armType": "1",
        "npcId": "541",
        "npcAttr": "[60445,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "602",
        "npcType": "1",
        "armType": "2",
        "npcId": "542",
        "npcAttr": "[60641,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "603",
        "npcType": "1",
        "armType": "3",
        "npcId": "543",
        "npcAttr": "[60836,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "604",
        "npcType": "1",
        "armType": "1",
        "npcId": "544",
        "npcAttr": "[61054,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "605",
        "npcType": "1",
        "armType": "2",
        "npcId": "545",
        "npcAttr": "[61249,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "606",
        "npcType": "1",
        "armType": "3",
        "npcId": "546",
        "npcAttr": "[61445,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "607",
        "npcType": "1",
        "armType": "1",
        "npcId": "547",
        "npcAttr": "[61640,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "608",
        "npcType": "1",
        "armType": "2",
        "npcId": "548",
        "npcAttr": "[61858,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "609",
        "npcType": "1",
        "armType": "3",
        "npcId": "549",
        "npcAttr": "[62053,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "610",
        "npcType": "2",
        "armType": "1",
        "npcId": "10061",
        "npcAttr": "[497992,50]",
        "npcRes": "jianshi6"
    },
    {
        "id": "611",
        "npcType": "1",
        "armType": "2",
        "npcId": "550",
        "npcAttr": "[62466,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "612",
        "npcType": "1",
        "armType": "3",
        "npcId": "551",
        "npcAttr": "[62662,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "613",
        "npcType": "1",
        "armType": "1",
        "npcId": "552",
        "npcAttr": "[62858,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "614",
        "npcType": "1",
        "armType": "2",
        "npcId": "553",
        "npcAttr": "[63053,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "615",
        "npcType": "1",
        "armType": "3",
        "npcId": "554",
        "npcAttr": "[63271,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "616",
        "npcType": "1",
        "armType": "1",
        "npcId": "555",
        "npcAttr": "[63466,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "617",
        "npcType": "1",
        "armType": "2",
        "npcId": "556",
        "npcAttr": "[63662,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "618",
        "npcType": "1",
        "armType": "3",
        "npcId": "557",
        "npcAttr": "[63857,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "619",
        "npcType": "1",
        "armType": "1",
        "npcId": "558",
        "npcAttr": "[64075,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "620",
        "npcType": "2",
        "armType": "2",
        "npcId": "10062",
        "npcAttr": "[514160,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "621",
        "npcType": "1",
        "armType": "3",
        "npcId": "559",
        "npcAttr": "[64488,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "622",
        "npcType": "1",
        "armType": "1",
        "npcId": "560",
        "npcAttr": "[64705,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "623",
        "npcType": "1",
        "armType": "2",
        "npcId": "561",
        "npcAttr": "[64922,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "624",
        "npcType": "1",
        "armType": "3",
        "npcId": "562",
        "npcAttr": "[65140,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "625",
        "npcType": "1",
        "armType": "1",
        "npcId": "563",
        "npcAttr": "[65357,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "626",
        "npcType": "1",
        "armType": "2",
        "npcId": "564",
        "npcAttr": "[65574,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "627",
        "npcType": "1",
        "armType": "3",
        "npcId": "565",
        "npcAttr": "[65792,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "628",
        "npcType": "1",
        "armType": "1",
        "npcId": "566",
        "npcAttr": "[66009,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "629",
        "npcType": "1",
        "armType": "2",
        "npcId": "567",
        "npcAttr": "[66227,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "630",
        "npcType": "2",
        "armType": "3",
        "npcId": "10063",
        "npcAttr": "[531552,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "631",
        "npcType": "1",
        "armType": "1",
        "npcId": "568",
        "npcAttr": "[66640,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "632",
        "npcType": "1",
        "armType": "2",
        "npcId": "569",
        "npcAttr": "[66857,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "633",
        "npcType": "1",
        "armType": "3",
        "npcId": "570",
        "npcAttr": "[67074,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "634",
        "npcType": "1",
        "armType": "1",
        "npcId": "571",
        "npcAttr": "[67292,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "635",
        "npcType": "1",
        "armType": "2",
        "npcId": "572",
        "npcAttr": "[67509,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "636",
        "npcType": "1",
        "armType": "3",
        "npcId": "573",
        "npcAttr": "[67726,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "637",
        "npcType": "1",
        "armType": "1",
        "npcId": "574",
        "npcAttr": "[67944,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "638",
        "npcType": "1",
        "armType": "2",
        "npcId": "575",
        "npcAttr": "[68161,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "639",
        "npcType": "1",
        "armType": "3",
        "npcId": "576",
        "npcAttr": "[68378,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "640",
        "npcType": "2",
        "armType": "1",
        "npcId": "10064",
        "npcAttr": "[548768,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "641",
        "npcType": "1",
        "armType": "2",
        "npcId": "577",
        "npcAttr": "[68813,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "642",
        "npcType": "1",
        "armType": "3",
        "npcId": "578",
        "npcAttr": "[69030,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "643",
        "npcType": "1",
        "armType": "1",
        "npcId": "579",
        "npcAttr": "[69248,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "644",
        "npcType": "1",
        "armType": "2",
        "npcId": "580",
        "npcAttr": "[69465,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "645",
        "npcType": "1",
        "armType": "3",
        "npcId": "581",
        "npcAttr": "[69682,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "646",
        "npcType": "1",
        "armType": "1",
        "npcId": "582",
        "npcAttr": "[69900,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "647",
        "npcType": "1",
        "armType": "2",
        "npcId": "583",
        "npcAttr": "[70117,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "648",
        "npcType": "1",
        "armType": "3",
        "npcId": "584",
        "npcAttr": "[70334,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "649",
        "npcType": "1",
        "armType": "1",
        "npcId": "585",
        "npcAttr": "[70552,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "650",
        "npcType": "2",
        "armType": "2",
        "npcId": "10065",
        "npcAttr": "[566152,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "651",
        "npcType": "1",
        "armType": "3",
        "npcId": "586",
        "npcAttr": "[70965,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "652",
        "npcType": "1",
        "armType": "1",
        "npcId": "587",
        "npcAttr": "[71182,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "653",
        "npcType": "1",
        "armType": "2",
        "npcId": "588",
        "npcAttr": "[71399,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "654",
        "npcType": "1",
        "armType": "3",
        "npcId": "589",
        "npcAttr": "[71617,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "655",
        "npcType": "1",
        "armType": "1",
        "npcId": "590",
        "npcAttr": "[71834,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "656",
        "npcType": "1",
        "armType": "2",
        "npcId": "591",
        "npcAttr": "[72052,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "657",
        "npcType": "1",
        "armType": "3",
        "npcId": "592",
        "npcAttr": "[72269,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "658",
        "npcType": "1",
        "armType": "1",
        "npcId": "593",
        "npcAttr": "[72486,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "659",
        "npcType": "1",
        "armType": "2",
        "npcId": "594",
        "npcAttr": "[72704,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "660",
        "npcType": "2",
        "armType": "3",
        "npcId": "10066",
        "npcAttr": "[583368,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "661",
        "npcType": "1",
        "armType": "1",
        "npcId": "595",
        "npcAttr": "[73160,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "662",
        "npcType": "1",
        "armType": "2",
        "npcId": "596",
        "npcAttr": "[73377,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "663",
        "npcType": "1",
        "armType": "3",
        "npcId": "597",
        "npcAttr": "[73616,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "664",
        "npcType": "1",
        "armType": "1",
        "npcId": "598",
        "npcAttr": "[73856,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "665",
        "npcType": "1",
        "armType": "2",
        "npcId": "599",
        "npcAttr": "[74073,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "666",
        "npcType": "1",
        "armType": "3",
        "npcId": "600",
        "npcAttr": "[74312,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "667",
        "npcType": "1",
        "armType": "1",
        "npcId": "601",
        "npcAttr": "[74529,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "668",
        "npcType": "1",
        "armType": "2",
        "npcId": "602",
        "npcAttr": "[74768,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "669",
        "npcType": "1",
        "armType": "3",
        "npcId": "603",
        "npcAttr": "[75007,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "670",
        "npcType": "2",
        "armType": "1",
        "npcId": "10067",
        "npcAttr": "[601800,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "671",
        "npcType": "1",
        "armType": "2",
        "npcId": "604",
        "npcAttr": "[75464,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "672",
        "npcType": "1",
        "armType": "3",
        "npcId": "605",
        "npcAttr": "[75703,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "673",
        "npcType": "1",
        "armType": "1",
        "npcId": "606",
        "npcAttr": "[75920,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "674",
        "npcType": "1",
        "armType": "2",
        "npcId": "607",
        "npcAttr": "[76159,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "675",
        "npcType": "1",
        "armType": "3",
        "npcId": "608",
        "npcAttr": "[76377,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "676",
        "npcType": "1",
        "armType": "1",
        "npcId": "609",
        "npcAttr": "[76616,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "677",
        "npcType": "1",
        "armType": "2",
        "npcId": "610",
        "npcAttr": "[76855,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "678",
        "npcType": "1",
        "armType": "3",
        "npcId": "611",
        "npcAttr": "[77072,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "679",
        "npcType": "1",
        "armType": "1",
        "npcId": "612",
        "npcAttr": "[77311,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "680",
        "npcType": "2",
        "armType": "2",
        "npcId": "10068",
        "npcAttr": "[620400,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "681",
        "npcType": "1",
        "armType": "3",
        "npcId": "613",
        "npcAttr": "[77768,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "682",
        "npcType": "1",
        "armType": "1",
        "npcId": "614",
        "npcAttr": "[78007,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "683",
        "npcType": "1",
        "armType": "2",
        "npcId": "615",
        "npcAttr": "[78224,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "684",
        "npcType": "1",
        "armType": "3",
        "npcId": "616",
        "npcAttr": "[78463,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "685",
        "npcType": "1",
        "armType": "1",
        "npcId": "617",
        "npcAttr": "[78702,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "686",
        "npcType": "1",
        "armType": "2",
        "npcId": "618",
        "npcAttr": "[78920,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "687",
        "npcType": "1",
        "armType": "3",
        "npcId": "619",
        "npcAttr": "[79159,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "688",
        "npcType": "1",
        "armType": "1",
        "npcId": "620",
        "npcAttr": "[79398,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "689",
        "npcType": "1",
        "armType": "2",
        "npcId": "621",
        "npcAttr": "[79615,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "690",
        "npcType": "2",
        "armType": "3",
        "npcId": "10069",
        "npcAttr": "[638832,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "691",
        "npcType": "1",
        "armType": "1",
        "npcId": "622",
        "npcAttr": "[80072,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "692",
        "npcType": "1",
        "armType": "2",
        "npcId": "623",
        "npcAttr": "[80311,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "693",
        "npcType": "1",
        "armType": "3",
        "npcId": "624",
        "npcAttr": "[80550,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "694",
        "npcType": "1",
        "armType": "1",
        "npcId": "625",
        "npcAttr": "[80767,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "695",
        "npcType": "1",
        "armType": "2",
        "npcId": "626",
        "npcAttr": "[81006,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "696",
        "npcType": "1",
        "armType": "3",
        "npcId": "627",
        "npcAttr": "[81245,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "697",
        "npcType": "1",
        "armType": "1",
        "npcId": "628",
        "npcAttr": "[81463,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "698",
        "npcType": "1",
        "armType": "2",
        "npcId": "629",
        "npcAttr": "[81702,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "699",
        "npcType": "1",
        "armType": "3",
        "npcId": "630",
        "npcAttr": "[81919,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "700",
        "npcType": "2",
        "armType": "1",
        "npcId": "10070",
        "npcAttr": "[657264,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "701",
        "npcType": "1",
        "armType": "2",
        "npcId": "631",
        "npcAttr": "[82397,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "702",
        "npcType": "1",
        "armType": "3",
        "npcId": "632",
        "npcAttr": "[82658,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "703",
        "npcType": "1",
        "armType": "1",
        "npcId": "633",
        "npcAttr": "[82897,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "704",
        "npcType": "1",
        "armType": "2",
        "npcId": "634",
        "npcAttr": "[83136,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "705",
        "npcType": "1",
        "armType": "3",
        "npcId": "635",
        "npcAttr": "[83375,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "706",
        "npcType": "1",
        "armType": "1",
        "npcId": "636",
        "npcAttr": "[83636,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "707",
        "npcType": "1",
        "armType": "2",
        "npcId": "637",
        "npcAttr": "[83875,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "708",
        "npcType": "1",
        "armType": "3",
        "npcId": "638",
        "npcAttr": "[84114,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "709",
        "npcType": "1",
        "armType": "1",
        "npcId": "639",
        "npcAttr": "[84354,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "710",
        "npcType": "2",
        "armType": "2",
        "npcId": "10071",
        "npcAttr": "[676912,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "711",
        "npcType": "1",
        "armType": "3",
        "npcId": "640",
        "npcAttr": "[84853,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "712",
        "npcType": "1",
        "armType": "1",
        "npcId": "641",
        "npcAttr": "[85093,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "713",
        "npcType": "1",
        "armType": "2",
        "npcId": "642",
        "npcAttr": "[85353,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "714",
        "npcType": "1",
        "armType": "3",
        "npcId": "643",
        "npcAttr": "[85592,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "715",
        "npcType": "1",
        "armType": "1",
        "npcId": "644",
        "npcAttr": "[85832,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "716",
        "npcType": "1",
        "armType": "2",
        "npcId": "645",
        "npcAttr": "[86071,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "717",
        "npcType": "1",
        "armType": "3",
        "npcId": "646",
        "npcAttr": "[86331,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "718",
        "npcType": "1",
        "armType": "1",
        "npcId": "647",
        "npcAttr": "[86571,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "719",
        "npcType": "1",
        "armType": "2",
        "npcId": "648",
        "npcAttr": "[86810,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "720",
        "npcType": "2",
        "armType": "3",
        "npcId": "10072",
        "npcAttr": "[696560,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "721",
        "npcType": "1",
        "armType": "1",
        "npcId": "649",
        "npcAttr": "[87309,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "722",
        "npcType": "1",
        "armType": "2",
        "npcId": "650",
        "npcAttr": "[87549,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "723",
        "npcType": "1",
        "armType": "3",
        "npcId": "651",
        "npcAttr": "[87788,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "724",
        "npcType": "1",
        "armType": "1",
        "npcId": "652",
        "npcAttr": "[88048,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "725",
        "npcType": "1",
        "armType": "2",
        "npcId": "653",
        "npcAttr": "[88288,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "726",
        "npcType": "1",
        "armType": "3",
        "npcId": "654",
        "npcAttr": "[88527,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "727",
        "npcType": "1",
        "armType": "1",
        "npcId": "655",
        "npcAttr": "[88766,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "728",
        "npcType": "1",
        "armType": "2",
        "npcId": "656",
        "npcAttr": "[89027,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "729",
        "npcType": "1",
        "armType": "3",
        "npcId": "657",
        "npcAttr": "[89266,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "730",
        "npcType": "2",
        "armType": "1",
        "npcId": "10073",
        "npcAttr": "[716040,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "731",
        "npcType": "1",
        "armType": "2",
        "npcId": "658",
        "npcAttr": "[89766,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "732",
        "npcType": "1",
        "armType": "3",
        "npcId": "659",
        "npcAttr": "[90005,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "733",
        "npcType": "1",
        "armType": "1",
        "npcId": "660",
        "npcAttr": "[90244,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "734",
        "npcType": "1",
        "armType": "2",
        "npcId": "661",
        "npcAttr": "[90483,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "735",
        "npcType": "1",
        "armType": "3",
        "npcId": "662",
        "npcAttr": "[90744,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "736",
        "npcType": "1",
        "armType": "1",
        "npcId": "663",
        "npcAttr": "[90983,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "737",
        "npcType": "1",
        "armType": "2",
        "npcId": "664",
        "npcAttr": "[91222,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "738",
        "npcType": "1",
        "armType": "3",
        "npcId": "665",
        "npcAttr": "[91461,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "739",
        "npcType": "1",
        "armType": "1",
        "npcId": "666",
        "npcAttr": "[91722,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "740",
        "npcType": "2",
        "armType": "2",
        "npcId": "10074",
        "npcAttr": "[735688,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "741",
        "npcType": "1",
        "armType": "3",
        "npcId": "667",
        "npcAttr": "[92222,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "742",
        "npcType": "1",
        "armType": "1",
        "npcId": "668",
        "npcAttr": "[92482,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "743",
        "npcType": "1",
        "armType": "2",
        "npcId": "669",
        "npcAttr": "[92743,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "744",
        "npcType": "1",
        "armType": "3",
        "npcId": "670",
        "npcAttr": "[93004,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "745",
        "npcType": "1",
        "armType": "1",
        "npcId": "671",
        "npcAttr": "[93265,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "746",
        "npcType": "1",
        "armType": "2",
        "npcId": "672",
        "npcAttr": "[93526,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "747",
        "npcType": "1",
        "armType": "3",
        "npcId": "673",
        "npcAttr": "[93787,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "748",
        "npcType": "1",
        "armType": "1",
        "npcId": "674",
        "npcAttr": "[94047,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "749",
        "npcType": "1",
        "armType": "2",
        "npcId": "675",
        "npcAttr": "[94308,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "750",
        "npcType": "2",
        "armType": "3",
        "npcId": "10075",
        "npcAttr": "[756552,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "751",
        "npcType": "1",
        "armType": "1",
        "npcId": "676",
        "npcAttr": "[94830,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "752",
        "npcType": "1",
        "armType": "2",
        "npcId": "677",
        "npcAttr": "[95091,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "753",
        "npcType": "1",
        "armType": "3",
        "npcId": "678",
        "npcAttr": "[95351,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "754",
        "npcType": "1",
        "armType": "1",
        "npcId": "679",
        "npcAttr": "[95612,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "755",
        "npcType": "1",
        "armType": "2",
        "npcId": "680",
        "npcAttr": "[95873,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "756",
        "npcType": "1",
        "armType": "3",
        "npcId": "681",
        "npcAttr": "[96134,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "757",
        "npcType": "1",
        "armType": "1",
        "npcId": "682",
        "npcAttr": "[96395,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "758",
        "npcType": "1",
        "armType": "2",
        "npcId": "683",
        "npcAttr": "[96656,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "759",
        "npcType": "1",
        "armType": "3",
        "npcId": "684",
        "npcAttr": "[96916,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "760",
        "npcType": "2",
        "armType": "1",
        "npcId": "10076",
        "npcAttr": "[777416,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "761",
        "npcType": "1",
        "armType": "2",
        "npcId": "685",
        "npcAttr": "[97416,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "762",
        "npcType": "1",
        "armType": "3",
        "npcId": "686",
        "npcAttr": "[97677,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "763",
        "npcType": "1",
        "armType": "1",
        "npcId": "687",
        "npcAttr": "[97938,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "764",
        "npcType": "1",
        "armType": "2",
        "npcId": "688",
        "npcAttr": "[98199,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "765",
        "npcType": "1",
        "armType": "3",
        "npcId": "689",
        "npcAttr": "[98460,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "766",
        "npcType": "1",
        "armType": "1",
        "npcId": "690",
        "npcAttr": "[98720,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "767",
        "npcType": "1",
        "armType": "2",
        "npcId": "691",
        "npcAttr": "[98981,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "768",
        "npcType": "1",
        "armType": "3",
        "npcId": "692",
        "npcAttr": "[99242,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "769",
        "npcType": "1",
        "armType": "1",
        "npcId": "693",
        "npcAttr": "[99503,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "770",
        "npcType": "2",
        "armType": "2",
        "npcId": "10077",
        "npcAttr": "[798112,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "771",
        "npcType": "1",
        "armType": "3",
        "npcId": "694",
        "npcAttr": "[100024,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "772",
        "npcType": "1",
        "armType": "1",
        "npcId": "695",
        "npcAttr": "[100285,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "773",
        "npcType": "1",
        "armType": "2",
        "npcId": "696",
        "npcAttr": "[100546,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "774",
        "npcType": "1",
        "armType": "3",
        "npcId": "697",
        "npcAttr": "[100807,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "775",
        "npcType": "1",
        "armType": "1",
        "npcId": "698",
        "npcAttr": "[101068,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "776",
        "npcType": "1",
        "armType": "2",
        "npcId": "699",
        "npcAttr": "[101329,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "777",
        "npcType": "1",
        "armType": "3",
        "npcId": "700",
        "npcAttr": "[101589,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "778",
        "npcType": "1",
        "armType": "1",
        "npcId": "701",
        "npcAttr": "[101850,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "779",
        "npcType": "1",
        "armType": "2",
        "npcId": "702",
        "npcAttr": "[102111,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "780",
        "npcType": "2",
        "armType": "3",
        "npcId": "10078",
        "npcAttr": "[818976,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "781",
        "npcType": "1",
        "armType": "1",
        "npcId": "703",
        "npcAttr": "[102654,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "782",
        "npcType": "1",
        "armType": "2",
        "npcId": "704",
        "npcAttr": "[102915,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "783",
        "npcType": "1",
        "armType": "3",
        "npcId": "705",
        "npcAttr": "[103198,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "784",
        "npcType": "1",
        "armType": "1",
        "npcId": "706",
        "npcAttr": "[103480,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "785",
        "npcType": "1",
        "armType": "2",
        "npcId": "707",
        "npcAttr": "[103741,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "786",
        "npcType": "1",
        "armType": "3",
        "npcId": "708",
        "npcAttr": "[104024,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "787",
        "npcType": "1",
        "armType": "1",
        "npcId": "709",
        "npcAttr": "[104306,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "788",
        "npcType": "1",
        "armType": "2",
        "npcId": "710",
        "npcAttr": "[104567,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "789",
        "npcType": "1",
        "armType": "3",
        "npcId": "711",
        "npcAttr": "[104850,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "790",
        "npcType": "2",
        "armType": "1",
        "npcId": "10079",
        "npcAttr": "[841056,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "791",
        "npcType": "1",
        "armType": "2",
        "npcId": "712",
        "npcAttr": "[105393,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "792",
        "npcType": "1",
        "armType": "3",
        "npcId": "713",
        "npcAttr": "[105676,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "793",
        "npcType": "1",
        "armType": "1",
        "npcId": "714",
        "npcAttr": "[105936,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "794",
        "npcType": "1",
        "armType": "2",
        "npcId": "715",
        "npcAttr": "[106219,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "795",
        "npcType": "1",
        "armType": "3",
        "npcId": "716",
        "npcAttr": "[106502,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "796",
        "npcType": "1",
        "armType": "1",
        "npcId": "717",
        "npcAttr": "[106762,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "797",
        "npcType": "1",
        "armType": "2",
        "npcId": "718",
        "npcAttr": "[107045,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "798",
        "npcType": "1",
        "armType": "3",
        "npcId": "719",
        "npcAttr": "[107327,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "799",
        "npcType": "1",
        "armType": "1",
        "npcId": "720",
        "npcAttr": "[107588,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "800",
        "npcType": "2",
        "armType": "2",
        "npcId": "10080",
        "npcAttr": "[862968,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "801",
        "npcType": "1",
        "armType": "3",
        "npcId": "721",
        "npcAttr": "[108153,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "802",
        "npcType": "1",
        "armType": "1",
        "npcId": "722",
        "npcAttr": "[108414,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "803",
        "npcType": "1",
        "armType": "2",
        "npcId": "723",
        "npcAttr": "[108697,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "804",
        "npcType": "1",
        "armType": "3",
        "npcId": "724",
        "npcAttr": "[108979,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "805",
        "npcType": "1",
        "armType": "1",
        "npcId": "725",
        "npcAttr": "[109240,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "806",
        "npcType": "1",
        "armType": "2",
        "npcId": "726",
        "npcAttr": "[109523,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "807",
        "npcType": "1",
        "armType": "3",
        "npcId": "727",
        "npcAttr": "[109805,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "808",
        "npcType": "1",
        "armType": "1",
        "npcId": "728",
        "npcAttr": "[110066,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "809",
        "npcType": "1",
        "armType": "2",
        "npcId": "729",
        "npcAttr": "[110349,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "810",
        "npcType": "2",
        "armType": "3",
        "npcId": "10081",
        "npcAttr": "[885048,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "811",
        "npcType": "1",
        "armType": "1",
        "npcId": "730",
        "npcAttr": "[110892,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "812",
        "npcType": "1",
        "armType": "2",
        "npcId": "731",
        "npcAttr": "[111175,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "813",
        "npcType": "1",
        "armType": "3",
        "npcId": "732",
        "npcAttr": "[111435,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "814",
        "npcType": "1",
        "armType": "1",
        "npcId": "733",
        "npcAttr": "[111718,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "815",
        "npcType": "1",
        "armType": "2",
        "npcId": "734",
        "npcAttr": "[112000,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "816",
        "npcType": "1",
        "armType": "3",
        "npcId": "735",
        "npcAttr": "[112261,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "817",
        "npcType": "1",
        "armType": "1",
        "npcId": "736",
        "npcAttr": "[112544,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "818",
        "npcType": "1",
        "armType": "2",
        "npcId": "737",
        "npcAttr": "[112826,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "819",
        "npcType": "1",
        "armType": "3",
        "npcId": "738",
        "npcAttr": "[113087,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "820",
        "npcType": "2",
        "armType": "1",
        "npcId": "10082",
        "npcAttr": "[906960,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "821",
        "npcType": "1",
        "armType": "2",
        "npcId": "739",
        "npcAttr": "[113652,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "822",
        "npcType": "1",
        "armType": "3",
        "npcId": "740",
        "npcAttr": "[113957,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "823",
        "npcType": "1",
        "armType": "1",
        "npcId": "741",
        "npcAttr": "[114239,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "824",
        "npcType": "1",
        "armType": "2",
        "npcId": "742",
        "npcAttr": "[114522,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "825",
        "npcType": "1",
        "armType": "3",
        "npcId": "743",
        "npcAttr": "[114826,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "826",
        "npcType": "1",
        "armType": "1",
        "npcId": "744",
        "npcAttr": "[115109,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "827",
        "npcType": "1",
        "armType": "2",
        "npcId": "745",
        "npcAttr": "[115391,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "828",
        "npcType": "1",
        "armType": "3",
        "npcId": "746",
        "npcAttr": "[115695,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "829",
        "npcType": "1",
        "armType": "1",
        "npcId": "747",
        "npcAttr": "[115978,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "830",
        "npcType": "2",
        "armType": "2",
        "npcId": "10083",
        "npcAttr": "[930256,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "831",
        "npcType": "1",
        "armType": "3",
        "npcId": "748",
        "npcAttr": "[116565,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "832",
        "npcType": "1",
        "armType": "1",
        "npcId": "749",
        "npcAttr": "[116847,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "833",
        "npcType": "1",
        "armType": "2",
        "npcId": "750",
        "npcAttr": "[117152,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "834",
        "npcType": "1",
        "armType": "3",
        "npcId": "751",
        "npcAttr": "[117434,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "835",
        "npcType": "1",
        "armType": "1",
        "npcId": "752",
        "npcAttr": "[117717,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "836",
        "npcType": "1",
        "armType": "2",
        "npcId": "753",
        "npcAttr": "[118021,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "837",
        "npcType": "1",
        "armType": "3",
        "npcId": "754",
        "npcAttr": "[118304,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "838",
        "npcType": "1",
        "armType": "1",
        "npcId": "755",
        "npcAttr": "[118586,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "839",
        "npcType": "1",
        "armType": "2",
        "npcId": "756",
        "npcAttr": "[118890,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "840",
        "npcType": "2",
        "armType": "3",
        "npcId": "10084",
        "npcAttr": "[953384,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "841",
        "npcType": "1",
        "armType": "1",
        "npcId": "757",
        "npcAttr": "[119456,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "842",
        "npcType": "1",
        "armType": "2",
        "npcId": "758",
        "npcAttr": "[119760,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "843",
        "npcType": "1",
        "armType": "3",
        "npcId": "759",
        "npcAttr": "[120042,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "844",
        "npcType": "1",
        "armType": "1",
        "npcId": "760",
        "npcAttr": "[120325,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "845",
        "npcType": "1",
        "armType": "2",
        "npcId": "761",
        "npcAttr": "[120629,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "846",
        "npcType": "1",
        "armType": "3",
        "npcId": "762",
        "npcAttr": "[120912,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "847",
        "npcType": "1",
        "armType": "1",
        "npcId": "763",
        "npcAttr": "[121194,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "848",
        "npcType": "1",
        "armType": "2",
        "npcId": "764",
        "npcAttr": "[121499,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "849",
        "npcType": "1",
        "armType": "3",
        "npcId": "765",
        "npcAttr": "[121781,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "850",
        "npcType": "2",
        "armType": "1",
        "npcId": "10085",
        "npcAttr": "[976680,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "851",
        "npcType": "1",
        "armType": "2",
        "npcId": "766",
        "npcAttr": "[122368,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "852",
        "npcType": "1",
        "armType": "3",
        "npcId": "767",
        "npcAttr": "[122651,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "853",
        "npcType": "1",
        "armType": "1",
        "npcId": "768",
        "npcAttr": "[122955,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "854",
        "npcType": "1",
        "armType": "2",
        "npcId": "769",
        "npcAttr": "[123237,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "855",
        "npcType": "1",
        "armType": "3",
        "npcId": "770",
        "npcAttr": "[123520,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "856",
        "npcType": "1",
        "armType": "1",
        "npcId": "771",
        "npcAttr": "[123824,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "857",
        "npcType": "1",
        "armType": "2",
        "npcId": "772",
        "npcAttr": "[124107,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "858",
        "npcType": "1",
        "armType": "3",
        "npcId": "773",
        "npcAttr": "[124389,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "859",
        "npcType": "1",
        "armType": "1",
        "npcId": "774",
        "npcAttr": "[124694,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "860",
        "npcType": "2",
        "armType": "2",
        "npcId": "10086",
        "npcAttr": "[999808,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "861",
        "npcType": "1",
        "armType": "3",
        "npcId": "775",
        "npcAttr": "[125281,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "862",
        "npcType": "1",
        "armType": "1",
        "npcId": "776",
        "npcAttr": "[125585,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "863",
        "npcType": "1",
        "armType": "2",
        "npcId": "777",
        "npcAttr": "[125889,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "864",
        "npcType": "1",
        "armType": "3",
        "npcId": "778",
        "npcAttr": "[126193,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "865",
        "npcType": "1",
        "armType": "1",
        "npcId": "779",
        "npcAttr": "[126498,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "866",
        "npcType": "1",
        "armType": "2",
        "npcId": "780",
        "npcAttr": "[126802,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "867",
        "npcType": "1",
        "armType": "3",
        "npcId": "781",
        "npcAttr": "[127106,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "868",
        "npcType": "1",
        "armType": "1",
        "npcId": "782",
        "npcAttr": "[127411,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "869",
        "npcType": "1",
        "armType": "2",
        "npcId": "783",
        "npcAttr": "[127715,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "870",
        "npcType": "2",
        "armType": "3",
        "npcId": "10087",
        "npcAttr": "[1024152,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "871",
        "npcType": "1",
        "armType": "1",
        "npcId": "784",
        "npcAttr": "[128323,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "872",
        "npcType": "1",
        "armType": "2",
        "npcId": "785",
        "npcAttr": "[128628,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "873",
        "npcType": "1",
        "armType": "3",
        "npcId": "786",
        "npcAttr": "[128932,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "874",
        "npcType": "1",
        "armType": "1",
        "npcId": "787",
        "npcAttr": "[129236,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "875",
        "npcType": "1",
        "armType": "2",
        "npcId": "788",
        "npcAttr": "[129541,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "876",
        "npcType": "1",
        "armType": "3",
        "npcId": "789",
        "npcAttr": "[129845,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "877",
        "npcType": "1",
        "armType": "1",
        "npcId": "790",
        "npcAttr": "[130149,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "878",
        "npcType": "1",
        "armType": "2",
        "npcId": "791",
        "npcAttr": "[130453,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "879",
        "npcType": "1",
        "armType": "3",
        "npcId": "792",
        "npcAttr": "[130758,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "880",
        "npcType": "2",
        "armType": "1",
        "npcId": "10088",
        "npcAttr": "[1048672,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "881",
        "npcType": "1",
        "armType": "2",
        "npcId": "793",
        "npcAttr": "[131388,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "882",
        "npcType": "1",
        "armType": "3",
        "npcId": "794",
        "npcAttr": "[131692,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "883",
        "npcType": "1",
        "armType": "1",
        "npcId": "795",
        "npcAttr": "[131997,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "884",
        "npcType": "1",
        "armType": "2",
        "npcId": "796",
        "npcAttr": "[132301,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "885",
        "npcType": "1",
        "armType": "3",
        "npcId": "797",
        "npcAttr": "[132605,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "886",
        "npcType": "1",
        "armType": "1",
        "npcId": "798",
        "npcAttr": "[132910,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "887",
        "npcType": "1",
        "armType": "2",
        "npcId": "799",
        "npcAttr": "[133214,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "888",
        "npcType": "1",
        "armType": "3",
        "npcId": "800",
        "npcAttr": "[133518,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "889",
        "npcType": "1",
        "armType": "1",
        "npcId": "801",
        "npcAttr": "[133822,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "890",
        "npcType": "2",
        "armType": "2",
        "npcId": "10089",
        "npcAttr": "[1073016,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "891",
        "npcType": "1",
        "armType": "3",
        "npcId": "802",
        "npcAttr": "[134431,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "892",
        "npcType": "1",
        "armType": "1",
        "npcId": "803",
        "npcAttr": "[134735,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "893",
        "npcType": "1",
        "armType": "2",
        "npcId": "804",
        "npcAttr": "[135040,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "894",
        "npcType": "1",
        "armType": "3",
        "npcId": "805",
        "npcAttr": "[135344,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "895",
        "npcType": "1",
        "armType": "1",
        "npcId": "806",
        "npcAttr": "[135648,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "896",
        "npcType": "1",
        "armType": "2",
        "npcId": "807",
        "npcAttr": "[135952,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "897",
        "npcType": "1",
        "armType": "3",
        "npcId": "808",
        "npcAttr": "[136257,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "898",
        "npcType": "1",
        "armType": "1",
        "npcId": "809",
        "npcAttr": "[136561,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "899",
        "npcType": "1",
        "armType": "2",
        "npcId": "810",
        "npcAttr": "[136865,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "900",
        "npcType": "2",
        "armType": "3",
        "npcId": "10090",
        "npcAttr": "[1097360,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "901",
        "npcType": "1",
        "armType": "1",
        "npcId": "811",
        "npcAttr": "[137496,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "902",
        "npcType": "1",
        "armType": "2",
        "npcId": "812",
        "npcAttr": "[137800,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "903",
        "npcType": "1",
        "armType": "3",
        "npcId": "813",
        "npcAttr": "[138126,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "904",
        "npcType": "1",
        "armType": "1",
        "npcId": "814",
        "npcAttr": "[138452,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "905",
        "npcType": "1",
        "armType": "2",
        "npcId": "815",
        "npcAttr": "[138778,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "906",
        "npcType": "1",
        "armType": "3",
        "npcId": "816",
        "npcAttr": "[139082,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "907",
        "npcType": "1",
        "armType": "1",
        "npcId": "817",
        "npcAttr": "[139408,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "908",
        "npcType": "1",
        "armType": "2",
        "npcId": "818",
        "npcAttr": "[139734,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "909",
        "npcType": "1",
        "armType": "3",
        "npcId": "819",
        "npcAttr": "[140060,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "910",
        "npcType": "2",
        "armType": "1",
        "npcId": "10091",
        "npcAttr": "[1122920,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "911",
        "npcType": "1",
        "armType": "2",
        "npcId": "820",
        "npcAttr": "[140691,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "912",
        "npcType": "1",
        "armType": "3",
        "npcId": "821",
        "npcAttr": "[141017,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "913",
        "npcType": "1",
        "armType": "1",
        "npcId": "822",
        "npcAttr": "[141321,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "914",
        "npcType": "1",
        "armType": "2",
        "npcId": "823",
        "npcAttr": "[141647,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "915",
        "npcType": "1",
        "armType": "3",
        "npcId": "824",
        "npcAttr": "[141973,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "916",
        "npcType": "1",
        "armType": "1",
        "npcId": "825",
        "npcAttr": "[142299,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "917",
        "npcType": "1",
        "armType": "2",
        "npcId": "826",
        "npcAttr": "[142603,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "918",
        "npcType": "1",
        "armType": "3",
        "npcId": "827",
        "npcAttr": "[142929,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "919",
        "npcType": "1",
        "armType": "1",
        "npcId": "828",
        "npcAttr": "[143255,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "920",
        "npcType": "2",
        "armType": "2",
        "npcId": "10092",
        "npcAttr": "[1148648,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "921",
        "npcType": "1",
        "armType": "3",
        "npcId": "829",
        "npcAttr": "[143886,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "922",
        "npcType": "1",
        "armType": "1",
        "npcId": "830",
        "npcAttr": "[144212,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "923",
        "npcType": "1",
        "armType": "2",
        "npcId": "831",
        "npcAttr": "[144538,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "924",
        "npcType": "1",
        "armType": "3",
        "npcId": "832",
        "npcAttr": "[144842,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "925",
        "npcType": "1",
        "armType": "1",
        "npcId": "833",
        "npcAttr": "[145168,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "926",
        "npcType": "1",
        "armType": "2",
        "npcId": "834",
        "npcAttr": "[145494,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "927",
        "npcType": "1",
        "armType": "3",
        "npcId": "835",
        "npcAttr": "[145820,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "928",
        "npcType": "1",
        "armType": "1",
        "npcId": "836",
        "npcAttr": "[146124,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "929",
        "npcType": "1",
        "armType": "2",
        "npcId": "837",
        "npcAttr": "[146450,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "930",
        "npcType": "2",
        "armType": "3",
        "npcId": "10093",
        "npcAttr": "[1174208,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "931",
        "npcType": "1",
        "armType": "1",
        "npcId": "838",
        "npcAttr": "[147081,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "932",
        "npcType": "1",
        "armType": "2",
        "npcId": "839",
        "npcAttr": "[147407,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "933",
        "npcType": "1",
        "armType": "3",
        "npcId": "840",
        "npcAttr": "[147733,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "934",
        "npcType": "1",
        "armType": "1",
        "npcId": "841",
        "npcAttr": "[148059,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "935",
        "npcType": "1",
        "armType": "2",
        "npcId": "842",
        "npcAttr": "[148363,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "936",
        "npcType": "1",
        "armType": "3",
        "npcId": "843",
        "npcAttr": "[148689,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "937",
        "npcType": "1",
        "armType": "1",
        "npcId": "844",
        "npcAttr": "[149015,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "938",
        "npcType": "1",
        "armType": "2",
        "npcId": "845",
        "npcAttr": "[149341,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "939",
        "npcType": "1",
        "armType": "3",
        "npcId": "846",
        "npcAttr": "[149645,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "940",
        "npcType": "2",
        "armType": "1",
        "npcId": "10094",
        "npcAttr": "[1199776,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "941",
        "npcType": "1",
        "armType": "2",
        "npcId": "847",
        "npcAttr": "[150298,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "942",
        "npcType": "1",
        "armType": "3",
        "npcId": "848",
        "npcAttr": "[150645,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "943",
        "npcType": "1",
        "armType": "1",
        "npcId": "849",
        "npcAttr": "[150971,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "944",
        "npcType": "1",
        "armType": "2",
        "npcId": "850",
        "npcAttr": "[151319,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "945",
        "npcType": "1",
        "armType": "3",
        "npcId": "851",
        "npcAttr": "[151645,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "946",
        "npcType": "1",
        "armType": "1",
        "npcId": "852",
        "npcAttr": "[151993,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "947",
        "npcType": "1",
        "armType": "2",
        "npcId": "853",
        "npcAttr": "[152319,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "948",
        "npcType": "1",
        "armType": "3",
        "npcId": "854",
        "npcAttr": "[152645,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "949",
        "npcType": "1",
        "armType": "1",
        "npcId": "855",
        "npcAttr": "[152993,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "950",
        "npcType": "2",
        "armType": "2",
        "npcId": "10095",
        "npcAttr": "[1226552,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "951",
        "npcType": "1",
        "armType": "3",
        "npcId": "856",
        "npcAttr": "[153666,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "952",
        "npcType": "1",
        "armType": "1",
        "npcId": "857",
        "npcAttr": "[153992,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "953",
        "npcType": "1",
        "armType": "2",
        "npcId": "858",
        "npcAttr": "[154340,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "954",
        "npcType": "1",
        "armType": "3",
        "npcId": "859",
        "npcAttr": "[154666,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "955",
        "npcType": "1",
        "armType": "1",
        "npcId": "860",
        "npcAttr": "[154992,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "956",
        "npcType": "1",
        "armType": "2",
        "npcId": "861",
        "npcAttr": "[155340,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "957",
        "npcType": "1",
        "armType": "3",
        "npcId": "862",
        "npcAttr": "[155666,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "958",
        "npcType": "1",
        "armType": "1",
        "npcId": "863",
        "npcAttr": "[156014,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "959",
        "npcType": "1",
        "armType": "2",
        "npcId": "864",
        "npcAttr": "[156340,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "960",
        "npcType": "2",
        "armType": "3",
        "npcId": "10096",
        "npcAttr": "[1253504,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "961",
        "npcType": "1",
        "armType": "1",
        "npcId": "865",
        "npcAttr": "[157014,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "962",
        "npcType": "1",
        "armType": "2",
        "npcId": "866",
        "npcAttr": "[157340,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "963",
        "npcType": "1",
        "armType": "3",
        "npcId": "867",
        "npcAttr": "[157687,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "964",
        "npcType": "1",
        "armType": "1",
        "npcId": "868",
        "npcAttr": "[158013,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "965",
        "npcType": "1",
        "armType": "2",
        "npcId": "869",
        "npcAttr": "[158361,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "966",
        "npcType": "1",
        "armType": "3",
        "npcId": "870",
        "npcAttr": "[158687,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "967",
        "npcType": "1",
        "armType": "1",
        "npcId": "871",
        "npcAttr": "[159013,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "968",
        "npcType": "1",
        "armType": "2",
        "npcId": "872",
        "npcAttr": "[159361,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "969",
        "npcType": "1",
        "armType": "3",
        "npcId": "873",
        "npcAttr": "[159687,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "970",
        "npcType": "2",
        "armType": "1",
        "npcId": "10097",
        "npcAttr": "[1280280,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "971",
        "npcType": "1",
        "armType": "2",
        "npcId": "874",
        "npcAttr": "[160361,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "972",
        "npcType": "1",
        "armType": "3",
        "npcId": "875",
        "npcAttr": "[160709,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "973",
        "npcType": "1",
        "armType": "1",
        "npcId": "876",
        "npcAttr": "[161035,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "974",
        "npcType": "1",
        "armType": "2",
        "npcId": "877",
        "npcAttr": "[161361,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "975",
        "npcType": "1",
        "armType": "3",
        "npcId": "878",
        "npcAttr": "[161708,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "976",
        "npcType": "1",
        "armType": "1",
        "npcId": "879",
        "npcAttr": "[162034,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "977",
        "npcType": "1",
        "armType": "2",
        "npcId": "880",
        "npcAttr": "[162382,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "978",
        "npcType": "1",
        "armType": "3",
        "npcId": "881",
        "npcAttr": "[162708,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "979",
        "npcType": "1",
        "armType": "1",
        "npcId": "882",
        "npcAttr": "[163056,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "980",
        "npcType": "2",
        "armType": "2",
        "npcId": "10098",
        "npcAttr": "[1307056,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "981",
        "npcType": "1",
        "armType": "3",
        "npcId": "883",
        "npcAttr": "[163730,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "982",
        "npcType": "1",
        "armType": "1",
        "npcId": "884",
        "npcAttr": "[164078,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "983",
        "npcType": "1",
        "armType": "2",
        "npcId": "885",
        "npcAttr": "[164425,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "984",
        "npcType": "1",
        "armType": "3",
        "npcId": "886",
        "npcAttr": "[164773,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "985",
        "npcType": "1",
        "armType": "1",
        "npcId": "887",
        "npcAttr": "[165143,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "986",
        "npcType": "1",
        "armType": "2",
        "npcId": "888",
        "npcAttr": "[165490,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "987",
        "npcType": "1",
        "armType": "3",
        "npcId": "889",
        "npcAttr": "[165838,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "988",
        "npcType": "1",
        "armType": "1",
        "npcId": "890",
        "npcAttr": "[166186,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "989",
        "npcType": "1",
        "armType": "2",
        "npcId": "891",
        "npcAttr": "[166534,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "990",
        "npcType": "2",
        "armType": "3",
        "npcId": "10099",
        "npcAttr": "[1335048,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "991",
        "npcType": "1",
        "armType": "1",
        "npcId": "892",
        "npcAttr": "[167229,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "992",
        "npcType": "1",
        "armType": "2",
        "npcId": "893",
        "npcAttr": "[167577,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "993",
        "npcType": "1",
        "armType": "3",
        "npcId": "894",
        "npcAttr": "[167925,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "994",
        "npcType": "1",
        "armType": "1",
        "npcId": "895",
        "npcAttr": "[168272,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "995",
        "npcType": "1",
        "armType": "2",
        "npcId": "896",
        "npcAttr": "[168642,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "996",
        "npcType": "1",
        "armType": "3",
        "npcId": "897",
        "npcAttr": "[168990,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "997",
        "npcType": "1",
        "armType": "1",
        "npcId": "898",
        "npcAttr": "[169337,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "998",
        "npcType": "1",
        "armType": "2",
        "npcId": "899",
        "npcAttr": "[169685,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "999",
        "npcType": "1",
        "armType": "3",
        "npcId": "900",
        "npcAttr": "[170033,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "1000",
        "npcType": "2",
        "armType": "1",
        "npcId": "10100",
        "npcAttr": "[1363048,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "1001",
        "npcType": "1",
        "armType": "2",
        "npcId": "901",
        "npcAttr": "[170728,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "1002",
        "npcType": "1",
        "armType": "3",
        "npcId": "902",
        "npcAttr": "[171076,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "1003",
        "npcType": "1",
        "armType": "1",
        "npcId": "903",
        "npcAttr": "[171424,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "1004",
        "npcType": "1",
        "armType": "2",
        "npcId": "904",
        "npcAttr": "[171772,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "1005",
        "npcType": "1",
        "armType": "3",
        "npcId": "905",
        "npcAttr": "[172141,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "1006",
        "npcType": "1",
        "armType": "1",
        "npcId": "906",
        "npcAttr": "[172489,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "1007",
        "npcType": "1",
        "armType": "2",
        "npcId": "907",
        "npcAttr": "[172837,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "1008",
        "npcType": "1",
        "armType": "3",
        "npcId": "908",
        "npcAttr": "[173184,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "1009",
        "npcType": "1",
        "armType": "1",
        "npcId": "909",
        "npcAttr": "[173532,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "1010",
        "npcType": "2",
        "armType": "2",
        "npcId": "10101",
        "npcAttr": "[1391040,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "1011",
        "npcType": "1",
        "armType": "3",
        "npcId": "910",
        "npcAttr": "[174228,50]",
        "npcRes": "gongjian3"
    },
    {
        "id": "1012",
        "npcType": "1",
        "armType": "1",
        "npcId": "911",
        "npcAttr": "[174576,50]",
        "npcRes": "jianshi3"
    },
    {
        "id": "1013",
        "npcType": "1",
        "armType": "2",
        "npcId": "912",
        "npcAttr": "[174923,50]",
        "npcRes": "qibing3"
    },
    {
        "id": "1014",
        "npcType": "1",
        "armType": "3",
        "npcId": "913",
        "npcAttr": "[175271,50]",
        "npcRes": "gongjian4"
    },
    {
        "id": "1015",
        "npcType": "1",
        "armType": "1",
        "npcId": "914",
        "npcAttr": "[175641,50]",
        "npcRes": "jianshi4"
    },
    {
        "id": "1016",
        "npcType": "1",
        "armType": "2",
        "npcId": "915",
        "npcAttr": "[175988,50]",
        "npcRes": "qibing4"
    },
    {
        "id": "1017",
        "npcType": "1",
        "armType": "3",
        "npcId": "916",
        "npcAttr": "[176336,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "1018",
        "npcType": "1",
        "armType": "1",
        "npcId": "917",
        "npcAttr": "[176684,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "1019",
        "npcType": "1",
        "armType": "2",
        "npcId": "918",
        "npcAttr": "[177032,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "1020",
        "npcType": "2",
        "armType": "3",
        "npcId": "10102",
        "npcAttr": "[1419032,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "1021",
        "npcType": "1",
        "armType": "1",
        "npcId": "919",
        "npcAttr": "[177749,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "1022",
        "npcType": "1",
        "armType": "2",
        "npcId": "920",
        "npcAttr": "[178118,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "1023",
        "npcType": "1",
        "armType": "3",
        "npcId": "921",
        "npcAttr": "[178466,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "1024",
        "npcType": "1",
        "armType": "1",
        "npcId": "922",
        "npcAttr": "[178836,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "1025",
        "npcType": "1",
        "armType": "2",
        "npcId": "923",
        "npcAttr": "[179205,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "1026",
        "npcType": "1",
        "armType": "3",
        "npcId": "924",
        "npcAttr": "[179575,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "1027",
        "npcType": "1",
        "armType": "1",
        "npcId": "925",
        "npcAttr": "[179944,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "1028",
        "npcType": "1",
        "armType": "2",
        "npcId": "926",
        "npcAttr": "[180292,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "1029",
        "npcType": "1",
        "armType": "3",
        "npcId": "927",
        "npcAttr": "[180661,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "1030",
        "npcType": "2",
        "armType": "1",
        "npcId": "10103",
        "npcAttr": "[1448248,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "1031",
        "npcType": "1",
        "armType": "2",
        "npcId": "928",
        "npcAttr": "[181400,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "1032",
        "npcType": "1",
        "armType": "3",
        "npcId": "929",
        "npcAttr": "[181770,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "1033",
        "npcType": "1",
        "armType": "1",
        "npcId": "930",
        "npcAttr": "[182118,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "1034",
        "npcType": "1",
        "armType": "2",
        "npcId": "931",
        "npcAttr": "[182487,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "1035",
        "npcType": "1",
        "armType": "3",
        "npcId": "932",
        "npcAttr": "[182857,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "1036",
        "npcType": "1",
        "armType": "1",
        "npcId": "933",
        "npcAttr": "[183226,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "1037",
        "npcType": "1",
        "armType": "2",
        "npcId": "934",
        "npcAttr": "[183596,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "1038",
        "npcType": "1",
        "armType": "3",
        "npcId": "935",
        "npcAttr": "[183943,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "1039",
        "npcType": "1",
        "armType": "1",
        "npcId": "936",
        "npcAttr": "[184313,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "1040",
        "npcType": "2",
        "armType": "2",
        "npcId": "10104",
        "npcAttr": "[1477456,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "1041",
        "npcType": "1",
        "armType": "3",
        "npcId": "937",
        "npcAttr": "[185052,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "1042",
        "npcType": "1",
        "armType": "1",
        "npcId": "938",
        "npcAttr": "[185421,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "1043",
        "npcType": "1",
        "armType": "2",
        "npcId": "939",
        "npcAttr": "[185769,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "1044",
        "npcType": "1",
        "armType": "3",
        "npcId": "940",
        "npcAttr": "[186139,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "1045",
        "npcType": "1",
        "armType": "1",
        "npcId": "941",
        "npcAttr": "[186508,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "1046",
        "npcType": "1",
        "armType": "2",
        "npcId": "942",
        "npcAttr": "[186878,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "1047",
        "npcType": "1",
        "armType": "3",
        "npcId": "943",
        "npcAttr": "[187247,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "1048",
        "npcType": "1",
        "armType": "1",
        "npcId": "944",
        "npcAttr": "[187595,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "1049",
        "npcType": "1",
        "armType": "2",
        "npcId": "945",
        "npcAttr": "[187964,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "1050",
        "npcType": "2",
        "armType": "3",
        "npcId": "10105",
        "npcAttr": "[1506672,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "1051",
        "npcType": "1",
        "armType": "1",
        "npcId": "946",
        "npcAttr": "[188703,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "1052",
        "npcType": "1",
        "armType": "2",
        "npcId": "947",
        "npcAttr": "[189073,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "1053",
        "npcType": "1",
        "armType": "3",
        "npcId": "948",
        "npcAttr": "[189421,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "1054",
        "npcType": "1",
        "armType": "1",
        "npcId": "949",
        "npcAttr": "[189790,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "1055",
        "npcType": "1",
        "armType": "2",
        "npcId": "950",
        "npcAttr": "[190160,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "1056",
        "npcType": "1",
        "armType": "3",
        "npcId": "951",
        "npcAttr": "[190529,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "1057",
        "npcType": "1",
        "armType": "1",
        "npcId": "952",
        "npcAttr": "[190899,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "1058",
        "npcType": "1",
        "armType": "2",
        "npcId": "953",
        "npcAttr": "[191246,50]",
        "npcRes": "qibing5"
    },
    {
        "id": "1059",
        "npcType": "1",
        "armType": "3",
        "npcId": "954",
        "npcAttr": "[191616,50]",
        "npcRes": "gongjian5"
    },
    {
        "id": "1060",
        "npcType": "2",
        "armType": "1",
        "npcId": "10106",
        "npcAttr": "[1535880,50]",
        "npcRes": "jianshi5"
    },
    {
        "id": "10000",
        "npcType": "2",
        "armType": "1",
        "npcId": "100001",
        "npcAttr": "[32000,90]",
        "npcRes": "jianshi5"
    }
]

export const combatsConfig = [
    {
        "id": "1",
        "combat": "101",
        "chapter": "1",
        "type": "1",
        "interval": "1000",
        "npc": "[[1,1]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "2",
        "combat": "102",
        "chapter": "1",
        "type": "1",
        "interval": "1000",
        "npc": "[[2,2]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "3",
        "combat": "103",
        "chapter": "1",
        "type": "1",
        "interval": "1000",
        "npc": "[[3,2]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "4",
        "combat": "104",
        "chapter": "1",
        "type": "1",
        "interval": "1000",
        "npc": "[[4,3]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "5",
        "combat": "105",
        "chapter": "1",
        "type": "1",
        "interval": "1000",
        "npc": "[[5,3]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "6",
        "combat": "106",
        "chapter": "1",
        "type": "1",
        "interval": "1000",
        "npc": "[[6,4]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "7",
        "combat": "107",
        "chapter": "1",
        "type": "1",
        "interval": "1000",
        "npc": "[[7,4]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "8",
        "combat": "108",
        "chapter": "1",
        "type": "1",
        "interval": "1000",
        "npc": "[[8,4]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "9",
        "combat": "109",
        "chapter": "1",
        "type": "1",
        "interval": "1000",
        "npc": "[[9,4]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "10",
        "combat": "110",
        "chapter": "1",
        "type": "2",
        "interval": "1000",
        "npc": "[[10001,1]]",
        "product": "[[2,1,74],[2,2,50]]",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "11",
        "combat": "201",
        "chapter": "2",
        "type": "1",
        "interval": "1000",
        "npc": "[[10,5]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "12",
        "combat": "202",
        "chapter": "2",
        "type": "1",
        "interval": "1000",
        "npc": "[[11,5]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "13",
        "combat": "203",
        "chapter": "2",
        "type": "1",
        "interval": "1000",
        "npc": "[[12,5]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "14",
        "combat": "204",
        "chapter": "2",
        "type": "1",
        "interval": "1000",
        "npc": "[[13,5]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "15",
        "combat": "205",
        "chapter": "2",
        "type": "1",
        "interval": "1000",
        "npc": "[[14,5]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "16",
        "combat": "206",
        "chapter": "2",
        "type": "1",
        "interval": "1000",
        "npc": "[[15,5]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "17",
        "combat": "207",
        "chapter": "2",
        "type": "1",
        "interval": "1000",
        "npc": "[[16,5]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "18",
        "combat": "208",
        "chapter": "2",
        "type": "1",
        "interval": "1000",
        "npc": "[[17,5]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "19",
        "combat": "209",
        "chapter": "2",
        "type": "1",
        "interval": "1000",
        "npc": "[[18,5]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "20",
        "combat": "210",
        "chapter": "2",
        "type": "2",
        "interval": "1000",
        "npc": "[[10002,1]]",
        "product": "[[2,1,149],[2,2,99],[2,3,7]]",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "21",
        "combat": "301",
        "chapter": "3",
        "type": "1",
        "interval": "1000",
        "npc": "[[19,6]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "22",
        "combat": "302",
        "chapter": "3",
        "type": "1",
        "interval": "1000",
        "npc": "[[20,6]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "23",
        "combat": "303",
        "chapter": "3",
        "type": "1",
        "interval": "1000",
        "npc": "[[21,6]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "24",
        "combat": "304",
        "chapter": "3",
        "type": "1",
        "interval": "1000",
        "npc": "[[22,6]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "25",
        "combat": "305",
        "chapter": "3",
        "type": "1",
        "interval": "1000",
        "npc": "[[23,6]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "26",
        "combat": "306",
        "chapter": "3",
        "type": "1",
        "interval": "1000",
        "npc": "[[24,6]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "27",
        "combat": "307",
        "chapter": "3",
        "type": "1",
        "interval": "1000",
        "npc": "[[25,6]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "28",
        "combat": "308",
        "chapter": "3",
        "type": "1",
        "interval": "1000",
        "npc": "[[26,6]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "29",
        "combat": "309",
        "chapter": "3",
        "type": "1",
        "interval": "1000",
        "npc": "[[27,6]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "30",
        "combat": "310",
        "chapter": "3",
        "type": "2",
        "interval": "1000",
        "npc": "[[10003,1]]",
        "product": "[[2,1,223],[2,2,149],[2,3,80]]",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "31",
        "combat": "401",
        "chapter": "4",
        "type": "1",
        "interval": "1000",
        "npc": "[[28,7]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "32",
        "combat": "402",
        "chapter": "4",
        "type": "1",
        "interval": "1000",
        "npc": "[[29,7]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "33",
        "combat": "403",
        "chapter": "4",
        "type": "1",
        "interval": "1000",
        "npc": "[[30,7]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "34",
        "combat": "404",
        "chapter": "4",
        "type": "1",
        "interval": "1000",
        "npc": "[[31,7]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "35",
        "combat": "405",
        "chapter": "4",
        "type": "1",
        "interval": "1000",
        "npc": "[[32,7]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "36",
        "combat": "406",
        "chapter": "4",
        "type": "1",
        "interval": "1000",
        "npc": "[[33,7]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "37",
        "combat": "407",
        "chapter": "4",
        "type": "1",
        "interval": "1000",
        "npc": "[[34,7]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "38",
        "combat": "408",
        "chapter": "4",
        "type": "1",
        "interval": "1000",
        "npc": "[[35,7]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "39",
        "combat": "409",
        "chapter": "4",
        "type": "1",
        "interval": "1000",
        "npc": "[[36,7]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "40",
        "combat": "410",
        "chapter": "4",
        "type": "2",
        "interval": "1000",
        "npc": "[[10004,1]]",
        "product": "[[2,1,338],[2,2,226],[2,3,170]]",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "41",
        "combat": "501",
        "chapter": "5",
        "type": "1",
        "interval": "1000",
        "npc": "[[37,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "42",
        "combat": "502",
        "chapter": "5",
        "type": "1",
        "interval": "1000",
        "npc": "[[38,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "43",
        "combat": "503",
        "chapter": "5",
        "type": "1",
        "interval": "1000",
        "npc": "[[39,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "44",
        "combat": "504",
        "chapter": "5",
        "type": "1",
        "interval": "1000",
        "npc": "[[40,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "45",
        "combat": "505",
        "chapter": "5",
        "type": "1",
        "interval": "1000",
        "npc": "[[41,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "46",
        "combat": "506",
        "chapter": "5",
        "type": "1",
        "interval": "1000",
        "npc": "[[42,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "47",
        "combat": "507",
        "chapter": "5",
        "type": "1",
        "interval": "1000",
        "npc": "[[43,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "48",
        "combat": "508",
        "chapter": "5",
        "type": "1",
        "interval": "1000",
        "npc": "[[44,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "49",
        "combat": "509",
        "chapter": "5",
        "type": "1",
        "interval": "1000",
        "npc": "[[45,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "50",
        "combat": "510",
        "chapter": "5",
        "type": "2",
        "interval": "1000",
        "npc": "[[10005,1]]",
        "product": "[[2,1,818],[2,2,546],[2,3,410]]",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "51",
        "combat": "601",
        "chapter": "6",
        "type": "1",
        "interval": "1000",
        "npc": "[[46,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "52",
        "combat": "602",
        "chapter": "6",
        "type": "1",
        "interval": "1000",
        "npc": "[[47,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "53",
        "combat": "603",
        "chapter": "6",
        "type": "1",
        "interval": "1000",
        "npc": "[[48,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "54",
        "combat": "604",
        "chapter": "6",
        "type": "1",
        "interval": "1000",
        "npc": "[[49,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "55",
        "combat": "605",
        "chapter": "6",
        "type": "1",
        "interval": "1000",
        "npc": "[[50,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "56",
        "combat": "606",
        "chapter": "6",
        "type": "1",
        "interval": "1000",
        "npc": "[[51,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "57",
        "combat": "607",
        "chapter": "6",
        "type": "1",
        "interval": "1000",
        "npc": "[[52,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "58",
        "combat": "608",
        "chapter": "6",
        "type": "1",
        "interval": "1000",
        "npc": "[[53,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "59",
        "combat": "609",
        "chapter": "6",
        "type": "1",
        "interval": "1000",
        "npc": "[[54,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "60",
        "combat": "610",
        "chapter": "6",
        "type": "2",
        "interval": "1000",
        "npc": "[[10006,1]]",
        "product": "[[2,1,1298],[2,2,866],[2,3,650]]",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "61",
        "combat": "701",
        "chapter": "7",
        "type": "1",
        "interval": "1000",
        "npc": "[[55,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "62",
        "combat": "702",
        "chapter": "7",
        "type": "1",
        "interval": "1000",
        "npc": "[[56,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "63",
        "combat": "703",
        "chapter": "7",
        "type": "1",
        "interval": "1000",
        "npc": "[[57,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "64",
        "combat": "704",
        "chapter": "7",
        "type": "1",
        "interval": "1000",
        "npc": "[[58,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "65",
        "combat": "705",
        "chapter": "7",
        "type": "1",
        "interval": "1000",
        "npc": "[[59,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "66",
        "combat": "706",
        "chapter": "7",
        "type": "1",
        "interval": "1000",
        "npc": "[[60,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "67",
        "combat": "707",
        "chapter": "7",
        "type": "1",
        "interval": "1000",
        "npc": "[[61,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "68",
        "combat": "708",
        "chapter": "7",
        "type": "1",
        "interval": "1000",
        "npc": "[[62,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "69",
        "combat": "709",
        "chapter": "7",
        "type": "1",
        "interval": "1000",
        "npc": "[[63,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "70",
        "combat": "710",
        "chapter": "7",
        "type": "2",
        "interval": "1000",
        "npc": "[[10007,1]]",
        "product": "[[2,1,1779],[2,2,1187],[2,3,891]]",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "71",
        "combat": "801",
        "chapter": "8",
        "type": "1",
        "interval": "1000",
        "npc": "[[64,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "72",
        "combat": "802",
        "chapter": "8",
        "type": "1",
        "interval": "1000",
        "npc": "[[65,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "73",
        "combat": "803",
        "chapter": "8",
        "type": "1",
        "interval": "1000",
        "npc": "[[66,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "74",
        "combat": "804",
        "chapter": "8",
        "type": "1",
        "interval": "1000",
        "npc": "[[67,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "75",
        "combat": "805",
        "chapter": "8",
        "type": "1",
        "interval": "1000",
        "npc": "[[68,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "76",
        "combat": "806",
        "chapter": "8",
        "type": "1",
        "interval": "1000",
        "npc": "[[69,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "77",
        "combat": "807",
        "chapter": "8",
        "type": "1",
        "interval": "1000",
        "npc": "[[70,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "78",
        "combat": "808",
        "chapter": "8",
        "type": "1",
        "interval": "1000",
        "npc": "[[71,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "79",
        "combat": "809",
        "chapter": "8",
        "type": "1",
        "interval": "1000",
        "npc": "[[72,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "80",
        "combat": "810",
        "chapter": "8",
        "type": "2",
        "interval": "1000",
        "npc": "[[10008,1]]",
        "product": "[[2,1,2259],[2,2,1507],[2,3,1131]]",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "81",
        "combat": "901",
        "chapter": "9",
        "type": "1",
        "interval": "1000",
        "npc": "[[73,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "82",
        "combat": "902",
        "chapter": "9",
        "type": "1",
        "interval": "1000",
        "npc": "[[74,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "83",
        "combat": "903",
        "chapter": "9",
        "type": "1",
        "interval": "1000",
        "npc": "[[75,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "84",
        "combat": "904",
        "chapter": "9",
        "type": "1",
        "interval": "1000",
        "npc": "[[76,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "85",
        "combat": "905",
        "chapter": "9",
        "type": "1",
        "interval": "1000",
        "npc": "[[77,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "86",
        "combat": "906",
        "chapter": "9",
        "type": "1",
        "interval": "1000",
        "npc": "[[78,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "87",
        "combat": "907",
        "chapter": "9",
        "type": "1",
        "interval": "1000",
        "npc": "[[79,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "88",
        "combat": "908",
        "chapter": "9",
        "type": "1",
        "interval": "1000",
        "npc": "[[80,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "89",
        "combat": "909",
        "chapter": "9",
        "type": "1",
        "interval": "1000",
        "npc": "[[81,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "90",
        "combat": "910",
        "chapter": "9",
        "type": "2",
        "interval": "1000",
        "npc": "[[10009,1]]",
        "product": "[[2,1,2739],[2,2,1827],[2,3,1371]]",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "91",
        "combat": "1001",
        "chapter": "10",
        "type": "1",
        "interval": "1000",
        "npc": "[[82,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "92",
        "combat": "1002",
        "chapter": "10",
        "type": "1",
        "interval": "1000",
        "npc": "[[83,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "93",
        "combat": "1003",
        "chapter": "10",
        "type": "1",
        "interval": "1000",
        "npc": "[[84,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "94",
        "combat": "1004",
        "chapter": "10",
        "type": "1",
        "interval": "1000",
        "npc": "[[85,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "95",
        "combat": "1005",
        "chapter": "10",
        "type": "1",
        "interval": "1000",
        "npc": "[[86,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "96",
        "combat": "1006",
        "chapter": "10",
        "type": "1",
        "interval": "1000",
        "npc": "[[87,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "97",
        "combat": "1007",
        "chapter": "10",
        "type": "1",
        "interval": "1000",
        "npc": "[[88,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "98",
        "combat": "1008",
        "chapter": "10",
        "type": "1",
        "interval": "1000",
        "npc": "[[89,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "99",
        "combat": "1009",
        "chapter": "10",
        "type": "1",
        "interval": "1000",
        "npc": "[[90,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "100",
        "combat": "1010",
        "chapter": "10",
        "type": "2",
        "interval": "1000",
        "npc": "[[10010,1]]",
        "product": "[[2,1,3219],[2,2,2147],[2,3,1611]]",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "101",
        "combat": "1101",
        "chapter": "11",
        "type": "1",
        "interval": "1000",
        "npc": "[[91,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "102",
        "combat": "1102",
        "chapter": "11",
        "type": "1",
        "interval": "1000",
        "npc": "[[92,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "103",
        "combat": "1103",
        "chapter": "11",
        "type": "1",
        "interval": "1000",
        "npc": "[[93,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "104",
        "combat": "1104",
        "chapter": "11",
        "type": "1",
        "interval": "1000",
        "npc": "[[94,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "105",
        "combat": "1105",
        "chapter": "11",
        "type": "1",
        "interval": "1000",
        "npc": "[[95,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "106",
        "combat": "1106",
        "chapter": "11",
        "type": "1",
        "interval": "1000",
        "npc": "[[96,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "107",
        "combat": "1107",
        "chapter": "11",
        "type": "1",
        "interval": "1000",
        "npc": "[[97,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "108",
        "combat": "1108",
        "chapter": "11",
        "type": "1",
        "interval": "1000",
        "npc": "[[98,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "109",
        "combat": "1109",
        "chapter": "11",
        "type": "1",
        "interval": "1000",
        "npc": "[[99,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "110",
        "combat": "1110",
        "chapter": "11",
        "type": "2",
        "interval": "1000",
        "npc": "[[10011,1]]",
        "product": "[[2,1,3699],[2,2,2467],[2,3,1851]]",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "111",
        "combat": "1201",
        "chapter": "12",
        "type": "1",
        "interval": "1000",
        "npc": "[[100,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "112",
        "combat": "1202",
        "chapter": "12",
        "type": "1",
        "interval": "1000",
        "npc": "[[101,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "113",
        "combat": "1203",
        "chapter": "12",
        "type": "1",
        "interval": "1000",
        "npc": "[[102,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "114",
        "combat": "1204",
        "chapter": "12",
        "type": "1",
        "interval": "1000",
        "npc": "[[103,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "115",
        "combat": "1205",
        "chapter": "12",
        "type": "1",
        "interval": "1000",
        "npc": "[[104,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "116",
        "combat": "1206",
        "chapter": "12",
        "type": "1",
        "interval": "1000",
        "npc": "[[105,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "117",
        "combat": "1207",
        "chapter": "12",
        "type": "1",
        "interval": "1000",
        "npc": "[[106,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "118",
        "combat": "1208",
        "chapter": "12",
        "type": "1",
        "interval": "1000",
        "npc": "[[107,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "119",
        "combat": "1209",
        "chapter": "12",
        "type": "1",
        "interval": "1000",
        "npc": "[[108,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "120",
        "combat": "1210",
        "chapter": "12",
        "type": "2",
        "interval": "1000",
        "npc": "[[10012,1]]",
        "product": "[[2,1,4180],[2,2,2788],[2,3,2092]]",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "121",
        "combat": "1301",
        "chapter": "13",
        "type": "1",
        "interval": "1000",
        "npc": "[[109,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "122",
        "combat": "1302",
        "chapter": "13",
        "type": "1",
        "interval": "1000",
        "npc": "[[110,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "123",
        "combat": "1303",
        "chapter": "13",
        "type": "1",
        "interval": "1000",
        "npc": "[[111,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "124",
        "combat": "1304",
        "chapter": "13",
        "type": "1",
        "interval": "1000",
        "npc": "[[112,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "125",
        "combat": "1305",
        "chapter": "13",
        "type": "1",
        "interval": "1000",
        "npc": "[[113,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "126",
        "combat": "1306",
        "chapter": "13",
        "type": "1",
        "interval": "1000",
        "npc": "[[114,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "127",
        "combat": "1307",
        "chapter": "13",
        "type": "1",
        "interval": "1000",
        "npc": "[[115,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "128",
        "combat": "1308",
        "chapter": "13",
        "type": "1",
        "interval": "1000",
        "npc": "[[116,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "129",
        "combat": "1309",
        "chapter": "13",
        "type": "1",
        "interval": "1000",
        "npc": "[[117,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "130",
        "combat": "1310",
        "chapter": "13",
        "type": "2",
        "interval": "1000",
        "npc": "[[10013,1]]",
        "product": "[[2,1,4660],[2,2,3108],[2,3,2332]]",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "131",
        "combat": "1401",
        "chapter": "14",
        "type": "1",
        "interval": "1000",
        "npc": "[[118,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "132",
        "combat": "1402",
        "chapter": "14",
        "type": "1",
        "interval": "1000",
        "npc": "[[119,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "133",
        "combat": "1403",
        "chapter": "14",
        "type": "1",
        "interval": "1000",
        "npc": "[[120,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "134",
        "combat": "1404",
        "chapter": "14",
        "type": "1",
        "interval": "1000",
        "npc": "[[121,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "135",
        "combat": "1405",
        "chapter": "14",
        "type": "1",
        "interval": "1000",
        "npc": "[[122,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "136",
        "combat": "1406",
        "chapter": "14",
        "type": "1",
        "interval": "1000",
        "npc": "[[123,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "137",
        "combat": "1407",
        "chapter": "14",
        "type": "1",
        "interval": "1000",
        "npc": "[[124,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "138",
        "combat": "1408",
        "chapter": "14",
        "type": "1",
        "interval": "1000",
        "npc": "[[125,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "139",
        "combat": "1409",
        "chapter": "14",
        "type": "1",
        "interval": "1000",
        "npc": "[[126,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "140",
        "combat": "1410",
        "chapter": "14",
        "type": "2",
        "interval": "1000",
        "npc": "[[10014,1]]",
        "product": "[[2,1,5198],[2,2,3467],[2,3,2562],[2,4,13]]",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "141",
        "combat": "1501",
        "chapter": "15",
        "type": "1",
        "interval": "1000",
        "npc": "[[127,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "142",
        "combat": "1502",
        "chapter": "15",
        "type": "1",
        "interval": "1000",
        "npc": "[[128,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "143",
        "combat": "1503",
        "chapter": "15",
        "type": "1",
        "interval": "1000",
        "npc": "[[129,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "144",
        "combat": "1504",
        "chapter": "15",
        "type": "1",
        "interval": "1000",
        "npc": "[[130,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "145",
        "combat": "1505",
        "chapter": "15",
        "type": "1",
        "interval": "1000",
        "npc": "[[131,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "146",
        "combat": "1506",
        "chapter": "15",
        "type": "1",
        "interval": "1000",
        "npc": "[[132,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "147",
        "combat": "1507",
        "chapter": "15",
        "type": "1",
        "interval": "1000",
        "npc": "[[133,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "148",
        "combat": "1508",
        "chapter": "15",
        "type": "1",
        "interval": "1000",
        "npc": "[[134,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "149",
        "combat": "1509",
        "chapter": "15",
        "type": "1",
        "interval": "1000",
        "npc": "[[135,8]]",
        "product": "",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    },
    {
        "id": "150",
        "combat": "1510",
        "chapter": "15",
        "type": "2",
        "interval": "1000",
        "npc": "[[10015,1]]",
        "product": "[[2,1,6259],[2,2,4173],[2,3,2703],[2,4,143]]",
        "bagMaxSize": "[1,2,3,4]",
        "bagDefalueSize": "[4]",
        "droppableBlocks": "[[0,0,1,5],[1,1,1,5]]"
    }
]



