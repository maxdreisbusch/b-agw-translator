import React, { useEffect } from 'react';
import { useDocument } from './documentHook';

interface DocumentHookExampleProps {
	numberOfPages: number;
	valuesChanged: (
		pageNumber: number,
		canGoNext: boolean,
		canGoPrevious: boolean
	) => void;
}

export const DocumentHookExample: React.FunctionComponent<
	DocumentHookExampleProps
> = (props: DocumentHookExampleProps) => {
	const {
		pageNumber,
		onDocumentLoadSuccess,
		handleNextPage,
		handlePreviousPage,
		canGoNext,
		canGoPrevious,
	} = useDocument();

	useEffect(() => {
		onDocumentLoadSuccess({ numPages: props.numberOfPages });
	}, [props]);

	useEffect(() => {
		props.valuesChanged(pageNumber, canGoNext, canGoPrevious);
	}, [pageNumber, canGoNext, canGoPrevious]);

	return (
		<>
			<button data-testid='previous' onClick={handlePreviousPage}>
				PREVIOUS
			</button>
			<button data-testid='next' onClick={handleNextPage}>
				NEXT
			</button>
		</>
	);
};
