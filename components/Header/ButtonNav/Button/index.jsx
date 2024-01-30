import React from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';

const Index = ({ isActive, toggleMenu }) => {

	return (
		<div className={styles.button} onClick={toggleMenu}>
			<motion.div
				className={styles.slider}
				animate={{ top: isActive ? '-100%' : '0' }}
				transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
			>
				<div className={styles.el}>
					<PerspectiveText label='Menu' />
					<p>Menu</p>
				</div>
				<div className={styles.el}>
					<PerspectiveText label='Close' />
					<p>Close</p>
				</div>
			</motion.div>
		</div>
	);
};

const PerspectiveText = ({ label }) => {
	return (
		<div className={styles.perspectiveText}>
			<p>{label}</p>
			<p>{label}</p>
		</div>
	)
}

export default Index;