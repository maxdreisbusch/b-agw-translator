import React from 'react';
import { Translator } from '../components/translator/translator';
import styles from './home.module.scss';

export const HomePage: React.FunctionComponent = () => {
	return (
		<main className={styles.main}>
			<Translator />
			<div className={styles.videoContainer}>
				<video controls className={styles.player}>
					<source src='/tutorial-original.mp4' type='video/mp4' />
					Your browser does not support the video tag.
				</video>
			</div>
		</main>
	);
};
