import axios from 'axios';
import { useCallback, useState } from 'react';
import { getSaveText } from '../utils/saveUtils';

const translationUrl = process.env.REACT_APP_TRANSLATION_API ?? '';
export const translateText = async (originalText: string) =>
	axios.post(translationUrl, { originalText });

export const useTranslationApi = (liveTranslation: boolean = false) => {
	const [originalValue, setOriginalValue] = useState('');
	const [translatedValue, setTranslatedValue] = useState('');
	const [isOriginalValueChanged, setIsOriginalValueChanged] = useState(false);

	const handleSetOriginalValue = useCallback(
		(value: string) => {
			setOriginalValue(value);
			if (!isOriginalValueChanged) {
				setIsOriginalValueChanged(true);
			}
		},
		[isOriginalValueChanged]
	);

	const translate = useCallback(async () => {
		const translatedText = await translateText(originalValue);
		setTranslatedValue(translatedText.data.translatedText);
		setIsOriginalValueChanged(false);
	}, [originalValue]);

	const save = useCallback(() => {
		const element = document.createElement('a');
		const file = new Blob([getSaveText(originalValue, translatedValue)], {
			type: 'text/plain',
		});
		element.href = URL.createObjectURL(file);
		element.download = 'myTranslation.txt';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	}, [originalValue, translatedValue]);

	return {
		translate,
		save,
		originalValue,
		setOriginalValue: handleSetOriginalValue,
		translatedValue,
		canTranslate: isOriginalValueChanged,
		canSave: !isOriginalValueChanged && translatedValue.length > 0,
	};
};
