class  ShootFire{
    constructor(x,y,width,height) {

    //   var options = {
    //        'friction' : 0.5,
    //        'restitution' : 0.5
              
     //   }
       this.body1 = Bodies.rectangle(x,y,width,height);
       this.width = width;
       this.height = height;
       this.image = loadImage("Photos/FireButton");
       World.add(world, this.body1);
    
    }
    display() {
     //console.log("Hi");
     var pos = this.body1.position;
  
     push();
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,this.width,this.height);
     pop();

    //  if(pos.x > 1000){
    //    World.remove(world,this.body1);
    //  }

    }
   
     
 }