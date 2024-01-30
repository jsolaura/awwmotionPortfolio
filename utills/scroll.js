export const preventScroll = () => {
	const currentScrollY = window.scrollY;
	document.body.style.position = 'fixed';
	document.body.style.width = '100vw';
	document.body.style.top = `${currentScrollY}px`;
	return currentScrollY;
}
export const allowScroll = (preventScrollY) => {
	document.body.style.position = '';
	document.body.style.width = '';
	document.body.style.top = ``;
	document.getElementById('html').classList.add('lenis-scrolling');
	window.scrollTo({left: 0, top: preventScrollY, behavior: 'auto'});
}