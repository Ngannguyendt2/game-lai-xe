let canvas= document.getElementById('myCanvas');
let ctx=canvas.getContext('2d');
function Maruko(srcimage, top, left, size, speed, id) {
    this.srcimage=srcimage;
    this.top=top;
    this.left=left;
    this.size=size;
    this.speed=speed;

    this.show = function(ctx){
        let image = new Image();
        let topPosition=this.top;
        let leftPosition=this.left;
        image.onload = function(){
            ctx.drawImage(image, topPosition, leftPosition);
        };
        image.src = this.srcimage;
    }
    this.moveImage=function (event) {
        let topImage=this.top;
        let leftImage=this.left;
        if(event.which===38)
        {
            topImage-=this.speed;
            topImage+='px';
            this.top=topImage;
        }
        else if(event.which===40)
        {
            topImage+=this.speed;
            topImage+='px';
            this.top=topImage;
        }
        else if(event.which===37)
        {
            leftImage-=this.speed;
            leftImage+='px';
            this.left=leftImage;
        }
        else if(event.which===39)
        {
            leftImage+=this.speed;
            leftImage+='px';
            this.left=leftImage;
        }
    }
    this.ready=function () {
        window.addEventListener('keydown', this.moveImage);
    }


}
let maruko=new Maruko("image/maruko1.png",20,30,200,10, "img1");
maruko.show(ctx);
maruko.ready();

