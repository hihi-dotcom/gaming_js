class Player extends Entity{
    /**
     * @type {Rectangle}
     */
    #nextPosition;

    /**
     * @type {Number}
     */
    #speed;

    settingNextPosition(nextposition1){
        this.#nextPosition = nextposition1;
    };
    constructor(image_2, x, y){
        super(image_2, x, y);
        
    };

    update(){
      this.settingrectangle(this.#nextPosition);
    };
    render(ctx){
        this.#speed = 1;
        ctx.drawImage(this.image, 0, 0, IMAGE_TILE_WIDTH, IMAGE_TILE_HEIGHT, this.rectangle.x, this.rectangle.y, this.rectangle.width, this.rectangle.height);

    };

    /**
     * kikalkulálja a leütött karakter alapján a karakter lehetséges következő pozícióját
     * @param {String} keypressed 
     * @return {Rectangle|undefined}
     */
    getNextPosition(keypressed){
        let undefinedtarolo = undefined;
        if(keypressed !== undefined){
            if(keypressed == "w"){
                return new RectAngle(this.rectangle.x, this.rectangle.y - this.#speed, this.rectangle.width, this.rectangle.height);
            }
            else if(keypressed == "a"){
                return new RectAngle(this.rectangle.x - this.#speed, this.rectangle.y, this.rectangle.width, this.rectangle.height);
            }
            else if(keypressed == "s"){
                return new RectAngle(this.rectangle.x, this.rectangle.y + this.#speed, this.rectangle.width, this.rectangle.height);
            }
            else if(keypressed == "d"){
                return new RectAngle(this.rectangle.x + this.#speed, this.rectangle.y, this.rectangle.width, this.rectangle.height);
            }
        }
        else{
            return undefinedtarolo;
        }
        
    };
};
