// Using Karim Maaloul's code as a guide
// https://bit.ly/2JU9XdV

// THREE VARIABLES
var scene,
    camera,
    controls,
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane,
    renderer,
    container;

// SCENE
var confetti = [],
    confettiColors = [0xC9D757, 0xDE4B72, 0xF1BA48, 0xDE7567, 0x4C94BE, 0xF4F0C9, 0xD93732, 0xC0C1BD, 0xE07F8D, 0xED3D9, 0xF9EF82, 0xFBFCF7];

// SCREEN VARIABLES
var height,
    width,
    windowHalfX,
    windowHalfY;


// TYPEWRITER VARIABLES, Inspired by Josh Collinsworth https://bit.ly/2MaA5CQ
var n = 0;
var textToType = {
  me: "I am a",
  myThings: [" designer.", " programmer."]
};
var target = document.getElementById('blurb');
var interval = 0;
var textIndex = 0;

function typewrite( blurb, target ) {


  if ( typeof( blurb[n] !== 'undefined' ) ) {

    target.textContent += blurb[n];

  }

  if ( blurb[n] == '.' ) {

    setTimeout( function() { backspace(); }, 550 );
  
  }

  interval = Math.floor((Math.random() * 300) + 5);

  n++;

  if ( n < blurb.length ) {

    setTimeout( function() { 

      typewrite( blurb, target );

    }, interval );

  }

}

function backspace() {

  interval = Math.floor((Math.random() * 200) + 5);
  var t = document.getElementById('blurb');

  if ( t.textContent !== textToType.me ) {

    setTimeout( function() {

        t.textContent = t.textContent.toString().slice( 0, -1 );
        backspace();

      }, interval );

  }

  else {

    n = 0;
    textIndex = ( textIndex + 1 ) % textToType.myThings.length;
    typewrite( textToType.myThings[textIndex], target );

  }

}

// SCENE
function init() {
  
  scene = new THREE.Scene();
  height = window.innerHeight;
  width = window.innerWidth;
  aspectRatio = width / height;
  fieldOfView = 60;
  nearPlane = 1;
  farPlane = 2000;
  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
  );
  camera.position.y = 0;
  camera.position.z = 800;
  camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );
  renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( width, height );
  container = document.body;
  container.appendChild( renderer.domElement );
  windowHalfX = width / 2;
  windowHalfY = height / 2;
  window.addEventListener('resize', onWindowResize, false);

  controls = new THREE.OrbitControls( camera, renderer.domElement );
  
}

function onWindowResize() {
  
  height = window.innerHeight;
  width = window.innerWidth;
  windowHalfX = width / 2;
  windowHalfY = height / 2;
  renderer.setSize( width, height );
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  
}

function createConfetti( t, n ) {
  
  for ( var i = 0; i < t; i++ ) {
    
    var con = new Confetti( confettiColors[Math.round(Math.random() * 10) % confettiColors.length] );
    con.threegroup.position.x = Math.sin(Math.PI / ( Math.random() )) * ( width / n );
    con.threegroup.position.y = Math.cos(Math.PI / ( Math.random() )) * ( height / n ) - Math.random()*10;
    con.threegroup.position.z = 50 * Math.random() * 10 - t;
    confetti.push( con );
    scene.add( con.threegroup );
  
  }
  
}

// CONFETTI
Confetti = function( c ) {
  
  var plane = new THREE.PlaneBufferGeometry( width / 40, width / 20, 32 );
  this.material = new THREE.MeshBasicMaterial( {
    
    color: c,
    transparent: true,
    opacity: Math.random() * 1.2,
    side: THREE.DoubleSide
    
  } );
  this.confetto = new THREE.Mesh( plane, this.material );
  
  this.threegroup = new THREE.Group();
  this.threegroup.add( this.confetto );
  this.threegroup.lookAt( new THREE.Vector3(Math.random() * 10, Math.random() * 80, 60 ) );

}

Confetti.prototype.update = function() {
  
  if ( this.threegroup.position.y < height && this.threegroup.position.y > -height ) {
    this.threegroup.position.y -= 1;
    this.threegroup.rotateY( Math.random() * 0.05 );
    this.threegroup.rotateZ( Math.random() * 0.01 );
  }
  
  else {
    this.threegroup.position.y = height - 1;
  }
  
}

Confetti.prototype.move = function( mx, my, rect ) {

  this.threegroup.position.y =( ( my - rect.top ) - windowHalfY ) / ( windowHalfY ) ;
  this.threegroup.position.x =  ( ( mx - rect.left ) - windowHalfX ) / ( windowHalfX ) ;
  
}

// METHODS
function loop() {
  render();
  
  for ( var i = 0; i < confetti.length; i++ ) {
   confetti[i].update();
  }
  
  requestAnimationFrame( loop );
}

function render() {
  if (controls) controls.update();
  renderer.render( scene, camera );
}

// CALLS
init();

// Make less but bigger confetti for optimal speed on phones
if (screen.width <= 480) {
  createConfetti( 4, 9 );
}
else createConfetti( 25, 1 );
if ( target ) backspace();
loop();