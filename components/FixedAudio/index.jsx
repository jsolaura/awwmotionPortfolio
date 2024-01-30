"use client";

import React, {useRef, useState} from 'react';
import styles from './style.module.scss';
import sound from '/public/audio/1.mp3';
import useIsMobile from "../../hooks/useIsMobile";
const Index = () => {
	const [played, setPlayed] = useState(true);
	const audioRef = useRef(null);
	const isMobile = useIsMobile();

	const handleSound = () => {
		setPlayed(!played);
		if (audioRef?.current && played) {
			audioRef?.current.play();
		} else {
			audioRef?.current.pause();
		}
	}

	return (
		<div className={`${styles.fixed} ${isMobile ? styles.isMobile : ''}`}>
			<button onClick={handleSound} className={styles.audioBox}>
				Sound  <span>{!played ? 'on ' : 'off'}</span>
			</button>
			<audio ref={audioRef} onEnded={() => setPlayed(false)}>
				<source src={sound} type="audio/mp3" />
				Your browser does not support the audio element.
			</audio>
		</div>
	);
};

export default Index;