import { useState, useEffect } from 'react';

const useScroll = () => {
	const [scrollData, setScrollData] = useState({ x: 0, y: 0 });

	const handleScroll = (e) => {
		if (e.path)
			setScrollData({
				x: e.path[1].scrollX,
				y: e.path[1].scrollY,
			});
		else
			setScrollData({
				x: e.target.scrollingElement.scrollLeft,
				y: e.target.scrollingElement.scrollTop,
			});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return scrollData;
};

export default useScroll;
