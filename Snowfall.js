class Snowfall{
    constructor(x,y,r){
        var options ={ 
            restitution: 0.4 }
            this.r = random(4,12);
            this.color = color("white")
            this.body = Bodies.circle(x,y,this.r,options);
            this.image = loadImage("images//snow4.webp")
            World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        fill(this.color);
  
        stroke(255);
        strokeWeight(this.r);
       // point(this.pos.x,this.pos.y);

        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
            }
};