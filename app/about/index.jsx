"use client";

import React, {useEffect, useRef} from 'react';
import ZoomParallax from "../../components/ZoomParallax";
import Lenis from "@studio-freight/lenis";
import styles from './style.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import {Noto_Sans_KR} from "next/font/google";
import useIsMobile from "../../hooks/useIsMobile";
import CardParallax from "../../components/CardParallax";
const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] })
const phrase = `Jsolaura is a person that\n build alter-ego multidisciplinary development.\n We can’t predict the future even in a minute,\n we get to think of life as an inexhaustible well.\n Yet everything happens only a certain number of times, and even we can’t remember every single moment.\n How many more times will you bring thought up of a certain afternoon in your childhood,\n some afternoon that might be so deeply\n a part of your being that can't imagine without it?\n Perhaps five or six times more, Perhaps not even that.\n How many more times will you go somewhere what you want to?\n Perhaps thirty three times,\n And yet it all seems limitless like it wouldn't make sense to count.\n we are stuck in the time-lapse.\n I catch invisible things there and then make that powerful stuff.`

const Index = () => {
	let refs = useRef([]);
	const wordBody = useRef(null);
	const container = useRef(null);
	const isMobile = useIsMobile();

	const createAnimation = () => {
		gsap.to(refs.current, {
			scrollTrigger: {
				trigger: container?.current,
				start: 'start',
				end: `+=${window.innerHeight / 1.5}`,
				scrub: true,
			},
			opacity: 1,
			ease: 'none',
			stagger: 0.1
		})
	}

	const splitWords = (phrase) => {
		let wordBody = [];
		phrase.split(' ').forEach((word, i) => {
			const letters = splitLetters(word);
			wordBody.push(
				<React.Fragment key={word + "_" + i}>
					<p>{letters}</p>
					{word.includes('\n') && <p className={styles.basis} />}
				</React.Fragment>
			)
		})
		return wordBody
	}

	const splitLetters = (word) => {
		let letters = []
		word.split('').forEach((letter, i) => {
			letters.push(
				<span
					key={letter + "_" + i}
					ref={el => {refs.current.push(el)}}
				>
					{letter}
				</span>
			)
		})

		return letters;
	}
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		createAnimation();
	}, []);

	useEffect(() => {
		const lenis = new Lenis();
		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	}, [])

	return (
		<section id='about' className={`${styles.about} ${isMobile ? styles.isMobile : ''} ${notoSansKR.className}`}>
			{!isMobile ?
				<ZoomParallax />
				: <CardParallax />
			}
			<div ref={container} className={styles.myGif}>
				<Image src='/images/anigif.gif' alt='myGif' width={500} height={350} style={{ width: '500px', height: '350px' }} />
			</div>
			<div className={styles.infoContainer}>
				<div ref={wordBody} className={styles.wordBody} >
					{splitWords(phrase)}
				</div>
			</div>
		</section>
	);
};

export default Index;