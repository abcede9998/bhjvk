class Dustbin {
    constructor(x,y){
var options= {
    isStatic: true
}

        this.x=x;
        this.y=y;
        this.dustbinWidth=200;
        this.dustbinHeight=230;
        this.wallThickness=20;
        this.image= loadImage("dustbingreen.png");

        this.bottombody=Bodies.rectangle(this.x,this.y, this.dustbinWidth,this.wallThickness, options);
        this.leftbody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinheight, options);
        this.rightbody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinheight, options);
        World.add(world,this.bottombody,this.leftbody, this.rightbody);
        
}
    display() {
     var bpos=this.bottombody.position;
     var lpos=this.leftbody.position;
     var rpos=this.rightbody.position;
push();
translate(bpos.x,bpos.y);
rectMode(CENTER);
image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
pop(); 
     
    }
} 