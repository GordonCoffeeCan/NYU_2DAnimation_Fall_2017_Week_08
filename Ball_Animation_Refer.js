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


(lib.tennis_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,0,3).p("ADFAAQAABSg5A6Qg6A5hSAAQhRAAg6g5Qg5g6AAhSQAAhRA5g6QA6g5BRAAQBSAAA6A5QA5A6AABRg");
	this.shape.setTransform(19.7,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiLCMQg5g6AAhSQAAhRA5g6QA6g5BRAAQBSAAA6A5QA5A6AABRQAABSg5A6Qg6A5hSAAQhRAAg6g5g");
	this.shape_1.setTransform(19.7,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tennis_mc, new cjs.Rectangle(-1.5,-1.5,42.5,42.5), null);


(lib.golf_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,0,3).p("AByAAQAAAvghAiQgiAhgvAAQguAAgighQghgiAAgvQAAguAhgiQAighAuAAQAvAAAiAhQAhAiAAAug");
	this.shape.setTransform(11.4,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhQBRQghgiAAgvQAAguAhgiQAighAuAAQAvAAAiAhQAhAiAAAuQAAAvghAiQgiAhgvAAQguAAgighg");
	this.shape_1.setTransform(11.4,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.golf_mc, new cjs.Rectangle(-1.5,-1.5,25.8,25.8), null);


// stage content:
(lib.Ball_Animation_Refer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.golf_mc();
	this.instance.parent = this;
	this.instance.setTransform(222.1,-42.9,1,1,0,0,0,11.4,11.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({guide:{path:[222.1,-42.9,286.3,-43.2,347.7,-23.1,402.5,-5.1,452,28,496.2,57.5,531.4,95.7,563.4,130.6,582.1,166,582.1,166,582.1,166]}},5,cjs.Ease.get(-0.02)).to({guide:{path:[582.1,166.1,578.3,165.6,571.2,170.8,557,181.2,541,209.7,489.8,300.9,439.1,539,439.1,538.8,439,538.5]}},5,cjs.Ease.get(-0.02)).to({guide:{path:[439.1,538.5,411,401.4,382.1,360.4,358.2,326.5,334.8,359.8,331.6,364.3,328.4,370]}},4,cjs.Ease.get(0.02)).to({guide:{path:[328.4,370.1,313.7,396.8,300.3,448.8,288.7,493.8,282.1,539.1,282.1,539.1,282.1,539.1]}},3,cjs.Ease.get(-0.02)).to({guide:{path:[282.1,539,267.4,461,250.5,428.1,240.8,409.2,230.6,405.7]}},3,cjs.Ease.get(0.02)).to({guide:{path:[230.6,405.7,224.8,403.6,218.9,406.7,204.2,414.1,190,451.4,177.1,485.4,166.7,538.5]}},3,cjs.Ease.get(-0.02)).to({guide:{path:[166.7,538.6,166.7,538.8,166.6,539,163.9,525.7,159,508.9,149.2,475.5,138.3,458.8,132.3,449.6,126.3,446.1]}},3,cjs.Ease.get(0.02)).to({guide:{path:[126.3,446.1,117.1,440.7,107.9,448.8,89,465.4,71.2,538.4]}},2,cjs.Ease.get(-0.02)).to({guide:{path:[71.3,538.4,71.2,538.7,71.1,539,59,511.2,46.5,498.8,34.1,486.3,21.3,489.1]}},2,cjs.Ease.get(0.02)).to({guide:{path:[21.2,489.1,20.2,489.3,19.2,489.6,8.3,493,-1.8,507.3,-10.8,519.9,-17.9,539]}},2,cjs.Ease.get(-0.02)).wait(1));

	// tennis
	this.instance_1 = new lib.tennis_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(222.1,-43,1,1,0,0,0,19.7,19.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:582.2,y:166.1},8,cjs.Ease.get(-0.02)).to({x:308,y:538.7},7,cjs.Ease.get(-0.02)).to({x:230.4,y:445.7},3,cjs.Ease.get(0.02)).to({x:151.2,y:538.5},3,cjs.Ease.get(-0.02)).to({x:95.4,y:490},3,cjs.Ease.get(0.02)).to({x:36.4,y:537.6},2,cjs.Ease.get(-0.02)).to({x:0,y:513.4},2,cjs.Ease.get(0.02)).to({x:-61,y:539},2,cjs.Ease.get(-0.02)).to({_off:true},1).wait(36));

	// pole
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("Ag7vNIhugXIAAxgIFTBGIAARgIh4gZgAAyu3MAAAAv8IhtgeMAAAgv0");
	this.shape.setTransform(594,332.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgA7AgnMAAAgv0IBtAWMAAAAv8gAAyu3IhtgWIhugXIAAxgIFTBGIAARgg");
	this.shape_1.setTransform(594,332.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AhKC5IAoBQAgTAFIBeAoAgxiuIBUha");
	this.shape_2.setTransform(609.4,167.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AiPpYIFQBTIgxRfIh3geIhsgbIhtgcg");
	this.shape_3.setTransform(601.7,182.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaI8IhtgbIhsgcIAwxeIFPBUIgwRfg");
	this.shape_4.setTransform(601.7,182.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3,1,1).p("ABL3yQgwXyAIYKIhtgeQgB36Ap37");
	this.shape_5.setTransform(595.5,389.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhKXsQgB36Ap37IBtAXQgwXyAIYKg");
	this.shape_6.setTransform(595.5,389.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:609.4,y:167.1}}]},8).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:605.4,y:168.1}}]},30).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(600.9,235.8,411.7,610.2);
// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 12,
	color: "#999999",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;