class Opening{
    constructor() {
        this.img = creatImage("opening/opening_back");
        this.button = new Blink("opening/start",width/2,height/2,width,height,0,2000);
    }
    move(){
        if(touching && touch_x>320 && touch_x<800 && touch_y>720 && touch_y<1000){
            touching = false;
            return true;
        }
        return false;
    }
    draw(){
        drawImage(this.img,width/2,height/2,width,height,0,255);
        this.button.draw();
    }
}
