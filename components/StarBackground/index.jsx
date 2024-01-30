"use client";

import React, { useState, useRef, Suspense } from "react";
import styles from './style.module.scss';
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props) => {
	const ref = useRef(null);
	const [sphere] = useState(() =>
		random.inSphere(new Float32Array(5000), { radius: 1.2 })
	);

	useFrame((state, delta) => {
		ref.current.rotation.x -= delta/10;
		ref.current.rotation.y -= delta/15;
	})
	return (
		<group rotation={[0,0, Math.PI / 4]}>
			<Points
				ref={ref}
				positions={sphere}
				stride={3}
				frustumCulled
				{...props}
			>
				<PointMaterial
					transparent
					color="#fff"
					size={0.002}
					sizeAttenuation={true}
					dethWrite={false}
				/>
			</Points>
		</group>
	)
}

const Index = () => {
	return (
		<div className={styles.starWrap}>
			<Canvas camera={{position: [0, 0, 1]}}>
				<Suspense fallback={null}>
					<StarBackground />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default Index;