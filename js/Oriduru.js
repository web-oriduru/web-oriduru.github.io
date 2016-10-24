class Oriduru {
    constructor() {
        this.img = creatImage("fore01");
        this.next_img = creatImage("fore01");
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
        this.num=0;
        this.touch_start = false;
        this.fold();
    }
    
    fold(){
        touching=false;
        this.touch_start = false;
        this.num++;
        delete this.img;
        if(this.num==1){
            this.img = this.next_img;
            this.next_img = creatImage("fore02");
            this.x1 = 1000;
            this.y1 = 1200;
            this.x2 = 100;
            this.y2 = 300;
        }
        else if(this.num==2){
            this.img = this.next_img;
            this.next_img = creatImage("fore03");
            this.x1 = 100;
            this.y1 = 1200;
            this.x2 = 1000;
            this.y2 = 300;
        }
        else if(this.num==3){
            this.img = this.next_img;
            this.next_img = creatImage("fore04");
            this.x1 = 800;
            this.y1 = 800;
            this.x2 = 500;
            this.y2 = 500;
        }
    }
    
    move(){
        if(touching){
            if(!this.touch_start && Math.sqrt(Math.pow(touch_x-this.x1,2) + Math.pow(touch_y-this.y1,2)) < 300){
                this.touch_start = true;
                console.log("touch!!!!!");
            }
            if(this.touch_start && Math.sqrt(Math.pow(touch_x-this.x2,2) + Math.pow(touch_y-this.y2,2)) < 300){
                this.fold();
            }
        }else{
            this.touch_start = false;
        }
    }
    
    draw(){
        drawImage(this.img, 0, 0, 1080, 1920);
    }
}
