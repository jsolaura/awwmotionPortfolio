"use client";

import React from 'react';
import styles from './style.module.scss';
import StarBackground from "../../components/StarBackground";
import RobotCanvas from '../../components/RobotCanvas';
import useIsMobile from "../../hooks/useIsMobile";

const Index = () => {
	const isMobile = useIsMobile();
	return (
		<section className={`${styles.main} ${isMobile ? styles.isMobile : ''}`}>
			<StarBackground />
			<div className={styles.textContainer}>
				<div className={styles.top}>
					<div className={styles.left}>
						<h2>multi -</h2>
						<h1>proactive</h1>
						<h1>developer</h1>
					</div>
					<RobotCanvas isMobile={isMobile}/>
				</div>
				<div className={styles.sub}>
					<h3>
						I am frontend developer based in seoul<br/>
						I have three years of experience about this job<br/>
						And i would like to build and develop<br/>
						creativity, meaningful stuff<br/>
						All the situation. I love communicate<br/>
						When I get stress. I love walking and nature
					</h3>
				</div>
			</div>
		</section>
	);
};

export default Index;