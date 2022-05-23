import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTranslationApi } from '../../api/translate';
import { Button } from '../button/button';
import Switch from 'react-switch';
import { TranslationArea } from '../translationArea/translationArea';
import styles from './translator.module.scss';

export const Translator: React.FunctionComponent = () => {
	const { t } = useTranslation();
	const api = useTranslationApi();
	const [autoTranslate, setAutoTranslate] = useState(false);

	return (
		<div className={styles.gridContainer} data-testid='translator'>
			<TranslationArea
				value={api.originalValue}
				onChange={api.setOriginalValue}
				onBlur={autoTranslate ? api.translate : () => {}}
				className={styles.textarea}
				placeholder={t('translator.typeHere')}
			/>

			<div className={styles.center}>
				<div className={styles.switchWrapper}>
					<label className={styles.switchLabel}>
						{t('translator.autoTranslate')}
					</label>
					<Switch
						onChange={setAutoTranslate}
						checked={autoTranslate}
						className={styles.switch}
					/>
				</div>

				<Button
					title={t('translator.translate')}
					as='primary'
					onClick={api.translate}
					className={styles.translateButton}
					disabled={!api.canTranslate}
				/>
				<Button
					title={t('translator.save')}
					as='secondary'
					onClick={api.save}
					className={styles.saveButton}
					disabled={!api.canSave}
				/>
			</div>

			<TranslationArea
				value={api.translatedValue}
				className={styles.textarea}
				placeholder={t('translator.translationThere')}
			/>
		</div>
	);
};
