var oriduru_count
var oridurus = new Array(100);
var five_timer = 0;
var new_oriduru_color = new Array(64);
var new_oriduru_quality = new Array(64);
var new_oriduru_comment = new Array(64);
var ncmb = new NCMB("ff35ae3dd5a5aa93d58f4981e263cf74a9e9a1de08088807440a75b62e64bfd1","3e58744998bc64a634d8bb28a5e3237eb7ae8b2047252225dc501eedf62d0dbc");
//------------------------------------------------------------------------------
function load(){
    /*
    // データストアへの登録
    var TestClass = ncmb.DataStore("TestClass");
    var testClass = new TestClass();
    testClass.set("message", "Hello, NCMB!");
    testClass.save()
        .then(function(){})
    .catch(function(err){});
    */
    
    //データ取得
    var GameScore = ncmb.DataStore("SendOriduru");
    GameScore.fetchAll()
    .then(function(results){
          oriduru_count = results.length;
          console.log("oriduru_num : "+oriduru_count);
    })
    .catch(function(err){
           oriduru_count = 0;
    });

	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
    timer=new Date();
    width = 1920;
    height = 1080;

    for(var i=0;i<oridurus.length-50;i++){
        oridurus[i] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_red" ,width/16 + width/8* 0,-Math.floor(Math.random()*500)); i++;
        oridurus[i] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_pink" ,width/16 + width/8* 1,-Math.floor(Math.random()*500)); i++;
        oridurus[i] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_orange" ,width/16 + width/8* 2,-Math.floor(Math.random()*500)); i++;
        oridurus[i] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_yellow" ,width/16 + width/8* 3,-Math.floor(Math.random()*500)); i++;
        oridurus[i] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_green" ,width/16 + width/8* 4,-Math.floor(Math.random()*500)); i++;
        oridurus[i] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_blue" ,width/16 + width/8* 5,-Math.floor(Math.random()*500)); i++;
        oridurus[i] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_purple" ,width/16 + width/8* 6,-Math.floor(Math.random()*500)); i++;
        oridurus[i] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_brown" ,width/16 + width/8* 7,-Math.floor(Math.random()*500));
    }
    
    for(var i=0; i<new_oriduru_color.length;i++){
        new_oriduru_color[i] = -1;
    }

    scroll = false;
    
	loop();
    
    five_timer = timer;
}
//------------------------------------------------------------------------------
function move(){

    for(var i=0;i<oridurus.length;i++){
        if(oridurus[i] != null) oridurus[i].move(oridurus);
    }
    
    
    for(var i=0; i<new_oriduru_color.length;i++){
        if(new_oriduru_color[i] != -1){
            for(var j=0;j<oridurus.length;j++){
                if(oridurus[j] == null){
                    if(new_oriduru_color[i]== 0) oridurus[j] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_red" ,width/16 + width/8* 0,-Math.floor(Math.random()*500));
                    else if(new_oriduru_color[i]== 5) oridurus[j] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_pink" ,width/16 + width/8* 1,-Math.floor(Math.random()*500));
                    else if(new_oriduru_color[i]== 4) oridurus[j] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_orange" ,width/16 + width/8* 2,-Math.floor(Math.random()*500));
                    else if(new_oriduru_color[i]== 1) oridurus[j] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_yellow" ,width/16 + width/8* 3,-Math.floor(Math.random()*500));
                    else if(new_oriduru_color[i]== 2) oridurus[j] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_green" ,width/16 + width/8* 4,-Math.floor(Math.random()*500));
                    else if(new_oriduru_color[i]== 3) oridurus[j] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_blue" ,width/16 + width/8* 5,-Math.floor(Math.random()*500));
                    else if(new_oriduru_color[i]== 6) oridurus[j] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_purple" ,width/16 + width/8* 6,-Math.floor(Math.random()*500));
                    else if(new_oriduru_color[i]== 7) oridurus[j] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_brown" ,width/16 + width/8* 7,-Math.floor(Math.random()*500));
                    else oridurus[j] = new Oriduru("oriduru/monitor"+(Math.floor(Math.random()*5)+1)+"_brown" ,width/16 + width/8* 7,-Math.floor(Math.random()*500));
                    j = oridurus.length+1;
                }
            }
            new_oriduru_color[i] = -1;
        }
        
    }
    
    
    
    
    
    
    if(timer - five_timer > 6000){
        //データ取得
        var GameScore = ncmb.DataStore("SendOriduru");
        GameScore.fetchAll().then(function(results){
              if(results.length > oriduru_count){
                                  var num = 0;
                                  for(var i = oriduru_count; i < results.length; i++){
                                        new_oriduru_color[num] = results[i].get("color");
                                        new_oriduru_quality[num] = results[i].get("quality");
                                        new_oriduru_comment[num] = results[i].get("comment");
                                        num++;
                                  }
              }
              oriduru_count = results.length;
              console.log("oriduru_num : "+oriduru_count);
        })
        .catch(function(err){
               oriduru_count = 0;
        });
        five_timer = timer;
    }
    
}
//------------------------------------------------------------------------------
function draw() {
    ctx.globalCompositeOperation="source-over";
	drawRect(width/2,height/2,width,height,255,255,255,255);
    
    for(var i=0;i<oridurus.length;i++){
        if(oridurus[i] != null) oridurus[i].draw();
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
