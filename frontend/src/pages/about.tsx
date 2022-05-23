import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Button } from '../components/button/button';
import styles from './about.module.scss';
import { useDocument } from '../hooks/documentHook';
import { useTranslation } from 'react-i18next';

export const AboutPage: React.FunctionComponent = () => {
	const { t } = useTranslation();
	const document = useDocument();

	return (
		<main className={styles.main}>
			<div className={styles.container} data-testid='document'>
				<Document
					file='about.pdf'
					onLoadSuccess={document.onDocumentLoadSuccess}>
					<Page pageNumber={document.pageNumber} />
				</Document>
			</div>
			<div className={styles.pagination}>
				<Button
					title={t('document.previous')}
					onClick={document.handlePreviousPage}
					disabled={!document.canGoPrevious}
				/>
				<Button
					title={t('document.next')}
					onClick={document.handleNextPage}
					disabled={!document.canGoNext}
				/>
			</div>
		</main>
	);
};
