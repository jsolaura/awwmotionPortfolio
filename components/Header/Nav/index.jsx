import React from 'react';
import styles from "../style.module.scss";
import {links} from "../../../constans/linkData";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Index = () => {
	const pathname = usePathname();
	return (
		<nav>
			<ul className={styles.headerNav}>
				{links.map((link, index) => (
					<li key={`header_${index}`} className={pathname === link.href ? styles.active : ''}>
						<Link href={link.href}>{link.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Index;