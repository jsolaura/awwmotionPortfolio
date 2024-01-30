"use client";

import React, {useState} from 'react';
import Button from './ButtonNav/Button';
import styles from './style.module.scss';
import {AnimatePresence, motion} from 'framer-motion';
import ButtonNav from './ButtonNav';
import Nav from './Nav';
import Image from "next/image";
import Link from "next/link";
import useIsMobile from "../../hooks/useIsMobile";

const menu = {
	open: {
		width: "480px",
		height: "650px",
		top: "-25px",
		right: "-25px",
		transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]},
	},
	closed: {
		width: "100px",
		height: "40px",
		top: "0px",
		right: "0px",
		transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
	}
}

const Index = () => {
	const [isActive, setIsActive] = useState(false);
	const isMobile = useIsMobile();
	const imageResize = !isMobile ? 100 : 80;
	return (
		<div className={`${styles.header} ${isMobile ? styles.isMobile : ''}`}>
			<Link href='#' className={styles.logoImage}>
				<Image src='/images/me.jpeg' alt='myLogo' width={imageResize} height={imageResize} style={{ width: imageResize, height: imageResize }} priority={false} />
			</Link>
			<Nav />
			{!isMobile &&
				<>
				<motion.div
					className={styles.menu}
					variants={menu}
					animate={isActive ? "open" : "closed"}
					initial="closed"
				>
					<AnimatePresence>
						{isActive && <ButtonNav />}
					</AnimatePresence>
				</motion.div>
				<Button isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}}/>
				</>
			}
		</div>
	);
};

export default Index;