class Boat{
    constructor(x,y,width,height,boatpos){
        this.body=Bodies.rectangle(x,y,width,height)
        this.width=width
        this.height=height
        this.boatpos=boatpos
        this.boatImage=loadImage("assets/boat.png")
        World.add(world,this.body)
    
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.boatImage,0,this.boatpos,this.width,this.height)
        pop()
    }
}