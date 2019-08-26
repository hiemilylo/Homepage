// vars
var num=30;
var objects=[];
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var light,t;

// create camera
var camera = new THREE.PerspectiveCamera
( 65, window.innerWidth/window.innerHeight,
0.1, 1000 );
camera.position.set(0.0,0.0,5);
// create a scene
var scene = new THREE.Scene();

// create renderer
var renderer = new THREE.WebGLRenderer(
{antialias:true});
renderer.setSize( window.innerWidth, window.
innerHeight );
document.body.appendChild( renderer.domElement
);

//Create a Spot light
light = new THREE.SpotLight( 0xccddff,.8 );
light.position.set(0,0,5);
scene.add( light );

var animate = function () {
	requestAnimationFrame( animate );
	renderer.render(scene, camera);
};

// start animation loop
animate();

// create Tetrahedron
var geometry = new THREE.
TetrahedronBufferGeometry(2,0);
var material = new THREE.MeshPhysicalMaterial
( { map:texture,   envMap:envMap,
metalness:1.0,roughness:0.0 });
t = new THREE.Mesh( geometry, material );
t.rotation.x=Math.PI/180*-10;
scene.add( t );

console.log('hi!')
