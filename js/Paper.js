var img_max = 5;
var load_img = 0;
var img = new Array(16);

class Paper {

    constructor() {
        this.img_num = 0;
        this.back_img;
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
        this.num = 0;
        this.hit_r = 100;
        this.touch_start = false;
        this.blink_arrow = null;
        this.blink_touch = null;
        this.fold();
    }
    
    loadImage(num){
        this.img_num = 0;
        
        if(num == 1){
            load_img = 0;
            img_max = 5;
            img[0] = creatImage("play/play_01_001");
            img[1] = creatImage("play/play_01_002");
            img[2] = creatImage("play/play_01_003");
            img[3] = creatImage("play/play_02_001");
            img[4] = creatImage("play/play_02_001");
            this.blink_arrow = new Blink("play/arrow01",540,700,270,320,0,2000);
            this.blink_touch = new Blink("play/hand01",890+20,1100+200,280,440,0,2000);
        }
        else if(num == 2){
            load_img = 1;
            img_max = 5;
            img[0] = img[3];
            img[1] = creatImage("play/play_02_002");
            img[2] = creatImage("play/play_02_003");
            img[3] = creatImage("play/play_02_004");
            img[4] = creatImage("play/play_03_001");
            this.blink_arrow = new Blink("play/arrow02",440,600,270,320,0,2000);
            this.blink_touch = new Blink("play/hand01",180+20,1110+200,280,440,0,2000);
        }
        else if(num == 3){
            load_img = 1;
            img_max = 5;
            img[0] = img[4];
            img[1] = creatImage("play/play_03_002");
            img[2] = creatImage("play/play_03_003");
            img[3] = creatImage("play/play_03_004");
            img[4] = creatImage("play/play_04_001");
            this.blink_arrow = new Blink("play/arrow02",890,830,270,320,120,2000);
            this.blink_touch = new Blink("play/hand01",890+20,400+200,280,440,0,2000);
        }
        else if(num == 4){
            load_img = 1;
            img_max = 5;
            img[0] = img[4];
            img[1] = creatImage("play/play_04_002");
            img[2] = creatImage("play/play_04_003");
            img[3] = creatImage("play/play_04_004");
            img[4] = creatImage("play/play_05_001");
            this.blink_arrow = new Blink("play/arrow01",590,560,270,320,-90,2000);
            this.blink_touch = new Blink("play/hand01",900+20,460+200,280,440,0,2000);
        }
        
        else if(num == 5){
            load_img = 1;
            img_max = 5;
            img[0] = img[4];
            img[1] = creatImage("play/play_05_001");
            img[2] = creatImage("play/play_05_001");
            img[3] = creatImage("play/play_05_001");
            img[4] = creatImage("play/play_06_001");
            this.blink_arrow = null;
            this.blink_touch = new Blink("play/hand01",410+20,720+200,280,440,0,2000);
        }
        
        else if(num == 6){
            load_img = 1;
            img_max = 5;
            img[0] = img[4];
            img[1] = creatImage("play/play_06_002");
            img[2] = creatImage("play/play_06_003");
            img[3] = creatImage("play/play_06_004");
            img[4] = creatImage("play/play_07_001");
            this.blink_arrow = new Blink("play/arrow02",500,560,270,320,90,2000);
            this.blink_touch = new Blink("play/hand01",160+20,460+200,280,440,0,2000);
        }
        
        else if(num == 7){
            load_img = 1;
            img_max = 5;
            img[0] = img[4];
            img[1] = creatImage("play/play_07_002");
            img[2] = creatImage("play/play_08_001");
            img[3] = creatImage("play/play_08_001");
            img[4] = creatImage("play/play_08_001");
            this.blink_arrow = new Blink("play/arrow02",590,560,270,320,0,2000);
            this.blink_touch = new Blink("play/hand01",410+20,700+200,280,440,0,2000);
        }
        
        else if(num == 8){
            load_img = 1;
            img_max = 5;
            img[0] = img[4];
            img[1] = creatImage("play/play_08_002");
            img[2] = creatImage("play/play_09_001");
            img[3] = creatImage("play/play_09_001");
            img[4] = creatImage("play/play_09_001");
            this.blink_arrow = null;
            this.blink_touch = new Blink("play/hand01",660+20,690+200,280,440,0,2000);
        }
        
        else if(num == 9){
            load_img = 1;
            img_max = 5;
            img[0] = img[4];
            img[1] = creatImage("play/play_10_001");
            img[2] = creatImage("play/play_10_001");
            img[3] = creatImage("play/play_10_001");
            img[4] = creatImage("play/play_10_001");
            this.blink_arrow = new Blink("play/arrow01",790,560,270,320,0,2000);
            this.blink_touch = new Blink("play/hand01",910+20,710+200,280,440,0,2000);
        }
        
        else if(num == 10){
            load_img = 1;
            img_max = 9;
            img[0] = img[4];
            img[1] = creatImage("play/play_10_002");
            img[2] = creatImage("play/play_10_003");
            img[3] = creatImage("play/play_10_004");
            img[4] = creatImage("play/play_10_005");
            img[5] = creatImage("play/play_10_006");
            img[6] = creatImage("play/play_10_007");
            img[7] = creatImage("play/play_10_008");
            img[8] = creatImage("play/play_11_001");
            //this.blink_arrow = new Blink("play/arrow01",790,560,270,320,0,2000);
            //this.blink_touch = new Blink("play/hand01",910+20,710+200,280,440,0,2000);
        }
        
        else if(num == 11){
            load_img = 1;
            img_max = 2;
            img[0] = img[8];
            img[1] = creatImage("play/play_12_001");
            //this.blink_arrow = new Blink("play/arrow01",790,560,270,320,0,2000);
            //this.blink_touch = new Blink("play/hand01",910+20,710+200,280,440,0,2000);
        }
        
        else if(num == 12){
            load_img = 1;
            img_max = 7;
            img[0] = img[1];
            img[1] = creatImage("play/play_12_002");
            img[2] = creatImage("play/play_12_003");
            img[3] = creatImage("play/play_12_004");
            img[4] = creatImage("play/play_12_005");
            img[5] = creatImage("play/play_12_006");
            img[6] = creatImage("play/play_12_006");
            //this.blink_arrow = new Blink("play/arrow01",790,560,270,320,0,2000);
            //this.blink_touch = new Blink("play/hand01",910+20,710+200,280,440,0,2000);
        }
        
        
        for(var i=0; i<img_max; i++){
            img[i].onload = function(){ load_img++; console.log("load!!"); }
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
        if(this.num == 15) this.setBlink(-1,-1,1,1.0,0,410,720);
        this.setNext(15,410,720,410,720,false,-1);
        this.setNext(16,this.x2,this.y2,410,720,true,-1);
        
        if(this.num == 16) this.num++;
        this.setNext(17,410,720,410,720,false,5);
        
        this.setNext(18,160,460,340,510,false,6);
        this.setNext(19,this.x2,this.y2,520,560,true,-1);
        this.setNext(20,this.x2,this.y2,660,690,false,-1);
        if(this.num == 21) this.setBlink(-1,-1,1,1.0,0,660,690);
        this.setNext(21,this.x2,this.y2,660,690,false,-1);
        
        if(this.num == 22) this.hit_r = 80;
        this.setNext(22,410,700,660,580,true,7);
        if(this.num == 23) this.setBlink(790,560,1,1.0,0,910,710);
        this.setNext(23,920,700,660,580,false,-1);

        this.setNext(24,660,710,660,710,false,8);
        if(this.num == 25) this.setBlink(590,560,2,1.0,0,410,700);
        this.setNext(25,410,700,660,580,false,-1);
        
        this.setNext(26,920,700,660,580,false,9);
        if(this.num == 27) delete this.blink_arrow;
        
        if(this.num == 28) this.setBlink(450,480,1,0.8,220,570,450);
        this.setNext(28,570,450,570,700,false,10);
        if(this.num == 29) delete this.blink_arrow;
        this.setNext(29,this.x2,this.y2,570,450,true,-1);
        this.setNext(30,570,570,340,680,false,-1);
        this.setNext(31,570,570,810,690,false,-1);
        this.setNext(32,580,960,570,780,false,-1);
        this.setNext(33,this.x2,this.y2,580,360,false,-1);
        this.setNext(34,580,800,580,800,false,-1);
        
        this.setNext(38,580,800,580,800,false,11);
        
        this.setNext(39,570,810,350,880,false,12);
        this.setNext(40,570,810,810,890,true,-1);
        this.setNext(41,580,1200,570,1050,false,-1);
        this.setNext(42,this.x2,this.y2,580,350,false,-1);
        this.setNext(43,580,800,580,800,false,-1);
        this.setNext(44,580,800,580,800,false,-1);
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
            console.log(this.img_num);
        }
    }
    
