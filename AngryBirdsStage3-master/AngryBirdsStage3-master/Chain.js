class Chain{
    constructor(bird, Pig1){
        var options = {
            bodyA: bird,
            bodyB: Pig1,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        //line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}