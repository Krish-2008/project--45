

  var background;
    var army;
    var bullet;
    var bulletGroup;
    var enemy;
    var EnemyGroup;
    var enemy2;
    var Enemy2Group;
    var enemy3;
    var Enemy3Group;
    var obastacle;
    var ObstacleGroup;
    var terrorist;
    var terroristGroup;
    var bomb;
    var BombGroup;
    var blast;

    function preload(){
      backgroundImg = loadImage("assets/background6.png");
      bulletImg = loadImage("assets/bullet.png");
      enemyImg = loadImage("assets/airoplane2.png");
      enemy2Img = loadImage("assets/airoplane3.png");
      enemy3Img = loadImage("assets/airoplane1.png");
      obastacleImg = loadImage("assets/bullet2.png");
      terroristImg = loadImage("assets/terrorist.png");
      bombImg = loadImage("assets/bomb.png");
      blast = loadSound("assets/gun.mp3");

      
      
    }
    
    function setup() {
    createCanvas(900,600);
    bulletGroup = new Group();
    EnemyGroup = new Group();
    Enemy2Group = new Group();
    Enemy3Group = new Group();
    ObstacleGroup = new Group();
    terroristGroup = new Group(); 
    BombGroup = new Group();   
    
    army = new Soldier(95,200,300,200);
  
    
    background = createSprite(200,200);
    background.addImage(backgroundImg);
    background.velocityX = -10;

  
  }

  function draw() {
    
    drawSprites();
    textSize(30);
    fill("green");
    text("ARMY FLIGHT SIMULATOR",200,50);
    textSize(20);
    fill("white");
    text("press up And down Arrow Keys To Control The Army Flight",100,100);

    if(bulletGroup.isTouching(EnemyGroup)){
      EnemyGroup.destroyEach();
    }

    if(bulletGroup.isTouching(Enemy2Group)){
      Enemy2Group.destroyEach();
    }

    if(bulletGroup.isTouching(Enemy3Group)){
      Enemy3Group.destroyEach();
    }

    if(bulletGroup.isTouching(ObstacleGroup)){
      ObstacleGroup.destroyEach();
    }

    if(bulletGroup.isTouching(BombGroup)){
      BombGroup.destroyEach();
      bulletGroup.destroyEach();
    }

    if(bulletGroup.isTouching(terroristGroup)){
      terroristGroup.destroyEach();
    }
   
   
   
   
   
    var select_enemy = Math.round(random(1,4));
    var select_enemy2 = Math.round(random(1,4));
    var select_enemy3 = Math.round(random(1,4));
  
    if(World.frameCount%300===0){
      obstacle = createSprite(1900,300);
      obstacle.addImage(obastacleImg);
      obstacle.velocityX = -20;
      
      ObstacleGroup.add(obstacle);
      
      obstacle.scale = 0.2
    }

    if(World.frameCount%100===0){
      bomb = createSprite(900,300);
      bomb.addImage(bombImg);
      bomb.velocityX = -20;
      BombGroup.add(bomb);
      bomb.lifetime = 100;
      
      
      
      
      bomb.scale = 0.2;
    }


  
    if (select_enemy == 1) {
      Enemy();
    } else if (select_enemy2 == 2) {
      Enemy2();
    } else if (select_enemy3 == 3) {
      Enemy3();
    } else {
      Terrorist()
    }

    function Enemy(){
      if(World.frameCount%100 === 0){

        enemy = createSprite(900,200,20,20);
        enemy.addImage(enemyImg);
        enemy.velocityX = -6;
        enemy.y = Math.round(random(100,550));
        enemy.scale = 0.3;
        enemy.lifetime = 400;

        EnemyGroup.add(enemy);
      }
    }

    function Enemy2(){
      if(World.frameCount%200 === 0){
        enemy2 = createSprite(800,200,20,20);
        enemy2.addImage(enemy2Img);
        enemy2.velocityX = -5;
        enemy2.y = Math.round(random(300,250));
        Enemy2Group.add(enemy2);
        enemy2.scale = 0.3;
        enemy2.lifetime = 400;
      }
    }

    function Enemy3(){
      if(World.frameCount%300===0){
        enemy3 = createSprite(900,300,30,30);
        enemy3.addImage(enemy3Img);
        enemy3.velocityX = -5;
        enemy3.scale = 0.2;
        enemy3.y = Math.round(random(400,350));
        Enemy3Group.add(enemy3);
        enemy3.scale =0.3
        enemy3.lifetime = 400;
      }
    }

    function Terrorist(){
      if(frameCount%400===0){
        terrorist = createSprite(1000,400,40,40);
        terrorist.addImage(terroristImg);
        terrorist.velocityX= -9;
        terrorist.y = Math.round(random(500,450));
        terroristGroup.add(terrorist);
        terrorist.scale = 0.2;
        terrorist.lifetime =100;

      }
    }

    
      
    if(keyDown("space")){
      bullet = createSprite(army.x,army.y);
      bullet.addImage(bulletImg);
      bullet.velocityX = 40;
      bullet.scale = 0.1;
      bullet.lifetime = 100;
      
      bulletGroup.add(bullet);
      blast.play();
    }
    
    army.display();

    if (background.x < 0){
      background.x = background.width/2;
    }

    if(keyDown("up")){
      army.y = army.y-6;
    }

    if(keyDown("down")){
      army.y = army.y+6;
    }


    
  }