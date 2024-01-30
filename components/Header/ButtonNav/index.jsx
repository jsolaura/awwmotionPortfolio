import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { links, footerLinks } from '../../../constans/linkData';
import { perspective, slideIn } from "./motion";
import Link from "next/link";

export default function index() {
	return (
		<div className={styles.nav}>
			<div className={styles.body}>
				{links.map( (link, index) => (
					<div key={`button_${index}`} className={styles.linkContainer}>
						<motion.div
							href={link.href}
							custom={index}
							variants={perspective}
							initial="initial"
							animate="enter"
							exit="exit"
						>
							<Link href={link.href}>
								{link.title}
							</Link>
						</motion.div>
					</div>
				))
				}
			</div>
			<motion.div className={styles.footer}>
				{footerLinks.map((link, index) => (
					<motion.a
						key={`footer_${index}`}
						variants={slideIn}
						custom={index}
						initial="initial"
						animate="enter"
						exit="exit"
						href={link.href}
						target='_blank'
					>
						{link.title}
					</motion.a>
				))
				}
			</motion.div>
		</div>
	)
}