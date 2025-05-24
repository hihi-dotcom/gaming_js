class Player extends Entity{
    /**
     * @type {Rectangle}
     */
    #nextPosition;

    /**
     * @type {Number}
     */
    #speed;

    settingNextPostion(nextposition1){
        this.#nextPosition = nextposition1;
    };
    constructor(image_2, x, y){
        super(image_2, x, y);
        
    };

    update(){
        this.#nextPosition = Player.rectangle;
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
    getNexPosition(keypressed){
        
    };
};
