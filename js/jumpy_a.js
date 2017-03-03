var		HERO_IMAGE = 'assets/hero.png',
		PLATFORM_IMAGE = 'assets/platform.png';

function _game()
{
	window.Game = this;
	var self = this,
		ticks = 0,
		canvas,
		stage,
		world,
		hero,
		w = getWidth(),
		h = getHeight(),
		assets = [],
		keyDown = false;

	// holds all collideable objects
	var collideables = [];
	self.getCollideables = function() { return collideables; };

	// starts to load all the assets
	self.preloadResources = function() {
		self.loadImage(HERO_IMAGE);
		self.loadImage(PLATFORM_IMAGE);
	}

	var requestedAssets = 0,
		loadedAssets = 0;
	// loads the assets and keeps track 
	// of how many assets where there to
	// be loaded
	self.loadImage = function(e) {
		var img = new Image();
		img.onload = self.onLoadedAsset;
		img.src = e;

		assets[e] = img;

		++requestedAssets;
	}
	// each time an asset is loaded
	// check if all assets are complete
	// and initialize the game, if so
	self.onLoadedAsset = function(e) {
		++loadedAssets;
		if ( loadedAssets == requestedAssets ) {
			self.initializeGame();
		}
	}

	self.initializeGame = function() {
		// creating the canvas-element
		canvas = document.createElement('canvas');
		canvas.width = w;
		canvas.height = h;
		document.body.appendChild(canvas);

		// initializing the stage
		stage = new Stage(canvas);
		world = new Container();
		stage.addChild(world);

		// creating the Hero, and assign an image
		// also position the hero in the middle of the screen
		hero = new Hero(assets[HERO_IMAGE]);
		hero.x = w/2;
		hero.y = h/2;
		world.addChild(hero);

		// add a platform for the hero to collide with
		self.addPlatform(w/2 - assets[PLATFORM_IMAGE].width/2, h/1.25);

		// Setting the listeners
		if ('ontouchstart' in document.documentElement) {
			canvas.addEventListener('touchstart', function(e) {
				self.handleKeyDown();
			}, false);

			canvas.addEventListener('touchend', function(e) {
				self.handleKeyUp();
			}, false);
		} else {
			document.onkeydown = self.handleKeyDown;
			document.onkeyup = self.handleKeyUp;
			document.onmousedown = self.handleKeyDown;
			document.onmouseup = self.handleKeyUp;
		}
		
		Ticker.setFPS(30);
		Ticker.addListener(self.tick, self);
	}

	self.tick = function(e)
	{
		ticks++;
		hero.tick();

		if ( hero.y > h + 50 ) {
			hero.x = w/2;
			hero.y = h/2;
		}

		var l = collideables.length;
		for ( var c = 0; c < l; c++ ) {
			var p = collideables[c];
			if ( p.localToGlobal(p.image.width,0).x < -10 ) {
				self.movePlatformToEnd(p);
			}
		}

		stage.update();
	}
	
	// this method adds a platform at the
	// given x- and y-coordinates and adds
	// it to the collideables-array
	self.addPlatform = function(x,y) {
		x = Math.round(x);
		y = Math.round(y);

		var platform = new Bitmap(assets[PLATFORM_IMAGE]);
		platform.x = x;
		platform.y = y;
		platform.snapToPixel = true;

		world.addChild(platform);
		collideables.push(platform);
	}

	self.handleKeyDown = function(e)
	{
		if ( !keyDown ) {
			keyDown = true;
			hero.jump();
		}
	}

	self.handleKeyUp = function(e)
	{
		keyDown = false;
	}

	self.preloadResources();
};

new _game();