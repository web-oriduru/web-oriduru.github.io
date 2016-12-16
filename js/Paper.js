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
        this.action_quality = 0;
        
        this.completion_alpha = 0;
        this.blink_twitter = null;
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
            img[6] = creatImage("play/play_13_001");
            //this.blink_arrow = new Blink("play/arrow01",790,560,270,320,0,2000);
            //this.blink_touch = new Blink("play/hand01",910+20,710+200,280,440,0,2000);
        }
        
        else if(num == 13){
            load_img = 1;
            img_max = 6;
            img[0] = img[6];
            img[1] = creatImage("play/play_13_002");
            img[2] = creatImage("play/play_14_001");
            img[3] = creatImage("play/play_15_001");
            img[4] = creatImage("play/play_15_002");
            img[5] = creatImage("play/play_16_001");
            //this.blink_arrow = new Blink("play/arrow01",790,560,270,320,0,2000);
            //this.blink_touch = new Blink("play/hand01",910+20,710+200,280,440,0,2000);
        }
        
        else if(num == 17){
            load_img = 1;
            img_max = 7;
            img[0] = img[5];
            img[1] = creatImage("play/play_17_001");
            img[2] = creatImage("play/play_18_001");
            img[3] = creatImage("play/play_19_001");
            img[4] = creatImage("play/play_20_001");
            img[5] = creatImage("play/play_21_001");
            img[6] = creatImage("play/play_21_002");
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
        if(this.num!=1){
            var rand = Math.floor(Math.random()*4);
            if(rand==0) document.getElementById("audioSE01").play();
            if(rand==1) document.getElementById("audioSE02").play();
            if(rand==2) document.getElementById("audioSE03").play();
            if(rand==3) document.getElementById("audioSE04").play();
        }
        
        if(this.num == 1) this.hit_r = 150;
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
        
        //if(this.num == 22) this.hit_r = 120;
        this.setNext(22,410,700,660,580,true,7);
        if(this.num == 23) this.setBlink(790,560,1,1.0,0,910,710);
        this.setNext(23,920,700,660,580,false,-1);

        this.setNext(24,660,710,660,710,false,8);
        if(this.num == 25) this.setBlink(590,560,2,1.0,0,410,700);
        this.setNext(25,410,700,660,580,false,-1);
        
        this.setNext(26,920,700,660,580,false,9);
        if(this.num == 27) delete this.blink_arrow;
        
        if(this.num == 27) this.setBlink(400,480,1,0.8,220,570,450);
        this.setNext(27,570,450,570,700,false,10);
        if(this.num == 28) this.setBlink(700,480,1,0.8,40,570,700);
        this.setNext(28,this.x2,this.y2,570,450,false,-1);
        if(this.num == 29) this.setBlink(400,480,1,0.8,-90,570,570);
        this.setNext(29,570,570,340,680,false,-1);
        if(this.num == 30) this.setBlink(800,480,2,0.8,90,570,570);
        this.setNext(30,570,570,810,690,false,-1);
        if(this.num == 31) this.setBlink(700,660,1,1.0,40,580,960);
        this.setNext(31,580,960,570,780,false,-1);
        this.setNext(32,this.x2,this.y2,580,360,true,-1);
        if(this.num == 33) this.setBlink(-1,-1,1,1.0,0,580,800);
        this.setNext(33,580,800,580,800,false,-1);
        
        this.setNext(34,580,800,580,800,false,11);
        
        if(this.num == 35) this.setBlink(400,750,1,0.8,-90,570,810);
        this.setNext(35,570,810,350,880,false,12);
        if(this.num == 36) this.setBlink(800,750,2,0.8,90,570,810);
        this.setNext(36,570,810,810,890,false,-1);
        if(this.num == 37) this.setBlink(700,800,1,1.0,40,580,1200);
        this.setNext(37,580,1200,570,1050,false,-1);
        this.setNext(38,this.x2,this.y2,580,350,true,-1);
        if(this.num == 39) this.setBlink(-1,-1,1,1.0,0,580,800);
        this.setNext(39,580,800,580,800,false,-1);
        
        //if(this.num == 40) this.hit_r = 100;
        if(this.num == 40) this.setBlink(640,800,1,0.6,-20,710,820);
        this.setNext(40,710,820,580,790,false,13);
        if(this.num == 41) this.setBlink(500,800,2,0.6,20,450,820);
        this.setNext(41,450,820,580,790,false,-1);
        if(this.num == 42) this.setBlink(-1,-1,0,1.0,0,580,800);
        if(this.num == 42) touching = false;
        this.setNext(42,580,800,580,800,false,-1);
        if(this.num == 43) this.setBlink(640,800,1,0.6,-20,710,820);
        this.setNext(43,710,820,580,790,false,-1);
        if(this.num == 44) this.setBlink(500,800,2,0.6,20,450,820);
        this.setNext(44,450,820,580,790,false,-1);
        if(this.num == 45) this.setBlink(-1,-1,0,1.0,0,580,800);
        if(this.num == 45) touching = false;
        this.setNext(45,580,800,580,800,false,17);
        
        //if(this.num == 46) this.hit_r = 120;
        if(this.num == 46) this.setBlink(620,800,1,1.0,40,580,1180);
        this.setNext(46,580,1180,580,450,false,-1);
        if(this.num == 47) this.setBlink(-1,-1,0,1.0,0,580,800);
        this.setNext(47,580,800,580,800,false,-1);
        if(this.num == 48) this.setBlink(620,800,1,1.0,40,580,1180);
        this.setNext(48,580,1180,580,450,false,-1);
        
        if(this.num == 49) this.setBlink(-1,-1,0,1.0,0,580,800);
        this.setNext(49,580,800,580,800,false,-1);
        if(this.num == 50) this.setBlink(420,450,1,0.6,-60,440,450);
        this.setNext(50,440,450,400,570,false,-1);
        
        if(this.num == 51){
            delete this.blink_arrow;
            delete this.blink_touch;
            if(this.action_quality<20)this.quality = 1;
            else if(this.action_quality<25) this.quality = 2;
            else if(this.action_quality<30) this.quality = 3;
            else if(this.action_quality<35) this.quality = 4;
            else this.quality = 5;
            
            load_img = 0;
            img_max=4;
            img[0] = creatImage("completion/complete_back");
            img[1] = creatImage("completion/complete_circle");
            img[2] = creatImage("completion/complete_title");
            img[3] = creatImage("completion/complete_comment");
            for(var i=0; i<img_max; i++){
                img[i].onload = function(){ load_img++; console.log("load!!"); }
            }
            this.circle_deg = 0;
            if(this.color_num == 0) this.s_oriduru = new SendOriduru("oriduru/monitor"+this.quality+"_red",width/2,height/3,700,700,20,1);
            else if(this.color_num == 1) this.s_oriduru = new SendOriduru("oriduru/monitor"+this.quality+"_yellow",width/2,height/3,700,700,20,1);
            else if(this.color_num == 2) this.s_oriduru = new SendOriduru("oriduru/monitor"+this.quality+"_green",width/2,height/3,700,700,20,1);
            else if(this.color_num == 3) this.s_oriduru = new SendOriduru("oriduru/monitor"+this.quality+"_blue",width/2,height/3,700,700,20,1);
            else if(this.color_num == 4) this.s_oriduru = new SendOriduru("oriduru/monitor"+this.quality+"_orange",width/2,height/3,700,700,20,1);
            else if(this.color_num == 5) this.s_oriduru = new SendOriduru("oriduru/monitor"+this.quality+"_pink",width/2,height/3,700,700,20,10);
            else if(this.color_num == 6) this.s_oriduru = new SendOriduru("oriduru/monitor"+this.quality+"_purple",width/2,height/3,700,700,20,1);
            else if(this.color_num == 7) this.s_oriduru = new SendOriduru("oriduru/monitor"+this.quality+"_brown",width/2,height/3,700,700,20,1);
        }
        
        
        this.setNext(51,-9999,-9999,-9999,-9999,false,-1);

    }
    
    setBackImage(num){
        this.color_num = num;
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
        
        /*
        if(this.num < 51){
            touching=true;
            this.x1 = 580;
            this.y1 = 800;
            this.x2 = 580;
            this.y2 = 800;
        }
        */
        
    
        if(touching){
            var touch_dis1 = Math.sqrt(Math.pow(touch_x-this.x1,2) + Math.pow(touch_y-this.y1,2));
            if(!this.touch_start && touch_dis1 < this.hit_r){
                this.touch_start = true;
                this.action_quality += touch_dis1/this.hit_r;
                console.log("AQ = "+this.action_quality);
                
            }
            var touch_dis2 = Math.sqrt(Math.pow(touch_x-this.x2,2) + Math.pow(touch_y-this.y2,2));
            if(this.touch_start && touch_dis2 < this.hit_r){
                if(load_img == img_max){
                    this.fold();
                }
            }
        }
        
        if(this.num == 51 && load_img == img_max){
            if(this.completion_alpha<255) this.completion_alpha+=5;
            this.circle_deg = (this.circle_deg+1)%3600;
            this.s_oriduru.move();
                
            if(touching && Math.sqrt(Math.pow(touch_x-width/2,2) + Math.pow(touch_y-1100,2)) < 100){
                this.input_text = window.prompt("おりづるにコメントをつけることができます（10文字まで）", "");
                if(this.input_text != "" && this.input_text != null && this.input_text.length<=10){
                    this.num++;
                    this.completion_alpha = 0;
                    this.s_oriduru.mode = 2;
                    this.s_oriduru.w = 0;
                    this.s_oriduru.h = 0;
                    this.s_oriduru.max_w = 600;
                    this.s_oriduru.max_h = 600;
                    this.clowd_x = 1000;
                    load_img = 0;
                    img_max=5;
                    img[0] = creatImage("completion/sousin_back");
                    img[1] = creatImage("completion/sousin_backkumo");
                    img[2] = creatImage("completion/sousin_backkumo2");
                    img[3] = creatImage("completion/sousin_fukidashi");
                    img[4] = creatImage("completion/sousin_moji");
                    for(var i=0; i<img_max; i++){
                        img[i].onload = function(){ load_img++; console.log("load!!"); }
                    }
                    this.blink_arrow = new Blink("completion/sousin_yajirushi",width/2,height/2,width,height,0,3000);
                }
                touching=false;
            }
        }
        
        if(this.num == 52 && load_img == img_max)
        {
            if(this.completion_alpha<255) this.completion_alpha+=5;
            this.clowd_x--;
            this.blink_arrow.y =1000 + (this.clowd_x)%300;
            if(this.s_oriduru.move()){
                delete this.blink_arrow;
                this.num++;
                this.completion_alpha = 0;
                this.s_oriduru.mode = 1;
                this.s_oriduru.x = width/2;
                this.s_oriduru.y = height/3;
                this.s_oriduru.w = 600;
                this.s_oriduru.h = 600;
                this.s_oriduru.send_speed = 0;
                load_img = img_max;
                img_max=9;
                img[5] = creatImage("completion/send_back");
                img[6] = creatImage("completion/send_text");
                img[7] = creatImage("completion/send_saveimg");
                img[8] = creatImage("completion/send_twitter");
                for(var i=0; i<img_max; i++){
                    img[i].onload = function(){ load_img++; console.log("load!!"); }
                }
                // データストアへの登録
                var ncmb = new NCMB("ff35ae3dd5a5aa93d58f4981e263cf74a9e9a1de08088807440a75b62e64bfd1","3e58744998bc64a634d8bb28a5e3237eb7ae8b2047252225dc501eedf62d0dbc");
                var TestClass = ncmb.DataStore("SendOriduru");
                var testClass = new TestClass();
                testClass.set("color", this.color_num);
                testClass.set("comment", this.input_text);
                testClass.set("quality", this.quality);
                testClass.set("time", timer);
                testClass.save()
                .then(function(){})
                .catch(function(err){});
            }
        }
        
        if(this.num == 53 && load_img == img_max)
        {
            if(this.completion_alpha<255) this.completion_alpha+=5;
            if(touching && Math.sqrt(Math.pow(touch_x-width/2,2) + Math.pow(touch_y-700,2)) < 100){
                var t_url = "https://twitter.com/intent/tweet?text="　+ "「" + encodeURIComponent(this.input_text)　+ "」　うぇぶおりづるで折り鶴を折りました！　 web-oriduru.github.io" +"&hashtags=うぇぶおりづる"+"&hashtags=web_oriduru";
                //window.open(t_url);
                location.href = t_url;
                touching = false;
            }
        }
        
        
        
    }
    
    draw(){
        drawImage(this.back_img, width/2, height/2, width, height, 0, 255);
        
        if(this.num == 51 && load_img == img_max){
            drawImage(img[0], width/2, height/2, width, height, 0, this.completion_alpha);
            drawImage(img[1], width/2, width/2, width, width, this.circle_deg/10, this.completion_alpha);
            drawImage(img[2], width/2, height/2, width, height, 0, this.completion_alpha);
            drawImage(img[3], width/2, height/2, width, height, 0, this.completion_alpha);
            this.s_oriduru.draw();
            
        }else if(this.num == 52 && load_img == img_max){
            drawImage(img[0], width/2, height/2, width, height, 0, this.completion_alpha);
            drawImage(img[1], width/2+this.clowd_x/30 , height/2, width, height, 0, this.completion_alpha);
            drawImage(img[2], width/2+this.clowd_x/50, height/2, width, height, 0, this.completion_alpha);
            this.s_oriduru.draw();
            drawImage(img[3], width/2, height/2, width, height, 0, this.completion_alpha);
            drawImage(img[4], width/2, height/2, width, height, 0, this.completion_alpha);
            drawText(this.input_text,width/2-(this.input_text.length*86)/2,1100,72,0,0,0,255);
            this.blink_arrow.draw();
            
        }else if(this.num == 53 && load_img == img_max){
            drawImage(img[5], width/2, height/2, width, height, 0, this.completion_alpha);
            drawImage(img[6], width/2, height/2, width, height, 0, this.completion_alpha);
            drawImage(img[7], width/2, height/2, width, height, 0, this.completion_alpha);
            drawImage(img[8], width/2, height/2, width, height, 0, this.completion_alpha);
            
            if(touching && Math.sqrt(Math.pow(touch_x-width/2,2) + Math.pow(touch_y-480,2)) < 100){
                drawImage(img[0], width/2, height/2, width, height, 0, this.completion_alpha);
                drawImage(img[1], width/2+this.clowd_x/30 , height/2, width, height, 0, this.completion_alpha);
                drawImage(img[2], width/2+this.clowd_x/50, height/2, width, height, 0, this.completion_alpha);
                this.s_oriduru.draw();
                drawImage(img[3], width/2, height/2, width, height, 0, this.completion_alpha);
                drawText(this.input_text,width/2-(this.input_text.length*86)/2,1100,72,0,0,0,255);
                localStorage.setItem("image_png",canvas.toDataURL());
                //window.open('image-png.html');
                location.href = "image-png.html";
                touching = false;
            }
            
        }else if(this.num <= 50){
            if(img[this.img_num] != null) drawImage(img[this.img_num], width/2, height/2, width, height, 0, 255);
            
            //drawCircle(this.x1,this.y1,this.hit_r,0,255,0,0.5);
            //drawCircle(this.x2,this.y2,this.hit_r,0,255,0,0.5);
            
            if(this.blink_arrow != null){
                this.blink_arrow.draw();
            }
            if(this.blink_touch != null){
                this.blink_touch.draw();
            }
        }
    }
}
