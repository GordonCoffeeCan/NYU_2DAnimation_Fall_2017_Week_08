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


(lib.Bolling_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,0,3).p("AHuAAQAADNiQCRQiRCQjNAAQjMAAiQiQQiRiRAAjNQAAjMCRiQQCQiRDMAAQDNAACRCRQCQCQAADMg");
	this.shape.setTransform(0.2,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AldFdQiPiRgBjMQABjLCPiSQCSiPDLgBQDMABCRCPQCRCSAADLQAADMiRCRQiRCRjMAAQjLAAiSiRg");
	this.shape_1.setTransform(0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bolling_mc, new cjs.Rectangle(-50.7,-50.7,101.7,101.7), null);


(lib.bollingAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bolling_mc();
	this.instance.parent = this;
	this.instance.setTransform(-47.9,61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-47.8,61.1,48.8,77.5,109,197,169.2,316.5,193.1,539.1]}},9,cjs.Ease.get(-0.02)).to({x:436.5,y:541.7},17,cjs.Ease.get(0.02)).to({x:454.7,y:618.7},4).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoABoQjUgqgBg+QABg8DUgsQDUgrEsAAQEtAADUArQDVAsAAA8QAAA+jVAqQjUAsktAAQksAAjUgsg");
	this.shape.setTransform(474.7,580.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.6,10.4,645.9,584.8);


// stage content:
(lib.Ball_Animation_Refer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg9GBAFMAAAiAJMB6NAAAMAAACAJgEAXzAlyQjUArAAA9QAAA+DUArQDVAsEsAAQEtAADUgsQDVgrAAg+QAAg9jVgrQjUgsktABQksgBjVAsg");
	mask.setTransform(271.1,328.1);

	// Layer 5
	this.instance = new lib.bollingAnim_mc();
	this.instance.parent = this;
	this.instance.setTransform(224.3,302.8,1,1,0,0,0,224.3,302.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(301.4,310.4,645.9,584.8);
// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;