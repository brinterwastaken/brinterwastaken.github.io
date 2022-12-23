import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

import './style.css'

import { Scene, PerspectiveCamera, WebGLRenderer, PCFSoftShadowMap, MeshPhysicalMaterial, PointLight, AmbientLight } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const scene = new Scene();

const camera = new PerspectiveCamera( 40, 1, 0.1, 1000 );

const renderer = new WebGLRenderer({
  canvas: document.querySelector('#threejs'),
  alpha: true,
})
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFSoftShadowMap;

renderer.setPixelRatio( window.devicePixelRatio );
var rendererSize = window.innerWidth >= 500 ? 500 : window.innerWidth;
renderer.setSize( rendererSize, rendererSize );
camera.position.setZ(60);

var bonut, icing
const gltfLoader = new GLTFLoader();
gltfLoader.load('bonut/bonut.glb', (gltf) => {
  bonut = gltf.scene.children.find((child) => child.name === "donut");
  icing = gltf.scene.children.find((child) => child.name === "icing");
  bonut.material = new MeshPhysicalMaterial({
    color: 0x6b4d34,
    roughness: 0.5,
  })
  icing.material = new MeshPhysicalMaterial({ 
    color: 0xdc6dde,
    roughness: 0.2,
  });
  bonut.scale.set( 10, 10, 10 );
  bonut.castShadow = true;
  bonut.receiveShadow = true;
  bonut.name = "bonut"
  icing.scale.set( 10, 10, 10 );
  icing.castShadow = true;
  icing.receiveShadow = true;
  icing.name = "icing"
  gltf.scene.children.forEach(child => {
    child.rotation.x = 0.75;
    child.rotation.z = 0.5;
  })
  scene.add( bonut, icing );
});

const pointLight = new PointLight(0xffffff);
pointLight.position.set(20,20,20);
pointLight.castShadow = true;

const ambientLight = new AmbientLight(0xd8dff0);

scene.add(pointLight, ambientLight);

window.onresize = () => {
  
  var rendererSize = window.innerWidth >= 500 ? 500 : window.innerWidth;
  renderer.setSize( rendererSize, rendererSize );
}


function animate() {

  requestAnimationFrame( animate );

  renderer.render( scene, camera );

  bonut.rotateY(0.0025);
  icing.rotateY(0.0025);

}
    
animate();