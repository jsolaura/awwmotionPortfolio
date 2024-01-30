"use client";

import React, {useRef} from 'react';
import styles from './style.module.scss';
import TextDisperse from "../../components/TextDisperse";
import gsap from 'gsap'
import ContactForm from "../../components/PortalContact";
import {useSelector} from "react-redux";
import Modal from "../../components/PortalModal";
import useIsMobile from "../../hooks/useIsMobile";

const IntroLine = ({ firstText, secondText }) => {
	return (
		<div className={styles.introLine}>
			<p>{firstText}</p>
			{ secondText && <p>{secondText}</p> }
		</div>
	)
}

const Index = () => {
	const background = useRef(null);
	const openContactForm = useSelector(({contact}) => contact.openContactForm);
	const isMobile = useIsMobile();
	const setBackground = (isActive) => {
		gsap.to(background.current, { opacity: isActive ? .8 : 0 })
	}
	return (
		<>
		<section id='contact' className={`${styles.main} ${isMobile ? styles.isMobile : ''}`}>
			<div className={styles.body}>
				<IntroLine firstText='KyeongEun' secondText='Jo' />
				<IntroLine firstText='Frontend' secondText='' />
				<IntroLine firstText='Developer' secondText='&' />
				<TextDisperse setBackground={setBackground}><p>+821056365269</p></TextDisperse>
				<TextDisperse setBackground={setBackground} cursor type='email'><p>→Email</p></TextDisperse>
				<TextDisperse setBackground={setBackground} cursor type='github'><p>→Github</p></TextDisperse>
			</div>
			<div ref={background} className={styles.background} />
		</section>
		{openContactForm
			? <Modal portalElement={document.getElementById('portal-contact')}><ContactForm /></Modal>
			: null
		}
		</>
	);
};

export default Index;