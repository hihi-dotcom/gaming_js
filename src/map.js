class GameMap{
    /**
     * @type {MapTile[]}
     */
    #tiles;

    /**
     * @type {MapTile[]}
     */
    #walls;

    /**
     * 
     * @param {number[][]} nagy_tomb 
     */
    constructor(nagy_tomb){
        this.#tiles = [];
        this.#walls = [];
        const kep1 = new Image();
        const kep2 = new Image();
        kep1.src = "assets/wall.png";
        kep2.src = "assets/bg.png";
       
        for(let y = 0; y < nagy_tomb.length; y++){
            for(let x = 0; x < nagy_tomb[y].length; x++){
                const feltetel = nagy_tomb[y][x] == 1;
                const kep = feltetel ? kep1 : kep2;
                const tile = new MapTile(x, y, kep)
                if(feltetel){
                    this.#tiles.push(tile);
                    this.#walls.push(tile);
                    
                }
                else{
                    this.#tiles.push(tile);

                }
            };
        };
       
        
       
    };

    /**
     * 
     * @param {CanvasRenderingContext2D} ctx1 
     */
    render(ctx1){
        for(const tile of this.#tiles){
            tile.render(ctx1);
        };
    };

    /**
     * 
     * @param {RectAngle} playerRectAngle 
     * @returns {Boolean}
     */
    wallCollision(playerRectAngle){

        for(const maptile of this.#walls){
          
           if( maptile.collide(playerRectAngle)){
           
                return true;
           }

        }
        return false;
    };

};

class MapTile{
    /**
     * @type {RectAngle}
     */
    #rectangle;

    /**
     * @type {Image}
     */
    #image;

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {Image} image 
     */
    constructor(x, y, image){
        this.#image = image;
        this.#rectangle = new RectAngle(x * VIEW_TILE_WIDTH, y * VIEW_TILE_HEIGHT, VIEW_TILE_WIDTH, VIEW_TILE_HEIGHT);
    };

    /**
     * 
     * @param {CanvasRenderingContext2D} ctx 
     */
    render(ctx){
        ctx.drawImage(this.#image, this.#rectangle.x, this.#rectangle.y, this.#rectangle.width, this.#rectangle.height);
    };

    /**
     * 
     * @param {RectAngle} playerRectAngle
     * @returns {Boolean} 
     */
    collide(playerRectAngle){

        
      let valasz_ertek = this.#rectangle.collideWith(playerRectAngle);

      return valasz_ertek;
    }
};