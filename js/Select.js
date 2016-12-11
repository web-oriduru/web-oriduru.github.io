class Select{
    constructor() {
        this.back = creatImage("select/select_back_01");
        this.color = creatImage("select/color_icon_01");
        this.color_pos_x = new Array(256+197*0,256+197*1,256+197*2,256+197*3,256+197*0,256+197*1,256+197*2,256+197*3,256+197*0,256+197*1,256+197*2,256+197*3);
        this.color_pos_y = new Array(549+207*0,549+207*0,549+207*0,549+207*0,549+207*1,549+207*1,549+207*1,549+207*1,549+207*2,549+207*2,549+207*2,549+207*2);
        this.color_num = 0;
        this.select = new Blink("select/select_icon_01",this.color_pos_x[this.color_num],this.color_pos_y[this.color_num],188,188,0,2000);
    }
    move(){
        if(touching && Math.sqrt(Math.pow(touch_x-this.color_pos_x[ 0],2) + Math.pow(touch_y-this.color_pos_y[ 0],2)) < 150){ this.color_num =  0; touching =false; }
        if(touching && Math.sqrt(Math.pow(touch_x-this.color_pos_x[ 1],2) + Math.pow(touch_y-this.color_pos_y[ 1],2)) < 150){ this.color_num =  1; touching =false; }
        if(touching && Math.sqrt(Math.pow(touch_x-this.color_pos_x[ 2],2) + Math.pow(touch_y-this.color_pos_y[ 2],2)) < 150){ this.color_num =  2; touching =false; }
        if(touching && Math.sqrt(Math.pow(touch_x-this.color_pos_x[ 3],2) + Math.pow(touch_y-this.color_pos_y[ 3],2)) < 150){ this.color_num =  3; touching =false; }
        if(touching && Math.sqrt(Math.pow(touch_x-this.color_pos_x[ 4],2) + Math.pow(touch_y-this.color_pos_y[ 4],2)) < 150){ this.color_num =  4; touching =false; }
        if(touching && Math.sqrt(Math.pow(touch_x-this.color_pos_x[ 5],2) + Math.pow(touch_y-this.color_pos_y[ 5],2)) < 150){ this.color_num =  5; touching =false; }
        if(touching && Math.sqrt(Math.pow(touch_x-this.color_pos_x[ 6],2) + Math.pow(touch_y-this.color_pos_y[ 6],2)) < 150){ this.color_num =  6; touching =false; }
        if(touching && Math.sqrt(Math.pow(touch_x-this.color_pos_x[ 7],2) + Math.pow(touch_y-this.color_pos_y[ 7],2)) < 150){ this.color_num =  7; touching =false; }
        //if(touching && Math.sqrt(Math.pow(touch_x-this.color_pos_x[ 8],2) + Math.pow(touch_y-this.color_pos_y[ 8],2)) < 150){ this.color_num =  8; touching =false; }
        //if(touching && Math.sqrt(Math.pow(touch_x-this.color_pos_x[ 9],2) + Math.pow(touch_y-this.color_pos_y[ 9],2)) < 150){ this.color_num =  9; touching =false; }
        //if(touching && Math.sqrt(Math.pow(touch_x-this.color_pos_x[10],2) + Math.pow(touch_y-this.color_pos_y[10],2)) < 150){ this.color_num = 10; touching =false; }
        //if(touching && Math.sqrt(Math.pow(touch_x-this.color_pos_x[11],2) + Math.pow(touch_y-this.color_pos_y[11],2)) < 150){ this.color_num = 11; touching =false; }
        
        this.select.setPosition(this.color_pos_x[this.color_num], this.color_pos_y[this.color_num]);
        
        
        if(touching && touch_x>310 && touch_x<800 && touch_y>1230 && touch_y<1300){
            touching = false;
            return true;
        }
        
        return false;
    }
    draw(){
        drawImage(this.back,width/2,height/2,width,height,0,255);
        this.select.draw();
        drawImage(this.color,width/2,height/2,width,height,0,255);
    }
}

