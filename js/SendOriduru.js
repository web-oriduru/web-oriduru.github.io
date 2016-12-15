class SendOriduru{
    constructor(img,x,y,w,h,r,mode) {
        this.img = creatImage(img);
        this.x = x;
        this.y = y;
        this.last_x = x;
        this.last_y = y;
        this.last2_x = x;
        this.last2_y = y;
        this.center_x = x;
        this.center_y = y;
        this.w = 0;
        this.h = 0;
        this.max_w = w;
        this.max_h = h;
        this.r = r;
        this.mode = mode;
        this.send_speed = 0;
    }
    setPosition(x,y){
        this.x = x;
        this.y = y;
    }
    move(){
        var speed = 10;
        for(var i=0; i<speed; i++){
            if(this.w < this.max_w) this.w++;
            if(this.h < this.max_h) this.h++;
        }
        
        if(this.mode == 2){
            if(this.send_speed>0){
                this.y -= this.send_speed;
                if(this.y < -1200) return true;
                
            }else{
                if(touching){
                    this.x = touch_x;
                    this.y = touch_y;
                }else{
                    this.x += (this.center_x - this.x)/50;
                    this.y += (this.center_y - this.y)/50;
                }
                if(this.y < this.center_y && this.last2_y-this.y > 50){
                    this.send_speed = (this.last2_y-this.y)/5;
                }
            }
        
            this.last2_x = this.last_x;
            this.last2_y = this.last_y;
            this.last_x = this.x;
            this.last_y = this.y;
        }
        
        return false;
    }
    
    draw(){
        drawImage(this.img, this.x, this.y, this.w, this.h, this.r, 255);
        /*
        drawText("  y : "+this.y,50,1300,64,0,0,0,255);
        drawText("lly : "+this.last2_y,50,1400,64,0,0,0,255);
        drawText("l-y : "+(this.last2_y-this.y),50,1500,64,0,0,0,255);
        */
    }
}
