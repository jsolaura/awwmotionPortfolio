"use client";

import React, {useEffect, useRef} from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import styles from './style.module.scss';
import Image from "next/image";
import Picture1 from '/public/images/1-2.jpg';
import Picture2 from '/public/images/2-1.jpg';
import Picture3 from '/public/images/3-1.jpg';
import Picture4 from '/public/images/4-1.jpg';
import Picture5 from '/public/images/5-2.jpg';
import Picture6 from '/public/images/6-1.jpg';
import Picture7 from '/public/images/7-2.jpg';
import Lenis from "@studio-freight/lenis";
import ImagePlaceholder from "../ImagePlaceholder";

const Card = ({ i, src, color, progress, range, targetScale }) => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'start start']
	})

	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<div ref={container} className={styles.cardContainer}>
			<motion.div
				style={{backgroundColor: color, scale, top:`calc(-5vh + ${i * 25}px)`}}
				className={styles.card}
			>
				<div className={styles.imageContainer}>
					<motion.div
						className={styles.inner}
						style={{scale: imageScale}}
					>
						<ImagePlaceholder
							fill
							src={src}
							alt="image"
						/>
					</motion.div>
				</div>
			</motion.div>
		</div>
	)
}
const CardParallax = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end']
	})

	useEffect( () => {
		const lenis = new Lenis()

		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	})

	const pictures = [
		{ src: Picture1, color: '#BBACAF', },
		{ src: Picture2, color: '#977F6D', },
		{ src: Picture3, color: '#C2491D', },
		{ src: Picture4, color: '#B62429', },
		{ src: Picture5, color: '#88A28D', },
		{ src: Picture6, color: '#BBACAF', },
		{ src: Picture7, color: '#977F6D', },
	]
	return (
		<article ref={container} className={styles.cardWrap}>
			{pictures.map((picture, i) => {
				const targetScale = 1 - ( (picture.length - i) * 0.05);
				return <Card key={`p_${i}`} i={i} {...picture} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
			})}
		</article>
	);
};

export default CardParallax;