    setBlink(ax,ay,num,size,r,tx,ty){
        touching = false;
        delete this.blink_arrow;
        delete this.blink_touch;
        if(ax!=-1) this.blink_arrow = new Blink("play/arrow0"+num,ax,ay,270*size,320*size,r,2000);
        if(tx!=-1) this.blink_touch = new Blink("play/hand01",tx+20,ty+200,280,440,0,2000);
    }
    
    
    move(){
        if(touching){
            if(!this.touch_start && Math.sqrt(Math.pow(touch_x-this.x1,2) + Math.pow(touch_y-this.y1,2)) < this.hit_r){
                this.touch_start = true;
                console.log("touch!!!!!");
            }
            if(this.touch_start && Math.sqrt(Math.pow(touch_x-this.x2,2) + Math.pow(touch_y-this.y2,2)) < this.hit_r){
                if(load_img == img_max){
                    this.fold();
                }
            }
        }
    }
    
    draw(){
        drawImage(this.back_img, width/2, height/2, width, height, 0, 255);
        if(img[this.img_num] != null) drawImage(img[this.img_num], width/2, height/2, width, height, 0, 255);
        drawCircle(this.x1,this.y1,this.hit_r,0,255,0,0.5);
        drawCircle(this.x2,this.y2,this.hit_r,0,255,0,0.5);
        
        if(this.blink_arrow != null){
            this.blink_arrow.draw();
        }
        if(this.blink_touch != null){
            this.blink_touch.draw();
        }
    }
}
