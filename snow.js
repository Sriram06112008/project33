class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
        }
        this.image = loadImage("snow4.webp");
        //this.body = Bodies.circle(x, y, this.r, options);
        //World.add(world, this.body);   
    }
    display() 
    {

        var pos = this.body.position;
        var angle = this.body.angle;

        Push();
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image,this.body.position.x,this.body.position.y, 50, 50);
        imageMode(CENTER);
        noStroke();
        pop();
    }
}