class Side{
    constructor(x, y, width, height){
        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.img = loadImage('.vscode/dustbingreen.png');
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
       
        fill("black");
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        image(this.img,600,460,200,200); 
        pop();
    }
}