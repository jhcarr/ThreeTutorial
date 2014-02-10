var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 90, window.innerWidth /
                                          window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// MODEL SPACE

var cubeGeometry = new THREE.CubeGeometry( 1, 1, 1 );
var cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
scene.add( cube );

var cube2Geometry = new THREE.CubeGeometry(1,1,1);
var cube2Material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
var cube2 = new THREE.Mesh( cube2Geometry, cube2Material );
scene.add( cube2 );

var radius = 5,
    segments = 16, 
    rings = 16;

var ballMaterial = new THREE.MeshBasicMaterial( { color: 0x0000ff } );

var ball = new THREE.Mesh(
    new THREE.SphereGeometry(
        radius, 
        segments, 
        rings),
    ballMaterial);

scene.add( ball );

// WORLD SPACE

cube2.position.x = 2;
ball.position.z = -10;
camera.position.z = 5;

function render() {
    requestAnimationFrame(render);
    
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    
    renderer.render(scene, camera);
}
render();
