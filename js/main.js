var width;
var height;
var dw;
var dh;
var canvas;
var ctx;
var touching = false;
var touch_x=0;
var touch_y=0;
var timer;
//------
var oriduru_count
var paper;
var oridurus = new Array(80);
//------------------------------------------------------------------------------
function load(){
    /*
    var ncmb = new NCMB("ff35ae3dd5a5aa93d58f4981e263cf74a9e9a1de08088807440a75b62e64bfd1","3e58744998bc64a634d8bb28a5e3237eb7ae8b2047252225dc501eedf62d0dbc");
     
    // データストアへの登録
    var TestClass = ncmb.DataStore("TestClass");
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
    
    /*
    var input_text = window.prompt("おりづるにコメントをつけることができます", "");
    if(input_text != "" && input_text != null){
        location.href = "https://twitter.com/intent/tweet?text="　+ "「Webおりづる」で折り鶴をおりました　「" + encodeURIComponent(input_text)　+ "」 web-oriduru.github.io" +"&hashtags=web_oriduru";
    }else{
        
    }
     */
    
    
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
    timer=new Date();

    paper = new Paper("back01");
    for(var i=0;i<oridurus.length;i++){
        oridurus[i] = new Oriduru("oriduru"+Math.floor(Math.random()*5),Math.floor(Math.random()*1080),-Math.floor(Math.random()*1000));
    }
    oridurus[0] = new Oriduru("oriduru"+Math.floor(Math.random()*5),Math.floor(Math.random()*1080),-3000*0);
    oridurus[1] = new Oriduru("oriduru"+Math.floor(Math.random()*5),Math.floor(Math.random()*1080),-3000*1);
    oridurus[2] = new Oriduru("oriduru"+Math.floor(Math.random()*5),Math.floor(Math.random()*1080),-3000*2);
    oridurus[3] = new Oriduru("oriduru"+Math.floor(Math.random()*5),Math.floor(Math.random()*1080),-3000*3);
    oridurus[4] = new Oriduru("oriduru"+Math.floor(Math.random()*5),Math.floor(Math.random()*1080),-3000*4);
    oridurus[5] = new Oriduru("oriduru"+Math.floor(Math.random()*5),Math.floor(Math.random()*1080),-3000*5);
    
	loop();
}
//------------------------------------------------------------------------------
function loop() {
	sizing();
	var timer=0+new Date();
	move();
	draw();
	timer=16-(new Date()-timer);
	if(timer<0) timer=0;
	setTimeout("loop()", timer);
}
//------------------------------------------------------------------------------
function move(){

    paper.move();
    
    
    for(var i=0;i<oridurus.length;i++){
        //oridurus[i].move(oridurus);
    }
    
}
//------------------------------------------------------------------------------
function draw() {
    ctx.globalCompositeOperation="source-over";
	drawRect(1080/2,1920/2,1080,1920,0,0,0,255);
    drawText("Now Loading...",300,1920/2,64,255,255,255,255);
    
    paper.draw();
    
    for(var i=0;i<oridurus.length;i++){
        //oridurus[i].draw();
    }
    
    
    setFontSize(32);
    ctx.fillStyle ='rgb(255,255,255)';
    ctx.fillText("touch_x : "+touch_x,50,100+30*0);
    ctx.fillText("touch_y : "+touch_y,50,100+30*1);
	var t=new Date();
	ctx.fillText("timer   : "+t.getTime(),50,100+30*2);
    ctx.fillText("count   : "+oriduru_count,50,100+30*4);
}
//------------------------------------------------------------------------------
function creatImage(file_name){
    var img = new Image();
    img.src = "resources/" + file_name + ".png?" + timer.getTime();
    return img;
}
//------------------------------------------------------------------------------
function setFontSize(size){
    var font_size = size * (dw+dh)/2;
    ctx.font = font_size + "pt 'メイリオ'";
}
//------------------------------------------------------------------------------
function drawImage(img,x,y,w,h,r,a){
    ctx.save();
    ctx.globalAlpha = a/255.0;
    ctx.translate((x+w/2)*dw,(y+h/2)*dh);
    ctx.rotate(r * Math.PI / 180);
    ctx.drawImage(img, (-w/2)*dw, (-h/2)*dh, w*dw, h*dh);
    ctx.restore();
}
//------------------------------------------------------------------------------
function drawText(text,x,y,size,r,g,b,a){
    setFontSize(size);
    ctx.fillStyle ='rgba('+r+','+g+','+b+','+a+')';
    ctx.fillText(text,x*dw,y*dh);
}
//------------------------------------------------------------------------------
function drawLine(x1,y1,x2,y2,r,g,b,a){
	//ctx.globalCompositeOperation="lighter";
	ctx.strokeStyle ='rgba('+r+','+g+','+b+','+a+')';
	ctx.beginPath();
	ctx.moveTo(x1*dw,y1*dh);
	ctx.lineTo(x2*dw,y2*dh);
	ctx.stroke();
}
//------------------------------------------------------------------------------
function drawRect(x,y,w,h,r,g,b,a){
	//ctx.globalCompositeOperation="lighter";
	ctx.fillStyle ='rgba('+r+','+g+','+b+','+a+')';
	ctx.fillRect((x-w/2)*dw, (y-h/2)*dh, w*dw, h*dh);
}
//------------------------------------------------------------------------------
function drawCircle(x,y,r,red,green,blue,alpha){
	//ctx.globalCompositeOperation="lighter";
	ctx.fillStyle ='rgba('+red+','+green+','+blue+','+alpha+')';
	ctx.beginPath();
	ctx.arc(x*dw,y*dw,r+(dw+dw)/2,0,2*Math.PI,true);
	ctx.fill();
}
//------------------------------------------------------------------------------
if(window.TouchEvent){
    if(document.addEventListener){
        // タッチを開始すると実行されるイベント
        document.addEventListener("touchstart",TouchStart);
        // タッチしたまま平行移動すると実行されるイベント
        document.addEventListener("touchmove",TouchMove);
        // タッチを終了すると実行されるイベント
        document.addEventListener("touchend",TouchEnd);
    }
}
//------------------------------------------------------------------------------
function TouchStart(e){
    // TouchList オブジェクトを取得
    var touch_list = e.changedTouches;
    var num = touch_list.length;
    for(var i=0;i < num;i++){
        var touch = touch_list[i];// Touch オブジェクトを取得
        //console.log(touch);// 出力テスト
    }
    touch_x = touch_list[0].pageX/dw;
    touch_y = touch_list[0].pageY/dh;
    touching = true;
    
    if(touch_x>50 && touch_x<1080-50){
        e.preventDefault();
    }else{
        
    }
}
//------------------------------------------------------------------------------
function TouchMove(e){
    // TouchList オブジェクトを取得
    var touch_list = e.changedTouches;
    var num = touch_list.length;
    for(var i=0;i < num;i++){
        var touch = touch_list[i];// Touch オブジェクトを取得
        //console.log(touch);// 出力テスト
    }
    touch_x = touch_list[0].pageX/dw;
    touch_y = touch_list[0].pageY/dh;
}
//------------------------------------------------------------------------------
function TouchEnd(e){
    // TouchList オブジェクトを取得
    var touch_list = e.changedTouches;
    var num = touch_list.length;
    for(var i=0;i < num;i++){
        var touch = touch_list[i];// Touch オブジェクトを取得
        //console.log(touch);// 出力テスト
    }
    touch_x = touch_list[0].pageX/dw;
    touch_y = touch_list[0].pageY/dh;
    touching = false;
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
