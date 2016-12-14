var oriduru_count
var oridurus = new Array(100);
var five_timer = 0;
var new_oriduru_color = new Array(64);
var new_oriduru_quality = new Array(64);
var new_oriduru_comment = new Array(64);
var show_color = 1;
var show_quality = 1;
var show_comment = "コメント";
var show_counter = 0;
var show_wait = 300;
var img_window = creatImage("completion/sousin_fukidashi");
var img_clowd = creatImage("completion/sousin_backkumo");
var img_circle = creatImage("completion/complete_circle");
var clowd_counter = 0;
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
          var first_num = oriduru_count;
          if(first_num>50) first_num = 50;
          for(var i=0;i<first_num;i++){
            /***/if(results[i].get("color")== 0) oridurus[i] = new Oriduru(results[i].get("color"),results[i].get("quality"),width/16 + width/8* 0,-Math.floor(Math.random()*500));
            else if(results[i].get("color")== 5) oridurus[i] = new Oriduru(results[i].get("color"),results[i].get("quality"),width/16 + width/8* 1,-Math.floor(Math.random()*500));
            else if(results[i].get("color")== 4) oridurus[i] = new Oriduru(results[i].get("color"),results[i].get("quality"),width/16 + width/8* 2,-Math.floor(Math.random()*500));
            else if(results[i].get("color")== 1) oridurus[i] = new Oriduru(results[i].get("color"),results[i].get("quality"),width/16 + width/8* 3,-Math.floor(Math.random()*500));
            else if(results[i].get("color")== 2) oridurus[i] = new Oriduru(results[i].get("color"),results[i].get("quality"),width/16 + width/8* 4,-Math.floor(Math.random()*500));
            else if(results[i].get("color")== 3) oridurus[i] = new Oriduru(results[i].get("color"),results[i].get("quality"),width/16 + width/8* 5,-Math.floor(Math.random()*500));
            else if(results[i].get("color")== 6) oridurus[i] = new Oriduru(results[i].get("color"),results[i].get("quality"),width/16 + width/8* 6,-Math.floor(Math.random()*500));
            else if(results[i].get("color")== 7) oridurus[i] = new Oriduru(results[i].get("color"),results[i].get("quality"),width/16 + width/8* 7,-Math.floor(Math.random()*500));
            else oridurus[i] = new Oriduru(results[i].get("color"),results[i].get("quality"),width/16 + width/8* 7,-Math.floor(Math.random()*500));
          }
          
          
    })
    .catch(function(err){
           oriduru_count = 0;
    });

	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
    timer=new Date();
    width = 1920;
    height = 1080;
    
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
    
    if(show_counter>0) show_counter++;
    
    if(show_counter==0){
        for(var i=0; i<new_oriduru_color.length;i++){
            if(new_oriduru_color[i] != -1){
                show_color = new_oriduru_color[i];
                show_quality = new_oriduru_quality[i];
                show_comment = new_oriduru_comment[i];
                show_counter = 1;
                new_oriduru_color[i] = -1;
                break;
            }
        }
    }
    
    if(show_counter>show_wait){
        show_counter = 0;
        for(var i=0;i<oridurus.length;i++){
            if(oridurus[i] == null){
                /***/if(show_color==0) oridurus[i] = new Oriduru(show_color,show_quality,width/16 + width/8* 0,-Math.floor(Math.random()*500));
                else if(show_color==5) oridurus[i] = new Oriduru(show_color,show_quality,width/16 + width/8* 1,-Math.floor(Math.random()*500));
                else if(show_color==4) oridurus[i] = new Oriduru(show_color,show_quality,width/16 + width/8* 2,-Math.floor(Math.random()*500));
                else if(show_color==1) oridurus[i] = new Oriduru(show_color,show_quality,width/16 + width/8* 3,-Math.floor(Math.random()*500));
                else if(show_color==2) oridurus[i] = new Oriduru(show_color,show_quality,width/16 + width/8* 4,-Math.floor(Math.random()*500));
                else if(show_color==3) oridurus[i] = new Oriduru(show_color,show_quality,width/16 + width/8* 5,-Math.floor(Math.random()*500));
                else if(show_color==6) oridurus[i] = new Oriduru(show_color,show_quality,width/16 + width/8* 6,-Math.floor(Math.random()*500));
                else if(show_color==7) oridurus[i] = new Oriduru(show_color,show_quality,width/16 + width/8* 7,-Math.floor(Math.random()*500));
                else oridurus[i] = new Oriduru(show_color,show_quality,width/16 + width/8* 7,-Math.floor(Math.random()*500));
                break;
            }
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
    
    clowd_counter = (clowd_counter+1)%1000000;
    
}
//------------------------------------------------------------------------------
function draw() {
    ctx.globalCompositeOperation="source-over";
	drawRect(width/2,height/2,width,height,99,199,242,255);
    
    drawImage(img_clowd,  100+clowd_counter/50, 600, 700, 1400, 0, 255);
    drawImage(img_clowd,  500+clowd_counter/50, 1000, 700, 1400, 0, 255);
    drawImage(img_clowd, 1100+clowd_counter/50, 500, 700, 1400, 0, 255);
    drawImage(img_clowd, 1500+clowd_counter/50, 800, 700, 1400, 0, 255);
    drawImage(img_clowd, 1800+clowd_counter/50, 600, 700, 1400, 0, 255);
    
    
    for(var i=0;i<oridurus.length;i++){
        if(oridurus[i] != null) oridurus[i].draw();
    }
    
    if(show_counter>0){
        var c_alpha = 0;
        if(show_counter<30){
            c_alpha = 255 * (show_counter/30.0);
        }else if(show_counter<show_wait-30){
            c_alpha = 255;
        }else{
            c_alpha = 255 * ((show_wait-show_counter)/30.0);
        }
        drawImage(img_circle, width/2, height/2, 1200, 1200, show_counter/10, c_alpha/2);
        drawImage(oriduru_image[show_color][show_quality], width/2, height/3, 700, 700, 10, c_alpha);
        drawImage(img_window, width/2, height/3*2, 1200, 2000, 0, c_alpha);
        drawText(show_comment,width/2-(show_comment.length*100)/2,880,80,0,0,0,c_alpha);
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
