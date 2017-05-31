playGame={
	create:function(){
 
    line = game.add.sprite(400,0,"line");
    pointer = game.add.sprite(0,0,'pointer');

       player = game.add.sprite(0,0,'tuo2');
    keyboard = game.input.keyboard.createCursorKeys();
    game.physics.arcade.enable(player);
    game.physics.arcade.enable(line);
    line.body.immovable = true;
    game.physics.arcade.enable(pointer);
    pointer.body.collideWorldBounds = true;
    pointer.body.velocity.x = 500;
    pointer.body.bounce.x= 1;

    keyboard = game.input.keyboard.createCursorKeys();
    game.physics.arcade.enable(player);
   
    // backgroundMusic = game.add.audio("backgroundMusic");
    // backgroundMusic.play();
    
    score = game.add.text(5,0,'Score  :'+a,{font: '32px bonnie',fill:"black"});
    score.scale.x = 3;
    score.scale.y = 3;
    stateText = game.add.text(game.world.centerX,game.world.centerY,' ', { font: '30px Arial', fill: 'orange' }); 

    // button=game.add.button(0,480,"back",back);

    button=game.add.button(300,75,"up",this.pushUp);
    button=game.add.button(300,415,"down",this.pushDown);
    button=game.add.button(550,255,"right",this.pushRight);
    button=game.add.button(50,255,"left",this.pushLeft);

	},
	update:function(){
      if(keyboard.left.isDown){
        player.animations.play('left');
    }
    else if(keyboard.right.isDown){
        player.animations.play('right');
    }
    else if(keyboard.up.isDown){
        player.animations.play('up');
    }
    else if(keyboard.down.isDown){
        player.animations.play('down');
    }
    else{
        player.animations.stop();
    }
        game.physics.arcade.collide(pointer,line);
	},
     pushUp:function(){
    pointer.body.velocity.x = 0;
    if(pointer.body.x <  150){
        a = a + 1;
        score.text="Score :"+a;
        kamay = game.add.image(250,250,"kamay");
    paltik = game.add.button(270,350,'paltik', playGame.paltikLamet);
    }
    else if(pointer.body.x==100 || pointer.body.x <  200){
        kamay = game.add.image(250,250,"kamay2");
    gameover = game.add.button(270,350,'gameover', playGame.gameoverLamet);
    }
    else if(pointer.body.x==200 || pointer.body.x <  300){
        kamay = game.add.image(250,250,"kamay3");
    gameover = game.add.button(270,350,'gameover', playGame.gameoverLamet);
    }
    else if(pointer.body.x >  250){
        kamay = game.add.image(250,250,"kamay4");
    gameover = game.add.button(270,350,'gameover', playGame.gameoverLamet);
    }
},
 pushLeft:function(){pointer.body.velocity.x = 0;
    if(pointer.body.x <  150){
        kamay = game.add.image(250,250,"kamay2");
    gameover = game.add.button(270,350,'gameover', playGame.gameoverLamet);
    }
    else if(pointer.body.x==100 || pointer.body.x <  200){
        a = a + 1;
        score.text="Score :"+a;
        kamay = game.add.image(250,250,"kamay");
    paltik = game.add.button(270,350,'paltik', playGame.paltikLamet);
    }
    else if(pointer.body.x==200 || pointer.body.x <  300){
        kamay = game.add.image(250,250,"kamay3");
    gameover = game.add.button(270,350,'gameover', playGame.gameoverLamet);
    }
    else if(pointer.body.x >  250){
        kamay = game.add.image(250,250,"kamay4");
    gameover = game.add.button(270,350,'gameover', playGame.gameoverLamet);
    }
},

 pushDown:function(){pointer.body.velocity.x = 0;
    if(pointer.body.x <  150){
        kamay = game.add.image(250,250,"kamay3");
    gameover = game.add.button(270,350,'gameover', playGame.gameoverLamet);
    
    }
    else if(pointer.body.x==100 || pointer.body.x <  200){
        kamay = game.add.image(250,250,"kamay2");
    gameover = game.add.button(270,350,'gameover', playGame.gameoverLamet);
    }
    else if(pointer.body.x==200 || pointer.body.x <  300){
        a = a + 1;
        score.text="Score :"+a;
        kamay = game.add.image(250,250,"kamay");
    paltik = game.add.button(270,350,'paltik', playGame.paltikLamet);}
    else if(pointer.body.x >  250){
        kamay = game.add.image(250,250,"kamay4");
    gameover = game.add.button(270,350,'gameover', playGame.gameoverLamet);
    }
},
 pushRight:function(){pointer.body.velocity.x = 0;
    if(pointer.body.x <  150){
        kamay = game.add.image(250,250,"kamay4");
    gameover = game.add.button(270,350,'gameover', playGame.gameoverLamet);
    
    }
    else if(pointer.body.x==100 || pointer.body.x <  200){
        kamay = game.add.image(250,250,"kamay2");
    gameover = game.add.button(270,350,'gameover', playGame.gameoverLamet);
    }
    else if(pointer.body.x==200 || pointer.body.x <  300){
        kamay = game.add.image(250,250,"kamay3");
    gameover = game.add.button(270,350,'gameover', playGame.gameoverLamet);
    }
    else if(pointer.body.x >  250){
        a = a + 1;
        score.text="Score :"+a;
        kamay = game.add.image(250,250,"kamay");
    paltik = game.add.button(270,350,'paltik', playGame.paltikLamet);}

},
 paltikLamet:function(){
    game.state.start('play');
},
 gameoverLamet:function(){
    a=0;
    game.state.start('play');
    // window.location.href=window.location.href;
}

}