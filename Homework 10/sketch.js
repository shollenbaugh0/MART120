var headX = 250;
var headY = 100;
var headDirection = 1;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 8;

var size = 22;
var count = 2;
var sizeDirection = 2;
function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(120,45,78);
    textSize(22)
    text("Self-Portrait", 10,80);

    // head
    fill(250, 229, 211);
    circle(headX,headY,175);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }

    // eyes
    strokeWeight(10);
    fill(0);
    point(200,75);
    point(285,75);

    // nose
    point(245,90);
    
    // mouth
    ellipse(245, 135, 30, 45)

    // hair
    line(130,175,175,50);
    line(325,50,360,175);
    // body
    fill(249, 231, 159);
    rect(200,bodyY,100,150);
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 450 )
    {
        bodyDirection *= -1;
    }
    
    
    fill(120);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Savanah Hollenbaugh",200,600 );


}