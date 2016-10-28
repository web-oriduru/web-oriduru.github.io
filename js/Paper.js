var img = new Array(16);

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
        this.loadImage(1);
        this.fold();
    }
    
    loadImage(num){
        if(num == 1){
            img[ 0] = creatImage("play/play_01_001");
            img[ 1] = creatImage("play/play_01_001");
            img[ 2] = creatImage("play/play_01_002");
            img[ 3] = creatImage("play/play_01_003");
            img[ 4] = creatImage("play/play_01_004");
        }
        
        
    }
    
    setNext(num,x1,y1,x2,y2){
        if(this.num == num){
            this.img_num++;
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
            console.log(this.img_num);
        }
    }
    
    fold(){
        this.num++;
        this.touch_start = false;
        delete this.img;
        this.setNext(1,890,1100,700,930);
        this.setNext(2,this.x2,this.y2,430,660);
        this.setNext(3,this.x2,this.y2,180,410);
        this.setNext(4,this.x2,this.y2,180,410);
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
        //drawCircle(this.x1,this.y1,100,0,255,0,0.5);
        //drawCircle(this.x2,this.y2,100,0,255,0,0.5);
    }
}
