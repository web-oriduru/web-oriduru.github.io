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
    draw(){
        var alpha = 55 + 200 * Math.sin(Math.PI * ((timer%this.max_count)/this.max_count));
        drawImage(this.img, this.x-this.w/2, this.y-this.h/2, this.w, this.h, this.r, alpha);
    }
}
