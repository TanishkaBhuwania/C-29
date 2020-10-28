class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //load the images for the sling shot
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        //it is the base of the rubber band
        this.sling3 = loadImage("sprites/sling3.png");

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    

    display(){
        //displat the slingshot on the platform
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            //get the brown colour values for R,G,B from colour zilla
            stroke(48,22,8);
            //if else will take care of the position for the base of the rubber band when stretched aheade of the caterpull
            if(pointA.x<220){
                //to give elastic effect to the rubber band(looks thinner when stretched and thicker when released)
                strokeWeight(7);
                //draw the rubber band and display the base of the rubber band with it 
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3); 
            image(this.sling3,pointA.x-30,pointA.y-10,10,15);
            }
            else{
                strokeWeight(3);
            line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3); 
            image(this.sling3,pointA.x+25,pointA.y-10,10,15);
            }
            
            pop();
         }
    }
    
}