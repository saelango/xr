import * as THREE from 'three'
import horizontalGridVertexShader from '../../shaders/horizontalGrid/vertex.glsl'
import horizontalGridFragmentShader from '../../shaders/horizontalGrid/fragment.glsl'
import Experience from '../Experience.js'

export default class Floor {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        // this.resources = this.experience.resources
        this.debug = this.experience.debug;

        this.geometry = new THREE.PlaneGeometry(30, 30);

        // Use the correct raw image URL
        const imageURL = 'https://raw.githubusercontent.com/saelango/xr/main/ucbcampusmap.jpeg';
        const floorTexture = new THREE.TextureLoader().load(imageURL);
        floorTexture.wrapS = THREE.RepeatWrapping;
        floorTexture.wrapT = THREE.RepeatWrapping;
        floorTexture.repeat.set(1, 1);

        this.imageMaterial = new THREE.MeshBasicMaterial({ map: floorTexture });

        this.floorPlane = new THREE.Mesh(this.geometry, this.imageMaterial);
        this.floorPlane.rotation.x = -Math.PI / 2;
        this.scene.add(this.floorPlane);
    }
}

// Akash's comment