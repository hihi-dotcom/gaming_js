const CANVAS_WIDTH = 800;
const  CANVAS_HEIGHT = 600;
class GameManager{
    
    #map;

    /**
     * @type {Player}
     */
    #player;

    constructor(){
        this.#map = new GameMap(maptilesetmatrix);

        const newKep = new Image();
        newKep.src = "assets/playertiles.png";

        this.#player = new Player(newKep, PLAYER_START_POZ_X, PLAYER_START_POZ_Y);
    };
    update(){};
    /**
     * 
     * @param {CanvasRenderingContext2D} ctx 
     */
    render(ctx){
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        this.#map.render(ctx);
        this.#player.render(ctx);
    };
    gameloop(ctx_1){
        this.update();
        this.render(ctx_1);
    };
};