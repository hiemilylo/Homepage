let numParticles = 0
let particles = []
let raycaster = new THREE.Raycaster()
let mouse = new THREE.Vector2()
let light, t
let deltaX = 0.0025
let deltaY = 0.0025
let particleDelta = 0.005

// Camera
let camera = new THREE.PerspectiveCamera
	(65, window.innerWidth/window.innerHeight, 0.1, 1000)
camera.position.set(0.0, 0.0, 5)

// Scene and renderer
let scene = new THREE.Scene()
let renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)
document.getElementById('landing').appendChild(renderer.domElement)

// Light source
light = new THREE.SpotLight(0xccddff, 13)
light.position.set(0, 0, 5)
scene.add(light)

// Shape
let geometry = new THREE.TetrahedronBufferGeometry(2,1)
let material = new THREE.MeshPhysicalMaterial({
	wireframe: true
})
t = new THREE.Mesh(geometry, material)
scene.add(t)
scene.background = new THREE.Color("rgb(10, 10, 10)")

let animate = function () {
	requestAnimationFrame(animate)
	t.rotation.y += deltaY
	t.rotation.x += deltaX
	camera.lookAt(t.position)
	renderer.render(scene, camera)
	for (let i = 0; i < numParticles; i++){
		let o = particles[i]
		o.rotation.y += .01
		if( i % 2 == 0) {
			o.radians  += particleDelta
			o.radians2 += particleDelta
		} else {
			o.radians -= particleDelta
			o.radians2 -= particleDelta
		}
		o.position.x = (Math.cos(o.radians) * o.distance)
		o.position.z = (Math.sin(o.radians) * o.distance)
		o.position.y = (Math.sin(o.radians2) * o.distance*.5)
	}
}

// Particles
for (let i= 0; i < numParticles; i++) {
	// Mesh
	let geometry = new THREE.SphereBufferGeometry(.1,6,6)
	let material = new THREE.MeshPhysicalMaterial({
		metalness: 1.0
	})
	let particle = new THREE.Mesh(geometry, material)
	// set random position
	particle.position.set(Math.random() * 100.0 - 50.0, 0.0, Math.random() * -10.0 - 10)
	var a = new THREE.Vector3(0, 0, 0)
	var b = particle.position
	var d = a.distanceTo(b)
	particle.distance = d
	particle.radians = Math.random()*360 * Math.PI/180
	particle.radians2 = Math.random()*360 * Math.PI/180
	scene.add(particle)
	particles.push(particle)
}

// start animation loop
animate()

window.addEventListener('resize', onWindowResize, false)

function onWindowResize(){
	camera = new THREE.PerspectiveCamera
			 (65, window.innerWidth/window.innerHeight, 0.1, 1000)
	camera.position.set(0.0, 0.0, 5)
    renderer.setSize(window.innerWidth, window.innerHeight)
}

console.log('1')
