import classNames from 'classnames';
import React from 'react';
import styles from './switch.module.scss';

export const Switch: React.FunctionComponent = () => {
	return (
		<label className={styles.switch}>
			<input type={styles.checkbox} />
			<span className={classNames(styles.slider, styles.round)}></span>
		</label>
	);
};
