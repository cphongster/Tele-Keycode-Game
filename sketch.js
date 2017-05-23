//var keycodes = ["016B", "026B", "036B", "216B", "426C", "638C", "848D", "134B", "313B", "576C", "798D", "935B"];
var keycodes = [
  [48, 49, 54, 66],
  [48, 50, 54, 66],
  [48, 51, 54, 66],
  [50, 49, 54, 66],
  [52, 50, 54, 67],
  [56, 52, 56, 68],
  [49, 51, 52, 66],
  [51, 49, 51, 66],
  [53, 55, 54, 67],
  [55, 57, 56, 68],
  [57, 51, 53, 66]
];
var code, codenumber;
var fulldesk, table, openelevator;
var cat, dog;
var inData;
var position = 1;
var life = 9;
var wincondition = false;

var speech1, speech2, speech3, speech4, speech6, speechbubble;
var life1, life2, life3, life4, life5, life6, life7, life8, life9, passable, position0, death;
var speechcount = 1;



function setup() {
  createCanvas(600, 400);
  imageMode(CENTER);
  frameRate(40);

  fulldesk = loadImage("assets/fulldesk.png");
  table = loadImage("assets/table.png");
  openelevator = loadImage("assets/openelevator.png");

  speech1 = loadImage('assets/Speech1.png');
  speech2 = loadImage('assets/Speech2.png');
  speech3 = loadImage('assets/Speech3.png');
  speech4 = loadImage('assets/Speech4.png');
  speech5 = loadImage('assets/Speech6.png');

  speechbubble = loadImage('assets/speechbubble.png');

  life1 = loadImage('assets/life1.png');
  life2 = loadImage('assets/life2.png');
  life3 = loadImage('assets/life3.png');
  life4 = loadImage('assets/life4.png');
  life5 = loadImage('assets/life5.png');
  life6 = loadImage('assets/life6.png');
  life7 = loadImage('assets/life7.png');
  life8 = loadImage('assets/life8.png');
  life9 = loadImage('assets/life9.png');
  passable = loadImage('assets/life10.png');
  position0 = loadImage('assets/life11.png');
  death = loadImage('assets/life13.png');

  cat = createSprite(width / 2, height / 2);
  cat.addAnimation("idle", "assets/catidle1.png", "assets/catidle10.png");
  dog = createSprite(width / 2, height / 2);
  dog.addAnimation("idle", "assets/dogidle1.png", "assets/dogidle10.png");

  // button = createButton('Why hello there');
  // //button.position(x,y);
  // button.mousePressed();

  // SERIAL
  serial = new p5.SerialPort(); // make a new instance of the serialport library

  //serial.on('list',printList);  // set a callback function for the serialport list event

  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClose); // callback for the port closing

  serial.list(); // list the serial ports
  serial.open('COM3'); // open a serial port

  console.log("Choosing Code");
  codenumber = floor(random(keycodes.length));
  //console.log(codenumber);
  code = keycodes[codenumber];
  console.log(code);
}

//SERIAL SETUP
function serverConnected() {
  println('connected to server.');
}

function portOpen() {
  println('the serial port opened.')
}

function serialError(err) {
  println('Something went wrong with the serial port. ' + err);
}

function portClose() {
  println('The serial port closed.');
}

function serialEvent() {
  console.log("Position:" + position);
  inData = Number(serial.read());
  console.log("At Serial Event:" + inData);

  keylock();
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    // console.log("Old speech:" + speechcount);
    speechcount++;
    // console.log("Next speech" + speechcount);
    // if (speechcount > 5) {
    //   speechcount = 1;
    //   console.log("Reset");
    // }
  } else if (keyCode === LEFT_ARROW) {
    // console.log("Old speech:" + speechcount);
    speechcount--;
    //console.log("Last speech" + speechcount);
    // if (speechcount < 1) {
    //   speechcount = 5;
    //   console.log("Loop around");
    // }
  }
}

function draw() {
  // console.log(position);
  image(fulldesk, width / 2, height / 2);
  drawSprite(dog);

  image(table, width / 2, height / 2);

  if (wincondition === true) {
    image(openelevator, width / 2, height / 2);
  }
  introspeechcounter();
  drawSprite(cat);
  lifecounter();


}

function introspeechcounter() {
  if (speechcount === 1) {
    image(speech1, width / 2, height / 2);
  } else if (speechcount === 2) {
    image(speech2, width / 2, height / 2);
  } else if (speechcount === 3) {
    image(speech3, width / 2, height / 2);
  } else if (speechcount === 4) {
    image(speech4, width / 2, height / 2);
  } else if (speechcount === 5) {
    image(speech5, width / 2, height / 2);
  } else {
    image(speechbubble, width / 2, height / 2);
    image(life9, width / 2, height / 2);
    image(position0, width / 2, height / 2);
  }
}

function lifecounter() {

  if (speechcount > 5) {
    image(speechbubble, width / 2, height / 2);

    if (life === 9) {
      image(life9, width / 2, height / 2);

    } else if (life === 8) {
      image(life8, width / 2, height / 2);
      image(passable, width / 2, height / 2);
    } else if (life === 7) {
      image(life7, width / 2, height / 2);
      image(passable, width / 2, height / 2);
    } else if (life === 6) {
      image(life6, width / 2, height / 2);
      image(passable, width / 2, height / 2);
    } else if (life === 5) {
      image(life5, width / 2, height / 2);
      image(passable, width / 2, height / 2);
    } else if (life === 4) {
      image(life4, width / 2, height / 2);
      image(passable, width / 2, height / 2);
    } else if (life === 3) {
      image(life3, width / 2, height / 2);
      image(passable, width / 2, height / 2);
    } else if (life === 2) {
      image(life2, width / 2, height / 2);
      image(passable, width / 2, height / 2);
    } else if (life === 1) {
      image(life1, width / 2, height / 2);
    } else if (life === 0) {
      image(dead, width / 2, height / 2);
    } else if (position === 2) {
      image(passable.width / 2, height / 2);
    }
  }
}

function keylock() {
  if (position === 1) {
    image(position0, width / 2, height / 2);
    if (inData === code[0]) {
      console.log("Position 1 correct");
      position++;
    } else {
      console.log("Position 1 failed");
      position = 1;
      life--;
    }
    console.log("Life:" + life);
  } else if (position === 2) {
    // image(passable.width/2,height/2);
    if (inData === code[1]) {
      console.log("Position 2 correct");
      position++;
    } else {
      console.log("Position 2 failed");
      position = 1;
      life--;
    }
    console.log("Life:" + life);
  } else if (position === 3) {
    if (inData === code[2]) {
      console.log("Position 3 correct");
      position++;
    } else {
      console.log("Position 3 failed");
      position = 1;
      life--;
    }
    console.log("Life:" + life);
  } else if (position === 4) {
    if (inData === code[3]) {
      console.log("Position 4 correct");
      position++;
      wincondition = true;
    } else {
      console.log("Position 4 failed");
      position = 1;
      life--;
    }
    console.log("Life:" + life);
  }
}