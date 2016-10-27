class Paper {
    constructor(back) {
        this.img = creatImage("play/play_01_001");
        this.next1_img = creatImage("play/play_01_001");
        this.next2_img = creatImage("play/play_01_002");
        this.back_img = creatImage(back);
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
        this.num=0;
        this.touch_start = false;
        this.fold();
    }
    setNext(num,next_img,x1,y1,x2,y2){
        if(this.num == num){
            this.img = this.next1_img;
            this.next1_img = this.next2_img;
            this.next2_img = creatImage(next_img);
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
        }
    }
    
    fold(){
        this.touch_start = false;
        this.num++;
        delete this.img;
        this.setNext( 1,"play/play_01_003",890,1100,850,1050);
        this.setNext( 2,"play/play_01_004",this.x2,this.y2,770,1000);
        this.setNext( 3,"play/play_01_005",this.x2,this.y2,700,930);
        this.setNext( 4,"play/play_01_006",this.x2,this.y2,630,850);
        this.setNext( 5,"play/play_01_007",this.x2,this.y2,600,820);
        this.setNext( 6,"play/play_01_008",this.x2,this.y2,490,720);
        this.setNext( 7,"play/play_01_009",this.x2,this.y2,430,660);
        this.setNext( 8,"play/play_01_010",this.x2,this.y2,380,600);
        this.setNext( 9,"play/play_01_011",this.x2,this.y2,310,570);
        this.setNext(10,"play/play_01_012",this.x2,this.y2,250,480);
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
        drawImage(this.img, 0, 0, 1080, 1920, 0, 255);
    }
}
