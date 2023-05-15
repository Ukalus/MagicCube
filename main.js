import * as THREE from 'three';
import { createRubixCube} from './Rubix.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5,0,0)
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xffffff,0)
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const rubixParent = new THREE.Object3D();

const faceGeometry = new THREE.PlaneGeometry(1,1);
    const faceRedMaterial = new THREE.MeshBasicMaterial({color: 0xff0000})
    const faceGreenMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff})
    const faceYellowMaterial = new THREE.MeshBasicMaterial({color: 0xffff00})
    const faceOrangeMaterial = new THREE.MeshBasicMaterial({color: 0xff00ff})
    const faceWhiteMaterial = new THREE.MeshBasicMaterial({color: 0xffffff})
    const faceBlueMaterial = new THREE.MeshBasicMaterial({color: 0x00ffff})

       
let rubixCube = createRubixCube(3)
for(let cubie of rubixCube){

    
    const cube = new THREE.Object3D();
   
    cube.position.set(cubie.position[0] - 1,cubie.position[1] -1,cubie.position[2] -1)

    if(cubie.position[2] === 2){
        const plane = new THREE.Mesh(faceGeometry,faceRedMaterial);
        plane.position.set(0,0,0.5)
        cube.add(plane)
    }
    if(cubie.position[2] === 0){
        const plane = new THREE.Mesh(faceGeometry,faceGreenMaterial);
        plane.position.set(0,0,-0.5)
        plane.rotateY(Math.PI / 1)
        
        cube.add(plane)
    }

    if(cubie.position[1] === 2){
        const plane = new THREE.Mesh(faceGeometry,faceYellowMaterial);
        plane.rotateX(Math.PI / -2)
        plane.position.set(0,0.5,0);

        cube.add(plane)
    }
    if(cubie.position[1] === 0){
        const plane = new THREE.Mesh(faceGeometry,faceOrangeMaterial);
        plane.rotateX(Math.PI / 2)
        plane.position.set(0,-0.5,0);

        
        cube.add(plane)
    }

    if(cubie.position[0] === 2){
        const plane = new THREE.Mesh(faceGeometry,faceWhiteMaterial);
        
        plane.position.set(0.5,0,0);
        plane.rotateY(Math.PI / 2)

        cube.add(plane)
    }
    if(cubie.position[0] === 0){
        const plane = new THREE.Mesh(faceGeometry,faceBlueMaterial);
        
        plane.position.set(-0.5,0,0);
        plane.rotateY(Math.PI / -2)

        
        cube.add(plane)
    }

    
    rubixParent.add(cube)
}




console.log(rubixParent.children.length)

scene.add(rubixParent);


