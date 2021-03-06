class Paper{
    constructor(x,y,r,angle)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            denstiy:1.2  
        }

        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("paper.png")
        this.body=Bodies.circle(this.x, this.y, (this.r-50)/2, options)
        World.add(world, this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        ellipse(0,0,this.r,this.r);
        image(this.image, this.x-160, this.y+114, 60, 60);
        pop();

    }
}

