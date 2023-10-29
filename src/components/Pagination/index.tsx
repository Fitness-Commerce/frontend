import { Dispatch, SetStateAction } from "react";
import { PageButton, PaginationContainer } from "./styled";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: Dispatch<SetStateAction<number>>;
}

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) => {
    const pagesPerGroup = Math.min(10, totalPages);
    const startPage =
        Math.floor((currentPage - 1) / pagesPerGroup) * pagesPerGroup + 1;

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;
        onPageChange(() => newPage);
    };

    return (
        <PaginationContainer>
            {startPage > 1 && (
                <>
                    <PageButton onClick={() => handlePageChange(startPage - 1)}>
                        Previous
                    </PageButton>
                    ...
                </>
            )}
            {Array.from({ length: pagesPerGroup }, (_, i) => startPage + i)
                .filter((pageNum) => pageNum <= totalPages)
                .map((pageNum) => (
                    <PageButton
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                    >
                        {pageNum}
                    </PageButton>
                ))}
            {startPage + pagesPerGroup <= totalPages && (
                <>
                    ...
                    <PageButton
                        onClick={() =>
                            handlePageChange(startPage + pagesPerGroup)
                        }
                    >
                        Next
                    </PageButton>
                </>
            )}
        </PaginationContainer>
    );
};

export default Pagination;
