var state;
var oriduru_count
var opening;
var select;
var paper;
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
    
    /*
    localStorage.setItem("image_png",canvas.toDataURL());
    location.href = "image-png.html";
     */
    
    
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
    timer=new Date();
    width = 1080;
    height = 1920;
    scroll = true;

    state = "opening";
    
    opening = new Opening();
    select = new Select();
    paper = new Paper();
    
	loop();
}
//------------------------------------------------------------------------------
function move(){

    if(state == "opening"){
        if(opening.move()){
            state = "select";
        }
    }
    else if(state == "select"){
        if(select.move()){
            state = "paper";
            paper.setBackImage(select.color_num);
        }
    }
    else if(state == "paper"){
        paper.move();
    }
    

    
}
//------------------------------------------------------------------------------
function draw() {
    ctx.globalCompositeOperation="source-over";
	drawRect(1080/2,1920/2,1080,1920,0,0,0,255);
    drawText("Now Loading...",200,1920/2,64,255,255,255,255);
    
    
    if(state == "opening"){
        opening.draw();
    }
    else if(state == "select"){
        select.draw();
    }
    else if(state == "paper"){
        paper.draw();
    }

    /*
    setFontSize(32);
    ctx.fillStyle ='rgb(255,255,255)';
    ctx.fillText("touch_x : "+touch_x,50,100+30*0);
    ctx.fillText("touch_y : "+touch_y,50,100+30*1);
	ctx.fillText("timer   : "+timer,50,100+30*2);
    ctx.fillText("count   : "+oriduru_count,50,100+30*4);
     */
}
