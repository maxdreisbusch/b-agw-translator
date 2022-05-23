import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './header.module.scss';
import { useToggle } from '../../hooks/toggleHook';
import { Hamburger } from './hamburger';
import { RoutingConstants } from '../../utils/routingConstants';
import { useNavigate } from 'react-router-dom';

const menuItems = [
	{
		titleKey: 'home',
		target: RoutingConstants.home,
	},
	{
		titleKey: 'about',
		target: RoutingConstants.about,
	},
	{
		titleKey: 'contact',
		target: RoutingConstants.contact,
	},
];

export const Header: React.FunctionComponent = () => {
	const { value: isMobileMenuOpen, toggle: toggleMenu } = useToggle(false);
	const { t } = useTranslation();
	const navigate = useNavigate();

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<span className={styles.logo} data-testid='logo'>
					<b>WBH</b>translate
				</span>
				<Hamburger isOpen={isMobileMenuOpen} onClick={toggleMenu} />
				<nav
					className={classNames(styles.topNav, {
						[styles.topNav__open]: isMobileMenuOpen,
					})}>
					<ul className={styles.navigation} data-testid='navigationContainer'>
						{menuItems.map((item) => (
							<li
								className={styles.item}
								key={item.titleKey}
								data-testid='navigationItem'
								onClick={() => {
									navigate(item.target);
									toggleMenu();
								}}>
								{t(`menuBar.${item.titleKey}`)}
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
};
