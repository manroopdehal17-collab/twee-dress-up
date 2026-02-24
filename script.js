/* script.js files */
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.150.1/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.150.1/examples/jsm/controls/OrbitControls.js';  
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.150.1/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let mouseX = window.innerWidth;
let mouseY = window.innerHeight;

let object;

let controls;

let obJToRender = "mymodel" ;

const loader = new GLTFLoader();
loader.load('path/to/your/MODEL.gltf', function(gltf) {
    object = gltf.scene;
    scene.add(gltf.scene);
    object.scale.set(0.01, 0.01, 0.01);
    object.position.set(0, -1, 0);
}, undefined, function(error) {
    console.error(error);
});

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('dollArea').appendChild(renderer.domElement);

camera.position.z = obJToRender === "mymodel" ? 5 : 10;

const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(0, 1, 0);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

if (obJToRender === "mymodel") {
    controls = new OrbitControls(camera, renderer.domElement);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

animate();