class Soldier{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
        this.armyImg = loadImage("assets/airplane.png");
        

    }
    display(){
        push();
        translate(this.x,this.y);
        imageMode(CENTER);
        image(this.armyImg,0,0,this.width,this.height);
        pop();

    }
}