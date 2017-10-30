(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


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


(lib.ball_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#000000","#747474"],[0.122,0.788,1],-24.4,-27.4,0,-24.4,-27.4,83.5).s().p("AlBFCQiFiFAAi9QAAi7CFiGQCGiFC7AAQC9AACFCFQCFCGAAC7QAAC9iFCFQiFCFi9AAQi7AAiGiFg");
	this.shape.setTransform(45.5,45.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball_mc, new cjs.Rectangle(0,0,91,91), null);


// stage content:
(lib.bouncingball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ball_mc();
	this.instance.parent = this;
	this.instance.setTransform(-12,61.1,1,1,0,0,0,45.5,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.99,rotation:5.2,x:2.6,y:61.9},0).wait(1).to({scaleY:0.98,rotation:10.5,x:17.5,y:64.4},0).wait(1).to({scaleX:1,scaleY:0.97,rotation:15.9,x:32.4,y:68.6},0).wait(1).to({scaleY:0.96,rotation:21.3,x:46.9,y:74.6},0).wait(1).to({scaleY:0.95,rotation:26.9,x:60.8,y:82.1},0).wait(1).to({scaleY:0.94,rotation:32.4,x:74.1,y:90.8},0).wait(1).to({scaleY:0.93,rotation:38.1,x:87.4,y:101.4},0).wait(1).to({scaleX:1,scaleY:0.92,rotation:43.8,x:99.9,y:113.4},0).wait(1).to({scaleY:0.91,rotation:49.6,x:111.5,y:126.1},0).wait(1).to({scaleY:0.9,rotation:55.5,x:122,y:139.7},0).wait(1).to({scaleY:0.89,rotation:61.5,x:131.7,y:153.6},0).wait(1).to({regX:45.6,regY:45.4,scaleY:0.88,rotation:67.6,x:140.8,y:168.6},0).wait(1).to({regX:45.5,regY:45.5,scaleY:0.87,rotation:68.7,x:149.1,y:183.9},0).wait(1).to({scaleY:0.87,rotation:69.7,x:157.4,y:201.1},0).wait(1).to({scaleY:0.86,rotation:70.8,x:165,y:219},0).wait(1).to({scaleY:0.86,rotation:72,x:172.1,y:237.5},0).wait(1).to({scaleY:0.85,rotation:73.2,x:178.4,y:256.7},0).wait(1).to({scaleY:0.84,rotation:74.4,x:184.6,y:277.6},0).wait(1).to({scaleY:0.83,rotation:75.8,x:190.6,y:301.6},0).wait(1).to({scaleY:0.83,rotation:77.4,x:196.4,y:329.2},0).wait(1).to({regX:45.6,regY:45.3,scaleY:0.81,rotation:80.3,x:204.4,y:379.2},0).to({regX:45.4,regY:45.6,scaleX:0.87,scaleY:1.11,rotation:-90,guide:{path:[204.4,379.3,206.5,395.5,208.1,412.5,208.1,412.4,208.1,412.4]}},1,cjs.Ease.get(-0.01)).wait(1).to({regX:45.5,regY:45.5,scaleX:0.93,scaleY:1.03,rotation:-75.8,x:226,y:350.8},0).wait(1).to({scaleX:0.96,scaleY:0.99,rotation:-68.8,x:235.6,y:324.2},0).wait(1).to({scaleX:0.98,scaleY:0.95,rotation:-63,x:244.7,y:301.9},0).wait(1).to({scaleX:1,scaleY:0.92,rotation:-57.8,x:253.4,y:282.9},0).wait(1).to({regX:45.2,regY:45.7,scaleX:1.02,scaleY:0.89,rotation:-53.1,x:262.1,y:266.3},0).wait(1).to({regX:45.5,regY:45.5,scaleX:1.02,scaleY:0.91,rotation:-44.4,x:272.5,y:249.1},0).wait(1).to({scaleX:1.01,scaleY:0.93,rotation:-36.2,x:283.2,y:234.6},0).wait(1).to({scaleX:1.01,scaleY:0.94,rotation:-28.4,x:294.3,y:222.7},0).wait(1).to({scaleX:1.01,scaleY:0.96,rotation:-20.9,x:305.3,y:214.2},0).wait(1).to({scaleX:1,scaleY:0.97,rotation:-13.7,x:318.7,y:208},0).wait(1).to({scaleX:1,scaleY:0.99,rotation:-6.7,x:334.2,y:206.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:349.3,y:210.3},0).wait(1).to({scaleY:1,rotation:3.4,x:353.3,y:212.1},0).wait(1).to({scaleY:0.99,rotation:10.5,x:362.5,y:217.5},0).wait(1).to({scaleX:1,scaleY:0.98,rotation:19.7,x:374.3,y:227.7},0).wait(1).to({scaleY:0.97,rotation:30.5,x:385.9,y:241.7},0).wait(1).to({scaleY:0.95,rotation:42.8,x:396.2,y:258.3},0).wait(1).to({scaleX:1,scaleY:0.94,rotation:56.7,x:405.2,y:276.4},0).wait(1).to({regX:45.6,regY:45.4,scaleY:0.92,rotation:72.6,x:413.4,y:296.2},0).wait(1).to({regX:45.5,regY:45.5,scaleY:0.89,rotation:73.9,x:422.4,y:322.8},0).wait(1).to({regX:45.8,regY:45.3,scaleX:1,scaleY:0.83,rotation:76.6,x:438.1,y:379.3},0).to({regX:45.4,regY:45.6,scaleX:0.9,scaleY:1.15,rotation:-90,guide:{path:[438.1,379.3,441.7,394.1,446.1,412.4,446.1,412.4,446.1,412.4]}},1,cjs.Ease.get(-0.01)).wait(1).to({regX:45.5,regY:45.5,scaleX:0.9,scaleY:1.05,rotation:-70,x:457.2,y:385.1},0).wait(1).to({scaleX:0.9,scaleY:0.98,rotation:-56.1,x:468.5,y:367.9},0).wait(1).to({scaleX:0.9,scaleY:0.91,rotation:-43.6,x:480.6,y:354.7},0).wait(1).to({regX:45.6,regY:45.7,scaleY:0.85,rotation:-32.1,x:493.4,y:345.2},0).wait(1).to({regX:45.5,regY:45.5,scaleX:0.93,scaleY:0.9,rotation:-21.5,x:506.9,y:338.5},0).wait(1).to({scaleX:0.96,scaleY:0.94,rotation:-12.1,x:520.4,y:335},0).wait(1).to({scaleX:0.99,scaleY:0.98,rotation:-4.2,x:532,y:333.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:538.2,y:334.2},0).wait(1).to({scaleY:0.99,rotation:9.8,x:547.2,y:335.2},0).wait(1).to({scaleY:0.98,rotation:26.7,x:562.1,y:339.5},0).wait(1).to({regX:45.6,regY:45.3,scaleY:0.96,rotation:54.5,x:584.4,y:354.2},0).wait(1).to({regX:45.5,regY:45.5,scaleY:0.97,rotation:56.9,x:588.2,y:358.2},0).wait(1).to({scaleY:0.97,rotation:61.1,x:595,y:366.1},0).wait(1).to({scaleY:0.98,rotation:66.4,x:602.3,y:376.6},0).wait(1).to({regX:45.6,scaleY:1,rotation:75,x:612,y:394.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(262.5,255.6,91,91);
// library properties:
lib.properties = {
	width: 640,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;