"use client";

import React, {useState} from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import {useDispatch, useSelector} from "react-redux";
import {projectActions} from "../../redux/modules/projects";
import useIsMobile from "../../hooks/useIsMobile";

const animation = {
	initial: { width: 0 },
	open: { width: 'auto', transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } },
	closed: { width: 0 },
}

const Index = ({ project }) => {
	const dispatch = useDispatch();
	const [isActive, setIsActive] = useState(false);
	const { title1, title2, src } = project;
	const isMobile = useIsMobile();
	const handleOpenDetail = () => {
		dispatch(projectActions.setOpenDetail(true));
		dispatch(projectActions.setProjectObj(project));
	}
	return (
		<>
		<div
			onClick={handleOpenDetail}
			onMouseEnter={() => setIsActive(true)}
			onMouseLeave={() => setIsActive(false)}
			className={`${styles.project} ${isMobile ? styles.isMobile : ''}`}
		>
			<p>{title1}</p>
			{!isMobile &&
				<motion.div
					variants={animation}
					animate={isActive ? 'open' : 'closed'}
					className={styles.imgContainer}
				>
					<img src={`/images/${src}`} alt={title1} loading="lazy" className={styles.titleImage} />
				</motion.div>
			}
			<p>{title2}</p>
		</div>
		</>
	);
};

export default Index;