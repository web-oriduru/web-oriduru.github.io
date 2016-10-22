var width;
var height;
var dw;
var dh;
var x;
var canvas;
var ctx;
var touch_x=0;
var touch_y=0;
//------
var circle_num=5;
var circle =new Array(circle_num);
var click_count=0;
var circle_stop=-1;
var circle_timer=0;
var ball_num=10;
var ball=new Array(ball_num);
var oriduru_count=0;
var img_back;
var img_fore;
//------------------------------------------------------------------------------
function load(){
    document.body.addEventListener('touchmove', function(e){e.preventDefault();});
    var ncmb = new NCMB("ff35ae3dd5a5aa93d58f4981e263cf74a9e9a1de08088807440a75b62e64bfd1","3e58744998bc64a634d8bb28a5e3237eb7ae8b2047252225dc501eedf62d0dbc");
    
    /*
    var TestClass = ncmb.DataStore("TestClass");
    // データストアへの登録
    var testClass = new TestClass();
    testClass.set("message", "Hello, NCMB!");
    testClass.save()
        .then(function(){})
    .catch(function(err){});
    
    //データ取得
    var GameScore = ncmb.DataStore("TestClass");
    GameScore.fetchAll()
    .then(function(results){
          oriduru_count = results.length;
    })
    .catch(function(err){
           oriduru_count = 1;
    });
      */
    
    
    
    /*
    var text1 = "「Webおりづる」で折り鶴をおりました　「";
    var text2 = "ここにコメント";
    var text3 = "」 web-oriduru.github.io";
    location.href = "https://twitter.com/intent/tweet?text="+ encodeURIComponent(text1)+ encodeURIComponent(text2)+ encodeURIComponent(text3)+"&hashtags=web_oriduru";
    */
    
    
    
    
    
    
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	x=0;
	var t=new Date();
    img_back = new Image();
    img_back.src="resources/back01.png?"+t.getTime();
    img_fore = new Image();
    img_fore.src="resources/fore01.png?"+t.getTime();
    
    circle_timer=t.getTime();
	circle[0]=new Array(10,10,5,255,0,0,255,0,0);
	circle[1]=new Array(10,10,5,200,0,0,255,0,0);
	circle[2]=new Array(10,10,5,150,0,0,255,0,0);
	circle[3]=new Array(10,10,5,100,0,0,255,0,0);
	circle[4]=new Array(10,10,5, 50,0,0,255,0,0);
	ball[0]=new Array(1080*Math.random(),1920*Math.random(),10,100,100,0,255,-1+2*Math.random(),-1+2*Math.random());
	ball[1]=new Array(1080*Math.random(),1920*Math.random(),10,0,100,100,255,-1+2*Math.random(),-1+2*Math.random());
	ball[2]=new Array(1080*Math.random(),1920*Math.random(),10,100,0,100,255,-1+2*Math.random(),-1+2*Math.random());
	ball[3]=new Array(1080*Math.random(),1920*Math.random(),10,200,200,0,255,-1+2*Math.random(),-1+2*Math.random());
	ball[4]=new Array(1080*Math.random(),1920*Math.random(),10,0,200,200,255,-1+2*Math.random(),-1+2*Math.random());
	ball[5]=new Array(1080*Math.random(),1920*Math.random(),10,200,0,200,255,-1+2*Math.random(),-1+2*Math.random());
	ball[6]=new Array(1080*Math.random(),1920*Math.random(),10,200,0,0,255,-1+2*Math.random(),-1+2*Math.random());
	ball[7]=new Array(1080*Math.random(),1920*Math.random(),10,0,200,0,255,-1+2*Math.random(),-1+2*Math.random());
	ball[8]=new Array(1080*Math.random(),1920*Math.random(),10,0,0,200,255,-1+2*Math.random(),-1+2*Math.random());
	ball[9]=new Array(1080*Math.random(),1920*Math.random(),10,200,200,200,255,-1+2*Math.random(),-1+2*Math.random());
	loop();
}
//------------------------------------------------------------------------------
function loop() {
	sizing();
	var timer=0+new Date();
	x++;
	move();
	draw();
	timer=16-(new Date()-timer);
	if(timer<0) timer=0;
	setTimeout("loop()", timer);
}
//------------------------------------------------------------------------------
function move(){
	//----
	for(var i=0;i<circle_num;i++){
		if(i!=circle_stop){
			circle[i][0]+=circle[i][7];
			circle[i][1]+=circle[i][8];
			circle[i][7]+=-0.05+0.1*Math.random();
			circle[i][8]+=-0.05+0.1*Math.random();
		}
	}
	circle[click_count][0]+=(touch_x-circle[click_count][0])/100;
	circle[click_count][1]+=(touch_y-circle[click_count][1])/100;
	var t=new Date();
	if(t.getTime()-circle_timer>500){
		circle[click_count][7]=-0.1+0.2*Math.random();
		circle[click_count][8]=-0.1+0.2*Math.random();
		click_count++;
		if(click_count>=circle_num) click_count=0;
		if(circle_stop==click_count) click_count++;
		if(click_count>=circle_num) click_count=0;
		circle_timer=t.getTime();
	}
	//----
	for(var i=0;i<ball_num;i++){
		var l=false;
		var r=false;
		var t=false;
		var b=false;
		for(var j=0;j<circle_num;j++){
			if(ball[i][0]>circle[j][0]) l=true;
			if(ball[i][0]<circle[j][0]) r=true;
			if(ball[i][1]>circle[j][1]) t=true;
			if(ball[i][1]<circle[j][1]) b=true;
		}
		if(l && r && t && b){
			var x=0,y=0;
			for(var j=0;j<circle_num;j++){
				x+=circle[j][0];
				y+=circle[j][1];
			}
			ball[i][0]+=((x/circle_num)-ball[i][0])/100;
			ball[i][1]+=((y/circle_num)-ball[i][1])/100;
		}else{
			ball[i][0]+=ball[i][7];
			ball[i][1]+=ball[i][8];
			if(ball[i][0]<0) ball[i][7]*=-1;
			if(ball[i][0]>1080) ball[i][7]*=-1;
			if(ball[i][1]<0) ball[i][8]*=-1;
			if(ball[i][1]>1920) ball[i][8]*=-1;
		}
	}
}
//------------------------------------------------------------------------------
function draw() {
	//if(circle_stop==-1) drawRect(1080/2,1920/2,1080,1920,255,255,255,255);
	//else drawRect(1080/2,1920/2,1080,1920,0,0,0,255);
	drawRect(1080/2,1920/2,1080,1920,0,0,0,255);
    /*
	//----
	for(var i=0;i<ball_num;i++){
		drawCircle(ball[i][0]+50*Math.random(),ball[i][1]+50*Math.random(),ball[i][2],ball[i][3],ball[i][4],ball[i][5],ball[i][6]);
		drawCircle(ball[i][0]+50*Math.random(),ball[i][1]+50*Math.random(),ball[i][2],ball[i][4],ball[i][5],ball[i][3],ball[i][6]);
		drawCircle(ball[i][0]+50*Math.random(),ball[i][1]+50*Math.random(),ball[i][2],ball[i][5],ball[i][3],ball[i][4],ball[i][6]);
	}
	//----
	if(circle_stop!=-1){
		drawCircle(circle[circle_stop][0]-10+20*Math.random(),circle[circle_stop][1]-10+20*Math.random(),circle[circle_stop][2]*3,255,0,0,255);
		drawCircle(circle[circle_stop][0]-10+20*Math.random(),circle[circle_stop][1]-10+20*Math.random(),circle[circle_stop][2]*3,0,255,0,255);
		drawCircle(circle[circle_stop][0]-10+20*Math.random(),circle[circle_stop][1]-10+20*Math.random(),circle[circle_stop][2]*3,0,0,255,255);
		drawCircle(circle[circle_stop][0]-10+20*Math.random(),circle[circle_stop][1]-10+20*Math.random(),circle[circle_stop][2]*3,255,255,0,255);
		drawCircle(circle[circle_stop][0]-10+20*Math.random(),circle[circle_stop][1]-10+20*Math.random(),circle[circle_stop][2]*3,255,0,255,255);
		drawCircle(circle[circle_stop][0]-10+20*Math.random(),circle[circle_stop][1]-10+20*Math.random(),circle[circle_stop][2]*3,0,255,255,255);
	}
	for(var i=0;i<circle_num;i++) drawCircle(circle[i][0],circle[i][1],circle[i][2],circle[i][3],circle[i][4],circle[i][5],circle[i][6]);
	for(var i=0;i<circle_num-1;i++) drawLine(circle[i][0],circle[i][1],circle[i+1][0],circle[i+1][1],200,0,0,255);
	drawLine(circle[0][0],circle[0][1],circle[4][0],circle[4][1],200,0,0,255);
	for(var i=0;i<circle_num-2;i++) drawLine(circle[i][0],circle[i][1],circle[i+2][0],circle[i+2][1],200,0,0,255);
	drawLine(circle[0][0],circle[0][1],circle[3][0],circle[3][1],200,0,0,255);
	drawLine(circle[1][0],circle[1][1],circle[4][0],circle[4][1],200,0,0,255);
    */
    //----
    ctx.globalCompositeOperation="source-over";
    drawImage(img_back, 0, 0, 1080, 1920);
    drawImage(img_fore, 0, 0, 1080, 1920);
    
    setFontSize(32);
    ctx.fillStyle ='rgb(255,255,255)';
    ctx.fillText("touch_x : "+touch_x,50,100+30*0);
    ctx.fillText("touch_y : "+touch_y,50,100+30*1);
	var t=new Date();
	ctx.fillText("timer   : "+t.getTime(),50,100+30*2);
    ctx.fillText("count   : "+oriduru_count,50,100+30*4);
}
//------------------------------------------------------------------------------
function setFontSize(size){
    var font_size = size * (dw+dh)/2;
    ctx.font = font_size + "pt 'メイリオ'";
}
//------------------------------------------------------------------------------
function drawImage(img,x,y,w,h){
    ctx.drawImage(img, x*dw, y*dh, w*dw, h*dh);
}
//------------------------------------------------------------------------------
function drawLine(x1,y1,x2,y2,r,g,b,a){
	ctx.globalCompositeOperation="lighter";
	ctx.strokeStyle ='rgba('+r+','+g+','+b+','+a+')';
	ctx.beginPath();
	ctx.moveTo(x1*dw,y1*dh);
	ctx.lineTo(x2*dw,y2*dh);
	ctx.stroke();
}
//------------------------------------------------------------------------------
function drawRect(x,y,w,h,r,g,b,a){
	ctx.globalCompositeOperation="lighter";
	ctx.fillStyle ='rgba('+r+','+g+','+b+','+a+')';
	ctx.fillRect((x-w/2)*dw, (y-h/2)*dh, w*dw, h*dh);
}
//------------------------------------------------------------------------------
function drawCircle(x,y,r,red,green,blue,alpha){
	ctx.globalCompositeOperation="lighter";
	ctx.fillStyle ='rgba('+red+','+green+','+blue+','+alpha+')';
	ctx.beginPath();
	ctx.arc(x*dw,y*dw,r+(dw+dw)/2,0,2*Math.PI,true);
	ctx.fill();
}
//------------------------------------------------------------------------------
if(window.TouchEvent){
    if(document.addEventListener){
        // タッチを開始すると実行されるイベント
        document.addEventListener("touchstart",TouchEventFunc);
        // タッチしたまま平行移動すると実行されるイベント
        document.addEventListener("touchmove",TouchEventFunc);
        // タッチを終了すると実行されるイベント
        document.addEventListener("touchend",TouchEventFunc);
    }
}
//------------------------------------------------------------------------------
//タッチイベントを設定
function TouchEventFunc(e){
    // TouchList オブジェクトを取得
    var touch_list = e.changedTouches;
    var num = touch_list.length;
    for(var i=0;i < num;i++){
        var touch = touch_list[i];// Touch オブジェクトを取得
        console.log(touch);// 出力テスト
    }
    touch_x = touch_list[0].pageX/dw;
    touch_y = touch_list[0].pageY/dh;
    
}
//------------------------------------------------------------------------------
document.onmousemove = function (e){
    //if(!window.TouchEvent){
        if(!e) e = window.event; // レガシー
        touch_x = e.clientX/dw;
        touch_y = e.clientY/dh;
        var scroll_pos = DocumentGetScrollPosition(document);
        touch_x += scroll_pos.x/dw;
        touch_y += scroll_pos.y/dh;
    //}
};
//------------------------------------------------------------------------------
document.onmousedown = function (e){
    //if(!window.TouchEvent){
        if(!e) e = window.event; // レガシー
        if(circle_stop==-1){
            circle_stop=click_count;
            click_count++;
            if(click_count>=circle_num) click_count=0;
        }
        else circle_stop=-1;
    //}
};
//------------------------------------------------------------------------------
function DocumentGetScrollPosition(document_obj){
    return{
	x:document_obj.body.scrollLeft || document_obj.documentElement.scrollLeft,
	y:document_obj.body.scrollTop  || document_obj.documentElement.scrollTop
    };
}
//------------------------------------------------------------------------------
function sizing(){
	width = document.getElementById("wrapper").clientWidth;
	height=width*1.7777777;
	var c = document.getElementById("canvas");
	c.width=width;
	c.height=height;
	dw=width/1080.0;
	dh=height/1920.0;
}
