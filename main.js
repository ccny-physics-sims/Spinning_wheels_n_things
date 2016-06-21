//code stub.
//
function setup(){
    createCanvas(640,480);
    w = new wheel(width/4,height/2,120);
    w.rotate = true;    //make the wheel begin rotating
                        //at the begining.

    w.ang = -90;    //set the initial starting position
                    //to start on red.
                    
    w.ang_speed = 2;
    angleMode(DEGREES);
    on = true;

    //set framerate
    //frameRate(60);
}
function draw(){
    background(121,209,254);

    //draw ground
    noStroke();
    fill('grey');
    rect(0,height/2+w.r+2,width,height/2-w.r-2);

    //draw the colored streaks on the ground
    push();
    //var colorcheck;
    /*
    if(w.ang >= 270 || w.ang <= 90){
        stroke(255,0,0);
        colorcheck = "red";
    }
    else{
        stroke(0,0,255);
        colorcheck = "blue";
    }
    */
    stroke(255,0,0);
    strokeWeight(3); 
    line(width/4,height/2+w.r+2,PI*w.r+width/4,height/2+w.r+2);
    stroke(0,0,255);
    line(width/4+PI*w.r,height/2+w.r+2,2*PI*w.r+width/4,height/2+w.r+2);
    pop();

    //draw the wheel.
    w.draw();    

    //code that handles the moving loop of the wheel.
    if(w.x > 2*w.r*PI+width/4) w.x = width/4;
    w.x += w.ang_speed/180 * w.r*PI;
}
function mouseClicked(){
    if(on == true){
        on = false;
        noLoop();
    }
    else{
        on = true;
        loop();
    }
}
