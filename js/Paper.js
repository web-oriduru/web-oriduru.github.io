var img = new Array(8);

class Paper {
    constructor(back) {
        this.img_num = 0;
        this.back_img = creatImage(back);
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
        this.num = 0;
        this.touch_start = false;
        this.blink_arrow = null;
        this.blink_touch = null;
        this.fold();
    }
    
    loadImage(num){
        this.img_num = 0;
        if(num == 1){
            img[0] = creatImage("play/play_01_001");
            img[1] = creatImage("play/play_01_002");
            img[2] = creatImage("play/play_01_003");
            img[3] = creatImage("play/play_01_004");
            this.blink_arrow = new Blink("play/arrow01",width/2,height/2,width,height,2000);
            this.blink_touch = new Blink("play/hand01",580,1100,width,height,2000);
        }
        else if(num == 2){
            img[0] = img[3];
            img[1] = creatImage("play/play_02_001");
            img[2] = creatImage("play/play_02_002");
            img[3] = creatImage("play/play_02_003");
            img[4] = creatImage("play/play_02_004");
            this.blink_arrow = new Blink("play/arrow01",width/2,height/2,width,height,2000);
            this.blink_touch = new Blink("play/hand01",580,1100,width,height,2000);
        }
        
        
    }
    
    fold(){
        this.num++;
        this.touch_start = false;
        delete this.img;
        this.setNext(1,890,1100,700,930,false,1);
        this.setNext(2,this.x2,this.y2,430,660,true,-1);
        this.setNext(3,this.x2,this.y2,180,410,false,-1);
        this.setNext(4,this.x2,this.y2,180,410,false,-1);
        
        this.setNext(5,180,1110,300,900,false,2);
        this.setNext(6,this.x2,this.y2,530,760,true,-1);
        this.setNext(7,this.x2,this.y2,610,530,false,-1);
        this.setNext(8,this.x2,this.y2,880,410,false,-1);
        this.setNext(9,this.x2,this.y2,880,410,false,-1);
        
    }
    
    setNext(num,x1,y1,x2,y2,delete_touch,load_image){
        if(this.num == num){
            this.img_num++;
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
            if(delete_touch && this.blink_touch != null){
                delete this.blink_touch;
                this.blink_touch = null;
            }
            if(load_image != -1){
                this.loadImage(load_image);
            }
            
            console.log(this.num);
        }
    }
    
    
    move(){
        if(touching){
            if(!this.touch_start && Math.sqrt(Math.pow(touch_x-this.x1,2) + Math.pow(touch_y-this.y1,2)) < 100){
                this.touch_start = true;
                console.log("touch!!!!!");
            }
            if(this.touch_start && Math.sqrt(Math.pow(touch_x-this.x2,2) + Math.pow(touch_y-this.y2,2)) < 100){
                this.fold();
            }
        }
    }
    
    draw(){
        drawImage(this.back_img, 0, 0, 1080, 1920, 0, 255);
        if(img[this.img_num] != null) drawImage(img[this.img_num], 0, 0, 1080, 1920, 0, 255);
        drawCircle(this.x1,this.y1,100,0,255,0,0.5);
        drawCircle(this.x2,this.y2,100,0,255,0,0.5);
        if(this.blink_arrow != null){
            this.blink_arrow.draw();
        }
        if(this.blink_touch != null){
            this.blink_touch.draw();
        }
    }
}
