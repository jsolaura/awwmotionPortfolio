"use client";

import React, {useRef} from 'react';
import {useScroll, useTransform} from "framer-motion";
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import Image from "next/image";
import Picture1 from '/public/images/1-2.jpg';
import Picture2 from '/public/images/2-1.jpg';
import Picture3 from '/public/images/3-1.jpg';
import Picture4 from '/public/images/4-1.jpg';
import Picture5 from '/public/images/5-2.jpg';
import Picture6 from '/public/images/6-1.jpg';
import Picture7 from '/public/images/7-2.jpg';
import ImagePlaceholder from "../ImagePlaceholder";

const ZoomParallax = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end']
	})
	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
	const pictures = [
		{ src: Picture1, scale: scale4, isVideo: true },
		{ src: Picture2, scale: scale5 },
		{ src: Picture3, scale: scale6 },
		{ src: Picture4, scale: scale5 },
		{ src: Picture5, scale: scale6 },
		{ src: Picture6, scale: scale8 },
		{ src: Picture7, scale: scale9 },
	]
	return (
		<div ref={container} className={styles.container}>
			<div className={styles.sticky}>
				{pictures.map(({ src, scale, isVideo }, index) => (
					<motion.div key={`picture_${index}`} style={{ scale }} className={styles.el}>
						<div className={styles.imageContainer}>
							<ImagePlaceholder
								fill
								src={src}
								alt={`image${index}`}
							/>
						</div>
					</motion.div>
				))}
			</div>

		</div>
	);
};

export default ZoomParallax;