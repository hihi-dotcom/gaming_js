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

    /**
     * @type {Number}
     */
    #rendercounter;

    /**
     * @type {Number}
     */
    #renderindex;

    #nextDirection;

    settingNextPosition(nextposition1){
        this.#nextPosition = nextposition1;
    };
    constructor(image_2, x, y){
        super(image_2, x, y);
        this.#speed = 1;
        this.#direction = "idle";
        this.#rendercounter = 0;
        this.#renderindex = 0;
        
    };

    update(){
      this.settingrectangle(this.#nextPosition);
    };
    render(ctx){
        
        if(this.#direction === this.#nextDirection){
      
                this.#rendercounter++;
        }
        else{
            this.#rendercounter = 0;
            this.#direction = this.#nextDirection;
        }
        if(this.#rendercounter > 15){
            this.#rendercounter = 0;
            if(this.#renderindex == 1){
                this.#renderindex = 0;
            }
            else{
                this.#renderindex = 1;
            }
        }
        ctx.drawImage(this.image, this.#renderindex * IMAGE_TILE_WIDTH, PLAYERIMAGE_STATE_TO_ROW[this.#direction] * IMAGE_TILE_HEIGHT, IMAGE_TILE_WIDTH, IMAGE_TILE_HEIGHT, this.rectangle.x, this.rectangle.y, this.rectangle.width, this.rectangle.height);
    };

    /**
     * kikalkulálja a leütött karakter alapján a karakter lehetséges következő pozícióját
     * @param {String} keypressed 
     * @return {Rectangle|undefined}
     */
    getNextPosition(keypressed){
        let undefinedtarolo = undefined;
        if(keypressed == undefined){
            this.#calculateDirection("idle");
        }
        if(keypressed !== undefined){
            if(keypressed == "w"){
                this.#calculateDirection("up");
                return new RectAngle(this.rectangle.x, this.rectangle.y - this.#speed, this.rectangle.width, this.rectangle.height);
            }
            else if(keypressed == "a"){
                this.#calculateDirection("left");
                return new RectAngle(this.rectangle.x - this.#speed, this.rectangle.y, this.rectangle.width, this.rectangle.height);
            }
            else if(keypressed == "s"){
                this.#calculateDirection("down");
                return new RectAngle(this.rectangle.x, this.rectangle.y + this.#speed, this.rectangle.width, this.rectangle.height);
            }
            else if(keypressed == "d"){
                this.#calculateDirection("right");
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
        this.#nextDirection = newDirection;
    };

   
};
