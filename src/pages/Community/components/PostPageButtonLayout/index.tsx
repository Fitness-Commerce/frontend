import { PageButton, PaginationContainer } from "./styled";

interface PostPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PostPagination = ({
    currentPage,
    totalPages,
    onPageChange,
}: PostPaginationProps) => {
    const pagesPerGroup = Math.min(10, totalPages);
    const startPage =
        Math.floor((currentPage - 1) / pagesPerGroup) * pagesPerGroup + 1;

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;
        onPageChange(newPage);
    };

    return (
        <PaginationContainer>
            {startPage !== 1 && (
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

export default PostPagination;
