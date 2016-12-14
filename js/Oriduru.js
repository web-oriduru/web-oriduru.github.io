var oriduru_image = new Array(8);
for(var i=0;i<oriduru_image.length;i++){
    oriduru_image[i] = new Array(5);
    for(var j=0;j<oriduru_image[i].length;j++){
        if(i==0) oriduru_image[i][j] = creatImage("oriduru/monitor"+(j+1)+"_red");
        if(i==1) oriduru_image[i][j] = creatImage("oriduru/monitor"+(j+1)+"_yellow");
        if(i==2) oriduru_image[i][j] = creatImage("oriduru/monitor"+(j+1)+"_green");
        if(i==3) oriduru_image[i][j] = creatImage("oriduru/monitor"+(j+1)+"_blue");
        if(i==4) oriduru_image[i][j] = creatImage("oriduru/monitor"+(j+1)+"_orange");
        if(i==5) oriduru_image[i][j] = creatImage("oriduru/monitor"+(j+1)+"_pink");
        if(i==6) oriduru_image[i][j] = creatImage("oriduru/monitor"+(j+1)+"_purple");
        if(i==7) oriduru_image[i][j] = creatImage("oriduru/monitor"+(j+1)+"_brown");
    }
}

class Oriduru {
    constructor(col,qua,x,y) {
        this.color = col;
        this.quality = qua;
        this.x = x;
        this.y = y;
        this.vx = 0;//Math.floor(Math.random()*3)-1;
        this.vy = 10;
        this.size = 200;
        this.rotate = 0;//Math.floor(Math.random()*360);
        this.exist = true;
    }
    
    
    move(oridurus){
        if(this.exist){
            
            var size_rate = 0.6;
            if(Math.sqrt(Math.pow(this.x-touch_x,2) + Math.pow(this.y-touch_y,2)) < this.size*size_rate){
                this.x = touch_x;
                this.y = touch_y;
                //this.exist = false;
                //console.log("delete");
                touch_x=-9999;
                touch_y=-9999;
            }
            
            
            for(var i=0;i<oridurus.length;i++){
                if(oridurus[i] == null) continue;
                if(oridurus[i].exist && (Math.sqrt(Math.pow((this.x+this.vx)-oridurus[i].x,2) + Math.pow((this.y+this.vy)-oridurus[i].y,2)) < this.size*size_rate)){
                    if(this.x<oridurus[i].x){
                        this.vx=0;
                    }else{
                        //this.vx=Math.floor(Math.random()*5)-2;
                    }
                    if(this.y<oridurus[i].y){
                        var j = 0;
                        var j_max = 3;
                        for(j=0;j<j_max;j++){
                            this.vx = Math.floor(Math.random()*4)-2;
                            this.vy = Math.floor(Math.random()*2)+1;
                            if(!(Math.sqrt(Math.pow((this.x+this.vx)-oridurus[i].x,2) + Math.pow((this.y+this.vy)-oridurus[i].y,2)) < this.size*size_rate)){
                                break;
                            }
                            this.vx *= -1;
                            if(!(Math.sqrt(Math.pow((this.x+this.vx)-oridurus[i].x,2) + Math.pow((this.y+this.vy)-oridurus[i].y,2)) < this.size*size_rate)){
                                break;
                            }
                        }
                        if(j==j_max){
                            this.vy=0;
                            this.vx=0;
                            break;
                        }
                    }else{
                        this.vy=Math.floor(Math.random()*4)+6;
                    }
                }
            }
        
            if(this.x<0 || this.x>width){
                this.vx=0;
            }
            if(this.y>height){
                this.vx=0;
                this.vy=0;
            }
        
            this.x += this.vx;
            this.y += this.vy;
        }
    }
    
    draw(){
        if(this.exist){
            //ctx.globalCompositeOperation="lighter";
            drawImage(oriduru_image[this.color][this.quality-1], this.x, this.y, this.size, this.size, this.rotate, 255);
            ctx.globalCompositeOperation="source-over";
            //drawCircle(this.x,this.y,this.size*0.3/2,0,255,0,0.5);
        }
    }
}
