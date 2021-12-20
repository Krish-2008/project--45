class Enemy{
    constructor(x,y,width,height,enemyPos){
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;

        this.image = loadImage("assets/aeroplane2.png");
        this.enemyPosition = enemyPos;
        World.add(world,this.body);
         }

         display(){
           var po
         }

}