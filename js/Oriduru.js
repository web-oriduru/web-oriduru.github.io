class Oriduru {
    constructor(img,x,y) {
        this.img = creatImage(img);
        this.x = x;
        this.y = y;
        this.vx = 0;//Math.floor(Math.random()*3)-1;
        this.vy = 10;
        this.size = 300;
        this.rotate =Math.floor(Math.random()*360);
    }
    
    
    move(oridurus){
        var size_rate = 0.4;
        for(var i=0;i<oridurus.length;i++){
            if(Math.sqrt(Math.pow((this.x+this.vx)-oridurus[i].x,2) + Math.pow((this.y+this.vy)-oridurus[i].y,2)) < this.size*size_rate){
                if(this.x<oridurus[i].x){
                    this.vx=0;
                }else{
                    //this.vx=Math.floor(Math.random()*5)-2;
                }
                if(this.y<oridurus[i].y){
                    var j = 0;
                    for(j=0;j<5;j++){
                        this.vx = Math.floor(Math.random()*6)-3;
                        this.vy = Math.floor(Math.random()*3)+1;
                        if(!(Math.sqrt(Math.pow((this.x+this.vx)-oridurus[i].x,2) + Math.pow((this.y+this.vy)-oridurus[i].y,2)) < this.size*size_rate)){
                            break;
                        }
                        this.vx *= -1;
                        if(!(Math.sqrt(Math.pow((this.x+this.vx)-oridurus[i].x,2) + Math.pow((this.y+this.vy)-oridurus[i].y,2)) < this.size*size_rate)){
                            break;
                        }
                    }
                    if(j==5){
                        this.vy=0;
                        this.vx=0;
                        break;
                    }
                }else{
                    this.vy=Math.floor(Math.random()*4)+6;
                }
            }
        }
        
        if(this.x<0 || this.x>1080){
            this.vx=0;
        }
        if(this.y>1920){
            this.vx=0;
            this.vy=0;
        }
        
        this.x += this.vx;
        this.y += this.vy;        
    }
    
    draw(){
        drawImage(this.img, this.x-this.size/2, this.y-this.size/2, this.size, this.size, this.rotate, 255);
        //drawCircle(this.x,this.y,this.size*0.3/2,0,255,0,0.5);
    }
}
