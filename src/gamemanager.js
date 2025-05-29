const CANVAS_WIDTH = 800;
const  CANVAS_HEIGHT = 600;
class GameManager{
    
    #map;

    /**
     * @type {Player}
     */
    #player;

    /**
     * @type {String}
     */
    #keypressed;

    settingKeyPressed(keypressed1){
        this.#keypressed = keypressed1;
    };

    constructor(){
        this.#map = new GameMap(maptilesetmatrix);

        const newKep = new Image();
        newKep.src = "assets/playertiles.png";

        this.#player = new Player(newKep, PLAYER_START_POZ_X, PLAYER_START_POZ_Y);
    };
    update(){
        this.#playerUpdate();
    };
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

    #playerUpdate(){
        
        let kovipozi = this.#player.getNextPosition(this.#keypressed);
        if(kovipozi == undefined){
            return;
        }
        else{
            this.#player.settingNextPosition(kovipozi);
            this.#player.update();
        }
      
    };
};