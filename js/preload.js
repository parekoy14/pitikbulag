preloadGame = {
	preload : function (){
	game.load.image('tuo2','img/tuo2.png');
	game.load.image('play','img/play.png');
    game.load.image("gameover", "img/gameover.png");
    game.load.image("paltik", "img/paltik.png");
    game.load.image("up", "img/up.png");
    game.load.image("down", "img/down.png");
    game.load.image("right", "img/right.png");
    game.load.image("left", "img/left.png");
game.load.image("back","img/back.png");
game.load.image("XXX","img/XXX.png");
    game.load.image("line", "img/line.png");
    game.load.image("pointer", "img/pointer.png");
    game.load.image("kamay4", "img/kamay4.png");
        game.load.image("kamay3", "img/kamay3.png");
    game.load.image("kamay2", "img/kamay2.png");
    game.load.image("kamay", "img/kamay.png");


	},
	create: function(){
		game.state.start('menu');
	}
}