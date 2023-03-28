// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000020a05050505050505050505050505070300000000010100010100000000000603010101000001000100000000010006030000010001010101000101010100060300000100000000000001010001000603010001000101010101010000010006030100010001000000000101010100060300000100010001010000000000000603000101010100000101010101010106030000000000000000000000000001060300010000000100000000000100010603000101010001010101000101000106030001000000000001000000000000060300010101010100010101010001010603000000000000000000000100000106040909090909090909090909090b0908`, img`
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . 2 2 . 2 2 . . . . . 2 
2 2 2 2 . . 2 . 2 . . . . 2 . 2 
2 . . 2 . 2 2 2 2 . 2 2 2 2 . 2 
2 . . 2 . . . . . . 2 2 . 2 . 2 
2 2 . 2 . 2 2 2 2 2 2 . . 2 . 2 
2 2 . 2 . 2 . . . . 2 2 2 2 . 2 
2 . . 2 . 2 . 2 2 . . . . . . 2 
2 . 2 2 2 2 . . 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . 2 2 
2 . 2 . . . 2 . . . . . 2 . 2 2 
2 . 2 2 2 . 2 2 2 2 . 2 2 . 2 2 
2 . 2 . . . . . 2 . . . . . . 2 
2 . 2 2 2 2 2 . 2 2 2 2 . 2 2 2 
2 . . . . . . . . . . 2 . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.dungeon.stairSouth,sprites.vehicle.roadVertical], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
