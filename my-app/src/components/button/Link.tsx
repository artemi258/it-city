import { NavLink } from 'react-router-dom';
import './link.scss';

export const Link = ({
	text,
	to,
	className
}: {
	text: string;
	to: string;
	className?: string | undefined;
}) => {
	let isActive = ({ isActive }: { isActive: boolean }): string =>
		isActive ? 'link link__active' : 'link';

	return (
		<NavLink to={to} className={className ? `${isActive} ${className}` : isActive}>
			{text}
		</NavLink>
	);
};