document.onkeydown = function(e){
    console.log(e.key)
        if(e.key === "w"){
            for(let i = 0; i < rubixParent.children.length; i++){
                
                if(rubixParent.children[i].position.x === -1){
                //Rotate the matrix
                    console.log(rubixParent.children[i].position)
                    let rotationMatrix = new THREE.Matrix4()
                    rotationMatrix.makeRotationX(Math.PI / 2);            
                    rubixParent.children[i].applyMatrix4(rotationMatrix);
                    rubixParent.children[i].position.x = Math.round(rubixParent.children[i].position.x);
                    rubixParent.children[i].position.y = Math.round(rubixParent.children[i].position.y);
                    rubixParent.children[i].position.z = Math.round(rubixParent.children[i].position.z);
                    console.log(rubixParent.children[i].position)
                }
        
            }
        }
        else if(e.key === "e"){
            for(let i = 0; i < rubixParent.children.length; i++){
                
                if(rubixParent.children[i].position.x === 0){
                //Rotate the matrix
                    console.log(rubixParent.children[i].position)
                    let rotationMatrix = new THREE.Matrix4()
                    rotationMatrix.makeRotationX(Math.PI / 2);            
                    rubixParent.children[i].applyMatrix4(rotationMatrix);
                    rubixParent.children[i].position.x = Math.round(rubixParent.children[i].position.x);
                    rubixParent.children[i].position.y = Math.round(rubixParent.children[i].position.y);
                    rubixParent.children[i].position.z = Math.round(rubixParent.children[i].position.z);
                    console.log(rubixParent.children[i].position)
                }
        
            }
        }
        else if(e.key === "r"){
            for(let i = 0; i < rubixParent.children.length; i++){
                
                if(rubixParent.children[i].position.x === 1){
                //Rotate the matrix
                    console.log(rubixParent.children[i].position)
                    let rotationMatrix = new THREE.Matrix4()
                    rotationMatrix.makeRotationX(Math.PI / 2);            
                    rubixParent.children[i].applyMatrix4(rotationMatrix);
                    rubixParent.children[i].position.x = Math.round(rubixParent.children[i].position.x);
                    rubixParent.children[i].position.y = Math.round(rubixParent.children[i].position.y);
                    rubixParent.children[i].position.z = Math.round(rubixParent.children[i].position.z);
                    console.log(rubixParent.children[i].position)
                }
        
            }
        }
        else if(e.key === "s"){
            for(let i = 0; i < rubixParent.children.length; i++){
            
                if(rubixParent.children[i].position.y === -1){
                //Rotate the matrix
                    console.log(rubixParent.children[i].position)
                    let rotationMatrix = new THREE.Matrix4()
                    rotationMatrix.makeRotationY(Math.PI / 2);            
                    rubixParent.children[i].applyMatrix4(rotationMatrix);
                    rubixParent.children[i].position.x = Math.round(rubixParent.children[i].position.x);
                    rubixParent.children[i].position.y = Math.round(rubixParent.children[i].position.y);
                    rubixParent.children[i].position.z = Math.round(rubixParent.children[i].position.z);
                    console.log(rubixParent.children[i].position)
    
                    
                }
            }
        }
        else if(e.key === "d"){
            for(let i = 0; i < rubixParent.children.length; i++){
            
                if(rubixParent.children[i].position.y === 0){
                //Rotate the matrix
                    console.log(rubixParent.children[i].position)
                    let rotationMatrix = new THREE.Matrix4()
                    rotationMatrix.makeRotationY(Math.PI / 2);            
                    rubixParent.children[i].applyMatrix4(rotationMatrix);
                    rubixParent.children[i].position.x = Math.round(rubixParent.children[i].position.x);
                    rubixParent.children[i].position.y = Math.round(rubixParent.children[i].position.y);
                    rubixParent.children[i].position.z = Math.round(rubixParent.children[i].position.z);
                    console.log(rubixParent.children[i].position)
    
                    
                }
            }
        }
        else if(e.key === "f"){
            for(let i = 0; i < rubixParent.children.length; i++){
            
                if(rubixParent.children[i].position.y === 1){
                //Rotate the matrix
                    console.log(rubixParent.children[i].position)
                    let rotationMatrix = new THREE.Matrix4()
                    rotationMatrix.makeRotationY(Math.PI / 2);            
                    rubixParent.children[i].applyMatrix4(rotationMatrix);
                    rubixParent.children[i].position.x = Math.round(rubixParent.children[i].position.x);
                    rubixParent.children[i].position.y = Math.round(rubixParent.children[i].position.y);
                    rubixParent.children[i].position.z = Math.round(rubixParent.children[i].position.z);
                    console.log(rubixParent.children[i].position)
    
                    
                }
            }
        }
        else if(e.key === "x"){
            for(let i = 0; i < rubixParent.children.length; i++){
            
                if(rubixParent.children[i].position.z === -1){
                //Rotate the matrix
                    console.log(rubixParent.children[i].position)
                    let rotationMatrix = new THREE.Matrix4()
                    rotationMatrix.makeRotationZ(Math.PI / 2);            
                    rubixParent.children[i].applyMatrix4(rotationMatrix);
                    rubixParent.children[i].position.x = Math.round(rubixParent.children[i].position.x);
                    rubixParent.children[i].position.y = Math.round(rubixParent.children[i].position.y);
                    rubixParent.children[i].position.z = Math.round(rubixParent.children[i].position.z);
                    console.log(rubixParent.children[i].position)
    
                    
                }
            }
        }
        else if(e.key === "c"){
            for(let i = 0; i < rubixParent.children.length; i++){
            
                if(rubixParent.children[i].position.z === 0){
                //Rotate the matrix
                    console.log(rubixParent.children[i].position)
                    let rotationMatrix = new THREE.Matrix4()
                    rotationMatrix.makeRotationZ(Math.PI / 2);            
                    rubixParent.children[i].applyMatrix4(rotationMatrix);
                    rubixParent.children[i].position.x = Math.round(rubixParent.children[i].position.x);
                    rubixParent.children[i].position.y = Math.round(rubixParent.children[i].position.y);
                    rubixParent.children[i].position.z = Math.round(rubixParent.children[i].position.z);
                    console.log(rubixParent.children[i].position)
    
                    
                }
            }
        }
        else if(e.key === "v"){
            for(let i = 0; i < rubixParent.children.length; i++){
            
                if(rubixParent.children[i].position.z === 1){
                //Rotate the matrix
                    console.log(rubixParent.children[i].position)
                    let rotationMatrix = new THREE.Matrix4()
                    rotationMatrix.makeRotationZ(Math.PI / 2);            
                    rubixParent.children[i].applyMatrix4(rotationMatrix);
                    rubixParent.children[i].position.x = Math.round(rubixParent.children[i].position.x);
                    rubixParent.children[i].position.y = Math.round(rubixParent.children[i].position.y);
                    rubixParent.children[i].position.z = Math.round(rubixParent.children[i].position.z);
                    console.log(rubixParent.children[i].position)
    
                    
                }
            }
        }
        
        
            
        
    }

    

    


camera.position.z = 5
rubixParent.rotation.x = Math.PI / 4;
rubixParent.rotation.y = Math.PI / 16;


const controls = new OrbitControls( camera, renderer.domElement );
let clock = new THREE.Clock()
function animate(){
    requestAnimationFrame(animate);
    let cubies = [];
    

    controls.update()
    renderer.render( scene, camera);
    
}
animate()