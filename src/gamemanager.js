const CANVAS_WIDTH = 800;
const  CANVAS_HEIGHT = 600;
class GameManager{
 
    update(){};
    /**
     * 
     * @param {CanvasRenderingContext2D} ctx 
     */
    render(ctx){
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    };
    gameloop(ctx_1){
        this.update();
        this.render(ctx_1);
    };
};