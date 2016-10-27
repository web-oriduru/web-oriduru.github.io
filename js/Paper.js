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
            img[ 5] = creatImage("play/play_01_005");
            img[ 6] = creatImage("play/play_01_006");
            img[ 7] = creatImage("play/play_01_007");
            img[ 8] = creatImage("play/play_01_008");
            img[ 9] = creatImage("play/play_01_009");
            img[10] = creatImage("play/play_01_010");
            img[11] = creatImage("play/play_01_011");
            img[12] = creatImage("play/play_01_012");
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
        this.touch_start = false;
        this.num++;
        delete this.img;
        this.setNext( 1,890,1100,850,1050);
        this.setNext( 2,this.x2,this.y2,770,1000);
        this.setNext( 3,this.x2,this.y2,700,930);
        this.setNext( 4,this.x2,this.y2,630,850);
        this.setNext( 5,this.x2,this.y2,600,820);
        this.setNext( 6,this.x2,this.y2,490,720);
        this.setNext( 7,this.x2,this.y2,430,660);
        this.setNext( 8,this.x2,this.y2,380,600);
        this.setNext( 9,this.x2,this.y2,310,570);
        this.setNext(10,this.x2,this.y2,250,480);
        this.setNext(11,this.x2,this.y2,260,500);
        this.setNext(12,this.x2,this.y2,180,410);
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
    }
}
