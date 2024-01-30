import React from 'react';

const StarIcon = ({ fill, width, height }) => {
	return (
		<svg width={width} height={height} viewBox="-1.6 -1.6 19.20 19.20" version="1.1" xmlns="http://www.w3.org/2000/svg"
		     stroke="#defbbc" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
			<g id="SVGRepo_bgCarrier" strokeWidth="0" />
			<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
			<g id="SVGRepo_iconCarrier"><title>107</title>
				<defs />
				<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<path
						d="M9.601,6.4 L8,0 L6.398,6.4 L0,8 L6.398,9.601 L8,16 L9.601,9.601 L16,8 L9.601,6.4 L9.601,6.4 Z M8,9.334 C7.264,9.334 6.668,8.736 6.668,8 C6.668,7.264 7.264,6.667 8,6.667 C8.736,6.667 9.333,7.264 9.333,8 C9.333,8.736 8.736,9.334 8,9.334 L8,9.334 Z"
						fill={fill} className="si-glyph-fill" />
				</g>
			</g>
		</svg>
	);
};

export default StarIcon;