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
};