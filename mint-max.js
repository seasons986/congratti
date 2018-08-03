var scene, camera, controls, fieldOfView, aspectRatio, nearPlane, farPlane, renderer, container;

var confetti = [], confettiColors = [ 13227863, 14568306, 15841864, 14579047, 5018814, 16052425, 14235442, 12632509, 14712717, 971737, 16379778, 16514295 ];

var height, width, windowHalfX, windowHalfY;

var n = 0;

var textToType = {
    me: "I am a",
    myThings: [ " designer.", " programmer." ]
};

var target = document.getElementById("blurb");

var interval = 0;

var textIndex = 0;

function typewrite(blurb, target) {
    if (typeof (blurb[n] !== "undefined")) {
        target.textContent += blurb[n];
    }
    if (blurb[n] == ".") {
        setTimeout(function() {
            backspace();
        }, 550);
    }
    interval = Math.floor(Math.random() * 300 + 5);
    n++;
    if (n < blurb.length) {
        setTimeout(function() {
            typewrite(blurb, target);
        }, interval);
    }
}

function backspace() {
    interval = Math.floor(Math.random() * 200 + 5);
    var t = document.getElementById("blurb");
    if (t.textContent !== textToType.me) {
        setTimeout(function() {
            t.textContent = t.textContent.toString().slice(0, -1);
            backspace();
        }, interval);
    } else {
        n = 0;
        textIndex = (textIndex + 1) % textToType.myThings.length;
        typewrite(textToType.myThings[textIndex], target);
    }
}

function init() {
    scene = new THREE.Scene();
    height = window.innerHeight;
    width = window.innerWidth;
    aspectRatio = width / height;
    fieldOfView = 60;
    nearPlane = 1;
    farPlane = 2e3;
    camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
    camera.position.y = 0;
    camera.position.z = 800;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    container = document.body;
    container.appendChild(renderer.domElement);
    windowHalfX = width / 2;
    windowHalfY = height / 2;
    window.addEventListener("resize", onWindowResize, false);
    if (screen.width > 480) controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function onWindowResize() {
    height = window.innerHeight;
    width = window.innerWidth;
    windowHalfX = width / 2;
    windowHalfY = height / 2;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}

function createConfetti(t, n) {
    for (var i = 0; i < t; i++) {
        var con = new Confetti(confettiColors[Math.round(Math.random() * 10) % confettiColors.length]);
        con.threegroup.position.x = Math.sin(Math.PI / Math.random()) * (width / n);
        con.threegroup.position.y = Math.cos(Math.PI / Math.random()) * (height / n) - Math.random() * 10;
        con.threegroup.position.z = 50 * Math.random() * 10 - t;
        confetti.push(con);
        scene.add(con.threegroup);
    }
}

Confetti = function(c) {
    var plane = new THREE.PlaneBufferGeometry(width / 40, width / 20, 32);
    this.material = new THREE.MeshBasicMaterial({
        color: c,
        transparent: true,
        opacity: Math.random() * 1.2,
        side: THREE.DoubleSide
    });
    this.confetto = new THREE.Mesh(plane, this.material);
    this.threegroup = new THREE.Group();
    this.threegroup.add(this.confetto);
    this.threegroup.lookAt(new THREE.Vector3(Math.random() * 10, Math.random() * 80, 60));
};

Confetti.prototype.update = function() {
    if (this.threegroup.position.y < height && this.threegroup.position.y > -height) {
        this.threegroup.position.y -= 1;
        this.threegroup.rotateY(Math.random() * .05);
        this.threegroup.rotateZ(Math.random() * .01);
    } else {
        this.threegroup.position.y = height - 1;
    }
};

Confetti.prototype.move = function(mx, my, rect) {
    this.threegroup.position.y = (my - rect.top - windowHalfY) / windowHalfY;
    this.threegroup.position.x = (mx - rect.left - windowHalfX) / windowHalfX;
};

function loop() {
    render();
    for (var i = 0; i < confetti.length; i++) {
        confetti[i].update();
    }
    requestAnimationFrame(loop);
}

function render() {
    if (controls) controls.update();
    renderer.render(scene, camera);
}

init();

if (screen.width <= 480) {
    createConfetti(4, 9);
    render();
} else {
    createConfetti(25, 1);
    loop();
}

if (target) backspace();