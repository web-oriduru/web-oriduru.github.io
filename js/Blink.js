class Blink{
    constructor(img,x,y,w,h,r,max_count) {
        this.img = creatImage(img);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.max_count  = max_count + 0.1;
    }
    setPosition(x,y){
        this.x = x;
        this.y = y;
    }
    draw(){
        var alpha = 55 + 200 * Math.sin(Math.PI * ((timer%this.max_count)/this.max_count));
        drawImage(this.img, this.x, this.y, this.w, this.h, this.r, alpha);
    }
}
