/** @format */

export const handleClickAnimation = ({ target }) => {
	target.style.scale = '0.9';
	setTimeout(() => (target.style.scale = '1'), 80);
};
