var img = new Array(8);

class Paper {
    constructor() {
        this.img_num = 0;
        this.back_img;
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
            img[3] = creatImage("play/play_02_001");
            this.blink_arrow = new Blink("play/arrow01",540,700,270,320,0,2000);
            this.blink_touch = new Blink("play/hand01",890+20,1100+200,280,440,0,2000);
        }
        else if(num == 2){
            img[0] = img[3];
            img[1] = creatImage("play/play_02_002");
            img[2] = creatImage("play/play_02_003");
            img[3] = creatImage("play/play_02_004");
            img[4] = creatImage("play/play_03_001");
            this.blink_arrow = new Blink("play/arrow02",440,600,270,320,0,2000);
            this.blink_touch = new Blink("play/hand01",180+20,1110+200,280,440,0,2000);
        }
        else if(num == 3){
            img[0] = img[4];
            img[1] = creatImage("play/play_03_002");
            img[2] = creatImage("play/play_03_003");
            img[3] = creatImage("play/play_03_004");
            img[4] = creatImage("play/play_04_001");
            this.blink_arrow = new Blink("play/arrow02",890,830,270,320,120,2000);
            this.blink_touch = new Blink("play/hand01",890+20,400+200,280,440,0,2000);
        }
        else if(num == 4){
            img[0] = img[4];
            img[1] = creatImage("play/play_04_002");
            img[2] = creatImage("play/play_04_003");
            img[3] = creatImage("play/play_04_004");
            img[4] = creatImage("play/play_04_005");
            this.blink_arrow = new Blink("play/arrow01",590,560,270,320,-90,2000);
            this.blink_touch = new Blink("play/hand01",900+20,460+200,280,440,0,2000);
        }
        
        else if(num == 4){
            img[0] = img[4];
            img[1] = creatImage("play/play_04_002");
            img[2] = creatImage("play/play_04_003");
            img[3] = creatImage("play/play_04_004");
            img[4] = creatImage("play/play_04_005");
            this.blink_arrow = new Blink("play/arrow01",590,560,270,320,-90,2000);
            this.blink_touch = new Blink("play/hand01",900+20,460+200,280,440,0,2000);
        }
        
        
    }
    
    fold(){
        this.num++;
        this.touch_start = false;
        delete this.img;
        this.setNext( 1,890,1100,700,930,false,1);
        this.setNext( 2,this.x2,this.y2,430,660,true,-1);
        this.setNext( 3,this.x2,this.y2,180,410,false,-1);
        
        this.setNext( 4,180,1110,300,900,false,2);
        this.setNext( 5,this.x2,this.y2,530,760,true,-1);
        this.setNext( 6,this.x2,this.y2,680,610,false,-1);
        this.setNext( 7,this.x2,this.y2,880,410,false,-1);
        
        this.setNext( 8,890,400,890,600,false,3);
        this.setNext( 9,this.x2,this.y2,890,800,true,-1);
        this.setNext(10,this.x2,this.y2,890,1000,false,-1);
        this.setNext(11,this.x2,this.y2,890,1200,false,-1);
        
        this.setNext(12,900,460,790,500,false,4);
        this.setNext(13,this.x2,this.y2,620,530,true,-1);
        this.setNext(14,this.x2,this.y2,410,720,false,-1);
        if(this.num == 15){
            touching = false;
            delete this.blink_arrow;
            this.blink_arrow = null;
            this.blink_touch = new Blink("play/hand01",410+20,720+200,280,440,0,2000);
        }
        this.setNext(15,410,720,410,720,false,-1);
        
        this.setNext(16,this.x2,this.y2,410,720,true,-1);
        
    }
    
    setBackImage(num){
        if(num== 0) this.back_img = creatImage("play/paper_00");
        if(num== 1) this.back_img = creatImage("play/paper_01");
        if(num== 2) this.back_img = creatImage("play/paper_02");
        if(num== 3) this.back_img = creatImage("play/paper_03");
        if(num== 4) this.back_img = creatImage("play/paper_04");
        if(num== 5) this.back_img = creatImage("play/paper_05");
        if(num== 6) this.back_img = creatImage("play/paper_06");
        if(num== 7) this.back_img = creatImage("play/paper_07");
        if(num== 8) this.back_img = creatImage("play/paper_08");
        if(num== 9) this.back_img = creatImage("play/paper_09");
        if(num==10) this.back_img = creatImage("play/paper_10");
        if(num==11) this.back_img = creatImage("play/paper_11");
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
        drawImage(this.back_img, width/2, height/2, width, height, 0, 255);
        if(img[this.img_num] != null) drawImage(img[this.img_num], width/2, height/2, width, height, 0, 255);
        //drawCircle(this.x1,this.y1,100,0,255,0,0.5);
        //drawCircle(this.x2,this.y2,100,0,255,0,0.5);
        
        if(this.blink_arrow != null){
            this.blink_arrow.draw();
        }
        if(this.blink_touch != null){
            this.blink_touch.draw();
        }
    }
}
