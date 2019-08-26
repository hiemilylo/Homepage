// let num=30;
// let raycaster = new THREE.Raycaster();
// let mouse = new THREE.Vector2();
let light, t;

// Camera
let camera = new THREE.PerspectiveCamera
	(65, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(0.0, 0.0, 5);

// Scene and renderer
let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Light source
light = new THREE.SpotLight(0xccddff,.9);
light.position.set(0, 0, 5);
scene.add(light);

// Shape
let geometry = new THREE.TetrahedronBufferGeometry(2,1);
let material = new THREE.MeshPhysicalMaterial({
	wireframe: true
});
t = new THREE.Mesh(geometry, material);
scene.add(t);
scene.background = new THREE.Color("rgb(10, 10, 10)");

let animate = function () {
	requestAnimationFrame(animate);
	t.rotation.y -= 0.005;
	t.rotation.x -= 0.0025;
	camera.lookAt(t.position);
	renderer.render(scene, camera);
};

// start animation loop
animate();

console.log('1')
