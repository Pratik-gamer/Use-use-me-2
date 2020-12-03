class Paper{
    constructor(x, y, r){
        var options ={
            isStatic : false,
            restitution :0,
            friction :0,
            density :1.2
            
        }
        this.x=this.x
        this.y=y
        this.r=r
        this.image=loadImage("paper.png")
        this.body = Bodies.circle(this.x, this.y, (this.r-20)/2,options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        fill(255, 0, 255);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,33,33);
        pop();
    }
}