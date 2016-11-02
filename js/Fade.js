class Fade{
    constructor(img) {
        this.img = creatImage(img);
        this.count = 0;
        this.next;
        this.fade_time = 60.0;
    }
    
    start(){
        this.count = this.fade_time;
    }
    
    changeToNext(){
        if(this.count == this.fade_time/2) return true;
        return false;
    }
    
    draw(){
        if(this.count > 0){
            if(this.count<this.fade_time/3){
                var alpha = 255 * (this.count/(this.fade_time/3));
                drawImage(this.img, width/2, height/2, width, height, 0, alpha);
            }
            else if(this.count<(this.fade_time/3)*2){
                drawImage(this.img, width/2, height/2, width, height, 0, 255);
            }
            else{
                var alpha = 255 * ((this.fade_time-this.count)/(this.fade_time/3));
                drawImage(this.img, width/2, height/2, width, height, 0, alpha);
            }
            
            this.count--;
            if(this.count>this.fade_time) this.count = 0;
        }
    }
}
