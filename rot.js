//TODO: wheel object for rotating.
//TODO: make a smart rotate that rotates and moves along
//the ground at the correct (non-slipping) speed.
//TODO: make documentation
var wheel = function(_x,_y,_d){
    this.x = _x; //x position
    this.y = _y; //y position
    this.r = _d/2; //radius
    this.d = _d;

    //rotation variables
    this.rotate = false;
    this.ang = 0;
    this.ang_speed = 1;

    //decorations for wheel
    this.vdecorate = false;
    this.cdecorate = true;
};
wheel.prototype.draw = function(){
    push();
    //angleMode(DEGREES);
    translate(this.x,this.y);
    //manage the rotation if this.rotate == true
    if(this.rotate == true){
        rotate(this.ang);
        this.ang += this.ang_speed;
        if(this.ang >= 360) this.ang = 0;
    }
    //draw the circles
    fill(0);
    ellipse(0,0,this.d,this.d);
    fill(200);
    ellipse(0,0,this.d*0.8,this.d*0.8); 
    fill(0);
    ellipse(0,0,this.d*0.05,this.d*0.05); 
    
    //test marks
    //fill(255,255,0);
    //ellipse(40,0,20,20);

    //draw the spokes of the wheel
    stroke(0);
    for(var i = 0;i<16;i++){
        line(0,0,
             (this.r-2)*cos(30*i),
             (this.r-2)*sin(30*i));
    }

    //..............................
    // draw the decorations if any
    //..............................
    
    if(this.cdecorate == true){
        //tire markers (ie. points A & B) for distance S
            //arc colors for length S
        stroke(255,0,0);
        strokeWeight(4);
        noFill();
        arc(0,0,this.d,this.d,0,180);
        stroke(0,0,255);
        arc(0,0,this.d,this.d,180,360);
            //point colors
        noStroke();
        fill(255,0,0); //red for point A;
        ellipse(this.r,0,10,10);
        fill(30,30,255); //blue for point B;
        ellipse(-this.r,0,10,10);
    }

    if(this.vdecorate == true){

    }
    pop();
};
wheel.prototype.update = function(){};
