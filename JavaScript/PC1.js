class PC1{
    constructor(x,y,width,height){
        var options={
            "friction":0.5,
            "density":0.5
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Photos/EclipseStanding.PNG")
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        //fill("Red");
        //rect(pos.x, pos.y, this.width, this.height);
        image(this.image, pos.x, pos.y, this.width, this.height)
    }
}