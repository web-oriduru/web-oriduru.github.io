var oriduru_count
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

	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
    timer=new Date();
    width = 1920;
    height = 1080;

    for(var i=0;i<oridurus.length;i++){
        oridurus[i] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_red" ,width/16 + width/8* 0,-Math.floor(Math.random()*500)); i++;
        oridurus[i] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_pink" ,width/16 + width/8* 1,-Math.floor(Math.random()*500)); i++;
        oridurus[i] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_orange" ,width/16 + width/8* 2,-Math.floor(Math.random()*500)); i++;
        oridurus[i] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_yellow" ,width/16 + width/8* 3,-Math.floor(Math.random()*500)); i++;
        oridurus[i] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_green" ,width/16 + width/8* 4,-Math.floor(Math.random()*500)); i++;
        oridurus[i] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_blue" ,width/16 + width/8* 5,-Math.floor(Math.random()*500)); i++;
        oridurus[i] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_purple" ,width/16 + width/8* 6,-Math.floor(Math.random()*500)); i++;
        oridurus[i] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_brown" ,width/16 + width/8* 7,-Math.floor(Math.random()*500));
    }

    scroll = false;
    
	loop();
}
//------------------------------------------------------------------------------
function move(){

    for(var i=0;i<oridurus.length;i++){
        oridurus[i].move(oridurus);
    }
    
}
//------------------------------------------------------------------------------
function draw() {
    ctx.globalCompositeOperation="source-over";
	drawRect(width/2,height/2,width,height,255,255,255,255);
    
    for(var i=0;i<oridurus.length;i++){
        oridurus[i].draw();
    }
    
    /*
    setFontSize(32);
    ctx.fillStyle ='rgb(255,255,255)';
    ctx.fillText("touch_x : "+touch_x,50,100+30*0);
    ctx.fillText("touch_y : "+touch_y,50,100+30*1);
	var t=new Date();
	ctx.fillText("timer   : "+t.getTime(),50,100+30*2);
    ctx.fillText("count   : "+oriduru_count,50,100+30*4);
     */
}
