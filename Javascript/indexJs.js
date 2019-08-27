// let num=30
// let raycaster = new THREE.Raycaster()
// let mouse = new THREE.Vector2()
let light, t
let deltaX = 0.0025
let deltaY = 0.0025

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
}

// start animation loop
animate()

window.addEventListener('resize', onWindowResize, false)

function onWindowResize(){
	camera = new THREE.PerspectiveCamera
			 (65, window.innerWidth/window.innerHeight, 0.1, 1000)
	camera.position.set(0.0, 0.0, 5)
    renderer.setSize( window.innerWidth, window.innerHeight )
}

console.log('1')
