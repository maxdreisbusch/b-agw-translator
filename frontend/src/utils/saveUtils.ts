export const getSaveText = (originalText: string, translatedText: string) => {
	return `---------- ORIGINAL ----------\n${originalText}\n\n\n---------- TRANSLATION ----------\n${translatedText}`;
};
