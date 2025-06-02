class Player extends Entity{
    /**
     * @type {Rectangle}
     */
    #nextPosition;

    /**
     * @type {Number}
     */
    #speed;

    #direction;

    settingNextPosition(nextposition1){
        this.#nextPosition = nextposition1;
    };
    constructor(image_2, x, y){
        super(image_2, x, y);
        this.#direction = "idle";
        
    };

    update(){
      this.settingrectangle(this.#nextPosition);
    };
    render(ctx){
        this.#speed = 1;
        ctx.drawImage(this.image, 0, PLAYERIMAGE_STATE_TO_ROW[this.#direction] * IMAGE_TILE_HEIGHT, IMAGE_TILE_WIDTH, IMAGE_TILE_HEIGHT, this.rectangle.x, this.rectangle.y, this.rectangle.width, this.rectangle.height);

    };

    /**
     * kikalkulálja a leütött karakter alapján a karakter lehetséges következő pozícióját
     * @param {String} keypressed 
     * @return {Rectangle|undefined}
     */
    getNextPosition(keypressed){
        let undefinedtarolo = undefined;
        if(keypressed == undefined){
            this.#calculateDirection(PLAYERIMAGE_STATE_TO_ROW.idle);
        }
        if(keypressed !== undefined){
            if(keypressed == "w"){
                this.#calculateDirection(PLAYERIMAGE_STATE_TO_ROW.up);
                return new RectAngle(this.rectangle.x, this.rectangle.y - this.#speed, this.rectangle.width, this.rectangle.height);
            }
            else if(keypressed == "a"){
                this.#calculateDirection(PLAYERIMAGE_STATE_TO_ROW.left);
                return new RectAngle(this.rectangle.x - this.#speed, this.rectangle.y, this.rectangle.width, this.rectangle.height);
            }
            else if(keypressed == "s"){
                this.#calculateDirection(PLAYERIMAGE_STATE_TO_ROW.down);
                return new RectAngle(this.rectangle.x, this.rectangle.y + this.#speed, this.rectangle.width, this.rectangle.height);
            }
            else if(keypressed == "d"){
                this.#calculateDirection(PLAYERIMAGE_STATE_TO_ROW.right);
                return new RectAngle(this.rectangle.x + this.#speed, this.rectangle.y, this.rectangle.width, this.rectangle.height);
            }
        }
        else{
            return undefinedtarolo;
        }
    };

    /**
     * 
     * @param {String} newDirection 
     */
    #calculateDirection(newDirection){
        this.#direction = newDirection;
    };

   
};
