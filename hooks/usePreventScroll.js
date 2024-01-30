import {useEffect} from "react";
import {allowScroll, preventScroll} from "../utills/scroll";

const usePreventScroll = (open) => {
	useEffect(() => {
		if (open) {
			const preventScrollY = preventScroll();
			return () => {
				allowScroll(preventScrollY);
			}
		}
	}, [open])
}
export default usePreventScroll;