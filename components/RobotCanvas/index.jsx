"use client";

import React, {useState} from 'react';
import styles from './style.module.scss';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, useGLTF, Environment} from "@react-three/drei";
import { Suspense, useRef } from "react";

const Robot = (props) => {
	const { nodes, materials } = useGLTF('./models/phantoms-transformed.glb');
	const $mesh = useRef();
	return (
		<>
			<group {...props} dispose={null} ref={$mesh}>
				<group position={[-0.21, 0.16, 0.37]} rotation={[0, 0, 0]} scale={0.5}>
					<mesh geometry={nodes.Cube003.geometry} material={materials.Metal} castShadow={true}>
						<meshPhysicalMaterial
							color="#aaa"
							roughness={0.2}
							metalness={1}
							reflectivity={0.5}
							iridescence={0.3}
							iridescenceIOR={1}
							iridescenceThicknessRange={[100,1000]}
						/>
					</mesh>
					<mesh geometry={nodes.Cube003_1.geometry} material={materials.Metal} castShadow={true}>
						<meshPhysicalMaterial
							color="#000000"
							roughness={1}
							emissive='#9ef50e'
							clearcoat={1}
							reflectivity={0.2}
							metalness={0}
							iridescence={0.1}
							iridescenceIOR={1}
							iridescenceThicknessRange={[100,1000]}
						/>
					</mesh>
				</group>
			</group>
		</>
	)
}
const Index = ({ isMobile }) => {
	const [grabbing, setGrabbing] = useState(false);

	return (
		<Canvas
			onMouseDown={() => setGrabbing(true)}
			onMouseUp={() => setGrabbing(false)}
			camera={{ position: [2, 5, 15] }}
			className={`${styles.canvasContainer} ${grabbing ? styles.grabbing : ''} ${isMobile ? styles.isMobile : ''}`}
		>
			<Environment
				preset='warehouse'
			/>
			<ambientLight />
			<directionalLight position={[1, 1, 1]} />
			<OrbitControls enableZoom={false} position={[1, 1, 1]} />
			<Suspense fallback={null}>
				<Robot />
			</Suspense>
		</Canvas>
	);
};

export default Index;