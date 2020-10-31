var angle;
var slider_angle, slider_length;
var length;
var nrOfLines;

//parameters: len = length of current line
//          : nrLines = number of lines
function drawTree(len, nrLines) {
    
    var colour = map(len, 0, 200, 20, 360);
    stroke(colour, 100, 100 );
    line(0, 0, 0, -len);
    translate(0, -len);

    if (nrLines > 0) {
        push();
        rotate(angle);
        drawTree(len * 0.67,nrLines-1);
        pop();

        push();
        rotate(-angle);
        drawTree(len * 0.67,nrLines-1);
        pop();
    }
}

function setup() {
    createCanvas(780, 600);
    colorMode(HSB);
    frameRate(60);

    slider_angle = createSlider(0, PI, 0.84,0.01);
    slider_angle.style('width', '50%');

    slider_length = createSlider(50, 200, 170, 0.01);
    slider_length.style('width', '50%');
}


function draw() {
    background(217, 0, 45);
    
    angle = slider_angle.value();
    length = slider_length.value();
    nrOfLines = map(slider_length.value(), 50, 300, 5, 14);
    translate(width/2, height);
    
    drawTree(length,nrOfLines);
}

