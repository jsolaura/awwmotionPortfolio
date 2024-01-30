"use client";

import React, {useState} from 'react';
import { motion } from "framer-motion";
import {disperse} from "./motion";
import {useDispatch, useSelector} from "react-redux";
import {contactActions} from "../../redux/modules/contact";
import styles from '../../app/contact/style.module.scss';

const TextDisperse = ({ children, setBackground, cursor, type }) => {
	const [isAnimated, setIsAnimated] = useState(false);
	const dispatch = useDispatch();
	const openContactForm = useSelector(({contact}) => contact.openContactForm);
	const getChars = (el) => {
		let chars = [];
		const word = el?.props?.children;
		word?.split('').forEach((char, i) => {
			chars.push(
				<motion.span
					key={char + i}
					custom={i}
					variants={disperse}
					animate={isAnimated ? 'open' : 'closed'}
				>
					{char}
				</motion.span>
			)
		})
		return chars;
	}

	const manageMouseEnter = () => {
		setIsAnimated(true);
		setBackground(true);
	}
	const manageMouseLeave = () => {
		setIsAnimated(false);
		setBackground(false);
	}
	const handleContact = () => {
		switch (type) {
			case 'github':
				window.open('https://github.com/jsolaura', '_blank', 'noopener,noreferrer');
				break;
			case 'email':
				dispatch(contactActions.setOpenContactForm(true));
				break;
			default: return false;
		}
		if (type === 'github') {
			window.open('https://github.com/jsolaura', '_blank', 'noopener,noreferrer');
		}
	}
	return (
		<div
			className={styles.introLine}
			style={{ cursor: cursor ? 'pointer': 'default' }}
			onMouseEnter={() => manageMouseEnter()}
			onMouseLeave={() => manageMouseLeave()}
			onClick={handleContact}
		>
			{getChars(children)}
		</div>
	);
};

export default TextDisperse;