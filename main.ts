namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
tiles.setTilemap(tiles.createTilemap(
            hex`100010000205030c0c0205050505050505030c0c060c060c0c060c170c0c0c0c17060c0c060c060c0c070505050505030c060c0c0617060c170c0c0c0c0c0c060c060c0c060c060c0c0c0c0c0c0c0c060c060c0c060c060c0c0c0c0c0c0c0c0617060c0c0617060c170c0c0c0c0c0c060c060c0c060c060c0c0c0c0c0c0c0c060c060c0c060c070504050505050505090c060c0c060c0c0c060d131313130f060c060c0c0705030c06111515151512060c060c0c170c060c06111515151512060c060c0c0c0c060c0610141414140e0617060c0c0c17060c07050505050505080c060c0c0c0c06170c0c0c0c0c0c0c0c0c060c0c170c0705050505050505050505080c0c`,
            img`
. . . 2 2 . . . . . . . . . 2 2 
. 2 . 2 2 . 2 2 2 2 2 2 2 . 2 2 
. 2 . 2 2 . . . . . . . 2 . 2 2 
. 2 . 2 2 2 2 2 2 2 2 . 2 . 2 2 
. 2 . 2 2 2 2 2 2 2 2 . 2 . 2 2 
. 2 . 2 2 2 2 2 2 2 2 . 2 . 2 2 
. 2 . 2 2 2 2 2 2 2 2 . 2 . 2 2 
. 2 . 2 2 2 2 2 2 2 2 . 2 . 2 2 
. 2 . . . . . . . . . . 2 . 2 2 
. 2 2 2 . 2 2 2 2 2 2 . 2 . 2 2 
. . . 2 . 2 2 2 2 2 2 . 2 . 2 2 
2 2 . 2 . 2 2 2 2 2 2 . 2 . 2 2 
2 2 . 2 . 2 2 2 2 2 2 . 2 . 2 2 
2 2 . 2 . . . . . . . . 2 . 2 2 
2 2 . 2 2 2 2 2 2 2 2 2 2 . 2 2 
2 2 . . . . . . . . . . . . 2 2 
`,
            [myTiles.tile0,sprites.dungeon.hazardSpike,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.vehicle.roadIntersection3,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn4,sprites.vehicle.roadIntersection4,sprites.dungeon.hazardHole,sprites.builtin.forestTiles5,sprites.castle.tileGrass1,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,myTiles.tile1],
            TileScale.Sixteen
        ))
