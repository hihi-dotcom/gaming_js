class RectAngle{
    /**
     * @type {number}
     */
    #x;
    /**
     * @type {number}
     */
    #y;
    /**
     * @type {number}
     */
    #width;
    /**
     * @type {number}
     */
    #height;

    get x(){
        return this.#x;
    };

    get y(){
        return this.#y;
    };

    get width(){
        return this.#width;
    };

    get height(){
        return this.#height;
    };

    constructor(x, y, szeles, magas){
        this.#x = x;
        this.#y = y;
        this.#width = szeles;
        this.#height = magas;
    };

    /**
     * 
     * @param {RectAngle} rect_2
     * @returns {Boolean} 
     */
    collideWith(rect2){

        if(this.#x < rect2.x + rect2.width &&
        this.#x + this.#width > rect2.x &&
        this.#y < rect2.y + rect2.height &&
        this.#y + this.#height > rect2.y
        ){
            return true;
        };
        return false;
    };
};