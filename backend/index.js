exports.handler = async (event) => {
	const data = JSON.parse(event.body);
	const translatedText = data.originalText.toUpperCase();
	return {
		statusCode: 200,
		body: JSON.stringify({ translatedText }),
	};
};
