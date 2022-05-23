import { useCallback, useState } from 'react';

export const useDocument = () => {
	const [numPages, setNumPages] = useState<number | null>(null);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = useCallback(
		({ numPages }: { numPages: number }) => {
			setNumPages(numPages);
		},
		[]
	);

	const handlePreviousPage = useCallback(() => {
		if (pageNumber === 1) return;
		setPageNumber(pageNumber - 1);
	}, [pageNumber]);

	const handleNextPage = useCallback(() => {
		if (pageNumber === numPages) return;
		setPageNumber(pageNumber + 1);
	}, [pageNumber, numPages]);

	return {
		pageNumber,
		onDocumentLoadSuccess,
		handleNextPage,
		handlePreviousPage,
		canGoNext: pageNumber !== numPages,
		canGoPrevious: pageNumber !== 1,
	};
};
