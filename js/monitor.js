var oriduru_count
var oridurus = new Array(100);
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
        oridurus[i] = new Oriduru("oriduru"+Math.floor(Math.random()*5),Math.floor(Math.random()*width),-Math.floor(Math.random()*1000));
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
function move(){

    for(var i=0;i<oridurus.length;i++){
        oridurus[i].move(oridurus);
    }
    
}
//------------------------------------------------------------------------------
function draw() {
    ctx.globalCompositeOperation="source-over";
	drawRect(width/2,height/2,width,height,100,200,150,255);
    
    for(var i=0;i<oridurus.length;i++){
        oridurus[i].draw();
    }
    
    
    setFontSize(32);
    ctx.fillStyle ='rgb(255,255,255)';
    ctx.fillText("touch_x : "+touch_x,50,100+30*0);
    ctx.fillText("touch_y : "+touch_y,50,100+30*1);
	var t=new Date();
	ctx.fillText("timer   : "+t.getTime(),50,100+30*2);
    ctx.fillText("count   : "+oriduru_count,50,100+30*4);
}
