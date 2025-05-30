class Entity{
    /**
     * @type {Rectangle}
     */
    #rectangle;

    /**
     * @type {HTMLImageElement}
     */
    #image;

    get rectangle(){
        return this.#rectangle;
    };

    get image(){
        return this.#image;
    };

    settingrectangle(rectangle_1){
        this.#rectangle = rectangle_1;
       
    };

    constructor(image_1, x, y){
        this.#rectangle = new RectAngle(x, y, VIEW_TILE_WIDTH, VIEW_TILE_HEIGHT);
        this.#image = image_1;
    };

    update(){};

    /**
     * 
     * @param {CanvasRenderingContext2D} ctx 
     */
    render(ctx){};
};