class Snow{
    constructor(x,y,r){
        this.body=createSprite(x,y,50,50)
        this.body.scale=r
        this.body.addImage(snowImg)
        this.body.velocityY=2
    }
    
}