class Player extends Entity{

    constructor(image_2, x, y){
        super(image_2, x, y);
        
    }
    render(ctx){
        ctx.drawImage(this.image, 0, 0, IMAGE_TILE_WIDTH, IMAGE_TILE_HEIGHT, this.rectangle.x, this.rectangle.y, this.rectangle.width, this.rectangle.height);
    }
};
