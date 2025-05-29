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
    collideWith(rect_2){
        if(this.#x < rect_2.x + rect_2.w &&
            this.#x + this.#width > rect_2.x &&
            this.#y < rect_2.y + rect_2.h &&
            this.#y + this.#height > rect_2.y
        ){
            return true;
        };
        return false;
    };
};