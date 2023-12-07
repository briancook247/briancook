import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeCanvas = () => {
    const canvasRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvasRef.current.appendChild(renderer.domElement);

        // Your 3D scene setup goes here

        const animate = () => {
            requestAnimationFrame(animate);
            // Animation code goes here
            renderer.render(scene, camera);
        };
        animate();
    }, []);

    return <div ref={canvasRef} />;
};

export default ThreeCanvas;
