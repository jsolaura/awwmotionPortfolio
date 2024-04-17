"use client";

import React from 'react';
import {Skill_data} from "../../constans/skillsData";
import styles from './style.module.scss';
import Project from '../../components/Project';
import SkillDataProvider from '../../components/SkillDataProvider';
import StarIcon from "../../components/Icons/StarIcon";
import {Noto_Sans_KR} from "next/font/google";
import Detail from "../../components/PortalDetail";
import {useSelector} from "react-redux";
import {featuredWork, projectsData} from "../../constans/projectsData";
import Modal from "../../components/PortalModal";
import useIsMobile from "../../hooks/useIsMobile";
const notoSansKR = Noto_Sans_KR({
	subsets: ['latin'],
	display: 'swap'
})

const Index = () => {
	const openDetail = useSelector(({projects}) => projects.openDetail);
	const projectObj = useSelector(({projects}) => projects.projectObj);
	const isMobile = useIsMobile();
	return (
		<>
		<section id='projects' className={`${styles.projects} ${isMobile ? styles.isMobile : ''}`}>
			<article>
				<h1 className={notoSansKR.className}>
					<StarIcon width={50} height={50} fill='#fcdcc4' />
					<span>Skills</span>
				</h1>
				<div className={styles.group}>
					{Skill_data.map((image, index) => (
						<React.Fragment key={`skill_${index}`}>
							<SkillDataProvider
								src={image.Image}
								width={image.width}
								height={image.height}
								index={index}
							/>
						</React.Fragment>
					))}
				</div>
			</article>
			<article>
				<h1 className={notoSansKR.className}>
					<StarIcon width={50} height={50} fill='#fcdcc4' />
					<span>Featured Work</span>
				</h1>
				<div className={styles.gallery}>
					{featuredWork.map((project, index) => (
						<React.Fragment key={`featuredWork_${index}`}>
							<Project project={project} />
						</React.Fragment>
					))}
				</div>
			</article>
			<article>
				<h1 className={notoSansKR.className}>
					<StarIcon width={50} height={50} fill='#fcdcc4' />
					<span>Selected Project {isMobile && <br/>}OR Mini app/games</span>
				</h1>
				<div className={styles.gallery}>
					{projectsData.map((project, index) => (
						<React.Fragment key={`project_${index}`}>
							<Project project={project} />
						</React.Fragment>
					))}
				</div>
			</article>
		</section>
		{openDetail
			? <Modal portalElement={document.getElementById('portal-detail')}><Detail project={projectObj} /></Modal>
			: null
		}
		</>
	);
};

export default Index;