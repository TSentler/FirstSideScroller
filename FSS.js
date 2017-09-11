(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
var rect; // used to reference frame bounds
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Spawn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Ah/B/Qg0g0AAhLQAAhKA0g1QA1g0BKAAQBLAAA0A0QA1A1AABKQAABLg1A0Qg0A1hLAAQhKAAg1g1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Spawn, rect = new cjs.Rectangle(-18,-18,36,36), [rect]);


(lib.Platforms1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(5,1,1).p("ALfAAI29AA");
	this.shape.setTransform(26.5,106);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Platforms1, rect = new cjs.Rectangle(-49.5,103.5,152,5), [rect]);


(lib.Ground2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#454545").ss(67.6,1,1).p("AASAIQgDgCgDgEQgGgFgCgCQgFgDgIABQgEABgEAD");
	this.shape.setTransform(2,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B50000").s().p("A5LKvQidgFlFgXQhKgFgkgEQg8gHgwgMQgggIgvgPIhOgbQisg4i3gIQi3gIiwAoQh+Adggg6QgPgaANghQALgfAcgTQAXgQAigIQATgFAsgGIBngPQA9gJArgDQCggLDhAuQB/AaD+A7QDiArEcAKQC1AGFNgHQBHgCAlgDQA7gHAtgPQAigMAmgVQAagOApgbQBag5AigUQBIgpA8gXQBZgiCXgVQDPgeDXgJQB0gFAsgGQBZgLA/geIAvgWQAmgpBVgSQBqgXBSAWQAqAKA+AgQBOAnAYAJQAiAOBCAQQBGASAeAKIBKAdQAtATAdAHQAjAKBQAHIDQASQBGAGAjAAQA6ABAugKQAzgLA6geQAlgSBBgoIDViCQBFgsAsgTQB5g3CkgEQB0gDC2AaQA3AHAcACQAuACAkgKQASgEAlgQQAjgPAUgFQAfgHAcAHQAgAIAOAYQANAUgEAaQgDAYgQAUQgYAgg4AWQhKAehOAFQhHAGh2gRQiMgTgxgBQiOgDiEA0QhCAbhMAvQgoAZheBAQhlBGg/AfQhfAwhWAGQg9AFhpgTQh3gVgwgBIh3AFQhHADgtgOQgbgJgtgXQgygbgVgIQghgNhAgMQhFgNgegLQgdgKgsgXIhIgkQhWgpg9AQIhYAjIgEABQgeAcg1AUQhKAbhlALQgoAFiMAIQjMALjXAfQhzAQhAAYQhHAZiDBVQiABUhKAZQhSAbiMAIQh3AHiIAAQhsAAh3gFgAr7l+QgKgCgGgHQgMgOAEgXQgIgBgGgHQgGgHgBgJQAAgHABgKIACgRQABgJgCgQQgCgQAAgIQACgTAQgcQATggADgNIAGgXQAFgNAJgFQAFgCAKgBQALgBAFgCQAEgCAHgFQAHgGAFgBQAKgFAQAFQAbAHATAVQAUAWgBAaQgBAWgPAPQgRAPgVgHQgCAVgQAMQgQAKgHAIQgGAIgFARIgYBTQgFARgHAGQgFAEgHAAIgGgBg");
	this.shape_1.setTransform(388.6,130.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ground2, rect = new cjs.Rectangle(-33.6,-33.6,757.1,233.3), [rect]);


(lib.Ground1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(67.6,1,1).p("AAsALQADgGgBgKIgCgTQAAgEACgIQABgIgBgEQgEgOgagGAAsALQgEAAgFAAQgMgBgcgIQgQgCgGgEQAAgBgBAAQgDgCgEgFQgFgFgDgCQgFgEgIACQgEABgEACQgDACgCACQgLAJAAAQQgBAFgBADQgBAGgDACQgEACgHAAQgKgBgDAAQgGAAgDAFQgEAFgBAGQgBAIAFAPQAbAAAUABQAVABAOAAQACAAACAAQAEAAAEAAQALgCAGgEQAGgEAFgMQADgEACgDQAEgHAEgCQAAgBAPgHQAKgFAEgGQAAAAAAgBgAB9gJQgvAUgiAA");
	this.shape.setTransform(4.4,-2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FF00").ss(1,1,1).p("AgKgYQAEACADABQATAHAMALQABABABABQAOALAEARQAFAVgKAPQAAABgQASQgKALAAAKQgFACgVAJQgBggAAgaQACgEABgGIAEgUIADgTQgFAAgGgBQAAgGAAgGQAAgKABgIQACgPADgJQABgBABgCQAFgLATgQQARgTgLgQQglACgSAcQgIAKgFANQgEAKgCAMQAAADAAACQAAABAAAAQgBAHgBAKQAAAMAAAOQAAAIAAAHQAAAfABARQAcAAAHgMQABgCACgEQAAgQAAgNQgBgLAAgKQgWgBgPgBQgBgJAAgKAgvghQAbAGAKAD");
	this.shape_1.setTransform(2,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B50000").ss(3,1,1).p("AAKAYIAAgvAgJAOIAAgl");
	this.shape_2.setTransform(392,125.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B50000").ss(2,1,1).p("AAAAHIAAgN");
	this.shape_3.setTransform(394.5,123.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B50000").ss(1,1,1).p("AAAAjIAAgKIAAg7");
	this.shape_4.setTransform(395,126.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("EgxrAWgIAAgKMAjKAAAIAAAKgARWH0IAAkEIImAAIAAkhIC0AAIFeAAIAA1uIPeAAIAAWfIu2AAIAAGQIomAAIAABkgAcwgnIAAgKg");
	this.shape_5.setTransform(211,134);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#339966").s().p("An4C5IAAlxIPxAAIAAFxg");
	this.shape_6.setTransform(169.5,296.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ground1, rect = new cjs.Rectangle(-107,-43.5,636,358.6), [rect]);


(lib.Player = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(0.5,1,1).p("AAAC5IAAlx");
	this.shape.setTransform(0,-18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FF00").ss(0.1,1,1).p("AAAi4IAAgKAAADDIAAgK");
	this.shape_1.setTransform(0,-18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B50000").ss(1,1,1).p("AhPi4IBPAAIBQAAIAAFxIhQAAIhPAAg");
	this.shape_2.setTransform(0,-18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B50000").s().p("AAAC5IhPAAIAAlxIBPAAIBQAAIAAFxg");
	this.shape_3.setTransform(0,-18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Player, rect = new cjs.Rectangle(-9,-39,18,41), [rect]);


(lib.Lvl1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.platforms1 = new lib.Platforms1();
	this.platforms1.parent = this;

	this.ground2 = new lib.Ground2();
	this.ground2.parent = this;
	this.ground2.setTransform(2,1,1,1,0,0,0,2,1);

	this.spawn = new lib.Spawn();
	this.spawn.parent = this;
	this.spawn.setTransform(168,110);

	this.ground1 = new lib.Ground1();
	this.ground1.parent = this;
	this.ground1.setTransform(169.5,296.5,1,1,0,0,0,169.5,296.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ground1},{t:this.spawn},{t:this.ground2},{t:this.platforms1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Lvl1, rect = new cjs.Rectangle(-107,-43.5,830.5,358.6), [rect]);


// stage content:
(lib.FSS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		class GameMode {
		
			constructor() { //init
				var i;
				for (i = 0; i < stage.getNumChildren(); i++) {
					if (stage.getChildAt(i).id == 1) {
						stageLib = stage.getChildAt(i);
					}
					
				}
				this.loadLvlName = firstLvlName;
				
				this.game = new c.Container();
				stage.addChild(this.game);
				
				this.buildLvl();
				this.buildPlayer();
				this.buildController();
				this.buildSpawner();
				this.player.spawner = this.spawner;
				this.spawner.player = this.player;
				this.spawner.spawn();
				
				this.buildBoundaries();
				this.boundaries.player = this.player;
				
				this.lvl.updateCache();
				
				createjs.Ticker.timingMode = createjs.Ticker.RAF;
				c.Ticker.addEventListener("tick", gameLoop);
				window.addEventListener("keydown", handleKeyDown);
				window.addEventListener("keyup", handleKeyUp);
			}
			
			buildLvl() {
				this.lvl = new lib[this.loadLvlName]();
				this.lvl.x = 0;
				this.lvl.y = 0;
				this.lvl.cache(-40, -40, 1080, 800);
				this.game.addChild(this.lvl);
			}
			
			buildPlayer() {
				this.player = new Player(this);
				//console.log(stage);
				//console.log(stageLib.getChildByName('Boundaries'));
			}	
			
			buildController() {
				this.controller = new PlayerController(this.player);
			}
			
			buildSpawner() {
				this.spawner = new Spawner(this);
			}
			
			buildBoundaries() {
				this.boundaries = new Boundaries(this);
				this.boundaries.addBoundary("ground1", this.lvl.ground1);
				this.boundaries.listBoundary.ground1.addTag("ground");
				this.boundaries.listBoundary.ground1.addTag("border");
				
				this.boundaries.addBoundary("ground2", this.lvl.ground2);
				this.boundaries.listBoundary.ground2.addTag("ground");
				this.boundaries.listBoundary.ground2.addTag("border");
				
				this.boundaries.addBoundary("platforms1", this.lvl.platforms1);
				this.boundaries.listBoundary.platforms1.addTag("platform");
				this.boundaries.listBoundary.platforms1.addTag("ground");
				
			}
			
			tick() {
				
			}
			
			//this.loadLvlName
			//this.game
			//this.lvl
			//this.player
			//this.spawner
			
		}
		class Player {
			
			constructor(gameMode) { //init
				this.gameMode = gameMode;
				this.s = new lib.Player();
				this.death = false;
				this.vx = 0;
				this.vy = 0;
				this.gameMode.game.addChild(this.s);
			}
			
			checkMoveMode() {
				if (this.vy < 0) {
					this.moveMode = gMoveMode.Jump;
				}else{
					this.moveMode = gMoveMode.Fall;
					//check Ground point
					var hit = CheckCollision(this.s.x, this.s.y + gRayCastStepAccurate);
					if (hit.typeHitObject.result) {
						this.moveMode = gMoveMode.Walk;
						this.vy = 0;
					}
				}
				if (this.moveMode != gMoveMode.Walk){
					//gravitate
					this.vy += gGravitate;
				}
				//console.log(this.moveMode);
			}
			
			tick() {
				this.checkMoveMode();
				
				//collisions
				this.processCollisions();
				this.pushNextPositionOutOfBounds();
				//move the player
				this.s.x += this.vx;
				this.s.y += this.vy;
				
				if (this.death) {
					this.spawner.spawn();
				}
			}
			
			processCollisions() {
				//when falling
				if(this.moveMode == gMoveMode.Fall) {
					//respawn if player fell off the stage
					if(this.s.y > h){
						this.death = true;
						this.vy = 0;
					}else{
						
					}
				}else if(this.moveMode == gMoveMode.Walk) {
					if (this.vx != 0){
						//check Low point on deadend
						var hit = CheckCollision(this.s.x + this.vx, this.s.y);
						//console.log(hit);
						if (!(hit.typeHitObject.result)) {
							hit = RayCast(this.s.x, this.s.y, this.s.x + this.vx, this.s.y, gRayCastStepAccurate);
						}
						if (hit.typeHitObject.result) {
							//check stair
							
							hit = RayCast(hit.point.x, hit.point.y - gStairHeight, hit.point.x, hit.point.y, gRayCastStepAccurate);
							if (hit.typeHitObject.result
									&& !hit.point.equal(hit.prevPoint)) {
								this.vx = hit.prevPoint.x - this.s.x;
								// = 0;
								this.s.y = hit.prevPoint.y;
							}
						}
					}
					
				}
				
			}
			
			pushNextPositionOutOfBounds() {
				if (this.vx != 0 || this.vy != 0) {
					var checkedType;
					var needReduceLower = false;
					var needReduceHigher = false;
					var vStart = [];
					var vFin = [];
					var hitCut;
					var vStartCut = [];
					var vRes = [];
					var pointCount = 2;
					var pointToPointOffset = 40;
					var pointOffset = [0];
					var i;
					for (i = 1; i < pointCount; i++) {
						pointOffset[i] = pointOffset[i - 1] - pointToPointOffset;
					}
					
					for (i = 0; i < pointCount; i++) {
						//i == 0 check Low point
						//i == 1 check Middle point
						//i == 2 check High point
						vRes[i] = new Vector2D(this.vx, this.vy);
						vStart[i] = new Vector2D(this.s.x, this.s.y + pointOffset[i]);
						//if point in ground
						hitCut = CheckCollision(vStart[i].x, vStart[i].y);
						if (hitCut.typeHitObject.result) {
							continue;
						}
						
						vFin[i] = new Vector2D(vStart[i].x + vRes[i].x, vStart[i].y + vRes[i].y);
						
						//checkedType = {border:true};
						checkedType = "border";
						if (this.moveMode == gMoveMode.Fall && i == 0){
							checkedType = null;
						}
						
						hitCut = RayCast(vStart[i].x, vStart[i].y, vFin[i].x, vFin[i].y, 
							null, checkedType);
						if (hitCut.typeHitObject.result) {
							vStartCut[i] = hitCut.prevPoint.clone();
							vRes[i] = new Vector2D(hitCut.prevPoint.x - vStart[i].x, hitCut.prevPoint.y - vStart[i].y);
							
							hitCut = RayCast(vStartCut[i].x, vStartCut[i].y, vFin[i].x, vFin[i].y, 
								gRayCastStepAccurate, checkedType);
							if (hitCut.typeHitObject.result) {
								vStartCut[i] = hitCut.prevPoint.clone();
								vRes[i].x = hitCut.prevPoint.x - vStart[i].x;
								vRes[i].y = hitCut.prevPoint.y - vStart[i].y;
							}
							// check need reduce x
							
							if (this.vx != 0 && this.vy != 0) {
								if (i == 0 && this.moveMode != gMoveMode.Jump
										|| i == pointCount - 1 && this.moveMode == gMoveMode.Jump) {
									
									hitCut = RayCast(vStartCut[i].x, vStartCut[i].y, vFin[i].x, vStartCut[i].y, 
										gRayCastStepAccurate, checkedType);
									if (hitCut.typeHitObject.result) {
										vStartCut[i].x = hitCut.prevPoint.x
										vRes[i].x = hitCut.prevPoint.x - vStart[i].x;
									}else{
										vRes[i].x = hitCut.point.x - vStart[i].x;
									}
								}
								// check Low and High point need reduce y
								if (i == 0 
									//&& this.moveMode == gMoveMode.Fall
										|| i == pointCount - 1 
											//&& this.moveMode == gMoveMode.Jump
									) {
									
									hitCut = RayCast(vStartCut[i].x, vStartCut[i].y, vStartCut[i].x, vFin[i].y, 
										gRayCastStepAccurate, checkedType);
									if (hitCut.typeHitObject.result) {
										vRes[i].y = hitCut.prevPoint.y - vStart[i].y;
									}else{
										vRes[i].y = hitCut.point.y - vStart[i].y;
									}
								}/*else if (i == pointCount - 1 && this.moveMode == gMoveMode.Fall) {
									//if check upper point but Fallen then get lower y point
									/*hitCut = RayCast(vStartCut[i].x, vStartCut[i].y - pointOffset[i], vStartCut[i].x, vFin[i].y - pointOffset[i], gRayCastStepAccurate);
									if (hitCut.typeHitObject == gHitObjects.ground) {
										vRes[i].y = hitCut.prevPoint.y - (vStart[i].y - pointOffset[i]);
									}else{
										vRes[i].y = vFin[i].y - vStart[i].y;
									}
								}/*else if (i == 0 && this.moveMode == gMoveMode.Jump) {
									//if check lower point but Jump then get upper y point
									hitCut = RayCast(vStartCut[i].x, vStartCut[i].y + pointOffset[pointCount - 1], vStartCut[i].x, vFin[i].y + pointOffset[pointCount - 1], gRayCastStepAccurate);
									if (hitCut.typeHitObject == gHitObjects.ground) {
										vRes[i].y = hitCut.prevPoint.y - (vStart[i].y + pointOffset[pointCount - 1]);
									}else{
										vRes[i].y = vFin[i].y - vStart[i].y;
									}
								}*/
							}
							
						}
					}
					var direction = 1;
					if (this.vx < 0) {
						direction = -1;
					}
					var minX = vRes[0].x, minXIndex = 0;
					for (i = 0; i < pointCount; i++) {
						if (vRes[i].x * direction < minX * direction) {
							minX = vRes[i].x;
							minXIndex = i;
						}
					}
					
					
					
					var direction = 1;
					if (this.vy > 0) {
						direction = -1;
					}
					var minY = vRes[0].y, minYIndex = 0;
					for (i = 0; i < pointCount; i++) {
						//console.log(direction + " " + vRes[i].y + " > " + minY);
						if (vRes[i].y * direction > minY * direction) {
							minY = vRes[i].y;
							minYIndex = i;
						}
						
					}
					/*console.log("123");
					console.log(minXIndex);
					console.log(minYIndex);
					console.log(vRes);*/
					//check central hight
					if (vRes[minXIndex].x != 0 || vRes[minYIndex].y != 0){
						hitCut = RayCast(vStart[0].x + vRes[minXIndex].x, 
							vStart[0].y + vRes[minYIndex].y, vStart[0].x + vRes[minXIndex].x, 
							vStart[0].y + vRes[minYIndex].y + pointOffset[pointCount -1],
							null, "border");
						
						
						if (hitCut.typeHitObject.result) {
							vRes[minXIndex].x = 0;
							vRes[minYIndex].y = 0;
							hitCut = RayCast(vStart[0].x, vStart[0].y, vStart[0].x, vFin[0].y,
								gRayCastStepAccurate, "border");
							if (hitCut.typeHitObject.result) {
								vRes[minYIndex].y = hitCut.prevPoint.y - vStart[0].y;
							}else{
								vRes[minYIndex].y = hitCut.point.y - vStart[0].y;
							}
							//console.log("hit");
						}
						
					}else if (vRes[minXIndex].x == 0 && vRes[minYIndex].y == 0 ) {
						i = -1;
						if (minYIndex != 0 && this.moveMode == gMoveMode.Fall) {
							i = 0;
						}
						if (minYIndex != pointCount - 1 && this.moveMode == gMoveMode.Jump){
							i = pointCount - 1;
						}
						if (i != -1) {
							/*console.log("check" );
							console.log(vStart[i].y + vRes[minYIndex].y);
							console.log(vStart[i].y + vRes[minYIndex].y + pointOffset[pointCount -1]);
							console.log(hitCut);*/
							hitCut = RayCast(vStart[i].x, vStart[i].y, vStart[i].x, vFin[i].y, 
								gRayCastStepAccurate, "border");
							if (hitCut.typeHitObject.result) {
								vRes[minYIndex].y = hitCut.prevPoint.y - vStart[i].y;
							}else{
								vRes[minYIndex].y = hitCut.point.y - vStart[i].y;
							}
							/*console.log(minXIndex);
							console.log(minYIndex);
							console.log(vRes);
							gPause = true;*/
						}
						
					}
					/*var b = vRes[minXIndex].x == 0;
					console.log(b);
					b = vRes[minYIndex].y == 0;
					console.log(b);
					b = minYIndex != 0;
					console.log(b);*/
					this.vx = vRes[minXIndex].x;
					this.vy = vRes[minYIndex].y;
				
				}
			}
			
			//this.gameMode
			//this.spawner
			//this.s //this is a Symbol properties
			//this.death
			//this.vx //vertical velocity
			//this.vy //horizontal  velocity
			//this.stairResult
		}
		
		class PlayerController {
			
			constructor(player) { //init
				this.player = player;		
				this.gameMode = this.player.gameMode;
				this.btnLeftDown = false;
				this.btnRightDown = false;
				this.btnLeftRightLastDown = 0;
				this.xAxis = 0;
				this.yAxis = 0;
				this.speedStep = 7;
				this.speedJump = 20;
			}
			
			handleKeyDown(e) {
				//console.log(e.keyCode);
				switch (e.keyCode) {
					case 37:	//left
					case 65:
						this.btnLeftDown = true;
						this.btnLeftRightLastDown = -1;
						break;
					case 39:	//right
					case 68:
						this.btnRightDown = true;
						this.btnLeftRightLastDown = 1;
						break;
					case 38:	//up
					case 87:
						this.yAxis = 1;
						break;
					case 40:	//down
					case 83:
						
						break;
					default:
						
				}
				e.preventDefault();
			}
			
			handleKeyUp(e) {
				//console.log(e.keyCode);
				switch (e.keyCode) {
					case 37:	//left
					case 65:
						this.btnLeftDown = false;
						if (this.btnRightDown){
							this.btnLeftRightLastDown = 1;
						}
						break;
					case 39:	//right
					case 68:
						this.btnRightDown = false;
						if (this.btnLeftDown){
							this.btnLeftRightLastDown = -1;
						}
						break;
					case 38:	//up
					case 87:
						
						break;
					case 40:	//down
					case 83:
						
						break;
					case 80:	//pause
						gPause = !gPause;
						break;
					case 66:	//gBool
						gBool = !gBool;
						break;
					default:
						
				}
				e.preventDefault();
			}
			
			tick() {
				this.xAxis = 0;
				if (this.btnLeftDown && this.btnLeftRightLastDown < 0){
					this.xAxis = -1;
				}
				if (this.btnRightDown && this.btnLeftRightLastDown > 0){
					this.xAxis = 1;
				}
				
				this.player.vx = this.xAxis * this.speedStep;	
				
				if (this.yAxis > 0) {
					this.player.vy = this.yAxis * -20;
					this.yAxis = 0;
				}
			}
			
			//this.gameMode
			//this.spawner
			//this.s //this is a Symbol properties
			//this.death
			//this.xAxis
			//this.yAxis
			//this.speedStep
		}
		
		class Spawner {
		
			constructor(gameMode) { //init
				this.gameMode = gameMode
				this.s = this.gameMode.lvl.spawn;
				this.s.visible = false;
			}
		
			spawn() {
				this.player.s.x = this.s.x;
				this.player.s.y = this.s.y;
				this.player.death = false;
			}
			
			tick() {
				
			}
			
			//gameMode
			//this.s; //symbol properties
			//this.player;
		}
		class Boundaries {
			
			constructor(gameMode) { //init
				this.gameMode = gameMode;
				//this.s = symbol;
				this.listBoundary = {};
			}
			
			addBoundary(name,symbol) {
				var res = false;
				if (!(name in this.listBoundary)) {
					this.listBoundary[name] = new Boundary(symbol);
					res = true;
				}
				return res;
			}
			
			checkCollisionAll(x, y) {
				var res = [];
				for(var name in this.listBoundary) { 
					if (this.listBoundary[name].checkCollision(x, y)) {
						res.push(name);
					}
				}
				return res;
			}
			
			checkCollisionByTag(x, y, tag, needNames) {
				needNames = needNames || false;
				var res = {result:false, collisionNames:[]};
				//var listObjects = this.gameMode.game.getObjectsUnderPoint(x,y);
				for(var name in this.listBoundary) { 
					
					if (this.listBoundary[name].haveTag(tag) && this.listBoundary[name].checkCollision(x, y)) {
						res.result = true;
						if (!needNames){
							break;
						}
						res.collisionNames.push(name);
					}
				}
				return res;
			}
			
			checkCollisionByOneOfTags(x, y, tags) {
				var res = {result:false, tags:{}};
				var resTags;
				for(var name in this.listBoundary) { 
					resTags = this.listBoundary[name].haveOneOfTags(tags);
					if (resTags.result && this.listBoundary[name].checkCollision(x, y)) {
						for(var nameTag in resTags.tags) {
							if (resTags.tags[nameTag]) {
								res.result = true;
								if (!(nameTag in res.tags)) {
									res.tags[nameTag] = [];
								}
								res.tags[nameTag].push(name);
							}
						}
					}
				}
				return res;
			}
			
			tick() {
				
			}
			
			//gameMode
			//this.s; //symbol properties
			//this.player;
		}
		class Boundary {
			
			constructor(symbol) { //init
				this.s = symbol;
				this.tags = {};
			}
			
			addTag(tag) {
				var res = false;
				if (!this.haveTag(tag)) {
					this.tags[tag] = true;
					res = true;
				}
				return res;
			}
			
			haveTag(tag) {
				var res = false;
				if (tag in this.tags) {
					res = true;
				}
				return res;
			}
			
			haveOneOfTags(tags) {
				var res = {result:false, tags:{}};
				for(var name in tags) {
					res[name] = false;
					if (name in this.tags) {
						res.tags[name] = true;
						res.result = true;
					}
				}
				return res;
			}
			
			checkCollision(x, y) {
				var res = false;
				if (this.s.hitTest(x, y)) {
					res = true;
				}
				return res;
			}
			
			//this.s;
			//this.tags;
		}
		var c = createjs, w = 800, h = 600;
		var stageLib; //object on stage from lib
		var firstLvlName = "Lvl1";
		var gGravitate = 2;
		var gRayCastStep = 2;
		var gRayCastStepAccurate = 0.5;
		var gMaxRayCastSteps = 50;
		var gMoveMode = {Walk:0, Fall:-1, Jump:1}
		var gHitObjects = {ground:1, platform:2};
		var gStairDistance = 8;
		var gStairHeight = 10;
		var gPause = false;
		var gBool = false;
		
		class Vector2D {
			constructor(x,y) { //init
				x = x || 0;
				y = y || 0;
				this.x = x;
				this.y = y;
			}
			
			equal(vector) {
				var res = false;
				if (this.x == vector.x && this.y == vector.y){
					 res = true;
				}
				return res;
			}
			
			clone() {
				var res = new Vector2D(this.x, this.y);
				return res;
			}
			
			vPlusV(vector) {
				var res = new Vector2D(this.x, this.y);
				res.x += vector.x;
				res.y += vector.y;
				return res;
			}
			
			vMinusV(vector) {
				var res = new Vector2D(this.x, this.y);
				res.x -= vector.x;
				res.y -= vector.y;
				return res;
			}
			
			vIncreaseF(val) {
				var res = new Vector2D(this.x, this.y);
				res.x *= val;
				res.y *= val;
				return res;
			}
			
			vNormalize() {
				var res = new Vector2D(this.x, this.y);
				res.x = this.x / Math.abs(this.vLength());
				res.y = this.y / Math.abs(this.vLength());
				return res;
			}
			
			vLength() {
				var res = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
				return res;
			}
		}
		
		class Hit {
			constructor(point, typeHitObject, hitError) { //init
				
				this.point = point || new Vector2D(0,0);
				this.prevPoint = this.point;
				this.typeHitObject = typeHitObject || {result:false,collisionNames:[]};
				this.hitError = hitError || 0;
			}
			
			//this.prevPoint;
			//this.hitError; // 0 - нет ошибки, 1 - превышен лимит шагов
		}
		
		function handleKeyDown(e) {
			gm.controller.handleKeyDown(e);
		}
		
		function handleKeyUp(e) {
			gm.controller.handleKeyUp(e);
		}
		
		function CheckCollision(x, y, tag){
			//tags = tags || {border:true, ground:true, platform:true}
			tag = tag || "ground";
			var res = new Hit(new Vector2D(x, y));
			res.prevPoint = res.point.clone();
			//check boundaries layer
			//var namesBoundary = gm.boundaries.checkCollisionByOneOfTags(res.point.x, res.point.y, tags);
			var namesBoundary = gm.boundaries.checkCollisionByTag(res.point.x, res.point.y, tag);
			if (namesBoundary.result){
				res.typeHitObject = namesBoundary;
			}
			//console.log(namesBoundary);
			return res;
		}
		
		function RayCast(startX, startY, finX, finY, step, tag) {
			var step = step || gRayCastStep;
			var vStart = new Vector2D(startX,startY);
			var vFin = new Vector2D(finX,finY);
			var vHitPoint = new Vector2D(vStart.x,vStart.y);
			var vOldHitPoint = new Vector2D(vHitPoint.x,vHitPoint.y);
			var res = new Hit(vHitPoint);
			
			var vStepNormalize = vFin.vMinusV(vStart).vNormalize();
			var vStep = vStepNormalize.vIncreaseF(step);
			
			var vFinLength = vFin.vMinusV(vStart).vLength();
			var vNextHitPoint;
			var i = 0;
			while (i < gMaxRayCastSteps 
					&& res.typeHitObject.result == false
					&& vHitPoint.vMinusV(vStart).vLength() <= vFinLength){
				
				//check hit point
				vOldHitPoint = res.point.clone();
				res = CheckCollision(vHitPoint.x, vHitPoint.y, tag);
				res.prevPoint = vOldHitPoint.clone();
						
				//raycast step
				vNextHitPoint = vHitPoint.vPlusV(vStep);
				if (vNextHitPoint.vMinusV(vStart).vLength() > vFinLength 
						&& vHitPoint.vMinusV(vStart).vLength() < vFinLength) {
					vHitPoint = vFin.clone();
					
				}else{
					vHitPoint = vNextHitPoint.clone();
				}
				i++;
			}
			
			if (i >= gMaxRayCastSteps){
				res.hitError = 1;
			}
			
			return res;
		}
		var currentTime, previousTime;
		var pastTime;
		var miliSeconds = 0;
		var countFrames;
		function gameLoop() {
			currentTime = (new Date()).getTime();
			gm.tick();
			if (!gPause) {
				gm.controller.tick();
				gm.player.tick();
				gm.spawner.tick();
				gm.boundaries.tick();
			}
			pastTime = (new Date()).getTime() - currentTime;
			//console.log(pastTime);
			
			//for (var i = 0; i < 50; i++){
				//var hit = stage.hitTest(0, 0);
			//}
			
			
			fpsLabel.text = Math.round(createjs.Ticker.getMeasuredFPS()) + " fps";
		}
		
		var gm = new GameMode();
		
		fpsLabel = new createjs.Text("-- fps", "bold 18px Arial", "#000");
		stage.addChild(fpsLabel);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];
// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;