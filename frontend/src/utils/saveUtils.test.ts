import { getSaveText } from './saveUtils';

test('creates a text to export', () => {
	const originalText = 'Hallo, das bin ich\nich bin...';
	const translatedText = originalText.toUpperCase();

	expect(getSaveText(originalText, translatedText)).toBe(
		'---------- ORIGINAL ----------\nHallo, das bin ich\nich bin...\n\n\n---------- TRANSLATION ----------\nHALLO, DAS BIN ICH\nICH BIN...'
	);
});
