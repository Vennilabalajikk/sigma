// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`30000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080700000000000602050000000000000103040000000000000605000000000000000001030400000000000000000000080700000000000b0b0b0000000000000a08070000010400000b0b00000104000000000a080700000000000000000000080703030400000c0f0d0000010400000a080700000a0700000c0d00000a07000001030a08070304000000000000000008080808070000000e0000000a0709090a080700000a070000000000000a0700000a08080808080703030303030303030808080807090909090909090a08080808080709090a070909090909090a0709090a0808080808080808080808080808`, img`
................................................
................................................
22..............................................
22.....222......222......22........222..........
22..............222..22......22....222..........
22222.......22..222..22......22..2222222........
22222.......22..222..22......22..222222222222222
22222.......2222222..22......22..222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "baseTransparency16":
            case "transparency16":return transparency16;
            case "oceanSand5":
            case "tile1":return tile1;
            case "oceanSand2":
            case "tile2":return tile2;
            case "oceanSand6":
            case "tile3":return tile3;
            case "oceanSand7":
            case "tile4":return tile4;
            case "oceanSand3":
            case "tile5":return tile5;
            case "oceanSand1":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "coral4":
            case "tile9":return tile9;
            case "myTile7":
            case "tile10":return tile10;
            case "oceanSand8":
            case "tile11":return tile11;
            case "oceanSand13":
            case "tile12":return tile12;
            case "oceanSand15":
            case "tile13":return tile13;
            case "oceanSand12":
            case "tile14":return tile14;
            case "myTile8":
            case "tile15":return tile15;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
