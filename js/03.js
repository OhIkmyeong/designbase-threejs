import * as THREE from "./../node_modules/three/build/three.module.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color('#ffcd01');

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1 ,1000);

const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.render(scene,camera)

function render(time){
    time *= 0.01;
    // cube.rotation.x = time;
    // cube.rotation.y = time;
    renderer.render(scene,camera);
    requestAnimationFrame(render)
}//render
requestAnimationFrame(render)