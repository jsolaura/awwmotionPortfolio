"use client";

import styles from './style.module.scss';
import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion'
import {curve, text, translate} from "./motion";

const animation = (variants) => {
	return {
		variants,
		initial: "initial",
		animate: "enter",
		exit: "exit"
	}
}
const Index = ({ children, backgroundColor, title }) => {
	const [dimensions, setDimensions] = useState({
		width: null,
		height: null
	})
	useEffect(() => {
		const resize = () => {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}
		resize();
		window.addEventListener('resize', resize);
		return () => {
			window.removeEventListener('resize', resize)
		}
	}, [])
	return (
		<div className={styles.curve} style={{ backgroundColor }}>
			<div style={{ opacity: dimensions.width == null ? 1 : 0 }} className={styles.background} />
			<motion.p className={styles.route} {...animation(text)}>
				{title}
			</motion.p>
			{dimensions.width != null && <SVG {...dimensions} />}
			{children}
		</div>
	);
};
const SVG = ({ height, width }) => {

	const initialPath = `
        M0 300 
        Q${width/2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width/2} ${height + 600} 0 ${height + 300}
        L0 0
    `

	const targetPath = `
        M0 300
        Q${width/2} 0 ${width} 300
        L${width} ${height}
        Q${width/2} ${height} 0 ${height}
        L0 0
    `

	return (
		<motion.svg {...animation(translate)} className={styles.svg}>
			<motion.path {...animation(curve(initialPath, targetPath))} />
		</motion.svg>
	)
}

export default Index;