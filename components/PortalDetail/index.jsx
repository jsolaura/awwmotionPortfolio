import React from 'react';
import styles from './style.module.scss';
import CurveTransition from '../CurveTransition';
import bg from '/public/images/back.jpg';
import ArrowIcon from "../Icons/ArrowIcon";
import {projectActions} from "../../redux/modules/projects";
import {useDispatch, useSelector} from "react-redux";
import usePreventScroll from "../../hooks/usePreventScroll";
import useIsMobile from "../../hooks/useIsMobile";

const Index = ({ project }) => {
	const dispatch = useDispatch();
	const openDetail = useSelector(({projects}) => projects.openDetail);
	const isMobile = useIsMobile();
	const backButtonSize = !isMobile ? 100 : 40
	usePreventScroll(openDetail);
	const handleCloseDetail = () => {
		dispatch(projectActions.setOpenDetail(false))
	}
	return (
		<CurveTransition title={project.title1}>
			<div
				className={`${styles.detailWrap} ${isMobile ? styles.isMobile : ''}`}
				style={{ backgroundImage: `url(${bg.src})` }}
			>
				<div className={styles.fakeBg} />
				<div className={styles.detailInfo}>
					<button className={styles.goBack} onClick={handleCloseDetail}>
						<ArrowIcon width={backButtonSize} height={backButtonSize} fill='#a58b63' />
					</button>
					<div className={styles.leftBox}>
						<h1>{project?.title1}<span>{project?.title2}</span></h1>
						{project?.subTitle &&
							<p>{project?.subTitle}</p>
						}
						<img src={`/images/${project?.src}`} alt={project?.title1} loading="lazy" />
						{project?.link &&
							<button>
								<a href={project?.link} target='_blank'>More View</a>
							</button>
						}
					</div>
					<div className={styles.rightBox}>
						{project?.description}
					</div>
				</div>
			</div>
		</CurveTransition>
	)
};

export default Index;